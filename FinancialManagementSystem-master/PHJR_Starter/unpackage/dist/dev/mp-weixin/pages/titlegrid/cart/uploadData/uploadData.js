"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bank: "",
      loanAmount: "",
      loanPurpose: "",
      collateralImage: "",
      // 存储抵押物照片的URL
      transactionImage: ""
      // 存储流水照片的URL
    };
  },
  onLoad(options) {
    if (options.bank) {
      this.bank = options.bank;
    }
    if (options.loanAmount) {
      this.loanAmount = options.loanAmount;
    }
    if (options.loanPurpose) {
      this.loanPurpose = options.loanPurpose;
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    // 处理上传的文件
    onFileChange(e, type) {
      console.log("File change event:", e);
      if (e.tempFilePaths && e.tempFilePaths.length > 0) {
        const filePath = e.tempFilePaths[0];
        if (type === "collateral") {
          this.collateralImage = filePath;
        } else if (type === "transaction") {
          this.transactionImage = filePath;
        }
      } else {
        if (type === "collateral") {
          this.collateralImage = "";
        } else if (type === "transaction") {
          this.transactionImage = "";
        }
      }
    },
    navigateToNext() {
      if (!this.collateralImage || !this.transactionImage) {
        common_vendor.index.showToast({
          title: "请上传抵押物和流水照片",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/titlegrid/cart/signing/signing?bank=${this.bank}&loanAmount=${this.loanAmount}&loanPurpose=${this.loanPurpose}&collateralImage=${this.collateralImage}&transactionImage=${this.transactionImage}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_nav_bar2 + _easycom_uni_file_picker2 + _easycom_uni_section2)();
}
const _easycom_uni_nav_bar = () => "../../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_file_picker = () => "../../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_section = () => "../../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_file_picker + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.back),
    b: common_vendor.p({
      dark: true,
      fixed: true,
      shadow: true,
      ["background-color"]: "#007aff",
      ["status-bar"]: true,
      title: "贷款申请_步骤2",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: common_vendor.o((e) => $options.onFileChange(e, "collateral")),
    d: common_vendor.p({
      limit: "1",
      title: "上传抵押物照片"
    }),
    e: common_vendor.p({
      title: "抵押物上传",
      type: "line"
    }),
    f: common_vendor.o((e) => $options.onFileChange(e, "transaction")),
    g: common_vendor.p({
      limit: "1",
      title: "上传一张流水照片"
    }),
    h: common_vendor.p({
      title: "流水上传",
      type: "line"
    }),
    i: common_vendor.o((...args) => $options.navigateToNext && $options.navigateToNext(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
