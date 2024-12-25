"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      ws: null,
      wo: null,
      scan: null
    };
  },
  methods: {
    plusReady() {
      this.ws = plus.webview.currentWebview();
      this.wo = this.ws.opener();
      this.ws.addEventListener("show", () => {
        this.scan = new plus.barcode.Barcode("bcid");
        this.scan.onmarked = this.onmarked;
        this.scan.start({ conserve: true, filename: "_doc/barcode/" });
        this.createSubview();
      }, false);
      this.ws.show("pop-in");
    },
    onmarked(type, result, file) {
      switch (type) {
        case plus.barcode.QR:
          type = "QR";
          break;
        case plus.barcode.EAN13:
          type = "EAN13";
          break;
        case plus.barcode.EAN8:
          type = "EAN8";
          break;
        default:
          type = "其它" + type;
          break;
      }
      result = result.replace(/\r\n/g, "");
      this.wo.evalJS(`scaned('${type}', '${result}', '${file}');`);
      this.goBack();
    },
    createSubview() {
    },
    scanPicture() {
      plus.gallery.pick((path) => {
        plus.barcode.scan(path, this.onmarked, (error) => {
          plus.nativeUI.alert("无法识别此图片");
        });
      }, (err) => {
        console.log("Failed: " + err.message);
      });
    },
    goBack() {
      console.log("goBack called");
      common_vendor.index.navigateBack();
    }
  },
  mounted() {
    document.addEventListener("plusready", this.plusReady, false);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47a979b6"]]);
wx.createPage(MiniProgramPage);
