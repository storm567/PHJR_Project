"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      banks: [{
        text: "中国工商银行",
        pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/gs.png"
      }, {
        text: "中国建设银行",
        pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/js.png"
      }, {
        text: "中国农业银行",
        pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/ny.png"
      }, {
        text: "中国银行",
        pictureurl: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/bank/zg.png"
      }]
    };
  },
  methods: {
    goTo(text) {
      common_vendor.index.navigateTo({
        url: `/pages/titlegrid/cart/bankcart/bankcart?bank=${text}`
      });
    }
  }
};
if (!Array) {
  const _component_statusBar = common_vendor.resolveComponent("statusBar");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_component_statusBar + _easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_section2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      dark: true,
      fixed: true,
      shadow: true,
      ["background-color"]: "#007aff",
      ["status-bar"]: true,
      title: "贷款申请"
    }),
    b: common_vendor.f($data.banks, (item, index, i0) => {
      return {
        a: item.pictureurl,
        b: common_vendor.t(item.text),
        c: index,
        d: common_vendor.o(($event) => $options.goTo(item.text), index),
        e: "6e57e8c0-3-" + i0 + ",6e57e8c0-2"
      };
    }),
    c: common_vendor.p({
      padding: "0",
      spacing: "0"
    }),
    d: common_vendor.p({
      title: "可选贷款",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
