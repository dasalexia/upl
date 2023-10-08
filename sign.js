








function d_Signature(e) {
    e._ts = (new Date).getTime() - 9999;
    // var t, n = Object.keys(e), i = "", o = Object(c["a"])(n.sort());
    var t, n = Object.keys(e), i = "", o = c_a_f(n.sort());
    // try {
    //     for (o.s(); !(t = o.n()).done; ) {
    //         var a = t.value;
    //         void 0 !== e[a] && null !== e[a] && (i += "".concat(a, "=").concat(e[a], ","))
    //     }
    // } catch (r) {
    //     o.e(r)
    // } finally {
    //     o.f()
    // }
    i = '_platform=web,_ts='+ e._ts +',_versioin=0.2.5,'
    return l_sign(i)
}

function l_sign(t) {
    var n = void 0
    if (void 0 === t || null === t){
        throw new Error("Illegal argument " + t);
    }
    // var r = e.wordsToBytes(o(t, n));
    // return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r)

    var ddddd = o_init(t, n)
    // return ddddd
    var r = e_wordsToBytes(ddddd);
    // return r
    return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : e_bytesToHex(r)
}

function o_init(t, n) {
    
    t.constructor == String ? (
        t = (
            n && "binary" === n.encoding ? a.stringToBytes(t) : n_stringToBytes_utf8(t)
        )
    )  : (
        i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString())
    );
    
    for (
        var s = e_bytesToWords(t), 
            c = 8 * t.length, 
            u = 1732584193, 
            l = -271733879, 
            h = -1732584194, 
            d = 271733878, 
            f = 0; 
        f < s.length; f++){
            s[f] = 16711935 & (
                s[f] << 8 | s[f] >>> 24
            ) | 4278255360 & (
                s[f] << 24 | s[f] >>> 8
            );
    }
    s[c >>> 5] |= 128 << c % 32,
    s[14 + (c + 64 >>> 9 << 4)] = c;
    var p = o__ff
      , m = o__gg
      , v = o__hh
      , g = o__ii;
    for (f = 0; f < s.length; f += 16) {
        var b = u
          , y = l
          , w = h
          , _ = d;
        u = p(u, l, h, d, s[f + 0], 7, -680876936),
        d = p(d, u, l, h, s[f + 1], 12, -389564586),
        h = p(h, d, u, l, s[f + 2], 17, 606105819),
        l = p(l, h, d, u, s[f + 3], 22, -1044525330),
        u = p(u, l, h, d, s[f + 4], 7, -176418897),
        d = p(d, u, l, h, s[f + 5], 12, 1200080426),
        h = p(h, d, u, l, s[f + 6], 17, -1473231341),
        l = p(l, h, d, u, s[f + 7], 22, -45705983),
        u = p(u, l, h, d, s[f + 8], 7, 1770035416),
        d = p(d, u, l, h, s[f + 9], 12, -1958414417),
        h = p(h, d, u, l, s[f + 10], 17, -42063),
        l = p(l, h, d, u, s[f + 11], 22, -1990404162),
        u = p(u, l, h, d, s[f + 12], 7, 1804603682),
        d = p(d, u, l, h, s[f + 13], 12, -40341101),
        h = p(h, d, u, l, s[f + 14], 17, -1502002290),
        l = p(l, h, d, u, s[f + 15], 22, 1236535329),
        u = m(u, l, h, d, s[f + 1], 5, -165796510),
        d = m(d, u, l, h, s[f + 6], 9, -1069501632),
        h = m(h, d, u, l, s[f + 11], 14, 643717713),
        l = m(l, h, d, u, s[f + 0], 20, -373897302),
        u = m(u, l, h, d, s[f + 5], 5, -701558691),
        d = m(d, u, l, h, s[f + 10], 9, 38016083),
        h = m(h, d, u, l, s[f + 15], 14, -660478335),
        l = m(l, h, d, u, s[f + 4], 20, -405537848),
        u = m(u, l, h, d, s[f + 9], 5, 568446438),
        d = m(d, u, l, h, s[f + 14], 9, -1019803690),
        h = m(h, d, u, l, s[f + 3], 14, -187363961),
        l = m(l, h, d, u, s[f + 8], 20, 1163531501),
        u = m(u, l, h, d, s[f + 13], 5, -1444681467),
        d = m(d, u, l, h, s[f + 2], 9, -51403784),
        h = m(h, d, u, l, s[f + 7], 14, 1735328473),
        l = m(l, h, d, u, s[f + 12], 20, -1926607734),
        u = v(u, l, h, d, s[f + 5], 4, -378558),
        d = v(d, u, l, h, s[f + 8], 11, -2022574463),
        h = v(h, d, u, l, s[f + 11], 16, 1839030562),
        l = v(l, h, d, u, s[f + 14], 23, -35309556),
        u = v(u, l, h, d, s[f + 1], 4, -1530992060),
        d = v(d, u, l, h, s[f + 4], 11, 1272893353),
        h = v(h, d, u, l, s[f + 7], 16, -155497632),
        l = v(l, h, d, u, s[f + 10], 23, -1094730640),
        u = v(u, l, h, d, s[f + 13], 4, 681279174),
        d = v(d, u, l, h, s[f + 0], 11, -358537222),
        h = v(h, d, u, l, s[f + 3], 16, -722521979),
        l = v(l, h, d, u, s[f + 6], 23, 76029189),
        u = v(u, l, h, d, s[f + 9], 4, -640364487),
        d = v(d, u, l, h, s[f + 12], 11, -421815835),
        h = v(h, d, u, l, s[f + 15], 16, 530742520),
        l = v(l, h, d, u, s[f + 2], 23, -995338651),
        u = g(u, l, h, d, s[f + 0], 6, -198630844),
        d = g(d, u, l, h, s[f + 7], 10, 1126891415),
        h = g(h, d, u, l, s[f + 14], 15, -1416354905),
        l = g(l, h, d, u, s[f + 5], 21, -57434055),
        u = g(u, l, h, d, s[f + 12], 6, 1700485571),
        d = g(d, u, l, h, s[f + 3], 10, -1894986606),
        h = g(h, d, u, l, s[f + 10], 15, -1051523),
        l = g(l, h, d, u, s[f + 1], 21, -2054922799),
        u = g(u, l, h, d, s[f + 8], 6, 1873313359),
        d = g(d, u, l, h, s[f + 15], 10, -30611744),
        h = g(h, d, u, l, s[f + 6], 15, -1560198380),
        l = g(l, h, d, u, s[f + 13], 21, 1309151649),
        u = g(u, l, h, d, s[f + 4], 6, -145523070),
        d = g(d, u, l, h, s[f + 11], 10, -1120210379),
        h = g(h, d, u, l, s[f + 2], 15, 718787259),
        l = g(l, h, d, u, s[f + 9], 21, -343485551),
        u = u + b >>> 0,
        l = l + y >>> 0,
        h = h + w >>> 0,
        d = d + _ >>> 0
    }
    return e_endian([u, l, h, d])
};
o__ff = function(t, e, n, r, i, a, o) {
    var s = t + (e & n | ~e & r) + (i >>> 0) + o;
    return (s << a | s >>> 32 - a) + e
}

