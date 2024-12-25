"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user_id: "",
      bank: "",
      loanAmount: "",
      loanPurpose: "",
      collateralImage: "",
      transactionImage: "",
      signatureImage: ""
      // 存储乙方签字图片的URL
    };
  },
  onLoad(options) {
    if (options.bank)
      this.bank = options.bank;
    if (options.loanAmount)
      this.loanAmount = options.loanAmount;
    if (options.loanPurpose)
      this.loanPurpose = options.loanPurpose;
    if (options.collateralImage)
      this.collateralImage = options.collateralImage;
    if (options.transactionImage)
      this.transactionImage = options.transactionImage;
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    onSignatureChange(e) {
      this.signatureImage = e.tempFilePaths[0];
    },
    completeSigning() {
      if (!this.signatureImage) {
        common_vendor.index.showToast({
          title: "请上传签名图片",
          icon: "none"
        });
      } else {
        const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
        if (userInfo && userInfo._id != null) {
          console.log("用户的 _id:", userInfo._id);
        }
        const db = common_vendor.Vs.database();
        db.collection("loan_records").add({
          user_id: userInfo._id,
          bank: this.bank,
          // loanAmount: this.loanAmount,
          loanAmount: parseInt(this.loanAmount, 10),
          // 将loanAmount转换为整数类型
          loanPurpose: this.loanPurpose,
          collateralImage: this.collateralImage,
          transactionImage: this.transactionImage,
          signatureImage: this.signatureImage,
          loan_state: "0",
          // createdTime: new Date().toISOString()
          createdTime: Date.now()
          // 使用13位的时间戳
        }).then(() => {
          common_vendor.index.showToast({
            title: "正在审核,即将返回首页",
            icon: "success"
          });
          setTimeout(() => {
            common_vendor.index.switchTab({
              url: "/pages/list/list"
            });
          }, 5e3);
        }).catch((err) => {
          common_vendor.index.showToast({
            title: "上传失败，请重试",
            icon: "none"
          });
          console.error("Database upload error:", err);
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_nav_bar2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_nav_bar = () => "../../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_file_picker = () => "../../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_file_picker)();
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
      title: "贷款申请_协议签署",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: common_vendor.o($options.onSignatureChange),
    d: common_vendor.p({
      limit: "1",
      title: "上传乙方签字图片"
    }),
    e: common_vendor.o((...args) => $options.completeSigning && $options.completeSigning(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
