"use strict";
function callCheckVersion() {
  return new Promise((resolve, reject) => {
    reject({
      message: "请在App中使用"
    });
  });
}
exports.callCheckVersion = callCheckVersion;
