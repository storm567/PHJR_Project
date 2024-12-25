import { V as Vs, f as formatAppLog, a as resolveEasycom, _ as __easycom_0, b as __easycom_1, e as __easycom_2, c as __easycom_3, d as __easycom_4 } from "../../../unicloud-db.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, createBlock, Fragment, renderList, toDisplayString, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "status-bar": { "": { "backgroundColor": "#ffffff" } }, "container": { "": { "flex": 1, "backgroundColor": "#f7f7f7" } }, "search-body": { "": { "backgroundColor": "#ffffff", "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "flex-center": { "": { "justifyContent": "center", "alignItems": "center" } }, "flex-row": { "": { "flexDirection": "row" } }, "uni-searchbar": { "": { "paddingLeft": 0 } }, "uni-searchbar__box": { "": { "borderWidth": 0 } }, "uni-input-placeholder": { "": { "fontSize": "28rpx" } }, "search-container": { "": { "height": 52, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "search-container-bar": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0 } }, "search-associative": { "": { "position": "absolute", "top": 52, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#ffffff", "marginTop": "10rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "search-icons": { "": { "paddingTop": "16rpx", "paddingRight": "16rpx", "paddingBottom": "16rpx", "paddingLeft": "16rpx" } }, "word-display": { "": { "fontSize": "26rpx", "color": "#666666" } }, "word-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "word-container_header": { "": { "height": "72rpx", "lineHeight": "72rpx", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "word-container_header-text": { "": { "color": "#3e3e3e", "fontSize": "30rpx", "fontWeight": "bold" } }, "word-container_body": { "": { "flexWrap": "wrap", "flexDirection": "row" } }, "word-container_body-text": { "": { "fontSize": "26rpx", "color": "#666666", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#f6f6f6", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": "20rpx", "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "borderRadius": "30rpx", "textAlign": "center" } }, "word-container_body-info": { "": { "flex": 1, "textAlign": "center", "fontSize": "26rpx", "color": "#808080", "marginTop": "20rpx" } } };
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
      localSearchList: uni.getStorageSync(localSearchListKey),
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
    this.db = Vs.database();
    this.searchLogDb = this.db.collection(this.searchLogDbName);
    this.mallGoodsDb = this.db.collection(this.mallGoodsDbName);
    uni.onKeyboardHeightChange((res) => {
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
    this.statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
  },
  methods: {
    clear(res) {
      formatAppLog("log", "at pages/list/search/search.nvue:172", "res: ", res);
    },
    confirm(res) {
      this.search(res.value);
    },
    cancel(res) {
      uni.hideKeyboard();
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
      uni.hideKeyboard();
      this.loadList(this.searchText);
    },
    localSearchListManage(word) {
      let list = uni.getStorageSync(localSearchListKey);
      if (list.length) {
        this.localSearchList.unshift(word);
        arrUnique(this.localSearchList);
        if (this.localSearchList.length > 10) {
          this.localSearchList.pop();
        }
      } else {
        this.localSearchList = [word];
      }
      uni.setStorageSync(localSearchListKey, this.localSearchList);
    },
    LocalSearchListClear() {
      uni.showModal({
        content: "确认清空搜索历史吗",
        confirmText: "删除",
        confirmColor: "red",
        cancelColor: "#808080",
        success: (res) => {
          if (res.confirm) {
            this.localSearchListDel = false;
            this.localSearchList = [];
            uni.removeStorageSync(localSearchListKey);
          }
        }
      });
    },
    LocalSearchlistItemClick(word, index) {
      if (this.localSearchListDel) {
        this.localSearchList.splice(index, 1);
        uni.setStorageSync(localSearchListKey, this.localSearchList);
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
      plus.speech.startRecognize({
        engine: this.speechEngine,
        punctuation: false,
        // 标点符号 
        timeout: 1e4
      }, (word) => {
        word = word instanceof Array ? word[0] : word;
        this.search(word);
      }, (err) => {
        formatAppLog("error", "at pages/list/search/search.nvue:254", "语音识别错误: ", err);
      });
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
        const uniId = uni.getStorageSync("uni_id");
        if (!uniId) {
          plus.device.getInfo({
            success: (deviceInfo) => {
              resolve(deviceInfo.uuid);
            },
            fail: () => {
              resolve(uni.getSystemInfoSync().system + "_" + Math.random().toString(36).substr(2));
            }
          });
        } else {
          resolve(uniId);
        }
      });
    },
    associativeClick(item) {
      formatAppLog("log", "at pages/list/search/search.nvue:297", "associativeClick: ", item);
      this.loadList(item.title);
    },
    loadList(text = "") {
      getApp().globalData.searchText = text;
      uni.switchTab({
        url: "/pages/list/list"
      });
    },
    backPage() {
      uni.navigateBack();
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("view", { class: "search-container" }, [
        createCommentVNode(" 搜索框 "),
        createElementVNode("view", { class: "search-container-bar" }, [
          createVNode(_component_uni_icons, {
            class: "search-icons",
            color: $data.iconColor,
            size: "22",
            type: "mic-filled",
            onClick: $options.speech
          }, null, 8, ["color", "onClick"]),
          createCommentVNode(` :cancelText="keyBoardPopup ? '取消' : '搜索'" `),
          createVNode(_component_uni_search_bar, {
            ref: "searchBar",
            style: { "flex": "1" },
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            focus: $data.focus,
            placeholder: $data.hotWorld,
            clearButton: "auto",
            cancelButton: "always",
            onClear: $options.clear,
            onConfirm: $options.confirm,
            onCancel: $options.cancel
          }, null, 8, ["modelValue", "focus", "placeholder", "onClear", "onConfirm", "onCancel"])
        ])
      ]),
      createElementVNode("view", { class: "search-body" }, [
        createCommentVNode(" 搜索历史 "),
        $data.localSearchList.length ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "word-container"
        }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("u-text", { class: "word-container_header-text" }, "搜索历史"),
            !$data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => $data.localSearchListDel = true),
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: "trash"
            }, null, 8, ["color"])) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "flex-center flex-row",
              style: { "font-weight": "500", "justify-content": "space-between" }
            }, [
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#666", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-right": "20rpx" },
                onClick: _cache[2] || (_cache[2] = (...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args))
              }, "全部删除"),
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#c0402b", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-left": "20rpx" },
                onClick: _cache[3] || (_cache[3] = ($event) => $data.localSearchListDel = false)
              }, "完成")
            ]))
          ]),
          createElementVNode("view", { class: "word-container_body" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.localSearchList, (word, index) => {
                return openBlock(), createElementBlock("view", {
                  class: "flex-center flex-row word-container_body-text",
                  key: index,
                  onClick: ($event) => $options.LocalSearchlistItemClick(word, index)
                }, [
                  (openBlock(), createElementBlock(
                    "u-text",
                    {
                      class: "word-display",
                      key: word
                    },
                    toDisplayString(word),
                    1
                    /* TEXT */
                  )),
                  $data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
                    key: 0,
                    size: "12",
                    type: "closeempty"
                  })) : createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true),
        createCommentVNode(" 搜索发现 "),
        createElementVNode("view", { class: "word-container" }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("view", { class: "flex-center flex-row" }, [
              createElementVNode("u-text", { class: "word-container_header-text" }, "搜索发现"),
              !$data.netHotListIsHide ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: "search-icons",
                color: $data.iconColor,
                size: "14",
                type: "reload",
                onClick: $options.searchHotRefresh
              }, null, 8, ["color", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            createVNode(_component_uni_icons, {
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: $data.netHotListIsHide ? "eye-slash" : "eye",
              onClick: _cache[4] || (_cache[4] = ($event) => $data.netHotListIsHide = !$data.netHotListIsHide)
            }, null, 8, ["color", "type"])
          ]),
          createVNode(
            _component_unicloud_db,
            {
              ref: "udb",
              field: "content",
              collection: "opendb-search-hot",
              orderby: "create_date desc,count desc",
              "page-data": "replace",
              "page-size": 10
            },
            {
              default: withCtx(({ data, loading, error, options }) => [
                loading && !$data.netHotListIsHide ? (openBlock(), createElementBlock("u-text", {
                  key: 0,
                  class: "word-container_body-info"
                }, "正在加载...")) : (openBlock(), createElementBlock("view", {
                  key: 1,
                  class: "word-container_body"
                }, [
                  !$data.netHotListIsHide ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 0 },
                    [
                      error ? (openBlock(), createElementBlock(
                        "u-text",
                        {
                          key: 0,
                          class: "word-container_body-info"
                        },
                        toDisplayString(error.message),
                        1
                        /* TEXT */
                      )) : (openBlock(true), createElementBlock(
                        Fragment,
                        { key: 1 },
                        renderList(data, (word, index) => {
                          return openBlock(), createElementBlock("u-text", {
                            class: "word-container_body-text",
                            key: index,
                            onClick: ($event) => $options.search(word.content)
                          }, toDisplayString(word.content), 9, ["onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (openBlock(), createElementBlock("view", {
                    key: 1,
                    style: { "flex": "1" }
                  }, [
                    createElementVNode("u-text", { class: "word-container_body-info" }, "当前搜索发现已隐藏")
                  ]))
                ]))
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ])
      ]),
      createCommentVNode(" 搜索联想 "),
      $options.associativeShow ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "search-associative"
      }, [
        createVNode(_component_uni_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.associativeList, (item, index) => {
                return openBlock(), createBlock(_component_uni_list_item, {
                  key: item._id,
                  ellipsis: 1,
                  title: item.name,
                  onClick: ($event) => $options.associativeClick(item),
                  "show-extra-icon": "",
                  clickable: "",
                  "extra-icon": { size: 18, color: $data.iconColor, type: "search" }
                }, null, 8, ["title", "onClick", "extra-icon"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/pages/list/search/search.nvue"]]);
export {
  search as default
};
