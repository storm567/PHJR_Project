"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_ucenter_settings_dcPush_push = require("./dc-push/push.js");
const uni_modules_uniIdPages_common_store = require("../../../uni_modules/uni-id-pages/common/store.js");
const _sfc_main = {
  data() {
    return {
      pushServer: pages_ucenter_settings_dcPush_push.pushServer,
      supportMode: [],
      pushIsOn: "wait",
      currentLanguage: "",
      userInfo: {}
    };
  },
  computed: {
    hasLogin() {
      return uni_modules_uniIdPages_common_store.store.hasLogin;
    },
    i18nEnable() {
      return getApp().globalData.config.i18n.enable;
    }
  },
  onLoad() {
    this.currentLanguage = common_vendor.index.getStorageSync("CURRENT_LANG") == "en" ? "English" : "简体中文";
    common_vendor.index.setNavigationBarTitle({
      title: this.$t("settings.navigationBarTitle")
    });
    common_vendor.index.checkIsSupportSoterAuthentication({
      success: (res) => {
        this.supportMode = res.supportMode;
      },
      fail: (err) => {
        console.log(err);
      }
    });
  },
  onShow() {
  },
  methods: {
    async changeLoginState() {
      if (this.hasLogin) {
        await uni_modules_uniIdPages_common_store.mutations.logout();
      } else {
        common_vendor.index.redirectTo({
          url: "/uni_modules/uni-id-pages/pages/login/login-withoutpwd"
        });
      }
    },
    /**
     * 开始生物认证
     */
    startSoterAuthentication(checkAuthMode) {
      console.log(checkAuthMode);
      let title = { "fingerPrint": this.$t("settings.fingerPrint"), "facial": this.$t("settings.facial") }[checkAuthMode];
      this.checkIsSoterEnrolledInDevice({ checkAuthMode, title }).then(() => {
        console.log(checkAuthMode, title);
        common_vendor.index.startSoterAuthentication({
          requestAuthModes: [checkAuthMode],
          challenge: "123456",
          // 微信端挑战因子
          authContent: this.$t("settings.please") + ` ${title}`,
          complete: (res) => {
            console.log(res);
          },
          success: (res) => {
            console.log(res);
            if (res.errCode == 0) {
              return common_vendor.index.showToast({
                title: `${title}` + this.$t("settings.successText"),
                icon: "none"
              });
            }
            common_vendor.index.showToast({
              title: this.$t("settings.failTip"),
              icon: "none"
            });
          },
          fail: (err) => {
            console.log(err);
            console.log(`认证失败:${err.errCode}`);
            common_vendor.index.showToast({
              title: this.$t("settings.authFailed"),
              // title: `认证失败`,
              icon: "none"
            });
          }
        });
      });
    },
    checkIsSoterEnrolledInDevice({ checkAuthMode, title }) {
      return new Promise((resolve, reject) => {
        common_vendor.index.checkIsSoterEnrolledInDevice({
          checkAuthMode,
          success: (res) => {
            console.log(res);
            if (res.isEnrolled) {
              return resolve(res);
            }
            common_vendor.index.showToast({
              title: this.$t("settings.deviceNoOpen") + `${title}`,
              icon: "none"
            });
            reject(res);
          },
          fail: (err) => {
            console.log(err);
            common_vendor.index.showToast({
              title: `${title}` + this.$t("settings.fail"),
              icon: "none"
            });
            reject(err);
          }
        });
      });
    },
    clearTmp() {
      common_vendor.index.showLoading({
        title: this.$t("settings.clearing"),
        mask: true
      });
      common_vendor.index.getSavedFileList({
        success: (res) => {
          if (res.fileList.length > 0) {
            common_vendor.index.removeSavedFile({
              filePath: res.fileList[0].filePath,
              complete: (res2) => {
                console.log(res2);
                common_vendor.index.hideLoading();
                common_vendor.index.showToast({
                  title: this.$t("settings.clearedSuccessed"),
                  icon: "none"
                });
              }
            });
          } else {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: this.$t("settings.clearedSuccessed"),
              icon: "none"
            });
          }
        },
        complete: (e) => {
          console.log(e);
        }
      });
    },
    changeLanguage() {
      console.log("语言切换");
      common_vendor.index.showActionSheet({
        itemList: ["English", "简体中文"],
        success: (res) => {
          console.log(res.tapIndex);
          let language = common_vendor.index.getStorageSync("CURRENT_LANG");
          if (!res.tapIndex && language == "zh-Hans" || res.tapIndex && language == "en") {
            const globalData = getApp().globalData;
            if (language === "en") {
              language = globalData.locale = "zh-Hans";
            } else {
              language = globalData.locale = "en";
            }
            common_vendor.index.setStorageSync("CURRENT_LANG", language);
            getApp().globalData.$i18n.locale = language;
            this.currentLanguage = res.tapIndex ? "简体中文" : "English";
            if (common_vendor.index.setLocale) {
              common_vendor.index.setLocale(language);
            }
            common_vendor.index.reLaunch({
              url: "/pages/list/list",
              complete: () => {
                common_vendor.index.$emit("changeLanguage", language);
              }
            });
          }
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: _ctx.$t("settings.userInfo"),
      to: "/uni_modules/uni-id-pages/pages/userinfo/userinfo",
      link: "navigateTo"
    }),
    b: $data.userInfo.mobile
  }, $data.userInfo.mobile ? {
    c: common_vendor.p({
      title: _ctx.$t("settings.changePassword"),
      to: "/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber=" + $data.userInfo.mobile,
      link: "navigateTo"
    })
  } : {}, {
    d: common_vendor.p({
      border: false
    }),
    e: $data.supportMode.includes("fingerPrint")
  }, $data.supportMode.includes("fingerPrint") ? {
    f: common_vendor.o(($event) => $options.startSoterAuthentication("fingerPrint")),
    g: common_vendor.p({
      title: _ctx.$t("settings.fingerPrint"),
      link: true
    })
  } : {}, {
    h: $data.supportMode.includes("facial")
  }, $data.supportMode.includes("facial") ? {
    i: common_vendor.o(($event) => $options.startSoterAuthentication("facial")),
    j: common_vendor.p({
      title: _ctx.$t("settings.facial"),
      link: true
    })
  } : {}, {
    k: $options.i18nEnable
  }, $options.i18nEnable ? {
    l: common_vendor.o($options.changeLanguage),
    m: common_vendor.p({
      title: _ctx.$t("settings.changeLanguage"),
      rightText: $data.currentLanguage,
      link: true
    })
  } : {}, {
    n: common_vendor.p({
      border: false
    }),
    o: $options.hasLogin
  }, $options.hasLogin ? {
    p: common_vendor.t(_ctx.$t("settings.logOut"))
  } : {
    q: common_vendor.t(_ctx.$t("settings.login"))
  }, {
    r: common_vendor.o((...args) => $options.changeLoginState && $options.changeLoginState(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
