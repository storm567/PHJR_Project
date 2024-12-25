"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_jsonGps_js_sdk_gps = require("../../uni_modules/json-gps/js_sdk/gps.js");
let cdbRef;
const statusBar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.js";
const gps = new uni_modules_jsonGps_js_sdk_gps.Gps(), db = common_vendor.Vs.database();
const _sfc_main = {
  components: {
    statusBar
  },
  computed: {
    inputPlaceholder(e) {
      if (common_vendor.index.getStorageSync("CURRENT_LANG") == "en") {
        return "Please enter the search content";
      } else {
        return "请输入搜索内容";
      }
    },
    colList() {
      return [
        db.collection("opendb-news-articles").where(this.where).field(
          "avatar,title,last_modify_date,user_id"
        ).getTemp(),
        db.collection("uni-id-users").field("_id,nickname").getTemp()
      ];
    }
  },
  data() {
    return {
      where: '"article_status" == 1',
      keyword: "",
      showRefresh: false,
      listHight: 0,
      items: [
        {
          icon: "scan",
          text: "扫一扫",
          color: "#ffffff",
          flag: "3",
          url: "/pages/titlegrid/scan/scan"
        },
        // 扫一扫
        {
          icon: "cart",
          text: "贷款",
          color: "#ffffff",
          flag: "2",
          url: "/pages/titlegrid/cart/cart"
          // url: "/pages/grid/grid",
        },
        // 贷款
        {
          icon: "wallet",
          text: "卡包",
          color: "#ffffff",
          flag: "1",
          url: "/pages/titlegrid/wallet/wallet"
        },
        // 卡包
        {
          icon: "chat",
          text: "资讯",
          // color: "#777",
          color: "#ffffff",
          flag: "2",
          // url: "/pages/titlegrid/chat/chat",
          url: "/pages/grid/grid"
        }
        // 资讯
      ],
      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/6341a1b7-67fc-4cbb-b0c7-bbf8955863d7.jpg",
          content: "内容 A"
        },
        {
          colorClass: "uni-bg-green",
          url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/592ecdbf-a74b-45cc-babb-ba35ed97aa10.png",
          content: "内容 B"
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://mp-e086c728-982c-4c49-aa1b-7d17dccab637.cdn.bspapp.com/cloudstorage/46a29bc6-4888-4718-8aad-8a8b56b088a5.jpg",
          content: "内容 C"
        }
      ],
      current: 0,
      mode: "round",
      dotsStyles: {
        backgroundColor: "rgba(0, 0, 0, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        color: "#fff",
        selectedBackgroundColor: "rgba(0, 0, 0, .9)",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid"
      },
      swiperDotIndex: 0
    };
  },
  watch: {
    keyword(keyword, oldValue) {
      let where = '"article_status" == 1 ';
      if (keyword) {
        this.where = where + `&& /${keyword}/.test(title)`;
      } else {
        this.where = where;
      }
    }
  },
  async onReady() {
    this.listHight = "auto";
    cdbRef = this.$refs.udb;
  },
  async onShow() {
    this.keyword = getApp().globalData.searchText;
    getApp().globalData.searchText = "";
    await gps.getLocation({
      geocode: true
    });
  },
  methods: {
    searchClick(e) {
      common_vendor.index.hideKeyboard();
      common_vendor.index.navigateTo({
        url: "/pages/list/search/search",
        animationType: "fade-in"
      });
    },
    navigateTo(url, flag) {
      if (flag === "1") {
        common_vendor.index.navigateTo({
          url
        });
      } else if (flag === "2") {
        common_vendor.index.switchTab({
          url
        });
      } else if (flag === "3") {
        common_vendor.index.scanCode({
          scanType: ["qrCode"],
          // 扫码成功后的回调
          success: (res) => {
            common_vendor.index.navigateTo({
              // 这里注意，此地址只是自己提前写好的，并且路径前面一定要加/
              url: `/pages/webpage/index?link=${res.result}`
            });
          }
        });
      }
    },
    retry() {
      this.refresh();
    },
    refresh() {
      cdbRef.loadData({
        clear: true
      }, () => {
        common_vendor.index.stopPullDownRefresh();
        console.log("end");
      });
      console.log("refresh");
    },
    loadMore() {
      cdbRef.loadMore();
    },
    onqueryerror(e) {
      console.error(e);
    },
    onpullingdown(e) {
      console.log(e);
      this.showRefresh = true;
      if (e.pullingDistance > 100) {
        this.refresh();
      }
    },
    change(e) {
      this.current = e.detail.current;
    },
    clickItem(e) {
      this.swiperDotIndex = e;
    },
    onPullDownRefresh() {
      this.refresh();
    },
    onReachBottom() {
      this.loadMore();
    }
  }
};
if (!Array) {
  const _component_statusBar = common_vendor.resolveComponent("statusBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_load_state2 = common_vendor.resolveComponent("uni-load-state");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_component_statusBar + _easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2 + _easycom_uni_swiper_dot2 + _easycom_uni_search_bar2 + _easycom_uni_dateformat2 + _easycom_uni_list_item2 + _easycom_uni_load_state2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_load_state = () => "../../components/uni-load-state/uni-load-state.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section + _easycom_uni_swiper_dot + _easycom_uni_search_bar + _easycom_uni_dateformat + _easycom_uni_list_item + _easycom_uni_load_state + _easycom_uni_list + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: "96c6bf44-4-" + i0 + "," + ("96c6bf44-3-" + i0),
        b: common_vendor.p({
          type: item.icon,
          size: 30,
          color: item.color
        }),
        c: common_vendor.t(item.text),
        d: index,
        e: common_vendor.o(($event) => $options.navigateTo(item.url, item.flag), index),
        f: "96c6bf44-3-" + i0 + ",96c6bf44-2",
        g: common_vendor.p({
          index,
          square: true
        })
      };
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      column: 4,
      highlight: true
    }),
    d: common_vendor.p({
      title: "普惠金融",
      titleFontSize: "20px",
      titleColor: "#FFFFFF",
      padding: true
    }),
    e: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.n("swiper-item" + index),
        c: index
      };
    }),
    f: common_vendor.o((...args) => $options.change && $options.change(...args)),
    g: $data.swiperDotIndex,
    h: common_vendor.o($options.clickItem),
    i: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: $data.mode,
      ["dots-styles"]: $data.dotsStyles,
      field: "content"
    }),
    j: common_vendor.sr("searchBar", "96c6bf44-6"),
    k: common_vendor.o(($event) => $data.keyword = $event),
    l: common_vendor.p({
      radius: "100",
      cancelButton: "none",
      disabled: true,
      placeholder: $options.inputPlaceholder,
      modelValue: $data.keyword
    }),
    m: common_vendor.o((...args) => $options.searchClick && $options.searchClick(...args)),
    n: common_vendor.w(({
      data,
      pagination,
      hasMore,
      loading,
      error,
      options
    }, s0, i0) => {
      return {
        a: common_vendor.f(data, (item, index, i1) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.user_id[0] ? item.user_id[0].nickname : ""),
            d: "96c6bf44-10-" + i0 + "-" + i1 + "," + ("96c6bf44-9-" + i0 + "-" + i1),
            e: common_vendor.p({
              date: item.last_modify_date,
              format: "yyyy-MM-dd",
              threshold: [6e4, 2592e6]
            }),
            f: index,
            g: "96c6bf44-9-" + i0 + "-" + i1 + "," + ("96c6bf44-8-" + i0),
            h: common_vendor.p({
              to: "/pages/list/detail?id=" + item._id + "&title=" + item.title
            })
          };
        }),
        b: "96c6bf44-11-" + i0 + "," + ("96c6bf44-8-" + i0),
        c: common_vendor.p({
          state: {
            data,
            pagination,
            hasMore,
            loading,
            error
          }
        }),
        d: "96c6bf44-8-" + i0 + ",96c6bf44-7",
        e: i0,
        f: s0
      };
    }, {
      name: "d",
      path: "n",
      vueId: "96c6bf44-7"
    }),
    o: common_vendor.o($options.refresh),
    p: common_vendor.o($options.loadMore),
    q: $data.listHight,
    r: common_vendor.p({
      border: false
    }),
    s: common_vendor.sr("udb", "96c6bf44-7"),
    t: common_vendor.o($options.onqueryerror),
    v: common_vendor.p({
      collection: $options.colList,
      ["page-size"]: 10
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-96c6bf44"]]);
wx.createPage(MiniProgramPage);
