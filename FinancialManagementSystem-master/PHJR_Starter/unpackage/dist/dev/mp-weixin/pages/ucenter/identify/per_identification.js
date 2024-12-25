"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isAuthenticated: false,
      username: "",
      idcard: "",
      idcardImageUrl: ""
    };
  },
  onLoad() {
    const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
    if (!userInfo || !userInfo._id) {
      common_vendor.index.showToast({
        title: "未登录",
        icon: "none"
      });
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "/uni_modules/uni-id-pages/pages/login/login-withoutpwd"
        });
      }, 1e3);
    } else {
      const db = common_vendor.Vs.database();
      db.collection("idcard").where({
        user_id: userInfo._id
      }).get().then((res) => {
        if (res.result.data.length > 0) {
          this.isAuthenticated = true;
          const data = res.result.data[0];
          this.username = data.username;
          this.idcard = data.idcard;
          this.idcardImageUrl = data.idcard_url;
        }
      }).catch((err) => {
        console.error("查询认证信息失败:", err);
      });
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    onFileChange(event, type) {
      if (type === "idcard" && event.tempFilePaths.length > 0) {
        this.idcardImageUrl = event.tempFilePaths[0];
      }
    },
    submit() {
      const idcardRegex = /^[0-9]{17}([0-9X])$/;
      if (!this.username) {
        common_vendor.index.showToast({
          title: "请填写姓名",
          icon: "none"
        });
        return;
      }
      if (!this.idcard || !idcardRegex.test(this.idcard)) {
        common_vendor.index.showToast({
          title: "身份证号格式错误",
          icon: "none"
        });
        return;
      }
      if (!this.idcardImageUrl) {
        common_vendor.index.showToast({
          title: "请上传身份证照片",
          icon: "none"
        });
        return;
      }
      const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
      const db = common_vendor.Vs.database();
      db.collection("idcard").add({
        user_id: userInfo._id,
        idcard_url: this.idcardImageUrl,
        username: this.username,
        idcard: this.idcard
      }).then(() => {
        common_vendor.index.showToast({
          title: "认证成功",
          icon: "success"
        });
        this.isAuthenticated = true;
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "上传失败，请重试",
          icon: "none"
        });
        console.error("Database upload error:", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_file_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.back),
    b: common_vendor.p({
      dark: true,
      fixed: true,
      shadow: true,
      ["background-color"]: "#007aff",
      ["status-bar"]: true,
      title: "个人认证",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: $data.isAuthenticated
  }, $data.isAuthenticated ? {
    d: common_vendor.p({
      isFull: true,
      title: "姓名",
      ["sub-title"]: $data.username
    }),
    e: common_vendor.p({
      isFull: true,
      title: "身份证号",
      ["sub-title"]: $data.idcard
    }),
    f: $data.idcardImageUrl,
    g: common_vendor.p({
      isFull: true,
      title: "身份证照片"
    }),
    h: common_vendor.p({
      title: "已认证信息",
      type: "line",
      padding: true
    })
  } : {
    i: common_vendor.o(_ctx.input),
    j: common_vendor.o(($event) => $data.username = $event),
    k: common_vendor.p({
      focus: true,
      placeholder: "请输入姓名",
      modelValue: $data.username
    }),
    l: common_vendor.o(_ctx.input),
    m: common_vendor.o(($event) => $data.idcard = $event),
    n: common_vendor.p({
      focus: true,
      placeholder: "请输入身份证号",
      modelValue: $data.idcard
    }),
    o: common_vendor.o((e) => $options.onFileChange(e, "idcard")),
    p: common_vendor.p({
      limit: "1",
      title: "上传身份证人像面照片"
    }),
    q: common_vendor.p({
      title: "完善个人信息",
      type: "line",
      padding: true
    }),
    r: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
