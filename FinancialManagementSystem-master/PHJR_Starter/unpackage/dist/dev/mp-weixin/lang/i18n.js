"use strict";
const common_vendor = require("../common/vendor.js");
const lang_en = require("./en.js");
const lang_zhHans = require("./zh-Hans.js");
const uniStarter_config = require("../uni-starter.config.js");
const { i18n: { enable: i18nEnable } } = uniStarter_config.config;
const messages = {
  "en": lang_en.langEn,
  "zh-Hans": lang_zhHans.zhHans
};
let currentLang;
if (i18nEnable) {
  currentLang = common_vendor.index.getStorageSync("CURRENT_LANG");
} else {
  currentLang = "zh-Hans";
}
if (!currentLang) {
  if (common_vendor.index.getLocale) {
    console.log("获取应用语言:", common_vendor.index.getLocale());
    let language = "en";
    if (common_vendor.index.getLocale() != "en") {
      language = "zh-Hans";
    }
    common_vendor.index.setStorageSync("CURRENT_LANG", language);
    currentLang = language;
  } else {
    common_vendor.index.getSystemInfo({
      success: function(res) {
        console.log("获取设备信息:", res);
        let language = "zh-Hans";
        if (res.language == "en") {
          language = "en";
        }
        common_vendor.index.setStorageSync("CURRENT_LANG", language);
        currentLang = language;
      },
      fail: (err) => {
        console.error(err);
      }
    });
  }
}
let i18nConfig = {
  locale: currentLang,
  // set locale
  messages
  // set locale messages
};
const i18n = common_vendor.createI18n(i18nConfig);
if (i18nEnable) {
  console.log(`
	你已开启多语言国际化，将自动根据语言获取【lang/en.js】或【lang/en.js】文件中配置的tabbar的值，
	覆盖你在pages.json中的tabbar的值
	如果你不需要多语言国际化，请打开配置文件uni-starter.config.js找到 -> i18n -> enable把值设置为false
`);
  let initLanguageAfter = () => {
    function $i18n(e) {
      return i18n.global.messages[i18n.global.locale][e];
    }
    setTimeout(function() {
      $i18n("tabbar").split(",").forEach((text, index) => {
        common_vendor.index.setTabBarItem({
          index,
          text,
          complete: (e) => {
          }
        });
      });
    }, 1);
  };
  initLanguageAfter();
  common_vendor.index.$on("changeLanguage", (e) => {
    console.log("changeLanguage", e);
    initLanguageAfter();
  });
}
exports.i18n = i18n;
