"use strict";
const common_vendor = require("../../../../common/vendor.js");
function isTurnedOnPush() {
  var isOn = void 0;
  try {
    if ("iOS" == plus.os.name) {
      var types = 0;
      var app = plus.ios.invoke("UIApplication", "sharedApplication");
      var settings = plus.ios.invoke(app, "currentUserNotificationSettings");
      if (settings) {
        types = settings.plusGetAttribute("types");
        plus.ios.deleteObject(settings);
      } else {
        types = plus.ios.invoke(app, "enabledRemoteNotificationTypes");
      }
      plus.ios.deleteObject(app);
      isOn = 0 != types;
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
      isOn = plus.android.invoke(manager, "isPushTurnedOn", main);
    }
  } catch (e) {
    console.error("exception in isTurnedOnPush@dc-push!!");
  }
  return isOn;
}
function turnOnPush() {
  try {
    if ("iOS" == plus.os.name) {
      if (!isTurnedOnPush()) {
        settingInIos();
      }
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
      plus.android.invoke(manager, "turnOnPush", main);
    }
  } catch (e) {
    console.error("exception in turnOnPush@dc-push!!");
  }
}
function trunOffPush() {
  try {
    if ("iOS" == plus.os.name) {
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke("com.igexin.sdk.PushManager", "getInstance");
      plus.android.invoke(manager, "turnOffPush", main);
    }
  } catch (e) {
    console.error("exception in trunOffPush@dc-push!!");
  }
}
function settingInIos() {
  try {
    if ("iOS" == plus.os.name) {
      var app = plus.ios.invoke("UIApplication", "sharedApplication");
      var setting2 = plus.ios.invoke("NSURL", "URLWithString:", "app-settings:");
      plus.ios.invoke(app, "openURL:", setting2);
      plus.ios.deleteObject(setting2);
      plus.ios.deleteObject(app);
    }
  } catch (e) {
    console.error("exception in settingInIos@dc-push!!");
  }
}
function settingInAndroid() {
  if (common_vendor.index.getSystemInfoSync().platform == "android") {
    var main = plus.android.runtimeMainActivity();
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    main.startActivity(intent);
  }
}
function setting() {
  if (common_vendor.index.getSystemInfoSync().platform == "ios") {
    settingInIos();
  }
  if (common_vendor.index.getSystemInfoSync().platform == "android") {
    settingInAndroid();
  }
}
const pushServer = {
  isOn: isTurnedOnPush,
  iosSetting: settingInIos,
  on: turnOnPush,
  off: trunOffPush,
  setting
};
exports.pushServer = pushServer;
