"use strict";
const common_vendor = require("../../../common/vendor.js");
class Gps {
  constructor(arg) {
    this.lock = false;
  }
  async getLocation(param = {
    type: "wgs84"
  }) {
    return new Promise(async (callback) => {
      if (this.lock) {
        callback(false);
        return false;
      }
      this.lock = true;
      common_vendor.index.getLocation({
        ...param,
        success: (res) => {
          this.lock = false;
          callback(res);
        },
        fail: async (err) => {
          common_vendor.index.showToast({
            title: "定位获取失败",
            icon: "none"
          });
          console.error(err);
          callback(false);
          if (err.errMsg == "getLocation:fail auth deny") {
            common_vendor.index.showModal({
              content: "应用无定位权限",
              confirmText: "前往设置",
              complete: (e) => {
                if (e.confirm) {
                  common_vendor.index.openSetting({
                    success(res) {
                      console.log(res.authSetting);
                    }
                  });
                }
                this.lock = false;
              }
            });
          }
          if (err.errMsg == "getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF") {
            common_vendor.index.showModal({
              content: "未开启定位权限，请前往手机系统设置中开启",
              showCancel: false,
              confirmText: "知道了"
            });
          }
        }
      });
    });
  }
}
exports.Gps = Gps;
