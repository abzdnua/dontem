

    (function() {

        this._ycssjs || (this._ycssjs = function(a, b) {
            return !(a in _ycssjs || _ycssjs[a]++)
        })
    })()


if (_ycssjs("scXQOb8a724JIJadBbRT65s7hXk")) {
    if (_ycssjs("cAErHV4ulnr5YaxKCTqKZTQD2kI")) {
        (function(e) {
            var b = (function() {
                _
            }).toString().indexOf("_") > -1, a = e.browser.msie, c = a ? ["toString", "valueOf"] : null, f = function() {
            };
            function d(h, g, i) {
                var k = false;
                if (a) {
                    var j = [];
                    e.each(c, function() {
                        i.hasOwnProperty(this) && (k = true) && j.push({name: this,val: i[this]})
                    });
                    if (k) {
                        e.each(i, function(l) {
                            j.push({name: l,val: this})
                        });
                        i = j
                    }
                }
                e.each(i, function(m, n) {
                    if (k) {
                        m = n.name;
                        n = n.val
                    }
                    if (e.isFunction(n) && (!b || n.toString().indexOf(".__base") > -1)) {
                        var l = h[m] || function() {
                        };
                        g[m] = function() {
                            var p = this.__base;
                            this.__base = l;
                            var o = n.apply(this, arguments);
                            this.__base = p;
                            return o
                        }
                    } else {
                        g[m] = n
                    }
                })
            }
            e.inherit = function() {
                var l = arguments, n = e.isFunction(l[0]), h = n ? l[0] : f, m = l[n ? 1 : 0] || {}, j = l[n ? 2 : 1], o = m.__constructor || (n && h.prototype.__constructor) ? function() {
                    return this.__constructor.apply(this, arguments)
                } : function() {
                };
                if (!n) {
                    o.prototype = m;
                    o.prototype.__self = o.prototype.constructor = o;
                    return e.extend(o, j)
                }
                e.extend(o, h);
                var i = function() {
                }, k = i.prototype = h.prototype, g = o.prototype = new i();
                g.__self = g.constructor = o;
                d(k, g, m);
                j && d(h, o, j);
                return o
            };
            e.inheritSelf = function(j, h, i) {
                var g = j.prototype;
                d(g, g, h);
                i && d(j, j, i);
                return j
            }
        })(jQuery)
    }
    if (_ycssjs("eim9mbh+HguuX6sdshSBuau+YF8")) {
        (function(c) {
            var a = 0, d = "__" + (+new Date), b = function() {
                return "uniq" + ++a
            };
            c.identify = function(g, f) {
                if (!g) {
                    return b()
                }
                var e = "uniqueID" in g ? "uniqueID" : d;
                return f || e in g ? g[e] : g[e] = b()
            }
        })(jQuery)
    }
    if (_ycssjs("gOR9FuNtxxFTRUHpBJCppIiGQD8")) {
        (function(a) {
            a.isEmptyObject || (a.isEmptyObject = function(c) {
                for (var b in c) {
                    return false
                }
                return true
            })
        })(jQuery)
    }
    if (_ycssjs("AW47RAjsjOlefg/2L/CsT2aXktI")) {
        (function(a) {
            a.extend({debounce: function(c, d, e, b) {
                if (arguments.length == 3 && typeof e != "boolean") {
                    b = e;
                    e = false
                }
                var f;
                return function() {
                    var g = arguments;
                    b = b || this;
                    e && !f && c.apply(b, g);
                    clearTimeout(f);
                    f = setTimeout(function() {
                        e || c.apply(b, g);
                        f = null
                    }, d)
                }
            },throttle: function(e, f, b) {
                var g, d, c;
                return function() {
                    d = arguments;
                    c = true;
                    b = b || this;
                    g || (function() {
                        if (c) {
                            e.apply(b, d);
                            c = false;
                            g = setTimeout(arguments.callee, f)
                        } else {
                            g = null
                        }
                    })()
                }
            }})
        })(jQuery)
    }
    if (_ycssjs("0WzhV/FgZkzz0oQxZmAW2O1WH7c")) {
        (function(d) {
            var a = "__" + +new Date + "storage", c = function(f, e) {
                return d.identify(f) + (e ? d.identify(e) : "")
            }, b = {buildEventName: function(f) {
                return f
            },on: function(o, j, p, t, m) {
                if (typeof o == "string") {
                    if (d.isFunction(j)) {
                        t = p;
                        p = j;
                        j = undefined
                    }
                    var f = c(p, t), l = this[a] || (this[a] = {}), g = o.split(" "), h = 0, q;
                    while (o = g[h++]) {
                        o = this.buildEventName(o);
                        q = l[o] || (l[o] = {ids: {},list: {}});
                        if (!(f in q.ids)) {
                            var n = q.list, s = {fn: p,data: j,ctx: t,special: m};
                            if (n.last) {
                                n.last.next = s;
                                s.prev = n.last
                            } else {
                                n.first = s
                            }
                            q.ids[f] = n.last = s
                        }
                    }
                } else {
                    var k = this;
                    d.each(o, function(u, i) {
                        k.on(u, i, j, m)
                    })
                }
                return this
            },onFirst: function(i, h, g, f) {
                return this.on(i, h, g, f, {one: true})
            },un: function(p, q, u) {
                if (typeof p == "string" || typeof p == "undefined") {
                    var n = this[a];
                    if (n) {
                        if (p) {
                            var h = p.split(" "), k = 0, s;
                            while (p = h[k++]) {
                                p = this.buildEventName(p);
                                if (s = n[p]) {
                                    if (q) {
                                        var g = c(q, u), f = s.ids;
                                        if (g in f) {
                                            var o = s.list, t = f[g], j = t.prev, l = t.next;
                                            if (j) {
                                                j.next = l
                                            } else {
                                                if (t === o.first) {
                                                    o.first = l
                                                }
                                            }
                                            if (l) {
                                                l.prev = j
                                            } else {
                                                if (t === o.last) {
                                                    o.last = j
                                                }
                                            }
                                            delete f[g]
                                        }
                                    } else {
                                        delete this[a][p]
                                    }
                                }
                            }
                        } else {
                            delete this[a]
                        }
                    }
                } else {
                    var m = this;
                    d.each(p, function(v, i) {
                        m.un(v, i, u)
                    })
                }
                return this
            },trigger: function(j, h) {
                var l = this, k = l[a], i;
                typeof j === "string" ? j = d.Event(l.buildEventName(i = j)) : j.type = l.buildEventName(i = j.type);
                j.target || (j.target = l);
                if (k && (k = k[j.type])) {
                    var g = k.list.first, f;
                    while (g) {
                        j.data = g.data;
                        f = g.fn.call(g.ctx || l, j, h);
                        if (typeof f !== "undefined") {
                            j.result = f;
                            if (f === false) {
                                j.preventDefault();
                                j.stopPropagation()
                            }
                        }
                        g.special && g.special.one && l.un(i, g.fn, g.ctx);
                        g = g.next
                    }
                }
                return this
            }};
            d.observable = d.inherit(b, b)
        })(jQuery)
    }
    if (_ycssjs("wPX3rJZ8aeXecCalKPR3xgvNSa0")) {
        (function(f, h) {
            var e = [], g = {}, a = {};
            function d(k, j, i) {
                return (k ? "__elem_" + k : "") + "__mod" + (j ? "_" + j : "") + (i ? "_" + i : "")
            }
            function c(j, i, k) {
                f.isFunction(j) ? (i[d(k, "*", "*")] = j) : f.each(j, function(m, l) {
                    f.isFunction(l) ? (i[d(k, m, "*")] = l) : f.each(l, function(n, o) {
                        i[d(k, m, n)] = o
                    })
                })
            }
            function b(j, i) {
                return i ? Array.isArray(i) ? function(m) {
                    var l = 0, k = i.length;
                    while (l < k) {
                        if (m.hasMod(j, i[l++])) {
                            return true
                        }
                    }
                    return false
                } : function(k) {
                    return k.hasMod(j, i)
                } : function(k) {
                    return k.hasMod(j)
                }
            }
            this.BEM = f.inherit(f.observable, {__constructor: function(j, k, i) {
                var l = this;
                l._modCache = j || {};
                l._processingMods = {};
                l._params = k;
                l.params = null;
                i !== false ? l._init() : l.afterCurrentEvent(function() {
                    l._init()
                })
            },_init: function() {
                if (!this._initing && !this.hasMod("js", "inited")) {
                    this._initing = true;
                    if (!this.params) {
                        this.params = f.extend(this.getDefaultParams(), this._params);
                        delete this._params
                    }
                    this.setMod("js", "inited");
                    delete this._initing;
                    this.hasMod("js", "inited") && this.trigger("init")
                }
                return this
            },changeThis: function(j, i) {
                return j.bind(i || this)
            },afterCurrentEvent: function(j, i) {
                this.__self.afterCurrentEvent(this.changeThis(j, i))
            },trigger: function(j, i) {
                this.__base(j = this.buildEvent(j), i).__self.trigger(j, i);
                return this
            },buildEvent: function(i) {
                typeof i == "string" && (i = f.Event(i));
                i.block = this;
                return i
            },hasMod: function(l, m, j) {
                var i = arguments.length, n = false;
                if (i == 1) {
                    j = "";
                    m = l;
                    l = h;
                    n = true
                } else {
                    if (i == 2) {
                        if (typeof l == "string") {
                            j = m;
                            m = l;
                            l = h
                        } else {
                            j = "";
                            n = true
                        }
                    }
                }
                var k = this.getMod(l, m) === j;
                return n ? !k : k
            },getMod: function(k, l) {
                var i = typeof k;
                if (i === "string" || i === "undefined") {
                    l = k || l;
                    var j = this._modCache;
                    return l in j ? j[l] : j[l] = this._extractModVal(l)
                }
                return this._getElemMod(l, k)
            },_getElemMod: function(k, i, j) {
                return this._extractModVal(k, i, j)
            },getMods: function(l) {
                var j = l && typeof l != "string", m = this, i = [].slice.call(arguments, j ? 1 : 0), k = m._extractMods(i, j ? l : h);
                if (!j) {
                    i.length ? i.forEach(function(n) {
                        m._modCache[n] = k[n]
                    }) : m._modCache = k
                }
                return k
            },setMod: function(k, p, q) {
                if (typeof q == "undefined") {
                    q = p;
                    p = k;
                    k = h
                }
                var l = this;
                if (!k || k[0]) {
                    var m = (k && k[0] ? f.identify(k[0]) : "") + "_" + p;
                    if (this._processingMods[m]) {
                        return l
                    }
                    var j, n = k ? l._getElemMod(p, k, j = l.__self._extractElemNameFrom(k)) : l.getMod(p);
                    if (n === q) {
                        return l
                    }
                    this._processingMods[m] = true;
                    var i = true, o = [p, q, n];
                    k && o.unshift(k);
                    [["*", "*"], [p, "*"], [p, q]].forEach(function(s) {
                        i = l._callModFn(j, s[0], s[1], o) !== false && i
                    });
                    !k && i && (l._modCache[p] = q);
                    i && l._afterSetMod(p, q, n, k, j);
                    delete this._processingMods[m]
                }
                return l
            },_afterSetMod: function(l, i, m, j, k) {
            },toggleMod: function(k, l, j, n, m) {
                if (typeof k == "string") {
                    m = n;
                    n = j;
                    j = l;
                    l = k;
                    k = h
                }
                if (typeof n == "undefined") {
                    n = ""
                } else {
                    if (typeof n == "boolean") {
                        m = n;
                        n = ""
                    }
                }
                var i = this.getMod(k, l);
                (i == j || i == n) && this.setMod(k, l, typeof m === "boolean" ? (m ? j : n) : this.hasMod(k, l, j) ? n : j);
                return this
            },delMod: function(i, j) {
                if (!j) {
                    j = i;
                    i = h
                }
                return this.setMod(i, j, "")
            },_callModFn: function(l, k, i, j) {
                var m = d(l, k, i);
                return this[m] ? this[m].apply(this, j) : h
            },_extractModVal: function(j, i) {
                return ""
            },_extractMods: function(i, j) {
                return {}
            },channel: function(j, i) {
                return this.__self.channel(j, i)
            },getDefaultParams: function() {
                return {}
            },del: function(j) {
                var i = [].slice.call(arguments);
                typeof j == "string" && i.unshift(this);
                this.__self.del.apply(this.__self, i);
                return this
            },destruct: function() {
            }}, {_name: "i-bem",blocks: g,decl: function(j, k, n) {
                if (typeof j == "string") {
                    j = {block: j}
                } else {
                    if (j.name) {
                        j.block = j.name
                    }
                }
                if (j.baseBlock && !g[j.baseBlock]) {
                    throw ('baseBlock "' + j.baseBlock + '" for "' + j.block + '" is undefined')
                }
                k || (k = {});
                if (k.onSetMod) {
                    c(k.onSetMod, k);
                    delete k.onSetMod
                }
                if (k.onElemSetMod) {
                    f.each(k.onElemSetMod, function(q, p) {
                        c(p, k, q)
                    });
                    delete k.onElemSetMod
                }
                var m = g[j.baseBlock || j.block] || this;
                if (j.modName) {
                    var i = b(j.modName, j.modVal);
                    f.each(k, function(p, q) {
                        f.isFunction(q) && (k[p] = function() {
                            var t;
                            if (i(this)) {
                                t = q
                            } else {
                                var s = m.prototype[p];
                                s && s !== k[p] && (t = this.__base)
                            }
                            return t ? t.apply(this, arguments) : h
                        })
                    })
                }
                if (n && typeof n.live === "boolean") {
                    var l = n.live;
                    n.live = function() {
                        return l
                    }
                }
                var o;
                j.block == m._name ? (o = f.inheritSelf(m, k, n))._processLive(true) : (o = g[j.block] = f.inherit(m, k, n))._name = j.block;
                return o
            },_processLive: function(i) {
                return false
            },create: function(j, i) {
                typeof j == "string" && (j = {block: j});
                return new g[j.block](j.mods, i)
            },getName: function() {
                return this._name
            },_extractElemNameFrom: function(i) {
            },afterCurrentEvent: function(j, i) {
                e.push({fn: j,ctx: i}) == 1 && setTimeout(this._runAfterCurrentEventFns, 0)
            },_runAfterCurrentEventFns: function() {
                var j = e.length;
                if (j) {
                    var i, k = e.splice(0, j);
                    while (i = k.shift()) {
                        i.fn.call(i.ctx || this)
                    }
                }
            },changeThis: function(j, i) {
                return j.bind(i || this)
            },del: function(m) {
                var l = typeof m == "string", k = l ? 0 : 1, j = arguments.length;
                l && (m = this);
                while (k < j) {
                    delete m[arguments[k++]]
                }
                return this
            },channel: function(j, i) {
                if (typeof j == "boolean") {
                    i = j;
                    j = h
                }
                j || (j = "default");
                if (i) {
                    if (a[j]) {
                        a[j].un();
                        delete a[j]
                    }
                    return
                }
                return a[j] || (a[j] = new f.observable())
            }})
        })(jQuery)
    }
    if (_ycssjs("I3cBlUXdbJl5WGhNNjZ8sIMbDY4")) {
        (function() {
            Object.keys || (Object.keys = function(c) {
                var b = [];
                for (var a in c) {
                    c.hasOwnProperty(a) && b.push(a)
                }
                return b
            })
        })()
    }
    if (_ycssjs("6OtocFE1B3Wsk4aWWQmvNc911GU")) {
        (function() {
            var a = Array.prototype, d = Object.prototype.toString, b = {indexOf: function(h, g) {
                g = +(g || 0);
                var f = this, e = f.length;
                if (e > 0 && g < e) {
                    g = g < 0 ? Math.ceil(g) : Math.floor(g);
                    g < -e && (g = 0);
                    g < 0 && (g = g + e);
                    while (g < e) {
                        if (g in f && f[g] === h) {
                            return g
                        }
                        ++g
                    }
                }
                return -1
            },forEach: function(j, f) {
                var h = -1, g = this, e = g.length;
                while (++h < e) {
                    h in g && (f ? j.call(f, g[h], h, g) : j(g[h], h, g))
                }
            },map: function(k, f) {
                var j = -1, h = this, e = h.length, g = new Array(e);
                while (++j < e) {
                    j in h && (g[j] = f ? k.call(f, h[j], j, h) : k(h[j], j, h))
                }
                return g
            },filter: function(k, f) {
                var j = -1, h = this, e = h.length, g = [];
                while (++j < e) {
                    j in h && (f ? k.call(f, h[j], j, h) : k(h[j], j, h)) && g.push(h[j])
                }
                return g
            },reduce: function(k, j) {
                var h = -1, g = this, e = g.length, f;
                if (arguments.length < 2) {
                    while (++h < e) {
                        if (h in g) {
                            f = g[h];
                            break
                        }
                    }
                } else {
                    f = j
                }
                while (++h < e) {
                    h in g && (f = k(f, g[h], h, g))
                }
                return f
            },some: function(j, f) {
                var h = -1, g = this, e = g.length;
                while (++h < e) {
                    if (h in g && (f ? j.call(f, g[h], h, g) : j(g[h], h, g))) {
                        return true
                    }
                }
                return false
            },every: function(j, f) {
                var h = -1, g = this, e = g.length;
                while (++h < e) {
                    if (h in g && !(f ? j.call(f, g[h], h, g) : j(g[h], h, g))) {
                        return false
                    }
                }
                return true
            }};
            for (var c in b) {
                a[c] || (a[c] = b[c])
            }
            Array.isArray || (Array.isArray = function(e) {
                return d.call(e) === "[object Array]"
            })
        })()
    }
    if (_ycssjs("vAscd2mB4A4XPDZE8/rLW4IBSF8")) {
        (function() {
            var a = Array.prototype.slice;
            Function.prototype.bind || (Function.prototype.bind = function(b) {
                var d = this, c = a.call(arguments, 1);
                return function() {
                    return d.apply(b, c.concat(a.call(arguments)))
                }
            })
        })()
    }
    if (_ycssjs("6YSbDnoDDnBKVlioGZ/4J1+Ohhg")) {
        (function(i, b, a) {
            var g = "_", c = "__", d = "[a-zA-Z0-9-]+";
            function e(l, j, k) {
                k.push(g, l, g, j)
            }
            function f(l, m, j, k) {
                k.push(l);
                j && e(m, j, k)
            }
            function h(n, l, m, j, k) {
                f(n, a, a, k);
                k.push(c, l);
                j && e(m, j, k)
            }
            i.INTERNAL = {NAME_PATTERN: d,MOD_DELIM: g,ELEM_DELIM: c,buildModPostfix: function(m, j, k) {
                var l = k || [];
                e(m, j, l);
                return k ? l : l.join("")
            },buildClass: function(p, n, o, j, k) {
                var m = typeof o;
                if (m == "string") {
                    if (typeof j != "string") {
                        k = j;
                        j = o;
                        o = n;
                        n = a
                    }
                } else {
                    if (m != "undefined") {
                        k = o;
                        o = a
                    } else {
                        if (n && typeof n != "string") {
                            k = n;
                            n = a
                        }
                    }
                }
                if (!(n || o || k)) {
                    return p
                }
                var l = k || [];
                n ? h(p, n, o, j, l) : f(p, o, j, l);
                return k ? l : l.join("")
            },buildClasses: function(n, m, l, j) {
                if (m && typeof m != "string") {
                    j = l;
                    l = m;
                    m = a
                }
                var k = j || [];
                m ? h(n, m, a, a, k) : f(n, a, a, k);
                l && b.each(l, function(p, o) {
                    if (o) {
                        k.push(" ");
                        m ? h(n, m, p, o, k) : f(n, p, o, k)
                    }
                });
                return j ? k : k.join("")
            }}
        })(BEM, jQuery)
    }
    if (_ycssjs("AUiCuvCsFkeXqPHTCnve3trT+eI")) {
        jQuery.cookie = function(b, j, m) {
            if (typeof j != "undefined") {
                m = m || {};
                if (j === null) {
                    j = "";
                    m.expires = -1
                }
                var e = "";
                if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
                    var f;
                    if (typeof m.expires == "number") {
                        f = new Date();
                        f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
                    } else {
                        f = m.expires
                    }
                    e = "; expires=" + f.toUTCString()
                }
                var l = m.path ? "; path=" + (m.path) : "";
                var g = m.domain ? "; domain=" + (m.domain) : "";
                var a = m.secure ? "; secure" : "";
                document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
            } else {
                var d = null;
                if (document.cookie && document.cookie != "") {
                    var k = document.cookie.split(";");
                    for (var h = 0; h < k.length; h++) {
                        var c = jQuery.trim(k[h]);
                        if (c.substring(0, b.length + 1) == (b + "=")) {
                            d = decodeURIComponent(c.substring(b.length + 1));
                            break
                        }
                    }
                }
                return d
            }
        }
    }
    if (_ycssjs("AUiCuvCsFkeXqPHTCnve3trT+eI")) {
        jQuery.cookie = function(b, j, m) {
            if (typeof j != "undefined") {
                m = m || {};
                if (j === null) {
                    j = "";
                    m.expires = -1
                }
                var e = "";
                if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
                    var f;
                    if (typeof m.expires == "number") {
                        f = new Date();
                        f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
                    } else {
                        f = m.expires
                    }
                    e = "; expires=" + f.toUTCString()
                }
                var l = m.path ? "; path=" + (m.path) : "";
                var g = m.domain ? "; domain=" + (m.domain) : "";
                var a = m.secure ? "; secure" : "";
                document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
            } else {
                var d = null;
                if (document.cookie && document.cookie != "") {
                    var k = document.cookie.split(";");
                    for (var h = 0; h < k.length; h++) {
                        var c = jQuery.trim(k[h]);
                        if (c.substring(0, b.length + 1) == (b + "=")) {
                            d = decodeURIComponent(c.substring(b.length + 1));
                            break
                        }
                    }
                }
                return d
            }
        }
    }
    if (_ycssjs("E6vqydSSAYnWVICbcEV2tFXJF1U")) {
        (function(o, g, e) {
            var k = o.INTERNAL, j = k.ELEM_DELIM, l = {area: 1,base: 1,br: 1,col: 1,command: 1,embed: 1,hr: 1,img: 1,input: 1,keygen: 1,link: 1,meta: 1,param: 1,source: 1,wbr: 1}, f = k.buildClass, m = k.buildClasses, n = {};
            function i(p, q, s) {
                (p[q] || (p[q] = [])).unshift(s)
            }
            function d(p, q) {
                return q.modName ? function(s) {
                    (s._curBlock.mods || {})[q.modName] === q.modVal && p(s)
                } : p
            }
            function c(q, p) {
                var t = g.isArray(p), s;
                g.isArray(q) ? t ? s = q.concat(p) : (s = q).push(p) : t ? (s = p).unshift(q) : s = [q, p];
                return s
            }
            var b = {'"': "&quot;","&": "&amp;","<": "&lt;",">": "&gt;"}, a = /["&<>]/g;
            function h(p) {
                return p.replace(a, function(q) {
                    return b[q]
                })
            }
            o.HTML = {decl: function(s, q) {
                typeof s == "string" && (s = {block: s});
                s.name && (s.block = s.name);
                var p = n[s.block] || (n[s.block] = {});
                q.onBlock && i(p, "_block", d(q.onBlock, s));
                if (q.onElem) {
                    g.isFunction(q.onElem) ? i(p, "_elem", d(q.onElem, s)) : g.each(q.onElem, function(u, t) {
                        i(p, "_elem" + (u === "*" ? "" : j + u), d(t, s))
                    })
                }
            },build: function(q) {
                var p = new this.Ctx(q);
                p._buildAll();
                return p._flush()
            },Ctx: g.inherit({__constructor: function(p) {
                this._buffer = [];
                this._params = p;
                this._tParams = null;
                this._tParamsChanges = null;
                this._curBlock = e
            },pos: function() {
                return this._params._pos
            },isFirst: function() {
                return this._params._pos === 1
            },isLast: function() {
                var p = this._params;
                return p._pos === p._siblingsCount
            },params: function(p) {
                var q = this;
                if (typeof p == "undefined") {
                    return q._params
                }
                q._params = p;
                return q
            },param: function(p, t, q, v) {
                var u = this, s = u._params;
                if (typeof t == "undefined") {
                    return s[p]
                }
                if (q || !(p in s)) {
                    s[p] = t
                } else {
                    if (v) {
                        s[p] = g.extend(t, s[p])
                    }
                }
                return u
            },attrs: function(q, p) {
                return this.param("attrs", q, p, true)
            },attr: function(q, t, s) {
                var u = this;
                if (typeof t == "undefined") {
                    return (u._params.attrs || {})[q]
                }
                var p = u._params.attrs;
                p ? (s || !(q in p)) && (p[q] = t) : (u._params.attrs = {})[q] = t;
                return u
            },tag: function(q, p) {
                return this.param("tag", q, p)
            },cls: function(q, p) {
                return this.param("cls", q, p)
            },mods: function(q, p) {
                return this.param("mods", q, p, true)
            },mod: function(p, t, s) {
                var u = this;
                if (typeof t == "undefined") {
                    return (u._params.mods || {})[p]
                }
                var q = u._params.mods;
                q ? (s || !(p in q)) && (q[p] = t) : (u._params.mods = {})[p] = t;
                return u
            },mix: function(s, p) {
                var t = this, q = t._params;
                if (typeof s == "undefined") {
                    return q.mix
                }
                if (p || !("mix" in q)) {
                    q.mix = s
                } else {
                    q.mix = q.mix.concat(s)
                }
                return t
            },js: function(p) {
                return this.param("js", p)
            },content: function(q, p) {
                return this.param("content", q, p)
            },wrapContent: function(p) {
                var s = this, q = s._params;
                p.content = q.content;
                q.content = p;
                return s
            },beforeContent: function(p) {
                var s = this, q = s._params;
                q.content = c(p, q.content);
                return s
            },afterContent: function(p) {
                var s = this, q = s._params;
                q.content = c(q.content, p);
                return s
            },wrap: function(p) {
                var s = this, q = s._params;
                p.block || (p._curBlock = s._curBlock);
                p.content = q._wrapper ? q._wrapper : q;
                q._wrapper = p;
                return s
            },tParam: function(p, t) {
                var u = this, s = u._tParams || (u._tParams = {});
                if (typeof t == "undefined") {
                    return s[p]
                }
                var q = u._tParamsChanges || (u._tParamsChanges = {});
                p in q || (q[p] = s[p]);
                s[p] = t;
                return u
            },generateId: function() {
                return g.identify()
            },stop: function() {
                this._params._isStopped = true
            },_buildAll: function() {
                var y = this, q = y._buffer, x = y._params, u = typeof x;
                if (u == "string" || u == "number") {
                    q.push(x)
                } else {
                    if (g.isArray(x)) {
                        var t = 0, p = x.length, s, v;
                        while (t < p) {
                            y._params = s = x[t++];
                            v = typeof s;
                            if (v == "string" || v == "number") {
                                q.push(s)
                            } else {
                                if (s) {
                                    s._pos = t;
                                    s._siblingsCount = p;
                                    y._buildByDecl()
                                }
                            }
                        }
                    } else {
                        if (x) {
                            y._params._pos = y._params._siblingsCount = 1;
                            y._buildByDecl()
                        }
                    }
                }
            },_build: function() {
                var y = this, s = y._buffer, v = y._params, p = v.tag || "div", u, t = v.block || v.elem, x = t && (v.block || y._curBlock.block), q = false;
                if (v.js) {
                    (u = {})[f(x, v.elem)] = v.js === true ? {} : v.js;
                    q = !v.elem
                }
                s.push("<", p);
                if (t || v.cls) {
                    s.push(' class="');
                    if (t) {
                        m(x, v.elem, v.mods, s);
                        v.mix && g.each(v.mix, function(z, A) {
                            if (A) {
                                s.push(" ");
                                m(A.block, A.elem, A.mods, s);
                                if (A.js) {
                                    (u || (u = {}))[f(A.block, A.elem)] = A.js === true ? {} : A.js;
                                    q || (q = !A.elem)
                                }
                            }
                        })
                    }
                    v.cls && s.push(t ? " " : "", v.cls);
                    q && s.push(" i-bem");
                    s.push('"')
                }
                u && s.push(' onclick="return ', h(JSON.stringify(u)), '"');
                v.attrs && g.each(v.attrs, function(z, A) {
                    typeof A != "undefined" && A !== null && A !== false && s.push(" ", z, '="', A.toString().replace(/"/g, "&quot;"), '"')
                });
                if (l[p]) {
                    s.push("/>")
                } else {
                    s.push(">");
                    if (typeof v.content != "undefined") {
                        y._params = v.content;
                        y._buildAll()
                    }
                    s.push("</", p, ">")
                }
            },_flush: function() {
                var p = this._buffer.join("");
                delete this._buffer;
                return p
            },_buildByDecl: function() {
                var t = this, x = t._curBlock, p = t._params;
                p._curBlock && (t._curBlock = p._curBlock);
                p.block && (t._curBlock = p);
                if (!p._wrapper) {
                    if (p.block || p.elem) {
                        var v = n[t._curBlock.block];
                        if (v) {
                            var y;
                            if (p.elem) {
                                y = v["_elem" + j + p.elem];
                                v._elem && (y = (y ? y.concat(v._elem) : v._elem))
                            } else {
                                y = v._block
                            }
                            if (y) {
                                var q = 0, u;
                                while (u = y[q++]) {
                                    u(t);
                                    if (p._isStopped) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    if (p._wrapper) {
                        p._curBlock = t._curBlock;
                        t._params = p._wrapper;
                        return t._buildAll()
                    }
                }
                var z = t._tParamsChanges;
                t._tParamsChanges = null;
                t._build();
                t._curBlock = x;
                if (z) {
                    var s = t._tParams;
                    g.each(z, function(A, B) {
                        typeof B == "undefined" ? delete s[A] : s[A] = B
                    })
                }
            }})}
        })(BEM, jQuery)
    }
    if (_ycssjs("8V4pKDaKj7uMkWJRnBMpSm4wQGs")) {
        (function(c) {
            if (window.JSON) {
                return
            }
            var b = Object.prototype.toString, e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, a = {"\b": "\\b","\t": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, d;
            window.JSON = {stringify: d = function(l) {
                if (l === null) {
                    return "null"
                }
                if (typeof l === "undefined") {
                    return c
                }
                switch (b.call(l)) {
                    case "[object String]":
                        e.lastIndex = 0;
                        return '"' + (e.test(l) ? l.replace(e, function(i) {
                            var m = a[i];
                            return typeof m === "string" ? m : "\\u" + ("0000" + i.charCodeAt(0).toString(16)).slice(-4)
                        }) : l) + '"';
                    case "[object Number]":
                    case "[object Boolean]":
                        return "" + l;
                    case "[object Array]":
                        var k = "[", j = 0, f = l.length, h;
                        while (j < f) {
                            h = d(l[j]);
                            k += (j++ ? "," : "") + (typeof h === "undefined" ? "null" : h)
                        }
                        return k + "]";
                    case "[object Object]":
                        var k = "{", j = 0, h;
                        for (var g in l) {
                            if (l.hasOwnProperty(g)) {
                                h = d(l[g]);
                                typeof h !== "undefined" && (k += (j++ ? "," : "") + '"' + g + '":' + h)
                            }
                        }
                        return k + "}";
                    default:
                        return c
                }
            }}
        })()
    }
    if (_ycssjs("c44rh8nP7qoKxk5VNJ9N30meCjY")) {
        (function(i, e, h) {
            var d = e(window), A = e(document), n = {}, y = {}, C = {}, f = {}, q = {}, x = i.blocks, b = i.INTERNAL, k = b.NAME_PATTERN, p = b.MOD_DELIM, j = b.ELEM_DELIM, B = b.buildModPostfix, u = b.buildClass;
            function s(F, D) {
                var E = F[0];
                e.each(t(E), function(G, I) {
                    c(I, E, G, D);
                    var H = y[I.uniqId];
                    if (H) {
                        if (H.domElem.index(E) < 0) {
                            H.domElem = H.domElem.add(F);
                            e.extend(H._params, I)
                        }
                    } else {
                        a(G, F, I)
                    }
                })
            }
            function a(L, H, G, E, M) {
                if (typeof G == "boolean") {
                    M = E;
                    E = G;
                    G = h
                }
                var I = H[0];
                G = c(G || t(I)[L], I, L);
                var K = G.uniqId;
                if (y[K]) {
                    return y[K]._init()
                }
                n[K] = n[K] ? n[K].add(H) : H;
                var D = I.parentNode;
                if (!D || D.nodeType === 11) {
                    e.unique(n[K])
                }
                var J = x[L] || v.decl(L, {}, {live: true});
                if (!(J._liveInitable = !!J._processLive()) || E || G.live === false) {
                    var F = new J(n[K], G, !!E);
                    delete n[K];
                    M && M.apply(F, Array.prototype.slice.call(arguments, 4));
                    return F
                }
            }
            function c(I, F, E, D) {
                (I || (I = {})).uniqId || (I.uniqId = (I.id ? E + "-id-" + I.id : e.identify()) + (D || e.identify()));
                var H = e.identify(F), G = C[H] || (C[H] = {});
                G[E] || (G[E] = I);
                return I
            }
            function z(E, D, G) {
                var F = E.find(D);
                return G ? F : F.add(E.filter(D))
            }
            function t(D) {
                var E = e.identify(D);
                return C[E] || (C[E] = g(D))
            }
            function g(F) {
                var E = F.onclick || F.ondblclick;
                if (!E && F.tagName.toLowerCase() == "body") {
                    var G = e(F), D = G.attr("onclick") || G.attr("ondblclick");
                    D && (E = Function(D))
                }
                return E ? E() : {}
            }
            function m(D) {
                delete C[e.identify(D)]
            }
            function l(E, D) {
                E.domElem.length === 1 ? E.destruct(true) : E.domElem = E.domElem.not(D)
            }
            function o() {
                return A[0][e.support.boxModel ? "documentElement" : "body"]
            }
            e.fn.bem = function(D, E) {
                return a(D, this, E, true)
            };
            var v = i.DOM = i.decl("i-bem__dom", {__constructor: function(E, F, D) {
                var G = this;
                G.domElem = E;
                G._eventNameCache = {};
                G._elemCache = {};
                y[G._uniqId = F.uniqId || e.identify(G)] = G;
                G._needSpecialUnbind = false;
                G.__base(null, F, D)
            },findBlocksInside: function(D, E) {
                return this._findBlocks("find", D, E)
            },findBlockInside: function(D, E) {
                return this._findBlocks("find", D, E, true)
            },findBlocksOutside: function(D, E) {
                return this._findBlocks("parents", D, E)
            },findBlockOutside: function(D, E) {
                return this._findBlocks("closest", D, E)[0] || null
            },findBlocksOn: function(D, E) {
                return this._findBlocks("", D, E)
            },findBlockOn: function(D, E) {
                return this._findBlocks("", D, E, true)
            },_findBlocks: function(N, D, F, G) {
                if (!F) {
                    F = D;
                    D = h
                }
                var I = D ? (typeof D == "string" ? this.findElem(D) : D) : this.domElem, H = typeof F == "string", M = H ? F : (F.block || F.blockName), E = "." + (H ? u(M) : u(M, F.modName, F.modVal)) + (G ? ":first" : ""), J = I.filter(E);
                N && (J = J.add(I[N](E)));
                if (G) {
                    return J[0] ? a(M, J.eq(0), true) : null
                }
                var L = [], K = {};
                e.each(J, function(O, P) {
                    var Q = a(M, e(P), true);
                    if (!K[Q._uniqId]) {
                        K[Q._uniqId] = true;
                        L.push(Q)
                    }
                });
                return L
            },bindToDomElem: function(E, F, D) {
                var G = this;
                D ? E.bind(G._buildEventName(F), function(H) {
                    (H.data || (H.data = {})).domElem = e(this);
                    return D.apply(G, arguments)
                }) : e.each(F, function(I, H) {
                    G.bindToDomElem(E, I, H)
                });
                return G
            },bindToDoc: function(E, D) {
                this._needSpecialUnbind = true;
                return this.bindToDomElem(A, E, D)
            },bindToWin: function(E, D) {
                this._needSpecialUnbind = true;
                return this.bindToDomElem(d, E, D)
            },bindTo: function(F, E, D) {
                if (!E || e.isFunction(E)) {
                    D = E;
                    E = F;
                    F = this.domElem
                } else {
                    if (typeof F == "string") {
                        F = this.elem(F)
                    }
                }
                return this.bindToDomElem(F, E, D)
            },unbindFromDomElem: function(D, E) {
                D.unbind(this._buildEventName(E));
                return this
            },unbindFromDoc: function(D) {
                return this.unbindFromDomElem(A, D)
            },unbindFromWin: function(D) {
                return this.unbindFromDomElem(d, D)
            },unbindFrom: function(E, D) {
                if (!D) {
                    D = E;
                    E = this.domElem
                } else {
                    if (typeof E == "string") {
                        E = this.elem(E)
                    }
                }
                return this.unbindFromDomElem(E, D)
            },_buildEventName: function(D) {
                var E = this;
                return D.indexOf(" ") > 1 ? D.split(" ").map(function(F) {
                    return E._buildOneEventName(F)
                }).join(" ") : E._buildOneEventName(D)
            },_buildOneEventName: function(F) {
                var H = this, D = H._eventNameCache;
                if (F in D) {
                    return D[F]
                }
                var G = "." + H._uniqId;
                if (F.indexOf(".") < 0) {
                    return D[F] = F + G
                }
                var E = ".bem_" + H.__self._name;
                return D[F] = F.split(".").map(function(J, I) {
                    return I == 0 ? J + E : E + "_" + J
                }).join("") + G
            },trigger: function(E, D) {
                this.__base(E = this.buildEvent(E), D).domElem && this._ctxTrigger(E, D);
                return this
            },_ctxTrigger: function(E, D) {
                var H = this, G = f[H.__self._buildCtxEventName(E.type)], F = {};
                G && H.domElem.each(function() {
                    var J = this, I = G.counter;
                    while (J && I) {
                        var L = e.identify(J, true);
                        if (L) {
                            if (F[L]) {
                                break
                            }
                            var K = G.ctxs[L];
                            if (K) {
                                e.each(K, function(N, M) {
                                    M.fn.call(M.ctx || H, E, D)
                                });
                                I--
                            }
                            F[L] = true
                        }
                        J = J.parentNode
                    }
                })
            },setMod: function(E, F, D) {
                if (E && typeof D != "undefined" && E.length > 1) {
                    var G = this;
                    E.each(function() {
                        var H = e(this);
                        H.__bemElemName = E.__bemElemName;
                        G.setMod(H, F, D)
                    });
                    return G
                }
                return this.__base(E, F, D)
            },_extractModVal: function(H, E, G) {
                var D = (E || this.domElem)[0], F;
                D && (F = D.className.match(this.__self._buildModValRE(H, G || E)));
                return F ? F[2] : ""
            },_extractMods: function(D, H) {
                var G = {}, E = !D.length, F = 0;
                ((H || this.domElem)[0].className.match(this.__self._buildModValRE("(" + (E ? k : D.join("|")) + ")", H, "g")) || []).forEach(function(I) {
                    var K = (I = I.trim()).lastIndexOf(p), J = I.substr(0, K - 1).lastIndexOf(p);
                    G[I.substr(J + 1, K - J - 1)] = I.substr(K + 1);
                    ++F
                });
                F < D.length && D.forEach(function(I) {
                    I in G || (G[I] = "")
                });
                return G
            },_afterSetMod: function(I, L, K, E, D) {
                var G = this.__self, H = G._buildModClassPrefix(I, D), J = G._buildModValRE(I, D), F = L === "";
                (E || this.domElem).each(function() {
                    var M = this.className;
                    M.indexOf(H) > -1 ? this.className = M.replace(J, (F ? "" : "$1" + H + L) + "$3") : F || e(this).addClass(H + L)
                });
                D && this.dropElemCache(D, I, K).dropElemCache(D, I, L)
            },findElem: function(G, I, H, F) {
                if (arguments.length % 2) {
                    F = H;
                    H = I;
                    I = G;
                    G = this.domElem
                } else {
                    if (typeof G == "string") {
                        G = this.findElem(G)
                    }
                }
                var E = this.__self, D = "." + I.split(" ").map(function(J) {
                    return u(E._name, J, H, F)
                }).join(",.");
                return z(G, D)
            },_elem: function(E, H, D) {
                var G = E + B(H, D), F;
                if (!(F = this._elemCache[G])) {
                    F = this._elemCache[G] = this.findElem(E, H, D);
                    F.__bemElemName = E
                }
                return F
            },elem: function(G, F, D) {
                if (F && typeof F != "string") {
                    F.__bemElemName = G;
                    return F
                }
                if (G.indexOf(" ") < 0) {
                    return this._elem(G, F, D)
                }
                var E = e([]), H = this;
                G.split(" ").forEach(function(I) {
                    E = E.add(H._elem(I, F, D))
                });
                return E
            },dropElemCache: function(G, F, D) {
                if (G) {
                    var H = this, E = B(F, D);
                    G.indexOf(" ") < 0 ? delete H._elemCache[G + E] : G.split(" ").forEach(function(I) {
                        delete H._elemCache[I + E]
                    })
                } else {
                    this._elemCache = {}
                }
                return this
            },elemParams: function(D) {
                var E;
                if (typeof D == "string") {
                    E = D;
                    D = this.elem(D)
                } else {
                    E = this.__self._extractElemNameFrom(D)
                }
                return g(D[0])[u(this.__self.getName(), E)] || {}
            },containsDomElem: function(E) {
                var D = false;
                this.domElem.each(function() {
                    return !(D = E.parents().andSelf().index(this) > -1)
                });
                return D
            },buildSelector: function(E, F, D) {
                return this.__self.buildSelector(E, F, D)
            },destruct: function(E) {
                var F = this, D = F.__self;
                F._isDestructing = true;
                F._needSpecialUnbind && D.doc.add(D.win).unbind("." + F._uniqId);
                F.dropElemCache().domElem.each(function(G, H) {
                    var I = t(H);
                    e.each(I, function(J, K) {
                        var L = y[K.uniqId];
                        if (L) {
                            if (!L._isDestructing) {
                                l(L, H);
                                delete I[J]
                            }
                        } else {
                            delete n[K.uniqId]
                        }
                    });
                    e.isEmptyObject(I) && m(H)
                });
                E || F.domElem.remove();
                delete y[F.un()._uniqId];
                delete F.domElem;
                delete F._elemCache;
                F.__base()
            }}, {doc: A,win: d,_processLive: function(E) {
                var G = this, F = G._liveInitable;
                if ("live" in G) {
                    var D = typeof F == "undefined";
                    if (D ^ E) {
                        F = G.live() !== false;
                        G.live = function() {
                        }
                    }
                }
                return F
            },init: function(E, G, F) {
                if (!E || e.isFunction(E)) {
                    F = G;
                    G = E;
                    E = A
                }
                var D = e.identify();
                z(E, ".i-bem").each(function() {
                    s(e(this), D)
                });
                G && this.afterCurrentEvent(function() {
                    G.call(F || this, E)
                });
                this._runAfterCurrentEventFns();
                return E
            },destruct: function(E, D, F) {
                if (typeof E != "boolean") {
                    F = D;
                    D = E;
                    E = h
                }
                z(D, ".i-bem", F).each(function(G, H) {
                    var I = t(this);
                    e.each(I, function(J, K) {
                        if (K.uniqId) {
                            var L = y[K.uniqId];
                            if (L) {
                                l(L, H);
                                delete I[J]
                            } else {
                                delete n[K.uniqId]
                            }
                        }
                    });
                    e.isEmptyObject(I) && m(this)
                });
                E || (F ? D.empty() : D.remove())
            },update: function(D, E, G, F) {
                this.destruct(D, true);
                this.init(D.html(E), G, F)
            },append: function(D, E) {
                this.init(e(E).appendTo(D))
            },prepend: function(D, E) {
                this.init(e(E).prependTo(D))
            },before: function(D, E) {
                this.init(e(E).insertBefore(D))
            },after: function(D, E) {
                this.init(e(E).insertAfter(D))
            },_buildCtxEventName: function(D) {
                return this._name + ":" + D
            },_liveClassBind: function(E, F, J, D) {
                var I = this;
                if (F.indexOf(" ") > -1) {
                    F.split(" ").forEach(function(K) {
                        I._liveClassBind(E, K, J, D)
                    })
                } else {
                    var H = q[F], G = e.identify(J);
                    if (!H) {
                        H = q[F] = {};
                        A.bind(F, I.changeThis(I._liveClassTrigger, I))
                    }
                    H = H[E] || (H[E] = {uniqIds: {},fns: []});
                    if (!(G in H.uniqIds)) {
                        H.fns.push({uniqId: G,fn: I._buildLiveEventFn(J, D)});
                        H.uniqIds[G] = H.fns.length - 1
                    }
                }
                return this
            },_liveClassUnbind: function(F, G, J) {
                var I = q[G];
                if (I) {
                    if (J) {
                        if (I = I[F]) {
                            var H = e.identify(J);
                            if (H in I.uniqIds) {
                                var E = I.uniqIds[H], D = I.fns.length - 1;
                                I.fns.splice(E, 1);
                                while (E < D) {
                                    I.uniqIds[I.fns[E++].uniqId] = E - 1
                                }
                                delete I.uniqIds[H]
                            }
                        }
                    } else {
                        delete I[F]
                    }
                }
                return this
            },_liveClassTrigger: function(J) {
                var I = q[J.type];
                if (I) {
                    var F = J.target, D = [];
                    for (var K in I) {
                        I.hasOwnProperty(K) && D.push(K)
                    }
                    do {
                        var E = " " + F.className + " ", H = 0;
                        while (K = D[H++]) {
                            if (E.indexOf(" " + K + " ") > -1) {
                                var G = 0, M = I[K].fns, L, N = false;
                                while (L = M[G++]) {
                                    if (L.fn.call(e(F), J) === false) {
                                        N = true
                                    }
                                }
                                N && J.preventDefault();
                                if (N || J.isPropagationStopped()) {
                                    return
                                }
                                D.splice(--H, 1)
                            }
                        }
                    } while (D.length && (F = F.parentNode))
                }
            },_buildLiveEventFn: function(F, D) {
                var E = this;
                return function(H) {
                    var G = [E._name, ((H.data || (H.data = {})).domElem = e(this)).closest(E.buildSelector()), true], I = a.apply(null, D ? G.concat([F, H]) : G);
                    if (I && !D && F) {
                        return F.apply(I, arguments)
                    }
                }
            },liveInitOnEvent: function(E, D, F) {
                return this.liveBindTo(E, D, F, true)
            },liveBindTo: function(H, E, G, D) {
                if (!E || e.isFunction(E)) {
                    G = E;
                    E = H;
                    H = h
                }
                if (!H || typeof H == "string") {
                    H = {elem: H}
                }
                H.elemName && (H.elem = H.elemName);
                var F = this;
                if (H.elem && H.elem.indexOf(" ") > 1) {
                    H.elem.split(" ").forEach(function(I) {
                        F._liveClassBind(u(F._name, I, H.modName, H.modVal), E, G, D)
                    });
                    return F
                }
                return F._liveClassBind(u(F._name, H.elem, H.modName, H.modVal), E, G, D)
            },liveUnbindFrom: function(E, D, G) {
                var F = this;
                if (E.indexOf(" ") > 1) {
                    E.split(" ").forEach(function(H) {
                        F._liveClassUnbind(u(F._name, H), D, G)
                    });
                    return F
                }
                return F._liveClassUnbind(u(F._name, E), D, G)
            },_liveInitOnBlockEvent: function(F, E, H, G) {
                var D = this._name;
                x[E].on(F, function(J) {
                    var I = arguments, K = J.block[G](D);
                    H && K.forEach(function(L) {
                        H.apply(L, I)
                    })
                });
                return this
            },liveInitOnBlockEvent: function(E, D, F) {
                return this._liveInitOnBlockEvent(E, D, F, "findBlocksOn")
            },liveInitOnBlockInsideEvent: function(E, D, F) {
                return this._liveInitOnBlockEvent(E, D, F, "findBlocksOutside")
            },liveInitOnBlockInit: function(D, E) {
                return this.liveInitOnBlockEvent("init", D, E)
            },liveInitOnBlockInsideInit: function(D, E) {
                return this.liveInitOnBlockInsideEvent("init", D, E)
            },on: function(D, H, G, F, E) {
                return D.jquery ? this._liveCtxBind(D, H, G, F, E) : this.__base(D, H, G, F)
            },un: function(D, G, F, E) {
                return D.jquery ? this._liveCtxUnbind(D, G, F, E) : this.__base(D, G, F)
            },liveCtxBind: function(D, H, G, F, E) {
                return this._liveCtxBind(D, H, G, F, E)
            },_liveCtxBind: function(D, I, H, G, F) {
                var K = this;
                if (typeof I == "string") {
                    if (e.isFunction(H)) {
                        F = G;
                        G = H;
                        H = h
                    }
                    if (I.indexOf(" ") > -1) {
                        I.split(" ").forEach(function(L) {
                            K._liveCtxBind(D, L, H, G, F)
                        })
                    } else {
                        var E = K._buildCtxEventName(I), J = f[E] || (f[E] = {counter: 0,ctxs: {}});
                        D.each(function() {
                            var M = e.identify(this), L = J.ctxs[M];
                            if (!L) {
                                L = J.ctxs[M] = {};
                                ++J.counter
                            }
                            L[e.identify(G) + (F ? e.identify(F) : "")] = {fn: G,data: H,ctx: F}
                        })
                    }
                } else {
                    e.each(I, function(M, L) {
                        K._liveCtxBind(D, M, L, H)
                    })
                }
                return K
            },liveCtxUnbind: function(D, G, F, E) {
                return this._liveCtxUnbind(D, G, F, E)
            },_liveCtxUnbind: function(D, G, F, E) {
                var I = this, H = f[G = I._buildCtxEventName(G)];
                if (H) {
                    D.each(function() {
                        var K = e.identify(this, true), J;
                        if (K && (J = H.ctxs[K])) {
                            F && delete J[e.identify(F) + (E ? e.identify(E) : "")];
                            if (!F || e.isEmptyObject(J)) {
                                H.counter--;
                                delete H.ctxs[K]
                            }
                        }
                    });
                    H.counter || delete f[G]
                }
                return I
            },_extractElemNameFrom: function(D) {
                if (D.__bemElemName) {
                    return D.__bemElemName
                }
                var E = D[0].className.match(this._buildElemNameRE());
                return E ? E[1] : h
            },extractParams: g,_buildModClassPrefix: function(E, D) {
                return u(this._name) + (D ? j + (typeof D === "string" ? D : this._extractElemNameFrom(D)) : "") + p + E + p
            },_buildModValRE: function(E, D, F) {
                return new RegExp("(\\s?)" + this._buildModClassPrefix(E, D) + "(" + k + ")(\\s|$)", F)
            },_buildElemNameRE: function() {
                return new RegExp(this._name + j + "(" + k + ")(?:\\s|$)")
            },buildSelector: function(E, F, D) {
                return "." + u(this._name, E, F, D)
            },getBlockByUniqId: function(D) {
                return y[D]
            },getWindowSize: function() {
                return {width: d.width(),height: d.height()}
            }})
        })(BEM, jQuery)
    }
    if (_ycssjs("5iPwhAxg0OtVlbQ7xKwlc6ZyD9A")) {
        (function() {
            String.prototype.trim || (String.prototype.trim = function() {
                var c = this.replace(/^\s\s*/, ""), a = /\s/, b = c.length;
                while (a.test(c.charAt(--b))) {
                }
                return c.slice(0, b + 1)
            })
        })()
    }
    if (_ycssjs("aIsupGFtZhGfKbXxiPQIrAPBfBk")) {
        (function(a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.isSessionValid = function() {
                return !!a.getCookie("yandex_login")
            }
        })(window.Lego)
    }
    if (_ycssjs("Rvrta3Tyv/KfYb7thDkhBmA1zcg")) {
        BEM.DOM.decl("i-global", {onSetMod: {js: function() {
            this.del(this.__self._params = $.extend({}, this.params), "uniqId", "name");
            var a = this.__self._params;
            a["passport-msg"] || (a["passport-msg"] = a.id);
            if (a["show-counters"] === undefined) {
                a["show-counters"] = Math.round(Math.random() * 100) <= a["show-counters-percent"]
            }
            a.locale = a.lang;
            $(function() {
                a.oframebust && Lego.oframebust(a.oframebust)
            })
        }},getDefaultParams: function() {
            return {id: "",login: Lego.isSessionValid() ? $.cookie("yandex_login") || "" : "",yandexuid: $.cookie("yandexuid"),lang: "ru",retpath: window.location.toString(),"passport-host": "https://passport.yandex.ru","pass-host": "//pass.yandex.ru","social-host": "//social.yandex.ru","lego-path": "/lego","show-counters-percent": 100}
        }}, {param: function(a) {
            return (this._params || {})[a]
        }})
    }
    if (_ycssjs("ba/lKJGUFztDE1E1Wefj9WP2bt0")) {
        !String.prototype.format && (String.prototype.format = function() {
            var b = /\{\d+\}/g, a = arguments;
            return this.replace(b, function(c) {
                return a[c.match(/\d+/)]
            })
        });
        !String.prototype.supplant && (String.prototype.supplant = function(a) {
            return this.replace(/{([^{}]*)}/g, function(d, c) {
                var e = a[c];
                return typeof e === "string" || typeof e === "number" ? e : d
            })
        });
        !String.prototype.truncate && (String.prototype.truncate = function(b, a) {
            return this.length > b ? this.substr(0, b) + (a ? a : "…") : this.toString()
        });
        !Array.prototype.indexOf && (Array.prototype.indexOf = function(c, d) {
            for (var b = (d || 0), a = this.length; b < a; b++) {
                if (this[b] === c) {
                    return b
                }
            }
            return -1
        });
        var global = {init: function() {
            BEM.blocks["b-page"].on("json:params", this._onJsonParams, this);
            BEM.blocks["i-request_type_bem"].on("json:params", this._onJsonParams, this)
        },_onJsonParams: function(b, a) {
            this.params = $.extend({}, this.params || {}, a)
        },getDomain: function(a) {
            return String(a).replace(/^((https?|ftp):\/\/)?(www\.)?([^\/]+)\/(.*)/, "$4")
        },parseUri: function(e) {
            var d = this.parseUriOptions, a = d.parser[d.strictMode ? "strict" : "loose"].exec(e), c = {}, b = 14;
            while (b--) {
                c[d.key[b]] = a[b] || ""
            }
            c[d.q.name] = {};
            c[d.key[12]].replace(d.q.parser, function(g, f, h) {
                if (f) {
                    c[d.q.name][f] = h
                }
            });
            return c
        },parseUriOptions: {strictMode: false,key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],q: {name: "queryKey",parser: /(?:^|&)([^&=]*)=?([^&]*)/g},parser: {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},buildSearchLink: function(b) {
            var a = $.url.getParam("test-id");
            a && (b.push({name: "test-id",value: a}));
            return $.url.build(this.params.action, b)
        },buildLink: function(a, b) {
            return $.url.build(a, b)
        },filterLink: function(a, b) {
            return $.url.filter(a, b)
        },getDefaultParams: function() {
            return {text: this.params.query.xmlEscaped,p: this.params.p}
        },getTitle: function() {
            return document.title
        },uaMatch: function(c) {
            c = c.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/, e = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, d = /(msie) ([\w.]+)/, f = /(mozilla)(?:.*? rv:([\w.]+))?/, a = b.exec(c) || e.exec(c) || g.exec(c) || d.exec(c) || (c.indexOf("compatible") < 0 && f.exec(c)) || [];
            return {browser: a[1] || "",version: a[2] || "0"}
        },isOldBrowser: function(c) {
            var b = c.browser, a = parseFloat(c.version);
            return (b === "msie" && a < 9) || (b === "opera" && a < 11.5) || (b === "mozilla" && a < 2) || (b === "webkit" && a < 533.16)
        },getUAParams: function(b) {
            var a = global.uaMatch(b);
            a.isOld = global.isOldBrowser(a);
            a.isIE9 = (a.browser == "msie" && a.version == 9);
            a.hasHistoryAPI = !!(window.history && history.pushState);
            return a
        }};
        global.ua = global.getUAParams(navigator.userAgent)
    }
    if (_ycssjs("Z/2AsDqoOKDPn3Mim9QrGSOsDyc")) {
        (function() {
            var f, a = 0, c = false, e = 0, d = BEM.channel("sys"), b = 50;
            BEM.decl("i-system", {}, {start: function() {
                $(document).bind("mousemove keydown", function() {
                    e = 0;
                    if (c) {
                        c = false;
                        d.trigger("wakeup")
                    }
                });
                this._tick()
            },_tick: function() {
                var g = this;
                d.trigger("tick", {counter: a++});
                if (!c && (e += b) > 3000) {
                    c = true;
                    d.trigger("idle")
                }
                f = setTimeout(function() {
                    g._tick()
                }, b)
            }}).start()
        })()
    }
    if (_ycssjs("STdDTmNJhRkxPtwjY8lncTaMvPA")) {
        (function(b) {
            if (!b) {
                b = window.Lego = {}
            }
            !b.params && (b.params = {});
            function a(c) {
                return c.replace(/^(?:https?:)?\/\//, "")
            }
            b.c = function(d, c, j) {
                var i = a((j && j.host) || BEM.blocks["i-global"].param("click-host") || "clck.yandex.ru"), e = function(l, n, m, k) {
                    n = n.replace("'", "%27");
                    return n.indexOf("/dtype=") > -1 ? n : location.protocol + "//" + i + "/" + m + "/dtype=" + l + "/rnd=" + ((new Date()).getTime() + Math.round(Math.random() * 100)) + (k ? "/*" + (n.match(/^http/) ? n : location.protocol + "//" + location.host + (n.match("^/") ? n : "/" + n)) : "/*data=" + encodeURIComponent("url=" + encodeURIComponent((n.match(/^http/) ? n : location.protocol + "//" + location.host + (n.match("^/") ? n : "/" + n)))))
                }, g = function() {
                    var k = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                    var h = document.createElement("script");
                    h.setAttribute("src", e(d, location.href, "jclck"));
                    k.insertBefore(h, k.firstChild)
                };
                if (c) {
                    if (c.className.match(/b-link_pseudo_yes/) || (c.href && c.href.match(/^mailto:/)) || (j && j.noRedirect === true)) {
                        g()
                    } else {
                        if (c.href) {
                            var f = c.href;
                            c.href = e(d, f, "redir");
                            setTimeout(function() {
                                c.href = f
                            }, 500)
                        } else {
                            if (c.form) {
                                if (c.type.match(/submit|button|image/)) {
                                    var f = c.form.action;
                                    c.form.action = e(d, f, "redir", true);
                                    setTimeout(function() {
                                        c.form.action = f
                                    }, 500)
                                } else {
                                    g()
                                }
                            } else {
                                if (c.action) {
                                    c.action = e(d, c.action, "redir", true)
                                } else {
                                    throw "counter.js: not link and not form!"
                                }
                            }
                        }
                    }
                } else {
                    g()
                }
            }
        })(window.Lego);
        (function(a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.cp = function(f, c, e, b, d) {
                a.c("stred/pid=" + f + "/cid=" + c + (e ? "/path=" + e : ""), b, d)
            }
        })(window.Lego);
        (function(a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.ch = function(c, b) {
                BEM.blocks["i-global"].param("show-counters") && a.cp(0, 2219, c, b)
            }
        })(window.Lego)
    }
    if (_ycssjs("FUOFcaksnuKlOPLPBslojLaNBKE")) {
        (function() {
            var a = function(c, b) {
                this.url = b;
                this.params = c && c.onclick ? c.onclick() : {};
                this.params["i-counter"] && (this.params = this.params["i-counter"])
            };
            a.prototype = {addPos: function() {
                this.url += this.params.pos ? "/pos=" + this.params.pos : ""
            },getReqId: function(d) {
                var b = $(d).parents(".b-images-list, .i-images-list"), e, c;
                if (b.length === 1) {
                    e = b.get(0).onclick();
                    c = (e["b-images-list"] || e["i-images-list"]).reqid
                }
                return c
            },addReqId: function(c) {
                var b = this.getReqId(c);
                this.url += b ? "/reqid=" + b : ""
            },getSerpId: function() {
                return global.params.serpid
            },addSerpId: function() {
                var b = this.getSerpId();
                this.url += b ? "/serpid=" + b : ""
            },addRegion: function() {
                var b = Lego.params.region;
                this.url += b ? "/region=" + b : ""
            },addRequest: function() {
                this.url += this.params.request ? "/request=" + this.params.request : ""
            },addRequestType: function() {
                this.url += this.params.request ? "/type=" + this.params.type : ""
            },getUrl: function(b) {
                this.addPos();
                this.addReqId(b);
                this.addSerpId();
                this.addRegion();
                this.addRequest();
                this.addRequestType();
                return this.url
            }};
            window.m = function(b, c) {
                BEM.blocks["b-statcounter"].trigger("goal", {target: b,params: c})
            };
            window.r = function(c, b) {
                var d = global ? global.params.authDomainSuffix : "ru";
                (new Image()).src = location.protocol + "//clck.yandex." + d + "/click/dtype=" + b + "/rnd=" + ((new Date()).getTime() + Math.round(Math.random() * 100)) + "/*" + (c && c.href ? c.href : location.href)
            };
            window.w = function(b, f, g) {
                var d = "iweb/path=" + f + (g ? "/vars=" + g : ""), e = new a(b, d);
                r(b, e.getUrl(b))
            };
            window.ic = function(f, c) {
                c = c || $(".b-images-item_pos_" + f);
                var d = Math.ceil(f / 40), b = "stred/pid=40/cid=1104/path=p" + d, e = new a(c, b);
                r(c, e.getUrl(c))
            }
        })();
        (function() {
            var b = {}, d, c = window.w, a = function(e) {
                return $.map(e.split("."), function(f) {
                    return d[f]
                }).join("/")
            };
            BEM.DOM.decl({block: "i-counter",modName: "container",modVal: "yes"}, {onSetMod: {js: function() {
                var e = this;
                b = this.params.counters;
                d = this.params.blockstat;
                d && (window.w = function(f, g) {
                    $.isArray(g) && (g = g[0]);
                    typeof g !== "string" && (g = f);
                    e.__self.getHumanText(g);
                    c.apply(this, arguments)
                })
            }}}, {count: function(h, j, k) {
                var e = "";
                if (typeof h === "string") {
                    b[h] && w(j, b[h], k)
                } else {
                    if (h && h.length) {
                        for (var g = 0, f = h.length; g < f; g++) {
                            if (!b[h[g]]) {
                                return
                            }
                            e += b[h[g]];
                            g < f - 1 && (e += ".")
                        }
                        w(j, e, k)
                    }
                }
            },counterData: function(j, g) {
                var k = g ? "{href:'" + g + "'}" : "this", f = "";
                if (typeof j === "string") {
                    if (!b[j]) {
                        return ""
                    }
                    f = "'" + b[j] + "'";
                    return "w(" + k + ", " + f + ")"
                } else {
                    if (j && j.length) {
                        for (var h = 0, e = j.length; h < e; h++) {
                            if (!b[j[h]]) {
                                return ""
                            }
                            f += b[j[h]];
                            h < e - 1 && (f += ".")
                        }
                        f = "'" + f + "'";
                        return "w(" + k + ", " + f + ")"
                    }
                }
            },getHumanText: function(e) {
                console && console.log("counter: ", a(e), ",   id: ", e)
            }})
        }())
    }
    if (_ycssjs("cXnDO14Y5A+NxW1rFFI6qOjFo1E")) {
        (function(a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.getCookie = function(h) {
                var g = document.cookie;
                if (g.length < 1) {
                    return false
                }
                var d = g.indexOf(h + "=");
                if (d == -1) {
                    return false
                }
                d += (h.length + 1);
                var f = g.indexOf(";", d);
                return decodeURIComponent((f == -1) ? g.substring(d) : g.substring(d, f))
            }
        })(window.Lego)
    }
    if (_ycssjs("hLZiYMZ+GNGf/e0Cf6ywh5/Y/fY")) {
        (function(b, a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.init || (a.init = function(c) {
                (c = a.params = b.extend({id: "",login: a.isSessionValid() ? a.getCookie("yandex_login") || "" : "",yandexuid: a.getCookie("yandexuid"),locale: "ru",retpath: window.location.toString(),"passport-host": "//passport.yandex.ru","pass-host": "//pass.yandex.ru","passport-msg": c.id,"social-host": "//social.yandex.ru","lego-path": "/lego","show-counters-percent": 100}, c, a.params))["show-counters"] = Math.round(Math.random() * 100) <= c["show-counters-percent"];
                BEM.blocks["i-global"]._params || b.extend(BEM.blocks["i-global"]._params = {}, c);
                b(function() {
                    c.oframebust && a.oframebust(c.oframebust)
                });
                return c
            });
            a.block || (a.block = {});
            a.blockInit || (a.blockInit = function(c, d) {
                c = c || document;
                d = d || ".g-js";
                b(c).find(d).each(function() {
                    var h = b(this), g = this.onclick ? this.onclick() : {}, e = g.name || "", f = a.block[e];
                    if (f && !h.data(e)) {
                        f.call(h, g);
                        h.data(e, true).addClass(e + "_js_inited")
                    }
                })
            });
            a.blockInitBinded || (a.blockInitBinded = !!b(document).ready(function() {
                a.blockInit()
            }))
        })(jQuery, window.Lego)
    }
    if (_ycssjs("oBxXkftuvFSxIodWbtoM8GzKW3g")) {
        (function(a) {
            if (!a) {
                a = window.Lego = {}
            }
            a.messages = a.messages || {};
            a.message = function(c, b) {
                return a.params.locale == "ru" ? b : (a.messages[c] || b)
            }
        })(window.Lego)
    }
    if (_ycssjs("eRpp7IVMuj+kBGQLeckT10TuVF8")) {
        $(function() {
            BEM.DOM.init()
        })
    }
    if (_ycssjs("WBSRol02lQfX8Tu/G5OVLrgSPqU")) {
        jQuery(function() {
            document.onscroll = null
        });
        BEM.DOM.decl("b-page", {onSetMod: {js: function() {
            global.init();
            this.trigger("json:params", this.params);
            this._location = BEM.blocks["i-location"].get();
            this.findBlockInside("b-search");
            this.findBlockInside({blockName: "i-counter",modName: "container",modVal: "yes"});
            this.findBlockInside({block: "b-load-indicator",modName: "position",modVal: "absolute"});
            this._currentPage = "b-page_type_" + this.getMod("type");
            this._signalChannel = this.channel("page:signal");
            this.bindEvents()
        },fullscreen: function() {
            this.trigger("hit")
        }},destruct: function() {
            this.__base.apply(this, arguments);
            this.un("change", this._onChangeHandler, this)
        },bindEvents: function() {
            this.bindToWin("resize", $.debounce(function() {
                this.trigger("resize")
            }, 150, this));
            this.on("change", this._onChangeHandler, this)
        },pageView: function() {
            var a = this.findBlockInside("i-images-lists");
            a && (a.showImageFromState())
        },_onChangeHandler: function() {
            this._signalChannel.trigger("load:end")
        },isPromoVideoToggled: function(b) {
            var a = this._currentPage === b.block && (b.method === "showVideoPromo" || b.method === "closeVideoPromo") && BEM.blocks["b-promo"].isLoaded() && b.trigger;
            this._currentPage = b.block;
            return a
        },_onPageInit: $.noop,hideCBIRIntent: function() {
            var a = this.findBlockInside({block: "b-form-input",modName: "cbir",modVal: "yes"}), c, b;
            if (!a) {
                return
            }
            BEM.DOM.destruct($(".b-form-input__cbirintent-wrap"), true);
            c = a.elem("clear", "search", "clear");
            b = a.elem("cbirintent");
            a.delMod(b, "visibility").delMod(c, "type")
        }});
        BEM.DOM.decl({block: "b-page",modName: "type",modVal: ["search", "similar"]}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            var b = this.findBlockInside("b-images-list");
            if (this.hasMod("edge", "yes") && b && b.hasMod("fluid", "yes")) {
                var a = function() {
                    this.pageView();
                    BEM.blocks["b-images-list"].un("list:aligned", a, this)
                };
                BEM.blocks["b-images-list"].on("list:aligned", a, this)
            } else {
                this.pageView()
            }
        }}})
    }
    if (_ycssjs("mWsFdQDDhSAiAELWUsct5q9INpE")) {
        (function() {
            var a = $.browser.msie && $.browser.version < 7;
            var b = {_hashBangRegEx: /\#!\//,_filter: [],_safeUnescapeParams: [],_validUrlRegEx: /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/,isValid: function(c) {
                return this._validUrlRegEx.test(c)
            },isAbsolute: function(c) {
                var d = (c || location.href).trim().toLowerCase();
                return /[a-z:]*\/\//.test(d)
            },getRoot: function() {
                return location.protocol + "//" + (location.hostname || location.host) + "/"
            },getPage: function(c) {
                c || (c = location.href);
                return c + c.charAt(c.length - 1) === "/" ? "" : "/"
            },getBasePage: function(c) {
                c || (c = location.href);
                return this.clearHashSymbol(c).replace(/[^\/]+$/, "").replace(/\/+$/, "") + "/"
            },getFull: function(e) {
                var c = e, d = e.charAt(0);
                if (!this.isAbsolute(e)) {
                    switch (d) {
                        case "/":
                            c = b.getRoot() + e.replace(/^\/+/, "");
                            break;
                        case "#":
                            c = b.getPage().replace(/#.*/, "") + e;
                            break;
                        case "?":
                            c = b.getPage().replace(/[\?#].*/, "") + e;
                            break;
                        default:
                            c = b.getBasePage() + e.replace(/^(\.\/)+/, "")
                    }
                }
                return c.replace(/\#$/, "")
            },getShort: function(e) {
                if (!e) {
                    return "/"
                }
                if (!this.isAbsolute(e)) {
                    return e
                }
                var d = e, f = b.getBasePage(), c = b.getRoot();
                d = d.replace(c, "/");
                if (this.isTraditionalAnchor(d)) {
                    d = "/" + d
                }
                d = d.replace(/^(\.\/)+/g, "./").replace(/\#$/, "").replace(b._hashBangRegEx, "").replace("//", "/");
                return d
            },isTraditionalAnchor: function(c) {
                return !(/[\/\?\.]/.test(c))
            },setSafeUnescapeParams: function(c) {
                if (!c) {
                    return
                }
                this._safeUnescapeParams = c
            },safeUnescape: function(c) {
                c = c || location.href;
                var d = this.getParams(c, this._safeUnescapeParams);
                c = this.unescape(this.delParams(c, this._safeUnescapeParams));
                return this.setParams(c, d)
            },unescape: function(e) {
                var c = e, d;
                while (1) {
                    d = $.decodeURI(c);
                    if (d === c) {
                        break
                    }
                    c = d
                }
                return c
            },unescapeHash: function(c) {
                return b.unescape(b.normalizeHash(c))
            },normalizeHash: function(c) {
                return c.replace(/[^#]*#!?/, "").replace(/#.*/, "")
            },getHash: function(c) {
                c || (c = location.href);
                /#/.test(c) || (c = "");
                return b.unescapeHash(c)
            },setHash: function(c) {
                location.hash = c.replace("#", "")
            },escapeHash: function(d) {
                var c = encodeURI(b.normalizeHash(d));
                a || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?"));
                return c
            },clearHashSymbol: function(c) {
                return (c || location.href).replace(this._hashBangRegEx, "")
            },parseParams: function(c) {
                c || (c = location.href);
                c = this.clearHashSymbol(c);
                var d = {};
                (c = c.replace(/[^?]*\??/, "")) && c.replace(/(?:^|&|;)([^&=;]*)=?([^&;]*)/g, function(f, e, g) {
                    e && (d[e] = g.replace(/\+/g, " "));
                    ~this._safeUnescapeParams.indexOf(e) || (d[e] = $.decodeURIComponent(d[e]))
                }.bind(this));
                return d
            },normalize: function(c) {
                return (c || location.href).replace(/\+/g, "%20")
            },mergeFilters: function(c) {
                return $.merge($.url._filter, c)
            },filter: function(c, d) {
                if (typeof d === "undefined" && c instanceof Array) {
                    d = c;
                    c = location.href
                }
                var e = this.parseParams(c);
                $.merge($.merge([], this._filter), d || []).forEach(function(f) {
                    e[f] && delete e[f]
                });
                return this.build(this.getPath(c), e)
            },build: function(d, e) {
                if (typeof e === "undefined" && typeof d === "object") {
                    e = d;
                    d = location.href
                }
                if (!(e && Object.keys(e).length)) {
                    return d
                }
                if (e instanceof Array) {
                    e = [].concat(e)
                } else {
                    e = $.extend({}, e)
                }
                if (this._safeUnescapeParams.length) {
                    var c = "";
                    this._safeUnescapeParams.forEach(function(f) {
                        if (e[f]) {
                            c += "&" + f + "=" + e[f];
                            delete e[f]
                        }
                    });
                    e = $.param(e) + c
                } else {
                    e = $.param(e)
                }
                return this.normalize(d + "?" + e)
            },getPath: function(c) {
                return this.clearHashSymbol(c).match(/([^\?&]*)/)[0]
            },setParam: function(c, f, d) {
                if (typeof f === "undefined") {
                    f = c;
                    c = location.href
                }
                var e = this.parseParams(c);
                typeof d === "undefined" || d === "" ? delete e[f] : e[f] = d;
                return this.build(this.getPath(c), e)
            },setParams: function(d, e) {
                if (typeof d === "object") {
                    e = d;
                    d = location.href
                }
                var c = $.extend({}, this.parseParams(d));
                $.each(e, function(g, f) {
                    typeof f === "undefined" || f === "" ? delete c[g] : (c[g] = f)
                });
                return this.build(this.getPath(d), c)
            },delParam: function(c, d) {
                return this.setParam(c, d)
            },delParams: function(c, e) {
                if (typeof e === "undefined" && typeof c !== "string") {
                    e = c;
                    c = location.href
                }
                var d = {};
                e.forEach(function(f) {
                    d[f] = ""
                });
                return this.setParams(c, d)
            },clearFromParams: function(c) {
                return this.getPath(c)
            },getParam: function(d, c) {
                if (typeof c == "undefined" && typeof d === "string") {
                    c = d;
                    d = location.href
                }
                return this.parseParams(d)[c]
            },getParams: function(d, e) {
                if (typeof withoutDecoding === "undefined" && typeof e === "boolean" && d instanceof Array) {
                    withoutDecoding = e;
                    e = d;
                    d = location.href
                }
                e || (e = []);
                var f = this.parseParams(d), c = {};
                e.forEach(function(g) {
                    c[g] = f[g]
                });
                return c
            },getAllParams: function(c) {
                return this.parseParams(c)
            }};
            $.extend({url: b})
        }())
    }
    if (_ycssjs("MevQh1RiZC9hXBI5x/39TUzeJiQ")) {
        $.url.unescape = function(c) {
            var a = c, b;
            while (1) {
                b = $.decodeURI(a);
                if (b === a) {
                    break
                }
                a = b
            }
            return a
        };
        $.url._validUrlRegEx = new RegExp("^(?:(?:https?|ftp)://)(?:(?:(?:xn--)?(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:xn--)?(:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:xn--)?(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?");
        $.url.getRoot = function() {
            return location.protocol + "//" + (location.hostname || location.host) + (location.port ? ":" + location.port : "") + "/"
        }
    }
    if (_ycssjs("VV0TF4dbhDhnWhxXquO7u/Uyh0c")) {
        (function() {
            var a = $.browser.msie && $.browser.version < 7;
            BEM.decl("i-url", {}, {_filter: [],_hashBangRegEx: /\#!\//,_validUrlRegEx: /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/,isValid: function(b) {
                return this._validUrlRegEx.test(b)
            },isAbsolute: function(b) {
                var c = b.trim();
                return this.isValid(b) && (c.test(/^https?:\/\//i) || c.substr(0, 2) === "//")
            },getRelativeUrl: function(b) {
                if (this.isAbsolute(b)) {
                    return b.replace(this.getBasePage(b), "")
                }
            },getCurrentFullUrl: function() {
                return location + ""
            },getPath: function(b) {
                return b.replace(this._hashBangRegEx, "").match(/([^\?&]*)/)[0]
            },getHash: function(b) {
                return this._escapeHash(b)
            },_clearHashSymbol: function(b) {
                return b.replace(this._hashBangRegEx, "")
            },_getClearedHash: function(b) {
                return b.replace(/[^#]*#!\/?/, "").replace(/#.*/, "")
            },_escapeHash: function(c) {
                var b = encodeURI(this._getClearedHash(hash));
                a || (b = b.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?"));
                return b
            },getBasePage: function(b) {
                if (this.isAbsolute(b)) {
                    return
                }
                return b.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(c) {
                    return (/[^\/]$/).test(c) ? "" : c
                }).replace(/\/+$/, "") + "/"
            },unescape: function(d) {
                var b = d, c;
                while (1) {
                    c = $.decodeURI(b);
                    if (c === b) {
                        break
                    }
                    b = c
                }
                return b
            },parseParams: function(b) {
                b = this._clearHashSymbol(b);
                var c = {};
                (b = b.replace(/[^?]*\??/, "")) && b.replace(/(?:^|&|;)([^&=;]*)=?([^&;]*)/g, function(e, d, f) {
                    d && (c[d] = f.replace(/\+/g, " "));
                    c[d] = $.decodeURIComponent(c[d])
                });
                return c
            },normalize: function(b) {
                return (b || "").replace(/\+/g, "%20")
            },filter: function(b, c) {
                var d = this.parseParams(b);
                (c || []).concat(this._filter).forEach(function(e) {
                    d[e] && delete d[e]
                });
                return this.build(this.getPath(b), d)
            },build: function(b, c) {
                if (!(c && Object.keys(c).length)) {
                    return b
                }
                c = $.param(c);
                return this.normalize(b + "?" + c)
            },setParam: function(b, e, c) {
                if (!e) {
                    return b
                }
                var d = this.parseParams(b);
                typeof c === "undefined" || c === "" ? delete d[e] : d[e] = c;
                return this.build(this.getPath(b), d)
            },setParams: function(c, d) {
                var b = $.extend({}, this.parseParams(c));
                $.each(d, function(f, e) {
                    typeof e === "undefined" || e === "" ? delete b[f] : (b[f] = e)
                });
                return this.build(this.getPath(c), b)
            },delParam: function(b, c) {
                return this.setParam(b, c)
            },delParams: function(b, d) {
                var c = {};
                d.forEach(function(e) {
                    c[e] = ""
                });
                return this.setParams(b, c)
            },clearFromParams: function(b) {
                return this.getPath(b)
            },getParam: function(c, b) {
                return this.parseParams(c)[b]
            },getParams: function(c, d) {
                var e = this.parseParams(c), b = {};
                d.forEach(function(f) {
                    b[f] = e[f]
                });
                return b
            },getAllParams: function(b) {
                return this.parseParams(b)
            }})
        }())
    }
    if (_ycssjs("09StRaO3HLkgZtKr5Y3THRHhVJo")) {
        $.url.setSafeUnescapeParams(["img_url"]);
        $.url.mergeFilters(["output", "response", "yu", "from", "format"]);
        $.url.joinLink = function(a, b) {
            return a + (/\?/.test(a) ? "&" : "?") + b
        }
    }
    if (_ycssjs("ROrzjOrWQi0Ayr/wAhWoWQlA3ag")) {
        (function(a) {
            var d = {"%D0": "%D0%A0","%C0": "%D0%90","%C1": "%D0%91","%C2": "%D0%92","%C3": "%D0%93","%C4": "%D0%94","%C5": "%D0%95","%A8": "%D0%81","%C6": "%D0%96","%C7": "%D0%97","%C8": "%D0%98","%C9": "%D0%99","%CA": "%D0%9A","%CB": "%D0%9B","%CC": "%D0%9C","%CD": "%D0%9D","%CE": "%D0%9E","%CF": "%D0%9F","%D1": "%D0%A1","%D2": "%D0%A2","%D3": "%D0%A3","%D4": "%D0%A4","%D5": "%D0%A5","%D6": "%D0%A6","%D7": "%D0%A7","%D8": "%D0%A8","%D9": "%D0%A9","%DA": "%D0%AA","%DB": "%D0%AB","%DC": "%D0%AC","%DD": "%D0%AD","%DE": "%D0%AE","%DF": "%D0%AF","%E0": "%D0%B0","%E1": "%D0%B1","%E2": "%D0%B2","%E3": "%D0%B3","%E4": "%D0%B4","%E5": "%D0%B5","%B8": "%D1%91","%E6": "%D0%B6","%E7": "%D0%B7","%E8": "%D0%B8","%E9": "%D0%B9","%EA": "%D0%BA","%EB": "%D0%BB","%EC": "%D0%BC","%ED": "%D0%BD","%EE": "%D0%BE","%EF": "%D0%BF","%F0": "%D1%80","%F1": "%D1%81","%F2": "%D1%82","%F3": "%D1%83","%F4": "%D1%84","%F5": "%D1%85","%F6": "%D1%86","%F7": "%D1%87","%F8": "%D1%88","%F9": "%D1%89","%FA": "%D1%8A","%FB": "%D1%8B","%FC": "%D1%8C","%FD": "%D1%8D","%FE": "%D1%8E","%FF": "%D1%8F"};
            function c(e) {
                e = e.replace(/%.{2}/g, function(f) {
                    return d[f]
                });
                return e
            }
            function b(g, i) {
                var f = "";
                try {
                    f = g(i)
                } catch (h) {
                    f = g(c(i))
                }
                return f
            }
            a.extend({decodeURI: function(e) {
                return b(decodeURI, e)
            },decodeURIComponent: function(e) {
                return b(decodeURIComponent, e)
            }})
        })(jQuery)
    }
    if (_ycssjs("kUAZ/08/FnY/i7SToG2lCQU9clA")) {
        (function(a) {
            var d = {"%D0": "%D0%A0","%C0": "%D0%90","%C1": "%D0%91","%C2": "%D0%92","%C3": "%D0%93","%C4": "%D0%94","%C5": "%D0%95","%A8": "%D0%81","%C6": "%D0%96","%C7": "%D0%97","%C8": "%D0%98","%C9": "%D0%99","%CA": "%D0%9A","%CB": "%D0%9B","%CC": "%D0%9C","%CD": "%D0%9D","%CE": "%D0%9E","%CF": "%D0%9F","%D1": "%D0%A1","%D2": "%D0%A2","%D3": "%D0%A3","%D4": "%D0%A4","%D5": "%D0%A5","%D6": "%D0%A6","%D7": "%D0%A7","%D8": "%D0%A8","%D9": "%D0%A9","%DA": "%D0%AA","%DB": "%D0%AB","%DC": "%D0%AC","%DD": "%D0%AD","%DE": "%D0%AE","%DF": "%D0%AF","%E0": "%D0%B0","%E1": "%D0%B1","%E2": "%D0%B2","%E3": "%D0%B3","%E4": "%D0%B4","%E5": "%D0%B5","%B8": "%D1%91","%E6": "%D0%B6","%E7": "%D0%B7","%E8": "%D0%B8","%E9": "%D0%B9","%EA": "%D0%BA","%EB": "%D0%BB","%EC": "%D0%BC","%ED": "%D0%BD","%EE": "%D0%BE","%EF": "%D0%BF","%F0": "%D1%80","%F1": "%D1%81","%F2": "%D1%82","%F3": "%D1%83","%F4": "%D1%84","%F5": "%D1%85","%F6": "%D1%86","%F7": "%D1%87","%F8": "%D1%88","%F9": "%D1%89","%FA": "%D1%8A","%FB": "%D1%8B","%FC": "%D1%8C","%FD": "%D1%8D","%FE": "%D1%8E","%FF": "%D1%8F"};
            function c(e) {
                return e.replace(/%.{2}/g, function(f) {
                    return d[f] || f
                })
            }
            function b(g, i) {
                var f = "";
                try {
                    f = g(i)
                } catch (h) {
                    try {
                        f = g(c(i))
                    } catch (h) {
                        f = i
                    }
                }
                return f
            }
            a.extend({decodeURI: function(e) {
                return b(decodeURI, e)
            },decodeURIComponent: function(e) {
                return b(decodeURIComponent, e)
            }})
        })(jQuery)
    }
    if (_ycssjs("cxWguVr0BHysWeROhoaVuDAWgX8")) {
        BEM.decl("i-url-controller", {}, {passedParams: ["ncrnd", "nojs", "numdoc", "rdrnd", "i-m-a-hacker", "l10n", "date", "family", "no-tests", "nocache", "test-id", "test-tag", "yandex_login", "yandexuid", "waitall", "exp_flags", "time"],setCurrentState: function(a) {
            this._previousState = a;
            return this
        },setNewState: function(a) {
            this._link = a;
            this._state = $.extend({}, a);
            return this
        },build: function() {
            return this.fillBaseParams().fillUserInfo().fillPreviousParams().detectBlock().buildURL()
        },updateUserInfo: function(a) {
            return this.setNewState(a).fillBaseParams().fillUserInfo().buildURL()
        },fillBaseParams: function() {
            var b = this._state, a = b.url || location.href;
            b.path = b.path || $.url.getPath($.url.getShort(a));
            b.params = $.extend({}, $.url.getAllParams(a), b.params);
            Object.keys(b.params).forEach(function(c) {
                b.params[c] === null && delete (b.params[c])
            });
            return this
        },fillUserInfo: function() {
            this._state.params.uinfo = BEM.create("i-userinfo").getUserInfo();
            return this
        },fillPreviousParams: function() {
            var e = this._state, c = this.passedParams, f, d;
            for (var b = 0, a = c.length; b < a; b++) {
                f = c[b];
                if (e.params[f]) {
                    continue
                }
                d = this._previousState.params[f];
                d && (e.params[f] = d)
            }
            return this
        },detectBlock: function() {
            var a = this._state, b = a.path, c = a.params;
            if (a.block) {
                return this
            }
            b === "/yandsearch" && (a.block = "b-page_type_search");
            b === "/" && (a.block = "b-page_type_index");
            c.rpt === "imagedups" && (a.block = "b-page_type_copy");
            c.like && (a.block = "b-page_type_similar");
            c.rpt === "imagecbir" && (a.block = "b-page_type_cbir");
            this._link.block = a.block;
            return this
        },buildURL: function() {
            var a = this._state;
            this._link.url = $.url.build(a.path, a.params);
            return this
        }})
    }
    if (_ycssjs("gyY8A5y+sckeFIRYCxiILwDPfRs")) {
        (function() {
            var a;
            BEM.decl("i-userinfo", {getUserInfo: function() {
                a = a || BEM.DOM.win;
                var e = "-", d = "-";
                var c = this.getWindowSize(), b = this.getFrameSize();
                return [["sw", c.width].join(e), ["sh", c.height].join(e), ["fw", b.width].join(e), ["fh", b.height].join(e), ["pd", this.getPixelDensity()].join(e)].join(d)
            },getWindowSize: function() {
                return {width: a.width(),height: a.height()}
            },getFrameSize: function() {
                return {width: this._getFrameWidth(),height: this._getFrameHeight()}
            },getPixelDensity: function() {
                return a[0].devicePixelRatio || 1
            },_getFrameHeight: function() {
                return BEM.blocks["b-preview"].getPreviewHeight()
            },_getFrameWidth: function() {
                return BEM.blocks["b-preview"].getPreviewWidth()
            }})
        }())
    }
    if (_ycssjs("S/rf7QdqrUAV4fmuUUGw6h4NjVU")) {
        /*!
         * jQuery hashchange event - v1.3 - 7/21/2010
         * http://benalman.com/projects/jquery-hashchange-plugin/
         *
         * Copyright (c) 2010 "Cowboy" Ben Alman
         * Dual licensed under the MIT and GPL licenses.
         * http://benalman.com/about/license/
         */
        (function($, e, b) {
            var c = "hashchange", h = document, f, g = $.event.special, i = h.documentMode, d = "on" + c in e && (i === b || i > 7);
            function a(j) {
                j = j || location.href;
                return "#" + j.replace(/^[^#]*#?(.*)$/, "$1")
            }
            $.fn[c] = function(j) {
                return j ? this.bind(c, j) : this.trigger(c)
            };
            $.fn[c].delay = 50;
            g[c] = $.extend(g[c], {setup: function() {
                if (d) {
                    return false
                }
                $(f.start)
            },teardown: function() {
                if (d) {
                    return false
                }
                $(f.stop)
            }});
            f = (function() {
                var j = {}, p, m = a(), k = function(q) {
                    return q
                }, l = k, o = k;
                j.start = function() {
                    p || n()
                };
                j.stop = function() {
                    p && clearTimeout(p);
                    p = b
                };
                function n() {
                    var s = a(), q = o(m);
                    if (s !== m) {
                        l(m = s, q);
                        $(e).trigger(c)
                    } else {
                        if (q !== m) {
                            location.href = location.href.replace(/#.*/, "") + q
                        }
                    }
                    p = setTimeout(n, $.fn[c].delay)
                }
                $.browser.msie && !d && (function() {
                    var q, s;
                    j.start = function() {
                        if (!q) {
                            s = $.fn[c].src;
                            s = s && s + a();
                            q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                                s || l(a());
                                n()
                            }).attr("src", s || "javascript:0").insertAfter("body")[0].contentWindow;
                            h.onpropertychange = function() {
                                try {
                                    if (event.propertyName === "title") {
                                        q.document.title = h.title
                                    }
                                } catch (t) {
                                }
                            }
                        }
                    };
                    j.stop = k;
                    o = function() {
                        return a(q.location.href)
                    };
                    l = function(x, t) {
                        var v = q.document, u = $.fn[c].domain;
                        if (x !== t) {
                            v.title = h.title;
                            v.open();
                            u && v.write('<script>document.domain="' + u + '"<\/script>');
                            v.close();
                            q.location.hash = x
                        }
                    }
                })();
                return j
            })()
        })(jQuery, this)
    }
    if (_ycssjs("oTPwzwLdwhuQLDlsTvj2C7QAgxk")) {
        (function(h, f, b) {
            var d = h.console || b, i = h.document, j = i.location, k = h.navigator, a = f(h), c = h.History = h.History || {}, g = h.history, e = "#!";
            c.options = c.options || {};
            c.options.safariPollInterval = c.options.safariPollInterval || 500;
            c.options.doubleCheckInterval = c.options.doubleCheckInterval || 500;
            c.options.busyDelay = c.options.busyDelay || 250;
            c.options.debug = c.options.debug || false;
            c.intervalList = [];
            c.clearAllIntervals = function() {
                var n = c.intervalList, o, m;
                for (o = 0, m = n.length; o < m; o++) {
                    clearInterval(n[o])
                }
                c.intervalList = []
            };
            c.debug = function() {
                c.options.debug && c.log.apply(c, arguments)
            };
            c.log = function() {
                var l = Array.prototype.slice.call(arguments), m = l.shift();
                d.log(m, " ", l);
                return true
            };
            c.browserVersion = function() {
                return f.browser.version
            };
            c.isMSIE = function() {
                return f.browser.msie
            };
            c.emulated = {pushState: !Boolean(h.history && h.history.pushState && h.history.replaceState && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(k.userAgent) || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(k.userAgent) || (/Bada\/([\d.]+)/i).test(k.userAgent))),hashChange: Boolean(!(("onhashchange" in h) || ("onhashchange" in i)) || (c.isMSIE() && c.browserVersion() < 8))};
            c.enabled = !c.emulated.pushState;
            c.bugs = {setHash: Boolean(!c.emulated.pushState && k.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(k.userAgent)),safariPoll: Boolean(!c.emulated.pushState && k.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(k.userAgent)),ieDoubleCheck: Boolean(c.isMSIE() && c.browserVersion() < 8)};
            c.cloneObject = function(l) {
                return l ? f.extend({}, l) : {}
            };
            c.store = {};
            c.idToState = c.idToState || {};
            c.stateToId = c.stateToId || {};
            c.urlToId = c.urlToId || {};
            c.storedStates = c.storedStates || [];
            c.savedStates = c.savedStates || [];
            c.normalizeStore = function() {
                c.store.idToState = c.store.idToState || {};
                c.store.urlToId = c.store.urlToId || {};
                c.store.stateToId = c.store.stateToId || {}
            };
            c.getState = function(n, m) {
                var l = c.getLastSavedState();
                typeof n === "undefined" && (n = true);
                typeof m === "undefined" && (m = true);
                !l && m && (l = c.createStateObject());
                n && (l = c.cloneObject(l));
                return l
            };
            c.getIdByState = function(l) {
                var m = c.getStateString(l), n;
                if (typeof c.stateToId[m] !== "undefined") {
                    n = c.stateToId[m]
                } else {
                    if (typeof c.store.stateToId[m] !== "undefined") {
                        n = c.store.stateToId[m]
                    } else {
                        while (true) {
                            n = (new Date()).getTime() + ("" + Math.random()).replace(/\D/g, "");
                            if (typeof c.idToState[n] === "undefined" && typeof c.store.idToState[n] === "undefined") {
                                break
                            }
                        }
                    }
                }
                return n
            };
            c.normalizeState = function(l) {
                var m;
                if (!l || (typeof l !== "object")) {
                    l = {}
                }
                if (typeof l.normalized !== "undefined") {
                    return l
                }
                if (!l.data || (typeof l.data !== "object")) {
                    l.data = {}
                }
                m = {};
                m.normalized = true;
                m.title = l.title || "";
                m.url = f.url.safeUnescape(f.url.getFull(l.url || j.href));
                m.hash = f.url.getShort(m.url);
                m.data = c.cloneObject(l.data);
                m.id = c.getIdByState(m);
                if ((c.emulated.pushState || c.bugs.safariPoll) && c.hasUrlDuplicate(m)) {
                    m.url = f.url.safeUnescape(f.url.getFull(m.hash))
                }
                return m
            };
            c.createStateObject = function(m, n, l) {
                return c.normalizeState({data: m,title: n,url: l})
            };
            c.getStateById = function(l) {
                return c.idToState[l] || c.store.idToState[l] || b
            };
            c.getStateString = function(l) {
                return JSON.stringify({data: l.data,title: l.title,url: l.url})
            };
            c.getStateId = function(l) {
                return c.getNormalizedData(l, "id")
            };
            c.getStateByIndex = function(m) {
                var l = null;
                if (typeof m === "undefined") {
                    l = c.savedStates[c.savedStates.length - 1]
                } else {
                    if (m < 0) {
                        l = c.savedStates[c.savedStates.length + m]
                    } else {
                        l = c.savedStates[m]
                    }
                }
                return l
            };
            c.getHashByState = function(l) {
                return c.getNormalizedData(l, "hash")
            };
            c.getNormalizedData = function(m, l) {
                return c.normalizeState(m)[l]
            };
            c.saveInitialState = function() {
                var l = c.extractState(f.url.safeUnescape(j.href), true);
                c.storeState(l).saveState(l)
            };
            c.extractState = function(o, n) {
                var l, p, m;
                n = n || false;
                m = f.url.getFull(o);
                p = c.getIdByUrl(m);
                p && (l = c.getStateById(p));
                if (!l && n && !f.url.isTraditionalAnchor(o)) {
                    l = c.createStateObject(null, null, m)
                }
                return l
            };
            c.extractEventData = function(m, n, l) {
                return (n && n.originalEvent && n.originalEvent[m]) || (l && l[m]) || b
            };
            c.getIdByUrl = function(l) {
                return c.urlToId[l] || c.store.urlToId[l] || b
            };
            c.getLastSavedState = function() {
                return c.savedStates[c.savedStates.length - 1] || b
            };
            c.getLastStoredState = function() {
                return c.storedStates[c.storedStates.length - 1] || b
            };
            c.hasUrlDuplicate = function(n) {
                var m, l;
                l = c.extractState(n.url);
                m = l && l.id !== n.id;
                return m
            };
            c.storeState = function(m) {
                var l = c.cloneObject(m);
                c.stateToId[c.getStateString(m)] = m.id;
                c.urlToId[m.url] = m.id;
                c.idToState[m.id] = l;
                c.storedStates.push(l);
                return c
            };
            c.isLastSavedState = function(o) {
                var n = false, m, l, p;
                if (c.savedStates.length) {
                    m = o.id;
                    l = c.getLastSavedState();
                    p = l.id;
                    n = (m === p)
                }
                return n
            };
            c.saveState = function(l) {
                if (c.isLastSavedState(l)) {
                    return false
                }
                c.savedStates.push(c.cloneObject(l));
                return true
            };
            c.setHash = function(o, m) {
                var l, n;
                if (m !== false && c.busy()) {
                    c._queue("setHash", args, m);
                    return false
                }
                c.debug("History.setHash: called", o);
                l = f.url.unescapeHash(o);
                c.busy(true);
                n = c.extractState(o, true);
                if (n && !c.emulated.pushState) {
                    c.debug("History.setHash: Hash is a state so skipping the hash set with a direct pushState call", arguments);
                    c.pushState(n.data, n.title, n.url, false)
                } else {
                    if (j.hash !== l) {
                        if (c.bugs.setHash) {
                            c.pushState(null, null, f.url.getPage() + e + l, false)
                        } else {
                            f.url.setHash(e + l)
                        }
                    }
                }
                return c
            };
            c.queues = [];
            c.busy = function(o) {
                var l = c.options.busyDelay, m = c.queues;
                if (typeof o !== "undefined") {
                    c.debug("History.busy: changing [" + (c.busy.flag || false) + "] to [" + (o || false) + "]", m.length)
                } else {
                    if (typeof c.busy.flag === "undefined") {
                        o = false
                    }
                }
                c.busy.flag = o;
                if (!c.busy.flag) {
                    clearTimeout(c.busy.timeout);
                    var n = function() {
                        var q, p;
                        if (c.busy.flag) {
                            return
                        }
                        for (q = m.length - 1; q >= 0; --q) {
                            p = m[q];
                            if (!p.length) {
                                continue
                            }
                            c.fireQueueItem(p.shift());
                            c.busy.timeout = setTimeout(n, l)
                        }
                    };
                    c.busy.timeout = setTimeout(n, l)
                }
                return c.busy.flag
            };
            c.busy.flag = false;
            c.fireQueueItem = function(l) {
                return l.callback.apply(l.scope || c, l.args || [])
            };
            c.pushQueue = function(m) {
                var l = m.queue || 0;
                c.queues[l] || (c.queues[l] = []);
                c.queues[l].push(m);
                return c
            };
            c.queue = function(m, l) {
                typeof m === "function" && (m = {callback: m});
                typeof l !== "undefined" && (m.queue = l);
                c.busy() ? c.pushQueue(m) : c.fireQueueItem(m);
                return c
            };
            c._queue = function(n, m, l) {
                c.debug("History." + n + ": we must wait", arguments);
                c.pushQueue({scope: c,callback: c[n],args: m,queue: l})
            };
            c.clearQueue = function() {
                c.busy.flag = false;
                c.queues = [];
                return c
            };
            c.stateChanged = false;
            c.doubleChecker = false;
            c.doubleCheckComplete = function() {
                c.stateChanged = true;
                c.doubleCheckClear();
                return c
            };
            c.doubleCheckClear = function() {
                if (c.doubleChecker) {
                    clearTimeout(c.doubleChecker);
                    c.doubleChecker = false
                }
                return c
            };
            c.doubleCheck = function(l) {
                c.stateChanged = false;
                c.doubleCheckClear();
                if (c.bugs.ieDoubleCheck) {
                    c.doubleChecker = setTimeout(function() {
                        c.doubleCheckClear();
                        if (!c.stateChanged) {
                            c.debug("History.doubleCheck: State has not yet changed, trying again", arguments);
                            l()
                        }
                        return true
                    }, c.options.doubleCheckInterval)
                }
                return c
            };
            c.safariStatePoll = function() {
                var l = c.extractState(j.href);
                if (c.isLastSavedState(l)) {
                    return
                }
                if (!l) {
                    c.debug("History.safariStatePoll: new");
                    c.createStateObject()
                }
                c.debug("History.safariStatePoll: trigger");
                a.trigger("popstate")
            };
            c.onPopState = function(o, l) {
                var q, p = false, n, m;
                c.doubleCheckComplete();
                n = f.url.getHash();
                if (n) {
                    m = c.extractState(n || j.href, true);
                    if (m) {
                        c.debug("History.onPopState: state anchor", n, m);
                        c.replaceState(m.data, m.title, m.url, false)
                    } else {
                        c.debug("History.onPopState: traditional anchor", n);
                        a.trigger("anchorchange");
                        c.busy(false)
                    }
                    c.expectedStateId = false;
                    return false
                }
                q = c.extractEventData("state", o, l);
                if (q) {
                    p = c.getStateById(q)
                } else {
                    if (c.expectedStateId) {
                        p = c.getStateById(c.expectedStateId)
                    } else {
                        p = c.extractState(j.href)
                    }
                }
                if (!p) {
                    p = c.createStateObject(null, null, j.href)
                }
                c.expectedStateId = false;
                if (c.isLastSavedState(p)) {
                    c.debug("History.onPopState: no change", p, c.savedStates);
                    c.busy(false);
                    return false
                }
                c.storeState(p);
                c.saveState(p);
                a.trigger("statechange");
                c.busy(false);
                return true
            };
            c.replaceState = function(n, o, m, l) {
                return c.methodState("replaceState", n, o, m, l)
            };
            c.pushState = function(n, o, m, l) {
                return c.methodState("pushState", n, o, m, l)
            };
            c.methodState = function(q, n, p, m, l) {
                c.debug("History." + q + " : called", arguments);
                if (f.url.getHash(m) && c.emulated.pushState) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                }
                if (l !== false && c.busy()) {
                    c._queue(q, args, l);
                    return false
                }
                c.busy(true);
                var o = c.createStateObject(n, p, m);
                if (c.isLastSavedState(o)) {
                    c.busy(false)
                } else {
                    c.storeState(o);
                    c.expectedStateId = o.id;
                    g[q](o.id, o.title, o.url);
                    a.trigger("popstate")
                }
                return true
            };
            c.init = function() {
                if (c.emulated.pushState) {
                    c.pushState = c.pushState || f.noop;
                    c.replaceState = c.replaceState || f.noop
                } else {
                    a.bind("popstate", c.onPopState)
                }
                c.store = {};
                c.normalizeStore();
                a.bind("beforeunload unload", c.clearAllIntervals);
                c.saveInitialState();
                if (!c.emulated.pushState) {
                    c.bugs.safariPoll && c.intervalList.push(setInterval(c.safariStatePoll, c.options.safariPollInterval));
                    if (k.vendor === "Apple Computer, Inc." || (k.appCodeName || "") === "Mozilla") {
                        a.bind("hashchange", function() {
                            a.trigger("popstate")
                        });
                        f.url.getHash() && f(function() {
                            a.trigger("hashchange")
                        })
                    }
                }
            };
            c.init()
        })(window, jQuery)
    }
    if (_ycssjs("mR/vKk0Wr2E4KkJ4vR8T2WXqtzU")) {
        (function(c, e) {
            var a = c.document, b = c.History = c.History || {}, d = $(c);
            b.initHtml4 = function() {
                b.enabled = true;
                b.savedHashes = [];
                b.isLastHash = function(f) {
                    return f === b.getHashByIndex()
                };
                b.saveHash = function(f) {
                    if (b.isLastHash(f)) {
                        return false
                    }
                    b.savedHashes.push(f);
                    return true
                };
                b.getHashByIndex = function(f) {
                    var g = null;
                    if (typeof f === "undefined") {
                        g = b.savedHashes[b.savedHashes.length - 1]
                    } else {
                        if (f < 0) {
                            g = b.savedHashes[b.savedHashes.length + f]
                        } else {
                            g = b.savedHashes[f]
                        }
                    }
                    return g
                };
                b.discardedHashes = {};
                b.discardedStates = {};
                b.discardState = function(j, f, i) {
                    b.debug("4: History.discardState", arguments);
                    var g = b.getHashByState(j), h;
                    h = {discardedState: j,backState: i,forwardState: f};
                    b.discardedStates[g] = h;
                    return true
                };
                b.discardHash = function(g, f, h) {
                    b.debug("4: History.discardState", arguments);
                    b.discardedHashes[g] = {discardedHash: g,backState: h,forwardState: f};
                    return true
                };
                b.discardedState = function(f) {
                    return b.discardedStates[b.getHashByState(f)] || false
                };
                b.discardedHash = function(f) {
                    return b.discardedHashes[f] || false
                };
                b.recycleState = function(f) {
                    b.debug("4: History.recycleState", arguments);
                    b.discardedState(f) && delete b.discardedStates[b.getHashByState(f)];
                    return true
                };
                if (b.emulated.pushState) {
                    b.onHashChange = function(h) {
                        b.debug("4: History.onHashChange", arguments);
                        var i = ((h && h.newURL) || a.location.href), g = $.url.getHash(i), f;
                        if (b.isLastHash(g)) {
                            b.debug("4: History.onHashChange: no change");
                            b.busy(false);
                            return false
                        }
                        b.doubleCheckComplete();
                        b.saveHash(g);
                        if (g && $.url.isTraditionalAnchor(g)) {
                            b.debug("4: History.onHashChange: traditional anchor", g);
                            d.trigger("anchorchange");
                            b.busy(false);
                            return false
                        }
                        f = b.extractState($.url.getFull(g || a.location.href), true);
                        if (b.isLastSavedState(f)) {
                            b.debug("4: History.onHashChange: no change");
                            b.busy(false);
                            return false
                        }
                        b.debug("4: History.onHashChange: success hashchange");
                        b.pushState(f.data, f.title, f.url, false);
                        return true
                    };
                    b.pushState = function(j, n, f, l) {
                        b.debug("4: History.pushState: called", arguments);
                        if ($.url.getHash($.url.getShort(f))) {
                            throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                        }
                        if (l !== false && b.busy()) {
                            b._queue("pushState", args, l);
                            return false
                        }
                        b.busy(true);
                        var i = b.createStateObject(j, n, f), g = b.getHashByState(i), h = b.getState(false), k = b.getHashByState(h), m = $.url.getHash();
                        b.storeState(i);
                        b.expectedStateId = i.id;
                        b.recycleState(i);
                        if ((g === k || $.url.unescape(g) === $.url.unescape(k)) && $.isEmptyObject(i.data)) {
                            b.debug("4: History.pushState: no change", g);
                            b.busy(false);
                            return false
                        }
                        if (g !== m && g !== $.url.getShort(a.location.href)) {
                            b.debug("4: History.pushState: update hash", g, m);
                            b.setHash(g, false)
                        }
                        b.saveState(i);
                        b.debug("4: History.pushState: trigger popstate");
                        d.trigger("statechange");
                        b.busy(false);
                        return true
                    };
                    b.replaceState = function(j, l, i, f) {
                        b.debug("4: History.replaceState: called", arguments);
                        if ($.url.getHash($.url.getShort(i))) {
                            throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                        }
                        if (f !== false && b.busy()) {
                            b._queue("replaceState", args, f);
                            return false
                        }
                        b.busy(true);
                        var k = b.createStateObject(j, l, i), h = b.getState(false), g = b.getStateByIndex(-2);
                        b.discardState(h, k, g);
                        b.pushState(k.data, k.title, k.url, false);
                        return true
                    }
                }
                d.bind("hashchange", b.onHashChange);
                b.emulated.pushState && $.url.getHash() && !b.emulated.hashChange && $(function() {
                    d.trigger("hashchange")
                })
            };
            b.initHtml4()
        })(window)
    }
    if (_ycssjs("jLQIvd0kkxZED1X0420NDnwacoQ")) {
        (function() {
            var a;
            BEM.decl("i-location", {onSetMod: {js: function() {
                this._syncState();
                BEM.DOM.win.bind("statechange", this.changeThis(this._onStateChange))
            }},_onStateChange: function(b) {
                this._syncState();
                if (this._state.trigger !== false) {
                    this.trigger("change", this._state);
                    this._state.block && this.trigger(this._state.block, this._state)
                }
                delete this._state.trigger
            },_syncState: function() {
                var b = History.getState();
                this._state = $.extend(b.data, {url: b.url,path: this.__self.parsePath(b.hash),params: this.__self.parseParams(b.hash)});
                return this
            },change: function(b) {
                b.url = this.__self.Url.normalize(b.url);
                b.url && delete b.params;
                b.params && (b.url = this.__self.url.build(this._state.path, $.extend({}, this._state.params, b.params)));
                b.trigger = typeof b.trigger === "undefined" ? true : b.trigger;
                History[(b.history !== false ? "push" : "replace") + "State"](b, undefined, b.url)
            },getState: function() {
                return this._state
            }}, {Url: $.url,get: function() {
                return a || (a = BEM.create("i-location"))
            },parsePath: function(b) {
                return this.Url.getPath(b)
            },parseParams: function(b) {
                return this.Url.getAllParams(b)
            }})
        })()
    }
    if (_ycssjs("Du9Z7tvorFeuB+uk6z7y0RZe1sU")) {
        BEM.decl("i-location", {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            global.ua.hasHistoryAPI || global.ua.isIE9 || (this.change = $.noop);
            this.on("change", function(b, a) {
                a.block || this._fillStateData(a)
            })
        }},change: function(a, b) {
            b && b.preventDefault();
            this._fillStateData(a);
            this.__base.apply(this, arguments)
        },_fillStateData: function(a) {
            BEM.blocks["i-url-controller"].setCurrentState(this.getState()).setNewState(a).build()
        },getStateData: function() {
            var a = this.getState();
            a.block || this._fillStateData(a);
            return a
        }})
    }
    if (_ycssjs("AVEgLN/7TjhDZmgI1FKoHG9KwLg")) {
        BEM.DOM.decl({name: "b-page",modName: "ajax",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this._location = BEM.blocks["i-location"].get()
        }}})
    }
    if (_ycssjs("MSsspjHY5OANYEaMpK30P460ZFI")) {
        BEM.DOM.decl({block: "b-page",modName: "ajax",modVal: "yes"}, {bindEvents: function() {
            this.__base.apply(this, arguments);
            this._location.on("change", this._onChange, this);
            this.on("page:content:loaded", function() {
                this.hasMod("noscroll", "yes") ? this.delMod("noscroll") : this.scroll()
            }, this)
        },initLegacyBlock: function(b) {
            var a = $("." + b);
            a.length && Lego.block[b].call(a, a.get(0).onclick())
        },scroll: function() {
            var a = Math.sqrt(BEM.DOM.win.scrollTop()) * 4;
            $("html, body").animate({scrollTop: 0}, a, "easeOutExpo")
        },updateSeoInformation: function(a) {
            document.title = this.decodeEntities(a.title);
            $("meta[name=keywords]").attr("content", a.keywords);
            $("meta[name=description]").attr("content", a.description);
            this.params.shareTitle = a.shareTitle
        },updateFamilyFilter: function(a) {
            BEM.DOM.update(this.findBlockInside("b-head-userinfo").elem("filter"), a)
        },decodeEntities: function(a) {
            return a ? a.replace(/&(lt|gt|quot|apos|amp);/g, function(d, c) {
                return {lt: "<",gt: ">",quot: '"',apos: "'",amp: "&"}[c]
            }) : ""
        }})
    }
    if (_ycssjs("+xuLsenlBDe+gS3jrC/+ATEEprM")) {
        BEM.DOM.decl({block: "b-page",modName: "navigation",modVal: "infinite"}, {offset: 700,onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.sync();
            this.findBlockInside({block: "b-navigation",modName: "infinite",modVal: "yes"});
            this.findBlockInside("i-images-lists");
            this.findBlockInside({block: "b-load-indicator",modName: "position",modVal: "bottom"});
            this.toggle()
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-images-lists"].un("list:load:next", this._onListLoad, this).un("list:loaded:next", this._onListLoaded, this)
        },bindEvents: function() {
            this.__base.apply(this, arguments);
            this.bindToWin("scroll", $.throttle(this._onScroll, 150, this));
            BEM.blocks["i-images-lists"].on("list:load:next", this._onListLoad, this).on("list:loaded:next", this._onListLoaded, this);
            this.on("change", this._onChangeSearchPage, this)
        },_onChangeSearchPage: function(b, a) {
            this.shouldHide() && this.hide()
        },_onListLoad: function(b, a) {
            this.loading = true
        },_onListLoaded: function() {
            this.loading = false
        },update: function(a) {
            this.isActive = a.params.visible;
            this.toggle()
        },_onScroll: function() {
            this.shouldScroll() && this.trigger("infinite:scroll")
        },sync: function() {
            this.isActive = this.params.notLastList
        },shouldHide: function() {
            return /(search|similar|copy)/.test(this.getMod("type")) && this.isActive && !this.isLastList()
        },shouldShow: function() {
            return !this.isActive || this.isLastList()
        },shouldScroll: function() {
            return this.isSearchPage() && this.isEndOfPage() && !this.loading && this.isActive && !this.isLastList()
        },isSearchPage: function() {
            return this.hasMod("type") && !this.hasMod("type", "index")
        },infiniteHide: function() {
            this.trigger("infinite:hide");
            this.hide()
        },infiniteShow: function() {
            this.trigger("infinite:show");
            this.show()
        },hide: function() {
            this.setMod(this.findElem("hidden-scroll"), "visible", "no")
        },show: function() {
            this.delMod(this.findElem("hidden-scroll"), "visible")
        },toggle: function() {
            if (!this.isSearchPage()) {
                this.show();
                return
            }
            this.shouldHide() && this.infiniteHide();
            this.shouldShow() && this.infiniteShow()
        },isEndOfPage: function() {
            var a = this.__self.win;
            return (a.scrollTop() + a.height() + this.offset) >= this.__self.doc.height()
        },isLastList: function() {
            return $(".i-images-list").length % global.params.pagesCount === 0
        }})
    }
    if (_ycssjs("PzlPzTgWYw0ojw+nLt7n4BXL0Aw")) {
        (function() {
            var b, c, a;
            BEM.DOM.decl("b-navigation", {onSetMod: {js: function() {
                this.findBlockOutside("b-page").findBlockInside("i-images-lists");
                this.__base.apply(this, arguments);
                BEM.blocks["i-images-lists"].on("list:load", this._onLoad, this).on("list:out", this._onListOut, this)
            }},destruct: function() {
                this.__base.apply(this, arguments);
                BEM.blocks["i-images-lists"].un("list:load", this._onLoad, this).un("list:out", this._onListOut, this)
            },start: function(d) {
                b = d;
                a = this.findBlockOn(b, "b-form-button");
                c = a.elem("text").text();
                this.setMod(b, "disabled", "yes");
                a.setMod("disabled", "yes").elem("text").text(this.params.loading)
            },stop: function(d) {
                this.delMod(b, "disabled");
                a.delMod("disabled").url(d).elem("text").text(c);
                return this
            },_onLoad: function(g, f) {
                var d = this.getPosition(f.direction);
                this.loading = true;
                if (!this.hasMod("position", d)) {
                    return
                }
                this.start(this.elem(f.direction))
            },update: function(d) {
                var f = d.params, e = f.visible;
                this.stop(f.url).setMod("active", e ? "yes" : "no");
                e === false && this.setMod("visible", "no")
            },_onListOut: function(f, d) {
                if (d == "next" && this.canLoadPage(d)) {
                    this.hide();
                    this.load(d)
                }
            },getPosition: function(d) {
                return d === "next" ? "bottom" : "top"
            },canLoadPage: function(d) {
                return this.hasMod("position", this.getPosition(d)) && !this.hasMod("active", "no") && this.elem(d).attr("href") !== undefined
            },tryLoad: function(d) {
                if (!this.canLoadPage(d)) {
                    return
                }
                this.setMod("visible", "no");
                this.load(d)
            },load: function(e) {
                var d = {url: this.findElem(e).attr("href")};
                if (d.url) {
                    BEM.blocks["i-url-controller"].updateUserInfo(d);
                    this.trigger("list:load:" + e, d)
                }
            }})
        }())
    }
    if (_ycssjs("KtkPn09m8QKB2h//XWDJd6aoMac")) {
        BEM.DOM.decl({block: "b-navigation",modName: "position",modVal: "top"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.bindTo("prev", "leftclick", this._onPrevClick);
            BEM.blocks["i-keyrouter"].on("special:left", this._onSpecialLeft, this).on("pageup", this._onPageUp, this);
            BEM.blocks["i-images-lists"].on("list:loaded:prev", this._onListLoaded, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-keyrouter"].un("special:left", this._onSpecialLeft, this).un("pageup", this._onPageUp, this);
            BEM.blocks["i-images-lists"].un("list:loaded:prev", this._onListLoaded, this)
        },_onSpecialLeft: function() {
            this._isBeginOfPage() && this.tryLoad("prev")
        },_onPageUp: function() {
            this._isBeginOfPage() && this.tryLoad("prev")
        },_onPrevClick: function(a) {
            a.preventDefault();
            this.tryLoad("prev")
        },_onListLoaded: function() {
            this.canLoadPage("prev") && this.setMod("visible", "yes")
        },_isBeginOfPage: function() {
            return this.__self.doc.scrollTop() === 0
        }})
    }
    if (_ycssjs("r0grioDFLpumWmgMam9USspKeJo")) {
        BEM.DOM.decl({block: "b-navigation",modName: "position",modVal: "bottom"}, {offset: 1,onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.bindTo("next", "leftclick", this._onNextClick);
            BEM.blocks["i-keyrouter"].on("special:right", this._onSpecialRight, this).on("pagedown", this._onPageDown, this).on("space", this._onSpace, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-keyrouter"].un("special:right", this._onSpecialRight, this).un("pagedown", this._onPageDown, this).un("space", this._onSpace, this)
        },_onSpecialRight: function() {
            this._isEndOfPage() && this.tryLoad("next")
        },_onPageDown: function() {
            this._isEndOfPage() && this.tryLoad("next")
        },_onSpace: function() {
            this._isEndOfPage() && this.tryLoad("next")
        },_onNextClick: function(a) {
            a.preventDefault();
            this.tryLoad("next")
        },_isEndOfPage: function() {
            return (this.__self.doc.height() - this.__self.win.height() - this.offset) <= this.__self.doc.scrollTop()
        }})
    }
    if (_ycssjs("bF1s5Ce/EExZAQVA14wDiYpL8+I")) {
        BEM.DOM.decl("b-form-checkbox", {onSetMod: {js: function() {
            var d = this, a = d.elem("checkbox");
            try {
                var c = d.__self.doc[0].activeElement
            } catch (b) {
            }
            d.setMod("checked", a.attr("checked") ? "yes" : "");
            c === a[0] && d.setMod("focused", "yes")
        },focused: {yes: function() {
            if (this.isDisabled()) {
                return false
            }
            this.elem("checkbox").focus()
        },"": function() {
            this.elem("checkbox").blur()
        }},checked: function(b, a) {
            this.elem("checkbox").attr("checked", a == "yes");
            this.elem("tick").attr("alt", ((a == "yes") ? " v" : ""));
            this.afterCurrentEvent(function() {
                this.trigger("change")
            })
        },disabled: function(b, a) {
            this.elem("checkbox").attr("disabled", a == "yes")
        }},isDisabled: function() {
            return this.hasMod("disabled", "yes")
        },isChecked: function() {
            return this.hasMod("checked", "yes")
        },toggle: function() {
            this.toggleMod("checked", "yes", "")
        },val: function(b) {
            var a = this.elem("checkbox");
            return b == undefined ? a.val() : a.val(b)
        },_onClick: function(a) {
            if (a.button) {
                return
            }
            this.isDisabled() || this.setMod("focused", "yes")
        },_onChange: function(a) {
            a.target.checked ? this.setMod("checked", "yes") : this.delMod("checked")
        }}, {live: function() {
            this.liveBindTo("checkbox", "click", function(a) {
                this._onClick(a)
            }).liveBindTo("checkbox", "change", function(a) {
                    this._onChange(a)
                }).liveBindTo("checkbox", "focusin focusout", function(a) {
                    this.setMod("focused", a.type == "focusin" ? "yes" : "")
                });
            return false
        }});
        BEM.HTML.decl("b-form-checkbox", {onBlock: function(b) {
            var a = b.param("checkboxAttrs") || {};
            b.js(true).mix(!b.mod("size") ? [{block: "b-form-checkbox",mods: {size: "m"}}] : "").tag("span").tParam("checkboxAttrs", $.extend(a || {}, {id: b.param("id") || a.id || $.identify(),checked: b.mod("checked") ? "checked" : undefined,disabled: b.mod("disabled") ? "disabled" : undefined})).beforeContent({elem: "inner",content: [{elem: "checkbox",attrs: b.tParam("checkboxAttrs")}, {elem: "bg"}]})
        },onElem: {label: function(a) {
            a.tag("label").attr("for", a.tParam("checkboxAttrs").id)
        },checkbox: function(a) {
            a.tag("input").attrs($.extend(a.attrs(), {type: "checkbox"}))
        },bg: function(a) {
            a.tag("i").content({elem: "tick"})
        },tick: function(a) {
            a.tag("i")
        },inner: function(a) {
            a.tag("span")
        }}})
    }
    if (_ycssjs("jRcAOHeUyJ8gac8FjaMadybvrFM")) {
        BEM.DOM.decl({block: "b-navigation",modName: "infinite",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].on("infinite:scroll", this._onInfiniteScroll, this).on("infinite:show", this._onInfiniteShow, this).on("infinite:hide", this._onInfiniteHide, this).on("resize", this._onResize, this);
            BEM.blocks["i-images-lists"].on("list:loaded:next", this._onListLoadedNext, this);
            var a = BEM.blocks["i-location"].get().getStateData();
            (a.block == "b-page_type_search" || a.block == "b-page_type_similar" || a.block == "b-page_type_copy" || a.block == "b-page_type_cbir") && this._delayedLoad()
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].un("infinite:scroll", this._onInfiniteScroll, this).un("infinite:show", this._onInfiniteShow, this).un("infinite:hide", this._onInfiniteHide, this).un("resize", this._onResize, this);
            BEM.blocks["i-images-lists"].un("list:loaded:next", this._onListLoadedNext, this);
            this.timer && window.clearTimeout(this.timer)
        },_onInfiniteHide: function() {
            this.isActive() && this.hide()
        },_onInfiniteShow: function() {
            this.isActive() && this.show()
        },_onInfiniteScroll: function() {
            this.isActive() && this.load("next")
        },_onListLoadedNext: function() {
            this._delayedLoad()
        },_onResize: function() {
            this._delayedLoad()
        },hide: function() {
            this.setMod("visible", "no")
        },show: function() {
            this.setMod("visible", "yes")
        },isActive: function() {
            return this.hasMod("active", "yes")
        },load: function() {
            this.__base.apply(this, arguments);
            var a = this.findBlockOutside("b-page").findBlocksInside("b-images-list").pop()
        },_canLoad: function() {
            return this.findBlockOutside({block: "b-page",modName: "navigation",modVal: "infinite"}).shouldScroll() && this.isActive() && this._isThereFreeSpace()
        },_isThereFreeSpace: function() {
            var c = $(".b-images-list").filter(":last"), b = $(".b-images-item").filter(":last"), a = c.offset().top + c.height();
            return a - b.height() < this.__self.win.height()
        },_delayedLoad: function() {
            this.timer = window.setTimeout(this.changeThis(function() {
                this._canLoad() && this.load("next")
            }), 300);
            return this
        }})
    }
    if (_ycssjs("7jdffeoLT/0rKMAGDygz0M3QUUk")) {
        BEM.HTML.decl("b-link", {onBlock: function(a) {
            a.tag("a").attr("href", a.param("url"));
            var b = ["title", "target"], c;
            while (c = b.pop()) {
                a.param(c) && (a.attr(c, a.param(c)))
            }
        }})
    }
    if (_ycssjs("0kKGbxwts9M91uDuW4wBsOZ0+L4")) {
        BEM.DOM.decl({block: "b-link",modName: "ajax",modVal: "yes"}, {_onClick: function(b) {
            this.__base.apply(this, arguments);
            var a = global.filterLink(this.domElem.attr("href"));
            BEM.blocks["i-location"].get().change($.extend({url: a}, this.params), b)
        }}, {live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo({block: "b-link",modName: "ajax",modVal: "yes"}, "leftclick", function(a) {
                this._onClick(a)
            })
        }})
    }
    if (_ycssjs("PwVdhFOVyXO2kFG1I3UEY622iGM")) {
        BEM.DOM.decl("b-load-indicator", {onSetMod: {js: function() {
            this.spin = this.findBlockInside("b-spin")
        },visible: function(a, b) {
            this.spin.toggleMod("progress", "yes", "", b === "yes")
        }},_onLoadStart: function() {
            this.setMod("visible", "yes")
        },_onLoadEnd: function() {
            this.delMod("visible")
        }})
    }
    if (_ycssjs("3nPK1SdFt0Ra4XP++k9aZXm8yOk")) {
        BEM.DOM.decl({block: "b-load-indicator",modName: "position",modVal: "top"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-images-lists"].on("list:load:prev", this._onLoadStart, this).on("list:loaded:prev", this._onLoadEnd, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-images-lists"].un("list:load:prev", this._onLoadStart, this).un("list:loaded:prev", this._onLoadEnd, this)
        }})
    }
    if (_ycssjs("icklkzrOd4f1yx3txE0oXUpXDtM")) {
        BEM.DOM.decl({block: "b-load-indicator",modName: "position",modVal: "bottom"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-images-lists"].on("list:load:next", this._onLoadStart, this).on("list:loaded:next", this._onLoadEnd, this);
            BEM.blocks["b-page"].on("infinite:show", this._onInfiniteShow, this).on("infinite:hide", this._onInfiniteHide, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-images-lists"].un("list:load:next", this._onLoadStart, this).un("list:loaded:next", this._onLoadEnd, this);
            BEM.blocks["b-page"].un("infinite:show", this._onInfiniteShow, this).un("infinite:hide", this._onInfiniteHide, this)
        },_onLoadStart: function(b, a) {
            this.__base.apply(this, arguments);
            this._onInfiniteHide()
        },_onInfiniteShow: function() {
            this.domElem.addClass("i-hidden")
        },_onInfiniteHide: function() {
            this.domElem.removeClass("i-hidden")
        }})
    }
    if (_ycssjs("GnBf7QTx7QqHcEXS/TPS0IE4XE0")) {
        BEM.DOM.decl({block: "b-load-indicator",modName: "position",modVal: "absolute"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.channel("page:signal").on("load:start", this._onLoadStart, this).on("load:end", this._onLoadEnd, this)
        },visible: function(a, b) {
            this.__base.apply(this, arguments);
            this.findBlockOutside("b-page").findBlockInside("b-page-layout").toggleMod("fade", "yes", "", b === "yes")
        }},destruct: function() {
            this.__base.apply(this, arguments);
            this.channel("page:signal").un("load:start", this._onLoadStart, this).un("load:end", this._onLoadEnd, this)
        }})
    }
    if (_ycssjs("lEdG5+bjvXzg8bt+XLd9aZHRJgY")) {
        BEM.DOM.decl("b-spin", {onSetMod: {js: function() {
            this._size = this.getMod("size") || /[\d]+/.exec(this.getMod("theme"))[0];
            this._bgProp = "background-position";
            this._posPrefix = "0 -";
            if (this.elem("icon").css("background-position-y")) {
                this._bgProp = "background-position-y";
                this._posPrefix = "-"
            }
            this._curFrame = 0;
            this.hasMod("progress") && this.channel("sys").on("tick", this._onTick, this)
        },progress: {yes: function() {
            this.channel("sys").on("tick", this._onTick, this)
        },"": function() {
            this.channel("sys").un("tick", this._onTick, this)
        }}},_onTick: function() {
            var a = ++this._curFrame * this._size;
            (a >= this._size * 36) && (this._curFrame = a = 0);
            this.elem("icon").css(this._bgProp, this._posPrefix + a + "px")
        },destruct: function() {
            this.channel("sys").un("tick", this._onTick, this);
            this.__base.apply(this, arguments)
        }})
    }
    if (_ycssjs("cSJXxzZY4V0pNNW4NFYhcAD2bK4")) {
        BEM.DOM.decl("b-spin", {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.delMod("progress")
        }}})
    }
    if (_ycssjs("6UwW6PzsW1zZfus/j6vEgbdIzPs")) {
        BEM.HTML.decl("b-icon", {onBlock: function(c) {
            var b = {src: "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt: ""}, f = c.params(), d = ["alt", "width", "height"], e;
            f.url && (b.src = f.url);
            while (e = d.shift()) {
                f[e] && (b[e] = f[e])
            }
            c.tag("img").attrs(b)
        }})
    }
    if (_ycssjs("QjiasnLAg7Tioq+I9PVtkIqalhM")) {
        (function() {
            var a = {};
            BEM.decl("i-request", {onSetMod: {js: function() {
                this._preventCache = false
            }},get: function(c, e, b, d) {
                if (!$.isFunction(b)) {
                    d = b;
                    b = this.params.onError
                }
                this._get(c, e, b, $.extend({}, this.params, d))
            },_get: function(e, g, d, f) {
                var c = this._buildCacheKey(e, f), b = a[f.cacheGroup];
                f.cache && b && c in b.data ? g.call(this.params.callbackCtx, b.data[c]) : this._do(e, g, d, f)
            },_do: function(c, e, b, d) {
            },_onSuccess: function(c, b, d, e) {
                e.cache && !this._preventCache && this.putToCache(e, c, d);
                this._preventCache = false
            },_buildCacheKey: function(b, c) {
                return typeof b == "string" ? b : $.param(b)
            },putToCache: function(f, d, e) {
                var b = a[f.cacheGroup] || (a[f.cacheGroup] = {keys: [],data: {}});
                if (b.keys.length >= f.cacheSize) {
                    delete b.data[b.keys.shift()]
                }
                var c = this._buildCacheKey(d, f);
                b.data[c] = e;
                b.keys.push(c)
            },dropCache: function() {
                delete a[this.params.cacheGroup]
            },getDefaultParams: function() {
                return {cache: false,cacheGroup: "default",cacheSize: 100,callbackCtx: this}
            }})
        })()
    }
    if (_ycssjs("ITda79OSjWJLifKT2sE9XDJAS14")) {
        BEM.decl("i-request_type_bem", {onSetMod: {js: function() {
            this.blocks = [];
            this._req = BEM.create("i-request_type_ajax", {dataType: "json",url: this.params.url,callbackCtx: this})
        }},block: function(b, d, c, a) {
            if (arguments.length < 2) {
                throw new Error("success callback is required")
            }
            this.blocks.push({decl: b,success: d,error: $.type(c) === "function" ? c : $.noop,ctx: a || $.type(c) === "object" ? c : this.params.ctx});
            return this
        },get: function(b, d, a) {
            var c = this.params;
            if ($.type(b) === "function") {
                c.success = b;
                c.error = d || $.noop;
                b = undefined
            } else {
                c.success = d || $.noop;
                c.error = a || $.noop
            }
            this.afterCurrentEvent(function() {
                this._req.get($.extend({}, this._getArgs(), b), this._onSuccess, this._onError)
            });
            return this
        },abort: function() {
            this._req.abort();
            this.blocks.length = 0;
            return this
        },_onSuccess: function(a) {
            this._callback("success", a)
        },_onError: function(a) {
            this._callback("error", a)
        },_callback: function(a, b) {
            this.blocks.forEach(function(c) {
                c[a].call(c.ctx, a === "success" ? b[c.decl] : b)
            });
            this.params[a].call(this.params.ctx, b)
        },_getRequestString: function() {
            return $.stringify($.map(this.blocks, function(a) {
                return {block: a.decl}
            }))
        },_getArgs: function() {
            return {format: "json",request: this._getRequestString()}
        },getDefaultParams: function() {
            return {url: "/",ctx: this}
        }})
    }
    if (_ycssjs("ikzpzW3Ig0R2umDdvUsaARLAQeQ")) {
        BEM.decl("i-request_type_bem", {get: function(b, c, a) {
            this.trigger("json:params", $.extend({}, this._getArgs(), b));
            b.img_url && (b.img_url = $.decodeURIComponent(b.img_url));
            this.__base.apply(this, arguments)
        },_getArgs: function() {
            return $.extend({}, this.__base.apply(this, arguments), {layout: global.params.layout})
        },_onSuccess: function(a) {
            if (a && a.type === "captcha") {
                window.location.href = a.captcha["captcha-page"];
                return
            }
            this.__base.apply(this, arguments)
        }})
    }
    if (_ycssjs("DvoRZovxguSW2moxWkLcWrZjXOQ")) {
        (function(a, d) {
            if (typeof JSON != "undefined") {
                return a.stringify = JSON.stringify
            }
            var c = Object.prototype.toString, e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, b = {"\b": "\\b","\t": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"};
            a.stringify = function(l) {
                if (l === null) {
                    return "null"
                }
                if (typeof l === "undefined") {
                    return d
                }
                switch (c.call(l)) {
                    case "[object String]":
                        return '"' + (e.test(l) ? l.replace(e, function(i) {
                            var m = b[i];
                            return typeof m === "string" ? m : "\\u" + ("0000" + i.charCodeAt(0).toString(16)).slice(-4)
                        }) : l) + '"';
                    case "[object Number]":
                    case "[object Boolean]":
                        return "" + l;
                    case "[object Array]":
                        var k = "[", j = 0, f = l.length, h;
                        while (j < f) {
                            h = a.stringify(l[j]);
                            k += (j++ ? "," : "") + (typeof h == "undefined" ? "null" : h)
                        }
                        return k + "]";
                    case "[object Object]":
                        var k = "{", j = 0, h;
                        for (var g in l) {
                            if (l.hasOwnProperty(g)) {
                                h = a.stringify(l[g]);
                                typeof h != "undefined" && (k += (j++ ? "," : "") + '"' + g + '":' + h)
                            }
                        }
                        return k + "}";
                    default:
                        return d
                }
            }
        })(jQuery)
    }
    if (_ycssjs("YC7to5x9YWIa8lBaK5vOHqDu1y4")) {
        BEM.DOM.decl("b-head", {onSetMod: {js: function() {
            BEM.blocks["i-location"].get().on("change", this._onChange, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-location"].get().un("change", this._onChange, this)
        },_onChange: function(b, a) {
            if (a.block !== "b-page_type_index") {
                this.hasMod("wide") && this.delMod("wide")
            }
        }})
    }
    if (_ycssjs("E5qxUmwex1DvpxBl9jmOqWU99OM")) {
        BEM.DOM.decl("b-statcounter", {onSetMod: {js: function() {
            if (this.findElem("metrika").length < 1) {
                return
            }
            BEM.blocks["b-page"].on("hit", this._onHit, this);
            BEM.blocks["b-statcounter"].on("goal", this._onMetrikaGoal, this);
            this.__base.apply(this, arguments)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].un("hit", this._onHit, this);
            BEM.blocks["b-statcounter"].un("goal", this._onMetrikaGoal, this)
        },_onMetrikaGoal: function(c, b) {
            try {
                this.mc.reachGoal(b.target, b.params)
            } catch (c) {
                var a = window["yaCounter" + this.elemParams("metrika").id];
                if (a) {
                    this.mc = a;
                    this.mc.reachGoal(b.target, b.params)
                }
            }
        },_onHit: function() {
            try {
                this.mc.hit(location.href)
            } catch (b) {
                var a = window["yaCounter" + this.elemParams("metrika").id];
                if (a) {
                    this.mc = a;
                    this.mc.hit(location.href)
                }
            }
        }})
    }
    if (_ycssjs("Jeyft1LG1qYe4n2jgqXxXCqHEiU")) {
        (function() {
            BEM.DOM.decl("b-statcounter__metrika", {onSetMod: {js: function() {
                this.__self.loadMetrika();
                this.addCounter(this.params)
            }},addCounter: function(d) {
                var a = window.Ya && Ya.Metrika, c = window.yandex_metrika_callbacks || (window.yandex_metrika_callbacks = []), b = function() {
                    window["yaCounter" + d.id] = new Ya.Metrika(d)
                };
                if (!d.id) {
                    throw new Error([BEM.I18N("b-statcounter__metrika", "JSERR_incorrectID"), "block: " + this.__self.getName(), "method: addCounter"].join("\n"))
                }
                a ? b() : c.push(b)
            },getDefaultParams: function() {
                return {enableAll: true}
            }}, {loadMetrika: function() {
                var a = window.Ya && Ya.Metrika, c = document.location.protocol == "https:" ? "https:" : "http:", b = "//mc.yandex.ru/metrika/watch.js";
                !a && $("script")[0].parentNode.appendChild($("<script>").attr({type: "text/javascript",async: true,src: c + b})[0]);
                this.loadMetrika = function() {
                }
            }})
        })()
    }
    if (_ycssjs("JE/rq22CN3WbOAUUh8frA91J7ec")) {
        BEM.DOM.decl("b-statcounter__metrika", {onSetMod: {js: function() {
            this.__self.loadMetrika();
            var c = {};
            if (this.params.extraCounters) {
                var a = this.params.extraCounters;
                for (var b in a) {
                    c[b] || this.addCounter($.extend({id: b}, a[b]));
                    c[b] = true
                }
            }
            c[this.params.id] || this.addCounter(this.params)
        }}})
    }
    if (_ycssjs("+X2f+4NCE97fyQyR29pNg7C9cp0")) {
        (function(a) {
            var b = a.event.special.leftclick = {setup: function() {
                a(this).bind("click", b.handler)
            },teardown: function() {
                a(this).unbind("click", b.handler)
            },handler: function(c) {
                if (!c.button) {
                    c.type = "leftclick";
                    a.event.handle.apply(this, arguments);
                    c.type = "click"
                }
            }}
        })(jQuery)
    }
    if (_ycssjs("Ba7eiELX4nFurkHBCkyyuENCI/s")) {
        (function(b) {
            var a = b.event.special.leftclick.handler;
            b.event.special.leftclick.handler = function(c) {
                if (c.which == 2 || c.metaKey) {
                    return true
                }
                a.apply(this, arguments)
            }
        }(jQuery))
    }
    if (_ycssjs("2z4McqMW+09pRiBoLBkpmvLPp5I")) {
        (function(c, a) {
            BEM.DOM.decl("b-head-tabs", {onSetMod: {js: function() {
                a.block["b-head-tabs"].call(this.domElem[0], this.params)
            }}});
            var b = a.block["b-head-tabs"] = function(v) {
                var f = c(this), z = c(".b-head-search"), y = z.find(".b-search .b-form-input input:first"), o = BEM.blocks["i-global"].param("id"), k = (function() {
                    var B = q(window.location.search), A = /^#.*(\?.+)$/.exec(window.location.hash);
                    A && c.extend(B, q(A[1]));
                    return B
                }()), j = {www: 505,search: 521,images: 526}[o] || 527, g = {market: {cvredirect: 2,clid: j}}, d = document.location.hostname.indexOf(".com") > -1 ? "2" : "", m = {news: {rpt: "nnews" + d,grhow: "clutop"},haber: {rpt: "nnews2",grhow: "clutop"},yaca: {rpt: "rs2"},market: {cvredirect: 2,clid: j},blogs: {ft: "blog"},people: {filter: "people"},appsearch: {filter: "mobile_apps"}}, x = (function() {
                    var A = {};
                    c.each(["news", "yaca", "market", "blogs", "maps", "adresa", "video", "fotki", "slovari", "auto", "images", "music", "www", "aile", "yandex", "haber", "gorsel"], function() {
                        A[this] = ["family"]
                    });
                    return A
                })(), s = (function() {
                    var A = {};
                    c.each(["news", "yaca", "market", "blogs", "maps", "adresa", "video", "fotki", "slovari", "auto", "images", "music", "www", "aile", "yandex", "haber", "gorsel"], function() {
                        A[this] = ["noreask", "family"]
                    });
                    return A
                })(), t = f.find(':not(strong)>a.b-head-tabs__link:not([href$="/all"])').map(function() {
                    var B = this.host.split(".")[0], C = q(this.search), E = C.clid, A = decodeURIComponent(c.param(c.extend(C, h(B, E)), true)), F = this.pathname.replace(/^\/?(.*)/, "/$1"), D = b.getHostToUrlMap()[B];
                    D && F.indexOf((D.charAt(0) === "/" ? "" : "/") + D) > -1 && (D = "");
                    F = F.slice(1);
                    if (F.length) {
                        F = F.replace(/\/*$/, "/")
                    }
                    return {node: this,clid: E,toServiceId: B,path: D,pathname: F,host: this.host,searchHost: b.getHostMap()[B],noSearchParamsUrl: A ? "?" + A : "",searchParams: c.extend(C, p(B, E))}
                }).filter(function() {
                        return typeof this.path !== "undefined"
                    }), n, u = z.find(".b-search__advanced")[0];
                if (u && u.pathname) {
                    var i = q(u.search), l = u.pathname.replace(/^\/?(.*)/, "$1");
                    i.text = "";
                    t.push({node: u,clid: i.clid,toServiceId: o,path: "",pathname: l,host: u.host,noSearchParamsUrl: "?" + c.param(i, true),searchParams: i})
                }
                (function() {
                    var A = c.trim(y.val()) || v["default"];
                    if (n != A) {
                        n = A;
                        c.each(t, function() {
                            A && (this.searchParams[b.getSearchParamName(this.toServiceId)] = A);
                            this.node.href = [this.node.protocol + "/", A && this.searchHost ? this.searchHost : this.host, this.pathname + (A ? this.path + "?" + c.param(this.searchParams, true) : this.noSearchParamsUrl)].join("/")
                        })
                    }
                    setTimeout(arguments.callee, 200)
                })();
                function h(A, B) {
                    var C = g[A] || {};
                    !C.clid && B && (C.clid = B);
                    c.each(x[A] || [], function() {
                        k[this] && (C[this] = k[this])
                    });
                    return C
                }
                function p(B, C) {
                    var E = [].concat(s[B]), A = B + o;
                    (A == "imageswww" || A == "wwwimages") && E.push("site");
                    var D = m[B] || {};
                    c.each(E, function() {
                        k[this] && (D[this] = k[this])
                    });
                    !D.clid && C && B !== "www" && (D.clid = C);
                    return D
                }
                function q(A) {
                    var B = {};
                    if (!A) {
                        return B
                    }
                    c.each(A.substr(1).split("&"), function(F) {
                        var G = this.split("="), C = G[0], E = G[1];
                        if (C) {
                            if (B.hasOwnProperty(C)) {
                                var D = B[C];
                                c.isArray(D) ? D.push(E) : B[C] = [D, E]
                            } else {
                                B[C] = E
                            }
                        }
                    });
                    return c.decodeURIComponent !== undefined ? e(B) : B
                }
                function e(B) {
                    var A = ["site"];
                    c.each(B, function(C, D) {
                        if (c.inArray(C, A) > -1) {
                            B[C] = c.isArray(D) ? D.map(function(E) {
                                return c.decodeURIComponent(E)
                            }) : c.decodeURIComponent(D)
                        }
                    });
                    return B
                }
            };
            c.extend(b, {getHostToUrlMap: function() {
                var d = {www: "yandsearch",market: "search.xml",maps: "",music: "#!/search",video: "search"};
                d.translate = d.ceviri = d.harita = d.maps;
                d.blogs = d.adresa = d.fotki = d.slovari = d.auto = d.rabota = d.market;
                d.appsearch = d.people = d.news = d.yaca = d.images = d.gorsel = d.haber = d.yandex = d.www;
                d.afisha = d.pogoda = d.hava = d.video;
                return d
            },getHostMap: function() {
                return {}
            },getSearchParamName: function(d) {
                switch (d) {
                    case "pogoda":
                    case "hava":
                        return "request";
                    default:
                        return "text"
                }
            }})
        })(jQuery, window.Lego)
    }
    if (_ycssjs("SYj7oZiVi8S45e2/O8y1hhnLAMk")) {
        BEM.DOM.decl({name: "b-link",modName: "pseudo",modVal: "yes"}, {_onClick: function(a) {
            a.preventDefault();
            this.hasMod("disabled", "yes") || this.afterCurrentEvent(function() {
                this.trigger("click")
            })
        }}, {live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo({modName: "pseudo",modVal: "yes"}, "leftclick", function(a) {
                this._onClick(a)
            })
        }})
    }
    if (_ycssjs("FsDv+T1CC3zXSGCCFtrtOLD0EgU")) {
        BEM.HTML.decl({name: "b-link",modName: "pseudo",modVal: "yes"}, {onBlock: function(a) {
            a.tag(a.param("url") ? "a" : "span");
            a.wrapContent({elem: "inner"});
            a.js(true)
        },onElem: {inner: function(a) {
            a.tag("span")
        }}})
    }
    if (_ycssjs("L3WutsQnQYmGdqoxqGnixQobkiM")) {
        (function(a) {
            BEM.DOM.decl("b-dropdowna", {onSetMod: {js: function() {
                this._getSwitcher().on("click", this._toggle, this)
            },disabled: function(c, b) {
                this._getSwitcher().setMod(c, b);
                b == "yes" && this.getPopup().hide()
            }},_getSwitcher: function() {
                return this._switcher || (this._switcher = this.findBlockInside("b-" + (this.getMod(this.elem("switcher"), "type") || "link")))
            },_toggle: function() {
                this.getPopup().toggle(this.elem("switcher"))
            },getPopup: function() {
                return this._popup || (this._popup = this.findBlockInside("b-popupa")).on("outside-click", function(c, b) {
                    this._getSwitcher().containsDomElem(a(b.domEvent.target)) && c.preventDefault()
                }, this)
            },destruct: function() {
                var b = this._popup;
                b && b.destruct();
                this.__base.apply(this, arguments)
            }}, {live: function() {
                this.liveInitOnEvent("switcher", "leftclick", function() {
                })
            }})
        })(jQuery);
        BEM.HTML.decl("b-dropdowna", {onBlock: function(a) {
            a.js(true)
        }})
    }
    if (_ycssjs("yDXvV7Xw2ULF++5cKcavAMWOiKU")) {
        (function(b) {
            var a = ["down-right", "down", "down-left", "up", "up-right", "up-left", "right-down", "right", "right-up", "left-down", "left", "left-up"];
            BEM.DOM.decl("b-popupa", {onSetMod: {js: function() {
                this._owner = null;
                this._isShowed = false;
                this._direction = this.getMod("direction") || "down";
                this._lastDirection = null;
                this._hasTail = !!this.elem("tail").length;
                if (!this._hasTail) {
                    Object.keys(this.params).forEach(function(c) {
                        (c.indexOf("tail") === 0) && (this.params[c] = 0)
                    }, this)
                }
            }},show: function(c) {
                if (!this._isShowed || this._owner !== c) {
                    this._owner = c;
                    this._getUnder().show({left: -10000,top: -10000});
                    this.pos();
                    this._getUnder().setMod("animate", "yes")
                }
                return this
            },hide: function() {
                this._isShowed && this._getUnder().hide();
                return this
            },toggle: function(c) {
                return this.isShowed() ? this.hide() : this.show(c)
            },_pos: function() {
                var c = this._calcParams(this._owner);
                this._hasTail && this.elem("tail").css(c.tailOffsets);
                this.setMod("direction", c.direction)._getUnder().show(c.offsets);
                return this
            },pos: function() {
                if (!this._isShowed) {
                    return this
                }
                return this._pos()
            },isShowed: function() {
                return this._isShowed
            },setDirection: function(c) {
                if (this._direction != c) {
                    this._direction = c;
                    this.isShowed() && this.pos()
                }
            },setContent: function(c, e, d) {
                BEM.DOM.update(this.elem("content"), c, e, d);
                return this.isShowed() ? this.pos() : this
            },_isOwnerNode: function() {
                return !!(this._owner && this._owner.jquery)
            },_calcDimensions: function() {
                var i = this._getUnder().domElem, m = this._getUnder()._getUnder(), k = this.__self.win, f = this._owner, n = this._isOwnerNode(), l = n ? f.offset() : f, d = n ? f.outerWidth() : 0, e = n ? f.outerHeight() : 0, h = k.scrollLeft(), g = k.scrollTop(), j = this.__self.getWindowSize(), c = parseInt(this.elem("content").css("border-top-width"), 10);
                return {ownerWidth: d,ownerHeight: e,ownerLeft: l.left,ownerTop: l.top,ownerRight: l.left + d,ownerBottom: l.top + e,ownerHorizMiddle: l.left + d / 2,ownerVertMiddle: l.top + e / 2,posWidth: i.outerWidth(),posHeight: i.outerHeight(),underWidth: m.outerWidth(),underHeight: m.outerHeight(),borderWidth: isNaN(c) ? 0 : c,windowLeft: h,windowRight: h + j.width,windowTop: g,windowBottom: g + j.height}
            },_calcParams: function() {
                var i = this._calcDimensions();
                if (this.hasMod("adjustable", "no")) {
                    return this.calcDirectionParams(this._direction, i)
                }
                var c = {}, f = this.params.directions, j = b.inArray(this._direction, f);
                j > -1 || (j = 0);
                var e = j, h, g;
                do {
                    h = f[j];
                    g = c[h] = this.calcDirectionParams(h, i);
                    if (!g.factor) {
                        this._lastDirection = h;
                        return g
                    }
                    ++j == f.length && (j = 0)
                } while (j !== e);
                return c[this._lastDirection || f[0]]
            },calcDirectionParams: function(l, j) {
                var k, g = this.params, f = {top: 0,left: 0}, i = {marginLeft: 0,marginTop: 0}, c = l.split("-")[0], e = (this._hasTail && j.ownerWidth < g.tailWidthVertical) ? (g.tailWidthVertical - j.ownerWidth) / 2 : 0, h = (this._hasTail && j.ownerHeight < g.tailHeightHorizontal) ? (g.tailHeightHorizontal - j.ownerHeight) / 2 : 0;
                switch (l) {
                    case "up":
                    case "down":
                        f.left = j.ownerHorizMiddle - j.posWidth / 2;
                        f.top = l == "down" ? j.ownerBottom + g.tailHeightVertical : j.ownerTop - j.posHeight - g.tailHeightVertical;
                        i.marginLeft = j.posWidth / 2 - g.tailWidthVertical / 2;
                        i.marginTop = l == "down" ? 0 - g.tailHeightVertical : 0;
                        break;
                    case "up-left":
                    case "up-right":
                    case "down-left":
                    case "down-right":
                        f.left = l == "down-right" || l == "up-right" ? j.ownerLeft - e : j.ownerRight - j.posWidth + e;
                        f.top = c == "down" ? j.ownerBottom + g.tailHeightVertical : j.ownerTop - j.posHeight - g.tailHeightVertical;
                        i.marginLeft = j.ownerWidth > j.posWidth ? j.posWidth / 2 - g.tailWidthVertical / 2 : j.ownerHorizMiddle - f.left - g.tailWidthVertical / 2;
                        i.marginTop = c == "down" ? j.borderWidth - g.tailHeightVertical : 0 - j.borderWidth;
                        break;
                    case "left-down":
                    case "right-down":
                        f.left = l == "left-down" ? j.ownerLeft - j.posWidth - g.tailWidthHorizontal : j.ownerRight + g.tailWidthHorizontal;
                        f.top = j.ownerTop - h;
                        i.marginLeft = l == "left-down" ? 0 - j.borderWidth : j.borderWidth - g.tailWidthHorizontal;
                        i.marginTop = j.ownerHeight < j.posHeight ? j.ownerVertMiddle - f.top - g.tailHeightHorizontal / 2 : j.posHeight / 2 - g.tailHeightHorizontal / 2;
                        break;
                    case "left":
                    case "right":
                        f.left = l == "left" ? j.ownerLeft - j.posWidth - g.tailWidthHorizontal : j.ownerRight + g.tailWidthHorizontal;
                        f.top = j.ownerVertMiddle - j.posHeight / 2;
                        i.marginLeft = l == "left" ? 0 - j.borderWidth : j.borderWidth - g.tailWidthHorizontal;
                        i.marginTop = j.posHeight / 2 - g.tailHeightHorizontal / 2;
                        break;
                    case "left-up":
                    case "right-up":
                        f.left = l == "left-up" ? j.ownerLeft - j.posWidth - g.tailWidthHorizontal : j.ownerRight + g.tailWidthHorizontal;
                        f.top = j.ownerBottom - j.posHeight + h;
                        i.marginLeft = c == "left" ? 0 - j.borderWidth : j.borderWidth - g.tailWidthHorizontal;
                        i.marginTop = j.ownerHeight > j.posHeight ? j.posHeight / 2 - g.tailHeightHorizontal / 2 : j.ownerVertMiddle - f.top - g.tailHeightHorizontal / 2
                }
                k = this.calcInWindowFactor(f, j);
                return {direction: c,factor: k,offsets: f,tailOffsets: i}
            },calcInWindowFactor: function(f, e) {
                var c = 0;
                e.windowTop > f.top && (c += e.windowTop - f.top);
                f.top + e.underHeight > e.windowBottom && (c += f.top + e.underHeight - e.windowBottom);
                e.windowLeft > f.left && (c += e.windowLeft - f.left);
                f.left + e.underWidth > e.windowRight && (c += f.left + e.underWidth - e.windowRight);
                return c
            },getDefaultParams: function() {
                return {tailOffset: 19,tailWidthHorizontal: 9,tailWidthVertical: 19,tailHeightHorizontal: 19,tailHeightVertical: 10,shadowSize: 7,directions: a}
            },destruct: function() {
                var c = this._under;
                if (!c) {
                    this.__base.apply(this, arguments)
                } else {
                    if (!this._destructing) {
                        this._destructing = true;
                        this.hide();
                        BEM.DOM.destruct(false, c.domElem);
                        this.__base(true)
                    }
                }
            },_getUnder: function() {
                if (!this._under) {
                    var c = b(BEM.HTML.build({block: "i-popup",zIndex: this.params.zIndex,mods: {autoclosable: this.getMod("autoclosable") || "yes",fixed: this.hasMod("direction", "fixed") && "yes"},underMods: this.params.underMods,underMix: [{block: "b-popupa",elem: "under"}]}));
                    (this._under = this.findBlockOn(c, "i-popup")).on({show: this._onUnderShowed,hide: this._onUnderHidden,"outside-click": this._onUnderOutsideClicked}, this).elem("content").append(this.domElem)
                }
                return this._under
            },_onUnderShowed: function() {
                this._isShowed = true;
                this.bindToWin("resize", this.pos)._isOwnerNode() && this.bindToDomElem(this._owner.parents().add(this.__self.win), "scroll", this.pos);
                this.trigger("show")
            },_onUnderHidden: function() {
                this._isShowed = false;
                this.unbindFromWin("resize")._isOwnerNode() && this.unbindFromDomElem(this._owner.parents().add(this.__self.win), "scroll");
                this.trigger("hide")
            },_onUnderOutsideClicked: function() {
                this.trigger.apply(this, arguments)
            }}, {live: function() {
                this.liveBindTo("close", "leftclick", function() {
                    this.hide()
                })
            }});
            BEM.HTML.decl("b-popupa", {onBlock: function(c) {
                var d = false;
                b.each(c.param("content"), function(e, f) {
                    return !(d = f.elem == "close")
                });
                c.mods({theme: "ffffff",direction: "down","has-close": d && "yes"}).js(true).afterContent({elem: "shadow"})
            },onElem: {content: function(c) {
                c.wrap({elem: "wrap-cell",tag: "td"}).wrap({tag: "tr"}).wrap({elem: "wrap",tag: "table"})
            },close: function(c) {
                c.tag("i")
            },shadow: function(c) {
                c.tag("i")
            },tail: function(c) {
                c.tag("i").wrapContent({elem: "tail-i",tag: "i"})
            }}})
        })(jQuery)
    }
    if (_ycssjs("ozdLNrbMFoqWjHuRDwBp30JCJrE")) {
        (function(d) {
            var c, g = [], a = d.browser;
            function f() {
                return g.length ? g.shift() : c ? c.clone() : c = b()
            }
            function e(h) {
                g.push(h)
            }
            function b() {
                return d((a.safari || a.webkit) && navigator.userAgent.toLowerCase().indexOf("mobile") > -1 ? "<div/>" : "<iframe" + (a.msie && a.version < 9 ? ' frameborder="0"' : "") + "/>")
            }
            BEM.DOM.decl("i-popup", {onSetMod: {visibility: {visible: function() {
                var h = this._getUnder(), i = h.parent();
                this.hasMod(h, "type", "paranja") ? i.is("body") || h.appendTo("body") : (i[0] !== this.domElem[0]) && h.prependTo(this.domElem);
                this._inBody || (this._inBody = !!this.domElem.appendTo("body"));
                this.trigger("show")
            },"": function() {
                var h = this._getUnder();
                this.hasMod(h, "type", "paranja") && h.remove();
                this._putUnder();
                this.trigger("hide")
            }}},_getUnder: function() {
                return this._under || (this._under = f().attr("class", this._underClass || (this._underClass = this.findElem("under").remove().attr("class"))))
            },_putUnder: function() {
                e(this._under);
                delete this._under
            },show: function(h) {
                h && this.domElem.css(h);
                return this.setMod("visibility", "visible")
            },hide: function() {
                return this.delMod("animate").delMod("visibility")
            }}, {live: true})
        })(jQuery);
        BEM.HTML.decl("i-popup", {onBlock: function(a) {
            a.mod("autoclosable", "yes").js(true).wrapContent({elem: "content"}).afterContent({elem: "under",mods: a.param("underMods"),mix: a.param("underMix")}).param("zIndex") && a.attr("style", "z-index:" + (32700 + a.param("zIndex")))
        }})
    }
    if (_ycssjs("dC5sW2FPRCZpxGWDGOXwahGfd7I")) {
        (function(a) {
            var b = (a.browser.opera && a.browser.version < 12.1) ? "keypress" : "keydown";
            BEM.DOM.decl({name: "i-popup",modName: "autoclosable",modVal: "yes"}, {onSetMod: {visibility: {visible: function() {
                this.afterCurrentEvent(function() {
                    if (this.hasMod("visibility", "visible")) {
                        var c = this._under;
                        this.bindToDoc("leftclick", function(d) {
                            this.containsDomElem(a(d.target)) || this._onOutClick(d)
                        }).bindToDoc(b, function(d) {
                                d.keyCode == 27 && this.hide()
                            });
                        if (c && c.is("iframe") && this.hasMod(c, "type", "paranja")) {
                            this.bindToDomElem(a([c[0].contentWindow, c[0].contentWindow.document]), "leftclick", this.hide)
                        }
                    }
                });
                this.__base.apply(this, arguments)
            },"": function() {
                return this.unbindFromDoc("leftclick " + b).__base.apply(this, arguments)
            }}},_onOutClick: function(c) {
                var d = a.Event("outside-click");
                this.trigger(d, {domEvent: c});
                d.isDefaultPrevented() || this.hide()
            }})
        })(jQuery)
    }
    if (_ycssjs("bvgmeI1wFH/jkHxCPHFwttDUKlI")) {
        BEM.HTML.decl("b-dropdowna", {onElem: {switcher: function(a) {
            a.tag("span")
        }}})
    }
    if (_ycssjs("Csh3710eH2G9iqgeoejWzPPxRCg")) {
        BEM.decl("i-statface", {onSetMod: {js: function() {
            this._data = {};
            this._needSend = false;
            this.hasMod("send", "manual") || $(window).unload(this.changeThis(this.send))
        }},set: function(a, c) {
            this._needSend = true;
            var b = this._data;
            if (typeof a == "object") {
                $.each(a, function(d, e) {
                    b[d] = e
                })
            } else {
                b[a] = c
            }
            return this
        },reset: function() {
            var a = this;
            arguments[0] ? $.each(arguments, function(c, b) {
                delete a._data[b]
            }) : this._data = {};
            $.isEmptyObject(this._data) && (this._needSend = false);
            return this
        },serialize: function() {
            var a = this;
            return $.map(a.params.keys, function(b) {
                return a._data[b]
            }).join(".") + (a.params.customKeys ? $.map(a.params.customKeys, function(b) {
                var c = a._data[b];
                return "/" + b + "=" + (c == undefined ? "" : c)
            }).join("") : "")
        },send: function(b) {
            if (this._needSend) {
                var c = this.params, a = ["//", c.host, "/", c.path, "/dtype=stred", "/pid=", c.pid, "/cid=", c.cid, "/path=", this.serialize(), "/*data=", encodeURIComponent("url=" + encodeURIComponent(location.href))].join("");
                c.path == "click" ? document.createElement("IMG").src = a : $.ajax({type: "GET",url: a,data: null,complete: b || $.noop,dataType: "script",timeout: 500});
                this._needSend = false
            }
            return this
        },getDefaultParams: function() {
            return {host: "clck.yandex.ru",path: "jclck"}
        }})
    }
    if (_ycssjs("Yf1ijVRw/OX5ykdRo0P1LjSzvAo")) {
        BEM.DOM.decl("b-head-search", {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-location"].get().on("change", this._onChange, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-location"].get().un("change", this._onChange, this)
        },_onChange: function(c, b) {
            var a = this.findBlockOutside("b-page").findBlockInside("b-head-name");
            switch (b.block) {
                case "b-page_type_index":
                    this.reset();
                    a.setMod("link", "no");
                    this.delMod("floater");
                    this.findBlockInside("b-search").focus();
                    break;
                case "b-page_type_copy":
                    this.fill(b.params.img_url);
                    a.setMod("link", "yes");
                    global.ua.isOld || this.setMod("floater", "yes");
                    this.domElem.focus();
                    break;
                case "b-page_type_search":
                case "b-page_type_similar":
                    this.fill(b.params.text);
                    a.setMod("link", "yes");
                    global.ua.isOld || this.setMod("floater", "yes");
                    this.domElem.focus();
                    break;
                case "b-page_type_cbir":
                    a.setMod("link", "yes");
                    break
            }
        },reset: function() {
            $(".b-search__filters input").each(function() {
                $(this).val("")
            });
            this.findBlockInside("b-form-input").val("")
        },fill: function(a) {
            this.findBlockInside("b-form-input").val(a)
        }})
    }
    if (_ycssjs("1V2NiToJkilg59voNgnioG2JppE")) {
        (function(b) {
            var c = {aliceblue: {r: 240,g: 248,b: 255},antiquewhite: {r: 250,g: 235,b: 215},aqua: {r: 0,g: 255,b: 255},aquamarine: {r: 127,g: 255,b: 212},azure: {r: 240,g: 255,b: 255},beige: {r: 245,g: 245,b: 220},bisque: {r: 255,g: 228,b: 196},black: {r: 0,g: 0,b: 0},blanchedalmond: {r: 255,g: 235,b: 205},blue: {r: 0,g: 0,b: 255},blueviolet: {r: 138,g: 43,b: 226},brown: {r: 165,g: 42,b: 42},burlywood: {r: 222,g: 184,b: 135},cadetblue: {r: 95,g: 158,b: 160},chartreuse: {r: 127,g: 255,b: 0},chocolate: {r: 210,g: 105,b: 30},coral: {r: 255,g: 127,b: 80},cornflowerblue: {r: 100,g: 149,b: 237},cornsilk: {r: 255,g: 248,b: 220},crimson: {r: 220,g: 20,b: 60},cyan: {r: 0,g: 255,b: 255},darkblue: {r: 0,g: 0,b: 139},darkcyan: {r: 0,g: 139,b: 139},darkgoldenrod: {r: 184,g: 134,b: 11},darkgray: {r: 169,g: 169,b: 169},darkgreen: {r: 0,g: 100,b: 0},darkgrey: {r: 169,g: 169,b: 169},darkkhaki: {r: 189,g: 183,b: 107},darkmagenta: {r: 139,g: 0,b: 139},darkolivegreen: {r: 85,g: 107,b: 47},darkorange: {r: 255,g: 140,b: 0},darkorchid: {r: 153,g: 50,b: 204},darkred: {r: 139,g: 0,b: 0},darksalmon: {r: 233,g: 150,b: 122},darkseagreen: {r: 143,g: 188,b: 143},darkslateblue: {r: 72,g: 61,b: 139},darkslategray: {r: 47,g: 79,b: 79},darkslategrey: {r: 47,g: 79,b: 79},darkturquoise: {r: 0,g: 206,b: 209},darkviolet: {r: 148,g: 0,b: 211},deeppink: {r: 255,g: 20,b: 147},deepskyblue: {r: 0,g: 191,b: 255},dimgray: {r: 105,g: 105,b: 105},dimgrey: {r: 105,g: 105,b: 105},dodgerblue: {r: 30,g: 144,b: 255},firebrick: {r: 178,g: 34,b: 34},floralwhite: {r: 255,g: 250,b: 240},forestgreen: {r: 34,g: 139,b: 34},fuchsia: {r: 255,g: 0,b: 255},gainsboro: {r: 220,g: 220,b: 220},ghostwhite: {r: 248,g: 248,b: 255},gold: {r: 255,g: 215,b: 0},goldenrod: {r: 218,g: 165,b: 32},gray: {r: 128,g: 128,b: 128},green: {r: 0,g: 128,b: 0},greenyellow: {r: 173,g: 255,b: 47},grey: {r: 128,g: 128,b: 128},honeydew: {r: 240,g: 255,b: 240},hotpink: {r: 255,g: 105,b: 180},indianred: {r: 205,g: 92,b: 92},indigo: {r: 75,g: 0,b: 130},ivory: {r: 255,g: 255,b: 240},khaki: {r: 240,g: 230,b: 140},lavender: {r: 230,g: 230,b: 250},lavenderblush: {r: 255,g: 240,b: 245},lawngreen: {r: 124,g: 252,b: 0},lemonchiffon: {r: 255,g: 250,b: 205},lightblue: {r: 173,g: 216,b: 230},lightcoral: {r: 240,g: 128,b: 128},lightcyan: {r: 224,g: 255,b: 255},lightgoldenrodyellow: {r: 250,g: 250,b: 210},lightgray: {r: 211,g: 211,b: 211},lightgreen: {r: 144,g: 238,b: 144},lightgrey: {r: 211,g: 211,b: 211},lightpink: {r: 255,g: 182,b: 193},lightsalmon: {r: 255,g: 160,b: 122},lightseagreen: {r: 32,g: 178,b: 170},lightskyblue: {r: 135,g: 206,b: 250},lightslategray: {r: 119,g: 136,b: 153},lightslategrey: {r: 119,g: 136,b: 153},lightsteelblue: {r: 176,g: 196,b: 222},lightyellow: {r: 255,g: 255,b: 224},lime: {r: 0,g: 255,b: 0},limegreen: {r: 50,g: 205,b: 50},linen: {r: 250,g: 240,b: 230},magenta: {r: 255,g: 0,b: 255},maroon: {r: 128,g: 0,b: 0},mediumaquamarine: {r: 102,g: 205,b: 170},mediumblue: {r: 0,g: 0,b: 205},mediumorchid: {r: 186,g: 85,b: 211},mediumpurple: {r: 147,g: 112,b: 219},mediumseagreen: {r: 60,g: 179,b: 113},mediumslateblue: {r: 123,g: 104,b: 238},mediumspringgreen: {r: 0,g: 250,b: 154},mediumturquoise: {r: 72,g: 209,b: 204},mediumvioletred: {r: 199,g: 21,b: 133},midnightblue: {r: 25,g: 25,b: 112},mintcream: {r: 245,g: 255,b: 250},mistyrose: {r: 255,g: 228,b: 225},moccasin: {r: 255,g: 228,b: 181},navajowhite: {r: 255,g: 222,b: 173},navy: {r: 0,g: 0,b: 128},oldlace: {r: 253,g: 245,b: 230},olive: {r: 128,g: 128,b: 0},olivedrab: {r: 107,g: 142,b: 35},orange: {r: 255,g: 165,b: 0},orangered: {r: 255,g: 69,b: 0},orchid: {r: 218,g: 112,b: 214},palegoldenrod: {r: 238,g: 232,b: 170},palegreen: {r: 152,g: 251,b: 152},paleturquoise: {r: 175,g: 238,b: 238},palevioletred: {r: 219,g: 112,b: 147},papayawhip: {r: 255,g: 239,b: 213},peachpuff: {r: 255,g: 218,b: 185},peru: {r: 205,g: 133,b: 63},pink: {r: 255,g: 192,b: 203},plum: {r: 221,g: 160,b: 221},powderblue: {r: 176,g: 224,b: 230},purple: {r: 128,g: 0,b: 128},red: {r: 255,g: 0,b: 0},rosybrown: {r: 188,g: 143,b: 143},royalblue: {r: 65,g: 105,b: 225},saddlebrown: {r: 139,g: 69,b: 19},salmon: {r: 250,g: 128,b: 114},sandybrown: {r: 244,g: 164,b: 96},seagreen: {r: 46,g: 139,b: 87},seashell: {r: 255,g: 245,b: 238},sienna: {r: 160,g: 82,b: 45},silver: {r: 192,g: 192,b: 192},skyblue: {r: 135,g: 206,b: 235},slateblue: {r: 106,g: 90,b: 205},slategray: {r: 112,g: 128,b: 144},slategrey: {r: 112,g: 128,b: 144},snow: {r: 255,g: 250,b: 250},springgreen: {r: 0,g: 255,b: 127},steelblue: {r: 70,g: 130,b: 180},tan: {r: 210,g: 180,b: 140},teal: {r: 0,g: 128,b: 128},thistle: {r: 216,g: 191,b: 216},tomato: {r: 255,g: 99,b: 71},turquoise: {r: 64,g: 224,b: 208},violet: {r: 238,g: 130,b: 238},wheat: {r: 245,g: 222,b: 179},white: {r: 255,g: 255,b: 255},whitesmoke: {r: 245,g: 245,b: 245},yellow: {r: 255,g: 255,b: 0},yellowgreen: {r: 154,g: 205,b: 50},transparent: {r: -1,g: -1,b: -1}}, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor borderColor boxShadowColor color outlineColor textShadowColor".split(" ");
            b.color = {normalize: function(o) {
                var h, g, q, d, j, f, m = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, k = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/, p = /rgb(?:a)?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(0*\.?\d+)\s*)?\)/, n = /rgb(?:a)?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(0*\.?\d+)\s*)?\)/, e = /hsl(?:a)?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(0*\.?\d+)\s*)?\)/;
                if (q = m.exec(o)) {
                    h = {r: parseInt(q[1], 16),g: parseInt(q[2], 16),b: parseInt(q[3], 16),source: q[0]}
                } else {
                    if (q = k.exec(o)) {
                        h = {r: parseInt(q[1] + q[1], 16),g: parseInt(q[2] + q[2], 16),b: parseInt(q[3] + q[3], 16),source: q[0]}
                    } else {
                        if (q = p.exec(o)) {
                            h = {r: parseInt(q[1], 10),g: parseInt(q[2], 10),b: parseInt(q[3], 10),alpha: parseFloat(q[4], 10),source: q[0]}
                        } else {
                            if (q = n.exec(o)) {
                                h = {r: parseInt(q[1] * 2.55, 10),g: parseInt(q[2] * 2.55, 10),b: parseInt(q[3] * 2.55, 10),alpha: parseFloat(q[4], 10),source: q[0]}
                            } else {
                                if (q = e.exec(o)) {
                                    h = b.color.hsl_to_rgb(parseFloat(q[1], 10) / 100, parseFloat(q[2], 10) / 100, parseFloat(q[3], 10) / 100);
                                    h.alpha = parseFloat(q[4], 10);
                                    h.source = q[0]
                                } else {
                                    q = o.split(" ");
                                    for (j = 0, f = q.length; j < f; j++) {
                                        d = q[j];
                                        if (c[d]) {
                                            break
                                        }
                                    }
                                    if (!c[d]) {
                                        d = "transparent"
                                    }
                                    h = c[d];
                                    h.source = d
                                }
                            }
                        }
                    }
                }
                if (!h.alpha && h.alpha !== 0) {
                    delete h.alpha
                }
                return h
            },hsl_to_rgb: function(f, o, e, k) {
                var d, i, j, n, m;
                if (o === 0) {
                    d = i = j = e
                } else {
                    if (e <= 0.5) {
                        m = e * (o + 1)
                    } else {
                        m = (e + o) - (e * o)
                    }
                    n = (e * 2) - m;
                    d = parseInt(255 * b.color.hue_to_rgb(n, m, f + (1 / 3)), 10);
                    i = parseInt(255 * b.color.hue_to_rgb(n, m, f), 10);
                    j = parseInt(255 * b.color.hue_to_rgb(n, m, f - (1 / 3)), 10)
                }
                return {r: d,g: i,b: j,alpha: k}
            },hue_to_rgb: function(e, d, f) {
                if (f < 0) {
                    f++
                }
                if (f > 1) {
                    f--
                }
                if ((f * 6) < 1) {
                    return e + ((d - e) * f * 6)
                } else {
                    if ((f * 2) < 1) {
                        return d
                    } else {
                        if ((f * 3) < 2) {
                            return e + ((d - e) * ((2 / 3) - f) * 6)
                        } else {
                            return e
                        }
                    }
                }
            }};
            if (b.cssHooks) {
                b.each(a, function(d, e) {
                    b.cssHooks[e] = {set: function(f, g) {
                        g = b.color.normalize(g);
                        if (!g.alpha) {
                            g.alpha = 1
                        }
                        try {
                            f.style[e] = "rgba(" + g.r + "," + g.g + "," + g.b + "," + g.alpha + ")"
                        } catch (h) {
                            f.style[e] = "rgb(" + g.r + "," + g.g + "," + g.b + ")"
                        }
                    }};
                    b.fx.step[e] = function(f) {
                        var g;
                        if (!f.start || typeof f.start === "string") {
                            if (!f.start) {
                                f.start = b.css(f.elem, e)
                            }
                            f.start = b.color.normalize(f.start);
                            f.end = b.color.normalize(f.end);
                            if (!f.start.alpha) {
                                f.start.alpha = 1
                            }
                            if (!f.end.alpha) {
                                f.end.alpha = 1
                            }
                        }
                        b.style(f.elem, e, "rgba(" + parseInt(f.start.r + (f.pos * (f.end.r - f.start.r)), 10) + "," + parseInt(f.start.g + (f.pos * (f.end.g - f.start.g)), 10) + "," + parseInt(f.start.b + (f.pos * (f.end.b - f.start.b)), 10) + "," + parseFloat(f.start.alpha + (f.pos * (f.end.alpha - f.start.alpha))) + ")")
                    }
                })
            }
        })(jQuery)
    }
    if (_ycssjs("VXGIvmL0PFHoas/0dW1a8GL+CTY")) {
        jQuery.extend(jQuery.easing, {easeInExpo: function(c, b, d, a, e) {
            return (b == 0) ? d : a * Math.pow(2, 10 * (b / e - 1)) + d
        },easeOutExpo: function(c, b, d, a, e) {
            return (b == e) ? d + a : a * (-Math.pow(2, -10 * b / e) + 1) + d
        },easeInOutExpo: function(c, b, d, a, e) {
            if (b == 0) {
                return d
            }
            if (b == e) {
                return d + a
            }
            if ((b /= e / 2) < 1) {
                return a / 2 * Math.pow(2, 10 * (b - 1)) + d
            }
            return a / 2 * (-Math.pow(2, -10 * --b) + 2) + d
        },easeInOutCirc: function(c, b, d, a, e) {
            if ((b /= e / 2) < 1) {
                return -a / 2 * (Math.sqrt(1 - b * b) - 1) + d
            }
            return a / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + d
        },easeOutFluid: function(c, b, d, a, f) {
            var e = b / f;
            if (e < 0.25) {
                return a * e / 0.25 + d
            } else {
                if (e < 0.4) {
                    return a * (1 - (e - 0.25) / 0.15 * 0.4) + d
                } else {
                    if (e < 0.65) {
                        return a * ((e -= 0.4) / 0.25 + 0.6 * (1 - e / 0.25)) + d
                    } else {
                        if (e < 0.8) {
                            return a * (1 - (e - 0.65) / 0.15 * 0.16) + d
                        } else {
                            return a * ((e -= 0.8) / 0.25 + 0.84 * (1 - e / 0.25)) + d
                        }
                    }
                }
            }
        }})
    }
    if (_ycssjs("iuPg6YIAHmCopueHAXB3XlSn3wE")) {
        (function() {

            var e = "#fc0", b = "#fff09c", d = "#fff", c = "#fff", a = 0;
            BEM.DOM.decl("b-head-floater", {init: function() {
                this.params.bg && (e = b = this.params.bg);
                a = this.domElem.position().top + parseFloat(this.domElem.css("marginTop").replace("px", ""));
                this.page = this.findBlockOutside("b-page");
                this.search = this.headSearch.findBlockInside("b-search");
                this.formInput = this.search.findBlockInside("b-form-input");
                BEM.DOM.init(this.formInput._getPopup().domElem);
                this.popup = this.formInput.findElem("popup");
                this.formInput = this.search.findBlockInside("b-form-input").on("focus", this.onFocus, this);
                this.page.on("leftclick", this._onPageClick, this);
                this.showCounter = true;
                this.page.on("page:content:loaded", this._onPageContentLoaded, this);
                this.toggle();
                this.elem("top").click(function() {
                    var f = Math.sqrt(BEM.DOM.win.scrollTop()) * 4;
                    $("html, body").animate({scrollTop: 0}, f, "easeOutExpo");
                    BEM.blocks["i-counter"].count("/image/new/serp/floater/up_button")
                });
                this.trigger("b-head-floater:inited")
            },_onPageClick: function(f) {
                this.findBlockOutside($(f.target), "b-head-search") || this.onBlur()
            },_onPageContentLoaded: function() {
                this.delMod("fixed");
                this.toggle()
            },toggle: function(f) {
                f === "index" || this.page.hasMod("type", "index") ? this.delMod("enabled") : this.setMod("enabled", "yes")
            },onSetMod: {fixed: {yes: function() {
                this.setWidth(this.domElem.width());
                this.afterCurrentEvent(function() {
                    this.setWidth(this.domElem.width());
                    this.formInput.setMod(this.popup, "fixed", "yes")
                });
                this.hasMod("focused", "yes") || this.setMod("animation", "yes");
                var f = this;
                this.hasMod("focused", "yes") || this._hideDisable || this.afterCurrentEvent(function() {
                    this.hide()
                });
                this.inputFlag && this.inputFlag.val(1).attr("disabled", false) || (this.inputFlag = $('<input name="fs" type="hidden" value="1" />').insertAfter(this.search.domElem));
                if (this.showCounter && this.params.counter) {
                    if (this.params.counter.sort) {
                        this.params.counter.unshift(this.domElem[0]);
                        w.apply("", this.params.counter)
                    } else {
                        this.params.counter()
                    }
                    delete this.showCounter
                }
                this.trigger("unfreeze")
            },"": function() {
                this.afterCurrentEvent(function() {
                    this.headSearch.domElem.width("auto");
                    this.domElem.width(false);
                    this.domElem.height("auto");
                    this.setMod("animation", "yes");
                    this.show();
                    this.inputFlag && this.inputFlag.val("").attr("disabled", true);
                    this.formInput.delMod(this.popup, "fixed");
                    this.trigger("freeze")
                })
            }},focused: {yes: function() {
                this.hasMod("fixed", "yes") && this.setMod("animation", "yes").afterCurrentEvent(this.show)
            },"": function() {
                if (this.hasMod("fixed", "yes")) {
                    this._hideDisable || this.hide()
                }
            }},enabled: {yes: function() {
                this.bindToWin("resize", this.onResize).bindToWin("scroll", this.onScroll).onResize().onScroll()
            },"": function() {
                this.unbindFromWin("resize", this.onResize).unbindFromWin("scroll", this.onScroll)
            }}},destruct: function() {
                this.__base.apply(this, arguments);
                this.page && this.page.un("page:content:loaded", this._onPageContentLoaded, this);
                this.formInput && this.formInput.un("focus", this.onFocus, this);
                this.page && this.page.un("leftclick", this._onPageClick, this)
            },canUnfreeze: function() {
                return BEM.DOM.win.scrollTop() > a
            },onScroll: function() {
                this.canUnfreeze() && this.unfreeze() || this.freeze();
                return this
            },onResize: function() {
                if (this.hasMod("fixed", "yes")) {
                    var f = this.domElem.height() - this.elem("fade").height() - this.GRADIENT_HEIGHT;
                    this.hasMod("focused", "yes") && this.elem("fade").css("top", f);
                    this.setWidth(this.domElem.width())
                }
                return this
            },onFocus: function() {
                (this.page.hasMod("type", "index") || !this.hasMod("focused", "yes")) || this.setMod("focused", "yes")
            },onBlur: function() {
                this.delMod("focused")
            },unfreeze: function() {
                if (this.hasMod("fixed", "yes")) {
                    return this
                }
                this.formInput.hasMod("focused", "yes") && this.setMod("focused", "yes").show();
                this.setMod("fixed", "yes");
                return this
            },freeze: function() {
                this.hasMod("fixed", "yes") && this.delMod("fixed");
                return this
            },show: function(h) {
                var f = this.hasMod("fixed", "yes") || this.hasMod("focused", "yes") && !this.hasMod("animation", "yes"), g = this.headSearch.domElem.stop();
                f || this.headSearch.defaultGradMod && (this.headSearch.setMod("grad", this.headSearch.defaultGradMod));
                g.animate({backgroundColor: f ? c : b}, 100, this.changeThis(function() {
                    this._hideDisable || this.delMod("animation");
                    g.css("backgroundImage", "").css("backgroundColor", f ? c : e);
                    h && h()
                }));
                return this
            },hide: function(g) {
                if (this.hasMod("focused", "yes")) {
                    return this
                }
                if (this.hasMod("fixed", "yes")) {
                    var f = this.headSearch.domElem.stop().css("backgroundImage", "none");
                    e == b || f.css("backgroundColor", b);
                    this.headSearch.defaultGradMod && (this.headSearch.setMod("grad", this.headSearch.defaultGradMod));
                    f.animate({backgroundColor: d}, 100, this.changeThis(function() {
                        this.delMod("animation");
                        g && g()
                    }))
                }
                return this
            },setWidth: function(f) {
                f && this.headSearch.domElem.width(f - parseFloat(this.headSearch.domElem.css("marginLeft").replace("px", "")))
            },disableHide: function() {
                this._hideDisable = true
            },enableHide: function() {
                delete this._hideDisable
            },GRADIENT_HEIGHT: 8})
        })()
    }
    if (_ycssjs("BvGLHXN3B6//urfRlAHd4bTnPSA")) {
        BEM.DOM.decl({name: "b-head-search",modName: "floater",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base();
            this.floater = this.findBlockOutside("b-head-floater");
            if (this.floater) {
                this.floater.headSearch = this;
                this.floater.init()
            }
        }}})
    }
    if (_ycssjs("bkj4iDKwffUq1fE1bK7COO9ikoo")) {
        BEM.decl({block: "i-request_type_ajax",baseBlock: "i-request"}, {onSetMod: {js: function() {
            this.__base();
            this._requestNumber = this._number = this._preventNumber = this._retryCount = 0
        }},_get: function(b, d, a, c) {
            this._number++;
            this._requestNumber++;
            this._retryCount = c.retryCount;
            this.__base.apply(this, arguments)
        },_do: function(d, h, f, c) {
            var g = this;
            if (g._number > g._preventNumber) {
                var i = arguments, b = {data: c.data ? $.extend({}, c.data, d) : d}, e = g._wrapCallback(function(l, j, k) {
                    g._onSuccess(g._buildCacheKey(d, c), d, l[0], c);
                    g._allowCallback(j, k) && h.apply(c.callbackCtx, l)
                }), a = g._wrapCallback(function(l, j, k) {
                    g._allowCallback(j, k) && (g._retryCount-- > 0 ? setTimeout(function() {
                        g._do.apply(g, i)
                    }, c.retryInterval) : f && f.apply(c.callbackCtx, l))
                });
                $.each(["url", "dataType", "timeout", "type", "jsonp", "jsonpCallback"].concat(c.paramsToSettings || []), function(k, j) {
                    b[j] = c[j]
                });
                $.ajax(b).done(e).fail(a)
            }
        },_wrapCallback: function(c) {
            var a = this._requestNumber, b = this._number;
            return function(d) {
                d !== null && c(arguments, a, b)
            }
        },_allowCallback: function(a, b) {
            return b > this._preventNumber && this._requestNumber == a
        },_buildCacheKey: function(a, b) {
            return typeof a == "string" ? a : this.__base(a) + b.url
        },abort: function() {
            this._preventNumber = ++this._number
        },preventCallbacks: function() {
            this.abort()
        },getDefaultParams: function() {
            return $.extend(this.__base(), {cache: true,type: "GET",dataType: "jsonp",timeout: 20000,retryCount: 0,retryInterval: 2000})
        }})
    }
    if (_ycssjs("7q79dcL0LjGNJ4PqEOgyZR29dOI")) {
        BEM.DOM.decl({name: "b-head-search",modName: "suggest",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base();
            var b = this.params, d = this._resetSuggestStats(), h = new Date(), g = "", f = 0, c, i, a = this.findBlockInside("b-search"), e = this;
            this._suggest = a.findBlockInside("input", {blockName: "b-form-input",modName: "autocomplete",modVal: "yes"}).on({select: function(k, j) {
                d.usageType = j.byKeyboard ? "keyboard" : "mouse";
                (j.item.hasMod("type", "nah") || j.item.hasMod("type", "href")) && (d.nah = "nah_used");
                j.item.params.cgi && j.item.params.cgi.forEach(function(l) {
                    (l instanceof Array && l.length > 1) && BEM.DOM.append(a.domElem, BEM.HTML.build({block: "b-search",elem: "hidden",tag: "input",attrs: {type: "hidden",name: l[0],value: l[1]}}))
                });
                j.item.hasMod("type", "nav") ? this._submitStats() : a.domElem.submit()
            },"data-requested": function() {
                h = new Date()
            },"data-received": function(m, l) {
                var k = l.metainfo;
                if (k) {
                    d.region = k.r;
                    d.exprt = k.exprt;
                    k.personal = k.pers_options || k.n
                }
                d.times.push(new Date() - h);
                var j = (k.personal == 1);
                j || $.each(l.items, function() {
                    return !(j = this[0] == "nah")
                });
                j && d.nah != "nah_used" && (d.nah = "nah_not_used");
                k.personal && this._toggleNahFoot(j)
            },"update-items": function() {
                d.usageType != "edit" && (d.usageType = "not_used")
            },change: function(k, j) {
                d._submited = false;
                d.ratio.userActions++;
                if (j && j.source == "autocomplete") {
                    d.usageType = "suggest";
                    d.position = j.itemIndex + 1
                } else {
                    d.usageType == "suggest" && (d.usageType = "edit");
                    j && j.source || (d.user_input = encodeURIComponent(k.block.val()))
                }
            }}, this).bindTo("keyup click", function(j) {
                    switch (j.keyCode) {
                        case 38:
                        case 40:
                        case 27:
                            break;
                        default:
                            c = this.val();
                            i = e._getSelectionEnd();
                            if (g != c || f != i) {
                                ([37, 39].indexOf(j.keyCode) != -1 || j.type == "click") && this.trigger("change");
                                d.endTime = new Date().getTime();
                                d.startTime || (d.startTime = d.endTime);
                                d.pos = i;
                                g = c;
                                f = i
                            }
                            break
                    }
                });
            this._suggest.params.dataprovider = $.extend({name: "b-head-search__suggest-dataprovider",headSearch: this}, this._suggest.params.dataprovider);
            a.findBlockInside("button", "b-form-button").on("click", function(j) {
                d.buttonByMouse = "button_by_mouse"
            });
            a.bindTo("submit", function(j) {
                e._suggest.disablePopup();
                e._suggestStats._submited || j.preventDefault() || e._submitStats(function() {
                    a.domElem.submit()
                })
            });
            this._suggest.hasMod("tap-ahead", "yes") && this._suggest.on("ahead-fill", function(k, j) {
                d.aheadKey = j.usage;
                d.chars = j.chars
            })
        }},_resetSuggestStats: function() {
            this._suggestStats = this._suggestStats || {};
            $.extend(this._suggestStats, {suggestType: this.params.suggestType || ((BEM.blocks["i-global"].param("id") === "serp") ? "serp_ru" : BEM.blocks["i-global"].param("id")),usageType: "not_shown",region: "",nah: "nah_not_shown",buttonByMouse: "",position: 0,pos: 0,startTime: 0,endTime: 0,session: (new Date().getTime() + Math.round(Math.random() * 10000)),times: [],user_input: "",aheadKey: "",chars: 0,_submited: true,ratio: {userValue: 0,finalValue: 0,userActions: 0}});
            return this._suggestStats
        },_submitStats: function(d) {
            var b = this._suggestStats;
            b.text = encodeURIComponent(this._suggest.val());
            b.ratio.userValue = b.user_input.length;
            b.ratio.finalValue = b.text.length;
            var e = ["session", "region", "times", "pos", "text", "user_input", "ratio", "chars"];
            b.exprt && e.push("exprt");
            var c = BEM.create("i-statface", {pid: 0,cid: 2873,keys: ["suggestType", "usageType", "position", "nah", "buttonByMouse", "aheadKey"],customKeys: e});
            var f = {};
            $.each(b, function(g, i) {
                if (i == undefined) {
                    return
                }
                if (typeof i == "object") {
                    if (!$.isArray(i)) {
                        var h = [];
                        $.each(i, function(j, k) {
                            h.push(k)
                        });
                        i = h
                    }
                    f[g] = i.join(".")
                } else {
                    f[g] = i
                }
            });
            f.position = "p" + f.position;
            var a = new Date().getTime();
            b.startTime && (e.push("since_first_change"), f.since_first_change = (a - b.startTime));
            b.endTime && (e.push("since_last_change"), f.since_last_change = (a - b.endTime));
            c.set(f).send(d);
            this._resetSuggestStats();
            return this
        },_getSelectionEnd: function() {
            return this._suggest.getSelectionEnd()
        },_toggleNahFoot: function(b) {
            var a = /\(\(([^\)]+)\)\)/g, c = Lego.message("b-suggest.hah:linkHref", "http://tune.yandex.ru/suggest/");
            this._suggestFoot || (this._suggestFoot = this._suggest.setFoot(["foot", (b ? BEM.I18N("b-head-search", "my-searches-on") : BEM.I18N("b-head-search", "my-searches-off")).replace(a, '<a class="b-link" href="' + c + '">$1</a>')]))
        }});
        BEM.decl({name: "b-head-search__suggest-dataprovider",baseBlock: "i-request_type_ajax"}, {_getLR: function() {
            if (this.hasOwnProperty("_lr")) {
                return this._lr
            }
            var b = document.getElementsByName("lr");
            if (b.length) {
                return this._lr = b[0].value
            }
            try {
                lrParam = window.location.toString().match(/lr=(.*?)(?:&|$)/);
                if (lrParam) {
                    return this._lr = lrParam[1]
                }
            } catch (a) {
            }
            return this._lr = ""
        },get: function(b, e) {
            var a = this.params.url, d = {part: b,pos: this.params.headSearch._getSelectionEnd(),fact: "1",yu: this.params.headSearch.params.yandexuid || BEM.blocks["i-global"].param("yandexuid") || "",srv: this.params.headSearch.params.suggestType || BEM.blocks["i-global"].param("id") || ""}, c = this._getLR();
            (this.params.version && !a.match(/v=(.*?)(?:&|$)/)) && (d.v = this.params.version);
            (c && !a.match(/lr=(.*?)(?:&|$)/)) && (d.lr = c);
            return this.__base(d, function(f) {
                e.call(this, {items: f[1],metainfo: f[2]})
            })
        },_onSuccess: function(b, a, c, d) {
            (c[2] && c[2].nocache) && (this._preventCache = true);
            this.__base.apply(this, arguments)
        }})
    }
    if (_ycssjs("HdNQpoPgD8XmKZc0g4tCHmkAw4I")) {
        BEM.DOM.decl({name: "b-head-search",modName: "suggest",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            var a = this.findBlockInside("b-search"), b = this;
            a.unbindFrom("submit").bindTo("submit", function() {
                b._suggest.disablePopup();
                b._suggestStats._submited || b._submitStats()
            })
        }}})
    }
    if (_ycssjs("MV+OzL02gniue3oDO3hiN2ih428")) {
        BEM.decl("i-common__string", {}, {cleverSubstring: (function() {
            var a = "…";
            return function(d, b, c) {
                return (d.length > b + c) ? d.substring(0, b - 1) + a : d
            }
        })(),escapeHTML: (function() {
            var b = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#39;"}, a = function(c) {
                return b[c] || c
            };
            return function(c) {
                return String(c).replace(/&(?!\w+;)|[<>"']/g, function(d) {
                    return b[d] || d
                })
            }
        })(),escapeRegExp: function(a) {
            return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },highlight: function(e, a) {
            if (!$.isArray(a)) {
                return e
            }
            var f = [], d = 0, b, c = a.sort(function(h, g) {
                return h[0] - g[0]
            });
            c.forEach(function(g) {
                b = (d > g[0]) ? d : g[0];
                f.push({tag: "span",elem: "span",content: this.escapeHTML(e.slice(d, b))});
                f.push({tag: "em",elem: "em",content: this.escapeHTML(e.slice(b, d = g[1]))})
            }, this);
            f.push({tag: "span",elem: "span",content: this.escapeHTML(e.slice(d))});
            return f
        }})
    }
    if (_ycssjs("4L5wUmJ7XPqfn5XD4FV7Ek9wLI0")) {
        BEM.DOM.decl("b-autocomplete-item", {val: function() {
            return this.params.val || this.elem("text").text() || this.domElem.text()
        },enter: function() {
        },select: function(a) {
        }}, {live: function() {
            this.liveBindTo("mouseover mouseout mousedown mouseup", function(a) {
                this.trigger(a.type)
            })
        }});
        BEM.HTML.decl("b-autocomplete-item", {onBlock: function(a) {
            var b = a.param("data"), c = BEM.blocks["i-common__string"].escapeHTML($.isArray(b) ? b[1] : b);
            $.isArray(a.param("search_cgi")) && a.js({cgi: a.param("search_cgi")});
            a.tag("li").mod("pers", a.param("pers") ? "yes" : false).content(BEM.blocks["i-common__string"].highlight(c, a.param("hl"))).js(true)
        }})
    }
    if (_ycssjs("gUDaahMIfydejcn/ShcGk9LkzRw")) {
        BEM.DOM.decl({block: "b-autocomplete-item",modName: "type",modVal: "nav"}, {enter: function() {
            return false
        },select: function(a) {
            a && $('<form style="display:none" action="' + this.val() + '" target="_blank"/>').appendTo("body").submit().remove();
            return {needEvent: true}
        }});
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "nav"}, {onBlock: function(b) {
            var e = b.param("data"), d = b.param("suggestVersion") == 4, a = e[4] || e[3], c = (a.match(/^\w[\w-]*:\/\//g) ? "" : "http://") + a;
            b.js({val: c}).content({elem: "link",url: c,title: BEM.blocks["i-common__string"].escapeHTML(d ? e[3] : e[2]),description: BEM.blocks["i-common__string"].highlight(d ? e[2] : e[1], b.param("hl"))})
        },onElem: {link: function(a) {
            a.tag("a").attrs({href: a.param("url"),target: "_blank"}).content([{elem: "link-url",tag: "span",content: a.param("title")}, {elem: "link-info",tag: "span",content: ["&nbsp;&mdash; "].concat(a.param("description"))}])
        }}})
    }
    if (_ycssjs("r6LB0j2y9lGDKje0GEuPiaQ+LMM")) {
        BEM.DOM.decl("b-form-button", {onSetMod: {js: function() {
            var a = this.isDisabled();
            (this._href = this.domElem.attr("href")) && a && this.domElem.removeAttr("href");
            this.elem("input").attr("disabled", a)
        },focused: {yes: function() {
            var a = this;
            if (a.isDisabled()) {
                return false
            }
            a.bindTo("keydown", this._onKeyDown).elem("input").is(":focus") || a.elem("input").focus();
            a._unloadInited || (a._unloadInited = $(window).bind("unload", function() {
                a.delMod("focused")
            }))
        },"": function() {
            this.unbindFrom("keydown").elem("input").blur()
        }},disabled: function(c, a) {
            var b = a == "yes";
            this._href && (b ? this.domElem.removeAttr("href") : this.domElem.attr("href", this._href));
            b && this.domElem.keyup();
            this.afterCurrentEvent(function() {
                this.domElem && this.elem("input").attr("disabled", b)
            })
        },pressed: function(b, a) {
            this.isDisabled() || this.trigger(a == "yes" ? "press" : "release")
        },hovered: {"": function() {
            this.delMod("pressed")
        }},"*": function(a) {
            if (this.isDisabled() && "hovered pressed".indexOf(a) > -1) {
                return false
            }
        }},isDisabled: function() {
            return this.hasMod("disabled", "yes")
        },url: function(a) {
            if (typeof a == "undefined") {
                return this._href
            } else {
                this._href = a;
                this.isDisabled() || this.domElem.attr("href", a);
                return this
            }
        },_onKeyDown: function(b) {
            var a = b.keyCode;
            if ((a == 13 || a == 32) && !this._keyDowned) {
                this._keyDowned = true;
                this.setMod("pressed", "yes").bindTo("keyup", function() {
                    this.delMod("pressed").unbindFrom("keyup");
                    delete this._keyDowned;
                    if (a == 32 && this.domElem.attr("href")) {
                        document.location = this.domElem.attr("href")
                    }
                })
            }
        },_onClick: function(a) {
            this.isDisabled() ? a.preventDefault() : this.afterCurrentEvent(function() {
                this.trigger("click")
            })
        },destruct: function() {
            this.delMod("focused");
            this.__base.apply(this, arguments)
        }}, {live: function() {
            var a = {mouseover: {name: "hovered",val: "yes"},mouseout: {name: "hovered"},mousedown: {name: "pressed",val: "yes"},mouseup: {name: "pressed"},focusin: {name: "focused",val: "yes"},focusout: {name: "focused"}};
            this.liveBindTo("leftclick", function(b) {
                this._onClick(b)
            }).liveBindTo("mouseover mouseout mouseup focusin focusout", function(c) {
                    var b = a[c.type];
                    this.setMod(b.name, b.val || "")
                }).liveBindTo("mousedown", function(c) {
                    var b = a[c.type];
                    c.which == 1 && this.setMod(b.name, b.val || "")
                })
        }});
        BEM.HTML.decl("b-form-button", {onBlock: function(a) {
            a.tag(a.param("url") ? "a" : "span").attrs({href: a.param("url"),target: a.param("target")}).mods({size: a.mod("size"),theme: a.mod("theme")}).content([{elem: "left",tag: "i"}, {elem: "content",tag: "span",content: {elem: "text",tag: "span",content: a.content()}}], true).afterContent(a.param("type") ? {elem: "input",attrs: {value: a.param("value") || "",type: a.param("type"),name: a.param("name"),disabled: a.mod("disabled") && "disabled"}} : {elem: "click"}).js(true)
        },onElem: {input: function(a) {
            a.tag("input")
        },click: function(a) {
            a.tag("i")
        }}})
    }
    if (_ycssjs("So998HbxjAnTPiNUeHg66J68/xo")) {
        BEM.DOM.decl("b-search", {onSetMod: {js: function() {
            var b = BEM.blocks["i-location"].get().getStateData(), a = this;
            b.block === "b-page_type_index" && this.focus();
            this._input = this.findBlockInside("b-form-input");
            BEM.blocks["b-page"].on("change", this._onPageLoaded, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].un("change", this._onPageLoaded, this)
        },_onPageLoaded: function() {
            this._checkPromoParams()
        },_checkPromoParams: function() {
            this.domElem.find(".b-search__hidden_promo_yes").remove()
        },_onSubmit: function(c) {
            var b = this.getData();
            b[0] && b[0].name !== "text" && b.reverse();
            var a = this.duplicateFilter(b);
            BEM.blocks["i-location"].get().change({block: "b-page_type_" + (a ? "copy" : "search"),method: "load",url: global.buildSearchLink(b)}, c);
            document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body" && document.activeElement.blur()
        },duplicateFilter: function(b) {
            var c = this, a = false;
            $.each(b, function(d, e) {
                if (e.name == "text" && c.isImageUrl(e.value)) {
                    b.push({name: "rpt",value: "imagedups"});
                    b.push({name: "img_url",value: e.value});
                    e.value = "";
                    a = true;
                    return false
                }
            });
            return a
        },isImageUrl: function(b) {
            var a = $.url.isValid(b), b = b.replace(/^\/+|\/+$/g, "");
            splittedUrl = b.split("/");
            return a && splittedUrl.length > 1
        },focus: function() {
            this.findBlockInside("b-form-input").setMod("focused", "yes")
        },getData: function() {
            return $.map(this.domElem.serializeArray(), function(a) {
                if (a.value && !/^(on|any)$/.test(a.value)) {
                    return a
                }
            })
        }}, {live: function() {
            this.liveBindTo("submit", function(a) {
                this._onSubmit(a)
            });
            return false
        }})
    }
    if (_ycssjs("BH1mV6OVCvmv+IH1bv9X9YPFsCk")) {
        BEM.DOM.decl("b-search__input", {onSetMod: {js: function() {
            Lego.block["b-search__input"].call(this.domElem, this.params)
        }}});
        (function(b, a) {
            a.block["b-search__input"] = function(e) {
                var f = this;
                var c = b.extend({focus: false,shortcut: false}, e);
                if (c.focus || f.data("lego:focused")) {
                    if (!f.data("lego:focused")) {
                        var d = document.activeElement;
                        (d && "input textarea".indexOf(d.tagName.toLowerCase()) > -1) || setTimeout(function() {
                            f.focus();
                            if (f[0].createTextRange) {
                                var h = f[0].createTextRange(), g = f.val().length;
                                h.collapse();
                                h.moveStart("character", g);
                                h.moveEnd("character", g);
                                h.select()
                            }
                            f.data("lego:focused", true)
                        }, 0)
                    }
                    if (!!window.history.length && !b.trim(f.val())) {
                        f.bind("keydown", function(g) {
                            if (g.keyCode == 8) {
                                if (!b.trim(f.val())) {
                                    return window.history.back()
                                }
                            }
                            f.unbind("keydown", arguments.callee)
                        })
                    }
                    f.blur(function() {
                        f.data("lego:focused", false)
                    }).focus(function() {
                            f.data("lego:focused", true)
                        })
                }
                if (c.shortcut) {
                    b(document).keydown(function(g) {
                        if (!g.ctrlKey || b(g.target).is("input, textarea")) {
                            return
                        }
                        if (g.keyCode == 38) {
                            f.focus().select()
                        }
                    })
                }
            }
        })(jQuery, window.Lego)
    }
    if (_ycssjs("XVQiElBTl5hr1DXaUe3Cdgm18OQ")) {
        BEM.DOM.decl("b-search__sample", {onSetMod: {js: function() {
            Lego.block["b-search__sample"].call(this.domElem, this.params)
        }}});
        (function(b, a) {
            a.block["b-search__sample"] = function(g) {
                var f = this, e = f.closest("form"), d = e.find("input[name='" + (g["for"] || "text") + "']"), c;
                f.find(".b-link_pseudo_yes").click(function(h) {
                    d.focus().attr("value", g.text || b(h.target).text());
                    c = e.find("input[name='nl']");
                    if (g.nl && !c.length) {
                        c = b('<input type="hidden" name="nl" value="1"/>').insertAfter(d)
                    }
                    b(document).trigger("popupsClose.lego");
                    h.preventDefault()
                })
            }
        })(jQuery, window.Lego)
    }
    if (_ycssjs("wvRMFjeKb9R+Wb4HxbxyMhIfopM")) {
        BEM.DOM.decl({block: "b-search",modName: "filters",modVal: "intent"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.findBlocks();
            BEM.blocks["b-filter-intent"].on("change", this._onFilterChange, this).on("submit", this._onFilterSubmit, this);
            BEM.blocks["b-page"].on("filter:clear", this._onFiltersClear, this)
        }},findBlocks: function() {
            this.filterIntent = this.findBlockOutside("b-page").findBlockInside("b-filter-intent");
            this.__base.apply(this, arguments)
        },destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-filter-intent"].un("change", this._onFilterChange, this).un("submit", this._onFilterSubmit, this);
            BEM.blocks["b-page"].un("filter:clear", this._onFiltersClear, this)
        },_isSearchPage: function() {
            return !~["cbir", "copy"].indexOf(global.params.page)
        },_onFilterChange: function(c, b) {
            if (this._input.cbir && this._input.cbir.isCBIRRequest() || !this._isSearchPage()) {
                BEM.blocks["i-location"].get().change({url: $.url.setParams(location.href, b)})
            } else {
                for (var a in b) {
                    this.domElem.find("input[name=" + a + "]").val(b[a])
                }
            }
        },_onFilterSubmit: function(a) {
            this._input.cbir && this._input.cbir.isCBIRRequest() || !this._isSearchPage() || this._onSubmit(a)
        },_onFiltersClear: function() {
            this.domElem.find(".b-search__filters input").each(function() {
                $(this).val("")
            })
        }})
    }
    if (_ycssjs("Zt0sewRrM0b8iQp+K4WOTnzEOBw")) {
        BEM.DOM.decl({block: "b-search",modName: "cbir",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.findBlocks().bindEvents()
        }},findBlocks: function() {
            this.__base.apply(this, arguments);
            this.input = this.findBlockInside({block: "b-form-input",modName: "type",modVal: "search"});
            this.cbir = this.input.cbir;
            this.search = this.findBlockOn("b-search");
            return this
        },bindEvents: function() {
            this.__base.apply(this, arguments);
            this.input.on("showUploader", this._onShowUploader, this);
            this.cbir.on("hideUploader", this._onHideUploader, this);
            return this
        },destruct: function() {
            this.input.un("showUploader", this._onShowUploader, this);
            this.cbir.un("hideUploader", this._onHideUploader, this);
            this.__base.apply(this, arguments)
        },_onHideUploader: function() {
            this.search.delMod("cbir");
            this.input.hideUploader();
            return this
        },_onShowUploader: function() {
            this.search.setMod("cbir", "yes");
            return this
        }})
    }
    if (_ycssjs("oJHmCh1MPkPV3oHLu6eJpm5kE7o")) {
        BEM.DOM.decl("b-page", {_onChange: function(b, a) {
            this.__base.apply(this, arguments);
            if (a.block !== "b-page_type_cbir") {
                return
            }
            this._signalChannel.trigger("load:start");
            BEM.create("i-request_type_bem", {url: "/yandsearch",formData: a.formData,ctx: this}).block("b-form-input__cbirintent", function(d) {
                BEM.DOM.update($(".b-form-input__cbirintent-wrap"), d.html);
                var c = this.findBlockInside({block: "b-form-input",modName: "cbir",modVal: "yes"}), e = c.elem("clear", "search", "clear");
                c.val("");
                c.setMod(c.findElem("cbirintent"), "visibility", c.hasMod("focused", "yes") ? "hidden" : "visible").setMod(e, "visibility", "visible").setMod(e, "type", "cbir")
            }).block("b-page_type_cbir:container", function(c) {
                    BEM.blocks["b-cbir"].changeRequestStatus(false);
                    this.findBlockOutside("b-page").setMod("type", "cbir");
                    BEM.DOM.update(this.findBlockInside("b-page-wrap").domElem, c.html);
                    this.trigger("page:content:loaded")
                }).block("b-navigation_position_bottom:ajax", function(c) {
                    this.update(c)
                }).block("b-page__meta", function(c) {
                    var d = c.params;
                    this.updateSeoInformation(d.seo);
                    this.trigger("json:params", d.global)
                }).block("b-family-filter", function(c) {
                    this.updateFamilyFilter(c.html)
                }).block("b-related", function() {
                    BEM.DOM.update($(".b-search__under_col_left"), "")
                }).get(a.params, function() {
                    this.trigger("change", {page: "cbir"})
                })
        }})
    }
    if (_ycssjs("hRkMZZDleIu/sBRzI/yGa5h9pfw")) {
        BEM.DOM.decl({block: "b-error",modName: "image",modVal: "not-found"}, {onSetMod: {js: function() {
            this.bindTo("link", "leftclick", function() {
                this.findBlockOutside("b-page").trigger("filter:clear")
            })
        }}})
    }
    if (_ycssjs("RpTtuLneOAIEeTfq2b2sLeVrPeg")) {
        BEM.DOM.decl("b-error", {onSetMod: {js: function() {
            this.text = this.params.text;
            this.notification = this.findBlockInside("b-notification")
        },visible: {yes: function() {
            this.domElem.removeClass("i-hidden")
        },"": function() {
            this.domElem.addClass("i-hidden")
        }}},show: function(a) {
            Lego.cp(40, 2104);
            var b = a;
            if (b.length > 45) {
                b = b.substr(0, 45) + "..."
            }
            this.notification.domElem.html(this.text.supplant({href: a,text: b}));
            this.setMod("visible", "yes")
        },hide: function() {
            this.delMod("visible")
        }}, {live: true})
    }
    if (_ycssjs("oi3pS80tX/V8Wcq+z6Odk4q4fkQ")) {
        BEM.DOM.decl("b-images-list", {checkDanglingThumbs: function() {
            this.hasMod("dangling", "no") && this.shouldRemoveThumbs() && this.findDanglingThumbs()
        }}, {unitSelector: ".b-images-list__unit"})
    }
    if (_ycssjs("MWvdf2hF9mdFJ31WyqAZGNVwOX8")) {
        (function() {
            function a(b) {
                return b.length && b[b.length - 1]
            }
            BEM.DOM.decl({block: "b-images-list",modName: "fluid",modVal: "yes"}, {margin: 10,onSetMod: {js: function() {
                this.__base.apply(this, arguments);
                this.align();
                this.checkDanglingThumbs();
                this.trigger("list:aligned");
                BEM.blocks["b-page"].on("resize", this._onResize, this)
            }},destruct: function() {
                this.__base.apply(this, arguments);
                BEM.blocks["b-page"].un("resize", this._onResize, this)
            },align: function() {
                this.maxWidth = this.domElem.width() || 500;
                this.items = this.domElem.find(this.__self.unitSelector).toArray();
                for (var c = 0, b = this.items.length; c < b; c++) {
                    this.items[c] = $(this.items[c])
                }
                while (this.items.length) {
                    this.buildRow()
                }
            },_onResize: function() {
                if (this._progress) {
                    return
                }
                this._progress = true;
                this.align();
                this._progress = false
            },buildRow: function() {
                var e = [], c = 0, f, d, b;
                while (this.items.length && (c < this.maxWidth || this.isThumbsInSameSeries(this.items[0], a(e)))) {
                    d = this.items.shift();
                    if (d.is(":hidden")) {
                        continue
                    }
                    c += this.getImageWidth(d);
                    c += this.getImageMargin(e, d);
                    e.push(d)
                }
                f = c - this.maxWidth;
                if (e.length && f > 0) {
                    b = this.getRowOverage(e, c, f);
                    this.truncateRow(e, b)
                }
            },isThumbsInSameSeries: function(c, b) {
                return b && b.hasClass("b-images-thumb") && c.hasClass("b-images-thumb") && c.parent().get(0) === b.parent().get(0)
            },getImageMargin: function(d, c) {
                var b = 0;
                if (this.isRegularImage(c)) {
                    b += this.margin
                } else {
                    b++;
                    if (!this.isThumbsInSameSeries(c, a(d))) {
                        b += this.margin;
                        b++
                    }
                }
                return b
            },getImageWidth: function(b) {
                return b.find("img").width()
            },truncateRow: function(g, e) {
                var f, c;
                for (var d = 0, b = g.length; d < b; d++) {
                    f = g[d];
                    c = e[d];
                    this.truncateImage(f, c)
                }
            },truncateImage: function(c, b) {
                if (b > 0) {
                    c.find("img").css("marginLeft", -Math.floor(b / 2));
                    c.width(this.getImageWidth(c) - b)
                }
            },getRowOverage: function(h, b, j) {
                var d = [], f = 0, g, e, c = h.length;
                for (e = 0; e < c; e++) {
                    d[e] = 0
                }
                for (e = 0; e < c; e++) {
                    d[e] = Math.floor((this.getImageWidth(h[e]) / b) * j);
                    f += d[e]
                }
                g = j - f;
                while (g > 0) {
                    for (e = 0; e < c; e++) {
                        g--;
                        d[e]++;
                        if (g <= 0) {
                            break
                        }
                    }
                }
                return d
            },isRegularImage: function(b) {
                if (!b) {
                    return true
                }
                return !b.hasClass("b-images-thumb")
            }})
        }())
    }
    if (_ycssjs("d/bDDkboyn1ME8unK9m7WvLVx/0")) {
        (function() {
            var a = {};
            BEM.DOM.decl({block: "b-images-list",modName: "unique",modVal: "yes"}, {onSetMod: {js: function() {
                this.afterCurrentEvent(function() {
                    this._onTypeModSet(this.getMod("type"))
                });
                this.channel("page:signal").on("load:start", this._onBeforeContentChange, this);
                this.__base.apply(this, arguments)
            },type: function(c, b) {
                this._onTypeModSet(b)
            }},destruct: function() {
                this.__base.apply(this, arguments);
                this.channel("page:signal").un("load:start", this._onBeforeContentChange, this)
            },_onBeforeContentChange: function() {
                a = {}
            },_onTypeModSet: function(b) {
                var d, c;
                if (b === "home") {
                    return
                }
                d = this.findBlockOn("i-images-list");
                if (!d) {
                    return
                }
                this.isFirstPage(d.getMod("p")) && (a = {});
                c = this.domElem.find(this.__self.unitSelector);
                c.each(function(e, f) {
                    if (a[f.id]) {
                        f.parentNode.removeChild(f)
                    } else {
                        a[f.id] = 1
                    }
                })
            },isFirstPage: function(b) {
                return b === "0" || b === "-1"
            }})
        })()
    }
    if (_ycssjs("7+xm8yD3WqWmkulWufZVp+6KQF0")) {
        (function() {
            var e = 8, b = 180, d = true, a = 0, c = {over: "mousemove",out: "mouseleave"};
            BEM.DOM.decl("b-images-item", {onSetMod: {js: function() {
                this.__base.apply(this, arguments);
                this.bindTo([c.over, c.out].join(" "), function(f) {
                    this._onMouseEvent(f)
                });
                d = true
            },hovered: {yes: function() {
                this._onModHovered()
            },"": function() {
                this.elem("info").removeAttr("style")
            }},selected: {yes: function() {
                this._updateSelectedHeight();
                this._delHover()
            },"": function() {
                this.elem("info").css("height", "auto")
            }}},_onClick: function(g, f) {
                BEM.blocks["i-location"].get().change({method: "view",hash: this.domElem.attr("id"),url: this.params.detail_url,source: f}, g);
                this._updateSelectedHeight()
            },_onMouseEvent: function(f) {
                if (!this._canMouseEvent()) {
                    return
                }
                switch (f.type) {
                    case c.over:
                        this._setHover();
                        break;
                    case c.out:
                        this._delHover();
                        break
                }
            },_onModHovered: function() {
                var g = this.domElem, h = this.elem("info"), f = Math.max(g.width(), b);
                h.css({paddingTop: e + g.height(),width: f});
                if (g.position().left === 0) {
                    return
                }
                h.css("margin-left", this._calculateMargin(f, g, g.next()))
            },_canMouseEvent: function() {
                return !(this.hasMod("selected", "yes") || !this.hasMod("in", "stream"))
            },show: function() {
                this.setMod("selected", "yes");
                this.trigger("show", this)
            },_calculateMargin: function(g, j, h) {
                var f = j.width(), i = this._isLastImageInRow(g, j, h) ? 1 : 2;
                return -Math.floor(e + (g - f) / i)
            },_isLastImageInRow: function(f, h, g) {
                var k = h.offset(), j = !(g.length && (k.top === g.offset().top)), i = k.left + f + e > this.__self.doc.width();
                return j && i
            },_setHover: function() {
                if (d) {
                    d = false;
                    this.setMod("hovered", "yes")
                }
            },_delHover: function() {
                !a && (d = true);
                this.delMod("hovered")
            },_getPreviewHeight: function() {
                return this.elem("preview").height()
            },_updateSelectedHeight: function() {
                var f = this._getPreviewHeight();
                this.elem("info").height(f);
                return this
            }}, {live: function() {
                this.__base.apply(this, arguments);
                this.doc.on("scroll", function() {
                    d = false;
                    a && clearTimeout(a);
                    a = setTimeout(function() {
                        d = true;
                        a = 0
                    }, 100)
                });
                this.liveInitOnEvent("mousemove").liveBindTo("link", "leftclick", function(f) {
                    this._onClick(f, "mouse")
                })
            }})
        }())
    }
    if (_ycssjs("1qLFp2z2A36PrvkRo0cqBxJhr/w")) {
        (function() {
            var a = (Math.floor((Math.random() * 100)));
            BEM.DOM.decl({name: "b-link",modName: "counter",modVal: "yes"}, {_onClick: function(b) {
                a <= (this.params["show-counter"] || 10) && Lego.ch(this.params.counter, this.domElem[0])
            }}, {live: function() {
                this.__base.apply(this, arguments);
                this.liveBindTo({modName: "counter",modVal: "yes"}, "mousedown", function(b) {
                    this._onClick(b)
                })
            }})
        }())
    }
    if (_ycssjs("fPFP8gPmIBcIc1j24LpWFZpjNrw")) {
        BEM.DOM.decl({name: "b-link",modName: "counter",modVal: "blockstat"}, {_count: function(a) {
            w(this.domElem[0], this.params.counter)
        }}, {live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo({modName: "counter",modVal: "blockstat"}, "leftclick", function(a) {
                this._count(a)
            })
        }})
    }
    if (_ycssjs("cDDNQpAMCUGN+LNa9/Cvu5iIAWg")) {
        BEM.DOM.decl("b-images-group", {onSetMod: {js: function() {
            this.setMod("hovered", "yes");
            this.bindTo("mouseenter mouseleave", this._onMouseEvent)
        },selected: {yes: function() {
            this.delMod("hovered")
        }}},_onMouseEvent: function(a) {
            this.hasMod("selected", "yes") || this.setMod("hovered", a.type === "mouseenter" ? "yes" : "")
        }}, {live: function() {
            this.liveInitOnEvent("mouseover")
        }})
    }
    if (_ycssjs("Rdo+L2ZqC3502wiYM37P3s8x0cI")) {
        (function() {
            var a;
            BEM.DOM.decl("b-images-thumb", {partialWidth: 70 + 2,onSetMod: {hovered: {yes: function() {
                a && a.domElem && a.delMod("hovered");
                a = this
            }}},_onClick: function(b) {
                this.setMod("selected", "yes");
                BEM.blocks["i-location"].get().change({method: "view",hash: this.domElem.attr("id"),url: this.params.detail_url}, b)
            },_onMouseMove: function(b) {
                this.setMod("hovered", "yes")
            }}, {live: function() {
                this.liveInitOnEvent("mouseover");
                this.liveBindTo("leftclick", function(b) {
                    this._onClick(b)
                });
                this.liveBindTo("mousemove", function(b) {
                    this._onMouseMove(b)
                })
            }})
        })()
    }
    if (_ycssjs("iNE0ejk6soVwu3q9d3UNXpvZuyk")) {
        BEM.DOM.decl("b-images-group-promo", {init: function() {
            this.findBlocks().bindEvents().displayPromo().scroll()
        },findBlocks: function() {
            this.firstSeries = this.findBlockOutside("b-page").findBlockInside("b-images-group");
            this.promoPopup = this.findBlockInside("b-popupa");
            this.promoFooter = this.promoPopup.findBlockInside("b-images-group-promo").elem("footer");
            this.learMoreButton = this.promoPopup.findBlockInside("b-images-group-promo").elem("more-button");
            return this
        },destruct: function() {
            this.__base.apply(this, arguments);
            this.promoPopup && this.promoPopup.destruct();
            this.promoPopup.un("hide", this._onPopupClose, this);
            BEM.blocks["b-page"].un("resize", this.displayPromo, this);
            BEM.blocks["i-location"].un("change", this._onCloseClick, this)
        },bindEvents: function() {
            this.bindTo("close", "leftclick", this._onCloseClick).bindTo("close-button", "leftclick", this._onCloseClick).bindTo("more-button", "leftclick", this._onCloseClick);
            this.promoPopup.on("hide", this._onPopupClose, this);
            BEM.blocks["b-page"].on("resize", this.displayPromo, this);
            BEM.blocks["i-location"].on("change", this._onCloseClick, this);
            return this
        },displayPromo: function() {
            if (!this.promoPopup._isShowed && this.hasMod("inited", "yes")) {
                return false
            }
            var a = this.firstSeries.domElem.outerWidth(), b = $.url.getParam("source");
            this.setMod("inited", "yes");
            this.firstSeries.setMod("focused", "yes").delMod("hovered");
            this.promoPopup.domElem.css({width: a + "px",height: a + "px"});
            a < 515 && a > 315 && this.promoFooter.css("margin-left", (a - 515) / 2 + "px");
            if (a < 315) {
                this.setMod(this.elem("close"), "offset", "right");
                this.setMod(this.promoFooter, "offset", "right");
                this.elem("subtitle").css("margin-left", (a - 305) / 2 + "px");
                this.elem("title").css("margin-left", (a - 274) / 2 + "px")
            }
            if ((/pr\d+_(query|img)/g).test(b)) {
                this.setMod(this.learMoreButton, "visibility", "hidden");
                this.promoFooter.css("min-width", a + "px")
            }
            this.promoPopup.show(this.firstSeries.domElem.offset());
            (this.__self.doc.width() > this.__self.win.width()) && this.setMod(this.promoFooter, "offset", "left");
            return this
        },_onCloseClick: function() {
            this.isClearClicked = true;
            this.promoPopup.hide()
        },_onPopupClose: function() {
            this.isClearClicked || BEM.blocks["i-counter"].count("/image/new/promo/series/close/fade");
            this.firstSeries.delMod("focused")
        },scroll: function() {
            var a = this.promoPopup.domElem.offset().top;
            (this.__self.win.height() - a < this.promoPopup.domElem.outerHeight()) && $("html, body").animate({scrollTop: a - 60}, 1500, "easeOutExpo");
            return this
        }})
    }
    if (_ycssjs("2+Dz9BWo8UF+CjkfO+o1mcgnSas")) {
        BEM.DOM.decl("i-images-lists", {onSetMod: {js: function() {
            this._page = this.findBlockOutside("b-page");
            this._req = [];
            this.bindEvents()
        }},destruct: function() {
            this.__base.apply(this, arguments);
            this._req.forEach(function(a) {
                a.abort()
            });
            this._page.loading = false
        },insertListOrBreak: function(a) {
            var b = $(a.html);
            b.appendTo(this.domElem);
            this.afterCurrentEvent(function() {
                BEM.DOM.init(b)
            })
        }})
    }
    if (_ycssjs("y5EZmQBInLGiZjkQzidmHyofRyE")) {
        BEM.DOM.decl({block: "i-images-lists",modName: "type",modVal: "cbir"}, {bindEvents: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-navigation"].on("list:load:next", this._onListLoad, this);
            return this
        },destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-navigation"].un("list:load:next", this._onListLoad, this)
        },_onListLoad: function(c, b) {
            this.trigger("list:load:next").trigger("list:load", {direction: "next"});
            var a = BEM.create("i-request_type_bem", {url: $.url.getPath(b.url),ctx: this}), d = $.url.getAllParams(b.url);
            d.serpid = global.params.serpid;
            this._req.push(a);
            a.block("b-page-break", function(e) {
                this.insertListOrBreak(e)
            }).block("b-double_type_cbir", function(e) {
                    this.insertListOrBreak(e)
                }).block("b-navigation_position_bottom:ajax", function(e) {
                    this.findBlockOutside("b-page").findBlockInside({blockName: "b-navigation",modName: "position",modVal: "bottom"}).update(e);
                    this.findBlockOutside({blockName: "b-page",modName: "navigation",modVal: "infinite"}).update(e)
                }).get(d, function() {
                    this.trigger("list:loaded:next")
                })
        }})
    }
    if (_ycssjs("qekUX+YMhR4WfVBD9oI4y2t1sA0")) {
        BEM.HTML.decl({name: "b-form-button",modName: "type",modVal: "simple"}, {onBlock: function(a) {
            a.tag(a.param("url") ? "a" : "span").attrs({href: a.param("url"),target: a.param("target")}).mods({size: a.mod("size") || "s",theme: a.mod("theme") || (a.mod("type") + "-grey")}).content({tag: "span",elem: "simple",content: a.content()}, true).afterContent(a.param("type") ? {elem: "input",attrs: {value: a.param("value") || "",type: a.param("type"),name: a.param("name"),disabled: a.mod("disabled") && "disabled"}} : {elem: "click"}).js(true).stop()
        }})
    }
    if (_ycssjs("TFXjBpJ0gm75juLmYGTTBDwmJQg")) {
        BEM.DOM.decl({block: "b-intent",modName: "holded",modVal: "no"}, {onSetMod: {js: function() {
            this._count(this.params.counters.show);
            this.bindTo("button-fresh", "leftclick", this._onButtonClick)
        }},_onButtonClick: function() {
            this._count(this.params.counters.click)
        },_count: function(a) {
            w(this.elem("button-fresh"), a)
        }})
    }
    if (_ycssjs("rGib0KhZtJ6E8uv/tKMDOGYI7Lo")) {
        BEM.DOM.decl("b-filter-intent", {onElemSetMod: {item: {state: function() {
            this.delMod(this.elem("item", "state", "current"), "state")
        }}},_onItemClick: function(a) {
            this.current = this._getItemByEvent(a);
            this._checkFilters()
        },_onCloseClick: function(a) {
            this.updateFilter("");
            this.submit()
        },_checkFilters: function() {
            this.updateFilter();
            this.submit()
        },_getItemByEvent: function(a) {
            return (a.data || a.target).domElem.closest(this.buildSelector("item"))
        },updateFilter: function(a) {
            var b = {};
            b[this.params.filter] = typeof a === "undefined" ? this.getValue() : a;
            this.trigger("change", b)
        },submit: function() {
            this.trigger("submit")
        },getValue: function(a) {
            var b;
            try {
                b = (a || this.current || this.findElem("item", "state", "current")).find(".b-filter-intent__link").attr("href").match(this.params.filter + "=([^&]+)")[1]
            } catch (c) {
            }
            return b
        }}, {live: function() {
            (global.ua.hasHistoryAPI || global.ua.isIE9) && this.liveBindTo("link", "leftclick", function(a) {
                this._onItemClick(a);
                a.preventDefault()
            }).liveBindTo("close", "leftclick", function(a) {
                    this._onCloseClick(a);
                    a.preventDefault()
                })
        }})
    }
    if (_ycssjs("1w5t4rxGDDJVU3ppSPHpmZrUTrQ")) {
        BEM.DOM.decl({block: "b-filter-intent",modName: "type",modVal: "size"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.wallpaper = this.elem("item", "type", "wallpaper");
            this.wallpaperPopup = this.wallpaper.find(".b-popupa");
            if (this.wallpaperPopup.length) {
                this.wallpaperPopup = this.wallpaperPopup.bem("b-popupa")
            } else {
                this.wallpaperPopup = null
            }
            this.size = this.elem("item", "type", "custom");
            this.sizePopup = this.size;
            if (this.sizePopup.length) {
                this.sizePopup = this.sizePopup.find(".b-popupa").bem("b-popupa")
            }
        }},_onItemClick: function(c) {
            this.current = this._getItemByEvent(c);
            var b = this.getValue(this.current);
            switch (b) {
                case "wallpaper":
                    this.wallpaperPopup && (this.wallpaperPopup.isShowed() || this.wallpaperPopup.show(this.wallpaper.parent()));
                    break;
                case "gt":
                case "lt":
                case "eq":
                case "other":
                    var a = this.sizePopup;
                    if (a && !a.isShowed()) {
                        a.show(this.size.parent());
                        a.domElem.find(".b-custom-size__input_dimension_width").focus()
                    }
                    break;
                default:
                    this._checkFilters();
                    break
            }
            c.preventDefault()
        },destruct: function() {
            this.__base.apply(this, arguments);
            this.wallpaperPopup && this.wallpaperPopup.destruct();
            this.sizePopup && this.sizePopup.destruct()
        },_onCloseClick: function() {
            this.updateWP("");
            this.__base.apply(this, arguments)
        },updateWP: function(a) {
            this.trigger("change", {wp: a,isize: "wallpaper"});
            this.submit()
        }})
    }
    if (_ycssjs("G6nIsAh/ih741iBL9CpdVyIt0Hk")) {
        BEM.DOM.decl("b-wallpaper-chooser", {onSetMod: {js: function() {
            this.filterIntent = this.findBlockOutside({block: "b-filter-intent",modName: "type",modVal: "size"});
            this.currentDisplay = this.elem("current-resolution");
            this.setResolution();
            this.bindTo("resolution", "leftclick", this._onResolutionClick)
        }},setResolution: function() {
            var b = this.__self.win.get(0).screen, a = b.width, d = b.height, c = this.domElem.find(this.buildSelector("resolution", "type", "desktop") + '[data-width="' + a + '"][data-height="' + d + '"]');
            c.length || this.params.allowedResolutions.forEach(function(e) {
                if (a == e.width && d == e.height) {
                    c = this.elem("resolution", "type", "custom");
                    c.find(this.buildSelector("text")).html(a + "?" + d);
                    c.data({width: a,height: d,wp: e.wp}).removeClass("i-hidden")
                }
            }, this);
            c.length && this._setCurrent(c)
        },_setCurrent: function(a) {
            this.setMod(a.find(this.buildSelector("text")), "state", "current");
            this.currentDisplay.appendTo(a)
        },_onResolutionClick: function(b) {
            b.preventDefault();
            var a = $(b.currentTarget).data("wp");
            this.filterIntent.current = this.filterIntent.elem("item", "type", "wallpaper");
            this.filterIntent.updateWP(a)
        }})
    }
    if (_ycssjs("6f7y1DO7yEWqEyD2woJym4VOez0")) {
        BEM.DOM.decl("b-custom-size", {onSetMod: {js: function() {
            this.radio = this.findBlockInside("b-form-radio");
            this.bindTo("form", "submit", this._onSubmit)
        }},onElemSetMod: {error: {visible: {yes: function(a) {
            var c = this, b = this.findElem("error", "visible", "yes");
            if (this.timer || b) {
                window.clearTimeout(this.timer);
                this.delMod(b, "visible")
            }
            a.slideDown("fast", function() {
                c.timer = window.setTimeout(function() {
                    c.delMod(a, "visible")
                }, 2000)
            })
        },"": function(a) {
            a.slideUp("fast")
        }}}},_onSubmit: function(f) {
            f.preventDefault();
            var c = this.elem("input", "dimension", "width").val(), a = this.elem("input", "dimension", "height").val(), b = this.radio.val();
            if (this.isDimensionValid(c) && this.isDimensionValid(a)) {
                BEM.blocks["b-filter-intent"].trigger("change", {isize: b,iw: c,ih: a}).trigger("submit")
            } else {
                var g = {0: {0: "all",1: "width"},1: {0: "height",1: ""}}, d = g[this.isDimensionValid(c)][this.isDimensionValid(a)];
                this.setMod(this.elem("error", "type", d), "visible", "yes")
            }
        },isDimensionValid: function(a) {
            return +(a > 0)
        }})
    }
    if (_ycssjs("sN2yCS9+WxrTwug3oA1N0PJP+CQ")) {
        BEM.DOM.decl({block: "b-filter-intent",modName: "type",modVal: "site"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.bindTo("form", "submit", this._onItemClick);
            this.findBlockInside("b-form-button").on("click", this._onItemClick, this)
        }},getValue: function() {
            return this.findBlockInside("b-form-input").val()
        },_onItemClick: function(a) {
            if (!global.ua.hasHistoryAPI && !global.ua.isIE9) {
                return
            }
            a.preventDefault();
            this.__base.apply(this, arguments);
            BEM.blocks["i-counter"].count("/image/new/filters/site/on")
        },_onCloseClick: function(a) {
            this.__base.apply(this, arguments);
            BEM.blocks["i-counter"].count("/image/new/filters/site/any")
        }}, {live: function() {
            this.__base.apply(this, arguments);
            this.liveInitOnBlockInsideInit("b-form-button").liveInitOnBlockInsideInit("b-form-input")
        }})
    }
    if (_ycssjs("px2LuLCDs9G0Hpj3sgmsnjjn8qI")) {
        (function() {
            var c, b, d = function() {
                var e, f = 0;
                while (e = c[f++]) {
                    e.val(e.elem("input").val())
                }
            }, a = function(g) {
                try {
                    return g.activeElement
                } catch (f) {
                }
            };
            BEM.DOM.decl("b-form-input", {onSetMod: {js: function() {
                var h = this, f = h.elem("input"), g = a(h.__self.doc[0]), e = h.params.autoFocus && !(g && $(g).is("input, textarea"));
                h._val = f.val();
                if (g === f[0] || e) {
                    h.setMod("focused", "yes")._focused = true
                }
                if (!b) {
                    c = [];
                    b = h.channel("sys").on({tick: d,idle: function() {
                        b.un("tick", d)
                    },wakeup: function() {
                        b.on("tick", d)
                    }})
                }
                h._instanceIndex = c.push(h.bindTo(f, {focus: h._onFocus,blur: h._onBlur})) - 1;
                h.params.shortcut && h.bindToDoc("keydown", function(i) {
                    if (i.ctrlKey && i.keyCode == 38 && !$(i.target).is("input, textarea")) {
                        h.setMod("focused", "yes")
                    }
                })
            },disabled: function(f, e) {
                this.elem("input").attr("disabled", e == "yes")
            },focused: function(f, e) {
                if (this.hasMod("disabled", "yes")) {
                    return false
                }
                var g = e == "yes";
                g ? this._focused || this._focus() : this._focused && this._blur();
                this.afterCurrentEvent(function() {
                    this.trigger(g ? "focus" : "blur")
                })
            }},onElemSetMod: {message: {visibility: function(h, i, e) {
                var j = this, g = j.getMod(h, "type");
                if (g) {
                    var f = true;
                    e || j.elem("message", "type", g).each(function() {
                        this != h[0] && j.hasMod($(this), "visibility", "visible") && (f = false)
                    });
                    f && j.toggleMod("message-" + g, "yes", "", e === "visible")
                }
            }}},val: function(g, f) {
                if (typeof g == "undefined") {
                    return this._val
                }
                if (this._val != g) {
                    var e = this.elem("input");
                    e.val() != g && e.val(g);
                    this._val = g;
                    this.trigger("change", f)
                }
                return this
            },getSelectionEnd: function() {
                var i = this.elem("input")[0], g = 0;
                if (typeof (i.selectionEnd) == "number") {
                    g = i.selectionEnd
                } else {
                    var h = document.selection.createRange();
                    if (h && h.parentElement() == i) {
                        var f = i.value.length, e = i.createTextRange();
                        e.moveToBookmark(h.getBookmark());
                        var j = i.createTextRange();
                        j.collapse(false);
                        g = e.compareEndPoints("EndToEnd", j) > -1 ? f : -e.moveEnd("character", -f)
                    }
                }
                return g
            },name: function(e) {
                return this.elem("input").attr("name")
            },_onFocus: function() {
                this._focused = true;
                return this.setMod("focused", "yes")
            },_onBlur: function() {
                if (this._preventBlur) {
                    return this
                }
                this._focused = false;
                return this.delMod("focused")
            },_focus: function() {
                var f = this.elem("input")[0];
                if (f.createTextRange && !f.selectionStart) {
                    var e = f.createTextRange();
                    e.move("character", f.value.length);
                    e.select()
                } else {
                    f.focus()
                }
            },_blur: function() {
                this.elem("input").blur()
            },destruct: function() {
                this.__base.apply(this, arguments);
                this.params.shortcut && this.unbindFromDoc("keydown");
                c.splice(this._instanceIndex, 1);
                var f = this._instanceIndex, e;
                while (e = c[f++]) {
                    --e._instanceIndex
                }
            }});
            BEM.HTML.decl("b-form-input", {onBlock: function(e) {
                var f = e.param("id") || e.generateId();
                e.tag("span").tParam("id", f).tParam("has-clear", e.mod("has-clear") === "yes").tParam("type", e.mod("type") || "input").afterContent({elem: "box",tag: "span",content: {elem: "input",attrs: {value: e.param("value"),name: e.param("name"),id: f}}}).js(true)
            },onElem: {input: function(e) {
                e.tag(e.tParam("type"))
            },label: function(e) {
                e.tag("label").attr("for", e.tParam("id"))
            },box: function(e) {
                if (e.tParam("has-clear")) {
                    e.afterContent({elem: "clear",tag: "span"})
                }
            },hint: function(e) {
                e.tag("label").attr("for", e.tParam("id"))
            }}})
        })()
    }
    if (_ycssjs("KhtZahhRaKb+7SGfEhYKdqzdxHU")) {
        BEM.DOM.decl("b-form-input", {onSetMod: {js: function() {
            this._isPlaceholderEmulated = !Modernizr.input.placeholder || $.browser.msie || !!window.opera;
            this._isPlaceholderEmulated && this.elem("input").attr("placeholder", "");
            this.__base.apply(this, arguments)
        }}})
    }
    if (_ycssjs("Dd5OT5benhVvNusoLZF5k4BoHl0")) {
        BEM.DOM.decl("b-form-input", {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            (this._hasHint = !!this.elem("hint")[0]) && this.on("change", this._updateHint)._updateHint()
        },focused: function() {
            this.__base.apply(this, arguments);
            this._hasHint && this._updateHint()
        }},_updateHint: function() {
            this.toggleMod(this.elem("hint-wrap"), "visibility", "visible", !(this._focused || this.val()))
        }})
    }
    if (_ycssjs("CwGSIyPhE4A0QJDRo52NqpBm3GE")) {
        BEM.DOM.decl({block: "b-search-engines",modName: "type",modVal: "popup"}, {onSetMod: {js: function() {
            this.popup = this.findBlockInside("b-popupa");
            this.findBlockInside("b-link").bindTo("click", this.changeThis(function(a) {
                this.popup.toggle(this.domElem)
            }))
        }},destruct: function() {
            this.__base();
            this.popup.destruct()
        }})
    }
    if (_ycssjs("OOUG/9a6esq25J5zT9SmCWgqOV8")) {
        (function() {
            var a = function(c) {
                var b = c.charCode || c.keyCode || c.which || 0;
                if (!c.ctrlKey && !c.altKey && !c.metaKey && ((b >= 48 && b <= 57) || (b >= 96 && b <= 105) || (b >= 65 && b <= 90) || (b >= 1025 && b <= 1071) || b === 0)) {
                    return true
                }
            };
            BEM.DOM.decl({name: "b-form-input",modName: "autofocus",modVal: "yes"}, {onSetMod: {js: function() {
                this.__base.apply(this, arguments);
                this.bindToDoc("keydown", this._autoFocusBind)
            },autofocus: {yes: function() {
                this.bindToDoc("keydown", this._autoFocusBind)
            },"": function() {
                this.unbindFromDoc("keydown")
            }}},_autoFocusBind: function(f) {
                if (this.hasMod("focused", "yes")) {
                    return
                }
                var b;
                try {
                    b = document.activeElement.tagName.toLowerCase()
                } catch (f) {
                }
                if (a(f) && b !== "input" && b !== "textarea") {
                    var d = this.elem("input")[0], g = this.val();
                    if (g.length > 0 && g.substr(g.length - 1, 1) != " ") {
                        g += " ";
                        this.val(g)
                    }
                    if (d.createTextRange) {
                        var c = d.createTextRange();
                        c.collapse(false);
                        c.select()
                    } else {
                        if (d.selectionStart) {
                            d.setSelectionRange(g.length, g.length)
                        }
                    }
                    this.setMod("focused", "yes")
                }
            }})
        }())
    }
    if (_ycssjs("Moi9lK+8X6foYhTNNjkay9vyihA")) {
        (function() {
            var a = [], d = -1;
            BEM.DOM.decl({name: "b-form-input",modName: "width",modVal: "content"}, {onSetMod: {js: function() {
                this.__base();
                this.domElem.append($(BEM.HTML.build({block: this.__self.getName(),elem: "width-ruler",tag: "s"})));
                this._initFont()._initShift().on("change", this._setWidth).bindToWin("resize", this._resetMaxWidth).bindTo("box", "leftclick", function(f) {
                    f.target == this.elem("clear")[0] || f.target == this.elem("input")[0] || this.findBlockOutside($(f.target), "b-search-filter") || this.setMod("focused", "yes")
                })
            }},_initFont: function() {
                b(this.elem("width-ruler"), this.elem("input"));
                return this
            },_initShift: function() {
                this._shiftWidth = parseFloat(this.elem("width-ruler").css("paddingRight"));
                this.elem("width-ruler").css("paddingRight", 0);
                return this._setShiftWidth()._updateInsetsWidth()
            },_setWidth: function() {
                if (d >= 0) {
                    var e = this.elem("width-ruler").text(this._val).width();
                    if (this._maxWidth > e) {
                        if (a.length > d + 1 && a[d + 1].width < this._maxWidth - e) {
                            return this._showHiddenInset()
                        }
                        this._setShiftWidth()
                    } else {
                        if (d && a.length > 1) {
                            return this._hideLastInset()
                        } else {
                            e = this._maxWidth - this._shiftWidth;
                            this._setShiftWidth(this._shiftWidth)
                        }
                    }
                    e += this._shiftWidth;
                    this.elem("input").width(Math.floor(e))
                } else {
                    if (a.length) {
                        return this._showHiddenInset()
                    }
                    this.elem("input").width("100%")
                }
                return this
            },_setShiftWidth: function(e) {
                this.elem("input").css("marginRight", e || 0);
                return this
            },_resetMaxWidth: function() {
                this.elem("input").hide();
                var e = this.elem("box").width() - this._shiftWidth - this._insetsWidth;
                this.elem("input").show();
                if (this._maxWidth != e) {
                    this._maxWidth = e;
                    this._setWidth()
                }
                return this
            },_updateInsetsWidth: function(e) {
                this._insetsWidth = (this._insetsWidth || 0) + (e ? e : 0);
                return this._resetMaxWidth()
            },_hideLastInset: function() {
                a[d].isVisible = false;
                a[d].domElem.hide();
                d--;
                return this._updateInsetsWidth(-a[d + 1].width)
            },_showHiddenInset: function() {
                d++;
                a[d].isVisible = true;
                a[d].domElem.show();
                return this._updateInsetsWidth(a[d].width)
            },appendInset: function(f) {
                var e = $(f).hide();
                this.elem("input").after(e);
                BEM.DOM.init(e, function() {
                    var g = Math.ceil(0.5 + e.outerWidth() + parseFloat(e.css("marginLeft")) + parseFloat(e.css("marginRight")));
                    a.unshift({domElem: e.show(),width: g,isVisible: true});
                    d++;
                    this._updateInsetsWidth(g)
                }, this);
                return this
            },removeInset: function(e, g) {
                var h = this, f = e.bem("b-search-filter").params.uniqId;
                $.each(a, function(j) {
                    if (a[j].domElem.bem("b-search-filter").params.uniqId == f) {
                        var l = a[j].isVisible, k = a[j].width;
                        BEM.DOM.destruct(e, g);
                        e.remove();
                        a.splice(j, 1);
                        if (l) {
                            d--;
                            h._updateInsetsWidth(-k)
                        }
                        l && h._setWidth();
                        return false
                    }
                })
            },removeInsets: function() {
                return this._updateInsetsWidth(-this._insetsWidth)
            },resetWidth: function() {
                return this._resetMaxWidth()
            }});
            var c = ["font-size", "font-family"];
            function b(f, g) {
                if (f && g) {
                    for (var e = c.length; e--; ) {
                        var h = c[e];
                        f.css(h, g.css(h))
                    }
                }
                return f
            }
        })()
    }
    if (_ycssjs("5HmrieYe43IauKaESRPS6BlGSgY")) {
        window.Modernizr = (function(n, v, i) {
            var e = "2.6.2", l = {}, G = v.documentElement, H = "modernizr", E = v.createElement(H), o = E.style, f = v.createElement("input"), z = {}.toString, B = " -webkit- -moz- -o- -ms- ".split(" "), c = "Webkit Moz O ms", J = c.split(" "), p = c.toLowerCase().split(" "), j = {}, d = {}, x = {}, D = [], y = D.slice, b, C = function(T, V, N, U) {
                var M, S, P, Q, L = v.createElement("div"), R = v.body, O = R || v.createElement("body");
                if (parseInt(N, 10)) {
                    while (N--) {
                        P = v.createElement("div");
                        P.id = U ? U[N] : H + (N + 1);
                        L.appendChild(P)
                    }
                }
                M = ["&#173;", '<style id="s', H, '">', T, "</style>"].join("");
                L.id = H;
                (R ? L : O).innerHTML += M;
                O.appendChild(L);
                if (!R) {
                    O.style.background = "";
                    O.style.overflow = "hidden";
                    Q = G.style.overflow;
                    G.style.overflow = "hidden";
                    G.appendChild(O)
                }
                S = V(L, T);
                if (!R) {
                    O.parentNode.removeChild(O);
                    G.style.overflow = Q
                } else {
                    L.parentNode.removeChild(L)
                }
                return !!S
            }, u = (function() {
                var M = {select: "input",change: "input",submit: "form",reset: "form",error: "img",load: "img",abort: "img"};
                function L(N, P) {
                    P = P || v.createElement(M[N] || "div");
                    N = "on" + N;
                    var O = N in P;
                    if (!O) {
                        if (!P.setAttribute) {
                            P = v.createElement("div")
                        }
                        if (P.setAttribute && P.removeAttribute) {
                            P.setAttribute(N, "");
                            O = k(P[N], "function");
                            if (!k(P[N], "undefined")) {
                                P[N] = i
                            }
                            P.removeAttribute(N)
                        }
                    }
                    P = null;
                    return O
                }
                return L
            })(), s = ({}).hasOwnProperty, F;
            if (!k(s, "undefined") && !k(s.call, "undefined")) {
                F = function(L, M) {
                    return s.call(L, M)
                }
            } else {
                F = function(L, M) {
                    return ((M in L) && k(L.constructor.prototype[M], "undefined"))
                }
            }
            if (!Function.prototype.bind) {
                Function.prototype.bind = function K(N) {
                    var O = this;
                    if (typeof O != "function") {
                        throw new TypeError()
                    }
                    var L = y.call(arguments, 1), M = function() {
                        if (this instanceof M) {
                            var R = function() {
                            };
                            R.prototype = O.prototype;
                            var Q = new R();
                            var P = O.apply(Q, L.concat(y.call(arguments)));
                            if (Object(P) === P) {
                                return P
                            }
                            return Q
                        } else {
                            return O.apply(N, L.concat(y.call(arguments)))
                        }
                    };
                    return M
                }
            }
            function q(L) {
                o.cssText = L
            }
            function h(M, L) {
                return q(B.join(M + ";") + (L || ""))
            }
            function k(M, L) {
                return typeof M === L
            }
            function m(M, L) {
                return !!~("" + M).indexOf(L)
            }
            function I(N, L) {
                for (var M in N) {
                    var O = N[M];
                    if (!m(O, "-") && o[O] !== i) {
                        return L == "pfx" ? O : true
                    }
                }
                return false
            }
            function A(M, P, O) {
                for (var L in M) {
                    var N = P[M[L]];
                    if (N !== i) {
                        if (O === false) {
                            return M[L]
                        }
                        if (k(N, "function")) {
                            return N.bind(O || P)
                        }
                        return N
                    }
                }
                return false
            }
            function a(P, L, O) {
                var M = P.charAt(0).toUpperCase() + P.slice(1), N = (P + " " + J.join(M + " ") + M).split(" ");
                if (k(L, "string") || k(L, "undefined")) {
                    return I(N, L)
                } else {
                    N = (P + " " + (p).join(M + " ") + M).split(" ");
                    return A(N, L, O)
                }
            }
            j.draganddrop = function() {
                var L = v.createElement("div");
                return ("draggable" in L) || ("ondragstart" in L && "ondrop" in L)
            };
            j.csstransforms3d = function() {
                var L = !!a("perspective");
                if (L && "webkitPerspective" in G.style) {
                    C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(M, N) {
                        L = M.offsetLeft === 9 && M.offsetHeight === 3
                    })
                }
                return L
            };
            function t() {
                l.input = (function(N) {
                    for (var M = 0, L = N.length; M < L; M++) {
                        x[N[M]] = !!(N[M] in f)
                    }
                    if (x.list) {
                        x.list = !!(v.createElement("datalist") && n.HTMLDataListElement)
                    }
                    return x
                })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))
            }
            for (var g in j) {
                if (F(j, g)) {
                    b = g.toLowerCase();
                    l[b] = j[g]();
                    D.push((l[b] ? "" : "no-") + b)
                }
            }
            l.input || t();
            l.addTest = function(M, N) {
                if (typeof M == "object") {
                    for (var L in M) {
                        if (F(M, L)) {
                            l.addTest(L, M[L])
                        }
                    }
                } else {
                    M = M.toLowerCase();
                    if (l[M] !== i) {
                        return l
                    }
                    N = typeof N == "function" ? N() : N;
                    if (typeof enableClasses !== "undefined" && enableClasses) {
                        G.className += " " + (N ? "" : "no-") + M
                    }
                    l[M] = N
                }
                return l
            };
            q("");
            E = f = null;
            l._version = e;
            l._prefixes = B;
            l._domPrefixes = p;
            l._cssomPrefixes = J;
            l.hasEvent = u;
            l.testProp = function(L) {
                return I([L])
            };
            l.testAllProps = a;
            l.testStyles = C;
            return l
        })(this, this.document)
    }
    if (_ycssjs("iBe3C6fmaPvDKauVtJYMr2xdlhI")) {
        (function(a, b) {
            a.ajaxPrefilter(function(d, c, e) {
                if (d.type.toLowerCase() == "iframe") {
                    return "iframe"
                }
            });
            a.ajaxTransport("iframe", function(k, i, j) {
                var g, h, f = a(k.file), c = "iframe-" + a.now(), d = a("<form></form>").hide().attr({action: k.url,target: c});
                function e() {
                    h.replaceWith(f);
                    d.remove();
                    g.attr("src", "javascript:false;").remove()
                }
                k.dataTypes.shift();
                a.each(i.data || {}, function(l, m) {
                    a("<input />").attr({type: "hidden",name: l,value: m}).appendTo(d)
                });
                if (f.length) {
                    h = f.after(f.clone().prop("disabled", true)).next();
                    d.attr({enctype: "multipart/form-data",method: "POST"});
                    d.append(f)
                }
                return {send: function(m, l) {
                    g = a("<iframe></iframe>").hide().attr({name: c,id: c,src: "javascript:false;"});
                    g.one("load", function() {
                        g.bind("load", function() {
                            try {
                                var p = this.contentWindow ? this.contentWindow.document : (this.contentDocument ? this.contentDocument : this.document), n = p.documentElement ? p.documentElement : p.body;
                                l(200, n.innerHTML)
                            } catch (o) {
                                l(500)
                            }
                            setTimeout(function() {
                                e()
                            }, 42)
                        });
                        d[0].submit()
                    });
                    a("body").append(d, g)
                },abort: function() {
                    if (g !== null) {
                        g.unbind("load").attr("src", "javascript:false;");
                        e()
                    }
                }}
            })
        })(jQuery)
    }
    if (_ycssjs("eDcoxdHhVbjPzZUX5EZtBBoB4Ok")) {
        (function() {
            var a = Modernizr.draganddrop && !window.opera && parseFloat($.browser.version) >= 10, b;
            BEM.DOM.decl("b-cbir", {onSetMod: {js: function() {
                this.findBlocks().bindEvents();
                a || this.disableDragandrop()
            }},queryArgs: {rpt: "imagecbir"},findBlocks: function() {
                this.search = this.findBlockOutside("b-search");
                this.cbirSearchInput = this.findBlockInside({block: "b-form-input",modName: "cbir",modVal: "url"});
                this.normalSearchInput = this.search.findBlockInside({block: "b-form-input",modName: "cbir",modVal: "yes"});
                this.file = this.findBlockInside({block: "b-form-button",modName: "cbir",modVal: "button"}).elem("input");
                this.cbirPopup = this.findBlockOutside("b-popupa");
                this.searchButton = this.search.findBlockInside({block: "b-form-button",modName: "search",modVal: "yes"}).elem("input");
                this._pageSignalChannel = this.channel("page:signal");
                this._inputChannel = this.channel("input:signal");
                this._page = this.findBlockOutside("b-page");
                return this
            },bindEvents: function() {
                this.bindTo(this.file, "change", this._onFileChange).on("frame_success", this._onFrameSuccess).on("frame_error", this._onFrameError);
                this.cbirPopup.on("hide", this._onClose, this).on("outside-click", this._onOutsideClick, this);
                this._inputChannel.on("clear", this._onInputClear, this);
                setTimeout(function() {
                    this._isDestructing || this.search.bindTo("submit", this._onSubmit.bind(this))
                }.bind(this), 42);
                return this
            },destruct: function() {
                this.un("frame_success", this._onFrameSuccess).un("frame_error", this._onFrameError);
                this.cbirPopup.un("hide", this._onClose, this).un("outside-click", this._onOutsideClick, this);
                this._inputChannel.un("clear", this._onInputClear, this);
                this.__base.apply(this, arguments)
            },_onInputClear: function() {
                b = ""
            },_onSubmit: function(d) {
                if (this.isCBIRRequest() || this._isExcessSearch()) {
                    var c = this.getURL();
                    c === "" || this.upload(c);
                    return false
                }
            },_onOutsideClick: function(d, c) {
                this.searchButton.is(c.domEvent.target) && d.preventDefault()
            },_onDrag: function(c) {
                this.toggleStroke(c.type !== "dragleave")
            },_onDrop: function(g) {
                this.toggleStroke(false);
                var f = g.originalEvent.dataTransfer, d = f.files[0], c = f.getData("text");
                this.upload(c, d)
            },_onClose: function() {
                this.hideUploader()
            },_onFileChange: function(d) {
                var c = this.getFile(d);
                this.clearFileInput();
                this.hideError();
                if (c) {
                    if (this.validateFile(c)) {
                        this.uploadFile(c)
                    }
                } else {
                    this.frameUpload(d)
                }
            },_onFrameSuccess: function(d, f) {
                try {
                    var c = $(f.statusText).text()
                } catch (d) {
                }
                this.loadCBIRPage(c)
            },_onFrameError: function() {
                this.loadCBIRPage()
            },getFile: function(c) {
                if (c) {
                    if (c.target && c.target.files) {
                        return c.target.files[0]
                    } else {
                        if (c.dataTransfer && c.dataTransfer.files) {
                            return c.dataTransfer.files[0]
                        }
                    }
                } else {
                    if (this.file && this.file.get(0).files) {
                        return this.file.get(0).files[0]
                    }
                }
            },getURL: function() {
                return this.cbirSearchInput.val() || this.normalSearchInput.val()
            },showError: function(c) {
                return this.setMod(this.elem("message").text(this.params[c]), "visible", "yes")
            },hideError: function() {
                return this.delMod(this.elem("message"), "visible")
            },toggleStroke: function(c) {
                return this.setMod(this.elem("dragzone"), "hover", c ? "yes" : "")
            },validateURL: function(c) {
                c.indexOf("http") && (c = "http://" + c);
                return $.url.isValid(c)
            },validateFile: function(c) {
                if (!this.isValidFile(c)) {
                    this.showError("fileTypeError");
                    return false
                }
                if (this.isValidFileSize(c)) {
                    return true
                } else {
                    this.showError("fileSizeUploadError");
                    return false
                }
            },showUploader: function(c) {
                this.normalSearchInput.showUploader(c);
                return this
            },hideUploader: function() {
                this.normalSearchInput.hideUploader();
                return this.hideError()
            },disableDragandrop: function() {
                this.elem("drag-message").hide();
                this.setMod(this.elem("dragzone"), "disabled", "yes");
                return this
            },loadCBIRPage: function(e) {
                var c = $.url.joinLink(global.buildSearchLink(), e), f = $.url.getParam(c, "cbir_id"), d = $.url.getParam("cbir_id");
                if (f) {
                    this.hideUploader();
                    if (f !== d) {
                        b = "";
                        BEM.blocks["i-location"].get().change({block: "b-page_type_cbir",url: $.url.delParam(c, "from")})
                    } else {
                        this._pageSignalChannel.trigger("load:end")
                    }
                } else {
                    this.showError("fileUploadError");
                    this._pageSignalChannel.trigger("load:end")
                }
                this.clearFileInput()
            },clearFileInput: function() {
                if ($.browser.msie) {
                    this.file.replaceWith(this.file = this.file.clone(true))
                } else {
                    this.file.val("")
                }
            },isValidFile: function(c) {
                return c && (/image.*/).test(c.type)
            },isValidFileSize: function(c) {
                return c.size <= 8 * 1024 * 1024
            },isCBIRRequest: function() {
                return this.__self.isRequestRunning || $.url.isValid(this.normalSearchInput.val())
            },_isExcessSearch: function() {
                return this.getURL() === "" && this._page.hasMod("type", "cbir")
            },changeRequestStatus: function(c) {
                this.__self.changeRequestStatus(true)
            },uploadFile: function(c) {
                var d = new FormData;
                this.changeRequestStatus(true);
                d.append("upfile", c);
                d.append("format", "json");
                d.append("rpt", "imagecbir");
                d.append("request", JSON.stringify([{block: "b-page_type_cbir:link"}]));
                this._pageSignalChannel.trigger("load:start");
                $.ajax({type: "post",url: global.buildSearchLink(this.queryArgs),data: d,dataType: "json",context: this,cache: false,contentType: false,processData: false,success: function(g) {
                    try {
                        var f = g["b-page_type_cbir:link"].params.url
                    } catch (h) {
                    }
                    this.loadCBIRPage(f)
                },error: function() {
                    this.loadCBIRPage()
                }});
                return false
            },uploadURL: function(e) {
                var f, c = new Image, d = false, h, g = this;
                f = $.extend({img_url: encodeURIComponent(e)}, this.queryArgs);
                c.onload = function() {
                    if (d) {
                        return
                    }
                    clearTimeout(h);
                    d = true;
                    g.changeRequestStatus(true);
                    b = e;
                    g.hideUploader();
                    BEM.blocks["i-location"].get().change({block: "b-page_type_cbir",url: global.buildSearchLink(f)})
                };
                c.onerror = function() {
                    d = true;
                    clearTimeout(h);
                    g.showUploader(e);
                    g.showError("imgUploadError");
                    g._pageSignalChannel.trigger("load:end")
                };
                h = setTimeout(function() {
                    c.onerror()
                }, 300000);
                this._pageSignalChannel.trigger("load:start");
                c.src = e;
                c.complete && c.onload();
                return false
            },frameUpload: function(c) {
                this._pageSignalChannel.trigger("load:start");
                return BEM.create("i-request_type_ajax", {url: global.buildSearchLink(this.queryArgs),type: "iframe",dataType: "html",file: c.target,cache: false,paramsToSettings: ["file", "cache"],data: $.extend({from: "cbirFrame",request: JSON.stringify([{block: "b-page_type_cbir:link"}])}, this.queryArgs),callbackCtx: this}).get({}, function() {
                    this.trigger("frame_success", arguments[2])
                }, function() {
                    this.trigger("frame_error", arguments)
                });
                return this
            },upload: function(c, d) {
                if (c && this.validateURL(c)) {
                    if (b === c) {
                        return
                    }
                    this.uploadURL(c);
                    return
                }
                if (this.validateFile(d)) {
                    this.uploadFile(d)
                } else {
                    this.clearFileInput()
                }
            }}, {changeRequestStatus: function(c) {
                this.isRequestRunning = !!c
            },onImageDragStart: function(f) {
                var d = f.originalEvent.dataTransfer, c = $(f.currentTarget).find("img"), g;
                if (d && c.length > 0) {
                    g = c.attr("src");
                    !g.indexOf("//") && (g = location.protocol + g);
                    d.setData("text", g)
                }
            },live: function() {
                if (!a) {
                    return
                }
                this.liveBindTo("dragzone", "dragenter dragover dragleave", function(c) {
                    this._onDrag(c);
                    return false
                }).liveBindTo("dragzone", "drop", function(c) {
                        this._onDrop(c);
                        return false
                    });
                $("body").on("dragstart", "a", this.onImageDragStart)
            }})
        }())
    }
    if (_ycssjs("mSs9Pw0MV8PPnR45xLmso7E51+k")) {
        BEM.DOM.decl({name: "b-form-input",modName: "cbir",modVal: "url"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.search = this.findBlockOutside("b-search");
            this.bindTo("keydown", function(a) {
                if (a.keyCode == 13) {
                    this.search.domElem.trigger("submit")
                }
            });
            this.toggleMod(this.elem("hint-wrap"), "visibility", "visible", "hidden", this._isPlaceholderEmulated)
        },focused: function() {
            this._isPlaceholderEmulated && this.elem("hint").length && this._updateHint()
        }},_updateHint: function() {
            this._isPlaceholderEmulated && this.toggleMod(this.elem("hint-wrap"), "visibility", "visible", !this.val())
        }})
    }
    if (_ycssjs("nszdks5fw5Ja1+XTCYOOXWAiE1w")) {
        BEM.DOM.decl({name: "b-form-input",modName: "cbir",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            if (global.ua.isOld) {
                return
            }
            this.findBlocks().bindEvents();
            this.setMod(this.clear, "cbir", "enable");
            this.un("change", this._updateHint)
        },focused: function(c, a) {
            this.__base.apply(this, arguments);
            var d = a === "yes", b = this.findElem("cbirintent");
            if (d) {
                this.setMod(b, "visibility", "hidden")
            } else {
                if (this.val() === "" && this.page.hasMod("type", "cbir")) {
                    this.setMod(b, "visibility", "visible")
                }
            }
        }},_onHideUploader: function() {
            this.delMod("cbir-visible");
            this._preventRequest = false;
            BEM.blocks["b-cbir"].changeRequestStatus(false)
        },findBlocks: function() {
            this.__base.apply(this, arguments);
            this.messagePopup = this.findBlockOn("cbir-tooltip", "b-popupa");
            this.cbirUploader = this.findBlockOn("cbir-uploader", "b-popupa");
            this.cbir = this.findBlockInside("cbir-uploader", "b-cbir");
            this.cbirUrl = this.findBlockOutside("b-page").findBlockInside({block: "b-form-input",modName: "cbir",modVal: "url"}).elem("input");
            this.container = this.elem("cbir");
            this.clear = this.elem("clear");
            this.page = this.findBlockOutside("b-page");
            return this
        },hideUploader: function() {
            this.cbirUploader.hide()
        },showUploader: function(a) {
            this.val("");
            this.cbirUploader.elem("content").css("width", this.domElem.width() - 2);
            if (a) {
                this.cbirUrl.val(a);
                this.cbirUrl.focus();
                setTimeout(function() {
                    this._updateHint()
                }, 50)
            }
            this.cbirUploader.show(this.domElem);
            BEM.blocks["b-cbir"].changeRequestStatus(true);
            this._preventRequest = true;
            return this
        },destruct: function() {
            this.__base.apply(this, arguments);
            this.__self.un("change", this._onChangeValueHandler, this);
            BEM.blocks["i-popup"].un("hide", this._onHideUploader, this).un("outside-click", this._onOutsideClick, this);
            this.messagePopup && this.messagePopup.destruct();
            this.cbirUploader && this.cbirUploader.destruct()
        },hideUploader: function() {
            this.cbirUploader && this.cbirUploader.hide()
        },bindEvents: function() {
            this.__base.apply(this, arguments);
            this.bindTo("cbir", "mouseover", this._onMouseOver).bindTo("cbir", "mouseleave", this._onMouseOut).bindTo("cbir", "leftclick", this._onClick);
            this.__self.on("change", this._onChangeValueHandler, this);
            BEM.blocks["i-popup"].on("hide", this._onHideUploader, this).on("outside-click", this._onOutsideClick, this);
            return this
        },_onOutsideClick: function(b, a) {
            b.block === this.cbirUploader && !$(a.domEvent.target).closest(".b-form-button_search_yes").length && BEM.blocks["b-cbir"].changeRequestStatus(false)
        },_onChangeValueHandler: function() {
            this.setMod(this.elem("cbirintent"), "visibility", "hidden")
        },_onMouseOver: function() {
            !this.cbirUploader.isShowed() && this.messagePopup.show(this.container)
        },_onMouseOut: function() {
            this.messagePopup.hide();
            return this
        },_onClick: function() {
            this._onMouseOut().trigger("showUploader").setMod("cbir-visible", "yes").showUploader()
        }})
    }
    if (_ycssjs("+5OaGcZCT2oB8vrrKGL0yTSukLM")) {
        BEM.DOM.decl({block: "i-form-widget",modName: "type",modVal: "radio"}, {onSetMod: {js: function() {
            this.mix = this.findBlockOn(this.params.block);
            this.trigger("change")
        }},val: function(a) {
            if (typeof a === "undefined") {
                return this.mix.findElem("item", "checked", "yes").find("input").val() || ""
            } else {
                this.elem("radio").each(function() {
                    var c = $(this), b = c.find("input");
                    if (b.val() === a) {
                        b.click();
                        return false
                    }
                });
                return this
            }
        }}, {live: function() {
            this.liveBindTo("radio", "leftclick", function(a) {
                !a.target.disabled && this.trigger("change")
            });
            return false
        }})
    }
    if (_ycssjs("P34eO07f+Qya6V1gQFczPzRh7LE")) {
        BEM.DOM.decl("b-search-filter", {onSetMod: {js: function() {
            this._setInputs()
        },state: function(b, a) {
            this._setInputs(a)._form.submit()
        }},_fillSearchInput: function() {
            var a = this.findBlockOutside("b-search").findBlockInside("input", "b-form-input");
            a.appendInset(BEM.HTML.build({block: "b-search-filter",mods: this.getMods(),mix: [{block: "b-search-filter",elem: "box"}],js: {uniqId: this.params.uniqId},content: this._getContent()}));
            a.on("clear", function() {
                var b = this;
                a.un("clear");
                $.each(b._getState(b.getMods().state), function(d, c) {
                    b._getInput(d).attr("disabled", true).val("")
                });
                this.getMod("js") && this._removeFromInput()
            }, this);
            this.dropElemCache();
            return this
        },_removeFromInput: function() {
            this._input || (this._input = this.findBlockOutside("b-form-input"));
            if (this._input) {
                this._input.removeInset(this.elem("box"), true);
                this.delMod("state").dropElemCache()
            }
        },_getContent: function() {
            return {elem: "inptok",state: this.getMod("state"),text: this._getText()}
        },_getUnderContent: function() {
            return ""
        },_getText: function() {
            return ""
        },_getInput: function(c) {
            var a = this._inputs || (this._inputs = {}), b = a[c] || this._form.find('[class!="inited"][name="' + c + '"]');
            b.length || (b = $('<input class="inited" name="' + c + '" type="hidden"/>').appendTo(this._form));
            return a[c] = b
        },_setInputs: function(a) {
            var b = this;
            b._form || (b._form = b.domElem.eq(0).closest("form"));
            $.each(b._getState(a), function(d, c) {
                b._getInput(d).attr("disabled", !c).val(c)
            });
            return b
        },_getState: function(a) {
            return {}
        },_makePopup: function() {
            return {block: "b-popupa",mix: [{block: "b-search-filter",elem: "popup"}, {block: "b-search-filter",mods: this.getMods(),js: {uniqId: this.params.uniqId}}],content: [{elem: "tail"}, {elem: "content",content: this._getPopupContent()}]}
        },_getPopupContent: function() {
            return ""
        },_toggle: function() {
            return ""
        }}, {live: function() {
            this.liveBindTo("switcher", "leftclick", function(a) {
                if (this.getMod(a.data.domElem, "type")) {
                    this.setMod("state", this.getMod(a.data.domElem, "type"));
                    a.preventDefault()
                }
            }).liveBindTo("text", "leftclick", function(a) {
                    this.singleValue || this._toggle();
                    a.preventDefault()
                });
            return false
        }});
        BEM.HTML.decl("b-search-filter", {onBlock: function(a) {
            a.tag("span").js(true)
        },onElem: {under: function(a) {
            a.tag("span").content(a.param("jsBlock")._getUnderContent())
        },inptok: function(a) {
            a.tag("span").content({elem: "inner",tag: "span",content: [{elem: "text",tag: "span",content: a.param("text")}, {elem: "switcher",mods: {type: "all"},mix: [{block: "b-search-filter",elem: "delete"}],content: "?"}]})
        },popup: function(c) {
            var a = c.param("jsBlock");
            c.attr("style", "display:none").param("content", {block: "b-popupa",mix: [{block: "b-search-filter",elem: "popup"}, {block: "b-search-filter",mods: a.getMods(),js: {uniqId: a.params.uniqId}}],content: [{elem: "tail"}, {elem: "content",content: a._getPopupContent()}]})
        },switcher: function(b) {
            var a = b.param("state") == b.mod("type");
            b.content([b.param("label"), a ? " ?" : ""]);
            a ? b.tag("span").mod("state", "current") : b.tag("a").attr("href", "")
        },box: function(a) {
            a.tag("span")
        }}})
    }
    if (_ycssjs("MgNSF7kb4qh+bl/b1RsXiDShV30")) {
        BEM.DOM.decl({name: "b-search-filter",modName: "type",modVal: "input"}, {onSetMod: {js: function() {
            this._widget = this.findBlockInside(this.params.widget || "b-form-input").on("change", this._onChange, this);
            (value = this._widget.val()) && this.setMod("state", value)
        },state: function(b, a) {
            if (a == "all" || a == "") {
                this._removeFromInput();
                this._hasToken = false;
                this._widget.val("")
            } else {
                if (!this._hasToken) {
                    this._hasToken = true;
                    this._fillSearchInput()
                } else {
                    this.elem("text").text(this._getText())
                }
            }
        }},_getText: function() {
            return this.params.filters && this.params.filters[this._widget.val()] || this._widget.val()
        },_onChange: function(a) {
            this.setMod("state", this._widget.val())
        }})
    }
    if (_ycssjs("AcX7yMrmkYfu1A4N9fYJOJvu+a8")) {
        BEM.DOM.decl("b-form-input", {}, {leftClickHandler: function() {
            this._preventRequest = true;
            this.elem("cbirintent").hide();
            this.delMod(this.elem("clear"), "visibility").delMod(this.elem("clear"), "type").delMod(this.elem("input"), "cbirintent");
            this.channel("input:signal").trigger("clear");
            BEM.blocks["i-location"].get().change({url: "/"})
        },live: function() {
            this.liveBindTo("cbir-clear", "leftclick", this.leftClickHandler).liveBindTo({elem: "clear",modName: "type",modVal: "cbir"}, "leftclick", this.leftClickHandler);
            return false
        }})
    }
    if (_ycssjs("zsSXeVUV+Mz7WaTDFlSwbHYqG/c")) {
        (function(b) {
            var d = BEM.HTML, a = BEM.DOM, c;
            b(function() {
                b(window).bind("focus", function() {
                    c = document.activeElement
                })
            });
            a.decl({name: "b-form-input",modName: "autocomplete",modVal: "yes"}, {onSetMod: {js: function() {
                var f = this;
                f.params.foot && (f.foot = f.params.foot);
                f._preventRequest = true;
                f._preventPopupShow = false;
                f._isPopupShown = false;
                f.__base.apply(f, arguments);
                f._userVal = f.val();
                var e = f._focused;
                e && f.delMod("focused");
                f.elem("input").attr("autocomplete", "off");
                f._preventRequest = false;
                e && f.setMod("focused", "yes");
                f._items = [];
                f._curItemIndex = -1;
                f._doRequest = b.debounce(f._doRequest, f.params.debounceDelay)
            },focused: {yes: function() {
                this.__base();
                var e = this.params.showListOnFocus ? this._onChange() : this._onChange;
                this.on("change", e)
            },"": function() {
                this.__base();
                this.un("change", this._onChange)._preventHide || this._getPopup().hide()
            }}},onElemSetMod: {popup: {fixed: {yes: function() {
                this._isPopupShown && this.afterCurrentEvent(function() {
                    this._updatePopupPos()
                })
            },"": function() {
                this._isPopupShown && this.afterCurrentEvent(function() {
                    this._updatePopupPos()
                })
            }}}},getDataprovider: function() {
                var e = this.params.dataprovider.url;
                return this._dataprovider || (this._dataprovider = BEM.create(this.params.dataprovider.name || this.__self.getName() + "__dataprovider", b.extend(this.params.dataprovider, {url: e,callbackCtx: this})))
            },_onChange: function() {
                c === this.elem("input")[0] ? c = null : this._preventRequest || this._doRequest();
                return this._onChange
            },_onKeyDown: function(l) {
                var m = l.keyCode == 38 || l.keyCode == 40;
                if (m && !l.shiftKey) {
                    l.preventDefault();
                    var f = this._items.length, h = false;
                    if (f) {
                        var k = l.keyCode - 39, g = this._curItemIndex, j = 0;
                        do {
                            h = ((g == 0 && k == -1) || (g + k >= f)) && this._onLeaveItem(this._items[g], true);
                            g += k;
                            g = g < 0 ? f - 1 : g >= f ? 0 : g
                        } while (!h && this._onEnterItem(this._items[g], true) === false && ++j < f)
                    }
                }
            },_onKeyPress: function(f) {
                if (f.keyCode == 13) {
                    if (this._curItemIndex > -1 && this._isCurItemEnteredByKeyboard) {
                        f.preventDefault();
                        this._onSelectItem(this._items[this._curItemIndex], true)
                    }
                    this._getPopup().hide()
                }
            },_getHiddenPopup: function() {
                this._preventRequest || this._focused && !this._isPopupShown && this._doRequest()
            },_getPopup: function() {
                var h = this;
                if (!h._popup) {
                    var e = (b.browser.opera && b.browser.version < 12.1) ? "keypress" : "keydown", g = h.__self.getName(), f = [{elem: "items",tag: "ul",mix: [{block: g,elem: "popup-items"}]}, {block: "b-form-input",elem: "shadow",tag: "i"}];
                    h._hasPopupFade() && f.push({block: g,elem: "fade"});
                    h._popup = b(d.build({block: "i-popup",mix: [{block: g,elem: "popup",mods: h.params.popupMods,js: {uniqId: h._uniqId}}],content: f})).bem("i-popup").on({show: function() {
                        h.trigger("popup-shown").bindTo("keypress", h._onKeyPress).bindTo(e, h._onKeyDown).bindToWin("resize", h._updatePopupPos)._isPopupShown = true
                    },"outside-click": function(j, i) {
                        h.containsDomElem(b(i.domEvent.target)) && j.preventDefault()
                    },hide: function() {
                        h.trigger("popup-hidden").unbindFrom("keypress " + e).unbindFromWin("resize").bindTo("click", h._getHiddenPopup)._curItemIndex = -1;
                        h._isPopupShown = false
                    }});
                    b.each({mouseover: h._onEnterItem,mouseout: h._onLeaveItem,mousedown: h._onSelectItem,mouseup: h._onItemMouseUp}, function(j, i) {
                        BEM.blocks["b-autocomplete-item"].on(h._popup.domElem, j, function(k) {
                            i.call(h, k.block)
                        })
                    });
                    a.init(h._popup.domElem)
                }
                return h._popup
            },getPopup: function() {
                return this._getPopup()
            },_hasPopupFade: function() {
                return (this.params.popupMods || {}).fade == "yes"
            },_updatePopupPos: function() {
                var f = this.elem("box"), e = f.offset();
                e.top += f.outerHeight();
                this.hasMod(this.elem("popup"), "fixed") && (e.top -= a.win.scrollTop());
                this._hasPopupFade() && (e.width = f.outerWidth());
                this._preventPopupShow || this._getPopup().show(e)
            },_onEnterItem: function(g, h) {
                if (g.hasMod("enterable", "no")) {
                    return false
                }
                var e = this._items, f = this._curItemIndex;
                f > -1 && e[f].delMod("hovered");
                f = this._getItemIndex(g);
                f > -1 && e[f].setMod("hovered", "yes");
                this._curItemIndex = f;
                this._isCurItemEnteredByKeyboard = !!h;
                if (h && this.params.updateOnEnter) {
                    this._preventRequest = true;
                    this.val(g.enter() !== false ? g.val() : this._userVal, {source: "autocomplete",itemIndex: this._curItemIndex}).del("_preventRequest")
                }
            },_onLeaveItem: function(f, g) {
                var e = this._curItemIndex;
                if (e > -1 && e == this._getItemIndex(f)) {
                    this._items[e].delMod("hovered");
                    this._curItemIndex = -1
                }
                g && this.val(this._userVal);
                return true
            },_onSelectItem: function(f, h) {
                var e = f.select(h || false), i = (typeof e == "object") ? e.needUpdate : e !== false, g = (typeof e == "object") && e.needEvent;
                this._preventRequest = true;
                this._preventBlur = true;
                i && this.val(this._userVal = f.val(), {source: "autocomplete",itemIndex: this._curItemIndex});
                if (h) {
                    this.del("_preventRequest")
                } else {
                    i || (this._preventHide = true);
                    this.afterCurrentEvent(function() {
                        this.setMod("focused", "yes").del("_preventRequest", "_preventHide")
                    })
                }
                (i || g) && this.trigger("select", {item: f,byKeyboard: h})
            },_onItemMouseUp: function() {
                this.del("_preventBlur")._getPopup().hide()
            },_getItemIndex: function(e) {
                return b.inArray(e, this._items)
            },_doRequest: function() {
                var e = this;
                e.enablePopup();
                e._userVal = e.val();
                e.trigger("data-requested").getDataprovider().get(e.val(), function(h) {
                    e.trigger("data-received", h);
                    var f = e._getPopup(), g = h.items || h;
                    e.foot && g.length && (b.inArray(e.foot, g) == -1) && g.push(e.foot);
                    if (g.length) {
                        e._curItemIndex = -1;
                        a.update(f.elem("items"), e._buildItemsHtml(g), function() {
                            e._updatePopupPos();
                            e._items = f.findBlocksInside("b-autocomplete-item");
                            e.trigger("update-items")
                        })
                    } else {
                        f.hide()
                    }
                })
            },_buildItemsHtml: function(e) {
                var f = this;
                return d.build(b.map(e, function(j, h) {
                    var k = {block: "b-autocomplete-item",data: j,mods: {type: b.isArray(j) ? j[0] : "text"},suggestVersion: f.params.dataprovider.version}, g;
                    (b.isArray(j)) && b.isPlainObject(g = j.concat().pop()) && b.extend(k, g);
                    return k
                }))
            },setFoot: function(e) {
                return this.foot = e
            },getDefaultParams: function() {
                return b.extend(this.__base(), {updateOnEnter: true,debounceDelay: 50,showListOnFocus: true})
            },enablePopup: function() {
                this._preventPopupShow = false
            },disablePopup: function() {
                this._preventPopupShow = true
            }})
        })(jQuery)
    }
    if (_ycssjs("cWt2AMdPSTgv+a1hWG37zYa5e2Q")) {
        BEM.DOM.decl({name: "b-form-input",modName: "autocomplete",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].on("change", this._onPageChange, this)
        }},_getHiddenPopup: function(a) {
            if (!$(a.target).is(".b-autocomplete-item")) {
                this.__base.apply(this, arguments)
            }
        },destruct: function() {
            var a = this.elem("popup");
            a.length && BEM.DOM.destruct(a);
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].un("change", this._onPageChange, this)
        },_onPageChange: function(b, a) {
            /(search|similar|copy)/.test(a.page) && this.delMod("focused");
            setTimeout(this.changeThis(function() {
                this._getPopup().hide()
            }), 0)
        }})
    }
    if (_ycssjs("Yrt1MxDQZy6riJq6CPyUg6D6OCU")) {
        BEM.decl({name: "b-form-input__dataprovider",baseBlock: "i-request_type_ajax"}, {get: function(a, b) {
            return this.__base({part: a}, function(c) {
                b.call(this, {items: c[1],metainfo: c[2]})
            })
        }})
    }
    if (_ycssjs("0GONDpKNbRVwySwnF1xdkXeynss")) {
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "hl"}, {onBlock: function(a) {
            a.content($.map(a.param("data").slice(1), function(b) {
                return $.isArray(b) ? {tag: "span",elem: "highlight",content: b[0]} : b
            }))
        }})
    }
    if (_ycssjs("JnKlvV+VyiEZ5zwXMOyXhcXZ3jg")) {
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "fact"}, {onBlock: function(a) {
            var b = a.param("data").slice(1);
            a.content([{tag: "span",elem: "text",content: BEM.blocks["i-common__string"].highlight(b[0], a.param("hl"))}, {tag: "span",elem: "fact",content: [" — ", BEM.blocks["i-common__string"].escapeHTML(b[1])]}])
        }})
    }
    if (_ycssjs("OLz9SszfCv1S1GFZsu/sg082oIg")) {
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "nah"}, {onBlock: function(a) {
            a.content(a.param("data")[1])
        }})
    }
    if (_ycssjs("OcqW8OZRkrg6aJAr0dR9UhVnWI0")) {
        BEM.DOM.decl({block: "b-autocomplete-item",modName: "type",modVal: "href"}, {url: function() {
            return this.findBlockInside("b-link").domElem.attr("href")
        },enter: function() {
            return false
        },select: function(a) {
            a && (location.href = this.url());
            return false
        }});
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "href"}, {onBlock: function(a) {
            var b = a.param("data").slice(1);
            a.content({block: "b-link",content: b[0],url: b[1]})
        }})
    }
    if (_ycssjs("U/lthfAJf0R1cRy5oB1efofKdmE")) {
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "weather"}, {onBlock: function(a) {
            var b = a.param("data").slice(1), c = BEM.blocks["i-common__string"].escapeHTML;
            a.content([{tag: "span",elem: "text",content: c(b[0])}, {tag: "i",elem: "icon",mods: {weather: b[2].replace("-", "minus-").replace("+", "plus-").replace(/_/g, "-")}}, {tag: "span",elem: "value",content: c(b[1].replace("-", "&ndash;"))}])
        }})
    }
    if (_ycssjs("C2vEkBwcFD9MxWlkbLl7CiBKQCQ")) {
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "traffic"}, {onBlock: function(a) {
            var b = a.param("data").slice(1), c = BEM.blocks["i-common__string"].escapeHTML;
            a.content([{tag: "span",elem: "text",content: c(b[0])}, {tag: "i",elem: "icon",mods: {traffic: b[2]}}, {tag: "span",elem: "value",content: c(b[1])}])
        }})
    }
    if (_ycssjs("PvVYid7g9Wrf+ZZ0B8o6hk2+jzg")) {
        BEM.DOM.decl({block: "b-autocomplete-item",modName: "type",modVal: "foot"}, {select: function() {
            return false
        }});
        BEM.HTML.decl({block: "b-autocomplete-item",modName: "type",modVal: "foot"}, {onBlock: function(a) {
            a.mod("enterable", "no").content($.map(a.param("data").slice(1), function(b) {
                return $.isArray(b) ? {tag: "span",elem: "foot",content: b[0]} : b
            }))
        }})
    }
    if (_ycssjs("3/pVrqqQRtrzFnv0YmwKIKOtXs4")) {
        BEM.DOM.decl("b-form-input", {_onClearClick: function() {
            this.trigger("clear");
            this.removeInsets && this.removeInsets();
            this.__base()
        }})
    }
    if (_ycssjs("HAqCZ+ciNVcSeKFTnYli4cylBVM")) {
        BEM.DOM.decl({name: "b-form-input",modName: "has-clear",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.on("change", this._updateClear)._updateClear()
        }},_onClearClick: function() {
            this.trigger("clear");
            this.removeInsets && this.removeInsets();
            this.val("").setMod("focused", "yes")
        },_updateClear: function() {
            return this.toggleMod(this.elem("clear"), "visibility", "visible", "", !!this._val)
        }}, {live: function() {
            this.__base();
            this.liveBindTo("clear", "leftclick", function() {
                this._onClearClick()
            });
            return false
        }})
    }
    if (_ycssjs("EF9SPOfPCb++GiM6c720pOCSGX8")) {
        BEM.DOM.decl({block: "b-form-input",modName: "has-clear",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.on("change", this._updateClear)._updateClear()
        }},_updateClear: function() {
            var c = this.hasMod(this.elem("cbirintent"), "visibility", "visible"), b = !!this._val, a = this.elem("clear", "search", "clear"), d = this.elem("clear", "cbir-url", "clear");
            this.toggleMod(a, "visibility", "visible", "", b || c).toggleMod(d, "visibility", "visible", "", b).toggleMod(a, "type", "cbir", "", c)
        }})
    }
    if (_ycssjs("FZpEEusp3gShvZDl5/9W9IuVxtU")) {
        (function() {
            BEM.DOM.decl("i-menu", {onElemSetMod: {item: {state: {current: function(c, d, a, e) {
                if (e == "disabled") {
                    return false
                }
                var b = this.elem("item", "state", "current");
                this.delMod(b, "state").trigger("current", {prev: b,current: c})
            }}}},onItemSelectorClick: function(b) {
                var a = this._getItemByEvent(b);
                this.setMod(a, "state", "current")
            },_getItemByEvent: function(a) {
                return a.data.domElem.closest(this.buildSelector("item"))
            }}, {live: function() {
                this.liveBindTo("item-selector", "leftclick", function(a) {
                    this.onItemSelectorClick(a)
                })
            }})
        })()
    }
    if (_ycssjs("1ZzeqhNlJkeOFr7a0Rrou1wiBfw")) {
        (function() {
            BEM.DOM.decl({name: "b-menu-horiz",baseBlock: "i-menu"})
        })()
    }
    if (_ycssjs("DrhEk1KuKxAVd0nw/Hsg7fk0X+8")) {
        BEM.DOM.decl("b-related", {onSetMod: {js: function() {
            this.search = this.findBlockOutside("b-search");
            this.bindTo("link", "click", this._onRelatedClick)
        }},_onRelatedClick: function(a) {
            this.search.findBlockInside("b-form-input").val(this.elemParams($(a.currentTarget)).text);
            this.search._onSubmit(a)
        }})
    }
    if (_ycssjs("Gd2LoAgCcIhfXCwkBVSxlpOSr5Y")) {
        (function() {
            BEM.DOM.decl("b-mooa", {onSetMod: {js: function() {
                var d = this, b = d.params.checker, c = function() {
                    d._show()
                };
                if ($.isFunction(b)) {
                    b.call(d, c)
                } else {
                    if (typeof b === "string") {
                        if (!a[b]) {
                            throw ('b-mooa: undefined checker "' + b + '"')
                        }
                        a[b].call(d, c)
                    } else {
                        if (b) {
                            c()
                        }
                    }
                }
            },loading: {progress: function() {
                var b = this;
                BEM.blocks["i-loader"].load("b-mooa", b.params.bundlePath, function() {
                    b._onBundleSuccess()
                }, function() {
                    b._onBundleError()
                }, b.params.lang)
            }}},_show: function() {
                this.setMod("visibility", "visible")
            },_onOpenClick: function() {
                this.setMod("loading", "progress")
            },_onBundleError: function() {
                this.delMod("loading")
            },getDefaultParams: function() {
                return {checker: function(b) {
                    BEM.blocks["i-user-services"].get(function(c) {
                        c.sids[668] && b()
                    })
                },bundlePath: BEM.blocks["i-global"].param("lego-static-host") + "/blocks-desktop/b-mooa/_b-mooa.bembundle.js",standId: "test",apiUrl: "http://b.yandex.ru/api/1.0/",panels: [{type: "bug",title: BEM.I18N("b-mooa", "error")}, {type: "idea",title: BEM.I18N("b-mooa", "idea")}],lang: BEM.blocks["i-global"].param("lang")}
            }}, {regChecker: function(b, c) {
                a[b] = c
            },live: function() {
                this.liveBindTo("open", "leftclick", function() {
                    this._onOpenClick()
                });
                return false
            }});
            var a = {}
        })()
    }
    if (_ycssjs("RBHiUEGUf7Ys26X+qKbKxwmEoVY")) {
        BEM.decl("i-user-services", {}, {get: function(a) {
            this._data ? a(this._data) : this._get(a)
        },getApiUrl: function() {
            return BEM.blocks["i-global"].param("pass-host") + "/services?callback=?"
        },_callbacks: [],_get: function(a) {
            var b = this;
            b._callbacks.push(a);
            b._callbacks.length == 1 && $.getJSON(b.getApiUrl(), {locale: BEM.blocks["i-global"].param("lang"),login: "yes","current-login": BEM.blocks["i-global"].param("login"),yu: $.cookie("yandexuid")}, function(c) {
                b._data = c;
                $.each(b._callbacks, function() {
                    this(c)
                });
                b._callbacks.length = 0
            })
        }})
    }
    if (_ycssjs("VfKS6NpackTtFZvamShaNnENq1I")) {
        (function(d) {
            var c, b = {}, a = BEM.decl("i-loader", {}, {load: function(n, f, k, h, g) {
                if (typeof f != "string") {
                    g = h;
                    h = k;
                    k = f;
                    f = n
                }
                if (g === undefined && h !== undefined && typeof h != "function") {
                    g = h;
                    h = undefined
                }
                var o = b[n], i = this;
                if (o) {
                    if (o.successFns) {
                        o.successFns.push(k);
                        h && o.errorFns.push(h)
                    } else {
                        setTimeout(function() {
                            k()
                        }, 0)
                    }
                    return
                }
                var m = document, l = m.createElement("script"), j = function() {
                    a._error(n)
                }, e = f.split(".");
                if (d.browser.msie && d.browser.version <= 8) {
                    e.splice(-1, 0, "ie")
                }
                if (g) {
                    e.splice(-1, 0, typeof g == "string" ? g : BEM.blocks["i-global"].param("lang"))
                }
                l.type = "text/javascript";
                l.charset = "utf-8";
                l.src = e.join(".");
                l.onerror = j;
                setTimeout(function() {
                    (c || (c = d("head")[0])).insertBefore(l, c.firstChild)
                }, 0);
                b[n] = {successFns: [k],errorFns: h ? [h] : [],timer: setTimeout(j, 20000)}
            },loaded: function(f) {
                var j = b[f.id];
                clearTimeout(j.timer);
                f.js && f.js();
                f.css && a._appendCss(f.css);
                if (f.hcss) {
                    var i = [], e = window._ycssjs;
                    f.hcss.forEach(function(k) {
                        if (e) {
                            if (k[0] in e) {
                                return
                            }
                            e(k[0])
                        }
                        i.push(k[1])
                    });
                    i.length && a._appendCss(i.join(""))
                }
                var g = j.successFns, h;
                while (h = g.shift()) {
                    h()
                }
                delete j.successFns
            },_error: function(f) {
                var h = b[f], e = h.errorFns, g;
                clearTimeout(h.timer);
                while (g = e.shift()) {
                    g()
                }
                delete b[f]
            },_appendCss: function(e) {
                var f = document.createElement("style");
                f.type = "text/css";
                c.insertBefore(f, c.firstChild);
                f.styleSheet ? f.styleSheet.cssText = e : f.appendChild(document.createTextNode(e))
            }})
        })(jQuery)
    }
    if (_ycssjs("MavjjMgjczpaloyOjCCHLlrGq3E")) {
        BEM.DOM.decl("b-mooa", {onSetMod: {js: function() {
            var a = this;
            this.__self.regChecker("beta", function(b) {
                BEM.blocks["i-user-services"].get(function(c) {
                    if (c.sids[669] || (c.attributes && c.attributes.staff === true && typeof c.attributes["staff-login"] === "string")) {
                        a.setMod("internal", "yes");
                        a.params.standId = "images-ya";
                        b()
                    } else {
                        if (c.sids[668]) {
                            a.params.standId = "images-b";
                            b()
                        }
                    }
                })
            });
            this.__base.apply(this, arguments)
        }}})
    }
    if (_ycssjs("zDOIncuBeDHxuZPEEBdSP7subZk")) {
        (function() {
            var c = false, a = false, b = [];
            BEM.decl("i-https", {}, {isHTTPSSupported: function() {
                return a
            },enableHTTPS: function() {
                a = true;
                var d;
                while (d = b.shift()) {
                    d()
                }
            },getHTTPSHost: function() {
                var d = BEM.blocks["i-global"].param("lego-static-host");
                if (d) {
                    if (d.indexOf("https:") == 0) {
                        return d
                    }
                    if (d.indexOf("http:") == 0) {
                        return "https" + d.substr(4)
                    }
                    if (d.indexOf("//") == 0) {
                        return "https:" + d
                    } else {
                        return "https://" + location.host + d
                    }
                } else {
                    return "https://" + location.host
                }
            },checkForHTTPS: function(d) {
                if (a) {
                    return d()
                }
                b.push(d);
                if (c) {
                    return
                }
                c = true;
                BEM.create("i-request_type_ajax", {url: this.getHTTPSHost() + "/blocks-desktop/i-https/check-https.js",dataType: "script",cache: true,paramsToSettings: ["cache"]}).get({}, function() {
                }, false, this)
            }})
        })()
    }
    if (_ycssjs("P7qjuh3P3uqYEho7RzUCI9sHcAc")) {
        (function() {
            var a = BEM.blocks["i-https"];
            BEM.DOM.decl("b-head-userinfo", {onSetMod: {js: function() {
                var b = this;
                a.checkForHTTPS(function() {
                    b._onHttps()
                })
            }},_onHttps: function() {
                var b = this.findBlockInside(this.elem("exit"), "b-link"), c = b && (b = b.domElem, b.attr("href"));
                if (c && a.isHTTPSSupported()) {
                    b.attr("href", c.replace(/^(https?:)?/, "https:"))
                }
            }})
        }())
    }
    if (_ycssjs("Ma8UBOyl3FsPn3BYch4/r8x8b6E")) {
        BEM.DOM.decl({block: "b-head-userinfo",modName: "old",modVal: "yes"}, {onSetMod: {js: function() {
            this._location = BEM.blocks["i-location"].get();
            this._bindEvents()
        }},_bindEvents: function() {
            this._location.on("change", this._onLocationChange, this);
            BEM.blocks["b-preview"].on("closed", this._onLocationChange, this)
        },destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-preview"].un("closed", this._onLocationChange, this)
        },_onLocationChange: function() {
            var b = $.url.clearHashSymbol(location.href), a = this.elem("logout"), e = this.elem("settings"), c = a.attr("href"), d = e.attr("href");
            a.attr("href", $.url.setParam(c, "retpath", b));
            e.attr("href", $.url.setParam(d, "retpath", b));
            BEM.blocks["i-global"]._params.retpath = b
        }})
    }
    if (_ycssjs("dMYkKoNM+3QAFp0JoGYJypGwKtE")) {
        (function(d, a, b) {
            var e = b.blocks["i-https"], c = b.blocks["i-global"];
            a.block["b-domik"] = function(x) {
                var g = this, t = g.find(".b-domik__social"), v = t.length && b.DOM.extractParams(t[0])["b-domik__social"].size, l = arguments.callee, n = d('<input type="hidden" name="timestamp"/>'), u = this.attr("class").match(/\bb-domik_type_(\w+)\b/)[1], f = g.find(".b-domik__button .b-form-button:first").bem("b-form-button"), j = {host: c.param("social-host"),providers: c.param("social-providers"),sprites: c.param("social-sprites")};
                if (t.length && j.host) {
                    if (j.providers && j.sprites) {
                        y(j.providers, j.sprites[v])
                    } else {
                        d.getJSON(j.host + "/providers2.jsonp?callback=?", function(A) {
                            y(A.providers, A.icon_sprites[v])
                        })
                    }
                    var z = new a.block["i-social"];
                    d(".b-domik__social-link").live("click", function(A) {
                        k();
                        d(".b-domik__social-popup").each(function() {
                            d(this).bem("b-popupa").hide()
                        });
                        z.start(function() {
                            var B = c.param("retpath");
                            (!B || top.location.href == B) ? top.location.reload() : (top.location.href = B)
                        }, function() {
                            t.removeClass("b-domik__social_loading_yes").css("height", "").find(".b-spin").bem("b-spin").delMod("progress")
                        }, {provider: b.DOM.extractParams(this)["b-domik__social-link"].provider});
                        A.preventDefault()
                    })
                }
                function y(C, B) {
                    if (!C.length) {
                        t.remove();
                        return
                    }
                    t.html(m(C, B));
                    var D = t.find(".b-dropdowna");
                    if (!D.length) {
                        return
                    }
                    b.DOM.init(D);
                    b.DOM.init(t.find(".b-spin"));
                    var E = D.bem("b-dropdowna").getPopup();
                    function A() {
                        E.pos()
                    }
                    E.on("show", function() {
                        d(window).scroll(A)
                    }).on("hide", function() {
                            d(window).unbind("scroll", A)
                        })
                }
                function m(D, C) {
                    var E = [{block: "b-domik",elem: "social-title",content: b.I18N("b-domik", "enter-with")}];
                    D = d.grep(D, function(F) {
                        return F.enabled
                    });
                    var B = d.grep(D, function(F) {
                        return F.primary
                    });
                    B = d.map(B, function(F) {
                        return {block: "b-domik",tag: "a",elem: "social-link",content: {tag: "i",elem: "social-icon",attrs: {style: 'background-image:url("' + C + '");background-position: 0px -' + (F.id - 1) * 32 + "px;"}},js: {provider: F.code},attrs: {tabIndex: 103}}
                    });
                    [].push.apply(E, B);
                    function A(I) {
                        var H = d.map(I, function(K) {
                            return {block: "b-domik",tag: "a",elem: "social-link",mods: {},attrs: {tabIndex: 103},js: {provider: K.code},content: [{tag: "i",elem: "social-icon",attrs: {style: 'background-image:url("' + C + '");background-position: 0px -' + (K.id - 1) * 32 + "px;"}}, K.display_name]}
                        });
                        H.length % 2 && (H[H.length] = "");
                        var G = [], J;
                        for (var F = 0; F < H.length; F++) {
                            F % 2 || G.push(J = {tag: "tr",content: []});
                            J.content.push({tag: "td",elem: "provider",content: H[F]})
                        }
                        return G
                    }
                    if (B.length < D.length) {
                        E.push({tag: "div",block: "b-dropdowna",js: true,content: [{elem: "switcher",tag: "span",content: {tag: "a",block: "b-link",mods: {pseudo: "yes","is-bem": "yes"},js: true,attrs: {href: b.I18N("b-domik", "passport-link"),tabIndex: 103}}}, {block: "b-popupa",js: {zIndex: "1"},tag: "div",mix: [{block: "b-dropdowna",elem: "popup"}, {block: "b-domik",elem: "social-popup",mods: {type: u}}],content: [{elem: "tail",tag: "i"}, {elem: "content",content: [{elem: "providers",tag: "table",content: A(D)}]}]}]})
                    }
                    E.push({block: "b-spin",js: true,mods: {size: u == "bigform" ? "45" : "27",theme: u == "bigform" ? "white-45" : "white-27","is-bem": "yes"},content: {block: "b-icon",tag: "img",attrs: {src: "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif"}}});
                    return b.HTML.build(E)
                }
                function k() {
                    t.css("height", t.height()).addClass("b-domik__social_loading_yes").find(".b-spin").bem("b-spin").setMod("progress", "yes")
                }
                l.isHTTPSSupported = false;
                g.append(n).submit(function() {
                    var A = g.attr("action");
                    f.setMod("disabled", "yes");
                    n.val(+new Date);
                    if (A) {
                        a.block["b-domik"].isHTTPSSupported ? /^http:/.test(A) && g.attr("action", A.replace(/^http:/, "https:")) : /^https:/.test(A) && g.attr("action", A.replace(/^https:/, "http:"))
                    }
                });
                var q = g.find("input[name=login]"), p = g.find("input[name=passwd]"), s = g.find("input[type=submit]");
                q.change(function() {
                    var A = q.val();
                    A.indexOf("@") == -1 && !(/^[a-z0-9A-Z!@#\$%\^&\*\(\)_\-\+:;\,\.]*$/i.test(A)) ? h(x && x.err_msg || b.I18N("b-domik", "wrong-keyboard-layout")) : o()
                });
                q.change();
                p.change(function() {
                    var A = p.val();
                    A.length && !(/^[0-9a-zA-Z`!@#\$%\^&\*\(\)_=\-\+\[\]\{\}:;"\,\.<>\\|\/\?]*$/i.test(A)) ? h(b.I18N("b-domik", "wrong-keyboard-layout")) : o()
                });
                p.change();
                var i;
                function h(A) {
                    !i && (i = d('<div class="b-domik__error"/>').insertAfter(g.find(".b-domik__password")));
                    i.text(A).show()
                }
                function o() {
                    i && i.hide()
                }
                l.enableHTTPS = function() {
                    l.isHTTPSSupported = true
                };
                l.checkForHTTPS = e.checkForHTTPS;
                e.checkForHTTPS(function() {
                    l.enableHTTPS()
                })
            }
        })(jQuery, window.Lego, BEM)
    }
    if (_ycssjs("5zdyswyC/X0ND8lsfo4W8kl5sG0")) {
        (function(a) {
            BEM.DOM.decl("b-domik", {onSetMod: {js: function() {
                this.bindTo("input", "keyup", this._onChange)
            }},_onChange: function(b) {
                a(b.target).trigger("change")
            }})
        }(jQuery))
    }
    if (_ycssjs("V3OWiswX1rr3kwOuzLHIzA4y9So")) {
        (function(b, a) {
            window.Lego || (window.Lego = {block: {}});
            Lego.block["i-social"] = function(e) {
                function g(l) {
                    var k = this, i = {};
                    this.url = l.startUrl + "?";
                    delete l.startUrl;
                    this.popupName = l.popupName;
                    this.yaWindow = null;
                    this.wTimer = null;
                    this.paramsDefault = l;
                    function n() {
                        var o;
                        if (!k.yaWindow) {
                            return true
                        }
                        try {
                            o = k.yaWindow.closed
                        } catch (p) {
                            o = true
                        }
                        return o
                    }
                    function m() {
                        if (n()) {
                            k.wTimer = clearInterval(k.wTimer);
                            k.onFailure({status: "error"})
                        }
                    }
                    function h(z) {
                        var C = k.popupName, t = 500, D = 280, v = Math.round(((window.opera ? window.innerWidth : screen.availWidth) - t) / 2), A = Math.round(((window.opera ? window.innerHeight : screen.availHeight) - D) / 2), q = "scrollbars=yes, resizable=1, menubar=0, toolbar=0, status=0, location=0, directories=0, left=" + v + ", top=" + A + ", width=" + t + ", height=" + D;
                        var u = {};
                        for (var y in k.paramsDefault) {
                            u[y] = k.paramsDefault[y]
                        }
                        for (var y in z) {
                            u[y] = z[y]
                        }
                        if (u.display && u.display != "popup") {
                            u.retpath = u.retnopopup || window.location.href
                        } else {
                            var B = "ddom=" + (u.ddom || (location.hostname == document.domain ? "" : document.domain));
                            if ("retnopopup" in u) {
                                delete u.retnopopup
                            }
                            u.retpath += (u.retpath.match("#") ? "&" : "#") + B
                        }
                        var o = k.url;
                        var s = [];
                        for (var x in u) {
                            s.push(encodeURIComponent(x) + "=" + encodeURIComponent(u[x]))
                        }
                        o += s.join("&");
                        if (u.display && u.display != "popup") {
                            window.location.href = o;
                            return
                        }
                        k.yaWindow = window.open(o, C, q);
                        k.yaWindow.focus();
                        if (k.yaWindow) {
                            k.wTimer = setInterval(m, 500)
                        }
                    }
                    function j() {
                        this.handlers = {onSuccess: null,onFailure: null};
                        k.wTimer = clearInterval(k.wTimer);
                        n() || k.yaWindow.close();
                        k.yaWindow = false
                    }
                    this.start = function(p, o, q) {
                        j();
                        k.handlers = {onSuccess: p,onFailure: o};
                        h(q)
                    };
                    this.onSuccess = function(p) {
                        j();
                        var o = k.handlers.onSuccess;
                        o && o.call(k, p)
                    };
                    this.onFailure = function(p) {
                        j();
                        var o = k.handlers.onFailure;
                        o && o.call(k, p)
                    }
                }
                arguments.callee.Broker = g;
                var f = a.param("id"), d = arguments.callee.defaultParams = {startUrl: a.param("social-startUrl") || a.param("social-host") + "/broker/start",retpath: a.param("social-retpath") || location.protocol + "//" + location.host + a.param("lego-path") + "/blocks-desktop/i-social/closer/i-social__closer.html",retnopopup: a.param("social-retnopopup") || false,consumer: f || "morda",popupName: "social_" + (f || "morda"),application: "",action_if_anonymous: "authorize",result_location: "fragment"}, c = arguments.callee.broker = new g(b.extend(d, e));
                return c
            }
        })(jQuery, BEM.blocks["i-global"])
    }
    if (_ycssjs("eSQWqPjFMy4dcA2Fo3nH1xIwYrc")) {
        BEM.DOM.decl({name: "b-domik",modName: "type",modVal: "popup"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            Lego.block["b-domik_type_popup"].call(this.domElem, this.params)
        }}});
        (function(c, a, b) {
            a.block["b-domik_type_popup"] = function(j) {
                var f = c(this), h = b.param("passport-host"), e;
                c(".b-head-userinfo__entry .b-link_pseudo_yes").click(function(k) {
                    k.preventDefault();
                    setTimeout(function() {
                        d()
                    }, 0)
                });
                function d(l) {
                    if (!e) {
                        i()
                    }
                    l || (l = b.param("retpath"));
                    var k = "&from=" + b.param("passport-msg") + "&retpath=" + encodeURIComponent(l);
                    f.attr("action", h + "/passport?mode=auth" + k);
                    e.find(".b-domik__register .b-domik__link").attr("href", h + "/passport?mode=" + (j.regMode || "register") + k);
                    c(document).bind("keyup.b-domik", function(m) {
                        if (m.keyCode == 27) {
                            g()
                        }
                    }).bind("click.b-domik", function(o) {
                            var n = c(o.target), m = n.parents().andSelf();
                            if (n.is("input[type=button]") || m.index(e) == -1 && !m.is(".b-popupa")) {
                                g()
                            }
                        });
                    e.show().find("input[name=login]").focus();
                    c(document).trigger("show.b-domik_type_popup")
                }
                function g() {
                    c(document).unbind(".b-domik");
                    e.hide()
                }
                function i() {
                    e = c(BEM.HTML.build({block: "b-domik",mods: {type: "popup"},js: {uniqId: j.uniqId},content: [{elem: "form",content: [{elem: "title",content: (j.title || BEM.I18N("b-domik", "title"))}, {elem: "username",content: {block: "b-form-input",id: "b-domik_popup-username",name: "login",mods: {theme: "grey",size: "m"},attrs: {tabindex: "11"},mix: [{block: "b-domik",elem: "input"}],content: [{elem: "hint-wrap",content: {elem: "hint",content: BEM.I18N("b-domik", "login")}}]}}, {elem: "password",content: {block: "b-form-input",id: "b-domik_popup-password",name: "passwd",mods: {theme: "grey",size: "m",type: "password"},attrs: {tabindex: "11"},mix: [{block: "b-domik",elem: "input"}],content: [{elem: "hint-wrap",content: {elem: "hint",content: BEM.I18N("b-domik", "password")}}, {block: "b-domik"}]}}, {elem: "permanent",content: [{block: "b-form-checkbox",mods: {theme: "grey-m",size: "m",checked: "yes"},mix: [{block: "b-domik",elem: "check"}],checkboxAttrs: {id: "b-domik_popup-permanent",name: "twoweeks",value: "yes"}}, {tag: "label",attrs: {"for": "b-domik_popup-permanent"},content: BEM.I18N("b-domik", "permanent")}, " ", {elem: "help",tag: "span",content: ["(", {block: "b-link",url: BEM.I18N("b-domik", "help-link"),attrs: {tabindex: 12},content: BEM.I18N("b-domik", "help")}, ")"]}]}, {elem: "button",content: [{block: "b-form-button",mods: {theme: "grey-m",size: "m",valign: "middle"},type: "submit",attrs: {tabindex: 11},content: BEM.I18N("b-domik", "logon")}, {block: "b-form-button",mods: {theme: "grey-m",size: "m",valign: "middle"},type: "button",attrs: {tabindex: 11},content: BEM.I18N("b-domik", "cancel")}]}, {elem: "social",js: {size: 16}}, {elem: "register",content: {block: "b-link",mix: [{block: "b-domik",elem: "link"}],url: "",attrs: {tabindex: 11},content: (j.register || BEM.I18N("b-domik", "register"))}}, {elem: "remember",content: {block: "b-link",mix: [{block: "b-domik",elem: "link"}],url: h + "/passport?mode=restore",content: BEM.I18N("b-domik", "remember")}}]}]}));
                    e.submit(function(k) {
                        k.preventDefault();
                        f.find("input[name=login]").val(e.find("input[name=login]").change().val()).end().find("input[name=passwd]").val(e.find("input[name=passwd]").change().val()).end().find("input[name=twoweeks]").attr("checked", e.find("input[name=twoweeks]").attr("checked") || false).end().append('<input type="hidden" name="timestamp" value="' + +new Date + '"/>').attr("action", a.block["b-domik"].isHTTPSSupported ? f.attr("action").replace(/^(:?http:)?\/\//, "https://") : f.attr("action")).submit()
                    });
                    a.block["b-domik"] && a.block["b-domik"].call(e);
                    BEM.DOM.append(c("body"), e)
                }
                arguments.callee.login = function() {
                    var k = arguments;
                    setTimeout(function() {
                        d.apply(this, k)
                    }, 0)
                }
            }
        })(jQuery, window.Lego, BEM.blocks["i-global"]);
        BEM.HTML.decl({block: "b-domik",modName: "type",modVal: "popup"}, {onBlock: function(a) {
            a.tag("form").attr("action", "post").wrapContent([{elem: "roof"}, {elem: "shadow",content: a.content()}, {elem: "under"}])
        },onElem: {roof: function(a) {
            a.tag("i")
        },shadow: function(a) {
            a.tag("table").wrapContent([{tag: "tr",content: [{elem: "shadow__lt",tag: "td",content: "&nbsp;"}, {elem: "shadow__t",tag: "td"}, {elem: "shadow__rt",tag: "td",content: "&nbsp;"}]}, {tag: "tr",content: [{elem: "shadow__l",tag: "td",content: "&nbsp;"}, {elem: "shadow__m",tag: "td",content: a.content()}, {elem: "shadow__r",tag: "td",content: "&nbsp;"}, ]}, {tag: "tr",content: [{elem: "shadow__lb",tag: "td",content: "&nbsp;"}, {elem: "shadow__b",tag: "td"}, {elem: "shadow__rb",tag: "td",content: "&nbsp;"}]}])
        },under: function(a) {
            a.tag("iframe").attr("frameborder", 0)
        }}})
    }
    if (_ycssjs("byjIpvrFwt6NCqX1mf52SOWdX1k")) {
        (function() {
            BEM.HTML.decl({block: "b-form-input",modName: "type",modVal: "password"}, {onElem: {input: function(a) {
                a.tag("input").attr("type", "password")
            }}})
        }())
    }
    if (_ycssjs("isbjkOTUTCGCU0Jkr08ttKFTsVo")) {
        BEM.HTML.decl("b-link", {onBlock: function(a) {
            a.tag("a").attr("href", a.param("url"))
        }})
    }
    if (_ycssjs("lmAgJuvq6ZB0SomQ+zMnFlIpR6M")) {
        (function(d, a, b, c) {
            b.DOM.decl("b-head-user", {onSetMod: {js: function() {
                var e = this;
                this._maxLength = parseInt(this.params.maxlength, 10);
                this._maxLengthRel = parseInt(this.params["maxlength-relative"], 10);
                if (c.param("login") !== "" || c.param("displayName")) {
                    b.blocks["i-user-services"].get(function(f) {
                        e.buildHtml(f)
                    })
                }
            }},getDefaultParams: function() {
                return {maxlength: 20,"maxlength-relative": 3}
            },getUserItems: function(g) {
                var f = g.displayName && g.displayName.social ? [{name: b.I18N("b-head-user", "profiles"),url: c.param("social-host")}] : [{name: b.I18N("b-head-user", "passport"),url: c.param("passport-host") + "/passport?mode=passport"}, {name: b.I18N("b-head-user", "change-password"),url: c.param("passport-host") + "/passport?mode=changepass&retpath=" + encodeURIComponent(c.param("retpath")) + "/"}];
                var e = "";
                d.each(f, function(j, h) {
                    e += '<li class="b-menu__layout-vert-cell' + (j == f.length - 1 ? " b-menu__layout-vert-cell_position_last" : "") + '"><div class="b-menu__item"><a class="b-link b-head-user__link" href="' + h.url + '">' + h.name + "</a></div></li>"
                });
                return e
            },buildHtml: function(i) {
                if (!i || !i.services) {
                    return
                }
                var k = this, f = i.displayName && i.displayName.social, m = b.blocks["i-common__string"].cleverSubstring(d("<div/>").text(k.getUserLogin(i)).html(), k._maxLength, k._maxLengthRel), h = this.findBlocksOn("i-ctr") && c.param("show-counters"), g, l, e = "", j;
                g = f ? '<b class="b-user b-user_social_yes"><span class="b-user__provider-ico" style="background:url(//static.yandex.st/social/current/icons/16/' + f.provider + '.png)"></span>' + m + "</b>" : '<b class="b-user"><b class="b-user__first-letter">' + m.substring(0, 1) + "</b>" + m.substring(1) + "</b>";
                if (k.params.href) {
                    e = k.params.href
                } else {
                    if (f) {
                        e = c.param("social-host")
                    } else {
                        if (/\.com(.tr)?$/.test(location.hostname)) {
                            e = c.param("passport-host")
                        } else {
                            e = c.param("i-host") || "https://i.yandex.ru"
                        }
                    }
                }
                l = '<a class="b-link b-link_pseudo_yes ' + (h ? "i-ctr i-ctr_click_b-link " : "") + "i-bem\" onclick=\"return {'b-link':{}" + (h ? ",'i-ctr':{stat:'head-login'}" : "") + '}"' + (!f && k.hasMod("type", "com") ? "" : ' href="' + e + '"') + '><span class="b-link__inner">' + g + "</span></a>";
                j = '<div class="b-dropdowna b-dropdowna i-bem" onclick="return {\'b-dropdowna\':{}}"><span class="b-dropdowna__switcher">' + l + '</span><div class="i-popup i-popup_autoclosable_yes i-popup i-bem" onclick="return {\'i-popup\':{}}"><div class="i-popup__content"><div class="i-popup__under b-popupa__under"></div><div class="b-popupa b-popupa_theme_ffffff b-popupa_direction_down i-bem b-dropdowna__popup" onclick="return {\'b-popupa\':{}}"><i class="b-popupa__shadow"></i><i class="b-popupa__tail"><i class="b-popupa__tail-i"></i></i><table cellpadding="0" cellspasing="0" class="b-popupa__wrap"><tr><td class="b-popupa__wrap-cell"><div class="b-popupa__content"><div class="b-menu b-menu_layout_vert b-dropdowna__menu"><ul class="b-menu__layout-vert">';
                f && k.setMod("social", "yes");
                d.each(i.services, function(n) {
                    j += '<li class="b-menu__layout-vert-cell' + (n === 0 ? " b-menu__layout-vert-cell_position_first" : "") + '"><div class="b-menu__item">';
                    if (c.param("id") == this.id && c.param("index")) {
                        j += "<strong>" + this.title + "</strong>"
                    } else {
                        j += '<a class="b-link b-head-user__link" href="' + this.url + '" onmousedown="Lego.ch(\'' + c.param("id") + ".login.myservices." + this.id + "',this)\">" + this.title + "</a>"
                    }
                    j += "</div></li>"
                });
                if (i.services.length) {
                    j += '<li class="b-menu__layout-vert-separator"><i class="b-menu__separator"></i></li>'
                }
                j += k.getUserItems(i);
                j += "</ul></div></div></td></tr></table></div></div></div></div>";
                b.DOM.update(k.findBlockInside("b-user").domElem, j)
            },getUserLogin: function(f) {
                var e = c.param("displayName");
                return e && e.social && e.name || f.displayName && f.displayName.name || c.param("login") || f.login
            }})
        })(jQuery, window.Lego, BEM, BEM.blocks["i-global"])
    }
    if (_ycssjs("zuieTbk7XuQfwmCY577ZYSX7pwc")) {
        (function() {
            var a = [];
            function b() {
                Lego.c("lego-ctr/p=show(" + d(f()) + ")");
                a = []
            }
            function e(h) {
                var g = h.split("-");
                return g.join("(") + new Array(g.length).join(")")
            }
            function f() {
                var g = [];
                for (var m = 0, n = a.length; m < n; m++) {
                    var p = a[m].split("-"), l = g;
                    for (var k = 0, o = p.length - 1; k < o; k++) {
                        var h = p[k];
                        if (!l[h]) {
                            l[h] = [];
                            l.push(h)
                        }
                        l = l[h]
                    }
                    l.push(p[p.length - 1])
                }
                return g
            }
            function d(h) {
                var g = "", m = [], j = [];
                for (var l = 0; l < h.length; l++) {
                    var k = h[l];
                    h[k] ? m.push(k + "(" + d(h[k]) + ")") : j.push(k)
                }
                m.length && j.push(m.join(""));
                return j.join(",")
            }
            function c(g) {
                var h = "-" + BEM.blocks["i-global"].param("id");
                return g.indexOf(h, g.length - h.length) === -1 ? g += h : g
            }
            BEM.DOM.decl("i-ctr", {onSetMod: {js: function() {
                this.setupShow();
                this.setupClick()
            }},setupShow: function() {
                var g = c(this.params.stat);
                a.push(g);
                a.length == 1 && this.afterCurrentEvent(function() {
                    b()
                })
            },setupClick: function() {
                var g = this.getMod("click");
                g ? this.findBlockOn(g).on("click", function() {
                    this.sendClick()
                }, this) : this.bindTo("mousedown", this.sendClick)
            },sendClick: function(g) {
                Lego.c("lego-ctr/p=click(" + e(c(this.params.stat)) + ")", g && g.target && g.target.tagName.toUpperCase() === "A" && g.target)
            }})
        })()
    }
    if (_ycssjs("RLn/q+bxAbmz5WhGDmmphx5tPD0")) {
        BEM.DOM.decl("b-head-filter", {getDefaultParams: function() {
            return {infoPopup: {delay: 1000,delta: 40,duration: 1050}}
        },opacityTimer: null,onSetMod: {js: function() {
            this.findBlocks().bindEvents().checkCounters().showInfoPopup().removeFilterParam()
        }},destruct: function() {
            this.unbindEvents()
        },findBlocks: function() {
            this.infoPopup = this.findBlockInside({block: "b-popupa",modName: "type",modVal: "info"});
            this.dropdowna = this.findBlockInside("b-dropdowna");
            this.button = this.dropdowna.findBlockInside("b-form-button");
            this.filterPopup = this.dropdowna.getPopup();
            return this
        },bindEvents: function() {
            this.filterPopup.on("show", this._onMenuShow, this).on("hide", this._onMenuHide, this);
            this.infoPopup && this.infoPopup.on("show", this.showIcon, this).on("hide", this._onInfoHide, this);
            this.bindToWin("scroll", $.throttle(this._onScroll, 150, this));
            BEM.blocks["b-page"].on("warning", this._onWarning, this);
            return this
        },unbindEvents: function() {
            this.filterPopup.un("show", this._onMenuShow, this).un("hide", this._onMenuHide, this);
            this.infoPopup && this.infoPopup.un("show", this.showIcon, this).un("hide", this._onInfoHide, this);
            BEM.blocks["b-page"].un("warning", this._onWarning, this)
        },_onWarning: function(a, b) {
            if (b.warning) {
                this.params.warning = b.warning;
                this.showInfoPopup()
            }
        },_onScroll: function() {
            if (this.__self.win.scrollTop() < 40) {
                return
            }
            this.infoPopup && this.infoPopup.hide();
            this.filterPopup && this.filterPopup.hide()
        },_onMenuShow: function() {
            this.updateMenu().showIcon().turnArrow("up").updateRetpath()
        },_onMenuHide: function() {
            this.hideIcon(3000).turnArrow("down")
        },_onInfoHide: function() {
            this.hideIcon(1000)
        },animatePopup: function() {
            var a = this.infoPopup._getUnder().domElem, b = this.params.infoPopup;
            setTimeout(this.changeThis(function() {
                this.infoPopup.show(this.elem("icon-wrapper"));
                a.css({"margin-top": b.delta + "px"}).animate({"margin-top": 0}, b.duration, "easeOutFluid")
            }), b.delay)
        },checkCounters: function() {
            this.isFilterSaved() && w(null, this.params.counter);
            return this
        },removeFilterParam: function() {
            BEM.blocks["i-location"].get().change({params: {filter_saved: null},history: false,trigger: false});
            return this
        },updateRetpath: function() {
            var a = $.url.delParam(location.href, "layout");
            this.filterPopup.domElem.find(".b-head-filter__retpath").val($.url.setParam(a, "filter_saved", "1"));
            return this
        },hideIcon: function(a) {
            this.params.selected === "unlimited" || (this.opacityTimer = setTimeout(this.changeThis(function() {
                this.elem("icon").animate({opacity: 0.7})
            }), a));
            return this
        },showIcon: function() {
            this.params.selected === "unlimited" || this.elem("icon").animate({opacity: 1});
            clearTimeout(this.opacityTimer);
            return this
        },showInfoPopup: function() {
            var a = this.infoPopup;
            if (!a) {
                return this
            }
            this.params.selected === "unlimited" ? this.isFilterSaved() && this.animatePopup() : this.params.warning && this.animatePopup();
            return this
        },turnArrow: function(a) {
            this.elem("arrow").html(a === "up" ? "?" : "?");
            return this
        },updateMenu: function() {
            this.iPopup || (this.iPopup = this.filterPopup.findBlockOutside("i-popup"));
            this.isWidthUpdated || (this.isWidthUpdated = this.filterPopup.elem("wrap").css({width: this.getButtonWidth()}));
            this.iPopup.domElem.css({left: this.getButtonOffsetLeft()});
            return this
        },getButtonWidth: function() {
            return this.button.domElem.width()
        },getButtonOffsetLeft: function() {
            return this.button.domElem.offset().left
        },isFilterSaved: function() {
            return !!$.url.getParam(location.href, "filter_saved")
        }})
    }
    if (_ycssjs("WLImPL0oldftIrHboVvi6C2PD+8")) {
        BEM.DOM.decl({block: "b-popupa",modName: "type",modVal: "info"}, {_calcParams: function() {
            var b = this.__base.apply(this, arguments), a = this.__self.win.width() - this.domElem.width() - 40;
            b.tailOffsets.marginLeft += b.offsets.left - a;
            b.offsets.left = a;
            return b
        }})
    }
    if (_ycssjs("Th0ZHYDVIvvHPEqdzMKFeBH5J2w")) {
        BEM.DOM.decl({name: "i-flashcookie",modName: "type",modVal: "iframe"}, {onSetMod: {js: function() {
            Lego.block["i-flashcookie"].call(this.domElem, this.params)
        }}});
        (function() {
            var a = Lego.block["i-flashcookie"], b = function(e) {
                var c = this, d = arguments.callee.load = function() {
                    location.protocol.indexOf("https") < 0 && c.replaceWith($('<iframe src="http://kiks.yandex' + location.host.match(/.*([.].*?):?\d{0,}$/)[1] + '/su/" class="' + c.attr("class") + '"/>'))
                };
                c.hasClass("i-flashcookie_autoload_no") || d()
            };
            Lego.block["i-flashcookie"] = function(d) {
                var c = this.hasClass("i-flashcookie_type_iframe") ? b : a;
                c && c.call(this, d)
            }
        })()
    }
    if (_ycssjs("nL24ghq4eBrZLGS8wYt//eXo60k")) {
        Lego.block["i-flashcookie"] = function(c) {
            var a = window.location.hostname.split(".").reverse()[0], b = a == "tr" ? "com.tr" : a;
            location.protocol.indexOf("https") < 0 && this.replaceWith($("<iframe />").attr({"class": this.attr("class"),style: "height:40px;width:40px;overflow:hidden;position:absolute;left:-40px;top:0;opacity:0",src: "http://kiks.yandex." + b + "/su/"}))
        }
    }
    if (_ycssjs("vs195WW+kP0VVOnZmHmRIhLsRvQ")) {
        BEM.DOM.decl("b-lang-switcher", {onSetMod: {js: function() {
            this.elem("flag").each(function(a, b) {
                new Image().src = $(b).css("backgroundImage").match(/url\(["']?([^'")]+)["']?\)/)[1]
            })
        }}})
    }
    if (_ycssjs("VXaWCnYl0AlkOSqkQx5NLVuYBDI")) {
        BEM.DOM.decl("b-menu", {onElemSetMod: {trigger: {state: function(b, c, a) {
            this.toggleMod(this.findElem(b.closest(this.buildSelector("layout-vert-cell")), "item-content").eq(0), "visibility", "visible", a == "opened").trigger("trigger", {domElem: b,state: a})
        }},item: {state: {current: function(c) {
            var d = this, a = d.__self.getName(), b = d.elem("item", "state", "current").filter(function() {
                return $(this).closest(d.buildSelector()).bem(a) === d
            });
            d.findElem(c.parents(d.buildSelector("item-content")).prev(d.buildSelector("item")), "trigger").each(function() {
                d.setMod($(this), "state", "opened")
            });
            d.delMod(b, "state").trigger("current", {prev: b,current: c})
        }}}},onTriggerClick: function(a) {
            a.preventDefault();
            this.toggleMod(a.data.domElem, "state", "opened")
        },onItemSelectorClick: function(b) {
            var a = this._getItemByEvent(b);
            this.hasMod(a, "state", "disabled") || this.setMod(a, "state", "current")
        },_getItemByEvent: function(a) {
            return a.data.domElem.closest(this.buildSelector("item"))
        }}, {live: function() {
            this.liveBindTo("trigger", "leftclick", function(a) {
                this.onTriggerClick(a)
            }).liveBindTo("item-selector", "leftclick", function(a) {
                    this.onItemSelectorClick(a)
                })
        }})
    }


    if (_ycssjs("3QS4xxZiQ2eEBcFBD2rao9cEuto")) {
        BEM.DOM.decl("b-smart-help", {onSetMod: {loading: {progress: function() {
            var a = this.setMod(this.elem("action", "type", "open"), "loading", "yes");
            BEM.blocks["i-loader"].load("b-smart-help", BEM.blocks["i-global"].param("lego-static-host") + "/blocks-desktop/b-smart-help/_b-smart-help.bembundle.js", function() {
                a._onBundleLoad()
            }, function() {
                a._onError()
            })
        }}},_onActionClick: function(a) {
            this.setMod("loading", "progress")
        },_onError: function() {
            this.delMod(this.elem("action", "type", "open"), "loading").elem("placeholder").show()
        },_onBundleLoad: function() {
            this.setMod("loading", "completed")
        },getDefaultParams: function() {
            return {prjId: 1059394,fromPrj: "default"}
        }}, {live: function() {
            this.liveBindTo("action", "leftclick", function(a) {
                this._onActionClick(a.data.domElem)
            })
        }})
    }

    if (_ycssjs("K4CH9ELhxQFV0mG0zwLXoyG6mec")) {
        BEM.DOM.decl("i-keyrouter", {onSetMod: {js: function() {
            this.bindToDoc("keydown", function(a) {
                if (!document.activeElement || !/(INPUT|TEXTAREA)/.test(document.activeElement.nodeName)) {
                    return this._onKeydown(a)
                }
            })
        }},_onKeydown: function(a) {
            switch (a.keyCode) {
                case 74:
                case 37:
                case 65:
                case 72:
                    if (a.ctrlKey || a.altKey) {
                        this.trigger("special:left")
                    } else {
                        this.trigger("left")
                    }
                    break;
                case 75:
                case 39:
                case 68:
                case 76:
                    if (a.ctrlKey || a.altKey) {
                        this.trigger("special:right")
                    } else {
                        this.trigger("right")
                    }
                    break;
                case 32:
                    this.trigger("space");
                    break;
                case 34:
                    this.trigger("pagedown");
                    break;
                case 33:
                    this.trigger("pageup");
                    break;
                case 27:
                    this.trigger("esc");
                    a.stopImmediatePropagation();
                    break
            }
            return !a.isImmediatePropagationStopped()
        }})
    }
    if (_ycssjs("Z5XbUXau1KDP7l5EbCbgufNi2L8")) {
        BEM.DOM.decl("b-pager", {onSetMod: {js: function() {
            if (!this.params.keydownReaction) {
                return
            }
            var b = navigator.userAgent.match(/mac os x (\d+)[._](\d+)/i);
            if (b) {
                var c = parseInt(b.pop(), 10), a = parseInt(b.pop(), 10);
                if (a > 10 || (a === 10 && c > 6)) {
                    this.__self.MODIFIER_KEY = "altKey";
                    this.elem("key").html(function(e, d) {
                        return d.replace("Ctrl", "Alt")
                    })
                }
                this.isMac = true
            }
            this.bindToDoc("keydown", this.onKeyDown)
        }},navigate: function(a) {
            a && (window.location.href = a)
        },onKeyDown: function(b) {
            if (this.isMac && (b.ctrlKey && (b.metaKey || b.altKey))) {
                return
            }
            if (!b.ctrlKey && !b.altKey || $(b.target).is("input, textarea") || (b.ctrlKey && b.shiftKey)) {
                return
            }
            if (b[this.__self.MODIFIER_KEY]) {
                var a = b.keyCode === 37 ? this.elem("prev") : b.keyCode === 39 ? this.elem("next") : null;
                a && a.attr("href") && this.navigate(a.attr("href"))
            }
        }}, {MODIFIER_KEY: "ctrlKey"})
    }
    if (_ycssjs("IKtSoz3FMYvIvVVGjyRQzRk07zA")) {
        BEM.DOM.decl({block: "b-promo",modName: "type",modVal: "filter"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            var a = this.findBlockInside("b-form-input");
            a && a.elem("input").val($.url.delParam(window.location.href, "rnd"))
        }}})
    }
    if (_ycssjs("F6GQHHw5HHA1qnQByGxtktoMT8c")) {
        BEM.DOM.decl({block: "b-promo",modName: "type",modVal: "video"}, {onSetMod: {js: function() {
            this.findBlocks().bindEvents().initShare();
            this.__self.loaded = true
        },visible: {yes: function() {
            this.updateSize();
            this.iframe.attr("src", this.params.videoUrl);
            this.__self.loaded && this.popup.show();
            this.setParam(this.params.videoId, "showVideoPromo")
        },"": function() {
            this.popup.hide();
            this.iframe.attr("src", this.params.videoUrl);
            this.setParam("", "closeVideoPromo")
        }}},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["i-keyrouter"].un("esc", this._hide, this);
            this.popup.destruct();
            this.__self.loaded = false
        },setParam: function(a, b) {
            this.location.get().change({params: {promovideo: a},method: b,block: "b-page_type_" + this.page.getMod("type")});
            return this
        },bindEvents: function() {
            this.popup.on("hide", this._hide, this);
            this.bindTo("link", "click", this._show).bindTo("close", "click", this._hide).bindToWin("resize", this.updateSize);
            this.location.on("change", this._onLocationChange, this);
            BEM.blocks["i-keyrouter"].on("esc", this._hide, this);
            return this
        },_onLocationChange: function() {
            $.url.getParam("promovideo") ? this._show() : this._hide()
        },_show: function() {
            this.domElem && this.setMod("visible", "yes")
        },_hide: function() {
            this.domElem && this.delMod("visible")
        },getVideoDims: function() {
            var a = this.__self.win.width();
            return {width: a * 0.65,height: a * 0.366}
        },initShare: function() {
            var a = this.params;
            this.yaShare = new Ya.share({element: "ya-share-video",title: a.shareText,image: a.shareImage,link: location.protocol + "//" + location.hostname + "/?promovideo=" + a.videoId,theme: "counter",elementStyle: {type: "small",quickServices: ["yaru", "vkontakte", "facebook", "twitter", "odnoklassniki", "moimir", "gplus"]}});
            return this
        },updateSize: function() {
            this.iframe.css(this.getVideoDims())
        },findBlocks: function() {
            this.popup = this.findBlockOn(this.elem("popup"), "b-popupa");
            this.iframe = this.popup.elem("iframe");
            this.location = BEM.blocks["i-location"];
            this.page = this.findBlockOutside("b-page");
            return this
        }}, {isLoaded: function() {
            return this.loaded
        }})
    }
    if (_ycssjs("qhNJN2QMfIWCkFGqH/ebl1SJWY8")) {
        BEM.DOM.decl({block: "b-promo",modName: "auto",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this._show()
        }}})
    }
    if (_ycssjs("hddA8qfLTLVejHH9Oo0IQDtzj0Y")) {
        (function() {
            var a = 10;
            BEM.DOM.decl({name: "b-popupa",modName: "direction",modVal: "fixed"}, {_pos: function() {
                var c = this._getUnder(), e = -c.domElem.outerWidth() / 2, d = -c.domElem.outerHeight() / 2, b = this.__self.getWindowSize();
                c.show({left: "50%",top: "50%",marginLeft: b.width / 2 - a + e < 0 ? -b.width / 2 + a : e,marginTop: b.height / 2 - a + d < 0 ? -b.height / 2 + a : d});
                return this
            }})
        })()
    }
    if (_ycssjs("vkAh8PNutpLykNRY9os7sNgNuns")) {
        BEM.DOM.decl("b-share-wrap", {onSetMod: {js: function() {
            if (!($("#ya_share").length && "Ya" in window)) {
                return
            }
            var b = this.findBlockOutside("b-page"), c = b.params.shareTitle, a = b.findBlockInside("b-single-image");
            this.yaShare = Ya.share({element: "ya_share",description: c,image: a ? a.elem("image").attr("src") : "//yandex.st/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png",title: c ? (c.replace(/[^:]*:/, "") + " #yandeximages") : "",theme: "dark",l10n: Lego.params.locale || "ru",text: Lego.params.locale == "tr" ? "Payla?" : undefined,elementStyle: {type: "none",quickServices: Lego.params.locale == "tr" ? ["twitter", "facebook"] : ["vkontakte", "odnoklassniki", "facebook", "twitter", "lj"]},onready: function() {
                this.trigger("share:ready")
            }.bind(this),onshare: this._onShare})
        }},_onShare: function(a) {
            BEM.blocks["i-counter"].count("/image/new/preview/share/" + a, $(".b-share-wrap"))
        }})
    }
    if (_ycssjs("QigNIkuw3xExAcVCq5fReesyfC0")) {
        BEM.DOM.decl({block: "b-share-wrap",modName: "for",modVal: "old"}, {onSetMod: {js: function() {
            if (!($("#ya_share").length && "Ya" in window)) {
                return
            }
            var b = this.findBlockOutside("b-page"), c = b.params.shareTitle, a = b.findBlockInside("b-single-image");
            this.yaShare = Ya.share({elementID: "ya_share",description: c,image: a ? a.elem("image").attr("src") : "//yandex.st/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png",title: c.replace(/[^:]*:/, "") + " #yandeximages",l10n: Lego.params.locale || "ru",style: {button: true,link: true,icon: true,border: false},text: Lego.params.locale == "tr" ? "Payla?" : undefined,popup: {input: true},elementStyle: {quickServices: Lego.params.locale == "tr" ? ["twitter", "facebook", "friendfeed", "pinterest"] : undefined},popupStyle: (Lego.params.locale == "tr" ? {blocks: {"Payla?!": ["twitter", "facebook", "friendfeed", "pinterest"]}} : undefined),onready: function() {
                this.trigger("share:ready")
            }.bind(this)});
            BEM.blocks["b-preview"].on("close", function(d) {
                this.yaShare.closePopup()
            }, this)
        }}})
    }
    if (_ycssjs("Q/Fj036vyU7Jfw6O4Se39XwJL/Q")) {
        BEM.DOM.decl({block: "b-share-wrap",modName: "type",modVal: "series"}, {onSetMod: {js: function() {
            this.items = this.elem("item")
        }},updateLinks: function(c) {
            var b = $.url.setParam($.url.getFull(c.url), "ts", (+new Date)), a = $.url.build("http://share.yandex.ru/go.xml", {url: b,title: c.title,description: c.description,image: c.image});
            this.items.each(this.changeThis(function(d, e) {
                this.updateItem(a, $(e))
            }));
            return this
        },updateItem: function(a, b) {
            b.attr("href", a + "&service=" + this.getMod(b, "type"))
        }})
    }
    if (_ycssjs("D4wGMGBhSu7zwrDDzhHFq+raA9o")) {
        BEM.DOM.decl({block: "b-share-wrap",modName: "type",modVal: "promo"}, {onSetMod: {js: function() {
            if (!$("#ya_share_promo").length) {
                return
            }
            this.yaShare = new Ya.share({elementID: "ya_share_promo",title: this.params.share + " #yandeximages",l10n: Lego.params.locale || "ru",style: {button: false,link: true,icon: true,border: false},elementStyle: {type: "none",quickServices: ["yaru", "vkontakte", "twitter", "facebook", "odnoklassniki", "moimir", "lj"]}})
        }}})
    }
    if (_ycssjs("WT6Zk+XAgUjIeyLhM/6HmDB6/cc")) {
        BEM.DOM.decl({name: "b-form-input",modName: "autoselect",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.elem("input").on("click", function() {
                $(this).select()
            })
        }}})
    }
    if (_ycssjs("vhYEOszmJ14XPncWFeEUIrboA4s")) {
        BEM.DOM.decl({block: "b-filters",modName: "promo",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this.popup = $(".b-promo_type_filter").bem("b-popupa");
            this.popupDomElem = this.popup.domElem;
            this.counter(this.popup.params.counters.show);
            var a = $(".b-filter-intent__item_promo_yes");
            this.popup.show(a.hasClass("b-filter-intent__item_state_current") ? a : a.find(".b-filter-intent__link-text"));
            this.popup.on("hide", this._onHide, this);
            BEM.blocks["b-filter-intent"].on("promo", this._removePromoHideListener, this)
        }},_removePromoHideListener: function() {
            this.popup && this.popup.un("hide")
        },destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-filter-intent"].un("promo", this._removePromoHideListener, this);
            this.popup.destruct()
        },_onHide: function() {
            this.counter(this.popup.params.counters.close)
        },counter: function(a) {
            w(this.popupDomElem, a)
        }})
    }
    if (_ycssjs("Lv5p4OymXyojRD4Q82bDv3qWEsg")) {
        BEM.DOM.decl({block: "b-filter-intent",modName: "promo",modVal: "yes"}, {updateFilter: function(a) {
            this.fillPromoParams();
            this.__base.apply(this, arguments)
        },fillPromoParams: function() {
            var c = [], a = this.current || this.findElem("item", "state", "current"), b = $(".b-search");
            a && a.hasClass("b-filter-intent__item_promo_yes") && b.append($("<input />").attr({type: "hidden","class": "b-search__hidden_promo_yes",name: "rnd",value: Math.floor(Math.random() * 10000)}));
            if (a && (c = a.find(".b-search__hidden")) && c.length) {
                b.append(c);
                this.trigger("promo", c.val())
            }
        }})
    }
    if (_ycssjs("x0KCn2p9FSCMU5JLQFb5CvKutJM")) {
        BEM.DOM.decl("nps", {getDefaultParams: function() {
            return {timeout: {show: 30000,hide: 5000}}
        },onSetMod: {js: function() {
            var b = this.params, a;
            this.cookie = BEM.blocks["i-cookie"].get();
            b.save && this.cookie.yp("nps", [b.rand, b.status].join(":"), b.expires);
            if (b.status === "close") {
                return
            }
            this.findBlocks().bindEvents();
            a = this.page.getMod("type");
            a === "search" || a === "seed" ? this.startPopupTimer() : this.location.on("b-page_type_search", this.startPopupTimer, this)
        }},findBlocks: function() {
            this.page = this.findBlockOutside("b-page");
            this.location = BEM.blocks["i-location"].get();
            this.count = BEM.blocks["i-counter"].count;
            this.popup = this.findBlockOn("b-popupa");
            this.list = this.findBlockInside("b-form-radio");
            this.button = this.findBlockInside("b-form-button");
            this.question = this.elem("text");
            this.hint = this.elem("hint");
            return this
        },bindEvents: function() {
            this.button.on("click", this._onSendClick, this);
            this.popup.bindTo(this.popup.elem("close"), "click", this.changeThis(this._onCloseClick));
            this.list.on("mouseover mouseout", this._onMouseMove, this).on("change", this._onRadioChange, this);
            this.location.on("change", this._onPageChange, this);
            BEM.blocks["b-preview"].on("fullscreen:enter", this.hidePopup, this).on("fullscreen:exit", this.showPopup, this);
            return this
        },destruct: function() {
            this.__base.apply(this, arguments);
            this.button.un("click", this._onSendClick, this);
            this.popup.unbindFrom(this.popup.elem("close"), "click", this.changeThis(this._onCloseClick));
            this.list.un("mouseover mouseout", this._onMouseMove, this).un("change", this._onRadioChange, this);
            this.location.un("change", this._onPageChange, this);
            BEM.blocks["b-preview"].un("fullscreen:enter", this.hidePopup, this).un("fullscreen:exit", this.showPopup, this)
        },_onPageChange: function(b, a) {
            a.block === "b-page_type_search" ? this.showPopup() : this.hidePopup()
        },_onMouseMove: function(b, a) {
            this.updateHint(a)
        },_onCloseClick: function(b) {
            var a = this.getMod("type");
            if (!this.hasMod("minimized", "yes")) {
                this.minimizeNPS();
                this.count(["/image/new/serp", a, "small"].join("/"), null);
                b.preventDefault();
                return false
            }
            this.saveStatus("close");
            this.hasMod("thanks", "yes") || this.count(["/image/new/serp", a, "close"].join("/"), null)
        },_onSendClick: function() {
            var a = this.getMod("type");
            if (this.hasMod("minimized", "yes")) {
                this.count(["/image/new/serp", a, "normal"].join("/"), null);
                this.maximizeNPS()
            } else {
                this.count(["/image/new/serp", a, "result", "p" + this.value].join("/"), null);
                this.showThanks()
            }
        },hidePopup: function() {
            this.popup.hide()
        },showPopup: function() {
            if (this.params.status === "close" || !this._isShown) {
                return
            }
            this.popup.show()
        },updateHint: function(a) {
            var b = this.params.i18n;
            b.hints && b.hints[a - 1] ? this.setHint(b.hints[a - 1]) : this.setHint(b.defaultHint)
        },disableButton: function() {
            this.button.setMod("disabled", "yes");
            return this
        },enableButton: function() {
            this.button.delMod("disabled");
            return this
        },_onRadioChange: function(b, a) {
            this.value = a;
            this.enableButton()
        },initPopup: function() {
            var a = this.domElem;
            this.popup.show();
            this._isShown = true;
            this.setHint(this.params.i18n.defaultHint);
            this.hasMod("minimized", "yes") ? this.minimizeNPS() : this.maximizeNPS();
            a.css("bottom", -a.height() + "px").animate({bottom: 0}, this.changeThis(function() {
                this.popup.setMod("animate", "yes")
            }))
        },startPopupTimer: function() {
            var a = this.params;
            this.location.un("b-page_type_search", this.startPopupTimer, this);
            setTimeout(this.changeThis(function() {
                this.initPopup();
                a.save && this.count(["/image/new/serp", this.getMod("type"), "show"].join("/"), null)
            }), a.timeout.show)
        },minimizeNPS: function() {
            var a = this.params.i18n;
            return this.setButtonText(a.answer).setQuestion(a.invite).enableButton().minimizePopup().saveStatus("min")
        },maximizeNPS: function() {
            var a = this.params.i18n;
            this.setButtonText(a.send).setQuestion(a.question).maximizePopup().saveStatus("max");
            this.value ? this.enableButton() : this.disableButton();
            return this
        },showThanks: function() {
            var a = this.params;
            this.setMod("thanks", "yes");
            this.setHint("").minimizePopup();
            this.question.text(a.i18n.thankyou);
            setTimeout(this.changeThis(this.hideThanks), a.timeout.hide);
            this.saveStatus("close")
        },hideThanks: function() {
            this.popup.hide()
        },minimizePopup: function() {
            this.setMod("minimized", "yes");
            this.popup.hide().setMod(this.popup.elem("close"), "theme", "cross").show();
            return this
        },maximizePopup: function() {
            this.delMod("minimized");
            this.popup.hide().setMod(this.popup.elem("close"), "theme", "minimize").show();
            return this
        },setQuestion: function(a) {
            this.question.text(a);
            return this
        },setHint: function(a) {
            this.hint.text(a || "");
            return this
        },setButtonText: function(a) {
            this.button.elem("text").text(a);
            return this
        },saveStatus: function(a) {
            this.cookie.yp("nps", [this.params.rand, a].join(":"));
            this.params.status = a
        }})
    }
    if (_ycssjs("CX4Dng6C0skQjj61uEsIAA5b23k")) {
        (function() {
            var a;
            BEM.decl("i-cookie", {defaultExpire: new Date() + 60 * 60 * 24 * 7,getDefaultParams: function() {
                return {yp: {expires: new Date("Tue Jan 1 00:00:00 2038"),domain: ".yandex." + BEM.blocks["i-global"].param("content-region"),path: "/"}}
            },ypRead: function() {
                var g = $.cookie("yp"), c = g ? g.split("#") : [], e = new Date() / 1000, h, d = {};
                for (var f = 0, b = c.length; f < b; f++) {
                    h = c[f].split(".");
                    h[0] > e && (d[h[1]] = {value: h[2],expires: h[0]})
                }
                return d
            },ypWrite: function(f) {
                var d = [];
                for (var c = 0, e = Object.keys(f), b = e.length; c < b; c++) {
                    d.push([f[e[c]].expires, e[c], f[e[c]].value].join("."))
                }
                $.cookie("yp", d.join("#"), this.params.yp)
            },yp: function(d, f, b) {
                var c = this.ypRead(), e = c[d];
                if (arguments.length === 1) {
                    return e && e.value
                }
                e || (e = {});
                e.value = f;
                e.expires = b || e.expires || this.defaultExpires;
                c[d] = e;
                return this.ypWrite(c)
            }}, {get: function() {
                return a || (a = BEM.create("i-cookie"))
            }})
        }())
    }
    if (_ycssjs("oIV20LdE0LiAwX8R4nZMp1YRsJo")) {
        BEM.DOM.decl({name: "b-popupa",modName: "nps",modVal: "yes"}, {_pos: function() {
            this.__base.apply(this, arguments);
            this._getUnder().show({top: "auto",bottom: 0});
            return this
        }})
    }
    if (_ycssjs("Yy4Acq71JBn7hkAZcz8FFGhE74c")) {
        (function(a, b) {
            a.DOM.decl("b-form-radio", {onSetMod: {js: function() {
                var f = this;
                try {
                    var d = f.__self.doc[0].activeElement
                } catch (c) {
                }
                f._val = this.findElem(this.elem("button", "checked", "yes"), "radio").val();
                f.elem("radio").each(function() {
                    var g = [];
                    d === this && (g.push("focused"));
                    this.checked && (g.push("checked"));
                    if (g[0]) {
                        var e = f.__self._getButtonByElem($(this));
                        $.each(g, function(h, j) {
                            f.setMod(e, j, "yes")
                        })
                    }
                })
            }},onElemSetMod: {button: {focused: {yes: function(c) {
                this.delMod(this.elem("button", "focused", "yes"), "focused").findElem(c, "radio").focus()
            }},checked: {yes: function(d) {
                this.setMod(d.next(), "next-for-checked", "yes");
                this._val = this.findElem(d, "radio").attr("checked", true).val();
                var c = this.elem("button", "checked", "yes");
                this.delMod(c, "checked");
                this.trigger("change", {current: d,prev: c})
            },"": function(c) {
                this.delMod(c.next(), "next-for-checked")
            }},"next-for-checked": {yes: function() {
                this.delMod(this.elem("button", "next-for-checked", "yes"), "next-for-checked")
            }},disabled: function(d, e, c) {
                d.find(this.buildSelector("radio")).attr("disabled", c == "yes")
            }}},val: function(c) {
                if (typeof c == "undefined") {
                    return this._val
                } else {
                    var d = this;
                    this.elem("radio").each(function() {
                        if (this.value == c) {
                            d.setMod(d.__self._getButtonByElem($(this)), "checked", "yes");
                            return false
                        }
                    });
                    return d
                }
            },uncheckAll: function() {
                var c = this.elem("button", "checked", "yes");
                this.delMod(c, "checked").findElem(c, "radio").attr("checked", false);
                this._val = b;
                return this
            },_onChange: function(d) {
                var c = this.__self._getButtonByElem(d.data.domElem);
                d.target.checked ? this.setMod(c, "checked", "yes") : this.delMod(c, "checked")
            }}, {live: function() {
                this.liveBindTo("radio", "leftclick", function(d) {
                    if (!d.target.disabled) {
                        var c = this.__self._getButtonByElem(d.data.domElem);
                        this.setMod(c, "focused", "yes").setMod(c, "checked", "yes")
                    }
                }).liveBindTo("radio", "change", function(c) {
                        this._onChange(c)
                    }).liveBindTo("radio", "focusin focusout", function(c) {
                        this.setMod(this.__self._getButtonByElem(c.data.domElem), "focused", c.type == "focusin" ? "yes" : "")
                    });
                return false
            },_getButtonByElem: function(c) {
                return c.closest(this.buildSelector("button"))
            }})
        })(BEM)
    }
    if (_ycssjs("sUl6182r5kplDbQ3wDtlOWcKEVQ")) {
        BEM.DOM.decl({block: "b-form-radio",modName: "breadcrumbs",modVal: "yes"}, {_onMouseEvent: function(d) {
            var c = d.data.domElem, a = this.extractElemIndex(c), b = this.elem("button").length;
            switch (d.type) {
                case "mouseover":
                    this.setElemsMod(b, "active", "").setElemsMod(b, "checked", "").setElemsMod(a, "hovered", "yes").setMod(c, "checked", "yes");
                    this.trigger("mouseover", a);
                    break;
                case "mouseout":
                    this.selectedIndex || this.setActive(this.selectedIndex);
                    this.setElemsMod(a, "hovered", "").setElemsMod(b, "active", "").setElemsMod(b, "checked", "").setElemsMod(this.selectedIndex, "active", "yes").setMod(this.selectedElem, "checked", "yes");
                    this.trigger("mouseout", this.selectedIndex);
                    break;
                case "mousedown":
                    this.setElemsMod(a, "hovered", "").setElemsMod(a, "pressed", "yes");
                    break;
                case "mouseup":
                    this.selectedIndex = a;
                    this.selectedElem = c;
                    this.setActive(a).setElemsMod(a, "hovered", "").setElemsMod(a, "pressed", "").setMod(c, "checked", "yes");
                    this.trigger("change", a);
                    break
            }
        },onElemSetMod: {button: {checked: {yes: function() {
            this.delMod(this.elem("button", "checked", "yes"), "checked")
        }}}},extractElemIndex: function(a) {
            return this.elem("button").index(a) + 1
        },setElemsMod: function(b, c, a) {
            b && this.setMod(this.elem("button").slice(0, b), c, a);
            return this
        },setActive: function(a) {
            return this.setElemsMod(a, "active", "yes")
        }}, {live: function() {
            this.__base.apply(this, arguments);
            this.liveBindTo("button", "mousedown mouseup mouseover mouseout", function(a) {
                this._onMouseEvent(a)
            })
        }})
    }
    if (_ycssjs("Sex6+CXiT1QX204jhK4OSnJ9iR4")) {
        BEM.DOM.decl("b-page", {_onChange: function(b, a) {
            this.__base.apply(this, arguments);
            if (a.block !== "b-page_type_copy") {
                return
            }
            this._signalChannel.trigger("load:start");
            BEM.create("i-request_type_bem", {url: "/yandsearch",ctx: this}).block("b-form-input__cbirintent", this.hideCBIRIntent).block("b-page_type_copy:container", function(c) {
                this.findBlockOutside("b-page").setMod("type", "copy");
                BEM.DOM.update(this.findBlockInside("b-page-wrap").domElem, c.html);
                this.trigger("page:content:loaded")
            }).block("b-navigation_position_bottom:ajax", function(c) {
                    this.update(c)
                }).block("b-page__meta", function(c) {
                    var d = c.params;
                    this.updateSeoInformation(d.seo);
                    this.trigger("json:params", d.global)
                }).block("b-family-filter", function(c) {
                    this.updateFamilyFilter(c.html)
                }).block("b-related", function() {
                    BEM.DOM.update($(".b-search__under_col_left"), "")
                }).get(a.params, function() {
                    this.trigger("change", {page: "copy"})
                })
        }})
    }
    if (_ycssjs("r1ZfdvzZk8pguhm51c4+M1W7DXY")) {
        BEM.DOM.decl("b-copy-sorter", {onSetMod: {js: function() {
            this._switch = this.findBlockInside("b-form-switch");
            this._switch.on("change", this._onChange, this).bindTo("body", "click", function() {
                if (this.isDisabled()) {
                    return
                }
                this.setMod("focused", "yes").toggle()
            });
            BEM.blocks["b-page"].on("change", this._onPageLoaded, this)
        }},destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-page"].un("change", this._onPageLoaded, this)
        },_onPageLoaded: function() {
            this._switch.delMod("disabled")
        },_onChange: function(b, a) {
            this.afterCurrentEvent(function() {
                this.toggle(a.state === "right" ? "asc" : "desc")
            })
        },toggle: function(b) {
            if (this._switch.hasMod("disabled", "yes")) {
                return
            }
            this._switch.setMod("disabled", "yes");
            var a = global.filterLink(this.params[b]);
            BEM.blocks["i-location"].get().change({url: a,block: "b-page_type_copy"});
            global.ua.hasHistoryAPI || global.ua.isIE9 || (window.location.href = a)
        }})
    }
    if (_ycssjs("TZaBBswY3SmQoXg7B5VPPVzoSkQ")) {
        BEM.DOM.decl({block: "i-images-lists",modName: "type",modVal: "copy"}, {bindEvents: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-navigation"].on("list:load:next", this._onListLoad, this);
            return this
        },destruct: function() {
            this.__base.apply(this, arguments);
            BEM.blocks["b-navigation"].un("list:load:next", this._onListLoad, this)
        },_onListLoad: function(c, b) {
            this.trigger("list:load:next").trigger("list:load", {direction: "next"});
            var a = BEM.create("i-request_type_bem", {url: BEM.blocks["i-location"].parsePath(b.url),ctx: this}), d = BEM.blocks["i-location"].parseParams(b.url);
            d.serpid = global.params.serpid;
            this._req.push(a);
            a.block("b-page-break", function(e) {
                this.insertListOrBreak(e)
            }).block("b-double", function(e) {
                    this.insertListOrBreak(e)
                }).block("b-navigation_position_bottom:ajax", function(e) {
                    this.findBlockOutside("b-page").findBlockInside({blockName: "b-navigation",modName: "position",modVal: "bottom"}).update(e);
                    this.findBlockOutside({blockName: "b-page",modName: "navigation",modVal: "infinite"}).update(e)
                }).get(d, function() {
                    this.trigger("list:loaded:next")
                })
        }})
    }
    if (_ycssjs("83Jv0cD2Elm4l0sC82zTA2cVu+M")) {
        BEM.DOM.decl("b-form-switch", {onSetMod: {js: function() {
            var d = this, a = this.elem("input").filter(":checked");
            try {
                var c = d.__self.doc[0].activeElement
            } catch (b) {
            }
            this[a.is(this.buildSelector("input-right")) ? "right" : "left"]();
            c && this.elem("input").each(function() {
                c === this && d.setMod("focused", "yes");
                return false
            });
            this.bindTo("button", "click", function() {
                return false
            });
            this.afterCurrentEvent(function() {
                this.setMod("animation", "yes")
            })
        },focused: {yes: function() {
            this._focusChecked()
        }}},onElemSetMod: {body: {position: function(d, c, e) {
            var b = this.elem("input-" + e), a = this.hasMod("focused", "yes");
            b.attr("checked", true);
            a && b.focus();
            this.delMod(this.elem("label", "active", "yes"), "active").setMod(this.elem("label", "position", e), "active", "yes");
            e && this.trigger("change", {state: e});
            a && this.setMod("focused", "yes")
        }}},val: function(b) {
            if (typeof b == "undefined") {
                return this.elem("input").filter(":checked").val()
            } else {
                var a = this.elem("input").filter(function() {
                    return this.value === b
                });
                a.length && this[a.is(this.buildSelector("input-right")) ? "right" : "left"]();
                return this
            }
        },position: function(a) {
            if (typeof a == "undefined") {
                return this.getMod(this.elem("body"), "position")
            } else {
                this.setMod(this.elem("body"), "position", a)
            }
            return this
        },left: function() {
            this.setMod(this.elem("body"), "position", "left");
            return this
        },right: function() {
            this.setMod(this.elem("body"), "position", "right");
            return this
        },toggle: function() {
            this.toggleMod(this.elem("body"), "position", "right", "left");
            return this
        },isDisabled: function() {
            return this.hasMod("disabled", "yes")
        },_getXFromEvent: function(a) {
            return typeof a.clientX == "number" ? a.clientX : a.originalEvent.touches[0].clientX
        },_focusChecked: function() {
            this.elem("input").filter(":checked").focus()
        },_onLeftInputClick: function() {
            if (this.isDisabled()) {
                return
            }
            this.left()
        },_onRightInputClick: function() {
            if (this.isDisabled()) {
                return
            }
            this.right()
        }}, {live: function() {
            var a = this._root = $("onmousedown" in window ? window : document);
            this.liveBindTo("input", "keydown", function(b) {
                if (b.which == 32 && (!this._lastSpacePress || new Date - this._lastSpacePress > 300)) {
                    this._lastSpacePress = +new Date;
                    this.toggle()
                }
            }).liveBindTo("input", "keyup", function(b) {
                    if (b.which == 32) {
                        this._lastSpacePress = false
                    }
                }).liveBindTo("input", "focusin", function() {
                    this.hasMod("disabled", "yes") || this.setMod("focused", "yes")
                }).liveBindTo("input", "focusout", function() {
                    this._isMouseDown || this.hasMod("disabled", "yes") || this.delMod("focused")
                }).liveBindTo("input-left", "change", function() {
                    this._onLeftInputClick()
                }).liveBindTo("input-right", "change", function() {
                    this._onRightInputClick()
                }).liveBindTo("body", "click", function() {
                    this._onBodyClick()
                }).liveBindTo("button", "mousedown touchstart", function(b) {
                    if (this.isDisabled() || b.which != 1) {
                        return
                    }
                    this.setMod("pressed", "yes")._onTouchStart(b)
                }).liveBindTo("mousedown", function() {
                    if (this.hasMod("disabled", "yes")) {
                        return
                    }
                    this.setMod("focused", "yes");
                    this._isMouseDown = true;
                    this.bindTo(a, "mouseup", function() {
                        this.unbindFrom(a, "mouseup");
                        this._focusChecked();
                        this._isMouseDown = false
                    })
                });
            return false
        },BORDER: 1})
    }
    if (_ycssjs("lrwEuw6tLJmQMSbC/MfQ7BiRNbM")) {
        BEM.DOM.decl({name: "b-form-switch",modName: "theme",modVal: "toggle-s-grey"}, {getButtonWidth: function() {
            return 11
        }})
    }
    if (_ycssjs("PZDksfXPaI2u37aI+18rBMuZs1U")) {
        BEM.DOM.decl("b-customize", {onSetMod: {js: function() {
            this.bindTo("reset", "leftclick", this.reset)
        }},reset: function() {
            var c = this.findBlockOn("filter", "b-form-radio"), b = this.findBlockOn("snippets", "b-form-switch"), a = this.findBlockOn("slideshow", "b-form-radio");
            c && c.uncheckAll().val(c.params.value);
            b && b.val(b.params.value.toString());
            a && a.uncheckAll().val(a.params.value)
        }})
    }




    if (_ycssjs("sudwhF+MngWo3AOIH1yhzRSYYqs")) {
        BEM.DOM.decl({block: "b-images-list",modName: "dangling",modVal: "no"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            !this.hasMod("fluid", "yes") && this.checkDanglingThumbs()
        }},shouldRemoveThumbs: function() {
            if (!this.domElem.length) {
                return false
            }
            var c = this.domElem, e = c.find(".b-images-item:first"), d = c.find(".b-images-item:last"), b, a = this.hasMod("fresh", "yes") ? 0.85 : 0.52;
            if (!e.length || !d.length) {
                return false
            }
            b = d.position();
            return e.position().top !== b.top && (b.left + ~~d.find("img:first").attr("width")) / c.width() < a
        },findDanglingThumbs: function() {
            var a = this.domElem.find(".b-images-item").toArray().slice(-5).reverse(), c = $(a.shift()), b = c.offset().top, d, e = this.findBlockOutside("i-images-lists");
            if (e) {
                d = e._removedThumbs = [];
                d.push(c)
            }
            c.remove();
            $.each(a, function() {
                var f = $(this);
                if (f.offset().top !== b) {
                    return false
                }
                d && d.push(f);
                f.remove()
            })
        }})
    }
    if (_ycssjs("iKIQzIBV0E3lfXwHO7/edQzSU68")) {
        BEM.DOM.decl({block: "b-images-list",modName: "fresh",modVal: "yes"}, {onSetMod: {js: function() {
            this.__base.apply(this, arguments);
            this._count(this.params.counter);
            this.findExtraFreshThumbs()
        }},findExtraFreshThumbs: function() {
            var b = this.findBlocksInside("b-images-item"), h = b.shift(), g = 1, e = h && h.domElem && h.domElem.offset().top || 0, d, f;
            for (var c = 0, a = b.length; c < a; c++) {
                d = this.domElem;
                f = d.offset().top;
                if (f !== e) {
                    g++;
                    e = f
                }
                if (g > 3) {
                    d.remove()
                }
            }
        },_count: function(a) {
            w(this.domElem, a)
        }})
    }







}

