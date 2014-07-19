!
function (a, b) {
    "use strict";
    var c = function () {
            var b = a.createElement("dummy").style,
                c = "Webkit Moz O ms Khtml".split(" "),
                d = {};
            return function (a) {
                if ("undefined" == typeof d[a]) {
                    var e = a.charAt(0).toUpperCase() + a.substr(1),
                        f = (a + " " + c.join(e + " ") + e).split(" ");
                    d[a] = null;
                    for (var g in f) if (void 0 !== b[f[g]]) {
                        d[a] = f[g];
                        break
                    }
                }
                return d[a]
            }
        }(),
        d = function (a) {
            return [].slice.call(a)
        },
        e = function (a, b) {
            var d, e;
            for (d in b) b.hasOwnProperty(d) && (e = c(d), null !== e && (a.style[e] = b[d]));
            return a
        },
        f = function (a, b) {
            return isNaN(a) ? b || 0 : Number(a)
        },
        g = function (b) {
            return a.getElementById(b)
        },
        h = function (b, c) {
            return c = c || a, c.querySelector(b)
        },
        i = function (b, c) {
            return c = c || a, d(c.querySelectorAll(b))
        },
        j = function (b, c, d) {
            var e = a.createEvent("CustomEvent");
            e.initCustomEvent(c, !0, !0, d), b.dispatchEvent(e)
        },
        k = function (a) {
            return " translate3d(" + a.x + "px," + a.y + "px," + a.z + "px) "
        },
        l = function (a, b) {
            var c = " rotateX(" + a.x + "deg) ",
                d = " rotateY(" + a.y + "deg) ",
                e = " rotateZ(" + a.z + "deg) ";
            return b ? e + d + c : c + d + e
        },
        m = function (a) {
            return " scale(" + a + ") "
        },
        n = function (a) {
            return " perspective(" + a + "px) "
        },
        o = function () {
            return g(b.location.hash.replace(/^#\/?/, ""))
        },
        p = function (a) {
            var c = b.innerHeight / a.height,
                d = b.innerWidth / a.width,
                e = c > d ? d : c;
            return a.maxScale && e > a.maxScale && (e = a.maxScale), a.minScale && e < a.minScale && (e = a.minScale), e
        };
    navigator.sayswho = function () {
        var a, b = navigator.userAgent,
            c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
        return /trident/i.test(c[1]) ? (a = /\brv[ :]+(\d+(\.\d+)?)/g.exec(b) || [], "IE " + (a[1] || "")) : (c = c[2] ? [c[1], c[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (a = b.match(/version\/([\.\d]+)/i)) && (c[2] = a[1]), c.join(" "))
    }();
    var q = function () {
            var a = navigator.sayswho,
                b = a.split(" ");
            return "IE" == b[0]
        },
        r = a.body,
        s = navigator.userAgent.toLowerCase(),
        t = null !== c("perspective") && r.classList && r.dataset && !q(),
        u = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(s),
        v = !u && t;
    v ? (r.classList.remove("impress-not-supported"), r.classList.add("impress-supported")) : (r.className += " impress-not-supported ", r.className += u ? "mobile" : "browser-not-supported");
    var w = {},
        x = {
            width: 1200,
            height: 768,
            maxScale: 1,
            minScale: 0,
            perspective: 1e3,
            transitionDuration: 1e3
        },
        y = function () {
            return !1
        },
        z = b.impress = function (c) {
            if (!v) return {
                init: y,
                "goto": y,
                prev: y,
                next: y
            };
            if (c = c || "impress", w["impress-root-" + c]) return w["impress-root-" + c];
            var q = {},
                s = null,
                t = null,
                u = null,
                z = null,
                A = null,
                B = g(c),
                C = a.createElement("div"),
                D = !1,
                E = null,
                F = function (a) {
                    E !== a && (j(a, "impress:stepenter"), E = a)
                },
                G = function (a) {
                    E === a && (j(a, "impress:stepleave"), E = null)
                },
                H = function (a, b) {
                    var c = a.dataset,
                        d = {
                            translate: {
                                x: f(c.x),
                                y: f(c.y),
                                z: f(c.z)
                            },
                            rotate: {
                                x: f(c.rotateX),
                                y: f(c.rotateY),
                                z: f(c.rotateZ || c.rotate)
                            },
                            scale: f(c.scale, 1),
                            el: a
                        };
                    a.id || (a.id = "step-" + (b + 1)), q["impress-" + a.id] = d, e(a, {
                        position: "absolute",
                        transform: "translate(-50%,-50%)" + k(d.translate) + l(d.rotate) + m(d.scale),
                        transformStyle: "preserve-3d"
                    })
                },
                I = function () {
                    if (!D) {
                        var b = h("meta[name='viewport']") || a.createElement("meta");
                        b.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no", b.parentNode !== a.head && (b.name = "viewport", a.head.appendChild(b));
                        var g = B.dataset;
                        z = {
                            width: f(g.width, x.width),
                            height: f(g.height, x.height),
                            maxScale: f(g.maxScale, x.maxScale),
                            minScale: f(g.minScale, x.minScale),
                            perspective: f(g.perspective, x.perspective),
                            transitionDuration: f(g.transitionDuration, x.transitionDuration)
                        }, A = p(z), d(B.childNodes).forEach(function (a) {
                            C.appendChild(a)
                        }), B.appendChild(C), a.documentElement.style.height = "100%", e(r, {
                            height: "100%",
                            overflow: "hidden"
                        });
                        var k = {
                            position: "absolute",
                            transformOrigin: "top left",
                            transition: "all 0s ease-in-out",
                            transformStyle: "preserve-3d"
                        };
                        e(B, k), e(B, {
                            top: "50%",
                            left: "50%",
                            transform: n(z.perspective / A) + m(A)
                        }), e(C, k), r.classList.remove("impress-disabled"), r.classList.add("impress-enabled"), u = i(".step", B), u.forEach(H), t = {
                            translate: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            rotate: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            scale: 1
                        }, D = !0, j(B, "impress:init", {
                            api: w["impress-root-" + c]
                        })
                    }
                },
                J = function (a) {
                    return "number" == typeof a ? a = 0 > a ? u[u.length + a] : u[a] : "string" == typeof a && (a = g(a)), a && a.id && q["impress-" + a.id] ? a : null
                },
                K = null,
                L = function (a, c) {
                    if (!D || !(a = J(a))) return !1;
                    b.scrollTo(0, 0);
                    var d = q["impress-" + a.id];
                    s && (s.classList.remove("active"), r.classList.remove("impress-on-" + s.id)), a.classList.add("active"), r.classList.add("impress-on-" + a.id);
                    var g = {
                        rotate: {
                            x: -d.rotate.x,
                            y: -d.rotate.y,
                            z: -d.rotate.z
                        },
                        translate: {
                            x: -d.translate.x,
                            y: -d.translate.y,
                            z: -d.translate.z
                        },
                        scale: 1 / d.scale
                    },
                        h = g.scale >= t.scale;
                    c = f(c, z.transitionDuration);
                    var i = c / 2;
                    a === s && (A = p(z));
                    var j = g.scale * A;
                    return s && s !== a && G(s), e(B, {
                        transform: n(z.perspective / j) + m(j),
                        transitionDuration: c + "ms",
                        transitionDelay: (h ? i : 0) + "ms"
                    }), e(C, {
                        transform: l(g.rotate, !0) + k(g.translate),
                        transitionDuration: c + "ms",
                        transitionDelay: (h ? 0 : i) + "ms"
                    }), (t.scale === g.scale || t.rotate.x === g.rotate.x && t.rotate.y === g.rotate.y && t.rotate.z === g.rotate.z && t.translate.x === g.translate.x && t.translate.y === g.translate.y && t.translate.z === g.translate.z) && (i = 0), t = g, s = a, b.clearTimeout(K), K = b.setTimeout(function () {
                        F(s)
                    }, c + i), a
                },
                M = function () {
                    var a = u.indexOf(s) - 1;
                    return a = a >= 0 ? u[a] : u[u.length - 1], L(a)
                },
                N = function () {
                    var a = u.indexOf(s) + 1;
                    return a = a < u.length ? u[a] : u[0], L(a)
                };
            return B.addEventListener("impress:init", function () {
                u.forEach(function (a) {
                    a.classList.add("future")
                }), B.addEventListener("impress:stepenter", function (a) {
                    a.target.classList.remove("past"), a.target.classList.remove("future"), a.target.classList.add("present")
                }, !1), B.addEventListener("impress:stepleave", function (a) {
                    a.target.classList.remove("present"), a.target.classList.add("past")
                }, !1)
            }, !1), B.addEventListener("impress:init", function () {
                var a = "";
                B.addEventListener("impress:stepenter", function (c) {
                    b.location.hash = a = "#/" + c.target.id
                }, !1), b.addEventListener("hashchange", function () {
                    b.location.hash !== a && L(o())
                }, !1), L(o() || u[0], 0)
            }, !1), r.classList.add("impress-disabled"), w["impress-root-" + c] = {
                init: I,
                "goto": L,
                next: N,
                prev: M
            }
        };
    z.supported = v
}(document, window), function (a, b) {
    "use strict";
    var c = function (a, b) {
            var c = null;
            return function () {
                var d = this,
                    e = arguments;
                clearTimeout(c), c = setTimeout(function () {
                    a.apply(d, e)
                }, b)
            }
        };
    a.addEventListener("impress:init", function (d) {
        var e = d.detail.api;
        a.addEventListener("keydown", function (a) {
            (9 === a.keyCode || a.keyCode >= 32 && a.keyCode <= 34 || a.keyCode >= 37 && a.keyCode <= 40) && a.preventDefault()
        }, !1), a.addEventListener("keyup", function (a) {
            if (9 === a.keyCode || a.keyCode >= 32 && a.keyCode <= 34 || a.keyCode >= 37 && a.keyCode <= 40) {
                switch (a.keyCode) {
                case 33:
                case 37:
                case 38:
                    e.prev();
                    break;
                case 9:
                case 32:
                case 34:
                case 39:
                case 40:
                    e.next()
                }
                a.preventDefault()
            }
        }, !1), a.addEventListener("click", function (b) {
            for (var c = b.target;
            "A" !== c.tagName && c !== a.documentElement;) c = c.parentNode;
            if ("A" === c.tagName) {
                var d = c.getAttribute("href");
                d && "#" === d[0] && (c = a.getElementById(d.slice(1)))
            }
            e.goto(c) && (b.stopImmediatePropagation(), b.preventDefault())
        }, !1), a.addEventListener("click", function (b) {
            for (var c = b.target;
            (!c.classList.contains("step") || c.classList.contains("active")) && c !== a.documentElement;) c = c.parentNode;
            e.goto(c) && b.preventDefault()
        }, !1), b.addEventListener("resize", c(function () {
            e.goto(a.querySelector(".active"), 500)
        }, 250), !1)
    }, !1)
}(document, window), function (a) {
    function b(b, c, d, e) {
        var f = b.text().split(c),
            g = "";
        f.length && (a(f).each(function (a, b) {
            g += '<span class="' + d + (a + 1) + '">' + b + "</span>" + e
        }), b.empty().append(g))
    }
    var c = {
        init: function () {
            return this.each(function () {
                b(a(this), "", "char", "")
            })
        },
        words: function () {
            return this.each(function () {
                b(a(this), " ", "word", " ")
            })
        },
        lines: function () {
            return this.each(function () {
                var c = "eefec303079ad17405c889e092e105b0";
                b(a(this).children("br").replaceWith(c).end(), c, "line", "")
            })
        }
    };
    a.fn.lettering = function (b) {
        return b && c[b] ? c[b].apply(this, [].slice.call(arguments, 1)) : "letters" !== b && b ? (a.error("Method " + b + " does not exist on jQuery.lettering"), this) : c.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery), function (a) {
    "use strict";

    function b(b) {
        return /In/.test(b) || a.inArray(b, a.fn.textillate.defaults.inEffects) >= 0
    }
    function c(b) {
        return /Out/.test(b) || a.inArray(b, a.fn.textillate.defaults.outEffects) >= 0
    }
    function d(b) {
        var c = b.attributes || [],
            d = {};
        return c.length ? (a.each(c, function (a, b) {
            /^data-in-*/.test(b.nodeName) ? (d. in = d. in || {}, d. in [b.nodeName.replace(/data-in-/, "")] = b.nodeValue) : /^data-out-*/.test(b.nodeName) ? (d.out = d.out || {}, d.out[b.nodeName.replace(/data-out-/, "")] = b.nodeValue) : /^data-*/.test(b.nodeName) && (d[b.nodeName] = b.nodeValue)
        }), d) : d
    }
    function e(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }
    function f(a, b, c) {
        a.addClass("animated " + b).css("visibility", "visible").show(), a.one("animationend webkitAnimationEnd oAnimationEnd", function () {
            a.removeClass("animated " + b), c && c()
        })
    }
    function g(d, g, h) {
        var i = d.length;
        return i ? (g.shuffle && (d = e(d)), g.reverse && (d = d.toArray().reverse()), a.each(d, function (d, e) {
            function j() {
                b(g.effect) ? k.css("visibility", "visible") : c(g.effect) && k.css("visibility", "hidden"), i -= 1, !i && h && h()
            }
            var k = a(e),
                l = g.sync ? g.delay : g.delay * d * g.delayScale;
            k.text() ? setTimeout(function () {
                f(k, g.effect, j)
            }, l) : j()
        }), void 0) : (h && h(), void 0)
    }
    var h = function (e, f) {
            var h = this,
                i = a(e);
            h.init = function () {
                h.$texts = i.find(f.selector), h.$texts.length || (h.$texts = a('<ul class="texts"><li>' + i.html() + "</li></ul>"), i.html(h.$texts)), h.$texts.hide(), h.$current = a("<span>").text(h.$texts.find(":first-child").html()).prependTo(i), b(f.effect) ? h.$current.css("visibility", "hidden") : c(f.effect) && h.$current.css("visibility", "visible"), h.setOptions(f), setTimeout(function () {
                    h.options.autoStart && h.start()
                }, h.options.initialDelay)
            }, h.setOptions = function (a) {
                h.options = a
            }, h.triggerEvent = function (b) {
                var c = a.Event(b + ".tlt");
                return i.trigger(c, h), c
            }, h. in = function (e, f) {
                e = e || 0;
                var i, j = h.$texts.find(":nth-child(" + (e + 1) + ")"),
                    k = a.extend({}, h.options, d(j));
                j.addClass("current"), h.triggerEvent("inAnimationBegin"), h.$current.text(j.html()).lettering("words"), h.$current.find('[class^="word"]').css({
                    display: "inline-block",
                    "-webkit-transform": "translate3d(0,0,0)",
                    "-moz-transform": "translate3d(0,0,0)",
                    "-o-transform": "translate3d(0,0,0)",
                    transform: "translate3d(0,0,0)"
                }).each(function () {
                    a(this).lettering()
                }), i = h.$current.find('[class^="char"]').css("display", "inline-block"), b(k. in .effect) ? i.css("visibility", "hidden") : c(k. in .effect) && i.css("visibility", "visible"), h.currentIndex = e, g(i, k. in , function () {
                    h.triggerEvent("inAnimationEnd"), k. in .callback && k. in .callback(), f && f(h)
                })
            }, h.out = function (b) {
                var c = h.$texts.find(":nth-child(" + (h.currentIndex + 1) + ")"),
                    e = h.$current.find('[class^="char"]'),
                    f = a.extend({}, h.options, d(c));
                h.triggerEvent("outAnimationBegin"), g(e, f.out, function () {
                    c.removeClass("current"), h.triggerEvent("outAnimationEnd"), f.out.callback && f.out.callback(), b && b(h)
                })
            }, h.start = function (a) {
                h.triggerEvent("start"), function b(a) {
                    h. in (a, function () {
                        var c = h.$texts.children().length;
                        a += 1, !h.options.loop && a >= c ? (h.options.callback && h.options.callback(), h.triggerEvent("end")) : (a %= c, setTimeout(function () {
                            h.out(function () {
                                b(a)
                            })
                        }, h.options.minDisplayTime))
                    })
                }(a || 0)
            }, h.init()
        };
    a.fn.textillate = function (b, c) {
        return this.each(function () {
            var e = a(this),
                f = e.data("textillate"),
                g = a.extend(!0, {}, a.fn.textillate.defaults, d(this), "object" == typeof b && b);
            f ? "string" == typeof b ? f[b].apply(f, [].concat(c)) : f.setOptions.call(f, g) : e.data("textillate", f = new h(this, g))
        })
    }, a.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        "in": {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function () {}
    }
}(jQuery);
var gamell = function (a, b) {
        var c = !1,
            d = "You are viewing a limited version of the site, please use a desktop browser to enjoy a much better experience.",
            e = 'You are using an <strong>unsupported</strong> browser. Please <a href="http://browsehappy.com/">use a supported browser</a> - Chrome, Firefox or Safari - to improve your experience.',
            f = "http://gamell.io/media/resume-joan-gamell.pdf",
            g = "/sprite.png",
            h = "/scripts/deferred/deferred.js",
            i = function () {
                a(".animate").textillate({
                    selector: ".texts",
                    loop: !1,
                    minDisplayTime: 2e3,
                    initialDelay: 0,
                    autoStart: !0,
                    "in": {
                        effect: "fadeInDownBig",
                        delayScale: 2,
                        delay: 70,
                        sync: !1,
                        shuffle: !0
                    }
                })
            },
            j = function (b, c) {
                c < h.length ? a.getScript(h[c]).done(function () {
                    j(b, c + 1)
                }) : b.resolve("hurray")
            },
            k = function () {
                if (h instanceof Array) {
                    var b = new jQuery.Deferred;
                    return j(b, 0), b.promise()
                }
                return a.getScript(h)
            },
            l = function () {
                var b = {
                    html: !0,
                    fade: !0
                };
                a("span.dropbox-success").tipsy(a.extend({}, b, {
                    gravity: "n",
                    trigger: "manual"
                })), a("#resume-formal .custom-header h2 a").tipsy(a.extend({}, b)), a("#contact ul a").tipsy(a.extend({}, b)), a(".skills span.web").tipsy(a.extend({}, b, {
                    gravity: "s"
                })), a(".skills span.javascript").tipsy(a.extend({}, b, {
                    gravity: "s"
                })), a(".skills span.qc").tipsy(a.extend({}, b, {
                    gravity: "e"
                })), a(".skills span.other").tipsy(a.extend({}, b, {
                    gravity: "s"
                })), a(".skills span.project").tipsy(a.extend({}, b, {
                    gravity: "n"
                }))
            },
            m = function () {
                a("img.needs-init").each(function (b, c) {
                    a(c).attr("src", a(c).attr("rel"))
                })
            },
            n = function () {
                a(".github-button").html('<iframe src="github-btn.html?user=gamell&repo=gamell.io&type=fork" allowtransparency="true" frameborder="0" scrolling="0" width="62" height="20"></iframe>')
            },
            o = function () {
                a("body").append('<script type="text/javascript" src="https://www.dropbox.com/static/api/1/dropins.js" id="dropboxjs" data-app-key="e7nb3h5uznhkmq9"></script>'), a("#resume-formal .dropbox-button").bind("click", function () {
                    try {
                        var a = {
                            files: [{
                                filename: "Resume Joan Gamell.pdf",
                                url: f
                            }],
                            success: p,
                            error: function (a) {
                                alert("There was an error while saving the file to your dropbox: " + a)
                            }
                        };
                        Dropbox.save(a)
                    } catch (b) {
                        location.href = f
                    }
                })
            },
            p = function () {
                var b = a("span.dropbox-success");
                b.tipsy("show"), setTimeout(function () {
                    b.tipsy("hide")
                }, 3e3)
            },
            q = function () {
                var b = a(".fallback-message p");
                !t() && a("body").hasClass("mobile") ? b.html(d) : t() || b.html(e)
            },
            r = function () {
                "#/resume-infographic-world-map" !== b.location.hash && t() ? a(b).on("hashchange", function () {
                    "#/resume-infographic-world-map" === b.location.hash && u()
                }) : u()
            },
            s = function () {
                "#/resume-formal" !== b.location.hash && t() ? a(b).on("hashchange", function () {
                    "#/resume-formal" === b.location.hash && m()
                }) : m()
            },
            t = function () {
                return !a("body.impress-not-supported").length > 0
            },
            u = function () {
                worldMap && !c && (worldMap.initRotation(), c = !0)
            },
            v = function () {
                t() || a(".fa-print").hide()
            },
            w = function () {
                n(), k().done(function () {
                    l(), r(), s(), o()
                })
            },
            x = function () {
                a(".sprite").css("backgroundImage", "url(" + g + ")")
            },
            y = function () {
                impress().init(), q(), v(), a(document).ready(function () {
                    i(), a(b).load(function () {
                        w(), x()
                    })
                })
            };
        y()
    }(jQuery, window);

