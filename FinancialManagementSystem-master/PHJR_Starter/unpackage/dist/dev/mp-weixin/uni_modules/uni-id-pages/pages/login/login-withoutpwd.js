"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uniIdPages_config = require("../../config.js");
const uni_modules_uniIdPages_common_loginPage_mixin = require("../../common/login-page.mixin.js");
let currentWebview;
const _sfc_main = {
  mixins: [uni_modules_uniIdPages_common_loginPage_mixin.mixin],
  data() {
    return {
      type: "",
      //快捷登录方式
      phone: "",
      //手机号码
      focusPhone: false,
      logo: "/static/logo.png"
    };
  },
  computed: {
    async loginTypes() {
      return uni_modules_uniIdPages_config.config.loginTypes;
    },
    isPhone() {
      return /^1\d{10}$/.test(this.phone);
    },
    imgSrc() {
      return this.type == "weixin" ? "/uni_modules/uni-id-pages/static/login/weixin.png" : "/uni_modules/uni-id-pages/static/app-plus/apple.png";
    }
  },
  async onLoad(e) {
    let type = e.type || uni_modules_uniIdPages_config.config.loginTypes[0];
    this.type = type;
    if (type != "univerify") {
      this.focusPhone = true;
    }
    this.$nextTick(() => {
      if (["weixin", "apple"].includes(type)) {
        this.$refs.uniFabLogin.servicesList = this.$refs.uniFabLogin.servicesList.filter((item) => item.id != type);
      }
    });
    common_vendor.index.$on("uni-id-pages-setLoginType", (type2) => {
      this.type = type2;
    });
  },
  onShow() {
  },
  onUnload() {
    common_vendor.index.$off("uni-id-pages-setLoginType");
  },
  onReady() {
  },
  methods: {
    showCurrentWebview() {
      currentWebview.setStyle({
        "top": 0
      });
    },
    quickLogin(e) {
      var _a, _b;
      let options = {};
      if ((_a = e.detail) == null ? void 0 : _a.code) {
        options.phoneNumberCode = e.detail.code;
      }
      if (this.type === "weixinMobile" && !((_b = e.detail) == null ? void 0 : _b.code))
        return;
      this.$refs.uniFabLogin.login_before(this.type, true, options);
    },
    toSmsPage() {
      if (!this.isPhone) {
        this.focusPhone = true;
        return common_vendor.index.showToast({
          title: "手机号码格式不正确",
          icon: "none",
          duration: 3e3
        });
      }
      if (this.needAgreements && !this.agree) {
        return this.$refs.agreements.popup(this.toSmsPage);
      }
      common_vendor.index.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber=" + this.phone
      });
    },
    //去密码登录页
    toPwdLogin() {
      common_vendor.index.navigateTo({
        url: "../login/password"
      });
    },
    chooseArea() {
      common_vendor.index.showToast({
        title: "暂不支持其他国家",
        icon: "none",
        duration: 3e3
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_id_pages_agreements2 = common_vendor.resolveComponent("uni-id-pages-agreements");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_id_pages_fab_login2 = common_vendor.resolveComponent("uni-id-pages-fab-login");
  (_easycom_uni_id_pages_agreements2 + _easycom_uni_easyinput2 + _easycom_uni_id_pages_fab_login2)();
}
const _easycom_uni_id_pages_agreements = () => "../../components/uni-id-pages-agreements/uni-id-pages-agreements.js";
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_id_pages_fab_login = () => "../../components/uni-id-pages-fab-login/uni-id-pages-fab-login.js";
if (!Math) {
  (_easycom_uni_id_pages_agreements + _easycom_uni_easyinput + _easycom_uni_id_pages_fab_login)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.logo,
    b: ["apple", "weixin", "weixinMobile"].includes($data.type)
  }, ["apple", "weixin", "weixinMobile"].includes($data.type) ? common_vendor.e({
    c: $data.type !== "weixinMobile"
  }, $data.type !== "weixinMobile" ? {
    d: common_vendor.o((...args) => $options.quickLogin && $options.quickLogin(...args)),
    e: $options.imgSrc
  } : {
    f: common_vendor.o((...args) => $options.quickLogin && $options.quickLogin(...args))
  }, {
    g: common_vendor.sr("agreements", "f1f87fcd-0"),
    h: common_vendor.p({
      scope: "register"
    })
  }) : {
    i: common_vendor.o((...args) => $options.chooseArea && $options.chooseArea(...args)),
    j: common_vendor.o(($event) => $data.focusPhone = false),
    k: common_vendor.o(($event) => $data.phone = $event),
    l: common_vendor.p({
      focus: $data.focusPhone,
      type: "number",
      inputBorder: false,
      maxlength: "11",
      placeholder: "请输入手机号",
      modelValue: $data.phone
    }),
    m: common_vendor.sr("agreements", "f1f87fcd-2"),
    n: common_vendor.p({
      scope: "register"
    }),
    o: common_vendor.o((...args) => $options.toSmsPage && $options.toSmsPage(...args))
  }, {
    p: common_vendor.sr("uniFabLogin", "f1f87fcd-3")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f1f87fcd"]]);
wx.createPage(MiniProgramPage);
