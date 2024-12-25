"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bankCards: [],
      // 存储查询到的银行卡信息
      showFullNumber: []
      // 控制是否显示完整的银行卡号
    };
  },
  onLoad() {
    this.getUserInfoAndQueryCards();
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    async getUserInfoAndQueryCards() {
      try {
        const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
        if (userInfo && userInfo._id != null) {
          const userId = userInfo._id;
          console.log("用户的 _id:", userId);
          const db = common_vendor.Vs.database();
          const cardsRes = await db.collection("bankcard_info").where({
            user_id: userId
          }).get();
          if (cardsRes.result.data.length > 0) {
            const bankCards = await Promise.all(cardsRes.result.data.map(async (card, index) => {
              const bankRes = await db.collection("bank").where({
                _id: card.bank_id
              }).get();
              if (bankRes.result.data.length > 0) {
                card.bank_icon = bankRes.result.data[0].bank_icon;
              }
              this.showFullNumber[index] = false;
              return card;
            }));
            this.bankCards = bankCards;
          } else {
            this.bankCards = [];
          }
        } else {
          common_vendor.index.showToast({
            title: "请先登录",
            icon: "none",
            duration: 2e3
          });
          setTimeout(() => {
            common_vendor.index.navigateTo({
              url: "/uni_modules/uni-id-pages/pages/login/login-withoutpwd"
            });
          }, 2e3);
        }
      } catch (error) {
        console.error("查询失败", error);
      }
    },
    formatCardNumber(card) {
      const number = card.bankcard_number;
      if (this.showFullNumber[this.bankCards.indexOf(card)]) {
        return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12, 16)}`;
      } else {
        return `**** **** **** ${number.slice(12, 16)}`;
      }
    },
    toggleCardNumber(index) {
      this.$set(this.showFullNumber, index, !this.showFullNumber[index]);
    },
    navigateToAddCard() {
      common_vendor.index.navigateTo({
        url: "/pages/titlegrid/wallet/addCard"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_fab2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_fab = () => "../../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_section + _easycom_uni_fab)();
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
      title: "我的卡包",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: $data.bankCards.length === 0
  }, $data.bankCards.length === 0 ? {} : {
    d: common_vendor.f($data.bankCards, (card, index, i0) => {
      return {
        a: common_vendor.t(card.bank_name),
        b: common_vendor.o(($event) => $options.toggleCardNumber(index), index),
        c: "45a2d340-2-" + i0 + ",45a2d340-1",
        d: common_vendor.p({
          title: card.bank_name,
          extra: $options.formatCardNumber(card),
          thumbnail: card.bank_icon
        }),
        e: index
      };
    })
  }, {
    e: common_vendor.p({
      title: "银行卡",
      type: "line"
    }),
    f: common_vendor.o($options.navigateToAddCard),
    g: common_vendor.p({
      horizontal: "right",
      vertical: "bottom",
      iconPath: "/static/add.png"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
