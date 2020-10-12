/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
  var n, r, i = typeof t,
      o = e.document,
      a = e.location,
      s = e.jQuery,
      u = e.$,
      l = {},
      c = [],
      p = "1.9.1",
      f = c.concat,
      d = c.push,
      h = c.slice,
      g = c.indexOf,
      m = l.toString,
      y = l.hasOwnProperty,
      v = p.trim,
      b = function(e, t) {
          return new b.fn.init(e, t, r)
      },
      x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      w = /\S+/g,
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      k = /^[\],:{}\s]*$/,
      E = /(?:^|:|,)(?:\s*\[)+/g,
      S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      j = /^-ms-/,
      D = /-([\da-z])/gi,
      L = function(e, t) {
          return t.toUpperCase()
      },
      H = function(e) {
          (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
      },
      q = function() {
          o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
      };
  b.fn = b.prototype = {
      jquery: p,
      constructor: b,
      init: function(e, n, r) {
          var i, a;
          if (!e) return this;
          if ("string" == typeof e) {
              if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
              if (i[1]) {
                  if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                      for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                  return this
              }
              if (a = o.getElementById(i[2]), a && a.parentNode) {
                  if (a.id !== i[2]) return r.find(e);
                  this.length = 1, this[0] = a
              }
              return this.context = o, this.selector = e, this
          }
          return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
      },
      selector: "",
      length: 0,
      size: function() {
          return this.length
      },
      toArray: function() {
          return h.call(this)
      },
      get: function(e) {
          return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
      },
      pushStack: function(e) {
          var t = b.merge(this.constructor(), e);
          return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
          return b.each(this, e, t)
      },
      ready: function(e) {
          return b.ready.promise().done(e), this
      },
      slice: function() {
          return this.pushStack(h.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      map: function(e) {
          return this.pushStack(b.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: d,
      sort: [].sort,
      splice: [].splice
  }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
      var e, n, r, i, o, a, s = arguments[0] || {},
          u = 1,
          l = arguments.length,
          c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
          if (null != (o = arguments[u]))
              for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
      return s
  }, b.extend({
      noConflict: function(t) {
          return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? b.readyWait++ : b.ready(!0)
      },
      ready: function(e) {
          if (e === !0 ? !--b.readyWait : !b.isReady) {
              if (!o.body) return setTimeout(b.ready);
              b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
          }
      },
      isFunction: function(e) {
          return "function" === b.type(e)
      },
      isArray: Array.isArray || function(e) {
          return "array" === b.type(e)
      },
      isWindow: function(e) {
          return null != e && e == e.window
      },
      isNumeric: function(e) {
          return !isNaN(parseFloat(e)) && isFinite(e)
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
      },
      isPlainObject: function(e) {
          if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
          try {
              if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
          } catch (n) {
              return !1
          }
          var r;
          for (r in e);
          return r === t || y.call(e, r)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      error: function(e) {
          throw Error(e)
      },
      parseHTML: function(e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && (n = t, t = !1), t = t || o;
          var r = C.exec(e),
              i = !n && [];
          return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
      },
      parseJSON: function(n) {
          return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
      },
      parseXML: function(n) {
          var r, i;
          if (!n || "string" != typeof n) return null;
          try {
              e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
          } catch (o) {
              r = t
          }
          return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
      },
      noop: function() {},
      globalEval: function(t) {
          t && b.trim(t) && (e.execScript || function(t) {
              e.eval.call(e, t)
          })(t)
      },
      camelCase: function(e) {
          return e.replace(j, "ms-").replace(D, L)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, n) {
          var r, i = 0,
              o = e.length,
              a = M(e);
          if (n) {
              if (a) {
                  for (; o > i; i++)
                      if (r = t.apply(e[i], n), r === !1) break
              } else
                  for (i in e)
                      if (r = t.apply(e[i], n), r === !1) break
          } else if (a) {
              for (; o > i; i++)
                  if (r = t.call(e[i], i, e[i]), r === !1) break
          } else
              for (i in e)
                  if (r = t.call(e[i], i, e[i]), r === !1) break; return e
      },
      trim: v && !v.call("\ufeff\u00a0") ? function(e) {
          return null == e ? "" : v.call(e)
      } : function(e) {
          return null == e ? "" : (e + "").replace(T, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
      },
      inArray: function(e, t, n) {
          var r;
          if (t) {
              if (g) return g.call(t, e, n);
              for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                  if (n in t && t[n] === e) return n
          }
          return -1
      },
      merge: function(e, n) {
          var r = n.length,
              i = e.length,
              o = 0;
          if ("number" == typeof r)
              for (; r > o; o++) e[i++] = n[o];
          else
              while (n[o] !== t) e[i++] = n[o++];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          var r, i = [],
              o = 0,
              a = e.length;
          for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
          return i
      },
      map: function(e, t, n) {
          var r, i = 0,
              o = e.length,
              a = M(e),
              s = [];
          if (a)
              for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
          else
              for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
          return f.apply([], s)
      },
      guid: 1,
      proxy: function(e, n) {
          var r, i, o;
          return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
              return e.apply(n || this, r.concat(h.call(arguments)))
          }, i.guid = e.guid = e.guid || b.guid++, i) : t
      },
      access: function(e, n, r, i, o, a, s) {
          var u = 0,
              l = e.length,
              c = null == r;
          if ("object" === b.type(r)) {
              o = !0;
              for (u in r) b.access(e, n, u, r[u], !0, a, s)
          } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                  return c.call(b(e), n)
              })), n))
              for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
          return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
      },
      now: function() {
          return (new Date).getTime()
      }
  }), b.ready.promise = function(t) {
      if (!n)
          if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
          else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
      else {
          o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
          var r = !1;
          try {
              r = null == e.frameElement && o.documentElement
          } catch (i) {}
          r && r.doScroll && function a() {
              if (!b.isReady) {
                  try {
                      r.doScroll("left")
                  } catch (e) {
                      return setTimeout(a, 50)
                  }
                  q(), b.ready()
              }
          }()
      }
      return n.promise(t)
  }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
  });

  function M(e) {
      var t = e.length,
          n = b.type(e);
      return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  r = b(o);
  var _ = {};

  function F(e) {
      var t = _[e] = {};
      return b.each(e.match(w) || [], function(e, n) {
          t[n] = !0
      }), t
  }
  b.Callbacks = function(e) {
      e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
      var n, r, i, o, a, s, u = [],
          l = !e.once && [],
          c = function(t) {
              for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                  if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                      r = !1;
                      break
                  }
              n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
          },
          p = {
              add: function() {
                  if (u) {
                      var t = u.length;
                      (function i(t) {
                          b.each(t, function(t, n) {
                              var r = b.type(n);
                              "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                          })
                      })(arguments), n ? o = u.length : r && (s = t, c(r))
                  }
                  return this
              },
              remove: function() {
                  return u && b.each(arguments, function(e, t) {
                      var r;
                      while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                  }), this
              },
              has: function(e) {
                  return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
              },
              empty: function() {
                  return u = [], this
              },
              disable: function() {
                  return u = l = r = t, this
              },
              disabled: function() {
                  return !u
              },
              lock: function() {
                  return l = t, r || p.disable(), this
              },
              locked: function() {
                  return !l
              },
              fireWith: function(e, t) {
                  return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
              },
              fire: function() {
                  return p.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!i
              }
          };
      return p
  }, b.extend({
      Deferred: function(e) {
          var t = [
                  ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", b.Callbacks("memory")]
              ],
              n = "pending",
              r = {
                  state: function() {
                      return n
                  },
                  always: function() {
                      return i.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var e = arguments;
                      return b.Deferred(function(n) {
                          b.each(t, function(t, o) {
                              var a = o[0],
                                  s = b.isFunction(e[t]) && e[t];
                              i[o[1]](function() {
                                  var e = s && s.apply(this, arguments);
                                  e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                              })
                          }), e = null
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? b.extend(e, r) : r
                  }
              },
              i = {};
          return r.pipe = r.then, b.each(t, function(e, o) {
              var a = o[2],
                  s = o[3];
              r[o[1]] = a.add, s && a.add(function() {
                  n = s
              }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                  return i[o[0] + "With"](this === i ? r : this, arguments), this
              }, i[o[0] + "With"] = a.fireWith
          }), r.promise(i), e && e.call(i, i), i
      },
      when: function(e) {
          var t = 0,
              n = h.call(arguments),
              r = n.length,
              i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
              o = 1 === i ? e : b.Deferred(),
              a = function(e, t, n) {
                  return function(r) {
                      t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                  }
              },
              s, u, l;
          if (r > 1)
              for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
          return i || o.resolveWith(l, n), o.promise()
      }
  }), b.support = function() {
      var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
      if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
      s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
          getSetAttribute: "t" !== d.className,
          leadingWhitespace: 3 === d.firstChild.nodeType,
          tbody: !d.getElementsByTagName("tbody").length,
          htmlSerialize: !!d.getElementsByTagName("link").length,
          style: /top/.test(r.getAttribute("style")),
          hrefNormalized: "/a" === r.getAttribute("href"),
          opacity: /^0.5/.test(r.style.opacity),
          cssFloat: !!r.style.cssFloat,
          checkOn: !!a.value,
          optSelected: l.selected,
          enctype: !!o.createElement("form").enctype,
          html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === o.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1
      }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
      try {
          delete d.test
      } catch (h) {
          t.deleteExpando = !1
      }
      a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
          t.noCloneEvent = !1
      }), d.cloneNode(!0).click());
      for (f in {
              submit: !0,
              change: !0,
              focusin: !0
          }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
      return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
          var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
              u = o.getElementsByTagName("body")[0];
          u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
              width: "4px"
          }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
      }), n = s = u = l = r = a = null, t
  }();
  var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      B = /([A-Z])/g;

  function P(e, n, r, i) {
      if (b.acceptData(e)) {
          var o, a, s = b.expando,
              u = "string" == typeof n,
              l = e.nodeType,
              p = l ? b.cache : e,
              f = l ? e[s] : e[s] && s;
          if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
      }
  }

  function R(e, t, n) {
      if (b.acceptData(e)) {
          var r, i, o, a = e.nodeType,
              s = a ? b.cache : e,
              u = a ? e[b.expando] : b.expando;
          if (s[u]) {
              if (t && (o = n ? s[u] : s[u].data)) {
                  b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                  for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                  if (!(n ? $ : b.isEmptyObject)(o)) return
              }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
          }
      }
  }
  b.extend({
      cache: {},
      expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
      noData: {
          embed: !0,
          object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
          applet: !0
      },
      hasData: function(e) {
          return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
      },
      data: function(e, t, n) {
          return P(e, t, n)
      },
      removeData: function(e, t) {
          return R(e, t)
      },
      _data: function(e, t, n) {
          return P(e, t, n, !0)
      },
      _removeData: function(e, t) {
          return R(e, t, !0)
      },
      acceptData: function(e) {
          if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
          var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
          return !t || t !== !0 && e.getAttribute("classid") === t
      }
  }), b.fn.extend({
      data: function(e, n) {
          var r, i, o = this[0],
              a = 0,
              s = null;
          if (e === t) {
              if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                  for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                  b._data(o, "parsedAttrs", !0)
              }
              return s
          }
          return "object" == typeof e ? this.each(function() {
              b.data(this, e)
          }) : b.access(this, function(n) {
              return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                  b.data(this, e, n)
              }), t)
          }, null, n, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              b.removeData(this, e)
          })
      }
  });

  function W(e, n, r) {
      if (r === t && 1 === e.nodeType) {
          var i = "data-" + n.replace(B, "-$1").toLowerCase();
          if (r = e.getAttribute(i), "string" == typeof r) {
              try {
                  r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
              } catch (o) {}
              b.data(e, n, r)
          } else r = t
      }
      return r
  }

  function $(e) {
      var t;
      for (t in e)
          if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0
  }
  b.extend({
      queue: function(e, n, r) {
          var i;
          return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = b.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = b._queueHooks(e, t),
              a = function() {
                  b.dequeue(e, t)
              };
          "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return b._data(e, n) || b._data(e, n, {
              empty: b.Callbacks("once memory").add(function() {
                  b._removeData(e, t + "queue"), b._removeData(e, n)
              })
          })
      }
  }), b.fn.extend({
      queue: function(e, n) {
          var r = 2;
          return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
              var t = b.queue(this, e, n);
              b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              b.dequeue(this, e)
          })
      },
      delay: function(e, t) {
          return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
              var r = setTimeout(t, e);
              n.stop = function() {
                  clearTimeout(r)
              }
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, n) {
          var r, i = 1,
              o = b.Deferred(),
              a = this,
              s = this.length,
              u = function() {
                  --i || o.resolveWith(a, [a])
              };
          "string" != typeof e && (n = e, e = t), e = e || "fx";
          while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
          return u(), o.promise(n)
      }
  });
  var I, z, X = /[\t\r\n]/g,
      U = /\r/g,
      V = /^(?:input|select|textarea|button|object)$/i,
      Y = /^(?:a|area)$/i,
      J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      G = /^(?:checked|selected)$/i,
      Q = b.support.getSetAttribute,
      K = b.support.input;
  b.fn.extend({
      attr: function(e, t) {
          return b.access(this, b.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              b.removeAttr(this, e)
          })
      },
      prop: function(e, t) {
          return b.access(this, b.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return e = b.propFix[e] || e, this.each(function() {
              try {
                  this[e] = t, delete this[e]
              } catch (n) {}
          })
      },
      addClass: function(e) {
          var t, n, r, i, o, a = 0,
              s = this.length,
              u = "string" == typeof e && e;
          if (b.isFunction(e)) return this.each(function(t) {
              b(this).addClass(e.call(this, t, this.className))
          });
          if (u)
              for (t = (e || "").match(w) || []; s > a; a++)
                  if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                      o = 0;
                      while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                      n.className = b.trim(r)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, a = 0,
              s = this.length,
              u = 0 === arguments.length || "string" == typeof e && e;
          if (b.isFunction(e)) return this.each(function(t) {
              b(this).removeClass(e.call(this, t, this.className))
          });
          if (u)
              for (t = (e || "").match(w) || []; s > a; a++)
                  if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                      o = 0;
                      while (i = t[o++])
                          while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                      n.className = e ? b.trim(r) : ""
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e,
              r = "boolean" == typeof t;
          return b.isFunction(e) ? this.each(function(n) {
              b(this).toggleClass(e.call(this, n, this.className, t), t)
          }) : this.each(function() {
              if ("string" === n) {
                  var o, a = 0,
                      s = b(this),
                      u = t,
                      l = e.match(w) || [];
                  while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
              } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
          })
      },
      hasClass: function(e) {
          var t = " " + e + " ",
              n = 0,
              r = this.length;
          for (; r > n; n++)
              if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
          return !1
      },
      val: function(e) {
          var n, r, i, o = this[0]; {
              if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                  var o, a = b(this);
                  1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                      return null == e ? "" : e + ""
                  })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
              });
              if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
          }
      }
  }), b.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = e.attributes.value;
                  return !t || t.specified ? e.value : e.text
              }
          },
          select: {
              get: function(e) {
                  var t, n, r = e.options,
                      i = e.selectedIndex,
                      o = "select-one" === e.type || 0 > i,
                      a = o ? null : [],
                      s = o ? i + 1 : r.length,
                      u = 0 > i ? s : o ? i : 0;
                  for (; s > u; u++)
                      if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                          if (t = b(n).val(), o) return t;
                          a.push(t)
                      }
                  return a
              },
              set: function(e, t) {
                  var n = b.makeArray(t);
                  return b(e).find("option").each(function() {
                      this.selected = b.inArray(b(this).val(), n) >= 0
                  }), n.length || (e.selectedIndex = -1), n
              }
          }
      },
      attr: function(e, n, r) {
          var o, a, s, u = e.nodeType;
          if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
      },
      removeAttr: function(e, t) {
          var n, r, i = 0,
              o = t && t.match(w);
          if (o && 1 === e.nodeType)
              while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      },
      propFix: {
          tabindex: "tabIndex",
          readonly: "readOnly",
          "for": "htmlFor",
          "class": "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
      },
      prop: function(e, n, r) {
          var i, o, a, s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var n = e.getAttributeNode("tabindex");
                  return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
              }
          }
      }
  }), z = {
      get: function(e, n) {
          var r = b.prop(e, n),
              i = "boolean" == typeof r && e.getAttribute(n),
              o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
          return o && o.value !== !1 ? n.toLowerCase() : t
      },
      set: function(e, t, n) {
          return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
      }
  }, K && Q || (b.attrHooks.value = {
      get: function(e, n) {
          var r = e.getAttributeNode(n);
          return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
      },
      set: function(e, n, r) {
          return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
      }
  }), Q || (I = b.valHooks.button = {
      get: function(e, n) {
          var r = e.getAttributeNode(n);
          return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
      },
      set: function(e, n, r) {
          var i = e.getAttributeNode(r);
          return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
      }
  }, b.attrHooks.contenteditable = {
      get: I.get,
      set: function(e, t, n) {
          I.set(e, "" === t ? !1 : t, n)
      }
  }, b.each(["width", "height"], function(e, n) {
      b.attrHooks[n] = b.extend(b.attrHooks[n], {
          set: function(e, r) {
              return "" === r ? (e.setAttribute(n, "auto"), r) : t
          }
      })
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
      b.attrHooks[n] = b.extend(b.attrHooks[n], {
          get: function(e) {
              var r = e.getAttribute(n, 2);
              return null == r ? t : r
          }
      })
  }), b.each(["href", "src"], function(e, t) {
      b.propHooks[t] = {
          get: function(e) {
              return e.getAttribute(t, 4)
          }
      }
  })), b.support.style || (b.attrHooks.style = {
      get: function(e) {
          return e.style.cssText || t
      },
      set: function(e, t) {
          return e.style.cssText = t + ""
      }
  }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
      get: function(e) {
          var t = e.parentNode;
          return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
  })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
      b.valHooks[this] = {
          get: function(e) {
              return null === e.getAttribute("value") ? "on" : e.value
          }
      }
  }), b.each(["radio", "checkbox"], function() {
      b.valHooks[this] = b.extend(b.valHooks[this], {
          set: function(e, n) {
              return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
          }
      })
  });
  var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
      return !0
  }

  function ot() {
      return !1
  }
  b.event = {
          global: {},
          add: function(e, n, r, o, a) {
              var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
              if (v) {
                  r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                      return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                  }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                  while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                      type: g,
                      origType: y,
                      data: o,
                      handler: r,
                      guid: r.guid,
                      selector: a,
                      needsContext: a && b.expr.match.needsContext.test(a),
                      namespace: m.join(".")
                  }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                  e = null
              }
          },
          remove: function(e, t, n, r, i) {
              var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
              if (m && (c = m.events)) {
                  t = (t || "").match(w) || [""], l = t.length;
                  while (l--)
                      if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                          p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                          while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                          u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                      } else
                          for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                  b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
              }
          },
          trigger: function(n, r, i, a) {
              var s, u, l, c, p, f, d, h = [i || o],
                  g = y.call(n, "type") ? n.type : n,
                  m = y.call(n, "namespace") ? n.namespace.split(".") : [];
              if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                  if (!a && !p.noBubble && !b.isWindow(i)) {
                      for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                      f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                  }
                  d = 0;
                  while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                  if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                      f = i[u], f && (i[u] = null), b.event.triggered = g;
                      try {
                          i[g]()
                      } catch (v) {}
                      b.event.triggered = t, f && (i[u] = f)
                  }
                  return n.result
              }
          },
          dispatch: function(e) {
              e = b.event.fix(e);
              var n, r, i, o, a, s = [],
                  u = h.call(arguments),
                  l = (b._data(this, "events") || {})[e.type] || [],
                  c = b.event.special[e.type] || {};
              if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                  s = b.event.handlers.call(this, e, l), n = 0;
                  while ((o = s[n++]) && !e.isPropagationStopped()) {
                      e.currentTarget = o.elem, a = 0;
                      while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                  }
                  return c.postDispatch && c.postDispatch.call(this, e), e.result
              }
          },
          handlers: function(e, n) {
              var r, i, o, a, s = [],
                  u = n.delegateCount,
                  l = e.target;
              if (u && l.nodeType && (!e.button || "click" !== e.type))
                  for (; l != this; l = l.parentNode || this)
                      if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                          for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                          o.length && s.push({
                              elem: l,
                              handlers: o
                          })
                      }
              return n.length > u && s.push({
                  elem: this,
                  handlers: n.slice(u)
              }), s
          },
          fix: function(e) {
              if (e[b.expando]) return e;
              var t, n, r, i = e.type,
                  a = e,
                  s = this.fixHooks[i];
              s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
              while (t--) n = r[t], e[n] = a[n];
              return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
              props: "char charCode key keyCode".split(" "),
              filter: function(e, t) {
                  return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
              }
          },
          mouseHooks: {
              props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
              filter: function(e, n) {
                  var r, i, a, s = n.button,
                      u = n.fromElement;
                  return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
              }
          },
          special: {
              load: {
                  noBubble: !0
              },
              click: {
                  trigger: function() {
                      return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                  }
              },
              focus: {
                  trigger: function() {
                      if (this !== o.activeElement && this.focus) try {
                          return this.focus(), !1
                      } catch (e) {}
                  },
                  delegateType: "focusin"
              },
              blur: {
                  trigger: function() {
                      return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                  },
                  delegateType: "focusout"
              },
              beforeunload: {
                  postDispatch: function(e) {
                      e.result !== t && (e.originalEvent.returnValue = e.result)
                  }
              }
          },
          simulate: function(e, t, n, r) {
              var i = b.extend(new b.Event, n, {
                  type: e,
                  isSimulated: !0,
                  originalEvent: {}
              });
              r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
          }
      }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1)
      } : function(e, t, n) {
          var r = "on" + t;
          e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
      }, b.Event = function(e, n) {
          return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
      }, b.Event.prototype = {
          isDefaultPrevented: ot,
          isPropagationStopped: ot,
          isImmediatePropagationStopped: ot,
          preventDefault: function() {
              var e = this.originalEvent;
              this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
          },
          stopPropagation: function() {
              var e = this.originalEvent;
              this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
          },
          stopImmediatePropagation: function() {
              this.isImmediatePropagationStopped = it, this.stopPropagation()
          }
      }, b.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout"
      }, function(e, t) {
          b.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                  var n, r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                  return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
              }
          }
      }), b.support.submitBubbles || (b.event.special.submit = {
          setup: function() {
              return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                  var n = e.target,
                      r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                  r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                      e._submit_bubble = !0
                  }), b._data(r, "submitBubbles", !0))
              }), t)
          },
          postDispatch: function(e) {
              e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
          },
          teardown: function() {
              return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
          }
      }), b.support.changeBubbles || (b.event.special.change = {
          setup: function() {
              return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                  "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
              }), b.event.add(this, "click._change", function(e) {
                  this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
              })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                  var t = e.target;
                  Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                      !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                  }), b._data(t, "changeBubbles", !0))
              }), t)
          },
          handle: function(e) {
              var n = e.target;
              return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
          },
          teardown: function() {
              return b.event.remove(this, "._change"), !Z.test(this.nodeName)
          }
      }), b.support.focusinBubbles || b.each({
          focus: "focusin",
          blur: "focusout"
      }, function(e, t) {
          var n = 0,
              r = function(e) {
                  b.event.simulate(t, e.target, b.event.fix(e), !0)
              };
          b.event.special[t] = {
              setup: function() {
                  0 === n++ && o.addEventListener(e, r, !0)
              },
              teardown: function() {
                  0 === --n && o.removeEventListener(e, r, !0)
              }
          }
      }), b.fn.extend({
          on: function(e, n, r, i, o) {
              var a, s;
              if ("object" == typeof e) {
                  "string" != typeof n && (r = r || n, n = t);
                  for (a in e) this.on(a, n, r, e[a], o);
                  return this
              }
              if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
              else if (!i) return this;
              return 1 === o && (s = i, i = function(e) {
                  return b().off(e), s.apply(this, arguments)
              }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                  b.event.add(this, e, i, r, n)
              })
          },
          one: function(e, t, n, r) {
              return this.on(e, t, n, r, 1)
          },
          off: function(e, n, r) {
              var i, o;
              if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
              if ("object" == typeof e) {
                  for (o in e) this.off(o, n, e[o]);
                  return this
              }
              return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                  b.event.remove(this, e, r, n)
              })
          },
          bind: function(e, t, n) {
              return this.on(e, null, t, n)
          },
          unbind: function(e, t) {
              return this.off(e, null, t)
          },
          delegate: function(e, t, n, r) {
              return this.on(t, e, n, r)
          },
          undelegate: function(e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          },
          trigger: function(e, t) {
              return this.each(function() {
                  b.event.trigger(e, t, this)
              })
          },
          triggerHandler: function(e, n) {
              var r = this[0];
              return r ? b.event.trigger(e, n, r, !0) : t
          }
      }),
      function(e, t) {
          var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
              w = e.document,
              T = {},
              N = 0,
              C = 0,
              k = it(),
              E = it(),
              S = it(),
              A = typeof t,
              j = 1 << 31,
              D = [],
              L = D.pop,
              H = D.push,
              q = D.slice,
              M = D.indexOf || function(e) {
                  var t = 0,
                      n = this.length;
                  for (; n > t; t++)
                      if (this[t] === e) return t;
                  return -1
              },
              _ = "[\\x20\\t\\r\\n\\f]",
              F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
              O = F.replace("w", "w#"),
              B = "([*^$|!~]?=)",
              P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
              R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
              W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
              $ = RegExp("^" + _ + "*," + _ + "*"),
              I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
              z = RegExp(R),
              X = RegExp("^" + O + "$"),
              U = {
                  ID: RegExp("^#(" + F + ")"),
                  CLASS: RegExp("^\\.(" + F + ")"),
                  NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                  TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                  ATTR: RegExp("^" + P),
                  PSEUDO: RegExp("^" + R),
                  CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                  needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
              },
              V = /[\x20\t\r\n\f]*[+~]/,
              Y = /^[^{]+\{\s*\[native code/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              G = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              K = /'|\\/g,
              Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
              tt = function(e, t) {
                  var n = "0x" + t - 65536;
                  return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
              };
          try {
              q.call(w.documentElement.childNodes, 0)[0].nodeType
          } catch (nt) {
              q = function(e) {
                  var t, n = [];
                  while (t = this[e++]) n.push(t);
                  return n
              }
          }

          function rt(e) {
              return Y.test(e + "")
          }

          function it() {
              var e, t = [];
              return e = function(n, r) {
                  return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
              }
          }

          function ot(e) {
              return e[x] = !0, e
          }

          function at(e) {
              var t = p.createElement("div");
              try {
                  return e(t)
              } catch (n) {
                  return !1
              } finally {
                  t = null
              }
          }

          function st(e, t, n, r) {
              var i, o, a, s, u, l, f, g, m, v;
              if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
              if (1 !== (s = t.nodeType) && 9 !== s) return [];
              if (!d && !r) {
                  if (i = J.exec(e))
                      if (a = i[1]) {
                          if (9 === s) {
                              if (o = t.getElementById(a), !o || !o.parentNode) return n;
                              if (o.id === a) return n.push(o), n
                          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                      } else {
                          if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                          if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                      }
                  if (T.qsa && !h.test(e)) {
                      if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                          l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                          while (u--) l[u] = g + dt(l[u]);
                          m = V.test(e) && t.parentNode || t, v = l.join(",")
                      }
                      if (v) try {
                          return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                      } catch (b) {} finally {
                          f || t.removeAttribute("id")
                      }
                  }
              }
              return wt(e.replace(W, "$1"), t, n, r)
          }
          a = st.isXML = function(e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return t ? "HTML" !== t.nodeName : !1
          }, c = st.setDocument = function(e) {
              var n = e ? e.ownerDocument || e : w;
              return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                  return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
              }), T.attributes = at(function(e) {
                  e.innerHTML = "<select></select>";
                  var t = typeof e.lastChild.getAttribute("multiple");
                  return "boolean" !== t && "string" !== t
              }), T.getByClassName = at(function(e) {
                  return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
              }), T.getByName = at(function(e) {
                  e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                  var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                  return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
              }), i.attrHandle = at(function(e) {
                  return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
              }) ? {} : {
                  href: function(e) {
                      return e.getAttribute("href", 2)
                  },
                  type: function(e) {
                      return e.getAttribute("type")
                  }
              }, T.getIdNotName ? (i.find.ID = function(e, t) {
                  if (typeof t.getElementById !== A && !d) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : []
                  }
              }, i.filter.ID = function(e) {
                  var t = e.replace(et, tt);
                  return function(e) {
                      return e.getAttribute("id") === t
                  }
              }) : (i.find.ID = function(e, n) {
                  if (typeof n.getElementById !== A && !d) {
                      var r = n.getElementById(e);
                      return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                  }
              }, i.filter.ID = function(e) {
                  var t = e.replace(et, tt);
                  return function(e) {
                      var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                      return n && n.value === t
                  }
              }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                  return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
              } : function(e, t) {
                  var n, r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                  if ("*" === e) {
                      while (n = o[i++]) 1 === n.nodeType && r.push(n);
                      return r
                  }
                  return o
              }, i.find.NAME = T.getByName && function(e, n) {
                  return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
              }, i.find.CLASS = T.getByClassName && function(e, n) {
                  return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
              }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                  e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
              }), at(function(e) {
                  e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
              })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                  T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
              }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
              } : function(e, t) {
                  if (t)
                      while (t = t.parentNode)
                          if (t === e) return !0;
                  return !1
              }, v = f.compareDocumentPosition ? function(e, t) {
                  var r;
                  return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
              } : function(e, t) {
                  var r, i = 0,
                      o = e.parentNode,
                      a = t.parentNode,
                      s = [e],
                      l = [t];
                  if (e === t) return u = !0, 0;
                  if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                  if (o === a) return ut(e, t);
                  r = e;
                  while (r = r.parentNode) s.unshift(r);
                  r = t;
                  while (r = r.parentNode) l.unshift(r);
                  while (s[i] === l[i]) i++;
                  return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
              }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
          }, st.matches = function(e, t) {
              return st(e, null, null, t)
          }, st.matchesSelector = function(e, t) {
              if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                  var n = m.call(e, t);
                  if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
              } catch (r) {}
              return st(t, p, null, [e]).length > 0
          }, st.contains = function(e, t) {
              return (e.ownerDocument || e) !== p && c(e), y(e, t)
          }, st.attr = function(e, t) {
              var n;
              return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
          }, st.error = function(e) {
              throw Error("Syntax error, unrecognized expression: " + e)
          }, st.uniqueSort = function(e) {
              var t, n = [],
                  r = 1,
                  i = 0;
              if (u = !T.detectDuplicates, e.sort(v), u) {
                  for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                  while (i--) e.splice(n[i], 1)
              }
              return e
          };

          function ut(e, t) {
              var n = t && e,
                  r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
              if (r) return r;
              if (n)
                  while (n = n.nextSibling)
                      if (n === t) return -1;
              return e ? 1 : -1
          }

          function lt(e) {
              return function(t) {
                  var n = t.nodeName.toLowerCase();
                  return "input" === n && t.type === e
              }
          }

          function ct(e) {
              return function(t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e
              }
          }

          function pt(e) {
              return ot(function(t) {
                  return t = +t, ot(function(n, r) {
                      var i, o = e([], n.length, t),
                          a = o.length;
                      while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                  })
              })
          }
          o = st.getText = function(e) {
              var t, n = "",
                  r = 0,
                  i = e.nodeType;
              if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                  } else if (3 === i || 4 === i) return e.nodeValue
              } else
                  for (; t = e[r]; r++) n += o(t);
              return n
          }, i = st.selectors = {
              cacheLength: 50,
              createPseudo: ot,
              match: U,
              find: {},
              relative: {
                  ">": {
                      dir: "parentNode",
                      first: !0
                  },
                  " ": {
                      dir: "parentNode"
                  },
                  "+": {
                      dir: "previousSibling",
                      first: !0
                  },
                  "~": {
                      dir: "previousSibling"
                  }
              },
              preFilter: {
                  ATTR: function(e) {
                      return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                  },
                  CHILD: function(e) {
                      return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                  },
                  PSEUDO: function(e) {
                      var t, n = !e[5] && e[2];
                      return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(e) {
                      return "*" === e ? function() {
                          return !0
                      } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e
                      })
                  },
                  CLASS: function(e) {
                      var t = k[e + " "];
                      return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                          return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(e, t, n) {
                      return function(r) {
                          var i = st.attr(r, e);
                          return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                      }
                  },
                  CHILD: function(e, t, n, r, i) {
                      var o = "nth" !== e.slice(0, 3),
                          a = "last" !== e.slice(-4),
                          s = "of-type" === t;
                      return 1 === r && 0 === i ? function(e) {
                          return !!e.parentNode
                      } : function(t, n, u) {
                          var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                              m = t.parentNode,
                              y = s && t.nodeName.toLowerCase(),
                              v = !u && !s;
                          if (m) {
                              if (o) {
                                  while (g) {
                                      p = t;
                                      while (p = p[g])
                                          if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                      h = g = "only" === e && !h && "nextSibling"
                                  }
                                  return !0
                              }
                              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                  c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                  while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                      if (1 === p.nodeType && ++f && p === t) {
                                          c[e] = [N, d, f];
                                          break
                                      }
                              } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                              else
                                  while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                      if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                          }
                      }
                  },
                  PSEUDO: function(e, t) {
                      var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                      return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                          var i, o = r(e, t),
                              a = o.length;
                          while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                      }) : function(e) {
                          return r(e, 0, n)
                      }) : r
                  }
              },
              pseudos: {
                  not: ot(function(e) {
                      var t = [],
                          n = [],
                          r = s(e.replace(W, "$1"));
                      return r[x] ? ot(function(e, t, n, i) {
                          var o, a = r(e, null, i, []),
                              s = e.length;
                          while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                      }) : function(e, i, o) {
                          return t[0] = e, r(t, null, o, n), !n.pop()
                      }
                  }),
                  has: ot(function(e) {
                      return function(t) {
                          return st(e, t).length > 0
                      }
                  }),
                  contains: ot(function(e) {
                      return function(t) {
                          return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                      }
                  }),
                  lang: ot(function(e) {
                      return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                          function(t) {
                              var n;
                              do
                                  if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                              while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1
                          }
                  }),
                  target: function(t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id
                  },
                  root: function(e) {
                      return e === f
                  },
                  focus: function(e) {
                      return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                  },
                  enabled: function(e) {
                      return e.disabled === !1
                  },
                  disabled: function(e) {
                      return e.disabled === !0
                  },
                  checked: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && !!e.checked || "option" === t && !!e.selected
                  },
                  selected: function(e) {
                      return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                  },
                  empty: function(e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                      return !0
                  },
                  parent: function(e) {
                      return !i.pseudos.empty(e)
                  },
                  header: function(e) {
                      return Q.test(e.nodeName)
                  },
                  input: function(e) {
                      return G.test(e.nodeName)
                  },
                  button: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && "button" === e.type || "button" === t
                  },
                  text: function(e) {
                      var t;
                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                  },
                  first: pt(function() {
                      return [0]
                  }),
                  last: pt(function(e, t) {
                      return [t - 1]
                  }),
                  eq: pt(function(e, t, n) {
                      return [0 > n ? n + t : n]
                  }),
                  even: pt(function(e, t) {
                      var n = 0;
                      for (; t > n; n += 2) e.push(n);
                      return e
                  }),
                  odd: pt(function(e, t) {
                      var n = 1;
                      for (; t > n; n += 2) e.push(n);
                      return e
                  }),
                  lt: pt(function(e, t, n) {
                      var r = 0 > n ? n + t : n;
                      for (; --r >= 0;) e.push(r);
                      return e
                  }),
                  gt: pt(function(e, t, n) {
                      var r = 0 > n ? n + t : n;
                      for (; t > ++r;) e.push(r);
                      return e
                  })
              }
          };
          for (n in {
                  radio: !0,
                  checkbox: !0,
                  file: !0,
                  password: !0,
                  image: !0
              }) i.pseudos[n] = lt(n);
          for (n in {
                  submit: !0,
                  reset: !0
              }) i.pseudos[n] = ct(n);

          function ft(e, t) {
              var n, r, o, a, s, u, l, c = E[e + " "];
              if (c) return t ? 0 : c.slice(0);
              s = e, u = [], l = i.preFilter;
              while (s) {
                  (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                      value: n,
                      type: r[0].replace(W, " ")
                  }), s = s.slice(n.length));
                  for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                      value: n,
                      type: a,
                      matches: r
                  }), s = s.slice(n.length));
                  if (!n) break
              }
              return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
          }

          function dt(e) {
              var t = 0,
                  n = e.length,
                  r = "";
              for (; n > t; t++) r += e[t].value;
              return r
          }

          function ht(e, t, n) {
              var i = t.dir,
                  o = n && "parentNode" === i,
                  a = C++;
              return t.first ? function(t, n, r) {
                  while (t = t[i])
                      if (1 === t.nodeType || o) return e(t, n, r)
              } : function(t, n, s) {
                  var u, l, c, p = N + " " + a;
                  if (s) {
                      while (t = t[i])
                          if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                  } else
                      while (t = t[i])
                          if (1 === t.nodeType || o)
                              if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                  if ((u = l[1]) === !0 || u === r) return u === !0
                              } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
              }
          }

          function gt(e) {
              return e.length > 1 ? function(t, n, r) {
                  var i = e.length;
                  while (i--)
                      if (!e[i](t, n, r)) return !1;
                  return !0
              } : e[0]
          }

          function mt(e, t, n, r, i) {
              var o, a = [],
                  s = 0,
                  u = e.length,
                  l = null != t;
              for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
              return a
          }

          function yt(e, t, n, r, i, o) {
              return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                  var l, c, p, f = [],
                      d = [],
                      h = a.length,
                      g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                      m = !e || !o && t ? g : mt(g, f, e, s, u),
                      y = n ? i || (o ? e : h || r) ? [] : a : m;
                  if (n && n(m, y, s, u), r) {
                      l = mt(y, d), r(l, [], s, u), c = l.length;
                      while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                  }
                  if (o) {
                      if (i || e) {
                          if (i) {
                              l = [], c = y.length;
                              while (c--)(p = y[c]) && l.push(m[c] = p);
                              i(null, y = [], l, u)
                          }
                          c = y.length;
                          while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                      }
                  } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
              })
          }

          function vt(e) {
              var t, n, r, o = e.length,
                  a = i.relative[e[0].type],
                  s = a || i.relative[" "],
                  u = a ? 1 : 0,
                  c = ht(function(e) {
                      return e === t
                  }, s, !0),
                  p = ht(function(e) {
                      return M.call(t, e) > -1
                  }, s, !0),
                  f = [function(e, n, r) {
                      return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                  }];
              for (; o > u; u++)
                  if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                  else {
                      if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                          for (r = ++u; o > r; r++)
                              if (i.relative[e[r].type]) break;
                          return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                      }
                      f.push(n)
                  }
              return gt(f)
          }

          function bt(e, t) {
              var n = 0,
                  o = t.length > 0,
                  a = e.length > 0,
                  s = function(s, u, c, f, d) {
                      var h, g, m, y = [],
                          v = 0,
                          b = "0",
                          x = s && [],
                          w = null != d,
                          T = l,
                          C = s || a && i.find.TAG("*", d && u.parentNode || u),
                          k = N += null == T ? 1 : Math.random() || .1;
                      for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                          if (a && h) {
                              g = 0;
                              while (m = e[g++])
                                  if (m(h, u, c)) {
                                      f.push(h);
                                      break
                                  }
                              w && (N = k, r = ++n)
                          }
                          o && ((h = !m && h) && v--, s && x.push(h))
                      }
                      if (v += b, o && b !== v) {
                          g = 0;
                          while (m = t[g++]) m(x, y, u, c);
                          if (s) {
                              if (v > 0)
                                  while (b--) x[b] || y[b] || (y[b] = L.call(f));
                              y = mt(y)
                          }
                          H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                      }
                      return w && (N = k, l = T), x
                  };
              return o ? ot(s) : s
          }
          s = st.compile = function(e, t) {
              var n, r = [],
                  i = [],
                  o = S[e + " "];
              if (!o) {
                  t || (t = ft(e)), n = t.length;
                  while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                  o = S(e, bt(i, r))
              }
              return o
          };

          function xt(e, t, n) {
              var r = 0,
                  i = t.length;
              for (; i > r; r++) st(e, t[r], n);
              return n
          }

          function wt(e, t, n, r) {
              var o, a, u, l, c, p = ft(e);
              if (!r && 1 === p.length) {
                  if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                      if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                      e = e.slice(a.shift().value.length)
                  }
                  o = U.needsContext.test(e) ? 0 : a.length;
                  while (o--) {
                      if (u = a[o], i.relative[l = u.type]) break;
                      if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                          if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                          break
                      }
                  }
              }
              return s(e, p)(r, t, d, n, V.test(e)), n
          }
          i.pseudos.nth = i.pseudos.eq;

          function Tt() {}
          i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
      }(e);
  var at = /Until$/,
      st = /^(?:parents|prev(?:Until|All))/,
      ut = /^.[^:#\[\.,]*$/,
      lt = b.expr.match.needsContext,
      ct = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  b.fn.extend({
      find: function(e) {
          var t, n, r, i = this.length;
          if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
              for (t = 0; i > t; t++)
                  if (b.contains(r[t], this)) return !0
          }));
          for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
          return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
      },
      has: function(e) {
          var t, n = b(e, this),
              r = n.length;
          return this.filter(function() {
              for (t = 0; r > t; t++)
                  if (b.contains(this, n[t])) return !0
          })
      },
      not: function(e) {
          return this.pushStack(ft(this, e, !1))
      },
      filter: function(e) {
          return this.pushStack(ft(this, e, !0))
      },
      is: function(e) {
          return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
      },
      closest: function(e, t) {
          var n, r = 0,
              i = this.length,
              o = [],
              a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
          for (; i > r; r++) {
              n = this[r];
              while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                  if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                      o.push(n);
                      break
                  }
                  n = n.parentNode
              }
          }
          return this.pushStack(o.length > 1 ? b.unique(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
              r = b.merge(this.get(), n);
          return this.pushStack(b.unique(r))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), b.fn.andSelf = b.fn.addBack;

  function pt(e, t) {
      do e = e[t]; while (e && 1 !== e.nodeType);
      return e
  }
  b.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return b.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return b.dir(e, "parentNode", n)
      },
      next: function(e) {
          return pt(e, "nextSibling")
      },
      prev: function(e) {
          return pt(e, "previousSibling")
      },
      nextAll: function(e) {
          return b.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return b.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return b.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return b.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
          return b.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return b.sibling(e.firstChild)
      },
      contents: function(e) {
          return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
      }
  }, function(e, t) {
      b.fn[e] = function(n, r) {
          var i = b.map(this, t, n);
          return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
      }
  }), b.extend({
      filter: function(e, t, n) {
          return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
      },
      dir: function(e, n, r) {
          var i = [],
              o = e[n];
          while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
          return i
      },
      sibling: function(e, t) {
          var n = [];
          for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      }
  });

  function ft(e, t, n) {
      if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
          var i = !!t.call(e, r, e);
          return i === n
      });
      if (t.nodeType) return b.grep(e, function(e) {
          return e === t === n
      });
      if ("string" == typeof t) {
          var r = b.grep(e, function(e) {
              return 1 === e.nodeType
          });
          if (ut.test(t)) return b.filter(t, r, !n);
          t = b.filter(t, r)
      }
      return b.grep(e, function(e) {
          return b.inArray(e, t) >= 0 === n
      })
  }

  function dt(e) {
      var t = ht.split("|"),
          n = e.createDocumentFragment();
      if (n.createElement)
          while (t.length) n.createElement(t.pop());
      return n
  }
  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Nt = /^(?:checkbox|radio)$/i,
      Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      jt = dt(o),
      Dt = jt.appendChild(o.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
      text: function(e) {
          return b.access(this, function(e) {
              return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
          }, null, e, arguments.length)
      },
      wrapAll: function(e) {
          if (b.isFunction(e)) return this.each(function(t) {
              b(this).wrapAll(e.call(this, t))
          });
          if (this[0]) {
              var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                  var e = this;
                  while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                  return e
              }).append(this)
          }
          return this
      },
      wrapInner: function(e) {
          return b.isFunction(e) ? this.each(function(t) {
              b(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = b(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = b.isFunction(e);
          return this.each(function(n) {
              b(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
          }).end()
      },
      append: function() {
          return this.domManip(arguments, !0, function(e) {
              (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
          })
      },
      prepend: function() {
          return this.domManip(arguments, !0, function(e) {
              (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
          })
      },
      before: function() {
          return this.domManip(arguments, !1, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, !1, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          var n, r = 0;
          for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
          return this
      },
      empty: function() {
          var e, t = 0;
          for (; null != (e = this[t]); t++) {
              1 === e.nodeType && b.cleanData(Ot(e, !1));
              while (e.firstChild) e.removeChild(e.firstChild);
              e.options && b.nodeName(e, "select") && (e.options.length = 0)
          }
          return this
      },
      clone: function(e, t) {
          return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
              return b.clone(this, e, t)
          })
      },
      html: function(e) {
          return b.access(this, function(e) {
              var n = this[0] || {},
                  r = 0,
                  i = this.length;
              if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
              if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                  e = e.replace(vt, "<$1></$2>");
                  try {
                      for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                      n = 0
                  } catch (o) {}
              }
              n && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function(e) {
          var t = b.isFunction(e);
          return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
              var t = this.nextSibling,
                  n = this.parentNode;
              n && (b(this).remove(), n.insertBefore(e, t))
          })
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(e, n, r) {
          e = f.apply([], e);
          var i, o, a, s, u, l, c = 0,
              p = this.length,
              d = this,
              h = p - 1,
              g = e[0],
              m = b.isFunction(g);
          if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
              var o = d.eq(i);
              m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
          });
          if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
              for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
              if (a)
                  for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                      url: o.src,
                      type: "GET",
                      dataType: "script",
                      async: !1,
                      global: !1,
                      "throws": !0
                  }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
              l = i = null
          }
          return this
      }
  });

  function Lt(e, t) {
      return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function Ht(e) {
      var t = e.getAttributeNode("type");
      return e.type = (t && t.specified) + "/" + e.type, e
  }

  function qt(e) {
      var t = Et.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function Mt(e, t) {
      var n, r = 0;
      for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
  }

  function _t(e, t) {
      if (1 === t.nodeType && b.hasData(e)) {
          var n, r, i, o = b._data(e),
              a = b._data(t, o),
              s = o.events;
          if (s) {
              delete a.handle, a.events = {};
              for (n in s)
                  for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
          }
          a.data && (a.data = b.extend({}, a.data))
      }
  }

  function Ft(e, t) {
      var n, r, i;
      if (1 === t.nodeType) {
          if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
              i = b._data(t);
              for (r in i.events) b.removeEvent(t, r, i.handle);
              t.removeAttribute(b.expando)
          }
          "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
      }
  }
  b.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      b.fn[e] = function(e) {
          var n, r = 0,
              i = [],
              o = b(e),
              a = o.length - 1;
          for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
          return this.pushStack(i)
      }
  });

  function Ot(e, n) {
      var r, o, a = 0,
          s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
      if (!s)
          for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
      return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
  }

  function Bt(e) {
      Nt.test(e.type) && (e.defaultChecked = e.checked)
  }
  b.extend({
      clone: function(e, t, n) {
          var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
          if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
              for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
          if (t)
              if (n)
                  for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
              else _t(e, o);
          return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
      },
      buildFragment: function(e, t, n, r) {
          var i, o, a, s, u, l, c, p = e.length,
              f = dt(t),
              d = [],
              h = 0;
          for (; p > h; h++)
              if (o = e[h], o || 0 === o)
                  if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                  else if (wt.test(o)) {
              s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
              while (i--) s = s.lastChild;
              if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                  o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                  while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
              }
              b.merge(d, s.childNodes), s.textContent = "";
              while (s.firstChild) s.removeChild(s.firstChild);
              s = f.lastChild
          } else d.push(t.createTextNode(o));
          s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
          while (o = d[h++])
              if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                  i = 0;
                  while (o = s[i++]) kt.test(o.type || "") && n.push(o)
              }
          return s = null, f
      },
      cleanData: function(e, t) {
          var n, r, o, a, s = 0,
              u = b.expando,
              l = b.cache,
              p = b.support.deleteExpando,
              f = b.event.special;
          for (; null != (n = e[s]); s++)
              if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                  if (a.events)
                      for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                  l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
              }
      }
  });
  var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + x + ")(.*)$", "i"),
      Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + x + ")", "i"),
      Gt = {
          BODY: "block"
      },
      Qt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Kt = {
          letterSpacing: 0,
          fontWeight: 400
      },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
      if (t in e) return t;
      var n = t.charAt(0).toUpperCase() + t.slice(1),
          r = t,
          i = en.length;
      while (i--)
          if (t = en[i] + n, t in e) return t;
      return r
  }

  function nn(e, t) {
      return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
  }

  function rn(e, t) {
      var n, r, i, o = [],
          a = 0,
          s = e.length;
      for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
      for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
      return e
  }
  b.fn.extend({
      css: function(e, n) {
          return b.access(this, function(e, n, r) {
              var i, o, a = {},
                  s = 0;
              if (b.isArray(n)) {
                  for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                  return a
              }
              return r !== t ? b.style(e, n, r) : b.css(e, n)
          }, e, n, arguments.length > 1)
      },
      show: function() {
          return rn(this, !0)
      },
      hide: function() {
          return rn(this)
      },
      toggle: function(e) {
          var t = "boolean" == typeof e;
          return this.each(function() {
              (t ? e : nn(this)) ? b(this).show(): b(this).hide()
          })
      }
  }), b.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Wt(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, n, r, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o, a, s, u = b.camelCase(n),
                  l = e.style;
              if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
              if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                  l[n] = r
              } catch (c) {}
          }
      },
      css: function(e, n, r, i) {
          var o, a, s, u = b.camelCase(n);
          return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
      },
      swap: function(e, t, n, r) {
          var i, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i
      }
  }), e.getComputedStyle ? (Rt = function(t) {
      return e.getComputedStyle(t, null)
  }, Wt = function(e, n, r) {
      var i, o, a, s = r || Rt(e),
          u = s ? s.getPropertyValue(n) || s[n] : t,
          l = e.style;
      return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
  }) : o.documentElement.currentStyle && (Rt = function(e) {
      return e.currentStyle
  }, Wt = function(e, n, r) {
      var i, o, a, s = r || Rt(e),
          u = s ? s[n] : t,
          l = e.style;
      return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
  });

  function on(e, t, n) {
      var r = Vt.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function an(e, t, n, r, i) {
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          a = 0;
      for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
      return a
  }

  function sn(e, t, n) {
      var r = !0,
          i = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = Rt(e),
          a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
      if (0 >= i || null == i) {
          if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
          r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function un(e) {
      var t = o,
          n = Gt[e];
      return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
  }

  function ln(e, t) {
      var n = b(t.createElement(e)).appendTo(t.body),
          r = b.css(n[0], "display");
      return n.remove(), r
  }
  b.each(["height", "width"], function(e, n) {
      b.cssHooks[n] = {
          get: function(e, r, i) {
              return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                  return sn(e, n, i)
              }) : sn(e, n, i) : t
          },
          set: function(e, t, r) {
              var i = r && Rt(e);
              return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
          }
      }
  }), b.support.opacity || (b.cssHooks.opacity = {
      get: function(e, t) {
          return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
          var n = e.style,
              r = e.currentStyle,
              i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              o = r && r.filter || n.filter || "";
          n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
      }
  }), b(function() {
      b.support.reliableMarginRight || (b.cssHooks.marginRight = {
          get: function(e, n) {
              return n ? b.swap(e, {
                  display: "inline-block"
              }, Wt, [e, "marginRight"]) : t
          }
      }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
          b.cssHooks[n] = {
              get: function(e, r) {
                  return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
              }
          }
      })
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
      return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
  }, b.expr.filters.visible = function(e) {
      return !b.expr.filters.hidden(e)
  }), b.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      b.cssHooks[e + t] = {
          expand: function(n) {
              var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
              for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      }, Ut.test(e) || (b.cssHooks[e + t].set = on)
  });
  var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
  b.fn.extend({
      serialize: function() {
          return b.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = b.prop(this, "elements");
              return e ? b.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
          }).map(function(e, t) {
              var n = b(this).val();
              return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(fn, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(fn, "\r\n")
              }
          }).get()
      }
  }), b.param = function(e, n) {
      var r, i = [],
          o = function(e, t) {
              t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
          };
      if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
          o(this.name, this.value)
      });
      else
          for (r in e) gn(r, e[r], n, o);
      return i.join("&").replace(cn, "+")
  };

  function gn(e, t, n, r) {
      var i;
      if (b.isArray(t)) b.each(t, function(t, i) {
          n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== b.type(t)) r(e, t);
      else
          for (i in t) gn(e + "[" + i + "]", t[i], n, r)
  }
  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      b.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }), b.fn.hover = function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
  };
  var mn, yn, vn = b.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Cn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = b.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");
  try {
      yn = a.href
  } catch (Ln) {
      yn = o.createElement("a"), yn.href = "", yn = yn.href
  }
  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
              o = t.toLowerCase().match(w) || [];
          if (b.isFunction(n))
              while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }

  function qn(e, n, r, i) {
      var o = {},
          a = e === jn;

      function s(u) {
          var l;
          return o[u] = !0, b.each(e[u] || [], function(e, u) {
              var c = u(n, r, i);
              return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
          }), l
      }
      return s(n.dataTypes[0]) || !o["*"] && s("*")
  }

  function Mn(e, n) {
      var r, i, o = b.ajaxSettings.flatOptions || {};
      for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
      return r && b.extend(!0, e, r), e
  }
  b.fn.load = function(e, n, r) {
      if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
      var i, o, a, s = this,
          u = e.indexOf(" ");
      return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
          url: e,
          type: a,
          dataType: "html",
          data: n
      }).done(function(e) {
          o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
      }).complete(r && function(e, t) {
          s.each(r, o || [e.responseText, t, e])
      }), this
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      b.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), b.each(["get", "post"], function(e, n) {
      b[n] = function(e, r, i, o) {
          return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
              url: e,
              type: n,
              dataType: o,
              data: r,
              success: i
          })
      }
  }), b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: yn,
          type: "GET",
          isLocal: Nn.test(mn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Dn,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText"
          },
          converters: {
              "* text": e.String,
              "text html": !0,
              "text json": b.parseJSON,
              "text xml": b.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
      },
      ajaxPrefilter: Hn(An),
      ajaxTransport: Hn(jn),
      ajax: function(e, n) {
          "object" == typeof e && (n = e, e = t), n = n || {};
          var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
              f = p.context || p,
              d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
              h = b.Deferred(),
              g = b.Callbacks("once memory"),
              m = p.statusCode || {},
              y = {},
              v = {},
              x = 0,
              T = "canceled",
              N = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (2 === x) {
                          if (!c) {
                              c = {};
                              while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                          }
                          t = c[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return 2 === x ? a : null
                  },
                  setRequestHeader: function(e, t) {
                      var n = e.toLowerCase();
                      return x || (e = v[n] = v[n] || e, y[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return x || (p.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (2 > x)
                              for (t in e) m[t] = [m[t], e[t]];
                          else N.always(e[N.status]);
                      return this
                  },
                  abort: function(e) {
                      var t = e || T;
                      return l && l.abort(t), k(0, t), this
                  }
              };
          if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
          u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
          for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
          if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
          T = "abort";
          for (i in {
                  success: 1,
                  error: 1,
                  complete: 1
              }) N[i](p[i]);
          if (l = qn(jn, p, n, N)) {
              N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                  N.abort("timeout")
              }, p.timeout));
              try {
                  x = 1, l.send(y, k)
              } catch (C) {
                  if (!(2 > x)) throw C;
                  k(-1, C)
              }
          } else k(-1, "No Transport");

          function k(e, n, r, i) {
              var c, y, v, w, T, C = n;
              2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
          }
          return N
      },
      getScript: function(e, n) {
          return b.get(e, t, n, "script")
      },
      getJSON: function(e, t, n) {
          return b.get(e, t, n, "json")
      }
  });

  function _n(e, n, r) {
      var i, o, a, s, u = e.contents,
          l = e.dataTypes,
          c = e.responseFields;
      for (s in c) s in r && (n[c[s]] = r[s]);
      while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
      if (o)
          for (s in u)
              if (u[s] && u[s].test(o)) {
                  l.unshift(s);
                  break
              }
      if (l[0] in r) a = l[0];
      else {
          for (s in r) {
              if (!l[0] || e.converters[s + " " + l[0]]) {
                  a = s;
                  break
              }
              i || (i = s)
          }
          a = a || i
      }
      return a ? (a !== l[0] && l.unshift(a), r[a]) : t
  }

  function Fn(e, t) {
      var n, r, i, o, a = {},
          s = 0,
          u = e.dataTypes.slice(),
          l = u[0];
      if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
          for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
      for (; r = u[++s];)
          if ("*" !== r) {
              if ("*" !== l && l !== r) {
                  if (i = a[l + " " + r] || a["* " + r], !i)
                      for (n in a)
                          if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                              i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                              break
                          }
                  if (i !== !0)
                      if (i && e["throws"]) t = i(t);
                      else try {
                          t = i(t)
                      } catch (c) {
                          return {
                              state: "parsererror",
                              error: i ? c : "No conversion from " + l + " to " + r
                          }
                      }
              }
              l = r
          }
      return {
          state: "success",
          data: t
      }
  }
  b.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return b.globalEval(e), e
          }
      }
  }), b.ajaxPrefilter("script", function(e) {
      e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), b.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var n, r = o.head || b("head")[0] || o.documentElement;
          return {
              send: function(t, i) {
                  n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                      (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                  }, r.insertBefore(n, r.firstChild)
              },
              abort: function() {
                  n && n.onload(t, !0)
              }
          }
      }
  });
  var On = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = On.pop() || b.expando + "_" + vn++;
          return this[e] = !0, e
      }
  }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
      var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
      return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
          return s || b.error(o + " was not called"), s[0]
      }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
          s = arguments
      }, i.always(function() {
          e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
      }), "script") : t
  });
  var Pn, Rn, Wn = 0,
      $n = e.ActiveXObject && function() {
          var e;
          for (e in Pn) Pn[e](t, !0)
      };

  function In() {
      try {
          return new e.XMLHttpRequest
      } catch (t) {}
  }

  function zn() {
      try {
          return new e.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
  }
  b.ajaxSettings.xhr = e.ActiveXObject ? function() {
      return !this.isLocal && In() || zn()
  } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
      if (!n.crossDomain || b.support.cors) {
          var r;
          return {
              send: function(i, o) {
                  var a, s, u = n.xhr();
                  if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                      for (s in n.xhrFields) u[s] = n.xhrFields[s];
                  n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                  try {
                      for (s in i) u.setRequestHeader(s, i[s])
                  } catch (l) {}
                  u.send(n.hasContent && n.data || null), r = function(e, i) {
                      var s, l, c, p;
                      try {
                          if (r && (i || 4 === u.readyState))
                              if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                              else {
                                  p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                  try {
                                      c = u.statusText
                                  } catch (f) {
                                      c = ""
                                  }
                                  s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                              }
                      } catch (d) {
                          i || o(-1, d)
                      }
                      p && o(s, c, p, l)
                  }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
              },
              abort: function() {
                  r && r(t, !0)
              }
          }
      }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
          "*": [function(e, t) {
              var n, r, i = this.createTween(e, t),
                  o = Yn.exec(t),
                  a = i.cur(),
                  s = +a || 0,
                  u = 1,
                  l = 20;
              if (o) {
                  if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                      s = b.css(i.elem, e, !0) || n || 1;
                      do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                  }
                  i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
              }
              return i
          }]
      };

  function Kn() {
      return setTimeout(function() {
          Xn = t
      }), Xn = b.now()
  }

  function Zn(e, t) {
      b.each(t, function(t, n) {
          var r = (Qn[t] || []).concat(Qn["*"]),
              i = 0,
              o = r.length;
          for (; o > i; i++)
              if (r[i].call(e, t, n)) return
      })
  }

  function er(e, t, n) {
      var r, i, o = 0,
          a = Gn.length,
          s = b.Deferred().always(function() {
              delete u.elem
          }),
          u = function() {
              if (i) return !1;
              var t = Xn || Kn(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = n / l.duration || 0,
                  o = 1 - r,
                  a = 0,
                  u = l.tweens.length;
              for (; u > a; a++) l.tweens[a].run(o);
              return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
          },
          l = s.promise({
              elem: e,
              props: b.extend({}, t),
              opts: b.extend(!0, {
                  specialEasing: {}
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: Xn || Kn(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r
              },
              stop: function(t) {
                  var n = 0,
                      r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; r > n; n++) l.tweens[n].run(1);
                  return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
              }
          }),
          c = l.props;
      for (tr(c, l.opts.specialEasing); a > o; o++)
          if (r = Gn[o].call(l, e, c, l.opts)) return r;
      return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function tr(e, t) {
      var n, r, i, o, a;
      for (i in e)
          if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
              n = a.expand(n), delete e[r];
              for (i in n) i in e || (e[i] = n[i], t[i] = o)
          } else t[r] = o
  }
  b.Animation = b.extend(er, {
      tweener: function(e, t) {
          b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
          var n, r = 0,
              i = e.length;
          for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
      },
      prefilter: function(e, t) {
          t ? Gn.unshift(e) : Gn.push(e)
      }
  });

  function nr(e, t, n) {
      var r, i, o, a, s, u, l, c, p, f = this,
          d = e.style,
          h = {},
          g = [],
          m = e.nodeType && nn(e);
      n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
          c.unqueued || p()
      }), c.unqueued++, f.always(function() {
          f.always(function() {
              c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
          })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
          d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
      }));
      for (i in t)
          if (a = t[i], Vn.exec(a)) {
              if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
              g.push(i)
          }
      if (o = g.length) {
          s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
              b(e).hide()
          }), f.done(function() {
              var t;
              b._removeData(e, "fxshow");
              for (t in h) b.style(e, t, h[t])
          });
          for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
      }
  }

  function rr(e, t, n, r, i) {
      return new rr.prototype.init(e, t, n, r, i)
  }
  b.Tween = rr, rr.prototype = {
      constructor: rr,
      init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = rr.propHooks[this.prop];
          return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = rr.propHooks[this.prop];
          return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
      }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
          },
          set: function(e) {
              b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, b.each(["toggle", "show", "hide"], function(e, t) {
      var n = b.fn[t];
      b.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
      }
  }), b.fn.extend({
      fadeTo: function(e, t, n, r) {
          return this.filter(nn).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, r)
      },
      animate: function(e, t, n, r) {
          var i = b.isEmptyObject(e),
              o = b.speed(t, n, r),
              a = function() {
                  var t = er(this, b.extend({}, e), o);
                  a.finish = function() {
                      t.stop(!0)
                  }, (i || b._data(this, "finish")) && t.stop(!0)
              };
          return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, n, r) {
          var i = function(e) {
              var t = e.stop;
              delete e.stop, t(r)
          };
          return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
              var t = !0,
                  n = null != e && e + "queueHooks",
                  o = b.timers,
                  a = b._data(this);
              if (n) a[n] && a[n].stop && i(a[n]);
              else
                  for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
              for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
              (t || !r) && b.dequeue(this, e)
          })
      },
      finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
              var t, n = b._data(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = b.timers,
                  a = r ? r.length : 0;
              for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
          })
      }
  });

  function ir(e, t) {
      var n, r = {
              height: e
          },
          i = 0;
      for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
  }
  b.each({
      slideDown: ir("show"),
      slideUp: ir("hide"),
      slideToggle: ir("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      b.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
      }
  }), b.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? b.extend({}, e) : {
          complete: n || !n && t || b.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !b.isFunction(t) && t
      };
      return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
      }, r
  }, b.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
      var e, n = b.timers,
          r = 0;
      for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
      n.length || b.fx.stop(), Xn = t
  }, b.fx.timer = function(e) {
      e() && b.timers.push(e) && b.fx.start()
  }, b.fx.interval = 13, b.fx.start = function() {
      Un || (Un = setInterval(b.fx.tick, b.fx.interval))
  }, b.fx.stop = function() {
      clearInterval(Un), Un = null
  }, b.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
      return b.grep(b.timers, function(t) {
          return e === t.elem
      }).length
  }), b.fn.offset = function(e) {
      if (arguments.length) return e === t ? this : this.each(function(t) {
          b.offset.setOffset(this, e, t)
      });
      var n, r, o = {
              top: 0,
              left: 0
          },
          a = this[0],
          s = a && a.ownerDocument;
      if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
          top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
          left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
      }) : o
  }, b.offset = {
      setOffset: function(e, t, n) {
          var r = b.css(e, "position");
          "static" === r && (e.style.position = "relative");
          var i = b(e),
              o = i.offset(),
              a = b.css(e, "top"),
              s = b.css(e, "left"),
              u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
              l = {},
              c = {},
              p, f;
          u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
      }
  }, b.fn.extend({
      position: function() {
          if (this[0]) {
              var e, t, n = {
                      top: 0,
                      left: 0
                  },
                  r = this[0];
              return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                  top: t.top - n.top - b.css(r, "marginTop", !0),
                  left: t.left - n.left - b.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var e = this.offsetParent || o.documentElement;
              while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
              return e || o.documentElement
          })
      }
  }), b.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, n) {
      var r = /Y/.test(n);
      b.fn[e] = function(i) {
          return b.access(this, function(e, i, o) {
              var a = or(e);
              return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
          }, e, i, arguments.length, null)
      }
  });

  function or(e) {
      return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  b.each({
      Height: "height",
      Width: "width"
  }, function(e, n) {
      b.each({
          padding: "inner" + e,
          content: n,
          "": "outer" + e
      }, function(r, i) {
          b.fn[i] = function(i, o) {
              var a = arguments.length && (r || "boolean" != typeof i),
                  s = r || (i === !0 || o === !0 ? "margin" : "border");
              return b.access(this, function(n, r, i) {
                  var o;
                  return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
              }, n, a ? i : t, a, null)
          }
      })
  }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
      return b
  })
})(window);
// Snap this specific version of jQuery into H5P. jQuery.noConflict will
// revert the globals to what they were before this file was loaded.
var H5P = window.H5P = window.H5P || {};
/**
* jQuery v1.9.1
*
* @member
*/
H5P.jQuery = jQuery.noConflict(true);
H5P.jQuery.ajaxPrefilter(function(s) {
  if (s.crossDomain) {
      s.contents.script = false;
  }
});;
/*jshint multistr: true */
// TODO: Should we split up the generic parts needed by the editor(and others), and the parts needed to "run" H5Ps?
/** @namespace */
var H5P = window.H5P = window.H5P || {};
/**
* Tells us if we're inside of an iframe.
* @member {boolean}
*/
H5P.isFramed = (window.self !== window.parent);
/**
* jQuery instance of current window.
* @member {H5P.jQuery}
*/
H5P.$window = H5P.jQuery(window);
/**
* List over H5P instances on the current page.
* @member {Array}
*/
H5P.instances = [];
// Detect if we support fullscreen, and what prefix to use.
if (document.documentElement.requestFullScreen) {
  /**
   * Browser prefix to use when entering fullscreen mode.
   * undefined means no fullscreen support.
   * @member {string}
   */
  H5P.fullScreenBrowserPrefix = '';
} else if (document.documentElement.webkitRequestFullScreen) {
  H5P.safariBrowser = navigator.userAgent.match(/version\/([.\d]+)/i);
  H5P.safariBrowser = (H5P.safariBrowser === null ? 0 : parseInt(H5P.safariBrowser[1]));
  // Do not allow fullscreen for safari < 7.
  if (H5P.safariBrowser === 0 || H5P.safariBrowser > 6) {
      H5P.fullScreenBrowserPrefix = 'webkit';
  }
} else if (document.documentElement.mozRequestFullScreen) {
  H5P.fullScreenBrowserPrefix = 'moz';
} else if (document.documentElement.msRequestFullscreen) {
  H5P.fullScreenBrowserPrefix = 'ms';
}
/**
* Keep track of when the H5Ps where started.
*
* @type {Object[]}
*/
H5P.opened = {};
/**
* Initialize H5P content.
* Scans for ".h5p-content" in the document and initializes H5P instances where found.
*
* @param {Object} target DOM Element
*/
H5P.init = function(target) {
  // Useful jQuery object.
  if (H5P.$body === undefined) {
      H5P.$body = H5P.jQuery(document.body);
  }
  // Determine if we can use full screen
  if (H5P.fullscreenSupported === undefined) {
      /**
       * Use this variable to check if fullscreen is supported. Fullscreen can be
       * restricted when embedding since not all browsers support the native
       * fullscreen, and the semi-fullscreen solution doesn't work when embedded.
       * @type {boolean}
       */
      H5P.fullscreenSupported = !H5PIntegration.fullscreenDisabled && !H5P.fullscreenDisabled && (!(H5P.isFramed && H5P.externalEmbed !== false) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled));
      // -We should consider document.msFullscreenEnabled when they get their
      // -element sizing corrected. Ref. https://connect.microsoft.com/IE/feedback/details/838286/ie-11-incorrectly-reports-dom-element-sizes-in-fullscreen-mode-when-fullscreened-element-is-within-an-iframe
      // Update: Seems to be no need as they've moved on to Webkit
  }
  // Deprecated variable, kept to maintain backwards compatability
  if (H5P.canHasFullScreen === undefined) {
      /**
       * @deprecated since version 1.11
       * @type {boolean}
       */
      H5P.canHasFullScreen = H5P.fullscreenSupported;
  }
  // H5Ps added in normal DIV.
  H5P.jQuery('.h5p-content:not(.h5p-initialized)', target).each(function() {
      var $element = H5P.jQuery(this).addClass('h5p-initialized');
      var $container = H5P.jQuery('<div class="h5p-container"></div>').appendTo($element);
      var contentId = $element.data('content-id');
      var contentData = H5PIntegration.contents['cid-' + contentId];
      if (contentData === undefined) {
          return H5P.error('No data for content id ' + contentId + '. Perhaps the library is gone?');
      }
      var library = {
          library: contentData.library,
          params: JSON.parse(contentData.jsonContent),
          metadata: contentData.metadata
      };
      H5P.getUserData(contentId, 'state', function(err, previousState) {
          if (previousState) {
              library.userDatas = {
                  state: previousState
              };
          } else if (previousState === null && H5PIntegration.saveFreq) {
              // Content has been reset. Display dialog.
              delete contentData.contentUserData;
              var dialog = new H5P.Dialog('content-user-data-reset', 'Data Reset', '<p>' + H5P.t('contentChanged') + '</p><p>' + H5P.t('startingOver') + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', $container);
              H5P.jQuery(dialog).on('dialog-opened', function(event, $dialog) {
                  var closeDialog = function(event) {
                      if (event.type === 'click' || event.which === 32) {
                          dialog.close();
                          H5P.deleteUserData(contentId, 'state', 0);
                      }
                  };
                  $dialog.find('.h5p-dialog-ok-button').click(closeDialog).keypress(closeDialog);
                  H5P.trigger(instance, 'resize');
              }).on('dialog-closed', function() {
                  H5P.trigger(instance, 'resize');
              });
              dialog.open();
          }
          // If previousState is false we don't have a previous state
      });
      // Create new instance.
      var instance = H5P.newRunnable(library, contentId, $container, true, {
          standalone: true
      });
      H5P.offlineRequestQueue = new H5P.OfflineRequestQueue({
          instance: instance
      });
      // Check if we should add and display a fullscreen button for this H5P.
      if (contentData.fullScreen == 1 && H5P.fullscreenSupported) {
          H5P.jQuery('<div class="h5p-content-controls">' + '<div role="button" ' + 'tabindex="0" ' + 'class="h5p-enable-fullscreen" ' + 'aria-label="' + H5P.t('fullscreen') + '" ' + 'title="' + H5P.t('fullscreen') + '">' + '</div>' + '</div>').prependTo($container).children().click(function() {
              H5P.fullScreen($container, instance);
          }).keydown(function(e) {
              if (e.which === 32 || e.which === 13) {
                  H5P.fullScreen($container, instance);
                  return false;
              }
          });
      }
      /**
       * Create action bar
       */
      var displayOptions = contentData.displayOptions;
      var displayFrame = false;
      if (displayOptions.frame) {
          // Special handling of copyrights
          if (displayOptions.copyright) {
              var copyrights = H5P.getCopyrights(instance, library.params, contentId, library.metadata);
              if (!copyrights) {
                  displayOptions.copyright = false;
              }
          }
          // Create action bar
          var actionBar = new H5P.ActionBar(displayOptions);
          var $actions = actionBar.getDOMElement();
          actionBar.on('reuse', function() {
              H5P.openReuseDialog($actions, contentData, library, instance, contentId);
              instance.triggerXAPI('accessed-reuse');
          });
          actionBar.on('copyrights', function() {
              var dialog = new H5P.Dialog('copyrights', H5P.t('copyrightInformation'), copyrights, $container);
              dialog.open(true);
              instance.triggerXAPI('accessed-copyright');
          });
          actionBar.on('embed', function() {
              H5P.openEmbedDialog($actions, contentData.embedCode, contentData.resizeCode, {
                  width: $element.width(),
                  height: $element.height()
              }, instance);
              instance.triggerXAPI('accessed-embed');
          });
          if (actionBar.hasActions()) {
              displayFrame = true;
              $actions.insertAfter($container);
          }
      }
      $element.addClass(displayFrame ? 'h5p-frame' : 'h5p-no-frame');
      // Keep track of when we started
      H5P.opened[contentId] = new Date();
      // Handle events when the user finishes the content. Useful for logging exercise results.
      H5P.on(instance, 'finish', function(event) {
          if (event.data !== undefined) {
              H5P.setFinished(contentId, event.data.score, event.data.maxScore, event.data.time);
          }
      });
      // Listen for xAPI events.
      H5P.on(instance, 'xAPI', H5P.xAPICompletedListener);
      // Auto save current state if supported
      if (H5PIntegration.saveFreq !== false && (instance.getCurrentState instanceof Function || typeof instance.getCurrentState === 'function')) {
          var saveTimer, save = function() {
              var state = instance.getCurrentState();
              if (state !== undefined) {
                  H5P.setUserData(contentId, 'state', state, {
                      deleteOnChange: true
                  });
              }
              if (H5PIntegration.saveFreq) {
                  // Continue autosave
                  saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
              }
          };
          if (H5PIntegration.saveFreq) {
              // Start autosave
              saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
          }
          // xAPI events will schedule a save in three seconds.
          H5P.on(instance, 'xAPI', function(event) {
              var verb = event.getVerb();
              if (verb === 'completed' || verb === 'progressed') {
                  clearTimeout(saveTimer);
                  saveTimer = setTimeout(save, 3000);
              }
          });
      }
      if (H5P.isFramed) {
          var resizeDelay;
          if (H5P.externalEmbed === false) {
              // Internal embed
              // Make it possible to resize the iframe when the content changes size. This way we get no scrollbars.
              var iframe = window.frameElement;
              var resizeIframe = function() {
                  if (window.parent.H5P.isFullscreen) {
                      return; // Skip if full screen.
                  }
                  // Retain parent size to avoid jumping/scrolling
                  var parentHeight = iframe.parentElement.style.height;
                  iframe.parentElement.style.height = iframe.parentElement.clientHeight + 'px';
                  // Note:  Force layout reflow
                  //        This fixes a flickering bug for embedded content on iPads
                  //        @see https://github.com/h5p/h5p-moodle-plugin/issues/237
                  iframe.getBoundingClientRect();
                  // Reset iframe height, in case content has shrinked.
                  iframe.style.height = '1px';
                  // Resize iframe so all content is visible.
                  iframe.style.height = (iframe.contentDocument.body.scrollHeight) + 'px';
                  // Free parent
                  iframe.parentElement.style.height = parentHeight;
              };
              H5P.on(instance, 'resize', function() {
                  // Use a delay to make sure iframe is resized to the correct size.
                  clearTimeout(resizeDelay);
                  resizeDelay = setTimeout(function() {
                      resizeIframe();
                  }, 1);
              });
          } else if (H5P.communicator) {
              // External embed
              var parentIsFriendly = false;
              // Handle that the resizer is loaded after the iframe
              H5P.communicator.on('ready', function() {
                  H5P.communicator.send('hello');
              });
              // Handle hello message from our parent window
              H5P.communicator.on('hello', function() {
                  // Initial setup/handshake is done
                  parentIsFriendly = true;
                  // Make iframe responsive
                  document.body.style.height = 'auto';
                  // Hide scrollbars for correct size
                  document.body.style.overflow = 'hidden';
                  // Content need to be resized to fit the new iframe size
                  H5P.trigger(instance, 'resize');
              });
              // When resize has been prepared tell parent window to resize
              H5P.communicator.on('resizePrepared', function() {
                  H5P.communicator.send('resize', {
                      scrollHeight: document.body.scrollHeight
                  });
              });
              H5P.communicator.on('resize', function() {
                  H5P.trigger(instance, 'resize');
              });
              H5P.on(instance, 'resize', function() {
                  if (H5P.isFullscreen) {
                      return; // Skip iframe resize
                  }
                  // Use a delay to make sure iframe is resized to the correct size.
                  clearTimeout(resizeDelay);
                  resizeDelay = setTimeout(function() {
                      // Only resize if the iframe can be resized
                      if (parentIsFriendly) {
                          H5P.communicator.send('prepareResize', {
                              scrollHeight: document.body.scrollHeight,
                              clientHeight: document.body.clientHeight
                          });
                      } else {
                          H5P.communicator.send('hello');
                      }
                  }, 0);
              });
          }
      }
      if (!H5P.isFramed || H5P.externalEmbed === false) {
          // Resize everything when window is resized.
          H5P.jQuery(window.parent).resize(function() {
              if (window.parent.H5P.isFullscreen) {
                  // Use timeout to avoid bug in certain browsers when exiting fullscreen. Some browser will trigger resize before the fullscreenchange event.
                  H5P.trigger(instance, 'resize');
              } else {
                  H5P.trigger(instance, 'resize');
              }
          });
      }
      H5P.instances.push(instance);
      // Resize content.
      H5P.trigger(instance, 'resize');
      // Logic for hiding focus effects when using mouse
      $element.addClass('using-mouse');
      $element.on('mousedown keydown keyup', function(event) {
          $element.toggleClass('using-mouse', event.type === 'mousedown');
      });
      if (H5P.externalDispatcher) {
          H5P.externalDispatcher.trigger('initialized');
      }
  });
  // Insert H5Ps that should be in iframes.
  H5P.jQuery('iframe.h5p-iframe:not(.h5p-initialized)', target).each(function() {
      var contentId = H5P.jQuery(this).addClass('h5p-initialized').data('content-id');
      this.contentDocument.open();
      this.contentDocument.write('<!doctype html><html class="h5p-iframe"><head>' + H5P.getHeadTags(contentId) + '</head><body><div class="h5p-content" data-content-id="' + contentId + '"/></body></html>');
      this.contentDocument.close();
  });
};
/**
* Loop through assets for iframe content and create a set of tags for head.
*
* @private
* @param {number} contentId
* @returns {string} HTML
*/
H5P.getHeadTags = function(contentId) {
  var createStyleTags = function(styles) {
      var tags = '';
      for (var i = 0; i < styles.length; i++) {
          tags += '<link rel="stylesheet" href="' + styles[i] + '">';
      }
      return tags;
  };
  var createScriptTags = function(scripts) {
      var tags = '';
      for (var i = 0; i < scripts.length; i++) {
          tags += '<script src="' + scripts[i] + '"></script>';
      }
      return tags;
  };
  return '<base target="_parent">' + createStyleTags(H5PIntegration.core.styles) + createStyleTags(H5PIntegration.contents['cid-' + contentId].styles) + createScriptTags(H5PIntegration.core.scripts) + createScriptTags(H5PIntegration.contents['cid-' + contentId].scripts) + '<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>';
};
/**
* When embedded the communicator helps talk to the parent page.
*
* @type {Communicator}
*/
H5P.communicator = (function() {
  /**
   * @class
   * @private
   */
  function Communicator() {
      var self = this;
      // Maps actions to functions
      var actionHandlers = {};
      // Register message listener
      window.addEventListener('message', function receiveMessage(event) {
          if (window.parent !== event.source || event.data.context !== 'h5p') {
              return; // Only handle messages from parent and in the correct context
          }
          if (actionHandlers[event.data.action] !== undefined) {
              actionHandlers[event.data.action](event.data);
          }
      }, false);
      /**
       * Register action listener.
       *
       * @param {string} action What you are waiting for
       * @param {function} handler What you want done
       */
      self.on = function(action, handler) {
          actionHandlers[action] = handler;
      };
      /**
       * Send a message to the all mighty father.
       *
       * @param {string} action
       * @param {Object} [data] payload
       */
      self.send = function(action, data) {
          if (data === undefined) {
              data = {};
          }
          data.context = 'h5p';
          data.action = action;
          // Parent origin can be anything
          window.parent.postMessage(data, '*');
      };
  }
  return (window.postMessage && window.addEventListener ? new Communicator() : undefined);
})();
/**
* Enter semi fullscreen for the given H5P instance
*
* @param {H5P.jQuery} $element Content container.
* @param {Object} instance
* @param {function} exitCallback Callback function called when user exits fullscreen.
* @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
*/
H5P.semiFullScreen = function($element, instance, exitCallback, body) {
  H5P.fullScreen($element, instance, exitCallback, body, true);
};
/**
* Enter fullscreen for the given H5P instance.
*
* @param {H5P.jQuery} $element Content container.
* @param {Object} instance
* @param {function} exitCallback Callback function called when user exits fullscreen.
* @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
* @param {Boolean} forceSemiFullScreen
*/
H5P.fullScreen = function($element, instance, exitCallback, body, forceSemiFullScreen) {
  if (H5P.exitFullScreen !== undefined) {
      return; // Cannot enter new fullscreen until previous is over
  }
  if (H5P.isFramed && H5P.externalEmbed === false) {
      // Trigger resize on wrapper in parent window.
      window.parent.H5P.fullScreen($element, instance, exitCallback, H5P.$body.get(), forceSemiFullScreen);
      H5P.isFullscreen = true;
      H5P.exitFullScreen = function() {
          window.parent.H5P.exitFullScreen();
      };
      H5P.on(instance, 'exitFullScreen', function() {
          H5P.isFullscreen = false;
          H5P.exitFullScreen = undefined;
      });
      return;
  }
  var $container = $element;
  var $classes, $iframe, $body;
  if (body === undefined) {
      $body = H5P.$body;
  } else {
      // We're called from an iframe.
      $body = H5P.jQuery(body);
      $classes = $body.add($element.get());
      var iframeSelector = '#h5p-iframe-' + $element.parent().data('content-id');
      $iframe = H5P.jQuery(iframeSelector);
      $element = $iframe.parent(); // Put iframe wrapper in fullscreen, not container.
  }
  $classes = $element.add(H5P.$body).add($classes);
  /**
   * Prepare for resize by setting the correct styles.
   *
   * @private
   * @param {string} classes CSS
   */
  var before = function(classes) {
      $classes.addClass(classes);
      if ($iframe !== undefined) {
          // Set iframe to its default size(100%).
          $iframe.css('height', '');
      }
  };
  /**
   * Gets called when fullscreen mode has been entered.
   * Resizes and sets focus on content.
   *
   * @private
   */
  var entered = function() {
      // Do not rely on window resize events.
      H5P.trigger(instance, 'resize');
      H5P.trigger(instance, 'focus');
      H5P.trigger(instance, 'enterFullScreen');
  };
  /**
   * Gets called when fullscreen mode has been exited.
   * Resizes and sets focus on content.
   *
   * @private
   * @param {string} classes CSS
   */
  var done = function(classes) {
      H5P.isFullscreen = false;
      $classes.removeClass(classes);
      // Do not rely on window resize events.
      H5P.trigger(instance, 'resize');
      H5P.trigger(instance, 'focus');
      H5P.exitFullScreen = undefined;
      if (exitCallback !== undefined) {
          exitCallback();
      }
      H5P.trigger(instance, 'exitFullScreen');
  };
  H5P.isFullscreen = true;
  if (H5P.fullScreenBrowserPrefix === undefined || forceSemiFullScreen === true) {
      // Create semi fullscreen.
      if (H5P.isFramed) {
          return; // TODO: Should we support semi-fullscreen for IE9 & 10 ?
      }
      before('h5p-semi-fullscreen');
      var $disable = H5P.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + H5P.t('disableFullscreen') + '" aria-label="' + H5P.t('disableFullscreen') + '"></div>').appendTo($container.find('.h5p-content-controls'));
      var keyup, disableSemiFullscreen = H5P.exitFullScreen = function() {
          if (prevViewportContent) {
              // Use content from the previous viewport tag
              h5pViewport.content = prevViewportContent;
          } else {
              // Remove viewport tag
              head.removeChild(h5pViewport);
          }
          $disable.remove();
          $body.unbind('keyup', keyup);
          done('h5p-semi-fullscreen');
      };
      keyup = function(event) {
          if (event.keyCode === 27) {
              disableSemiFullscreen();
          }
      };
      $disable.click(disableSemiFullscreen);
      $body.keyup(keyup);
      // Disable zoom
      var prevViewportContent, h5pViewport;
      var metaTags = document.getElementsByTagName('meta');
      for (var i = 0; i < metaTags.length; i++) {
          if (metaTags[i].name === 'viewport') {
              // Use the existing viewport tag
              h5pViewport = metaTags[i];
              prevViewportContent = h5pViewport.content;
              break;
          }
      }
      if (!prevViewportContent) {
          // Create a new viewport tag
          h5pViewport = document.createElement('meta');
          h5pViewport.name = 'viewport';
      }
      h5pViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
      if (!prevViewportContent) {
          // Insert the new viewport tag
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(h5pViewport);
      }
      entered();
  } else {
      // Create real fullscreen.
      before('h5p-fullscreen');
      var first, eventName = (H5P.fullScreenBrowserPrefix === 'ms' ? 'MSFullscreenChange' : H5P.fullScreenBrowserPrefix + 'fullscreenchange');
      document.addEventListener(eventName, function() {
          if (first === undefined) {
              // We are entering fullscreen mode
              first = false;
              entered();
              return;
          }
          // We are exiting fullscreen
          done('h5p-fullscreen');
          document.removeEventListener(eventName, arguments.callee, false);
      });
      if (H5P.fullScreenBrowserPrefix === '') {
          $element[0].requestFullScreen();
      } else {
          var method = (H5P.fullScreenBrowserPrefix === 'ms' ? 'msRequestFullscreen' : H5P.fullScreenBrowserPrefix + 'RequestFullScreen');
          var params = (H5P.fullScreenBrowserPrefix === 'webkit' && H5P.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : undefined);
          $element[0][method](params);
      }
      // Allows everone to exit
      H5P.exitFullScreen = function() {
          if (H5P.fullScreenBrowserPrefix === '') {
              document.exitFullscreen();
          } else if (H5P.fullScreenBrowserPrefix === 'moz') {
              document.mozCancelFullScreen();
          } else {
              document[H5P.fullScreenBrowserPrefix + 'ExitFullscreen']();
          }
      };
  }
};
(function() {
  /**
   * Helper for adding a query parameter to an existing path that may already
   * contain one or a hash.
   *
   * @param {string} path
   * @param {string} parameter
   * @return {string}
   */
  H5P.addQueryParameter = function(path, parameter) {
      let newPath, secondSplit;
      const firstSplit = path.split('?');
      if (firstSplit[1]) {
          // There is already an existing query
          secondSplit = firstSplit[1].split('#');
          newPath = firstSplit[0] + '?' + secondSplit[0] + '&';
      } else {
          // No existing query, just need to take care of the hash
          secondSplit = firstSplit[0].split('#');
          newPath = secondSplit[0] + '?';
      }
      newPath += parameter;
      if (secondSplit[1]) {
          // Add back the hash
          newPath += '#' + secondSplit[1];
      }
      return newPath;
  };
  /**
   * Helper for setting the crossOrigin attribute + the complete correct source.
   * Note: This will start loading the resource.
   *
   * @param {Element} element DOM element, typically img, video or audio
   * @param {Object} source File object from parameters/json_content (created by H5PEditor)
   * @param {number} contentId Needed to determine the complete correct file path
   */
  H5P.setSource = function(element, source, contentId) {
      let path = source.path;
      const crossOrigin = H5P.getCrossOrigin(source);
      if (crossOrigin) {
          element.crossOrigin = crossOrigin;
          if (H5PIntegration.crossoriginCacheBuster) {
              // Some sites may want to add a cache buster in case the same resource
              // is used elsewhere without the crossOrigin attribute
              path = H5P.addQueryParameter(path, H5PIntegration.crossoriginCacheBuster);
          }
      } else {
          // In case this element has been used before.
          element.removeAttribute('crossorigin');
      }
      element.src = H5P.getPath(path, contentId);
  };
  /**
   * Check if the given path has a protocol.
   *
   * @private
   * @param {string} path
   * @return {string}
   */
  var hasProtocol = function(path) {
      return path.match(/^[a-z0-9]+:\/\//i);
  };
  /**
   * Get the crossOrigin policy to use for img, video and audio tags on the current site.
   *
   * @param {Object|string} source File object from parameters/json_content - Can also be URL(deprecated usage)
   * @returns {string|null} crossOrigin attribute value required by the source
   */
  H5P.getCrossOrigin = function(source) {
      if (typeof source !== 'object') {
          // Deprecated usage.
          return H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && source.match(H5PIntegration.crossoriginRegex) ? H5PIntegration.crossorigin : null;
      }
      if (H5PIntegration.crossorigin && !hasProtocol(source.path)) {
          // This is a local file, use the local crossOrigin policy.
          return H5PIntegration.crossorigin;
          // Note: We cannot use this for all external sources since we do not know
          // each server's individual policy. We could add support for a list of
          // external sources and their policy later on.
      }
  };
  /**
   * Find the path to the content files based on the id of the content.
   * Also identifies and returns absolute paths.
   *
   * @param {string} path
   *   Relative to content folder or absolute.
   * @param {number} contentId
   *   ID of the content requesting the path.
   * @returns {string}
   *   Complete URL to path.
   */
  H5P.getPath = function(path, contentId) {
      if (hasProtocol(path)) {
          return path;
      }
      var prefix;
      var isTmpFile = (path.substr(-4, 4) === '#tmp');
      if (contentId !== undefined && !isTmpFile) {
          // Check for custom override URL
          if (H5PIntegration.contents !== undefined && H5PIntegration.contents['cid-' + contentId]) {
              prefix = H5PIntegration.contents['cid-' + contentId].contentUrl;
          }
          if (!prefix) {
              prefix = H5PIntegration.url + '/content/' + contentId;
          }
      } else if (window.H5PEditor !== undefined) {
          prefix = H5PEditor.filesPath;
      } else {
          return;
      }
      if (!hasProtocol(prefix)) {
          // Use absolute urls
          prefix = window.location.protocol + "//" + window.location.host + prefix;
      }
      return prefix + '/' + path;
  };
})();
/**
* THIS FUNCTION IS DEPRECATED, USE getPath INSTEAD
* Will be remove march 2016.
*
* Find the path to the content files folder based on the id of the content
*
* @deprecated
*   Will be removed march 2016.
* @param contentId
*   Id of the content requesting the path
* @returns {string}
*   URL
*/
H5P.getContentPath = function(contentId) {
  return H5PIntegration.url + '/content/' + contentId;
};
/**
* Get library class constructor from H5P by classname.
* Note that this class will only work for resolve "H5P.NameWithoutDot".
* Also check out {@link H5P.newRunnable}
*
* Used from libraries to construct instances of other libraries' objects by name.
*
* @param {string} name Name of library
* @returns {Object} Class constructor
*/
H5P.classFromName = function(name) {
  var arr = name.split(".");
  return this[arr[arr.length - 1]];
};
/**
* A safe way of creating a new instance of a runnable H5P.
*
* @param {Object} library
*   Library/action object form params.
* @param {number} contentId
*   Identifies the content.
* @param {H5P.jQuery} [$attachTo]
*   Element to attach the instance to.
* @param {boolean} [skipResize]
*   Skip triggering of the resize event after attaching.
* @param {Object} [extras]
*   Extra parameters for the H5P content constructor
* @returns {Object}
*   Instance.
*/
H5P.newRunnable = function(library, contentId, $attachTo, skipResize, extras) {
  var nameSplit, versionSplit, machineName;
  try {
      nameSplit = library.library.split(' ', 2);
      machineName = nameSplit[0];
      versionSplit = nameSplit[1].split('.', 2);
  } catch (err) {
      return H5P.error('Invalid library string: ' + library.library);
  }
  if ((library.params instanceof Object) !== true || (library.params instanceof Array) === true) {
      H5P.error('Invalid library params for: ' + library.library);
      return H5P.error(library.params);
  }
  // Find constructor function
  var constructor;
  try {
      nameSplit = nameSplit[0].split('.');
      constructor = window;
      for (var i = 0; i < nameSplit.length; i++) {
          constructor = constructor[nameSplit[i]];
      }
      if (typeof constructor !== 'function') {
          throw null;
      }
  } catch (err) {
      return H5P.error('Unable to find constructor for: ' + library.library);
  }
  if (extras === undefined) {
      extras = {};
  }
  if (library.subContentId) {
      extras.subContentId = library.subContentId;
  }
  if (library.userDatas && library.userDatas.state && H5PIntegration.saveFreq) {
      extras.previousState = library.userDatas.state;
  }
  if (library.metadata) {
      extras.metadata = library.metadata;
  }
  // Makes all H5P libraries extend H5P.ContentType:
  var standalone = extras.standalone || false;
  // This order makes it possible for an H5P library to override H5P.ContentType functions!
  constructor.prototype = H5P.jQuery.extend({}, H5P.ContentType(standalone).prototype, constructor.prototype);
  var instance;
  // Some old library versions have their own custom third parameter.
  // Make sure we don't send them the extras.
  // (they will interpret it as something else)
  if (H5P.jQuery.inArray(library.library, ['H5P.CoursePresentation 1.0', 'H5P.CoursePresentation 1.1', 'H5P.CoursePresentation 1.2', 'H5P.CoursePresentation 1.3']) > -1) {
      instance = new constructor(library.params, contentId);
  } else {
      instance = new constructor(library.params, contentId, extras);
  }
  if (instance.$ === undefined) {
      instance.$ = H5P.jQuery(instance);
  }
  if (instance.contentId === undefined) {
      instance.contentId = contentId;
  }
  if (instance.subContentId === undefined && library.subContentId) {
      instance.subContentId = library.subContentId;
  }
  if (instance.parent === undefined && extras && extras.parent) {
      instance.parent = extras.parent;
  }
  if (instance.libraryInfo === undefined) {
      instance.libraryInfo = {
          versionedName: library.library,
          versionedNameNoSpaces: machineName + '-' + versionSplit[0] + '.' + versionSplit[1],
          machineName: machineName,
          majorVersion: versionSplit[0],
          minorVersion: versionSplit[1]
      };
  }
  if ($attachTo !== undefined) {
      $attachTo.toggleClass('h5p-standalone', standalone);
      instance.attach($attachTo);
      H5P.trigger(instance, 'domChanged', {
          '$target': $attachTo,
          'library': machineName,
          'key': 'newLibrary'
      }, {
          'bubbles': true,
          'external': true
      });
      if (skipResize === undefined || !skipResize) {
          // Resize content.
          H5P.trigger(instance, 'resize');
      }
  }
  return instance;
};
/**
* Used to print useful error messages. (to JavaScript error console)
*
* @param {*} err Error to print.
*/
H5P.error = function(err) {
  if (window.console !== undefined && console.error !== undefined) {
      console.error(err.stack ? err.stack : err);
  }
};
/**
* Translate text strings.
*
* @param {string} key
*   Translation identifier, may only contain a-zA-Z0-9. No spaces or special chars.
* @param {Object} [vars]
*   Data for placeholders.
* @param {string} [ns]
*   Translation namespace. Defaults to H5P.
* @returns {string}
*   Translated text
*/
H5P.t = function(key, vars, ns) {
  if (ns === undefined) {
      ns = 'H5P';
  }
  if (H5PIntegration.l10n[ns] === undefined) {
      return '[Missing translation namespace "' + ns + '"]';
  }
  if (H5PIntegration.l10n[ns][key] === undefined) {
      return '[Missing translation "' + key + '" in "' + ns + '"]';
  }
  var translation = H5PIntegration.l10n[ns][key];
  if (vars !== undefined) {
      // Replace placeholder with variables.
      for (var placeholder in vars) {
          translation = translation.replace(placeholder, vars[placeholder]);
      }
  }
  return translation;
};
/**
* Creates a new popup dialog over the H5P content.
*
* @class
* @param {string} name
*   Used for html class.
* @param {string} title
*   Used for header.
* @param {string} content
*   Displayed inside the dialog.
* @param {H5P.jQuery} $element
*   Which DOM element the dialog should be inserted after.
*/
H5P.Dialog = function(name, title, content, $element) {
  /** @alias H5P.Dialog# */
  var self = this;
  var $dialog = H5P.jQuery('<div class="h5p-popup-dialog h5p-' + name + '-dialog" role="dialog" tabindex="-1">\
                            <div class="h5p-inner">\
                              <h2>' + title + '</h2>\
                              <div class="h5p-scroll-content">' + content + '</div>\
                              <div class="h5p-close" role="button" tabindex="0" aria-label="' + H5P.t('close') + '" title="' + H5P.t('close') + '"></div>\
                            </div>\
                          </div>').insertAfter($element).click(function(e) {
      if (e && e.originalEvent && e.originalEvent.preventClosing) {
          return;
      }
      self.close();
  }).children('.h5p-inner').click(function(e) {
      e.originalEvent.preventClosing = true;
  }).find('.h5p-close').click(function() {
      self.close();
  }).keypress(function(e) {
      if (e.which === 13 || e.which === 32) {
          self.close();
          return false;
      }
  }).end().find('a').click(function(e) {
      e.stopPropagation();
  }).end().end();
  /**
   * Opens the dialog.
   */
  self.open = function(scrollbar) {
      if (scrollbar) {
          $dialog.css('height', '100%');
      }
      setTimeout(function() {
          $dialog.addClass('h5p-open'); // Fade in
          // Triggering an event, in case something has to be done after dialog has been opened.
          H5P.jQuery(self).trigger('dialog-opened', [$dialog]);
          $dialog.focus();
      }, 1);
  };
  /**
   * Closes the dialog.
   */
  self.close = function() {
      $dialog.removeClass('h5p-open'); // Fade out
      setTimeout(function() {
          $dialog.remove();
          H5P.jQuery(self).trigger('dialog-closed', [$dialog]);
          $element.attr('tabindex', '-1');
          $element.focus();
      }, 200);
  };
};
/**
* Gather copyright information for the given content.
*
* @param {Object} instance
*   H5P instance to get copyright information for.
* @param {Object} parameters
*   Parameters of the content instance.
* @param {number} contentId
*   Identifies the H5P content
* @param {Object} metadata
*   Metadata of the content instance.
* @returns {string} Copyright information.
*/
H5P.getCopyrights = function(instance, parameters, contentId, metadata) {
  var copyrights;
  if (instance.getCopyrights !== undefined) {
      try {
          // Use the instance's own copyright generator
          copyrights = instance.getCopyrights();
      } catch (err) {
          // Failed, prevent crashing page.
      }
  }
  if (copyrights === undefined) {
      // Create a generic flat copyright list
      copyrights = new H5P.ContentCopyrights();
      H5P.findCopyrights(copyrights, parameters, contentId);
  }
  var metadataCopyrights = H5P.buildMetadataCopyrights(metadata, instance.libraryInfo.machineName);
  if (metadataCopyrights !== undefined) {
      copyrights.addMediaInFront(metadataCopyrights);
  }
  if (copyrights !== undefined) {
      // Convert to string
      copyrights = copyrights.toString();
  }
  return copyrights;
};
/**
* Gather a flat list of copyright information from the given parameters.
*
* @param {H5P.ContentCopyrights} info
*   Used to collect all information in.
* @param {(Object|Array)} parameters
*   To search for file objects in.
* @param {number} contentId
*   Used to insert thumbnails for images.
* @param {Object} extras - Extras.
* @param {object} extras.metadata - Metadata
* @param {object} extras.machineName - Library name of some kind.
*   Metadata of the content instance.
*/
H5P.findCopyrights = function(info, parameters, contentId, extras) {
  // If extras are
  if (extras) {
      extras.params = parameters;
      buildFromMetadata(extras, extras.machineName, contentId);
  }
  var lastContentTypeName;
  // Cycle through parameters
  for (var field in parameters) {
      if (!parameters.hasOwnProperty(field)) {
          continue; // Do not check
      }
      /**
       * @deprecated This hack should be removed after 2017-11-01
       * The code that was using this was removed by HFP-574
       * This note was seen on 2018-04-04, and consultation with
       * higher authorities lead to keeping the code for now ;-)
       */
      if (field === 'overrideSettings') {
          console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used.");
          console.warn(parameters);
          continue;
      }
      var value = parameters[field];
      if (value && value.library && typeof value.library === 'string') {
          lastContentTypeName = value.library.split(' ')[0];
      } else if (value && value.library && typeof value.library === 'object') {
          lastContentTypeName = (value.library.library && typeof value.library.library === 'string') ? value.library.library.split(' ')[0] : lastContentTypeName;
      }
      if (value instanceof Array) {
          // Cycle through array
          H5P.findCopyrights(info, value, contentId);
      } else if (value instanceof Object) {
          buildFromMetadata(value, lastContentTypeName, contentId);
          // Check if object is a file with copyrights (old core)
          if (value.copyright === undefined || value.copyright.license === undefined || value.path === undefined || value.mime === undefined) {
              // Nope, cycle throught object
              H5P.findCopyrights(info, value, contentId);
          } else {
              // Found file, add copyrights
              var copyrights = new H5P.MediaCopyright(value.copyright);
              if (value.width !== undefined && value.height !== undefined) {
                  copyrights.setThumbnail(new H5P.Thumbnail(H5P.getPath(value.path, contentId), value.width, value.height));
              }
              info.addMedia(copyrights);
          }
      }
  }

  function buildFromMetadata(data, name, contentId) {
      if (data.metadata) {
          const metadataCopyrights = H5P.buildMetadataCopyrights(data.metadata, name);
          if (metadataCopyrights !== undefined) {
              if (data.params && data.params.contentName === 'Image' && data.params.file) {
                  const path = data.params.file.path;
                  const width = data.params.file.width;
                  const height = data.params.file.height;
                  metadataCopyrights.setThumbnail(new H5P.Thumbnail(H5P.getPath(path, contentId), width, height));
              }
              info.addMedia(metadataCopyrights);
          }
      }
  }
};
H5P.buildMetadataCopyrights = function(metadata) {
  if (metadata && metadata.license !== undefined && metadata.license !== 'U') {
      var dataset = {
          contentType: metadata.contentType,
          title: metadata.title,
          author: (metadata.authors && metadata.authors.length > 0) ? metadata.authors.map(function(author) {
              return (author.role) ? author.name + ' (' + author.role + ')' : author.name;
          }).join(', ') : undefined,
          source: metadata.source,
          year: (metadata.yearFrom) ? (metadata.yearFrom + ((metadata.yearTo) ? '-' + metadata.yearTo : '')) : undefined,
          license: metadata.license,
          version: metadata.licenseVersion,
          licenseExtras: metadata.licenseExtras,
          changes: (metadata.changes && metadata.changes.length > 0) ? metadata.changes.map(function(change) {
              return change.log + (change.author ? ', ' + change.author : '') + (change.date ? ', ' + change.date : '');
          }).join(' / ') : undefined
      };
      return new H5P.MediaCopyright(dataset);
  }
};
/**
* Display a dialog containing the download button and copy button.
*
* @param {H5P.jQuery} $element
* @param {Object} contentData
* @param {Object} library
* @param {Object} instance
* @param {number} contentId
*/
H5P.openReuseDialog = function($element, contentData, library, instance, contentId) {
  let html = '';
  if (contentData.displayOptions.export) {
      html += '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>';
  }
  if (contentData.displayOptions.export && contentData.displayOptions.copy) {
      html += '<div class="h5p-horizontal-line-text"><span>or</span></div>';
  }
  if (contentData.displayOptions.copy) {
      html += '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>';
  }
  const dialog = new H5P.Dialog('reuse', H5P.t('reuseContent'), html, $element);
  // Selecting embed code when dialog is opened
  H5P.jQuery(dialog).on('dialog-opened', function(e, $dialog) {
      H5P.jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>').click(function(e) {
          e.stopPropagation();
      }).appendTo($dialog.find('h2'));
      $dialog.find('.h5p-download-button').click(function() {
          window.location.href = contentData.exportUrl;
          instance.triggerXAPI('downloaded');
          dialog.close();
      });
      $dialog.find('.h5p-copy-button').click(function() {
          const item = new H5P.ClipboardItem(library);
          item.contentId = contentId;
          H5P.setClipboard(item);
          instance.triggerXAPI('copied');
          dialog.close();
          H5P.attachToastTo(H5P.jQuery('.h5p-content:first')[0], H5P.t('contentCopied'), {
              position: {
                  horizontal: 'centered',
                  vertical: 'centered',
                  noOverflowX: true
              }
          });
      });
      H5P.trigger(instance, 'resize');
  }).on('dialog-closed', function() {
      H5P.trigger(instance, 'resize');
  });
  dialog.open();
};
/**
* Display a dialog containing the embed code.
*
* @param {H5P.jQuery} $element
*   Element to insert dialog after.
* @param {string} embedCode
*   The embed code.
* @param {string} resizeCode
*   The advanced resize code
* @param {Object} size
*   The content's size.
* @param {number} size.width
* @param {number} size.height
*/
H5P.openEmbedDialog = function($element, embedCode, resizeCode, size, instance) {
  var fullEmbedCode = embedCode + resizeCode;
  var dialog = new H5P.Dialog('embed', H5P.t('embed'), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + H5P.t('size') + ': <input type="text" value="' + Math.ceil(size.width) + '" class="h5p-embed-size"/> × <input type="text" value="' + Math.ceil(size.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + H5P.t('showAdvanced') + '</div><div class="h5p-expander-content"><p>' + H5P.t('advancedHelp') + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + resizeCode + '</textarea></div>', $element);
  // Selecting embed code when dialog is opened
  H5P.jQuery(dialog).on('dialog-opened', function(event, $dialog) {
      var $inner = $dialog.find('.h5p-inner');
      var $scroll = $inner.find('.h5p-scroll-content');
      var diff = $scroll.outerHeight() - $scroll.innerHeight();
      var positionInner = function() {
          H5P.trigger(instance, 'resize');
      };
      // Handle changing of width/height
      var $w = $dialog.find('.h5p-embed-size:eq(0)');
      var $h = $dialog.find('.h5p-embed-size:eq(1)');
      var getNum = function($e, d) {
          var num = parseFloat($e.val());
          if (isNaN(num)) {
              return d;
          }
          return Math.ceil(num);
      };
      var updateEmbed = function() {
          $dialog.find('.h5p-embed-code-container:first').val(fullEmbedCode.replace(':w', getNum($w, size.width)).replace(':h', getNum($h, size.height)));
      };
      $w.change(updateEmbed);
      $h.change(updateEmbed);
      updateEmbed();
      // Select text and expand textareas
      $dialog.find('.h5p-embed-code-container').each(function() {
          H5P.jQuery(this).css('height', this.scrollHeight + 'px').focus(function() {
              H5P.jQuery(this).select();
          });
      });
      $dialog.find('.h5p-embed-code-container').eq(0).select();
      positionInner();
      // Expand advanced embed
      var expand = function() {
          var $expander = H5P.jQuery(this);
          var $content = $expander.next();
          if ($content.is(':visible')) {
              $expander.removeClass('h5p-open').text(H5P.t('showAdvanced')).attr('aria-expanded', 'true');
              $content.hide();
          } else {
              $expander.addClass('h5p-open').text(H5P.t('hideAdvanced')).attr('aria-expanded', 'false');
              $content.show();
          }
          $dialog.find('.h5p-embed-code-container').each(function() {
              H5P.jQuery(this).css('height', this.scrollHeight + 'px');
          });
          positionInner();
      };
      $dialog.find('.h5p-expander').click(expand).keypress(function(event) {
          if (event.keyCode === 32) {
              expand.apply(this);
              return false;
          }
      });
  }).on('dialog-closed', function() {
      H5P.trigger(instance, 'resize');
  });
  dialog.open();
};
/**
* Show a toast message.
*
* The reference element could be dom elements the toast should be attached to,
* or e.g. the document body for general toast messages.
*
* @param {DOM} element Reference element to show toast message for.
* @param {string} message Message to show.
* @param {object} [config] Configuration.
* @param {string} [config.style=h5p-toast] Style name for the tooltip.
* @param {number} [config.duration=3000] Toast message length in ms.
* @param {object} [config.position] Relative positioning of the toast.
* @param {string} [config.position.horizontal=centered] [before|left|centered|right|after].
* @param {string} [config.position.vertical=below] [above|top|centered|bottom|below].
* @param {number} [config.position.offsetHorizontal=0] Extra horizontal offset.
* @param {number} [config.position.offsetVertical=0] Extra vetical offset.
* @param {boolean} [config.position.noOverflowLeft=false] True to prevent overflow left.
* @param {boolean} [config.position.noOverflowRight=false] True to prevent overflow right.
* @param {boolean} [config.position.noOverflowTop=false] True to prevent overflow top.
* @param {boolean} [config.position.noOverflowBottom=false] True to prevent overflow bottom.
* @param {boolean} [config.position.noOverflowX=false] True to prevent overflow left and right.
* @param {boolean} [config.position.noOverflowY=false] True to prevent overflow top and bottom.
* @param {object} [config.position.overflowReference=document.body] DOM reference for overflow.
*/
H5P.attachToastTo = function(element, message, config) {
  if (element === undefined || message === undefined) {
      return;
  }
  const eventPath = function(evt) {
      var path = (evt.composedPath && evt.composedPath()) || evt.path;
      var target = evt.target;
      if (path != null) {
          // Safari doesn't include Window, but it should.
          return (path.indexOf(window) < 0) ? path.concat(window) : path;
      }
      if (target === window) {
          return [window];
      }

      function getParents(node, memo) {
          memo = memo || [];
          var parentNode = node.parentNode;
          if (!parentNode) {
              return memo;
          } else {
              return getParents(parentNode, memo.concat(parentNode));
          }
      }
      return [target].concat(getParents(target), window);
  };
  /**
   * Handle click while toast is showing.
   */
  const clickHandler = function(event) {
      /*
       * A common use case will be to attach toasts to buttons that are clicked.
       * The click would remove the toast message instantly without this check.
       * Children of the clicked element are also ignored.
       */
      var path = eventPath(event);
      if (path.indexOf(element) !== -1) {
          return;
      }
      clearTimeout(timer);
      removeToast();
  };
  /**
   * Remove the toast message.
   */
  const removeToast = function() {
      document.removeEventListener('click', clickHandler);
      if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
      }
  };
  /**
   * Get absolute coordinates for the toast.
   *
   * @param {DOM} element Reference element to show toast message for.
   * @param {DOM} toast Toast element.
   * @param {object} [position={}] Relative positioning of the toast message.
   * @param {string} [position.horizontal=centered] [before|left|centered|right|after].
   * @param {string} [position.vertical=below] [above|top|centered|bottom|below].
   * @param {number} [position.offsetHorizontal=0] Extra horizontal offset.
   * @param {number} [position.offsetVertical=0] Extra vetical offset.
   * @param {boolean} [position.noOverflowLeft=false] True to prevent overflow left.
   * @param {boolean} [position.noOverflowRight=false] True to prevent overflow right.
   * @param {boolean} [position.noOverflowTop=false] True to prevent overflow top.
   * @param {boolean} [position.noOverflowBottom=false] True to prevent overflow bottom.
   * @param {boolean} [position.noOverflowX=false] True to prevent overflow left and right.
   * @param {boolean} [position.noOverflowY=false] True to prevent overflow top and bottom.
   * @return {object}
   */
  const getToastCoordinates = function(element, toast, position) {
      position = position || {};
      position.offsetHorizontal = position.offsetHorizontal || 0;
      position.offsetVertical = position.offsetVertical || 0;
      const toastRect = toast.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      let left = 0;
      let top = 0;
      // Compute horizontal position
      switch (position.horizontal) {
          case 'before':
              left = elementRect.left - toastRect.width - position.offsetHorizontal;
              break;
          case 'after':
              left = elementRect.left + elementRect.width + position.offsetHorizontal;
              break;
          case 'left':
              left = elementRect.left + position.offsetHorizontal;
              break;
          case 'right':
              left = elementRect.left + elementRect.width - toastRect.width - position.offsetHorizontal;
              break;
          case 'centered':
              left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
              break;
          default:
              left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
      }
      // Compute vertical position
      switch (position.vertical) {
          case 'above':
              top = elementRect.top - toastRect.height - position.offsetVertical;
              break;
          case 'below':
              top = elementRect.top + elementRect.height + position.offsetVertical;
              break;
          case 'top':
              top = elementRect.top + position.offsetVertical;
              break;
          case 'bottom':
              top = elementRect.top + elementRect.height - toastRect.height - position.offsetVertical;
              break;
          case 'centered':
              top = elementRect.top + elementRect.height / 2 - toastRect.height / 2 + position.offsetVertical;
              break;
          default:
              top = elementRect.top + elementRect.height + position.offsetVertical;
      }
      // Prevent overflow
      const overflowElement = document.body;
      const bounds = overflowElement.getBoundingClientRect();
      if ((position.noOverflowLeft || position.noOverflowX) && (left < bounds.x)) {
          left = bounds.x;
      }
      if ((position.noOverflowRight || position.noOverflowX) && ((left + toastRect.width) > (bounds.x + bounds.width))) {
          left = bounds.x + bounds.width - toastRect.width;
      }
      if ((position.noOverflowTop || position.noOverflowY) && (top < bounds.y)) {
          top = bounds.y;
      }
      if ((position.noOverflowBottom || position.noOverflowY) && ((top + toastRect.height) > (bounds.y + bounds.height))) {
          left = bounds.y + bounds.height - toastRect.height;
      }
      return {
          left: left,
          top: top
      };
  };
  // Sanitization
  config = config || {};
  config.style = config.style || 'h5p-toast';
  config.duration = config.duration || 3000;
  // Build toast
  const toast = document.createElement('div');
  toast.setAttribute('id', config.style);
  toast.classList.add('h5p-toast-disabled');
  toast.classList.add(config.style);
  const msg = document.createElement('span');
  msg.innerHTML = message;
  toast.appendChild(msg);
  document.body.appendChild(toast);
  // The message has to be set before getting the coordinates
  const coordinates = getToastCoordinates(element, toast, config.position);
  toast.style.left = Math.round(coordinates.left) + 'px';
  toast.style.top = Math.round(coordinates.top) + 'px';
  toast.classList.remove('h5p-toast-disabled');
  const timer = setTimeout(removeToast, config.duration);
  // The toast can also be removed by clicking somewhere
  document.addEventListener('click', clickHandler);
};
/**
* Copyrights for a H5P Content Library.
*
* @class
*/
H5P.ContentCopyrights = function() {
  var label;
  var media = [];
  var content = [];
  /**
   * Set label.
   *
   * @param {string} newLabel
   */
  this.setLabel = function(newLabel) {
      label = newLabel;
  };
  /**
   * Add sub content.
   *
   * @param {H5P.MediaCopyright} newMedia
   */
  this.addMedia = function(newMedia) {
      if (newMedia !== undefined) {
          media.push(newMedia);
      }
  };
  /**
   * Add sub content in front.
   *
   * @param {H5P.MediaCopyright} newMedia
   */
  this.addMediaInFront = function(newMedia) {
      if (newMedia !== undefined) {
          media.unshift(newMedia);
      }
  };
  /**
   * Add sub content.
   *
   * @param {H5P.ContentCopyrights} newContent
   */
  this.addContent = function(newContent) {
      if (newContent !== undefined) {
          content.push(newContent);
      }
  };
  /**
   * Print content copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function() {
      var html = '';
      // Add media rights
      for (var i = 0; i < media.length; i++) {
          html += media[i];
      }
      // Add sub content rights
      for (i = 0; i < content.length; i++) {
          html += content[i];
      }
      if (html !== '') {
          // Add a label to this info
          if (label !== undefined) {
              html = '<h3>' + label + '</h3>' + html;
          }
          // Add wrapper
          html = '<div class="h5p-content-copyrights">' + html + '</div>';
      }
      return html;
  };
};
/**
* A ordered list of copyright fields for media.
*
* @class
* @param {Object} copyright
*   Copyright information fields.
* @param {Object} [labels]
*   Translation of labels.
* @param {Array} [order]
*   Order of the fields.
* @param {Object} [extraFields]
*   Add extra copyright fields.
*/
H5P.MediaCopyright = function(copyright, labels, order, extraFields) {
  var thumbnail;
  var list = new H5P.DefinitionList();
  /**
   * Get translated label for field.
   *
   * @private
   * @param {string} fieldName
   * @returns {string}
   */
  var getLabel = function(fieldName) {
      if (labels === undefined || labels[fieldName] === undefined) {
          return H5P.t(fieldName);
      }
      return labels[fieldName];
  };
  /**
   * Get humanized value for the license field.
   *
   * @private
   * @param {string} license
   * @param {string} [version]
   * @returns {string}
   */
  var humanizeLicense = function(license, version) {
      var copyrightLicense = H5P.copyrightLicenses[license];
      // Build license string
      var value = '';
      if (!(license === 'PD' && version)) {
          // Add license label
          value += (copyrightLicense.hasOwnProperty('label') ? copyrightLicense.label : copyrightLicense);
      }
      // Check for version info
      var versionInfo;
      if (copyrightLicense.versions) {
          if (copyrightLicense.versions.default && (!version || !copyrightLicense.versions[version])) {
              version = copyrightLicense.versions.default;
          }
          if (version && copyrightLicense.versions[version]) {
              versionInfo = copyrightLicense.versions[version];
          }
      }
      if (versionInfo) {
          // Add license version
          if (value) {
              value += ' ';
          }
          value += (versionInfo.hasOwnProperty('label') ? versionInfo.label : versionInfo);
      }
      // Add link if specified
      var link;
      if (copyrightLicense.hasOwnProperty('link')) {
          link = copyrightLicense.link.replace(':version', copyrightLicense.linkVersions ? copyrightLicense.linkVersions[version] : version);
      } else if (versionInfo && copyrightLicense.hasOwnProperty('link')) {
          link = versionInfo.link;
      }
      if (link) {
          value = '<a href="' + link + '" target="_blank">' + value + '</a>';
      }
      // Generate parenthesis
      var parenthesis = '';
      if (license !== 'PD' && license !== 'C') {
          parenthesis += license;
      }
      if (version && version !== 'CC0 1.0') {
          if (parenthesis && license !== 'GNU GPL') {
              parenthesis += ' ';
          }
          parenthesis += version;
      }
      if (parenthesis) {
          value += ' (' + parenthesis + ')';
      }
      if (license === 'C') {
          value += ' &copy;';
      }
      return value;
  };
  if (copyright !== undefined) {
      // Add the extra fields
      for (var field in extraFields) {
          if (extraFields.hasOwnProperty(field)) {
              copyright[field] = extraFields[field];
          }
      }
      if (order === undefined) {
          // Set default order
          order = ['contentType', 'title', 'license', 'author', 'year', 'source', 'licenseExtras', 'changes'];
      }
      for (var i = 0; i < order.length; i++) {
          var fieldName = order[i];
          if (copyright[fieldName] !== undefined && copyright[fieldName] !== '') {
              var humanValue = copyright[fieldName];
              if (fieldName === 'license') {
                  humanValue = humanizeLicense(copyright.license, copyright.version);
              }
              if (fieldName === 'source') {
                  humanValue = (humanValue) ? '<a href="' + humanValue + '" target="_blank">' + humanValue + '</a>' : undefined;
              }
              list.add(new H5P.Field(getLabel(fieldName), humanValue));
          }
      }
  }
  /**
   * Set thumbnail.
   *
   * @param {H5P.Thumbnail} newThumbnail
   */
  this.setThumbnail = function(newThumbnail) {
      thumbnail = newThumbnail;
  };
  /**
   * Checks if this copyright is undisclosed.
   * I.e. only has the license attribute set, and it's undisclosed.
   *
   * @returns {boolean}
   */
  this.undisclosed = function() {
      if (list.size() === 1) {
          var field = list.get(0);
          if (field.getLabel() === getLabel('license') && field.getValue() === humanizeLicense('U')) {
              return true;
          }
      }
      return false;
  };
  /**
   * Print media copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function() {
      var html = '';
      if (this.undisclosed()) {
          return html; // No need to print a copyright with a single undisclosed license.
      }
      if (thumbnail !== undefined) {
          html += thumbnail;
      }
      html += list;
      if (html !== '') {
          html = '<div class="h5p-media-copyright">' + html + '</div>';
      }
      return html;
  };
};
/**
* A simple and elegant class for creating thumbnails of images.
*
* @class
* @param {string} source
* @param {number} width
* @param {number} height
*/
H5P.Thumbnail = function(source, width, height) {
  var thumbWidth, thumbHeight = 100;
  if (width !== undefined) {
      thumbWidth = Math.round(thumbHeight * (width / height));
  }
  /**
   * Print thumbnail.
   *
   * @returns {string} HTML.
   */
  this.toString = function() {
      return '<img src="' + source + '" alt="' + H5P.t('thumbnail') + '" class="h5p-thumbnail" height="' + thumbHeight + '"' + (thumbWidth === undefined ? '' : ' width="' + thumbWidth + '"') + '/>';
  };
};
/**
* Simple data structure class for storing a single field.
*
* @class
* @param {string} label
* @param {string} value
*/
H5P.Field = function(label, value) {
  /**
   * Public. Get field label.
   *
   * @returns {String}
   */
  this.getLabel = function() {
      return label;
  };
  /**
   * Public. Get field value.
   *
   * @returns {String}
   */
  this.getValue = function() {
      return value;
  };
};
/**
* Simple class for creating a definition list.
*
* @class
*/
H5P.DefinitionList = function() {
  var fields = [];
  /**
   * Add field to list.
   *
   * @param {H5P.Field} field
   */
  this.add = function(field) {
      fields.push(field);
  };
  /**
   * Get Number of fields.
   *
   * @returns {number}
   */
  this.size = function() {
      return fields.length;
  };
  /**
   * Get field at given index.
   *
   * @param {number} index
   * @returns {H5P.Field}
   */
  this.get = function(index) {
      return fields[index];
  };
  /**
   * Print definition list.
   *
   * @returns {string} HTML.
   */
  this.toString = function() {
      var html = '';
      for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          html += '<dt>' + field.getLabel() + '</dt><dd>' + field.getValue() + '</dd>';
      }
      return (html === '' ? html : '<dl class="h5p-definition-list">' + html + '</dl>');
  };
};
/**
* THIS FUNCTION/CLASS IS DEPRECATED AND WILL BE REMOVED.
*
* Helper object for keeping coordinates in the same format all over.
*
* @deprecated
*   Will be removed march 2016.
* @class
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
*/
H5P.Coords = function(x, y, w, h) {
  if (!(this instanceof H5P.Coords)) return new H5P.Coords(x, y, w, h);
  /** @member {number} */
  this.x = 0;
  /** @member {number} */
  this.y = 0;
  /** @member {number} */
  this.w = 1;
  /** @member {number} */
  this.h = 1;
  if (typeof(x) === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.w = x.w;
      this.h = x.h;
  } else {
      if (x !== undefined) {
          this.x = x;
      }
      if (y !== undefined) {
          this.y = y;
      }
      if (w !== undefined) {
          this.w = w;
      }
      if (h !== undefined) {
          this.h = h;
      }
  }
  return this;
};
/**
* Parse library string into values.
*
* @param {string} library
*   library in the format "machineName majorVersion.minorVersion"
* @returns {Object}
*   library as an object with machineName, majorVersion and minorVersion properties
*   return false if the library parameter is invalid
*/
H5P.libraryFromString = function(library) {
  var regExp = /(.+)\s(\d+)\.(\d+)$/g;
  var res = regExp.exec(library);
  if (res !== null) {
      return {
          'machineName': res[1],
          'majorVersion': parseInt(res[2]),
          'minorVersion': parseInt(res[3])
      };
  } else {
      return false;
  }
};
/**
* Get the path to the library
*
* @param {string} library
*   The library identifier in the format "machineName-majorVersion.minorVersion".
* @returns {string}
*   The full path to the library.
*/
H5P.getLibraryPath = function(library) {
  if (H5PIntegration.urlLibraries !== undefined) {
      // This is an override for those implementations that has a different libraries URL, e.g. Moodle
      return H5PIntegration.urlLibraries + '/' + library;
  } else {
      return H5PIntegration.url + '/libraries/' + library;
  }
};
/**
* Recursivly clone the given object.
*
* @param {Object|Array} object
*   Object to clone.
* @param {boolean} [recursive]
* @returns {Object|Array}
*   A clone of object.
*/
H5P.cloneObject = function(object, recursive) {
  // TODO: Consider if this needs to be in core. Doesn't $.extend do the same?
  var clone = object instanceof Array ? [] : {};
  for (var i in object) {
      if (object.hasOwnProperty(i)) {
          if (recursive !== undefined && recursive && typeof object[i] === 'object') {
              clone[i] = H5P.cloneObject(object[i], recursive);
          } else {
              clone[i] = object[i];
          }
      }
  }
  return clone;
};
/**
* Remove all empty spaces before and after the value.
*
* @param {string} value
* @returns {string}
*/
H5P.trim = function(value) {
  return value.replace(/^\s+|\s+$/g, '');
  // TODO: Only include this or String.trim(). What is best?
  // I'm leaning towards implementing the missing ones: http://kangax.github.io/compat-table/es5/
  // So should we make this function deprecated?
};
/**
* Check if JavaScript path/key is loaded.
*
* @param {string} path
* @returns {boolean}
*/
H5P.jsLoaded = function(path) {
  H5PIntegration.loadedJs = H5PIntegration.loadedJs || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedJs) !== -1;
};
/**
* Check if styles path/key is loaded.
*
* @param {string} path
* @returns {boolean}
*/
H5P.cssLoaded = function(path) {
  H5PIntegration.loadedCss = H5PIntegration.loadedCss || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedCss) !== -1;
};
/**
* Shuffle an array in place.
*
* @param {Array} array
*   Array to shuffle
* @returns {Array}
*   The passed array is returned for chaining.
*/
H5P.shuffleArray = function(array) {
  // TODO: Consider if this should be a part of core. I'm guessing very few libraries are going to use it.
  if (!(array instanceof Array)) {
      return;
  }
  var i = array.length,
      j, tempi, tempj;
  if (i === 0) return false;
  while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      tempi = array[i];
      tempj = array[j];
      array[i] = tempj;
      array[j] = tempi;
  }
  return array;
};
/**
* Post finished results for user.
*
* @deprecated
*   Do not use this function directly, trigger the finish event instead.
*   Will be removed march 2016
* @param {number} contentId
*   Identifies the content
* @param {number} score
*   Achieved score/points
* @param {number} maxScore
*   The maximum score/points that can be achieved
* @param {number} [time]
*   Reported time consumption/usage
*/
H5P.setFinished = function(contentId, score, maxScore, time) {
  var validScore = typeof score === 'number' || score instanceof Number;
  if (validScore && H5PIntegration.postUserStatistics === true) {
      /**
       * Return unix timestamp for the given JS Date.
       *
       * @private
       * @param {Date} date
       * @returns {Number}
       */
      var toUnix = function(date) {
          return Math.round(date.getTime() / 1000);
      };
      // Post the results
      const data = {
          contentId: contentId,
          score: score,
          maxScore: maxScore,
          opened: toUnix(H5P.opened[contentId]),
          finished: toUnix(new Date()),
          time: time
      };
      H5P.jQuery.post(H5PIntegration.ajax.setFinished, data).fail(function() {
          H5P.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, data);
      });
  }
};
// Add indexOf to browsers that lack them. (IEs)
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(needle) {
      for (var i = 0; i < this.length; i++) {
          if (this[i] === needle) {
              return i;
          }
      }
      return -1;
  };
}
// Need to define trim() since this is not available on older IEs,
// and trim is used in several libs
if (String.prototype.trim === undefined) {
  String.prototype.trim = function() {
      return H5P.trim(this);
  };
}
/**
* Trigger an event on an instance
*
* Helper function that triggers an event if the instance supports event handling
*
* @param {Object} instance
*   Instance of H5P content
* @param {string} eventType
*   Type of event to trigger
* @param {*} data
* @param {Object} extras
*/
H5P.trigger = function(instance, eventType, data, extras) {
  // Try new event system first
  if (instance.trigger !== undefined) {
      instance.trigger(eventType, data, extras);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.trigger !== undefined) {
      instance.$.trigger(eventType);
  }
};
/**
* Register an event handler
*
* Helper function that registers an event handler for an event type if
* the instance supports event handling
*
* @param {Object} instance
*   Instance of H5P content
* @param {string} eventType
*   Type of event to listen for
* @param {H5P.EventCallback} handler
*   Callback that gets triggered for events of the specified type
*/
H5P.on = function(instance, eventType, handler) {
  // Try new event system first
  if (instance.on !== undefined) {
      instance.on(eventType, handler);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.on !== undefined) {
      instance.$.on(eventType, handler);
  }
};
/**
* Generate random UUID
*
* @returns {string} UUID
*/
H5P.createUUID = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
      var random = Math.random() * 16 | 0,
          newChar = char === 'x' ? random : (random & 0x3 | 0x8);
      return newChar.toString(16);
  });
};
/**
* Create title
*
* @param {string} rawTitle
* @param {number} maxLength
* @returns {string}
*/
H5P.createTitle = function(rawTitle, maxLength) {
  if (!rawTitle) {
      return '';
  }
  if (maxLength === undefined) {
      maxLength = 60;
  }
  var title = H5P.jQuery('<div></div>').text(
      // Strip tags
      rawTitle.replace(/(<([^>]+)>)/ig, "")
      // Escape
  ).text();
  if (title.length > maxLength) {
      title = title.substr(0, maxLength - 3) + '...';
  }
  return title;
};
// Wrap in privates
(function($) {
  /**
   * Creates ajax requests for inserting, updateing and deleteing
   * content user data.
   *
   * @private
   * @param {number} contentId What content to store the data for.
   * @param {string} dataType Identifies the set of data for this content.
   * @param {string} subContentId Identifies sub content
   * @param {function} [done] Callback when ajax is done.
   * @param {object} [data] To be stored for future use.
   * @param {boolean} [preload=false] Data is loaded when content is loaded.
   * @param {boolean} [invalidate=false] Data is invalidated when content changes.
   * @param {boolean} [async=true]
   */
  function contentUserDataAjax(contentId, dataType, subContentId, done, data, preload, invalidate, async) {
      if (H5PIntegration.user === undefined) {
          // Not logged in, no use in saving.
          done('Not signed in.');
          return;
      }
      var options = {
          url: H5PIntegration.ajax.contentUserData.replace(':contentId', contentId).replace(':dataType', dataType).replace(':subContentId', subContentId ? subContentId : 0),
          dataType: 'json',
          async: async === undefined ? true : async
      };
      if (data !== undefined) {
          options.type = 'POST';
          options.data = {
              data: (data === null ? 0 : data),
              preload: (preload ? 1 : 0),
              invalidate: (invalidate ? 1 : 0)
          };
      } else {
          options.type = 'GET';
      }
      if (done !== undefined) {
          options.error = function(xhr, error) {
              done(error);
          };
          options.success = function(response) {
              if (!response.success) {
                  done(response.message);
                  return;
              }
              if (response.data === false || response.data === undefined) {
                  done();
                  return;
              }
              done(undefined, response.data);
          };
      }
      $.ajax(options);
  }
  /**
   * Get user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {function} done
   *   Callback with error and data parameters.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.getUserData = function(contentId, dataId, done, subContentId) {
      if (!subContentId) {
          subContentId = 0; // Default
      }
      H5PIntegration.contents = H5PIntegration.contents || {};
      var content = H5PIntegration.contents['cid-' + contentId] || {};
      var preloadedData = content.contentUserData;
      if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId] !== undefined) {
          if (preloadedData[subContentId][dataId] === 'RESET') {
              done(undefined, null);
              return;
          }
          try {
              done(undefined, JSON.parse(preloadedData[subContentId][dataId]));
          } catch (err) {
              done(err);
          }
      } else {
          contentUserDataAjax(contentId, dataId, subContentId, function(err, data) {
              if (err || data === undefined) {
                  done(err, data);
                  return; // Error or no data
              }
              // Cache in preloaded
              if (content.contentUserData === undefined) {
                  content.contentUserData = preloadedData = {};
              }
              if (preloadedData[subContentId] === undefined) {
                  preloadedData[subContentId] = {};
              }
              preloadedData[subContentId][dataId] = data;
              // Done. Try to decode JSON
              try {
                  done(undefined, JSON.parse(data));
              } catch (e) {
                  done(e);
              }
          });
      }
  };
  /**
   * Async error handling.
   *
   * @callback H5P.ErrorCallback
   * @param {*} error
   */
  /**
   * Set user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {Object} data
   *   The data that is to be stored.
   * @param {Object} [extras]
   *   Extra properties
   * @param {string} [extras.subContentId]
   *   Identifies which data belongs to sub content.
   * @param {boolean} [extras.preloaded=true]
   *   If the data should be loaded when content is loaded.
   * @param {boolean} [extras.deleteOnChange=false]
   *   If the data should be invalidated when the content changes.
   * @param {H5P.ErrorCallback} [extras.errorCallback]
   *   Callback with error as parameters.
   * @param {boolean} [extras.async=true]
   */
  H5P.setUserData = function(contentId, dataId, data, extras) {
      var options = H5P.jQuery.extend(true, {}, {
          subContentId: 0,
          preloaded: true,
          deleteOnChange: false,
          async: true
      }, extras);
      try {
          data = JSON.stringify(data);
      } catch (err) {
          if (options.errorCallback) {
              options.errorCallback(err);
          }
          return; // Failed to serialize.
      }
      var content = H5PIntegration.contents['cid-' + contentId];
      if (content === undefined) {
          content = H5PIntegration.contents['cid-' + contentId] = {};
      }
      if (!content.contentUserData) {
          content.contentUserData = {};
      }
      var preloadedData = content.contentUserData;
      if (preloadedData[options.subContentId] === undefined) {
          preloadedData[options.subContentId] = {};
      }
      if (data === preloadedData[options.subContentId][dataId]) {
          return; // No need to save this twice.
      }
      preloadedData[options.subContentId][dataId] = data;
      contentUserDataAjax(contentId, dataId, options.subContentId, function(error) {
          if (options.errorCallback && error) {
              options.errorCallback(error);
          }
      }, data, options.preloaded, options.deleteOnChange, options.async);
  };
  /**
   * Delete user data for given content.
   *
   * @param {number} contentId
   *   What content to remove data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.deleteUserData = function(contentId, dataId, subContentId) {
      if (!subContentId) {
          subContentId = 0; // Default
      }
      // Remove from preloaded/cache
      var preloadedData = H5PIntegration.contents['cid-' + contentId].contentUserData;
      if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId]) {
          delete preloadedData[subContentId][dataId];
      }
      contentUserDataAjax(contentId, dataId, subContentId, undefined, null);
  };
  /**
   * Function for getting content for a certain ID
   *
   * @param {number} contentId
   * @return {Object}
   */
  H5P.getContentForInstance = function(contentId) {
      var key = 'cid-' + contentId;
      var exists = H5PIntegration && H5PIntegration.contents && H5PIntegration.contents[key];
      return exists ? H5PIntegration.contents[key] : undefined;
  };
  /**
   * Prepares the content parameters for storing in the clipboard.
   *
   * @class
   * @param {Object} parameters The parameters for the content to store
   * @param {string} [genericProperty] If only part of the parameters are generic, which part
   * @param {string} [specificKey] If the parameters are specific, what content type does it fit
   * @returns {Object} Ready for the clipboard
   */
  H5P.ClipboardItem = function(parameters, genericProperty, specificKey) {
      var self = this;
      /**
       * Set relative dimensions when params contains a file with a width and a height.
       * Very useful to be compatible with wysiwyg editors.
       *
       * @private
       */
      var setDimensionsFromFile = function() {
          if (!self.generic) {
              return;
          }
          var params = self.specific[self.generic];
          if (!params.params.file || !params.params.file.width || !params.params.file.height) {
              return;
          }
          self.width = 20; // %
          self.height = (params.params.file.height / params.params.file.width) * self.width;
      };
      if (!genericProperty) {
          genericProperty = 'action';
          parameters = {
              action: parameters
          };
      }
      self.specific = parameters;
      if (genericProperty && parameters[genericProperty]) {
          self.generic = genericProperty;
      }
      if (specificKey) {
          self.from = specificKey;
      }
      if (window.H5PEditor && H5PEditor.contentId) {
          self.contentId = H5PEditor.contentId;
      }
      if (!self.specific.width && !self.specific.height) {
          setDimensionsFromFile();
      }
  };
  /**
   * Store item in the H5P Clipboard.
   *
   * @param {H5P.ClipboardItem|*} clipboardItem
   */
  H5P.clipboardify = function(clipboardItem) {
      if (!(clipboardItem instanceof H5P.ClipboardItem)) {
          clipboardItem = new H5P.ClipboardItem(clipboardItem);
      }
      H5P.setClipboard(clipboardItem);
  };
  /**
   * Retrieve parsed clipboard data.
   *
   * @return {Object}
   */
  H5P.getClipboard = function() {
      return parseClipboard();
  };
  /**
   * Set item in the H5P Clipboard.
   *
   * @param {H5P.ClipboardItem|object} clipboardItem - Data to be set.
   */
  H5P.setClipboard = function(clipboardItem) {
      localStorage.setItem('h5pClipboard', JSON.stringify(clipboardItem));
      // Trigger an event so all 'Paste' buttons may be enabled.
      H5P.externalDispatcher.trigger('datainclipboard', {
          reset: false
      });
  };
  /**
   * Get config for a library
   *
   * @param string machineName
   * @return Object
   */
  H5P.getLibraryConfig = function(machineName) {
      var hasConfig = H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[machineName];
      return hasConfig ? H5PIntegration.libraryConfig[machineName] : {};
  };
  /**
   * Get item from the H5P Clipboard.
   *
   * @private
   * @return {Object}
   */
  var parseClipboard = function() {
      var clipboardData = localStorage.getItem('h5pClipboard');
      if (!clipboardData) {
          return;
      }
      // Try to parse clipboard dat
      try {
          clipboardData = JSON.parse(clipboardData);
      } catch (err) {
          console.error('Unable to parse JSON from clipboard.', err);
          return;
      }
      // Update file URLs and reset content Ids
      recursiveUpdate(clipboardData.specific, function(path) {
          var isTmpFile = (path.substr(-4, 4) === '#tmp');
          if (!isTmpFile && clipboardData.contentId && !path.match(/^https?:\/\//i)) {
              // Comes from existing content
              if (H5PEditor.contentId) {
                  // .. to existing content
                  return '../' + clipboardData.contentId + '/' + path;
              } else {
                  // .. to new content
                  return (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : '../content/') + clipboardData.contentId + '/' + path;
              }
          }
          return path; // Will automatically be looked for in tmp folder
      });
      if (clipboardData.generic) {
          // Use reference instead of key
          clipboardData.generic = clipboardData.specific[clipboardData.generic];
      }
      return clipboardData;
  };
  /**
   * Update file URLs and reset content IDs.
   * Useful when copying content.
   *
   * @private
   * @param {object} params Reference
   * @param {function} handler Modifies the path to work when pasted
   */
  var recursiveUpdate = function(params, handler) {
      for (var prop in params) {
          if (params.hasOwnProperty(prop) && params[prop] instanceof Object) {
              var obj = params[prop];
              if (obj.path !== undefined && obj.mime !== undefined) {
                  obj.path = handler(obj.path);
              } else {
                  if (obj.library !== undefined && obj.subContentId !== undefined) {
                      // Avoid multiple content with same ID
                      delete obj.subContentId;
                  }
                  recursiveUpdate(obj, handler);
              }
          }
      }
  };
  // Init H5P when page is fully loadded
  $(document).ready(function() {
      window.addEventListener('storage', function(event) {
          // Pick up clipboard changes from other tabs
          if (event.key === 'h5pClipboard') {
              // Trigger an event so all 'Paste' buttons may be enabled.
              H5P.externalDispatcher.trigger('datainclipboard', {
                  reset: event.newValue === null
              });
          }
      });
      var ccVersions = {
          'default': '4.0',
          '4.0': H5P.t('licenseCC40'),
          '3.0': H5P.t('licenseCC30'),
          '2.5': H5P.t('licenseCC25'),
          '2.0': H5P.t('licenseCC20'),
          '1.0': H5P.t('licenseCC10'),
      };
      /**
       * Maps copyright license codes to their human readable counterpart.
       *
       * @type {Object}
       */
      H5P.copyrightLicenses = {
          'U': H5P.t('licenseU'),
          'CC BY': {
              label: H5P.t('licenseCCBY'),
              link: 'http://creativecommons.org/licenses/by/:version',
              versions: ccVersions
          },
          'CC BY-SA': {
              label: H5P.t('licenseCCBYSA'),
              link: 'http://creativecommons.org/licenses/by-sa/:version',
              versions: ccVersions
          },
          'CC BY-ND': {
              label: H5P.t('licenseCCBYND'),
              link: 'http://creativecommons.org/licenses/by-nd/:version',
              versions: ccVersions
          },
          'CC BY-NC': {
              label: H5P.t('licenseCCBYNC'),
              link: 'http://creativecommons.org/licenses/by-nc/:version',
              versions: ccVersions
          },
          'CC BY-NC-SA': {
              label: H5P.t('licenseCCBYNCSA'),
              link: 'http://creativecommons.org/licenses/by-nc-sa/:version',
              versions: ccVersions
          },
          'CC BY-NC-ND': {
              label: H5P.t('licenseCCBYNCND'),
              link: 'http://creativecommons.org/licenses/by-nc-nd/:version',
              versions: ccVersions
          },
          'CC0 1.0': {
              label: H5P.t('licenseCC010'),
              link: 'https://creativecommons.org/publicdomain/zero/1.0/'
          },
          'GNU GPL': {
              label: H5P.t('licenseGPL'),
              link: 'http://www.gnu.org/licenses/gpl-:version-standalone.html',
              linkVersions: {
                  'v3': '3.0',
                  'v2': '2.0',
                  'v1': '1.0'
              },
              versions: {
                  'default': 'v3',
                  'v3': H5P.t('licenseV3'),
                  'v2': H5P.t('licenseV2'),
                  'v1': H5P.t('licenseV1')
              }
          },
          'PD': {
              label: H5P.t('licensePD'),
              versions: {
                  'CC0 1.0': {
                      label: H5P.t('licenseCC010'),
                      link: 'https://creativecommons.org/publicdomain/zero/1.0/'
                  },
                  'CC PDM': {
                      label: H5P.t('licensePDM'),
                      link: 'https://creativecommons.org/publicdomain/mark/1.0/'
                  }
              }
          },
          'ODC PDDL': '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
          'CC PDM': {
              label: H5P.t('licensePDM'),
              link: 'https://creativecommons.org/publicdomain/mark/1.0/'
          },
          'C': H5P.t('licenseC'),
      };
      /**
       * Indicates if H5P is embedded on an external page using iframe.
       * @member {boolean} H5P.externalEmbed
       */
      // Relay events to top window. This must be done before H5P.init
      // since events may be fired on initialization.
      if (H5P.isFramed && H5P.externalEmbed === false) {
          H5P.externalDispatcher.on('*', function(event) {
              window.parent.H5P.externalDispatcher.trigger.call(this, event);
          });
      }
      /**
       * Prevent H5P Core from initializing. Must be overriden before document ready.
       * @member {boolean} H5P.preventInit
       */
      if (!H5P.preventInit) {
          // Note that this start script has to be an external resource for it to
          // load in correct order in IE9.
          H5P.init(document.body);
      }
      if (H5PIntegration.saveFreq !== false) {
          // When was the last state stored
          var lastStoredOn = 0;
          // Store the current state of the H5P when leaving the page.
          var storeCurrentState = function() {
              // Make sure at least 250 ms has passed since last save
              var currentTime = new Date().getTime();
              if (currentTime - lastStoredOn > 250) {
                  lastStoredOn = currentTime;
                  for (var i = 0; i < H5P.instances.length; i++) {
                      var instance = H5P.instances[i];
                      if (instance.getCurrentState instanceof Function || typeof instance.getCurrentState === 'function') {
                          var state = instance.getCurrentState();
                          if (state !== undefined) {
                              // Async is not used to prevent the request from being cancelled.
                              H5P.setUserData(instance.contentId, 'state', state, {
                                  deleteOnChange: true,
                                  async: false
                              });
                          }
                      }
                  }
              }
          };
          // iPad does not support beforeunload, therefore using unload
          H5P.$window.one('beforeunload unload', function() {
              // Only want to do this once
              H5P.$window.off('pagehide beforeunload unload');
              storeCurrentState();
          });
          // pagehide is used on iPad when tabs are switched
          H5P.$window.on('pagehide', storeCurrentState);
      }
  });
})(H5P.jQuery);;
var H5P = window.H5P = window.H5P || {};
/**
* The Event class for the EventDispatcher.
*
* @class
* @param {string} type
* @param {*} data
* @param {Object} [extras]
* @param {boolean} [extras.bubbles]
* @param {boolean} [extras.external]
*/
H5P.Event = function(type, data, extras) {
  this.type = type;
  this.data = data;
  var bubbles = false;
  // Is this an external event?
  var external = false;
  // Is this event scheduled to be sent externally?
  var scheduledForExternal = false;
  if (extras === undefined) {
      extras = {};
  }
  if (extras.bubbles === true) {
      bubbles = true;
  }
  if (extras.external === true) {
      external = true;
  }
  /**
   * Prevent this event from bubbling up to parent
   */
  this.preventBubbling = function() {
      bubbles = false;
  };
  /**
   * Get bubbling status
   *
   * @returns {boolean}
   *   true if bubbling false otherwise
   */
  this.getBubbles = function() {
      return bubbles;
  };
  /**
   * Try to schedule an event for externalDispatcher
   *
   * @returns {boolean}
   *   true if external and not already scheduled, otherwise false
   */
  this.scheduleForExternal = function() {
      if (external && !scheduledForExternal) {
          scheduledForExternal = true;
          return true;
      }
      return false;
  };
};
/**
* Callback type for event listeners.
*
* @callback H5P.EventCallback
* @param {H5P.Event} event
*/
H5P.EventDispatcher = (function() {
  /**
   * The base of the event system.
   * Inherit this class if you want your H5P to dispatch events.
   *
   * @class
   * @memberof H5P
   */
  function EventDispatcher() {
      var self = this;
      /**
       * Keep track of listeners for each event.
       *
       * @private
       * @type {Object}
       */
      var triggers = {};
      /**
       * Add new event listener.
       *
       * @throws {TypeError}
       *   listener must be a function
       * @param {string} type
       *   Event type
       * @param {H5P.EventCallback} listener
       *   Event listener
       * @param {Object} [thisArg]
       *   Optionally specify the this value when calling listener.
       */
      this.on = function(type, listener, thisArg) {
          if (typeof listener !== 'function') {
              throw TypeError('listener must be a function');
          }
          // Trigger event before adding to avoid recursion
          self.trigger('newListener', {
              'type': type,
              'listener': listener
          });
          var trigger = {
              'listener': listener,
              'thisArg': thisArg
          };
          if (!triggers[type]) {
              // First
              triggers[type] = [trigger];
          } else {
              // Append
              triggers[type].push(trigger);
          }
      };
      /**
       * Add new event listener that will be fired only once.
       *
       * @throws {TypeError}
       *   listener must be a function
       * @param {string} type
       *   Event type
       * @param {H5P.EventCallback} listener
       *   Event listener
       * @param {Object} thisArg
       *   Optionally specify the this value when calling listener.
       */
      this.once = function(type, listener, thisArg) {
          if (!(listener instanceof Function)) {
              throw TypeError('listener must be a function');
          }
          var once = function(event) {
              self.off(event.type, once);
              listener.call(this, event);
          };
          self.on(type, once, thisArg);
      };
      /**
       * Remove event listener.
       * If no listener is specified, all listeners will be removed.
       *
       * @throws {TypeError}
       *   listener must be a function
       * @param {string} type
       *   Event type
       * @param {H5P.EventCallback} listener
       *   Event listener
       */
      this.off = function(type, listener) {
          if (listener !== undefined && !(listener instanceof Function)) {
              throw TypeError('listener must be a function');
          }
          if (triggers[type] === undefined) {
              return;
          }
          if (listener === undefined) {
              // Remove all listeners
              delete triggers[type];
              self.trigger('removeListener', type);
              return;
          }
          // Find specific listener
          for (var i = 0; i < triggers[type].length; i++) {
              if (triggers[type][i].listener === listener) {
                  triggers[type].splice(i, 1);
                  self.trigger('removeListener', type, {
                      'listener': listener
                  });
                  break;
              }
          }
          // Clean up empty arrays
          if (!triggers[type].length) {
              delete triggers[type];
          }
      };
      /**
       * Try to call all event listeners for the given event type.
       *
       * @private
       * @param {string} Event type
       */
      var call = function(type, event) {
          if (triggers[type] === undefined) {
              return;
          }
          // Clone array (prevents triggers from being modified during the event)
          var handlers = triggers[type].slice();
          // Call all listeners
          for (var i = 0; i < handlers.length; i++) {
              var trigger = handlers[i];
              var thisArg = (trigger.thisArg ? trigger.thisArg : this);
              trigger.listener.call(thisArg, event);
          }
      };
      /**
       * Dispatch event.
       *
       * @param {string|H5P.Event} event
       *   Event object or event type as string
       * @param {*} [eventData]
       *   Custom event data(used when event type as string is used as first
       *   argument).
       * @param {Object} [extras]
       * @param {boolean} [extras.bubbles]
       * @param {boolean} [extras.external]
       */
      this.trigger = function(event, eventData, extras) {
          if (event === undefined) {
              return;
          }
          if (event instanceof String || typeof event === 'string') {
              event = new H5P.Event(event, eventData, extras);
          } else if (eventData !== undefined) {
              event.data = eventData;
          }
          // Check to see if this event should go externally after all triggering and bubbling is done
          var scheduledForExternal = event.scheduleForExternal();
          // Call all listeners
          call.call(this, event.type, event);
          // Call all * listeners
          call.call(this, '*', event);
          // Bubble
          if (event.getBubbles() && self.parent instanceof H5P.EventDispatcher && (self.parent.trigger instanceof Function || typeof self.parent.trigger === 'function')) {
              self.parent.trigger(event);
          }
          if (scheduledForExternal) {
              H5P.externalDispatcher.trigger.call(this, event);
          }
      };
  }
  return EventDispatcher;
})();;
var H5P = window.H5P = window.H5P || {};
/**
* Used for xAPI events.
*
* @class
* @extends H5P.Event
*/
H5P.XAPIEvent = function() {
  H5P.Event.call(this, 'xAPI', {
      'statement': {}
  }, {
      bubbles: true,
      external: true
  });
};
H5P.XAPIEvent.prototype = Object.create(H5P.Event.prototype);
H5P.XAPIEvent.prototype.constructor = H5P.XAPIEvent;
/**
* Set scored result statements.
*
* @param {number} score
* @param {number} maxScore
* @param {object} instance
* @param {boolean} completion
* @param {boolean} success
*/
H5P.XAPIEvent.prototype.setScoredResult = function(score, maxScore, instance, completion, success) {
  this.data.statement.result = {};
  if (typeof score !== 'undefined') {
      if (typeof maxScore === 'undefined') {
          this.data.statement.result.score = {
              'raw': score
          };
      } else {
          this.data.statement.result.score = {
              'min': 0,
              'max': maxScore,
              'raw': score
          };
          if (maxScore > 0) {
              this.data.statement.result.score.scaled = Math.round(score / maxScore * 10000) / 10000;
          }
      }
  }
  if (typeof completion === 'undefined') {
      this.data.statement.result.completion = (this.getVerb() === 'completed' || this.getVerb() === 'answered');
  } else {
      this.data.statement.result.completion = completion;
  }
  if (typeof success !== 'undefined') {
      this.data.statement.result.success = success;
  }
  if (instance && instance.activityStartTime) {
      var duration = Math.round((Date.now() - instance.activityStartTime) / 10) / 100;
      // xAPI spec allows a precision of 0.01 seconds
      this.data.statement.result.duration = 'PT' + duration + 'S';
  }
};
/**
* Set a verb.
*
* @param {string} verb
*   Verb in short form, one of the verbs defined at
*   {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
*
*/
H5P.XAPIEvent.prototype.setVerb = function(verb) {
  if (H5P.jQuery.inArray(verb, H5P.XAPIEvent.allowedXAPIVerbs) !== -1) {
      this.data.statement.verb = {
          'id': 'http://adlnet.gov/expapi/verbs/' + verb,
          'display': {
              'en-US': verb
          }
      };
  } else if (verb.id !== undefined) {
      this.data.statement.verb = verb;
  }
};
/**
* Get the statements verb id.
*
* @param {boolean} full
*   if true the full verb id prefixed by http://adlnet.gov/expapi/verbs/
*   will be returned
* @returns {string}
*   Verb or null if no verb with an id has been defined
*/
H5P.XAPIEvent.prototype.getVerb = function(full) {
  var statement = this.data.statement;
  if ('verb' in statement) {
      if (full === true) {
          return statement.verb;
      }
      return statement.verb.id.slice(31);
  } else {
      return null;
  }
};
/**
* Set the object part of the statement.
*
* The id is found automatically (the url to the content)
*
* @param {Object} instance
*   The H5P instance
*/
H5P.XAPIEvent.prototype.setObject = function(instance) {
  if (instance.contentId) {
      this.data.statement.object = {
          'id': this.getContentXAPIId(instance),
          'objectType': 'Activity',
          'definition': {
              'extensions': {
                  'http://h5p.org/x-api/h5p-local-content-id': instance.contentId
              }
          }
      };
      if (instance.subContentId) {
          this.data.statement.object.definition.extensions['http://h5p.org/x-api/h5p-subContentId'] = instance.subContentId;
          // Don't set titles on main content, title should come from publishing platform
          if (typeof instance.getTitle === 'function') {
              this.data.statement.object.definition.name = {
                  "en-US": instance.getTitle()
              };
          }
      } else {
          var content = H5P.getContentForInstance(instance.contentId);
          if (content && content.metadata && content.metadata.title) {
              this.data.statement.object.definition.name = {
                  "en-US": H5P.createTitle(content.metadata.title)
              };
          }
      }
  } else {
      // Content types view always expect to have a contentId when they are displayed.
      // This is not the case if they are displayed in the editor as part of a preview.
      // The fix is to set an empty object with definition for the xAPI event, so all
      // the content types that rely on this does not have to handle it. This means
      // that content types that are being previewed will send xAPI completed events,
      // but since there are no scripts that catch these events in the editor,
      // this is not a problem.
      this.data.statement.object = {
          definition: {}
      };
  }
};
/**
* Set the context part of the statement.
*
* @param {Object} instance
*   The H5P instance
*/
H5P.XAPIEvent.prototype.setContext = function(instance) {
  if (instance.parent && (instance.parent.contentId || instance.parent.subContentId)) {
      this.data.statement.context = {
          "contextActivities": {
              "parent": [{
                  "id": this.getContentXAPIId(instance.parent),
                  "objectType": "Activity"
              }]
          }
      };
  }
  if (instance.libraryInfo) {
      if (this.data.statement.context === undefined) {
          this.data.statement.context = {
              "contextActivities": {}
          };
      }
      this.data.statement.context.contextActivities.category = [{
          "id": "http://h5p.org/libraries/" + instance.libraryInfo.versionedNameNoSpaces,
          "objectType": "Activity"
      }];
  }
};
/**
* Set the actor. Email and name will be added automatically.
*/
H5P.XAPIEvent.prototype.setActor = function() {
  if (H5PIntegration.user !== undefined) {
      this.data.statement.actor = {
          'name': H5PIntegration.user.name,
          'mbox': 'mailto:' + H5PIntegration.user.mail,
          'objectType': 'Agent'
      };
  } else {
      var uuid;
      try {
          if (localStorage.H5PUserUUID) {
              uuid = localStorage.H5PUserUUID;
          } else {
              uuid = H5P.createUUID();
              localStorage.H5PUserUUID = uuid;
          }
      } catch (err) {
          // LocalStorage and Cookies are probably disabled. Do not track the user.
          uuid = 'not-trackable-' + H5P.createUUID();
      }
      this.data.statement.actor = {
          'account': {
              'name': uuid,
              'homePage': H5PIntegration.siteUrl
          },
          'objectType': 'Agent'
      };
  }
};
/**
* Get the max value of the result - score part of the statement
*
* @returns {number}
*   The max score, or null if not defined
*/
H5P.XAPIEvent.prototype.getMaxScore = function() {
  return this.getVerifiedStatementValue(['result', 'score', 'max']);
};
/**
* Get the raw value of the result - score part of the statement
*
* @returns {number}
*   The score, or null if not defined
*/
H5P.XAPIEvent.prototype.getScore = function() {
  return this.getVerifiedStatementValue(['result', 'score', 'raw']);
};
/**
* Get content xAPI ID.
*
* @param {Object} instance
*   The H5P instance
*/
H5P.XAPIEvent.prototype.getContentXAPIId = function(instance) {
  var xAPIId;
  if (instance.contentId && H5PIntegration && H5PIntegration.contents && H5PIntegration.contents['cid-' + instance.contentId]) {
      xAPIId = H5PIntegration.contents['cid-' + instance.contentId].url;
      if (instance.subContentId) {
          xAPIId += '?subContentId=' + instance.subContentId;
      }
  }
  return xAPIId;
};
/**
* Check if this event is sent from a child (i.e not from grandchild)
*
* @return {Boolean}
*/
H5P.XAPIEvent.prototype.isFromChild = function() {
  var parentId = this.getVerifiedStatementValue(['context', 'contextActivities', 'parent', 0, 'id']);
  return !parentId || parentId.indexOf('subContentId') === -1;
};
/**
* Figure out if a property exists in the statement and return it
*
* @param {string[]} keys
*   List describing the property we're looking for. For instance
*   ['result', 'score', 'raw'] for result.score.raw
* @returns {*}
*   The value of the property if it is set, null otherwise.
*/
H5P.XAPIEvent.prototype.getVerifiedStatementValue = function(keys) {
  var val = this.data.statement;
  for (var i = 0; i < keys.length; i++) {
      if (val[keys[i]] === undefined) {
          return null;
      }
      val = val[keys[i]];
  }
  return val;
};
/**
* List of verbs defined at {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
*
* @type Array
*/
H5P.XAPIEvent.allowedXAPIVerbs = ['answered', 'asked', 'attempted', 'attended', 'commented', 'completed', 'exited', 'experienced', 'failed', 'imported', 'initialized', 'interacted', 'launched', 'mastered', 'passed', 'preferred', 'progressed', 'registered', 'responded', 'resumed', 'scored', 'shared', 'suspended', 'terminated', 'voided',
  // Custom verbs used for action toolbar below content
  'downloaded', 'copied', 'accessed-reuse', 'accessed-embed', 'accessed-copyright'
];;
var H5P = window.H5P = window.H5P || {};
/**
* The external event dispatcher. Others, outside of H5P may register and
* listen for H5P Events here.
*
* @type {H5P.EventDispatcher}
*/
H5P.externalDispatcher = new H5P.EventDispatcher();
// EventDispatcher extensions
/**
* Helper function for triggering xAPI added to the EventDispatcher.
*
* @param {string} verb
*   The short id of the verb we want to trigger
* @param {Oject} [extra]
*   Extra properties for the xAPI statement
*/
H5P.EventDispatcher.prototype.triggerXAPI = function(verb, extra) {
  this.trigger(this.createXAPIEventTemplate(verb, extra));
};
/**
* Helper function to create event templates added to the EventDispatcher.
*
* Will in the future be used to add representations of the questions to the
* statements.
*
* @param {string} verb
*   Verb id in short form
* @param {Object} [extra]
*   Extra values to be added to the statement
* @returns {H5P.XAPIEvent}
*   Instance
*/
H5P.EventDispatcher.prototype.createXAPIEventTemplate = function(verb, extra) {
  var event = new H5P.XAPIEvent();
  event.setActor();
  event.setVerb(verb);
  if (extra !== undefined) {
      for (var i in extra) {
          event.data.statement[i] = extra[i];
      }
  }
  if (!('object' in event.data.statement)) {
      event.setObject(this);
  }
  if (!('context' in event.data.statement)) {
      event.setContext(this);
  }
  return event;
};
/**
* Helper function to create xAPI completed events
*
* DEPRECATED - USE triggerXAPIScored instead
*
* @deprecated
*   since 1.5, use triggerXAPIScored instead.
* @param {number} score
*   Will be set as the 'raw' value of the score object
* @param {number} maxScore
*   will be set as the "max" value of the score object
* @param {boolean} success
*   will be set as the "success" value of the result object
*/
H5P.EventDispatcher.prototype.triggerXAPICompleted = function(score, maxScore, success) {
  this.triggerXAPIScored(score, maxScore, 'completed', true, success);
};
/**
* Helper function to create scored xAPI events
*
* @param {number} score
*   Will be set as the 'raw' value of the score object
* @param {number} maxScore
*   Will be set as the "max" value of the score object
* @param {string} verb
*   Short form of adl verb
* @param {boolean} completion
*   Is this a statement from a completed activity?
* @param {boolean} success
*   Is this a statement from an activity that was done successfully?
*/
H5P.EventDispatcher.prototype.triggerXAPIScored = function(score, maxScore, verb, completion, success) {
  var event = this.createXAPIEventTemplate(verb);
  event.setScoredResult(score, maxScore, this, completion, success);
  this.trigger(event);
};
H5P.EventDispatcher.prototype.setActivityStarted = function() {
  if (this.activityStartTime === undefined) {
      // Don't trigger xAPI events in the editor
      if (this.contentId !== undefined && H5PIntegration.contents !== undefined && H5PIntegration.contents['cid-' + this.contentId] !== undefined) {
          this.triggerXAPI('attempted');
      }
      this.activityStartTime = Date.now();
  }
};
/**
* Internal H5P function listening for xAPI completed events and stores scores
*
* @param {H5P.XAPIEvent} event
*/
H5P.xAPICompletedListener = function(event) {
  if ((event.getVerb() === 'completed' || event.getVerb() === 'answered') && !event.getVerifiedStatementValue(['context', 'contextActivities', 'parent'])) {
      var score = event.getScore();
      var maxScore = event.getMaxScore();
      var contentId = event.getVerifiedStatementValue(['object', 'definition', 'extensions', 'http://h5p.org/x-api/h5p-local-content-id']);
      H5P.setFinished(contentId, score, maxScore);
  }
};;
/**
* H5P.ContentType is a base class for all content types. Used by newRunnable()
*
* Functions here may be overridable by the libraries. In special cases,
* it is also possible to override H5P.ContentType on a global level.
*
* NOTE that this doesn't actually 'extend' the event dispatcher but instead
* it creates a single instance which all content types shares as their base
* prototype. (in some cases this may be the root of strange event behavior)
*
* @class
* @augments H5P.EventDispatcher
*/
H5P.ContentType = function(isRootLibrary) {
  function ContentType() {}
  // Inherit from EventDispatcher.
  ContentType.prototype = new H5P.EventDispatcher();
  /**
   * Is library standalone or not? Not beeing standalone, means it is
   * included in another library
   *
   * @return {Boolean}
   */
  ContentType.prototype.isRoot = function() {
      return isRootLibrary;
  };
  /**
   * Returns the file path of a file in the current library
   * @param  {string} filePath The path to the file relative to the library folder
   * @return {string} The full path to the file
   */
  ContentType.prototype.getLibraryFilePath = function(filePath) {
      return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + '/' + filePath;
  };
  return ContentType;
};;
/*global H5P*/
H5P.ConfirmationDialog = (function(EventDispatcher) {
  "use strict";
  /**
   * Create a confirmation dialog
   *
   * @param [options] Options for confirmation dialog
   * @param [options.instance] Instance that uses confirmation dialog
   * @param [options.headerText] Header text
   * @param [options.dialogText] Dialog text
   * @param [options.cancelText] Cancel dialog button text
   * @param [options.confirmText] Confirm dialog button text
   * @param [options.hideCancel] Hide cancel button
   * @param [options.hideExit] Hide exit button
   * @param [options.skipRestoreFocus] Skip restoring focus when hiding the dialog
   * @param [options.classes] Extra classes for popup
   * @constructor
   */
  function ConfirmationDialog(options) {
      EventDispatcher.call(this);
      var self = this;
      // Make sure confirmation dialogs have unique id
      H5P.ConfirmationDialog.uniqueId += 1;
      var uniqueId = H5P.ConfirmationDialog.uniqueId;
      // Default options
      options = options || {};
      options.headerText = options.headerText || H5P.t('confirmDialogHeader');
      options.dialogText = options.dialogText || H5P.t('confirmDialogBody');
      options.cancelText = options.cancelText || H5P.t('cancelLabel');
      options.confirmText = options.confirmText || H5P.t('confirmLabel');
      /**
       * Handle confirming event
       * @param {Event} e
       */
      function dialogConfirmed(e) {
          self.hide();
          self.trigger('confirmed');
          e.preventDefault();
      }
      /**
       * Handle dialog canceled
       * @param {Event} e
       */
      function dialogCanceled(e) {
          self.hide();
          self.trigger('canceled');
          e.preventDefault();
      }
      /**
       * Flow focus to element
       * @param {HTMLElement} element Next element to be focused
       * @param {Event} e Original tab event
       */
      function flowTo(element, e) {
          element.focus();
          e.preventDefault();
      }
      // Offset of exit button
      var exitButtonOffset = 2 * 16;
      var shadowOffset = 8;
      // Determine if we are too large for our container and must resize
      var resizeIFrame = false;
      // Create background
      var popupBackground = document.createElement('div');
      popupBackground.classList.add('h5p-confirmation-dialog-background', 'hidden', 'hiding');
      // Create outer popup
      var popup = document.createElement('div');
      popup.classList.add('h5p-confirmation-dialog-popup', 'hidden');
      if (options.classes) {
          options.classes.forEach(function(popupClass) {
              popup.classList.add(popupClass);
          });
      }
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-labelledby', 'h5p-confirmation-dialog-dialog-text-' + uniqueId);
      popupBackground.appendChild(popup);
      popup.addEventListener('keydown', function(e) {
          if (e.which === 27) { // Esc key
              // Exit dialog
              dialogCanceled(e);
          }
      });
      // Popup header
      var header = document.createElement('div');
      header.classList.add('h5p-confirmation-dialog-header');
      popup.appendChild(header);
      // Header text
      var headerText = document.createElement('div');
      headerText.classList.add('h5p-confirmation-dialog-header-text');
      headerText.innerHTML = options.headerText;
      header.appendChild(headerText);
      // Popup body
      var body = document.createElement('div');
      body.classList.add('h5p-confirmation-dialog-body');
      popup.appendChild(body);
      // Popup text
      var text = document.createElement('div');
      text.classList.add('h5p-confirmation-dialog-text');
      text.innerHTML = options.dialogText;
      text.id = 'h5p-confirmation-dialog-dialog-text-' + uniqueId;
      body.appendChild(text);
      // Popup buttons
      var buttons = document.createElement('div');
      buttons.classList.add('h5p-confirmation-dialog-buttons');
      body.appendChild(buttons);
      // Cancel button
      var cancelButton = document.createElement('button');
      cancelButton.classList.add('h5p-core-cancel-button');
      cancelButton.textContent = options.cancelText;
      // Confirm button
      var confirmButton = document.createElement('button');
      confirmButton.classList.add('h5p-core-button');
      confirmButton.classList.add('h5p-confirmation-dialog-confirm-button');
      confirmButton.textContent = options.confirmText;
      // Exit button
      var exitButton = document.createElement('button');
      exitButton.classList.add('h5p-confirmation-dialog-exit');
      exitButton.setAttribute('aria-hidden', 'true');
      exitButton.tabIndex = -1;
      exitButton.title = options.cancelText;
      // Cancel handler
      cancelButton.addEventListener('click', dialogCanceled);
      cancelButton.addEventListener('keydown', function(e) {
          if (e.which === 32) { // Space
              dialogCanceled(e);
          } else if (e.which === 9 && e.shiftKey) { // Shift-tab
              flowTo(confirmButton, e);
          }
      });
      if (!options.hideCancel) {
          buttons.appendChild(cancelButton);
      } else {
          // Center buttons
          buttons.classList.add('center');
      }
      // Confirm handler
      confirmButton.addEventListener('click', dialogConfirmed);
      confirmButton.addEventListener('keydown', function(e) {
          if (e.which === 32) { // Space
              dialogConfirmed(e);
          } else if (e.which === 9 && !e.shiftKey) { // Tab
              const nextButton = !options.hideCancel ? cancelButton : confirmButton;
              flowTo(nextButton, e);
          }
      });
      buttons.appendChild(confirmButton);
      // Exit handler
      exitButton.addEventListener('click', dialogCanceled);
      exitButton.addEventListener('keydown', function(e) {
          if (e.which === 32) { // Space
              dialogCanceled(e);
          }
      });
      if (!options.hideExit) {
          popup.appendChild(exitButton);
      }
      // Wrapper element
      var wrapperElement;
      // Focus capturing
      var focusPredator;
      // Maintains hidden state of elements
      var wrapperSiblingsHidden = [];
      var popupSiblingsHidden = [];
      // Element with focus before dialog
      var previouslyFocused;
      /**
       * Set parent of confirmation dialog
       * @param {HTMLElement} wrapper
       * @returns {H5P.ConfirmationDialog}
       */
      this.appendTo = function(wrapper) {
          wrapperElement = wrapper;
          return this;
      };
      /**
       * Capture the focus element, send it to confirmation button
       * @param {Event} e Original focus event
       */
      var captureFocus = function(e) {
          if (!popupBackground.contains(e.target)) {
              e.preventDefault();
              confirmButton.focus();
          }
      };
      /**
       * Hide siblings of element from assistive technology
       *
       * @param {HTMLElement} element
       * @returns {Array} The previous hidden state of all siblings
       */
      var hideSiblings = function(element) {
          var hiddenSiblings = [];
          var siblings = element.parentNode.children;
          var i;
          for (i = 0; i < siblings.length; i += 1) {
              // Preserve hidden state
              hiddenSiblings[i] = siblings[i].getAttribute('aria-hidden') ? true : false;
              if (siblings[i] !== element) {
                  siblings[i].setAttribute('aria-hidden', true);
              }
          }
          return hiddenSiblings;
      };
      /**
       * Restores assistive technology state of element's siblings
       *
       * @param {HTMLElement} element
       * @param {Array} hiddenSiblings Hidden state of all siblings
       */
      var restoreSiblings = function(element, hiddenSiblings) {
          var siblings = element.parentNode.children;
          var i;
          for (i = 0; i < siblings.length; i += 1) {
              if (siblings[i] !== element && !hiddenSiblings[i]) {
                  siblings[i].removeAttribute('aria-hidden');
              }
          }
      };
      /**
       * Start capturing focus of parent and send it to dialog
       */
      var startCapturingFocus = function() {
          focusPredator = wrapperElement.parentNode || wrapperElement;
          focusPredator.addEventListener('focus', captureFocus, true);
      };
      /**
       * Clean up event listener for capturing focus
       */
      var stopCapturingFocus = function() {
          focusPredator.removeAttribute('aria-hidden');
          focusPredator.removeEventListener('focus', captureFocus, true);
      };
      /**
       * Hide siblings in underlay from assistive technologies
       */
      var disableUnderlay = function() {
          wrapperSiblingsHidden = hideSiblings(wrapperElement);
          popupSiblingsHidden = hideSiblings(popupBackground);
      };
      /**
       * Restore state of underlay for assistive technologies
       */
      var restoreUnderlay = function() {
          restoreSiblings(wrapperElement, wrapperSiblingsHidden);
          restoreSiblings(popupBackground, popupSiblingsHidden);
      };
      /**
       * Fit popup to container. Makes sure it doesn't overflow.
       * @params {number} [offsetTop] Offset of popup
       */
      var fitToContainer = function(offsetTop) {
          var popupOffsetTop = parseInt(popup.style.top, 10);
          if (offsetTop !== undefined) {
              popupOffsetTop = offsetTop;
          }
          if (!popupOffsetTop) {
              popupOffsetTop = 0;
          }
          // Overflows height
          if (popupOffsetTop + popup.offsetHeight > wrapperElement.offsetHeight) {
              popupOffsetTop = wrapperElement.offsetHeight - popup.offsetHeight - shadowOffset;
          }
          if (popupOffsetTop - exitButtonOffset <= 0) {
              popupOffsetTop = exitButtonOffset + shadowOffset;
              // We are too big and must resize
              resizeIFrame = true;
          }
          popup.style.top = popupOffsetTop + 'px';
      };
      /**
       * Show confirmation dialog
       * @params {number} offsetTop Offset top
       * @returns {H5P.ConfirmationDialog}
       */
      this.show = function(offsetTop) {
          // Capture focused item
          previouslyFocused = document.activeElement;
          wrapperElement.appendChild(popupBackground);
          startCapturingFocus();
          disableUnderlay();
          popupBackground.classList.remove('hidden');
          fitToContainer(offsetTop);
          setTimeout(function() {
              popup.classList.remove('hidden');
              popupBackground.classList.remove('hiding');
              setTimeout(function() {
                  // Focus confirm button
                  confirmButton.focus();
                  // Resize iFrame if necessary
                  if (resizeIFrame && options.instance) {
                      var minHeight = parseInt(popup.offsetHeight, 10) + exitButtonOffset + (2 * shadowOffset);
                      self.setViewPortMinimumHeight(minHeight);
                      options.instance.trigger('resize');
                      resizeIFrame = false;
                  }
              }, 100);
          }, 0);
          return this;
      };
      /**
       * Hide confirmation dialog
       * @returns {H5P.ConfirmationDialog}
       */
      this.hide = function() {
          popupBackground.classList.add('hiding');
          popup.classList.add('hidden');
          // Restore focus
          stopCapturingFocus();
          if (!options.skipRestoreFocus) {
              previouslyFocused.focus();
          }
          restoreUnderlay();
          setTimeout(function() {
              popupBackground.classList.add('hidden');
              wrapperElement.removeChild(popupBackground);
              self.setViewPortMinimumHeight(null);
          }, 100);
          return this;
      };
      /**
       * Retrieve element
       *
       * @return {HTMLElement}
       */
      this.getElement = function() {
          return popup;
      };
      /**
       * Get previously focused element
       * @return {HTMLElement}
       */
      this.getPreviouslyFocused = function() {
          return previouslyFocused;
      };
      /**
       * Sets the minimum height of the view port
       *
       * @param {number|null} minHeight
       */
      this.setViewPortMinimumHeight = function(minHeight) {
          var container = document.querySelector('.h5p-container') || document.body;
          container.style.minHeight = (typeof minHeight === 'number') ? (minHeight + 'px') : minHeight;
      };
  }
  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;
  return ConfirmationDialog;
}(H5P.EventDispatcher));
H5P.ConfirmationDialog.uniqueId = -1;;
/**
* @class
* @augments H5P.EventDispatcher
* @param {Object} displayOptions
* @param {boolean} displayOptions.export Triggers the display of the 'Download' button
* @param {boolean} displayOptions.copyright Triggers the display of the 'Copyright' button
* @param {boolean} displayOptions.embed Triggers the display of the 'Embed' button
* @param {boolean} displayOptions.icon Triggers the display of the 'H5P icon' link
*/
H5P.ActionBar = (function($, EventDispatcher) {
  "use strict";

  function ActionBar(displayOptions) {
      EventDispatcher.call(this);
      /** @alias H5P.ActionBar# */
      var self = this;
      var hasActions = false;
      // Create action bar
      var $actions = H5P.jQuery('<ul class="h5p-actions"></ul>');
      /**
       * Helper for creating action bar buttons.
       *
       * @private
       * @param {string} type
       * @param {string} customClass Instead of type class
       */
      var addActionButton = function(type, customClass) {
          /**
           * Handles selection of action
           */
          var handler = function() {
              self.trigger(type);
          };
          H5P.jQuery('<li/>', {
              'class': 'h5p-button h5p-noselect h5p-' + (customClass ? customClass : type),
              role: 'button',
              tabindex: 0,
              title: H5P.t(type + 'Description'),
              html: H5P.t(type),
              on: {
                  click: handler,
                  keypress: function(e) {
                      if (e.which === 32) {
                          handler();
                          e.preventDefault(); // (since return false will block other inputs)
                      }
                  }
              },
              appendTo: $actions
          });
          hasActions = true;
      };
      // Register action bar buttons
      if (displayOptions.export || displayOptions.copy) {
          // Add export button
          addActionButton('reuse', 'export');
      }
      if (displayOptions.copyright) {
          addActionButton('copyrights');
      }
      if (displayOptions.embed) {
          addActionButton('embed');
      }
      if (displayOptions.icon) {
          // Add about H5P button icon
          H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' + H5P.t('h5pDescription') + '"></a></li>').appendTo($actions);
          hasActions = true;
      }
      /**
       * Returns a reference to the dom element
       *
       * @return {H5P.jQuery}
       */
      self.getDOMElement = function() {
          return $actions;
      };
      /**
       * Does the actionbar contain actions?
       *
       * @return {Boolean}
       */
      self.hasActions = function() {
          return hasActions;
      };
  }
  ActionBar.prototype = Object.create(EventDispatcher.prototype);
  ActionBar.prototype.constructor = ActionBar;
  return ActionBar;
})(H5P.jQuery, H5P.EventDispatcher);;
/**
* Queue requests and handle them at your convenience
*
* @type {RequestQueue}
*/
H5P.RequestQueue = (function($, EventDispatcher) {
  /**
   * A queue for requests, will be automatically processed when regaining connection
   *
   * @param {boolean} [options.showToast] Show toast when losing or regaining connection
   * @constructor
   */
  const RequestQueue = function(options) {
      EventDispatcher.call(this);
      this.processingQueue = false;
      options = options || {};
      this.showToast = options.showToast;
      this.itemName = 'requestQueue';
  };
  /**
   * Add request to queue. Only supports posts currently.
   *
   * @param {string} url
   * @param {Object} data
   * @returns {boolean}
   */
  RequestQueue.prototype.add = function(url, data) {
      if (!window.localStorage) {
          return false;
      }
      let storedStatements = this.getStoredRequests();
      if (!storedStatements) {
          storedStatements = [];
      }
      storedStatements.push({
          url: url,
          data: data,
      });
      window.localStorage.setItem(this.itemName, JSON.stringify(storedStatements));
      this.trigger('requestQueued', {
          storedStatements: storedStatements,
          processingQueue: this.processingQueue,
      });
      return true;
  };
  /**
   * Get stored requests
   *
   * @returns {boolean|Array} Stored requests
   */
  RequestQueue.prototype.getStoredRequests = function() {
      if (!window.localStorage) {
          return false;
      }
      const item = window.localStorage.getItem(this.itemName);
      if (!item) {
          return [];
      }
      return JSON.parse(item);
  };
  /**
   * Clear stored requests
   *
   * @returns {boolean} True if the storage was successfully cleared
   */
  RequestQueue.prototype.clearQueue = function() {
      if (!window.localStorage) {
          return false;
      }
      window.localStorage.removeItem(this.itemName);
      return true;
  };
  /**
   * Start processing of requests queue
   *
   * @return {boolean} Returns false if it was not possible to resume processing queue
   */
  RequestQueue.prototype.resumeQueue = function() {
      // Not supported
      if (!H5PIntegration || !window.navigator || !window.localStorage) {
          return false;
      }
      // Already processing
      if (this.processingQueue) {
          return false;
      }
      // Attempt to send queued requests
      const queue = this.getStoredRequests();
      const queueLength = queue.length;
      // Clear storage, failed requests will be re-added
      this.clearQueue();
      // No items left in queue
      if (!queueLength) {
          this.trigger('emptiedQueue', queue);
          return true;
      }
      // Make sure requests are not changed while they're being handled
      this.processingQueue = true;
      // Process queue in original order
      this.processQueue(queue);
      return true
  };
  /**
   * Process first item in the request queue
   *
   * @param {Array} queue Request queue
   */
  RequestQueue.prototype.processQueue = function(queue) {
      if (!queue.length) {
          return;
      }
      this.trigger('processingQueue');
      // Make sure the requests are processed in a FIFO order
      const request = queue.shift();
      const self = this;
      $.post(request.url, request.data).fail(self.onQueuedRequestFail.bind(self, request)).always(self.onQueuedRequestProcessed.bind(self, queue))
  };
  /**
   * Request fail handler
   *
   * @param {Object} request
   */
  RequestQueue.prototype.onQueuedRequestFail = function(request) {
      // Queue the failed request again if we're offline
      if (!window.navigator.onLine) {
          this.add(request.url, request.data);
      }
  };
  /**
   * An item in the queue was processed
   *
   * @param {Array} queue Queue that was processed
   */
  RequestQueue.prototype.onQueuedRequestProcessed = function(queue) {
      if (queue.length) {
          this.processQueue(queue);
          return;
      }
      // Finished processing this queue
      this.processingQueue = false;
      // Run empty queue callback with next request queue
      const requestQueue = this.getStoredRequests();
      this.trigger('queueEmptied', requestQueue);
  };
  /**
   * Display toast message on the first content of current page
   *
   * @param {string} msg Message to display
   * @param {boolean} [forceShow] Force override showing the toast
   * @param {Object} [configOverride] Override toast message config
   */
  RequestQueue.prototype.displayToastMessage = function(msg, forceShow, configOverride) {
      if (!this.showToast && !forceShow) {
          return;
      }
      const config = H5P.jQuery.extend(true, {}, {
          position: {
              horizontal: 'centered',
              vertical: 'centered',
              noOverflowX: true,
          }
      }, configOverride);
      H5P.attachToastTo(H5P.jQuery('.h5p-content:first')[0], msg, config);
  };
  return RequestQueue;
})(H5P.jQuery, H5P.EventDispatcher);
/**
* Request queue for retrying failing requests, will automatically retry them when you come online
*
* @type {offlineRequestQueue}
*/
H5P.OfflineRequestQueue = (function(RequestQueue, Dialog) {
  /**
   * Constructor
   *
   * @param {Object} [options] Options for offline request queue
   * @param {Object} [options.instance] The H5P instance which UI components are placed within
   */
  const offlineRequestQueue = function(options) {
      const requestQueue = new RequestQueue();
      // We could handle requests from previous pages here, but instead we throw them away
      requestQueue.clearQueue();
      let startTime = null;
      const retryIntervals = [10, 20, 40, 60, 120, 300, 600];
      let intervalIndex = -1;
      let currentInterval = null;
      let isAttached = false;
      let isShowing = false;
      let isLoading = false;
      const instance = options.instance;
      const offlineDialog = new Dialog({
          headerText: H5P.t('offlineDialogHeader'),
          dialogText: H5P.t('offlineDialogBody'),
          confirmText: H5P.t('offlineDialogRetryButtonLabel'),
          hideCancel: true,
          hideExit: true,
          classes: ['offline'],
          instance: instance,
          skipRestoreFocus: true,
      });
      const dialog = offlineDialog.getElement();
      // Add retry text to body
      const countDownText = document.createElement('div');
      countDownText.classList.add('count-down');
      countDownText.innerHTML = H5P.t('offlineDialogRetryMessage').replace(':num', '<span class="count-down-num">0</span>');
      dialog.querySelector('.h5p-confirmation-dialog-text').appendChild(countDownText);
      const countDownNum = countDownText.querySelector('.count-down-num');
      // Create throbber
      const throbberWrapper = document.createElement('div');
      throbberWrapper.classList.add('throbber-wrapper');
      const throbber = document.createElement('div');
      throbber.classList.add('sending-requests-throbber');
      throbberWrapper.appendChild(throbber);
      requestQueue.on('requestQueued', function(e) {
          // Already processing queue, wait until queue has finished processing before showing dialog
          if (e.data && e.data.processingQueue) {
              return;
          }
          if (!isAttached) {
              const rootContent = document.body.querySelector('.h5p-content');
              if (!rootContent) {
                  return;
              }
              offlineDialog.appendTo(rootContent);
              rootContent.appendChild(throbberWrapper);
              isAttached = true;
          }
          startCountDown();
      }.bind(this));
      requestQueue.on('queueEmptied', function(e) {
          if (e.data && e.data.length) {
              // New requests were added while processing queue or requests failed again. Re-queue requests.
              startCountDown(true);
              return;
          }
          // Successfully emptied queue
          clearInterval(currentInterval);
          toggleThrobber(false);
          intervalIndex = -1;
          if (isShowing) {
              offlineDialog.hide();
              isShowing = false;
          }
          requestQueue.displayToastMessage(H5P.t('offlineSuccessfulSubmit'), true, {
              position: {
                  vertical: 'top',
                  offsetVertical: '100',
              }
          });
      }.bind(this));
      offlineDialog.on('confirmed', function() {
          // Show dialog on next render in case it is being hidden by the 'confirm' button
          isShowing = false;
          setTimeout(function() {
              retryRequests();
          }, 100);
      }.bind(this));
      // Initialize listener for when requests are added to queue
      window.addEventListener('online', function() {
          retryRequests();
      }.bind(this));
      // Listen for queued requests outside the iframe
      window.addEventListener('message', function(event) {
          const isValidQueueEvent = window.parent === event.source && event.data.context === 'h5p' && event.data.action === 'queueRequest';
          if (!isValidQueueEvent) {
              return;
          }
          this.add(event.data.url, event.data.data);
      }.bind(this));
      /**
       * Toggle throbber visibility
       *
       * @param {boolean} [forceShow] Will force throbber visibility if set
       */
      const toggleThrobber = function(forceShow) {
          isLoading = !isLoading;
          if (forceShow !== undefined) {
              isLoading = forceShow;
          }
          if (isLoading && isShowing) {
              offlineDialog.hide();
              isShowing = false;
          }
          if (isLoading) {
              throbberWrapper.classList.add('show');
          } else {
              throbberWrapper.classList.remove('show');
          }
      };
      /**
       * Retries the failed requests
       */
      const retryRequests = function() {
          clearInterval(currentInterval);
          toggleThrobber(true);
          requestQueue.resumeQueue();
      };
      /**
       * Increments retry interval
       */
      const incrementRetryInterval = function() {
          intervalIndex += 1;
          if (intervalIndex >= retryIntervals.length) {
              intervalIndex = retryIntervals.length - 1;
          }
      };
      /**
       * Starts counting down to retrying queued requests.
       *
       * @param forceDelayedShow
       */
      const startCountDown = function(forceDelayedShow) {
          // Already showing, wait for retry
          if (isShowing) {
              return;
          }
          toggleThrobber(false);
          if (!isShowing) {
              if (forceDelayedShow) {
                  // Must force delayed show since dialog may be hiding, and confirmation dialog does not
                  //  support this.
                  setTimeout(function() {
                      offlineDialog.show(0);
                  }, 100);
              } else {
                  offlineDialog.show(0);
              }
          }
          isShowing = true;
          startTime = new Date().getTime();
          incrementRetryInterval();
          clearInterval(currentInterval);
          currentInterval = setInterval(updateCountDown, 100);
      };
      /**
       * Updates the count down timer. Retries requests when time expires.
       */
      const updateCountDown = function() {
          const time = new Date().getTime();
          const timeElapsed = Math.floor((time - startTime) / 1000);
          const timeLeft = retryIntervals[intervalIndex] - timeElapsed;
          countDownNum.textContent = timeLeft.toString();
          // Retry interval reached, retry requests
          if (timeLeft <= 0) {
              retryRequests();
          }
      };
      /**
       * Add request to offline request queue. Only supports posts for now.
       *
       * @param {string} url The request url
       * @param {Object} data The request data
       */
      this.add = function(url, data) {
          // Only queue request if it failed because we are offline
          if (window.navigator.onLine) {
              return false;
          }
          requestQueue.add(url, data);
      };
  };
  return offlineRequestQueue;
})(H5P.RequestQueue, H5P.ConfirmationDialog);;
var oldTether = window.Tether;
! function(t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
  "use strict";

  function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t) {
      var e = getComputedStyle(t),
          o = e.position;
      if ("fixed" === o) return t;
      for (var i = t; i = i.parentNode;) {
          var n = void 0;
          try {
              n = getComputedStyle(i)
          } catch (r) {}
          if ("undefined" == typeof n || null === n) return i;
          var s = n.overflow,
              a = n.overflowX,
              f = n.overflowY;
          if (/(auto|scroll)/.test(s + f + a) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0)) return i
      }
      return document.body
  }

  function r(t) {
      var e = void 0;
      t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
      var o = e.documentElement,
          i = {},
          n = t.getBoundingClientRect();
      for (var r in n) i[r] = n[r];
      var s = x(e);
      return i.top -= s.top, i.left -= s.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
  }

  function s(t) {
      return t.offsetParent || document.documentElement
  }

  function a() {
      var t = document.createElement("div");
      t.style.width = "100%", t.style.height = "200px";
      var e = document.createElement("div");
      f(e.style, {
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          visibility: "hidden",
          width: "200px",
          height: "150px",
          overflow: "hidden"
      }), e.appendChild(t), document.body.appendChild(e);
      var o = t.offsetWidth;
      e.style.overflow = "scroll";
      var i = t.offsetWidth;
      o === i && (i = e.clientWidth), document.body.removeChild(e);
      var n = o - i;
      return {
          width: n,
          height: n
      }
  }

  function f() {
      var t = void 0 === arguments[0] ? {} : arguments[0],
          e = [];
      return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
          if (e)
              for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
      }), t
  }

  function h(t, e) {
      if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
          e.trim() && t.classList.remove(e)
      });
      else {
          var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
              i = u(t).replace(o, " ");
          p(t, i)
      }
  }

  function l(t, e) {
      if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
          e.trim() && t.classList.add(e)
      });
      else {
          h(t, e);
          var o = u(t) + (" " + e);
          p(t, o)
      }
  }

  function d(t, e) {
      if ("undefined" != typeof t.classList) return t.classList.contains(e);
      var o = u(t);
      return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
  }

  function u(t) {
      return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className
  }

  function p(t, e) {
      t.setAttribute("class", e)
  }

  function c(t, e, o) {
      o.forEach(function(o) {
          -1 === e.indexOf(o) && d(t, o) && h(t, o)
      }), e.forEach(function(e) {
          d(t, e) || l(t, e)
      })
  }

  function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function g(t, e) {
      var o = void 0 === arguments[2] ? 1 : arguments[2];
      return t + o >= e && e >= t - o
  }

  function m() {
      return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
  }

  function v() {
      for (var t = {
              top: 0,
              left: 0
          }, e = arguments.length, o = Array(e), i = 0; e > i; i++) o[i] = arguments[i];
      return o.forEach(function(e) {
          var o = e.top,
              i = e.left;
          "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
      }), t
  }

  function y(t, e) {
      return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
  }

  function b(t, e) {
      return "scrollParent" === e ? e = t.scrollParent : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
          var t = r(e),
              o = t,
              i = getComputedStyle(e);
          e = [o.left, o.top, t.width + o.left, t.height + o.top], U.forEach(function(t, o) {
              t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
          })
      }(), e
  }
  var w = function() {
          function t(t, e) {
              for (var o = 0; o < e.length; o++) {
                  var i = e[o];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
          }
          return function(e, o, i) {
              return o && t(e.prototype, o), i && t(e, i), e
          }
      }(),
      C = void 0;
  "undefined" == typeof C && (C = {
      modules: []
  });
  var O = function() {
          var t = 0;
          return function() {
              return ++t
          }
      }(),
      E = {},
      x = function(t) {
          var e = t._tetherZeroElement;
          "undefined" == typeof e && (e = t.createElement("div"), e.setAttribute("data-tether-id", O()), f(e.style, {
              top: 0,
              left: 0,
              position: "absolute"
          }), t.body.appendChild(e), t._tetherZeroElement = e);
          var o = e.getAttribute("data-tether-id");
          if ("undefined" == typeof E[o]) {
              E[o] = {};
              var i = e.getBoundingClientRect();
              for (var n in i) E[o][n] = i[n];
              T(function() {
                  delete E[o]
              })
          }
          return E[o]
      },
      A = [],
      T = function(t) {
          A.push(t)
      },
      S = function() {
          for (var t = void 0; t = A.pop();) t()
      },
      W = function() {
          function t() {
              i(this, t)
          }
          return w(t, [{
              key: "on",
              value: function(t, e, o) {
                  var i = void 0 === arguments[3] ? !1 : arguments[3];
                  "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                      handler: e,
                      ctx: o,
                      once: i
                  })
              }
          }, {
              key: "once",
              value: function(t, e, o) {
                  this.on(t, e, o, !0)
              }
          }, {
              key: "off",
              value: function(t, e) {
                  if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t])
                      if ("undefined" == typeof e) delete this.bindings[t];
                      else
                          for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
              }
          }, {
              key: "trigger",
              value: function(t) {
                  if ("undefined" != typeof this.bindings && this.bindings[t])
                      for (var e = 0; e < this.bindings[t].length;) {
                          var o = this.bindings[t][e],
                              i = o.handler,
                              n = o.ctx,
                              r = o.once,
                              s = n;
                          "undefined" == typeof s && (s = this);
                          for (var a = arguments.length, f = Array(a > 1 ? a - 1 : 0), h = 1; a > h; h++) f[h - 1] = arguments[h];
                          i.apply(s, f), r ? this.bindings[t].splice(e, 1) : ++e
                      }
              }
          }]), t
      }();
  C.Utils = {
      getScrollParent: n,
      getBounds: r,
      getOffsetParent: s,
      extend: f,
      addClass: l,
      removeClass: h,
      hasClass: d,
      updateClasses: c,
      defer: T,
      flush: S,
      uniqueId: O,
      Evented: W,
      getScrollBarSize: a
  };
  var M = function() {
          function t(t, e) {
              var o = [],
                  i = !0,
                  n = !1,
                  r = void 0;
              try {
                  for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
              } catch (f) {
                  n = !0, r = f
              } finally {
                  try {
                      !i && a["return"] && a["return"]()
                  } finally {
                      if (n) throw r
                  }
              }
              return o
          }
          return function(e, o) {
              if (Array.isArray(e)) return e;
              if (Symbol.iterator in Object(e)) return t(e, o);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
      }(),
      w = function() {
          function t(t, e) {
              for (var o = 0; o < e.length; o++) {
                  var i = e[o];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
          }
          return function(e, o, i) {
              return o && t(e.prototype, o), i && t(e, i), e
          }
      }();
  if ("undefined" == typeof C) throw new Error("You must include the utils.js file before tether.js");
  var P = C.Utils,
      n = P.getScrollParent,
      r = P.getBounds,
      s = P.getOffsetParent,
      f = P.extend,
      l = P.addClass,
      h = P.removeClass,
      c = P.updateClasses,
      T = P.defer,
      S = P.flush,
      a = P.getScrollBarSize,
      k = function() {
          for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
              var i = e[o];
              if (void 0 !== t.style[i]) return i
          }
      }(),
      B = [],
      _ = function() {
          B.forEach(function(t) {
              t.position(!1)
          }), S()
      };
  ! function() {
      var t = null,
          e = null,
          o = null,
          i = function n() {
              return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o), o = null), t = m(), _(), e = m() - t))
          };
      ["resize", "scroll", "touchmove"].forEach(function(t) {
          window.addEventListener(t, i)
      })
  }();
  var z = {
          center: "center",
          left: "right",
          right: "left"
      },
      F = {
          middle: "middle",
          top: "bottom",
          bottom: "top"
      },
      L = {
          top: 0,
          left: 0,
          middle: "50%",
          center: "50%",
          bottom: "100%",
          right: "100%"
      },
      Y = function(t, e) {
          var o = t.left,
              i = t.top;
          return "auto" === o && (o = z[e.left]), "auto" === i && (i = F[e.top]), {
              left: o,
              top: i
          }
      },
      H = function(t) {
          var e = t.left,
              o = t.top;
          return "undefined" != typeof L[t.left] && (e = L[t.left]), "undefined" != typeof L[t.top] && (o = L[t.top]), {
              left: e,
              top: o
          }
      },
      X = function(t) {
          var e = t.split(" "),
              o = M(e, 2),
              i = o[0],
              n = o[1];
          return {
              top: i,
              left: n
          }
      },
      j = X,
      N = function() {
          function t(e) {
              var o = this;
              i(this, t), this.position = this.position.bind(this), B.push(this), this.history = [], this.setOptions(e, !1), C.modules.forEach(function(t) {
                  "undefined" != typeof t.initialize && t.initialize.call(o)
              }), this.position()
          }
          return w(t, [{
              key: "getClass",
              value: function() {
                  var t = void 0 === arguments[0] ? "" : arguments[0],
                      e = this.options.classes;
                  return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
              }
          }, {
              key: "setOptions",
              value: function(t) {
                  var e = this,
                      o = void 0 === arguments[1] ? !0 : arguments[1],
                      i = {
                          offset: "0 0",
                          targetOffset: "0 0",
                          targetAttachment: "auto auto",
                          classPrefix: "tether"
                      };
                  this.options = f(i, t);
                  var r = this.options,
                      s = r.element,
                      a = r.target,
                      h = r.targetModifier;
                  if (this.element = s, this.target = a, this.targetModifier = h, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                          "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                      }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                  this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = X(this.options.offset), this.targetOffset = X(this.options.targetOffset), "undefined" != typeof this.scrollParent && this.disable(), this.scrollParent = "scroll-handle" === this.targetModifier ? this.target : n(this.target), this.options.enabled !== !1 && this.enable(o)
              }
          }, {
              key: "getTargetBounds",
              value: function() {
                  if ("undefined" == typeof this.targetModifier) return r(this.target);
                  if ("visible" === this.targetModifier) {
                      if (this.target === document.body) return {
                          top: pageYOffset,
                          left: pageXOffset,
                          height: innerHeight,
                          width: innerWidth
                      };
                      var t = r(this.target),
                          e = {
                              height: t.height,
                              width: t.width,
                              top: t.top,
                              left: t.left
                          };
                      return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                  }
                  if ("scroll-handle" === this.targetModifier) {
                      var t = void 0,
                          o = this.target;
                      o === document.body ? (o = document.documentElement, t = {
                          left: pageXOffset,
                          top: pageYOffset,
                          height: innerHeight,
                          width: innerWidth
                      }) : t = r(o);
                      var i = getComputedStyle(o),
                          n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                          s = 0;
                      n && (s = 15);
                      var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s,
                          e = {
                              width: 15,
                              height: .975 * a * (a / o.scrollHeight),
                              left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                          },
                          f = 0;
                      408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                      var h = this.target.scrollTop / (o.scrollHeight - a);
                      return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                  }
              }
          }, {
              key: "clearCache",
              value: function() {
                  this._cache = {}
              }
          }, {
              key: "cache",
              value: function(t, e) {
                  return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
              }
          }, {
              key: "enable",
              value: function() {
                  var t = void 0 === arguments[0] ? !0 : arguments[0];
                  this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), t && this.position()
              }
          }, {
              key: "disable",
              value: function() {
                  h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
              }
          }, {
              key: "destroy",
              value: function() {
                  var t = this;
                  this.disable(), B.forEach(function(e, o) {
                      return e === t ? void B.splice(o, 1) : void 0
                  })
              }
          }, {
              key: "updateAttachClasses",
              value: function(t, e) {
                  var o = this;
                  t = t || this.attachment, e = e || this.targetAttachment;
                  var i = ["left", "top", "bottom", "right", "middle", "center"];
                  "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                  var n = this._addAttachClasses;
                  t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                  var r = [];
                  i.forEach(function(t) {
                      r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                  }), T(function() {
                      "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                  })
              }
          }, {
              key: "position",
              value: function() {
                  var t = this,
                      e = void 0 === arguments[0] ? !0 : arguments[0];
                  if (this.enabled) {
                      this.clearCache();
                      var o = Y(this.targetAttachment, this.attachment);
                      this.updateAttachClasses(this.attachment, o);
                      var i = this.cache("element-bounds", function() {
                              return r(t.element)
                          }),
                          n = i.width,
                          f = i.height;
                      if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
                          var h = this.lastSize;
                          n = h.width, f = h.height
                      } else this.lastSize = {
                          width: n,
                          height: f
                      };
                      var l = this.cache("target-bounds", function() {
                              return t.getTargetBounds()
                          }),
                          d = l,
                          u = y(H(this.attachment), {
                              width: n,
                              height: f
                          }),
                          p = y(H(o), d),
                          c = y(this.offset, {
                              width: n,
                              height: f
                          }),
                          g = y(this.targetOffset, d);
                      u = v(u, c), p = v(p, g);
                      for (var m = l.left + p.left - u.left, b = l.top + p.top - u.top, w = 0; w < C.modules.length; ++w) {
                          var O = C.modules[w],
                              E = O.position.call(this, {
                                  left: m,
                                  top: b,
                                  targetAttachment: o,
                                  targetPos: l,
                                  elementPos: i,
                                  offset: u,
                                  targetOffset: p,
                                  manualOffset: c,
                                  manualTargetOffset: g,
                                  scrollbarSize: A,
                                  attachment: this.attachment
                              });
                          if (E === !1) return !1;
                          "undefined" != typeof E && "object" == typeof E && (b = E.top, m = E.left)
                      }
                      var x = {
                              page: {
                                  top: b,
                                  left: m
                              },
                              viewport: {
                                  top: b - pageYOffset,
                                  bottom: pageYOffset - b - f + innerHeight,
                                  left: m - pageXOffset,
                                  right: pageXOffset - m - n + innerWidth
                              }
                          },
                          A = void 0;
                      return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a), x.viewport.bottom -= A.height), document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a), x.viewport.right -= A.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom = document.body.scrollHeight - b - f, x.page.right = document.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                          var e = t.cache("target-offsetparent", function() {
                                  return s(t.target)
                              }),
                              o = t.cache("target-offsetparent-bounds", function() {
                                  return r(e)
                              }),
                              i = getComputedStyle(e),
                              n = o,
                              a = {};
                          if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                  a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                              }), o.right = document.body.scrollWidth - o.left - n.width + a.right, o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom, x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
                              var f = e.scrollTop,
                                  h = e.scrollLeft;
                              x.offset = {
                                  top: x.page.top - o.top + f - a.top,
                                  left: x.page.left - o.left + h - a.left
                              }
                          }
                      }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && S(), !0
                  }
              }
          }, {
              key: "move",
              value: function(t) {
                  var e = this;
                  if ("undefined" != typeof this.element.parentNode) {
                      var o = {};
                      for (var i in t) {
                          o[i] = {};
                          for (var n in t[i]) {
                              for (var r = !1, a = 0; a < this.history.length; ++a) {
                                  var h = this.history[a];
                                  if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                                      r = !0;
                                      break
                                  }
                              }
                              r || (o[i][n] = !0)
                          }
                      }
                      var l = {
                              top: "",
                              left: "",
                              right: "",
                              bottom: ""
                          },
                          d = function(t, o) {
                              var i = "undefined" != typeof e.options.optimizations,
                                  n = i ? e.options.optimizations.gpu : null;
                              if (n !== !1) {
                                  var r = void 0,
                                      s = void 0;
                                  t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== k && (l[k] += " translateZ(0)")
                              } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                          },
                          u = !1;
                      (o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                          l.position = "absolute";
                          var i = e.cache("target-offsetparent", function() {
                              return s(e.target)
                          });
                          s(e.element) !== i && T(function() {
                              e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                          }), d(o.offset, t.offset), u = !0
                      }() : (l.position = "absolute", d({
                          top: !0,
                          left: !0
                      }, t.page)), u || "BODY" === this.element.parentNode.tagName || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element));
                      var p = {},
                          c = !1;
                      for (var n in l) {
                          var m = l[n],
                              v = this.element.style[n];
                          "" !== v && "" !== m && ["top", "left", "bottom", "right"].indexOf(n) >= 0 && (v = parseFloat(v), m = parseFloat(m)), v !== m && (c = !0, p[n] = m)
                      }
                      c && T(function() {
                          f(e.element.style, p)
                      })
                  }
              }
          }]), t
      }();
  N.modules = [], C.position = _;
  var R = f(N, C),
      M = function() {
          function t(t, e) {
              var o = [],
                  i = !0,
                  n = !1,
                  r = void 0;
              try {
                  for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
              } catch (f) {
                  n = !0, r = f
              } finally {
                  try {
                      !i && a["return"] && a["return"]()
                  } finally {
                      if (n) throw r
                  }
              }
              return o
          }
          return function(e, o) {
              if (Array.isArray(e)) return e;
              if (Symbol.iterator in Object(e)) return t(e, o);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
      }(),
      P = C.Utils,
      r = P.getBounds,
      f = P.extend,
      c = P.updateClasses,
      T = P.defer,
      U = ["left", "top", "right", "bottom"];
  C.modules.push({
      position: function(t) {
          var e = this,
              o = t.top,
              i = t.left,
              n = t.targetAttachment;
          if (!this.options.constraints) return !0;
          var s = this.cache("element-bounds", function() {
                  return r(e.element)
              }),
              a = s.height,
              h = s.width;
          if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
              var l = this.lastSize;
              h = l.width, a = l.height
          }
          var d = this.cache("target-bounds", function() {
                  return e.getTargetBounds()
              }),
              u = d.height,
              p = d.width,
              g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
          this.options.constraints.forEach(function(t) {
              var e = t.outOfBoundsClass,
                  o = t.pinnedClass;
              e && g.push(e), o && g.push(o)
          }), g.forEach(function(t) {
              ["left", "top", "right", "bottom"].forEach(function(e) {
                  g.push(t + "-" + e)
              })
          });
          var m = [],
              v = f({}, n),
              y = f({}, this.attachment);
          return this.options.constraints.forEach(function(t) {
              var r = t.to,
                  s = t.attachment,
                  f = t.pin;
              "undefined" == typeof s && (s = "");
              var l = void 0,
                  d = void 0;
              if (s.indexOf(" ") >= 0) {
                  var c = s.split(" "),
                      g = M(c, 2);
                  d = g[0], l = g[1]
              } else l = d = s;
              var w = b(e, r);
              ("target" === d || "both" === d) && (o < w[1] && "top" === v.top && (o += u, v.top = "bottom"), o + a > w[3] && "bottom" === v.top && (o -= u, v.top = "top")), "together" === d && (o < w[1] && "top" === v.top && ("bottom" === y.top ? (o += u, v.top = "bottom", o += a, y.top = "top") : "top" === y.top && (o += u, v.top = "bottom", o -= a, y.top = "bottom")), o + a > w[3] && "bottom" === v.top && ("top" === y.top ? (o -= u, v.top = "top", o -= a, y.top = "bottom") : "bottom" === y.top && (o -= u, v.top = "top", o += a, y.top = "top")), "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a, y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a, y.top = "top"))), ("target" === l || "both" === l) && (i < w[0] && "left" === v.left && (i += p, v.left = "right"), i + h > w[2] && "right" === v.left && (i -= p, v.left = "left")), "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += p, v.left = "right", i += h, y.left = "left") : "left" === y.left && (i += p, v.left = "right", i -= h, y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= p, v.left = "left", i -= h, y.left = "right") : "right" === y.left && (i -= p, v.left = "left", i += h, y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h, y.left = "right") : i < w[0] && "right" === y.left && (i += h, y.left = "left"))), ("element" === d || "both" === d) && (o < w[1] && "bottom" === y.top && (o += a, y.top = "top"), o + a > w[3] && "top" === y.top && (o -= a, y.top = "bottom")), ("element" === l || "both" === l) && (i < w[0] && "right" === y.left && (i += h, y.left = "left"), i + h > w[2] && "left" === y.left && (i -= h, y.left = "right")), "string" == typeof f ? f = f.split(",").map(function(t) {
                  return t.trim()
              }) : f === !0 && (f = ["top", "left", "right", "bottom"]), f = f || [];
              var C = [],
                  O = [];
              o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1], C.push("top")) : O.push("top")), o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a, C.push("bottom")) : O.push("bottom")), i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0], C.push("left")) : O.push("left")), i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h, C.push("right")) : O.push("right")), C.length && ! function() {
                  var t = void 0;
                  t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), C.forEach(function(e) {
                      m.push(t + "-" + e)
                  })
              }(), O.length && ! function() {
                  var t = void 0;
                  t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), O.forEach(function(e) {
                      m.push(t + "-" + e)
                  })
              }(), (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1), (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== n.top || v.left !== n.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && e.updateAttachClasses(y, v)
          }), T(function() {
              e.options.addTargetClasses !== !1 && c(e.target, m, g), c(e.element, m, g)
          }), {
              top: o,
              left: i
          }
      }
  });
  var P = C.Utils,
      r = P.getBounds,
      c = P.updateClasses,
      T = P.defer;
  C.modules.push({
      position: function(t) {
          var e = this,
              o = t.top,
              i = t.left,
              n = this.cache("element-bounds", function() {
                  return r(e.element)
              }),
              s = n.height,
              a = n.width,
              f = this.getTargetBounds(),
              h = o + s,
              l = i + a,
              d = [];
          o <= f.bottom && h >= f.top && ["left", "right"].forEach(function(t) {
              var e = f[t];
              (e === i || e === l) && d.push(t)
          }), i <= f.right && l >= f.left && ["top", "bottom"].forEach(function(t) {
              var e = f[t];
              (e === o || e === h) && d.push(t)
          });
          var u = [],
              p = [],
              g = ["left", "top", "right", "bottom"];
          return u.push(this.getClass("abutted")), g.forEach(function(t) {
              u.push(e.getClass("abutted") + "-" + t)
          }), d.length && p.push(this.getClass("abutted")), d.forEach(function(t) {
              p.push(e.getClass("abutted") + "-" + t)
          }), T(function() {
              e.options.addTargetClasses !== !1 && c(e.target, p, u), c(e.element, p, u)
          }), !0
      }
  });
  var M = function() {
      function t(t, e) {
          var o = [],
              i = !0,
              n = !1,
              r = void 0;
          try {
              for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
          } catch (f) {
              n = !0, r = f
          } finally {
              try {
                  !i && a["return"] && a["return"]()
              } finally {
                  if (n) throw r
              }
          }
          return o
      }
      return function(e, o) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, o);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
  }();
  return C.modules.push({
      position: function(t) {
          var e = t.top,
              o = t.left;
          if (this.options.shift) {
              var i = this.options.shift;
              "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                  top: e,
                  left: o
              }));
              var n = void 0,
                  r = void 0;
              if ("string" == typeof i) {
                  i = i.split(" "), i[1] = i[1] || i[0];
                  var s = M(i, 2);
                  n = s[0], r = s[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
              } else n = i.top, r = i.left;
              return e += n, o += r, {
                  top: e,
                  left: o
              }
          }
      }
  }), R
});
H5P.Tether = Tether;
window.Tether = oldTether;;
var oldDrop = window.Drop;
var oldTether = window.Tether;
Tether = H5P.Tether;
! function(t, e) {
  "function" == typeof define && define.amd ? define(["tether"], e) : "object" == typeof exports ? module.exports = e(require("tether")) : t.Drop = e(t.Tether)
}(this, function(t) {
  "use strict";

  function e(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
          constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
          }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function o(t) {
      var e = t.split(" "),
          n = a(e, 2),
          o = n[0],
          i = n[1];
      if (["left", "right"].indexOf(o) >= 0) {
          var s = [i, o];
          o = s[0], i = s[1]
      }
      return [o, i].join(" ")
  }

  function i(t, e) {
      for (var n = void 0, o = []; - 1 !== (n = t.indexOf(e));) o.push(t.splice(n, 1));
      return o
  }

  function s() {
      var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          u = function() {
              for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
              return new(r.apply(b, [null].concat(e)))
          };
      p(u, {
          createContext: s,
          drops: [],
          defaults: {}
      });
      var g = {
          classPrefix: "drop",
          defaults: {
              position: "bottom left",
              openOn: "click",
              beforeClose: null,
              constrainToScrollParent: !0,
              constrainToWindow: !0,
              classes: "",
              remove: !1,
              tetherOptions: {}
          }
      };
      p(u, g, a), p(u.defaults, g.defaults, a.defaults), "undefined" == typeof x[u.classPrefix] && (x[u.classPrefix] = []), u.updateBodyClasses = function() {
          for (var t = !1, e = x[u.classPrefix], n = e.length, o = 0; n > o; ++o)
              if (e[o].isOpened()) {
                  t = !0;
                  break
              }
          t ? d(document.body, u.classPrefix + "-open") : c(document.body, u.classPrefix + "-open")
      };
      var b = function(s) {
          function r(t) {
              if (e(this, r), l(Object.getPrototypeOf(r.prototype), "constructor", this).call(this), this.options = p({}, u.defaults, t), this.target = this.options.target, "undefined" == typeof this.target) throw new Error("Drop Error: You must provide a target.");
              var n = "data-" + u.classPrefix,
                  o = this.target.getAttribute(n);
              o && (this.options.content = o);
              for (var i = ["position", "openOn"], s = 0; s < i.length; ++s) {
                  var a = this.target.getAttribute(n + "-" + i[s]);
                  a && (this.options[i[s]] = a)
              }
              this.options.classes && this.options.addTargetClasses !== !1 && d(this.target, this.options.classes), u.drops.push(this), x[u.classPrefix].push(this), this._boundEvents = [], this.bindMethods(), this.setupElements(), this.setupEvents(), this.setupTether()
          }
          return n(r, s), h(r, [{
              key: "_on",
              value: function(t, e, n) {
                  this._boundEvents.push({
                      element: t,
                      event: e,
                      handler: n
                  }), t.addEventListener(e, n)
              }
          }, {
              key: "bindMethods",
              value: function() {
                  this.transitionEndHandler = this._transitionEndHandler.bind(this)
              }
          }, {
              key: "setupElements",
              value: function() {
                  var t = this;
                  if (this.drop = document.createElement("div"), d(this.drop, u.classPrefix), this.options.classes && d(this.drop, this.options.classes), this.content = document.createElement("div"), d(this.content, u.classPrefix + "-content"), "function" == typeof this.options.content) {
                      var e = function() {
                          var e = t.options.content.call(t, t);
                          if ("string" == typeof e) t.content.innerHTML = e;
                          else {
                              if ("object" != typeof e) throw new Error("Drop Error: Content function should return a string or HTMLElement.");
                              t.content.innerHTML = "", t.content.appendChild(e)
                          }
                      };
                      e(), this.on("open", e.bind(this))
                  } else "object" == typeof this.options.content ? this.content.appendChild(this.options.content) : this.content.innerHTML = this.options.content;
                  this.drop.appendChild(this.content)
              }
          }, {
              key: "setupTether",
              value: function() {
                  var e = this.options.position.split(" ");
                  e[0] = E[e[0]], e = e.join(" ");
                  var n = [];
                  this.options.constrainToScrollParent ? n.push({
                      to: "scrollParent",
                      pin: "top, bottom",
                      attachment: "together none"
                  }) : n.push({
                      to: "scrollParent"
                  }), this.options.constrainToWindow !== !1 ? n.push({
                      to: "window",
                      attachment: "together"
                  }) : n.push({
                      to: "window"
                  });
                  var i = {
                      element: this.drop,
                      target: this.target,
                      attachment: o(e),
                      targetAttachment: o(this.options.position),
                      classPrefix: u.classPrefix,
                      offset: "0 0",
                      targetOffset: "0 0",
                      enabled: !1,
                      constraints: n,
                      addTargetClasses: this.options.addTargetClasses
                  };
                  this.options.tetherOptions !== !1 && (this.tether = new t(p({}, i, this.options.tetherOptions)))
              }
          }, {
              key: "setupEvents",
              value: function() {
                  var t = this;
                  if (this.options.openOn) {
                      if ("always" === this.options.openOn) return void setTimeout(this.open.bind(this));
                      var e = this.options.openOn.split(" ");
                      if (e.indexOf("click") >= 0)
                          for (var n = function(e) {
                                  t.toggle(e), e.preventDefault()
                              }, o = function(e) {
                                  t.isOpened() && (e.target === t.drop || t.drop.contains(e.target) || e.target === t.target || t.target.contains(e.target) || t.close(e))
                              }, i = 0; i < y.length; ++i) {
                              var s = y[i];
                              this._on(this.target, s, n), this._on(document, s, o)
                          }
                      var r = !1,
                          a = null,
                          h = function(e) {
                              r = !0, t.open(e)
                          },
                          l = function(e) {
                              r = !1, "undefined" != typeof a && clearTimeout(a), a = setTimeout(function() {
                                  r || t.close(e), a = null
                              }, 50)
                          };
                      e.indexOf("hover") >= 0 && (this._on(this.target, "mouseover", h), this._on(this.drop, "mouseover", h), this._on(this.target, "mouseout", l), this._on(this.drop, "mouseout", l)), e.indexOf("focus") >= 0 && (this._on(this.target, "focus", h), this._on(this.drop, "focus", h), this._on(this.target, "blur", l), this._on(this.drop, "blur", l))
                  }
              }
          }, {
              key: "isOpened",
              value: function() {
                  return this.drop ? f(this.drop, u.classPrefix + "-open") : void 0
              }
          }, {
              key: "toggle",
              value: function(t) {
                  this.isOpened() ? this.close(t) : this.open(t)
              }
          }, {
              key: "open",
              value: function(t) {
                  var e = this;
                  this.isOpened() || (this.drop.parentNode || document.body.appendChild(this.drop), "undefined" != typeof this.tether && this.tether.enable(), d(this.drop, u.classPrefix + "-open"), d(this.drop, u.classPrefix + "-open-transitionend"), setTimeout(function() {
                      e.drop && d(e.drop, u.classPrefix + "-after-open")
                  }), "undefined" != typeof this.tether && this.tether.position(), this.trigger("open"), u.updateBodyClasses())
              }
          }, {
              key: "_transitionEndHandler",
              value: function(t) {
                  t.target === t.currentTarget && (f(this.drop, u.classPrefix + "-open") || c(this.drop, u.classPrefix + "-open-transitionend"), this.drop.removeEventListener(m, this.transitionEndHandler))
              }
          }, {
              key: "beforeCloseHandler",
              value: function(t) {
                  var e = !0;
                  return this.isClosing || "function" != typeof this.options.beforeClose || (this.isClosing = !0, e = this.options.beforeClose(t, this) !== !1), this.isClosing = !1, e
              }
          }, {
              key: "close",
              value: function(t) {
                  this.isOpened() && this.beforeCloseHandler(t) && (c(this.drop, u.classPrefix + "-open"), c(this.drop, u.classPrefix + "-after-open"), this.drop.addEventListener(m, this.transitionEndHandler), this.trigger("close"), "undefined" != typeof this.tether && this.tether.disable(), u.updateBodyClasses(), this.options.remove && this.remove(t))
              }
          }, {
              key: "remove",
              value: function(t) {
                  this.close(t), this.drop.parentNode && this.drop.parentNode.removeChild(this.drop)
              }
          }, {
              key: "position",
              value: function() {
                  this.isOpened() && "undefined" != typeof this.tether && this.tether.position()
              }
          }, {
              key: "destroy",
              value: function() {
                  this.remove(), "undefined" != typeof this.tether && this.tether.destroy();
                  for (var t = 0; t < this._boundEvents.length; ++t) {
                      var e = this._boundEvents[t],
                          n = e.element,
                          o = e.event,
                          s = e.handler;
                      n.removeEventListener(o, s)
                  }
                  this._boundEvents = [], this.tether = null, this.drop = null, this.content = null, this.target = null, i(x[u.classPrefix], this), i(u.drops, this)
              }
          }]), r
      }(v);
      return u
  }
  var r = Function.prototype.bind,
      a = function() {
          function t(t, e) {
              var n = [],
                  o = !0,
                  i = !1,
                  s = void 0;
              try {
                  for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (n.push(r.value), !e || n.length !== e); o = !0);
              } catch (h) {
                  i = !0, s = h
              } finally {
                  try {
                      !o && a["return"] && a["return"]()
                  } finally {
                      if (i) throw s
                  }
              }
              return n
          }
          return function(e, n) {
              if (Array.isArray(e)) return e;
              if (Symbol.iterator in Object(e)) return t(e, n);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
      }(),
      h = function() {
          function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
              }
          }
          return function(e, n, o) {
              return n && t(e.prototype, n), o && t(e, o), e
          }
      }(),
      l = function(t, e, n) {
          for (var o = !0; o;) {
              var i = t,
                  s = e,
                  r = n;
              a = l = h = void 0, o = !1, null === i && (i = Function.prototype);
              var a = Object.getOwnPropertyDescriptor(i, s);
              if (void 0 !== a) {
                  if ("value" in a) return a.value;
                  var h = a.get;
                  return void 0 === h ? void 0 : h.call(r)
              }
              var l = Object.getPrototypeOf(i);
              if (null === l) return void 0;
              t = l, e = s, n = r, o = !0
          }
      },
      u = t.Utils,
      p = u.extend,
      d = u.addClass,
      c = u.removeClass,
      f = u.hasClass,
      v = u.Evented,
      y = ["click"];
  "ontouchstart" in document.documentElement && y.push("touchstart");
  var g = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend"
      },
      m = "";
  for (var b in g)
      if ({}.hasOwnProperty.call(g, b)) {
          var O = document.createElement("p");
          "undefined" != typeof O.style[b] && (m = g[b])
      }
  var E = {
          left: "right",
          right: "left",
          top: "bottom",
          bottom: "top",
          middle: "middle",
          center: "center"
      },
      x = {},
      P = s();
  return document.addEventListener("DOMContentLoaded", function() {
      P.updateBodyClasses()
  }), P
});
H5P.Drop = Drop;
window.Drop = oldDrop;
window.Tether = oldTether;;
var H5P = H5P || {};
/**
* Transition contains helper function relevant for transitioning
*/
H5P.Transition = (function($) {
  /**
   * @class
   * @namespace H5P
   */
  Transition = {};
  /**
   * @private
   */
  Transition.transitionEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'transition': 'transitionend',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd'
  };
  /**
   * @private
   */
  Transition.cache = [];
  /**
   * Get the vendor property name for an event
   *
   * @function H5P.Transition.getVendorPropertyName
   * @static
   * @private
   * @param  {string} prop Generic property name
   * @return {string}      Vendor specific property name
   */
  Transition.getVendorPropertyName = function(prop) {
      if (Transition.cache[prop] !== undefined) {
          return Transition.cache[prop];
      }
      var div = document.createElement('div');
      // Handle unprefixed versions (FF16+, for example)
      if (prop in div.style) {
          Transition.cache[prop] = prop;
      } else {
          var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
          var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);
          if (prop in div.style) {
              Transition.cache[prop] = prop;
          } else {
              for (var i = 0; i < prefixes.length; ++i) {
                  var vendorProp = prefixes[i] + prop_;
                  if (vendorProp in div.style) {
                      Transition.cache[prop] = vendorProp;
                      break;
                  }
              }
          }
      }
      return Transition.cache[prop];
  };
  /**
   * Get the name of the transition end event
   *
   * @static
   * @private
   * @return {string}  description
   */
  Transition.getTransitionEndEventName = function() {
      return Transition.transitionEndEventNames[Transition.getVendorPropertyName('transition')] || undefined;
  };
  /**
   * Helper function for listening on transition end events
   *
   * @function H5P.Transition.onTransitionEnd
   * @static
   * @param  {domElement} $element The element which is transitioned
   * @param  {function} callback The callback to be invoked when transition is finished
   * @param  {number} timeout  Timeout in milliseconds. Fallback if transition event is never fired
   */
  Transition.onTransitionEnd = function($element, callback, timeout) {
      // Fallback on 1 second if transition event is not supported/triggered
      timeout = timeout || 1000;
      Transition.transitionEndEventName = Transition.transitionEndEventName || Transition.getTransitionEndEventName();
      var callbackCalled = false;
      var doCallback = function() {
          if (callbackCalled) {
              return;
          }
          $element.off(Transition.transitionEndEventName, callback);
          callbackCalled = true;
          clearTimeout(timer);
          callback();
      };
      var timer = setTimeout(function() {
          doCallback();
      }, timeout);
      $element.on(Transition.transitionEndEventName, function() {
          doCallback();
      });
  };
  /**
   * Wait for a transition - when finished, invokes next in line
   *
   * @private
   *
   * @param {Object[]}    transitions             Array of transitions
   * @param {H5P.jQuery}  transitions[].$element  Dom element transition is performed on
   * @param {number=}     transitions[].timeout   Timeout fallback if transition end never is triggered
   * @param {bool=}       transitions[].break     If true, sequence breaks after this transition
   * @param {number}      index                   The index for current transition
   */
  var runSequence = function(transitions, index) {
      if (index >= transitions.length) {
          return;
      }
      var transition = transitions[index];
      H5P.Transition.onTransitionEnd(transition.$element, function() {
          if (transition.end) {
              transition.end();
          }
          if (transition.break !== true) {
              runSequence(transitions, index + 1);
          }
      }, transition.timeout || undefined);
  };
  /**
   * Run a sequence of transitions
   *
   * @function H5P.Transition.sequence
   * @static
   * @param {Object[]}    transitions             Array of transitions
   * @param {H5P.jQuery}  transitions[].$element  Dom element transition is performed on
   * @param {number=}     transitions[].timeout   Timeout fallback if transition end never is triggered
   * @param {bool=}       transitions[].break     If true, sequence breaks after this transition
   */
  Transition.sequence = function(transitions) {
      runSequence(transitions, 0);
  };
  return Transition;
})(H5P.jQuery);;
var H5P = H5P || {};
/**
* Class responsible for creating a help text dialog
*/
H5P.JoubelHelpTextDialog = (function($) {
  /**
   * Display a pop-up containing a message.
   *
   * @param {H5P.jQuery}  $container  The container which message dialog will be appended to
   * @param {string}      message     The message
   * @return {H5P.jQuery}
   */
  function JoubelHelpTextDialog(header, message) {
      var $helpTextDialogBox = $('<div>', {
          'class': 'joubel-help-text-dialog-box'
      });
      var $helpTextDialogBackground = $('<div>', {
          'class': 'joubel-help-text-dialog-background'
      }).appendTo($helpTextDialogBox);
      var $helpTextDialogContainer = $('<div>', {
          'class': 'joubel-help-text-dialog-container'
      }).appendTo($helpTextDialogBox);
      $('<div>', {
          'class': 'joubel-help-text-header',
          'html': header
      }).appendTo($helpTextDialogContainer);
      $('<div>', {
          'class': 'joubel-help-text-body',
          'html': message
      }).appendTo($helpTextDialogContainer);
      $('<div>', {
          'class': 'joubel-help-text-remove',
          'tabindex': 0
      }).click(function() {
          $helpTextDialogBox.remove();
      }).keydown(function(e) {
          var keyPressed = e.which;
          // 32 - space
          if (keyPressed === 32) {
              $(this).click();
              e.preventDefault();
          }
      }).appendTo($helpTextDialogContainer);
      return $helpTextDialogBox;
  }
  return JoubelHelpTextDialog;
}(H5P.jQuery));;
var H5P = H5P || {};
/**
* Class responsible for creating auto-disappearing dialogs
*/
H5P.JoubelMessageDialog = (function($) {
  /**
   * Display a pop-up containing a message.
   *
   * @param {H5P.jQuery} $container The container which message dialog will be appended to
   * @param {string} message The message
   * @return {H5P.jQuery}
   */
  function JoubelMessageDialog($container, message) {
      var timeout;
      var removeDialog = function() {
          $warning.remove();
          clearTimeout(timeout);
          $container.off('click.messageDialog');
      };
      // Create warning popup:
      var $warning = $('<div/>', {
          'class': 'joubel-message-dialog',
          text: message
      }).appendTo($container);
      // Remove after 3 seconds or if user clicks anywhere in $container:
      timeout = setTimeout(removeDialog, 3000);
      $container.on('click.messageDialog', removeDialog);
      return $warning;
  }
  return JoubelMessageDialog;
})(H5P.jQuery);;
var H5P = H5P || {};
/**
* Class responsible for creating a circular progress bar
*/
H5P.JoubelProgressCircle = (function($) {
  /**
   * Constructor for the Progress Circle
   *
   * @param {Number} number The amount of progress to display
   * @param {string} progressColor Color for the progress meter
   * @param {string} backgroundColor Color behind the progress meter
   */
  function ProgressCircle(number, progressColor, fillColor, backgroundColor) {
      progressColor = progressColor || '#096bcb';
      fillColor = fillColor || '#f0f0f0';
      backgroundColor = backgroundColor || '#ffffff';
      var progressColorRGB = this.hexToRgb(progressColor);
      //Verify number
      try {
          number = Number(number);
          if (number === '') {
              throw 'is empty';
          }
          if (isNaN(number)) {
              throw 'is not a number';
          }
      } catch (e) {
          console.log('Progress circle input' + e);
          number = 'err';
      }
      //Draw circle
      if (number > 100) {
          number = 100;
      }
      var decimalNumber = number / 100;
      // We can not use rgba, since they will stack on top of each other.
      // Instead we create the equivalent of the rgba color
      // and applies this to the activeborder and background color.
      var progressColorString = 'rgb(' + parseInt(this.rgbFromAlpha(progressColorRGB.r, decimalNumber), 10) + ',' + parseInt(this.rgbFromAlpha(progressColorRGB.g, decimalNumber), 10) + ',' + parseInt(this.rgbFromAlpha(progressColorRGB.b, decimalNumber), 10) + ')';
      // Circle wrapper
      var $wrapper = $('<div/>', {
          'class': "joubel-progress-circle-wrapper"
      });
      //Active border indicates progress
      var $activeBorder = $('<div/>', {
          'class': "joubel-progress-circle-active-border"
      }).appendTo($wrapper);
      //Background circle
      var $backgroundCircle = $('<div/>', {
          'class': "joubel-progress-circle-circle"
      }).appendTo($activeBorder);
      //Progress text/number
      $('<span/>', {
          'text': number,
          'class': "joubel-progress-circle-percentage"
      }).appendTo($backgroundCircle);
      var deg = number * 3.6;
      if (deg <= 180) {
          $activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, ' + fillColor + ' 50%),' + 'linear-gradient(90deg, ' + fillColor + ' 50%, transparent 50%)').css('border', '2px solid' + backgroundColor).css('background-color', progressColorString);
      } else {
          $activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, ' + progressColorString + ' 50%),' + 'linear-gradient(90deg, ' + fillColor + ' 50%, transparent 50%)').css('border', '2px solid' + backgroundColor).css('background-color', progressColorString);
      }
      this.$activeBorder = $activeBorder;
      this.$backgroundCircle = $backgroundCircle;
      this.$wrapper = $wrapper;
      this.initResizeFunctionality();
      return $wrapper;
  }
  /**
   * Initializes resize functionality for the progress circle
   */
  ProgressCircle.prototype.initResizeFunctionality = function() {
      var self = this;
      $(window).resize(function() {
          // Queue resize
          setTimeout(function() {
              self.resize();
          });
      });
      // First resize
      setTimeout(function() {
          self.resize();
      }, 0);
  };
  /**
   * Resize function makes progress circle grow or shrink relative to parent container
   */
  ProgressCircle.prototype.resize = function() {
      var $parent = this.$wrapper.parent();
      if ($parent !== undefined && $parent) {
          // Measurements
          var fontSize = parseInt($parent.css('font-size'), 10);
          // Static sizes
          var fontSizeMultiplum = 3.75;
          var progressCircleWidthPx = parseInt((fontSize / 4.5), 10) % 2 === 0 ? parseInt((fontSize / 4.5), 10) : parseInt((fontSize / 4.5), 10) + 1;
          var progressCircleOffset = progressCircleWidthPx / 2;
          var width = fontSize * fontSizeMultiplum;
          var height = fontSize * fontSizeMultiplum;
          this.$activeBorder.css({
              'width': width,
              'height': height
          });
          this.$backgroundCircle.css({
              'width': width - progressCircleWidthPx,
              'height': height - progressCircleWidthPx,
              'top': progressCircleOffset,
              'left': progressCircleOffset
          });
      }
  };
  /**
   * Hex to RGB conversion
   * @param hex
   * @returns {{r: Number, g: Number, b: Number}}
   */
  ProgressCircle.prototype.hexToRgb = function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  };
  /**
   * Convert rgb and opacity to new rgb
   * @param {number} colorValue
   * @param {float} opacity
   * @returns {number} blended colorValue
   */
  ProgressCircle.prototype.rgbFromAlpha = function(colorValue, opacity) {
      return (opacity * colorValue) + (1 - opacity) * 255;
  };
  return ProgressCircle;
}(H5P.jQuery));;
var H5P = H5P || {};
H5P.SimpleRoundedButton = (function($) {
  /**
   * Creates a new tip
   */
  function SimpleRoundedButton(text) {
      var $simpleRoundedButton = $('<div>', {
          'class': 'joubel-simple-rounded-button',
          'title': text,
          'role': 'button',
          'tabindex': '0'
      }).keydown(function(e) {
          var keyPressed = e.which;
          // 32 - space
          if (keyPressed === 32) {
              $(this).click();
              e.preventDefault();
          }
          $(this).focus();
      });
      $('<span>', {
          'class': 'joubel-simple-rounded-button-text',
          'html': text
      }).appendTo($simpleRoundedButton);
      return $simpleRoundedButton;
  }
  return SimpleRoundedButton;
}(H5P.jQuery));;
var H5P = H5P || {};
/**
* Class responsible for creating speech bubbles
*/
H5P.JoubelSpeechBubble = (function($) {
  var $currentSpeechBubble;
  var $currentContainer;
  var removeSpeechBubbleTimeout;
  var DEFAULT_MAX_WIDTH = 400;
  var iDevice = navigator.userAgent.match(/iPod|iPhone|iPad/g) ? true : false;
  /**
   * Creates a new speech bubble
   *
   * @param {H5P.jQuery} $container The speaking object
   * @param {string} text The text to display
   * @param {number} maxWidth The maximum width of the bubble
   * @return {H5P.JoubelSpeechBubble}
   */
  function JoubelSpeechBubble($container, text, maxWidth) {
      maxWidth = maxWidth || DEFAULT_MAX_WIDTH;
      $currentContainer = $container;
      this.isCurrent = function($tip) {
          return $tip === $currentContainer;
      };
      this.remove = function() {
          remove();
      };
      var fadeOutSpeechBubble = function($speechBubble) {
          if (!$speechBubble) {
              return;
          }
          // Stop removing bubble
          clearTimeout(removeSpeechBubbleTimeout);
          $speechBubble.removeClass('show');
          setTimeout(function() {
              if ($speechBubble) {
                  $speechBubble.remove();
                  $speechBubble = undefined;
              }
          }, 500);
      };
      if ($currentSpeechBubble !== undefined) {
          remove();
      }
      var $h5pContainer = $container.closest('.h5p-frame');
      // Check closest h5p frame first, then check for container in case there is no frame.
      if (!$h5pContainer.length) {
          $h5pContainer = $container.closest('.h5p-container');
      }
      // Make sure we fade out old speech bubble
      fadeOutSpeechBubble($currentSpeechBubble);
      // Create bubble
      var $tail = $('<div class="joubel-speech-bubble-tail"></div>');
      var $innerTail = $('<div class="joubel-speech-bubble-inner-tail"></div>');
      var $innerBubble = $('<div class="joubel-speech-bubble-inner">' + '<div class="joubel-speech-bubble-text">' + text + '</div>' + '</div>').prepend($innerTail);
      $currentSpeechBubble = $('<div class="joubel-speech-bubble" aria-live="assertive">').append([$tail, $innerBubble]).appendTo($h5pContainer);
      // Show speech bubble with transition
      setTimeout(function() {
          $currentSpeechBubble.addClass('show');
      }, 0);
      // Calculate offset between the button and the h5p frame
      var offset = getOffsetBetween($h5pContainer, $container);
      var direction = (offset.bottom > offset.top ? 'bottom' : 'top');
      var tipWidth = offset.outerWidth * 0.9; // Var needs to be renamed to make sense
      var bubbleWidth = tipWidth > maxWidth ? maxWidth : tipWidth;
      var bubblePosition = getBubblePosition(bubbleWidth, offset);
      var tailPosition = getTailPosition(bubbleWidth, bubblePosition, offset, $container.width());
      // Need to set font-size, since element is appended to body.
      // Using same font-size as parent. In that way it will grow accordingly
      // when resizing
      var fontSize = 16; //parseFloat($parent.css('font-size'));
      // Set width and position of speech bubble
      $currentSpeechBubble.css(bubbleCSS(direction, bubbleWidth, bubblePosition, fontSize));
      var preparedTailCSS = tailCSS(direction, tailPosition);
      $tail.css(preparedTailCSS);
      $innerTail.css(preparedTailCSS);
      // Handle click to close
      H5P.$body.on('mousedown.speechBubble', handleOutsideClick);
      // Handle clicks when inside IV which blocks bubbling.
      $container.parents('.h5p-dialog').on('mousedown.speechBubble', handleOutsideClick);
      if (iDevice) {
          H5P.$body.css('cursor', 'pointer');
      }
      return this;
  }
  // Remove speechbubble if it belongs to a dom element that is about to be hidden
  H5P.externalDispatcher.on('domHidden', function(event) {
      if ($currentSpeechBubble !== undefined && event.data.$dom.find($currentContainer).length !== 0) {
          remove();
      }
  });
  /**
   * Static function for removing the speechbubble
   */
  var remove = function() {
      H5P.$body.off('mousedown.speechBubble');
      $currentContainer.parents('.h5p-dialog').off('mousedown.speechBubble');
      if (iDevice) {
          H5P.$body.css('cursor', '');
      }
      if ($currentSpeechBubble !== undefined) {
          // Apply transition, then remove speech bubble
          $currentSpeechBubble.removeClass('show');
          // Make sure we remove any old timeout before reassignment
          clearTimeout(removeSpeechBubbleTimeout);
          removeSpeechBubbleTimeout = setTimeout(function() {
              $currentSpeechBubble.remove();
              $currentSpeechBubble = undefined;
          }, 500);
      }
      // Don't return false here. If the user e.g. clicks a button when the bubble is visible,
      // we want the bubble to disapear AND the button to receive the event
  };
  /**
   * Remove the speech bubble with a fade
   *
   * @param {jQuery} $speechBubble Speech bubble element
   */
  function fadeOutSpeechBubble($speechBubble) {
      if (!$speechBubble) {
          return;
      }
      // Stop removing bubble
      clearTimeout(removeSpeechBubbleTimeout);
      $speechBubble.removeClass('show');
      setTimeout(function() {
          if ($speechBubble) {
              $speechBubble.remove();
              $speechBubble = undefined;
          }
      }, 500);
  }
  /**
   * Remove the speech bubble and container reference
   */
  function handleOutsideClick(event) {
      if (event.target === $currentContainer[0]) {
          return; // Button clicks are not outside clicks
      }
      remove();
      // There is no current container when a container isn't clicked
      $currentContainer = undefined;
  }
  /**
   * Calculate position for speech bubble
   *
   * @param {number} bubbleWidth The width of the speech bubble
   * @param {object} offset
   * @return {object} Return position for the speech bubble
   */
  function getBubblePosition(bubbleWidth, offset) {
      var bubblePosition = {};
      var tailOffset = 9;
      var widthOffset = bubbleWidth / 2;
      // Calculate top position
      bubblePosition.top = offset.top + offset.innerHeight;
      // Calculate bottom position
      bubblePosition.bottom = offset.bottom + offset.innerHeight + tailOffset;
      // Calculate left position
      if (offset.left < widthOffset) {
          bubblePosition.left = 3;
      } else if ((offset.left + widthOffset) > offset.outerWidth) {
          bubblePosition.left = offset.outerWidth - bubbleWidth - 3;
      } else {
          bubblePosition.left = offset.left - widthOffset + (offset.innerWidth / 2);
      }
      return bubblePosition;
  }
  /**
   * Calculate position for speech bubble tail
   *
   * @param {number} bubbleWidth The width of the speech bubble
   * @param {object} bubblePosition Speech bubble position
   * @param {object} offset
   * @param {number} iconWidth The width of the tip icon
   * @return {object} Return position for the tail
   */
  function getTailPosition(bubbleWidth, bubblePosition, offset, iconWidth) {
      var tailPosition = {};
      // Magic numbers. Tuned by hand so that the tail fits visually within
      // the bounds of the speech bubble.
      var leftBoundary = 9;
      var rightBoundary = bubbleWidth - 20;
      tailPosition.left = offset.left - bubblePosition.left + (iconWidth / 2) - 6;
      if (tailPosition.left < leftBoundary) {
          tailPosition.left = leftBoundary;
      }
      if (tailPosition.left > rightBoundary) {
          tailPosition.left = rightBoundary;
      }
      tailPosition.top = -6;
      tailPosition.bottom = -6;
      return tailPosition;
  }
  /**
   * Return bubble CSS for the desired growth direction
   *
   * @param {string} direction The direction the speech bubble will grow
   * @param {number} width The width of the speech bubble
   * @param {object} position Speech bubble position
   * @param {number} fontSize The size of the bubbles font
   * @return {object} Return CSS
   */
  function bubbleCSS(direction, width, position, fontSize) {
      if (direction === 'top') {
          return {
              width: width + 'px',
              bottom: position.bottom + 'px',
              left: position.left + 'px',
              fontSize: fontSize + 'px'
          };
      } else {
          return {
              width: width + 'px',
              top: position.top + 'px',
              left: position.left + 'px',
              fontSize: fontSize + 'px'
          };
      }
  }
  /**
   * Return tail CSS for the desired growth direction
   *
   * @param {string} direction The direction the speech bubble will grow
   * @param {object} position Tail position
   * @return {object} Return CSS
   */
  function tailCSS(direction, position) {
      if (direction === 'top') {
          return {
              bottom: position.bottom + 'px',
              left: position.left + 'px'
          };
      } else {
          return {
              top: position.top + 'px',
              left: position.left + 'px'
          };
      }
  }
  /**
   * Calculates the offset between an element inside a container and the
   * container. Only works if all the edges of the inner element is inside the
   * outer element.
   * Width/height of the elements is included as a convenience.
   *
   * @param {H5P.jQuery} $outer
   * @param {H5P.jQuery} $inner
   * @return {object} Position offset
   */
  function getOffsetBetween($outer, $inner) {
      var outer = $outer[0].getBoundingClientRect();
      var inner = $inner[0].getBoundingClientRect();
      return {
          top: inner.top - outer.top,
          right: outer.right - inner.right,
          bottom: outer.bottom - inner.bottom,
          left: inner.left - outer.left,
          innerWidth: inner.width,
          innerHeight: inner.height,
          outerWidth: outer.width,
          outerHeight: outer.height
      };
  }
  return JoubelSpeechBubble;
})(H5P.jQuery);;
var H5P = H5P || {};
H5P.JoubelThrobber = (function($) {
  /**
   * Creates a new tip
   */
  function JoubelThrobber() {
      // h5p-throbber css is described in core
      var $throbber = $('<div/>', {
          'class': 'h5p-throbber'
      });
      return $throbber;
  }
  return JoubelThrobber;
}(H5P.jQuery));;
var H5P = H5P || {};
H5P.JoubelTip = (function($) {
  /**
   * Creates a new tip
   *
   * @param {string} text The text to display in the popup
   * @param {object} params Additional parameters
   * @param {string} [params.tipLabel] Tip label
   */
  function JoubelTip(text, params) {
      var speechBubble;
      params = $.extend({
          showSpeechBubble: true,
          helpIcon: false
      }, params);
      var parsedTitle = text;
      if ($.parseHTML($.trim(text)).length) {
          parsedTitle = $.parseHTML($.trim(text))[0].textContent;
      }
      var $tip = $('<div/>', {
          class: 'joubel-tip-container' + (params.showSpeechBubble ? '' : ' be-quiet'),
          title: parsedTitle,
          role: 'button',
          tabindex: 0,
          click: function() {
              toggleSpeechBubble();
              return false;
          },
          keydown: function(e) {
              // Space
              if (e.which === 32) {
                  toggleSpeechBubble();
                  e.preventDefault();
              } else {
                  toggleSpeechBubble(true);
              }
          }
      }).append($('<div/>', {
          'class': 'joubel-tip-icon' + (params.helpIcon ? ' help-icon' : '')
      }));
      /**
       * Add or remove a speech bubble
       * @private
       * @param {boolean} [close] Forces tip close
       * @return {boolean}
       */
      function toggleSpeechBubble(close) {
          if (speechBubble !== undefined && speechBubble.isCurrent($tip)) {
              speechBubble.remove();
              speechBubble = undefined;
          } else if (!close && params.showSpeechBubble) {
              speechBubble = H5P.JoubelSpeechBubble($tip, text);
          }
      }
      return $tip;
  }
  return JoubelTip;
})(H5P.jQuery);;
var H5P = H5P || {};
H5P.JoubelSlider = (function($) {
  /**
   * Creates a new Slider
   *
   * @param {object} [params] Additional parameters
   */
  function JoubelSlider(params) {
      H5P.EventDispatcher.call(this);
      var self = this;
      this.$slider = $('<div>', $.extend({
          'class': 'h5p-joubel-ui-slider'
      }, params));
      this.$slides = [];
      this.currentIndex = 0;
      this.numSlides = 0;
  }
  JoubelSlider.prototype = Object.create(H5P.EventDispatcher.prototype);
  JoubelSlider.prototype.constructor = JoubelSlider;
  JoubelSlider.prototype.addSlide = function($content) {
      $content.addClass('h5p-joubel-ui-slide').css({
          'left': (this.numSlides * 100) + '%'
      });
      this.$slider.append($content);
      this.$slides.push($content);
      this.numSlides++;
      if (this.numSlides === 1) {
          $content.addClass('current');
      }
  };
  JoubelSlider.prototype.attach = function($container) {
      $container.append(this.$slider);
  };
  JoubelSlider.prototype.move = function(index) {
      var self = this;
      if (index === 0) {
          self.trigger('first-slide');
      }
      if (index + 1 === self.numSlides) {
          self.trigger('last-slide');
      }
      self.trigger('move');
      var $previousSlide = self.$slides[this.currentIndex];
      H5P.Transition.onTransitionEnd(this.$slider, function() {
          $previousSlide.removeClass('current');
          self.trigger('moved');
      });
      this.$slides[index].addClass('current');
      var translateX = 'translateX(' + (-index * 100) + '%)';
      this.$slider.css({
          '-webkit-transform': translateX,
          '-moz-transform': translateX,
          '-ms-transform': translateX,
          'transform': translateX
      });
      this.currentIndex = index;
  };
  JoubelSlider.prototype.remove = function() {
      this.$slider.remove();
  };
  JoubelSlider.prototype.next = function() {
      if (this.currentIndex + 1 >= this.numSlides) {
          return;
      }
      this.move(this.currentIndex + 1);
  };
  JoubelSlider.prototype.previous = function() {
      this.move(this.currentIndex - 1);
  };
  JoubelSlider.prototype.first = function() {
      this.move(0);
  };
  JoubelSlider.prototype.last = function() {
      this.move(this.numSlides - 1);
  };
  return JoubelSlider;
})(H5P.jQuery);;
var H5P = H5P || {};
/**
* @module
*/
H5P.JoubelScoreBar = (function($) {
  /**
   * Creates a score bar
   * @class H5P.JoubelScoreBar
   * @param {number=} maxScore  Maximum score
   * @param {string} [label] Makes it easier for readspeakers to identify the scorebar
   */
  function JoubelScoreBar(maxScore, label) {
      var self = this;
      self.maxScore = maxScore;
      self.score = 0;
      /**
       * @method hasFullScore
       * @private
       * @return {Boolean} true if full score, else false
       */
      var hasFullScore = function() {
          return self.score === self.maxScore;
      };
      /**
       * @function appendTo
       * @memberOf H5P.JoubelScoreBar#
       * @param {H5P.jQuery}  $wrapper  Dom container
       */
      self.appendTo = function($wrapper) {
          self.$scoreBar.appendTo($wrapper);
      };
      /**
       * Creates the html for this widget
       *
       * @method createHtml
       * @private
       */
      var createHtml = function() {
          // Container div
          self.$scoreBar = $('<div>', {
              'class': 'h5p-joubelui-score-bar',
              'role': 'progressbar',
              'aria-valuenow': 0,
              'aria-valuemin': 0,
              'aria-valuemax': self.maxScore
          });
          if (label) {
              self.$scoreBar.attr('aria-label', label + '.');
          }
          // The progress bar wrapper
          self.$progressWrapper = $('<div>', {
              'class': 'h5p-joubelui-score-bar-progress-wrapper'
          }).appendTo(self.$scoreBar);
          self.$progress = $('<div>', {
              'class': 'h5p-joubelui-score-bar-progress'
          }).appendTo(self.$progressWrapper);
          // The star
          self.$endWrapper = $('<div>', {
              'class': 'h5p-joubelui-score-bar-end'
          }).appendTo(self.$scoreBar);
          // The default star
          self.$defaultStar = $('<span>', {
              'class': 'h5p-joubelui-score-bar-default-star'
          }).appendTo(self.$endWrapper);
          // The full score star
          self.$fullScoreStar = $('<span>', {
              'class': 'h5p-joubelui-score-bar-full-score-star'
          }).appendTo(self.$endWrapper);
      };
      /**
       * Set the current score
       * @method setScore
       * @memberOf H5P.JoubelScoreBar#
       * @param  {number} score
       */
      self.setScore = function(score) {
          // Do nothing if score hasn't changed
          if (score === self.score) {
              return;
          }
          self.score = score > self.maxScore ? self.maxScore : score;
          self.updateVisuals();
      };
      /**
       * Increment score
       * @method incrementScore
       * @memberOf H5P.JoubelScoreBar#
       * @param  {number=}        incrementBy Optional parameter, defaults to 1
       */
      self.incrementScore = function(incrementBy) {
          self.setScore(self.score + (incrementBy || 1));
      };
      /**
       * Set the max score
       * @method setMaxScore
       * @memberOf H5P.JoubelScoreBar#
       * @param  {number}    maxScore The max score
       */
      self.setMaxScore = function(maxScore) {
          self.maxScore = maxScore;
      };
      /**
       * Updates the progressbar visuals
       * @memberOf H5P.JoubelScoreBar#
       * @method updateVisuals
       */
      self.updateVisuals = function() {
          var fullscore = hasFullScore();
          self.$scoreBar.attr('aria-valuenow', self.score);
          setTimeout(function() {
              self.$progress.addClass('animate');
              self.$progress.css({
                  width: (fullscore ? '102' : (self.maxScore - 1 !== 0 ? (self.score * 100 / (self.maxScore - 1)) : 0)) + '%'
              });
              H5P.Transition.sequence([{
                  $element: self.$progress,
                  timeout: 600,
                  end: function() {
                      self.$progress.removeClass('animate');
                      self.$scoreBar.toggleClass('full-score', fullscore);
                      if (fullscore) {
                          self.$fullScoreStar.addClass('animate-background');
                      }
                  },
                  break: !fullscore
              }, {
                  $element: self.$fullScoreStar,
                  timeout: 400,
                  end: function() {
                      self.$fullScoreStar.addClass('animate-star show-star');
                  }
              }, {
                  $element: self.$fullScoreStar,
                  end: function() {
                      self.$fullScoreStar.removeClass('animate-star');
                      self.$fullScoreStar.addClass('animate-star-blink');
                  }
              }]);
          }, 300);
      };
      /**
       * Removes all classes
       * @method reset
       */
      self.reset = function() {
          self.$fullScoreStar.removeClass('animate-star animate-star-blink show-star animate-background');
          self.$scoreBar.removeClass('full-score');
      };
      createHtml();
  }
  return JoubelScoreBar;
})(H5P.jQuery);;
var H5P = H5P || {};
H5P.JoubelProgressbar = (function($) {
  /**
   * Joubel progressbar class
   * @method JoubelProgressbar
   * @constructor
   * @param  {number}          steps Number of steps
   * @param {Object} [options] Additional options
   * @param {boolean} [options.disableAria] Disable readspeaker assistance
   * @param {string} [options.progressText] A progress text for describing
   *  current progress out of total progress for readspeakers.
   *  e.g. "Slide :num of :total"
   */
  function JoubelProgressbar(steps, options) {
      H5P.EventDispatcher.call(this);
      var self = this;
      this.options = $.extend({
          progressText: 'Slide :num of :total'
      }, options);
      this.currentStep = 0;
      this.steps = steps;
      this.$progressbar = $('<div>', {
          'class': 'h5p-joubelui-progressbar',
          on: {
              click: function() {
                  self.toggleTooltip();
                  return false;
              },
              mouseenter: function() {
                  self.showTooltip();
              },
              mouseleave: function() {
                  setTimeout(function() {
                      self.hideTooltip();
                  }, 1500)
              }
          }
      });
      this.$background = $('<div>', {
          'class': 'h5p-joubelui-progressbar-background'
      }).appendTo(this.$progressbar);
      $('body').click(function() {
          self.toggleTooltip(true);
      });
  }
  JoubelProgressbar.prototype = Object.create(H5P.EventDispatcher.prototype);
  JoubelProgressbar.prototype.constructor = JoubelProgressbar;
  /**
   * Display tooltip
   * @method showTooltip
   */
  JoubelProgressbar.prototype.showTooltip = function() {
      var self = this;
      if (this.currentStep === 0 || this.tooltip !== undefined) {
          return;
      }
      var parentWidth = self.$progressbar.offset().left + self.$progressbar.width();
      this.tooltip = new H5P.Drop({
          target: this.$background.get(0),
          content: this.currentStep + '/' + this.steps,
          classes: 'drop-theme-arrows-bounce h5p-joubelui-drop',
          position: 'top right',
          openOn: 'always',
          tetherOptions: {
              attachment: 'bottom center',
              targetAttachment: 'top right'
          }
      });
      this.tooltip.on('open', function() {
          var $drop = $(self.tooltip.drop);
          var left = $drop.position().left;
          var dropWidth = $drop.width();
          // Need to handle drops getting outside of the progressbar:
          if (left < 0) {
              $drop.css({
                  marginLeft: (-left) + 'px'
              });
          } else if (left + dropWidth > parentWidth) {
              $drop.css({
                  marginLeft: (parentWidth - (left + dropWidth)) + 'px'
              });
          }
      });
  };
  JoubelProgressbar.prototype.updateAria = function() {
      var self = this;
      if (this.options.disableAria) {
          return;
      }
      if (!this.$currentStatus) {
          this.$currentStatus = $('<div>', {
              'class': 'h5p-joubelui-progressbar-slide-status-text',
              'aria-live': 'assertive'
          }).appendTo(this.$progressbar);
      }
      var interpolatedProgressText = self.options.progressText.replace(':num', self.currentStep).replace(':total', self.steps);
      this.$currentStatus.html(interpolatedProgressText);
  };
  /**
   * Hides tooltip
   * @method hideTooltip
   */
  JoubelProgressbar.prototype.hideTooltip = function() {
      if (this.tooltip !== undefined) {
          this.tooltip.remove();
          this.tooltip.destroy();
          this.tooltip = undefined;
      }
  };
  /**
   * Toggles tooltip-visibility
   * @method toggleTooltip
   * @param  {boolean} [closeOnly] Don't show, only close if open
   */
  JoubelProgressbar.prototype.toggleTooltip = function(closeOnly) {
      if (this.tooltip === undefined && !closeOnly) {
          this.showTooltip();
      } else if (this.tooltip !== undefined) {
          this.hideTooltip();
      }
  };
  /**
   * Appends to a container
   * @method appendTo
   * @param  {H5P.jquery} $container
   */
  JoubelProgressbar.prototype.appendTo = function($container) {
      this.$progressbar.appendTo($container);
  };
  /**
   * Update progress
   * @method setProgress
   * @param  {number}    step
   */
  JoubelProgressbar.prototype.setProgress = function(step) {
      // Check for valid value:
      if (step > this.steps || step < 0) {
          return;
      }
      this.currentStep = step;
      this.$background.css({
          width: ((this.currentStep / this.steps) * 100) + '%'
      });
      this.updateAria();
  };
  /**
   * Increment progress with 1
   * @method next
   */
  JoubelProgressbar.prototype.next = function() {
      this.setProgress(this.currentStep + 1);
  };
  /**
   * Reset progressbar
   * @method reset
   */
  JoubelProgressbar.prototype.reset = function() {
      this.setProgress(0);
  };
  /**
   * Check if last step is reached
   * @method isLastStep
   * @return {Boolean}
   */
  JoubelProgressbar.prototype.isLastStep = function() {
      return this.steps === this.currentStep;
  };
  return JoubelProgressbar;
})(H5P.jQuery);;
var H5P = H5P || {};
/**
* H5P Joubel UI library.
*
* This is a utility library, which does not implement attach. I.e, it has to bee actively used by
* other libraries
* @module
*/
H5P.JoubelUI = (function($) {
  /**
   * The internal object to return
   * @class H5P.JoubelUI
   * @static
   */
  function JoubelUI() {}
  /* Public static functions */
  /**
   * Create a tip icon
   * @method H5P.JoubelUI.createTip
   * @param  {string}  text   The textual tip
   * @param  {Object}  params Parameters
   * @return {H5P.JoubelTip}
   */
  JoubelUI.createTip = function(text, params) {
      return new H5P.JoubelTip(text, params);
  };
  /**
   * Create message dialog
   * @method H5P.JoubelUI.createMessageDialog
   * @param  {H5P.jQuery}               $container The dom container
   * @param  {string}                   message    The message
   * @return {H5P.JoubelMessageDialog}
   */
  JoubelUI.createMessageDialog = function($container, message) {
      return new H5P.JoubelMessageDialog($container, message);
  };
  /**
   * Create help text dialog
   * @method H5P.JoubelUI.createHelpTextDialog
   * @param  {string}             header  The textual header
   * @param  {string}             message The textual message
   * @return {H5P.JoubelHelpTextDialog}
   */
  JoubelUI.createHelpTextDialog = function(header, message) {
      return new H5P.JoubelHelpTextDialog(header, message);
  };
  /**
   * Create progress circle
   * @method H5P.JoubelUI.createProgressCircle
   * @param  {number}             number          The progress (0 to 100)
   * @param  {string}             progressColor   The progress color in hex value
   * @param  {string}             fillColor       The fill color in hex value
   * @param  {string}             backgroundColor The background color in hex value
   * @return {H5P.JoubelProgressCircle}
   */
  JoubelUI.createProgressCircle = function(number, progressColor, fillColor, backgroundColor) {
      return new H5P.JoubelProgressCircle(number, progressColor, fillColor, backgroundColor);
  };
  /**
   * Create throbber for loading
   * @method H5P.JoubelUI.createThrobber
   * @return {H5P.JoubelThrobber}
   */
  JoubelUI.createThrobber = function() {
      return new H5P.JoubelThrobber();
  };
  /**
   * Create simple rounded button
   * @method H5P.JoubelUI.createSimpleRoundedButton
   * @param  {string}                  text The button label
   * @return {H5P.SimpleRoundedButton}
   */
  JoubelUI.createSimpleRoundedButton = function(text) {
      return new H5P.SimpleRoundedButton(text);
  };
  /**
   * Create Slider
   * @method H5P.JoubelUI.createSlider
   * @param  {Object} [params] Parameters
   * @return {H5P.JoubelSlider}
   */
  JoubelUI.createSlider = function(params) {
      return new H5P.JoubelSlider(params);
  };
  /**
   * Create Score Bar
   * @method H5P.JoubelUI.createScoreBar
   * @param  {number=}       maxScore The maximum score
   * @param {string} [label] Makes it easier for readspeakers to identify the scorebar
   * @return {H5P.JoubelScoreBar}
   */
  JoubelUI.createScoreBar = function(maxScore, label) {
      return new H5P.JoubelScoreBar(maxScore, label);
  };
  /**
   * Create Progressbar
   * @method H5P.JoubelUI.createProgressbar
   * @param  {number=}       numSteps The total numer of steps
   * @param {Object} [options] Additional options
   * @param {boolean} [options.disableAria] Disable readspeaker assistance
   * @param {string} [options.progressText] A progress text for describing
   *  current progress out of total progress for readspeakers.
   *  e.g. "Slide :num of :total"
   * @return {H5P.JoubelProgressbar}
   */
  JoubelUI.createProgressbar = function(numSteps, options) {
      return new H5P.JoubelProgressbar(numSteps, options);
  };
  /**
   * Create standard Joubel button
   *
   * @method H5P.JoubelUI.createButton
   * @param {object} params
   *  May hold any properties allowed by jQuery. If href is set, an A tag
   *  is used, if not a button tag is used.
   * @return {H5P.jQuery} The jquery element created
   */
  JoubelUI.createButton = function(params) {
      var type = 'button';
      if (params.href) {
          type = 'a';
      } else {
          params.type = 'button';
      }
      if (params.class) {
          params.class += ' h5p-joubelui-button';
      } else {
          params.class = 'h5p-joubelui-button';
      }
      return $('<' + type + '/>', params);
  };
  return JoubelUI;
})(H5P.jQuery);;
var H5P = H5P || {};
/**
* Flashcards module.
*
* @param {jQuery} $
*/
H5P.Flashcards = (function($) {
  /**
   * Initialize module.
   *
   * @param {Object} options Run parameters
   * @param {Number} id Content identification
   */
  function C(options, id) {
      H5P.EventDispatcher.call(this);
      this.score = 0;
      this.numAnswered = 0;
      this.contentId = this.id = id;
      this.options = $.extend({}, {
          description: "What does the card mean?",
          progressText: "Card @card of @total",
          next: "Next",
          previous: "Previous",
          checkAnswerText: "Check answer",
          showSolutionsRequiresInput: true
      }, options);
      this.$images = [];
      this.on('resize', this.resize, this);
  }
  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;
  /**
   * Append field to wrapper.
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function($container) {
      var that = this;
      this.$container = $container.addClass('h5p-flashcards').html('<div class="h5p-loading">Loading, please wait...</div>');
      // Load card images. (we need their size before we can create the task)
      var loaded = 0;
      for (var i = 0; i < this.options.cards.length; i++) {
          var card = this.options.cards[i];
          var load = function() {
              loaded++;
              if (loaded === that.options.cards.length) {
                  that.cardsLoaded();
              }
          };
          if (card.image !== undefined) {
              var $image = $('<img class="h5p-clue" src="' + H5P.getPath(card.image.path, this.id) + '"/>').load(load);
              this.$images[i] = $image;
          } else {
              this.$images[i] = $('<div class="h5p-clue"></div>');
          }
          if (card.image === undefined || $image.get().complete) {
              // Image cached
              load();
          }
      }
  };
  /**
   * Called when all cards has been loaded.
   */
  C.prototype.cardsLoaded = function() {
      var that = this;
      var $inner = this.$container.html('<div class="h5p-description">' + this.options.description + '</div><div class="h5p-inner"></div><div class="h5p-navigation"><button type="button" class="h5p-button h5p-previous h5p-hidden" tabindex="3" title="' + this.options.previous + '"></button><button type="button" class="h5p-button h5p-next" tabindex="4" title="' + this.options.next + '"></button><div class="h5p-progress"></div>').children('.h5p-inner');
      this.$progress = this.$container.find('.h5p-progress');
      // Add cards
      for (var i = 0; i < this.options.cards.length; i++) {
          this.addCard(i, $inner);
      }
      // Find highest image and set task height.
      var height = 180;
      for (var i = 0; i < this.$images.length; i++) {
          var $image = this.$images[i];
          if ($image === undefined) {
              continue;
          }
          var imageHeight = $image.height();
          if (imageHeight > height) {
              height = imageHeight;
          }
      }
      // Center images
      for (var i = 0; i < this.$images.length; i++) {
          var $image = this.$images[i];
          if ($image === undefined) {
              continue;
          }
      }
      // Set height
      $inner.css('height', height + 286); // TODO: Avoid magic numbers - 122?
      // Active buttons
      var $buttonWrapper = $inner.next();
      this.$nextButton = $buttonWrapper.children('.h5p-next').click(function() {
          that.next();
      });
      this.$prevButton = $buttonWrapper.children('.h5p-previous').click(function() {
          that.previous();
      });
      if (this.options.cards.length < 2) {
          this.$nextButton.hide();
      }
      this.$inner = $inner;
      this.setProgress();
      this.trigger('resize');
  };
  C.prototype.addCard = function(index, $inner) {
      var that = this;
      var card = this.options.cards[index];
      var imageText = (card.text !== undefined ? '<div class="h5p-imagetext">' + card.text + '</div>' : '');
      var $card = $('<div class="h5p-card h5p-animate' + (index === 0 ? ' h5p-current' : '') + '"> ' + '<div class="h5p-cardholder">' + '<div class="h5p-imageholder"></div>' + '<div class="h5p-foot">' + imageText + '<div class="h5p-answer">' + '<div class="h5p-input"><input type="text" class="h5p-textinput" tabindex="-1"/>' + '<button type="button" class="h5p-button" tabindex="-1">' + this.options.checkAnswerText + '</button></div></div></div></div></div>').appendTo($inner);
      $card.find('.h5p-imageholder').prepend(this.$images[index]);
      // Add tip if tip exists
      if (card.tip !== undefined && card.tip.trim().length > 0) {
          $('.h5p-input', $card).append(H5P.JoubelUI.createTip(card.tip)).addClass('has-tip');
      }
      var $button = $card.find('.h5p-button').click(function() {
          var $input = $card.find('.h5p-textinput');
          var correctAnswer = that.options.cards[index].answer;
          if (correctAnswer === undefined) {
              correctAnswer = '';
          }
          var correct = correctAnswer.toLowerCase().split('/');
          var userAnswer = H5P.trim($input.val()).toLowerCase();
          var userCorrect = false;
          for (var i = 0; i < correct.length; i++) {
              if (H5P.trim(correct[i]) === userAnswer) {
                  that.score++;
                  userCorrect = true;
                  break;
              }
          }
          that.numAnswered++;
          if (that.numAnswered >= that.options.cards.length) {
              that.triggerXAPICompleted(that.score, that.numAnswered);
          }
          if (!that.options.showSolutionsRequiresInput || userAnswer !== '' || userCorrect) {
              $input.add(this).attr('disabled', true);
              if (userCorrect) {
                  $input.parent().addClass('h5p-correct');
              } else {
                  $input.parent().addClass('h5p-wrong');
              }
              that.$images[index].addClass('h5p-collapse');
              setTimeout(function() {
                  that.$images[index].removeClass('h5p-collapse');
              }, 150);
              var $solution = $('<div class="h5p-solution h5p-hidden"><span>' + correctAnswer + '</span></div>').appendTo($card.find('.h5p-imageholder'));
              setTimeout(function() {
                  $solution.removeClass('h5p-hidden');
              }, 150);
          }
      });
      $card.find('.h5p-textinput').keypress(function(event) {
          if (event.keyCode === 13) {
              $button.click();
              return false;
          }
      });
      if (index === 0) {
          this.setCurrent($card);
      }
  };
  C.prototype.setProgress = function() {
      var index = this.$current.index();
      this.$progress.text(this.options.progressText.replace('@card', index + 1).replace('@total', this.options.cards.length));
  };
  /**
   * Set card as current card.
   *
   * Adjusts classes and tabindexes for existing current card and new
   * card.
   *
   * @param {jQuery-object} $card
   * @param {string} newClassForOldCurrentCard
   *   Class to add to existing current card.
   */
  C.prototype.setCurrent = function($card, newClassForOldCurrentCard) {
      // Remove from existing card.
      if (this.$current) {
          this.$current.removeClass('h5p-current');
          this.$current.find('input, button').attr('tabindex', '-1');
          if (newClassForOldCurrentCard) {
              this.$current.addClass(newClassForOldCurrentCard);
          }
      }
      this.$current = $card;
      $card.addClass('h5p-current');
      $card.find('.h5p-textinput').attr('tabindex', '1');
      $card.find('.h5p-button').attr('tabindex', '2');
      $card.removeClass('h5p-previous');
  };
  /**
   * Display next card.
   */
  C.prototype.next = function() {
      var that = this;
      var $next = this.$current.next();
      if (!$next.length) {
          return;
      }
      setTimeout(function() {
          that.setCurrent($next, 'h5p-previous');
          if (!that.$current.next().length) {
              that.$nextButton.addClass('h5p-hidden');
          }
          that.$prevButton.removeClass('h5p-hidden');
          that.setProgress();
      }, 10);
  };
  /**
   * Display previous card.
   */
  C.prototype.previous = function() {
      var that = this;
      var $prev = this.$current.prev();
      if (!$prev.length) {
          return;
      }
      setTimeout(function() {
          that.setCurrent($prev);
          if (!that.$current.prev().length) {
              that.$prevButton.addClass('h5p-hidden');
          }
          that.$nextButton.removeClass('h5p-hidden');
          that.setProgress();
      }, 10);
  };
  /**
   * Gather copyright information from cards.
   *
   * @returns {H5P.ContentCopyrights}
   */
  C.prototype.getCopyrights = function() {
      var info = new H5P.ContentCopyrights();
      // Go through cards
      for (var i = 0; i < this.options.cards.length; i++) {
          var image = this.options.cards[i].image;
          if (image !== undefined && image.copyright !== undefined) {
              var rights = new H5P.MediaCopyright(image.copyright);
              rights.setThumbnail(new H5P.Thumbnail(H5P.getPath(image.path, this.id), image.width, image.height));
              info.addMedia(rights);
          }
      }
      return info;
  };
  /**
   * Update the dimensions and imagesizes of the task.
   */
  C.prototype.resize = function() {
      var self = this;
      if (self.$inner === undefined) {
          return;
      }
      var maxHeight = 0;
      var maxHeightImage = 0;
      var imageHolderWidth = self.$inner.find('.h5p-imageholder').width();
      var minPadding = parseFloat(self.$inner.css('font-size'));
      //Resize all images and find max height.
      self.$images.forEach(function(image) {
          var $image = image;
          var imageHeight = 0;
          $image.css({
              'height': 'initial',
              'width': 'initial'
          });
          //Resize image if it is too big.
          if (($image[0].naturalWidth + (minPadding * 2)) > imageHolderWidth || ($image[0].naturalHeight + (minPadding * 2)) > imageHolderWidth) {
              var ratio = $image[0].naturalHeight / $image[0].naturalWidth;
              //Landscape image
              if ($image[0].naturalWidth >= $image[0].naturalHeight) {
                  $image.css({
                      'width': imageHolderWidth - (minPadding * 2),
                      'height': 'auto'
                  });
                  imageHeight = (imageHolderWidth - (minPadding * 2)) * ratio;
              }
              //Portrait image
              else {
                  $image.css({
                      'height': imageHolderWidth - minPadding * 2,
                      'width': 'auto'
                  });
                  imageHeight = imageHolderWidth - minPadding * 2;
              }
          }
          //Else use source dimensions
          else {
              $image.css({
                  'height': 'initial',
                  'width': 'initial'
              });
              imageHeight = $image.outerHeight();
          }
          //Keep max height
          maxHeightImage = imageHeight + minPadding * 2 > maxHeightImage ? imageHeight + minPadding * 2 : maxHeightImage;
      });
      //Find container dimensions needed to encapsule image and text.
      self.$inner.children().each(function(cardWrapper) {
          var cardholderHeight = maxHeightImage + $(this).find('.h5p-foot').outerHeight();
          maxHeight = cardholderHeight > maxHeight ? cardholderHeight : maxHeight;
      });
      //Resize containers to fit image and text.
      self.$inner.find('.h5p-imageholder').css('height', maxHeightImage + 'px');
      self.$inner.css('height', maxHeight + minPadding * 2 + 'px');
  };
  return C;
})(H5P.jQuery);;
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
var code;
Vue.component('w-example', {
  props: {
      lang: {
          type: String,
          default: 'html'
      },
      isResult: {
          type: Boolean,
          default: true
      },
      isBase: {
          type: Boolean,
          default: true
      }
  },
  data() {
      return {
          id: null,
          active: false,
          hasMoved: false,
          percent: 40,
          darkMode: false,
          horizontalMode: true,
          sandbox: {
              'html': '',
              'css': '',
              'js': '',
              'title': '',
              'descr': ''
          }
      }
  },
  mounted() {
      var html = this.$slots.default[0].text;
      var doctype = html.toLowerCase().indexOf('<!doctype');
      if (doctype == -1) {
          code = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>webref.ru</title>';
          if (this.$props.isBase == true) code += '<base target="_blank" href="/example/">';
          code += '</head><body>' + html + '</body></html>';
      } else {
          if (this.$props.isBase == true) code = html.replace('</head>', '<base href="/example/" target="_blank"></head>');
          else code = html;
      }
      if (this.$props.lang != 'html') {
          this.$props.isResult = false;
      }
      if (this.$props.isResult == true) {
          let result = this.$refs.result.contentWindow;
          result.document.write(code);
          result.document.close();
      }
      this.id = this._uid;
      this.sandbox = sandbox(code);
      if (localStorage.darkMode) {
          this.darkMode = localStorage.darkMode === 'true';
      }
      if (localStorage.horizontalMode) {
          this.horizontalMode = localStorage.horizontalMode === 'true';
      }
      this.percent = (this.horizontalMode === true && this.$props.isResult === true) ? 40 : 100;
  },
  watch: {
      darkMode: function() {
          localStorage.darkMode = this.darkMode;
      }
  },
  methods: {
      reloadExample: function() {
          let result = this.$refs.result.contentWindow;
          result.document.open();
          result.document.write(code);
          result.document.close();
      },
      splitMode: function() {
          this.horizontalMode = !this.horizontalMode;
          localStorage.horizontalMode = this.horizontalMode;
          this.percent = (this.horizontalMode === true) ? 40 : 100;
      },
      newTab: function() {
          this.$refs.webref.submit();
      },
      copyCode() {
          let range = document.createRange();
          range.selectNodeContents(document.querySelector('.w-example-code'));
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
      },
      jsFiddle: function() {
          this.$refs.jsFiddle.submit();
      },
      codePen: function() {
          this.$refs.codePen.submit();
      },
      onMouseDown() {
          this.active = true;
          this.hasMoved = false;
      },
      onMouseUp() {
          this.active = false;
      },
      onMouseMove(e) {
          if (e.buttons === 0 || e.which === 0) {
              this.active = false
          }
          if (this.active) {
              let offset = 0
              let target = e.currentTarget;
              while (target) {
                  offset += target.offsetLeft;
                  target = target.offsetParent;
              }
              const currentPage = e.pageX;
              const targetOffset = e.currentTarget.offsetWidth;
              const percent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100
              if (percent > 20 && percent < 80) {
                  this.percent = percent;
              }
              this.$emit('resize', this.percent)
              this.hasMoved = true
          }
      },
  },
  computed: {
      userSelect() {
          return this.active ? 'none' : '';
      },
  },
  template: `<div class="w-example">
<div class="w-example-toolbar" v-if="isResult==true">
<div class="is-pulled-left">
<span><input :id="id" type="checkbox" class="switch" v-model="darkMode"><label :for="id">Тёмная тема</label></span>
</div>
<div class="is-pulled-right">
<span @click="reloadExample" title="Обновить результат"><i class="icon-play"></i></span>
<span @click="splitMode"><i :class="horizontalMode==true ? 'icon-vertical-split' : 'icon-horizontal-split'"></i></span>
<span @click="newTab" title="Открыть в новой вкладке"><i class="icon-popup"></i></span>
<form action="/example/" method="post" target="_blank" ref="webref" hidden><input type="hidden" name="codetext" :value="code"></form>
<span @click="copyCode" title="Скопировать код в буфер"><i class="icon-copy"></i></span>
<span @click="jsFiddle" title="Открыть в JSFiddle"><i class="icon-jsfiddle"></i></span>
<form action="https://jsfiddle.net/api/post/library/pure/" method="post" target="_blank" ref="jsFiddle" hidden><input type="hidden" name="title" :value="sandbox.title"><input type="hidden" name="description" :value="sandbox.descr"><input type="hidden" name="html" :value="sandbox.html"><input type="hidden" name="css" :value="sandbox.css"><input type="hidden" name="js" :value="sandbox.js"></form>
<span @click="codePen" title="Открыть в CodePen"><i class="icon-codepen"></i></span>
<form action="https://codepen.io/pen/define" method="post" target="_blank" ref="codePen" hidden><input type="hidden" name="data" :value="sandbox.codepen"></form>
</div>
</div>
<div class="multipane" :class="horizontalMode==true ? 'multipane-horizontal' : 'multipane-vertical'" :style="userSelect" @mouseup="onMouseUp" @mousemove="onMouseMove">
<div class="pane pane-mobile" :class="isResult==true ? 'pane-l-desktop' : 'pane-l-mobile'" :style="{ width: percent+'%'}">
<pre :class="darkMode==true? 'theme-dark' : 'theme-light'"><code :data-language="lang" ref="source" class="w-example-code"><slot></slot></code></pre>
</div>
<div class="multipane-resizer" v-if="isResult==true && horizontalMode==true" @mousedown="onMouseDown"></div>
<div class="pane pane-r-desktop pane-mobile" v-if="isResult==true">
<iframe class="w-example-result" ref="result"></iframe>
</div>
</div>
</div>`
});
Vue.component('w-individual', {
  data() {
      return {
          isShowing: false
      }
  },
  computed: {
      buttonValue: function() {
          return (this.isShowing) ? 'Скрыть ответ' : 'Показать ответ';
      }
  },
  template: `<section class="individual-result">
<p><button class="button is-info is-outlined" @click="isShowing=!isShowing">{{ buttonValue }}</button></p>
<div class="individual-answer" v-show="isShowing">
<slot></slot>
</div>
</section>`
});
Vue.component('b-tabs', {
  props: {
      value: Number,
      type: {
          type: String,
          default: 'is-boxed'
      }
  },
  data() {
      return {
          activeTab: this.value || 0,
          tabs: []
      }
  },
  created() {
      this.tabs = this.$children;
  },
  methods: {
      selectTab: function(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.label == selectedTab.label);
          });
      },
      activeTab: function(selectedTab) {
          this.tabs[selectedTab].isActive = true;
      }
  },
  mounted() {
      this.tabs[this.activeTab].isActive = true;
  },
  template: `<div class="b-tabs">
<nav class="tabs" :class="type">
<ul>
  <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
    <a @click="selectTab(tab)"><span v-if="tab.icon" class="icon"><i class="icon" :class="tab.icon"></i></span><span>{{ tab.label }}</span></a>
  </li>
</ul>
</nav>
<section class="tab-content">
<slot></slot>
</section>
</div>`
});
Vue.component('b-tab-item', {
  props: {
      label: {
          type: String,
          required: true
      },
      icon: {
          type: String,
      }
  },
  template: `<div class="tab-item" :class="{ 'is-active': isActive }"><slot></slot></div>`,
  data() {
      return {
          isActive: false
      }
  }
});

