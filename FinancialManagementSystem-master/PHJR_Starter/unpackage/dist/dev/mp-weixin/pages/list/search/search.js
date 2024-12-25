"use strict";
const common_vendor = require("../../../common/vendor.js");
const searchLogDbName = "opendb-search-log";
const mallGoodsDbName = "opendb-news-articles";
const associativeSearchField = "title";
const associativeField = "_id,title";
const localSearchListKey = "__local_search_history";
const arrUnique = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const curIndex = arr.indexOf(arr[i]);
    const lastIndex = arr.lastIndexOf(arr[i]);
    curIndex != lastIndex && arr.splice(lastIndex, 1);
  }
  return arr;
};
function debounce(fn, interval, isFirstAutoRun) {
  var _self = fn;
  var timer = null;
  var first = true;
  if (isFirstAutoRun) {
    _self();
  }
  return function() {
    var args = arguments;
    var _me = this;
    if (first) {
      first = false;
      _self.apply(_me, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 200);
  };
}
const _sfc_main = {
  data() {
    return {
      mallGoodsDbName,
      searchLogDbName,
      statusBarHeight: "0px",
      localSearchList: common_vendor.index.getStorageSync(localSearchListKey),
      localSearchListDel: false,
      netHotListIsHide: false,
      searchText: "",
      iconColor: "#999999",
      associativeList: [],
      keyBoardPopup: false,
      hotWorld: "DCloud",
      //	搜索热词，如果没有输入即回车，则搜索热词，但是不会加入搜索记录
      focus: true,
      //	是否自动聚焦
      speechEngine: "iFly"
      //	语音识别引擎 iFly 讯飞 baidu 百度
    };
  },
  created() {
    this.db = common_vendor.Vs.database();
    this.searchLogDb = this.db.collection(this.searchLogDbName);
    this.mallGoodsDb = this.db.collection(this.mallGoodsDbName);
    common_vendor.index.onKeyboardHeightChange((res) => {
      this.keyBoardPopup = res.height !== 0;
    });
    this.searchText = getApp().globalData.searchText;
  },
  computed: {
    associativeShow() {
      return this.searchText && this.associativeList.length;
    }
  },
  onLoad() {
  },
  methods: {
    clear(res) {
      console.log("res: ", res);
    },
    confirm(res) {
      this.search(res.value);
    },
    cancel(res) {
      common_vendor.index.hideKeyboard();
      this.searchText = "";
      this.loadList();
    },
    search(value) {
      if (!value && !this.hotWorld) {
        return;
      }
      if (value) {
        if (this.searchText !== value) {
          this.searchText = value;
        }
        this.localSearchListManage(value);
        this.searchLogDbAdd(value);
      } else if (this.hotWorld) {
        this.searchText = this.hotWorld;
      }
      common_vendor.index.hideKeyboard();
      this.loadList(this.searchText);
    },
    localSearchListManage(word) {
      let list = common_vendor.index.getStorageSync(localSearchListKey);
      if (list.length) {
        this.localSearchList.unshift(word);
        arrUnique(this.localSearchList);
        if (this.localSearchList.length > 10) {
          this.localSearchList.pop();
        }
      } else {
        this.localSearchList = [word];
      }
      common_vendor.index.setStorageSync(localSearchListKey, this.localSearchList);
    },
    LocalSearchListClear() {
      common_vendor.index.showModal({
        content: "确认清空搜索历史吗",
        confirmText: "删除",
        confirmColor: "red",
        cancelColor: "#808080",
        success: (res) => {
          if (res.confirm) {
            this.localSearchListDel = false;
            this.localSearchList = [];
            common_vendor.index.removeStorageSync(localSearchListKey);
          }
        }
      });
    },
    LocalSearchlistItemClick(word, index) {
      if (this.localSearchListDel) {
        this.localSearchList.splice(index, 1);
        common_vendor.index.setStorageSync(localSearchListKey, this.localSearchList);
        if (!this.localSearchList.length) {
          this.localSearchListDel = false;
        }
        return;
      }
      this.search(word);
    },
    searchHotRefresh() {
      this.$refs.udb.refresh();
    },
    speech() {
    },
    searchLogDbAdd(value) {
      this.getDeviceId().then((device_id) => {
        this.searchLogDb.add({
          // user_id: device_id,
          device_id,
          content: value,
          create_date: Date.now()
        });
      });
    },
    getDeviceId() {
      return new Promise((resolve, reject) => {
        const uniId = common_vendor.index.getStorageSync("uni_id");
        if (!uniId) {
          resolve(common_vendor.index.getSystemInfoSync().system + "_" + Math.random().toString(36).substr(2));
        } else {
          resolve(uniId);
        }
      });
    },
    associativeClick(item) {
      console.log("associativeClick: ", item);
      this.loadList(item.title);
    },
    loadList(text = "") {
      getApp().globalData.searchText = text;
      common_vendor.index.switchTab({
        url: "/pages/list/list"
      });
    },
    backPage() {
      common_vendor.index.navigateBack();
    }
  },
  watch: {
    searchText: debounce(function(value) {
      if (value) {
        this.mallGoodsDb.where({
          [associativeSearchField]: new RegExp(value, "gi")
        }).field(associativeField).get().then((res) => {
          this.associativeList = res.result.data;
        });
      } else {
        this.associativeList.length = 0;
        getApp().globalData.searchText = "";
      }
    }, 100)
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_unicloud_db2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_unicloud_db = () => "../../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_unicloud_db + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("searchBar", "aaa8ea53-0"),
    b: common_vendor.o($options.clear),
    c: common_vendor.o($options.confirm),
    d: common_vendor.o($options.cancel),
    e: common_vendor.o(($event) => $data.searchText = $event),
    f: common_vendor.p({
      radius: "100",
      focus: $data.focus,
      placeholder: $data.hotWorld,
      clearButton: "auto",
      cancelButton: "always",
      modelValue: $data.searchText
    }),
    g: $data.localSearchList.length
  }, $data.localSearchList.length ? common_vendor.e({
    h: !$data.localSearchListDel
  }, !$data.localSearchListDel ? {
    i: common_vendor.o(($event) => $data.localSearchListDel = true),
    j: common_vendor.p({
      color: $data.iconColor,
      size: "18",
      type: "trash"
    })
  } : {
    k: common_vendor.o((...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args)),
    l: common_vendor.o(($event) => $data.localSearchListDel = false)
  }, {
    m: common_vendor.f($data.localSearchList, (word, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(word),
        b: word
      }, $data.localSearchListDel ? {
        c: "aaa8ea53-2-" + i0,
        d: common_vendor.p({
          size: "12",
          type: "closeempty"
        })
      } : {}, {
        e: index,
        f: common_vendor.o(($event) => $options.LocalSearchlistItemClick(word, index), index)
      });
    }),
    n: $data.localSearchListDel
  }) : {}, {
    o: !$data.netHotListIsHide
  }, !$data.netHotListIsHide ? {
    p: common_vendor.o($options.searchHotRefresh),
    q: common_vendor.p({
      color: $data.iconColor,
      size: "14",
      type: "reload"
    })
  } : {}, {
    r: common_vendor.o(($event) => $data.netHotListIsHide = !$data.netHotListIsHide),
    s: common_vendor.p({
      color: $data.iconColor,
      size: "18",
      type: $data.netHotListIsHide ? "eye-slash" : "eye"
    }),
    t: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: loading && !$data.netHotListIsHide
      }, loading && !$data.netHotListIsHide ? {} : common_vendor.e({
        b: !$data.netHotListIsHide
      }, !$data.netHotListIsHide ? common_vendor.e({
        c: error
      }, error ? {
        d: common_vendor.t(error.message)
      } : {
        e: common_vendor.f(data, (word, index, i1) => {
          return {
            a: common_vendor.t(word.content),
            b: index,
            c: common_vendor.o(($event) => $options.search(word.content), index)
          };
        })
      }) : {}), {
        f: i0,
        g: s0
      });
    }, {
      name: "d",
      path: "t",
      vueId: "aaa8ea53-5"
    }),
    v: common_vendor.sr("udb", "aaa8ea53-5"),
    w: common_vendor.p({
      field: "content",
      collection: "opendb-search-hot",
      orderby: "create_date desc,count desc",
      ["page-data"]: "replace",
      ["page-size"]: 10
    }),
    x: $options.associativeShow
  }, $options.associativeShow ? {
    y: common_vendor.f($data.associativeList, (item, index, i0) => {
      return {
        a: item._id,
        b: common_vendor.o(($event) => $options.associativeClick(item), item._id),
        c: "aaa8ea53-7-" + i0 + ",aaa8ea53-6",
        d: common_vendor.p({
          ellipsis: 1,
          title: item.name,
          ["show-extra-icon"]: true,
          clickable: true,
          ["extra-icon"]: {
            size: 18,
            color: $data.iconColor,
            type: "search"
          }
        })
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aaa8ea53"]]);
wx.createPage(MiniProgramPage);
