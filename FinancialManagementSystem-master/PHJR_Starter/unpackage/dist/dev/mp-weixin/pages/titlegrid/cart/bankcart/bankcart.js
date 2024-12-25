"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bank: "",
      loanAmount: "",
      loanPurpose: ""
    };
  },
  async onLoad(options) {
    if (options.bank) {
      this.bank = options.bank;
    }
    const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
    if (userInfo && userInfo._id != null) {
      const userId = userInfo._id;
      console.log("用户的 _id:", userId);
      try {
        const idcardCheck = await this.checkIdcard(userId);
        console.log("idcardCheck", idcardCheck);
        if (!idcardCheck) {
          this.showAndRedirect("请先进行用户认证");
          return;
        }
        const userComCheck = await this.checkUserCom(userId);
        console.log("userComCheck", userComCheck);
        if (!userComCheck) {
          this.showAndRedirect("请先进行企业认证");
          return;
        }
        const bankcardCheck = await this.checkBankcard(userId);
        console.log("bankcardCheck", bankcardCheck);
        if (!bankcardCheck) {
          this.showAndRedirect("请先绑定银行卡");
          return;
        }
        console.log("所有验证通过，可以继续操作");
      } catch (error) {
        console.error("验证过程出错:", error);
        this.showAndRedirect("验证过程出错，请稍后再试");
      }
    } else {
      this.showAndRedirect("请先登录");
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    async checkIdcard(userId) {
      const res = await common_vendor.Vs.database().collection("idcard").where({
        user_id: userId
      }).get();
      return res.result.data.length > 0;
    },
    async checkUserCom(userId) {
      const res = await common_vendor.Vs.database().collection("user_com").where({
        user_id: userId
      }).get();
      return res.result.data.length > 0;
    },
    async checkBankcard(userId) {
      const res = await common_vendor.Vs.database().collection("bankcard_info").where({
        user_id: userId
      }).get();
      return res.result.data.length > 0;
    },
    showAndRedirect(message) {
      common_vendor.index.showToast({
        title: message,
        icon: "none",
        duration: 1e3
      });
      setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/ucenter/ucenter"
        });
      }, 2e3);
    },
    navigateToNext() {
      if (!this.loanAmount || !this.loanPurpose) {
        common_vendor.index.showToast({
          title: "请填写完整的贷款信息",
          icon: "none"
        });
        return;
      }
      const amount = parseInt(this.loanAmount);
      if (isNaN(amount) || amount <= 0) {
        common_vendor.index.showToast({
          title: "贷款金额必须为正整数",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/titlegrid/cart/uploadData/uploadData?bank=${this.bank}&loanAmount=${this.loanAmount}&loanPurpose=${this.loanPurpose}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_nav_bar2 + _easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_nav_bar = () => "../../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../../../uni_modules/uni-section/components/uni-section/uni-section.js";
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
      title: "贷款申请_步骤1",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: common_vendor.o(($event) => $data.loanAmount = $event),
    d: common_vendor.p({
      focus: true,
      placeholder: "请输入贷款金额",
      modelValue: $data.loanAmount
    }),
    e: common_vendor.o(($event) => $data.loanPurpose = $event),
    f: common_vendor.p({
      focus: true,
      placeholder: "请输入贷款用途",
      modelValue: $data.loanPurpose
    }),
    g: common_vendor.p({
      title: "完善贷款信息",
      type: "line",
      padding: true
    }),
    h: common_vendor.o((...args) => $options.navigateToNext && $options.navigateToNext(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
