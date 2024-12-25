"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db + _easycom_uni_file_picker)();
}
const _sfc_main = {
  __name: "test",
  setup(__props) {
    common_vendor.onMounted(async (e) => {
      const { proxy } = common_vendor.getCurrentInstance();
      const res = await proxy.$axios.get("/user/1");
      console.log(res);
    });
    let suc = function(e) {
      common_vendor.index.showToast({
        title: e
      });
      console.log(e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data,
          loading,
          error,
          options
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : {
            c: common_vendor.f(data, (i, k1, i1) => {
              return {
                a: i._id,
                b: "dd4b199e-2-" + i0 + "-" + i1 + "," + ("dd4b199e-1-" + i0),
                c: common_vendor.p({
                  title: i.name,
                  ["show-badge"]: true,
                  ["badge-text"]: "12"
                })
              };
            }),
            d: "dd4b199e-1-" + i0 + ",dd4b199e-0"
          }, {
            e: i0,
            f: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "dd4b199e-0"
        }),
        b: common_vendor.p({
          collection: "LeaveMsg"
        }),
        c: common_vendor.o(common_vendor.unref(suc)),
        d: common_vendor.p({
          title: "上传照片",
          limit: "9"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
