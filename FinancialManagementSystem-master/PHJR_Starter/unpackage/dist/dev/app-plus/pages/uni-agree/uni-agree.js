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
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/pages/uni-agree/uni-agree.js
  var import_vue = __toESM(require_vue());

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/unpackage/dist/dev/.nvue/pages/uni-agree/uni-agree.js
  var config = {
    "h5": {
      "url": "https://uni-starter.dcloud.net.cn",
      //	前端网页托管的域名	
      // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改	
      "openApp": {
        //如不需要本功能直接移除本节点即可	
        // //点击悬浮下载栏后打开的网页链接
        // "openUrl": '/#/pages/ucenter/invite/invite',
        // //左侧显示的应用名称	
        // "appname": 'uni-starter',
        // //应用的图标	
        // "logo": './static/logo.png',
      }
    },
    "mp": {
      "weixin": {
        //微信小程序原始id，微信小程序分享时
        "id": ""
      }
    },
    //关于应用
    "about": {
      //应用名称
      "appName": "uni-starter",
      //应用logo
      "logo": "/static/logo.png",
      //公司名称
      "company": "\u5317\u4EACxx\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8",
      //口号
      "slogan": "\u4E91\u7AEF\u4E00\u4F53\u5E94\u7528\u5FEB\u901F\u5F00\u53D1\u6A21\u7248",
      //应用的链接，用于分享到第三方平台和生成关于我们页的二维码
      "download": "https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
      //version
      "version": "1.0.0"
      //用于非app端显示，app端自动获取
    },
    "download": {
      //用于生成二合一下载页面
      "ios": "https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
      "android": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk"
    },
    //用于打开应用市场评分界面
    "marketId": {
      "ios": "",
      "android": ""
    },
    //配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称
    "i18n": {
      "enable": false
      //默认关闭，国际化。如果你想使用国际化相关功能，请改为true
    }
  };
  var _style_0 = { "page": { "": { "paddingTop": 80, "paddingRight": 30, "paddingBottom": 80, "paddingLeft": 30 } }, "title": { "": { "fontSize": 18, "lineHeight": 30, "marginBottom": 20 } }, "flex-r": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "text-item": { "": { "marginBottom": 5 } }, "tl": { "": { "fontSize": 14, "lineHeight": 20 } }, "hl": { "": { "color": "#007AFF" } }, "service": { "": { "fontSize": 16, "lineHeight": 20, "marginTop": 20 } }, "confirm": { "": { "marginTop": 50, "flexDirection": "row" } }, "btn-privacy": { "": { "flex": 1 } }, "btn-disagree": { "": { "marginLeft": 20 } } };
  var { about } = config;
  var _sfc_main = {
    data() {
      return {};
    },
    onLoad() {
      this._canBack = false;
    },
    onBackPress() {
      return !this._canBack;
    },
    methods: {
      openprotocol(e) {
        uni.navigateTo({
          url: "/uni_modules/uni-id-pages/pages/common/webview/webview?url=" + about.agreements[0].url
        });
      },
      openPrivacyPolicy(e) {
        uni.navigateTo({
          url: "/uni_modules/uni-id-pages/pages/common/webview/webview?url=" + about.agreements[1].url
        });
      },
      agree(e) {
        uni.setStorageSync("userprotocol", 1);
        this._canBack = true;
        setTimeout(() => {
          uni.navigateBack({
            animationDuration: 0
          });
        }, 100);
      },
      disagree() {
        plus.runtime.quit();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue.resolveComponent)("button");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "page" }, [
        (0, import_vue.createElementVNode)("view", null, [
          (0, import_vue.createElementVNode)("u-text", { class: "title" }, "\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u6307\u5F15")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "tl" }, "1.\u5728\u6D4F\u89C8\u4F7F\u7528\u65F6\uFF0C\u6211\u4EEC\u4F1A\u6536\u96C6\u3001\u4F7F\u7528\u8BBE\u5907\u6807\u8BC6\u4FE1\u606F\u7528\u4E8E\u63A8\u8350\u3002")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "tl" }, "2.\u6211\u4EEC\u53EF\u80FD\u4F1A\u7533\u8BF7\u4F4D\u7F6E\u6743\u9650\uFF0C\u7528\u4E8E\u6F14\u793A uni-app \u7684\u5730\u56FE\u3001\u5B9A\u4F4D\u80FD\u529B\u3002")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "tl" }, "3.\u4F60\u53EF\u4EE5\u67E5\u770B\u5B8C\u6574\u7248")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item flex-r" }, [
          (0, import_vue.createElementVNode)("u-text", {
            class: "tl hl",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openprotocol && $options.openprotocol(...args))
          }, "\u300A\u7528\u6237\u534F\u8BAE\u300B"),
          (0, import_vue.createElementVNode)("u-text", { class: "tl" }, " \u548C "),
          (0, import_vue.createElementVNode)("u-text", {
            class: "tl hl",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args))
          }, "\u300A\u9690\u79C1\u653F\u7B56\u300B")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "tl" }, "\u4EE5\u4FBF\u4E86\u89E3\u6211\u4EEC\u6536\u96C6\u3001\u4F7F\u7528\u3001\u5171\u4EAB\u3001\u5B58\u50A8\u4FE1\u606F\u7684\u60C5\u51B5\uFF0C\u4EE5\u53CA\u5BF9\u4FE1\u606F\u7684\u4FDD\u62A4\u63AA\u65BD\u3002")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "service" }, "\u5982\u679C\u4F60\u540C\u610F\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u4EE5\u63A5\u53D7\u6211\u4EEC\u7684\u670D\u52A1")
        ]),
        (0, import_vue.createElementVNode)("view", { class: "text-item confirm" }, [
          (0, import_vue.createVNode)(_component_button, {
            class: "btn-privacy",
            type: "primary",
            onClick: $options.agree
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)("\u540C\u610F")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue.createVNode)(_component_button, {
            class: "btn-privacy btn-disagree",
            onClick: $options.disagree
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)("\u6682\u4E0D\u4F7F\u7528")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "exit-area" })
      ])
    ]);
  }
  var uniAgree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/pages/uni-agree/uni-agree.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/uni-agree/uni-agree";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    uniAgree.mpType = "page";
    const app = Vue.createPageApp(uniAgree, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...uniAgree.styles || []]));
    app.mount("#root");
  }
})();
