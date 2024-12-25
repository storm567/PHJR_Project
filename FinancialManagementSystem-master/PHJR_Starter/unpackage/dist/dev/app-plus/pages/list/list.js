"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/unicloud-db.js
  var import_vue = __toESM(require_vue());

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/unicloud-db.js
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
  var UNI_SSR = "__uniSSR";
  var UNI_SSR_DATA = "data";
  var UNI_SSR_GLOBAL_DATA = "globalData";
  function getSSRDataType() {
    return (0, import_vue.getCurrentInstance)() ? UNI_SSR_DATA : UNI_SSR_GLOBAL_DATA;
  }
  function assertKey(key, shallow = false) {
    if (!key) {
      throw new Error(`${shallow ? "shallowSsrRef" : "ssrRef"}: You must provide a key.`);
    }
  }
  var ssrClientRef = (value, key, shallow = false) => {
    const valRef = shallow ? (0, import_vue.shallowRef)(value) : (0, import_vue.ref)(value);
    if (typeof window === "undefined") {
      return valRef;
    }
    const __uniSSR = window[UNI_SSR];
    if (!__uniSSR) {
      return valRef;
    }
    const type = getSSRDataType();
    assertKey(key, shallow);
    if (hasOwn$1(__uniSSR[type], key)) {
      valRef.value = __uniSSR[type][key];
      if (type === UNI_SSR_DATA) {
        delete __uniSSR[type][key];
      }
    }
    return valRef;
  };
  var ssrRef = (value, key) => {
    return ssrClientRef(value, key);
  };
  var shallowSsrRef = (value, key) => {
    return ssrClientRef(value, key, true);
  };
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  var pages = [
    {
      path: "pages/list/list",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/test/test",
      style: {
        navigationBarTitleText: "\u6D4B\u8BD5"
      }
    },
    {
      path: "pages/titlegrid/cart/bankcart/bankcart",
      style: {
        navigationBarTitleText: "\u94F6\u884C\u8D37\u6B3E_\u6B65\u9AA41"
      }
    },
    {
      path: "pages/titlegrid/cart/uploadData/uploadData",
      style: {
        navigationBarTitleText: "\u94F6\u884C\u8D37\u6B3E_\u6B65\u9AA42"
      }
    },
    {
      path: "pages/titlegrid/cart/signing/signing",
      style: {
        navigationBarTitleText: "\u94F6\u884C\u8D37\u6B3E_\u6B65\u9AA43"
      }
    },
    {
      path: "pages/webpage/index",
      style: {
        navigationBarTitleText: "\u8BE6\u60C5",
        navigationBarTextStyle: "black",
        "app-plus": {
          popGesture: "none"
        }
      }
    },
    {
      path: "pages/titlegrid/scan/scan",
      style: {
        navigationBarTitleText: "\u626B\u4E00\u626B"
      }
    },
    {
      path: "pages/titlegrid/cart/cart",
      style: {
        navigationBarTitleText: "\u8D37\u6B3E"
      }
    },
    {
      path: "pages/titlegrid/wallet/wallet",
      style: {
        navigationBarTitleText: "\u5361\u5305"
      }
    },
    {
      path: "pages/titlegrid/chat/chat",
      style: {
        navigationBarTitleText: "\u8D44\u8BAF"
      }
    },
    {
      path: "pages/grid/grid",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/list/search/search",
      style: {
        navigationBarTitleText: "\u641C\u7D22"
      }
    },
    {
      path: "pages/list/detail",
      style: {
        "app-plus": {
          titleNView: {
            buttons: [
              {
                type: "share"
              }
            ],
            type: "transparent"
          }
        },
        h5: {
          titleNView: {
            type: "transparent"
          }
        },
        navigationBarTitleText: "\u6587\u7AE0\u8BE6\u60C5"
      }
    },
    {
      path: "pages/ucenter/ucenter",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/uni-agree/uni-agree",
      style: {
        navigationStyle: "custom",
        "app-plus": {
          popGesture: "none"
        }
      }
    },
    {
      path: "pages/ucenter/settings/settings",
      style: {
        navigationBarTitleText: "\u8BBE\u7F6E"
      }
    },
    {
      path: "pages/ucenter/read-news-log/read-news-log",
      style: {
        navigationBarTitleText: "\u9605\u8BFB\u8BB0\u5F55",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/ucenter/about/about",
      style: {
        navigationBarTitleText: "\u5173\u4E8E",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                type: "share"
              }
            ]
          }
        }
      }
    },
    {
      path: "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
      style: {
        disableScroll: true,
        "app-plus": {
          backgroundColorTop: "transparent",
          background: "transparent",
          titleNView: false,
          scrollIndicator: false,
          popGesture: "none",
          animationType: "fade-in",
          animationDuration: 200
        }
      }
    },
    {
      path: "pages/ucenter/invite/invite",
      style: {
        navigationStyle: "custom",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/news/news/news",
      style: {
        navigationBarTitleText: ""
      }
    }
  ];
  var subPackages = [
    {
      root: "uni_modules/uni-feedback",
      pages: [
        {
          path: "pages/opendb-feedback/opendb-feedback",
          style: {
            navigationBarTitleText: "\u610F\u89C1\u53CD\u9988",
            enablePullDownRefresh: false
          }
        }
      ]
    },
    {
      root: "uni_modules/uni-id-pages/pages",
      pages: [
        {
          path: "userinfo/userinfo",
          style: {
            navigationBarTitleText: "\u4E2A\u4EBA\u8D44\u6599"
          }
        },
        {
          path: "userinfo/realname-verify/realname-verify",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u5B9E\u540D\u8BA4\u8BC1"
          }
        },
        {
          path: "login/login-withoutpwd"
        },
        {
          path: "login/login-withpwd"
        },
        {
          path: "userinfo/deactivate/deactivate",
          style: {
            navigationBarTitleText: "\u6CE8\u9500\u8D26\u53F7"
          }
        },
        {
          path: "userinfo/bind-mobile/bind-mobile",
          style: {
            navigationBarTitleText: "\u7ED1\u5B9A\u624B\u673A\u53F7\u7801"
          }
        },
        {
          path: "login/login-smscode",
          style: {
            navigationBarTitleText: "\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55"
          }
        },
        {
          path: "register/register",
          style: {
            navigationBarTitleText: "\u6CE8\u518C"
          }
        },
        {
          path: "retrieve/retrieve",
          style: {
            navigationBarTitleText: "\u91CD\u7F6E\u5BC6\u7801"
          }
        },
        {
          path: "common/webview/webview",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: ""
          }
        },
        {
          path: "userinfo/change_pwd/change_pwd",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u4FEE\u6539\u5BC6\u7801"
          }
        },
        {
          path: "register/register-by-email",
          style: {
            navigationBarTitleText: "\u90AE\u7BB1\u9A8C\u8BC1\u7801\u6CE8\u518C"
          }
        },
        {
          path: "retrieve/retrieve-by-email",
          style: {
            navigationBarTitleText: "\u901A\u8FC7\u90AE\u7BB1\u91CD\u7F6E\u5BC6\u7801"
          }
        },
        {
          path: "userinfo/set-pwd/set-pwd",
          style: {
            enablePullDownRefresh: false,
            navigationBarTitleText: "\u8BBE\u7F6E\u5BC6\u7801"
          }
        }
      ]
    }
  ];
  var globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-starter",
    navigationBarBackgroundColor: "#FFFFFF",
    backgroundColor: "#F8F8F8",
    enablePullDownRefresh: false,
    rpxCalcMaxDeviceWidth: 375,
    rpxCalcBaseDeviceWidth: 375
  };
  var condition = {
    list: [
      {
        path: "pages/list/detail"
      },
      {
        path: "pages/list/list"
      },
      {
        path: "pages/ucenter/settings/settings"
      }
    ],
    current: 1
  };
  var tabBar = {
    color: "#7A7E83",
    selectedColor: "#007AFF",
    borderStyle: "black",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/list/list",
        iconPath: "static/tabbar/list.png",
        selectedIconPath: "static/tabbar/list_active.png",
        text: "\u4E3B\u9875"
      },
      {
        pagePath: "pages/titlegrid/cart/cart",
        iconPath: "static/tabbar/plz.png",
        selectedIconPath: "static/tabbar/plz_active.png",
        text: "\u8D37\u6B3E\u7533\u8BF7"
      },
      {
        pagePath: "pages/grid/grid",
        iconPath: "static/tabbar/news.png",
        selectedIconPath: "static/tabbar/news_active.png",
        text: "\u8D44\u8BAF"
      },
      {
        pagePath: "pages/ucenter/ucenter",
        iconPath: "static/tabbar/me.png",
        selectedIconPath: "static/tabbar/me_active.png",
        text: "\u6211\u7684"
      }
    ]
  };
  var uniIdRouter = {
    loginPage: "uni_modules/uni-id-pages/pages/login/login-withoutpwd",
    needLogin: [
      "/uni_modules/uni-id-pages/pages/userinfo/userinfo"
    ],
    resToLogin: true
  };
  var e = {
    pages,
    subPackages,
    globalStyle,
    condition,
    tabBar,
    uniIdRouter
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t$2(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t22, n2) {
    return e2(n2 = { path: t22, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  });
  var r = s;
  var i = (n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), P2 = h2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, T2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = h2(T2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, T2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = h2(T2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, T2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = h2(T2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, T2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = l2(P2, T2 = h2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, T2, S2, 16, a2[34]), T2 = l2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = l2(P2, T2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, T2, _2, 16, a2[38]), T2 = l2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, T2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, T2, f2, 16, a2[42]), T2 = l2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, T2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, T2, C2, 16, a2[46]), P2 = d2(P2, T2 = l2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t22) {
    e2.exports = r.HmacMD5;
  }));
  var o = n(function(e2, t22) {
    e2.exports = r.enc.Utf8;
  });
  var a = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  var c = "FUNCTION";
  var u = "OBJECT";
  var h = "CLIENT_DB";
  var l = "pending";
  var d = "fulfilled";
  var p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  var _ = "REJECTED";
  var w = "NOT_PENDING";
  var v = class {
    constructor({ createPromise: e2, retryRule: t22 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t22;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  };
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  var S = true;
  var b = "app";
  var A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default);
  var C = b;
  var P = I('{\n    "address": [\n        "127.0.0.1",\n        "10.68.29.148",\n        "169.254.25.220",\n        "10.31.255.2"\n    ],\n    "debugPort": 9001,\n    "initialLaunchType": "local",\n    "servePort": 7001,\n    "skipFiles": [\n        "<node_internals>/**",\n        "D:/Develop/HBuilderX.4.24/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n');
  var T = I('[{"provider":"aliyun","spaceName":"cdl1","spaceId":"mp-e086c728-982c-4c49-aa1b-7d17dccab637","clientSecret":"Qisx0c1pRBxSbK/KgPh3qQ==","endpoint":"https://api.next.bspapp.com"}]') || [];
  var O = "";
  try {
    O = "__UNI__FBFC941";
  } catch (e2) {
  }
  var E = {};
  function L(e2, t22 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t22), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  var R = ["invoke", "success", "fail", "complete"];
  var U = L("_globalUniCloudInterceptor");
  function N(e2, t22) {
    U[e2] || (U[e2] = {}), g(t22) && Object.keys(t22).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t22[n2]);
    });
  }
  function D(e2, t22) {
    U[e2] || (U[e2] = {}), g(t22) ? Object.keys(t22).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t22[n2]);
    }) : delete U[e2];
  }
  function M(e2, t22) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t22)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t22) {
    return U[e2] && U[e2][t22] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  var K = L("_globalUniCloudListener");
  var j = "response";
  var $ = "needLogin";
  var B = "refreshToken";
  var W = "clientdb";
  var H = "cloudfunction";
  var z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t22) {
    const n2 = J(e2);
    n2.includes(t22) || n2.push(t22);
  }
  function G(e2, t22) {
    const n2 = J(e2), s2 = n2.indexOf(t22);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t22) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t22);
    }
  }
  var Q;
  var X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t22() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t22();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t22 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t22[n2] = y(s2));
    }
    return t22;
  }
  var te = class extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  };
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t22) => uni.setStorageSync(e2, t22), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t22 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t22 && ne.setStorageSync("uni_id_token_expired", t22);
  }
  var oe;
  var ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t22;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t22 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t22 };
  }
  var he = {};
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return __spreadProps(__spreadValues(__spreadValues({}, he), ae), { locale: e2, LOCALE: e2 });
    const t22 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t22, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t22)
      Object.hasOwnProperty.call(t22, e3) && -1 === o2.indexOf(e3) && delete t22[e3];
    return ae = __spreadValues(__spreadValues({ PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2 }, ue()), t22), __spreadProps(__spreadValues(__spreadValues({}, he), ae), { locale: e2, LOCALE: e2 });
  }
  var de = { sign: function(e2, t22) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t22).toString();
  }, wrappedRequest: function(e2, t22) {
    return new Promise((n2, s2) => {
      t22(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t22) {
      return Promise.resolve().then(() => this.hasAccessToken ? t22 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t22 = Object.assign({}, e2);
      return t22.data.token = this.accessToken, t22.header["x-basement-token"] = this.accessToken, t22.header["x-serverless-sign"] = de.sign(t22.data, this.config.clientSecret), t22;
    }
    setupRequest(e2, t22) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t22 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    authorize() {
      return __async(this, null, function* () {
        yield this.getAccessToken();
      });
    }
    callFunction(e2) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t22));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFileToOSS({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
        if ("string" !== f(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const o2 = i2 && i2.envType || this.config.envType;
        if (s2 && ("/" !== t22[0] && (t22 = "/" + t22), t22.indexOf("\\") > -1))
          throw new te({ code: "INVALID_PARAM", message: "\u4F7F\u7528cloudPath\u4F5C\u4E3A\u8DEF\u5F84\u65F6\uFF0CcloudPath\u4E0D\u53EF\u5305\u542B\u201C\\\u201D" });
        const a2 = (yield this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t22.split("/").pop() : t22, fileId: s2 ? t22 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
        if (u2 && (_2["x-oss-security-token"] = u2), y2) {
          const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
          _2.callback = de.toBase64(e3);
        }
        const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
        if (yield this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
          return { success: true, filePath: e2, fileID: c2 };
        if ((yield this.reportOSSUpload({ id: g2 })).success)
          return { success: true, filePath: e2, fileID: c2 };
        throw new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t22, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t22({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    getFileInfo() {
      return __async(this, arguments, function* ({ fileList: e2 } = {}) {
        if (!Array.isArray(e2) || 0 === e2.length)
          throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
        const t22 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
        return { fileList: (yield this.request(this.setupRequest(t22))).result };
      });
    }
  };
  var fe = { init(e2) {
    const t22 = new pe(e2), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  };
  var _e = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  });
  var we = _e;
  var ve = n(function(e2, t22) {
    e2.exports = r.HmacSHA256;
  });
  var Ie = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t22 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t22, e2;
  };
  function Se(e2) {
    return void 0 === e2;
  }
  function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var ke;
  function Ae(e2) {
    const t22 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t22) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(ke || (ke = {}));
  var Ce = { adapter: null, runtime: void 0 };
  var Pe = ["anonymousUuidKey"];
  var Te = class extends ye {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t22) {
      Ce.adapter.root.tcbObject[e2] = t22;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  };
  function xe(e2, t22) {
    switch (e2) {
      case "local":
        return t22.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t22.sessionStorage || new Te();
    }
  }
  var Oe = class {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
        const t22 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t22 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t22 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t22, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t22 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t22) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t22 = t22 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t22) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  };
  var Ee = {};
  var Le = {};
  function Re(e2) {
    return Ee[e2];
  }
  var Ue = class {
    constructor(e2, t22) {
      this.data = t22 || null, this.name = e2;
    }
  };
  var Ne = class extends Ue {
    constructor(e2, t22) {
      super("error", { error: e2, data: t22 }), this.error = e2;
    }
  };
  var De = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t22) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t22, this._listeners), this;
    }
    off(e2, t22) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t22, this._listeners), this;
    }
    fire(e2, t22) {
      if (e2 instanceof Ne)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t22 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Me(e2, t22) {
    De.on(e2, t22);
  }
  function qe(e2, t22 = {}) {
    De.fire(e2, t22);
  }
  function Fe(e2, t22) {
    De.off(e2, t22);
  }
  var Ke = "loginStateChanged";
  var je = "loginStateExpire";
  var $e = "loginTypeChanged";
  var Be = "anonymousConverted";
  var We = "refreshAccessToken";
  var He;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(He || (He = {}));
  var ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var Je = { "X-SDK-Version": "1.3.5" };
  function Ve(e2, t22, n2) {
    const s2 = e2[t22];
    e2[t22] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = __spreadValues(__spreadValues({}, o2), r2);
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), i2), s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: __spreadProps(__spreadValues({}, Je), { "x-seqid": e2 }) };
  }
  var Ye = class {
    constructor(e2 = {}) {
      var t22;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t22 = this.config.env, Le[t22]), Ve(this._reqClass, "post", [Ge]), Ve(this._reqClass, "upload", [Ge]), Ve(this._reqClass, "download", [Ge]);
    }
    post(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e2);
      });
    }
    upload(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e2);
      });
    }
    download(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e2);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e2, t22;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e2 = yield this._refreshAccessTokenPromise;
        } catch (e3) {
          t22 = e3;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t22)
          throw t22;
        return e2;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
        this._cache.removeStore(e2), this._cache.removeStore(t22);
        let i2 = this._cache.getStore(n2);
        if (!i2)
          throw new te({ message: "\u672A\u767B\u5F55CloudBase" });
        const o2 = { refresh_token: i2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", o2);
        if (a2.data.code) {
          const { code: e3 } = a2.data;
          if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
            if (this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
              const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            qe(je), this._cache.removeStore(n2);
          }
          throw new te({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
        }
        if (a2.data.access_token)
          return qe(We), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t22, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new te({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
        let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t22), i2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, r2)) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
      });
    }
    request(e2, t22, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let r2 = "application/x-www-form-urlencoded";
        const i2 = __spreadValues({ action: e2, env: this.config.env, dataVersion: "2019-08-16" }, t22);
        if (-1 === ze.indexOf(e2)) {
          const { refreshTokenKey: e3 } = this._cache.keys;
          this._cache.getStore(e3) && (i2.access_token = (yield this.getAccessToken()).accessToken);
        }
        let o2;
        if ("storage.uploadFile" === e2) {
          o2 = new FormData();
          for (let e3 in o2)
            o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
          r2 = "multipart/form-data";
        } else {
          r2 = "application/json", o2 = {};
          for (let e3 in i2)
            void 0 !== i2[e3] && (o2[e3] = i2[e3]);
        }
        let a2 = { headers: { "content-type": r2 } };
        n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
        const c2 = this._localCache.getStore(s2);
        c2 && (a2.headers["X-TCB-Trace"] = c2);
        const { parse: u2, inQuery: h2, search: l2 } = t22;
        let d2 = { env: this.config.env };
        u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
        let p2 = function(e3, t3, n3 = {}) {
          const s3 = /\?/.test(t3);
          let r3 = "";
          for (let e4 in n3)
            "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
          return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
        }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
        l2 && (p2 += l2);
        const f2 = yield this.post(__spreadValues({ url: p2, data: o2 }, a2)), g2 = f2.header && f2.header["x-tcb-trace"];
        if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
          throw new te({ code: "NETWORK_ERROR", message: "network request error" });
        return f2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e2, t22 = {}) {
        const n2 = yield this.request(e2, t22, { onUploadProgress: t22.onUploadProgress });
        if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e2)) {
          yield this.refreshAccessToken();
          const n3 = yield this.request(e2, t22, { onUploadProgress: t22.onUploadProgress });
          if (n3.data.code)
            throw new te({ code: n3.data.code, message: n3.data.message });
          return n3.data;
        }
        if (n2.data.code)
          throw new te({ code: n2.data.code, message: n2.data.message });
        return n2.data;
      });
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  };
  var Qe = {};
  function Xe(e2) {
    return Qe[e2];
  }
  var Ze = class {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t22) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t22);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2);
    }
  };
  var et = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t22) {
      return this._request.send("auth.updatePassword", { oldPassword: t22, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getLinkedUidList", {});
        let t22 = false;
        const { users: n2 } = e2;
        return n2.forEach((e3) => {
          e3.wxOpenId && e3.wxPublicId && (t22 = true);
        }), { users: n2, hasPrimaryUid: t22 };
      });
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    update(e2) {
      return __async(this, null, function* () {
        const { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t22 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t22[e3];
      }), this.location = { country: t22.country, province: t22.province, city: t22.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2), this.setUserInfo();
    }
  };
  var tt = class {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t22, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t22), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new et(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === He.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === He.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  };
  var nt = class extends Ze {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local");
        const { anonymousUuidKey: e2, refreshTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t22) || void 0, r2 = yield this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
        if (r2.uuid && r2.refresh_token) {
          this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), yield this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.ANONYMOUS, persistence: "local" });
          const e3 = new tt(this.config.env);
          return yield e3.user.refresh(), e3;
        }
        throw new te({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
      });
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t22, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t22), r2 = this._cache.getStore(n2), i2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
        if (i2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), yield this._request.refreshAccessToken(), qe(Be, { env: this.config.env }), qe($e, { loginType: He.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
        throw new te({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
      });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t22, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.setStore(t22, e2), this._cache.setStore(n2, He.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var st = class extends Ze {
    signIn(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
        const { refreshTokenKey: t22 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t22) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new tt(this.config.env);
        throw new te({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var rt = class extends Ze {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.EMAIL, persistence: this.config.persistence }), new tt(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
      });
    }
    activate(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e2 });
      });
    }
    resetPasswordWithToken(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t22 });
      });
    }
  };
  var it = class extends Ze {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        "string" != typeof t22 && (t22 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: He.USERNAME, username: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.USERNAME, persistence: this.config.persistence }), new tt(this.config.env);
        throw s2.code ? new te({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new te({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var ot = class {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new nt(this.config);
    }
    customAuthProvider() {
      return new st(this.config);
    }
    emailAuthProvider() {
      return new rt(this.config);
    }
    usernameAuthProvider() {
      return new it(this.config);
    }
    signInAnonymously() {
      return __async(this, null, function* () {
        return new nt(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return new rt(this.config).signIn(e2, t22);
      });
    }
    signInWithUsernameAndPassword(e2, t22) {
      return new it(this.config).signIn(e2, t22);
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), Me(Be, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === He.ANONYMOUS)
          throw new te({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
        const { refreshTokenKey: e2, accessTokenKey: t22, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
        if (!s2)
          return;
        const r2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e2), this._cache.removeStore(t22), this._cache.removeStore(n2), qe(Ke), qe($e, { env: this.config.env, loginType: He.NULL, persistence: this.config.persistence }), r2;
      });
    }
    signUpWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t22 });
      });
    }
    sendPasswordResetEmail(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
      });
    }
    onLoginStateChanged(e2) {
      Me(Ke, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t22 = this.hasLoginState();
      e2.call(this, t22);
    }
    onLoginStateExpired(e2) {
      Me(je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Me(We, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Me(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Me($e, () => {
        const t22 = this.hasLoginState();
        e2.call(this, t22);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new tt(this.config.env) : null;
    }
    isUsernameRegistered(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
        const { data: t22 } = yield this._request.send("auth.isUsernameRegistered", { username: e2 });
        return t22 && t22.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e2) {
      return __async(this, null, function* () {
        return new st(this.config).signIn(e2);
      });
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : __spreadProps(__spreadValues({}, e2.data), { requestId: e2.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t22) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t22 } = e2.data;
      t22 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t22, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t22));
    }
  };
  var at = function(e2, t22) {
    t22 = t22 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t22(null, { fileID: h2, requestId: d2 }) : t22(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t22(e4);
      });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ct = function(e2, t22) {
    t22 = t22 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t22(null, e3);
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ut = function({ fileList: e2 }, t22) {
    if (t22 = t22 || Ie(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e2 };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ht = function({ fileList: e2 }, t22) {
    t22 = t22 || Ie(), e2 && Array.isArray(e2) || t22(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var lt = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e2 }, t22) {
      const n2 = (yield ht.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
      if ("SUCCESS" !== n2.code)
        return t22 ? t22(n2) : new Promise((e3) => {
          e3(n2);
        });
      const s2 = Xe(this.config.env);
      let r2 = n2.download_url;
      if (r2 = encodeURI(r2), !t22)
        return s2.download({ url: r2 });
      t22(yield s2.download({ url: r2 }));
    });
  };
  var dt = function({ name: e2, data: t22, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || Ie();
    let a2;
    try {
      a2 = t22 ? JSON.stringify(t22) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Xe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  };
  var pt = { timeout: 15e3, persistence: "session" };
  var ft = {};
  var gt = class _gt {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e2.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, pt), e2), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new _gt(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t22 = e2 || Ce.adapter.primaryStorage || pt.persistence;
      var n2;
      return t22 !== this.config.persistence && (this.config.persistence = t22), function(e3) {
        const { env: t3 } = e3;
        Ee[t3] = new Oe(e3), Le[t3] = new Oe(__spreadProps(__spreadValues({}, e3), { persistence: "local" }));
      }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), this.authObj;
    }
    on(e2, t22) {
      return Me.apply(this, [e2, t22]);
    }
    off(e2, t22) {
      return Fe.apply(this, [e2, t22]);
    }
    callFunction(e2, t22) {
      return dt.apply(this, [e2, t22]);
    }
    deleteFile(e2, t22) {
      return ut.apply(this, [e2, t22]);
    }
    getTempFileURL(e2, t22) {
      return ht.apply(this, [e2, t22]);
    }
    downloadFile(e2, t22) {
      return lt.apply(this, [e2, t22]);
    }
    uploadFile(e2, t22) {
      return at.apply(this, [e2, t22]);
    }
    getUploadMetadata(e2, t22) {
      return ct.apply(this, [e2, t22]);
    }
    registerExtension(e2) {
      ft[e2.name] = e2;
    }
    invokeExtension(e2, t22) {
      return __async(this, null, function* () {
        const n2 = ft[e2];
        if (!n2)
          throw new te({ message: `\u6269\u5C55${e2} \u5FC5\u987B\u5148\u6CE8\u518C` });
        return yield n2.invoke(t22, this);
      });
    }
    useAdapters(e2) {
      const { adapter: t22, runtime: n2 } = Ae(e2) || {};
      t22 && (Ce.adapter = t22), n2 && (Ce.runtime = n2);
    }
  };
  var mt = new gt();
  function yt(e2, t22, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t22), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t22 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t22 += r2) ? t22 : "" + e2 + t22;
  }
  var _t = class {
    post(e2) {
      const { url: t22, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: yt("https:", t22), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t22, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: yt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t22(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var wt = { setItem(e2, t22) {
    ne.setStorageSync(e2, t22);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var vt = { genAdapter: function() {
    return { root: {}, reqClass: _t, localStorage: wt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  mt.useAdapters(vt);
  var It = mt;
  var St = It.init;
  It.init = function(e2) {
    e2.env = e2.spaceId;
    const t22 = St.call(this, e2);
    t22.config.provider = "tencent", t22.config.spaceId = e2.spaceId;
    const n2 = t22.auth;
    return t22.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t22.customAuth = t22.auth, t22;
  };
  var bt = It;
  var kt = class extends pe {
    getAccessToken() {
      return new Promise((e2, t22) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t22) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t22 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t22)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t22 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t22 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t22)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t22 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t22 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var At = { init(e2) {
    const t22 = new kt(e2), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var Ct = n(function(e2, t22) {
    e2.exports = r.enc.Hex;
  });
  function Pt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t22 = 16 * Math.random() | 0;
      return ("x" === e2 ? t22 : 3 & t22 | 8).toString(16);
    });
  }
  function Tt(e2 = "", t22 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t22, c2 = Date.now(), u2 = Pt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = we(e3.body).toString(Ct), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = we(r3).toString(Ct), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ve(o3, e3.secretKey).toString(Ct);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function xt({ url: e2, data: t22, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t22 ? JSON.stringify(t22) : t22, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ot(e2, t22) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Tt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t22 });
    return xt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Et(e2 = "") {
    const t22 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t22.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID\u4E0D\u5408\u6CD5" });
    const s2 = t22.substring(0, n2), r2 = t22.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Lt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Rt = class {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t22 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t22, { accessKeyId: this.config.accessKey, signatureNonce: Pt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(Ct)].join("\n"), a2 = ve(o2, this.config.secretKey).toString(Ct), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  };
  var Ut = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Rt(this.config);
    }
    callFunction(e2) {
      return function(e3, t22) {
        const { name: n2, data: s2, async: r2 = false } = e3, i2 = "POST", o2 = { "x-to-function-name": n2 };
        r2 && (o2["x-function-invoke-type"] = "async");
        const { url: a2, headers: c2 } = Tt("/functions/invokeFunction", { functionName: n2, data: s2, method: i2, headers: o2, signHeaderKeys: ["x-to-function-name"], config: t22 });
        return xt({ url: a2, data: s2, method: i2, headers: c2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t22, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t22, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
        if ("string" !== f(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new te({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const r2 = yield Ot({ path: "/".concat(t22.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
        return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
      });
    }
    getTempFileURL(_0) {
      return __async(this, arguments, function* ({ fileList: e2 }) {
        return new Promise((t22, n2) => {
          (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u4E0D\u80FD\u4E3A\u7A7A\u6570\u7EC4" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC750" }));
          const s2 = [];
          for (const t3 of e2) {
            "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" }));
            const e3 = Et.call(this, t3);
            s2.push({ file_id: e3, expire: 600 });
          }
          Ot({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
            const { file_list: n3 = [] } = e3;
            t22({ fileList: n3.map((e4) => ({ fileID: Lt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
          }).catch((e3) => n2(e3));
        });
      });
    }
    connectWebSocket(e2) {
      return __async(this, null, function* () {
        const { name: t22, query: n2 } = e2;
        return ne.connectSocket({ url: this._websocket.signedURL(t22, n2), complete: () => {
        } });
      });
    }
  };
  var Nt = { init: (e2) => {
    e2.provider = "alipay";
    const t22 = new Ut(e2);
    return t22.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t22;
  } };
  function Dt({ data: e2 }) {
    let t22;
    t22 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t22 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  function Mt() {
    return __async(this, arguments, function* ({ name: e2, data: t22 } = {}) {
      yield this.__dev__.initLocalNetwork();
      const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
      return new Promise((t3, n3) => {
        ne.request({ method: "POST", url: o2, data: { name: e2, platform: C, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
          t3(e3);
        }, fail() {
          t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
        } });
      }).then(({ data: e3 } = {}) => {
        const { code: t3, message: n3 } = e3 || {};
        return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
      }).then(({ code: n3, message: s3 }) => {
        if (0 !== n3) {
          switch (n3) {
            case "MODULE_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "FUNCTION_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "ACTION_ENCRYPTED":
              console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
              break;
            case "NETWORK_ERROR":
              console.error(s3 || "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B");
              break;
            case "SWITCH_TO_CLOUD":
              break;
            default: {
              const e3 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
              throw console.error(e3), new Error(e3);
            }
          }
          return this._callCloudFunction({ name: e2, data: t22 });
        }
        return new Promise((e3, n4) => {
          const s4 = Dt.call(this, { data: t22 });
          ne.request({ method: "POST", url: a2, data: { provider: r2, platform: C, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
            n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
          } });
        });
      });
    });
  }
  var qt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Ft = /[\\^$.*+?()[\]{}|]/g;
  var Kt = RegExp(Ft.source);
  function jt(e2, t22, n2) {
    return e2.replace(new RegExp((s2 = t22) && Kt.test(s2) ? s2.replace(Ft, "\\$&") : s2, "g"), n2);
    var s2;
  }
  var Bt = "request";
  var Wt = "response";
  var Ht = "both";
  var Tn = { code: 2e4, message: "System error" };
  var xn = { code: 20101, message: "Invalid client" };
  function Ln(e2) {
    const { errSubject: t22, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t22 || n2 || "uni-secure-network", code: s2 || i2 || Tn.code, message: r2 || o2, cause: a2 });
  }
  var Un;
  function Fn({ secretType: e2 } = {}) {
    return e2 === Bt || e2 === Wt || e2 === Ht;
  }
  function Kn({ name: e2, data: t22 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t22.redirectTo && "getAppClientKey" === t22.action;
  }
  function jn({ provider: e2, spaceId: t22, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t22 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Ln(xn);
  }
  function $n({ functionName: e2, result: t22, logPvd: n2 }) {
    if (this.__dev__.debugLog && t22 && t22.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t22.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Bn(e2) {
    const t22 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Dt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Fn(n3), o2 = Kn(n3), a2 = i2 || o2;
      return t22.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = jt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = jt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: qt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Mt), o2 = Mt) : o2 = n2, o2 = o2.bind(e2), Kn(t3))
        a2 = n2.call(e2, t3);
      else if (Fn(t3)) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (jn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  Un = class {
    constructor() {
      throw Ln({ message: `Platform ${C} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  var Wn = Symbol("CLIENT_DB_INTERNAL");
  function Hn(e2, t22) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Wn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t22.get(e3, n2, s2);
    } });
  }
  function zn(e2) {
    return { on: (t22, n2) => {
      e2[t22] = e2[t22] || [], e2[t22].indexOf(n2) > -1 || e2[t22].push(n2);
    }, off: (t22, n2) => {
      e2[t22] = e2[t22] || [];
      const s2 = e2[t22].indexOf(n2);
      -1 !== s2 && e2[t22].splice(s2, 1);
    } };
  }
  var Jn = ["db.Geo", "db.command", "command.aggregate"];
  function Vn(e2, t22) {
    return Jn.indexOf(`${e2}.${t22}`) > -1;
  }
  function Gn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Gn(e3));
      case "object":
        return e2._internalType === Wn || Object.keys(e2).forEach((t22) => {
          e2[t22] = Gn(e2[t22]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Yn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  var Qn = class {
    constructor(e2, t22, n2) {
      this.content = e2, this.prevStage = t22 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t22 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t22.push(e2.content);
      return { $db: t22.reverse().map((e3) => ({ $method: e3.$method, $param: Gn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t22 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t22 && "collection" === n2 || "pipeline" === t22)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Yn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t22 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t22 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t22 = this;
      return function() {
        return Xn({ $method: e2, $param: Gn(Array.from(arguments)) }, t22, t22._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e2, t22) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Gn(t22) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function Xn(e2, t22, n2) {
    return Hn(new Qn(e2, t22, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Vn(s2, t3) ? Xn({ $method: t3 }, e3, n2) : function() {
        return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Zn({ path: e2, method: t22 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t22, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function es$1(e2, t22 = {}) {
    return Hn(new e2(t22), { get: (e3, t3) => Vn("db", t3) ? Xn({ $method: t3 }, null, e3) : function() {
      return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, null, e3);
    } });
  }
  var ts = class extends class {
    constructor({ uniClient: e2 = {}, isJQL: t22 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t22 || (this.auth = zn(this._authCallBacks)), this._isJQL = t22, Object.assign(this, zn(this._dbCallBacks)), this.env = Hn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Hn({}, { get: (e3, t3) => Zn({ path: ["Geo"], method: t3 }) }), this.serverDate = Zn({ path: [], method: "serverDate" }), this.RegExp = Zn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t22) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    _callbackAuth(e2, t22) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t22 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t22, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t22, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t22, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  };
  var ns = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var ss = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var rs = { TOKEN_INVALID_TOKEN_EXPIRED: ss, TOKEN_INVALID_INVALID_CLIENTID: ns, TOKEN_INVALID: ns, TOKEN_INVALID_WRONG_TOKEN: ns, TOKEN_INVALID_ANONYMOUS_USER: ns };
  var is = { "uni-id-token-expired": ss, "uni-id-check-token-failed": ns, "uni-id-token-not-exist": ns, "uni-id-check-device-feature-failed": ns };
  function os(e2, t22) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t22}` : t22, n2.replace(/^\//, "");
  }
  function as(e2 = [], t22 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(os(t22, e3.path)) : false === e3.needLogin && s2.push(os(t22, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function cs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function us() {
    return function(e2) {
      let t22 = e2 && e2.$page && e2.$page.fullPath || "";
      return t22 ? ("/" !== t22.charAt(0) && (t22 = "/" + t22), t22) : t22;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function hs() {
    return cs(us());
  }
  function ls(e2 = "", t22 = {}) {
    if (!e2)
      return false;
    if (!(t22 && t22.list && t22.list.length))
      return false;
    const n2 = t22.list, s2 = cs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  var ds = !!e.uniIdRouter;
  var { loginPage: ps, routerNeedLogin: fs, resToLogin: gs, needLoginPage: ms, notNeedLoginPage: ys, loginPageInTabBar: _s } = function({ pages: t22 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = as(t22), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = as(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: ls(i2, r2) };
  }();
  if (ms.indexOf(ps) > -1)
    throw new Error(`Login page [${ps}] should not be "needLogin", please check your pages.json`);
  function ws(e2) {
    const t22 = hs();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t22.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function vs(e2) {
    const t22 = cs(ws(e2));
    return !(ys.indexOf(t22) > -1) && (ms.indexOf(t22) > -1 || fs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Is({ redirect: e2 }) {
    const t22 = cs(e2), n2 = cs(ps);
    return hs() !== n2 && t22 !== n2;
  }
  function Ss({ api: e2, redirect: t22 } = {}) {
    if (!t22 || !Is({ redirect: t22 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ps, t22);
    _s ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function bs({ url: e2 } = {}) {
    const t22 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: is[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: is[e4] };
      }
      return n3;
    }();
    if (vs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t22.abortLoginPageJump = true, t22;
      t22.autoToLoginPage = true;
    }
    return t22;
  }
  function ks() {
    !function() {
      const e3 = us(), { abortLoginPageJump: t22, autoToLoginPage: n2 } = bs({ url: e3 });
      t22 || n2 && Ss({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t22 = 0; t22 < e2.length; t22++) {
      const n2 = e2[t22];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = bs({ url: e3.url });
        return t3 ? e3 : s2 ? (Ss({ api: n2, redirect: ws(e3.url) }), false) : e3;
      } });
    }
  }
  function As() {
    this.onResponse((e2) => {
      const { type: t22, content: n2 } = e2;
      let s2 = false;
      switch (t22) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in is;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in rs;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = us();
          if (n3 && Is({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ps && Ss({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Cs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        G($, e4);
      }, ds && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        ks.call(e3);
      }), gs && As.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(B, e4);
      }, e3.offRefreshToken = function(e4) {
        G(B, e4);
      };
    }(e2);
  }
  var Ps;
  var Ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Os() {
    const e2 = re().token || "", t22 = e2.split(".");
    if (!e2 || 3 !== t22.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t22[1], decodeURIComponent(Ps(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ps = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !xs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t22;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t22 = Ts.indexOf(e2.charAt(i2++)) << 18 | Ts.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ts.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ts.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t22 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255) : String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255, 255 & t22);
    return r2;
  } : atob;
  var Es = n(function(e2, t22) {
    Object.defineProperty(t22, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t22.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  });
  var Ls = t$2(Es);
  var Rs = "manual";
  function Us(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t22) => {
          e3.push(this[t22]);
        }), e3;
      }, (e3, t22) => {
        if (this.loadtime === Rs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t22[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t22[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t22) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t22, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t22 && t22(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t22 = {}) {
      let n2;
      t22 = t22 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t22.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t22.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t22.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t22.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t22.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t22.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t22.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t22.distinct ? t22.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t22.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t22.pageCurrent ? t22.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t22.pageSize ? t22.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t22.getcount ? t22.getcount : this.getcount, f2 = void 0 !== t22.gettree ? t22.gettree : this.gettree, g2 = void 0 !== t22.gettreepath ? t22.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t22.limitlevel ? t22.limitlevel : this.limitlevel, startWith: void 0 !== t22.startwith ? t22.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ns(e2) {
    return function(t22, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return function(...s4) {
            return __async(this, null, function* () {
              const r3 = n3 ? n3({ params: s4 }) : {};
              let i3, o3;
              try {
                return yield M(q(t3, "invoke"), __spreadValues({}, r3)), i3 = yield e3(...s4), yield M(q(t3, "success"), __spreadProps(__spreadValues({}, r3), { result: i3 })), i3;
              } catch (e4) {
                throw o3 = e4, yield M(q(t3, "fail"), __spreadProps(__spreadValues({}, r3), { error: o3 })), o3;
              } finally {
                yield M(q(t3, "complete"), o3 ? __spreadProps(__spreadValues({}, r3), { error: o3 }) : __spreadProps(__spreadValues({}, r3), { result: i3 }));
              }
            });
          };
        }({ fn: function s4(...h2) {
          return __async(this, null, function* () {
            let l2;
            a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
            const d2 = { name: t22, type: u, data: { method: c2, params: h2 } };
            "object" == typeof n2.secretMethods && function(e3, t3) {
              const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
              r3 && (t3.secretType = r3);
            }(n2, d2);
            let p2 = false;
            try {
              l2 = yield e2.callFunction(d2);
            } catch (e3) {
              p2 = true, l2 = { result: new te(e3) };
            }
            const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
            if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, __spreadValues({}, y2))), g2) {
              let e3 = m2;
              if (p2 && o2) {
                e3 = (yield o2({ objectName: t22, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
              }
              if (a2)
                if ("toast" === i2.type)
                  uni.showToast({ title: e3, icon: "none" });
                else {
                  if ("modal" !== i2.type)
                    throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                  {
                    const { confirm: t3 } = yield function() {
                      return __async(this, arguments, function* ({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                        return new Promise((i3, o3) => {
                          uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                            i3(e5);
                          }, fail() {
                            i3({ confirm: false, cancel: true });
                          } });
                        });
                      });
                    }({ title: "\u63D0\u793A", content: e3, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                    if (i2.retry && t3)
                      return s4(...h2);
                  }
                }
              const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
              throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
            }
            return Y(j, { type: z, content: l2.result }), l2.result;
          });
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t22, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ds(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  function Ms() {
    return __async(this, arguments, function* ({ openid: e2, callLoginByWeixin: t22 = false } = {}) {
      Ds(this);
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${C}\``);
    });
  }
  function qs(e2) {
    return __async(this, null, function* () {
      const t22 = Ds(this);
      return t22.initPromise || (t22.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
        throw delete t22.initPromise, e3;
      })), t22.initPromise;
    });
  }
  function Fs(e2) {
    return function({ openid: t22, callLoginByWeixin: n2 = false } = {}) {
      return qs.call(e2, { openid: t22, callLoginByWeixin: n2 });
    };
  }
  function Ks(e2) {
    !function(e3) {
      he = e3;
    }(e2);
  }
  function js(e2) {
    const t22 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t22[e2](__spreadProps(__spreadValues({}, n2), { success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } }));
      });
    };
  }
  var $s = class extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t22) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t22);
    }
    on(e2, t22) {
      return this.addListener(e2, t22);
    }
    removeListener(e2, t22) {
      if (!t22)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t22);
      n2.splice(s2, 1);
    }
    off(e2, t22) {
      return this.removeListener(e2, t22);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t22) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t22);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([js("getSystemInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t22 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t22)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t22, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    open() {
      return __async(this, null, function* () {
        return this.init();
      });
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t22 = e2 && e2.data && e2.data.payload;
      return !(!t22 || "UNI_CLOUD_SSE" !== t22.channel || t22.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t22 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t22;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t22, messageId: n2, message: s2 } = e2;
      "end" === t22 ? this._end({ messageId: n2, message: s2 }) : "message" === t22 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t22 } = {}) {
      this.emit("message", t22);
    }
    _end({ messageId: e2, message: t22 } = {}) {
      this.emit("end", t22), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  };
  function Bs(e2, t22) {
    return __async(this, null, function* () {
      const n2 = `http://${e2}:${t22}/system/ping`;
      try {
        const e3 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
          ne.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
            e4(t4);
          }, fail(e5) {
            t3(e5);
          } }));
        }));
        return !(!e3.data || 0 !== e3.data.code);
      } catch (e3) {
        return false;
      }
      var s2;
    });
  }
  function Ws(e2) {
    return __async(this, null, function* () {
      {
        const { osName: e3, osVersion: t3 } = ce();
        "ios" === e3 && function(e4) {
          if (!e4 || "string" != typeof e4)
            return 0;
          const t4 = e4.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u671F\u95F4\u9700\u8981\uFF0C\u53D1\u884C\u540E\u4E0D\u9700\u8981\uFF09");
      }
      const t22 = e2.__dev__;
      if (!t22.debugInfo)
        return;
      const { address: n2, servePort: s2 } = t22.debugInfo, { address: r2 } = yield function(e3, t3) {
        return __async(this, null, function* () {
          let n3;
          for (let s3 = 0; s3 < e3.length; s3++) {
            const r3 = e3[s3];
            if (yield Bs(r3, t3)) {
              n3 = r3;
              break;
            }
          }
          return { address: n3, port: t3 };
        });
      }(n2, s2);
      if (r2)
        return t22.localAddress = r2, void (t22.localPort = s2);
      const i2 = console["error"];
      let o2 = "";
      if ("remote" === t22.debugInfo.initialLaunchType ? (t22.debugInfo.forceRemote = true, o2 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : o2 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", o2 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", 0 === C.indexOf("mp-") && (o2 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t22.debugInfo.forceRemote)
        throw new Error(o2);
      i2(o2);
    });
  }
  function Hs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t22 = Promise.resolve();
      var n2;
      n2 = 1, t22 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t22.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  var zs = { tcb: bt, tencent: bt, aliyun: fe, private: At, alipay: Nt };
  var Js = new class {
    init(e2) {
      let t22 = {};
      const n2 = zs[e2.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t22 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === C;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ws(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t22), Hs(t22), Bn(t22), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t22), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = es$1(ts, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = es$1(ts, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t22), function(e3) {
        e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Us(e3);
        } }), e3.SSEChannel = $s, e3.initSecureNetworkByWeixin = Fs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
      }(t22);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t22[e3])
          return;
        const n3 = t22[e3];
        t22[e3] = function() {
          return n3.apply(t22, Array.from(arguments));
        }, t22[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t22[e3], e3)).bind(t22);
      }), t22.init = this.init, t22;
    }
  }();
  (() => {
    const e2 = T;
    let t22 = {};
    if (e2 && 1 === e2.length)
      t22 = e2[0], Js = Js.init(t22), Js._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e3) => {
        Js[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Js, { get mixinDatacom() {
      return Us(Js);
    } }), Cs(Js), Js.addInterceptor = N, Js.removeInterceptor = D, Js.interceptObject = F;
  })();
  var Vs = Js;
  var fontData = [
    {
      "font_class": "arrow-down",
      "unicode": "\uE6BE"
    },
    {
      "font_class": "arrow-left",
      "unicode": "\uE6BC"
    },
    {
      "font_class": "arrow-right",
      "unicode": "\uE6BB"
    },
    {
      "font_class": "arrow-up",
      "unicode": "\uE6BD"
    },
    {
      "font_class": "auth",
      "unicode": "\uE6AB"
    },
    {
      "font_class": "auth-filled",
      "unicode": "\uE6CC"
    },
    {
      "font_class": "back",
      "unicode": "\uE6B9"
    },
    {
      "font_class": "bars",
      "unicode": "\uE627"
    },
    {
      "font_class": "calendar",
      "unicode": "\uE6A0"
    },
    {
      "font_class": "calendar-filled",
      "unicode": "\uE6C0"
    },
    {
      "font_class": "camera",
      "unicode": "\uE65A"
    },
    {
      "font_class": "camera-filled",
      "unicode": "\uE658"
    },
    {
      "font_class": "cart",
      "unicode": "\uE631"
    },
    {
      "font_class": "cart-filled",
      "unicode": "\uE6D0"
    },
    {
      "font_class": "chat",
      "unicode": "\uE65D"
    },
    {
      "font_class": "chat-filled",
      "unicode": "\uE659"
    },
    {
      "font_class": "chatboxes",
      "unicode": "\uE696"
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": "\uE692"
    },
    {
      "font_class": "chatbubble",
      "unicode": "\uE697"
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": "\uE694"
    },
    {
      "font_class": "checkbox",
      "unicode": "\uE62B"
    },
    {
      "font_class": "checkbox-filled",
      "unicode": "\uE62C"
    },
    {
      "font_class": "checkmarkempty",
      "unicode": "\uE65C"
    },
    {
      "font_class": "circle",
      "unicode": "\uE65B"
    },
    {
      "font_class": "circle-filled",
      "unicode": "\uE65E"
    },
    {
      "font_class": "clear",
      "unicode": "\uE66D"
    },
    {
      "font_class": "close",
      "unicode": "\uE673"
    },
    {
      "font_class": "closeempty",
      "unicode": "\uE66C"
    },
    {
      "font_class": "cloud-download",
      "unicode": "\uE647"
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": "\uE646"
    },
    {
      "font_class": "cloud-upload",
      "unicode": "\uE645"
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": "\uE648"
    },
    {
      "font_class": "color",
      "unicode": "\uE6CF"
    },
    {
      "font_class": "color-filled",
      "unicode": "\uE6C9"
    },
    {
      "font_class": "compose",
      "unicode": "\uE67F"
    },
    {
      "font_class": "contact",
      "unicode": "\uE693"
    },
    {
      "font_class": "contact-filled",
      "unicode": "\uE695"
    },
    {
      "font_class": "down",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "bottom",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "download",
      "unicode": "\uE68D"
    },
    {
      "font_class": "download-filled",
      "unicode": "\uE681"
    },
    {
      "font_class": "email",
      "unicode": "\uE69E"
    },
    {
      "font_class": "email-filled",
      "unicode": "\uE69A"
    },
    {
      "font_class": "eye",
      "unicode": "\uE651"
    },
    {
      "font_class": "eye-filled",
      "unicode": "\uE66A"
    },
    {
      "font_class": "eye-slash",
      "unicode": "\uE6B3"
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": "\uE6B4"
    },
    {
      "font_class": "fire",
      "unicode": "\uE6A1"
    },
    {
      "font_class": "fire-filled",
      "unicode": "\uE6C5"
    },
    {
      "font_class": "flag",
      "unicode": "\uE65F"
    },
    {
      "font_class": "flag-filled",
      "unicode": "\uE660"
    },
    {
      "font_class": "folder-add",
      "unicode": "\uE6A9"
    },
    {
      "font_class": "folder-add-filled",
      "unicode": "\uE6C8"
    },
    {
      "font_class": "font",
      "unicode": "\uE6A3"
    },
    {
      "font_class": "forward",
      "unicode": "\uE6BA"
    },
    {
      "font_class": "gear",
      "unicode": "\uE664"
    },
    {
      "font_class": "gear-filled",
      "unicode": "\uE661"
    },
    {
      "font_class": "gift",
      "unicode": "\uE6A4"
    },
    {
      "font_class": "gift-filled",
      "unicode": "\uE6C4"
    },
    {
      "font_class": "hand-down",
      "unicode": "\uE63D"
    },
    {
      "font_class": "hand-down-filled",
      "unicode": "\uE63C"
    },
    {
      "font_class": "hand-up",
      "unicode": "\uE63F"
    },
    {
      "font_class": "hand-up-filled",
      "unicode": "\uE63E"
    },
    {
      "font_class": "headphones",
      "unicode": "\uE630"
    },
    {
      "font_class": "heart",
      "unicode": "\uE639"
    },
    {
      "font_class": "heart-filled",
      "unicode": "\uE641"
    },
    {
      "font_class": "help",
      "unicode": "\uE679"
    },
    {
      "font_class": "help-filled",
      "unicode": "\uE674"
    },
    {
      "font_class": "home",
      "unicode": "\uE662"
    },
    {
      "font_class": "home-filled",
      "unicode": "\uE663"
    },
    {
      "font_class": "image",
      "unicode": "\uE670"
    },
    {
      "font_class": "image-filled",
      "unicode": "\uE678"
    },
    {
      "font_class": "images",
      "unicode": "\uE650"
    },
    {
      "font_class": "images-filled",
      "unicode": "\uE64B"
    },
    {
      "font_class": "info",
      "unicode": "\uE669"
    },
    {
      "font_class": "info-filled",
      "unicode": "\uE649"
    },
    {
      "font_class": "left",
      "unicode": "\uE6B7"
    },
    {
      "font_class": "link",
      "unicode": "\uE6A5"
    },
    {
      "font_class": "list",
      "unicode": "\uE644"
    },
    {
      "font_class": "location",
      "unicode": "\uE6AE"
    },
    {
      "font_class": "location-filled",
      "unicode": "\uE6AF"
    },
    {
      "font_class": "locked",
      "unicode": "\uE66B"
    },
    {
      "font_class": "locked-filled",
      "unicode": "\uE668"
    },
    {
      "font_class": "loop",
      "unicode": "\uE633"
    },
    {
      "font_class": "mail-open",
      "unicode": "\uE643"
    },
    {
      "font_class": "mail-open-filled",
      "unicode": "\uE63A"
    },
    {
      "font_class": "map",
      "unicode": "\uE667"
    },
    {
      "font_class": "map-filled",
      "unicode": "\uE666"
    },
    {
      "font_class": "map-pin",
      "unicode": "\uE6AD"
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": "\uE6AC"
    },
    {
      "font_class": "medal",
      "unicode": "\uE6A2"
    },
    {
      "font_class": "medal-filled",
      "unicode": "\uE6C3"
    },
    {
      "font_class": "mic",
      "unicode": "\uE671"
    },
    {
      "font_class": "mic-filled",
      "unicode": "\uE677"
    },
    {
      "font_class": "micoff",
      "unicode": "\uE67E"
    },
    {
      "font_class": "micoff-filled",
      "unicode": "\uE6B0"
    },
    {
      "font_class": "minus",
      "unicode": "\uE66F"
    },
    {
      "font_class": "minus-filled",
      "unicode": "\uE67D"
    },
    {
      "font_class": "more",
      "unicode": "\uE64D"
    },
    {
      "font_class": "more-filled",
      "unicode": "\uE64E"
    },
    {
      "font_class": "navigate",
      "unicode": "\uE66E"
    },
    {
      "font_class": "navigate-filled",
      "unicode": "\uE67A"
    },
    {
      "font_class": "notification",
      "unicode": "\uE6A6"
    },
    {
      "font_class": "notification-filled",
      "unicode": "\uE6C1"
    },
    {
      "font_class": "paperclip",
      "unicode": "\uE652"
    },
    {
      "font_class": "paperplane",
      "unicode": "\uE672"
    },
    {
      "font_class": "paperplane-filled",
      "unicode": "\uE675"
    },
    {
      "font_class": "person",
      "unicode": "\uE699"
    },
    {
      "font_class": "person-filled",
      "unicode": "\uE69D"
    },
    {
      "font_class": "personadd",
      "unicode": "\uE69F"
    },
    {
      "font_class": "personadd-filled",
      "unicode": "\uE698"
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": "\uE6D1"
    },
    {
      "font_class": "phone",
      "unicode": "\uE69C"
    },
    {
      "font_class": "phone-filled",
      "unicode": "\uE69B"
    },
    {
      "font_class": "plus",
      "unicode": "\uE676"
    },
    {
      "font_class": "plus-filled",
      "unicode": "\uE6C7"
    },
    {
      "font_class": "plusempty",
      "unicode": "\uE67B"
    },
    {
      "font_class": "pulldown",
      "unicode": "\uE632"
    },
    {
      "font_class": "pyq",
      "unicode": "\uE682"
    },
    {
      "font_class": "qq",
      "unicode": "\uE680"
    },
    {
      "font_class": "redo",
      "unicode": "\uE64A"
    },
    {
      "font_class": "redo-filled",
      "unicode": "\uE655"
    },
    {
      "font_class": "refresh",
      "unicode": "\uE657"
    },
    {
      "font_class": "refresh-filled",
      "unicode": "\uE656"
    },
    {
      "font_class": "refreshempty",
      "unicode": "\uE6BF"
    },
    {
      "font_class": "reload",
      "unicode": "\uE6B2"
    },
    {
      "font_class": "right",
      "unicode": "\uE6B5"
    },
    {
      "font_class": "scan",
      "unicode": "\uE62A"
    },
    {
      "font_class": "search",
      "unicode": "\uE654"
    },
    {
      "font_class": "settings",
      "unicode": "\uE653"
    },
    {
      "font_class": "settings-filled",
      "unicode": "\uE6CE"
    },
    {
      "font_class": "shop",
      "unicode": "\uE62F"
    },
    {
      "font_class": "shop-filled",
      "unicode": "\uE6CD"
    },
    {
      "font_class": "smallcircle",
      "unicode": "\uE67C"
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": "\uE665"
    },
    {
      "font_class": "sound",
      "unicode": "\uE684"
    },
    {
      "font_class": "sound-filled",
      "unicode": "\uE686"
    },
    {
      "font_class": "spinner-cycle",
      "unicode": "\uE68A"
    },
    {
      "font_class": "staff",
      "unicode": "\uE6A7"
    },
    {
      "font_class": "staff-filled",
      "unicode": "\uE6CB"
    },
    {
      "font_class": "star",
      "unicode": "\uE688"
    },
    {
      "font_class": "star-filled",
      "unicode": "\uE68F"
    },
    {
      "font_class": "starhalf",
      "unicode": "\uE683"
    },
    {
      "font_class": "trash",
      "unicode": "\uE687"
    },
    {
      "font_class": "trash-filled",
      "unicode": "\uE685"
    },
    {
      "font_class": "tune",
      "unicode": "\uE6AA"
    },
    {
      "font_class": "tune-filled",
      "unicode": "\uE6CA"
    },
    {
      "font_class": "undo",
      "unicode": "\uE64F"
    },
    {
      "font_class": "undo-filled",
      "unicode": "\uE64C"
    },
    {
      "font_class": "up",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "top",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "upload",
      "unicode": "\uE690"
    },
    {
      "font_class": "upload-filled",
      "unicode": "\uE68E"
    },
    {
      "font_class": "videocam",
      "unicode": "\uE68C"
    },
    {
      "font_class": "videocam-filled",
      "unicode": "\uE689"
    },
    {
      "font_class": "vip",
      "unicode": "\uE6A8"
    },
    {
      "font_class": "vip-filled",
      "unicode": "\uE6C6"
    },
    {
      "font_class": "wallet",
      "unicode": "\uE6B1"
    },
    {
      "font_class": "wallet-filled",
      "unicode": "\uE6C2"
    },
    {
      "font_class": "weibo",
      "unicode": "\uE68B"
    },
    {
      "font_class": "weixin",
      "unicode": "\uE691"
    }
  ];
  var iconUrl = "/assets/uniicons.32e978a5.ttf";
  var _style_0$4 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main$5 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue.normalizeStyle)($options.styleObj),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$4]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages22) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages22 && messages22[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages22 && Object.keys(messages22).length > 0) {
      locales = Object.keys(messages22);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages22, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages22 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages22 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages22,
        locale
      ];
      locale = options[0];
      messages22 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages22,
      watcher
    });
    let t22 = (key, values) => {
      if (typeof getApp !== "function") {
        t22 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t22 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t22(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t22(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  var zhHans$1 = {
    "uni-search-bar.cancel": "\u53D6\u6D88",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  var zhHant$1 = {
    "uni-search-bar.cancel": "\u53D6\u6D88",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  var _style_0$3 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#B3B3B3" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 14, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#B3B3B3", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
  var {
    t: t$1
  } = initVueI18n(messages$1);
  var _sfc_main$4 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$1("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e2) {
        this.$emit("focus", e2.detail);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-icons"), __easycom_0);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "uni-searchbar",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)(
        "view",
        {
          style: (0, import_vue.normalizeStyle)({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          (0, import_vue.createElementVNode)("view", { class: "uni-searchbar__box-icon-search" }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "searchIcon", {}, () => [
              (0, import_vue.createVNode)(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ])
          ]),
          $data.show || $data.searchVal ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            confirmType: "search",
            type: "text",
            modelValue: $data.searchVal,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event.detail.value),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength", "modelValue"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "u-text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            (0, import_vue.toDisplayString)($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            (0, import_vue.renderSlot)(_ctx.$slots, "clearIcon", {}, () => [
              (0, import_vue.createVNode)(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ])
          ])) : (0, import_vue.createCommentVNode)("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "u-text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        (0, import_vue.toDisplayString)($options.cancelTextI18n),
        1
        /* TEXT */
      )) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$3]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  var _style_0$2 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
  var _sfc_main$3 = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x = `${-w2 + this.offset[0]}px`;
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y2
          },
          rightBottom: {
            right: x,
            bottom: y2
          },
          leftBottom: {
            left: x,
            bottom: y2
          },
          leftTop: {
            left: x,
            top: y2
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "uni-badge--x",
      renderWhole: true
    }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default"),
      $props.text ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "u-text",
        {
          key: 0,
          class: (0, import_vue.normalizeClass)([$options.classNames, "uni-badge"]),
          style: (0, import_vue.normalizeStyle)([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        (0, import_vue.toDisplayString)($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : (0, import_vue.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$2]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  var _style_0$1 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "!backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
  var _sfc_main$2 = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e2) {
        this.$emit("switchChange", e2.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback2 = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback2);
            break;
          case "redirectTo":
            uni.redirectTo(callback2);
            break;
          case "reLaunch":
            uni.reLaunch(callback2);
            break;
          case "switchTab":
            uni.switchTab(callback2);
            break;
          default:
            uni.navigateTo(callback2);
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-icons"), __easycom_0);
    const _component_uni_badge = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-badge"), __easycom_1);
    const _component_switch = (0, import_vue.resolveComponent)("switch");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("cell", { keepScrollPosition: $props.keepScrollPosition }, [
      (0, import_vue.createElementVNode)("view", {
        class: (0, import_vue.normalizeClass)([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
        style: (0, import_vue.normalizeStyle)({ "background-color": $props.customStyle.backgroundColor }),
        hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        !$data.isFirstChild ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue.normalizeClass)(["border--left", { "uni-list--border": $props.border }])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue.createCommentVNode)("v-if", true),
        (0, import_vue.createElementVNode)(
          "view",
          {
            class: (0, import_vue.normalizeClass)(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
            style: (0, import_vue.normalizeStyle)({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
          },
          [
            (0, import_vue.renderSlot)(_ctx.$slots, "header", {}, () => [
              (0, import_vue.createElementVNode)("view", { class: "uni-list-item__header" }, [
                $props.thumb ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  key: 0,
                  class: "uni-list-item__icon"
                }, [
                  (0, import_vue.createElementVNode)("u-image", {
                    src: $props.thumb,
                    class: (0, import_vue.normalizeClass)(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                  }, null, 10, ["src"])
                ])) : $props.showExtraIcon ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  key: 1,
                  class: "uni-list-item__icon"
                }, [
                  (0, import_vue.createVNode)(_component_uni_icons, {
                    customPrefix: $props.extraIcon.customPrefix,
                    color: $props.extraIcon.color,
                    size: $props.extraIcon.size,
                    type: $props.extraIcon.type
                  }, null, 8, ["customPrefix", "color", "size", "type"])
                ])) : (0, import_vue.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue.renderSlot)(_ctx.$slots, "body", {}, () => [
              (0, import_vue.createElementVNode)(
                "view",
                {
                  class: (0, import_vue.normalizeClass)(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
                },
                [
                  $props.title ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "u-text",
                    {
                      key: 0,
                      class: (0, import_vue.normalizeClass)(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                    },
                    (0, import_vue.toDisplayString)($props.title),
                    3
                    /* TEXT, CLASS */
                  )) : (0, import_vue.createCommentVNode)("v-if", true),
                  $props.note ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "u-text",
                    {
                      key: 1,
                      class: "uni-list-item__content-note"
                    },
                    (0, import_vue.toDisplayString)($props.note),
                    1
                    /* TEXT */
                  )) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )
            ]),
            (0, import_vue.renderSlot)(_ctx.$slots, "footer", {}, () => [
              $props.rightText || $props.showBadge || $props.showSwitch ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "view",
                {
                  key: 0,
                  class: (0, import_vue.normalizeClass)(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
                },
                [
                  $props.rightText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "u-text",
                    {
                      key: 0,
                      class: "uni-list-item__extra-text"
                    },
                    (0, import_vue.toDisplayString)($props.rightText),
                    1
                    /* TEXT */
                  )) : (0, import_vue.createCommentVNode)("v-if", true),
                  $props.showBadge ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uni_badge, {
                    key: 1,
                    type: $props.badgeType,
                    text: $props.badgeText,
                    "custom-style": $props.badgeStyle
                  }, null, 8, ["type", "text", "custom-style"])) : (0, import_vue.createCommentVNode)("v-if", true),
                  $props.showSwitch ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_switch, {
                    key: 2,
                    disabled: $props.disabled,
                    checked: $props.switchChecked,
                    onChange: $options.onSwitchChange
                  }, null, 8, ["disabled", "checked", "onChange"])) : (0, import_vue.createCommentVNode)("v-if", true)
                ],
                2
                /* CLASS */
              )) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.showArrow || $props.link ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uni_icons, {
          key: 1,
          size: 16,
          class: "uni-icon-wrapper",
          color: "#bbb",
          type: "arrowright"
        })) : (0, import_vue.createCommentVNode)("v-if", true)
      ], 14, ["hoverClass"])
    ], 8, ["keepScrollPosition"]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  var _style_0 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
  var _sfc_main$1 = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e2) {
        this.$emit("scrolltolower");
      },
      scroll(e2) {
        this.$emit("scroll", e2);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("list", {
      bounce: false,
      scrollable: true,
      showScrollbar: "",
      renderReverse: $props.renderReverse,
      onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args)),
      class: (0, import_vue.normalizeClass)(["uni-list", { "uni-list--border": $props.border }]),
      enableBackToTop: $props.enableBackToTop,
      loadmoreoffset: "15"
    }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default")
    ], 42, ["renderReverse", "enableBackToTop"]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  var en = {
    "uniCloud.component.add.success": "Success",
    "uniCloud.component.update.success": "Success",
    "uniCloud.component.remove.showModal.title": "Tips",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var es = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var fr = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var zhHans = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E"
  };
  var zhHant = {
    "uniCloud.component.add.success": "\u65B0\u589E\u6210\u529F",
    "uniCloud.component.update.success": "\u4FEE\u6539\u6210\u529F",
    "uniCloud.component.remove.showModal.title": "\u63D0\u793A",
    "uniCloud.component.remove.showModal.content": "\u662F\u5426\u522A\u9664\u6578\u64DA"
  };
  var messages = {
    en,
    es,
    fr,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var isArray = Array.isArray;
  var { t } = initVueI18n(messages);
  var events = {
    load: "load",
    error: "error"
  };
  var pageMode = {
    add: "add",
    replace: "replace"
  };
  var loadMode = {
    auto: "auto",
    onready: "onready",
    manual: "manual"
  };
  var attrs = [
    "pageCurrent",
    "pageSize",
    "collection",
    "action",
    "field",
    "getcount",
    "orderby",
    "where",
    "groupby",
    "groupField",
    "distinct"
  ];
  var _sfc_main = {
    name: "UniClouddb",
    setup(props) {
      const dataListRef = props.ssrKey ? props.getone ? shallowSsrRef(void 0, props.ssrKey) : ssrRef([], props.ssrKey) : props.getone ? shallowSsrRef(void 0, "3qLiffn522C1fLXxc87ZuQ==") : ssrRef([], "TrpEtmNW93NHdmXTig6JsQ==");
      const instance = (0, import_vue.getCurrentInstance)();
      (0, import_vue.onMounted)(() => {
        if ((!dataListRef.value || dataListRef.value.length === 0) && !props.manual && props.loadtime === loadMode.auto) {
          instance.proxy.loadData();
        }
      });
      return { dataList: dataListRef };
    },
    // 服务端serverPrefetch生命周期，用于服务端加载数据，等将来全端支持Suspense时，可以采用 Suspense + async setup 来实现一版
    serverPrefetch() {
      return __async(this, null, function* () {
        if (!this.manual && this.loadtime === loadMode.auto) {
          return this.loadData();
        }
      });
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String, Object],
        default: false
      },
      gettreepath: {
        type: [Boolean, String],
        default: false
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: false
      },
      pageIndistinct: {
        type: [Boolean, String],
        default: false
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: false
      },
      ssrKey: {
        type: [String, Number],
        default: ""
      }
    },
    data() {
      return {
        loading: false,
        hasMore: false,
        paginationInternal: {},
        errorMessage: ""
      };
    },
    computed: {
      collectionArgs() {
        return isArray(this.collection) ? this.collection : [this.collection];
      },
      isLookup() {
        return isArray(this.collection) && this.collection.length > 1 || typeof this.collection === "string" && this.collection.indexOf(",") > -1;
      },
      mainCollection() {
        if (typeof this.collection === "string") {
          return this.collection.split(",")[0];
        }
        const mainQuery = JSON.parse(JSON.stringify(this.collection[0]));
        return mainQuery.$db[0].$param[0];
      }
    },
    created() {
      this._isEnded = false;
      this.paginationInternal = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      };
      this.$watch(() => {
        var al = [];
        attrs.forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        this.paginationInternal.size = this.pageSize;
        if (newValue[0] !== oldValue[0]) {
          this.paginationInternal.current = this.pageCurrent;
        }
        if (this.loadtime === loadMode.manual) {
          return;
        }
        let needReset = false;
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] !== oldValue[i2]) {
            needReset = true;
            break;
          }
        }
        if (needReset) {
          this.clear();
          this.reset();
        }
        this._execLoadData();
      });
    },
    methods: {
      loadData(args1, args2) {
        let callback2 = null;
        let clear = false;
        if (typeof args1 === "object") {
          if (args1.clear) {
            if (this.pageData === pageMode.replace) {
              this.clear();
            } else {
              clear = args1.clear;
            }
            this.reset();
          }
          if (args1.current !== void 0) {
            this.paginationInternal.current = args1.current;
          }
          if (typeof args2 === "function") {
            callback2 = args2;
          }
        } else if (typeof args1 === "function") {
          callback2 = args1;
        }
        return this._execLoadData(callback2, clear);
      },
      loadMore() {
        if (this._isEnded || this.loading) {
          return;
        }
        if (this.pageData === pageMode.add) {
          this.paginationInternal.current++;
        }
        this._execLoadData();
      },
      refresh() {
        this.clear();
        this._execLoadData();
      },
      clear() {
        this._isEnded = false;
        this.dataList = [];
      },
      reset() {
        this.paginationInternal.current = 1;
      },
      add(value, {
        action,
        showToast = true,
        toastTitle,
        success,
        fail,
        complete,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (needLoading) {
          uni.showLoading({
            title: loadingTitle
          });
        }
        let db2 = Vs.database(this.spaceInfo);
        if (action) {
          db2 = db2.action(action);
        }
        db2.collection(this.mainCollection).add(value).then((res) => {
          success && success(res);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t("uniCloud.component.add.success")
            });
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      remove(id, {
        action,
        success,
        fail,
        complete,
        confirmTitle,
        confirmContent,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (!id || !id.length) {
          return;
        }
        if (!needConfirm) {
          this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
          return;
        }
        uni.showModal({
          title: confirmTitle || t("uniCloud.component.remove.showModal.title"),
          content: confirmContent || t("uniCloud.component.remove.showModal.content"),
          showCancel: true,
          success: (res) => {
            if (!res.confirm) {
              return;
            }
            this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
          }
        });
      },
      update(id, value, {
        action,
        showToast = true,
        toastTitle,
        success,
        fail,
        complete,
        needConfirm = true,
        needLoading = true,
        loadingTitle = ""
      } = {}) {
        if (needLoading) {
          uni.showLoading({
            title: loadingTitle
          });
        }
        let db2 = Vs.database(this.spaceInfo);
        if (action) {
          db2 = db2.action(action);
        }
        return db2.collection(this.mainCollection).doc(id).update(value).then((res) => {
          success && success(res);
          if (showToast) {
            uni.showToast({
              title: toastTitle || t("uniCloud.component.update.success")
            });
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      getTemp(isTemp = true) {
        let db2 = Vs.database(this.spaceInfo);
        if (this.action) {
          db2 = db2.action(this.action);
        }
        db2 = db2.collection(...this.collectionArgs);
        if (this.foreignKey) {
          db2 = db2.foreignKey(this.foreignKey);
        }
        if (!(!this.where || !Object.keys(this.where).length)) {
          db2 = db2.where(this.where);
        }
        if (this.field) {
          db2 = db2.field(this.field);
        }
        if (this.groupby) {
          db2 = db2.groupBy(this.groupby);
        }
        if (this.groupField) {
          db2 = db2.groupField(this.groupField);
        }
        if (this.distinct === true) {
          db2 = db2.distinct();
        }
        if (this.orderby) {
          db2 = db2.orderBy(this.orderby);
        }
        const {
          current,
          size
        } = this.paginationInternal;
        const getOptions = {};
        if (this.getcount) {
          getOptions.getCount = this.getcount;
        }
        const treeOptions = {
          limitLevel: this.limitlevel,
          startWith: this.startwith
        };
        if (this.gettree) {
          getOptions.getTree = treeOptions;
        }
        if (this.gettreepath) {
          getOptions.getTreePath = treeOptions;
        }
        db2 = db2.skip(size * (current - 1)).limit(size);
        if (isTemp) {
          db2 = db2.getTemp(getOptions);
          db2.udb = this;
        } else {
          db2 = db2.get(getOptions);
        }
        return db2;
      },
      setResult(result) {
        if (result.code === 0) {
          this._execLoadDataSuccess(result);
        } else {
          this._execLoadDataFail(new Error(result.message));
        }
      },
      _execLoadData(callback2, clear) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.errorMessage = "";
        return this._getExec().then((res) => {
          this.loading = false;
          this._execLoadDataSuccess(res.result, callback2, clear);
        }).catch((err) => {
          this.loading = false;
          this._execLoadDataFail(err, callback2);
        });
      },
      _execLoadDataSuccess(result, callback2, clear) {
        const {
          data,
          count
        } = result;
        this._isEnded = count !== void 0 ? this.paginationInternal.current * this.paginationInternal.size >= count : data.length < this.pageSize;
        this.hasMore = !this._isEnded;
        const data2 = this.getone ? data.length ? data[0] : void 0 : data;
        if (this.getcount) {
          this.paginationInternal.count = count;
        }
        callback2 && callback2(data2, this._isEnded, this.paginationInternal);
        this._dispatchEvent(events.load, data2);
        if (this.getone || this.pageData === pageMode.replace) {
          this.dataList = data2;
        } else {
          if (clear) {
            this.dataList = data2;
          } else {
            this.dataList.push(...data2);
          }
        }
      },
      _execLoadDataFail(err, callback2) {
        this.errorMessage = err;
        callback2 && callback2();
        this.$emit(events.error, err);
        {
          console.error(err);
        }
      },
      _getExec() {
        return this.getTemp(false);
      },
      _execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle) {
        if (!this.collection || !id) {
          return;
        }
        const ids = isArray(id) ? id : [id];
        if (!ids.length) {
          return;
        }
        if (needLoading) {
          uni.showLoading({
            mask: true,
            title: loadingTitle
          });
        }
        const db2 = Vs.database(this.spaceInfo);
        const dbCmd = db2.command;
        let exec = db2;
        if (action) {
          exec = exec.action(action);
        }
        exec.collection(this.mainCollection).where({
          _id: dbCmd.in(ids)
        }).remove().then((res) => {
          success && success(res.result);
          if (this.pageData === pageMode.replace) {
            this.refresh();
          } else {
            this.removeData(ids);
          }
        }).catch((err) => {
          fail && fail(err);
          if (needConfirm) {
            uni.showModal({
              content: err.message,
              showCancel: false
            });
          }
        }).finally(() => {
          if (needLoading) {
            uni.hideLoading();
          }
          complete && complete();
        });
      },
      removeData(ids) {
        const il = ids.slice(0);
        const dl = this.dataList;
        for (let i2 = dl.length - 1; i2 >= 0; i2--) {
          const index = il.indexOf(dl[i2]._id);
          if (index >= 0) {
            dl.splice(i2, 1);
            il.splice(index, 1);
          }
        }
      },
      _dispatchEvent(type, data) {
        if (this._changeDataFunction) {
          this._changeDataFunction(data, this._isEnded, this.paginationInternal);
        } else {
          this.$emit(type, data, this._isEnded, this.paginationInternal);
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", { renderWhole: true }, [
      (0, import_vue.renderSlot)(_ctx.$slots, "default", {
        options: $props.options,
        data: $setup.dataList,
        pagination: $data.paginationInternal,
        loading: $data.loading,
        hasMore: $data.hasMore,
        error: $data.errorMessage
      })
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Develop/HBuilderX.4.24/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.vue"]]);

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/pages/list/list.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$7 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
  var _sfc_main$8 = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        key: 0,
        style: (0, import_vue2.normalizeStyle)("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
        class: "uni-grid-item",
        renderWhole: true
      },
      [
        (0, import_vue2.createElementVNode)(
          "view",
          {
            class: (0, import_vue2.normalizeClass)([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
            style: (0, import_vue2.normalizeStyle)({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
          },
          [
            (0, import_vue2.renderSlot)(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : (0, import_vue2.createCommentVNode)("v-if", true);
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["styles", [_style_0$7]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  var _style_0$6 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
  var dom = requireNativePlugin("dom");
  var _sfc_main$7 = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      // 每列显示个数
      column: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e2) {
        this.$emit("change", e2);
      },
      _getSize(fn) {
        dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
          this.width = parseInt((ret.size.width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-grid-wrap",
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: (0, import_vue2.normalizeClass)(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: (0, import_vue2.normalizeStyle)({ "border-left-color": $props.borderColor })
      }, [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ], 14, ["id"])
    ]);
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$6]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  var _style_0$5 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main$6 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue2.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue2.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue2.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue2.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue2.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue2.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue2.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue2.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue2.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue2.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue2.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue2.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_32 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$5]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  var _style_0$42 = { "uni-swiper__warp": { "": { "flex": 1, "flexDirection": "column", "position": "relative", "overflow": "hidden" } }, "uni-swiper__dots-box": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-item": { "": { "width": 8, "borderRadius": 100, "marginLeft": 6, "backgroundColor": "rgba(0,0,0,0.4)", "marginTop:first-child": 0, "marginRight:first-child": 0, "marginBottom:first-child": 0, "marginLeft:first-child": 0 } }, "uni-swiper__dots-default": { "": { "borderRadius": 100 } }, "uni-swiper__dots-long": { "": { "borderRadius": 50 } }, "uni-swiper__dots-bar": { "": { "borderRadius": 50 } }, "uni-swiper__dots-nav": { "": { "bottom": 0, "paddingTop": 8, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "flex": 1, "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.2)" } }, "uni-swiper__dots-nav-item": { "": { "fontSize": 14, "color": "#ffffff", "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15 } }, "uni-swiper__dots-indexes": { "": { "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-indexes-text": { "": { "color": "#ffffff", "fontSize": 12, "lineHeight": 14 } } };
  var _sfc_main$52 = {
    name: "UniSwiperDot",
    emits: ["clickItem"],
    props: {
      info: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      dotsStyles: {
        type: Object,
        default() {
          return {};
        }
      },
      // 类型 ：default(默认) indexes long nav
      mode: {
        type: String,
        default: "default"
      },
      // 只在 nav 模式下生效，变量名称
      field: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dots: {
          width: 6,
          height: 6,
          bottom: 10,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          selectedBackgroundColor: "#333",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        }
      };
    },
    watch: {
      dotsStyles(newVal) {
        this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      mode(newVal) {
        if (newVal === "indexes") {
          this.dots.width = 14;
          this.dots.height = 14;
        } else {
          this.dots.width = 6;
          this.dots.height = 6;
        }
      }
    },
    created() {
      if (this.mode === "indexes") {
        this.dots.width = 12;
        this.dots.height = 12;
      }
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    methods: {
      clickItem(index) {
        this.$emit("clickItem", index);
      }
    }
  };
  function _sfc_render$52(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "uni-swiper__warp",
      renderWhole: true
    }, [
      (0, import_vue2.renderSlot)(_ctx.$slots, "default"),
      $props.mode === "default" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
        "view",
        {
          style: (0, import_vue2.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "default"
        },
        [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($props.info, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue2.normalizeStyle)({
                  "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
                  "height": $data.dots.width / 2 + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-bar"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue2.createCommentVNode)("v-if", true),
      $props.mode === "dot" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
        "view",
        {
          style: (0, import_vue2.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "dot"
        },
        [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($props.info, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue2.normalizeStyle)({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue2.createCommentVNode)("v-if", true),
      $props.mode === "round" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
        "view",
        {
          style: (0, import_vue2.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "round"
        },
        [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($props.info, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                class: (0, import_vue2.normalizeClass)([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
                style: (0, import_vue2.normalizeStyle)({
                  "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index
              }, null, 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue2.createCommentVNode)("v-if", true),
      $props.mode === "nav" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
        "view",
        {
          key: "nav",
          style: (0, import_vue2.normalizeStyle)({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
          class: "uni-swiper__dots-box uni-swiper__dots-nav"
        },
        [
          (0, import_vue2.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue2.normalizeStyle)({ "color": $props.dotsStyles.color }),
              class: "uni-swiper__dots-nav-item"
            },
            (0, import_vue2.toDisplayString)($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : (0, import_vue2.createCommentVNode)("v-if", true),
      $props.mode === "indexes" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
        "view",
        {
          key: "indexes",
          style: (0, import_vue2.normalizeStyle)({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box"
        },
        [
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($props.info, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                onClick: ($event) => $options.clickItem(index),
                style: (0, import_vue2.normalizeStyle)({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-indexes"
              }, [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "uni-swiper__dots-indexes-text" },
                  (0, import_vue2.toDisplayString)(index + 1),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : (0, import_vue2.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_42 = /* @__PURE__ */ _export_sfc(_sfc_main$52, [["render", _sfc_render$52], ["styles", [_style_0$42]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  var _style_0$32 = { "refreshBox": { "": { "width": "750rpx", "height": 50, "justifyContent": "center", "alignItems": "center", "flexDirection": "row" } }, "refreshImg": { "": { "width": "55rpx", "height": "55rpx", "zIndex": 111 } }, "refreshText": { "": { "fontSize": "26rpx", "color": "#999999", "paddingLeft": "6rpx" } } };
  var _sfc_main$42 = {
    data() {
      return {
        showRefresh: false,
        state: 0
      };
    },
    methods: {
      onpullingdown({ pullingDistance, viewHeight }) {
        if (pullingDistance < viewHeight) {
          this.state = 0;
        } else {
          this.state = 1;
        }
      },
      refresh() {
        this.showRefresh = true;
        this.state = 2;
        this.$emit("refresh");
      }
    },
    watch: {
      loading(loading, oldValue) {
        if (!loading) {
          this.showRefresh = false;
          this.state = 3;
        }
      }
    },
    props: {
      loading: {
        type: Boolean,
        default() {
          return false;
        }
      },
      config: {
        type: Array,
        default() {
          return [
            {
              text: "\u7EE7\u7EED\u4E0B\u62C9\u6267\u884C\u5237\u65B0",
              img: ""
              //可以自己添加图片路径或base64实现图片
            },
            {
              text: "\u91CA\u653E\u7ACB\u5373\u5237\u65B0",
              img: ""
              //可以自己添加图片路径或base64实现图片
            },
            {
              text: "\u6B63\u5728\u75AF\u72C2\u7684\u52A0\u8F7D\u4E2D",
              img: ""
              //可以自己添加图片路径或base64实现图片
            },
            {
              text: "\u52A0\u8F7D\u6210\u529F",
              img: ""
              //可以自己添加图片路径或base64实现图片
            }
          ];
        }
      }
    }
  };
  function _sfc_render$42(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("refresh", {
      onRefresh: _cache[0] || (_cache[0] = (...args) => $options.refresh && $options.refresh(...args)),
      onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
      display: $data.showRefresh ? "show" : "hide"
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "refreshBox" }, [
        (0, import_vue2.createCommentVNode)(' \u53EF\u4EE5\u81EA\u5DF1\u6DFB\u52A0\u56FE\u7247\u8DEF\u5F84\u6216base64\u5B9E\u73B0\u56FE\u7247 <image class="refreshImg" :src="config[state].img" mode="widthFix" resize="cover"></image> '),
        (0, import_vue2.createElementVNode)(
          "u-text",
          { class: "refreshText" },
          (0, import_vue2.toDisplayString)($props.config[$data.state].text),
          1
          /* TEXT */
        )
      ])
    ], 40, ["display"]);
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$42, [["render", _sfc_render$42], ["styles", [_style_0$32]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/components/refreshBox/refreshBox.vue"]]);
  function pad(str, length = 2) {
    str += "";
    while (str.length < length) {
      str = "0" + str;
    }
    return str.slice(-length);
  }
  var parser = {
    yyyy: (dateObj) => {
      return pad(dateObj.year, 4);
    },
    yy: (dateObj) => {
      return pad(dateObj.year);
    },
    MM: (dateObj) => {
      return pad(dateObj.month);
    },
    M: (dateObj) => {
      return dateObj.month;
    },
    dd: (dateObj) => {
      return pad(dateObj.day);
    },
    d: (dateObj) => {
      return dateObj.day;
    },
    hh: (dateObj) => {
      return pad(dateObj.hour);
    },
    h: (dateObj) => {
      return dateObj.hour;
    },
    mm: (dateObj) => {
      return pad(dateObj.minute);
    },
    m: (dateObj) => {
      return dateObj.minute;
    },
    ss: (dateObj) => {
      return pad(dateObj.second);
    },
    s: (dateObj) => {
      return dateObj.second;
    },
    SSS: (dateObj) => {
      return pad(dateObj.millisecond, 3);
    },
    S: (dateObj) => {
      return dateObj.millisecond;
    }
  };
  function getDate(time) {
    if (time instanceof Date) {
      return time;
    }
    switch (typeof time) {
      case "string": {
        if (time.indexOf("T") > -1) {
          return new Date(time);
        }
        return new Date(time.replace(/-/g, "/"));
      }
      default:
        return new Date(time);
    }
  }
  function formatDate(date, format = "yyyy/MM/dd hh:mm:ss") {
    if (!date && date !== 0) {
      return "";
    }
    date = getDate(date);
    const dateObj = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds()
    };
    const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
    let flag = true;
    let result = format;
    while (flag) {
      flag = false;
      result = result.replace(tokenRegExp, function(matched) {
        flag = true;
        return parser[matched](dateObj);
      });
    }
    return result;
  }
  function friendlyDate(time, {
    locale = "zh",
    threshold = [6e4, 36e5],
    format = "yyyy/MM/dd hh:mm:ss"
  }) {
    if (time === "-") {
      return time;
    }
    if (!time && time !== 0) {
      return "";
    }
    const localeText = {
      zh: {
        year: "\u5E74",
        month: "\u6708",
        day: "\u5929",
        hour: "\u5C0F\u65F6",
        minute: "\u5206\u949F",
        second: "\u79D2",
        ago: "\u524D",
        later: "\u540E",
        justNow: "\u521A\u521A",
        soon: "\u9A6C\u4E0A",
        template: "{num}{unit}{suffix}"
      },
      en: {
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        ago: "ago",
        later: "later",
        justNow: "just now",
        soon: "soon",
        template: "{num} {unit} {suffix}"
      }
    };
    const text = localeText[locale] || localeText.zh;
    let date = getDate(time);
    let ms2 = date.getTime() - Date.now();
    let absMs = Math.abs(ms2);
    if (absMs < threshold[0]) {
      return ms2 < 0 ? text.justNow : text.soon;
    }
    if (absMs >= threshold[1]) {
      return formatDate(date, format);
    }
    let num;
    let unit;
    let suffix = text.later;
    if (ms2 < 0) {
      suffix = text.ago;
      ms2 = -ms2;
    }
    const seconds = Math.floor(ms2 / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    switch (true) {
      case years > 0:
        num = years;
        unit = text.year;
        break;
      case months > 0:
        num = months;
        unit = text.month;
        break;
      case days > 0:
        num = days;
        unit = text.day;
        break;
      case hours > 0:
        num = hours;
        unit = text.hour;
        break;
      case minutes > 0:
        num = minutes;
        unit = text.minute;
        break;
      default:
        num = seconds;
        unit = text.second;
        break;
    }
    if (locale === "en") {
      if (num === 1) {
        num = "a";
      } else {
        unit += "s";
      }
    }
    return text.template.replace(/{\s*num\s*}/g, num + "").replace(/{\s*unit\s*}/g, unit).replace(
      /{\s*suffix\s*}/g,
      suffix
    );
  }
  var _sfc_main$32 = {
    name: "uniDateformat",
    props: {
      date: {
        type: [Object, String, Number],
        default() {
          return "-";
        }
      },
      locale: {
        type: String,
        default: "zh"
      },
      threshold: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      format: {
        type: String,
        default: "yyyy/MM/dd hh:mm:ss"
      },
      // refreshRate使用不当可能导致性能问题，谨慎使用
      refreshRate: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        refreshMark: 0
      };
    },
    computed: {
      dateShow() {
        this.refreshMark;
        return friendlyDate(this.date, {
          locale: this.locale,
          threshold: this.threshold,
          format: this.format
        });
      }
    },
    watch: {
      refreshRate: {
        handler() {
          this.setAutoRefresh();
        },
        immediate: true
      }
    },
    methods: {
      refresh() {
        this.refreshMark++;
      },
      setAutoRefresh() {
        clearInterval(this.refreshInterval);
        if (this.refreshRate) {
          this.refreshInterval = setInterval(() => {
            this.refresh();
          }, parseInt(this.refreshRate));
        }
      }
    }
  };
  function _sfc_render$32(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      null,
      (0, import_vue2.toDisplayString)($options.dateShow),
      1
      /* TEXT */
    );
  }
  var __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$32, [["render", _sfc_render$32], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue"]]);
  var noData$1 = "No Data";
  var noNetwork$1 = "Network error";
  var toSet$1 = "Go to settings";
  var error$1 = "error";
  var en2 = {
    noData: noData$1,
    noNetwork: noNetwork$1,
    toSet: toSet$1,
    error: error$1
  };
  var noData = "\u6682\u65E0\u6570\u636E";
  var noNetwork = "\u7F51\u7EDC\u5F02\u5E38";
  var toSet = "\u524D\u5F80\u8BBE\u7F6E";
  var error = "\u9519\u8BEF";
  var zhHans2 = {
    noData,
    noNetwork,
    toSet,
    error
  };
  var messages2 = {
    en: en2,
    "zh-Hans": zhHans2
  };
  var _imports_0 = "/static/uni-load-state/disconnection.png";
  var _style_0$22 = { "box": { "": { "flex": 1, "width": "700rpx", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "uni-load-more": { "": { "alignItems": "center", "justifyContent": "center" } }, "state-text": { "": { "textAlign": "center", "fontSize": "26rpx", "width": "690rpx", "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx", "color": "#999999" } }, "icon-image": { "": { "width": "300rpx" } }, "tip-text": { "": { "color": "#999999", "fontSize": "32rpx", "marginBottom": "30rpx" } }, "btn": { "": { "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "width": 128, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "btn-text": { "": { "color": "#999999", "fontSize": 15 } }, "btn-default": { "": { "borderColor": "#999999", "borderStyle": "solid", "borderWidth": 1, "borderRadius": 3 } }, "error": { "": { "width": "690rpx", "color": "#DD524D" } } };
  var {
    t: t2
  } = initVueI18n(messages2);
  var _sfc_main$22 = {
    name: "uni-load-state",
    computed: {
      noData() {
        return t2("noData");
      },
      noNetwork() {
        return t2("noNetwork");
      },
      toSet() {
        return t2("toSet");
      },
      error() {
        return t2("error");
      }
    },
    data() {
      return {
        "networkType": ""
      };
    },
    props: {
      state: {
        type: Object,
        default() {
          return {
            "loading": true,
            "hasMore": false,
            "pagination": {
              "pages": 0
            },
            "data": [],
            "error": {}
          };
        }
      }
    },
    mounted() {
      uni.onNetworkStatusChange(({
        networkType
      }) => {
        if (this.networkType == "none" && networkType != "none") {
          this.$emit("networkResume");
        }
        this.networkType = networkType;
      });
      uni.getNetworkType({
        success: ({
          networkType
        }) => {
          this.networkType = networkType;
        }
      });
    },
    methods: {
      appear() {
        if (!this.state.loading && this.state.hasMore) {
          this.$emit("loadMore");
        }
      },
      openSettings() {
        if (uni.getSystemInfoSync().platform == "ios") {
          var UIApplication = plus.ios.import("UIApplication");
          var application2 = UIApplication.sharedApplication();
          var NSURL2 = plus.ios.import("NSURL");
          var setting2 = NSURL2.URLWithString("App-prefs:root=General");
          application2.openURL(setting2);
          plus.ios.deleteObject(setting2);
          plus.ios.deleteObject(NSURL2);
          plus.ios.deleteObject(application2);
        } else {
          var Intent = plus.android.importClass("android.content.Intent");
          var Settings = plus.android.importClass("android.provider.Settings");
          var mainActivity = plus.android.runtimeMainActivity();
          var intent = new Intent(Settings.ACTION_SETTINGS);
          mainActivity.startActivity(intent);
        }
      }
    }
  };
  function _sfc_render$22(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        onAppear: _cache[1] || (_cache[1] = (...args) => $options.appear && $options.appear(...args)),
        renderWhole: true
      },
      [
        $props.state.error ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { key: 0 }, [
          $data.networkType == "none" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
            key: 0,
            class: "box"
          }, [
            (0, import_vue2.createElementVNode)("u-image", {
              class: "icon-image",
              src: _imports_0,
              mode: "widthFix"
            }),
            (0, import_vue2.createElementVNode)(
              "u-text",
              { class: "tip-text" },
              (0, import_vue2.toDisplayString)($options.noNetwork),
              1
              /* TEXT */
            ),
            (0, import_vue2.createElementVNode)("view", {
              class: "btn btn-default",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.openSettings && $options.openSettings(...args))
            }, [
              (0, import_vue2.createElementVNode)(
                "u-text",
                { class: "btn-text" },
                (0, import_vue2.toDisplayString)($options.toSet),
                1
                /* TEXT */
              )
            ])
          ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "u-text",
            {
              key: 1,
              class: "error"
            },
            (0, import_vue2.toDisplayString)($options.error) + "\uFF1A" + (0, import_vue2.toDisplayString)(JSON.stringify($props.state.error)),
            1
            /* TEXT */
          ))
        ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "u-text",
          {
            key: 1,
            class: "state-text"
          },
          (0, import_vue2.toDisplayString)($props.state.loading ? "\u52A0\u8F7D\u4E2D..." : $props.state.hasMore ? "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A" : "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"),
          1
          /* TEXT */
        ))
      ],
      32
      /* NEED_HYDRATION */
    );
  }
  var __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$22, [["render", _sfc_render$22], ["styles", [_style_0$22]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/components/uni-load-state/uni-load-state.vue"]]);
  var _style_0$12 = { "uni-status-bar": { "": { "height": 20 } } };
  var _sfc_main$12 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        style: (0, import_vue2.normalizeStyle)({ height: $data.statusBarHeight }),
        class: "uni-status-bar",
        renderWhole: true
      },
      [
        (0, import_vue2.renderSlot)(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  var isIos;
  isIos = plus.os.name == "iOS";
  function judgeIosPermissionPush() {
    var result = false;
    var UIApplication = plus.ios.import("UIApplication");
    var app = UIApplication.sharedApplication();
    var enabledTypes = 0;
    if (app.currentUserNotificationSettings) {
      var settings = app.currentUserNotificationSettings();
      enabledTypes = settings.plusGetAttribute("types");
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
      if (enabledTypes == 0) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F");
      } else {
        result = true;
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
      }
      plus.ios.deleteObject(settings);
    } else {
      enabledTypes = app.enabledRemoteNotificationTypes();
      if (enabledTypes == 0) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "\u63A8\u9001\u6743\u9650\u6CA1\u6709\u5F00\u542F!");
      } else {
        result = true;
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "\u5DF2\u7ECF\u5F00\u542F\u63A8\u9001\u529F\u80FD!");
      }
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
    }
    plus.ios.deleteObject(app);
    plus.ios.deleteObject(UIApplication);
    return result;
  }
  function judgeIosPermissionLocation() {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var status = cllocationManger.authorizationStatus();
    result = status != 2;
    plus.ios.deleteObject(cllocationManger);
    return result;
  }
  function judgeIosPermissionRecord() {
    var result = false;
    var avaudiosession = plus.ios.import("AVAudioSession");
    var avaudio = avaudiosession.sharedInstance();
    var permissionStatus = avaudio.recordPermission();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
    if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "\u9EA6\u514B\u98CE\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "\u9EA6\u514B\u98CE\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    }
    plus.ios.deleteObject(avaudiosession);
    return result;
  }
  function judgeIosPermissionCamera() {
    var result = false;
    var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
    var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
    if (authStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "\u76F8\u673A\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "\u76F8\u673A\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(AVCaptureDevice);
    return result;
  }
  function judgeIosPermissionPhotoLibrary() {
    var result = false;
    var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
    var authStatus = PHPhotoLibrary.authorizationStatus();
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
    if (authStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "\u76F8\u518C\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "\u76F8\u518C\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(PHPhotoLibrary);
    return result;
  }
  function judgeIosPermissionContact() {
    var result = false;
    var CNContactStore = plus.ios.import("CNContactStore");
    var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
    if (cnAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "\u901A\u8BAF\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "\u901A\u8BAF\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(CNContactStore);
    return result;
  }
  function judgeIosPermissionCalendar() {
    var result = false;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
    if (ekAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "\u65E5\u5386\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "\u65E5\u5386\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function judgeIosPermissionMemo() {
    var result = false;
    var EKEventStore = plus.ios.import("EKEventStore");
    var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
    if (ekAuthStatus == 3) {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "\u5907\u5FD8\u5F55\u6743\u9650\u5DF2\u7ECF\u5F00\u542F");
    } else {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "\u5907\u5FD8\u5F55\u6743\u9650\u6CA1\u6709\u5F00\u542F");
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
  }
  function requestAndroidPermission(permissionID) {
    return new Promise((resolve, reject) => {
      plus.android.requestPermissions(
        [permissionID],
        // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
        function(resultObj) {
          var result = 0;
          for (var i2 = 0; i2 < resultObj.granted.length; i2++) {
            var grantedPermission = resultObj.granted[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "\u5DF2\u83B7\u53D6\u7684\u6743\u9650\uFF1A" + grantedPermission);
            result = 1;
          }
          for (var i2 = 0; i2 < resultObj.deniedPresent.length; i2++) {
            var deniedPresentPermission = resultObj.deniedPresent[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "\u62D2\u7EDD\u672C\u6B21\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedPresentPermission);
            result = 0;
          }
          for (var i2 = 0; i2 < resultObj.deniedAlways.length; i2++) {
            var deniedAlwaysPermission = resultObj.deniedAlways[i2];
            formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "\u6C38\u4E45\u62D2\u7EDD\u7533\u8BF7\u7684\u6743\u9650\uFF1A" + deniedAlwaysPermission);
            result = -1;
          }
          resolve(result);
        },
        function(error2) {
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "\u7533\u8BF7\u6743\u9650\u9519\u8BEF\uFF1A" + error2.code + " = " + error2.message);
          resolve({
            code: error2.code,
            message: error2.message
          });
        }
      );
    });
  }
  function judgeIosPermission(permissionID) {
    if (permissionID == "location") {
      return judgeIosPermissionLocation();
    } else if (permissionID == "camera") {
      return judgeIosPermissionCamera();
    } else if (permissionID == "photoLibrary") {
      return judgeIosPermissionPhotoLibrary();
    } else if (permissionID == "record") {
      return judgeIosPermissionRecord();
    } else if (permissionID == "push") {
      return judgeIosPermissionPush();
    } else if (permissionID == "contact") {
      return judgeIosPermissionContact();
    } else if (permissionID == "calendar") {
      return judgeIosPermissionCalendar();
    } else if (permissionID == "memo") {
      return judgeIosPermissionMemo();
    }
    return false;
  }
  function gotoAppPermissionSetting() {
    if (isIos) {
      var UIApplication = plus.ios.import("UIApplication");
      var application2 = UIApplication.sharedApplication();
      var NSURL2 = plus.ios.import("NSURL");
      var setting2 = NSURL2.URLWithString("app-settings:");
      application2.openURL(setting2);
      plus.ios.deleteObject(setting2);
      plus.ios.deleteObject(NSURL2);
      plus.ios.deleteObject(application2);
    } else {
      var Intent = plus.android.importClass("android.content.Intent");
      var Settings = plus.android.importClass("android.provider.Settings");
      var Uri = plus.android.importClass("android.net.Uri");
      var mainActivity = plus.android.runtimeMainActivity();
      var intent = new Intent();
      intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
      var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
      intent.setData(uri);
      mainActivity.startActivity(intent);
    }
  }
  function checkSystemEnableLocation() {
    if (isIos) {
      var result = false;
      var cllocationManger = plus.ios.import("CLLocationManager");
      var result = cllocationManger.locationServicesEnabled();
      plus.ios.deleteObject(cllocationManger);
      return result;
    } else {
      var context = plus.android.importClass("android.content.Context");
      var locationManager = plus.android.importClass("android.location.LocationManager");
      var main = plus.android.runtimeMainActivity();
      var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
      var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "\u7CFB\u7EDF\u5B9A\u4F4D\u5F00\u542F:" + result);
      return result;
    }
  }
  var permision = {
    judgeIosPermission,
    requestAndroidPermission,
    checkSystemEnableLocation,
    gotoAppPermissionSetting
  };
  var Gps = class {
    constructor(arg) {
      this.lock = false;
    }
    getLocation() {
      return __async(this, arguments, function* (param = {
        type: "wgs84"
      }) {
        return new Promise((callback2) => __async(this, null, function* () {
          if (this.lock) {
            callback2(false);
            return false;
          }
          this.lock = true;
          uni.getLocation(__spreadProps(__spreadValues({}, param), {
            success: (res) => {
              this.lock = false;
              callback2(res);
            },
            fail: (err) => __async(this, null, function* () {
              uni.showToast({
                title: "\u5B9A\u4F4D\u83B7\u53D6\u5931\u8D25",
                icon: "none"
              });
              formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
              callback2(false);
              yield this.checkGpsIsOpen();
            })
          }));
        }));
      });
    }
    checkGpsIsOpen() {
      return __async(this, null, function* () {
        this.lock = true;
        if (!permision.checkSystemEnableLocation()) {
          plus.nativeUI.confirm("\u624B\u673A\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e2) => {
            this.lock = false;
            if (e2.index == 0) {
              if (uni.getSystemInfoSync().platform == "ios") {
                plus.runtime.openURL("app-settings://");
              } else {
                var main = plus.android.runtimeMainActivity();
                var Intent = plus.android.importClass("android.content.Intent");
                var Settings = plus.android.importClass("android.provider.Settings");
                var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                main.startActivity(intent);
              }
            } else {
              uni.showToast({
                title: "\u8BBE\u5907\u65E0\u5B9A\u4F4D\u6743\u9650",
                icon: "none"
              });
              callback(false);
            }
          }, {
            "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
            "verticalAlign": "center"
          });
          return false;
        }
        let checkAppGpsRes = yield this.checkAppGps();
        if (!checkAppGpsRes) {
          plus.nativeUI.confirm("\u5E94\u7528\u5B9A\u4F4D\u6743\u9650\u6CA1\u6709\u5F00\u542F\uFF0C\u662F\u5426\u53BB\u5F00\u542F\uFF1F", (e2) => {
            this.lock = false;
            if (e2.index == 0) {
              permision.gotoAppPermissionSetting();
              callback(false);
            } else {
              uni.showToast({
                title: "\u5E94\u7528\u65E0\u5B9A\u4F4D\u6743\u9650",
                icon: "none"
              });
              return false;
            }
          }, {
            "buttons": ["\u53BB\u8BBE\u7F6E", "\u4E0D\u5F00\u542F"],
            "verticalAlign": "center"
          });
        } else {
          this.lock = false;
        }
      });
    }
    checkAppGps() {
      return __async(this, null, function* () {
        if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
          return false;
        }
        if (uni.getSystemInfoSync().platform != "ios" && (yield permision.requestAndroidPermission(
          "android.permission.ACCESS_FINE_LOCATION"
        )) != 1) {
          return false;
        }
        return true;
      });
    }
  };
  var _style_02 = { "pages": { "": { "backgroundColor": "#FFFFFF" } }, "avatar": { "": { "width": "200rpx", "height": "200rpx", "marginRight": "10rpx" } }, "main": { "": { "justifyContent": "space-between", "flex": 1 } }, "title": { "": { "fontSize": 16 } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": 14, "color": "#999999" } }, "last_modify_date": { "": { "fontSize": 14, "color": "#999999" } }, "uni-search-box": { "": { "backgroundColor": "#FFFFFF", "position": "sticky", "height": 50, "top": 0, "left": 0 } }, "cover-search-bar": { "": { "height": 50, "position": "relative", "top": -50, "marginBottom": -50 } }, "grid-item-box": { "": { "alignItems": "center", "justifyItems": "center" } }, "swiper-box": { "": { "height": 200 } }, "swiper-item": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 200, "color": "#ffffff" } }, "swiper-item0": { "": { "backgroundColor": "#cee1fd" } }, "swiper-item1": { "": { "backgroundColor": "#b2cef7" } }, "swiper-item2": { "": { "backgroundColor": "#cee1fd" } }, "image": { "": { "width": "750rpx", "height": 200 } }, "container": { "": { "position": "relative", "paddingRight": 0 } }, "@FONT-FACE": [{ "uni-swiper-dot-box": { "": { "width": 400, "marginTop": 8, "marginBottom": 0 } }, "image": { "": { "width": 100, "height": 200 } } }] };
  var cdbRef;
  var gps = new Gps();
  var db = Vs.database();
  var _sfc_main2 = {
    components: {
      statusBar
    },
    computed: {
      inputPlaceholder(e2) {
        if (uni.getStorageSync("CURRENT_LANG") == "en") {
          return "Please enter the search content";
        } else {
          return "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9";
        }
      },
      colList() {
        return [
          db.collection("opendb-news-articles").where(this.where).field(
            "avatar,title,last_modify_date,user_id"
          ).getTemp(),
          db.collection("uni-id-users").field("_id,nickname").getTemp()
        ];
      }
    },
    data() {
      return {
        where: '"article_status" == 1',
        keyword: "",
        showRefresh: false,
        listHight: 0,
        items: [
          {
            icon: "scan",
            text: "\u626B\u4E00\u626B",
            color: "#777",
            flag: "3",
            url: "/pages/titlegrid/scan/scan"
          },
          // 扫一扫
          {
            icon: "cart",
            text: "\u8D37\u6B3E",
            color: "#777",
            flag: "2",
            url: "/pages/titlegrid/cart/cart"
            // url: "/pages/grid/grid",
          },
          // 贷款
          {
            icon: "wallet",
            text: "\u5361\u5305",
            color: "#777",
            flag: "1",
            url: "/pages/titlegrid/wallet/wallet"
          },
          // 卡包
          {
            icon: "chat",
            text: "\u8D44\u8BAF",
            color: "#777",
            flag: "2",
            // url: "/pages/titlegrid/chat/chat",
            url: "/pages/grid/grid"
          }
          // 资讯
        ],
        info: [
          {
            colorClass: "uni-bg-red",
            url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/6341a1b7-67fc-4cbb-b0c7-bbf8955863d7.jpg",
            content: "\u5185\u5BB9 A"
          },
          {
            colorClass: "uni-bg-green",
            url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/592ecdbf-a74b-45cc-babb-ba35ed97aa10.png",
            content: "\u5185\u5BB9 B"
          },
          {
            colorClass: "uni-bg-blue",
            url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/46a29bc6-4888-4718-8aad-8a8b56b088a5.jpg",
            content: "\u5185\u5BB9 C"
          }
        ],
        current: 0,
        mode: "round",
        dotsStyles: {
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(0, 0, 0, .9)",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        },
        swiperDotIndex: 0
      };
    },
    watch: {
      keyword(keyword, oldValue) {
        let where = '"article_status" == 1 ';
        if (keyword) {
          this.where = where + `&& /${keyword}/.test(title)`;
        } else {
          this.where = where;
        }
      }
    },
    onReady() {
      return __async(this, null, function* () {
        this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
        cdbRef = this.$refs.udb;
      });
    },
    onShow() {
      return __async(this, null, function* () {
        this.keyword = getApp().globalData.searchText;
        getApp().globalData.searchText = "";
        yield gps.getLocation({
          geocode: true
        });
      });
    },
    methods: {
      searchClick(e2) {
        uni.hideKeyboard();
        uni.navigateTo({
          url: "/pages/list/search/search",
          animationType: "fade-in"
        });
      },
      navigateTo(url, flag) {
        if (flag === "1") {
          uni.navigateTo({
            url
          });
        } else if (flag === "2") {
          uni.switchTab({
            url
          });
        } else if (flag === "3") {
          uni.scanCode({
            scanType: ["qrCode"],
            // 扫码成功后的回调
            success: (res) => {
              uni.navigateTo({
                // 这里注意，此地址只是自己提前写好的，并且路径前面一定要加/
                url: `/pages/webpage/index?link=${res.result}`
              });
            }
          });
        }
      },
      retry() {
        this.refresh();
      },
      refresh() {
        cdbRef.loadData({
          clear: true
        }, () => {
          uni.stopPullDownRefresh();
          this.showRefresh = false;
          formatAppLog("log", "at pages/list/list.nvue:272", "end");
        });
        formatAppLog("log", "at pages/list/list.nvue:274", "refresh");
      },
      loadMore() {
        cdbRef.loadMore();
      },
      onqueryerror(e2) {
        formatAppLog("error", "at pages/list/list.nvue:280", e2);
      },
      onpullingdown(e2) {
        formatAppLog("log", "at pages/list/list.nvue:283", e2);
        this.showRefresh = true;
        if (e2.pullingDistance > 100) {
          this.refresh();
        }
      },
      change(e2) {
        this.current = e2.detail.current;
      },
      clickItem(e2) {
        this.swiperDotIndex = e2;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_statusBar = (0, import_vue2.resolveComponent)("statusBar");
    const _component_uni_icons = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-icons"), __easycom_0);
    const _component_uni_grid_item = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-grid-item"), __easycom_12);
    const _component_uni_grid = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-grid"), __easycom_22);
    const _component_uni_section = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-section"), __easycom_32);
    const _component_swiper_item = (0, import_vue2.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue2.resolveComponent)("swiper");
    const _component_uni_swiper_dot = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-swiper-dot"), __easycom_42);
    const _component_uni_search_bar = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-search-bar"), __easycom_1$1);
    const _component_refreshBox = resolveEasycom((0, import_vue2.resolveDynamicComponent)("refreshBox"), __easycom_6);
    const _component_uni_dateformat = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-dateformat"), __easycom_7);
    const _component_uni_list_item = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-list-item"), __easycom_3);
    const _component_uni_load_state = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-load-state"), __easycom_9);
    const _component_uni_list = resolveEasycom((0, import_vue2.resolveDynamicComponent)("uni-list"), __easycom_4);
    const _component_unicloud_db = resolveEasycom((0, import_vue2.resolveDynamicComponent)("unicloud-db"), __easycom_2);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "pages" }, [
        (0, import_vue2.createCommentVNode)(" \u6DFB\u52A0\u7684\u5916\u5C42\u5BB9\u5668 "),
        (0, import_vue2.createElementVNode)("view", { class: "container" }, [
          (0, import_vue2.createVNode)(_component_statusBar),
          (0, import_vue2.createCommentVNode)(" \u8868\u5934\u6309\u94AE "),
          (0, import_vue2.createVNode)(_component_uni_section, {
            title: "\u666E\u60E0\u91D1\u878D",
            type: "line",
            style: { "font-size": "80px" },
            padding: ""
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_uni_grid, {
                column: 4,
                highlight: true,
                onChange: $options.change
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.items, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_grid_item, {
                        index,
                        key: index,
                        onClick: ($event) => $options.navigateTo(item.url, item.flag)
                      }, {
                        default: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createElementVNode)("view", {
                            class: "grid-item-box",
                            style: { "background-color": "#fff" }
                          }, [
                            (0, import_vue2.createVNode)(_component_uni_icons, {
                              type: item.icon,
                              size: 30,
                              color: item.color
                            }, null, 8, ["type", "color"]),
                            (0, import_vue2.createElementVNode)(
                              "u-text",
                              { class: "text" },
                              (0, import_vue2.toDisplayString)(item.text),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["index", "onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue2.createCommentVNode)(" \u8F6E\u64AD\u56FE "),
          (0, import_vue2.createVNode)(_component_uni_swiper_dot, {
            class: "uni-swiper-dot-box",
            onClickItem: $options.clickItem,
            info: $data.info,
            current: $data.current,
            mode: $data.mode,
            "dots-styles": $data.dotsStyles,
            field: "content"
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_swiper, {
                class: "swiper-box",
                onChange: $options.change,
                current: $data.swiperDotIndex
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.info, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
                        _component_swiper_item,
                        { key: index },
                        {
                          default: (0, import_vue2.withCtx)(() => [
                            (0, import_vue2.createElementVNode)(
                              "view",
                              {
                                class: (0, import_vue2.normalizeClass)(["swiper-item", "swiper-item" + index])
                              },
                              [
                                (0, import_vue2.createElementVNode)("u-image", {
                                  src: item.url,
                                  mode: "aspectFill",
                                  class: "image"
                                }, null, 8, ["src"])
                              ],
                              2
                              /* CLASS */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onChange", "current"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClickItem", "info", "current", "mode", "dots-styles"]),
          (0, import_vue2.createCommentVNode)(" \u641C\u7D22\u529F\u80FD "),
          (0, import_vue2.createElementVNode)("view", { class: "uni-search-box" }, [
            (0, import_vue2.createVNode)(_component_uni_search_bar, {
              modelValue: $data.keyword,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keyword = $event),
              ref: "searchBar",
              radius: "100",
              cancelButton: "none",
              disabled: "",
              placeholder: $options.inputPlaceholder
            }, null, 8, ["modelValue", "placeholder"]),
            (0, import_vue2.createElementVNode)("view", {
              class: "cover-search-bar",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.searchClick && $options.searchClick(...args))
            })
          ]),
          (0, import_vue2.createVNode)(_component_unicloud_db, {
            ref: "udb",
            onError: $options.onqueryerror,
            collection: $options.colList,
            "page-size": 10
          }, {
            default: (0, import_vue2.withCtx)(({ data, pagination, hasMore, loading, error: error2, options }) => [
              (0, import_vue2.createCommentVNode)(' \u57FA\u4E8E uni-list \u7684\u9875\u9762\u5E03\u5C40 field="user_id.nickname"'),
              (0, import_vue2.createVNode)(_component_uni_list, {
                class: "uni-list",
                border: false,
                style: (0, import_vue2.normalizeStyle)({ height: $data.listHight })
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createCommentVNode)(" \u4F5C\u7528\u4E8Eapp\u7AEFnvue\u9875\u9762\u7684\u4E0B\u62C9\u52A0\u8F7D "),
                  (0, import_vue2.createVNode)(_component_refreshBox, {
                    onRefresh: $options.refresh,
                    loading
                  }, null, 8, ["onRefresh", "loading"]),
                  (0, import_vue2.createCommentVNode)(" \u5217\u8868\u6E32\u67D3 "),
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)(data, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_uni_list_item, {
                        to: "/pages/list/detail?id=" + item._id + "&title=" + item.title,
                        key: index
                      }, {
                        header: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createElementVNode)("u-image", {
                            class: "avatar",
                            src: item.avatar,
                            mode: "aspectFill"
                          }, null, 8, ["src"])
                        ]),
                        body: (0, import_vue2.withCtx)(() => [
                          (0, import_vue2.createElementVNode)("view", { class: "main" }, [
                            (0, import_vue2.createElementVNode)(
                              "u-text",
                              { class: "title" },
                              (0, import_vue2.toDisplayString)(item.title),
                              1
                              /* TEXT */
                            ),
                            (0, import_vue2.createElementVNode)("view", { class: "info" }, [
                              (0, import_vue2.createElementVNode)(
                                "u-text",
                                { class: "author" },
                                (0, import_vue2.toDisplayString)(item.user_id[0] ? item.user_id[0].nickname : ""),
                                1
                                /* TEXT */
                              ),
                              (0, import_vue2.createVNode)(_component_uni_dateformat, {
                                class: "last_modify_date",
                                date: item.last_modify_date,
                                format: "yyyy-MM-dd",
                                threshold: [6e4, 2592e6]
                              }, null, 8, ["date"])
                            ])
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  (0, import_vue2.createCommentVNode)(" \u52A0\u8F7D\u72B6\u6001\uFF1A\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A\uFF0C\u52A0\u8F7D\u4E2D\uFF0C\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86\uFF0C\u52A0\u8F7D\u9519\u8BEF "),
                  (0, import_vue2.createVNode)(
                    _component_uni_list_item,
                    null,
                    {
                      body: (0, import_vue2.withCtx)(() => [
                        (0, import_vue2.createVNode)(_component_uni_load_state, {
                          onNetworkResume: $options.refresh,
                          state: { data, pagination, hasMore, loading, error: error2 },
                          onLoadMore: $options.loadMore
                        }, null, 8, ["onNetworkResume", "state", "onLoadMore"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["style"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onError", "collection"])
        ])
      ]),
      (0, import_vue2.createCommentVNode)(" \u7ED3\u675F\u5916\u5C42\u5BB9\u5668 ")
    ]);
  }
  var list = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/pages/list/list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/list/list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e2) {
    }
    list.mpType = "page";
    const app = Vue.createPageApp(list, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...list.styles || []]));
    app.mount("#root");
  }
})();
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
