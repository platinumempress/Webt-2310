'use strict';
var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}
da("Symbol.dispose", function(a) {
    return a ? a : Symbol("Symbol.dispose")
});
da("globalThis", function(a) {
    return a || ca
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    g[0] === "" && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self;

function ha(a, b) {
    var c = u("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b
}

function u(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], b == null) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return b == "array" || b == "object" && typeof a.length == "number"
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ja : ka;
    return la.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a) {
    return a
}

function na(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ja = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.rb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
na(oa, Error);
oa.prototype.name = "CustomError";
var pa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let qa = globalThis.trustedTypes,
    ra;

function sa() {
    let a = null;
    if (!qa) return a;
    try {
        const b = c => c;
        a = qa.createPolicy("goog#html", {
            createHTML: b,
            createScript: b,
            createScriptURL: b
        })
    } catch (b) {}
    return a
};
var ta = class {
    constructor(a) {
        this.h = a
    }
    toString() {
        return this.h + ""
    }
};

function ua(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function va(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function wa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function xa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    b >= 0 && Array.prototype.splice.call(a, b, 1)
}

function ya(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function za(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b
};

function Aa(a) {
    var b = u("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string") return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    let c, d;
    var e = !1;
    try {
        c = a.lineNumber || a.line || "Not available"
    } catch (f) {
        c = "Not available", e = !0
    }
    try {
        d = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (f) {
        d = "Not available", e = !0
    }
    b = Ba(a);
    if (!(!e && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        e = a.message;
        if (e ==
            null) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) e = a.constructor.name;
                else if (e = a.constructor, Ca[e]) e = Ca[e];
                else {
                    e = String(e);
                    if (!Ca[e]) {
                        const f = /function\s+([^\(]+)/m.exec(e);
                        Ca[e] = f ? f[1] : "[Anonymous]"
                    }
                    e = Ca[e]
                }
                e = 'Unknown Error of type "' + e + '"'
            } else e = "Unknown Error of unknown type";
            typeof a.toString === "function" && Object.prototype.toString !== a.toString && (e += ": " + a.toString())
        }
        return {
            message: e,
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: d,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Ba(a, b) {
    b || (b = {});
    b[Da(a)] = !0;
    let c = a.stack || "";
    var d = a.cause;
    d && !b[Da(d)] && (c += "\nCaused by: ", d.stack && d.stack.indexOf(d.toString()) == 0 || (c += typeof d === "string" ? d : d.message + "\n"), c += Ba(d, b));
    a = a.errors;
    if (Array.isArray(a)) {
        d = 1;
        let e;
        for (e = 0; e < a.length && !(d > 4); e++) b[Da(a[e])] || (c += "\nInner error " + d++ + ": ", a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0 || (c += typeof a[e] === "string" ? a[e] : a[e].message + "\n"), c += Ba(a[e], b));
        e < a.length && (c += "\n... " + (a.length - e) + " more inner errors")
    }
    return c
}

function Da(a) {
    let b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack
}
var Ca = {};
var Ea = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ga(a) {
    return a ? decodeURI(a) : a
}

function Ha(a, b, c) {
    if (Array.isArray(b))
        for (let d = 0; d < b.length; d++) Ha(a, String(b[d]), c);
    else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
}

function Ia(a) {
    const b = [];
    for (const c in a) Ha(c, a[c], b);
    return b.join("&")
};

function Ja() {
    throw Error("Invalid UTF8");
}

function Ka(a, b) {
    b = String.fromCharCode.apply(null, b);
    return a == null ? b : a + b
}
let La = void 0,
    Ma;
const Na = typeof TextDecoder !== "undefined";

function Oa(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
var Pa = ha(610401301, !1),
    Qa = ha(653718497, ha(1, !0));

function Ra() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Sa;
const Ta = t.navigator;
Sa = Ta ? Ta.userAgentData || null : null;

function Ua(a) {
    return Pa ? Sa ? Sa.brands.some(({
        brand: b
    }) => b && b.indexOf(a) != -1) : !1 : !1
}

function x(a) {
    return Ra().indexOf(a) != -1
};

function Va() {
    return Pa ? !!Sa && Sa.brands.length > 0 : !1
}

function Wa() {
    return Va() ? Ua("Chromium") : (x("Chrome") || x("CriOS")) && !(Va() ? 0 : x("Edge")) || x("Silk")
};
var Xa = Va() ? !1 : x("Trident") || x("MSIE");
!x("Android") || Wa();
Wa();
var Ya = x("Safari") && !(Wa() || (Va() ? 0 : x("Coast")) || (Va() ? 0 : x("Opera")) || (Va() ? 0 : x("Edge")) || (Va() ? Ua("Microsoft Edge") : x("Edg/")) || (Va() ? Ua("Opera") : x("OPR")) || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Za = {},
    $a = null;

function ab(a, b) {
    b === void 0 && (b = 0);
    bb();
    b = Za[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function cb(a) {
    const b = a.length;
    let c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    const d = new Uint8Array(c);
    let e = 0;
    db(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function db(a, b) {
    function c(e) {
        for (; d < a.length;) {
            const f = a.charAt(d++),
                g = $a[f];
            if (g != null) return g;
            if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
        }
        return e
    }
    bb();
    let d = 0;
    for (;;) {
        const e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (h === 64 && e === -1) break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
    }
}

function bb() {
    if (!$a) {
        $a = {};
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
            b = ["+/=", "+/", "-_=", "-_.", "-_"];
        for (let c = 0; c < 5; c++) {
            const d = a.concat(b[c].split(""));
            Za[c] = d;
            for (let e = 0; e < d.length; e++) {
                const f = d[e];
                $a[f] === void 0 && ($a[f] = e)
            }
        }
    }
};
var eb = typeof Uint8Array !== "undefined",
    fb = !Xa && typeof btoa === "function";

function gb(a) {
    if (!fb) return ab(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const hb = /[-_.]/g,
    ib = {
        "-": "+",
        _: "/",
        ".": "="
    };

function jb(a) {
    return ib[a] || ""
}

function kb(a) {
    if (!fb) return cb(a);
    hb.test(a) && (a = a.replace(hb, jb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function lb(a) {
    return eb && a != null && a instanceof Uint8Array
}
var mb = {};

function nb() {
    return ob || (ob = new pb(null, mb))
}

function qb(a) {
    rb(mb);
    var b = a.h;
    b = b == null || lb(b) ? b : typeof b === "string" ? kb(b) : null;
    return b == null ? b : a.h = b
}
var pb = class {
    sizeBytes() {
        const a = qb(this);
        return a ? a.length : 0
    }
    constructor(a, b) {
        rb(b);
        this.h = a;
        if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
    }
};
let ob;

function rb(a) {
    if (a !== mb) throw Error("illegal external caller");
};
let sb;

function tb() {
    const a = Error();
    za(a, "incident");
    Oa(a)
}

function ub(a) {
    a = Error(a);
    za(a, "warning");
    return a
};

function vb() {
    return typeof BigInt === "function"
};

function wb(a) {
    return Array.prototype.slice.call(a)
};
var xb = typeof Symbol === "function" && typeof Symbol() === "symbol";

function yb(a) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : a
}
var zb = yb(),
    Ab = yb("2ex"),
    Bb = yb("1oa");
[...Object.values({
    bb: 1,
    Za: 2,
    Ya: 4,
    hb: 8,
    gb: 16,
    fb: 32,
    Pa: 64,
    mb: 128,
    Xa: 256,
    Wa: 512,
    ab: 1024,
    Ua: 2048,
    lb: 4096,
    Va: 8192,
    Sa: 16384
})];
var Cb = xb ? (a, b) => {
        a[zb] |= b
    } : (a, b) => {
        a.B !== void 0 ? a.B |= b : Object.defineProperties(a, {
            B: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    },
    Db = xb ? (a, b) => {
        a[zb] &= ~b
    } : (a, b) => {
        a.B !== void 0 && (a.B &= ~b)
    },
    y = xb ? a => a[zb] | 0 : a => a.B | 0,
    A = xb ? a => a[zb] : a => a.B,
    D = xb ? (a, b) => {
        a[zb] = b
    } : (a, b) => {
        a.B !== void 0 ? a.B = b : Object.defineProperties(a, {
            B: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function Eb(a, b) {
    D(b, (a | 0) & -30975)
}

function Fb(a, b) {
    D(b, (a | 34) & -30941)
};
var Gb = {},
    Hb = {};

function Ib(a) {
    return !(!a || typeof a !== "object" || a.h !== Hb)
}

function Jb(a) {
    return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
}

function Kb(a) {
    return !Array.isArray(a) || a.length ? !1 : y(a) & 1 ? !0 : !1
}
var Lb;
const Mb = [];
D(Mb, 55);
Lb = Object.freeze(Mb);

function Nb(a) {
    if (a & 2) throw Error();
}
let Ob;

function Pb(a, b) {
    (b = Ob ? b[Ob] : void 0) && (a[Ob] = wb(b))
}
var Qb = Object.freeze({});

function Rb(a) {
    a.yb = !0;
    return a
};
var Sb = Rb(a => typeof a === "number"),
    Tb = Rb(a => typeof a === "string"),
    Ub = Rb(a => typeof a === "boolean"),
    Vb = Rb(a => a != null && typeof a === "object" && typeof a.then === "function");
var Wb = typeof t.BigInt === "function" && typeof t.BigInt(0) === "bigint";
var bc = Rb(a => Wb ? a >= Xb && a <= Yb : a[0] === "-" ? Zb(a, $b) : Zb(a, ac));
const $b = Number.MIN_SAFE_INTEGER.toString(),
    Xb = Wb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
    ac = Number.MAX_SAFE_INTEGER.toString(),
    Yb = Wb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

function Zb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (let c = 0; c < a.length; c++) {
        const d = a[c],
            e = b[c];
        if (d > e) return !1;
        if (d < e) return !0
    }
};
const cc = typeof Uint8Array.prototype.slice === "function";
let E = 0,
    F = 0;

function dc(a) {
    const b = a >>> 0;
    E = b;
    F = (a - b) / 4294967296 >>> 0
}

function ec(a) {
    if (a < 0) {
        dc(0 - a);
        const [b, c] = fc(E, F);
        E = b >>> 0;
        F = c >>> 0
    } else dc(a)
}

function gc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else vb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + hc(c) + hc(a));
    return c
}

function hc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function fc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function ic(a) {
    return a.displayName || a.name || "unknown type name"
}
const jc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function kc(a) {
    const b = typeof a;
    switch (b) {
        case "bigint":
            return !0;
        case "number":
            return Number.isFinite(a)
    }
    return b !== "string" ? !1 : jc.test(a)
}

function lc(a) {
    if (a == null) return a;
    if (typeof a === "string") {
        if (!a) return;
        a = +a
    }
    if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
}

function mc(a) {
    if (!kc(a)) throw ub("int64");
    switch (typeof a) {
        case "string":
            kc(a);
            var b = Math.trunc(Number(a));
            if (Number.isSafeInteger(b)) a = String(b);
            else if (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), !(a[0] === "-" ? a.length < 20 || a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 || a.length === 19 && Number(a.substring(0, 6)) < 922337)) {
                if (a.length < 16) ec(Number(a));
                else if (vb()) a = BigInt(a), E = Number(a & BigInt(4294967295)) >>> 0, F = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +(a[0] === "-");
                    F = E = 0;
                    var c =
                        a.length;
                    for (let e = 0 + b, f = (c - b) % 6 + b; f <= c; e = f, f += 6) {
                        var d = Number(a.slice(e, f));
                        F *= 1E6;
                        E = E * 1E6 + d;
                        E >= 4294967296 && (F += Math.trunc(E / 4294967296), F >>>= 0, E >>>= 0)
                    }
                    if (b) {
                        const [e, f] = fc(E, F);
                        E = e;
                        F = f
                    }
                }
                a = E;
                b = F;
                if (b & 2147483648)
                    if (vb()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
                    else {
                        const [e, f] = fc(a, b);
                        a = "-" + gc(e, f)
                    }
                else a = gc(a, b)
            }
            return a;
        case "bigint":
            b = a = BigInt.asIntN(64, a);
            if (Tb(b)) {
                if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
            } else if (Sb(b) && !Number.isSafeInteger(b)) throw Error(String(b));
            Wb ? a = BigInt(a) : a = Ub(a) ? a ? "1" : "0" : Tb(a) ? a.trim() || "0" : String(a);
            return a;
        default:
            kc(a);
            a = Math.trunc(a);
            if (!Number.isSafeInteger(a)) {
                ec(a);
                b = E;
                c = F;
                if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
                d = c * 4294967296 + (b >>> 0);
                b = Number.isSafeInteger(d) ? d : gc(b, c);
                a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
            }
            return a
    }
}

function nc(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a
}

function oc(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${ic(b)} but got ${a&&ic(a.constructor)}`);
    return a
}

function pc(a, b, c) {
    if (a != null && typeof a === "object" && a.T === Gb) return a;
    if (Array.isArray(a)) {
        var d = y(a),
            e = d;
        e === 0 && (e |= c & 32);
        e |= c & 2;
        e !== d && D(a, e);
        return new b(a)
    }
};

function qc(a) {
    rc === void 0 && (rc = typeof Proxy === "function" ? sc(Proxy) : null);
    var b;
    (b = !rc) || (tc === void 0 && (tc = typeof WeakMap === "function" ? sc(WeakMap) : null), b = !tc);
    if (b) return a;
    if (b = uc(a)) return b;
    if (Math.random() > .01) return a;
    vc(a);
    b = new rc(a, {
        set(c, d, e) {
            wc();
            c[d] = e;
            return !0
        }
    });
    xc(a, b);
    return b
}

function wc() {
    tb()
}
let yc = void 0,
    zc = void 0;

function uc(a) {
    let b;
    return (b = yc) == null ? void 0 : b.get(a)
}

function xc(a, b) {
    (yc || (yc = new tc)).set(a, b);
    (zc || (zc = new tc)).set(b, a)
}
let rc = void 0,
    tc = void 0;

function sc(a) {
    try {
        return a.toString().indexOf("[native code]") !== -1 ? a : null
    } catch (b) {
        return null
    }
}
let Ac = void 0;

function vc(a) {
    if (Ac === void 0) {
        const b = new rc([], {});
        Ac = Array.prototype.concat.call([], b).length === 1
    }
    Ac && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
};
let Bc, Cc, Dc;

function Ec(a) {
    switch (typeof a) {
        case "boolean":
            return Cc || (Cc = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? Dc || (Dc = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function Fc(a, b, c) {
    a = Gc(a, b[0], b[1], c ? 1 : 2);
    b !== Cc && c && Cb(a, 16384);
    return a
}

function Gc(a, b, c, d) {
    var e;
    d = (e = d) != null ? e : 0;
    a == null && (a = Bc);
    Bc = void 0;
    if (a == null) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = e & -33521665 | (b & 1023) << 15);
    else {
        if (!Array.isArray(a)) throw Error("narr");
        e = y(a);
        if (e & 2048) throw Error("farr");
        if (e & 64) return a;
        d === 1 || d === 2 || (e |= 64);
        if (c && (e |= 512, c !== a[0])) throw Error("mid");
        a: {
            d = a;c = e;
            if (e = d.length) {
                const f = e - 1;
                if (Jb(d[f])) {
                    c |= 256;
                    b = f - (+!!(c & 512) - 1);
                    if (b >= 1024) throw Error("pvtlmt");
                    e = c & -33521665 | (b & 1023) << 15;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(c & 512) - 1));
                if (b > 1024) throw Error("spvt");
                e = c & -33521665 | (b & 1023) << 15
            } else e = c
        }
    }
    D(a, e);
    return a
};

function Hc(a, b) {
    return Ic(b)
}

function Ic(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "bigint":
            return bc(a) ? Number(a) : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Kb(a)) return
                } else {
                    if (lb(a)) return gb(a);
                    if (a instanceof pb) {
                        const b = a.h;
                        return b == null ? "" : typeof b === "string" ? b : a.h = gb(b)
                    }
                }
    }
    return a
};

function Jc(a, b, c) {
    const d = wb(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Pb(d, a);
    return d
}

function Kc(a, b, c, d, e) {
    if (a != null) {
        if (Array.isArray(a)) a = Kb(a) ? void 0 : e && y(a) & 2 ? a : Lc(a, b, c, d !== void 0, e);
        else if (Jb(a)) {
            const f = {};
            for (let g in a) f[g] = Kc(a[g], b, c, d, e);
            a = f
        } else a = b(a, d);
        return a
    }
}

function Lc(a, b, c, d, e) {
    const f = d || c ? y(a) : 0;
    d = d ? !!(f & 32) : void 0;
    const g = wb(a);
    for (let h = 0; h < g.length; h++) g[h] = Kc(g[h], b, c, d, e);
    c && (Pb(g, a), c(f, g));
    return g
}

function Mc(a) {
    return a.T === Gb ? a.toJSON() : Ic(a)
};

function Nc(a, b, c = Fb) {
    if (a != null) {
        if (eb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = y(a);
            if (d & 2) return a;
            b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? (D(a, (d | 34) & -12293), a) : Lc(a, Nc, d & 4 ? Fb : c, !0, !0)
        }
        a.T === Gb && (c = a.o, d = A(c), a = d & 2 ? a : Oc(a, c, d, !0));
        return a
    }
}

function Oc(a, b, c, d) {
    a = a.constructor;
    Bc = b = Pc(b, c, d);
    b = new a(b);
    Bc = void 0;
    return b
}

function Pc(a, b, c) {
    const d = c || b & 2 ? Fb : Eb,
        e = !!(b & 32);
    a = Jc(a, b, f => Nc(f, e, d));
    Cb(a, 32 | (c ? 2 : 0));
    return a
}

function Qc(a) {
    const b = a.o,
        c = A(b);
    return c & 2 ? Oc(a, b, c, !1) : a
};

function Rc(a, b) {
    a = a.o;
    return Sc(a, A(a), b)
}

function Tc(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(b < 0 || b >= a.length || b >= c)) return a[b]
}

function Sc(a, b, c, d) {
    if (c === -1) return null;
    const e = b >> 15 & 1023 || 536870912;
    if (c >= e) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var f = a.length;
        if (d && b & 256 && (d = a[f - 1][c], d != null)) {
            if (Tc(a, b, e, c) && Ab != null) {
                var g;
                a = (g = sb) != null ? g : sb = {};
                g = a[Ab] || 0;
                g >= 4 || (a[Ab] = g + 1, tb())
            }
            return d
        }
        return Tc(a, b, e, c)
    }
}

function Uc(a, b, c) {
    const d = a.o;
    let e = A(d);
    Nb(e);
    G(d, e, b, c);
    return a
}

function G(a, b, c, d) {
    const e = b >> 15 & 1023 || 536870912;
    if (c >= e) {
        let f, g = b;
        if (b & 256) f = a[a.length - 1];
        else {
            if (d == null) return g;
            f = a[e + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        f[c] = d;
        c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && D(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function Vc(a, b, c) {
    a = Sc(a, b, c);
    return Array.isArray(a) ? a : Lb
}

function Wc(a, b) {
    a === 0 && (a = Xc(a, b));
    return a | 1
}

function Yc(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function Zc(a, b, c, d) {
    const e = a.o;
    var f = A(e);
    Nb(f);
    if (d == null) {
        var g = $c(e);
        if (ad(g, e, f, c) === b) g.set(c, 0);
        else return a
    } else {
        c.includes(b);
        g = $c(e);
        const h = ad(g, e, f, c);
        h !== b && (h && (f = G(e, f, h)), g.set(c, b))
    }
    G(e, f, b, d);
    return a
}

function $c(a) {
    if (xb) {
        var b;
        return (b = a[Bb]) != null ? b : a[Bb] = new Map
    }
    if (Bb in a) return a[Bb];
    b = new Map;
    Object.defineProperty(a, Bb, {
        value: b
    });
    return b
}

function ad(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
        const g = d[f];
        Sc(b, c, g) != null && (e !== 0 && (c = G(b, c, e)), e = g)
    }
    a.set(d, e);
    return e
}

function bd(a, b, c, d) {
    let e = A(a);
    d = Sc(a, e, c, d);
    let f;
    if (d != null && d.T === Gb) return b = Qc(d), b !== d && G(a, e, c, b), b.o;
    if (Array.isArray(d)) {
        const g = y(d);
        g & 2 ? f = Fc(Pc(d, g, !1), b, !0) : g & 64 ? f = d : f = Fc(f, b, !0)
    } else f = Fc(void 0, b, !0);
    f !== d && G(a, e, c, f);
    return f
}

function cd(a, b, c) {
    var d = a.o,
        e = A(d),
        f = Sc(d, e, c, !1);
    b = pc(f, b, e);
    b !== f && b != null && G(d, e, c, b);
    d = b;
    if (d == null) return d;
    a = a.o;
    e = A(a);
    e & 2 || (f = Qc(d), f !== d && (d = f, G(a, e, c, d)));
    return d
}

function dd(a, b, c, d, e, f, g) {
    a = a.o;
    var h = !!(2 & b);
    e = h ? 1 : e;
    f = !!f;
    g && (g = !h);
    h = Vc(a, b, d);
    var k = y(h),
        l = !!(4 & k);
    if (!l) {
        k = Wc(k, b);
        var n = h,
            q = b;
        const m = !!(2 & k);
        m && (q |= 2);
        let v = !m,
            z = !0,
            B = 0,
            C = 0;
        for (; B < n.length; B++) {
            const J = pc(n[B], c, q);
            if (J instanceof c) {
                if (!m) {
                    const Fa = !!(y(J.o) & 2);
                    v && (v = !Fa);
                    z && (z = Fa)
                }
                n[C++] = J
            }
        }
        C < B && (n.length = C);
        k |= 4;
        k = z ? k | 16 : k & -17;
        k = v ? k | 8 : k & -9;
        D(n, k);
        m && Object.freeze(n)
    }
    if (g && !(8 & k || !h.length && (e === 1 || e === 4 && 32 & k))) {
        Yc(k) && (h = wb(h), k = Xc(k, b), b = G(a, b, d, h));
        c = h;
        g = k;
        for (n = 0; n < c.length; n++) k = c[n],
            q = Qc(k), k !== q && (c[n] = q);
        g |= 8;
        g = c.length ? g & -17 : g | 16;
        D(c, g);
        k = g
    }
    let p;
    if (e === 1 || e === 4 && 32 & k) Yc(k) || (b = k, k |= !h.length || 16 & k && (!l || 32 & k) ? 2 : 2048, k !== b && D(h, k), Object.freeze(h));
    else if (l = e !== 5 ? !1 : !!(32 & k) || Yc(k) || !!uc(h), (e === 2 || l) && Yc(k) && (h = wb(h), k = Xc(k, b), k = ed(k, b, f), D(h, k), b = G(a, b, d, h)), Yc(k) || (d = k, k = ed(k, b, f), k !== d && D(h, k)), l) p = qc(h);
    else if (e === 2 && !f) {
        let m;
        (m = yc) == null || m.delete(h)
    }
    return p || h
}

function H(a, b, c, d) {
    d != null ? oc(d, b) : d = void 0;
    return Uc(a, c, d)
}

function Xc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return a &= -2049
}

function ed(a, b, c) {
    32 & b && c || (a &= -33);
    return a
}

function fd(a, b, c, d) {
    const e = A(a.o);
    Nb(e);
    a = dd(a, e, c, b, 2, !0);
    d = d != null ? oc(d, c) : new c;
    a.push(d);
    y(d.o) & 2 ? Db(a, 8) : Db(a, 16)
}

function gd(a, b) {
    a = Rc(a, b);
    return a == null || typeof a === "string" ? a : void 0
}

function hd(a, b) {
    a = gd(a, b);
    return a != null ? a : ""
}

function id(a, b) {
    var c = jd;
    const d = a.o;
    c = ad($c(d), d, A(d), c);
    return gd(a, c === b ? b : -1)
}

function kd(a, b, c) {
    if (c != null) {
        if (typeof c !== "number") throw ub("int32");
        if (!Number.isFinite(c)) throw ub("int32");
        c |= 0
    }
    Uc(a, b, c)
}

function I(a, b, c) {
    return Uc(a, b, nc(c))
}

function ld(a, b, c) {
    if (c != null) {
        if (!Number.isFinite(c)) throw ub("enum");
        c |= 0
    }
    return Uc(a, b, c)
};

function md(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function nd() {
    return Error("Failed to read varint, encoding is invalid.")
}

function od(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function pd(a) {
    if (typeof a === "string") return {
        buffer: kb(a),
        J: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        J: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        J: !1
    };
    if (a.constructor === pb) return {
        buffer: qb(a) || new Uint8Array(0),
        J: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        J: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function qd(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw nd();
    rd(a, c);
    return e
}

function rd(a, b) {
    a.h = b;
    if (b > a.i) throw od(a.i, b);
}

function sd(a, b) {
    if (b < 0) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw od(b, a.i - c);
    a.h = d;
    return c
}
var td = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            Y: d = !1
        } = {}) {
            this.Y = d;
            a && (a = pd(a), this.j = a.buffer, this.m = a.J, this.l = b || 0, this.i = c !== void 0 ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.Y = !1
        }
        reset() {
            this.h = this.l
        }
    },
    ud = [];

function vd(a, {
    ha: b = !1
} = {}) {
    a.ha = b
}

function wd(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = qd(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(c >= 0 && c <= 5)) throw md(c, a.j);
    if (b < 1) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function xd(a) {
    switch (a.i) {
        case 0:
            if (a.i != 0) xd(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if ((d[b++] & 128) === 0) {
                        rd(a, b);
                        break a
                    }
                throw nd();
            }
            break;
        case 1:
            a = a.h;
            rd(a, a.h + 8);
            break;
        case 2:
            a.i != 2 ? xd(a) : (b = qd(a.h) >>> 0, a = a.h, rd(a, a.h + b));
            break;
        case 5:
            a = a.h;
            rd(a, a.h + 4);
            break;
        case 3:
            b = a.l;
            do {
                if (!wd(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (a.i == 4) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                xd(a)
            } while (1);
            break;
        default:
            throw md(a.i, a.j);
    }
}

function yd(a, b, c) {
    const d = a.h.i,
        e = qd(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    g <= 0 && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var zd = class {
        constructor(a, b) {
            if (ud.length) {
                const c = ud.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new td(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            vd(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
    },
    Ad = [];
let Bd;
var K = class {
    constructor(a, b, c) {
        this.o = Gc(a, b, c)
    }
    toJSON() {
        return Cd(this)
    }
    clone() {
        const a = this.o;
        return Oc(this, a, A(a), !1)
    }
    J() {
        return !!(y(this.o) & 2)
    }
};
K.prototype.T = Gb;

function Cd(a) {
    a = a.o;
    a = Bd ? a : Lc(a, Mc, void 0, void 0, !1); {
        var b = !Bd;
        let l = a.length;
        if (l) {
            var c = a[l - 1],
                d = Jb(c);
            d ? l-- : c = void 0;
            var e = a;
            if (d) {
                b: {
                    var f = c;
                    var g;
                    var h = !1;
                    if (f)
                        for (let n in f)
                            if (isNaN(+n)) {
                                let q;
                                ((q = g) != null ? q : g = {})[n] = f[n]
                            } else if (d = f[n], Array.isArray(d) && (Kb(d) || Ib(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null) {
                        let q;
                        ((q = g) != null ? q : g = {})[n] = d
                    }
                    h || (g = f);
                    if (g)
                        for (let n in g) {
                            h = g;
                            break b
                        }
                    h = null
                }
                f = h == null ? c != null : h !== c
            }
            for (; l > 0; l--) {
                g = e[l - 1];
                if (!(g == null || Kb(g) || Ib(g) && g.size === 0)) break;
                var k = !0
            }
            if (e !== a || f || k) {
                if (!b) e = Array.prototype.slice.call(e, 0, l);
                else if (k || f || h) e.length = l;
                h && e.push(h)
            }
            k = e
        } else k = a
    }
    return k
};

function Dd() {
    const a = class {
        constructor() {
            throw Error();
        }
    };
    Object.setPrototypeOf(a, a.prototype);
    return a
}
var Ed = Dd();
var Fd = class {
    constructor(a, b) {
        this.W = a;
        a = ma(Ed);
        this.h = !!a && b === a || !1
    }
};
const Gd = new Fd(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        yd(a, bd(b, d, c), e);
        return !0
    }, Ed),
    Hd = new Fd(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        yd(a, bd(b, d, c, !0), e);
        return !0
    }, Ed);
var Id = Symbol(),
    Jd = Symbol();
let Kd, Ld;

function Md(a) {
    var b = Nd,
        c = Od,
        d = a[Id];
    if (d) return d;
    d = {};
    d.la = Ec(a[0]);
    var e = a[1];
    let f = 1;
    e && e.constructor === Object && (d.extensions = e, e = a[++f], typeof e === "function" && (d.Ea = !0, Kd != null || (Kd = e), Ld != null || (Ld = a[f + 1]), e = a[f += 2]));
    const g = {};
    for (; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
        for (var h = 0; h < e.length; h++) g[e[h]] = e;
        e = a[++f]
    }
    for (h = 1; e !== void 0;) {
        typeof e === "number" && (h += e, e = a[++f]);
        let n;
        var k = void 0;
        e instanceof Fd ? n = e : (n = Gd, f--);
        let q;
        if ((q = n) == null ? 0 : q.h) {
            e = a[++f];
            k = a;
            var l =
                f;
            typeof e === "function" && (e = e(), k[l] = e);
            k = e
        }
        e = a[++f];
        l = h + 1;
        typeof e === "number" && e < 0 && (l -= e, e = a[++f]);
        for (; h < l; h++) {
            const p = g[h];
            k ? c(d, h, n, k, p) : b(d, h, n, p)
        }
    }
    return a[Id] = d
};

function Nd(a, b, c, d) {
    const e = c.W;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function Od(a, b, c, d, e) {
    const f = c.W;
    let g, h;
    a[b] = (k, l, n) => f(k, l, n, h || (h = Md(d).la), g || (g = Pd(d)), e)
}

function Pd(a) {
    let b = a[Jd];
    if (b != null) return b;
    const c = Md(a);
    b = c.Ea ? (d, e) => Kd(d, e, c) : (d, e) => {
        const f = A(d);
        for (; wd(e) && e.i != 4;) {
            var g = e.l,
                h = c[g];
            if (h == null) {
                var k = c.extensions;
                k && (k = k[g]) && (k = Qd(k), k != null && (h = c[g] = k))
            }
            if (h == null || !h(e, d, g)) {
                h = e;
                g = h.j;
                xd(h);
                if (h.ha) h = void 0;
                else {
                    k = h.h.h - g;
                    h.h.h = g;
                    b: {
                        h = h.h;g = k;
                        if (g == 0) {
                            h = nb();
                            break b
                        }
                        const l = sd(h, g);h.Y && h.m ? g = h.j.subarray(l, l + g) : (h = h.j, k = l, g = l + g, g = k === g ? new Uint8Array(0) : cc ? h.slice(k, g) : new Uint8Array(h.subarray(k, g)));h = g.length == 0 ? nb() : new pb(g, mb)
                    }
                }
                g = d;
                h && (Ob || (Ob = Symbol()), (k = g[Ob]) ? k.push(h) : g[Ob] = [h])
            }
        }
        f & 16384 && Cb(d, 34);
        return !0
    };
    return a[Jd] = b
}

function Qd(a) {
    a = Array.isArray(a) ? a[0] instanceof Fd ? a : [Hd, a] : [a, void 0];
    const b = a[0].W;
    if (a = a[1]) {
        const c = Pd(a),
            d = Md(a).la;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
};
var Rd;
Rd = new Fd(function(a, b, c) {
    if (a.i !== 2) return !1;
    var d = qd(a.h) >>> 0;
    a = a.h;
    var e = sd(a, d);
    a = a.j;
    if (Na) {
        var f = a,
            g;
        (g = Ma) || (g = Ma = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = e === 0 && d === f.length ? f : f.subarray(e, d);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (La === void 0) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (n) {}
                try {
                    g.decode(new Uint8Array([97])), La = !0
                } catch (n) {
                    La = !1
                }
            }!La && (Ma = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let n;
        for (; h < d;) {
            var k = a[h++];
            k < 128 ? e.push(k) : k < 224 ? h >= d ? Ja() : (n = a[h++], k < 194 || (n & 192) !==
                128 ? (h--, Ja()) : e.push((k & 31) << 6 | n & 63)) : k < 240 ? h >= d - 1 ? Ja() : (n = a[h++], (n & 192) !== 128 || k === 224 && n < 160 || k === 237 && n >= 160 || ((g = a[h++]) & 192) !== 128 ? (h--, Ja()) : e.push((k & 15) << 12 | (n & 63) << 6 | g & 63)) : k <= 244 ? h >= d - 2 ? Ja() : (n = a[h++], (n & 192) !== 128 || (k << 28) + (n - 144) >> 30 !== 0 || ((g = a[h++]) & 192) !== 128 || ((f = a[h++]) & 192) !== 128 ? (h--, Ja()) : (k = (k & 7) << 18 | (n & 63) << 12 | (g & 63) << 6 | f & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ja();
            e.length >= 8192 && (l = Ka(l, e), e.length = 0)
        }
        h = Ka(l, e)
    }
    G(b, A(b), c, h);
    return !0
}, Dd());
var Sd = function(a, b, c = Ed) {
    return new Fd(a, c)
}(function(a, b, c, d, e) {
    if (a.i !== 2) return !1;
    d = Fc(void 0, d, !0);
    var f = A(b);
    Nb(f);
    var g = !!(64 & f) || !(16384 & f);
    let h = Vc(b, f, c);
    const k = h !== Lb;
    if (g || !k) {
        let l = g = k ? y(h) : 0;
        if (!k || 2 & l || Yc(l) || 4 & l && !(32 & l)) h = wb(h), l = Xc(l, f), f = G(b, f, c, h);
        l = Wc(l, f) & -13;
        l = ed(l & -17, f, !0);
        l !== g && D(h, l)
    }
    h.push(d);
    yd(a, d, e);
    return !0
}, function(a, b, c, d, e) {
    if (Array.isArray(b))
        for (let l = 0; l < b.length; l++) {
            var f = e,
                g = a,
                h = g.h;
            var k = b[l];
            k = k instanceof K ? k.o : Array.isArray(k) ? Fc(k, d, !1) : void 0;
            h.call(g, c, k, f)
        }
});

function Td() {};

function Ud(a) {
    for (const b in a) return !1;
    return !0
}

function Vd(a) {
    if (!a || typeof a !== "object") return a;
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = Vd(a[c]);
    return b
}
const Wd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Xd(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < Wd.length; f++) c = Wd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Yd(a, b) {
    this.h = a === Zd && b || ""
}
Yd.prototype.toString = function() {
    return this.h
};
var Zd = {};
new Yd(Zd, "");

function $d(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (c !== "http" && c !== "https" && c !== "chrome-extension" &&
        c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools") throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (c === "http" && e !== "80" || c === "https" && e !== "443") a = ":" + e
    }
    return c + "://" + b + a
};

function ae() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }

    function b(q) {
        for (var p = g, m = 0; m < 64; m += 4) p[m / 4] = q[m] << 24 | q[m + 1] << 16 | q[m + 2] << 8 | q[m + 3];
        for (m = 16; m < 80; m++) q = p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16], p[m] = (q << 1 | q >>> 31) & 4294967295;
        q = e[0];
        var v = e[1],
            z = e[2],
            B = e[3],
            C = e[4];
        for (m = 0; m < 80; m++) {
            if (m < 40)
                if (m < 20) {
                    var J = B ^ v & (z ^ B);
                    var Fa = 1518500249
                } else J = v ^ z ^ B, Fa = 1859775393;
            else m < 60 ? (J = v & z | B & (v | z), Fa = 2400959708) : (J = v ^ z ^ B, Fa = 3395469782);
            J = ((q << 5 | q >>> 27) & 4294967295) + J + C + Fa + p[m] & 4294967295;
            C = B;
            B = z;
            z = (v << 30 | v >>> 2) & 4294967295;
            v = q;
            q = J
        }
        e[0] = e[0] + q & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + B & 4294967295;
        e[4] = e[4] + C & 4294967295
    }

    function c(q, p) {
        if (typeof q === "string") {
            q = unescape(encodeURIComponent(q));
            for (var m = [], v = 0, z = q.length; v < z; ++v) m.push(q.charCodeAt(v));
            q = m
        }
        p || (p = q.length);
        m = 0;
        if (l == 0)
            for (; m + 64 < p;) b(q.slice(m, m + 64)), m += 64, n += 64;
        for (; m < p;)
            if (f[l++] = q[m++], n++, l == 64)
                for (l = 0, b(f); m + 64 < p;) b(q.slice(m, m + 64)), m += 64, n += 64
    }

    function d() {
        var q = [],
            p = n * 8;
        l < 56 ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; m >= 56; m--) f[m] = p & 255, p >>>= 8;
        b(f);
        for (m = p = 0; m < 5; m++)
            for (var v = 24; v >= 0; v -= 8) q[p++] = e[m] >> v & 255;
        return q
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; k < 64; ++k) h[k] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ya: function() {
            for (var q = d(), p = "", m = 0; m < q.length; m++) p += "0123456789ABCDEF".charAt(Math.floor(q[m] / 16)) + "0123456789ABCDEF".charAt(q[m] % 16);
            return p
        }
    }
};

function be(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, ce($d(d), a, c || null)].join(" ") : null
}

function ce(a, b, c) {
    var d = [];
    let e = [];
    if ((Array.isArray(c) ? 2 : 1) == 1) return e = [b, a], va(d, function(h) {
        e.push(h)
    }), de(e.join(" "));
    const f = [],
        g = [];
    va(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
    va(d, function(h) {
        e.push(h)
    });
    a = de(e.join(" "));
    a = [c, a];
    g.length == 0 || a.push(g.join(""));
    return a.join("_")
}

function de(a) {
    const b = ae();
    b.update(a);
    return b.ya().toLowerCase()
};

function ee() {
    this.h = document || {
        cookie: ""
    }
}
ee.prototype.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ka: 60
    });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
ee.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    typeof c === "object" && (h = c.Lb, g = c.Mb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ka);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    d === void 0 && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
};
ee.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = pa(d[e]);
        if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
ee.prototype.remove = function(a, b, c) {
    const d = this.get(a) !== void 0;
    this.set(a, "", {
        ka: 0,
        path: b,
        domain: c
    });
    return d
};
ee.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
};

function fe(a, b, c, d) {
    (a = t[a]) || typeof document === "undefined" || (a = (new ee).get(b));
    return a ? be(a, c, d) : null
};
var ge = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? a => a && AsyncContext.Snapshot.wrap(a) : a => a;

function he() {
    this.l = this.l;
    this.i = this.i
}
he.prototype.l = !1;
he.prototype.dispose = function() {
    this.l || (this.l = !0, this.m())
};
he.prototype[Symbol.dispose] = function() {
    this.dispose()
};
he.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? b !== void 0 ? a.call(b) : a() : (this.i || (this.i = []), b && (a = a.bind(b)), this.i.push(a))
};
he.prototype.m = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};

function ie(a, b) {
    a.l(b);
    a.i < 100 && (a.i++, b.next = a.h, a.h = b)
}
class je {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        this.i > 0 ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};
class ke {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = le.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var le = new je(() => new me, a => a.reset());
class me {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let ne, oe = !1,
    pe = new ke,
    re = (a, b) => {
        ne || qe();
        oe || (ne(), oe = !0);
        pe.add(a, b)
    },
    qe = () => {
        const a = Promise.resolve(void 0);
        ne = () => {
            a.then(se)
        }
    };

function se() {
    let a;
    for (; a = pe.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Oa(b)
        }
        ie(le, a)
    }
    oe = !1
};

function L(a) {
    this.h = 0;
    this.v = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != Td) try {
        const b = this;
        a.call(void 0, function(c) {
            te(b, 2, c)
        }, function(c) {
            te(b, 3, c)
        })
    } catch (b) {
        te(this, 3, b)
    }
}

function ue() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
ue.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var ve = new je(function() {
    return new ue
}, function(a) {
    a.reset()
});

function we(a, b, c) {
    const d = ve.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function xe(a) {
    if (a instanceof L) return a;
    const b = new L(Td);
    te(b, 2, a);
    return b
}
L.prototype.then = function(a, b, c) {
    return ye(this, ge(typeof a === "function" ? a : null), ge(typeof b === "function" ? b : null), c)
};
L.prototype.$goog_Thenable = !0;
L.prototype.D = function(a, b) {
    return ye(this, null, ge(a), b)
};
L.prototype.catch = L.prototype.D;
L.prototype.cancel = function(a) {
    if (this.h == 0) {
        const b = new ze(a);
        re(function() {
            Ae(this, b)
        }, this)
    }
};

function Ae(a, b) {
    if (a.h == 0)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                var d = 0,
                    e = null,
                    f = null;
                for (let g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                e && (c.h == 0 && d == 1 ? Ae(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Be(c), Ce(c, e, 3, b)))
            }
            a.j = null
        } else te(a, 3, b)
}

function De(a, b) {
    a.i || a.h != 2 && a.h != 3 || Ee(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function ye(a, b, c, d) {
    const e = we(null, null, null);
    e.h = new L(function(f, g) {
        e.j = b ? function(h) {
            try {
                const k = b.call(d, h);
                f(k)
            } catch (k) {
                g(k)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                const k = c.call(d, h);
                k === void 0 && h instanceof ze ? g(h) : f(k)
            } catch (k) {
                g(k)
            }
        } : g
    });
    e.h.j = a;
    De(a, e);
    return e.h
}
L.prototype.I = function(a) {
    this.h = 0;
    te(this, 2, a)
};
L.prototype.K = function(a) {
    this.h = 0;
    te(this, 3, a)
};

function te(a, b, c) {
    if (a.h == 0) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.I,
                f = a.K;
            if (d instanceof L) {
                De(d, we(e || Td, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (k) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if (h == "object" && d != null || h == "function") try {
                        const k = d.then;
                        if (typeof k === "function") {
                            Fe(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (k) {
                        f.call(a, k);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.h = b, a.j = null, Ee(a), b != 3 || c instanceof ze || Ge(a, c))
    }
}

function Fe(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    let h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Ee(a) {
    a.s || (a.s = !0, re(a.C, a))
}

function Be(a) {
    let b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
L.prototype.C = function() {
    let a;
    for (; a = Be(this);) Ce(this, a, this.h, this.v);
    this.s = !1
};

function Ce(a, b, c, d) {
    if (c == 3 && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, He(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : He(b, c, d)
    } catch (e) {
        Ie.call(null, e)
    }
    ie(ve, b)
}

function He(a, b, c) {
    b == 2 ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function Ge(a, b) {
    a.m = !0;
    re(function() {
        a.m && Ie.call(null, b)
    })
}
var Ie = Oa;

function ze(a) {
    oa.call(this, a)
}
na(ze, oa);
ze.prototype.name = "cancel";
const Je = self;
class Ke {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function M(a) {
    he.call(this);
    this.I = 1;
    this.s = [];
    this.v = 0;
    this.h = [];
    this.j = {};
    this.X = !!a
}
na(M, he);
M.prototype.K = function(a, b, c) {
    let d = this.j[a];
    d || (d = this.j[a] = []);
    const e = this.I;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.I = e + 3;
    d.push(e);
    return e
};
M.prototype.D = function(a) {
    const b = this.h[a];
    if (b) {
        const c = this.j[b];
        this.v != 0 ? (this.s.push(a), this.h[a + 1] = () => {}) : (c && xa(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
M.prototype.C = function(a, b) {
    var c = this.j[a];
    if (c) {
        const e = Array(arguments.length - 1);
        var d = arguments.length;
        let f;
        for (f = 1; f < d; f++) e[f - 1] = arguments[f];
        if (this.X)
            for (f = 0; f < c.length; f++) d = c[f], Le(this.h[d + 1], this.h[d + 2], e);
        else {
            this.v++;
            try {
                for (f = 0, d = c.length; f < d && !this.l; f++) {
                    const g = c[f];
                    this.h[g + 1].apply(this.h[g + 2], e)
                }
            } finally {
                if (this.v--, this.s.length > 0 && this.v == 0)
                    for (; c = this.s.pop();) this.D(c)
            }
        }
        return f != 0
    }
    return !1
};

function Le(a, b, c) {
    re(function() {
        a.apply(b, c)
    })
}
M.prototype.clear = function(a) {
    if (a) {
        const b = this.j[a];
        b && (b.forEach(this.D, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
M.prototype.m = function() {
    M.Ja.m.call(this);
    this.clear();
    this.s.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var Me = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if (typeof c !== "object") throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
N.Pb = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Ne = {
        va: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        za: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Oe = {
        va: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        za: function(a) {
            return [].concat.apply([], a)
        }
    };
N.Ia = function() {
    Me ? (N.qa = Uint8Array, N.oa = Uint16Array, N.pa = Int32Array, N.assign(N, Ne)) : (N.qa = Array, N.oa = Array, N.pa = Array, N.assign(N, Oe))
};
N.Ia();
try {
    new Uint8Array(1)
} catch (a) {};

function Pe(a) {
    for (var b = a.length; --b >= 0;) a[b] = 0
}
Pe(Array(576));
Pe(Array(60));
Pe(Array(512));
Pe(Array(256));
Pe(Array(29));
Pe(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Qe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Re = class {
    constructor(a) {
        this.name = a
    }
};
var Se = new Re("rawColdConfigGroup");
var Te = new Re("rawHotConfigGroup");
var Ue = class extends K {
    constructor(a) {
        super(a)
    }
};
var Ve = class extends K {
    constructor(a) {
        super(a)
    }
};
var We = class extends K {
    constructor(a) {
        super(a)
    }
};
var Xe = class extends K {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = Rc(this, 36);
        a = a == null ? a : Number.isFinite(a) ? a | 0 : void 0;
        return a != null ? a : 0
    }
    setHomeGroupInfo(a) {
        return H(this, We, 81, a)
    }
    clearLocationPlayabilityToken() {
        return Uc(this, 89)
    }
};
var Ye = class extends K {
        constructor(a) {
            super(a)
        }
        getKey() {
            return hd(this, 1)
        }
    },
    Ze = [2, 3, 4, 5, 6];
var $e = class extends K {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (a != null)
            if (typeof a === "string") a = a ? new pb(a, mb) : nb();
            else if (a.constructor !== pb)
            if (lb(a)) a = a.length ? new pb(new Uint8Array(a), mb) : nb();
            else throw Error();
        return Uc(this, 1, a)
    }
};
var af = class extends K {
    constructor(a) {
        super(a)
    }
};
var bf = class extends K {
    constructor(a) {
        super(a)
    }
};
var cf = class extends K {
    constructor(a) {
        super(a)
    }
};
var df = class extends K {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return ld(this, 5, a)
    }
};
var ef = class extends K {
    constructor(a) {
        super(a)
    }
    j(a) {
        return H(this, Xe, 1, a)
    }
};
var ff = class extends K {
    constructor(a) {
        super(a, 500)
    }
};
var gf = class extends K {
    constructor(a) {
        super(a)
    }
};
var hf = class extends K {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Zc(this, 1, jd, nc(a))
        }
        getPlaylistId() {
            return id(this, 2)
        }
    },
    jd = [1, 2];
var jf = class extends K {
    constructor() {
        super()
    }
};
var kf = new Re("recordNotificationInteractionsEndpoint");
var lf = ["notification/convert_endpoint_to_url"],
    mf = ["notification/record_interactions"],
    nf = ["notification_registration/set_registration"];
var of = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var pf = ["notifications_register", "notifications_check_registration"];
var qf = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let rf = null;

function O(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return sf().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function tf() {
    return O("IndexedDBCheck", "testing IndexedDB").then(() => uf("IndexedDBCheck")).then(a => a === "testing IndexedDB" ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function uf(a) {
    const b = new qf("Error accessing DB");
    return sf().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function sf() {
    return rf ? Promise.resolve(rf) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) rf = d, a(rf);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), sf()
        };
        c.onupgradeneeded = vf
    })
}

function vf(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const wf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function xf(a) {
    if (a.length === 1) return a[0];
    var b = wf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(wf).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function yf(a) {
    return `/youtubei/v1/${xf(a)}`
};
var zf = class extends K {
    constructor(a) {
        super(a)
    }
};
var Af = class extends K {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const Bf = t.window;
let Cf, Df;
const Ef = (Bf == null ? void 0 : (Cf = Bf.yt) == null ? void 0 : Cf.config_) || (Bf == null ? void 0 : (Df = Bf.ytcfg) == null ? void 0 : Df.data_) || {};
w("yt.config_", Ef);

function P(...a) {
    a = arguments;
    a.length > 1 ? Ef[a[0]] = a[1] : a.length === 1 && Object.assign(Ef, a[0])
}

function Q(a, b) {
    return a in Ef ? Ef[a] : b
};
const Ff = [];

function Gf(a) {
    Ff.forEach(b => b(a))
}

function Hf(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            If(b)
        }
    } : a
}

function If(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), P("ERRORS", b));
    Gf(a)
}

function Jf(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), P("ERRORS", b))
};
const Kf = /^[\w.]*$/,
    Lf = {
        q: !0,
        search_query: !0
    };

function Mf(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (h.length === 1 && h[0] || h.length === 2) try {
            const k = Nf(h[0] || ""),
                l = Nf(h[1] || "");
            if (k in c) {
                const n = c[k];
                Array.isArray(n) ? ya(n, l) : c[k] = [n, l]
            } else c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Mf);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Of === l ? "unchanged" : l
            }];
            Lf.hasOwnProperty(e) || Jf(d)
        }
    }
    return c
}
const Of = String(Mf);

function Pf(a) {
    a.charAt(0) === "?" && (a = a.substring(1));
    return Mf(a, "&")
}

function Qf(a, b) {
    return Rf(a, b || {}, !0)
}

function Rf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = d.length > 1 ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Pf(e[1] || "");
    for (var f in b) !c && e !== null && f in e || (e[f] = b[f]);
    b = a;
    a = Ia(e);
    a ? (c = b.indexOf("#"), c < 0 && (c = b.length), f = b.indexOf("?"), f < 0 || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Sf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ea)[1] || null,
        d = Ga(a.match(Ea)[3] || null);
    c && d ? (a = a.match(Ea), b = b.match(Ea), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ga(b.match(Ea)[3] || null) === d && (Number(b.match(Ea)[4] || null) || null) === (Number(a.match(Ea)[4] || null) || null) : !0;
    return a
}

function Nf(a) {
    return a && a.match(Kf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function Tf(a, b) {
    typeof a === "function" && (a = Hf(a));
    return window.setTimeout(a, b)
};
var Uf = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Vf = [...Uf, "client_dev_set_cookie"];

function R(a) {
    a = Wf(a);
    return typeof a === "string" && a === "false" ? !1 : !!a
}

function S(a, b) {
    a = Wf(a);
    return a === void 0 && b !== void 0 ? b : Number(a || 0)
}

function Xf() {
    return Q("EXPERIMENTS_TOKEN", "")
}

function Wf(a) {
    return Q("EXPERIMENT_FLAGS", {})[a]
}

function Yf() {
    const a = [],
        b = Q("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = Q("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && b[d] === void 0 && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
[...Uf];
let Zf = !1;

function $f(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    b.priority && (c.priority = b.priority);
    a = ag(a, b);
    const d = bg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = n => {
                    n = n || {};
                    k ? b.onSuccess && b.onSuccess.call(e, n, h) : b.onError && b.onError.call(e, n, h);
                    b.onFinish && b.onFinish.call(e, n, h)
                };
            (b.format || "JSON") === "JSON" && (k || h.status >= 400 && h.status < 500) ? h.json().then(l, () => {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && a > 0 && (g = Tf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function ag(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = Q("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Qf(a, b);
    return a
}

function bg(a, b) {
    const c = Q("XSRF_FIELD_NAME"),
        d = Q("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = Q("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ga(a.match(Ea)[3] || null) && !b.withCredentials && Ga(a.match(Ea)[3] || null) !== document.location.hostname || b.method !== "POST" || h && h !== "application/x-www-form-urlencoded" || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (R("ajax_parse_query_data_only_when_filled") && f && Object.keys(f).length > 0 || f) && typeof e === "string" &&
        (e = Pf(e), Xd(e, f), e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : Ia(e));
    f = e || f && !Ud(f);
    !Zf && f && b.method !== "POST" && (Zf = !0, If(Error("AJAX request with postData should use POST")));
    return e
};
const cg = [{
    ba: a => `Cannot read property '${a.key}'`,
    U: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ba: a => `Cannot call '${a.key}'`,
    U: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ba: a => `${a.key} is not defined`,
    U: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var eg = {
    G: [],
    F: [{
        callback: dg,
        weight: 500
    }]
};

function dg(a) {
    if (a.name === "JavaException") return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function fg() {
    if (!gg) {
        var a = gg = new hg;
        a.G.length = 0;
        a.F.length = 0;
        ig(a, eg)
    }
    return gg
}

function ig(a, b) {
    b.G && a.G.push.apply(a.G, b.G);
    b.F && a.F.push.apply(a.F, b.F)
}
var hg = class {
        constructor() {
            this.F = [];
            this.G = []
        }
    },
    gg;
const jg = new M;

function kg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = lg(d);
        if (e === Infinity) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = lg(d);
                if (f === 2) return e;
                break;
            case 1:
                if (f === 2) return;
                c += 8;
                break;
            case 2:
                e = lg(d);
                if (f === 2) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (f === 2) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function lg(a) {
    let b = a(),
        c = b & 127;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 7;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 14;
    if (b < 128) return c;
    b = a();
    return b < 128 ? c | (b & 127) << 21 : Infinity
};

function mg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += ng(d, a[d], b, c), e > 500)); d++);
            d = e
        } else if (typeof a === "object")
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = typeof g !== "string" || f !== "clickTrackingParams" && f !== "trackingParams" ? 0 : (g = kg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? ng(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += ng(e, a[e], b, c);
                if (d > 500) break
            }
        } else c[b] = og(a), d += c[b].length;
    else c[b] = og(a), d += c[b].length;
    return d
}

function ng(a, b, c, d) {
    c += `.${a}`;
    a = og(b);
    d[c] = a;
    return c.length + a.length
}

function og(a) {
    try {
        return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function pg() {
    qg.h || (qg.h = new qg);
    return qg.h
}

function rg(a, b) {
    a = {};
    var c = [];
    "USER_SESSION_ID" in Ef && c.push({
        key: "u",
        value: Q("USER_SESSION_ID")
    });
    var d = $d(String(t.location.href));
    var e = [];
    var f;
    (f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__1PSAPISID || t.__OVERRIDE_SID) ? f = !0: (typeof document !== "undefined" && (f = new ee, f = f.get("SAPISID") || f.get("APISID") || f.get("__Secure-3PAPISID") || f.get("__Secure-1PAPISID")), f = !!f);
    f && (f = (d = d.indexOf("https:") == 0 || d.indexOf("chrome-extension:") == 0 || d.indexOf("chrome-untrusted://new-tab-page") == 0 || d.indexOf("moz-extension:") ==
        0) ? t.__SAPISID : t.__APISID, f || typeof document === "undefined" || (f = new ee, f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID")), (f = f ? be(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && ((d = fe("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = fe("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = e.length == 0 ? null : e.join(" ")) a.Authorization = e, e = b = b == null ? void 0 : b.sessionIndex, e === void 0 && (e = Number(Q("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), R("voice_search_auth_header_removal") ||
        (a["X-Goog-AuthUser"] = e.toString()), "INNERTUBE_HOST_OVERRIDE" in Ef || (a["X-Origin"] = window.location.origin), b === void 0 && "DELEGATED_SESSION_ID" in Ef && (a["X-Goog-PageId"] = Q("DELEGATED_SESSION_ID"));
    return a
}
var qg = class {
    constructor() {
        this.Ka = !0
    }
};
var sg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function tg(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
w("ytglobal.prefsUserPrefsPrefs_", u("ytglobal.prefsUserPrefsPrefs_") || {});

function ug() {
    if (Q("DATASYNC_ID") !== void 0) return Q("DATASYNC_ID");
    throw new qf("Datasync ID not set", "unknown");
};

function vg(a, b) {
    return wg(a, 0, b)
}

function xg(a) {
    const b = u("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var yg = class {
    h(a) {
        wg(a, 1)
    }
};

function zg() {
    Ag.h || (Ag.h = new Ag);
    return Ag.h
}

function wg(a, b, c) {
    c !== void 0 && Number.isNaN(Number(c)) && (c = void 0);
    const d = u("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : c === void 0 ? (a(), NaN) : Tf(a, c || 0)
}
var Ag = class extends yg {
        R(a) {
            if (a === void 0 || !Number.isNaN(Number(a))) {
                var b = u("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = u("yt.scheduler.instance.start");
            a && a()
        }
    },
    Bg = zg();
const Cg = [];
let Dg, Eg = !1;

function Fg(a) {
    Eg || (Dg ? Dg.handleError(a) : (Cg.push({
        type: "ERROR",
        payload: a
    }), Cg.length > 10 && Cg.shift()))
}

function Gg(a, b) {
    Eg || (Dg ? Dg.S(a, b) : (Cg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), Cg.length > 10 && Cg.shift()))
};

function Hg(a) {
    if (a.indexOf(":") >= 0) throw Error("Database name cannot contain ':'");
}

function Ig(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const Jg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    Kg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    Lg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var T = class extends qf {
        constructor(a, b = {}, c = Jg[a], d = Kg[a], e = Lg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: self.document === void 0,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, T.prototype)
        }
    },
    Mg = class extends T {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, Jg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, Mg.prototype)
        }
    },
    Ng = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Ng.prototype)
        }
    };
const Og = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Pg(a, b, c, d) {
    b = Ig(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof T) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if (e.name === "QuotaExceededError") return new T("QUOTA_EXCEEDED", a);
    if (Ya && e.name === "UnknownError") return new T("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Ng) return new T("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if (e.name === "InvalidStateError" && Og.some(f => e.message.includes(f))) return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if (e.name === "AbortError") return new T("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Cb: e.name
    })];
    e.level = "WARNING";
    return e
}

function Qg(a, b, c) {
    return new T("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Rg(a) {
    if (!a) throw Error();
    throw a;
}

function Sg(a) {
    return a
}
var Tg = class {
    constructor(a) {
        this.h = a
    }
};

function Ug(a, b, c, d, e) {
    try {
        if (a.state.status !== "FULFILLED") throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Vg ? Wg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Xg(a, b, c, d, e) {
    try {
        if (a.state.status !== "REJECTED") throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Vg ? Wg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Wg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Vg ? Wg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Vg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Vg(new Tg((b, c) => {
            const d = [];
            let e = a.length;
            e === 0 && b(d);
            for (let f = 0; f < a.length; ++f) Vg.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                e === 0 && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Vg(new Tg((b, c) => {
            a instanceof Vg ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new Vg(new Tg((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = a != null ? a : Sg,
            d = b != null ? b : Rg;
        return new Vg(new Tg((e, f) => {
            this.state.status === "PENDING" ? (this.h.push(() => {
                Ug(this, this, c, e, f)
            }), this.i.push(() => {
                Xg(this, this, d, e, f)
            })) : this.state.status === "FULFILLED" ? Ug(this, this, c, e, f) : this.state.status === "REJECTED" && Xg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Yg(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Zg(a) {
    return new Promise((b, c) => {
        Yg(a, b, c)
    })
}

function U(a) {
    return new Vg(new Tg((b, c) => {
        Yg(a, b, c)
    }))
};

function $g(a, b) {
    return new Vg(new Tg((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const ah = window;
var V = ah.ytcsi && ah.ytcsi.now ? ah.ytcsi.now : ah.performance && ah.performance.timing && ah.performance.now && ah.performance.timing.navigationStart ? () => ah.performance.timing.navigationStart + ah.performance.now() : () => (new Date).getTime();

function W(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            A: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        typeof c === "string" ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.A ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const n = Math.round(V());
            try {
                var k = a.h.transaction(b, e.mode),
                    l = d;
                const q = new bh(k),
                    p = yield ch(q, l), m = Math.round(V());
                dh(a, n, m, g, void 0, b.join(), e);
                return p
            } catch (q) {
                l = Math.round(V());
                const p = Pg(q, a.h.name, b.join(), a.h.version);
                if (p instanceof T && !p.h || g >= f) dh(a, n, l, g, p, b.join(), e), h = p
            }
        }
        return Promise.reject(h)
    })
}

function eh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new fh(a)
}

function gh(a, b, c, d) {
    return W(a, [b], {
        mode: "readwrite",
        A: !0
    }, e => {
        e = e.objectStore(b);
        return U(e.h.put(c, d))
    })
}

function dh(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof T && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED") && Gg("QUOTA_EXCEEDED", {
        dbName: Ig(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof T && e.type === "UNKNOWN_ABORT" && (c -= a.j, c < 0 && c >= 2147483648 && (c = 0), Gg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), hh(a, !1, d, f, b, g.tag), Fg(e)) : hh(a, !0, d, f, b, g.tag)
}

function hh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    Gg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var ih = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(V());
        this.i = !1
    }
    add(a, b, c) {
        return W(this, [a], {
            mode: "readwrite",
            A: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return W(this, [a], {
            mode: "readwrite",
            A: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        ((a = this.options) == null ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return W(this, [a], {
            mode: "readonly",
            A: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return W(this, [a], {
            mode: "readwrite",
            A: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return W(this, [a], {
            mode: "readonly",
            A: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return W(this, [a], {
            mode: "readonly",
            A: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function jh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return kh(a).then(d => $g(d, c))
}

function lh(a, b) {
    return jh(a, {
        query: b
    }, c => c.delete().then(() => mh(c))).then(() => {})
}

function nh(a, b, c) {
    const d = [];
    return jh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), mh(e)
    }).then(() => d)
}
var fh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return U(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return U(this.h.clear()).then(() => {})
    }
    count(a) {
        return U(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? lh(this, a) : U(this.h.delete(a))
    }
    get(a) {
        return U(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? U(this.h.getAll(a, b)) : nh(this, a, b)
    }
    index(a) {
        try {
            return new oh(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && b.name === "NotFoundError") throw new Ng(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function ch(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var bh = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = T;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (h === null) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new T("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new fh(a), this.j.set(a, b));
        return b
    }
};

function ph(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return kh(a).then(f => $g(f, c))
}

function qh(a, b, c) {
    const d = [];
    return ph(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), mh(e)
    }).then(() => d)
}
var oh = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return U(this.h.count(a))
    }
    delete(a) {
        return ph(this, {
            query: a
        }, b => b.delete().then(() => mh(b)))
    }
    get(a) {
        return U(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? U(this.h.getAll(a, b)) : qh(this, a, b)
    }
    getKey(a) {
        return U(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function kh(a) {
    return U(a).then(b => b ? new rh(a, b) : null)
}

function mh(a) {
    a.cursor.continue(void 0);
    return kh(a.request)
}

function sh(a) {
    a.cursor.advance(5);
    return kh(a.request)
}
var rh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    delete() {
        return U(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return U(this.cursor.update(a))
    }
};

function th(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = b !== void 0 ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.wa,
            h = c.blocking,
            k = c.La,
            l = c.upgrade,
            n = c.closed;
        let q;
        const p = () => {
            q || (q = new ih(f.result, {
                closed: n
            }));
            return q
        };
        f.addEventListener("upgradeneeded", m => {
            try {
                if (m.newVersion === null) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (f.transaction === null) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && m.dataLoss !== "none" && Gg("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: Ig(a)
                });
                const v = p(),
                    z = new bh(f.transaction);
                l && l(v, B => m.oldVersion < B && m.newVersion >= B, z);
                z.done.catch(B => {
                    e(B)
                })
            } catch (v) {
                e(v)
            }
        });
        f.addEventListener("success", () => {
            const m = f.result;
            h && m.addEventListener("versionchange", () => {
                h(p())
            });
            m.addEventListener("close", () => {
                Gg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: Ig(a),
                    dbVersion: m.version
                });
                k && k()
            });
            d(p())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function uh(a, b, c = {}) {
    return th(a, b, c)
}

function vh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.wa;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Zg(c)
        } catch (c) {
            throw Pg(c, a, "", -1);
        }
    })
};

function wh(a, b) {
    return new T("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function xh(a, b) {
    if (!b) throw Qg("openWithToken", Ig(a.name));
    return a.open()
}
var yh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return uh(a, b, c)
    }
    delete(a = {}) {
        return vh(this.name, a)
    }
    open() {
        if (!this.j) throw wh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                La: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = (f = Error().stack) != null ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const n of Object.keys(h.M)) {
                            const {
                                L: q,
                                Hb: p = Number.MAX_VALUE
                            } = h.M[n];
                            !(f.h.version >= q) || f.h.version >= p || f.h.objectStoreNames.contains(n) || l.push(n)
                        }
                        if (l.length !== 0) {
                            const n = Object.keys(e.options.M),
                                q = k.objectStoreNames();
                            if (e.m < S("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), Fg(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: q
                            })), d();
                            if (e.l < S("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), Fg(new T("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: q
                            })), d();
                            throw new Mg(q, n);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? k.name === "VersionError" : "DOMError" in self && k instanceof DOMError ? k.name === "VersionError" : k instanceof Object && "message" in k && k.message === "An attempt was made to open a database using a lower version than the existing version.") {
                            g =
                                yield e.i(e.name, void 0, Object.assign({}, c, {
                                    upgrade: void 0
                                }));
                            h = g.h.version;
                            if (e.options.version !== void 0 && h > e.options.version + 1) throw g.close(), e.j = !1, wh(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !R("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Pg(k, e.name, "", (l = e.options.version) != null ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const zh = new yh("YtIdbMeta", {
    M: {
        databases: {
            L: 1
        }
    },
    upgrade(a, b) {
        b(1) && eh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Ah(a, b) {
    return r(function*() {
        return W(yield xh(zh, b), ["databases"], {
            A: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return U(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Bh(a, b) {
    return r(function*() {
        if (a) return (yield xh(zh, b)).delete("databases", a)
    })
};
let Ch;
const Dh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Eh() {
    return r(function*() {
        return !0
    })
}

function Fh() {
    if (Ch !== void 0) return Ch;
    Eg = !0;
    return Ch = Eh().then(a => {
        Eg = !1;
        return a
    })
}

function Gh() {
    return u("ytglobal.idbToken_") || void 0
}

function Hh() {
    const a = Gh();
    return a ? Promise.resolve(a) : Fh().then(b => {
        (b = b ? Dh : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new Ke;

function Ih(a) {
    try {
        ug();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new T("AUTH_INVALID", {
        dbName: a
    }), Fg(a), a;
    b = ug();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function Jh(a, b, c, d) {
    return r(function*() {
        var e, f = (e = Error().stack) != null ? e : "";
        e = yield Hh();
        if (!e) throw e = Qg("openDbImpl", a, b), R("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), Fg(e), e;
        Hg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : Ih(a);
        try {
            return yield Ah(f, e), yield uh(f.actualName, b, d)
        } catch (g) {
            try {
                yield Bh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function Kh(a, b, c = {}) {
    return Jh(a, b, !1, c)
}

function Lh(a, b, c = {}) {
    return Jh(a, b, !0, c)
}

function Mh(a, b = {}) {
    return r(function*() {
        const c = yield Hh();
        if (c) {
            Hg(a);
            var d = Ih(a);
            yield vh(d.actualName, b);
            yield Bh(d.actualName, c)
        }
    })
}

function Nh(a, b = {}) {
    return r(function*() {
        const c = yield Hh();
        c && (Hg(a), yield vh(a, b), yield Bh(a, c))
    })
};

function Oh(a, b) {
    let c;
    return () => {
        c || (c = new Ph(a, b));
        return c
    }
}
var Ph = class extends yh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Hg(a)
    }
    i(a, b, c = {}) {
        return (this.options.shared ? Lh : Kh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.shared ? Nh : Mh)(this.name, a)
    }
};

function Qh(a, b) {
    return Oh(a, b)
};
var Rh = Qh("ytGcfConfig", {
    M: {
        coldConfigStore: {
            L: 1
        },
        hotConfigStore: {
            L: 1
        }
    },
    shared: !1,
    upgrade(a, b) {
        b(1) && (eh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), eh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function Sh(a) {
    return xh(Rh(), a)
}

function Th(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: V()
            },
            e = yield Sh(c);
        yield e.clear("hotConfigStore");
        return yield gh(e, "hotConfigStore", d)
    })
}

function Uh(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: V()
            },
            f = yield Sh(d);
        yield f.clear("coldConfigStore");
        return yield gh(f, "coldConfigStore", e)
    })
}

function Vh(a) {
    return r(function*() {
        let b = void 0;
        yield W(yield Sh(a), ["coldConfigStore"], {
            mode: "readwrite",
            A: !0
        }, c => ph(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
}

function Wh(a) {
    return r(function*() {
        let b = void 0;
        yield W(yield Sh(a), ["hotConfigStore"], {
            mode: "readwrite",
            A: !0
        }, c => ph(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
};
var Xh = class extends he {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = u("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], w("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    m() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            c >= 0 && a.splice(c, 1)
        }
        this.j.length = 0;
        super.m()
    }
};

function Yh(a, b, c) {
    return r(function*() {
        if (R("start_client_gcf")) {
            c && (a.j = c, w("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            w("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = Gh();
            if (d) {
                if (!c) {
                    var e;
                    c = (e = yield Wh(d)) == null ? void 0 : e.config
                }
                yield Th(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function Zh(a, b, c) {
    return r(function*() {
        if (R("start_client_gcf")) {
            a.coldHashData = b;
            w("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = Gh();
            if (d) {
                if (!c) {
                    let e;
                    c = (e = yield Vh(d)) == null ? void 0 : e.config
                }
                c && (yield Uh(c, b, c.configData, d))
            }
        }
    })
}
var $h = class {
    constructor() {
        this.h = 0;
        this.i = new Xh
    }
};

function ai() {
    return "INNERTUBE_API_KEY" in Ef && "INNERTUBE_API_VERSION" in Ef
}

function bi() {
    return {
        innertubeApiKey: Q("INNERTUBE_API_KEY"),
        innertubeApiVersion: Q("INNERTUBE_API_VERSION"),
        Z: Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Aa: Q("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ba: Q("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ja: Q("INNERTUBE_CONTEXT_HL"),
        ia: Q("INNERTUBE_CONTEXT_GL"),
        Ca: Q("INNERTUBE_HOST_OVERRIDE") || "",
        Da: !!Q("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        xb: !!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: Q("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function ci(a) {
    const b = {
        client: {
            hl: a.ja,
            gl: a.ia,
            clientName: a.Aa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.Z
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && c != 1 && (b.client.screenDensityFloat = String(c));
    c = Xf();
    c !== "" && (b.client.experimentsToken = c);
    c = Yf();
    c.length > 0 && (b.request = {
        internalExperimentFlags: c
    });
    di(void 0, b);
    ei(a, void 0, b);
    R("start_client_gcf") && fi(void 0, b);
    Q("DELEGATED_SESSION_ID") && !R("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: Q("DELEGATED_SESSION_ID")
    });
    !R("fill_delegate_context_in_gel_killswitch") && (a = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Q("INNERTUBE_CONTEXT");
    var d;
    if (R("enable_persistent_device_token") && (a == null ? 0 : (d = a.client) == null ? 0 : d.rolloutToken)) {
        var e;
        b.client.rolloutToken = a == null ? void 0 : (e = a.client) == null ? void 0 : e.rolloutToken
    }
    d = Object;
    e = d.assign;
    a = b.client;
    var f = Q("DEVICE", "");
    c = {};
    for (const [g, h] of Object.entries(Pf(f))) {
        f =
            g;
        const k = h;
        f === "cbrand" ? c.deviceMake = k : f === "cmodel" ? c.deviceModel = k : f === "cbr" ? c.browserName = k : f === "cbrver" ? c.browserVersion = k : f === "cos" ? c.osName = k : f === "cosver" ? c.osVersion = k : f === "cplatform" && (c.platform = k)
    }
    b.client = e.call(d, a, c);
    return b
}

function di(a, b) {
    const c = u("yt.embedded_player.embed_url");
    c && (a ? (b = cd(a, bf, 7) || new bf, I(b, 4, c), H(a, bf, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function ei(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = (d = cd(b, Ve, 62)) != null ? d : new Ve;
            I(c, 6, a.appInstallData);
            H(b, Ve, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function gi(a, b, c = {}) {
    let d = {};
    Q("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": Q("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || Q("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.qb || Q("AUTHORIZATION");
    b || (a ? b = `Bearer ${u("gapi.auth.getToken")().pb}` : (a = rg(pg()), R("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function fi(a, b) {
    if (!$h.h) {
        var c = new $h;
        $h.h = c
    }
    c = $h.h;
    var d = V() - c.h;
    if (c.h !== 0 && d < S("send_config_hash_timer")) c = void 0;
    else {
        d = u("yt.gcf.config.coldConfigData");
        var e = u("yt.gcf.config.hotHashData"),
            f = u("yt.gcf.config.coldHashData");
        d && e && f && (c.h = V());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (d = c)
        if (e = d.coldConfigData, c = d.coldHashData, d = d.hotHashData, a) {
            var g;
            b = (g = cd(a, Ve, 62)) != null ? g : new Ve;
            g = I(b, 1, e);
            g = I(g, 3, c);
            I(g, 5, d);
            H(a, Ve, 62, b)
        } else b && (b.client.configInfo = b.client.configInfo || {},
            e && (b.client.configInfo.coldConfigData = e), c && (b.client.configInfo.coldHashData = c), d && (b.client.configInfo.hotHashData = d))
};
typeof TextEncoder !== "undefined" && new TextEncoder;

function hi(a) {
    this.version = 1;
    this.args = a
};

function ii() {
    var a = ji;
    this.topic = "screen-created";
    this.h = a
}
ii.prototype.toString = function() {
    return this.topic
};
const ki = u("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.K;
M.prototype.unsubscribeByKey = M.prototype.D;
M.prototype.publish = M.prototype.C;
M.prototype.clear = M.prototype.clear;
w("ytPubsub2Pubsub2Instance", ki);
const li = u("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", li);
const mi = u("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", mi);
const ni = u("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", ni);
w("ytPubsub2Pubsub2SkipSubKey", null);

function oi(a, b) {
    const c = pi();
    c && c.publish.call(c, a.toString(), a, b)
}

function qi(a) {
    var b = ri;
    const c = pi();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = u("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (li[d]) try {
                if (f && b instanceof ii && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.na) {
                            const m = new h;
                            h.na = m.version
                        }
                        var l = h.na
                    } catch (m) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var n = l.construct; {
                            var q = k.args;
                            const m = q.length;
                            if (m > 0) {
                                const v = Array(m);
                                for (k = 0; k < m; k++) v[k] = q[k];
                                var p = v
                            } else p = []
                        }
                        f = n.call(l, h, p)
                    } catch (m) {
                        throw m.message = "yt.pubsub2.Data.deserialize(): " + m.message, m;
                    }
                } catch (m) {
                    throw m.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + m.message, m;
                }
                a.call(window, f)
            } catch (m) {
                If(m)
            }
        }, ni[b.toString()] ? u("yt.scheduler.instance") ? Bg.h(g) : Tf(g, 0) : g())
    });
    li[d] = !0;
    mi[b.toString()] || (mi[b.toString()] = []);
    mi[b.toString()].push(d);
    return d
}

function si() {
    var a = ti;
    const b = qi(function(c) {
        a.apply(void 0, arguments);
        ui(b)
    });
    return b
}

function ui(a) {
    const b = pi();
    b && (typeof a === "number" && (a = [a]), va(a, c => {
        b.unsubscribeByKey(c);
        delete li[c]
    }))
}

function pi() {
    return u("ytPubsub2Pubsub2Instance")
};
let vi = void 0,
    wi = void 0;
var xi = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrCowatchUserStartOrJoinEvent: 504,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeQosEvent: 510,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    mdeExporterEvent: 497,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    externalVideoShareToYoutubeAttempt: 501,
    parentCodeEvent: 502,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    producerAppStateChange: 509,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496,
    kidsGuestSessionMismatch: 498,
    musicSideloadedPlaylistMigrationEvent: 499,
    sleepTimerSessionFinishEvent: 500,
    watchEpPromoConflict: 503,
    innertubeResponseCacheMetrics: 505,
    miniAppAdEvent: 506,
    dataPlanUpsellEvent: 507,
    producerProjectRenamed: 508,
    producerMediaSelectionEvent: 511
};
const yi = ["client.name", "client.version"];

function zi(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? yi.includes(b.key) : !1);
    return a
};
var Ai = Qh("ServiceWorkerLogsDatabase", {
    M: {
        SWHealthLog: {
            L: 1
        }
    },
    shared: !0,
    upgrade: (a, b) => {
        b(1) && eh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Bi(a, b) {
    return r(function*() {
        var c = yield xh(Ai(), b), d = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = zi(e.clientError));
        e.interface = d;
        return gh(c, "SWHealthLog", e)
    })
};
w("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Ci(a, b, c, d) {
    !Q("VISITOR_DATA") && b !== "visitor_id" && Math.random() < .01 && Jf(new qf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new qf("innertube xhrclient not ready", b, c, d), If(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (h, k) => {
            if (d.onSuccess) d.onSuccess(k)
        },
        onFetchSuccess: h => {
            if (d.onSuccess) d.onSuccess(h)
        },
        onError: (h, k) => {
            if (d.onError) d.onError(k)
        },
        onFetchError: h => {
            if (d.onError) d.onError(h)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Ca;
    f && (e = f);
    f = a.config_.Da || !1;
    const g = gi(f, e, d);
    Object.assign(c.headers, g);
    c.headers.Authorization && !e && f && (c.headers["x-origin"] = window.location.origin);
    a = Qf(`${e}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`, {
        alt: "json"
    });
    try {
        $f(a, c)
    } catch (h) {
        if (h.name === "InvalidAccessError") Jf(Error("An extension is blocking network request."));
        else throw h;
    }
}
var Di = class {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : ai() && (this.config_ = bi())
    }
    isReady() {
        !this.config_ && ai() && (this.config_ = bi());
        return !!this.config_
    }
};
let Ei = 0;
w("ytDomDomGetNextId", u("ytDomDomGetNextId") || (() => ++Ei));
w("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", t.ytEventsEventsCounter || {
    count: 0
});
t.ytPubsubPubsubInstance || new M;
var Fi = Symbol("injectionDeps"),
    Gi = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    Hi = class {
        constructor() {
            this.key = $h
        }
    };

function Ii(a) {
    var b = {
        ca: Ji,
        ma: Ki.h
    };
    a.i.set(b.ca, b);
    const c = a.j.get(b.ca);
    if (c) try {
        c.Jb(a.resolve(b.ca))
    } catch (d) {
        c.Gb(d)
    }
}

function Li(a, b, c, d = !1) {
    if (c.indexOf(b) > -1) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (d.ma !== void 0) var e = d.ma;
    else if (d.Na) e = d[Fi] ? Mi(a, d[Fi], c) : [], e = d.Na(...e);
    else if (d.Ma) {
        e = d.Ma;
        const f = e[Fi] ? Mi(a, e[Fi], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.Qb || a.h.set(b, e);
    return e
}

function Mi(a, b, c) {
    return b ? b.map(d => d instanceof Hi ? Li(a, d.key, c, !0) : Li(a, d, c)) : []
}
var Ni = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof Hi ? Li(this, a.key, [], !0) : Li(this, a, [])
    }
};
let Oi;

function Pi() {
    Oi || (Oi = new Ni);
    return Oi
};
let Qi = window;

function Ri() {
    let a, b;
    return "h5vcc" in Qi && ((a = Qi.h5vcc.traceEvent) == null ? 0 : a.traceBegin) && ((b = Qi.h5vcc.traceEvent) == null ? 0 : b.traceEnd) ? 1 : "performance" in Qi && Qi.performance.mark && Qi.performance.measure ? 2 : 0
}

function Si(a) {
    const b = Ri();
    switch (b) {
        case 1:
            Qi.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            Qi.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            ua(b, "unknown trace type")
    }
}

function Ti(a) {
    var b = Ri();
    switch (b) {
        case 1:
            Qi.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            Qi.performance.mark(c);
            Qi.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            ua(b, "unknown trace type")
    }
};
var Ui = R("web_enable_lifecycle_monitoring") && Ri() !== 0,
    Vi = R("web_enable_lifecycle_monitoring");

function Wi(a) {
    let b, c;
    (c = (b = window).onerror) == null || c.call(b, a.message, "", 0, 0, a)
};

function Xi(a) {
    let b;
    return (b = a.priority) != null ? b : 0
}

function Yi(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => Xi(a.h[d]) - Xi(a.h[c]));
    for (const c of b) b = a.h[c], b.jobId === void 0 || b.V || (a.scheduler.R(b.jobId), wg(b.aa, 10))
}
var Zi = class {
    constructor(a) {
        this.scheduler = zg();
        this.i = new Ke;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.aa();
                this.h[b].V = !0;
                this.h.every(e => e.V === !0) && this.i.resolve()
            };
            const d = wg(a, Xi(c));
            this.h[b] = Object.assign({}, c, {
                aa: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) a.jobId === void 0 || a.V || this.scheduler.R(a.jobId), a.V = !0;
        this.i.resolve()
    }
};

function $i(a, b, c) {
    Vi && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function aj(a, b) {
    const c = b.filter(e => bj(a, e) === 10),
        d = b.filter(e => bj(a, e) !== 10);
    return a.l.Ob ? (...e) => r(function*() {
        yield cj(c, ...e);
        dj(a, d, ...e)
    }) : (...e) => {
        ej(c, ...e);
        dj(a, d, ...e)
    }
}

function bj(a, b) {
    let c, d;
    return (d = (c = a.j) != null ? c : b.priority) != null ? d : 0
}

function cj(a, ...b) {
    return r(function*() {
        zg();
        for (const c of a) {
            let d;
            xg(() => {
                fj(c.name);
                const e = gj(() => c.callback(...b));
                Vb(e) ? d = R("web_lifecycle_error_handling_killswitch") ? e.then(() => {
                    hj(c.name)
                }) : e.then(() => {
                    hj(c.name)
                }, f => {
                    Wi(f);
                    hj(c.name)
                }) : hj(c.name)
            });
            d && (yield d)
        }
    })
}

function dj(a, b, ...c) {
    b = b.map(d => ({
        aa: () => {
            fj(d.name);
            gj(() => d.callback(...c));
            hj(d.name)
        },
        priority: bj(a, d)
    }));
    b.length && (a.i = new Zi(b))
}

function ej(a, ...b) {
    zg();
    for (const c of a) xg(() => {
        fj(c.name);
        gj(() => c.callback(...b));
        hj(c.name)
    })
}

function fj(a) {
    Ui && a && Si(a)
}

function hj(a) {
    Ui && a && Ti(a)
}
var ij = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        Ui && Si(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        Ui && Ti(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.P === a) : d.from === this.state && d.P === a);
        if (c) {
            this.i && (Yi(this.i), this.i = void 0);
            $i(this, a, b);
            this.state = a;
            Ui && Si(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(aj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function gj(a) {
    if (R("web_lifecycle_error_handling_killswitch")) return a();
    try {
        return a()
    } catch (b) {
        Wi(b)
    }
};

function jj() {
    kj || (kj = new lj);
    return kj
}
var lj = class extends ij {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    P: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    P: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    P: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    P: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = vg(() => {
                this.currentState === "application_navigating" && this.transition("none")
            }, 5E3);
            a(b == null ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (Bg.R(this.h), this.h = null);
            a(b == null ? void 0 : b.event)
        }
    },
    kj;
let mj = [];
w("yt.logging.transport.getScrapedGelPayloads", function() {
    return mj
});

function nj(a, b) {
    const c = oj(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (d.length <= 1 && oj(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (pj(b.auth, h[0])) {
            var f = b.isJspb;
            pj(f === void 0 ? "undefined" : f ? "true" : "false", h[1]) && pj(b.cttAuthInfo, h[2]) && (f = b.tier, f = f === void 0 ? "undefined" : JSON.stringify(f), pj(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function pj(a, b) {
    return a === void 0 || a === "undefined" ? !0 : a === b
}
var qj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = oj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        R("more_accurate_gel_parser") && (b = new CustomEvent("TRANSPORTING_NEW_EVENT"), window.dispatchEvent(b));
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = nj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) :
            c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (a == null ? 0 : a.sizeLimit) && c.length < (a == null ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = nj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = nj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += ((d = this.store[a[c]]) == null ? void 0 : d.length) || 0
        }
        return b
    }
};
qj.prototype.getSequenceCount = qj.prototype.getSequenceCount;
qj.prototype.extractMatchingEntries = qj.prototype.extractMatchingEntries;
qj.prototype.smartExtractMatchingEntries = qj.prototype.smartExtractMatchingEntries;
qj.prototype.storePayload = qj.prototype.storePayload;

function oj(a) {
    return [a.auth === void 0 ? "undefined" : a.auth, a.isJspb === void 0 ? "undefined" : a.isJspb, a.cttAuthInfo === void 0 ? "undefined" : a.cttAuthInfo, a.tier === void 0 ? "undefined" : a.tier].join("/")
};

function rj(a, b) {
    if (a) return a[b.name]
};
const sj = S("initial_gel_batch_timeout", 2E3),
    tj = S("gel_queue_timeout_max_ms", 6E4),
    uj = S("gel_min_batch_size", 5);
let vj = void 0;
class wj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const xj = new wj,
    yj = new wj,
    zj = new wj,
    Aj = new wj;
let Bj, Cj = !0,
    Dj = 1;
const Ej = new Map,
    Fj = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    Gj = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Hj = {};

function X() {
    let a = u("yt.logging.ims");
    a || (a = new qj, w("yt.logging.ims", a));
    return a
}

function Ij(a, b) {
    if (a.endpoint === "log_event") {
        Jj();
        var c = Kj(a),
            d = Lj(a.payload) || "";
        a: {
            if (R("enable_web_tiered_gel")) {
                var e = xi[d || ""];
                var f, g;
                if (Pi().resolve(new Hi) == null) var h = void 0;
                else {
                    let k;
                    h = (k = u("yt.gcf.config.hotConfigGroup")) != null ? k : Q("RAW_HOT_CONFIG_GROUP");
                    h = h == null ? void 0 : (f = h.loggingHotConfig) == null ? void 0 : (g = f.eventLoggingConfig) == null ? void 0 : g.payloadPolicies
                }
                if (f = h)
                    for (g = 0; g < f.length; g++)
                        if (f[g].payloadNumber === e) {
                            e = f[g];
                            break a
                        }
            }
            e = void 0
        }
        f = 200;
        if (e) {
            if (e.enabled === !1 && !R("web_payload_policy_disabled_killswitch")) return;
            f = Mj(e.tier);
            if (f === 400) {
                Nj(a, b);
                return
            }
        }
        Hj[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        X().storePayload(e, a.payload);
        Oj(b, c, e, d === "gelDebuggingEvent")
    }
}

function Oj(a, b, c, d = !1) {
    a && (vj = new a);
    a = S("tvhtml5_logging_max_batch_ads_fork") || S("tvhtml5_logging_max_batch") || S("web_logging_max_batch") || 100;
    const e = V(),
        f = Pj(!1, c.tier),
        g = f.l;
    d && (f.j = !0);
    d = 0;
    c && (d = X().getSequenceCount(c));
    const h = () => {
        Qj({
            writeThenSend: !0
        }, R("flush_only_full_queue") ? b : void 0, !1, c.tier)
    };
    d >= 1E3 ? h() : d >= a ? Bj || (Bj = Rj(() => {
        h();
        Bj = void 0
    }, 0)) : e - g >= 10 && (Sj(!1, c.tier), f.l = e)
}

function Nj(a, b) {
    if (a.endpoint === "log_event") {
        R("more_accurate_gel_parser") && X().storePayload({
            isJspb: !1
        }, a.payload);
        Jj();
        var c = Kj(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = Lj(a.payload) || "";
        b && (vj = new b);
        return new L((f, g) => {
            vj && vj.isReady() ? Tj(d, vj, f, g, {
                bypassNetworkless: !0
            }, !0, e === "gelDebuggingEvent") : f()
        })
    }
}

function Kj(a) {
    var b = "";
    if (a.dangerousLogToVisitorSession) b = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        b = a.cttAuthInfo;
        const c = {};
        b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId);
        Fj[a.cttAuthInfo.token] = c;
        b = a.cttAuthInfo.token
    }
    return b
}

function Qj(a = {}, b, c = !1, d) {
    new L((e, f) => {
        const g = Pj(c, d),
            h = g.j;
        g.j = !1;
        Uj(g.i);
        Uj(g.h);
        g.h = 0;
        vj && vj.isReady() ? d === void 0 && R("enable_web_tiered_gel") ? Vj(e, f, a, b, c, 300, h) : Vj(e, f, a, b, c, d, h) : (Sj(c, d), e())
    })
}

function Vj(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var h = vj,
        k = new Map;
    const l = new Map,
        n = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        q = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (d !== void 0) e ? (b = R("enable_web_tiered_gel") ? X().smartExtractMatchingEntries({
        keys: [n, q],
        sizeLimit: 1E3
    }) : X().extractMatchingEntries(q), k.set(d, b), Wj(k, h, a, c, g)) : (k = R("enable_web_tiered_gel") ? X().smartExtractMatchingEntries({
        keys: [n, q],
        sizeLimit: 1E3
    }) : X().extractMatchingEntries(q), l.set(d, k), Tj(l, h, a, b, c, !1, g));
    else if (e) {
        for (const p of Object.keys(Hj)) b = R("enable_web_tiered_gel") ?
            X().smartExtractMatchingEntries({
                keys: [n, q],
                sizeLimit: 1E3
            }) : X().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: p
            }), b.length > 0 && k.set(p, b), (R("web_fp_via_jspb_and_json") && c.writeThenSend || !R("web_fp_via_jspb_and_json")) && delete Hj[p];
        Wj(k, h, a, c, g)
    } else {
        for (const p of Object.keys(Hj)) d = R("enable_web_tiered_gel") ? X().smartExtractMatchingEntries({
                keys: [{
                    isJspb: !1,
                    cttAuthInfo: p,
                    tier: f
                }, {
                    isJspb: !1,
                    cttAuthInfo: p
                }],
                sizeLimit: 1E3
            }) : X().extractMatchingEntries({
                isJspb: !1,
                cttAuthInfo: p
            }), d.length > 0 && l.set(p, d),
            (R("web_fp_via_jspb_and_json") && c.writeThenSend || !R("web_fp_via_jspb_and_json")) && delete Hj[p];
        Tj(l, h, a, b, c, !1, g)
    }
}

function Sj(a = !1, b = 200) {
    const c = () => {
            Qj({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = Pj(a, b);
    var e = d === Aj || d === zj ? 5E3 : tj;
    R("web_gel_timeout_cap") && !d.h && (e = Rj(() => {
        c()
    }, e), d.h = e);
    Uj(d.i);
    e = Q("LOGGING_BATCH_TIMEOUT", S("web_gel_debounce_ms", 1E4));
    R("shorten_initial_gel_batch_timeout") && Cj && (e = sj);
    e = Rj(() => {
        S("gel_min_batch_size") > 0 ? X().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= uj && c() : c()
    }, e);
    d.i = e
}

function Tj(a, b, c, d, e = {}, f, g) {
    const h = Math.round(V());
    let k = a.size;
    const l = Xj(g);
    for (const [n, q] of a) {
        a = n;
        g = q;
        const p = Vd({
            context: ci(b.config_ || bi())
        });
        if (!ia(g) && !R("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        p.events = g;
        (g = Fj[a]) && Yj(p, a, g);
        delete Fj[a];
        const m = a === "visitorOnlyApprovedKey";
        Zj(p, h, m);
        ak(e);
        const v = C => {
            R("start_client_gcf") && Bg.h(() => r(function*() {
                yield bk(C)
            }));
            k--;
            k || c()
        };
        let z = 0;
        const B = () => {
            z++;
            if (e.bypassNetworkless && z === 1) try {
                Ci(b, l, p, ck({
                    writeThenSend: !0
                }, m, v, B, f)), Cj = !1
            } catch (C) {
                If(C), d()
            }
            k--;
            k || c()
        };
        try {
            Ci(b, l, p, ck(e, m, v, B, f)), Cj = !1
        } catch (C) {
            If(C), d()
        }
    }
}

function Wj(a, b, c, d = {}, e) {
    const f = Math.round(V()),
        g = {
            value: a.size
        };
    var h = new Map([...a]);
    for (const [B] of h) {
        var k = B,
            l = a.get(k);
        h = new jf;
        var n = b.config_ || bi(),
            q = new ef,
            p = new Xe;
        I(p, 1, n.ja);
        I(p, 2, n.ia);
        ld(p, 16, n.Ba);
        I(p, 17, n.innertubeContextClientVersion);
        if (n.Z) {
            var m = n.Z,
                v = new Ve;
            m.coldConfigData && I(v, 1, m.coldConfigData);
            m.appInstallData && I(v, 6, m.appInstallData);
            m.coldHashData && I(v, 3, m.coldHashData);
            m.hotHashData && I(v, 5, m.hotHashData);
            H(p, Ve, 62, v)
        }
        if ((m = t.devicePixelRatio) && m != 1) {
            if (m != null && typeof m !==
                "number") throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);
            Uc(p, 65, m)
        }
        m = Xf();
        m !== "" && I(p, 54, m);
        m = Yf();
        if (m.length > 0) {
            v = new af;
            for (let C = 0; C < m.length; C++) {
                const J = new Ye;
                I(J, 1, m[C].key);
                Zc(J, 2, Ze, nc(m[C].value));
                fd(v, 15, Ye, J)
            }
            H(q, af, 5, v)
        }
        di(q);
        ei(n, p);
        R("start_client_gcf") && fi(p);
        Q("DELEGATED_SESSION_ID") && !R("pageid_as_header_web") && (n = new df, I(n, 3, Q("DELEGATED_SESSION_ID")));
        !R("fill_delegate_context_in_gel_killswitch") && (m = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (v = cd(q, df, 3) || new df, n = q, m = I(v, 18, m), H(n, df, 3, m));
        n = p;
        m = Q("DEVICE", "");
        for (const [C, J] of Object.entries(Pf(m))) m = C, v = J, m === "cbrand" ? I(n, 12, v) : m === "cmodel" ? I(n, 13, v) : m === "cbr" ? I(n, 87, v) : m === "cbrver" ? I(n, 88, v) : m === "cos" ? I(n, 18, v) : m === "cosver" ? I(n, 19, v) : m === "cplatform" && ld(n, 42, tg(v));
        q.j(p);
        H(h, ef, 1, q);
        if (p = Gj[k]) a: {
            if (id(p, 1)) q = 1;
            else if (p.getPlaylistId()) q = 2;
            else break a;H(h, hf, 4, p);p = cd(h, ef, 1) || new ef;n = cd(p, df, 3) || new df;m = new cf;I(m, 2, k);ld(m, 1, q);fd(n, 12, cf, m);H(p, df, 3, n)
        }
        delete Gj[k];
        k = k ===
            "visitorOnlyApprovedKey";
        dk() || Uc(h, 2, f == null ? f : mc(f));
        !k && (q = Q("EVENT_ID")) && (p = ek(), n = new gf, I(n, 1, q), Uc(n, 2, p == null ? p : mc(p)), H(h, gf, 5, n));
        ak(d);
        if (R("jspb_serialize_with_worker")) {
            wi || ((q = Q("WORKER_SERIALIZATION_URL")) ? ((q = q.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) ? (ra === void 0 && (ra = sa()), p = ra, q = new ta(p ? p.createScriptURL(q) : q)) : q = null, wi = q) : wi = null);
            p = wi || void 0;
            if (!vi && p !== void 0) {
                q = Worker;
                if (p instanceof ta) p = p.h;
                else throw Error("");
                vi = new q(p, void 0)
            }
            if ((q = vi) && d.writeThenSend) {
                Ej.set(Dj, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: !1,
                    useVSSEndpoint: e,
                    dangerousLogToVisitorSession: k,
                    requestsOutstanding: g
                });
                a = q;
                b = a.postMessage;
                c = Cd(h);
                b.call(a, {
                    op: "gelBatchToSerialize",
                    batchRequest: c,
                    clientEvents: l,
                    key: Dj
                });
                Dj++;
                break
            }
        }
        if (l) {
            q = [];
            for (p = 0; p < l.length; p++) try {
                q.push(new ff(l[p]))
            } catch (C) {
                If(new qf("Transport failed to deserialize " + String(l[p])))
            }
            l = q
        } else l = [];
        for (const C of l) fd(h, 3, ff, C);
        l = {
            startTime: V(),
            ticks: {},
            infos: {}
        };
        try {
            Bd = !0;
            var z = JSON.stringify(Cd(h), Hc)
        } finally {
            Bd = !1
        }
        h = z;
        l.ticks.geljspc = V();
        R("log_jspb_serialize_latency") && Math.random() < .001 && oi("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            Rb: l
        });
        fk(h, b, c, d, e, k, g)
    }
}

function fk(a, b, c, d = {}, e, f, g = {
    value: 0
}) {
    e = Xj(e);
    d = ck(d, f, h => {
        R("start_client_gcf") && Bg.h(() => r(function*() {
            yield bk(h)
        }));
        g.value--;
        g.value || c()
    }, () => {
        g.value--;
        g.value || c()
    }, !1);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Ci(b, e, "", d);
    Cj = !1
}

function ak(a) {
    R("always_send_and_write") && (a.writeThenSend = !1)
}

function ck(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        sb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: R("compress_gel") || R("compress_gel_lr")
    };
    dk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(V())));
    return a
}

function Zj(a, b, c) {
    dk() || (a.requestTimeMs = String(b));
    R("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = Q("EVENT_ID")) && (c = ek(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function ek() {
    let a = Q("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * 65535 / 2));
    a++;
    a > 65535 && (a = 1);
    P("BATCH_CLIENT_COUNTER", a);
    return a
}

function Yj(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Jj() {
    var a;
    (a = u("yt.logging.transport.enableScrapingForTest")) || (a = Wf("il_payload_scraping"), a = (a !== void 0 ? String(a) : "") !== "enable_il_payload_scraping");
    a || (mj = [], w("yt.logging.transport.enableScrapingForTest", !0), w("yt.logging.transport.scrapedPayloadsForTesting", mj), w("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        w("yt.logging.transport.scrapeClientEvent", !0))
}

function dk() {
    return R("use_request_time_ms_header") || R("lr_use_request_time_ms_header")
}

function Rj(a, b) {
    return R("transport_use_scheduler") === !1 ? Tf(a, b) : R("logging_avoid_blocking_during_navigation") || R("lr_logging_avoid_blocking_during_navigation") ? vg(() => {
        jj().currentState === "none" ? a() : jj().install({
            none: {
                callback: a
            }
        })
    }, b) : vg(a, b)
}

function Uj(a) {
    R("transport_use_scheduler") ? Bg.R(a) : window.clearTimeout(a)
}

function bk(a) {
    return r(function*() {
        var b, c = a == null ? void 0 : (b = a.responseContext) == null ? void 0 : b.globalConfigGroup;
        b = rj(c, Te);
        const d = c == null ? void 0 : c.hotHashData,
            e = rj(c, Se);
        c = c == null ? void 0 : c.coldHashData;
        const f = Pi().resolve(new Hi);
        f && (d && (b ? yield Yh(f, d, b): yield Yh(f, d)), c && (e ? yield Zh(f, c, e): yield Zh(f, c)))
    })
}

function Pj(a, b = 200) {
    return a ? b === 300 ? Aj : yj : b === 300 ? zj : xj
}

function Lj(a) {
    a = Object.keys(a);
    for (const b of a)
        if (xi[b]) return b
}

function Mj(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function Xj(a = !1) {
    return a && R("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const gk = t.ytLoggingGelSequenceIdObj_ || {};

function hk(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || V());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = u("_lact", window);
    a = a == null ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !R("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, gk[b] = b in gk ? gk[b] + 1 : 0, a.sequence = {
        index: gk[b],
        groupKey: b
    }, d.endOfSequence && delete gk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? Nj : Ij)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function ik(a = !1) {
    Qj(void 0, void 0, a)
};
let jk = [];

function Y(a, b, c = {}) {
    let d = Di;
    Q("ytLoggingEventsDefaultDisabled", !1) && Di === Di && (d = null);
    hk(a, b, d, c)
};
var kk = new Set,
    lk = 0,
    mk = 0,
    nk = 0,
    ok = [];
const pk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function qk(a) {
    rk(a)
}

function sk(a) {
    rk(a, "WARNING")
}

function rk(a, b = "ERROR") {
    var c = {};
    c.name = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = Q("INNERTUBE_CONTEXT_CLIENT_VERSION");
    tk(a, c, b)
}

function tk(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (R("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(lk >= 5)) {
            var e = Aa(a);
            d = e.message || "Unknown Error";
            const q =
                e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${q}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(p = mg(a.args[h], `params.${h}`, b, p), p >= 500); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const m = a.params;
                if (typeof a.params === "object")
                    for (h in m) {
                        if (!m[h]) continue;
                        const v = `params.${h}`,
                            z = og(m[h]);
                        b[v] = z;
                        p += v.length +
                            z.length;
                        if (p > 500) break
                    } else b.params = og(m)
            }
            if (ok.length)
                for (h = 0; h < ok.length && !(p = mg(ok[h], `params.context.${h}`, b, p), p >= 500); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: q,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if (a.level === "IGNORED") var k = 0;
            else a: {
                a = fg();
                for (k of a.G)
                    if (b.message && b.message.match(k.Fa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.F)
                    if (l.callback(b)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var n of cg)
                if (n.U[k.name]) {
                    l = n.U[k.name];
                    for (const m of l)
                        if (l = k.message.match(m.u)) {
                            k.params["params.error.original"] = l[0];
                            a = m.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = n.ba(b);
                            break
                        }
                }
            k.params || (k.params = {});
            n = fg();
            k.params["params.errorServiceSignature"] = `msg=${n.G.length}&cb=${n.F.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            (new Yd(Zd, "sample")).constructor !== Yd && (k.params["params.fconst"] = "true");
            window.yterr && typeof window.yterr === "function" && window.yterr(k);
            k.sampleWeight === 0 || kk.has(k.message) || uk(k, c)
        }
    }
}

function uk(a, b = "ERROR") {
    if (b === "ERROR") {
        jg.C("handleError", a);
        if (R("record_app_crashed_web") && nk === 0 && a.sampleWeight === 1) {
            nk++;
            var c = {
                appCrashType: "APP_CRASH_TYPE_BREAKPAD"
            };
            R("report_client_error_with_app_crash_ks") || (c.systemHealth = {
                crashData: {
                    clientError: {
                        logMessage: {
                            message: a.message
                        }
                    }
                }
            });
            Y("appCrashed", c)
        }
        mk++
    } else b === "WARNING" && jg.C("handleWarning", a);
    c = {};
    b: {
        for (e of pk) {
            var d = Ra();
            if (d && d.toLowerCase().indexOf(e.toLowerCase()) >= 0) {
                var e = !0;
                break b
            }
        }
        e = !1
    }
    if (e) c = void 0;
    else {
        d = {
            stackTrace: a.stack
        };
        a.fileName && (d.filename = a.fileName);
        e = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        e.length !== 0 && (e.length !== 1 || isNaN(Number(e[0])) ? e.length !== 2 || isNaN(Number(e[0])) || isNaN(Number(e[1])) || (d.lineNumber = Number(e[0]), d.columnNumber = Number(e[1])) : d.lineNumber = Number(e[0]));
        e = {
            level: "ERROR_LEVEL_UNKNOWN",
            message: a.message,
            errorClassName: a.name,
            sampleWeight: a.sampleWeight
        };
        b === "ERROR" ? e.level = "ERROR_LEVEL_ERROR" : b === "WARNING" && (e.level = "ERROR_LEVEL_WARNNING");
        d = {
            isObfuscated: !0,
            browserStackInfo: d
        };
        c.pageUrl = window.location.href;
        c.kvPairs = [];
        Q("FEXP_EXPERIMENTS") && (c.experimentIds = Q("FEXP_EXPERIMENTS"));
        var f = Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
        const k = Ef.EXPERIMENT_FLAGS;
        if ((!k || !k.web_disable_gel_stp_ecatcher_killswitch) && f)
            for (var g of Object.keys(f)) c.kvPairs.push({
                key: g,
                value: String(f[g])
            });
        if (g = a.params)
            for (var h of Object.keys(g)) c.kvPairs.push({
                key: `client.${h}`,
                value: String(g[h])
            });
        h = Q("SERVER_NAME");
        g = Q("SERVER_VERSION");
        h && g && (c.kvPairs.push({
                key: "server.name",
                value: h
            }),
            c.kvPairs.push({
                key: "server.version",
                value: g
            }));
        c = {
            errorMetadata: c,
            stackTrace: d,
            logMessage: e
        }
    }
    if (c && (Y("clientError", c), b === "ERROR" || R("errors_flush_gel_always_killswitch"))) a: {
        if (R("web_fp_via_jspb")) {
            b = jk;
            jk = [];
            if (b)
                for (const k of b) hk(k.N, k.payload, Di, k.options);
            ik(!0);
            if (!R("web_fp_via_jspb_and_json")) break a
        }
        ik()
    }
    try {
        kk.add(a.message)
    } catch (k) {}
    lk++
}

function vk(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function wk(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (b.status !== 200) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === "yt.sw.adr") {
                    b = new Af(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function xk(a = !1) {
    const b = yk.h;
    return r(function*() {
        if (a || !b.h) b.h = wk(b).then(b.j).catch(c => {
            delete b.h;
            rk(c)
        });
        return b.h
    })
}
var yk = class {
    constructor() {
        this.i = zk("/sw.js_data")
    }
    j(a) {
        const b = cd(a, zf, 2);
        if (b) {
            var c = hd(b, 5);
            c && (t.__SAPISID = c);
            gd(b, 10) != null ? P("EOM_VISITOR_DATA", hd(b, 10)) : gd(b, 7) != null && P("VISITOR_DATA", hd(b, 7));
            if (lc(Rc(b, 4)) != null) {
                c = String;
                var d = lc(Rc(b, 4));
                P("SESSION_INDEX", c(d != null ? d : 0))
            }
            gd(b, 8) != null && P("DELEGATED_SESSION_ID", hd(b, 8));
            gd(b, 12) != null && P("USER_SESSION_ID", hd(b, 12));
            gd(b, 11) != null && P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", hd(b, 11))
        }
        return a
    }
};

function Ak(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, typeof b.expirationSeconds === "string" && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, Number(b.expirationSeconds) * 1E3))
}
var Bk = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = ((c = b.H.context) == null ? void 0 : (d = c.request) == null ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = (e = a.responseContext) == null ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            Ak(this, a)
        }
    }
};
let Ck = Date.now().toString();

function Dk() {
    if (window.crypto && window.crypto.getRandomValues) try {
        var a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (var c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (d) {}
    a = Array(16);
    for (b = 0; b < 16; b++) {
        c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(Math.random() * 256)
    }
    if (Ck)
        for (b = 1, c = 0; c < Ck.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ Ck.charCodeAt(c), b++;
    return a
};
var Ek;
let Fk = t.ytLoggingDocDocumentNonce_;
if (!Fk) {
    const a = Dk(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Fk = b.join("")
}
Ek = Fk;
var Gk = {
    Ra: 0,
    Oa: 1,
    Qa: 2,
    cb: 3,
    Ta: 4,
    ob: 5,
    eb: 6,
    kb: 7,
    ib: 8,
    jb: 9,
    nb: 10,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH",
    10: "UNPLUGGED_BROWSE"
};
let Hk = 1;

function Ik(a) {
    return new Jk({
        trackingParams: a
    })
}

function Kk(a) {
    const b = Hk++;
    return new Jk({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var Jk = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        this.h.trackingParams !== void 0 ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, this.h.veCounter !== void 0 && (a.veCounter = this.h.veCounter), this.h.elementIndex !== void 0 && (a.elementIndex = this.h.elementIndex));
        this.h.dataElement !== void 0 && (a.dataElement = this.h.dataElement.getAsJson());
        this.h.youtubeData !== void 0 && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new $e;
        this.h.trackingParams !== void 0 ? a.setTrackingParams(this.h.trackingParams) : (this.h.veType !== void 0 && kd(a, 2, this.h.veType), this.h.veCounter !== void 0 && kd(a, 6, this.h.veCounter), this.h.elementIndex !== void 0 && kd(a, 3, this.h.elementIndex), this.h.isCounterfactual && Uc(a, 5, !0));
        if (this.h.dataElement !== void 0) {
            var b = this.h.dataElement.getAsJspb();
            H(a, $e, 7, b)
        }
        this.h.youtubeData !== void 0 && H(a, Ue, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function Lk(a = 0) {
    return Q("client-screen-nonce-store", {})[a]
}

function Mk(a, b = 0) {
    let c = Q("client-screen-nonce-store");
    c || (c = {}, P("client-screen-nonce-store", c));
    c[b] = a
}

function Nk(a = 0) {
    return a === 0 ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Ok(a = 0) {
    return Q(Nk(a))
}

function Pk(a = 0) {
    return (a = Ok(a)) ? new Jk({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Qk() {
    let a = Q("csn-to-ctt-auth-info");
    a || (a = {}, P("csn-to-ctt-auth-info", a));
    return a
}

function Rk() {
    return Object.values(Q("client-screen-nonce-store", {})).filter(a => a !== void 0)
}

function Z(a = 0) {
    a = Lk(a);
    if (!a && !Q("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Sk(a) {
    for (const b of Object.values(Gk))
        if (Z(b) === a) return !0;
    return !1
}

function Tk(a, b, c) {
    const d = Qk();
    (c = Z(c)) && delete d[c];
    b && (d[a] = b)
}

function Uk(a) {
    return Qk()[a]
}

function Vk(a, b, c = 0, d) {
    if (a !== Lk(c) || b !== Q(Nk(c)))
        if (Tk(a, d, c), Mk(a, c), P(Nk(c), b), b = () => {
                setTimeout(() => {
                    a && Y("foregroundHeartbeatScreenAssociated", {
                        clientDocumentNonce: Ek,
                        clientScreenNonce: a
                    })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Wk() {
    var a = Q("INNERTUBE_CONTEXT");
    if (!a) return rk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = Vd(a);
    R("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Xf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Bk.h || (Bk.h = new Bk);
    b = Bk.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Xk(a) {
    var b = a;
    if (a = Q("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ea);
        b = d[5];
        var e = d[6];
        d = d[7];
        let f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};

function Yk(a) {
    const b = {
        "Content-Type": "application/json"
    };
    Q("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = Q("EOM_VISITOR_DATA") : Q("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = Q("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = Q("LOGGED_IN", !1);
    Q("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = Q("DEBUG_SETTINGS_METADATA"));
    a !== "cors" && ((a = Q("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = Q("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a =
        Q("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = Q("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
};
var Zk = class {
    constructor() {
        this.h = {}
    }
    get(a) {
        if (Object.prototype.hasOwnProperty.call(this.h, a)) return this.h[a]
    }
    set(a, b) {
        this.h[a] = b
    }
    remove(a) {
        delete this.h[a]
    }
};
new class {
    constructor() {
        this.mappings = new Zk
    }
    get(a) {
        a: {
            var b = this.mappings.get(a.toString());
            switch (b.type) {
                case "mapping":
                    a = b.value;
                    break a;
                case "factory":
                    b = b.value();
                    this.mappings.set(a.toString(), {
                        type: "mapping",
                        value: b
                    });
                    a = b;
                    break a;
                default:
                    a = ua(b, void 0)
            }
        }
        return a
    }
};
var $k = class {},
    al = class extends $k {};
const bl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends al {})
};
class ji extends hi {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const ri = new ii,
    cl = [];
let el = dl,
    fl = 0;
const gl = new Map,
    hl = new Map,
    il = new Map;

function jl(a, b, c, d, e, f, g, h) {
    const k = el(),
        l = new Jk({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = kl({}, k);
    e && (f.cttAuthInfo = e);
    e = {
        csn: k,
        pageVe: l.getAsJson()
    };
    R("expectation_logging") && h && h.screenCreatedLoggingExpectations && (e.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations);
    c && c.visualElement ? (e.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (e.implicitGesture.gestureType = g)) : c && sk(new qf("newScreen() parent element does not have a VE - rootVe",
        b));
    d && (e.cloneCsn = d);
    a ? hk("screenCreated", e, a, f) : Y("screenCreated", e, f);
    oi(ri, new ji(k));
    gl.clear();
    hl.clear();
    il.clear();
    return k
}

function ll(a, b, c, d, e = !1) {
    ml(a, b, c, [d], e)
}

function ml(a, b, c, d, e = !1) {
    const f = kl({
        cttAuthInfo: Uk(b) || void 0
    }, b);
    for (const h of d) {
        var g = h.getAsJson();
        (Ud(g) || !g.trackingParams && !g.veType) && sk(Error("Child VE logged with no data"));
        if (R("no_client_ve_attach_unless_shown")) {
            const k = nl(h, b);
            if (g.veType && !hl.has(k) && !il.has(k) && !e) {
                if (!R("il_attach_cache_limit") || gl.size < 1E3) {
                    gl.set(k, [a, b, c, h]);
                    return
                }
                R("il_attach_cache_limit") && gl.size > 1E3 && sk(new qf("IL Attach cache exceeded limit"))
            }
            g = nl(c, b);
            gl.has(g) ? ol(c, b) : il.set(g, !0)
        }
    }
    d = d.filter(h => {
        h.csn !==
            b ? (h.csn = b, h = !0) : h = !1;
        return h
    });
    c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: wa(d, h => h.getAsJson())
    };
    b === "UNDEFINED_CSN" ? pl("visualElementAttached", f, c) : a ? hk("visualElementAttached", c, a, f) : Y("visualElementAttached", c, f)
}

function ql(a, b, c, d, e) {
    rl(a, b, c, e)
}

function rl(a, b, c, d) {
    sl(c, b);
    const e = kl({
        cttAuthInfo: Uk(b) || void 0
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? pl("visualElementShown", e, c) : a ? hk("visualElementShown", c, a, e) : Y("visualElementShown", c, e)
}

function tl(a, b, c, d = !1) {
    const e = d ? 16 : 8;
    d = kl({
        cttAuthInfo: Uk(b) || void 0,
        endOfSequence: d
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    };
    b === "UNDEFINED_CSN" ? pl("visualElementHidden", d, c) : a ? hk("visualElementHidden", c, a, d) : Y("visualElementHidden", c, d)
}

function ul(a, b, c, d) {
    var e = void 0;
    sl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = kl({
        cttAuthInfo: Uk(b) || void 0
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? pl("visualElementGestured", f, c) : a ? hk("visualElementGestured", c, a, f) : Y("visualElementGestured", c, f)
}

function dl() {
    let a;
    a = Dk();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
}

function pl(a, b, c) {
    cl.push({
        N: a,
        payload: c,
        zb: void 0,
        options: b
    });
    fl || (fl = si())
}

function ti(a) {
    if (cl) {
        for (const b of cl) b.payload && (b.payload.csn = a.csn, Y(b.N, b.payload, b.options));
        cl.length = 0
    }
    fl = 0
}

function nl(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function sl(a, b) {
    if (R("no_client_ve_attach_unless_shown")) {
        var c = nl(a, b);
        hl.set(c, !0);
        ol(a, b)
    }
}

function ol(a, b) {
    a = nl(a, b);
    gl.has(a) && (b = gl.get(a) || [], ll(b[0], b[1], b[2], b[3], !0), gl.delete(a))
}

function kl(a, b) {
    R("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
Object.assign({
    auto_search: "LATENCY_ACTION_AUTO_SEARCH",
    ad_to_ad: "LATENCY_ACTION_AD_TO_AD",
    ad_to_video: "LATENCY_ACTION_AD_TO_VIDEO",
    app_startup: "LATENCY_ACTION_APP_STARTUP",
    browse: "LATENCY_ACTION_BROWSE",
    cast_splash: "LATENCY_ACTION_CAST_SPLASH",
    channel_activity: "LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",
    channels: "LATENCY_ACTION_CHANNELS",
    chips: "LATENCY_ACTION_CHIPS",
    commerce_transaction: "LATENCY_ACTION_COMMERCE_TRANSACTION",
    direct_playback: "LATENCY_ACTION_DIRECT_PLAYBACK",
    editor: "LATENCY_ACTION_EDITOR",
    embed: "LATENCY_ACTION_EMBED",
    entity_key_serialization_perf: "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",
    entity_key_deserialization_perf: "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
    explore: "LATENCY_ACTION_EXPLORE",
    favorites: "LATENCY_ACTION_FAVORITES",
    home: "LATENCY_ACTION_HOME",
    inboarding: "LATENCY_ACTION_INBOARDING",
    library: "LATENCY_ACTION_LIBRARY",
    live: "LATENCY_ACTION_LIVE",
    live_pagination: "LATENCY_ACTION_LIVE_PAGINATION",
    management: "LATENCY_ACTION_MANAGEMENT",
    mini_app: "LATENCY_ACTION_MINI_APP_PLAY",
    notification_settings: "LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",
    onboarding: "LATENCY_ACTION_ONBOARDING",
    parent_profile_settings: "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
    parent_tools_collection: "LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
    parent_tools_dashboard: "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
    player_att: "LATENCY_ACTION_PLAYER_ATTESTATION",
    prebuffer: "LATENCY_ACTION_PREBUFFER",
    prefetch: "LATENCY_ACTION_PREFETCH",
    profile_settings: "LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
    profile_switcher: "LATENCY_ACTION_LOGIN",
    projects: "LATENCY_ACTION_PROJECTS",
    reel_watch: "LATENCY_ACTION_REEL_WATCH",
    results: "LATENCY_ACTION_RESULTS",
    red: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
    premium: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
    privacy_policy: "LATENCY_ACTION_KIDS_PRIVACY_POLICY",
    review: "LATENCY_ACTION_REVIEW",
    search_overview_answer: "LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
    search_ui: "LATENCY_ACTION_SEARCH_UI",
    search_suggest: "LATENCY_ACTION_SUGGEST",
    search_zero_state: "LATENCY_ACTION_SEARCH_ZERO_STATE",
    secret_code: "LATENCY_ACTION_KIDS_SECRET_CODE",
    seek: "LATENCY_ACTION_PLAYER_SEEK",
    settings: "LATENCY_ACTION_SETTINGS",
    store: "LATENCY_ACTION_STORE",
    supervision_dashboard: "LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",
    tenx: "LATENCY_ACTION_TENX",
    video_to_ad: "LATENCY_ACTION_VIDEO_TO_AD",
    watch: "LATENCY_ACTION_WATCH",
    watch_it_again: "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
    "watch,watch7": "LATENCY_ACTION_WATCH",
    "watch,watch7_html5": "LATENCY_ACTION_WATCH",
    "watch,watch7ad": "LATENCY_ACTION_WATCH",
    "watch,watch7ad_html5": "LATENCY_ACTION_WATCH",
    wn_comments: "LATENCY_ACTION_LOAD_COMMENTS",
    ww_rqs: "LATENCY_ACTION_WHO_IS_WATCHING",
    voice_assistant: "LATENCY_ACTION_VOICE_ASSISTANT",
    cast_load_by_entity_to_watch: "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
    networkless_performance: "LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
    gel_compression: "LATENCY_ACTION_GEL_COMPRESSION",
    gel_jspb_serialize: "LATENCY_ACTION_GEL_JSPB_SERIALIZE",
    attestation_challenge_fetch: "LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"
}, {
    "analytics.explore": "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",
    "artist.analytics": "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",
    "artist.events": "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",
    "artist.presskit": "LATENCY_ACTION_CREATOR_ARTIST_PROFILE",
    "asset.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
    "asset.composition": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",
    "asset.composition_ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",
    "asset.composition_policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",
    "asset.embeds": "LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",
    "asset.history": "LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",
    "asset.issues": "LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",
    "asset.licenses": "LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",
    "asset.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",
    "asset.ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",
    "asset.policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",
    "asset.references": "LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
    "asset.shares": "LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",
    "asset.sound_recordings": "LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",
    "asset_group.assets": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",
    "asset_group.campaigns": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
    "asset_group.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
    "asset_group.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",
    "song.analytics": "LATENCY_ACTION_CREATOR_SONG_ANALYTICS",
    creator_channel_dashboard: "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
    "channel.analytics": "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
    "channel.comments": "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
    "channel.content": "LATENCY_ACTION_CREATOR_POST_LIST",
    "channel.content.promotions": "LATENCY_ACTION_CREATOR_PROMOTION_LIST",
    "channel.copyright": "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",
    "channel.editing": "LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
    "channel.monetization": "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
    "channel.music": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",
    "channel.music_storefront": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
    "channel.playlists": "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
    "channel.translations": "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
    "channel.videos": "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
    "channel.live_streaming": "LATENCY_ACTION_CREATOR_LIVE_STREAMING",
    "dialog.copyright_strikes": "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
    "dialog.video_copyright": "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
    "dialog.uploads": "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
    owner: "LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
    "owner.allowlist": "LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
    "owner.analytics": "LATENCY_ACTION_CREATOR_CMS_ANALYTICS",
    "owner.art_tracks": "LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",
    "owner.assets": "LATENCY_ACTION_CREATOR_CMS_ASSETS",
    "owner.asset_groups": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",
    "owner.bulk": "LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",
    "owner.campaigns": "LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",
    "owner.channel_invites": "LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
    "owner.channels": "LATENCY_ACTION_CREATOR_CMS_CHANNELS",
    "owner.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",
    "owner.claims": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
    "owner.claims.manual": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
    "owner.delivery": "LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
    "owner.delivery_templates": "LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
    "owner.issues": "LATENCY_ACTION_CREATOR_CMS_ISSUES",
    "owner.licenses": "LATENCY_ACTION_CREATOR_CMS_LICENSES",
    "owner.pitch_music": "LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",
    "owner.policies": "LATENCY_ACTION_CREATOR_CMS_POLICIES",
    "owner.releases": "LATENCY_ACTION_CREATOR_CMS_RELEASES",
    "owner.reports": "LATENCY_ACTION_CREATOR_CMS_REPORTS",
    "owner.videos": "LATENCY_ACTION_CREATOR_CMS_VIDEOS",
    "playlist.videos": "LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
    "post.comments": "LATENCY_ACTION_CREATOR_POST_COMMENTS",
    "post.edit": "LATENCY_ACTION_CREATOR_POST_EDIT",
    "promotion.edit": "LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
    "video.analytics": "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
    "video.claims": "LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",
    "video.comments": "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
    "video.copyright": "LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",
    "video.edit": "LATENCY_ACTION_CREATOR_VIDEO_EDIT",
    "video.editor": "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
    "video.editor_async": "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
    "video.live_settings": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",
    "video.live_streaming": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
    "video.monetization": "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
    "video.policy": "LATENCY_ACTION_CREATOR_VIDEO_POLICY",
    "video.rights_management": "LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
    "video.translations": "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"
});
w("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const vl = window;
class wl {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var xl = vl.performance || vl.mozPerformance || vl.msPerformance || vl.webkitPerformance || new wl;
la(xl.clearResourceTimings || xl.webkitClearResourceTimings || xl.mozClearResourceTimings || xl.msClearResourceTimings || xl.oClearResourceTimings || Td, xl);
const yl = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];

function zl(a) {
    var b = {
            ub: {}
        },
        c = pg();
    if (Ki.h !== void 0) {
        const d = Ki.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new qf("InnerTubeTransportService is already initialized", a);
    } else Ki.h = new Ki(b, a, c)
}

function Al(a, b) {
    return r(function*() {
        var c;
        const d = a == null ? void 0 : (c = a.ea) == null ? void 0 : c.sessionIndex;
        c = yield xe(rg(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, Yk(b), c))
    })
}

function Bl(a, b, c, d = () => {}) {
    return r(function*() {
        var e;
        if (b == null ? 0 : (e = b.H) == null ? 0 : e.context) {
            e = b.H.context;
            for (var f of []) yield f.Fb(e)
        }
        var g;
        if ((g = a.i) == null ? 0 : g.Nb(b.input, b.H)) return yield a.i.Bb(b.input, b.H);
        var h;
        if ((g = (h = b.config) == null ? void 0 : h.Ib) && a.h.has(g)) var k = a.h.get(g);
        else {
            h = JSON.stringify(b.H);
            let p;
            f = (p = (k = b.O) == null ? void 0 : k.headers) != null ? p : {};
            b.O = Object.assign({}, b.O, {
                headers: Object.assign({}, f, c)
            });
            k = Object.assign({}, b.O);
            b.O.method === "POST" && (k = Object.assign({}, k, {
                body: h
            }));
            k = a.l.fetch(b.input, k, b.config);
            g && a.h.set(g, k)
        }
        k = yield k;
        var l;
        let n;
        if (k && "error" in k && ((l = k) == null ? 0 : (n = l.error) == null ? 0 : n.details)) {
            l = k.error.details;
            for (const p of l)(l = p["@type"]) && yl.indexOf(l) > -1 && (delete p["@type"], k = p)
        }
        g && a.h.has(g) && a.h.delete(g);
        let q;
        !k && ((q = a.i) == null ? 0 : q.tb(b.input, b.H)) && (k = yield a.i.Ab(b.input, b.H));
        d();
        return k || void 0
    })
}

function Cl(a, b, c) {
    var d = {
        ea: {
            identity: sg
        }
    };
    let e = () => {};
    b.context || (b.context = Wk());
    return new L(f => r(function*() {
        var g = Xk(c);
        g = Sf(g) ? "same-origin" : "cors";
        if (a.j.Ka) {
            var h, k = d == null ? void 0 : (h = d.ea) == null ? void 0 : h.sessionIndex;
            h = rg(0, {
                sessionIndex: k
            });
            g = Object.assign({}, Yk(g), h)
        } else g = yield Al(d, g);
        h = Xk(c);
        k = {};
        R("json_condensed_response") && (k.prettyPrint = "false");
        h = Rf(h, k || {}, !1);
        k = {
            method: "POST",
            mode: Sf(h) ? "same-origin" : "cors",
            credentials: Sf(h) ? "same-origin" : "include"
        };
        var l = {};
        const n = {};
        for (const q of Object.keys(l)) l[q] && (n[q] = l[q]);
        Object.keys(n).length >
            0 && (k.headers = n);
        f(Bl(a, {
            input: h,
            O: k,
            H: b,
            config: d
        }, g, e))
    }))
}
var Ki = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.da || (a.da = {});
        a.da = Object.assign({}, bl, a.da)
    }
};
var Ji = new Gi;
let Dl;

function El() {
    if (!Dl) {
        const a = Pi();
        zl({
            fetch: (b, c) => xe(fetch(new Request(b, c)))
        });
        Ii(a);
        Dl = a.resolve(Ji)
    }
    return Dl
};

function Fl(a) {
    return r(function*() {
        yield Gl();
        sk(a)
    })
}

function Hl(a) {
    return r(function*() {
        yield Gl();
        rk(a)
    })
}

function Il(a) {
    r(function*() {
        var b = yield Hh();
        b ? yield Bi(a, b): (yield xk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            N: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            N: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && Y(b.N, b.payload))
    })
}

function Gl() {
    return r(function*() {
        try {
            yield xk()
        } catch (a) {}
    })
};
var Jl = Symbol("trackingData"),
    Kl = new WeakMap;

function Ll() {
    Ml.h || (Ml.h = new Ml);
    return Ml.h
}

function Nl(a) {
    const b = Ol(a);
    let c, d;
    if (R("il_use_view_model_logging_context") && (b == null ? 0 : (c = b.context) == null ? 0 : (d = c.loggingContext) == null ? 0 : d.loggingDirectives)) return b.context.loggingContext.loggingDirectives.trackingParams || "";
    let e, f;
    if (b == null ? 0 : (e = b.rendererContext) == null ? 0 : (f = e.loggingContext) == null ? 0 : f.loggingDirectives) return b.rendererContext.loggingContext.loggingDirectives.trackingParams || "";
    if (b == null ? 0 : b.loggingDirectives) return b.loggingDirectives.trackingParams || "";
    let g;
    return ((g =
        a.veContainer) == null ? 0 : g.trackingParams) ? a.veContainer.trackingParams : (b == null ? void 0 : b.trackingParams) || ""
}

function Pl(a, b, c) {
    const d = Z(c);
    return a.csn === null || d === a.csn || c ? d : (a = new qf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), sk(a), null)
}

function Ql(a) {
    let b;
    return !((b = Ol(a)) == null || !b.loggingDirectives)
}

function Rl(a) {
    a = Ol(a);
    return Math.floor(Number(a && a.loggingDirectives && a.loggingDirectives.visibility && a.loggingDirectives.visibility.types || "")) || 1
}

function Ol(a) {
    let b, c = a.data || ((b = a.props) == null ? void 0 : b.data);
    if (!c && a.isWebComponentWrapper && R("read_data_from_web_component_wrapper")) {
        let d;
        c = (d = Kl.get(a)) == null ? void 0 : d[Jl]
    }
    return c
}
var Ml = class {
    constructor() {
        this.l = new Set;
        this.i = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    m() {
        this.clear();
        this.csn = Z()
    }
    clear() {
        this.l.clear();
        this.i.clear();
        this.h.clear();
        this.csn = null
    }
    v(a, b, c) {
        var d = Nl(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        var f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !0);
        a.impressionLog && !b && a.impressionLog();
        if (d || a.visualElement)
            if (c = Pl(this, a, c)) {
                var g = Ql(a);
                if (Rl(a) || g) e = a.visualElement ? a.visualElement : Ik(d), d = a.interactionLoggingClientData,
                    g || b ? Rl(a) & 4 ? f || (a = this.client, sl(e, c), b = kl({
                        cttAuthInfo: Uk(c) || void 0
                    }, c), f = {
                        csn: c,
                        ve: e.getAsJson(),
                        eventType: 4
                    }, d && (f.clientData = d), c === "UNDEFINED_CSN" ? pl("visualElementShown", b, f) : a ? hk("visualElementShown", f, a, b) : Y("visualElementShown", f, b)) : Rl(a) & 1 && !b && rl(this.client, c, e, d) : rl(this.client, c, e, d)
            }
    }
    s(a, b, c) {
        var d = Nl(a);
        const e = a.visualElement ? a.visualElement : d;
        b = this.i.has(e);
        const f = this.h.get(e);
        this.i.add(e);
        this.h.set(e, !1);
        if (f === !1) return !0;
        if (!d && !a.visualElement) return !1;
        c = Pl(this, a, c);
        if (!c || !Rl(a) && Ql(a)) return !1;
        d = a.visualElement ? a.visualElement : Ik(d);
        Rl(a) & 8 ? tl(this.client, c, d) : Rl(a) & 2 && !b && (a = this.client, b = kl({
            cttAuthInfo: Uk(c) || void 0
        }, c), d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, c === "UNDEFINED_CSN" ? pl("visualElementHidden", b, d) : a ? hk("visualElementHidden", d, a, b) : Y("visualElementHidden", d, b));
        return !0
    }
};

function Sl() {
    Tl.h || (Tl.h = new Tl)
}

function Ul(a) {
    Sl();
    Hf(Ll().v).bind(Ll())(a, void 0, 8)
}

function Vl(a) {
    Sl();
    Hf(Ll().s).bind(Ll())(a, void 0, 8)
}
var Tl = class {
    j(a) {
        Hf(Ll().j).bind(Ll())(a)
    }
    clear() {
        Hf(Ll().clear).bind(Ll())()
    }
};

function Wl() {
    Xl.h || (Xl.h = new Xl);
    return Xl.h
}

function Yl(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Zl(a, b, c);
        const d = Pk(c.layer);
        if (d) {
            for (const e of a.C) $l(a, e[0], e[1] || d, c.layer);
            for (const e of a.D) am(a, e[0], e[1])
        }
    };
    Z(c.layer) || a.m();
    if (c.ga)
        for (const d of c.ga) bm(a, d, c.layer);
    else rk(Error("Delayed screen needs a data promise."))
}

function Zl(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = c.Ga !== void 0 ? c.Ga : c.layer;
    const e = Z(d);
    d = Pk(d);
    let f;
    d && (c.parentCsn !== void 0 ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && e !== "UNDEFINED_CSN" && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = Q("EVENT_ID");
    e === "UNDEFINED_CSN" && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    R("combine_ve_grafts") && e && cm(a, e);
    R("no_client_ve_attach_unless_shown") && d && e && ol(d, e);
    let k;
    try {
        k = jl(a.client, b, f, c.fa, c.cttAuthInfo, g, c.wb, c.loggingExpectations)
    } catch (q) {
        vk(q, {
            Kb: b,
            rootVe: d,
            Eb: void 0,
            vb: e,
            Db: f,
            fa: c.fa
        });
        rk(q);
        return
    }
    Vk(k, b, c.layer, c.cttAuthInfo);
    e && e !== "UNDEFINED_CSN" && d && !Sk(e) && tl(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    Sl();
    Hf(Ll().m).bind(Ll())();
    const l = Pk(c.layer);
    e && e !== "UNDEFINED_CSN" && l && (R("web_mark_root_visible") || R("music_web_mark_root_visible")) && Hf(ql)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let n;
    (n = a.X.get(c.layer)) == null || n.forEach((q, p) => {
        q ? $l(a, p, q, c.layer) :
            l && $l(a, p, l, c.layer)
    });
    dm(a)
}

function em(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    Hf(() => {
        [28631].includes(b) || (sk(new qf("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.C = [];
        a.D = [];
        c.ga ? Yl(a, b, c) : Zl(a, b, c)
    })()
}

function bm(a, b, c = 0) {
    Hf(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = Z(c),
                f = Pk(c);
            if (e && f) {
                var g;
                (d == null ? 0 : (g = d.response) == null ? 0 : g.trackingParams) && ll(a.client, e, f, Ik(d.response.trackingParams));
                var h;
                (d == null ? 0 : (h = d.playerResponse) == null ? 0 : h.trackingParams) && ll(a.client, e, f, Ik(d.playerResponse.trackingParams))
            }
        })
    })()
}

function $l(a, b, c, d = 0) {
    Hf(() => {
        if (a.i.has(d)) return a.C.push([b, c]), !0;
        const e = Z(d),
            f = c || Pk(d);
        if (e && f) {
            if (R("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.K || (a.K = vg(() => {
                    cm(a, e)
                }, 1200))
            } else ll(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function fm(a, b) {
    return Hf(() => {
        const c = Ik(b);
        $l(a, c, void 0, 8);
        return c
    })()
}

function cm(a, b) {
    if (b === void 0) {
        const c = Rk();
        for (let d = 0; d < c.length; d++) c[d] !== void 0 && cm(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.v.get(d)) && ml(a.client, b, d, c)
    }), a.l.clear(), a.v.clear(), a.K = void 0
}

function gm(a, b, c, d = 0) {
    if (!b) return !1;
    d = Z(d);
    if (!d) return !1;
    ul(a.client, d, Ik(b), c);
    return !0
}

function am(a, b, c, d = 0) {
    const e = Z(d);
    b = b || Pk(d);
    e && b && (a = a.client, d = kl({
        cttAuthInfo: Uk(e) || void 0
    }, e), c = {
        csn: e,
        ve: b.getAsJson(),
        clientData: c
    }, e === "UNDEFINED_CSN" ? pl("visualElementStateChanged", d, c) : a ? hk("visualElementStateChanged", c, a, d) : Y("visualElementStateChanged", c, d))
}

function dm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            rk(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.I.length; b++) {
        c = a.I[b];
        try {
            c()
        } catch (d) {
            rk(d)
        }
    }
}
var Xl = class {
    constructor() {
        this.C = [];
        this.D = [];
        this.h = [];
        this.s = [];
        this.I = [];
        this.l = new Map;
        this.v = new Map;
        this.i = new Set;
        this.X = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return gm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(Ik(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        c === 0 && this.i.has(c) ? this.D.push([a, b]) : am(this, a, b, c)
    }
};
const hm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    im = RegExp("^(?:[a-z]+:)?//", "i");

function jm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    a === "notifications_register" ? (O("IDToken", b), km()) : a === "notifications_check_registration" && lm(b)
}

function mm() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function nm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function om(a) {
    return r(function*() {
        const b = nm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = yf(lf);
        return pm().then(e => Cl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? qm(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                Hl(g);
                Promise.reject(g)
            })
        }))
    })
}

function rm(a, b) {
    var c = Z(8);
    if (c == null || !b) return a;
    a = im.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function qm(a, b) {
    a.deviceId && O("DeviceId", a.deviceId);
    a.timestampSec && O("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Wl();
    em(d);
    var e;
    const f = (e = c.postedEndpoint) == null ? void 0 : e.clickTrackingParams;
    e = c == null ? void 0 : c.loggingDirectives;
    const g = c.title,
        h = {
            body: c.body,
            icon: c.iconUrl,
            data: {
                nav: rm(b, e == null ? void 0 : e.trackingParams),
                id: c.notificationId,
                attributionTag: c.attributionTag,
                clickEndpoint: c.clickEndpoint,
                postedEndpoint: c.postedEndpoint,
                clickTrackingParams: f,
                isDismissed: !0,
                loggingDirectives: e
            },
            tag: c.notificationTag || c.title + c.body + c.iconUrl,
            requireInteraction: !0
        };
    return self.registration.showNotification(g, h).then(() => {
        var k;
        ((k = h.data) == null ? 0 : k.postedEndpoint) && sm(h.data.postedEndpoint);
        let l;
        if ((l = h.data) == null ? 0 : l.loggingDirectives) k = h.data.loggingDirectives, k = k.trackingParams ? fm(d, k.trackingParams) : null, Ul({
            screenLayer: 8,
            visualElement: k
        });
        tm(a.displayCap)
    }).catch(() => {})
}

function sm(a) {
    if (!rj(a, kf)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: rj(a, kf).serializedInteractionsRequest
        },
        c = yf(mf);
    return pm().then(d => Cl(d, b, c)).then(d => d)
}

function tm(a) {
    a !== -1 && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e, f;
            if ((e = b[d].data) == null ? 0 : (f = e.loggingDirectives) == null ? 0 : f.trackingParams) {
                var c = Ik(b[d].data.loggingDirectives.trackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    h = Kk(82046),
                    k = Wl();
                $l(k, h, c, 8);
                Ul({
                    screenLayer: 8,
                    visualElement: h
                });
                (c = Z(8)) && ul(k.client, c, h);
                Vl(g)
            }
        }
    })
}

function lm(a) {
    const b = [um(a), uf("RegistrationTimestamp").then(vm), wm(), xm(), ym()];
    Promise.all(b).catch(() => {
        O("IDToken", a);
        km();
        return Promise.resolve()
    })
}

function vm(a) {
    return Date.now() - (a || 0) <= 9E7 ? Promise.resolve() : Promise.reject()
}

function um(a) {
    return uf("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function wm() {
    return uf("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function xm() {
    return uf("Endpoint").then(a => zm().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function ym() {
    return uf("application_server_key").then(a => Am().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Bm() {
    var a = Notification.permission;
    if (hm[a]) return hm[a]
}

function km() {
    O("RegistrationTimestamp", 0);
    Promise.all([zm(), Cm(), Dm(), Am()]).then(([a, b, c, d]) => {
        b = b ? of (b) : null;
        c = c ? of (c) : null;
        d = d ? ab(new Uint8Array(d), 4) : null;
        Em(a, b, c, d)
    }).catch(() => {
        Em()
    })
}

function Em(a = null, b = null, c = null, d = null) {
    tf().then(e => {
        e && (O("Endpoint", a), O("P256dhKey", b), O("AuthKey", c), O("application_server_key", d), O("Permission", Notification.permission), Promise.all([uf("DeviceId"), uf("NotificationsDisabled")]).then(([f, g]) => {
            if (f != null) var h = f;
            else {
                f = [];
                var k;
                h = h || Qe.length;
                for (k = 0; k < 256; k++) f[k] = Qe[0 | Math.random() * h];
                h = f.join("")
            }
            Fm(h, a != null ? a : void 0, b != null ? b : void 0, c != null ? c : void 0, d != null ? d : void 0, g != null ? g : void 0)
        }))
    })
}

function Fm(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Bm()
                    }
                }
            },
            h = yf(nf);
        return pm().then(k => Cl(k, g, h).then(() => {
            O("DeviceId", a);
            O("RegistrationTimestamp", Date.now());
            O("TimestampLowerBound", Date.now())
        }, l => {
            Fl(l)
        }))
    })
}

function zm() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Cm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Dm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Am() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function pm() {
    return r(function*() {
        try {
            return yield xk(!0), El()
        } catch (a) {
            return yield Fl(a), Promise.reject(a)
        }
    })
};
let Gm = self.location.origin + "/";

function zk(a) {
    let b = typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope ? Je.registration.scope : Gm;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Hm = void 0;

function Im(a) {
    return r(function*() {
        Hm || (Hm = yield a.open("yt-appshell-assets"));
        return Hm
    })
}

function Jm(a, b) {
    return r(function*() {
        const c = yield Im(a), d = b.map(e => Km(c, e));
        return Promise.all(d)
    })
}

function Lm(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Mm(a, b) {
    return r(function*() {
        const c = yield Im(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Nm(a, b, c) {
    return r(function*() {
        yield(yield Im(a)).put(b, c)
    })
}

function Om(a, b) {
    r(function*() {
        yield(yield Im(a)).delete(b)
    })
}

function Km(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Pm = Qh("yt-serviceworker-metadata", {
    M: {
        auth: {
            L: 1
        },
        ["resource-manifest-assets"]: {
            L: 2
        }
    },
    shared: !0,
    upgrade(a, b) {
        b(1) && eh(a, "resource-manifest-assets");
        b(2) && eh(a, "auth")
    },
    version: 2
});
let Qm = null;

function Rm(a) {
    return xh(Pm(), a)
}

function Sm() {
    return r(function*() {
        const a = yield Hh();
        if (a) return Tm.h || (Tm.h = new Tm(a)), Tm.h
    })
}

function Um(a, b) {
    return r(function*() {
        yield W(yield Rm(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return U(d.h.put(b, e)).then(() => {
                Qm = e;
                let f = !0;
                return jh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, sh(g)) : d.delete(g.getKey()).then(() => mh(g)))
            })
        })
    })
}

function Vm(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield W(yield Rm(a.token), ["resource-manifest-assets"], "readonly", e => jh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, mh(f)
        }));
        return c ? d : -1
    })
}

function Wm(a) {
    return r(function*() {
        Qm || (yield W(yield Rm(a.token), ["resource-manifest-assets"], "readonly", b => jh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Qm = c.getKey()
        })));
        return Qm
    })
}
var Tm = class {
    constructor(a) {
        this.token = a
    }
};

function Xm() {
    return r(function*() {
        const a = yield Hh();
        if (a) return Ym.h || (Ym.h = new Ym(a)), Ym.h
    })
}

function Zm(a, b) {
    return r(function*() {
        yield gh(yield Rm(a.token), "auth", b, "shell_identifier_key")
    })
}

function $m(a) {
    return r(function*() {
        return (yield(yield Rm(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function an(a) {
    return r(function*() {
        yield(yield Rm(a.token)).clear("auth")
    })
}
var Ym = class {
    constructor(a) {
        this.token = a
    }
};

function bn() {
    r(function*() {
        const a = yield Xm();
        a && (yield an(a))
    })
};
var cn = class extends K {
    constructor(a) {
        super(a)
    }
    hasUrl() {
        return gd(this, 1) != null
    }
};

function dn(a) {
    var b;
    void 0 === Qb ? b = 2 : b = Qa ? 4 : 5;
    const c = A(a.o);
    return dd(a, c, cn, 1, b, !1, !(2 & c))
}
var en = function(a, b) {
    return (c, d) => {
        if (Ad.length) {
            const f = Ad.pop();
            vd(f, d);
            f.h.init(c, void 0, void 0, d);
            c = f
        } else c = new zd(c, d);
        try {
            const f = new a,
                g = f.o;
            Pd(b)(g, c);
            var e = f
        } finally {
            c.h.clear(), c.l = -1, c.i = -1, Ad.length < 100 && Ad.push(c)
        }
        return e
    }
}(class extends K {
    constructor(a) {
        super(a)
    }
}, [0,
    Sd, [0, Rd]
]);

function fn(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(gn(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function gn(a) {
    return dn(en(decodeURIComponent(a))).reduce((b, c) => {
        (c = hd(c, 1)) && b.push(c);
        return b
    }, [])
};

function hn(a) {
    return r(function*() {
        const b = yield xk();
        if (b && gd(b, 3) != null) {
            var c = yield Xm();
            c && (c = yield $m(c), gd(b, 3) !== c && (Om(a.caches, a.h), bn()))
        }
    })
}

function jn(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield kn(a.i), b = yield fn(c), yield Jm(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield ln(), yield Nm(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield mn(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function nn(a) {
    return r(function*() {
        yield hn(a);
        return jn(a)
    })
}

function kn(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function ln() {
    return r(function*() {
        var a = yield xk();
        let b;
        a && gd(a, 3) != null && (b = hd(a, 3));
        return b ? (a = yield Xm()) ? Promise.resolve(Zm(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function mn(a, b, c) {
    return r(function*() {
        const d = yield Sm();
        if (d) try {
            yield Um(d, b)
        } catch (e) {
            yield Fl(e)
        }
        b.push(c);
        try {
            yield Mm(a.caches, b)
        } catch (e) {
            yield Fl(e)
        }
        return Promise.resolve()
    })
}

function on(a, b) {
    return r(function*() {
        return Lm(a.caches, b)
    })
}

function pn(a) {
    return r(function*() {
        return Lm(a.caches, a.h)
    })
}
var qn = class {
    constructor() {
        var a = self.caches;
        let b = zk("/app_shell");
        R("service_worker_forward_exp_params") && (b += self.location.search);
        var c = zk("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var rn = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function sn(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield on(a.h, c.url);
        if (d) return a.i && Il({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: V()
        }), d;
        tn(a, c);
        return un(b)
    })
}

function vn(a, b) {
    return r(function*() {
        const c = yield wn(b);
        if (c.response && (c.response.ok || c.response.type === "opaqueredirect" || c.response.status === 429 || c.response.status === 303 || c.response.status >= 300 && c.response.status < 400)) return c.response;
        const d = yield pn(a.h);
        if (d) return xn(a), yn(d, b);
        zn(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function An(a, b) {
    b = new URL(b);
    if (!a.config.ra.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.ta)
        if (a = b.get(c.key), c.value === void 0 || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function Bn(a, b) {
    return r(function*() {
        const c = yield pn(a.h);
        if (!c) return zn(a), un(b);
        xn(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(V() - d);
                break a
            }
            d = -1
        }
        if (!(d > -1 && d / 864E5 >= 7)) return yn(c, b);
        d = yield wn(b);
        return d.response && d.response.ok ? d.response : yn(c, b)
    })
}

function un(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Cn(b) ? b : t.fetch(a.request))
}

function tn(a, b) {
    if (a.i) {
        var c = {
            assetPath: b.url,
            cacheHit: !1
        };
        Sm().then(d => {
            if (d) {
                var e = Wm(d).then(f => {
                    f && (c.currentAppBundleTimestampSec = String(Math.floor(f / 1E3)))
                });
                d = Vm(d, b.url).then(f => {
                    c.appBundleVersionDiffCount = f
                });
                Promise.all([e, d]).catch(f => {
                    Fl(f)
                }).finally(() => {
                    Il({
                        appShellAssetLoadReport: c,
                        timestamp: V()
                    })
                })
            } else Il({
                appShellAssetLoadReport: c,
                timestamp: V()
            })
        })
    }
}

function xn(a) {
    a.i && Il({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: V()
    })
}

function zn(a) {
    a.i && Il({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: V()
    })
}

function yn(a, b) {
    if (!R("sw_nav_preload_pbj")) return a;
    const c = new rn,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Cn(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function wn(a) {
    return r(function*() {
        try {
            return {
                response: yield un(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Cn(a) {
    return a.headers.get("x-navigation-preload-response-type") === "pbj"
}
var Ln = class {
    constructor() {
        var a = Dn;
        var b = {
            xa: En,
            Ha: Fn([Gn, /\/signin/, /\/logout/]),
            ra: ["/", "/feed/downloads"],
            ta: Hn([{
                key: "feature",
                value: "ytca"
            }]),
            sa: In(R("kevlar_sw_app_wide_fallback") ? Jn : Kn)
        };
        this.h = a;
        this.config = b;
        a = S("app_shell_asset_log_fraction");
        this.i = !0;
        a && (this.i = Math.random() < a)
    }
};
const Mn = /^\/$/,
    Kn = [Mn, /^\/feed\/downloads$/],
    Jn = [Mn, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function In(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Nn = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function Fn(a) {
    a = In(a);
    return new RegExp(`${Nn.source}(${a.source})`)
}
const On = In([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    En = new RegExp(`${Nn.source}(${On.source})`),
    Gn = /purge_shell=1/;

function Hn(a = []) {
    const b = [];
    for (const c of Vf) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
Fn([Gn]);
Hn();
var Qn = class {
    constructor() {
        var a = Dn,
            b = Pn,
            c = self;
        if (t.URLPattern) {
            var d = [];
            R("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            R("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.D = pf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.v.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.C.bind(this)
    }
    v(a) {
        this.h.skipWaiting();
        if (R("service_worker_static_routing_registration") && this.j.length > 0 && a.addRoutes) try {
            a.addRoutes(this.j)
        } catch (c) {}
        const b = nn(this.i).catch(c => {
            Fl(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), R("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ha.test(e.url)) yk.h && (delete yk.h.h, t.__SAPISID = void 0, P("VISITOR_DATA", void 0), P("SESSION_INDEX", void 0), P("DELEGATED_SESSION_ID", void 0), P("USER_SESSION_ID",
                void 0), P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)), d = a.respondWith, c = c.h, Om(c.caches, c.h), bn(), c = un(a), d.call(a, c);
            else if (c.config.xa.test(e.url)) a.respondWith(sn(c, a));
            else if (e.mode === "navigate") {
                const f = new URL(e.url);
                c.config.sa.test(f.pathname) ? a.respondWith(vn(c, a)) : An(c, e.url) ? a.respondWith(Bn(c, a)) : d && a.respondWith(un(a))
            }
        })
    }
    C(a) {
        const b = a.data;
        this.D.includes(b.type) ? jm(a) : b.type === "refresh_shell" && jn(this.i).catch(c => {
            Fl(c)
        })
    }
};

function Rn() {
    let a = u("ytglobal.storage_");
    a || (a = new Sn, w("ytglobal.storage_", a));
    return a
}
var Sn = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if ((b = a.storage) == null ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if ((c = a.webkitTemporaryStorage) == null ? 0 : c.queryUsageAndQuota) return Tn()
        })
    }
};

function Tn() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        (d = a.webkitTemporaryStorage) != null && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", Sn);

function Un(a, b) {
    Rn().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: self.document === void 0,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Vn(c == null ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Vn(c == null ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Wn {
    constructor() {
        var a = Xn;
        this.handleError = Yn;
        this.h = a;
        this.i = !1;
        self.document === void 0 || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= .2
    }
    S(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                R("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                R("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Un(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= .1 && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({},
                    b, {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Vn(a) {
    return typeof a === "undefined" ? "-1" : String(Math.ceil(a / 1048576))
};
ig(fg(), {
    G: [{
        Fa: /Failed to fetch/,
        weight: 500
    }],
    F: []
});
({
    handleError: Yn = qk,
    S: Xn = Y
} = {
    handleError: Hl,
    S: function(a, b) {
        return r(function*() {
            yield Gl();
            Y(a, b)
        })
    }
});
var Xn, Yn;
for (Dg = new Wn; Cg.length > 0;) {
    const a = Cg.shift();
    switch (a.type) {
        case "ERROR":
            Dg.handleError(a.payload);
            break;
        case "EVENT":
            Dg.S(a.eventType, a.payload)
    }
}
yk.h = new yk;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(sm(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data,
        c;
    if (b == null ? 0 : (c = b.loggingDirectives) == null ? 0 : c.trackingParams) {
        a = Ik(b.loggingDirectives.trackingParams);
        c = {
            screenLayer: 8,
            visualElement: a
        };
        if (b.isDismissed) {
            b = Kk(74726);
            const d = Wl();
            $l(d, b, a, 8);
            Ul({
                screenLayer: 8,
                visualElement: b
            });
            (a = Z(8)) && ul(d.client, a, b)
        }
        Vl(c)
    }
};
self.onpush = function(a) {
    a.waitUntil(uf("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return om(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(mm())
};
self.onpushsubscriptionchange = function() {
    km()
};
const Dn = new qn,
    Pn = new Ln;
(new Qn).init();