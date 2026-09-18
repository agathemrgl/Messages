var e,
  t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : {},
  r = {},
  o = {},
  n = t.parcelRequire0c6a;
(null == n &&
  (((n = function (e) {
    if (e in r) return r[e].exports;
    if (e in o) {
      var t = o[e];
      delete o[e];
      var n = { id: e, exports: {} };
      return ((r[e] = n), t.call(n.exports, n, n.exports), n.exports);
    }
    var i = Error("Cannot find module '" + e + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (e, t) {
    o[e] = t;
  }),
  (t.parcelRequire0c6a = n)),
  n.register("1X67J", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.configure = void 0));
    var r = n("cQPnU"),
      o = n("chUYx"),
      i = n("5X77E"),
      a = n("63OWQ"),
      l = n("lHfYx");
    ((e.exports.configure = function (e, t) {
      var n = function (t) {
          return i.encode(t, e);
        },
        c = l.parse(null != t ? t : a.getQueryString());
      return {
        defaults: e,
        query: c,
        params: r.params(e, c),
        schema: o.schema(e),
        encode: n,
        reconfigure: function (e) {
          return a.redirect(n(e));
        },
      };
    }),
      (e.exports.default = e.exports.configure));
  }),
  n.register("cQPnU", function (e, t) {
    var r =
      (e.exports && e.exports.__assign) ||
      function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++)
              for (var n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.params = void 0));
    var o = n("lHfYx"),
      i = n("9iTiU"),
      a = n("63OWQ");
    e.exports.params = function (e, t) {
      var n = i.coerce(o.parse(null != t ? t : a.getQueryString()), e);
      return r(r({}, e || {}), n);
    };
  }),
  n.register("lHfYx", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.parse = void 0));
    var r = n("2rasJ");
    e.exports.parse = function (e) {
      return (
        void 0 !== e &&
          "string" == typeof e &&
          "?" === e[0] &&
          (e = e.slice(1)),
        r.parse(e)
      );
    };
  }),
  n.register("2rasJ", function (e, t) {
    var r = n("jJyEy"),
      o = n("cfYIz"),
      i = n("i1Gbt");
    e.exports = { formats: i, parse: o, stringify: r };
  }),
  n.register("jJyEy", function (e, t) {
    var r = n("LlIML"),
      o = n("iBfJ5"),
      i = n("i1Gbt"),
      a = Object.prototype.hasOwnProperty,
      l = {
        brackets: function (e) {
          return e + "[]";
        },
        comma: "comma",
        indices: function (e, t) {
          return e + "[" + t + "]";
        },
        repeat: function (e) {
          return e;
        },
      },
      c = Array.isArray,
      p = String.prototype.split,
      u = Array.prototype.push,
      f = function (e, t) {
        u.apply(e, c(t) ? t : [t]);
      },
      s = Date.prototype.toISOString,
      y = i.default,
      d = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: o.encode,
        encodeValuesOnly: !1,
        format: y,
        formatter: i.formatters[y], // deprecated
        indices: !1,
        serializeDate: function (e) {
          return s.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      g = {},
      m = function e(t, n, i, a, l, u, s, y, m, b, h, v, x, S, j) {
        for (
          var O, A, w = t, P = j, E = 0, F = !1;
          void 0 !== (P = P.get(g)) && !F;
        ) {
          // Where object last appeared in the ref tree
          var k = P.get(t);
          if (((E += 1), void 0 !== k)) {
            if (k === E) throw RangeError("Cyclic object value"); // Break while
            F = !0;
          }
          void 0 === P.get(g) && (E = 0);
        }
        if (
          ("function" == typeof s
            ? (w = s(n, w))
            : w instanceof Date
              ? (w = b(w))
              : "comma" === i &&
                c(w) &&
                (w = o.maybeMap(w, function (e) {
                  return e instanceof Date ? b(e) : e;
                })),
          null === w)
        ) {
          if (a) return u && !x ? u(n, d.encoder, S, "key", h) : n;
          w = "";
        }
        if (
          "string" == typeof (O = w) ||
          "number" == typeof O ||
          "boolean" == typeof O ||
          "symbol" == typeof O ||
          "bigint" == typeof O ||
          o.isBuffer(w)
        ) {
          if (u) {
            var M = x ? n : u(n, d.encoder, S, "key", h);
            if ("comma" === i && x) {
              for (
                var N = p.call(String(w), ","), I = "", _ = 0;
                _ < N.length;
                ++_
              )
                I +=
                  (0 === _ ? "" : ",") + v(u(N[_], d.encoder, S, "value", h));
              return [v(M) + "=" + I];
            }
            return [v(M) + "=" + v(u(w, d.encoder, S, "value", h))];
          }
          return [v(n) + "=" + v(String(w))];
        }
        var R = [];
        if (void 0 === w) return R;
        if ("comma" === i && c(w))
          A = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
        else if (c(s)) A = s;
        else {
          var T = Object.keys(w);
          A = y ? T.sort(y) : T;
        }
        for (var L = 0; L < A.length; ++L) {
          var U = A[L],
            C = "object" == typeof U && void 0 !== U.value ? U.value : w[U];
          if (!l || null !== C) {
            var D = c(w)
              ? "function" == typeof i
                ? i(n, U)
                : n
              : n + (m ? "." + U : "[" + U + "]");
            j.set(t, E);
            var W = r();
            (W.set(g, j), f(R, e(C, D, i, a, l, u, s, y, m, b, h, v, x, S, W)));
          }
        }
        return R;
      },
      b = function (e) {
        if (!e) return d;
        if (
          null !== e.encoder &&
          void 0 !== e.encoder &&
          "function" != typeof e.encoder
        )
          throw TypeError("Encoder has to be a function.");
        var t = e.charset || d.charset;
        if (
          void 0 !== e.charset &&
          "utf-8" !== e.charset &&
          "iso-8859-1" !== e.charset
        )
          throw TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined",
          );
        var r = i.default;
        if (void 0 !== e.format) {
          if (!a.call(i.formatters, e.format))
            throw TypeError("Unknown format option provided.");
          r = e.format;
        }
        var o = i.formatters[r],
          n = d.filter;
        return (
          ("function" == typeof e.filter || c(e.filter)) && (n = e.filter),
          {
            addQueryPrefix:
              "boolean" == typeof e.addQueryPrefix
                ? e.addQueryPrefix
                : d.addQueryPrefix,
            allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : d.charsetSentinel,
            delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : d.encode,
            encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
            encodeValuesOnly:
              "boolean" == typeof e.encodeValuesOnly
                ? e.encodeValuesOnly
                : d.encodeValuesOnly,
            filter: n,
            format: r,
            formatter: o,
            serializeDate:
              "function" == typeof e.serializeDate
                ? e.serializeDate
                : d.serializeDate,
            skipNulls:
              "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : d.strictNullHandling,
          }
        );
      };
    e.exports = function (e, t) {
      var o,
        n,
        i = e,
        a = b(t);
      "function" == typeof a.filter
        ? (i = (0, a.filter)("", i))
        : c(a.filter) && (o = a.filter);
      var p = [];
      if ("object" != typeof i || null === i) return "";
      n =
        t && t.arrayFormat in l
          ? t.arrayFormat
          : t && "indices" in t
            ? t.indices
              ? "indices"
              : "repeat"
            : "indices";
      var u = l[n];
      (o || (o = Object.keys(i)), a.sort && o.sort(a.sort));
      for (var s = r(), y = 0; y < o.length; ++y) {
        var d = o[y];
        (a.skipNulls && null === i[d]) ||
          f(
            p,
            m(
              i[d],
              d,
              u,
              a.strictNullHandling,
              a.skipNulls,
              a.encode ? a.encoder : null,
              a.filter,
              a.sort,
              a.allowDots,
              a.serializeDate,
              a.format,
              a.formatter,
              a.encodeValuesOnly,
              a.charset,
              s,
            ),
          );
      }
      var g = p.join(a.delimiter),
        h = !0 === a.addQueryPrefix ? "?" : "";
      return (
        a.charsetSentinel &&
          ("iso-8859-1" === a.charset
            ? (h += "utf8=%26%2310003%3B&")
            : (h += "utf8=%E2%9C%93&")),
        g.length > 0 ? h + g : ""
      );
    };
  }),
  n.register("LlIML", function (e, t) {
    var r = n("1zENl"),
      o = n("hXu6F"),
      i = n("e7DLx"),
      a = r("%TypeError%"),
      l = r("%WeakMap%", !0),
      c = r("%Map%", !0),
      p = o("WeakMap.prototype.get", !0),
      u = o("WeakMap.prototype.set", !0),
      f = o("WeakMap.prototype.has", !0),
      s = o("Map.prototype.get", !0),
      y = o("Map.prototype.set", !0),
      d = o("Map.prototype.has", !0),
      g = function (e, t) {
        for (var r, o = e; null !== (r = o.next); o = r)
          if (r.key === t)
            return ((o.next = r.next), (r.next = e.next), (e.next = r), r);
      },
      m = function (e, t) {
        var r = g(e, t);
        return r && r.value;
      },
      b = function (e, t, r) {
        var o = g(e, t);
        o ? (o.value = r) : (e.next = { key: t, next: e.next, value: r });
      };
    e.exports = function () {
      var e,
        t,
        r,
        o = {
          assert: function (e) {
            if (!o.has(e)) throw new a("Side channel does not contain " + i(e));
          },
          get: function (o) {
            if (l && o && ("object" == typeof o || "function" == typeof o)) {
              if (e) return p(e, o);
            } else if (c) {
              if (t) return s(t, o);
            } else if (r) return m(r, o);
          },
          has: function (o) {
            if (l && o && ("object" == typeof o || "function" == typeof o)) {
              if (e) return f(e, o);
            } else if (c) {
              if (t) return d(t, o);
            } else if (r) return !!g(r, o);
            return !1;
          },
          set: function (o, n) {
            l && o && ("object" == typeof o || "function" == typeof o)
              ? (e || (e = new l()), u(e, o, n))
              : c
                ? (t || (t = new c()), y(t, o, n))
                : (r ||
                    /*
                     * Initialize the linked list as an empty node, so that we don't have
                     * to special-case handling of the first node: we can always refer to
                     * it as (previous node).next, instead of something like (list).head
                     */ (r = { key: {}, next: null }),
                  b(r, o, n));
          },
        };
      return o;
    };
  }),
  n.register("1zENl", function (e, t) {
    var r,
      o = SyntaxError,
      i = Function,
      a = TypeError,
      l = function (e) {
        try {
          return i('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
      },
      c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch (e) {
        c = null; // this is IE 8, which has a broken gOPD
      }
    var p = function () {
        throw new a();
      },
      u = c
        ? (function () {
            try {
              return (
                // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
                arguments.callee, p
              );
            } catch (e) {
              try {
                // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                return c(arguments, "callee").get;
              } catch (e) {
                return p;
              }
            }
          })()
        : p,
      f = n("24qIq")(),
      s =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__;
        },
      y = {},
      d = "undefined" == typeof Uint8Array ? r : s(Uint8Array),
      g = {
        "%AggregateError%":
          "undefined" == typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": f ? s([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": y,
        "%AsyncGenerator%": y,
        "%AsyncGeneratorFunction%": y,
        "%AsyncIteratorPrototype%": y,
        "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? r : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
        "%FinalizationRegistry%":
          "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
        "%Function%": i,
        "%GeneratorFunction%": y,
        "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": f ? s(s([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "undefined" == typeof Map ? r : Map,
        "%MapIteratorPrototype%":
          "undefined" != typeof Map && f ? s(new Map()[Symbol.iterator]()) : r,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? r : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? r : Set,
        "%SetIteratorPrototype%":
          "undefined" != typeof Set && f ? s(new Set()[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%":
          "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": f ? s(""[Symbol.iterator]()) : r,
        "%Symbol%": f ? Symbol : r,
        "%SyntaxError%": o,
        "%ThrowTypeError%": u,
        "%TypedArray%": d,
        "%TypeError%": a,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
        "%Uint8ClampedArray%":
          "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
      },
      m = function e(t) {
        var r;
        if ("%AsyncFunction%" === t) r = l("async function () {}");
        else if ("%GeneratorFunction%" === t) r = l("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t)
          r = l("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
          var o = e("%AsyncGeneratorFunction%");
          o && (r = o.prototype);
        } else if ("%AsyncIteratorPrototype%" === t) {
          var n = e("%AsyncGenerator%");
          n && (r = s(n.prototype));
        }
        return ((g[t] = r), r);
      },
      b = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      h = n("gvair"),
      v = n("8aKn2"),
      x = h.call(Function.call, Array.prototype.concat),
      S = h.call(Function.apply, Array.prototype.splice),
      j = h.call(Function.call, String.prototype.replace),
      O = h.call(Function.call, String.prototype.slice),
      A =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      w = /\\(\\)?/g,
      P = function (e) {
        var t = O(e, 0, 1),
          r = O(e, -1);
        if ("%" === t && "%" !== r)
          throw new o("invalid intrinsic syntax, expected closing `%`");
        if ("%" === r && "%" !== t)
          throw new o("invalid intrinsic syntax, expected opening `%`");
        var n = [];
        return (
          j(e, A, function (e, t, r, o) {
            n[n.length] = r ? j(o, w, "$1") : t || e;
          }),
          n
        );
      },
      E = function (e, t) {
        var r,
          n = e;
        if ((v(b, n) && (n = "%" + (r = b[n])[0] + "%"), v(g, n))) {
          var i = g[n];
          if ((i === y && (i = m(n)), void 0 === i && !t))
            throw new a(
              "intrinsic " +
                e +
                " exists, but is not available. Please file an issue!",
            );
          return { alias: r, name: n, value: i };
        }
        throw new o("intrinsic " + e + " does not exist!");
      };
    e.exports = function (e, t) {
      if ("string" != typeof e || 0 === e.length)
        throw new a("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof t)
        throw new a('"allowMissing" argument must be a boolean');
      var r = P(e),
        n = r.length > 0 ? r[0] : "",
        i = E("%" + n + "%", t),
        l = i.name,
        p = i.value,
        u = !1,
        f = i.alias;
      f && ((n = f[0]), S(r, x([0, 1], f)));
      for (var s = 1, y = !0; s < r.length; s += 1) {
        var d = r[s],
          m = O(d, 0, 1),
          b = O(d, -1);
        if (
          ('"' === m ||
            "'" === m ||
            "`" === m ||
            '"' === b ||
            "'" === b ||
            "`" === b) &&
          m !== b
        )
          throw new o("property names with quotes must have matching quotes");
        if (
          (("constructor" !== d && y) || (u = !0),
          (n += "." + d),
          v(g, (l = "%" + n + "%")))
        )
          p = g[l];
        else if (null != p) {
          if (!(d in p)) {
            if (!t)
              throw new a(
                "base intrinsic for " +
                  e +
                  " exists, but the property is not available.",
              );
            return;
          }
          if (c && s + 1 >= r.length) {
            var h = c(p, d);
            p =
              (y = !!h) && "get" in h && !("originalValue" in h.get)
                ? h.get
                : p[d];
          } else ((y = v(p, d)), (p = p[d]));
          y && !u && (g[l] = p);
        }
      }
      return p;
    };
  }),
  n.register("24qIq", function (e, t) {
    var r = "undefined" != typeof Symbol && Symbol,
      o = n("7YWkK");
    e.exports = function () {
      return (
        "function" == typeof r &&
        "function" == typeof Symbol &&
        "symbol" == typeof r("foo") &&
        "symbol" == typeof Symbol("bar") &&
        o()
      );
    };
  }),
  n.register("7YWkK", function (e, t) {
    /* eslint complexity: [2, 18], max-statements: [2, 33] */ e.exports =
      function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if (
          "string" == typeof t ||
          "[object Symbol]" !== Object.prototype.toString.call(t) ||
          "[object Symbol]" !== Object.prototype.toString.call(r)
        )
          return !1;
        for (t in ((e[t] = 42), e)) return !1; // eslint-disable-line no-restricted-syntax, no-unreachable-loop
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length)
        )
          return !1;
        var o = Object.getOwnPropertySymbols(e);
        if (
          1 !== o.length ||
          o[0] !== t ||
          !Object.prototype.propertyIsEnumerable.call(e, t)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== n.value || !0 !== n.enumerable) return !1;
        }
        return !0;
      };
  }),
  n.register("gvair", function (e, t) {
    var r = n("kAGnA");
    e.exports = Function.prototype.bind || r;
  }),
  n.register("kAGnA", function (e, t) {
    var r = Array.prototype.slice,
      o = Object.prototype.toString;
    e.exports = function (e) {
      var t,
        n = this;
      if ("function" != typeof n || "[object Function]" !== o.call(n))
        throw TypeError("Function.prototype.bind called on incompatible " + n);
      for (
        var i = r.call(arguments, 1),
          a = Math.max(0, n.length - i.length),
          l = [],
          c = 0;
        c < a;
        c++
      )
        l.push("$" + c);
      if (
        ((t = Function(
          "binder",
          "return function (" +
            l.join(",") +
            "){ return binder.apply(this,arguments); }",
        )(function () {
          if (!(this instanceof t))
            return n.apply(e, i.concat(r.call(arguments)));
          var o = n.apply(this, i.concat(r.call(arguments)));
          return Object(o) === o ? o : this;
        })),
        n.prototype)
      ) {
        var p = function () {};
        ((p.prototype = n.prototype),
          (t.prototype = new p()),
          (p.prototype = null));
      }
      return t;
    };
  }),
  n.register("8aKn2", function (e, t) {
    var r = n("gvair");
    e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }),
  n.register("hXu6F", function (e, t) {
    var r = n("1zENl"),
      o = n("cOB0F"),
      i = o(r("String.prototype.indexOf"));
    e.exports = function (e, t) {
      var n = r(e, !!t);
      return "function" == typeof n && i(e, ".prototype.") > -1 ? o(n) : n;
    };
  }),
  n.register("cOB0F", function (e, t) {
    var r = n("gvair"),
      o = n("1zENl"),
      i = o("%Function.prototype.apply%"),
      a = o("%Function.prototype.call%"),
      l = o("%Reflect.apply%", !0) || r.call(a, i),
      c = o("%Object.getOwnPropertyDescriptor%", !0),
      p = o("%Object.defineProperty%", !0),
      u = o("%Math.max%");
    if (p)
      try {
        p({}, "a", { value: 1 });
      } catch (e) {
        // IE 8 has a broken defineProperty
        p = null;
      }
    e.exports = function (e) {
      var t = l(r, a, arguments);
      return (
        c &&
          p &&
          c(t, "length").configurable &&
          p(t, "length", {
            value: 1 + u(0, e.length - (arguments.length - 1)),
          }),
        t
      );
    };
    var f = function () {
      return l(r, i, arguments);
    };
    p ? p(e.exports, "apply", { value: f }) : (e.exports.apply = f);
  }),
  n.register("e7DLx", function (e, t) {
    var r = "function" == typeof Map && Map.prototype,
      o =
        Object.getOwnPropertyDescriptor && r
          ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
          : null,
      i = r && o && "function" == typeof o.get ? o.get : null,
      a = r && Map.prototype.forEach,
      l = "function" == typeof Set && Set.prototype,
      c =
        Object.getOwnPropertyDescriptor && l
          ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
          : null,
      p = l && c && "function" == typeof c.get ? c.get : null,
      u = l && Set.prototype.forEach,
      f =
        "function" == typeof WeakMap && WeakMap.prototype
          ? WeakMap.prototype.has
          : null,
      s =
        "function" == typeof WeakSet && WeakSet.prototype
          ? WeakSet.prototype.has
          : null,
      y =
        "function" == typeof WeakRef && WeakRef.prototype
          ? WeakRef.prototype.deref
          : null,
      d = Boolean.prototype.valueOf,
      g = Object.prototype.toString,
      m = Function.prototype.toString,
      b = String.prototype.match,
      h = String.prototype.slice,
      v = String.prototype.replace,
      x = String.prototype.toUpperCase,
      S = String.prototype.toLowerCase,
      j = RegExp.prototype.test,
      O = Array.prototype.concat,
      A = Array.prototype.join,
      w = Array.prototype.slice,
      P = Math.floor,
      E = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
      F = Object.getOwnPropertySymbols,
      k =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? Symbol.prototype.toString
          : null,
      M = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
      N =
        "function" == typeof Symbol &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === M ? "object" : "symbol")
          ? Symbol.toStringTag
          : null,
      I = Object.prototype.propertyIsEnumerable,
      _ =
        ("function" == typeof Reflect
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype // eslint-disable-line no-proto
          ? function (e) {
              return e.__proto__; // eslint-disable-line no-proto
            }
          : null);
    function R(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e != e ||
        (e && e > -1e3 && e < 1e3) ||
        j.call(/e/, t)
      )
        return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if ("number" == typeof e) {
        var o = e < 0 ? -P(-e) : P(e); // trunc(num)
        if (o !== e) {
          var n = String(o),
            i = h.call(t, n.length + 1);
          return (
            v.call(n, r, "$&_") +
            "." +
            v.call(v.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
          );
        }
      }
      return v.call(t, r, "$&_");
    }
    var T = n("kjyEk").custom,
      L = T && D(T) ? T : null;
    function U(e, t, r) {
      var o = "double" === (r.quoteStyle || t) ? '"' : "'";
      return o + e + o;
    }
    function C(e) {
      return (
        "[object Array]" === B(e) && (!N || !("object" == typeof e && N in e))
      );
    } // Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
    function D(e) {
      if (M) return e && "object" == typeof e && e instanceof Symbol;
      if ("symbol" == typeof e) return !0;
      if (!e || "object" != typeof e || !k) return !1;
      try {
        return (k.call(e), !0);
      } catch (e) {}
      return !1;
    }
    e.exports = function e(t, r, o, n) {
      var l = r || {};
      if (
        $(l, "quoteStyle") &&
        "single" !== l.quoteStyle &&
        "double" !== l.quoteStyle
      )
        throw TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        $(l, "maxStringLength") &&
        ("number" == typeof l.maxStringLength
          ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0
          : null !== l.maxStringLength)
      )
        throw TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
        );
      var c = !$(l, "customInspect") || l.customInspect;
      if ("boolean" != typeof c && "symbol" !== c)
        throw TypeError(
          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`",
        );
      if (
        $(l, "indent") &&
        null !== l.indent &&
        "	" !== l.indent &&
        !(parseInt(l.indent, 10) === l.indent && l.indent > 0)
      )
        throw TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`',
        );
      if ($(l, "numericSeparator") && "boolean" != typeof l.numericSeparator)
        throw TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`',
        );
      var g = l.numericSeparator;
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("boolean" == typeof t) return t ? "true" : "false";
      if ("string" == typeof t)
        return (function e(t, r) {
          if (t.length > r.maxStringLength) {
            var o = t.length - r.maxStringLength;
            return (
              e(h.call(t, 0, r.maxStringLength), r) +
              "... " +
              o +
              " more character" +
              (o > 1 ? "s" : "")
            );
          }
          return U(
            v.call(v.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, V),
            "single",
            r,
          );
        })(t, l);
      if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var x = String(t);
        return g ? R(t, x) : x;
      }
      if ("bigint" == typeof t) {
        var j = String(t) + "n";
        return g ? R(t, j) : j;
      }
      var P = void 0 === l.depth ? 5 : l.depth;
      if ((void 0 === o && (o = 0), o >= P && P > 0 && "object" == typeof t))
        return C(t) ? "[Array]" : "[Object]";
      var F = (function (e, t) {
        var r;
        if ("	" === e.indent) r = "	";
        else {
          if ("number" != typeof e.indent || !(e.indent > 0)) return null;
          r = A.call(Array(e.indent + 1), " ");
        }
        return { base: r, prev: A.call(Array(t + 1), r) };
      })(l, o);
      if (void 0 === n) n = [];
      else if (H(n, t) >= 0) return "[Circular]";
      function T(t, r, i) {
        if ((r && (n = w.call(n)).push(r), i)) {
          var a = { depth: l.depth };
          return (
            $(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle),
            e(t, a, o + 1, n)
          );
        }
        return e(t, l, o + 1, n);
      }
      if ("function" == typeof t) {
        var W = (function (e) {
            if (e.name) return e.name;
            var t = b.call(m.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
          })(t),
          Y = J(t, T);
        return (
          "[Function" +
          (W ? ": " + W : " (anonymous)") +
          "]" +
          (Y.length > 0 ? " { " + A.call(Y, ", ") + " }" : "")
        );
      }
      if (D(t)) {
        var X = M
          ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
          : k.call(t);
        return "object" != typeof t || M ? X : z(X);
      }
      if (
        t &&
        "object" == typeof t &&
        (("undefined" != typeof HTMLElement && t instanceof HTMLElement) ||
          ("string" == typeof t.nodeName &&
            "function" == typeof t.getAttribute))
      ) {
        for (
          var K,
            Z = "<" + S.call(String(t.nodeName)),
            ee = t.attributes || [],
            et = 0;
          et < ee.length;
          et++
        )
          Z +=
            " " +
            ee[et].name +
            "=" +
            U(
              ((K = ee[et].value), v.call(String(K), /"/g, "&quot;")),
              "double",
              l,
            );
        return (
          (Z += ">"),
          t.childNodes && t.childNodes.length && (Z += "..."),
          (Z += "</" + S.call(String(t.nodeName)) + ">")
        );
      }
      if (C(t)) {
        if (0 === t.length) return "[]";
        var er = J(t, T);
        return F &&
          !(function (e) {
            for (var t = 0; t < e.length; t++)
              if (H(e[t], "\n") >= 0) return !1;
            return !0;
          })(er)
          ? "[" + Q(er, F) + "]"
          : "[ " + A.call(er, ", ") + " ]";
      }
      if (
        "[object Error]" === B(t) &&
        (!N || !("object" == typeof t && N in t))
      ) {
        var eo = J(t, T);
        return "cause" in t && !I.call(t, "cause")
          ? "{ [" +
              String(t) +
              "] " +
              A.call(O.call("[cause]: " + T(t.cause), eo), ", ") +
              " }"
          : 0 === eo.length
            ? "[" + String(t) + "]"
            : "{ [" + String(t) + "] " + A.call(eo, ", ") + " }";
      }
      if ("object" == typeof t && c) {
        if (L && "function" == typeof t[L]) return t[L]();
        if ("symbol" !== c && "function" == typeof t.inspect)
          return t.inspect();
      }
      if (
        (function (e) {
          if (!i || !e || "object" != typeof e) return !1;
          try {
            i.call(e);
            try {
              p.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Map; // core-js workaround, pre-v2.5.0
          } catch (e) {}
          return !1;
        })(t)
      ) {
        var en = [];
        return (
          a.call(t, function (e, r) {
            en.push(T(r, t, !0) + " => " + T(e, t));
          }),
          q("Map", i.call(t), en, F)
        );
      }
      if (
        (function (e) {
          if (!p || !e || "object" != typeof e) return !1;
          try {
            p.call(e);
            try {
              i.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Set; // core-js workaround, pre-v2.5.0
          } catch (e) {}
          return !1;
        })(t)
      ) {
        var ei = [];
        return (
          u.call(t, function (e) {
            ei.push(T(e, t));
          }),
          q("Set", p.call(t), ei, F)
        );
      }
      if (
        (function (e) {
          if (!f || !e || "object" != typeof e) return !1;
          try {
            f.call(e, f);
            try {
              s.call(e, s);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakMap; // core-js workaround, pre-v2.5.0
          } catch (e) {}
          return !1;
        })(t)
      )
        return G("WeakMap");
      if (
        (function (e) {
          if (!s || !e || "object" != typeof e) return !1;
          try {
            s.call(e, s);
            try {
              f.call(e, f);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakSet; // core-js workaround, pre-v2.5.0
          } catch (e) {}
          return !1;
        })(t)
      )
        return G("WeakSet");
      if (
        (function (e) {
          if (!y || !e || "object" != typeof e) return !1;
          try {
            return (y.call(e), !0);
          } catch (e) {}
          return !1;
        })(t)
      )
        return G("WeakRef");
      if (
        "[object Number]" === B(t) &&
        (!N || !("object" == typeof t && N in t))
      )
        return z(T(Number(t)));
      if (
        (function (e) {
          if (!e || "object" != typeof e || !E) return !1;
          try {
            return (E.call(e), !0);
          } catch (e) {}
          return !1;
        })(t)
      )
        return z(T(E.call(t)));
      if (
        "[object Boolean]" === B(t) &&
        (!N || !("object" == typeof t && N in t))
      )
        return z(d.call(t));
      if (
        "[object String]" === B(t) &&
        (!N || !("object" == typeof t && N in t))
      )
        return z(T(String(t)));
      if (
        !(
          "[object Date]" === B(t) &&
          (!N || !("object" == typeof t && N in t))
        ) &&
        !(
          "[object RegExp]" === B(t) &&
          (!N || !("object" == typeof t && N in t))
        )
      ) {
        var ea = J(t, T),
          el = _
            ? _(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          ec = t instanceof Object ? "" : "null prototype",
          ep =
            !el && N && Object(t) === t && N in t
              ? h.call(B(t), 8, -1)
              : ec
                ? "Object"
                : "",
          eu =
            (el || "function" != typeof t.constructor
              ? ""
              : t.constructor.name
                ? t.constructor.name + " "
                : "") +
            (ep || ec
              ? "[" + A.call(O.call([], ep || [], ec || []), ": ") + "] "
              : "");
        return 0 === ea.length
          ? eu + "{}"
          : F
            ? eu + "{" + Q(ea, F) + "}"
            : eu + "{ " + A.call(ea, ", ") + " }";
      }
      return String(t);
    };
    var W =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function $(e, t) {
      return W.call(e, t);
    }
    function B(e) {
      return g.call(e);
    }
    function H(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, o = e.length; r < o; r++) if (e[r] === t) return r;
      return -1;
    }
    function V(e) {
      var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
      return r
        ? "\\" + r
        : "\\x" + (t < 16 ? "0" : "") + x.call(t.toString(16));
    }
    function z(e) {
      return "Object(" + e + ")";
    }
    function G(e) {
      return e + " { ? }";
    }
    function q(e, t, r, o) {
      return e + " (" + t + ") {" + (o ? Q(r, o) : A.call(r, ", ")) + "}";
    }
    function Q(e, t) {
      if (0 === e.length) return "";
      var r = "\n" + t.prev + t.base;
      return r + A.call(e, "," + r) + "\n" + t.prev;
    }
    function J(e, t) {
      var r,
        o = C(e),
        n = [];
      if (o) {
        n.length = e.length;
        for (var i = 0; i < e.length; i++) n[i] = $(e, i) ? t(e[i], e) : "";
      }
      var a = "function" == typeof F ? F(e) : [];
      if (M) {
        r = {};
        for (var l = 0; l < a.length; l++) r["$" + a[l]] = a[l];
      }
      for (var c in e)
        if ($(e, c) && (!o || String(Number(c)) !== c || !(c < e.length))) {
          // eslint-disable-line no-restricted-syntax, no-continue
          if (M && r["$" + c] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
          j.call(/[^\w$]/, c)
            ? n.push(t(c, e) + ": " + t(e[c], e))
            : n.push(c + ": " + t(e[c], e));
        }
      if ("function" == typeof F)
        for (var p = 0; p < a.length; p++)
          I.call(e, a[p]) && n.push("[" + t(a[p]) + "]: " + t(e[a[p]], e));
      return n;
    }
  }),
  n.register("kjyEk", function (e, t) {}),
  n.register("iBfJ5", function (e, t) {
    var r = n("i1Gbt"),
      o = Object.prototype.hasOwnProperty,
      i = Array.isArray,
      a = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      l = function (e) {
        for (; e.length > 1;) {
          var t = e.pop(),
            r = t.obj[t.prop];
          if (i(r)) {
            for (var o = [], n = 0; n < r.length; ++n)
              void 0 !== r[n] && o.push(r[n]);
            t.obj[t.prop] = o;
          }
        }
      },
      c = function (e, t) {
        for (
          var r = t && t.plainObjects ? Object.create(null) : {}, o = 0;
          o < e.length;
          ++o
        )
          void 0 !== e[o] && (r[o] = e[o]);
        return r;
      };
    e.exports = {
      arrayToObject: c,
      assign: function (e, t) {
        return Object.keys(t).reduce(function (e, r) {
          return ((e[r] = t[r]), e);
        }, e);
      },
      combine: function (e, t) {
        return [].concat(e, t);
      },
      compact: function (e) {
        for (
          var t = [{ obj: { o: e }, prop: "o" }], r = [], o = 0;
          o < t.length;
          ++o
        )
          for (
            var n = t[o], i = n.obj[n.prop], a = Object.keys(i), c = 0;
            c < a.length;
            ++c
          ) {
            var p = a[c],
              u = i[p];
            "object" == typeof u &&
              null !== u &&
              -1 === r.indexOf(u) &&
              (t.push({ obj: i, prop: p }), r.push(u));
          }
        return (l(t), e);
      },
      decode: function (e, t, r) {
        var o = e.replace(/\+/g, " ");
        if ("iso-8859-1" === r) return o.replace(/%[0-9a-f]{2}/gi, unescape); // utf-8
        try {
          return decodeURIComponent(o);
        } catch (e) {
          return o;
        }
      },
      encode: function (e, t, o, n, i) {
        // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
        // It has been adapted here for stricter adherence to RFC 3986
        if (0 === e.length) return e;
        var l = e;
        if (
          ("symbol" == typeof e
            ? (l = Symbol.prototype.toString.call(e))
            : "string" != typeof e && (l = String(e)),
          "iso-8859-1" === o)
        )
          return escape(l).replace(/%u[0-9a-f]{4}/gi, function (e) {
            return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
          });
        for (var c = "", p = 0; p < l.length; ++p) {
          var u = l.charCodeAt(p);
          if (
            45 === // -
              u ||
            46 === // .
              u ||
            95 === // _
              u ||
            126 === // ~
              u ||
            (u >= 48 && u <= 57) || // 0-9
            (u >= 65 && u <= 90) || // a-z
            (u >= 97 && u <= 122) || // A-Z
            (i === r.RFC1738 &&
              (40 === u ||
                41 === // ( )
                  u))
          ) {
            c += l.charAt(p);
            continue;
          }
          if (u < 128) {
            c += a[u];
            continue;
          }
          if (u < 2048) {
            c += a[192 | (u >> 6)] + a[128 | (63 & u)];
            continue;
          }
          if (u < 55296 || u >= 57344) {
            c +=
              a[224 | (u >> 12)] + a[128 | ((u >> 6) & 63)] + a[128 | (63 & u)];
            continue;
          }
          ((p += 1),
            /* eslint operator-linebreak: [2, "before"] */ (c +=
              a[
                240 |
                  ((u =
                    65536 + (((1023 & u) << 10) | (1023 & l.charCodeAt(p)))) >>
                    18)
              ] +
              a[128 | ((u >> 12) & 63)] +
              a[128 | ((u >> 6) & 63)] +
              a[128 | (63 & u)]));
        }
        return c;
      },
      isBuffer: function (e) {
        return (
          !!e &&
          "object" == typeof e &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        );
      },
      isRegExp: function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      },
      maybeMap: function (e, t) {
        if (i(e)) {
          for (var r = [], o = 0; o < e.length; o += 1) r.push(t(e[o]));
          return r;
        }
        return t(e);
      },
      merge: function e(t, r, n) {
        /* eslint no-param-reassign: 0 */ if (!r) return t;
        if ("object" != typeof r) {
          if (i(t)) t.push(r);
          else {
            if (!t || "object" != typeof t) return [t, r];
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !o.call(Object.prototype, r)) &&
              (t[r] = !0);
          }
          return t;
        }
        if (!t || "object" != typeof t) return [t].concat(r);
        var a = t;
        return (i(t) && !i(r) && (a = c(t, n)), i(t) && i(r))
          ? (r.forEach(function (r, i) {
              if (o.call(t, i)) {
                var a = t[i];
                a && "object" == typeof a && r && "object" == typeof r
                  ? (t[i] = e(a, r, n))
                  : t.push(r);
              } else t[i] = r;
            }),
            t)
          : Object.keys(r).reduce(function (t, i) {
              var a = r[i];
              return (o.call(t, i) ? (t[i] = e(t[i], a, n)) : (t[i] = a), t);
            }, a);
      },
    };
  }),
  n.register("i1Gbt", function (e, t) {
    var r = String.prototype.replace,
      o = /%20/g,
      n = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    e.exports = {
      default: n.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return r.call(e, o, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: n.RFC1738,
      RFC3986: n.RFC3986,
    };
  }),
  n.register("cfYIz", function (e, t) {
    var r = n("iBfJ5"),
      o = Object.prototype.hasOwnProperty,
      i = Array.isArray,
      a = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      l = function (e, t) {
        return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
          ? e.split(",")
          : e;
      },
      c = function (e, t) {
        var n = {},
          c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
          p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
          u = c.split(t.delimiter, p),
          f = -1,
          s = t.charset;
        if (t.charsetSentinel)
          for (y = 0; y < u.length; ++y)
            0 === u[y].indexOf("utf8=") &&
              ("utf8=%E2%9C%93" === u[y]
                ? (s = "utf-8")
                : "utf8=%26%2310003%3B" === u[y] && (s = "iso-8859-1"),
              (f = y),
              (y = u.length));
        for (y = 0; y < u.length; ++y)
          if (y !== f) {
            var y,
              d,
              g,
              m = u[y],
              b = m.indexOf("]="),
              h = -1 === b ? m.indexOf("=") : b + 1;
            (-1 === h
              ? ((d = t.decoder(m, a.decoder, s, "key")),
                (g = t.strictNullHandling ? null : ""))
              : ((d = t.decoder(m.slice(0, h), a.decoder, s, "key")),
                (g = r.maybeMap(l(m.slice(h + 1), t), function (e) {
                  return t.decoder(e, a.decoder, s, "value");
                }))),
              g &&
                t.interpretNumericEntities &&
                "iso-8859-1" === s &&
                (g = g.replace(/&#(\d+);/g, function (e, t) {
                  return String.fromCharCode(parseInt(t, 10));
                })),
              m.indexOf("[]=") > -1 && (g = i(g) ? [g] : g),
              o.call(n, d) ? (n[d] = r.combine(n[d], g)) : (n[d] = g));
          }
        return n;
      },
      p = function (e, t, r, o) {
        for (var n = o ? t : l(t, r), i = e.length - 1; i >= 0; --i) {
          var a,
            c = e[i];
          if ("[]" === c && r.parseArrays) a = [].concat(n);
          else {
            a = r.plainObjects ? Object.create(null) : {};
            var p =
                "[" === c.charAt(0) && "]" === c.charAt(c.length - 1)
                  ? c.slice(1, -1)
                  : c,
              u = parseInt(p, 10);
            r.parseArrays || "" !== p
              ? !isNaN(u) &&
                c !== p &&
                String(u) === p &&
                u >= 0 &&
                r.parseArrays &&
                u <= r.arrayLimit
                ? ((a = [])[u] = n)
                : "__proto__" !== p && (a[p] = n)
              : (a = { 0: n });
          }
          n = a;
        }
        return n;
      },
      u = function (e, t, r, n) {
        if (e) {
          // Transform dot notation to bracket notation
          var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            a = /(\[[^[\]]*])/g,
            l = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
            c = l ? i.slice(0, l.index) : i,
            u = [];
          if (c) {
            // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
            if (
              !r.plainObjects &&
              o.call(Object.prototype, c) &&
              !r.allowPrototypes
            )
              return;
            u.push(c);
          }
          for (
            // Loop through children appending to the array until we hit depth
            var f = 0;
            r.depth > 0 && null !== (l = a.exec(i)) && f < r.depth;
          ) {
            if (
              ((f += 1),
              !r.plainObjects &&
                o.call(Object.prototype, l[1].slice(1, -1)) &&
                !r.allowPrototypes)
            )
              return;
            u.push(l[1]);
          }
          return (l && u.push("[" + i.slice(l.index) + "]"), p(u, t, r, n));
        }
      },
      f = function (e) {
        if (!e) return a;
        if (
          null !== e.decoder &&
          void 0 !== e.decoder &&
          "function" != typeof e.decoder
        )
          throw TypeError("Decoder has to be a function.");
        if (
          void 0 !== e.charset &&
          "utf-8" !== e.charset &&
          "iso-8859-1" !== e.charset
        )
          throw TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined",
          );
        var t = void 0 === e.charset ? a.charset : e.charset;
        return {
          allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
          allowPrototypes:
            "boolean" == typeof e.allowPrototypes
              ? e.allowPrototypes
              : a.allowPrototypes,
          allowSparse:
            "boolean" == typeof e.allowSparse ? e.allowSparse : a.allowSparse,
          arrayLimit:
            "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
          charset: t,
          charsetSentinel:
            "boolean" == typeof e.charsetSentinel
              ? e.charsetSentinel
              : a.charsetSentinel,
          comma: "boolean" == typeof e.comma ? e.comma : a.comma,
          decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
          delimiter:
            "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
              ? e.delimiter
              : a.delimiter, // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth:
            "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities:
            "boolean" == typeof e.interpretNumericEntities
              ? e.interpretNumericEntities
              : a.interpretNumericEntities,
          parameterLimit:
            "number" == typeof e.parameterLimit
              ? e.parameterLimit
              : a.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects:
            "boolean" == typeof e.plainObjects
              ? e.plainObjects
              : a.plainObjects,
          strictNullHandling:
            "boolean" == typeof e.strictNullHandling
              ? e.strictNullHandling
              : a.strictNullHandling,
        };
      };
    e.exports = function (e, t) {
      var o = f(t);
      if ("" === e || null == e)
        return o.plainObjects ? Object.create(null) : {};
      for (
        var n = "string" == typeof e ? c(e, o) : e,
          i = o.plainObjects ? Object.create(null) : {},
          a = Object.keys(n),
          l = 0;
        l < a.length;
        ++l
      ) {
        var p = a[l],
          s = u(p, n[p], o, "string" == typeof e);
        i = r.merge(i, s, o);
      }
      return !0 === o.allowSparse ? i : r.compact(i);
    };
  }),
  n.register("9iTiU", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.coerce = e.exports.coerceType = e.exports.intoType = void 0));
    var r = n("99p3G"),
      o = function (e) {
        return +e;
      },
      i = function (e) {
        return "object" == typeof e && r.isArray(e) ? "array" : typeof e;
      };
    ((e.exports.intoType = function (t, r) {
      switch (i(r)) {
        case "number":
          return o(t);
        case "string":
          return "" + t;
        case "boolean":
          return "true" === t || !0 === t;
        case "array":
          return t.map(function (t, o) {
            return e.exports.intoType(t, r[o]);
          });
      } // Falls through
      return null;
    }),
      (e.exports.coerceType = function (t) {
        if (r.isArray(t)) return t.map(e.exports.coerceType);
        switch (!0) {
          case "true" === t || !0 === t:
            return !0;
          case "false" === t || !1 === t:
            return !1;
          case "null" === t || null === t:
            return null;
          case +t == t:
            return o(t);
          default:
            return t;
        }
      }),
      (e.exports.coerce = function (
        t,
        r,
        /**
         * `strictArrays` enforces type AND length
         */ o,
      ) {
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = { strictArrays: !1 }),
          Object.keys(t).reduce(function (n, a) {
            var l = t[a];
            return (
              "array" !== i(r[a]) || o.strictArrays
                ? (n[a] =
                    void 0 !== r[a]
                      ? e.exports.intoType(l, r[a])
                      : e.exports.coerceType(l))
                : (n[a] = e.exports.coerceType(l)),
              n
            );
          }, {})
        );
      }));
  }),
  n.register("99p3G", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.isArray = e.exports.isNull = e.exports.isEmpty = void 0),
      (e.exports.isEmpty = function (e) {
        return !e || (0 === Object.keys(e).length && e.constructor === Object);
      }),
      (e.exports.isNull = function (e) {
        return null === e;
      }),
      (e.exports.isArray = Array.isArray));
  }),
  n.register("63OWQ", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.redirect = e.exports.getQueryString = void 0),
      (e.exports.getQueryString = function () {
        return "undefined" == typeof window
          ? ""
          : window.location.search.slice(1);
      }),
      (e.exports.redirect = function (e) {
        window.location.search = "?" + e;
      }));
  }),
  n.register("chUYx", function (e, t) {
    var r =
      (e.exports && e.exports.__spreadArray) ||
      function (e, t) {
        for (var r = 0, o = t.length, n = e.length; r < o; r++, n++)
          e[n] = t[r];
        return e;
      };
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.schema = void 0),
      (e.exports.schema = function (e) {
        return Object.keys(e).reduce(function (t, o) {
          return r(r([], t), [{ param: o, default: e[o], type: typeof e[o] }]);
        }, []);
      }));
  }),
  n.register("5X77E", function (e, t) {
    var r =
      (e.exports && e.exports.__assign) ||
      function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++)
              for (var n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.encode = void 0));
    var o = n("2rasJ"),
      i = n("4yThw");
    e.exports.encode = function (e, t) {
      return (
        t && i.enforce(e, t),
        o.stringify(r(r({}, null != t ? t : {}), e))
      );
    };
  }),
  n.register("4yThw", function (e, t) {
    (Object.defineProperty(e.exports, "__esModule", { value: !0 }),
      (e.exports.enforce = void 0));
    var r = n("99p3G");
    e.exports.enforce = function (e, t) {
      r.isEmpty(e) ||
        r.isEmpty(t) ||
        Object.keys(e).forEach(function (o) {
          if (!(r.isNull(t[o]) || r.isNull(e[o])) && typeof t[o] != typeof e[o])
            throw Error(o + " should be " + typeof t[o]);
        });
    };
  }));
var i = {};
((e = function () {
  var e = {
    alignVert: !1,
    alignHoriz: !1,
    multiLine: !1,
    detectMultiLine: !0,
    minFontSize: 6,
    maxFontSize: 80,
    reProcess: !0,
    widthOnly: !1,
    alignVertWithFlexbox: !1,
  };
  return function (r, o) {
    o || (o = {}); // Extend options.
    var n = {};
    for (var i in e) o.hasOwnProperty(i) ? (n[i] = o[i]) : (n[i] = e[i]);
    "function" == typeof r.toArray && (r = r.toArray()); // Support passing a single el
    var a = Object.prototype.toString.call(r);
    "[object Array]" !== a &&
      "[object NodeList]" !== a &&
      "[object HTMLCollection]" !== a &&
      (r = [r]); // Process each el we've passed.
    for (var l = 0; l < r.length; l++)
      /**
       * The meat. Given an el, make the text inside it fit its parent.
       * @param  {DOMElement} el       Child el.
       * @param  {Object} settings     Options for fit.
       */ (function (e, r) {
        if (!(
          ("object" == typeof HTMLElement
            ? !(e instanceof HTMLElement)
            : !e ||
              "object" != typeof e ||
              null === e ||
              1 !== e.nodeType ||
              "string" != typeof e.nodeName) ||
          (!r.reProcess && e.getAttribute("textFitted"))
        )) {
          // Don't process if we can't find box dimensions
          if (
            (r.reProcess || e.setAttribute("textFitted", 1), // Get element data.
            (i = e.innerHTML),
            (a = // Calculate width without padding.
              (function (e) {
                var t = window.getComputedStyle(e, null);
                return (
                  e.clientWidth -
                  parseInt(t.getPropertyValue("padding-left"), 10) -
                  parseInt(t.getPropertyValue("padding-right"), 10)
                );
              })(e)),
            (n = // Calculate height without padding.
              (function (e) {
                var t = window.getComputedStyle(e, null);
                return (
                  e.clientHeight -
                  parseInt(t.getPropertyValue("padding-top"), 10) -
                  parseInt(t.getPropertyValue("padding-bottom"), 10)
                );
              })(e)),
            !a || (!r.widthOnly && !n))
          ) {
            if (r.widthOnly)
              throw Error(
                "Set a static width on the target element " +
                  e.outerHTML +
                  " before using textFit!",
              );
            throw Error(
              "Set a static height and width on the target element " +
                e.outerHTML +
                " before using textFit!",
            );
          }
          (-1 === i.indexOf("textFitted")
            ? (((o = document.createElement("span")).className = "textFitted"), // Inline block ensure it takes on the size of its contents, even if they are enclosed
              // in other tags like <p>
              (o.style.display = "inline-block"),
              (o.innerHTML = i),
              (e.innerHTML = ""),
              e.appendChild(o))
            : t(
                // Reprocessing.
                (o = e.querySelector("span.textFitted")),
                "textFitAlignVert",
              ) &&
              ((o.className = o.className.replace("textFitAlignVert", "")),
              (o.style.height = ""),
              e.className.replace("textFitAlignVertFlex", "")),
            r.alignHoriz &&
              ((e.style["text-align"] = "center"),
              (o.style["text-align"] = "center"))); // Check if this string is multiple lines
          // Not guaranteed to always work if you use wonky line-heights
          var o,
            n,
            i,
            a,
            l,
            c,
            p,
            u = r.multiLine;
          (r.detectMultiLine &&
            !u &&
            o.scrollHeight >=
              2 * parseInt(window.getComputedStyle(o)["font-size"], 10) &&
            (u = !0),
            u || (e.style["white-space"] = "nowrap"),
            (l = r.minFontSize),
            (p = r.maxFontSize));
          for (
            // Binary search for highest best fit
            var f = l;
            l <= p;
          )
            ((c = (p + l) >> 1),
              (o.style.fontSize = c + "px"),
              o.scrollWidth <= a && (r.widthOnly || o.scrollHeight <= n)
                ? ((f = c), (l = c + 1))
                : (p = c - 1)); // Our height is finalized. If we are aligning vertically, set that up.
          if (
            (o.style.fontSize != f + "px" && (o.style.fontSize = f + "px"),
            r.alignVert)
          ) {
            // Better than a stylesheet dependency
            (function () {
              if (!document.getElementById("textFitStyleSheet")) {
                var e = document.createElement("style");
                ((e.type = "text/css"),
                  (e.id = "textFitStyleSheet"),
                  (e.innerHTML =
                    ".textFitAlignVert{position: absolute;top: 0; right: 0; bottom: 0; left: 0;margin: auto;display: flex;justify-content: center;flex-direction: column;}.textFitAlignVertFlex{display: flex;}.textFitAlignVertFlex .textFitAlignVert{position: static;}"),
                  document.body.appendChild(e));
              }
            })();
            var s = o.scrollHeight;
            ("static" === window.getComputedStyle(e).position &&
              (e.style.position = "relative"),
              t(o, "textFitAlignVert") ||
                (o.className = o.className + " textFitAlignVert"),
              (o.style.height = s + "px"),
              r.alignVertWithFlexbox &&
                !t(e, "textFitAlignVertFlex") &&
                (e.className = e.className + " textFitAlignVertFlex"));
          }
        }
      })(r[l], n);
  };
  function t(e, t) {
    return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
  }
}),
  "function" == typeof define && define.amd ? define([], e) : (i = e()));
var a = {},
  l =
    (a && a.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
        }),
  c =
    (a && a.__exportStar) ||
    function (e, t) {
      for (var r in e)
        "default" === r ||
          Object.prototype.hasOwnProperty.call(t, r) ||
          l(t, e, r);
    };
(Object.defineProperty(a, "__esModule", { value: !0 }),
  c(n("1X67J"), a),
  c(n("cQPnU"), a),
  c(n("chUYx"), a),
  c(n("5X77E"), a),
  c(n("9iTiU"), a),
  c(n("4yThw"), a));
const p = (e) => {
    let t = () => {},
      r = new Promise((r) => {
        let o = setTimeout(() => r({ status: "Completed" }), e);
        t = () => {
          (clearTimeout(o), r({ status: "Cancelled" }));
        };
      });
    return { promise: r, cancel: t };
  },
  u = (e) => e[Math.floor(Math.random() * e.length)],
  f = [
    "beige",
    "black",
    "blue",
    "brown",
    "cyan",
    "gold",
    "green",
    "indigo",
    "magenta",
    "maroon",
    "olive",
    "orange",
    "pink",
    "red",
    "silver",
    "tan",
    "teal",
    "turquoise",
    "violet",
    "white",
    "yellow",
  ],
  videos = blastVideos;
let videoIndex = -1;
let lastRenderedVideo = null;
const
  s = () => u(f),
  nextVideo = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * videos.length);
    } while (nextIndex === videoIndex && videos.length > 1);
    videoIndex = nextIndex;
    return videos[videoIndex];
  },
  y = (e) => e.replace(/>\s+</g, "><").trim(),
  d = (e) => {
    let t = e.length,
      r,
      o;
    for (; t;)
      ((o = Math.floor(Math.random() * t--)),
        (r = e[t]),
        (e[t] = e[o]),
        (e[o] = r));
    return e;
  },
  g = (e) => 500 * e.split(" ").length,
  m = {
    of: ([e] = [], t = s()) =>
      e || {
        html: y(`<div class="Of" style="background-color: ${t}"></div>`),
        caption: `a field of ${t}`,
      },
    within: ([e] = [], t = s(), r = s()) => ({
      html: y(`
        <div class="Within">
          <div class="Within--a" style="background-color: ${t}">
            <div class="Within--b" style="background-color: ${r}">
              ${e ? e.html : ""}
            </div>
          </div>
        </div>
      `),
      caption: `${e ? e.caption : `a field of ${r}`} within a field of ${t}`,
    }),
    beside: (e = [], t = s(), r = s()) => {
      let [o, n] = d([
        [
          y(`
            <div class="Beside--a" style="background-color: ${t}">
              ${e.length > 0 ? e[0].html : ""}
            </div>
          `),
          e.length > 0 ? e[0].caption : `a field of ${t}`,
        ],
        [
          y(`
            <div class="Beside--b" style="background-color: ${r}">
              ${e.length > 1 ? e[1].html : ""}
            </div>
          `),
          e.length > 1 ? e[1].caption : `a field of ${r}`,
        ],
      ]);
      return {
        html: y(`
        <div class="Beside">
          ${o[0]}
          ${n[0]}
        </div>
      `),
        caption: [o[1], [n[1]]].join(" beside "),
      };
    },
    on: (e = [], t = s(), r = s()) => {
      let [o, n] = d([
        [
          y(`
        <div class="On--a" style="background-color: ${t}">
          ${e.length > 0 ? e[0].html : ""}
        </div>
      `),
          e.length > 0 ? e[0].caption : `a field of ${t}`,
        ],
        [
          y(`
        <div class="On--b" style="background-color: ${r}">
          ${e.length > 1 ? e[1].html : ""}
        </div>
      `),
          e.length > 1 ? e[1].caption : `a field of ${r}`,
        ],
      ]);
      return {
        html: y(`
        <div class="On">
          ${o[0]}
          ${n[0]}
        </div>
      `),
        caption: [o[1], [n[1]]].join(" on top of "),
      };
    },
  },
  b = () => u(Object.keys(m)),
  h = (0, a.configure)({ play: !1, minPause: 3e4, maxPause: 6e4 }),
  v = { root: document.getElementById("Root") },
  x = { wait: null, sequence: 0 },
  S = () => {
    let e = document.getElementById("Caption");
    e &&
      setTimeout(() => {
        var t;
        ((e.style.display = "flex"),
          ((t = i) && t.__esModule ? t.default : t)(e, {
            minFontSize: 16,
            maxFontSize: 9999,
            multiLine: !0,
          }));
      }, 0);
  },
  j = ({ html: e, video: t }) => {
    if (t === lastRenderedVideo) t = nextVideo();
    lastRenderedVideo = t;
    v.root &&
      ((v.root.innerHTML = `
    ${e}

    <div id="Caption" class="Caption" style="display: none;">
      ${t.title}
    </div>

    <a class="Source" href="${t.url}" target="_blank" rel="noopener" aria-label="Ouvrir la vidéo de Blast">
      <img src="Messages_files/arrow.png" alt="">
    </a>

    <button class="Share" type="button" onclick="shareCurrent()" aria-label="Partager la vidéo de Blast">
      <img src="Messages_files/share.png" alt="">
    </button>

    <button id="Next" class="Next" onclick="play()"></button>
  `),
      S());
  },
  O = (e) => (e ? [...e, m[b()]()].slice(0, 2) : [m[b()](), m[b()]()]),
  A = ({ children: e } = {}) => {
    const sequence = ++x.sequence;
    x.wait && x.wait.cancel();
    let r = b();
    let { html: o } = (() => {
      switch (r) {
        case "beside":
          return m.beside(O(e));
        case "on":
          return m.on(O(e));
        default:
          return m[r](e || []);
      }
    })(); // Render single frame
    if (sequence !== x.sequence) return;
    let n = nextVideo();
    j({ html: o, video: n });
  };
const createStoryImage = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 1080;
  const height = 1920;
  const scaleX = width / window.innerWidth;
  const scaleY = height / window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);

  document.querySelectorAll("#Root [style*='background-color']").forEach((element) => {
    const bounds = element.getBoundingClientRect();
    context.fillStyle = getComputedStyle(element).backgroundColor;
    context.fillRect(
      bounds.left * scaleX,
      bounds.top * scaleY,
      bounds.width * scaleX,
      bounds.height * scaleY,
    );
  });

  context.globalCompositeOperation = "difference";
  context.fillStyle = "#fff";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "700 88px Helvetica Neue, Helvetica, Arial, sans-serif";

  const words = lastRenderedVideo.title.split(" ");
  const lines = [];
  let line = "";
  const maxWidth = width - 120;
  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (context.measureText(candidate).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line);

  const lineHeight = 100;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((text, index) => {
    context.fillText(text, width / 2, startY + index * lineHeight);
  });
  context.globalCompositeOperation = "source-over";
  return canvas;
};

window.shareCurrent = async () => {
  if (!lastRenderedVideo) return;
  const canvas = createStoryImage();
  const dataUrl = canvas.toDataURL("image/png");
  const bytes = atob(dataUrl.split(",")[1]);
  const data = new Uint8Array(bytes.length);
  for (let index = 0; index < bytes.length; index += 1) {
    data[index] = bytes.charCodeAt(index);
  }
  const file = new File([data], "messages-story.png", { type: "image/png" });
  const shareData = {
    files: [file],
    title: lastRenderedVideo.title,
    text: lastRenderedVideo.title,
    url: lastRenderedVideo.url,
  };

  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") console.error(error);
    }
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: lastRenderedVideo.title,
        text: lastRenderedVideo.title,
        url: lastRenderedVideo.url,
      });
    } catch (error) {
      if (error.name !== "AbortError") console.error(error);
    }
    return;
  }

  console.warn("Le partage système n'est pas disponible dans ce navigateur.");
};
(window.addEventListener("resize", S), // @ts-ignore
  (window.play = A),
  window.addEventListener("keydown", (e) => {
    " " === e.key && A();
  }),
  A());
