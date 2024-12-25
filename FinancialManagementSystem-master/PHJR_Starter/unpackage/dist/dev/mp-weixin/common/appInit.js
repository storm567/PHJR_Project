"use strict";
const common_vendor = require("./vendor.js");
const uniStarter_config = require("../uni-starter.config.js");
const db = common_vendor.Vs.database();
async function initApp() {
  uniStarter_config.config.debug;
  setTimeout(() => {
    getApp({
      allowDefault: true
    }).globalData.config = uniStarter_config.config;
  }, 1);
  function onDBError({
    code,
    // 错误码详见https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue
    message
  }) {
    console.log("onDBError", {
      code,
      message
    });
    console.error(code, message);
  }
  db.on("error", onDBError);
  common_vendor.Vs.interceptObject({
    async invoke({
      objectName,
      // 云对象名称
      methodName,
      // 云对象的方法名称
      params
      // 参数列表
    }) {
      if (objectName == "uni-id-co" && (methodName.includes("loginBy") || ["login", "registerUser"].includes(methodName))) {
        console.log("执行登录相关云对象");
        params[0].inviteCode = await new Promise((callBack) => {
          common_vendor.index.getClipboardData({
            success: function(res) {
              console.log("剪切板内容：" + res.data);
              if (res.data.slice(0, 18) == "uniInvitationCode:") {
                let uniInvitationCode = res.data.slice(18, 38);
                console.log("当前用户是其他用户推荐下载的,推荐者的code是：" + uniInvitationCode);
                callBack(uniInvitationCode);
              } else {
                callBack();
              }
            },
            fail() {
              console.log("error--");
              callBack();
            },
            complete() {
              common_vendor.index.hideToast();
            }
          });
        });
      }
    },
    success(e) {
      console.log(e);
    },
    complete() {
    },
    fail(e) {
      console.error(e);
    }
  });
}
exports.initApp = initApp;
