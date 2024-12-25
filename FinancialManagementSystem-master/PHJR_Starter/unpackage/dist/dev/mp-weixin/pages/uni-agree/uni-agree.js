"use strict";
const common_vendor = require("../../common/vendor.js");
const uniStarter_config = require("../../uni-starter.config.js");
const { about } = uniStarter_config.config;
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
      common_vendor.index.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/common/webview/webview?url=" + about.agreements[0].url
      });
    },
    openPrivacyPolicy(e) {
      common_vendor.index.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/common/webview/webview?url=" + about.agreements[1].url
      });
    },
    agree(e) {
      common_vendor.index.setStorageSync("userprotocol", 1);
      this._canBack = true;
      setTimeout(() => {
        common_vendor.index.navigateBack({
          animationDuration: 0
        });
      }, 100);
    },
    disagree() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.openprotocol && $options.openprotocol(...args)),
    b: common_vendor.o((...args) => $options.openPrivacyPolicy && $options.openPrivacyPolicy(...args)),
    c: common_vendor.o((...args) => $options.agree && $options.agree(...args)),
    d: common_vendor.o((...args) => $options.disagree && $options.disagree(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
