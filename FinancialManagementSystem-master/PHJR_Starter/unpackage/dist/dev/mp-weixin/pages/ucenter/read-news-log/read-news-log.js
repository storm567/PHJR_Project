"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isLoading: true,
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      readNewsLog: [],
      udbWhere: ""
    };
  },
  onLoad() {
    this.readNewsLog = common_vendor.index.getStorageSync("readNewsLog") || [];
    let readNewsLogIds = this.readNewsLog.map(({ article_id }) => article_id);
    console.log(typeof readNewsLogIds, readNewsLogIds);
    this.udbWhere = `"_id" in ${JSON.stringify(readNewsLogIds)}`;
    common_vendor.index.setNavigationBarTitle({
      title: this.$t("newsLog.navigationBarTitle")
    });
  },
  onPullDownRefresh() {
    this.refreshData();
  },
  onReachBottom() {
    this.$refs.udb.loadMore();
  },
  methods: {
    refreshData() {
      this.$refs.udb.loadData({
        clear: true
      }, (res) => {
        common_vendor.index.stopPullDownRefresh();
      });
    },
    handleItemClick(item) {
      common_vendor.index.navigateTo({
        url: "/pages/list/detail?id=" + item._id + "&title=" + item.title
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_state2 = common_vendor.resolveComponent("uni-load-state");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_dateformat2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_state2 + _easycom_unicloud_db2)();
}
const _easycom_uni_dateformat = () => "../../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_state = () => "../../../components/uni-load-state/uni-load-state.js";
const _easycom_unicloud_db = () => "../../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_state + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      pagination,
      loading,
      hasMore,
      error
    }, s0, i0) => {
      return {
        a: common_vendor.f(data, (item, index, i1) => {
          return {
            a: common_vendor.t(item.title),
            b: "e493f520-3-" + i0 + "-" + i1 + "," + ("e493f520-2-" + i0 + "-" + i1),
            c: common_vendor.p({
              date: $data.readNewsLog[index].last_time,
              format: "yyyy-MM-dd hh:mm",
              threshold: [0, 0]
            }),
            d: index,
            e: common_vendor.o(($event) => $options.handleItemClick(item), index),
            f: "e493f520-2-" + i0 + "-" + i1 + "," + ("e493f520-1-" + i0)
          };
        }),
        b: "e493f520-1-" + i0 + ",e493f520-0",
        c: "e493f520-4-" + i0 + ",e493f520-0",
        d: common_vendor.p({
          state: {
            data,
            pagination,
            hasMore,
            loading,
            error
          }
        }),
        e: i0,
        f: s0
      };
    }, {
      name: "d",
      path: "a",
      vueId: "e493f520-0"
    }),
    b: common_vendor.p({
      clickable: true
    }),
    c: common_vendor.o($options.refreshData),
    d: common_vendor.sr("udb", "e493f520-0"),
    e: common_vendor.o(($event) => $data.isLoading == false),
    f: common_vendor.o(($event) => $data.isLoading == false),
    g: common_vendor.p({
      where: $data.udbWhere,
      collection: "opendb-news-articles",
      field: "title,_id",
      ["page-size"]: 10
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
