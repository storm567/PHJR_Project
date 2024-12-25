"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onReady() {
    this.initCozeWebSDK();
  },
  methods: {
    initCozeWebSDK() {
      const script = document.createElement("script");
      script.src = "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js";
      document.head.appendChild(script);
      script.onload = () => {
        const bot_id = "7408388210608668690";
        const title = "puhui_ai";
        const icon = "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/GPT-3.5.png";
        const lang = "zh-CN";
        const layout = "mobile";
        const width = 800;
        new CozeWebSDK.WebChatClient({
          config: {
            bot_id
          },
          componentProps: {
            title,
            icon,
            lang,
            layout,
            width
          },
          el: document.getElementById("position_demo")
        });
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
