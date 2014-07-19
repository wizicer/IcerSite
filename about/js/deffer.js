!
function (a) {
    function b(a, b) {
        return "function" == typeof a ? a.call(b) : a
    }
    function c(a) {
        for (; a = a.parentNode;) if (a == document) return !0;
        return !1
    }
    function d(b, c) {
        this.$element = a(b), this.options = c, this.enabled = !0, this.fixTitle()
    }
    d.prototype = {
        show: function () {
            var c = this.getTitle();
            if (c && this.enabled) {
                var d = this.tip();
                d.find(".tipsy-inner")[this.options.html ? "html" : "text"](c), d[0].className = "tipsy", d.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var e, f = a.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    g = d[0].offsetWidth,
                    h = d[0].offsetHeight,
                    i = b(this.options.gravity, this.$element[0]);
                switch (i.charAt(0)) {
                case "n":
                    e = {
                        top: f.top + f.height + this.options.offset,
                        left: f.left + f.width / 2 - g / 2
                    };
                    break;
                case "s":
                    e = {
                        top: f.top - h - this.options.offset,
                        left: f.left + f.width / 2 - g / 2
                    };
                    break;
                case "e":
                    e = {
                        top: f.top + f.height / 2 - h / 2,
                        left: f.left - g - this.options.offset
                    };
                    break;
                case "w":
                    e = {
                        top: f.top + f.height / 2 - h / 2,
                        left: f.left + f.width + this.options.offset
                    }
                }
                2 == i.length && (e.left = "w" == i.charAt(1) ? f.left + f.width / 2 - 15 : f.left + f.width / 2 - g + 15), d.css(e).addClass("tipsy-" + i), d.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + i.charAt(0), this.options.className && d.addClass(b(this.options.className, this.$element[0])), this.options.fade ? d.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : d.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                a(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function () {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("original-title")) && a.attr("original-title", a.attr("title") || "").removeAttr("title")
        },
        getTitle: function () {
            var a, b = this.$element,
                c = this.options;
            this.fixTitle();
            var a, c = this.options;
            return "string" == typeof c.title ? a = b.attr("title" == c.title ? "original-title" : c.title) : "function" == typeof c.title && (a = c.title.call(b[0])), a = ("" + a).replace(/(^\s*|\s*$)/, ""), a || c.fallback
        },
        tip: function () {
            return this.$tip || (this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    }, a.fn.tipsy = function (b) {
        function c(c) {
            var e = a.data(c, "tipsy");
            return e || (e = new d(c, a.fn.tipsy.elementOptions(c, b)), a.data(c, "tipsy", e)), e
        }
        function e() {
            var a = c(this);
            a.hoverState = "in", 0 == b.delayIn ? a.show() : (a.fixTitle(), setTimeout(function () {
                "in" == a.hoverState && a.show()
            }, b.delayIn))
        }
        function f() {
            var a = c(this);
            a.hoverState = "out", 0 == b.delayOut ? a.hide() : setTimeout(function () {
                "out" == a.hoverState && a.hide()
            }, b.delayOut)
        }
        if (b === !0) return this.data("tipsy");
        if ("string" == typeof b) {
            var g = this.data("tipsy");
            return g && g[b](), this
        }
        if (b = a.extend({}, a.fn.tipsy.defaults, b), b.live || this.each(function () {
            c(this)
        }), "manual" != b.trigger) {
            var h = b.live ? "live" : "bind",
                i = "hover" == b.trigger ? "mouseenter" : "focus",
                j = "hover" == b.trigger ? "mouseleave" : "blur";
            this[h](i, e)[h](j, f)
        }
        return this
    }, a.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, a.fn.tipsy.revalidate = function () {
        a(".tipsy").each(function () {
            var b = a.data(this, "tipsy-pointee");
            b && c(b) || a(this).remove()
        })
    }, a.fn.tipsy.elementOptions = function (b, c) {
        return a.metadata ? a.extend({}, c, a(b).metadata()) : c
    }, a.fn.tipsy.autoNS = function () {
        return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
    }, a.fn.tipsy.autoWE = function () {
        return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
    }, a.fn.tipsy.autoBounds = function (b, c) {
        return function () {
            var d = {
                ns: c[0],
                ew: c.length > 1 ? c[1] : !1
            },
                e = a(document).scrollTop() + b,
                f = a(document).scrollLeft() + b,
                g = a(this);
            return g.offset().top < e && (d.ns = "n"), g.offset().left < f && (d.ew = "w"), a(window).width() + a(document).scrollLeft() - g.offset().left < b && (d.ew = "e"), a(window).height() + a(document).scrollTop() - g.offset().top < b && (d.ns = "s"), d.ns + (d.ew ? d.ew : "")
        }
    }
}(jQuery), d3 = function () {
    function a(a) {
        return null != a && !isNaN(a)
    }
    function b(a) {
        return a.length
    }
    function c(a) {
        for (var b = 1; a * b % 1;) b *= 10;
        return b
    }
    function d(a, b) {
        try {
            for (var c in b) Object.defineProperty(a.prototype, c, {
                value: b[c],
                enumerable: !1
            })
        } catch (d) {
            a.prototype = b
        }
    }
    function e() {}
    function f() {}
    function g(a, b, c) {
        return function () {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }
    function h(a, b) {
        if (b in a) return b;
        b = b.charAt(0).toUpperCase() + b.substring(1);
        for (var c = 0, d = lh.length; d > c; ++c) {
            var e = lh[c] + b;
            if (e in a) return e
        }
    }
    function i() {}
    function j() {}
    function k(a) {
        function b() {
            for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
            return a
        }
        var c = [],
            d = new e;
        return b.on = function (b, e) {
            var f, g = d.get(b);
            return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {
                on: e
            })), a)
        }, b
    }
    function l() {
        Wg.event.preventDefault()
    }
    function m() {
        for (var a, b = Wg.event; a = b.sourceEvent;) b = a;
        return b
    }
    function n(a) {
        for (var b = new j, c = 0, d = arguments.length; ++c < d;) b[arguments[c]] = k(b);
        return b.of = function (c, d) {
            return function (e) {
                try {
                    var f = e.sourceEvent = Wg.event;
                    e.target = a, Wg.event = e, b[e.type].apply(c, d)
                } finally {
                    Wg.event = f
                }
            }
        }, b
    }
    function o(a) {
        return nh(a, sh), a
    }
    function p(a) {
        return "function" == typeof a ? a : function () {
            return oh(a, this)
        }
    }
    function q(a) {
        return "function" == typeof a ? a : function () {
            return ph(a, this)
        }
    }
    function r(a, b) {
        function c() {
            this.removeAttribute(a)
        }
        function d() {
            this.removeAttributeNS(a.space, a.local)
        }
        function e() {
            this.setAttribute(a, b)
        }
        function f() {
            this.setAttributeNS(a.space, a.local, b)
        }
        function g() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
        }
        function h() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }
        return a = Wg.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
    }
    function s(a) {
        return a.trim().replace(/\s+/g, " ")
    }
    function t(a) {
        return new RegExp("(?:^|\\s+)" + Wg.requote(a) + "(?:\\s+|$)", "g")
    }
    function u(a) {
        return a.trim().split(/^|\s+/)
    }
    function v(a, b) {
        function c() {
            for (var c = -1; ++c < e;) a[c](this, b)
        }
        function d() {
            for (var c = -1, d = b.apply(this, arguments); ++c < e;) a[c](this, d)
        }
        a = u(a).map(w);
        var e = a.length;
        return "function" == typeof b ? d : c
    }
    function w(a) {
        var b = t(a);
        return function (c, d) {
            if (e = c.classList) return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", s(e + " " + a))) : c.setAttribute("class", s(e.replace(b, " ")))
        }
    }
    function x(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }
        function e() {
            this.style.setProperty(a, b, c)
        }
        function f() {
            var d = b.apply(this, arguments);
            null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return null == b ? d : "function" == typeof b ? f : e
    }
    function y(a, b) {
        function c() {
            delete this[a]
        }
        function d() {
            this[a] = b
        }
        function e() {
            var c = b.apply(this, arguments);
            null == c ? delete this[a] : this[a] = c
        }
        return null == b ? c : "function" == typeof b ? e : d
    }
    function z(a) {
        return "function" == typeof a ? a : (a = Wg.ns.qualify(a)).local ?
        function () {
            return this.ownerDocument.createElementNS(a.space, a.local)
        } : function () {
            return this.ownerDocument.createElementNS(this.namespaceURI, a)
        }
    }
    function A(a) {
        return {
            __data__: a
        }
    }
    function B(a) {
        return function () {
            return rh(this, a)
        }
    }
    function C(a) {
        return arguments.length || (a = Wg.ascending), function (b, c) {
            return b && c ? a(b.__data__, c.__data__) : !b - !c
        }
    }
    function D(a, b) {
        for (var c = 0, d = a.length; d > c; c++) for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
        return a
    }
    function E(a) {
        return nh(a, uh), a
    }
    function F(a) {
        var b, c;
        return function (d, e, f) {
            var g, h = a[f].update,
                i = h.length;
            for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
            return g
        }
    }
    function G() {
        var a = this.__transition__;
        a && ++a.active
    }
    function H(a, b, c) {
        function d() {
            var b = this[g];
            b && (this.removeEventListener(a, b, b.$), delete this[g])
        }
        function e() {
            var e = j(b, Yg(arguments));
            d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
        }
        function f() {
            var b, c = new RegExp("^__on([^.]+)" + Wg.requote(a) + "$");
            for (var d in this) if (b = d.match(c)) {
                var e = this[d];
                this.removeEventListener(b[1], e, e.$), delete this[d]
            }
        }
        var g = "__on" + a,
            h = a.indexOf("."),
            j = I;
        h > 0 && (a = a.substring(0, h));
        var k = wh.get(a);
        return k && (a = k, j = J), h ? b ? e : d : b ? i : f
    }
    function I(a, b) {
        return function (c) {
            var d = Wg.event;
            Wg.event = c, b[0] = this.__data__;
            try {
                a.apply(this, b)
            } finally {
                Wg.event = d
            }
        }
    }
    function J(a, b) {
        var c = I(a, b);
        return function (a) {
            var b = this,
                d = a.relatedTarget;
            d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
        }
    }
    function K() {
        var a = ".dragsuppress-" + ++yh,
            b = "click" + a,
            c = Wg.select(_g).on("touchmove" + a, l).on("dragstart" + a, l).on("selectstart" + a, l);
        if (xh) {
            var d = $g.style,
                e = d[xh];
            d[xh] = "none"
        }
        return function (f) {
            function g() {
                c.on(b, null)
            }
            c.on(a, null), xh && (d[xh] = e), f && (c.on(b, function () {
                l(), g()
            }, !0), setTimeout(g, 0))
        }
    }
    function L(a, b) {
        b.changedTouches && (b = b.changedTouches[0]);
        var c = a.ownerSVGElement || a;
        if (c.createSVGPoint) {
            var d = c.createSVGPoint();
            if (0 > zh && (_g.scrollX || _g.scrollY)) {
                c = Wg.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var e = c[0][0].getScreenCTM();
                zh = !(e.f || e.e), c.remove()
            }
            return zh ? (d.x = b.pageX, d.y = b.pageY) : (d.x = b.clientX, d.y = b.clientY), d = d.matrixTransform(a.getScreenCTM().inverse()), [d.x, d.y]
        }
        var f = a.getBoundingClientRect();
        return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
    }
    function M(a) {
        return a > 0 ? 1 : 0 > a ? -1 : 0
    }
    function N(a) {
        return a > 1 ? 0 : -1 > a ? Ah : Math.acos(a)
    }
    function O(a) {
        return a > 1 ? Ch : -1 > a ? -Ch : Math.asin(a)
    }
    function P(a) {
        return ((a = Math.exp(a)) - 1 / a) / 2
    }
    function Q(a) {
        return ((a = Math.exp(a)) + 1 / a) / 2
    }
    function R(a) {
        return ((a = Math.exp(2 * a)) - 1) / (a + 1)
    }
    function S(a) {
        return (a = Math.sin(a / 2)) * a
    }
    function T() {}
    function U(a, b, c) {
        return new V(a, b, c)
    }
    function V(a, b, c) {
        this.h = a, this.s = b, this.l = c
    }
    function W(a, b, c) {
        function d(a) {
            return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
        }
        function e(a) {
            return Math.round(255 * d(a))
        }
        var f, g;
        return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, hb(e(a + 120), e(a), e(a - 120))
    }
    function X(a, b, c) {
        return new Y(a, b, c)
    }
    function Y(a, b, c) {
        this.h = a, this.c = b, this.l = c
    }
    function Z(a, b, c) {
        return isNaN(a) && (a = 0), isNaN(b) && (b = 0), $(c, Math.cos(a *= Fh) * b, Math.sin(a) * b)
    }
    function $(a, b, c) {
        return new _(a, b, c)
    }
    function _(a, b, c) {
        this.l = a, this.a = b, this.b = c
    }
    function ab(a, b, c) {
        var d = (a + 16) / 116,
            e = d + b / 500,
            f = d - c / 200;
        return e = cb(e) * Qh, d = cb(d) * Rh, f = cb(f) * Sh, hb(eb(3.2404542 * e - 1.5371385 * d - .4985314 * f), eb(-.969266 * e + 1.8760108 * d + .041556 * f), eb(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }
    function bb(a, b, c) {
        return a > 0 ? X(Math.atan2(c, b) * Gh, Math.sqrt(b * b + c * c), a) : X(0 / 0, 0 / 0, a)
    }
    function cb(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }
    function db(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }
    function eb(a) {
        return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }
    function fb(a) {
        return hb(a >> 16, 255 & a >> 8, 255 & a)
    }
    function gb(a) {
        return fb(a) + ""
    }
    function hb(a, b, c) {
        return new ib(a, b, c)
    }
    function ib(a, b, c) {
        this.r = a, this.g = b, this.b = c
    }
    function jb(a) {
        return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }
    function kb(a, b, c) {
        var d, e, f, g = 0,
            h = 0,
            i = 0;
        if (d = /([a-z]+)\((.*)\)/i.exec(a)) switch (e = d[2].split(","), d[1]) {
        case "hsl":
            return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
        case "rgb":
            return b(ob(e[0]), ob(e[1]), ob(e[2]))
        }
        return (f = Vh.get(a)) ? b(f.r, f.g, f.b) : (null != a && "#" === a.charAt(0) && (4 === a.length ? (g = a.charAt(1), g += g, h = a.charAt(2), h += h, i = a.charAt(3), i += i) : 7 === a.length && (g = a.substring(1, 3), h = a.substring(3, 5), i = a.substring(5, 7)), g = parseInt(g, 16), h = parseInt(h, 16), i = parseInt(i, 16)), b(g, h, i))
    }
    function lb(a, b, c) {
        var d, e, f = Math.min(a /= 255, b /= 255, c /= 255),
            g = Math.max(a, b, c),
            h = g - f,
            i = (g + f) / 2;
        return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = 0 / 0, e = i > 0 && 1 > i ? 0 : d), U(d, e, i)
    }
    function mb(a, b, c) {
        a = nb(a), b = nb(b), c = nb(c);
        var d = db((.4124564 * a + .3575761 * b + .1804375 * c) / Qh),
            e = db((.2126729 * a + .7151522 * b + .072175 * c) / Rh),
            f = db((.0193339 * a + .119192 * b + .9503041 * c) / Sh);
        return $(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }
    function nb(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }
    function ob(a) {
        var b = parseFloat(a);
        return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
    }
    function pb(a) {
        return "function" == typeof a ? a : function () {
            return a
        }
    }
    function qb(a) {
        return a
    }
    function rb(a) {
        return function (b, c, d) {
            return 2 === arguments.length && "function" == typeof c && (d = c, c = null), sb(b, c, a, d)
        }
    }
    function sb(a, b, c, d) {
        function e() {
            var a, b = i.status;
            if (!b && i.responseText || b >= 200 && 300 > b || 304 === b) {
                try {
                    a = c.call(f, i)
                } catch (d) {
                    return g.error.call(f, d), void 0
                }
                g.load.call(f, a)
            } else g.error.call(f, i)
        }
        var f = {},
            g = Wg.dispatch("beforesend", "progress", "load", "error"),
            h = {},
            i = new XMLHttpRequest,
            j = null;
        return !_g.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function () {
            i.readyState > 3 && e()
        }, i.onprogress = function (a) {
            var b = Wg.event;
            Wg.event = a;
            try {
                g.progress.call(f, i)
            } finally {
                Wg.event = b
            }
        }, f.header = function (a, b) {
            return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
        }, f.mimeType = function (a) {
            return arguments.length ? (b = null == a ? null : a + "", f) : b
        }, f.responseType = function (a) {
            return arguments.length ? (j = a, f) : j
        }, f.response = function (a) {
            return c = a, f
        }, ["get", "post"].forEach(function (a) {
            f[a] = function () {
                return f.send.apply(f, [a].concat(Yg(arguments)))
            }
        }), f.send = function (c, d, e) {
            if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader) for (var k in h) i.setRequestHeader(k, h[k]);
            return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function (a) {
                e(null, a)
            }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
        }, f.abort = function () {
            return i.abort(), f
        }, Wg.rebind(f, g, "on"), null == d ? f : f.get(tb(d))
    }
    function tb(a) {
        return 1 === a.length ?
        function (b, c) {
            a(null == b ? c : null)
        } : a
    }
    function ub() {
        var a = vb(),
            b = wb() - a;
        b > 24 ? (isFinite(b) && (clearTimeout(Zh), Zh = setTimeout(ub, b)), Yh = 0) : (Yh = 1, _h(ub))
    }
    function vb() {
        var a = Date.now();
        for ($h = Wh; $h;) a >= $h.t && ($h.f = $h.c(a - $h.t)), $h = $h.n;
        return a
    }
    function wb() {
        for (var a, b = Wh, c = 1 / 0; b;) b.f ? b = a ? a.n = b.n : Wh = b.n : (b.t < c && (c = b.t), b = (a = b).n);
        return Xh = a, c
    }
    function xb(a, b) {
        var c = Math.pow(10, 3 * ih(8 - b));
        return {
            scale: b > 8 ?
            function (a) {
                return a / c
            } : function (a) {
                return a * c
            },
            symbol: a
        }
    }
    function yb(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }
    function zb(a) {
        return a + ""
    }
    function Ab() {}
    function Bb(a, b, c) {
        var d = c.s = a + b,
            e = d - a,
            f = d - e;
        c.t = a - f + (b - e)
    }
    function Cb(a, b) {
        a && li.hasOwnProperty(a.type) && li[a.type](a, b)
    }
    function Db(a, b, c) {
        var d, e = -1,
            f = a.length - c;
        for (b.lineStart(); ++e < f;) d = a[e], b.point(d[0], d[1], d[2]);
        b.lineEnd()
    }
    function Eb(a, b) {
        var c = -1,
            d = a.length;
        for (b.polygonStart(); ++c < d;) Db(a[c], b, 1);
        b.polygonEnd()
    }
    function Fb() {
        function a(a, b) {
            a *= Fh, b = b * Fh / 2 + Ah / 4;
            var c = a - d,
                g = Math.cos(b),
                h = Math.sin(b),
                i = f * h,
                j = e * g + i * Math.cos(c),
                k = i * Math.sin(c);
            ni.add(Math.atan2(k, j)), d = a, e = g, f = h
        }
        var b, c, d, e, f;
        oi.point = function (g, h) {
            oi.point = a, d = (b = g) * Fh, e = Math.cos(h = (c = h) * Fh / 2 + Ah / 4), f = Math.sin(h)
        }, oi.lineEnd = function () {
            a(b, c)
        }
    }
    function Gb(a) {
        var b = a[0],
            c = a[1],
            d = Math.cos(c);
        return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
    }
    function Hb(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }
    function Ib(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }
    function Jb(a, b) {
        a[0] += b[0], a[1] += b[1], a[2] += b[2]
    }
    function Kb(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }
    function Lb(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        a[0] /= b, a[1] /= b, a[2] /= b
    }
    function Mb(a) {
        return [Math.atan2(a[1], a[0]), O(a[2])]
    }
    function Nb(a, b) {
        return ih(a[0] - b[0]) < Dh && ih(a[1] - b[1]) < Dh
    }
    function Ob(a, b) {
        a *= Fh;
        var c = Math.cos(b *= Fh);
        Pb(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
    }
    function Pb(a, b, c) {
        ++pi, ri += (a - ri) / pi, si += (b - si) / pi, ti += (c - ti) / pi
    }
    function Qb() {
        function a(a, e) {
            a *= Fh;
            var f = Math.cos(e *= Fh),
                g = f * Math.cos(a),
                h = f * Math.sin(a),
                i = Math.sin(e),
                j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
            qi += j, ui += j * (b + (b = g)), vi += j * (c + (c = h)), wi += j * (d + (d = i)), Pb(b, c, d)
        }
        var b, c, d;
        Ai.point = function (e, f) {
            e *= Fh;
            var g = Math.cos(f *= Fh);
            b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), Ai.point = a, Pb(b, c, d)
        }
    }
    function Rb() {
        Ai.point = Ob
    }
    function Sb() {
        function a(a, b) {
            a *= Fh;
            var c = Math.cos(b *= Fh),
                g = c * Math.cos(a),
                h = c * Math.sin(a),
                i = Math.sin(b),
                j = e * i - f * h,
                k = f * g - d * i,
                l = d * h - e * g,
                m = Math.sqrt(j * j + k * k + l * l),
                n = d * g + e * h + f * i,
                o = m && -N(n) / m,
                p = Math.atan2(m, n);
            xi += o * j, yi += o * k, zi += o * l, qi += p, ui += p * (d + (d = g)), vi += p * (e + (e = h)), wi += p * (f + (f = i)), Pb(d, e, f)
        }
        var b, c, d, e, f;
        Ai.point = function (g, h) {
            b = g, c = h, Ai.point = a, g *= Fh;
            var i = Math.cos(h *= Fh);
            d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), Pb(d, e, f)
        }, Ai.lineEnd = function () {
            a(b, c), Ai.lineEnd = Rb, Ai.point = Ob
        }
    }
    function Tb() {
        return !0
    }
    function Ub(a, b, c, d, e) {
        var f = [],
            g = [];
        if (a.forEach(function (a) {
            if (!((b = a.length - 1) <= 0)) {
                var b, c = a[0],
                    d = a[b];
                if (Nb(c, d)) {
                    e.lineStart();
                    for (var h = 0; b > h; ++h) e.point((c = a[h])[0], c[1]);
                    return e.lineEnd(), void 0
                }
                var i = new Wb(c, a, null, !0),
                    j = new Wb(c, null, i, !1);
                i.o = j, f.push(i), g.push(j), i = new Wb(d, a, null, !1), j = new Wb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
            }
        }), g.sort(b), Vb(f), Vb(g), f.length) {
            for (var h = 0, i = c, j = g.length; j > h; ++h) g[h].e = i = !i;
            for (var k, l, m = f[0];;) {
                for (var n = m, o = !0; n.v;) if ((n = n.n) === m) return;
                k = n.z, e.lineStart();
                do {
                    if (n.v = n.o.v = !0, n.e) {
                        if (o) for (var h = 0, j = k.length; j > h; ++h) e.point((l = k[h])[0], l[1]);
                        else d(n.x, n.n.x, 1, e);
                        n = n.n
                    } else {
                        if (o) {
                            k = n.p.z;
                            for (var h = k.length - 1; h >= 0; --h) e.point((l = k[h])[0], l[1])
                        } else d(n.x, n.p.x, -1, e);
                        n = n.p
                    }
                    n = n.o, k = n.z, o = !o
                } while (!n.v);
                e.lineEnd()
            }
        }
    }
    function Vb(a) {
        if (b = a.length) {
            for (var b, c, d = 0, e = a[0]; ++d < b;) e.n = c = a[d], c.p = e, e = c;
            e.n = c = a[0], c.p = e
        }
    }
    function Wb(a, b, c, d) {
        this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
    }
    function Xb(a, b, c, d) {
        return function (e, f) {
            function g(b, c) {
                var d = e(b, c);
                a(b = d[0], c = d[1]) && f.point(b, c)
            }
            function h(a, b) {
                var c = e(a, b);
                q.point(c[0], c[1])
            }
            function i() {
                s.point = h, q.lineStart()
            }
            function j() {
                s.point = g, q.lineEnd()
            }
            function k(a, b) {
                p.push([a, b]);
                var c = e(a, b);
                u.point(c[0], c[1])
            }
            function l() {
                u.lineStart(), p = []
            }
            function m() {
                k(p[0][0], p[0][1]), u.lineEnd();
                var a, b = u.clean(),
                    c = t.buffer(),
                    d = c.length;
                if (p.pop(), o.push(p), p = null, d) {
                    if (1 & b) {
                        a = c[0];
                        var e, d = a.length - 1,
                            g = -1;
                        for (f.lineStart(); ++g < d;) f.point((e = a[g])[0], e[1]);
                        return f.lineEnd(), void 0
                    }
                    d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Yb))
                }
            }
            var n, o, p, q = b(f),
                r = e.invert(d[0], d[1]),
                s = {
                    point: g,
                    lineStart: i,
                    lineEnd: j,
                    polygonStart: function () {
                        s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = [], f.polygonStart()
                    },
                    polygonEnd: function () {
                        s.point = g, s.lineStart = i, s.lineEnd = j, n = Wg.merge(n);
                        var a = _b(r, o);
                        n.length ? Ub(n, $b, a, c, f) : a && (f.lineStart(), c(null, null, 1, f), f.lineEnd()), f.polygonEnd(), n = o = null
                    },
                    sphere: function () {
                        f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                    }
                },
                t = Zb(),
                u = b(t);
            return s
        }
    }
    function Yb(a) {
        return a.length > 1
    }
    function Zb() {
        var a, b = [];
        return {
            lineStart: function () {
                b.push(a = [])
            },
            point: function (b, c) {
                a.push([b, c])
            },
            lineEnd: i,
            buffer: function () {
                var c = b;
                return b = [], a = null, c
            },
            rejoin: function () {
                b.length > 1 && b.push(b.pop().concat(b.shift()))
            }
        }
    }
    function $b(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - Ch - Dh : Ch - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Ch - Dh : Ch - b[1])
    }
    function _b(a, b) {
        var c = a[0],
            d = a[1],
            e = [Math.sin(c), -Math.cos(c), 0],
            f = 0,
            g = 0;
        ni.reset();
        for (var h = 0, i = b.length; i > h; ++h) {
            var j = b[h],
                k = j.length;
            if (k) for (var l = j[0], m = l[0], n = l[1] / 2 + Ah / 4, o = Math.sin(n), p = Math.cos(n), q = 1;;) {
                q === k && (q = 0), a = j[q];
                var r = a[0],
                    s = a[1] / 2 + Ah / 4,
                    t = Math.sin(s),
                    u = Math.cos(s),
                    v = r - m,
                    w = ih(v) > Ah,
                    x = o * t;
                if (ni.add(Math.atan2(x * Math.sin(v), p * u + x * Math.cos(v))), f += w ? v + (v >= 0 ? Bh : -Bh) : v, w ^ m >= c ^ r >= c) {
                    var y = Ib(Gb(l), Gb(a));
                    Lb(y);
                    var z = Ib(e, y);
                    Lb(z);
                    var A = (w ^ v >= 0 ? -1 : 1) * O(z[2]);
                    (d > A || d === A && (y[0] || y[1])) && (g += w ^ v >= 0 ? 1 : -1)
                }
                if (!q++) break;
                m = r, o = t, p = u, l = a
            }
        }
        return (-Dh > f || Dh > f && 0 > ni) ^ 1 & g
    }
    function ac(a) {
        var b, c = 0 / 0,
            d = 0 / 0,
            e = 0 / 0;
        return {
            lineStart: function () {
                a.lineStart(), b = 1
            },
            point: function (f, g) {
                var h = f > 0 ? Ah : -Ah,
                    i = ih(f - c);
                ih(i - Ah) < Dh ? (a.point(c, d = (d + g) / 2 > 0 ? Ch : -Ch), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= Ah && (ih(c - e) < Dh && (c -= e * Dh), ih(f - h) < Dh && (f -= h * Dh), d = bc(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
            },
            lineEnd: function () {
                a.lineEnd(), c = d = 0 / 0
            },
            clean: function () {
                return 2 - b
            }
        }
    }
    function bc(a, b, c, d) {
        var e, f, g = Math.sin(a - c);
        return ih(g) > Dh ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
    }
    function cc(a, b, c, d) {
        var e;
        if (null == a) e = c * Ch, d.point(-Ah, e), d.point(0, e), d.point(Ah, e), d.point(Ah, 0), d.point(Ah, -e), d.point(0, -e), d.point(-Ah, -e), d.point(-Ah, 0), d.point(-Ah, e);
        else if (ih(a[0] - b[0]) > Dh) {
            var f = a[0] < b[0] ? Ah : -Ah;
            e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
        } else d.point(b[0], b[1])
    }
    function dc(a) {
        function b(a, b) {
            return Math.cos(a) * Math.cos(b) > f
        }
        function c(a) {
            var c, f, i, j, k;
            return {
                lineStart: function () {
                    j = i = !1, k = 1
                },
                point: function (l, m) {
                    var n, o = [l, m],
                        p = b(l, m),
                        q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? Ah : -Ah), m) : 0;
                    if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (Nb(c, n) || Nb(o, n)) && (o[0] += Dh, o[1] += Dh, p = b(o[0], o[1]))), p !== i) k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n;
                    else if (h && c && g ^ p) {
                        var r;
                        q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                    }!p || c && Nb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                },
                lineEnd: function () {
                    i && a.lineEnd(), c = null
                },
                clean: function () {
                    return k | (j && i) << 1
                }
            }
        }
        function d(a, b, c) {
            var d = Gb(a),
                e = Gb(b),
                g = [1, 0, 0],
                h = Ib(d, e),
                i = Hb(h, h),
                j = h[0],
                k = i - j * j;
            if (!k) return !c && a;
            var l = f * i / k,
                m = -f * j / k,
                n = Ib(g, h),
                o = Kb(g, l),
                p = Kb(h, m);
            Jb(o, p);
            var q = n,
                r = Hb(o, q),
                s = Hb(q, q),
                t = r * r - s * (Hb(o, o) - 1);
            if (!(0 > t)) {
                var u = Math.sqrt(t),
                    v = Kb(q, (-r - u) / s);
                if (Jb(v, o), v = Mb(v), !c) return v;
                var w, x = a[0],
                    y = b[0],
                    z = a[1],
                    A = b[1];
                x > y && (w = x, x = y, y = w);
                var B = y - x,
                    C = ih(B - Ah) < Dh,
                    D = C || Dh > B;
                if (!C && z > A && (w = z, z = A, A = w), D ? C ? z + A > 0 ^ v[1] < (ih(v[0] - x) < Dh ? z : A) : z <= v[1] && v[1] <= A : B > Ah ^ (x <= v[0] && v[0] <= y)) {
                    var E = Kb(q, (-r + u) / s);
                    return Jb(E, o), [v, Mb(E)]
                }
            }
        }
        function e(b, c) {
            var d = g ? a : Ah - a,
                e = 0;
            return -d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
        }
        var f = Math.cos(a),
            g = f > 0,
            h = ih(f) > Dh,
            i = Fc(a, 6 * Fh);
        return Xb(b, c, i, g ? [0, -a] : [-Ah, a - Ah])
    }
    function ec(a, b, c, d) {
        return function (e) {
            var f, g = e.a,
                h = e.b,
                i = g.x,
                j = g.y,
                k = h.x,
                l = h.y,
                m = 0,
                n = 1,
                o = k - i,
                p = l - j;
            if (f = a - i, o || !(f > 0)) {
                if (f /= o, 0 > o) {
                    if (m > f) return;
                    n > f && (n = f)
                } else if (o > 0) {
                    if (f > n) return;
                    f > m && (m = f)
                }
                if (f = c - i, o || !(0 > f)) {
                    if (f /= o, 0 > o) {
                        if (f > n) return;
                        f > m && (m = f)
                    } else if (o > 0) {
                        if (m > f) return;
                        n > f && (n = f)
                    }
                    if (f = b - j, p || !(f > 0)) {
                        if (f /= p, 0 > p) {
                            if (m > f) return;
                            n > f && (n = f)
                        } else if (p > 0) {
                            if (f > n) return;
                            f > m && (m = f)
                        }
                        if (f = d - j, p || !(0 > f)) {
                            if (f /= p, 0 > p) {
                                if (f > n) return;
                                f > m && (m = f)
                            } else if (p > 0) {
                                if (m > f) return;
                                n > f && (n = f)
                            }
                            return m > 0 && (e.a = {
                                x: i + m * o,
                                y: j + m * p
                            }), 1 > n && (e.b = {
                                x: i + n * o,
                                y: j + n * p
                            }), e
                        }
                    }
                }
            }
        }
    }
    function fc(a, b, c, d) {
        function e(d, e) {
            return ih(d[0] - a) < Dh ? e > 0 ? 0 : 3 : ih(d[0] - c) < Dh ? e > 0 ? 2 : 1 : ih(d[1] - b) < Dh ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }
        function f(a, b) {
            return g(a.x, b.x)
        }
        function g(a, b) {
            var c = e(a, 1),
                d = e(b, 1);
            return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
        }
        return function (h) {
            function i(a) {
                for (var b = 0, c = r.length, d = a[1], e = 0; c > e; ++e) for (var f, g = 1, h = r[e], i = h.length, k = h[0]; i > g; ++g) f = h[g], k[1] <= d ? f[1] > d && j(k, f, a) > 0 && ++b : f[1] <= d && j(k, f, a) < 0 && --b, k = f;
                return 0 !== b
            }
            function j(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
            }
            function k(f, h, i, j) {
                var k = 0,
                    l = 0;
                if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0) {
                    do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b);
                    while ((k = (k + i + 4) % 4) !== l)
                } else j.point(h[0], h[1])
            }
            function l(e, f) {
                return e >= a && c >= e && f >= b && d >= f
            }
            function m(a, b) {
                l(a, b) && h.point(a, b)
            }
            function n() {
                E.point = p, r && r.push(s = []), z = !0, y = !1, w = x = 0 / 0
            }
            function o() {
                q && (p(t, u), v && y && C.rejoin(), q.push(C.buffer())), E.point = m, y && h.lineEnd()
            }
            function p(a, b) {
                a = Math.max(-Ci, Math.min(Ci, a)), b = Math.max(-Ci, Math.min(Ci, b));
                var c = l(a, b);
                if (r && s.push([a, b]), z) t = a, u = b, v = c, z = !1, c && (h.lineStart(), h.point(a, b));
                else if (c && y) h.point(a, b);
                else {
                    var d = {
                        a: {
                            x: w,
                            y: x
                        },
                        b: {
                            x: a,
                            y: b
                        }
                    };
                    D(d) ? (y || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), A = !1) : c && (h.lineStart(), h.point(a, b), A = !1)
                }
                w = a, x = b, y = c
            }
            var q, r, s, t, u, v, w, x, y, z, A, B = h,
                C = Zb(),
                D = ec(a, b, c, d),
                E = {
                    point: m,
                    lineStart: n,
                    lineEnd: o,
                    polygonStart: function () {
                        h = C, q = [], r = [], A = !0
                    },
                    polygonEnd: function () {
                        h = B, q = Wg.merge(q);
                        var b = i([a, d]),
                            c = A && b,
                            e = q.length;
                        (c || e) && (h.polygonStart(), c && (h.lineStart(), k(null, null, 1, h), h.lineEnd()), e && Ub(q, f, b, k, h), h.polygonEnd()), q = r = s = null
                    }
                };
            return E
        }
    }
    function gc(a, b) {
        function c(c, d) {
            return c = a(c, d), b(c[0], c[1])
        }
        return a.invert && b.invert && (c.invert = function (c, d) {
            return c = b.invert(c, d), c && a.invert(c[0], c[1])
        }), c
    }
    function hc(a) {
        var b = 0,
            c = Ah / 3,
            d = xc(a),
            e = d(b, c);
        return e.parallels = function (a) {
            return arguments.length ? d(b = a[0] * Ah / 180, c = a[1] * Ah / 180) : [180 * (b / Ah), 180 * (c / Ah)]
        }, e
    }
    function ic(a, b) {
        function c(a, b) {
            var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
            return [c * Math.sin(a *= e), g - c * Math.cos(a)]
        }
        var d = Math.sin(a),
            e = (d + Math.sin(b)) / 2,
            f = 1 + d * (2 * e - d),
            g = Math.sqrt(f) / e;
        return c.invert = function (a, b) {
            var c = g - b;
            return [Math.atan2(a, c) / e, O((f - (a * a + c * c) * e * e) / (2 * e))]
        }, c
    }
    function jc() {
        function a(a, b) {
            Ei += e * a - d * b, d = a, e = b
        }
        var b, c, d, e;
        Ji.point = function (f, g) {
            Ji.point = a, b = d = f, c = e = g
        }, Ji.lineEnd = function () {
            a(b, c)
        }
    }
    function kc(a, b) {
        Fi > a && (Fi = a), a > Hi && (Hi = a), Gi > b && (Gi = b), b > Ii && (Ii = b)
    }
    function lc() {
        function a(a, b) {
            g.push("M", a, ",", b, f)
        }
        function b(a, b) {
            g.push("M", a, ",", b), h.point = c
        }
        function c(a, b) {
            g.push("L", a, ",", b)
        }
        function d() {
            h.point = a
        }
        function e() {
            g.push("Z")
        }
        var f = mc(4.5),
            g = [],
            h = {
                point: a,
                lineStart: function () {
                    h.point = b
                },
                lineEnd: d,
                polygonStart: function () {
                    h.lineEnd = e
                },
                polygonEnd: function () {
                    h.lineEnd = d, h.point = a
                },
                pointRadius: function (a) {
                    return f = mc(a), h
                },
                result: function () {
                    if (g.length) {
                        var a = g.join("");
                        return g = [], a
                    }
                }
            };
        return h
    }
    function mc(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }
    function nc(a, b) {
        ri += a, si += b, ++ti
    }
    function oc() {
        function a(a, d) {
            var e = a - b,
                f = d - c,
                g = Math.sqrt(e * e + f * f);
            ui += g * (b + a) / 2, vi += g * (c + d) / 2, wi += g, nc(b = a, c = d)
        }
        var b, c;
        Li.point = function (d, e) {
            Li.point = a, nc(b = d, c = e)
        }
    }
    function pc() {
        Li.point = nc
    }
    function qc() {
        function a(a, b) {
            var c = a - d,
                f = b - e,
                g = Math.sqrt(c * c + f * f);
            ui += g * (d + a) / 2, vi += g * (e + b) / 2, wi += g, g = e * a - d * b, xi += g * (d + a), yi += g * (e + b), zi += 3 * g, nc(d = a, e = b)
        }
        var b, c, d, e;
        Li.point = function (f, g) {
            Li.point = a, nc(b = d = f, c = e = g)
        }, Li.lineEnd = function () {
            a(b, c)
        }
    }
    function rc(a) {
        function b(b, c) {
            a.moveTo(b, c), a.arc(b, c, g, 0, Bh)
        }
        function c(b, c) {
            a.moveTo(b, c), h.point = d
        }
        function d(b, c) {
            a.lineTo(b, c)
        }
        function e() {
            h.point = b
        }
        function f() {
            a.closePath()
        }
        var g = 4.5,
            h = {
                point: b,
                lineStart: function () {
                    h.point = c
                },
                lineEnd: e,
                polygonStart: function () {
                    h.lineEnd = f
                },
                polygonEnd: function () {
                    h.lineEnd = e, h.point = b
                },
                pointRadius: function (a) {
                    return g = a, h
                },
                result: i
            };
        return h
    }
    function sc(a) {
        function b(a) {
            return (h ? d : c)(a)
        }
        function c(b) {
            return vc(b, function (c, d) {
                c = a(c, d), b.point(c[0], c[1])
            })
        }
        function d(b) {
            function c(c, d) {
                c = a(c, d), b.point(c[0], c[1])
            }
            function d() {
                t = 0 / 0, y.point = f, b.lineStart()
            }
            function f(c, d) {
                var f = Gb([c, d]),
                    g = a(c, d);
                e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
            }
            function g() {
                y.point = c, b.lineEnd()
            }
            function i() {
                d(), y.point = j, y.lineEnd = k
            }
            function j(a, b) {
                f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
            }
            function k() {
                e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
            }
            var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                point: c,
                lineStart: d,
                lineEnd: g,
                polygonStart: function () {
                    b.polygonStart(), y.lineStart = i
                },
                polygonEnd: function () {
                    b.polygonEnd(), y.lineStart = d
                }
            };
            return y
        }
        function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
            var s = k - b,
                t = l - c,
                u = s * s + t * t;
            if (u > 4 * f && q--) {
                var v = h + n,
                    w = i + o,
                    x = j + p,
                    y = Math.sqrt(v * v + w * w + x * x),
                    z = Math.asin(x /= y),
                    A = ih(ih(x) - 1) < Dh || ih(d - m) < Dh ? (d + m) / 2 : Math.atan2(w, v),
                    B = a(A, z),
                    C = B[0],
                    D = B[1],
                    E = C - b,
                    F = D - c,
                    G = t * E - s * F;
                (G * G / u > f || ih((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
            }
        }
        var f = .5,
            g = Math.cos(30 * Fh),
            h = 16;
        return b.precision = function (a) {
            return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
        }, b
    }
    function tc(a) {
        var b = sc(function (b, c) {
            return a([b * Gh, c * Gh])
        });
        return function (a) {
            return yc(b(a))
        }
    }
    function uc(a) {
        this.stream = a
    }
    function vc(a, b) {
        return {
            point: b,
            sphere: function () {
                a.sphere()
            },
            lineStart: function () {
                a.lineStart()
            },
            lineEnd: function () {
                a.lineEnd()
            },
            polygonStart: function () {
                a.polygonStart()
            },
            polygonEnd: function () {
                a.polygonEnd()
            }
        }
    }
    function wc(a) {
        return xc(function () {
            return a
        })()
    }
    function xc(a) {
        function b(a) {
            return a = h(a[0] * Fh, a[1] * Fh), [a[0] * m + i, j - a[1] * m]
        }
        function c(a) {
            return a = h.invert((a[0] - i) / m, (j - a[1]) / m), a && [a[0] * Gh, a[1] * Gh]
        }
        function d() {
            h = gc(g = Bc(r, s, t), f);
            var a = f(p, q);
            return i = n - a[0] * m, j = o + a[1] * m, e()
        }
        function e() {
            return k && (k.valid = !1, k = null), b
        }
        var f, g, h, i, j, k, l = sc(function (a, b) {
            return a = f(a, b), [a[0] * m + i, j - a[1] * m]
        }),
            m = 150,
            n = 480,
            o = 250,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = Bi,
            v = qb,
            w = null,
            x = null;
        return b.stream = function (a) {
            return k && (k.valid = !1), k = yc(u(g, l(v(a)))), k.valid = !0, k
        }, b.clipAngle = function (a) {
            return arguments.length ? (u = null == a ? (w = a, Bi) : dc((w = +a) * Fh), e()) : w
        }, b.clipExtent = function (a) {
            return arguments.length ? (x = a, v = a ? fc(a[0][0], a[0][1], a[1][0], a[1][1]) : qb, e()) : x
        }, b.scale = function (a) {
            return arguments.length ? (m = +a, d()) : m
        }, b.translate = function (a) {
            return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
        }, b.center = function (a) {
            return arguments.length ? (p = a[0] % 360 * Fh, q = a[1] % 360 * Fh, d()) : [p * Gh, q * Gh]
        }, b.rotate = function (a) {
            return arguments.length ? (r = a[0] % 360 * Fh, s = a[1] % 360 * Fh, t = a.length > 2 ? a[2] % 360 * Fh : 0, d()) : [r * Gh, s * Gh, t * Gh]
        }, Wg.rebind(b, l, "precision"), function () {
            return f = a.apply(this, arguments), b.invert = f.invert && c, d()
        }
    }
    function yc(a) {
        return vc(a, function (b, c) {
            a.point(b * Fh, c * Fh)
        })
    }
    function zc(a, b) {
        return [a, b]
    }
    function Ac(a, b) {
        return [a > Ah ? a - Bh : -Ah > a ? a + Bh : a, b]
    }
    function Bc(a, b, c) {
        return a ? b || c ? gc(Dc(a), Ec(b, c)) : Dc(a) : b || c ? Ec(b, c) : Ac
    }
    function Cc(a) {
        return function (b, c) {
            return b += a, [b > Ah ? b - Bh : -Ah > b ? b + Bh : b, c]
        }
    }
    function Dc(a) {
        var b = Cc(a);
        return b.invert = Cc(-a), b
    }
    function Ec(a, b) {
        function c(a, b) {
            var c = Math.cos(b),
                h = Math.cos(a) * c,
                i = Math.sin(a) * c,
                j = Math.sin(b),
                k = j * d + h * e;
            return [Math.atan2(i * f - k * g, h * d - j * e), O(k * f + i * g)]
        }
        var d = Math.cos(a),
            e = Math.sin(a),
            f = Math.cos(b),
            g = Math.sin(b);
        return c.invert = function (a, b) {
            var c = Math.cos(b),
                h = Math.cos(a) * c,
                i = Math.sin(a) * c,
                j = Math.sin(b),
                k = j * f - i * g;
            return [Math.atan2(i * f + j * g, h * d + k * e), O(k * d - h * e)]
        }, c
    }
    function Fc(a, b) {
        var c = Math.cos(a),
            d = Math.sin(a);
        return function (e, f, g, h) {
            var i = g * b;
            null != e ? (e = Gc(c, e), f = Gc(c, f), (g > 0 ? f > e : e > f) && (e += g * Bh)) : (e = a + g * Bh, f = a - .5 * i);
            for (var j, k = e; g > 0 ? k > f : f > k; k -= i) h.point((j = Mb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
        }
    }
    function Gc(a, b) {
        var c = Gb(b);
        c[0] -= a, Lb(c);
        var d = N(-c[1]);
        return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Dh) % (2 * Math.PI)
    }
    function Hc(a, b, c) {
        var d = Wg.range(a, b - Dh, c).concat(b);
        return function (a) {
            return d.map(function (b) {
                return [a, b]
            })
        }
    }
    function Ic(a, b, c) {
        var d = Wg.range(a, b - Dh, c).concat(b);
        return function (a) {
            return d.map(function (b) {
                return [b, a]
            })
        }
    }
    function Jc(a) {
        return a.source
    }
    function Kc(a) {
        return a.target
    }
    function Lc(a, b, c, d) {
        var e = Math.cos(b),
            f = Math.sin(b),
            g = Math.cos(d),
            h = Math.sin(d),
            i = e * Math.cos(a),
            j = e * Math.sin(a),
            k = g * Math.cos(c),
            l = g * Math.sin(c),
            m = 2 * Math.asin(Math.sqrt(S(d - b) + e * g * S(c - a))),
            n = 1 / Math.sin(m),
            o = m ?
        function (a) {
            var b = Math.sin(a *= m) * n,
                c = Math.sin(m - a) * n,
                d = c * i + b * k,
                e = c * j + b * l,
                g = c * f + b * h;
            return [Math.atan2(e, d) * Gh, Math.atan2(g, Math.sqrt(d * d + e * e)) * Gh]
        } : function () {
            return [a * Gh, b * Gh]
        };
        return o.distance = m, o
    }
    function Mc() {
        function a(a, e) {
            var f = Math.sin(e *= Fh),
                g = Math.cos(e),
                h = ih((a *= Fh) - b),
                i = Math.cos(h);
            Mi += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
        }
        var b, c, d;
        Ni.point = function (e, f) {
            b = e * Fh, c = Math.sin(f *= Fh), d = Math.cos(f), Ni.point = a
        }, Ni.lineEnd = function () {
            Ni.point = Ni.lineEnd = i
        }
    }
    function Nc(a, b) {
        function c(b, c) {
            var d = Math.cos(b),
                e = Math.cos(c),
                f = a(d * e);
            return [f * e * Math.sin(b), f * Math.sin(c)]
        }
        return c.invert = function (a, c) {
            var d = Math.sqrt(a * a + c * c),
                e = b(d),
                f = Math.sin(e),
                g = Math.cos(e);
            return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
        }, c
    }
    function Oc(a, b) {
        function c(a, b) {
            var c = ih(ih(b) - Ch) < Dh ? 0 : g / Math.pow(e(b), f);
            return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
        }
        var d = Math.cos(a),
            e = function (a) {
                return Math.tan(Ah / 4 + a / 2)
            },
            f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)),
            g = d * Math.pow(e(a), f) / f;
        return f ? (c.invert = function (a, b) {
            var c = g - b,
                d = M(f) * Math.sqrt(a * a + c * c);
            return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Ch]
        }, c) : Qc
    }
    function Pc(a, b) {
        function c(a, b) {
            var c = f - b;
            return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
        }
        var d = Math.cos(a),
            e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a),
            f = d / e + a;
        return ih(e) < Dh ? zc : (c.invert = function (a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / e, f - M(e) * Math.sqrt(a * a + c * c)]
        }, c)
    }
    function Qc(a, b) {
        return [a, Math.log(Math.tan(Ah / 4 + b / 2))]
    }
    function Rc(a) {
        var b, c = wc(a),
            d = c.scale,
            e = c.translate,
            f = c.clipExtent;
        return c.scale = function () {
            var a = d.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.translate = function () {
            var a = e.apply(c, arguments);
            return a === c ? b ? c.clipExtent(null) : c : a
        }, c.clipExtent = function (a) {
            var g = f.apply(c, arguments);
            if (g === c) {
                if (b = null == a) {
                    var h = Ah * d(),
                        i = e();
                    f([
                        [i[0] - h, i[1] - h],
                        [i[0] + h, i[1] + h]
                    ])
                }
            } else b && (g = null);
            return g
        }, c.clipExtent(null)
    }
    function Sc(a, b) {
        return [Math.log(Math.tan(Ah / 4 + b / 2)), -a]
    }
    function Tc(a) {
        return a[0]
    }
    function Uc(a) {
        return a[1]
    }
    function Vc(a, b, c, d) {
        var e, f, g, h, i, j, k;
        return e = d[a], f = e[0], g = e[1], e = d[b], h = e[0], i = e[1], e = d[c], j = e[0], k = e[1], (k - g) * (h - f) - (i - g) * (j - f) > 0
    }
    function Wc(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }
    function Xc(a, b, c, d) {
        var e = a[0],
            f = c[0],
            g = b[0] - e,
            h = d[0] - f,
            i = a[1],
            j = c[1],
            k = b[1] - i,
            l = d[1] - j,
            m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
        return [e + m * g, i + m * k]
    }
    function Yc(a) {
        var b = a[0],
            c = a[a.length - 1];
        return !(b[0] - c[0] || b[1] - c[1])
    }
    function Zc() {
        sd(this), this.edge = this.site = this.circle = null
    }
    function $c(a) {
        var b = Zi.pop() || new Zc;
        return b.site = a, b
    }
    function _c(a) {
        jd(a), Wi.remove(a), Zi.push(a), sd(a)
    }
    function ad(a) {
        var b = a.circle,
            c = b.x,
            d = b.cy,
            e = {
                x: c,
                y: d
            },
            f = a.P,
            g = a.N,
            h = [a];
        _c(a);
        for (var i = f; i.circle && ih(c - i.circle.x) < Dh && ih(d - i.circle.cy) < Dh;) f = i.P, h.unshift(i), _c(i), i = f;
        h.unshift(i), jd(i);
        for (var j = g; j.circle && ih(c - j.circle.x) < Dh && ih(d - j.circle.cy) < Dh;) g = j.N, h.push(j), _c(j), j = g;
        h.push(j), jd(j);
        var k, l = h.length;
        for (k = 1; l > k; ++k) j = h[k], i = h[k - 1], pd(j.edge, i.site, j.site, e);
        i = h[0], j = h[l - 1], j.edge = nd(i.site, j.site, null, e), id(i), id(j)
    }
    function bd(a) {
        for (var b, c, d, e, f = a.x, g = a.y, h = Wi._; h;) if (d = cd(h, g) - f, d > Dh) h = h.L;
        else {
            if (e = f - dd(h, g), !(e > Dh)) {
                d > -Dh ? (b = h.P, c = h) : e > -Dh ? (b = h, c = h.N) : b = c = h;
                break
            }
            if (!h.R) {
                b = h;
                break
            }
            h = h.R
        }
        var i = $c(a);
        if (Wi.insert(b, i), b || c) {
            if (b === c) return jd(b), c = $c(b.site), Wi.insert(i, c), i.edge = c.edge = nd(b.site, i.site), id(b), id(c), void 0;
            if (!c) return i.edge = nd(b.site, i.site), void 0;
            jd(b), jd(c);
            var j = b.site,
                k = j.x,
                l = j.y,
                m = a.x - k,
                n = a.y - l,
                o = c.site,
                p = o.x - k,
                q = o.y - l,
                r = 2 * (m * q - n * p),
                s = m * m + n * n,
                t = p * p + q * q,
                u = {
                    x: (q * s - n * t) / r + k,
                    y: (m * t - p * s) / r + l
                };
            pd(c.edge, j, o, u), i.edge = nd(j, a, null, u), c.edge = nd(a, o, null, u), id(b), id(c)
        }
    }
    function cd(a, b) {
        var c = a.site,
            d = c.x,
            e = c.y,
            f = e - b;
        if (!f) return d;
        var g = a.P;
        if (!g) return -1 / 0;
        c = g.site;
        var h = c.x,
            i = c.y,
            j = i - b;
        if (!j) return h;
        var k = h - d,
            l = 1 / f - 1 / j,
            m = k / j;
        return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
    }
    function dd(a, b) {
        var c = a.N;
        if (c) return cd(c, b);
        var d = a.site;
        return d.y === b ? d.x : 1 / 0
    }
    function ed(a) {
        this.site = a, this.edges = []
    }
    function fd(a) {
        for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = Vi, q = p.length; q--;) if (f = p[q], f && f.prepare()) for (h = f.edges, i = h.length, g = 0; i > g;) k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (ih(d - b) > Dh || ih(e - c) > Dh) && (h.splice(g, 0, new qd(od(f.site, k, ih(d - l) < Dh && o - e > Dh ? {
            x: l,
            y: ih(b - l) < Dh ? c : o
        } : ih(e - o) < Dh && m - d > Dh ? {
            x: ih(c - o) < Dh ? b : m,
            y: o
        } : ih(d - m) < Dh && e - n > Dh ? {
            x: m,
            y: ih(b - m) < Dh ? c : n
        } : ih(e - n) < Dh && d - l > Dh ? {
            x: ih(c - n) < Dh ? b : l,
            y: n
        } : null), f.site, null)), ++i)
    }
    function gd(a, b) {
        return b.angle - a.angle
    }
    function hd() {
        sd(this), this.x = this.y = this.arc = this.site = this.cy = null
    }
    function id(a) {
        var b = a.P,
            c = a.N;
        if (b && c) {
            var d = b.site,
                e = a.site,
                f = c.site;
            if (d !== f) {
                var g = e.x,
                    h = e.y,
                    i = d.x - g,
                    j = d.y - h,
                    k = f.x - g,
                    l = f.y - h,
                    m = 2 * (i * l - j * k);
                if (!(m >= -Eh)) {
                    var n = i * i + j * j,
                        o = k * k + l * l,
                        p = (l * n - j * o) / m,
                        q = (i * o - k * n) / m,
                        l = q + h,
                        r = $i.pop() || new hd;
                    r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                    for (var s = null, t = Yi._; t;) if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                        if (!t.L) {
                            s = t.P;
                            break
                        }
                        t = t.L
                    } else {
                        if (!t.R) {
                            s = t;
                            break
                        }
                        t = t.R
                    }
                    Yi.insert(s, r), s || (Xi = r)
                }
            }
        }
    }
    function jd(a) {
        var b = a.circle;
        b && (b.P || (Xi = b.N), Yi.remove(b), $i.push(b), sd(b), a.circle = null)
    }
    function kd(a) {
        for (var b, c = Ui, d = ec(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;) b = c[e], (!ld(b, a) || !d(b) || ih(b.a.x - b.b.x) < Dh && ih(b.a.y - b.b.y) < Dh) && (b.a = b.b = null, c.splice(e, 1))
    }
    function ld(a, b) {
        var c = a.b;
        if (c) return !0;
        var d, e, f = a.a,
            g = b[0][0],
            h = b[1][0],
            i = b[0][1],
            j = b[1][1],
            k = a.l,
            l = a.r,
            m = k.x,
            n = k.y,
            o = l.x,
            p = l.y,
            q = (m + o) / 2,
            r = (n + p) / 2;
        if (p === n) {
            if (g > q || q >= h) return;
            if (m > o) {
                if (f) {
                    if (f.y >= j) return
                } else f = {
                    x: q,
                    y: i
                };
                c = {
                    x: q,
                    y: j
                }
            } else {
                if (f) {
                    if (f.y < i) return
                } else f = {
                    x: q,
                    y: j
                };
                c = {
                    x: q,
                    y: i
                }
            }
        } else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1) if (m > o) {
            if (f) {
                if (f.y >= j) return
            } else f = {
                x: (i - e) / d,
                y: i
            };
            c = {
                x: (j - e) / d,
                y: j
            }
        } else {
            if (f) {
                if (f.y < i) return
            } else f = {
                x: (j - e) / d,
                y: j
            };
            c = {
                x: (i - e) / d,
                y: i
            }
        } else if (p > n) {
            if (f) {
                if (f.x >= h) return
            } else f = {
                x: g,
                y: d * g + e
            };
            c = {
                x: h,
                y: d * h + e
            }
        } else {
            if (f) {
                if (f.x < g) return
            } else f = {
                x: h,
                y: d * h + e
            };
            c = {
                x: g,
                y: d * g + e
            }
        }
        return a.a = f, a.b = c, !0
    }
    function md(a, b) {
        this.l = a, this.r = b, this.a = this.b = null
    }
    function nd(a, b, c, d) {
        var e = new md(a, b);
        return Ui.push(e), c && pd(e, a, b, c), d && pd(e, b, a, d), Vi[a.i].edges.push(new qd(e, a, b)), Vi[b.i].edges.push(new qd(e, b, a)), e
    }
    function od(a, b, c) {
        var d = new md(a, null);
        return d.a = b, d.b = c, Ui.push(d), d
    }
    function pd(a, b, c, d) {
        a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
    }
    function qd(a, b, c) {
        var d = a.a,
            e = a.b;
        this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
    }
    function rd() {
        this._ = null
    }
    function sd(a) {
        a.U = a.C = a.L = a.R = a.P = a.N = null
    }
    function td(a, b) {
        var c = b,
            d = b.R,
            e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
    }
    function ud(a, b) {
        var c = b,
            d = b.L,
            e = c.U;
        e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
    }
    function vd(a) {
        for (; a.L;) a = a.L;
        return a
    }
    function wd(a, b) {
        var c, d, e, f = a.sort(xd).pop();
        for (Ui = [], Vi = new Array(a.length), Wi = new rd, Yi = new rd;;) if (e = Xi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x))(f.x !== c || f.y !== d) && (Vi[f.i] = new ed(f), bd(f), c = f.x, d = f.y), f = a.pop();
        else {
            if (!e) break;
            ad(e.arc)
        }
        b && (kd(b), fd(b));
        var g = {
            cells: Vi,
            edges: Ui
        };
        return Wi = Yi = Ui = Vi = null, g
    }
    function xd(a, b) {
        return b.y - a.y || b.x - a.x
    }
    function yd(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
    }
    function zd(a) {
        return a.x
    }
    function Ad(a) {
        return a.y
    }
    function Bd() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }
    function Cd(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = .5 * (c + e),
                h = .5 * (d + f),
                i = b.nodes;
            i[0] && Cd(a, i[0], c, d, g, h), i[1] && Cd(a, i[1], g, d, e, h), i[2] && Cd(a, i[2], c, h, g, f), i[3] && Cd(a, i[3], g, h, e, f)
        }
    }
    function Dd(a, b) {
        a = Wg.rgb(a), b = Wg.rgb(b);
        var c = a.r,
            d = a.g,
            e = a.b,
            f = b.r - c,
            g = b.g - d,
            h = b.b - e;
        return function (a) {
            return "#" + jb(Math.round(c + f * a)) + jb(Math.round(d + g * a)) + jb(Math.round(e + h * a))
        }
    }
    function Ed(a, b) {
        var c, d = {},
            e = {};
        for (c in a) c in b ? d[c] = Hd(a[c], b[c]) : e[c] = a[c];
        for (c in b) c in a || (e[c] = b[c]);
        return function (a) {
            for (c in d) e[c] = d[c](a);
            return e
        }
    }
    function Fd(a, b) {
        return b -= a = +a, function (c) {
            return a + b * c
        }
    }
    function Gd(a, b) {
        var c, d, e, f, g, h = 0,
            i = 0,
            j = [],
            k = [];
        for (a += "", b += "", aj.lastIndex = 0, d = 0; c = aj.exec(b); ++d) c.index && j.push(b.substring(h, i = c.index)), k.push({
            i: j.length,
            x: c[0]
        }), j.push(null), h = aj.lastIndex;
        for (h < b.length && j.push(b.substring(h)), d = 0, f = k.length;
        (c = aj.exec(a)) && f > d; ++d) if (g = k[d], g.x == c[0]) {
            if (g.i) if (null == j[g.i + 1]) for (j[g.i - 1] += g.x, j.splice(g.i, 1), e = d + 1; f > e; ++e) k[e].i--;
            else for (j[g.i - 1] += g.x + j[g.i + 1], j.splice(g.i, 2), e = d + 1; f > e; ++e) k[e].i -= 2;
            else if (null == j[g.i + 1]) j[g.i] = g.x;
            else for (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1), e = d + 1; f > e; ++e) k[e].i--;
            k.splice(d, 1), f--, d--
        } else g.x = Fd(parseFloat(c[0]), parseFloat(g.x));
        for (; f > d;) g = k.pop(), null == j[g.i + 1] ? j[g.i] = g.x : (j[g.i] = g.x + j[g.i + 1], j.splice(g.i + 1, 1)), f--;
        return 1 === j.length ? null == j[0] ? (g = k[0].x, function (a) {
            return g(a) + ""
        }) : function () {
            return b
        } : function (a) {
            for (d = 0; f > d; ++d) j[(g = k[d]).i] = g.x(a);
            return j.join("")
        }
    }
    function Hd(a, b) {
        for (var c, d = Wg.interpolators.length; --d >= 0 && !(c = Wg.interpolators[d](a, b)););
        return c
    }
    function Id(a, b) {
        var c, d = [],
            e = [],
            f = a.length,
            g = b.length,
            h = Math.min(a.length, b.length);
        for (c = 0; h > c; ++c) d.push(Hd(a[c], b[c]));
        for (; f > c; ++c) e[c] = a[c];
        for (; g > c; ++c) e[c] = b[c];
        return function (a) {
            for (c = 0; h > c; ++c) e[c] = d[c](a);
            return e
        }
    }
    function Jd(a) {
        return function (b) {
            return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
        }
    }
    function Kd(a) {
        return function (b) {
            return 1 - a(1 - b)
        }
    }
    function Ld(a) {
        return function (b) {
            return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }
    function Md(a) {
        return a * a
    }
    function Nd(a) {
        return a * a * a
    }
    function Od(a) {
        if (0 >= a) return 0;
        if (a >= 1) return 1;
        var b = a * a,
            c = b * a;
        return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
    }
    function Pd(a) {
        return function (b) {
            return Math.pow(b, a)
        }
    }
    function Qd(a) {
        return 1 - Math.cos(a * Ch)
    }
    function Rd(a) {
        return Math.pow(2, 10 * (a - 1))
    }
    function Sd(a) {
        return 1 - Math.sqrt(1 - a * a)
    }
    function Td(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length ? c = b / Bh * Math.asin(1 / a) : (a = 1, c = b / 4), function (d) {
            return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Bh / b)
        }
    }
    function Ud(a) {
        return a || (a = 1.70158), function (b) {
            return b * b * ((a + 1) * b - a)
        }
    }
    function Vd(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }
    function Wd(a, b) {
        a = Wg.hcl(a), b = Wg.hcl(b);
        var c = a.h,
            d = a.c,
            e = a.l,
            f = b.h - c,
            g = b.c - d,
            h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
            return Z(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Xd(a, b) {
        a = Wg.hsl(a), b = Wg.hsl(b);
        var c = a.h,
            d = a.s,
            e = a.l,
            f = b.h - c,
            g = b.s - d,
            h = b.l - e;
        return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
            return W(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Yd(a, b) {
        a = Wg.lab(a), b = Wg.lab(b);
        var c = a.l,
            d = a.a,
            e = a.b,
            f = b.l - c,
            g = b.a - d,
            h = b.b - e;
        return function (a) {
            return ab(c + f * a, d + g * a, e + h * a) + ""
        }
    }
    function Zd(a, b) {
        return b -= a, function (c) {
            return Math.round(a + b * c)
        }
    }
    function $d(a) {
        var b = [a.a, a.b],
            c = [a.c, a.d],
            d = ae(b),
            e = _d(b, c),
            f = ae(be(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Gh, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Gh : 0
    }
    function _d(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }
    function ae(a) {
        var b = Math.sqrt(_d(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }
    function be(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }
    function ce(a, b) {
        var c, d = [],
            e = [],
            f = Wg.transform(a),
            g = Wg.transform(b),
            h = f.translate,
            i = g.translate,
            j = f.rotate,
            k = g.rotate,
            l = f.skew,
            m = g.skew,
            n = f.scale,
            o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (d.push("translate(", null, ",", null, ")"), e.push({
            i: 1,
            x: Fd(h[0], i[0])
        }, {
            i: 3,
            x: Fd(h[1], i[1])
        })) : i[0] || i[1] ? d.push("translate(" + i + ")") : d.push(""), j != k ? (j - k > 180 ? k += 360 : k - j > 180 && (j += 360), e.push({
            i: d.push(d.pop() + "rotate(", null, ")") - 2,
            x: Fd(j, k)
        })) : k && d.push(d.pop() + "rotate(" + k + ")"), l != m ? e.push({
            i: d.push(d.pop() + "skewX(", null, ")") - 2,
            x: Fd(l, m)
        }) : m && d.push(d.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (c = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({
            i: c - 4,
            x: Fd(n[0], o[0])
        }, {
            i: c - 2,
            x: Fd(n[1], o[1])
        })) : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"), c = e.length, function (a) {
            for (var b, f = -1; ++f < c;) d[(b = e[f]).i] = b.x(a);
            return d.join("")
        }
    }
    function de(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
            return (c - a) * b
        }
    }
    function ee(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function (c) {
            return Math.max(0, Math.min(1, (c - a) * b))
        }
    }
    function fe(a) {
        for (var b = a.source, c = a.target, d = he(b, c), e = [b]; b !== d;) b = b.parent, e.push(b);
        for (var f = e.length; c !== d;) e.splice(f, 0, c), c = c.parent;
        return e
    }
    function ge(a) {
        for (var b = [], c = a.parent; null != c;) b.push(a), a = c, c = c.parent;
        return b.push(a), b
    }
    function he(a, b) {
        if (a === b) return a;
        for (var c = ge(a), d = ge(b), e = c.pop(), f = d.pop(), g = null; e === f;) g = e, e = c.pop(), f = d.pop();
        return g
    }
    function ie(a) {
        a.fixed |= 2
    }
    function je(a) {
        a.fixed &= -7
    }
    function ke(a) {
        a.fixed |= 4, a.px = a.x, a.py = a.y
    }
    function le(a) {
        a.fixed &= -5
    }
    function me(a, b, c) {
        var d = 0,
            e = 0;
        if (a.charge = 0, !a.leaf) for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;) f = g[i], null != f && (me(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }
    function ne(a, b) {
        return Wg.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = re, a
    }
    function oe(a) {
        return a.children
    }
    function pe(a) {
        return a.value
    }
    function qe(a, b) {
        return b.value - a.value
    }
    function re(a) {
        return Wg.merge(a.map(function (a) {
            return (a.children || []).map(function (b) {
                return {
                    source: a,
                    target: b
                }
            })
        }))
    }
    function se(a) {
        return a.x
    }
    function te(a) {
        return a.y
    }
    function ue(a, b, c) {
        a.y0 = b, a.y = c
    }
    function ve(a) {
        return Wg.range(a.length)
    }
    function we(a) {
        for (var b = -1, c = a[0].length, d = []; ++b < c;) d[b] = 0;
        return d
    }
    function xe(a) {
        for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
        return d
    }
    function ye(a) {
        return a.reduce(ze, 0)
    }
    function ze(a, b) {
        return a + b[1]
    }
    function Ae(a, b) {
        return Be(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }
    function Be(a, b) {
        for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;) f[c] = e * c + d;
        return f
    }
    function Ce(a) {
        return [Wg.min(a), Wg.max(a)]
    }
    function De(a, b) {
        return a.parent == b.parent ? 1 : 2
    }
    function Ee(a) {
        var b = a.children;
        return b && b.length ? b[0] : a._tree.thread
    }
    function Fe(a) {
        var b, c = a.children;
        return c && (b = c.length) ? c[b - 1] : a._tree.thread
    }
    function Ge(a, b) {
        var c = a.children;
        if (c && (e = c.length)) for (var d, e, f = -1; ++f < e;) b(d = Ge(c[f], b), a) > 0 && (a = d);
        return a
    }
    function He(a, b) {
        return a.x - b.x
    }
    function Ie(a, b) {
        return b.x - a.x
    }
    function Je(a, b) {
        return a.depth - b.depth
    }
    function Ke(a, b) {
        function c(a, d) {
            var e = a.children;
            if (e && (g = e.length)) for (var f, g, h = null, i = -1; ++i < g;) f = e[i], c(f, h), h = f;
            b(a, d)
        }
        c(a, null)
    }
    function Le(a) {
        for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;) b = e[f]._tree, b.prelim += c, b.mod += c, c += b.shift + (d += b.change)
    }
    function Me(a, b, c) {
        a = a._tree, b = b._tree;
        var d = c / (b.number - a.number);
        a.change += d, b.change -= d, b.shift += c, b.prelim += c, b.mod += c
    }
    function Ne(a, b, c) {
        return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
    }
    function Oe(a, b) {
        return a.value - b.value
    }
    function Pe(a, b) {
        var c = a._pack_next;
        a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
    }
    function Qe(a, b) {
        a._pack_next = b, b._pack_prev = a
    }
    function Re(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y,
            e = a.r + b.r;
        return .999 * e * e > c * c + d * d
    }
    function Se(a) {
        function b(a) {
            k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
        }
        if ((c = a.children) && (j = c.length)) {
            var c, d, e, f, g, h, i, j, k = 1 / 0,
                l = -1 / 0,
                m = 1 / 0,
                n = -1 / 0;
            if (c.forEach(Te), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2)) for (f = c[2], We(d, e, f), b(f), Pe(d, f), d._pack_prev = f, Pe(f, e), e = d._pack_next, g = 3; j > g; g++) {
                We(d, e, f = c[g]);
                var o = 0,
                    p = 1,
                    q = 1;
                for (h = e._pack_next; h !== e; h = h._pack_next, p++) if (Re(h, f)) {
                    o = 1;
                    break
                }
                if (1 == o) for (i = d._pack_prev; i !== h._pack_prev && !Re(i, f); i = i._pack_prev, q++);
                o ? (q > p || p == q && e.r < d.r ? Qe(d, e = h) : Qe(d = i, e), g--) : (Pe(d, f), e = f, b(f))
            }
            var r = (k + l) / 2,
                s = (m + n) / 2,
                t = 0;
            for (g = 0; j > g; g++) f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
            a.r = t, c.forEach(Ue)
        }
    }
    function Te(a) {
        a._pack_next = a._pack_prev = a
    }
    function Ue(a) {
        delete a._pack_next, delete a._pack_prev
    }
    function Ve(a, b, c, d) {
        var e = a.children;
        if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e) for (var f = -1, g = e.length; ++f < g;) Ve(e[f], b, c, d)
    }
    function We(a, b, c) {
        var d = a.r + c.r,
            e = b.x - a.x,
            f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r,
                h = e * e + f * f;
            g *= g, d *= d;
            var i = .5 + (d - g) / (2 * h),
                j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
            c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
        } else c.x = a.x + d, c.y = a.y
    }
    function Xe(a) {
        return 1 + Wg.max(a, function (a) {
            return a.y
        })
    }
    function Ye(a) {
        return a.reduce(function (a, b) {
            return a + b.x
        }, 0) / a.length
    }
    function Ze(a) {
        var b = a.children;
        return b && b.length ? Ze(b[0]) : a
    }
    function $e(a) {
        var b, c = a.children;
        return c && (b = c.length) ? $e(c[b - 1]) : a
    }
    function _e(a) {
        return {
            x: a.x,
            y: a.y,
            dx: a.dx,
            dy: a.dy
        }
    }
    function af(a, b) {
        var c = a.x + b[3],
            d = a.y + b[0],
            e = a.dx - b[1] - b[3],
            f = a.dy - b[0] - b[2];
        return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {
            x: c,
            y: d,
            dx: e,
            dy: f
        }
    }
    function bf(a) {
        var b = a[0],
            c = a[a.length - 1];
        return c > b ? [b, c] : [c, b]
    }
    function cf(a) {
        return a.rangeExtent ? a.rangeExtent() : bf(a.range())
    }
    function df(a, b, c, d) {
        var e = c(a[0], a[1]),
            f = d(b[0], b[1]);
        return function (a) {
            return f(e(a))
        }
    }
    function ef(a, b) {
        var c, d = 0,
            e = a.length - 1,
            f = a[d],
            g = a[e];
        return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
    }
    function ff(a) {
        return a ? {
            floor: function (b) {
                return Math.floor(b / a) * a
            },
            ceil: function (b) {
                return Math.ceil(b / a) * a
            }
        } : kj
    }
    function gf(a, b, c, d) {
        var e = [],
            f = [],
            g = 0,
            h = Math.min(a.length, b.length) - 1;
        for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function (b) {
            var c = Wg.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }
    function hf(a, b, c, d) {
        function e() {
            var e = Math.min(a.length, b.length) > 2 ? gf : df,
                i = d ? ee : de;
            return g = e(a, b, i, c), h = e(b, a, i, Hd), f
        }
        function f(a) {
            return g(a)
        }
        var g, h;
        return f.invert = function (a) {
            return h(a)
        }, f.domain = function (b) {
            return arguments.length ? (a = b.map(Number), e()) : a
        }, f.range = function (a) {
            return arguments.length ? (b = a, e()) : b
        }, f.rangeRound = function (a) {
            return f.range(a).interpolate(Zd)
        }, f.clamp = function (a) {
            return arguments.length ? (d = a, e()) : d
        }, f.interpolate = function (a) {
            return arguments.length ? (c = a, e()) : c
        }, f.ticks = function (b) {
            return mf(a, b)
        }, f.tickFormat = function (b, c) {
            return nf(a, b, c)
        }, f.nice = function (b) {
            return kf(a, b), e()
        }, f.copy = function () {
            return hf(a, b, c, d)
        }, e()
    }
    function jf(a, b) {
        return Wg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }
    function kf(a, b) {
        return ef(a, ff(lf(a, b)[2]))
    }
    function lf(a, b) {
        null == b && (b = 10);
        var c = bf(a),
            d = c[1] - c[0],
            e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
            f = b / d * e;
        return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
    }
    function mf(a, b) {
        return Wg.range.apply(Wg, lf(a, b))
    }
    function nf(a, b, c) {
        var d = lf(a, b);
        return Wg.format(c ? c.replace(fi, function (a, b, c, e, f, g, h, i, j, k) {
            return [b, c, e, f, g, h, i, j || "." + pf(k, d), k].join("")
        }) : ",." + of(d[2]) + "f")
    }
    function of(a) {
        return -Math.floor(Math.log(a) / Math.LN10 + .01)
    }
    function pf(a, b) {
        var c = of(b[2]);
        return a in lj ? Math.abs(c - of(Math.max(Math.abs(b[0]), Math.abs(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
    }
    function qf(a, b, c, d) {
        function e(a) {
            return (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
        }
        function f(a) {
            return c ? Math.pow(b, a) : -Math.pow(b, -a)
        }
        function g(b) {
            return a(e(b))
        }
        return g.invert = function (b) {
            return f(a.invert(b))
        }, g.domain = function (b) {
            return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
        }, g.base = function (c) {
            return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
        }, g.nice = function () {
            var b = ef(d.map(e), c ? Math : nj);
            return a.domain(b), d = b.map(f), g
        }, g.ticks = function () {
            var a = bf(d),
                g = [],
                h = a[0],
                i = a[1],
                j = Math.floor(e(h)),
                k = Math.ceil(e(i)),
                l = b % 1 ? 2 : b;
            if (isFinite(k - j)) {
                if (c) {
                    for (; k > j; j++) for (var m = 1; l > m; m++) g.push(f(j) * m);
                    g.push(f(j))
                } else for (g.push(f(j)); j++ < k;) for (var m = l - 1; m > 0; m--) g.push(f(j) * m);
                for (j = 0; g[j] < h; j++);
                for (k = g.length; g[k - 1] > i; k--);
                g = g.slice(j, k)
            }
            return g
        }, g.tickFormat = function (a, b) {
            if (!arguments.length) return mj;
            arguments.length < 2 ? b = mj : "function" != typeof b && (b = Wg.format(b));
            var d, h = Math.max(.1, a / g.ticks().length),
                i = c ? (d = 1e-12, Math.ceil) : (d = -1e-12, Math.floor);
            return function (a) {
                return a / f(i(e(a) + d)) <= h ? b(a) : ""
            }
        }, g.copy = function () {
            return qf(a.copy(), b, c, d)
        }, jf(g, a)
    }
    function rf(a, b, c) {
        function d(b) {
            return a(e(b))
        }
        var e = sf(b),
            f = sf(1 / b);
        return d.invert = function (b) {
            return f(a.invert(b))
        }, d.domain = function (b) {
            return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
        }, d.ticks = function (a) {
            return mf(c, a)
        }, d.tickFormat = function (a, b) {
            return nf(c, a, b)
        }, d.nice = function (a) {
            return d.domain(kf(c, a))
        }, d.exponent = function (g) {
            return arguments.length ? (e = sf(b = g), f = sf(1 / b), a.domain(c.map(e)), d) : b
        }, d.copy = function () {
            return rf(a.copy(), b, c)
        }, jf(d, a)
    }
    function sf(a) {
        return function (b) {
            return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }
    function tf(a, b) {
        function c(c) {
            return g[((f.get(c) || "range" === b.t && f.set(c, a.push(c))) - 1) % g.length]
        }
        function d(b, c) {
            return Wg.range(a.length).map(function (a) {
                return b + c * a
            })
        }
        var f, g, h;
        return c.domain = function (d) {
            if (!arguments.length) return a;
            a = [], f = new e;
            for (var g, h = -1, i = d.length; ++h < i;) f.has(g = d[h]) || f.set(g, a.push(g));
            return c[b.t].apply(c, b.a)
        }, c.range = function (a) {
            return arguments.length ? (g = a, h = 0, b = {
                t: "range",
                a: arguments
            }, c) : g
        }, c.rangePoints = function (e, f) {
            arguments.length < 2 && (f = 0);
            var i = e[0],
                j = e[1],
                k = (j - i) / (Math.max(1, a.length - 1) + f);
            return g = d(a.length < 2 ? (i + j) / 2 : i + k * f / 2, k), h = 0, b = {
                t: "rangePoints",
                a: arguments
            }, c
        }, c.rangeBands = function (e, f, i) {
            arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
            var j = e[1] < e[0],
                k = e[j - 0],
                l = e[1 - j],
                m = (l - k) / (a.length - f + 2 * i);
            return g = d(k + m * i, m), j && g.reverse(), h = m * (1 - f), b = {
                t: "rangeBands",
                a: arguments
            }, c
        }, c.rangeRoundBands = function (e, f, i) {
            arguments.length < 2 && (f = 0), arguments.length < 3 && (i = f);
            var j = e[1] < e[0],
                k = e[j - 0],
                l = e[1 - j],
                m = Math.floor((l - k) / (a.length - f + 2 * i)),
                n = l - k - (a.length - f) * m;
            return g = d(k + Math.round(n / 2), m), j && g.reverse(), h = Math.round(m * (1 - f)), b = {
                t: "rangeRoundBands",
                a: arguments
            }, c
        }, c.rangeBand = function () {
            return h
        }, c.rangeExtent = function () {
            return bf(b.a[0])
        }, c.copy = function () {
            return tf(a, b)
        }, c.domain(a)
    }
    function uf(a, b) {
        function c() {
            var c = 0,
                f = b.length;
            for (e = []; ++c < f;) e[c - 1] = Wg.quantile(a, c / f);
            return d
        }
        function d(a) {
            return isNaN(a = +a) ? void 0 : b[Wg.bisect(e, a)]
        }
        var e;
        return d.domain = function (b) {
            return arguments.length ? (a = b.filter(function (a) {
                return !isNaN(a)
            }).sort(Wg.ascending), c()) : a
        }, d.range = function (a) {
            return arguments.length ? (b = a, c()) : b
        }, d.quantiles = function () {
            return e
        }, d.invertExtent = function (c) {
            return c = b.indexOf(c), 0 > c ? [0 / 0, 0 / 0] : [c > 0 ? e[c - 1] : a[0], c < e.length ? e[c] : a[a.length - 1]]
        }, d.copy = function () {
            return uf(a, b)
        }, c()
    }
    function vf(a, b, c) {
        function d(b) {
            return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
        }
        function e() {
            return f = c.length / (b - a), g = c.length - 1, d
        }
        var f, g;
        return d.domain = function (c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
        }, d.range = function (a) {
            return arguments.length ? (c = a, e()) : c
        }, d.invertExtent = function (b) {
            return b = c.indexOf(b), b = 0 > b ? 0 / 0 : b / f + a, [b, b + 1 / f]
        }, d.copy = function () {
            return vf(a, b, c)
        }, e()
    }
    function wf(a, b) {
        function c(c) {
            return c >= c ? b[Wg.bisect(a, c)] : void 0
        }
        return c.domain = function (b) {
            return arguments.length ? (a = b, c) : a
        }, c.range = function (a) {
            return arguments.length ? (b = a, c) : b
        }, c.invertExtent = function (c) {
            return c = b.indexOf(c), [a[c - 1], a[c]]
        }, c.copy = function () {
            return wf(a, b)
        }, c
    }
    function xf(a) {
        function b(a) {
            return +a
        }
        return b.invert = b, b.domain = b.range = function (c) {
            return arguments.length ? (a = c.map(b), b) : a
        }, b.ticks = function (b) {
            return mf(a, b)
        }, b.tickFormat = function (b, c) {
            return nf(a, b, c)
        }, b.copy = function () {
            return xf(a)
        }, b
    }
    function yf(a) {
        return a.innerRadius
    }
    function zf(a) {
        return a.outerRadius
    }
    function Af(a) {
        return a.startAngle
    }
    function Bf(a) {
        return a.endAngle
    }
    function Cf(a) {
        function b(b) {
            function g() {
                j.push("M", f(a(k), h))
            }
            for (var i, j = [], k = [], l = -1, m = b.length, n = pb(c), o = pb(d); ++l < m;) e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
            return k.length && g(), j.length ? j.join("") : null
        }
        var c = Tc,
            d = Uc,
            e = Tb,
            f = Df,
            g = f.key,
            h = .7;
        return b.x = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b.defined = function (a) {
            return arguments.length ? (e = a, b) : e
        }, b.interpolate = function (a) {
            return arguments.length ? (g = "function" == typeof a ? f = a : (f = uj.get(a) || Df).key, b) : g
        }, b.tension = function (a) {
            return arguments.length ? (h = a, b) : h
        }, b
    }
    function Df(a) {
        return a.join("L")
    }
    function Ef(a) {
        return Df(a) + "Z"
    }
    function Ff(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
        return c > 1 && e.push("H", d[0]), e.join("")
    }
    function Gf(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }
    function Hf(a) {
        for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }
    function If(a, b) {
        return a.length < 4 ? Df(a) : a[1] + Lf(a.slice(1, a.length - 1), Mf(a, b))
    }
    function Jf(a, b) {
        return a.length < 3 ? Df(a) : a[0] + Lf((a.push(a[0]), a), Mf([a[a.length - 2]].concat(a, [a[1]]), b))
    }
    function Kf(a, b) {
        return a.length < 3 ? Df(a) : a[0] + Lf(a, Mf(a, b))
    }
    function Lf(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return Df(a);
        var c = a.length != b.length,
            d = "",
            e = a[0],
            f = a[1],
            g = b[0],
            h = g,
            i = 1;
        if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }
    function Mf(a, b) {
        for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;) c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
        return d
    }
    function Nf(a) {
        if (a.length < 3) return Df(a);
        var b = 1,
            c = a.length,
            d = a[0],
            e = d[0],
            f = d[1],
            g = [e, e, e, (d = a[1])[0]],
            h = [f, f, f, d[1]],
            i = [e, ",", f, "L", Rf(xj, g), ",", Rf(xj, h)];
        for (a.push(a[c - 1]); ++b <= c;) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Sf(i, g, h);
        return a.pop(), i.push("L", d), i.join("")
    }
    function Of(a) {
        if (a.length < 4) return Df(a);
        for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;) b = a[d], f.push(b[0]), g.push(b[1]);
        for (c.push(Rf(xj, f) + "," + Rf(xj, g)), --d; ++d < e;) b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Sf(c, f, g);
        return c.join("")
    }
    function Pf(a) {
        for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;) c = a[d % e], g.push(c[0]), h.push(c[1]);
        for (b = [Rf(xj, g), ",", Rf(xj, h)], --d; ++d < f;) c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Sf(b, g, h);
        return b.join("")
    }
    function Qf(a, b) {
        var c = a.length - 1;
        if (c) for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;) d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
        return Nf(a)
    }
    function Rf(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }
    function Sf(a, b, c) {
        a.push("C", Rf(vj, b), ",", Rf(vj, c), ",", Rf(wj, b), ",", Rf(wj, c), ",", Rf(xj, b), ",", Rf(xj, c))
    }
    function Tf(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }
    function Uf(a) {
        for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Tf(e, f); ++b < c;) d[b] = (g + (g = Tf(e = f, f = a[b + 1]))) / 2;
        return d[b] = g, d
    }
    function Vf(a) {
        for (var b, c, d, e, f = [], g = Uf(a), h = -1, i = a.length - 1; ++h < i;) b = Tf(a[h], a[h + 1]), ih(b) < Dh ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, e = c * c + d * d, e > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
        for (h = -1; ++h <= i;) e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
        return f
    }
    function Wf(a) {
        return a.length < 3 ? Df(a) : a[0] + Lf(a, Vf(a))
    }
    function Xf(a) {
        for (var b, c, d, e = -1, f = a.length; ++e < f;) b = a[e], c = b[0], d = b[1] + sj, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
        return a
    }
    function Yf(a) {
        function b(b) {
            function i() {
                p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
            }
            for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = pb(c), v = pb(e), w = c === d ?
            function () {
                return n
            } : pb(d), x = e === f ?
            function () {
                return o
            } : pb(f); ++s < t;) g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
            return q.length && i(), p.length ? p.join("") : null
        }
        var c = Tc,
            d = Tc,
            e = 0,
            f = Uc,
            g = Tb,
            h = Df,
            i = h.key,
            j = h,
            k = "L",
            l = .7;
        return b.x = function (a) {
            return arguments.length ? (c = d = a, b) : d
        }, b.x0 = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.x1 = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b.y = function (a) {
            return arguments.length ? (e = f = a, b) : f
        }, b.y0 = function (a) {
            return arguments.length ? (e = a, b) : e
        }, b.y1 = function (a) {
            return arguments.length ? (f = a, b) : f
        }, b.defined = function (a) {
            return arguments.length ? (g = a, b) : g
        }, b.interpolate = function (a) {
            return arguments.length ? (i = "function" == typeof a ? h = a : (h = uj.get(a) || Df).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
        }, b.tension = function (a) {
            return arguments.length ? (l = a, b) : l
        }, b
    }
    function Zf(a) {
        return a.radius
    }
    function $f(a) {
        return [a.x, a.y]
    }
    function _f(a) {
        return function () {
            var b = a.apply(this, arguments),
                c = b[0],
                d = b[1] + sj;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }
    function ag() {
        return 64
    }
    function bg() {
        return "circle"
    }
    function cg(a) {
        var b = Math.sqrt(a / Ah);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }
    function dg(a, b) {
        return nh(a, Dj), a.id = b, a
    }
    function eg(a, b, c, d) {
        var e = a.id;
        return D(a, "function" == typeof c ?
        function (a, f, g) {
            a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
        } : (c = d(c), function (a) {
            a.__transition__[e].tween.set(b, c)
        }))
    }
    function fg(a) {
        return null == a && (a = ""), function () {
            this.textContent = a
        }
    }
    function gg(a, b, c, d) {
        var f = a.__transition__ || (a.__transition__ = {
            active: 0,
            count: 0
        }),
            g = f[c];
        if (!g) {
            var h = d.time;
            g = f[c] = {
                tween: new e,
                time: h,
                ease: d.ease,
                delay: d.delay,
                duration: d.duration
            }, ++f.count, Wg.timer(function (d) {
                function e(d) {
                    return f.active > c ? j() : (f.active = c, g.event && g.event.start.call(a, k, b), g.tween.forEach(function (c, d) {
                        (d = d.call(a, k, b)) && p.push(d)
                    }), Wg.timer(function () {
                        return o.c = i(d || 1) ? Tb : i, 1
                    }, 0, h), void 0)
                }
                function i(d) {
                    if (f.active !== c) return j();
                    for (var e = d / n, h = l(e), i = p.length; i > 0;) p[--i].call(a, h);
                    return e >= 1 ? (g.event && g.event.end.call(a, k, b), j()) : void 0
                }
                function j() {
                    return --f.count ? delete f[c] : delete a.__transition__, 1
                }
                var k = a.__data__,
                    l = g.ease,
                    m = g.delay,
                    n = g.duration,
                    o = $h,
                    p = [];
                return o.t = m + h, d >= m ? e(d - m) : (o.c = e, void 0)
            }, 0, h)
        }
    }
    function hg(a, b) {
        a.attr("transform", function (a) {
            return "translate(" + b(a) + ",0)"
        })
    }
    function ig(a, b) {
        a.attr("transform", function (a) {
            return "translate(0," + b(a) + ")"
        })
    }
    function jg() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function kg(a, b, c) {
        function d(b) {
            var c = a(b),
                d = f(c, 1);
            return d - b > b - c ? c : d
        }
        function e(c) {
            return b(c = a(new Kj(c - 1)), 1), c
        }
        function f(a, c) {
            return b(a = new Kj(+a), c), a
        }
        function g(a, d, f) {
            var g = e(a),
                h = [];
            if (f > 1) for (; d > g;) c(g) % f || h.push(new Date(+g)), b(g, 1);
            else for (; d > g;) h.push(new Date(+g)), b(g, 1);
            return h
        }
        function h(a, b, c) {
            try {
                Kj = jg;
                var d = new jg;
                return d._ = a, g(d, b, c)
            } finally {
                Kj = Date
            }
        }
        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = lg(a);
        return i.floor = i, i.round = lg(d), i.ceil = lg(e), i.offset = lg(f), i.range = h, a
    }
    function lg(a) {
        return function (b, c) {
            try {
                Kj = jg;
                var d = new jg;
                return d._ = b, a(d, c)._
            } finally {
                Kj = Date
            }
        }
    }
    function mg(a) {
        function b(b) {
            for (var d, e, f, g = [], h = -1, i = 0; ++h < c;) 37 === a.charCodeAt(h) && (g.push(a.substring(i, h)), null != (e = bk[d = a.charAt(++h)]) && (d = a.charAt(++h)), (f = ck[d]) && (d = f(b, null == e ? "e" === d ? " " : "0" : e)), g.push(d), i = h + 1);
            return g.push(a.substring(i, h)), g.join("")
        }
        var c = a.length;
        return b.parse = function (b) {
            var c = {
                y: 1900,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0,
                Z: null
            },
                d = ng(c, a, b, 0);
            if (d != b.length) return null;
            "p" in c && (c.H = c.H % 12 + 12 * c.p);
            var e = null != c.Z && Kj !== jg,
                f = new(e ? jg : Kj);
            return "j" in c ? f.setFullYear(c.y, 0, c.j) : "w" in c && ("W" in c || "U" in c) ? (f.setFullYear(c.y, 0, 1), f.setFullYear(c.y, 0, "W" in c ? (c.w + 6) % 7 + 7 * c.W - (f.getDay() + 5) % 7 : c.w + 7 * c.U - (f.getDay() + 6) % 7)) : f.setFullYear(c.y, c.m, c.d), f.setHours(c.H + Math.floor(c.Z / 100), c.M + c.Z % 100, c.S, c.L), e ? f._ : f
        }, b.toString = function () {
            return a
        }, b
    }
    function ng(a, b, c, d) {
        for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
            if (d >= j) return -1;
            if (e = b.charCodeAt(h++), 37 === e) {
                if (g = b.charAt(h++), f = dk[g in bk ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0) return -1
            } else if (e != c.charCodeAt(d++)) return -1
        }
        return d
    }
    function og(a) {
        return new RegExp("^(?:" + a.map(Wg.requote).join("|") + ")", "i")
    }
    function pg(a) {
        for (var b = new e, c = -1, d = a.length; ++c < d;) b.set(a[c].toLowerCase(), c);
        return b
    }
    function qg(a, b, c) {
        var d = 0 > a ? "-" : "",
            e = (d ? -a : a) + "",
            f = e.length;
        return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
    }
    function rg(a, b, c) {
        Wj.lastIndex = 0;
        var d = Wj.exec(b.substring(c));
        return d ? (a.w = Xj.get(d[0].toLowerCase()), c + d[0].length) : -1
    }
    function sg(a, b, c) {
        Uj.lastIndex = 0;
        var d = Uj.exec(b.substring(c));
        return d ? (a.w = Vj.get(d[0].toLowerCase()), c + d[0].length) : -1
    }
    function tg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 1));
        return d ? (a.w = +d[0], c + d[0].length) : -1
    }
    function ug(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c));
        return d ? (a.U = +d[0], c + d[0].length) : -1
    }
    function vg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c));
        return d ? (a.W = +d[0], c + d[0].length) : -1
    }
    function wg(a, b, c) {
        $j.lastIndex = 0;
        var d = $j.exec(b.substring(c));
        return d ? (a.m = _j.get(d[0].toLowerCase()), c + d[0].length) : -1
    }
    function xg(a, b, c) {
        Yj.lastIndex = 0;
        var d = Yj.exec(b.substring(c));
        return d ? (a.m = Zj.get(d[0].toLowerCase()), c + d[0].length) : -1
    }
    function yg(a, b, c) {
        return ng(a, ck.c.toString(), b, c)
    }
    function zg(a, b, c) {
        return ng(a, ck.x.toString(), b, c)
    }
    function Ag(a, b, c) {
        return ng(a, ck.X.toString(), b, c)
    }
    function Bg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 4));
        return d ? (a.y = +d[0], c + d[0].length) : -1
    }
    function Cg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.y = Eg(+d[0]), c + d[0].length) : -1
    }
    function Dg(a, b, c) {
        return /^[+-]\d{4}$/.test(b = b.substring(c, c + 5)) ? (a.Z = +b, c + 5) : -1
    }
    function Eg(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }
    function Fg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.m = d[0] - 1, c + d[0].length) : -1
    }
    function Gg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.d = +d[0], c + d[0].length) : -1
    }
    function Hg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 3));
        return d ? (a.j = +d[0], c + d[0].length) : -1
    }
    function Ig(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.H = +d[0], c + d[0].length) : -1
    }
    function Jg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.M = +d[0], c + d[0].length) : -1
    }
    function Kg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 2));
        return d ? (a.S = +d[0], c + d[0].length) : -1
    }
    function Lg(a, b, c) {
        ek.lastIndex = 0;
        var d = ek.exec(b.substring(c, c + 3));
        return d ? (a.L = +d[0], c + d[0].length) : -1
    }
    function Mg(a, b, c) {
        var d = fk.get(b.substring(c, c += 2).toLowerCase());
        return null == d ? -1 : (a.p = d, c)
    }
    function Ng(a) {
        var b = a.getTimezoneOffset(),
            c = b > 0 ? "-" : "+",
            d = ~~ (ih(b) / 60),
            e = ih(b) % 60;
        return c + qg(d, "0", 2) + qg(e, "0", 2)
    }
    function Og(a, b, c) {
        ak.lastIndex = 0;
        var d = ak.exec(b.substring(c, c + 1));
        return d ? c + d[0].length : -1
    }
    function Pg(a) {
        function b(a) {
            try {
                Kj = jg;
                var b = new Kj;
                return b._ = a, c(b)
            } finally {
                Kj = Date
            }
        }
        var c = mg(a);
        return b.parse = function (a) {
            try {
                Kj = jg;
                var b = c.parse(a);
                return b && b._
            } finally {
                Kj = Date
            }
        }, b.toString = c.toString, b
    }
    function Qg(a) {
        return a.toISOString()
    }
    function Rg(a, b, c) {
        function d(b) {
            return a(b)
        }
        function e(a, c) {
            var d = a[1] - a[0],
                e = d / c,
                f = Wg.bisect(hk, e);
            return f == hk.length ? [b.year, lf(a.map(function (a) {
                return a / 31536e6
            }), c)[2]] : f ? b[e / hk[f - 1] < hk[f] / e ? f - 1 : f] : [lk, lf(a, c)[2]]
        }
        return d.invert = function (b) {
            return Sg(a.invert(b))
        }, d.domain = function (b) {
            return arguments.length ? (a.domain(b), d) : a.domain().map(Sg)
        }, d.nice = function (a, b) {
            function c(c) {
                return !isNaN(c) && !a.range(c, Sg(+c + 1), b).length
            }
            var f = d.domain(),
                g = bf(f),
                h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
            return h && (a = h[0], b = h[1]), d.domain(ef(f, b > 1 ? {
                floor: function (b) {
                    for (; c(b = a.floor(b));) b = Sg(b - 1);
                    return b
                },
                ceil: function (b) {
                    for (; c(b = a.ceil(b));) b = Sg(+b + 1);
                    return b
                }
            } : a))
        }, d.ticks = function (a, b) {
            var c = bf(d.domain()),
                f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{
                    range: a
                },
                b];
            return f && (a = f[0], b = f[1]), a.range(c[0], Sg(+c[1] + 1), 1 > b ? 1 : b)
        }, d.tickFormat = function () {
            return c
        }, d.copy = function () {
            return Rg(a.copy(), b, c)
        }, jf(d, a)
    }
    function Sg(a) {
        return new Date(a)
    }
    function Tg(a) {
        return function (b) {
            for (var c = a.length - 1, d = a[c]; !d[1](b);) d = a[--c];
            return d[0](b)
        }
    }
    function Ug(a) {
        return JSON.parse(a.responseText)
    }
    function Vg(a) {
        var b = Zg.createRange();
        return b.selectNode(Zg.body), b.createContextualFragment(a.responseText)
    }
    var Wg = {
        version: "3.3.13"
    };
    Date.now || (Date.now = function () {
        return +new Date
    });
    var Xg = [].slice,
        Yg = function (a) {
            return Xg.call(a)
        },
        Zg = document,
        $g = Zg.documentElement,
        _g = window;
    try {
        Yg($g.childNodes)[0].nodeType
    } catch (ah) {
        Yg = function (a) {
            for (var b = a.length, c = new Array(b); b--;) c[b] = a[b];
            return c
        }
    }
    try {
        Zg.createElement("div").style.setProperty("opacity", 0, "")
    } catch (bh) {
        var ch = _g.Element.prototype,
            dh = ch.setAttribute,
            eh = ch.setAttributeNS,
            fh = _g.CSSStyleDeclaration.prototype,
            gh = fh.setProperty;
        ch.setAttribute = function (a, b) {
            dh.call(this, a, b + "")
        }, ch.setAttributeNS = function (a, b, c) {
            eh.call(this, a, b, c + "")
        }, fh.setProperty = function (a, b, c) {
            gh.call(this, a, b + "", c)
        }
    }
    Wg.ascending = function (a, b) {
        return b > a ? -1 : a > b ? 1 : a >= b ? 0 : 0 / 0
    }, Wg.descending = function (a, b) {
        return a > b ? -1 : b > a ? 1 : b >= a ? 0 : 0 / 0
    }, Wg.min = function (a, b) {
        var c, d, e = -1,
            f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && !(null != (c = a[e]) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = a[e]) && c > d && (c = d)
        } else {
            for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = b.call(a, a[e], e)) && c > d && (c = d)
        }
        return c
    }, Wg.max = function (a, b) {
        var c, d, e = -1,
            f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && !(null != (c = a[e]) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = a[e]) && d > c && (c = d)
        } else {
            for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = b.call(a, a[e], e)) && d > c && (c = d)
        }
        return c
    }, Wg.extent = function (a, b) {
        var c, d, e, f = -1,
            g = a.length;
        if (1 === arguments.length) {
            for (; ++f < g && !(null != (c = e = a[f]) && c >= c);) c = e = void 0;
            for (; ++f < g;) null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
        } else {
            for (; ++f < g && !(null != (c = e = b.call(a, a[f], f)) && c >= c);) c = void 0;
            for (; ++f < g;) null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
        }
        return [c, e]
    }, Wg.sum = function (a, b) {
        var c, d = 0,
            e = a.length,
            f = -1;
        if (1 === arguments.length) for (; ++f < e;) isNaN(c = +a[f]) || (d += c);
        else for (; ++f < e;) isNaN(c = +b.call(a, a[f], f)) || (d += c);
        return d
    }, Wg.mean = function (b, c) {
        var d, e = b.length,
            f = 0,
            g = -1,
            h = 0;
        if (1 === arguments.length) for (; ++g < e;) a(d = b[g]) && (f += (d - f) / ++h);
        else for (; ++g < e;) a(d = c.call(b, b[g], g)) && (f += (d - f) / ++h);
        return h ? f : void 0
    }, Wg.quantile = function (a, b) {
        var c = (a.length - 1) * b + 1,
            d = Math.floor(c),
            e = +a[d - 1],
            f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, Wg.median = function (b, c) {
        return arguments.length > 1 && (b = b.map(c)), b = b.filter(a), b.length ? Wg.quantile(b.sort(Wg.ascending), .5) : void 0
    }, Wg.bisector = function (a) {
        return {
            left: function (b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a.call(b, b[f], f) < c ? d = f + 1 : e = f
                }
                return d
            },
            right: function (b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    c < a.call(b, b[f], f) ? e = f : d = f + 1
                }
                return d
            }
        }
    };
    var hh = Wg.bisector(function (a) {
        return a
    });
    Wg.bisectLeft = hh.left, Wg.bisect = Wg.bisectRight = hh.right, Wg.shuffle = function (a) {
        for (var b, c, d = a.length; d;) c = 0 | Math.random() * d--, b = a[d], a[d] = a[c], a[c] = b;
        return a
    }, Wg.permute = function (a, b) {
        for (var c = b.length, d = new Array(c); c--;) d[c] = a[b[c]];
        return d
    }, Wg.pairs = function (a) {
        for (var b, c = 0, d = a.length - 1, e = a[0], f = new Array(0 > d ? 0 : d); d > c;) f[c] = [b = e, e = a[++c]];
        return f
    }, Wg.zip = function () {
        if (!(e = arguments.length)) return [];
        for (var a = -1, c = Wg.min(arguments, b), d = new Array(c); ++a < c;) for (var e, f = -1, g = d[a] = new Array(e); ++f < e;) g[f] = arguments[f][a];
        return d
    }, Wg.transpose = function (a) {
        return Wg.zip.apply(Wg, a)
    }, Wg.keys = function (a) {
        var b = [];
        for (var c in a) b.push(c);
        return b
    }, Wg.values = function (a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }, Wg.entries = function (a) {
        var b = [];
        for (var c in a) b.push({
            key: c,
            value: a[c]
        });
        return b
    }, Wg.merge = function (a) {
        for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;) g += a[f].length;
        for (c = new Array(g); --e >= 0;) for (d = a[e], b = d.length; --b >= 0;) c[--g] = d[b];
        return c
    };
    var ih = Math.abs;
    Wg.range = function (a, b, d) {
        if (arguments.length < 3 && (d = 1, arguments.length < 2 && (b = a, a = 0)), 1 / 0 === (b - a) / d) throw new Error("infinite range");
        var e, f = [],
            g = c(ih(d)),
            h = -1;
        if (a *= g, b *= g, d *= g, 0 > d) for (;
        (e = a + d * ++h) > b;) f.push(e / g);
        else for (;
        (e = a + d * ++h) < b;) f.push(e / g);
        return f
    }, Wg.map = function (a) {
        var b = new e;
        if (a instanceof e) a.forEach(function (a, c) {
            b.set(a, c)
        });
        else for (var c in a) b.set(c, a[c]);
        return b
    }, d(e, {
        has: function (a) {
            return jh + a in this
        },
        get: function (a) {
            return this[jh + a]
        },
        set: function (a, b) {
            return this[jh + a] = b
        },
        remove: function (a) {
            return a = jh + a, a in this && delete this[a]
        },
        keys: function () {
            var a = [];
            return this.forEach(function (b) {
                a.push(b)
            }), a
        },
        values: function () {
            var a = [];
            return this.forEach(function (b, c) {
                a.push(c)
            }), a
        },
        entries: function () {
            var a = [];
            return this.forEach(function (b, c) {
                a.push({
                    key: b,
                    value: c
                })
            }), a
        },
        forEach: function (a) {
            for (var b in this) b.charCodeAt(0) === kh && a.call(this, b.substring(1), this[b])
        }
    });
    var jh = "\x00",
        kh = jh.charCodeAt(0);
    Wg.nest = function () {
        function a(b, h, i) {
            if (i >= g.length) return d ? d.call(f, h) : c ? h.sort(c) : h;
            for (var j, k, l, m, n = -1, o = h.length, p = g[i++], q = new e; ++n < o;)(m = q.get(j = p(k = h[n]))) ? m.push(k) : q.set(j, [k]);
            return b ? (k = b(), l = function (c, d) {
                k.set(c, a(b, d, i))
            }) : (k = {}, l = function (c, d) {
                k[c] = a(b, d, i)
            }), q.forEach(l), k
        }
        function b(a, c) {
            if (c >= g.length) return a;
            var d = [],
                e = h[c++];
            return a.forEach(function (a, e) {
                d.push({
                    key: a,
                    values: b(e, c)
                })
            }), e ? d.sort(function (a, b) {
                return e(a.key, b.key)
            }) : d
        }
        var c, d, f = {},
            g = [],
            h = [];
        return f.map = function (b, c) {
            return a(c, b, 0)
        }, f.entries = function (c) {
            return b(a(Wg.map, c, 0), 0)
        }, f.key = function (a) {
            return g.push(a), f
        }, f.sortKeys = function (a) {
            return h[g.length - 1] = a, f
        }, f.sortValues = function (a) {
            return c = a, f
        }, f.rollup = function (a) {
            return d = a, f
        }, f
    }, Wg.set = function (a) {
        var b = new f;
        if (a) for (var c = 0, d = a.length; d > c; ++c) b.add(a[c]);
        return b
    }, d(f, {
        has: function (a) {
            return jh + a in this
        },
        add: function (a) {
            return this[jh + a] = !0, a
        },
        remove: function (a) {
            return a = jh + a, a in this && delete this[a]
        },
        values: function () {
            var a = [];
            return this.forEach(function (b) {
                a.push(b)
            }), a
        },
        forEach: function (a) {
            for (var b in this) b.charCodeAt(0) === kh && a.call(this, b.substring(1))
        }
    }), Wg.behavior = {}, Wg.rebind = function (a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e;) a[c = arguments[d]] = g(a, b, b[c]);
        return a
    };
    var lh = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Wg.dispatch = function () {
        for (var a = new j, b = -1, c = arguments.length; ++b < c;) a[arguments[b]] = k(a);
        return a
    }, j.prototype.on = function (a, b) {
        var c = a.indexOf("."),
            d = "";
        if (c >= 0 && (d = a.substring(c + 1), a = a.substring(0, c)), a) return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
            if (null == b) for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
            return this
        }
    }, Wg.event = null, Wg.requote = function (a) {
        return a.replace(mh, "\\$&")
    };
    var mh = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        nh = {}.__proto__ ?
    function (a, b) {
        a.__proto__ = b
    } : function (a, b) {
        for (var c in b) a[c] = b[c]
    }, oh = function (a, b) {
        return b.querySelector(a)
    }, ph = function (a, b) {
        return b.querySelectorAll(a)
    }, qh = $g[h($g, "matchesSelector")], rh = function (a, b) {
        return qh.call(a, b)
    };
    "function" == typeof Sizzle && (oh = function (a, b) {
        return Sizzle(a, b)[0] || null
    }, ph = function (a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b))
    }, rh = Sizzle.matchesSelector), Wg.selection = function () {
        return vh
    };
    var sh = Wg.selection.prototype = [];
    sh.select = function (a) {
        var b, c, d, e, f = [];
        a = p(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []), b.parentNode = (d = this[g]).parentNode;
            for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
        }
        return o(f)
    }, sh.selectAll = function (a) {
        var b, c, d = [];
        a = q(a);
        for (var e = -1, f = this.length; ++e < f;) for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = Yg(a.call(c, c.__data__, h, e))), b.parentNode = c);
        return o(d)
    };
    var th = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Wg.ns = {
        prefix: th,
        qualify: function (a) {
            var b = a.indexOf(":"),
                c = a;
            return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), th.hasOwnProperty(c) ? {
                space: th[c],
                local: a
            } : a
        }
    }, sh.attr = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node();
                return a = Wg.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            }
            for (b in a) this.each(r(b, a[b]));
            return this
        }
        return this.each(r(a, b))
    }, sh.classed = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node(),
                    d = (a = u(a)).length,
                    e = -1;
                if (b = c.classList) {
                    for (; ++e < d;) if (!b.contains(a[e])) return !1
                } else for (b = c.getAttribute("class"); ++e < d;) if (!t(a[e]).test(b)) return !1;
                return !0
            }
            for (b in a) this.each(v(b, a[b]));
            return this
        }
        return this.each(v(a, b))
    }, sh.style = function (a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = "");
                for (c in a) this.each(x(c, a[c], b));
                return this
            }
            if (2 > d) return _g.getComputedStyle(this.node(), null).getPropertyValue(a);
            c = ""
        }
        return this.each(x(a, b, c))
    }, sh.property = function (a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) return this.node()[a];
            for (b in a) this.each(y(b, a[b]));
            return this
        }
        return this.each(y(a, b))
    }, sh.text = function (a) {
        return arguments.length ? this.each("function" == typeof a ?
        function () {
            var b = a.apply(this, arguments);
            this.textContent = null == b ? "" : b
        } : null == a ?
        function () {
            this.textContent = ""
        } : function () {
            this.textContent = a
        }) : this.node().textContent
    }, sh.html = function (a) {
        return arguments.length ? this.each("function" == typeof a ?
        function () {
            var b = a.apply(this, arguments);
            this.innerHTML = null == b ? "" : b
        } : null == a ?
        function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = a
        }) : this.node().innerHTML
    }, sh.append = function (a) {
        return a = z(a), this.select(function () {
            return this.appendChild(a.apply(this, arguments))
        })
    }, sh.insert = function (a, b) {
        return a = z(a), b = p(b), this.select(function () {
            return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
        })
    }, sh.remove = function () {
        return this.each(function () {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, sh.data = function (a, b) {
        function c(a, c) {
            var d, f, g, h = a.length,
                l = c.length,
                m = Math.min(h, l),
                n = new Array(l),
                o = new Array(l),
                p = new Array(h);
            if (b) {
                var q, r = new e,
                    s = new e,
                    t = [];
                for (d = -1; ++d < h;) q = b.call(f = a[d], f.__data__, d), r.has(q) ? p[d] = f : r.set(q, f), t.push(q);
                for (d = -1; ++d < l;) q = b.call(c, g = c[d], d), (f = r.get(q)) ? (n[d] = f, f.__data__ = g) : s.has(q) || (o[d] = A(g)), s.set(q, g), r.remove(q);
                for (d = -1; ++d < h;) r.has(t[d]) && (p[d] = a[d])
            } else {
                for (d = -1; ++d < m;) f = a[d], g = c[d], f ? (f.__data__ = g, n[d] = f) : o[d] = A(g);
                for (; l > d; ++d) o[d] = A(c[d]);
                for (; h > d; ++d) p[d] = a[d]
            }
            o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, i.push(o), j.push(n), k.push(p)
        }
        var d, f, g = -1,
            h = this.length;
        if (!arguments.length) {
            for (a = new Array(h = (d = this[0]).length); ++g < h;)(f = d[g]) && (a[g] = f.__data__);
            return a
        }
        var i = E([]),
            j = o([]),
            k = o([]);
        if ("function" == typeof a) for (; ++g < h;) c(d = this[g], a.call(d, d.parentNode.__data__, g));
        else for (; ++g < h;) c(d = this[g], a);
        return j.enter = function () {
            return i
        }, j.exit = function () {
            return k
        }, j
    }, sh.datum = function (a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }, sh.filter = function (a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = B(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []), b.parentNode = (c = this[f]).parentNode;
            for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return o(e)
    }, sh.order = function () {
        for (var a = -1, b = this.length; ++a < b;) for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
        return this
    }, sh.sort = function (a) {
        a = C.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
        return this.order()
    }, sh.each = function (a) {
        return D(this, function (b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }, sh.call = function (a) {
        var b = Yg(arguments);
        return a.apply(b[0] = this, b), this
    }, sh.empty = function () {
        return !this.node()
    }, sh.node = function () {
        for (var a = 0, b = this.length; b > a; a++) for (var c = this[a], d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            if (f) return f
        }
        return null
    }, sh.size = function () {
        var a = 0;
        return this.each(function () {
            ++a
        }), a
    };
    var uh = [];
    Wg.selection.enter = E, Wg.selection.enter.prototype = uh, uh.append = sh.append, uh.empty = sh.empty, uh.node = sh.node, uh.call = sh.call, uh.size = sh.size, uh.select = function (a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
            d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
            for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
        }
        return o(g)
    }, uh.insert = function (a, b) {
        return arguments.length < 2 && (b = F(this)), sh.insert.call(this, a, b)
    }, sh.transition = function () {
        for (var a, b, c = zj || ++Ej, d = [], e = Aj || {
            time: Date.now(),
            ease: Od,
            delay: 0,
            duration: 250
        }, f = -1, g = this.length; ++f < g;) {
            d.push(a = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j;)(b = h[i]) && gg(b, i, c, e), a.push(b)
        }
        return dg(d, c)
    }, sh.interrupt = function () {
        return this.each(G)
    }, Wg.select = function (a) {
        var b = ["string" == typeof a ? oh(a, Zg) : a];
        return b.parentNode = $g, o([b])
    }, Wg.selectAll = function (a) {
        var b = Yg("string" == typeof a ? ph(a, Zg) : a);
        return b.parentNode = $g, o([b])
    };
    var vh = Wg.select($g);
    sh.on = function (a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = !1);
                for (c in a) this.each(H(c, a[c], b));
                return this
            }
            if (2 > d) return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each(H(a, b, c))
    };
    var wh = Wg.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    wh.forEach(function (a) {
        "on" + a in Zg && wh.remove(a)
    });
    var xh = "onselectstart" in Zg ? null : h($g.style, "userSelect"),
        yh = 0;
    Wg.mouse = function (a) {
        return L(a, m())
    };
    var zh = /WebKit/.test(_g.navigator.userAgent) ? -1 : 0;
    Wg.touches = function (a, b) {
        return arguments.length < 2 && (b = m().touches), b ? Yg(b).map(function (b) {
            var c = L(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, Wg.behavior.drag = function () {
        function a() {
            this.on("mousedown.drag", g).on("touchstart.drag", h)
        }
        function b() {
            return Wg.event.changedTouches[0].identifier
        }
        function c(a, b) {
            return Wg.touches(a).filter(function (a) {
                return a.identifier === b
            })[0]
        }
        function d(a, b, c, d) {
            return function () {
                function g() {
                    var a = b(k, n),
                        c = a[0] - p[0],
                        d = a[1] - p[1];
                    q |= c | d, p = a, l({
                        type: "drag",
                        x: a[0] + i[0],
                        y: a[1] + i[1],
                        dx: c,
                        dy: d
                    })
                }
                function h() {
                    r.on(c + "." + o, null).on(d + "." + o, null), s(q && Wg.event.target === m), l({
                        type: "dragend"
                    })
                }
                var i, j = this,
                    k = j.parentNode,
                    l = e.of(j, arguments),
                    m = Wg.event.target,
                    n = a(),
                    o = null == n ? "drag" : "drag-" + n,
                    p = b(k, n),
                    q = 0,
                    r = Wg.select(_g).on(c + "." + o, g).on(d + "." + o, h),
                    s = K();
                f ? (i = f.apply(j, arguments), i = [i.x - p[0], i.y - p[1]]) : i = [0, 0], l({
                    type: "dragstart"
                })
            }
        }
        var e = n(a, "drag", "dragstart", "dragend"),
            f = null,
            g = d(i, Wg.mouse, "mousemove", "mouseup"),
            h = d(b, c, "touchmove", "touchend");
        return a.origin = function (b) {
            return arguments.length ? (f = b, a) : f
        }, Wg.rebind(a, e, "on")
    };
    var Ah = Math.PI,
        Bh = 2 * Ah,
        Ch = Ah / 2,
        Dh = 1e-6,
        Eh = Dh * Dh,
        Fh = Ah / 180,
        Gh = 180 / Ah,
        Hh = Math.SQRT2,
        Ih = 2,
        Jh = 4;
    Wg.interpolateZoom = function (a, b) {
        function c(a) {
            var b = a * s;
            if (r) {
                var c = Q(p),
                    g = f / (Ih * m) * (c * R(Hh * b + p) - P(p));
                return [d + g * j, e + g * k, f * c / Q(Hh * b + p)]
            }
            return [d + a * j, e + a * k, f * Math.exp(Hh * b)]
        }
        var d = a[0],
            e = a[1],
            f = a[2],
            g = b[0],
            h = b[1],
            i = b[2],
            j = g - d,
            k = h - e,
            l = j * j + k * k,
            m = Math.sqrt(l),
            n = (i * i - f * f + Jh * l) / (2 * f * Ih * m),
            o = (i * i - f * f - Jh * l) / (2 * i * Ih * m),
            p = Math.log(Math.sqrt(n * n + 1) - n),
            q = Math.log(Math.sqrt(o * o + 1) - o),
            r = q - p,
            s = (r || Math.log(i / f)) / Hh;
        return c.duration = 1e3 * s, c
    }, Wg.behavior.zoom = function () {
        function a(a) {
            a.on(B, j).on(Mh + ".zoom", m).on(C, o).on("dblclick.zoom", p).on(E, k)
        }
        function b(a) {
            return [(a[0] - y.x) / y.k, (a[1] - y.y) / y.k]
        }
        function c(a) {
            return [a[0] * y.k + y.x, a[1] * y.k + y.y]
        }
        function d(a) {
            y.k = Math.max(A[0], Math.min(A[1], a))
        }
        function e(a, b) {
            b = c(b), y.x += a[0] - b[0], y.y += a[1] - b[1]
        }
        function f() {
            v && v.domain(u.range().map(function (a) {
                return (a - y.x) / y.k
            }).map(u.invert)), x && x.domain(w.range().map(function (a) {
                return (a - y.y) / y.k
            }).map(w.invert))
        }
        function g(a) {
            a({
                type: "zoomstart"
            })
        }
        function h(a) {
            f(), a({
                type: "zoom",
                scale: y.k,
                translate: [y.x, y.y]
            })
        }
        function i(a) {
            a({
                type: "zoomend"
            })
        }
        function j() {
            function a() {
                k = 1, e(Wg.mouse(d), m), h(f)
            }
            function c() {
                l.on(C, _g === d ? o : null).on(D, null), n(k && Wg.event.target === j), i(f)
            }
            var d = this,
                f = F.of(d, arguments),
                j = Wg.event.target,
                k = 0,
                l = Wg.select(_g).on(C, a).on(D, c),
                m = b(Wg.mouse(d)),
                n = K();
            G.call(d), g(f)
        }
        function k() {
            function a() {
                var a = Wg.touches(o);
                return n = y.k, a.forEach(function (a) {
                    a.identifier in q && (q[a.identifier] = b(a))
                }), a
            }
            function c() {
                for (var b = Wg.event.changedTouches, c = 0, f = b.length; f > c; ++c) q[b[c].identifier] = null;
                var g = a(),
                    i = Date.now();
                if (1 === g.length) {
                    if (500 > i - t) {
                        var j = g[0],
                            k = q[j.identifier];
                        d(2 * y.k), e(j, k), l(), h(p)
                    }
                    t = i
                } else if (g.length > 1) {
                    var j = g[0],
                        m = g[1],
                        n = j[0] - m[0],
                        o = j[1] - m[1];
                    r = n * n + o * o
                }
            }
            function f() {
                for (var a, b, c, f, g = Wg.touches(o), i = 0, j = g.length; j > i; ++i, f = null) if (c = g[i], f = q[c.identifier]) {
                    if (b) break;
                    a = c, b = f
                }
                if (f) {
                    var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k,
                        l = r && Math.sqrt(k / r);
                    a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + f[0]) / 2, (b[1] + f[1]) / 2], d(l * n)
                }
                t = null, e(a, b), h(p)
            }
            function m() {
                if (Wg.event.touches.length) {
                    for (var b = Wg.event.changedTouches, c = 0, d = b.length; d > c; ++c) delete q[b[c].identifier];
                    for (var e in q) return void a()
                }
                w.on(u, null).on(v, null), x.on(B, j).on(E, k), z(), i(p)
            }
            var n, o = this,
                p = F.of(o, arguments),
                q = {},
                r = 0,
                s = Wg.event.changedTouches[0].identifier,
                u = "touchmove.zoom-" + s,
                v = "touchend.zoom-" + s,
                w = Wg.select(_g).on(u, f).on(v, m),
                x = Wg.select(o).on(B, null).on(E, c),
                z = K();
            G.call(o), c(), g(p)
        }
        function m() {
            var a = F.of(this, arguments);
            s ? clearTimeout(s) : (G.call(this), g(a)), s = setTimeout(function () {
                s = null, i(a)
            }, 50), l();
            var c = r || Wg.mouse(this);
            q || (q = b(c)), d(Math.pow(2, .002 * Kh()) * y.k), e(c, q), h(a)
        }
        function o() {
            q = null
        }
        function p() {
            var a = F.of(this, arguments),
                c = Wg.mouse(this),
                f = b(c),
                j = Math.log(y.k) / Math.LN2;
            g(a), d(Math.pow(2, Wg.event.shiftKey ? Math.ceil(j) - 1 : Math.floor(j) + 1)), e(c, f), h(a), i(a)
        }
        var q, r, s, t, u, v, w, x, y = {
            x: 0,
            y: 0,
            k: 1
        },
            z = [960, 500],
            A = Lh,
            B = "mousedown.zoom",
            C = "mousemove.zoom",
            D = "mouseup.zoom",
            E = "touchstart.zoom",
            F = n(a, "zoomstart", "zoom", "zoomend");
        return a.event = function (a) {
            a.each(function () {
                var a = F.of(this, arguments),
                    b = y;
                zj ? Wg.select(this).transition().each("start.zoom", function () {
                    y = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, g(a)
                }).tween("zoom:zoom", function () {
                    var c = z[0],
                        d = z[1],
                        e = c / 2,
                        f = d / 2,
                        g = Wg.interpolateZoom([(e - y.x) / y.k, (f - y.y) / y.k, c / y.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                    return function (b) {
                        var d = g(b),
                            i = c / d[2];
                        this.__chart__ = y = {
                            x: e - d[0] * i,
                            y: f - d[1] * i,
                            k: i
                        }, h(a)
                    }
                }).each("end.zoom", function () {
                    i(a)
                }) : (this.__chart__ = y, g(a), h(a), i(a))
            })
        }, a.translate = function (b) {
            return arguments.length ? (y = {
                x: +b[0],
                y: +b[1],
                k: y.k
            }, f(), a) : [y.x, y.y]
        }, a.scale = function (b) {
            return arguments.length ? (y = {
                x: y.x,
                y: y.y,
                k: +b
            }, f(), a) : y.k
        }, a.scaleExtent = function (b) {
            return arguments.length ? (A = null == b ? Lh : [+b[0], +b[1]], a) : A
        }, a.center = function (b) {
            return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
        }, a.size = function (b) {
            return arguments.length ? (z = b && [+b[0], +b[1]], a) : z
        }, a.x = function (b) {
            return arguments.length ? (v = b, u = b.copy(), y = {
                x: 0,
                y: 0,
                k: 1
            }, a) : v
        }, a.y = function (b) {
            return arguments.length ? (x = b, w = b.copy(), y = {
                x: 0,
                y: 0,
                k: 1
            }, a) : x
        }, Wg.rebind(a, F, "on")
    };
    var Kh, Lh = [0, 1 / 0],
        Mh = "onwheel" in Zg ? (Kh = function () {
            return -Wg.event.deltaY * (Wg.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in Zg ? (Kh = function () {
            return Wg.event.wheelDelta
        }, "mousewheel") : (Kh = function () {
            return -Wg.event.detail
        }, "MozMousePixelScroll");
    T.prototype.toString = function () {
        return this.rgb() + ""
    }, Wg.hsl = function (a, b, c) {
        return 1 === arguments.length ? a instanceof V ? U(a.h, a.s, a.l) : kb("" + a, lb, U) : U(+a, +b, +c)
    };
    var Nh = V.prototype = new T;
    Nh.brighter = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), U(this.h, this.s, this.l / a)
    }, Nh.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), U(this.h, this.s, a * this.l)
    }, Nh.rgb = function () {
        return W(this.h, this.s, this.l)
    }, Wg.hcl = function (a, b, c) {
        return 1 === arguments.length ? a instanceof Y ? X(a.h, a.c, a.l) : a instanceof _ ? bb(a.l, a.a, a.b) : bb((a = mb((a = Wg.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : X(+a, +b, +c)
    };
    var Oh = Y.prototype = new T;
    Oh.brighter = function (a) {
        return X(this.h, this.c, Math.min(100, this.l + Ph * (arguments.length ? a : 1)))
    }, Oh.darker = function (a) {
        return X(this.h, this.c, Math.max(0, this.l - Ph * (arguments.length ? a : 1)))
    }, Oh.rgb = function () {
        return Z(this.h, this.c, this.l).rgb()
    }, Wg.lab = function (a, b, c) {
        return 1 === arguments.length ? a instanceof _ ? $(a.l, a.a, a.b) : a instanceof Y ? Z(a.l, a.c, a.h) : mb((a = Wg.rgb(a)).r, a.g, a.b) : $(+a, +b, +c)
    };
    var Ph = 18,
        Qh = .95047,
        Rh = 1,
        Sh = 1.08883,
        Th = _.prototype = new T;
    Th.brighter = function (a) {
        return $(Math.min(100, this.l + Ph * (arguments.length ? a : 1)), this.a, this.b)
    }, Th.darker = function (a) {
        return $(Math.max(0, this.l - Ph * (arguments.length ? a : 1)), this.a, this.b)
    }, Th.rgb = function () {
        return ab(this.l, this.a, this.b)
    }, Wg.rgb = function (a, b, c) {
        return 1 === arguments.length ? a instanceof ib ? hb(a.r, a.g, a.b) : kb("" + a, hb, W) : hb(~~a, ~~b, ~~c)
    };
    var Uh = ib.prototype = new T;
    Uh.brighter = function (a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r,
            c = this.g,
            d = this.b,
            e = 30;
        return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), hb(Math.min(255, ~~ (b / a)), Math.min(255, ~~ (c / a)), Math.min(255, ~~ (d / a)))) : hb(e, e, e)
    }, Uh.darker = function (a) {
        return a = Math.pow(.7, arguments.length ? a : 1), hb(~~ (a * this.r), ~~ (a * this.g), ~~ (a * this.b))
    }, Uh.hsl = function () {
        return lb(this.r, this.g, this.b)
    }, Uh.toString = function () {
        return "#" + jb(this.r) + jb(this.g) + jb(this.b)
    };
    var Vh = Wg.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Vh.forEach(function (a, b) {
        Vh.set(a, fb(b))
    }), Wg.functor = pb, Wg.xhr = rb(qb), Wg.dsv = function (a, b) {
        function c(a, c, f) {
            arguments.length < 3 && (f = c, c = null);
            var g = sb(a, b, null == c ? d : e(c), f);
            return g.row = function (a) {
                return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
            }, g
        }
        function d(a) {
            return c.parse(a.responseText)
        }
        function e(a) {
            return function (b) {
                return c.parse(b.responseText, a)
            }
        }
        function g(b) {
            return b.map(h).join(a)
        }
        function h(a) {
            return i.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }
        var i = new RegExp('["' + a + "\n]"),
            j = a.charCodeAt(0);
        return c.parse = function (a, b) {
            var d;
            return c.parseRows(a, function (a, c) {
                if (d) return d(a, c - 1);
                var e = new Function("d", "return {" + a.map(function (a, b) {
                    return JSON.stringify(a) + ": d[" + b + "]"
                }).join(",") + "}");
                d = b ?
                function (a, c) {
                    return b(e(a), c)
                } : e
            })
        }, c.parseRows = function (a, b) {
            function c() {
                if (k >= i) return g;
                if (e) return e = !1, f;
                var b = k;
                if (34 === a.charCodeAt(b)) {
                    for (var c = b; c++ < i;) if (34 === a.charCodeAt(c)) {
                        if (34 !== a.charCodeAt(c + 1)) break;
                        ++c
                    }
                    k = c + 2;
                    var d = a.charCodeAt(c + 1);
                    return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.substring(b + 1, c).replace(/""/g, '"')
                }
                for (; i > k;) {
                    var d = a.charCodeAt(k++),
                        h = 1;
                    if (10 === d) e = !0;
                    else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h);
                    else if (d !== j) continue;
                    return a.substring(b, k - h)
                }
                return a.substring(b)
            }
            for (var d, e, f = {}, g = {}, h = [], i = a.length, k = 0, l = 0;
            (d = c()) !== g;) {
                for (var m = []; d !== f && d !== g;) m.push(d), d = c();
                (!b || (m = b(m, l++))) && h.push(m)
            }
            return h
        }, c.format = function (b) {
            if (Array.isArray(b[0])) return c.formatRows(b);
            var d = new f,
                e = [];
            return b.forEach(function (a) {
                for (var b in a) d.has(b) || e.push(d.add(b))
            }), [e.map(h).join(a)].concat(b.map(function (b) {
                return e.map(function (a) {
                    return h(b[a])
                }).join(a)
            })).join("\n")
        }, c.formatRows = function (a) {
            return a.map(g).join("\n")
        }, c
    }, Wg.csv = Wg.dsv(",", "text/csv"), Wg.tsv = Wg.dsv("	", "text/tab-separated-values");
    var Wh, Xh, Yh, Zh, $h, _h = _g[h(_g, "requestAnimationFrame")] ||
    function (a) {
        setTimeout(a, 17)
    };
    Wg.timer = function (a, b, c) {
        var d = arguments.length;
        2 > d && (b = 0), 3 > d && (c = Date.now());
        var e = c + b,
            f = {
                c: a,
                t: e,
                f: !1,
                n: null
            };
        Xh ? Xh.n = f : Wh = f, Xh = f, Yh || (Zh = clearTimeout(Zh), Yh = 1, _h(ub))
    }, Wg.timer.flush = function () {
        vb(), wb()
    };
    var ai = ".",
        bi = ",",
        ci = [3, 3],
        di = "$",
        ei = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(xb);
    Wg.formatPrefix = function (a, b) {
        var c = 0;
        return a && (0 > a && (a *= -1), b && (a = Wg.round(a, yb(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= c ? c + 1 : c - 1) / 3)))), ei[8 + c / 3]
    }, Wg.round = function (a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    }, Wg.format = function (a) {
        var b = fi.exec(a),
            c = b[1] || " ",
            d = b[2] || ">",
            e = b[3] || "",
            f = b[4] || "",
            g = b[5],
            h = +b[6],
            i = b[7],
            j = b[8],
            k = b[9],
            l = 1,
            m = "",
            n = !1;
        switch (j && (j = +j.substring(1)), (g || "0" === c && "=" === d) && (g = c = "0", d = "=", i && (h -= Math.floor((h - 1) / 4))), k) {
        case "n":
            i = !0, k = "g";
            break;
        case "%":
            l = 100, m = "%", k = "f";
            break;
        case "p":
            l = 100, m = "%", k = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X":
            "#" === f && (f = "0" + k.toLowerCase());
        case "c":
        case "d":
            n = !0, j = 0;
            break;
        case "s":
            l = -1, k = "r"
        }
        "#" === f ? f = "" : "$" === f && (f = di), "r" != k || j || (k = "g"), null != j && ("g" == k ? j = Math.max(1, Math.min(21, j)) : ("e" == k || "f" == k) && (j = Math.max(0, Math.min(20, j)))), k = gi.get(k) || zb;
        var o = g && i;
        return function (a) {
            if (n && a % 1) return "";
            var b = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : e;
            if (0 > l) {
                var p = Wg.formatPrefix(a, j);
                a = p.scale(a), m = p.symbol
            } else a *= l;
            a = k(a, j);
            var q = a.lastIndexOf("."),
                r = 0 > q ? a : a.substring(0, q),
                s = 0 > q ? "" : ai + a.substring(q + 1);
            !g && i && (r = hi(r));
            var t = f.length + r.length + s.length + (o ? 0 : b.length),
                u = h > t ? new Array(t = h - t + 1).join(c) : "";
            return o && (r = hi(u + r)), b += f, a = r + s, ("<" === d ? b + a + u : ">" === d ? u + b + a : "^" === d ? u.substring(0, t >>= 1) + b + a + u.substring(t) : b + (o ? a : u + a)) + m
        }
    };
    var fi = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        gi = Wg.map({
            b: function (a) {
                return a.toString(2)
            },
            c: function (a) {
                return String.fromCharCode(a)
            },
            o: function (a) {
                return a.toString(8)
            },
            x: function (a) {
                return a.toString(16)
            },
            X: function (a) {
                return a.toString(16).toUpperCase()
            },
            g: function (a, b) {
                return a.toPrecision(b)
            },
            e: function (a, b) {
                return a.toExponential(b)
            },
            f: function (a, b) {
                return a.toFixed(b)
            },
            r: function (a, b) {
                return (a = Wg.round(a, yb(a, b))).toFixed(Math.max(0, Math.min(20, yb(a * (1 + 1e-15), b))))
            }
        }),
        hi = qb;
    if (ci) {
        var ii = ci.length;
        hi = function (a) {
            for (var b = a.length, c = [], d = 0, e = ci[0]; b > 0 && e > 0;) c.push(a.substring(b -= e, b + e)), e = ci[d = (d + 1) % ii];
            return c.reverse().join(bi)
        }
    }
    Wg.geo = {}, Ab.prototype = {
        s: 0,
        t: 0,
        add: function (a) {
            Bb(a, this.t, ji), Bb(ji.s, this.s, this), this.s ? this.t += ji.t : this.s = ji.t
        },
        reset: function () {
            this.s = this.t = 0
        },
        valueOf: function () {
            return this.s
        }
    };
    var ji = new Ab;
    Wg.geo.stream = function (a, b) {
        a && ki.hasOwnProperty(a.type) ? ki[a.type](a, b) : Cb(a, b)
    };
    var ki = {
        Feature: function (a, b) {
            Cb(a.geometry, b)
        },
        FeatureCollection: function (a, b) {
            for (var c = a.features, d = -1, e = c.length; ++d < e;) Cb(c[d].geometry, b)
        }
    },
        li = {
            Sphere: function (a, b) {
                b.sphere()
            },
            Point: function (a, b) {
                a = a.coordinates, b.point(a[0], a[1], a[2])
            },
            MultiPoint: function (a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) a = c[d], b.point(a[0], a[1], a[2])
            },
            LineString: function (a, b) {
                Db(a.coordinates, b, 0)
            },
            MultiLineString: function (a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) Db(c[d], b, 0)
            },
            Polygon: function (a, b) {
                Eb(a.coordinates, b)
            },
            MultiPolygon: function (a, b) {
                for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) Eb(c[d], b)
            },
            GeometryCollection: function (a, b) {
                for (var c = a.geometries, d = -1, e = c.length; ++d < e;) Cb(c[d], b)
            }
        };
    Wg.geo.area = function (a) {
        return mi = 0, Wg.geo.stream(a, oi), mi
    };
    var mi, ni = new Ab,
        oi = {
            sphere: function () {
                mi += 4 * Ah
            },
            point: i,
            lineStart: i,
            lineEnd: i,
            polygonStart: function () {
                ni.reset(), oi.lineStart = Fb
            },
            polygonEnd: function () {
                var a = 2 * ni;
                mi += 0 > a ? 4 * Ah + a : a, oi.lineStart = oi.lineEnd = oi.point = i
            }
        };
    Wg.geo.bounds = function () {
        function a(a, b) {
            t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
        }
        function b(b, c) {
            var d = Gb([b * Fh, c * Fh]);
            if (r) {
                var e = Ib(r, d),
                    f = [e[1], -e[0], 0],
                    g = Ib(f, e);
                Lb(g), g = Mb(g);
                var i = b - o,
                    j = i > 0 ? 1 : -1,
                    p = g[0] * Gh * j,
                    q = ih(i) > 180;
                if (q ^ (p > j * o && j * b > p)) {
                    var s = g[1] * Gh;
                    s > n && (n = s)
                } else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
                    var s = -g[1] * Gh;
                    l > s && (l = s)
                } else l > c && (l = c), c > n && (n = c);
                q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
            } else a(b, c);
            r = d, o = b
        }
        function c() {
            v.point = b
        }
        function d() {
            u[0] = k, u[1] = m, v.point = a, r = null
        }
        function e(a, c) {
            if (r) {
                var d = a - o;
                s += ih(d) > 180 ? d + (d > 0 ? 360 : -360) : d
            } else p = a, q = c;
            oi.point(a, c), b(a, c)
        }
        function f() {
            oi.lineStart()
        }
        function g() {
            e(p, q), oi.lineEnd(), ih(s) > Dh && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
        }
        function h(a, b) {
            return (b -= a) < 0 ? b + 360 : b
        }
        function i(a, b) {
            return a[0] - b[0]
        }
        function j(a, b) {
            return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
        }
        var k, l, m, n, o, p, q, r, s, t, u, v = {
            point: a,
            lineStart: c,
            lineEnd: d,
            polygonStart: function () {
                v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, oi.polygonStart()
            },
            polygonEnd: function () {
                oi.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > ni ? (k = -(m = 180), l = -(n = 90)) : s > Dh ? n = 90 : -Dh > s && (l = -90), u[0] = k, u[1] = m
            }
        };
        return function (a) {
            n = m = -(k = l = 1 / 0), t = [], Wg.geo.stream(a, v);
            var b = t.length;
            if (b) {
                t.sort(i);
                for (var c, d = 1, e = t[0], f = [e]; b > d; ++d) c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                for (var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b]; b >= d; e = c, ++d) c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
            }
            return t = u = null, 1 / 0 === k || 1 / 0 === l ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [k, l],
                [m, n]
            ]
        }
    }(), Wg.geo.centroid = function (a) {
        pi = qi = ri = si = ti = ui = vi = wi = xi = yi = zi = 0, Wg.geo.stream(a, Ai);
        var b = xi,
            c = yi,
            d = zi,
            e = b * b + c * c + d * d;
        return Eh > e && (b = ui, c = vi, d = wi, Dh > qi && (b = ri, c = si, d = ti), e = b * b + c * c + d * d, Eh > e) ? [0 / 0, 0 / 0] : [Math.atan2(c, b) * Gh, O(d / Math.sqrt(e)) * Gh]
    };
    var pi, qi, ri, si, ti, ui, vi, wi, xi, yi, zi, Ai = {
        sphere: i,
        point: Ob,
        lineStart: Qb,
        lineEnd: Rb,
        polygonStart: function () {
            Ai.lineStart = Sb
        },
        polygonEnd: function () {
            Ai.lineStart = Qb
        }
    },
        Bi = Xb(Tb, ac, cc, [-Ah, -Ah / 2]),
        Ci = 1e9;
    Wg.geo.clipExtent = function () {
        var a, b, c, d, e, f, g = {
            stream: function (a) {
                return e && (e.valid = !1), e = f(a), e.valid = !0, e
            },
            extent: function (h) {
                return arguments.length ? (f = fc(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [
                    [a, b],
                    [c, d]
                ]
            }
        };
        return g.extent([
            [0, 0],
            [960, 500]
        ])
    }, (Wg.geo.conicEqualArea = function () {
        return hc(ic)
    }).raw = ic, Wg.geo.albers = function () {
        return Wg.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, Wg.geo.albersUsa = function () {
        function a(a) {
            var f = a[0],
                g = a[1];
            return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
        }
        var b, c, d, e, f = Wg.geo.albers(),
            g = Wg.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            h = Wg.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            i = {
                point: function (a, c) {
                    b = [a, c]
                }
            };
        return a.invert = function (a) {
            var b = f.scale(),
                c = f.translate(),
                d = (a[0] - c[0]) / b,
                e = (a[1] - c[1]) / b;
            return (e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
        }, a.stream = function (a) {
            var b = f.stream(a),
                c = g.stream(a),
                d = h.stream(a);
            return {
                point: function (a, e) {
                    b.point(a, e), c.point(a, e), d.point(a, e)
                },
                sphere: function () {
                    b.sphere(), c.sphere(), d.sphere()
                },
                lineStart: function () {
                    b.lineStart(), c.lineStart(), d.lineStart()
                },
                lineEnd: function () {
                    b.lineEnd(), c.lineEnd(), d.lineEnd()
                },
                polygonStart: function () {
                    b.polygonStart(), c.polygonStart(), d.polygonStart()
                },
                polygonEnd: function () {
                    b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                }
            }
        }, a.precision = function (b) {
            return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
        }, a.scale = function (b) {
            return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
        }, a.translate = function (b) {
            if (!arguments.length) return f.translate();
            var j = f.scale(),
                k = +b[0],
                l = +b[1];
            return c = f.translate(b).clipExtent([
                [k - .455 * j, l - .238 * j],
                [k + .455 * j, l + .238 * j]
            ]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([
                [k - .425 * j + Dh, l + .12 * j + Dh],
                [k - .214 * j - Dh, l + .234 * j - Dh]
            ]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([
                [k - .214 * j + Dh, l + .166 * j + Dh],
                [k - .115 * j - Dh, l + .234 * j - Dh]
            ]).stream(i).point, a
        }, a.scale(1070)
    };
    var Di, Ei, Fi, Gi, Hi, Ii, Ji = {
        point: i,
        lineStart: i,
        lineEnd: i,
        polygonStart: function () {
            Ei = 0, Ji.lineStart = jc
        },
        polygonEnd: function () {
            Ji.lineStart = Ji.lineEnd = Ji.point = i, Di += ih(Ei / 2)
        }
    },
        Ki = {
            point: kc,
            lineStart: i,
            lineEnd: i,
            polygonStart: i,
            polygonEnd: i
        },
        Li = {
            point: nc,
            lineStart: oc,
            lineEnd: pc,
            polygonStart: function () {
                Li.lineStart = qc
            },
            polygonEnd: function () {
                Li.point = nc, Li.lineStart = oc, Li.lineEnd = pc
            }
        };
    Wg.geo.path = function () {
        function a(a) {
            return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), Wg.geo.stream(a, g)), f.result()
        }
        function b() {
            return g = null, a
        }
        var c, d, e, f, g, h = 4.5;
        return a.area = function (a) {
            return Di = 0, Wg.geo.stream(a, e(Ji)), Di
        }, a.centroid = function (a) {
            return ri = si = ti = ui = vi = wi = xi = yi = zi = 0, Wg.geo.stream(a, e(Li)), zi ? [xi / zi, yi / zi] : wi ? [ui / wi, vi / wi] : ti ? [ri / ti, si / ti] : [0 / 0, 0 / 0]
        }, a.bounds = function (a) {
            return Hi = Ii = -(Fi = Gi = 1 / 0), Wg.geo.stream(a, e(Ki)), [
                [Fi, Gi],
                [Hi, Ii]
            ]
        }, a.projection = function (a) {
            return arguments.length ? (e = (c = a) ? a.stream || tc(a) : qb, b()) : c
        }, a.context = function (a) {
            return arguments.length ? (f = null == (d = a) ? new lc : new rc(a), "function" != typeof h && f.pointRadius(h), b()) : d
        }, a.pointRadius = function (b) {
            return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
        }, a.projection(Wg.geo.albersUsa()).context(null)
    }, Wg.geo.transform = function (a) {
        return {
            stream: function (b) {
                var c = new uc(b);
                for (var d in a) c[d] = a[d];
                return c
            }
        }
    }, uc.prototype = {
        point: function (a, b) {
            this.stream.point(a, b)
        },
        sphere: function () {
            this.stream.sphere()
        },
        lineStart: function () {
            this.stream.lineStart()
        },
        lineEnd: function () {
            this.stream.lineEnd()
        },
        polygonStart: function () {
            this.stream.polygonStart()
        },
        polygonEnd: function () {
            this.stream.polygonEnd()
        }
    }, Wg.geo.projection = wc, Wg.geo.projectionMutator = xc, (Wg.geo.equirectangular = function () {
        return wc(zc)
    }).raw = zc.invert = zc, Wg.geo.rotation = function (a) {
        function b(b) {
            return b = a(b[0] * Fh, b[1] * Fh), b[0] *= Gh, b[1] *= Gh, b
        }
        return a = Bc(a[0] % 360 * Fh, a[1] * Fh, a.length > 2 ? a[2] * Fh : 0), b.invert = function (b) {
            return b = a.invert(b[0] * Fh, b[1] * Fh), b[0] *= Gh, b[1] *= Gh, b
        }, b
    }, Ac.invert = zc, Wg.geo.circle = function () {
        function a() {
            var a = "function" == typeof d ? d.apply(this, arguments) : d,
                b = Bc(-a[0] * Fh, -a[1] * Fh, 0).invert,
                e = [];
            return c(null, null, 1, {
                point: function (a, c) {
                    e.push(a = b(a, c)), a[0] *= Gh, a[1] *= Gh
                }
            }), {
                type: "Polygon",
                coordinates: [e]
            }
        }
        var b, c, d = [0, 0],
            e = 6;
        return a.origin = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a.angle = function (d) {
            return arguments.length ? (c = Fc((b = +d) * Fh, e * Fh), a) : b
        }, a.precision = function (d) {
            return arguments.length ? (c = Fc(b * Fh, (e = +d) * Fh), a) : e
        }, a.angle(90)
    }, Wg.geo.distance = function (a, b) {
        var c, d = (b[0] - a[0]) * Fh,
            e = a[1] * Fh,
            f = b[1] * Fh,
            g = Math.sin(d),
            h = Math.cos(d),
            i = Math.sin(e),
            j = Math.cos(e),
            k = Math.sin(f),
            l = Math.cos(f);
        return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
    }, Wg.geo.graticule = function () {
        function a() {
            return {
                type: "MultiLineString",
                coordinates: b()
            }
        }
        function b() {
            return Wg.range(Math.ceil(f / q) * q, e, q).map(m).concat(Wg.range(Math.ceil(j / r) * r, i, r).map(n)).concat(Wg.range(Math.ceil(d / o) * o, c, o).filter(function (a) {
                return ih(a % q) > Dh
            }).map(k)).concat(Wg.range(Math.ceil(h / p) * p, g, p).filter(function (a) {
                return ih(a % r) > Dh
            }).map(l))
        }
        var c, d, e, f, g, h, i, j, k, l, m, n, o = 10,
            p = o,
            q = 90,
            r = 360,
            s = 2.5;
        return a.lines = function () {
            return b().map(function (a) {
                return {
                    type: "LineString",
                    coordinates: a
                }
            })
        }, a.outline = function () {
            return {
                type: "Polygon",
                coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
            }
        }, a.extent = function (b) {
            return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
        }, a.majorExtent = function (b) {
            return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [
                [f, j],
                [e, i]
            ]
        }, a.minorExtent = function (b) {
            return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [
                [d, h],
                [c, g]
            ]
        }, a.step = function (b) {
            return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
        }, a.majorStep = function (b) {
            return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
        }, a.minorStep = function (b) {
            return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
        }, a.precision = function (b) {
            return arguments.length ? (s = +b, k = Hc(h, g, 90), l = Ic(d, c, s), m = Hc(j, i, 90), n = Ic(f, e, s), a) : s
        }, a.majorExtent([
            [-180, -90 + Dh],
            [180, 90 - Dh]
        ]).minorExtent([
            [-180, -80 - Dh],
            [180, 80 + Dh]
        ])
    }, Wg.geo.greatArc = function () {
        function a() {
            return {
                type: "LineString",
                coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
            }
        }
        var b, c, d = Jc,
            e = Kc;
        return a.distance = function () {
            return Wg.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
        }, a.source = function (c) {
            return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
        }, a.target = function (b) {
            return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
        }, a.precision = function () {
            return arguments.length ? a : 0
        }, a
    }, Wg.geo.interpolate = function (a, b) {
        return Lc(a[0] * Fh, a[1] * Fh, b[0] * Fh, b[1] * Fh)
    }, Wg.geo.length = function (a) {
        return Mi = 0, Wg.geo.stream(a, Ni), Mi
    };
    var Mi, Ni = {
        sphere: i,
        point: i,
        lineStart: Mc,
        lineEnd: i,
        polygonStart: i,
        polygonEnd: i
    },
        Oi = Nc(function (a) {
            return Math.sqrt(2 / (1 + a))
        }, function (a) {
            return 2 * Math.asin(a / 2)
        });
    (Wg.geo.azimuthalEqualArea = function () {
        return wc(Oi)
    }).raw = Oi;
    var Pi = Nc(function (a) {
        var b = Math.acos(a);
        return b && b / Math.sin(b)
    }, qb);
    (Wg.geo.azimuthalEquidistant = function () {
        return wc(Pi)
    }).raw = Pi, (Wg.geo.conicConformal = function () {
        return hc(Oc)
    }).raw = Oc, (Wg.geo.conicEquidistant = function () {
        return hc(Pc)
    }).raw = Pc;
    var Qi = Nc(function (a) {
        return 1 / a
    }, Math.atan);
    (Wg.geo.gnomonic = function () {
        return wc(Qi)
    }).raw = Qi, Qc.invert = function (a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - Ch]
    }, (Wg.geo.mercator = function () {
        return Rc(Qc)
    }).raw = Qc;
    var Ri = Nc(function () {
        return 1
    }, Math.asin);
    (Wg.geo.orthographic = function () {
        return wc(Ri)
    }).raw = Ri;
    var Si = Nc(function (a) {
        return 1 / (1 + a)
    }, function (a) {
        return 2 * Math.atan(a)
    });
    (Wg.geo.stereographic = function () {
        return wc(Si)
    }).raw = Si, Sc.invert = function (a, b) {
        return [-b, 2 * Math.atan(Math.exp(a)) - Ch]
    }, (Wg.geo.transverseMercator = function () {
        var a = Rc(Sc),
            b = a.center,
            c = a.rotate;
        return a.center = function (a) {
            return a ? b([-a[1], a[0]]) : (a = b(), [-a[1], a[0]])
        }, a.rotate = function (a) {
            return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(), [a[0], a[1], a[2] - 90])
        }, a.rotate([0, 0])
    }).raw = Sc, Wg.geom = {}, Wg.geom.hull = function (a) {
        function b(a) {
            if (a.length < 3) return [];
            var b, e, f, g, h, i, j, k, l, m, n, o, p = pb(c),
                q = pb(d),
                r = a.length,
                s = r - 1,
                t = [],
                u = [],
                v = 0;
            if (p === Tc && d === Uc) b = a;
            else for (f = 0, b = []; r > f; ++f) b.push([+p.call(this, e = a[f], f), +q.call(this, e, f)]);
            for (f = 1; r > f; ++f)(b[f][1] < b[v][1] || b[f][1] == b[v][1] && b[f][0] < b[v][0]) && (v = f);
            for (f = 0; r > f; ++f) f !== v && (i = b[f][1] - b[v][1], h = b[f][0] - b[v][0], t.push({
                angle: Math.atan2(i, h),
                index: f
            }));
            for (t.sort(function (a, b) {
                return a.angle - b.angle
            }), n = t[0].angle, m = t[0].index, l = 0, f = 1; s > f; ++f) {
                if (g = t[f].index, n == t[f].angle) {
                    if (h = b[m][0] - b[v][0], i = b[m][1] - b[v][1], j = b[g][0] - b[v][0], k = b[g][1] - b[v][1], h * h + i * i >= j * j + k * k) {
                        t[f].index = -1;
                        continue
                    }
                    t[l].index = -1
                }
                n = t[f].angle, l = f, m = g
            }
            for (u.push(v), f = 0, g = 0; 2 > f; ++g) t[g].index > -1 && (u.push(t[g].index), f++);
            for (o = u.length; s > g; ++g) if (!(t[g].index < 0)) {
                for (; !Vc(u[o - 2], u[o - 1], t[g].index, b);)--o;
                u[o++] = t[g].index
            }
            var w = [];
            for (f = o - 1; f >= 0; --f) w.push(a[u[f]]);
            return w
        }
        var c = Tc,
            d = Uc;
        return arguments.length ? b(a) : (b.x = function (a) {
            return arguments.length ? (c = a, b) : c
        }, b.y = function (a) {
            return arguments.length ? (d = a, b) : d
        }, b)
    }, Wg.geom.polygon = function (a) {
        return nh(a, Ti), a
    };
    var Ti = Wg.geom.polygon.prototype = [];
    Ti.area = function () {
        for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;) a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
        return .5 * e
    }, Ti.centroid = function (a) {
        var b, c, d = -1,
            e = this.length,
            f = 0,
            g = 0,
            h = this[e - 1];
        for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;) b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
        return [f * a, g * a]
    }, Ti.clip = function (a) {
        for (var b, c, d, e, f, g, h = Yc(a), i = -1, j = this.length - Yc(this), k = this[j - 1]; ++i < j;) {
            for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;) g = b[c], Wc(g, k, e) ? (Wc(f, k, e) || a.push(Xc(f, g, k, e)), a.push(g)) : Wc(f, k, e) && a.push(Xc(f, g, k, e)), f = g;
            h && a.push(a[0]), k = e
        }
        return a
    };
    var Ui, Vi, Wi, Xi, Yi, Zi = [],
        $i = [];
    ed.prototype.prepare = function () {
        for (var a, b = this.edges, c = b.length; c--;) a = b[c].edge, a.b && a.a || b.splice(c, 1);
        return b.sort(gd), b.length
    }, qd.prototype = {
        start: function () {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function () {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, rd.prototype = {
        insert: function (a, b) {
            var c, d, e;
            if (a) {
                if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                    for (a = a.R; a.L;) a = a.L;
                    a.L = b
                } else a.R = b;
                c = a
            } else this._ ? (a = vd(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
            for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;) d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (td(this, c), a = c, c = a.U), c.C = !1, d.C = !0, ud(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (ud(this, c), a = c, c = a.U), c.C = !1, d.C = !0, td(this, d))), c = a.U;
            this._.C = !1
        },
        remove: function (a) {
            a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
            var b, c, d, e = a.U,
                f = a.L,
                g = a.R;
            if (c = f ? g ? vd(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                if (a && a.C) return a.C = !1, void 0;
                do {
                    if (a === this._) break;
                    if (a === e.L) {
                        if (b = e.R, b.C && (b.C = !1, e.C = !0, td(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                            b.R && b.R.C || (b.L.C = !1, b.C = !0, ud(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, td(this, e), a = this._;
                            break
                        }
                    } else if (b = e.L, b.C && (b.C = !1, e.C = !0, ud(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                        b.L && b.L.C || (b.R.C = !1, b.C = !0, td(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, ud(this, e), a = this._;
                        break
                    }
                    b.C = !0, a = e, e = e.U
                } while (!a.C);
                a && (a.C = !1)
            }
        }
    }, Wg.geom.voronoi = function (a) {
        function b(a) {
            var b = new Array(a.length),
                d = h[0][0],
                e = h[0][1],
                f = h[1][0],
                g = h[1][1];
            return wd(c(a), h).cells.forEach(function (c, h) {
                var i = c.edges,
                    j = c.site,
                    k = b[h] = i.length ? i.map(function (a) {
                        var b = a.start();
                        return [b.x, b.y]
                    }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [
                        [d, g],
                        [f, g],
                        [f, e],
                        [d, e]
                    ] : [];
                k.point = a[h]
            }), b
        }
        function c(a) {
            return a.map(function (a, b) {
                return {
                    x: Math.round(f(a, b) / Dh) * Dh,
                    y: Math.round(g(a, b) / Dh) * Dh,
                    i: b
                }
            })
        }
        var d = Tc,
            e = Uc,
            f = d,
            g = e,
            h = _i;
        return a ? b(a) : (b.links = function (a) {
            return wd(c(a)).edges.filter(function (a) {
                return a.l && a.r
            }).map(function (b) {
                return {
                    source: a[b.l.i],
                    target: a[b.r.i]
                }
            })
        }, b.triangles = function (a) {
            var b = [];
            return wd(c(a)).cells.forEach(function (c, d) {
                for (var e, f, g = c.site, h = c.edges.sort(gd), i = -1, j = h.length, k = h[j - 1].edge, l = k.l === g ? k.r : k.l; ++i < j;) e = k, f = l, k = h[i].edge, l = k.l === g ? k.r : k.l, d < f.i && d < l.i && yd(g, f, l) < 0 && b.push([a[d], a[f.i], a[l.i]])
            }), b
        }, b.x = function (a) {
            return arguments.length ? (f = pb(d = a), b) : d
        }, b.y = function (a) {
            return arguments.length ? (g = pb(e = a), b) : e
        }, b.clipExtent = function (a) {
            return arguments.length ? (h = null == a ? _i : a, b) : h === _i ? null : h
        }, b.size = function (a) {
            return arguments.length ? b.clipExtent(a && [
                [0, 0], a]) : h === _i ? null : h && h[1]
        }, b)
    };
    var _i = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    Wg.geom.delaunay = function (a) {
        return Wg.geom.voronoi().triangles(a)
    }, Wg.geom.quadtree = function (a, b, c, d, e) {
        function f(a) {
            function f(a, b, c, d, e, f, g, h) {
                if (!isNaN(c) && !isNaN(d)) if (a.leaf) {
                    var i = a.x,
                        k = a.y;
                    if (null != i) if (ih(i - c) + ih(k - d) < .01) j(a, b, c, d, e, f, g, h);
                    else {
                        var l = a.point;
                        a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                    } else a.x = c, a.y = d, a.point = b
                } else j(a, b, c, d, e, f, g, h)
            }
            function j(a, b, c, d, e, g, h, i) {
                var j = .5 * (e + h),
                    k = .5 * (g + i),
                    l = c >= j,
                    m = d >= k,
                    n = (m << 1) + l;
                a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = Bd()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
            }
            var k, l, m, n, o, p, q, r, s, t = pb(h),
                u = pb(i);
            if (null != b) p = b, q = c, r = d, s = e;
            else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g) for (n = 0; o > n; ++n) k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y);
            else for (n = 0; o > n; ++n) {
                var v = +t(k = a[n], n),
                    w = +u(k, n);
                p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
            }
            var x = r - p,
                y = s - q;
            x > y ? s = q + x : r = p + y;
            var z = Bd();
            if (z.add = function (a) {
                f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
            }, z.visit = function (a) {
                Cd(a, z, p, q, r, s)
            }, n = -1, null == b) {
                for (; ++n < o;) f(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else a.forEach(z.add);
            return l = m = a = k = null, z
        }
        var g, h = Tc,
            i = Uc;
        return (g = arguments.length) ? (h = zd, i = Ad, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function (a) {
            return arguments.length ? (h = a, f) : h
        }, f.y = function (a) {
            return arguments.length ? (i = a, f) : i
        }, f.extent = function (a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
                [b, c],
                [d, e]
            ]
        }, f.size = function (a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
        }, f)
    }, Wg.interpolateRgb = Dd, Wg.interpolateObject = Ed, Wg.interpolateNumber = Fd, Wg.interpolateString = Gd;
    var aj = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    Wg.interpolate = Hd, Wg.interpolators = [function (a, b) {
        var c = typeof b;
        return ("string" === c ? Vh.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? Dd : Gd : b instanceof T ? Dd : "object" === c ? Array.isArray(b) ? Id : Ed : Fd)(a, b)
    }], Wg.interpolateArray = Id;
    var bj = function () {
            return qb
        },
        cj = Wg.map({
            linear: bj,
            poly: Pd,
            quad: function () {
                return Md
            },
            cubic: function () {
                return Nd
            },
            sin: function () {
                return Qd
            },
            exp: function () {
                return Rd
            },
            circle: function () {
                return Sd
            },
            elastic: Td,
            back: Ud,
            bounce: function () {
                return Vd
            }
        }),
        dj = Wg.map({
            "in": qb,
            out: Kd,
            "in-out": Ld,
            "out-in": function (a) {
                return Ld(Kd(a))
            }
        });
    Wg.ease = function (a) {
        var b = a.indexOf("-"),
            c = b >= 0 ? a.substring(0, b) : a,
            d = b >= 0 ? a.substring(b + 1) : "in";
        return c = cj.get(c) || bj, d = dj.get(d) || qb, Jd(d(c.apply(null, Xg.call(arguments, 1))))
    }, Wg.interpolateHcl = Wd, Wg.interpolateHsl = Xd, Wg.interpolateLab = Yd, Wg.interpolateRound = Zd, Wg.transform = function (a) {
        var b = Zg.createElementNS(Wg.ns.prefix.svg, "g");
        return (Wg.transform = function (a) {
            if (null != a) {
                b.setAttribute("transform", a);
                var c = b.transform.baseVal.consolidate()
            }
            return new $d(c ? c.matrix : ej)
        })(a)
    }, $d.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var ej = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Wg.interpolateTransform = ce, Wg.layout = {}, Wg.layout.bundle = function () {
        return function (a) {
            for (var b = [], c = -1, d = a.length; ++c < d;) b.push(fe(a[c]));
            return b
        }
    }, Wg.layout.chord = function () {
        function a() {
            var a, j, l, m, n, o = {},
                p = [],
                q = Wg.range(f),
                r = [];
            for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                for (j = 0, n = -1; ++n < f;) j += e[m][n];
                p.push(j), r.push(Wg.range(f)), a += j
            }
            for (g && q.sort(function (a, b) {
                return g(p[a], p[b])
            }), h && r.forEach(function (a, b) {
                a.sort(function (a, c) {
                    return h(e[b][a], e[b][c])
                })
            }), a = (Bh - k * f) / a, j = 0, m = -1; ++m < f;) {
                for (l = j, n = -1; ++n < f;) {
                    var s = q[m],
                        t = r[s][n],
                        u = e[s][t],
                        v = j,
                        w = j += u * a;
                    o[s + "-" + t] = {
                        index: s,
                        subindex: t,
                        startAngle: v,
                        endAngle: w,
                        value: u
                    }
                }
                d[s] = {
                    index: s,
                    startAngle: l,
                    endAngle: j,
                    value: (j - l) / a
                }, j += k
            }
            for (m = -1; ++m < f;) for (n = m - 1; ++n < f;) {
                var x = o[m + "-" + n],
                    y = o[n + "-" + m];
                (x.value || y.value) && c.push(x.value < y.value ? {
                    source: y,
                    target: x
                } : {
                    source: x,
                    target: y
                })
            }
            i && b()
        }
        function b() {
            c.sort(function (a, b) {
                return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }
        var c, d, e, f, g, h, i, j = {},
            k = 0;
        return j.matrix = function (a) {
            return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
        }, j.padding = function (a) {
            return arguments.length ? (k = a, c = d = null, j) : k
        }, j.sortGroups = function (a) {
            return arguments.length ? (g = a, c = d = null, j) : g
        }, j.sortSubgroups = function (a) {
            return arguments.length ? (h = a, c = null, j) : h
        }, j.sortChords = function (a) {
            return arguments.length ? (i = a, c && b(), j) : i
        }, j.chords = function () {
            return c || a(), c
        }, j.groups = function () {
            return d || a(), d
        }, j
    }, Wg.layout.force = function () {
        function a(a) {
            return function (b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x,
                        g = b.cy - a.y,
                        h = 1 / Math.sqrt(f * f + g * g);
                    if (p > (e - c) * h) {
                        var i = b.charge * h * h;
                        return a.px -= f * i, a.py -= g * i, !0
                    }
                    if (b.point && isFinite(h)) {
                        var i = b.pointCharge * h * h;
                        a.px -= f * i, a.py -= g * i
                    }
                }
                return !b.charge
            }
        }
        function b(a) {
            a.px = Wg.event.x, a.py = Wg.event.y, h.resume()
        }
        var c, d, e, f, g, h = {},
            i = Wg.dispatch("start", "tick", "end"),
            j = [1, 1],
            k = .9,
            l = fj,
            m = gj,
            n = -30,
            o = .1,
            p = .8,
            q = [],
            r = [];
        return h.tick = function () {
            if ((d *= .99) < .005) return i.end({
                type: "end",
                alpha: d = 0
            }), !0;
            var b, c, h, l, m, p, s, t, u, v = q.length,
                w = r.length;
            for (c = 0; w > c; ++c) h = r[c], l = h.source, m = h.target, t = m.x - l.x, u = m.y - l.y, (p = t * t + u * u) && (p = d * f[c] * ((p = Math.sqrt(p)) - e[c]) / p, t *= p, u *= p, m.x -= t * (s = l.weight / (m.weight + l.weight)), m.y -= u * s, l.x += t * (s = 1 - s), l.y += u * s);
            if ((s = d * o) && (t = j[0] / 2, u = j[1] / 2, c = -1, s)) for (; ++c < v;) h = q[c], h.x += (t - h.x) * s, h.y += (u - h.y) * s;
            if (n) for (me(b = Wg.geom.quadtree(q), d, g), c = -1; ++c < v;)(h = q[c]).fixed || b.visit(a(h));
            for (c = -1; ++c < v;) h = q[c], h.fixed ? (h.x = h.px, h.y = h.py) : (h.x -= (h.px - (h.px = h.x)) * k, h.y -= (h.py - (h.py = h.y)) * k);
            i.tick({
                type: "tick",
                alpha: d
            })
        }, h.nodes = function (a) {
            return arguments.length ? (q = a, h) : q
        }, h.links = function (a) {
            return arguments.length ? (r = a, h) : r
        }, h.size = function (a) {
            return arguments.length ? (j = a, h) : j
        }, h.linkDistance = function (a) {
            return arguments.length ? (l = "function" == typeof a ? a : +a, h) : l
        }, h.distance = h.linkDistance, h.linkStrength = function (a) {
            return arguments.length ? (m = "function" == typeof a ? a : +a, h) : m
        }, h.friction = function (a) {
            return arguments.length ? (k = +a, h) : k
        }, h.charge = function (a) {
            return arguments.length ? (n = "function" == typeof a ? a : +a, h) : n
        }, h.gravity = function (a) {
            return arguments.length ? (o = +a, h) : o
        }, h.theta = function (a) {
            return arguments.length ? (p = +a, h) : p
        }, h.alpha = function (a) {
            return arguments.length ? (a = +a, d ? d = a > 0 ? a : 0 : a > 0 && (i.start({
                type: "start",
                alpha: d = a
            }), Wg.timer(h.tick)), h) : d
        }, h.start = function () {
            function a(a, d) {
                if (!c) {
                    for (c = new Array(i), h = 0; i > h; ++h) c[h] = [];
                    for (h = 0; j > h; ++h) {
                        var e = r[h];
                        c[e.source.index].push(e.target), c[e.target.index].push(e.source)
                    }
                }
                for (var f, g = c[b], h = -1, j = g.length; ++h < j;) if (!isNaN(f = g[h][a])) return f;
                return Math.random() * d
            }
            var b, c, d, i = q.length,
                k = r.length,
                o = j[0],
                p = j[1];
            for (b = 0; i > b; ++b)(d = q[b]).index = b, d.weight = 0;
            for (b = 0; k > b; ++b) d = r[b], "number" == typeof d.source && (d.source = q[d.source]), "number" == typeof d.target && (d.target = q[d.target]), ++d.source.weight, ++d.target.weight;
            for (b = 0; i > b; ++b) d = q[b], isNaN(d.x) && (d.x = a("x", o)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
            if (e = [], "function" == typeof l) for (b = 0; k > b; ++b) e[b] = +l.call(this, r[b], b);
            else for (b = 0; k > b; ++b) e[b] = l;
            if (f = [], "function" == typeof m) for (b = 0; k > b; ++b) f[b] = +m.call(this, r[b], b);
            else for (b = 0; k > b; ++b) f[b] = m;
            if (g = [], "function" == typeof n) for (b = 0; i > b; ++b) g[b] = +n.call(this, q[b], b);
            else for (b = 0; i > b; ++b) g[b] = n;
            return h.resume()
        }, h.resume = function () {
            return h.alpha(.1)
        }, h.stop = function () {
            return h.alpha(0)
        }, h.drag = function () {
            return c || (c = Wg.behavior.drag().origin(qb).on("dragstart.force", ie).on("drag.force", b).on("dragend.force", je)), arguments.length ? (this.on("mouseover.force", ke).on("mouseout.force", le).call(c), void 0) : c
        }, Wg.rebind(h, i, "on")
    };
    var fj = 20,
        gj = 1;
    Wg.layout.hierarchy = function () {
        function a(b, g, h) {
            var i = e.call(c, b, g);
            if (b.depth = g, h.push(b), i && (j = i.length)) {
                for (var j, k, l = -1, m = b.children = new Array(j), n = 0, o = g + 1; ++l < j;) k = m[l] = a(i[l], o, h), k.parent = b, n += k.value;
                d && m.sort(d), f && (b.value = n)
            } else delete b.children, f && (b.value = +f.call(c, b, g) || 0);
            return b
        }
        function b(a, d) {
            var e = a.children,
                g = 0;
            if (e && (h = e.length)) for (var h, i = -1, j = d + 1; ++i < h;) g += b(e[i], j);
            else f && (g = +f.call(c, a, d) || 0);
            return f && (a.value = g), g
        }
        function c(b) {
            var c = [];
            return a(b, 0, c), c
        }
        var d = qe,
            e = oe,
            f = pe;
        return c.sort = function (a) {
            return arguments.length ? (d = a, c) : d
        }, c.children = function (a) {
            return arguments.length ? (e = a, c) : e
        }, c.value = function (a) {
            return arguments.length ? (f = a, c) : f
        }, c.revalue = function (a) {
            return b(a, 0), a
        }, c
    }, Wg.layout.partition = function () {
        function a(b, c, d, e) {
            var f = b.children;
            if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                var g, h, i, j = -1;
                for (d = b.value ? d / b.value : 0; ++j < g;) a(h = f[j], c, i = h.value * d, e), c += i
            }
        }
        function b(a) {
            var c = a.children,
                d = 0;
            if (c && (e = c.length)) for (var e, f = -1; ++f < e;) d = Math.max(d, b(c[f]));
            return 1 + d
        }
        function c(c, f) {
            var g = d.call(this, c, f);
            return a(g[0], 0, e[0], e[1] / b(g[0])), g
        }
        var d = Wg.layout.hierarchy(),
            e = [1, 1];
        return c.size = function (a) {
            return arguments.length ? (e = a, c) : e
        }, ne(c, d)
    }, Wg.layout.pie = function () {
        function a(f) {
            var g = f.map(function (c, d) {
                return +b.call(a, c, d)
            }),
                h = +("function" == typeof d ? d.apply(this, arguments) : d),
                i = (("function" == typeof e ? e.apply(this, arguments) : e) - h) / Wg.sum(g),
                j = Wg.range(f.length);
            null != c && j.sort(c === hj ?
            function (a, b) {
                return g[b] - g[a]
            } : function (a, b) {
                return c(f[a], f[b])
            });
            var k = [];
            return j.forEach(function (a) {
                var b;
                k[a] = {
                    data: f[a],
                    value: b = g[a],
                    startAngle: h,
                    endAngle: h += b * i
                }
            }), k
        }
        var b = Number,
            c = hj,
            d = 0,
            e = Bh;
        return a.value = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.sort = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.startAngle = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a.endAngle = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a
    };
    var hj = {};
    Wg.layout.stack = function () {
        function a(h, i) {
            var j = h.map(function (c, d) {
                return b.call(a, c, d)
            }),
                k = j.map(function (b) {
                    return b.map(function (b, c) {
                        return [f.call(a, b, c), g.call(a, b, c)]
                    })
                }),
                l = c.call(a, k, i);
            j = Wg.permute(j, l), k = Wg.permute(k, l);
            var m, n, o, p = d.call(a, k, i),
                q = j.length,
                r = j[0].length;
            for (n = 0; r > n; ++n) for (e.call(a, j[0][n], o = p[n], k[0][n][1]), m = 1; q > m; ++m) e.call(a, j[m][n], o += k[m - 1][n][1], k[m][n][1]);
            return h
        }
        var b = qb,
            c = ve,
            d = we,
            e = ue,
            f = se,
            g = te;
        return a.values = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.order = function (b) {
            return arguments.length ? (c = "function" == typeof b ? b : ij.get(b) || ve, a) : c
        }, a.offset = function (b) {
            return arguments.length ? (d = "function" == typeof b ? b : jj.get(b) || we, a) : d
        }, a.x = function (b) {
            return arguments.length ? (f = b, a) : f
        }, a.y = function (b) {
            return arguments.length ? (g = b, a) : g
        }, a.out = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a
    };
    var ij = Wg.map({
        "inside-out": function (a) {
            var b, c, d = a.length,
                e = a.map(xe),
                f = a.map(ye),
                g = Wg.range(d).sort(function (a, b) {
                    return e[a] - e[b]
                }),
                h = 0,
                i = 0,
                j = [],
                k = [];
            for (b = 0; d > b; ++b) c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
            return k.reverse().concat(j)
        },
        reverse: function (a) {
            return Wg.range(a.length).reverse()
        },
        "default": ve
    }),
        jj = Wg.map({
            silhouette: function (a) {
                var b, c, d, e = a.length,
                    f = a[0].length,
                    g = [],
                    h = 0,
                    i = [];
                for (c = 0; f > c; ++c) {
                    for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                    d > h && (h = d), g.push(d)
                }
                for (c = 0; f > c; ++c) i[c] = (h - g[c]) / 2;
                return i
            },
            wiggle: function (a) {
                var b, c, d, e, f, g, h, i, j, k = a.length,
                    l = a[0],
                    m = l.length,
                    n = [];
                for (n[0] = i = j = 0, c = 1; m > c; ++c) {
                    for (b = 0, e = 0; k > b; ++b) e += a[b][c][1];
                    for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                        for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d) g += (a[d][c][1] - a[d][c - 1][1]) / h;
                        f += g * a[b][c][1]
                    }
                    n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
                }
                for (c = 0; m > c; ++c) n[c] -= j;
                return n
            },
            expand: function (a) {
                var b, c, d, e = a.length,
                    f = a[0].length,
                    g = 1 / e,
                    h = [];
                for (c = 0; f > c; ++c) {
                    for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                    if (d) for (b = 0; e > b; b++) a[b][c][1] /= d;
                    else for (b = 0; e > b; b++) a[b][c][1] = g
                }
                for (c = 0; f > c; ++c) h[c] = 0;
                return h
            },
            zero: we
        });
    Wg.layout.histogram = function () {
        function a(a, f) {
            for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;) g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
            if (n > 0) for (f = -1; ++f < m;) h = j[f], h >= k[0] && h <= k[1] && (g = i[Wg.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
            return i
        }
        var b = !0,
            c = Number,
            d = Ce,
            e = Ae;
        return a.value = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.range = function (b) {
            return arguments.length ? (d = pb(b), a) : d
        }, a.bins = function (b) {
            return arguments.length ? (e = "number" == typeof b ?
            function (a) {
                return Be(a, b)
            } : pb(b), a) : e
        }, a.frequency = function (c) {
            return arguments.length ? (b = !! c, a) : b
        }, a
    }, Wg.layout.tree = function () {
        function a(a, f) {
            function g(a, b) {
                var d = a.children,
                    e = a._tree;
                if (d && (f = d.length)) {
                    for (var f, h, j, k = d[0], l = k, m = -1; ++m < f;) j = d[m], g(j, h), l = i(j, h, l), h = j;
                    Le(a);
                    var n = .5 * (k._tree.prelim + j._tree.prelim);
                    b ? (e.prelim = b._tree.prelim + c(a, b), e.mod = e.prelim - n) : e.prelim = n
                } else b && (e.prelim = b._tree.prelim + c(a, b))
            }
            function h(a, b) {
                a.x = a._tree.prelim + b;
                var c = a.children;
                if (c && (d = c.length)) {
                    var d, e = -1;
                    for (b += a._tree.mod; ++e < d;) h(c[e], b)
                }
            }
            function i(a, b, d) {
                if (b) {
                    for (var e, f = a, g = a, h = b, i = a.parent.children[0], j = f._tree.mod, k = g._tree.mod, l = h._tree.mod, m = i._tree.mod; h = Fe(h), f = Ee(f), h && f;) i = Ee(i), g = Fe(g), g._tree.ancestor = a, e = h._tree.prelim + l - f._tree.prelim - j + c(h, f), e > 0 && (Me(Ne(h, a, d), a, e), j += e, k += e), l += h._tree.mod, j += f._tree.mod, m += i._tree.mod, k += g._tree.mod;
                    h && !Fe(g) && (g._tree.thread = h, g._tree.mod += l - k), f && !Ee(i) && (i._tree.thread = f, i._tree.mod += j - m, d = a)
                }
                return d
            }
            var j = b.call(this, a, f),
                k = j[0];
            Ke(k, function (a, b) {
                a._tree = {
                    ancestor: a,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: b ? b._tree.number + 1 : 0
                }
            }), g(k), h(k, -k._tree.prelim);
            var l = Ge(k, Ie),
                m = Ge(k, He),
                n = Ge(k, Je),
                o = l.x - c(l, m) / 2,
                p = m.x + c(m, l) / 2,
                q = n.depth || 1;
            return Ke(k, e ?
            function (a) {
                a.x *= d[0], a.y = a.depth * d[1], delete a._tree
            } : function (a) {
                a.x = (a.x - o) / (p - o) * d[0], a.y = a.depth / q * d[1], delete a._tree
            }), j
        }
        var b = Wg.layout.hierarchy().sort(null).value(null),
            c = De,
            d = [1, 1],
            e = !1;
        return a.separation = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.size = function (b) {
            return arguments.length ? (e = null == (d = b), a) : e ? null : d
        }, a.nodeSize = function (b) {
            return arguments.length ? (e = null != (d = b), a) : e ? d : null
        }, ne(a, b)
    }, Wg.layout.pack = function () {
        function a(a, f) {
            var g = c.call(this, a, f),
                h = g[0],
                i = e[0],
                j = e[1],
                k = null == b ? Math.sqrt : "function" == typeof b ? b : function () {
                    return b
                };
            if (h.x = h.y = 0, Ke(h, function (a) {
                a.r = +k(a.value)
            }), Ke(h, Se), d) {
                var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                Ke(h, function (a) {
                    a.r += l
                }), Ke(h, Se), Ke(h, function (a) {
                    a.r -= l
                })
            }
            return Ve(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
        }
        var b, c = Wg.layout.hierarchy().sort(Oe),
            d = 0,
            e = [1, 1];
        return a.size = function (b) {
            return arguments.length ? (e = b, a) : e
        }, a.radius = function (c) {
            return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
        }, a.padding = function (b) {
            return arguments.length ? (d = +b, a) : d
        }, ne(a, c)
    }, Wg.layout.cluster = function () {
        function a(a, f) {
            var g, h = b.call(this, a, f),
                i = h[0],
                j = 0;
            Ke(i, function (a) {
                var b = a.children;
                b && b.length ? (a.x = Ye(b), a.y = Xe(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
            });
            var k = Ze(i),
                l = $e(i),
                m = k.x - c(k, l) / 2,
                n = l.x + c(l, k) / 2;
            return Ke(i, e ?
            function (a) {
                a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
            } : function (a) {
                a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
            }), h
        }
        var b = Wg.layout.hierarchy().sort(null).value(null),
            c = De,
            d = [1, 1],
            e = !1;
        return a.separation = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.size = function (b) {
            return arguments.length ? (e = null == (d = b), a) : e ? null : d
        }, a.nodeSize = function (b) {
            return arguments.length ? (e = null != (d = b), a) : e ? d : null
        }, ne(a, b)
    }, Wg.layout.treemap = function () {
        function a(a, b) {
            for (var c, d, e = -1, f = a.length; ++e < f;) d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
        }
        function b(c) {
            var f = c.children;
            if (f && f.length) {
                var g, h, i, j = l(c),
                    k = [],
                    m = f.slice(),
                    o = 1 / 0,
                    p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                for (a(m, j.dx * j.dy / c.value), k.area = 0;
                (i = m.length) > 0;) k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
            }
        }
        function c(b) {
            var d = b.children;
            if (d && d.length) {
                var f, g = l(b),
                    h = d.slice(),
                    i = [];
                for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();) i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                d.forEach(c)
            }
        }
        function d(a, b) {
            for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
            return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
        }
        function e(a, b, c, d) {
            var e, f = -1,
                g = a.length,
                h = c.x,
                j = c.y,
                k = b ? i(a.area / b) : 0;
            if (b == c.dx) {
                for ((d || k > c.dy) && (k = c.dy); ++f < g;) e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
            } else {
                for ((d || k > c.dx) && (k = c.dx); ++f < g;) e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
            }
        }
        function f(d) {
            var e = g || h(d),
                f = e[0];
            return f.x = 0, f.y = 0, f.dx = j[0], f.dy = j[1], g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
        }
        var g, h = Wg.layout.hierarchy(),
            i = Math.round,
            j = [1, 1],
            k = null,
            l = _e,
            m = !1,
            n = "squarify",
            o = .5 * (1 + Math.sqrt(5));
        return f.size = function (a) {
            return arguments.length ? (j = a, f) : j
        }, f.padding = function (a) {
            function b(b) {
                var c = a.call(f, b, b.depth);
                return null == c ? _e(b) : af(b, "number" == typeof c ? [c, c, c, c] : c)
            }
            function c(b) {
                return af(b, a)
            }
            if (!arguments.length) return k;
            var d;
            return l = null == (k = a) ? _e : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
        }, f.round = function (a) {
            return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
        }, f.sticky = function (a) {
            return arguments.length ? (m = a, g = null, f) : m
        }, f.ratio = function (a) {
            return arguments.length ? (o = a, f) : o
        }, f.mode = function (a) {
            return arguments.length ? (n = a + "", f) : n
        }, ne(f, h)
    }, Wg.random = {
        normal: function (a, b) {
            var c = arguments.length;
            return 2 > c && (b = 1), 1 > c && (a = 0), function () {
                var c, d, e;
                do c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d;
                while (!e || e > 1);
                return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
            }
        },
        logNormal: function () {
            var a = Wg.random.normal.apply(Wg, arguments);
            return function () {
                return Math.exp(a())
            }
        },
        bates: function (a) {
            var b = Wg.random.irwinHall(a);
            return function () {
                return b() / a
            }
        },
        irwinHall: function (a) {
            return function () {
                for (var b = 0, c = 0; a > c; c++) b += Math.random();
                return b
            }
        }
    }, Wg.scale = {};
    var kj = {
        floor: qb,
        ceil: qb
    };
    Wg.scale.linear = function () {
        return hf([0, 1], [0, 1], Hd, !1)
    };
    var lj = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Wg.scale.log = function () {
        return qf(Wg.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var mj = Wg.format(".0e"),
        nj = {
            floor: function (a) {
                return -Math.ceil(-a)
            },
            ceil: function (a) {
                return -Math.floor(-a)
            }
        };
    Wg.scale.pow = function () {
        return rf(Wg.scale.linear(), 1, [0, 1])
    }, Wg.scale.sqrt = function () {
        return Wg.scale.pow().exponent(.5)
    }, Wg.scale.ordinal = function () {
        return tf([], {
            t: "range",
            a: [
                []
            ]
        })
    }, Wg.scale.category10 = function () {
        return Wg.scale.ordinal().range(oj)
    }, Wg.scale.category20 = function () {
        return Wg.scale.ordinal().range(pj)
    }, Wg.scale.category20b = function () {
        return Wg.scale.ordinal().range(qj)
    }, Wg.scale.category20c = function () {
        return Wg.scale.ordinal().range(rj)
    };
    var oj = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(gb),
        pj = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(gb),
        qj = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(gb),
        rj = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(gb);
    Wg.scale.quantile = function () {
        return uf([], [])
    }, Wg.scale.quantize = function () {
        return vf(0, 1, [0, 1])
    }, Wg.scale.threshold = function () {
        return wf([.5], [0, 1])
    }, Wg.scale.identity = function () {
        return xf([0, 1])
    }, Wg.svg = {}, Wg.svg.arc = function () {
        function a() {
            var a = b.apply(this, arguments),
                f = c.apply(this, arguments),
                g = d.apply(this, arguments) + sj,
                h = e.apply(this, arguments) + sj,
                i = (g > h && (i = g, g = h, h = i), h - g),
                j = Ah > i ? "0" : "1",
                k = Math.cos(g),
                l = Math.sin(g),
                m = Math.cos(h),
                n = Math.sin(h);
            return i >= tj ? a ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + a + "A" + a + "," + a + " 0 1,0 0," + -a + "A" + a + "," + a + " 0 1,0 0," + a + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : a ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + a * m + "," + a * n + "A" + a + "," + a + " 0 " + j + ",0 " + a * k + "," + a * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0" + "Z"
        }
        var b = yf,
            c = zf,
            d = Af,
            e = Bf;
        return a.innerRadius = function (c) {
            return arguments.length ? (b = pb(c), a) : b
        }, a.outerRadius = function (b) {
            return arguments.length ? (c = pb(b), a) : c
        }, a.startAngle = function (b) {
            return arguments.length ? (d = pb(b), a) : d
        }, a.endAngle = function (b) {
            return arguments.length ? (e = pb(b), a) : e
        }, a.centroid = function () {
            var a = (b.apply(this, arguments) + c.apply(this, arguments)) / 2,
                f = (d.apply(this, arguments) + e.apply(this, arguments)) / 2 + sj;
            return [Math.cos(f) * a, Math.sin(f) * a]
        }, a
    };
    var sj = -Ch,
        tj = Bh - Dh;
    Wg.svg.line = function () {
        return Cf(qb)
    };
    var uj = Wg.map({
        linear: Df,
        "linear-closed": Ef,
        step: Ff,
        "step-before": Gf,
        "step-after": Hf,
        basis: Nf,
        "basis-open": Of,
        "basis-closed": Pf,
        bundle: Qf,
        cardinal: Kf,
        "cardinal-open": If,
        "cardinal-closed": Jf,
        monotone: Wf
    });
    uj.forEach(function (a, b) {
        b.key = a, b.closed = /-closed$/.test(a)
    });
    var vj = [0, 2 / 3, 1 / 3, 0],
        wj = [0, 1 / 3, 2 / 3, 0],
        xj = [0, 1 / 6, 2 / 3, 1 / 6];
    Wg.svg.line.radial = function () {
        var a = Cf(Xf);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, Gf.reverse = Hf, Hf.reverse = Gf, Wg.svg.area = function () {
        return Yf(qb)
    }, Wg.svg.area.radial = function () {
        var a = Yf(Xf);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, Wg.svg.chord = function () {
        function a(a, h) {
            var i = b(this, f, a, h),
                j = b(this, g, a, h);
            return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
        }
        function b(a, b, c, d) {
            var e = b.call(a, c, d),
                f = h.call(a, e, d),
                g = i.call(a, e, d) + sj,
                k = j.call(a, e, d) + sj;
            return {
                r: f,
                a0: g,
                a1: k,
                p0: [f * Math.cos(g), f * Math.sin(g)],
                p1: [f * Math.cos(k), f * Math.sin(k)]
            }
        }
        function c(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }
        function d(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > Ah) + ",1 " + b
        }
        function e(a, b, c, d) {
            return "Q 0,0 " + d
        }
        var f = Jc,
            g = Kc,
            h = Zf,
            i = Af,
            j = Bf;
        return a.radius = function (b) {
            return arguments.length ? (h = pb(b), a) : h
        }, a.source = function (b) {
            return arguments.length ? (f = pb(b), a) : f
        }, a.target = function (b) {
            return arguments.length ? (g = pb(b), a) : g
        }, a.startAngle = function (b) {
            return arguments.length ? (i = pb(b), a) : i
        }, a.endAngle = function (b) {
            return arguments.length ? (j = pb(b), a) : j
        }, a
    }, Wg.svg.diagonal = function () {
        function a(a, e) {
            var f = b.call(this, a, e),
                g = c.call(this, a, e),
                h = (f.y + g.y) / 2,
                i = [f,
                {
                    x: f.x,
                    y: h
                }, {
                    x: g.x,
                    y: h
                },
                g];
            return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        var b = Jc,
            c = Kc,
            d = $f;
        return a.source = function (c) {
            return arguments.length ? (b = pb(c), a) : b
        }, a.target = function (b) {
            return arguments.length ? (c = pb(b), a) : c
        }, a.projection = function (b) {
            return arguments.length ? (d = b, a) : d
        }, a
    }, Wg.svg.diagonal.radial = function () {
        var a = Wg.svg.diagonal(),
            b = $f,
            c = a.projection;
        return a.projection = function (a) {
            return arguments.length ? c(_f(b = a)) : b
        }, a
    }, Wg.svg.symbol = function () {
        function a(a, d) {
            return (yj.get(b.call(this, a, d)) || cg)(c.call(this, a, d))
        }
        var b = bg,
            c = ag;
        return a.type = function (c) {
            return arguments.length ? (b = pb(c), a) : b
        }, a.size = function (b) {
            return arguments.length ? (c = pb(b), a) : c
        }, a
    };
    var yj = Wg.map({
        circle: cg,
        cross: function (a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        },
        diamond: function (a) {
            var b = Math.sqrt(a / (2 * Cj)),
                c = b * Cj;
            return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z"
        },
        square: function (a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        },
        "triangle-down": function (a) {
            var b = Math.sqrt(a / Bj),
                c = b * Bj / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        },
        "triangle-up": function (a) {
            var b = Math.sqrt(a / Bj),
                c = b * Bj / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    });
    Wg.svg.symbolTypes = yj.keys();
    var zj, Aj, Bj = Math.sqrt(3),
        Cj = Math.tan(30 * Fh),
        Dj = [],
        Ej = 0;
    Dj.call = sh.call, Dj.empty = sh.empty, Dj.node = sh.node, Dj.size = sh.size, Wg.transition = function (a) {
        return arguments.length ? zj ? a.transition() : a : vh.transition()
    }, Wg.transition.prototype = Dj, Dj.select = function (a) {
        var b, c, d, e = this.id,
            f = [];
        a = p(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []);
            for (var i = this[g], j = -1, k = i.length; ++j < k;)(d = i[j]) && (c = a.call(d, d.__data__, j, g)) ? ("__data__" in d && (c.__data__ = d.__data__), gg(c, j, e, d.__transition__[e]), b.push(c)) : b.push(null)
        }
        return dg(f, e)
    }, Dj.selectAll = function (a) {
        var b, c, d, e, f, g = this.id,
            h = [];
        a = q(a);
        for (var i = -1, j = this.length; ++i < j;) for (var k = this[i], l = -1, m = k.length; ++l < m;) if (d = k[l]) {
            f = d.__transition__[g], c = a.call(d, d.__data__, l, i), h.push(b = []);
            for (var n = -1, o = c.length; ++n < o;)(e = c[n]) && gg(e, n, g, f), b.push(e)
        }
        return dg(h, g)
    }, Dj.filter = function (a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = B(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []);
            for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return dg(e, this.id)
    }, Dj.tween = function (a, b) {
        var c = this.id;
        return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : D(this, null == b ?
        function (b) {
            b.__transition__[c].tween.remove(a)
        } : function (d) {
            d.__transition__[c].tween.set(a, b)
        })
    }, Dj.attr = function (a, b) {
        function c() {
            this.removeAttribute(h)
        }
        function d() {
            this.removeAttributeNS(h.space, h.local)
        }
        function e(a) {
            return null == a ? c : (a += "", function () {
                var b, c = this.getAttribute(h);
                return c !== a && (b = g(c, a), function (a) {
                    this.setAttribute(h, b(a))
                })
            })
        }
        function f(a) {
            return null == a ? d : (a += "", function () {
                var b, c = this.getAttributeNS(h.space, h.local);
                return c !== a && (b = g(c, a), function (a) {
                    this.setAttributeNS(h.space, h.local, b(a))
                })
            })
        }
        if (arguments.length < 2) {
            for (b in a) this.attr(b, a[b]);
            return this
        }
        var g = "transform" == a ? ce : Hd,
            h = Wg.ns.qualify(a);
        return eg(this, "attr." + a, b, h.local ? f : e)
    }, Dj.attrTween = function (a, b) {
        function c(a, c) {
            var d = b.call(this, a, c, this.getAttribute(e));
            return d &&
            function (a) {
                this.setAttribute(e, d(a))
            }
        }
        function d(a, c) {
            var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
            return d &&
            function (a) {
                this.setAttributeNS(e.space, e.local, d(a))
            }
        }
        var e = Wg.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c)
    }, Dj.style = function (a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }
        function e(b) {
            return null == b ? d : (b += "", function () {
                var d, e = _g.getComputedStyle(this, null).getPropertyValue(a);
                return e !== b && (d = Hd(e, b), function (b) {
                    this.style.setProperty(a, d(b), c)
                })
            })
        }
        var f = arguments.length;
        if (3 > f) {
            if ("string" != typeof a) {
                2 > f && (b = "");
                for (c in a) this.style(c, a[c], b);
                return this
            }
            c = ""
        }
        return eg(this, "style." + a, b, e)
    }, Dj.styleTween = function (a, b, c) {
        function d(d, e) {
            var f = b.call(this, d, e, _g.getComputedStyle(this, null).getPropertyValue(a));
            return f &&
            function (b) {
                this.style.setProperty(a, f(b), c)
            }
        }
        return arguments.length < 3 && (c = ""), this.tween("style." + a, d)
    }, Dj.text = function (a) {
        return eg(this, "text", a, fg)
    }, Dj.remove = function () {
        return this.each("end.transition", function () {
            var a;
            this.__transition__.count < 2 && (a = this.parentNode) && a.removeChild(this)
        })
    }, Dj.ease = function (a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].ease : ("function" != typeof a && (a = Wg.ease.apply(Wg, arguments)), D(this, function (c) {
            c.__transition__[b].ease = a
        }))
    }, Dj.delay = function (a) {
        var b = this.id;
        return D(this, "function" == typeof a ?
        function (c, d, e) {
            c.__transition__[b].delay = +a.call(c, c.__data__, d, e)
        } : (a = +a, function (c) {
            c.__transition__[b].delay = a
        }))
    }, Dj.duration = function (a) {
        var b = this.id;
        return D(this, "function" == typeof a ?
        function (c, d, e) {
            c.__transition__[b].duration = Math.max(1, a.call(c, c.__data__, d, e))
        } : (a = Math.max(1, a), function (c) {
            c.__transition__[b].duration = a
        }))
    }, Dj.each = function (a, b) {
        var c = this.id;
        if (arguments.length < 2) {
            var d = Aj,
                e = zj;
            zj = c, D(this, function (b, d, e) {
                Aj = b.__transition__[c], a.call(b, b.__data__, d, e)
            }), Aj = d, zj = e
        } else D(this, function (d) {
            var e = d.__transition__[c];
            (e.event || (e.event = Wg.dispatch("start", "end"))).on(a, b)
        });
        return this
    }, Dj.transition = function () {
        for (var a, b, c, d, e = this.id, f = ++Ej, g = [], h = 0, i = this.length; i > h; h++) {
            g.push(a = []);
            for (var b = this[h], j = 0, k = b.length; k > j; j++)(c = b[j]) && (d = Object.create(c.__transition__[e]), d.delay += d.duration, gg(c, j, f, d)), a.push(c)
        }
        return dg(g, f)
    }, Wg.svg.axis = function () {
        function a(a) {
            a.each(function () {
                var a, j = Wg.select(this),
                    k = this.__chart__ || c,
                    l = this.__chart__ = c.copy(),
                    m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i,
                    n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : qb : b,
                    o = j.selectAll(".tick").data(m, l),
                    p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Dh),
                    q = Wg.transition(o.exit()).style("opacity", Dh).remove(),
                    r = Wg.transition(o).style("opacity", 1),
                    s = cf(l),
                    t = j.selectAll(".domain").data([0]),
                    u = (t.enter().append("path").attr("class", "domain"), Wg.transition(t));
                p.append("line"), p.append("text");
                var v = p.select("line"),
                    w = r.select("line"),
                    x = o.select("text").text(n),
                    y = p.select("text"),
                    z = r.select("text");
                switch (d) {
                case "bottom":
                    a = hg, v.attr("y2", e), y.attr("y", Math.max(e, 0) + g), w.attr("x2", 0).attr("y2", e), z.attr("x", 0).attr("y", Math.max(e, 0) + g), x.attr("dy", ".71em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + f + "V0H" + s[1] + "V" + f);
                    break;
                case "top":
                    a = hg, v.attr("y2", -e), y.attr("y", -(Math.max(e, 0) + g)), w.attr("x2", 0).attr("y2", -e), z.attr("x", 0).attr("y", -(Math.max(e, 0) + g)), x.attr("dy", "0em").style("text-anchor", "middle"), u.attr("d", "M" + s[0] + "," + -f + "V0H" + s[1] + "V" + -f);
                    break;
                case "left":
                    a = ig, v.attr("x2", -e), y.attr("x", -(Math.max(e, 0) + g)), w.attr("x2", -e).attr("y2", 0), z.attr("x", -(Math.max(e, 0) + g)).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "end"), u.attr("d", "M" + -f + "," + s[0] + "H0V" + s[1] + "H" + -f);
                    break;
                case "right":
                    a = ig, v.attr("x2", e), y.attr("x", Math.max(e, 0) + g), w.attr("x2", e).attr("y2", 0), z.attr("x", Math.max(e, 0) + g).attr("y", 0), x.attr("dy", ".32em").style("text-anchor", "start"), u.attr("d", "M" + f + "," + s[0] + "H0V" + s[1] + "H" + f)
                }
                if (l.rangeBand) {
                    var A = l,
                        B = A.rangeBand() / 2;
                    k = l = function (a) {
                        return A(a) + B
                    }
                } else k.rangeBand ? k = l : q.call(a, l);
                p.call(a, k), r.call(a, l)
            })
        }
        var b, c = Wg.scale.linear(),
            d = Fj,
            e = 6,
            f = 6,
            g = 3,
            h = [10],
            i = null;
        return a.scale = function (b) {
            return arguments.length ? (c = b, a) : c
        }, a.orient = function (b) {
            return arguments.length ? (d = b in Gj ? b + "" : Fj, a) : d
        }, a.ticks = function () {
            return arguments.length ? (h = arguments, a) : h
        }, a.tickValues = function (b) {
            return arguments.length ? (i = b, a) : i
        }, a.tickFormat = function (c) {
            return arguments.length ? (b = c, a) : b
        }, a.tickSize = function (b) {
            var c = arguments.length;
            return c ? (e = +b, f = +arguments[c - 1], a) : e
        }, a.innerTickSize = function (b) {
            return arguments.length ? (e = +b, a) : e
        }, a.outerTickSize = function (b) {
            return arguments.length ? (f = +b, a) : f
        }, a.tickPadding = function (b) {
            return arguments.length ? (g = +b, a) : g
        }, a.tickSubdivide = function () {
            return arguments.length && a
        }, a
    };
    var Fj = "bottom",
        Gj = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    Wg.svg.brush = function () {
        function a(f) {
            f.each(function () {
                var f = Wg.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", e).on("touchstart.brush", e),
                    g = f.selectAll(".background").data([0]);
                g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var h = f.selectAll(".resize").data(q, qb);
                h.exit().remove(), h.enter().append("g").attr("class", function (a) {
                    return "resize " + a
                }).style("cursor", function (a) {
                    return Hj[a]
                }).append("rect").attr("x", function (a) {
                    return /[ew]$/.test(a) ? -3 : null
                }).attr("y", function (a) {
                    return /^[ns]/.test(a) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                var k, l = Wg.transition(f),
                    m = Wg.transition(g);
                i && (k = cf(i), m.attr("x", k[0]).attr("width", k[1] - k[0]), c(l)), j && (k = cf(j), m.attr("y", k[0]).attr("height", k[1] - k[0]), d(l)), b(l)
            })
        }
        function b(a) {
            a.selectAll(".resize").attr("transform", function (a) {
                return "translate(" + k[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
            })
        }
        function c(a) {
            a.select(".extent").attr("x", k[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", k[1] - k[0])
        }
        function d(a) {
            a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
        }
        function e() {
            function e() {
                32 == Wg.event.keyCode && (C || (t = null, E[0] -= k[1], E[1] -= m[1], C = 2), l())
            }
            function n() {
                32 == Wg.event.keyCode && 2 == C && (E[0] += k[1], E[1] += m[1], C = 0, l())
            }
            function q() {
                var a = Wg.mouse(v),
                    e = !1;
                u && (a[0] += u[0], a[1] += u[1]), C || (Wg.event.altKey ? (t || (t = [(k[0] + k[1]) / 2, (m[0] + m[1]) / 2]), E[0] = k[+(a[0] < t[0])], E[1] = m[+(a[1] < t[1])]) : t = null), A && r(a, i, 0) && (c(y), e = !0), B && r(a, j, 1) && (d(y), e = !0), e && (b(y), x({
                    type: "brush",
                    mode: C ? "move" : "resize"
                }))
            }
            function r(a, b, c) {
                var d, e, h = cf(b),
                    i = h[0],
                    j = h[1],
                    l = E[c],
                    n = c ? m : k,
                    q = n[1] - n[0];
                return C && (i -= l, j -= q + l), d = (c ? p : o) ? Math.max(i, Math.min(j, a[c])) : a[c], C ? e = (d += l) + q : (t && (l = Math.max(i, Math.min(j, 2 * t[c] - d))), d > l ? (e = d, d = l) : e = l), n[0] != d || n[1] != e ? (c ? g = null : f = null, n[0] = d, n[1] = e, !0) : void 0
            }
            function s() {
                q(), y.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), Wg.select("body").style("cursor", null), F.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), D(), x({
                    type: "brushend"
                })
            }
            var t, u, v = this,
                w = Wg.select(Wg.event.target),
                x = h.of(v, arguments),
                y = Wg.select(v),
                z = w.datum(),
                A = !/^(n|s)$/.test(z) && i,
                B = !/^(e|w)$/.test(z) && j,
                C = w.classed("extent"),
                D = K(),
                E = Wg.mouse(v),
                F = Wg.select(_g).on("keydown.brush", e).on("keyup.brush", n);
            if (Wg.event.changedTouches ? F.on("touchmove.brush", q).on("touchend.brush", s) : F.on("mousemove.brush", q).on("mouseup.brush", s), y.interrupt().selectAll("*").interrupt(), C) E[0] = k[0] - E[0], E[1] = m[0] - E[1];
            else if (z) {
                var G = +/w$/.test(z),
                    H = +/^n/.test(z);
                u = [k[1 - G] - E[0], m[1 - H] - E[1]], E[0] = k[G], E[1] = m[H]
            } else Wg.event.altKey && (t = E.slice());
            y.style("pointer-events", "none").selectAll(".resize").style("display", null), Wg.select("body").style("cursor", w.style("cursor")), x({
                type: "brushstart"
            }), q()
        }
        var f, g, h = n(a, "brushstart", "brush", "brushend"),
            i = null,
            j = null,
            k = [0, 0],
            m = [0, 0],
            o = !0,
            p = !0,
            q = Ij[0];
        return a.event = function (a) {
            a.each(function () {
                var a = h.of(this, arguments),
                    b = {
                        x: k,
                        y: m,
                        i: f,
                        j: g
                    },
                    c = this.__chart__ || b;
                this.__chart__ = b, zj ? Wg.select(this).transition().each("start.brush", function () {
                    f = c.i, g = c.j, k = c.x, m = c.y, a({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function () {
                    var c = Id(k, b.x),
                        d = Id(m, b.y);
                    return f = g = null, function (e) {
                        k = b.x = c(e), m = b.y = d(e), a({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }).each("end.brush", function () {
                    f = b.i, g = b.j, a({
                        type: "brush",
                        mode: "resize"
                    }), a({
                        type: "brushend"
                    })
                }) : (a({
                    type: "brushstart"
                }), a({
                    type: "brush",
                    mode: "resize"
                }), a({
                    type: "brushend"
                }))
            })
        }, a.x = function (b) {
            return arguments.length ? (i = b, q = Ij[!i << 1 | !j], a) : i
        }, a.y = function (b) {
            return arguments.length ? (j = b, q = Ij[!i << 1 | !j], a) : j
        }, a.clamp = function (b) {
            return arguments.length ? (i && j ? (o = !! b[0], p = !! b[1]) : i ? o = !! b : j && (p = !! b), a) : i && j ? [o, p] : i ? o : j ? p : null
        }, a.extent = function (b) {
            var c, d, e, h, l;
            return arguments.length ? (i && (c = b[0], d = b[1], j && (c = c[0], d = d[0]), f = [c, d], i.invert && (c = i(c), d = i(d)), c > d && (l = c, c = d, d = l), (c != k[0] || d != k[1]) && (k = [c, d])), j && (e = b[0], h = b[1], i && (e = e[1], h = h[1]), g = [e, h], j.invert && (e = j(e), h = j(h)), e > h && (l = e, e = h, h = l), (e != m[0] || h != m[1]) && (m = [e, h])), a) : (i && (f ? (c = f[0], d = f[1]) : (c = k[0], d = k[1], i.invert && (c = i.invert(c), d = i.invert(d)), c > d && (l = c, c = d, d = l))), j && (g ? (e = g[0], h = g[1]) : (e = m[0], h = m[1], j.invert && (e = j.invert(e), h = j.invert(h)), e > h && (l = e, e = h, h = l))), i && j ? [
                [c, e],
                [d, h]
            ] : i ? [c, d] : j && [e, h])
        }, a.clear = function () {
            return a.empty() || (k = [0, 0], m = [0, 0], f = g = null), a
        }, a.empty = function () {
            return !!i && k[0] == k[1] || !! j && m[0] == m[1]
        }, Wg.rebind(a, h, "on")
    };
    var Hj = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    },
        Ij = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Jj = Wg.time = {},
        Kj = Date,
        Lj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    jg.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        },
        getDay: function () {
            return this._.getUTCDay()
        },
        getFullYear: function () {
            return this._.getUTCFullYear()
        },
        getHours: function () {
            return this._.getUTCHours()
        },
        getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function () {
            return this._.getUTCMinutes()
        },
        getMonth: function () {
            return this._.getUTCMonth()
        },
        getSeconds: function () {
            return this._.getUTCSeconds()
        },
        getTime: function () {
            return this._.getTime()
        },
        getTimezoneOffset: function () {
            return 0
        },
        valueOf: function () {
            return this._.valueOf()
        },
        setDate: function () {
            Mj.setUTCDate.apply(this._, arguments)
        },
        setDay: function () {
            Mj.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function () {
            Mj.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function () {
            Mj.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function () {
            Mj.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function () {
            Mj.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function () {
            Mj.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function () {
            Mj.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function () {
            Mj.setTime.apply(this._, arguments)
        }
    };
    var Mj = Date.prototype,
        Nj = "%a %b %e %X %Y",
        Oj = "%m/%d/%Y",
        Pj = "%H:%M:%S",
        Qj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        Rj = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Sj = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        Tj = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Jj.year = kg(function (a) {
        return a = Jj.day(a), a.setMonth(0, 1), a
    }, function (a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function (a) {
        return a.getFullYear()
    }), Jj.years = Jj.year.range, Jj.years.utc = Jj.year.utc.range, Jj.day = kg(function (a) {
        var b = new Kj(2e3, 0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
    }, function (a, b) {
        a.setDate(a.getDate() + b)
    }, function (a) {
        return a.getDate() - 1
    }), Jj.days = Jj.day.range, Jj.days.utc = Jj.day.utc.range, Jj.dayOfYear = function (a) {
        var b = Jj.year(a);
        return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
    }, Lj.forEach(function (a, b) {
        a = a.toLowerCase(), b = 7 - b;
        var c = Jj[a] = kg(function (a) {
            return (a = Jj.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
        }, function (a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b))
        }, function (a) {
            var c = Jj.year(a).getDay();
            return Math.floor((Jj.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        Jj[a + "s"] = c.range, Jj[a + "s"].utc = c.utc.range, Jj[a + "OfYear"] = function (a) {
            var c = Jj.year(a).getDay();
            return Math.floor((Jj.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }), Jj.week = Jj.sunday, Jj.weeks = Jj.sunday.range, Jj.weeks.utc = Jj.sunday.utc.range, Jj.weekOfYear = Jj.sundayOfYear, Jj.format = mg;
    var Uj = og(Qj),
        Vj = pg(Qj),
        Wj = og(Rj),
        Xj = pg(Rj),
        Yj = og(Sj),
        Zj = pg(Sj),
        $j = og(Tj),
        _j = pg(Tj),
        ak = /^%/,
        bk = {
            "-": "",
            _: " ",
            0: "0"
        },
        ck = {
            a: function (a) {
                return Rj[a.getDay()]
            },
            A: function (a) {
                return Qj[a.getDay()]
            },
            b: function (a) {
                return Tj[a.getMonth()]
            },
            B: function (a) {
                return Sj[a.getMonth()]
            },
            c: mg(Nj),
            d: function (a, b) {
                return qg(a.getDate(), b, 2)
            },
            e: function (a, b) {
                return qg(a.getDate(), b, 2)
            },
            H: function (a, b) {
                return qg(a.getHours(), b, 2)
            },
            I: function (a, b) {
                return qg(a.getHours() % 12 || 12, b, 2)
            },
            j: function (a, b) {
                return qg(1 + Jj.dayOfYear(a), b, 3)
            },
            L: function (a, b) {
                return qg(a.getMilliseconds(), b, 3)
            },
            m: function (a, b) {
                return qg(a.getMonth() + 1, b, 2)
            },
            M: function (a, b) {
                return qg(a.getMinutes(), b, 2)
            },
            p: function (a) {
                return a.getHours() >= 12 ? "PM" : "AM"
            },
            S: function (a, b) {
                return qg(a.getSeconds(), b, 2)
            },
            U: function (a, b) {
                return qg(Jj.sundayOfYear(a), b, 2)
            },
            w: function (a) {
                return a.getDay()
            },
            W: function (a, b) {
                return qg(Jj.mondayOfYear(a), b, 2)
            },
            x: mg(Oj),
            X: mg(Pj),
            y: function (a, b) {
                return qg(a.getFullYear() % 100, b, 2)
            },
            Y: function (a, b) {
                return qg(a.getFullYear() % 1e4, b, 4)
            },
            Z: Ng,
            "%": function () {
                return "%"
            }
        },
        dk = {
            a: rg,
            A: sg,
            b: wg,
            B: xg,
            c: yg,
            d: Gg,
            e: Gg,
            H: Ig,
            I: Ig,
            j: Hg,
            L: Lg,
            m: Fg,
            M: Jg,
            p: Mg,
            S: Kg,
            U: ug,
            w: tg,
            W: vg,
            x: zg,
            X: Ag,
            y: Cg,
            Y: Bg,
            Z: Dg,
            "%": Og
        },
        ek = /^\s*\d+/,
        fk = Wg.map({
            am: 0,
            pm: 1
        });
    mg.utc = Pg;
    var gk = Pg("%Y-%m-%dT%H:%M:%S.%LZ");
    mg.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Qg : gk, Qg.parse = function (a) {
        var b = new Date(a);
        return isNaN(b) ? null : b
    }, Qg.toString = gk.toString, Jj.second = kg(function (a) {
        return new Kj(1e3 * Math.floor(a / 1e3))
    }, function (a, b) {
        a.setTime(a.getTime() + 1e3 * Math.floor(b))
    }, function (a) {
        return a.getSeconds()
    }), Jj.seconds = Jj.second.range, Jj.seconds.utc = Jj.second.utc.range, Jj.minute = kg(function (a) {
        return new Kj(6e4 * Math.floor(a / 6e4))
    }, function (a, b) {
        a.setTime(a.getTime() + 6e4 * Math.floor(b))
    }, function (a) {
        return a.getMinutes()
    }), Jj.minutes = Jj.minute.range, Jj.minutes.utc = Jj.minute.utc.range, Jj.hour = kg(function (a) {
        var b = a.getTimezoneOffset() / 60;
        return new Kj(36e5 * (Math.floor(a / 36e5 - b) + b))
    }, function (a, b) {
        a.setTime(a.getTime() + 36e5 * Math.floor(b))
    }, function (a) {
        return a.getHours()
    }), Jj.hours = Jj.hour.range, Jj.hours.utc = Jj.hour.utc.range, Jj.month = kg(function (a) {
        return a = Jj.day(a), a.setDate(1), a
    }, function (a, b) {
        a.setMonth(a.getMonth() + b)
    }, function (a) {
        return a.getMonth()
    }), Jj.months = Jj.month.range, Jj.months.utc = Jj.month.utc.range;
    var hk = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        ik = [
            [Jj.second, 1],
            [Jj.second, 5],
            [Jj.second, 15],
            [Jj.second, 30],
            [Jj.minute, 1],
            [Jj.minute, 5],
            [Jj.minute, 15],
            [Jj.minute, 30],
            [Jj.hour, 1],
            [Jj.hour, 3],
            [Jj.hour, 6],
            [Jj.hour, 12],
            [Jj.day, 1],
            [Jj.day, 2],
            [Jj.week, 1],
            [Jj.month, 1],
            [Jj.month, 3],
            [Jj.year, 1]
        ],
        jk = [
            [mg("%Y"), Tb],
            [mg("%B"), function (a) {
                return a.getMonth()
            }],
            [mg("%b %d"), function (a) {
                return 1 != a.getDate()
            }],
            [mg("%a %d"), function (a) {
                return a.getDay() && 1 != a.getDate()
            }],
            [mg("%I %p"), function (a) {
                return a.getHours()
            }],
            [mg("%I:%M"), function (a) {
                return a.getMinutes()
            }],
            [mg(":%S"), function (a) {
                return a.getSeconds()
            }],
            [mg(".%L"), function (a) {
                return a.getMilliseconds()
            }]
        ],
        kk = Tg(jk);
    ik.year = Jj.year, Jj.scale = function () {
        return Rg(Wg.scale.linear(), ik, kk)
    };
    var lk = {
        range: function (a, b, c) {
            return Wg.range(+a, +b, c).map(Sg)
        },
        floor: qb,
        ceil: qb
    },
        mk = ik.map(function (a) {
            return [a[0].utc, a[1]]
        }),
        nk = [
            [Pg("%Y"), Tb],
            [Pg("%B"), function (a) {
                return a.getUTCMonth()
            }],
            [Pg("%b %d"), function (a) {
                return 1 != a.getUTCDate()
            }],
            [Pg("%a %d"), function (a) {
                return a.getUTCDay() && 1 != a.getUTCDate()
            }],
            [Pg("%I %p"), function (a) {
                return a.getUTCHours()
            }],
            [Pg("%I:%M"), function (a) {
                return a.getUTCMinutes()
            }],
            [Pg(":%S"), function (a) {
                return a.getUTCSeconds()
            }],
            [Pg(".%L"), function (a) {
                return a.getUTCMilliseconds()
            }]
        ],
        ok = Tg(nk);
    return mk.year = Jj.year.utc, Jj.scale.utc = function () {
        return Rg(Wg.scale.linear(), mk, ok)
    }, Wg.text = rb(function (a) {
        return a.responseText
    }), Wg.json = function (a, b) {
        return sb(a, "application/json", Ug, b)
    }, Wg.html = function (a, b) {
        return sb(a, "text/html", Vg, b)
    }, Wg.xml = rb(function (a) {
        return a.responseXML
    }), Wg
}(), function () {
    function a(a) {
        function d() {
            for (; h = k < j.length && a > l;) {
                var b = k++,
                    d = j[b],
                    f = c.call(d, 1);
                f.push(e(b)), ++l, d[0].apply(null, f)
            }
        }
        function e(a) {
            return function (b, c) {
                --l, null == n && (null != b ? (n = b, k = m = 0 / 0, f()) : (j[a] = c, --m ? h || d() : f()))
            }
        }
        function f() {
            null != n ? o(n) : i ? o(n, j) : o.apply(null, [n].concat(j))
        }
        var g, h, i, j = [],
            k = 0,
            l = 0,
            m = 0,
            n = null,
            o = b;
        return a || (a = 1 / 0), g = {
            defer: function () {
                return n || (j.push(arguments), ++m, d()), g
            },
            await: function (a) {
                return o = a, i = !1, m || f(), g
            },
            awaitAll: function (a) {
                return o = a, i = !0, m || f(), g
            }
        }
    }
    function b() {}
    "undefined" == typeof module ? self.queue = a : module.exports = a, a.version = "1.0.4";
    var c = [].slice
}(), topojson = function () {
    function a(a, b) {
        function c(b) {
            var c = a.arcs[b],
                d = c[0],
                e = [0, 0];
            return c.forEach(function (a) {
                e[0] += a[0], e[1] += a[1]
            }), [d, e]
        }
        var d = {},
            e = {},
            f = {};
        b.forEach(function (a) {
            var b = c(a);
            (d[b[0]] || (d[b[0]] = [])).push(a), (d[b[1]] || (d[b[1]] = [])).push(~a)
        }), b.forEach(function (a) {
            var b, d, g = c(a),
                h = g[0],
                i = g[1];
            if (b = f[h]) if (delete f[b.end], b.push(a), b.end = i, d = e[i]) {
                delete e[d.start];
                var j = d === b ? b : b.concat(d);
                e[j.start = b.start] = f[j.end = d.end] = j
            } else if (d = f[i]) {
                delete e[d.start], delete f[d.end];
                var j = b.concat(d.map(function (a) {
                    return ~a
                }).reverse());
                e[j.start = b.start] = f[j.end = d.start] = j
            } else e[b.start] = f[b.end] = b;
            else if (b = e[i]) if (delete e[b.start], b.unshift(a), b.start = h, d = f[h]) {
                delete f[d.end];
                var k = d === b ? b : d.concat(b);
                e[k.start = d.start] = f[k.end = b.end] = k
            } else if (d = e[h]) {
                delete e[d.start], delete f[d.end];
                var k = d.map(function (a) {
                    return ~a
                }).reverse().concat(b);
                e[k.start = d.end] = f[k.end = b.end] = k
            } else e[b.start] = f[b.end] = b;
            else if (b = e[h]) if (delete e[b.start], b.unshift(~a), b.start = i, d = f[i]) {
                delete f[d.end];
                var k = d === b ? b : d.concat(b);
                e[k.start = d.start] = f[k.end = b.end] = k
            } else if (d = e[i]) {
                delete e[d.start], delete f[d.end];
                var k = d.map(function (a) {
                    return ~a
                }).reverse().concat(b);
                e[k.start = d.end] = f[k.end = b.end] = k
            } else e[b.start] = f[b.end] = b;
            else if (b = f[i]) if (delete f[b.end], b.push(~a), b.end = h, d = f[h]) {
                delete e[d.start];
                var j = d === b ? b : b.concat(d);
                e[j.start = b.start] = f[j.end = d.end] = j
            } else if (d = e[h]) {
                delete e[d.start], delete f[d.end];
                var j = b.concat(d.map(function (a) {
                    return ~a
                }).reverse());
                e[j.start = b.start] = f[j.end = d.start] = j
            } else e[b.start] = f[b.end] = b;
            else b = [a], e[b.start = h] = f[b.end = i] = b
        });
        var g = [];
        for (var h in f) g.push(f[h]);
        return g
    }
    function b(b, d, e) {
        function f(a) {
            0 > a && (a = ~a), (l[a] || (l[a] = [])).push(k)
        }
        function g(a) {
            a.forEach(f)
        }
        function h(a) {
            a.forEach(g)
        }
        function i(a) {
            "GeometryCollection" === a.type ? a.geometries.forEach(i) : a.type in m && (k = a, m[a.type](a.arcs))
        }
        var j = [];
        if (arguments.length > 1) {
            var k, l = [],
                m = {
                    LineString: g,
                    MultiLineString: h,
                    Polygon: h,
                    MultiPolygon: function (a) {
                        a.forEach(h)
                    }
                };
            i(d), l.forEach(arguments.length < 3 ?
            function (a, b) {
                j.push([b])
            } : function (a, b) {
                e(a[0], a[a.length - 1]) && j.push([b])
            })
        } else for (var n = 0, o = b.arcs.length; o > n; ++n) j.push([n]);
        return c(b, {
            type: "MultiLineString",
            arcs: a(b, j)
        })
    }
    function c(a, b) {
        function c(a, b) {
            b.length && b.pop();
            for (var c, e = o[0 > a ? ~a : a], f = 0, g = e.length, h = 0, i = 0; g > f; ++f) b.push([(h += (c = e[f])[0]) * k + m, (i += c[1]) * l + n]);
            0 > a && d(b, g)
        }
        function e(a) {
            return [a[0] * k + m, a[1] * l + n]
        }
        function f(a) {
            for (var b = [], d = 0, e = a.length; e > d; ++d) c(a[d], b);
            return b.length < 2 && b.push(b[0]), b
        }
        function g(a) {
            for (var b = f(a); b.length < 4;) b.push(b[0]);
            return b
        }
        function h(a) {
            return a.map(g)
        }
        function i(a) {
            var b = a.type,
                c = "GeometryCollection" === b ? {
                    type: b,
                    geometries: a.geometries.map(i)
                } : b in p ? {
                    type: b,
                    coordinates: p[b](a)
                } : {
                    type: null
                };
            return "id" in a && (c.id = a.id), "properties" in a && (c.properties = a.properties), c
        }
        var j = a.transform,
            k = j.scale[0],
            l = j.scale[1],
            m = j.translate[0],
            n = j.translate[1],
            o = a.arcs,
            p = {
                Point: function (a) {
                    return e(a.coordinates)
                },
                MultiPoint: function (a) {
                    return a.coordinates.map(e)
                },
                LineString: function (a) {
                    return f(a.arcs)
                },
                MultiLineString: function (a) {
                    return a.arcs.map(f)
                },
                Polygon: function (a) {
                    return h(a.arcs)
                },
                MultiPolygon: function (a) {
                    return a.arcs.map(h)
                }
            };
        return i(b)
    }
    function d(a, b) {
        for (var c, d = a.length, e = d - b; e < --d;) c = a[e], a[e++] = a[d], a[d] = c
    }
    function e(a, b) {
        for (var c = 0, d = a.length; d > c;) {
            var e = c + d >>> 1;
            a[e] < b ? c = e + 1 : d = e
        }
        return c
    }
    function f(a) {
        function b(a, b) {
            a.forEach(function (a) {
                0 > a && (a = ~a);
                var c = f[a] || (f[a] = []);
                c[b] || (c.forEach(function (a) {
                    var c, d;
                    d = e(c = g[b], a), c[d] !== a && c.splice(d, 0, a), d = e(c = g[a], b), c[d] !== b && c.splice(d, 0, b)
                }), c[b] = b)
            })
        }
        function c(a, c) {
            a.forEach(function (a) {
                b(a, c)
            })
        }
        function d(a, b) {
            "GeometryCollection" === a.type ? a.geometries.forEach(function (a) {
                d(a, b)
            }) : a.type in h && h[a.type](a.arcs, b)
        }
        var f = [],
            g = a.map(function () {
                return []
            }),
            h = {
                LineString: b,
                MultiLineString: c,
                Polygon: c,
                MultiPolygon: function (a, b) {
                    a.forEach(function (a) {
                        c(a, b)
                    })
                }
            };
        return a.forEach(d), g
    }
    return {
        version: "0.0.39",
        mesh: b,
        object: c,
        neighbors: f
    }
}(), function (a, b) {
    function c() {
        var a = {
            _proficiency: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            children: null,
            value: 0,
            key: "",
            depth: 1
        };
        m.refreshChart(a)
    }
    function d(a) {
        m.refreshChart(a);
        var c = f(a);
        i(c), b.selectAll(".skills-sunburst path").style("opacity", .3), s.selectAll("path").filter(function (a) {
            return c.indexOf(a) >= 0
        }).style("opacity", 1)
    }
    function e() {
        b.selectAll("path").on("mouseover", null), b.selectAll("path").transition().duration(1e3).style("opacity", 1).each("end", function () {
            b.select(this).on("mouseover", d)
        })
    }
    function f(a) {
        for (var b = [], c = a; c.parent;) b.unshift(c), c = c.parent;
        return b
    }
    function g() {
        b.select("#skills-chart-breadcrumb").append("svg:svg").attr("width", 500).attr("height", 50).attr("class", "trail")
    }
    function h(a, b) {
        var c = [];
        return c.push("0,0"), c.push(r.w + ",0"), c.push(r.w + r.t + "," + r.h / 2), c.push(r.w + "," + r.h), c.push("0," + r.h), b > 0 && c.push(r.t + "," + r.h / 2), c.join(" ")
    }
    function i(a) {
        a[a.length - 1]._color, a.length;
        var c = b.select("#skills-chart-breadcrumb .trail").selectAll("g").remove();
        c = b.select("#skills-chart-breadcrumb .trail").selectAll("g").data(a, function (a) {
            return a.key + a.depth
        });
        var d = c.enter().append("svg:g");
        d.append("svg:polygon").attr("points", h).style("fill", function (a) {
            return a._color
        }), d.append("svg:text").attr("x", r.w / 2 + 2).attr("y", r.h / 2).attr("dy", "0.35em").attr("text-anchor", "middle").attr("class", "breadcumb-text").style("fill", function (a) {
            return j(b.rgb(a._color)) < 150 ? "#fff" : "#000"
        }).text(function (a) {
            return a.key
        }), c.attr("transform", function (a, b) {
            return "translate(" + b * (r.w + r.s) + ", 0)"
        }), c.exit().remove(), b.select(".trail").style("visibility", "")
    }
    function j(a) {
        return .299 * a.r + .587 * a.g + .114 * a.b
    }
    function k(a) {
        var c = ["#3182bd", "#C86EDF", "#FF9500", "#52BE65", "#FF4981"],
            d = [-.1, -.05, 0];
        if (1 == a.depth) {
            var e = c[x % 5];
            return x++, e
        }
        if (a.depth > 1) {
            var f = d[a.value % 3];
            return b.rgb(a.parent._color).brighter(.2 * a.depth + f * a.depth)
        }
    }
    var l, m = function (a) {
            function b(a) {
                var b = [],
                    c = 0;
                return a._proficiency.forEach(function (a) {
                    c <= i.length && (b.push({
                        p: a,
                        date: i[c]
                    }), c++)
                }), b
            }
            function c(b, c) {
                j.domain(a.extent(b, function (a) {
                    return a.date
                })), k.domain([0, 100]), o.append("g").attr("class", "x-axis axis").attr("transform", "translate(0," + h + ")").call(l).append("text").attr("x", 450).attr("y", -8).style("text-anchor", "end").text("Time →"), o.append("g").attr("class", "y-axis axis").call(m).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".91em").style("text-anchor", "end").text("Proficiency →"), o.append("path").datum(b).attr("class", "line").attr("id", "skills-chart-line").attr("d", n).attr("stroke", function () {
                    return c._color
                })
            }
            function d(d) {
                var e = b(d),
                    f = a.select("#skills-chart-line");
                null === f[0][0] ? c(e, d) : f.datum(e).attr("d", n).attr("stroke", function () {
                    return d._color
                })
            }
            var e = {},
                f = {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 50
                },
                g = 500 - f.left - f.right,
                h = 400 - f.top - f.bottom,
                i = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
                j = a.scale.linear().range([0, g]),
                k = a.scale.linear().range([h, 0]),
                l = a.svg.axis().scale(j).tickValues([2004, 2007, 2010, 2013]).tickFormat(a.format(".0f")).tickPadding(10).tickSize(0).orient("bottom"),
                m = a.svg.axis().scale(k).tickSize(0).tickPadding(10).tickValues([20, 40, 60, 80, 100]).orient("left"),
                n = a.svg.line().interpolate("basis").x(function (a) {
                    return j(a.date)
                }).y(function (a) {
                    return k(a.p)
                }),
                o = a.select(".skills-chart").append("svg").attr("width", g + f.left + f.right).attr("height", h + f.top + f.bottom).append("g").attr("transform", "translate(" + f.left + "," + f.top + ")");
            return e.refreshChart = d, e
        }(b),
        n = 580,
        o = 580,
        p = Math.min(n, o) / Math.PI - 25,
        q = k,
        r = {
            w: 116,
            h: 30,
            s: 3,
            t: 7
        },
        s = b.select(".skills-sunburst").append("svg:svg").attr("width", n).attr("height", o).append("svg:g").attr("transform", "translate(" + n / 2 + "," + o / 2 + ")");
    s.append("svg:circle").attr("r", p).style("opacity", 0);
    var t = function (a, b) {
            var c = [],
                d = a.length;
            if (a.length !== b.length) c = a.length > b.length ? a : b;
            else for (var e = 0; d > e; e++) {
                var f = Math.max(a[e], b[e]) - Math.abs(a[e] - b[e]) / 8;
                c.push(f)
            }
            return c
        },
        u = function (a) {
            if (a instanceof Array) return a;
            var b = [];
            return $.each(a, function (a, c) {
                b = t(u(c), b)
            }), b
        },
        v = b.layout.partition().sort(null).size([2 * Math.PI, p]).children(function (a) {
            return a.value instanceof Array ? (a._proficiency = a.value, b.entries([a.value[a.value.length - 1]])) : (a._proficiency = u(a.value), isNaN(a.value) ? b.entries(a.value) : null)
        }).value(function (a) {
            return a.value
        }),
        w = b.svg.arc().startAngle(function (a) {
            return a.x
        }).endAngle(function (a) {
            return a.x + a.dx - .01 / (a.depth + .5)
        }).innerRadius(function (a) {
            return p / Math.PI * a.depth
        }).outerRadius(function (a) {
            return p / Math.PI * (a.depth + 1) - 1
        });
    b.json("/scripts/skills.json", function (a) {
        g();
        var f = s.data(b.entries(a)).selectAll("g").data(v).enter().append("svg:g").attr("display", function (a) {
            return a.depth ? null : "none"
        });
        f.append("svg:path").attr("d", w).attr("stroke", "#fff").attr("fill", function (a) {
            return a._color = q(a), a._color
        }).attr("fill-rule", "evenodd").attr("display", function (a) {
            return a.children ? null : "none"
        }).on("mouseover", d), f.append("svg:text").attr("transform", function (a) {
            var b = 180 * ((a.x + a.dx / 2 - Math.PI / 2) / Math.PI);
            return "rotate(" + b + ")"
        }).attr("x", function (a) {
            return p / Math.PI * a.depth
        }).attr("dx", "6").attr("dy", ".1em").text(function (a) {
            return a.key
        }).attr("display", function (a) {
            return a.children ? null : "none"
        }).on("mouseover", d), b.select(".skills-sunburst").on("mouseleave", e), l = f.node().__data__.value, s.append("circle").attr("r", p / Math.PI).attr("opacity", 0), c()
    });
    var x = 0
}(window, d3);
var worldMap = function (a, b, c, d) {
        function e(a, b) {
            var c = x.append("defs").append("radialGradient").attr("id", "ocean_fill").attr("cx", "75%").attr("cy", "25%");
            c.append("stop").attr("offset", "5%").attr("stop-color", "#fff"), c.append("stop").attr("offset", "100%").attr("stop-color", "#ddd");
            var e = x.append("defs").append("radialGradient").attr("id", "globe_highlight").attr("cx", "75%").attr("cy", "25%");
            e.append("stop").attr("offset", "5%").attr("stop-color", "#fff").attr("stop-opacity", "0.6"), e.append("stop").attr("offset", "100%").attr("stop-color", "#bbb").attr("stop-opacity", "0.2");
            var i = x.append("defs").append("radialGradient").attr("id", "globe_shading").attr("cx", "55%").attr("cy", "45%");
            i.append("stop").attr("offset", "30%").attr("stop-color", "#fff").attr("stop-opacity", "0"), i.append("stop").attr("offset", "100%").attr("stop-color", "#505962").attr("stop-opacity", "0.3"), x.append("path").datum(d.object(b, b.objects.land)).attr("class", "land noclicks").attr("d", t), x.append("circle").attr("cx", p / 2).attr("cy", q / 2).attr("r", r.scale()).attr("class", "noclicks").style("fill", "url(#globe_shading)"), x.append("g").attr("class", "points").selectAll("text").data(y.features).enter().append("path").attr("class", "point").attr("d", t), x.append("g").attr("class", "labels").selectAll("text").data(y.features).enter().append("text").attr("class", "label").text(function (a) {
                return a.properties.name
            }), v = [{
                source: y.features[0].geometry.coordinates,
                target: y.features[1].geometry.coordinates
            }, {
                source: y.features[1].geometry.coordinates,
                target: y.features[2].geometry.coordinates
            }, {
                source: y.features[2].geometry.coordinates,
                target: y.features[3].geometry.coordinates
            }], v.forEach(function (a) {
                var b = {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [a.source, a.target]
                    }
                };
                w.push(b)
            }), x.append("g").attr("class", "arcs").selectAll("path").data(w).enter().append("path").attr("class", "arc").attr("d", t), x.append("g").attr("class", "flyers").selectAll("path").data(v).enter().append("path").attr("class", "flyer").attr("d", function (a) {
                return u(f(a))
            }), h(), g()
        }
        function f(a) {
            var b = a.source,
                c = a.target,
                d = j(b, c, .5),
                e = [r(b), s(d), r(c)];
            return e
        }
        function g() {
            var a = r.invert([p / 2, q / 2]),
                c = b.geo.greatArc();
            x.selectAll(".label").attr("text-anchor", function (a) {
                var b = r(a.geometry.coordinates)[0];
                return p / 2 - 20 > b ? "end" : p / 2 + 20 > b ? "middle" : "start"
            }).attr("transform", function (a) {
                var b = r(a.geometry.coordinates),
                    c = b[0],
                    d = b[1],
                    e = p / 2 > c ? -15 : 15,
                    f = -2;
                if ("Madrid" == a.properties.name) var f = 20;
                else if ("Barcelona" == a.properties.name) var f = -15;
                return "translate(" + (c + e) + "," + (d + f) + ")"
            }).style("display", function (b) {
                var b = c.distance({
                    source: b.geometry.coordinates,
                    target: a
                });
                return b > 1.57 ? "none" : "inline"
            })
        }
        function h() {
            x.selectAll("#resume-infographic-world-map .land").attr("d", t), x.selectAll("#resume-infographic-world-map .point").attr("d", t), x.selectAll("#resume-infographic-world-map .arc").attr("d", t).attr("opacity", function (a) {
                return i(a)
            }), x.selectAll(".world-map .flyer").attr("d", function (a) {
                return u(f(a))
            }).attr("opacity", function (a) {
                return i(a)
            })
        }
        function i(a) {
            var c, d, e = r.invert([p / 2, q / 2]),
                f = b.geo.greatArc();
            a.source ? (c = a.source, d = a.target) : (c = a.geometry.coordinates[0], d = a.geometry.coordinates[1]);
            var g = 1.97 - f.distance({
                source: c,
                target: e
            }),
                h = 1.97 - f.distance({
                    source: d,
                    target: e
                }),
                i = b.scale.linear().domain([-.1, 0]).range([0, .1]),
                j = h > g ? g : h;
            return i(j)
        }
        function j(a, c, d) {
            var e = b.geo.interpolate(a, c);
            return e(d)
        }
        function k() {
            z = [b.event.pageX, b.event.pageY], A = r.rotate(), b.event.preventDefault()
        }
        function l() {
            if (z) {
                var a = [b.event.pageX, b.event.pageY],
                    c = [A[0] + (a[0] - z[0]) / 6, A[1] + (z[1] - a[1]) / 6];
                c[1] = c[1] > 30 ? 30 : c[1] < -30 ? -30 : c[1], r.rotate(c), s.rotate(c), g(), h()
            }
        }
        function m() {
            z && (l(), z = null)
        }
        function n() {
            setInterval(function () {
                var a = r.rotate(),
                    b = [a[0] - .3, a[1]];
                r.rotate(b), s.rotate(b), g(), h()
            }, 60)
        }
        var o = {};
        b.select(a).on("mousemove", l).on("mouseup", m);
        var p = 1e3,
            q = 700,
            r = b.geo.orthographic().translate([p / 2, q / 2]).clipAngle(90).scale(300),
            s = b.geo.orthographic().translate([p / 2, q / 2]).clipAngle(90).scale(400),
            t = b.geo.path().projection(r).pointRadius(2),
            u = b.svg.line().x(function (a) {
                return a[0]
            }).y(function (a) {
                return a[1]
            }).interpolate("cardinal").tension(0),
            v = [],
            w = [],
            x = b.select(".world-map").append("svg").attr("width", p).attr("height", q).on("mousedown", k),
            y = {
                type: "FeatureCollection",
                features: [{
                    type: "Feature",
                    properties: {
                        name: "Barcelona",
                        nameascii: "Barcelona",
                        adm0name: "Spain",
                        adm0_a3: "Spain",
                        adm1name: "Catalunya",
                        iso_a2: "ES",
                        note: null,
                        latitude: 40.4165,
                        longitude: 2.15899
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [2.15899, 41.38879]
                    }
                }, {
                    type: "Feature",
                    properties: {
                        name: "Madrid",
                        nameascii: "Madrid",
                        adm0name: "Spain",
                        adm0_a3: "Spain",
                        adm1name: "Madrid",
                        iso_a2: "ES",
                        note: null,
                        latitude: 41.38879,
                        longitude: -3.70256
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-3.70256, 40.4165]
                    }
                }, {
                    type: "Feature",
                    properties: {
                        name: "Singapore",
                        nameascii: "Singapore",
                        adm0name: "Singapore",
                        adm0_a3: "Singapore",
                        adm1name: "Singapore",
                        iso_a2: "SG",
                        note: null,
                        latitude: 1.28967,
                        longitude: 103.85007
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [103.85007, 1.28967]
                    }
                }, {
                    type: "Feature",
                    properties: {
                        name: "San Francisco",
                        nameascii: "San Francisco",
                        adm0name: "San Francisco",
                        adm0_a3: "United States",
                        adm1name: "California",
                        iso_a2: "US",
                        note: null,
                        latitude: 37.77493,
                        longitude: -122.41942
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-122.41942, 37.77493]
                    }
                }]
            };
        c().defer(b.json, "/scripts/world-110m.json").await(e);
        var z, A;
        return o.initRotation = function () {
            n()
        }, o
    }(window, d3, queue, topojson);

