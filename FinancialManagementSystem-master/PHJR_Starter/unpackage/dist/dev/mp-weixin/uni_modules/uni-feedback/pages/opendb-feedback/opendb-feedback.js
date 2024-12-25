"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uniFeedback_js_sdk_validator_opendbFeedback = require("../../js_sdk/validator/opendb-feedback.js");
console.log(uni_modules_uniFeedback_js_sdk_validator_opendbFeedback.validator);
const db = common_vendor.Vs.database();
const dbCollectionName = "opendb-feedback";
function getValidator(fields) {
  let result = {};
  for (let key in uni_modules_uniFeedback_js_sdk_validator_opendbFeedback.validator) {
    if (fields.indexOf(key) > -1) {
      result[key] = uni_modules_uniFeedback_js_sdk_validator_opendbFeedback.validator[key];
    }
  }
  return result;
}
const _sfc_main = {
  data() {
    let formData = {
      "content": "",
      "imgs": [],
      "contact": "",
      "mobile": ""
    };
    return {
      formData,
      formOptions: {},
      rules: {
        ...getValidator(Object.keys(formData))
      }
    };
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    /**
     * 触发表单提交
     */
    submit() {
      common_vendor.index.showLoading({
        mask: true
      });
      this.$refs.form.validate().then((res) => {
        this.submitForm(res);
      }).catch(() => {
        common_vendor.index.hideLoading();
      });
    },
    submitForm(value) {
      db.collection(dbCollectionName).add(value).then((res) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "提交成功"
        });
        this.getOpenerEventChannel().emit("refreshData");
        setTimeout(() => common_vendor.index.navigateBack(), 500);
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "请求服务失败",
          showCancel: false
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_file_picker2 + _easycom_uni_easyinput2 + _easycom_uni_rate2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_file_picker = () => "../../../uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_rate = () => "../../../uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_forms = () => "../../../uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_file_picker + _easycom_uni_easyinput + _easycom_uni_rate + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $data.formData.content = $event.detail.value, ($event) => _ctx.binddata("content", $event.detail.value)]),
    b: $data.formData.content,
    c: common_vendor.p({
      name: "content",
      label: "留言内容/回复内容",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.imgs = $event),
    e: common_vendor.p({
      ["file-mediatype"]: "image",
      limit: 6,
      ["return-type"]: "array",
      modelValue: $data.formData.imgs
    }),
    f: common_vendor.p({
      name: "imgs",
      label: "图片列表"
    }),
    g: common_vendor.o(($event) => $data.formData.contact = $event),
    h: common_vendor.p({
      trim: "both",
      modelValue: $data.formData.contact
    }),
    i: common_vendor.p({
      name: "contact",
      label: "联系人"
    }),
    j: common_vendor.o(($event) => $data.formData.mobile = $event),
    k: common_vendor.p({
      trim: "both",
      modelValue: $data.formData.mobile
    }),
    l: common_vendor.p({
      name: "mobile",
      label: "联系电话"
    }),
    m: common_vendor.p({
      size: "48",
      margin: "20",
      ["is-fill"]: false
    }),
    n: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    o: common_vendor.sr("form", "b47e8632-0"),
    p: common_vendor.p({
      value: $data.formData,
      ["validate-trigger"]: "submit",
      ["err-show-type"]: "toast"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
