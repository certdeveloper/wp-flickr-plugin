var juicebox_lib = juicebox_lib ? juicebox_lib : {};
(function(ao, an) {
    var al = ao.document
      , bH = ao.navigator
      , by = ao.location;
    var aj = (function() {
        var bN = function(bY, bX) {
            return new bN.fn.init(bY,bX,E)
        }, bR = ao.jQuery, H = ao.$, E, bV = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, bI = /\S/, J = /^\s+/, F = /\s+$/, I = /\d/, B = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bJ = /^[\],:{}\s]*$/, bT = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, bL = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, K = /(?:^|:|,)(?:\s*\[)+/g, z = /(webkit)[ \/]([\w.]+)/, bO = /(opera)(?:.*version)?[ \/]([\w.]+)/, bM = /(msie) ([\w.]+)/, bP = /(mozilla)(?:.*? rv:([\w.]+))?/, C = /-([a-z]|[0-9])/ig, bW = /^-ms-/, bQ = function(bY, bX) {
            return (bX + "").toUpperCase()
        }, bU = bH.userAgent, bS, D, e, M = Object.prototype.toString, G = Object.prototype.hasOwnProperty, A = Array.prototype.push, L = Array.prototype.slice, bK = String.prototype.trim, w = Array.prototype.indexOf, y = {};
        bN.fn = bN.prototype = {
            constructor: bN,
            init: function(bY, bX, b3) {
                var b2, b0, bZ, b1;
                if (!bY) {
                    return this
                }
                if (bY.nodeType) {
                    this.context = this[0] = bY;
                    this.length = 1;
                    return this
                }
                if (bY === "body" && !bX && al.body) {
                    this.context = al;
                    this[0] = al.body;
                    this.selector = bY;
                    this.length = 1;
                    return this
                }
                if (typeof bY === "string") {
                    if (bY.charAt(0) === "<" && bY.charAt(bY.length - 1) === ">" && bY.length >= 3) {
                        b2 = [null, bY, null]
                    } else {
                        b2 = bV.exec(bY)
                    }
                    if (b2 && (b2[1] || !bX)) {
                        if (b2[1]) {
                            bX = bX instanceof bN ? bX[0] : bX;
                            b1 = (bX ? bX.ownerDocument || bX : al);
                            bZ = B.exec(bY);
                            if (bZ) {
                                if (bN.isPlainObject(bX)) {
                                    bY = [al.createElement(bZ[1])];
                                    bN.fn.attr.call(bY, bX, true)
                                } else {
                                    bY = [b1.createElement(bZ[1])]
                                }
                            } else {
                                bZ = bN.buildFragment([b2[1]], [b1]);
                                bY = (bZ.cacheable ? bN.clone(bZ.fragment) : bZ.fragment).childNodes
                            }
                            return bN.merge(this, bY)
                        } else {
                            b0 = al.getElementById(b2[2]);
                            if (b0 && b0.parentNode) {
                                if (b0.id !== b2[2]) {
                                    return b3.find(bY)
                                }
                                this.length = 1;
                                this[0] = b0
                            }
                            this.context = al;
                            this.selector = bY;
                            return this
                        }
                    } else {
                        if (!bX || bX.jquery) {
                            return (bX || b3).find(bY)
                        } else {
                            return this.constructor(bX).find(bY)
                        }
                    }
                } else {
                    if (bN.isFunction(bY)) {
                        return b3.ready(bY)
                    }
                }
                if (bY.selector !== an) {
                    this.selector = bY.selector;
                    this.context = bY.context
                }
                return bN.makeArray(bY, this)
            },
            selector: "",
            jquery: "1.7",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return L.call(this, 0)
            },
            get: function(bX) {
                return bX == null ? this.toArray() : (bX < 0 ? this[this.length + bX] : this[bX])
            },
            pushStack: function(bY, bX, b0) {
                var bZ = this.constructor();
                if (bN.isArray(bY)) {
                    A.apply(bZ, bY)
                } else {
                    bN.merge(bZ, bY)
                }
                bZ.prevObject = this;
                bZ.context = this.context;
                if (bX === "find") {
                    bZ.selector = this.selector + (this.selector ? " " : "") + b0
                } else {
                    if (bX) {
                        bZ.selector = this.selector + "." + bX + "(" + b0 + ")"
                    }
                }
                return bZ
            },
            each: function(bY, bX) {
                return bN.each(this, bY, bX)
            },
            ready: function(bX) {
                bN.bindReady();
                D.add(bX);
                return this
            },
            eq: function(bX) {
                return bX === -1 ? this.slice(bX) : this.slice(bX, +bX + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(L.apply(this, arguments), "slice", L.call(arguments).join(","))
            },
            map: function(bX) {
                return this.pushStack(bN.map(this, function(bY, bZ) {
                    return bX.call(bY, bZ, bY)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: A,
            sort: [].sort,
            splice: [].splice
        };
        bN.fn.init.prototype = bN.fn;
        bN.extend = bN.fn.extend = function() {
            var b5, bZ, bX, bY, b3, b4, b2 = arguments[0] || {}, b1 = 1, b0 = arguments.length, b6 = false;
            if (typeof b2 === "boolean") {
                b6 = b2;
                b2 = arguments[1] || {};
                b1 = 2
            }
            if (typeof b2 !== "object" && !bN.isFunction(b2)) {
                b2 = {}
            }
            if (b0 === b1) {
                b2 = this;
                --b1
            }
            for (; b1 < b0; b1++) {
                if ((b5 = arguments[b1]) != null) {
                    for (bZ in b5) {
                        bX = b2[bZ];
                        bY = b5[bZ];
                        if (b2 === bY) {
                            continue
                        }
                        if (b6 && bY && (bN.isPlainObject(bY) || (b3 = bN.isArray(bY)))) {
                            if (b3) {
                                b3 = false;
                                b4 = bX && bN.isArray(bX) ? bX : []
                            } else {
                                b4 = bX && bN.isPlainObject(bX) ? bX : {}
                            }
                            b2[bZ] = bN.extend(b6, b4, bY)
                        } else {
                            if (bY !== an) {
                                b2[bZ] = bY
                            }
                        }
                    }
                }
            }
            return b2
        }
        ;
        bN.extend({
            noConflict: function(bX) {
                if (ao.$ === bN) {
                    ao.$ = H
                }
                if (bX && ao.jQuery === bN) {
                    ao.jQuery = bR
                }
                return bN
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(bX) {
                if (bX) {
                    bN.readyWait++
                } else {
                    bN.ready(true)
                }
            },
            ready: function(bX) {
                if ((bX === true && !--bN.readyWait) || (bX !== true && !bN.isReady)) {
                    if (!al.body) {
                        return setTimeout(bN.ready, 1)
                    }
                    bN.isReady = true;
                    if (bX !== true && --bN.readyWait > 0) {
                        return
                    }
                    D.fireWith(al, [bN]);
                    if (bN.fn.trigger) {
                        bN(al).trigger("ready").unbind("ready")
                    }
                }
            },
            bindReady: function() {
                if (D) {
                    return
                }
                D = bN.Callbacks("once memory");
                if (al.readyState === "complete") {
                    return setTimeout(bN.ready, 1)
                }
                if (al.addEventListener) {
                    al.addEventListener("DOMContentLoaded", e, false);
                    ao.addEventListener("load", bN.ready, false)
                } else {
                    if (al.attachEvent) {
                        al.attachEvent("onreadystatechange", e);
                        ao.attachEvent("onload", bN.ready);
                        var bX = false;
                        try {
                            bX = ao.frameElement == null
                        } catch (bY) {}
                        if (al.documentElement.doScroll && bX) {
                            x()
                        }
                    }
                }
            },
            isFunction: function(bX) {
                return bN.type(bX) === "function"
            },
            isArray: Array.isArray || function(bX) {
                return bN.type(bX) === "array"
            }
            ,
            isWindow: function(bX) {
                return bX && typeof bX === "object" && "setInterval"in bX
            },
            isNumeric: function(bX) {
                return bX != null && I.test(bX) && !isNaN(bX)
            },
            type: function(bX) {
                return bX == null ? String(bX) : y[M.call(bX)] || "object"
            },
            isPlainObject: function(bY) {
                if (!bY || bN.type(bY) !== "object" || bY.nodeType || bN.isWindow(bY)) {
                    return false
                }
                try {
                    if (bY.constructor && !G.call(bY, "constructor") && !G.call(bY.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (bZ) {
                    return false
                }
                var bX;
                for (bX in bY) {}
                return bX === an || G.call(bY, bX)
            },
            isEmptyObject: function(bY) {
                for (var bX in bY) {
                    return false
                }
                return true
            },
            error: function(bX) {
                throw bX
            },
            parseJSON: function(bX) {
                if (typeof bX !== "string" || !bX) {
                    return null
                }
                bX = bN.trim(bX);
                if (ao.JSON && ao.JSON.parse) {
                    return ao.JSON.parse(bX)
                }
                if (bJ.test(bX.replace(bT, "@").replace(bL, "]").replace(K, ""))) {
                    return (new Function("return " + bX))()
                }
                bN.error("Invalid JSON: " + bX)
            },
            noop: function() {},
            globalEval: function(bX) {
                if (bX && bI.test(bX)) {
                    (ao.execScript || function(bY) {
                        ao["eval"].call(ao, bY)
                    }
                    )(bX)
                }
            },
            camelCase: function(bX) {
                return bX.replace(bW, "ms-").replace(C, bQ)
            },
            nodeName: function(bY, bX) {
                return bY.nodeName && bY.nodeName.toUpperCase() === bX.toUpperCase()
            },
            each: function(bY, bX, b3) {
                var b2, b0 = 0, b1 = bY.length, bZ = b1 === an || bN.isFunction(bY);
                if (b3) {
                    if (bZ) {
                        for (b2 in bY) {
                            if (bX.apply(bY[b2], b3) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b0 < b1; ) {
                            if (bX.apply(bY[b0++], b3) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (bZ) {
                        for (b2 in bY) {
                            if (bX.call(bY[b2], b2, bY[b2]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b0 < b1; ) {
                            if (bX.call(bY[b0], b0, bY[b0++]) === false) {
                                break
                            }
                        }
                    }
                }
                return bY
            },
            trim: bK ? function(bX) {
                return bX == null ? "" : bK.call(bX)
            }
            : function(bX) {
                return bX == null ? "" : bX.toString().replace(J, "").replace(F, "")
            }
            ,
            makeArray: function(bY, bX) {
                var b0 = bX || [];
                if (bY != null) {
                    var bZ = bN.type(bY);
                    if (bY.length == null || bZ === "string" || bZ === "function" || bZ === "regexp" || bN.isWindow(bY)) {
                        A.call(b0, bY)
                    } else {
                        bN.merge(b0, bY)
                    }
                }
                return b0
            },
            inArray: function(bY, bX, bZ) {
                var b0;
                if (bX) {
                    if (w) {
                        return w.call(bX, bY, bZ)
                    }
                    b0 = bX.length;
                    bZ = bZ ? bZ < 0 ? Math.max(0, b0 + bZ) : bZ : 0;
                    for (; bZ < b0; bZ++) {
                        if (bZ in bX && bX[bZ] === bY) {
                            return bZ
                        }
                    }
                }
                return -1
            },
            merge: function(bZ, bX) {
                var b1 = bZ.length
                  , b0 = 0;
                if (typeof bX.length === "number") {
                    for (var bY = bX.length; b0 < bY; b0++) {
                        bZ[b1++] = bX[b0]
                    }
                } else {
                    while (bX[b0] !== an) {
                        bZ[b1++] = bX[b0++]
                    }
                }
                bZ.length = b1;
                return bZ
            },
            grep: function(bY, bX, b3) {
                var b2 = [], b1;
                b3 = !!b3;
                for (var bZ = 0, b0 = bY.length; bZ < b0; bZ++) {
                    b1 = !!bX(bY[bZ], bZ);
                    if (b3 !== b1) {
                        b2.push(bY[bZ])
                    }
                }
                return b2
            },
            map: function(b4, b3, b2) {
                var b1, b5, b0 = [], bY = 0, bX = b4.length, bZ = b4 instanceof bN || bX !== an && typeof bX === "number" && ((bX > 0 && b4[0] && b4[bX - 1]) || bX === 0 || bN.isArray(b4));
                if (bZ) {
                    for (; bY < bX; bY++) {
                        b1 = b3(b4[bY], bY, b2);
                        if (b1 != null) {
                            b0[b0.length] = b1
                        }
                    }
                } else {
                    for (b5 in b4) {
                        b1 = b3(b4[b5], b5, b2);
                        if (b1 != null) {
                            b0[b0.length] = b1
                        }
                    }
                }
                return b0.concat.apply([], b0)
            },
            guid: 1,
            access: function(b5, b4, b3, b2, b1, b0) {
                var bZ = b5.length;
                if (typeof b4 === "object") {
                    for (var bX in b4) {
                        bN.access(b5, bX, b4[bX], b2, b1, b3)
                    }
                    return b5
                }
                if (b3 !== an) {
                    b2 = !b0 && b2 && bN.isFunction(b3);
                    for (var bY = 0; bY < bZ; bY++) {
                        b1(b5[bY], b4, b2 ? b3.call(b5[bY], bY, b1(b5[bY], b4)) : b3, b0)
                    }
                    return b5
                }
                return bZ ? b1(b5[0], b4) : an
            },
            now: function() {
                return (new Date()).getTime()
            },
            uaMatch: function(bY) {
                bY = bY.toLowerCase();
                var bX = z.exec(bY) || bO.exec(bY) || bM.exec(bY) || bY.indexOf("compatible") < 0 && bP.exec(bY) || [];
                return {
                    browser: bX[1] || "",
                    version: bX[2] || "0"
                }
            },
            sub: function() {
                function bX(b1, b0) {
                    return new bX.fn.init(b1,b0)
                }
                bN.extend(true, bX, this);
                bX.superclass = this;
                bX.fn = bX.prototype = this();
                bX.fn.constructor = bX;
                bX.sub = this.sub;
                bX.fn.init = function bY(b1, b0) {
                    if (b0 && b0 instanceof bN && !(b0 instanceof bX)) {
                        b0 = bX(b0)
                    }
                    return bN.fn.init.call(this, b1, b0, bZ)
                }
                ;
                bX.fn.init.prototype = bX.fn;
                var bZ = bX(al);
                return bX
            },
            browser: {}
        });
        bN.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(bY, bX) {
            y["[object " + bX + "]"] = bX.toLowerCase()
        });
        bS = bN.uaMatch(bU);
        if (bS.browser) {
            bN.browser[bS.browser] = true;
            bN.browser.version = bS.version
        }
        if (bN.browser.webkit) {
            bN.browser.safari = true
        }
        if (bI.test("\xA0")) {
            J = /^[\s\xA0]+/;
            F = /[\s\xA0]+$/
        }
        E = bN(al);
        if (al.addEventListener) {
            e = function() {
                al.removeEventListener("DOMContentLoaded", e, false);
                bN.ready()
            }
        } else {
            if (al.attachEvent) {
                e = function() {
                    if (al.readyState === "complete") {
                        al.detachEvent("onreadystatechange", e);
                        bN.ready()
                    }
                }
            }
        }
        function x() {
            if (bN.isReady) {
                return
            }
            try {
                al.documentElement.doScroll("left")
            } catch (bX) {
                setTimeout(x, 1);
                return
            }
            bN.ready()
        }
        if (typeof define === "function" && define.amd && define.amd.jQuery) {
            define("jquery", [], function() {
                return bN
            })
        }
        return bN
    }
    )();
    var a8 = {};
    function ag(w) {
        var e = a8[w] = {}, x, y;
        w = w.split(/\s+/);
        for (x = 0,
        y = w.length; x < y; x++) {
            e[w[x]] = true
        }
        return e
    }
    aj.Callbacks = function(C) {
        C = C ? (a8[C] || ag(C)) : {};
        var B = [], D = [], x, y, w, z, A, F = function(G) {
            var H, K, J, I, L;
            for (H = 0,
            K = G.length; H < K; H++) {
                J = G[H];
                I = aj.type(J);
                if (I === "array") {
                    F(J)
                } else {
                    if (I === "function") {
                        if (!C.unique || !E.has(J)) {
                            B.push(J)
                        }
                    }
                }
            }
        }, e = function(H, G) {
            G = G || [];
            x = !C.memory || [H, G];
            y = true;
            A = w || 0;
            w = 0;
            z = B.length;
            for (; B && A < z; A++) {
                if (B[A].apply(H, G) === false && C.stopOnFalse) {
                    x = true;
                    break
                }
            }
            y = false;
            if (B) {
                if (!C.once) {
                    if (D && D.length) {
                        x = D.shift();
                        E.fireWith(x[0], x[1])
                    }
                } else {
                    if (x === true) {
                        E.disable()
                    } else {
                        B = []
                    }
                }
            }
        }, E = {
            add: function() {
                if (B) {
                    var G = B.length;
                    F(arguments);
                    if (y) {
                        z = B.length
                    } else {
                        if (x && x !== true) {
                            w = G;
                            e(x[0], x[1])
                        }
                    }
                }
                return this
            },
            remove: function() {
                if (B) {
                    var G = arguments
                      , I = 0
                      , J = G.length;
                    for (; I < J; I++) {
                        for (var H = 0; H < B.length; H++) {
                            if (G[I] === B[H]) {
                                if (y) {
                                    if (H <= z) {
                                        z--;
                                        if (H <= A) {
                                            A--
                                        }
                                    }
                                }
                                B.splice(H--, 1);
                                if (C.unique) {
                                    break
                                }
                            }
                        }
                    }
                }
                return this
            },
            has: function(G) {
                if (B) {
                    var H = 0
                      , I = B.length;
                    for (; H < I; H++) {
                        if (G === B[H]) {
                            return true
                        }
                    }
                }
                return false
            },
            empty: function() {
                B = [];
                return this
            },
            disable: function() {
                B = D = x = an;
                return this
            },
            disabled: function() {
                return !B
            },
            lock: function() {
                D = an;
                if (!x || x === true) {
                    E.disable()
                }
                return this
            },
            locked: function() {
                return !D
            },
            fireWith: function(H, G) {
                if (D) {
                    if (y) {
                        if (!C.once) {
                            D.push([H, G])
                        }
                    } else {
                        if (!(C.once && x)) {
                            e(H, G)
                        }
                    }
                }
                return this
            },
            fire: function() {
                E.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!x
            }
        };
        return E
    }
    ;
    var a7 = [].slice;
    aj.extend({
        Deferred: function(z) {
            var y = aj.Callbacks("once memory"), x = aj.Callbacks("once memory"), w = aj.Callbacks("memory"), e = "pending", B = {
                resolve: y,
                reject: x,
                notify: w
            }, D = {
                done: y.add,
                fail: x.add,
                progress: w.add,
                state: function() {
                    return e
                },
                isResolved: y.fired,
                isRejected: x.fired,
                then: function(F, E, G) {
                    C.done(F).fail(E).progress(G);
                    return this
                },
                always: function() {
                    return C.done.apply(C, arguments).fail.apply(C, arguments)
                },
                pipe: function(G, F, E) {
                    return aj.Deferred(function(H) {
                        aj.each({
                            done: [G, "resolve"],
                            fail: [F, "reject"],
                            progress: [E, "notify"]
                        }, function(J, I) {
                            var M = I[0], L = I[1], K;
                            if (aj.isFunction(M)) {
                                C[J](function() {
                                    K = M.apply(this, arguments);
                                    if (K && aj.isFunction(K.promise)) {
                                        K.promise().then(H.resolve, H.reject, H.notify)
                                    } else {
                                        H[L + "With"](this === C ? H : this, [K])
                                    }
                                })
                            } else {
                                C[J](H[L])
                            }
                        })
                    }).promise()
                },
                promise: function(F) {
                    if (F == null) {
                        F = D
                    } else {
                        for (var E in D) {
                            F[E] = D[E]
                        }
                    }
                    return F
                }
            }, C = D.promise({}), A;
            for (A in B) {
                C[A] = B[A].fire;
                C[A + "With"] = B[A].fireWith
            }
            C.done(function() {
                e = "resolved"
            }, x.disable, w.lock).fail(function() {
                e = "rejected"
            }, y.disable, w.lock);
            if (z) {
                z.call(C, C)
            }
            return C
        }
    });
    aj.support = (function() {
        var M = al.createElement("div"), bI = al.documentElement, z, bJ, G, x, F, A, D, w, E, H, C, L, J, y, B, I, bK;
        M.setAttribute("className", "t");
        M.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";
        z = M.getElementsByTagName("*");
        bJ = M.getElementsByTagName("a")[0];
        if (!z || !z.length || !bJ) {
            return {}
        }
        G = al.createElement("select");
        x = G.appendChild(al.createElement("option"));
        F = M.getElementsByTagName("input")[0];
        D = {
            leadingWhitespace: (M.firstChild.nodeType === 3),
            tbody: !M.getElementsByTagName("tbody").length,
            htmlSerialize: !!M.getElementsByTagName("link").length,
            style: /top/.test(bJ.getAttribute("style")),
            hrefNormalized: (bJ.getAttribute("href") === "/a"),
            opacity: /^0.55/.test(bJ.style.opacity),
            cssFloat: !!bJ.style.cssFloat,
            unknownElems: !!M.getElementsByTagName("nav").length,
            checkOn: (F.value === "on"),
            optSelected: x.selected,
            getSetAttribute: M.className !== "t",
            enctype: !!al.createElement("form").enctype,
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        F.checked = true;
        D.noCloneChecked = F.cloneNode(true).checked;
        G.disabled = true;
        D.optDisabled = !x.disabled;
        try {
            delete M.test
        } catch (K) {
            D.deleteExpando = false
        }
        if (!M.addEventListener && M.attachEvent && M.fireEvent) {
            M.attachEvent("onclick", function() {
                D.noCloneEvent = false
            });
            M.cloneNode(true).fireEvent("onclick")
        }
        F = al.createElement("input");
        F.value = "t";
        F.setAttribute("type", "radio");
        D.radioValue = F.value === "t";
        F.setAttribute("checked", "checked");
        M.appendChild(F);
        w = al.createDocumentFragment();
        w.appendChild(M.lastChild);
        D.checkClone = w.cloneNode(true).cloneNode(true).lastChild.checked;
        M.innerHTML = "";
        M.style.width = M.style.paddingLeft = "1px";
        E = al.getElementsByTagName("body")[0];
        C = al.createElement(E ? "div" : "body");
        L = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (E) {
            aj.extend(L, {
                position: "absolute",
                left: "-999px",
                top: "-999px"
            })
        }
        for (I in L) {
            C.style[I] = L[I]
        }
        C.appendChild(M);
        H = E || bI;
        H.insertBefore(C, H.firstChild);
        D.appendChecked = F.checked;
        D.boxModel = M.offsetWidth === 2;
        if ("zoom"in M.style) {
            M.style.display = "inline";
            M.style.zoom = 1;
            D.inlineBlockNeedsLayout = (M.offsetWidth === 2);
            M.style.display = "";
            M.innerHTML = "<div style='width:4px;'></div>";
            D.shrinkWrapBlocks = (M.offsetWidth !== 2)
        }
        M.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        J = M.getElementsByTagName("td");
        bK = (J[0].offsetHeight === 0);
        J[0].style.display = "";
        J[1].style.display = "none";
        D.reliableHiddenOffsets = bK && (J[0].offsetHeight === 0);
        M.innerHTML = "";
        if (al.defaultView && al.defaultView.getComputedStyle) {
            A = al.createElement("div");
            A.style.width = "0";
            A.style.marginRight = "0";
            M.appendChild(A);
            D.reliableMarginRight = (parseInt((al.defaultView.getComputedStyle(A, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0
        }
        if (M.attachEvent) {
            for (I in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                B = "on" + I;
                bK = (B in M);
                if (!bK) {
                    M.setAttribute(B, "return;");
                    bK = (typeof M[B] === "function")
                }
                D[I + "Bubbles"] = bK
            }
        }
        aj(function() {
            var bR, bT, bU, bS, bM, bN, bL = 1, bQ = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", bP = "visibility:hidden;border:0;", e = "style='" + bQ + "border:5px solid #000;padding:0;'", bO = "<div " + e + "><div></div></div><table " + e + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            E = al.getElementsByTagName("body")[0];
            if (!E) {
                return
            }
            bR = al.createElement("div");
            bR.style.cssText = bP + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
            E.insertBefore(bR, E.firstChild);
            C = al.createElement("div");
            C.style.cssText = bQ + bP;
            C.innerHTML = bO;
            bR.appendChild(C);
            bT = C.firstChild;
            bU = bT.firstChild;
            bM = bT.nextSibling.firstChild.firstChild;
            bN = {
                doesNotAddBorder: (bU.offsetTop !== 5),
                doesAddBorderForTableAndCells: (bM.offsetTop === 5)
            };
            bU.style.position = "fixed";
            bU.style.top = "20px";
            bN.fixedPosition = (bU.offsetTop === 20 || bU.offsetTop === 15);
            bU.style.position = bU.style.top = "";
            bT.style.overflow = "hidden";
            bT.style.position = "relative";
            bN.subtractsBorderForOverflowNotVisible = (bU.offsetTop === -5);
            bN.doesNotIncludeMarginInBodyOffset = (E.offsetTop !== bL);
            E.removeChild(bR);
            C = bR = null;
            aj.extend(D, bN)
        });
        C.innerHTML = "";
        H.removeChild(C);
        C = w = G = x = E = A = M = F = null;
        return D
    }
    )();
    aj.boxModel = aj.support.boxModel;
    var a5 = /^(?:\{.*\}|\[.*\])$/
      , aI = /([A-Z])/g;
    aj.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (aj.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? aj.cache[e[aj.expando]] : e[aj.expando];
            return !!e && !ad(e)
        },
        data: function(H, F, E, D) {
            if (!aj.acceptData(H)) {
                return
            }
            var B, y, C, G = aj.expando, A = typeof F === "string", I = H.nodeType, w = I ? aj.cache : H, x = I ? H[aj.expando] : H[aj.expando] && aj.expando, z = F === "events";
            if ((!x || !w[x] || (!z && !D && !w[x].data)) && A && E === an) {
                return
            }
            if (!x) {
                if (I) {
                    H[aj.expando] = x = ++aj.uuid
                } else {
                    x = aj.expando
                }
            }
            if (!w[x]) {
                w[x] = {};
                if (!I) {
                    w[x].toJSON = aj.noop
                }
            }
            if (typeof F === "object" || typeof F === "function") {
                if (D) {
                    w[x] = aj.extend(w[x], F)
                } else {
                    w[x].data = aj.extend(w[x].data, F)
                }
            }
            B = y = w[x];
            if (!D) {
                if (!y.data) {
                    y.data = {}
                }
                y = y.data
            }
            if (E !== an) {
                y[aj.camelCase(F)] = E
            }
            if (z && !y[F]) {
                return B.events
            }
            if (A) {
                C = y[F];
                if (C == null) {
                    C = y[aj.camelCase(F)]
                }
            } else {
                C = y
            }
            return C
        },
        removeData: function(D, B, A) {
            if (!aj.acceptData(D)) {
                return
            }
            var z, y, x, C = aj.expando, E = D.nodeType, e = E ? aj.cache : D, w = E ? D[aj.expando] : aj.expando;
            if (!e[w]) {
                return
            }
            if (B) {
                z = A ? e[w] : e[w].data;
                if (z) {
                    if (aj.isArray(B)) {
                        B = B
                    } else {
                        if (B in z) {
                            B = [B]
                        } else {
                            B = aj.camelCase(B);
                            if (B in z) {
                                B = [B]
                            } else {
                                B = B.split(" ")
                            }
                        }
                    }
                    for (y = 0,
                    x = B.length; y < x; y++) {
                        delete z[B[y]]
                    }
                    if (!(A ? ad : aj.isEmptyObject)(z)) {
                        return
                    }
                }
            }
            if (!A) {
                delete e[w].data;
                if (!ad(e[w])) {
                    return
                }
            }
            if (aj.support.deleteExpando || !e.setInterval) {
                delete e[w]
            } else {
                e[w] = null
            }
            if (E) {
                if (aj.support.deleteExpando) {
                    delete D[aj.expando]
                } else {
                    if (D.removeAttribute) {
                        D.removeAttribute(aj.expando)
                    } else {
                        D[aj.expando] = null
                    }
                }
            }
        },
        _data: function(w, e, x) {
            return aj.data(w, e, x, true)
        },
        acceptData: function(w) {
            if (w.nodeName) {
                var e = aj.noData[w.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || w.getAttribute("classid") !== e)
                }
            }
            return true
        }
    });
    aj.fn.extend({
        data: function(w, C) {
            var B, e, y, A = null;
            if (typeof w === "undefined") {
                if (this.length) {
                    A = aj.data(this[0]);
                    if (this[0].nodeType === 1 && !aj._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var z = 0, x = e.length; z < x; z++) {
                            y = e[z].name;
                            if (y.indexOf("data-") === 0) {
                                y = aj.camelCase(y.substring(5));
                                bk(this[0], y, A[y])
                            }
                        }
                        aj._data(this[0], "parsedAttrs", true)
                    }
                }
                return A
            } else {
                if (typeof w === "object") {
                    return this.each(function() {
                        aj.data(this, w)
                    })
                }
            }
            B = w.split(".");
            B[1] = B[1] ? "." + B[1] : "";
            if (C === an) {
                A = this.triggerHandler("getData" + B[1] + "!", [B[0]]);
                if (A === an && this.length) {
                    A = aj.data(this[0], w);
                    A = bk(this[0], w, A)
                }
                return A === an && B[1] ? this.data(B[0]) : A
            } else {
                return this.each(function() {
                    var D = aj(this)
                      , E = [B[0], C];
                    D.triggerHandler("setData" + B[1] + "!", E);
                    aj.data(this, w, C);
                    D.triggerHandler("changeData" + B[1] + "!", E)
                })
            }
        },
        removeData: function(e) {
            return this.each(function() {
                aj.removeData(this, e)
            })
        }
    });
    function bk(x, w, A) {
        if (A === an && x.nodeType === 1) {
            var z = "data-" + w.replace(aI, "-$1").toLowerCase();
            A = x.getAttribute(z);
            if (typeof A === "string") {
                try {
                    A = A === "true" ? true : A === "false" ? false : A === "null" ? null : aj.isNumeric(A) ? parseFloat(A) : a5.test(A) ? aj.parseJSON(A) : A
                } catch (y) {}
                aj.data(x, w, A)
            } else {
                A = an
            }
        }
        return A
    }
    function ad(w) {
        for (var e in w) {
            if (e === "data" && aj.isEmptyObject(w[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    function bv(y, e, B) {
        var A = e + "defer"
          , x = e + "queue"
          , w = e + "mark"
          , z = aj._data(y, A);
        if (z && (B === "queue" || !aj._data(y, x)) && (B === "mark" || !aj._data(y, w))) {
            setTimeout(function() {
                if (!aj._data(y, x) && !aj._data(y, w)) {
                    aj.removeData(y, A, true);
                    z.fire()
                }
            }, 0)
        }
    }
    aj.extend({
        _mark: function(w, e) {
            if (w) {
                e = (e || "fx") + "mark";
                aj._data(w, e, (aj._data(w, e) || 0) + 1)
            }
        },
        _unmark: function(w, e, z) {
            if (w !== true) {
                z = e;
                e = w;
                w = false
            }
            if (e) {
                z = z || "fx";
                var y = z + "mark"
                  , x = w ? 0 : ((aj._data(e, y) || 1) - 1);
                if (x) {
                    aj._data(e, y, x)
                } else {
                    aj.removeData(e, y, true);
                    bv(e, z, "mark")
                }
            }
        },
        queue: function(w, e, y) {
            var x;
            if (w) {
                e = (e || "fx") + "queue";
                x = aj._data(w, e);
                if (y) {
                    if (!x || aj.isArray(y)) {
                        x = aj._data(w, e, aj.makeArray(y))
                    } else {
                        x.push(y)
                    }
                }
                return x || []
            }
        },
        dequeue: function(x, w) {
            w = w || "fx";
            var z = aj.queue(x, w)
              , y = z.shift()
              , e = {};
            if (y === "inprogress") {
                y = z.shift()
            }
            if (y) {
                if (w === "fx") {
                    z.unshift("inprogress")
                }
                aj._data(x, w + ".run", e);
                y.call(x, function() {
                    aj.dequeue(x, w)
                }, e)
            }
            if (!z.length) {
                aj.removeData(x, w + "queue " + w + ".run", true);
                bv(x, w, "queue")
            }
        }
    });
    aj.fn.extend({
        queue: function(e, w) {
            if (typeof e !== "string") {
                w = e;
                e = "fx"
            }
            if (w === an) {
                return aj.queue(this[0], e)
            }
            return this.each(function() {
                var x = aj.queue(this, e, w);
                if (e === "fx" && x[0] !== "inprogress") {
                    aj.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                aj.dequeue(this, e)
            })
        },
        delay: function(x, w) {
            x = aj.fx ? aj.fx.speeds[x] || x : x;
            w = w || "fx";
            return this.queue(w, function(y, e) {
                var z = setTimeout(y, x);
                e.stop = function() {
                    clearTimeout(z)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        }
    });
    var a4 = /[\n\t\r]/g, ar = /\s+/, ba = /\r/g, f = /^(?:button|input)$/i, Q = /^(?:button|input|object|select|textarea)$/i, j = /^a(?:rea)?$/i, ay = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, S = aj.support.getSetAttribute, br, be, aM;
    aj.fn.extend({
        attr: function(w, e) {
            return aj.access(this, w, e, true, aj.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                aj.removeAttr(this, e)
            })
        },
        addClass: function(y) {
            var e, z, x, A, B, C, w;
            if (aj.isFunction(y)) {
                return this.each(function(D) {
                    aj(this).addClass(y.call(this, D, this.className))
                })
            }
            if (y && typeof y === "string") {
                e = y.split(ar);
                for (z = 0,
                x = this.length; z < x; z++) {
                    A = this[z];
                    if (A.nodeType === 1) {
                        if (!A.className && e.length === 1) {
                            A.className = y
                        } else {
                            B = " " + A.className + " ";
                            for (C = 0,
                            w = e.length; C < w; C++) {
                                if (!~B.indexOf(" " + e[C] + " ")) {
                                    B += e[C] + " "
                                }
                            }
                            A.className = aj.trim(B)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(y) {
            var e, z, x, B, A, C, w;
            if (aj.isFunction(y)) {
                return this.each(function(D) {
                    aj(this).removeClass(y.call(this, D, this.className))
                })
            }
            if ((y && typeof y === "string") || y === an) {
                e = (y || "").split(ar);
                for (z = 0,
                x = this.length; z < x; z++) {
                    B = this[z];
                    if (B.nodeType === 1 && B.className) {
                        if (y) {
                            A = (" " + B.className + " ").replace(a4, " ");
                            for (C = 0,
                            w = e.length; C < w; C++) {
                                A = A.replace(" " + e[C] + " ", " ")
                            }
                            B.className = aj.trim(A)
                        } else {
                            B.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(e, y) {
            var x = typeof e
              , w = typeof y === "boolean";
            if (aj.isFunction(e)) {
                return this.each(function(z) {
                    aj(this).toggleClass(e.call(this, z, this.className, y), y)
                })
            }
            return this.each(function() {
                if (x === "string") {
                    var z, B = 0, A = aj(this), C = y, D = e.split(ar);
                    while ((z = D[B++])) {
                        C = w ? C : !A.hasClass(z);
                        A[C ? "addClass" : "removeClass"](z)
                    }
                } else {
                    if (x === "undefined" || x === "boolean") {
                        if (this.className) {
                            aj._data(this, "__className__", this.className)
                        }
                        this.className = this.className || e === false ? "" : aj._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(x) {
            var e = " " + x + " "
              , y = 0
              , w = this.length;
            for (; y < w; y++) {
                if (this[y].nodeType === 1 && (" " + this[y].className + " ").replace(a4, " ").indexOf(e) > -1) {
                    return true
                }
            }
            return false
        },
        val: function(z) {
            var y, e, x, w = this[0];
            if (!arguments.length) {
                if (w) {
                    y = aj.valHooks[w.nodeName.toLowerCase()] || aj.valHooks[w.type];
                    if (y && "get"in y && (e = y.get(w, "value")) !== an) {
                        return e
                    }
                    e = w.value;
                    return typeof e === "string" ? e.replace(ba, "") : e == null ? "" : e
                }
                return an
            }
            x = aj.isFunction(z);
            return this.each(function(B) {
                var A = aj(this), C;
                if (this.nodeType !== 1) {
                    return
                }
                if (x) {
                    C = z.call(this, B, A.val())
                } else {
                    C = z
                }
                if (C == null) {
                    C = ""
                } else {
                    if (typeof C === "number") {
                        C += ""
                    } else {
                        if (aj.isArray(C)) {
                            C = aj.map(C, function(D) {
                                return D == null ? "" : D + ""
                            })
                        }
                    }
                }
                y = aj.valHooks[this.nodeName.toLowerCase()] || aj.valHooks[this.type];
                if (!y || !("set"in y) || y.set(this, C, "value") === an) {
                    this.value = C
                }
            })
        }
    });
    aj.extend({
        valHooks: {
            option: {
                get: function(w) {
                    var e = w.attributes.value;
                    return !e || e.specified ? w.value : w.text
                }
            },
            select: {
                get: function(B) {
                    var z, e, A, x, y = B.selectedIndex, C = [], D = B.options, w = B.type === "select-one";
                    if (y < 0) {
                        return null
                    }
                    e = w ? y : 0;
                    A = w ? y + 1 : D.length;
                    for (; e < A; e++) {
                        x = D[e];
                        if (x.selected && (aj.support.optDisabled ? !x.disabled : x.getAttribute("disabled") === null) && (!x.parentNode.disabled || !aj.nodeName(x.parentNode, "optgroup"))) {
                            z = aj(x).val();
                            if (w) {
                                return z
                            }
                            C.push(z)
                        }
                    }
                    if (w && !C.length && D.length) {
                        return aj(D[y]).val()
                    }
                    return C
                },
                set: function(w, e) {
                    var x = aj.makeArray(e);
                    aj(w).find("option").each(function() {
                        this.selected = aj.inArray(aj(this).val(), x) >= 0
                    });
                    if (!x.length) {
                        w.selectedIndex = -1
                    }
                    return x
                }
            }
        },
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(y, x, D, C) {
            var B, w, A, z = y.nodeType;
            if (!y || z === 3 || z === 8 || z === 2) {
                return an
            }
            if (C && x in aj.attrFn) {
                return aj(y)[x](D)
            }
            if (!("getAttribute"in y)) {
                return aj.prop(y, x, D)
            }
            A = z !== 1 || !aj.isXMLDoc(y);
            if (A) {
                x = x.toLowerCase();
                w = aj.attrHooks[x] || (ay.test(x) ? be : br)
            }
            if (D !== an) {
                if (D === null) {
                    aj.removeAttr(y, x);
                    return an
                } else {
                    if (w && "set"in w && A && (B = w.set(y, D, x)) !== an) {
                        return B
                    } else {
                        y.setAttribute(x, "" + D);
                        return D
                    }
                }
            } else {
                if (w && "get"in w && A && (B = w.get(y, x)) !== null) {
                    return B
                } else {
                    B = y.getAttribute(x);
                    return B === null ? an : B
                }
            }
        },
        removeAttr: function(x, e) {
            var B, A, y, w, z = 0;
            if (x.nodeType === 1) {
                A = (e || "").split(ar);
                w = A.length;
                for (; z < w; z++) {
                    y = A[z].toLowerCase();
                    B = aj.propFix[y] || y;
                    aj.attr(x, y, "");
                    x.removeAttribute(S ? y : B);
                    if (ay.test(y) && B in x) {
                        x[B] = false
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(w, e) {
                    if (f.test(w.nodeName) && w.parentNode) {
                        aj.error("type property can't be changed")
                    } else {
                        if (!aj.support.radioValue && e === "radio" && aj.nodeName(w, "input")) {
                            var x = w.value;
                            w.setAttribute("type", e);
                            if (x) {
                                w.value = x
                            }
                            return e
                        }
                    }
                }
            },
            value: {
                get: function(w, e) {
                    if (br && aj.nodeName(w, "button")) {
                        return br.get(w, e)
                    }
                    return e in w ? w.value : null
                },
                set: function(w, e, x) {
                    if (br && aj.nodeName(w, "button")) {
                        return br.set(w, e, x)
                    }
                    w.value = e
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
        prop: function(x, w, B) {
            var A, e, z, y = x.nodeType;
            if (!x || y === 3 || y === 8 || y === 2) {
                return an
            }
            z = y !== 1 || !aj.isXMLDoc(x);
            if (z) {
                w = aj.propFix[w] || w;
                e = aj.propHooks[w]
            }
            if (B !== an) {
                if (e && "set"in e && (A = e.set(x, B, w)) !== an) {
                    return A
                } else {
                    return (x[w] = B)
                }
            } else {
                if (e && "get"in e && (A = e.get(x, w)) !== null) {
                    return A
                } else {
                    return x[w]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(w) {
                    var e = w.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : Q.test(w.nodeName) || j.test(w.nodeName) && w.href ? 0 : an
                }
            }
        }
    });
    aj.attrHooks.tabindex = aj.propHooks.tabIndex;
    be = {
        get: function(w, e) {
            var y, x = aj.prop(w, e);
            return x === true || typeof x !== "boolean" && (y = w.getAttributeNode(e)) && y.nodeValue !== false ? e.toLowerCase() : an
        },
        set: function(w, e, y) {
            var x;
            if (e === false) {
                aj.removeAttr(w, y)
            } else {
                x = aj.propFix[y] || y;
                if (x in w) {
                    w[x] = true
                }
                w.setAttribute(y, y.toLowerCase())
            }
            return y
        }
    };
    if (!S) {
        aM = {
            name: true,
            id: true
        };
        br = aj.valHooks.button = {
            get: function(w, e) {
                var x;
                x = w.getAttributeNode(e);
                return x && (aM[e] ? x.nodeValue !== "" : x.specified) ? x.nodeValue : an
            },
            set: function(w, e, y) {
                var x = w.getAttributeNode(y);
                if (!x) {
                    x = al.createAttribute(y);
                    w.setAttributeNode(x)
                }
                return (x.nodeValue = e + "")
            }
        };
        aj.attrHooks.tabindex.set = br.set;
        aj.each(["width", "height"], function(e, w) {
            aj.attrHooks[w] = aj.extend(aj.attrHooks[w], {
                set: function(y, x) {
                    if (x === "") {
                        y.setAttribute(w, "auto");
                        return x
                    }
                }
            })
        });
        aj.attrHooks.contenteditable = {
            get: br.get,
            set: function(w, e, x) {
                if (e === "") {
                    e = "false"
                }
                br.set(w, e, x)
            }
        }
    }
    if (!aj.support.hrefNormalized) {
        aj.each(["href", "src", "width", "height"], function(e, w) {
            aj.attrHooks[w] = aj.extend(aj.attrHooks[w], {
                get: function(y) {
                    var x = y.getAttribute(w, 2);
                    return x === null ? an : x
                }
            })
        })
    }
    if (!aj.support.style) {
        aj.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || an
            },
            set: function(w, e) {
                return (w.style.cssText = "" + e)
            }
        }
    }
    if (!aj.support.optSelected) {
        aj.propHooks.selected = aj.extend(aj.propHooks.selected, {
            get: function(w) {
                var e = w.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!aj.support.enctype) {
        aj.propFix.enctype = "encoding"
    }
    if (!aj.support.checkOn) {
        aj.each(["radio", "checkbox"], function() {
            aj.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    aj.each(["radio", "checkbox"], function() {
        aj.valHooks[this] = aj.extend(aj.valHooks[this], {
            set: function(w, e) {
                if (aj.isArray(e)) {
                    return (w.checked = aj.inArray(aj(w).val(), e) >= 0)
                }
            }
        })
    });
    var a3 = /^([^\.]*)?(?:\.(.+))?$/
      , W = /\bhover(\.\S+)?/
      , a2 = /^key/
      , bs = /^(?:mouse|contextmenu)|click/
      , ae = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
      , ah = function(w) {
        var e = ae.exec(w);
        if (e) {
            e[1] = (e[1] || "").toLowerCase();
            e[3] = e[3] && new RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)")
        }
        return e
    }
      , i = function(w, e) {
        return ((!e[1] || w.nodeName.toLowerCase() === e[1]) && (!e[2] || w.id === e[2]) && (!e[3] || e[3].test(w.className)))
    }
      , bG = function(e) {
        return aj.event.special.hover ? e : e.replace(W, "mouseenter$1 mouseleave$1")
    };
    aj.event = {
        add: function(I, G, F, D, B) {
            var z, A, L, K, J, E, e, H, w, y, x, C;
            if (I.nodeType === 3 || I.nodeType === 8 || !G || !F || !(z = aj._data(I))) {
                return
            }
            if (F.handler) {
                w = F;
                F = w.handler
            }
            if (!F.guid) {
                F.guid = aj.guid++
            }
            L = z.events;
            if (!L) {
                z.events = L = {}
            }
            A = z.handle;
            if (!A) {
                z.handle = A = function(M) {
                    return typeof aj !== "undefined" && (!M || aj.event.triggered !== M.type) ? aj.event.dispatch.apply(A.elem, arguments) : an
                }
                ;
                A.elem = I
            }
            G = bG(G).split(" ");
            for (K = 0; K < G.length; K++) {
                J = a3.exec(G[K]) || [];
                E = J[1];
                e = (J[2] || "").split(".").sort();
                C = aj.event.special[E] || {};
                E = (B ? C.delegateType : C.bindType) || E;
                C = aj.event.special[E] || {};
                H = aj.extend({
                    type: E,
                    origType: J[1],
                    data: D,
                    handler: F,
                    guid: F.guid,
                    selector: B,
                    namespace: e.join(".")
                }, w);
                if (B) {
                    H.quick = ah(B);
                    if (!H.quick && aj.expr.match.POS.test(B)) {
                        H.isPositional = true
                    }
                }
                x = L[E];
                if (!x) {
                    x = L[E] = [];
                    x.delegateCount = 0;
                    if (!C.setup || C.setup.call(I, D, e, A) === false) {
                        if (I.addEventListener) {
                            I.addEventListener(E, A, false)
                        } else {
                            if (I.attachEvent) {
                                I.attachEvent("on" + E, A)
                            }
                        }
                    }
                }
                if (C.add) {
                    C.add.call(I, H);
                    if (!H.handler.guid) {
                        H.handler.guid = F.guid
                    }
                }
                if (B) {
                    x.splice(x.delegateCount++, 0, H)
                } else {
                    x.push(H)
                }
                aj.event.global[E] = true
            }
            I = null
        },
        global: {},
        remove: function(I, G, E, D) {
            var B = aj.hasData(I) && aj._data(I), K, L, F, x, y, z, J, C, A, w, H;
            if (!B || !(J = B.events)) {
                return
            }
            G = bG(G || "").split(" ");
            for (K = 0; K < G.length; K++) {
                L = a3.exec(G[K]) || [];
                F = L[1];
                x = L[2];
                if (!F) {
                    x = x ? "." + x : "";
                    for (z in J) {
                        aj.event.remove(I, z + x, E, D)
                    }
                    return
                }
                C = aj.event.special[F] || {};
                F = (D ? C.delegateType : C.bindType) || F;
                w = J[F] || [];
                y = w.length;
                x = x ? new RegExp("(^|\\.)" + x.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                if (E || x || D || C.remove) {
                    for (z = 0; z < w.length; z++) {
                        H = w[z];
                        if (!E || E.guid === H.guid) {
                            if (!x || x.test(H.namespace)) {
                                if (!D || D === H.selector || D === "**" && H.selector) {
                                    w.splice(z--, 1);
                                    if (H.selector) {
                                        w.delegateCount--
                                    }
                                    if (C.remove) {
                                        C.remove.call(I, H)
                                    }
                                }
                            }
                        }
                    }
                } else {
                    w.length = 0
                }
                if (w.length === 0 && y !== w.length) {
                    if (!C.teardown || C.teardown.call(I, x) === false) {
                        aj.removeEvent(I, F, B.handle)
                    }
                    delete J[F]
                }
            }
            if (aj.isEmptyObject(J)) {
                A = B.handle;
                if (A) {
                    A.elem = null
                }
                aj.removeData(I, ["events", "handle"], true)
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(J, I, H, G) {
            if (H && (H.nodeType === 3 || H.nodeType === 8)) {
                return
            }
            var E = J.type || J, y = [], w, x, C, K, A, z, F, D, B, L;
            if (E.indexOf("!") >= 0) {
                E = E.slice(0, -1);
                x = true
            }
            if (E.indexOf(".") >= 0) {
                y = E.split(".");
                E = y.shift();
                y.sort()
            }
            if ((!H || aj.event.customEvent[E]) && !aj.event.global[E]) {
                return
            }
            J = typeof J === "object" ? J[aj.expando] ? J : new aj.Event(E,J) : new aj.Event(E);
            J.type = E;
            J.isTrigger = true;
            J.exclusive = x;
            J.namespace = y.join(".");
            J.namespace_re = J.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            z = E.indexOf(":") < 0 ? "on" + E : "";
            if (G || !H) {
                J.preventDefault()
            }
            if (!H) {
                w = aj.cache;
                for (C in w) {
                    if (w[C].events && w[C].events[E]) {
                        aj.event.trigger(J, I, w[C].handle.elem, true)
                    }
                }
                return
            }
            J.result = an;
            if (!J.target) {
                J.target = H
            }
            I = I != null ? aj.makeArray(I) : [];
            I.unshift(J);
            F = aj.event.special[E] || {};
            if (F.trigger && F.trigger.apply(H, I) === false) {
                return
            }
            B = [[H, F.bindType || E]];
            if (!G && !F.noBubble && !aj.isWindow(H)) {
                L = F.delegateType || E;
                A = null;
                for (K = H.parentNode; K; K = K.parentNode) {
                    B.push([K, L]);
                    A = K
                }
                if (A && A === H.ownerDocument) {
                    B.push([A.defaultView || A.parentWindow || ao, L])
                }
            }
            for (C = 0; C < B.length; C++) {
                K = B[C][0];
                J.type = B[C][1];
                D = (aj._data(K, "events") || {})[J.type] && aj._data(K, "handle");
                if (D) {
                    D.apply(K, I)
                }
                D = z && K[z];
                if (D && aj.acceptData(K)) {
                    D.apply(K, I)
                }
                if (J.isPropagationStopped()) {
                    break
                }
            }
            J.type = E;
            if (!J.isDefaultPrevented()) {
                if ((!F._default || F._default.apply(H.ownerDocument, I) === false) && !(E === "click" && aj.nodeName(H, "a")) && aj.acceptData(H)) {
                    if (z && H[E] && ((E !== "focus" && E !== "blur") || J.target.offsetWidth !== 0) && !aj.isWindow(H)) {
                        A = H[z];
                        if (A) {
                            H[z] = null
                        }
                        aj.event.triggered = E;
                        H[E]();
                        aj.event.triggered = an;
                        if (A) {
                            H[z] = A
                        }
                    }
                }
            }
            return J.result
        },
        dispatch: function(K) {
            K = aj.event.fix(K || ao.event);
            var J = ((aj._data(this, "events") || {})[K.type] || []), C = J.delegateCount, y = [].slice.call(arguments, 0), D = !K.exclusive && !K.namespace, A = (aj.event.special[K.type] || {}).handle, w = [], H, F, z, L, G, B, x, e, E, I, M;
            y[0] = K;
            K.delegateTarget = this;
            if (C && !K.target.disabled && !(K.button && K.type === "click")) {
                for (z = K.target; z != this; z = z.parentNode || this) {
                    G = {};
                    x = [];
                    for (H = 0; H < C; H++) {
                        e = J[H];
                        E = e.selector;
                        I = G[E];
                        if (e.isPositional) {
                            I = (I || (G[E] = aj(E))).index(z) >= 0
                        } else {
                            if (I === an) {
                                I = G[E] = (e.quick ? i(z, e.quick) : aj(z).is(E))
                            }
                        }
                        if (I) {
                            x.push(e)
                        }
                    }
                    if (x.length) {
                        w.push({
                            elem: z,
                            matches: x
                        })
                    }
                }
            }
            if (J.length > C) {
                w.push({
                    elem: this,
                    matches: J.slice(C)
                })
            }
            for (H = 0; H < w.length && !K.isPropagationStopped(); H++) {
                B = w[H];
                K.currentTarget = B.elem;
                for (F = 0; F < B.matches.length && !K.isImmediatePropagationStopped(); F++) {
                    e = B.matches[F];
                    if (D || (!K.namespace && !e.namespace) || K.namespace_re && K.namespace_re.test(e.namespace)) {
                        K.data = e.data;
                        K.handleObj = e;
                        L = (A || e.handler).apply(B.elem, y);
                        if (L !== an) {
                            K.result = L;
                            if (L === false) {
                                K.preventDefault();
                                K.stopPropagation()
                            }
                        }
                    }
                }
            }
            return K.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(w, e) {
                if (w.which == null) {
                    w.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return w
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function(x, w) {
                var B, z, e, y = w.button, A = w.fromElement;
                if (x.pageX == null && w.clientX != null) {
                    B = x.target.ownerDocument || al;
                    z = B.documentElement;
                    e = B.body;
                    x.pageX = w.clientX + (z && z.scrollLeft || e && e.scrollLeft || 0) - (z && z.clientLeft || e && e.clientLeft || 0);
                    x.pageY = w.clientY + (z && z.scrollTop || e && e.scrollTop || 0) - (z && z.clientTop || e && e.clientTop || 0)
                }
                if (!x.relatedTarget && A) {
                    x.relatedTarget = A === x.target ? w.toElement : A
                }
                if (!x.which && y !== an) {
                    x.which = (y & 1 ? 1 : (y & 2 ? 3 : (y & 4 ? 2 : 0)))
                }
                return x
            }
        },
        fix: function(w) {
            if (w[aj.expando]) {
                return w
            }
            var x, A, e = w, y = aj.event.fixHooks[w.type] || {}, z = y.props ? this.props.concat(y.props) : this.props;
            w = aj.Event(e);
            for (x = z.length; x; ) {
                A = z[--x];
                w[A] = e[A]
            }
            if (!w.target) {
                w.target = e.srcElement || al
            }
            if (w.target.nodeType === 3) {
                w.target = w.target.parentNode
            }
            if (w.metaKey === an) {
                w.metaKey = w.ctrlKey
            }
            return y.filter ? y.filter(w, e) : w
        },
        special: {
            ready: {
                setup: aj.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: true
            },
            blur: {
                delegateType: "focusout",
                noBubble: true
            },
            beforeunload: {
                setup: function(w, e, x) {
                    if (aj.isWindow(this)) {
                        this.onbeforeunload = x
                    }
                },
                teardown: function(w, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    aj.event.handle = aj.event.dispatch;
    aj.removeEvent = al.removeEventListener ? function(w, e, x) {
        if (w.removeEventListener) {
            w.removeEventListener(e, x, false)
        }
    }
    : function(w, e, x) {
        if (w.detachEvent) {
            w.detachEvent("on" + e, x)
        }
    }
    ;
    aj.Event = function(w, e) {
        if (!(this instanceof aj.Event)) {
            return new aj.Event(w,e)
        }
        if (w && w.type) {
            this.originalEvent = w;
            this.type = w.type;
            this.isDefaultPrevented = (w.defaultPrevented || w.returnValue === false || w.defaultPrevented && w.defaultPrevented()) ? h : bx
        } else {
            this.type = w
        }
        if (e) {
            aj.extend(this, e)
        }
        this.timeStamp = w && w.timeStamp || aj.now();
        this[aj.expando] = true
    }
    ;
    function bx() {
        return false
    }
    function h() {
        return true
    }
    aj.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = h;
            var w = this.originalEvent;
            if (!w) {
                return
            }
            if (w.preventDefault) {
                w.preventDefault()
            } else {
                w.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = h;
            var w = this.originalEvent;
            if (!w) {
                return
            }
            if (w.stopPropagation) {
                w.stopPropagation()
            }
            w.cancelBubble = true
        },
        isDefaultPrevented: bx,
        isPropagationStopped: bx,
        isImmediatePropagationStopped: bx
    };
    aj.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(w, e) {
        aj.event.special[w] = aj.event.special[e] = {
            delegateType: e,
            bindType: e,
            handle: function(z) {
                var y = this, D = z.relatedTarget, B = z.handleObj, x = B.selector, C, A;
                if (!D || B.origType === z.type || (D !== y && !aj.contains(y, D))) {
                    C = z.type;
                    z.type = B.origType;
                    A = B.handler.apply(this, arguments);
                    z.type = C
                }
                return A
            }
        }
    });
    aj.fn.extend({
        on: function(w, C, B, A, z) {
            var y, x;
            if (typeof w === "object") {
                if (typeof C !== "string") {
                    B = C;
                    C = an
                }
                for (x in w) {
                    this.on(x, C, B, w[x], z)
                }
                return this
            }
            if (B == null && A == null) {
                A = C;
                B = C = an
            } else {
                if (A == null) {
                    if (typeof C === "string") {
                        A = B;
                        B = an
                    } else {
                        A = B;
                        B = C;
                        C = an
                    }
                }
            }
            if (A === false) {
                A = bx
            } else {
                if (!A) {
                    return this
                }
            }
            if (z === 1) {
                y = A;
                A = function(e) {
                    aj().off(e);
                    return y.apply(this, arguments)
                }
                ;
                A.guid = y.guid || (y.guid = aj.guid++)
            }
            return this.each(function() {
                aj.event.add(this, w, A, B, C)
            })
        },
        one: function(w, e, y, x) {
            return this.on.call(this, w, e, y, x, 1)
        },
        off: function(x, w, A) {
            if (x && x.preventDefault && x.handleObj) {
                var z = x.handleObj;
                aj(x.delegateTarget).off(z.namespace ? z.type + "." + z.namespace : z.type, z.selector, z.handler);
                return this
            }
            if (typeof x === "object") {
                for (var y in x) {
                    this.off(y, w, x[y])
                }
                return this
            }
            if (w === false || typeof w === "function") {
                A = w;
                w = an
            }
            if (A === false) {
                A = bx
            }
            return this.each(function() {
                aj.event.remove(this, x, A, w)
            })
        },
        bind: function(w, e, x) {
            return this.on(w, null, e, x)
        },
        unbind: function(w, e) {
            return this.off(w, null, e)
        },
        live: function(w, e, x) {
            aj(this.context).on(w, this.selector, e, x);
            return this
        },
        die: function(w, e) {
            aj(this.context).off(w, this.selector || "**", e);
            return this
        },
        delegate: function(w, e, y, x) {
            return this.on(e, w, y, x)
        },
        undelegate: function(w, e, x) {
            return arguments.length == 1 ? this.off(w, "**") : this.off(e, w, x)
        },
        trigger: function(w, e) {
            return this.each(function() {
                aj.event.trigger(w, e, this)
            })
        },
        triggerHandler: function(w, e) {
            if (this[0]) {
                return aj.event.trigger(w, e, this[0], true)
            }
        },
        toggle: function(z) {
            var y = arguments
              , e = z.guid || aj.guid++
              , w = 0
              , x = function(B) {
                var A = (aj._data(this, "lastToggle" + z.guid) || 0) % w;
                aj._data(this, "lastToggle" + z.guid, A + 1);
                B.preventDefault();
                return y[A].apply(this, arguments) || false
            };
            x.guid = e;
            while (w < y.length) {
                y[w++].guid = e
            }
            return this.click(x)
        },
        hover: function(w, e) {
            return this.mouseenter(w).mouseleave(e || w)
        }
    });
    aj.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(e, w) {
        aj.fn[w] = function(y, x) {
            if (x == null) {
                x = y;
                y = null
            }
            return arguments.length > 0 ? this.bind(w, y, x) : this.trigger(w)
        }
        ;
        if (aj.attrFn) {
            aj.attrFn[w] = true
        }
        if (a2.test(w)) {
            aj.event.fixHooks[w] = aj.event.keyHooks
        }
        if (bs.test(w)) {
            aj.event.fixHooks[w] = aj.event.mouseHooks
        }
    });
    (function() {
        var bI = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , A = "sizcache" + (Math.random() + "").replace(".", "")
          , G = 0
          , M = Object.prototype.toString
          , z = false
          , y = true
          , K = /\\/g
          , bK = /\r\n/g
          , bM = /\W/;
        [0, 0].sort(function() {
            y = false;
            return 0
        });
        var L = function(bZ, bY, bX, bW) {
            bX = bX || [];
            bY = bY || al;
            var bV = bY;
            if (bY.nodeType !== 1 && bY.nodeType !== 9) {
                return []
            }
            if (!bZ || typeof bZ !== "string") {
                return bX
            }
            var bO, b0, b3, bN, bU, b2, b1, bS, bQ = true, bP = L.isXML(bY), bR = [], bT = bZ;
            do {
                bI.exec("");
                bO = bI.exec(bT);
                if (bO) {
                    bT = bO[3];
                    bR.push(bO[1]);
                    if (bO[2]) {
                        bN = bO[3];
                        break
                    }
                }
            } while (bO);
            if (bR.length > 1 && H.exec(bZ)) {
                if (bR.length === 2 && I.relative[bR[0]]) {
                    b0 = C(bR[0] + bR[1], bY, bW)
                } else {
                    b0 = I.relative[bR[0]] ? [bY] : L(bR.shift(), bY);
                    while (bR.length) {
                        bZ = bR.shift();
                        if (I.relative[bZ]) {
                            bZ += bR.shift()
                        }
                        b0 = C(bZ, b0, bW)
                    }
                }
            } else {
                if (!bW && bR.length > 1 && bY.nodeType === 9 && !bP && I.match.ID.test(bR[0]) && !I.match.ID.test(bR[bR.length - 1])) {
                    bU = L.find(bR.shift(), bY, bP);
                    bY = bU.expr ? L.filter(bU.expr, bU.set)[0] : bU.set[0]
                }
                if (bY) {
                    bU = bW ? {
                        expr: bR.pop(),
                        set: E(bW)
                    } : L.find(bR.pop(), bR.length === 1 && (bR[0] === "~" || bR[0] === "+") && bY.parentNode ? bY.parentNode : bY, bP);
                    b0 = bU.expr ? L.filter(bU.expr, bU.set) : bU.set;
                    if (bR.length > 0) {
                        b3 = E(b0)
                    } else {
                        bQ = false
                    }
                    while (bR.length) {
                        b2 = bR.pop();
                        b1 = b2;
                        if (!I.relative[b2]) {
                            b2 = ""
                        } else {
                            b1 = bR.pop()
                        }
                        if (b1 == null) {
                            b1 = bY
                        }
                        I.relative[b2](b3, b1, bP)
                    }
                } else {
                    b3 = bR = []
                }
            }
            if (!b3) {
                b3 = b0
            }
            if (!b3) {
                L.error(b2 || bZ)
            }
            if (M.call(b3) === "[object Array]") {
                if (!bQ) {
                    bX.push.apply(bX, b3)
                } else {
                    if (bY && bY.nodeType === 1) {
                        for (bS = 0; b3[bS] != null; bS++) {
                            if (b3[bS] && (b3[bS] === true || b3[bS].nodeType === 1 && L.contains(bY, b3[bS]))) {
                                bX.push(b0[bS])
                            }
                        }
                    } else {
                        for (bS = 0; b3[bS] != null; bS++) {
                            if (b3[bS] && b3[bS].nodeType === 1) {
                                bX.push(b0[bS])
                            }
                        }
                    }
                }
            } else {
                E(b3, bX)
            }
            if (bN) {
                L(bN, bV, bX, bW);
                L.uniqueSort(bX)
            }
            return bX
        };
        L.uniqueSort = function(e) {
            if (D) {
                z = y;
                e.sort(D);
                if (z) {
                    for (var bN = 1; bN < e.length; bN++) {
                        if (e[bN] === e[bN - 1]) {
                            e.splice(bN--, 1)
                        }
                    }
                }
            }
            return e
        }
        ;
        L.matches = function(bN, e) {
            return L(bN, null, null, e)
        }
        ;
        L.matchesSelector = function(bN, e) {
            return L(e, null, null, [bN]).length > 0
        }
        ;
        L.find = function(bU, bT, bS) {
            var bR, bO, bQ, bP, e, bN;
            if (!bU) {
                return []
            }
            for (bO = 0,
            bQ = I.order.length; bO < bQ; bO++) {
                e = I.order[bO];
                if ((bP = I.leftMatch[e].exec(bU))) {
                    bN = bP[1];
                    bP.splice(1, 1);
                    if (bN.substr(bN.length - 1) !== "\\") {
                        bP[1] = (bP[1] || "").replace(K, "");
                        bR = I.find[e](bP, bT, bS);
                        if (bR != null) {
                            bU = bU.replace(I.match[e], "");
                            break
                        }
                    }
                }
            }
            if (!bR) {
                bR = typeof bT.getElementsByTagName !== "undefined" ? bT.getElementsByTagName("*") : []
            }
            return {
                set: bR,
                expr: bU
            }
        }
        ;
        L.filter = function(bZ, bY, bX, bW) {
            var bV, bO, bN, b3, b1, bP, bR, bS, b0, bQ = bZ, b2 = [], bU = bY, bT = bY && bY[0] && L.isXML(bY[0]);
            while (bZ && bY.length) {
                for (bN in I.filter) {
                    if ((bV = I.leftMatch[bN].exec(bZ)) != null && bV[2]) {
                        bP = I.filter[bN];
                        bR = bV[1];
                        bO = false;
                        bV.splice(1, 1);
                        if (bR.substr(bR.length - 1) === "\\") {
                            continue
                        }
                        if (bU === b2) {
                            b2 = []
                        }
                        if (I.preFilter[bN]) {
                            bV = I.preFilter[bN](bV, bU, bX, b2, bW, bT);
                            if (!bV) {
                                bO = b3 = true
                            } else {
                                if (bV === true) {
                                    continue
                                }
                            }
                        }
                        if (bV) {
                            for (bS = 0; (b1 = bU[bS]) != null; bS++) {
                                if (b1) {
                                    b3 = bP(b1, bV, bS, bU);
                                    b0 = bW ^ b3;
                                    if (bX && b3 != null) {
                                        if (b0) {
                                            bO = true
                                        } else {
                                            bU[bS] = false
                                        }
                                    } else {
                                        if (b0) {
                                            b2.push(b1);
                                            bO = true
                                        }
                                    }
                                }
                            }
                        }
                        if (b3 !== an) {
                            if (!bX) {
                                bU = b2
                            }
                            bZ = bZ.replace(I.match[bN], "");
                            if (!bO) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (bZ === bQ) {
                    if (bO == null) {
                        L.error(bZ)
                    } else {
                        break
                    }
                }
                bQ = bZ
            }
            return bU
        }
        ;
        L.error = function(e) {
            throw "Syntax error, unrecognized expression: " + e
        }
        ;
        var J = L.getText = function(bN) {
            var bP, bQ, e = bN.nodeType, bO = "";
            if (e) {
                if (e === 1) {
                    if (typeof bN.textContent === "string") {
                        return bN.textContent
                    } else {
                        if (typeof bN.innerText === "string") {
                            return bN.innerText.replace(bK, "")
                        } else {
                            for (bN = bN.firstChild; bN; bN = bN.nextSibling) {
                                bO += J(bN)
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return bN.nodeValue
                    }
                }
            } else {
                for (bP = 0; (bQ = bN[bP]); bP++) {
                    if (bQ.nodeType !== 8) {
                        bO += J(bQ)
                    }
                }
            }
            return bO
        }
        ;
        var I = L.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(bO, e) {
                    var bT = typeof e === "string"
                      , bR = bT && !bM.test(e)
                      , bS = bT && !bR;
                    if (bR) {
                        e = e.toLowerCase()
                    }
                    for (var bP = 0, bN = bO.length, bQ; bP < bN; bP++) {
                        if ((bQ = bO[bP])) {
                            while ((bQ = bQ.previousSibling) && bQ.nodeType !== 1) {}
                            bO[bP] = bS || bQ && bQ.nodeName.toLowerCase() === e ? bQ || false : bQ === e
                        }
                    }
                    if (bS) {
                        L.filter(e, bO, true)
                    }
                },
                ">": function(bO, e) {
                    var bS, bQ = typeof e === "string", bP = 0, bN = bO.length;
                    if (bQ && !bM.test(e)) {
                        e = e.toLowerCase();
                        for (; bP < bN; bP++) {
                            bS = bO[bP];
                            if (bS) {
                                var bR = bS.parentNode;
                                bO[bP] = bR.nodeName.toLowerCase() === e ? bR : false
                            }
                        }
                    } else {
                        for (; bP < bN; bP++) {
                            bS = bO[bP];
                            if (bS) {
                                bO[bP] = bQ ? bS.parentNode : bS.parentNode === e
                            }
                        }
                        if (bQ) {
                            L.filter(e, bO, true)
                        }
                    }
                },
                "": function(bO, bN, bR) {
                    var bQ, bP = G++, e = bJ;
                    if (typeof bN === "string" && !bM.test(bN)) {
                        bN = bN.toLowerCase();
                        bQ = bN;
                        e = w
                    }
                    e("parentNode", bN, bP, bO, bQ, bR)
                },
                "~": function(bO, bN, bR) {
                    var bQ, bP = G++, e = bJ;
                    if (typeof bN === "string" && !bM.test(bN)) {
                        bN = bN.toLowerCase();
                        bQ = bN;
                        e = w
                    }
                    e("previousSibling", bN, bP, bO, bQ, bR)
                }
            },
            find: {
                ID: function(bO, bN, bP) {
                    if (typeof bN.getElementById !== "undefined" && !bP) {
                        var e = bN.getElementById(bO[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function(bO, e) {
                    if (typeof e.getElementsByName !== "undefined") {
                        var bR = []
                          , bQ = e.getElementsByName(bO[1]);
                        for (var bP = 0, bN = bQ.length; bP < bN; bP++) {
                            if (bQ[bP].getAttribute("name") === bO[1]) {
                                bR.push(bQ[bP])
                            }
                        }
                        return bR.length === 0 ? null : bR
                    }
                },
                TAG: function(bN, e) {
                    if (typeof e.getElementsByTagName !== "undefined") {
                        return e.getElementsByTagName(bN[1])
                    }
                }
            },
            preFilter: {
                CLASS: function(bO, bN, bU, bT, bS, bR) {
                    bO = " " + bO[1].replace(K, "") + " ";
                    if (bR) {
                        return bO
                    }
                    for (var bP = 0, bQ; (bQ = bN[bP]) != null; bP++) {
                        if (bQ) {
                            if (bS ^ (bQ.className && (" " + bQ.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bO) >= 0)) {
                                if (!bU) {
                                    bT.push(bQ)
                                }
                            } else {
                                if (bU) {
                                    bN[bP] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function(e) {
                    return e[1].replace(K, "")
                },
                TAG: function(bN, e) {
                    return bN[1].replace(K, "").toLowerCase()
                },
                CHILD: function(bN) {
                    if (bN[1] === "nth") {
                        if (!bN[2]) {
                            L.error(bN[0])
                        }
                        bN[2] = bN[2].replace(/^\+|\s*/g, "");
                        var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(bN[2] === "even" && "2n" || bN[2] === "odd" && "2n+1" || !/\D/.test(bN[2]) && "0n+" + bN[2] || bN[2]);
                        bN[2] = (e[1] + (e[2] || 1)) - 0;
                        bN[3] = e[3] - 0
                    } else {
                        if (bN[2]) {
                            L.error(bN[0])
                        }
                    }
                    bN[0] = G++;
                    return bN
                },
                ATTR: function(bO, bN, bT, bS, bR, bQ) {
                    var bP = bO[1] = bO[1].replace(K, "");
                    if (!bQ && I.attrMap[bP]) {
                        bO[1] = I.attrMap[bP]
                    }
                    bO[4] = (bO[4] || bO[5] || "").replace(K, "");
                    if (bO[2] === "~=") {
                        bO[4] = " " + bO[4] + " "
                    }
                    return bO
                },
                PSEUDO: function(bO, bN, bS, bR, bQ) {
                    if (bO[1] === "not") {
                        if ((bI.exec(bO[3]) || "").length > 1 || /^\w/.test(bO[3])) {
                            bO[3] = L(bO[3], null, null, bN)
                        } else {
                            var bP = L.filter(bO[3], bN, bS, true ^ bQ);
                            if (!bS) {
                                bR.push.apply(bR, bP)
                            }
                            return false
                        }
                    } else {
                        if (I.match.POS.test(bO[0]) || I.match.CHILD.test(bO[0])) {
                            return true
                        }
                    }
                    return bO
                },
                POS: function(e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === false && e.type !== "hidden"
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    return e.checked === true
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(bN, bO, e) {
                    return !!L(e[3], bN).length
                },
                header: function(e) {
                    return (/h\d/i).test(e.nodeName)
                },
                text: function(bN) {
                    var e = bN.getAttribute("type")
                      , bO = bN.type;
                    return bN.nodeName.toLowerCase() === "input" && "text" === bO && (e === bO || e === null)
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                },
                submit: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === bN.type
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                },
                reset: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === bN.type
                },
                button: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return e === "input" && "button" === bN.type || e === "button"
                },
                input: function(e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, bN) {
                    return bN === 0
                },
                last: function(bN, bO, e, bP) {
                    return bO === bP.length - 1
                },
                even: function(e, bN) {
                    return bN % 2 === 0
                },
                odd: function(e, bN) {
                    return bN % 2 === 1
                },
                lt: function(bN, bO, e) {
                    return bO < e[3] - 0
                },
                gt: function(bN, bO, e) {
                    return bO > e[3] - 0
                },
                nth: function(bN, bO, e) {
                    return e[3] - 0 === bO
                },
                eq: function(bN, bO, e) {
                    return e[3] - 0 === bO
                }
            },
            filter: {
                PSEUDO: function(bV, bU, bQ, bT) {
                    var bS = bU[1]
                      , bN = I.filters[bS];
                    if (bN) {
                        return bN(bV, bQ, bU, bT)
                    } else {
                        if (bS === "contains") {
                            return (bV.textContent || bV.innerText || J([bV]) || "").indexOf(bU[3]) >= 0
                        } else {
                            if (bS === "not") {
                                var bR = bU[3];
                                for (var bP = 0, bO = bR.length; bP < bO; bP++) {
                                    if (bR[bP] === bV) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                L.error(bS)
                            }
                        }
                    }
                },
                CHILD: function(bT, bS) {
                    var bR, bW, bQ, bV, bN, bP, bU, e = bS[1], bO = bT;
                    switch (e) {
                    case "only":
                    case "first":
                        while ((bO = bO.previousSibling)) {
                            if (bO.nodeType === 1) {
                                return false
                            }
                        }
                        if (e === "first") {
                            return true
                        }
                        bO = bT;
                    case "last":
                        while ((bO = bO.nextSibling)) {
                            if (bO.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        bR = bS[2];
                        bW = bS[3];
                        if (bR === 1 && bW === 0) {
                            return true
                        }
                        bQ = bS[0];
                        bV = bT.parentNode;
                        if (bV && (bV[A] !== bQ || !bT.nodeIndex)) {
                            bP = 0;
                            for (bO = bV.firstChild; bO; bO = bO.nextSibling) {
                                if (bO.nodeType === 1) {
                                    bO.nodeIndex = ++bP
                                }
                            }
                            bV[A] = bQ
                        }
                        bU = bT.nodeIndex - bW;
                        if (bR === 0) {
                            return bU === 0
                        } else {
                            return (bU % bR === 0 && bU / bR >= 0)
                        }
                    }
                },
                ID: function(bN, e) {
                    return bN.nodeType === 1 && bN.getAttribute("id") === e
                },
                TAG: function(bN, e) {
                    return (e === "*" && bN.nodeType === 1) || !!bN.nodeName && bN.nodeName.toLowerCase() === e
                },
                CLASS: function(bN, e) {
                    return (" " + (bN.className || bN.getAttribute("class")) + " ").indexOf(e) > -1
                },
                ATTR: function(bP, bN) {
                    var bS = bN[1]
                      , e = L.attr ? L.attr(bP, bS) : I.attrHandle[bS] ? I.attrHandle[bS](bP) : bP[bS] != null ? bP[bS] : bP.getAttribute(bS)
                      , bR = e + ""
                      , bQ = bN[2]
                      , bO = bN[4];
                    return e == null ? bQ === "!=" : !bQ && L.attr ? e != null : bQ === "=" ? bR === bO : bQ === "*=" ? bR.indexOf(bO) >= 0 : bQ === "~=" ? (" " + bR + " ").indexOf(bO) >= 0 : !bO ? bR && e !== false : bQ === "!=" ? bR !== bO : bQ === "^=" ? bR.indexOf(bO) === 0 : bQ === "$=" ? bR.substr(bR.length - bO.length) === bO : bQ === "|=" ? bR === bO || bR.substr(0, bO.length + 1) === bO + "-" : false
                },
                POS: function(bN, e, bO, bR) {
                    var bQ = e[2]
                      , bP = I.setFilters[bQ];
                    if (bP) {
                        return bP(bN, bO, e, bR)
                    }
                }
            }
        };
        var H = I.match.POS
          , x = function(bN, e) {
            return "\\" + (e - 0 + 1)
        };
        for (var F in I.match) {
            I.match[F] = new RegExp(I.match[F].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            I.leftMatch[F] = new RegExp(/(^(?:.|\r|\n)*?)/.source + I.match[F].source.replace(/\\(\d+)/g, x))
        }
        var E = function(bN, e) {
            bN = Array.prototype.slice.call(bN, 0);
            if (e) {
                e.push.apply(e, bN);
                return e
            }
            return bN
        };
        try {
            Array.prototype.slice.call(al.documentElement.childNodes, 0)[0].nodeType
        } catch (bL) {
            E = function(bO, e) {
                var bQ = 0
                  , bP = e || [];
                if (M.call(bO) === "[object Array]") {
                    Array.prototype.push.apply(bP, bO)
                } else {
                    if (typeof bO.length === "number") {
                        for (var bN = bO.length; bQ < bN; bQ++) {
                            bP.push(bO[bQ])
                        }
                    } else {
                        for (; bO[bQ]; bQ++) {
                            bP.push(bO[bQ])
                        }
                    }
                }
                return bP
            }
        }
        var D, B;
        if (al.documentElement.compareDocumentPosition) {
            D = function(bN, e) {
                if (bN === e) {
                    z = true;
                    return 0
                }
                if (!bN.compareDocumentPosition || !e.compareDocumentPosition) {
                    return bN.compareDocumentPosition ? -1 : 1
                }
                return bN.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            D = function(bU, bT) {
                if (bU === bT) {
                    z = true;
                    return 0
                } else {
                    if (bU.sourceIndex && bT.sourceIndex) {
                        return bU.sourceIndex - bT.sourceIndex
                    }
                }
                var bR, bN, bO = [], e = [], bQ = bU.parentNode, bS = bT.parentNode, bV = bQ;
                if (bQ === bS) {
                    return B(bU, bT)
                } else {
                    if (!bQ) {
                        return -1
                    } else {
                        if (!bS) {
                            return 1
                        }
                    }
                }
                while (bV) {
                    bO.unshift(bV);
                    bV = bV.parentNode
                }
                bV = bS;
                while (bV) {
                    e.unshift(bV);
                    bV = bV.parentNode
                }
                bR = bO.length;
                bN = e.length;
                for (var bP = 0; bP < bR && bP < bN; bP++) {
                    if (bO[bP] !== e[bP]) {
                        return B(bO[bP], e[bP])
                    }
                }
                return bP === bR ? B(bU, e[bP], -1) : B(bO[bP], bT, 1)
            }
            ;
            B = function(bN, e, bP) {
                if (bN === e) {
                    return bP
                }
                var bO = bN.nextSibling;
                while (bO) {
                    if (bO === e) {
                        return -1
                    }
                    bO = bO.nextSibling
                }
                return 1
            }
        }
        (function() {
            var bN = al.createElement("div")
              , bO = "script" + (new Date()).getTime()
              , e = al.documentElement;
            bN.innerHTML = "<a name='" + bO + "'/>";
            e.insertBefore(bN, e.firstChild);
            if (al.getElementById(bO)) {
                I.find.ID = function(bR, bQ, bS) {
                    if (typeof bQ.getElementById !== "undefined" && !bS) {
                        var bP = bQ.getElementById(bR[1]);
                        return bP ? bP.id === bR[1] || typeof bP.getAttributeNode !== "undefined" && bP.getAttributeNode("id").nodeValue === bR[1] ? [bP] : an : []
                    }
                }
                ;
                I.filter.ID = function(bQ, bP) {
                    var bR = typeof bQ.getAttributeNode !== "undefined" && bQ.getAttributeNode("id");
                    return bQ.nodeType === 1 && bR && bR.nodeValue === bP
                }
            }
            e.removeChild(bN);
            e = bN = null
        }
        )();
        (function() {
            var bN = al.createElement("div");
            bN.appendChild(al.createComment(""));
            if (bN.getElementsByTagName("*").length > 0) {
                I.find.TAG = function(bO, e) {
                    var bR = e.getElementsByTagName(bO[1]);
                    if (bO[1] === "*") {
                        var bQ = [];
                        for (var bP = 0; bR[bP]; bP++) {
                            if (bR[bP].nodeType === 1) {
                                bQ.push(bR[bP])
                            }
                        }
                        bR = bQ
                    }
                    return bR
                }
            }
            bN.innerHTML = "<a href='#'></a>";
            if (bN.firstChild && typeof bN.firstChild.getAttribute !== "undefined" && bN.firstChild.getAttribute("href") !== "#") {
                I.attrHandle.href = function(e) {
                    return e.getAttribute("href", 2)
                }
            }
            bN = null
        }
        )();
        if (al.querySelectorAll) {
            (function() {
                var bN = L
                  , bP = al.createElement("div")
                  , bO = "__sizzle__";
                bP.innerHTML = "<p class='TEST'></p>";
                if (bP.querySelectorAll && bP.querySelectorAll(".TEST").length === 0) {
                    return
                }
                L = function(b1, bZ, bY, bX) {
                    bZ = bZ || al;
                    if (!bX && !L.isXML(bZ)) {
                        var bW = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b1);
                        if (bW && (bZ.nodeType === 1 || bZ.nodeType === 9)) {
                            if (bW[1]) {
                                return E(bZ.getElementsByTagName(b1), bY)
                            } else {
                                if (bW[2] && I.find.CLASS && bZ.getElementsByClassName) {
                                    return E(bZ.getElementsByClassName(bW[2]), bY)
                                }
                            }
                        }
                        if (bZ.nodeType === 9) {
                            if (b1 === "body" && bZ.body) {
                                return E([bZ.body], bY)
                            } else {
                                if (bW && bW[3]) {
                                    var bV = bZ.getElementById(bW[3]);
                                    if (bV && bV.parentNode) {
                                        if (bV.id === bW[3]) {
                                            return E([bV], bY)
                                        }
                                    } else {
                                        return E([], bY)
                                    }
                                }
                            }
                            try {
                                return E(bZ.querySelectorAll(b1), bY)
                            } catch (bS) {}
                        } else {
                            if (bZ.nodeType === 1 && bZ.nodeName.toLowerCase() !== "object") {
                                var bU = bZ
                                  , bR = bZ.getAttribute("id")
                                  , bQ = bR || bO
                                  , b2 = bZ.parentNode
                                  , b0 = /^\s*[+~]/.test(b1);
                                if (!bR) {
                                    bZ.setAttribute("id", bQ)
                                } else {
                                    bQ = bQ.replace(/'/g, "\\$&")
                                }
                                if (b0 && b2) {
                                    bZ = bZ.parentNode
                                }
                                try {
                                    if (!b0 || b2) {
                                        return E(bZ.querySelectorAll("[id='" + bQ + "'] " + b1), bY)
                                    }
                                } catch (bT) {} finally {
                                    if (!bR) {
                                        bU.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return bN(b1, bZ, bY, bX)
                }
                ;
                for (var e in bN) {
                    L[e] = bN[e]
                }
                bP = null
            }
            )()
        }
        (function() {
            var bQ = al.documentElement
              , bO = bQ.matchesSelector || bQ.mozMatchesSelector || bQ.webkitMatchesSelector || bQ.msMatchesSelector;
            if (bO) {
                var bN = !bO.call(al.createElement("div"), "div")
                  , e = false;
                try {
                    bO.call(al.documentElement, "[test!='']:sizzle")
                } catch (bP) {
                    e = true
                }
                L.matchesSelector = function(bS, bR) {
                    bR = bR.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!L.isXML(bS)) {
                        try {
                            if (e || !I.match.PSEUDO.test(bR) && !/!=/.test(bR)) {
                                var bU = bO.call(bS, bR);
                                if (bU || !bN || bS.document && bS.document.nodeType !== 11) {
                                    return bU
                                }
                            }
                        } catch (bT) {}
                    }
                    return L(bR, null, null, [bS]).length > 0
                }
            }
        }
        )();
        (function() {
            var e = al.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            I.order.splice(1, 0, "CLASS");
            I.find.CLASS = function(bO, bN, bP) {
                if (typeof bN.getElementsByClassName !== "undefined" && !bP) {
                    return bN.getElementsByClassName(bO[1])
                }
            }
            ;
            e = null
        }
        )();
        function w(bW, bV, bU, bT, bS, bR) {
            for (var bO = 0, bN = bT.length; bO < bN; bO++) {
                var bQ = bT[bO];
                if (bQ) {
                    var bP = false;
                    bQ = bQ[bW];
                    while (bQ) {
                        if (bQ[A] === bU) {
                            bP = bT[bQ.sizset];
                            break
                        }
                        if (bQ.nodeType === 1 && !bR) {
                            bQ[A] = bU;
                            bQ.sizset = bO
                        }
                        if (bQ.nodeName.toLowerCase() === bV) {
                            bP = bQ;
                            break
                        }
                        bQ = bQ[bW]
                    }
                    bT[bO] = bP
                }
            }
        }
        function bJ(bW, bV, bU, bT, bS, bR) {
            for (var bO = 0, bN = bT.length; bO < bN; bO++) {
                var bQ = bT[bO];
                if (bQ) {
                    var bP = false;
                    bQ = bQ[bW];
                    while (bQ) {
                        if (bQ[A] === bU) {
                            bP = bT[bQ.sizset];
                            break
                        }
                        if (bQ.nodeType === 1) {
                            if (!bR) {
                                bQ[A] = bU;
                                bQ.sizset = bO
                            }
                            if (typeof bV !== "string") {
                                if (bQ === bV) {
                                    bP = true;
                                    break
                                }
                            } else {
                                if (L.filter(bV, [bQ]).length > 0) {
                                    bP = bQ;
                                    break
                                }
                            }
                        }
                        bQ = bQ[bW]
                    }
                    bT[bO] = bP
                }
            }
        }
        if (al.documentElement.contains) {
            L.contains = function(bN, e) {
                return bN !== e && (bN.contains ? bN.contains(e) : true)
            }
        } else {
            if (al.documentElement.compareDocumentPosition) {
                L.contains = function(bN, e) {
                    return !!(bN.compareDocumentPosition(e) & 16)
                }
            } else {
                L.contains = function() {
                    return false
                }
            }
        }
        L.isXML = function(bN) {
            var e = (bN ? bN.ownerDocument || bN : 0).documentElement;
            return e ? e.nodeName !== "HTML" : false
        }
        ;
        var C = function(bU, bT, bQ) {
            var bP, bR = [], bO = "", bS = bT.nodeType ? [bT] : bT;
            while ((bP = I.match.PSEUDO.exec(bU))) {
                bO += bP[0];
                bU = bU.replace(I.match.PSEUDO, "")
            }
            bU = I.relative[bU] ? bU + "*" : bU;
            for (var bN = 0, e = bS.length; bN < e; bN++) {
                L(bU, bS[bN], bR, bQ)
            }
            return L.filter(bO, bR)
        };
        L.attr = aj.attr;
        L.selectors.attrMap = {};
        aj.find = L;
        aj.expr = L.selectors;
        aj.expr[":"] = aj.expr.filters;
        aj.unique = L.uniqueSort;
        aj.text = L.getText;
        aj.isXMLDoc = L.isXML;
        aj.contains = L.contains
    }
    )();
    var aZ = /Until$/
      , aA = /^(?:parents|prevUntil|prevAll)/
      , bo = /,/
      , bC = /^.[^:#\[\.,]*$/
      , ab = Array.prototype.slice
      , U = aj.expr.match.POS
      , aG = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    aj.fn.extend({
        find: function(x) {
            var e = this, y, w;
            if (typeof x !== "string") {
                return aj(x).filter(function() {
                    for (y = 0,
                    w = e.length; y < w; y++) {
                        if (aj.contains(e[y], this)) {
                            return true
                        }
                    }
                })
            }
            var C = this.pushStack("", "find", x), A, B, z;
            for (y = 0,
            w = this.length; y < w; y++) {
                A = C.length;
                aj.find(x, this[y], C);
                if (y > 0) {
                    for (B = A; B < C.length; B++) {
                        for (z = 0; z < A; z++) {
                            if (C[z] === C[B]) {
                                C.splice(B--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return C
        },
        has: function(w) {
            var e = aj(w);
            return this.filter(function() {
                for (var y = 0, x = e.length; y < x; y++) {
                    if (aj.contains(this, e[y])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aN(this, e, false), "not", e)
        },
        filter: function(e) {
            return this.pushStack(aN(this, e, true), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e === "string" ? U.test(e) ? aj(e, this.context).index(this[0]) >= 0 : aj.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(y, w) {
            var D = [], z, x, C = this[0];
            if (aj.isArray(y)) {
                var B = 1;
                while (C && C.ownerDocument && C !== w) {
                    for (z = 0; z < y.length; z++) {
                        if (aj(C).is(y[z])) {
                            D.push({
                                selector: y[z],
                                elem: C,
                                level: B
                            })
                        }
                    }
                    C = C.parentNode;
                    B++
                }
                return D
            }
            var A = U.test(y) || typeof y !== "string" ? aj(y, w || this.context) : 0;
            for (z = 0,
            x = this.length; z < x; z++) {
                C = this[z];
                while (C) {
                    if (A ? A.index(C) > -1 : aj.find.matchesSelector(C, y)) {
                        D.push(C);
                        break
                    } else {
                        C = C.parentNode;
                        if (!C || !C.ownerDocument || C === w || C.nodeType === 11) {
                            break
                        }
                    }
                }
            }
            D = D.length > 1 ? aj.unique(D) : D;
            return this.pushStack(D, "closest", y)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
            }
            if (typeof e === "string") {
                return aj.inArray(this[0], aj(e))
            }
            return aj.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(w, e) {
            var y = typeof w === "string" ? aj(w, e) : aj.makeArray(w && w.nodeType ? [w] : w)
              , x = aj.merge(this.get(), y);
            return this.pushStack(P(y[0]) || P(x[0]) ? x : aj.unique(x))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    function P(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    aj.each({
        parent: function(w) {
            var e = w.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function(e) {
            return aj.dir(e, "parentNode")
        },
        parentsUntil: function(w, x, e) {
            return aj.dir(w, "parentNode", e)
        },
        next: function(e) {
            return aj.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return aj.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return aj.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return aj.dir(e, "previousSibling")
        },
        nextUntil: function(w, x, e) {
            return aj.dir(w, "nextSibling", e)
        },
        prevUntil: function(w, x, e) {
            return aj.dir(w, "previousSibling", e)
        },
        siblings: function(e) {
            return aj.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return aj.sibling(e.firstChild)
        },
        contents: function(e) {
            return aj.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : aj.makeArray(e.childNodes)
        }
    }, function(x, w) {
        aj.fn[x] = function(y, e) {
            var A = aj.map(this, w, y)
              , z = ab.call(arguments);
            if (!aZ.test(x)) {
                e = y
            }
            if (e && typeof e === "string") {
                A = aj.filter(e, A)
            }
            A = this.length > 1 && !aG[x] ? aj.unique(A) : A;
            if ((this.length > 1 || bo.test(e)) && aA.test(x)) {
                A = A.reverse()
            }
            return this.pushStack(A, x, z.join(","))
        }
    });
    aj.extend({
        filter: function(w, e, x) {
            if (x) {
                w = ":not(" + w + ")"
            }
            return e.length === 1 ? aj.find.matchesSelector(e[0], w) ? [e[0]] : [] : aj.find.matches(w, e)
        },
        dir: function(w, e, z) {
            var y = []
              , x = w[e];
            while (x && x.nodeType !== 9 && (z === an || x.nodeType !== 1 || !aj(x).is(z))) {
                if (x.nodeType === 1) {
                    y.push(x)
                }
                x = x[e]
            }
            return y
        },
        nth: function(x, w, A, z) {
            w = w || 1;
            var y = 0;
            for (; x; x = x[A]) {
                if (x.nodeType === 1 && ++y === w) {
                    break
                }
            }
            return x
        },
        sibling: function(x, e) {
            var w = [];
            for (; x; x = x.nextSibling) {
                if (x.nodeType === 1 && x !== e) {
                    w.push(x)
                }
            }
            return w
        }
    });
    function aN(z, y, x) {
        y = y || 0;
        if (aj.isFunction(y)) {
            return aj.grep(z, function(A, B) {
                var e = !!y.call(A, B, A);
                return e === x
            })
        } else {
            if (y.nodeType) {
                return aj.grep(z, function(e, A) {
                    return (e === y) === x
                })
            } else {
                if (typeof y === "string") {
                    var w = aj.grep(z, function(e) {
                        return e.nodeType === 1
                    });
                    if (bC.test(y)) {
                        return aj.filter(y, w, !x)
                    } else {
                        y = aj.filter(y, w)
                    }
                }
            }
        }
        return aj.grep(z, function(e, A) {
            return (aj.inArray(e, y) >= 0) === x
        })
    }
    function a(w) {
        var e = aY.split(" ")
          , x = w.createDocumentFragment();
        if (x.createElement) {
            while (e.length) {
                x.createElement(e.pop())
            }
        }
        return x
    }
    var aY = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video"
      , at = / jQuery\d+="(?:\d+|null)"/g
      , aB = /^\s+/
      , ac = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
      , c = /<([\w:]+)/
      , t = /<tbody/i
      , af = /<|&#?\w+;/
      , aq = /<(?:script|style)/i
      , aa = /<(?:script|object|embed|option|style)/i
      , au = new RegExp("<(?:" + aY.replace(" ", "|") + ")","i")
      , l = /checked\s*(?:[^=]|=\s*.checked.)/i
      , bz = /\/(java|ecma)script/i
      , a1 = /^\s*<!(?:\[CDATA\[|\-\-)/
      , aF = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , am = a(al);
    aF.optgroup = aF.option;
    aF.tbody = aF.tfoot = aF.colgroup = aF.caption = aF.thead;
    aF.th = aF.td;
    if (!aj.support.htmlSerialize) {
        aF._default = [1, "div<div>", "</div>"]
    }
    aj.fn.extend({
        text: function(e) {
            if (aj.isFunction(e)) {
                return this.each(function(x) {
                    var w = aj(this);
                    w.text(e.call(this, x, w.text()))
                })
            }
            if (typeof e !== "object" && e !== an) {
                return this.empty().append((this[0] && this[0].ownerDocument || al).createTextNode(e))
            }
            return aj.text(this)
        },
        wrapAll: function(e) {
            if (aj.isFunction(e)) {
                return this.each(function(x) {
                    aj(this).wrapAll(e.call(this, x))
                })
            }
            if (this[0]) {
                var w = aj(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    w.insertBefore(this[0])
                }
                w.map(function() {
                    var x = this;
                    while (x.firstChild && x.firstChild.nodeType === 1) {
                        x = x.firstChild
                    }
                    return x
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (aj.isFunction(e)) {
                return this.each(function(w) {
                    aj(this).wrapInner(e.call(this, w))
                })
            }
            return this.each(function() {
                var w = aj(this)
                  , x = w.contents();
                if (x.length) {
                    x.wrapAll(e)
                } else {
                    w.append(e)
                }
            })
        },
        wrap: function(e) {
            return this.each(function() {
                aj(this).wrapAll(e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!aj.nodeName(this, "body")) {
                    aj(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(w) {
                    this.parentNode.insertBefore(w, this)
                })
            } else {
                if (arguments.length) {
                    var e = aj(arguments[0]);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(w) {
                    this.parentNode.insertBefore(w, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, aj(arguments[0]).toArray());
                    return e
                }
            }
        },
        remove: function(w, e) {
            for (var x = 0, y; (y = this[x]) != null; x++) {
                if (!w || aj.filter(w, [y]).length) {
                    if (!e && y.nodeType === 1) {
                        aj.cleanData(y.getElementsByTagName("*"));
                        aj.cleanData([y])
                    }
                    if (y.parentNode) {
                        y.parentNode.removeChild(y)
                    }
                }
            }
            return this
        },
        empty: function() {
            for (var e = 0, w; (w = this[e]) != null; e++) {
                if (w.nodeType === 1) {
                    aj.cleanData(w.getElementsByTagName("*"))
                }
                while (w.firstChild) {
                    w.removeChild(w.firstChild)
                }
            }
            return this
        },
        clone: function(w, e) {
            w = w == null ? false : w;
            e = e == null ? w : e;
            return this.map(function() {
                return aj.clone(this, w, e)
            })
        },
        html: function(w) {
            if (w === an) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(at, "") : null
            } else {
                if (typeof w === "string" && !aq.test(w) && (aj.support.leadingWhitespace || !aB.test(w)) && !aF[(c.exec(w) || ["", ""])[1].toLowerCase()]) {
                    w = w.replace(ac, "<$1></$2>");
                    try {
                        for (var y = 0, x = this.length; y < x; y++) {
                            if (this[y].nodeType === 1) {
                                aj.cleanData(this[y].getElementsByTagName("*"));
                                this[y].innerHTML = w
                            }
                        }
                    } catch (z) {
                        this.empty().append(w)
                    }
                } else {
                    if (aj.isFunction(w)) {
                        this.each(function(A) {
                            var e = aj(this);
                            e.html(w.call(this, A, e.html()))
                        })
                    } else {
                        this.empty().append(w)
                    }
                }
            }
            return this
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(F, E, D) {
            var B, z, C, H, G = F[0], x = [];
            if (!aj.support.checkClone && arguments.length === 3 && typeof G === "string" && l.test(G)) {
                return this.each(function() {
                    aj(this).domManip(F, E, D, true)
                })
            }
            if (aj.isFunction(G)) {
                return this.each(function(I) {
                    var e = aj(this);
                    F[0] = G.call(this, I, E ? e.html() : an);
                    e.domManip(F, E, D)
                })
            }
            if (this[0]) {
                H = G && G.parentNode;
                if (aj.support.parentNode && H && H.nodeType === 11 && H.childNodes.length === this.length) {
                    B = {
                        fragment: H
                    }
                } else {
                    B = aj.buildFragment(F, this, x)
                }
                C = B.fragment;
                if (C.childNodes.length === 1) {
                    z = C = C.firstChild
                } else {
                    z = C.firstChild
                }
                if (z) {
                    E = E && aj.nodeName(z, "tr");
                    for (var y = 0, w = this.length, A = w - 1; y < w; y++) {
                        D.call(E ? bp(this[y], z) : this[y], B.cacheable || (w > 1 && y < A) ? aj.clone(C, true, true) : C)
                    }
                }
                if (x.length) {
                    aj.each(x, bB)
                }
            }
            return this
        }
    });
    function bp(w, e) {
        return aj.nodeName(w, "table") ? (w.getElementsByTagName("tbody")[0] || w.appendChild(w.ownerDocument.createElement("tbody"))) : w
    }
    function q(x, e) {
        if (e.nodeType !== 1 || !aj.hasData(x)) {
            return
        }
        var C, z, w, B = aj._data(x), A = aj._data(e, B), y = B.events;
        if (y) {
            delete A.handle;
            A.events = {};
            for (C in y) {
                for (z = 0,
                w = y[C].length; z < w; z++) {
                    aj.event.add(e, C + (y[C][z].namespace ? "." : "") + y[C][z].namespace, y[C][z], y[C][z].data)
                }
            }
        }
        if (A.data) {
            A.data = aj.extend({}, A.data)
        }
    }
    aj.buildFragment = function(x, w, C) {
        var B, e, y, z, A = x[0];
        if (w && w[0]) {
            z = w[0].ownerDocument || w[0]
        }
        if (!z.createDocumentFragment) {
            z = al
        }
        if (x.length === 1 && typeof A === "string" && A.length < 512 && z === al && A.charAt(0) === "<" && !aa.test(A) && (aj.support.checkClone || !l.test(A)) && (!aj.support.unknownElems && au.test(A))) {
            e = true;
            y = aj.fragments[A];
            if (y && y !== 1) {
                B = y
            }
        }
        if (!B) {
            B = z.createDocumentFragment();
            aj.clean(x, z, B, C)
        }
        if (e) {
            aj.fragments[A] = y ? B : 1
        }
        return {
            fragment: B,
            cacheable: e
        }
    }
    ;
    aj.fragments = {};
    aj.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(x, w) {
        aj.fn[x] = function(z) {
            var e = []
              , C = aj(z)
              , B = this.length === 1 && this[0].parentNode;
            if (B && B.nodeType === 11 && B.childNodes.length === 1 && C.length === 1) {
                C[w](this[0]);
                return this
            } else {
                for (var A = 0, y = C.length; A < y; A++) {
                    var D = (A > 0 ? this.clone(true) : this).get();
                    aj(C[A])[w](D);
                    e = e.concat(D)
                }
                return this.pushStack(e, x, C.selector)
            }
        }
    });
    function bt(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }
    function aH(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked
        }
    }
    function R(w) {
        var e = (w.nodeName || "").toLowerCase();
        if (e === "input") {
            aH(w)
        } else {
            if (e !== "script" && typeof w.getElementsByTagName !== "undefined") {
                aj.grep(w.getElementsByTagName("input"), aH)
            }
        }
    }
    aj.extend({
        clean: function(M, L, K, J) {
            var I;
            L = L || al;
            if (typeof L.createElement === "undefined") {
                L = L.ownerDocument || L[0] && L[0].ownerDocument || al
            }
            var H = [], C;
            for (var F = 0, z; (z = M[F]) != null; F++) {
                if (typeof z === "number") {
                    z += ""
                }
                if (!z) {
                    continue
                }
                if (typeof z === "string") {
                    if (!af.test(z)) {
                        z = L.createTextNode(z)
                    } else {
                        z = z.replace(ac, "<$1></$2>");
                        var G = (c.exec(z) || ["", ""])[1].toLowerCase()
                          , x = aF[G] || aF._default
                          , E = x[0]
                          , w = L.createElement("div");
                        if (L === al) {
                            am.appendChild(w)
                        } else {
                            a(L).appendChild(w)
                        }
                        w.innerHTML = x[1] + z + x[2];
                        while (E--) {
                            w = w.lastChild
                        }
                        if (!aj.support.tbody) {
                            var B = t.test(z)
                              , D = G === "table" && !B ? w.firstChild && w.firstChild.childNodes : x[1] === "<table>" && !B ? w.childNodes : [];
                            for (C = D.length - 1; C >= 0; --C) {
                                if (aj.nodeName(D[C], "tbody") && !D[C].childNodes.length) {
                                    D[C].parentNode.removeChild(D[C])
                                }
                            }
                        }
                        if (!aj.support.leadingWhitespace && aB.test(z)) {
                            w.insertBefore(L.createTextNode(aB.exec(z)[0]), w.firstChild)
                        }
                        z = w.childNodes
                    }
                }
                var A;
                if (!aj.support.appendChecked) {
                    if (z[0] && typeof (A = z.length) === "number") {
                        for (C = 0; C < A; C++) {
                            R(z[C])
                        }
                    } else {
                        R(z)
                    }
                }
                if (z.nodeType) {
                    H.push(z)
                } else {
                    H = aj.merge(H, z)
                }
            }
            if (K) {
                I = function(e) {
                    return !e.type || bz.test(e.type)
                }
                ;
                for (F = 0; H[F]; F++) {
                    if (J && aj.nodeName(H[F], "script") && (!H[F].type || H[F].type.toLowerCase() === "text/javascript")) {
                        J.push(H[F].parentNode ? H[F].parentNode.removeChild(H[F]) : H[F])
                    } else {
                        if (H[F].nodeType === 1) {
                            var y = aj.grep(H[F].getElementsByTagName("script"), I);
                            H.splice.apply(H, [F + 1, 0].concat(y))
                        }
                        K.appendChild(H[F])
                    }
                }
            }
            return H
        },
        cleanData: function(D) {
            var C, w, e = aj.cache, A = aj.event.special, z = aj.support.deleteExpando;
            for (var y = 0, x; (x = D[y]) != null; y++) {
                if (x.nodeName && aj.noData[x.nodeName.toLowerCase()]) {
                    continue
                }
                w = x[aj.expando];
                if (w) {
                    C = e[w];
                    if (C && C.events) {
                        for (var B in C.events) {
                            if (A[B]) {
                                aj.event.remove(x, B)
                            } else {
                                aj.removeEvent(x, B, C.handle)
                            }
                        }
                        if (C.handle) {
                            C.handle.elem = null
                        }
                    }
                    if (z) {
                        delete x[aj.expando]
                    } else {
                        if (x.removeAttribute) {
                            x.removeAttribute(aj.expando)
                        }
                    }
                    delete e[w]
                }
            }
        }
    });
    function bB(w, e) {
        if (e.src) {
            aj.ajax({
                url: e.src,
                async: false,
                dataType: "script"
            })
        } else {
            aj.globalEval((e.text || e.textContent || e.innerHTML || "").replace(a1, "/*$0*/"))
        }
        if (e.parentNode) {
            e.parentNode.removeChild(e)
        }
    }
    var aX = /alpha\([^)]*\)/i, aD = /opacity=([^)]*)/, N = /([A-Z]|^ms)/g, bq = /^-?\d+(?:px)?$/i, bA = /^-?\d/, V = /^([\-+])=([\-+.\de]+)/, bm = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ax = ["Left", "Right"], bh = ["Top", "Bottom"], ai, aP, bd;
    aj.fn.css = function(x, w) {
        if (arguments.length === 2 && w === an) {
            return this
        }
        return aj.access(this, x, w, true, function(y, e, z) {
            return z !== an ? aj.style(y, e, z) : aj.css(y, e)
        })
    }
    ;
    aj.extend({
        cssHooks: {
            opacity: {
                get: function(w, e) {
                    if (e) {
                        var x = ai(w, "opacity", "opacity");
                        return x === "" ? "1" : x
                    } else {
                        return w.style.opacity
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": aj.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(E, D, B, A) {
            if (!E || E.nodeType === 3 || E.nodeType === 8 || !E.style) {
                return
            }
            var x, C, y = aj.camelCase(D), w = E.style, F = aj.cssHooks[y];
            D = aj.cssProps[y] || y;
            if (B !== an) {
                C = typeof B;
                if (C === "string" && (x = V.exec(B))) {
                    B = (+(x[1] + 1) * +x[2]) + parseFloat(aj.css(E, D));
                    C = "number"
                }
                if (B == null || C === "number" && isNaN(B)) {
                    return
                }
                if (C === "number" && !aj.cssNumber[y]) {
                    B += "px"
                }
                if (!F || !("set"in F) || (B = F.set(E, B)) !== an) {
                    try {
                        w[D] = B
                    } catch (z) {}
                }
            } else {
                if (F && "get"in F && (x = F.get(E, false, A)) !== an) {
                    return x
                }
                return w[D]
            }
        },
        css: function(x, w, z) {
            var y, e;
            w = aj.camelCase(w);
            e = aj.cssHooks[w];
            w = aj.cssProps[w] || w;
            if (w === "cssFloat") {
                w = "float"
            }
            if (e && "get"in e && (y = e.get(x, true, z)) !== an) {
                return y
            } else {
                if (ai) {
                    return ai(x, w)
                }
            }
        },
        swap: function(x, w, A) {
            var z = {};
            for (var y in w) {
                z[y] = x.style[y];
                x.style[y] = w[y]
            }
            A.call(x);
            for (y in w) {
                x.style[y] = z[y]
            }
        }
    });
    aj.curCSS = aj.css;
    aj.each(["height", "width"], function(w, x) {
        aj.cssHooks[x] = {
            get: function(y, e, A) {
                var z;
                if (e) {
                    if (y.offsetWidth !== 0) {
                        return m(y, x, A)
                    } else {
                        aj.swap(y, bm, function() {
                            z = m(y, x, A)
                        })
                    }
                    return z
                }
            },
            set: function(y, e) {
                if (bq.test(e)) {
                    e = parseFloat(e);
                    if (e >= 0) {
                        return e + "px"
                    }
                } else {
                    return e
                }
            }
        }
    });
    if (!aj.support.opacity) {
        aj.cssHooks.opacity = {
            get: function(w, e) {
                return aD.test((e && w.currentStyle ? w.currentStyle.filter : w.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
            },
            set: function(w, e) {
                var A = w.style
                  , y = w.currentStyle
                  , x = aj.isNumeric(e) ? "alpha(opacity=" + e * 100 + ")" : ""
                  , z = y && y.filter || A.filter || "";
                A.zoom = 1;
                if (e >= 1 && aj.trim(z.replace(aX, "")) === "") {
                    A.removeAttribute("filter");
                    if (y && !y.filter) {
                        return
                    }
                }
                A.filter = aX.test(z) ? z.replace(aX, x) : z + " " + x
            }
        }
    }
    aj(function() {
        if (!aj.support.reliableMarginRight) {
            aj.cssHooks.marginRight = {
                get: function(w, e) {
                    var x;
                    aj.swap(w, {
                        display: "inline-block"
                    }, function() {
                        if (e) {
                            x = ai(w, "margin-right", "marginRight")
                        } else {
                            x = w.style.marginRight
                        }
                    });
                    return x
                }
            }
        }
    });
    if (al.defaultView && al.defaultView.getComputedStyle) {
        aP = function(w, e) {
            var z, y, x;
            e = e.replace(N, "-$1").toLowerCase();
            if (!(y = w.ownerDocument.defaultView)) {
                return an
            }
            if ((x = y.getComputedStyle(w, null))) {
                z = x.getPropertyValue(e);
                if (z === "" && !aj.contains(w.ownerDocument.documentElement, w)) {
                    z = aj.style(w, e)
                }
            }
            return z
        }
    }
    if (al.documentElement.currentStyle) {
        bd = function(x, w) {
            var B, e, A, y = x.currentStyle && x.currentStyle[w], z = x.style;
            if (y === null && z && (A = z[w])) {
                y = A
            }
            if (!bq.test(y) && bA.test(y)) {
                B = z.left;
                e = x.runtimeStyle && x.runtimeStyle.left;
                if (e) {
                    x.runtimeStyle.left = x.currentStyle.left
                }
                z.left = w === "fontSize" ? "1em" : (y || 0);
                y = z.pixelLeft + "px";
                z.left = B;
                if (e) {
                    x.runtimeStyle.left = e
                }
            }
            return y === "" ? "auto" : y
        }
    }
    ai = aP || bd;
    function m(w, e, z) {
        var y = e === "width" ? w.offsetWidth : w.offsetHeight
          , x = e === "width" ? ax : bh;
        if (y > 0) {
            if (z !== "border") {
                aj.each(x, function() {
                    if (!z) {
                        y -= parseFloat(aj.css(w, "padding" + this)) || 0
                    }
                    if (z === "margin") {
                        y += parseFloat(aj.css(w, z + this)) || 0
                    } else {
                        y -= parseFloat(aj.css(w, "border" + this + "Width")) || 0
                    }
                })
            }
            return y + "px"
        }
        y = ai(w, e, e);
        if (y < 0 || y == null) {
            y = w.style[e] || 0
        }
        y = parseFloat(y) || 0;
        if (z) {
            aj.each(x, function() {
                y += parseFloat(aj.css(w, "padding" + this)) || 0;
                if (z !== "padding") {
                    y += parseFloat(aj.css(w, "border" + this + "Width")) || 0
                }
                if (z === "margin") {
                    y += parseFloat(aj.css(w, z + this)) || 0
                }
            })
        }
        return y + "px"
    }
    if (aj.expr && aj.expr.filters) {
        aj.expr.filters.hidden = function(x) {
            var w = x.offsetWidth
              , e = x.offsetHeight;
            return (w === 0 && e === 0) || (!aj.support.reliableHiddenOffsets && ((x.style && x.style.display) || aj.css(x, "display")) === "none")
        }
        ;
        aj.expr.filters.visible = function(e) {
            return !aj.expr.filters.hidden(e)
        }
    }
    var aW = /%20/g, az = /\[\]$/, bF = /\r?\n/g, bD = /#.*$/, aK = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bf = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, a0 = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, a6 = /^(?:GET|HEAD)$/, b = /^\/\//, Y = /\?/, bl = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, n = /^(?:select|textarea)/i, g = /\s+/, bE = /([?&])_=[^&]*/, X = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, O = aj.fn.load, ak = {}, o = {}, aL, p, bb = ["*/"] + ["*"];
    try {
        aL = by.href
    } catch (aE) {
        aL = al.createElement("a");
        aL.href = "";
        aL = aL.href
    }
    p = X.exec(aL.toLowerCase()) || [];
    function d(e) {
        return function(x, w) {
            if (typeof x !== "string") {
                w = x;
                x = "*"
            }
            if (aj.isFunction(w)) {
                var D = x.toLowerCase().split(g), z = 0, A = D.length, y, B, C;
                for (; z < A; z++) {
                    y = D[z];
                    C = /^\+/.test(y);
                    if (C) {
                        y = y.substr(1) || "*"
                    }
                    B = e[y] = e[y] || [];
                    B[C ? "unshift" : "push"](w)
                }
            }
        }
    }
    function bc(F, E, D, C, B, A) {
        B = B || E.dataTypes[0];
        A = A || {};
        A[B] = true;
        var z = F[B], x = 0, w = z ? z.length : 0, y = (F === ak), G;
        for (; x < w && (y || !G); x++) {
            G = z[x](E, D, C);
            if (typeof G === "string") {
                if (!y || A[G]) {
                    G = an
                } else {
                    E.dataTypes.unshift(G);
                    G = bc(F, E, D, C, G, A)
                }
            }
        }
        if ((y || !G) && !A["*"]) {
            G = bc(F, E, D, C, "*", A)
        }
        return G
    }
    function aw(x, e) {
        var z, w, y = aj.ajaxSettings.flatOptions || {};
        for (z in e) {
            if (e[z] !== an) {
                (y[z] ? x : (w || (w = {})))[z] = e[z]
            }
        }
        if (w) {
            aj.extend(true, x, w)
        }
    }
    aj.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, w) {
        aj.fn[w] = function(x) {
            return this.bind(w, x)
        }
    });
    aj.each(["get", "post"], function(w, x) {
        aj[x] = function(y, e, A, z) {
            if (aj.isFunction(e)) {
                z = z || A;
                A = e;
                e = an
            }
            return aj.ajax({
                type: x,
                url: y,
                data: e,
                success: A,
                dataType: z
            })
        }
    });
    aj.extend({
        getScript: function(w, e) {
            return aj.get(w, an, e, "script")
        },
        getJSON: function(w, e, x) {
            return aj.get(w, e, x, "json")
        },
        ajaxSetup: function(w, e) {
            if (e) {
                aw(w, aj.ajaxSettings)
            } else {
                e = w;
                w = aj.ajaxSettings
            }
            aw(w, e);
            return w
        },
        ajaxSettings: {
            url: aL,
            isLocal: a0.test(p[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bb
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
                "* text": ao.String,
                "text html": true,
                "text json": aj.parseJSON,
                "text xml": aj.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: d(ak),
        ajaxTransport: d(o),
        ajax: function(L, K) {
            if (typeof L === "object") {
                K = L;
                L = an
            }
            K = K || {};
            var B = aj.ajaxSetup({}, K), bO = B.context || B, E = bO !== B && (bO.nodeType || bO instanceof aj) ? aj(bO) : aj.event, bN = aj.Deferred(), bJ = aj.Callbacks("once memory"), z = B.statusCode || {}, A, F = {}, bK = {}, bM, x, M, C, G, y = 0, w, J, H = {
                readyState: 0,
                setRequestHeader: function(bP, e) {
                    if (!y) {
                        var bQ = bP.toLowerCase();
                        bP = bK[bQ] = bK[bQ] || bP;
                        F[bP] = e
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return y === 2 ? bM : null
                },
                getResponseHeader: function(bP) {
                    var e;
                    if (y === 2) {
                        if (!x) {
                            x = {};
                            while ((e = aK.exec(bM))) {
                                x[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = x[bP.toLowerCase()]
                    }
                    return e === an ? null : e
                },
                overrideMimeType: function(e) {
                    if (!y) {
                        B.mimeType = e
                    }
                    return this
                },
                abort: function(e) {
                    e = e || "abort";
                    if (M) {
                        M.abort(e)
                    }
                    D(0, e);
                    return this
                }
            };
            function D(bZ, bY, bW, bV) {
                if (y === 2) {
                    return
                }
                y = 2;
                if (C) {
                    clearTimeout(C)
                }
                M = an;
                bM = bV || "";
                H.readyState = bZ > 0 ? 4 : 0;
                var bS, b0, bX, bQ = bY, bR = bW ? bw(B, H, bW) : an, bP, bU;
                if (bZ >= 200 && bZ < 300 || bZ === 304) {
                    if (B.ifModified) {
                        if ((bP = H.getResponseHeader("Last-Modified"))) {
                            aj.lastModified[A] = bP
                        }
                        if ((bU = H.getResponseHeader("Etag"))) {
                            aj.etag[A] = bU
                        }
                    }
                    if (bZ === 304) {
                        bQ = "notmodified";
                        bS = true
                    } else {
                        try {
                            b0 = T(B, bR);
                            bQ = "success";
                            bS = true
                        } catch (bT) {
                            bQ = "parsererror";
                            bX = bT
                        }
                    }
                } else {
                    bX = bQ;
                    if (!bQ || bZ) {
                        bQ = "error";
                        if (bZ < 0) {
                            bZ = 0
                        }
                    }
                }
                H.status = bZ;
                H.statusText = "" + (bY || bQ);
                if (bS) {
                    bN.resolveWith(bO, [b0, bQ, H])
                } else {
                    bN.rejectWith(bO, [H, bQ, bX])
                }
                H.statusCode(z);
                z = an;
                if (w) {
                    E.trigger("ajax" + (bS ? "Success" : "Error"), [H, B, bS ? b0 : bX])
                }
                bJ.fireWith(bO, [H, bQ]);
                if (w) {
                    E.trigger("ajaxComplete", [H, B]);
                    if (!(--aj.active)) {
                        aj.event.trigger("ajaxStop")
                    }
                }
            }
            bN.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = bJ.add;
            H.statusCode = function(bP) {
                if (bP) {
                    var e;
                    if (y < 2) {
                        for (e in bP) {
                            z[e] = [z[e], bP[e]]
                        }
                    } else {
                        e = bP[H.status];
                        H.then(e, e)
                    }
                }
                return this
            }
            ;
            B.url = ((L || B.url) + "").replace(bD, "").replace(b, p[1] + "//");
            B.dataTypes = aj.trim(B.dataType || "*").toLowerCase().split(g);
            if (B.crossDomain == null) {
                G = X.exec(B.url.toLowerCase());
                B.crossDomain = !!(G && (G[1] != p[1] || G[2] != p[2] || (G[3] || (G[1] === "http:" ? 80 : 443)) != (p[3] || (p[1] === "http:" ? 80 : 443))))
            }
            if (B.data && B.processData && typeof B.data !== "string") {
                B.data = aj.param(B.data, B.traditional)
            }
            bc(ak, B, K, H);
            if (y === 2) {
                return false
            }
            w = B.global;
            B.type = B.type.toUpperCase();
            B.hasContent = !a6.test(B.type);
            if (w && aj.active++ === 0) {
                aj.event.trigger("ajaxStart")
            }
            if (!B.hasContent) {
                if (B.data) {
                    B.url += (Y.test(B.url) ? "&" : "?") + B.data;
                    delete B.data
                }
                A = B.url;
                if (B.cache === false) {
                    var I = aj.now()
                      , bL = B.url.replace(bE, "$1_=" + I);
                    B.url = bL + ((bL === B.url) ? (Y.test(B.url) ? "&" : "?") + "_=" + I : "")
                }
            }
            if (B.data && B.hasContent && B.contentType !== false || K.contentType) {
                H.setRequestHeader("Content-Type", B.contentType)
            }
            if (B.ifModified) {
                A = A || B.url;
                if (aj.lastModified[A]) {
                    H.setRequestHeader("If-Modified-Since", aj.lastModified[A])
                }
                if (aj.etag[A]) {
                    H.setRequestHeader("If-None-Match", aj.etag[A])
                }
            }
            H.setRequestHeader("Accept", B.dataTypes[0] && B.accepts[B.dataTypes[0]] ? B.accepts[B.dataTypes[0]] + (B.dataTypes[0] !== "*" ? ", " + bb + "; q=0.01" : "") : B.accepts["*"]);
            for (J in B.headers) {
                H.setRequestHeader(J, B.headers[J])
            }
            if (B.beforeSend && (B.beforeSend.call(bO, H, B) === false || y === 2)) {
                H.abort();
                return false
            }
            for (J in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                H[J](B[J])
            }
            M = bc(o, B, K, H);
            if (!M) {
                D(-1, "No Transport")
            } else {
                H.readyState = 1;
                if (w) {
                    E.trigger("ajaxSend", [H, B])
                }
                if (B.async && B.timeout > 0) {
                    C = setTimeout(function() {
                        H.abort("timeout")
                    }, B.timeout)
                }
                try {
                    y = 1;
                    M.send(F, D)
                } catch (bI) {
                    if (y < 2) {
                        D(-1, bI)
                    } else {
                        aj.error(bI)
                    }
                }
            }
            return H
        },
        param: function(e, z) {
            var w = []
              , x = function(B, A) {
                A = aj.isFunction(A) ? A() : A;
                w[w.length] = encodeURIComponent(B) + "=" + encodeURIComponent(A)
            };
            if (z === an) {
                z = aj.ajaxSettings.traditional
            }
            if (aj.isArray(e) || (e.jquery && !aj.isPlainObject(e))) {
                aj.each(e, function() {
                    x(this.name, this.value)
                })
            } else {
                for (var y in e) {
                    s(y, e[y], z, x)
                }
            }
            return w.join("&").replace(aW, "+")
        }
    });
    function s(x, w, A, z) {
        if (aj.isArray(w)) {
            aj.each(w, function(B, e) {
                if (A || az.test(x)) {
                    z(x, e)
                } else {
                    s(x + "[" + (typeof e === "object" || aj.isArray(e) ? B : "") + "]", e, A, z)
                }
            })
        } else {
            if (!A && w != null && typeof w === "object") {
                for (var y in w) {
                    s(x + "[" + y + "]", w[y], A, z)
                }
            } else {
                z(x, w)
            }
        }
    }
    aj.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    function bw(E, D, B) {
        var z = E.contents, C = E.dataTypes, w = E.responseFields, y, A, x, e;
        for (A in w) {
            if (A in B) {
                D[w[A]] = B[A]
            }
        }
        while (C[0] === "*") {
            C.shift();
            if (y === an) {
                y = E.mimeType || D.getResponseHeader("content-type")
            }
        }
        if (y) {
            for (A in z) {
                if (z[A] && z[A].test(y)) {
                    C.unshift(A);
                    break
                }
            }
        }
        if (C[0]in B) {
            x = C[0]
        } else {
            for (A in B) {
                if (!C[0] || E.converters[A + " " + C[0]]) {
                    x = A;
                    break
                }
                if (!e) {
                    e = A
                }
            }
            x = x || e
        }
        if (x) {
            if (x !== C[0]) {
                C.unshift(x)
            }
            return B[x]
        }
    }
    function T(I, E) {
        if (I.dataFilter) {
            E = I.dataFilter(E, I.dataType)
        }
        var D = I.dataTypes, H = {}, A, F, x = D.length, B, C = D[0], y, z, G, w, e;
        for (A = 1; A < x; A++) {
            if (A === 1) {
                for (F in I.converters) {
                    if (typeof F === "string") {
                        H[F.toLowerCase()] = I.converters[F]
                    }
                }
            }
            y = C;
            C = D[A];
            if (C === "*") {
                C = y
            } else {
                if (y !== "*" && y !== C) {
                    z = y + " " + C;
                    G = H[z] || H["* " + C];
                    if (!G) {
                        e = an;
                        for (w in H) {
                            B = w.split(" ");
                            if (B[0] === y || B[0] === "*") {
                                e = H[B[1] + " " + C];
                                if (e) {
                                    w = H[w];
                                    if (w === true) {
                                        G = e
                                    } else {
                                        if (e === true) {
                                            G = w
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(G || e)) {
                        aj.error("No conversion from " + z.replace(" ", " to "))
                    }
                    if (G !== true) {
                        E = G ? G(E) : e(w(E))
                    }
                }
            }
        }
        return E
    }
    var aV = aj.now()
      , r = /(\=)\?(&|$)|\?\?/i;
    aj.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return aj.expando + "_" + (aV++)
        }
    });
    aj.ajaxPrefilter("json jsonp", function(F, E, D) {
        var C = F.contentType === "application/x-www-form-urlencoded" && (typeof F.data === "string");
        if (F.dataTypes[0] === "jsonp" || F.jsonp !== false && (r.test(F.url) || C && r.test(F.data))) {
            var B, y = F.jsonpCallback = aj.isFunction(F.jsonpCallback) ? F.jsonpCallback() : F.jsonpCallback, A = ao[y], w = F.url, z = F.data, x = "$1" + y + "$2";
            if (F.jsonp !== false) {
                w = w.replace(r, x);
                if (F.url === w) {
                    if (C) {
                        z = z.replace(r, x)
                    }
                    if (F.data === z) {
                        w += (/\?/.test(w) ? "&" : "?") + F.jsonp + "=" + y
                    }
                }
            }
            F.url = w;
            F.data = z;
            ao[y] = function(e) {
                B = [e]
            }
            ;
            D.always(function() {
                ao[y] = A;
                if (B && aj.isFunction(A)) {
                    ao[y](B[0])
                }
            });
            F.converters["script json"] = function() {
                if (!B) {
                    aj.error(y + " was not called")
                }
                return B[0]
            }
            ;
            F.dataTypes[0] = "json";
            return "script"
        }
    });
    aj.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                aj.globalEval(e);
                return e
            }
        }
    });
    aj.ajaxPrefilter("script", function(e) {
        if (e.cache === an) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    aj.ajaxTransport("script", function(w) {
        if (w.crossDomain) {
            var x, e = al.head || al.getElementsByTagName("head")[0] || al.documentElement;
            return {
                send: function(z, y) {
                    x = al.createElement("script");
                    x.async = "async";
                    if (w.scriptCharset) {
                        x.charset = w.scriptCharset
                    }
                    x.src = w.url;
                    x.onload = x.onreadystatechange = function(B, A) {
                        if (A || !x.readyState || /loaded|complete/.test(x.readyState)) {
                            x.onload = x.onreadystatechange = null;
                            if (e && x.parentNode) {
                                e.removeChild(x)
                            }
                            x = an;
                            if (!A) {
                                y(200, "success")
                            }
                        }
                    }
                    ;
                    e.insertBefore(x, e.firstChild)
                },
                abort: function() {
                    if (x) {
                        x.onload(0, 1)
                    }
                }
            }
        }
    });
    var aU = ao.ActiveXObject ? function() {
        for (var e in Z) {
            Z[e](0, 1)
        }
    }
    : false, v = 0, Z;
    function aT() {
        try {
            return new ao.XMLHttpRequest()
        } catch (w) {}
    }
    function av() {
        try {
            return new ao.ActiveXObject("Microsoft.XMLHTTP")
        } catch (w) {}
    }
    aj.ajaxSettings.xhr = ao.ActiveXObject ? function() {
        return !this.isLocal && aT() || av()
    }
    : aT;
    (function(e) {
        aj.extend(aj.support, {
            ajax: !!e,
            cors: !!e && ("withCredentials"in e)
        })
    }
    )(aj.ajaxSettings.xhr());
    if (aj.support.ajax) {
        aj.ajaxTransport(function(e) {
            if (!e.crossDomain || aj.support.cors) {
                var w;
                return {
                    send: function(C, B) {
                        var A = e.xhr(), z, y;
                        if (e.username) {
                            A.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            A.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (y in e.xhrFields) {
                                A[y] = e.xhrFields[y]
                            }
                        }
                        if (e.mimeType && A.overrideMimeType) {
                            A.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !C["X-Requested-With"]) {
                            C["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (y in C) {
                                A.setRequestHeader(y, C[y])
                            }
                        } catch (x) {}
                        A.send((e.hasContent && e.data) || null);
                        w = function(L, K) {
                            var J, E, D, H, G;
                            try {
                                if (w && (K || A.readyState === 4)) {
                                    w = an;
                                    if (z) {
                                        A.onreadystatechange = aj.noop;
                                        if (aU) {
                                            delete Z[z]
                                        }
                                    }
                                    if (K) {
                                        if (A.readyState !== 4) {
                                            A.abort()
                                        }
                                    } else {
                                        J = A.status;
                                        D = A.getAllResponseHeaders();
                                        H = {};
                                        G = A.responseXML;
                                        if (G && G.documentElement) {
                                            H.xml = G
                                        }
                                        H.text = A.responseText;
                                        try {
                                            E = A.statusText
                                        } catch (I) {
                                            E = ""
                                        }
                                        if (!J && e.isLocal && !e.crossDomain) {
                                            J = H.text ? 200 : 404
                                        } else {
                                            if (J === 1223) {
                                                J = 204
                                            }
                                        }
                                    }
                                }
                            } catch (F) {
                                if (!K) {
                                    B(-1, F)
                                }
                            }
                            if (H) {
                                B(J, E, H, D)
                            }
                        }
                        ;
                        if (!e.async || A.readyState === 4) {
                            w()
                        } else {
                            z = ++v;
                            if (aU) {
                                if (!Z) {
                                    Z = {};
                                    aj(ao).unload(aU)
                                }
                                Z[z] = w
                            }
                            A.onreadystatechange = w
                        }
                    },
                    abort: function() {
                        if (w) {
                            w(0, 1)
                        }
                    }
                }
            }
        })
    }
    var aS = {}, bn, k, aJ = /^(?:toggle|show|hide)$/, a9 = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, bi, aO = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], bj;
    aj.fn.extend({
        show: function(w, e, B) {
            var A, z;
            if (w || w === 0) {
                return this.animate(bg("show", 3), w, e, B)
            } else {
                for (var y = 0, x = this.length; y < x; y++) {
                    A = this[y];
                    if (A.style) {
                        z = A.style.display;
                        if (!aj._data(A, "olddisplay") && z === "none") {
                            z = A.style.display = ""
                        }
                        if (z === "" && aj.css(A, "display") === "none") {
                            aj._data(A, "olddisplay", u(A.nodeName))
                        }
                    }
                }
                for (y = 0; y < x; y++) {
                    A = this[y];
                    if (A.style) {
                        z = A.style.display;
                        if (z === "" || z === "none") {
                            A.style.display = aj._data(A, "olddisplay") || ""
                        }
                    }
                }
                return this
            }
        },
        hide: function(w, e, B) {
            if (w || w === 0) {
                return this.animate(bg("hide", 3), w, e, B)
            } else {
                var A, z, y = 0, x = this.length;
                for (; y < x; y++) {
                    A = this[y];
                    if (A.style) {
                        z = aj.css(A, "display");
                        if (z !== "none" && !aj._data(A, "olddisplay")) {
                            aj._data(A, "olddisplay", z)
                        }
                    }
                }
                for (y = 0; y < x; y++) {
                    if (this[y].style) {
                        this[y].style.display = "none"
                    }
                }
                return this
            }
        },
        _toggle: aj.fn.toggle,
        fadeTo: function(w, e, y, x) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: e
            }, w, y, x)
        },
        animate: function(e, A, z, y) {
            var x = aj.speed(A, z, y);
            if (aj.isEmptyObject(e)) {
                return this.each(x.complete, [false])
            }
            e = aj.extend({}, e);
            function w() {
                if (x.queue === false) {
                    aj._mark(this)
                }
                var L = aj.extend({}, x), K = this.nodeType === 1, I = K && aj(this).is(":hidden"), C, F, E, J, H, D, G, M, B;
                L.animatedProperties = {};
                for (E in e) {
                    C = aj.camelCase(E);
                    if (E !== C) {
                        e[C] = e[E];
                        delete e[E]
                    }
                    F = e[C];
                    if (aj.isArray(F)) {
                        L.animatedProperties[C] = F[1];
                        F = e[C] = F[0]
                    } else {
                        L.animatedProperties[C] = L.specialEasing && L.specialEasing[C] || L.easing || "swing"
                    }
                    if (F === "hide" && I || F === "show" && !I) {
                        return L.complete.call(this)
                    }
                    if (K && (C === "height" || C === "width")) {
                        L.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (aj.css(this, "display") === "inline" && aj.css(this, "float") === "none") {
                            if (!aj.support.inlineBlockNeedsLayout || u(this.nodeName) === "inline") {
                                this.style.display = "inline-block"
                            } else {
                                this.style.zoom = 1
                            }
                        }
                    }
                }
                if (L.overflow != null) {
                    this.style.overflow = "hidden"
                }
                for (E in e) {
                    J = new aj.fx(this,L,E);
                    F = e[E];
                    if (aJ.test(F)) {
                        B = aj._data(this, "toggle" + E) || (F === "toggle" ? I ? "show" : "hide" : 0);
                        if (B) {
                            aj._data(this, "toggle" + E, B === "show" ? "hide" : "show");
                            J[B]()
                        } else {
                            J[F]()
                        }
                    } else {
                        H = a9.exec(F);
                        D = J.cur();
                        if (H) {
                            G = parseFloat(H[2]);
                            M = H[3] || (aj.cssNumber[E] ? "" : "px");
                            if (M !== "px") {
                                aj.style(this, E, (G || 1) + M);
                                D = ((G || 1) / J.cur()) * D;
                                aj.style(this, E, D + M)
                            }
                            if (H[1]) {
                                G = ((H[1] === "-=" ? -1 : 1) * G) + D
                            }
                            J.custom(D, G, M)
                        } else {
                            J.custom(D, F, "")
                        }
                    }
                }
                return true
            }
            return x.queue === false ? this.each(w) : this.queue(x.queue, w)
        },
        stop: function(y, x, w) {
            if (typeof y !== "string") {
                w = x;
                x = y;
                y = an
            }
            if (x && y !== false) {
                this.queue(y || "fx", [])
            }
            return this.each(function() {
                var z, e = false, B = aj.timers, A = aj._data(this);
                if (!w) {
                    aj._unmark(true, this)
                }
                function C(E, D, F) {
                    var G = D[F];
                    aj.removeData(E, F, true);
                    G.stop(w)
                }
                if (y == null) {
                    for (z in A) {
                        if (A[z].stop && z.indexOf(".run") === z.length - 4) {
                            C(this, A, z)
                        }
                    }
                } else {
                    if (A[z = y + ".run"] && A[z].stop) {
                        C(this, A, z)
                    }
                }
                for (z = B.length; z--; ) {
                    if (B[z].elem === this && (y == null || B[z].queue === y)) {
                        if (w) {
                            B[z](true)
                        } else {
                            B[z].saveState()
                        }
                        e = true;
                        B.splice(z, 1)
                    }
                }
                if (!(w && e)) {
                    aj.dequeue(this, y)
                }
            })
        }
    });
    function bu() {
        setTimeout(aC, 0);
        return (bj = aj.now())
    }
    function aC() {
        bj = an
    }
    function bg(w, e) {
        var x = {};
        aj.each(aO.concat.apply([], aO.slice(0, e)), function() {
            x[this] = w
        });
        return x
    }
    aj.each({
        slideDown: bg("show", 1),
        slideUp: bg("hide", 1),
        slideToggle: bg("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(x, w) {
        aj.fn[x] = function(y, e, z) {
            return this.animate(w, y, e, z)
        }
    });
    aj.extend({
        speed: function(w, z, y) {
            var x = w && typeof w === "object" ? aj.extend({}, w) : {
                complete: y || !y && z || aj.isFunction(w) && w,
                duration: w,
                easing: y && z || z && !aj.isFunction(z) && z
            };
            x.duration = aj.fx.off ? 0 : typeof x.duration === "number" ? x.duration : x.duration in aj.fx.speeds ? aj.fx.speeds[x.duration] : aj.fx.speeds._default;
            if (x.queue == null || x.queue === true) {
                x.queue = "fx"
            }
            x.old = x.complete;
            x.complete = function(e) {
                if (aj.isFunction(x.old)) {
                    x.old.call(this)
                }
                if (x.queue) {
                    aj.dequeue(this, x.queue)
                } else {
                    if (e !== false) {
                        aj._unmark(this)
                    }
                }
            }
            ;
            return x
        },
        easing: {
            linear: function(x, y, w, e) {
                return w + e * x
            },
            swing: function(x, y, w, e) {
                return ((-Math.cos(x * Math.PI) / 2) + 0.5) * e + w
            }
        },
        timers: [],
        fx: function(w, e, x) {
            this.options = e;
            this.elem = w;
            this.prop = x;
            e.orig = e.orig || {}
        }
    });
    aj.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            (aj.fx.step[this.prop] || aj.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, w = aj.css(this.elem, this.prop);
            return isNaN(e = parseFloat(w)) ? !w || w === "auto" ? 0 : w : e
        },
        custom: function(w, B, A) {
            var z = this
              , y = aj.fx;
            this.startTime = bj || bu();
            this.end = B;
            this.now = this.start = w;
            this.pos = this.state = 0;
            this.unit = A || this.unit || (aj.cssNumber[this.prop] ? "" : "px");
            function x(e) {
                return z.step(e)
            }
            x.queue = this.options.queue;
            x.elem = this.elem;
            x.saveState = function() {
                if (z.options.hide && aj._data(z.elem, "fxshow" + z.prop) === an) {
                    aj._data(z.elem, "fxshow" + z.prop, z.start)
                }
            }
            ;
            if (x() && aj.timers.push(x) && !bi) {
                bi = setInterval(y.tick, y.interval)
            }
        },
        show: function() {
            var e = aj._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || aj.style(this.elem, this.prop);
            this.options.show = true;
            if (e !== an) {
                this.custom(this.cur(), e)
            } else {
                this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
            }
            aj(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = aj._data(this.elem, "fxshow" + this.prop) || aj.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(C) {
            var A, B, w, y = bj || bu(), e = true, z = this.elem, x = this.options;
            if (C || y >= x.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                x.animatedProperties[this.prop] = true;
                for (A in x.animatedProperties) {
                    if (x.animatedProperties[A] !== true) {
                        e = false
                    }
                }
                if (e) {
                    if (x.overflow != null && !aj.support.shrinkWrapBlocks) {
                        aj.each(["", "X", "Y"], function(E, D) {
                            z.style["overflow" + D] = x.overflow[E]
                        })
                    }
                    if (x.hide) {
                        aj(z).hide()
                    }
                    if (x.hide || x.show) {
                        for (A in x.animatedProperties) {
                            aj.style(z, A, x.orig[A]);
                            aj.removeData(z, "fxshow" + A, true);
                            aj.removeData(z, "toggle" + A, true)
                        }
                    }
                    w = x.complete;
                    if (w) {
                        x.complete = false;
                        w.call(z)
                    }
                }
                return false
            } else {
                if (x.duration == Infinity) {
                    this.now = y
                } else {
                    B = y - this.startTime;
                    this.state = B / x.duration;
                    this.pos = juicebox_lib.jQuery.easing[x.animatedProperties[this.prop]](this.state, B, 0, 1, x.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos)
                }
                this.update()
            }
            return true
        }
    };
    aj.extend(aj.fx, {
        tick: function() {
            var e, x = aj.timers, w = 0;
            for (; w < x.length; w++) {
                e = x[w];
                if (!e() && x[w] === e) {
                    x.splice(w--, 1)
                }
            }
            if (!x.length) {
                aj.fx.stop()
            }
        },
        interval: 13,
        stop: function() {
            clearInterval(bi);
            bi = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                aj.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = e.now + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    aj.each(["width", "height"], function(w, e) {
        aj.fx.step[e] = function(x) {
            aj.style(x.elem, e, Math.max(0, x.now))
        }
    });
    if (aj.expr && aj.expr.filters) {
        aj.expr.filters.animated = function(e) {
            return aj.grep(aj.timers, function(w) {
                return e === w.elem
            }).length
        }
    }
    function u(w) {
        if (!aS[w]) {
            var e = al.body
              , x = aj("<" + w + ">").appendTo(e)
              , y = x.css("display");
            x.remove();
            if (y === "none" || y === "") {
                if (!bn) {
                    bn = al.createElement("iframe");
                    bn.frameBorder = bn.width = bn.height = 0
                }
                e.appendChild(bn);
                if (!k || !bn.createElement) {
                    k = (bn.contentWindow || bn.contentDocument).document;
                    k.write((al.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    k.close()
                }
                x = k.createElement(w);
                k.body.appendChild(x);
                y = aj.css(x, "display");
                e.removeChild(bn)
            }
            aS[w] = y
        }
        return aS[w]
    }
    var aR = /^t(?:able|d|h)$/i
      , ap = /^(?:body|html)$/i;
    if ("getBoundingClientRect"in al.documentElement) {
        aj.fn.offset = function(J) {
            var I = this[0], B;
            if (J) {
                return this.each(function(e) {
                    aj.offset.setOffset(this, J, e)
                })
            }
            if (!I || !I.ownerDocument) {
                return null
            }
            if (I === I.ownerDocument.body) {
                return aj.offset.bodyOffset(I)
            }
            try {
                B = I.getBoundingClientRect()
            } catch (E) {}
            var G = I.ownerDocument
              , x = G.documentElement;
            if (!B || !aj.contains(x, I)) {
                return B ? {
                    top: B.top,
                    left: B.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var F = G.body
              , C = aQ(G)
              , A = x.clientTop || F.clientTop || 0
              , D = x.clientLeft || F.clientLeft || 0
              , w = C.pageYOffset || aj.support.boxModel && x.scrollTop || F.scrollTop
              , z = C.pageXOffset || aj.support.boxModel && x.scrollLeft || F.scrollLeft
              , H = B.top + w - A
              , y = B.left + z - D;
            return {
                top: H,
                left: y
            }
        }
    } else {
        aj.fn.offset = function(F) {
            var E = this[0];
            if (F) {
                return this.each(function(H) {
                    aj.offset.setOffset(this, F, H)
                })
            }
            if (!E || !E.ownerDocument) {
                return null
            }
            if (E === E.ownerDocument.body) {
                return aj.offset.bodyOffset(E)
            }
            var C, x = E.offsetParent, w = E, G = E.ownerDocument, y = G.documentElement, A = G.body, B = G.defaultView, e = B ? B.getComputedStyle(E, null) : E.currentStyle, D = E.offsetTop, z = E.offsetLeft;
            while ((E = E.parentNode) && E !== A && E !== y) {
                if (aj.support.fixedPosition && e.position === "fixed") {
                    break
                }
                C = B ? B.getComputedStyle(E, null) : E.currentStyle;
                D -= E.scrollTop;
                z -= E.scrollLeft;
                if (E === x) {
                    D += E.offsetTop;
                    z += E.offsetLeft;
                    if (aj.support.doesNotAddBorder && !(aj.support.doesAddBorderForTableAndCells && aR.test(E.nodeName))) {
                        D += parseFloat(C.borderTopWidth) || 0;
                        z += parseFloat(C.borderLeftWidth) || 0
                    }
                    w = x;
                    x = E.offsetParent
                }
                if (aj.support.subtractsBorderForOverflowNotVisible && C.overflow !== "visible") {
                    D += parseFloat(C.borderTopWidth) || 0;
                    z += parseFloat(C.borderLeftWidth) || 0
                }
                e = C
            }
            if (e.position === "relative" || e.position === "static") {
                D += A.offsetTop;
                z += A.offsetLeft
            }
            if (aj.support.fixedPosition && e.position === "fixed") {
                D += Math.max(y.scrollTop, A.scrollTop);
                z += Math.max(y.scrollLeft, A.scrollLeft)
            }
            return {
                top: D,
                left: z
            }
        }
    }
    aj.offset = {
        bodyOffset: function(w) {
            var e = w.offsetTop
              , x = w.offsetLeft;
            if (aj.support.doesNotIncludeMarginInBodyOffset) {
                e += parseFloat(aj.css(w, "marginTop")) || 0;
                x += parseFloat(aj.css(w, "marginLeft")) || 0
            }
            return {
                top: e,
                left: x
            }
        },
        setOffset: function(F, E, z) {
            var D = aj.css(F, "position");
            if (D === "static") {
                F.style.position = "relative"
            }
            var B = aj(F), w = B.offset(), e = aj.css(F, "top"), G = aj.css(F, "left"), H = (D === "absolute" || D === "fixed") && aj.inArray("auto", [e, G]) > -1, C = {}, A = {}, x, y;
            if (H) {
                A = B.position();
                x = A.top;
                y = A.left
            } else {
                x = parseFloat(e) || 0;
                y = parseFloat(G) || 0
            }
            if (aj.isFunction(E)) {
                E = E.call(F, z, w)
            }
            if (E.top != null) {
                C.top = (E.top - w.top) + x
            }
            if (E.left != null) {
                C.left = (E.left - w.left) + y
            }
            if ("using"in E) {
                E.using.call(F, C)
            } else {
                B.css(C)
            }
        }
    };
    aj.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var e = this[0]
              , x = this.offsetParent()
              , y = this.offset()
              , w = ap.test(x[0].nodeName) ? {
                top: 0,
                left: 0
            } : x.offset();
            y.top -= parseFloat(aj.css(e, "marginTop")) || 0;
            y.left -= parseFloat(aj.css(e, "marginLeft")) || 0;
            w.top += parseFloat(aj.css(x[0], "borderTopWidth")) || 0;
            w.left += parseFloat(aj.css(x[0], "borderLeftWidth")) || 0;
            return {
                top: y.top - w.top,
                left: y.left - w.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || al.body;
                while (e && (!ap.test(e.nodeName) && aj.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    aj.each(["Left", "Top"], function(e, x) {
        var w = "scroll" + x;
        aj.fn[w] = function(z) {
            var y, A;
            if (z === an) {
                y = this[0];
                if (!y) {
                    return null
                }
                A = aQ(y);
                return A ? ("pageXOffset"in A) ? A[e ? "pageYOffset" : "pageXOffset"] : aj.support.boxModel && A.document.documentElement[w] || A.document.body[w] : y[w]
            }
            return this.each(function() {
                A = aQ(this);
                if (A) {
                    A.scrollTo(!e ? z : aj(A).scrollLeft(), e ? z : aj(A).scrollTop())
                } else {
                    this[w] = z
                }
            })
        }
    });
    function aQ(e) {
        return aj.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    aj.each(["Height", "Width"], function(e, x) {
        var w = x.toLowerCase();
        aj.fn["inner" + x] = function() {
            var y = this[0];
            return y ? y.style ? parseFloat(aj.css(y, w, "padding")) : this[w]() : null
        }
        ;
        aj.fn["outer" + x] = function(z) {
            var y = this[0];
            return y ? y.style ? parseFloat(aj.css(y, w, z ? "margin" : "border")) : this[w]() : null
        }
        ;
        aj.fn[w] = function(z) {
            var D = this[0];
            if (!D) {
                return z == null ? null : this
            }
            if (aj.isFunction(z)) {
                return this.each(function(F) {
                    var E = aj(this);
                    E[w](z.call(this, F, E[w]()))
                })
            }
            if (aj.isWindow(D)) {
                var C = D.document.documentElement["client" + x]
                  , y = D.document.body;
                return D.document.compatMode === "CSS1Compat" && C || y && y["client" + x] || C
            } else {
                if (D.nodeType === 9) {
                    return Math.max(D.documentElement["client" + x], D.body["scroll" + x], D.documentElement["scroll" + x], D.body["offset" + x], D.documentElement["offset" + x])
                } else {
                    if (z === an) {
                        var B = aj.css(D, w)
                          , A = parseFloat(B);
                        return aj.isNumeric(A) ? A : B
                    } else {
                        return this.css(w, typeof z === "string" ? z : z + "px")
                    }
                }
            }
        }
    });
    juicebox_lib.jQuery = juicebox_lib.$ = aj
}
)(window);
if (typeof jQuery === "undefined") {
    window.jQuery = juicebox_lib.jQuery
}
if (typeof $ === "undefined") {
    window.$ = juicebox_lib.jQuery
}
(function(r, t, q) {
    var j = ["top", "right", "bottom", "left", "opacity", "height", "width"]
      , s = ["top", "right", "bottom", "left"]
      , n = ["", "-webkit-", "-moz-", "-o-"]
      , v = ["avoidTransforms", "useTranslate3d", "leaveTransforms"]
      , h = /^([+-]=)?([\d+-.]+)(.*)$/
      , z = /([A-Z])/g
      , w = {
        secondary: {},
        meta: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
      , m = "jQe"
      , c = "cubic-bezier("
      , y = ")"
      , g = false
      , b = null;
    var k = document.body || document.documentElement
      , e = k.style
      , a = (e.WebkitTransition !== undefined) ? "webkitTransitionEnd" : (e.OTransition !== undefined) ? "oTransitionEnd" : "transitionend"
      , x = e.WebkitTransition !== undefined || e.MozTransition !== undefined || e.OTransition !== undefined || e.transition !== undefined
      , f = g = ("WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix());
    if (r.expr && r.expr.filters) {
        b = r.expr.filters.animated;
        r.expr.filters.animated = function(C) {
            return r(C).data("events") && r(C).data("events")[a] ? true : b.call(this, C)
        }
    }
    function i(M, G, D, H) {
        var J = h.exec(G)
          , E = M.css(D) === "auto" ? 0 : M.css(D)
          , N = typeof E == "string" ? A(E) : E
          , F = typeof G == "string" ? A(G) : G
          , L = H === true ? 0 : N
          , K = M.is(":hidden")
          , C = M.translation();
        if (D == "left") {
            L = parseInt(N, 10) + C.x
        }
        if (D == "right") {
            L = parseInt(N, 10) + C.x
        }
        if (D == "top") {
            L = parseInt(N, 10) + C.y
        }
        if (D == "bottom") {
            L = parseInt(N, 10) + C.y
        }
        if (!J && G == "show") {
            L = 1;
            if (K) {
                M.css({
                    display: "block",
                    opacity: 0
                })
            }
        } else {
            if (!J && G == "hide") {
                L = 0
            }
        }
        if (J) {
            var I = parseFloat(J[2]);
            if (J[1]) {
                I = ((J[1] === "-=" ? -1 : 1) * I) + parseInt(L, 10)
            }
            return I
        } else {
            return L
        }
    }
    function u(C, E, D) {
        return ((D === true || (g == true && D != false)) && f) ? "translate3d(" + C + "px," + E + "px,0)" : "translate(" + C + "px," + E + "px)"
    }
    function l(J, O, H, K, N, D, G, C) {
        var I = J.data(m) ? !d(J.data(m)) ? J.data(m) : r.extend(true, {}, w) : r.extend(true, {}, w)
          , F = N
          , M = r.inArray(O, s) > -1;
        if (M) {
            var P = I.meta
              , E = A(J.css(O)) || 0
              , L = O + "_o";
            F = N - E;
            P[O] = F;
            P[L] = J.css(O) == "auto" ? 0 + F : E + F || 0;
            I.meta = P;
            if (G && F === 0) {
                F = 0 - P[L];
                P[O] = F;
                P[L] = 0
            }
        }
        return J.data(m, B(I, O, H, K, F, D, G, C))
    }
    function B(K, J, F, H, I, D, E, C) {
        K = typeof K === "undefined" ? {} : K;
        K.secondary = typeof K.secondary === "undefined" ? {} : K.secondary;
        for (var G = n.length - 1; G >= 0; G--) {
            if (typeof K[n[G] + "transition-property"] === "undefined") {
                K[n[G] + "transition-property"] = ""
            }
            K[n[G] + "transition-property"] += ", " + ((D === true && E === true) ? n[G] + "transform" : J);
            K[n[G] + "transition-duration"] = F + "ms";
            K[n[G] + "transition-timing-function"] = H;
            K.secondary[((D === true && E === true) ? n[G] + "transform" : J)] = (D === true && E === true) ? u(K.meta.left, K.meta.top, C) : I
        }
        return K
    }
    function o(D) {
        for (var C in D) {
            if ((C == "width" || C == "height") && (D[C] == "show" || D[C] == "hide" || D[C] == "toggle")) {
                return true
            }
        }
        return false
    }
    function d(D) {
        for (var C in D) {
            return false
        }
        return true
    }
    function A(C) {
        return parseFloat(C.replace(/px/i, ""))
    }
    function p(F, E, C) {
        var D = r.inArray(F, j) > -1;
        if ((F == "width" || F == "height") && (E === parseFloat(C.css(F)))) {
            D = false
        }
        return D
    }
    r.extend({
        toggle3DByDefault: function() {
            g = !g
        }
    });
    r.fn.translation = function() {
        if (!this[0]) {
            return null
        }
        var G = this[0]
          , D = window.getComputedStyle(G, null)
          , H = {
            x: 0,
            y: 0
        };
        for (var F = n.length - 1; F >= 0; F--) {
            var E = D.getPropertyValue(n[F] + "transform");
            if (E && (/matrix/i).test(E)) {
                var C = E.replace(/^matrix\(/i, "").split(/, |\)$/g);
                H = {
                    x: parseInt(C[4], 10),
                    y: parseInt(C[5], 10)
                };
                break
            }
        }
        return H
    }
    ;
    r.fn.animate = function(D, E, I, K) {
        D = D || {};
        var F = !(typeof D.bottom !== "undefined" || typeof D.right !== "undefined")
          , J = r.speed(E, I, K)
          , C = this
          , H = 0
          , G = function() {
            H--;
            if (H === 0) {
                if (typeof J.complete === "function") {
                    J.complete.apply(C[0], arguments)
                }
            }
        };
        if (!x || d(D) || o(D) || J.duration <= 0 || (r.fn.animate.defaults.avoidTransforms === true && D.avoidTransforms !== false)) {
            return t.apply(this, arguments)
        }
        return this[J.queue === true ? "queue" : "each"](function() {
            var V = r(this)
              , M = r.extend({}, J)
              , R = function() {
                var ac = {};
                for (var Z = n.length - 1; Z >= 0; Z--) {
                    ac[n[Z] + "transition-property"] = "none";
                    ac[n[Z] + "transition-duration"] = "";
                    ac[n[Z] + "transition-timing-function"] = ""
                }
                V.unbind(a);
                if (!D.leaveTransforms === true) {
                    var ab = V.data(m) || {}
                      , aa = {};
                    for (Z = n.length - 1; Z >= 0; Z--) {
                        aa[n[Z] + "transform"] = ""
                    }
                    if (F && typeof ab.meta !== "undefined") {
                        for (var Y = 0, X; X = s[Y]; ++Y) {
                            aa[X] = ab.meta[X + "_o"] + "px"
                        }
                    }
                    V.css(ac).css(aa)
                }
                if (D.opacity === "hide") {
                    V.css("display", "none")
                }
                V.data(m, null);
                G.call(V)
            }
              , N = {
                bounce: c + "0.0, 0.35, .5, 1.3" + y,
                linear: "linear",
                swing: "ease-in-out",
                easeOutQuad: c + "0.250, 0.460, 0.450, 0.940" + y,
                easeInOutQuad: c + "0.455, 0.030, 0.515, 0.955" + y,
                easeInOutCirc: c + "0.785, 0.135, 0.150, 0.860" + y
            }
              , Q = {}
              , O = N[M.easing || "swing"] ? N[M.easing || "swing"] : M.easing || "swing";
            for (var L in D) {
                if (r.inArray(L, v) === -1) {
                    var S = r.inArray(L, s) > -1
                      , U = i(V, D[L], L, (S && D.avoidTransforms !== true));
                    if (D.avoidTransforms !== true && p(L, U, V)) {
                        l(V, L, M.duration, O, S && D.avoidTransforms === true ? U + "px" : U, S && D.avoidTransforms !== true, F, D.useTranslate3d === true)
                    } else {
                        Q[L] = D[L]
                    }
                }
            }
            var W = V.data(m) || {};
            for (var P = n.length - 1; P >= 0; P--) {
                if (typeof W[n[P] + "transition-property"] !== "undefined") {
                    W[n[P] + "transition-property"] = W[n[P] + "transition-property"].substr(2)
                }
            }
            V.data(m, W).unbind(a);
            if (!d(V.data(m)) && !d(V.data(m).secondary)) {
                H++;
                V.css(V.data(m));
                var T = V.data(m).secondary;
                setTimeout(function() {
                    V.bind(a, R).css(T)
                })
            } else {
                M.queue = false
            }
            if (!d(Q)) {
                H++;
                t.apply(V, [Q, {
                    duration: M.duration,
                    easing: r.easing[M.easing] ? M.easing : (r.easing.swing ? "swing" : "linear"),
                    complete: G,
                    queue: M.queue
                }])
            }
            return true
        })
    }
    ;
    r.fn.animate.defaults = {};
    r.fn.stop = function(F, D, E) {
        if (!x) {
            return q.apply(this, [F, D])
        }
        if (F) {
            this.queue([])
        }
        var G = {};
        for (var C = n.length - 1; C >= 0; C--) {
            G[n[C] + "transition-property"] = "none";
            G[n[C] + "transition-duration"] = "";
            G[n[C] + "transition-timing-function"] = ""
        }
        this.each(function() {
            var J = r(this), I = window.getComputedStyle(this, null), L = {}, K;
            if (!d(J.data(m)) && !d(J.data(m).secondary)) {
                var M = J.data(m);
                if (D) {
                    L = M.secondary;
                    if (!E && typeof M.meta.left_o !== undefined || typeof M.meta.top_o !== undefined) {
                        L.left = typeof M.meta.left_o !== undefined ? M.meta.left_o : "auto";
                        L.top = typeof M.meta.top_o !== undefined ? M.meta.top_o : "auto";
                        for (K = n.length - 1; K >= 0; K--) {
                            L[n[K] + "transform"] = ""
                        }
                    }
                } else {
                    for (var N in J.data(m).secondary) {
                        N = N.replace(z, "-$1").toLowerCase();
                        L[N] = I.getPropertyValue(N);
                        if (!E && (/matrix/i).test(L[N])) {
                            var H = L[N].replace(/^matrix\(/i, "").split(/, |\)$/g);
                            L.left = (parseFloat(H[4]) + parseFloat(J.css("left")) + "px") || "auto";
                            L.top = (parseFloat(H[5]) + parseFloat(J.css("top")) + "px") || "auto";
                            for (K = n.length - 1; K >= 0; K--) {
                                L[n[K] + "transform"] = ""
                            }
                        }
                    }
                }
                J.unbind(a).css(G).css(L).data(m, null)
            } else {
                q.apply(J, [F, D])
            }
        });
        return this
    }
}
)(juicebox_lib.jQuery, juicebox_lib.jQuery.fn.animate, juicebox_lib.jQuery.fn.stop);
(function(i) {
    if (!juicebox_lib.jQuery.browser.msie || juicebox_lib.jQuery.browser.version < 10) {
        return
    }
    var k = i.document, o = function(r, t, u) {
        var q, s = k.createEvent("Event");
        s.initEvent(r, true, true);
        for (q in u) {
            s[q] = u[q]
        }
        t.dispatchEvent(s)
    }, l = (function() {
        var t = Math.pow(2, 32) - 1
          , r = Object.prototype.hasOwnProperty;
        function s(u) {
            return u >>> 0
        }
        function q(u) {
            var v = -1, w, x;
            for (x in u) {
                w = (String(s(x)) === x && s(x) !== t && r.call(u, x));
                if (w && x > v) {
                    v = x
                }
            }
            return v
        }
        return function(u) {
            var v = 0;
            u = u || {};
            u.length = {
                get: function() {
                    var w = +q(this);
                    return Math.max(v, w + 1)
                },
                set: function(z) {
                    var x = s(z);
                    if (x !== +z) {
                        throw new RangeError()
                    }
                    for (var y = x, w = this.length; y < w; y++) {
                        delete this[y]
                    }
                    v = x
                }
            };
            u.toString = {
                value: Array.prototype.join
            };
            return Object.create(Array.prototype, u)
        }
    }
    )(), m = {
        identifiedTouch: {
            value: function(r) {
                var q = this.length;
                while (q--) {
                    if (this[q].identifier === r) {
                        return this[q]
                    }
                }
                return undefined
            }
        },
        item: {
            value: function(q) {
                return this[q]
            }
        },
        _touchIndex: {
            value: function(r) {
                var q = this.length;
                while (q--) {
                    if (this[q].pointerId == r.pointerId) {
                        return q
                    }
                }
                return -1
            }
        },
        _addAll: {
            value: function(r) {
                var q = 0
                  , s = r.length;
                for (; q < s; q++) {
                    this._add(r[q])
                }
            }
        },
        _add: {
            value: function(r) {
                var q = this._touchIndex(r);
                q = q < 0 ? this.length : q;
                r.type = "MSPointerMove";
                r.identifier = r.pointerId;
                r.force = r.pressure;
                r.radiusX = r.radiusY = 1;
                r.rotationAngle = 0;
                this[q] = r
            }
        },
        _remove: {
            value: function(r) {
                var q = this._touchIndex(r);
                if (q >= 0) {
                    this.splice(q, 1)
                }
            }
        }
    }, f = (function(q) {
        return function() {
            var r = l(q);
            if (arguments.length === 1) {
                r.length = arguments[0]
            } else {
                r.push.apply(r, arguments)
            }
            return r
        }
    }
    )(m), d, c = {}, n = i.MSGesture ? new MSGesture() : null, a = [], j = function(q, r) {
        if (r) {
            if (q === r) {
                return true
            } else {
                return j(q, r.parentNode)
            }
        } else {
            return false
        }
    }, h = function(q) {
        var u, w = q.target, s, t, v;
        if (q.type === "MSPointerDown") {
            d._add(q);
            c[q.pointerId] = q.target;
            u = "touchstart";
            if (d.length > 1) {
                n.target = q.target;
                for (var r = 0; r < d.length; r++) {
                    n.addPointer(d[r].pointerId)
                }
            }
        }
        if (q.type === "MSPointerMove" && d.identifiedTouch(q.pointerId)) {
            d._add(q);
            u = "touchmove"
        }
        t = k.createTouchList(q);
        v = k.createTouchList();
        for (var r = 0; r < d.length; r++) {
            if (j(w, c[d[r].identifier])) {
                v._add(d[r])
            }
        }
        s = c[q.pointerId];
        if (q.type === "MSPointerUp") {
            d._remove(q);
            c[q.pointerId] = null;
            delete c[q.pointerId];
            u = "touchend";
            if (d.length <= 1 && n) {
                n.stop()
            }
        }
        if (u && s) {
            o(u, s, {
                touches: d,
                changedTouches: t,
                targetTouches: v
            })
        }
    }, b = function(q) {
        var r;
        if (q.type === "MSGestureStart") {
            r = "gesturestart"
        } else {
            if (q.type === "MSGestureChange") {
                r = "gesturechange"
            } else {
                if (q.type === "MSGestureEnd") {
                    r = "gestureend"
                }
            }
        }
        o(r, q.target, {
            scale: q.scale,
            rotation: q.rotation,
            screenX: q.screenX,
            screenY: q.screenY
        })
    }, g = function(u) {
        var s = p
          , r = e
          , t = u.prototype.addEventListener
          , q = u.prototype.removeEventListener;
        u.prototype.addEventListener = function(w, x, v) {
            i.navigator.msPointerEnabled && s.call(this, w, x, v);
            t.call(this, w, x, v)
        }
        ;
        u.prototype.removeEventListener = function(w, x, v) {
            i.navigator.msPointerEnabled && r.call(this, w, x, v);
            q.call(this, w, x, v)
        }
    }, p = function(r, u, q) {
        var t = this, s;
        if (r.indexOf("touchstart") === 0) {
            s = function() {
                if (j(t, arguments[0].target)) {
                    h.apply(this, arguments)
                }
            }
            ;
            a.push({
                node: this,
                func: s
            });
            this.ownerDocument.addEventListener("MSPointerDown", s, q)
        }
        if (r.indexOf("touchmove") === 0) {
            this.ownerDocument.addEventListener("MSPointerMove", h, q)
        }
        if (r.indexOf("touchend") === 0) {
            this.ownerDocument.addEventListener("MSPointerUp", h, q)
        }
        if (r.indexOf("gesturestart") === 0) {
            this.ownerDocument.addEventListener("MSGestureStart", b, q)
        }
        if (r.indexOf("gesturechange") === 0) {
            this.ownerDocument.addEventListener("MSGestureChange", b, q)
        }
        if (r.indexOf("gestureend") === 0) {
            this.ownerDocument.addEventListener("MSGestureEnd", b, q)
        }
        if (this.style && typeof this.style.msTouchAction != "undefined") {
            this.style.msTouchAction = "none"
        }
    }, e = function(s, u, q) {
        var t, r;
        if (s.indexOf("touchstart") === 0) {
            r = a.length;
            while (r--) {
                if (a[r].node === this) {
                    this.ownerDocument.removeEventListener("MSPointerDown", t, q);
                    a.splice(r, 1);
                    break
                }
            }
        }
        if (s.indexOf("touchmove") === 0) {
            this.ownerDocument.removeEventListener("MSPointerMove", h, q)
        }
        if (s.indexOf("touchend") === 0) {
            this.ownerDocument.removeEventListener("MSPointerUp", h, q)
        }
        if (s.indexOf("gesturestart") === 0) {
            this.ownerDocument.removeEventListener("MSGestureStart", b, q)
        }
        if (s.indexOf("gesturechange") === 0) {
            this.ownerDocument.removeEventListener("MSGestureChange", b, q)
        }
        if (s.indexOf("gestureend") === 0) {
            this.ownerDocument.removeEventListener("MSGestureEnd", b, q)
        }
    };
    k.createTouchList = function(r) {
        var q = new f();
        if (r) {
            if (r.length) {
                q._addAll(r)
            } else {
                q._add(r)
            }
        }
        return q
    }
    ;
    k.createTouch = function(q, w, r, v, t, u, s) {
        return {
            identifier: r,
            screenX: u,
            screenY: s,
            pageX: v,
            pageY: t,
            target: w
        }
    }
    ;
    if (!i.ontouchstart) {
        i.ontouchstart = 1
    }
    d = k.createTouchList();
    g(HTMLElement);
    g(Document)
}(window));
juicebox_lib.jQuery.fn.extend({
    disableSelection: function() {
        return this.each(function() {
            this.onselectstart = function() {
                return false
            }
            ;
            this.unselectable = "on";
            jQuery(this).css("user-select", "none");
            jQuery(this).css("-o-user-select", "none");
            jQuery(this).css("-moz-user-select", "none");
            jQuery(this).css("-khtml-user-select", "none");
            jQuery(this).css("-webkit-user-select", "none")
        })
    }
});
if (!juicebox_lib.jQuery.easing.easeInOutQuart) {
    juicebox_lib.jQuery.extend(juicebox_lib.jQuery.easing, {
        easeInOutQuart: function(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return h / 2 * f * f * f * f + a
            }
            return -h / 2 * ((f -= 2) * f * f * f - 2) + a
        },
        easeOutQuart: function(e, f, a, h, g) {
            return -h * ((f = f / g - 1) * f * f * f - 1) + a
        }
    })
}
var juice_box_utils = function(p$) {
    var $ = p$;
    var is_pro_version = "cd64f8c2ad416da082f8c514ba054429";
    var is_absolute_path = function(path) {
        if (!path) {
            return false
        }
        if (path.indexOf("/") === 0) {
            return true
        }
        if (path.toLowerCase().indexOf("http://") === 0) {
            return true
        }
        if (path.toLowerCase().indexOf("https://") === 0) {
            return true
        }
        if (path.indexOf("://") > 0 && path.indexOf("://") < 10) {
            return true
        }
        return false
    };
    var is_end_with = function(str, ch) {
        if (!str || !ch) {
            return false
        }
        if (str.substring(str.length - ch.length) === ch) {
            return true
        }
        return false
    };
    var get_base_url = function(url, uri) {
        if (url.indexOf("/") === 0) {
            var iposs = uri.indexOf("://");
            if (iposs < 0) {
                iposs = 0
            } else {
                iposs += 3
            }
            var ipose = uri.indexOf("/", iposs);
            if (ipose < 0) {
                return uri
            }
            return uri.substring(0, ipose)
        }
        var ipos = uri.lastIndexOf("/");
        if (ipos <= 0) {
            return ""
        }
        return uri.substring(0, ipos)
    };
    var convert_to_absolute_path = function(url) {
        if (url.toLowerCase().indexOf("http://") === 0 || url.toLowerCase().indexOf("https://") === 0) {
            return url
        }
        var uri = window.location.href.split("#")[0].split("?")[0];
        var ipos = uri.lastIndexOf("/");
        var iposs = uri.indexOf("://");
        if (ipos <= 0) {
            return "/" + url
        }
        if (iposs > 0 && ipos - iposs < 3) {
            return "/" + url
        }
        return get_base_url(url, uri) + (url.indexOf("/") === 0 ? "" : "/") + url
    };
    var concatenate_path = function(base, url) {
        if (!base) {
            base = ""
        }
        if (!url) {
            url = ""
        }
        if (is_absolute_path(url)) {
            return url
        }
        if (!is_end_with(base, "/") && base) {
            base += "/"
        }
        return base + url
    };
    var is_it_scrolling = function() {
        var doc = $(document);
        var win = $(window);
        return {
            v_scrolling: Math.abs(parseInt(doc.height()) - parseInt(win.height())) > (is_android() ? 3 : 0),
            h_scrolling: doc.width() > win.width()
        }
    };
    var in_iframe = function() {
        if (window.location.href.indexOf("noiframelimit") > -1) {
            return false
        }
        if (top && top.location !== location) {
            return true
        }
        return false
    };
    var is_windows = function() {
        if (navigator.userAgent.match(/Windows/i)) {
            return true
        }
        return false
    };
    var is_iphone_chrome = function() {
        if (is_iphone() && navigator.userAgent.match(/CriOS/i)) {
            return true
        }
        return false
    };
    var is_iphone = function() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return true
        } else {
            if (navigator.userAgent.match(/iPod/i)) {
                return true
            }
        }
        return false
    };
    var is_ipad = function() {
        if (navigator.userAgent.match(/iPad/i)) {
            return true
        }
        return false
    };
    var is_android = function() {
        if (navigator.userAgent.match(/Android/i)) {
            return true
        }
        return false
    };
    var is_mobile_ie = function() {
        if (navigator.userAgent.match(/IEMobile/i)) {
            return true
        }
        return false
    };
    var is_small_android = function() {
        if (navigator.userAgent.match(/Galaxy Nexus/i)) {
            return true
        }
        if (navigator.userAgent.match(/Nexus S/i)) {
            return true
        }
        if (navigator.userAgent.match(/HTC Panache/i)) {
            return true
        }
        if (navigator.userAgent.match(/HTC myTouch/i)) {
            return true
        }
        if (navigator.userAgent.match(/Sensation/i)) {
            return true
        }
        if (is_android() && is_small_screen()) {
            return true
        }
        return false
    };
    var is_ie_after_11 = function() {
        if (navigator.userAgent.match(/Trident.*rv/) && $.browser.version >= 11) {
            return true
        }
        return false
    };
    var is_ios_mobile_chrome = function() {
        if (!is_mac_os()) {
            return false
        }
        if (navigator.userAgent.match(/CriOS.*Mobile/)) {
            return true
        }
        return false
    };
    var is_chrome = function() {
        if (navigator.userAgent.match(/Chrome/i)) {
            return true
        }
        return false
    };
    var is_opera = function() {
        if (navigator.userAgent.match(/Opera/i) || navigator.userAgent.match(/OPR/i)) {
            return true
        }
        return false
    };
    var is_firefox = function() {
        if (navigator.userAgent.match(/Firefox/i)) {
            return true
        }
        return false
    };
    var get_android_ver = function() {
        var pos = navigator.userAgent.indexOf("Android");
        if (pos < 0) {
            return 0
        }
        var pose = navigator.userAgent.indexOf(";", pos);
        if (pose <= pos) {
            return 0
        }
        var vi = navigator.userAgent.substring(pos, pose);
        var va = vi.split(" ");
        if (va.length !== 2) {
            return 0
        }
        var num = parseInt(va[1].replace(/\./g, "").substring(0, 3));
        var ver = parseFloat(parseFloat(num) / 100);
        if (ver < 1) {
            ver *= 10
        }
        if (ver < 1) {
            ver *= 10
        }
        return ver
    };
    var get_vp_meta_cnt = function(density, scalable) {
        return "width=device-width, initial-scale=1.0, minimum-scale=" + (scalable ? 0.25 : 1) + ", maximum-scale=" + (scalable ? 4 : 1) + ", user-scalable=" + (scalable ? 1 : 0) + (density ? ", target-densitydpi=" + density : ", minimal-ui")
    };
    var get_vp_meta_cnt_4_iphone_with_ratio = function(ratio) {
        return "width=800, initial-scale=" + ratio + ", minimum-scale=" + ratio + ", maximum-scale=" + ratio + ", user-scalable=" + (scalable ? 1 : 0) + ", minimal-ui"
    };
    var meta_tag_id = "jb-viewport";
    var populate_viewport_meta_content = function(isFullscreen) {
        if (isFullscreen) {
            if (is_ipad() || is_iphone()) {
                return get_vp_meta_cnt("")
            } else {
                if (is_android()) {
                    return get_vp_meta_cnt(160)
                }
            }
        } else {
            return ""
        }
        return ""
    };
    var set_viewport_value = function(val, scalable) {
        if (is_android()) {
            $("#" + meta_tag_id).attr("content", get_vp_meta_cnt(val, scalable))
        }
        if (is_iphone()) {
            $("#" + meta_tag_id).attr("content", get_vp_meta_cnt_4_iphone_with_ratio(val, scalable))
        }
    };
    var only_has_minimal_ui = function() {
        var vp = document.getElementsByName("viewport");
        if (!vp || vp.length <= 0 || !vp[0].content) {
            return false
        }
        var cnt = vp[0].content.toLowerCase().replace(/ /g, "");
        if (cnt.toLowerCase() == "minimal-ui") {
            return true
        }
        return false
    };
    var host_has_viewport_meta = function() {
        if (only_has_minimal_ui()) {
            return false
        }
        if ((is_iphone() && is_ios_mobile_chrome()) && $("#" + meta_tag_id).length <= 0) {
            return false
        }
        return document.getElementsByName("viewport").length > 0 && $("#" + meta_tag_id).length <= 0
    };
    var has_viewport_locked = function() {
        var vp = document.getElementsByName("viewport");
        if (!vp || vp.length <= 0 || !vp[0].content) {
            return false
        }
        var cnt = vp[0].content.toLowerCase().replace(/ /g, "");
        var hasInitialScale = cnt.match(/initial-scale=1\b/g) != null && cnt.match(/initial-scale=1\.[1-9]/g) == null;
        var userScalable = cnt.indexOf("user-scalable=0") >= 0 || cnt.indexOf("user-scalable=off") >= 0 || cnt.indexOf("user-scalable=false") >= 0;
        return hasInitialScale && userScalable
    };
    var need_viewport_meta = function() {
        if (is_ipad() || is_iphone() || is_android()) {
            return true
        }
        return false
    };
    var add_js_tag = function(url, id) {
        if (id && $("#" + id).length > 0) {
            return
        }
        var tag = document.createElement("script");
        if (id) {
            tag.id = id
        }
        tag.type = "text/javascript";
        tag.src = url;
        var header = document.getElementsByTagName("head");
        if (!header) {
            return
        }
        header[0].appendChild(tag)
    };
    var add_viewport_meta = function(isFullscreen) {
        if (!need_viewport_meta()) {
            return
        }
        if ($("#" + meta_tag_id).length > 0 && !only_has_minimal_ui()) {
            return
        }
        if (host_has_viewport_meta()) {
            return
        }
        var svmeta4Idvc = document.createElement("meta");
        svmeta4Idvc.name = "viewport";
        svmeta4Idvc.id = meta_tag_id;
        svmeta4Idvc.content = populate_viewport_meta_content(isFullscreen);
        var header = document.getElementsByTagName("head");
        if (!header) {
            return
        }
        header[0].appendChild(svmeta4Idvc)
    };
    var set_viewport_meta = function(isFullscreen) {
        if (!need_viewport_meta()) {
            return
        }
        var mtag = $("#" + meta_tag_id);
        if (mtag.length <= 0) {
            var vpobj = document.getElementsByName("viewport");
            for (var i = 0; i < vpobj.length; i++) {
                if (!vpobj[i] || !vpobj[i].remove) {
                    continue
                }
                vpobj[i].remove()
            }
            add_viewport_meta(isFullscreen);
            return
        }
        mtag.attr("content", populate_viewport_meta_content(isFullscreen))
    };
    var get_viewport_meta_content = function() {
        var tags = document.getElementsByName("viewport");
        if (tags.length <= 0) {
            return null
        }
        if (!tags[0].content) {
            return null
        }
        return tags[0].content
    };
    var set_viewport_meta_content = function(content) {
        var tags = document.getElementsByName("viewport");
        if (tags.length <= 0) {
            return
        }
        tags[0].content = content
    };
    var get_current_path = function() {
        var uri = window.location.href.split("#")[0].split("?")[0];
        var posLasts = uri.lastIndexOf("/");
        var posS = uri.indexOf("//");
        if (posLasts < 0 || posS < 0) {
            return ""
        }
        var pos1 = uri.indexOf("/", posS + 2);
        if (pos1 < 0 || posLasts - pos1 <= 0) {
            return "/"
        }
        var tail = uri.substring(posLasts + 1);
        if (tail.indexOf(".") > 0) {
            return uri.substring(pos1, posLasts)
        }
        return uri.substring(pos1)
    };
    var get_qs_value = function(key, dft_) {
        if (dft_ == null) {
            dft_ = ""
        }
        key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if (qs == null) {
            return dft_
        } else {
            return qs[1]
        }
    };
    var get_js_folder_url = function() {
        var i, pos, scripts = document.getElementsByTagName("script");
        for (i = 0; i < scripts.length; i++) {
            pos = scripts[i].src.toLowerCase().indexOf("juicebox.js");
            if (pos === 0) {
                return ""
            }
            if (pos > 0) {
                return scripts[i].src.substring(0, pos)
            }
        }
        return ""
    };
    var u_skey = "cd64f8c2ad416da082f8c514ba054429";
    var set_cookie = function(c_name, value, expires) {
        if (expires < 0) {
            expires = "Thu, 01 Jan 1970 00:00:00 GMT"
        } else {
            expires = ""
        }
        document.cookie = c_name + "=" + escape(value) + ((expires === "") ? "" : ";expires=" + expires) + ";path=/"
    };
    var get_cookie = function(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start !== -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end === -1) {
                    c_end = document.cookie.length
                }
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    };
    var wrap_value = function(val) {
        switch (typeof val) {
        case "boolean":
        case "number":
            return val + "";
        default:
            return '"' + val + '"'
        }
    };
    var save_object_2_cookie = function(c_name, object) {
        if (!object) {
            set_cookie(c_name, "");
            return
        }
        var jsons = "";
        for (var k in object) {
            if (jsons.length > 0) {
                jsons += ","
            }
            jsons += k + ":" + wrap_value(object[k])
        }
        jsons = "{" + jsons + "}";
        set_cookie(c_name, jsons)
    };
    var get_object_from_cookie = function(c_name) {
        var json = get_cookie(c_name);
        var ret;
        eval("ret = " + (json ? json : null) + ";");
        return ret
    };
    var get_device_dpi = function(cb) {
        if (!is_iphone() && !is_ipad() && !is_android()) {
            if (cb) {
                cb(1)
            }
            return 1
        }
        var s = document.createElement("style");
        var d = document.createElement("div");
        d.id = "dpi-detector-01";
        var map = [{
            ratio: 1,
            pixel: "10px"
        }, {
            ratio: 1.5,
            pixel: "15px"
        }, {
            ratio: 2,
            pixel: "20px"
        }];
        s.innerText = "";
        for (var i = 0; i < map.length; i++) {
            s.innerText += "@media (-webkit-min-device-pixel-ratio:" + map[i].ratio + ") {#" + d.id + "{font-size:" + map[i].pixel + " !important;}}"
        }
        document.documentElement.appendChild(s).appendChild(d);
        window.setTimeout(function() {
            var dfs = getComputedStyle(d, null).getPropertyValue("font-size");
            for (var j = 0; j < map.length; j++) {
                if (dfs == map[i].pixel) {
                    if (cb) {
                        cb(map[i].ratio)
                    }
                    return map[i].ratio
                }
            }
            s.parentNode.removeChild(s);
            d.parentNode.removeChild(d);
            if (cb) {
                cb(1)
            }
            return 1
        }, 100);
        return 0
    };
    var get_query_path = function(document_id, path) {
        var paths = path.split(",");
        var xpath = "";
        for (var i = 0; i < paths.length; i++) {
            xpath += "#" + document_id + " " + paths[i] + (i === paths.length - 1 ? "" : ", ")
        }
        return xpath
    };
    var is_small_screen = function() {
        if (is_android()) {
            if (navigator.userAgent.match(/Mobile/i)) {
                return true
            }
            return false
        }
        if (Math.max(screen.height, screen.width) > 1000) {
            return false
        }
        return true
    };
    var is_swipable_device = function() {
        if (!is_iphone() && !is_ipad() && !is_android()) {
            return false
        }
        return true
    };
    var is_large_screen_mode = function(config) {
        if (config.screenmode.toUpperCase() === "LARGE") {
            return true
        }
        if (config.screenmode.toUpperCase() === "SMALL") {
            return false
        }
        if (!is_small_screen() && !is_small_android() && !is_iphone()) {
            return true
        }
        return false
    };
    var is_earlier_ie = function() {
        if ($.browser.msie && $.browser.version < 9) {
            return true
        }
        return false
    };
    var is_ie8 = function() {
        return ($.browser.msie && $.browser.version < 9 && $.browser.version > 7)
    };
    var is_firefox3 = function() {
        var bz = $.browser;
        if (bz.mozilla && bz.version.slice(0, 3) == "1.9") {
            return true
        }
        return false
    };
    var format_color = function(color) {
        color = color.replace(/#/g, "");
        if (color.match(/^[0-9a-f]{3,6}$/i)) {
            return "#" + color
        }
        return color
    };
    var need_new_window = function(config) {
        if (typeof (config.expandinnewpage) === "boolean") {
            return config.expandinnewpage
        }
        var optval = config.expandinnewpage.toUpperCase();
        if (optval === "TRUE") {
            return true
        }
        if (optval === "FALSE") {
            return false
        }
        if (is_iphone() || is_ipad()) {
            if (has_viewport_locked()) {
                return false
            }
            return true
        }
        return false
    };
    var is_new_expanded_window = function() {
        return typeof (expanded_jb_gallery) != "undefined" && expanded_jb_gallery
    };
    var is_adobe_air = function() {
        return navigator.userAgent.match(/AdobeAIR/i)
    };
    var show_real_fullscreen = function(domid) {
        var eledlg = document.getElementById(domid);
        if (eledlg.requestFullScreen) {
            eledlg.requestFullScreen()
        } else {
            if (eledlg.mozRequestFullScreen) {
                eledlg.mozRequestFullScreen()
            } else {
                if (eledlg.webkitRequestFullScreen) {
                    eledlg.webkitRequestFullScreen()
                } else {
                    if (eledlg.msRequestFullscreen) {
                        eledlg.msRequestFullscreen()
                    }
                }
            }
        }
    };
    var exit_fullscreen = function() {
        if (document.cancelFullScreen) {
            document.cancelFullScreen()
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else {
                if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else {
                    if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    }
                }
            }
        }
    };
    var support_real_fullscreen = function() {
        if (document.cancelFullScreen) {
            return true
        } else {
            if (document.mozCancelFullScreen) {
                return true
            } else {
                if (document.webkitCancelFullScreen) {
                    return true
                } else {
                    if (document.msFullscreenEnabled) {
                        return true
                    }
                }
            }
        }
        return false
    };
    var is_in_real_fullscreen = function() {
        if (!screen || !window || !screen.height || !window.innerHeight) {
            return false
        }
        var ms = Math.max(screen.height, screen.width);
        var mw = Math.max(window.innerHeight, window.innerWidth);
        if (ms - mw > 10) {
            return false
        }
        return true
    };
    var exit_support_real_fullscreen = function() {
        if (document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen) {
            return true
        }
        return false
    };
    var add_fullscreen_listener = function(callback) {
        if (typeof (callback) != "function") {
            return
        }
        if (!support_real_fullscreen()) {
            return
        }
        document.addEventListener("fullscreenchange", function() {
            callback(document.fullscreen)
        }, false);
        document.addEventListener("mozfullscreenchange", function() {
            callback(document.mozFullScreen)
        }, false);
        document.addEventListener("webkitfullscreenchange", function() {
            callback(document.webkitIsFullScreen)
        }, false);
        document.addEventListener("MSFullscreenChange", function() {
            callback(document.msFullscreenElement != null)
        }, false)
    };
    var is_side_layout = function(config) {
        var tmbpos = config.thumbsposition.toUpperCase();
        return tmbpos === "LEFT" || tmbpos === "RIGHT"
    };
    var add_font_icon_4_ie8 = function(config, content) {
        if (!$.browser.msie || $.browser.version >= 9) {
            return ""
        }
        var bbstyle = config.buttonbariconrealsize ? config.buttonbariconrealsize + "px;" : "";
        return "<span style=\"font-family: 'juicebox';" + bbstyle + '">' + content + "</span>"
    };
    var get_text_shadow_style = function(rgba, colora, styleValueOnly) {
        if (is_earlier_ie()) {
            return ""
        }
        var shadowstr = (colora.toLowerCase() === "transparent" ? "0px 0px 0px " : "1px 1px 2px ");
        if (is_small_android() || is_iphone()) {
            return (styleValueOnly ? "" : "-webkit-text-shadow: ") + shadowstr + format_color(colora) + ";"
        }
        return (styleValueOnly ? "" : "text-shadow: ") + shadowstr + format_color(rgba) + (styleValueOnly ? "" : ";")
    };
    var get_font_shadow_style = function(rgba, colora, blur) {
        if (is_earlier_ie()) {
            return ""
        }
        if (is_small_android() || is_iphone()) {
            return "-webkit-text-shadow: 0px 0px " + blur + "px " + format_color(colora) + ";"
        }
        return "text-shadow: 0px 0px " + blur + "px " + format_color(rgba) + ";"
    };
    var get_shadow_style_string = function(rgba, colora, blur, styleValueOnly) {
        if (is_earlier_ie()) {
            return ""
        }
        if (is_small_android() || is_iphone()) {
            return (styleValueOnly ? "" : "-webkit-box-shadow: ") + "0px 0px " + blur + "px " + format_color(colora) + ";"
        }
        return (styleValueOnly ? "" : "box-shadow: ") + "0px 0px " + blur + "px " + format_color(rgba) + (styleValueOnly ? "" : ";")
    };
    var get_button_bar_style = function(config, is4BackBtn) {
        var ret = "";
        if (config.buttonbarbackcolor) {
            ret += "background-color:" + format_color(config.buttonbarbackcolor) + ";"
        }
        if (is_earlier_ie()) {
            var sz = parseInt(config.buttonbariconrealsize);
            var ht = "auto;";
            if (sz) {
                ht = (2 * sz) + "px;"
            }
            ret += "height:" + ht
        } else {
            if (is4BackBtn) {
                ret += "padding:0;height:auto;border-radius:3px;"
            }
        }
        return ret
    };
    var get_button_bar_icon_style = function(config, forBackBtn) {
        var ret = "";
        if (config.buttonbariconrealsize) {
            var sz = parseInt(config.buttonbariconrealsize);
            ret += "font-size:" + config.buttonbariconrealsize + (sz ? "px;" : ";");
            if (!forBackBtn) {
                var bdtop = parseInt(sz / 2);
                if (is_ie8()) {
                    bdtop = parseInt(sz / 4)
                }
                if (sz) {
                    ret += "border-top:" + bdtop + "px solid transparent;height:" + parseInt(1.5 * sz) + "px;width:" + (2 * sz) + "px;"
                }
            } else {
                if (sz) {
                    ret += "height:" + (2 * sz - parseInt(sz / 2)) + "px;width:" + (2 * sz) + "px;"
                }
            }
        }
        if (config.buttonbariconcolor) {
            ret += "color:" + format_color(config.buttonbariconcolor) + ";"
        }
        if (config.buttonbarshadowcolor) {
            ret += get_font_shadow_style(config.buttonbarshadowcolor, config.buttonbarshadowcolora, config.buttonbarshadowblur)
        }
        return ret
    };
    var get_thumb_size = function(config) {
        var thumb_width, thumb_height;
        if (config.usethumbdots) {
            thumb_width = 20;
            thumb_height = 20
        } else {
            thumb_width = config.thumbwidth;
            thumb_height = config.thumbheight
        }
        return {
            width: thumb_width,
            height: thumb_height
        }
    };
    var btnOriginalSize = 28;
    var get_nav_btn_size = function(config) {
        var btnsz = btnOriginalSize;
        var icnsz = parseInt(config.navbuttoniconrealsize);
        if (icnsz) {
            btnsz = parseInt(1.4 * icnsz)
        }
        return btnsz
    };
    var navSizeThresHold4Ie = 25;
    var get_nav_btn_size_style = function(config, adjsize) {
        var btnsz = get_nav_btn_size(config);
        if (!btnsz) {
            return ""
        }
        var icnsz = parseInt(config.navbuttoniconrealsize);
        if (adjsize) {
            if (!icnsz) {
                icnsz = 18
            }
            var bdw = parseInt((btnsz - icnsz) / 2);
            btnsz -= bdw
        }
        if ($.browser.msie && $.browser.version < 10 && $.browser.version >= 9 && icnsz > navSizeThresHold4Ie) {
            var btnszh = btnsz - 1;
            return "height:" + btnszh + "px;width:" + btnsz + "px;"
        }
        return "height:" + btnsz + "px;width:" + btnsz + "px;"
    };
    var get_nav_icon_style = function(config) {
        var ret = "";
        if (config.navbuttoniconrealsize) {
            var icnsz = parseInt(config.navbuttoniconrealsize);
            var btnsz = get_nav_btn_size(config);
            var hw = "";
            if (btnsz) {
                var bdw = parseInt((btnsz - icnsz) / 2);
                var ie8Adj = 0;
                if (is_ie8()) {
                    ie8Adj = bdw
                }
                var ie9Adj = ($.browser.msie && $.browser.version < 10 && $.browser.version >= 9 && icnsz > navSizeThresHold4Ie) ? 1 : 0;
                hw += get_nav_btn_size_style(config, true) + "padding-left:" + parseInt(bdw / 2) + "px;padding-right:" + parseInt(bdw / 2) + "px;padding-top:" + (bdw + ie9Adj - ie8Adj) + "px;"
            }
            ret += "font-size:" + config.navbuttoniconrealsize + (icnsz ? "px;" : ";") + hw;
            ret += "border-radius:" + config.navbuttoniconrealsize + "px;"
        }
        if (config.navbuttoniconcolor) {
            ret += "color:" + format_color(config.navbuttoniconcolor) + ";"
        }
        if (config.navbuttonshadowcolor) {
            ret += get_font_shadow_style(config.navbuttonshadowcolor, config.navbuttonshadowcolora, config.navbuttonshadowblur)
        }
        if (config.navbuttonbackcolor) {
            ret += "background-color:" + format_color(config.navbuttonbackcolor) + ";"
        }
        return ret
    };
    var get_button_bar_button_size = function(config) {
        if (!config.buttonbariconrealsize) {
            return {
                buttonWidth: 38,
                padding: 8
            }
        }
        return {
            buttonWidth: 2 * config.buttonbariconrealsize,
            padding: 8
        }
    };
    var get_popup_position_string = function(width, height) {
        var result = "height=" + height + ",width=" + width;
        return result
    };
    var getMsPointerXy = function(e) {
        var len = e.touches ? e.touches.length : 0;
        var x = -1
          , y = -1;
        if (len > 0) {
            x = e.touches[0].screenX;
            y = e.touches[0].screenY
        }
        if (len > 1) {
            x = e.touches[1].screenX;
            y = e.touches[1].screenY
        }
        return {
            x: x,
            y: y
        }
    };
    var is_buttonbarposition_default = function(cfg) {
        var bbpos = cfg.buttonbarposition.toUpperCase();
        if (bbpos != "TOP" && bbpos != "NONE" && bbpos != "OVERLAY_IMAGE") {
            return true
        }
        return false
    };
    var is_captionposition_default = function(cfg) {
        var cappos = cfg.captionposition.toUpperCase();
        if (cappos != "BOTTOM" && cappos != "NONE" && cappos != "OVERLAY_IMAGE" && cappos != "BELOW_IMAGE" && cappos != "BELOW_THUMBS") {
            return true
        }
        return false
    };
    var is_touchable_desktop = function() {
        if (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints) {
            return true
        }
        return false
    };
    var is_touchable_device = function(config) {
        if (is_swipable_device() || is_touchable_desktop() || config.forcetouchmode) {
            return true
        }
        return false
    };
    var init_components = function(featureInstances, cplist) {
        cplist = cplist.replace(/ /g, "");
        var cps = cplist.split(",");
        for (var i = 0; i < cps.length; i++) {
            if (featureInstances[cps[i]] && featureInstances[cps[i]].init) {
                featureInstances[cps[i]].init()
            }
        }
        return false
    };
    var setup_components_event = function(featureInstances, cplist) {
        cplist = cplist.replace(/ /g, "");
        var cps = cplist.split(",");
        for (var i = 0; i < cps.length; i++) {
            if (featureInstances[cps[i]] && featureInstances[cps[i]].setEvent) {
                featureInstances[cps[i]].setEvent()
            }
        }
        return false
    };
    var set_components_position = function(featureInstances, cplist, sizing) {
        cplist = cplist.replace(/ /g, "");
        var cps = cplist.split(",");
        for (var i = 0; i < cps.length; i++) {
            if (featureInstances[cps[i]] && featureInstances[cps[i]].setPosition) {
                featureInstances[cps[i]].setPosition(sizing)
            }
        }
        return false
    };
    var reppaint_components = function(featureInstances, cplist, delay, cb) {
        cplist = cplist.replace(/ /g, "");
        var cps = cplist.split(",");
        for (var i = 0; i < cps.length; i++) {
            if (featureInstances[cps[i]] && featureInstances[cps[i]].repaint) {
                featureInstances[cps[i]].repaint(delay)
            }
        }
        if (delay && cb) {
            window.setTimeout(function() {
                cb()
            }, delay)
        }
        return false
    };
    var show_hide_controls = function(control, show, delay) {
        if (delay) {
            control.stop(false, true);
            if (show) {
                if (!control.is(":visible") || control.css("opacity") == 0 || is_swipable_device()) {
                    control.fadeIn(delay)
                }
            } else {
                control.fadeOut(delay)
            }
            return
        }
        if (show) {
            control.css("opacity", 1).show()
        } else {
            control.hide()
        }
    };
    var ios_version = function() {
        var m = navigator.userAgent.match(/OS \d?_/g);
        if (!m) {
            return 0
        }
        return parseFloat(m[0].replace(/OS /g, ""))
    };
    var is_mac_os = function() {
        if (navigator.userAgent.match(/Mac OS X/i)) {
            return true
        }
        return false
    };
    var is_retina_display = function() {
        if (!is_mac_os()) {
            return false
        }
        var dpr = 1;
        if (window.devicePixelRatio !== undefined) {
            dpr = window.devicePixelRatio
        }
        return dpr > 1.5
    };
    var is_safari = function() {
        return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
    };
    var get_css3_prefix = function() {
        var spt = false;
        var pfx = "";
        if (is_firefox3()) {} else {
            if (is_firefox()) {
                spt = true;
                if ($.browser.version < 26) {
                    pfx = "-moz-"
                }
            } else {
                if (is_chrome()) {
                    spt = true;
                    if ($.browser.version < 33) {
                        pfx = "-webkit-"
                    }
                } else {
                    if (is_opera()) {
                        spt = true;
                        if ($.browser.version < 12) {
                            pfx = "-o-"
                        }
                    } else {
                        if (($.browser.msie && $.browser.version >= 10) || document.msFullscreenEnabled) {
                            spt = true
                        }
                    }
                }
            }
        }
        return {
            support: spt,
            prefix: pfx
        }
    };
    var clean_up_transition = function(jqobj, css3Info) {
        if (!jqobj) {
            return
        }
        if (!css3Info) {
            css3Info = get_css3_prefix()
        }
        var css3 = {};
        if (css3Info.support) {
            css3[css3Info.prefix + "transition"] = "";
            jqobj.css(css3)
        }
    };
    var slidingTimer = {};
    var currentAnimationObjs;
    var slide = function(cnfg, jqobj, dist, speed, timerIdx, cb) {
        var css3Info = get_css3_prefix();
        var css3 = {};
        clean_up_transition(jqobj, css3Info);
        if (!css3Info.support) {
            imgs.animate({
                left: (dist < 0 ? "-=" : "+=") + (Math.abs(dist)),
                avoidTransforms: !cnfg.use_webkit_transform,
                useTranslate3d: cnfg.use_3d_transform
            }, speed, "easeInOutQuart")
        } else {
            css3[css3Info.prefix + "transition"] = "left " + parseInt(speed) + "ms ease-in";
            jqobj.css(css3);
            window.setTimeout(function() {
                jqobj.each(function() {
                    var crntobj = $(this);
                    crntobj.css({
                        left: parseInt(crntobj.css("left")) + dist
                    })
                })
            }, 100)
        }
        if (!timerIdx) {
            timerIdx = "default"
        }
        if (slidingTimer[timerIdx]) {
            window.clearTimeout(slidingTimer[timerIdx]);
            clean_up_transition(currentAnimationObjs, css3Info);
            currentAnimationObjs.stop(false, true)
        }
        currentAnimationObjs = jqobj;
        if (cb && speed) {
            slidingTimer[timerIdx] = window.setTimeout(function() {
                slidingTimer[timerIdx] = 0;
                cb()
            }, speed + 10)
        }
    };
    var fadeInContext = {};
    var fadeOutContext = {};
    var stop_fading_in = function(jqobj, idx, finishFunction) {
        var css3Info = get_css3_prefix();
        if (!jqobj) {
            jqobj = fadeInContext[idx].object
        }
        if (!jqobj) {
            return
        }
        clean_up_transition(jqobj, css3Info);
        if (fadeInContext[idx].timer || fadeInContext[idx].starttimer) {
            window.clearTimeout(fadeInContext[idx].starttimer);
            fadeInContext[idx].starttimer = 0;
            window.clearTimeout(fadeInContext[idx].timer);
            fadeInContext[idx].timer = 0;
            fadeInContext[idx].object.css({
                opacity: 1
            }).show();
            if (finishFunction && fadeInContext[idx].callback) {
                fadeInContext[idx].callback()
            }
        }
    };
    var stop_fading_out = function(jqobj, idx, finishFunction) {
        var css3Info = get_css3_prefix();
        if (!jqobj) {
            jqobj = fadeOutContext[idx].object
        }
        if (!jqobj) {
            return
        }
        clean_up_transition(jqobj, css3Info);
        if (fadeOutContext[idx].timer) {
            window.clearTimeout(fadeOutContext[idx].timer);
            fadeOutContext[idx].timer = 0;
            fadeOutContext[idx].object.hide();
            if (finishFunction && fadeOutContext[idx].callback) {
                fadeOutContext[idx].callback()
            }
        }
    };
    var stop_fading = function(idx, finishFunction) {
        if (!idx) {
            idx = "default"
        }
        if (fadeInContext[idx]) {
            stop_fading_in(null, idx, finishFunction)
        }
        if (fadeOutContext[idx]) {
            stop_fading_out(null, idx, finishFunction)
        }
    };
    var fade_in = function(cnfg, jqobj, speed, alreadyVisible, cb, idx, finishFunctionIfCanceled) {
        if (!idx) {
            idx = "default"
        }
        if (!fadeInContext[idx]) {
            fadeInContext[idx] = {}
        }
        stop_fading_in(jqobj, idx, finishFunctionIfCanceled);
        var css3Info = get_css3_prefix();
        var css3 = {};
        clean_up_transition(jqobj, css3Info);
        if (!speed) {
            jqobj.css({
                opacity: 1
            });
            jqobj.show()
        } else {
            if (!alreadyVisible && is_android()) {
                jqobj.fadeIn(speed)
            } else {
                if (alreadyVisible) {
                    jqobj.css({
                        opacity: 0
                    })
                } else {
                    jqobj.css({
                        opacity: 0,
                        display: "block"
                    })
                }
                fadeInContext[idx].object = jqobj;
                if (!css3Info.support) {
                    if (is_safari()) {
                        jqobj.fadeIn(speed)
                    } else {
                        jqobj.animate({
                            opacity: "+=1",
                            avoidTransforms: !cnfg.use_webkit_transform,
                            useTranslate3d: cnfg.use_3d_transform
                        }, speed, "easeInOutQuart", null)
                    }
                } else {
                    css3[css3Info.prefix + "transition"] = "opacity " + parseInt(speed) + "ms ease-in";
                    jqobj.css(css3);
                    fadeInContext[idx].starttimer = window.setTimeout(function() {
                        fadeInContext[idx].starttimer = 0;
                        jqobj.css({
                            opacity: 1
                        })
                    }, 50)
                }
            }
            if (cb) {
                fadeInContext[idx].callback = cb;
                fadeInContext[idx].timer = window.setTimeout(function() {
                    fadeInContext[idx].timer = 0;
                    cb()
                }, speed + 10)
            }
        }
    };
    var fade_out = function(cnfg, jqobj, speed, cb, idx, finishFunctionIfCanceled) {
        if (!jqobj.is(":visible")) {
            return
        }
        if (!idx) {
            idx = "default"
        }
        if (!fadeOutContext[idx]) {
            fadeOutContext[idx] = {}
        }
        stop_fading_out(jqobj, idx, finishFunctionIfCanceled);
        if (cb) {
            fadeOutContext[idx].callback = cb
        }
        fadeOutContext[idx].object = jqobj;
        var css3Info = get_css3_prefix();
        if (!speed) {
            jqobj.hide()
        } else {
            if (!css3Info.support) {
                if (is_safari() || ($.browser.msie && $.browser.version <= 9)) {
                    jqobj.fadeOut(speed)
                } else {
                    jqobj.animate({
                        opacity: "-=0",
                        avoidTransforms: !cnfg.use_webkit_transform,
                        useTranslate3d: cnfg.use_3d_transform
                    }, speed, "easeInOutQuart", null)
                }
                fadeOutContext[idx].timer = fadeOutContext[idx].timer = window.setTimeout(function() {
                    jqobj.hide();
                    fadeOutContext[idx].timer = 0;
                    if (cb) {
                        cb()
                    }
                }, speed)
            } else {
                var css3 = {};
                css3[css3Info.prefix + "transition"] = "opacity " + parseInt(speed) + "ms ease-in";
                jqobj.css(css3);
                window.setTimeout(function() {
                    jqobj.css({
                        opacity: 0
                    });
                    fadeOutContext[idx].timer = window.setTimeout(function() {
                        fadeOutContext[idx].timer = 0;
                        jqobj.hide();
                        if (cb) {
                            cb()
                        }
                    }, speed + 10)
                }, 20)
            }
        }
    };
    var get_transition_style = function(speed) {
        if (speed <= 0 || !speed) {
            return ""
        }
        var css3Info = get_css3_prefix();
        if (!css3Info.support) {
            return ""
        }
        return css3Info.prefix + "transition:opacity " + +parseInt(speed) + "ms ease-in;"
    };
    return {
        ship: is_pro_version === u_skey,
        concate_path: concatenate_path,
        is_page_scrolling: is_it_scrolling,
        is_in_iframe: in_iframe,
        add_viewport_meta_tag_4_device: add_viewport_meta,
        set_viewport_meta: set_viewport_meta,
        is_iphone: is_iphone,
        is_iphone_chrome: is_iphone_chrome,
        is_ipad: is_ipad,
        is_android: is_android,
        is_small_android: is_small_android,
        get_android_ver: get_android_ver,
        is_chrome: is_chrome,
        is_opera: is_opera,
        get_current_path: get_current_path,
        get_query_string_value: get_qs_value,
        save_object_2_cookie: save_object_2_cookie,
        get_object_from_cookie: get_object_from_cookie,
        get_device_dpi: get_device_dpi,
        get_query_path: get_query_path,
        is_swipable_device: is_swipable_device,
        is_large_screen_mode: is_large_screen_mode,
        is_earlier_ie: is_earlier_ie,
        set_viewport_value: set_viewport_value,
        format_color: format_color,
        need_viewport_meta: need_viewport_meta,
        host_has_viewport_meta: host_has_viewport_meta,
        get_viewport_meta_content: get_viewport_meta_content,
        set_viewport_meta_content: set_viewport_meta_content,
        is_firefox: is_firefox,
        is_firefox3: is_firefox3,
        get_js_folder_url: get_js_folder_url,
        need_new_window: need_new_window,
        convert_to_absolute_path: convert_to_absolute_path,
        is_adobe_air: is_adobe_air,
        is_new_expanded_window: is_new_expanded_window,
        show_real_fullscreen: show_real_fullscreen,
        is_in_real_fullscreen: is_in_real_fullscreen,
        exit_fullscreen: exit_fullscreen,
        exit_support_real_fullscreen: exit_support_real_fullscreen,
        add_fullscreen_listener: add_fullscreen_listener,
        is_ie8: is_ie8,
        is_mobile_ie: is_mobile_ie,
        support_real_fullscreen: support_real_fullscreen,
        is_side_layout: is_side_layout,
        add_font_icon_4_ie8: add_font_icon_4_ie8,
        get_button_bar_icon_style: get_button_bar_icon_style,
        get_button_bar_style: get_button_bar_style,
        get_nav_icon_style: get_nav_icon_style,
        get_nav_btn_size: get_nav_btn_size,
        get_nav_btn_size_style: get_nav_btn_size_style,
        get_shadow_style_string: get_shadow_style_string,
        add_js_tag: add_js_tag,
        get_button_bar_button_size: get_button_bar_button_size,
        get_thumb_size: get_thumb_size,
        get_popup_position_string: get_popup_position_string,
        get_text_shadow_style: get_text_shadow_style,
        getMsPointerXy: getMsPointerXy,
        is_touchable_desktop: is_touchable_desktop,
        is_buttonbarposition_default: is_buttonbarposition_default,
        is_captionposition_default: is_captionposition_default,
        is_touchable_device: is_touchable_device,
        setup_components_event: setup_components_event,
        reppaint_components: reppaint_components,
        init_components: init_components,
        show_hide_controls: show_hide_controls,
        set_components_position: set_components_position,
        is_retina_display: is_retina_display,
        ios_version: ios_version,
        is_ie_after_11: is_ie_after_11,
        is_ios_mobile_chrome: is_ios_mobile_chrome,
        is_windows: is_windows,
        fade_in: fade_in,
        fade_out: fade_out,
        is_mac_os: is_mac_os,
        get_transition_style: get_transition_style,
        clean_up_transition: clean_up_transition,
        slide: slide,
        stop_fading: stop_fading
    }
};
var juicebox_config_manager = function(c, t) {
    var v = c;
    var a = t;
    var f = false;
    var s = "048d7e421a02974b54391bc3463ebd52";
    var A = false;
    var p = "";
    var b = "";
    var y = {
        containerid: "juicebox-container",
        debugmode: false,
        forcetouchmode: false,
        usefullscreenexpand: false,
        autofullscreenexpand: false,
        expandinnewpage: "AUTO",
        gallerywidth: "100%",
        galleryheight: "100%",
        backgroundcolor: "",
        backgroundurl: "",
        backgroundscale: "STRETCH",
        expandedbackgroundcolor: "",
        galleryfontface: "",
        backgroundopacity: "1",
        textcolor: "",
        textshadowcolor: "",
        textshadowcolora: "",
        topbackcolor: "",
        topbackopacity: "0",
        captionbackcolor: "",
        captionbackopacity: "1",
        imageframecolor: "",
        imageframeopacity: "1",
        thumbframecolor: "rgba(255, 255, 255, .5)",
        thumbframeopacity: "",
        thumbframewidth: 0,
        thumbhoverframewidth: 2,
        thumbselectedframewidth: 10,
        thumbcornerradius: 0,
        thumbshadowcolor: "rgba(0, 0, 0, .4)",
        thumbshadowcolora: "",
        thumbshadowblur: 5,
        imageshadowcolor: "rgba(0, 0, 0, .4)",
        imageshadowcolora: "",
        imageshadowblur: 10,
        stagepadding: 0,
        imagepadding: 0,
        framewidth: 0,
        enablekeyboardcontrols: true,
        firstimageindex: -1,
        randomizeimages: false,
        showpreloader: true,
        screenmode: "AUTO",
        languagelistall: 'Previous|Next|Start AutoPlay|Stop AutoPlay|Play Audio|Pause Audio|Show Thumbnails|Expand Gallery|Close Gallery|Open Image in New Window|Download Image|About|AutoPlay ON|AutoPlay OFF|Show Thumbnails|Hide Thumbnails|Show Information|Next Image|Previous Image|Hide Information|Juicebox can not display locally in this browser. <a href="http://www.juicebox.net/support/faq/#local">More Info.</a>|Juicebox Error: Config XML file not found.|Juicebox Error: Cannot find div with id: "|"|Juicebox Error: Theme CSS file not found|Buy this Image|Share on Facebook|Share on Twitter|Share on Google+|Share on Pinterest|To use Fotomoto please set the Fotomoto Store Id|Share on Tumblr|Go Back|of|Images',
        languagelist: "",
        splashbuttontext: "View Gallery",
        imagelocking: false,
        enablelooping: false,
        changeimageonhover: false,
        maximagewidth: 1024,
        maximageheight: 768,
        imageclickmode: "NAVIGATE",
        imagescalemode: "SCALE_DOWN",
        imagepreloading: "PAGE",
        imagetransitiontime: 0.5,
        fadetime: 0.4,
        imagetransitiontype: "SLIDE",
        imagevalign: "CENTER",
        imagehalign: "CENTER",
        showimageoverlay: "AUTO",
        showimagenav: true,
        imagenavposition: "STAGE",
        showbigplaybutton: false,
        thumbsposition: "BOTTOM",
        thumbnavposition: "CENTER",
        thumbwidth: 85,
        thumbheight: 85,
        thumbpadding: 10,
        thumbhseparation: 10,
        thumbvseparation: 10,
        thumbsvalign: "CENTER",
        thumbshalign: "CENTER",
        thumbpreloading: "PAGE",
        changecaptiononhover: false,
        usethumbdots: false,
        thumbdotcolor: "rgba(0, 0, 0, .4)",
        thumbdothovercolor: "rgba(255,255,255,1)",
        showpagingtext: false,
        showsmallpagingtext: true,
        showsmallthumbnav: false,
        showsmallthumbsbutton: true,
        smallthumbsshowtitles: false,
        smallthumbslayoutstyle: "GRID",
        smallthumbslidetime: 0.5,
        topareaheight: 50,
        buttonbarposition: "OVERLAY",
        buttonbarhalign: "RIGHT",
        showopenbutton: true,
        showexpandbutton: true,
        showinfobutton: false,
        showdownloadbutton: false,
        showsharebutton: true,
        shownavbuttons: false,
        showautoplaybutton: false,
        showaudiobutton: false,
        showthumbsbutton: true,
        showthumbsonload: true,
        showsmallthumbsonload: true,
        buttonbariconsize: 0,
        buttonbariconrealsize: 0,
        buttonbariconcolor: "",
        buttonbariconopacity: "",
        buttonbariconhovercolor: "",
        buttonbariconhoveropacity: "",
        buttonbarshadowcolor: "",
        buttonbarshadowcolora: "",
        buttonbarshadowblur: 5,
        buttonbarbackcolor: "",
        buttonbarbackopacity: "1",
        navbuttoniconsize: 0,
        navbuttoniconrealsize: 0,
        navbuttoniconcolor: "rgba(255, 255, 255, 1)",
        navbuttoniconopacity: "",
        navbuttoniconhovercolor: "",
        navbuttoniconhoveropacity: "",
        navbuttonshadowcolor: "",
        navbuttonshadowcolora: "",
        navbuttonshadowblur: 5,
        navbuttonbackcolor: "rgba(0, 0, 0, .5)",
        navbuttonbackcoloropacity: "",
        imagenavpadding: 20,
        imagecornerradius: 0,
        showoverlayonload: true,
        gallerytitle: "",
        gallerytitleposition: "OVERLAY",
        gallerytitlehalign: "LEFT",
        captionposition: "OVERLAY",
        captionhalign: "LEFT",
        maxcaptionheight: 120,
        showimagenumber: true,
        enableautoplay: false,
        autoplayonload: false,
        displaytime: 5,
        showautoplaystatus: true,
        gonextonautoplay: false,
        autoplaythumbs: true,
        audiourlmp3: "",
        audiourlogg: "",
        loopaudio: true,
        playaudioonload: false,
        audiovolume: 0.8,
        showsmallbackbutton: false,
        backbuttonuseicon: false,
        backbuttontext: "< Back",
        backbuttonurl: "",
        backbuttonposition: "NONE",
        backbuttonhalign: "LEFT",
        usefixedlayout: false,
        showsplashpage: "AUTO",
        splashtitle: "",
        splashimageurl: "",
        splashshowimagecount: true,
        gallerydescription: "",
        enableseo: false,
        seoadditionaltext: "",
        enabledirectlinks: false,
        fotomotostoreid: "",
        sharefacebook: false,
        sharetwitter: false,
        sharegplus: false,
        sharepinterest: false,
        sharetumblr: false,
        shareemail: false,
        configurl: "/config_xml" + location.search,
        themeurl: a.get_js_folder_url() + "theme-classic.css",
        baseurl: "",
        useflickr: false,
        flickrusername: "",
        flickrtags: "",
        flickruserid: "",
        flickrsetid: "",
        flickrgroupid: "",
        flickrtagmode: "ALL",
        flickrsort: "DATE-POSTED-DESC",
        flickrimagesize: "LARGE",
        flickrimagecount: 50,
        flickrextraparams: "",
        flickrshowtitle: true,
        flickrshowdescription: false,
        flickrshowpagelink: false,
        flickrpagelinktext: "View on Flickr",
        theme: "classic",
        showcaption: true,
        slidecaption: false,
        maxthumbcolumns: 10,
        maxthumbrows: 1,
        thumb_load_placeholder: "<div class='jb-status-thumb-loading'><div>",
        main_load_placeholder: "<div class='jb-status-loading'></div>",
        pages_header: "",
        sync_caption_dimensions: true,
        minimagegap: 60,
        use_webkit_transform: true,
        use_3d_transform: !(a.is_in_iframe() && a.is_chrome()),
        onload: function() {}
    };
    var H = ",onload,";
    var r = ",containerid,gallerytitle,gallerywidth,galleryheight,backgroundcolor,overlaycolor,framecolor,showopenbutton,showexpandbutton,useflickr,flickrusername,flickrtags,configurl,themeurl,baseurl,debugmode,showthumbsbutton,maximagewidth,maximageheight,languagelist,usefullscreenexpand,textcolor,thumbframecolor,usethumbdots,";
    var n = {
        usefullscreenexpand: {
            appliedValues: [true],
            "default": false
        },
        showthumbsonload: {
            appliedValues: [false],
            "default": true
        },
        showthumbsbutton: {
            appliedValues: [false],
            "default": true
        },
        usethumbdots: {
            appliedValues: [true],
            "default": false
        },
        captionposition: {
            appliedValues: ["BELOW_IMAGE", "BOTTOM", "OVERLAY_IMAGE", "BELOW_THUMBS"],
            "default": "OVERLAY"
        },
        captionhalign: {
            appliedValues: ["CENTER", "RIGHT"],
            "default": "LEFT"
        },
        buttonbarposition: {
            appliedValues: ["TOP"],
            "default": "OVERLAY"
        },
        backbuttonposition: {
            appliedValues: ["TOP", "OVERLAY"],
            "default": "NONE"
        },
        backbuttonhalign: {
            appliedValues: ["RIGHT", "CENTER"],
            "default": "LEFT"
        },
        stagepadding: {
            appliedValues: null,
            "default": 0
        },
        imagepadding: {
            appliedValues: null,
            "default": 0
        },
        framewidth: {
            appliedValues: null,
            "default": 0
        },
        topbackcolor: {
            appliedValues: null,
            "default": ""
        },
        thumbsposition: {
            appliedValues: ["TOP", "LEFT", "RIGHT"],
            "default": "BOTTOM"
        },
        thumbnavposition: {
            appliedValues: ["BOTTOM"],
            "default": "CENTER"
        },
        imageframecolor: {
            appliedValues: null,
            "default": ""
        },
        imagetransitiontype: {
            appliedValues: null,
            "default": "SLIDE"
        },
        changeimageonhover: {
            appliedValues: [true],
            "default": false
        },
        gallerytitleposition: {
            appliedValues: ["TOP", "ABOVE_THUMBS"],
            "default": "OVERLAY"
        },
        gallerytitlehalign: {
            appliedValues: ["RIGHT", "CENTER"],
            "default": "LEFT"
        },
        buttonbarhalign: {
            appliedValues: ["CENTER", "LEFT"],
            "default": "RIGHT"
        },
        thumbshalign: {
            appliedValues: ["RIGHT", "LEFT"],
            "default": "CENTER"
        },
        thumbsvalign: {
            appliedValues: ["TOP", "BOTTOM"],
            "default": "CENTER"
        },
        imagehalign: {
            appliedValues: ["RIGHT", "LEFT"],
            "default": "CENTER"
        },
        imagevalign: {
            appliedValues: ["TOP", "BOTTOM"],
            "default": "CENTER"
        }
    };
    var K = function(L) {
        if (!L) {
            return "100%"
        }
        if (typeof (L) === "number" || L.indexOf("%") <= 0) {
            return parseInt(L) + "px"
        }
        return L
    };
    var E = function(N, M) {
        if (!N) {
            return M
        }
        var L = N.split("#")[0].split("?")[0].split("/");
        if (L.length <= 0) {
            return M
        }
        if (L.length <= 1) {
            return ""
        }
        if (L[L.length - 1].toLowerCase().indexOf("theme.css") < 0) {
            return M
        }
        return L[L.length - 2]
    };
    var l = function(M, L, O, N) {
        if (N) {
            return N
        }
        if (!M || M.length <= L) {
            return O
        }
        return M[L]
    };
    var u = function(N, M, L, P, O) {
        if (!P && y.languagelistall[N]) {
            P = y.languagelistall[N]
        }
        y.languagelistall[N] = l(M, L, P, O)
    };
    var e = function(N, L) {
        if (!L) {
            return true
        }
        for (var M = 0; M < L.length; M++) {
            if (typeof (N) === "string") {
                if (L[M].toUpperCase() === N.toUpperCase()) {
                    return true
                }
            } else {
                if (L[M] === N) {
                    return true
                }
            }
        }
        return false
    };
    var C = function() {
        if (y.showexpandbutton == false) {
            y.originalUsefullscreenexpand = y.usefullscreenexpand;
            y.usefullscreenexpand = false
        }
        if (y.audiovolume < 0) {
            y.audiovolume = 0
        }
        if (y.audiovolume > 1) {
            y.audiovolume = 1
        }
        if (!y.showpreloader) {
            y.main_load_placeholder = y.main_load_placeholder.replace("jb-status-loading", "jb-status-no-loading")
        }
        if (y.backbuttonuseicon) {
            y.backbuttontext = " "
        }
        y.galleryfontface = decodeURI(y.galleryfontface).replace(/\+/g, " ").replace(/\"/g, "'");
        var N = y.thumbsposition.toUpperCase();
        if (N === "LEFT" || N === "RIGHT") {
            y.usethumbdots = false
        }
        var M = a.is_large_screen_mode(y);
        if (M) {
            y.showsmallbackbutton = false;
            return
        }
        for (var L in y) {
            if (!n[L]) {
                continue
            }
            if (!e(y[L], n[L].appliedValues)) {
                continue
            }
            y[L] = n[L]["default"]
        }
        if (a.is_swipable_device()) {
            if (y.forcetouchmode) {
                y.forcetouchmodereversed = true
            }
            y.forcetouchmode = false
        }
        y.thumbselectedframewidth = y.thumbframewidth
    };
    var g = function() {
        if (typeof (y.languagelistall) != "string" && !y.languagelist) {
            return
        }
        var P = y.languagelist.split("|");
        y.languagelistbak = y.languagelist;
        y.languagelist = "";
        var L = P.length;
        var M = 7;
        var O = 25;
        if (m()) {
            if (L - O > 0) {
                P.splice(O, L - O)
            }
        } else {
            if (L - M > 0) {
                P.splice(O, L - M)
            }
        }
        var N = null;
        if (typeof (y.languagelistall) === "string") {
            N = y.languagelistall.split("|");
            y.languagelistall = {}
        }
        u("p", N, 0, "");
        u("n", N, 1, "");
        u("strta", N, 2, "", P[12]);
        u("stpa", N, 3, "", P[13]);
        u("plya", N, 4, "", P[8]);
        u("psa", N, 5, "", P[9]);
        u("st", N, 6, "", P[0]);
        u("gf", N, 7, "", P[2]);
        u("ef", N, 8, "", P[3]);
        u("oiinw", N, 9, "", P[4]);
        u("di", N, 10, "");
        u("abt", N, 11, "");
        u("aon", N, 12, "", P[14]);
        u("aoff", N, 13, "", P[15]);
        u("stlsm", N, 14, "", P[0]);
        u("htlsm", N, 15, "", P[1]);
        u("sinfo", N, 16, "", P[10]);
        u("gonxt", N, 17, "", P[6]);
        u("goprv", N, 18, "", P[7]);
        u("hdinfo", N, 19, "", P[11]);
        u("lcchm", N, 20, "");
        u("ae", N, 21, "");
        u("noid01", N, 22, "");
        u("noid02", N, 23, "");
        u("nothm", N, 24, "");
        u("fotomoto", N, 25, "", P[17]);
        u("facebook", N, 26, "", P[18]);
        u("twitter", N, 27, "", P[19]);
        u("gplus", N, 28, "", P[20]);
        u("printerest", N, 29, "", P[21]);
        u("fotomotomissingid", N, 30, "");
        u("tumblr", N, 31, "", P[22]);
        u("gobk", N, 32, "", P[16]);
        u("pgnum", N, 33, "", P[23]);
        u("splimgs", N, 34, "", P[5])
    };
    var I = function() {
        y.galleryheight = K(y.galleryheight);
        y.gallerywidth = K(y.gallerywidth);
        y.theme = E(y.themeurl, y.theme);
        if (y.thumbwidth < 20 || y.thumbwidth > 600) {
            y.thumbwidth = 96
        }
        if (y.thumbheight < 20 || y.thumbheight > 600) {
            y.thumbheight = 96
        }
        g();
        var M;
        if (y) {
            if (y.backgroundcolor) {
                M = G(y.backgroundcolor);
                y.backgroundcolor = M.color;
                if (M.fullFormate) {
                    y.backgroundopacity = M.opacity
                }
            }
            if (y.expandedbackgroundcolor) {
                M = G(y.expandedbackgroundcolor);
                y.expandedbackgroundcolor = M.color;
                if (M.fullFormate) {
                    y.backgroundopacity = M.opacity
                }
            }
            if (y.textcolor) {
                M = G(y.textcolor);
                y.textcolor = M.color
            }
            if (y.textshadowcolor) {
                if (y.textshadowcolor.replace(/ /g, "").toLowerCase() === "rgba(0,0,0,0)") {
                    y.textshadowcolora = "transparent";
                    b += "textshadowcolora,"
                } else {
                    M = G(y.textshadowcolor);
                    y.textshadowcolora = M.color
                }
            }
            if (y.topbackcolor) {
                M = G(y.topbackcolor);
                y.topbackcolor = M.color;
                if (M.fullFormate) {
                    y.topbackopacity = M.opacity
                }
            }
            if (y.captionbackcolor) {
                M = G(y.captionbackcolor);
                y.captionbackcolor = M.color;
                if (M.fullFormate) {
                    y.captionbackopacity = M.opacity
                }
            }
            if (y.buttonbarbackcolor) {
                M = G(y.buttonbarbackcolor);
                y.buttonbarbackcolor = M.color;
                if (M.fullFormate) {
                    y.buttonbarbackopacity = M.opacity
                }
            }
            if (y.imageframecolor) {
                M = G(y.imageframecolor);
                y.imageframecolor = M.color;
                if (M.fullFormate) {
                    y.imageframeopacity = M.opacity
                }
            }
            if (y.thumbframecolor) {
                M = G(y.thumbframecolor);
                y.thumbframecolor = M.color;
                if (M.fullFormate) {
                    y.thumbframeopacity = M.opacity
                }
            }
            if (y.thumbshadowcolor) {
                M = G(y.thumbshadowcolor);
                y.thumbshadowcolora = M.color
            }
            if (y.imageshadowcolor) {
                M = G(y.imageshadowcolor);
                y.imageshadowcolora = M.color
            }
            if (y.buttonbariconcolor) {
                M = G(y.buttonbariconcolor);
                y.buttonbariconcolor = M.color;
                if (M.fullFormate) {
                    y.buttonbariconopacity = M.opacity
                }
            }
            if (y.buttonbariconhovercolor) {
                M = G(y.buttonbariconhovercolor);
                y.buttonbariconhovercolor = M.color;
                if (M.fullFormate) {
                    y.buttonbariconhoveropacity = M.opacity
                }
            }
            if (y.buttonbarshadowcolor) {
                M = G(y.buttonbarshadowcolor);
                y.buttonbarshadowcolora = M.color
            }
            if (y.navbuttoniconcolor) {
                M = G(y.navbuttoniconcolor);
                y.navbuttoniconcolor = M.color;
                if (M.fullFormate) {
                    y.navbuttoniconopacity = M.opacity
                }
            }
            if (y.navbuttoniconhovercolor) {
                M = G(y.navbuttoniconhovercolor);
                y.navbuttoniconhovercolor = M.color;
                if (M.fullFormate) {
                    y.navbuttoniconhoveropacity = M.opacity
                }
            }
            if (y.navbuttonbackcolor) {
                M = G(y.navbuttonbackcolor);
                y.navbuttonbackcolor = M.color;
                if (M.fullFormate) {
                    y.navbuttonbackcoloropacity = M.opacity
                }
            }
            if (y.navbuttonshadowcolor) {
                M = G(y.navbuttonshadowcolor);
                y.navbuttonshadowcolora = M.color
            }
            if (y.thumbdotcolor) {
                M = G(y.thumbdotcolor);
                y.thumbdotcolor = M.color
            }
            if (y.thumbdothovercolor) {
                M = G(y.thumbdothovercolor);
                y.thumbdothovercolor = M.color
            }
            if (y.buttonbariconsize === 0) {
                y.buttonbariconsize = 20
            }
            y.buttonbariconrealsize = y.buttonbariconsize;
            if (y.navbuttoniconsize === 0) {
                y.navbuttoniconsize = 20
            }
            y.navbuttoniconrealsize = y.navbuttoniconsize;
            var L = a.is_large_screen_mode(y);
            if (b.indexOf("maxthumbrows,") < 0) {
                if (L) {
                    if (b.indexOf("screenmode,") > -1) {
                        y.maxthumbrows = 1
                    }
                }
            }
            if (L) {
                y.showsmallthumbsbutton = true;
                if (y.usethumbdots && y.maxthumbcolumns <= 1 && y.thumbnavposition.toUpperCase() === "BOTTOM") {
                    y.maxthumbcolumns = 2
                }
                y.thumbhseparation = y.thumbpadding / 2;
                y.thumbvseparation = y.thumbpadding / 2
            } else {
                y.showthumbsbutton = true;
                y.maxthumbcolumns = 1000;
                y.maxthumbrows = 1000;
                y.showpagingtext = y.showsmallpagingtext
            }
            if (a.is_side_layout(y)) {
                if (y.thumbshalign.toUpperCase() != "CENTER") {
                    y.thumbshalign = "CENTER"
                }
            } else {
                if (y.thumbsvalign.toUpperCase() != "CENTER") {
                    y.thumbsvalign = "CENTER"
                }
            }
            if (a.is_in_iframe()) {
                y.fotomotostoreid = ""
            }
            if (a.is_swipable_device()) {
                y.buttonbariconhovercolor = "";
                y.navbuttoniconhovercolor = ""
            }
            if (y.expandinnewpage === true || (y.expandinnewpage + "").toUpperCase() === "TRUE") {
                y.usefullscreenexpand = false
            }
        }
    };
    var D = function(M) {
        var L = M.toString(16);
        if (L.length >= 2) {
            return L
        }
        if (L.length === 1) {
            return "0" + L
        }
        if (L.length === 0) {
            return "00"
        }
        return L
    };
    var h = function(L) {
        return L && parseInt(L, 16) > 0
    };
    var G = function(S) {
        if (!S) {
            return {
                color: "",
                opacity: z(1)
            }
        }
        var Q = S.toLowerCase().replace(/ /g, "");
        if (Q.indexOf("rgb") !== 0) {
            if (h(S)) {
                S = "#" + S
            }
            return {
                color: S,
                opacity: z(1),
                fullFormate: false
            }
        }
        Q = Q.replace("rgba(", "").replace("rgb(", "").replace(")", "");
        var P = Q.split(",");
        if (P.length < 3 || P.length > 4) {
            return {
                color: S,
                opacity: z(1),
                fullFormate: false
            }
        }
        var M = S;
        if (v.browser.msie && v.browser.version < 9) {
            var O = parseInt(P[0]);
            var N = parseInt(P[1]);
            var L = parseInt(P[2]);
            M = "#" + D(O) + D(N) + D(L)
        }
        if (P.length === 3) {
            return {
                color: M,
                opacity: z(1),
                fullFormate: true
            }
        }
        var R = parseFloat(P[3]);
        if (R < 0 || R > 1) {
            return {
                color: M,
                opacity: z(1),
                fullFormate: true
            }
        }
        return {
            color: M,
            opacity: z(R),
            fullFormate: true
        }
    };
    var z = function(L) {
        if (!(v.browser.msie && v.browser.version < 9)) {
            return L
        }
        if (("" + L).indexOf("filter") === 0) {
            return L
        }
        var M = v.browser.version < 8 ? 100 : parseInt(100 * L);
        return "filter:alpha(opacity=" + M + ")"
    };
    var m = function() {
        return f || q === "048d7e421a02974b54391bc3463ebd52"
    };
    var j = function(O) {
        if (!O) {
            return
        }
        var N, R;
        var Q = m();
        for (var L in O) {
            N = L.toLowerCase();
            if (typeof y[N] == "undefined") {
                if (",persistor_param,fullscreen_displaying_mode,parent_gallery,initial_body_css_inline_style,scroll_position,".indexOf("," + N + ",") >= 0) {
                    y[N] = O[N]
                }
                continue
            }
            R = "," + N + ",";
            if (q === "048d7e421a20974d54321bc3563ebd52") {
                continue
            }
            if (!Q && r.indexOf(R) < 0) {
                continue
            }
            if (H.indexOf(R) >= 0) {
                continue
            }
            b += N + ",";
            var M = O[L];
            var P = (typeof y[N]);
            if (P === "string" && (typeof M) != "string") {
                M += ""
            }
            y[N] = x(M, P)
        }
        I()
    };
    var q = "048d7e421a02974b54391bc3463ebd52";
    var x = function(M, L) {
        switch (L) {
        case "boolean":
            if (typeof M == "boolean") {
                return M
            }
            return (M.toLowerCase() == "true" || M.toLowerCase() == "on" || M == "1") ? true : false;
        case "number":
            return parseFloat(M);
        default:
            return M
        }
    };
    var B = function() {
        var L = "";
        var P = ",gallerywidth,galleryheight,containerid,maxthumbrows,maxthumbcolumns,";
        var O, N;
        for (var M in y) {
            O = "," + M + ",";
            if (H.indexOf(O) >= 0) {
                continue
            }
            if (P.indexOf(O) >= 0) {
                continue
            }
            if (q === "048d7e421a20975d64321bc3563ebd52") {
                continue
            }
            N = (typeof y[M] == "string") ? y[M].replace("#", "_p-s_") : y[M];
            L += M + "=" + encodeURI(N) + "&"
        }
        return L
    };
    var i = function() {
        var P = window.location.href.split("?");
        if (P.length <= 1) {
            return null
        }
        var L = P[1].split("#");
        if (L.length <= 0) {
            return null
        }
        var T = L[0].split("&");
        var Q = {};
        var S, M, U, O;
        var R;
        for (var N = 0; N < T.length; N++) {
            S = T[N].split("=");
            if (S.length < 2) {
                continue
            }
            M = S[0].toLowerCase();
            O = S[1] ? S[1].replace("_p-s_", "#") : "";
            U = decodeURI(O);
            R = typeof y[M];
            if (R == "undefined") {
                continue
            }
            Q[M] = x(U, R)
        }
        return Q
    };
    var F = function(N) {
        if (!N) {
            return null
        }
        var M = {};
        var Q, O;
        var L = (v.browser.msie && N.childNodes.length > 1) ? N.childNodes[1] : N.childNodes[0];
        if (!L || !L.attributes) {
            return null
        }
        var P = v(L.attributes);
        P.each(function(R, S) {
            Q = S.nodeName.toLowerCase();
            O = typeof y[Q];
            if (O == "undefined") {
                return
            }
            M[Q] = x(S.value, O)
        });
        return M
    };
    var d = function(O) {
        if (!O) {
            O = p
        }
        var R = function(V, W, U) {
            if (U < 0) {
                U = "Thu, 01 Jan 1970 00:00:00 GMT"
            } else {
                U = ""
            }
            document.cookie = V + "=" + window.escape(W) + ((U === "") ? "" : ";expires=" + U) + ";path=/"
        };
        var P = function(V) {
            if (document.cookie.length > 0) {
                var W = document.cookie.indexOf(V + "=");
                if (W !== -1) {
                    W = W + V.length + 1;
                    var U = document.cookie.indexOf(";", W);
                    if (U === -1) {
                        U = document.cookie.length
                    }
                    return window.unescape(document.cookie.substring(W, U))
                }
            }
            return ""
        };
        var N = function() {
            return O + "svcrntimgi_lf"
        };
        var L = function() {
            return O + "-sv-config-"
        };
        var S = function() {
            return O + "-changed-options-"
        };
        var M = function(Z) {
            R(N(), "1", null);
            var Y = b.split(",");
            var X = Z.skip ? "," + Z.skip + "," : "";
            var W;
            for (W = 0; W < Y.length; W++) {
                if (!Y[W]) {
                    continue
                }
                if (X.indexOf("," + Y[W] + ",") >= 0) {
                    continue
                }
                R(L() + Y[W], encodeURI(y[Y[W]]))
            }
            var aa = "," + b;
            var U = Z.skip.split(",");
            for (W = 0; W < U.length; W++) {
                aa = aa.replace("," + U[W] + ",", ",")
            }
            for (var V in Z.config) {
                if (!V) {
                    continue
                }
                if (aa.indexOf("," + V + ",") < 0) {
                    aa += V + ","
                }
                y[V] = Z.config[V];
                R(L() + V, encodeURI(y[V]))
            }
            R(S(), aa)
        };
        var Q = function() {
            if (!P(N())) {
                return
            }
            var X = P(S());
            if (!X) {
                return
            }
            var U = X.split(",");
            for (var V = 0; V < U.length; V++) {
                if (!U[V]) {
                    continue
                }
                var W = P(L() + U[V]);
                if (!W) {
                    continue
                }
                y[U[V]] = x(decodeURI(W), typeof (y[U[V]]))
            }
            g()
        };
        var T = function() {
            R(N(), "", -10)
        };
        return {
            saveConfig: M,
            loadSavedConfig: Q,
            clearCookie: T
        }
    };
    var J = function(M, L, O) {
        if (window.location.href.indexOf("jbdbgmd=true") > 0 && A) {
            f = true
        }
        j(F(L));
        j(M);
        if (y.debugmode || f) {
            j(i())
        }
        p = O;
        var N = d(p);
        if (!a.is_new_expanded_window()) {
            N.clearCookie()
        } else {
            N.loadSavedConfig()
        }
    };
    var o = function(M, L) {
        j(F(L));
        j(M);
        if (y.debugmode || f) {
            j(i())
        }
        C()
    };
    var k = function() {
        return y
    };
    var w = function(L) {
        j(L);
        if (y.showexpandbutton == false) {
            y.usefullscreenexpand = false
        } else {
            if (y.originalUsefullscreenexpand) {
                y.usefullscreenexpand = true
            }
        }
    };
    return {
        isp: s == q,
        init: J,
        sync_option_with_dependency: w,
        sync_options: o,
        get_config: k,
        get_query_string: B,
        get_cookie_manager: d
    }
};
var juicebox_gallery_dialog = function(g) {
    var i, b;
    var a = "jb-glry-dlg";
    var j = function(n) {
        i = n.jquery;
        b = i("#" + a);
        if (b.length <= 0) {
            i("body").append(l());
            b = i("#" + a)
        }
    };
    var l = function() {
        return "<div id='" + a + "' style='display:none;position:absolute;width:100%;height:100%;left:0;top:0;'></div>"
    };
    var c = function() {
        b.hide()
    };
    var m = function() {
        c();
        b.html("");
        h(true);
        e(true)
    };
    var h = function(n) {
        if (n) {
            b.siblings(".jb-status-hiding-4-dlg").show().removeClass("jb-status-hiding-4-dlg")
        } else {
            b.siblings(":visible").addClass("jb-status-hiding-4-dlg").hide()
        }
    };
    var e = function(n) {
        if (n) {
            i(".jb-status-hiding-4-dlg").show().removeClass("jb-status-hiding-4-dlg")
        } else {
            i(".juicebox-gallery:visible").addClass("jb-status-hiding-4-dlg").hide()
        }
    };
    var k = function(o, n) {
        if (o) {
            h(false)
        } else {
            e(false)
        }
        if (n) {
            b.html(n)
        }
        b.show()
    };
    var d = function(q, p, o, n) {
        if (q) {
            h(false)
        } else {
            e(false)
        }
        if (!p) {
            p = "rgba(0,0,0,0.7)"
        }
        b.css("background-color", p);
        b.fadeIn(o);
        window.setTimeout(function() {
            if (n) {
                n()
            }
        }, o + 10)
    };
    var f = function() {
        return a
    };
    j(g);
    return {
        initialize: j,
        hide_dialog: c,
        cleanup_dialog: m,
        show_dialog: k,
        get_id: f,
        fadein_dialog: d
    }
};
var juicebox_sizing_manager = function(f, M, o) {
    var L = f;
    var an = o;
    var P = M;
    var w = L("body");
    var N = 0;
    var y = 0;
    var k = function() {
        N = L(window).width();
        y = L(window).height()
    };
    var C = function() {
        return null
    };
    var T = function(ao) {
        var ap = C();
        if (!ap) {
            return {
                height: ao,
                registered: false
            }
        }
        return {
            height: ap.height,
            registered: true
        }
    };
    var aa = function(ao) {
        var ap = C();
        if (!ap) {
            return {
                width: ao,
                registered: false
            }
        }
        return {
            width: ap.width,
            registered: true
        }
    };
    function U(ap) {
        var ao = v(ap, "height");
        if (parseInt(ao) === 0) {
            return 0
        }
        return ao
    }
    function j(ap) {
        var ao = v(ap, "width");
        if (parseInt(ao) === 0) {
            return 0
        }
        return ao
    }
    var ak = function(ar, aq) {
        var ao = Math.max(y, N);
        var ap = Math.min(y, N);
        return (ar > aq) ? ao : ap
    };
    var H = function(ap, aq, ao) {
        if (ap < 3.1) {
            return 1
        }
        if (ap > 3.1 && ap < 4) {
            return 0
        }
        if (ap < 4.1 && ap >= 4) {
            if (ao > aq) {
                return 0
            }
            return an.is_small_android() ? 58 : 0
        }
        return 0
    };
    function B(av, aA, au, ao, at) {
        var az = aA;
        var ap = true;
        if (an.is_in_iframe()) {
            return {
                height: L(window).height(),
                registered: ap
            }
        }
        if (an.is_ipad() && an.ios_version() >= 7) {
            if (!an.is_ios_mobile_chrome()) {
                az = window.innerHeight;
                if (aA < au) {
                    if (L(window).height() > window.innerHeight && az < 672) {
                        az = 672
                    }
                }
            } else {
                az = aA
            }
        } else {
            if (an.is_iphone()) {
                az = window.innerHeight;
                if (an.ios_version() < 7) {
                    if (window.innerHeight > window.innerWidth) {
                        if (screen.height - window.innerHeight > 80) {
                            az += 60
                        }
                    } else {
                        if (screen.width - window.innerHeight > 80) {
                            az += 60
                        }
                    }
                } else {
                    az++;
                    if (window.innerHeight < window.innerWidth) {
                        az++
                    }
                }
            } else {
                if (an.is_android()) {
                    var aw = L(window);
                    var ay = aw.height();
                    var ar = aw.width();
                    if (an.get_android_ver() < 4 && !(aq > 3.1 && aq < 4)) {
                        ay = screen.height;
                        ar = screen.width
                    } else {
                        ay = ak(aw.height(), aw.width())
                    }
                    var ax;
                    if (aA > au) {
                        ax = T(aA);
                        az = ax.height + 1
                    } else {
                        ax = aa(aA);
                        az = ax.width
                    }
                    ap = ax.registered;
                    if (!ap) {
                        var aq = an.get_android_ver();
                        if (aq >= 4) {
                            if (at) {
                                return {
                                    height: parseInt(az) + 2,
                                    registered: ap
                                }
                            }
                            az = window.innerHeight
                        } else {
                            if (aq > 3.1 && aq < 4) {
                                if (aw.height() > ay + 10) {
                                    az = aw.height() + (aw.height() > aw.width() ? (ao ? 2 : 50) : 2)
                                } else {
                                    if (ay > aw.height()) {
                                        az = aw.height() + (aw.height() > aw.width() ? (ao ? 2 : 0) : 2)
                                    } else {
                                        az = aA + (ao ? 54 : 50)
                                    }
                                }
                            } else {
                                if (aq >= 2.3) {
                                    if (aA > au) {
                                        az = ax.height + 5
                                    } else {
                                        az = ax.width + 5
                                    }
                                } else {
                                    az = aA + 5
                                }
                            }
                        }
                    } else {
                        if (an.get_android_ver() >= 4 && ao) {
                            az += 5
                        }
                    }
                } else {
                    if (an.is_mobile_ie()) {
                        az = parseInt(1.13 * aA)
                    }
                }
            }
        }
        return {
            height: az,
            registered: ap
        }
    }
    var r = true;
    var F = U(w.attr("style"));
    var p = (F && parseInt(F) > 0);
    var h = function(ao) {
        if (p) {
            return false
        }
        if (ao.galleryheight.indexOf("%") < 0) {
            return false
        }
        if (((r && !J(ao.gallerywidth, ao.galleryheight)) || c(ao)) && !(an.is_iphone() && i(ao))) {
            return false
        }
        return true
    };
    var a = function() {
        return false
    };
    var c = function(ao) {
        return q().heightFound && ao.galleryheight.indexOf("%") > 0
    };
    var ab = function(ao) {
        return q().widthFound && ao.galleryheight.indexOf("%") > 0
    };
    var b = function(ap, ao) {
        var ar = L(window);
        if (ao || h(ap)) {
            w.height(B(ao, ar.height(), ar.width()).height)
        }
        if (ao || a(ap)) {
            var aq = ar.width();
            if (an.is_ipad() && an.ios_version() >= 7 && ar.width() > ar.height()) {
                if (an.is_ios_mobile_chrome()) {
                    aq = ar.width()
                } else {
                    aq = 1024
                }
            }
            w.width(aq)
        }
    };
    var G = function() {
        var ap = parseInt(P.height());
        var ao = parseInt(L("body").height());
        if (an.is_android()) {
            return ap >= ao && ap <= ao - 3
        }
        return ap == ao
    };
    var J = function(ap, ao) {
        if (ap === "100%" && ao === "100%" && P.width() == L("body").width() && q().percentHeight === 0 && (O().height == 0 || G() || (L("body").height() === 0 && an.is_ie8()))) {
            return true
        }
        return false
    };
    var i = function(ap) {
        var ao = an.is_page_scrolling();
        if (J(ap.gallerywidth, ap.galleryheight) && (an.is_small_android() || an.is_iphone() || L.browser.msie || (!ao.v_scrolling && !ao.h_scrolling))) {
            return true
        }
        return false
    };
    function v(at, ap) {
        if (!at || !ap) {
            return ""
        }
        var ao = at.split(";");
        var aq, aw, av, au, ar;
        for (ar = 0; ar < ao.length; ar++) {
            aw = L.trim(ao[ar]);
            if (!aw) {
                continue
            }
            aq = aw.split(":");
            if (aq.length !== 2) {
                continue
            }
            av = L.trim(aq[0]);
            au = L.trim(aq[1]);
            if (!av) {
                continue
            }
            if (av.toLowerCase() === ap.toLowerCase()) {
                return au
            }
        }
        return ""
    }
    var l = false;
    var ae = 0;
    var D = 0;
    var q = function() {
        if (l) {
            return {
                heightFound: ae > 0,
                widthFound: D > 0,
                percentHeight: ae,
                percentWidth: D
            }
        }
        l = true;
        P.parents().each(function(ap, au) {
            if (ae > 0 && D > 0) {
                return
            }
            var at = au.nodeName.toUpperCase();
            if (at === "BODY") {
                return
            }
            var ar = L(au).attr("style");
            var aq = U(ar);
            var ao = j(ar);
            if (!ao && !aq) {
                return
            }
            if (aq.indexOf("%") > 0 || parseInt(aq) > 0) {
                ae = parseInt(aq)
            }
            if (ao.indexOf("%") > 0 || parseInt(ao) > 0) {
                D = parseInt(ao)
            }
        });
        return {
            heightFound: ae > 0,
            widthFound: D > 0,
            percentHeight: ae,
            percentWidth: D
        }
    };
    var m = false;
    var ah = 0;
    var s = 0;
    var O = function() {
        if (m) {
            return {
                height: ah,
                parentHeight: s
            }
        }
        ah = P.height();
        s = P.parent().height();
        m = true;
        return {
            height: ah,
            parentHeight: s
        }
    };
    var ai = 0;
    var aj = function() {
        var ap = P.height();
        var ao = ai;
        ai = ap;
        return {
            newHeight: ap,
            oldHeight: ao
        }
    };
    var K = false;
    var u = function() {
        var ao = aj();
        if (L.browser.msie) {
            if (L.browser.version < 8) {
                if (O().height === 0) {
                    if (ao.newHeight > 0) {
                        return true
                    }
                } else {
                    if (O().height === ao.newHeight && ao.newHeight > 110) {
                        return true
                    }
                }
                return false
            } else {
                if (an.is_ie8()) {
                    if (P.height() <= 0 && P.parent().height() > 0 && P.parent().height() === O().parentHeight) {
                        K = true;
                        return true
                    }
                    if (K) {
                        return true
                    }
                    return false
                }
            }
        }
        return O().parentHeight > 110 && ao.newHeight > 110
    };
    var g = function(ap, aq, aw, ar) {
        if (aq) {
            if (an.is_android()) {
                return window.innerHeight + (aw ? 3 : 2)
            }
            var av = L(window);
            var ao = av.height();
            var au = av.width();
            if (!an.is_ios_mobile_chrome() && (an.is_ipad() || an.is_iphone()) && an.ios_version() >= 7) {
                ao = window.innerHeight;
                au = window.innerWidth
            }
            var at = B(aq, ao, au, aw, ar);
            return at.height
        }
        return ac(ap, aq)
    };
    var ac = function(ap, ar) {
        var ao = parseInt(ap.galleryheight);
        if (ap.galleryheight.indexOf("%") < 0) {
            return ao
        }
        if (!q().heightFound && u()) {
            if (an.is_ie8() && P.height() < 10 && P.parent().height() > 10) {
                return P.parent().height()
            }
            return P.height()
        }
        var au = 1;
        var aq = 0;
        var at;
        P.parents().each(function(ax, az) {
            var ay = az.nodeName.toUpperCase();
            if (ay === "BODY") {
                return
            }
            at = L(az).attr("style");
            var aw = U(at);
            if (aw.toLowerCase().indexOf("%") < 0 && parseInt(aw) > 0) {
                aq = parseInt(aw)
            }
            if (!aw || aq > 0) {
                return
            }
            if (aw.indexOf("%") > 0) {
                au *= (parseInt(aw) / 100)
            }
        });
        var av = L(window);
        if (aq === 0) {
            aq = B(ar, av.height(), av.width()).height
        }
        if (!ao) {
            ao = 100
        }
        ao /= 100;
        return au * ao * aq
    };
    var Z = function(ao, ap, ar) {
        if (ap) {
            var aq = L(window).width();
            if (an.is_android()) {
                aq = window.innerWidth + (ar ? 1 : 0)
            }
            return aq
        }
        return z(ao)
    };
    var z = function(ao) {
        var au = parseInt(ao.gallerywidth);
        if (ao.gallerywidth.indexOf("%") < 0) {
            return au
        }
        if (!q().widthFound) {
            return P.width()
        }
        var ar = 1;
        var ap = 0;
        var aq;
        P.parents().each(function(aw, ay) {
            var ax = ay.nodeName.toUpperCase();
            if (ax === "BODY") {
                return
            }
            aq = L(ay).attr("style");
            var av = j(aq);
            if (av.toLowerCase().indexOf("%") < 0 && parseInt(av) > 0) {
                ap = parseInt(av)
            }
            if (!av || ap > 0) {
                return
            }
            if (av.indexOf("%") > 0) {
                ar *= (parseInt(av) / 100)
            }
        });
        var at = L(window);
        if (ap === 0) {
            ap = at.width()
        }
        if (!au) {
            au = 100
        }
        au /= 100;
        return ar * au * ap
    };
    var al = function(aq, au, ar, ap) {
        var av = x(aq, au, ar, false, ap);
        var at = an.get_thumb_size(ar);
        var ao = at.height + ar.thumbpadding;
        return av.rows * ao + ar.thumbpadding
    };
    var X = function(aq) {
        if (!an.is_large_screen_mode(aq)) {
            return 0
        }
        var ap = aq.thumbsposition.toUpperCase();
        if (ap != "LEFT" && ap != "RIGHT") {
            return 0
        }
        var at = an.get_thumb_size(aq);
        var ao = at.width + aq.thumbpadding;
        var au = aq.thumbnavposition.toUpperCase() != "BOTTOM" ? 128 : 0;
        var ar = aq.maxthumbcolumns > 0 ? aq.maxthumbcolumns : 1;
        return ao * ar + au
    };
    var E = function(ao, ap) {
        if (ao.captionposition.toUpperCase() === "NONE") {
            return 0
        }
        if (!ap || ap <= 0) {
            return ao.maxcaptionheight
        }
        return ao.maxcaptionheight > ap ? ap : ao.maxcaptionheight
    };
    var t = 30;
    var e = 13;
    var W = 75;
    var am = function(aS, aX, ap, av, aw, aQ, au, aT, a5) {
        var a3 = R(aS, aX, aT);
        var ar = X(aT);
        var ao = 2 * a3;
        if (ao > aS - 60 || ao > aX - 60) {
            ao = 0;
            a3 = 0
        }
        var aC = a3;
        var aJ = a3;
        var aN = ao;
        var aG = ao;
        aN = 2 * aC;
        aG = 2 * aJ;
        var aB, ax, ay, aM, aL, aE, aq, az, aR, aK, a0, a4, aA;
        var aW = aC
          , aY = 0
          , aP = 0
          , aD = aJ;
        var aZ = aT.captionposition.toUpperCase();
        var aU = aT.thumbnavposition.toUpperCase();
        var aO = aU === "BOTTOM" ? W : 0;
        if (aQ) {
            aY = aT.topareaheight;
            aP = aS - aG
        }
        var a2 = aT.thumbsposition.toUpperCase();
        var aF = aT.thumbpadding / 2;
        var aI = au + (2 * aF);
        aB = ((aT.showpagingtext && aO <= 0) ? aI + (aw ? e + aT.thumbpadding + aF : 15) : aI) + (aw ? 0 : 24) + aO;
        if (a2 != "TOP") {
            aB -= aT.thumbhseparation
        }
        var aV = aT.gallerytitleposition.toUpperCase();
        if (aV === "ABOVE_THUMBS") {
            if (a2 != "LEFT" && a2 != "RIGHT") {
                aB += t
            }
        }
        aL = aX - aB - aW - aY - aC;
        var at = aT.captionposition.toUpperCase();
        aA = 0;
        var a7 = E(aT, aX - aW - aY - aC);
        aR = a7;
        var a6 = false;
        if (a2 === "TOP") {
            aq = aX - aC - aL - aF;
            ay = aW + aY + aF
        } else {
            if (a2 === "LEFT") {
                a6 = true
            } else {
                if (a2 === "RIGHT") {
                    a6 = true
                } else {
                    aq = aW + aY;
                    ay = aX - aC - aB
                }
            }
        }
        if (a6) {
            ay = aW + aY;
            aq = aW + aY;
            aL = aX - aW - aY - aC;
            aB = aL - (aZ === "BOTTOM" ? aR : 0)
        }
        var aH;
        if (aZ === "BELOW_IMAGE" || aZ === "BOTTOM") {
            a0 = aX - aC - aR
        } else {
            if (aZ === "BELOW_THUMBS") {
                if (a6) {
                    if (aT.thumbsvalign.toUpperCase() === "TOP") {
                        a0 = al((a6 ? ar : aS - aG), af(aT, aB), aT, a5) + (aT.showpagingtext && aO <= 0 ? e : 0) + aO
                    } else {
                        a0 = (aB) / 2 + al((a6 ? ar : aS - aG), af(aT, aB), aT, a5) / 2 + (aT.showpagingtext && aO <= 0 ? e : 0) + aO
                    }
                } else {
                    a0 = al((a6 ? ar : aS - aG), aB - af(aT, aB), aT, a5) + (aT.showpagingtext && aO <= 0 ? e : 0) - parseInt(aT.thumbpadding / 2) + aO
                }
            } else {
                a0 = aL - aR - aY
            }
        }
        if (ap && av) {
            ax = aS - aG;
            aM = aJ;
            aE = ax;
            az = aJ;
            if (a6) {
                ax = ar;
                aE = aS - aG - ax - aT.thumbhseparation
            }
            if (a2 === "LEFT") {
                aM = aJ + aF;
                az = aM + ax + aT.thumbhseparation
            } else {
                if (a2 === "RIGHT") {
                    ax += aT.thumbhseparation;
                    az = aJ;
                    aM = az + aE
                } else {
                    if (!a6) {
                        if (a2 === "TOP") {
                            aq += aT.thumbvseparation
                        } else {
                            aL -= aT.thumbvseparation
                        }
                    }
                }
            }
            aK = aS - aG;
            a4 = aJ;
            if (at === "BOTTOM" || (!a6 && aZ === "BELOW_THUMBS" && a2 != "TOP")) {
                if (aZ === "BELOW_THUMBS") {
                    a4 = 0;
                    aB += aR;
                    if (!a6) {
                        a0 = aB - aR
                    }
                } else {
                    a0 = aX - aR - aC
                }
                aL -= aR;
                if (a2 != "TOP") {
                    ay -= aR
                }
                if (ay < 0) {
                    ay = 0
                }
            } else {
                if (at === "BELOW_IMAGE") {
                    aR = aL;
                    aL -= a7;
                    a0 = aq;
                    aK = aE;
                    a4 = az
                } else {
                    if (aZ === "BELOW_THUMBS") {
                        aR = a7;
                        a4 = 0;
                        if (a6) {
                            aK = ax
                        }
                        a4 = 0;
                        if (a2 === "TOP") {
                            aL -= aR;
                            aq += aR
                        }
                        if (!a6) {
                            aB += aR
                        }
                    } else {
                        aA = (a2 === "TOP" ? 0 : aB) + aC;
                        aH = aL - aR;
                        if (aH > 0) {
                            a0 = aq + aH
                        } else {
                            a0 = aq
                        }
                        if (at === "OVERLAY_IMAGE") {
                            aK = aE;
                            a4 = az
                        }
                    }
                }
            }
        } else {
            var a1 = aW + aY;
            aB = aX - a1;
            ax = aS - aG;
            ay = aC + a1;
            aM = aJ;
            aL = aX - a1 - aC;
            aR = aT.maxcaptionheight > aL ? aL : aT.maxcaptionheight;
            aE = aS - aG;
            aq = a1;
            az = aJ;
            aK = aS - aG;
            a4 = aJ;
            if (at === "BOTTOM") {
                aL -= aR
            } else {
                if (at === "BELOW_IMAGE") {
                    aL -= aR;
                    a0 = aq
                } else {
                    aH = aL - aR;
                    if (aH > 0) {
                        a0 = aq + aH
                    } else {
                        a0 = aq
                    }
                    aA = aC
                }
            }
        }
        return {
            top_panel_height: aY,
            top_panel_width: aP,
            top_panel_left: aD,
            top_panel_top: aW,
            index_panel_height: aB,
            index_panel_width: ax,
            index_panel_top: ay,
            index_panel_left: aM,
            detail_panel_height: aL,
            detail_panel_width: aE,
            detail_panel_top: aq,
            detail_panel_left: az,
            caption_panel_height: aR,
            caption_panel_width: aK,
            caption_panel_left: a4,
            caption_panel_top: a0,
            caption_panel_bottom: aA,
            is_sideway_layout: a6
        }
    };
    var R = function(ao, at, ar) {
        var aq = Math.min(ao, at);
        if (ar.stagepadding * 2 + 160 > aq) {
            var ap = parseInt((aq - 160) / 2);
            return ap >= 0 ? ap : 0
        }
        return ar.stagepadding
    };
    var ag = function(ar, ao, aq) {
        var ap = Math.min(ar, ao);
        if (aq.imagepadding * 2 + 60 > ap) {
            if (aq.framewidth > 0 && aq.framewidth * 2 >= 60) {
                return parseInt((ap - 60) / 4)
            }
            return parseInt((ap - 60) / 2)
        }
        return aq.imagepadding
    };
    var Q = function(ar, ao, aq) {
        var at = 10;
        var ap = Math.min(ar, ao);
        if (aq.framewidth * 2 + at > ap) {
            if (aq.imagepadding > 0 && aq.imagepadding * 2 >= at) {
                return parseInt((ap - at) / 4)
            }
            return parseInt((ap - at) / 2)
        }
        if (2 * aq.imagepadding + 2 * aq.framewidth + at > ap) {
            return 0
        }
        return aq.framewidth
    };
    var Y = function(av, aB, aA, az, aq, aC) {
        var ay, ap, ax, au, at, aw;
        var ao = aB / az;
        var ar = av / aA;
        if (aB <= 0 || av <= 0 || az <= 0 || aA <= 0) {
            return {}
        }
        if (ao >= 1 && ar >= 1) {
            if (!aC) {
                ax = "auto";
                au = "auto";
                at = aB;
                aw = av;
                ay = parseInt((av - aA) / 2);
                ap = parseInt((aB - az) / 2)
            } else {
                if (ao > ar) {
                    ax = "auto";
                    au = aA;
                    at = aB / ar;
                    aw = aA;
                    ay = 0;
                    ap = parseInt((at - az) / 2)
                } else {
                    ax = az;
                    au = "auto";
                    at = az;
                    aw = av / ao;
                    ay = parseInt((aw - aA) / 2);
                    ap = 0
                }
            }
        } else {
            if (ao < ar) {
                ax = az;
                au = "auto";
                at = az;
                aw = parseInt(at * av / aB);
                ap = 0;
                ay = parseInt((aw - aA) / 2)
            } else {
                au = aA;
                ax = "auto";
                aw = aA;
                at = parseInt(aw * aB / av);
                ay = 0;
                ap = parseInt((at - az) / 2)
            }
        }
        var aD = {
            imageTop: -1 * ay,
            imageLeft: -1 * ap,
            imageWidth: ax,
            imageHeight: au,
            imageExpectedWidth: at,
            imageExpectedHeight: aw
        };
        if (aq) {
            aq(aD)
        } else {
            return aD
        }
        return null
    };
    var ad = function(ar, aq, ap, au, at) {
        ar = parseInt(ar);
        aq = parseInt(aq);
        var ao = new Image();
        ao.onload = function() {
            Y(ao.height, ao.width, aq, ar, au, at)
        }
        ;
        ao.src = ap
    };
    var V = function(aq, ao, aw, au, at) {
        var ar = aw / aq;
        var ap = au / ao;
        var av;
        if (at === "SCALE") {
            av = 0
        } else {
            if (at === "FILL") {
                av = 3
            } else {
                if (at === "STRETCH") {
                    av = 4
                } else {
                    if (at === "NONE") {
                        av = 2
                    } else {
                        if (ar < 1 || ap < 1) {
                            av = 0
                        } else {
                            av = 1
                        }
                    }
                }
            }
        }
        switch (av) {
        case 0:
            if (ar > ap) {
                return {
                    width: "auto",
                    height: au + "px"
                }
            } else {
                return {
                    width: aw + "px",
                    height: "auto"
                }
            }
        case 1:
            return {
                width: aq + "px",
                height: ao + "px"
            };
        case 2:
            return {
                width: "auto",
                height: "auto"
            };
        case 3:
            if (ar > ap) {
                return {
                    width: aw + "px",
                    height: "auto",
                    expectedWidth: aw,
                    expectedHeight: (aw * ao / aq)
                }
            } else {
                return {
                    width: "auto",
                    height: au + "px",
                    expectedWidth: (au * aq / ao),
                    expectedHeight: au
                }
            }
        case 4:
            return {
                width: aw + "px",
                height: au + "px"
            }
        }
        return null
    };
    var I = function(av, au, at, ao, ar, aq) {
        var ap = aq ? 0 : 2 * (ag(au, at, ao) + Q(au, at, ao));
        au -= ap;
        at -= ap;
        if (!av || !av.width || !av.height) {
            return {
                width: "auto",
                height: "auto"
            }
        }
        return V(av.width, av.height, au, at, ar)
    };
    var n = function(aC, aH, ao, at, aE, aF) {
        var au = I(aC, aH, ao, at, (aE ? aE : at.imagescalemode.toUpperCase()), aF);
        var ay = au.width;
        var aI = au.height;
        var ax = aF ? 0 : ag(aH, ao, at);
        var aA = aF ? 0 : Q(aH, ao, at);
        var aJ = ax + aA;
        var az = 2 * aJ;
        if (ay === "auto" && aI === "auto") {
            aI = aC.height;
            ay = aC.width
        } else {
            if (ay === "auto") {
                ay = parseInt(aI) * (aC.width / aC.height)
            } else {
                if (aI === "auto") {
                    aI = parseInt(ay) * (aC.height / aC.width)
                }
            }
        }
        ay = parseInt(ay);
        aI = parseInt(aI);
        var aq = 0;
        var aB = 0;
        var ar = at.imagehalign.toUpperCase();
        var av = at.imagevalign.toUpperCase();
        if (ar === "LEFT") {
            aq = 0
        } else {
            if (ar === "RIGHT") {
                aq = parseInt(aH - ay - 2 * aA) - ax
            } else {
                aq = parseInt((aH - ay) / 2) - aA
            }
        }
        if (av === "TOP") {
            aB = 0
        } else {
            if (av === "BOTTOM") {
                aB = parseInt(ao - aI - 2 * aA) - ax
            } else {
                aB = parseInt((ao - aI) / 2) - aA
            }
        }
        var aD = aq;
        var ap = aB;
        if (aq < ax) {
            aq = ax
        }
        if (aB < ax) {
            aB = ax
        }
        var aG = aH - az < parseInt(ay) ? aH - az : parseInt(ay);
        var aw = ao - az < parseInt(aI) ? ao - az : parseInt(aI);
        return {
            width: parseInt(ay),
            height: parseInt(aI),
            left: aq,
            top: aB,
            frameWidth: aG,
            frameHeight: aw,
            unadjtop: ap,
            unadjleft: aD,
            parentWidth: aH,
            parentHeight: ao
        }
    };
    var x = function(ao, aB, ap, au) {
        if (aB < 0) {
            aB = 0
        }
        var ay = 0
          , at = 0;
        var ax;
        var aA = an.get_thumb_size(ap);
        var aw = aA.width + ap.thumbpadding;
        var az = aA.height + ap.thumbpadding;
        var ar = ((an.is_large_screen_mode(ap) || ap.showsmallthumbnav) ? an.get_nav_btn_size(ap) : 0) + ap.thumbpadding;
        ax = ao - (2 * ar);
        var aq = ap.thumbsposition.toUpperCase();
        if (aq === "LEFT" || aq === "RIGHT") {
            ay = ap.maxthumbcolumns
        } else {
            if (ao > 0) {
                ay = parseInt(ax / aw)
            }
        }
        if (ay <= 0) {
            ay = 1
        }
        if (ay > ap.maxthumbcolumns) {
            ay = ap.maxthumbcolumns
        }
        if (aB > 0) {
            at = parseInt(aB / az);
            if (!an.is_large_screen_mode(ap) && (au || ap.forcetouchmode || ap.forcetouchmodereversed)) {}
        }
        if (at <= 0 || ap.usethumbdots) {
            at = 1
        }
        if (at > ap.maxthumbrows) {
            at = ap.maxthumbrows
        }
        var av = at;
        return {
            columns: ay,
            rows: av,
            regularRows: at
        }
    };
    var af = function(ap, ao) {
        var at = ap.thumbnavposition.toUpperCase();
        var aq = ap.captionposition.toUpperCase();
        var ar = an.is_side_layout(ap);
        if (ap.gallerytitleposition.toUpperCase() === "ABOVE_THUMBS" && aq != "BELOW_THUMBS" || !an.is_large_screen_mode(ap)) {
            ao -= t
        }
        if (aq === "BELOW_THUMBS") {
            ao -= E(ap);
            if (ar && at != "BOTTOM") {
                ao -= E(ap)
            }
        }
        if (ap.showpagingtext && at != "BOTTOM") {
            ao -= (ar ? 2 : 1) * e
        }
        if (!an.is_large_screen_mode(ap)) {
            ao -= 30
        }
        if (at === "BOTTOM") {
            ao -= (W + (ar ? 25 : 0))
        }
        ao -= ap.thumbpadding / 2;
        return ao
    };
    var d = function(at, ap, aq, ar, ao) {
        ap = af(aq, ap);
        return x(at, ap, aq, ar, ao)
    };
    var A = function(ao) {
        return parseInt(ao.thumbheight / 3)
    };
    var S = function(aC, aB, aI, ap, az) {
        var ao = aI.thumbshalign.toUpperCase();
        var at = aI.thumbsvalign.toUpperCase();
        var aq = an.get_thumb_size(aI);
        var aF = aI.thumbnavposition.toUpperCase();
        var ay = aq.width + aI.thumbpadding;
        var ax = aq.height + aI.thumbpadding;
        var aH = az * ax + aI.thumbpadding;
        if (aH < an.get_nav_btn_size(aI)) {
            aH = an.get_nav_btn_size(aI)
        }
        var aw = ap * ay + aI.thumbpadding;
        var aG = aI.captionposition.toUpperCase();
        var au = R(P.width(), P.height(), aI);
        var ar = (aG === "BOTTOM" ? au : 0) + parseInt((aB - aH) / 2 - (an.is_side_layout(aI) ? aI.thumbpadding : 0) / 2 + aI.thumbpadding / 2);
        var aJ = 0;
        var aD = o.get_nav_btn_size(aI);
        if (ao === "LEFT") {
            aJ = aD
        } else {
            if (ao === "RIGHT") {
                aJ = parseInt((aC - aw)) - aD
            } else {
                aJ = parseInt((aC - aw) / 2)
            }
        }
        if (at === "TOP") {
            ar = 0
        } else {
            if (at === "BOTTOM") {
                ar = (aG === "BOTTOM" ? au : 0) + parseInt((aB - aH) - (an.is_side_layout(aI) ? aI.thumbpadding : 0) / 2 + aI.thumbpadding / 2) - (aF === "BOTTOM" ? aD + A() : 0)
            } else {
                ar = (aG === "BOTTOM" ? au : 0) + parseInt((aB - aH) / 2 - (an.is_side_layout(aI) ? aI.thumbpadding : 0) / 2 + aI.thumbpadding / 2)
            }
        }
        if (!an.is_side_layout(aI)) {
            ar = 0
        } else {
            if (ar < 0) {
                ar = 0
            }
        }
        var av = aI.gallerytitleposition.toUpperCase();
        var aE = an.is_large_screen_mode(aI);
        var aA = false;
        if (an.is_side_layout(aI)) {
            if (!aA) {
                if (ar < 0) {
                    ar = 0
                }
            }
        } else {
            if (av === "ABOVE_THUMBS") {
                ar += t
            }
        }
        return {
            top: ar,
            left: aJ,
            width: aw,
            height: (aA || !aE) ? "100%" : aH
        }
    };
    return {
        get_gallery_height: g,
        get_gallery_width: Z,
        is_fullscreen_mode: i,
        is_gallery_fully_filled: J,
        try_set_body_size: b,
        get_containers_size_and_position: am,
        get_stage_padding: R,
        get_image_padding: ag,
        get_image_framewidth: Q,
        position_2_fill_image: ad,
        force_height_calculation: c,
        force_width_calculation: ab,
        get_initial_size: k,
        get_initial_win_size: ak,
        get_side_panel_width: X,
        suggested_image_size: I,
        get_image_display_size: n,
        get_thumb_size_info: d,
        get_thumbs_show_area_size_info: S,
        constTitleHeight4AboveThumbs: t,
        constIndexNavHeight: W,
        get_android_additional_height: H,
        padding_bottom_index_nav: A
    }
};
var juicebox_flickr_image_loader = function(e, o, g) {
    var D = o.get_config();
    var h = 50;
    var p = g;
    var A = 0;
    var m = 1;
    var i = "s";
    var d = "https://api.flickr.com/services/rest/?method=";
    var c = "&api_key=b40dc56c795c0103c6170731e6271e04";
    var v = {
        FLICKR_SEARCH: "flickr.photos.search",
        FLICKR_INTERESTINGNESS: "flickr.interestingness.getList",
        FLICKR_SET: "flickr.photosets.getPhotos",
        FLICKR_GROUP: "flickr.groups.pools.getPhotos",
        FLICKR_FIND_USER: "flickr.people.findByUsername",
        FLICKR_PHOTO_INFO: "flickr.photos.getInfo",
        FLICKR_PEOPLE_FIND: "flickr.people.findByUsername"
    };
    function x(E) {
        return d + v[E] + c
    }
    function t(E) {
        return x("FLICKR_SEARCH") + (D.flickrtags ? "&tags=" + D.flickrtags : "") + (D.flickruserid ? "&user_id=" + D.flickruserid : "") + "&page=" + m + "&per_page=" + E + "&sort=" + D.flickrsort.toLowerCase() + "&tag_mode=" + D.flickrtagmode.toLowerCase() + (D.flickrextraparams ? "&" + D.flickrextraparams.replace(/,/g, "&") : "") + "&media=photos&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
    }
    function r(E) {
        return x("FLICKR_SET") + "&photoset_id=" + D.flickrsetid + (D.flickrtags ? "&tags=" + D.flickrtags : "") + "&page=" + m + "&per_page=" + E + "&tag_mode=" + D.flickrtagmode.toLowerCase() + "&media=photos&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
    }
    function f(E) {
        return x("FLICKR_GROUP") + "&group_id=" + D.flickrgroupid + (D.flickrtags ? "&tags=" + D.flickrtags : "") + "&page=" + m + "&per_page=" + E + "&tag_mode=" + D.flickrtagmode.toLowerCase() + "&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
    }
    function n(E) {
        return x("FLICKR_INTERESTINGNESS") + "&page=" + m + "&per_page=" + E + "&extras=url_sq, url_m, url_l,url_o,original_format&format=json&jsoncallback=?"
    }
    function C() {
        return x("FLICKR_PEOPLE_FIND") + "&username=" + D.flickrusername + "&format=json&jsoncallback=?"
    }
    function q(E) {
        if (!o.isp) {
            if (D.flickrtags || D.flickrusername) {
                return t(E)
            } else {
                return n(E)
            }
        }
        if (D.flickrsetid) {
            return r(E)
        } else {
            if (D.flickrgroupid) {
                return f(E)
            } else {
                if (D.flickruserid) {
                    return t(E)
                } else {
                    if (D.flickrusername) {
                        return t(E)
                    } else {
                        if (D.flickrtags) {
                            return t(E)
                        } else {
                            return n(E)
                        }
                    }
                }
            }
        }
    }
    function b(F, E) {
        return "http" + i + "://www.flickr.com/photos/" + F + "/" + E
    }
    function l(G, H, F, E) {
        return "http" + i + "://farm" + G + ".static.flickr.com/" + H + "/" + E + "_" + F + "_s.jpg"
    }
    var j = function(G, I) {
        var K, H, J;
        var E = "";
        var F = [];
        if (o.isp) {
            if (G.photos) {
                K = G.photos.photo
            } else {
                if (G.photoset) {
                    K = G.photoset.photo;
                    E = G.photoset.owner
                }
            }
        } else {
            K = G.photos.photo
        }
        if (!K || K.length == 0) {
            p("Flickr Images Not Found");
            return F
        }
        for (H = 0; H < K.length && H < A; H += 1) {
            J = {
                flickrPhotoId: K[H].id,
                thumbURL: l(K[H].farm, K[H].server, K[H].secret, K[H].id),
                imageFullURL: b(K[H].owner || E, K[H].id),
                imageURL: b(K[H].owner || E, K[H].id),
                linkTarget: "_blank",
                caption: K[H].title || "",
                description: "",
                preloadedImage: null,
                preloaded: false
            };
            if (D.flickrimagesize.toLowerCase() === "original" && K[H].url_o) {
                J.imageURL = K[H].url_o
            } else {
                if ((D.flickrimagesize.toLowerCase() === "large" || D.flickrimagesize.toLowerCase() === "original") && K[H].url_l) {
                    J.imageURL = K[H].url_l
                } else {
                    J.imageURL = K[H].url_m
                }
            }
            F.push(J);
            if (typeof (I) === "function") {
                u(H, K[H].id, I)
            }
        }
        return F
    };
    var y = function(E) {
        if (!E || !E.photo) {
            return null
        }
        var F = E.photo;
        return {
            id: F.id,
            title: F.title._content,
            description: F.description._content.replace(/\n/g, "<br/>")
        }
    };
    var k = function(F) {
        var E = C();
        e.ajax({
            url: E,
            dataType: "json",
            success: function(G) {
                if (G.stat === "ok") {
                    D.flickruserid = G.user.id;
                    if (F) {
                        F()
                    }
                } else {
                    p("Cannot find Flickr User: " + D.flickrusername)
                }
            },
            error: function() {
                p("Cannot find Flickr User: " + D.flickrusername)
            }
        })
    };
    var B = function(G, F) {
        A = (o.isp ? parseInt(D.flickrimagecount) : h);
        var E = q(A);
        e.ajax({
            url: E,
            dataType: "json",
            success: function(H) {
                if (H.photos) {
                    A = Math.min(H.photos.total, A)
                } else {
                    if (H.photoset) {
                        A = Math.min(H.photoset.total, A)
                    }
                }
                if (H.stat === "ok") {
                    if (G) {
                        G(j(H, F))
                    }
                } else {
                    p("Flickr Images Not Found")
                }
            },
            error: function() {
                p("Flickr Images Not Found")
            }
        })
    };
    var z = function(E) {
        return x("FLICKR_PHOTO_INFO") + "&format=json&photo_id=" + E + "&jsoncallback=?"
    };
    var u = function(G, F, H) {
        if (!D.flickrshowdescription) {
            return
        }
        var E = z(F);
        e.ajax({
            url: E,
            dataType: "json",
            success: function(I) {
                if (I.stat === "ok") {
                    if (H) {
                        H(G, y(I))
                    }
                }
            },
            error: function() {}
        })
    };
    var s = function(F, E) {
        if (D.flickrusername) {
            k(function() {
                B(F, E)
            })
        } else {
            B(F, E)
        }
    };
    var w = function(G, E, F) {
        if (!D.flickrshowdescription) {
            return
        }
        if (typeof (F) === "function") {
            u(G, E, F)
        }
    };
    var a = function(E, F, H) {
        if (!D.flickrshowdescription) {
            return
        }
        if (typeof (H) !== "function") {
            return
        }
        if (F.to >= E.length) {
            F.to = E.length - 1
        }
        if (F.from < 0) {
            F.from = 0
        }
        for (var G = F.from; G <= F.to; G++) {
            if (E[G].detail_loaded) {
                continue
            }
            w(G, E[G].flickrPhotoId, H)
        }
    };
    return {
        get_images: s,
        load_flickr_images_detail: a
    }
};
var juicebox_gallery_manager = function() {
    var g = [];
    var f;
    var l = function(n) {
        f = n
    };
    var h = function(n) {
        n.position = g.length;
        n.original_position = g.length;
        n.loaded = 0;
        n.thumb_loaded = 0;
        n.width = null;
        n.height = null;
        n.thumb_width = null;
        n.thumb_height = null;
        n.order = parseInt(1000 * Math.random());
        g[g.length] = n
    };
    var j = function(n) {
        if (!f.randomizeimages) {
            return n
        }
        for (var o = 0; o < g.length; o++) {
            if (g[o].original_position == n) {
                return g[o].position
            }
        }
        return -1
    };
    var i = function(n) {
        return g[n]
    };
    var d = function() {
        return g
    };
    var c = function(n) {
        n = parseInt(n);
        if (!f.enablelooping && n >= g.length - 1) {
            return null
        }
        return g[n < g.length - 1 ? n + 1 : 0]
    };
    var m = function(n) {
        n = parseInt(n);
        if (!f.enablelooping && n <= 0) {
            return null
        }
        return g[n > 0 ? n - 1 : g.length - 1]
    };
    var e = function(n) {
        g[n.position] = n
    };
    var k = function(o, n) {
        return g.slice(o, n)
    };
    var b = function() {
        g = g.sort(function(p, o) {
            return p.order - o.order
        });
        for (var n = 0; n < g.length; n++) {
            g[n].position = n
        }
    };
    var a = function() {
        return g.length
    };
    return {
        add_image: h,
        length: a,
        get_range: k,
        get_image: i,
        get_images: d,
        update_image: e,
        get_previous_image: m,
        get_next_image: c,
        sort_images: b,
        init: l,
        get_current_position: j
    }
};
var juicebox_gallery_index_panel = function(T, g) {
    var ay, d, aG, X, ak, ao, aO, az;
    X = g;
    var G = T;
    var aL = 0;
    var aS = 1;
    var L = 0
      , W = 0;
    var ad = 0;
    var C = 0;
    var aa = 86;
    var aw = 86;
    var R = 96;
    var aA = 96;
    var x = 5;
    var s = true;
    var l = false;
    var aD = true;
    var e = "jb-tbn-current";
    var af = "jb-tbn-prev";
    var am = "jb-tbn-next";
    var q = 0;
    var O = 0;
    var aF = 0;
    var N = 0;
    var o = 0;
    var a = false;
    var aE = false;
    var E = "display:none;";
    var I = 11;
    var f, M;
    var aQ;
    var an = 100;
    var h = an;
    var aq = function(aT) {
        f = aT;
        M = f._;
        ak = f.config
    };
    var aj = function() {
        return -1
    };
    var z = function() {
        return
    };
    var j = function() {
        var aT = W * L <= X.length() ? h : X.length();
        return aT > X.length() ? X.length() : aT
    };
    var ab = function() {
        if (C == 0) {
            C = M("").height()
        }
        L = 0;
        W = 0;
        var aT = ao.get_thumb_size_info(ad, C, ak, l, j());
        L = aT.columns;
        W = aT.rows;
        if (L * W > X.length() && W > 1) {
            W = Math.ceil(X.length() / L)
        }
        aS = Math.ceil(X.length() / (W * L))
    };
    var H = function() {
        return ao.get_thumbs_show_area_size_info(ad, C, ak, L, W, M("").height())
    };
    var aK = function(aU) {
        if (!aU) {
            aU = 1
        }
        var aT = (aL + aU) * L * W - 1;
        if (aT >= X.length()) {
            aT = X.length() - 1
        }
        if (aT < 0) {
            aT = 0
        }
        return {
            from: aL * L * W,
            to: aT
        }
    };
    var p = function(aT) {
        var aU = G.get_thumb_size(aT);
        aa = aU.width;
        aw = aU.height;
        x = aT.thumbpadding / 2;
        R = aa + (2 * x);
        aA = aw + (2 * x)
    };
    var ae = function(aU, aT) {
        ay = aU.jquery;
        l = aT;
        d = aU.document_id;
        aG = aU.container;
        ak = aU.config;
        G = aU.utils;
        ao = aU.sizing;
        aO = aU.finish_draw_event_callback;
        az = aU.touch_event_callback;
        aQ = aU.debug;
        ad = aU.current_width;
        C = aU.current_height;
        p(ak);
        ab();
        u();
        ar();
        J();
        if (G.ship || !ak.usethumbdots || W > 1) {
            I = 0
        }
        M(".jb-idx-thumbnail-show-more").click(function() {
            h += an;
            au(0);
            var aW = f.glrySizePosition();
            var aV = aW.index_panel_height;
            M(".jb-panel-index").css({
                height: aV
            });
            ay("#" + f.config.containerid).height(aV);
            if (f.features.fullscreen.switched_2_fullscreen()) {
                M("").css({
                    height: aV
                })
            }
            return false
        })
    };
    var u = function() {
        var aU = f.features.grytitle.getHtml(true);
        var aT = "";
        if (ak.captionposition.toUpperCase() === "BELOW_THUMBS") {
            aT = f.features.caption.getHtml()
        }
        aG.html("<div class='jb-idx-show-area' style='overflow:hidden;margin:0;padding:0;position:absolute;'></div>" + aU + (ak.showpagingtext ? "<div class='jb-idx-thb-list-page-number' style='position: absolute;'></div>" : "") + aT)
    };
    var ar = function() {
        var aX = function(aZ) {
            if (a) {
                return
            }
            aZ.preventDefault();
            N = 0;
            o = 0;
            if (!aE) {
                aE = true;
                if (G.is_touchable_desktop()) {
                    var a0 = G.getMsPointerXy(aZ);
                    O = a0.x;
                    aF = a0.x
                } else {
                    O = aZ.originalEvent.touches[0].pageX;
                    aF = aZ.originalEvent.touches[0].pageX
                }
            }
        };
        var aT = function(a0) {
            if (a || !aE) {
                return
            }
            a0.preventDefault();
            var aZ;
            if (G.is_touchable_desktop()) {
                var a1 = G.getMsPointerXy(a0);
                aZ = a1.x
            } else {
                aZ = a0.originalEvent.touches[0].pageX
            }
            N = aZ - O;
            M("table.jb-idx-thb-container").animate({
                left: "+=" + (aZ - aF),
                avoidTransforms: !ak.use_webkit_transform,
                useTranslate3d: ak.use_3d_transform
            }, 0);
            aF = aZ;
            o = aZ - O
        };
        var aV = function(aZ) {
            if (ak.autofullscreenexpand) {
                G.show_real_fullscreen(ak.containerid);
                if (!G.is_in_real_fullscreen()) {
                    if (N > 5 || N < -5) {
                        return
                    }
                    var a0 = 0;
                    if (ay(aZ.target).attr("data-position")) {
                        a0 = parseInt(ay(aZ.target).attr("data-position"))
                    } else {
                        if (ay(aZ.target).parent().attr("data-position")) {
                            a0 = parseInt(ay(aZ.target).parent().attr("data-position"))
                        }
                    }
                    f.detail_panel.set_photo_position(a0);
                    f.detail_panel.set_visible_flag(true);
                    f.index_panel.set_visible_flag(false);
                    return
                }
            }
            if (a || !aE) {
                return
            }
            aE = false;
            if (N > 5) {
                if (r() && !ak.enablelooping) {
                    V(N, function() {
                        P()
                    })
                } else {
                    at(Math.abs(N), null, ad, C)
                }
                aZ.preventDefault()
            } else {
                if (N < -5) {
                    if (aJ() && !ak.enablelooping) {
                        V(N, function() {
                            P()
                        })
                    } else {
                        k(Math.abs(N), null, ad, C)
                    }
                    aZ.preventDefault()
                } else {
                    if (Math.abs(o) < 5 && !G.is_touchable_desktop()) {
                        if (ak.forcetouchmode) {
                            if (ay(aZ.target).attr("data-position") != null) {
                                aO(ay(aZ.target).attr("data-position"))
                            } else {
                                if (ay(aZ.target).parent().attr("data-position") != null) {
                                    aO(ay(aZ.target).parent().attr("data-position"))
                                }
                            }
                        } else {
                            if (ay(aZ.target).parent().attr("data-position") != null) {
                                if (N <= 5 && N >= -5) {
                                    V(N)
                                }
                                aO(ay(aZ.target).parent().attr("data-position"))
                            }
                        }
                    } else {
                        if (N <= 5 && N >= -5) {
                            V(N)
                        }
                    }
                }
            }
        };
        if (G.is_touchable_desktop()) {
            var aW = document.getElementsByClassName("jb-idx-thumbnail-container");
            for (var aU = 0; aU < aW.length; aU++) {
                var aY = aW[aU];
                aY.addEventListener("touchstart", aX, false);
                aY.addEventListener("touchmove", aT, false);
                aY.addEventListener("touchend", aV, false);
                aY.addEventListener("gesturestart", aX, false);
                aY.addEventListener("gesturechange", aT, false);
                aY.addEventListener("gestureend", aV, false)
            }
        } else {
            if (!ay.browser.msie) {
                M(".jb-idx-show-area").bind("touchstart", aX).bind("touchmove", aT).bind("touchend", aV)
            }
        }
        if (ak.forcetouchmode && !G.is_touchable_desktop()) {
            M(" .jb-idx-thumb, .jb-idx-thb-frame").mousedown(function(a0) {
                if (a0.which !== 1) {
                    return
                }
                var aZ = {
                    originalEvent: {
                        touches: [{}]
                    }
                };
                a0.preventDefault();
                aZ.preventDefault = function() {}
                ;
                aZ.originalEvent.touches[0].pageX = a0.screenX;
                aZ.originalEvent.touches[0].pageY = a0.screenY;
                ay(this).children(".jb-idx-thb-frame").css(aP());
                aX(aZ)
            }).mousemove(function(a0) {
                if (a0.which !== 1) {
                    aE = false;
                    return
                }
                if (!aE) {
                    return
                }
                var aZ = {
                    originalEvent: {
                        touches: [{}]
                    }
                };
                aZ.preventDefault = function() {}
                ;
                aZ.originalEvent.touches[0].pageX = a0.screenX;
                aZ.originalEvent.touches[0].pageY = a0.screenY;
                aT(aZ)
            }).mouseup(function() {
                if (!aE) {
                    return
                }
                var aZ = {};
                aZ.preventDefault = function() {}
                ;
                aZ.target = this;
                aV(aZ)
            }).mouseout(function() {
                if (!aE) {
                    return
                }
                var aZ = {};
                aZ.preventDefault = function() {}
                ;
                aZ.target = this;
                aV(aZ)
            })
        }
    };
    var v = function() {
        var aU = L * R;
        var aT = W * aA;
        return {
            height: aT,
            width: aU
        }
    };
    var ax = function(aZ, aY, aU, a5, aT) {
        var a1 = W * L * aZ;
        var a2 = W * L * (aZ + 1);
        var a3;
        if (X.length() < L) {
            a3 = X.length() * R
        } else {
            a3 = L * R
        }
        var aX = G.is_side_layout(ak) || (ak.usethumbdots && W * aA < G.get_nav_btn_size(ak));
        aY.append("<table class='jb-idx-thb-container jb-classifier-thumb-area table_page_" + aZ + " " + (aT ? aT : "") + "' style='left:" + aU + "px;" + (aX ? "height:100%;" : "") + "' ><tr><td style='text-align:center !important;width:auto !important;'><div class='jb-idx-thb-list' style='text-align:center !important;width:" + a3 + "px;margin-left: auto;margin-right: auto; margin-top:0; margin-bottom:0; padding:0;' ></div></td></tr></table>");
        var aW = M(".table_page_" + aZ + (aT ? "." + aT : "") + " .jb-idx-thb-list");
        var a4 = "";
        var a0 = X.get_range(a1, a2);
        for (var aV = 0; aV < a0.length; aV++) {
            a4 = ai(a0[aV], aW, a4)
        }
        aW.append(a4)
    };
    var y = function(aT) {
        if (G.is_earlier_ie()) {
            return ""
        }
        return aT.thumbcornerradius > 0 && aT.thumbcornerradius <= Math.min(aT.thumbwidth, aT.thumbheight) ? "border-radius:" + aT.thumbcornerradius + "px;" : ""
    };
    var aH = function() {
        if (ak.usethumbdots) {
            return "width:" + (R) + "px;height:" + (aA) + "px;padding:0;margin:" + I + "px 0 0 0;color:" + G.format_color(ak.thumbdotcolor) + ";"
        }
        return "overflow:hidden;width:" + (aa) + "px;height:" + (aw) + "px;padding:0;margin:" + (I + x) + "px " + parseInt(x) + "px " + x + "px " + parseInt(x) + "px;" + y(ak)
    };
    var i = function(aU, aT) {
        if (ak.usethumbdots) {
            return "padding:0;margin:" + x + "px;width:" + (aa) + "px;height:" + (aw) + "px;"
        }
        return (aT ? "display:none;" : "") + "position:relative;padding:0;left:" + aU.left + "px;top:" + aU.top + "px;width:" + aU.thumb_width + "px;height:" + aU.thumb_height + "px;"
    };
    var J = function() {
        var aV = ak.thumbpreloading.toUpperCase();
        if (aV != "ALL") {
            return
        }
        var aT = X.get_images();
        for (var aU = 0; aU < aT.length; aU++) {
            ah(aT[aU])
        }
    };
    var F = function() {
        return ak.thumbframecolor ? G.format_color(ak.thumbframecolor) : ""
    };
    var D = function(aT) {
        if (aT) {
            return (ak.thumbframecolor && ak.thumbselectedframewidth ? "border-color:" + G.format_color(ak.thumbframecolor) + ";" : "") + (G.is_ie8() ? ak.thumbframeopacity + ";" : "")
        }
        return (ak.thumbframecolor && ak.thumbframewidth ? "border-color:" + G.format_color(ak.thumbframecolor) + ";" : "") + (G.is_ie8() ? ak.thumbframeopacity + ";" : "")
    };
    var aB = function() {
        return false
    };
    var c = function(aX) {
        if (ak.usethumbdots) {
            return ""
        }
        var aT = ay("#" + d + "_thumb_" + aX.position + ".jb-thm-thumb-selected").length > 0 && G.is_large_screen_mode(ak);
        var aV = aT ? D() : "";
        var aW = aT ? ak.thumbselectedframewidth : ak.thumbframewidth;
        var aY = aT ? ak.thumbselectedframewidth : ak.thumbframewidth;
        var aU = 0;
        if (aB() && aY > 0) {
            aU = 1
        }
        return '<div class="jb-idx-thb-frame" style="position:absolute;border-style:solid;' + aV + ";border-width:" + (aY + aU) + "px;width:" + (aa - 2 * aW - aU) + "px;height:" + (aw - 2 * aW - aU) + "px;left:0px;top:0;" + D(aT) + y(ak) + '"></div>'
    };
    var aM = function() {
        if (s) {
            return E
        }
        return ""
    };
    var ah = function(aT) {
        if (aT.isPreloadingThumbnail) {
            return
        }
        aT.isPreloadingThumbnail = true;
        ao.position_2_fill_image(aa, aw, aT.thumbURL, function(aV) {
            aT.thumb_loaded = 1;
            if (aa === aw && aV.imageExpectedWidth === aV.imageExpectedHeight) {
                aT.thumb_width = aa;
                aT.thumb_height = aw;
                aT.imageExpectedWidth = aw;
                aT.imageExpectedHeight = aw;
                aT.top = 0;
                aT.left = 0
            } else {
                aT.thumb_width = aV.imageWidth;
                aT.thumb_height = aV.imageHeight;
                aT.imageExpectedWidth = aV.imageExpectedWidth;
                aT.imageExpectedHeight = aV.imageExpectedHeight;
                aT.top = aV.imageTop;
                aT.left = aV.imageLeft
            }
            ay("#" + d + "_thumb_" + aT.position).html("<img class='jb-thm-thumb-image jb-thm-thumb-preloaded' src='" + aT.thumbURL + "' style='" + aM() + i(aT, true) + y(ak) + "' alt='" + aT.thumbURL + "'>" + c(aT));
            var aU = ay("#" + d + "_thumb_" + aT.position + " img");
            if (!aU.is(":visible")) {
                f.utils.fade_in(f.config, aU, 1000 * f.config.fadetime, false, null, "indexpanel")
            }
            X.update_image(aT);
            ay("#" + d + "_thumb_" + aT.position + " img").disableSelection()
        })
    };
    var aN = function(aT) {
        return G.get_shadow_style_string(aT.thumbshadowcolor, aT.thumbshadowcolora, aT.thumbshadowblur)
    };
    var ai = function(aV, aU, aT) {
        if (ak.usethumbdots) {
            return aT + "<div data-position='" + aV.position + "' id='" + d + "_thumb_" + aV.position + "' class='jb-idx-thumb jb-thm-thumb-dot' style='" + aH() + "'><div class='jb-thm-thumb-image' style='" + i(aV) + "'>" + ((ay.browser.msie && ay.browser.version < 9) ? "&#xe015;" : "") + "</div></div>"
        }
        if (aV.thumb_loaded) {
            return aT + "<div data-position='" + aV.position + "' id='" + d + "_thumb_" + aV.position + "' class='jb-idx-thumb' style='" + aH() + aN(ak) + "'><img class='jb-thm-thumb-image' src='" + aV.thumbURL + "' style='" + aM() + i(aV) + y(ak) + "' alt='" + aV.thumbURL + "'>" + c(aV) + "</div>"
        } else {
            aU.append(aT);
            aU.append("<div data-position='" + aV.position + "' id='" + d + "_thumb_" + aV.position + "' class='jb-idx-thumb' style='" + aH() + aN(ak) + "'>" + ak.thumb_load_placeholder + "</div>");
            ah(aV);
            return ""
        }
    };
    var aI = function() {
        return (aL <= 0) ? aS - 1 : aL - 1
    };
    var U = function() {
        return (aL >= aS - 1) ? 0 : aL + 1
    };
    var P = function() {
        aC(aL)
    };
    var av = function(aT) {
        if (aT < 0 || aT >= aS) {
            return
        }
        S(aT)
    };
    var au = function(aT, aU, aX, aV) {
        if (aU) {
            ad = aU
        }
        if (aX) {
            C = aX
        }
        ab();
        var aW = parseInt(aT / (L * W));
        S(aW, aV);
        w(aT);
        if (!G.is_large_screen_mode(ak)) {
            M(".jb-idx-title").show()
        }
    };
    var B = function() {
        aC(aI())
    };
    var Q = function() {
        aC(U())
    };
    var w = function(aW) {
        q = aW;
        var aV = aa - (2 * ak.thumbselectedframewidth);
        var a1 = aw - (2 * ak.thumbselectedframewidth);
        var aT = aa - (2 * ak.thumbframewidth);
        var a0 = aw - (2 * ak.thumbframewidth);
        var aZ = G.format_color(ak.navbuttonbackcolor);
        if (ak.usethumbdots) {
            aZ = G.format_color(ak.thumbdotcolor)
        }
        M(".jb-idx-thumb").removeClass("jb-thm-thumb-selected").children("div").css({
            color: aZ
        });
        var aU = (aB() && ak.thumbframewidth > 0 ? 1 : 0);
        var aY = (aB() && ak.thumbselectedframewidth > 0 ? 1 : 0);
        M(".jb-idx-thumb .jb-idx-thb-frame").css({
            width: (aT - aU) + "px",
            height: (a0 - aU) + "px",
            "border-width": ak.thumbframewidth + aU
        });
        var aX = ay("#" + d + "_thumb_" + aW).addClass("jb-thm-thumb-selected").addClass("jb-thumb-visited").children("div").css({
            color: G.format_color(ak.thumbdothovercolor)
        });
        ay("#" + d + "_thumb_" + aW + " .jb-idx-thb-frame").css({
            width: aV + "px",
            height: (a1 - aY) + "px",
            "border-width": (ak.thumbselectedframewidth + aY) + "px",
            "border-color": F()
        });
        if (ak.thumbframecolor) {
            aX.children(".jb-idx-thb-frame").css({
                "border-color": G.format_color(ak.thumbframecolor)
            })
        }
    };
    var aP = function() {
        var aT = (aB() && ak.thumbselectedframewidth > 0 ? 1 : 0);
        return {
            height: ak.thumbheight - 2 * ak.thumbselectedframewidth - aT,
            width: ak.thumbwidth - 2 * ak.thumbselectedframewidth,
            "border-width": ak.thumbselectedframewidth + aT,
            "border-color": G.format_color(ak.thumbframecolor)
        }
    };
    var al = function() {
        return H().width + 2 * ao.get_stage_padding(M("").width(), M("").height(), ak) - ak.thumbpadding
    };
    var S = function(aW, aU) {
        M(" .jb-idx-thb-container").remove();
        var a3 = M(".jb-idx-show-area");
        var aT = H();
        a3.css({
            top: aT.top,
            left: aT.left + parseInt(ak.thumbpadding / 2),
            width: aT.width - parseInt(ak.thumbpadding),
            height: aT.height
        });
        if (M(".table_page_" + aW).length == 0) {
            ax(aW, a3, 0, C, e)
        }
        var aY = al();
        if (ak.enablelooping || aW < aS - 1) {
            var a6 = (aW >= aS - 1) ? 0 : aW + 1;
            ax(a6, a3, +aY, C, am)
        }
        if (ak.enablelooping || aW > 0) {
            var aZ = (aW <= 0) ? aS - 1 : aW - 1;
            ax(aZ, a3, -aY, C, af)
        }
        A(aW);
        w(q);
        var a1 = M(" .jb-idx-thumb");
        if (!ak.forcetouchmode) {
            var a9 = function(bb) {
                var bc = M(".jb-idx-thb-list div.jb-idx-thumb .jb-thm-thumb-image");
                bc.stop(true, true).show();
                if (!G.is_earlier_ie()) {
                    bc.css({
                        opacity: 1
                    })
                }
                z();
                aO(bb)
            };
            a1.click(function(bb) {
                M("").focus();
                if (a) {
                    return false
                }
                s = false;
                bb.preventDefault();
                var bc = parseInt(ay(this).attr("data-position"));
                if (ak.autofullscreenexpand) {
                    z();
                    G.show_real_fullscreen(ak.containerid);
                    f.detail_panel.set_photo_position(bc);
                    f.detail_panel.set_visible_flag(true);
                    f.index_panel.set_visible_flag(false);
                    window.setTimeout(function() {
                        if (f.config.showimageoverlay.toUpperCase() != "NEVER") {
                            f.setOverlayFlag(true)
                        }
                        f.features.buttonbar.setPosition();
                        f.showImage(bc, 0)
                    }, 300);
                    return false
                }
                a9(bc);
                return false
            });
            if (ak.usethumbdots) {
                var aX = G.format_color(ak.thumbdothovercolor);
                var a7 = G.format_color(ak.thumbdotcolor);
                M(" .jb-idx-thumb .jb-thm-thumb-image").hover(function() {
                    ay(this).css({
                        color: aX
                    })
                }, function() {
                    var bb = a7;
                    if (ay(this).parent(".jb-thm-thumb-selected").length > 0) {
                        bb = aX
                    }
                    ay(this).css({
                        color: bb
                    })
                })
            }
            if (!I) {
                a1.mousedown(function(bb) {
                    if (bb.preventDefault) {
                        bb.preventDefault()
                    }
                    ay(this).children(".jb-idx-thb-frame").css(aP())
                }).bind("touchstart", function() {
                    ay(this).children(".jb-idx-thb-frame").css(aP())
                });
                ay(".jb-idx-thb-frame").mousedown(function(bb) {
                    if (bb.preventDefault) {
                        bb.preventDefault()
                    }
                    ay(this).css(aP())
                })
            }
            if (ak.changeimageonhover) {
                a1.mouseenter(function() {
                    var bb = ay(this).attr("data-position");
                    a9(bb)
                }, null)
            }
        } else {
            ar()
        }
        if (ak.thumbframecolor) {
            var a8 = aa - 2 * ak.thumbhoverframewidth;
            var aV = aw - 2 * ak.thumbhoverframewidth;
            var a0 = aa - 2 * ak.thumbframewidth;
            var a4 = aw - 2 * ak.thumbframewidth;
            var a2 = G.is_large_screen_mode(ak);
            var ba = (aB() && ak.thumbhoverframewidth > 0 ? 1 : 0);
            var a5 = (aB() && ak.thumbframewidth > 0 ? 1 : 0);
            a1.hover(function() {
                var bb = ay(this);
                if (bb.is(".jb-thm-thumb-selected") && a2) {
                    return
                }
                bb.children(".jb-idx-thb-frame").css({
                    width: a8 - ba,
                    height: aV - ba,
                    "border-color": G.format_color(ak.thumbframecolor),
                    "border-width": ak.thumbhoverframewidth + ba
                })
            }, function() {
                var bb = ay(this);
                if (bb.is(".jb-thm-thumb-selected") && a2) {
                    return
                }
                bb.children(".jb-idx-thb-frame").css({
                    width: a0 - a5,
                    height: a4 - a5,
                    "border-color": ak.thumbframewidth ? G.format_color(ak.thumbframecolor) : "transparent",
                    "border-width": ak.thumbframewidth + a5
                })
            })
        }
        M(".jb-classifier-thumb-area").disableSelection();
        aL = aW;
        if (typeof az == "function") {
            az(aU)
        }
    };
    var aR = function() {
        var aU = X.length();
        if (W * L <= aU) {
            return {
                row: W,
                col: L
            }
        }
        if (L >= aU) {
            return {
                row: 1,
                col: aU
            }
        }
        var aT = (aU % L == 0 ? 0 : 1);
        return {
            row: parseInt(aU / L) + aT,
            col: L
        }
    };
    var A = function(aZ) {
        var a0 = H();
        var a1 = aR();
        var aY = a1.row * (aA);
        var aT = parseInt((C - aY) / 4);
        if (aT < 30 && aT > 15 && a1.row >= a1.col) {
            aT -= 10
        }
        if (C <= aT || aT < 0) {
            aT = 0
        }
        var aU = parseInt((ad - (a1.col * R)) / 2 + parseInt(x / 2));
        if (aU < 0) {
            aU = 0
        }
        M(".jb-idx-title").css({
            left: aU + "px",
            top: aT + "px"
        });
        M(".jb-idx-ssm-title-wrapper").css({
            width: (a0.width - 2 * ak.thumbpadding)
        });
        var aW = ad / 2 - 18;
        if (aW < aU) {
            aW = aU
        }
        var aX;
        if (G.is_large_screen_mode(ak)) {
            var aV = G.is_side_layout(ak) && ak.thumbnavposition.toUpperCase() === "BOTTOM" && ak.maxthumbcolumns <= 1 ? 0 : ak.thumbpadding;
            aX = parseInt(a0.top + (G.is_side_layout(ak) ? a0.height : aY) + aV - ak.thumbpadding / 2);
            if (ak.usethumbdots && ak.showpagingtext) {
                aX += (G.is_side_layout(ak) ? 25 : -5)
            }
        } else {
            aX = parseInt(a0.top + aY + ak.thumbpadding / 2 + (C - aY > 0 && ak.thumbnavposition.toUpperCase() != "BOTTOM" ? (C - aY) / 2 : 0))
        }
        if (aX <= 0) {
            aX = 0
        }
        M(".jb-idx-thb-list-page-number").css({
            left: aW + "px",
            top: aX + "px"
        }).html((aZ + 1) + " " + ak.languagelistall.pgnum + " " + aS);
        if (ak.textcolor) {
            M(".jb-idx-title, .jb-idx-thb-list-page-number, .jb-idx-ssm-title-wrapper").css({
                color: G.format_color(ak.textcolor)
            })
        } else {
            if (ay.browser.msie && ay.browser.version < 8) {
                M(".jb-idx-ssm-title-wrapper").css({
                    color: "#ffffff"
                })
            }
        }
        if (ak.textshadowcolor) {
            M(".jb-idx-title, .jb-idx-thb-list-page-number").css({
                "text-shadow": G.get_text_shadow_style(ak.textshadowcolor, ak.textshadowcolora, true)
            })
        }
        if (f.config.galleryfontface) {
            M(".jb-idx-title, .jb-idx-thb-list-page-number, .jb-idx-ssm-title-wrapper").css({
                "font-family": f.config.galleryfontface
            })
        }
    };
    var aC = function(aT) {
        ab();
        S(aT)
    };
    var V = function(aU, aT) {
        if (!aU) {
            return
        }
        var aV = 1000 * ak.smallthumbslidetime;
        aV = aV * ((400 - aU / 2) / 400);
        w(q);
        M("table.jb-idx-thb-container").animate({
            left: "+=" + (-aU),
            avoidTransforms: !ak.use_webkit_transform,
            useTranslate3d: ak.use_3d_transform
        }, aV, "", aT)
    };
    var ap = function(aY, aX, a0, aZ, aT) {
        var aU = -1;
        if (aZ) {
            ad = aZ
        }
        if (aT) {
            C = aT
        }
        var a1 = function() {
            a = false;
            if (aY) {
                if (aU === U()) {
                    Q()
                }
            } else {
                if (aU === aI()) {
                    B()
                }
            }
            aU = -1;
            if (typeof a0 == "function") {
                a0()
            }
        };
        aU = aY ? U() : aI();
        if (typeof (aX) == "undefined") {
            aX = 0
        }
        if (!a) {
            a = true;
            var aV = 1000 * ak.smallthumbslidetime;
            if (aX > 0) {
                aV = aV * ((400 - aX / 2) / 400)
            }
            var aW = al();
            M("table.jb-idx-thb-container").animate({
                left: (aY ? "-=" : "+=") + (aW - aX),
                avoidTransforms: !ak.use_webkit_transform,
                useTranslate3d: ak.use_3d_transform
            }, aV, "easeOutQuart");
            window.setTimeout(function() {
                a1()
            }, aV)
        } else {
            M("table.jb-idx-thb-container").stop();
            a1()
        }
    };
    var k = function(aU, aW, aT, aV) {
        s = false;
        ap(true, aU, aW, aT, aV)
    };
    var at = function(aU, aW, aT, aV) {
        s = false;
        ap(false, aU, aW, aT, aV)
    };
    var Z = function() {
        s = false
    };
    var ac = function(aU, aT, aW, aV) {
        if (aU) {
            ad = aU
        }
        if (aT) {
            C = aT
        }
        M(".jb-panel-index").css({
            width: aU,
            height: aT,
            top: aW,
            left: aV
        })
    };
    var n = function() {
        s = false;
        a = false
    };
    var aJ = function() {
        if (aL + 1 >= aS) {
            return true
        }
        return false
    };
    var r = function() {
        if (aL <= 0) {
            return true
        }
        return false
    };
    var K = function() {
        return aL
    };
    var Y = function(aT) {
        if (aT) {
            M(".jb-idx-title").show();
            M(".jb-classifier-link-wrapper.jb-classifier-thumb-area").show()
        } else {
            M(".jb-idx-title").hide();
            M(".jb-classifier-link-wrapper.jb-classifier-thumb-area").hide()
        }
    };
    var b = function() {
        var aT = W * aA;
        if (aT < G.get_nav_btn_size(ak)) {
            aT = G.get_nav_btn_size(ak)
        }
        return aT
    };
    var ag = function(aT) {
        a = true;
        window.setTimeout(function() {
            a = false
        }, aT)
    };
    var t = function(aT) {
        aD = aT
    };
    var m = function() {
        return aD
    };
    return {
        initialize: ae,
        show_current_page: P,
        show_prev_page: B,
        show_next_page: Q,
        move_to_next_page: k,
        move_to_prev_page: at,
        show_page_4_image_position: au,
        show_page_by_page_index: av,
        is_last_page: aJ,
        is_first_page: r,
        get_index: K,
        repaint: n,
        get_thumblist_size: v,
        display_gallery_top: Y,
        get_image_index_range: aK,
        set_thumbnail_visited: w,
        get_thumb_height: b,
        yield_4_transition: ag,
        synchronize_config: p,
        get_show_area_position: H,
        set_visible_flag: t,
        is_visible: m,
        setContext: aq,
        cleanup_initial_load_flag: Z,
        restoreScrollPosition: aj,
        getCurrentDisplayingThumbCount: j,
        set_container_size: ac
    }
};
var juicebox_gallery_detail_panel = function(ac) {
    var ah, a, aq, R, X, D, ab, k, M, an, C;
    var aw;
    var ag = ac;
    var ay;
    var ax = null;
    var ar = -1;
    var w = 0;
    var U, z;
    var av;
    var ak = false;
    var ae = false;
    var aA = 12;
    var B = 18;
    var ao = false;
    var d, I;
    var G = false;
    var V = function(aB) {
        ae = true;
        ah = aB.jquery;
        a = aB.document_id;
        aq = aB.container;
        aw = aB.caption_container;
        X = aB.config;
        D = aB.utils;
        ab = aB.sizing;
        R = aB.glymng;
        k = aB.before_draw_event_callback;
        M = aB.finish_draw_event_callback;
        an = aB.touch_event_callback;
        C = aB.caption_complete_callback;
        av = 1000 * X.imagetransitiontime;
        if (av <= 0) {
            av = 10
        }
        U = aB.current_width;
        z = aB.current_height;
        ap(0);
        ay = aB.debug
    };
    var ad = function(aB) {
        d = aB;
        I = d._
    };
    var W = function() {
        if (!ax) {
            return 0
        }
        return ax.position
    };
    var v = function() {
        return ax
    };
    var ap = function(aB) {
        ax = d.gallery_manager().get_image(aB)
    };
    var t = function(aF, aD) {
        if (!aF) {
            aF = X.captionposition.toUpperCase()
        }
        if (aF === "BOTTOM" || aF === "NONE" || aF === "BELOW_THUMBS") {
            return
        }
        if (typeof (C) != "function") {
            return
        }
        var aH = I(".caption_" + aD + " a");
        var aB = I(".caption_" + aD + " .jb-caption").height();
        if (aH.length > 0 && aB === 0) {
            aB = 50
        }
        aB = (aB && aH.length > 0 ? aB + 2 * aA : 0);
        var aC, aG, aE;
        if (aF === "BELOW_IMAGE" || aF === "OVERLAY_IMAGE") {
            aC = R.get_image(aD);
            if (!aC.loaded) {
                return
            }
            aG = ab.get_image_display_size(aC, U, z, X);
            aE = (aG.top + aG.height + ab.get_image_framewidth(U, z, X));
            if (aE > z) {
                aE = z - ab.get_image_framewidth(U, z, X) - X.imagepadding
            }
            C(aE - (aF === "OVERLAY_IMAGE" ? aB : 0))
        } else {
            C(z - aB)
        }
    };
    var au = function(aL, aN, aF, aE, aD) {
        d.index_panel.cleanup_initial_load_flag();
        var aP = ar > -1 ? ar : ax.position;
        var aM = -1;
        if (typeof (aE) != "undefined") {
            aM = aE
        } else {
            if (aL && R.get_next_image(aP)) {
                aM = R.get_next_image(aP).position
            } else {
                if (!aL && R.get_previous_image(aP)) {
                    aM = R.get_previous_image(aP).position
                }
            }
        }
        if (aM < 0) {
            return
        }
        var aK;
        var aT = X.captionposition.toUpperCase();
        if (typeof (aF) === "undefined") {
            aF = true
        }
        if (aT === "NONE" || (",BOTTOM,BELOW_IMAGE,OVERLAY_IMAGE,BELOW_THUMBS,".indexOf("," + aT + ",") < 0 && X.showimageoverlay.toUpperCase() === "NEVER")) {
            aF = false
        }
        var aQ = X.imagetransitiontype.toUpperCase();
        var aR = function(aX) {
            if (aT === "NONE") {
                return
            }
            if (X.showimageoverlay.toUpperCase() === "NEVER" && aT != "BOTTOM" && aT != "BELOW_THUMBS" && aT != "BELOW_IMAGE") {
                return
            }
            if (!X.slidecaption && (aF || aT === "BOTTOM" || aT === "BELOW_IMAGE")) {
                D.fade_in(X, I(".jb-cap-frame.jb-status-fading"), aX);
                D.fade_in(X, aw, aX);
                L(aT, aM, aX + 50)
            }
        };
        var aJ = function(aY) {
            if (aF) {
                var aX = aY;
                if (ah.browser.msie && ah.browser.version >= 7 && ah.browser.version < 8) {
                    aX = 0
                }
                if (!aX) {
                    aC.addClass("jb-status-fading").hide()
                } else {
                    D.fade_out(X, aC.addClass("jb-status-fading"), aX, null)
                }
            } else {
                aC.removeClass("jb-status-fading")
            }
        };
        var aW = 0;
        var aS = function(aX) {
            k(aM);
            b(aM, aX, null, aF, true);
            if (I(".jb-dt-main-image-" + aM).css("opacity") == 0.01) {
                I(".jb-dt-main-image-" + aM).css("opacity", 1)
            }
            if (aW) {
                window.clearTimeout(aW)
            }
            aW = 0;
            if (aX) {
                aW = window.setTimeout(function() {
                    M(aM)
                }, aX + 50)
            } else {
                M(aM)
            }
            aR(aX);
            ar = -1
        };
        var aI = function(aY, aZ) {
            if (aW) {
                window.clearTimeout(aW)
            }
            aW = 0;
            var aX = ar > -1 ? ar : aM;
            if (!aD) {
                k(aX)
            }
            b(aX, 0, null, aF, true);
            if (!aD && !aZ) {
                M(aX)
            }
            aR(aY);
            ar = -1
        };
        if (ar > -1) {
            aK = I(" .jb-panel-detail .jb-dt-main-frame, .jb-cap-frame");
            aK.stop(false, false);
            I(".jb-cap-frame.caption_" + aM).stop(false, false);
            I(".jb-dt-main-image-" + aP).stop(false, false);
            if (w) {
                window.clearTimeout(w);
                w = 0
            }
            aI(0, true)
        }
        if (typeof (aN) == "undefined") {
            aN = 0
        }
        ar = aM;
        var aU = 1000 * X.imagetransitiontime;
        if (aN > 0) {
            aU = aU * ((400 - aN / 2) / 400)
        }
        var aO = parseInt(U) + parseInt(X.minimagegap) + (2 * ab.get_stage_padding(I("").width(), I("").height(), X));
        var aH = D.is_in_iframe() && D.is_chrome();
        if (aD || !aH) {
            k(aM)
        }
        var aC = I(".jb-cap-frame.caption_" + aP);
        aK = I(" .jb-panel-detail .jb-dt-main-frame");
        aK.stop();
        if (w) {
            window.clearTimeout(w);
            w = 0
        }
        var aV = aU / 2;
        if (X.captionposition.toUpperCase() == "OVERLAY_IMAGE") {
            aV = 0
        }
        if (D.is_swipable_device() && aE == null) {
            q(0);
            D.clean_up_transition(aK);
            aK.animate({
                left: (aL ? "-=" : "+=") + (aO - aN),
                avoidTransforms: !X.use_webkit_transform,
                useTranslate3d: X.use_3d_transform
            }, aU, "easeInOutQuart", function() {
                aI(aU / 2)
            });
            aJ(aV)
        } else {
            if (aQ === "NONE" || aD) {
                aC.hide();
                aI(0)
            } else {
                if (aQ === "CROSS_FADE") {
                    var aG = ax;
                    ax = R.get_image(aM);
                    aK = I(".jb-dt-main-image-" + aP);
                    if (aG.width != ax.width || aG.height != ax.height) {
                        var aB = I(".jcbx-glry-classic").css("background-color");
                        aK.css({
                            "background-color": aB
                        })
                    }
                    if (ax.loaded) {
                        aq.append(at(ax, 0, true, false, 1, true));
                        aw.append(e(ax, aw.width(), aw.height(), 0, false, 500));
                        D.fade_out(X, aK, aU, null, "images");
                        w = window.setTimeout(function() {
                            var aX = ar > -1 ? ar : aM;
                            if (aH) {
                                k(aX)
                            }
                            b(aX, 0, null, aF, true);
                            M(aX);
                            aR(aU / 2);
                            w = 0
                        }, aU + 100);
                        aJ(aU)
                    } else {
                        aI(aU / 2)
                    }
                } else {
                    if (aQ === "FADE" || ((aE || aE === 0) && aQ != "FADE" && aQ != "CROSS_FADE" && aQ != "NONE")) {
                        q(aU / 2);
                        if (aK.length > 0) {
                            D.stop_fading("images");
                            D.fade_out(X, aK, aU / 2, function() {
                                aS(aU / 2)
                            }, "images", true);
                            aJ(aU / 2)
                        } else {
                            if (aE || aE === 0) {
                                w = window.setTimeout(function() {
                                    w = 0;
                                    aS(aU / 2)
                                }, aU / 2)
                            }
                        }
                        aJ(aU / 2)
                    } else {
                        q(0);
                        D.clean_up_transition(aK);
                        aK.animate({
                            left: (aL ? "-=" : "+=") + (aO - aN),
                            avoidTransforms: !X.use_webkit_transform,
                            useTranslate3d: X.use_3d_transform
                        }, aU, (D.is_earlier_ie() ? "easeOutQuart" : "easeInOutQuart"), function() {
                            aI(aU / 2)
                        });
                        aJ(aV)
                    }
                }
            }
        }
    };
    var az = function(aC, aB) {
        au(true, aC, aB)
    };
    var P = function(aD) {
        if (!aD) {
            return
        }
        var aB = 1000 * X.imagetransitiontime;
        aB = aB * ((400 - aD / 2) / 400);
        var aC;
        aC = I(" .jb-panel-detail .jb-dt-main-frame");
        aC.stop();
        D.clean_up_transition(aC);
        aC.animate({
            left: "+=" + (-aD),
            avoidTransforms: !X.use_webkit_transform,
            useTranslate3d: X.use_3d_transform
        }, aB, "", null)
    };
    var F = function(aC, aB) {
        au(false, aC, aB)
    };
    var r = function() {
        if (X.textcolor) {
            I(".jb-cap-frame a").css({
                color: D.format_color(X.textcolor)
            })
        }
        if (X.textshadowcolor) {
            I(".jb-cap-frame a").css({
                "text-shadow": D.get_text_shadow_style(X.textshadowcolor, X.textshadowcolora, true)
            })
        }
    };
    var T = function(aC, aB, aE, aD) {
        if (aC) {
            U = aC
        }
        if (aB) {
            z = aB
        }
        I(".jb-panel-detail").css({
            width: aC,
            height: aB,
            top: aE,
            left: aD
        })
    };
    var b = function(aS, aR, aJ, aO, aB, aL, aH) {
        if (aL) {
            U = aL
        }
        if (aH) {
            z = aH
        }
        if (aL || aH) {
            I(".jb-dt-main-frame").css({
                width: U,
                height: z
            })
        }
        if (typeof (aO) === "undefined") {
            aO = true
        }
        var aP = parseInt(U) + parseInt(X.minimagegap) + (2 * ab.get_stage_padding(I("").width(), I("").height(), X));
        ax = R.get_image(aS);
        ar = -1;
        var aI = I(".jb-panel-detail");
        if (aI.length > 0 && !aI.is(":visible")) {
            aI.show()
        }
        var aD = R.get_image(aS);
        var aK = R.get_previous_image(aS);
        var aN = R.get_next_image(aS);
        var aF = aR > 0;
        var aQ = X.imagetransitiontype.toUpperCase();
        if (aQ != "FADE" && aQ != "CROSS_FADE" && aQ != "NONE" && R.length() > 2) {
            aq.children(":not(.jb-dt-main-image-" + aS + ")").remove()
        } else {
            aq.children().remove()
        }
        var aE = aq.children(".jb-dt-main-image-" + aS);
        if (aE.length <= 0) {
            aq.append(at(aD, 0, true, aF));
            aE = aq.children(".jb-dt-main-image-" + (aD ? aD.position : ""))
        } else {
            aE.css({
                left: 0
            })
        }
        if (aD.loaded && (X.imagenavposition.toUpperCase() === "IMAGE" || X.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE")) {
            var aG = ab.get_image_display_size(aD, U, z, X);
            N(aG, av / 2)
        }
        if (aK) {
            aE.before(at(aK, -aP, false, false))
        }
        if (aN) {
            aE.after(at(aN, aP, false, false))
        }
        if (!aE.is(":visible")) {
            if (!ah.browser.msie || ah.browser.version >= 10) {
                aE.show().css({
                    opacity: 0.01
                })
            }
            D.fade_in(X, aE, aR, false, null, "captions")
        } else {
            if (aR) {
                if (aE.css("opacity") < 1) {
                    if (!ah.browser.msie || ah.browser.version >= 10) {
                        aE.show().css({
                            opacity: 0.01
                        })
                    }
                    D.fade_in(X, aE, aR, false, null, "captions")
                }
            } else {
                aE.css({
                    opacity: 1
                })
            }
        }
        var aT = aw.width();
        var aC = aw.height();
        if (aO === true) {
            if (aF || aB) {
                if (ah.browser.msie || D.is_firefox3()) {
                    aw.hide()
                } else {
                    D.fade_out(X, aw, 0)
                }
            } else {
                if (ax.loaded) {
                    D.fade_in(X, aw, 0)
                }
            }
        } else {
            aw.hide()
        }
        Y(aD);
        var aM = aT + parseInt(X.minimagegap) + ab.get_side_panel_width(X);
        aw.html(e(aK, aT, aC, -aM, aO) + e(aD, aT, aC, 0, aO) + e(aN, aT, aC, aM, aO));
        t("", aD.position);
        r();
        if (X.captionbackcolor) {
            I(".jb-caption").css({
                "background-color": D.format_color(X.captionbackcolor)
            })
        }
        if (aR > 0) {
            D.stop_fading("images");
            D.fade_in(X, I(".jb-dt-main-image-" + aD.position), aR, false, aJ, "images", true);
            if (aO) {
                D.fade_in(X, aw, aR, false, null, "captions")
            }
        } else {
            if (aO && !aB) {
                aw.show()
            }
        }
    };
    var l = function(aC, aB) {
        D.fade_out(X, I(".jb-dt-main-image-" + ax.position), aC, aB);
        D.fade_out(X, aw, aC)
    };
    var E = function(aB) {
        if (aB >= R.length()) {
            aB = R.length() - 1
        }
        if (aB < 0) {
            return 0
        }
        return aB
    };
    var n = function(aC, aE) {
        var aB = R.get_range(E(aC), E(aE));
        for (var aD = 0; aD < aB.length; aD++) {
            Q(aB[aD])
        }
    };
    var Y = function(aE) {
        if (!aE.loaded) {
            return
        }
        var aC = X.captionposition.toUpperCase();
        if (aC !== "OVERLAY_IMAGE") {
            if (aC === "BELOW_THUMBS") {
                return
            }
            if (aC === "BELOW_IMAGE") {
                aw.css({
                    overflow: "visible"
                })
            }
            return
        }
        var aD = ab.get_image_display_size(aE, U, z, X);
        var aF = aD.top + aD.frameHeight - X.maxcaptionheight + X.framewidth;
        if (aF < 0) {
            aF = 0
        }
        var aG = parseInt(aq.css("top"));
        aF += aG;
        var aB = parseInt(I("").height()) - aG - aD.top - aD.frameHeight - X.framewidth;
        aw.css({
            top: aF,
            bottom: aB,
            overflow: "hidden"
        })
    };
    var aa = function(aC, aB) {
        if (!aC) {
            aC = X.captionposition.toUpperCase()
        }
        if (aC != "BELOW_THUMBS" || !D.is_side_layout(X)) {
            return B
        }
        var aE = ag.get_show_area_position();
        var aD = aE.left + X.thumbpadding - (aB ? 72 : 0);
        if (aD < B) {
            aD = B
        }
        return aD
    };
    var A = function(aG) {
        var aE = I(".caption_" + aG.position + " .jb-caption").height(), aB;
        var aD = X.captionposition.toUpperCase();
        var aC = 140;
        if (aD != "OVERLAY_IMAGE") {
            aB = aC
        } else {
            if (aG.loaded) {
                if (!i(aG)) {
                    aB = 0;
                    aE = 0
                } else {
                    var aF = ab.get_image_display_size(aG, U, z, X);
                    aB = aF.width;
                    aE = aF.height
                }
            } else {
                return null
            }
        }
        if (aB < 100 || aE < I(".caption_" + aG.position + " .jb-caption").height()) {
            return {
                display: "none"
            }
        } else {
            if (aB < aC) {
                return {
                    display: "block",
                    padding: "0"
                }
            } else {
                return {
                    display: i(aG) ? "block" : "none",
                    "padding-top": aA + "px",
                    "padding-right": aa(aD, true) + "px",
                    "padding-left": aa(aD) + "px",
                    "padding-bottom": (Z() ? aA : (aA + 18)) + "px"
                }
            }
        }
    };
    var h = function(aE) {
        var aD = A(aE);
        if (!aD) {
            return ""
        }
        var aB = "";
        for (var aC in aD) {
            if (!aC) {
                continue
            }
            aB += aC + ":" + aD[aC] + ";"
        }
        return aB
    };
    var al = function(aG, aC) {
        if (!aG) {
            return
        }
        var aD = X.captionposition.toUpperCase();
        if (aD !== "BELOW_IMAGE" && aD !== "OVERLAY_IMAGE") {
            return
        }
        var aE = parseInt(aw.width()) + parseInt(X.minimagegap) + ab.get_side_panel_width(X);
        var aF = (aG.position - ax.position) * aE;
        var aB = A(aG);
        if (aB) {
            I(".caption_" + aG.position + " .jb-caption").css(aB)
        }
        I(".jb-cap-frame.caption_" + aG.position).attr("style", S(aG, aw.width(), aw.height(), aF, aC))
    };
    var x = function() {
        var aB = X.captionposition.toUpperCase();
        return (aB != "BELOW_IMAGE" && aB != "BOTTOM") ? false : true
    };
    var S = function(aD, aL, aG, aC, aJ) {
        var aE = x();
        var aM = "position:absolute;";
        var aN, aF;
        var aI = X.captionposition.toUpperCase();
        var aB = X.imagetransitiontype.toUpperCase();
        if (aB === "CROSS_FADE" && !aJ && aD.loaded) {
            aM += (ah.browser.msie || D.is_firefox3()) ? "display:none;" : "opacity:0;"
        }
        if (aI === "BELOW_IMAGE" || aI === "OVERLAY_IMAGE") {
            if (!aD.loaded) {
                aN = (aI === "OVERLAY_IMAGE") ? "" : "top:" + (aG - X.maxcaptionheight > 0 ? aG - X.maxcaptionheight : 0) + "px;";
                return aM + (aE ? "height:100%;" : "") + "width:100%;left:" + aC + "px;display:none;" + aN
            }
        } else {
            if ((aI !== "OVERLAY_IMAGE" && !aE) || !aD.loaded || aI === "BOTTOM") {
                return aM + (aE ? "height:100%;" : "") + "width:" + aL + "px;left:" + aC + "px;"
            }
        }
        var aK = ab.get_image_display_size(aD, U, z, X);
        var aH = ab.get_image_framewidth(U, z, X);
        if (aI === "OVERLAY_IMAGE") {
            aN = X.imagecornerradius > 0 ? K(X) : "";
            aF = "width:" + (aK.frameWidth) + "px;";
            aC += aH
        } else {
            aN = "top:" + (aK.top + aK.frameHeight + 2 * aH + ab.get_image_padding(U, z, X)) + "px;";
            aF = "width:" + (aK.frameWidth + 2 * aH) + "px;"
        }
        return aM + aF + "height:100%;padding:0;margin:0;left:" + (aK.left + aC) + "px;" + aN
    };
    var m = 0;
    var L = function(aD, aC, aB) {
        if (aD === "BOTTOM" || aD === "BELOW_IMAGE" || aD === "OVERLAY_IMAGE" || aD === "NONE") {
            return
        }
        if (m) {
            window.clearTimeout(m);
            m = 0
        }
        m = window.setTimeout(function() {
            m = 0;
            t(aD, aC)
        }, aB)
    };
    var c = function(aB) {
        if (!aB) {
            aB = X.captionposition.toUpperCase()
        }
        if (aB === "OVERLAY_IMAGE" || aB === "BELOW_IMAGE") {
            return true
        }
        return false
    };
    var ai = function(aD, aC, aB) {
        if (!aD.loaded) {
            return
        }
        Y(aD);
        al(aD, aB);
        if (!aB) {
            if (!c()) {
                return
            }
            D.fade_in(X, I(".jb-cap-frame.caption_" + aD.position), aC, true);
            L("", aD.position, aC)
        } else {
            if (ah.browser.msie && ah.browser.version >= 10 && aw.is(":visible")) {
                aw.css({
                    opacity: 1
                })
            }
        }
    };
    var Q = function(aC, aD) {
        if (aC.isPreloading || aC.loaded) {
            return
        }
        var aB = new Image();
        aC.isPreloading = true;
        aB.onload = function() {
            aC.loaded = true;
            aC.width = aB.width;
            aC.height = aB.height;
            R.update_image(aC);
            var aF = I(".jb-panel-detail .jb-dt-main-image-" + aC.position);
            if (aF.length > 0) {
                var aE = function() {
                    aF.html(aj(aC, aD, false));
                    var aG = I(".jb-panel-detail .jb-dt-main-image-" + aC.position + " img");
                    aG.disableSelection();
                    if (ax.position === aC.position) {
                        aF.hide();
                        window.setTimeout(function() {
                            D.fade_in(X, aF, av);
                            if (ah.browser.msie && ah.browser.version >= 10) {
                                window.setTimeout(function() {
                                    ai(aC, av, true)
                                }, av / 2)
                            } else {
                                ai(aC, av)
                            }
                        }, 50)
                    }
                };
                if (D.is_swipable_device()) {
                    window.setTimeout(aE, 100)
                } else {
                    aE()
                }
            }
        }
        ;
        aB.src = aC.imageURL
    };
    var at = function(aD, aC, aB, aF, aJ, aG) {
        if (!aD) {
            return ""
        }
        var aH = "";
        var aE = X.imagetransitiontype.toUpperCase();
        if (aC === 0 && (aE === "CROSS_FADE" || aE === "FADE")) {
            if (!aJ) {
                aJ = 2
            }
            aH = "z-index:" + aJ + ";"
        }
        var aI = X.showpreloader ? "<div class='jb-status-loading' style='position:absolute;top:0;left:0;width:" + U + "px;height:" + z + "px;padding:0;margin:0;" + aH + "'></div>" : "";
        if (aD.loaded) {
            aI = aj(aD, aB, false, aG)
        } else {
            Q(aD, aB)
        }
        return "<div class='jb-dt-main-frame jb-dt-main-image-" + aD.position + "' style='height:" + z + "px;width:" + U + "px;left:" + aC + "px;" + y(aF) + aH + "'>" + aI + "</div>"
    };
    var y = function(aB) {
        if (!aB) {
            return ""
        }
        if (ah.browser.msie || D.is_firefox3()) {
            return "display:none;"
        }
        return "opacity:0;"
    };
    var i = function(aC) {
        if (!aC) {
            return ""
        }
        var aJ = d.config.galleryfontface ? "font-family:" + d.config.galleryfontface + ";" : "";
        var aK, aG, aH = "";
        if (X.useflickr) {
            aK = X.flickrshowtitle ? aC.caption : "";
            aG = (X.flickrshowdescription && aC.description) ? aC.description : "";
            aH = X.flickrshowpagelink ? '<p class="jb-cap-content jb-caption-link"><a href="' + aC.imageFullURL + '" target="_blank"  style="' + O() + am() + ";" + aJ + '">' + (X.flickrpagelinktext ? X.flickrpagelinktext : aC.caption) + "</a>&nbsp</p>" : ""
        } else {
            aK = aC.title ? aC.title : "";
            aG = aC.caption ? aC.caption : ""
        }
        var aB = X.captionhalign.toUpperCase();
        var aD = "";
        if (aB === "CENTER") {
            aD = "text-align:center;"
        } else {
            if (aB === "RIGHT") {
                aD = "text-align:right;"
            }
        }
        var aI = ah.trim(aK) ? '<p class="jb-cap-content jb-caption-title" style="' + aD + aJ + '">' + aK + "&nbsp</p>" : "";
        var aE = ah.trim(aG) ? '<p class="jb-caption-desc" style="' + aD + (X.showimagenumber ? "" : "margin-right:0;") + (aK ? "margin-top:10px;" : "margin-top:0;") + aJ + '">' + aG + "</p>" : "";
        var aF = X.showimagenumber ? '<div class="jbac-number jb-classifier-layer" data-layer="2000" style="z-index:2000;' + ((D.ship || !ak) ? "" : "padding-bottom:20px;") + O() + am() + aJ + '">' + (aC.position + 1) + " / " + R.length() + "</div>" : "";
        return aF + aI + aE + aH
    };
    var Z = function() {
        return (D.ship || !ak)
    };
    var am = function() {
        if (!X.textshadowcolor) {
            return ""
        }
        return "text-shadow:" + D.get_text_shadow_style(X.textshadowcolor, X.textshadowcolora, true) + ";"
    };
    var O = function() {
        if (!X.textcolor) {
            return ""
        }
        return "color:" + D.format_color(X.textcolor) + ";"
    };
    var e = function(aD, aH, aE, aC, aB, aM) {
        if (!aD) {
            return ""
        }
        if (!aM) {
            aM = 1000
        }
        var aI = i(aD);
        var aK = X.maxcaptionheight - (2 * aA);
        if (!Z()) {
            aK -= 18
        }
        if (aK <= 0) {
            aK = X.maxcaptionheight > aE ? aE : X.maxcaptionheight
        }
        var aL = "<div data-layer='1000' class='jb-caption jb-classifier-layer' style='overflow:hidden;z-index:" + aM + ";" + h(aD) + (X.captionposition.toUpperCase() === "OVERLAY_IMAGE" ? K(X) : "") + "max-height:" + aK + "px;" + (aI ? "" : "display:none;") + O() + am() + "'>" + aI + "</div>";
        var aF = X.captionposition.toUpperCase();
        var aG = true;
        if (aF === "NONE" || aF === "BELOW_IMAGE" || aF === "OVERLAY_IMAGE" || !aB || aC != 0) {
            aG = false
        }
        var aJ = " class='jb-cap-frame caption_" + aD.position + "' style='" + (aI ? S(aD, aH, aE, aC, aB) : (aG ? "" : "display:none;")) + "'";
        if (x()) {
            return "<div" + aJ + ">" + aL + "</div>"
        } else {
            return "<table" + aJ + "><tr><td>" + aL + "</td></tr></table>"
        }
    };
    var j = function(aC) {
        if (D.ship) {
            return
        }
        ak = aC;
        var aB = X.maxcaptionheight - (2 * aA);
        if (!Z()) {
            aB -= 18
        }
        if (aB <= 0) {
            aB = X.maxcaptionheight > aw.height() ? aw.height() : X.maxcaptionheight
        }
        var aE = aC ? aA + 18 : aA;
        var aD = aC ? "20px" : "";
        I(".jb-cap-frame .jb-caption").css({
            "padding-bottom": aE,
            "max-height": aB
        });
        I(".jb-cap-frame .jbac-number").css({
            "padding-bottom": aD
        })
    };
    var J = function(aB) {
        if (aB.position != W()) {
            return
        }
        s(aB);
        r()
    };
    var p = function(aB) {
        if (D.is_earlier_ie()) {
            return ""
        }
        if (D.is_small_android() || D.is_iphone()) {
            return "-webkit-box-shadow: 0px 0px " + aB.imageshadowblur + "px " + D.format_color(aB.imageshadowcolora) + ";"
        }
        return "box-shadow: 0px 0px " + aB.imageshadowblur + "px " + D.format_color(aB.imageshadowcolora) + ";"
    };
    var u = function(aB, aD) {
        if (D.is_earlier_ie()) {
            return ""
        }
        var aC = aB.imagecornerradius;
        if (aD) {
            aC = af(aB)
        }
        return aC > 0 ? "border-radius:" + aC + "px;" : ""
    };
    var af = function(aC) {
        var aB = aC.imagecornerradius;
        if (aC.framewidth && aC.imagecornerradius) {
            aB = aC.imagecornerradius - aC.framewidth
        }
        if (aB < 0) {
            aB = 0
        }
        return aB
    };
    var K = function(aB) {
        if (D.is_earlier_ie()) {
            return ""
        }
        return aB.imagecornerradius > 0 ? "border-bottom-left-radius:" + af(aB) + "px;border-bottom-right-radius:" + af(aB) + "px;" : ""
    };
    var aj = function(aD, aC, aM, aI) {
        if (!aD) {
            return ""
        }
        var aG = ab.get_image_display_size(aD, U, z, X);
        var aB = ab.suggested_image_size(aD, U, z, X, X.imagescalemode.toUpperCase());
        var aL = "";
        var aJ = false;
        var aH = 0;
        var aK = 0;
        if (aB.height === "auto" && aG.frameHeight < aG.height) {
            aH = "-" + parseInt((aG.height - aG.frameHeight) / 2) + "px";
            aJ = true
        }
        if (aB.width === "auto" && aG.frameWidth < aG.width) {
            aK = "-" + parseInt((aG.width - aG.frameWidth) / 2) + "px";
            aJ = true
        }
        if (D.is_adobe_air() && X.imagescalemode.toUpperCase() === "FILL") {
            aB.height = aB.expectedHeight + "px";
            aB.width = aB.expectedWidth + "px"
        }
        var aF = "<div class='jb-dt-main-image' style='position:absolute;top:" + aG.top + "px;left:" + aG.left + "px;height:" + aG.frameHeight + "px;width:" + aG.frameWidth + "px;padding:0;overflow:hidden;border:none;" + (X.imageframecolor ? "border-color:" + D.format_color(X.imageframecolor) + ";" : "") + (d.utils.is_earlier_ie() ? d.config.frameopacity + ";" : "") + p(X) + u(X) + "'><img style='${0}$height:" + aB.height + ";width:" + aB.width + ";" + aL + y(aM) + u(X, true) + "'  src='" + aD.imageURL + "' alt='" + aD.imageURL + "'></div>";
        var aE = ab.get_image_framewidth(U, z, X);
        if (aE) {
            aF = aF.replace("border:none;", "border-style:solid;border-width:" + aE + "px;")
        }
        if (aD.position === ax.position) {
            if (aI) {
                q(av / 2)
            } else {
                N(aG, av / 2)
            }
        }
        if (aJ) {
            return aF.replace("${0}$", "display:inline;position:relative;top:" + aH + ";left:" + aK + ";")
        }
        return aF.replace("${0}$", "")
    };
    var H = function() {
        return G
    };
    var q = function(aB) {
        if (d.config.imagenavposition.toUpperCase() === "IMAGE") {
            var aC = (!d.config.showimagenav || d.config.showimageoverlay.toUpperCase() === "NEVER") ? true : false;
            if (d.canImageMove() && !aC) {
                D.fade_out(X, I(".jb-classifier-detail-area .jbn-left-button"), aB)
            }
            if (d.canImageMove(true) && !aC) {
                D.fade_out(X, I(".jb-classifier-detail-area .jbn-right-button"), aB)
            }
        }
        if (d.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE") {
            if ((!d.config.showinfobutton || (d.config.showinfobutton && d.features.showinfo.visible())) && d.detail_panel.is_visible()) {
                D.fade_out(X, I(".jb-classifier-link-wrapper.jb-classifier-detail-area, .jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar"), aB)
            }
        }
    };
    var N = function(aJ, aG) {
        if (d.detail_panel.is_visible()) {
            G = true
        }
        if (d.config.imagenavposition.toUpperCase() != "IMAGE" && d.config.buttonbarposition.toUpperCase() != "OVERLAY_IMAGE") {
            return
        }
        var aN = ab.get_containers_size_and_position(d.glryWidth(), d.glryHeight(), d.index_panel.is_visible(), d.detail_panel.is_visible(), d.config_manager.isp, d.features.toppanel.isNeeded(), d.index_panel.get_thumb_height(), d.config, d.index_panel.getCurrentDisplayingThumbCount());
        var aO = aN.detail_panel_top;
        var aK = ab.get_stage_padding(d.glryWidth(), d.glryHeight(), d.config);
        var aH = parseInt(d.config.imagenavpadding);
        if (aH <= 0) {
            aH = 0
        }
        var aM = aJ.top + (Math.min(aJ.parentHeight, aJ.height) / 2) - I(".jbn-nav-button").height() / 2 + d.config.framewidth;
        var aC = aJ.left + aH + d.config.framewidth;
        var aL = aJ.parentWidth - (aJ.left + aJ.width + d.config.framewidth) + aH;
        if (d.config.imagenavposition.toUpperCase() === "IMAGE") {
            var aP = (!d.config.showimagenav || d.config.showimageoverlay.toUpperCase() === "NEVER") ? true : false;
            I(".jb-classifier-detail-area .jbn-nav-left-touch-area .jbn-nav-button").css({
                left: aC,
                top: aM
            });
            I(".jb-classifier-detail-area .jbn-nav-right-touch-area .jbn-nav-button").css({
                right: aL,
                top: aM
            });
            if (d.canImageMove() && !aP) {
                D.fade_in(X, I(".jb-classifier-detail-area .jbn-left-button"), aG)
            }
            if (d.canImageMove(true) && !aP) {
                D.fade_in(X, I(".jb-classifier-detail-area .jbn-right-button"), aG)
            }
        }
        if (d.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE") {
            var aQ = parseInt(d.config.imagecornerradius / 4);
            var aE = aO + aJ.top + d.config.framewidth + aH + aQ;
            var aF = d.config.buttonbarhalign.toUpperCase();
            var aB = d.features.buttonbar.getButtonbarWidth();
            var aI = false;
            if (aJ.width - aB < aH) {
                aI = true
            }
            if (aF === "LEFT") {
                I(".jb-classifier-link-wrapper.jb-classifier-detail-area").css({
                    left: aC + aQ + aN.detail_panel_left - 10,
                    top: aE,
                    width: aI ? aJ.width - aH : "auto"
                })
            } else {
                if (aF === "CENTER") {
                    aB = d.features.buttonbar.getButtonbarWidth();
                    var aD = parseInt((aJ.width - aB) / 2 + aJ.left + aK + d.config.framewidth);
                    aD -= 10;
                    I(".jb-classifier-link-wrapper.jb-classifier-detail-area").css({
                        left: aD + aN.detail_panel_left - aK,
                        top: aE
                    })
                } else {
                    aL -= 10;
                    I(".jb-classifier-link-wrapper.jb-classifier-detail-area").css({
                        right: aL + aQ + aK + (d.config.thumbsposition.toUpperCase() === "RIGHT" ? (d.glryWidth() - aN.index_panel_left) : 0),
                        top: aE,
                        width: aI ? aJ.width - aH : "auto"
                    })
                }
            }
            if ((!d.config.showinfobutton || (d.config.showinfobutton && d.features.showinfo.visible())) && d.detail_panel.is_visible()) {
                D.fade_in(X, I(".jb-classifier-link-wrapper.jb-classifier-detail-area, .jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar"), aG)
            }
        }
    };
    var s = function(aG) {
        if (!aG) {
            return
        }
        var aB = ",BELOW_THUMBS,";
        var aE = ",BOTTOM,BELOW_IMAGE,OVERLAY_IMAGE" + aB;
        var aD = "," + X.captionposition.toUpperCase() + ",";
        aq.children().remove();
        var aC = aw.is(":visible") || aB.indexOf(aD) > -1;
        var aF = X.showimageoverlay.toUpperCase();
        if (aF === "NEVER") {
            if (aE.indexOf(aD) < 0) {
                aC = false
            }
        }
        b(aG.position, 0, null, aC);
        return
    };
    var g = function(aB, aC) {
        U = aB;
        z = aC;
        I(".jb-dt-main-frame").css({
            width: aB,
            height: aC
        });
        s(ax, aB, aC, 0);
        ai(ax, 0, true);
        R.get_previous_image(ax.position);
        R.get_next_image(ax.position)
    };
    var o = function(aB) {
        ao = aB
    };
    var f = function() {
        return ao
    };
    return {
        get_photo_position: W,
        move_2_next_photo: az,
        move_2_previous_photo: F,
        initialize: V,
        populate_photo_html: b,
        repaint: g,
        get_current_photo: v,
        preload_images: n,
        fadeout_current_image: l,
        repopulate_caption_html: J,
        move_back: P,
        set_caption_height_mode: j,
        is_initialized: function() {
            return ae
        },
        change_2_photo: au,
        set_visible_flag: o,
        is_visible: f,
        setContext: ad,
        isImageShowed: H,
        set_photo_position: ap,
        set_container_size: T
    }
};
var gallery_defined = typeof (juicebox_utils) != "undefined";
if (!gallery_defined) {
    var juicebox_utils = new juice_box_utils(juicebox_lib.jQuery);
    var juicebox_registered_components = {};
    var juicebox_instances = [];
    var juicebox_instance_count = 0;
    var different_size_images_in_config = false;
    var juicebox = function(cnfg) {
        var $ = juicebox_lib.jQuery;
        var document_id = "jb-glry-id-" + juicebox_instance_count;
        var _ = function(path) {
            return $(context.utils.get_query_path(document_id, path))
        };
        var sizing = null;
        var current_width = null;
        var current_height = null;
        var gallery_manager = new juicebox_gallery_manager();
        var index_panel = new juicebox_gallery_index_panel(juicebox_utils,gallery_manager);
        var detail_panel = new juicebox_gallery_detail_panel(index_panel);
        var ignoredOptions4New = "showthumbsonload";
        var featureInstances = {};
        for (var k in juicebox_registered_components) {
            featureInstances[k] = new juicebox_registered_components[k](null)
        }
        var context = {
            _: _,
            instance_id: juicebox_instance_count,
            utils: juicebox_utils,
            gallery_manager: function() {
                return gallery_manager
            },
            config_manager: new juicebox_config_manager($,juicebox_utils),
            index_panel: index_panel,
            detail_panel: detail_panel,
            sizing: function() {
                return sizing
            },
            glrySizePosition: function(indexVisible, detailVisible) {
                if (!sizing) {
                    return null
                }
                if (typeof (indexVisible) == "undefined") {
                    indexVisible = context.index_panel.is_visible()
                }
                if (typeof (detailVisible) == "undefined") {
                    detailVisible = context.detail_panel.is_visible()
                }
                return sizing.get_containers_size_and_position(current_width, current_height, indexVisible, detailVisible, context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount())
            },
            glryStagPadding: function() {
                if (!sizing) {
                    return null
                }
                return sizing.get_stage_padding(current_width, current_height, context.config)
            },
            glryWidth: function() {
                return current_width
            },
            glryHeight: function() {
                return current_height
            },
            isFullScreenMode: function() {
                return is_full_screen_mode || sizing.is_fullscreen_mode(context.config)
            },
            glryRepaint: function(force, ignoreIndexPnl, noresize, donotAdjustHeight) {
                if (featureInstances.splash.visible()) {
                    featureInstances.splash.repaint();
                    return
                }
                repaint(force, ignoreIndexPnl, noresize, donotAdjustHeight)
            },
            isOverlayVisible: function() {
                return overlay_visible
            },
            setOverlayFlag: function(visible) {
                overlay_visible = visible
            },
            redrawIndexPanel: function(imgpos) {
                show_thumbnails(imgpos)
            },
            correctPath: function(path) {
                return correct_path(path)
            },
            setOverlay: function(visible, delay) {
                overlay_visible = visible;
                display_overlay(delay)
            },
            showOverlayWithSetting: function(visible, delay) {
                if (!detail_panel.is_visible()) {
                    return
                }
                overlay_visible = visible;
                show_hide_overlay(visible, delay)
            },
            syncOverlayVisibility: function() {
                set_overlay_visible(overlay_visible);
                return overlay_visible
            },
            getGalleryInfo: function() {
                return get_current_gallery_image_info()
            },
            setExtendedGlry: function(jbglry) {
                extended_gallery = jbglry
            },
            getExtendedGlry: function() {
                return extended_gallery
            },
            showImage: function(position, delay, isfirstimage, fromHashEvent) {
                show_main_image(position, delay, isfirstimage, fromHashEvent)
            },
            switch2Main: function(position, cb) {
                switch_2_main_image(position, cb)
            },
            unbindResize: function() {
                $(window).unbind("resize", windowResize)
            },
            canImageMove: function(toNext) {
                return can_image_move(toNext)
            },
            canPageMove: function(toNext) {
                return can_page_move(toNext)
            },
            nextImage: function() {
                next_image()
            },
            previousImage: function() {
                previous_image()
            },
            turnOffFullscreen: function() {
                is_full_screen_mode = false
            },
            hasMultipleSizeImages: function() {
                return different_size_images_in_config
            },
            setImageEventIndex: function(idx) {
                lastImageEventIndex = idx
            },
            getIgnoredOptions4New: function() {
                return ignoredOptions4New
            }
        };
        context.features = featureInstances;
        var flickr_loader = null;
        var overlay_visible = true;
        var is_switching_image = false;
        context.config_manager.init(cnfg, null, "ck-s-");
        context.config = context.config_manager.get_config();
        var removeIgnoredOptions = function() {
            var aryOptions2Ignore = ignoredOptions4New.split(",");
            for (var i = 0; i < aryOptions2Ignore.length; i++) {
                if (aryOptions2Ignore[i].length <= 0) {
                    continue
                }
                delete context.config[aryOptions2Ignore[i]]
            }
        };
        if (typeof (expanded_jb_gallery) != "undefined") {
            removeIgnoredOptions()
        }
        for (var j in context.features) {
            context.features[j].setContext(context)
        }
        context.detail_panel.setContext(context);
        context.index_panel.setContext(context);
        gallery_manager.init(context.config);
        var image_change_speed = 1000 * context.config.imagetransitiontime;
        var theme_cls = "jcbx-glry-classic";
        var themeUrl = "";
        var is_full_screen_mode = false;
        var right_button_offset = null;
        var extended_gallery = null;
        var correct_path = function(path) {
            if (!path) {
                return ""
            }
            return context.utils.concate_path(context.config.baseurl, path)
        };
        var setup_layout = function(glry_width, glry_height, show_detail) {
            if (context.utils.is_large_screen_mode(context.config)) {
                if (context.features.showthumbsbutton.isThumbsHidden()) {
                    context.index_panel.set_visible_flag(false)
                } else {
                    context.index_panel.set_visible_flag(true)
                }
                context.detail_panel.set_visible_flag(true);
                _("").addClass("jb-flag-large-screen-mode")
            } else {
                if (show_detail) {
                    context.index_panel.set_visible_flag(false);
                    context.detail_panel.set_visible_flag(true)
                } else {
                    context.index_panel.set_visible_flag(true);
                    context.detail_panel.set_visible_flag(false)
                }
                _("").removeClass("jb-flag-large-screen-mode")
            }
        };
        var set_overlay_visible = function(show) {
            if (context.config.showinfobutton) {
                overlay_visible = context.features.showinfo.visible()
            } else {
                var showimageoverlay = context.config.showimageoverlay.toUpperCase();
                if (showimageoverlay === "ALWAYS") {
                    overlay_visible = true
                } else {
                    if (showimageoverlay === "NEVER") {
                        overlay_visible = false
                    } else {
                        overlay_visible = show
                    }
                }
            }
        };
        var show_hide_overlay = function(show, delay) {
            set_overlay_visible(show);
            display_overlay(delay)
        };
        var display_overlay = function(delay) {
            var excludesel = (!context.detail_panel.isImageShowed() && context.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE") ? ":not(.jb-classifier-link-wrapper)" : "";
            if ($.browser.msie && overlay_visible) {
                _(".jb-classifier-show-on-over .jb-bb-bar").show()
            }
            context.utils.show_hide_controls(_(".jb-classifier-show-on-over" + excludesel), overlay_visible, delay)
        };
        var overlayTimer = 0;
        var set_overlay = function(show, delay) {
            if (is_switching_image) {
                return
            }
            if (!_(" .jb-panel-detail").is(":visible")) {
                return
            }
            if (context.features.showthumbsbutton.isSwitching()) {
                return
            }
            if (overlayTimer) {
                window.clearTimeout(overlayTimer);
                overlayTimer = 0
            }
            overlayTimer = window.setTimeout(function() {
                overlayTimer = 0;
                show_hide_overlay(show, ($.browser.msie && $.browser.version >= 7 && $.browser.version < 8) ? 0 : delay)
            }, 100)
        };
        var is_direct_open = function() {
            if (context.config.firstimageindex > 0 && context.config.firstimageindex <= gallery_manager.length()) {
                return true
            }
            var ret = directGo2(true, true);
            if (ret === 1 || ret === 3) {
                return true
            }
            return false
        };
        var check_open_image_directly = function() {
            var ret = directGo2(true);
            if (ret === 1 || ret === 3) {
                context.detail_panel.set_visible_flag(true);
                context.index_panel.set_visible_flag(false);
                return true
            }
            if (context.config.firstimageindex > 0 && context.config.firstimageindex <= gallery_manager.length()) {
                show_main_image(context.config.firstimageindex - 1, image_change_speed, true);
                context.detail_panel.set_visible_flag(true);
                context.index_panel.set_visible_flag(false);
                return true
            }
            return false
        };
        var set_init_visible_panel = function() {
            setup_layout(current_width, current_height, true);
            var cntSize = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
            set_containers_size_and_position(cntSize);
            context.features.indexnav.setPosition(cntSize)
        };
        var lastImgIdx = -1;
        var directGo2 = function(dlink, donotOpen) {
            var result = 0;
            var status = context.features.hashstatus.getHashStatus();
            if (status.hasSet) {
                lastImgIdx = -1
            }
            if ((context.config.enabledirectlinks || dlink) && status.directPicIdx >= 0 && lastImgIdx != status.directPicIdx) {
                if (!donotOpen) {
                    lastImgIdx = status.directPicIdx;
                    set_init_visible_panel();
                    if (context.utils.is_large_screen_mode(context.config)) {
                        show_main_image(status.directPicIdx, image_change_speed, false, true)
                    } else {
                        switch_2_main_image(status.directPicIdx)
                    }
                }
                result |= 1
            }
            if ((!status.hasExpHashPrefix && context.features.fullscreen.switched_2_fullscreen() && !context.utils.is_new_expanded_window()) || (status.hasExpHash && !context.features.fullscreen.switched_2_fullscreen() && !is_full_screen_mode)) {
                context.features.fullscreen.full_screen();
                result |= 2
            }
            return result
        };
        var fireInitializedEvent = function() {
            if (juicebox_instances[context.instance_id] && typeof (juicebox_instances[context.instance_id].onInitComplete) === "function") {
                juicebox_instances[context.instance_id].onInitComplete()
            }
        };
        var show_splash_page = function() {
            if (context.config.fotomotostoreid) {
                context.utils.add_js_tag("http://widget.fotomoto.com/stores/script/" + context.config.fotomotostoreid + ".js?api=true&aid=68677e1269332506", "fotomotojs")
            }
            if (gallery_manager.length() <= 0) {
                return
            }
            context.utils.add_viewport_meta_tag_4_device(sizing.is_gallery_fully_filled(context.config.gallerywidth, context.config.galleryheight) || context.utils.is_new_expanded_window() || ((context.utils.is_iphone() || context.utils.is_ipad()) && context.config.expandinnewpage.toUpperCase() === "FALSE"));
            current_width = get_gallery_width();
            current_height = get_gallery_height();
            set_font();
            if (context.features.splash.isNeeded()) {
                context.config_manager.sync_option_with_dependency({
                    showexpandbutton: true
                });
                context.config = context.config_manager.get_config();
                _(".jb-classifier-detail-area").hide();
                _(".jb-panel-index").show();
                var resizeSplash = function() {
                    sizing.try_set_body_size(context.config, context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode);
                    context.features.splash.repaint()
                };
                $(window).resize(resizeSplash);
                context.features.splash.draw(_(" .jb-panel-index>.jb-idx-thumbnail-container"), function() {
                    $(window).unbind("resize", resizeSplash);
                    $(window).resize(windowResize);
                    context.features.fullscreen.full_screen()
                });
                hide_url_bar();
                if (!context.config.showthumbsonload) {
                    context.features.showthumbsbutton.setIndexVisibleFlag(false)
                }
                fireInitializedEvent();
                context.features.hashstatus.setHashChangedEvent(directGo2);
                var status = context.features.hashstatus.getHashStatus();
                if (status.hasExpHash) {
                    context.features.fullscreen.full_screen()
                }
            } else {
                after_loading_images();
                if (context.features.fullscreen.switched_2_fullscreen() || context.utils.is_new_expanded_window()) {
                    context.config_manager.sync_option_with_dependency({
                        showexpandbutton: true
                    });
                    context.config = context.config_manager.get_config()
                }
            }
        };
        var get_panel_params = function() {
            return {
                jquery: $,
                document_id: document_id,
                container: _(" .jb-panel-index>.jb-idx-thumbnail-container"),
                config: context.config,
                utils: context.utils,
                glymng: gallery_manager,
                sizing: sizing,
                finish_draw_event_callback: switch_2_main_image,
                touch_event_callback: after_page_changed,
                caption_complete_callback: set_touch_component_height,
                current_width: current_width,
                current_height: current_height,
                debug: {
                    debug3value: typeof (debug_info2) == "function" ? debug_info2 : null,
                    debugmsg: typeof (debug_message) == "function" ? debug_message : null
                }
            }
        };
        var setPanelHoverEvents = function() {
            if (!context.utils.is_iphone() && !context.utils.is_ipad() && !context.utils.is_android() && !context.config.showinfobutton && !context.config.forcetouchmode) {
                var selstr = "";
                _(selstr).hover(function() {
                    if (!context.detail_panel.is_visible()) {
                        return
                    }
                    if (context.features.touchevent.isInNavigation() || context.features.touchevent.isInTransitioning()) {
                        return
                    }
                    if (is_switching_image) {
                        return
                    }
                    overlay_visible = true;
                    set_overlay(overlay_visible, 250);
                    if (overlay_visible || context.config.imagenavposition.toUpperCase() != "STAGE") {
                        context.features.imagenav.repaint()
                    }
                }, function() {
                    if (!context.detail_panel.is_visible()) {
                        return
                    }
                    if (context.features.touchevent.isInNavigation() || context.features.touchevent.isInTransitioning()) {
                        return
                    }
                    if (is_switching_image) {
                        return
                    }
                    overlay_visible = false;
                    set_overlay(overlay_visible, 250)
                })
            }
        };
        var setNavEvents = function() {
            _(".jb-classifier-thumb-area .jbn-right-button").click(function() {
                return next_page(0)
            });
            _(".jb-classifier-thumb-area .jbn-left-button").click(function() {
                return previous_page(0)
            });
            var clickMode = context.config.imageclickmode.toUpperCase();
            if (!context.utils.is_touchable_device(context.config) || document.msFullscreenEnabled || context.config.forcetouchmode || ($.browser.msie && clickMode != "OPEN_URL")) {
                var delta;
                _(".jb-classifier-detail-area .jbn-right-button").click(function() {
                    delta = context.features.touchevent.getDelta();
                    if (delta.x || delta.y) {
                        return null
                    }
                    context.features.autoplay.stop();
                    return next_image(0)
                });
                _(".jb-classifier-detail-area .jbn-left-button").click(function() {
                    context.features.autoplay.stop();
                    delta = context.features.touchevent.getDelta();
                    if (delta.x || delta.y) {
                        return null
                    }
                    return previous_image(0)
                });
                if (!context.config.forcetouchmode) {
                    if (clickMode === "NONE") {
                        _(".jb-classifier-detail-area .jbn-nav-right-touch-area").css("cursor", "default");
                        _(".jb-classifier-detail-area .jbn-nav-left-touch-area").css("cursor", "default")
                    } else {
                        if (clickMode === "OPEN_URL") {
                            _(".jb-classifier-detail-area .jbn-nav-right-touch-area").click(context.features.openurl.open_url);
                            _(".jb-classifier-detail-area .jbn-nav-left-touch-area").click(context.features.openurl.open_url)
                        } else {
                            _(".jb-classifier-detail-area .jbn-nav-right-touch-area").click(function() {
                                delta = context.features.touchevent.getDelta();
                                if (delta.x || delta.y) {
                                    return false
                                }
                                context.features.autoplay.stop();
                                return next_image(0)
                            });
                            _(".jb-classifier-detail-area .jbn-nav-left-touch-area").click(function() {
                                delta = context.features.touchevent.getDelta();
                                if (delta.x || delta.y) {
                                    return false
                                }
                                context.features.autoplay.stop();
                                return previous_image(0)
                            })
                        }
                    }
                }
            } else {
                var delay = parseInt(1005 * context.config.imagetransitiontime + 510 * context.config.imagetransitiontime);
                _(".jb-classifier-detail-area .jbn-right-button").bind("touchend", function(e) {
                    context.index_panel.yield_4_transition(delay);
                    e.preventDefault();
                    if (context.features.touchevent.isInTransitioning()) {
                        return
                    }
                    context.features.touchevent.setTransitioning(true);
                    context.features.autoplay.stop();
                    next_image(0);
                    window.setTimeout(function() {
                        context.features.touchevent.setTransitioning(false)
                    }, delay)
                });
                _(".jb-classifier-detail-area .jbn-left-button").bind("touchend", function(e) {
                    context.index_panel.yield_4_transition(delay);
                    e.preventDefault();
                    if (context.features.touchevent.isInTransitioning()) {
                        return
                    }
                    context.features.touchevent.setTransitioning(true);
                    context.features.autoplay.stop();
                    previous_image(0);
                    window.setTimeout(function() {
                        context.features.touchevent.setTransitioning(false)
                    }, delay)
                })
            }
        };
        var initialize_panels = function() {
            setup_layout(current_width, current_height, context.detail_panel.is_visible());
            var thumbpanelheigh = context.config.maxthumbrows * (context.config.thumbheight + context.config.thumbpadding);
            if (context.utils.is_side_layout(context.config)) {
                thumbpanelheigh = 10
            }
            var cntSize = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), thumbpanelheigh, context.config, index_panel.getCurrentDisplayingThumbCount());
            var params = get_panel_params();
            params.current_width = cntSize.index_panel_width;
            params.current_height = cntSize.index_panel_height;
            context.index_panel.initialize(params, is_full_screen_mode || context.features.fullscreen.switched_2_fullscreen());
            params.container = _(" .jb-panel-detail");
            params.caption_container = context.features.caption.getArea();
            params.current_width = cntSize.detail_panel_width;
            params.current_height = cntSize.detail_panel_height;
            params.before_draw_event_callback = before_show_main_image;
            params.finish_draw_event_callback = after_show_main_image;
            context.detail_panel.initialize(params)
        };
        var windowResize = function() {
            repaint(false)
        };
        var set_hover_over_navs = function() {
            if (context.config.navbuttoniconhovercolor) {
                var navattrbak = "";
                _(".jbn-nav-button-icon").hover(function() {
                    navattrbak = $(this).attr("style");
                    $(this).css({
                        color: context.utils.format_color(context.config.navbuttoniconhovercolor)
                    })
                }, function() {
                    if ($.browser.msie && $.browser.version < 10) {
                        $(this).css({
                            color: context.utils.format_color(context.config.navbuttoniconcolor)
                        })
                    } else {
                        $(this).attr("style", navattrbak)
                    }
                })
            }
        };
        var set_font = function() {
            if (!context.config.galleryfontface) {
                return
            }
            _(".jcbx-glry-classic").css({
                "font-family": context.config.galleryfontface
            })
        };
        var setSidePadding = function() {
            _(".jbn-nav-left-touch-area .jbn-nav-button").css({
                left: context.config.imagenavpadding
            });
            _(".jbn-nav-right-touch-area .jbn-nav-button").css({
                right: context.config.imagenavpadding
            })
        };
        var after_loading_images = function() {
            var cntSize;
            if (is_full_screen_mode) {
                $("body").css({
                    overflow: "hidden"
                })
            }
            if (context.config.randomizeimages) {
                gallery_manager.sort_images()
            }
            sizing.get_initial_size();
            $("#" + document_id).html(get_gallery_frame_html());
            set_font();
            context.features.touchevent.setEvent();
            initialize_panels();
            set_hover_over_navs();
            overlay_visible = context.config.showoverlayonload;
            var showLoadingEffect = true;
            if (!context.utils.is_large_screen_mode(context.config) && context.config.autoplayonload) {
                showLoadingEffect = false
            }
            var panelsWithEffects = "indexnav" + (context.utils.is_large_screen_mode(context.config) ? ",imagenav" : "");
            if (showLoadingEffect) {
                var isDirectOpen = is_direct_open();
                var isLsm = context.utils.is_large_screen_mode(context.config);
                panelsWithEffects += (isLsm || context.config.showsmallthumbsonload ? ",grytitle" : "");
                panelsWithEffects += (isLsm || isDirectOpen || !context.config.showsmallthumbsbutton ? ",backbutton" : "");
                if (isLsm || !context.config.showsmallthumbsbutton || isDirectOpen) {
                    panelsWithEffects += (context.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE" ? "" : ",buttonbar")
                }
                var trantm = 1000 * context.config.fadetime;
                var isindirssm = !isDirectOpen && !isLsm;
                if (index_panel.is_visible()) {
                    context.utils.fade_in(context.config, context._(".jb-panel-index.jb-classifier-thumb-area"), trantm, (context.utils.is_android() && !isLsm ? true : false), null, "indexpanel")
                }
                var isFull = context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode;
                if (context.utils.is_ipad()) {
                    sizing.try_set_body_size(context.config, isFull);
                    context.features.buttonbar.repaint();
                    context.features.buttonbar.setPosition()
                }
                context.utils.reppaint_components(context.features, panelsWithEffects, trantm, function() {
                    if (!context.utils.is_new_expanded_window()) {
                        context.features.showinfo.showInfoCtrls(overlay_visible, 0, true);
                        if (isindirssm) {
                            repaint(true)
                        } else {
                            repaint(true, false, false, false, true);
                            if (context.utils.is_android() && isLsm) {
                                window.setTimeout(function() {
                                    repaint(true)
                                }, image_change_speed + 300)
                            }
                        }
                    }
                    if (context.utils.is_earlier_ie()) {
                        window.setTimeout(function() {
                            repaint(true)
                        }, 300)
                    }
                })
            } else {
                context.features.showinfo.showInfoCtrls(overlay_visible)
            }
            if (context.config.useflickr) {
                _("").addClass("jb-flickr-glry")
            }
            if (context.features.fullscreen.switched_2_fullscreen()) {
                if (context.utils.need_viewport_meta() && !context.utils.host_has_viewport_meta()) {
                    _("").addClass("jb-large-icon")
                }
            }
            setSidePadding();
            if (false) {
                window.setTimeout(function() {
                    display_error_message(themeUrl)
                }, image_change_speed)
            }
            setup_layout(current_width, current_height, context.detail_panel.is_visible());
            cntSize = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
            set_containers_size_and_position(cntSize);
            context.utils.set_components_position(context.features, "indexnav,imagenav,backbutton,grytitle,buttonbar", cntSize);
            $(window).resize(windowResize);
            if (context.utils.is_iphone() || context.utils.is_ipad()) {
                window.onorientationchange = function() {
                    repaint(true)
                }
            }
            context.utils.setup_components_event(context.features, "buttonbar");
            setNavEvents();
            if (context.detail_panel.is_visible()) {
                if (context.features.fullscreen.switched_2_fullscreen()) {
                    overlay_visible = context.features.fullscreen.getPersistor().parent_gallery_param.overlay_info_visible
                } else {
                    set_overlay_visible(overlay_visible)
                }
                if (showLoadingEffect && ($.browser.msie || document.msFullscreenEnabled) && panelsWithEffects.indexOf("imagenav") > -1) {} else {
                    display_overlay(0);
                    context.features.showinfo.showInfoCtrls(overlay_visible);
                    context.features.imagenav.repaint()
                }
            }
            set_key_events();
            context.config.onload();
            setPanelHoverEvents();
            context.features.hashstatus.setHashChangedEvent(directGo2);
            var forceInitialization = true;
            if (context.features.fullscreen.switched_2_fullscreen()) {
                forceInitialization = false;
                var opendFromSplash = context.features.fullscreen && context.features.fullscreen.getPersistor().parent_gallery_param.openedFromSplash && context.features.fullscreen.getPersistor().parent_gallery_param.openedFromSplash() ? true : false;
                if (context.utils.is_large_screen_mode(context.config)) {
                    show_main_image(context.features.fullscreen.getPersistor().parent_gallery_param.current_image_index, image_change_speed, true);
                    context.features.showthumbsbutton.setIndexVisibleFlag(!context.features.fullscreen.getPersistor().parent_gallery_param.hide_thumbnails_in_lsm);
                    repaint(true);
                    if (context.features.fullscreen.getPersistor().parent_gallery_param.is_autoplaying) {
                        context.features.autoplay.stop(false, true);
                        context.features.autoplay.toggleAutoPlay(false, opendFromSplash ? false : true)
                    }
                } else {
                    context.detail_panel.set_visible_flag(context.features.fullscreen.getPersistor().parent_gallery_param.is_detail_visible);
                    context.index_panel.set_visible_flag(context.features.fullscreen.getPersistor().parent_gallery_param.is_index_visible);
                    if (context.detail_panel.is_visible()) {
                        show_main_image(context.features.fullscreen.getPersistor().parent_gallery_param.current_image_index, image_change_speed, true);
                        repaint(true);
                        overlay_visible = context.features.fullscreen.getPersistor().parent_gallery_param.overlay_info_visible;
                        display_overlay(0);
                        context.features.showinfo.showInfoCtrls(overlay_visible);
                        context.features.imagenav.repaint();
                        if (context.features.fullscreen.getPersistor().parent_gallery_param.is_autoplaying) {
                            context.features.autoplay.stop(false, true);
                            context.features.autoplay.toggleAutoPlay(false, opendFromSplash ? false : true)
                        }
                    } else {
                        show_thumbnails(context.features.fullscreen.getPersistor().parent_gallery_param.current_image_index);
                        repaint(true)
                    }
                }
                context.utils.add_fullscreen_listener(function(fullscreen) {
                    if (!fullscreen) {
                        context.features.fullscreen.full_screen()
                    }
                })
            } else {
                if (context.utils.is_new_expanded_window()) {
                    forceInitialization = false;
                    context.features.showthumbsbutton.setIndexVisibleFlag(context.config.hide_thumbnails_in_lsm != "true");
                    context.detail_panel.set_visible_flag(context.config.is_detail_visible === "true");
                    context.index_panel.set_visible_flag(context.config.is_index_visible === "true");
                    if (context.config.pageTitle) {
                        try {
                            $("head > title").html(context.config.pageTitle)
                        } catch (err) {}
                    }
                    if (context.detail_panel.is_visible()) {
                        show_main_image(context.config.firstimageindex ? context.config.firstimageindex - 1 : 0, image_change_speed, true)
                    }
                    repaint(true)
                }
            }
            if (!context.utils.is_new_expanded_window()) {
                window.setTimeout(function() {
                    if (context.config_manager.isp && context.features.fullscreen.switched_2_fullscreen()) {
                        lastImageEventIndex = context.features.fullscreen.getPersistor().parent_gallery_param.last_image_event_index;
                        for (var key in context.features.fullscreen.getPersistor().parent_gallery) {
                            if (typeof (context.features.fullscreen.getPersistor().parent_gallery[key]) != "function") {
                                continue
                            }
                            if (key === "onExpand") {
                                continue
                            }
                            juicebox_instances[context.instance_id][key] = context.features.fullscreen.getPersistor().parent_gallery[key]
                        }
                    }
                }, 100);
                if (window.location.href.toLowerCase().indexOf("http") !== 0 && $.browser.mozilla) {
                    repaint(true)
                }
                if (!showLoadingEffect && context.utils.is_earlier_ie()) {
                    window.setTimeout(function() {
                        repaint(true)
                    }, 100)
                }
            }
            var panelVisibilityOverwritten = false;
            if (context.config.autoplayonload && !context.features.fullscreen.switched_2_fullscreen()) {
                var itisLsm = context.utils.is_large_screen_mode(context.config);
                if (!itisLsm) {
                    switch_2_main_image(context.detail_panel.get_photo_position());
                    panelVisibilityOverwritten = true
                }
                window.setTimeout(function() {
                    context.features.autoplay.toggleAutoPlay(true)
                }, 100)
            }
            if (context.config.showthumbsonload === false && context.utils.is_large_screen_mode(context.config)) {
                context.features.showthumbsbutton.toggle_index_panel_4_lsm(true, true, (is_direct_open() ? true : false))
            }
            fireInitializedEvent();
            if (forceInitialization) {
                var dcheckresult = check_open_image_directly();
                if (!dcheckresult && !panelVisibilityOverwritten) {
                    if (!context.config.showsmallthumbsbutton || !context.config.showsmallthumbsonload) {
                        context.detail_panel.set_visible_flag(true);
                        context.index_panel.set_visible_flag(false)
                    }
                    if (context.index_panel.is_visible()) {
                        show_thumbnails(0)
                    }
                    if (context.detail_panel.is_visible() && !context.features.fullscreen.switched_2_fullscreen()) {
                        if (!context.utils.is_large_screen_mode(context.config) || context.config.showthumbsonload) {
                            window.setTimeout(function() {
                                show_main_image(0, 1000 * context.config.fadetime)
                            }, 100)
                        }
                    }
                } else {
                    if (context.detail_panel.is_visible() && !context.utils.is_large_screen_mode(context.config)) {
                        overlay_visible = context.config.showoverlayonload;
                        context.features.showinfo.showInfoCtrls(overlay_visible);
                        show_hide_overlay(overlay_visible, 0)
                    }
                }
            }
            _(".jb-classifier-detail-area").disableSelection()
        };
        var can_image_move = function(to_next) {
            var glrylen = gallery_manager.length();
            if (glrylen <= 1) {
                return false
            }
            if (context.config.enablelooping) {
                return true
            }
            var imgpos = context.detail_panel.get_photo_position();
            if (to_next) {
                if (imgpos >= glrylen - 1) {
                    return false
                }
                return true
            } else {
                if (imgpos <= 0) {
                    return false
                }
                return true
            }
        };
        var can_page_move = function(to_next) {
            if (context.index_panel.is_last_page() && context.index_panel.is_first_page()) {
                return false
            }
            if (context.config.enablelooping) {
                return true
            }
            if (to_next) {
                if (context.index_panel.is_last_page()) {
                    return false
                }
                return true
            } else {
                if (context.index_panel.is_first_page()) {
                    return false
                }
                return true
            }
        };
        var set_key_events = function() {
            var setFocus = function() {
                if (context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode) {
                    if (!context.utils.is_in_iframe()) {
                        _("").focus()
                    }
                }
            };
            if (!context.config.enablekeyboardcontrols) {
                if (context.config.enableautoplay) {
                    setFocus();
                    _("").keydown(function(evt) {
                        if (evt.ctrlKey || evt.altKey || evt.shiftKey || evt.metaKey) {
                            return
                        }
                        switch (evt.keyCode) {
                        case 32:
                            evt.preventDefault();
                            context.features.autoplay.toggleAutoPlay();
                            break;
                        default:
                            break
                        }
                    })
                }
                return
            }
            if (context.utils.is_iphone() || context.utils.is_ipad() || context.utils.is_small_android()) {
                return
            }
            setFocus();
            _("").keydown(function(evt) {
                if (evt.ctrlKey || evt.altKey || evt.shiftKey || evt.metaKey) {
                    return
                }
                switch (evt.keyCode) {
                case 32:
                    evt.preventDefault();
                    if (!context.config.enableautoplay) {
                        return
                    }
                    context.features.autoplay.toggleAutoPlay();
                    break;
                case 37:
                case 75:
                    evt.preventDefault();
                    context.features.autoplay.stop();
                    previous_image(0);
                    break;
                case 39:
                case 74:
                    evt.preventDefault();
                    context.features.autoplay.stop();
                    next_image(0);
                    break;
                case 36:
                    evt.preventDefault();
                    context.features.autoplay.stop();
                    show_thumbnails(0);
                    show_main_image(0);
                    break;
                case 35:
                    evt.preventDefault();
                    context.features.autoplay.stop();
                    var imgpos = gallery_manager.length() - 1;
                    show_thumbnails(imgpos);
                    show_main_image(imgpos);
                    break;
                case 70:
                    if (is_full_screen_mode || context.features.fullscreen.switched_2_fullscreen()) {
                        return
                    }
                    evt.preventDefault();
                    context.features.fullscreen.full_screen();
                    break;
                case 27:
                    if (context.features.fullscreen.switched_2_fullscreen()) {
                        evt.preventDefault();
                        context.features.fullscreen.full_screen()
                    }
                    break
                }
            })
        };
        var update_flickr_image_details = function(imageIndex, details) {
            if (!details) {
                return
            }
            var image = gallery_manager.get_image(imageIndex);
            if (image.flickrPhotoId !== details.id) {
                return
            }
            image.description = details.description;
            image.detail_loaded = true;
            if (context.detail_panel.is_initialized()) {
                context.detail_panel.repopulate_caption_html(image)
            }
        };
        var load_images = function(xml) {
            if (context.config.useflickr) {
                flickr_loader = new juicebox_flickr_image_loader($,context.config_manager,display_error_message)
            }
            var limit = context.config_manager.isp ? (100000) : 50;
            if (context.config.useflickr) {
                flickr_loader.get_images(function(photos) {
                    for (var i = 0; i < photos.length && i < limit; i++) {
                        gallery_manager.add_image({
                            imageURL: photos[i].imageURL,
                            thumbURL: photos[i].thumbURL,
                            caption: photos[i].caption,
                            imageFullURL: photos[i].imageFullURL,
                            flickrPhotoId: photos[i].flickrPhotoId
                        })
                    }
                    show_splash_page()
                }, null)
            } else {
                var count = 0;
                $(xml).find("image").each(function() {
                    if (count >= limit) {
                        return
                    }
                    count++;
                    var node = $(this);
                    var attrName = "imageURL";
                    var useMultiSize = context.utils.ship;
                    if (useMultiSize) {
                        if (context.utils.is_retina_display()) {
                            if (context.utils.is_large_screen_mode(context.config)) {
                                attrName = "largeImageURL"
                            }
                        } else {
                            if (context.utils.is_large_screen_mode(context.config)) {
                                if (!$.browser.msie && context.config.usefullscreenexpand && context.features.fullscreen.switched_2_fullscreen()) {
                                    attrName = "largeImageURL"
                                }
                            } else {
                                attrName = "smallImageURL"
                            }
                        }
                        if (!different_size_images_in_config && (node.attr("largeImageURL") || node.attr("smallImageURL"))) {
                            different_size_images_in_config = true
                        }
                        if (attrName != "imageURL" && !node.attr(attrName)) {
                            attrName = "imageURL"
                        }
                    }
                    var imgurl = correct_path(node.attr(attrName));
                    var tu = node.attr("thumbURL");
                    var thmurl = (tu ? correct_path(tu) : imgurl);
                    var purchaseurl = (context.config_manager.isp ? node.attr("purchaseURL") : "");
                    var lgImageUrl = (useMultiSize && node.attr("largeImageURL")) ? correct_path(node.attr("largeImageURL")) : "";
                    var smImageUrl = (useMultiSize && node.attr("smallImageURL")) ? correct_path(node.attr("smallImageURL")) : "";
                    var oriImageUrl = node.attr("imageURL") ? correct_path(node.attr("imageURL")) : "";
                    gallery_manager.add_image({
                        largeImageURL: lgImageUrl,
                        smallImageURL: smImageUrl,
                        originalImageURL: oriImageUrl,
                        imageURL: imgurl,
                        thumbURL: thmurl,
                        title: node.children("title").text(),
                        caption: node.children("caption").text(),
                        linkURL: correct_path(node.attr("linkURL")),
                        linkTarget: node.attr("linkTarget"),
                        purchaseURL: purchaseurl
                    })
                });
                show_splash_page()
            }
        };
        var get_gallery_height = function(donotAdjustHeight) {
            return sizing.get_gallery_height(context.config, context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode, context.features.fullscreen.switched_2_fullscreen(), donotAdjustHeight)
        };
        var get_gallery_width = function() {
            return sizing.get_gallery_width(context.config, context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode, context.features.fullscreen.switched_2_fullscreen())
        };
        var init_before_loading_gallery_html = function(container) {
            if ($.browser.msie && $.browser.version < 8) {
                var element = document.getElementById(context.config.containerid);
                element.innerHTML = "__"
            }
            if (!context.utils.is_ie8()) {
                container.css({
                    height: context.config.galleryheight,
                    width: context.config.gallerywidth
                })
            }
            sizing = new juicebox_sizing_manager($,container,context.utils);
            if (!context.utils.is_ie8()) {
                is_full_screen_mode = sizing.is_fullscreen_mode(context.config)
            }
            sizing.try_set_body_size(context.config, context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode);
            if (!sizing.force_height_calculation(context.config) && (context.config.galleryheight + "").indexOf("%") > 0) {
                $("#" + context.config.containerid).css({
                    height: get_gallery_height(),
                    width: context.config.gallerywidth
                })
            } else {
                container.css({
                    height: context.config.galleryheight,
                    width: context.config.gallerywidth
                })
            }
            if (context.utils.is_ie8()) {
                is_full_screen_mode = sizing.is_fullscreen_mode(context.config)
            }
            if (is_full_screen_mode) {
                $("body").css({
                    padding: "0",
                    margin: "0"
                })
            }
            current_width = get_gallery_width();
            current_height = get_gallery_height()
        };
        var init_after_dom_loaded = function() {
            _(".jb-navigation.jb-classifier-detail-area").fadeOut(0);
            context.utils.init_components(context.features, "fullscreen");
            if (window.location.href.toLowerCase().indexOf("http") !== 0) {
                if (context.utils.is_chrome() || context.utils.is_opera() || context.utils.is_ie_after_11()) {
                    display_error_message(context.config.languagelistall.lcchm);
                    return
                }
            }
            var galleryFile = correct_path(context.config.configurl);
            $.ajax({
                url: galleryFile,
                type: "GET",
                error: function() {
                    $("#" + document_id).html(display_error_message(context.config.languagelistall.ae))
                },
                success: function(data) {
                    var rsp;
                    if (typeof data === "string") {
                        if ($.browser.msie) {
                            rsp = new ActiveXObject("Microsoft.XMLDOM");
                            rsp.async = false;
                            rsp.loadXML(data);
                            data = rsp
                        } else {
                            rsp = new DOMParser();
                            data = rsp.parseFromString(data, "text/xml")
                        }
                    }
                    if (!context.utils.is_new_expanded_window()) {
                        context.config_manager.sync_options(cnfg, data);
                        context.config = context.config_manager.get_config();
                        for (var i in context.features) {
                            context.features[i].setContext(context)
                        }
                        if (context.features.fullscreen.switched_2_fullscreen()) {
                            removeIgnoredOptions()
                        }
                    }
                    image_change_speed = 1000 * context.config.imagetransitiontime;
                    if (image_change_speed <= 0) {
                        image_change_speed = 1000
                    }
                    context.index_panel.synchronize_config(context.config);
                    _("." + theme_cls).attr("style", get_background_style());
                    if (context.config.showpreloader) {
                        window.setTimeout(function() {
                            load_images(data)
                        }, 300)
                    } else {
                        load_images(data)
                    }
                }
            })
        };
        var display_error_message = function(msg) {
            var container;
            if (context.config.containerid) {
                container = $("#" + context.config.containerid)
            } else {
                container = _("")
            }
            var msgHtml;
            if (container.height() <= 0 && context.config.galleryheight.indexOf("%") > 0) {
                container.height($(window).height() * parseInt(context.config.galleryheight) / 100)
            }
            if (container && container.length > 0) {
                msgHtml = "<table style='width:100%;height:100%;text-align:center;background-color:#777;'><tr><td><div class='jb-error-message' style='color:white;font-family:sans-serif;font-size:18px;'>" + msg + "</div></td></tr></table>";
                container.html(msgHtml)
            } else {
                msgHtml = "<table style='width:100%;height:100%;text-align:center;font-family:sans-serif;font-size:18px;background-color:#777;color:#FFF;'><tr><td>" + msg + "</td></tr></table>";
                document.write(msgHtml)
            }
        };
        var get_badge_style_str = function() {
            return ["st", "yl", "e", "=", "'", "dis", "pl", "ay", ":", "bl", "ock", " !", "imp", "ort", "ant", ";", "width", ":", "9", "0", "px", " !im", "port", "ant;", "height", ":", "2", "4", "px", " !", "imp", "ort", "ant", ";", "overflow", ":", "hidden", " !", "imp", "ort", "ant", ";", "position", ":", "absolute", " !", "imp", "ort", "ant", ";", "z-index", ":", "3", "0", "0", "0"].join("")
        };
        var add_css_link = function(linkUrl) {
            var csslnk = document.createElement("link");
            csslnk.type = "text/css";
            csslnk.rel = "stylesheet";
            var head = document.getElementsByTagName("head")[0] || document.documentElement;
            csslnk.href = linkUrl;
            head.appendChild(csslnk)
        };
        var init = function() {
            context.utils.init_components(context.features, "hashstatus");
            juicebox_instance_count++;
            if (context.config.themeurl) {
                themeUrl = context.config.themeurl
            } else {
                if (context.config.theme) {
                    themeUrl = correct_path(context.config.jbcore) + "themes/" + context.config.theme + "/css/style.css"
                }
            }
            add_css_link(themeUrl);
            var container;
            if (context.config.containerid) {
                var dom_loading_tmr = 0;
                container = $("#" + context.config.containerid);
                if (container.length > 0) {
                    init_before_loading_gallery_html(container);
                    container.html(gallery_skeleton(document_id));
                    init_after_dom_loaded()
                } else {
                    dom_loading_tmr = window.setInterval(function() {
                        var cntnr = $("#" + context.config.containerid);
                        if (cntnr.length <= 0) {
                            if ($("body").length > 0) {
                                display_error_message(context.config.languagelistall.noid01 + context.config.containerid + context.config.languagelistall.noid02);
                                if (dom_loading_tmr) {
                                    window.clearInterval(dom_loading_tmr)
                                }
                                dom_loading_tmr = 0;
                                return
                            }
                            return
                        }
                        if (dom_loading_tmr) {
                            window.clearInterval(dom_loading_tmr)
                        }
                        dom_loading_tmr = 0;
                        init_before_loading_gallery_html(cntnr);
                        cntnr.html(gallery_skeleton(document_id));
                        init_after_dom_loaded()
                    }, 200)
                }
            } else {
                document.write(get_container_html(document_id));
                container = _("");
                init_before_loading_gallery_html(container);
                container.html(get_gallery_frame_html());
                init_after_dom_loaded()
            }
        };
        var get_container_html = function(documentId, token) {
            var ver = "";
            if ($.browser.msie) {
                ver = "jb-flag-msie jb-flag-msiever" + parseInt($.browser.version) + (context.utils.is_earlier_ie() ? " jb-flag-msie-bf9" : "")
            } else {
                if (context.utils.is_swipable_device()) {
                    ver = "jb-flag-touchable"
                }
            }
            return "<div id='" + documentId + "' tabindex='0' class='juicebox-gallery " + ver + "' style='width:100%;height:100%;'>" + (token ? token : "") + "</div>"
        };
        var get_autoplay_status_html = function() {
            if (!context.config.showautoplaystatus) {
                return ""
            }
            return "<div class='jb-status-message' style='position:absolute;display:none;" + (context.config.galleryfontface ? "font-family:" + context.config.galleryfontface + ";" : "") + "'></div>"
        };
        var get_background_style = function() {
            var hstr = "height:100%";
            var bkgrndcolor = context.config.backgroundcolor;
            if (context.features.fullscreen.switched_2_fullscreen() || context.utils.is_new_expanded_window()) {
                if (context.config.expandedbackgroundcolor) {
                    bkgrndcolor = context.config.expandedbackgroundcolor
                }
            }
            var bkcolorstyle = (bkgrndcolor ? "background-color:" + context.utils.format_color(bkgrndcolor) + ";" + (context.utils.is_earlier_ie() ? context.config.backgroundopacity + ";" : "") : "");
            return "display:none;width:100%;" + hstr + ";" + bkcolorstyle
        };
        var get_badge_image_url = function() {
            if (context.utils.is_adobe_air()) {
                return ""
            }
            return ["u", "rl", "(", "ht", "tp", ":", "/", "/", "j", "ui", "ce", "b", "o", "x", ".", "n", "e", "t", "/", "i", "m", "g", "/", "jb", "0", "0", "1", ".", "p", "n", "g", ")"].join("")
        };
        var get_badge_link = function() {
            return ["on", "c", "l", "i", "c", "k", "=", '"', "w", "i", "n", "d", "o", "w", ".", "o", "p", "e", "n", "(", "'", "h", "t", "t", "p", ":", "/", "/", "w", "w", "w", ".", "j", "u", "i", "c", "eb", "ox", ".", "ne", "t'", ")", ";", "return ", "false", ';"'].join("")
        };
        var get_gallery_frame_html = function() {
            var badge = "";
            if (!context.utils.ship) {
                badge = "<div " + get_badge_style_str() + ($.browser.msie ? "" : " !important") + ";background: " + get_badge_image_url() + " no-repeat 0 0 !important;cursor:pointer;margin:0 !important;padding:0 !important;bottom:0 !important;right:0 !important' " + get_badge_link() + "></div>"
            }
            if (context.utils.is_adobe_air()) {
                badge = badge.replace("<div style=", "<div class='" + ["j", "b", "-", "b", "a", "d", "g", "e"].join("") + "' style=").replace(";background: " + get_badge_image_url() + " no-repeat 0 0 !important;", ";")
            }
            var capposition = context.config.captionposition.toUpperCase();
            return "<div class='" + theme_cls + "' style='" + get_background_style() + "'>" + context.features.backgroundimage.getHtml() + context.features.toppanel.getHtml() + "<div class='jb-panel-index jb-classifier-thumb-area' data-layer='300' style='display:none;position:absolute !important;z-index:300;'><div class='jb-idx-thumbnail-container' style='height:100% !important;width:100% !important;margin:0;padding:0;position:relative;'></div><div class='jb-navigation index-navigation jb-classifier-thumb-area'><div class='jbn-nav-button jbn-left-button jbn-nav-button-icon jb-classifier-layer' data-layer='1000' style='z-index:1000;display:none;" + context.utils.get_nav_icon_style(context.config) + "'>" + context.utils.add_font_icon_4_ie8(context.config, "&#xe000;") + "</div><div class='jbn-nav-button jbn-right-button jbn-nav-button-icon jb-classifier-layer' data-layer='1000' style='z-index:1000;display:none;" + context.utils.get_nav_icon_style(context.config) + "'>" + context.utils.add_font_icon_4_ie8(context.config, "&#xe001;") + "</div></div><div class='jb-idx-thumbnail-show-more' style='left:10px;bottom:10px;height:30px;width:100%;margin:0;padding:0;position:absolute;display:none;'><a href='#'>more...</a></div></div>" + context.features.backbutton.getHtml() + context.features.buttonbar.getHtml4IndexPage() + "<div class='jb-panel-detail jb-classifier-detail-area jb-classifier-layer' data-layer='50' style='position:absolute !important'></div>" + context.features.grytitle.getHtml() + context.features.buttonbar.getHtml() + badge + ((capposition != "NONE" && capposition != "BELOW_THUMBS") ? context.features.caption.getHtml() : "") + "<div class='jb-navigation jb-classifier-detail-area jb-classifier-layer' data-layer='500' style='height:100%;z-index:500;'>" + get_autoplay_status_html() + "<div class='jbn-nav-touch-area jbn-nav-left-touch-area'>" + context.features.imagenav.getHtml(true) + "</div><div class='jbn-nav-touch-area jbn-nav-right-touch-area'>" + context.features.imagenav.getHtml() + "</div></div></div>"
        };
        var get_current_gallery_image_info = function() {
            var glryUrl;
            var currentImage = context.detail_panel.get_current_photo();
            if (context.config.enabledirectlinks) {
                glryUrl = window.location.href
            } else {
                glryUrl = context.features.hashstatus.getUrlWithImageHash(currentImage.position)
            }
            var galleryTitle = _(".jb-area-large-mode-title").text();
            var imgTitle = _(".caption_" + currentImage.position + " .jb-caption .jb-caption-title").text();
            var captionDesc = _(".caption_" + currentImage.position + " .jb-caption .jb-caption-desc").text();
            var sharedTxt = galleryTitle;
            if (sharedTxt) {
                if (imgTitle) {
                    sharedTxt += " | " + imgTitle
                }
            } else {
                if (imgTitle) {
                    sharedTxt = imgTitle
                }
            }
            var allTitles = sharedTxt;
            if (sharedTxt && captionDesc) {
                sharedTxt += " | " + captionDesc
            }
            if (!sharedTxt) {
                sharedTxt = captionDesc
            }
            return {
                shareUrl: encodeURIComponent(glryUrl),
                imageUrl: encodeURIComponent(context.utils.convert_to_absolute_path(currentImage.imageURL)),
                shareText: encodeURIComponent(sharedTxt),
                caption: encodeURIComponent(captionDesc),
                title: encodeURIComponent(imgTitle),
                galleryTitle: encodeURIComponent(galleryTitle),
                allTitles: encodeURIComponent(allTitles)
            }
        };
        var gallery_skeleton = function(documentId) {
            var frameHtml = get_gallery_frame_html();
            return get_container_html(documentId, frameHtml)
        };
        var lastPageEventIndex = -1;
        var after_page_changed = function(skipEvent) {
            context.features.indexnav.repaint();
            if (!skipEvent && context.config_manager.isp && juicebox_instances[context.instance_id] && typeof (juicebox_instances[context.instance_id].onThumbPageChange) === "function") {
                var curntPage = parseInt(context.index_panel.get_index()) + 1;
                if (curntPage != lastPageEventIndex) {
                    lastPageEventIndex = curntPage;
                    var curntImage = context.detail_panel.get_current_photo();
                    var evntObj = {
                        id: curntPage,
                        title: context.config.gallerytitle,
                        caption: curntImage.caption
                    };
                    juicebox_instances[context.instance_id].onThumbPageChange(evntObj)
                }
            }
        };
        var show_thumbnails = function(imgpos) {
            var cntSize = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
            context.index_panel.show_page_4_image_position(imgpos, cntSize.index_panel_width, cntSize.index_panel_height);
            context.utils.reppaint_components(context.features, "indexnav,grytitle,showthumbsbutton");
            if (context.index_panel.is_visible()) {
                set_containers_size_and_position(cntSize);
                context.features.indexnav.setPosition(cntSize)
            }
        };
        var need_jump_2_page = function(position) {
            if (!context.utils.is_swipable_device() || !context.features.touchevent.isInTransitioning()) {
                return false
            }
            var cntSize = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
            context.index_panel.show_page_4_image_position(position, cntSize.index_panel_width, cntSize.index_panel_height);
            return true
        };
        var before_show_main_image = function(position) {
            if (!context.features.autoplay.isPlaying() || context.config.autoplaythumbs) {
                context.index_panel.set_thumbnail_visited(position);
                if (context.index_panel.is_visible()) {
                    var idxRange = context.index_panel.get_image_index_range();
                    var rangeSize = idxRange.to - idxRange.from + 1;
                    if (position < idxRange.from - rangeSize) {
                        return
                    }
                    if (position > idxRange.to + rangeSize) {
                        return
                    }
                    if (position < idxRange.from && position === 0) {
                        if (!need_jump_2_page(position)) {
                            context.index_panel.move_to_next_page()
                        }
                    } else {
                        if (position > idxRange.to) {
                            if (!need_jump_2_page(position)) {
                                context.index_panel.move_to_next_page()
                            }
                        } else {
                            if (position < idxRange.from) {
                                if (!need_jump_2_page(position)) {
                                    context.index_panel.move_to_prev_page()
                                }
                            }
                        }
                    }
                }
            }
        };
        var after_show_main_image = function(position, fromHashEvent) {
            is_switching_image = false;
            context.features.grytitle.repaint();
            if (!fromHashEvent || window.location.href.split("#").length < 2 || !window.location.href.split("#")[1]) {
                context.features.hashstatus.setImageHash(position)
            }
            if (!context.features.autoplay.isPlaying() || context.config.autoplaythumbs) {
                var imgrange = context.index_panel.get_image_index_range();
                if (imgrange.from > position || imgrange.to < position) {
                    show_thumbnails(position)
                }
            }
            context.utils.reppaint_components(context.features, "buttonbar,backbutton");
            set_caption_height_mode();
            if (overlay_visible || context.config.imagenavposition.toUpperCase() != "STAGE") {
                context.features.imagenav.repaint()
            }
            context.features.showthumbsbutton.repaint();
            if (context.utils.is_swipable_device() && overlay_visible) {
                context.features.showinfo.showInfoCtrls(overlay_visible)
            }
            if (context.config_manager.isp && juicebox_instances[context.instance_id] && typeof (juicebox_instances[context.instance_id].onImageChange) === "function") {
                needImageEventOnFirstLoad = false;
                var curntImage = context.detail_panel.get_current_photo();
                var curntImgIdxNo = parseInt(curntImage.position) + 1;
                var evntObj = {
                    id: curntImgIdxNo,
                    title: context.config.gallerytitle,
                    caption: curntImage.caption
                };
                if (curntImgIdxNo != lastImageEventIndex) {
                    lastImageEventIndex = curntImgIdxNo;
                    juicebox_instances[context.instance_id].onImageChange(evntObj)
                }
            }
            handle_image_preload();
            if (context.utils.is_chrome()) {
                _(" *").disableSelection()
            } else {
                _(".jb-dt-main-image-" + position + " img").disableSelection();
                _(".table_page_" + context.index_panel.get_index() + " img").disableSelection();
                if ($.browser.mozilla) {
                    _(".jb-navigation.jb-classifier-detail-area *").disableSelection()
                }
            }
            if ($.browser.msie && $.browser.version >= 8 && context.config.firstimageindex > 0) {
                context.index_panel.set_thumbnail_visited(position);
                window.setTimeout(function() {
                    context.index_panel.set_thumbnail_visited(position)
                }, 200)
            }
        };
        var needImageEventOnFirstLoad = true;
        var lastImageEventIndex = -1;
        var show_main_image = function(position, delay, isfirstimage, fromHashEvent, dwidth, dheight) {
            context.features.touchevent.resetFlags();
            if (!delay && $.browser.msie) {
                window.setTimeout(function() {
                    context.index_panel.set_thumbnail_visited(position)
                }, 100)
            } else {
                context.index_panel.set_thumbnail_visited(position)
            }
            if (!context.utils.is_large_screen_mode(context.config)) {
                context.features.buttonbar.setPosition()
            }
            if (isfirstimage) {
                context.detail_panel.populate_photo_html(position, delay, function() {
                    after_show_main_image(position, needImageEventOnFirstLoad);
                    needImageEventOnFirstLoad = false
                }, context.features.caption.isVisible(), false, dwidth, dheight);
                return
            }
            if (delay) {
                is_switching_image = true;
                context.detail_panel.change_2_photo(false, 0, context.features.caption.isVisible(), position)
            } else {
                context.detail_panel.populate_photo_html(position, 0, null, context.features.caption.isVisible(), false, dwidth, dheight);
                after_show_main_image(position, fromHashEvent)
            }
            needImageEventOnFirstLoad = false
        };
        var handle_image_preload = function() {
            var range;
            var preldopt = context.config.imagepreloading.toUpperCase();
            if (preldopt === "ALL") {
                range = {
                    from: 0,
                    to: gallery_manager.length() - 1
                }
            } else {
                if (preldopt === "NEXT") {
                    range = context.index_panel.get_image_index_range(2)
                } else {
                    if (preldopt === "NONE") {
                        range = {
                            from: context.detail_panel.get_current_photo().position,
                            to: context.detail_panel.get_current_photo().position
                        }
                    } else {
                        range = context.index_panel.get_image_index_range()
                    }
                }
            }
            if (flickr_loader) {
                flickr_loader.load_flickr_images_detail(gallery_manager.get_images(), range, update_flickr_image_details)
            }
            if (context.utils.is_large_screen_mode(context.config)) {
                context.detail_panel.preload_images(range.from, range.to + 1)
            }
        };
        var set_touch_component_height = function(height) {
            var size = sizing.get_containers_size_and_position(current_width, current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
            set_touch_component_size(size.detail_panel_top, size.detail_panel_left, size.detail_panel_width, height)
        };
        var set_touch_component_size = function(top, left, width, height) {
            _(".jb-navigation.jb-classifier-detail-area").css({
                top: top,
                left: left,
                width: width,
                height: height
            })
        };
        var switch_2_main_image = function(position, cb) {
            context.features.autoplay.stop();
            if (context.index_panel.is_visible() && context.detail_panel.is_visible()) {
                show_main_image(position, image_change_speed);
                return
            }
            context.detail_panel.set_visible_flag(true);
            context.index_panel.set_visible_flag(false);
            var hideIndexEvent = function() {
                if (!context.utils.is_large_screen_mode(context.config)) {
                    if (context.config_manager.isp && juicebox_instances[context.instance_id] && typeof (juicebox_instances[context.instance_id].onShowThumbs) === "function") {
                        juicebox_instances[context.instance_id].onShowThumbs(false)
                    }
                }
            };
            if (_(".jb-panel-index").is(":visible")) {
                var navpnl = _(".jb-panel-index img");
                if (!navpnl.length) {
                    _(".jb-classifier-thumb-area").hide();
                    _(".jb-classifier-detail-area, .jb-area-caption").show();
                    show_main_image(position);
                    if (cb) {
                        cb()
                    }
                } else {
                    var transitionTime = 1000 * context.config.imagetransitiontime;
                    navpnl.stop();
                    context.utils.fade_out(context.config, navpnl, transitionTime);
                    window.setTimeout(function() {
                        _(".jb-classifier-thumb-area").hide();
                        var dtpnl = _(".jb-classifier-detail-area, .jb-area-caption");
                        dtpnl.stop();
                        _(".jb-area-caption").html("");
                        if (context.utils.is_firefox3()) {
                            dtpnl.css({
                                opacity: 1,
                                display: "none"
                            })
                        }
                        dtpnl.children(".jb-dt-main-frame").remove();
                        context.utils.fade_in(context.config, dtpnl, transitionTime);
                        window.setTimeout(function() {
                            show_main_image(position, transitionTime);
                            hideIndexEvent();
                            if (cb) {
                                cb()
                            }
                        }, 20)
                    }, transitionTime > 50 ? transitionTime - 50 : transitionTime)
                }
            } else {
                show_main_image(position);
                if (cb) {
                    cb()
                }
            }
        };
        var set_caption_height_mode = function() {
            if (context.config_manager.isp || !context.detail_panel.is_visible()) {
                return
            }
            var isHigh = true;
            if (context.index_panel.is_visible() && context.config.captionposition.toUpperCase() !== "BOTTOM" && context.config.captionposition.toUpperCase() !== "BELOW_THUMBS") {
                isHigh = false
            }
            context.detail_panel.set_caption_height_mode(isHigh)
        };
        var repaint_timer = 0;
        var repaint = function(force, ignoreIndexPnl, noresize, donotAdjustHeight, skipShowMain) {
            sizing.try_set_body_size(context.config, context.features.fullscreen.switched_2_fullscreen() || is_full_screen_mode);
            var _current_height = noresize ? current_height : get_gallery_height(donotAdjustHeight);
            var _current_width = noresize ? current_width : get_gallery_width();
            var cntSize;
            if (!sizing.force_height_calculation(context.config) && (context.config.galleryheight + "").indexOf("%") > 0) {
                var glryheight = _current_height;
                var glrycnter = $("#" + context.config.containerid).length > 0 ? $("#" + context.config.containerid) : _("").parent();
                var adjht = 0;
                if (context.features.fullscreen.switched_2_fullscreen() && context.config.autofullscreenexpand) {
                    adjht = 3
                }
                glrycnter.height(glryheight + adjht)
            }
            if ($("#jb-glry-dlg:visible").length > 0 && _("").parent().attr("id") != "jb-glry-dlg") {
                return
            }
            if (right_button_offset == null) {
                right_button_offset = _(".jbn-right-button").width() + parseInt(_(".jbn-right-button").css("margin-right"))
            }
            context.index_panel.cleanup_initial_load_flag();
            if (force || ((current_width != _current_width || current_height != _current_height))) {
                current_width = _current_width;
                current_height = _current_height;
                glryheight = _current_height;
                if (context.features.fullscreen.switched_2_fullscreen()) {
                    _("").css({
                        width: _current_width,
                        height: glryheight
                    })
                } else {
                    if (sizing.force_height_calculation(context.config)) {
                        _("").css({
                            height: glryheight
                        })
                    }
                    if (sizing.force_width_calculation(context.config)) {
                        _("").css({
                            width: _current_width
                        })
                    }
                }
                setup_layout(_current_width, _current_height, context.detail_panel.is_visible());
                cntSize = sizing.get_containers_size_and_position(_current_width, _current_height, context.index_panel.is_visible(), context.detail_panel.is_visible(), context.config_manager.isp, context.features.toppanel.isNeeded(), context.index_panel.get_thumb_height(), context.config, index_panel.getCurrentDisplayingThumbCount());
                set_containers_size_and_position(cntSize, skipShowMain);
                if (!skipShowMain) {
                    if (context.detail_panel.is_visible()) {
                        var wrappersel = (context.utils.is_swipable_device() || context.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE") ? ":not(.jb-classifier-link-wrapper)" : "";
                        var excluded = overlay_visible ? "" : ":not(.jb-classifier-show-on-over)";
                        var mainselstr = (overlay_visible && context.utils.is_swipable_device()) ? ".jb-classifier-detail-area" + excluded + wrappersel + ", .jb-area-caption" : ".jb-classifier-detail-area" + excluded + wrappersel;
                        var imgs;
                        if (context.utils.is_earlier_ie()) {
                            _(mainselstr).fadeIn(100);
                            imgs = _(".jb-panel-detail img");
                            imgs.fadeIn(100);
                            _(".jb-panel-detail").fadeIn(100)
                        } else {
                            _(mainselstr).css("opacity", 1).show();
                            imgs = _(".jb-panel-detail img");
                            imgs.css("opacity", 1).show();
                            _(".jb-panel-detail").css("opacity", 1)
                        }
                        if (_(".jb-panel-detail").html()) {
                            context.detail_panel.repaint(cntSize.detail_panel_width, cntSize.detail_panel_height)
                        } else {
                            show_main_image(context.detail_panel.get_photo_position(), 0, false, true, cntSize.detail_panel_width, cntSize.detail_panel_height)
                        }
                        context.features.caption.setMaxHeight(cntSize)
                    } else {
                        context.detail_panel.repaint(cntSize.detail_panel_width, cntSize.detail_panel_height);
                        _(".jb-classifier-detail-area, .jb-area-caption, .jb-classifier-link-wrapper.jb-classifier-detail-area").hide()
                    }
                }
                if (context.index_panel.is_visible() && !ignoreIndexPnl) {
                    _(".jb-classifier-thumb-area").show();
                    _(".jb-panel-index").show();
                    var imgpos = context.detail_panel.get_photo_position();
                    context.index_panel.show_page_4_image_position(imgpos, cntSize.index_panel_width, cntSize.index_panel_height, true)
                } else {
                    _(".jb-panel-index").hide()
                }
                context.features.showthumbsbutton.repaint();
                context.index_panel.set_thumbnail_visited(context.detail_panel.get_photo_position());
                set_caption_height_mode();
                context.utils.set_components_position(context.features, "imagenav,indexnav,grytitle,buttonbar", cntSize)
            }
            if (context.utils.ios_version() >= 7 && current_width > current_height) {
                window.scrollTo(0, -40)
            }
            if (!donotAdjustHeight) {
                if (context.features.fullscreen.switched_2_fullscreen()) {
                    if (!context.utils.is_android() && !$.browser.msie) {
                        var offset = _("").offset();
                        if (offset) {
                            window.scrollTo(offset.left, offset.top)
                        }
                    }
                } else {
                    if (is_full_screen_mode) {
                        if (context.utils.is_iphone()) {
                            window.scrollTo(0, 1);
                            if (repaint_timer) {
                                window.clearTimeout(repaint_timer);
                                repaint_timer = 0
                            }
                            repaint_timer = window.setTimeout(function() {
                                window.scrollTo(0, 1)
                            }, 1000)
                        }
                    }
                }
            }
            context.utils.reppaint_components(context.features, "backgroundimage")
        };
        var hide_url_bar = function() {
            if (context.utils.is_iphone()) {
                window.scrollTo(0, 1)
            }
        };
        if (context.config.css != null) {
            document.write("<style id='" + document_id + "_style'>" + context.config.css.replace(/\}\s/g, "} #" + document_id + " ").replace(/^/, "#" + document_id + " ") + "</style>");
            init()
        } else {
            init()
        }
        var next_page = function() {
            if (!can_page_move(true)) {
                return false
            }
            context.index_panel.move_to_next_page(0, context.features.indexnav.repaint);
            handle_image_preload();
            return false
        };
        var previous_page = function() {
            if (!can_page_move(false)) {
                return false
            }
            context.index_panel.move_to_prev_page(0, context.features.indexnav.repaint);
            handle_image_preload();
            return false
        };
        var next_image = function(deltaX) {
            if (!can_image_move(true) || !context.detail_panel.is_visible()) {
                return false
            }
            context.detail_panel.move_2_next_photo(deltaX, context.features.caption.isVisible());
            return false
        };
        var previous_image = function(deltaX) {
            if (!can_image_move(false) || !context.detail_panel.is_visible()) {
                return false
            }
            context.detail_panel.move_2_previous_photo(deltaX, context.features.caption.isVisible());
            return false
        };
        var set_containers_size_and_position = function(expected_size, skipCaptionPosition) {
            var set_toucharea_height = function(position, size) {
                var halfht = size.detail_panel_height / 2 + parseInt(_(".jbn-right-button").height() / 2);
                var clnk = _(".jb-cap-frame.caption_" + position + " a");
                var cappos = context.config.captionposition.toUpperCase();
                var needReduce = cappos != "BOTTOM" && cappos != "NONE" && cappos != "BELOW_IMAGE" && cappos != "BELOW_THUMBS";
                set_touch_component_size(size.detail_panel_top, size.detail_panel_left, size.detail_panel_width, size.detail_panel_height - (!needReduce || clnk.length <= 0 ? 0 : (halfht > context.config.maxcaptionheight ? context.config.maxcaptionheight : halfht)))
            };
            var pos = context.detail_panel.get_current_photo().position;
            set_toucharea_height(pos, expected_size);
            context.index_panel.set_container_size(expected_size.index_panel_width, expected_size.index_panel_height, expected_size.index_panel_top, expected_size.index_panel_left);
            context.detail_panel.set_container_size(expected_size.detail_panel_width, expected_size.detail_panel_height, expected_size.detail_panel_top, expected_size.detail_panel_left);
            var cpppos = context.config.captionposition.toUpperCase();
            var caphover = !context.utils.is_earlier_ie() && (cpppos != "NONE" && cpppos != "BOTTOM" && cpppos != "BELOW_IMAGE" && cpppos != "BELOW_THUMBS");
            var capHeight = expected_size.caption_panel_height;
            if (!($.browser.msie && $.browser.version <= 8) && (context.utils.is_large_screen_mode(context.config) && (context.features.showthumbsbutton.isThumbsHidden() || caphover) || !context.utils.is_large_screen_mode(context.config))) {
                capHeight = "100%"
            }
            var capTop = expected_size.caption_panel_top;
            if (cpppos === "BELOW_THUMBS") {
                capHeight = "auto"
            }
            if (!skipCaptionPosition) {
                context.features.caption.setAreaStyle({
                    width: expected_size.caption_panel_width,
                    height: capHeight,
                    top: capTop,
                    left: expected_size.caption_panel_left,
                    bottom: expected_size.caption_panel_bottom
                });
                context.features.caption.setMaxHeight(expected_size)
            }
            context.features.toppanel.setAreaStyle({
                width: expected_size.top_panel_width,
                height: expected_size.top_panel_height,
                top: expected_size.top_panel_top,
                left: expected_size.top_panel_left
            })
        };
        context.utils.init_components(context.features, "api");
        juicebox_instances[context.instance_id].debug = function(script) {
            context.config.debugmode = true;
            eval(script)
        }
        ;
        return juicebox_instances[context.instance_id]
    }
}
juicebox_registered_components.api = function() {
    var b, c;
    var d = function(e) {
        b = e;
        c = b._
    };
    var a = function() {
        var g = {
            sendMessage: function() {
                if (b.config_manager.isp && juicebox_instances[b.instance_id] && typeof (juicebox_instances[b.instance_id].onExpand) === "function") {
                    juicebox_instances[b.instance_id].onExpand(false)
                }
            },
            restore: function(h, i) {
                b.features.hashstatus.setExpanded(false);
                b.features.hashstatus.enableHashEvent(true);
                b.setExtendedGlry(null);
                if (b.features.splash.isSet()) {
                    return
                }
                if (typeof (i) != "undefined") {
                    window.setTimeout(function() {
                        b.showOverlayWithSetting(b.isOverlayVisible(), 0);
                        b.features.showinfo.showInfoCtrls(b.isOverlayVisible());
                        if (!b.detail_panel.is_visible()) {
                            c(".jb-area-caption").hide()
                        }
                        $('.jb-dt-main-frame[style*="opacity: 0.01"]').fadeIn()
                    }, 100)
                }
                b.features.showthumbsbutton.toggle_index_panel_4_lsm(true, h)
            },
            setGallerySize: function(m, i) {
                if (b.features.fullscreen.switched_2_fullscreen()) {
                    return
                }
                var k = $("#" + b.config.containerid);
                if (k.length <= 0) {
                    return
                }
                var j = parseInt(m) + "px";
                var l = parseInt(i) + "px";
                b.turnOffFullscreen();
                b.config.gallerywidth = j;
                b.config.galleryheight = l;
                k.css({
                    height: l,
                    width: j
                });
                c("").height(l);
                b.glryRepaint(true)
            },
            getScreenMode: function() {
                return b.utils.is_large_screen_mode(b.config) ? "LARGE" : "SMALL"
            }
        };
        var e = function(j, i) {
            if (b.features.splash.visible()) {
                return false
            }
            var h = b.index_panel.is_visible();
            if (b.getExtendedGlry()) {
                h = b.getExtendedGlry().isIndexVisible()
            }
            if (b.utils.is_large_screen_mode(b.config) || !h) {
                if (i) {
                    i()
                }
                return false
            }
            var k = b.detail_panel.get_photo_position() + j;
            if (k < 0) {
                if (b.config.enablelooping) {
                    k = b.gallery_manager().length() - 1
                } else {
                    k = 0
                }
            }
            if (k >= b.gallery_manager().length()) {
                if (b.config.enablelooping) {
                    k = 0
                } else {
                    k = b.gallery_manager().length() - 1
                }
            }
            if (b.getExtendedGlry()) {
                b.getExtendedGlry().switch2MainE(k)
            } else {
                b.switch2Main(k, i)
            }
            return true
        };
        var f = b.config_manager.isp ? {
            showGallery: function(h) {
                if (!h) {
                    b.features.audio.stop();
                    b.features.autoplay.stop()
                }
                h ? c("").show() : c("").hide()
            },
            showImage: function(i) {
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().showImageE(i);
                    return
                }
                var h = b.gallery_manager().length();
                i--;
                if (i < 0 || i >= h) {
                    return
                }
                b.showImage(i)
            },
            showNextImage: function() {
                if (e(1)) {
                    return
                }
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().showNextImageE();
                    return
                }
                b.nextImage()
            },
            showPreviousImage: function() {
                if (e(-1)) {
                    return
                }
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().showPreviousImageE();
                    return
                }
                b.previousImage()
            },
            showIndexByImage: function() {
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().showIndexByImageE();
                    return
                }
                b.redrawIndexPanel()
            },
            toggleAutoPlay: function(h) {
                e(0, function() {
                    if (b.getExtendedGlry()) {
                        b.getExtendedGlry().toggleAutoPlayE(false, h);
                        return
                    }
                    b.features.autoplay.toggleAutoPlay(false, h)
                })
            },
            toggleThumbs: function() {
                if (e(0)) {
                    return
                }
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().toggleThumbsE();
                    return
                }
                b.features.showthumbsbutton.indexButtonClicked(true)
            },
            toggleAudio: function() {
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().toggleAudioE();
                    return
                }
                b.features.audio.toggleAudioPlay()
            },
            toggleExpand: function() {
                if (b.getExtendedGlry()) {
                    b.getExtendedGlry().toggleExpandE();
                    return
                }
                b.features.fullscreen.full_screen()
            },
            toggleOverlay: function() {
                if (b.features.splash.visible()) {
                    return
                }
                b.setOverlay(!b.isOverlayVisible(), 250)
            },
            openImageLink: function() {
                b.features.openurl.open_url()
            },
            showThumbPage: function(h) {
                h--;
                b.index_panel.show_page_by_page_index(h)
            },
            getImageInfo: function(j) {
                j--;
                var h = b.gallery_manager().length();
                if (j < 0 || j >= h) {
                    return null
                }
                var i = b.gallery_manager().get_image(j);
                return {
                    id: parseInt(i.position) + 1,
                    imageURL: i.originalImageURL,
                    largeImageURL: i.largeImageURL,
                    smallImageURL: i.smallImageURL,
                    displayingImageURL: i.imageURL,
                    thumbURL: i.thumbURL,
                    caption: i.caption,
                    title: i.title,
                    linkURL: i.linkURL,
                    linkTarget: i.linkTarget
                }
            },
            getImageCount: function() {
                return b.gallery_manager().length()
            },
            getThumbPageIndex: function() {
                return parseInt(b.index_panel.get_index()) + 1
            },
            getImageIndex: function() {
                return parseInt(b.detail_panel.get_current_photo().position) + 1
            }
        } : {};
        if (b.config_manager.isp && b.features.fullscreen.getPersistor().parent_gallery) {
            f = {
                showImageE: function(i) {
                    var h = b.gallery_manager().length();
                    i--;
                    if (i < 0 || i >= h) {
                        return
                    }
                    b.showImage(i)
                },
                showNextImageE: b.nextImage,
                showPreviousImageE: b.previousImage,
                showIndexByImageE: b.redrawIndexPanel,
                toggleAutoPlayE: b.features.autoplay.toggleAutoPlay,
                toggleThumbsE: b.features.showthumbsbutton.indexButtonClicked,
                toggleAudioE: b.features.audio.toggleAudioPlay,
                toggleExpandE: b.features.fullscreen.full_screen,
                switch2MainE: b.switch2Main,
                isIndexVisible: b.index_panel.is_visible
            }
        }
        juicebox_instances[b.instance_id] = juicebox_lib.jQuery.extend(g, f)
    };
    return {
        setContext: d,
        init: a
    }
}
;
juicebox_registered_components.touchevent = function() {
    var q, D;
    var f = juicebox_lib.jQuery;
    var k = false, o = false, B = 0, r, d, w, p, c, u;
    var v = function(E) {
        q = E;
        D = q._
    };
    var e = function() {
        g()
    };
    var t = function() {};
    var i = function() {
        return {
            x: w,
            y: u
        }
    };
    var y = function() {
        k = false;
        o = false;
        if (B) {
            window.clearTimeout(B);
            B = 0
        }
    };
    var x = function() {
        return k
    };
    var j = function() {
        return o
    };
    var A = function(E) {
        return k = E
    };
    var h = function(E) {
        return o = E
    };
    var n = function(E) {
        if (D(".jb-area-caption").is(":visible")) {
            D(".jb-area-caption").addClass("jb-status-cap-hide-4-move").fadeOut(E)
        }
    };
    var m = function(E) {
        D(".jb-area-caption.jb-status-cap-hide-4-move").removeClass("jb-status-cap-hide-4-move").fadeIn(E)
    };
    var a = function(E) {
        if (q.config.imagenavposition.toUpperCase() != "IMAGE") {
            return
        }
        D(".jb-classifier-detail-area .jbn-nav-button div").fadeOut(E)
    };
    var b = function() {
        if (q.config.imagenavposition.toUpperCase() != "IMAGE") {
            return
        }
        set_image_nav()
    };
    var z = function(E) {
        if (q.config.buttonbarposition.toUpperCase() != "OVERLAY_IMAGE") {
            return
        }
        D(".jb-classifier-link-wrapper.jb-classifier-detail-area, .jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar").fadeOut(E)
    };
    var C = function(E) {
        if (q.config.buttonbarposition.toUpperCase() != "OVERLAY_IMAGE") {
            return
        }
        if (q.utils.is_buttonbarposition_default(q.config) && !q.isOverlayVisible()) {
            return
        }
        if (!q.detail_panel.is_visible()) {
            return
        }
        if (!E) {
            E = 0
        }
        D(".jb-classifier-link-wrapper.jb-classifier-detail-area, .jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar").fadeIn(E)
    };
    var s = function(F, E) {
        q.detail_panel.move_back(F);
        if (q.config.imagenavposition.toUpperCase() == "IMAGE") {
            window.setTimeout(function() {
                b()
            }, 500 * q.config.imagetransitiontime)
        }
        if (q.utils.is_buttonbarposition_default(q.config) || q.config.buttonbarposition.toUpperCase() == "OVERLAY_IMAGE") {
            window.setTimeout(function() {
                C()
            }, 500 * q.config.imagetransitiontime)
        }
        window.setTimeout(function() {
            m()
        }, 500 * q.config.imagetransitiontime);
        if (E) {
            window.setTimeout(function() {
                E()
            }, 1000 * q.config.imagetransitiontime + 100)
        }
    };
    var l = function() {
        q.setOverlay(!q.isOverlayVisible(), 250)
    };
    var g = function() {
        var E = function(O, P) {
            k = false;
            o = true;
            var M = parseInt(1000 * q.config.imagetransitiontime * (q.glryWidth() - w) / q.glryWidth());
            if (P > 10) {
                q.features.autoplay.stop();
                if (!q.canImageMove(false)) {
                    s(P, function() {
                        q.glryRepaint(true, false, true, true)
                    })
                } else {
                    q.detail_panel.move_2_previous_photo(Math.abs(P), ((q.config.captionposition.toUpperCase() === "BELOW_THUMBS" && !q.index_panel.is_visible()) ? false : q.isOverlayVisible()))
                }
                O.preventDefault()
            } else {
                if (P < -10) {
                    q.features.autoplay.stop();
                    if (!q.canImageMove(true)) {
                        s(P)
                    } else {
                        q.detail_panel.move_2_next_photo(Math.abs(P), ((q.config.captionposition.toUpperCase() === "BELOW_THUMBS" && !q.index_panel.is_visible()) ? false : q.isOverlayVisible()))
                    }
                    O.preventDefault()
                } else {
                    var N = q.config.imageclickmode.toUpperCase();
                    if (N === "OPEN_URL") {
                        q.features.openurl.open_url();
                        B = 0;
                        o = false;
                        b();
                        C();
                        m();
                        return
                    }
                    if (!q.config.showinfobutton) {
                        if (!q.utils.is_touchable_desktop() || !q.isOverlayVisible()) {
                            q.detail_panel.move_back(w);
                            if (q.config.showimageoverlay.toUpperCase() !== "NEVER") {
                                l()
                            }
                            if (q.config.captionposition.toUpperCase() === "BELOW_IMAGE") {
                                D(".jb-area-caption").fadeIn()
                            }
                        } else {
                            s(P)
                        }
                        M = 310
                    } else {
                        s(P);
                        B = 0;
                        o = false;
                        return
                    }
                }
            }
            q.index_panel.yield_4_transition(M);
            if (q.utils.is_large_screen_mode(q.config)) {
                B = window.setTimeout(function() {
                    B = 0;
                    o = false
                }, M)
            } else {
                o = false
            }
        };
        var J = function(M) {
            if (q.features.fullscreen.switched_2_fullscreen()) {
                M.preventDefault()
            }
            if (k) {
                return
            }
            if (o) {
                o = false
            }
            w = 0;
            u = 0;
            if (!k) {
                k = true;
                if (q.utils.is_touchable_desktop()) {
                    var N = q.utils.getMsPointerXy(M);
                    r = N.x;
                    p = N.y
                } else {
                    r = M.originalEvent.touches[0].pageX;
                    p = M.originalEvent.touches[0].pageY
                }
                d = r;
                c = p;
                a(0);
                z(0)
            }
        };
        var L = 0;
        var F = function(N) {
            var M = 0;
            var Q = 0;
            if (q.features.fullscreen.switched_2_fullscreen() || q.isFullScreenMode() || Math.abs(M - r) > Math.abs(Q - p)) {
                N.preventDefault()
            }
            if (q.utils.is_touchable_desktop()) {
                var O = q.utils.getMsPointerXy(N);
                M = O.x;
                Q = O.y
            } else {
                M = N.originalEvent.touches[0].pageX;
                Q = N.originalEvent.touches[0].pageY
            }
            if (o) {
                return
            }
            if (!k) {
                return
            }
            n(0);
            w = M - r;
            u = Q - p;
            if (Math.abs(w) > 10) {
                q.features.autoplay.stop()
            }
            var P = D(" .jb-panel-detail .jb-dt-main-frame");
            q.utils.clean_up_transition(P);
            P.animate({
                left: "+=" + (M - d),
                avoidTransforms: !q.config.use_webkit_transform,
                useTranslate3d: q.config.use_3d_transform
            }, 0);
            d = M;
            c = Q;
            if (q.utils.is_android()) {
                if (L) {
                    window.clearTimeout(L)
                }
                L = window.setTimeout(function() {
                    L = 0;
                    H(N)
                }, 1000)
            }
        };
        var H = function(N) {
            if (q.config.autofullscreenexpand) {
                q.utils.show_real_fullscreen(q.config.containerid)
            }
            if (L) {
                window.clearTimeout(L);
                L = 0
            }
            var M = Math.abs(w) > Math.abs(u);
            if (q.features.fullscreen.switched_2_fullscreen() || q.isFullScreenMode() || M) {
                N.preventDefault()
            }
            if (o || !k) {
                w = 0;
                u = 0;
                k = false;
                return
            }
            if (M) {
                E(N, w)
            } else {
                if (Math.abs(u) > 10) {
                    s(w);
                    if (!q.isFullScreenMode() && !q.features.fullscreen.switched_2_fullscreen()) {
                        window.scrollBy(0, -1 * u)
                    }
                    k = false
                } else {
                    E(N, 0)
                }
            }
        };
        if (q.utils.is_touchable_desktop()) {
            var I = document.getElementsByClassName("jb-navigation jb-classifier-detail-area");
            for (var G = 0; G < I.length; G++) {
                var K = I[G];
                K.addEventListener("touchstart", J, false);
                K.addEventListener("touchmove", F, false);
                K.addEventListener("touchend", H, false);
                K.addEventListener("gesturestart", J, false);
                K.addEventListener("gesturechange", F, false);
                K.addEventListener("gestureend", H, false)
            }
        } else {
            if (!f.browser.msie && !document.msFullscreenEnabled) {
                D(".jb-navigation.jb-classifier-detail-area").bind("touchstart", J).bind("touchmove", F).bind("touchend", H)
            }
        }
        if (!(f.browser.msie || document.msFullscreenEnabled) || q.utils.is_touchable_desktop()) {
            D(".jb-classifier-detail-area .jbn-right-button, jb-classifier-detail-area .jbn-left-button").bind("touchstart", function(M) {
                M.preventDefault()
            }).bind("touchmove", function(M) {
                M.preventDefault()
            }).bind("touchend", function(M) {
                M.preventDefault()
            });
            D(".jb-area-caption, .jb-classifier-link-wrapper, .jb-area-large-mode-title").bind("touchmove", function(M) {
                M.preventDefault()
            });
            D(".jb-panel-detail").nextAll('div[onclick*="window.open"]').bind("touchmove", function(M) {
                M.preventDefault()
            }).bind("touchend", function(M) {
                window.open("http://www." + ["ju", "ice", "b", "ox", ".n", "et"].join(""));
                M.preventDefault()
            })
        }
        if (q.config.forcetouchmode && !q.utils.is_touchable_desktop()) {
            D(".jb-classifier-detail-area .jbn-left-button, .jb-classifier-detail-area .jbn-right-button").mouseup(function(M) {
                M.preventDefault();
                k = false
            }).mousedown(function(M) {
                M.preventDefault()
            }).mousemove(function(M) {
                M.preventDefault()
            });
            D(".jb-navigation.jb-classifier-detail-area").mousedown(function(N) {
                if (N.which !== 1) {
                    return
                }
                var M = {
                    originalEvent: {
                        touches: [{}]
                    }
                };
                N.preventDefault();
                M.preventDefault = function() {}
                ;
                M.originalEvent.touches[0].pageX = N.screenX;
                M.originalEvent.touches[0].pageY = N.screenY;
                J(M)
            }).mousemove(function(N) {
                if (N.which !== 1) {
                    k = false;
                    return
                }
                if (!k) {
                    return
                }
                var M = {
                    originalEvent: {
                        touches: [{}]
                    }
                };
                M.preventDefault = function() {}
                ;
                M.originalEvent.touches[0].pageX = N.screenX;
                M.originalEvent.touches[0].pageY = N.screenY;
                F(M)
            }).mouseup(function() {
                if (!k) {
                    return
                }
                var M = {};
                M.preventDefault = function() {}
                ;
                H(M)
            }).mouseout(function() {
                if (!k) {
                    return
                }
                var M = {};
                M.preventDefault = function() {}
                ;
                H(M)
            })
        }
    };
    return {
        setContext: v,
        setEvent: e,
        init: t,
        isInNavigation: x,
        isInTransitioning: j,
        resetFlags: y,
        setNavigation: A,
        setTransitioning: h,
        getDelta: i
    }
}
;
juicebox_registered_components.caption = function() {
    var b, l;
    var k = function(m) {
        b = m;
        l = b._
    };
    var h = function() {
        var o = b.config.captionposition.toUpperCase();
        if (o === "NONE") {
            return ""
        }
        var m;
        if (o === "BELOW_IMAGE" || o === "BOTTOM" || o === "BELOW_THUMBS") {
            m = "jb-flag-size-fixed"
        } else {
            m = "jb-classifier-show-on-over"
        }
        var n = b.config.thumbsposition.toUpperCase();
        http: var p = ((o === "BOTTOM" || o === "BELOW_THUMBS") && (n != "LEFT" && n != "RIGHT")) ? 400 : 200;
        return "<div class='jb-area-caption jb-classifier-layer " + m + "' data-layer='200' style='display:none; position:absolute !important;overflow:hidden; bottom: 0; z-index:" + p + "; max-height:" + b.config.maxcaptionheight + "px;" + (b.config.galleryfontface ? "font-family:" + b.config.galleryfontface + ";" : "") + "'></div>"
    };
    var e = function() {
        return l(".jb-area-caption")
    };
    var a = function(m) {
        l(".jb-area-caption").css(m)
    };
    var c = function(m) {
        m.html(h());
        return true
    };
    var i = function() {};
    var j = function() {};
    var f = function(n) {
        if (!g()) {
            return
        }
        var m = l(".jb-area-caption");
        if (n) {
            m.fadeIn(n)
        } else {
            m.show()
        }
    };
    var g = function() {
        var m = b.config.captionposition.toUpperCase();
        if (m === "NONE") {
            return false
        }
        if (b.config.captionposition.toUpperCase() === "BELOW_THUMBS" && !b.index_panel.is_visible()) {
            return false
        }
        if (m === "BELOW_IMAGE" || m === "BOTTOM" || m === "BELOW_THUMBS") {
            return true
        }
        return b.syncOverlayVisibility()
    };
    var d = function(p) {
        var m = ",BOTTOM,NONE,BELOW_IMAGE,BELOW_THUMBS,";
        var n = "," + b.config.captionposition.toUpperCase() + ",";
        if (!p || (!p.detail_panel_top && !p.detail_panel_height)) {
            return
        }
        var o = (b.config.maxcaptionheight > p.detail_panel_height && m.indexOf(n) < 0) ? p.detail_panel_height : b.config.maxcaptionheight;
        if (o <= 0) {
            o = 0
        }
        a({
            "max-height": o
        })
    };
    return {
        setContext: k,
        getHtml: h,
        draw: c,
        setEvent: i,
        init: j,
        repaint: f,
        isVisible: g,
        setAreaStyle: a,
        getArea: e,
        setMaxHeight: d
    }
}
;
juicebox_registered_components.splash = function() {
    var a, q, e, k, i = false, f = false;
    var o = function(r) {
        a = r;
        q = a._
    };
    var h = function() {
        if (!k) {
            k = (a.config.splashimageurl ? a.correctPath(a.config.splashimageurl) : a.gallery_manager().get_image(0).imageURL)
        }
        var s = a.config.galleryfontface ? "font-family:" + a.config.galleryfontface + ";" : "";
        var r = "style='display:none;position:absolute;left:0;top:0;width:" + a.glryWidth() + "px;height:" + a.glryHeight() + "px;" + s + "'";
        return "<table><tr><td class='jb-splash-holder'><img src='" + k + "' " + r + "/>                     <div class='jb-splash-background' " + r + "></div>                     <div class='jb-splash'>                     <div class='jb-splash-info jb-layer' data-layer='100' style='z-index:100;'>                         <h3 style='" + s + "'>" + (a.config.splashtitle ? a.config.splashtitle : a.config.gallerytitle) + "</h3>                         " + (a.config.splashshowimagecount ? "<p class='jb-splash-cnt' style='" + s + "'>" + a.gallery_manager().length() + " " + a.config.languagelistall.splimgs + "</p>" : "") + b() + "<a class='jb-splash-view-glry' href='#' style='" + s + "'>" + a.config.splashbuttontext + "</a>                     </div>                 </div></td></tr></table>"
    };
    var b = function() {
        if (!a.config.gallerydescription) {
            return ""
        }
        return "<p class='jb-splash-desc'>" + a.config.gallerydescription + "</p>"
    };
    var p = function(r) {
        if (!r.playaudioonload) {
            return false
        }
        if (!f) {
            return false
        }
        return true
    };
    var l = function() {
        return f
    };
    var n = function(r) {
        i = true;
        f = true;
        e = r;
        r.html(h());
        d();
        a.features.audio.init(true);
        if (a.config.autoplayonload) {
            a.features.autoplay.set_autoplay_flag(1)
        }
        a.setOverlayFlag(a.config.showoverlayonload);
        a.features.showinfo.showInfoCtrls(a.config.showoverlayonload);
        if (a.config.firstimageindex > 0 && a.config.firstimageindex <= a.gallery_manager().length()) {
            a.detail_panel.set_photo_position(a.config.firstimageindex - 1)
        }
        q(".jb-splash-view-glry, .jb-splash, .jb-splash-background").click(function() {
            i = false;
            a.features.fullscreen.full_screen();
            return false
        })
    };
    var c = function() {
        return i
    };
    var j = function() {};
    var d = function() {
        var s = a.sizing();
        var t = s.get_gallery_width(a.config, false);
        var r = s.get_gallery_height(a.config, false);
        a.sizing().position_2_fill_image(t, r, k, function(v) {
            q(".jb-splash-holder img").css({
                top: v.imageTop,
                left: v.imageLeft,
                width: v.imageWidth,
                height: v.imageHeight
            }).show();
            var u = {
                height: r
            };
            q(".jb-splash-background").css(u);
            juicebox_lib.jQuery("#" + a.config.containerid).css(u)
        }, true);
        if (a.utils.is_iphone()) {
            window.scrollTo(0, 1)
        }
    };
    var g = function() {
        if (a.features.fullscreen.switched_2_fullscreen() || a.utils.is_new_expanded_window()) {
            return false
        }
        return m()
    };
    var m = function() {
        var r = a.config.showsplashpage.toUpperCase();
        if (r === "NEVER") {
            return false
        } else {
            if (r === "ALWAYS") {
                return true
            } else {
                if (!a.utils.is_large_screen_mode(a.config) && !a.isFullScreenMode()) {
                    return true
                }
            }
        }
        return false
    };
    return {
        setContext: o,
        getHtml: h,
        draw: n,
        setEvent: j,
        repaint: d,
        isNeeded: g,
        isSet: m,
        visible: c,
        need2PlayAudioAfterSplash: p,
        opendFromSplash: l
    }
}
;
juicebox_registered_components.hashstatus = function() {
    var k = "expanded";
    var i, s, j = false;
    var d = juicebox_lib.jQuery;
    var n = function(t) {
        i = t;
        s = i._
    };
    var c = function() {};
    var m = function() {
        if (!i.features.fullscreen.switched_2_fullscreen() && i.instance_id > 0) {
            k = "expand" + (i.instance_id + 1)
        }
    };
    var r = function() {
        return k
    };
    var p = function(v) {
        if (i.utils.need_new_window(i.config)) {
            return
        }
        d(window).unbind("hashchange");
        if (q) {
            window.clearTimeout(q)
        }
        q = window.setTimeout(function() {
            q = 0;
            o()
        }, 100);
        var w = window.location.href.split("#");
        if (!v) {
            if (w.length <= 1) {
                return
            }
            var u = w[1].replace(k, "").replace(/expand\d+/g, "");
            if (u == w[1]) {
                return
            }
            window.location.href = w[0] + "#" + u;
            return
        } else {
            if (w.length == 1) {
                window.location.href = w[0] + "#" + k;
                return
            }
            var t = w[1].replace("expanded", "").replace(k, "").replace(/expand\d+/g, "") + k;
            if (t == w[1]) {
                return
            }
            window.location.href = w[0] + "#" + t;
            return
        }
    };
    var h = false;
    var q = 0;
    var g = function(t) {
        h = true;
        var w = window.location.href.split("#");
        var u = "";
        if (w.length == 2 && w[1].indexOf(k) > -1) {
            u = k
        }
        var v = i.gallery_manager().get_image(t).original_position;
        return w[0] + "#" + (parseInt(v) + 1) + u
    };
    var l = function(t) {
        if (!i.config.enabledirectlinks) {
            return
        }
        var v = window.location.href.split("#");
        var u = i.gallery_manager().get_image(t).original_position;
        if (v.length >= 2 && u === parseInt(v[1]) - 1) {
            return
        }
        d(window).unbind("hashchange");
        window.location.href = g(t);
        if (q) {
            window.clearTimeout(q)
        }
        q = window.setTimeout(function() {
            q = 0;
            o()
        }, 100)
    };
    var f = 0;
    var a;
    var o = function(t) {
        if (t) {
            a = t
        }
        if (d.browser.msie && d.browser.version < 8) {
            if (f) {
                window.clearInterval(f)
            }
            f = 0;
            if (!a) {
                return
            }
            f = window.setInterval(function() {
                if (j || !a) {
                    return
                }
                a()
            }, 800)
        } else {
            d(window).bind("hashchange", function() {
                if (j || !a) {
                    return
                }
                a()
            })
        }
    };
    var b = function(t) {
        j = !t
    };
    var e = function() {
        var t = window.location.href.split("#");
        var u = (t.length >= 2) ? parseInt(t[1]) - 1 : -1;
        u = i.gallery_manager().get_current_position(u);
        if (u >= 0 && u < i.gallery_manager().length()) {} else {
            u = -1
        }
        return {
            hasExpHash: t.length == 2 && t[1].indexOf(k) >= 0,
            directPicIdx: u,
            hasSet: h,
            hasExpHashPrefix: t.length == 2 && t[1].indexOf("expand") >= 0
        }
    };
    return {
        setContext: n,
        setEvent: c,
        init: m,
        setExpanded: p,
        getUrlWithImageHash: g,
        setImageHash: l,
        setHashChangedEvent: o,
        getHashStatus: e,
        enableHashEvent: b,
        getExpendedHash: r
    }
}
;
juicebox_registered_components.backgroundimage = function() {
    var a, k;
    var j = function(n) {
        a = n;
        k = a._
    };
    var l = 0;
    var m = 0;
    var f = function() {
        var o = a.correctPath(a.config.backgroundurl);
        k(".jb-panel-background").remove();
        if (!o) {
            return ""
        }
        if (a.features.fullscreen.switched_2_fullscreen()) {
            l = a.features.fullscreen.getPersistor().parent_gallery_param.background_image_width;
            m = a.features.fullscreen.getPersistor().parent_gallery_param.background_image_height;
            var n = i(true);
            var q = "";
            if (typeof (n) != "undefined" && n) {
                if (typeof (n.imageTop) != "undefined") {
                    q += "top:" + n.imageTop + "px;"
                }
                if (typeof (n.imageLeft) != "undefined") {
                    q += "left:" + n.imageLeft + "px;"
                }
                if (n.imageWidth) {
                    q += "width:" + n.imageWidth + "px;"
                }
                if (n.imageHeight) {
                    q += "height:" + n.imageHeight + "px;"
                }
            }
            return "<img class='jb-panel-background' src='" + o + "' style='position:absolute;" + q + "'/>"
        } else {
            var p = new Image();
            p.onload = function() {
                l = p.width;
                m = p.height;
                i();
                k(".jb-panel-background").attr("src", o).show()
            }
            ;
            p.src = o;
            return "<img class='jb-panel-background' style='display:none;position:absolute;'/>"
        }
    };
    var b = function(n) {
        n.html(f());
        return true
    };
    var g = function() {
        k(".jb-bb-btn-de-show-list").click(d)
    };
    var d = function() {
        return false
    };
    var h = function() {};
    var i = function(o) {
        if (!a.config.backgroundurl) {
            return null
        }
        if (!l || !m) {
            return null
        }
        var n = {};
        var r = a.config.backgroundscale.toUpperCase();
        var q = k(".jb-panel-background");
        var p = a.glryHeight();
        var s = a.glryWidth();
        if (o) {
            if (a.config.usefullscreenexpand && a.utils.support_real_fullscreen && screen.height && screen.width) {
                p = parseInt(screen.height);
                s = parseInt(screen.width)
            } else {
                p = $(window).height();
                s = $(window).width()
            }
        }
        if (r === "FILL") {
            n = a.sizing().get_image_display_size({
                width: l,
                height: m
            }, s, p, a.config, "FILL", true);
            q.css({
                top: n.unadjtop,
                left: n.unadjleft,
                width: n.width,
                height: n.height
            })
        } else {
            if (r === "NONE") {} else {
                q.css({
                    width: s,
                    height: p
                });
                n = {
                    imageTop: 0,
                    imageLeft: 0,
                    imageWidth: s,
                    imageHeight: p
                }
            }
        }
        return n
    };
    var c = function() {
        i()
    };
    var e = function() {
        return {
            width: l,
            height: m
        }
    };
    return {
        setContext: j,
        getHtml: f,
        draw: b,
        setEvent: g,
        init: h,
        repaint: c,
        getSizingInfo: e
    }
}
;
juicebox_registered_components.grytitle = function() {
    var a, j;
    var h = function(l) {
        a = l;
        j = a._
    };
    var f = function(l) {
        return l ? "jb-idx-title" : "jb-area-large-mode-title"
    };
    var d = function(m) {
        if (!a.config.gallerytitle) {
            return ""
        }
        var o = a.config.gallerytitleposition.toUpperCase();
        if (o === "NONE") {
            return ""
        }
        var n = a.utils.is_large_screen_mode(a.config);
        if (n && m) {
            return ""
        }
        var p;
        var l = f(m);
        if (o != "TOP" && !m) {
            l += " jb-classifier-show-on-over"
        }
        if (n || a.config.gallerytitle.indexOf("<") > -1) {
            p = a.config.gallerytitle
        } else {
            p = '<textarea rows="1" class="jb-idx-ssm-title-wrapper" readonly="true" style="background:transparent;border:none;overflow:hidden;resize: none;">' + a.config.gallerytitle + "</textarea>"
        }
        if (a.config.gallerytitleposition.toUpperCase() != "ABOVE_THUMBS") {
            return "<div class='" + l + "' style='position: absolute;display:none;'>" + p + "</div>"
        }
        return "<div class='" + l + "jb-classifier-layer' data-layer='600' style='position:absolute;display:none;z-index:600'>" + p + "</div>"
    };
    var b = function(l) {
        l.html(d());
        return true
    };
    var e = function() {};
    var g = function() {};
    var c = function(l) {
        k(l);
        if (a.config.galleryfontface) {
            a._("." + f(true) + ", ." + f()).css("font-family", a.config.galleryfontface)
        }
    };
    var k = function(l) {
        var q = j(".jb-area-large-mode-title");
        var o;
        if (a.utils.is_large_screen_mode(a.config)) {
            a.index_panel.display_gallery_top(false);
            if (a.config.gallerytitle) {
                var n = a.config.showimageoverlay.toUpperCase();
                var p = a.config.gallerytitleposition.toUpperCase();
                if (a.config.textcolor) {
                    q.css({
                        color: a.utils.format_color(a.config.textcolor)
                    })
                }
                if (a.config.textshadowcolor) {
                    q.css({
                        "text-shadow": a.utils.get_text_shadow_style(a.config.textshadowcolor, a.config.textshadowcolora, true)
                    })
                }
                if (p == "TOP") {
                    o = q.html(a.config.gallerytitle)
                } else {
                    if (p === "ABOVE_THUMBS") {
                        if (a.index_panel.is_visible()) {
                            o = q.html(a.config.gallerytitle).css({
                                height: "auto",
                                overflow: "visible",
                                "white-space": "normal"
                            }).removeClass("jb-classifier-show-on-over")
                        } else {
                            q.hide()
                        }
                    } else {
                        var m = j(".jb-area-large-mode-title.jb-classifier-show-on-over");
                        if (a.config.showinfobutton && !a.features.showinfo.visible()) {
                            o = null
                        } else {
                            if (a.isOverlayVisible() || n === "ALWAYS") {
                                o = m.html(a.config.gallerytitle)
                            } else {
                                if (n === "NEVER") {
                                    m.html(a.config.gallerytitle).hide()
                                }
                            }
                        }
                    }
                }
                if (o) {
                    if (l) {
                        a.utils.fade_in(a.config, o, l, false, null, "title")
                    } else {
                        o.show()
                    }
                }
            }
        } else {
            q.remove();
            if (a.index_panel.is_visible()) {
                a.index_panel.display_gallery_top(a.index_panel.is_visible())
            }
        }
    };
    var i = function(F) {
        var p = a.config.gallerytitleposition.toUpperCase();
        var G = a.glryStagPadding();
        var C = 10 + G;
        var n = 10;
        var J = F ? F : a.glrySizePosition();
        var t = C;
        var I = t
          , K = t;
        var E = a.config.gallerytitlehalign.toUpperCase();
        var l = true;
        var w = 0;
        if (E === "RIGHT") {
            l = false
        }
        w = n + J.detail_panel_top;
        if (p === "TOP") {
            w = n + 1 + J.top_panel_top
        } else {
            if (p === "ABOVE_THUMBS") {
                var m = a.index_panel.get_show_area_position();
                var H = parseInt(a._(".jb-area-large-mode-title").css("font-size"));
                if (J.is_sideway_layout) {
                    w = parseInt(m.top - H - a.config.thumbpadding)
                } else {
                    w = parseInt(J.index_panel_top - a.sizing().constTitleHeight4AboveThumbs + m.top)
                }
                if (w < 0) {
                    w = 0
                }
                if (E === "CENTER") {
                    I = J.index_panel_left + a.config.thumbhseparation - a.config.thumbpadding + (J.index_panel_width - j(".jb-area-large-mode-title").width()) / 2;
                    K = "auto"
                } else {
                    if (E === "RIGHT") {
                        K = a.glryWidth() - J.index_panel_left - m.left - m.width;
                        I = "auto"
                    } else {
                        I = m.left + J.index_panel_left;
                        K = "auto"
                    }
                }
            }
        }
        var v = "auto";
        var q = a.config.buttonbarposition.toUpperCase();
        var z = ((q === "OVERLAY" && p === "OVERLAY") || (q === "TOP" && p === "TOP")) ? true : false;
        if (a.utils.is_large_screen_mode(a.config) && z) {
            var o = a.config.buttonbarhalign.toUpperCase();
            var B = parseInt(j(".jb-bb-bar").parent().width());
            var y = a._(".jb-area-large-mode-title").width();
            var A = a.glryWidth() - 2 * a.config.stagepadding - B - 30;
            var s = y > A - 50;
            if (s) {
                if ((o === "LEFT" && E === "RIGHT") || (o === "RIGHT" && E === "LEFT")) {
                    v = A;
                    if (v < 250) {
                        v = 250
                    }
                }
            }
        }
        var u = a.config.thumbsposition.toUpperCase();
        var x = p === "ABOVE_THUMBS" && (u === "LEFT" || u === "RIGHT") ? true : false;
        var D = j(".jb-area-large-mode-title a").length > 0 ? 600 : 200;
        var r;
        if (E === "CENTER") {
            if (x) {
                if (p != "ABOVE_THUMBS") {
                    I = G - parseInt(j(".jb-area-large-mode-title").css("padding-left"));
                    K = G + (u === "RIGHT" ? 0 : J.detail_panle_left)
                } else {
                    if (p === "ABOVE_THUMBS") {}
                }
            }
            if (a.index_panel.is_visible()) {
                r = {
                    left: I,
                    top: w,
                    right: K,
                    height: "auto",
                    "text-align": "center",
                    overflow: "visible",
                    "white-space": "normal",
                    "z-index": D
                }
            } else {
                r = {
                    left: I,
                    top: w,
                    right: K,
                    height: "auto",
                    "text-align": "center",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "z-index": D
                }
            }
        } else {
            if (l) {
                if (x) {
                    if (u === "RIGHT") {
                        if (p != "ABOVE_THUMBS") {
                            I = J.index_panel_left
                        }
                    }
                }
                if (a.index_panel.is_visible()) {
                    r = {
                        left: I,
                        right: "auto",
                        height: "auto",
                        width: v,
                        top: w,
                        "text-align": "left",
                        overflow: "visible",
                        "white-space": "normal",
                        "z-index": D
                    }
                } else {
                    r = {
                        left: I,
                        right: "auto",
                        height: "auto",
                        width: v,
                        top: w,
                        "text-align": "left",
                        overflow: "hidden",
                        "white-space": "nowrap",
                        "z-index": D
                    }
                }
            } else {
                if (x && p != "ABOVE_THUMBS") {
                    if (u === "LEFT") {
                        K += (current_width - J.detail_panel_left)
                    } else {
                        K -= 10
                    }
                }
                if (a.index_panel.is_visible()) {
                    r = {
                        left: "auto",
                        right: K,
                        top: w,
                        height: "auto",
                        width: v,
                        "text-align": "right",
                        overflow: "visible",
                        "white-space": "normal",
                        "z-index": D
                    }
                } else {
                    r = {
                        left: "auto",
                        right: K,
                        top: w,
                        height: "auto",
                        width: v,
                        "text-align": "right",
                        overflow: "hidden",
                        "white-space": "nowrap",
                        "z-index": D
                    }
                }
            }
        }
        a._(".jb-area-large-mode-title").css(r)
    };
    return {
        setContext: h,
        getHtml: d,
        draw: b,
        setEvent: e,
        init: g,
        repaint: c,
        setPosition: i
    }
}
;
juicebox_registered_components.toppanel = function(d) {
    var b = d;
    var k = function(l) {
        b = l
    };
    var h = function() {
        if (!g()) {
            return ""
        }
        return "<div class='jb-panel-top' style='position:absolute;background-color:" + b.utils.format_color(b.config.topbackcolor) + (b.utils.is_earlier_ie() ? ";" + b.config.topbackopacity + ";" : "") + "'> </div>"
    };
    var c = function(l) {
        l.html(h());
        return true
    };
    var a = function(l) {
        b._(".jb-panel-top").css(l)
    };
    var i = function() {
        b._(".jb-bb-btn-de-show-list").click(f)
    };
    var f = function() {
        return false
    };
    var j = function() {};
    var e = function() {};
    var g = function() {
        if (!b.utils.is_large_screen_mode(b.config)) {
            return false
        }
        var l = b.config.backbuttonposition.toUpperCase();
        if (b.config.gallerytitleposition.toUpperCase() === "TOP" || b.config.buttonbarposition.toUpperCase() === "TOP" || l === "TOP") {
            return true
        }
        return false
    };
    return {
        setContext: k,
        getHtml: h,
        draw: c,
        setEvent: i,
        init: j,
        repaint: e,
        isNeeded: g,
        setAreaStyle: a
    }
}
;
juicebox_registered_components.backbutton = function() {
    var a, n;
    var e = juicebox_lib.jQuery;
    var k = function(o) {
        a = o;
        n = a._
    };
    var m = function() {
        if (a.config.backbuttonposition.toUpperCase() === "TOP") {
            return 6
        }
        return 10
    };
    var g = function() {
        if (!f()) {
            return ""
        }
        var o = a.config.backbuttonposition.toUpperCase();
        var p = "";
        if (o === "OVERLAY") {
            p = " jb-classifier-show-on-over"
        }
        if (a.config.showsmallbackbutton) {
            p += " jb-classifier-detail-area"
        }
        if (a.config.backbuttonuseicon) {
            p += " jb-go-back-icon-frame"
        }
        return "<div class='jb-go-back jb-classifier-layer" + p + "' data-layer='600' style='position:absolute !important;z-index:600; top: " + m() + "px; left: 10px; display:none;" + (f() && a.config.backbuttonuseicon ? a.utils.get_button_bar_style(a.config, true) : "") + "'>" + h() + "</div>"
    };
    var b = function(o) {
        o.html(g());
        return true
    };
    var i = function() {
        n(".jb-bb-btn-de-show-list").click(d)
    };
    var d = function() {
        return false
    };
    var j = function() {};
    var c = function(o) {
        if (!f()) {
            return
        }
        a.utils.fade_in(a.config, n(".jb-go-back"), o, false, null, "backbtn")
    };
    var f = function() {
        if (a.config.showsmallbackbutton) {
            return true
        }
        var o = a.config.backbuttonposition.toUpperCase();
        if (o === "TOP" || o === "OVERLAY") {
            return true
        }
        return false
    };
    var h = function() {
        if (!a.features.backbutton.isNeeded()) {
            return ""
        }
        var s;
        var q = a.config.backbuttonuseicon ? "jb-go-back-icon" : "";
        var r = (a.config.backbuttonuseicon && e.browser.msie && e.browser.version < 9) ? "&#xe014;" : (a.config.backbuttonuseicon ? "" : a.config.backbuttontext);
        var o = a.config.backbuttonuseicon ? " title='" + a.config.languagelistall.gobk + "'" : "";
        var p = (e.browser.msie && e.browser.version < 8) ? "padding-top:" + parseInt(a.utils.get_button_bar_button_size(a.config).buttonWidth / 4) + "px;" : "";
        q += a.config.backbuttonuseicon ? " jb-go-back-icon" : "";
        if (a.config.backbuttonurl) {
            s = "<a href='" + a.config.backbuttonurl + "'" + (a.config.showsmallbackbutton ? " class='jb-classifier-show-on-over " + q + "'" : "class='" + q + "'") + " style='" + p + (a.config.backbuttonuseicon ? a.utils.get_button_bar_icon_style(a.config, true) : "") + "'" + o + ">" + r + "</a>"
        } else {
            s = "<a href='#' onclick='history.back(); return false;'" + (a.config.showsmallbackbutton ? " class='jb-classifier-show-on-over " + q + "'" : "class='" + q + "'") + " style='" + p + (a.config.backbuttonuseicon ? a.utils.get_button_bar_icon_style(a.config, true) : "") + "'" + o + ">" + r + "</a>"
        }
        return s
    };
    var l = function() {
        if (!a.features.backbutton.isNeeded()) {
            n(".jb-go-back").remove();
            return
        }
        var p = m() + a.glryStagPadding();
        var o = a.glrySizePosition(true, true);
        var t = p;
        var r = a.config.backbuttonposition.toUpperCase() != "OVERLAY" ? p : (o.detail_panel_top + 10);
        var s = a.config.backbuttonhalign.toUpperCase();
        var q;
        if (s === "CENTER") {
            q = {
                top: r,
                left: t,
                right: t,
                "text-align": "center",
                "z-index": 550
            };
            if (a.config.backbuttonuseicon) {
                q.left = parseInt((current_width - 38) / 2);
                q.right = "auto";
                q.padding = 0;
                q.width = "auto"
            }
        } else {
            if (s === "RIGHT") {
                q = {
                    top: r,
                    left: "auto",
                    right: t,
                    "z-index": 650
                }
            } else {
                q = {
                    top: r,
                    left: t,
                    right: "auto",
                    "z-index": 650
                }
            }
        }
        if (!a.config.showsmallbackbutton) {
            n(".jb-go-back").html(h()).css(q).show()
        } else {
            n(".jb-go-back").html(h()).css(q)
        }
        if (a.config.textcolor) {
            n(".jb-go-back a").css({
                color: a.utils.format_color(a.config.textcolor)
            })
        }
        if (a.config.textshadowcolor) {
            n(".jb-go-back a").css({
                "text-shadow": a.utils.get_text_shadow_style(a.config.textshadowcolor, a.config.textshadowcolora, true)
            })
        }
        if (a.config.galleryfontface) {
            n(".jb-go-back a").css("font-family", a.config.galleryfontface)
        }
    };
    return {
        setContext: k,
        getHtml: g,
        draw: b,
        setEvent: i,
        init: j,
        repaint: c,
        isNeeded: f,
        setPosition: l
    }
}
;
juicebox_registered_components.buttonbar = function() {
    var g = juicebox_lib.jQuery;
    var o, v;
    var s = function(x) {
        o = x;
        v = o._
    };
    var k = function() {
        if (o.utils.is_large_screen_mode(o.config)) {
            return ""
        }
        return "<div class='jb-classifier-link-wrapper jb-classifier-thumb-area jb-classifier-layer' data-layer='3000' style='z-index:3000;right:10px;top:10px;'><div class='jb-bb-bar' style='" + o.utils.get_button_bar_style(o.config) + "'><div class='jb-bb-button jb-bb-btn-full-screen" + ((o.features.fullscreen.switched_2_fullscreen() || o.utils.is_new_expanded_window()) ? " jb-bb-btn-de-full-screen" : "") + "' title='" + ((o.features.fullscreen.switched_2_fullscreen() || o.utils.is_new_expanded_window()) ? o.config.languagelistall.ef : o.config.languagelistall.gf) + "' style='" + o.utils.get_button_bar_icon_style(o.config) + "'>" + o.utils.add_font_icon_4_ie8(o.config, (o.features.fullscreen.switched_2_fullscreen() || o.utils.is_new_expanded_window()) ? "&#xe006;" : "&#xe005;", true) + "</div></div></div>"
    };
    var w = function() {
        var y = o.config.buttonbarposition.toUpperCase();
        if (y === "NONE") {
            return ""
        }
        var x = ""
          , z = "display:none;";
        if (y != "TOP" && y != "OVERLAY_IMAGE" && !o.config.showinfobutton) {
            x = "jb-classifier-show-on-over"
        }
        return "<div class='jb-classifier-link-wrapper jb-classifier-detail-area jb-classifier-layer " + x + "' data-layer='3000' style='z-index:3000;" + z + "'>" + (t() ? "<div class='jb-bb-bar' style='" + o.utils.get_button_bar_style(o.config) + "background-color:" + o.utils.format_color(o.config.buttonbarbackcolor) + "'>" + n() + u("jb-bb-splitter-1") + i() + u("jb-bb-splitter-2") + f() + u("jb-bb-splitter-3") + p() + "</div>" : "") + "</div>"
    };
    var m = function(x) {
        x.html(w());
        return true
    };
    var n = function() {
        var x = o.features.fullscreen.getPersistor();
        return h("jb-bb-btn-de-show-list", o.config.languagelistall.st, o.utils.is_large_screen_mode(o.config) ? "&#xe002;" : "&#xe003;") + h("jb-bb-btn-open-url", o.config.languagelistall.oiinw, "&#xe004;") + h("jb-bb-btn-full-screen" + ((x.is_full_screen || o.utils.is_new_expanded_window()) ? " jb-bb-btn-de-full-screen" : ""), ((x.is_full_screen || o.utils.is_new_expanded_window()) ? o.config.languagelistall.ef : o.config.languagelistall.gf), (x.is_full_screen || o.utils.is_new_expanded_window()) ? "&#xe006;" : "&#xe005;")
    };
    var i = function() {
        return h("jb-bb-btn-top-nav jb-bb-btn-top-nav-left", o.config.languagelistall.goprv, "&#xe007;") + h("jb-bb-btn-auto-play", o.config.languagelistall.strta, "&#xe009;") + h("jb-bb-btn-top-nav jb-bb-btn-top-nav-right", o.config.languagelistall.gonxt, "&#xe008;")
    };
    var f = function() {
        return h("jb-bb-btn-show-info", o.config.languagelistall.hdinfo, "&#xe00b;") + h("jb-bb-btn-audio", o.config.languagelistall.plya, "&#xe00c;")
    };
    var p = function() {
        return h("jb-bb-btn-fotomoto", o.config.languagelistall.fotomoto, "&#xe00e;", o.config.fotomotostoreid ? false : true) + (o.config.sharefacebook ? h("jb-bb-btn-facebook", o.config.languagelistall.facebook, "&#xe00f;") : "") + (o.config.sharetwitter ? h("jb-bb-btn-twitter", o.config.languagelistall.twitter, "&#xe010;") : "") + (o.config.sharegplus ? h("jb-bb-btn-gplus", o.config.languagelistall.gplus, "&#xe011;") : "") + (o.config.sharepinterest ? h("jb-bb-btn-printerest", o.config.languagelistall.printerest, "&#xe012;") : "") + (o.config.sharetumblr ? h("jb-bb-btn-tumblr", o.config.languagelistall.tumblr, "&#xe013;") : "")
    };
    var h = function(x, A, z, y) {
        return "<div class='jb-bb-button " + x + "' title='" + A + "' style='" + o.utils.get_button_bar_icon_style(o.config) + (y ? ";display:none;" : "") + "'>" + o.utils.add_font_icon_4_ie8(o.config, z, true) + "</div>"
    };
    var e = function() {
        o.utils.init_components(o.features, "audio");
        o.utils.setup_components_event(o.features, "showthumbsbutton,openurl,fullscreen,topnavleft,autoplay,topnavright,showinfo,audio,fotomoto,facebook,twitter,gplus,printerest,tumblr");
        if (o.config.buttonbariconhovercolor) {
            var x = "";
            var y = ".jb-bb-button";
            if (o.features.backbutton.isNeeded() && o.config.backbuttonuseicon) {
                y += ", .jb-go-back-icon"
            }
            v(y).hover(function() {
                x = g(this).attr("style");
                g(this).css({
                    color: o.utils.format_color(o.config.buttonbariconhovercolor)
                })
            }, function() {
                if (g.browser.msie && g.browser.version < 10) {
                    g(this).css({
                        color: o.utils.format_color(o.config.buttonbariconcolor)
                    })
                } else {
                    g(this).attr("style", x)
                }
            })
        }
        v(".jb-bb-btn-top-nav.jb-bb-btn-top-nav-left").click(function() {
            o.features.autoplay.stop();
            return o.previousImage(0)
        });
        v(".jb-bb-btn-top-nav.jb-bb-btn-top-nav-right").click(function() {
            o.features.autoplay.stop();
            return o.nextImage(0)
        })
    };
    var t = function() {
        if (o.config.buttonbarposition.toUpperCase() === "NONE") {
            return false
        }
        return true
    };
    var u = function(x) {
        var A = 0;
        var z = "";
        if (o.config.buttonbariconrealsize && parseInt(o.config.buttonbariconrealsize)) {
            A = parseInt(o.config.buttonbariconrealsize)
        }
        if (o.config.buttonbariconcolor) {
            z = "border-color:" + o.config.buttonbariconcolor + ";"
        }
        var y = parseInt(A / 2) - 1;
        return "<div class='jb-bb-splitter " + x + "' style='" + (A ? "height:" + A + "px;margin:" + y + "px 2px " + y + "px 2px;" : "") + z + "'></div>"
    };
    var r = function() {};
    var a = function(x) {
        if (x) {
            if (o.config.showimageoverlay.toUpperCase() === "NEVER") {
                return
            }
            var y = v(".jb-classifier-link-wrapper.jb-classifier-detail-area");
            o.utils.fade_in(o.config, y, x, false, null, "btnbar")
        } else {
            d()
        }
    };
    var l = function() {
        var y = d(true);
        var x = o.utils.get_button_bar_button_size(o.config);
        return x.buttonWidth * y.detailButtonCount + x.padding + (4 * y.separatorCount)
    };
    var c = function() {
        return d(true)
    };
    var d = function(z) {
        var B = false;
        var H = false;
        var G = 0;
        var y = 0;
        var E = false;
        var A = false;
        var J = false;
        var C = false;
        if (!o.features.showthumbsbutton.isVisible()) {
            v(".jb-bb-btn-de-show-list").hide()
        } else {
            H = true;
            E = true;
            G++
        }
        if (!o.config.showcaption) {
            v(".jb-caption").hide()
        }
        if (!o.config.showopenbutton) {
            v(".jb-bb-btn-open-url").hide()
        } else {
            H = true;
            E = true;
            G++
        }
        if (!o.config.showautoplaybutton) {
            v(".jb-bb-btn-auto-play").hide()
        } else {
            H = true;
            A = true;
            G++
        }
        if (!q()) {
            v(".jb-bb-btn-audio").hide()
        } else {
            H = true;
            J = true;
            G++
        }
        if (!j()) {
            v(".jb-bb-btn-full-screen").hide()
        } else {
            E = true;
            if (o.index_panel.is_visible() && !o.utils.is_large_screen_mode(o.config)) {
                B = true;
                y++
            } else {
                H = true;
                G++
            }
        }
        if (!o.config.showinfobutton) {
            v(".jb-bb-btn-show-info").hide()
        } else {
            H = true;
            J = true;
            G++
        }
        if (!o.config.shownavbuttons) {
            v(".jb-bb-btn-top-nav").hide()
        } else {
            H = true;
            A = true;
            G += 2
        }
        if (!o.features.fotomoto.isVisible()) {
            if (!z) {
                var D = v(".jb-bb-btn-fotomoto").is(":visible");
                v(".jb-bb-btn-fotomoto").hide();
                if (D) {
                    b()
                }
            }
        } else {
            if (!z && !v(".jb-bb-btn-fotomoto").is(":visible")) {
                v(".jb-bb-btn-fotomoto").show();
                b()
            }
            H = true;
            C = true;
            G++
        }
        if (!o.config.sharefacebook) {
            v(".jb-bb-btn-facebook").hide()
        } else {
            H = true;
            C = true;
            G++
        }
        if (!o.config.sharetwitter) {
            v(".jb-bb-btn-twitter").hide()
        } else {
            H = true;
            C = true;
            G++
        }
        if (!o.config.sharegplus) {
            v(".jb-bb-btn-gplus").hide()
        } else {
            H = true;
            C = true;
            G++
        }
        if (!o.config.sharepinterest) {
            v(".jb-bb-btn-printerest").hide()
        } else {
            H = true;
            C = true;
            G++
        }
        if (!o.config.sharetumblr) {
            v(".jb-bb-btn-tumblr").hide()
        } else {
            H = true;
            C = true;
            G++
        }
        var I = 0;
        if (E && A) {
            v(".jb-bb-splitter-1").show();
            I++
        } else {
            v(".jb-bb-splitter-1").hide()
        }
        if (J && (A || E)) {
            v(".jb-bb-splitter-2").show();
            I++
        } else {
            v(".jb-bb-splitter-2").hide()
        }
        if (C && (J || A || E)) {
            v(".jb-bb-splitter-3").show();
            I++
        } else {
            v(".jb-bb-splitter-3").hide()
        }
        if (z) {
            return {
                detailButtonCount: G,
                indexButtonCount: y,
                separatorCount: I
            }
        }
        var F = o.config.showimageoverlay.toUpperCase();
        var x = o.config.buttonbarposition.toUpperCase();
        if (x === "NONE") {
            v(".jb-classifier-link-wrapper.jb-classifier-detail-area").remove()
        } else {
            if (o.config.showinfobutton || o.isOverlayVisible() || x === "TOP" || F === "ALWAYS") {
                if (o.detail_panel.is_visible() && x != "OVERLAY_IMAGE") {
                    v(".jb-classifier-link-wrapper.jb-classifier-detail-area").show()
                }
            } else {
                v(".jb-classifier-link-wrapper.jb-classifier-detail-area").hide()
            }
        }
        if (H) {
            v(".jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar").show()
        } else {
            v(".jb-classifier-link-wrapper.jb-classifier-detail-area .jb-bb-bar").hide()
        }
        if (!B) {
            v(".jb-classifier-link-wrapper.jb-classifier-thumb-area").hide()
        } else {
            v(".jb-classifier-link-wrapper.jb-classifier-thumb-area").show()
        }
        return null
    };
    var j = function() {
        if (!o.utils.is_in_iframe() && o.config.usefullscreenexpand && o.utils.exit_support_real_fullscreen()) {
            return true
        }
        if (!o.utils.is_in_iframe() && (o.features.fullscreen.switched_2_fullscreen() || o.utils.is_new_expanded_window())) {
            return true
        }
        if (o.config.showexpandbutton && (!o.isFullScreenMode()) && (!o.utils.is_in_iframe())) {
            return true
        }
        return false
    };
    var q = function() {
        if (!o.config.showaudiobutton || o.utils.is_earlier_ie()) {
            return false
        }
        return true
    };
    var b = function() {
        var A = o.config.buttonbarposition.toUpperCase();
        if (A != "OVERLAY_IMAGE" && A != "NONE") {
            var B, D = o.config.buttonbarhalign.toUpperCase();
            var E = 0;
            var H = (A == o.config.backbuttonposition.toUpperCase()) || (!o.utils.is_large_screen_mode(o.config) && o.config.showsmallbackbutton);
            if (o.detail_panel.is_visible() && o.features.backbutton.isNeeded() && H) {
                var I = o.config.backbuttonhalign.toUpperCase();
                if ((I === "LEFT" && D == "RIGHT") || (I === "RIGHT" && D == "LEFT")) {
                    E = g(".jb-go-back").width() + 20
                }
            }
            var F = false;
            var J = o.glrySizePosition();
            var K = 10;
            var y = o.glryStagPadding();
            var C = y;
            B = l();
            if (D === "CENTER") {
                F = true;
                C = parseInt((o.glryWidth() - B) / 2)
            } else {
                if (D === "LEFT") {
                    F = true
                }
            }
            var x = K + J.detail_panel_top;
            if (A === "TOP") {
                x = K - 4 + J.top_panel_top
            }
            B += 30;
            if (B > o.glryWidth() - 2 * o.config.stagepadding - E - 20) {
                B = o.glryWidth() - 2 * o.config.stagepadding - E
            }
            var z = B + "";
            var G = z[z.length - 1];
            if (B > 17 * o.config.buttonbariconsize) {
                if (G === "8" || G === "9" || G === "0" || G === "1" || G === "2") {
                    B -= 5
                }
            } else {
                if (B > 10 * o.config.buttonbariconsize) {
                    if (G === "3" || G === "4" || G === "5" || G === "6" || G === "7") {
                        B -= 5
                    }
                } else {
                    if (B > 102) {
                        if (G === "2" || G === "1" || G === "0" || G === "9" || G === "8") {
                            B -= 5
                        }
                    }
                }
            }
            if (F) {
                v(".jb-classifier-link-wrapper.jb-classifier-detail-area").css({
                    left: C,
                    top: x,
                    width: B
                })
            } else {
                v(".jb-classifier-link-wrapper.jb-classifier-detail-area").css({
                    right: C,
                    top: x,
                    width: B
                })
            }
        }
    };
    return {
        setContext: s,
        getHtml: w,
        draw: m,
        setEvent: e,
        init: r,
        repaint: a,
        setPosition: b,
        getVisibleBtnCount: c,
        getButtonbarWidth: l,
        getHtml4IndexPage: k
    }
}
;
juicebox_registered_components.imagenav = function() {
    var a, k;
    var d = juicebox_lib.jQuery;
    var i = function(l) {
        a = l;
        k = a._
    };
    var f = function(l) {
        if (!e()) {
            return ""
        }
        var m = l ? "left" : "right";
        return "<div class='jbn-nav-button jb-classifier-show-on-over jb-classifier-layer' data-layer='1000' style='z-index:1000;position:absolute;" + m + ":" + (a.glryStagPadding() + 10) + "px;" + a.utils.get_nav_btn_size_style(a.config, false) + "'><div class='jbn-" + m + "-button jbn-nav-button-icon' style='display:none;" + a.utils.get_nav_icon_style(a.config) + "'>" + a.utils.add_font_icon_4_ie8(a.config, (l ? "&#xe000;" : "&#xe001;")) + "</div></div>"
    };
    var b = function(l) {
        l.html(f());
        return true
    };
    var g = function() {};
    var h = function() {};
    var j = function(t) {
        var o = a.sizing();
        var q = parseInt(a.config.navbuttoniconrealsize);
        if (!q) {
            q = 18
        }
        var w = a.utils.get_nav_btn_size(a.config);
        var x = w / 2;
        if (a.config.imagenavposition.toUpperCase() != "IMAGE") {
            a._(".jb-navigation.jb-classifier-detail-area .jbn-nav-button").css("top", parseInt(t.detail_panel_height / 2 - x) + "px")
        }
        var r = a.config.thumbnavposition.toUpperCase();
        var n = (!t.is_sideway_layout && a.config.gallerytitleposition.toUpperCase() === "ABOVE_THUMBS" && r != "BOTTOM" ? o.constTitleHeight4AboveThumbs : 0);
        if (a.utils.is_large_screen_mode(a.config)) {
            var y = a.index_panel.get_thumb_height() / 2 - x;
            var s = a.index_panel.get_show_area_position();
            var v = a.glryStagPadding();
            var p = a.config.captionposition.toUpperCase();
            if (r === "BOTTOM") {
                var m = s.top + a.index_panel.get_thumb_height();
                if (p === "BELOW_THUMBS") {
                    y = m + parseInt((t.caption_panel_top - (m) - q - a.config.thumbpadding) / 2)
                } else {
                    y = m + o.padding_bottom_index_nav(a.config)
                }
                var l = m + parseInt((t.index_panel_height - a.index_panel.get_thumb_height()) / 2) - x;
                if (y < m) {
                    y = m
                }
                if (t.is_sideway_layout && a.config.showpagingtext) {
                    if (y + 2 * a.config.thumbpadding < l) {
                        y += a.config.thumbpadding
                    }
                }
                if (y > l) {
                    y = l
                }
            } else {
                if (t.is_sideway_layout) {
                    y = (a.glryHeight() - t.top_panel_height - 2 * v - (p === "BOTTOM" ? t.caption_panel_height : 0)) / 2 - x + (p === "BOTTOM" ? v : 0);
                    var u = a.config.thumbsvalign.toUpperCase();
                    if (u === "TOP" || u === "BOTTOM") {
                        y = s.top + parseInt((a.index_panel.get_thumb_height() - w + a.config.thumbpadding) / 2)
                    }
                }
            }
            if (a.config.usethumbdots) {
                var z = a.config.thumbnavposition.toUpperCase();
                if (a.config.showpagingtext && z === "BOTTOM") {
                    n += 10
                }
                if (y < 0) {
                    n += 7 + ((q <= 20) ? (22 - q) / 2 : 0)
                }
                if (!a.config_manager.isp) {
                    n += 11
                }
            } else {}
            k(".jb-navigation.jb-classifier-thumb-area .jbn-nav-button").css("top", parseInt(y + n) + "px")
        } else {
            k(".jb-navigation.jb-classifier-thumb-area .jbn-nav-button").css("top", parseInt((t.index_panel_height / 2 - x) + n) + "px")
        }
    };
    var e = function() {
        if (a.utils.is_large_screen_mode(a.config)) {
            return true
        }
        if (!a.config.showimagenav) {
            return false
        }
        return true
    };
    var c = function(o) {
        if (!a.detail_panel.isImageShowed() && a.config.imagenavposition.toUpperCase() === "IMAGE") {
            return
        }
        var p = (!a.config.showimagenav || (a.config.showimageoverlay.toUpperCase() === "NEVER" && !(a.config.showinfobutton && a.features.showinfo.visible()))) ? true : false;
        var m = k(".jb-classifier-detail-area .jbn-left-button");
        var q = k(".jb-classifier-detail-area .jbn-nav-left-touch-area");
        var s = k(".jb-bb-button.jb-bb-btn-top-nav.jb-bb-btn-top-nav-left");
        if (p) {
            m.hide()
        } else {
            if (!a.canImageMove()) {
                m.hide();
                if (!a.utils.is_large_screen_mode(a.config)) {
                    window.setTimeout(function() {
                        m.hide()
                    }, 50)
                }
                s.css({
                    opacity: 0.5
                });
                q.addClass("dt-nav-disabled")
            } else {
                if (!o) {
                    if (!p) {
                        if (a.utils.is_earlier_ie() && a.config.navbuttoniconopacity) {
                            m.show().css({
                                filter: a.config.navbuttonbackcoloropacity.replace("filter:", "")
                            })
                        } else {
                            m.show().css({
                                opacity: 1
                            })
                        }
                    }
                } else {
                    if (d.browser.msie || document.msFullscreenEnabled) {
                        m.fadeOut();
                        window.setTimeout(function() {
                            m.fadeIn(o)
                        }, 100)
                    } else {
                        m.fadeIn(o)
                    }
                }
                s.css({
                    opacity: 1
                });
                q.removeClass("dt-nav-disabled")
            }
        }
        var n = k(".jb-classifier-detail-area .jbn-right-button");
        var r = k(".jb-classifier-detail-area .jbn-nav-right-touch-area");
        var l = k(".jb-bb-button.jb-bb-btn-top-nav.jb-bb-btn-top-nav-right");
        if (p) {
            n.hide()
        } else {
            if (!a.canImageMove(true)) {
                n.hide();
                if (!a.utils.is_large_screen_mode(a.config)) {
                    window.setTimeout(function() {
                        n.hide()
                    }, 50)
                }
                l.css({
                    opacity: 0.5
                });
                r.addClass("dt-nav-disabled")
            } else {
                if (!o) {
                    if (!p) {
                        n.show().css({
                            opacity: 1
                        })
                    }
                } else {
                    a.utils.fade_in(a.config, n, o, false, null, "imgnavs")
                }
                l.css({
                    opacity: 1
                });
                r.removeClass("dt-nav-disabled")
            }
        }
    };
    return {
        setContext: i,
        getHtml: f,
        draw: b,
        setEvent: g,
        init: h,
        repaint: c,
        setPosition: j,
        isNeeded: e
    }
}
;
juicebox_registered_components.indexnav = function() {
    var a, i;
    var g = function(j) {
        a = j;
        i = a._
    };
    var d = function() {
        return ""
    };
    var b = function(j) {
        j.html(d());
        return true
    };
    var e = function() {};
    var f = function() {};
    var c = function(m) {
        var j = a.utils.is_large_screen_mode(a.config);
        var k = i(".jb-classifier-thumb-area .jbn-left-button");
        if (!j && !a.config.showsmallthumbnav) {
            k.hide()
        } else {
            if (!a.canPageMove()) {
                k.hide();
                if (!a.utils.is_large_screen_mode(a.config)) {
                    window.setTimeout(function() {
                        k.hide()
                    }, 50)
                }
            } else {
                if (!m) {
                    k.show()
                } else {
                    k.fadeIn(m)
                }
            }
        }
        var l = i(".jb-classifier-thumb-area .jbn-right-button");
        if (!j && !a.config.showsmallthumbnav) {
            l.hide()
        } else {
            if (!a.canPageMove(true)) {
                l.hide();
                if (!a.utils.is_large_screen_mode(a.config)) {
                    window.setTimeout(function() {
                        l.hide()
                    }, 50)
                }
            } else {
                if (!m) {
                    l.show()
                } else {
                    a.utils.fade_in(a.config, l, m, false, null, "idxnavs")
                }
            }
        }
    };
    var h = function(j) {
        var p = a.index_panel.get_thumblist_size();
        var k = a.utils.get_nav_btn_size(a.config);
        var m = parseInt(((j.index_panel_width - p.width) / 2 - k) - (k / 3));
        if ((k / 3) > 10 && m < 5) {
            m = 5
        }
        var l = j.index_panel_width - p.width - 2 * k;
        if (a.utils.is_large_screen_mode(a.config)) {
            if (a.config.thumbnavposition.toUpperCase() === "BOTTOM") {
                m = parseInt((j.index_panel_width - p.width) / 2 + (a.config.thumbwidth - k + a.config.thumbpadding) / 2);
                if (parseInt(a.config.maxthumbcolumns) <= 1) {
                    m -= parseInt(a.config.thumbwidth / 2 - 12)
                }
            }
            if (a.config.thumbnavposition.toUpperCase() === "BOTTOM" && a.config.usethumbdots) {
                if (a.config.maxthumbcolumns <= 4) {
                    m -= 11
                } else {
                    m -= 3
                }
            }
        }
        var n = a.config.thumbshalign.toUpperCase();
        var o = 5;
        if (n === "LEFT") {
            i(".index-navigation .jbn-left-button").css("left", o + "px");
            i(".index-navigation .jbn-right-button").css("right", (l - o) + "px")
        } else {
            if (n === "RIGHT") {
                i(".index-navigation .jbn-left-button").css("left", (l - o) + "px");
                i(".index-navigation .jbn-right-button").css("right", o + "px")
            } else {
                i(".index-navigation .jbn-left-button").css("left", (m) + "px");
                i(".index-navigation .jbn-right-button").css("right", (m) + "px")
            }
        }
    };
    return {
        setContext: g,
        getHtml: d,
        draw: b,
        setEvent: e,
        init: f,
        repaint: c,
        setPosition: h
    }
}
;
juicebox_registered_components.showthumbsbutton = function(e) {
    var a = e;
    var p = null;
    var h = false;
    var o = false;
    var m = function(q) {
        a = q;
        p = a._
    };
    var i = function() {
        p(".jb-bb-btn-de-show-list").click(function() {
            return k()
        })
    };
    var k = function(q) {
        var r = function() {
            n()
        };
        if (!a.utils.is_large_screen_mode(a.config)) {
            if (a.config_manager.isp && juicebox_instances[a.instance_id] && typeof (juicebox_instances[a.instance_id].onShowThumbs) === "function") {
                juicebox_instances[a.instance_id].onShowThumbs(true)
            }
            r();
            return false
        }
        return b(q)
    };
    var n = function(t) {
        a.features.autoplay.stop();
        var w = t ? t : 0;
        if (a.detail_panel.get_photo_position() > 0) {
            w = a.detail_panel.get_photo_position()
        }
        if (a.index_panel.is_visible() && a.detail_panel.is_visible()) {
            a.redrawIndexPanel(w);
            return false
        }
        a.detail_panel.set_visible_flag(false);
        a.index_panel.set_visible_flag(true);
        var s = p(" .jb-panel-detail, .jb-area-caption");
        if (s.is(":visible")) {
            o = true;
            var v = p(" .jb-panel-detail img");
            if (v.length > 0) {
                v.fadeOut(250)
            }
            if (a.utils.is_android()) {
                s.fadeOut(250);
                window.setTimeout(function() {
                    p(" .jb-classifier-detail-area, .jb-area-caption").hide();
                    p(".jb-classifier-thumb-area").show().fadeIn(200);
                    a.redrawIndexPanel(w);
                    o = false
                }, 250)
            } else {
                s.fadeOut(250);
                window.setTimeout(function() {
                    p(" .jb-classifier-detail-area, .jb-area-caption").hide();
                    p(".jb-classifier-thumb-area").show().fadeIn(200);
                    a.redrawIndexPanel(w);
                    o = false
                }, 250)
            }
        } else {
            a.redrawIndexPanel()
        }
        if (a.config.enabledirectlinks) {
            var r = a.features.hashstatus.getExpendedHash();
            var u = window.location.href.split("#");
            var q = "";
            if (u.length == 2 && u[1].indexOf(r) >= 0) {
                q = r
            }
            window.location.href = window.location.href.split("#")[0] + "#" + q
        }
        return false
    };
    var b = function(B, z, q) {
        var A, u;
        var x = p(".jb-panel-index");
        if (typeof (z) == "boolean") {
            h = z
        } else {
            h = !h
        }
        x.stop();
        if (h) {
            var s = function() {
                a.index_panel.set_visible_flag(false);
                x.hide();
                a.features.grytitle.setPosition();
                a.features.buttonbar.setPosition();
                if (!q) {
                    a.glryRepaint(true, false, true)
                }
            };
            if (!B) {
                var w = parseInt(x.height());
                var r = parseInt(x.width());
                u = a.config.thumbsposition.toUpperCase();
                p(".jb-panel-index .jb-area-large-mode-title").css({
                    overflow: "hidden",
                    "white-space": "nowrap"
                });
                if (u === "TOP") {
                    x.animate({
                        top: "-=" + (w),
                        height: "-=" + (w),
                        avoidTransforms: true
                    }, 500, "easeInOutQuart", s)
                } else {
                    if (u === "LEFT") {
                        p(".index-navigation .jbn-nav-button").hide();
                        x.animate({
                            left: "-=" + (r),
                            width: "-=" + (r),
                            avoidTransforms: true
                        }, 500, "easeInOutQuart", s)
                    } else {
                        if (u === "RIGHT") {
                            p(".index-navigation .jbn-nav-button").hide();
                            x.animate({
                                left: "+=" + (r),
                                width: "-=" + (r),
                                avoidTransforms: true
                            }, 500, "easeInOutQuart", s)
                        } else {
                            x.animate({
                                top: "+=" + (w),
                                height: "-=" + (w),
                                avoidTransforms: true
                            }, 500, "easeInOutQuart", s)
                        }
                    }
                }
            } else {
                s()
            }
        } else {
            A = a.glrySizePosition(true, true);
            a.glryRepaint(true, true, true);
            u = a.config.thumbsposition.toUpperCase();
            var D = A.index_panel_top;
            var y = A.index_panel_left;
            var v = A.index_panel_height;
            var t = A.index_panel_width;
            if (u === "TOP") {
                v = 0;
                D = A.index_panel_top - A.index_panel_height
            } else {
                if (u === "LEFT") {
                    t = 0;
                    y = A.index_panel_left - A.index_panel_width
                } else {
                    if (u === "RIGHT") {
                        t = 0;
                        y = A.index_panel_left + A.index_panel_width
                    } else {
                        v = 0;
                        D = A.index_panel_top + A.index_panel_height
                    }
                }
            }
            x.css({
                top: D,
                height: v,
                left: y,
                width: t
            });
            x.show();
            if (p(".jb-idx-show-area table").length <= 0) {
                a.index_panel.show_current_page()
            }
            p(".jb-panel-index .jb-area-caption").show();
            if (a.config.gallerytitleposition.toUpperCase() === "ABOVE_THUMBS") {
                p(".jb-panel-index .jb-area-large-mode-title").show()
            }
            var C = function() {
                a.index_panel.set_visible_flag(true);
                x.hide();
                if (!q) {
                    a.glryRepaint(true, false, true)
                }
            };
            if (!B) {
                p(".jb-panel-index .jb-area-large-mode-title").css({
                    overflow: "hidden",
                    "white-space": "nowrap"
                });
                if (u === "TOP") {
                    x.animate({
                        top: "-=" + (-A.index_panel_height),
                        height: "+=" + (A.index_panel_height),
                        avoidTransforms: true
                    }, 500, "easeInOutQuart", C)
                } else {
                    if (u === "LEFT") {
                        x.animate({
                            left: "+=" + (A.index_panel_width),
                            width: "+=" + (A.index_panel_width),
                            avoidTransforms: true
                        }, 500, "easeInOutQuart", C)
                    } else {
                        if (u === "RIGHT") {
                            x.animate({
                                left: "-=" + (A.index_panel_width),
                                width: "+=" + (A.index_panel_width),
                                avoidTransforms: true
                            }, 500, "easeInOutQuart", C)
                        } else {
                            x.animate({
                                top: "+=" + (-A.index_panel_height),
                                height: "+=" + (A.index_panel_height),
                                avoidTransforms: true
                            }, 500, "easeInOutQuart", C)
                        }
                    }
                }
            } else {
                C()
            }
        }
        if (a.config_manager.isp && juicebox_instances[a.instance_id] && typeof (juicebox_instances[a.instance_id].onShowThumbs) === "function") {
            juicebox_instances[a.instance_id].onShowThumbs(!h)
        }
        if (a.utils.is_touchable_desktop()) {
            a.features.touchevent.setTransitioning(true);
            window.setTimeout(function() {
                a.features.touchevent.setTransitioning(false)
            }, 50)
        }
        return false
    };
    var l = function() {};
    var g = function() {
        return h
    };
    var c = function(q) {
        h = !q
    };
    var d = function() {
        return o
    };
    var f = function() {
        if (!a.config.showsmallthumbsbutton || !a.config.showthumbsbutton || (!a.utils.is_large_screen_mode(a.config) && a.index_panel.is_visible())) {
            return false
        }
        if (!a.config.showsmallthumbsbutton || (!a.config.showthumbsbutton && a.utils.is_large_screen_mode(a.config))) {
            return false
        }
        return true
    };
    var j = function() {
        var q = p(".jb-bb-btn-de-show-list");
        if (a.utils.is_large_screen_mode(a.config)) {
            if (a.index_panel.is_visible()) {
                q.attr("title", a.config.languagelistall.htlsm)
            } else {
                q.attr("title", a.config.languagelistall.stlsm)
            }
        } else {
            q.attr("title", a.config.languagelistall.st);
            if (f()) {
                q.show()
            } else {
                q.hide();
                if (p(".jb-bb-bar>div:visible").length <= 0 && a.isFullScreenMode()) {
                    p(".jb-bb-bar").hide()
                }
            }
            if (a.detail_panel.is_visible()) {
                a.index_panel.display_gallery_top(false)
            } else {}
        }
    };
    return {
        setContext: m,
        setEvent: i,
        init: l,
        isThumbsHidden: g,
        switch2Thumbnails: n,
        isSwitching: d,
        toggle_index_panel_4_lsm: b,
        setIndexVisibleFlag: c,
        repaint: j,
        indexButtonClicked: k,
        isVisible: f
    }
}
;
juicebox_registered_components.openurl = function() {
    var c, e;
    var f = function(h) {
        c = h;
        e = c._
    };
    var g = function() {
        c._(".jb-bb-btn-open-url").click(d)
    };
    var d = function() {
        var h = c.detail_panel.get_current_photo();
        if (c.config.useflickr) {
            if (h.imageFullURL) {
                window.open(h.imageFullURL);
                return false
            }
        }
        var j;
        if (h.linkURL) {
            j = h.linkURL
        } else {
            j = h.imageURL;
            if (h.largeImageURL) {
                j = h.largeImageURL
            }
        }
        var i = h.linkTarget ? h.linkTarget.toLowerCase() : "";
        if (i === "_self") {
            window.location.href = j
        } else {
            window.open(j, i)
        }
        return false
    };
    var b = function() {};
    var a = function() {};
    return {
        setContext: f,
        setEvent: g,
        init: b,
        repaint: a,
        open_url: d
    }
}
;
juicebox_registered_components.fullscreen = function() {
    var a, n, e;
    var d = juicebox_lib.jQuery;
    var h = null;
    var l = function(p) {
        a = p;
        n = a._;
        var o = a.config;
        e = {
            parent_gallery_param: o.persistor_param,
            is_full_screen: ((o.fullscreen_displaying_mode) ? true : false),
            parent_gallery: o.parent_gallery,
            initial_body_css_inline_style: (o.initial_body_css_inline_style ? o.initial_body_css_inline_style : ""),
            scroll_position: (o.scroll_position ? o.scroll_position : {}),
            initial_height: 0,
            initial_width: 0
        }
    };
    var g = function() {
        n(".jb-bb-btn-full-screen").click(b)
    };
    var j = function() {
        h = new juicebox_gallery_dialog({
            jquery: d
        })
    };
    var c = function() {};
    var b = function() {
        if (navigator.userAgent.match(/Safari/i)) {
            m()
        } else {
            return m()
        }
        return false
    };
    var m = function() {
        if (!e.is_full_screen) {
            if (a.utils.is_new_expanded_window()) {
                window.history.back();
                return false
            }
            if (a.config_manager.isp && juicebox_instances[a.instance_id] && typeof (juicebox_instances[a.instance_id].onExpand) === "function") {
                juicebox_instances[a.instance_id].onExpand(true)
            }
            a.features.hashstatus.enableHashEvent(false);
            a.features.hashstatus.setExpanded(true);
            if (!a.utils.is_in_iframe() && a.utils.need_new_window(a.config)) {
                var p;
                if (d.browser.msie && d.browser.version < 8 && d.browser.version >= 7) {
                    p = {
                        configurl: a.utils.convert_to_absolute_path(a.correctPath(a.config.configurl)),
                        themeurl: a.utils.convert_to_absolute_path(a.config.themeurl),
                        hide_thumbnails_in_lsm: a.features.showthumbsbutton.isThumbsHidden(),
                        backgroundurl: a.utils.convert_to_absolute_path(a.correctPath(a.config.backgroundurl)),
                        firstimageindex: a.detail_panel.get_current_photo() ? a.detail_panel.get_current_photo().position + 1 : 0,
                        baseurl: a.utils.convert_to_absolute_path(a.config.baseurl)
                    }
                } else {
                    if (a.features.splash.isNeeded()) {
                        a.detail_panel.set_visible_flag(true);
                        a.index_panel.set_visible_flag(false)
                    }
                    p = {
                        showsplashpage: "NEVER",
                        configurl: a.utils.convert_to_absolute_path(a.correctPath(a.config.configurl)),
                        themeurl: a.utils.convert_to_absolute_path(a.config.themeurl),
                        baseurl: a.utils.convert_to_absolute_path(a.config.baseurl),
                        backbuttonurl: a.utils.convert_to_absolute_path(a.config.backbuttonurl),
                        audiourlmp3: (a.config.audiourlmp3 ? a.utils.convert_to_absolute_path(a.config.audiourlmp3) : ""),
                        audiourlogg: (a.config.audiourlogg ? a.utils.convert_to_absolute_path(a.config.audiourlogg) : ""),
                        backgroundurl: a.utils.convert_to_absolute_path(a.correctPath(a.config.backgroundurl)),
                        firstimageindex: a.detail_panel.get_current_photo() ? a.detail_panel.get_current_photo().position + 1 : 0,
                        hide_thumbnails_in_lsm: a.features.showthumbsbutton.isThumbsHidden(),
                        is_detail_visible: a.detail_panel.is_visible(),
                        is_index_visible: a.index_panel.is_visible(),
                        maxthumbcolumns: a.config.maxthumbcolumns,
                        maxthumbrows: a.config.maxthumbrows,
                        languagelist: a.config.languagelistbak,
                        pageTitle: a.config.gallerytitle ? a.config.gallerytitle : d("head > title").text()
                    }
                }
                a.config_manager.get_cookie_manager().saveConfig({
                    skip: "gallerywidth,galleryheight,containerid,enabledirectlinks,usefullscreenexpand,expandinnewpage,languagelistall,splashtitle,splashimageurl,splashshowimagecount,gallerydescription,thumb_load_placeholder,main_load_placeholder,showthumbsonload",
                    config: p
                });
                if (a.features.audio.isPlaying()) {
                    a.features.audio.toggleAudioPlay()
                }
                document.location.href = a.utils.get_js_folder_url() + "full.html";
                return false
            }
            var s = a.utils.get_viewport_meta_content();
            a.utils.set_viewport_meta(true);
            var q = d.extend({}, a.config);
            var A = a.getIgnoredOptions4New().split(",");
            for (var u = 0; u < A.length; u++) {
                if (A[u].length <= 0) {
                    continue
                }
                delete q[A[u]]
            }
            q.containerid = h.get_id();
            q.parent_gallery = juicebox_instances[a.instance_id];
            q.gallerywidth = "100%";
            q.galleryheight = "100%";
            q.fullscreen_displaying_mode = true;
            q.parent_gallery = juicebox_instances[a.instance_id];
            q.initial_body_css_inline_style = d("body").attr("style");
            q.scroll_position = {};
            q.scroll_position.scrollTop = d(window).scrollTop();
            q.scroll_position.scrollLeft = d(window).scrollLeft();
            window.scroll(0, 0);
            q.persistor_param = {};
            q.persistor_param.viewportContent = s;
            var x = d(window);
            var y = a.utils.is_large_screen_mode(a.config);
            q.persistor_param.max_side_length = Math.max(x.width(), x.height());
            q.persistor_param.restore_viewport = function(C, B) {
                a.utils.set_viewport_value(C, B)
            }
            ;
            q.persistor_param.is_index_visible = a.features.splash.isSet() ? false : a.index_panel.is_visible();
            q.persistor_param.is_detail_visible = a.features.splash.isSet() ? true : a.detail_panel.is_visible();
            q.persistor_param.current_image_index = a.detail_panel.get_photo_position();
            q.persistor_param.restore_image = function(B) {
                a.setImageEventIndex(B + 1);
                if (y) {
                    a.showImage(B)
                } else {
                    a.switch2Main(B)
                }
            }
            ;
            q.persistor_param.restore_index = (y ? a.redrawIndexPanel : a.features.showthumbsbutton.switch2Thumbnails);
            q.persistor_param.splash_is_set = a.features.splash.isSet();
            q.persistor_param.background_image_width = a.features.backgroundimage.getSizingInfo().width;
            q.persistor_param.background_image_height = a.features.backgroundimage.getSizingInfo().height;
            q.persistor_param.gallery_manager = a.gallery_manager;
            q.persistor_param.hide_thumbnails_in_lsm = a.features.showthumbsbutton.isThumbsHidden();
            q.persistor_param.last_image_event_index = (a.detail_panel.get_current_photo() ? a.detail_panel.get_current_photo().position : 0) + 1;
            q.persistor_param.overlay_info_visible = a.features.showinfo.visible();
            q.persistor_param.openedFromSplash = a.features.splash.opendFromSplash;
            if (a.features.audio.isNeeded()) {
                q.persistor_param.is_audio_playing = a.features.audio.isPlaying();
                q.persistor_param.parent_toggle_audio_play = a.features.audio.toggleAudioPlay;
                q.persistor_param.need2PlayAudioAfterSplash = a.features.splash.need2PlayAudioAfterSplash;
                q.persistor_param.stopAudioPlay = a.features.audio.stop
            }
            q.persistor_param.parent_set_info_visible = a.features.showinfo.showInfoCtrls;
            q.persistor_param.different_size_images_in_config = a.hasMultipleSizeImages;
            var r = a.features.autoplay.isPlaying();
            a.features.autoplay.stop(false, true);
            q.persistor_param.is_autoplaying = r;
            q.persistor_param.restore_autoplay = function(B) {
                if (B != a.features.autoplay.isPlaying()) {
                    a.features.autoplay.toggleAutoPlay(false, true)
                }
            }
            ;
            if (!(a.utils.is_swipable_device() || a.config.forcetouchmode || a.config.showinfobutton)) {
                a.setOverlay(false, 0)
            }
            d("body").css({
                overflow: "hidden"
            });
            var t = y ? false : true;
            if (a.config.backgroundopacity === 1 || a.config.backgroundopacity === "1" || (typeof (a.config.backgroundopacity) === "string" && a.config.backgroundopacity.indexOf("filter") === 0 && a.config.backgroundopacity.indexOf("100") > 0)) {
                t = true
            } else {
                q.persistor_param.restore_zindex = function() {
                    n("").show();
                    n("").focus()
                }
                ;
                n("").hide()
            }
            h.fadein_dialog(false, a.config.backgroundcolor, 300, function() {
                a.setExtendedGlry(new juicebox(q))
            });
            if (a.config.usefullscreenexpand) {
                a.utils.show_real_fullscreen("jb-glry-dlg")
            }
        } else {
            var w = d(window);
            if (a.utils.need_viewport_meta()) {
                if (e.parent_gallery_param.viewportContent) {
                    a.utils.set_viewport_meta_content(e.parent_gallery_param.viewportContent)
                } else {
                    if (a.utils.is_android() && a.utils.get_android_ver() >= 4) {
                        e.parent_gallery_param.restore_viewport(320, true)
                    } else {
                        if (a.utils.is_iphone()) {
                            e.parent_gallery_param.restore_viewport(0.4, true)
                        } else {
                            if (a.utils.is_ipad()) {} else {
                                e.parent_gallery_param.restore_viewport(160 * e.parent_gallery_param.max_side_length / Math.max(w.width(), w.height()), true)
                            }
                        }
                    }
                }
            }
            if (!e.parent_gallery_param.splash_is_set) {
                e.parent_gallery_param.parent_set_info_visible(a.features.showinfo.visible());
                var v = a.detail_panel.get_photo_position();
                if (a.detail_panel.is_visible()) {
                    e.parent_gallery_param.restore_image(v)
                }
                if (a.index_panel.is_visible()) {
                    e.parent_gallery_param.restore_index(v)
                }
            }
            window.setTimeout(function() {
                d("body").css({
                    overflow: "auto"
                });
                window.setTimeout(function() {
                    if (juicebox_instances.length > 1) {
                        e.initial_body_css_inline_style = e.initial_body_css_inline_style.replace(/ /g, "").replace("overflow:hidden;")
                    }
                    d("body").attr("style", e.initial_body_css_inline_style);
                    window.setTimeout(function() {
                        window.scroll(e.scroll_position.scrollLeft, e.scroll_position.scrollTop)
                    }, 100)
                }, 100)
            }, 100);
            if (e.parent_gallery_param.restore_zindex) {
                e.parent_gallery_param.restore_zindex()
            }
            var o = function() {
                h.cleanup_dialog();
                a.unbindResize();
                e.parent_gallery.restore(a.features.showthumbsbutton.isThumbsHidden(), a.isOverlayVisible())
            };
            if (a.config.usefullscreenexpand || a.config.autofullscreenexpand) {
                a.utils.exit_fullscreen()
            }
            var z = a.features.autoplay.isPlaying();
            o();
            if (a.features.fullscreen.switched_2_fullscreen()) {
                if (a.features.fullscreen.getPersistor().parent_gallery_param.openedFromSplash()) {
                    if (a.features.fullscreen.getPersistor().parent_gallery_param.stopAudioPlay) {
                        a.features.fullscreen.getPersistor().parent_gallery_param.stopAudioPlay()
                    }
                    z = a.config.autoplayonload ? true : false
                }
            }
            e.parent_gallery_param.restore_autoplay(z);
            a.features.hashstatus.enableHashEvent(false);
            if (!a.features.splash.isSet()) {
                e.parent_gallery.sendMessage()
            }
        }
        return false
    };
    var k = function() {
        return e.is_full_screen
    };
    var i = function() {
        return e.is_full_screen ? e.parent_gallery : null
    };
    var f = function() {
        return e
    };
    return {
        setContext: l,
        setEvent: g,
        init: j,
        repaint: c,
        switched_2_fullscreen: k,
        full_screen: b,
        parentGallery: i,
        getPersistor: f
    }
}
;
juicebox_registered_components.autoplay = function() {
    var a, p, k = 0, i;
    var n = function(q) {
        a = q;
        p = a._;
        i = 1000 * a.config.imagetransitiontime
    };
    var g = function() {
        return "<div class='' title='" + a.config.languagelistall.st + "' style='" + a.utils.get_button_bar_icon_style(config) + "'>" + a.utils.add_font_icon_4_ie8(config, utils.is_large_screen_mode(config) ? "&#xe002;" : "&#xe003;", true) + "</div>"
    };
    var b = function(q) {
        if (!a.config.showthumbsbutton) {
            return false
        }
        if (!a.allowDisplay()) {
            return false
        }
        q.html(g());
        return true
    };
    var h = function() {
        p(".jb-bb-btn-auto-play").click(function() {
            o();
            return false
        })
    };
    var j = function() {};
    var c = function() {};
    var o = function(q, r) {
        if (!a.config.showautoplaybutton && !a.config.enableautoplay && !a.config.autoplayonload) {
            return false
        }
        if (k) {
            window.clearInterval(k);
            k = 0;
            d(r);
            return false
        }
        if (a.detail_panel.is_visible()) {
            if (a.config.gonextonautoplay && !q) {
                a.nextImage(0)
            } else {}
        }
        f();
        d(r);
        return false
    };
    var d = function(v) {
        var s = a.config.languagelistall.aon;
        if (k) {
            p(".jb-bb-btn-auto-play").toggleClass("jb-status-playing").attr("title", a.config.languagelistall.stpa).html(a.utils.add_font_icon_4_ie8(a.config, "&#xe00a;"))
        } else {
            s = a.config.languagelistall.aoff;
            p(".jb-bb-btn-auto-play").toggleClass("jb-status-playing").attr("title", a.config.languagelistall.strta).html(a.utils.add_font_icon_4_ie8(a.config, "&#xe009;"))
        }
        if (a.config.showautoplaystatus && !v) {
            var u = p(".jb-status-message");
            var q = a.glrySizePosition(a.index_panel.is_visible(), a.detail_panel.is_visible(), a.config_manager.isp, a.features.toppanel.isNeeded(), a.index_panel.get_thumb_height(), a.config);
            var t = q.detail_panel_height / 2 - 18;
            var r = q.detail_panel_width / 2 - 60;
            u.css({
                top: t,
                left: r,
                width: "115px"
            });
            u.html(s).fadeIn(300);
            window.setTimeout(function() {
                u.hide().fadeOut(i);
                u.fadeOut(300)
            }, 1000)
        }
    };
    var m = function(q) {
        k = q
    };
    var f = function() {
        k = window.setInterval(function() {
            if (!a.canImageMove(true)) {
                a.features.autoplay.toggleAutoPlay();
                return
            }
            var q = a.gallery_manager().get_next_image(a.detail_panel.get_photo_position()).position;
            var r = p(".jb-dt-main-image-" + q + " .jb-status-loading");
            if (r.length <= 0 && a.config.main_load_placeholder.indexOf("jb-status-") > 0) {
                a.nextImage(0)
            }
        }, 1000 * a.config.displaytime + i)
    };
    var l = function() {
        if (k) {
            o()
        }
    };
    var e = function() {
        return k != 0
    };
    return {
        setContext: n,
        getHtml: g,
        draw: b,
        setEvent: h,
        init: j,
        repaint: c,
        toggleAutoPlay: o,
        stop: l,
        isPlaying: e,
        set_autoplay_flag: m
    }
}
;
juicebox_registered_components.showinfo = function() {
    var a, i, e = true;
    var d = juicebox_lib.jQuery;
    var h = function(j) {
        a = j;
        i = a._
    };
    var f = function() {
        if (!a.config.showinfobutton) {
            return
        }
        i(".jb-bb-btn-show-info").click(function() {
            g();
            return false
        })
    };
    var g = function() {
        e = !e;
        a.setOverlayFlag(e);
        c(e, 250, false)
    };
    var b = function() {
        return e
    };
    var c = function(k, l, o) {
        e = k;
        if (!a.detail_panel.is_visible()) {
            return
        }
        var n = (!a.detail_panel.isImageShowed() && a.config.buttonbarposition.toUpperCase() === "OVERLAY_IMAGE") ? ":not(.jb-classifier-link-wrapper)" : "";
        if (o) {
            n += ":not(.jb-area-caption)"
        }
        a.utils.show_hide_controls(i(".jb-classifier-show-on-over" + n), k, ((d.browser.msie && d.browser.version >= 7 && d.browser.version < 8) ? 0 : l));
        if (!o) {
            i(".jb-area-caption table").css({
                display: ""
            })
        }
        if (a.config.imagetransitiontype.toUpperCase() === "CROSS_FADE" && !(d.browser.msie || a.utils.is_firefox3())) {
            var j = l ? l : 50;
            window.setTimeout(function() {
                i(".jb-area-caption table").css({
                    opacity: 1
                })
            }, j)
        }
        var m = k ? a.config.languagelistall.hdinfo : a.config.languagelistall.sinfo;
        i(".jb-bb-button.jb-bb-btn-show-info").attr("title", m)
    };
    return {
        setContext: h,
        setEvent: f,
        showInfoCtrls: c,
        visible: b
    }
}
;
juicebox_registered_components.audio = function() {
    var a, m, c, f;
    var l = function(n) {
        a = n;
        m = a._
    };
    var h = function() {
        m(".jb-bb-btn-audio").click(function() {
            i();
            return false
        })
    };
    var i = function() {
        var n = false;
        if (a.features.fullscreen.switched_2_fullscreen() && a.features.fullscreen.getPersistor().parent_gallery_param.parent_toggle_audio_play) {
            c = !a.features.fullscreen.getPersistor().parent_gallery_param.parent_toggle_audio_play();
            n = true
        } else {
            if (!f) {
                return c
            }
        }
        if (a.utils.is_earlier_ie()) {
            return c
        }
        if (c) {
            if (!n) {
                if (f) {
                    f.pause()
                }
            }
            c = false;
            m(".jb-bb-btn-audio").removeClass("jb-status-playing").attr("title", a.config.languagelistall.plya)
        } else {
            if (!n) {
                if (f) {
                    f.play()
                }
                if (f.paused) {
                    return c
                }
            }
            c = true;
            m(".jb-bb-btn-audio").addClass("jb-status-playing").attr("title", a.config.languagelistall.psa)
        }
        return c
    };
    var j = function(n) {
        var p;
        if (a.utils.is_firefox() || a.utils.is_opera()) {
            p = a.config.audiourlogg
        } else {
            if (a.config.audiourlmp3) {
                p = a.config.audiourlmp3
            } else {
                p = a.config.audiourlogg
            }
        }
        if (a.features.fullscreen.switched_2_fullscreen() && a.features.fullscreen.getPersistor().parent_gallery_param.parent_toggle_audio_play) {
            if (a.features.fullscreen.getPersistor().parent_gallery_param.need2PlayAudioAfterSplash && a.features.fullscreen.getPersistor().parent_gallery_param.need2PlayAudioAfterSplash(a.config)) {
                i()
            } else {
                c = a.features.fullscreen.getPersistor().parent_gallery_param.is_audio_playing;
                if (a.features.fullscreen.getPersistor().parent_gallery_param.is_audio_playing) {
                    m(".jb-bb-btn-audio").addClass("jb-status-playing").attr("title", a.config.languagelistall.psa)
                } else {
                    m(".jb-bb-btn-audio").removeClass("jb-status-playing").attr("title", a.config.languagelistall.plya)
                }
            }
        } else {
            if (p && !a.utils.is_earlier_ie() && !a.utils.is_adobe_air()) {
                try {
                    f = new Audio(p);
                    f.addEventListener("ended", function() {
                        this.currentTime = 0;
                        if (a.config.loopaudio) {
                            this.play()
                        } else {
                            i()
                        }
                    }, false);
                    f.volume = a.config.audiovolume;
                    if (!n && a.config.playaudioonload) {
                        i()
                    }
                } catch (o) {
                    console.error("cannot handle audio")
                }
            }
        }
    };
    var g = function() {
        return f != null
    };
    var d = function() {
        return c
    };
    var b = function() {};
    var k = function(n, o) {
        if (c) {
            i(n, o)
        }
    };
    var e = function() {
        if (f) {
            f.pause()
        }
        f = null
    };
    return {
        setContext: l,
        setEvent: h,
        init: j,
        repaint: b,
        toggleAudioPlay: i,
        isNeeded: g,
        isPlaying: d,
        stop: k,
        remove: e
    }
}
;
juicebox_registered_components.fotomoto = function() {
    var b, c;
    var d = function(g) {
        b = g;
        c = b._
    };
    var f = function() {
        c(".jb-bb-btn-fotomoto").click(e)
    };
    var e = function() {
        if (b.config.fotomotostoreid) {
            FOTOMOTO.API.showWindow(10, b.detail_panel.get_current_photo().imageURL)
        } else {
            var g = b.detail_panel.get_current_photo();
            if (g.purchaseURL) {
                window.open(g.purchaseURL, "_blank")
            }
        }
        return false
    };
    var a = function() {
        if (b.utils.is_in_iframe()) {
            return false
        }
        if (!b.utils.is_large_screen_mode(b.config)) {
            return false
        }
        if (b.config.fotomotostoreid) {
            return true
        }
        var g = b.detail_panel.get_current_photo();
        if (g.purchaseURL) {
            return true
        }
        return false
    };
    return {
        setContext: d,
        setEvent: f,
        isVisible: a
    }
}
;
juicebox_registered_components.facebook = function() {
    var b, c;
    var d = function(f) {
        b = f;
        c = b._
    };
    var e = function() {
        c(".jb-bb-btn-facebook").click(a)
    };
    var a = function() {
        var f = b.getGalleryInfo();
        window.open("http://www.facebook.com/sharer.php?u=" + f.shareUrl, "", "menubar=no,toolbar=no,resizable=yes," + b.utils.get_popup_position_string(560, 420));
        return false
    };
    return {
        setContext: d,
        setEvent: e
    }
}
;
juicebox_registered_components.twitter = function() {
    var a, b;
    var c = function(f) {
        a = f;
        b = a._
    };
    var e = function() {
        b(".jb-bb-btn-twitter").click(d)
    };
    var d = function() {
        var f = a.getGalleryInfo();
        window.open("https://twitter.com/intent/tweet?text=" + f.shareText + "&url=" + f.shareUrl, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes," + a.utils.get_popup_position_string(600, 420));
        return false
    };
    return {
        setContext: c,
        setEvent: e
    }
}
;
juicebox_registered_components.gplus = function() {
    var b, c;
    var d = function(f) {
        b = f;
        c = b._
    };
    var e = function() {
        c(".jb-bb-btn-gplus").click(a)
    };
    var a = function() {
        var f = b.getGalleryInfo();
        window.open("https://plus.google.com/share?url=" + f.shareUrl, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes," + b.utils.get_popup_position_string(600, 420));
        return false
    };
    return {
        setContext: d,
        setEvent: e
    }
}
;
juicebox_registered_components.printerest = function() {
    var a, c;
    var d = function(f) {
        a = f;
        c = a._
    };
    var e = function() {
        c(".jb-bb-btn-printerest").click(b)
    };
    var b = function() {
        var f = a.getGalleryInfo();
        window.open("https://pinterest.com/login/?next=/pin/create/bookmarklet/%3Fmedia%3D" + f.imageUrl + "%26description%3D" + f.shareText + "%26is_video%3Dfalse%26url%3D" + f.shareUrl, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes," + a.utils.get_popup_position_string(600, 420));
        return false
    };
    return {
        setContext: d,
        setEvent: e
    }
}
;
juicebox_registered_components.tumblr = function() {
    var a, c;
    var d = function(f) {
        a = f;
        c = a._
    };
    var e = function() {
        c(".jb-bb-btn-tumblr").click(b)
    };
    var b = function() {
        var f = a.getGalleryInfo();
        window.open("http://www.tumblr.com/share/photo?source=" + f.imageUrl + "&caption=" + f.shareText + "&click_thru=" + f.shareUrl, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes," + a.utils.get_popup_position_string(600, 420));
        return false
    };
    return {
        setContext: d,
        setEvent: e
    }
}
;