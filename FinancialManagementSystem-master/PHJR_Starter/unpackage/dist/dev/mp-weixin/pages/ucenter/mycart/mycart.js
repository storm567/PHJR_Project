"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      loanRecords: []
      // 存放查询到的贷款记录
    };
  },
  onLoad() {
    const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
    if (userInfo && userInfo._id) {
      const userId = userInfo._id;
      this.fetchLoanRecords(userId);
    } else {
      console.log("用户未登录或_id为空");
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    async fetchLoanRecords(userId) {
      const db = common_vendor.Vs.database();
      try {
        const res = await db.collection("loan_records").where({
          user_id: userId
        }).get();
        if (res.result.data.length > 0) {
          const records = res.result.data;
          for (let record of records) {
            record.formattedTime = this.formatTime(record.createdTime);
            const bankRes = await db.collection("bank").where({
              bank_name: record.bank
            }).get();
            if (bankRes.result.data.length > 0) {
              record.bankIcon = bankRes.result.data[0].bank_icon;
            } else {
              record.bankIcon = "";
            }
          }
          this.loanRecords = records;
        } else {
          console.log("未查询到贷款记录");
        }
      } catch (error) {
        console.error("查询贷款记录出错：", error);
      }
    },
    formatTime(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const seconds = ("0" + date.getSeconds()).slice(-2);
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    getLoanStateText(state) {
      const stateMap = {
        0: "未审批",
        1: "平台已通过",
        2: "平台已驳回",
        3: "银行已审核",
        4: "银行驳回"
      };
      return stateMap[state] || "未知状态";
    },
    getLoanStateClass(state) {
      const stateClassMap = {
        0: "state-pending",
        1: "state-approved",
        2: "state-rejected",
        3: "state-approved",
        4: "state-rejected"
      };
      return stateClassMap[state] || "";
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_section2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_section)();
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
      title: "我的贷款",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: $data.loanRecords.length > 0
  }, $data.loanRecords.length > 0 ? {
    d: common_vendor.f($data.loanRecords, (record, index, i0) => {
      return {
        a: record.bankIcon,
        b: common_vendor.t(record.loanAmount),
        c: common_vendor.t(record.bank),
        d: common_vendor.t(record.formattedTime),
        e: common_vendor.t(record.loanPurpose),
        f: common_vendor.t($options.getLoanStateText(record.loan_state)),
        g: common_vendor.n($options.getLoanStateClass(record.loan_state)),
        h: index,
        i: "4e3c7c28-2-" + i0 + ",4e3c7c28-1"
      };
    }),
    e: common_vendor.p({
      isFull: true
    })
  } : {}, {
    f: common_vendor.p({
      title: "贷款项目",
      type: "line"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
