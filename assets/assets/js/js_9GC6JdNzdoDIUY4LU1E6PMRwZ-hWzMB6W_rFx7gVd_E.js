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
/* mousetrap v1.6.5 craig.is/killing/mice */
(function(q, u, c) {
    function v(a, b, g) {
        a.addEventListener ? a.addEventListener(b, g, !1) : a.attachEvent("on" + b, g)
    }

    function z(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            a.shiftKey || (b = b.toLowerCase());
            return b
        }
        return n[a.which] ? n[a.which] : r[a.which] ? r[a.which] : String.fromCharCode(a.which).toLowerCase()
    }

    function F(a) {
        var b = [];
        a.shiftKey && b.push("shift");
        a.altKey && b.push("alt");
        a.ctrlKey && b.push("ctrl");
        a.metaKey && b.push("meta");
        return b
    }

    function w(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
    }

    function A(a, b) {
        var g, d = [];
        var e = a;
        "+" === e ? e = ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e = e.split("+"));
        for (g = 0; g < e.length; ++g) {
            var m = e[g];
            B[m] && (m = B[m]);
            b && "keypress" != b && C[m] && (m = C[m], d.push("shift"));
            w(m) && d.push(m)
        }
        e = m;
        g = b;
        if (!g) {
            if (!p) {
                p = {};
                for (var c in n) 95 < c && 112 > c || n.hasOwnProperty(c) && (p[n[c]] = c)
            }
            g = p[e] ? "keydown" : "keypress"
        }
        "keypress" == g && d.length && (g = "keydown");
        return {
            key: m,
            modifiers: d,
            action: g
        }
    }

    function D(a, b) {
        return null === a || a === u ? !1 : a === b ? !0 : D(a.parentNode, b)
    }

    function d(a) {
        function b(a) {
            a = a || {};
            var b = !1,
                l;
            for (l in p) a[l] ? b = !0 : p[l] = 0;
            b || (x = !1)
        }

        function g(a, b, t, f, g, d) {
            var l, E = [],
                h = t.type;
            if (!k._callbacks[a]) return [];
            "keyup" == h && w(a) && (b = [a]);
            for (l = 0; l < k._callbacks[a].length; ++l) {
                var c = k._callbacks[a][l];
                if ((f || !c.seq || p[c.seq] == c.level) && h == c.action) {
                    var e;
                    (e = "keypress" == h && !t.metaKey && !t.ctrlKey) || (e = c.modifiers, e = b.sort().join(",") === e.sort().join(","));
                    e && (e = f && c.seq == f && c.level == d, (!f && c.combo == g || e) && k._callbacks[a].splice(l, 1), E.push(c))
                }
            }
            return E
        }

        function c(a, b, c, f) {
            k.stopCallback(b, b.target || b.srcElement, c, f) || !1 !== a(b, c) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0)
        }

        function e(a) {
            "number" !== typeof a.which && (a.which = a.keyCode);
            var b = z(a);
            b && ("keyup" == a.type && y === b ? y = !1 : k.handleKey(b, F(a), a))
        }

        function m(a, g, t, f) {
            function h(c) {
                return function() {
                    x = c;
                    ++p[a];
                    clearTimeout(q);
                    q = setTimeout(b, 1E3)
                }
            }

            function l(g) {
                c(t, g, a);
                "keyup" !== f && (y = z(g));
                setTimeout(b, 10)
            }
            for (var d = p[a] = 0; d < g.length; ++d) {
                var e = d + 1 === g.length ? l : h(f || A(g[d + 1]).action);
                n(g[d], e, f, a, d)
            }
        }

        function n(a, b, c, f, d) {
            k._directMap[a + ":" + c] = b;
            a = a.replace(/\s+/g, " ");
            var e = a.split(" ");
            1 < e.length ? m(a, e, b, c) : (c = A(a, c), k._callbacks[c.key] = k._callbacks[c.key] || [], g(c.key, c.modifiers, {
                type: c.action
            }, f, a, d), k._callbacks[c.key][f ? "unshift" : "push"]({
                callback: b,
                modifiers: c.modifiers,
                action: c.action,
                seq: f,
                level: d,
                combo: a
            }))
        }
        var k = this;
        a = a || u;
        if (!(k instanceof d)) return new d(a);
        k.target = a;
        k._callbacks = {};
        k._directMap = {};
        var p = {},
            q, y = !1,
            r = !1,
            x = !1;
        k._handleKey = function(a, d, e) {
            var f = g(a, d, e),
                h;
            d = {};
            var k = 0,
                l = !1;
            for (h = 0; h < f.length; ++h) f[h].seq && (k = Math.max(k, f[h].level));
            for (h = 0; h < f.length; ++h) f[h].seq ? f[h].level == k && (l = !0, d[f[h].seq] = 1, c(f[h].callback, e, f[h].combo, f[h].seq)) : l || c(f[h].callback, e, f[h].combo);
            f = "keypress" == e.type && r;
            e.type != x || w(a) || f || b(d);
            r = l && "keydown" == e.type
        };
        k._bindMultiple = function(a, b, c) {
            for (var d = 0; d < a.length; ++d) n(a[d], b, c)
        };
        v(a, "keypress", e);
        v(a, "keydown", e);
        v(a, "keyup", e)
    }
    if (q) {
        var n = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            },
            r = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
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
                222: "'"
            },
            C = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            },
            B = {
                option: "alt",
                command: "meta",
                "return": "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            },
            p;
        for (c = 1; 20 > c; ++c) n[111 + c] = "f" + c;
        for (c = 0; 9 >= c; ++c) n[c + 96] = c.toString();
        d.prototype.bind = function(a, b, c) {
            a = a instanceof Array ? a : [a];
            this._bindMultiple.call(this, a, b, c);
            return this
        };
        d.prototype.unbind = function(a, b) {
            return this.bind.call(this, a, function() {}, b)
        };
        d.prototype.trigger = function(a, b) {
            if (this._directMap[a + ":" + b]) this._directMap[a + ":" + b]({}, a);
            return this
        };
        d.prototype.reset = function() {
            this._callbacks = {};
            this._directMap = {};
            return this
        };
        d.prototype.stopCallback = function(a, b) {
            if (-1 < (" " + b.className + " ").indexOf(" mousetrap ") || D(b, this.target)) return !1;
            if ("composedPath" in a && "function" === typeof a.composedPath) {
                var c = a.composedPath()[0];
                c !== a.target && (b = c)
            }
            return "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
        };
        d.prototype.handleKey = function() {
            return this._handleKey.apply(this, arguments)
        };
        d.addKeycodes = function(a) {
            for (var b in a) a.hasOwnProperty(b) && (n[b] = a[b]);
            p = null
        };
        d.init = function() {
            var a = d(u),
                b;
            for (b in a) "_" !== b.charAt(0) && (d[b] = function(b) {
                return function() {
                    return a[b].apply(a, arguments)
                }
            }(b))
        };
        d.init();
        q.Mousetrap = d;
        "undefined" !== typeof module && module.exports && (module.exports = d);
        "function" === typeof define && define.amd && define(function() {
            return d
        })
    }
})("undefined" !== typeof window ? window : null, "undefined" !== typeof window ? document : null);;
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