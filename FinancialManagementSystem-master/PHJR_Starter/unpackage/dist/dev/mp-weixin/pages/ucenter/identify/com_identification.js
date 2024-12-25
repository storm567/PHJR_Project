"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userId: "",
      isCompanyCertified: false,
      searchValue: "",
      companyName: "",
      legalName: "",
      legalId: "",
      suggestions: []
      // 建议列表
    };
  },
  onLoad() {
    const userInfo = common_vendor.index.getStorageSync("uni-id-pages-userInfo");
    if (!userInfo || !userInfo._id) {
      common_vendor.index.showToast({
        title: "未登录",
        icon: "none"
      });
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "/uni_modules/uni-id-pages/pages/login/login-withoutpwd"
        });
      }, 1e3);
    } else {
      this.userId = userInfo._id;
      this.checkPersonalCertification();
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    checkPersonalCertification() {
      const db = common_vendor.Vs.database();
      db.collection("idcard").where({
        user_id: this.userId
      }).get().then((res) => {
        if (res.result.data.length === 0) {
          common_vendor.index.showToast({
            title: "请先进行个人认证",
            icon: "none"
          });
          setTimeout(() => {
            common_vendor.index.navigateTo({
              url: "/pages/ucenter/identify/per_identification"
            });
          }, 2e3);
        } else {
          const idCardInfo = res.result.data[0];
          this.legalName = idCardInfo.username;
          this.legalId = idCardInfo.idcard;
          this.checkCompanyCertification();
        }
      }).catch((err) => {
        console.error("查询个人认证信息失败:", err);
      });
    },
    checkCompanyCertification() {
      const db = common_vendor.Vs.database();
      db.collection("user_com").where({
        user_id: this.userId
      }).get().then((res) => {
        if (res.result.data.length > 0) {
          const userComInfo = res.result.data[0];
          db.collection("company").where({
            _id: userComInfo.com_id
          }).get().then((companyRes) => {
            if (companyRes.result.data.length > 0) {
              this.companyName = companyRes.result.data[0].com_name;
              this.isCompanyCertified = true;
            }
          });
        }
      }).catch((err) => {
        console.error("查询企业认证信息失败:", err);
      });
    },
    // 实时监听输入
    onInput(e) {
      console.log("Input event triggered");
      const value = e;
      this.searchValue = value;
      console.log("this.searchValue:", this.searchValue);
      if (value) {
        this.getSuggestions(value).then((suggestions) => {
          this.suggestions = suggestions;
          console.log("this.suggestions:", ...this.suggestions);
        });
      } else {
        this.suggestions = [];
      }
    },
    // 模拟获取建议
    getSuggestions(query) {
      const db = common_vendor.Vs.database();
      return db.collection("company").where({
        com_name: new RegExp(query, "i")
        // 使用正则表达式进行模糊搜索，忽略大小写
      }).get().then((res) => {
        if (res.result.data.length > 0) {
          return res.result.data.map((company) => company.com_name);
        } else {
          return [];
        }
      }).catch((err) => {
        console.error("获取公司名称建议列表失败:", err);
        return [];
      });
    },
    // 选择建议
    selectSuggestion(suggestion) {
      this.searchValue = suggestion;
      this.suggestions = [];
    },
    // 提交搜索
    search() {
      console.log("搜索内容:", this.searchValue);
    },
    submit() {
      const db = common_vendor.Vs.database();
      db.collection("company").where({
        com_name: new RegExp(this.searchValue, "i")
        // 模糊搜索公司名称
      }).get().then((res) => {
        if (res.result.data.length === 0) {
          common_vendor.index.showToast({
            title: "公司名称有误或未进行合作",
            icon: "none"
          });
        } else {
          const companyInfo = res.result.data[0];
          db.collection("com_details").where({
            com_id: companyInfo._id
          }).get().then((detailRes) => {
            const comDetails = detailRes.result.data[0];
            if (comDetails.c_legal_name === this.legalName && comDetails.c_legal_id === this.legalId) {
              db.collection("user_com").add({
                user_id: this.userId,
                com_id: companyInfo._id
              }).then(() => {
                common_vendor.index.showToast({
                  title: "企业认证成功",
                  icon: "success"
                });
                setTimeout(() => {
                  common_vendor.index.switchTab({
                    url: "/pages/ucenter/ucenter"
                  });
                }, 2e3);
              });
            } else {
              common_vendor.index.showToast({
                title: "企业认证失败，请联系管理员",
                icon: "none"
              });
              setTimeout(() => {
                common_vendor.index.switchTab({
                  url: "/pages/ucenter/ucenter"
                });
              }, 2e3);
            }
          });
        }
      }).catch((err) => {
        console.error("企业认证失败:", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_section + _easycom_uni_search_bar)();
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
      title: "企业认证",
      ["left-icon"]: "left",
      ["left-text"]: "返回"
    }),
    c: $data.isCompanyCertified
  }, $data.isCompanyCertified ? {
    d: common_vendor.p({
      isFull: true,
      title: "企业名称",
      ["sub-title"]: $data.companyName
    }),
    e: common_vendor.p({
      isFull: true,
      title: "姓名",
      ["sub-title"]: $data.legalName
    }),
    f: common_vendor.p({
      isFull: true,
      title: "身份证号",
      ["sub-title"]: $data.legalId
    }),
    g: common_vendor.p({
      title: "企业认证信息",
      type: "line",
      padding: true
    })
  } : common_vendor.e({
    h: common_vendor.o($options.search),
    i: common_vendor.o($options.onInput),
    j: common_vendor.o(($event) => $data.searchValue = $event),
    k: common_vendor.p({
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    l: $data.suggestions.length
  }, $data.suggestions.length ? {
    m: common_vendor.f($data.suggestions, (suggestion, index, i0) => {
      return {
        a: common_vendor.t(suggestion),
        b: index,
        c: common_vendor.o(($event) => $options.selectSuggestion(suggestion), index)
      };
    })
  } : {}, {
    n: common_vendor.p({
      title: "公司搜索",
      type: "line"
    }),
    o: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
