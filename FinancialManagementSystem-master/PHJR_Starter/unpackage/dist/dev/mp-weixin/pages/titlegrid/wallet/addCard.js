"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cardNumber: "",
      banks: [],
      selectedBankId: null,
      selectedBankName: "",
      cardNumberError: ""
    };
  },
  onLoad() {
    this.fetchBanks();
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    // 获取银行列表
    async fetchBanks() {
      try {
        const db = common_vendor.Vs.database();
        const bankRes = await db.collection("bank").get();
        this.banks = bankRes.result.data;
      } catch (error) {
        console.error("获取银行列表失败", error);
      }
    },
    // 选择银行处理
    onBankChange(e) {
      const selectedBank = this.banks[e.detail.value];
      this.selectedBankId = selectedBank._id;
      this.selectedBankName = selectedBank.bank_name;
    },
    // 校验并提交银行卡信息
    async submitCard() {
      if (!/^\d{16}$/.test(this.cardNumber)) {
        this.cardNumberError = "请输入16位纯数字卡号";
        return;
      } else {
        this.cardNumberError = "";
      }
      if (!this.selectedBankId) {
        common_vendor.index.showToast({
          title: "请选择银行",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      try {
        const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
        if (userInfo && userInfo._id != null) {
          const userId = userInfo._id;
          const db = common_vendor.Vs.database();
          await db.collection("bankcard_info").add({
            user_id: userId,
            bank_name: this.selectedBankName,
            bankcard_number: this.cardNumber,
            bank_id: this.selectedBankId
          });
          common_vendor.index.showToast({
            title: "成功添加卡片",
            icon: "success",
            duration: 2e3
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/titlegrid/wallet/wallet"
            });
          }, 2e3);
        }
      } catch (error) {
        console.error("添加卡片失败", error);
        common_vendor.index.showToast({
          title: "添加卡片失败",
          icon: "none",
          duration: 2e3
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_nav_bar2 + _easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_easyinput + _easycom_uni_section)();
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
      title: "添加卡片",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: common_vendor.o(($event) => $data.cardNumber = $event),
    d: common_vendor.p({
      placeholder: "请输入16位卡号",
      type: "number",
      maxlength: "16",
      errorMessage: $data.cardNumberError,
      modelValue: $data.cardNumber
    }),
    e: common_vendor.p({
      title: "输入卡号",
      type: "line",
      padding: true
    }),
    f: common_vendor.t($data.selectedBankName || "请选择银行"),
    g: $data.banks,
    h: common_vendor.o((...args) => $options.onBankChange && $options.onBankChange(...args)),
    i: common_vendor.p({
      title: "选择银行",
      type: "line",
      padding: true
    }),
    j: common_vendor.o((...args) => $options.submitCard && $options.submitCard(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
