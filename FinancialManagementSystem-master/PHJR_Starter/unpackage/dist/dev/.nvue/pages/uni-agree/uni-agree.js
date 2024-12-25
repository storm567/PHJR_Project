import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const config = {
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
    "company": "北京xx网络技术有限公司",
    //口号
    "slogan": "云端一体应用快速开发模版",
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
const _style_0 = { "page": { "": { "paddingTop": 80, "paddingRight": 30, "paddingBottom": 80, "paddingLeft": 30 } }, "title": { "": { "fontSize": 18, "lineHeight": 30, "marginBottom": 20 } }, "flex-r": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "text-item": { "": { "marginBottom": 5 } }, "tl": { "": { "fontSize": 14, "lineHeight": 20 } }, "hl": { "": { "color": "#007AFF" } }, "service": { "": { "fontSize": 16, "lineHeight": 20, "marginTop": 20 } }, "confirm": { "": { "marginTop": 50, "flexDirection": "row" } }, "btn-privacy": { "": { "flex": 1 } }, "btn-disagree": { "": { "marginLeft": 20 } } };
const { about } = config;
const _sfc_main = {
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
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "page" }, [
      createElementVNode("view", null, [
        createElementVNode("u-text", { class: "title" }, "个人信息保护指引")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "1.在浏览使用时，我们会收集、使用设备标识信息用于推荐。")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "2.我们可能会申请位置权限，用于演示 uni-app 的地图、定位能力。")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "3.你可以查看完整版")
      ]),
      createElementVNode("view", { class: "text-item flex-r" }, [
        createElementVNode("u-text", {
          class: "tl hl",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openprotocol && $options.openprotocol(...args))
        }, "《用户协议》"),
        createElementVNode("u-text", { class: "tl" }, " 和 "),
        createElementVNode("u-text", {
          class: "tl hl",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args))
        }, "《隐私政策》")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "tl" }, "以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。")
      ]),
      createElementVNode("view", { class: "text-item" }, [
        createElementVNode("u-text", { class: "service" }, "如果你同意请点击下面的按钮以接受我们的服务")
      ]),
      createElementVNode("view", { class: "text-item confirm" }, [
        createVNode(_component_button, {
          class: "btn-privacy",
          type: "primary",
          onClick: $options.agree
        }, {
          default: withCtx(() => [
            createTextVNode("同意")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "btn-privacy btn-disagree",
          onClick: $options.disagree
        }, {
          default: withCtx(() => [
            createTextVNode("暂不使用")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ]),
      createElementVNode("view", { class: "exit-area" })
    ])
  ]);
}
const uniAgree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/pages/uni-agree/uni-agree.nvue"]]);
export {
  uniAgree as default
};