o__gg = function(t, e, n, r, i, a, o) {
    var s = t + (e & r | n & ~r) + (i >>> 0) + o;
    return (s << a | s >>> 32 - a) + e
}

o__hh = function(t, e, n, r, i, a, o) {
    var s = t + (e ^ n ^ r) + (i >>> 0) + o;
    return (s << a | s >>> 32 - a) + e
}

o__ii = function(t, e, n, r, i, a, o) {
    var s = t + (n ^ (e | ~r)) + (i >>> 0) + o;
    return (s << a | s >>> 32 - a) + e
}

o__blocksize = 16
o__digestsize = 16
function n_stringToBytes_utf8(t) {
    return n_bin_stringToBytes(unescape(encodeURIComponent(t)))
}
function n_bytesToString_utf8(t) {
    return decodeURIComponent(escape(n_bin_bytesToString(t)))
}
function n_bin_stringToBytes(t) {
    for (var e = [], n = 0; n < t.length; n++){
        e.push( t.charCodeAt(n) );
        // e.push(255 & t.charCodeAt(n));
    }
    return e
}
function n_bin_bytesToString(t) {
    for (var e = [], n = 0; n < t.length; n++){
        e.push(String.fromCharCode(t[n]));
    }
    return e.join("")
}
function e_push (t) {
    var e = i(this)
      , n = a(e)
      , r = arguments.length;
    // s(n + r);
    for (var c = 0; c < r; c++){
        e[n] = arguments[c],
        n++;
    }
    return puth_o_length(e, n),
    n
}

function puth_o_length(t, e) {
    return t.length = e
}

var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
// , n = {
function e_rotl(t, e) {
    return t << e | t >>> 32 - e
}
function e_rotr(t, e) {
    return t << 32 - e | t >>> e
}
function e_endian(t) {
    if (t.constructor == Number){
        // return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
        return 16711935 & e_rotl(t, 8) | 4278255360 & e_rotl(t, 24);
    }
    for (var e = 0; e < t.length; e++){
        // t[e] = n.endian(t[e]);
        t[e] = e_endian(t[e]);
    }
    return t
}
function e_randomBytes(t) {
    for (var e = []; t > 0; t--)
        e.push(Math.floor(256 * Math.random()));
    return e
}
function e_bytesToWords(t) {
    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8){
        e[r >>> 5] |= t[n] << 24 - r % 32;
    }
    return e
}

// zwn_a[r >>> 5] |= t[n] << 24 - r % 32;
// zwn_a[48 >>> 5] |= 111 << 24 - 48 % 32;
// e[48 >>> 5] |= 111 << 24 - 48 % 32;

function e_wordsToBytes(t) {
    for (var e = [], n = 0; n < 32 * t.length; n += 8){
        e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
    }
    return e
}
// "94e706fae5b0924043f2686a04b09b52"
function e_bytesToHex(t) {
    for (var e = [], n = 0; n < t.length; n++){
        e.push( ( t[n] >>> 4 ).toString(16)),
        e.push((15 & t[n]).toString(16));
    }
    return e.join("")
}
function e_hexToBytes(t) {
    for (var e = [], n = 0; n < t.length; n += 2)
        e.push(parseInt(t.substr(n, 2), 16));
    return e
}
function e_bytesToBase64(t) {
    for (var n = [], r = 0; r < t.length; r += 3)
        for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], a = 0; a < 4; a++)
            8 * r + 6 * a <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - a) & 63)) : n.push("=");
    return n.join("")
}
function e_base64ToBytes(t) {
    t = t.replace(/[^A-Z0-9+\/]/gi, "");
    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4)
        0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
    return n
}



function c_a_f(t, e) {
    // var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    var n = function values(){};
    if (!n) {
        if (Array.isArray(t) || (n = i(t)) || e && t && "number" === typeof t.length) {
            n && (t = n);
            var r = 0
              , a = function() {};
            return {
                s: a,
                n: function() {
                    return r >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[r++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: a
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var o, s = !0, c = !1;
    return {
        s: function() {
            n = n.call(t)
        },
        n: function() {
            var t = n.next();
            return s = t.done,
            t
        },
        e: function(t) {
            c = !0,
            o = t
        },
        f: function() {
            try {
                s || null == n["return"] || n["return"]()
            } finally {
                if (c)
                    throw o
            }
        }
    }
}