function sandbox(code) {
  var data = {
      'html': '',
      'css': '',
      'js': '',
      'title': '',
      'descr': '',
      'codepen': ''
  };
  var title, css, js, html;
  title = code.match("<title>(.*)<\/title>");
  css = code.match("<style[^>]*>((?:.|\r?\n)*?)<\/style>");
  js = code.match("<script>((?:.|\r?\n)*?)</script>");
  html = code.match("<body[^>]*>((?:.|\r?\n)*?)<\/body>");
  if (!!html) {
      var img = new RegExp('<img src="image/', 'g');
      data.html = html[1].replace(img, '<img src="//webref.ru/example/image/');
  }
  if (!!css) {
      var img = new RegExp('url\\(/example/image/', 'g');
      data.css = css[1].replace(img, 'url(//webref.ru/example/image/');
  }
  if (!!js) data.js = js[1];
  if (!!title) data.title = title[1];
  data.descr = window.location.href;
  codepen = {
      'title': data.title,
      'description': data.descr,
      'html': data.html,
      'css': data.css,
      'js': data.js
  };
  data.codepen = JSON.stringify(codepen);
  return data;
}
Vue.component('w-practice', {
  props: {
      script: {
          type: String,
          required: true
      },
      nextId: {
          type: Number,
          default: 0
      },
  },
  data() {
      return {
          task: this.$props.script,
          correct: [],
          animated: [],
          nextId: this.$props.nextId
      }
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
  },
  mounted() {
      var self = this;
      console.log(self.$slots.css3[0].children[0])
      this.$nextTick(function() {
          var disabled = self.task['disabled'] || "";
          if (self.$slots.html5 != null) {
              let readOnlyHTML = (disabled == "html") ? "nocursor" : false;
              let editorHTML = CodeMirror.fromTextArea(self.$slots.css3[0].children[0], {
                  mode: 'text/html',
                  lineNumbers: true,
                  readOnly: readOnlyHTML
              });
          }
          if (self.$slots.css3 != null) {
              let readOnlyCSS = (disabled == "css") ? "nocursor" : false;
              let editorCSS = CodeMirror.fromTextArea(self.$refs.css, {
                  mode: 'text/css',
                  lineNumbers: true,
                  readOnly: readOnlyCSS
              });
          }
      });
  },
  template: `<section class="w-practice">
<div class="practice_task_area">
<div v-for="(value, index) in task.task" :key="index" :class="[correct[index] ? 'success' : 'alert', {'shake': animated[index]}]" @animationend="removeShake(index)" class="practice_task callout" v-cloak>
  {{ value.string }}
</div>
</div>
<div class="columns">
<div class="column is-6">
  <div class="practice_toolbar"><button class="practice_run button is-link is-small" @click="run"><i class="icon-play"></i> Выполнить</button></div>       
  </div>
<div class="column is-6">
  <div class="practice_toolbar is-right"><button class="practice_validate button is-link is-small" @click="check"><i class="icon-help"></i> Проверить</button></div>
  </div>
</div>
<div class="columns">
<div class="column is-12-mobile is-6-desktop">
  <slot name="css3"></slot>
  <slot name="html5"></slot>
</div>
<div class="column is-12-mobile is-6-desktop">
  <div class="practice_browser"><iframe ref="result"></iframe></div>
</div>
</div>
</section>`
});
var webrefMain = new Vue({
  el: "#webref-main",
  data: {
      isHintSyntax: false,
      isHintBrowser: false,
      isHintSpec: false,
      playgroundValue: ''
  }
});
Vue.config.devtools = false;;
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