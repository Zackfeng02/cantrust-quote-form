var pdfjsBundle = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // vendor/pdfjs/pdf.min.mjs
  var pdf_min_exports = {};
  __export(pdf_min_exports, {
    AbortException: () => AbortException,
    AnnotationEditorLayer: () => AnnotationEditorLayer,
    AnnotationEditorParamsType: () => f,
    AnnotationEditorType: () => m,
    AnnotationEditorUIManager: () => AnnotationEditorUIManager,
    AnnotationLayer: () => AnnotationLayer,
    AnnotationMode: () => p,
    AnnotationType: () => C,
    CSSConstants: () => CSSConstants,
    ColorPicker: () => ColorPicker,
    DOMSVGFactory: () => DOMSVGFactory,
    DrawLayer: () => DrawLayer,
    FeatureTest: () => FeatureTest,
    GlobalWorkerOptions: () => GlobalWorkerOptions,
    ImageKind: () => S,
    InvalidPDFException: () => InvalidPDFException,
    MathClamp: () => MathClamp,
    OPS: () => B,
    OutputScale: () => OutputScale,
    PDFDataRangeTransport: () => PDFDataRangeTransport,
    PDFDateString: () => PDFDateString,
    PDFWorker: () => PDFWorker,
    PasswordResponses: () => z,
    PermissionFlag: () => b,
    PixelsPerInch: () => PixelsPerInch,
    RenderingCancelledException: () => RenderingCancelledException,
    ResponseException: () => ResponseException,
    SignatureExtractor: () => SignatureExtractor,
    SupportedImageMimeTypes: () => Y,
    TextLayer: () => TextLayer,
    TextLayerImages: () => TextLayerImages,
    TouchManager: () => TouchManager,
    Util: () => Util,
    VerbosityLevel: () => R,
    XfaLayer: () => XfaLayer,
    applyOpacity: () => applyOpacity,
    build: () => zt,
    createValidAbsoluteUrl: () => createValidAbsoluteUrl,
    fetchData: () => fetchData,
    findContrastColor: () => findContrastColor,
    getDocument: () => getDocument,
    getFilenameFromUrl: () => getFilenameFromUrl,
    getPdfFilenameFromUrl: () => getPdfFilenameFromUrl,
    getRGB: () => getRGB,
    getUuid: () => getUuid,
    getXfaPageViewport: () => getXfaPageViewport,
    isDataScheme: () => isDataScheme,
    isPdfFile: () => isPdfFile,
    isValidExplicitDest: () => pt,
    makeArr: () => makeArr,
    makeMap: () => makeMap,
    makeObj: () => makeObj,
    noContextMenu: () => noContextMenu,
    normalizeUnicode: () => normalizeUnicode,
    renderRichText: () => renderRichText,
    setLayerDimensions: () => setLayerDimensions,
    shadow: () => shadow,
    stopEvent: () => stopEvent,
    updateUrlHash: () => updateUrlHash,
    version: () => Ht
  });
  var import_meta = {};
  var t = { 9306(t2, e2, i2) {
    var n2 = i2(4901), r2 = i2(6823), s2 = TypeError;
    t2.exports = function(t3) {
      if (n2(t3)) return t3;
      throw new s2(r2(t3) + " is not a function");
    };
  }, 6194(t2, e2, i2) {
    var n2 = i2(2248).has;
    t2.exports = function(t3) {
      n2(t3);
      return t3;
    };
  }, 3506(t2, e2, i2) {
    var n2 = i2(3925), r2 = String, s2 = TypeError;
    t2.exports = function(t3) {
      if (n2(t3)) return t3;
      throw new s2("Can't set " + r2(t3) + " as a prototype");
    };
  }, 7080(t2, e2, i2) {
    var n2 = i2(4402).has;
    t2.exports = function(t3) {
      n2(t3);
      return t3;
    };
  }, 3463(t2) {
    var e2 = TypeError;
    t2.exports = function(t3) {
      if ("string" == typeof t3) return t3;
      throw new e2("Argument is not a string");
    };
  }, 4328(t2, e2, i2) {
    var n2 = i2(4995), r2 = new n2.WeakMap(), s2 = n2.set, a2 = n2.remove;
    t2.exports = function(t3) {
      s2(r2, t3, 1);
      a2(r2, t3);
      return t3;
    };
  }, 6557(t2, e2, i2) {
    var n2 = i2(4995).has;
    t2.exports = function(t3) {
      n2(t3);
      return t3;
    };
  }, 679(t2, e2, i2) {
    var n2 = i2(1625), r2 = TypeError;
    t2.exports = function(t3, e3) {
      if (n2(e3, t3)) return t3;
      throw new r2("Incorrect invocation");
    };
  }, 3972(t2, e2, i2) {
    var n2 = i2(34), r2 = String, s2 = TypeError;
    t2.exports = function(t3) {
      if (void 0 === t3 || n2(t3)) return t3;
      throw new s2(r2(t3) + " is not an object or undefined");
    };
  }, 8551(t2, e2, i2) {
    var n2 = i2(34), r2 = String, s2 = TypeError;
    t2.exports = function(t3) {
      if (n2(t3)) return t3;
      throw new s2(r2(t3) + " is not an object");
    };
  }, 4154(t2, e2, i2) {
    var n2 = i2(6955), r2 = TypeError;
    t2.exports = function(t3) {
      if ("Uint8Array" === n2(t3)) return t3;
      throw new r2("Argument is not an Uint8Array");
    };
  }, 7811(t2) {
    t2.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
  }, 7394(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(6706), s2 = i2(2195), a2 = n2.ArrayBuffer, o2 = n2.TypeError;
    t2.exports = a2 && r2(a2.prototype, "byteLength", "get") || function(t3) {
      if ("ArrayBuffer" !== s2(t3)) throw new o2("ArrayBuffer expected");
      return t3.byteLength;
    };
  }, 3238(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(7811), s2 = i2(7394), a2 = n2.DataView;
    t2.exports = function(t3) {
      if (!r2 || 0 !== s2(t3)) return false;
      try {
        new a2(t3);
        return false;
      } catch (t4) {
        return true;
      }
    };
  }, 5169(t2, e2, i2) {
    var n2 = i2(3238), r2 = TypeError;
    t2.exports = function(t3) {
      if (n2(t3)) throw new r2("ArrayBuffer is detached");
      return t3;
    };
  }, 5636(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(9504), s2 = i2(6706), a2 = i2(7696), o2 = i2(5169), l2 = i2(7394), h2 = i2(4483), c2 = i2(1548), d2 = n2.structuredClone, u2 = n2.ArrayBuffer, p2 = n2.DataView, g2 = Math.min, m2 = u2.prototype, f2 = p2.prototype, b2 = r2(m2.slice), y2 = s2(m2, "resizable", "get"), v2 = s2(m2, "maxByteLength", "get"), w2 = r2(f2.getInt8), A2 = r2(f2.setInt8);
    t2.exports = (c2 || h2) && function(t3, e3, i3) {
      var n3, r3 = l2(t3), s3 = void 0 === e3 ? r3 : a2(e3), m3 = !y2 || !y2(t3);
      o2(t3);
      if (c2) {
        t3 = d2(t3, { transfer: [t3] });
        if (r3 === s3 && (i3 || m3)) return t3;
      }
      if (r3 >= s3 && (!i3 || m3)) n3 = b2(t3, 0, s3);
      else {
        var f3 = i3 && !m3 && v2 ? { maxByteLength: v2(t3) } : void 0;
        n3 = new u2(s3, f3);
        for (var x2 = new p2(t3), E2 = new p2(n3), _2 = g2(s3, r3), T2 = 0; T2 < _2; T2++) A2(E2, T2, w2(x2, T2));
      }
      c2 || h2(t3);
      return n3;
    };
  }, 4644(t2, e2, i2) {
    var n2, r2, s2, a2 = i2(7811), o2 = i2(3724), l2 = i2(4576), h2 = i2(4901), c2 = i2(34), d2 = i2(9297), u2 = i2(6955), p2 = i2(6823), g2 = i2(6699), m2 = i2(6840), f2 = i2(2106), b2 = i2(1625), y2 = i2(2787), v2 = i2(2967), w2 = i2(8227), A2 = i2(3392), x2 = i2(1181), E2 = x2.enforce, _2 = x2.get, T2 = l2.Int8Array, S2 = T2 && T2.prototype, C2 = l2.Uint8ClampedArray, D2 = C2 && C2.prototype, P2 = T2 && y2(T2), M2 = S2 && y2(S2), k2 = Object.prototype, I2 = l2.TypeError, R2 = w2("toStringTag"), B2 = A2("TYPED_ARRAY_TAG"), O2 = "TypedArrayConstructor", L2 = a2 && !!v2 && "Opera" !== u2(l2.opera), N2 = false, U2 = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, H2 = { BigInt64Array: 8, BigUint64Array: 8 }, getTypedArrayConstructor = function(t3) {
      var e3 = y2(t3);
      if (c2(e3)) {
        var i3 = _2(e3);
        return i3 && d2(i3, O2) ? i3[O2] : getTypedArrayConstructor(e3);
      }
    }, isTypedArray = function(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return d2(U2, e3) || d2(H2, e3);
    };
    for (n2 in U2) (s2 = (r2 = l2[n2]) && r2.prototype) ? E2(s2)[O2] = r2 : L2 = false;
    for (n2 in H2) (s2 = (r2 = l2[n2]) && r2.prototype) && (E2(s2)[O2] = r2);
    if (!L2 || !h2(P2) || P2 === Function.prototype) {
      P2 = function TypedArray() {
        throw new I2("Incorrect invocation");
      };
      if (L2) for (n2 in U2) l2[n2] && v2(l2[n2], P2);
    }
    if (!L2 || !M2 || M2 === k2) {
      M2 = P2.prototype;
      if (L2) for (n2 in U2) l2[n2] && v2(l2[n2].prototype, M2);
    }
    L2 && y2(D2) !== M2 && v2(D2, M2);
    if (o2 && !d2(M2, R2)) {
      N2 = true;
      f2(M2, R2, { configurable: true, get: function() {
        return c2(this) ? this[B2] : void 0;
      } });
      for (n2 in U2) l2[n2] && g2(l2[n2], B2, n2);
    }
    t2.exports = { NATIVE_ARRAY_BUFFER_VIEWS: L2, TYPED_ARRAY_TAG: N2 && B2, aTypedArray: function(t3) {
      if (isTypedArray(t3)) return t3;
      throw new I2("Target is not a typed array");
    }, aTypedArrayConstructor: function(t3) {
      if (h2(t3) && (!v2 || b2(P2, t3))) return t3;
      throw new I2(p2(t3) + " is not a typed array constructor");
    }, exportTypedArrayMethod: function(t3, e3, i3, n3) {
      if (o2) {
        if (i3) for (var r3 in U2) {
          var s3 = l2[r3];
          if (s3 && d2(s3.prototype, t3)) try {
            delete s3.prototype[t3];
          } catch (i4) {
            try {
              s3.prototype[t3] = e3;
            } catch (t4) {
            }
          }
        }
        M2[t3] && !i3 || m2(M2, t3, i3 ? e3 : L2 && S2[t3] || e3, n3);
      }
    }, exportTypedArrayStaticMethod: function(t3, e3, i3) {
      var n3, r3;
      if (o2) {
        if (v2) {
          if (i3) {
            for (n3 in U2) if ((r3 = l2[n3]) && d2(r3, t3)) try {
              delete r3[t3];
            } catch (t4) {
            }
          }
          if (P2[t3] && !i3) return;
          try {
            return m2(P2, t3, i3 ? e3 : L2 && P2[t3] || e3);
          } catch (t4) {
          }
        }
        for (n3 in U2) !(r3 = l2[n3]) || r3[t3] && !i3 || m2(r3, t3, e3);
      }
    }, getTypedArrayConstructor, isView: function isView(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return "DataView" === e3 || d2(U2, e3) || d2(H2, e3);
    }, isTypedArray, TypedArray: P2, TypedArrayPrototype: M2 };
  }, 5370(t2, e2, i2) {
    var n2 = i2(6198);
    t2.exports = function(t3, e3, i3) {
      for (var r2 = 0, s2 = arguments.length > 2 ? i3 : n2(e3), a2 = new t3(s2); s2 > r2; ) a2[r2] = e3[r2++];
      return a2;
    };
  }, 9617(t2, e2, i2) {
    var n2 = i2(5397), r2 = i2(5610), s2 = i2(6198), createMethod = function(t3) {
      return function(e3, i3, a2) {
        var o2 = n2(e3), l2 = s2(o2);
        if (0 === l2) return !t3 && -1;
        var h2, c2 = r2(a2, l2);
        if (t3 && i3 != i3) {
          for (; l2 > c2; ) if ((h2 = o2[c2++]) != h2) return true;
        } else for (; l2 > c2; c2++) if ((t3 || c2 in o2) && o2[c2] === i3) return t3 || c2 || 0;
        return !t3 && -1;
      };
    };
    t2.exports = { includes: createMethod(true), indexOf: createMethod(false) };
  }, 4527(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(4376), s2 = TypeError, a2 = Object.getOwnPropertyDescriptor, o2 = n2 && !(function() {
      if (void 0 !== this) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })();
    t2.exports = o2 ? function(t3, e3) {
      if (r2(t3) && !a2(t3, "length").writable) throw new s2("Cannot set read only .length");
      return t3.length = e3;
    } : function(t3, e3) {
      return t3.length = e3;
    };
  }, 7680(t2, e2, i2) {
    var n2 = i2(9504);
    t2.exports = n2([].slice);
  }, 2804(t2) {
    var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i2 = e2 + "+/", n2 = e2 + "-_", inverse = function(t3) {
      for (var e3 = {}, i3 = 0; i3 < 64; i3++) e3[t3.charAt(i3)] = i3;
      return e3;
    };
    t2.exports = { i2c: i2, c2i: inverse(i2), i2cUrl: n2, c2iUrl: inverse(n2) };
  }, 6319(t2, e2, i2) {
    var n2 = i2(8551), r2 = i2(9539);
    t2.exports = function(t3, e3, i3, s2) {
      try {
        return s2 ? e3(n2(i3)[0], i3[1]) : e3(i3);
      } catch (e4) {
        r2(t3, "throw", e4);
      }
    };
  }, 2195(t2, e2, i2) {
    var n2 = i2(9504), r2 = n2({}.toString), s2 = n2("".slice);
    t2.exports = function(t3) {
      return s2(r2(t3), 8, -1);
    };
  }, 6955(t2, e2, i2) {
    var n2 = i2(2140), r2 = i2(4901), s2 = i2(2195), a2 = i2(8227)("toStringTag"), o2 = Object, l2 = "Arguments" === s2(/* @__PURE__ */ (function() {
      return arguments;
    })());
    t2.exports = n2 ? s2 : function(t3) {
      var e3, i3, n3;
      return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (i3 = (function(t4, e4) {
        try {
          return t4[e4];
        } catch (t5) {
        }
      })(e3 = o2(t3), a2)) ? i3 : l2 ? s2(e3) : "Object" === (n3 = s2(e3)) && r2(e3.callee) ? "Arguments" : n3;
    };
  }, 7740(t2, e2, i2) {
    var n2 = i2(9297), r2 = i2(5031), s2 = i2(7347), a2 = i2(4913);
    t2.exports = function(t3, e3, i3) {
      for (var o2 = r2(e3), l2 = a2.f, h2 = s2.f, c2 = 0; c2 < o2.length; c2++) {
        var d2 = o2[c2];
        n2(t3, d2) || i3 && n2(i3, d2) || l2(t3, d2, h2(e3, d2));
      }
    };
  }, 2211(t2, e2, i2) {
    var n2 = i2(9039);
    t2.exports = !n2(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }, 2529(t2) {
    t2.exports = function(t3, e2) {
      return { value: t3, done: e2 };
    };
  }, 6699(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(4913), s2 = i2(6980);
    t2.exports = n2 ? function(t3, e3, i3) {
      return r2.f(t3, e3, s2(1, i3));
    } : function(t3, e3, i3) {
      t3[e3] = i3;
      return t3;
    };
  }, 6980(t2) {
    t2.exports = function(t3, e2) {
      return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e2 };
    };
  }, 4659(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(4913), s2 = i2(6980);
    t2.exports = function(t3, e3, i3) {
      n2 ? r2.f(t3, e3, s2(0, i3)) : t3[e3] = i3;
    };
  }, 2106(t2, e2, i2) {
    var n2 = i2(283), r2 = i2(4913);
    t2.exports = function(t3, e3, i3) {
      i3.get && n2(i3.get, e3, { getter: true });
      i3.set && n2(i3.set, e3, { setter: true });
      return r2.f(t3, e3, i3);
    };
  }, 6840(t2, e2, i2) {
    var n2 = i2(4901), r2 = i2(4913), s2 = i2(283), a2 = i2(9433);
    t2.exports = function(t3, e3, i3, o2) {
      o2 || (o2 = {});
      var l2 = o2.enumerable, h2 = void 0 !== o2.name ? o2.name : e3;
      n2(i3) && s2(i3, h2, o2);
      if (o2.global) l2 ? t3[e3] = i3 : a2(e3, i3);
      else {
        try {
          o2.unsafe ? t3[e3] && (l2 = true) : delete t3[e3];
        } catch (t4) {
        }
        l2 ? t3[e3] = i3 : r2.f(t3, e3, { value: i3, enumerable: false, configurable: !o2.nonConfigurable, writable: !o2.nonWritable });
      }
      return t3;
    };
  }, 6279(t2, e2, i2) {
    var n2 = i2(6840);
    t2.exports = function(t3, e3, i3) {
      for (var r2 in e3) n2(t3, r2, e3[r2], i3);
      return t3;
    };
  }, 9433(t2, e2, i2) {
    var n2 = i2(4576), r2 = Object.defineProperty;
    t2.exports = function(t3, e3) {
      try {
        r2(n2, t3, { value: e3, configurable: true, writable: true });
      } catch (i3) {
        n2[t3] = e3;
      }
      return e3;
    };
  }, 3724(t2, e2, i2) {
    var n2 = i2(9039);
    t2.exports = !n2(function() {
      return 7 !== Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1];
    });
  }, 4483(t2, e2, i2) {
    var n2, r2, s2, a2, o2 = i2(4576), l2 = i2(9429), h2 = i2(1548), c2 = o2.structuredClone, d2 = o2.ArrayBuffer, u2 = o2.MessageChannel, p2 = false;
    if (h2) p2 = function(t3) {
      c2(t3, { transfer: [t3] });
    };
    else if (d2) try {
      u2 || (n2 = l2("worker_threads")) && (u2 = n2.MessageChannel);
      if (u2) {
        r2 = new u2();
        s2 = new d2(2);
        a2 = function(t3) {
          r2.port1.postMessage(null, [t3]);
        };
        if (2 === s2.byteLength) {
          a2(s2);
          0 === s2.byteLength && (p2 = a2);
        }
      }
    } catch (t3) {
    }
    t2.exports = p2;
  }, 4055(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(34), s2 = n2.document, a2 = r2(s2) && r2(s2.createElement);
    t2.exports = function(t3) {
      return a2 ? s2.createElement(t3) : {};
    };
  }, 6837(t2) {
    var e2 = TypeError;
    t2.exports = function(t3) {
      if (t3 > 9007199254740991) throw e2("Maximum allowed index exceeded");
      return t3;
    };
  }, 5002(t2) {
    t2.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } };
  }, 8727(t2) {
    t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, 6193(t2, e2, i2) {
    var n2 = i2(4215);
    t2.exports = "NODE" === n2;
  }, 2839(t2, e2, i2) {
    var n2 = i2(4576).navigator, r2 = n2 && n2.userAgent;
    t2.exports = r2 ? String(r2) : "";
  }, 9519(t2, e2, i2) {
    var n2, r2, s2 = i2(4576), a2 = i2(2839), o2 = s2.process, l2 = s2.Deno, h2 = o2 && o2.versions || l2 && l2.version, c2 = h2 && h2.v8;
    c2 && (r2 = (n2 = c2.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1]));
    !r2 && a2 && (!(n2 = a2.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a2.match(/Chrome\/(\d+)/)) && (r2 = +n2[1]);
    t2.exports = r2;
  }, 4215(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(2839), s2 = i2(2195), userAgentStartsWith = function(t3) {
      return r2.slice(0, t3.length) === t3;
    };
    t2.exports = userAgentStartsWith("Bun/") ? "BUN" : userAgentStartsWith("Cloudflare-Workers") ? "CLOUDFLARE" : userAgentStartsWith("Deno/") ? "DENO" : userAgentStartsWith("Node.js/") ? "NODE" : n2.Bun && "string" == typeof Bun.version ? "BUN" : n2.Deno && "object" == typeof Deno.version ? "DENO" : "process" === s2(n2.process) ? "NODE" : n2.window && n2.document ? "BROWSER" : "REST";
  }, 8574(t2, e2, i2) {
    var n2 = i2(9504), r2 = Error, s2 = n2("".replace), a2 = String(new r2("zxcasd").stack), o2 = /\n\s*at [^:]*:[^\n]*/, l2 = o2.test(a2);
    t2.exports = function(t3, e3) {
      if (l2 && "string" == typeof t3 && !r2.prepareStackTrace) for (; e3--; ) t3 = s2(t3, o2, "");
      return t3;
    };
  }, 6518(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(7347).f, s2 = i2(6699), a2 = i2(6840), o2 = i2(9433), l2 = i2(7740), h2 = i2(2796);
    t2.exports = function(t3, e3) {
      var i3, c2, d2, u2, p2, g2 = t3.target, m2 = t3.global, f2 = t3.stat;
      if (i3 = m2 ? n2 : f2 ? n2[g2] || o2(g2, {}) : n2[g2] && n2[g2].prototype) for (c2 in e3) {
        u2 = e3[c2];
        d2 = t3.dontCallGetSet ? (p2 = r2(i3, c2)) && p2.value : i3[c2];
        if (!h2(m2 ? c2 : g2 + (f2 ? "." : "#") + c2, t3.forced) && void 0 !== d2) {
          if (typeof u2 == typeof d2) continue;
          l2(u2, d2);
        }
        (t3.sham || d2 && d2.sham) && s2(u2, "sham", true);
        a2(i3, c2, u2, t3);
      }
    };
  }, 9039(t2) {
    t2.exports = function(t3) {
      try {
        return !!t3();
      } catch (t4) {
        return true;
      }
    };
  }, 8745(t2, e2, i2) {
    var n2 = i2(616), r2 = Function.prototype, s2 = r2.apply, a2 = r2.call;
    t2.exports = "object" == typeof Reflect && Reflect.apply || (n2 ? a2.bind(s2) : function() {
      return a2.apply(s2, arguments);
    });
  }, 6080(t2, e2, i2) {
    var n2 = i2(7476), r2 = i2(9306), s2 = i2(616), a2 = n2(n2.bind);
    t2.exports = function(t3, e3) {
      r2(t3);
      return void 0 === e3 ? t3 : s2 ? a2(t3, e3) : function() {
        return t3.apply(e3, arguments);
      };
    };
  }, 616(t2, e2, i2) {
    var n2 = i2(9039);
    t2.exports = !n2(function() {
      var t3 = function() {
      }.bind();
      return "function" != typeof t3 || t3.hasOwnProperty("prototype");
    });
  }, 9565(t2, e2, i2) {
    var n2 = i2(616), r2 = Function.prototype.call;
    t2.exports = n2 ? r2.bind(r2) : function() {
      return r2.apply(r2, arguments);
    };
  }, 350(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(9297), s2 = Function.prototype, a2 = n2 && Object.getOwnPropertyDescriptor, o2 = r2(s2, "name"), l2 = o2 && "something" === function something() {
    }.name, h2 = o2 && (!n2 || n2 && a2(s2, "name").configurable);
    t2.exports = { EXISTS: o2, PROPER: l2, CONFIGURABLE: h2 };
  }, 6706(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(9306);
    t2.exports = function(t3, e3, i3) {
      try {
        return n2(r2(Object.getOwnPropertyDescriptor(t3, e3)[i3]));
      } catch (t4) {
      }
    };
  }, 7476(t2, e2, i2) {
    var n2 = i2(2195), r2 = i2(9504);
    t2.exports = function(t3) {
      if ("Function" === n2(t3)) return r2(t3);
    };
  }, 9504(t2, e2, i2) {
    var n2 = i2(616), r2 = Function.prototype, s2 = r2.call, a2 = n2 && r2.bind.bind(s2, s2);
    t2.exports = n2 ? a2 : function(t3) {
      return function() {
        return s2.apply(t3, arguments);
      };
    };
  }, 944(t2) {
    var e2 = TypeError;
    t2.exports = function(t3) {
      var i2 = t3 && t3.alphabet;
      if (void 0 === i2 || "base64" === i2 || "base64url" === i2) return i2 || "base64";
      throw new e2("Incorrect `alphabet` option");
    };
  }, 9429(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(6193);
    t2.exports = function(t3) {
      if (r2) {
        try {
          return n2.process.getBuiltinModule(t3);
        } catch (t4) {
        }
        try {
          return Function('return require("' + t3 + '")')();
        } catch (t4) {
        }
      }
    };
  }, 7751(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(4901);
    t2.exports = function(t3, e3) {
      return arguments.length < 2 ? (i3 = n2[t3], r2(i3) ? i3 : void 0) : n2[t3] && n2[t3][e3];
      var i3;
    };
  }, 1767(t2) {
    t2.exports = function(t3) {
      return { iterator: t3, next: t3.next, done: false };
    };
  }, 8646(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(8551), s2 = i2(1767), a2 = i2(851);
    t2.exports = function(t3, e3) {
      e3 && "string" == typeof t3 || r2(t3);
      var i3 = a2(t3);
      return s2(r2(void 0 !== i3 ? n2(i3, t3) : t3));
    };
  }, 851(t2, e2, i2) {
    var n2 = i2(6955), r2 = i2(5966), s2 = i2(4117), a2 = i2(6269), o2 = i2(8227)("iterator");
    t2.exports = function(t3) {
      if (!s2(t3)) return r2(t3, o2) || r2(t3, "@@iterator") || a2[n2(t3)];
    };
  }, 81(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(9306), s2 = i2(8551), a2 = i2(6823), o2 = i2(851), l2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3 = arguments.length < 2 ? o2(t3) : e3;
      if (r2(i3)) return s2(n2(i3, t3));
      throw new l2(a2(t3) + " is not iterable");
    };
  }, 5966(t2, e2, i2) {
    var n2 = i2(9306), r2 = i2(4117);
    t2.exports = function(t3, e3) {
      var i3 = t3[e3];
      return r2(i3) ? void 0 : n2(i3);
    };
  }, 3789(t2, e2, i2) {
    var n2 = i2(9306), r2 = i2(8551), s2 = i2(9565), a2 = i2(1291), o2 = i2(1767), l2 = "Invalid size", h2 = RangeError, c2 = TypeError, d2 = Math.max, SetRecord = function(t3, e3) {
      this.set = t3;
      this.size = d2(e3, 0);
      this.has = n2(t3.has);
      this.keys = n2(t3.keys);
    };
    SetRecord.prototype = { getIterator: function() {
      return o2(r2(s2(this.keys, this.set)));
    }, includes: function(t3) {
      return s2(this.has, this.set, t3);
    } };
    t2.exports = function(t3) {
      r2(t3);
      var e3 = +t3.size;
      if (e3 != e3) throw new c2(l2);
      var i3 = a2(e3);
      if (i3 < 0) throw new h2(l2);
      return new SetRecord(t3, i3);
    };
  }, 4576(t2) {
    var check = function(t3) {
      return t3 && t3.Math === Math && t3;
    };
    t2.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof global && global) || check("object" == typeof this && this) || /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }, 9297(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(8981), s2 = n2({}.hasOwnProperty);
    t2.exports = Object.hasOwn || function hasOwn(t3, e3) {
      return s2(r2(t3), e3);
    };
  }, 421(t2) {
    t2.exports = {};
  }, 397(t2, e2, i2) {
    var n2 = i2(7751);
    t2.exports = n2("document", "documentElement");
  }, 5917(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(9039), s2 = i2(4055);
    t2.exports = !n2 && !r2(function() {
      return 7 !== Object.defineProperty(s2("div"), "a", { get: function() {
        return 7;
      } }).a;
    });
  }, 7055(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(9039), s2 = i2(2195), a2 = Object, o2 = n2("".split);
    t2.exports = r2(function() {
      return !a2("z").propertyIsEnumerable(0);
    }) ? function(t3) {
      return "String" === s2(t3) ? o2(t3, "") : a2(t3);
    } : a2;
  }, 3167(t2, e2, i2) {
    var n2 = i2(4901), r2 = i2(34), s2 = i2(2967);
    t2.exports = function(t3, e3, i3) {
      var a2, o2;
      s2 && n2(a2 = e3.constructor) && a2 !== i3 && r2(o2 = a2.prototype) && o2 !== i3.prototype && s2(t3, o2);
      return t3;
    };
  }, 3706(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(4901), s2 = i2(7629), a2 = n2(Function.toString);
    r2(s2.inspectSource) || (s2.inspectSource = function(t3) {
      return a2(t3);
    });
    t2.exports = s2.inspectSource;
  }, 1181(t2, e2, i2) {
    var n2, r2, s2, a2 = i2(8622), o2 = i2(4576), l2 = i2(34), h2 = i2(6699), c2 = i2(9297), d2 = i2(7629), u2 = i2(6119), p2 = i2(421), g2 = "Object already initialized", m2 = o2.TypeError, f2 = o2.WeakMap;
    if (a2 || d2.state) {
      var b2 = d2.state || (d2.state = new f2());
      b2.get = b2.get;
      b2.has = b2.has;
      b2.set = b2.set;
      n2 = function(t3, e3) {
        if (b2.has(t3)) throw new m2(g2);
        e3.facade = t3;
        b2.set(t3, e3);
        return e3;
      };
      r2 = function(t3) {
        return b2.get(t3) || {};
      };
      s2 = function(t3) {
        return b2.has(t3);
      };
    } else {
      var y2 = u2("state");
      p2[y2] = true;
      n2 = function(t3, e3) {
        if (c2(t3, y2)) throw new m2(g2);
        e3.facade = t3;
        h2(t3, y2, e3);
        return e3;
      };
      r2 = function(t3) {
        return c2(t3, y2) ? t3[y2] : {};
      };
      s2 = function(t3) {
        return c2(t3, y2);
      };
    }
    t2.exports = { set: n2, get: r2, has: s2, enforce: function(t3) {
      return s2(t3) ? r2(t3) : n2(t3, {});
    }, getterFor: function(t3) {
      return function(e3) {
        var i3;
        if (!l2(e3) || (i3 = r2(e3)).type !== t3) throw new m2("Incompatible receiver, " + t3 + " required");
        return i3;
      };
    } };
  }, 4209(t2, e2, i2) {
    var n2 = i2(8227), r2 = i2(6269), s2 = n2("iterator"), a2 = Array.prototype;
    t2.exports = function(t3) {
      return void 0 !== t3 && (r2.Array === t3 || a2[s2] === t3);
    };
  }, 4376(t2, e2, i2) {
    var n2 = i2(2195);
    t2.exports = Array.isArray || function isArray(t3) {
      return "Array" === n2(t3);
    };
  }, 1108(t2, e2, i2) {
    var n2 = i2(6955);
    t2.exports = function(t3) {
      var e3 = n2(t3);
      return "BigInt64Array" === e3 || "BigUint64Array" === e3;
    };
  }, 4901(t2) {
    var e2 = "object" == typeof document && document.all;
    t2.exports = void 0 === e2 && void 0 !== e2 ? function(t3) {
      return "function" == typeof t3 || t3 === e2;
    } : function(t3) {
      return "function" == typeof t3;
    };
  }, 2796(t2, e2, i2) {
    var n2 = i2(9039), r2 = i2(4901), s2 = /#|\.prototype\./, isForced = function(t3, e3) {
      var i3 = o2[a2(t3)];
      return i3 === h2 || i3 !== l2 && (r2(e3) ? n2(e3) : !!e3);
    }, a2 = isForced.normalize = function(t3) {
      return String(t3).replace(s2, ".").toLowerCase();
    }, o2 = isForced.data = {}, l2 = isForced.NATIVE = "N", h2 = isForced.POLYFILL = "P";
    t2.exports = isForced;
  }, 4117(t2) {
    t2.exports = function(t3) {
      return null == t3;
    };
  }, 34(t2, e2, i2) {
    var n2 = i2(4901);
    t2.exports = function(t3) {
      return "object" == typeof t3 ? null !== t3 : n2(t3);
    };
  }, 3925(t2, e2, i2) {
    var n2 = i2(34);
    t2.exports = function(t3) {
      return n2(t3) || null === t3;
    };
  }, 6395(t2) {
    t2.exports = false;
  }, 5810(t2, e2, i2) {
    var n2 = i2(34), r2 = i2(1181).get;
    t2.exports = function isRawJSON(t3) {
      if (!n2(t3)) return false;
      var e3 = r2(t3);
      return !!e3 && "RawJSON" === e3.type;
    };
  }, 757(t2, e2, i2) {
    var n2 = i2(7751), r2 = i2(4901), s2 = i2(1625), a2 = i2(7040), o2 = Object;
    t2.exports = a2 ? function(t3) {
      return "symbol" == typeof t3;
    } : function(t3) {
      var e3 = n2("Symbol");
      return r2(e3) && s2(e3.prototype, o2(t3));
    };
  }, 507(t2, e2, i2) {
    var n2 = i2(9565);
    t2.exports = function(t3, e3, i3) {
      for (var r2, s2, a2 = i3 ? t3 : t3.iterator, o2 = t3.next; !(r2 = n2(o2, a2)).done; ) if (void 0 !== (s2 = e3(r2.value))) return s2;
    };
  }, 2652(t2, e2, i2) {
    var n2 = i2(6080), r2 = i2(9565), s2 = i2(8551), a2 = i2(6823), o2 = i2(4209), l2 = i2(6198), h2 = i2(1625), c2 = i2(81), d2 = i2(851), u2 = i2(9539), p2 = TypeError, Result = function(t3, e3) {
      this.stopped = t3;
      this.result = e3;
    }, g2 = Result.prototype;
    t2.exports = function(t3, e3, i3) {
      var m2, f2, b2, y2, v2, w2, A2, x2 = i3 && i3.that, E2 = !(!i3 || !i3.AS_ENTRIES), _2 = !(!i3 || !i3.IS_RECORD), T2 = !(!i3 || !i3.IS_ITERATOR), S2 = !(!i3 || !i3.INTERRUPTED), C2 = n2(e3, x2), stop = function(t4) {
        m2 && u2(m2, "normal");
        return new Result(true, t4);
      }, callFn = function(t4) {
        if (E2) {
          s2(t4);
          return S2 ? C2(t4[0], t4[1], stop) : C2(t4[0], t4[1]);
        }
        return S2 ? C2(t4, stop) : C2(t4);
      };
      if (_2) m2 = t3.iterator;
      else if (T2) m2 = t3;
      else {
        if (!(f2 = d2(t3))) throw new p2(a2(t3) + " is not iterable");
        if (o2(f2)) {
          for (b2 = 0, y2 = l2(t3); y2 > b2; b2++) if ((v2 = callFn(t3[b2])) && h2(g2, v2)) return v2;
          return new Result(false);
        }
        m2 = c2(t3, f2);
      }
      w2 = _2 ? t3.next : m2.next;
      for (; !(A2 = r2(w2, m2)).done; ) {
        try {
          v2 = callFn(A2.value);
        } catch (t4) {
          u2(m2, "throw", t4);
        }
        if ("object" == typeof v2 && v2 && h2(g2, v2)) return v2;
      }
      return new Result(false);
    };
  }, 1385(t2, e2, i2) {
    var n2 = i2(9539);
    t2.exports = function(t3, e3, i3) {
      for (var r2 = t3.length - 1; r2 >= 0; r2--) if (void 0 !== t3[r2]) try {
        i3 = n2(t3[r2].iterator, e3, i3);
      } catch (t4) {
        e3 = "throw";
        i3 = t4;
      }
      if ("throw" === e3) throw i3;
      return i3;
    };
  }, 9539(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(8551), s2 = i2(5966);
    t2.exports = function(t3, e3, i3) {
      var a2, o2;
      r2(t3);
      try {
        if (!(a2 = s2(t3, "return"))) {
          if ("throw" === e3) throw i3;
          return i3;
        }
        a2 = n2(a2, t3);
      } catch (t4) {
        o2 = true;
        a2 = t4;
      }
      if ("throw" === e3) throw i3;
      if (o2) throw a2;
      r2(a2);
      return i3;
    };
  }, 9462(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(2360), s2 = i2(6699), a2 = i2(6279), o2 = i2(8227), l2 = i2(1181), h2 = i2(5966), c2 = i2(7657).IteratorPrototype, d2 = i2(2529), u2 = i2(9539), p2 = i2(1385), g2 = o2("toStringTag"), m2 = "IteratorHelper", f2 = "WrapForValidIterator", b2 = "normal", y2 = "throw", v2 = l2.set, createIteratorProxyPrototype = function(t3) {
      var e3 = l2.getterFor(t3 ? f2 : m2);
      return a2(r2(c2), { next: function next() {
        var i3 = e3(this);
        if (t3) return i3.nextHandler();
        if (i3.done) return d2(void 0, true);
        try {
          var n3 = i3.nextHandler();
          return i3.returnHandlerResult ? n3 : d2(n3, i3.done);
        } catch (t4) {
          i3.done = true;
          throw t4;
        }
      }, return: function() {
        var i3 = e3(this), r3 = i3.iterator;
        i3.done = true;
        if (t3) {
          var s3 = h2(r3, "return");
          return s3 ? n2(s3, r3) : d2(void 0, true);
        }
        if (i3.inner) try {
          u2(i3.inner.iterator, b2);
        } catch (t4) {
          return u2(r3, y2, t4);
        }
        if (i3.openIters) try {
          p2(i3.openIters, b2);
        } catch (t4) {
          return u2(r3, y2, t4);
        }
        r3 && u2(r3, b2);
        return d2(void 0, true);
      } });
    }, w2 = createIteratorProxyPrototype(true), A2 = createIteratorProxyPrototype(false);
    s2(A2, g2, "Iterator Helper");
    t2.exports = function(t3, e3, i3) {
      var n3 = function Iterator2(n4, r3) {
        if (r3) {
          r3.iterator = n4.iterator;
          r3.next = n4.next;
        } else r3 = n4;
        r3.type = e3 ? f2 : m2;
        r3.returnHandlerResult = !!i3;
        r3.nextHandler = t3;
        r3.counter = 0;
        r3.done = false;
        v2(this, r3);
      };
      n3.prototype = e3 ? w2 : A2;
      return n3;
    };
  }, 684(t2) {
    t2.exports = function(t3, e2) {
      var i2 = "function" == typeof Iterator && Iterator.prototype[t3];
      if (i2) try {
        i2.call({ next: null }, e2).next();
      } catch (t4) {
        return true;
      }
    };
  }, 4549(t2, e2, i2) {
    var n2 = i2(4576);
    t2.exports = function(t3, e3) {
      var i3 = n2.Iterator, r2 = i3 && i3.prototype, s2 = r2 && r2[t3], a2 = false;
      if (s2) try {
        s2.call({ next: function() {
          return { done: true };
        }, return: function() {
          a2 = true;
        } }, -1);
      } catch (t4) {
        t4 instanceof e3 || (a2 = false);
      }
      if (!a2) return s2;
    };
  }, 7657(t2, e2, i2) {
    var n2, r2, s2, a2 = i2(9039), o2 = i2(4901), l2 = i2(34), h2 = i2(2360), c2 = i2(2787), d2 = i2(6840), u2 = i2(8227), p2 = i2(6395), g2 = u2("iterator"), m2 = false;
    [].keys && ("next" in (s2 = [].keys()) ? (r2 = c2(c2(s2))) !== Object.prototype && (n2 = r2) : m2 = true);
    !l2(n2) || a2(function() {
      var t3 = {};
      return n2[g2].call(t3) !== t3;
    }) ? n2 = {} : p2 && (n2 = h2(n2));
    o2(n2[g2]) || d2(n2, g2, function() {
      return this;
    });
    t2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: m2 };
  }, 6269(t2) {
    t2.exports = {};
  }, 6198(t2, e2, i2) {
    var n2 = i2(8014);
    t2.exports = function(t3) {
      return n2(t3.length);
    };
  }, 283(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(9039), s2 = i2(4901), a2 = i2(9297), o2 = i2(3724), l2 = i2(350).CONFIGURABLE, h2 = i2(3706), c2 = i2(1181), d2 = c2.enforce, u2 = c2.get, p2 = String, g2 = Object.defineProperty, m2 = n2("".slice), f2 = n2("".replace), b2 = n2([].join), y2 = o2 && !r2(function() {
      return 8 !== g2(function() {
      }, "length", { value: 8 }).length;
    }), v2 = String(String).split("String"), w2 = t2.exports = function(t3, e3, i3) {
      "Symbol(" === m2(p2(e3), 0, 7) && (e3 = "[" + f2(p2(e3), /^Symbol\(([^)]*)\).*$/, "$1") + "]");
      i3 && i3.getter && (e3 = "get " + e3);
      i3 && i3.setter && (e3 = "set " + e3);
      (!a2(t3, "name") || l2 && t3.name !== e3) && (o2 ? g2(t3, "name", { value: e3, configurable: true }) : t3.name = e3);
      y2 && i3 && a2(i3, "arity") && t3.length !== i3.arity && g2(t3, "length", { value: i3.arity });
      try {
        i3 && a2(i3, "constructor") && i3.constructor ? o2 && g2(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
      } catch (t4) {
      }
      var n3 = d2(t3);
      a2(n3, "source") || (n3.source = b2(v2, "string" == typeof e3 ? e3 : ""));
      return t3;
    };
    Function.prototype.toString = w2(function toString() {
      return s2(this) && u2(this).source || h2(this);
    }, "toString");
  }, 2248(t2, e2, i2) {
    var n2 = i2(9504), r2 = Map.prototype;
    t2.exports = { Map, set: n2(r2.set), get: n2(r2.get), has: n2(r2.has), remove: n2(r2.delete), proto: r2 };
  }, 741(t2) {
    var e2 = Math.ceil, i2 = Math.floor;
    t2.exports = Math.trunc || function trunc(t3) {
      var n2 = +t3;
      return (n2 > 0 ? i2 : e2)(n2);
    };
  }, 7819(t2, e2, i2) {
    var n2 = i2(9039);
    t2.exports = !n2(function() {
      var t3 = "9007199254740993", e3 = JSON.rawJSON(t3);
      return !JSON.isRawJSON(e3) || JSON.stringify(e3) !== t3;
    });
  }, 6043(t2, e2, i2) {
    var n2 = i2(9306), r2 = TypeError, PromiseCapability = function(t3) {
      var e3, i3;
      this.promise = new t3(function(t4, n3) {
        if (void 0 !== e3 || void 0 !== i3) throw new r2("Bad Promise constructor");
        e3 = t4;
        i3 = n3;
      });
      this.resolve = n2(e3);
      this.reject = n2(i3);
    };
    t2.exports.f = function(t3) {
      return new PromiseCapability(t3);
    };
  }, 2603(t2, e2, i2) {
    var n2 = i2(655);
    t2.exports = function(t3, e3) {
      return void 0 === t3 ? arguments.length < 2 ? "" : e3 : n2(t3);
    };
  }, 4149(t2) {
    var e2 = RangeError;
    t2.exports = function(t3) {
      if (t3 == t3) return t3;
      throw new e2("NaN is not allowed");
    };
  }, 2360(t2, e2, i2) {
    var n2, r2 = i2(8551), s2 = i2(6801), a2 = i2(8727), o2 = i2(421), l2 = i2(397), h2 = i2(4055), c2 = i2(6119), d2 = "prototype", u2 = "script", p2 = c2("IE_PROTO"), EmptyConstructor = function() {
    }, scriptTag = function(t3) {
      return "<" + u2 + ">" + t3 + "</" + u2 + ">";
    }, NullProtoObjectViaActiveX = function(t3) {
      t3.write(scriptTag(""));
      t3.close();
      var e3 = t3.parentWindow.Object;
      t3 = null;
      return e3;
    }, NullProtoObject = function() {
      try {
        n2 = new ActiveXObject("htmlfile");
      } catch (t4) {
      }
      NullProtoObject = "undefined" != typeof document ? document.domain && n2 ? NullProtoObjectViaActiveX(n2) : (function() {
        var t4, e3 = h2("iframe"), i3 = "java" + u2 + ":";
        e3.style.display = "none";
        l2.appendChild(e3);
        e3.src = String(i3);
        (t4 = e3.contentWindow.document).open();
        t4.write(scriptTag("document.F=Object"));
        t4.close();
        return t4.F;
      })() : NullProtoObjectViaActiveX(n2);
      for (var t3 = a2.length; t3--; ) delete NullProtoObject[d2][a2[t3]];
      return NullProtoObject();
    };
    o2[p2] = true;
    t2.exports = Object.create || function create(t3, e3) {
      var i3;
      if (null !== t3) {
        EmptyConstructor[d2] = r2(t3);
        i3 = new EmptyConstructor();
        EmptyConstructor[d2] = null;
        i3[p2] = t3;
      } else i3 = NullProtoObject();
      return void 0 === e3 ? i3 : s2.f(i3, e3);
    };
  }, 6801(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(8686), s2 = i2(4913), a2 = i2(8551), o2 = i2(5397), l2 = i2(1072);
    e2.f = n2 && !r2 ? Object.defineProperties : function defineProperties(t3, e3) {
      a2(t3);
      for (var i3, n3 = o2(e3), r3 = l2(e3), h2 = r3.length, c2 = 0; h2 > c2; ) s2.f(t3, i3 = r3[c2++], n3[i3]);
      return t3;
    };
  }, 4913(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(5917), s2 = i2(8686), a2 = i2(8551), o2 = i2(6969), l2 = TypeError, h2 = Object.defineProperty, c2 = Object.getOwnPropertyDescriptor, d2 = "enumerable", u2 = "configurable", p2 = "writable";
    e2.f = n2 ? s2 ? function defineProperty(t3, e3, i3) {
      a2(t3);
      e3 = o2(e3);
      a2(i3);
      if ("function" == typeof t3 && "prototype" === e3 && "value" in i3 && p2 in i3 && !i3[p2]) {
        var n3 = c2(t3, e3);
        if (n3 && n3[p2]) {
          t3[e3] = i3.value;
          i3 = { configurable: u2 in i3 ? i3[u2] : n3[u2], enumerable: d2 in i3 ? i3[d2] : n3[d2], writable: false };
        }
      }
      return h2(t3, e3, i3);
    } : h2 : function defineProperty(t3, e3, i3) {
      a2(t3);
      e3 = o2(e3);
      a2(i3);
      if (r2) try {
        return h2(t3, e3, i3);
      } catch (t4) {
      }
      if ("get" in i3 || "set" in i3) throw new l2("Accessors not supported");
      "value" in i3 && (t3[e3] = i3.value);
      return t3;
    };
  }, 7347(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(9565), s2 = i2(8773), a2 = i2(6980), o2 = i2(5397), l2 = i2(6969), h2 = i2(9297), c2 = i2(5917), d2 = Object.getOwnPropertyDescriptor;
    e2.f = n2 ? d2 : function getOwnPropertyDescriptor(t3, e3) {
      t3 = o2(t3);
      e3 = l2(e3);
      if (c2) try {
        return d2(t3, e3);
      } catch (t4) {
      }
      if (h2(t3, e3)) return a2(!r2(s2.f, t3, e3), t3[e3]);
    };
  }, 8480(t2, e2, i2) {
    var n2 = i2(1828), r2 = i2(8727).concat("length", "prototype");
    e2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t3) {
      return n2(t3, r2);
    };
  }, 3717(t2, e2) {
    e2.f = Object.getOwnPropertySymbols;
  }, 2787(t2, e2, i2) {
    var n2 = i2(9297), r2 = i2(4901), s2 = i2(8981), a2 = i2(6119), o2 = i2(2211), l2 = a2("IE_PROTO"), h2 = Object, c2 = h2.prototype;
    t2.exports = o2 ? h2.getPrototypeOf : function(t3) {
      var e3 = s2(t3);
      if (n2(e3, l2)) return e3[l2];
      var i3 = e3.constructor;
      return r2(i3) && e3 instanceof i3 ? i3.prototype : e3 instanceof h2 ? c2 : null;
    };
  }, 1625(t2, e2, i2) {
    var n2 = i2(9504);
    t2.exports = n2({}.isPrototypeOf);
  }, 1828(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(9297), s2 = i2(5397), a2 = i2(9617).indexOf, o2 = i2(421), l2 = n2([].push);
    t2.exports = function(t3, e3) {
      var i3, n3 = s2(t3), h2 = 0, c2 = [];
      for (i3 in n3) !r2(o2, i3) && r2(n3, i3) && l2(c2, i3);
      for (; e3.length > h2; ) r2(n3, i3 = e3[h2++]) && (~a2(c2, i3) || l2(c2, i3));
      return c2;
    };
  }, 1072(t2, e2, i2) {
    var n2 = i2(1828), r2 = i2(8727);
    t2.exports = Object.keys || function keys(t3) {
      return n2(t3, r2);
    };
  }, 8773(t2, e2) {
    var i2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, r2 = n2 && !i2.call({ 1: 2 }, 1);
    e2.f = r2 ? function propertyIsEnumerable(t3) {
      var e3 = n2(this, t3);
      return !!e3 && e3.enumerable;
    } : i2;
  }, 2967(t2, e2, i2) {
    var n2 = i2(6706), r2 = i2(34), s2 = i2(7750), a2 = i2(3506);
    t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var t3, e3 = false, i3 = {};
      try {
        (t3 = n2(Object.prototype, "__proto__", "set"))(i3, []);
        e3 = i3 instanceof Array;
      } catch (t4) {
      }
      return function setPrototypeOf(i4, n3) {
        s2(i4);
        a2(n3);
        if (!r2(i4)) return i4;
        e3 ? t3(i4, n3) : i4.__proto__ = n3;
        return i4;
      };
    })() : void 0);
  }, 4270(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(4901), s2 = i2(34), a2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3, o2;
      if ("string" === e3 && r2(i3 = t3.toString) && !s2(o2 = n2(i3, t3))) return o2;
      if (r2(i3 = t3.valueOf) && !s2(o2 = n2(i3, t3))) return o2;
      if ("string" !== e3 && r2(i3 = t3.toString) && !s2(o2 = n2(i3, t3))) return o2;
      throw new a2("Can't convert object to primitive value");
    };
  }, 5031(t2, e2, i2) {
    var n2 = i2(7751), r2 = i2(9504), s2 = i2(8480), a2 = i2(3717), o2 = i2(8551), l2 = r2([].concat);
    t2.exports = n2("Reflect", "ownKeys") || function ownKeys(t3) {
      var e3 = s2.f(o2(t3)), i3 = a2.f;
      return i3 ? l2(e3, i3(t3)) : e3;
    };
  }, 8235(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(9297), s2 = SyntaxError, a2 = parseInt, o2 = String.fromCharCode, l2 = n2("".charAt), h2 = n2("".slice), c2 = n2(/./.exec), d2 = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": "\n", "\\r": "\r", "\\t": "	" }, u2 = /^[\da-f]{4}$/i, p2 = /^[\u0000-\u001F]$/;
    t2.exports = function(t3, e3) {
      for (var i3 = true, n3 = ""; e3 < t3.length; ) {
        var g2 = l2(t3, e3);
        if ("\\" === g2) {
          var m2 = h2(t3, e3, e3 + 2);
          if (r2(d2, m2)) {
            n3 += d2[m2];
            e3 += 2;
          } else {
            if ("\\u" !== m2) throw new s2('Unknown escape sequence: "' + m2 + '"');
            var f2 = h2(t3, e3 += 2, e3 + 4);
            if (!c2(u2, f2)) throw new s2("Bad Unicode escape at: " + e3);
            n3 += o2(a2(f2, 16));
            e3 += 4;
          }
        } else {
          if ('"' === g2) {
            i3 = false;
            e3++;
            break;
          }
          if (c2(p2, g2)) throw new s2("Bad control character in string literal at: " + e3);
          n3 += g2;
          e3++;
        }
      }
      if (i3) throw new s2("Unterminated string at: " + e3);
      return { value: n3, end: e3 };
    };
  }, 1103(t2) {
    t2.exports = function(t3) {
      try {
        return { error: false, value: t3() };
      } catch (t4) {
        return { error: true, value: t4 };
      }
    };
  }, 7750(t2, e2, i2) {
    var n2 = i2(4117), r2 = TypeError;
    t2.exports = function(t3) {
      if (n2(t3)) throw new r2("Can't call method on " + t3);
      return t3;
    };
  }, 9286(t2, e2, i2) {
    var n2 = i2(4402), r2 = i2(8469), s2 = n2.Set, a2 = n2.add;
    t2.exports = function(t3) {
      var e3 = new s2();
      r2(t3, function(t4) {
        a2(e3, t4);
      });
      return e3;
    };
  }, 3440(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402), s2 = i2(9286), a2 = i2(5170), o2 = i2(3789), l2 = i2(8469), h2 = i2(507), c2 = r2.has, d2 = r2.remove;
    t2.exports = function difference(t3) {
      var e3 = n2(this), i3 = o2(t3), r3 = s2(e3);
      a2(e3) <= i3.size ? l2(e3, function(t4) {
        i3.includes(t4) && d2(r3, t4);
      }) : h2(i3.getIterator(), function(t4) {
        c2(r3, t4) && d2(r3, t4);
      });
      return r3;
    };
  }, 4402(t2, e2, i2) {
    var n2 = i2(9504), r2 = Set.prototype;
    t2.exports = { Set, add: n2(r2.add), has: n2(r2.has), remove: n2(r2.delete), proto: r2 };
  }, 8750(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402), s2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = r2.Set, c2 = r2.add, d2 = r2.has;
    t2.exports = function intersection(t3) {
      var e3 = n2(this), i3 = a2(t3), r3 = new h2();
      s2(e3) > i3.size ? l2(i3.getIterator(), function(t4) {
        d2(e3, t4) && c2(r3, t4);
      }) : o2(e3, function(t4) {
        i3.includes(t4) && c2(r3, t4);
      });
      return r3;
    };
  }, 4449(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402).has, s2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = i2(9539);
    t2.exports = function isDisjointFrom(t3) {
      var e3 = n2(this), i3 = a2(t3);
      if (s2(e3) <= i3.size) return false !== o2(e3, function(t4) {
        if (i3.includes(t4)) return false;
      }, true);
      var c2 = i3.getIterator();
      return false !== l2(c2, function(t4) {
        if (r2(e3, t4)) return h2(c2, "normal", false);
      });
    };
  }, 3838(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(5170), s2 = i2(8469), a2 = i2(3789);
    t2.exports = function isSubsetOf(t3) {
      var e3 = n2(this), i3 = a2(t3);
      return !(r2(e3) > i3.size) && false !== s2(e3, function(t4) {
        if (!i3.includes(t4)) return false;
      }, true);
    };
  }, 8527(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402).has, s2 = i2(5170), a2 = i2(3789), o2 = i2(507), l2 = i2(9539);
    t2.exports = function isSupersetOf(t3) {
      var e3 = n2(this), i3 = a2(t3);
      if (s2(e3) < i3.size) return false;
      var h2 = i3.getIterator();
      return false !== o2(h2, function(t4) {
        if (!r2(e3, t4)) return l2(h2, "normal", false);
      });
    };
  }, 8469(t2, e2, i2) {
    var n2 = i2(9504), r2 = i2(507), s2 = i2(4402), a2 = s2.Set, o2 = s2.proto, l2 = n2(o2.forEach), h2 = n2(o2.keys), c2 = h2(new a2()).next;
    t2.exports = function(t3, e3, i3) {
      return i3 ? r2({ iterator: h2(t3), next: c2 }, e3) : l2(t3, e3);
    };
  }, 4916(t2, e2, i2) {
    var n2 = i2(7751), createSetLike = function(t3) {
      return { size: t3, has: function() {
        return false;
      }, keys: function() {
        return { next: function() {
          return { done: true };
        } };
      } };
    }, createSetLikeWithInfinitySize = function(t3) {
      return { size: t3, has: function() {
        return true;
      }, keys: function() {
        throw new Error("e");
      } };
    };
    t2.exports = function(t3, e3) {
      var i3 = n2("Set");
      try {
        new i3()[t3](createSetLike(0));
        try {
          new i3()[t3](createSetLike(-1));
          return false;
        } catch (n3) {
          if (!e3) return true;
          try {
            new i3()[t3](createSetLikeWithInfinitySize(-1 / 0));
            return false;
          } catch (n4) {
            return e3(new i3([1, 2])[t3](createSetLikeWithInfinitySize(1 / 0)));
          }
        }
      } catch (t4) {
        return false;
      }
    };
  }, 9835(t2) {
    t2.exports = function(t3) {
      try {
        var e2 = /* @__PURE__ */ new Set(), i2 = { size: 0, has: function() {
          return true;
        }, keys: function() {
          return Object.defineProperty({}, "next", { get: function() {
            e2.clear();
            e2.add(4);
            return function() {
              return { done: true };
            };
          } });
        } }, n2 = e2[t3](i2);
        return 1 === n2.size && 4 === n2.values().next().value;
      } catch (t4) {
        return false;
      }
    };
  }, 5170(t2, e2, i2) {
    var n2 = i2(6706), r2 = i2(4402);
    t2.exports = n2(r2.proto, "size", "get") || function(t3) {
      return t3.size;
    };
  }, 3650(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402), s2 = i2(9286), a2 = i2(3789), o2 = i2(507), l2 = r2.add, h2 = r2.has, c2 = r2.remove;
    t2.exports = function symmetricDifference(t3) {
      var e3 = n2(this), i3 = a2(t3).getIterator(), r3 = s2(e3);
      o2(i3, function(t4) {
        h2(e3, t4) ? c2(r3, t4) : l2(r3, t4);
      });
      return r3;
    };
  }, 4204(t2, e2, i2) {
    var n2 = i2(7080), r2 = i2(4402).add, s2 = i2(9286), a2 = i2(3789), o2 = i2(507);
    t2.exports = function union(t3) {
      var e3 = n2(this), i3 = a2(t3).getIterator(), l2 = s2(e3);
      o2(i3, function(t4) {
        r2(l2, t4);
      });
      return l2;
    };
  }, 6119(t2, e2, i2) {
    var n2 = i2(5745), r2 = i2(3392), s2 = n2("keys");
    t2.exports = function(t3) {
      return s2[t3] || (s2[t3] = r2(t3));
    };
  }, 7629(t2, e2, i2) {
    var n2 = i2(6395), r2 = i2(4576), s2 = i2(9433), a2 = "__core-js_shared__", o2 = t2.exports = r2[a2] || s2(a2, {});
    (o2.versions || (o2.versions = [])).push({ version: "3.48.0", mode: n2 ? "pure" : "global", copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.", license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE", source: "https://github.com/zloirock/core-js" });
  }, 5745(t2, e2, i2) {
    var n2 = i2(7629);
    t2.exports = function(t3, e3) {
      return n2[t3] || (n2[t3] = e3 || {});
    };
  }, 1548(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(9039), s2 = i2(9519), a2 = i2(4215), o2 = n2.structuredClone;
    t2.exports = !!o2 && !r2(function() {
      if ("DENO" === a2 && s2 > 92 || "NODE" === a2 && s2 > 94 || "BROWSER" === a2 && s2 > 97) return false;
      var t3 = new ArrayBuffer(8), e3 = o2(t3, { transfer: [t3] });
      return 0 !== t3.byteLength || 8 !== e3.byteLength;
    });
  }, 4495(t2, e2, i2) {
    var n2 = i2(9519), r2 = i2(9039), s2 = i2(4576).String;
    t2.exports = !!Object.getOwnPropertySymbols && !r2(function() {
      var t3 = /* @__PURE__ */ Symbol("symbol detection");
      return !s2(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
    });
  }, 5610(t2, e2, i2) {
    var n2 = i2(1291), r2 = Math.max, s2 = Math.min;
    t2.exports = function(t3, e3) {
      var i3 = n2(t3);
      return i3 < 0 ? r2(i3 + e3, 0) : s2(i3, e3);
    };
  }, 5854(t2, e2, i2) {
    var n2 = i2(2777), r2 = TypeError;
    t2.exports = function(t3) {
      var e3 = n2(t3, "number");
      if ("number" == typeof e3) throw new r2("Can't convert number to bigint");
      return BigInt(e3);
    };
  }, 7696(t2, e2, i2) {
    var n2 = i2(1291), r2 = i2(8014), s2 = RangeError;
    t2.exports = function(t3) {
      if (void 0 === t3) return 0;
      var e3 = n2(t3), i3 = r2(e3);
      if (e3 !== i3) throw new s2("Wrong length or index");
      return i3;
    };
  }, 5397(t2, e2, i2) {
    var n2 = i2(7055), r2 = i2(7750);
    t2.exports = function(t3) {
      return n2(r2(t3));
    };
  }, 1291(t2, e2, i2) {
    var n2 = i2(741);
    t2.exports = function(t3) {
      var e3 = +t3;
      return e3 != e3 || 0 === e3 ? 0 : n2(e3);
    };
  }, 8014(t2, e2, i2) {
    var n2 = i2(1291), r2 = Math.min;
    t2.exports = function(t3) {
      var e3 = n2(t3);
      return e3 > 0 ? r2(e3, 9007199254740991) : 0;
    };
  }, 8981(t2, e2, i2) {
    var n2 = i2(7750), r2 = Object;
    t2.exports = function(t3) {
      return r2(n2(t3));
    };
  }, 9590(t2, e2, i2) {
    var n2 = i2(1291), r2 = RangeError;
    t2.exports = function(t3) {
      var e3 = n2(t3);
      if (e3 < 0) throw new r2("The argument can't be less than 0");
      return e3;
    };
  }, 2777(t2, e2, i2) {
    var n2 = i2(9565), r2 = i2(34), s2 = i2(757), a2 = i2(5966), o2 = i2(4270), l2 = i2(8227), h2 = TypeError, c2 = l2("toPrimitive");
    t2.exports = function(t3, e3) {
      if (!r2(t3) || s2(t3)) return t3;
      var i3, l3 = a2(t3, c2);
      if (l3) {
        void 0 === e3 && (e3 = "default");
        i3 = n2(l3, t3, e3);
        if (!r2(i3) || s2(i3)) return i3;
        throw new h2("Can't convert object to primitive value");
      }
      void 0 === e3 && (e3 = "number");
      return o2(t3, e3);
    };
  }, 6969(t2, e2, i2) {
    var n2 = i2(2777), r2 = i2(757);
    t2.exports = function(t3) {
      var e3 = n2(t3, "string");
      return r2(e3) ? e3 : e3 + "";
    };
  }, 2140(t2, e2, i2) {
    var n2 = {};
    n2[i2(8227)("toStringTag")] = "z";
    t2.exports = "[object z]" === String(n2);
  }, 655(t2, e2, i2) {
    var n2 = i2(6955), r2 = String;
    t2.exports = function(t3) {
      if ("Symbol" === n2(t3)) throw new TypeError("Cannot convert a Symbol value to a string");
      return r2(t3);
    };
  }, 6823(t2) {
    var e2 = String;
    t2.exports = function(t3) {
      try {
        return e2(t3);
      } catch (t4) {
        return "Object";
      }
    };
  }, 3392(t2, e2, i2) {
    var n2 = i2(9504), r2 = 0, s2 = Math.random(), a2 = n2(1.1.toString);
    t2.exports = function(t3) {
      return "Symbol(" + (void 0 === t3 ? "" : t3) + ")_" + a2(++r2 + s2, 36);
    };
  }, 9143(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(9504), s2 = i2(3972), a2 = i2(3463), o2 = i2(9297), l2 = i2(2804), h2 = i2(944), c2 = i2(5169), d2 = l2.c2i, u2 = l2.c2iUrl, p2 = n2.SyntaxError, g2 = n2.TypeError, m2 = r2("".charAt), skipAsciiWhitespace = function(t3, e3) {
      for (var i3 = t3.length; e3 < i3; e3++) {
        var n3 = m2(t3, e3);
        if (" " !== n3 && "	" !== n3 && "\n" !== n3 && "\f" !== n3 && "\r" !== n3) break;
      }
      return e3;
    }, decodeBase64Chunk = function(t3, e3, i3) {
      var n3 = t3.length;
      n3 < 4 && (t3 += 2 === n3 ? "AA" : "A");
      var r3 = (e3[m2(t3, 0)] << 18) + (e3[m2(t3, 1)] << 12) + (e3[m2(t3, 2)] << 6) + e3[m2(t3, 3)], s3 = [r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3];
      if (2 === n3) {
        if (i3 && 0 !== s3[1]) throw new p2("Extra bits");
        return [s3[0]];
      }
      if (3 === n3) {
        if (i3 && 0 !== s3[2]) throw new p2("Extra bits");
        return [s3[0], s3[1]];
      }
      return s3;
    }, writeBytes = function(t3, e3, i3) {
      for (var n3 = e3.length, r3 = 0; r3 < n3; r3++) t3[i3 + r3] = e3[r3];
      return i3 + n3;
    };
    t2.exports = function(t3, e3, i3, n3) {
      a2(t3);
      s2(e3);
      var r3 = "base64" === h2(e3) ? d2 : u2, l3 = e3 ? e3.lastChunkHandling : void 0;
      void 0 === l3 && (l3 = "loose");
      if ("loose" !== l3 && "strict" !== l3 && "stop-before-partial" !== l3) throw new g2("Incorrect `lastChunkHandling` option");
      i3 && c2(i3.buffer);
      var f2 = t3.length, b2 = i3 || [], y2 = 0, v2 = 0, w2 = "", A2 = 0;
      if (n3) for (; ; ) {
        if ((A2 = skipAsciiWhitespace(t3, A2)) === f2) {
          if (w2.length > 0) {
            if ("stop-before-partial" === l3) break;
            if ("loose" !== l3) throw new p2("Missing padding");
            if (1 === w2.length) throw new p2("Malformed padding: exactly one additional character");
            y2 = writeBytes(b2, decodeBase64Chunk(w2, r3, false), y2);
          }
          v2 = f2;
          break;
        }
        var x2 = m2(t3, A2);
        ++A2;
        if ("=" === x2) {
          if (w2.length < 2) throw new p2("Padding is too early");
          A2 = skipAsciiWhitespace(t3, A2);
          if (2 === w2.length) {
            if (A2 === f2) {
              if ("stop-before-partial" === l3) break;
              throw new p2("Malformed padding: only one =");
            }
            if ("=" === m2(t3, A2)) {
              ++A2;
              A2 = skipAsciiWhitespace(t3, A2);
            }
          }
          if (A2 < f2) throw new p2("Unexpected character after padding");
          y2 = writeBytes(b2, decodeBase64Chunk(w2, r3, "strict" === l3), y2);
          v2 = f2;
          break;
        }
        if (!o2(r3, x2)) throw new p2("Unexpected character");
        var E2 = n3 - y2;
        if (1 === E2 && 2 === w2.length || 2 === E2 && 3 === w2.length) break;
        if (4 === (w2 += x2).length) {
          y2 = writeBytes(b2, decodeBase64Chunk(w2, r3, false), y2);
          w2 = "";
          v2 = A2;
          if (y2 === n3) break;
        }
      }
      return { bytes: b2, read: v2, written: y2 };
    };
  }, 2303(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(9504), s2 = n2.Uint8Array, a2 = n2.SyntaxError, o2 = n2.parseInt, l2 = Math.min, h2 = /[^\da-f]/i, c2 = r2(h2.exec), d2 = r2("".slice);
    t2.exports = function(t3, e3) {
      var i3 = t3.length;
      if (i3 % 2 != 0) throw new a2("String should be an even number of characters");
      for (var n3 = e3 ? l2(e3.length, i3 / 2) : i3 / 2, r3 = e3 || new s2(n3), u2 = 0, p2 = 0; p2 < n3; ) {
        var g2 = d2(t3, u2, u2 += 2);
        if (c2(h2, g2)) throw new a2("String should only contain hex characters");
        r3[p2++] = o2(g2, 16);
      }
      return { bytes: r3, read: u2 };
    };
  }, 7416(t2, e2, i2) {
    var n2 = i2(9039), r2 = i2(8227), s2 = i2(3724), a2 = i2(6395), o2 = r2("iterator");
    t2.exports = !n2(function() {
      var t3 = new URL("b?a=1&b=2&c=3", "https://a"), e3 = t3.searchParams, i3 = new URLSearchParams("a=1&a=2&b=3"), n3 = "";
      t3.pathname = "c%20d";
      e3.forEach(function(t4, i4) {
        e3.delete("b");
        n3 += i4 + t4;
      });
      i3.delete("a", 2);
      i3.delete("b", void 0);
      return a2 && (!t3.toJSON || !i3.has("a", 1) || i3.has("a", 2) || !i3.has("a", void 0) || i3.has("b")) || !e3.size && (a2 || !s2) || !e3.sort || "https://a/c%20d?a=1&c=3" !== t3.href || "3" !== e3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e3[o2] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("https://a#\u0431").hash || "a1c3" !== n3 || "x" !== new URL("https://x", void 0).host;
    });
  }, 7040(t2, e2, i2) {
    var n2 = i2(4495);
    t2.exports = n2 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, 8686(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(9039);
    t2.exports = n2 && r2(function() {
      return 42 !== Object.defineProperty(function() {
      }, "prototype", { value: 42, writable: false }).prototype;
    });
  }, 2812(t2) {
    var e2 = TypeError;
    t2.exports = function(t3, i2) {
      if (t3 < i2) throw new e2("Not enough arguments");
      return t3;
    };
  }, 8622(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(4901), s2 = n2.WeakMap;
    t2.exports = r2(s2) && /native code/.test(String(s2));
  }, 4995(t2, e2, i2) {
    var n2 = i2(9504), r2 = WeakMap.prototype;
    t2.exports = { WeakMap, set: n2(r2.set), get: n2(r2.get), has: n2(r2.has), remove: n2(r2.delete) };
  }, 8227(t2, e2, i2) {
    var n2 = i2(4576), r2 = i2(5745), s2 = i2(9297), a2 = i2(3392), o2 = i2(4495), l2 = i2(7040), h2 = n2.Symbol, c2 = r2("wks"), d2 = l2 ? h2.for || h2 : h2 && h2.withoutSetter || a2;
    t2.exports = function(t3) {
      s2(c2, t3) || (c2[t3] = o2 && s2(h2, t3) ? h2[t3] : d2("Symbol." + t3));
      return c2[t3];
    };
  }, 6573(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(2106), s2 = i2(3238), a2 = ArrayBuffer.prototype;
    n2 && !("detached" in a2) && r2(a2, "detached", { configurable: true, get: function detached() {
      return s2(this);
    } });
  }, 7936(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(5636);
    r2 && n2({ target: "ArrayBuffer", proto: true }, { transferToFixedLength: function transferToFixedLength() {
      return r2(this, arguments.length ? arguments[0] : void 0, false);
    } });
  }, 8100(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(5636);
    r2 && n2({ target: "ArrayBuffer", proto: true }, { transfer: function transfer() {
      return r2(this, arguments.length ? arguments[0] : void 0, true);
    } });
  }, 4114(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(8981), s2 = i2(6198), a2 = i2(4527), o2 = i2(6837);
    n2({ target: "Array", proto: true, arity: 1, forced: i2(9039)(function() {
      return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }) || !(function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })() }, { push: function push(t3) {
      var e3 = r2(this), i3 = s2(e3), n3 = arguments.length;
      o2(i3 + n3);
      for (var l2 = 0; l2 < n3; l2++) {
        e3[i3] = arguments[l2];
        i3++;
      }
      a2(e3, i3);
      return i3;
    } });
  }, 8111(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(679), a2 = i2(8551), o2 = i2(4901), l2 = i2(2787), h2 = i2(2106), c2 = i2(4659), d2 = i2(9039), u2 = i2(9297), p2 = i2(8227), g2 = i2(7657).IteratorPrototype, m2 = i2(3724), f2 = i2(6395), b2 = "constructor", y2 = "Iterator", v2 = p2("toStringTag"), w2 = TypeError, A2 = r2[y2], x2 = f2 || !o2(A2) || A2.prototype !== g2 || !d2(function() {
      A2({});
    }), E2 = function Iterator2() {
      s2(this, g2);
      if (l2(this) === g2) throw new w2("Abstract class Iterator not directly constructable");
    }, defineIteratorPrototypeAccessor = function(t3, e3) {
      m2 ? h2(g2, t3, { configurable: true, get: function() {
        return e3;
      }, set: function(e4) {
        a2(this);
        if (this === g2) throw new w2("You can't redefine this property");
        u2(this, t3) ? this[t3] = e4 : c2(this, t3, e4);
      } }) : g2[t3] = e3;
    };
    u2(g2, v2) || defineIteratorPrototypeAccessor(v2, y2);
    !x2 && u2(g2, b2) && g2[b2] !== Object || defineIteratorPrototypeAccessor(b2, E2);
    E2.prototype = g2;
    n2({ global: true, constructor: true, forced: x2 }, { Iterator: E2 });
  }, 9314(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9539), c2 = i2(9462), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("drop", 0), m2 = !p2 && !g2 && u2("drop", RangeError), f2 = p2 || g2 || m2, b2 = c2(function() {
      for (var t3, e3 = this.iterator, i3 = this.next; this.remaining; ) {
        this.remaining--;
        t3 = s2(r2(i3, e3));
        if (this.done = !!t3.done) return;
      }
      t3 = s2(r2(i3, e3));
      if (!(this.done = !!t3.done)) return t3.value;
    });
    n2({ target: "Iterator", proto: true, real: true, forced: f2 }, { drop: function drop(t3) {
      s2(this);
      var e3;
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        h2(this, "throw", t4);
      }
      return m2 ? r2(m2, this, e3) : new b2(a2(this), { remaining: e3 });
    } });
  }, 1148(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("every", TypeError);
    n2({ target: "Iterator", proto: true, real: true, forced: c2 }, { every: function every(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return r2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return !s2(e3, function(e4, n3) {
        if (!t3(e4, i3++)) return n3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }, 2489(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(6395), d2 = i2(9539), u2 = i2(684), p2 = i2(4549), g2 = !c2 && !u2("filter", function() {
    }), m2 = !c2 && !g2 && p2("filter", TypeError), f2 = c2 || g2 || m2, b2 = l2(function() {
      for (var t3, e3, i3 = this.iterator, n3 = this.predicate, s3 = this.next; ; ) {
        t3 = a2(r2(s3, i3));
        if (this.done = !!t3.done) return;
        e3 = t3.value;
        if (h2(i3, n3, [e3, this.counter++], true)) return e3;
      }
    });
    n2({ target: "Iterator", proto: true, real: true, forced: f2 }, { filter: function filter(t3) {
      a2(this);
      try {
        s2(t3);
      } catch (t4) {
        d2(this, "throw", t4);
      }
      return m2 ? r2(m2, this, t3) : new b2(o2(this), { predicate: t3 });
    } });
  }, 116(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("find", TypeError);
    n2({ target: "Iterator", proto: true, real: true, forced: c2 }, { find: function find(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return r2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return s2(e3, function(e4, n3) {
        if (t3(e4, i3++)) return n3(e4);
      }, { IS_RECORD: true, INTERRUPTED: true }).result;
    } });
  }, 531(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(8646), h2 = i2(9462), c2 = i2(9539), d2 = i2(6395), u2 = i2(684), p2 = i2(4549);
    var g2 = !d2 && !u2("flatMap", function() {
    }), m2 = !d2 && !g2 && p2("flatMap", TypeError), f2 = d2 || g2 || m2 || (function throwsOnIteratorWithoutReturn() {
      try {
        var t3 = Iterator.prototype.flatMap.call((/* @__PURE__ */ new Map([[4, 5]])).entries(), function(t4) {
          return t4;
        });
        t3.next();
        t3.return();
      } catch (t4) {
        return true;
      }
    })(), b2 = h2(function() {
      for (var t3, e3, i3 = this.iterator, n3 = this.mapper; ; ) {
        if (e3 = this.inner) try {
          if (!(t3 = a2(r2(e3.next, e3.iterator))).done) return t3.value;
          this.inner = null;
        } catch (t4) {
          c2(i3, "throw", t4);
        }
        t3 = a2(r2(this.next, i3));
        if (this.done = !!t3.done) return;
        try {
          this.inner = l2(n3(t3.value, this.counter++), false);
        } catch (t4) {
          c2(i3, "throw", t4);
        }
      }
    });
    n2({ target: "Iterator", proto: true, real: true, forced: f2 }, { flatMap: function flatMap(t3) {
      a2(this);
      try {
        s2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? r2(m2, this, t3) : new b2(o2(this), { mapper: t3, inner: null });
    } });
  }, 7588(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("forEach", TypeError);
    n2({ target: "Iterator", proto: true, real: true, forced: c2 }, { forEach: function forEach(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return r2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      s2(e3, function(e4) {
        t3(e4, i3++);
      }, { IS_RECORD: true });
    } });
  }, 1701(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(9539), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("map", function() {
    }), m2 = !p2 && !g2 && u2("map", TypeError), f2 = p2 || g2 || m2, b2 = l2(function() {
      var t3 = this.iterator, e3 = a2(r2(this.next, t3));
      if (!(this.done = !!e3.done)) return h2(t3, this.mapper, [e3.value, this.counter++], true);
    });
    n2({ target: "Iterator", proto: true, real: true, forced: f2 }, { map: function map(t3) {
      a2(this);
      try {
        s2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? r2(m2, this, t3) : new b2(o2(this), { mapper: t3 });
    } });
  }, 8237(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(2652), s2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9539), h2 = i2(4549), c2 = i2(8745), d2 = i2(9039), u2 = TypeError, p2 = d2(function() {
      [].keys().reduce(function() {
      }, void 0);
    }), g2 = !p2 && h2("reduce", u2);
    n2({ target: "Iterator", proto: true, real: true, forced: p2 || g2 }, { reduce: function reduce(t3) {
      a2(this);
      try {
        s2(t3);
      } catch (t4) {
        l2(this, "throw", t4);
      }
      var e3 = arguments.length < 2, i3 = e3 ? void 0 : arguments[1];
      if (g2) return c2(g2, this, e3 ? [t3] : [t3, i3]);
      var n3 = o2(this), h3 = 0;
      r2(n3, function(n4) {
        if (e3) {
          e3 = false;
          i3 = n4;
        } else i3 = t3(i3, n4, h3);
        h3++;
      }, { IS_RECORD: true });
      if (e3) throw new u2("Reduce of empty iterator with no initial value");
      return i3;
    } });
  }, 3579(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("some", TypeError);
    n2({ target: "Iterator", proto: true, real: true, forced: c2 }, { some: function some(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return r2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return s2(e3, function(e4, n3) {
        if (t3(e4, i3++)) return n3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }, 4972(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9565), s2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9462), c2 = i2(9539), d2 = i2(4549), u2 = i2(6395), p2 = !u2 && d2("take", RangeError), g2 = h2(function() {
      var t3 = this.iterator;
      if (!this.remaining--) {
        this.done = true;
        return c2(t3, "normal", void 0);
      }
      var e3 = s2(r2(this.next, t3));
      if (!(this.done = !!e3.done)) return e3.value;
    });
    n2({ target: "Iterator", proto: true, real: true, forced: u2 || p2 }, { take: function take(t3) {
      s2(this);
      var e3;
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return p2 ? r2(p2, this, e3) : new g2(a2(this), { remaining: e3 });
    } });
  }, 9112(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(3724), s2 = i2(4576), a2 = i2(7751), o2 = i2(9504), l2 = i2(9565), h2 = i2(4901), c2 = i2(34), d2 = i2(4376), u2 = i2(9297), p2 = i2(655), g2 = i2(6198), m2 = i2(4659), f2 = i2(9039), b2 = i2(8235), y2 = i2(4495), v2 = s2.JSON, w2 = s2.Number, A2 = s2.SyntaxError, x2 = v2 && v2.parse, E2 = a2("Object", "keys"), _2 = Object.getOwnPropertyDescriptor, T2 = o2("".charAt), S2 = o2("".slice), C2 = o2(/./.exec), D2 = o2([].push), P2 = /^\d$/, M2 = /^[1-9]$/, k2 = /^[\d-]$/, I2 = /^[\t\n\r ]$/, internalize = function(t3, e3, i3, n3) {
      var r3, s3, a3, o3, h3, p3 = t3[e3], m3 = n3 && p3 === n3.value, f3 = m3 && "string" == typeof n3.source ? { source: n3.source } : {};
      if (c2(p3)) {
        var b3 = d2(p3), y3 = m3 ? n3.nodes : b3 ? [] : {};
        if (b3) {
          r3 = y3.length;
          a3 = g2(p3);
          for (o3 = 0; o3 < a3; o3++) internalizeProperty(p3, o3, internalize(p3, "" + o3, i3, o3 < r3 ? y3[o3] : void 0));
        } else {
          s3 = E2(p3);
          a3 = g2(s3);
          for (o3 = 0; o3 < a3; o3++) {
            h3 = s3[o3];
            internalizeProperty(p3, h3, internalize(p3, h3, i3, u2(y3, h3) ? y3[h3] : void 0));
          }
        }
      }
      return l2(i3, t3, e3, p3, f3);
    }, internalizeProperty = function(t3, e3, i3) {
      if (r2) {
        var n3 = _2(t3, e3);
        if (n3 && !n3.configurable) return;
      }
      void 0 === i3 ? delete t3[e3] : m2(t3, e3, i3);
    }, Node2 = function(t3, e3, i3, n3) {
      this.value = t3;
      this.end = e3;
      this.source = i3;
      this.nodes = n3;
    }, Context = function(t3, e3) {
      this.source = t3;
      this.index = e3;
    };
    Context.prototype = { fork: function(t3) {
      return new Context(this.source, t3);
    }, parse: function() {
      var t3 = this.source, e3 = this.skip(I2, this.index), i3 = this.fork(e3), n3 = T2(t3, e3);
      if (C2(k2, n3)) return i3.number();
      switch (n3) {
        case "{":
          return i3.object();
        case "[":
          return i3.array();
        case '"':
          return i3.string();
        case "t":
          return i3.keyword(true);
        case "f":
          return i3.keyword(false);
        case "n":
          return i3.keyword(null);
      }
      throw new A2('Unexpected character: "' + n3 + '" at: ' + e3);
    }, node: function(t3, e3, i3, n3, r3) {
      return new Node2(e3, n3, t3 ? null : S2(this.source, i3, n3), r3);
    }, object: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, n3 = {}, r3 = {}; e3 < t3.length; ) {
        e3 = this.until(['"', "}"], e3);
        if ("}" === T2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var s3 = this.fork(e3).string(), a3 = s3.value;
        e3 = s3.end;
        e3 = this.until([":"], e3) + 1;
        e3 = this.skip(I2, e3);
        s3 = this.fork(e3).parse();
        m2(r3, a3, s3);
        m2(n3, a3, s3.value);
        e3 = this.until([",", "}"], s3.end);
        var o3 = T2(t3, e3);
        if ("," === o3) {
          i3 = true;
          e3++;
        } else if ("}" === o3) {
          e3++;
          break;
        }
      }
      return this.node(1, n3, this.index, e3, r3);
    }, array: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, n3 = [], r3 = []; e3 < t3.length; ) {
        e3 = this.skip(I2, e3);
        if ("]" === T2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var s3 = this.fork(e3).parse();
        D2(r3, s3);
        D2(n3, s3.value);
        e3 = this.until([",", "]"], s3.end);
        if ("," === T2(t3, e3)) {
          i3 = true;
          e3++;
        } else if ("]" === T2(t3, e3)) {
          e3++;
          break;
        }
      }
      return this.node(1, n3, this.index, e3, r3);
    }, string: function() {
      var t3 = this.index, e3 = b2(this.source, this.index + 1);
      return this.node(0, e3.value, t3, e3.end);
    }, number: function() {
      var t3 = this.source, e3 = this.index, i3 = e3;
      "-" === T2(t3, i3) && i3++;
      if ("0" === T2(t3, i3)) i3++;
      else {
        if (!C2(M2, T2(t3, i3))) throw new A2("Failed to parse number at: " + i3);
        i3 = this.skip(P2, i3 + 1);
      }
      "." === T2(t3, i3) && (i3 = this.skip(P2, i3 + 1));
      if ("e" === T2(t3, i3) || "E" === T2(t3, i3)) {
        i3++;
        "+" !== T2(t3, i3) && "-" !== T2(t3, i3) || i3++;
        if (i3 === (i3 = this.skip(P2, i3))) throw new A2("Failed to parse number's exponent value at: " + i3);
      }
      return this.node(0, w2(S2(t3, e3, i3)), e3, i3);
    }, keyword: function(t3) {
      var e3 = "" + t3, i3 = this.index, n3 = i3 + e3.length;
      if (S2(this.source, i3, n3) !== e3) throw new A2("Failed to parse value at: " + i3);
      return this.node(0, t3, i3, n3);
    }, skip: function(t3, e3) {
      for (var i3 = this.source; e3 < i3.length && C2(t3, T2(i3, e3)); e3++) ;
      return e3;
    }, until: function(t3, e3) {
      e3 = this.skip(I2, e3);
      for (var i3 = T2(this.source, e3), n3 = 0; n3 < t3.length; n3++) if (t3[n3] === i3) return e3;
      throw new A2('Unexpected character: "' + i3 + '" at: ' + e3);
    } };
    var R2 = f2(function() {
      var t3, e3 = "9007199254740993";
      x2(e3, function(e4, i3, n3) {
        t3 = n3.source;
      });
      return t3 !== e3;
    }), B2 = y2 && !f2(function() {
      return 1 / x2("-0 	") != -1 / 0;
    });
    n2({ target: "JSON", stat: true, forced: R2 }, { parse: function parse(t3, e3) {
      return B2 && !h2(e3) ? x2(t3) : (function(t4, e4) {
        t4 = p2(t4);
        var i3 = new Context(t4, 0, ""), n3 = i3.parse(), r3 = n3.value, s3 = i3.skip(I2, n3.end);
        if (s3 < t4.length) throw new A2('Unexpected extra character: "' + T2(t4, s3) + '" after the parsed data at: ' + s3);
        return h2(e4) ? internalize({ "": r3 }, "", e4, n3) : r3;
      })(t3, e3);
    } });
  }, 3110(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(7751), s2 = i2(8745), a2 = i2(9565), o2 = i2(9504), l2 = i2(9039), h2 = i2(4376), c2 = i2(4901), d2 = i2(5810), u2 = i2(757), p2 = i2(2195), g2 = i2(655), m2 = i2(7680), f2 = i2(8235), b2 = i2(3392), y2 = i2(4495), v2 = i2(7819), w2 = String, A2 = r2("JSON", "stringify"), x2 = o2(/./.exec), E2 = o2("".charAt), _2 = o2("".charCodeAt), T2 = o2("".replace), S2 = o2("".slice), C2 = o2([].push), D2 = o2(1.1.toString), P2 = /[\uD800-\uDFFF]/g, M2 = /^[\uD800-\uDBFF]$/, k2 = /^[\uDC00-\uDFFF]$/, I2 = b2(), R2 = I2.length, B2 = !y2 || l2(function() {
      var t3 = r2("Symbol")("stringify detection");
      return "[null]" !== A2([t3]) || "{}" !== A2({ a: t3 }) || "{}" !== A2(Object(t3));
    }), O2 = l2(function() {
      return '"\\udf06\\ud834"' !== A2("\uDF06\uD834") || '"\\udead"' !== A2("\uDEAD");
    }), L2 = B2 ? function(t3, e3) {
      var i3 = m2(arguments), n3 = getReplacerFunction(e3);
      if (c2(n3) || void 0 !== t3 && !u2(t3)) {
        i3[1] = function(t4, e4) {
          c2(n3) && (e4 = a2(n3, this, w2(t4), e4));
          if (!u2(e4)) return e4;
        };
        return s2(A2, null, i3);
      }
    } : A2, fixIllFormedJSON = function(t3, e3, i3) {
      var n3 = E2(i3, e3 - 1), r3 = E2(i3, e3 + 1);
      return x2(M2, t3) && !x2(k2, r3) || x2(k2, t3) && !x2(M2, n3) ? "\\u" + D2(_2(t3, 0), 16) : t3;
    }, getReplacerFunction = function(t3) {
      if (c2(t3)) return t3;
      if (h2(t3)) {
        for (var e3 = t3.length, i3 = [], n3 = 0; n3 < e3; n3++) {
          var r3 = t3[n3];
          "string" == typeof r3 ? C2(i3, r3) : "number" != typeof r3 && "Number" !== p2(r3) && "String" !== p2(r3) || C2(i3, g2(r3));
        }
        var s3 = i3.length, a3 = true;
        return function(t4, e4) {
          if (a3) {
            a3 = false;
            return e4;
          }
          if (h2(this)) return e4;
          for (var n4 = 0; n4 < s3; n4++) if (i3[n4] === t4) return e4;
        };
      }
    };
    A2 && n2({ target: "JSON", stat: true, arity: 3, forced: B2 || O2 || !v2 }, { stringify: function stringify(t3, e3, i3) {
      var n3 = getReplacerFunction(e3), r3 = [], s3 = L2(t3, function(t4, e4) {
        var i4 = c2(n3) ? a2(n3, this, w2(t4), e4) : e4;
        return !v2 && d2(i4) ? I2 + (C2(r3, i4.rawJSON) - 1) : i4;
      }, i3);
      if ("string" != typeof s3) return s3;
      O2 && (s3 = T2(s3, P2, fixIllFormedJSON));
      if (v2) return s3;
      for (var o3 = "", l3 = s3.length, h3 = 0; h3 < l3; h3++) {
        var u3 = E2(s3, h3);
        if ('"' === u3) {
          var p3 = f2(s3, ++h3).end - 1, g3 = S2(s3, h3, p3);
          o3 += S2(g3, 0, R2) === I2 ? r3[S2(g3, R2)] : '"' + g3 + '"';
          h3 = p3;
        } else o3 += u3;
      }
      return o3;
    } });
  }, 2731(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9306), s2 = i2(6194), a2 = i2(2248), o2 = i2(6395), l2 = a2.get, h2 = a2.has, c2 = a2.set;
    n2({ target: "Map", proto: true, real: true, forced: o2 }, { getOrInsertComputed: function getOrInsertComputed(t3, e3) {
      s2(this);
      r2(e3);
      if (h2(this, t3)) return l2(this, t3);
      0 === t3 && 1 / t3 == -1 / 0 && (t3 = 0);
      var i3 = e3(t3);
      c2(this, t3, i3);
      return i3;
    } });
  }, 5367(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(6194), s2 = i2(2248), a2 = i2(6395), o2 = s2.get, l2 = s2.has, h2 = s2.set;
    n2({ target: "Map", proto: true, real: true, forced: a2 }, { getOrInsert: function getOrInsert(t3, e3) {
      if (l2(r2(this), t3)) return o2(this, t3);
      h2(this, t3, e3);
      return e3;
    } });
  }, 3068(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9504), s2 = i2(2652), a2 = RangeError, o2 = TypeError, l2 = 1 / 0, h2 = Math.abs, c2 = Math.pow, d2 = r2([].push), u2 = c2(2, 1023), p2 = c2(2, 53) - 1, g2 = Number.MAX_VALUE, m2 = c2(2, 971), f2 = {}, b2 = {}, y2 = {}, v2 = {}, w2 = {}, twosum = function(t3, e3) {
      var i3 = t3 + e3;
      return { hi: i3, lo: e3 - (i3 - t3) };
    };
    n2({ target: "Math", stat: true }, { sumPrecise: function sumPrecise(t3) {
      var e3 = [], i3 = 0, n3 = v2;
      s2(t3, function(t4) {
        if (++i3 >= p2) throw new a2("Maximum allowed index exceeded");
        if ("number" != typeof t4) throw new o2("Value is not a number");
        if (n3 !== f2) {
          if (t4 != t4) n3 = f2;
          else if (t4 === l2) n3 = n3 === b2 ? f2 : y2;
          else if (t4 === -1 / 0) n3 = n3 === y2 ? f2 : b2;
          else if (!(0 === t4 && 1 / t4 !== l2 || n3 !== v2 && n3 !== w2)) {
            n3 = w2;
            d2(e3, t4);
          }
        }
      });
      switch (n3) {
        case f2:
          return NaN;
        case b2:
          return -1 / 0;
        case y2:
          return l2;
        case v2:
          return -0;
      }
      for (var r3, c3, A2, x2, E2, _2, T2 = [], S2 = 0, C2 = 0; C2 < e3.length; C2++) {
        r3 = e3[C2];
        for (var D2 = 0, P2 = 0; P2 < T2.length; P2++) {
          c3 = T2[P2];
          if (h2(r3) < h2(c3)) {
            _2 = r3;
            r3 = c3;
            c3 = _2;
          }
          x2 = (A2 = twosum(r3, c3)).hi;
          E2 = A2.lo;
          if (h2(x2) === l2) {
            var M2 = x2 === l2 ? 1 : -1;
            S2 += M2;
            if (h2(r3 = r3 - M2 * u2 - M2 * u2) < h2(c3)) {
              _2 = r3;
              r3 = c3;
              c3 = _2;
            }
            x2 = (A2 = twosum(r3, c3)).hi;
            E2 = A2.lo;
          }
          0 !== E2 && (T2[D2++] = E2);
          r3 = x2;
        }
        T2.length = D2;
        0 !== r3 && d2(T2, r3);
      }
      var k2 = T2.length - 1;
      x2 = 0;
      E2 = 0;
      if (0 !== S2) {
        var I2 = k2 >= 0 ? T2[k2] : 0;
        k2--;
        if (h2(S2) > 1 || S2 > 0 && I2 > 0 || S2 < 0 && I2 < 0) return S2 > 0 ? l2 : -1 / 0;
        x2 = (A2 = twosum(S2 * u2, I2 / 2)).hi;
        E2 = A2.lo;
        E2 *= 2;
        if (h2(2 * x2) === l2) return x2 > 0 ? x2 === u2 && E2 === -m2 / 2 && k2 >= 0 && T2[k2] < 0 ? g2 : l2 : x2 === -u2 && E2 === m2 / 2 && k2 >= 0 && T2[k2] > 0 ? -g2 : -1 / 0;
        if (0 !== E2) {
          T2[++k2] = E2;
          E2 = 0;
        }
        x2 *= 2;
      }
      for (; k2 >= 0; ) {
        x2 = (A2 = twosum(x2, T2[k2--])).hi;
        if (0 !== (E2 = A2.lo)) break;
      }
      k2 >= 0 && (E2 < 0 && T2[k2] < 0 || E2 > 0 && T2[k2] > 0) && (c3 = 2 * E2) === (r3 = x2 + c3) - x2 && (x2 = r3);
      return x2;
    } });
  }, 1689(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(8745), a2 = i2(7680), o2 = i2(6043), l2 = i2(9306), h2 = i2(1103), c2 = r2.Promise, d2 = false;
    n2({ target: "Promise", stat: true, forced: !c2 || !c2.try || h2(function() {
      c2.try(function(t3) {
        d2 = 8 === t3;
      }, 8);
    }).error || !d2 }, { try: function(t3) {
      var e3 = arguments.length > 1 ? a2(arguments, 1) : [], i3 = o2.f(this), n3 = h2(function() {
        return s2(l2(t3), void 0, e3);
      });
      (n3.error ? i3.reject : i3.resolve)(n3.value);
      return i3.promise;
    } });
  }, 4628(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(6043);
    n2({ target: "Promise", stat: true }, { withResolvers: function withResolvers() {
      var t3 = r2.f(this);
      return { promise: t3.promise, resolve: t3.resolve, reject: t3.reject };
    } });
  }, 7642(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(3440), s2 = i2(9039);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("difference", function(t3) {
      return 0 === t3.size;
    }) || s2(function() {
      var t3 = { size: 1, has: function() {
        return true;
      }, keys: function() {
        var t4 = 0;
        return { next: function() {
          var i3 = t4++ > 1;
          e3.has(1) && e3.clear();
          return { done: i3, value: 2 };
        } };
      } }, e3 = /* @__PURE__ */ new Set([1, 2, 3, 4]);
      return 3 !== e3.difference(t3).size;
    }) }, { difference: r2 });
  }, 8004(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9039), s2 = i2(8750);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("intersection", function(t3) {
      return 2 === t3.size && t3.has(1) && t3.has(2);
    }) || r2(function() {
      return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
    }) }, { intersection: s2 });
  }, 3853(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4449);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isDisjointFrom", function(t3) {
      return !t3;
    }) }, { isDisjointFrom: r2 });
  }, 5876(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(3838);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isSubsetOf", function(t3) {
      return t3;
    }) }, { isSubsetOf: r2 });
  }, 2475(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(8527);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isSupersetOf", function(t3) {
      return !t3;
    }) }, { isSupersetOf: r2 });
  }, 5024(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(3650), s2 = i2(9835);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("symmetricDifference") || !s2("symmetricDifference") }, { symmetricDifference: r2 });
  }, 1698(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4204), s2 = i2(9835);
    n2({ target: "Set", proto: true, real: true, forced: !i2(4916)("union") || !s2("union") }, { union: r2 });
  }, 9577(t2, e2, i2) {
    var n2 = i2(4644), r2 = i2(1108), s2 = i2(6198), a2 = i2(1291), o2 = i2(5854), l2 = n2.aTypedArray, h2 = n2.getTypedArrayConstructor, c2 = n2.exportTypedArrayMethod, d2 = RangeError, u2 = (function() {
      try {
        new Int8Array(1).with(2, { valueOf: function() {
          throw 8;
        } });
      } catch (t3) {
        return 8 === t3;
      }
    })(), p2 = u2 && (function() {
      try {
        new Int8Array(1).with(-0.5, 1);
      } catch (t3) {
        return true;
      }
    })();
    c2("with", { with: function(t3, e3) {
      var i3 = l2(this), n3 = s2(i3), c3 = a2(t3), u3 = c3 < 0 ? n3 + c3 : c3, p3 = r2(i3) ? o2(e3) : +e3;
      if (u3 >= n3 || u3 < 0) throw new d2("Incorrect index");
      for (var g2 = new (h2(i3))(n3), m2 = 0; m2 < n3; m2++) g2[m2] = m2 === u3 ? p3 : i3[m2];
      return g2;
    } }.with, !u2 || p2);
  }, 5213(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(5370), a2 = i2(9143), o2 = r2.Uint8Array, l2 = !o2 || !o2.fromBase64 || !(function() {
      try {
        o2.fromBase64("a");
        return;
      } catch (t3) {
      }
      try {
        o2.fromBase64("", null);
      } catch (t3) {
        return true;
      }
    })();
    o2 && n2({ target: "Uint8Array", stat: true, forced: l2 }, { fromBase64: function fromBase64(t3) {
      var e3 = a2(t3, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
      return s2(o2, e3.bytes);
    } });
  }, 6632(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(9143), a2 = i2(4154), o2 = r2.Uint8Array, l2 = !o2 || !o2.prototype.setFromBase64 || !(function() {
      var t3 = new o2([255, 255, 255, 255, 255]);
      try {
        t3.setFromBase64("", null);
        return;
      } catch (t4) {
      }
      try {
        t3.setFromBase64("a");
        return;
      } catch (t4) {
      }
      try {
        t3.setFromBase64("MjYyZg===");
      } catch (e3) {
        return 50 === t3[0] && 54 === t3[1] && 50 === t3[2] && 255 === t3[3] && 255 === t3[4];
      }
    })();
    o2 && n2({ target: "Uint8Array", proto: true, forced: l2 }, { setFromBase64: function setFromBase64(t3) {
      a2(this);
      var e3 = s2(t3, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
      return { read: e3.read, written: e3.written };
    } });
  }, 4226(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(3463), a2 = i2(4154), o2 = i2(5169), l2 = i2(2303);
    r2.Uint8Array && n2({ target: "Uint8Array", proto: true, forced: (function throwsOnLengthTrackingView() {
      try {
        var t3 = new ArrayBuffer(16, { maxByteLength: 1024 });
        new Uint8Array(t3).setFromHex("cafed00d");
      } catch (t4) {
        return true;
      }
    })() }, { setFromHex: function setFromHex(t3) {
      a2(this);
      s2(t3);
      o2(this.buffer);
      var e3 = l2(t3, this).read;
      return { read: e3, written: e3 / 2 };
    } });
  }, 9486(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(9504), a2 = i2(3972), o2 = i2(4154), l2 = i2(5169), h2 = i2(2804), c2 = i2(944), d2 = h2.i2c, u2 = h2.i2cUrl, p2 = s2("".charAt), g2 = r2.Uint8Array, m2 = !g2 || !g2.prototype.toBase64 || !(function() {
      try {
        new g2().toBase64(null);
      } catch (t3) {
        return true;
      }
    })();
    g2 && n2({ target: "Uint8Array", proto: true, forced: m2 }, { toBase64: function toBase64() {
      var t3 = o2(this), e3 = arguments.length ? a2(arguments[0]) : void 0, i3 = "base64" === c2(e3) ? d2 : u2, n3 = !!e3 && !!e3.omitPadding;
      l2(this.buffer);
      for (var r3, s3 = "", h3 = 0, g3 = t3.length, at = function(t4) {
        return p2(i3, r3 >> 6 * t4 & 63);
      }; h3 + 2 < g3; h3 += 3) {
        r3 = (t3[h3] << 16) + (t3[h3 + 1] << 8) + t3[h3 + 2];
        s3 += at(3) + at(2) + at(1) + at(0);
      }
      if (h3 + 2 === g3) {
        r3 = (t3[h3] << 16) + (t3[h3 + 1] << 8);
        s3 += at(3) + at(2) + at(1) + (n3 ? "" : "=");
      } else if (h3 + 1 === g3) {
        r3 = t3[h3] << 16;
        s3 += at(3) + at(2) + (n3 ? "" : "==");
      }
      return s3;
    } });
  }, 456(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(9504), a2 = i2(4154), o2 = i2(5169), l2 = s2(1.1.toString), h2 = r2.Uint8Array, c2 = !h2 || !h2.prototype.toHex || !(function() {
      try {
        return "ffffffffffffffff" === new h2([255, 255, 255, 255, 255, 255, 255, 255]).toHex();
      } catch (t3) {
        return false;
      }
    })();
    h2 && n2({ target: "Uint8Array", proto: true, forced: c2 }, { toHex: function toHex() {
      a2(this);
      o2(this.buffer);
      for (var t3 = "", e3 = 0, i3 = this.length; e3 < i3; e3++) {
        var n3 = l2(this[e3], 16);
        t3 += 1 === n3.length ? "0" + n3 : n3;
      }
      return t3;
    } });
  }, 9452(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(9306), s2 = i2(6557), a2 = i2(4328), o2 = i2(4995), l2 = i2(6395), h2 = o2.get, c2 = o2.has, d2 = o2.set;
    n2({ target: "WeakMap", proto: true, real: true, forced: l2 || !(function() {
      try {
        WeakMap.prototype.getOrInsertComputed && (/* @__PURE__ */ new WeakMap()).getOrInsertComputed(1, function() {
          throw 1;
        });
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })() }, { getOrInsertComputed: function getOrInsertComputed(t3, e3) {
      s2(this);
      a2(t3);
      r2(e3);
      if (c2(this, t3)) return h2(this, t3);
      var i3 = e3(t3);
      d2(this, t3, i3);
      return i3;
    } });
  }, 8454(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(6557), s2 = i2(4995), a2 = i2(6395), o2 = s2.get, l2 = s2.has, h2 = s2.set;
    n2({ target: "WeakMap", proto: true, real: true, forced: a2 }, { getOrInsert: function getOrInsert(t3, e3) {
      if (l2(r2(this), t3)) return o2(this, t3);
      h2(this, t3, e3);
      return e3;
    } });
  }, 4979(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(4576), s2 = i2(7751), a2 = i2(6980), o2 = i2(4913).f, l2 = i2(9297), h2 = i2(679), c2 = i2(3167), d2 = i2(2603), u2 = i2(5002), p2 = i2(8574), g2 = i2(3724), m2 = i2(6395), f2 = "DOMException", b2 = s2("Error"), y2 = s2(f2), v2 = function DOMException() {
      h2(this, w2);
      var t3 = arguments.length, e3 = d2(t3 < 1 ? void 0 : arguments[0]), i3 = d2(t3 < 2 ? void 0 : arguments[1], "Error"), n3 = new y2(e3, i3), r3 = new b2(e3);
      r3.name = f2;
      o2(n3, "stack", a2(1, p2(r3.stack, 1)));
      c2(n3, this, v2);
      return n3;
    }, w2 = v2.prototype = y2.prototype, A2 = "stack" in new b2(f2), x2 = "stack" in new y2(1, 2), E2 = y2 && g2 && Object.getOwnPropertyDescriptor(r2, f2), _2 = !(!E2 || E2.writable && E2.configurable), T2 = A2 && !_2 && !x2;
    n2({ global: true, constructor: true, forced: m2 || T2 }, { DOMException: T2 ? v2 : y2 });
    var S2 = s2(f2), C2 = S2.prototype;
    if (C2.constructor !== S2) {
      m2 || o2(C2, "constructor", a2(1, S2));
      for (var D2 in u2) if (l2(u2, D2)) {
        var P2 = u2[D2], M2 = P2.s;
        l2(S2, M2) || o2(S2, M2, a2(6, P2.c));
      }
    }
  }, 4603(t2, e2, i2) {
    var n2 = i2(6840), r2 = i2(9504), s2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = r2(l2.append), c2 = r2(l2.delete), d2 = r2(l2.forEach), u2 = r2([].push), p2 = new o2("a=1&a=2&b=3");
    p2.delete("a", 1);
    p2.delete("b", void 0);
    p2 + "" != "a=2" && n2(l2, "delete", function(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var n3 = [];
      d2(this, function(t4, e4) {
        u2(n3, { key: e4, value: t4 });
      });
      a2(e3, 1);
      for (var r3, o3 = s2(t3), l3 = s2(i3), p3 = 0, g2 = 0, m2 = false, f2 = n3.length; p3 < f2; ) {
        r3 = n3[p3++];
        if (m2 || r3.key === o3) {
          m2 = true;
          c2(this, r3.key);
        } else g2++;
      }
      for (; g2 < f2; ) (r3 = n3[g2++]).key === o3 && r3.value === l3 || h2(this, r3.key, r3.value);
    }, { enumerable: true, unsafe: true });
  }, 7566(t2, e2, i2) {
    var n2 = i2(6840), r2 = i2(9504), s2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = r2(l2.getAll), c2 = r2(l2.has), d2 = new o2("a=1");
    !d2.has("a", 2) && d2.has("a", void 0) || n2(l2, "has", function has(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var n3 = h2(this, t3);
      a2(e3, 1);
      for (var r3 = s2(i3), o3 = 0; o3 < n3.length; ) if (n3[o3++] === r3) return true;
      return false;
    }, { enumerable: true, unsafe: true });
  }, 8721(t2, e2, i2) {
    var n2 = i2(3724), r2 = i2(9504), s2 = i2(2106), a2 = URLSearchParams.prototype, o2 = r2(a2.forEach);
    n2 && !("size" in a2) && s2(a2, "size", { get: function size() {
      var t3 = 0;
      o2(this, function() {
        t3++;
      });
      return t3;
    }, configurable: true, enumerable: true });
  }, 5781(t2, e2, i2) {
    var n2 = i2(6518), r2 = i2(7751), s2 = i2(2812), a2 = i2(655), o2 = i2(7416), l2 = r2("URL");
    n2({ target: "URL", stat: true, forced: !o2 }, { parse: function parse(t3) {
      var e3 = s2(arguments.length, 1), i3 = a2(t3), n3 = e3 < 2 || void 0 === arguments[1] ? void 0 : a2(arguments[1]);
      try {
        return new l2(i3, n3);
      } catch (t4) {
        return null;
      }
    } });
  } };
  var e = {};
  function __webpack_require__(i2) {
    var n2 = e[i2];
    if (void 0 !== n2) return n2.exports;
    var r2 = e[i2] = { exports: {} };
    t[i2].call(r2.exports, r2, r2.exports, __webpack_require__);
    return r2.exports;
  }
  __webpack_require__.d = (t2, e2) => {
    for (var i2 in e2) __webpack_require__.o(e2, i2) && !__webpack_require__.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  };
  __webpack_require__.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
  __webpack_require__(4114), __webpack_require__(6573), __webpack_require__(8100), __webpack_require__(7936), __webpack_require__(8111), __webpack_require__(8237), __webpack_require__(5367), __webpack_require__(2731), __webpack_require__(3068), __webpack_require__(9577), __webpack_require__(6632), __webpack_require__(4226), __webpack_require__(9486), __webpack_require__(456), __webpack_require__(5781);
  var i = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type);
  var n = [1e-3, 0, 0, 1e-3, 0, 0];
  var r = 1.35;
  var s = 1;
  var a = 2;
  var o = 4;
  var l = 16;
  var h = 32;
  var c = 64;
  var d = 128;
  var u = 256;
  var p = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 };
  var g = "pdfjs_internal_editor_";
  var m = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 };
  var f = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 };
  var b = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 };
  var y = 1;
  var v = 2;
  var w = 0;
  var A = 1;
  var x = 2;
  var E = 3;
  var _ = 3;
  var T = 4;
  var S = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
  var C = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 };
  var D = 1;
  var P = 2;
  var M = 3;
  var k = 4;
  var I = 5;
  var R = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
  var B = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 };
  var O = 0;
  var L = 1;
  var N = 2;
  var U = 3;
  var H = 4;
  var z = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
  var j = R.WARNINGS;
  function setVerbosityLevel(t2) {
    Number.isInteger(t2) && (j = t2);
  }
  function getVerbosityLevel() {
    return j;
  }
  function info(t2) {
    j >= R.INFOS && console.info(`Info: ${t2}`);
  }
  function warn(t2) {
    j >= R.WARNINGS && console.warn(`Warning: ${t2}`);
  }
  function unreachable(t2) {
    throw new Error(t2);
  }
  function assert(t2, e2) {
    t2 || unreachable(e2);
  }
  function createValidAbsoluteUrl(t2, e2 = null, i2 = null) {
    if (!t2) return null;
    if (i2 && "string" == typeof t2) {
      if (i2.addDefaultProtocol && t2.startsWith("www.")) {
        const e3 = t2.match(/\./g);
        e3?.length >= 2 && (t2 = `http://${t2}`);
      }
      if (i2.tryConvertEncoding) try {
        t2 = (function stringToUTF8String(t3) {
          return decodeURIComponent(escape(t3));
        })(t2);
      } catch {
      }
    }
    const n2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return (function _isValidProtocol(t3) {
      switch (t3?.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "mailto:":
        case "tel:":
          return true;
        default:
          return false;
      }
    })(n2) ? n2 : null;
  }
  function updateUrlHash(t2, e2, i2 = false) {
    const n2 = URL.parse(t2);
    if (n2) {
      n2.hash = e2;
      return n2.href;
    }
    return i2 && createValidAbsoluteUrl(t2, "http://example.com") ? t2.split("#", 1)[0] + (e2 ? `#${e2}` : "") : "";
  }
  function stripPath(t2) {
    return t2.substring(t2.lastIndexOf("/") + 1);
  }
  function shadow(t2, e2, i2, n2 = false) {
    Object.defineProperty(t2, e2, { value: i2, enumerable: !n2, configurable: true, writable: false });
    return i2;
  }
  var G = (function BaseExceptionClosure() {
    function BaseException(t2, e2) {
      this.message = t2;
      this.name = e2;
    }
    BaseException.prototype = new Error();
    BaseException.constructor = BaseException;
    return BaseException;
  })();
  var PasswordException = class extends G {
    constructor(t2, e2) {
      super(t2, "PasswordException");
      this.code = e2;
    }
  };
  var UnknownErrorException = class extends G {
    constructor(t2, e2) {
      super(t2, "UnknownErrorException");
      this.details = e2;
    }
  };
  var InvalidPDFException = class extends G {
    constructor(t2) {
      super(t2, "InvalidPDFException");
    }
  };
  var ResponseException = class extends G {
    constructor(t2, e2, i2) {
      super(t2, "ResponseException");
      this.status = e2;
      this.missing = i2;
    }
  };
  var FormatError = class extends G {
    constructor(t2) {
      super(t2, "FormatError");
    }
  };
  var AbortException = class extends G {
    constructor(t2) {
      super(t2, "AbortException");
    }
  };
  function stringToBytes(t2) {
    "string" != typeof t2 && unreachable("Invalid argument for stringToBytes");
    const e2 = t2.length, i2 = new Uint8Array(e2);
    for (let n2 = 0; n2 < e2; ++n2) i2[n2] = 255 & t2.charCodeAt(n2);
    return i2;
  }
  var FeatureTest = class {
    static get isLittleEndian() {
      return shadow(this, "isLittleEndian", (function isLittleEndian() {
        const t2 = new Uint8Array(4);
        t2[0] = 1;
        return 1 === new Uint32Array(t2.buffer, 0, 1)[0];
      })());
    }
    static get isEvalSupported() {
      return shadow(this, "isEvalSupported", (function isEvalSupported() {
        try {
          new Function("");
          return true;
        } catch {
          return false;
        }
      })());
    }
    static get isOffscreenCanvasSupported() {
      return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
    }
    static get isImageDecoderSupported() {
      return shadow(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder);
    }
    static get isFloat16ArraySupported() {
      return shadow(this, "isFloat16ArraySupported", "undefined" != typeof Float16Array);
    }
    static get isSanitizerSupported() {
      return shadow(this, "isSanitizerSupported", "undefined" != typeof Sanitizer);
    }
    static get platform() {
      const { platform: t2, userAgent: e2 } = navigator;
      return shadow(this, "platform", { isAndroid: e2.includes("Android"), isLinux: t2.includes("Linux"), isMac: t2.includes("Mac"), isWindows: t2.includes("Win"), isFirefox: e2.includes("Firefox") });
    }
    static get isCSSRoundSupported() {
      return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
    }
  };
  var W = Array.from(Array(256).keys(), (t2) => t2.toString(16).padStart(2, "0"));
  var Util = class {
    static makeHexColor(t2, e2, i2) {
      return `#${W[t2]}${W[e2]}${W[i2]}`;
    }
    static domMatrixToTransform(t2) {
      return [t2.a, t2.b, t2.c, t2.d, t2.e, t2.f];
    }
    static scaleMinMax(t2, e2) {
      let i2;
      if (t2[0]) {
        if (t2[0] < 0) {
          i2 = e2[0];
          e2[0] = e2[2];
          e2[2] = i2;
        }
        e2[0] *= t2[0];
        e2[2] *= t2[0];
        if (t2[3] < 0) {
          i2 = e2[1];
          e2[1] = e2[3];
          e2[3] = i2;
        }
        e2[1] *= t2[3];
        e2[3] *= t2[3];
      } else {
        i2 = e2[0];
        e2[0] = e2[1];
        e2[1] = i2;
        i2 = e2[2];
        e2[2] = e2[3];
        e2[3] = i2;
        if (t2[1] < 0) {
          i2 = e2[1];
          e2[1] = e2[3];
          e2[3] = i2;
        }
        e2[1] *= t2[1];
        e2[3] *= t2[1];
        if (t2[2] < 0) {
          i2 = e2[0];
          e2[0] = e2[2];
          e2[2] = i2;
        }
        e2[0] *= t2[2];
        e2[2] *= t2[2];
      }
      e2[0] += t2[4];
      e2[1] += t2[5];
      e2[2] += t2[4];
      e2[3] += t2[5];
    }
    static transform(t2, e2) {
      return [t2[0] * e2[0] + t2[2] * e2[1], t2[1] * e2[0] + t2[3] * e2[1], t2[0] * e2[2] + t2[2] * e2[3], t2[1] * e2[2] + t2[3] * e2[3], t2[0] * e2[4] + t2[2] * e2[5] + t2[4], t2[1] * e2[4] + t2[3] * e2[5] + t2[5]];
    }
    static multiplyByDOMMatrix(t2, e2) {
      return [t2[0] * e2.a + t2[2] * e2.b, t2[1] * e2.a + t2[3] * e2.b, t2[0] * e2.c + t2[2] * e2.d, t2[1] * e2.c + t2[3] * e2.d, t2[0] * e2.e + t2[2] * e2.f + t2[4], t2[1] * e2.e + t2[3] * e2.f + t2[5]];
    }
    static applyTransform(t2, e2, i2 = 0) {
      const n2 = t2[i2], r2 = t2[i2 + 1];
      t2[i2] = n2 * e2[0] + r2 * e2[2] + e2[4];
      t2[i2 + 1] = n2 * e2[1] + r2 * e2[3] + e2[5];
    }
    static applyTransformToBezier(t2, e2, i2 = 0) {
      const n2 = e2[0], r2 = e2[1], s2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5];
      for (let e3 = 0; e3 < 6; e3 += 2) {
        const h2 = t2[i2 + e3], c2 = t2[i2 + e3 + 1];
        t2[i2 + e3] = h2 * n2 + c2 * s2 + o2;
        t2[i2 + e3 + 1] = h2 * r2 + c2 * a2 + l2;
      }
    }
    static applyInverseTransform(t2, e2) {
      const i2 = t2[0], n2 = t2[1], r2 = e2[0] * e2[3] - e2[1] * e2[2];
      t2[0] = (i2 * e2[3] - n2 * e2[2] + e2[2] * e2[5] - e2[4] * e2[3]) / r2;
      t2[1] = (-i2 * e2[1] + n2 * e2[0] + e2[4] * e2[1] - e2[5] * e2[0]) / r2;
    }
    static axialAlignedBoundingBox(t2, e2, i2) {
      const n2 = e2[0], r2 = e2[1], s2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5], h2 = t2[0], c2 = t2[1], d2 = t2[2], u2 = t2[3];
      let p2 = n2 * h2 + o2, g2 = p2, m2 = n2 * d2 + o2, f2 = m2, b2 = a2 * c2 + l2, y2 = b2, v2 = a2 * u2 + l2, w2 = v2;
      if (0 !== r2 || 0 !== s2) {
        const t3 = r2 * h2, e3 = r2 * d2, i3 = s2 * c2, n3 = s2 * u2;
        p2 += i3;
        f2 += i3;
        m2 += n3;
        g2 += n3;
        b2 += t3;
        w2 += t3;
        v2 += e3;
        y2 += e3;
      }
      i2[0] = Math.min(i2[0], p2, m2, g2, f2);
      i2[1] = Math.min(i2[1], b2, v2, y2, w2);
      i2[2] = Math.max(i2[2], p2, m2, g2, f2);
      i2[3] = Math.max(i2[3], b2, v2, y2, w2);
    }
    static inverseTransform(t2) {
      const e2 = t2[0] * t2[3] - t2[1] * t2[2];
      return [t2[3] / e2, -t2[1] / e2, -t2[2] / e2, t2[0] / e2, (t2[2] * t2[5] - t2[4] * t2[3]) / e2, (t2[4] * t2[1] - t2[5] * t2[0]) / e2];
    }
    static singularValueDecompose2dScale(t2, e2) {
      const i2 = t2[0], n2 = t2[1], r2 = t2[2], s2 = t2[3], a2 = i2 ** 2 + n2 ** 2, o2 = i2 * r2 + n2 * s2, l2 = r2 ** 2 + s2 ** 2, h2 = (a2 + l2) / 2, c2 = Math.sqrt(h2 ** 2 - (a2 * l2 - o2 ** 2));
      e2[0] = Math.sqrt(h2 + c2 || 1);
      e2[1] = Math.sqrt(h2 - c2 || 1);
    }
    static normalizeRect(t2) {
      const e2 = t2.slice(0);
      if (t2[0] > t2[2]) {
        e2[0] = t2[2];
        e2[2] = t2[0];
      }
      if (t2[1] > t2[3]) {
        e2[1] = t2[3];
        e2[3] = t2[1];
      }
      return e2;
    }
    static intersect(t2, e2) {
      const i2 = Math.max(Math.min(t2[0], t2[2]), Math.min(e2[0], e2[2])), n2 = Math.min(Math.max(t2[0], t2[2]), Math.max(e2[0], e2[2]));
      if (i2 > n2) return null;
      const r2 = Math.max(Math.min(t2[1], t2[3]), Math.min(e2[1], e2[3])), s2 = Math.min(Math.max(t2[1], t2[3]), Math.max(e2[1], e2[3]));
      return r2 > s2 ? null : [i2, r2, n2, s2];
    }
    static pointBoundingBox(t2, e2, i2) {
      i2[0] = Math.min(i2[0], t2);
      i2[1] = Math.min(i2[1], e2);
      i2[2] = Math.max(i2[2], t2);
      i2[3] = Math.max(i2[3], e2);
    }
    static rectBoundingBox(t2, e2, i2, n2, r2) {
      r2[0] = Math.min(r2[0], t2, i2);
      r2[1] = Math.min(r2[1], e2, n2);
      r2[2] = Math.max(r2[2], t2, i2);
      r2[3] = Math.max(r2[3], e2, n2);
    }
    static #t(t2, e2, i2, n2, r2, s2, a2, o2, l2, h2) {
      if (l2 <= 0 || l2 >= 1) return;
      const c2 = 1 - l2, d2 = l2 * l2, u2 = d2 * l2, p2 = c2 * (c2 * (c2 * t2 + 3 * l2 * e2) + 3 * d2 * i2) + u2 * n2, g2 = c2 * (c2 * (c2 * r2 + 3 * l2 * s2) + 3 * d2 * a2) + u2 * o2;
      h2[0] = Math.min(h2[0], p2);
      h2[1] = Math.min(h2[1], g2);
      h2[2] = Math.max(h2[2], p2);
      h2[3] = Math.max(h2[3], g2);
    }
    static #e(t2, e2, i2, n2, r2, s2, a2, o2, l2, h2, c2, d2) {
      if (Math.abs(l2) < 1e-12) {
        Math.abs(h2) >= 1e-12 && this.#t(t2, e2, i2, n2, r2, s2, a2, o2, -c2 / h2, d2);
        return;
      }
      const u2 = h2 ** 2 - 4 * c2 * l2;
      if (u2 < 0) return;
      const p2 = Math.sqrt(u2), g2 = 2 * l2;
      this.#t(t2, e2, i2, n2, r2, s2, a2, o2, (-h2 + p2) / g2, d2);
      this.#t(t2, e2, i2, n2, r2, s2, a2, o2, (-h2 - p2) / g2, d2);
    }
    static bezierBoundingBox(t2, e2, i2, n2, r2, s2, a2, o2, l2) {
      l2[0] = Math.min(l2[0], t2, a2);
      l2[1] = Math.min(l2[1], e2, o2);
      l2[2] = Math.max(l2[2], t2, a2);
      l2[3] = Math.max(l2[3], e2, o2);
      this.#e(t2, i2, r2, a2, e2, n2, s2, o2, 3 * (3 * (i2 - r2) - t2 + a2), 6 * (t2 - 2 * i2 + r2), 3 * (i2 - t2), l2);
      this.#e(t2, i2, r2, a2, e2, n2, s2, o2, 3 * (3 * (n2 - s2) - e2 + o2), 6 * (e2 - 2 * n2 + s2), 3 * (n2 - e2), l2);
    }
  };
  var V = null;
  var $ = null;
  function normalizeUnicode(t2) {
    if (!V) {
      V = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
      $ = /* @__PURE__ */ new Map([["\uFB05", "\u017Ft"]]);
    }
    return t2.replaceAll(V, (t3, e2, i2) => e2 ? e2.normalize("NFKC") : $.get(i2));
  }
  function getUuid() {
    if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
    const t2 = new Uint8Array(32);
    crypto.getRandomValues(t2);
    return (function bytesToString(t3) {
      "object" == typeof t3 && void 0 !== t3?.length || unreachable("Invalid argument for bytesToString");
      const e2 = t3.length, i2 = 8192;
      if (e2 < i2) return String.fromCharCode.apply(null, t3);
      const n2 = [];
      for (let r2 = 0; r2 < e2; r2 += i2) {
        const s2 = Math.min(r2 + i2, e2), a2 = t3.subarray(r2, s2);
        n2.push(String.fromCharCode.apply(null, a2));
      }
      return n2.join("");
    })(t2);
  }
  var q = "pdfjs_internal_id_";
  var makeArr = () => [];
  var makeMap = () => /* @__PURE__ */ new Map();
  var makeObj = () => /* @__PURE__ */ Object.create(null);
  function MathClamp(t2, e2, i2) {
    return Math.min(Math.max(t2, e2), i2);
  }
  "function" != typeof Blob.prototype.bytes && (Blob.prototype.bytes = async function() {
    return new Uint8Array(await this.arrayBuffer());
  });
  "function" != typeof Response.prototype.bytes && (Response.prototype.bytes = async function() {
    return new Uint8Array(await this.arrayBuffer());
  });
  "function" != typeof AbortSignal.any && (AbortSignal.any = function(t2) {
    const e2 = new AbortController(), { signal: i2 } = e2;
    for (const n2 of t2) if (n2.aborted) {
      e2.abort(n2.reason);
      return i2;
    }
    for (const n2 of t2) n2.addEventListener("abort", () => {
      e2.abort(n2.reason);
    }, { signal: i2 });
    return i2;
  });
  __webpack_require__(1701), __webpack_require__(4603), __webpack_require__(7566), __webpack_require__(8721);
  var XfaText = class _XfaText {
    static textContent(t2) {
      const e2 = [], i2 = { items: e2, styles: /* @__PURE__ */ Object.create(null) };
      !(function walk(t3) {
        if (!t3) return;
        let i3 = null;
        const n2 = t3.name;
        if ("#text" === n2) i3 = t3.value;
        else {
          if (!_XfaText.shouldBuildText(n2)) return;
          t3?.attributes?.textContent ? i3 = t3.attributes.textContent : t3.value && (i3 = t3.value);
        }
        null !== i3 && e2.push({ str: i3 });
        if (t3.children) for (const e3 of t3.children) walk(e3);
      })(t2);
      return i2;
    }
    static shouldBuildText(t2) {
      return !("textarea" === t2 || "input" === t2 || "option" === t2 || "select" === t2);
    }
  };
  var XfaLayer = class {
    static setupStorage(t2, e2, i2, n2, r2) {
      const s2 = n2.getValue(e2, { value: null });
      switch (i2.name) {
        case "textarea":
          null !== s2.value && (t2.textContent = s2.value);
          if ("print" === r2) break;
          t2.addEventListener("input", (t3) => {
            n2.setValue(e2, { value: t3.target.value });
          });
          break;
        case "input":
          if ("radio" === i2.attributes.type || "checkbox" === i2.attributes.type) {
            s2.value === i2.attributes.xfaOn ? t2.setAttribute("checked", true) : s2.value === i2.attributes.xfaOff && t2.removeAttribute("checked");
            if ("print" === r2) break;
            t2.addEventListener("change", (t3) => {
              n2.setValue(e2, { value: t3.target.checked ? t3.target.getAttribute("xfaOn") : t3.target.getAttribute("xfaOff") });
            });
          } else {
            null !== s2.value && t2.setAttribute("value", s2.value);
            if ("print" === r2) break;
            t2.addEventListener("input", (t3) => {
              n2.setValue(e2, { value: t3.target.value });
            });
          }
          break;
        case "select":
          if (null !== s2.value) {
            t2.setAttribute("value", s2.value);
            for (const t3 of i2.children) t3.attributes.value === s2.value ? t3.attributes.selected = true : t3.attributes.hasOwnProperty("selected") && delete t3.attributes.selected;
          }
          t2.addEventListener("input", (t3) => {
            const i3 = t3.target.options, r3 = -1 === i3.selectedIndex ? "" : i3[i3.selectedIndex].value;
            n2.setValue(e2, { value: r3 });
          });
      }
    }
    static setAttributes({ html: t2, element: e2, storage: i2 = null, intent: n2, linkService: r2 }) {
      const { attributes: s2 } = e2, a2 = t2 instanceof HTMLAnchorElement;
      "radio" === s2.type && (s2.name = `${s2.name}-${n2}`);
      for (const [e3, i3] of Object.entries(s2)) if (null != i3) switch (e3) {
        case "class":
          i3.length && t2.setAttribute(e3, i3.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t2.setAttribute("data-element-id", i3);
          break;
        case "style":
          Object.assign(t2.style, i3);
          break;
        case "textContent":
          t2.textContent = i3;
          break;
        default:
          (!a2 || "href" !== e3 && "newWindow" !== e3) && t2.setAttribute(e3, i3);
      }
      a2 && r2.addLinkAttributes(t2, s2.href, s2.newWindow);
      i2 && s2.dataId && this.setupStorage(t2, s2.dataId, e2, i2);
    }
    static render(t2) {
      const e2 = t2.annotationStorage, i2 = t2.linkService, n2 = t2.xfaHtml, r2 = t2.intent || "display", s2 = document.createElement(n2.name);
      n2.attributes && this.setAttributes({ html: s2, element: n2, intent: r2, linkService: i2 });
      const a2 = "richText" !== r2, o2 = t2.div;
      o2.append(s2);
      if (t2.viewport) {
        const e3 = `matrix(${t2.viewport.transform.join(",")})`;
        o2.style.transform = e3;
      }
      a2 && o2.setAttribute("class", "xfaLayer xfaFont");
      const l2 = [];
      if (0 === n2.children.length) {
        if (n2.value) {
          const t3 = document.createTextNode(n2.value);
          s2.append(t3);
          a2 && XfaText.shouldBuildText(n2.name) && l2.push(t3);
        }
        return { textDivs: l2 };
      }
      const h2 = [[n2, -1, s2]];
      for (; h2.length > 0; ) {
        const [t3, n3, s3] = h2.at(-1);
        if (n3 + 1 === t3.children.length) {
          h2.pop();
          continue;
        }
        const o3 = t3.children[++h2.at(-1)[1]];
        if (null === o3) continue;
        const { name: c2 } = o3;
        if ("#text" === c2) {
          const t4 = document.createTextNode(o3.value);
          l2.push(t4);
          s3.append(t4);
          continue;
        }
        const d2 = o3?.attributes?.xmlns ? document.createElementNS(o3.attributes.xmlns, c2) : document.createElement(c2);
        s3.append(d2);
        o3.attributes && this.setAttributes({ html: d2, element: o3, storage: e2, intent: r2, linkService: i2 });
        if (o3.children?.length > 0) h2.push([o3, -1, d2]);
        else if (o3.value) {
          const t4 = document.createTextNode(o3.value);
          a2 && XfaText.shouldBuildText(c2) && l2.push(t4);
          d2.append(t4);
        }
      }
      for (const t3 of o2.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t3.setAttribute("readOnly", true);
      return { textDivs: l2 };
    }
    static update(t2) {
      const e2 = `matrix(${t2.viewport.transform.join(",")})`;
      t2.div.style.transform = e2;
      t2.div.hidden = false;
    }
  };
  var X = "http://www.w3.org/2000/svg";
  var PixelsPerInch = class {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
  };
  async function fetchData(t2, e2 = "text") {
    if (isValidFetchUrl(t2, document.baseURI)) {
      const i2 = await fetch(t2);
      if (!i2.ok) throw new Error(i2.statusText);
      switch (e2) {
        case "blob":
          return i2.blob();
        case "bytes":
          return i2.bytes();
        case "json":
          return i2.json();
      }
      return i2.text();
    }
    return new Promise((i2, n2) => {
      const r2 = new XMLHttpRequest();
      r2.open("GET", t2, true);
      r2.responseType = "bytes" === e2 ? "arraybuffer" : e2;
      r2.onreadystatechange = () => {
        if (r2.readyState === XMLHttpRequest.DONE) if (200 !== r2.status && 0 !== r2.status) n2(new Error(r2.statusText));
        else {
          switch (e2) {
            case "bytes":
              i2(new Uint8Array(r2.response));
              return;
            case "blob":
            case "json":
              i2(r2.response);
              return;
          }
          i2(r2.responseText);
        }
      };
      r2.send(null);
    });
  }
  var PageViewport = class _PageViewport {
    constructor({ viewBox: t2, userUnit: e2, scale: i2, rotation: n2, offsetX: r2 = 0, offsetY: s2 = 0, dontFlip: a2 = false }) {
      this.viewBox = t2;
      this.userUnit = e2;
      this.scale = i2;
      this.rotation = n2;
      this.offsetX = r2;
      this.offsetY = s2;
      i2 *= e2;
      const o2 = (t2[2] + t2[0]) / 2, l2 = (t2[3] + t2[1]) / 2;
      let h2, c2, d2, u2, p2, g2, m2, f2;
      (n2 %= 360) < 0 && (n2 += 360);
      switch (n2) {
        case 180:
          h2 = -1;
          c2 = 0;
          d2 = 0;
          u2 = 1;
          break;
        case 90:
          h2 = 0;
          c2 = 1;
          d2 = 1;
          u2 = 0;
          break;
        case 270:
          h2 = 0;
          c2 = -1;
          d2 = -1;
          u2 = 0;
          break;
        case 0:
          h2 = 1;
          c2 = 0;
          d2 = 0;
          u2 = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      if (a2) {
        d2 = -d2;
        u2 = -u2;
      }
      if (0 === h2) {
        p2 = Math.abs(l2 - t2[1]) * i2 + r2;
        g2 = Math.abs(o2 - t2[0]) * i2 + s2;
        m2 = (t2[3] - t2[1]) * i2;
        f2 = (t2[2] - t2[0]) * i2;
      } else {
        p2 = Math.abs(o2 - t2[0]) * i2 + r2;
        g2 = Math.abs(l2 - t2[1]) * i2 + s2;
        m2 = (t2[2] - t2[0]) * i2;
        f2 = (t2[3] - t2[1]) * i2;
      }
      this.transform = [h2 * i2, c2 * i2, d2 * i2, u2 * i2, p2 - h2 * i2 * o2 - d2 * i2 * l2, g2 - c2 * i2 * o2 - u2 * i2 * l2];
      this.width = m2;
      this.height = f2;
    }
    get rawDims() {
      const t2 = this.viewBox;
      return shadow(this, "rawDims", { pageWidth: t2[2] - t2[0], pageHeight: t2[3] - t2[1], pageX: t2[0], pageY: t2[1] });
    }
    clone({ scale: t2 = this.scale, rotation: e2 = this.rotation, offsetX: i2 = this.offsetX, offsetY: n2 = this.offsetY, dontFlip: r2 = false } = {}) {
      return new _PageViewport({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: n2, dontFlip: r2 });
    }
    convertToViewportPoint(t2, e2) {
      const i2 = [t2, e2];
      Util.applyTransform(i2, this.transform);
      return i2;
    }
    convertToViewportRectangle(t2) {
      const e2 = [t2[0], t2[1]];
      Util.applyTransform(e2, this.transform);
      const i2 = [t2[2], t2[3]];
      Util.applyTransform(i2, this.transform);
      return [e2[0], e2[1], i2[0], i2[1]];
    }
    convertToPdfPoint(t2, e2) {
      const i2 = [t2, e2];
      Util.applyInverseTransform(i2, this.transform);
      return i2;
    }
  };
  var RenderingCancelledException = class extends G {
    constructor(t2, e2 = 0) {
      super(t2, "RenderingCancelledException");
      this.extraDelay = e2;
    }
  };
  function isDataScheme(t2) {
    const e2 = t2.length;
    let i2 = 0;
    for (; i2 < e2 && "" === t2[i2].trim(); ) i2++;
    return "data:" === t2.substring(i2, i2 + 5).toLowerCase();
  }
  function isPdfFile(t2) {
    return "string" == typeof t2 && /\.pdf$/i.test(t2);
  }
  function getFilenameFromUrl(t2) {
    [t2] = t2.split(/[#?]/, 1);
    return stripPath(t2);
  }
  function getPdfFilenameFromUrl(t2, e2 = "document.pdf") {
    if ("string" != typeof t2) return e2;
    if (isDataScheme(t2)) {
      warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
      return e2;
    }
    const i2 = ((t3) => {
      try {
        return new URL(t3);
      } catch {
        try {
          return new URL(decodeURIComponent(t3));
        } catch {
          try {
            return new URL(t3, "https://foo.bar");
          } catch {
            try {
              return new URL(decodeURIComponent(t3), "https://foo.bar");
            } catch {
              return null;
            }
          }
        }
      }
    })(t2);
    if (!i2) return e2;
    const decode = (t3) => {
      try {
        let e3 = decodeURIComponent(t3);
        if (e3.includes("/")) {
          e3 = stripPath(e3);
          if (/^\.pdf$/i.test(e3)) return t3;
        }
        return e3;
      } catch {
        return t3;
      }
    }, n2 = /\.pdf$/i, r2 = stripPath(i2.pathname);
    if (n2.test(r2)) return decode(r2);
    if (i2.searchParams.size > 0) {
      const getLast = (t4) => [...t4].findLast((t5) => n2.test(t5)), t3 = getLast(i2.searchParams.values()) ?? getLast(i2.searchParams.keys());
      if (t3) return decode(t3);
    }
    if (i2.hash) {
      const t3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i2.hash);
      if (t3) return decode(t3[0]);
    }
    return e2;
  }
  var StatTimer = class {
    #i = /* @__PURE__ */ new Map();
    times = [];
    time(t2) {
      this.#i.has(t2) && warn(`Timer is already running for ${t2}`);
      this.#i.set(t2, Date.now());
    }
    timeEnd(t2) {
      this.#i.has(t2) || warn(`Timer has not been started for ${t2}`);
      this.times.push({ name: t2, start: this.#i.get(t2), end: Date.now() });
      this.#i.delete(t2);
    }
    toString() {
      const t2 = Math.max(...this.times.map((t3) => t3.name.length));
      return this.times.map((e2) => `${e2.name.padEnd(t2)} ${e2.end - e2.start}ms
`).join("");
    }
  };
  function isValidFetchUrl(t2, e2) {
    const i2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return /https?:/.test(i2?.protocol ?? "");
  }
  function noContextMenu(t2) {
    t2.preventDefault();
  }
  function stopEvent(t2) {
    t2.preventDefault();
    t2.stopPropagation();
  }
  var PDFDateString = class {
    static #n;
    static toDateObject(t2) {
      if (t2 instanceof Date) return t2;
      if (!t2 || "string" != typeof t2) return null;
      this.#n ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
      const e2 = this.#n.exec(t2);
      if (!e2) return null;
      const i2 = parseInt(e2[1], 10);
      let n2 = parseInt(e2[2], 10);
      n2 = n2 >= 1 && n2 <= 12 ? n2 - 1 : 0;
      let r2 = parseInt(e2[3], 10);
      r2 = r2 >= 1 && r2 <= 31 ? r2 : 1;
      let s2 = parseInt(e2[4], 10);
      s2 = s2 >= 0 && s2 <= 23 ? s2 : 0;
      let a2 = parseInt(e2[5], 10);
      a2 = a2 >= 0 && a2 <= 59 ? a2 : 0;
      let o2 = parseInt(e2[6], 10);
      o2 = o2 >= 0 && o2 <= 59 ? o2 : 0;
      const l2 = e2[7] || "Z";
      let h2 = parseInt(e2[8], 10);
      h2 = h2 >= 0 && h2 <= 23 ? h2 : 0;
      let c2 = parseInt(e2[9], 10) || 0;
      c2 = c2 >= 0 && c2 <= 59 ? c2 : 0;
      if ("-" === l2) {
        s2 += h2;
        a2 += c2;
      } else if ("+" === l2) {
        s2 -= h2;
        a2 -= c2;
      }
      return new Date(Date.UTC(i2, n2, r2, s2, a2, o2));
    }
  };
  function getXfaPageViewport(t2, { scale: e2 = 1, rotation: i2 = 0 }) {
    const { width: n2, height: r2 } = t2.attributes.style, s2 = [0, 0, parseInt(n2), parseInt(r2)];
    return new PageViewport({ viewBox: s2, userUnit: 1, scale: e2, rotation: i2 });
  }
  function getRGB(t2) {
    if (t2.startsWith("#")) {
      const e2 = parseInt(t2.slice(1), 16);
      return [(16711680 & e2) >> 16, (65280 & e2) >> 8, 255 & e2];
    }
    if (t2.startsWith("rgb(")) return t2.slice(4, -1).split(",").map((t3) => parseInt(t3));
    if (t2.startsWith("rgba(")) return t2.slice(5, -1).split(",", 3).map((t3) => parseInt(t3));
    warn(`Not a valid color format: "${t2}"`);
    return [0, 0, 0];
  }
  function getCurrentTransform(t2) {
    const { a: e2, b: i2, c: n2, d: r2, e: s2, f: a2 } = t2.getTransform();
    return [e2, i2, n2, r2, s2, a2];
  }
  function getCurrentTransformInverse(t2) {
    const { a: e2, b: i2, c: n2, d: r2, e: s2, f: a2 } = t2.getTransform().invertSelf();
    return [e2, i2, n2, r2, s2, a2];
  }
  function setLayerDimensions(t2, e2, i2 = false, n2 = true) {
    if (e2 instanceof PageViewport) {
      const { pageWidth: n3, pageHeight: r2 } = e2.rawDims, { style: s2 } = t2, a2 = FeatureTest.isCSSRoundSupported, o2 = `var(--total-scale-factor) * ${n3}px`, l2 = `var(--total-scale-factor) * ${r2}px`, h2 = a2 ? `round(down, ${o2}, var(--scale-round-x))` : `calc(${o2})`, c2 = a2 ? `round(down, ${l2}, var(--scale-round-y))` : `calc(${l2})`;
      if (i2 && e2.rotation % 180 != 0) {
        s2.width = c2;
        s2.height = h2;
      } else {
        s2.width = h2;
        s2.height = c2;
      }
    }
    n2 && t2.setAttribute("data-main-rotation", e2.rotation);
  }
  var OutputScale = class _OutputScale {
    constructor() {
      const { pixelRatio: t2 } = _OutputScale;
      this.sx = t2;
      this.sy = t2;
    }
    get scaled() {
      return 1 !== this.sx || 1 !== this.sy;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t2, e2, i2, n2, r2 = -1) {
      let s2 = 1 / 0, a2 = 1 / 0, o2 = 1 / 0;
      (i2 = _OutputScale.capPixels(i2, r2)) > 0 && (s2 = Math.sqrt(i2 / (t2 * e2)));
      if (-1 !== n2) {
        a2 = n2 / t2;
        o2 = n2 / e2;
      }
      const l2 = Math.min(s2, a2, o2);
      if (this.sx > l2 || this.sy > l2) {
        this.sx = l2;
        this.sy = l2;
        return true;
      }
      return false;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(t2, e2) {
      if (e2 >= 0) {
        const i2 = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e2 / 100));
        return t2 > 0 ? Math.min(t2, i2) : i2;
      }
      return t2;
    }
  };
  var Y = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
  var ColorScheme = class {
    static get isDarkMode() {
      return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
    }
  };
  var CSSConstants = class {
    static get commentForegroundColor() {
      const t2 = document.createElement("span");
      t2.classList.add("comment", "sidebar");
      const { style: e2 } = t2;
      e2.width = e2.height = "0";
      e2.display = "none";
      e2.color = "var(--comment-fg-color)";
      document.body.append(t2);
      const { color: i2 } = window.getComputedStyle(t2);
      t2.remove();
      return shadow(this, "commentForegroundColor", getRGB(i2));
    }
  };
  function applyOpacity(t2, e2) {
    const i2 = 255 * (1 - (e2 = MathClamp(e2 ?? 1, 0, 1)));
    return t2.map((t3) => Math.round(t3 * e2 + i2));
  }
  function RGBToHSL(t2, e2) {
    const i2 = t2[0] / 255, n2 = t2[1] / 255, r2 = t2[2] / 255, s2 = Math.max(i2, n2, r2), a2 = Math.min(i2, n2, r2), o2 = (s2 + a2) / 2;
    if (s2 === a2) e2[0] = e2[1] = 0;
    else {
      const t3 = s2 - a2;
      e2[1] = o2 < 0.5 ? t3 / (s2 + a2) : t3 / (2 - s2 - a2);
      switch (s2) {
        case i2:
          e2[0] = 60 * ((n2 - r2) / t3 + (n2 < r2 ? 6 : 0));
          break;
        case n2:
          e2[0] = 60 * ((r2 - i2) / t3 + 2);
          break;
        case r2:
          e2[0] = 60 * ((i2 - n2) / t3 + 4);
      }
    }
    e2[2] = o2;
  }
  function HSLToRGB(t2, e2) {
    const i2 = t2[0], n2 = t2[1], r2 = t2[2], s2 = (1 - Math.abs(2 * r2 - 1)) * n2, a2 = s2 * (1 - Math.abs(i2 / 60 % 2 - 1)), o2 = r2 - s2 / 2;
    switch (Math.floor(i2 / 60)) {
      case 0:
        e2[0] = s2 + o2;
        e2[1] = a2 + o2;
        e2[2] = o2;
        break;
      case 1:
        e2[0] = a2 + o2;
        e2[1] = s2 + o2;
        e2[2] = o2;
        break;
      case 2:
        e2[0] = o2;
        e2[1] = s2 + o2;
        e2[2] = a2 + o2;
        break;
      case 3:
        e2[0] = o2;
        e2[1] = a2 + o2;
        e2[2] = s2 + o2;
        break;
      case 4:
        e2[0] = a2 + o2;
        e2[1] = o2;
        e2[2] = s2 + o2;
        break;
      case 5:
      case 6:
        e2[0] = s2 + o2;
        e2[1] = o2;
        e2[2] = a2 + o2;
    }
  }
  function computeLuminance(t2) {
    return t2 <= 0.03928 ? t2 / 12.92 : ((t2 + 0.055) / 1.055) ** 2.4;
  }
  function contrastRatio(t2, e2, i2) {
    HSLToRGB(t2, i2);
    i2.map(computeLuminance);
    const n2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    HSLToRGB(e2, i2);
    i2.map(computeLuminance);
    const r2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    return n2 > r2 ? (n2 + 0.05) / (r2 + 0.05) : (r2 + 0.05) / (n2 + 0.05);
  }
  var K = /* @__PURE__ */ new Map();
  function findContrastColor(t2, e2) {
    const i2 = t2[0] + 256 * t2[1] + 65536 * t2[2] + 16777216 * e2[0] + 4294967296 * e2[1] + 1099511627776 * e2[2];
    let n2 = K.get(i2);
    if (n2) return n2;
    const r2 = new Float32Array(9), s2 = r2.subarray(0, 3), a2 = r2.subarray(3, 6);
    RGBToHSL(t2, a2);
    const o2 = r2.subarray(6, 9);
    RGBToHSL(e2, o2);
    const l2 = o2[2] < 0.5, h2 = l2 ? 12 : 4.5;
    a2[2] = l2 ? Math.sqrt(a2[2]) : 1 - Math.sqrt(1 - a2[2]);
    if (contrastRatio(a2, o2, s2) < h2) {
      let t3, e3;
      if (l2) {
        t3 = a2[2];
        e3 = 1;
      } else {
        t3 = 0;
        e3 = a2[2];
      }
      const i3 = 5e-3;
      for (; e3 - t3 > i3; ) {
        const i4 = a2[2] = (t3 + e3) / 2;
        l2 === contrastRatio(a2, o2, s2) < h2 ? t3 = i4 : e3 = i4;
      }
      a2[2] = l2 ? e3 : t3;
    }
    HSLToRGB(a2, s2);
    n2 = Util.makeHexColor(Math.round(255 * s2[0]), Math.round(255 * s2[1]), Math.round(255 * s2[2]));
    K.set(i2, n2);
    return n2;
  }
  function renderRichText({ html: t2, dir: e2, className: i2 }, n2) {
    const r2 = document.createDocumentFragment();
    if ("string" == typeof t2) {
      const i3 = document.createElement("p");
      i3.dir = e2 || "auto";
      const n3 = t2.split(/(?:\r\n?|\n)/);
      for (let t3 = 0, e3 = n3.length; t3 < e3; ++t3) {
        const r3 = n3[t3];
        i3.append(document.createTextNode(r3));
        t3 < e3 - 1 && i3.append(document.createElement("br"));
      }
      r2.append(i3);
    } else XfaLayer.render({ xfaHtml: t2, div: r2, intent: "richText" });
    r2.firstElementChild.classList.add("richText", i2);
    n2.append(r2);
  }
  function makePathFromDrawOPS(t2) {
    const e2 = new Path2D();
    if (!t2) return e2;
    for (let i2 = 0, n2 = t2.length; i2 < n2; ) switch (t2[i2++]) {
      case O:
        e2.moveTo(t2[i2++], t2[i2++]);
        break;
      case L:
        e2.lineTo(t2[i2++], t2[i2++]);
        break;
      case N:
        e2.bezierCurveTo(t2[i2++], t2[i2++], t2[i2++], t2[i2++], t2[i2++], t2[i2++]);
        break;
      case U:
        e2.quadraticCurveTo(t2[i2++], t2[i2++], t2[i2++], t2[i2++]);
        break;
      case H:
        e2.closePath();
        break;
      default:
        warn(`Unrecognized drawing path operator: ${t2[i2 - 1]}`);
    }
    return e2;
  }
  __webpack_require__(4972), __webpack_require__(4628), __webpack_require__(7642), __webpack_require__(8004), __webpack_require__(3853), __webpack_require__(5876), __webpack_require__(2475), __webpack_require__(5024), __webpack_require__(1698), __webpack_require__(8454), __webpack_require__(9452), __webpack_require__(4979), __webpack_require__(3579), __webpack_require__(3110), __webpack_require__(9314), __webpack_require__(1148), __webpack_require__(9112);
  var EditorToolbar = class _EditorToolbar {
    #r = null;
    #s = null;
    #a;
    #o = null;
    #l = null;
    #h = null;
    #c = null;
    #d = null;
    static #u = null;
    constructor(t2) {
      this.#a = t2;
      _EditorToolbar.#u ||= Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" });
    }
    render() {
      const t2 = this.#r = document.createElement("div");
      t2.classList.add("editToolbar", "hidden");
      t2.setAttribute("role", "toolbar");
      const e2 = this.#a._uiManager._signal;
      if (e2 instanceof AbortSignal && !e2.aborted) {
        t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
        t2.addEventListener("pointerdown", _EditorToolbar.#p, { signal: e2 });
      }
      const i2 = this.#o = document.createElement("div");
      i2.className = "buttons";
      t2.append(i2);
      const n2 = this.#a.toolbarPosition;
      if (n2) {
        const { style: e3 } = t2, i3 = "ltr" === this.#a._uiManager.direction ? 1 - n2[0] : n2[0];
        e3.insetInlineEnd = 100 * i3 + "%";
        e3.top = `calc(${100 * n2[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return t2;
    }
    get div() {
      return this.#r;
    }
    static #p(t2) {
      t2.stopPropagation();
    }
    #g(t2) {
      this.#a._focusEventsAllowed = false;
      stopEvent(t2);
    }
    #m(t2) {
      this.#a._focusEventsAllowed = true;
      stopEvent(t2);
    }
    #f(t2) {
      const e2 = this.#a._uiManager._signal;
      if (!(e2 instanceof AbortSignal) || e2.aborted) return false;
      t2.addEventListener("focusin", this.#g.bind(this), { capture: true, signal: e2 });
      t2.addEventListener("focusout", this.#m.bind(this), { capture: true, signal: e2 });
      t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      return true;
    }
    hide() {
      this.#r.classList.add("hidden");
      this.#s?.hideDropdown();
    }
    show() {
      this.#r.classList.remove("hidden");
      this.#l?.shown();
      this.#h?.shown();
    }
    addDeleteButton() {
      const { editorType: t2, _uiManager: e2 } = this.#a, i2 = document.createElement("button");
      i2.classList.add("basic", "deleteButton");
      i2.tabIndex = 0;
      i2.setAttribute("data-l10n-id", _EditorToolbar.#u[t2]);
      this.#f(i2) && i2.addEventListener("click", (t3) => {
        e2.delete();
      }, { signal: e2._signal });
      this.#o.append(i2);
    }
    get #b() {
      const t2 = document.createElement("div");
      t2.className = "divider";
      return t2;
    }
    async addAltText(t2) {
      const e2 = await t2.render();
      this.#f(e2);
      this.#o.append(e2, this.#b);
      this.#l = t2;
    }
    addComment(t2, e2 = null) {
      if (this.#h) return;
      const i2 = t2.renderForToolbar();
      if (!i2) return;
      this.#f(i2);
      const n2 = this.#c = this.#b;
      if (e2) {
        this.#o.insertBefore(i2, e2);
        this.#o.insertBefore(n2, e2);
      } else this.#o.append(i2, n2);
      this.#h = t2;
      t2.toolbar = this;
    }
    addColorPicker(t2) {
      if (this.#s) return;
      this.#s = t2;
      const e2 = t2.renderButton();
      this.#f(e2);
      this.#o.append(e2, this.#b);
    }
    async addEditSignatureButton(t2) {
      const e2 = this.#d = await t2.renderEditButton(this.#a);
      this.#f(e2);
      this.#o.append(e2, this.#b);
    }
    removeButton(t2) {
      if ("comment" === t2) {
        this.#h?.removeToolbarCommentButton();
        this.#h = null;
        this.#c?.remove();
        this.#c = null;
      }
    }
    async addButton(t2, e2) {
      switch (t2) {
        case "colorPicker":
          e2 && this.addColorPicker(e2);
          break;
        case "altText":
          e2 && await this.addAltText(e2);
          break;
        case "editSignature":
          e2 && await this.addEditSignatureButton(e2);
          break;
        case "delete":
          this.addDeleteButton();
          break;
        case "comment":
          e2 && this.addComment(e2);
      }
    }
    async addButtonBefore(t2, e2, i2) {
      if (!e2 && "comment" === t2) return;
      const n2 = this.#o.querySelector(i2);
      n2 && "comment" === t2 && this.addComment(e2, n2);
    }
    updateEditSignatureButton(t2) {
      this.#d && (this.#d.title = t2);
    }
    remove() {
      this.#r.remove();
      this.#s?.destroy();
      this.#s = null;
    }
  };
  var FloatingToolbar = class {
    #o = null;
    #r = null;
    #y;
    constructor(t2) {
      this.#y = t2;
    }
    #v() {
      const t2 = this.#r = document.createElement("div");
      t2.className = "editToolbar";
      t2.setAttribute("role", "toolbar");
      const e2 = this.#y._signal;
      e2 instanceof AbortSignal && !e2.aborted && t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      const i2 = this.#o = document.createElement("div");
      i2.className = "buttons";
      t2.append(i2);
      this.#y.hasCommentManager() && this.#w("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
        this.#y.commentSelection("floating_button");
      });
      this.#w("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
        this.#y.highlightSelection("floating_button");
      });
      return t2;
    }
    #A(t2, e2) {
      let i2 = 0, n2 = 0;
      for (const r2 of t2) {
        const t3 = r2.y + r2.height;
        if (t3 < i2) continue;
        const s2 = r2.x + (e2 ? r2.width : 0);
        if (t3 > i2) {
          n2 = s2;
          i2 = t3;
        } else e2 ? s2 > n2 && (n2 = s2) : s2 < n2 && (n2 = s2);
      }
      return [e2 ? 1 - n2 : n2, i2];
    }
    show(t2, e2, i2) {
      const [n2, r2] = this.#A(e2, i2), { style: s2 } = this.#r ||= this.#v();
      t2.append(this.#r);
      s2.insetInlineEnd = 100 * n2 + "%";
      s2.top = `calc(${100 * r2}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      this.#r.remove();
    }
    #w(t2, e2, i2, n2) {
      const r2 = document.createElement("button");
      r2.classList.add("basic", t2);
      r2.tabIndex = 0;
      r2.setAttribute("data-l10n-id", e2);
      const s2 = document.createElement("span");
      r2.append(s2);
      s2.className = "visuallyHidden";
      s2.setAttribute("data-l10n-id", i2);
      const a2 = this.#y._signal;
      if (a2 instanceof AbortSignal && !a2.aborted) {
        r2.addEventListener("contextmenu", noContextMenu, { signal: a2 });
        r2.addEventListener("click", n2, { signal: a2 });
      }
      this.#o.append(r2);
    }
  };
  function bindEvents(t2, e2, i2) {
    for (const n2 of i2) e2.addEventListener(n2, t2[n2].bind(t2));
  }
  var CurrentPointers = class _CurrentPointers {
    static #x = NaN;
    static #E = null;
    static #_ = NaN;
    static #T = null;
    static initializeAndAddPointerId(t2) {
      (_CurrentPointers.#E ||= /* @__PURE__ */ new Set()).add(t2);
    }
    static setPointer(t2, e2) {
      _CurrentPointers.#x ||= e2;
      _CurrentPointers.#T ??= t2;
    }
    static setTimeStamp(t2) {
      _CurrentPointers.#_ = t2;
    }
    static isSamePointerId(t2) {
      return _CurrentPointers.#x === t2;
    }
    static isSamePointerIdOrRemove(t2) {
      if (_CurrentPointers.#x === t2) return true;
      _CurrentPointers.#E?.delete(t2);
      return false;
    }
    static isSamePointerType(t2) {
      return _CurrentPointers.#T === t2;
    }
    static isInitializedAndDifferentPointerType(t2) {
      return null !== _CurrentPointers.#T && !_CurrentPointers.isSamePointerType(t2);
    }
    static isSameTimeStamp(t2) {
      return _CurrentPointers.#_ === t2;
    }
    static isUsingMultiplePointers() {
      return _CurrentPointers.#E?.size >= 1;
    }
    static clearPointerType() {
      _CurrentPointers.#T = null;
    }
    static clearPointerIds() {
      _CurrentPointers.#x = NaN;
      _CurrentPointers.#E = null;
    }
    static clearTimeStamp() {
      _CurrentPointers.#_ = NaN;
    }
  };
  var IdManager = class {
    #S = 0;
    get id() {
      return `${g}${this.#S++}`;
    }
  };
  var ImageManager = class _ImageManager {
    #C = getUuid();
    #S = 0;
    #D = null;
    static get _isSVGFittingCanvas() {
      const t2 = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: true }), e2 = new Image();
      e2.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
      return shadow(this, "_isSVGFittingCanvas", e2.decode().then(() => {
        t2.drawImage(e2, 0, 0, 1, 1, 0, 0, 1, 3);
        return 0 === new Uint32Array(t2.getImageData(0, 0, 1, 1).data.buffer)[0];
      }));
    }
    async #P(t2, e2) {
      this.#D ||= /* @__PURE__ */ new Map();
      let i2 = this.#D.get(t2);
      if (null === i2) return null;
      if (i2?.bitmap) {
        i2.refCounter += 1;
        return i2;
      }
      try {
        i2 ||= { bitmap: null, id: `image_${this.#C}_${this.#S++}`, refCounter: 0, isSvg: false };
        let t3;
        if ("string" == typeof e2) {
          i2.url = e2;
          t3 = await fetchData(e2, "blob");
        } else e2 instanceof File ? t3 = i2.file = e2 : e2 instanceof Blob && (t3 = e2);
        if ("image/svg+xml" === t3.type) {
          const e3 = _ImageManager._isSVGFittingCanvas, n2 = new FileReader(), r2 = new Image(), s2 = new Promise((t4, s3) => {
            r2.onload = () => {
              i2.bitmap = r2;
              i2.isSvg = true;
              t4();
            };
            n2.onload = async () => {
              const t5 = i2.svgUrl = n2.result;
              r2.src = await e3 ? `${t5}#svgView(preserveAspectRatio(none))` : t5;
            };
            r2.onerror = n2.onerror = s3;
          });
          n2.readAsDataURL(t3);
          await s2;
        } else i2.bitmap = await createImageBitmap(t3);
        i2.refCounter = 1;
      } catch (t3) {
        warn(t3);
        i2 = null;
      }
      this.#D.set(t2, i2);
      i2 && this.#D.set(i2.id, i2);
      return i2;
    }
    async getFromFile(t2) {
      const { lastModified: e2, name: i2, size: n2, type: r2 } = t2;
      return this.#P(`${e2}_${i2}_${n2}_${r2}`, t2);
    }
    async getFromUrl(t2) {
      return this.#P(t2, t2);
    }
    async getFromBlob(t2, e2) {
      const i2 = await e2;
      return this.#P(t2, i2);
    }
    async getFromId(t2) {
      this.#D ||= /* @__PURE__ */ new Map();
      const e2 = this.#D.get(t2);
      if (!e2) return null;
      if (e2.bitmap) {
        e2.refCounter += 1;
        return e2;
      }
      if (e2.file) return this.getFromFile(e2.file);
      if (e2.blobPromise) {
        const { blobPromise: t3 } = e2;
        delete e2.blobPromise;
        return this.getFromBlob(e2.id, t3);
      }
      return this.getFromUrl(e2.url);
    }
    getFromCanvas(t2, e2) {
      this.#D ||= /* @__PURE__ */ new Map();
      let i2 = this.#D.get(t2);
      if (i2?.bitmap) {
        i2.refCounter += 1;
        return i2;
      }
      const n2 = new OffscreenCanvas(e2.width, e2.height);
      n2.getContext("2d").drawImage(e2, 0, 0);
      i2 = { bitmap: n2.transferToImageBitmap(), id: `image_${this.#C}_${this.#S++}`, refCounter: 1, isSvg: false };
      this.#D.set(t2, i2);
      this.#D.set(i2.id, i2);
      return i2;
    }
    getSvgUrl(t2) {
      const e2 = this.#D.get(t2);
      return e2?.isSvg ? e2.svgUrl : null;
    }
    deleteId(t2) {
      this.#D ||= /* @__PURE__ */ new Map();
      const e2 = this.#D.get(t2);
      if (!e2) return;
      e2.refCounter -= 1;
      if (0 !== e2.refCounter) return;
      const { bitmap: i2 } = e2;
      if (!e2.url && !e2.file) {
        const t3 = new OffscreenCanvas(i2.width, i2.height);
        t3.getContext("bitmaprenderer").transferFromImageBitmap(i2);
        e2.blobPromise = t3.convertToBlob();
      }
      i2.close?.();
      e2.bitmap = null;
    }
    isValidId(t2) {
      return t2.startsWith(`image_${this.#C}_`);
    }
  };
  var CommandManager = class {
    #M = [];
    #k = false;
    #I;
    #F = -1;
    constructor(t2 = 128) {
      this.#I = t2;
    }
    add({ cmd: t2, undo: e2, post: i2, mustExec: n2, type: r2 = NaN, overwriteIfSameType: s2 = false, keepUndo: a2 = false }) {
      n2 && t2();
      if (this.#k) return;
      const o2 = { cmd: t2, undo: e2, post: i2, type: r2 };
      if (-1 === this.#F) {
        this.#M.length > 0 && (this.#M.length = 0);
        this.#F = 0;
        this.#M.push(o2);
        return;
      }
      if (s2 && this.#M[this.#F].type === r2) {
        a2 && (o2.undo = this.#M[this.#F].undo);
        this.#M[this.#F] = o2;
        return;
      }
      const l2 = this.#F + 1;
      if (l2 === this.#I) this.#M.splice(0, 1);
      else {
        this.#F = l2;
        l2 < this.#M.length && this.#M.splice(l2);
      }
      this.#M.push(o2);
    }
    undo() {
      if (-1 === this.#F) return;
      this.#k = true;
      const { undo: t2, post: e2 } = this.#M[this.#F];
      t2();
      e2?.();
      this.#k = false;
      this.#F -= 1;
    }
    redo() {
      if (this.#F < this.#M.length - 1) {
        this.#F += 1;
        this.#k = true;
        const { cmd: t2, post: e2 } = this.#M[this.#F];
        t2();
        e2?.();
        this.#k = false;
      }
    }
    hasSomethingToUndo() {
      return -1 !== this.#F;
    }
    hasSomethingToRedo() {
      return this.#F < this.#M.length - 1;
    }
    cleanType(t2) {
      if (-1 !== this.#F) {
        for (let e2 = this.#F; e2 >= 0; e2--) if (this.#M[e2].type !== t2) {
          this.#M.splice(e2 + 1, this.#F - e2);
          this.#F = e2;
          return;
        }
        this.#M.length = 0;
        this.#F = -1;
      }
    }
    destroy() {
      this.#M = null;
    }
  };
  var KeyboardManager = class {
    constructor(t2) {
      this.buffer = [];
      this.callbacks = /* @__PURE__ */ new Map();
      this.allKeys = /* @__PURE__ */ new Set();
      const { isMac: e2 } = FeatureTest.platform;
      for (const [i2, n2, r2 = {}] of t2) for (const t3 of i2) {
        const i3 = t3.startsWith("mac+");
        if (e2 && i3) {
          this.callbacks.set(t3.slice(4), { callback: n2, options: r2 });
          this.allKeys.add(t3.split("+").at(-1));
        } else if (!e2 && !i3) {
          this.callbacks.set(t3, { callback: n2, options: r2 });
          this.allKeys.add(t3.split("+").at(-1));
        }
      }
    }
    #R(t2) {
      t2.altKey && this.buffer.push("alt");
      t2.ctrlKey && this.buffer.push("ctrl");
      t2.metaKey && this.buffer.push("meta");
      t2.shiftKey && this.buffer.push("shift");
      this.buffer.push(t2.key);
      const e2 = this.buffer.join("+");
      this.buffer.length = 0;
      return e2;
    }
    exec(t2, e2) {
      if (!this.allKeys.has(e2.key)) return;
      const i2 = this.callbacks.get(this.#R(e2));
      if (!i2) return;
      const { callback: n2, options: { bubbles: r2 = false, args: s2 = [], checker: a2 = null } } = i2;
      if (!a2 || a2(t2, e2)) {
        n2.bind(t2, ...s2, e2)();
        r2 || stopEvent(e2);
      }
    }
  };
  var ColorManager = class _ColorManager {
    static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
    get _colors() {
      const t2 = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
      !(function getColorValues(t3) {
        const e2 = document.createElement("span");
        e2.style.visibility = "hidden";
        e2.style.colorScheme = "only light";
        document.body.append(e2);
        for (const i2 of t3.keys()) {
          e2.style.color = i2;
          const n2 = window.getComputedStyle(e2).color;
          t3.set(i2, getRGB(n2));
        }
        e2.remove();
      })(t2);
      return shadow(this, "_colors", t2);
    }
    convert(t2) {
      const e2 = getRGB(t2);
      if (!window.matchMedia("(forced-colors: active)").matches) return e2;
      for (const [t3, i2] of this._colors) if (i2.every((t4, i3) => t4 === e2[i3])) return _ColorManager._colorsMapping.get(t3);
      return e2;
    }
    getHexCode(t2) {
      const e2 = this._colors.get(t2);
      return e2 ? Util.makeHexColor(...e2) : t2;
    }
  };
  var AnnotationEditorUIManager = class _AnnotationEditorUIManager {
    #B = new AbortController();
    #O = null;
    #L = null;
    #N = /* @__PURE__ */ new Map();
    #U = /* @__PURE__ */ new Map();
    #H = null;
    #z = null;
    #j = null;
    #G = null;
    #W = new CommandManager();
    #V = null;
    #$ = null;
    #q = null;
    #X = 0;
    #Y = /* @__PURE__ */ new Set();
    #K = null;
    #J = null;
    #Q = /* @__PURE__ */ new Set();
    _editorUndoBar = null;
    #Z = false;
    #tt = false;
    #et = false;
    #it = null;
    #nt = null;
    #rt = null;
    #st = null;
    #at = false;
    #ot = null;
    #lt = new IdManager();
    #ht = false;
    #ct = false;
    #dt = false;
    #ut = null;
    #pt = null;
    #gt = null;
    #mt = null;
    #ft = null;
    #bt = m.NONE;
    #yt = /* @__PURE__ */ new Set();
    #vt = null;
    #wt = null;
    #At = null;
    #xt = null;
    #Et = null;
    #_t = { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false };
    #Tt = [0, 0];
    #St = null;
    #Ct = null;
    #Dt = null;
    #Pt = null;
    #Mt = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
      const t2 = _AnnotationEditorUIManager.prototype, arrowChecker = (t3) => t3.#Ct.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t3.hasSomethingToControl(), textInputChecker = (t3, { target: e3 }) => {
        if (e3 instanceof HTMLInputElement) {
          const { type: t4 } = e3;
          return "text" !== t4 && "number" !== t4;
        }
        return true;
      }, e2 = this.TRANSLATE_SMALL, i2 = this.TRANSLATE_BIG;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], t2.selectAll, { checker: textInputChecker }], [["ctrl+z", "mac+meta+z"], t2.undo, { checker: textInputChecker }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t2.redo, { checker: textInputChecker }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t2.delete, { checker: textInputChecker }], [["Enter", "mac+Enter"], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#Ct.contains(e3) && !t3.isEnterHandled }], [[" ", "mac+ "], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#Ct.contains(document.activeElement) }], [["Escape", "mac+Escape"], t2.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t2.translateSelectedEditors, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2.translateSelectedEditors, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t2.translateSelectedEditors, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2.translateSelectedEditors, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t2.translateSelectedEditors, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2.translateSelectedEditors, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t2.translateSelectedEditors, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2.translateSelectedEditors, { args: [0, i2], checker: arrowChecker }]]));
    }
    constructor(t2, e2, i2, n2, r2, s2, a2, o2, l2, h2, c2, d2, u2, p2, g2, m2) {
      const f2 = this._signal = this.#B.signal;
      this.#Ct = t2;
      this.#Dt = e2;
      this.#Pt = i2;
      this.#z = n2;
      this.#V = r2;
      this.#wt = s2;
      this.#Et = o2;
      this._eventBus = a2;
      a2._on("editingaction", this.onEditingAction.bind(this), { signal: f2 });
      a2._on("pagechanging", this.onPageChanging.bind(this), { signal: f2 });
      a2._on("scalechanging", this.onScaleChanging.bind(this), { signal: f2 });
      a2._on("rotationchanging", this.onRotationChanging.bind(this), { signal: f2 });
      a2._on("setpreference", this.onSetPreference.bind(this), { signal: f2 });
      a2._on("switchannotationeditorparams", (t3) => this.updateParams(t3.type, t3.value), { signal: f2 });
      window.addEventListener("pointerdown", () => {
        this.#ct = true;
      }, { capture: true, signal: f2 });
      window.addEventListener("pointerup", () => {
        this.#ct = false;
      }, { capture: true, signal: f2 });
      window.addEventListener("beforeunload", this.#kt.bind(this), { capture: true, signal: f2 });
      this.#It();
      this.#Ft();
      this.#Rt();
      this.#j = o2.annotationStorage;
      this.#it = o2.filterFactory;
      this.#At = l2;
      this.#st = h2 || null;
      this.#Z = c2;
      this.#tt = d2;
      this.#et = u2;
      this.#ft = p2 || null;
      this.viewParameters = { realScale: PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
      this.isShiftKeyDown = false;
      this._editorUndoBar = g2 || null;
      this._supportsPinchToZoom = false !== m2;
      r2?.setSidebarUiManager(this);
    }
    destroy() {
      this.#Mt?.resolve();
      this.#Mt = null;
      this.#B?.abort();
      this.#B = null;
      this._signal = null;
      for (const t2 of this.#U.values()) t2.destroy();
      this.#U.clear();
      this.#N.clear();
      this.#Q.clear();
      this.#mt?.clear();
      this.#O = null;
      this.#yt.clear();
      this.#W.destroy();
      this.#z?.destroy();
      this.#V?.destroy();
      this.#wt?.destroy();
      this.#ot?.hide();
      this.#ot = null;
      this.#gt?.destroy();
      this.#gt = null;
      this.#L = null;
      if (this.#nt) {
        clearTimeout(this.#nt);
        this.#nt = null;
      }
      if (this.#St) {
        clearTimeout(this.#St);
        this.#St = null;
      }
      this._editorUndoBar?.destroy();
      this.#Et = null;
    }
    combinedSignal(t2) {
      return AbortSignal.any([this._signal, t2.signal]);
    }
    get mlManager() {
      return this.#ft;
    }
    get useNewAltTextFlow() {
      return this.#tt;
    }
    get useNewAltTextWhenAddingImage() {
      return this.#et;
    }
    get hcmFilter() {
      return shadow(this, "hcmFilter", this.#At ? this.#it.addHCMFilter(this.#At.foreground, this.#At.background) : "none");
    }
    get direction() {
      return shadow(this, "direction", getComputedStyle(this.#Ct).direction);
    }
    get _highlightColors() {
      return shadow(this, "_highlightColors", this.#st ? new Map(this.#st.split(",").map((t2) => {
        (t2 = t2.split("=").map((t3) => t3.trim()))[1] = t2[1].toUpperCase();
        return t2;
      })) : null);
    }
    get highlightColors() {
      const { _highlightColors: t2 } = this;
      if (!t2) return shadow(this, "highlightColors", null);
      const e2 = /* @__PURE__ */ new Map(), i2 = !!this.#At;
      for (const [n2, r2] of t2) {
        const t3 = n2.endsWith("_HCM");
        i2 && t3 ? e2.set(n2.replace("_HCM", ""), r2) : i2 || t3 || e2.set(n2, r2);
      }
      return shadow(this, "highlightColors", e2);
    }
    get highlightColorNames() {
      return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t2) => t2.reverse())) : null);
    }
    getNonHCMColor(t2) {
      if (!this._highlightColors) return t2;
      const e2 = this.highlightColorNames.get(t2);
      return this._highlightColors.get(e2) || t2;
    }
    getNonHCMColorName(t2) {
      return this.highlightColorNames.get(t2) || t2;
    }
    setCurrentDrawingSession(t2) {
      if (t2) {
        this.unselectAll();
        this.disableUserSelect(true);
      } else this.disableUserSelect(false);
      this.#q = t2;
    }
    setMainHighlightColorPicker(t2) {
      this.#gt = t2;
    }
    editAltText(t2, e2 = false) {
      this.#z?.editAltText(this, t2, e2);
    }
    hasCommentManager() {
      return !!this.#V;
    }
    editComment(t2, e2, i2, n2) {
      this.#V?.showDialog(this, t2, e2, i2, n2);
    }
    selectComment(t2, e2) {
      const i2 = this.#U.get(t2), n2 = i2?.getEditorByUID(e2);
      n2?.toggleComment(true, true);
    }
    updateComment(t2) {
      this.#V?.updateComment(t2.getData());
    }
    updatePopupColor(t2) {
      this.#V?.updatePopupColor(t2);
    }
    removeComment(t2) {
      this.#V?.removeComments([t2.uid]);
    }
    deleteComment(t2, e2) {
      const undo = () => {
        t2.comment = e2;
      };
      this.addCommands({ cmd: () => {
        this._editorUndoBar?.show(undo, "comment");
        this.toggleComment(null);
        t2.comment = null;
      }, undo, mustExec: true });
    }
    toggleComment(t2, e2, i2 = void 0) {
      this.#V?.toggleCommentPopup(t2, e2, i2);
    }
    makeCommentColor(t2, e2) {
      return t2 && this.#V?.makeCommentColor(t2, e2) || null;
    }
    getCommentDialogElement() {
      return this.#V?.dialogElement || null;
    }
    async waitForEditorsRendered(t2) {
      if (this.#U.has(t2 - 1)) return;
      const { resolve: e2, promise: i2 } = Promise.withResolvers(), onEditorsRendered = (i3) => {
        if (i3.pageNumber === t2) {
          this._eventBus._off("editorsrendered", onEditorsRendered);
          e2();
        }
      };
      this._eventBus.on("editorsrendered", onEditorsRendered);
      await i2;
    }
    getSignature(t2) {
      this.#wt?.getSignature({ uiManager: this, editor: t2 });
    }
    get signatureManager() {
      return this.#wt;
    }
    switchToMode(t2, e2) {
      this._eventBus.on("annotationeditormodechanged", e2, { once: true, signal: this._signal });
      this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t2 });
    }
    setPreference(t2, e2) {
      this._eventBus.dispatch("setpreference", { source: this, name: t2, value: e2 });
    }
    onSetPreference({ name: t2, value: e2 }) {
      if ("enableNewAltTextWhenAddingImage" === t2) this.#et = e2;
    }
    onPageChanging({ pageNumber: t2 }) {
      this.#X = t2 - 1;
    }
    deletePage(t2) {
      for (const e2 of this.getEditors(t2)) e2.remove();
      this.#U.delete(t2);
      this.#X === t2 && (this.#X = 0);
    }
    focusMainContainer() {
      this.#Ct.focus();
    }
    findParent(t2, e2) {
      for (const i2 of this.#U.values()) {
        const { x: n2, y: r2, width: s2, height: a2 } = i2.div.getBoundingClientRect();
        if (t2 >= n2 && t2 <= n2 + s2 && e2 >= r2 && e2 <= r2 + a2) return i2;
      }
      return null;
    }
    disableUserSelect(t2 = false) {
      this.#Dt.classList.toggle("noUserSelect", t2);
    }
    addShouldRescale(t2) {
      this.#Q.add(t2);
    }
    removeShouldRescale(t2) {
      this.#Q.delete(t2);
    }
    onScaleChanging({ scale: t2 }) {
      this.commitOrRemove();
      this.viewParameters.realScale = t2 * PixelsPerInch.PDF_TO_CSS_UNITS;
      for (const t3 of this.#Q) t3.onScaleChanging();
      this.#q?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t2 }) {
      this.commitOrRemove();
      this.viewParameters.rotation = t2;
    }
    #Bt({ anchorNode: t2 }) {
      return t2.nodeType === Node.TEXT_NODE ? t2.parentElement : t2;
    }
    #Ot(t2) {
      const { currentLayer: e2 } = this;
      if (e2.hasTextLayer(t2)) return e2;
      for (const e3 of this.#U.values()) if (e3.hasTextLayer(t2)) return e3;
      return null;
    }
    highlightSelection(t2 = "", e2 = false) {
      const i2 = document.getSelection();
      if (!i2 || i2.isCollapsed) return;
      const { anchorNode: n2, anchorOffset: r2, focusNode: s2, focusOffset: a2 } = i2, o2 = i2.toString(), l2 = this.#Bt(i2).closest(".textLayer"), h2 = this.getSelectionBoxes(l2);
      if (!h2) return;
      i2.empty();
      const c2 = this.#Ot(l2), d2 = this.#bt === m.NONE, callback = () => {
        const i3 = c2?.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t2, boxes: h2, anchorNode: n2, anchorOffset: r2, focusNode: s2, focusOffset: a2, text: o2 });
        d2 && this.showAllEditors("highlight", true, true);
        e2 && i3?.editComment();
      };
      d2 ? this.switchToMode(m.HIGHLIGHT, callback) : callback();
    }
    commentSelection(t2 = "") {
      this.highlightSelection(t2, true);
    }
    #kt(t2) {
      this.commitOrRemove();
      this.currentLayer?.endDrawingSession(false);
    }
    #Lt() {
      const t2 = document.getSelection();
      if (!t2 || t2.isCollapsed) return;
      const e2 = this.#Bt(t2).closest(".textLayer"), i2 = this.getSelectionBoxes(e2);
      if (i2) {
        this.#ot ||= new FloatingToolbar(this);
        this.#ot.show(e2, i2, "ltr" === this.direction);
      }
    }
    getAndRemoveDataFromAnnotationStorage(t2) {
      if (!this.#j) return null;
      const e2 = `${g}${t2}`, i2 = this.#j.getRawValue(e2);
      i2 && this.#j.remove(e2);
      return i2;
    }
    addToAnnotationStorage(t2) {
      t2.isEmpty() || !this.#j || this.#j.has(t2.id) || this.#j.setValue(t2.id, t2);
    }
    a11yAlert(t2, e2 = null) {
      const i2 = this.#Pt;
      if (i2) {
        i2.setAttribute("data-l10n-id", t2);
        e2 ? i2.setAttribute("data-l10n-args", JSON.stringify(e2)) : i2.removeAttribute("data-l10n-args");
      }
    }
    #Nt() {
      const t2 = document.getSelection();
      if (!t2 || t2.isCollapsed) {
        if (this.#vt) {
          this.#ot?.hide();
          this.#vt = null;
          this.#Ut({ hasSelectedText: false });
        }
        return;
      }
      const { anchorNode: e2 } = t2;
      if (e2 === this.#vt) return;
      const i2 = this.#Bt(t2).closest(".textLayer");
      if (i2) {
        this.#ot?.hide();
        this.#vt = e2;
        this.#Ut({ hasSelectedText: true });
        if (this.#bt === m.HIGHLIGHT || this.#bt === m.NONE) {
          this.#bt === m.HIGHLIGHT && this.showAllEditors("highlight", true, true);
          this.#at = this.isShiftKeyDown;
          if (!this.isShiftKeyDown) {
            const t3 = this.#bt === m.HIGHLIGHT ? this.#Ot(i2) : null;
            t3?.toggleDrawing();
            if (this.#ct) {
              const e3 = new AbortController(), i3 = this.combinedSignal(e3), pointerup = (i4) => {
                if ("pointerup" !== i4.type || 0 === i4.button) {
                  e3.abort();
                  t3?.toggleDrawing(true);
                  "pointerup" === i4.type && this.#Ht("main_toolbar");
                }
              };
              window.addEventListener("pointerup", pointerup, { signal: i3 });
              window.addEventListener("blur", pointerup, { signal: i3 });
            } else {
              t3?.toggleDrawing(true);
              this.#Ht("main_toolbar");
            }
          }
        }
      } else if (this.#vt) {
        this.#ot?.hide();
        this.#vt = null;
        this.#Ut({ hasSelectedText: false });
      }
    }
    #Ht(t2 = "") {
      this.#bt === m.HIGHLIGHT ? this.highlightSelection(t2) : this.#Z && this.#Lt();
    }
    #It() {
      document.addEventListener("selectionchange", this.#Nt.bind(this), { signal: this._signal });
    }
    #zt() {
      if (this.#rt) return;
      this.#rt = new AbortController();
      const t2 = this.combinedSignal(this.#rt);
      window.addEventListener("focus", this.focus.bind(this), { signal: t2 });
      window.addEventListener("blur", this.blur.bind(this), { signal: t2 });
    }
    #jt() {
      this.#rt?.abort();
      this.#rt = null;
    }
    blur() {
      this.isShiftKeyDown = false;
      if (this.#at) {
        this.#at = false;
        this.#Ht("main_toolbar");
      }
      if (!this.hasSelection) return;
      const { activeElement: t2 } = document;
      for (const e2 of this.#yt) if (e2.div.contains(t2)) {
        this.#pt = [e2, t2];
        e2._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!this.#pt) return;
      const [t2, e2] = this.#pt;
      this.#pt = null;
      e2.addEventListener("focusin", () => {
        t2._focusEventsAllowed = true;
      }, { once: true, signal: this._signal });
      e2.focus();
    }
    #Rt() {
      if (this.#ut) return;
      this.#ut = new AbortController();
      const t2 = this.combinedSignal(this.#ut);
      window.addEventListener("keydown", this.keydown.bind(this), { signal: t2 });
      window.addEventListener("keyup", this.keyup.bind(this), { signal: t2 });
    }
    #Gt() {
      this.#ut?.abort();
      this.#ut = null;
    }
    #Wt() {
      if (this.#$) return;
      this.#$ = new AbortController();
      const t2 = this.combinedSignal(this.#$);
      document.addEventListener("copy", this.copy.bind(this), { signal: t2 });
      document.addEventListener("cut", this.cut.bind(this), { signal: t2 });
      document.addEventListener("paste", this.paste.bind(this), { signal: t2 });
    }
    #Vt() {
      this.#$?.abort();
      this.#$ = null;
    }
    #Ft() {
      const t2 = this._signal;
      document.addEventListener("dragover", this.dragOver.bind(this), { signal: t2 });
      document.addEventListener("drop", this.drop.bind(this), { signal: t2 });
    }
    addEditListeners() {
      this.#Rt();
      this.setEditingState(true);
    }
    removeEditListeners() {
      this.#Gt();
      this.setEditingState(false);
    }
    dragOver(t2) {
      for (const { type: e2 } of t2.dataTransfer.items) for (const i2 of this.#J) if (i2.isHandlingMimeForPasting(e2)) {
        t2.dataTransfer.dropEffect = "copy";
        t2.preventDefault();
        return;
      }
    }
    drop(t2) {
      for (const e2 of t2.dataTransfer.items) for (const i2 of this.#J) if (i2.isHandlingMimeForPasting(e2.type)) {
        i2.paste(e2, this.currentLayer);
        t2.preventDefault();
        return;
      }
    }
    copy(t2) {
      t2.preventDefault();
      this.#O?.commitOrRemove();
      if (!this.hasSelection) return;
      const e2 = [];
      for (const t3 of this.#yt) {
        const i2 = t3.serialize(true);
        i2 && e2.push(i2);
      }
      0 !== e2.length && t2.clipboardData.setData("application/pdfjs", JSON.stringify(e2));
    }
    cut(t2) {
      this.copy(t2);
      this.delete();
    }
    async paste(t2) {
      t2.preventDefault();
      const { clipboardData: e2 } = t2;
      for (const t3 of e2.items) for (const e3 of this.#J) if (e3.isHandlingMimeForPasting(t3.type)) {
        e3.paste(t3, this.currentLayer);
        return;
      }
      let i2 = e2.getData("application/pdfjs");
      if (!i2) return;
      try {
        i2 = JSON.parse(i2);
      } catch (t3) {
        warn(`paste: "${t3.message}".`);
        return;
      }
      if (!Array.isArray(i2)) return;
      this.unselectAll();
      const n2 = this.currentLayer;
      try {
        const t3 = [];
        for (const e3 of i2) {
          const i3 = await n2.deserialize(e3);
          if (!i3) return;
          t3.push(i3);
        }
        const cmd = () => {
          for (const e3 of t3) this.#$t(e3);
          this.#qt(t3);
        }, undo = () => {
          for (const e3 of t3) e3.remove();
        };
        this.addCommands({ cmd, undo, mustExec: true });
      } catch (t3) {
        warn(`paste: "${t3.message}".`);
      }
    }
    keydown(t2) {
      this.isShiftKeyDown || "Shift" !== t2.key || (this.isShiftKeyDown = true);
      this.#bt === m.NONE || this.isEditorHandlingKeyboard || _AnnotationEditorUIManager._keyboardManager.exec(this, t2);
    }
    keyup(t2) {
      if (this.isShiftKeyDown && "Shift" === t2.key) {
        this.isShiftKeyDown = false;
        if (this.#at) {
          this.#at = false;
          this.#Ht("main_toolbar");
        }
      }
    }
    onEditingAction({ name: t2 }) {
      switch (t2) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t2]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
        case "commentSelection":
          this.commentSelection("context_menu");
      }
    }
    updatePageIndex(t2, e2) {
      for (const i3 of this.getEditors(t2)) i3.pageIndex = e2;
      const i2 = this.#H.get(t2);
      if (i2) {
        i2.pageIndex = e2;
        this.#U.set(e2, i2);
        this.#ht ? i2.enable() : i2.disable();
      }
    }
    startUpdatePages() {
      this.#H = new Map(this.#U);
      this.#U.clear();
    }
    endUpdatePages() {
      this.#H = null;
    }
    clonePage(t2, e2) {
      for (const i2 of this.getEditors(t2)) {
        const t3 = i2.serialize(i2.mode !== m.HIGHLIGHT);
        if (t3) {
          t3.pageIndex = e2;
          t3.id = this.getId();
          t3.isClone = true;
          delete t3.popupRef;
          this.#j.setValue(t3.id, t3);
        }
      }
    }
    findClonesForPage(t2) {
      const e2 = [], { pageIndex: i2 } = t2;
      for (const [n2, r2] of this.#j) if (r2.pageIndex === i2 && r2.isClone) {
        this.#j.remove(n2);
        e2.push(t2.deserialize(r2).then((e3) => {
          if (e3) {
            e3.isClone = true;
            t2.addOrRebuild(e3);
          }
        }));
      }
      return Promise.all(e2);
    }
    #Ut(t2) {
      if (Object.entries(t2).some(([t3, e2]) => this.#_t[t3] !== e2)) {
        this._eventBus.dispatch("editingstateschanged", { source: this, details: Object.assign(this.#_t, t2) });
        this.#bt === m.HIGHLIGHT && false === t2.hasSelectedEditor && this.#Xt([[f.HIGHLIGHT_FREE, true]]);
      }
    }
    #Xt(t2) {
      this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t2 });
    }
    setEditingState(t2) {
      if (t2) {
        this.#zt();
        this.#Wt();
        this.#Ut({ isEditing: this.#bt !== m.NONE, isEmpty: this.#Yt(), hasSomethingToUndo: this.#W.hasSomethingToUndo(), hasSomethingToRedo: this.#W.hasSomethingToRedo(), hasSelectedEditor: false });
      } else {
        this.#jt();
        this.#Vt();
        this.#Ut({ isEditing: false });
        this.disableUserSelect(false);
      }
    }
    registerEditorTypes(t2) {
      if (!this.#J) {
        this.#J = t2;
        for (const t3 of this.#J) this.#Xt(t3.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return this.#lt.id;
    }
    get currentLayer() {
      return this.#U.get(this.#X);
    }
    getLayer(t2) {
      return this.#U.get(t2);
    }
    get currentPageIndex() {
      return this.#X;
    }
    addLayer(t2) {
      this.#U.set(t2.pageIndex, t2);
      this.#ht ? t2.enable() : t2.disable();
    }
    removeLayer(t2) {
      this.#U.delete(t2.pageIndex);
    }
    async updateMode(t2, e2 = null, i2 = false, n2 = false, r2 = false, s2 = false) {
      if (this.#bt !== t2) {
        if (this.#Mt) {
          await this.#Mt.promise;
          if (!this.#Mt) return;
        }
        this.#Mt = Promise.withResolvers();
        this.#q?.commitOrRemove();
        this.#bt === m.POPUP && this.#V?.hideSidebar();
        this.#V?.destroyPopup();
        this.#bt = t2;
        if (t2 !== m.NONE) {
          for (const t3 of this.#N.values()) t3.addStandaloneCommentButton();
          t2 === m.SIGNATURE && await this.#wt?.loadSignatures();
          i2 && CurrentPointers.clearPointerType();
          this.setEditingState(true);
          await this.#Kt();
          this.unselectAll();
          for (const e3 of this.#U.values()) e3.updateMode(t2);
          if (t2 === m.POPUP) {
            this.#L ||= await this.#Et.getAnnotationsByType(new Set(this.#J.map((t4) => t4._editorType)));
            const t3 = /* @__PURE__ */ new Set(), e3 = [];
            for (const i3 of this.#N.values()) {
              const { annotationElementId: n3, hasComment: r3, deleted: s3 } = i3;
              n3 && t3.add(n3);
              r3 && !s3 && e3.push(i3.getData());
            }
            for (const i3 of this.#L) {
              const { id: n3, popupRef: r3, contentsObj: s3 } = i3;
              r3 && s3?.str && !t3.has(n3) && !this.#Y.has(n3) && e3.push(i3);
            }
            this.#V?.showSidebar(e3);
          }
          if (e2) {
            for (const t3 of this.#N.values()) if (t3.uid === e2) {
              this.setSelected(t3);
              s2 ? t3.editComment() : r2 ? t3.enterInEditMode() : t3.focus();
            } else t3.unselect();
            this.#Mt.resolve();
          } else {
            n2 && this.addNewEditorFromKeyboard();
            this.#Mt.resolve();
          }
        } else {
          this.setEditingState(false);
          this.#Jt();
          for (const t3 of this.#N.values()) t3.hideStandaloneCommentButton();
          this._editorUndoBar?.hide();
          this.toggleComment(null);
          this.#Mt.resolve();
        }
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t2) {
      t2.mode !== this.#bt && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t2 });
    }
    updateParams(t2, e2) {
      if (this.#J) {
        switch (t2) {
          case f.CREATE:
            this.currentLayer.addNewEditor(e2);
            return;
          case f.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } });
            (this.#xt ||= /* @__PURE__ */ new Map()).set(t2, e2);
            this.showAllEditors("highlight", e2);
        }
        if (this.hasSelection) for (const i2 of this.#yt) i2.updateParams(t2, e2);
        else for (const i2 of this.#J) i2.updateDefaultParams(t2, e2);
      }
    }
    showAllEditors(t2, e2, i2 = false) {
      for (const i3 of this.#N.values()) i3.editorType === t2 && i3.show(e2);
      (this.#xt?.get(f.HIGHLIGHT_SHOW_ALL) ?? true) !== e2 && this.#Xt([[f.HIGHLIGHT_SHOW_ALL, e2]]);
    }
    enableWaiting(t2 = false) {
      if (this.#dt !== t2) {
        this.#dt = t2;
        for (const e2 of this.#U.values()) {
          t2 ? e2.disableClick() : e2.enableClick();
          e2.div.classList.toggle("waiting", t2);
        }
      }
    }
    async #Kt() {
      if (!this.#ht) {
        this.#ht = true;
        const t2 = [];
        for (const e2 of this.#U.values()) t2.push(e2.enable());
        await Promise.all(t2);
        for (const t3 of this.#N.values()) t3.enable();
      }
    }
    #Jt() {
      this.unselectAll();
      if (this.#ht) {
        this.#ht = false;
        for (const t2 of this.#U.values()) t2.disable();
        for (const t2 of this.#N.values()) t2.disable();
      }
    }
    *getEditors(t2) {
      for (const e2 of this.#N.values()) e2.pageIndex === t2 && (yield e2);
    }
    getEditor(t2) {
      return this.#N.get(t2);
    }
    addEditor(t2) {
      this.#N.set(t2.id, t2);
    }
    removeEditor(t2) {
      if (t2.div.contains(document.activeElement)) {
        this.#nt && clearTimeout(this.#nt);
        this.#nt = setTimeout(() => {
          this.focusMainContainer();
          this.#nt = null;
        }, 0);
      }
      this.#N.delete(t2.id);
      t2.annotationElementId && this.#mt?.delete(t2.annotationElementId);
      this.unselect(t2);
      t2.annotationElementId && this.#Y.has(t2.annotationElementId) || this.#j?.remove(t2.id);
    }
    addDeletedAnnotationElement(t2) {
      this.#Y.add(t2.annotationElementId);
      this.addChangedExistingAnnotation(t2);
      t2.deleted = true;
    }
    isDeletedAnnotationElement(t2) {
      return this.#Y.has(t2);
    }
    removeDeletedAnnotationElement(t2) {
      this.#Y.delete(t2.annotationElementId);
      this.removeChangedExistingAnnotation(t2);
      t2.deleted = false;
    }
    #$t(t2) {
      const e2 = this.#U.get(t2.pageIndex);
      if (e2) e2.addOrRebuild(t2);
      else {
        this.addEditor(t2);
        this.addToAnnotationStorage(t2);
      }
    }
    setActiveEditor(t2) {
      if (this.#O !== t2) {
        this.#O = t2;
        t2 && this.#Xt(t2.propertiesToUpdate);
      }
    }
    get #Qt() {
      let t2 = null;
      for (t2 of this.#yt) ;
      return t2;
    }
    updateUI(t2) {
      this.#Qt === t2 && this.#Xt(t2.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t2) {
      this.#Xt(t2.defaultPropertiesToUpdate);
    }
    toggleSelected(t2) {
      if (this.#yt.has(t2)) {
        this.#yt.delete(t2);
        t2.unselect();
        this.#Ut({ hasSelectedEditor: this.hasSelection });
      } else {
        this.#yt.add(t2);
        t2.select();
        this.#Xt(t2.propertiesToUpdate);
        this.#Ut({ hasSelectedEditor: true });
      }
    }
    setSelected(t2) {
      this.updateToolbar({ mode: t2.mode, editId: t2.uid });
      this.#q?.commitOrRemove();
      for (const e2 of this.#yt) e2 !== t2 && e2.unselect();
      this.#V?.destroyPopup();
      this.#yt.clear();
      this.#yt.add(t2);
      t2.select();
      this.#Xt(t2.propertiesToUpdate);
      this.#Ut({ hasSelectedEditor: true });
    }
    isSelected(t2) {
      return this.#yt.has(t2);
    }
    get firstSelectedEditor() {
      return this.#yt.values().next().value;
    }
    unselect(t2) {
      t2.unselect();
      this.#yt.delete(t2);
      this.#Ut({ hasSelectedEditor: this.hasSelection });
    }
    get hasSelection() {
      return 0 !== this.#yt.size;
    }
    get isEnterHandled() {
      return 1 === this.#yt.size && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      this.#W.undo();
      this.#Ut({ hasSomethingToUndo: this.#W.hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: this.#Yt() });
      this._editorUndoBar?.hide();
    }
    redo() {
      this.#W.redo();
      this.#Ut({ hasSomethingToUndo: true, hasSomethingToRedo: this.#W.hasSomethingToRedo(), isEmpty: this.#Yt() });
    }
    addCommands(t2) {
      this.#W.add(t2);
      this.#Ut({ hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: this.#Yt() });
    }
    cleanUndoStack(t2) {
      this.#W.cleanType(t2);
    }
    #Yt() {
      if (0 === this.#N.size) return true;
      if (1 === this.#N.size) for (const t2 of this.#N.values()) return t2.isEmpty();
      return false;
    }
    delete() {
      this.commitOrRemove();
      const t2 = this.currentLayer?.endDrawingSession(true);
      if (!this.hasSelection && !t2) return;
      const e2 = t2 ? [t2] : [...this.#yt], undo = () => {
        for (const t3 of e2) this.#$t(t3);
      };
      this.addCommands({ cmd: () => {
        this._editorUndoBar?.show(undo, 1 === e2.length ? e2[0].editorType : e2.length);
        for (const t3 of e2) t3.remove();
      }, undo, mustExec: true });
    }
    commitOrRemove() {
      this.#O?.commitOrRemove();
    }
    hasSomethingToControl() {
      return this.#O || this.hasSelection;
    }
    #qt(t2) {
      for (const t3 of this.#yt) t3.unselect();
      this.#yt.clear();
      for (const e2 of t2) if (!e2.isEmpty()) {
        this.#yt.add(e2);
        e2.select();
      }
      this.#Ut({ hasSelectedEditor: this.hasSelection });
    }
    selectAll() {
      for (const t2 of this.#yt) t2.commit();
      this.#qt(this.#N.values());
    }
    unselectAll() {
      if (this.#O) {
        this.#O.commitOrRemove();
        if (this.#bt !== m.NONE) return;
      }
      if (!this.#q?.commitOrRemove()) {
        this.#V?.destroyPopup();
        if (this.hasSelection) {
          for (const t2 of this.#yt) t2.unselect();
          this.#yt.clear();
          this.#Ut({ hasSelectedEditor: false });
        }
      }
    }
    translateSelectedEditors(t2, e2, i2 = false) {
      i2 || this.commitOrRemove();
      if (!this.hasSelection) return;
      this.#Tt[0] += t2;
      this.#Tt[1] += e2;
      const [n2, r2] = this.#Tt, s2 = [...this.#yt];
      this.#St && clearTimeout(this.#St);
      this.#St = setTimeout(() => {
        this.#St = null;
        this.#Tt[0] = this.#Tt[1] = 0;
        this.addCommands({ cmd: () => {
          for (const t3 of s2) if (this.#N.has(t3.id)) {
            t3.translateInPage(n2, r2);
            t3.translationDone();
          }
        }, undo: () => {
          for (const t3 of s2) if (this.#N.has(t3.id)) {
            t3.translateInPage(-n2, -r2);
            t3.translationDone();
          }
        }, mustExec: false });
      }, 1e3);
      for (const i3 of s2) {
        i3.translateInPage(t2, e2);
        i3.translationDone();
      }
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true);
        this.#K = /* @__PURE__ */ new Map();
        for (const t2 of this.#yt) this.#K.set(t2, { savedX: t2.x, savedY: t2.y, savedPageIndex: t2.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
      }
    }
    endDragSession() {
      if (!this.#K) return false;
      this.disableUserSelect(false);
      const t2 = this.#K;
      this.#K = null;
      let e2 = false;
      for (const [{ x: i2, y: n2, pageIndex: r2 }, s2] of t2) {
        s2.newX = i2;
        s2.newY = n2;
        s2.newPageIndex = r2;
        e2 ||= i2 !== s2.savedX || n2 !== s2.savedY || r2 !== s2.savedPageIndex;
      }
      if (!e2) return false;
      const move = (t3, e3, i2, n2) => {
        if (this.#N.has(t3.id)) {
          const r2 = this.#U.get(n2);
          if (r2) t3._setParentAndPosition(r2, e3, i2);
          else {
            t3.pageIndex = n2;
            t3.x = e3;
            t3.y = i2;
          }
        }
      };
      this.addCommands({ cmd: () => {
        for (const [e3, { newX: i2, newY: n2, newPageIndex: r2 }] of t2) move(e3, i2, n2, r2);
      }, undo: () => {
        for (const [e3, { savedX: i2, savedY: n2, savedPageIndex: r2 }] of t2) move(e3, i2, n2, r2);
      }, mustExec: true });
      return true;
    }
    dragSelectedEditors(t2, e2) {
      if (this.#K) for (const i2 of this.#K.keys()) i2.drag(t2, e2);
    }
    rebuild(t2) {
      if (null === t2.parent) {
        const e2 = this.getLayer(t2.pageIndex);
        if (e2) {
          e2.changeParent(t2);
          e2.addOrRebuild(t2);
        } else {
          this.addEditor(t2);
          this.addToAnnotationStorage(t2);
          t2.rebuild();
        }
      } else t2.parent.addOrRebuild(t2);
    }
    get isEditorHandlingKeyboard() {
      return this.getActive()?.shouldGetKeyboardEvents() || 1 === this.#yt.size && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t2) {
      return this.#O === t2;
    }
    getActive() {
      return this.#O;
    }
    getMode() {
      return this.#bt;
    }
    isEditingMode() {
      return this.#bt !== m.NONE;
    }
    get imageManager() {
      return shadow(this, "imageManager", new ImageManager());
    }
    getSelectionBoxes(t2) {
      if (!t2) return null;
      const e2 = document.getSelection();
      for (let i3 = 0, n3 = e2.rangeCount; i3 < n3; i3++) if (!t2.contains(e2.getRangeAt(i3).commonAncestorContainer)) return null;
      const { x: i2, y: n2, width: r2, height: s2 } = t2.getBoundingClientRect();
      let a2;
      switch (t2.getAttribute("data-main-rotation")) {
        case "90":
          a2 = (t3, e3, a3, o3) => ({ x: (e3 - n2) / s2, y: 1 - (t3 + a3 - i2) / r2, width: o3 / s2, height: a3 / r2 });
          break;
        case "180":
          a2 = (t3, e3, a3, o3) => ({ x: 1 - (t3 + a3 - i2) / r2, y: 1 - (e3 + o3 - n2) / s2, width: a3 / r2, height: o3 / s2 });
          break;
        case "270":
          a2 = (t3, e3, a3, o3) => ({ x: 1 - (e3 + o3 - n2) / s2, y: (t3 - i2) / r2, width: o3 / s2, height: a3 / r2 });
          break;
        default:
          a2 = (t3, e3, a3, o3) => ({ x: (t3 - i2) / r2, y: (e3 - n2) / s2, width: a3 / r2, height: o3 / s2 });
      }
      const o2 = [];
      for (let t3 = 0, i3 = e2.rangeCount; t3 < i3; t3++) {
        const i4 = e2.getRangeAt(t3);
        if (!i4.collapsed) for (const { x: t4, y: e3, width: n3, height: r3 } of i4.getClientRects()) 0 !== n3 && 0 !== r3 && o2.push(a2(t4, e3, n3, r3));
      }
      return 0 === o2.length ? null : o2;
    }
    addChangedExistingAnnotation({ annotationElementId: t2, id: e2 }) {
      (this.#G ||= /* @__PURE__ */ new Map()).set(t2, e2);
    }
    removeChangedExistingAnnotation({ annotationElementId: t2 }) {
      this.#G?.delete(t2);
    }
    renderAnnotationElement(t2) {
      const e2 = this.#G?.get(t2.data.id);
      if (!e2) return;
      const i2 = this.#j.getRawValue(e2);
      i2 && (this.#bt !== m.NONE || i2.hasBeenModified) && i2.renderAnnotationElement(t2);
    }
    setMissingCanvas(t2, e2, i2) {
      const n2 = this.#mt?.get(t2);
      if (n2) {
        n2.setCanvas(e2, i2);
        this.#mt.delete(t2);
      }
    }
    addMissingCanvas(t2, e2) {
      (this.#mt ||= /* @__PURE__ */ new Map()).set(t2, e2);
    }
  };
  var AltText = class _AltText {
    #l = null;
    #Zt = false;
    #te = null;
    #ee = null;
    #ie = null;
    #ne = null;
    #re = false;
    #se = null;
    #a = null;
    #ae = null;
    #oe = null;
    #le = false;
    static #he = null;
    static _l10n = null;
    constructor(t2) {
      this.#a = t2;
      this.#le = t2._uiManager.useNewAltTextFlow;
      _AltText.#he ||= Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" });
    }
    static initialize(t2) {
      _AltText._l10n ??= t2;
    }
    async render() {
      const t2 = this.#te = document.createElement("button");
      t2.className = "altText";
      t2.tabIndex = "0";
      const e2 = this.#ee = document.createElement("span");
      t2.append(e2);
      if (this.#le) {
        t2.classList.add("new");
        t2.setAttribute("data-l10n-id", _AltText.#he.missing);
        e2.setAttribute("data-l10n-id", _AltText.#he["missing-label"]);
      } else {
        t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
        e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
      }
      const i2 = this.#a._uiManager._signal;
      t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
      t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
      const onClick = (t3) => {
        t3.preventDefault();
        this.#a._uiManager.editAltText(this.#a);
        this.#le && this.#a._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: this.#ce } });
      };
      t2.addEventListener("click", onClick, { capture: true, signal: i2 });
      t2.addEventListener("keydown", (e3) => {
        if (e3.target === t2 && "Enter" === e3.key) {
          this.#re = true;
          onClick(e3);
        }
      }, { signal: i2 });
      await this.#de();
      return t2;
    }
    get #ce() {
      return (this.#l ? "added" : null === this.#l && this.guessedText && "review") || "missing";
    }
    finish() {
      if (this.#te) {
        this.#te.focus({ focusVisible: this.#re });
        this.#re = false;
      }
    }
    isEmpty() {
      return this.#le ? null === this.#l : !this.#l && !this.#Zt;
    }
    hasData() {
      return this.#le ? null !== this.#l || !!this.#ae : this.isEmpty();
    }
    get guessedText() {
      return this.#ae;
    }
    async setGuessedText(t2) {
      if (null === this.#l) {
        this.#ae = t2;
        this.#oe = await _AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t2 });
        this.#de();
      }
    }
    toggleAltTextBadge(t2 = false) {
      if (this.#le && !this.#l) {
        if (!this.#se) {
          const t3 = this.#se = document.createElement("div");
          t3.className = "noAltTextBadge";
          this.#a.div.append(t3);
        }
        this.#se.classList.toggle("hidden", !t2);
      } else {
        this.#se?.remove();
        this.#se = null;
      }
    }
    serialize(t2) {
      let e2 = this.#l;
      t2 || this.#ae !== e2 || (e2 = this.#oe);
      return { altText: e2, decorative: this.#Zt, guessedText: this.#ae, textWithDisclaimer: this.#oe };
    }
    get data() {
      return { altText: this.#l, decorative: this.#Zt };
    }
    set data({ altText: t2, decorative: e2, guessedText: i2, textWithDisclaimer: n2, cancel: r2 = false }) {
      if (i2) {
        this.#ae = i2;
        this.#oe = n2;
      }
      if (this.#l !== t2 || this.#Zt !== e2) {
        if (!r2) {
          this.#l = t2;
          this.#Zt = e2;
        }
        this.#de();
      }
    }
    toggle(t2 = false) {
      if (this.#te) {
        if (!t2 && this.#ne) {
          clearTimeout(this.#ne);
          this.#ne = null;
        }
        this.#te.disabled = !t2;
      }
    }
    shown() {
      this.#a._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: this.#ce } });
    }
    destroy() {
      this.#te?.remove();
      this.#te = null;
      this.#ee = null;
      this.#ie = null;
      this.#se?.remove();
      this.#se = null;
    }
    async #de() {
      const t2 = this.#te;
      if (!t2) return;
      if (this.#le) {
        t2.classList.toggle("done", !!this.#l);
        t2.setAttribute("data-l10n-id", _AltText.#he[this.#ce]);
        this.#ee?.setAttribute("data-l10n-id", _AltText.#he[`${this.#ce}-label`]);
        if (!this.#l) {
          this.#ie?.remove();
          return;
        }
      } else {
        if (!this.#l && !this.#Zt) {
          t2.classList.remove("done");
          this.#ie?.remove();
          return;
        }
        t2.classList.add("done");
        t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
      }
      let e2 = this.#ie;
      if (!e2) {
        this.#ie = e2 = document.createElement("span");
        e2.className = "tooltip";
        e2.setAttribute("role", "tooltip");
        e2.id = `alt-text-tooltip-${this.#a.id}`;
        const i3 = 100, n2 = this.#a._uiManager._signal;
        n2.addEventListener("abort", () => {
          clearTimeout(this.#ne);
          this.#ne = null;
        }, { once: true });
        t2.addEventListener("mouseenter", () => {
          this.#ne = setTimeout(() => {
            this.#ne = null;
            this.#ie.classList.add("show");
            this.#a._reportTelemetry({ action: "alt_text_tooltip" });
          }, i3);
        }, { signal: n2 });
        t2.addEventListener("mouseleave", () => {
          if (this.#ne) {
            clearTimeout(this.#ne);
            this.#ne = null;
          }
          this.#ie?.classList.remove("show");
        }, { signal: n2 });
      }
      if (this.#Zt) e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
      else {
        e2.removeAttribute("data-l10n-id");
        e2.textContent = this.#l;
      }
      e2.parentNode || t2.append(e2);
      const i2 = this.#a.getElementForAltText();
      i2?.setAttribute("aria-describedby", e2.id);
    }
  };
  var Comment = class {
    #ue = null;
    #pe = null;
    #ge = false;
    #a = null;
    #me = null;
    #fe = null;
    #be = null;
    #ye = null;
    #ve = false;
    #we = null;
    constructor(t2) {
      this.#a = t2;
    }
    renderForToolbar() {
      const t2 = this.#pe = document.createElement("button");
      t2.className = "comment";
      return this.#v(t2, false);
    }
    renderForStandalone() {
      const t2 = this.#ue = document.createElement("button");
      t2.className = "annotationCommentButton";
      const e2 = this.#a.commentButtonPosition;
      if (e2) {
        const { style: i2 } = t2;
        i2.insetInlineEnd = `calc(${100 * ("ltr" === this.#a._uiManager.direction ? 1 - e2[0] : e2[0])}% - var(--comment-button-dim))`;
        i2.top = `calc(${100 * e2[1]}% - var(--comment-button-dim))`;
        const n2 = this.#a.commentButtonColor;
        n2 && (i2.backgroundColor = n2);
      }
      return this.#v(t2, true);
    }
    focusButton() {
      setTimeout(() => {
        (this.#ue ?? this.#pe)?.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!this.#ue) return;
      const t2 = this.#a.commentButtonColor;
      t2 && (this.#ue.style.backgroundColor = t2);
      this.#a._uiManager.updatePopupColor(this.#a);
    }
    get commentButtonWidth() {
      return (this.#ue?.getBoundingClientRect().width ?? 0) / this.#a.parent.boundingClientRect.width;
    }
    get commentPopupPositionInLayer() {
      if (this.#we) return this.#we;
      if (!this.#ue) return null;
      const { x: t2, y: e2, height: i2 } = this.#ue.getBoundingClientRect(), { x: n2, y: r2, width: s2, height: a2 } = this.#a.parent.boundingClientRect;
      return [(t2 - n2) / s2, (e2 + i2 - r2) / a2];
    }
    set commentPopupPositionInLayer(t2) {
      this.#we = t2;
    }
    hasDefaultPopupPosition() {
      return null === this.#we;
    }
    removeStandaloneCommentButton() {
      this.#ue?.remove();
      this.#ue = null;
    }
    removeToolbarCommentButton() {
      this.#pe?.remove();
      this.#pe = null;
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      if (this.#ue) {
        this.#ue.classList.toggle("selected", t2);
        this.#ue.ariaExpanded = e2;
      }
    }
    #v(t2, e2) {
      if (!this.#a._uiManager.hasCommentManager()) return null;
      t2.tabIndex = "0";
      t2.ariaHasPopup = "dialog";
      if (e2) {
        t2.ariaControls = "commentPopup";
        t2.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
      } else {
        t2.ariaControlsElements = [this.#a._uiManager.getCommentDialogElement()];
        t2.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button");
      }
      const i2 = this.#a._uiManager._signal;
      if (!(i2 instanceof AbortSignal) || i2.aborted) return t2;
      t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
      if (e2) {
        t2.addEventListener("focusin", (t3) => {
          this.#a._focusEventsAllowed = false;
          stopEvent(t3);
        }, { capture: true, signal: i2 });
        t2.addEventListener("focusout", (t3) => {
          this.#a._focusEventsAllowed = true;
          stopEvent(t3);
        }, { capture: true, signal: i2 });
      }
      t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
      const onClick = (e3) => {
        e3.preventDefault();
        t2 === this.#pe ? this.edit() : this.#a.toggleComment(true);
      };
      t2.addEventListener("click", onClick, { capture: true, signal: i2 });
      t2.addEventListener("keydown", (e3) => {
        if (e3.target === t2 && "Enter" === e3.key) {
          this.#ge = true;
          onClick(e3);
        }
      }, { signal: i2 });
      t2.addEventListener("pointerenter", () => {
        this.#a.toggleComment(false, true);
      }, { signal: i2 });
      t2.addEventListener("pointerleave", () => {
        this.#a.toggleComment(false, false);
      }, { signal: i2 });
      return t2;
    }
    edit(t2) {
      const e2 = this.commentPopupPositionInLayer;
      let i2, n2;
      if (e2) [i2, n2] = e2;
      else {
        [i2, n2] = this.#a.commentButtonPosition;
        const { width: t3, height: e3, x: r3, y: s3 } = this.#a;
        i2 = r3 + i2 * t3;
        n2 = s3 + n2 * e3;
      }
      const r2 = this.#a.parent.boundingClientRect, { x: s2, y: a2, width: o2, height: l2 } = r2;
      this.#a._uiManager.editComment(this.#a, s2 + i2 * o2, a2 + n2 * l2, { ...t2, parentDimensions: r2 });
    }
    finish() {
      if (this.#pe) {
        this.#pe.focus({ focusVisible: this.#ge });
        this.#ge = false;
      }
    }
    isDeleted() {
      return this.#ve || "" === this.#be;
    }
    isEmpty() {
      return null === this.#be;
    }
    hasBeenEdited() {
      return this.isDeleted() || this.#be !== this.#me;
    }
    serialize() {
      return this.data;
    }
    get data() {
      return { text: this.#be, richText: this.#fe, date: this.#ye, deleted: this.isDeleted() };
    }
    set data(t2) {
      t2 !== this.#be && (this.#fe = null);
      if (null !== t2) {
        this.#be = t2;
        this.#ye = /* @__PURE__ */ new Date();
        this.#ve = false;
      } else {
        this.#be = "";
        this.#ve = true;
      }
    }
    restoreData({ text: t2, richText: e2, date: i2 }) {
      this.#be = t2;
      this.#fe = e2;
      this.#ye = i2;
      this.#ve = false;
    }
    setInitialText(t2, e2 = null) {
      this.#me = t2;
      this.data = t2;
      this.#ye = null;
      this.#fe = e2;
    }
    shown() {
    }
    destroy() {
      this.#pe?.remove();
      this.#pe = null;
      this.#ue?.remove();
      this.#ue = null;
      this.#be = "";
      this.#fe = null;
      this.#ye = null;
      this.#a = null;
      this.#ge = false;
      this.#ve = false;
    }
  };
  var TouchManager = class _TouchManager {
    #Ct;
    #Ae = false;
    #xe = null;
    #Ee;
    #_e;
    #Te;
    #Se;
    #Ce = null;
    #De;
    #Pe = null;
    #Me;
    #ke = null;
    constructor({ container: t2, isPinchingDisabled: e2 = null, isPinchingStopped: i2 = null, onPinchStart: n2 = null, onPinching: r2 = null, onPinchEnd: s2 = null, signal: a2 }) {
      this.#Ct = t2;
      this.#xe = i2;
      this.#Ee = e2;
      this.#_e = n2;
      this.#Te = r2;
      this.#Se = s2;
      this.#Me = new AbortController();
      this.#De = AbortSignal.any([a2, this.#Me.signal]);
      t2.addEventListener("touchstart", this.#Ie.bind(this), { passive: false, signal: this.#De });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / OutputScale.pixelRatio;
    }
    #Ie(t2) {
      if (this.#Ee?.()) return;
      if (1 === t2.touches.length) {
        if (this.#Ce) return;
        const t3 = this.#Ce = new AbortController(), e3 = AbortSignal.any([this.#De, t3.signal]), i3 = this.#Ct, n2 = { capture: true, signal: e3, passive: false }, cancelPointerDown = (t4) => {
          if ("touch" === t4.pointerType) {
            this.#Ce?.abort();
            this.#Ce = null;
          }
        };
        i3.addEventListener("pointerdown", (t4) => {
          if ("touch" === t4.pointerType) {
            stopEvent(t4);
            cancelPointerDown(t4);
          }
        }, n2);
        i3.addEventListener("pointerup", cancelPointerDown, n2);
        i3.addEventListener("pointercancel", cancelPointerDown, n2);
        return;
      }
      if (!this.#ke) {
        this.#ke = new AbortController();
        const t3 = AbortSignal.any([this.#De, this.#ke.signal]), e3 = this.#Ct, i3 = { signal: t3, capture: false, passive: false };
        e3.addEventListener("touchmove", this.#Fe.bind(this), i3);
        const n2 = this.#Re.bind(this);
        e3.addEventListener("touchend", n2, i3);
        e3.addEventListener("touchcancel", n2, i3);
        i3.capture = true;
        e3.addEventListener("pointerdown", stopEvent, i3);
        e3.addEventListener("pointermove", stopEvent, i3);
        e3.addEventListener("pointercancel", stopEvent, i3);
        e3.addEventListener("pointerup", stopEvent, i3);
        this.#_e?.();
      }
      stopEvent(t2);
      if (2 !== t2.touches.length || this.#xe?.()) {
        this.#Pe = null;
        return;
      }
      let [e2, i2] = t2.touches;
      e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
      this.#Pe = { touch0X: e2.screenX, touch0Y: e2.screenY, touch1X: i2.screenX, touch1Y: i2.screenY };
    }
    #Fe(t2) {
      if (!this.#Pe || 2 !== t2.touches.length) return;
      stopEvent(t2);
      let [e2, i2] = t2.touches;
      e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
      const { screenX: n2, screenY: r2 } = e2, { screenX: s2, screenY: a2 } = i2, o2 = this.#Pe, { touch0X: l2, touch0Y: h2, touch1X: c2, touch1Y: d2 } = o2, u2 = c2 - l2, p2 = d2 - h2, g2 = s2 - n2, m2 = a2 - r2, f2 = Math.hypot(g2, m2) || 1, b2 = Math.hypot(u2, p2) || 1;
      if (!this.#Ae && Math.abs(b2 - f2) <= _TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) return;
      o2.touch0X = n2;
      o2.touch0Y = r2;
      o2.touch1X = s2;
      o2.touch1Y = a2;
      if (!this.#Ae) {
        this.#Ae = true;
        return;
      }
      const y2 = [(n2 + s2) / 2, (r2 + a2) / 2];
      this.#Te?.(y2, b2, f2);
    }
    #Re(t2) {
      if (!(t2.touches.length >= 2)) {
        if (this.#ke) {
          this.#ke.abort();
          this.#ke = null;
          this.#Se?.();
        }
        if (this.#Pe) {
          stopEvent(t2);
          this.#Pe = null;
          this.#Ae = false;
        }
      }
    }
    destroy() {
      this.#Me?.abort();
      this.#Me = null;
      this.#Ce?.abort();
      this.#Ce = null;
    }
  };
  var AnnotationEditor = class _AnnotationEditor {
    #Be = null;
    #Oe = null;
    #l = null;
    #h = null;
    #ue = null;
    #Le = false;
    #Ne = null;
    #Ue = "";
    #He = null;
    #ze = null;
    #je = null;
    #Ge = null;
    #We = null;
    #Ve = "";
    #$e = false;
    #qe = null;
    #Xe = false;
    #Ye = false;
    #Ke = false;
    #Je = null;
    #Qe = 0;
    #Ze = 0;
    #ti = null;
    #ei = null;
    isSelected = false;
    _isCopy = false;
    _editToolbar = null;
    _initialOptions = /* @__PURE__ */ Object.create(null);
    _initialData = null;
    _isVisible = true;
    _uiManager = null;
    _focusEventsAllowed = true;
    static _l10n = null;
    static _l10nResizer = null;
    #ii = false;
    #ni = _AnnotationEditor._zIndex++;
    static _borderLineWidth = -1;
    static _colorManager = new ColorManager();
    static _zIndex = 1;
    static _telemetryTimeout = 1e3;
    static get _resizerKeyboardManager() {
      const t2 = _AnnotationEditor.prototype._resizeWithKeyboard, e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
      return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t2, { args: [-e2, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2, { args: [-i2, 0] }], [["ArrowRight", "mac+ArrowRight"], t2, { args: [e2, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2, { args: [i2, 0] }], [["ArrowUp", "mac+ArrowUp"], t2, { args: [0, -e2] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2, { args: [0, -i2] }], [["ArrowDown", "mac+ArrowDown"], t2, { args: [0, e2] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2, { args: [0, i2] }], [["Escape", "mac+Escape"], _AnnotationEditor.prototype._stopResizingWithKeyboard]]));
    }
    constructor(t2) {
      this.parent = t2.parent;
      this.id = t2.id;
      this.width = this.height = null;
      this.pageIndex = t2.parent.pageIndex;
      this.name = t2.name;
      this.div = null;
      this._uiManager = t2.uiManager;
      this.annotationElementId = null;
      this._willKeepAspectRatio = false;
      this._initialOptions.isCentered = t2.isCentered;
      this._structTreeParentId = null;
      this.annotationElementId = t2.annotationElementId || null;
      this.creationDate = t2.creationDate || /* @__PURE__ */ new Date();
      this.modificationDate = t2.modificationDate || null;
      this.canAddComment = true;
      const { rotation: e2, rawDims: { pageWidth: i2, pageHeight: n2, pageX: r2, pageY: s2 } } = this.parent.viewport;
      this.rotation = e2;
      this.pageRotation = (360 + e2 - this._uiManager.viewParameters.rotation) % 360;
      this.pageDimensions = [i2, n2];
      this.pageTranslation = [r2, s2];
      const [a2, o2] = this.parentDimensions;
      this.x = t2.x / a2;
      this.y = t2.y / o2;
      this.isAttachedToDOM = false;
      this.deleted = false;
    }
    updatePageIndex(t2) {
      this.pageIndex = t2;
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
      return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t2) {
      const e2 = new FakeEditor({ id: t2._uiManager.getId(), parent: t2.parent, uiManager: t2._uiManager });
      e2.annotationElementId = t2.annotationElementId;
      e2.deleted = true;
      e2._uiManager.addToAnnotationStorage(e2);
    }
    static initialize(t2, e2) {
      _AnnotationEditor._l10n ??= t2;
      _AnnotationEditor._l10nResizer ||= Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" });
      if (-1 !== _AnnotationEditor._borderLineWidth) return;
      const i2 = getComputedStyle(document.documentElement);
      _AnnotationEditor._borderLineWidth = parseFloat(i2.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t2, e2) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t2) {
      return false;
    }
    static paste(t2, e2) {
      unreachable("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return this.#ii;
    }
    set _isDraggable(t2) {
      this.#ii = t2;
      this.div?.classList.toggle("draggable", t2);
    }
    get uid() {
      return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t2, e2] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e2 / (2 * t2);
          this.y += this.width * t2 / (2 * e2);
          break;
        case 180:
          this.x += this.width / 2;
          this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e2 / (2 * t2);
          this.y -= this.width * t2 / (2 * e2);
          break;
        default:
          this.x -= this.width / 2;
          this.y -= this.height / 2;
      }
      this.fixAndSetPosition();
    }
    addCommands(t2) {
      this._uiManager.addCommands(t2);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = this.#ni;
    }
    setParent(t2) {
      if (null !== t2) {
        this.pageIndex = t2.pageIndex;
        this.pageDimensions = t2.pageDimensions;
      } else {
        this.#ri();
        this.#Ge?.remove();
        this.#Ge = null;
      }
      this.parent = t2;
    }
    focusin(t2) {
      this._focusEventsAllowed && (this.#$e ? this.#$e = false : this.parent.setSelected(this));
    }
    focusout(t2) {
      if (!this._focusEventsAllowed) return;
      if (!this.isAttachedToDOM) return;
      const e2 = t2.relatedTarget;
      if (!e2?.closest(`#${this.id}`)) {
        t2.preventDefault();
        this.parent?.isMultipleSelection || this.commitOrRemove();
      }
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t2, e2, i2, n2) {
      const [r2, s2] = this.parentDimensions;
      [i2, n2] = this.screenToPageTranslation(i2, n2);
      this.x = (t2 + i2) / r2;
      this.y = (e2 + n2) / s2;
      this.fixAndSetPosition();
    }
    _moveAfterPaste(t2, e2) {
      if (this.isClone) {
        delete this.isClone;
        return;
      }
      const [i2, n2] = this.parentDimensions;
      this.setAt(t2 * i2, e2 * n2, this.width * i2, this.height * n2);
      this._onTranslated();
    }
    #si([t2, e2], i2, n2) {
      [i2, n2] = this.screenToPageTranslation(i2, n2);
      this.x += i2 / t2;
      this.y += n2 / e2;
      this._onTranslating(this.x, this.y);
      this.fixAndSetPosition();
    }
    translate(t2, e2) {
      this.#si(this.parentDimensions, t2, e2);
    }
    translateInPage(t2, e2) {
      this.#qe ||= [this.x, this.y, this.width, this.height];
      this.#si(this.pageDimensions, t2, e2);
      this.div.scrollIntoView({ block: "nearest" });
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(t2, e2) {
      this.#qe ||= [this.x, this.y, this.width, this.height];
      const { div: i2, parentDimensions: [n2, r2] } = this;
      this.x += t2 / n2;
      this.y += e2 / r2;
      if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: t3, y: e3 } = this.div.getBoundingClientRect();
        if (this.parent.findNewParent(this, t3, e3)) {
          this.x -= Math.floor(this.x);
          this.y -= Math.floor(this.y);
        }
      }
      let { x: s2, y: a2 } = this;
      const [o2, l2] = this.getBaseTranslation();
      s2 += o2;
      a2 += l2;
      const { style: h2 } = i2;
      h2.left = `${(100 * s2).toFixed(2)}%`;
      h2.top = `${(100 * a2).toFixed(2)}%`;
      this._onTranslating(s2, a2);
      i2.scrollIntoView({ block: "nearest" });
    }
    _onTranslating(t2, e2) {
    }
    _onTranslated(t2, e2) {
    }
    get _hasBeenMoved() {
      return !!this.#qe && (this.#qe[0] !== this.x || this.#qe[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!this.#qe && (this.#qe[2] !== this.width || this.#qe[3] !== this.height);
    }
    getBaseTranslation() {
      const [t2, e2] = this.parentDimensions, { _borderLineWidth: i2 } = _AnnotationEditor, n2 = i2 / t2, r2 = i2 / e2;
      switch (this.rotation) {
        case 90:
          return [-n2, r2];
        case 180:
          return [n2, r2];
        case 270:
          return [n2, -r2];
        default:
          return [-n2, -r2];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t2 = this.rotation) {
      const { div: { style: e2 }, pageDimensions: [i2, n2] } = this;
      let { x: r2, y: s2, width: a2, height: o2 } = this;
      a2 *= i2;
      o2 *= n2;
      r2 *= i2;
      s2 *= n2;
      if (this._mustFixPosition) switch (t2) {
        case 0:
          r2 = MathClamp(r2, 0, i2 - a2);
          s2 = MathClamp(s2, 0, n2 - o2);
          break;
        case 90:
          r2 = MathClamp(r2, 0, i2 - o2);
          s2 = MathClamp(s2, a2, n2);
          break;
        case 180:
          r2 = MathClamp(r2, a2, i2);
          s2 = MathClamp(s2, o2, n2);
          break;
        case 270:
          r2 = MathClamp(r2, o2, i2);
          s2 = MathClamp(s2, 0, n2 - a2);
      }
      this.x = r2 /= i2;
      this.y = s2 /= n2;
      const [l2, h2] = this.getBaseTranslation();
      r2 += l2;
      s2 += h2;
      e2.left = `${(100 * r2).toFixed(2)}%`;
      e2.top = `${(100 * s2).toFixed(2)}%`;
      this.moveInDOM();
    }
    static #ai(t2, e2, i2) {
      switch (i2) {
        case 90:
          return [e2, -t2];
        case 180:
          return [-t2, -e2];
        case 270:
          return [-e2, t2];
        default:
          return [t2, e2];
      }
    }
    screenToPageTranslation(t2, e2) {
      return _AnnotationEditor.#ai(t2, e2, this.parentRotation);
    }
    pageTranslationToScreen(t2, e2) {
      return _AnnotationEditor.#ai(t2, e2, 360 - this.parentRotation);
    }
    #oi(t2) {
      switch (t2) {
        case 90: {
          const [t3, e2] = this.pageDimensions;
          return [0, -t3 / e2, e2 / t3, 0];
        }
        case 180:
          return [-1, 0, 0, -1];
        case 270: {
          const [t3, e2] = this.pageDimensions;
          return [0, t3 / e2, -e2 / t3, 0];
        }
        default:
          return [1, 0, 0, 1];
      }
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t2, pageDimensions: [e2, i2] } = this;
      return [e2 * t2, i2 * t2];
    }
    setDims() {
      const { div: { style: t2 }, width: e2, height: i2 } = this;
      t2.width = `${(100 * e2).toFixed(2)}%`;
      t2.height = `${(100 * i2).toFixed(2)}%`;
    }
    getInitialTranslation() {
      return [0, 0];
    }
    #li() {
      if (this.#He) return;
      this.#He = document.createElement("div");
      this.#He.classList.add("resizers");
      const t2 = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e2 = this._uiManager._signal;
      for (const i2 of t2) {
        const t3 = document.createElement("div");
        this.#He.append(t3);
        t3.classList.add("resizer", i2);
        t3.setAttribute("data-resizer-name", i2);
        t3.addEventListener("pointerdown", this.#hi.bind(this, i2), { signal: e2 });
        t3.addEventListener("contextmenu", noContextMenu, { signal: e2 });
        t3.tabIndex = -1;
      }
      this.div.prepend(this.#He);
    }
    #hi(t2, e2) {
      e2.preventDefault();
      const { isMac: i2 } = FeatureTest.platform;
      if (0 !== e2.button || e2.ctrlKey && i2) return;
      this.#l?.toggle(false);
      const n2 = this._isDraggable;
      this._isDraggable = false;
      this.#ze = [e2.screenX, e2.screenY];
      const r2 = new AbortController(), s2 = this._uiManager.combinedSignal(r2);
      this.parent.togglePointerEvents(false);
      window.addEventListener("pointermove", this.#ci.bind(this, t2), { passive: true, capture: true, signal: s2 });
      window.addEventListener("touchmove", stopEvent, { passive: false, signal: s2 });
      window.addEventListener("contextmenu", noContextMenu, { signal: s2 });
      this.#je = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
      const a2 = this.parent.div.style.cursor, o2 = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e2.target).cursor;
      const pointerUpCallback = () => {
        r2.abort();
        this.parent.togglePointerEvents(true);
        this.#l?.toggle(true);
        this._isDraggable = n2;
        this.parent.div.style.cursor = a2;
        this.div.style.cursor = o2;
        this.#di();
      };
      window.addEventListener("pointerup", pointerUpCallback, { signal: s2 });
      window.addEventListener("blur", pointerUpCallback, { signal: s2 });
    }
    #ui(t2, e2, i2, n2) {
      this.width = i2;
      this.height = n2;
      this.x = t2;
      this.y = e2;
      this.setDims();
      this.fixAndSetPosition();
      this._onResized();
    }
    _onResized() {
    }
    #di() {
      if (!this.#je) return;
      const { savedX: t2, savedY: e2, savedWidth: i2, savedHeight: n2 } = this.#je;
      this.#je = null;
      const r2 = this.x, s2 = this.y, a2 = this.width, o2 = this.height;
      r2 === t2 && s2 === e2 && a2 === i2 && o2 === n2 || this.addCommands({ cmd: this.#ui.bind(this, r2, s2, a2, o2), undo: this.#ui.bind(this, t2, e2, i2, n2), mustExec: true });
    }
    static _round(t2) {
      return Math.round(1e4 * t2) / 1e4;
    }
    #ci(t2, e2) {
      const [i2, n2] = this.parentDimensions, r2 = this.x, s2 = this.y, a2 = this.width, o2 = this.height, l2 = _AnnotationEditor.MIN_SIZE / i2, h2 = _AnnotationEditor.MIN_SIZE / n2, c2 = this.#oi(this.rotation), transf = (t3, e3) => [c2[0] * t3 + c2[2] * e3, c2[1] * t3 + c2[3] * e3], d2 = this.#oi(360 - this.rotation);
      let u2, p2, g2 = false, m2 = false;
      switch (t2) {
        case "topLeft":
          g2 = true;
          u2 = (t3, e3) => [0, 0];
          p2 = (t3, e3) => [t3, e3];
          break;
        case "topMiddle":
          u2 = (t3, e3) => [t3 / 2, 0];
          p2 = (t3, e3) => [t3 / 2, e3];
          break;
        case "topRight":
          g2 = true;
          u2 = (t3, e3) => [t3, 0];
          p2 = (t3, e3) => [0, e3];
          break;
        case "middleRight":
          m2 = true;
          u2 = (t3, e3) => [t3, e3 / 2];
          p2 = (t3, e3) => [0, e3 / 2];
          break;
        case "bottomRight":
          g2 = true;
          u2 = (t3, e3) => [t3, e3];
          p2 = (t3, e3) => [0, 0];
          break;
        case "bottomMiddle":
          u2 = (t3, e3) => [t3 / 2, e3];
          p2 = (t3, e3) => [t3 / 2, 0];
          break;
        case "bottomLeft":
          g2 = true;
          u2 = (t3, e3) => [0, e3];
          p2 = (t3, e3) => [t3, 0];
          break;
        case "middleLeft":
          m2 = true;
          u2 = (t3, e3) => [0, e3 / 2];
          p2 = (t3, e3) => [t3, e3 / 2];
      }
      const f2 = u2(a2, o2), b2 = p2(a2, o2);
      let y2 = transf(...b2);
      const v2 = _AnnotationEditor._round(r2 + y2[0]), w2 = _AnnotationEditor._round(s2 + y2[1]);
      let A2, x2, E2 = 1, _2 = 1;
      if (e2.fromKeyboard) ({ deltaX: A2, deltaY: x2 } = e2);
      else {
        const { screenX: t3, screenY: i3 } = e2, [n3, r3] = this.#ze;
        [A2, x2] = this.screenToPageTranslation(t3 - n3, i3 - r3);
        this.#ze[0] = t3;
        this.#ze[1] = i3;
      }
      [A2, x2] = (T2 = A2 / i2, S2 = x2 / n2, [d2[0] * T2 + d2[2] * S2, d2[1] * T2 + d2[3] * S2]);
      var T2, S2;
      if (g2) {
        const t3 = Math.hypot(a2, o2);
        E2 = _2 = Math.max(Math.min(Math.hypot(b2[0] - f2[0] - A2, b2[1] - f2[1] - x2) / t3, 1 / a2, 1 / o2), l2 / a2, h2 / o2);
      } else m2 ? E2 = MathClamp(Math.abs(b2[0] - f2[0] - A2), l2, 1) / a2 : _2 = MathClamp(Math.abs(b2[1] - f2[1] - x2), h2, 1) / o2;
      const C2 = _AnnotationEditor._round(a2 * E2), D2 = _AnnotationEditor._round(o2 * _2);
      y2 = transf(...p2(C2, D2));
      const P2 = v2 - y2[0], M2 = w2 - y2[1];
      this.#qe ||= [this.x, this.y, this.width, this.height];
      this.width = C2;
      this.height = D2;
      this.x = P2;
      this.y = M2;
      this.setDims();
      this.fixAndSetPosition();
      this._onResizing();
    }
    _onResizing() {
    }
    altTextFinish() {
      this.#l?.finish();
    }
    get toolbarButtons() {
      return null;
    }
    async addEditToolbar() {
      if (this._editToolbar || this.#Ye) return this._editToolbar;
      this._editToolbar = new EditorToolbar(this);
      this.div.append(this._editToolbar.render());
      const { toolbarButtons: t2 } = this;
      if (t2) for (const [e2, i2] of t2) await this._editToolbar.addButton(e2, i2);
      this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton());
      this._editToolbar.addButton("delete");
      return this._editToolbar;
    }
    addCommentButtonInToolbar() {
      this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
      this._editToolbar?.removeButton("comment");
    }
    removeEditToolbar() {
      this._editToolbar?.remove();
      this._editToolbar = null;
      this.#l?.destroy();
    }
    addContainer(t2) {
      const e2 = this._editToolbar?.div;
      e2 ? e2.before(t2) : this.div.append(t2);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      if (!this.#l) {
        AltText.initialize(_AnnotationEditor._l10n);
        this.#l = new AltText(this);
        if (this.#Be) {
          this.#l.data = this.#Be;
          this.#Be = null;
        }
      }
      return this.#l;
    }
    get altTextData() {
      return this.#l?.data;
    }
    set altTextData(t2) {
      this.#l && (this.#l.data = t2);
    }
    get guessedAltText() {
      return this.#l?.guessedText;
    }
    async setGuessedAltText(t2) {
      await this.#l?.setGuessedText(t2);
    }
    serializeAltText(t2) {
      return this.#l?.serialize(t2);
    }
    hasAltText() {
      return !!this.#l && !this.#l.isEmpty();
    }
    hasAltTextData() {
      return this.#l?.hasData() ?? false;
    }
    focusCommentButton() {
      this.#h?.focusButton();
    }
    addCommentButton() {
      return this.canAddComment ? this.#h ||= new Comment(this) : null;
    }
    addStandaloneCommentButton() {
      if (this._uiManager.hasCommentManager()) {
        if (this.#ue) this._uiManager.isEditingMode() && this.#ue.classList.remove("hidden");
        else if (this.hasComment) {
          this.#ue = this.#h.renderForStandalone();
          this.div.append(this.#ue);
        }
      }
    }
    removeStandaloneCommentButton() {
      this.#h.removeStandaloneCommentButton();
      this.#ue = null;
    }
    hideStandaloneCommentButton() {
      this.#ue?.classList.add("hidden");
    }
    get comment() {
      if (!this.#h) return null;
      const { data: { richText: t2, text: e2, date: i2, deleted: n2 } } = this.#h;
      return { text: e2, richText: t2, date: i2, deleted: n2, color: this.getNonHCMColor(), opacity: this.opacity ?? 1 };
    }
    set comment(t2) {
      this.#h ||= new Comment(this);
      "object" == typeof t2 && null !== t2 ? this.#h.restoreData(t2) : this.#h.data = t2;
      if (this.hasComment) {
        this.removeCommentButtonFromToolbar();
        this.addStandaloneCommentButton();
        this._uiManager.updateComment(this);
      } else {
        this.addCommentButtonInToolbar();
        this.removeStandaloneCommentButton();
        this._uiManager.removeComment(this);
      }
    }
    setCommentData({ comment: t2, popupRef: e2, richText: i2 }) {
      if (!e2) return;
      this.#h ||= new Comment(this);
      this.#h.setInitialText(t2, i2);
      if (!this.annotationElementId) return;
      const n2 = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
      n2 && this.updateFromAnnotationLayer(n2);
    }
    get hasEditedComment() {
      return this.#h?.hasBeenEdited();
    }
    get hasDeletedComment() {
      return this.#h?.isDeleted();
    }
    get hasComment() {
      return !!this.#h && !this.#h.isEmpty() && !this.#h.isDeleted();
    }
    async editComment(t2) {
      this.#h ||= new Comment(this);
      this.#h.edit(t2);
    }
    toggleComment(t2, e2 = void 0) {
      this.hasComment && this._uiManager.toggleComment(this, t2, e2);
    }
    setSelectedCommentButton(t2) {
      this.#h.setSelectedButton(t2);
    }
    addComment(t2) {
      if (this.hasEditedComment) {
        const e2 = 180, i2 = 100, [, , , n2] = t2.rect, [r2] = this.pageDimensions, [s2] = this.pageTranslation, a2 = s2 + r2 + 1, o2 = n2 - i2, l2 = a2 + e2;
        t2.popup = { contents: this.comment.text, deleted: this.comment.deleted, rect: [a2, o2, l2, n2] };
      }
    }
    updateFromAnnotationLayer({ popup: { contents: t2, deleted: e2 } }) {
      this.#h.data = e2 ? null : t2;
    }
    get parentBoundingClientRect() {
      return this.parent.boundingClientRect;
    }
    render() {
      const t2 = this.div = document.createElement("div");
      t2.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
      t2.className = this.name;
      t2.setAttribute("id", this.id);
      t2.tabIndex = this.#Le ? -1 : 0;
      t2.setAttribute("role", "application");
      this.defaultL10nId && t2.setAttribute("data-l10n-id", this.defaultL10nId);
      this._isVisible || t2.classList.add("hidden");
      this.setInForeground();
      this.#pi();
      const [e2, i2] = this.parentDimensions;
      if (this.parentRotation % 180 != 0) {
        t2.style.maxWidth = `${(100 * i2 / e2).toFixed(2)}%`;
        t2.style.maxHeight = `${(100 * e2 / i2).toFixed(2)}%`;
      }
      const [n2, r2] = this.getInitialTranslation();
      this.translate(n2, r2);
      bindEvents(this, t2, ["keydown", "pointerdown", "dblclick"]);
      this.isResizable && this._uiManager._supportsPinchToZoom && (this.#ei ||= new TouchManager({ container: t2, isPinchingDisabled: () => !this.isSelected, onPinchStart: this.#gi.bind(this), onPinching: this.#mi.bind(this), onPinchEnd: this.#fi.bind(this), signal: this._uiManager._signal }));
      this.addStandaloneCommentButton();
      this._uiManager._editorUndoBar?.hide();
      return t2;
    }
    #gi() {
      this.#je = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
      this.#l?.toggle(false);
      this.parent.togglePointerEvents(false);
    }
    #mi(t2, e2, i2) {
      let n2 = i2 / e2 * 0.7 + 1 - 0.7;
      if (1 === n2) return;
      const r2 = this.#oi(this.rotation), transf = (t3, e3) => [r2[0] * t3 + r2[2] * e3, r2[1] * t3 + r2[3] * e3], [s2, a2] = this.parentDimensions, o2 = this.x, l2 = this.y, h2 = this.width, c2 = this.height, d2 = _AnnotationEditor.MIN_SIZE / s2, u2 = _AnnotationEditor.MIN_SIZE / a2;
      n2 = Math.max(Math.min(n2, 1 / h2, 1 / c2), d2 / h2, u2 / c2);
      const p2 = _AnnotationEditor._round(h2 * n2), g2 = _AnnotationEditor._round(c2 * n2);
      if (p2 === h2 && g2 === c2) return;
      this.#qe ||= [o2, l2, h2, c2];
      const m2 = transf(h2 / 2, c2 / 2), f2 = _AnnotationEditor._round(o2 + m2[0]), b2 = _AnnotationEditor._round(l2 + m2[1]), y2 = transf(p2 / 2, g2 / 2);
      this.x = f2 - y2[0];
      this.y = b2 - y2[1];
      this.width = p2;
      this.height = g2;
      this.setDims();
      this.fixAndSetPosition();
      this._onResizing();
    }
    #fi() {
      this.#l?.toggle(true);
      this.parent.togglePointerEvents(true);
      this.#di();
    }
    pointerdown(t2) {
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) t2.preventDefault();
      else {
        this.#$e = true;
        this._isDraggable ? this.#bi(t2) : this.#yi(t2);
      }
    }
    #yi(t2) {
      const { isMac: e2 } = FeatureTest.platform;
      t2.ctrlKey && !e2 || t2.shiftKey || t2.metaKey && e2 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
    }
    #bi(t2) {
      const { isSelected: e2 } = this;
      this._uiManager.setUpDragSession();
      let i2 = false;
      const n2 = new AbortController(), r2 = this._uiManager.combinedSignal(n2), s2 = { capture: true, passive: false, signal: r2 }, cancelDrag = (t3) => {
        n2.abort();
        this.#Ne = null;
        this.#$e = false;
        this._uiManager.endDragSession() || this.#yi(t3);
        i2 && this._onStopDragging();
      };
      if (e2) {
        this.#Qe = t2.clientX;
        this.#Ze = t2.clientY;
        this.#Ne = t2.pointerId;
        this.#Ue = t2.pointerType;
        window.addEventListener("pointermove", (t3) => {
          if (!i2) {
            i2 = true;
            this._uiManager.toggleComment(this, true, false);
            this._onStartDragging();
          }
          const { clientX: e3, clientY: n3, pointerId: r3 } = t3;
          if (r3 !== this.#Ne) {
            stopEvent(t3);
            return;
          }
          const [s3, a2] = this.screenToPageTranslation(e3 - this.#Qe, n3 - this.#Ze);
          this.#Qe = e3;
          this.#Ze = n3;
          this._uiManager.dragSelectedEditors(s3, a2);
        }, s2);
        window.addEventListener("touchmove", stopEvent, s2);
        window.addEventListener("pointerdown", (t3) => {
          t3.pointerType === this.#Ue && (this.#ei || t3.isPrimary) && cancelDrag(t3);
          stopEvent(t3);
        }, s2);
      }
      const pointerUpCallback = (t3) => {
        this.#Ne && this.#Ne !== t3.pointerId ? stopEvent(t3) : cancelDrag(t3);
      };
      window.addEventListener("pointerup", pointerUpCallback, { signal: r2 });
      window.addEventListener("blur", pointerUpCallback, { signal: r2 });
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      this.#Je && clearTimeout(this.#Je);
      this.#Je = setTimeout(() => {
        this.#Je = null;
        this.parent?.moveEditorInDOM(this);
      }, 0);
    }
    _setParentAndPosition(t2, e2, i2) {
      t2.changeParent(this);
      this.x = e2;
      this.y = i2;
      this.fixAndSetPosition();
      this._onTranslated();
    }
    getRect(t2, e2, i2 = this.rotation) {
      const n2 = this.parentScale, [r2, s2] = this.pageDimensions, [a2, o2] = this.pageTranslation, l2 = t2 / n2, h2 = e2 / n2, c2 = this.x * r2, d2 = this.y * s2, u2 = this.width * r2, p2 = this.height * s2;
      switch (i2) {
        case 0:
          return [c2 + l2 + a2, s2 - d2 - h2 - p2 + o2, c2 + l2 + u2 + a2, s2 - d2 - h2 + o2];
        case 90:
          return [c2 + h2 + a2, s2 - d2 + l2 + o2, c2 + h2 + p2 + a2, s2 - d2 + l2 + u2 + o2];
        case 180:
          return [c2 - l2 - u2 + a2, s2 - d2 + h2 + o2, c2 - l2 + a2, s2 - d2 + h2 + p2 + o2];
        case 270:
          return [c2 - h2 - p2 + a2, s2 - d2 - l2 - u2 + o2, c2 - h2 + a2, s2 - d2 - l2 + o2];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t2, e2) {
      const [i2, n2, r2, s2] = t2, a2 = r2 - i2, o2 = s2 - n2;
      switch (this.rotation) {
        case 0:
          return [i2, e2 - s2, a2, o2];
        case 90:
          return [i2, e2 - n2, o2, a2];
        case 180:
          return [r2, e2 - n2, a2, o2];
        case 270:
          return [r2, e2 - s2, o2, a2];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getPDFRect() {
      return this.getRect(0, 0);
    }
    getNonHCMColor() {
      return this.color && _AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    }
    onUpdatedColor() {
      this.#h?.onUpdatedColor();
    }
    getData() {
      const { comment: { text: t2, color: e2, date: i2, opacity: n2, deleted: r2, richText: s2 }, uid: a2, pageIndex: o2, creationDate: l2, modificationDate: h2 } = this;
      return { id: a2, pageIndex: o2, rect: this.getPDFRect(), richText: s2, contentsObj: { str: t2 }, creationDate: l2, modificationDate: i2 || h2, popupRef: !r2, color: e2, opacity: n2 };
    }
    onceAdded(t2) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      if (this.isInEditMode()) return false;
      this.parent.setEditingState(false);
      this.#Ye = true;
      return true;
    }
    disableEditMode() {
      if (!this.isInEditMode()) return false;
      this.parent.setEditingState(true);
      this.#Ye = false;
      return true;
    }
    isInEditMode() {
      return this.#Ye;
    }
    shouldGetKeyboardEvents() {
      return this.#Ke;
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t2, left: e2, bottom: i2, right: n2 } = this.getClientDimensions(), { innerHeight: r2, innerWidth: s2 } = window;
      return e2 < s2 && n2 > 0 && t2 < r2 && i2 > 0;
    }
    #pi() {
      if (this.#We || !this.div) return;
      this.#We = new AbortController();
      const t2 = this._uiManager.combinedSignal(this.#We);
      this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t2 });
      this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t2 });
    }
    rebuild() {
      this.#pi();
    }
    rotate(t2) {
    }
    resize() {
    }
    serializeDeleted() {
      return { id: this.annotationElementId, deleted: true, pageIndex: this.pageIndex, popupRef: this._initialData?.popupRef || "" };
    }
    serialize(t2 = false, e2 = null) {
      return { annotationType: this.mode, pageIndex: this.pageIndex, rect: this.getPDFRect(), rotation: this.rotation, structTreeParentId: this._structTreeParentId, popupRef: this._initialData?.popupRef || "" };
    }
    static async deserialize(t2, e2, i2) {
      const n2 = new this.prototype.constructor({ parent: e2, id: i2.getId(), uiManager: i2, annotationElementId: t2.annotationElementId, creationDate: t2.creationDate, modificationDate: t2.modificationDate });
      n2.rotation = t2.rotation;
      n2.#Be = t2.accessibilityData;
      n2._isCopy = t2.isCopy || false;
      const [r2, s2] = n2.pageDimensions, [a2, o2, l2, h2] = n2.getRectInCurrentCoords(t2.rect, s2);
      n2.x = a2 / r2;
      n2.y = o2 / s2;
      n2.width = l2 / r2;
      n2.height = h2 / s2;
      return n2;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || null !== this.serialize());
    }
    remove() {
      this.#We?.abort();
      this.#We = null;
      this.isEmpty() || this.commit();
      this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
      this.hideCommentPopup();
      if (this.#Je) {
        clearTimeout(this.#Je);
        this.#Je = null;
      }
      this.#ri();
      this.removeEditToolbar();
      if (this.#ti) {
        for (const t2 of this.#ti.values()) clearTimeout(t2);
        this.#ti = null;
      }
      this.parent = null;
      this.#ei?.destroy();
      this.#ei = null;
      this.#Ge?.remove();
      this.#Ge = null;
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      if (this.isResizable) {
        this.#li();
        this.#He.classList.remove("hidden");
      }
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0];
    }
    get commentButtonPositionInPage() {
      const { commentButtonPosition: [t2, e2] } = this, [i2, n2, r2, s2] = this.getPDFRect();
      return [_AnnotationEditor._round(i2 + (r2 - i2) * t2), _AnnotationEditor._round(n2 + (s2 - n2) * (1 - e2))];
    }
    get commentButtonColor() {
      return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
    }
    get commentPopupPosition() {
      return this.#h.commentPopupPositionInLayer;
    }
    set commentPopupPosition(t2) {
      this.#h.commentPopupPositionInLayer = t2;
    }
    hasDefaultPopupPosition() {
      return this.#h.hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
      return this.#h.commentButtonWidth;
    }
    get elementBeforePopup() {
      return this.div;
    }
    setCommentButtonStates(t2) {
      this.#h?.setCommentButtonStates(t2);
    }
    keydown(t2) {
      if (!this.isResizable || t2.target !== this.div || "Enter" !== t2.key) return;
      this._uiManager.setSelected(this);
      this.#je = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
      const e2 = this.#He.children;
      if (!this.#Oe) {
        this.#Oe = Array.from(e2);
        const t3 = this.#vi.bind(this), i3 = this.#wi.bind(this), n3 = this._uiManager._signal;
        for (const e3 of this.#Oe) {
          const r3 = e3.getAttribute("data-resizer-name");
          e3.setAttribute("role", "spinbutton");
          e3.addEventListener("keydown", t3, { signal: n3 });
          e3.addEventListener("blur", i3, { signal: n3 });
          e3.addEventListener("focus", this.#Ai.bind(this, r3), { signal: n3 });
          e3.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[r3]);
        }
      }
      const i2 = this.#Oe[0];
      let n2 = 0;
      for (const t3 of e2) {
        if (t3 === i2) break;
        n2++;
      }
      const r2 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#Oe.length / 4);
      if (r2 !== n2) {
        if (r2 < n2) for (let t4 = 0; t4 < n2 - r2; t4++) this.#He.append(this.#He.firstElementChild);
        else if (r2 > n2) for (let t4 = 0; t4 < r2 - n2; t4++) this.#He.firstElementChild.before(this.#He.lastElementChild);
        let t3 = 0;
        for (const i3 of e2) {
          const e3 = this.#Oe[t3++].getAttribute("data-resizer-name");
          i3.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[e3]);
        }
      }
      this.#xi(0);
      this.#Ke = true;
      this.#He.firstElementChild.focus({ focusVisible: true });
      t2.preventDefault();
      t2.stopImmediatePropagation();
    }
    #vi(t2) {
      _AnnotationEditor._resizerKeyboardManager.exec(this, t2);
    }
    #wi(t2) {
      this.#Ke && t2.relatedTarget?.parentNode !== this.#He && this.#ri();
    }
    #Ai(t2) {
      this.#Ve = this.#Ke ? t2 : "";
    }
    #xi(t2) {
      if (this.#Oe) for (const e2 of this.#Oe) e2.tabIndex = t2;
    }
    _resizeWithKeyboard(t2, e2) {
      this.#Ke && this.#ci(this.#Ve, { deltaX: t2, deltaY: e2, fromKeyboard: true });
    }
    #ri() {
      this.#Ke = false;
      this.#xi(-1);
      this.#di();
    }
    _stopResizingWithKeyboard() {
      this.#ri();
      this.div.focus();
    }
    select() {
      if (this.isSelected && this._editToolbar) this._editToolbar.show();
      else {
        this.isSelected = true;
        this.makeResizable();
        this.div?.classList.add("selectedEditor");
        if (this._editToolbar) {
          this._editToolbar?.show();
          this.#l?.toggleAltTextBadge(false);
        } else this.addEditToolbar().then(() => {
          this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
        });
      }
    }
    focus() {
      this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({ preventScroll: true }), 0);
    }
    unselect() {
      if (this.isSelected) {
        this.isSelected = false;
        this.#He?.classList.add("hidden");
        this.div?.classList.remove("selectedEditor");
        this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true });
        this._editToolbar?.hide();
        this.#l?.toggleAltTextBadge(true);
        this.hideCommentPopup();
      }
    }
    hideCommentPopup() {
      this.hasComment && this._uiManager.toggleComment(null);
    }
    updateParams(t2, e2) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    get canChangeContent() {
      return false;
    }
    enterInEditMode() {
      if (this.canChangeContent) {
        this.enableEditMode();
        this.div.focus();
      }
    }
    dblclick(t2) {
      if ("BUTTON" !== t2.target.nodeName) {
        this.enterInEditMode();
        this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.uid });
      }
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return this.#Xe;
    }
    set isEditing(t2) {
      this.#Xe = t2;
      if (this.parent) if (t2) {
        this.parent.setSelected(this);
        this.parent.setActiveEditor(this);
      } else this.parent.setActiveEditor(null);
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return { action: "added" };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t2, e2 = false) {
      if (e2) {
        this.#ti ||= /* @__PURE__ */ new Map();
        const { action: e3 } = t2;
        let i2 = this.#ti.get(e3);
        i2 && clearTimeout(i2);
        i2 = setTimeout(() => {
          this._reportTelemetry(t2);
          this.#ti.delete(e3);
          0 === this.#ti.size && (this.#ti = null);
        }, _AnnotationEditor._telemetryTimeout);
        this.#ti.set(e3, i2);
        return;
      }
      t2.type ||= this.editorType;
      this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t2 } });
    }
    show(t2 = this._isVisible) {
      this.div.classList.toggle("hidden", !t2);
      this._isVisible = t2;
    }
    enable() {
      this.div && (this.div.tabIndex = 0);
      this.#Le = false;
    }
    disable() {
      this.div && (this.div.tabIndex = -1);
      this.#Le = true;
    }
    updateFakeAnnotationElement(t2) {
      if (this.#Ge || this.deleted) if (this.deleted) {
        this.#Ge.remove();
        this.#Ge = null;
      } else (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#Ge.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      else this.#Ge = t2.addFakeAnnotation(this);
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      let e2 = t2.container.querySelector(".annotationContent");
      if (e2) {
        if ("CANVAS" === e2.nodeName) {
          const t3 = e2;
          e2 = document.createElement("div");
          e2.classList.add("annotationContent", this.editorType);
          t3.before(e2);
        }
      } else {
        e2 = document.createElement("div");
        e2.classList.add("annotationContent", this.editorType);
        t2.container.prepend(e2);
      }
      return e2;
    }
    resetAnnotationElement(t2) {
      const { firstElementChild: e2 } = t2.container;
      "DIV" === e2?.nodeName && e2.classList.contains("annotationContent") && e2.remove();
    }
  };
  var FakeEditor = class extends AnnotationEditor {
    constructor(t2) {
      super(t2);
      this.annotationElementId = t2.annotationElementId;
      this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  };
  var J = 3285377520;
  var Q = 4294901760;
  var Z = 65535;
  var MurmurHash3_64 = class {
    constructor(t2) {
      this.h1 = t2 ? 4294967295 & t2 : J;
      this.h2 = t2 ? 4294967295 & t2 : J;
    }
    update(t2) {
      let e2, i2;
      if ("string" == typeof t2) {
        e2 = new Uint8Array(2 * t2.length);
        i2 = 0;
        for (let n3 = 0, r3 = t2.length; n3 < r3; n3++) {
          const r4 = t2.charCodeAt(n3);
          if (r4 <= 255) e2[i2++] = r4;
          else {
            e2[i2++] = r4 >>> 8;
            e2[i2++] = 255 & r4;
          }
        }
      } else {
        if (!ArrayBuffer.isView(t2)) throw new Error("Invalid data format, must be a string or TypedArray.");
        e2 = t2.slice();
        i2 = e2.byteLength;
      }
      const n2 = i2 >> 2, r2 = i2 - 4 * n2, s2 = new Uint32Array(e2.buffer, 0, n2);
      let a2 = 0, o2 = 0, l2 = this.h1, h2 = this.h2;
      const c2 = 3432918353, d2 = 461845907, u2 = 11601, p2 = 13715;
      for (let t3 = 0; t3 < n2; t3++) if (1 & t3) {
        a2 = s2[t3];
        a2 = a2 * c2 & Q | a2 * u2 & Z;
        a2 = a2 << 15 | a2 >>> 17;
        a2 = a2 * d2 & Q | a2 * p2 & Z;
        l2 ^= a2;
        l2 = l2 << 13 | l2 >>> 19;
        l2 = 5 * l2 + 3864292196;
      } else {
        o2 = s2[t3];
        o2 = o2 * c2 & Q | o2 * u2 & Z;
        o2 = o2 << 15 | o2 >>> 17;
        o2 = o2 * d2 & Q | o2 * p2 & Z;
        h2 ^= o2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = 5 * h2 + 3864292196;
      }
      a2 = 0;
      switch (r2) {
        case 3:
          a2 ^= e2[4 * n2 + 2] << 16;
        case 2:
          a2 ^= e2[4 * n2 + 1] << 8;
        case 1:
          a2 ^= e2[4 * n2];
          a2 = a2 * c2 & Q | a2 * u2 & Z;
          a2 = a2 << 15 | a2 >>> 17;
          a2 = a2 * d2 & Q | a2 * p2 & Z;
          1 & n2 ? l2 ^= a2 : h2 ^= a2;
      }
      this.h1 = l2;
      this.h2 = h2;
    }
    hexdigest() {
      let t2 = this.h1, e2 = this.h2;
      t2 ^= e2 >>> 1;
      t2 = 3981806797 * t2 & Q | 36045 * t2 & Z;
      e2 = 4283543511 * e2 & Q | (2950163797 * (e2 << 16 | t2 >>> 16) & Q) >>> 16;
      t2 ^= e2 >>> 1;
      t2 = 444984403 * t2 & Q | 60499 * t2 & Z;
      e2 = 3301882366 * e2 & Q | (3120437893 * (e2 << 16 | t2 >>> 16) & Q) >>> 16;
      t2 ^= e2 >>> 1;
      return (t2 >>> 0).toString(16).padStart(8, "0") + (e2 >>> 0).toString(16).padStart(8, "0");
    }
  };
  var tt = Object.freeze({ map: null, hash: "", transfer: void 0 });
  var AnnotationStorage = class {
    #Ei = false;
    #_i = null;
    #Ti = null;
    #Si = /* @__PURE__ */ new Map();
    onSetModified = null;
    onResetModified = null;
    onAnnotationEditor = null;
    getValue(t2, e2) {
      const i2 = this.#Si.get(t2);
      return void 0 === i2 ? e2 : Object.assign(e2, i2);
    }
    getRawValue(t2) {
      return this.#Si.get(t2);
    }
    remove(t2) {
      const e2 = this.#Si.get(t2);
      if (void 0 !== e2) {
        e2 instanceof AnnotationEditor && this.#Ti.delete(e2.annotationElementId);
        this.#Si.delete(t2);
        0 === this.#Si.size && this.resetModified();
        this.#Si.values().some((t3) => t3 instanceof AnnotationEditor) || this.onAnnotationEditor?.(null);
      }
    }
    setValue(t2, e2) {
      const i2 = this.#Si.get(t2);
      let n2 = false;
      if (void 0 !== i2) {
        for (const [t3, r2] of Object.entries(e2)) if (i2[t3] !== r2) {
          n2 = true;
          i2[t3] = r2;
        }
      } else {
        n2 = true;
        this.#Si.set(t2, e2);
      }
      n2 && this.#Ci();
      if (e2 instanceof AnnotationEditor) {
        (this.#Ti ||= /* @__PURE__ */ new Map()).set(e2.annotationElementId, e2);
        this.onAnnotationEditor?.(e2.constructor._type);
      }
    }
    has(t2) {
      return this.#Si.has(t2);
    }
    get size() {
      return this.#Si.size;
    }
    #Ci() {
      if (!this.#Ei) {
        this.#Ei = true;
        this.onSetModified?.();
      }
    }
    resetModified() {
      if (this.#Ei) {
        this.#Ei = false;
        this.onResetModified?.();
      }
    }
    get print() {
      return new PrintAnnotationStorage(this);
    }
    get serializable() {
      if (0 === this.#Si.size) return tt;
      const t2 = /* @__PURE__ */ new Map(), e2 = new MurmurHash3_64(), i2 = [], n2 = /* @__PURE__ */ Object.create(null);
      let r2 = false;
      for (const [i3, s2] of this.#Si) {
        const a2 = s2 instanceof AnnotationEditor ? s2.serialize(false, n2) : s2;
        if (s2.page) {
          s2.pageIndex = s2.page._pageIndex;
          delete s2.page;
        }
        if (a2) {
          t2.set(i3, a2);
          e2.update(`${i3}:${JSON.stringify(a2)}`);
          r2 ||= !!a2.bitmap;
        }
      }
      if (r2) for (const e3 of t2.values()) e3.bitmap && i2.push(e3.bitmap);
      return t2.size > 0 ? { map: t2, hash: e2.hexdigest(), transfer: i2 } : tt;
    }
    get editorStats() {
      let t2 = null;
      const e2 = /* @__PURE__ */ new Map();
      let i2 = 0, n2 = 0;
      for (const r2 of this.#Si.values()) {
        if (!(r2 instanceof AnnotationEditor)) {
          r2.popup && (r2.popup.deleted ? n2 += 1 : i2 += 1);
          continue;
        }
        r2.isCommentDeleted ? n2 += 1 : r2.hasEditedComment && (i2 += 1);
        const s2 = r2.telemetryFinalData;
        if (!s2) continue;
        const { type: a2 } = s2;
        e2.has(a2) || e2.set(a2, Object.getPrototypeOf(r2).constructor);
        t2 ||= /* @__PURE__ */ Object.create(null);
        const o2 = t2[a2] ||= /* @__PURE__ */ new Map();
        for (const [t3, e3] of Object.entries(s2)) {
          if ("type" === t3) continue;
          const i3 = o2.getOrInsertComputed(t3, makeMap);
          i3.set(e3, (i3.get(e3) ?? 0) + 1);
        }
      }
      if (n2 > 0 || i2 > 0) {
        t2 ||= /* @__PURE__ */ Object.create(null);
        t2.comments = { deleted: n2, edited: i2 };
      }
      if (!t2) return null;
      for (const [i3, n3] of e2) t2[i3] = n3.computeTelemetryFinalData(t2[i3]);
      return t2;
    }
    resetModifiedIds() {
      this.#_i = null;
    }
    updateEditor(t2, e2) {
      const i2 = this.#Ti?.get(t2);
      if (i2) {
        i2.updateFromAnnotationLayer(e2);
        return true;
      }
      return false;
    }
    getEditor(t2) {
      return this.#Ti?.get(t2) || null;
    }
    get modifiedIds() {
      if (this.#_i) return this.#_i;
      const t2 = [];
      if (this.#Ti) for (const e2 of this.#Ti.values()) e2.serialize() && t2.push(e2.annotationElementId);
      return this.#_i = { ids: new Set(t2), hash: t2.join(",") };
    }
    [Symbol.iterator]() {
      return this.#Si.entries();
    }
  };
  var PrintAnnotationStorage = class extends AnnotationStorage {
    #Di = tt;
    constructor(t2) {
      super();
      const { serializable: e2 } = t2;
      if (e2 === tt) return;
      const { map: i2, hash: n2, transfer: r2 } = e2, s2 = structuredClone(i2, r2 ? { transfer: r2 } : null);
      this.#Di = { map: s2, hash: n2, transfer: [] };
    }
    get print() {
      unreachable("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return this.#Di;
    }
    get modifiedIds() {
      return shadow(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
    }
  };
  __webpack_require__(7588);
  var et = "__forcedDependency";
  var { floor: it, ceil: nt } = Math;
  function expandBBox(t2, e2, i2, n2, r2, s2) {
    t2[4 * e2 + 0] = Math.min(t2[4 * e2 + 0], i2);
    t2[4 * e2 + 1] = Math.min(t2[4 * e2 + 1], n2);
    t2[4 * e2 + 2] = Math.max(t2[4 * e2 + 2], r2);
    t2[4 * e2 + 3] = Math.max(t2[4 * e2 + 3], s2);
  }
  var rt = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
  var BBoxReader = class {
    #Pi;
    #Mi;
    constructor(t2, e2) {
      this.#Pi = t2;
      this.#Mi = e2;
    }
    get length() {
      return this.#Pi.length;
    }
    isEmpty(t2) {
      return this.#Pi[t2] === rt;
    }
    minX(t2) {
      return this.#Mi[4 * t2 + 0] / 256;
    }
    minY(t2) {
      return this.#Mi[4 * t2 + 1] / 256;
    }
    maxX(t2) {
      return (this.#Mi[4 * t2 + 2] + 1) / 256;
    }
    maxY(t2) {
      return (this.#Mi[4 * t2 + 3] + 1) / 256;
    }
  };
  var ensureDebugMetadata = (t2, e2) => t2?.getOrInsertComputed(e2, () => ({ dependencies: /* @__PURE__ */ new Set(), isRenderingOperation: false }));
  var CanvasBBoxTracker = class {
    #ki = [[1, 0, 0, 1, 0, 0]];
    #Ii = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    #Fi = new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    _pendingBBoxIdx = -1;
    #Ri;
    #Bi;
    #Oi;
    #Pi;
    _savesStack = [];
    _markedContentStack = [];
    constructor(t2, e2) {
      this.#Ri = t2.width;
      this.#Bi = t2.height;
      this.#Li(e2);
    }
    growOperationsCount(t2) {
      t2 >= this.#Pi.length && this.#Li(t2, this.#Pi);
    }
    #Li(t2, e2) {
      const i2 = new ArrayBuffer(4 * t2);
      this.#Oi = new Uint8ClampedArray(i2);
      this.#Pi = new Uint32Array(i2);
      if (e2 && e2.length > 0) {
        this.#Pi.set(e2);
        this.#Pi.fill(rt, e2.length);
      } else this.#Pi.fill(rt);
    }
    get clipBox() {
      return this.#Ii;
    }
    save(t2) {
      this.#Ii = { __proto__: this.#Ii };
      this._savesStack.push(t2);
      return this;
    }
    restore(t2, e2) {
      const i2 = Object.getPrototypeOf(this.#Ii);
      if (null === i2) return this;
      this.#Ii = i2;
      const n2 = this._savesStack.pop();
      if (void 0 !== n2) {
        e2?.(n2, t2);
        this.#Pi[t2] = this.#Pi[n2];
      }
      return this;
    }
    recordOpenMarker(t2) {
      this._savesStack.push(t2);
      return this;
    }
    getOpenMarker() {
      return 0 === this._savesStack.length ? null : this._savesStack.at(-1);
    }
    recordCloseMarker(t2, e2) {
      const i2 = this._savesStack.pop();
      if (void 0 !== i2) {
        e2?.(i2, t2);
        this.#Pi[t2] = this.#Pi[i2];
      }
      return this;
    }
    beginMarkedContent(t2) {
      this._markedContentStack.push(t2);
      return this;
    }
    endMarkedContent(t2, e2) {
      const i2 = this._markedContentStack.pop();
      if (void 0 !== i2) {
        e2?.(i2, t2);
        this.#Pi[t2] = this.#Pi[i2];
      }
      return this;
    }
    pushBaseTransform(t2) {
      this.#ki.push(Util.multiplyByDOMMatrix(this.#ki.at(-1), t2.getTransform()));
      return this;
    }
    popBaseTransform() {
      this.#ki.length > 1 && this.#ki.pop();
      return this;
    }
    resetBBox(t2) {
      if (this._pendingBBoxIdx !== t2) {
        this._pendingBBoxIdx = t2;
        this.#Fi[0] = 1 / 0;
        this.#Fi[1] = 1 / 0;
        this.#Fi[2] = -1 / 0;
        this.#Fi[3] = -1 / 0;
      }
      return this;
    }
    recordClipBox(t2, e2, i2, n2, r2, s2) {
      const a2 = Util.multiplyByDOMMatrix(this.#ki.at(-1), e2.getTransform()), o2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      Util.axialAlignedBoundingBox([i2, r2, n2, s2], a2, o2);
      const l2 = Util.intersect(this.#Ii, o2);
      if (l2) {
        this.#Ii[0] = l2[0];
        this.#Ii[1] = l2[1];
        this.#Ii[2] = l2[2];
        this.#Ii[3] = l2[3];
      } else {
        this.#Ii[0] = this.#Ii[1] = 1 / 0;
        this.#Ii[2] = this.#Ii[3] = -1 / 0;
      }
      return this;
    }
    recordBBox(t2, e2, i2, n2, r2, s2) {
      const a2 = this.#Ii;
      if (a2[0] === 1 / 0) return this;
      const o2 = Util.multiplyByDOMMatrix(this.#ki.at(-1), e2.getTransform());
      if (a2[0] === -1 / 0) {
        Util.axialAlignedBoundingBox([i2, r2, n2, s2], o2, this.#Fi);
        return this;
      }
      const l2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      Util.axialAlignedBoundingBox([i2, r2, n2, s2], o2, l2);
      this.#Fi[0] = Math.min(this.#Fi[0], Math.max(l2[0], a2[0]));
      this.#Fi[1] = Math.min(this.#Fi[1], Math.max(l2[1], a2[1]));
      this.#Fi[2] = Math.max(this.#Fi[2], Math.min(l2[2], a2[2]));
      this.#Fi[3] = Math.max(this.#Fi[3], Math.min(l2[3], a2[3]));
      return this;
    }
    recordFullPageBBox(t2) {
      this.#Fi[0] = Math.max(0, this.#Ii[0]);
      this.#Fi[1] = Math.max(0, this.#Ii[1]);
      this.#Fi[2] = Math.min(this.#Ri, this.#Ii[2]);
      this.#Fi[3] = Math.min(this.#Bi, this.#Ii[3]);
      return this;
    }
    recordOperation(t2, e2 = false, i2) {
      if (this._pendingBBoxIdx !== t2) return this;
      const n2 = it(256 * this.#Fi[0] / this.#Ri), r2 = it(256 * this.#Fi[1] / this.#Bi), s2 = nt(256 * this.#Fi[2] / this.#Ri), a2 = nt(256 * this.#Fi[3] / this.#Bi);
      expandBBox(this.#Oi, t2, n2, r2, s2, a2);
      if (i2) for (const e3 of i2) for (const i3 of e3) i3 !== t2 && expandBBox(this.#Oi, i3, n2, r2, s2, a2);
      e2 || (this._pendingBBoxIdx = -1);
      return this;
    }
    bboxToClipBoxDropOperation(t2) {
      if (this._pendingBBoxIdx === t2) {
        this._pendingBBoxIdx = -1;
        this.#Ii[0] = Math.max(this.#Ii[0], this.#Fi[0]);
        this.#Ii[1] = Math.max(this.#Ii[1], this.#Fi[1]);
        this.#Ii[2] = Math.min(this.#Ii[2], this.#Fi[2]);
        this.#Ii[3] = Math.min(this.#Ii[3], this.#Fi[3]);
      }
      return this;
    }
    take() {
      return new BBoxReader(this.#Pi, this.#Oi);
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
    recordSimpleData(t2, e2) {
      return this;
    }
    recordIncrementalData(t2, e2) {
      return this;
    }
    resetIncrementalData(t2, e2) {
      return this;
    }
    recordNamedData(t2, e2) {
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      return this;
    }
    recordFutureForcedDependency(t2, e2) {
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2 = 1, r2 = 0, s2 = 0, a2) {
      return this;
    }
    getSimpleIndex(t2) {
    }
    recordDependencies(t2, e2) {
      return this;
    }
    recordNamedDependency(t2, e2) {
      return this;
    }
    recordShowTextOperation(t2, e2 = false) {
      return this;
    }
  };
  var CanvasDependencyTracker = class {
    #Ni = { __proto__: null };
    #Ui = { __proto__: null, transform: [], moveText: [], sameLineText: [], [et]: [] };
    #Hi = /* @__PURE__ */ new Map();
    #zi = /* @__PURE__ */ new Set();
    #ji = /* @__PURE__ */ new Map();
    #Gi;
    #Wi;
    #Vi;
    constructor(t2, e2 = false) {
      this.#Vi = t2;
      if (e2) {
        this.#Gi = /* @__PURE__ */ new Map();
        this.#Wi = (t3, e3) => {
          ensureDebugMetadata(this.#Gi, e3).dependencies.add(t3);
        };
      }
    }
    get clipBox() {
      return this.#Vi.clipBox;
    }
    growOperationsCount(t2) {
      this.#Vi.growOperationsCount(t2);
    }
    save(t2) {
      this.#Ni = { __proto__: this.#Ni };
      this.#Ui = { __proto__: this.#Ui, transform: { __proto__: this.#Ui.transform }, moveText: { __proto__: this.#Ui.moveText }, sameLineText: { __proto__: this.#Ui.sameLineText }, [et]: { __proto__: this.#Ui[et] } };
      this.#Vi.save(t2);
      return this;
    }
    restore(t2) {
      this.#Vi.restore(t2, this.#Wi);
      const e2 = Object.getPrototypeOf(this.#Ni);
      if (null === e2) return this;
      this.#Ni = e2;
      this.#Ui = Object.getPrototypeOf(this.#Ui);
      return this;
    }
    recordOpenMarker(t2) {
      this.#Vi.recordOpenMarker(t2, this.#Wi);
      return this;
    }
    getOpenMarker() {
      return this.#Vi.getOpenMarker();
    }
    recordCloseMarker(t2) {
      this.#Vi.recordCloseMarker(t2, this.#Wi);
      return this;
    }
    beginMarkedContent(t2) {
      this.#Vi.beginMarkedContent(t2);
      return this;
    }
    endMarkedContent(t2) {
      this.#Vi.endMarkedContent(t2, this.#Wi);
      return this;
    }
    pushBaseTransform(t2) {
      this.#Vi.pushBaseTransform(t2);
      return this;
    }
    popBaseTransform() {
      this.#Vi.popBaseTransform();
      return this;
    }
    recordSimpleData(t2, e2) {
      this.#Ni[t2] = e2;
      return this;
    }
    recordIncrementalData(t2, e2) {
      this.#Ui[t2].push(e2);
      return this;
    }
    resetIncrementalData(t2, e2) {
      this.#Ui[t2].length = 0;
      return this;
    }
    recordNamedData(t2, e2) {
      this.#Hi.set(t2, e2);
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      this.#Ni[t2] = this.#Hi.get(e2) ?? i2;
    }
    recordFutureForcedDependency(t2, e2) {
      this.recordIncrementalData(et, e2);
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      for (const e2 of t2) e2 in this.#Ni && this.recordFutureForcedDependency(e2, this.#Ni[e2]);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (const t2 of this.#zi) this.recordFutureForcedDependency(et, t2);
      return this;
    }
    resetBBox(t2) {
      this.#Vi.resetBBox(t2);
      return this;
    }
    recordClipBox(t2, e2, i2, n2, r2, s2) {
      this.#Vi.recordClipBox(t2, e2, i2, n2, r2, s2);
      return this;
    }
    recordBBox(t2, e2, i2, n2, r2, s2) {
      this.#Vi.recordBBox(t2, e2, i2, n2, r2, s2);
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2 = 1, r2 = 0, s2 = 0, a2) {
      const o2 = i2.bbox;
      let l2, h2;
      if (o2) {
        l2 = o2[2] !== o2[0] && o2[3] !== o2[1] && this.#ji.get(i2);
        if (false !== l2) {
          h2 = [0, 0, 0, 0];
          Util.axialAlignedBoundingBox(o2, i2.fontMatrix, h2);
          1 === n2 && 0 === r2 && 0 === s2 || Util.scaleMinMax([n2, 0, 0, -n2, r2, s2], h2);
          if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
        }
      }
      if (!a2) return this.recordFullPageBBox(t2);
      const c2 = a2();
      if (o2 && h2 && void 0 === l2) {
        l2 = h2[0] <= r2 - c2.actualBoundingBoxLeft && h2[2] >= r2 + c2.actualBoundingBoxRight && h2[1] <= s2 - c2.actualBoundingBoxAscent && h2[3] >= s2 + c2.actualBoundingBoxDescent;
        this.#ji.set(i2, l2);
        if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
      }
      return this.recordBBox(t2, e2, r2 - c2.actualBoundingBoxLeft, r2 + c2.actualBoundingBoxRight, s2 - c2.actualBoundingBoxAscent, s2 + c2.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t2) {
      this.#Vi.recordFullPageBBox(t2);
      return this;
    }
    getSimpleIndex(t2) {
      return this.#Ni[t2];
    }
    recordDependencies(t2, e2) {
      const i2 = this.#zi, n2 = this.#Ni, r2 = this.#Ui;
      for (const t3 of e2) t3 in this.#Ni ? i2.add(n2[t3]) : t3 in r2 && r2[t3].forEach(i2.add, i2);
      return this;
    }
    recordNamedDependency(t2, e2) {
      this.#Hi.has(e2) && this.#zi.add(this.#Hi.get(e2));
      return this;
    }
    recordOperation(t2, e2 = false) {
      this.recordDependencies(t2, [et]);
      if (this.#Gi) {
        const e3 = ensureDebugMetadata(this.#Gi, t2), { dependencies: i3 } = e3;
        this.#zi.forEach(i3.add, i3);
        this.#Vi._savesStack.forEach(i3.add, i3);
        this.#Vi._markedContentStack.forEach(i3.add, i3);
        i3.delete(t2);
        e3.isRenderingOperation = true;
      }
      const i2 = !e2 && t2 === this.#Vi._pendingBBoxIdx;
      this.#Vi.recordOperation(t2, e2, [this.#zi, this.#Vi._savesStack, this.#Vi._markedContentStack]);
      i2 && this.#zi.clear();
      return this;
    }
    recordShowTextOperation(t2, e2 = false) {
      const i2 = Array.from(this.#zi);
      this.recordOperation(t2, e2);
      this.recordIncrementalData("sameLineText", t2);
      for (const t3 of i2) this.recordIncrementalData("sameLineText", t3);
      return this;
    }
    bboxToClipBoxDropOperation(t2, e2 = false) {
      const i2 = !e2 && t2 === this.#Vi._pendingBBoxIdx;
      this.#Vi.bboxToClipBoxDropOperation(t2);
      i2 && this.#zi.clear();
      return this;
    }
    take() {
      this.#ji.clear();
      return this.#Vi.take();
    }
    takeDebugMetadata() {
      return this.#Gi;
    }
  };
  var CanvasNestedDependencyTracker = class _CanvasNestedDependencyTracker {
    #$i;
    #qi;
    #Xi;
    #Yi = 0;
    #Ki = 0;
    constructor(t2, e2, i2) {
      if (t2 instanceof _CanvasNestedDependencyTracker && t2.#Xi === !!i2) return t2;
      this.#$i = t2;
      this.#qi = e2;
      this.#Xi = !!i2;
    }
    get clipBox() {
      return this.#$i.clipBox;
    }
    growOperationsCount() {
      throw new Error("Unreachable");
    }
    save(t2) {
      this.#Ki++;
      this.#$i.save(this.#qi);
      return this;
    }
    restore(t2) {
      if (this.#Ki > 0) {
        this.#$i.restore(this.#qi);
        this.#Ki--;
      }
      return this;
    }
    recordOpenMarker(t2) {
      this.#Yi++;
      return this;
    }
    getOpenMarker() {
      return this.#Yi > 0 ? this.#qi : this.#$i.getOpenMarker();
    }
    recordCloseMarker(t2) {
      this.#Yi--;
      return this;
    }
    beginMarkedContent(t2) {
      return this;
    }
    endMarkedContent(t2) {
      return this;
    }
    pushBaseTransform(t2) {
      this.#$i.pushBaseTransform(t2);
      return this;
    }
    popBaseTransform() {
      this.#$i.popBaseTransform();
      return this;
    }
    recordSimpleData(t2, e2) {
      this.#$i.recordSimpleData(t2, this.#qi);
      return this;
    }
    recordIncrementalData(t2, e2) {
      this.#$i.recordIncrementalData(t2, this.#qi);
      return this;
    }
    resetIncrementalData(t2, e2) {
      this.#$i.resetIncrementalData(t2, this.#qi);
      return this;
    }
    recordNamedData(t2, e2) {
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      this.#$i.recordSimpleDataFromNamed(t2, e2, this.#qi);
      return this;
    }
    recordFutureForcedDependency(t2, e2) {
      this.#$i.recordFutureForcedDependency(t2, this.#qi);
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      this.#$i.inheritSimpleDataAsFutureForcedDependencies(t2);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      this.#$i.inheritPendingDependenciesAsFutureForcedDependencies();
      return this;
    }
    resetBBox(t2) {
      this.#Xi || this.#$i.resetBBox(this.#qi);
      return this;
    }
    recordClipBox(t2, e2, i2, n2, r2, s2) {
      this.#Xi || this.#$i.recordClipBox(this.#qi, e2, i2, n2, r2, s2);
      return this;
    }
    recordBBox(t2, e2, i2, n2, r2, s2) {
      this.#Xi || this.#$i.recordBBox(this.#qi, e2, i2, n2, r2, s2);
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2, r2, s2, a2) {
      this.#Xi || this.#$i.recordCharacterBBox(this.#qi, e2, i2, n2, r2, s2, a2);
      return this;
    }
    recordFullPageBBox(t2) {
      this.#Xi || this.#$i.recordFullPageBBox(this.#qi);
      return this;
    }
    getSimpleIndex(t2) {
      return this.#$i.getSimpleIndex(t2);
    }
    recordDependencies(t2, e2) {
      this.#$i.recordDependencies(this.#qi, e2);
      return this;
    }
    recordNamedDependency(t2, e2) {
      this.#$i.recordNamedDependency(this.#qi, e2);
      return this;
    }
    recordOperation(t2) {
      this.#$i.recordOperation(this.#qi, true);
      return this;
    }
    recordShowTextOperation(t2) {
      this.#$i.recordShowTextOperation(this.#qi, true);
      return this;
    }
    bboxToClipBoxDropOperation(t2) {
      this.#Xi || this.#$i.bboxToClipBoxDropOperation(this.#qi, true);
      return this;
    }
    take() {
      throw new Error("Unreachable");
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
  };
  var st = ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"];
  var ot = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"];
  var lt = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"];
  var ht = ["filter", "fillColor", "fillAlpha"];
  var ct = ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"];
  var dt = ["transform"];
  var ut = ["transform", "fillColor"];
  var CanvasImagesTracker = class _CanvasImagesTracker {
    #Ri;
    #Bi;
    #Ji = 4;
    #Qi = 0;
    #Mi = new _CanvasImagesTracker.#Zi(6 * this.#Ji);
    static #Zi = FeatureTest.isFloat16ArraySupported ? Float16Array : Float32Array;
    constructor(t2) {
      this.#Ri = t2.width;
      this.#Bi = t2.height;
    }
    record(t2, e2, i2, n2) {
      if (this.#Qi === this.#Ji) {
        this.#Ji *= 2;
        const t3 = new _CanvasImagesTracker.#Zi(6 * this.#Ji);
        t3.set(this.#Mi);
        this.#Mi = t3;
      }
      const r2 = Util.domMatrixToTransform(t2.getTransform());
      let s2;
      if (n2[0] !== 1 / 0) {
        const t3 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
        Util.axialAlignedBoundingBox([0, -i2, e2, 0], r2, t3);
        const a2 = Util.intersect(n2, t3);
        if (!a2) return;
        const [o2, l2, h2, c2] = a2;
        if (o2 !== t3[0] || l2 !== t3[1] || h2 !== t3[2] || c2 !== t3[3]) {
          const t4 = Math.atan2(r2[1], r2[0]), e3 = Math.abs(Math.sin(t4)), i3 = Math.abs(Math.cos(t4));
          if (e3 < 1e-6 || i3 < 1e-6 || Math.abs(e3 - i3) < 1e-6) s2 = [o2, l2, o2, c2, h2, l2];
          else {
            const t5 = h2 - o2, n3 = c2 - l2, r3 = e3 * e3, a3 = i3 * i3, d2 = i3 * e3, u2 = a3 - r3, p2 = (n3 * a3 - t5 * d2) / u2;
            s2 = [o2 + (n3 * d2 - t5 * r3) / u2, l2, o2, l2 + p2, h2, c2 - p2];
          }
        }
      }
      if (!s2) {
        s2 = [0, -i2, 0, 0, e2, -i2];
        Util.applyTransform(s2, r2, 0);
        Util.applyTransform(s2, r2, 2);
        Util.applyTransform(s2, r2, 4);
      }
      s2[0] /= this.#Ri;
      s2[1] /= this.#Bi;
      s2[2] /= this.#Ri;
      s2[3] /= this.#Bi;
      s2[4] /= this.#Ri;
      s2[5] /= this.#Bi;
      this.#Mi.set(s2, 6 * this.#Qi);
      this.#Qi++;
    }
    take() {
      return this.#Mi.subarray(0, 6 * this.#Qi);
    }
  };
  var FontLoader = class {
    #tn = /* @__PURE__ */ new Set();
    constructor({ ownerDocument: t2 = globalThis.document, styleElement: e2 = null }) {
      this._document = t2;
      this.nativeFontFaces = /* @__PURE__ */ new Set();
      this.styleElement = null;
      this.loadingRequests = [];
      this.loadTestFontId = 0;
    }
    addNativeFontFace(t2) {
      this.nativeFontFaces.add(t2);
      this._document.fonts.add(t2);
    }
    removeNativeFontFace(t2) {
      this.nativeFontFaces.delete(t2);
      this._document.fonts.delete(t2);
    }
    insertRule(t2) {
      if (!this.styleElement) {
        this.styleElement = this._document.createElement("style");
        this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
      }
      const e2 = this.styleElement.sheet;
      e2.insertRule(t2, e2.cssRules.length);
    }
    clear() {
      for (const t2 of this.nativeFontFaces) this._document.fonts.delete(t2);
      this.nativeFontFaces.clear();
      this.#tn.clear();
      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
    async loadSystemFont({ systemFontInfo: t2, disableFontFace: e2, _inspectFont: i2 }) {
      if (t2 && !this.#tn.has(t2.loadedName)) {
        assert(!e2, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
        if (this.isFontLoadingAPISupported) {
          const { loadedName: e3, src: n2, style: r2 } = t2, s2 = new FontFace(e3, n2, r2);
          this.addNativeFontFace(s2);
          try {
            await s2.load();
            this.#tn.add(e3);
            i2?.(t2);
          } catch {
            warn(`Cannot load system font: ${t2.baseFontName}, installing it could help to improve PDF rendering.`);
            this.removeNativeFontFace(s2);
          }
          return;
        }
        unreachable("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t2) {
      if (t2.attached || t2.missingFile && !t2.systemFontInfo) return;
      t2.attached = true;
      if (t2.systemFontInfo) {
        await this.loadSystemFont(t2);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const e3 = t2.createNativeFontFace();
        if (e3) {
          this.addNativeFontFace(e3);
          try {
            await e3.loaded;
          } catch (i2) {
            warn(`Failed to load font '${e3.family}': '${i2}'.`);
            t2.disableFontFace = true;
            throw i2;
          }
        }
        return;
      }
      const e2 = t2.createFontFaceRule();
      if (e2) {
        this.insertRule(e2);
        if (this.isSyncFontLoadingSupported) return;
        await new Promise((e3) => {
          const i2 = this._queueLoadingCallback(e3);
          this._prepareFontLoadEvent(t2, i2);
        });
      }
    }
    get isFontLoadingAPISupported() {
      return shadow(this, "isFontLoadingAPISupported", !!this._document?.fonts);
    }
    get isSyncFontLoadingSupported() {
      return shadow(this, "isSyncFontLoadingSupported", i || FeatureTest.platform.isFirefox);
    }
    _queueLoadingCallback(t2) {
      const { loadingRequests: e2 } = this, i2 = { done: false, complete: function completeRequest() {
        assert(!i2.done, "completeRequest() cannot be called twice.");
        i2.done = true;
        for (; e2.length > 0 && e2[0].done; ) {
          const t3 = e2.shift();
          setTimeout(t3.callback, 0);
        }
      }, callback: t2 };
      e2.push(i2);
      return i2;
    }
    get _loadTestFont() {
      return shadow(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
    }
    _prepareFontLoadEvent(t2, e2) {
      function int32(t3, e3) {
        return t3.charCodeAt(e3) << 24 | t3.charCodeAt(e3 + 1) << 16 | t3.charCodeAt(e3 + 2) << 8 | 255 & t3.charCodeAt(e3 + 3);
      }
      function spliceString(t3, e3, i3, n3) {
        return t3.substring(0, e3) + n3 + t3.substring(e3 + i3);
      }
      let i2, n2;
      const r2 = this._document.createElement("canvas");
      r2.width = 1;
      r2.height = 1;
      const s2 = r2.getContext("2d");
      let a2 = 0;
      const o2 = `lt${Date.now()}${this.loadTestFontId++}`;
      let l2 = this._loadTestFont;
      l2 = spliceString(l2, 976, o2.length, o2);
      const h2 = 1482184792;
      let c2 = int32(l2, 16);
      for (i2 = 0, n2 = o2.length - 3; i2 < n2; i2 += 4) c2 = c2 - h2 + int32(o2, i2) | 0;
      i2 < o2.length && (c2 = c2 - h2 + int32(o2 + "XXX", i2) | 0);
      l2 = spliceString(l2, 16, 4, (function string32(t3) {
        return String.fromCharCode(t3 >> 24 & 255, t3 >> 16 & 255, t3 >> 8 & 255, 255 & t3);
      })(c2));
      const d2 = `@font-face {font-family:"${o2}";src:${`url(data:font/opentype;base64,${btoa(l2)});`}}`;
      this.insertRule(d2);
      const u2 = this._document.createElement("div");
      u2.style.visibility = "hidden";
      u2.style.width = u2.style.height = "10px";
      u2.style.position = "absolute";
      u2.style.top = u2.style.left = "0px";
      for (const e3 of [t2.loadedName, o2]) {
        const t3 = this._document.createElement("span");
        t3.textContent = "Hi";
        t3.style.fontFamily = e3;
        u2.append(t3);
      }
      this._document.body.append(u2);
      !(function isFontReady(t3, e3) {
        if (++a2 > 30) {
          warn("Load test font never loaded.");
          e3();
          return;
        }
        s2.font = "30px " + t3;
        s2.fillText(".", 0, 20);
        s2.getImageData(0, 0, 1, 1).data[3] > 0 ? e3() : setTimeout(isFontReady.bind(null, t3, e3));
      })(o2, () => {
        u2.remove();
        e2.complete();
      });
    }
  };
  var FontFaceObject = class {
    compiledGlyphs = /* @__PURE__ */ Object.create(null);
    #en;
    constructor(t2, e2 = null, i2, n2) {
      this.#en = t2;
      this._inspectFont = e2;
      i2 && (this.charProcOperatorList = i2);
      n2 && Object.assign(this, n2);
    }
    createNativeFontFace() {
      if (!this.data || this.disableFontFace) return null;
      let t2;
      if (this.cssFontInfo) {
        const e2 = { weight: this.cssFontInfo.fontWeight };
        this.cssFontInfo.italicAngle && (e2.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
        t2 = new FontFace(this.cssFontInfo.fontFamily, this.data, e2);
      } else t2 = new FontFace(this.loadedName, this.data, {});
      this._inspectFont?.(this);
      return t2;
    }
    createFontFaceRule() {
      if (!this.data || this.disableFontFace) return null;
      const t2 = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
      let e2;
      if (this.cssFontInfo) {
        let i2 = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i2 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
        e2 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i2}src:${t2}}`;
      } else e2 = `@font-face {font-family:"${this.loadedName}";src:${t2}}`;
      this._inspectFont?.(this, t2);
      return e2;
    }
    getPathGenerator(t2, e2) {
      if (void 0 !== this.compiledGlyphs[e2]) return this.compiledGlyphs[e2];
      const i2 = this.loadedName + "_path_" + e2;
      let n2;
      try {
        n2 = t2.get(i2);
      } catch (t3) {
        warn(`getPathGenerator - ignoring character: "${t3}".`);
      }
      const r2 = makePathFromDrawOPS(n2?.path);
      this.fontExtraProperties || t2.delete(i2);
      return this.compiledGlyphs[e2] = r2;
    }
    get black() {
      return this.#en.black;
    }
    get bold() {
      return this.#en.bold;
    }
    get disableFontFace() {
      return this.#en.disableFontFace;
    }
    set disableFontFace(t2) {
      shadow(this, "disableFontFace", !!t2);
    }
    get fontExtraProperties() {
      return this.#en.fontExtraProperties;
    }
    get isInvalidPDFjsFont() {
      return this.#en.isInvalidPDFjsFont;
    }
    get isType3Font() {
      return this.#en.isType3Font;
    }
    get italic() {
      return this.#en.italic;
    }
    get missingFile() {
      return this.#en.missingFile;
    }
    get remeasure() {
      return this.#en.remeasure;
    }
    get vertical() {
      return this.#en.vertical;
    }
    get ascent() {
      return this.#en.ascent;
    }
    get defaultWidth() {
      return this.#en.defaultWidth;
    }
    get descent() {
      return this.#en.descent;
    }
    get bbox() {
      return this.#en.bbox;
    }
    get fontMatrix() {
      return this.#en.fontMatrix;
    }
    get fallbackName() {
      return this.#en.fallbackName;
    }
    get loadedName() {
      return this.#en.loadedName;
    }
    get mimetype() {
      return this.#en.mimetype;
    }
    get name() {
      return this.#en.name;
    }
    get data() {
      return this.#en.data;
    }
    clearData() {
      this.#en.clearData();
    }
    get cssFontInfo() {
      return this.#en.cssFontInfo;
    }
    get systemFontInfo() {
      return this.#en.systemFontInfo;
    }
    get defaultVMetrics() {
      return this.#en.defaultVMetrics;
    }
  };
  var CSS_FONT_INFO = class {
    static strings = ["fontFamily", "fontWeight", "italicAngle"];
  };
  var SYSTEM_FONT_INFO = class {
    static strings = ["css", "loadedName", "baseFontName", "src"];
  };
  var FONT_INFO = class {
    static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
    static numbers = ["ascent", "defaultWidth", "descent"];
    static strings = ["fallbackName", "loadedName", "mimetype", "name"];
    static OFFSET_NUMBERS = Math.ceil(2 * this.bools.length / 8);
    static OFFSET_BBOX = this.OFFSET_NUMBERS + 8 * this.numbers.length;
    static OFFSET_FONT_MATRIX = this.OFFSET_BBOX + 1 + 8;
    static OFFSET_DEFAULT_VMETRICS = this.OFFSET_FONT_MATRIX + 1 + 48;
    static OFFSET_STRINGS = this.OFFSET_DEFAULT_VMETRICS + 1 + 6;
  };
  var PATTERN_INFO = class {
    static KIND = 0;
    static HAS_BBOX = 1;
    static HAS_BACKGROUND = 2;
    static SHADING_TYPE = 3;
    static N_COORD = 4;
    static N_COLOR = 8;
    static N_STOP = 12;
    static N_FIGURES = 16;
  };
  var CssFontInfo = class {
    #in;
    #nn = new TextDecoder();
    #rn;
    constructor(t2) {
      this.#in = t2;
      this.#rn = new DataView(t2);
    }
    #sn(t2) {
      assert(t2 < CSS_FONT_INFO.strings.length, "Invalid string index");
      let e2 = 0;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#rn.getUint32(e2) + 4;
      const i2 = this.#rn.getUint32(e2);
      return this.#nn.decode(new Uint8Array(this.#in, e2 + 4, i2));
    }
    get fontFamily() {
      return this.#sn(0);
    }
    get fontWeight() {
      return this.#sn(1);
    }
    get italicAngle() {
      return this.#sn(2);
    }
  };
  var SystemFontInfo = class {
    #in;
    #nn = new TextDecoder();
    #rn;
    constructor(t2) {
      this.#in = t2;
      this.#rn = new DataView(t2);
    }
    get guessFallback() {
      return 0 !== this.#rn.getUint8(0);
    }
    #sn(t2) {
      assert(t2 < SYSTEM_FONT_INFO.strings.length, "Invalid string index");
      let e2 = 5;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#rn.getUint32(e2) + 4;
      const i2 = this.#rn.getUint32(e2);
      return this.#nn.decode(new Uint8Array(this.#in, e2 + 4, i2));
    }
    get css() {
      return this.#sn(0);
    }
    get loadedName() {
      return this.#sn(1);
    }
    get baseFontName() {
      return this.#sn(2);
    }
    get src() {
      return this.#sn(3);
    }
    get style() {
      let t2 = 1;
      t2 += 4 + this.#rn.getUint32(t2);
      const e2 = this.#rn.getUint32(t2), i2 = this.#nn.decode(new Uint8Array(this.#in, t2 + 4, e2));
      t2 += 4 + e2;
      const n2 = this.#rn.getUint32(t2);
      return { style: i2, weight: this.#nn.decode(new Uint8Array(this.#in, t2 + 4, n2)) };
    }
  };
  var FontInfo = class {
    #in;
    #nn = new TextDecoder();
    #rn;
    constructor({ buffer: t2, extra: e2 }) {
      this.#in = t2;
      this.#rn = new DataView(t2);
      e2 && Object.assign(this, e2);
    }
    #an(t2) {
      assert(t2 < FONT_INFO.bools.length, "Invalid boolean index");
      const e2 = Math.floor(t2 / 4), i2 = 2 * t2 % 8, n2 = this.#rn.getUint8(e2) >> i2 & 3;
      return 0 === n2 ? void 0 : 2 === n2;
    }
    get black() {
      return this.#an(0);
    }
    get bold() {
      return this.#an(1);
    }
    get disableFontFace() {
      return this.#an(2);
    }
    get fontExtraProperties() {
      return this.#an(3);
    }
    get isInvalidPDFjsFont() {
      return this.#an(4);
    }
    get isType3Font() {
      return this.#an(5);
    }
    get italic() {
      return this.#an(6);
    }
    get missingFile() {
      return this.#an(7);
    }
    get remeasure() {
      return this.#an(8);
    }
    get vertical() {
      return this.#an(9);
    }
    #on(t2) {
      assert(t2 < FONT_INFO.numbers.length, "Invalid number index");
      return this.#rn.getFloat64(FONT_INFO.OFFSET_NUMBERS + 8 * t2);
    }
    get ascent() {
      return this.#on(0);
    }
    get defaultWidth() {
      return this.#on(1);
    }
    get descent() {
      return this.#on(2);
    }
    #ln(t2, e2, i2, n2) {
      const r2 = this.#rn.getUint8(t2);
      if (0 === r2) return;
      assert(r2 === e2, "Invalid array length.");
      t2 += 1;
      const s2 = new Array(r2);
      for (let e3 = 0; e3 < r2; e3++) {
        s2[e3] = this.#rn[i2](t2, true);
        t2 += n2;
      }
      return s2;
    }
    get bbox() {
      return this.#ln(FONT_INFO.OFFSET_BBOX, 4, "getInt16", 2);
    }
    get fontMatrix() {
      return this.#ln(FONT_INFO.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
    }
    get defaultVMetrics() {
      return this.#ln(FONT_INFO.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
    }
    #sn(t2) {
      assert(t2 < FONT_INFO.strings.length, "Invalid string index");
      let e2 = FONT_INFO.OFFSET_STRINGS + 4;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#rn.getUint32(e2) + 4;
      const i2 = this.#rn.getUint32(e2);
      return this.#nn.decode(new Uint8Array(this.#in, e2 + 4, i2));
    }
    get fallbackName() {
      return this.#sn(0);
    }
    get loadedName() {
      return this.#sn(1);
    }
    get mimetype() {
      return this.#sn(2);
    }
    get name() {
      return this.#sn(3);
    }
    #hn() {
      let t2 = FONT_INFO.OFFSET_STRINGS;
      t2 += 4 + this.#rn.getUint32(t2);
      t2 += 4 + this.#rn.getUint32(t2);
      t2 += 4 + this.#rn.getUint32(t2);
      return { offset: t2, length: this.#rn.getUint32(t2) };
    }
    get data() {
      const { offset: t2, length: e2 } = this.#hn();
      return 0 === e2 ? void 0 : new Uint8Array(this.#in, t2 + 4, e2);
    }
    clearData() {
      const { offset: t2, length: e2 } = this.#hn();
      if (0 !== e2) {
        this.#rn.setUint32(t2, 0);
        this.#in = new Uint8Array(this.#in, 0, t2 + 4).slice().buffer;
        this.#rn = new DataView(this.#in);
      }
    }
    get cssFontInfo() {
      let t2 = FONT_INFO.OFFSET_STRINGS;
      t2 += 4 + this.#rn.getUint32(t2);
      t2 += 4 + this.#rn.getUint32(t2);
      const e2 = this.#rn.getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      i2.set(new Uint8Array(this.#in, t2 + 4, e2));
      return new CssFontInfo(i2.buffer);
    }
    get systemFontInfo() {
      let t2 = FONT_INFO.OFFSET_STRINGS;
      t2 += 4 + this.#rn.getUint32(t2);
      const e2 = this.#rn.getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      i2.set(new Uint8Array(this.#in, t2 + 4, e2));
      return new SystemFontInfo(i2.buffer);
    }
  };
  var PatternInfo = class {
    constructor(t2) {
      this.buffer = t2;
      this.view = new DataView(t2);
      this.data = new Uint8Array(t2);
    }
    getIR() {
      const t2 = this.view, e2 = this.data[PATTERN_INFO.KIND], i2 = !!this.data[PATTERN_INFO.HAS_BBOX], n2 = !!this.data[PATTERN_INFO.HAS_BACKGROUND], r2 = t2.getUint32(PATTERN_INFO.N_COORD, true), s2 = t2.getUint32(PATTERN_INFO.N_COLOR, true), a2 = t2.getUint32(PATTERN_INFO.N_STOP, true), o2 = t2.getUint32(PATTERN_INFO.N_FIGURES, true);
      let l2 = 20;
      const h2 = new Float32Array(this.buffer, l2, 2 * r2);
      l2 += 8 * r2;
      const c2 = new Uint8Array(this.buffer, l2, 3 * s2);
      l2 += 3 * s2;
      const d2 = [];
      for (let e3 = 0; e3 < a2; ++e3) {
        const e4 = t2.getFloat32(l2, true);
        l2 += 4;
        const i3 = t2.getUint32(l2, true);
        l2 += 4;
        d2.push([e4, `#${i3.toString(16).padStart(6, "0")}`]);
      }
      let u2 = null;
      if (i2) {
        u2 = [];
        for (let e3 = 0; e3 < 4; ++e3) {
          u2.push(t2.getFloat32(l2, true));
          l2 += 4;
        }
      }
      let p2 = null;
      if (n2) {
        p2 = new Uint8Array(this.buffer, l2, 3);
        l2 += 3;
      }
      const g2 = [];
      for (let e3 = 0; e3 < o2; ++e3) {
        const e4 = t2.getUint8(l2);
        l2 += 1;
        l2 = 4 * Math.ceil(l2 / 4);
        const i3 = t2.getUint32(l2, true);
        l2 += 4;
        const n3 = new Int32Array(this.buffer, l2, i3);
        l2 += 4 * i3;
        const r3 = t2.getUint32(l2, true);
        l2 += 4;
        const s3 = new Int32Array(this.buffer, l2, r3);
        l2 += 4 * r3;
        const a3 = { type: e4, coords: n3, colors: s3 };
        if (e4 === v) {
          a3.verticesPerRow = t2.getUint32(l2, true);
          l2 += 4;
        }
        g2.push(a3);
      }
      if (1 === e2) return ["RadialAxial", "axial", u2, d2, Array.from(h2.slice(0, 2)), Array.from(h2.slice(2, 4)), null, null];
      if (2 === e2) return ["RadialAxial", "radial", u2, d2, [h2[0], h2[1]], [h2[3], h2[4]], h2[2], h2[5]];
      if (3 === e2) {
        const t3 = this.data[PATTERN_INFO.SHADING_TYPE];
        let e3 = null;
        if (h2.length > 0) {
          e3 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
          for (let t4 = 0, i3 = h2.length; t4 < i3; t4 += 2) Util.pointBoundingBox(h2[t4], h2[t4 + 1], e3);
        }
        return ["Mesh", t3, h2, c2, g2, e3, u2, p2];
      }
      throw new Error(`Unsupported pattern kind: ${e2}`);
    }
  };
  var FontPathInfo = class {
    #in;
    constructor(t2) {
      this.#in = t2;
    }
    get path() {
      return FeatureTest.isFloat16ArraySupported ? new Float16Array(this.#in) : new Float32Array(this.#in);
    }
  };
  function getFactoryUrlProp(t2) {
    if ("string" != typeof t2) return null;
    if (t2.endsWith("/")) return t2;
    throw new Error(`Invalid factory url: "${t2}" must include trailing slash.`);
  }
  var isRefProxy = (t2) => "object" == typeof t2 && Number.isInteger(t2?.num) && t2.num >= 0 && Number.isInteger(t2?.gen) && t2.gen >= 0;
  var pt = function _isValidExplicitDest(t2, e2, i2) {
    if (!Array.isArray(i2) || i2.length < 2) return false;
    const [n2, r2, ...s2] = i2;
    if (!t2(n2) && !Number.isInteger(n2)) return false;
    if (!e2(r2)) return false;
    const a2 = s2.length;
    let o2 = true;
    switch (r2.name) {
      case "XYZ":
        if (a2 < 2 || a2 > 3) return false;
        break;
      case "Fit":
      case "FitB":
        return 0 === a2;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (a2 > 1) return false;
        break;
      case "FitR":
        if (4 !== a2) return false;
        o2 = false;
        break;
      default:
        return false;
    }
    for (const t3 of s2) if (!("number" == typeof t3 || o2 && null === t3)) return false;
    return true;
  }.bind(null, isRefProxy, (t2) => "object" == typeof t2 && "string" == typeof t2?.name);
  var LoopbackPort = class {
    #cn = /* @__PURE__ */ new Map();
    #dn = Promise.resolve();
    postMessage(t2, e2) {
      const i2 = { data: structuredClone(t2, e2 ? { transfer: e2 } : null) };
      this.#dn.then(() => {
        for (const [t3] of this.#cn) t3.call(this, i2);
      });
    }
    addEventListener(t2, e2, i2 = null) {
      let n2 = null;
      if (i2?.signal instanceof AbortSignal) {
        const { signal: r2 } = i2;
        if (r2.aborted) {
          warn("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const onAbort = () => this.removeEventListener(t2, e2);
        n2 = () => r2.removeEventListener("abort", onAbort);
        r2.addEventListener("abort", onAbort);
      }
      this.#cn.set(e2, n2);
    }
    removeEventListener(t2, e2) {
      const i2 = this.#cn.get(e2);
      i2?.();
      this.#cn.delete(e2);
    }
    terminate() {
      for (const [, t2] of this.#cn) t2?.();
      this.#cn.clear();
    }
  };
  __webpack_require__(1689);
  var gt = 1;
  var mt = 2;
  var ft = 1;
  var bt = 2;
  var yt = 3;
  var vt = 4;
  var wt = 5;
  var At = 6;
  var xt = 7;
  var Et = 8;
  function onFn() {
  }
  function wrapReason(t2) {
    if (t2 instanceof AbortException || t2 instanceof InvalidPDFException || t2 instanceof PasswordException || t2 instanceof ResponseException || t2 instanceof UnknownErrorException) return t2;
    t2 instanceof Error || "object" == typeof t2 && null !== t2 || unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
    switch (t2.name) {
      case "AbortException":
        return new AbortException(t2.message);
      case "InvalidPDFException":
        return new InvalidPDFException(t2.message);
      case "PasswordException":
        return new PasswordException(t2.message, t2.code);
      case "ResponseException":
        return new ResponseException(t2.message, t2.status, t2.missing);
      case "UnknownErrorException":
        return new UnknownErrorException(t2.message, t2.details);
    }
    return new UnknownErrorException(t2.message, t2.toString());
  }
  var MessageHandler = class {
    #un = new AbortController();
    constructor(t2, e2, i2) {
      this.sourceName = t2;
      this.targetName = e2;
      this.comObj = i2;
      this.callbackId = 1;
      this.streamId = 1;
      this.streamSinks = /* @__PURE__ */ Object.create(null);
      this.streamControllers = /* @__PURE__ */ Object.create(null);
      this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
      this.actionHandler = /* @__PURE__ */ Object.create(null);
      i2.addEventListener("message", this.#pn.bind(this), { signal: this.#un.signal });
    }
    #pn({ data: t2 }) {
      if (t2.targetName !== this.sourceName) return;
      if (t2.stream) {
        this.#gn(t2);
        return;
      }
      if (t2.callback) {
        const e3 = t2.callbackId, i2 = this.callbackCapabilities[e3];
        if (!i2) throw new Error(`Cannot resolve callback ${e3}`);
        delete this.callbackCapabilities[e3];
        if (t2.callback === gt) i2.resolve(t2.data);
        else {
          if (t2.callback !== mt) throw new Error("Unexpected callback case");
          i2.reject(wrapReason(t2.reason));
        }
        return;
      }
      const e2 = this.actionHandler[t2.action];
      if (!e2) throw new Error(`Unknown action from worker: ${t2.action}`);
      if (t2.callbackId) {
        const i2 = this.sourceName, n2 = t2.sourceName, r2 = this.comObj;
        Promise.try(e2, t2.data).then(function(e3) {
          r2.postMessage({ sourceName: i2, targetName: n2, callback: gt, callbackId: t2.callbackId, data: e3 });
        }, function(e3) {
          r2.postMessage({ sourceName: i2, targetName: n2, callback: mt, callbackId: t2.callbackId, reason: wrapReason(e3) });
        });
        return;
      }
      t2.streamId ? this.#mn(t2) : e2(t2.data);
    }
    on(t2, e2) {
      const i2 = this.actionHandler;
      if (i2[t2]) throw new Error(`There is already an actionName called "${t2}"`);
      i2[t2] = e2;
    }
    send(t2, e2, i2) {
      this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, data: e2 }, i2);
    }
    sendWithPromise(t2, e2, i2) {
      const n2 = this.callbackId++, r2 = Promise.withResolvers();
      this.callbackCapabilities[n2] = r2;
      try {
        this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, callbackId: n2, data: e2 }, i2);
      } catch (t3) {
        r2.reject(t3);
      }
      return r2.promise;
    }
    sendWithStream(t2, e2, i2, n2) {
      const r2 = this.streamId++, s2 = this.sourceName, a2 = this.targetName, o2 = this.comObj;
      return new ReadableStream({ start: (i3) => {
        const l2 = Promise.withResolvers();
        this.streamControllers[r2] = { controller: i3, startCall: l2, pullCall: null, cancelCall: null, isClosed: false };
        o2.postMessage({ sourceName: s2, targetName: a2, action: t2, streamId: r2, data: e2, desiredSize: i3.desiredSize }, n2);
        return l2.promise;
      }, pull: (t3) => {
        const e3 = Promise.withResolvers();
        this.streamControllers[r2].pullCall = e3;
        o2.postMessage({ sourceName: s2, targetName: a2, stream: At, streamId: r2, desiredSize: t3.desiredSize });
        return e3.promise;
      }, cancel: (t3) => {
        assert(t3 instanceof Error, "cancel must have a valid reason");
        const e3 = Promise.withResolvers();
        this.streamControllers[r2].cancelCall = e3;
        this.streamControllers[r2].isClosed = true;
        o2.postMessage({ sourceName: s2, targetName: a2, stream: ft, streamId: r2, reason: wrapReason(t3) });
        return e3.promise;
      } }, i2);
    }
    #mn(t2) {
      const e2 = t2.streamId, i2 = this.sourceName, n2 = t2.sourceName, r2 = this.comObj, s2 = this, a2 = this.actionHandler[t2.action], o2 = { enqueue(t3, s3 = 1, a3) {
        if (this.isCancelled) return;
        const o3 = this.desiredSize;
        this.desiredSize -= s3;
        if (o3 > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        r2.postMessage({ sourceName: i2, targetName: n2, stream: vt, streamId: e2, chunk: t3 }, a3);
      }, close() {
        if (!this.isCancelled) {
          this.isCancelled = true;
          r2.postMessage({ sourceName: i2, targetName: n2, stream: yt, streamId: e2 });
          delete s2.streamSinks[e2];
        }
      }, error(t3) {
        assert(t3 instanceof Error, "error must have a valid reason");
        if (!this.isCancelled) {
          this.isCancelled = true;
          r2.postMessage({ sourceName: i2, targetName: n2, stream: wt, streamId: e2, reason: wrapReason(t3) });
        }
      }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t2.desiredSize, ready: null };
      o2.sinkCapability.resolve();
      o2.ready = o2.sinkCapability.promise;
      this.streamSinks[e2] = o2;
      Promise.try(a2, t2.data, o2).then(function() {
        r2.postMessage({ sourceName: i2, targetName: n2, stream: Et, streamId: e2, success: true });
      }, function(t3) {
        r2.postMessage({ sourceName: i2, targetName: n2, stream: Et, streamId: e2, reason: wrapReason(t3) });
      });
    }
    #gn(t2) {
      const e2 = t2.streamId, i2 = this.sourceName, n2 = t2.sourceName, r2 = this.comObj, s2 = this.streamControllers[e2], a2 = this.streamSinks[e2];
      switch (t2.stream) {
        case Et:
          t2.success ? s2.startCall.resolve() : s2.startCall.reject(wrapReason(t2.reason));
          break;
        case xt:
          t2.success ? s2.pullCall.resolve() : s2.pullCall.reject(wrapReason(t2.reason));
          break;
        case At:
          if (!a2) {
            r2.postMessage({ sourceName: i2, targetName: n2, stream: xt, streamId: e2, success: true });
            break;
          }
          a2.desiredSize <= 0 && t2.desiredSize > 0 && a2.sinkCapability.resolve();
          a2.desiredSize = t2.desiredSize;
          Promise.try(a2.onPull || onFn).then(function() {
            r2.postMessage({ sourceName: i2, targetName: n2, stream: xt, streamId: e2, success: true });
          }, function(t3) {
            r2.postMessage({ sourceName: i2, targetName: n2, stream: xt, streamId: e2, reason: wrapReason(t3) });
          });
          break;
        case vt:
          assert(s2, "enqueue should have stream controller");
          if (s2.isClosed) break;
          s2.controller.enqueue(t2.chunk);
          break;
        case yt:
          assert(s2, "close should have stream controller");
          if (s2.isClosed) break;
          s2.isClosed = true;
          s2.controller.close();
          this.#fn(s2, e2);
          break;
        case wt:
          assert(s2, "error should have stream controller");
          s2.controller.error(wrapReason(t2.reason));
          this.#fn(s2, e2);
          break;
        case bt:
          t2.success ? s2.cancelCall.resolve() : s2.cancelCall.reject(wrapReason(t2.reason));
          this.#fn(s2, e2);
          break;
        case ft:
          if (!a2) break;
          const o2 = wrapReason(t2.reason);
          Promise.try(a2.onCancel || onFn, o2).then(function() {
            r2.postMessage({ sourceName: i2, targetName: n2, stream: bt, streamId: e2, success: true });
          }, function(t3) {
            r2.postMessage({ sourceName: i2, targetName: n2, stream: bt, streamId: e2, reason: wrapReason(t3) });
          });
          a2.sinkCapability.reject(o2);
          a2.isCancelled = true;
          delete this.streamSinks[e2];
          break;
        default:
          throw new Error("Unexpected stream case");
      }
    }
    async #fn(t2, e2) {
      await Promise.allSettled([t2.startCall?.promise, t2.pullCall?.promise, t2.cancelCall?.promise]);
      delete this.streamControllers[e2];
    }
    destroy() {
      this.#un?.abort();
      this.#un = null;
    }
  };
  var BaseBinaryDataFactory = class {
    #bn = Object.freeze({ cMapUrl: "CMap", standardFontDataUrl: "font", wasmUrl: "wasm" });
    constructor({ cMapUrl: t2 = null, standardFontDataUrl: e2 = null, wasmUrl: i2 = null }) {
      this.cMapUrl = t2;
      this.standardFontDataUrl = e2;
      this.wasmUrl = i2;
    }
    async fetch({ kind: t2, filename: e2 }) {
      switch (t2) {
        case "cMapUrl":
        case "standardFontDataUrl":
        case "wasmUrl":
          break;
        default:
          unreachable(`Not implemented: ${t2}`);
      }
      const i2 = this[t2];
      if (!i2) throw new Error(`Ensure that the \`${t2}\` API parameter is provided.`);
      const n2 = `${i2}${e2}`;
      return this._fetch(n2, t2).catch((e3) => {
        throw new Error(`Unable to load ${this.#bn[t2]} data at: ${n2}`);
      });
    }
    async _fetch(t2, e2) {
      unreachable("Abstract method `_fetch` called.");
    }
  };
  var DOMBinaryDataFactory = class extends BaseBinaryDataFactory {
    async _fetch(t2, e2) {
      const i2 = "cMapUrl" !== e2 || t2.endsWith(".bcmap") ? "bytes" : "text", n2 = await fetchData(t2, i2);
      return n2 instanceof Uint8Array ? n2 : stringToBytes(n2);
    }
  };
  var BaseCanvasFactory = class {
    #yn = false;
    constructor({ enableHWA: t2 = false }) {
      this.#yn = t2;
    }
    create(t2, e2) {
      if (t2 <= 0 || e2 <= 0) throw new Error("Invalid canvas size");
      const i2 = this._createCanvas(t2, e2);
      return { canvas: i2, context: i2.getContext("2d", { willReadFrequently: !this.#yn }) };
    }
    reset({ canvas: t2 }, e2, i2) {
      if (!t2) throw new Error("Canvas is not specified");
      if (e2 <= 0 || i2 <= 0) throw new Error("Invalid canvas size");
      t2.width = e2;
      t2.height = i2;
    }
    destroy(t2) {
      const { canvas: e2 } = t2;
      if (!e2) throw new Error("Canvas is not specified");
      e2.width = e2.height = 0;
      t2.canvas = null;
      t2.context = null;
    }
    _createCanvas(t2, e2) {
      unreachable("Abstract method `_createCanvas` called.");
    }
  };
  var DOMCanvasFactory = class extends BaseCanvasFactory {
    constructor({ ownerDocument: t2 = globalThis.document, enableHWA: e2 = false }) {
      super({ enableHWA: e2 });
      this._document = t2;
    }
    _createCanvas(t2, e2) {
      const i2 = this._document.createElement("canvas");
      i2.width = t2;
      i2.height = e2;
      return i2;
    }
  };
  __webpack_require__(2489);
  var BaseFilterFactory = class {
    addFilter(t2) {
      return "none";
    }
    addHCMFilter(t2, e2) {
      return "none";
    }
    addAlphaFilter(t2) {
      return "none";
    }
    addLuminosityFilter(t2) {
      return "none";
    }
    addHighlightHCMFilter(t2, e2, i2, n2, r2) {
      return "none";
    }
    destroy(t2 = false) {
    }
  };
  var DOMFilterFactory = class extends BaseFilterFactory {
    #vn;
    #wn;
    #An;
    #xn;
    #En;
    #_n;
    #S = 0;
    constructor({ docId: t2, ownerDocument: e2 = globalThis.document }) {
      super();
      this.#xn = t2;
      this.#En = e2;
    }
    get #D() {
      return this.#wn ||= /* @__PURE__ */ new Map();
    }
    get #Tn() {
      return this.#_n ||= /* @__PURE__ */ new Map();
    }
    get #Sn() {
      if (!this.#An) {
        const t2 = this.#En.createElement("div"), { style: e2 } = t2;
        e2.visibility = "hidden";
        e2.contain = "strict";
        e2.width = e2.height = 0;
        e2.position = "absolute";
        e2.top = e2.left = 0;
        e2.zIndex = -1;
        const i2 = this.#En.createElementNS(X, "svg");
        i2.setAttribute("width", 0);
        i2.setAttribute("height", 0);
        this.#An = this.#En.createElementNS(X, "defs");
        t2.append(i2);
        i2.append(this.#An);
        this.#En.body.append(t2);
      }
      return this.#An;
    }
    #Cn(t2) {
      if (1 === t2.length) {
        const e3 = t2[0], i3 = new Array(256);
        for (let t3 = 0; t3 < 256; t3++) i3[t3] = e3[t3] / 255;
        const n3 = i3.join(",");
        return [n3, n3, n3];
      }
      const [e2, i2, n2] = t2, r2 = new Array(256), s2 = new Array(256), a2 = new Array(256);
      for (let t3 = 0; t3 < 256; t3++) {
        r2[t3] = e2[t3] / 255;
        s2[t3] = i2[t3] / 255;
        a2[t3] = n2[t3] / 255;
      }
      return [r2.join(","), s2.join(","), a2.join(",")];
    }
    #Dn(t2) {
      if (void 0 === this.#vn) {
        this.#vn = "";
        const t3 = this.#En.URL;
        t3 !== this.#En.baseURI && (isDataScheme(t3) ? warn('#createUrl: ignore "data:"-URL for performance reasons.') : this.#vn = updateUrlHash(t3, ""));
      }
      return `url(${this.#vn}#${t2})`;
    }
    addFilter(t2) {
      if (!t2) return "none";
      let e2 = this.#D.get(t2);
      if (e2) return e2;
      const [i2, n2, r2] = this.#Cn(t2), s2 = 1 === t2.length ? i2 : `${i2}${n2}${r2}`;
      e2 = this.#D.get(s2);
      if (e2) {
        this.#D.set(t2, e2);
        return e2;
      }
      const a2 = `g_${this.#xn}_transfer_map_${this.#S++}`, o2 = this.#Dn(a2);
      this.#D.set(t2, o2);
      this.#D.set(s2, o2);
      const l2 = this.#Pn(a2);
      this.#Mn(i2, n2, r2, l2);
      return o2;
    }
    addHCMFilter(t2, e2) {
      const i2 = `${t2}-${e2}`, n2 = "base";
      let r2 = this.#Tn.get(n2);
      if (r2?.key === i2) return r2.url;
      if (r2) {
        r2.filter?.remove();
        r2.key = i2;
        r2.url = "none";
        r2.filter = null;
      } else {
        r2 = { key: i2, url: "none", filter: null };
        this.#Tn.set(n2, r2);
      }
      if (!t2 || !e2) return r2.url;
      const s2 = this.#kn(t2);
      t2 = Util.makeHexColor(...s2);
      const a2 = this.#kn(e2);
      e2 = Util.makeHexColor(...a2);
      this.#Sn.style.color = "";
      if ("#000000" === t2 && "#ffffff" === e2 || t2 === e2) return r2.url;
      const o2 = new Array(256);
      for (let t3 = 0; t3 <= 255; t3++) {
        const e3 = t3 / 255;
        o2[t3] = e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
      }
      const l2 = o2.join(","), h2 = `g_${this.#xn}_hcm_filter`, c2 = r2.filter = this.#Pn(h2);
      this.#Mn(l2, l2, l2, c2);
      this.#In(c2);
      const getSteps = (t3, e3) => {
        const i3 = s2[t3] / 255, n3 = a2[t3] / 255, r3 = new Array(e3 + 1);
        for (let t4 = 0; t4 <= e3; t4++) r3[t4] = i3 + t4 / e3 * (n3 - i3);
        return r3.join(",");
      };
      this.#Mn(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), c2);
      r2.url = this.#Dn(h2);
      return r2.url;
    }
    addAlphaFilter(t2) {
      let e2 = this.#D.get(t2);
      if (e2) return e2;
      const [i2] = this.#Cn([t2]), n2 = `alpha_${i2}`;
      e2 = this.#D.get(n2);
      if (e2) {
        this.#D.set(t2, e2);
        return e2;
      }
      const r2 = `g_${this.#xn}_alpha_map_${this.#S++}`, s2 = this.#Dn(r2);
      this.#D.set(t2, s2);
      this.#D.set(n2, s2);
      const a2 = this.#Pn(r2);
      this.#Fn(i2, a2);
      return s2;
    }
    addLuminosityFilter(t2) {
      let e2, i2, n2 = this.#D.get(t2 || "luminosity");
      if (n2) return n2;
      if (t2) {
        [e2] = this.#Cn([t2]);
        i2 = `luminosity_${e2}`;
      } else i2 = "luminosity";
      n2 = this.#D.get(i2);
      if (n2) {
        this.#D.set(t2, n2);
        return n2;
      }
      const r2 = `g_${this.#xn}_luminosity_map_${this.#S++}`, s2 = this.#Dn(r2);
      this.#D.set(t2, s2);
      this.#D.set(i2, s2);
      const a2 = this.#Pn(r2);
      this.#Rn(a2);
      t2 && this.#Fn(e2, a2);
      return s2;
    }
    addHighlightHCMFilter(t2, e2, i2, n2, r2) {
      const s2 = `${e2}-${i2}-${n2}-${r2}`;
      let a2 = this.#Tn.get(t2);
      if (a2?.key === s2) return a2.url;
      if (a2) {
        a2.filter?.remove();
        a2.key = s2;
        a2.url = "none";
        a2.filter = null;
      } else {
        a2 = { key: s2, url: "none", filter: null };
        this.#Tn.set(t2, a2);
      }
      if (!e2 || !i2) return a2.url;
      const [o2, l2] = [e2, i2].map(this.#kn.bind(this));
      let h2 = Math.round(0.2126 * o2[0] + 0.7152 * o2[1] + 0.0722 * o2[2]), c2 = Math.round(0.2126 * l2[0] + 0.7152 * l2[1] + 0.0722 * l2[2]), [d2, u2] = [n2, r2].map(this.#kn.bind(this));
      c2 < h2 && ([h2, c2, d2, u2] = [c2, h2, u2, d2]);
      this.#Sn.style.color = "";
      const getSteps = (t3, e3, i3) => {
        const n3 = new Array(256), r3 = (c2 - h2) / i3, s3 = t3 / 255, a3 = (e3 - t3) / (255 * i3);
        let o3 = 0;
        for (let t4 = 0; t4 <= i3; t4++) {
          const e4 = Math.round(h2 + t4 * r3), i4 = s3 + t4 * a3;
          for (let t5 = o3; t5 <= e4; t5++) n3[t5] = i4;
          o3 = e4 + 1;
        }
        for (let t4 = o3; t4 < 256; t4++) n3[t4] = n3[o3 - 1];
        return n3.join(",");
      }, p2 = `g_${this.#xn}_hcm_${t2}_filter`, g2 = a2.filter = this.#Pn(p2);
      this.#In(g2);
      this.#Mn(getSteps(d2[0], u2[0], 5), getSteps(d2[1], u2[1], 5), getSteps(d2[2], u2[2], 5), g2);
      a2.url = this.#Dn(p2);
      return a2.url;
    }
    destroy(t2 = false) {
      if (!t2 || !this.#_n?.size) {
        this.#An?.parentNode.parentNode.remove();
        this.#An = null;
        this.#wn?.clear();
        this.#wn = null;
        this.#_n?.clear();
        this.#_n = null;
        this.#S = 0;
      }
    }
    #Rn(t2) {
      const e2 = this.#En.createElementNS(X, "feColorMatrix");
      e2.setAttribute("type", "matrix");
      e2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
      t2.append(e2);
    }
    #In(t2) {
      const e2 = this.#En.createElementNS(X, "feColorMatrix");
      e2.setAttribute("type", "matrix");
      e2.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
      t2.append(e2);
    }
    #Pn(t2) {
      const e2 = this.#En.createElementNS(X, "filter");
      e2.setAttribute("color-interpolation-filters", "sRGB");
      e2.setAttribute("id", t2);
      this.#Sn.append(e2);
      return e2;
    }
    #Bn(t2, e2, i2) {
      const n2 = this.#En.createElementNS(X, e2);
      n2.setAttribute("type", "discrete");
      n2.setAttribute("tableValues", i2);
      t2.append(n2);
    }
    #Mn(t2, e2, i2, n2) {
      const r2 = this.#En.createElementNS(X, "feComponentTransfer");
      n2.append(r2);
      this.#Bn(r2, "feFuncR", t2);
      this.#Bn(r2, "feFuncG", e2);
      this.#Bn(r2, "feFuncB", i2);
    }
    #Fn(t2, e2) {
      const i2 = this.#En.createElementNS(X, "feComponentTransfer");
      e2.append(i2);
      this.#Bn(i2, "feFuncA", t2);
    }
    #kn(t2) {
      this.#Sn.style.color = t2;
      return getRGB(getComputedStyle(this.#Sn).getPropertyValue("color"));
    }
  };
  if (i) {
    let t2;
    try {
      const e2 = process.getBuiltinModule("module").createRequire(import_meta.url);
      try {
        t2 = e2("@napi-rs/canvas");
      } catch (t3) {
        warn(`Cannot load "@napi-rs/canvas" package: "${t3}".`);
      }
    } catch (t3) {
      warn(`Cannot access the \`require\` function: "${t3}".`);
    }
    globalThis.DOMMatrix || (t2?.DOMMatrix ? globalThis.DOMMatrix = t2.DOMMatrix : warn("Cannot polyfill `DOMMatrix`, rendering may be broken."));
    globalThis.ImageData || (t2?.ImageData ? globalThis.ImageData = t2.ImageData : warn("Cannot polyfill `ImageData`, rendering may be broken."));
    globalThis.Path2D || (t2?.Path2D ? globalThis.Path2D = t2.Path2D : warn("Cannot polyfill `Path2D`, rendering may be broken."));
    globalThis.navigator?.language || (globalThis.navigator = { language: "en-US", platform: "", userAgent: "" });
  }
  var NodeFilterFactory = class extends BaseFilterFactory {
  };
  var NodeCanvasFactory = class extends BaseCanvasFactory {
    _createCanvas(t2, e2) {
      return process.getBuiltinModule("module").createRequire(import_meta.url)("@napi-rs/canvas").createCanvas(t2, e2);
    }
  };
  var NodeBinaryDataFactory = class extends BaseBinaryDataFactory {
    async _fetch(t2, e2) {
      return (async function node_utils_fetchData(t3) {
        const e3 = process.getBuiltinModule("fs"), i2 = await e3.promises.readFile(t3);
        return new Uint8Array(i2);
      })(t2);
    }
  };
  var _t = new class WebGPUMesh {
    #On = null;
    #Ln = null;
    #Nn = null;
    #Un = null;
    async #Hn() {
      if (!globalThis.navigator?.gpu) return false;
      try {
        const t2 = await navigator.gpu.requestAdapter();
        if (!t2) return false;
        this.#Un = navigator.gpu.getPreferredCanvasFormat();
        const e2 = this.#Ln = await t2.requestDevice(), i2 = e2.createShaderModule({ code: "\nstruct Uniforms {\n  offsetX      : f32,\n  offsetY      : f32,\n  scaleX       : f32,\n  scaleY       : f32,\n  paddedWidth  : f32,\n  paddedHeight : f32,\n  borderSize   : f32,\n  _pad         : f32,\n};\n\n@group(0) @binding(0) var<uniform> u : Uniforms;\n\nstruct VertexInput {\n  @location(0) position : vec2<f32>,\n  @location(1) color    : vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) position : vec4<f32>,\n  @location(0)       color    : vec3<f32>,\n};\n\n@vertex\nfn vs_main(in : VertexInput) -> VertexOutput {\n  var out : VertexOutput;\n  let cx = (in.position.x + u.offsetX) * u.scaleX;\n  let cy = (in.position.y + u.offsetY) * u.scaleY;\n  out.position = vec4<f32>(\n    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,\n    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,\n    0.0,\n    1.0\n  );\n  out.color = in.color.rgb;\n  return out;\n}\n\n@fragment\nfn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {\n  return vec4<f32>(in.color, 1.0);\n}\n" });
        this.#Nn = e2.createRenderPipeline({ layout: "auto", vertex: { module: i2, entryPoint: "vs_main", buffers: [{ arrayStride: 8, attributes: [{ shaderLocation: 0, offset: 0, format: "float32x2" }] }, { arrayStride: 4, attributes: [{ shaderLocation: 1, offset: 0, format: "unorm8x4" }] }] }, fragment: { module: i2, entryPoint: "fs_main", targets: [{ format: this.#Un }] }, primitive: { topology: "triangle-list" } });
        return true;
      } catch {
        return false;
      }
    }
    init() {
      null === this.#On && (this.#On = this.#Hn());
    }
    get isReady() {
      return null !== this.#Ln;
    }
    #zn(t2, e2) {
      const { coords: i2, colors: n2 } = e2;
      let r2 = 0;
      for (const e3 of t2) {
        const t3 = e3.coords;
        if (e3.type === y) r2 += t3.length;
        else if (e3.type === v) {
          const i3 = e3.verticesPerRow;
          r2 += (Math.floor(t3.length / i3) - 1) * (i3 - 1) * 6;
        }
      }
      const s2 = new Float32Array(2 * r2), a2 = new Uint8Array(4 * r2);
      let o2 = 0, l2 = 0;
      const addVertex = (t3, e3) => {
        s2[o2++] = i2[2 * t3];
        s2[o2++] = i2[2 * t3 + 1];
        a2[l2++] = n2[4 * e3];
        a2[l2++] = n2[4 * e3 + 1];
        a2[l2++] = n2[4 * e3 + 2];
        l2++;
      };
      for (const e3 of t2) {
        const t3 = e3.coords, i3 = e3.colors;
        if (e3.type === y) for (let e4 = 0, n3 = t3.length; e4 < n3; e4 += 3) {
          addVertex(t3[e4], i3[e4]);
          addVertex(t3[e4 + 1], i3[e4 + 1]);
          addVertex(t3[e4 + 2], i3[e4 + 2]);
        }
        else if (e3.type === v) {
          const n3 = e3.verticesPerRow, r3 = Math.floor(t3.length / n3) - 1, s3 = n3 - 1;
          for (let e4 = 0; e4 < r3; e4++) {
            let r4 = e4 * n3;
            for (let e5 = 0; e5 < s3; e5++, r4++) {
              addVertex(t3[r4], i3[r4]);
              addVertex(t3[r4 + 1], i3[r4 + 1]);
              addVertex(t3[r4 + n3], i3[r4 + n3]);
              addVertex(t3[r4 + n3 + 1], i3[r4 + n3 + 1]);
              addVertex(t3[r4 + 1], i3[r4 + 1]);
              addVertex(t3[r4 + n3], i3[r4 + n3]);
            }
          }
        }
      }
      return { posData: s2, colData: a2, vertexCount: r2 };
    }
    draw(t2, e2, i2, n2, r2, s2) {
      const a2 = this.#Ln, { offsetX: o2, offsetY: l2, scaleX: h2, scaleY: c2 } = e2, { posData: d2, colData: u2, vertexCount: p2 } = this.#zn(t2, e2), g2 = a2.createBuffer({ size: Math.max(d2.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      d2.byteLength > 0 && a2.queue.writeBuffer(g2, 0, d2);
      const m2 = a2.createBuffer({ size: Math.max(u2.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      u2.byteLength > 0 && a2.queue.writeBuffer(m2, 0, u2);
      const f2 = a2.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
      a2.queue.writeBuffer(f2, 0, new Float32Array([o2, l2, h2, c2, n2, r2, s2, 0]));
      const b2 = a2.createBindGroup({ layout: this.#Nn.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: f2 } }] }), y2 = new OffscreenCanvas(n2, r2), v2 = y2.getContext("webgpu");
      v2.configure({ device: a2, format: this.#Un, alphaMode: i2 ? "opaque" : "premultiplied" });
      const w2 = i2 ? { r: i2[0] / 255, g: i2[1] / 255, b: i2[2] / 255, a: 1 } : { r: 0, g: 0, b: 0, a: 0 }, A2 = a2.createCommandEncoder(), x2 = A2.beginRenderPass({ colorAttachments: [{ view: v2.getCurrentTexture().createView(), clearValue: w2, loadOp: "clear", storeOp: "store" }] });
      if (p2 > 0) {
        x2.setPipeline(this.#Nn);
        x2.setBindGroup(0, b2);
        x2.setVertexBuffer(0, g2);
        x2.setVertexBuffer(1, m2);
        x2.draw(p2);
      }
      x2.end();
      a2.queue.submit([A2.finish()]);
      g2.destroy();
      m2.destroy();
      f2.destroy();
      return y2.transferToImageBitmap();
    }
  }();
  var Tt = "Fill";
  var St = "Stroke";
  var Ct = "Shading";
  function applyBoundingBox(t2, e2) {
    if (!e2) return;
    const i2 = e2[2] - e2[0], n2 = e2[3] - e2[1], r2 = new Path2D();
    r2.rect(e2[0], e2[1], i2, n2);
    t2.clip(r2);
  }
  var BaseShadingPattern = class {
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern() {
      unreachable("Abstract method `getPattern` called.");
    }
  };
  var RadialAxialShadingPattern = class extends BaseShadingPattern {
    constructor(t2) {
      super();
      this._type = t2[1];
      this._bbox = t2[2];
      this._colorStops = t2[3];
      this._p0 = t2[4];
      this._p1 = t2[5];
      this._r0 = t2[6];
      this._r1 = t2[7];
      this.matrix = null;
    }
    isOriginBased() {
      return 0 === this._p0[0] && 0 === this._p0[1] && (!this.isRadial() || 0 === this._p1[0] && 0 === this._p1[1]);
    }
    isRadial() {
      return "radial" === this._type;
    }
    _isCircleCenterOutside() {
      if (!this.isRadial() || this._r0 > this._r1) return false;
      return Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]) > this._r1;
    }
    _createGradient(t2, e2 = null) {
      let i2, n2 = this._p0, r2 = this._p1;
      if (e2) {
        n2 = n2.slice();
        r2 = r2.slice();
        Util.applyTransform(n2, e2);
        Util.applyTransform(r2, e2);
      }
      if ("axial" === this._type) i2 = t2.createLinearGradient(n2[0], n2[1], r2[0], r2[1]);
      else if ("radial" === this._type) {
        let s2 = this._r0, a2 = this._r1;
        if (e2) {
          const t3 = new Float32Array(2);
          Util.singularValueDecompose2dScale(e2, t3);
          s2 *= t3[0];
          a2 *= t3[0];
        }
        i2 = t2.createRadialGradient(n2[0], n2[1], s2, r2[0], r2[1], a2);
      }
      for (const t3 of this._colorStops) i2.addColorStop(t3[0], t3[1]);
      return i2;
    }
    _createReversedGradient(t2, e2 = null) {
      let i2 = this._p1, n2 = this._p0;
      if (e2) {
        i2 = i2.slice();
        n2 = n2.slice();
        Util.applyTransform(i2, e2);
        Util.applyTransform(n2, e2);
      }
      let r2 = this._r1, s2 = this._r0;
      if (e2) {
        const t3 = new Float32Array(2);
        Util.singularValueDecompose2dScale(e2, t3);
        r2 *= t3[0];
        s2 *= t3[0];
      }
      const a2 = t2.createRadialGradient(i2[0], i2[1], r2, n2[0], n2[1], s2), o2 = this._colorStops.map(([t3, e3]) => [1 - t3, e3]).reverse();
      for (const [t3, e3] of o2) a2.addColorStop(t3, e3);
      return a2;
    }
    getPattern(t2, e2, i2, n2) {
      let r2;
      if (n2 === St || n2 === Tt) {
        if (this.isOriginBased()) {
          let n3 = Util.transform(i2, e2.baseTransform);
          this.matrix && (n3 = Util.transform(n3, this.matrix));
          const r3 = 1e-3, s3 = Math.hypot(n3[0], n3[1]), a3 = Math.hypot(n3[2], n3[3]), o3 = (n3[0] * n3[2] + n3[1] * n3[3]) / (s3 * a3);
          if (Math.abs(o3) < r3) {
            if (!this.isRadial()) return this._createGradient(t2, n3);
            if (Math.abs(s3 - a3) < r3) return this._createGradient(t2, n3);
          }
        }
        const s2 = e2.current.getClippedPathBoundingBox(n2, getCurrentTransform(t2)) || [0, 0, 0, 0], a2 = Math.ceil(s2[2] - s2[0]) || 1, o2 = Math.ceil(s2[3] - s2[1]) || 1, l2 = e2.canvasFactory.create(a2, o2), h2 = l2.context;
        h2.clearRect(0, 0, h2.canvas.width, h2.canvas.height);
        h2.beginPath();
        h2.rect(0, 0, h2.canvas.width, h2.canvas.height);
        h2.translate(-s2[0], -s2[1]);
        i2 = Util.transform(i2, [1, 0, 0, 1, s2[0], s2[1]]);
        h2.transform(...e2.baseTransform);
        this.matrix && h2.transform(...this.matrix);
        applyBoundingBox(h2, this._bbox);
        if (this._isCircleCenterOutside()) {
          h2.fillStyle = this._createReversedGradient(h2);
          h2.fill();
        }
        h2.fillStyle = this._createGradient(h2);
        h2.fill();
        r2 = t2.createPattern(l2.canvas, "no-repeat");
        e2.canvasFactory.destroy(l2);
        const c2 = new DOMMatrix(i2);
        r2.setTransform(c2);
      } else {
        if (this._isCircleCenterOutside()) {
          t2.save();
          applyBoundingBox(t2, this._bbox);
          t2.fillStyle = this._createReversedGradient(t2);
          t2.fillRect(-1e10, -1e10, 2e10, 2e10);
          t2.restore();
        }
        applyBoundingBox(t2, this._bbox);
        r2 = this._createGradient(t2);
      }
      return r2;
    }
  };
  function drawTriangle(t2, e2, i2, n2, r2, s2, a2, o2) {
    const l2 = e2.coords, h2 = e2.colors, c2 = t2.data, d2 = 4 * t2.width;
    let u2;
    if (l2[2 * i2 + 1] > l2[2 * n2 + 1]) {
      u2 = i2;
      i2 = n2;
      n2 = u2;
      u2 = s2;
      s2 = a2;
      a2 = u2;
    }
    if (l2[2 * n2 + 1] > l2[2 * r2 + 1]) {
      u2 = n2;
      n2 = r2;
      r2 = u2;
      u2 = a2;
      a2 = o2;
      o2 = u2;
    }
    if (l2[2 * i2 + 1] > l2[2 * n2 + 1]) {
      u2 = i2;
      i2 = n2;
      n2 = u2;
      u2 = s2;
      s2 = a2;
      a2 = u2;
    }
    const p2 = (l2[2 * i2] + e2.offsetX) * e2.scaleX, g2 = (l2[2 * i2 + 1] + e2.offsetY) * e2.scaleY, m2 = (l2[2 * n2] + e2.offsetX) * e2.scaleX, f2 = (l2[2 * n2 + 1] + e2.offsetY) * e2.scaleY, b2 = (l2[2 * r2] + e2.offsetX) * e2.scaleX, y2 = (l2[2 * r2 + 1] + e2.offsetY) * e2.scaleY;
    if (g2 >= y2) return;
    const v2 = h2[4 * s2], w2 = h2[4 * s2 + 1], A2 = h2[4 * s2 + 2], x2 = h2[4 * a2], E2 = h2[4 * a2 + 1], _2 = h2[4 * a2 + 2], T2 = h2[4 * o2], S2 = h2[4 * o2 + 1], C2 = h2[4 * o2 + 2], D2 = Math.round(g2), P2 = Math.round(y2);
    let M2, k2, I2, R2, B2, O2, L2, N2;
    for (let t3 = D2; t3 <= P2; t3++) {
      if (t3 < f2) {
        const e4 = t3 < g2 ? 0 : (g2 - t3) / (g2 - f2);
        M2 = p2 - (p2 - m2) * e4;
        k2 = v2 - (v2 - x2) * e4;
        I2 = w2 - (w2 - E2) * e4;
        R2 = A2 - (A2 - _2) * e4;
      } else {
        let e4;
        e4 = t3 > y2 ? 1 : f2 === y2 ? 0 : (f2 - t3) / (f2 - y2);
        M2 = m2 - (m2 - b2) * e4;
        k2 = x2 - (x2 - T2) * e4;
        I2 = E2 - (E2 - S2) * e4;
        R2 = _2 - (_2 - C2) * e4;
      }
      let e3;
      e3 = t3 < g2 ? 0 : t3 > y2 ? 1 : (g2 - t3) / (g2 - y2);
      B2 = p2 - (p2 - b2) * e3;
      O2 = v2 - (v2 - T2) * e3;
      L2 = w2 - (w2 - S2) * e3;
      N2 = A2 - (A2 - C2) * e3;
      const i3 = Math.round(Math.min(M2, B2)), n3 = Math.round(Math.max(M2, B2));
      let r3 = d2 * t3 + 4 * i3;
      for (let t4 = i3; t4 <= n3; t4++) {
        e3 = (M2 - t4) / (M2 - B2);
        e3 < 0 ? e3 = 0 : e3 > 1 && (e3 = 1);
        c2[r3++] = k2 - (k2 - O2) * e3 | 0;
        c2[r3++] = I2 - (I2 - L2) * e3 | 0;
        c2[r3++] = R2 - (R2 - N2) * e3 | 0;
        c2[r3++] = 255;
      }
    }
  }
  function drawFigure(t2, e2, i2) {
    const n2 = e2.coords, r2 = e2.colors;
    let s2, a2;
    switch (e2.type) {
      case v:
        const o2 = e2.verticesPerRow, l2 = Math.floor(n2.length / o2) - 1, h2 = o2 - 1;
        for (s2 = 0; s2 < l2; s2++) {
          let e3 = s2 * o2;
          for (let s3 = 0; s3 < h2; s3++, e3++) {
            drawTriangle(t2, i2, n2[e3], n2[e3 + 1], n2[e3 + o2], r2[e3], r2[e3 + 1], r2[e3 + o2]);
            drawTriangle(t2, i2, n2[e3 + o2 + 1], n2[e3 + 1], n2[e3 + o2], r2[e3 + o2 + 1], r2[e3 + 1], r2[e3 + o2]);
          }
        }
        break;
      case y:
        for (s2 = 0, a2 = n2.length; s2 < a2; s2 += 3) drawTriangle(t2, i2, n2[s2], n2[s2 + 1], n2[s2 + 2], r2[s2], r2[s2 + 1], r2[s2 + 2]);
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  var MeshShadingPattern = class extends BaseShadingPattern {
    constructor(t2) {
      super();
      this._coords = t2[2];
      this._colors = t2[3];
      this._figures = t2[4];
      this._bounds = t2[5];
      this._bbox = t2[6];
      this._background = t2[7];
      this.matrix = null;
    }
    _createMeshCanvas(t2, e2, i2) {
      const n2 = Math.floor(this._bounds[0]), r2 = Math.floor(this._bounds[1]), s2 = Math.ceil(this._bounds[2]) - n2, a2 = Math.ceil(this._bounds[3]) - r2, o2 = Math.min(Math.ceil(Math.abs(s2 * t2[0] * 1.1)), 3e3) || 1, l2 = Math.min(Math.ceil(Math.abs(a2 * t2[1] * 1.1)), 3e3) || 1, h2 = s2 ? s2 / o2 : 1, c2 = a2 ? a2 / l2 : 1, d2 = { coords: this._coords, colors: this._colors, offsetX: -n2, offsetY: -r2, scaleX: 1 / h2, scaleY: 1 / c2 }, u2 = o2 + 4, p2 = l2 + 4, g2 = i2.create(u2, p2);
      if ((function isWebGPUMeshReady() {
        return _t.isReady;
      })()) g2.context.drawImage((function drawMeshWithGPU(t3, e3, i3, n3, r3, s3) {
        return _t.draw(t3, e3, i3, n3, r3, s3);
      })(this._figures, d2, e2, u2, p2, 2), 0, 0);
      else {
        const t3 = g2.context.createImageData(o2, l2);
        if (e2) {
          const i3 = t3.data;
          for (let t4 = 0, n3 = i3.length; t4 < n3; t4 += 4) {
            i3[t4] = e2[0];
            i3[t4 + 1] = e2[1];
            i3[t4 + 2] = e2[2];
            i3[t4 + 3] = 255;
          }
        }
        for (const e3 of this._figures) drawFigure(t3, e3, d2);
        g2.context.putImageData(t3, 2, 2);
      }
      return { canvas: g2.canvas, offsetX: n2 - 2 * h2, offsetY: r2 - 2 * c2, scaleX: h2, scaleY: c2 };
    }
    isModifyingCurrentTransform() {
      return true;
    }
    getPattern(t2, e2, i2, n2) {
      applyBoundingBox(t2, this._bbox);
      const r2 = new Float32Array(2);
      if (n2 === Ct) Util.singularValueDecompose2dScale(getCurrentTransform(t2), r2);
      else if (this.matrix) {
        Util.singularValueDecompose2dScale(this.matrix, r2);
        const [t3, i3] = r2;
        Util.singularValueDecompose2dScale(e2.baseTransform, r2);
        r2[0] *= t3;
        r2[1] *= i3;
      } else Util.singularValueDecompose2dScale(e2.baseTransform, r2);
      const s2 = this._createMeshCanvas(r2, n2 === Ct ? null : this._background, e2.canvasFactory);
      if (n2 !== Ct) {
        t2.setTransform(...e2.baseTransform);
        this.matrix && t2.transform(...this.matrix);
      }
      t2.translate(s2.offsetX, s2.offsetY);
      t2.scale(s2.scaleX, s2.scaleY);
      const a2 = t2.createPattern(s2.canvas, "no-repeat");
      e2.canvasFactory.destroy(s2);
      return a2;
    }
  };
  var DummyShadingPattern = class extends BaseShadingPattern {
    getPattern() {
      return "hotpink";
    }
  };
  var Dt = 1;
  var Pt = 2;
  var TilingPattern = class _TilingPattern {
    static MAX_PATTERN_SIZE = 3e3;
    constructor(t2, e2, i2, n2) {
      this.color = t2[1];
      this.operatorList = t2[2];
      this.matrix = t2[3];
      this.bbox = t2[4];
      this.xstep = t2[5];
      this.ystep = t2[6];
      this.paintType = t2[7];
      this.tilingType = t2[8];
      this.ctx = e2;
      this.canvasGraphicsFactory = i2;
      this.baseTransform = n2;
    }
    createPatternCanvas(t2, e2) {
      const { bbox: i2, operatorList: n2, paintType: r2, tilingType: s2, color: a2, canvasGraphicsFactory: o2 } = this;
      let { xstep: l2, ystep: h2 } = this;
      l2 = Math.abs(l2);
      h2 = Math.abs(h2);
      info("TilingType: " + s2);
      const c2 = i2[0], d2 = i2[1], u2 = i2[2], p2 = i2[3], g2 = u2 - c2, m2 = p2 - d2, f2 = new Float32Array(2);
      Util.singularValueDecompose2dScale(this.matrix, f2);
      const [b2, y2] = f2;
      Util.singularValueDecompose2dScale(this.baseTransform, f2);
      const v2 = b2 * f2[0], w2 = y2 * f2[1];
      let A2 = g2, x2 = m2, E2 = false, _2 = false;
      const T2 = Math.ceil(l2 * v2), S2 = Math.ceil(h2 * w2);
      T2 >= Math.ceil(g2 * v2) ? A2 = l2 : E2 = true;
      S2 >= Math.ceil(m2 * w2) ? x2 = h2 : _2 = true;
      const C2 = this.getSizeAndScale(A2, this.ctx.canvas.width, v2), D2 = this.getSizeAndScale(x2, this.ctx.canvas.height, w2), P2 = t2.canvasFactory.create(C2.size, D2.size), M2 = P2.context, k2 = o2.createCanvasGraphics(M2, e2);
      k2.groupLevel = t2.groupLevel;
      this.setFillAndStrokeStyleToContext(k2, r2, a2);
      M2.translate(-C2.scale * c2, -D2.scale * d2);
      k2.transform(0, C2.scale, 0, 0, D2.scale, 0, 0);
      M2.save();
      k2.dependencyTracker?.save();
      this.clipBbox(k2, c2, d2, u2, p2);
      k2.baseTransform = getCurrentTransform(k2.ctx);
      k2.executeOperatorList(n2);
      k2.endDrawing();
      k2.dependencyTracker?.restore();
      M2.restore();
      if (E2 || _2) {
        const e3 = P2.canvas;
        E2 && (A2 = l2);
        _2 && (x2 = h2);
        const i3 = this.getSizeAndScale(A2, this.ctx.canvas.width, v2), n3 = this.getSizeAndScale(x2, this.ctx.canvas.height, w2), r3 = i3.size, s3 = n3.size, a3 = t2.canvasFactory.create(r3, s3), o3 = a3.context, u3 = E2 ? Math.floor(g2 / l2) : 0, p3 = _2 ? Math.floor(m2 / h2) : 0;
        for (let t3 = 0; t3 <= u3; t3++) for (let i4 = 0; i4 <= p3; i4++) o3.drawImage(e3, r3 * t3, s3 * i4, r3, s3, 0, 0, r3, s3);
        t2.canvasFactory.destroy(P2);
        return { canvas: a3.canvas, canvasEntry: a3, scaleX: i3.scale, scaleY: n3.scale, offsetX: c2, offsetY: d2 };
      }
      return { canvas: P2.canvas, canvasEntry: P2, scaleX: C2.scale, scaleY: D2.scale, offsetX: c2, offsetY: d2 };
    }
    getSizeAndScale(t2, e2, i2) {
      const n2 = Math.max(_TilingPattern.MAX_PATTERN_SIZE, e2);
      let r2 = Math.ceil(t2 * i2);
      r2 >= n2 ? r2 = n2 : i2 = r2 / t2;
      return { scale: i2, size: r2 };
    }
    clipBbox(t2, e2, i2, n2, r2) {
      const s2 = n2 - e2, a2 = r2 - i2;
      t2.ctx.rect(e2, i2, s2, a2);
      Util.axialAlignedBoundingBox([e2, i2, n2, r2], getCurrentTransform(t2.ctx), t2.current.minMax);
      t2.clip();
      t2.endPath();
    }
    setFillAndStrokeStyleToContext(t2, e2, i2) {
      const n2 = t2.ctx, r2 = t2.current;
      switch (e2) {
        case Dt:
          const { fillStyle: t3, strokeStyle: s2 } = this.ctx;
          n2.fillStyle = r2.fillColor = t3;
          n2.strokeStyle = r2.strokeColor = s2;
          break;
        case Pt:
          n2.fillStyle = n2.strokeStyle = i2;
          r2.fillColor = r2.strokeColor = i2;
          break;
        default:
          throw new FormatError(`Unsupported paint type: ${e2}`);
      }
    }
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern(t2, e2, i2, n2, r2) {
      let s2 = i2;
      if (n2 !== Ct) {
        s2 = Util.transform(s2, e2.baseTransform);
        this.matrix && (s2 = Util.transform(s2, this.matrix));
      }
      const a2 = this.createPatternCanvas(e2, r2);
      let o2 = new DOMMatrix(s2);
      o2 = o2.translate(a2.offsetX, a2.offsetY);
      o2 = o2.scale(1 / a2.scaleX, 1 / a2.scaleY);
      const l2 = t2.createPattern(a2.canvas, "repeat");
      e2.canvasFactory.destroy(a2.canvasEntry);
      l2.setTransform(o2);
      return l2;
    }
  };
  function convertBlackAndWhiteToRGBA({ src: t2, srcPos: e2 = 0, dest: i2, width: n2, height: r2, nonBlackColor: s2 = 4294967295, inverseDecode: a2 = false }) {
    const o2 = FeatureTest.isLittleEndian ? 4278190080 : 255, [l2, h2] = a2 ? [s2, o2] : [o2, s2], c2 = n2 >> 3, d2 = 7 & n2, u2 = l2 ^ h2, p2 = t2.length;
    i2 = new Uint32Array(i2.buffer);
    let g2 = 0;
    for (let n3 = 0; n3 < r2; ++n3) {
      for (const n5 = e2 + c2; e2 < n5; ++e2, g2 += 8) {
        const n6 = t2[e2];
        i2[g2] = l2 ^ -(n6 >> 7 & 1) & u2;
        i2[g2 + 1] = l2 ^ -(n6 >> 6 & 1) & u2;
        i2[g2 + 2] = l2 ^ -(n6 >> 5 & 1) & u2;
        i2[g2 + 3] = l2 ^ -(n6 >> 4 & 1) & u2;
        i2[g2 + 4] = l2 ^ -(n6 >> 3 & 1) & u2;
        i2[g2 + 5] = l2 ^ -(n6 >> 2 & 1) & u2;
        i2[g2 + 6] = l2 ^ -(n6 >> 1 & 1) & u2;
        i2[g2 + 7] = l2 ^ -(1 & n6) & u2;
      }
      if (0 === d2) continue;
      const n4 = e2 < p2 ? t2[e2++] : 255;
      for (let t3 = 0; t3 < d2; ++t3, ++g2) i2[g2] = l2 ^ -(n4 >> 7 - t3 & 1) & u2;
    }
    return { srcPos: e2, destPos: g2 };
  }
  var Mt = 16;
  var kt = new DOMMatrix();
  var It = new Float32Array(2);
  var Ft = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
  function drawImageAtIntegerCoords(t2, e2, i2, n2, r2, s2, a2, o2, l2, h2) {
    const [c2, d2, u2, p2, g2, m2] = getCurrentTransform(t2);
    if (0 === d2 && 0 === u2) {
      const f2 = a2 * c2 + g2, b2 = Math.round(f2), y2 = o2 * p2 + m2, v2 = Math.round(y2), w2 = (a2 + l2) * c2 + g2, A2 = Math.abs(Math.round(w2) - b2) || 1, x2 = (o2 + h2) * p2 + m2, E2 = Math.abs(Math.round(x2) - v2) || 1;
      t2.setTransform(Math.sign(c2), 0, 0, Math.sign(p2), b2, v2);
      t2.drawImage(e2, i2, n2, r2, s2, 0, 0, A2, E2);
      t2.setTransform(c2, d2, u2, p2, g2, m2);
      return [A2, E2];
    }
    if (0 === c2 && 0 === p2) {
      const f2 = o2 * u2 + g2, b2 = Math.round(f2), y2 = a2 * d2 + m2, v2 = Math.round(y2), w2 = (o2 + h2) * u2 + g2, A2 = Math.abs(Math.round(w2) - b2) || 1, x2 = (a2 + l2) * d2 + m2, E2 = Math.abs(Math.round(x2) - v2) || 1;
      t2.setTransform(0, Math.sign(d2), Math.sign(u2), 0, b2, v2);
      t2.drawImage(e2, i2, n2, r2, s2, 0, 0, E2, A2);
      t2.setTransform(c2, d2, u2, p2, g2, m2);
      return [E2, A2];
    }
    t2.drawImage(e2, i2, n2, r2, s2, a2, o2, l2, h2);
    return [Math.hypot(c2, d2) * l2, Math.hypot(u2, p2) * h2];
  }
  var CanvasExtraState = class {
    alphaIsShape = false;
    fontSize = 0;
    fontSizeScale = 1;
    textMatrix = null;
    textMatrixScale = 1;
    fontMatrix = n;
    leading = 0;
    x = 0;
    y = 0;
    lineX = 0;
    lineY = 0;
    charSpacing = 0;
    wordSpacing = 0;
    textHScale = 1;
    textRenderingMode = w;
    textRise = 0;
    fillColor = "#000000";
    strokeColor = "#000000";
    patternFill = false;
    patternStroke = false;
    fillAlpha = 1;
    strokeAlpha = 1;
    lineWidth = 1;
    activeSMask = null;
    transferMaps = "none";
    minMax = Ft.slice();
    constructor(t2, e2) {
      this.clipBox = new Float32Array([0, 0, t2, e2]);
    }
    clone() {
      const t2 = Object.create(this);
      t2.clipBox = this.clipBox.slice();
      t2.minMax = this.minMax.slice();
      return t2;
    }
    getPathBoundingBox(t2 = Tt, e2 = null) {
      const i2 = this.minMax.slice();
      if (t2 === St) {
        e2 || unreachable("Stroke bounding box must include transform.");
        Util.singularValueDecompose2dScale(e2, It);
        const t3 = It[0] * this.lineWidth / 2, n2 = It[1] * this.lineWidth / 2;
        i2[0] -= t3;
        i2[1] -= n2;
        i2[2] += t3;
        i2[3] += n2;
      }
      return i2;
    }
    updateClipFromPath() {
      const t2 = Util.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t2 || [0, 0, 0, 0]);
    }
    isEmptyClip() {
      return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t2) {
      this.clipBox.set(t2, 0);
      this.minMax.set(Ft, 0);
    }
    getClippedPathBoundingBox(t2 = Tt, e2 = null) {
      return Util.intersect(this.clipBox, this.getPathBoundingBox(t2, e2));
    }
  };
  function putBinaryImageData(t2, e2) {
    if (e2 instanceof ImageData) {
      t2.putImageData(e2, 0, 0);
      return;
    }
    const i2 = e2.height, n2 = e2.width, r2 = i2 % Mt, s2 = (i2 - r2) / Mt, a2 = 0 === r2 ? s2 : s2 + 1, o2 = t2.createImageData(n2, Mt);
    let l2, h2 = 0;
    const c2 = e2.data, d2 = o2.data;
    let u2, p2, g2, m2;
    if (e2.kind === S.GRAYSCALE_1BPP) {
      const e3 = c2.byteLength, i3 = new Uint32Array(d2.buffer, 0, d2.byteLength >> 2), m3 = i3.length, f2 = n2 + 7 >> 3, b2 = 4294967295, y2 = FeatureTest.isLittleEndian ? 4278190080 : 255;
      for (u2 = 0; u2 < a2; u2++) {
        g2 = u2 < s2 ? Mt : r2;
        l2 = 0;
        for (p2 = 0; p2 < g2; p2++) {
          const t3 = e3 - h2;
          let r3 = 0;
          const s3 = t3 > f2 ? n2 : 8 * t3 - 7, a3 = -8 & s3;
          let o3 = 0, d3 = 0;
          for (; r3 < a3; r3 += 8) {
            d3 = c2[h2++];
            i3[l2++] = 128 & d3 ? b2 : y2;
            i3[l2++] = 64 & d3 ? b2 : y2;
            i3[l2++] = 32 & d3 ? b2 : y2;
            i3[l2++] = 16 & d3 ? b2 : y2;
            i3[l2++] = 8 & d3 ? b2 : y2;
            i3[l2++] = 4 & d3 ? b2 : y2;
            i3[l2++] = 2 & d3 ? b2 : y2;
            i3[l2++] = 1 & d3 ? b2 : y2;
          }
          for (; r3 < s3; r3++) {
            if (0 === o3) {
              d3 = c2[h2++];
              o3 = 128;
            }
            i3[l2++] = d3 & o3 ? b2 : y2;
            o3 >>= 1;
          }
        }
        for (; l2 < m3; ) i3[l2++] = 0;
        t2.putImageData(o2, 0, u2 * Mt);
      }
    } else if (e2.kind === S.RGBA_32BPP) {
      p2 = 0;
      m2 = n2 * Mt * 4;
      for (u2 = 0; u2 < s2; u2++) {
        d2.set(c2.subarray(h2, h2 + m2));
        h2 += m2;
        t2.putImageData(o2, 0, p2);
        p2 += Mt;
      }
      if (u2 < a2) {
        m2 = n2 * r2 * 4;
        d2.set(c2.subarray(h2, h2 + m2));
        t2.putImageData(o2, 0, p2);
      }
    } else {
      if (e2.kind !== S.RGB_24BPP) throw new Error(`bad image kind: ${e2.kind}`);
      g2 = Mt;
      m2 = n2 * g2;
      for (u2 = 0; u2 < a2; u2++) {
        if (u2 >= s2) {
          g2 = r2;
          m2 = n2 * g2;
        }
        l2 = 0;
        for (p2 = m2; p2--; ) {
          d2[l2++] = c2[h2++];
          d2[l2++] = c2[h2++];
          d2[l2++] = c2[h2++];
          d2[l2++] = 255;
        }
        t2.putImageData(o2, 0, u2 * Mt);
      }
    }
  }
  function putBinaryImageMask(t2, e2) {
    if (e2.bitmap) {
      t2.drawImage(e2.bitmap, 0, 0);
      return;
    }
    const i2 = e2.height, n2 = e2.width, r2 = i2 % Mt, s2 = (i2 - r2) / Mt, a2 = 0 === r2 ? s2 : s2 + 1, o2 = t2.createImageData(n2, Mt);
    let l2 = 0;
    const h2 = e2.data, c2 = o2.data;
    for (let e3 = 0; e3 < a2; e3++) {
      const i3 = e3 < s2 ? Mt : r2;
      ({ srcPos: l2 } = convertBlackAndWhiteToRGBA({ src: h2, srcPos: l2, dest: c2, width: n2, height: i3, nonBlackColor: 0 }));
      t2.putImageData(o2, 0, e3 * Mt);
    }
  }
  function copyCtxState(t2, e2) {
    const i2 = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
    for (const n2 of i2) void 0 !== t2[n2] && (e2[n2] = t2[n2]);
    if (void 0 !== t2.setLineDash) {
      e2.setLineDash(t2.getLineDash());
      e2.lineDashOffset = t2.lineDashOffset;
    }
  }
  function resetCtxToDefault(t2) {
    t2.strokeStyle = t2.fillStyle = "#000000";
    t2.fillRule = "nonzero";
    t2.globalAlpha = 1;
    t2.lineWidth = 1;
    t2.lineCap = "butt";
    t2.lineJoin = "miter";
    t2.miterLimit = 10;
    t2.globalCompositeOperation = "source-over";
    t2.font = "10px sans-serif";
    if (void 0 !== t2.setLineDash) {
      t2.setLineDash([]);
      t2.lineDashOffset = 0;
    }
    const { filter: e2 } = t2;
    "none" !== e2 && "" !== e2 && (t2.filter = "none");
  }
  function getImageSmoothingEnabled(t2, e2) {
    if (e2) return true;
    Util.singularValueDecompose2dScale(t2, It);
    const i2 = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
    return It[0] <= i2 && It[1] <= i2;
  }
  var Rt = ["butt", "round", "square"];
  var Bt = ["miter", "round", "bevel"];
  var Ot = {};
  var Lt = {};
  var CanvasGraphics = class _CanvasGraphics {
    constructor(t2, e2, i2, n2, r2, { optionalContentConfig: s2, markedContentStack: a2 = null }, o2, l2, h2, c2) {
      this.ctx = t2;
      this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
      this.stateStack = [];
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.commonObjs = e2;
      this.objs = i2;
      this.canvasFactory = n2;
      this.filterFactory = r2;
      this.groupStack = [];
      this.baseTransform = null;
      this.baseTransformStack = [];
      this.groupLevel = 0;
      this.smaskStack = [];
      this.smaskCounter = 0;
      this.tempSMask = null;
      this.smaskGroupCanvases = [];
      this.suspendedCtx = null;
      this.contentVisible = true;
      this.markedContentStack = a2 || [];
      this.optionalContentConfig = s2;
      this.cachedPatterns = /* @__PURE__ */ new Map();
      this.annotationCanvasMap = o2;
      this.viewportScale = 1;
      this.outputScaleX = 1;
      this.outputScaleY = 1;
      this.pageColors = l2;
      this._cachedScaleForStroking = [-1, 0];
      this._cachedGetSinglePixelWidth = null;
      this._cachedBitmapsMap = /* @__PURE__ */ new Map();
      this.dependencyTracker = h2 ?? null;
      this.imagesTracker = c2 ?? null;
    }
    getObject(t2, e2, i2 = null) {
      if ("string" == typeof e2) {
        this.dependencyTracker?.recordNamedDependency(t2, e2);
        return e2.startsWith("g_") ? this.commonObjs.get(e2) : this.objs.get(e2);
      }
      return i2;
    }
    beginDrawing({ transform: t2, viewport: e2, transparency: i2 = false, background: n2 = null }) {
      const r2 = this.ctx.canvas.width, s2 = this.ctx.canvas.height, a2 = this.ctx.fillStyle;
      this.ctx.fillStyle = n2 || "#ffffff";
      this.ctx.fillRect(0, 0, r2, s2);
      this.ctx.fillStyle = a2;
      if (i2) {
        const t3 = this.transparentCanvasEntry = this.canvasFactory.create(r2, s2);
        this.compositeCtx = this.ctx;
        ({ canvas: this.transparentCanvas, context: this.ctx } = t3);
        this.ctx.save();
        this.ctx.transform(...getCurrentTransform(this.compositeCtx));
      }
      this.ctx.save();
      resetCtxToDefault(this.ctx);
      if (t2) {
        this.ctx.transform(...t2);
        this.outputScaleX = t2[0];
        this.outputScaleY = t2[0];
      }
      this.ctx.transform(...e2.transform);
      this.viewportScale = e2.scale;
      this.baseTransform = getCurrentTransform(this.ctx);
    }
    executeOperatorList(t2, e2, i2, n2, r2) {
      const s2 = t2.argsArray, a2 = t2.fnArray;
      let o2 = e2 || 0;
      const l2 = s2.length;
      if (l2 === o2) return o2;
      const h2 = l2 - o2 > 10 && "function" == typeof i2, c2 = h2 ? Date.now() + 15 : 0;
      let d2 = 0;
      const u2 = this.commonObjs, p2 = this.objs;
      let g2, m2;
      for (; ; ) {
        if (void 0 !== n2) {
          if (o2 === n2.nextBreakPoint) {
            n2.breakIt(o2, i2);
            return o2;
          }
          if (n2.shouldSkip(o2)) {
            if (++o2 === l2) return o2;
            continue;
          }
        }
        if (!r2 || r2(o2)) {
          g2 = a2[o2];
          m2 = s2[o2] ?? null;
          if (g2 !== B.dependency) null === m2 ? this[g2](o2) : this[g2](o2, ...m2);
          else for (const t3 of m2) {
            this.dependencyTracker?.recordNamedData(t3, o2);
            const e3 = t3.startsWith("g_") ? u2 : p2;
            if (!e3.has(t3)) {
              e3.get(t3, i2);
              return o2;
            }
          }
        }
        o2++;
        if (o2 === l2) return o2;
        if (h2 && ++d2 > 10) {
          if (Date.now() > c2) {
            i2();
            return o2;
          }
          d2 = 0;
        }
      }
    }
    #jn() {
      for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
      this.current.activeSMask = null;
      this.ctx.restore();
      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.canvasFactory.destroy(this.transparentCanvasEntry);
        this.transparentCanvas = null;
        this.transparentCanvasEntry = null;
      }
    }
    endDrawing() {
      this.#jn();
      for (const t2 of this.smaskGroupCanvases) this.canvasFactory.destroy(t2);
      this.smaskGroupCanvases.length = 0;
      this.tempSMask = null;
      this.smaskStack.length = 0;
      this.cachedPatterns.clear();
      for (const t2 of this._cachedBitmapsMap.values()) {
        for (const e2 of t2.values()) "undefined" != typeof HTMLCanvasElement && e2 instanceof HTMLCanvasElement && (e2.width = e2.height = 0);
        t2.clear();
      }
      this._cachedBitmapsMap.clear();
      this.#Gn();
    }
    #Gn() {
      if (this.pageColors) {
        const t2 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if ("none" !== t2) {
          const e2 = this.ctx.filter;
          this.ctx.filter = t2;
          this.ctx.drawImage(this.ctx.canvas, 0, 0);
          this.ctx.filter = e2;
        }
      }
    }
    _scaleImage(t2, e2) {
      const i2 = t2.width ?? t2.displayWidth, n2 = t2.height ?? t2.displayHeight, r2 = [];
      let s2 = Math.max(Math.hypot(e2[0], e2[1]), 1), a2 = Math.max(Math.hypot(e2[2], e2[3]), 1), o2 = i2, l2 = n2;
      for (; s2 > 2 && o2 > 1 || a2 > 2 && l2 > 1; ) {
        let t3 = o2, e3 = l2;
        if (s2 > 2 && o2 > 1) {
          t3 = o2 >= 16384 ? Math.floor(o2 / 2) - 1 || 1 : Math.ceil(o2 / 2);
          s2 /= o2 / t3;
        }
        if (a2 > 2 && l2 > 1) {
          e3 = l2 >= 16384 ? Math.floor(l2 / 2) - 1 || 1 : Math.ceil(l2) / 2;
          a2 /= l2 / e3;
        }
        r2.push({ newWidth: t3, newHeight: e3 });
        o2 = t3;
        l2 = e3;
      }
      if (0 === r2.length) return { img: t2, paintWidth: i2, paintHeight: n2, tmpCanvas: null };
      if (1 === r2.length) {
        const { newWidth: e3, newHeight: s3 } = r2[0], a3 = this.canvasFactory.create(e3, s3);
        a3.context.drawImage(t2, 0, 0, i2, n2, 0, 0, e3, s3);
        return { img: a3.canvas, paintWidth: e3, paintHeight: s3, tmpCanvas: a3 };
      }
      let h2 = this.canvasFactory.create(1, 1), c2 = this.canvasFactory.create(1, 1), d2 = i2, u2 = n2, p2 = t2;
      for (const { newWidth: t3, newHeight: e3 } of r2) {
        this.canvasFactory.reset(c2, t3, e3);
        c2.context.drawImage(p2, 0, 0, d2, u2, 0, 0, t3, e3);
        [h2, c2] = [c2, h2];
        p2 = h2.canvas;
        d2 = t3;
        u2 = e3;
      }
      this.canvasFactory.destroy(c2);
      return { img: h2.canvas, paintWidth: d2, paintHeight: u2, tmpCanvas: h2 };
    }
    _createMaskCanvas(t2, e2) {
      const i2 = this.ctx, { width: n2, height: r2 } = e2, s2 = this.current.fillColor, a2 = this.current.patternFill, o2 = getCurrentTransform(i2);
      let l2, h2, c2, d2;
      if ((e2.bitmap || e2.data) && e2.count > 1) {
        const i3 = e2.bitmap || e2.data.buffer;
        h2 = JSON.stringify(a2 ? o2 : [o2.slice(0, 4), s2]);
        l2 = this._cachedBitmapsMap.getOrInsertComputed(i3, makeMap);
        const n3 = l2.get(h2);
        if (n3 && !a2) {
          const e3 = Math.round(Math.min(o2[0], o2[2]) + o2[4]), i4 = Math.round(Math.min(o2[1], o2[3]) + o2[5]);
          this.dependencyTracker?.recordDependencies(t2, ut);
          return { canvas: n3, offsetX: e3, offsetY: i4 };
        }
        c2 = n3;
      }
      if (!c2) {
        d2 = this.canvasFactory.create(n2, r2);
        putBinaryImageMask(d2.context, e2);
      }
      let u2 = Util.transform(o2, [1 / n2, 0, 0, -1 / r2, 0, 0]);
      u2 = Util.transform(u2, [1, 0, 0, 1, 0, -r2]);
      const p2 = Ft.slice();
      Util.axialAlignedBoundingBox([0, 0, n2, r2], u2, p2);
      const [g2, m2, f2, b2] = p2, y2 = Math.round(f2 - g2) || 1, v2 = Math.round(b2 - m2) || 1, w2 = this.canvasFactory.create(y2, v2), A2 = w2.context, x2 = g2, E2 = m2;
      A2.translate(-x2, -E2);
      A2.transform(...u2);
      let _2 = null;
      if (!c2) {
        const t3 = this._scaleImage(d2.canvas, getCurrentTransformInverse(A2));
        c2 = t3.img;
        _2 = t3.tmpCanvas;
        if (c2 !== d2.canvas) {
          this.canvasFactory.destroy(d2);
          d2 = null;
        }
        if (l2 && a2) {
          l2.set(h2, c2);
          _2 = null;
          d2 = null;
        }
      }
      A2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(A2), e2.interpolate);
      drawImageAtIntegerCoords(A2, c2, 0, 0, c2.width, c2.height, 0, 0, n2, r2);
      _2 && this.canvasFactory.destroy(_2);
      d2 && this.canvasFactory.destroy(d2);
      A2.globalCompositeOperation = "source-in";
      const T2 = Util.transform(getCurrentTransformInverse(A2), [1, 0, 0, 1, -x2, -E2]);
      A2.fillStyle = a2 ? s2.getPattern(i2, this, T2, Tt, t2) : s2;
      A2.fillRect(0, 0, n2, r2);
      l2 && !a2 && l2.set(h2, w2.canvas);
      this.dependencyTracker?.recordDependencies(t2, ut);
      return { canvas: w2.canvas, canvasEntry: l2 && !a2 ? null : w2, offsetX: Math.round(x2), offsetY: Math.round(E2) };
    }
    setLineWidth(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineWidth", t2);
      e2 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1);
      this.current.lineWidth = e2;
      this.ctx.lineWidth = e2;
    }
    setLineCap(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineCap", t2);
      this.ctx.lineCap = Rt[e2];
    }
    setLineJoin(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineJoin", t2);
      this.ctx.lineJoin = Bt[e2];
    }
    setMiterLimit(t2, e2) {
      this.dependencyTracker?.recordSimpleData("miterLimit", t2);
      this.ctx.miterLimit = e2;
    }
    setDash(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("dash", t2);
      const n2 = this.ctx;
      if (void 0 !== n2.setLineDash) {
        n2.setLineDash(e2);
        n2.lineDashOffset = i2;
      }
    }
    setRenderingIntent(t2, e2) {
    }
    setFlatness(t2, e2) {
    }
    setGState(t2, e2) {
      for (const [i2, n2] of e2) switch (i2) {
        case "LW":
          this.setLineWidth(t2, n2);
          break;
        case "LC":
          this.setLineCap(t2, n2);
          break;
        case "LJ":
          this.setLineJoin(t2, n2);
          break;
        case "ML":
          this.setMiterLimit(t2, n2);
          break;
        case "D":
          this.setDash(t2, n2[0], n2[1]);
          break;
        case "RI":
          this.setRenderingIntent(t2, n2);
          break;
        case "FL":
          this.setFlatness(t2, n2);
          break;
        case "Font":
          this.setFont(t2, n2[0], n2[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t2);
          this.current.strokeAlpha = n2;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t2);
          this.ctx.globalAlpha = this.current.fillAlpha = n2;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t2);
          this.ctx.globalCompositeOperation = n2;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t2);
          this.current.activeSMask = n2 ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t2);
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n2);
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    checkSMaskState() {
      const t2 = this.inSMaskMode;
      this.current.activeSMask && !t2 ? this.beginSMaskMode() : !this.current.activeSMask && t2 && this.endSMaskMode();
    }
    beginSMaskMode(t2) {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const e2 = this.ctx.canvas.width, i2 = this.ctx.canvas.height, n2 = this.canvasFactory.create(e2, i2);
      this.smaskScratchCanvas = n2;
      this.suspendedCtx = this.ctx;
      const r2 = this.ctx = n2.context;
      r2.setTransform(this.suspendedCtx.getTransform());
      copyCtxState(this.suspendedCtx, r2);
      !(function mirrorContextOperations(t3, e3) {
        if (t3._removeMirroring) throw new Error("Context is already forwarding operations.");
        t3.__originalSave = t3.save;
        t3.__originalRestore = t3.restore;
        t3.__originalRotate = t3.rotate;
        t3.__originalScale = t3.scale;
        t3.__originalTranslate = t3.translate;
        t3.__originalTransform = t3.transform;
        t3.__originalSetTransform = t3.setTransform;
        t3.__originalResetTransform = t3.resetTransform;
        t3.__originalClip = t3.clip;
        t3.__originalMoveTo = t3.moveTo;
        t3.__originalLineTo = t3.lineTo;
        t3.__originalBezierCurveTo = t3.bezierCurveTo;
        t3.__originalRect = t3.rect;
        t3.__originalClosePath = t3.closePath;
        t3.__originalBeginPath = t3.beginPath;
        t3._removeMirroring = () => {
          t3.save = t3.__originalSave;
          t3.restore = t3.__originalRestore;
          t3.rotate = t3.__originalRotate;
          t3.scale = t3.__originalScale;
          t3.translate = t3.__originalTranslate;
          t3.transform = t3.__originalTransform;
          t3.setTransform = t3.__originalSetTransform;
          t3.resetTransform = t3.__originalResetTransform;
          t3.clip = t3.__originalClip;
          t3.moveTo = t3.__originalMoveTo;
          t3.lineTo = t3.__originalLineTo;
          t3.bezierCurveTo = t3.__originalBezierCurveTo;
          t3.rect = t3.__originalRect;
          t3.closePath = t3.__originalClosePath;
          t3.beginPath = t3.__originalBeginPath;
          delete t3._removeMirroring;
        };
        t3.save = function() {
          e3.save();
          this.__originalSave();
        };
        t3.restore = function() {
          e3.restore();
          this.__originalRestore();
        };
        t3.translate = function(t4, i3) {
          e3.translate(t4, i3);
          this.__originalTranslate(t4, i3);
        };
        t3.scale = function(t4, i3) {
          e3.scale(t4, i3);
          this.__originalScale(t4, i3);
        };
        t3.transform = function(t4, i3, n3, r3, s2, a2) {
          e3.transform(t4, i3, n3, r3, s2, a2);
          this.__originalTransform(t4, i3, n3, r3, s2, a2);
        };
        t3.setTransform = function(t4, i3, n3, r3, s2, a2) {
          e3.setTransform(t4, i3, n3, r3, s2, a2);
          this.__originalSetTransform(t4, i3, n3, r3, s2, a2);
        };
        t3.resetTransform = function() {
          e3.resetTransform();
          this.__originalResetTransform();
        };
        t3.rotate = function(t4) {
          e3.rotate(t4);
          this.__originalRotate(t4);
        };
        t3.clip = function(t4) {
          e3.clip(t4);
          this.__originalClip(t4);
        };
        t3.moveTo = function(t4, i3) {
          e3.moveTo(t4, i3);
          this.__originalMoveTo(t4, i3);
        };
        t3.lineTo = function(t4, i3) {
          e3.lineTo(t4, i3);
          this.__originalLineTo(t4, i3);
        };
        t3.bezierCurveTo = function(t4, i3, n3, r3, s2, a2) {
          e3.bezierCurveTo(t4, i3, n3, r3, s2, a2);
          this.__originalBezierCurveTo(t4, i3, n3, r3, s2, a2);
        };
        t3.rect = function(t4, i3, n3, r3) {
          e3.rect(t4, i3, n3, r3);
          this.__originalRect(t4, i3, n3, r3);
        };
        t3.closePath = function() {
          e3.closePath();
          this.__originalClosePath();
        };
        t3.beginPath = function() {
          e3.beginPath();
          this.__originalBeginPath();
        };
      })(r2, this.suspendedCtx);
      this.setGState(t2, [["BM", "source-over"]]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring();
      copyCtxState(this.ctx, this.suspendedCtx);
      this.ctx = this.suspendedCtx;
      this.suspendedCtx = null;
      this.canvasFactory.destroy(this.smaskScratchCanvas);
      this.smaskScratchCanvas = null;
    }
    compose(t2) {
      if (!this.current.activeSMask) return;
      if (t2) {
        t2[0] = Math.floor(t2[0]);
        t2[1] = Math.floor(t2[1]);
        t2[2] = Math.ceil(t2[2]);
        t2[3] = Math.ceil(t2[3]);
      } else t2 = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
      const e2 = this.current.activeSMask, i2 = this.suspendedCtx;
      this.composeSMask(i2, e2, this.ctx, t2);
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.restore();
    }
    composeSMask(t2, e2, i2, n2) {
      const r2 = n2[0], s2 = n2[1], a2 = n2[2] - r2, o2 = n2[3] - s2;
      if (0 !== a2 && 0 !== o2) {
        this.genericComposeSMask(e2.context, i2, a2, o2, e2.subtype, e2.backdrop, e2.transferMap, r2, s2, e2.offsetX, e2.offsetY);
        t2.save();
        t2.globalAlpha = 1;
        t2.globalCompositeOperation = "source-over";
        t2.setTransform(1, 0, 0, 1, 0, 0);
        t2.drawImage(i2.canvas, 0, 0);
        t2.restore();
      }
    }
    genericComposeSMask(t2, e2, i2, n2, r2, s2, a2, o2, l2, h2, c2) {
      let d2 = t2.canvas, u2 = o2 - h2, p2 = l2 - c2, g2 = null;
      if (s2) if (u2 < 0 || p2 < 0 || u2 + i2 > d2.width || p2 + n2 > d2.height) {
        g2 = this.canvasFactory.create(i2, n2);
        const t3 = g2.context;
        t3.drawImage(d2, -u2, -p2);
        t3.globalCompositeOperation = "destination-atop";
        t3.fillStyle = s2;
        t3.fillRect(0, 0, i2, n2);
        t3.globalCompositeOperation = "source-over";
        d2 = g2.canvas;
        u2 = p2 = 0;
      } else {
        t2.save();
        t2.globalAlpha = 1;
        t2.setTransform(1, 0, 0, 1, 0, 0);
        const e3 = new Path2D();
        e3.rect(u2, p2, i2, n2);
        t2.clip(e3);
        t2.globalCompositeOperation = "destination-atop";
        t2.fillStyle = s2;
        t2.fillRect(u2, p2, i2, n2);
        t2.restore();
      }
      e2.save();
      e2.globalAlpha = 1;
      e2.setTransform(1, 0, 0, 1, 0, 0);
      "Alpha" === r2 && a2 ? e2.filter = this.filterFactory.addAlphaFilter(a2) : "Luminosity" === r2 && (e2.filter = this.filterFactory.addLuminosityFilter(a2));
      const m2 = new Path2D();
      m2.rect(o2, l2, i2, n2);
      e2.clip(m2);
      e2.globalCompositeOperation = "destination-in";
      e2.drawImage(d2, u2, p2, i2, n2, o2, l2, i2, n2);
      e2.restore();
      g2 && this.canvasFactory.destroy(g2);
    }
    save(t2) {
      this.inSMaskMode && copyCtxState(this.ctx, this.suspendedCtx);
      this.ctx.save();
      const e2 = this.current;
      this.stateStack.push(e2);
      this.current = e2.clone();
      this.dependencyTracker?.save(t2);
    }
    restore(t2) {
      this.dependencyTracker?.restore(t2);
      if (0 !== this.stateStack.length) {
        this.current = this.stateStack.pop();
        this.ctx.restore();
        this.inSMaskMode && copyCtxState(this.suspendedCtx, this.ctx);
        this.checkSMaskState();
        this.pendingClip = null;
        this._cachedScaleForStroking[0] = -1;
        this._cachedGetSinglePixelWidth = null;
      } else this.inSMaskMode && this.endSMaskMode();
    }
    transform(t2, e2, i2, n2, r2, s2, a2) {
      this.dependencyTracker?.recordIncrementalData("transform", t2);
      this.ctx.transform(e2, i2, n2, r2, s2, a2);
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t2, e2, i2, n2) {
      let [r2] = i2;
      if (n2) {
        if (null !== this.dependencyTracker) {
          const i3 = e2 === B.stroke ? this.current.lineWidth / 2 : 0;
          this.dependencyTracker.resetBBox(t2).recordBBox(t2, this.ctx, n2[0] - i3, n2[2] + i3, n2[1] - i3, n2[3] + i3).recordDependencies(t2, ["transform"]);
        }
        r2 instanceof Path2D || (r2 = i2[0] = makePathFromDrawOPS(r2));
        Util.axialAlignedBoundingBox(n2, getCurrentTransform(this.ctx), this.current.minMax);
        this[e2](t2, r2);
        this._pathStartIdx = t2;
      } else {
        r2 ||= i2[0] = new Path2D();
        this[e2](t2, r2);
      }
    }
    closePath(t2) {
      this.ctx.closePath();
    }
    stroke(t2, e2, i2 = true) {
      const n2 = this.ctx, r2 = this.current.strokeColor;
      n2.globalAlpha = this.current.strokeAlpha;
      if (this.contentVisible) if ("object" == typeof r2 && r2?.getPattern) {
        const i3 = r2.isModifyingCurrentTransform() ? n2.getTransform() : null;
        n2.save();
        n2.strokeStyle = r2.getPattern(n2, this, getCurrentTransformInverse(n2), St, t2);
        if (i3) {
          const t3 = new Path2D();
          t3.addPath(e2, n2.getTransform().invertSelf().multiplySelf(i3));
          e2 = t3;
        }
        this.rescaleAndStroke(e2, false);
        n2.restore();
      } else this.rescaleAndStroke(e2, true);
      this.dependencyTracker?.recordDependencies(t2, st);
      i2 && this.consumePath(t2, e2, this.current.getClippedPathBoundingBox(St, getCurrentTransform(this.ctx)));
      n2.globalAlpha = this.current.fillAlpha;
    }
    closeStroke(t2, e2) {
      this.stroke(t2, e2);
    }
    fill(t2, e2, i2 = true) {
      const n2 = this.ctx, r2 = this.current.fillColor;
      let s2 = false;
      if (this.current.patternFill) {
        const i3 = r2.isModifyingCurrentTransform() ? n2.getTransform() : null;
        this.dependencyTracker?.save(t2);
        n2.save();
        n2.fillStyle = r2.getPattern(n2, this, getCurrentTransformInverse(n2), Tt, t2);
        if (i3) {
          const t3 = new Path2D();
          t3.addPath(e2, n2.getTransform().invertSelf().multiplySelf(i3));
          e2 = t3;
        }
        s2 = true;
      }
      const a2 = this.current.getClippedPathBoundingBox();
      if (this.contentVisible && null !== a2) if (this.pendingEOFill) {
        n2.fill(e2, "evenodd");
        this.pendingEOFill = false;
      } else n2.fill(e2);
      this.dependencyTracker?.recordDependencies(t2, ot);
      if (s2) {
        n2.restore();
        this.dependencyTracker?.restore(t2);
      }
      i2 && this.consumePath(t2, e2, a2);
    }
    eoFill(t2, e2) {
      this.pendingEOFill = true;
      this.fill(t2, e2);
    }
    fillStroke(t2, e2) {
      this.fill(t2, e2, false);
      this.stroke(t2, e2, false);
      this.consumePath(t2, e2);
    }
    eoFillStroke(t2, e2) {
      this.pendingEOFill = true;
      this.fillStroke(t2, e2);
    }
    closeFillStroke(t2, e2) {
      this.fillStroke(t2, e2);
    }
    closeEOFillStroke(t2, e2) {
      this.pendingEOFill = true;
      this.fillStroke(t2, e2);
    }
    endPath(t2, e2) {
      this.consumePath(t2, e2);
    }
    rawFillPath(t2, e2) {
      this.ctx.fill(e2);
      this.dependencyTracker?.recordDependencies(t2, ht).recordOperation(t2);
    }
    clip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
      this.pendingClip = Ot;
    }
    eoClip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
      this.pendingClip = Lt;
    }
    beginText(t2) {
      this.current.textMatrix = null;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.dependencyTracker?.recordOpenMarker(t2).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t2);
    }
    endText(t2) {
      const e2 = this.pendingTextPaths, i2 = this.ctx;
      if (this.dependencyTracker) {
        const { dependencyTracker: i3 } = this;
        void 0 !== e2 && i3.recordFutureForcedDependency("textClip", i3.getOpenMarker()).recordFutureForcedDependency("textClip", t2);
        i3.recordCloseMarker(t2);
      }
      if (void 0 !== e2) {
        const t3 = new Path2D(), n2 = i2.getTransform().invertSelf();
        for (const { transform: i3, x: r2, y: s2, fontSize: a2, path: o2 } of e2) o2 && t3.addPath(o2, new DOMMatrix(i3).preMultiplySelf(n2).translate(r2, s2).scale(a2, -a2));
        i2.clip(t3);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("charSpacing", t2);
      this.current.charSpacing = e2;
    }
    setWordSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("wordSpacing", t2);
      this.current.wordSpacing = e2;
    }
    setHScale(t2, e2) {
      this.dependencyTracker?.recordSimpleData("hScale", t2);
      this.current.textHScale = e2 / 100;
    }
    setLeading(t2, e2) {
      this.dependencyTracker?.recordSimpleData("leading", t2);
      this.current.leading = -e2;
    }
    setFont(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("font", t2).recordSimpleDataFromNamed("fontObj", e2, t2);
      const r2 = this.commonObjs.get(e2), s2 = this.current;
      if (!r2) throw new Error(`Can't find font for ${e2}`);
      s2.fontMatrix = r2.fontMatrix || n;
      0 !== s2.fontMatrix[0] && 0 !== s2.fontMatrix[3] || warn("Invalid font matrix for font " + e2);
      if (i2 < 0) {
        i2 = -i2;
        s2.fontDirection = -1;
      } else s2.fontDirection = 1;
      this.current.font = r2;
      this.current.fontSize = i2;
      if (r2.isType3Font) return;
      const a2 = r2.loadedName || "sans-serif", o2 = r2.systemFontInfo?.css || `"${a2}", ${r2.fallbackName}`;
      let l2 = "normal";
      r2.black ? l2 = "900" : r2.bold && (l2 = "bold");
      const h2 = r2.italic ? "italic" : "normal";
      let c2 = i2;
      i2 < 16 ? c2 = 16 : i2 > 100 && (c2 = 100);
      this.current.fontSizeScale = i2 / c2;
      this.ctx.font = `${h2} ${l2} ${c2}px ${o2}`;
    }
    setTextRenderingMode(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRenderingMode", t2);
      this.current.textRenderingMode = e2;
    }
    setTextRise(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRise", t2);
      this.current.textRise = e2;
    }
    moveText(t2, e2, i2) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t2);
      this.current.x = this.current.lineX += e2;
      this.current.y = this.current.lineY += i2;
    }
    setLeadingMoveText(t2, e2, i2) {
      this.setLeading(t2, -i2);
      this.moveText(t2, e2, i2);
    }
    setTextMatrix(t2, e2) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t2);
      const { current: i2 } = this;
      i2.textMatrix = e2;
      i2.textMatrixScale = Math.hypot(e2[0], e2[1]);
      i2.x = i2.lineX = 0;
      i2.y = i2.lineY = 0;
    }
    nextLine(t2) {
      this.moveText(t2, 0, this.current.leading);
      this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t2);
    }
    #Wn(t2, e2, i2) {
      const n2 = new Path2D();
      n2.addPath(t2, new DOMMatrix(i2).invertSelf().multiplySelf(e2));
      return n2;
    }
    paintChar(t2, e2, i2, n2, r2, s2) {
      const a2 = this.ctx, o2 = this.current, l2 = o2.font, h2 = o2.textRenderingMode, c2 = o2.fontSize / o2.fontSizeScale, d2 = h2 & _, u2 = !!(h2 & T), p2 = o2.patternFill && !l2.missingFile, g2 = o2.patternStroke && !l2.missingFile;
      let m2;
      (l2.disableFontFace || u2 || p2 || g2) && !l2.missingFile && (m2 = l2.getPathGenerator(this.commonObjs, e2));
      if (m2 && (l2.disableFontFace || p2 || g2)) {
        a2.save();
        a2.translate(i2, n2);
        a2.scale(c2, -c2);
        this.dependencyTracker?.recordCharacterBBox(t2, a2, l2);
        let e3;
        if (d2 === w || d2 === x) if (r2) {
          e3 = a2.getTransform();
          a2.setTransform(...r2);
          const t3 = this.#Wn(m2, e3, r2);
          a2.fill(t3);
        } else a2.fill(m2);
        if (d2 === A || d2 === x) if (s2) {
          e3 ||= a2.getTransform();
          a2.setTransform(...s2);
          const { a: t3, b: i3, c: n3, d: r3 } = e3, o3 = Util.inverseTransform(s2), l3 = Util.transform([t3, i3, n3, r3, 0, 0], o3);
          Util.singularValueDecompose2dScale(l3, It);
          a2.lineWidth *= Math.max(It[0], It[1]) / c2;
          a2.stroke(this.#Wn(m2, e3, s2));
        } else {
          a2.lineWidth /= c2;
          a2.stroke(m2);
        }
        a2.restore();
      } else {
        if (d2 === w || d2 === x) {
          a2.fillText(e2, i2, n2);
          this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, n2, () => a2.measureText(e2));
        }
        if (d2 === A || d2 === x) {
          this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, n2, () => a2.measureText(e2)).recordDependencies(t2, st);
          a2.strokeText(e2, i2, n2);
        }
      }
      if (u2) {
        (this.pendingTextPaths ||= []).push({ transform: getCurrentTransform(a2), x: i2, y: n2, fontSize: c2, path: m2 });
        this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, n2);
      }
    }
    get isFontSubpixelAAEnabled() {
      const t2 = this.canvasFactory.create(10, 10), e2 = t2.context;
      e2.scale(1.5, 1);
      e2.fillText("I", 0, 10);
      const i2 = e2.getImageData(0, 0, 10, 10).data;
      this.canvasFactory.destroy(t2);
      let n2 = false;
      for (let t3 = 3; t3 < i2.length; t3 += 4) if (i2[t3] > 0 && i2[t3] < 255) {
        n2 = true;
        break;
      }
      return shadow(this, "isFontSubpixelAAEnabled", n2);
    }
    showText(t2, e2) {
      if (this.dependencyTracker) {
        this.dependencyTracker.recordDependencies(t2, ct).resetBBox(t2);
        this.current.textRenderingMode & T && this.dependencyTracker.recordFutureForcedDependency("textClip", t2).inheritPendingDependenciesAsFutureForcedDependencies();
      }
      const i2 = this.current, n2 = i2.font;
      if (n2.isType3Font) {
        this.showType3Text(t2, e2);
        this.dependencyTracker?.recordShowTextOperation(t2);
        return;
      }
      const r2 = i2.fontSize;
      if (0 === r2) {
        this.dependencyTracker?.recordOperation(t2);
        return;
      }
      const s2 = this.ctx, a2 = i2.fontSizeScale, o2 = i2.charSpacing, l2 = i2.wordSpacing, h2 = i2.fontDirection, c2 = i2.textHScale * h2, d2 = e2.length, u2 = n2.vertical, p2 = u2 ? 1 : -1, g2 = n2.defaultVMetrics, m2 = r2 * i2.fontMatrix[0], f2 = i2.textRenderingMode === w && !n2.disableFontFace && !i2.patternFill;
      s2.save();
      i2.textMatrix && s2.transform(...i2.textMatrix);
      s2.translate(i2.x, i2.y + i2.textRise);
      h2 > 0 ? s2.scale(c2, -1) : s2.scale(c2, 1);
      let b2, y2;
      const v2 = i2.textRenderingMode & _, E2 = v2 === A || v2 === x;
      if ((v2 === w || v2 === x) && i2.patternFill) {
        s2.save();
        const e3 = i2.fillColor.getPattern(s2, this, getCurrentTransformInverse(s2), Tt, t2);
        b2 = getCurrentTransform(s2);
        s2.restore();
        s2.fillStyle = e3;
      }
      if (E2 && i2.patternStroke) {
        s2.save();
        const e3 = i2.strokeColor.getPattern(s2, this, getCurrentTransformInverse(s2), St, t2);
        y2 = getCurrentTransform(s2);
        s2.restore();
        s2.strokeStyle = e3;
      }
      let S2 = i2.lineWidth;
      const C2 = i2.textMatrixScale;
      0 === C2 || 0 === S2 ? E2 && (S2 = this.getSinglePixelWidth()) : S2 /= C2;
      if (1 !== a2) {
        s2.scale(a2, a2);
        S2 /= a2;
      }
      s2.lineWidth = S2;
      if (n2.isInvalidPDFjsFont) {
        const n3 = [];
        let r3 = 0;
        for (const t3 of e2) {
          n3.push(t3.unicode);
          r3 += t3.width;
        }
        const a3 = n3.join("");
        s2.fillText(a3, 0, 0);
        if (null !== this.dependencyTracker) {
          const e3 = s2.measureText(a3);
          this.dependencyTracker.recordBBox(t2, this.ctx, -e3.actualBoundingBoxLeft, e3.actualBoundingBoxRight, -e3.actualBoundingBoxAscent, e3.actualBoundingBoxDescent).recordShowTextOperation(t2);
        }
        i2.x += r3 * m2 * c2;
        s2.restore();
        this.compose();
        return;
      }
      let D2, P2 = 0;
      for (D2 = 0; D2 < d2; ++D2) {
        const i3 = e2[D2];
        if ("number" == typeof i3) {
          P2 += p2 * i3 * r2 / 1e3;
          continue;
        }
        let c3 = false;
        const d3 = (i3.isSpace ? l2 : 0) + o2, v3 = i3.fontChar, w2 = i3.accent;
        let A2, x2, E3, _2 = i3.width;
        if (u2) {
          const t3 = i3.vmetric || g2, e3 = -(i3.vmetric ? t3[1] : 0.5 * _2) * m2, n3 = t3[2] * m2;
          _2 = t3 ? -t3[0] : _2;
          A2 = e3 / a2;
          x2 = (P2 + n3) / a2;
        } else {
          A2 = P2 / a2;
          x2 = 0;
        }
        if (n2.remeasure && _2 > 0) {
          E3 = s2.measureText(v3);
          const t3 = 1e3 * E3.width / r2 * a2;
          if (_2 < t3 && this.isFontSubpixelAAEnabled) {
            const e3 = _2 / t3;
            c3 = true;
            s2.save();
            s2.scale(e3, 1);
            A2 /= e3;
          } else _2 !== t3 && (A2 += (_2 - t3) / 2e3 * r2 / a2);
        }
        if (this.contentVisible && (i3.isInFont || n2.missingFile)) if (f2 && !w2) {
          s2.fillText(v3, A2, x2);
          this.dependencyTracker?.recordCharacterBBox(t2, s2, E3 ? { bbox: null } : n2, r2 / a2, A2, x2, () => E3 ?? s2.measureText(v3));
        } else {
          this.paintChar(t2, v3, A2, x2, b2, y2);
          if (w2) {
            const e3 = A2 + r2 * w2.offset.x / a2, i4 = x2 - r2 * w2.offset.y / a2;
            this.paintChar(t2, w2.fontChar, e3, i4, b2, y2);
          }
        }
        P2 += u2 ? _2 * m2 - d3 * h2 : _2 * m2 + d3 * h2;
        c3 && s2.restore();
      }
      u2 ? i2.y -= P2 : i2.x += P2 * c2;
      s2.restore();
      this.compose();
      this.dependencyTracker?.recordShowTextOperation(t2);
    }
    showType3Text(t2, e2) {
      const i2 = this.ctx, r2 = this.current, s2 = r2.font, a2 = r2.fontSize, o2 = r2.fontDirection, l2 = s2.vertical ? 1 : -1, h2 = r2.charSpacing, c2 = r2.wordSpacing, d2 = r2.textHScale * o2, u2 = r2.fontMatrix || n, p2 = e2.length;
      let g2, m2, f2, b2;
      if (r2.textRenderingMode === E || 0 === a2) return;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
      i2.save();
      r2.textMatrix && i2.transform(...r2.textMatrix);
      i2.translate(r2.x, r2.y + r2.textRise);
      i2.scale(d2, o2);
      const y2 = this.dependencyTracker;
      this.dependencyTracker = y2 ? new CanvasNestedDependencyTracker(y2, t2) : null;
      for (g2 = 0; g2 < p2; ++g2) {
        m2 = e2[g2];
        if ("number" == typeof m2) {
          b2 = l2 * m2 * a2 / 1e3;
          this.ctx.translate(b2, 0);
          r2.x += b2 * d2;
          continue;
        }
        const t3 = (m2.isSpace ? c2 : 0) + h2, n2 = s2.charProcOperatorList[m2.operatorListId];
        if (n2) {
          if (this.contentVisible) {
            this.save();
            i2.scale(a2, a2);
            i2.transform(...u2);
            this.executeOperatorList(n2);
            this.restore();
          }
        } else warn(`Type3 character "${m2.operatorListId}" is not available.`);
        const o3 = [m2.width, 0];
        Util.applyTransform(o3, u2);
        f2 = o3[0] * a2 + t3;
        i2.translate(f2, 0);
        r2.x += f2 * d2;
      }
      i2.restore();
      y2 && (this.dependencyTracker = y2);
    }
    setCharWidth(t2, e2, i2) {
    }
    setCharWidthAndBounds(t2, e2, i2, n2, r2, s2, a2) {
      const o2 = new Path2D();
      o2.rect(n2, r2, s2 - n2, a2 - r2);
      this.ctx.clip(o2);
      this.dependencyTracker?.recordBBox(t2, this.ctx, n2, s2, r2, a2).recordClipBox(t2, this.ctx, n2, s2, r2, a2);
      this.endPath(t2);
    }
    getColorN_Pattern(t2, e2) {
      let i2;
      if ("TilingPattern" === e2[0]) {
        const t3 = this.baseTransform || getCurrentTransform(this.ctx), n2 = { createCanvasGraphics: (t4, e3) => new _CanvasGraphics(t4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new CanvasNestedDependencyTracker(this.dependencyTracker, e3, true) : null) };
        i2 = new TilingPattern(e2, this.ctx, n2, t3);
      } else i2 = this._getPattern(t2, e2[1], e2[2]);
      return i2;
    }
    setStrokeColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.current.strokeColor = this.getColorN_Pattern(t2, e2);
      this.current.patternStroke = true;
    }
    setFillColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      this.current.fillColor = this.getColorN_Pattern(t2, e2);
      this.current.patternFill = true;
    }
    setStrokeRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.ctx.strokeStyle = this.current.strokeColor = e2;
      this.current.patternStroke = false;
    }
    setStrokeTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.ctx.strokeStyle = this.current.strokeColor = "transparent";
      this.current.patternStroke = false;
    }
    setFillRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      this.ctx.fillStyle = this.current.fillColor = e2;
      this.current.patternFill = false;
    }
    setFillTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      this.ctx.fillStyle = this.current.fillColor = "transparent";
      this.current.patternFill = false;
    }
    _getPattern(t2, e2, i2 = null) {
      let n2;
      if (this.cachedPatterns.has(e2)) n2 = this.cachedPatterns.get(e2);
      else {
        n2 = (function getShadingPattern(t3) {
          switch (t3[0]) {
            case "RadialAxial":
              return new RadialAxialShadingPattern(t3);
            case "Mesh":
              return new MeshShadingPattern(t3);
            case "Dummy":
              return new DummyShadingPattern();
          }
          throw new Error(`Unknown IR type: ${t3[0]}`);
        })(this.getObject(t2, e2));
        this.cachedPatterns.set(e2, n2);
      }
      i2 && (n2.matrix = i2);
      return n2;
    }
    shadingFill(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.ctx;
      this.save(t2);
      const n2 = this._getPattern(t2, e2);
      i2.fillStyle = n2.getPattern(i2, this, getCurrentTransformInverse(i2), Ct, t2);
      const r2 = getCurrentTransformInverse(i2);
      if (r2) {
        const { width: t3, height: e3 } = i2.canvas, n3 = Ft.slice();
        Util.axialAlignedBoundingBox([0, 0, t3, e3], r2, n3);
        const [s2, a2, o2, l2] = n3;
        this.ctx.fillRect(s2, a2, o2 - s2, l2 - a2);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.dependencyTracker?.resetBBox(t2).recordFullPageBBox(t2).recordDependencies(t2, dt).recordDependencies(t2, ot).recordOperation(t2);
      this.compose(this.current.getClippedPathBoundingBox());
      this.restore(t2);
    }
    beginInlineImage() {
      unreachable("Should not call beginInlineImage");
    }
    beginImageData() {
      unreachable("Should not call beginImageData");
    }
    paintFormXObjectBegin(t2, e2, i2) {
      if (this.contentVisible) {
        this.save(t2);
        this.baseTransformStack.push(this.baseTransform);
        e2 && this.transform(t2, ...e2);
        this.baseTransform = getCurrentTransform(this.ctx);
        if (i2) {
          Util.axialAlignedBoundingBox(i2, this.baseTransform, this.current.minMax);
          const [e3, n2, r2, s2] = i2, a2 = new Path2D();
          a2.rect(e3, n2, r2 - e3, s2 - n2);
          this.ctx.clip(a2);
          this.dependencyTracker?.recordClipBox(t2, this.ctx, e3, r2, n2, s2);
          this.endPath(t2);
        }
      }
    }
    paintFormXObjectEnd(t2) {
      if (this.contentVisible) {
        this.restore(t2);
        this.baseTransform = this.baseTransformStack.pop();
      }
    }
    beginGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.save(t2);
      if (this.inSMaskMode) {
        this.endSMaskMode();
        this.current.activeSMask = null;
      }
      const i2 = this.ctx;
      e2.isolated || info("TODO: Support non-isolated groups.");
      e2.knockout && warn("Knockout groups not supported.");
      const n2 = getCurrentTransform(i2);
      e2.matrix && i2.transform(...e2.matrix);
      const r2 = [0, 0, i2.canvas.width, i2.canvas.height];
      let s2;
      if (e2.bbox) {
        s2 = Ft.slice();
        Util.axialAlignedBoundingBox(e2.bbox, getCurrentTransform(i2), s2);
        s2 = Util.intersect(s2, r2) || [0, 0, 0, 0];
      } else s2 = r2;
      const a2 = Math.floor(s2[0]), o2 = Math.floor(s2[1]), l2 = Math.max(Math.ceil(s2[2]) - a2, 1), h2 = Math.max(Math.ceil(s2[3]) - o2, 1);
      this.current.startNewPathAndClipBox([0, 0, l2, h2]);
      e2.smask && this.smaskCounter++;
      const c2 = this.canvasFactory.create(l2, h2);
      e2.smask && this.smaskGroupCanvases.push(c2);
      const d2 = c2.context;
      d2.translate(-a2, -o2);
      d2.transform(...n2);
      if (e2.bbox) {
        let t3 = new Path2D();
        const [i3, n3, r3, s3] = e2.bbox;
        t3.rect(i3, n3, r3 - i3, s3 - n3);
        if (e2.matrix) {
          const i4 = new Path2D();
          i4.addPath(t3, new DOMMatrix(e2.matrix));
          t3 = i4;
        }
        d2.clip(t3);
      }
      e2.smask && this.smaskStack.push({ canvas: c2.canvas, context: d2, offsetX: a2, offsetY: o2, subtype: e2.smask.subtype, backdrop: e2.smask.backdrop, transferMap: e2.smask.transferMap || null, startTransformInverse: null });
      if (!e2.smask || this.dependencyTracker) {
        i2.setTransform(1, 0, 0, 1, 0, 0);
        i2.translate(a2, o2);
        i2.save();
      }
      copyCtxState(i2, d2);
      this.ctx = d2;
      this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i2);
      this.setGState(t2, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]);
      this.groupStack.push(i2);
      this.groupLevel++;
    }
    endGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const i2 = this.ctx, n2 = this.groupStack.pop();
      this.ctx = n2;
      this.ctx.imageSmoothingEnabled = false;
      this.dependencyTracker?.popBaseTransform();
      if (e2.smask) {
        this.tempSMask = this.smaskStack.pop();
        this.restore(t2);
        this.dependencyTracker && this.ctx.restore();
      } else {
        this.ctx.restore();
        const e3 = getCurrentTransform(this.ctx);
        this.restore(t2);
        this.ctx.save();
        this.ctx.setTransform(...e3);
        const n3 = Ft.slice();
        Util.axialAlignedBoundingBox([0, 0, i2.canvas.width, i2.canvas.height], e3, n3);
        this.ctx.drawImage(i2.canvas, 0, 0);
        this.ctx.restore();
        this.canvasFactory.destroy({ canvas: i2.canvas, context: i2 });
        this.compose(n3);
      }
    }
    beginAnnotation(t2, e2, i2, n2, r2, s2) {
      this.#jn();
      resetCtxToDefault(this.ctx);
      this.ctx.save();
      this.save(t2);
      this.baseTransform && this.ctx.setTransform(...this.baseTransform);
      if (i2) {
        const r3 = i2[2] - i2[0], a2 = i2[3] - i2[1];
        if (s2 && this.annotationCanvasMap) {
          (n2 = n2.slice())[4] -= i2[0];
          n2[5] -= i2[1];
          (i2 = i2.slice())[0] = i2[1] = 0;
          i2[2] = r3;
          i2[3] = a2;
          Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), It);
          const { viewportScale: t3 } = this, s3 = Math.ceil(r3 * this.outputScaleX * t3), o2 = Math.ceil(a2 * this.outputScaleY * t3);
          this.annotationCanvas = this.canvasFactory.create(s3, o2);
          const { canvas: l2, context: h2 } = this.annotationCanvas;
          this.annotationCanvasMap.set(e2, l2);
          this.annotationCanvas.savedCtx = this.ctx;
          this.ctx = h2;
          this.ctx.save();
          this.ctx.setTransform(It[0], 0, 0, -It[1], 0, a2 * It[1]);
          resetCtxToDefault(this.ctx);
        } else {
          resetCtxToDefault(this.ctx);
          this.endPath(t2);
          const e3 = new Path2D();
          e3.rect(i2[0], i2[1], r3, a2);
          this.ctx.clip(e3);
        }
      }
      this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
      this.transform(t2, ...n2);
      this.transform(t2, ...r2);
    }
    endAnnotation(t2) {
      if (this.annotationCanvas) {
        this.ctx.restore();
        this.#Gn();
        this.ctx = this.annotationCanvas.savedCtx;
        delete this.annotationCanvas.savedCtx;
        delete this.annotationCanvas;
      }
    }
    paintImageMaskXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.count;
      (e2 = this.getObject(t2, e2.data, e2)).count = i2;
      const n2 = this.ctx, r2 = this._createMaskCanvas(t2, e2), s2 = r2.canvas;
      n2.save();
      n2.setTransform(1, 0, 0, 1, 0, 0);
      n2.drawImage(s2, r2.offsetX, r2.offsetY);
      this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, r2.offsetX, r2.offsetX + s2.width, r2.offsetY, r2.offsetY + s2.height).recordOperation(t2);
      n2.restore();
      r2.canvasEntry && this.canvasFactory.destroy(r2.canvasEntry);
      this.compose();
    }
    paintImageMaskXObjectRepeat(t2, e2, i2, n2 = 0, r2 = 0, s2, a2) {
      if (!this.contentVisible) return;
      e2 = this.getObject(t2, e2.data, e2);
      const o2 = this.ctx;
      o2.save();
      const l2 = getCurrentTransform(o2);
      o2.transform(i2, n2, r2, s2, 0, 0);
      const h2 = this._createMaskCanvas(t2, e2);
      o2.setTransform(1, 0, 0, 1, h2.offsetX - l2[4], h2.offsetY - l2[5]);
      this.dependencyTracker?.resetBBox(t2);
      for (let e3 = 0, c2 = a2.length; e3 < c2; e3 += 2) {
        const c3 = Util.transform(l2, [i2, n2, r2, s2, a2[e3], a2[e3 + 1]]);
        o2.drawImage(h2.canvas, c3[4], c3[5]);
        this.dependencyTracker?.recordBBox(t2, this.ctx, c3[4], c3[4] + h2.canvas.width, c3[5], c3[5] + h2.canvas.height);
      }
      o2.restore();
      h2.canvasEntry && this.canvasFactory.destroy(h2.canvasEntry);
      this.compose();
      this.dependencyTracker?.recordOperation(t2);
    }
    paintImageMaskXObjectGroup(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.ctx, n2 = this.current.fillColor, r2 = this.current.patternFill;
      this.dependencyTracker?.resetBBox(t2).recordDependencies(t2, ut);
      for (const s2 of e2) {
        const { data: e3, width: a2, height: o2, transform: l2 } = s2, h2 = this.canvasFactory.create(a2, o2), c2 = h2.context;
        c2.save();
        putBinaryImageMask(c2, this.getObject(t2, e3, s2));
        c2.globalCompositeOperation = "source-in";
        c2.fillStyle = r2 ? n2.getPattern(c2, this, getCurrentTransformInverse(i2), Tt, t2) : n2;
        c2.fillRect(0, 0, a2, o2);
        c2.restore();
        i2.save();
        i2.transform(...l2);
        i2.scale(1, -1);
        drawImageAtIntegerCoords(i2, h2.canvas, 0, 0, a2, o2, 0, -1, 1, 1);
        this.canvasFactory.destroy(h2);
        this.dependencyTracker?.recordBBox(t2, i2, 0, a2, 0, o2);
        i2.restore();
      }
      this.compose();
      this.dependencyTracker?.recordOperation(t2);
    }
    paintImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.getObject(t2, e2);
      i2 ? this.paintInlineImageXObject(t2, i2) : warn("Dependent image isn't ready yet");
    }
    paintImageXObjectRepeat(t2, e2, i2, n2, r2) {
      if (!this.contentVisible) return;
      const s2 = this.getObject(t2, e2);
      if (!s2) {
        warn("Dependent image isn't ready yet");
        return;
      }
      const a2 = s2.width, o2 = s2.height, l2 = [];
      for (let t3 = 0, e3 = r2.length; t3 < e3; t3 += 2) l2.push({ transform: [i2, 0, 0, n2, r2[t3], r2[t3 + 1]], x: 0, y: 0, w: a2, h: o2 });
      this.paintInlineImageXObjectGroup(t2, s2, l2);
    }
    applyTransferMapsToCanvas(t2) {
      if ("none" !== this.current.transferMaps) {
        t2.filter = this.current.transferMaps;
        t2.drawImage(t2.canvas, 0, 0);
        t2.filter = "none";
      }
      return t2.canvas;
    }
    applyTransferMapsToBitmap(t2) {
      if ("none" === this.current.transferMaps) return { img: t2.bitmap, canvasEntry: null };
      const { bitmap: e2, width: i2, height: n2 } = t2, r2 = this.canvasFactory.create(i2, n2), s2 = r2.context;
      s2.filter = this.current.transferMaps;
      s2.drawImage(e2, 0, 0);
      s2.filter = "none";
      return { img: r2.canvas, canvasEntry: r2 };
    }
    paintInlineImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.width, n2 = e2.height, r2 = this.ctx;
      this.save(t2);
      const { filter: s2 } = r2;
      "none" !== s2 && "" !== s2 && (r2.filter = "none");
      r2.scale(1 / i2, -1 / n2);
      let a2, o2 = null;
      if (e2.bitmap) {
        const t3 = this.applyTransferMapsToBitmap(e2);
        a2 = t3.img;
        o2 = t3.canvasEntry;
      } else if ("function" == typeof HTMLElement && e2 instanceof HTMLElement || !e2.data) a2 = e2;
      else {
        const t3 = this.canvasFactory.create(i2, n2);
        putBinaryImageData(t3.context, e2);
        a2 = this.applyTransferMapsToCanvas(t3.context);
        o2 = t3;
      }
      const l2 = this._scaleImage(a2, getCurrentTransformInverse(r2));
      r2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(r2), e2.interpolate);
      if (this.dependencyTracker) {
        this.dependencyTracker.resetBBox(t2).recordBBox(t2, r2, 0, i2, -n2, 0).recordDependencies(t2, lt).recordOperation(t2);
        this.imagesTracker?.record(r2, i2, n2, this.dependencyTracker.clipBox);
      }
      drawImageAtIntegerCoords(r2, l2.img, 0, 0, l2.paintWidth, l2.paintHeight, 0, -n2, i2, n2);
      l2.tmpCanvas && this.canvasFactory.destroy(l2.tmpCanvas);
      o2 && this.canvasFactory.destroy(o2);
      this.compose();
      this.restore(t2);
    }
    paintInlineImageXObjectGroup(t2, e2, i2) {
      if (!this.contentVisible) return;
      const n2 = this.ctx;
      let r2, s2 = null;
      if (e2.bitmap) r2 = e2.bitmap;
      else {
        const t3 = e2.width, i3 = e2.height, n3 = this.canvasFactory.create(t3, i3);
        putBinaryImageData(n3.context, e2);
        r2 = this.applyTransferMapsToCanvas(n3.context);
        s2 = n3;
      }
      this.dependencyTracker?.resetBBox(t2);
      for (const e3 of i2) {
        n2.save();
        n2.transform(...e3.transform);
        n2.scale(1, -1);
        drawImageAtIntegerCoords(n2, r2, e3.x, e3.y, e3.w, e3.h, 0, -1, 1, 1);
        this.dependencyTracker?.recordBBox(t2, n2, 0, 1, -1, 0);
        n2.restore();
      }
      s2 && this.canvasFactory.destroy(s2);
      this.dependencyTracker?.recordOperation(t2);
      this.compose();
    }
    paintSolidColorImageMask(t2) {
      if (this.contentVisible) {
        this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, 0, 1, 0, 1).recordDependencies(t2, ot).recordOperation(t2);
        this.ctx.fillRect(0, 0, 1, 1);
        this.compose();
      }
    }
    markPoint(t2, e2) {
    }
    markPointProps(t2, e2, i2) {
    }
    beginMarkedContent(t2, e2) {
      this.dependencyTracker?.beginMarkedContent(t2);
      this.markedContentStack.push({ visible: true });
    }
    beginMarkedContentProps(t2, e2, i2) {
      this.dependencyTracker?.beginMarkedContent(t2);
      "OC" === e2 ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i2) }) : this.markedContentStack.push({ visible: true });
      this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t2) {
      this.dependencyTracker?.endMarkedContent(t2);
      this.markedContentStack.pop();
      this.contentVisible = this.isContentVisible();
    }
    beginCompat(t2) {
    }
    endCompat(t2) {
    }
    consumePath(t2, e2, i2) {
      const n2 = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath();
      this.pendingClip || this.compose(i2);
      const r2 = this.ctx;
      if (this.pendingClip) {
        n2 || (this.pendingClip === Lt ? r2.clip(e2, "evenodd") : r2.clip(e2));
        this.pendingClip = null;
        this.dependencyTracker?.bboxToClipBoxDropOperation(t2).recordFutureForcedDependency("clipPath", t2);
      } else this.dependencyTracker?.recordOperation(t2);
      this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t2 = getCurrentTransform(this.ctx);
        if (0 === t2[1] && 0 === t2[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t2[0]), Math.abs(t2[3]));
        else {
          const e2 = Math.abs(t2[0] * t2[3] - t2[2] * t2[1]), i2 = Math.hypot(t2[0], t2[2]), n2 = Math.hypot(t2[1], t2[3]);
          this._cachedGetSinglePixelWidth = Math.max(i2, n2) / e2;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (-1 === this._cachedScaleForStroking[0]) {
        const { lineWidth: t2 } = this.current, { a: e2, b: i2, c: n2, d: r2 } = this.ctx.getTransform();
        let s2, a2;
        if (0 === i2 && 0 === n2) {
          const i3 = Math.abs(e2), n3 = Math.abs(r2);
          if (i3 === n3) if (0 === t2) s2 = a2 = 1 / i3;
          else {
            const e3 = i3 * t2;
            s2 = a2 = e3 < 1 ? 1 / e3 : 1;
          }
          else if (0 === t2) {
            s2 = 1 / i3;
            a2 = 1 / n3;
          } else {
            const e3 = i3 * t2, r3 = n3 * t2;
            s2 = e3 < 1 ? 1 / e3 : 1;
            a2 = r3 < 1 ? 1 / r3 : 1;
          }
        } else {
          const o2 = Math.abs(e2 * r2 - i2 * n2), l2 = Math.hypot(e2, i2), h2 = Math.hypot(n2, r2);
          if (0 === t2) {
            s2 = h2 / o2;
            a2 = l2 / o2;
          } else {
            const e3 = t2 * o2;
            s2 = h2 > e3 ? h2 / e3 : 1;
            a2 = l2 > e3 ? l2 / e3 : 1;
          }
        }
        this._cachedScaleForStroking[0] = s2;
        this._cachedScaleForStroking[1] = a2;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t2, e2) {
      const { ctx: i2, current: { lineWidth: n2 } } = this, [r2, s2] = this.getScaleForStroking();
      if (r2 === s2) {
        i2.lineWidth = (n2 || 1) * r2;
        i2.stroke(t2);
        return;
      }
      const a2 = i2.getLineDash();
      e2 && i2.save();
      i2.scale(r2, s2);
      kt.a = 1 / r2;
      kt.d = 1 / s2;
      const o2 = new Path2D();
      o2.addPath(t2, kt);
      if (a2.length > 0) {
        const t3 = Math.max(r2, s2);
        i2.setLineDash(a2.map((e3) => e3 / t3));
        i2.lineDashOffset /= t3;
      }
      i2.lineWidth = n2 || 1;
      i2.stroke(o2);
      e2 && i2.restore();
    }
    isContentVisible() {
      for (let t2 = this.markedContentStack.length - 1; t2 >= 0; t2--) if (!this.markedContentStack[t2].visible) return false;
      return true;
    }
  };
  for (const t2 in B) void 0 !== CanvasGraphics.prototype[t2] && (CanvasGraphics.prototype[B[t2]] = CanvasGraphics.prototype[t2]);
  var BasePDFStream = class {
    #Vn = null;
    #$n = null;
    _fullReader = null;
    _rangeReaders = /* @__PURE__ */ new Set();
    _source = null;
    constructor(t2, e2, i2) {
      this._source = t2;
      this.#Vn = e2;
      this.#$n = i2;
    }
    get _progressiveDataLength() {
      return this._fullReader?._loaded ?? 0;
    }
    getFullReader() {
      assert(!this._fullReader, "BasePDFStream.getFullReader can only be called once.");
      return this._fullReader = new this.#Vn(this);
    }
    getRangeReader(t2, e2) {
      if (e2 <= this._progressiveDataLength) return null;
      const i2 = new this.#$n(this, t2, e2);
      this._rangeReaders.add(i2);
      return i2;
    }
    cancelAllRequests(t2) {
      this._fullReader?.cancel(t2);
      for (const e2 of new Set(this._rangeReaders)) e2.cancel(t2);
    }
  };
  var BasePDFStreamReader = class {
    onProgress = null;
    _contentLength = 0;
    _filename = null;
    _headersCapability = Promise.withResolvers();
    _isRangeSupported = false;
    _isStreamingSupported = false;
    _loaded = 0;
    _stream = null;
    constructor(t2) {
      this._stream = t2;
    }
    _callOnProgress() {
      this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      unreachable("Abstract method `read` called");
    }
    cancel(t2) {
      unreachable("Abstract method `cancel` called");
    }
  };
  var BasePDFStreamRangeReader = class {
    _stream = null;
    constructor(t2, e2, i2) {
      this._stream = t2;
    }
    async read() {
      unreachable("Abstract method `read` called");
    }
    cancel(t2) {
      unreachable("Abstract method `cancel` called");
    }
  };
  function createHeaders(t2, e2) {
    const i2 = new Headers();
    if (!t2 || !e2 || "object" != typeof e2) return i2;
    for (const t3 in e2) {
      const n2 = e2[t3];
      void 0 !== n2 && i2.append(t3, n2);
    }
    return i2;
  }
  function getResponseOrigin(t2) {
    return URL.parse(t2)?.origin ?? null;
  }
  function validateRangeRequestCapabilities({ responseHeaders: t2, isHttp: e2, rangeChunkSize: i2, disableRange: n2 }) {
    const r2 = { contentLength: 0, isRangeSupported: false }, s2 = parseInt(t2.get("Content-Length"), 10);
    if (!Number.isInteger(s2)) return r2;
    r2.contentLength = s2;
    if (s2 <= 2 * i2) return r2;
    if (n2 || !e2) return r2;
    if ("bytes" !== t2.get("Accept-Ranges")) return r2;
    "identity" === (t2.get("Content-Encoding") || "identity") && (r2.isRangeSupported = true);
    return r2;
  }
  function extractFilenameFromHeader(t2) {
    const e2 = t2.get("Content-Disposition");
    if (e2) {
      let t3 = (function getFilenameFromContentDispositionHeader(t4) {
        let e3 = true, i2 = toParamRegExp("filename\\*", "i").exec(t4);
        if (i2) {
          i2 = i2[1];
          let t5 = rfc2616unquote(i2);
          t5 = unescape(t5);
          t5 = rfc5987decode(t5);
          t5 = rfc2047decode(t5);
          return fixupEncoding(t5);
        }
        i2 = (function rfc2231getparam(t5) {
          const e4 = [];
          let i3;
          const n2 = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; null !== (i3 = n2.exec(t5)); ) {
            let [, t6, n3, r3] = i3;
            t6 = parseInt(t6, 10);
            if (t6 in e4) {
              if (0 === t6) break;
            } else e4[t6] = [n3, r3];
          }
          const r2 = [];
          for (let t6 = 0; t6 < e4.length && t6 in e4; ++t6) {
            let [i4, n3] = e4[t6];
            n3 = rfc2616unquote(n3);
            if (i4) {
              n3 = unescape(n3);
              0 === t6 && (n3 = rfc5987decode(n3));
            }
            r2.push(n3);
          }
          return r2.join("");
        })(t4);
        if (i2) return fixupEncoding(rfc2047decode(i2));
        i2 = toParamRegExp("filename", "i").exec(t4);
        if (i2) {
          i2 = i2[1];
          let t5 = rfc2616unquote(i2);
          t5 = rfc2047decode(t5);
          return fixupEncoding(t5);
        }
        function toParamRegExp(t5, e4) {
          return new RegExp("(?:^|;)\\s*" + t5 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e4);
        }
        function textdecode(t5, i3) {
          if (t5) {
            if (!/^[\x00-\xFF]+$/.test(i3)) return i3;
            try {
              const n2 = new TextDecoder(t5, { fatal: true }), r2 = stringToBytes(i3);
              i3 = n2.decode(r2);
              e3 = false;
            } catch {
            }
          }
          return i3;
        }
        function fixupEncoding(t5) {
          if (e3 && /[\x80-\xff]/.test(t5)) {
            t5 = textdecode("utf-8", t5);
            e3 && (t5 = textdecode("iso-8859-1", t5));
          }
          return t5;
        }
        function rfc2616unquote(t5) {
          if (t5.startsWith('"')) {
            const e4 = t5.slice(1).split('\\"');
            for (let t6 = 0; t6 < e4.length; ++t6) {
              const i3 = e4[t6].indexOf('"');
              if (-1 !== i3) {
                e4[t6] = e4[t6].slice(0, i3);
                e4.length = t6 + 1;
              }
              e4[t6] = e4[t6].replaceAll(/\\(.)/g, "$1");
            }
            t5 = e4.join('"');
          }
          return t5;
        }
        function rfc5987decode(t5) {
          const e4 = t5.indexOf("'");
          return -1 === e4 ? t5 : textdecode(t5.slice(0, e4), t5.slice(e4 + 1).replace(/^[^']*'/, ""));
        }
        function rfc2047decode(t5) {
          return !t5.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t5) ? t5 : t5.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(t6, e4, i3, n2) {
            if ("q" === i3 || "Q" === i3) return textdecode(e4, n2 = (n2 = n2.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(t7, e5) {
              return String.fromCharCode(parseInt(e5, 16));
            }));
            try {
              n2 = atob(n2);
            } catch {
            }
            return textdecode(e4, n2);
          });
        }
        return "";
      })(e2);
      if (t3.includes("%")) try {
        t3 = decodeURIComponent(t3);
      } catch {
      }
      if (isPdfFile(t3)) return t3;
    }
    return null;
  }
  function createResponseError(t2, e2) {
    return new ResponseException(`Unexpected server response (${t2}) while retrieving PDF "${e2.href}".`, t2, 404 === t2 || 0 === t2 && "file:" === e2.protocol);
  }
  function ensureResponseOrigin(t2, e2) {
    if (t2 !== e2) throw new Error(`Expected range response-origin "${t2}" to match "${e2}".`);
  }
  function fetchUrl(t2, e2, i2, n2) {
    return fetch(t2, { method: "GET", headers: e2, signal: n2.signal, mode: "cors", credentials: i2 ? "include" : "same-origin", redirect: "follow" });
  }
  function ensureResponseStatus(t2, e2) {
    if (200 !== t2 && 206 !== t2) throw createResponseError(t2, e2);
  }
  function getArrayBuffer(t2) {
    if (t2 instanceof Uint8Array) return t2.buffer;
    if (t2 instanceof ArrayBuffer) return t2;
    throw new Error(`getArrayBuffer - unexpected data: ${t2}`);
  }
  var PDFFetchStream = class extends BasePDFStream {
    _responseOrigin = null;
    constructor(t2) {
      super(t2, PDFFetchStreamReader, PDFFetchStreamRangeReader);
      const { httpHeaders: e2, url: i2 } = t2;
      assert(/https?:/.test(i2.protocol), "PDFFetchStream only supports http(s):// URLs.");
      this.headers = createHeaders(true, e2);
    }
  };
  var PDFFetchStreamReader = class extends BasePDFStreamReader {
    _abortController = new AbortController();
    _reader = null;
    constructor(t2) {
      super(t2);
      const { disableRange: e2, disableStream: i2, rangeChunkSize: n2, url: r2, withCredentials: s2 } = t2._source;
      this._isStreamingSupported = !i2;
      const a2 = new Headers(t2.headers);
      fetchUrl(r2, a2, s2, this._abortController).then((i3) => {
        t2._responseOrigin = getResponseOrigin(i3.url);
        ensureResponseStatus(i3.status, r2);
        this._reader = i3.body.getReader();
        const s3 = i3.headers, { contentLength: a3, isRangeSupported: o2 } = validateRangeRequestCapabilities({ responseHeaders: s3, isHttp: true, rangeChunkSize: n2, disableRange: e2 });
        this._contentLength = a3;
        this._isRangeSupported = o2;
        this._filename = extractFilenameFromHeader(s3);
        !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled."));
        this._headersCapability.resolve();
      }).catch(this._headersCapability.reject);
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      if (e2) return { value: t2, done: e2 };
      this._loaded += t2.byteLength;
      this._callOnProgress();
      return { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
      this._abortController.abort();
    }
  };
  var PDFFetchStreamRangeReader = class extends BasePDFStreamRangeReader {
    _abortController = new AbortController();
    _readCapability = Promise.withResolvers();
    _reader = null;
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      const { url: n2, withCredentials: r2 } = t2._source, s2 = new Headers(t2.headers);
      s2.append("Range", `bytes=${e2}-${i2 - 1}`);
      fetchUrl(n2, s2, r2, this._abortController).then((e3) => {
        ensureResponseOrigin(getResponseOrigin(e3.url), t2._responseOrigin);
        ensureResponseStatus(e3.status, n2);
        this._reader = e3.body.getReader();
        this._readCapability.resolve();
      }).catch(this._readCapability.reject);
    }
    async read() {
      await this._readCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      return e2 ? { value: t2, done: e2 } : { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
      this._abortController.abort();
    }
  };
  __webpack_require__(116);
  function transport_stream_getArrayBuffer(t2) {
    return t2 instanceof Uint8Array && t2.byteLength === t2.buffer.byteLength ? t2.buffer : new Uint8Array(t2).buffer;
  }
  function endRequests() {
    for (const t2 of this._requests) t2.resolve({ value: void 0, done: true });
    this._requests.length = 0;
  }
  var PDFDataTransportStream = class extends BasePDFStream {
    _progressiveDone = false;
    _queuedChunks = [];
    constructor(t2) {
      super(t2, PDFDataTransportStreamReader, PDFDataTransportStreamRangeReader);
      const { pdfDataRangeTransport: e2 } = t2, { initialData: i2, progressiveDone: n2 } = e2;
      if (i2?.length > 0) {
        const t3 = transport_stream_getArrayBuffer(i2);
        this._queuedChunks.push(t3);
      }
      this._progressiveDone = n2;
      e2.addRangeListener((t3, e3) => {
        this.#qn(t3, e3);
      });
      e2.addProgressiveReadListener((t3) => {
        this.#qn(void 0, t3);
      });
      e2.addProgressiveDoneListener(() => {
        this._fullReader?.progressiveDone();
        this._progressiveDone = true;
      });
      e2.transportReady();
    }
    #qn(t2, e2) {
      const i2 = transport_stream_getArrayBuffer(e2);
      if (void 0 === t2) this._fullReader ? this._fullReader._enqueue(i2) : this._queuedChunks.push(i2);
      else {
        const e3 = this._rangeReaders.keys().find((e4) => e4._begin === t2);
        assert(e3, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        e3._enqueue(i2);
      }
    }
    getFullReader() {
      const t2 = super.getFullReader();
      this._queuedChunks = null;
      return t2;
    }
    getRangeReader(t2, e2) {
      const i2 = super.getRangeReader(t2, e2);
      if (i2) {
        i2.onDone = () => this._rangeReaders.delete(i2);
        this._source.pdfDataRangeTransport.requestDataRange(t2, e2);
      }
      return i2;
    }
    cancelAllRequests(t2) {
      super.cancelAllRequests(t2);
      this._source.pdfDataRangeTransport.abort();
    }
  };
  var PDFDataTransportStreamReader = class extends BasePDFStreamReader {
    #Xn = endRequests.bind(this);
    _done = false;
    _queuedChunks = null;
    _requests = [];
    constructor(t2) {
      super(t2);
      const { pdfDataRangeTransport: e2, disableRange: i2, disableStream: n2 } = t2._source, { length: r2, contentDispositionFilename: s2 } = e2;
      this._queuedChunks = t2._queuedChunks || [];
      for (const t3 of this._queuedChunks) this._loaded += t3.byteLength;
      this._done = t2._progressiveDone;
      this._contentLength = r2;
      this._isStreamingSupported = !n2;
      this._isRangeSupported = !i2;
      isPdfFile(s2) && (this._filename = s2);
      this._headersCapability.resolve();
      const a2 = this._loaded;
      Promise.resolve().then(() => {
        a2 > 0 && this._loaded === a2 && this._callOnProgress();
      });
    }
    _enqueue(t2) {
      if (!this._done) {
        if (this._requests.length > 0) {
          this._requests.shift().resolve({ value: t2, done: false });
        } else this._queuedChunks.push(t2);
        this._loaded += t2.byteLength;
        this._callOnProgress();
      }
    }
    async read() {
      if (this._queuedChunks.length > 0) {
        return { value: this._queuedChunks.shift(), done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      this.#Xn();
    }
    progressiveDone() {
      this._done ||= true;
      0 === this._queuedChunks.length && this.#Xn();
    }
  };
  var PDFDataTransportStreamRangeReader = class extends BasePDFStreamRangeReader {
    #Xn = endRequests.bind(this);
    onDone = null;
    _begin = -1;
    _done = false;
    _queuedChunk = null;
    _requests = [];
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      this._begin = e2;
    }
    _enqueue(t2) {
      if (!this._done) {
        if (0 === this._requests.length) this._queuedChunk = t2;
        else {
          this._requests.shift().resolve({ value: t2, done: false });
          this.#Xn();
        }
        this._done = true;
        this.onDone?.();
      }
    }
    async read() {
      if (this._queuedChunk) {
        const t3 = this._queuedChunk;
        this._queuedChunk = null;
        return { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      this.#Xn();
      this.onDone?.();
    }
  };
  var PDFNetworkStream = class extends BasePDFStream {
    #Yn = /* @__PURE__ */ new WeakMap();
    _responseOrigin = null;
    constructor(t2) {
      super(t2, PDFNetworkStreamReader, PDFNetworkStreamRangeReader);
      const { httpHeaders: e2, url: i2 } = t2;
      this.url = i2;
      this.isHttp = /https?:/.test(i2.protocol);
      this.headers = createHeaders(this.isHttp, e2);
    }
    _request(t2) {
      const e2 = new XMLHttpRequest(), i2 = { validateStatus: null, onHeadersReceived: t2.onHeadersReceived, onDone: t2.onDone, onError: t2.onError, onProgress: t2.onProgress };
      this.#Yn.set(e2, i2);
      e2.open("GET", this.url);
      e2.withCredentials = this._source.withCredentials;
      for (const [t3, i3] of this.headers) e2.setRequestHeader(t3, i3);
      if (this.isHttp && "begin" in t2 && "end" in t2) {
        e2.setRequestHeader("Range", `bytes=${t2.begin}-${t2.end - 1}`);
        i2.validateStatus = (t3) => 206 === t3 || 200 === t3;
      } else i2.validateStatus = (t3) => 200 === t3;
      e2.responseType = "arraybuffer";
      assert(t2.onError, "Expected `onError` callback to be provided.");
      e2.onerror = () => t2.onError(e2.status);
      e2.onreadystatechange = this.#Kn.bind(this, e2);
      e2.onprogress = this.#Jn.bind(this, e2);
      e2.send(null);
      return e2;
    }
    #Jn(t2, e2) {
      const i2 = this.#Yn.get(t2);
      i2?.onProgress?.(e2);
    }
    #Kn(t2, e2) {
      const i2 = this.#Yn.get(t2);
      if (!i2) return;
      if (t2.readyState >= 2 && i2.onHeadersReceived) {
        i2.onHeadersReceived();
        delete i2.onHeadersReceived;
      }
      if (4 !== t2.readyState) return;
      if (!this.#Yn.has(t2)) return;
      this.#Yn.delete(t2);
      if (0 === t2.status && this.isHttp) {
        i2.onError(t2.status);
        return;
      }
      const n2 = t2.status || 200;
      if (!i2.validateStatus(n2)) {
        i2.onError(t2.status);
        return;
      }
      const r2 = (function network_getArrayBuffer(t3) {
        return "string" != typeof t3 ? t3 : stringToBytes(t3).buffer;
      })(t2.response);
      if (206 === n2) {
        const e3 = t2.getResponseHeader("Content-Range");
        if (/bytes (\d+)-(\d+)\/(\d+)/.test(e3)) i2.onDone(r2);
        else {
          warn('Missing or invalid "Content-Range" header.');
          i2.onError(0);
        }
      } else r2 ? i2.onDone(r2) : i2.onError(t2.status);
    }
    _abortRequest(t2) {
      if (this.#Yn.has(t2)) {
        this.#Yn.delete(t2);
        t2.abort();
      }
    }
    getRangeReader(t2, e2) {
      const i2 = super.getRangeReader(t2, e2);
      i2 && (i2.onClosed = () => this._rangeReaders.delete(i2));
      return i2;
    }
  };
  var PDFNetworkStreamReader = class extends BasePDFStreamReader {
    #Xn = endRequests.bind(this);
    _cachedChunks = [];
    _done = false;
    _requests = [];
    _storedError = null;
    constructor(t2) {
      super(t2);
      this._fullRequestXhr = t2._request({ onHeadersReceived: this.#Qn.bind(this), onDone: this.#Zn.bind(this), onError: this.#tr.bind(this), onProgress: this.#Jn.bind(this) });
    }
    #Qn() {
      const t2 = this._stream, { disableRange: e2, rangeChunkSize: i2 } = t2._source, n2 = this._fullRequestXhr;
      t2._responseOrigin = getResponseOrigin(n2.responseURL);
      const r2 = n2.getAllResponseHeaders(), s2 = new Headers(r2 ? r2.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((t3) => {
        const [e3, ...i3] = t3.split(": ");
        return [e3, i3.join(": ")];
      }) : []), { contentLength: a2, isRangeSupported: o2 } = validateRangeRequestCapabilities({ responseHeaders: s2, isHttp: t2.isHttp, rangeChunkSize: i2, disableRange: e2 });
      this._contentLength = a2;
      this._isRangeSupported = o2;
      this._filename = extractFilenameFromHeader(s2);
      this._isRangeSupported && t2._abortRequest(n2);
      this._headersCapability.resolve();
    }
    #Zn(t2) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t2, done: false });
      } else this._cachedChunks.push(t2);
      this._done = true;
      0 === this._cachedChunks.length && this.#Xn();
    }
    #tr(t2) {
      this._storedError = createResponseError(t2, this._stream.url);
      this._headersCapability.reject(this._storedError);
      for (const t3 of this._requests) t3.reject(this._storedError);
      this._requests.length = 0;
      this._cachedChunks.length = 0;
    }
    #Jn(t2) {
      this.onProgress?.({ loaded: t2.loaded, total: t2.lengthComputable ? t2.total : this._contentLength });
    }
    async read() {
      await this._headersCapability.promise;
      if (this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) {
        return { value: this._cachedChunks.shift(), done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      this._headersCapability.reject(t2);
      this.#Xn();
      this._stream._abortRequest(this._fullRequestXhr);
      this._fullRequestXhr = null;
    }
  };
  var PDFNetworkStreamRangeReader = class extends BasePDFStreamRangeReader {
    #Xn = endRequests.bind(this);
    onClosed = null;
    _done = false;
    _queuedChunk = null;
    _requests = [];
    _storedError = null;
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      this._requestXhr = t2._request({ begin: e2, end: i2, onHeadersReceived: this.#Qn.bind(this), onDone: this.#Zn.bind(this), onError: this.#tr.bind(this), onProgress: null });
    }
    #Qn() {
      const t2 = getResponseOrigin(this._requestXhr?.responseURL);
      try {
        ensureResponseOrigin(t2, this._stream._responseOrigin);
      } catch (t3) {
        this._storedError = t3;
        this.#tr(0);
      }
    }
    #Zn(t2) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t2, done: false });
      } else this._queuedChunk = t2;
      this._done = true;
      this.#Xn();
      this.onClosed?.();
    }
    #tr(t2) {
      this._storedError ??= createResponseError(t2, this._stream.url);
      for (const t3 of this._requests) t3.reject(this._storedError);
      this._requests.length = 0;
      this._queuedChunk = null;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (null !== this._queuedChunk) {
        const t3 = this._queuedChunk;
        this._queuedChunk = null;
        return { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      this.#Xn();
      this._stream._abortRequest(this._requestXhr);
      this.onClosed?.();
    }
  };
  function getReadableStream(t2) {
    const { Readable: e2 } = process.getBuiltinModule("stream");
    if ("function" == typeof e2.toWeb) return e2.toWeb(t2);
    return process.getBuiltinModule("module").createRequire(import_meta.url)("node-readable-to-web-readable-stream").makeDefaultReadableStreamFromNodeReadable(t2);
  }
  var PDFNodeStream = class extends BasePDFStream {
    constructor(t2) {
      super(t2, PDFNodeStreamReader, PDFNodeStreamRangeReader);
      const { url: e2 } = t2;
      assert("file:" === e2.protocol, "PDFNodeStream only supports file:// URLs.");
    }
  };
  var PDFNodeStreamReader = class extends BasePDFStreamReader {
    _reader = null;
    constructor(t2) {
      super(t2);
      const { disableRange: e2, disableStream: i2, rangeChunkSize: n2, url: r2 } = t2._source;
      this._isStreamingSupported = !i2;
      const s2 = process.getBuiltinModule("fs");
      s2.promises.lstat(r2).then((t3) => {
        const i3 = getReadableStream(s2.createReadStream(r2));
        this._reader = i3.getReader();
        const { size: a2 } = t3;
        this._contentLength = a2;
        this._isRangeSupported = !e2 && a2 > 2 * n2;
        !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled."));
        this._headersCapability.resolve();
      }).catch((t3) => {
        "ENOENT" === t3.code && (t3 = createResponseError(0, r2));
        this._headersCapability.reject(t3);
      });
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      if (e2) return { value: t2, done: e2 };
      this._loaded += t2.byteLength;
      this._callOnProgress();
      return { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
    }
  };
  var PDFNodeStreamRangeReader = class extends BasePDFStreamRangeReader {
    _readCapability = Promise.withResolvers();
    _reader = null;
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      const { url: n2 } = t2._source, r2 = process.getBuiltinModule("fs");
      try {
        const t3 = getReadableStream(r2.createReadStream(n2, { start: e2, end: i2 - 1 }));
        this._reader = t3.getReader();
        this._readCapability.resolve();
      } catch (t3) {
        this._readCapability.reject(t3);
      }
    }
    async read() {
      await this._readCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      return e2 ? { value: t2, done: e2 } : { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
    }
  };
  var GlobalWorkerOptions = class {
    static #er = null;
    static #ir = "";
    static get workerPort() {
      return this.#er;
    }
    static set workerPort(t2) {
      if (!("undefined" != typeof Worker && t2 instanceof Worker) && null !== t2) throw new Error("Invalid `workerPort` type.");
      this.#er = t2;
    }
    static get workerSrc() {
      return this.#ir;
    }
    static set workerSrc(t2) {
      if ("string" != typeof t2) throw new Error("Invalid `workerSrc` type.");
      this.#ir = t2;
    }
  };
  var Metadata = class {
    #nr;
    #rr;
    constructor({ parsedData: t2, rawData: e2 }) {
      this.#nr = t2;
      this.#rr = e2;
    }
    getRaw() {
      return this.#rr;
    }
    get(t2) {
      return this.#nr.get(t2) ?? null;
    }
    [Symbol.iterator]() {
      return this.#nr.entries();
    }
  };
  var Nt = /* @__PURE__ */ Symbol("INTERNAL");
  var OptionalContentGroup = class {
    #sr = false;
    #ar = false;
    #or = false;
    #lr = true;
    constructor(t2, { name: e2, intent: i2, usage: n2, rbGroups: r2 }) {
      this.#sr = !!(t2 & a);
      this.#ar = !!(t2 & o);
      this.name = e2;
      this.intent = i2;
      this.usage = n2;
      this.rbGroups = r2;
    }
    get visible() {
      if (this.#or) return this.#lr;
      if (!this.#lr) return false;
      const { print: t2, view: e2 } = this.usage;
      return this.#sr ? "OFF" !== e2?.viewState : !this.#ar || "OFF" !== t2?.printState;
    }
    _setVisible(t2, e2, i2 = false) {
      t2 !== Nt && unreachable("Internal method `_setVisible` called.");
      this.#or = i2;
      this.#lr = e2;
    }
  };
  var OptionalContentConfig = class {
    #hr = null;
    #cr = /* @__PURE__ */ new Map();
    #dr = null;
    #ur = null;
    constructor(t2, e2 = a) {
      this.renderingIntent = e2;
      this.name = null;
      this.creator = null;
      if (null !== t2) {
        this.name = t2.name;
        this.creator = t2.creator;
        this.#ur = t2.order;
        for (const i2 of t2.groups) this.#cr.set(i2.id, new OptionalContentGroup(e2, i2));
        if ("OFF" === t2.baseState) for (const t3 of this.#cr.values()) t3._setVisible(Nt, false);
        for (const e3 of t2.on) this.#cr.get(e3)._setVisible(Nt, true);
        for (const e3 of t2.off) this.#cr.get(e3)._setVisible(Nt, false);
        this.#dr = this.getHash();
      }
    }
    #pr(t2) {
      const e2 = t2.length;
      if (e2 < 2) return true;
      const i2 = t2[0];
      for (let n2 = 1; n2 < e2; n2++) {
        const e3 = t2[n2];
        let r2;
        if (Array.isArray(e3)) r2 = this.#pr(e3);
        else {
          if (!this.#cr.has(e3)) {
            warn(`Optional content group not found: ${e3}`);
            return true;
          }
          r2 = this.#cr.get(e3).visible;
        }
        switch (i2) {
          case "And":
            if (!r2) return false;
            break;
          case "Or":
            if (r2) return true;
            break;
          case "Not":
            return !r2;
          default:
            return true;
        }
      }
      return "And" === i2;
    }
    isVisible(t2) {
      if (0 === this.#cr.size) return true;
      if (!t2) {
        info("Optional content group not defined.");
        return true;
      }
      if ("OCG" === t2.type) {
        if (!this.#cr.has(t2.id)) {
          warn(`Optional content group not found: ${t2.id}`);
          return true;
        }
        return this.#cr.get(t2.id).visible;
      }
      if ("OCMD" === t2.type) {
        if (t2.expression) return this.#pr(t2.expression);
        if (!t2.policy || "AnyOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#cr.has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (this.#cr.get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#cr.has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (!this.#cr.get(e2).visible) return false;
          }
          return true;
        }
        if ("AnyOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#cr.has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (!this.#cr.get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#cr.has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (this.#cr.get(e2).visible) return false;
          }
          return true;
        }
        warn(`Unknown optional content policy ${t2.policy}.`);
        return true;
      }
      warn(`Unknown group type ${t2.type}.`);
      return true;
    }
    setVisibility(t2, e2 = true, i2 = true) {
      const n2 = this.#cr.get(t2);
      if (n2) {
        if (i2 && e2 && n2.rbGroups.length) for (const e3 of n2.rbGroups) for (const i3 of e3) i3 !== t2 && this.#cr.get(i3)?._setVisible(Nt, false, true);
        n2._setVisible(Nt, !!e2, true);
        this.#hr = null;
      } else warn(`Optional content group not found: ${t2}`);
    }
    setOCGState({ state: t2, preserveRB: e2 }) {
      let i2;
      for (const n2 of t2) {
        switch (n2) {
          case "ON":
          case "OFF":
          case "Toggle":
            i2 = n2;
            continue;
        }
        const t3 = this.#cr.get(n2);
        if (t3) switch (i2) {
          case "ON":
            this.setVisibility(n2, true, e2);
            break;
          case "OFF":
            this.setVisibility(n2, false, e2);
            break;
          case "Toggle":
            this.setVisibility(n2, !t3.visible, e2);
        }
      }
      this.#hr = null;
    }
    get hasInitialVisibility() {
      return null === this.#dr || this.getHash() === this.#dr;
    }
    getOrder() {
      return this.#cr.size ? this.#ur ? this.#ur.slice() : [...this.#cr.keys()] : null;
    }
    getGroup(t2) {
      return this.#cr.get(t2) || null;
    }
    getHash() {
      if (null !== this.#hr) return this.#hr;
      const t2 = new MurmurHash3_64();
      for (const [e2, i2] of this.#cr) t2.update(`${e2}:${i2.visible}`);
      return this.#hr = t2.hexdigest();
    }
    [Symbol.iterator]() {
      return this.#cr.entries();
    }
  };
  var PagesMapper = class {
    #gr = null;
    #mr = null;
    #fr = 0;
    #br = null;
    #yr = null;
    get pagesNumber() {
      return this.#fr;
    }
    set pagesNumber(t2) {
      if (this.#fr !== t2) {
        this.#fr = t2;
        this.#gr = null;
        this.#mr = null;
      }
    }
    #vr() {
      if (this.#gr) return;
      const t2 = this.#fr, e2 = this.#gr = new Uint32Array(t2);
      for (let i2 = 0; i2 < t2; i2++) e2[i2] = i2 + 1;
      this.#mr = new Int32Array(e2);
    }
    #wr() {
      const t2 = /* @__PURE__ */ new Map(), e2 = this.#gr;
      for (let i2 = 0, n2 = this.#fr; i2 < n2; i2++) {
        const n3 = e2[i2], r2 = t2.get(n3);
        r2 ? r2.push(i2 + 1) : t2.set(n3, [i2 + 1]);
      }
      return t2;
    }
    movePages(t2, e2, i2) {
      this.#vr();
      const n2 = this.#gr, r2 = this.#wr(), s2 = e2.length, a2 = new Uint32Array(s2);
      let o2 = 0;
      for (let t3 = 0; t3 < s2; t3++) {
        const r3 = e2[t3] - 1;
        a2[t3] = n2[r3];
        r3 < i2 && o2++;
      }
      const l2 = this.#fr, h2 = l2 - s2, c2 = MathClamp(i2 - o2, 0, h2);
      for (let e3 = 0, i3 = 0; e3 < l2; e3++) t2.has(e3 + 1) || (n2[i3++] = n2[e3]);
      n2.copyWithin(c2 + s2, c2, h2);
      n2.set(a2, c2);
      this.#Ar(r2);
      n2.every((t3, e3) => t3 === e3 + 1) && (this.#gr = null);
    }
    deletePages(t2) {
      this.#vr();
      const e2 = this.#gr, i2 = this.#wr();
      this.#yr = { pageNumberToId: e2.slice(), pagesNumber: this.#fr, prevPageNumbers: this.#mr.slice() };
      const n2 = this.#fr - t2.length;
      this.#fr = n2;
      const r2 = this.#gr = new Uint32Array(n2);
      this.#mr = new Int32Array(n2);
      let s2 = 0, a2 = 0;
      for (const i3 of t2) {
        const t3 = i3 - 1;
        if (t3 !== s2) {
          r2.set(e2.subarray(s2, t3), a2);
          a2 += t3 - s2;
        }
        s2 = t3 + 1;
      }
      s2 < e2.length && r2.set(e2.subarray(s2), a2);
      this.#Ar(i2, new Set(t2));
    }
    cancelDelete() {
      if (this.#yr) {
        this.#gr = this.#yr.pageNumberToId;
        this.#fr = this.#yr.pagesNumber;
        this.#mr = this.#yr.prevPageNumbers;
        this.#yr = null;
      }
    }
    cleanSavedData() {
      this.#yr = null;
    }
    copyPages(t2) {
      this.#vr();
      this.#br = { pageNumbers: t2, pageIds: t2.map((t3) => this.#gr[t3 - 1]) };
    }
    cancelCopy() {
      this.#br = null;
    }
    pastePages(t2) {
      this.#vr();
      const e2 = this.#gr, i2 = this.#wr(), { pageNumbers: n2, pageIds: r2 } = this.#br, s2 = this.#fr + n2.length;
      this.#fr = s2;
      const a2 = this.#gr = new Uint32Array(s2);
      this.#mr = new Int32Array(s2);
      a2.set(e2.subarray(0, t2), 0);
      a2.set(r2, t2);
      a2.set(e2.subarray(t2), t2 + n2.length);
      this.#Ar(i2, null, t2, n2);
      this.#br = null;
    }
    #Ar(t2, e2 = null, i2 = -1, n2 = null) {
      const r2 = this.#mr, s2 = this.#gr, a2 = i2 + (n2?.length ?? 0), o2 = /* @__PURE__ */ new Map();
      for (let l2 = 0, h2 = this.#fr; l2 < h2; l2++) {
        if (l2 >= i2 && l2 < a2) {
          r2[l2] = -n2[l2 - i2];
          continue;
        }
        const h3 = s2[l2], c2 = t2.get(h3);
        let d2 = o2.get(h3) || 0;
        if (e2 && c2) for (; d2 < c2.length && e2.has(c2[d2]); ) d2++;
        r2[l2] = c2?.[d2];
        o2.set(h3, d2 + 1);
      }
    }
    hasBeenAltered() {
      return null !== this.#gr;
    }
    getPageMappingForSaving(t2 = null) {
      t2 ??= this.#wr();
      let e2 = 0;
      for (const i3 of t2.values()) e2 = Math.max(e2, i3.length);
      const i2 = new Array(e2);
      for (let t3 = 0; t3 < e2; t3++) i2[t3] = { document: null, pageIndices: [], includePages: [] };
      for (const [e3, n2] of t2) for (let t3 = 0, r2 = n2.length; t3 < r2; t3++) i2[t3].includePages.push([e3 - 1, n2[t3] - 1]);
      for (const { includePages: t3, pageIndices: e3 } of i2) {
        t3.sort((t4, e4) => t4[0] - e4[0]);
        for (let i3 = 0, n2 = t3.length; i3 < n2; i3++) {
          e3.push(t3[i3][1]);
          t3[i3] = t3[i3][0];
        }
      }
      return i2;
    }
    extractPages(t2) {
      t2 = Array.from(t2).sort((t3, e3) => t3 - e3);
      const e2 = /* @__PURE__ */ new Map();
      for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
        const n3 = this.getPageId(t2[i2]);
        e2.getOrInsertComputed(n3, makeArr).push(i2 + 1);
      }
      return this.getPageMappingForSaving(e2);
    }
    getPrevPageNumber(t2) {
      return this.#mr?.[t2 - 1] ?? 0;
    }
    getPageNumber(t2) {
      if (!this.#gr) return t2;
      const e2 = this.#gr;
      for (let i2 = 0, n2 = this.#fr; i2 < n2; i2++) if (e2[i2] === t2) return i2 + 1;
      return 0;
    }
    getPageId(t2) {
      return this.#gr?.[t2 - 1] ?? t2;
    }
    getMapping() {
      return this.#gr?.subarray(0, this.pagesNumber);
    }
  };
  var Ut = /* @__PURE__ */ Symbol("INITIAL_DATA");
  var dataObj = () => ({ ...Promise.withResolvers(), data: Ut });
  var PDFObjects = class {
    #xr = /* @__PURE__ */ new Map();
    get(t2, e2 = null) {
      if (e2) {
        const i3 = this.#xr.getOrInsertComputed(t2, dataObj);
        i3.promise.then(() => e2(i3.data));
        return null;
      }
      const i2 = this.#xr.get(t2);
      if (!i2 || i2.data === Ut) throw new Error(`Requesting object that isn't resolved yet ${t2}.`);
      return i2.data;
    }
    has(t2) {
      const e2 = this.#xr.get(t2);
      return !!e2 && e2.data !== Ut;
    }
    delete(t2) {
      const e2 = this.#xr.get(t2);
      if (!e2 || e2.data === Ut) return false;
      this.#xr.delete(t2);
      return true;
    }
    resolve(t2, e2 = null) {
      const i2 = this.#xr.getOrInsertComputed(t2, dataObj);
      if (i2.data !== Ut) throw new Error(`Object already resolved ${t2}.`);
      i2.data = e2;
      i2.resolve();
    }
    clear() {
      for (const { data: t2 } of this.#xr.values()) t2?.bitmap?.close();
      this.#xr.clear();
    }
    *[Symbol.iterator]() {
      for (const [t2, { data: e2 }] of this.#xr) e2 !== Ut && (yield [t2, e2]);
    }
  };
  var TextLayer = class _TextLayer {
    #Er = Promise.withResolvers();
    #Ct = null;
    #_r = false;
    #Tr = !!globalThis.FontInspector?.enabled;
    #Sr = null;
    #Cr = null;
    #Dr = null;
    #Pr = 0;
    #Mr = 0;
    #kr = null;
    #Ir = null;
    #Fr = 0;
    #Rr = 0;
    #Br = /* @__PURE__ */ Object.create(null);
    #Or = [];
    #Lr = null;
    #Nr = [];
    #Ur = /* @__PURE__ */ new WeakMap();
    #Hr = null;
    static #zr = /* @__PURE__ */ new Map();
    static #jr = /* @__PURE__ */ new Map();
    static #Gr = /* @__PURE__ */ new WeakMap();
    static #Wr = null;
    static #Vr = /* @__PURE__ */ new Set();
    constructor({ textContentSource: t2, images: e2, container: i2, viewport: n2 }) {
      if (t2 instanceof ReadableStream) this.#Lr = t2;
      else {
        if ("object" != typeof t2) throw new Error('No "textContentSource" parameter specified.');
        this.#Lr = new ReadableStream({ start(e3) {
          e3.enqueue(t2);
          e3.close();
        } });
      }
      this.#Ct = this.#Ir = i2;
      this.#Sr = e2;
      this.#Rr = n2.scale * OutputScale.pixelRatio;
      this.#Fr = n2.rotation;
      this.#Dr = { div: null, properties: null, ctx: null };
      const { pageWidth: r2, pageHeight: s2, pageX: a2, pageY: o2 } = n2.rawDims;
      this.#Hr = [1, 0, 0, -1, -a2, o2 + s2];
      this.#Mr = r2;
      this.#Pr = s2;
      _TextLayer.#$r();
      i2.style.setProperty("--min-font-size", _TextLayer.#Wr);
      setLayerDimensions(i2, n2);
      this.#Er.promise.finally(() => {
        _TextLayer.#Vr.delete(this);
        this.#Dr = null;
        this.#Br = null;
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t2, isFirefox: e2 } = FeatureTest.platform;
      return shadow(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", (t2 && e2 ? "Calibri, " : "") + "sans-serif"], ["monospace", (t2 && e2 ? "Lucida Console, " : "") + "monospace"]]));
    }
    render() {
      this.#Sr && this.#Ct.append(this.#Sr.render());
      const pump = () => {
        this.#kr.read().then(({ value: t2, done: e2 }) => {
          if (e2) this.#Er.resolve();
          else {
            this.#Cr ??= t2.lang;
            Object.assign(this.#Br, t2.styles);
            this.#qr(t2.items);
            pump();
          }
        }, this.#Er.reject);
      };
      this.#kr = this.#Lr.getReader();
      _TextLayer.#Vr.add(this);
      pump();
      return this.#Er.promise;
    }
    update({ viewport: t2, onBefore: e2 = null }) {
      const i2 = t2.scale * OutputScale.pixelRatio, n2 = t2.rotation;
      if (n2 !== this.#Fr) {
        e2?.();
        this.#Fr = n2;
        setLayerDimensions(this.#Ir, { rotation: n2 });
      }
      if (i2 !== this.#Rr) {
        e2?.();
        this.#Rr = i2;
        const t3 = { div: null, properties: null, ctx: _TextLayer.#Xr(this.#Cr) };
        for (const e3 of this.#Nr) {
          t3.properties = this.#Ur.get(e3);
          t3.div = e3;
          this.#Yr(t3);
        }
      }
    }
    cancel() {
      const t2 = new AbortException("TextLayer task cancelled.");
      this.#kr?.cancel(t2).catch(() => {
      });
      this.#kr = null;
      this.#Er.reject(t2);
    }
    get textDivs() {
      return this.#Nr;
    }
    get textContentItemsStr() {
      return this.#Or;
    }
    #qr(t2) {
      if (this.#_r) return;
      this.#Dr.ctx ??= _TextLayer.#Xr(this.#Cr);
      const e2 = this.#Nr, i2 = this.#Or;
      for (const n2 of t2) {
        if (e2.length > 1e5) {
          warn("Ignoring additional textDivs for performance reasons.");
          this.#_r = true;
          return;
        }
        if (void 0 !== n2.str) {
          i2.push(n2.str);
          this.#Kr(n2);
        } else if ("beginMarkedContentProps" === n2.type || "beginMarkedContent" === n2.type) {
          const t3 = this.#Ct;
          this.#Ct = document.createElement("span");
          this.#Ct.classList.add("markedContent");
          n2.id && this.#Ct.setAttribute("id", `${n2.id}`);
          "Artifact" === n2.tag && (this.#Ct.ariaHidden = true);
          t3.append(this.#Ct);
        } else "endMarkedContent" === n2.type && (this.#Ct = this.#Ct.parentNode);
      }
    }
    #Kr(t2) {
      const e2 = document.createElement("span"), i2 = { angle: 0, canvasWidth: 0, hasText: "" !== t2.str, hasEOL: t2.hasEOL, fontSize: 0 };
      this.#Nr.push(e2);
      const n2 = Util.transform(this.#Hr, t2.transform);
      let r2 = Math.atan2(n2[1], n2[0]);
      const s2 = this.#Br[t2.fontName];
      s2.vertical && (r2 += Math.PI / 2);
      let a2 = this.#Tr && s2.fontSubstitution || s2.fontFamily;
      a2 = _TextLayer.fontFamilyMap.get(a2) || a2;
      const o2 = Math.hypot(n2[2], n2[3]), l2 = o2 * _TextLayer.#Jr(a2, s2, this.#Cr);
      let h2, c2;
      if (0 === r2) {
        h2 = n2[4];
        c2 = n2[5] - l2;
      } else {
        h2 = n2[4] + l2 * Math.sin(r2);
        c2 = n2[5] - l2 * Math.cos(r2);
      }
      const d2 = e2.style;
      d2.left = `${(100 * h2 / this.#Mr).toFixed(2)}%`;
      d2.top = `${(100 * c2 / this.#Pr).toFixed(2)}%`;
      d2.setProperty("--font-height", `${o2.toFixed(2)}px`);
      d2.fontFamily = a2;
      i2.fontSize = o2;
      e2.setAttribute("role", "presentation");
      e2.textContent = t2.str;
      e2.dir = t2.dir;
      this.#Tr && (e2.dataset.fontName = s2.fontSubstitutionLoadedName || t2.fontName);
      0 !== r2 && (i2.angle = r2 * (180 / Math.PI));
      let u2 = false;
      if (t2.str.length > 1) u2 = true;
      else if (" " !== t2.str && t2.transform[0] !== t2.transform[3]) {
        const e3 = Math.abs(t2.transform[0]), i3 = Math.abs(t2.transform[3]);
        e3 !== i3 && Math.max(e3, i3) / Math.min(e3, i3) > 1.5 && (u2 = true);
      }
      u2 && (i2.canvasWidth = s2.vertical ? t2.height : t2.width);
      this.#Ur.set(e2, i2);
      this.#Dr.div = e2;
      this.#Dr.properties = i2;
      this.#Yr(this.#Dr);
      i2.hasText && this.#Ct.append(e2);
      if (i2.hasEOL) {
        const t3 = document.createElement("br");
        t3.setAttribute("role", "presentation");
        this.#Ct.append(t3);
      }
    }
    #Yr(t2) {
      const { div: e2, properties: i2, ctx: n2 } = t2, { style: r2 } = e2;
      if (0 !== i2.canvasWidth && i2.hasText) {
        const { fontFamily: t3 } = r2, { canvasWidth: s2, fontSize: a2 } = i2;
        _TextLayer.#Qr(n2, a2 * this.#Rr, t3);
        const { width: o2 } = n2.measureText(e2.textContent);
        o2 > 0 && r2.setProperty("--scale-x", s2 * this.#Rr / o2);
      }
      0 !== i2.angle && r2.setProperty("--rotate", `${i2.angle}deg`);
    }
    static cleanup() {
      if (!(this.#Vr.size > 0)) {
        this.#zr.clear();
        for (const { canvas: t2 } of this.#jr.values()) t2.remove();
        this.#jr.clear();
      }
    }
    static #Xr(t2 = null) {
      let e2 = this.#jr.get(t2 ||= "");
      if (!e2) {
        const i2 = document.createElement("canvas");
        i2.className = "hiddenCanvasElement";
        i2.lang = t2;
        document.body.append(i2);
        e2 = i2.getContext("2d", { alpha: false, willReadFrequently: true });
        this.#jr.set(t2, e2);
        this.#Gr.set(e2, { size: 0, family: "" });
      }
      return e2;
    }
    static #Qr(t2, e2, i2) {
      const n2 = this.#Gr.get(t2);
      if (e2 !== n2.size || i2 !== n2.family) {
        t2.font = `${e2}px ${i2}`;
        n2.size = e2;
        n2.family = i2;
      }
    }
    static #$r() {
      if (null !== this.#Wr) return;
      const t2 = document.createElement("div");
      t2.style.opacity = 0;
      t2.style.lineHeight = 1;
      t2.style.fontSize = "1px";
      t2.style.position = "absolute";
      t2.textContent = "X";
      document.body.append(t2);
      this.#Wr = t2.getBoundingClientRect().height;
      t2.remove();
    }
    static #Jr(t2, e2, i2) {
      const n2 = this.#zr.get(t2);
      if (n2) return n2;
      const r2 = this.#Xr(i2);
      r2.canvas.width = r2.canvas.height = 30;
      this.#Qr(r2, 30, t2);
      const s2 = r2.measureText(""), a2 = s2.fontBoundingBoxAscent, o2 = Math.abs(s2.fontBoundingBoxDescent);
      r2.canvas.width = r2.canvas.height = 0;
      let l2 = 0.8;
      if (a2) l2 = a2 / (a2 + o2);
      else {
        FeatureTest.platform.isFirefox && warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.");
        e2.ascent ? l2 = e2.ascent : e2.descent && (l2 = 1 + e2.descent);
      }
      this.#zr.set(t2, l2);
      return l2;
    }
  };
  function getDocument(t2 = {}) {
    "string" == typeof t2 || t2 instanceof URL ? t2 = { url: t2 } : (t2 instanceof ArrayBuffer || ArrayBuffer.isView(t2)) && (t2 = { data: t2 });
    const e2 = new PDFDocumentLoadingTask(), { docId: n2 } = e2, r2 = t2.url ? (function getUrlProp(t3) {
      if (t3 instanceof URL) return t3;
      if ("string" == typeof t3) {
        if (i) {
          if (/^[a-z][a-z0-9\-+.]+:/i.test(t3)) return new URL(t3);
          const e4 = process.getBuiltinModule("url");
          return new URL(e4.pathToFileURL(t3));
        }
        const e3 = URL.parse(t3, window.location);
        if (e3) return e3;
      }
      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
    })(t2.url) : null, s2 = t2.data ? (function getDataProp(t3) {
      if (i && "undefined" != typeof Buffer && t3 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
      if (t3 instanceof Uint8Array && t3.byteLength === t3.buffer.byteLength) return t3;
      if ("string" == typeof t3) return stringToBytes(t3);
      if (t3 instanceof ArrayBuffer || ArrayBuffer.isView(t3) || "object" == typeof t3 && !isNaN(t3?.length)) return new Uint8Array(t3);
      throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
    })(t2.data) : null, a2 = t2.httpHeaders || null, o2 = true === t2.withCredentials, l2 = t2.password ?? null, h2 = t2.range instanceof PDFDataRangeTransport ? t2.range : null, c2 = Number.isInteger(t2.rangeChunkSize) && t2.rangeChunkSize > 0 ? t2.rangeChunkSize : 65536;
    let d2 = t2.worker instanceof PDFWorker ? t2.worker : null;
    const u2 = t2.verbosity, p2 = "string" != typeof t2.docBaseUrl || isDataScheme(t2.docBaseUrl) ? null : t2.docBaseUrl, g2 = getFactoryUrlProp(t2.cMapUrl), m2 = false !== t2.cMapPacked, f2 = getFactoryUrlProp(t2.iccUrl), b2 = getFactoryUrlProp(t2.standardFontDataUrl), y2 = getFactoryUrlProp(t2.wasmUrl), v2 = true !== t2.stopAtErrors, w2 = Number.isInteger(t2.maxImageSize) && t2.maxImageSize > -1 ? t2.maxImageSize : -1, A2 = false !== t2.isEvalSupported, x2 = "boolean" == typeof t2.isOffscreenCanvasSupported ? t2.isOffscreenCanvasSupported : !i, E2 = "boolean" == typeof t2.isImageDecoderSupported ? t2.isImageDecoderSupported : !i && (FeatureTest.platform.isFirefox || !globalThis.chrome), _2 = Number.isInteger(t2.canvasMaxAreaInBytes) ? t2.canvasMaxAreaInBytes : -1, T2 = "boolean" == typeof t2.disableFontFace ? t2.disableFontFace : i, S2 = true === t2.fontExtraProperties, C2 = true === t2.enableXfa, D2 = t2.ownerDocument || globalThis.document, P2 = true === t2.disableRange, M2 = true === t2.disableStream, k2 = true === t2.disableAutoFetch, I2 = true === t2.pdfBug, R2 = t2.CanvasFactory || (i ? NodeCanvasFactory : DOMCanvasFactory), B2 = t2.FilterFactory || (i ? NodeFilterFactory : DOMFilterFactory), O2 = t2.BinaryDataFactory || (i ? NodeBinaryDataFactory : DOMBinaryDataFactory), L2 = true === t2.enableHWA, N2 = true === t2.enableWebGPU, U2 = false !== t2.useWasm, H2 = t2.pagesMapper || new PagesMapper(), z2 = "boolean" == typeof t2.useSystemFonts ? t2.useSystemFonts : !i && !T2, j2 = "boolean" == typeof t2.useWorkerFetch ? t2.useWorkerFetch : !!(O2 === DOMBinaryDataFactory && g2 && m2 && b2 && y2 && isValidFetchUrl(g2, document.baseURI) && isValidFetchUrl(b2, document.baseURI) && isValidFetchUrl(y2, document.baseURI));
    setVerbosityLevel(u2);
    const G2 = { canvasFactory: new R2({ ownerDocument: D2, enableHWA: L2 }), filterFactory: new B2({ docId: n2, ownerDocument: D2 }), binaryDataFactory: j2 ? null : new O2({ cMapUrl: g2, standardFontDataUrl: b2, wasmUrl: y2 }) };
    if (!d2) {
      d2 = PDFWorker.create({ verbosity: u2, port: GlobalWorkerOptions.workerPort });
      e2._worker = d2;
    }
    const W2 = { docId: n2, apiVersion: "5.6.205", data: s2, password: l2, disableAutoFetch: k2, rangeChunkSize: c2, docBaseUrl: p2, enableXfa: C2, evaluatorOptions: { maxImageSize: w2, disableFontFace: T2, ignoreErrors: v2, isEvalSupported: A2, isOffscreenCanvasSupported: x2, isImageDecoderSupported: E2, canvasMaxAreaInBytes: _2, fontExtraProperties: S2, useSystemFonts: z2, useWasm: U2, useWorkerFetch: j2, cMapUrl: g2, cMapPacked: m2, iccUrl: f2, standardFontDataUrl: b2, wasmUrl: y2, enableWebGPU: N2 } }, V2 = { ownerDocument: D2, pdfBug: I2, styleElement: null, enableHWA: L2, loadingParams: { disableAutoFetch: k2, enableXfa: C2 } };
    d2.promise.then(function() {
      if (e2.destroyed) throw new Error("Loading aborted");
      if (d2.destroyed) throw new Error("Worker was destroyed");
      const t3 = d2.messageHandler.sendWithPromise("GetDocRequest", W2, s2 ? [s2.buffer] : null);
      let l3;
      if (s2) ;
      else if (h2) l3 = new PDFDataTransportStream({ pdfDataRangeTransport: h2, disableRange: P2, disableStream: M2 });
      else {
        if (!r2) throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
        {
          const t4 = (function getNetworkStream(t5) {
            return isValidFetchUrl(t5) ? PDFFetchStream : i ? PDFNodeStream : PDFNetworkStream;
          })(r2);
          l3 = new t4({ url: r2, httpHeaders: a2, withCredentials: o2, rangeChunkSize: c2, disableRange: P2, disableStream: M2 });
        }
      }
      return t3.then((t4) => {
        if (e2.destroyed) throw new Error("Loading aborted");
        if (d2.destroyed) throw new Error("Worker was destroyed");
        const i2 = new MessageHandler(n2, t4, d2.port), r3 = new WorkerTransport(i2, e2, l3, V2, G2, H2);
        e2._transport = r3;
        i2.send("Ready", null);
      });
    }).catch(e2._capability.reject);
    return e2;
  }
  var PDFDocumentLoadingTask = class _PDFDocumentLoadingTask {
    static #xn = 0;
    _capability = Promise.withResolvers();
    _transport = null;
    _worker = null;
    docId = "d" + _PDFDocumentLoadingTask.#xn++;
    destroyed = false;
    onPassword = null;
    onProgress = null;
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      this.destroyed = true;
      try {
        this._worker?.port && (this._worker._pendingDestroy = true);
        await this._transport?.destroy();
      } catch (t2) {
        this._worker?.port && delete this._worker._pendingDestroy;
        throw t2;
      }
      this._transport = null;
      this._worker?.destroy();
      this._worker = null;
    }
    async getData() {
      return this._transport.getData();
    }
  };
  var PDFDataRangeTransport = class {
    #Er = Promise.withResolvers();
    #Zr = [];
    #ts = [];
    #es = [];
    constructor(t2, e2, i2 = false, n2 = null) {
      this.length = t2;
      this.initialData = e2;
      this.progressiveDone = i2;
      this.contentDispositionFilename = n2;
      Object.defineProperty(this, "onDataProgress", { value: () => {
        !(function deprecated(t3) {
          console.log("Deprecated API usage: " + t3);
        })("`PDFDataRangeTransport.prototype.onDataProgress` - method was removed, since loading progress is now reported automatically through the `PDFDataTransportStream` class (and related code).");
      } });
    }
    addRangeListener(t2) {
      this.#es.push(t2);
    }
    addProgressiveReadListener(t2) {
      this.#ts.push(t2);
    }
    addProgressiveDoneListener(t2) {
      this.#Zr.push(t2);
    }
    onDataRange(t2, e2) {
      for (const i2 of this.#es) i2(t2, e2);
    }
    onDataProgressiveRead(t2) {
      this.#Er.promise.then(() => {
        for (const e2 of this.#ts) e2(t2);
      });
    }
    onDataProgressiveDone() {
      this.#Er.promise.then(() => {
        for (const t2 of this.#Zr) t2();
      });
    }
    transportReady() {
      this.#Er.resolve();
    }
    requestDataRange(t2, e2) {
      unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  };
  var PDFDocumentProxy = class {
    constructor(t2, e2) {
      this._pdfInfo = t2;
      this._transport = e2;
    }
    get pagesMapper() {
      return this._transport.pagesMapper;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t2) {
      return this._transport.getPage(t2);
    }
    getPageIndex(t2) {
      return this._transport.getPageIndex(t2);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t2) {
      return this._transport.getDestination(t2);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getAnnotationsByType(t2, e2) {
      return this._transport.getAnnotationsByType(t2, e2);
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t2 = "display" } = {}) {
      const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
      return this._transport.getOptionalContentConfig(e2);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    extractPages(t2) {
      return this._transport.extractPages(t2);
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    getRawData(t2) {
      return this._transport.getRawData(t2);
    }
    cleanup(t2 = false) {
      return this._transport.startCleanup(t2 || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(t2) {
      return this._transport.cachedPageNumber(t2);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  };
  var PDFPageProxy = class _PDFPageProxy {
    #is = false;
    #ns = null;
    constructor(t2, e2, i2, n2, r2 = false) {
      this._pageIndex = t2;
      this._pageInfo = e2;
      this._transport = i2;
      this._stats = r2 ? new StatTimer() : null;
      this._pdfBug = r2;
      this.commonObjs = i2.commonObjs;
      this.objs = new PDFObjects();
      this._intentStates = /* @__PURE__ */ new Map();
      this.destroyed = false;
      this.recordedBBoxes = null;
      this.#ns = n2;
      this.imageCoordinates = null;
    }
    clone(t2) {
      const e2 = new _PDFPageProxy(t2, this._pageInfo, this._transport, this.#ns, this._pdfBug);
      e2.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex;
      this._transport.updatePage(e2);
      return e2;
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    set pageNumber(t2) {
      this._pageIndex = t2 - 1;
      this._transport.updatePage(this);
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t2, rotation: e2 = this.rotate, offsetX: i2 = 0, offsetY: n2 = 0, dontFlip: r2 = false } = {}) {
      return new PageViewport({ viewBox: this.view, userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: n2, dontFlip: r2 });
    }
    getAnnotations({ intent: t2 = "display" } = {}) {
      const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
      return this._transport.getAnnotations(this._pageIndex, e2);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({ canvasContext: t2, canvas: e2 = t2.canvas, viewport: i2, intent: n2 = "display", annotationMode: r2 = p.ENABLE, transform: s2 = null, background: a2 = null, optionalContentConfigPromise: l2 = null, annotationCanvasMap: h2 = null, pageColors: c2 = null, printAnnotationStorage: d2 = null, isEditing: u2 = false, recordImages: g2 = false, recordOperations: m2 = false, operationsFilter: f2 = null }) {
      this._stats?.time("Overall");
      const b2 = this._transport.getRenderingIntent(n2, r2, d2, u2), { renderingIntent: y2, cacheKey: v2 } = b2;
      this.#is = false;
      l2 ||= this._transport.getOptionalContentConfig(y2);
      const w2 = this._intentStates.getOrInsertComputed(v2, makeObj);
      if (w2.streamReaderCancelTimeout) {
        clearTimeout(w2.streamReaderCancelTimeout);
        w2.streamReaderCancelTimeout = null;
      }
      const A2 = !!(y2 & o);
      if (!w2.displayReadyCapability) {
        w2.displayReadyCapability = Promise.withResolvers();
        w2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
        this._stats?.time("Page Request");
        this._pumpOperatorList(b2);
      }
      const x2 = !(!this._pdfBug || !globalThis.StepperManager?.enabled), E2 = !!e2 && !this.recordedBBoxes && (m2 || x2), _2 = !!e2 && !this.imageCoordinates && g2, complete = (t3) => {
        w2.renderTasks.delete(C2);
        if (E2) {
          const t4 = C2.gfx?.dependencyTracker.take();
          if (t4) {
            C2.stepper?.setOperatorBBoxes(t4, C2.gfx.dependencyTracker.takeDebugMetadata());
            m2 && (this.recordedBBoxes = t4);
          }
        }
        _2 && !t3 && (this.imageCoordinates = C2.gfx?.imagesTracker.take());
        A2 && (this.#is = true);
        this.#rs();
        if (t3) {
          C2.capability.reject(t3);
          this._abortOperatorList({ intentState: w2, reason: t3 instanceof Error ? t3 : new Error(t3) });
        } else C2.capability.resolve();
        if (this._stats) {
          this._stats.timeEnd("Rendering");
          this._stats.timeEnd("Overall");
          globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats);
        }
      };
      let T2 = null, S2 = null;
      (E2 || _2) && (S2 = new CanvasBBoxTracker(e2, w2.operatorList.length));
      E2 && (T2 = new CanvasDependencyTracker(S2, x2));
      const C2 = new InternalRenderTask({ callback: complete, params: { canvas: e2, canvasContext: t2, dependencyTracker: T2 ?? S2, imagesTracker: _2 ? new CanvasImagesTracker(e2) : null, viewport: i2, transform: s2, background: a2 }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h2, operatorList: w2.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !A2, pdfBug: this._pdfBug, pageColors: c2, enableHWA: this._transport.enableHWA, operationsFilter: f2 });
      (w2.renderTasks ||= /* @__PURE__ */ new Set()).add(C2);
      const D2 = C2.task;
      Promise.all([w2.displayReadyCapability.promise, l2]).then(([t3, e3]) => {
        if (this.destroyed) complete();
        else {
          this._stats?.time("Rendering");
          if (!(e3.renderingIntent & y2)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
          C2.initializeGraphics({ transparency: t3, optionalContentConfig: e3 });
          C2.operatorListChanged();
        }
      }).catch(complete);
      return D2;
    }
    getOperatorList({ intent: t2 = "display", annotationMode: e2 = p.ENABLE, printAnnotationStorage: i2 = null, isEditing: n2 = false } = {}) {
      const r2 = this._transport.getRenderingIntent(t2, e2, i2, n2, true), s2 = this._intentStates.getOrInsertComputed(r2.cacheKey, makeObj);
      let a2;
      if (!s2.opListReadCapability) {
        a2 = /* @__PURE__ */ Object.create(null);
        a2.operatorListChanged = function operatorListChanged() {
          if (s2.operatorList.lastChunk) {
            s2.opListReadCapability.resolve(s2.operatorList);
            s2.renderTasks.delete(a2);
          }
        };
        s2.opListReadCapability = Promise.withResolvers();
        (s2.renderTasks ||= /* @__PURE__ */ new Set()).add(a2);
        s2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
        this._stats?.time("Page Request");
        this._pumpOperatorList(r2);
      }
      return s2.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t2 = false, disableNormalization: e2 = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", { pageId: this.#ns.getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, includeMarkedContent: true === t2, disableNormalization: true === e2 }, { highWaterMark: 100, size: (t3) => t3.items.length });
    }
    async getTextContent(t2 = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((t3) => XfaText.textContent(t3));
      const e2 = this.streamTextContent(t2), i2 = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
      for await (const t3 of e2) {
        i2.lang ??= t3.lang;
        Object.assign(i2.styles, t3.styles);
        i2.items.push(...t3.items);
      }
      return i2;
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t2 = [];
      for (const e2 of this._intentStates.values()) {
        this._abortOperatorList({ intentState: e2, reason: new Error("Page was destroyed."), force: true });
        if (!e2.opListReadCapability) for (const i2 of e2.renderTasks) {
          t2.push(i2.completed);
          i2.cancel();
        }
      }
      this.objs.clear();
      this.#is = false;
      return Promise.all(t2);
    }
    cleanup(t2 = false) {
      this.#is = true;
      const e2 = this.#rs();
      t2 && e2 && (this._stats &&= new StatTimer());
      return e2;
    }
    #rs() {
      if (!this.#is || this.destroyed) return false;
      for (const { renderTasks: t2, operatorList: e2 } of this._intentStates.values()) if (t2.size > 0 || !e2.lastChunk) return false;
      this._intentStates.clear();
      this.objs.clear();
      this.#is = false;
      return true;
    }
    _startRenderPage(t2, e2) {
      const i2 = this._intentStates.get(e2);
      if (i2) {
        this._stats?.timeEnd("Page Request");
        i2.displayReadyCapability?.resolve(t2);
      }
    }
    _renderPageChunk(t2, e2) {
      for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
        e2.operatorList.fnArray.push(t2.fnArray[i2]);
        e2.operatorList.argsArray.push(t2.argsArray[i2]);
      }
      e2.operatorList.lastChunk = t2.lastChunk;
      e2.operatorList.separateAnnots = t2.separateAnnots;
      for (const t3 of e2.renderTasks) t3.operatorListChanged();
      t2.lastChunk && this.#rs();
    }
    _pumpOperatorList({ renderingIntent: t2, cacheKey: e2, annotationStorageSerializable: i2, modifiedIds: n2 }) {
      const { map: r2, transfer: s2 } = i2, a2 = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageId: this.#ns.getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, intent: t2, cacheKey: e2, annotationStorage: r2, modifiedIds: n2 }, void 0, s2).getReader(), o2 = this._intentStates.get(e2);
      o2.streamReader = a2;
      const pump = () => {
        a2.read().then(({ value: t3, done: e3 }) => {
          if (e3) o2.streamReader = null;
          else if (!this._transport.destroyed) {
            this._renderPageChunk(t3, o2);
            pump();
          }
        }, (t3) => {
          o2.streamReader = null;
          if (!this._transport.destroyed) {
            if (o2.operatorList) {
              o2.operatorList.lastChunk = true;
              for (const t4 of o2.renderTasks) t4.operatorListChanged();
              this.#rs();
            }
            if (o2.displayReadyCapability) o2.displayReadyCapability.reject(t3);
            else {
              if (!o2.opListReadCapability) throw t3;
              o2.opListReadCapability.reject(t3);
            }
          }
        });
      };
      pump();
    }
    _abortOperatorList({ intentState: t2, reason: e2, force: i2 = false }) {
      if (t2.streamReader) {
        if (t2.streamReaderCancelTimeout) {
          clearTimeout(t2.streamReaderCancelTimeout);
          t2.streamReaderCancelTimeout = null;
        }
        if (!i2) {
          if (t2.renderTasks.size > 0) return;
          if (e2 instanceof RenderingCancelledException) {
            let i3 = 100;
            e2.extraDelay > 0 && e2.extraDelay < 1e3 && (i3 += e2.extraDelay);
            t2.streamReaderCancelTimeout = setTimeout(() => {
              t2.streamReaderCancelTimeout = null;
              this._abortOperatorList({ intentState: t2, reason: e2, force: true });
            }, i3);
            return;
          }
        }
        t2.streamReader.cancel(new AbortException(e2.message)).catch(() => {
        });
        t2.streamReader = null;
        if (!this._transport.destroyed) {
          for (const [e3, i3] of this._intentStates) if (i3 === t2) {
            this._intentStates.delete(e3);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  };
  var PDFWorker = class _PDFWorker {
    #Er = Promise.withResolvers();
    #ss = null;
    #er = null;
    #as = null;
    static #os = 0;
    static #ls = false;
    static #hs = /* @__PURE__ */ new WeakMap();
    static {
      if (i) {
        this.#ls = true;
        GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
      }
      this._isSameOrigin = (t2, e2) => {
        const i2 = URL.parse(t2);
        if (!i2?.origin || "null" === i2.origin) return false;
        const n2 = new URL(e2, i2);
        return i2.origin === n2.origin;
      };
      this._createCDNWrapper = (t2) => {
        const e2 = `await import("${t2}");`;
        return URL.createObjectURL(new Blob([e2], { type: "text/javascript" }));
      };
    }
    constructor({ name: t2 = null, port: e2 = null, verbosity: i2 = getVerbosityLevel() } = {}) {
      this.name = t2;
      this.destroyed = false;
      this.verbosity = i2;
      if (e2) {
        if (_PDFWorker.#hs.has(e2)) throw new Error("Cannot use more than one PDFWorker per port.");
        _PDFWorker.#hs.set(e2, this);
        this.#cs(e2);
      } else this.#ds();
    }
    get promise() {
      return this.#Er.promise;
    }
    #us() {
      this.#Er.resolve();
      this.#ss.send("configure", { verbosity: this.verbosity });
    }
    get port() {
      return this.#er;
    }
    get messageHandler() {
      return this.#ss;
    }
    #cs(t2) {
      this.#er = t2;
      this.#ss = new MessageHandler("main", "worker", t2);
      this.#ss.on("ready", () => {
      });
      this.#us();
    }
    #ds() {
      if (_PDFWorker.#ls || _PDFWorker.#ps) {
        this.#gs();
        return;
      }
      let { workerSrc: t2 } = _PDFWorker;
      try {
        _PDFWorker._isSameOrigin(window.location, t2) || (t2 = _PDFWorker._createCDNWrapper(new URL(t2, window.location).href));
        const e2 = new Worker(t2, { type: "module" }), i2 = new MessageHandler("main", "worker", e2), terminateEarly = () => {
          n2.abort();
          i2.destroy();
          e2.terminate();
          this.destroyed ? this.#Er.reject(new Error("Worker was destroyed")) : this.#gs();
        }, n2 = new AbortController();
        e2.addEventListener("error", () => {
          this.#as || terminateEarly();
        }, { signal: n2.signal });
        i2.on("test", (t3) => {
          n2.abort();
          if (!this.destroyed && t3) {
            this.#ss = i2;
            this.#er = e2;
            this.#as = e2;
            this.#us();
          } else terminateEarly();
        });
        i2.on("ready", (t3) => {
          n2.abort();
          if (this.destroyed) terminateEarly();
          else try {
            sendTest();
          } catch {
            this.#gs();
          }
        });
        const sendTest = () => {
          const t3 = new Uint8Array();
          i2.send("test", t3, [t3.buffer]);
        };
        sendTest();
        return;
      } catch {
        info("The worker has been disabled.");
      }
      this.#gs();
    }
    #gs() {
      if (!_PDFWorker.#ls) {
        warn("Setting up fake worker.");
        _PDFWorker.#ls = true;
      }
      _PDFWorker._setupFakeWorkerGlobal.then((t2) => {
        if (this.destroyed) {
          this.#Er.reject(new Error("Worker was destroyed"));
          return;
        }
        const e2 = new LoopbackPort();
        this.#er = e2;
        const i2 = "fake" + _PDFWorker.#os++, n2 = new MessageHandler(i2 + "_worker", i2, e2);
        t2.setup(n2, e2);
        this.#ss = new MessageHandler(i2, i2 + "_worker", e2);
        this.#us();
      }).catch((t2) => {
        this.#Er.reject(new Error(`Setting up fake worker failed: "${t2.message}".`));
      });
    }
    destroy() {
      this.destroyed = true;
      this.#as?.terminate();
      this.#as = null;
      _PDFWorker.#hs.delete(this.#er);
      this.#er = null;
      this.#ss?.destroy();
      this.#ss = null;
    }
    static create(t2) {
      const e2 = this.#hs.get(t2?.port);
      if (e2) {
        if (e2._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e2;
      }
      return new _PDFWorker(t2);
    }
    static get workerSrc() {
      if (GlobalWorkerOptions.workerSrc) return GlobalWorkerOptions.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get #ps() {
      try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
      } catch {
        return null;
      }
    }
    static get _setupFakeWorkerGlobal() {
      return shadow(this, "_setupFakeWorkerGlobal", (async () => {
        if (this.#ps) return this.#ps;
        return (await import(
          /*webpackIgnore: true*/
          /*@vite-ignore*/
          this.workerSrc
        )).WorkerMessageHandler;
      })());
    }
  };
  var WorkerTransport = class {
    downloadInfoCapability = Promise.withResolvers();
    #ms = null;
    #fs = /* @__PURE__ */ new Map();
    #bs = null;
    #ys = /* @__PURE__ */ new Map();
    #vs = /* @__PURE__ */ new Map();
    #ws = /* @__PURE__ */ new Map();
    #As = null;
    constructor(t2, e2, i2, n2, r2, s2) {
      this.messageHandler = t2;
      this.loadingTask = e2;
      this.#bs = i2;
      this.commonObjs = new PDFObjects();
      this.fontLoader = new FontLoader({ ownerDocument: n2.ownerDocument, styleElement: n2.styleElement });
      this.enableHWA = n2.enableHWA;
      this.loadingParams = n2.loadingParams;
      this._params = n2;
      this.canvasFactory = r2.canvasFactory;
      this.filterFactory = r2.filterFactory;
      this.binaryDataFactory = r2.binaryDataFactory;
      this.pagesMapper = s2;
      this.destroyed = false;
      this.destroyCapability = null;
      this.setupMessageHandler();
    }
    updatePage(t2) {
      const { _pageIndex: e2 } = t2;
      this.#ys.set(e2, t2);
      this.#vs.set(e2, Promise.resolve(t2));
    }
    #xs(t2, e2 = null) {
      return this.#fs.getOrInsertComputed(t2, () => this.messageHandler.sendWithPromise(t2, e2));
    }
    #Jn({ loaded: t2, total: e2 }) {
      this.loadingTask.onProgress?.({ loaded: t2, total: e2, percent: e2 ? MathClamp(Math.round(t2 / e2 * 100), 0, 100) : NaN });
    }
    get annotationStorage() {
      return shadow(this, "annotationStorage", new AnnotationStorage());
    }
    getRenderingIntent(t2, e2 = p.ENABLE, i2 = null, n2 = false, r2 = false) {
      let g2 = a, m2 = tt;
      switch (t2) {
        case "any":
          g2 = s;
          break;
        case "display":
          break;
        case "print":
          g2 = o;
          break;
        default:
          warn(`getRenderingIntent - invalid intent: ${t2}`);
      }
      const f2 = g2 & o && i2 instanceof PrintAnnotationStorage ? i2 : this.annotationStorage;
      switch (e2) {
        case p.DISABLE:
          g2 += c;
          break;
        case p.ENABLE:
          break;
        case p.ENABLE_FORMS:
          g2 += l;
          break;
        case p.ENABLE_STORAGE:
          g2 += h;
          m2 = f2.serializable;
          break;
        default:
          warn(`getRenderingIntent - invalid annotationMode: ${e2}`);
      }
      n2 && (g2 += d);
      r2 && (g2 += u);
      const { ids: b2, hash: y2 } = f2.modifiedIds;
      return { renderingIntent: g2, cacheKey: [g2, m2.hash, y2].join("_"), annotationStorageSerializable: m2, modifiedIds: b2 };
    }
    destroy() {
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true;
      this.destroyCapability = Promise.withResolvers();
      this.#As?.reject(new Error("Worker was destroyed during onPassword callback"));
      const t2 = [];
      for (const e3 of this.#ys.values()) t2.push(e3._destroy());
      this.#ys.clear();
      this.#vs.clear();
      this.#ws.clear();
      this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
      const e2 = this.messageHandler.sendWithPromise("Terminate", null);
      t2.push(e2);
      Promise.all(t2).then(() => {
        this.commonObjs.clear();
        this.fontLoader.clear();
        this.#fs.clear();
        this.filterFactory.destroy();
        TextLayer.cleanup();
        this.#bs?.cancelAllRequests(new AbortException("Worker was terminated."));
        this.messageHandler?.destroy();
        this.messageHandler = null;
        this.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t2, loadingTask: e2 } = this;
      t2.on("GetReader", (t3, e3) => {
        assert(this.#bs, "GetReader - no `BasePDFStream` instance available.");
        this.#ms = this.#bs.getFullReader();
        this.#ms.onProgress = (t4) => this.#Jn(t4);
        e3.onPull = () => {
          this.#ms.read().then(function({ value: t4, done: i2 }) {
            if (i2) e3.close();
            else {
              assert(t4 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
              e3.enqueue(new Uint8Array(t4), 1, [t4]);
            }
          }).catch((t4) => {
            e3.error(t4);
          });
        };
        e3.onCancel = (t4) => {
          this.#ms.cancel(t4);
          e3.ready.catch((t5) => {
            if (!this.destroyed) throw t5;
          });
        };
      });
      t2.on("ReaderHeadersReady", async (t3) => {
        await this.#ms.headersReady;
        const { isStreamingSupported: e3, isRangeSupported: i2, contentLength: n2 } = this.#ms;
        e3 && i2 && (this.#ms.onProgress = null);
        return { isStreamingSupported: e3, isRangeSupported: i2, contentLength: n2 };
      });
      t2.on("GetRangeReader", (t3, e3) => {
        assert(this.#bs, "GetRangeReader - no `BasePDFStream` instance available.");
        const i2 = this.#bs.getRangeReader(t3.begin, t3.end);
        if (i2) {
          e3.onPull = () => {
            i2.read().then(function({ value: t4, done: i3 }) {
              if (i3) e3.close();
              else {
                assert(t4 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                e3.enqueue(new Uint8Array(t4), 1, [t4]);
              }
            }).catch((t4) => {
              e3.error(t4);
            });
          };
          e3.onCancel = (t4) => {
            i2.cancel(t4);
            e3.ready.catch((t5) => {
              if (!this.destroyed) throw t5;
            });
          };
        } else e3.close();
      });
      t2.on("GetDoc", ({ pdfInfo: t3 }) => {
        this.pagesMapper.pagesNumber = t3.numPages;
        this._numPages = t3.numPages;
        this._htmlForXfa = t3.htmlForXfa;
        delete t3.htmlForXfa;
        e2._capability.resolve(new PDFDocumentProxy(t3, this));
      });
      t2.on("DocException", (t3) => {
        e2._capability.reject(wrapReason(t3));
      });
      t2.on("PasswordRequest", (t3) => {
        this.#As = Promise.withResolvers();
        try {
          if (!e2.onPassword) throw wrapReason(t3);
          const updatePassword = (t4) => {
            t4 instanceof Error ? this.#As.reject(t4) : this.#As.resolve({ password: t4 });
          };
          e2.onPassword(updatePassword, t3.code);
        } catch (t4) {
          this.#As.reject(t4);
        }
        return this.#As.promise;
      });
      t2.on("DataLoaded", (t3) => {
        this.#Jn({ loaded: t3.length, total: t3.length });
        this.downloadInfoCapability.resolve(t3);
      });
      t2.on("StartRenderPage", (t3) => {
        if (this.destroyed) return;
        this.#ys.get(t3.pageIndex)._startRenderPage(t3.transparency, t3.cacheKey);
      });
      t2.on("commonobj", ([e3, i2, n2]) => {
        if (this.destroyed) return null;
        if (this.commonObjs.has(e3)) return null;
        switch (i2) {
          case "Font":
            if ("error" in n2) {
              const t3 = n2.error;
              warn(`Error during font loading: ${t3}`);
              this.commonObjs.resolve(e3, t3);
              break;
            }
            const r2 = new FontInfo(n2), s2 = this._params.pdfBug && globalThis.FontInspector?.enabled ? (t3, e4) => globalThis.FontInspector.fontAdded(t3, e4) : null, a2 = new FontFaceObject(r2, s2, n2.charProcOperatorList, n2.extra);
            this.fontLoader.bind(a2).catch(() => t2.sendWithPromise("FontFallback", { id: e3 })).finally(() => {
              a2.fontExtraProperties || a2.clearData();
              this.commonObjs.resolve(e3, a2);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: o2 } = n2;
            assert(o2, "The imageRef must be defined.");
            for (const t3 of this.#ys.values()) for (const [, i3] of t3.objs) if (i3?.ref === o2) {
              if (!i3.dataLen) return null;
              this.commonObjs.resolve(e3, structuredClone(i3));
              return i3.dataLen;
            }
            break;
          case "FontPath":
            this.commonObjs.resolve(e3, new FontPathInfo(n2));
            break;
          case "Image":
            this.commonObjs.resolve(e3, n2);
            break;
          case "Pattern":
            const l2 = new PatternInfo(n2);
            this.commonObjs.resolve(e3, l2.getIR());
            break;
          default:
            throw new Error(`Got unknown common object type ${i2}`);
        }
        return null;
      });
      t2.on("obj", ([t3, e3, i2, n2]) => {
        if (this.destroyed) return;
        const r2 = this.#ys.get(e3);
        if (!r2.objs.has(t3)) if (0 !== r2._intentStates.size) switch (i2) {
          case "Image":
          case "Pattern":
            r2.objs.resolve(t3, n2);
            break;
          default:
            throw new Error(`Got unknown object type ${i2}`);
        }
        else n2?.bitmap?.close();
      });
      t2.on("DocProgress", (t3) => {
        this.destroyed || this.#Jn(t3);
      });
      t2.on("PrepareWebGPU", () => {
        this.destroyed || (function initWebGPUMesh() {
          _t.init();
        })();
      });
      t2.on("FetchBinaryData", async (t3) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.binaryDataFactory) throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
        return this.binaryDataFactory.fetch(t3);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      this.annotationStorage.size <= 0 && warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t2, transfer: e2 } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t2, filename: this.#ms?.filename ?? null }, e2).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    extractPages(t2) {
      const e2 = { pageInfos: t2 };
      let i2;
      if (this.annotationStorage.size > 0) {
        const { map: t3, transfer: n2 } = this.annotationStorage.serializable;
        e2.annotationStorage = t3;
        i2 = n2;
      }
      return this.messageHandler.sendWithPromise("ExtractPages", e2, i2).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t2) {
      if (!Number.isInteger(t2) || t2 <= 0 || t2 > this.pagesMapper.pagesNumber) return Promise.reject(new Error("Invalid page request."));
      const e2 = t2 - 1, i2 = this.pagesMapper.getPageId(t2) - 1, n2 = this.#vs.get(e2);
      if (n2) return n2;
      const r2 = this.messageHandler.sendWithPromise("GetPage", { pageIndex: i2 }).then((t3) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        t3.refStr && this.#ws.set(t3.refStr, i2);
        const n3 = new PDFPageProxy(e2, t3, this, this.pagesMapper, this._params.pdfBug);
        this.#ys.set(e2, n3);
        return n3;
      });
      this.#vs.set(e2, r2);
      return r2;
    }
    async getPageIndex(t2) {
      if (!isRefProxy(t2)) throw new Error("Invalid pageIndex request.");
      const e2 = await this.messageHandler.sendWithPromise("GetPageIndex", { num: t2.num, gen: t2.gen }), i2 = this.pagesMapper.getPageNumber(e2 + 1);
      if (0 === i2) throw new Error("GetPageIndex: page has been removed.");
      return i2 - 1;
    }
    getAnnotations(t2, e2) {
      return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1, intent: e2 });
    }
    getFieldObjects() {
      return this.#xs("GetFieldObjects");
    }
    hasJSActions() {
      return this.#xs("HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t2) {
      return "string" != typeof t2 ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t2 });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getAnnotationsByType(t2, e2) {
      return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t2, pageIndexesToSkip: e2 });
    }
    getDocJSActions() {
      return this.#xs("GetDocJSActions");
    }
    getPageJSActions(t2) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1 });
    }
    getStructTree(t2) {
      return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1 });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t2) {
      return this.#xs("GetOptionalContentConfig").then((e2) => new OptionalContentConfig(e2, t2));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t2 = "GetMetadata";
      return this.#fs.getOrInsertComputed(t2, () => this.messageHandler.sendWithPromise(t2, null).then((t3) => ({ info: t3[0], metadata: t3[1] ? new Metadata(t3[1]) : null, contentDispositionFilename: this.#ms?.filename ?? null, contentLength: this.#ms?.contentLength ?? null, hasStructTree: t3[2] })));
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    getRawData(t2) {
      return this.messageHandler.sendWithPromise("GetRawData", t2);
    }
    async startCleanup(t2 = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const t3 of this.#ys.values()) {
          if (!t3.cleanup()) throw new Error(`startCleanup: Page ${t3.pageNumber} is currently rendering.`);
        }
        this.commonObjs.clear();
        t2 || this.fontLoader.clear();
        this.#fs.clear();
        this.filterFactory.destroy(true);
        TextLayer.cleanup();
      }
    }
    cachedPageNumber(t2) {
      if (!isRefProxy(t2)) return null;
      const e2 = 0 === t2.gen ? `${t2.num}R` : `${t2.num}R${t2.gen}`, i2 = this.#ws.get(e2);
      if (i2 >= 0) {
        const t3 = this.pagesMapper.getPageNumber(i2 + 1);
        if (0 !== t3) return t3;
      }
      return null;
    }
  };
  var RenderTask = class {
    _internalRenderTask = null;
    onContinue = null;
    onError = null;
    constructor(t2) {
      this._internalRenderTask = t2;
    }
    get promise() {
      return this._internalRenderTask.capability.promise;
    }
    cancel(t2 = 0) {
      this._internalRenderTask.cancel(null, t2);
    }
    get separateAnnots() {
      const { separateAnnots: t2 } = this._internalRenderTask.operatorList;
      if (!t2) return false;
      const { annotationCanvasMap: e2 } = this._internalRenderTask;
      return t2.form || t2.canvas && e2?.size > 0;
    }
    get imageCoordinates() {
      return this._internalRenderTask.imageCoordinates || null;
    }
  };
  var InternalRenderTask = class _InternalRenderTask {
    #Es = null;
    static #_s = /* @__PURE__ */ new WeakSet();
    constructor({ callback: t2, params: e2, objs: i2, commonObjs: n2, annotationCanvasMap: r2, operatorList: s2, pageIndex: a2, canvasFactory: o2, filterFactory: l2, useRequestAnimationFrame: h2 = false, pdfBug: c2 = false, pageColors: d2 = null, enableHWA: u2 = false, operationsFilter: p2 = null }) {
      this.callback = t2;
      this.params = e2;
      this.objs = i2;
      this.commonObjs = n2;
      this.annotationCanvasMap = r2;
      this.operatorListIdx = null;
      this.operatorList = s2;
      this._pageIndex = a2;
      this.canvasFactory = o2;
      this.filterFactory = l2;
      this._pdfBug = c2;
      this.pageColors = d2;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = true === h2 && "undefined" != typeof window;
      this.cancelled = false;
      this.capability = Promise.withResolvers();
      this.task = new RenderTask(this);
      this._cancelBound = this.cancel.bind(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = e2.canvas;
      this._canvasContext = e2.canvas ? null : e2.canvasContext;
      this._enableHWA = u2;
      this._dependencyTracker = e2.dependencyTracker;
      this._imagesTracker = e2.imagesTracker;
      this._operationsFilter = p2;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t2 = false, optionalContentConfig: e2 }) {
      if (this.cancelled) return;
      if (this._canvas) {
        if (_InternalRenderTask.#_s.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        _InternalRenderTask.#_s.add(this._canvas);
      }
      if (this._pdfBug && globalThis.StepperManager?.enabled) {
        this.stepper = globalThis.StepperManager.create(this._pageIndex);
        this.stepper.init(this.operatorList);
        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }
      const { viewport: i2, transform: n2, background: r2, dependencyTracker: s2, imagesTracker: a2 } = this.params, o2 = this._canvasContext || this._canvas.getContext("2d", { alpha: false, willReadFrequently: !this._enableHWA });
      this.gfx = new CanvasGraphics(o2, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e2 }, this.annotationCanvasMap, this.pageColors, s2, a2);
      this.gfx.beginDrawing({ transform: n2, viewport: i2, transparency: t2, background: r2 });
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      this.graphicsReadyCallback?.();
    }
    cancel(t2 = null, e2 = 0) {
      this.running = false;
      this.cancelled = true;
      this.gfx?.endDrawing();
      if (this.#Es) {
        window.cancelAnimationFrame(this.#Es);
        this.#Es = null;
      }
      _InternalRenderTask.#_s.delete(this._canvas);
      t2 ||= new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e2);
      this.callback(t2);
      this.task.onError?.(t2);
    }
    operatorListChanged() {
      if (this.graphicsReady) {
        this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length);
        this.stepper?.updateOperatorList(this.operatorList);
        this.running || this._continue();
      } else this.graphicsReadyCallback ||= this._continueBound;
    }
    _continue() {
      this.running = true;
      this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? this.#Es = window.requestAnimationFrame(() => {
        this.#Es = null;
        this._nextBound().catch(this._cancelBound);
      }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      if (!this.cancelled) {
        this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
        if (this.operatorListIdx === this.operatorList.argsArray.length) {
          this.running = false;
          if (this.operatorList.lastChunk) {
            this.gfx.endDrawing();
            _InternalRenderTask.#_s.delete(this._canvas);
            this.callback();
          }
        }
      }
    }
  };
  var Ht = "5.6.205";
  var zt = "ada343803";
  var ColorPicker = class _ColorPicker {
    #Ts = null;
    #Ss = null;
    #Cs;
    #Ds = null;
    #Ps = false;
    #Ms = false;
    #a = null;
    #ks;
    #Is = null;
    #y = null;
    static #Fs = null;
    static get _keyboardManager() {
      return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], _ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], _ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], _ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], _ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], _ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], _ColorPicker.prototype._moveToEnd]]));
    }
    constructor({ editor: t2 = null, uiManager: e2 = null }) {
      if (t2) {
        this.#Ms = false;
        this.#a = t2;
      } else this.#Ms = true;
      this.#y = t2?._uiManager || e2;
      this.#ks = this.#y._eventBus;
      this.#Cs = t2?.color?.toUpperCase() || this.#y?.highlightColors.values().next().value || "#FFFF98";
      _ColorPicker.#Fs ||= Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" });
    }
    renderButton() {
      const t2 = this.#Ts = document.createElement("button");
      t2.className = "colorPicker";
      t2.tabIndex = "0";
      t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
      t2.ariaHasPopup = "true";
      this.#a && (t2.ariaControls = `${this.#a.id}_colorpicker_dropdown`);
      const e2 = this.#y._signal;
      t2.addEventListener("click", this.#Rs.bind(this), { signal: e2 });
      t2.addEventListener("keydown", this.#Bs.bind(this), { signal: e2 });
      const i2 = this.#Ss = document.createElement("span");
      i2.className = "swatch";
      i2.ariaHidden = "true";
      i2.style.backgroundColor = this.#Cs;
      t2.append(i2);
      return t2;
    }
    renderMainDropdown() {
      const t2 = this.#Ds = this.#Os();
      t2.ariaOrientation = "horizontal";
      t2.ariaLabelledBy = "highlightColorPickerLabel";
      return t2;
    }
    #Os() {
      const t2 = document.createElement("div"), e2 = this.#y._signal;
      t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      t2.className = "dropdown";
      t2.role = "listbox";
      t2.ariaMultiSelectable = "false";
      t2.ariaOrientation = "vertical";
      t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
      this.#a && (t2.id = `${this.#a.id}_colorpicker_dropdown`);
      for (const [i2, n2] of this.#y.highlightColors) {
        const r2 = document.createElement("button");
        r2.tabIndex = "0";
        r2.role = "option";
        r2.setAttribute("data-color", n2);
        r2.title = i2;
        r2.setAttribute("data-l10n-id", _ColorPicker.#Fs[i2]);
        const s2 = document.createElement("span");
        r2.append(s2);
        s2.className = "swatch";
        s2.style.backgroundColor = n2;
        r2.ariaSelected = n2 === this.#Cs;
        r2.addEventListener("click", this.#Ls.bind(this, n2), { signal: e2 });
        t2.append(r2);
      }
      t2.addEventListener("keydown", this.#Bs.bind(this), { signal: e2 });
      return t2;
    }
    #Ls(t2, e2) {
      e2.stopPropagation();
      this.#ks.dispatch("switchannotationeditorparams", { source: this, type: f.HIGHLIGHT_COLOR, value: t2 });
      this.updateColor(t2);
    }
    _colorSelectFromKeyboard(t2) {
      if (t2.target === this.#Ts) {
        this.#Rs(t2);
        return;
      }
      const e2 = t2.target.getAttribute("data-color");
      e2 && this.#Ls(e2, t2);
    }
    _moveToNext(t2) {
      this.#Ns ? t2.target !== this.#Ts ? t2.target.nextSibling?.focus() : this.#Ds.firstElementChild?.focus() : this.#Rs(t2);
    }
    _moveToPrevious(t2) {
      if (t2.target !== this.#Ds?.firstElementChild && t2.target !== this.#Ts) {
        this.#Ns || this.#Rs(t2);
        t2.target.previousSibling?.focus();
      } else this.#Ns && this._hideDropdownFromKeyboard();
    }
    _moveToBeginning(t2) {
      this.#Ns ? this.#Ds.firstElementChild?.focus() : this.#Rs(t2);
    }
    _moveToEnd(t2) {
      this.#Ns ? this.#Ds.lastElementChild?.focus() : this.#Rs(t2);
    }
    #Bs(t2) {
      _ColorPicker._keyboardManager.exec(this, t2);
    }
    #Rs(t2) {
      if (this.#Ns) {
        this.hideDropdown();
        return;
      }
      this.#Ps = 0 === t2.detail;
      if (!this.#Is) {
        this.#Is = new AbortController();
        window.addEventListener("pointerdown", this.#p.bind(this), { signal: this.#y.combinedSignal(this.#Is) });
      }
      this.#Ts.ariaExpanded = "true";
      if (this.#Ds) {
        this.#Ds.classList.remove("hidden");
        return;
      }
      const e2 = this.#Ds = this.#Os();
      this.#Ts.append(e2);
    }
    #p(t2) {
      this.#Ds?.contains(t2.target) || this.hideDropdown();
    }
    hideDropdown() {
      this.#Ds?.classList.add("hidden");
      this.#Ts.ariaExpanded = "false";
      this.#Is?.abort();
      this.#Is = null;
    }
    get #Ns() {
      return this.#Ds && !this.#Ds.classList.contains("hidden");
    }
    _hideDropdownFromKeyboard() {
      if (!this.#Ms) if (this.#Ns) {
        this.hideDropdown();
        this.#Ts.focus({ preventScroll: true, focusVisible: this.#Ps });
      } else this.#a?.unselect();
    }
    updateColor(t2) {
      this.#Ss && (this.#Ss.style.backgroundColor = t2);
      if (!this.#Ds) return;
      const e2 = this.#y.highlightColors.values();
      for (const i2 of this.#Ds.children) i2.ariaSelected = e2.next().value === t2.toUpperCase();
    }
    destroy() {
      this.#Ts?.remove();
      this.#Ts = null;
      this.#Ss = null;
      this.#Ds?.remove();
      this.#Ds = null;
    }
  };
  var BasicColorPicker = class _BasicColorPicker {
    #Us = null;
    #a = null;
    #y = null;
    static #Fs = null;
    constructor(t2) {
      this.#a = t2;
      this.#y = t2._uiManager;
      _BasicColorPicker.#Fs ||= Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" });
    }
    renderButton() {
      if (this.#Us) return this.#Us;
      const { editorType: t2, colorType: e2, color: i2 } = this.#a, n2 = this.#Us = document.createElement("input");
      n2.type = "color";
      n2.value = i2 || "#000000";
      n2.className = "basicColorPicker";
      n2.tabIndex = 0;
      n2.setAttribute("data-l10n-id", _BasicColorPicker.#Fs[t2]);
      n2.addEventListener("input", () => {
        this.#y.updateParams(e2, n2.value);
      }, { signal: this.#y._signal });
      return n2;
    }
    update(t2) {
      this.#Us && (this.#Us.value = t2);
    }
    destroy() {
      this.#Us?.remove();
      this.#Us = null;
    }
    hideDropdown() {
    }
  };
  __webpack_require__(531);
  function makeColorComp(t2) {
    return Math.floor(255 * Math.max(0, Math.min(1, t2))).toString(16).padStart(2, "0");
  }
  function scaleAndClamp(t2) {
    return Math.max(0, Math.min(255, 255 * t2));
  }
  var ColorConverters = class {
    static CMYK_G([t2, e2, i2, n2]) {
      return ["G", 1 - Math.min(1, 0.3 * t2 + 0.59 * i2 + 0.11 * e2 + n2)];
    }
    static G_CMYK([t2]) {
      return ["CMYK", 0, 0, 0, 1 - t2];
    }
    static G_RGB([t2]) {
      return ["RGB", t2, t2, t2];
    }
    static G_rgb([t2]) {
      return [t2 = scaleAndClamp(t2), t2, t2];
    }
    static G_HTML([t2]) {
      const e2 = makeColorComp(t2);
      return `#${e2}${e2}${e2}`;
    }
    static RGB_G([t2, e2, i2]) {
      return ["G", 0.3 * t2 + 0.59 * e2 + 0.11 * i2];
    }
    static RGB_rgb(t2) {
      return t2.map(scaleAndClamp);
    }
    static RGB_HTML(t2) {
      return `#${t2.map(makeColorComp).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [null];
    }
    static CMYK_RGB([t2, e2, i2, n2]) {
      return ["RGB", 1 - Math.min(1, t2 + n2), 1 - Math.min(1, i2 + n2), 1 - Math.min(1, e2 + n2)];
    }
    static CMYK_rgb([t2, e2, i2, n2]) {
      return [scaleAndClamp(1 - Math.min(1, t2 + n2)), scaleAndClamp(1 - Math.min(1, i2 + n2)), scaleAndClamp(1 - Math.min(1, e2 + n2))];
    }
    static CMYK_HTML(t2) {
      const e2 = this.CMYK_RGB(t2).slice(1);
      return this.RGB_HTML(e2);
    }
    static RGB_CMYK([t2, e2, i2]) {
      const n2 = 1 - t2, r2 = 1 - e2, s2 = 1 - i2;
      return ["CMYK", n2, r2, s2, Math.min(n2, r2, s2)];
    }
  };
  var BaseSVGFactory = class {
    create(t2, e2, i2 = false) {
      if (t2 <= 0 || e2 <= 0) throw new Error("Invalid SVG dimensions");
      const n2 = this._createSVG("svg:svg");
      n2.setAttribute("version", "1.1");
      if (!i2) {
        n2.setAttribute("width", `${t2}px`);
        n2.setAttribute("height", `${e2}px`);
      }
      n2.setAttribute("preserveAspectRatio", "none");
      n2.setAttribute("viewBox", `0 0 ${t2} ${e2}`);
      return n2;
    }
    createElement(t2) {
      if ("string" != typeof t2) throw new Error("Invalid SVG element type");
      return this._createSVG(t2);
    }
    _createSVG(t2) {
      unreachable("Abstract method `_createSVG` called.");
    }
  };
  var DOMSVGFactory = class extends BaseSVGFactory {
    _createSVG(t2) {
      return document.createElementNS(X, t2);
    }
  };
  var jt = /* @__PURE__ */ new WeakSet();
  var Gt = 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3;
  var AnnotationElementFactory = class {
    static create(t2) {
      switch (t2.data.annotationType) {
        case C.LINK:
          return new LinkAnnotationElement(t2);
        case C.TEXT:
          return new TextAnnotationElement(t2);
        case C.WIDGET:
          switch (t2.data.fieldType) {
            case "Tx":
              return new TextWidgetAnnotationElement(t2);
            case "Btn":
              return t2.data.radioButton ? new RadioButtonWidgetAnnotationElement(t2) : t2.data.checkBox ? new CheckboxWidgetAnnotationElement(t2) : new PushButtonWidgetAnnotationElement(t2);
            case "Ch":
              return new ChoiceWidgetAnnotationElement(t2);
            case "Sig":
              return new SignatureWidgetAnnotationElement(t2);
          }
          return new WidgetAnnotationElement(t2);
        case C.POPUP:
          return new PopupAnnotationElement(t2);
        case C.FREETEXT:
          return new FreeTextAnnotationElement(t2);
        case C.LINE:
          return new LineAnnotationElement(t2);
        case C.SQUARE:
          return new SquareAnnotationElement(t2);
        case C.CIRCLE:
          return new CircleAnnotationElement(t2);
        case C.POLYLINE:
          return new PolylineAnnotationElement(t2);
        case C.CARET:
          return new CaretAnnotationElement(t2);
        case C.INK:
          return new InkAnnotationElement(t2);
        case C.POLYGON:
          return new PolygonAnnotationElement(t2);
        case C.HIGHLIGHT:
          return new HighlightAnnotationElement(t2);
        case C.UNDERLINE:
          return new UnderlineAnnotationElement(t2);
        case C.SQUIGGLY:
          return new SquigglyAnnotationElement(t2);
        case C.STRIKEOUT:
          return new StrikeOutAnnotationElement(t2);
        case C.STAMP:
          return new StampAnnotationElement(t2);
        case C.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(t2);
        default:
          return new AnnotationElement(t2);
      }
    }
  };
  var AnnotationElement = class _AnnotationElement {
    #Hs = null;
    #zs = false;
    #js = null;
    constructor(t2, { isRenderable: e2 = false, ignoreBorder: i2 = false, createQuadrilaterals: n2 = false } = {}) {
      this.isRenderable = e2;
      this.data = t2.data;
      this.layer = t2.layer;
      this.linkService = t2.linkService;
      this.downloadManager = t2.downloadManager;
      this.imageResourcesPath = t2.imageResourcesPath;
      this.renderForms = t2.renderForms;
      this.svgFactory = t2.svgFactory;
      this.annotationStorage = t2.annotationStorage;
      this.enableComment = t2.enableComment;
      this.enableScripting = t2.enableScripting;
      this.hasJSActions = t2.hasJSActions;
      this._fieldObjects = t2.fieldObjects;
      this.parent = t2.parent;
      this.hasOwnCommentButton = false;
      e2 && (this.contentElement = this.container = this._createContainer(i2));
      n2 && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t2, richText: e2 }) {
      return !(!t2?.str && !e2?.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return _AnnotationElement._hasPopupData(this.data) || this.enableComment && !!this.commentText;
    }
    get commentData() {
      const { data: t2 } = this, e2 = this.annotationStorage?.getEditor(t2.id);
      return e2 ? e2.getData() : t2;
    }
    get hasCommentButton() {
      return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
      const t2 = this.annotationStorage?.getEditor(this.data.id);
      if (t2) return t2.commentButtonPositionInPage;
      const { quadPoints: e2, inkLists: i2, rect: n2 } = this.data;
      let r2 = -1 / 0, s2 = -1 / 0;
      if (e2?.length >= 8) {
        for (let t3 = 0; t3 < e2.length; t3 += 8) if (e2[t3 + 1] > s2) {
          s2 = e2[t3 + 1];
          r2 = e2[t3 + 2];
        } else e2[t3 + 1] === s2 && (r2 = Math.max(r2, e2[t3 + 2]));
        return [r2, s2];
      }
      if (i2?.length >= 1) {
        for (const t3 of i2) for (let e3 = 0, i3 = t3.length; e3 < i3; e3 += 2) if (t3[e3 + 1] > s2) {
          s2 = t3[e3 + 1];
          r2 = t3[e3];
        } else t3[e3 + 1] === s2 && (r2 = Math.max(r2, t3[e3]));
        if (r2 !== 1 / 0) return [r2, s2];
      }
      return n2 ? [n2[2], n2[3]] : null;
    }
    _normalizePoint(t2) {
      const { page: { view: e2 }, viewport: { rawDims: { pageWidth: i2, pageHeight: n2, pageX: r2, pageY: s2 } } } = this.parent;
      t2[1] = e2[3] - t2[1] + e2[1];
      t2[0] = 100 * (t2[0] - r2) / i2;
      t2[1] = 100 * (t2[1] - s2) / n2;
      return t2;
    }
    get commentText() {
      const { data: t2 } = this;
      return this.annotationStorage.getRawValue(`${g}${t2.id}`)?.popup?.contents || t2.contentsObj?.str || "";
    }
    set commentText(t2) {
      const { data: e2 } = this, i2 = { deleted: !t2, contents: t2 || "" };
      this.annotationStorage.updateEditor(e2.id, { popup: i2 }) || this.annotationStorage.setValue(`${g}${e2.id}`, { id: e2.id, annotationType: e2.annotationType, page: this.parent.page, popup: i2, popupRef: e2.popupRef, modificationDate: /* @__PURE__ */ new Date() });
      t2 || this.removePopup();
    }
    removePopup() {
      (this.#js?.popup || this.popup)?.remove();
      this.#js = this.popup = null;
    }
    updateEdited(t2) {
      if (!this.container) return;
      t2.rect && (this.#Hs ||= { rect: this.data.rect.slice(0) });
      const { rect: e2, popup: i2 } = t2;
      e2 && this.#Gs(e2);
      let n2 = this.#js?.popup || this.popup;
      if (!n2 && i2?.text) {
        this._createPopup(i2);
        n2 = this.#js.popup;
      }
      if (n2) {
        n2.updateEdited(t2);
        if (i2?.deleted) {
          n2.remove();
          this.#js = null;
          this.popup = null;
        }
      }
    }
    resetEdited() {
      if (this.#Hs) {
        this.#Gs(this.#Hs.rect);
        this.#js?.popup.resetEdited();
        this.#Hs = null;
      }
    }
    #Gs(t2) {
      const { container: { style: e2 }, data: { rect: i2, rotation: n2 }, parent: { viewport: { rawDims: { pageWidth: r2, pageHeight: s2, pageX: a2, pageY: o2 } } } } = this;
      i2?.splice(0, 4, ...t2);
      e2.left = 100 * (t2[0] - a2) / r2 + "%";
      e2.top = 100 * (s2 - t2[3] + o2) / s2 + "%";
      if (0 === n2) {
        e2.width = 100 * (t2[2] - t2[0]) / r2 + "%";
        e2.height = 100 * (t2[3] - t2[1]) / s2 + "%";
      } else this.setRotation(n2);
    }
    _createContainer(t2) {
      const { data: e2, parent: { page: i2, viewport: n2 } } = this, r2 = document.createElement("section");
      r2.setAttribute("data-annotation-id", e2.id);
      this instanceof WidgetAnnotationElement || this instanceof LinkAnnotationElement || (r2.tabIndex = 0);
      const { style: s2 } = r2;
      s2.zIndex = this.parent.zIndex;
      this.parent.zIndex += 2;
      e2.alternativeText && (r2.title = e2.alternativeText);
      e2.noRotate && r2.classList.add("norotate");
      if (!e2.rect || this instanceof PopupAnnotationElement) {
        const { rotation: t3 } = e2;
        e2.hasOwnCanvas || 0 === t3 || this.setRotation(t3, r2);
        return r2;
      }
      const { width: a2, height: o2 } = this;
      if (!t2 && e2.borderStyle.width > 0) {
        s2.borderWidth = `${e2.borderStyle.width}px`;
        const t3 = e2.borderStyle.horizontalCornerRadius, i3 = e2.borderStyle.verticalCornerRadius;
        if (t3 > 0 || i3 > 0) {
          const e3 = `calc(${t3}px * var(--total-scale-factor)) / calc(${i3}px * var(--total-scale-factor))`;
          s2.borderRadius = e3;
        } else if (this instanceof RadioButtonWidgetAnnotationElement) {
          const t4 = `calc(${a2}px * var(--total-scale-factor)) / calc(${o2}px * var(--total-scale-factor))`;
          s2.borderRadius = t4;
        }
        switch (e2.borderStyle.style) {
          case D:
            s2.borderStyle = "solid";
            break;
          case P:
            s2.borderStyle = "dashed";
            break;
          case M:
            warn("Unimplemented border style: beveled");
            break;
          case k:
            warn("Unimplemented border style: inset");
            break;
          case I:
            s2.borderBottomStyle = "solid";
        }
        const n3 = e2.borderColor || null;
        if (n3) {
          this.#zs = true;
          s2.borderColor = Util.makeHexColor(0 | n3[0], 0 | n3[1], 0 | n3[2]);
        } else s2.borderWidth = 0;
      }
      const l2 = Util.normalizeRect([e2.rect[0], i2.view[3] - e2.rect[1] + i2.view[1], e2.rect[2], i2.view[3] - e2.rect[3] + i2.view[1]]), { pageWidth: h2, pageHeight: c2, pageX: d2, pageY: u2 } = n2.rawDims;
      s2.left = 100 * (l2[0] - d2) / h2 + "%";
      s2.top = 100 * (l2[1] - u2) / c2 + "%";
      const { rotation: p2 } = e2;
      if (e2.hasOwnCanvas || 0 === p2) {
        s2.width = 100 * a2 / h2 + "%";
        s2.height = 100 * o2 / c2 + "%";
      } else this.setRotation(p2, r2);
      return r2;
    }
    setRotation(t2, e2 = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: i2, pageHeight: n2 } = this.parent.viewport.rawDims;
      let { width: r2, height: s2 } = this;
      t2 % 180 != 0 && ([r2, s2] = [s2, r2]);
      e2.style.width = 100 * r2 / i2 + "%";
      e2.style.height = 100 * s2 / n2 + "%";
      e2.setAttribute("data-main-rotation", (360 - t2) % 360);
    }
    get _commonActions() {
      const setColor = (t2, e2, i2) => {
        const n2 = i2.detail[t2], r2 = n2[0], s2 = n2.slice(1);
        i2.target.style[e2] = ColorConverters[`${r2}_HTML`](s2);
        this.annotationStorage.setValue(this.data.id, { [e2]: ColorConverters[`${r2}_rgb`](s2) });
      };
      return shadow(this, "_commonActions", { display: (t2) => {
        const { display: e2 } = t2.detail, i2 = e2 % 2 == 1;
        this.container.style.visibility = i2 ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, { noView: i2, noPrint: 1 === e2 || 2 === e2 });
      }, print: (t2) => {
        this.annotationStorage.setValue(this.data.id, { noPrint: !t2.detail.print });
      }, hidden: (t2) => {
        const { hidden: e2 } = t2.detail;
        this.container.style.visibility = e2 ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, { noPrint: e2, noView: e2 });
      }, focus: (t2) => {
        setTimeout(() => t2.target.focus({ preventScroll: false }), 0);
      }, userName: (t2) => {
        t2.target.title = t2.detail.userName;
      }, readonly: (t2) => {
        t2.target.disabled = t2.detail.readonly;
      }, required: (t2) => {
        this._setRequired(t2.target, t2.detail.required);
      }, bgColor: (t2) => {
        setColor("bgColor", "backgroundColor", t2);
      }, fillColor: (t2) => {
        setColor("fillColor", "backgroundColor", t2);
      }, fgColor: (t2) => {
        setColor("fgColor", "color", t2);
      }, textColor: (t2) => {
        setColor("textColor", "color", t2);
      }, borderColor: (t2) => {
        setColor("borderColor", "borderColor", t2);
      }, strokeColor: (t2) => {
        setColor("strokeColor", "borderColor", t2);
      }, rotation: (t2) => {
        const e2 = t2.detail.rotation;
        this.setRotation(e2);
        this.annotationStorage.setValue(this.data.id, { rotation: e2 });
      } });
    }
    _dispatchEventFromSandbox(t2, e2) {
      const i2 = this._commonActions;
      for (const n2 of Object.keys(e2.detail)) {
        const r2 = t2[n2] || i2[n2];
        r2?.(e2);
      }
    }
    _setDefaultPropertiesFromJS(t2) {
      if (!this.enableScripting) return;
      const e2 = this.annotationStorage.getRawValue(this.data.id);
      if (!e2) return;
      const i2 = this._commonActions;
      for (const [n2, r2] of Object.entries(e2)) {
        const s2 = i2[n2];
        if (s2) {
          s2({ detail: { [n2]: r2 }, target: t2 });
          delete e2[n2];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t2 } = this.data;
      if (!t2) return;
      const [e2, i2, n2, r2] = this.data.rect.map((t3) => Math.fround(t3));
      if (8 === t2.length) {
        const [s3, a3, o3, l3] = t2.subarray(2, 6);
        if (n2 === s3 && r2 === a3 && e2 === o3 && i2 === l3) return;
      }
      const { style: s2 } = this.container;
      let a2;
      if (this.#zs) {
        const { borderColor: t3, borderWidth: e3 } = s2;
        s2.borderWidth = 0;
        a2 = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t3}" stroke-width="${e3}">`];
        this.container.classList.add("hasBorder");
      }
      const o2 = n2 - e2, l2 = r2 - i2, { svgFactory: h2 } = this, c2 = h2.createElement("svg");
      c2.classList.add("quadrilateralsContainer");
      c2.setAttribute("width", 0);
      c2.setAttribute("height", 0);
      c2.role = "none";
      const d2 = h2.createElement("defs");
      c2.append(d2);
      const u2 = h2.createElement("clipPath"), p2 = `clippath_${this.data.id}`;
      u2.setAttribute("id", p2);
      u2.setAttribute("clipPathUnits", "objectBoundingBox");
      d2.append(u2);
      for (let i3 = 2, n3 = t2.length; i3 < n3; i3 += 8) {
        const n4 = t2[i3], s3 = t2[i3 + 1], c3 = t2[i3 + 2], d3 = t2[i3 + 3], p3 = h2.createElement("rect"), g2 = (c3 - e2) / o2, m2 = (r2 - s3) / l2, f2 = (n4 - c3) / o2, b2 = (s3 - d3) / l2;
        p3.setAttribute("x", g2);
        p3.setAttribute("y", m2);
        p3.setAttribute("width", f2);
        p3.setAttribute("height", b2);
        u2.append(p3);
        a2?.push(`<rect vector-effect="non-scaling-stroke" x="${g2}" y="${m2}" width="${f2}" height="${b2}"/>`);
      }
      if (this.#zs) {
        a2.push("</g></svg>')");
        s2.backgroundImage = a2.join("");
      }
      this.container.append(c2);
      this.container.style.clipPath = `url(#${p2})`;
    }
    _createPopup(t2 = null) {
      const { data: e2 } = this;
      let i2, n2;
      if (t2) {
        i2 = { str: t2.text };
        n2 = t2.date;
      } else {
        i2 = e2.contentsObj;
        n2 = e2.modificationDate;
      }
      this.#js = new PopupAnnotationElement({ data: { color: e2.color, titleObj: e2.titleObj, modificationDate: n2, contentsObj: i2, richText: e2.richText, parentRect: e2.rect, borderStyle: 0, id: `popup_${e2.id}`, rotation: e2.rotation, noRotate: true }, linkService: this.linkService, parent: this.parent, elements: [this] });
    }
    get hasPopupElement() {
      return !!(this.#js || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return this.#js;
    }
    render() {
      unreachable("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t2, e2 = null) {
      const i2 = [];
      if (this._fieldObjects) {
        const n2 = this._fieldObjects[t2];
        if (n2) for (const { page: t3, id: r2, exportValues: s2 } of n2) {
          if (-1 === t3) continue;
          if (r2 === e2) continue;
          const n3 = "string" == typeof s2 ? s2 : null, a2 = document.querySelector(`[data-element-id="${r2}"]`);
          !a2 || jt.has(a2) ? i2.push({ id: r2, exportValue: n3, domElement: a2 }) : warn(`_getElementsByName - element not allowed: ${r2}`);
        }
        return i2;
      }
      for (const n2 of document.getElementsByName(t2)) {
        const { exportValue: t3 } = n2, r2 = n2.getAttribute("data-element-id");
        r2 !== e2 && (jt.has(n2) && i2.push({ id: r2, exportValue: t3, domElement: n2 }));
      }
      return i2;
    }
    show() {
      this.container && (this.container.hidden = false);
      this.popup?.maybeShow();
    }
    hide() {
      this.container && (this.container.hidden = true);
      this.popup?.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t2 = this.getElementsToTriggerPopup();
      if (Array.isArray(t2)) for (const e2 of t2) e2.classList.add("highlightArea");
      else t2.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t2, data: { id: e2 } } = this;
      this.container.addEventListener("dblclick", () => {
        this.linkService.eventBus?.dispatch("switchannotationeditormode", { source: this, mode: t2, editId: e2, mustEnterInEditMode: true });
      });
    }
    get width() {
      return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
      return this.data.rect[3] - this.data.rect[1];
    }
  };
  var EditorAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.editor = t2.editor;
    }
    render() {
      this.container.className = "editorAnnotation";
      return this.container;
    }
    createOrUpdatePopup() {
      const { editor: t2 } = this;
      t2.hasComment && this._createPopup(t2.comment);
    }
    get hasCommentButton() {
      return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
      return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
      return this.editor.comment.text;
    }
    set commentText(t2) {
      this.editor.comment = t2;
      t2 || this.removePopup();
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      this.parent.removeAnnotation(this.data.id);
      this.container.remove();
      this.container = null;
      this.removePopup();
    }
  };
  var LinkAnnotationElement = class extends AnnotationElement {
    constructor(t2, e2 = null) {
      super(t2, { isRenderable: true, ignoreBorder: !!e2?.ignoreBorder, createQuadrilaterals: true });
      this.isTooltipOnly = t2.data.isTooltipOnly;
    }
    render() {
      const { data: t2, linkService: e2 } = this, i2 = document.createElement("a");
      i2.setAttribute("data-element-id", t2.id);
      let n2 = false;
      if (t2.url) {
        e2.addLinkAttributes(i2, t2.url, t2.newWindow);
        n2 = true;
      } else if (t2.action) {
        this._bindNamedAction(i2, t2.action, t2.overlaidText);
        n2 = true;
      } else if (t2.attachment) {
        this.#Ws(i2, t2.attachment, t2.overlaidText, t2.attachmentDest);
        n2 = true;
      } else if (t2.setOCGState) {
        this.#Vs(i2, t2.setOCGState, t2.overlaidText);
        n2 = true;
      } else if (t2.dest) {
        this._bindLink(i2, t2.dest, t2.overlaidText);
        n2 = true;
      } else {
        if (t2.actions && (t2.actions.Action || t2.actions["Mouse Up"] || t2.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
          this._bindJSAction(i2, t2);
          n2 = true;
        }
        if (t2.resetForm) {
          this._bindResetFormAction(i2, t2.resetForm);
          n2 = true;
        } else if (this.isTooltipOnly && !n2) {
          this._bindLink(i2, "");
          n2 = true;
        }
      }
      this.container.classList.add("linkAnnotation");
      if (n2) {
        this.contentElement = i2;
        this.container.append(i2);
      }
      return this.container;
    }
    #$s() {
      this.container.setAttribute("data-internal-link", "");
    }
    _bindLink(t2, e2, i2 = "") {
      t2.href = this.linkService.getDestinationHash(e2);
      t2.onclick = () => {
        e2 && this.linkService.goToDestination(e2);
        return false;
      };
      (e2 || "" === e2) && this.#$s();
      i2 && (t2.title = i2);
    }
    _bindNamedAction(t2, e2, i2 = "") {
      t2.href = this.linkService.getAnchorUrl("");
      t2.onclick = () => {
        this.linkService.executeNamedAction(e2);
        return false;
      };
      i2 && (t2.title = i2);
      this.#$s();
    }
    #Ws(t2, e2, i2 = "", n2 = null) {
      t2.href = this.linkService.getAnchorUrl("");
      e2.description ? t2.title = e2.description : i2 && (t2.title = i2);
      t2.onclick = () => {
        this.downloadManager?.openOrDownloadData(e2.content, e2.filename, n2);
        return false;
      };
      this.#$s();
    }
    #Vs(t2, e2, i2 = "") {
      t2.href = this.linkService.getAnchorUrl("");
      t2.onclick = () => {
        this.linkService.executeSetOCGState(e2);
        return false;
      };
      i2 && (t2.title = i2);
      this.#$s();
    }
    _bindJSAction(t2, e2) {
      t2.href = this.linkService.getAnchorUrl("");
      const i2 = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
      for (const n2 of Object.keys(e2.actions)) {
        const r2 = i2.get(n2);
        r2 && (t2[r2] = () => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2.id, name: n2 } });
          return false;
        });
      }
      e2.overlaidText && (t2.title = e2.overlaidText);
      t2.onclick || (t2.onclick = () => false);
      this.#$s();
    }
    _bindResetFormAction(t2, e2) {
      const i2 = t2.onclick;
      i2 || (t2.href = this.linkService.getAnchorUrl(""));
      this.#$s();
      if (this._fieldObjects) t2.onclick = () => {
        i2?.();
        const { fields: t3, refs: n2, include: r2 } = e2, s2 = [];
        if (0 !== t3.length || 0 !== n2.length) {
          const e3 = new Set(n2);
          for (const i3 of t3) {
            const t4 = this._fieldObjects[i3] || [];
            for (const { id: i4 } of t4) e3.add(i4);
          }
          for (const t4 of Object.values(this._fieldObjects)) for (const i3 of t4) e3.has(i3.id) === r2 && s2.push(i3);
        } else for (const t4 of Object.values(this._fieldObjects)) s2.push(...t4);
        const a2 = this.annotationStorage, o2 = [];
        for (const t4 of s2) {
          const { id: e3 } = t4;
          o2.push(e3);
          switch (t4.type) {
            case "text": {
              const i4 = t4.defaultValue || "";
              a2.setValue(e3, { value: i4 });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const i4 = t4.defaultValue === t4.exportValues;
              a2.setValue(e3, { value: i4 });
              break;
            }
            case "combobox":
            case "listbox": {
              const i4 = t4.defaultValue || "";
              a2.setValue(e3, { value: i4 });
              break;
            }
            default:
              continue;
          }
          const i3 = document.querySelector(`[data-element-id="${e3}"]`);
          i3 && (jt.has(i3) ? i3.dispatchEvent(new Event("resetform")) : warn(`_bindResetFormAction - element not allowed: ${e3}`));
        }
        this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: o2, name: "ResetForm" } });
        return false;
      };
      else {
        warn('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
        i2 || (t2.onclick = () => false);
      }
    }
  };
  var TextAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t2 = document.createElement("img");
      t2.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
      t2.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
      t2.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name }));
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.append(t2);
      return this.container;
    }
  };
  var WidgetAnnotationElement = class extends AnnotationElement {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(t2) {
      if (this.data.hasOwnCanvas) {
        "CANVAS" === t2.previousSibling?.nodeName && (t2.previousSibling.hidden = true);
        t2.hidden = false;
      }
    }
    _getKeyModifier(t2) {
      return FeatureTest.platform.isMac ? t2.metaKey : t2.ctrlKey;
    }
    _setEventListener(t2, e2, i2, n2, r2) {
      i2.includes("mouse") ? t2.addEventListener(i2, (t3) => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n2, value: r2(t3), shift: t3.shiftKey, modifier: this._getKeyModifier(t3) } });
      }) : t2.addEventListener(i2, (t3) => {
        if ("blur" === i2) {
          if (!e2.focused || !t3.relatedTarget) return;
          e2.focused = false;
        } else if ("focus" === i2) {
          if (e2.focused) return;
          e2.focused = true;
        }
        r2 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n2, value: r2(t3) } });
      });
    }
    _setEventListeners(t2, e2, i2, n2) {
      for (const [r2, s2] of i2) if ("Action" === s2 || this.data.actions?.[s2]) {
        "Focus" !== s2 && "Blur" !== s2 || (e2 ||= { focused: false });
        this._setEventListener(t2, e2, r2, s2, n2);
        "Focus" !== s2 || this.data.actions?.Blur ? "Blur" !== s2 || this.data.actions?.Focus || this._setEventListener(t2, e2, "focus", "Focus", null) : this._setEventListener(t2, e2, "blur", "Blur", null);
      }
    }
    _setBackgroundColor(t2) {
      const e2 = this.data.backgroundColor || null;
      t2.style.backgroundColor = null === e2 ? "transparent" : Util.makeHexColor(e2[0], e2[1], e2[2]);
    }
    _setTextStyle(t2) {
      const e2 = ["left", "center", "right"], { fontColor: i2 } = this.data.defaultAppearanceData, n2 = this.data.defaultAppearanceData.fontSize || 9, s2 = t2.style;
      let a2;
      const roundToOneDecimal = (t3) => Math.round(10 * t3) / 10;
      if (this.data.multiLine) {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e3 = t3 / (Math.round(t3 / (r * n2)) || 1);
        a2 = Math.min(n2, roundToOneDecimal(e3 / r));
      } else {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
        a2 = Math.min(n2, roundToOneDecimal(t3 / r));
      }
      s2.fontSize = `calc(${a2}px * var(--total-scale-factor))`;
      s2.color = Util.makeHexColor(i2[0], i2[1], i2[2]);
      null !== this.data.textAlignment && (s2.textAlign = e2[this.data.textAlignment]);
    }
    _setRequired(t2, e2) {
      e2 ? t2.setAttribute("required", true) : t2.removeAttribute("required");
      t2.setAttribute("aria-required", e2);
    }
  };
  var TextWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms || t2.data.hasOwnCanvas || !t2.data.hasAppearance && !!t2.data.fieldValue });
    }
    setPropertyOnSiblings(t2, e2, i2, n2) {
      const r2 = this.annotationStorage;
      for (const s2 of this._getElementsByName(t2.name, t2.id)) {
        s2.domElement && (s2.domElement[e2] = i2);
        r2.setValue(s2.id, { [n2]: i2 });
      }
    }
    render() {
      const t2 = this.annotationStorage, e2 = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let i2 = null;
      if (this.renderForms) {
        const n2 = t2.getValue(e2, { value: this.data.fieldValue });
        let r2 = n2.value || "";
        const s2 = t2.getValue(e2, { charLimit: this.data.maxLen }).charLimit;
        s2 && r2.length > s2 && (r2 = r2.slice(0, s2));
        let a2 = n2.formattedValue || this.data.textContent?.join("\n") || null;
        a2 && this.data.comb && (a2 = a2.replaceAll(/\s+/g, ""));
        const o2 = { userValue: r2, formattedValue: a2, lastCommittedValue: null, commitKey: 1, focused: false };
        if (this.data.multiLine) {
          i2 = document.createElement("textarea");
          i2.textContent = a2 ?? r2;
          this.data.doNotScroll && (i2.style.overflowY = "hidden");
        } else {
          i2 = document.createElement("input");
          i2.type = this.data.password ? "password" : "text";
          i2.setAttribute("value", a2 ?? r2);
          this.data.doNotScroll && (i2.style.overflowX = "hidden");
        }
        this.data.hasOwnCanvas && (i2.hidden = true);
        jt.add(i2);
        this.contentElement = i2;
        i2.setAttribute("data-element-id", e2);
        i2.disabled = this.data.readOnly;
        i2.name = this.data.fieldName;
        i2.tabIndex = 0;
        const { datetimeFormat: l2, datetimeType: h2, timeStep: c2 } = this.data, d2 = !!h2 && this.enableScripting;
        l2 && (i2.title = l2);
        this._setRequired(i2, this.data.required);
        s2 && (i2.maxLength = s2);
        i2.addEventListener("input", (n3) => {
          t2.setValue(e2, { value: n3.target.value });
          this.setPropertyOnSiblings(i2, "value", n3.target.value, "value");
          o2.formattedValue = null;
        });
        i2.addEventListener("resetform", (t3) => {
          const e3 = this.data.defaultFieldValue ?? "";
          i2.value = o2.userValue = e3;
          o2.formattedValue = null;
        });
        let blurListener = (t3) => {
          const { formattedValue: e3 } = o2;
          null != e3 && (t3.target.value = e3);
          t3.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          i2.addEventListener("focus", (t3) => {
            if (o2.focused) return;
            const { target: e3 } = t3;
            if (d2) {
              e3.type = h2;
              c2 && (e3.step = c2);
            }
            if (o2.userValue) {
              const t4 = o2.userValue;
              if (d2) if ("time" === h2) {
                const i3 = new Date(t4), n4 = [i3.getHours(), i3.getMinutes(), i3.getSeconds()];
                e3.value = n4.map((t5) => t5.toString().padStart(2, "0")).join(":");
              } else e3.value = new Date(t4 - Gt).toISOString().split("date" === h2 ? "T" : ".", 1)[0];
              else e3.value = t4;
            }
            o2.lastCommittedValue = e3.value;
            o2.commitKey = 1;
            this.data.actions?.Focus || (o2.focused = true);
          });
          i2.addEventListener("updatefromsandbox", (i3) => {
            this.showElementAndHideCanvas(i3.target);
            const n4 = { value(i4) {
              o2.userValue = i4.detail.value ?? "";
              d2 || t2.setValue(e2, { value: o2.userValue.toString() });
              i4.target.value = o2.userValue;
            }, formattedValue(i4) {
              const { formattedValue: n5 } = i4.detail;
              o2.formattedValue = n5;
              null != n5 && i4.target !== document.activeElement && (i4.target.value = n5);
              const r3 = { formattedValue: n5 };
              d2 && (r3.value = n5);
              t2.setValue(e2, r3);
            }, selRange(t3) {
              t3.target.setSelectionRange(...t3.detail.selRange);
            }, charLimit: (i4) => {
              const { charLimit: n5 } = i4.detail, { target: r3 } = i4;
              if (0 === n5) {
                r3.removeAttribute("maxLength");
                return;
              }
              r3.setAttribute("maxLength", n5);
              let s3 = o2.userValue;
              if (s3 && !(s3.length <= n5)) {
                s3 = s3.slice(0, n5);
                r3.value = o2.userValue = s3;
                t2.setValue(e2, { value: s3 });
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: s3, willCommit: true, commitKey: 1, selStart: r3.selectionStart, selEnd: r3.selectionEnd } });
              }
            } };
            this._dispatchEventFromSandbox(n4, i3);
          });
          i2.addEventListener("keydown", (t3) => {
            o2.commitKey = 1;
            let i3 = -1;
            "Escape" === t3.key ? i3 = 0 : "Enter" !== t3.key || this.data.multiLine ? "Tab" === t3.key && (o2.commitKey = 3) : i3 = 2;
            if (-1 === i3) return;
            const { value: n4 } = t3.target;
            if (o2.lastCommittedValue !== n4) {
              o2.lastCommittedValue = n4;
              o2.userValue = n4;
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n4, willCommit: true, commitKey: i3, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
            }
          });
          const n3 = blurListener;
          blurListener = null;
          i2.addEventListener("blur", (t3) => {
            if (!o2.focused || !t3.relatedTarget) return;
            this.data.actions?.Blur || (o2.focused = false);
            const { target: i3 } = t3;
            let { value: r3 } = i3;
            if (d2) {
              if (r3 && "time" === h2) {
                const t4 = r3.split(":").map((t5) => parseInt(t5, 10));
                r3 = new Date(2e3, 0, 1, t4[0], t4[1], t4[2] || 0).valueOf();
                i3.step = "";
              } else {
                r3.includes("T") || (r3 = `${r3}T00:00`);
                r3 = new Date(r3).valueOf();
              }
              i3.type = "text";
            }
            o2.userValue = r3;
            o2.lastCommittedValue !== r3 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: r3, willCommit: true, commitKey: o2.commitKey, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
            n3(t3);
          });
          this.data.actions?.Keystroke && i2.addEventListener("beforeinput", (t3) => {
            o2.lastCommittedValue = null;
            const { data: i3, target: n4 } = t3, { value: r3, selectionStart: s3, selectionEnd: a3 } = n4;
            let l3 = s3, h3 = a3;
            switch (t3.inputType) {
              case "deleteWordBackward": {
                const t4 = r3.substring(0, s3).match(/\w*[^\w]*$/);
                t4 && (l3 -= t4[0].length);
                break;
              }
              case "deleteWordForward": {
                const t4 = r3.substring(s3).match(/^[^\w]*\w*/);
                t4 && (h3 += t4[0].length);
                break;
              }
              case "deleteContentBackward":
                s3 === a3 && (l3 -= 1);
                break;
              case "deleteContentForward":
                s3 === a3 && (h3 += 1);
            }
            t3.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: r3, change: i3 || "", willCommit: false, selStart: l3, selEnd: h3 } });
          });
          this._setEventListeners(i2, o2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.value);
        }
        blurListener && i2.addEventListener("blur", blurListener);
        if (this.data.comb) {
          const t3 = (this.data.rect[2] - this.data.rect[0]) / s2;
          i2.classList.add("comb");
          i2.style.letterSpacing = `calc(${t3}px * var(--total-scale-factor) - 1ch)`;
        }
      } else {
        i2 = document.createElement("div");
        i2.textContent = this.data.fieldValue;
        i2.style.verticalAlign = "middle";
        i2.style.display = "table-cell";
        this.data.hasOwnCanvas && (i2.hidden = true);
      }
      this._setTextStyle(i2);
      this._setBackgroundColor(i2);
      this._setDefaultPropertiesFromJS(i2);
      this.container.append(i2);
      return this.container;
    }
  };
  var SignatureWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: !!t2.data.hasOwnCanvas });
    }
  };
  var CheckboxWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let n2 = t2.getValue(i2, { value: e2.exportValue === e2.fieldValue }).value;
      if ("string" == typeof n2) {
        n2 = "Off" !== n2;
        t2.setValue(i2, { value: n2 });
      }
      this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const r2 = document.createElement("input");
      jt.add(r2);
      r2.setAttribute("data-element-id", i2);
      r2.disabled = e2.readOnly;
      this._setRequired(r2, this.data.required);
      r2.type = "checkbox";
      r2.name = e2.fieldName;
      n2 && r2.setAttribute("checked", true);
      r2.setAttribute("exportValue", e2.exportValue);
      r2.tabIndex = 0;
      r2.addEventListener("change", (n3) => {
        const { name: r3, checked: s2 } = n3.target;
        for (const n4 of this._getElementsByName(r3, i2)) {
          const i3 = s2 && n4.exportValue === e2.exportValue;
          n4.domElement && (n4.domElement.checked = i3);
          t2.setValue(n4.id, { value: i3 });
        }
        t2.setValue(i2, { value: s2 });
      });
      r2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue || "Off";
        t3.target.checked = i3 === e2.exportValue;
      });
      if (this.enableScripting && this.hasJSActions) {
        r2.addEventListener("updatefromsandbox", (e3) => {
          const n3 = { value(e4) {
            e4.target.checked = "Off" !== e4.detail.value;
            t2.setValue(i2, { value: e4.target.checked });
          } };
          this._dispatchEventFromSandbox(n3, e3);
        });
        this._setEventListeners(r2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
      }
      this._setBackgroundColor(r2);
      this._setDefaultPropertiesFromJS(r2);
      this.container.append(r2);
      return this.container;
    }
  };
  var RadioButtonWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let n2 = t2.getValue(i2, { value: e2.fieldValue === e2.buttonValue }).value;
      if ("string" == typeof n2) {
        n2 = n2 !== e2.buttonValue;
        t2.setValue(i2, { value: n2 });
      }
      if (n2) for (const n3 of this._getElementsByName(e2.fieldName, i2)) t2.setValue(n3.id, { value: false });
      const r2 = document.createElement("input");
      jt.add(r2);
      r2.setAttribute("data-element-id", i2);
      r2.disabled = e2.readOnly;
      this._setRequired(r2, this.data.required);
      r2.type = "radio";
      r2.name = e2.fieldName;
      n2 && r2.setAttribute("checked", true);
      r2.tabIndex = 0;
      r2.addEventListener("change", (e3) => {
        const { name: n3, checked: r3 } = e3.target;
        for (const e4 of this._getElementsByName(n3, i2)) t2.setValue(e4.id, { value: false });
        t2.setValue(i2, { value: r3 });
      });
      r2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue;
        t3.target.checked = null != i3 && i3 === e2.buttonValue;
      });
      if (this.enableScripting && this.hasJSActions) {
        const n3 = e2.buttonValue;
        r2.addEventListener("updatefromsandbox", (e3) => {
          const r3 = { value: (e4) => {
            const r4 = n3 === e4.detail.value;
            for (const n4 of this._getElementsByName(e4.target.name)) {
              const e5 = r4 && n4.id === i2;
              n4.domElement && (n4.domElement.checked = e5);
              t2.setValue(n4.id, { value: e5 });
            }
          } };
          this._dispatchEventFromSandbox(r3, e3);
        });
        this._setEventListeners(r2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
      }
      this._setBackgroundColor(r2);
      this._setDefaultPropertiesFromJS(r2);
      this.container.append(r2);
      return this.container;
    }
  };
  var PushButtonWidgetAnnotationElement = class extends LinkAnnotationElement {
    constructor(t2) {
      super(t2, { ignoreBorder: t2.data.hasAppearance });
    }
    render() {
      const t2 = super.render();
      t2.classList.add("buttonWidgetAnnotation", "pushButton");
      const e2 = t2.lastChild;
      if (this.enableScripting && this.hasJSActions && e2) {
        this._setDefaultPropertiesFromJS(e2);
        e2.addEventListener("updatefromsandbox", (t3) => {
          this._dispatchEventFromSandbox({}, t3);
        });
      }
      return t2;
    }
  };
  var ChoiceWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t2 = this.annotationStorage, e2 = this.data.id, i2 = t2.getValue(e2, { value: this.data.fieldValue }), n2 = document.createElement("select");
      jt.add(n2);
      n2.setAttribute("data-element-id", e2);
      n2.disabled = this.data.readOnly;
      this._setRequired(n2, this.data.required);
      n2.name = this.data.fieldName;
      n2.tabIndex = 0;
      let r2 = this.data.combo && this.data.options.length > 0;
      if (!this.data.combo) {
        n2.size = this.data.options.length;
        this.data.multiSelect && (n2.multiple = true);
      }
      n2.addEventListener("resetform", (t3) => {
        const e3 = this.data.defaultFieldValue;
        for (const t4 of n2.options) t4.selected = t4.value === e3;
      });
      const fixDisplayValue = (t3, e3) => {
        const i3 = e3.replaceAll(" ", "\xA0");
        t3.textContent = i3;
        i3 !== e3 && t3.setAttribute("display-value", e3);
      };
      for (const t3 of this.data.options) {
        const e3 = document.createElement("option");
        fixDisplayValue(e3, t3.displayValue);
        e3.value = t3.exportValue;
        if (i2.value.includes(t3.exportValue)) {
          e3.setAttribute("selected", true);
          r2 = false;
        }
        n2.append(e3);
      }
      let s2 = null;
      if (r2) {
        const t3 = document.createElement("option");
        t3.value = " ";
        t3.setAttribute("hidden", true);
        t3.setAttribute("selected", true);
        n2.prepend(t3);
        s2 = () => {
          t3.remove();
          n2.removeEventListener("input", s2);
          s2 = null;
        };
        n2.addEventListener("input", s2);
      }
      const getValue = (t3) => {
        const e3 = t3 ? "value" : "textContent", { options: i3, multiple: r3 } = n2;
        return r3 ? Array.prototype.filter.call(i3, (t4) => t4.selected).map((t4) => t4[e3]) : -1 === i3.selectedIndex ? null : i3[i3.selectedIndex][e3];
      };
      let a2 = getValue(false);
      const getItems = (t3) => {
        const e3 = t3.target.options;
        return Array.prototype.map.call(e3, (t4) => ({ displayValue: t4.getAttribute("display-value") || t4.textContent, exportValue: t4.value }));
      };
      if (this.enableScripting && this.hasJSActions) {
        n2.addEventListener("updatefromsandbox", (i3) => {
          const r3 = { value(i4) {
            s2?.();
            const r4 = i4.detail.value, o2 = new Set(Array.isArray(r4) ? r4 : [r4]);
            for (const t3 of n2.options) t3.selected = o2.has(t3.value);
            t2.setValue(e2, { value: getValue(true) });
            a2 = getValue(false);
          }, multipleSelection(t3) {
            n2.multiple = true;
          }, remove(i4) {
            const r4 = n2.options, s3 = i4.detail.remove;
            r4[s3].selected = false;
            n2.remove(s3);
            if (r4.length > 0) {
              -1 === Array.prototype.findIndex.call(r4, (t3) => t3.selected) && (r4[0].selected = true);
            }
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            a2 = getValue(false);
          }, clear(i4) {
            for (; 0 !== n2.length; ) n2.remove(0);
            t2.setValue(e2, { value: null, items: [] });
            a2 = getValue(false);
          }, insert(i4) {
            const { index: r4, displayValue: s3, exportValue: o2 } = i4.detail.insert, l2 = n2.children[r4], h2 = document.createElement("option");
            fixDisplayValue(h2, s3);
            h2.value = o2;
            l2 ? l2.before(h2) : n2.append(h2);
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            a2 = getValue(false);
          }, items(i4) {
            const { items: r4 } = i4.detail;
            for (; 0 !== n2.length; ) n2.remove(0);
            for (const t3 of r4) {
              const { displayValue: e3, exportValue: i5 } = t3, r5 = document.createElement("option");
              fixDisplayValue(r5, e3);
              r5.value = i5;
              n2.append(r5);
            }
            n2.options.length > 0 && (n2.options[0].selected = true);
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            a2 = getValue(false);
          }, indices(i4) {
            const n3 = new Set(i4.detail.indices);
            for (const t3 of i4.target.options) t3.selected = n3.has(t3.index);
            t2.setValue(e2, { value: getValue(true) });
            a2 = getValue(false);
          }, editable(t3) {
            t3.target.disabled = !t3.detail.editable;
          } };
          this._dispatchEventFromSandbox(r3, i3);
        });
        n2.addEventListener("input", (i3) => {
          const n3 = getValue(true), r3 = getValue(false);
          t2.setValue(e2, { value: n3 });
          i3.preventDefault();
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: a2, change: r3, changeEx: n3, willCommit: false, commitKey: 1, keyDown: false } });
        });
        this._setEventListeners(n2, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (t3) => t3.target.value);
      } else n2.addEventListener("input", function(i3) {
        t2.setValue(e2, { value: getValue(true) });
      });
      this.data.combo && this._setTextStyle(n2);
      this._setBackgroundColor(n2);
      this._setDefaultPropertiesFromJS(n2);
      this.container.append(n2);
      return this.container;
    }
  };
  var PopupAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      const { data: e2, elements: i2, parent: n2 } = t2, r2 = !!n2._commentManager;
      super(t2, { isRenderable: !r2 && AnnotationElement._hasPopupData(e2) });
      this.elements = i2;
      if (r2 && AnnotationElement._hasPopupData(e2)) {
        const t3 = this.popup = this.#qs();
        for (const e3 of i2) e3.popup = t3;
      } else this.popup = null;
    }
    #qs() {
      return new PopupElement({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager });
    }
    render() {
      const { container: t2 } = this;
      t2.classList.add("popupAnnotation");
      t2.role = "comment";
      const e2 = this.popup = this.#qs(), i2 = [];
      for (const t3 of this.elements) {
        t3.popup = e2;
        t3.container.ariaHasPopup = "dialog";
        i2.push(t3.data.id);
        t3.addHighlightArea();
      }
      this.container.setAttribute("aria-controls", i2.map((t3) => `${q}${t3}`).join(","));
      return this.container;
    }
  };
  var PopupElement = class {
    #V = null;
    #Xs = this.#Bs.bind(this);
    #Ys = this.#Ks.bind(this);
    #Js = this.#Qs.bind(this);
    #Zs = this.#ta.bind(this);
    #ea = null;
    #Ct = null;
    #ia = null;
    #na = null;
    #ra = null;
    #sa = null;
    #aa = null;
    #oa = false;
    #la = null;
    #ha = null;
    #F = null;
    #ca = null;
    #da = null;
    #we = null;
    #ua = null;
    #fe = null;
    #pa = null;
    #Hs = null;
    #ga = false;
    #ma = null;
    #fa = null;
    constructor({ container: t2, color: e2, elements: i2, titleObj: n2, modificationDate: r2, contentsObj: s2, richText: a2, parent: o2, rect: l2, parentRect: h2, open: c2, commentManager: d2 = null }) {
      this.#Ct = t2;
      this.#pa = n2;
      this.#ia = s2;
      this.#fe = a2;
      this.#sa = o2;
      this.#ea = e2;
      this.#ua = l2;
      this.#aa = h2;
      this.#ra = i2;
      this.#V = d2;
      this.#ma = i2[0];
      this.#na = PDFDateString.toDateObject(r2);
      this.trigger = i2.flatMap((t3) => t3.getElementsToTriggerPopup());
      if (!d2) {
        this.#ba();
        this.#Ct.hidden = true;
        c2 && this.#ta();
      }
    }
    #ba() {
      if (this.#ha) return;
      this.#ha = new AbortController();
      const { signal: t2 } = this.#ha;
      for (const e2 of this.trigger) {
        e2.addEventListener("click", this.#Zs, { signal: t2 });
        e2.addEventListener("pointerenter", this.#Js, { signal: t2 });
        e2.addEventListener("pointerleave", this.#Ys, { signal: t2 });
        e2.classList.add("popupTriggerArea");
      }
      for (const e2 of this.#ra) e2.container?.addEventListener("keydown", this.#Xs, { signal: t2 });
    }
    #ya() {
      const t2 = this.#ra.find((t3) => t3.hasCommentButton);
      t2 && (this.#da = t2._normalizePoint(t2.commentButtonPosition));
    }
    renderCommentButton() {
      if (this.#ca) {
        this.#ca.parentNode || this.#ma.container.after(this.#ca);
        return;
      }
      this.#da || this.#ya();
      if (!this.#da) return;
      const { signal: t2 } = this.#ha = new AbortController(), e2 = this.#ma.hasOwnCommentButton, togglePopup = () => {
        this.#V.toggleCommentPopup(this, true, void 0, !e2);
      }, showPopup = () => {
        this.#V.toggleCommentPopup(this, false, true, !e2);
      }, hidePopup = () => {
        this.#V.toggleCommentPopup(this, false, false);
      };
      if (e2) {
        this.#ca = this.#ma.container;
        for (const e3 of this.trigger) {
          e3.ariaHasPopup = "dialog";
          e3.ariaControls = "commentPopup";
          e3.addEventListener("keydown", this.#Xs, { signal: t2 });
          e3.addEventListener("click", togglePopup, { signal: t2 });
          e3.addEventListener("pointerenter", showPopup, { signal: t2 });
          e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
          e3.classList.add("popupTriggerArea");
        }
      } else {
        const e3 = this.#ca = document.createElement("button");
        e3.className = "annotationCommentButton";
        const i2 = this.#ma.container;
        e3.style.zIndex = i2.style.zIndex + 1;
        e3.tabIndex = 0;
        e3.ariaHasPopup = "dialog";
        e3.ariaControls = "commentPopup";
        e3.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
        this.#va();
        this.#wa();
        e3.addEventListener("keydown", this.#Xs, { signal: t2 });
        e3.addEventListener("click", togglePopup, { signal: t2 });
        e3.addEventListener("pointerenter", showPopup, { signal: t2 });
        e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
        i2.after(e3);
      }
    }
    #wa() {
      if (this.#ma.extraPopupElement && !this.#ma.editor) return;
      this.#ca || this.renderCommentButton();
      const [t2, e2] = this.#da, { style: i2 } = this.#ca;
      i2.left = `calc(${t2}%)`;
      i2.top = `calc(${e2}% - var(--comment-button-dim))`;
    }
    #va() {
      if (!this.#ma.extraPopupElement) {
        this.#ca || this.renderCommentButton();
        this.#ca.style.backgroundColor = this.commentButtonColor || "";
      }
    }
    get commentButtonColor() {
      const { color: t2, opacity: e2 } = this.#ma.commentData;
      return t2 ? this.#sa._commentManager.makeCommentColor(t2, e2) : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        this.#ca?.focus();
      }, 0);
    }
    getData() {
      const { richText: t2, color: e2, opacity: i2, creationDate: n2, modificationDate: r2 } = this.#ma.commentData;
      return { contentsObj: { str: this.comment }, richText: t2, color: e2, opacity: i2, creationDate: n2, modificationDate: r2 };
    }
    get elementBeforePopup() {
      return this.#ca;
    }
    get comment() {
      this.#fa ||= this.#ma.commentText;
      return this.#fa;
    }
    set comment(t2) {
      t2 !== this.comment && (this.#ma.commentText = this.#fa = t2);
    }
    focus() {
      this.#ma.container?.focus();
    }
    get parentBoundingClientRect() {
      return this.#ma.layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      if (this.#ca) {
        this.#ca.classList.toggle("selected", t2);
        this.#ca.ariaExpanded = e2;
      }
    }
    setSelectedCommentButton(t2) {
      this.#ca.classList.toggle("selected", t2);
    }
    get commentPopupPosition() {
      if (this.#we) return this.#we;
      const { x: t2, y: e2, height: i2 } = this.#ca.getBoundingClientRect(), { x: n2, y: r2, width: s2, height: a2 } = this.#ma.layer.getBoundingClientRect();
      return [(t2 - n2) / s2, (e2 + i2 - r2) / a2];
    }
    set commentPopupPosition(t2) {
      this.#we = t2;
    }
    hasDefaultPopupPosition() {
      return null === this.#we;
    }
    get commentButtonPosition() {
      return this.#da;
    }
    get commentButtonWidth() {
      return this.#ca.getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t2) {
      const [e2, i2] = this.#we || this.commentButtonPosition.map((t3) => t3 / 100), n2 = this.parentBoundingClientRect, { x: r2, y: s2, width: a2, height: o2 } = n2;
      this.#V.showDialog(null, this, r2 + e2 * a2, s2 + i2 * o2, { ...t2, parentDimensions: n2 });
    }
    render() {
      if (this.#la) return;
      const t2 = this.#la = document.createElement("div");
      t2.className = "popup";
      if (this.#ea) {
        const e3 = t2.style.outlineColor = Util.makeHexColor(...this.#ea);
        t2.style.backgroundColor = `color-mix(in srgb, ${e3} 30%, white)`;
      }
      const e2 = document.createElement("span");
      e2.className = "header";
      if (this.#pa?.str) {
        const t3 = document.createElement("span");
        t3.className = "title";
        e2.append(t3);
        ({ dir: t3.dir, str: t3.textContent } = this.#pa);
      }
      t2.append(e2);
      if (this.#na) {
        const t3 = document.createElement("time");
        t3.className = "popupDate";
        t3.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
        t3.setAttribute("data-l10n-args", JSON.stringify({ dateObj: this.#na.valueOf() }));
        t3.dateTime = this.#na.toISOString();
        e2.append(t3);
      }
      renderRichText({ html: this.#Aa || this.#ia.str, dir: this.#ia?.dir, className: "popupContent" }, t2);
      this.#Ct.append(t2);
    }
    get #Aa() {
      const t2 = this.#fe, e2 = this.#ia;
      return !t2?.str || e2?.str && e2.str !== t2.str ? null : this.#fe.html || null;
    }
    get #xa() {
      return this.#Aa?.attributes?.style?.fontSize || 0;
    }
    get #Ea() {
      return this.#Aa?.attributes?.style?.color || null;
    }
    #_a(t2) {
      const e2 = [], i2 = { str: t2, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e2 }] } }, n2 = { style: { color: this.#Ea, fontSize: this.#xa ? `calc(${this.#xa}px * var(--total-scale-factor))` : "" } };
      for (const i3 of t2.split("\n")) e2.push({ name: "span", value: i3, attributes: n2 });
      return i2;
    }
    #Bs(t2) {
      t2.altKey || t2.shiftKey || t2.ctrlKey || t2.metaKey || ("Enter" === t2.key || "Escape" === t2.key && this.#oa) && this.#ta();
    }
    updateEdited({ rect: t2, popup: e2, deleted: i2 }) {
      if (this.#V) {
        if (i2) {
          this.remove();
          this.#fa = null;
        } else if (e2) if (e2.deleted) this.remove();
        else {
          this.#va();
          this.#fa = e2.text;
        }
        if (t2) {
          this.#da = null;
          this.#ya();
          this.#wa();
        }
      } else if (i2 || e2?.deleted) this.remove();
      else {
        this.#ba();
        this.#Hs ||= { contentsObj: this.#ia, richText: this.#fe };
        t2 && (this.#F = null);
        if (e2 && e2.text) {
          this.#fe = this.#_a(e2.text);
          this.#na = PDFDateString.toDateObject(e2.date);
          this.#ia = null;
        }
        this.#la?.remove();
        this.#la = null;
      }
    }
    resetEdited() {
      if (this.#Hs) {
        ({ contentsObj: this.#ia, richText: this.#fe } = this.#Hs);
        this.#Hs = null;
        this.#la?.remove();
        this.#la = null;
        this.#F = null;
      }
    }
    remove() {
      this.#ha?.abort();
      this.#ha = null;
      this.#la?.remove();
      this.#la = null;
      this.#ga = false;
      this.#oa = false;
      this.#ca?.remove();
      this.#ca = null;
      if (this.trigger) for (const t2 of this.trigger) t2.classList.remove("popupTriggerArea");
    }
    #Ta() {
      if (null !== this.#F) return;
      const { page: { view: t2 }, viewport: { rawDims: { pageWidth: e2, pageHeight: i2, pageX: n2, pageY: r2 } } } = this.#sa;
      let s2 = !!this.#aa, a2 = s2 ? this.#aa : this.#ua;
      for (const t3 of this.#ra) if (!a2 || null !== Util.intersect(t3.data.rect, a2)) {
        a2 = t3.data.rect;
        s2 = true;
        break;
      }
      const o2 = Util.normalizeRect([a2[0], t2[3] - a2[1] + t2[1], a2[2], t2[3] - a2[3] + t2[1]]), l2 = s2 ? a2[2] - a2[0] + 5 : 0, h2 = o2[0] + l2, c2 = o2[1];
      this.#F = [100 * (h2 - n2) / e2, 100 * (c2 - r2) / i2];
      const { style: d2 } = this.#Ct;
      d2.left = `${this.#F[0]}%`;
      d2.top = `${this.#F[1]}%`;
    }
    #ta() {
      if (this.#V) this.#V.toggleCommentPopup(this, false);
      else {
        this.#oa = !this.#oa;
        if (this.#oa) {
          this.#Qs();
          this.#Ct.addEventListener("click", this.#Zs);
          this.#Ct.addEventListener("keydown", this.#Xs);
        } else {
          this.#Ks();
          this.#Ct.removeEventListener("click", this.#Zs);
          this.#Ct.removeEventListener("keydown", this.#Xs);
        }
      }
    }
    #Qs() {
      this.#la || this.render();
      if (this.isVisible) this.#oa && this.#Ct.classList.add("focused");
      else {
        this.#Ta();
        this.#Ct.hidden = false;
        this.#Ct.style.zIndex = parseInt(this.#Ct.style.zIndex) + 1e3;
      }
    }
    #Ks() {
      this.#Ct.classList.remove("focused");
      if (!this.#oa && this.isVisible) {
        this.#Ct.hidden = true;
        this.#Ct.style.zIndex = parseInt(this.#Ct.style.zIndex) - 1e3;
      }
    }
    forceHide() {
      this.#ga = this.isVisible;
      this.#ga && (this.#Ct.hidden = true);
    }
    maybeShow() {
      if (!this.#V) {
        this.#ba();
        if (this.#ga) {
          this.#la || this.#Qs();
          this.#ga = false;
          this.#Ct.hidden = false;
        }
      }
    }
    get isVisible() {
      return !this.#V && false === this.#Ct.hidden;
    }
  };
  var FreeTextAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.textContent = t2.data.textContent;
      this.textPosition = t2.data.textPosition;
      this.annotationEditorType = m.FREETEXT;
    }
    render() {
      this.container.classList.add("freeTextAnnotation");
      if (this.textContent) {
        const t2 = this.contentElement = document.createElement("div");
        t2.classList.add("annotationTextContent");
        t2.setAttribute("role", "comment");
        for (const e2 of this.textContent) {
          const i2 = document.createElement("span");
          i2.textContent = e2;
          t2.append(i2);
        }
        this.container.append(t2);
      }
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this._editOnDoubleClick();
      return this.container;
    }
  };
  var LineAnnotationElement = class extends AnnotationElement {
    #Sa = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), r2 = this.#Sa = this.svgFactory.createElement("svg:line");
      r2.setAttribute("x1", t2.rect[2] - t2.lineCoordinates[0]);
      r2.setAttribute("y1", t2.rect[3] - t2.lineCoordinates[1]);
      r2.setAttribute("x2", t2.rect[2] - t2.lineCoordinates[2]);
      r2.setAttribute("y2", t2.rect[3] - t2.lineCoordinates[3]);
      r2.setAttribute("stroke-width", t2.borderStyle.width || 1);
      r2.setAttribute("stroke", "transparent");
      r2.setAttribute("fill", "transparent");
      n2.append(r2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Sa;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  var SquareAnnotationElement = class extends AnnotationElement {
    #Ca = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), r2 = t2.borderStyle.width, s2 = this.#Ca = this.svgFactory.createElement("svg:rect");
      s2.setAttribute("x", r2 / 2);
      s2.setAttribute("y", r2 / 2);
      s2.setAttribute("width", e2 - r2);
      s2.setAttribute("height", i2 - r2);
      s2.setAttribute("stroke-width", r2 || 1);
      s2.setAttribute("stroke", "transparent");
      s2.setAttribute("fill", "transparent");
      n2.append(s2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Ca;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  var CircleAnnotationElement = class extends AnnotationElement {
    #Da = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), r2 = t2.borderStyle.width, s2 = this.#Da = this.svgFactory.createElement("svg:ellipse");
      s2.setAttribute("cx", e2 / 2);
      s2.setAttribute("cy", i2 / 2);
      s2.setAttribute("rx", e2 / 2 - r2 / 2);
      s2.setAttribute("ry", i2 / 2 - r2 / 2);
      s2.setAttribute("stroke-width", r2 || 1);
      s2.setAttribute("stroke", "transparent");
      s2.setAttribute("fill", "transparent");
      n2.append(s2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Da;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  var PolylineAnnotationElement = class extends AnnotationElement {
    #Pa = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.containerClassName = "polylineAnnotation";
      this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t2, vertices: e2, borderStyle: i2, popupRef: n2 }, width: r2, height: s2 } = this;
      if (!e2) return this.container;
      const a2 = this.svgFactory.create(r2, s2, true);
      let o2 = [];
      for (let i3 = 0, n3 = e2.length; i3 < n3; i3 += 2) {
        const n4 = e2[i3] - t2[0], r3 = t2[3] - e2[i3 + 1];
        o2.push(`${n4},${r3}`);
      }
      o2 = o2.join(" ");
      const l2 = this.#Pa = this.svgFactory.createElement(this.svgElementName);
      l2.setAttribute("points", o2);
      l2.setAttribute("stroke-width", i2.width || 1);
      l2.setAttribute("stroke", "transparent");
      l2.setAttribute("fill", "transparent");
      a2.append(l2);
      this.container.append(a2);
      if (!n2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Pa;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  var PolygonAnnotationElement = class extends PolylineAnnotationElement {
    constructor(t2) {
      super(t2);
      this.containerClassName = "polygonAnnotation";
      this.svgElementName = "svg:polygon";
    }
  };
  var CaretAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("caretAnnotation");
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
  };
  var InkAnnotationElement = class extends AnnotationElement {
    #Ma = null;
    #ka = [];
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.containerClassName = "inkAnnotation";
      this.svgElementName = "svg:polyline";
      this.annotationEditorType = "InkHighlight" === this.data.it ? m.HIGHLIGHT : m.INK;
    }
    #Ia(t2, e2) {
      switch (t2) {
        case 90:
          return { transform: `rotate(90) translate(${-e2[0]},${e2[1]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
        case 180:
          return { transform: `rotate(180) translate(${-e2[2]},${e2[1]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
        case 270:
          return { transform: `rotate(270) translate(${-e2[2]},${e2[3]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
        default:
          return { transform: `translate(${-e2[0]},${e2[3]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
      }
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t2, rotation: e2, inkLists: i2, borderStyle: n2, popupRef: r2 } } = this, { transform: s2, width: a2, height: o2 } = this.#Ia(e2, t2), l2 = this.svgFactory.create(a2, o2, true), h2 = this.#Ma = this.svgFactory.createElement("svg:g");
      l2.append(h2);
      h2.setAttribute("stroke-width", n2.width || 1);
      h2.setAttribute("stroke-linecap", "round");
      h2.setAttribute("stroke-linejoin", "round");
      h2.setAttribute("stroke-miterlimit", 10);
      h2.setAttribute("stroke", "transparent");
      h2.setAttribute("fill", "transparent");
      h2.setAttribute("transform", s2);
      for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
        const e4 = this.svgFactory.createElement(this.svgElementName);
        this.#ka.push(e4);
        e4.setAttribute("points", i2[t3].join(","));
        h2.append(e4);
      }
      if (!r2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.append(l2);
      this._editOnDoubleClick();
      return this.container;
    }
    updateEdited(t2) {
      super.updateEdited(t2);
      const { thickness: e2, points: i2, rect: n2 } = t2, r2 = this.#Ma;
      e2 >= 0 && r2.setAttribute("stroke-width", e2 || 1);
      if (i2) for (let t3 = 0, e3 = this.#ka.length; t3 < e3; t3++) this.#ka[t3].setAttribute("points", i2[t3].join(","));
      if (n2) {
        const { transform: t3, width: e3, height: i3 } = this.#Ia(this.data.rotation, n2);
        r2.parentElement.setAttribute("viewBox", `0 0 ${e3} ${i3}`);
        r2.setAttribute("transform", t3);
      }
    }
    getElementsToTriggerPopup() {
      return this.#ka;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  var HighlightAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      this.annotationEditorType = m.HIGHLIGHT;
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("highlightAnnotation");
      this._editOnDoubleClick();
      if (t2) {
        const e3 = document.createElement("mark");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var UnderlineAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("underlineAnnotation");
      if (t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var SquigglyAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("squigglyAnnotation");
      if (t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var StrikeOutAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("strikeoutAnnotation");
      if (t2) {
        const e3 = document.createElement("s");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var StampAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.annotationEditorType = m.STAMP;
    }
    render() {
      this.container.classList.add("stampAnnotation");
      this.container.setAttribute("role", "img");
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this._editOnDoubleClick();
      return this.container;
    }
  };
  var FileAttachmentAnnotationElement = class extends AnnotationElement {
    #Fa = null;
    constructor(t2) {
      super(t2, { isRenderable: true });
      const { file: e2 } = this.data;
      this.filename = e2.filename;
      this.content = e2.content;
      this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, ...e2 });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t2, data: e2 } = this;
      let i2;
      if (e2.hasAppearance || 0 === e2.fillAlpha) i2 = document.createElement("div");
      else {
        i2 = document.createElement("img");
        i2.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e2.name) ? "paperclip" : "pushpin"}.svg`;
        e2.fillAlpha && e2.fillAlpha < 1 && (i2.style = `filter: opacity(${Math.round(100 * e2.fillAlpha)}%);`);
      }
      i2.addEventListener("dblclick", this.#Ra.bind(this));
      this.#Fa = i2;
      const { isMac: n2 } = FeatureTest.platform;
      t2.addEventListener("keydown", (t3) => {
        "Enter" === t3.key && (n2 ? t3.metaKey : t3.ctrlKey) && this.#Ra();
      });
      if (!e2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      } else i2.classList.add("popupTriggerArea");
      t2.append(i2);
      return t2;
    }
    getElementsToTriggerPopup() {
      return this.#Fa;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
    #Ra() {
      this.downloadManager?.openOrDownloadData(this.content, this.filename);
    }
  };
  var AnnotationLayer = class _AnnotationLayer {
    #Ba = null;
    #Oa = null;
    #j = null;
    #La = /* @__PURE__ */ new Map();
    #Na = null;
    #Ua = null;
    #ra = [];
    #Ha = false;
    constructor({ div: t2, accessibilityManager: e2, annotationCanvasMap: i2, annotationEditorUIManager: n2, page: r2, viewport: s2, structTreeLayer: a2, commentManager: o2, linkService: l2, annotationStorage: h2 }) {
      this.div = t2;
      this.#Ba = e2;
      this.#Oa = i2;
      this.#Na = a2 || null;
      this.#Ua = l2 || null;
      this.#j = h2 || new AnnotationStorage();
      this.page = r2;
      this.viewport = s2;
      this.zIndex = 0;
      this._annotationEditorUIManager = n2;
      this._commentManager = o2 || null;
    }
    hasEditableAnnotations() {
      return this.#La.size > 0;
    }
    async render(t2) {
      const { annotations: e2 } = t2, i2 = this.div;
      setLayerDimensions(i2, this.viewport);
      const n2 = /* @__PURE__ */ new Map(), r2 = [], s2 = { data: null, layer: i2, linkService: this.#Ua, downloadManager: t2.downloadManager, imageResourcesPath: t2.imageResourcesPath || "", renderForms: false !== t2.renderForms, svgFactory: new DOMSVGFactory(), annotationStorage: this.#j, enableComment: true === t2.enableComment, enableScripting: true === t2.enableScripting, hasJSActions: t2.hasJSActions, fieldObjects: t2.fieldObjects, parent: this, elements: null };
      for (const t3 of e2) {
        if (t3.noHTML) continue;
        const e3 = t3.annotationType === C.POPUP;
        if (e3) {
          const e4 = n2.get(t3.id);
          if (!e4) continue;
          if (!this._commentManager) {
            r2.push(t3);
            continue;
          }
          s2.elements = e4;
        } else if (t3.rect[2] === t3.rect[0] || t3.rect[3] === t3.rect[1]) continue;
        s2.data = t3;
        const i3 = AnnotationElementFactory.create(s2);
        if (!i3.isRenderable) continue;
        if (!e3) {
          this.#ra.push(i3);
          t3.popupRef && n2.getOrInsertComputed(t3.popupRef, makeArr).push(i3);
        }
        const a2 = i3.render();
        t3.hidden && (a2.style.visibility = "hidden");
        if (i3._isEditable) {
          this.#La.set(i3.data.id, i3);
          this._annotationEditorUIManager?.renderAnnotationElement(i3);
        }
      }
      await this.#za();
      for (const t3 of r2) {
        const e3 = s2.elements = n2.get(t3.id);
        s2.data = t3;
        const i3 = AnnotationElementFactory.create(s2);
        if (!i3.isRenderable) continue;
        const r3 = i3.render();
        i3.contentElement.id = `${q}${t3.id}`;
        t3.hidden && (r3.style.visibility = "hidden");
        e3.at(-1).container.after(r3);
      }
      this.#ja();
    }
    async #za() {
      if (0 === this.#ra.length) return;
      this.div.replaceChildren();
      const t2 = [];
      if (!this.#Ha) {
        this.#Ha = true;
        for (const { contentElement: e3, data: { id: i2 } } of this.#ra) {
          const n2 = e3.id = `${q}${i2}`;
          t2.push(this.#Na?.getAriaAttributes(n2).then((t3) => {
            if (t3) for (const [i3, n3] of t3) e3.setAttribute(i3, n3);
          }));
        }
      }
      this.#ra.sort(({ data: { rect: [t3, e3, i2, n2] } }, { data: { rect: [r2, s2, a2, o2] } }) => {
        if (t3 === i2 && e3 === n2) return 1;
        if (r2 === a2 && s2 === o2) return -1;
        const l2 = (e3 + n2) / 2, h2 = (s2 + o2) / 2;
        if (l2 >= o2 && h2 <= e3) return -1;
        if (h2 >= n2 && l2 <= s2) return 1;
        return (t3 + i2) / 2 - (r2 + a2) / 2;
      });
      const e2 = document.createDocumentFragment();
      for (const t3 of this.#ra) {
        e2.append(t3.container);
        this._commentManager ? (t3.extraPopupElement?.popup || t3.popup)?.renderCommentButton() : t3.extraPopupElement && e2.append(t3.extraPopupElement.render());
      }
      this.div.append(e2);
      await Promise.all(t2);
      if (this.#Ba) for (const t3 of this.#ra) this.#Ba.addPointerInTextLayer(t3.contentElement, false);
    }
    async addLinkAnnotations(t2) {
      const e2 = { data: null, layer: this.div, linkService: this.#Ua, svgFactory: new DOMSVGFactory(), parent: this };
      for (const i2 of t2) {
        i2.borderStyle ||= _AnnotationLayer._defaultBorderStyle;
        e2.data = i2;
        const t3 = AnnotationElementFactory.create(e2);
        if (t3.isRenderable) {
          t3.render();
          t3.contentElement.id = `${q}${i2.id}`;
          this.#ra.push(t3);
        }
      }
      await this.#za();
    }
    update({ viewport: t2 }) {
      const e2 = this.div;
      this.viewport = t2;
      setLayerDimensions(e2, { rotation: t2.rotation });
      this.#ja();
      e2.hidden = false;
    }
    #ja() {
      if (!this.#Oa) return;
      const t2 = this.div;
      for (const [e2, i2] of this.#Oa) {
        const n2 = t2.querySelector(`[data-annotation-id="${e2}"]`);
        if (!n2) continue;
        i2.className = "annotationContent";
        const { firstChild: r2 } = n2;
        r2 ? "CANVAS" === r2.nodeName ? r2.replaceWith(i2) : r2.classList.contains("annotationContent") ? r2.after(i2) : r2.before(i2) : n2.append(i2);
        const s2 = this.#La.get(e2);
        if (s2) if (s2._hasNoCanvas) {
          this._annotationEditorUIManager?.setMissingCanvas(e2, n2.id, i2);
          s2._hasNoCanvas = false;
        } else s2.canvas = i2;
      }
      this.#Oa.clear();
    }
    getEditableAnnotations() {
      return this.#La.values();
    }
    getEditableAnnotation(t2) {
      return this.#La.get(t2);
    }
    addFakeAnnotation(t2) {
      const { div: e2 } = this, { id: i2, rotation: n2 } = t2, r2 = new EditorAnnotationElement({ data: { id: i2, rect: t2.getPDFRect(), rotation: n2 }, editor: t2, layer: e2, parent: this, enableComment: !!this._commentManager, linkService: this.#Ua, annotationStorage: this.#j });
      r2.render();
      r2.contentElement.id = `${q}${i2}`;
      r2.createOrUpdatePopup();
      this.#ra.push(r2);
      return r2;
    }
    removeAnnotation(t2) {
      const e2 = this.#ra.findIndex((e3) => e3.data.id === t2);
      if (e2 < 0) return;
      const [i2] = this.#ra.splice(e2, 1);
      this.#Ba?.removePointerInTextLayer(i2.contentElement);
    }
    updateFakeAnnotations(t2) {
      if (0 !== t2.length) {
        for (const e2 of t2) e2.updateFakeAnnotationElement(this);
        this.#za();
      }
    }
    togglePointerEvents(t2 = false) {
      this.div.classList.toggle("disabled", !t2);
    }
    static get _defaultBorderStyle() {
      return shadow(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: D, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 }));
    }
  };
  var Wt = /\r\n?|\n/g;
  var FreeTextEditor = class _FreeTextEditor extends AnnotationEditor {
    #Ga = "";
    #Wa = `${this.id}-editor`;
    #Va = null;
    #xa;
    _colorPicker = null;
    static _freeTextDefaultContent = "";
    static _internalPadding = 0;
    static _defaultColor = null;
    static _defaultFontSize = 10;
    static get _keyboardManager() {
      const t2 = _FreeTextEditor.prototype, arrowChecker = (t3) => t3.isEmpty(), e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t2.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t2.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t2._translateEmpty, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2._translateEmpty, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t2._translateEmpty, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2._translateEmpty, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t2._translateEmpty, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2._translateEmpty, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t2._translateEmpty, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2._translateEmpty, { args: [0, i2], checker: arrowChecker }]]));
    }
    static _type = "freetext";
    static _editorType = m.FREETEXT;
    constructor(t2) {
      super({ ...t2, name: "freeTextEditor" });
      this.color = t2.color || _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
      this.#xa = t2.fontSize || _FreeTextEditor._defaultFontSize;
      this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
      this.canAddComment = false;
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      const i2 = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(i2.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case f.FREETEXT_SIZE:
          _FreeTextEditor._defaultFontSize = e2;
          break;
        case f.FREETEXT_COLOR:
          _FreeTextEditor._defaultColor = e2;
      }
    }
    updateParams(t2, e2) {
      switch (t2) {
        case f.FREETEXT_SIZE:
          this.#$a(e2);
          break;
        case f.FREETEXT_COLOR:
          this.#va(e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[f.FREETEXT_SIZE, _FreeTextEditor._defaultFontSize], [f.FREETEXT_COLOR, _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
    }
    get propertiesToUpdate() {
      return [[f.FREETEXT_SIZE, this.#xa], [f.FREETEXT_COLOR, this.color]];
    }
    get toolbarButtons() {
      this._colorPicker ||= new BasicColorPicker(this);
      return [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return f.FREETEXT_COLOR;
    }
    #$a(t2) {
      const setFontsize = (t3) => {
        this.editorDiv.style.fontSize = `calc(${t3}px * var(--total-scale-factor))`;
        this.translate(0, -(t3 - this.#xa) * this.parentScale);
        this.#xa = t3;
        this.#qa();
      }, e2 = this.#xa;
      this.addCommands({ cmd: setFontsize.bind(this, t2), undo: setFontsize.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: f.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
    }
    onUpdatedColor() {
      this.editorDiv.style.color = this.color;
      this._colorPicker?.update(this.color);
      super.onUpdatedColor();
    }
    #va(t2) {
      const setColor = (t3) => {
        this.color = t3;
        this.onUpdatedColor();
      }, e2 = this.color;
      this.addCommands({ cmd: setColor.bind(this, t2), undo: setColor.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: f.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
    }
    _translateEmpty(t2, e2) {
      this._uiManager.translateSelectedEditors(t2, e2, true);
    }
    getInitialTranslation() {
      const t2 = this.parentScale;
      return [-_FreeTextEditor._internalPadding * t2, -(_FreeTextEditor._internalPadding + this.#xa) * t2];
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
      }
    }
    enableEditMode() {
      if (!super.enableEditMode()) return false;
      this.overlayDiv.classList.remove("enabled");
      this.editorDiv.contentEditable = true;
      this._isDraggable = false;
      this.div.removeAttribute("aria-activedescendant");
      this.#Va = new AbortController();
      const t2 = this._uiManager.combinedSignal(this.#Va);
      this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t2 });
      return true;
    }
    disableEditMode() {
      if (!super.disableEditMode()) return false;
      this.overlayDiv.classList.add("enabled");
      this.editorDiv.contentEditable = false;
      this.div.setAttribute("aria-activedescendant", this.#Wa);
      this._isDraggable = true;
      this.#Va?.abort();
      this.#Va = null;
      this.div.focus({ preventScroll: true });
      this.isEditing = false;
      this.parent.div.classList.add("freetextEditing");
      return true;
    }
    focusin(t2) {
      if (this._focusEventsAllowed) {
        super.focusin(t2);
        t2.target !== this.editorDiv && this.editorDiv.focus();
      }
    }
    onceAdded(t2) {
      if (!this.width) {
        this.enableEditMode();
        t2 && this.editorDiv.focus();
        this._initialOptions?.isCentered && this.center();
        this._initialOptions = null;
      }
    }
    isEmpty() {
      return !this.editorDiv || "" === this.editorDiv.innerText.trim();
    }
    remove() {
      this.isEditing = false;
      if (this.parent) {
        this.parent.setEditingState(true);
        this.parent.div.classList.add("freetextEditing");
      }
      super.remove();
    }
    #Xa() {
      const t2 = [];
      this.editorDiv.normalize();
      let e2 = null;
      for (const i2 of this.editorDiv.childNodes) if (e2?.nodeType !== Node.TEXT_NODE || "BR" !== i2.nodeName) {
        t2.push(_FreeTextEditor.#Ya(i2));
        e2 = i2;
      }
      return t2.join("\n");
    }
    #qa() {
      const [t2, e2] = this.parentDimensions;
      let i2;
      if (this.isAttachedToDOM) i2 = this.div.getBoundingClientRect();
      else {
        const { currentLayer: t3, div: e3 } = this, n2 = e3.style.display, r2 = e3.classList.contains("hidden");
        e3.classList.remove("hidden");
        e3.style.display = "hidden";
        t3.div.append(this.div);
        i2 = e3.getBoundingClientRect();
        e3.remove();
        e3.style.display = n2;
        e3.classList.toggle("hidden", r2);
      }
      if (this.rotation % 180 == this.parentRotation % 180) {
        this.width = i2.width / t2;
        this.height = i2.height / e2;
      } else {
        this.width = i2.height / t2;
        this.height = i2.width / e2;
      }
      this.fixAndSetPosition();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit();
      this.disableEditMode();
      const t2 = this.#Ga, e2 = this.#Ga = this.#Xa().trimEnd();
      if (t2 === e2) return;
      const setText = (t3) => {
        this.#Ga = t3;
        if (t3) {
          this.#Ka();
          this._uiManager.rebuild(this);
          this.#qa();
        } else this.remove();
      };
      this.addCommands({ cmd: () => {
        setText(e2);
      }, undo: () => {
        setText(t2);
      }, mustExec: false });
      this.#qa();
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode();
      this.editorDiv.focus();
    }
    keydown(t2) {
      if (t2.target === this.div && "Enter" === t2.key) {
        this.enterInEditMode();
        t2.preventDefault();
      }
    }
    editorDivKeydown(t2) {
      _FreeTextEditor._keyboardManager.exec(this, t2);
    }
    editorDivFocus(t2) {
      this.isEditing = true;
    }
    editorDivBlur(t2) {
      this.isEditing = false;
    }
    editorDivInput(t2) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment");
      this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox");
      this.editorDiv.setAttribute("aria-multiline", true);
    }
    get canChangeContent() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy || this.annotationElementId) {
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      this.editorDiv = document.createElement("div");
      this.editorDiv.className = "internal";
      this.editorDiv.setAttribute("id", this.#Wa);
      this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
      this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
      this.enableEditing();
      this.editorDiv.contentEditable = true;
      const { style: i2 } = this.editorDiv;
      i2.fontSize = `calc(${this.#xa}px * var(--total-scale-factor))`;
      i2.color = this.color;
      this.div.append(this.editorDiv);
      this.overlayDiv = document.createElement("div");
      this.overlayDiv.classList.add("overlay", "enabled");
      this.div.append(this.overlayDiv);
      if (this._isCopy || this.annotationElementId) {
        const [i3, n2] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: r2 } = this._initialData;
          let [s2, a2] = this.getInitialTranslation();
          [s2, a2] = this.pageTranslationToScreen(s2, a2);
          const [o2, l2] = this.pageDimensions, [h2, c2] = this.pageTranslation;
          let d2, u2;
          switch (this.rotation) {
            case 0:
              d2 = t2 + (r2[0] - h2) / o2;
              u2 = e2 + this.height - (r2[1] - c2) / l2;
              break;
            case 90:
              d2 = t2 + (r2[0] - h2) / o2;
              u2 = e2 - (r2[1] - c2) / l2;
              [s2, a2] = [a2, -s2];
              break;
            case 180:
              d2 = t2 - this.width + (r2[0] - h2) / o2;
              u2 = e2 - (r2[1] - c2) / l2;
              [s2, a2] = [-s2, -a2];
              break;
            case 270:
              d2 = t2 + (r2[0] - h2 - this.height * l2) / o2;
              u2 = e2 + (r2[1] - c2 - this.width * o2) / l2;
              [s2, a2] = [-a2, s2];
          }
          this.setAt(d2 * i3, u2 * n2, s2, a2);
        } else this._moveAfterPaste(t2, e2);
        this.#Ka();
        this._isDraggable = true;
        this.editorDiv.contentEditable = false;
      } else {
        this._isDraggable = false;
        this.editorDiv.contentEditable = true;
      }
      return this.div;
    }
    static #Ya(t2) {
      return (t2.nodeType === Node.TEXT_NODE ? t2.nodeValue : t2.innerText).replaceAll(Wt, "");
    }
    editorDivPaste(t2) {
      const e2 = t2.clipboardData || window.clipboardData, { types: i2 } = e2;
      if (1 === i2.length && "text/plain" === i2[0]) return;
      t2.preventDefault();
      const n2 = _FreeTextEditor.#Ja(e2.getData("text") || "").replaceAll(Wt, "\n");
      if (!n2) return;
      const r2 = window.getSelection();
      if (!r2.rangeCount) return;
      this.editorDiv.normalize();
      r2.deleteFromDocument();
      const s2 = r2.getRangeAt(0);
      if (!n2.includes("\n")) {
        s2.insertNode(document.createTextNode(n2));
        this.editorDiv.normalize();
        r2.collapseToStart();
        return;
      }
      const { startContainer: a2, startOffset: o2 } = s2, l2 = [], h2 = [];
      if (a2.nodeType === Node.TEXT_NODE) {
        const t3 = a2.parentElement;
        h2.push(a2.nodeValue.slice(o2).replaceAll(Wt, ""));
        if (t3 !== this.editorDiv) {
          let e3 = l2;
          for (const i3 of this.editorDiv.childNodes) i3 !== t3 ? e3.push(_FreeTextEditor.#Ya(i3)) : e3 = h2;
        }
        l2.push(a2.nodeValue.slice(0, o2).replaceAll(Wt, ""));
      } else if (a2 === this.editorDiv) {
        let t3 = l2, e3 = 0;
        for (const i3 of this.editorDiv.childNodes) {
          e3++ === o2 && (t3 = h2);
          t3.push(_FreeTextEditor.#Ya(i3));
        }
      }
      this.#Ga = `${l2.join("\n")}${n2}${h2.join("\n")}`;
      this.#Ka();
      const c2 = new Range();
      let d2 = Math.sumPrecise(l2.map((t3) => t3.length));
      for (const { firstChild: t3 } of this.editorDiv.childNodes) if (t3.nodeType === Node.TEXT_NODE) {
        const e3 = t3.nodeValue.length;
        if (d2 <= e3) {
          c2.setStart(t3, d2);
          c2.setEnd(t3, d2);
          break;
        }
        d2 -= e3;
      }
      r2.removeAllRanges();
      r2.addRange(c2);
    }
    #Ka() {
      this.editorDiv.replaceChildren();
      if (this.#Ga) for (const t2 of this.#Ga.split("\n")) {
        const e2 = document.createElement("div");
        e2.append(t2 ? document.createTextNode(t2) : document.createElement("br"));
        this.editorDiv.append(e2);
      }
    }
    #Qa() {
      return this.#Ga.replaceAll("\xA0", " ");
    }
    static #Ja(t2) {
      return t2.replaceAll(" ", "\xA0");
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      const t2 = _FreeTextEditor._internalPadding * this.parentScale;
      return this.getRect(t2, t2);
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null;
      if (t2 instanceof FreeTextAnnotationElement) {
        const { data: { defaultAppearanceData: { fontSize: e3, fontColor: i3 }, rect: r3, rotation: s2, id: a2, popupRef: o2, richText: l2, contentsObj: h2, creationDate: c2, modificationDate: d2 }, textContent: u2, textPosition: p2, parent: { page: { pageNumber: g2 } } } = t2;
        if (!u2 || 0 === u2.length) return null;
        n2 = t2 = { annotationType: m.FREETEXT, color: Array.from(i3), fontSize: e3, value: u2.join("\n"), position: p2, pageIndex: g2 - 1, rect: r3.slice(0), rotation: s2, annotationElementId: a2, id: a2, deleted: false, popupRef: o2, comment: h2?.str || null, richText: l2, creationDate: c2, modificationDate: d2 };
      }
      const r2 = await super.deserialize(t2, e2, i2);
      r2.#xa = t2.fontSize;
      r2.color = Util.makeHexColor(...t2.color);
      r2.#Ga = _FreeTextEditor.#Ja(t2.value);
      r2._initialData = n2;
      t2.comment && r2.setCommentData(t2);
      return r2;
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i2 = Object.assign(super.serialize(t2), { color: e2, fontSize: this.#xa, value: this.#Qa() });
      this.addComment(i2);
      if (t2) {
        i2.isCopy = true;
        return i2;
      }
      if (this.annotationElementId && !this.#Za(i2)) return null;
      i2.id = this.annotationElementId;
      return i2;
    }
    #Za(t2) {
      const { value: e2, fontSize: i2, color: n2, pageIndex: r2 } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || t2.value !== e2 || t2.fontSize !== i2 || t2.color.some((t3, e3) => t3 !== n2[e3]) || t2.pageIndex !== r2;
    }
    renderAnnotationElement(t2) {
      const e2 = super.renderAnnotationElement(t2);
      if (!e2) return null;
      const { style: i2 } = e2;
      i2.fontSize = `calc(${this.#xa}px * var(--total-scale-factor))`;
      i2.color = this.color;
      e2.replaceChildren();
      for (const t3 of this.#Ga.split("\n")) {
        const i3 = document.createElement("div");
        i3.append(t3 ? document.createTextNode(t3) : document.createElement("br"));
        e2.append(i3);
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: this.#Ga } });
      return e2;
    }
    resetAnnotationElement(t2) {
      super.resetAnnotationElement(t2);
      t2.resetEdited();
    }
  };
  var Outline = class {
    static PRECISION = 1e-4;
    toSVGPath() {
      unreachable("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      unreachable("Abstract getter `box` must be implemented.");
    }
    serialize(t2, e2) {
      unreachable("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t2, e2, i2, n2, r2, s2) {
      s2 ||= new Float32Array(t2.length);
      for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) {
        s2[a2] = e2 + t2[a2] * n2;
        s2[a2 + 1] = i2 + t2[a2 + 1] * r2;
      }
      return s2;
    }
    static _rescaleAndSwap(t2, e2, i2, n2, r2, s2) {
      s2 ||= new Float32Array(t2.length);
      for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) {
        s2[a2] = e2 + t2[a2 + 1] * n2;
        s2[a2 + 1] = i2 + t2[a2] * r2;
      }
      return s2;
    }
    static _translate(t2, e2, i2, n2) {
      n2 ||= new Float32Array(t2.length);
      for (let r2 = 0, s2 = t2.length; r2 < s2; r2 += 2) {
        n2[r2] = e2 + t2[r2];
        n2[r2 + 1] = i2 + t2[r2 + 1];
      }
      return n2;
    }
    static svgRound(t2) {
      return Math.round(1e4 * t2);
    }
    static _normalizePoint(t2, e2, i2, n2, r2) {
      switch (r2) {
        case 90:
          return [1 - e2 / i2, t2 / n2];
        case 180:
          return [1 - t2 / i2, 1 - e2 / n2];
        case 270:
          return [e2 / i2, 1 - t2 / n2];
        default:
          return [t2 / i2, e2 / n2];
      }
    }
    static _normalizePagePoint(t2, e2, i2) {
      switch (i2) {
        case 90:
          return [1 - e2, t2];
        case 180:
          return [1 - t2, 1 - e2];
        case 270:
          return [e2, 1 - t2];
        default:
          return [t2, e2];
      }
    }
    static createBezierPoints(t2, e2, i2, n2, r2, s2) {
      return [(t2 + 5 * i2) / 6, (e2 + 5 * n2) / 6, (5 * i2 + r2) / 6, (5 * n2 + s2) / 6, (i2 + r2) / 2, (n2 + s2) / 2];
    }
  };
  var FreeDrawOutliner = class _FreeDrawOutliner {
    #to;
    #eo = [];
    #io;
    #no;
    #ro = [];
    #so = new Float32Array(18);
    #ao;
    #oo;
    #lo;
    #ho;
    #co;
    #do;
    #uo = [];
    static #po = 8;
    static #go = 2;
    static #mo = _FreeDrawOutliner.#po + _FreeDrawOutliner.#go;
    constructor({ x: t2, y: e2 }, i2, n2, r2, s2, a2 = 0) {
      this.#to = i2;
      this.#do = r2 * n2;
      this.#no = s2;
      this.#so.set([NaN, NaN, NaN, NaN, t2, e2], 6);
      this.#io = a2;
      this.#ho = _FreeDrawOutliner.#po * n2;
      this.#lo = _FreeDrawOutliner.#mo * n2;
      this.#co = n2;
      this.#uo.push(t2, e2);
    }
    isEmpty() {
      return isNaN(this.#so[8]);
    }
    #fo() {
      const t2 = this.#so.subarray(4, 6), e2 = this.#so.subarray(16, 18), [i2, n2, r2, s2] = this.#to;
      return [(this.#ao + (t2[0] - e2[0]) / 2 - i2) / r2, (this.#oo + (t2[1] - e2[1]) / 2 - n2) / s2, (this.#ao + (e2[0] - t2[0]) / 2 - i2) / r2, (this.#oo + (e2[1] - t2[1]) / 2 - n2) / s2];
    }
    add({ x: t2, y: e2 }) {
      this.#ao = t2;
      this.#oo = e2;
      const [i2, n2, r2, s2] = this.#to;
      let [a2, o2, l2, h2] = this.#so.subarray(8, 12);
      const c2 = t2 - l2, d2 = e2 - h2, u2 = Math.hypot(c2, d2);
      if (u2 < this.#lo) return false;
      const p2 = u2 - this.#ho, g2 = p2 / u2, m2 = g2 * c2, f2 = g2 * d2;
      let b2 = a2, y2 = o2;
      a2 = l2;
      o2 = h2;
      l2 += m2;
      h2 += f2;
      this.#uo?.push(t2, e2);
      const v2 = m2 / p2, w2 = -f2 / p2 * this.#do, A2 = v2 * this.#do;
      this.#so.set(this.#so.subarray(2, 8), 0);
      this.#so.set([l2 + w2, h2 + A2], 4);
      this.#so.set(this.#so.subarray(14, 18), 12);
      this.#so.set([l2 - w2, h2 - A2], 16);
      if (isNaN(this.#so[6])) {
        if (0 === this.#ro.length) {
          this.#so.set([a2 + w2, o2 + A2], 2);
          this.#ro.push(NaN, NaN, NaN, NaN, (a2 + w2 - i2) / r2, (o2 + A2 - n2) / s2);
          this.#so.set([a2 - w2, o2 - A2], 14);
          this.#eo.push(NaN, NaN, NaN, NaN, (a2 - w2 - i2) / r2, (o2 - A2 - n2) / s2);
        }
        this.#so.set([b2, y2, a2, o2, l2, h2], 6);
        return !this.isEmpty();
      }
      this.#so.set([b2, y2, a2, o2, l2, h2], 6);
      if (Math.abs(Math.atan2(y2 - o2, b2 - a2) - Math.atan2(f2, m2)) < Math.PI / 2) {
        [a2, o2, l2, h2] = this.#so.subarray(2, 6);
        this.#ro.push(NaN, NaN, NaN, NaN, ((a2 + l2) / 2 - i2) / r2, ((o2 + h2) / 2 - n2) / s2);
        [a2, o2, b2, y2] = this.#so.subarray(14, 18);
        this.#eo.push(NaN, NaN, NaN, NaN, ((b2 + a2) / 2 - i2) / r2, ((y2 + o2) / 2 - n2) / s2);
        return true;
      }
      [b2, y2, a2, o2, l2, h2] = this.#so.subarray(0, 6);
      this.#ro.push(((b2 + 5 * a2) / 6 - i2) / r2, ((y2 + 5 * o2) / 6 - n2) / s2, ((5 * a2 + l2) / 6 - i2) / r2, ((5 * o2 + h2) / 6 - n2) / s2, ((a2 + l2) / 2 - i2) / r2, ((o2 + h2) / 2 - n2) / s2);
      [l2, h2, a2, o2, b2, y2] = this.#so.subarray(12, 18);
      this.#eo.push(((b2 + 5 * a2) / 6 - i2) / r2, ((y2 + 5 * o2) / 6 - n2) / s2, ((5 * a2 + l2) / 6 - i2) / r2, ((5 * o2 + h2) / 6 - n2) / s2, ((a2 + l2) / 2 - i2) / r2, ((o2 + h2) / 2 - n2) / s2);
      return true;
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t2 = this.#ro, e2 = this.#eo;
      if (isNaN(this.#so[6]) && !this.isEmpty()) return this.#bo();
      const i2 = [];
      i2.push(`M${t2[4]} ${t2[5]}`);
      for (let e3 = 6; e3 < t2.length; e3 += 6) isNaN(t2[e3]) ? i2.push(`L${t2[e3 + 4]} ${t2[e3 + 5]}`) : i2.push(`C${t2[e3]} ${t2[e3 + 1]} ${t2[e3 + 2]} ${t2[e3 + 3]} ${t2[e3 + 4]} ${t2[e3 + 5]}`);
      this.#yo(i2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) isNaN(e2[t3]) ? i2.push(`L${e2[t3 + 4]} ${e2[t3 + 5]}`) : i2.push(`C${e2[t3]} ${e2[t3 + 1]} ${e2[t3 + 2]} ${e2[t3 + 3]} ${e2[t3 + 4]} ${e2[t3 + 5]}`);
      this.#vo(i2);
      return i2.join(" ");
    }
    #bo() {
      const [t2, e2, i2, n2] = this.#to, [r2, s2, a2, o2] = this.#fo();
      return `M${(this.#so[2] - t2) / i2} ${(this.#so[3] - e2) / n2} L${(this.#so[4] - t2) / i2} ${(this.#so[5] - e2) / n2} L${r2} ${s2} L${a2} ${o2} L${(this.#so[16] - t2) / i2} ${(this.#so[17] - e2) / n2} L${(this.#so[14] - t2) / i2} ${(this.#so[15] - e2) / n2} Z`;
    }
    #vo(t2) {
      const e2 = this.#eo;
      t2.push(`L${e2[4]} ${e2[5]} Z`);
    }
    #yo(t2) {
      const [e2, i2, n2, r2] = this.#to, s2 = this.#so.subarray(4, 6), a2 = this.#so.subarray(16, 18), [o2, l2, h2, c2] = this.#fo();
      t2.push(`L${(s2[0] - e2) / n2} ${(s2[1] - i2) / r2} L${o2} ${l2} L${h2} ${c2} L${(a2[0] - e2) / n2} ${(a2[1] - i2) / r2}`);
    }
    newFreeDrawOutline(t2, e2, i2, n2, r2, s2) {
      return new FreeDrawOutline(t2, e2, i2, n2, r2, s2);
    }
    getOutlines() {
      const t2 = this.#ro, e2 = this.#eo, i2 = this.#so, [n2, r2, s2, a2] = this.#to, o2 = new Float32Array((this.#uo?.length ?? 0) + 2);
      for (let t3 = 0, e3 = o2.length - 2; t3 < e3; t3 += 2) {
        o2[t3] = (this.#uo[t3] - n2) / s2;
        o2[t3 + 1] = (this.#uo[t3 + 1] - r2) / a2;
      }
      o2[o2.length - 2] = (this.#ao - n2) / s2;
      o2[o2.length - 1] = (this.#oo - r2) / a2;
      if (isNaN(i2[6]) && !this.isEmpty()) return this.#wo(o2);
      const l2 = new Float32Array(this.#ro.length + 24 + this.#eo.length);
      let h2 = t2.length;
      for (let e3 = 0; e3 < h2; e3 += 2) if (isNaN(t2[e3])) l2[e3] = l2[e3 + 1] = NaN;
      else {
        l2[e3] = t2[e3];
        l2[e3 + 1] = t2[e3 + 1];
      }
      h2 = this.#Ao(l2, h2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) for (let i3 = 0; i3 < 6; i3 += 2) if (isNaN(e2[t3 + i3])) {
        l2[h2] = l2[h2 + 1] = NaN;
        h2 += 2;
      } else {
        l2[h2] = e2[t3 + i3];
        l2[h2 + 1] = e2[t3 + i3 + 1];
        h2 += 2;
      }
      this.#xo(l2, h2);
      return this.newFreeDrawOutline(l2, o2, this.#to, this.#co, this.#io, this.#no);
    }
    #wo(t2) {
      const e2 = this.#so, [i2, n2, r2, s2] = this.#to, [a2, o2, l2, h2] = this.#fo(), c2 = new Float32Array(36);
      c2.set([NaN, NaN, NaN, NaN, (e2[2] - i2) / r2, (e2[3] - n2) / s2, NaN, NaN, NaN, NaN, (e2[4] - i2) / r2, (e2[5] - n2) / s2, NaN, NaN, NaN, NaN, a2, o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, (e2[16] - i2) / r2, (e2[17] - n2) / s2, NaN, NaN, NaN, NaN, (e2[14] - i2) / r2, (e2[15] - n2) / s2], 0);
      return this.newFreeDrawOutline(c2, t2, this.#to, this.#co, this.#io, this.#no);
    }
    #xo(t2, e2) {
      const i2 = this.#eo;
      t2.set([NaN, NaN, NaN, NaN, i2[4], i2[5]], e2);
      return e2 + 6;
    }
    #Ao(t2, e2) {
      const i2 = this.#so.subarray(4, 6), n2 = this.#so.subarray(16, 18), [r2, s2, a2, o2] = this.#to, [l2, h2, c2, d2] = this.#fo();
      t2.set([NaN, NaN, NaN, NaN, (i2[0] - r2) / a2, (i2[1] - s2) / o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, c2, d2, NaN, NaN, NaN, NaN, (n2[0] - r2) / a2, (n2[1] - s2) / o2], e2);
      return e2 + 24;
    }
  };
  var FreeDrawOutline = class extends Outline {
    #to;
    #Eo = new Float32Array(4);
    #io;
    #no;
    #uo;
    #co;
    #_o;
    constructor(t2, e2, i2, n2, r2, s2) {
      super();
      this.#_o = t2;
      this.#uo = e2;
      this.#to = i2;
      this.#co = n2;
      this.#io = r2;
      this.#no = s2;
      this.firstPoint = [NaN, NaN];
      this.lastPoint = [NaN, NaN];
      this.#To(s2);
      const [a2, o2, l2, h2] = this.#Eo;
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3 += 2) {
        t2[e3] = (t2[e3] - a2) / l2;
        t2[e3 + 1] = (t2[e3 + 1] - o2) / h2;
      }
      for (let t3 = 0, i3 = e2.length; t3 < i3; t3 += 2) {
        e2[t3] = (e2[t3] - a2) / l2;
        e2[t3 + 1] = (e2[t3 + 1] - o2) / h2;
      }
    }
    toSVGPath() {
      const t2 = [`M${this.#_o[4]} ${this.#_o[5]}`];
      for (let e2 = 6, i2 = this.#_o.length; e2 < i2; e2 += 6) isNaN(this.#_o[e2]) ? t2.push(`L${this.#_o[e2 + 4]} ${this.#_o[e2 + 5]}`) : t2.push(`C${this.#_o[e2]} ${this.#_o[e2 + 1]} ${this.#_o[e2 + 2]} ${this.#_o[e2 + 3]} ${this.#_o[e2 + 4]} ${this.#_o[e2 + 5]}`);
      t2.push("Z");
      return t2.join(" ");
    }
    serialize([t2, e2, i2, n2], r2) {
      const s2 = i2 - t2, a2 = n2 - e2;
      let o2, l2;
      switch (r2) {
        case 0:
          o2 = Outline._rescale(this.#_o, t2, n2, s2, -a2);
          l2 = Outline._rescale(this.#uo, t2, n2, s2, -a2);
          break;
        case 90:
          o2 = Outline._rescaleAndSwap(this.#_o, t2, e2, s2, a2);
          l2 = Outline._rescaleAndSwap(this.#uo, t2, e2, s2, a2);
          break;
        case 180:
          o2 = Outline._rescale(this.#_o, i2, e2, -s2, a2);
          l2 = Outline._rescale(this.#uo, i2, e2, -s2, a2);
          break;
        case 270:
          o2 = Outline._rescaleAndSwap(this.#_o, i2, n2, -s2, -a2);
          l2 = Outline._rescaleAndSwap(this.#uo, i2, n2, -s2, -a2);
      }
      return { outline: Array.from(o2), points: [Array.from(l2)] };
    }
    #To(t2) {
      const e2 = this.#_o;
      let i2 = e2[4], n2 = e2[5];
      const r2 = [i2, n2, i2, n2];
      let s2 = i2, a2 = n2, o2 = i2, l2 = n2;
      const h2 = t2 ? Math.max : Math.min, c2 = new Float32Array(4);
      for (let t3 = 6, d3 = e2.length; t3 < d3; t3 += 6) {
        const d4 = e2[t3 + 4], u2 = e2[t3 + 5];
        if (isNaN(e2[t3])) {
          Util.pointBoundingBox(d4, u2, r2);
          if (a2 > u2) {
            s2 = d4;
            a2 = u2;
          } else a2 === u2 && (s2 = h2(s2, d4));
          if (l2 < u2) {
            o2 = d4;
            l2 = u2;
          } else l2 === u2 && (o2 = h2(o2, d4));
        } else {
          c2[0] = c2[1] = 1 / 0;
          c2[2] = c2[3] = -1 / 0;
          Util.bezierBoundingBox(i2, n2, ...e2.slice(t3, t3 + 6), c2);
          Util.rectBoundingBox(c2[0], c2[1], c2[2], c2[3], r2);
          if (a2 > c2[1]) {
            s2 = c2[0];
            a2 = c2[1];
          } else a2 === c2[1] && (s2 = h2(s2, c2[0]));
          if (l2 < c2[3]) {
            o2 = c2[2];
            l2 = c2[3];
          } else l2 === c2[3] && (o2 = h2(o2, c2[2]));
        }
        i2 = d4;
        n2 = u2;
      }
      const d2 = this.#Eo;
      d2[0] = r2[0] - this.#io;
      d2[1] = r2[1] - this.#io;
      d2[2] = r2[2] - r2[0] + 2 * this.#io;
      d2[3] = r2[3] - r2[1] + 2 * this.#io;
      this.firstPoint = [s2, a2];
      this.lastPoint = [o2, l2];
    }
    get box() {
      return this.#Eo;
    }
    newOutliner(t2, e2, i2, n2, r2, s2 = 0) {
      return new FreeDrawOutliner(t2, e2, i2, n2, r2, s2);
    }
    getNewOutline(t2, e2) {
      const [i2, n2, r2, s2] = this.#Eo, [a2, o2, l2, h2] = this.#to, c2 = r2 * l2, d2 = s2 * h2, u2 = i2 * l2 + a2, p2 = n2 * h2 + o2, g2 = this.newOutliner({ x: this.#uo[0] * c2 + u2, y: this.#uo[1] * d2 + p2 }, this.#to, this.#co, t2, this.#no, e2 ?? this.#io);
      for (let t3 = 2; t3 < this.#uo.length; t3 += 2) g2.add({ x: this.#uo[t3] * c2 + u2, y: this.#uo[t3 + 1] * d2 + p2 });
      return g2.getOutlines();
    }
  };
  var HighlightOutliner = class {
    #to;
    #So;
    #Co;
    #Do = [];
    #Po = [];
    constructor(t2, e2 = 0, i2 = 0, n2 = true) {
      const r2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], s2 = 1e-4;
      for (const { x: i3, y: n3, width: a3, height: o3 } of t2) {
        const t3 = Math.floor((i3 - e2) / s2) * s2, l3 = Math.ceil((i3 + a3 + e2) / s2) * s2, h3 = Math.floor((n3 - e2) / s2) * s2, c3 = Math.ceil((n3 + o3 + e2) / s2) * s2, d3 = [t3, h3, c3, true], u3 = [l3, h3, c3, false];
        this.#Do.push(d3, u3);
        Util.rectBoundingBox(t3, h3, l3, c3, r2);
      }
      const a2 = r2[2] - r2[0] + 2 * i2, o2 = r2[3] - r2[1] + 2 * i2, l2 = r2[0] - i2, h2 = r2[1] - i2;
      let c2 = n2 ? -1 / 0 : 1 / 0, d2 = 1 / 0;
      const u2 = this.#Do.at(n2 ? -1 : -2), p2 = [u2[0], u2[2]];
      for (const t3 of this.#Do) {
        const [e3, i3, r3, s3] = t3;
        if (!s3 && n2) if (i3 < d2) {
          d2 = i3;
          c2 = e3;
        } else i3 === d2 && (c2 = Math.max(c2, e3));
        else if (s3 && !n2) if (i3 < d2) {
          d2 = i3;
          c2 = e3;
        } else i3 === d2 && (c2 = Math.min(c2, e3));
        t3[0] = (e3 - l2) / a2;
        t3[1] = (i3 - h2) / o2;
        t3[2] = (r3 - h2) / o2;
      }
      this.#to = new Float32Array([l2, h2, a2, o2]);
      this.#So = [c2, d2];
      this.#Co = p2;
    }
    getOutlines() {
      this.#Do.sort((t3, e2) => t3[0] - e2[0] || t3[1] - e2[1] || t3[2] - e2[2]);
      const t2 = [];
      for (const e2 of this.#Do) if (e2[3]) {
        t2.push(...this.#Mo(e2));
        this.#ko(e2);
      } else {
        this.#Io(e2);
        t2.push(...this.#Mo(e2));
      }
      return this.#Fo(t2);
    }
    #Fo(t2) {
      const e2 = [], i2 = /* @__PURE__ */ new Set();
      for (const i3 of t2) {
        const [t3, n3, r3] = i3;
        e2.push([t3, n3, i3], [t3, r3, i3]);
      }
      e2.sort((t3, e3) => t3[1] - e3[1] || t3[0] - e3[0]);
      for (let t3 = 0, n3 = e2.length; t3 < n3; t3 += 2) {
        const n4 = e2[t3][2], r3 = e2[t3 + 1][2];
        n4.push(r3);
        r3.push(n4);
        i2.add(n4);
        i2.add(r3);
      }
      const n2 = [];
      let r2;
      for (; i2.size > 0; ) {
        const t3 = i2.values().next().value;
        let [e3, s2, a2, o2, l2] = t3;
        i2.delete(t3);
        let h2 = e3, c2 = s2;
        r2 = [e3, a2];
        n2.push(r2);
        for (; ; ) {
          let t4;
          if (i2.has(o2)) t4 = o2;
          else {
            if (!i2.has(l2)) break;
            t4 = l2;
          }
          i2.delete(t4);
          [e3, s2, a2, o2, l2] = t4;
          if (h2 !== e3) {
            r2.push(h2, c2, e3, c2 === s2 ? s2 : a2);
            h2 = e3;
          }
          c2 = c2 === s2 ? a2 : s2;
        }
        r2.push(h2, c2);
      }
      return new HighlightOutline(n2, this.#to, this.#So, this.#Co);
    }
    #Ro(t2) {
      const e2 = this.#Po;
      let i2 = 0, n2 = e2.length - 1;
      for (; i2 <= n2; ) {
        const r2 = i2 + n2 >> 1, s2 = e2[r2][0];
        if (s2 === t2) return r2;
        s2 < t2 ? i2 = r2 + 1 : n2 = r2 - 1;
      }
      return n2 + 1;
    }
    #ko([, t2, e2]) {
      const i2 = this.#Ro(t2);
      this.#Po.splice(i2, 0, [t2, e2]);
    }
    #Io([, t2, e2]) {
      const i2 = this.#Ro(t2);
      for (let n2 = i2; n2 < this.#Po.length; n2++) {
        const [i3, r2] = this.#Po[n2];
        if (i3 !== t2) break;
        if (i3 === t2 && r2 === e2) {
          this.#Po.splice(n2, 1);
          return;
        }
      }
      for (let n2 = i2 - 1; n2 >= 0; n2--) {
        const [i3, r2] = this.#Po[n2];
        if (i3 !== t2) break;
        if (i3 === t2 && r2 === e2) {
          this.#Po.splice(n2, 1);
          return;
        }
      }
    }
    #Mo(t2) {
      const [e2, i2, n2] = t2, r2 = [[e2, i2, n2]], s2 = this.#Ro(n2);
      for (let t3 = 0; t3 < s2; t3++) {
        const [i3, n3] = this.#Po[t3];
        for (let t4 = 0, s3 = r2.length; t4 < s3; t4++) {
          const [, a2, o2] = r2[t4];
          if (!(n3 <= a2 || o2 <= i3)) if (a2 >= i3) if (o2 > n3) r2[t4][1] = n3;
          else {
            if (1 === s3) return [];
            r2.splice(t4, 1);
            t4--;
            s3--;
          }
          else {
            r2[t4][2] = i3;
            o2 > n3 && r2.push([e2, n3, o2]);
          }
        }
      }
      return r2;
    }
  };
  var HighlightOutline = class extends Outline {
    #to;
    #Bo;
    constructor(t2, e2, i2, n2) {
      super();
      this.#Bo = t2;
      this.#to = e2;
      this.firstPoint = i2;
      this.lastPoint = n2;
    }
    toSVGPath() {
      const t2 = [];
      for (const e2 of this.#Bo) {
        let [i2, n2] = e2;
        t2.push(`M${i2} ${n2}`);
        for (let r2 = 2; r2 < e2.length; r2 += 2) {
          const s2 = e2[r2], a2 = e2[r2 + 1];
          if (s2 === i2) {
            t2.push(`V${a2}`);
            n2 = a2;
          } else if (a2 === n2) {
            t2.push(`H${s2}`);
            i2 = s2;
          }
        }
        t2.push("Z");
      }
      return t2.join(" ");
    }
    serialize([t2, e2, i2, n2], r2) {
      const s2 = [], a2 = i2 - t2, o2 = n2 - e2;
      for (const e3 of this.#Bo) {
        const i3 = new Array(e3.length);
        for (let r3 = 0; r3 < e3.length; r3 += 2) {
          i3[r3] = t2 + e3[r3] * a2;
          i3[r3 + 1] = n2 - e3[r3 + 1] * o2;
        }
        s2.push(i3);
      }
      return s2;
    }
    get box() {
      return this.#to;
    }
    get classNamesForOutlining() {
      return ["highlightOutline"];
    }
  };
  var FreeHighlightOutliner = class extends FreeDrawOutliner {
    newFreeDrawOutline(t2, e2, i2, n2, r2, s2) {
      return new FreeHighlightOutline(t2, e2, i2, n2, r2, s2);
    }
  };
  var FreeHighlightOutline = class extends FreeDrawOutline {
    newOutliner(t2, e2, i2, n2, r2, s2 = 0) {
      return new FreeHighlightOutliner(t2, e2, i2, n2, r2, s2);
    }
  };
  var HighlightEditor = class _HighlightEditor extends AnnotationEditor {
    #Oo = null;
    #Lo = 0;
    #No;
    #Uo = null;
    #s = null;
    #Ho = null;
    #zo = null;
    #jo = 0;
    #Go = null;
    #Wo = null;
    #S = null;
    #Vo = false;
    #So = null;
    #Co = null;
    #$o = null;
    #be = "";
    #do;
    #qo = "";
    static _defaultColor = null;
    static _defaultOpacity = 1;
    static _defaultThickness = 12;
    static _type = "highlight";
    static _editorType = m.HIGHLIGHT;
    static _freeHighlightId = -1;
    static _freeHighlight = null;
    static _freeHighlightClipId = "";
    static get _keyboardManager() {
      const t2 = _HighlightEditor.prototype;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t2._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t2._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t2._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t2._moveCaret, { args: [3] }]]));
    }
    constructor(t2) {
      super({ ...t2, name: "highlightEditor" });
      this.color = t2.color || _HighlightEditor._defaultColor;
      this.#do = t2.thickness || _HighlightEditor._defaultThickness;
      this.opacity = t2.opacity || _HighlightEditor._defaultOpacity;
      this.#No = t2.boxes || null;
      this.#qo = t2.methodOfCreation || "";
      this.#be = t2.text || "";
      this._isDraggable = false;
      this.defaultL10nId = "pdfjs-editor-highlight-editor";
      if (t2.highlightId > -1) {
        this.#Vo = true;
        this.#Xo(t2);
        this.#Yo();
      } else if (this.#No) {
        this.#Oo = t2.anchorNode;
        this.#Lo = t2.anchorOffset;
        this.#zo = t2.focusNode;
        this.#jo = t2.focusOffset;
        this.#Ko();
        this.#Yo();
        this.rotate(this.rotation);
      }
      this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
    get telemetryInitialData() {
      return { action: "added", type: this.#Vo ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: this.#do, methodOfCreation: this.#qo };
    }
    get telemetryFinalData() {
      return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
    }
    static computeTelemetryFinalData(t2) {
      return { numberOfColors: t2.get("color").size };
    }
    #Ko() {
      const t2 = new HighlightOutliner(this.#No, 1e-3);
      this.#Wo = t2.getOutlines();
      [this.x, this.y, this.width, this.height] = this.#Wo.box;
      const e2 = new HighlightOutliner(this.#No, 25e-4, 1e-3, "ltr" === this._uiManager.direction);
      this.#Ho = e2.getOutlines();
      const { firstPoint: i2 } = this.#Wo;
      this.#So = [(i2[0] - this.x) / this.width, (i2[1] - this.y) / this.height];
      const { lastPoint: n2 } = this.#Ho;
      this.#Co = [(n2[0] - this.x) / this.width, (n2[1] - this.y) / this.height];
    }
    #Xo({ highlightOutlines: t2, highlightId: e2, clipPathId: i2 }) {
      this.#Wo = t2;
      this.#Ho = t2.getNewOutline(this.#do / 2 + 1.5, 25e-4);
      if (e2 >= 0) {
        this.#S = e2;
        this.#Uo = i2;
        this.parent.drawLayer.finalizeDraw(e2, { bbox: t2.box, path: { d: t2.toSVGPath() } });
        this.#$o = this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: true }, bbox: this.#Ho.box, path: { d: this.#Ho.toSVGPath() } }, true);
      } else if (this.parent) {
        const e3 = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(this.#S, { bbox: _HighlightEditor.#Jo(this.#Wo.box, (e3 - this.rotation + 360) % 360), path: { d: t2.toSVGPath() } });
        this.parent.drawLayer.updateProperties(this.#$o, { bbox: _HighlightEditor.#Jo(this.#Ho.box, e3), path: { d: this.#Ho.toSVGPath() } });
      }
      const [n2, r2, s2, a2] = t2.box;
      switch (this.rotation) {
        case 0:
          this.x = n2;
          this.y = r2;
          this.width = s2;
          this.height = a2;
          break;
        case 90: {
          const [t3, e3] = this.parentDimensions;
          this.x = r2;
          this.y = 1 - n2;
          this.width = s2 * e3 / t3;
          this.height = a2 * t3 / e3;
          break;
        }
        case 180:
          this.x = 1 - n2;
          this.y = 1 - r2;
          this.width = s2;
          this.height = a2;
          break;
        case 270: {
          const [t3, e3] = this.parentDimensions;
          this.x = 1 - r2;
          this.y = n2;
          this.width = s2 * e3 / t3;
          this.height = a2 * t3 / e3;
          break;
        }
      }
      const { firstPoint: o2 } = t2;
      this.#So = [(o2[0] - n2) / s2, (o2[1] - r2) / a2];
      const { lastPoint: l2 } = this.#Ho;
      this.#Co = [(l2[0] - n2) / s2, (l2[1] - r2) / a2];
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      _HighlightEditor._defaultColor ||= e2.highlightColors?.values().next().value || "#fff066";
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case f.HIGHLIGHT_COLOR:
          _HighlightEditor._defaultColor = e2;
          break;
        case f.HIGHLIGHT_THICKNESS:
          _HighlightEditor._defaultThickness = e2;
      }
    }
    translateInPage(t2, e2) {
    }
    get toolbarPosition() {
      return this.#Co;
    }
    get commentButtonPosition() {
      return this.#So;
    }
    updateParams(t2, e2) {
      switch (t2) {
        case f.HIGHLIGHT_COLOR:
          this.#va(e2);
          break;
        case f.HIGHLIGHT_THICKNESS:
          this.#Qo(e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[f.HIGHLIGHT_COLOR, _HighlightEditor._defaultColor], [f.HIGHLIGHT_THICKNESS, _HighlightEditor._defaultThickness]];
    }
    get propertiesToUpdate() {
      return [[f.HIGHLIGHT_COLOR, this.color || _HighlightEditor._defaultColor], [f.HIGHLIGHT_THICKNESS, this.#do || _HighlightEditor._defaultThickness], [f.HIGHLIGHT_FREE, this.#Vo]];
    }
    onUpdatedColor() {
      this.parent?.drawLayer.updateProperties(this.#S, { root: { fill: this.color, "fill-opacity": this.opacity } });
      this.#s?.updateColor(this.color);
      super.onUpdatedColor();
    }
    #va(t2) {
      const setColorAndOpacity = (t3, e3) => {
        this.color = t3;
        this.opacity = e3;
        this.onUpdatedColor();
      }, e2 = this.color, i2 = this.opacity;
      this.addCommands({ cmd: setColorAndOpacity.bind(this, t2, _HighlightEditor._defaultOpacity), undo: setColorAndOpacity.bind(this, e2, i2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: f.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true });
      this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t2) }, true);
    }
    #Qo(t2) {
      const e2 = this.#do, setThickness = (t3) => {
        this.#do = t3;
        this.#Zo(t3);
      };
      this.addCommands({ cmd: setThickness.bind(this, t2), undo: setThickness.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: f.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true });
      this._reportTelemetry({ action: "thickness_changed", thickness: t2 }, true);
    }
    get toolbarButtons() {
      if (this._uiManager.highlightColors) {
        return [["colorPicker", this.#s = new ColorPicker({ editor: this })]];
      }
      return super.toolbarButtons;
    }
    disableEditing() {
      super.disableEditing();
      this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing();
      this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(this.#tl());
    }
    getBaseTranslation() {
      return [0, 0];
    }
    getRect(t2, e2) {
      return super.getRect(t2, e2, this.#tl());
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this);
      t2 && this.div.focus();
    }
    remove() {
      this.#el();
      this._reportTelemetry({ action: "deleted" });
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          this.#Yo();
          this.isAttachedToDOM || this.parent.add(this);
        }
      }
    }
    setParent(t2) {
      let e2 = false;
      if (this.parent && !t2) this.#el();
      else if (t2) {
        this.#Yo(t2);
        e2 = !this.parent && this.div?.classList.contains("selectedEditor");
      }
      super.setParent(t2);
      this.show(this._isVisible);
      e2 && this.select();
    }
    #Zo(t2) {
      if (this.#Vo) {
        this.#Xo({ highlightOutlines: this.#Wo.getNewOutline(t2 / 2) });
        this.fixAndSetPosition();
        this.setDims();
      }
    }
    #el() {
      if (null !== this.#S && this.parent) {
        this.parent.drawLayer.remove(this.#S);
        this.#S = null;
        this.parent.drawLayer.remove(this.#$o);
        this.#$o = null;
      }
    }
    #Yo(t2 = this.parent) {
      if (null === this.#S) {
        ({ id: this.#S, clipPathId: this.#Uo } = t2.drawLayer.draw({ bbox: this.#Wo.box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: true, free: this.#Vo }, path: { d: this.#Wo.toSVGPath() } }, false, true));
        this.#$o = t2.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: this.#Vo }, bbox: this.#Ho.box, path: { d: this.#Ho.toSVGPath() } }, this.#Vo);
        this.#Go && (this.#Go.style.clipPath = this.#Uo);
      }
    }
    static #Jo([t2, e2, i2, n2], r2) {
      switch (r2) {
        case 90:
          return [1 - e2 - n2, t2, n2, i2];
        case 180:
          return [1 - t2 - i2, 1 - e2 - n2, i2, n2];
        case 270:
          return [e2, 1 - t2 - i2, n2, i2];
      }
      return [t2, e2, i2, n2];
    }
    rotate(t2) {
      const { drawLayer: e2 } = this.parent;
      let i2;
      if (this.#Vo) {
        t2 = (t2 - this.rotation + 360) % 360;
        i2 = _HighlightEditor.#Jo(this.#Wo.box, t2);
      } else i2 = _HighlightEditor.#Jo([this.x, this.y, this.width, this.height], t2);
      e2.updateProperties(this.#S, { bbox: i2, root: { "data-main-rotation": t2 } });
      e2.updateProperties(this.#$o, { bbox: _HighlightEditor.#Jo(this.#Ho.box, t2), root: { "data-main-rotation": t2 } });
    }
    render() {
      if (this.div) return this.div;
      const t2 = super.render();
      if (this.#be) {
        t2.setAttribute("aria-label", this.#be);
        t2.setAttribute("role", "mark");
      }
      this.#Vo ? t2.classList.add("free") : this.div.addEventListener("keydown", this.#il.bind(this), { signal: this._uiManager._signal });
      const e2 = this.#Go = document.createElement("div");
      t2.append(e2);
      e2.setAttribute("aria-hidden", "true");
      e2.className = "internal";
      e2.style.clipPath = this.#Uo;
      this.setDims();
      bindEvents(this, this.#Go, ["pointerover", "pointerleave"]);
      this.enableEditing();
      return t2;
    }
    pointerover() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#$o, { rootClass: { hovered: true } });
    }
    pointerleave() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#$o, { rootClass: { hovered: false } });
    }
    #il(t2) {
      _HighlightEditor._keyboardManager.exec(this, t2);
    }
    _moveCaret(t2) {
      this.parent.unselect(this);
      switch (t2) {
        case 0:
        case 2:
          this.#nl(true);
          break;
        case 1:
        case 3:
          this.#nl(false);
      }
    }
    #nl(t2) {
      if (!this.#Oo) return;
      const e2 = window.getSelection();
      t2 ? e2.setPosition(this.#Oo, this.#Lo) : e2.setPosition(this.#zo, this.#jo);
    }
    select() {
      super.select();
      this.#$o && this.parent?.drawLayer.updateProperties(this.#$o, { rootClass: { hovered: false, selected: true } });
    }
    unselect() {
      super.unselect();
      if (this.#$o) {
        this.parent?.drawLayer.updateProperties(this.#$o, { rootClass: { selected: false } });
        this.#Vo || this.#nl(false);
      }
    }
    get _mustFixPosition() {
      return !this.#Vo;
    }
    show(t2 = this._isVisible) {
      super.show(t2);
      if (this.parent) {
        this.parent.drawLayer.updateProperties(this.#S, { rootClass: { hidden: !t2 } });
        this.parent.drawLayer.updateProperties(this.#$o, { rootClass: { hidden: !t2 } });
      }
    }
    #tl() {
      return this.#Vo ? this.rotation : 0;
    }
    #rl() {
      if (this.#Vo) return null;
      const [t2, e2] = this.pageDimensions, [i2, n2] = this.pageTranslation, r2 = this.#No, s2 = new Float32Array(8 * r2.length);
      let a2 = 0;
      for (const { x: o2, y: l2, width: h2, height: c2 } of r2) {
        const r3 = o2 * t2 + i2, d2 = (1 - l2) * e2 + n2;
        s2[a2] = s2[a2 + 4] = r3;
        s2[a2 + 1] = s2[a2 + 3] = d2;
        s2[a2 + 2] = s2[a2 + 6] = r3 + h2 * t2;
        s2[a2 + 5] = s2[a2 + 7] = d2 - c2 * e2;
        a2 += 8;
      }
      return s2;
    }
    #sl(t2) {
      return this.#Wo.serialize(t2, this.#tl());
    }
    static startHighlighting(t2, e2, { target: i2, x: n2, y: r2 }) {
      const { x: s2, y: a2, width: o2, height: l2 } = i2.getBoundingClientRect(), h2 = new AbortController(), c2 = t2.combinedSignal(h2), pointerUpCallback = (e3) => {
        h2.abort();
        this.#al(t2, e3);
      };
      window.addEventListener("blur", pointerUpCallback, { signal: c2 });
      window.addEventListener("pointerup", pointerUpCallback, { signal: c2 });
      window.addEventListener("pointerdown", stopEvent, { capture: true, passive: false, signal: c2 });
      window.addEventListener("contextmenu", noContextMenu, { signal: c2 });
      i2.addEventListener("pointermove", this.#ol.bind(this, t2), { signal: c2 });
      this._freeHighlight = new FreeHighlightOutliner({ x: n2, y: r2 }, [s2, a2, o2, l2], t2.scale, this._defaultThickness / 2, e2, 1e-3);
      ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: this._freeHighlight.toSVGPath() } }, true, true));
    }
    static #ol(t2, e2) {
      this._freeHighlight.add(e2) && t2.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
    }
    static #al(t2, e2) {
      this._freeHighlight.isEmpty() ? t2.drawLayer.remove(this._freeHighlightId) : t2.createAndAddNewEditor(e2, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" });
      this._freeHighlightId = -1;
      this._freeHighlight = null;
      this._freeHighlightClipId = "";
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null;
      if (t2 instanceof HighlightAnnotationElement) {
        const { data: { quadPoints: e3, rect: i3, rotation: r3, id: s3, color: a3, opacity: o3, popupRef: l3, richText: h3, contentsObj: c3, creationDate: d3, modificationDate: u3 }, parent: { page: { pageNumber: p3 } } } = t2;
        n2 = t2 = { annotationType: m.HIGHLIGHT, color: Array.from(a3), opacity: o3, quadPoints: e3, boxes: null, pageIndex: p3 - 1, rect: i3.slice(0), rotation: r3, annotationElementId: s3, id: s3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: d3, modificationDate: u3 };
      } else if (t2 instanceof InkAnnotationElement) {
        const { data: { inkLists: e3, rect: i3, rotation: r3, id: s3, color: a3, borderStyle: { rawWidth: o3 }, popupRef: l3, richText: h3, contentsObj: c3, creationDate: d3, modificationDate: u3 }, parent: { page: { pageNumber: p3 } } } = t2;
        n2 = t2 = { annotationType: m.HIGHLIGHT, color: Array.from(a3), thickness: o3, inkLists: e3, boxes: null, pageIndex: p3 - 1, rect: i3.slice(0), rotation: r3, annotationElementId: s3, id: s3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: d3, modificationDate: u3 };
      }
      const { color: r2, quadPoints: s2, inkLists: a2, outlines: o2, opacity: l2 } = t2, h2 = await super.deserialize(t2, e2, i2);
      h2.color = Util.makeHexColor(...r2);
      h2.opacity = l2 || 1;
      a2 && (h2.#do = t2.thickness);
      h2._initialData = n2;
      t2.comment && h2.setCommentData(t2);
      const [c2, d2] = h2.pageDimensions, [u2, p2] = h2.pageTranslation;
      if (s2) {
        const t3 = h2.#No = [];
        for (let e3 = 0; e3 < s2.length; e3 += 8) t3.push({ x: (s2[e3] - u2) / c2, y: 1 - (s2[e3 + 1] - p2) / d2, width: (s2[e3 + 2] - s2[e3]) / c2, height: (s2[e3 + 1] - s2[e3 + 5]) / d2 });
        h2.#Ko();
        h2.#Yo();
        h2.rotate(h2.rotation);
      } else if (a2 || o2) {
        h2.#Vo = true;
        const t3 = (a2 || o2.points)[0], i3 = { x: t3[0] - u2, y: d2 - (t3[1] - p2) }, n3 = new FreeHighlightOutliner(i3, [0, 0, c2, d2], 1, h2.#do / 2, true, 1e-3);
        for (let e3 = 0, r4 = t3.length; e3 < r4; e3 += 2) {
          i3.x = t3[e3] - u2;
          i3.y = d2 - (t3[e3 + 1] - p2);
          n3.add(i3);
        }
        const { id: r3, clipPathId: s3 } = e2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: h2.color, "fill-opacity": h2._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: n3.toSVGPath() } }, true, true);
        h2.#Xo({ highlightOutlines: n3.getOutlines(), highlightId: r3, clipPathId: s3 });
        h2.#Yo();
        h2.rotate(h2.parentRotation);
      }
      return h2;
    }
    serialize(t2 = false) {
      if (this.isEmpty() || t2) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i2 = super.serialize(t2);
      Object.assign(i2, { color: e2, opacity: this.opacity, thickness: this.#do, quadPoints: this.#rl(), outlines: this.#sl(i2.rect) });
      this.addComment(i2);
      if (this.annotationElementId && !this.#Za(i2)) return null;
      i2.id = this.annotationElementId;
      return i2;
    }
    #Za(t2) {
      const { color: e2 } = this._initialData;
      return this.hasEditedComment || t2.color.some((t3, i2) => t3 !== e2[i2]);
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      return null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  var DrawingOptions = class {
    #ll = /* @__PURE__ */ Object.create(null);
    updateProperty(t2, e2) {
      this[t2] = e2;
      this.updateSVGProperty(t2, e2);
    }
    updateProperties(t2) {
      if (t2) for (const [e2, i2] of Object.entries(t2)) e2.startsWith("_") || this.updateProperty(e2, i2);
    }
    updateSVGProperty(t2, e2) {
      this.#ll[t2] = e2;
    }
    toSVGProperties() {
      const t2 = this.#ll;
      this.#ll = /* @__PURE__ */ Object.create(null);
      return { root: t2 };
    }
    reset() {
      this.#ll = /* @__PURE__ */ Object.create(null);
    }
    updateAll(t2 = this) {
      this.updateProperties(t2);
    }
    clone() {
      unreachable("Not implemented");
    }
  };
  var DrawingEditor = class _DrawingEditor extends AnnotationEditor {
    #hl = null;
    #cl;
    _colorPicker = null;
    _drawId = null;
    static _currentDrawId = -1;
    static _currentParent = null;
    static #dl = null;
    static #ul = null;
    static #pl = null;
    static _INNER_MARGIN = 3;
    constructor(t2) {
      super(t2);
      this.#cl = t2.mustBeCommitted || false;
      this._addOutlines(t2);
    }
    onUpdatedColor() {
      this._colorPicker?.update(this.color);
      super.onUpdatedColor();
    }
    _addOutlines(t2) {
      if (t2.drawOutlines) {
        this.#gl(t2);
        this.#Yo();
      }
    }
    #gl({ drawOutlines: t2, drawId: e2, drawingOptions: i2 }) {
      this.#hl = t2;
      this._drawingOptions ||= i2;
      this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`);
      if (e2 >= 0) {
        this._drawId = e2;
        this.parent.drawLayer.finalizeDraw(e2, t2.defaultProperties);
      } else this._drawId = this.#ml(t2, this.parent);
      this.#fl(t2.box);
    }
    #ml(t2, e2) {
      const { id: i2 } = e2.drawLayer.draw(_DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t2.defaultSVGProperties), false, false);
      return i2;
    }
    static _mergeSVGProperties(t2, e2) {
      const i2 = new Set(Object.keys(t2));
      for (const [n2, r2] of Object.entries(e2)) i2.has(n2) ? Object.assign(t2[n2], r2) : t2[n2] = r2;
      return t2;
    }
    static getDefaultDrawingOptions(t2) {
      unreachable("Not implemented");
    }
    static get typesMap() {
      unreachable("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t2, e2) {
      const i2 = this.typesMap.get(t2);
      i2 && this._defaultDrawingOptions.updateProperty(i2, e2);
      if (this._currentParent) {
        _DrawingEditor.#dl.updateProperty(i2, e2);
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
      }
    }
    updateParams(t2, e2) {
      const i2 = this.constructor.typesMap.get(t2);
      i2 && this._updateProperty(t2, i2, e2);
    }
    static get defaultPropertiesToUpdate() {
      const t2 = [], e2 = this._defaultDrawingOptions;
      for (const [i2, n2] of this.typesMap) t2.push([i2, e2[n2]]);
      return t2;
    }
    get propertiesToUpdate() {
      const t2 = [], { _drawingOptions: e2 } = this;
      for (const [i2, n2] of this.constructor.typesMap) t2.push([i2, e2[n2]]);
      return t2;
    }
    _updateProperty(t2, e2, i2) {
      const n2 = this._drawingOptions, r2 = n2[e2], setter = (i3) => {
        n2.updateProperty(e2, i3);
        const r3 = this.#hl.updateProperty(e2, i3);
        r3 && this.#fl(r3);
        this.parent?.drawLayer.updateProperties(this._drawId, n2.toSVGProperties());
        t2 === this.colorType && this.onUpdatedColor();
      };
      this.addCommands({ cmd: setter.bind(this, i2), undo: setter.bind(this, r2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: t2, overwriteIfSameType: true, keepUndo: true });
    }
    _onResizing() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(this.#hl.getPathResizingSVGProperties(this.#bl()), { bbox: this.#yl() }));
    }
    _onResized() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(this.#hl.getPathResizedSVGProperties(this.#bl()), { bbox: this.#yl() }));
    }
    _onTranslating(t2, e2) {
      this.parent?.drawLayer.updateProperties(this._drawId, { bbox: this.#yl() });
    }
    _onTranslated() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(this.#hl.getPathTranslatedSVGProperties(this.#bl(), this.parentDimensions), { bbox: this.#yl() }));
    }
    _onStartDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: true } });
    }
    _onStopDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: false } });
    }
    commit() {
      super.commit();
      this.disableEditMode();
      this.disableEditing();
    }
    disableEditing() {
      super.disableEditing();
      this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing();
      this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [0, 0];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this);
      this._isDraggable = true;
      if (this.#cl) {
        this.#cl = false;
        this.commit();
        this.parent.setSelected(this);
        t2 && this.isOnScreen && this.div.focus();
      }
    }
    remove() {
      this.#el();
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          this.#Yo();
          this.#fl(this.#hl.box);
          this.isAttachedToDOM || this.parent.add(this);
        }
      }
    }
    setParent(t2) {
      let e2 = false;
      if (this.parent && !t2) {
        this._uiManager.removeShouldRescale(this);
        this.#el();
      } else if (t2) {
        this._uiManager.addShouldRescale(this);
        this.#Yo(t2);
        e2 = !this.parent && this.div?.classList.contains("selectedEditor");
      }
      super.setParent(t2);
      e2 && this.select();
    }
    #el() {
      if (null !== this._drawId && this.parent) {
        this.parent.drawLayer.remove(this._drawId);
        this._drawId = null;
        this._drawingOptions.reset();
      }
    }
    #Yo(t2 = this.parent) {
      if (null === this._drawId || this.parent !== t2) if (null === this._drawId) {
        this._drawingOptions.updateAll();
        this._drawId = this.#ml(this.#hl, t2);
      } else this.parent.drawLayer.updateParent(this._drawId, t2.drawLayer);
    }
    #vl([t2, e2, i2, n2]) {
      const { parentDimensions: [r2, s2], rotation: a2 } = this;
      switch (a2) {
        case 90:
          return [e2, 1 - t2, i2 * (s2 / r2), n2 * (r2 / s2)];
        case 180:
          return [1 - t2, 1 - e2, i2, n2];
        case 270:
          return [1 - e2, t2, i2 * (s2 / r2), n2 * (r2 / s2)];
        default:
          return [t2, e2, i2, n2];
      }
    }
    #bl() {
      const { x: t2, y: e2, width: i2, height: n2, parentDimensions: [r2, s2], rotation: a2 } = this;
      switch (a2) {
        case 90:
          return [1 - e2, t2, i2 * (r2 / s2), n2 * (s2 / r2)];
        case 180:
          return [1 - t2, 1 - e2, i2, n2];
        case 270:
          return [e2, 1 - t2, i2 * (r2 / s2), n2 * (s2 / r2)];
        default:
          return [t2, e2, i2, n2];
      }
    }
    #fl(t2) {
      [this.x, this.y, this.width, this.height] = this.#vl(t2);
      if (this.div) {
        this.fixAndSetPosition();
        this.setDims();
      }
      this._onResized();
    }
    #yl() {
      const { x: t2, y: e2, width: i2, height: n2, rotation: r2, parentRotation: s2, parentDimensions: [a2, o2] } = this;
      switch ((4 * r2 + s2) / 90) {
        case 1:
          return [1 - e2 - n2, t2, n2, i2];
        case 2:
          return [1 - t2 - i2, 1 - e2 - n2, i2, n2];
        case 3:
          return [e2, 1 - t2 - i2, n2, i2];
        case 4:
          return [t2, e2 - i2 * (a2 / o2), n2 * (o2 / a2), i2 * (a2 / o2)];
        case 5:
          return [1 - e2, t2, i2 * (a2 / o2), n2 * (o2 / a2)];
        case 6:
          return [1 - t2 - n2 * (o2 / a2), 1 - e2, n2 * (o2 / a2), i2 * (a2 / o2)];
        case 7:
          return [e2 - i2 * (a2 / o2), 1 - t2 - n2 * (o2 / a2), i2 * (a2 / o2), n2 * (o2 / a2)];
        case 8:
          return [t2 - i2, e2 - n2, i2, n2];
        case 9:
          return [1 - e2, t2 - i2, n2, i2];
        case 10:
          return [1 - t2, 1 - e2, i2, n2];
        case 11:
          return [e2 - n2, 1 - t2, n2, i2];
        case 12:
          return [t2 - n2 * (o2 / a2), e2, n2 * (o2 / a2), i2 * (a2 / o2)];
        case 13:
          return [1 - e2 - i2 * (a2 / o2), t2 - n2 * (o2 / a2), i2 * (a2 / o2), n2 * (o2 / a2)];
        case 14:
          return [1 - t2, 1 - e2 - i2 * (a2 / o2), n2 * (o2 / a2), i2 * (a2 / o2)];
        case 15:
          return [e2, 1 - t2, i2 * (a2 / o2), n2 * (o2 / a2)];
        default:
          return [t2, e2, i2, n2];
      }
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties({ bbox: this.#yl() }, this.#hl.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && this.#fl(this.#hl.updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy) {
        t2 = this.x;
        e2 = this.y;
      }
      const i2 = super.render();
      i2.classList.add("draw");
      const n2 = document.createElement("div");
      i2.append(n2);
      n2.setAttribute("aria-hidden", "true");
      n2.className = "internal";
      this.setDims();
      this._uiManager.addShouldRescale(this);
      this.disableEditing();
      this._isCopy && this._moveAfterPaste(t2, e2);
      return i2;
    }
    static createDrawerInstance(t2, e2, i2, n2, r2) {
      unreachable("Not implemented");
    }
    static startDrawing(t2, e2, i2, n2) {
      const { target: r2, offsetX: s2, offsetY: a2, pointerId: o2, pointerType: l2 } = n2;
      if (CurrentPointers.isInitializedAndDifferentPointerType(l2)) return;
      const { viewport: { rotation: h2 } } = t2, { width: c2, height: d2 } = r2.getBoundingClientRect(), u2 = _DrawingEditor.#ul = new AbortController(), p2 = t2.combinedSignal(u2);
      CurrentPointers.setPointer(l2, o2);
      window.addEventListener("pointerup", (t3) => {
        CurrentPointers.isSamePointerIdOrRemove(t3.pointerId) && this._endDraw(t3);
      }, { signal: p2 });
      window.addEventListener("pointercancel", (t3) => {
        CurrentPointers.isSamePointerIdOrRemove(t3.pointerId) && this._currentParent.endDrawingSession();
      }, { signal: p2 });
      window.addEventListener("pointerdown", (t3) => {
        if (CurrentPointers.isSamePointerType(t3.pointerType)) {
          CurrentPointers.initializeAndAddPointerId(t3.pointerId);
          if (_DrawingEditor.#dl.isCancellable()) {
            _DrawingEditor.#dl.removeLastElement();
            _DrawingEditor.#dl.isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null);
          }
        }
      }, { capture: true, passive: false, signal: p2 });
      window.addEventListener("contextmenu", noContextMenu, { signal: p2 });
      r2.addEventListener("pointermove", this._drawMove.bind(this), { signal: p2 });
      r2.addEventListener("touchmove", (t3) => {
        CurrentPointers.isSameTimeStamp(t3.timeStamp) && stopEvent(t3);
      }, { signal: p2 });
      t2.toggleDrawing();
      e2._editorUndoBar?.hide();
      if (_DrawingEditor.#dl) t2.drawLayer.updateProperties(this._currentDrawId, _DrawingEditor.#dl.startNew(s2, a2, c2, d2, h2));
      else {
        e2.updateUIForDefaultProperties(this);
        _DrawingEditor.#dl = this.createDrawerInstance(s2, a2, c2, d2, h2);
        _DrawingEditor.#pl = this.getDefaultDrawingOptions();
        this._currentParent = t2;
        ({ id: this._currentDrawId } = t2.drawLayer.draw(this._mergeSVGProperties(_DrawingEditor.#pl.toSVGProperties(), _DrawingEditor.#dl.defaultSVGProperties), true, false));
      }
    }
    static _drawMove(t2) {
      CurrentPointers.isSameTimeStamp(t2.timeStamp);
      if (!_DrawingEditor.#dl) return;
      const { offsetX: e2, offsetY: i2, pointerId: n2 } = t2;
      if (CurrentPointers.isSamePointerId(n2)) if (CurrentPointers.isUsingMultiplePointers()) this._endDraw(t2);
      else {
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, _DrawingEditor.#dl.add(e2, i2));
        CurrentPointers.setTimeStamp(t2.timeStamp);
        stopEvent(t2);
      }
    }
    static _cleanup(t2) {
      if (t2) {
        this._currentDrawId = -1;
        this._currentParent = null;
        _DrawingEditor.#dl = null;
        _DrawingEditor.#pl = null;
        CurrentPointers.clearTimeStamp();
      }
      if (_DrawingEditor.#ul) {
        _DrawingEditor.#ul.abort();
        _DrawingEditor.#ul = null;
        CurrentPointers.clearPointerIds();
      }
    }
    static _endDraw(t2) {
      const e2 = this._currentParent;
      if (e2) {
        e2.toggleDrawing(true);
        this._cleanup(false);
        t2?.target === e2.div && e2.drawLayer.updateProperties(this._currentDrawId, _DrawingEditor.#dl.end(t2.offsetX, t2.offsetY));
        if (this.supportMultipleDrawings) {
          const t3 = _DrawingEditor.#dl, i2 = this._currentDrawId, n2 = t3.getLastElement();
          e2.addCommands({ cmd: () => {
            e2.drawLayer.updateProperties(i2, t3.setLastElement(n2));
          }, undo: () => {
            e2.drawLayer.updateProperties(i2, t3.removeLastElement());
          }, mustExec: false, type: f.DRAW_STEP });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t2) {
      const e2 = this._currentParent;
      if (!e2) return null;
      e2.toggleDrawing(true);
      e2.cleanUndoStack(f.DRAW_STEP);
      if (!_DrawingEditor.#dl.isEmpty()) {
        const { pageDimensions: [i2, n2], scale: r2 } = e2, s2 = e2.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false, { drawId: this._currentDrawId, drawOutlines: _DrawingEditor.#dl.getOutlines(i2 * r2, n2 * r2, r2, this._INNER_MARGIN), drawingOptions: _DrawingEditor.#pl, mustBeCommitted: !t2 });
        this._cleanup(true);
        return s2;
      }
      e2.drawLayer.remove(this._currentDrawId);
      this._cleanup(true);
      return null;
    }
    createDrawingOptions(t2) {
    }
    static deserializeDraw(t2, e2, i2, n2, r2, s2) {
      unreachable("Not implemented");
    }
    static async deserialize(t2, e2, i2) {
      const { rawDims: { pageWidth: n2, pageHeight: r2, pageX: s2, pageY: a2 } } = e2.viewport, o2 = this.deserializeDraw(s2, a2, n2, r2, this._INNER_MARGIN, t2), l2 = await super.deserialize(t2, e2, i2);
      l2.createDrawingOptions(t2);
      l2.#gl({ drawOutlines: o2 });
      l2.#Yo();
      l2.onScaleChanging();
      l2.rotate();
      return l2;
    }
    serializeDraw(t2) {
      const [e2, i2] = this.pageTranslation, [n2, r2] = this.pageDimensions;
      return this.#hl.serialize([e2, i2, n2, r2], t2);
    }
    renderAnnotationElement(t2) {
      t2.updateEdited({ rect: this.getPDFRect() });
      return null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  var InkDrawOutliner = class {
    #so = new Float64Array(6);
    #Sa;
    #wl;
    #Fr;
    #do;
    #uo;
    #Al = "";
    #xl = 0;
    #Bo = new InkDrawOutline();
    #El;
    #_l;
    constructor(t2, e2, i2, n2, r2, s2) {
      this.#El = i2;
      this.#_l = n2;
      this.#Fr = r2;
      this.#do = s2;
      [t2, e2] = this.#Tl(t2, e2);
      const a2 = this.#Sa = [NaN, NaN, NaN, NaN, t2, e2];
      this.#uo = [t2, e2];
      this.#wl = [{ line: a2, points: this.#uo }];
      this.#so.set(a2, 0);
    }
    updateProperty(t2, e2) {
      "stroke-width" === t2 && (this.#do = e2);
    }
    #Tl(t2, e2) {
      return Outline._normalizePoint(t2, e2, this.#El, this.#_l, this.#Fr);
    }
    isEmpty() {
      return !this.#wl || 0 === this.#wl.length;
    }
    isCancellable() {
      return this.#uo.length <= 10;
    }
    add(t2, e2) {
      [t2, e2] = this.#Tl(t2, e2);
      const [i2, n2, r2, s2] = this.#so.subarray(2, 6), a2 = t2 - r2, o2 = e2 - s2;
      if (Math.hypot(this.#El * a2, this.#_l * o2) <= 2) return null;
      this.#uo.push(t2, e2);
      if (isNaN(i2)) {
        this.#so.set([r2, s2, t2, e2], 2);
        this.#Sa.push(NaN, NaN, NaN, NaN, t2, e2);
        return { path: { d: this.toSVGPath() } };
      }
      isNaN(this.#so[0]) && this.#Sa.splice(6, 6);
      this.#so.set([i2, n2, r2, s2, t2, e2], 0);
      this.#Sa.push(...Outline.createBezierPoints(i2, n2, r2, s2, t2, e2));
      return { path: { d: this.toSVGPath() } };
    }
    end(t2, e2) {
      const i2 = this.add(t2, e2);
      return i2 || (2 === this.#uo.length ? { path: { d: this.toSVGPath() } } : null);
    }
    startNew(t2, e2, i2, n2, r2) {
      this.#El = i2;
      this.#_l = n2;
      this.#Fr = r2;
      [t2, e2] = this.#Tl(t2, e2);
      const s2 = this.#Sa = [NaN, NaN, NaN, NaN, t2, e2];
      this.#uo = [t2, e2];
      const a2 = this.#wl.at(-1);
      if (a2) {
        a2.line = new Float32Array(a2.line);
        a2.points = new Float32Array(a2.points);
      }
      this.#wl.push({ line: s2, points: this.#uo });
      this.#so.set(s2, 0);
      this.#xl = 0;
      this.toSVGPath();
      return null;
    }
    getLastElement() {
      return this.#wl.at(-1);
    }
    setLastElement(t2) {
      if (!this.#wl) return this.#Bo.setLastElement(t2);
      this.#wl.push(t2);
      this.#Sa = t2.line;
      this.#uo = t2.points;
      this.#xl = 0;
      return { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
      if (!this.#wl) return this.#Bo.removeLastElement();
      this.#wl.pop();
      this.#Al = "";
      for (let t2 = 0, e2 = this.#wl.length; t2 < e2; t2++) {
        const { line: e3, points: i2 } = this.#wl[t2];
        this.#Sa = e3;
        this.#uo = i2;
        this.#xl = 0;
        this.toSVGPath();
      }
      return { path: { d: this.#Al } };
    }
    toSVGPath() {
      const t2 = Outline.svgRound(this.#Sa[4]), e2 = Outline.svgRound(this.#Sa[5]);
      if (2 === this.#uo.length) {
        this.#Al = `${this.#Al} M ${t2} ${e2} Z`;
        return this.#Al;
      }
      if (this.#uo.length <= 6) {
        const i3 = this.#Al.lastIndexOf("M");
        this.#Al = `${this.#Al.slice(0, i3)} M ${t2} ${e2}`;
        this.#xl = 6;
      }
      if (4 === this.#uo.length) {
        const t3 = Outline.svgRound(this.#Sa[10]), e3 = Outline.svgRound(this.#Sa[11]);
        this.#Al = `${this.#Al} L ${t3} ${e3}`;
        this.#xl = 12;
        return this.#Al;
      }
      const i2 = [];
      if (0 === this.#xl) {
        i2.push(`M ${t2} ${e2}`);
        this.#xl = 6;
      }
      for (let t3 = this.#xl, e3 = this.#Sa.length; t3 < e3; t3 += 6) {
        const [e4, n2, r2, s2, a2, o2] = this.#Sa.slice(t3, t3 + 6).map(Outline.svgRound);
        i2.push(`C${e4} ${n2} ${r2} ${s2} ${a2} ${o2}`);
      }
      this.#Al += i2.join(" ");
      this.#xl = this.#Sa.length;
      return this.#Al;
    }
    getOutlines(t2, e2, i2, n2) {
      const r2 = this.#wl.at(-1);
      r2.line = new Float32Array(r2.line);
      r2.points = new Float32Array(r2.points);
      this.#Bo.build(this.#wl, t2, e2, i2, this.#Fr, this.#do, n2);
      this.#so = null;
      this.#Sa = null;
      this.#wl = null;
      this.#Al = null;
      return this.#Bo;
    }
    get defaultSVGProperties() {
      return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: true }, bbox: [0, 0, 1, 1] };
    }
  };
  var InkDrawOutline = class extends Outline {
    #Eo;
    #Sl = 0;
    #io;
    #wl;
    #El;
    #_l;
    #Cl;
    #Fr;
    #do;
    build(t2, e2, i2, n2, r2, s2, a2) {
      this.#El = e2;
      this.#_l = i2;
      this.#Cl = n2;
      this.#Fr = r2;
      this.#do = s2;
      this.#io = a2 ?? 0;
      this.#wl = t2;
      this.#Dl();
    }
    get thickness() {
      return this.#do;
    }
    setLastElement(t2) {
      this.#wl.push(t2);
      return { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
      this.#wl.pop();
      return { path: { d: this.toSVGPath() } };
    }
    toSVGPath() {
      const t2 = [];
      for (const { line: e2 } of this.#wl) {
        t2.push(`M${Outline.svgRound(e2[4])} ${Outline.svgRound(e2[5])}`);
        if (6 !== e2.length) if (12 === e2.length && isNaN(e2[6])) t2.push(`L${Outline.svgRound(e2[10])} ${Outline.svgRound(e2[11])}`);
        else for (let i2 = 6, n2 = e2.length; i2 < n2; i2 += 6) {
          const [n3, r2, s2, a2, o2, l2] = e2.subarray(i2, i2 + 6).map(Outline.svgRound);
          t2.push(`C${n3} ${r2} ${s2} ${a2} ${o2} ${l2}`);
        }
        else t2.push("Z");
      }
      return t2.join("");
    }
    serialize([t2, e2, i2, n2], r2) {
      const s2 = [], a2 = [], [o2, l2, h2, c2] = this.#Pl();
      let d2, u2, p2, g2, m2, f2, b2, y2, v2;
      switch (this.#Fr) {
        case 0:
          v2 = Outline._rescale;
          d2 = t2;
          u2 = e2 + n2;
          p2 = i2;
          g2 = -n2;
          m2 = t2 + o2 * i2;
          f2 = e2 + (1 - l2 - c2) * n2;
          b2 = t2 + (o2 + h2) * i2;
          y2 = e2 + (1 - l2) * n2;
          break;
        case 90:
          v2 = Outline._rescaleAndSwap;
          d2 = t2;
          u2 = e2;
          p2 = i2;
          g2 = n2;
          m2 = t2 + l2 * i2;
          f2 = e2 + o2 * n2;
          b2 = t2 + (l2 + c2) * i2;
          y2 = e2 + (o2 + h2) * n2;
          break;
        case 180:
          v2 = Outline._rescale;
          d2 = t2 + i2;
          u2 = e2;
          p2 = -i2;
          g2 = n2;
          m2 = t2 + (1 - o2 - h2) * i2;
          f2 = e2 + l2 * n2;
          b2 = t2 + (1 - o2) * i2;
          y2 = e2 + (l2 + c2) * n2;
          break;
        case 270:
          v2 = Outline._rescaleAndSwap;
          d2 = t2 + i2;
          u2 = e2 + n2;
          p2 = -i2;
          g2 = -n2;
          m2 = t2 + (1 - l2 - c2) * i2;
          f2 = e2 + (1 - o2 - h2) * n2;
          b2 = t2 + (1 - l2) * i2;
          y2 = e2 + (1 - o2) * n2;
      }
      for (const { line: t3, points: e3 } of this.#wl) {
        s2.push(v2(t3, d2, u2, p2, g2, r2 ? new Array(t3.length) : null));
        a2.push(v2(e3, d2, u2, p2, g2, r2 ? new Array(e3.length) : null));
      }
      return { lines: s2, points: a2, rect: [m2, f2, b2, y2] };
    }
    static deserialize(t2, e2, i2, n2, r2, { paths: { lines: s2, points: a2 }, rotation: o2, thickness: l2 }) {
      const h2 = [];
      let c2, d2, u2, p2, g2;
      switch (o2) {
        case 0:
          g2 = Outline._rescale;
          c2 = -t2 / i2;
          d2 = e2 / n2 + 1;
          u2 = 1 / i2;
          p2 = -1 / n2;
          break;
        case 90:
          g2 = Outline._rescaleAndSwap;
          c2 = -e2 / n2;
          d2 = -t2 / i2;
          u2 = 1 / n2;
          p2 = 1 / i2;
          break;
        case 180:
          g2 = Outline._rescale;
          c2 = t2 / i2 + 1;
          d2 = -e2 / n2;
          u2 = -1 / i2;
          p2 = 1 / n2;
          break;
        case 270:
          g2 = Outline._rescaleAndSwap;
          c2 = e2 / n2 + 1;
          d2 = t2 / i2 + 1;
          u2 = -1 / n2;
          p2 = -1 / i2;
      }
      if (!s2) {
        s2 = [];
        for (const t3 of a2) {
          const e3 = t3.length;
          if (2 === e3) {
            s2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1]]));
            continue;
          }
          if (4 === e3) {
            s2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1], NaN, NaN, NaN, NaN, t3[2], t3[3]]));
            continue;
          }
          const i3 = new Float32Array(3 * (e3 - 2));
          s2.push(i3);
          let [n3, r3, a3, o3] = t3.subarray(0, 4);
          i3.set([NaN, NaN, NaN, NaN, n3, r3], 0);
          for (let s3 = 4; s3 < e3; s3 += 2) {
            const e4 = t3[s3], l3 = t3[s3 + 1];
            i3.set(Outline.createBezierPoints(n3, r3, a3, o3, e4, l3), 3 * (s3 - 2));
            [n3, r3, a3, o3] = [a3, o3, e4, l3];
          }
        }
      }
      for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) h2.push({ line: g2(s2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2), points: g2(a2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2) });
      const m2 = new this.prototype.constructor();
      m2.build(h2, i2, n2, 1, o2, l2, r2);
      return m2;
    }
    #Ml(t2 = this.#do) {
      const e2 = this.#io + t2 / 2 * this.#Cl;
      return this.#Fr % 180 == 0 ? [e2 / this.#El, e2 / this.#_l] : [e2 / this.#_l, e2 / this.#El];
    }
    #Pl() {
      const [t2, e2, i2, n2] = this.#Eo, [r2, s2] = this.#Ml(0);
      return [t2 + r2, e2 + s2, i2 - 2 * r2, n2 - 2 * s2];
    }
    #Dl() {
      const t2 = this.#Eo = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
      for (const { line: e3 } of this.#wl) {
        if (e3.length <= 12) {
          for (let i4 = 4, n3 = e3.length; i4 < n3; i4 += 6) Util.pointBoundingBox(e3[i4], e3[i4 + 1], t2);
          continue;
        }
        let i3 = e3[4], n2 = e3[5];
        for (let r2 = 6, s2 = e3.length; r2 < s2; r2 += 6) {
          const [s3, a2, o2, l2, h2, c2] = e3.subarray(r2, r2 + 6);
          Util.bezierBoundingBox(i3, n2, s3, a2, o2, l2, h2, c2, t2);
          i3 = h2;
          n2 = c2;
        }
      }
      const [e2, i2] = this.#Ml();
      t2[0] = MathClamp(t2[0] - e2, 0, 1);
      t2[1] = MathClamp(t2[1] - i2, 0, 1);
      t2[2] = MathClamp(t2[2] + e2, 0, 1);
      t2[3] = MathClamp(t2[3] + i2, 0, 1);
      t2[2] -= t2[0];
      t2[3] -= t2[1];
    }
    get box() {
      return this.#Eo;
    }
    updateProperty(t2, e2) {
      return "stroke-width" === t2 ? this.#Qo(e2) : null;
    }
    #Qo(t2) {
      const [e2, i2] = this.#Ml();
      this.#do = t2;
      const [n2, r2] = this.#Ml(), [s2, a2] = [n2 - e2, r2 - i2], o2 = this.#Eo;
      o2[0] -= s2;
      o2[1] -= a2;
      o2[2] += 2 * s2;
      o2[3] += 2 * a2;
      return o2;
    }
    updateParentDimensions([t2, e2], i2) {
      const [n2, r2] = this.#Ml();
      this.#El = t2;
      this.#_l = e2;
      this.#Cl = i2;
      const [s2, a2] = this.#Ml(), o2 = s2 - n2, l2 = a2 - r2, h2 = this.#Eo;
      h2[0] -= o2;
      h2[1] -= l2;
      h2[2] += 2 * o2;
      h2[3] += 2 * l2;
      return h2;
    }
    updateRotation(t2) {
      this.#Sl = t2;
      return { path: { transform: this.rotationTransform } };
    }
    get viewBox() {
      return this.#Eo.map(Outline.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t2, e2] = this.#Eo;
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
    }
    get rotationTransform() {
      const [, , t2, e2] = this.#Eo;
      let i2 = 0, n2 = 0, r2 = 0, s2 = 0, a2 = 0, o2 = 0;
      switch (this.#Sl) {
        case 90:
          n2 = e2 / t2;
          r2 = -t2 / e2;
          a2 = t2;
          break;
        case 180:
          i2 = -1;
          s2 = -1;
          a2 = t2;
          o2 = e2;
          break;
        case 270:
          n2 = -e2 / t2;
          r2 = t2 / e2;
          o2 = e2;
          break;
        default:
          return "";
      }
      return `matrix(${i2} ${n2} ${r2} ${s2} ${Outline.svgRound(a2)} ${Outline.svgRound(o2)})`;
    }
    getPathResizingSVGProperties([t2, e2, i2, n2]) {
      const [r2, s2] = this.#Ml(), [a2, o2, l2, h2] = this.#Eo;
      if (Math.abs(l2 - r2) <= Outline.PRECISION || Math.abs(h2 - s2) <= Outline.PRECISION) {
        const r3 = t2 + i2 / 2 - (a2 + l2 / 2), s3 = e2 + n2 / 2 - (o2 + h2 / 2);
        return { path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: `${this.rotationTransform} translate(${r3} ${s3})` } };
      }
      const c2 = (i2 - 2 * r2) / (l2 - 2 * r2), d2 = (n2 - 2 * s2) / (h2 - 2 * s2), u2 = l2 / i2, p2 = h2 / n2;
      return { path: { "transform-origin": `${Outline.svgRound(a2)} ${Outline.svgRound(o2)}`, transform: `${this.rotationTransform} scale(${u2} ${p2}) translate(${Outline.svgRound(r2)} ${Outline.svgRound(s2)}) scale(${c2} ${d2}) translate(${Outline.svgRound(-r2)} ${Outline.svgRound(-s2)})` } };
    }
    getPathResizedSVGProperties([t2, e2, i2, n2]) {
      const [r2, s2] = this.#Ml(), a2 = this.#Eo, [o2, l2, h2, c2] = a2;
      a2[0] = t2;
      a2[1] = e2;
      a2[2] = i2;
      a2[3] = n2;
      if (Math.abs(h2 - r2) <= Outline.PRECISION || Math.abs(c2 - s2) <= Outline.PRECISION) {
        const r3 = t2 + i2 / 2 - (o2 + h2 / 2), s3 = e2 + n2 / 2 - (l2 + c2 / 2);
        for (const { line: t3, points: e3 } of this.#wl) {
          Outline._translate(t3, r3, s3, t3);
          Outline._translate(e3, r3, s3, e3);
        }
        return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
      }
      const d2 = (i2 - 2 * r2) / (h2 - 2 * r2), u2 = (n2 - 2 * s2) / (c2 - 2 * s2), p2 = -d2 * (o2 + r2) + t2 + r2, g2 = -u2 * (l2 + s2) + e2 + s2;
      if (1 !== d2 || 1 !== u2 || 0 !== p2 || 0 !== g2) for (const { line: t3, points: e3 } of this.#wl) {
        Outline._rescale(t3, p2, g2, d2, u2, t3);
        Outline._rescale(e3, p2, g2, d2, u2, e3);
      }
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    getPathTranslatedSVGProperties([t2, e2], i2) {
      const [n2, r2] = i2, s2 = this.#Eo, a2 = t2 - s2[0], o2 = e2 - s2[1];
      if (this.#El === n2 && this.#_l === r2) for (const { line: t3, points: e3 } of this.#wl) {
        Outline._translate(t3, a2, o2, t3);
        Outline._translate(e3, a2, o2, e3);
      }
      else {
        const t3 = this.#El / n2, e3 = this.#_l / r2;
        this.#El = n2;
        this.#_l = r2;
        for (const { line: i3, points: n3 } of this.#wl) {
          Outline._rescale(i3, a2, o2, t3, e3, i3);
          Outline._rescale(n3, a2, o2, t3, e3, n3);
        }
        s2[2] *= t3;
        s2[3] *= e3;
      }
      s2[0] = t2;
      s2[1] = e2;
      return { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
    }
    get defaultSVGProperties() {
      const t2 = this.#Eo;
      return { root: { viewBox: this.viewBox }, rootClass: { draw: true }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2[0])} ${Outline.svgRound(t2[1])}`, transform: this.rotationTransform || null }, bbox: t2 };
    }
  };
  var InkDrawingOptions = class _InkDrawingOptions extends DrawingOptions {
    constructor(t2) {
      super();
      this._viewParameters = t2;
      super.updateProperties({ fill: "none", stroke: AnnotationEditor._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
    }
    updateSVGProperty(t2, e2) {
      if ("stroke-width" === t2) {
        e2 ??= this["stroke-width"];
        e2 *= this._viewParameters.realScale;
      }
      super.updateSVGProperty(t2, e2);
    }
    clone() {
      const t2 = new _InkDrawingOptions(this._viewParameters);
      t2.updateAll(this);
      return t2;
    }
  };
  var InkEditor = class _InkEditor extends DrawingEditor {
    static _type = "ink";
    static _editorType = m.INK;
    static _defaultDrawingOptions = null;
    constructor(t2) {
      super({ ...t2, name: "inkEditor" });
      this._willKeepAspectRatio = true;
      this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      this._defaultDrawingOptions = new InkDrawingOptions(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      e2.updateProperties(t2);
      return e2;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return shadow(this, "typesMap", /* @__PURE__ */ new Map([[f.INK_THICKNESS, "stroke-width"], [f.INK_COLOR, "stroke"], [f.INK_OPACITY, "stroke-opacity"]]));
    }
    static createDrawerInstance(t2, e2, i2, n2, r2) {
      return new InkDrawOutliner(t2, e2, i2, n2, r2, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t2, e2, i2, n2, r2, s2) {
      return InkDrawOutline.deserialize(t2, e2, i2, n2, r2, s2);
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null;
      if (t2 instanceof InkAnnotationElement) {
        const { data: { inkLists: e3, rect: i3, rotation: r3, id: s2, color: a2, opacity: o2, borderStyle: { rawWidth: l2 }, popupRef: h2, richText: c2, contentsObj: d2, creationDate: u2, modificationDate: p2 }, parent: { page: { pageNumber: g2 } } } = t2;
        n2 = t2 = { annotationType: m.INK, color: Array.from(a2), thickness: l2, opacity: o2, paths: { points: e3 }, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: r3, annotationElementId: s2, id: s2, deleted: false, popupRef: h2, richText: c2, comment: d2?.str || null, creationDate: u2, modificationDate: p2 };
      }
      const r2 = await super.deserialize(t2, e2, i2);
      r2._initialData = n2;
      t2.comment && r2.setCommentData(t2);
      return r2;
    }
    get toolbarButtons() {
      this._colorPicker ||= new BasicColorPicker(this);
      return [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return f.INK_COLOR;
    }
    get color() {
      return this._drawingOptions.stroke;
    }
    get opacity() {
      return this._drawingOptions["stroke-opacity"];
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t2, _drawingOptions: e2, parent: i2 } = this;
      e2.updateSVGProperty("stroke-width");
      i2.drawLayer.updateProperties(t2, e2.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t2 = this._currentParent;
      if (t2) {
        super.onScaleChangingWhenDrawing();
        this._defaultDrawingOptions.updateSVGProperty("stroke-width");
        t2.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
      }
    }
    createDrawingOptions({ color: t2, thickness: e2, opacity: i2 }) {
      this._drawingOptions = _InkEditor.getDefaultDrawingOptions({ stroke: Util.makeHexColor(...t2), "stroke-width": e2, "stroke-opacity": i2 });
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { stroke: n2, "stroke-opacity": r2, "stroke-width": s2 } } = this, a2 = Object.assign(super.serialize(t2), { color: AnnotationEditor._colorManager.convert(n2), opacity: r2, thickness: s2, paths: { lines: e2, points: i2 } });
      this.addComment(a2);
      if (t2) {
        a2.isCopy = true;
        return a2;
      }
      if (this.annotationElementId && !this.#Za(a2)) return null;
      a2.id = this.annotationElementId;
      return a2;
    }
    #Za(t2) {
      const { color: e2, thickness: i2, opacity: n2, pageIndex: r2 } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t2.color.some((t3, i3) => t3 !== e2[i3]) || t2.thickness !== i2 || t2.opacity !== n2 || t2.pageIndex !== r2;
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      const { points: e2, rect: i2 } = this.serializeDraw(false);
      t2.updateEdited({ rect: i2, thickness: this._drawingOptions["stroke-width"], points: e2, popup: this.comment });
      return null;
    }
  };
  var ContourDrawOutline = class extends InkDrawOutline {
    toSVGPath() {
      let t2 = super.toSVGPath();
      t2.endsWith("Z") || (t2 += "Z");
      return t2;
    }
  };
  __webpack_require__(5213);
  var SignatureExtractor = class {
    static #kl = { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 };
    static #Il(t2, e2, i2, n2) {
      n2 -= e2;
      return 0 === (i2 -= t2) ? n2 > 0 ? 0 : 4 : 1 === i2 ? n2 + 6 : 2 - n2;
    }
    static #Fl = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
    static #Rl(t2, e2, i2, n2, r2, s2, a2) {
      const o2 = this.#Il(i2, n2, r2, s2);
      for (let r3 = 0; r3 < 8; r3++) {
        const s3 = (-r3 + o2 - a2 + 16) % 8;
        if (0 !== t2[(i2 + this.#Fl[2 * s3]) * e2 + (n2 + this.#Fl[2 * s3 + 1])]) return s3;
      }
      return -1;
    }
    static #Bl(t2, e2, i2, n2, r2, s2, a2) {
      const o2 = this.#Il(i2, n2, r2, s2);
      for (let r3 = 0; r3 < 8; r3++) {
        const s3 = (r3 + o2 + a2 + 16) % 8;
        if (0 !== t2[(i2 + this.#Fl[2 * s3]) * e2 + (n2 + this.#Fl[2 * s3 + 1])]) return s3;
      }
      return -1;
    }
    static #Ol(t2, e2, i2, n2) {
      const r2 = t2.length, s2 = new Int32Array(r2);
      for (let e3 = 0; e3 < r2; e3++) s2[e3] = t2[e3] <= n2 ? 1 : 0;
      for (let t3 = 1; t3 < i2 - 1; t3++) s2[t3 * e2] = s2[t3 * e2 + e2 - 1] = 0;
      for (let t3 = 0; t3 < e2; t3++) s2[t3] = s2[e2 * i2 - 1 - t3] = 0;
      let a2, o2 = 1;
      const l2 = [];
      for (let t3 = 1; t3 < i2 - 1; t3++) {
        a2 = 1;
        for (let i3 = 1; i3 < e2 - 1; i3++) {
          const n3 = t3 * e2 + i3, r3 = s2[n3];
          if (0 === r3) continue;
          let h2 = t3, c2 = i3;
          if (1 === r3 && 0 === s2[n3 - 1]) {
            o2 += 1;
            c2 -= 1;
          } else {
            if (!(r3 >= 1 && 0 === s2[n3 + 1])) {
              1 !== r3 && (a2 = Math.abs(r3));
              continue;
            }
            o2 += 1;
            c2 += 1;
            r3 > 1 && (a2 = r3);
          }
          const d2 = [i3, t3], u2 = c2 === i3 + 1, p2 = { isHole: u2, points: d2, id: o2, parent: 0 };
          l2.push(p2);
          let g2;
          for (const t4 of l2) if (t4.id === a2) {
            g2 = t4;
            break;
          }
          g2 ? g2.isHole ? p2.parent = u2 ? g2.parent : a2 : p2.parent = u2 ? a2 : g2.parent : p2.parent = u2 ? a2 : 0;
          const m2 = this.#Rl(s2, e2, t3, i3, h2, c2, 0);
          if (-1 === m2) {
            s2[n3] = -o2;
            1 !== s2[n3] && (a2 = Math.abs(s2[n3]));
            continue;
          }
          let f2 = this.#Fl[2 * m2], b2 = this.#Fl[2 * m2 + 1];
          const y2 = t3 + f2, v2 = i3 + b2;
          h2 = y2;
          c2 = v2;
          let w2 = t3, A2 = i3;
          for (; ; ) {
            const r4 = this.#Bl(s2, e2, w2, A2, h2, c2, 1);
            f2 = this.#Fl[2 * r4];
            b2 = this.#Fl[2 * r4 + 1];
            const l3 = w2 + f2, u3 = A2 + b2;
            d2.push(u3, l3);
            const p3 = w2 * e2 + A2;
            0 === s2[p3 + 1] ? s2[p3] = -o2 : 1 === s2[p3] && (s2[p3] = o2);
            if (l3 === t3 && u3 === i3 && w2 === y2 && A2 === v2) {
              1 !== s2[n3] && (a2 = Math.abs(s2[n3]));
              break;
            }
            h2 = w2;
            c2 = A2;
            w2 = l3;
            A2 = u3;
          }
        }
      }
      return l2;
    }
    static #Ll(t2, e2, i2, n2) {
      if (i2 - e2 <= 4) {
        for (let r3 = e2; r3 < i2 - 2; r3 += 2) n2.push(t2[r3], t2[r3 + 1]);
        return;
      }
      const r2 = t2[e2], s2 = t2[e2 + 1], a2 = t2[i2 - 4] - r2, o2 = t2[i2 - 3] - s2, l2 = Math.hypot(a2, o2), h2 = a2 / l2, c2 = o2 / l2, d2 = h2 * s2 - c2 * r2, u2 = o2 / a2, p2 = 1 / l2, g2 = Math.atan(u2), m2 = Math.cos(g2), f2 = Math.sin(g2), b2 = p2 * (Math.abs(m2) + Math.abs(f2)), y2 = p2 * (1 - b2 + b2 ** 2), v2 = Math.max(Math.atan(Math.abs(f2 + m2) * y2), Math.atan(Math.abs(f2 - m2) * y2));
      let w2 = 0, A2 = e2;
      for (let n3 = e2 + 2; n3 < i2 - 2; n3 += 2) {
        const e3 = Math.abs(d2 - h2 * t2[n3 + 1] + c2 * t2[n3]);
        if (e3 > w2) {
          A2 = n3;
          w2 = e3;
        }
      }
      if (w2 > (l2 * v2) ** 2) {
        this.#Ll(t2, e2, A2 + 2, n2);
        this.#Ll(t2, A2, i2, n2);
      } else n2.push(r2, s2);
    }
    static #Nl(t2) {
      const e2 = [], i2 = t2.length;
      this.#Ll(t2, 0, i2, e2);
      e2.push(t2[i2 - 2], t2[i2 - 1]);
      return e2.length <= 4 ? null : e2;
    }
    static #Ul(t2, e2, i2, n2, r2, s2) {
      const a2 = new Float32Array(s2 ** 2), o2 = -2 * n2 ** 2, l2 = s2 >> 1;
      for (let t3 = 0; t3 < s2; t3++) {
        const e3 = (t3 - l2) ** 2;
        for (let i3 = 0; i3 < s2; i3++) a2[t3 * s2 + i3] = Math.exp((e3 + (i3 - l2) ** 2) / o2);
      }
      const h2 = new Float32Array(256), c2 = -2 * r2 ** 2;
      for (let t3 = 0; t3 < 256; t3++) h2[t3] = Math.exp(t3 ** 2 / c2);
      const d2 = t2.length, u2 = new Uint8Array(d2), p2 = new Uint32Array(256);
      for (let n3 = 0; n3 < i2; n3++) for (let r3 = 0; r3 < e2; r3++) {
        const o3 = n3 * e2 + r3, c3 = t2[o3];
        let d3 = 0, g2 = 0;
        for (let o4 = 0; o4 < s2; o4++) {
          const u3 = n3 + o4 - l2;
          if (!(u3 < 0 || u3 >= i2)) for (let i3 = 0; i3 < s2; i3++) {
            const n4 = r3 + i3 - l2;
            if (n4 < 0 || n4 >= e2) continue;
            const p3 = t2[u3 * e2 + n4], m2 = a2[o4 * s2 + i3] * h2[Math.abs(p3 - c3)];
            d3 += p3 * m2;
            g2 += m2;
          }
        }
        p2[u2[o3] = Math.round(d3 / g2)]++;
      }
      return [u2, p2];
    }
    static #Hl(t2) {
      const e2 = new Uint32Array(256);
      for (const i2 of t2) e2[i2]++;
      return e2;
    }
    static #zl(t2) {
      const e2 = t2.length, i2 = new Uint8ClampedArray(e2 >> 2);
      let n2 = -1 / 0, r2 = 1 / 0;
      for (let e3 = 0, s3 = i2.length; e3 < s3; e3++) {
        const s4 = i2[e3] = t2[e3 << 2];
        n2 = Math.max(n2, s4);
        r2 = Math.min(r2, s4);
      }
      const s2 = 255 / (n2 - r2);
      for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) i2[t3] = (i2[t3] - r2) * s2;
      return i2;
    }
    static #jl(t2) {
      let e2, i2 = -1 / 0, n2 = -1 / 0;
      const r2 = t2.findIndex((t3) => 0 !== t3);
      let s2 = r2, a2 = r2;
      for (e2 = r2; e2 < 256; e2++) {
        const r3 = t2[e2];
        if (r3 > i2) {
          if (e2 - s2 > n2) {
            n2 = e2 - s2;
            a2 = e2 - 1;
          }
          i2 = r3;
          s2 = e2;
        }
      }
      for (e2 = a2 - 1; e2 >= 0 && !(t2[e2] > t2[e2 + 1]); e2--) ;
      return e2;
    }
    static #Gl(t2) {
      const e2 = t2, { width: i2, height: n2 } = t2, { maxDim: r2 } = this.#kl;
      let s2 = i2, a2 = n2;
      if (i2 > r2 || n2 > r2) {
        let o3 = i2, l3 = n2, h2 = Math.log2(Math.max(i2, n2) / r2);
        const c2 = Math.floor(h2);
        h2 = h2 === c2 ? c2 - 1 : c2;
        for (let i3 = 0; i3 < h2; i3++) {
          s2 = Math.ceil(o3 / 2);
          a2 = Math.ceil(l3 / 2);
          const i4 = new OffscreenCanvas(s2, a2);
          i4.getContext("2d").drawImage(t2, 0, 0, o3, l3, 0, 0, s2, a2);
          o3 = s2;
          l3 = a2;
          t2 !== e2 && t2.close();
          t2 = i4.transferToImageBitmap();
        }
        const d2 = Math.min(r2 / s2, r2 / a2);
        s2 = Math.round(s2 * d2);
        a2 = Math.round(a2 * d2);
      }
      const o2 = new OffscreenCanvas(s2, a2).getContext("2d", { willReadFrequently: true });
      o2.fillStyle = "white";
      o2.fillRect(0, 0, s2, a2);
      o2.filter = "grayscale(1)";
      o2.drawImage(t2, 0, 0, t2.width, t2.height, 0, 0, s2, a2);
      const l2 = o2.getImageData(0, 0, s2, a2).data;
      return [this.#zl(l2), s2, a2];
    }
    static extractContoursFromText(t2, { fontFamily: e2, fontStyle: i2, fontWeight: n2 }, r2, s2, a2, o2) {
      let l2 = new OffscreenCanvas(1, 1), h2 = l2.getContext("2d", { alpha: false });
      const c2 = h2.font = `${i2} ${n2} 200px ${e2}`, { actualBoundingBoxLeft: d2, actualBoundingBoxRight: u2, actualBoundingBoxAscent: p2, actualBoundingBoxDescent: g2, fontBoundingBoxAscent: m2, fontBoundingBoxDescent: f2, width: b2 } = h2.measureText(t2), y2 = 1.5, v2 = Math.ceil(Math.max(Math.abs(d2) + Math.abs(u2) || 0, b2) * y2), w2 = Math.ceil(Math.max(Math.abs(p2) + Math.abs(g2) || 200, Math.abs(m2) + Math.abs(f2) || 200) * y2);
      l2 = new OffscreenCanvas(v2, w2);
      h2 = l2.getContext("2d", { alpha: true, willReadFrequently: true });
      h2.font = c2;
      h2.filter = "grayscale(1)";
      h2.fillStyle = "white";
      h2.fillRect(0, 0, v2, w2);
      h2.fillStyle = "black";
      h2.fillText(t2, 0.5 * v2 / 2, 1.5 * w2 / 2);
      const A2 = this.#zl(h2.getImageData(0, 0, v2, w2).data), x2 = this.#Hl(A2), E2 = this.#jl(x2), _2 = this.#Ol(A2, v2, w2, E2);
      return this.processDrawnLines({ lines: { curves: _2, width: v2, height: w2 }, pageWidth: r2, pageHeight: s2, rotation: a2, innerMargin: o2, mustSmooth: true, areContours: true });
    }
    static process(t2, e2, i2, n2, r2) {
      const [s2, a2, o2] = this.#Gl(t2), [l2, h2] = this.#Ul(s2, a2, o2, Math.hypot(a2, o2) * this.#kl.sigmaSFactor, this.#kl.sigmaR, this.#kl.kernelSize), c2 = this.#jl(h2), d2 = this.#Ol(l2, a2, o2, c2);
      return this.processDrawnLines({ lines: { curves: d2, width: a2, height: o2 }, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: r2, mustSmooth: true, areContours: true });
    }
    static processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: r2, mustSmooth: s2, areContours: a2 }) {
      n2 % 180 != 0 && ([e2, i2] = [i2, e2]);
      const { curves: o2, width: l2, height: h2 } = t2, c2 = t2.thickness ?? 0, d2 = [], u2 = Math.min(e2 / l2, i2 / h2), p2 = u2 / e2, g2 = u2 / i2, m2 = [];
      for (const { points: t3 } of o2) {
        const e3 = s2 ? this.#Nl(t3) : t3;
        if (!e3) continue;
        m2.push(e3);
        const i3 = e3.length, n3 = new Float32Array(i3), r3 = new Float32Array(3 * (2 === i3 ? 2 : i3 - 2));
        d2.push({ line: r3, points: n3 });
        if (2 === i3) {
          n3[0] = e3[0] * p2;
          n3[1] = e3[1] * g2;
          r3.set([NaN, NaN, NaN, NaN, n3[0], n3[1]], 0);
          continue;
        }
        let [a3, o3, l3, h3] = e3;
        a3 *= p2;
        o3 *= g2;
        l3 *= p2;
        h3 *= g2;
        n3.set([a3, o3, l3, h3], 0);
        r3.set([NaN, NaN, NaN, NaN, a3, o3], 0);
        for (let t4 = 4; t4 < i3; t4 += 2) {
          const i4 = n3[t4] = e3[t4] * p2, s3 = n3[t4 + 1] = e3[t4 + 1] * g2;
          r3.set(Outline.createBezierPoints(a3, o3, l3, h3, i4, s3), 3 * (t4 - 2));
          [a3, o3, l3, h3] = [l3, h3, i4, s3];
        }
      }
      if (0 === d2.length) return null;
      const f2 = a2 ? new ContourDrawOutline() : new InkDrawOutline();
      f2.build(d2, e2, i2, 1, n2, a2 ? 0 : c2, r2);
      return { outline: f2, newCurves: m2, areContours: a2, thickness: c2, width: l2, height: h2 };
    }
    static async compressSignature({ outlines: t2, areContours: e2, thickness: i2, width: n2, height: r2 }) {
      let s2, a2 = 1 / 0, o2 = -1 / 0, l2 = 0;
      for (const e3 of t2) {
        l2 += e3.length;
        for (let t3 = 2, i3 = e3.length; t3 < i3; t3++) {
          const i4 = e3[t3] - e3[t3 - 2];
          a2 = Math.min(a2, i4);
          o2 = Math.max(o2, i4);
        }
      }
      s2 = a2 >= -128 && o2 <= 127 ? Int8Array : a2 >= -32768 && o2 <= 32767 ? Int16Array : Int32Array;
      const h2 = t2.length, c2 = 8 + 3 * h2, d2 = new Uint32Array(c2);
      let u2 = 0;
      d2[u2++] = c2 * Uint32Array.BYTES_PER_ELEMENT + (l2 - 2 * h2) * s2.BYTES_PER_ELEMENT;
      d2[u2++] = 0;
      d2[u2++] = n2;
      d2[u2++] = r2;
      d2[u2++] = e2 ? 0 : 1;
      d2[u2++] = Math.max(0, Math.floor(i2 ?? 0));
      d2[u2++] = h2;
      d2[u2++] = s2.BYTES_PER_ELEMENT;
      for (const e3 of t2) {
        d2[u2++] = e3.length - 2;
        d2[u2++] = e3[0];
        d2[u2++] = e3[1];
      }
      const p2 = new CompressionStream("deflate-raw"), g2 = p2.writable.getWriter();
      await g2.ready;
      g2.write(d2);
      const m2 = s2.prototype.constructor;
      for (const e3 of t2) {
        const t3 = new m2(e3.length - 2);
        for (let i3 = 2, n3 = e3.length; i3 < n3; i3++) t3[i3 - 2] = e3[i3] - e3[i3 - 2];
        g2.write(t3);
      }
      g2.close();
      return (await new Response(p2.readable).bytes()).toBase64();
    }
    static async decompressSignature(t2) {
      try {
        const e2 = Uint8Array.fromBase64(t2), { readable: i2, writable: n2 } = new DecompressionStream("deflate-raw"), r2 = n2.getWriter();
        await r2.ready;
        r2.write(e2).then(async () => {
          await r2.ready;
          await r2.close();
        }).catch(() => {
        });
        let s2 = null, a2 = 0;
        for await (const t3 of i2) {
          s2 ||= new Uint8Array(new Uint32Array(t3.buffer, 0, 4)[0]);
          s2.set(t3, a2);
          a2 += t3.length;
        }
        const o2 = new Uint32Array(s2.buffer, 0, s2.length >> 2), l2 = o2[1];
        if (0 !== l2) throw new Error(`Invalid version: ${l2}`);
        const h2 = o2[2], c2 = o2[3], d2 = 0 === o2[4], u2 = o2[5], p2 = o2[6], g2 = o2[7], m2 = [], f2 = (8 + 3 * p2) * Uint32Array.BYTES_PER_ELEMENT;
        let b2;
        switch (g2) {
          case Int8Array.BYTES_PER_ELEMENT:
            b2 = new Int8Array(s2.buffer, f2);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            b2 = new Int16Array(s2.buffer, f2);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            b2 = new Int32Array(s2.buffer, f2);
        }
        a2 = 0;
        for (let t3 = 0; t3 < p2; t3++) {
          const e3 = o2[3 * t3 + 8], i3 = new Float32Array(e3 + 2);
          m2.push(i3);
          for (let e4 = 0; e4 < 2; e4++) i3[e4] = o2[3 * t3 + 8 + e4 + 1];
          for (let t4 = 0; t4 < e3; t4++) i3[t4 + 2] = i3[t4] + b2[a2++];
        }
        return { areContours: d2, thickness: u2, outlines: m2, width: h2, height: c2 };
      } catch (t3) {
        warn(`decompressSignature: ${t3}`);
        return null;
      }
    }
  };
  var SignatureOptions = class _SignatureOptions extends DrawingOptions {
    constructor() {
      super();
      super.updateProperties({ fill: AnnotationEditor._defaultLineColor, "stroke-width": 0 });
    }
    clone() {
      const t2 = new _SignatureOptions();
      t2.updateAll(this);
      return t2;
    }
  };
  var DrawnSignatureOptions = class _DrawnSignatureOptions extends InkDrawingOptions {
    constructor(t2) {
      super(t2);
      super.updateProperties({ stroke: AnnotationEditor._defaultLineColor, "stroke-width": 1 });
    }
    clone() {
      const t2 = new _DrawnSignatureOptions(this._viewParameters);
      t2.updateAll(this);
      return t2;
    }
  };
  var SignatureEditor = class _SignatureEditor extends DrawingEditor {
    #Wl = false;
    #Vl = null;
    #$l = null;
    #ql = null;
    static _type = "signature";
    static _editorType = m.SIGNATURE;
    static _defaultDrawingOptions = null;
    constructor(t2) {
      super({ ...t2, mustBeCommitted: true, name: "signatureEditor" });
      this._willKeepAspectRatio = true;
      this.#$l = t2.signatureData || null;
      this.#Vl = null;
      this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      this._defaultDrawingOptions = new SignatureOptions();
      this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      e2.updateProperties(t2);
      return e2;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static get typesMap() {
      return shadow(this, "typesMap", /* @__PURE__ */ new Map());
    }
    static get isDrawer() {
      return false;
    }
    get telemetryFinalData() {
      return { type: "signature", hasDescription: !!this.#Vl };
    }
    static computeTelemetryFinalData(t2) {
      const e2 = t2.get("hasDescription");
      return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
    }
    get isResizable() {
      return true;
    }
    onScaleChanging() {
      null !== this._drawId && super.onScaleChanging();
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      const { _isCopy: i2 } = this;
      if (i2) {
        this._isCopy = false;
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      if (null === this._drawId) if (this.#$l) {
        const { lines: t3, mustSmooth: e3, areContours: i3, description: n2, uuid: r2, heightInPage: s2 } = this.#$l, { rawDims: { pageWidth: a2, pageHeight: o2 }, rotation: l2 } = this.parent.viewport, h2 = SignatureExtractor.processDrawnLines({ lines: t3, pageWidth: a2, pageHeight: o2, rotation: l2, innerMargin: _SignatureEditor._INNER_MARGIN, mustSmooth: e3, areContours: i3 });
        this.addSignature(h2, s2, n2, r2);
      } else {
        this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" }));
        this.div.hidden = true;
        this._uiManager.getSignature(this);
      }
      else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: this.#Vl || "" }));
      if (i2) {
        this._isCopy = true;
        this._moveAfterPaste(t2, e2);
      }
      return this.div;
    }
    setUuid(t2) {
      this.#ql = t2;
      this.addEditToolbar();
    }
    getUuid() {
      return this.#ql;
    }
    get description() {
      return this.#Vl;
    }
    set description(t2) {
      this.#Vl = t2;
      if (this.div) {
        this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t2 }));
        super.addEditToolbar().then((e2) => {
          e2?.updateEditSignatureButton(t2);
        });
      }
    }
    getSignaturePreview() {
      const { newCurves: t2, areContours: e2, thickness: i2, width: n2, height: r2 } = this.#$l, s2 = Math.max(n2, r2);
      return { areContours: e2, outline: SignatureExtractor.processDrawnLines({ lines: { curves: t2.map((t3) => ({ points: t3 })), thickness: i2, width: n2, height: r2 }, pageWidth: s2, pageHeight: s2, rotation: 0, innerMargin: 0, mustSmooth: false, areContours: e2 }).outline };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
    }
    addSignature(t2, e2, i2, n2) {
      const { x: r2, y: s2 } = this, { outline: a2 } = this.#$l = t2;
      this.#Wl = a2 instanceof ContourDrawOutline;
      this.description = i2;
      let o2;
      if (this.#Wl) o2 = _SignatureEditor.getDefaultDrawingOptions();
      else {
        o2 = _SignatureEditor._defaultDrawnSignatureOptions.clone();
        o2.updateProperties({ "stroke-width": a2.thickness });
      }
      this._addOutlines({ drawOutlines: a2, drawingOptions: o2 });
      const [, l2] = this.pageDimensions;
      let h2 = e2 / l2;
      h2 = h2 >= 1 ? 0.5 : h2;
      this.width *= h2 / this.height;
      if (this.width >= 1) {
        h2 *= 0.9 / this.width;
        this.width = 0.9;
      }
      this.height = h2;
      this.setDims();
      this.x = r2;
      this.y = s2;
      this.center();
      this._onResized();
      this.onScaleChanging();
      this.rotate();
      this._uiManager.addToAnnotationStorage(this);
      this.setUuid(n2);
      this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!n2, hasDescription: !!i2 } });
      this.div.hidden = false;
    }
    getFromImage(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: n2 } = this.parent.viewport;
      return SignatureExtractor.process(t2, e2, i2, n2, _SignatureEditor._INNER_MARGIN);
    }
    getFromText(t2, e2) {
      const { rawDims: { pageWidth: i2, pageHeight: n2 }, rotation: r2 } = this.parent.viewport;
      return SignatureExtractor.extractContoursFromText(t2, e2, i2, n2, r2, _SignatureEditor._INNER_MARGIN);
    }
    getDrawnSignature(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: n2 } = this.parent.viewport;
      return SignatureExtractor.processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: _SignatureEditor._INNER_MARGIN, mustSmooth: false, areContours: false });
    }
    createDrawingOptions({ areContours: t2, thickness: e2 }) {
      if (t2) this._drawingOptions = _SignatureEditor.getDefaultDrawingOptions();
      else {
        this._drawingOptions = _SignatureEditor._defaultDrawnSignatureOptions.clone();
        this._drawingOptions.updateProperties({ "stroke-width": e2 });
      }
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { "stroke-width": n2 } } = this, r2 = Object.assign(super.serialize(t2), { isSignature: true, areContours: this.#Wl, color: [0, 0, 0], thickness: this.#Wl ? 0 : n2 });
      this.addComment(r2);
      if (t2) {
        r2.paths = { lines: e2, points: i2 };
        r2.uuid = this.#ql;
        r2.isCopy = true;
      } else r2.lines = e2;
      this.#Vl && (r2.accessibilityData = { type: "Figure", alt: this.#Vl });
      return r2;
    }
    static deserializeDraw(t2, e2, i2, n2, r2, s2) {
      return s2.areContours ? ContourDrawOutline.deserialize(t2, e2, i2, n2, r2, s2) : InkDrawOutline.deserialize(t2, e2, i2, n2, r2, s2);
    }
    static async deserialize(t2, e2, i2) {
      const n2 = await super.deserialize(t2, e2, i2);
      n2.#Wl = t2.areContours;
      n2.description = t2.accessibilityData?.alt || "";
      n2.#ql = t2.uuid;
      return n2;
    }
  };
  var StampEditor = class extends AnnotationEditor {
    #Xl = null;
    #Yl = null;
    #Kl = null;
    #Jl = null;
    #Ql = null;
    #Zl = "";
    #th = null;
    #eh = false;
    #ih = null;
    #nh = false;
    #rh = false;
    static _type = "stamp";
    static _editorType = m.STAMP;
    constructor(t2) {
      super({ ...t2, name: "stampEditor" });
      this.#Jl = t2.bitmapUrl;
      this.#Ql = t2.bitmapFile;
      this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
    }
    static isHandlingMimeForPasting(t2) {
      return Y.includes(t2);
    }
    static paste(t2, e2) {
      e2.pasteEditor({ mode: m.STAMP }, { bitmapFile: t2.getAsFile() });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false);
      super.altTextFinish();
    }
    get telemetryFinalData() {
      return { type: "stamp", hasAltText: !!this.altTextData?.altText };
    }
    static computeTelemetryFinalData(t2) {
      const e2 = t2.get("hasAltText");
      return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
    }
    #sh(t2, e2 = false) {
      if (t2) {
        this.#Xl = t2.bitmap;
        if (!e2) {
          this.#Yl = t2.id;
          this.#nh = t2.isSvg;
        }
        t2.file && (this.#Zl = t2.file.name);
        this.#ah();
      } else this.remove();
    }
    #oh() {
      this.#Kl = null;
      this._uiManager.enableWaiting(false);
      if (this.#th) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#Xl) this.addEditToolbar().then(() => {
        this._editToolbar.hide();
        this._uiManager.editAltText(this, true);
      });
      else {
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#Xl) {
          this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: false, alt_text_type: "empty" } });
          try {
            this.mlGuessAltText();
          } catch {
          }
        }
        this.div.focus();
      }
    }
    async mlGuessAltText(t2 = null, e2 = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: i2 } = this._uiManager;
      if (!i2) throw new Error("No ML.");
      if (!await i2.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: n2, width: r2, height: s2 } = t2 || this.copyCanvas(null, null, true).imageData, a2 = await i2.guess({ name: "altText", request: { data: n2, width: r2, height: s2, channels: n2.length / (r2 * s2) } });
      if (!a2) throw new Error("No response from the AI service.");
      if (a2.error) throw new Error("Error from the AI service.");
      if (a2.cancel) return null;
      if (!a2.output) throw new Error("No valid response from the AI service.");
      const o2 = a2.output;
      await this.setGuessedAltText(o2);
      e2 && !this.hasAltTextData() && (this.altTextData = { alt: o2, decorative: false });
      return o2;
    }
    #lh() {
      if (this.#Yl) {
        this._uiManager.enableWaiting(true);
        this._uiManager.imageManager.getFromId(this.#Yl).then((t3) => this.#sh(t3, true)).finally(() => this.#oh());
        return;
      }
      if (this.#Jl) {
        const t3 = this.#Jl;
        this.#Jl = null;
        this._uiManager.enableWaiting(true);
        this.#Kl = this._uiManager.imageManager.getFromUrl(t3).then((t4) => this.#sh(t4)).finally(() => this.#oh());
        return;
      }
      if (this.#Ql) {
        const t3 = this.#Ql;
        this.#Ql = null;
        this._uiManager.enableWaiting(true);
        this.#Kl = this._uiManager.imageManager.getFromFile(t3).then((t4) => this.#sh(t4)).finally(() => this.#oh());
        return;
      }
      const t2 = document.createElement("input");
      t2.type = "file";
      t2.accept = Y.join(",");
      const e2 = this._uiManager._signal;
      this.#Kl = new Promise((i2) => {
        t2.addEventListener("change", async () => {
          if (t2.files && 0 !== t2.files.length) {
            this._uiManager.enableWaiting(true);
            const e3 = await this._uiManager.imageManager.getFromFile(t2.files[0]);
            this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } });
            this.#sh(e3);
          } else this.remove();
          i2();
        }, { signal: e2 });
        t2.addEventListener("cancel", () => {
          this.remove();
          i2();
        }, { signal: e2 });
      }).finally(() => this.#oh());
      t2.click();
    }
    remove() {
      if (this.#Yl) {
        this.#Xl = null;
        this._uiManager.imageManager.deleteId(this.#Yl);
        this.#th?.remove();
        this.#th = null;
        if (this.#ih) {
          clearTimeout(this.#ih);
          this.#ih = null;
        }
      }
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          this.#Yl && null === this.#th && this.#lh();
          this.isAttachedToDOM || this.parent.add(this);
        }
      } else this.#Yl && this.#lh();
    }
    onceAdded(t2) {
      this._isDraggable = true;
      t2 && this.div.focus();
    }
    isEmpty() {
      return !(this.#Kl || this.#Xl || this.#Jl || this.#Ql || this.#Yl || this.#eh);
    }
    get toolbarButtons() {
      return [["altText", this.createAltText()]];
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy) {
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      this.div.hidden = true;
      this.createAltText();
      this.#eh || (this.#Xl ? this.#ah() : this.#lh());
      this._isCopy && this._moveAfterPaste(t2, e2);
      this._uiManager.addShouldRescale(this);
      return this.div;
    }
    setCanvas(t2, e2) {
      const { id: i2, bitmap: n2 } = this._uiManager.imageManager.getFromCanvas(t2, e2);
      e2.remove();
      if (i2 && this._uiManager.imageManager.isValidId(i2)) {
        this.#Yl = i2;
        n2 && (this.#Xl = n2);
        this.#eh = false;
        this.#ah();
      }
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      if (!this.parent) return;
      null !== this.#ih && clearTimeout(this.#ih);
      this.#ih = setTimeout(() => {
        this.#ih = null;
        this.#hh();
      }, 200);
    }
    #ah() {
      const { div: t2 } = this;
      let { width: e2, height: i2 } = this.#Xl;
      const [n2, r2] = this.pageDimensions, s2 = 0.75;
      if (this.width) {
        e2 = this.width * n2;
        i2 = this.height * r2;
      } else if (e2 > s2 * n2 || i2 > s2 * r2) {
        const t3 = Math.min(s2 * n2 / e2, s2 * r2 / i2);
        e2 *= t3;
        i2 *= t3;
      }
      this._uiManager.enableWaiting(false);
      const a2 = this.#th = document.createElement("canvas");
      a2.setAttribute("role", "img");
      this.addContainer(a2);
      this.width = e2 / n2;
      this.height = i2 / r2;
      this.setDims();
      this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition();
      this._initialOptions = null;
      this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t2.hidden = false);
      this.#hh();
      if (!this.#rh) {
        this.parent.addUndoableEditor(this);
        this.#rh = true;
      }
      this._reportTelemetry({ action: "inserted_image" });
      this.#Zl && this.div.setAttribute("aria-description", this.#Zl);
      this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
    }
    copyCanvas(t2, e2, i2 = false) {
      t2 || (t2 = 224);
      const { width: n2, height: r2 } = this.#Xl, s2 = new OutputScale();
      let a2 = this.#Xl, o2 = n2, l2 = r2, h2 = null;
      if (e2) {
        if (n2 > e2 || r2 > e2) {
          const t4 = Math.min(e2 / n2, e2 / r2);
          o2 = Math.floor(n2 * t4);
          l2 = Math.floor(r2 * t4);
        }
        h2 = document.createElement("canvas");
        const t3 = h2.width = Math.ceil(o2 * s2.sx), i3 = h2.height = Math.ceil(l2 * s2.sy);
        this.#nh || (a2 = this.#ch(t3, i3));
        const c3 = h2.getContext("2d");
        c3.filter = this._uiManager.hcmFilter;
        let d2 = "white", u2 = "#cfcfd8";
        if ("none" !== this._uiManager.hcmFilter) u2 = "black";
        else if (ColorScheme.isDarkMode) {
          d2 = "#8f8f9d";
          u2 = "#42414d";
        }
        const p2 = 15, g2 = p2 * s2.sx, m2 = p2 * s2.sy, f2 = new OffscreenCanvas(2 * g2, 2 * m2), b2 = f2.getContext("2d");
        b2.fillStyle = d2;
        b2.fillRect(0, 0, 2 * g2, 2 * m2);
        b2.fillStyle = u2;
        b2.fillRect(0, 0, g2, m2);
        b2.fillRect(g2, m2, g2, m2);
        c3.fillStyle = c3.createPattern(f2, "repeat");
        c3.fillRect(0, 0, t3, i3);
        c3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, t3, i3);
      }
      let c2 = null;
      if (i2) {
        let e3, i3;
        if (s2.symmetric && a2.width < t2 && a2.height < t2) {
          e3 = a2.width;
          i3 = a2.height;
        } else {
          a2 = this.#Xl;
          if (n2 > t2 || r2 > t2) {
            const s3 = Math.min(t2 / n2, t2 / r2);
            e3 = Math.floor(n2 * s3);
            i3 = Math.floor(r2 * s3);
            this.#nh || (a2 = this.#ch(e3, i3));
          }
        }
        const o3 = new OffscreenCanvas(e3, i3).getContext("2d", { willReadFrequently: true });
        o3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, e3, i3);
        c2 = { width: e3, height: i3, data: o3.getImageData(0, 0, e3, i3).data };
      }
      return { canvas: h2, width: o2, height: l2, imageData: c2 };
    }
    #ch(t2, e2) {
      const { width: i2, height: n2 } = this.#Xl;
      let r2 = i2, s2 = n2, a2 = this.#Xl;
      for (; r2 > 2 * t2 || s2 > 2 * e2; ) {
        const i3 = r2, n3 = s2;
        r2 > 2 * t2 && (r2 = r2 >= 16384 ? Math.floor(r2 / 2) - 1 : Math.ceil(r2 / 2));
        s2 > 2 * e2 && (s2 = s2 >= 16384 ? Math.floor(s2 / 2) - 1 : Math.ceil(s2 / 2));
        const o2 = new OffscreenCanvas(r2, s2);
        o2.getContext("2d").drawImage(a2, 0, 0, i3, n3, 0, 0, r2, s2);
        a2 = o2.transferToImageBitmap();
      }
      return a2;
    }
    #hh() {
      const [t2, e2] = this.parentDimensions, { width: i2, height: n2 } = this, r2 = new OutputScale(), s2 = Math.ceil(i2 * t2 * r2.sx), a2 = Math.ceil(n2 * e2 * r2.sy), o2 = this.#th;
      if (!o2 || o2.width === s2 && o2.height === a2) return;
      o2.width = s2;
      o2.height = a2;
      const l2 = this.#nh ? this.#Xl : this.#ch(s2, a2), h2 = o2.getContext("2d");
      h2.filter = this._uiManager.hcmFilter;
      h2.drawImage(l2, 0, 0, l2.width, l2.height, 0, 0, s2, a2);
    }
    #dh(t2) {
      if (t2) {
        if (this.#nh) {
          const t4 = this._uiManager.imageManager.getSvgUrl(this.#Yl);
          if (t4) return t4;
        }
        const t3 = document.createElement("canvas");
        ({ width: t3.width, height: t3.height } = this.#Xl);
        t3.getContext("2d").drawImage(this.#Xl, 0, 0);
        return t3.toDataURL();
      }
      if (this.#nh) {
        const [t3, e2] = this.pageDimensions, i2 = Math.round(this.width * t3 * PixelsPerInch.PDF_TO_CSS_UNITS), n2 = Math.round(this.height * e2 * PixelsPerInch.PDF_TO_CSS_UNITS), r2 = new OffscreenCanvas(i2, n2);
        r2.getContext("2d").drawImage(this.#Xl, 0, 0, this.#Xl.width, this.#Xl.height, 0, 0, i2, n2);
        return r2.transferToImageBitmap();
      }
      return structuredClone(this.#Xl);
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null, r2 = false;
      if (t2 instanceof StampAnnotationElement) {
        const { data: { rect: s3, rotation: a3, id: o3, structParent: l3, popupRef: h3, richText: c3, contentsObj: d3, creationDate: u3, modificationDate: p3 }, container: g2, parent: { page: { pageNumber: f2 } }, canvas: b2 } = t2;
        let y2, v2;
        if (b2) {
          delete t2.canvas;
          ({ id: y2, bitmap: v2 } = i2.imageManager.getFromCanvas(g2.id, b2));
          b2.remove();
        } else {
          r2 = true;
          t2._hasNoCanvas = true;
        }
        const w2 = (await e2._structTree.getAriaAttributes(`${q}${o3}`))?.get("aria-label") || "";
        n2 = t2 = { annotationType: m.STAMP, bitmapId: y2, bitmap: v2, pageIndex: f2 - 1, rect: s3.slice(0), rotation: a3, annotationElementId: o3, id: o3, deleted: false, accessibilityData: { decorative: false, altText: w2 }, isSvg: false, structParent: l3, popupRef: h3, richText: c3, comment: d3?.str || null, creationDate: u3, modificationDate: p3 };
      }
      const s2 = await super.deserialize(t2, e2, i2), { rect: a2, bitmap: o2, bitmapUrl: l2, bitmapId: h2, isSvg: c2, accessibilityData: d2 } = t2;
      if (r2) {
        i2.addMissingCanvas(t2.id, s2);
        s2.#eh = true;
      } else if (h2 && i2.imageManager.isValidId(h2)) {
        s2.#Yl = h2;
        o2 && (s2.#Xl = o2);
      } else s2.#Jl = l2;
      s2.#nh = c2;
      const [u2, p2] = s2.pageDimensions;
      s2.width = (a2[2] - a2[0]) / u2;
      s2.height = (a2[3] - a2[1]) / p2;
      d2 && (s2.altTextData = d2);
      s2._initialData = n2;
      t2.comment && s2.setCommentData(t2);
      s2.#rh = !!n2;
      return s2;
    }
    serialize(t2 = false, e2 = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const i2 = Object.assign(super.serialize(t2), { bitmapId: this.#Yl, isSvg: this.#nh });
      this.addComment(i2);
      if (t2) {
        i2.bitmapUrl = this.#dh(true);
        i2.accessibilityData = this.serializeAltText(true);
        i2.isCopy = true;
        return i2;
      }
      const { decorative: n2, altText: r2 } = this.serializeAltText(false);
      !n2 && r2 && (i2.accessibilityData = { type: "Figure", alt: r2 });
      if (this.annotationElementId) {
        const t3 = this.#Za(i2);
        if (t3.isSame) return null;
        t3.isSameAltText ? delete i2.accessibilityData : i2.accessibilityData.structParent = this._initialData.structParent ?? -1;
        i2.id = this.annotationElementId;
        delete i2.bitmapId;
        return i2;
      }
      if (null === e2) return i2;
      e2.stamps ||= /* @__PURE__ */ new Map();
      const s2 = this.#nh ? (i2.rect[2] - i2.rect[0]) * (i2.rect[3] - i2.rect[1]) : null;
      if (e2.stamps.has(this.#Yl)) {
        if (this.#nh) {
          const t3 = e2.stamps.get(this.#Yl);
          if (s2 > t3.area) {
            t3.area = s2;
            t3.serialized.bitmap.close();
            t3.serialized.bitmap = this.#dh(false);
          }
        }
      } else {
        e2.stamps.set(this.#Yl, { area: s2, serialized: i2 });
        i2.bitmap = this.#dh(false);
      }
      return i2;
    }
    #Za(t2) {
      const { pageIndex: e2, accessibilityData: { altText: i2 } } = this._initialData, n2 = t2.pageIndex === e2, r2 = (t2.accessibilityData?.alt || "") === i2;
      return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && n2 && r2, isSameAltText: r2 };
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      return null;
    }
  };
  var AnnotationEditorLayer = class _AnnotationEditorLayer {
    #Ba;
    #uh = false;
    #ph = null;
    #gh = null;
    #mh = null;
    #fh = /* @__PURE__ */ new Map();
    #bh = false;
    #yh = false;
    #vh = false;
    #wh = null;
    #Ah = null;
    #xh = null;
    #Eh = null;
    #_h = null;
    #Th = -1;
    #y;
    static _initialized = false;
    static #J = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map((t2) => [t2._editorType, t2]));
    constructor({ uiManager: t2, pageIndex: e2, div: i2, structTreeLayer: n2, accessibilityManager: r2, annotationLayer: s2, drawLayer: a2, textLayer: o2, viewport: l2, l10n: h2 }) {
      const c2 = [..._AnnotationEditorLayer.#J.values()];
      if (!_AnnotationEditorLayer._initialized) {
        _AnnotationEditorLayer._initialized = true;
        for (const e3 of c2) e3.initialize(h2, t2);
      }
      t2.registerEditorTypes(c2);
      this.#y = t2;
      this.pageIndex = e2;
      this.div = i2;
      this.#Ba = r2;
      this.#ph = s2;
      this.viewport = l2;
      this.#xh = o2;
      this.drawLayer = a2;
      this._structTree = n2;
      this.#y.addLayer(this);
    }
    get isEmpty() {
      return 0 === this.#fh.size;
    }
    get isInvisible() {
      return this.isEmpty && this.#y.getMode() === m.NONE;
    }
    updateToolbar(t2) {
      this.#y.updateToolbar(t2);
    }
    updateMode(t2 = this.#y.getMode()) {
      this.#Sh();
      switch (t2) {
        case m.NONE:
          this.div.classList.toggle("nonEditing", true);
          this.disableTextSelection();
          this.togglePointerEvents(false);
          this.toggleAnnotationLayerPointerEvents(true);
          this.disableClick();
          return;
        case m.INK:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
          break;
        case m.HIGHLIGHT:
          this.enableTextSelection();
          this.togglePointerEvents(false);
          this.disableClick();
          break;
        default:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e2 } = this.div;
      e2.toggle("nonEditing", false);
      if (t2 === m.POPUP) e2.toggle("commentEditing", true);
      else {
        e2.toggle("commentEditing", false);
        for (const i2 of _AnnotationEditorLayer.#J.values()) e2.toggle(`${i2._type}Editing`, t2 === i2._editorType);
      }
      this.div.hidden = false;
    }
    hasTextLayer(t2) {
      return t2 === this.#xh?.div;
    }
    setEditingState(t2) {
      this.#y.setEditingState(t2);
    }
    addCommands(t2) {
      this.#y.addCommands(t2);
    }
    cleanUndoStack(t2) {
      this.#y.cleanUndoStack(t2);
    }
    toggleDrawing(t2 = false) {
      this.div.classList.toggle("drawing", !t2);
    }
    togglePointerEvents(t2 = false) {
      this.div.classList.toggle("disabled", !t2);
    }
    toggleAnnotationLayerPointerEvents(t2 = false) {
      this.#ph?.togglePointerEvents(t2);
    }
    get #Ch() {
      return 0 !== this.#fh.size ? this.#fh.values() : this.#y.getEditors(this.pageIndex);
    }
    async enable() {
      this.#vh = true;
      this.div.tabIndex = 0;
      this.togglePointerEvents(true);
      this.div.classList.toggle("nonEditing", false);
      this.#_h?.abort();
      this.#_h = null;
      const t2 = /* @__PURE__ */ new Set();
      for (const e3 of this.#Ch) {
        e3.enableEditing();
        e3.show(true);
        if (e3.annotationElementId) {
          this.#y.removeChangedExistingAnnotation(e3);
          t2.add(e3.annotationElementId);
        }
      }
      const e2 = this.#ph;
      if (e2) for (const i2 of e2.getEditableAnnotations()) {
        i2.hide();
        if (this.#y.isDeletedAnnotationElement(i2.data.id)) continue;
        if (t2.has(i2.data.id)) continue;
        const e3 = await this.deserialize(i2);
        if (e3) {
          this.addOrRebuild(e3);
          e3.enableEditing();
        }
      }
      this.#vh = false;
      this.#y._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
    }
    disable() {
      this.#yh = true;
      this.div.tabIndex = -1;
      this.togglePointerEvents(false);
      this.div.classList.toggle("nonEditing", true);
      if (this.#xh && !this.#_h) {
        this.#_h = new AbortController();
        const t3 = this.#y.combinedSignal(this.#_h);
        this.#xh.div.addEventListener("pointerdown", (t4) => {
          const { clientX: e3, clientY: i3, timeStamp: n2 } = t4;
          if (n2 - this.#Th > 500) {
            this.#Th = n2;
            return;
          }
          this.#Th = -1;
          const { classList: r2 } = this.div;
          r2.toggle("getElements", true);
          const s2 = document.elementsFromPoint(e3, i3);
          r2.toggle("getElements", false);
          if (!this.div.contains(s2[0])) return;
          let a2;
          const o2 = new RegExp(`^${g}[0-9]+$`);
          for (const t5 of s2) if (o2.test(t5.id)) {
            a2 = t5.id;
            break;
          }
          if (!a2) return;
          const l2 = this.#fh.get(a2);
          if (null === l2?.annotationElementId) {
            t4.stopPropagation();
            t4.preventDefault();
            l2.dblclick(t4);
          }
        }, { signal: t3, capture: true });
      }
      const t2 = this.#ph, e2 = [];
      if (t2) {
        const i3 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
        for (const t3 of this.#Ch) {
          t3.disableEditing();
          if (t3.annotationElementId) if (null === t3.serialize()) {
            n2.set(t3.annotationElementId, t3);
            this.getEditableAnnotation(t3.annotationElementId)?.show();
            t3.remove();
          } else i3.set(t3.annotationElementId, t3);
          else e2.push(t3);
        }
        for (const e3 of t2.getEditableAnnotations()) {
          const { id: t3 } = e3.data;
          if (this.#y.isDeletedAnnotationElement(t3)) {
            e3.updateEdited({ deleted: true });
            continue;
          }
          let r2 = n2.get(t3);
          if (r2) {
            r2.resetAnnotationElement(e3);
            r2.show(false);
            e3.show();
          } else {
            r2 = i3.get(t3);
            if (r2) {
              this.#y.addChangedExistingAnnotation(r2);
              r2.renderAnnotationElement(e3) && r2.show(false);
            }
            e3.show();
          }
        }
      }
      this.#Sh();
      this.isEmpty && (this.div.hidden = true);
      const { classList: i2 } = this.div;
      for (const t3 of _AnnotationEditorLayer.#J.values()) i2.remove(`${t3._type}Editing`);
      this.disableTextSelection();
      this.toggleAnnotationLayerPointerEvents(true);
      t2?.updateFakeAnnotations(e2);
      this.#yh = false;
    }
    getEditableAnnotation(t2) {
      return this.#ph?.getEditableAnnotation(t2) || null;
    }
    setActiveEditor(t2) {
      this.#y.getActive() !== t2 && this.#y.setActiveEditor(t2);
    }
    enableTextSelection() {
      this.div.tabIndex = -1;
      if (this.#xh?.div && !this.#Eh) {
        this.#Eh = new AbortController();
        const t2 = this.#y.combinedSignal(this.#Eh);
        this.#xh.div.addEventListener("pointerdown", this.#Dh.bind(this), { signal: t2 });
        this.#xh.div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      this.div.tabIndex = 0;
      if (this.#xh?.div && this.#Eh) {
        this.#Eh.abort();
        this.#Eh = null;
        this.#xh.div.classList.remove("highlighting");
      }
    }
    #Dh(t2) {
      this.#y.unselectAll();
      const { target: e2 } = t2;
      if (e2 === this.#xh.div || ("img" === e2.getAttribute("role") || e2.classList.contains("endOfContent")) && this.#xh.div.contains(e2)) {
        const { isMac: e3 } = FeatureTest.platform;
        if (0 !== t2.button || t2.ctrlKey && e3) return;
        this.#y.showAllEditors("highlight", true, true);
        this.#xh.div.classList.add("free");
        this.toggleDrawing();
        HighlightEditor.startHighlighting(this, "ltr" === this.#y.direction, { target: this.#xh.div, x: t2.x, y: t2.y });
        this.#xh.div.addEventListener("pointerup", () => {
          this.#xh.div.classList.remove("free");
          this.toggleDrawing(true);
        }, { once: true, signal: this.#y._signal });
        t2.preventDefault();
      }
    }
    enableClick() {
      if (this.#gh) return;
      this.#gh = new AbortController();
      const t2 = this.#y.combinedSignal(this.#gh);
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t2 });
      const e2 = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e2, { signal: t2 });
      this.div.addEventListener("pointercancel", e2, { signal: t2 });
    }
    disableClick() {
      this.#gh?.abort();
      this.#gh = null;
    }
    attach(t2) {
      this.#fh.set(t2.id, t2);
      const { annotationElementId: e2 } = t2;
      e2 && this.#y.isDeletedAnnotationElement(e2) && this.#y.removeDeletedAnnotationElement(t2);
    }
    detach(t2) {
      this.#fh.delete(t2.id);
      this.#Ba?.removePointerInTextLayer(t2.contentDiv);
      !this.#yh && t2.annotationElementId && this.#y.addDeletedAnnotationElement(t2);
    }
    remove(t2) {
      this.detach(t2);
      this.#y.removeEditor(t2);
      t2.div.remove();
      t2.isAttachedToDOM = false;
    }
    changeParent(t2) {
      if (t2.parent !== this) {
        if (t2.parent && t2.annotationElementId) {
          this.#y.addDeletedAnnotationElement(t2);
          AnnotationEditor.deleteAnnotationElement(t2);
          t2.annotationElementId = null;
        }
        this.attach(t2);
        t2.parent?.detach(t2);
        t2.setParent(this);
        if (t2.div && t2.isAttachedToDOM) {
          t2.div.remove();
          this.div.append(t2.div);
        }
      }
    }
    add(t2) {
      if (t2.parent !== this || !t2.isAttachedToDOM) {
        this.changeParent(t2);
        this.#y.addEditor(t2);
        this.attach(t2);
        if (!t2.isAttachedToDOM) {
          const e2 = t2.render();
          this.div.append(e2);
          t2.isAttachedToDOM = true;
        }
        t2.fixAndSetPosition();
        t2.onceAdded(!this.#vh);
        this.#y.addToAnnotationStorage(t2);
        t2._reportTelemetry(t2.telemetryInitialData);
      }
    }
    moveEditorInDOM(t2) {
      if (!t2.isAttachedToDOM) return;
      const { activeElement: e2 } = document;
      if (t2.div.contains(e2) && !this.#mh) {
        t2._focusEventsAllowed = false;
        this.#mh = setTimeout(() => {
          this.#mh = null;
          if (t2.div.contains(document.activeElement)) t2._focusEventsAllowed = true;
          else {
            t2.div.addEventListener("focusin", () => {
              t2._focusEventsAllowed = true;
            }, { once: true, signal: this.#y._signal });
            e2.focus();
          }
        }, 0);
      }
      t2._structTreeParentId = this.#Ba?.moveElementInDOM(this.div, t2.div, t2.contentDiv, true);
    }
    addOrRebuild(t2) {
      if (t2.needsToBeRebuilt()) {
        t2.parent ||= this;
        t2.rebuild();
        t2.show();
      } else this.add(t2);
    }
    addUndoableEditor(t2) {
      this.addCommands({ cmd: () => t2._uiManager.rebuild(t2), undo: () => {
        t2.remove();
      }, mustExec: false });
    }
    getEditorByUID(t2) {
      for (const e2 of this.#fh.values()) if (e2.uid === t2) return e2;
      return null;
    }
    get #Ph() {
      return _AnnotationEditorLayer.#J.get(this.#y.getMode());
    }
    combinedSignal(t2) {
      return this.#y.combinedSignal(t2);
    }
    #Mh(t2) {
      const e2 = this.#Ph;
      return e2 ? new e2.prototype.constructor(t2) : null;
    }
    canCreateNewEmptyEditor() {
      return this.#Ph?.canCreateNewEmptyEditor();
    }
    async pasteEditor(t2, e2) {
      this.updateToolbar(t2);
      await this.#y.updateMode(t2.mode);
      const { offsetX: i2, offsetY: n2 } = this.#kh(), r2 = this.#y.getId(), s2 = this.#Mh({ parent: this, id: r2, x: i2, y: n2, uiManager: this.#y, isCentered: true, ...e2 });
      s2 && this.add(s2);
    }
    async deserialize(t2) {
      return await _AnnotationEditorLayer.#J.get(t2.annotationType ?? t2.annotationEditorType)?.deserialize(t2, this, this.#y) || null;
    }
    createAndAddNewEditor(t2, e2, i2 = {}) {
      const n2 = this.#y.getId(), r2 = this.#Mh({ parent: this, id: n2, x: t2.offsetX, y: t2.offsetY, uiManager: this.#y, isCentered: e2, ...i2 });
      r2 && this.add(r2);
      return r2;
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    #kh() {
      const { x: t2, y: e2, width: i2, height: n2 } = this.boundingClientRect, r2 = Math.max(0, t2), s2 = Math.max(0, e2), a2 = (r2 + Math.min(window.innerWidth, t2 + i2)) / 2 - t2, o2 = (s2 + Math.min(window.innerHeight, e2 + n2)) / 2 - e2, [l2, h2] = this.viewport.rotation % 180 == 0 ? [a2, o2] : [o2, a2];
      return { offsetX: l2, offsetY: h2 };
    }
    addNewEditor(t2 = {}) {
      this.createAndAddNewEditor(this.#kh(), true, t2);
    }
    setSelected(t2) {
      this.#y.setSelected(t2);
    }
    toggleSelected(t2) {
      this.#y.toggleSelected(t2);
    }
    unselect(t2) {
      this.#y.unselect(t2);
    }
    pointerup(t2) {
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      if (!this.#bh) return;
      this.#bh = false;
      if (this.#Ph?.isDrawer && this.#Ph.supportMultipleDrawings) return;
      if (!this.#uh) {
        this.#uh = true;
        return;
      }
      const i2 = this.#y.getMode();
      i2 !== m.STAMP && i2 !== m.POPUP && i2 !== m.SIGNATURE ? this.createAndAddNewEditor(t2, false) : this.#y.unselectAll();
    }
    pointerdown(t2) {
      this.#y.getMode() === m.HIGHLIGHT && this.enableTextSelection();
      if (this.#bh) {
        this.#bh = false;
        return;
      }
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      this.#bh = true;
      if (this.#Ph?.isDrawer) {
        this.startDrawingSession(t2);
        return;
      }
      const i2 = this.#y.getActive();
      this.#uh = !i2 || i2.isEmpty();
    }
    startDrawingSession(t2) {
      this.div.focus({ preventScroll: true });
      if (this.#wh) {
        this.#Ph.startDrawing(this, this.#y, false, t2);
        return;
      }
      this.#y.setCurrentDrawingSession(this);
      this.#wh = new AbortController();
      const e2 = this.#y.combinedSignal(this.#wh);
      this.div.addEventListener("blur", ({ relatedTarget: t3 }) => {
        if (t3 && !this.div.contains(t3)) {
          this.#Ah = null;
          this.commitOrRemove();
        }
      }, { signal: e2 });
      this.#Ph.startDrawing(this, this.#y, false, t2);
    }
    pause(t2) {
      if (t2) {
        const { activeElement: t3 } = document;
        this.div.contains(t3) && (this.#Ah = t3);
        return;
      }
      this.#Ah && setTimeout(() => {
        this.#Ah?.focus();
        this.#Ah = null;
      }, 0);
    }
    endDrawingSession(t2 = false) {
      if (!this.#wh) return null;
      this.#y.setCurrentDrawingSession(null);
      this.#wh.abort();
      this.#wh = null;
      this.#Ah = null;
      return this.#Ph.endDrawing(t2);
    }
    findNewParent(t2, e2, i2) {
      const n2 = this.#y.findParent(e2, i2);
      if (null === n2 || n2 === this) return false;
      n2.changeParent(t2);
      return true;
    }
    commitOrRemove() {
      if (this.#wh) {
        this.endDrawingSession();
        return true;
      }
      return false;
    }
    onScaleChanging() {
      this.#wh && this.#Ph.onScaleChangingWhenDrawing(this);
    }
    destroy() {
      this.commitOrRemove();
      if (this.#y.getActive()?.parent === this) {
        this.#y.commitOrRemove();
        this.#y.setActiveEditor(null);
      }
      if (this.#mh) {
        clearTimeout(this.#mh);
        this.#mh = null;
      }
      for (const t2 of this.#fh.values()) {
        this.#Ba?.removePointerInTextLayer(t2.contentDiv);
        t2.setParent(null);
        t2.isAttachedToDOM = false;
        t2.div.remove();
      }
      this.div = null;
      this.#fh.clear();
      this.#y.removeLayer(this);
    }
    #Sh() {
      for (const t2 of this.#fh.values()) t2.isEmpty() && t2.remove();
    }
    async render({ viewport: t2 }) {
      this.viewport = t2;
      setLayerDimensions(this.div, t2);
      for (const t3 of this.#y.getEditors(this.pageIndex)) {
        this.add(t3);
        t3.rebuild();
      }
      await this.#y.findClonesForPage(this);
      this.div.hidden = this.isEmpty;
      this.updateMode();
    }
    update({ viewport: t2 }) {
      this.#y.commitOrRemove();
      this.#Sh();
      const e2 = this.viewport.rotation, i2 = t2.rotation;
      this.viewport = t2;
      setLayerDimensions(this.div, { rotation: i2 });
      if (e2 !== i2) for (const t3 of this.#fh.values()) t3.rotate(i2);
    }
    get pageDimensions() {
      const { pageWidth: t2, pageHeight: e2 } = this.viewport.rawDims;
      return [t2, e2];
    }
    get scale() {
      return this.#y.viewParameters.realScale;
    }
  };
  var DrawLayer = class _DrawLayer {
    #sa = null;
    #Ih = /* @__PURE__ */ new Map();
    #Fh = /* @__PURE__ */ new Map();
    static #S = 0;
    setParent(t2) {
      if (this.#sa) {
        if (this.#sa !== t2) {
          if (this.#Ih.size > 0) for (const e2 of this.#Ih.values()) {
            e2.remove();
            t2.append(e2);
          }
          this.#sa = t2;
        }
      } else this.#sa = t2;
    }
    static get _svgFactory() {
      return shadow(this, "_svgFactory", new DOMSVGFactory());
    }
    static #Rh(t2, [e2, i2, n2, r2]) {
      const { style: s2 } = t2;
      s2.top = 100 * i2 + "%";
      s2.left = 100 * e2 + "%";
      s2.width = 100 * n2 + "%";
      s2.height = 100 * r2 + "%";
    }
    #Bh() {
      const t2 = _DrawLayer._svgFactory.create(1, 1, true);
      this.#sa.append(t2);
      t2.setAttribute("aria-hidden", true);
      return t2;
    }
    #Oh(t2, e2) {
      const i2 = _DrawLayer._svgFactory.createElement("clipPath");
      t2.append(i2);
      const n2 = `clip_${e2}`;
      i2.setAttribute("id", n2);
      i2.setAttribute("clipPathUnits", "objectBoundingBox");
      const r2 = _DrawLayer._svgFactory.createElement("use");
      i2.append(r2);
      r2.setAttribute("href", `#${e2}`);
      r2.classList.add("clip");
      return n2;
    }
    #Lh(t2, e2) {
      for (const [i2, n2] of Object.entries(e2)) null === n2 ? t2.removeAttribute(i2) : t2.setAttribute(i2, n2);
    }
    draw(t2, e2 = false, i2 = false) {
      const n2 = _DrawLayer.#S++, r2 = this.#Bh(), s2 = _DrawLayer._svgFactory.createElement("defs");
      r2.append(s2);
      const a2 = _DrawLayer._svgFactory.createElement("path");
      s2.append(a2);
      const o2 = `path_${n2}`;
      a2.setAttribute("id", o2);
      a2.setAttribute("vector-effect", "non-scaling-stroke");
      e2 && this.#Fh.set(n2, a2);
      const l2 = i2 ? this.#Oh(s2, o2) : null, h2 = _DrawLayer._svgFactory.createElement("use");
      r2.append(h2);
      h2.setAttribute("href", `#${o2}`);
      this.updateProperties(r2, t2);
      this.#Ih.set(n2, r2);
      return { id: n2, clipPathId: `url(#${l2})` };
    }
    drawOutline(t2, e2) {
      const i2 = _DrawLayer.#S++, n2 = this.#Bh(), r2 = _DrawLayer._svgFactory.createElement("defs");
      n2.append(r2);
      const s2 = _DrawLayer._svgFactory.createElement("path");
      r2.append(s2);
      const a2 = `path_${i2}`;
      s2.setAttribute("id", a2);
      s2.setAttribute("vector-effect", "non-scaling-stroke");
      let o2;
      if (e2) {
        const t3 = _DrawLayer._svgFactory.createElement("mask");
        r2.append(t3);
        o2 = `mask_${i2}`;
        t3.setAttribute("id", o2);
        t3.setAttribute("maskUnits", "objectBoundingBox");
        const e3 = _DrawLayer._svgFactory.createElement("rect");
        t3.append(e3);
        e3.setAttribute("width", "1");
        e3.setAttribute("height", "1");
        e3.setAttribute("fill", "white");
        const n3 = _DrawLayer._svgFactory.createElement("use");
        t3.append(n3);
        n3.setAttribute("href", `#${a2}`);
        n3.setAttribute("stroke", "none");
        n3.setAttribute("fill", "black");
        n3.setAttribute("fill-rule", "nonzero");
        n3.classList.add("mask");
      }
      const l2 = _DrawLayer._svgFactory.createElement("use");
      n2.append(l2);
      l2.setAttribute("href", `#${a2}`);
      o2 && l2.setAttribute("mask", `url(#${o2})`);
      const h2 = l2.cloneNode();
      n2.append(h2);
      l2.classList.add("mainOutline");
      h2.classList.add("secondaryOutline");
      this.updateProperties(n2, t2);
      this.#Ih.set(i2, n2);
      return i2;
    }
    finalizeDraw(t2, e2) {
      this.#Fh.delete(t2);
      this.updateProperties(t2, e2);
    }
    updateProperties(t2, e2) {
      if (!e2) return;
      const { root: i2, bbox: n2, rootClass: r2, path: s2 } = e2, a2 = "number" == typeof t2 ? this.#Ih.get(t2) : t2;
      if (a2) {
        i2 && this.#Lh(a2, i2);
        n2 && _DrawLayer.#Rh(a2, n2);
        if (r2) {
          const { classList: t3 } = a2;
          for (const [e3, i3] of Object.entries(r2)) t3.toggle(e3, i3);
        }
        if (s2) {
          const t3 = a2.firstElementChild.firstElementChild;
          this.#Lh(t3, s2);
        }
      }
    }
    updateParent(t2, e2) {
      if (e2 === this) return;
      const i2 = this.#Ih.get(t2);
      if (i2) {
        e2.#sa.append(i2);
        this.#Ih.delete(t2);
        e2.#Ih.set(t2, i2);
      }
    }
    remove(t2) {
      this.#Fh.delete(t2);
      if (null !== this.#sa) {
        this.#Ih.get(t2).remove();
        this.#Ih.delete(t2);
      }
    }
    destroy() {
      this.#sa = null;
      for (const t2 of this.#Ih.values()) t2.remove();
      this.#Ih.clear();
      this.#Fh.clear();
    }
  };
  function percentage(t2) {
    return `${(100 * t2).toFixed(2)}%`;
  }
  var TextLayerImages = class _TextLayerImages {
    #Nh = [];
    #Uh = /* @__PURE__ */ new Map();
    #Hh = null;
    #zh = 0;
    #Mr = 0;
    #Pr = 0;
    static #jh = null;
    constructor(t2, e2, i2, n2) {
      this.#zh = t2;
      this.#Nh = e2;
      this.#Mr = i2.rawDims.pageWidth;
      this.#Pr = i2.rawDims.pageHeight;
      this.#Hh = n2;
    }
    render() {
      const t2 = document.createElement("div");
      t2.className = "textLayerImages";
      for (let e2 = 0; e2 < this.#Nh.length; e2 += 6) {
        const i2 = this.#Gh(this.#Nh.subarray(e2, e2 + 6));
        i2 && t2.append(i2);
      }
      t2.addEventListener("contextmenu", (t3) => {
        if (!(t3.target instanceof HTMLCanvasElement)) return;
        const e2 = t3.target, i2 = this.#Uh.get(e2);
        if (!i2) return;
        const n2 = _TextLayerImages.#jh?.deref();
        if (n2 === e2) return;
        if (n2) {
          n2.width = 0;
          n2.height = 0;
        }
        _TextLayerImages.#jh = new WeakRef(e2);
        const { inverseTransform: r2, x1: s2, y1: a2, width: o2, height: l2 } = i2, h2 = this.#Hh(), c2 = Math.ceil(s2 * h2.width), d2 = Math.ceil(a2 * h2.height), u2 = Math.floor((s2 + o2 / this.#Mr) * h2.width), p2 = Math.floor((a2 + l2 / this.#Pr) * h2.height);
        e2.width = u2 - c2;
        e2.height = p2 - d2;
        const g2 = e2.getContext("2d");
        g2.setTransform(...r2);
        g2.translate(-c2, -d2);
        g2.drawImage(h2, 0, 0);
      });
      return t2;
    }
    #Gh([t2, e2, i2, n2, r2, s2]) {
      const a2 = Math.hypot((r2 - t2) * this.#Mr, (s2 - e2) * this.#Pr), o2 = Math.hypot((i2 - t2) * this.#Mr, (n2 - e2) * this.#Pr);
      if (a2 < this.#zh || o2 < this.#zh) return null;
      const l2 = [(r2 - t2) * this.#Mr / a2, (s2 - e2) * this.#Pr / a2, (i2 - t2) * this.#Mr / o2, (n2 - e2) * this.#Pr / o2, 0, 0], h2 = Util.inverseTransform(l2), c2 = document.createElement("canvas");
      c2.className = "textLayerImagePlaceholder";
      c2.width = 0;
      c2.height = 0;
      Object.assign(c2.style, { opacity: 0, position: "absolute", left: percentage(t2), top: percentage(e2), width: percentage(a2 / this.#Mr), height: percentage(o2 / this.#Pr), transformOrigin: "0% 0%", transform: `matrix(${l2.join(",")})` });
      this.#Uh.set(c2, { inverseTransform: h2, width: a2, height: o2, x1: t2, y1: e2 });
      return c2;
    }
  };
  globalThis._pdfjsTestingUtils = { HighlightOutliner };
  globalThis.pdfjsLib = { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType: f, AnnotationEditorType: m, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode: p, AnnotationType: C, applyOpacity, build: zt, ColorPicker, createValidAbsoluteUrl, CSSConstants, DOMSVGFactory, DrawLayer, FeatureTest, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, GlobalWorkerOptions, ImageKind: S, InvalidPDFException, isDataScheme, isPdfFile, isValidExplicitDest: pt, makeArr, makeMap, makeObj, MathClamp, noContextMenu, normalizeUnicode, OPS: B, OutputScale, PasswordResponses: z, PDFDataRangeTransport, PDFDateString, PDFWorker, PermissionFlag: b, PixelsPerInch, RenderingCancelledException, renderRichText, ResponseException, setLayerDimensions, shadow, SignatureExtractor, stopEvent, SupportedImageMimeTypes: Y, TextLayer, TextLayerImages, TouchManager, updateUrlHash, Util, VerbosityLevel: R, version: Ht, XfaLayer };
  return __toCommonJS(pdf_min_exports);
})();
