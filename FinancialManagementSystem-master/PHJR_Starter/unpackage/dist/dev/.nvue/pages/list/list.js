import { r as requireNativePlugin, i as initVueI18n, f as formatAppLog, V as Vs, a as resolveEasycom, _ as __easycom_0, b as __easycom_1$1, c as __easycom_3$1, d as __easycom_4$1, e as __easycom_2$1 } from "../../unicloud-db.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createCommentVNode, toDisplayString, Fragment, renderList, resolveComponent, resolveDynamicComponent, createVNode, withCtx, createBlock } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0$7 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
const _sfc_main$8 = {
  name: "UniGridItem",
  inject: ["grid"],
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      column: 0,
      showBorder: true,
      square: true,
      highlight: true,
      left: 0,
      top: 0,
      openNum: 2,
      width: 0,
      borderColor: "#e5e5e5"
    };
  },
  created() {
    this.column = this.grid.column;
    this.showBorder = this.grid.showBorder;
    this.square = this.grid.square;
    this.highlight = this.grid.highlight;
    this.top = this.hor === 0 ? this.grid.hor : this.hor;
    this.left = this.ver === 0 ? this.grid.ver : this.ver;
    this.borderColor = this.grid.borderColor;
    this.grid.children.push(this);
    this.width = this.grid.width;
  },
  beforeDestroy() {
    this.grid.children.forEach((item, index) => {
      if (item === this) {
        this.grid.children.splice(index, 1);
      }
    });
  },
  methods: {
    _onClick() {
      this.grid.change({
        detail: {
          index: this.index
        }
      });
    }
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.width ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      style: normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
      class: "uni-grid-item",
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
          style: normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["styles", [_style_0$7]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
const _style_0$6 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
const dom = requireNativePlugin("dom");
const _sfc_main$7 = {
  name: "UniGrid",
  emits: ["change"],
  props: {
    // 每列显示个数
    column: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "#D2D2D2"
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      width: 0
    };
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this._getSize((width) => {
          this.children.forEach((item, index) => {
            item.width = width;
          });
        });
      }, 50);
    },
    change(e) {
      this.$emit("change", e);
    },
    _getSize(fn) {
      dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
        this.width = parseInt((ret.size.width - 1) / this.column) + "px";
        fn(this.width);
      });
    }
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-grid-wrap",
    renderWhole: true
  }, [
    createElementVNode("view", {
      id: $data.elId,
      ref: "uni-grid",
      class: normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
      style: normalizeStyle({ "border-left-color": $props.borderColor })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 14, ["id"])
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$6]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
const _style_0$5 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
const _sfc_main$6 = {
  name: "UniSection",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    titleFontSize: {
      type: String,
      default: "14px"
    },
    titleColor: {
      type: String,
      default: "#333"
    },
    subTitle: {
      type: String,
      default: ""
    },
    subTitleFontSize: {
      type: String,
      default: "12px"
    },
    subTitleColor: {
      type: String,
      default: "#999"
    },
    padding: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    _padding() {
      if (typeof this.padding === "string") {
        return this.padding;
      }
      return this.padding ? "10px" : "";
    }
  },
  watch: {
    title(newVal) {
      if (uni.report && newVal !== "") {
        uni.report("title", newVal);
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-section",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-section-header",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.type ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["uni-section-header__decoration", $props.type])
        },
        null,
        2
        /* CLASS */
      )) : renderSlot(_ctx.$slots, "decoration", { key: 1 }),
      createElementVNode("view", { class: "uni-section-header__content" }, [
        createElementVNode(
          "u-text",
          {
            style: normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
            class: normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
          },
          toDisplayString($props.title),
          7
          /* TEXT, CLASS, STYLE */
        ),
        $props.subTitle ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 0,
            style: normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
            class: "uni-section-header__content-sub"
          },
          toDisplayString($props.subTitle),
          5
          /* TEXT, STYLE */
        )) : createCommentVNode("v-if", true)
      ]),
      createElementVNode("view", { class: "uni-section-header__slot-right" }, [
        renderSlot(_ctx.$slots, "right")
      ])
    ]),
    createElementVNode(
      "view",
      {
        class: "uni-section-content",
        style: normalizeStyle({ padding: $options._padding })
      },
      [
        renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    )
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$5]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
const _style_0$4 = { "uni-swiper__warp": { "": { "flex": 1, "flexDirection": "column", "position": "relative", "overflow": "hidden" } }, "uni-swiper__dots-box": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-item": { "": { "width": 8, "borderRadius": 100, "marginLeft": 6, "backgroundColor": "rgba(0,0,0,0.4)", "marginTop:first-child": 0, "marginRight:first-child": 0, "marginBottom:first-child": 0, "marginLeft:first-child": 0 } }, "uni-swiper__dots-default": { "": { "borderRadius": 100 } }, "uni-swiper__dots-long": { "": { "borderRadius": 50 } }, "uni-swiper__dots-bar": { "": { "borderRadius": 50 } }, "uni-swiper__dots-nav": { "": { "bottom": 0, "paddingTop": 8, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "flex": 1, "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.2)" } }, "uni-swiper__dots-nav-item": { "": { "fontSize": 14, "color": "#ffffff", "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15 } }, "uni-swiper__dots-indexes": { "": { "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-indexes-text": { "": { "color": "#ffffff", "fontSize": 12, "lineHeight": 14 } } };
const _sfc_main$5 = {
  name: "UniSwiperDot",
  emits: ["clickItem"],
  props: {
    info: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    dotsStyles: {
      type: Object,
      default() {
        return {};
      }
    },
    // 类型 ：default(默认) indexes long nav
    mode: {
      type: String,
      default: "default"
    },
    // 只在 nav 模式下生效，变量名称
    field: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dots: {
        width: 6,
        height: 6,
        bottom: 10,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        selectedBackgroundColor: "#333",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid"
      }
    };
  },
  watch: {
    dotsStyles(newVal) {
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    mode(newVal) {
      if (newVal === "indexes") {
        this.dots.width = 14;
        this.dots.height = 14;
      } else {
        this.dots.width = 6;
        this.dots.height = 6;
      }
    }
  },
  created() {
    if (this.mode === "indexes") {
      this.dots.width = 12;
      this.dots.height = 12;
    }
    this.dots = Object.assign(this.dots, this.dotsStyles);
  },
  methods: {
    clickItem(index) {
      this.$emit("clickItem", index);
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-swiper__warp",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.mode === "default" ? (openBlock(), createElementBlock(
      "view",
      {
        style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "default"
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.info, (item, index) => {
            return openBlock(), createElementBlock("view", {
              onClick: ($event) => $options.clickItem(index),
              style: normalizeStyle({
                "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
                "height": $data.dots.width / 2 + "px",
                "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                "border-radius": "0px"
              }),
              key: index,
              class: "uni-swiper__dots-item uni-swiper__dots-bar"
            }, null, 12, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true),
    $props.mode === "dot" ? (openBlock(), createElementBlock(
      "view",
      {
        style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "dot"
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.info, (item, index) => {
            return openBlock(), createElementBlock("view", {
              onClick: ($event) => $options.clickItem(index),
              style: normalizeStyle({
                "width": $data.dots.width + "px",
                "height": $data.dots.height + "px",
                "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
              }),
              key: index,
              class: "uni-swiper__dots-item"
            }, null, 12, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true),
    $props.mode === "round" ? (openBlock(), createElementBlock(
      "view",
      {
        style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box",
        key: "round"
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.info, (item, index) => {
            return openBlock(), createElementBlock("view", {
              onClick: ($event) => $options.clickItem(index),
              class: normalizeClass([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
              style: normalizeStyle({
                "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
                "height": $data.dots.height + "px",
                "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
              }),
              key: index
            }, null, 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true),
    $props.mode === "nav" ? (openBlock(), createElementBlock(
      "view",
      {
        key: "nav",
        style: normalizeStyle({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
        class: "uni-swiper__dots-box uni-swiper__dots-nav"
      },
      [
        createElementVNode(
          "u-text",
          {
            style: normalizeStyle({ "color": $props.dotsStyles.color }),
            class: "uni-swiper__dots-nav-item"
          },
          toDisplayString($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]),
          5
          /* TEXT, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true),
    $props.mode === "indexes" ? (openBlock(), createElementBlock(
      "view",
      {
        key: "indexes",
        style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
        class: "uni-swiper__dots-box"
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.info, (item, index) => {
            return openBlock(), createElementBlock("view", {
              onClick: ($event) => $options.clickItem(index),
              style: normalizeStyle({
                "width": $data.dots.width + "px",
                "height": $data.dots.height + "px",
                "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
                "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
              }),
              key: index,
              class: "uni-swiper__dots-item uni-swiper__dots-indexes"
            }, [
              createElementVNode(
                "u-text",
                { class: "uni-swiper__dots-indexes-text" },
                toDisplayString(index + 1),
                1
                /* TEXT */
              )
            ], 12, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$4]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
const _style_0$3 = { "refreshBox": { "": { "width": "750rpx", "height": 50, "justifyContent": "center", "alignItems": "center", "flexDirection": "row" } }, "refreshImg": { "": { "width": "55rpx", "height": "55rpx", "zIndex": 111 } }, "refreshText": { "": { "fontSize": "26rpx", "color": "#999999", "paddingLeft": "6rpx" } } };
const _sfc_main$4 = {
  data() {
    return {
      showRefresh: false,
      state: 0
    };
  },
  methods: {
    onpullingdown({ pullingDistance, viewHeight }) {
      if (pullingDistance < viewHeight) {
        this.state = 0;
      } else {
        this.state = 1;
      }
    },
    refresh() {
      this.showRefresh = true;
      this.state = 2;
      this.$emit("refresh");
    }
  },
  watch: {
    loading(loading, oldValue) {
      if (!loading) {
        this.showRefresh = false;
        this.state = 3;
      }
    }
  },
  props: {
    loading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    config: {
      type: Array,
      default() {
        return [
          {
            text: "继续下拉执行刷新",
            img: ""
            //可以自己添加图片路径或base64实现图片
          },
          {
            text: "释放立即刷新",
            img: ""
            //可以自己添加图片路径或base64实现图片
          },
          {
            text: "正在疯狂的加载中",
            img: ""
            //可以自己添加图片路径或base64实现图片
          },
          {
            text: "加载成功",
            img: ""
            //可以自己添加图片路径或base64实现图片
          }
        ];
      }
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("refresh", {
    onRefresh: _cache[0] || (_cache[0] = (...args) => $options.refresh && $options.refresh(...args)),
    onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
    display: $data.showRefresh ? "show" : "hide"
  }, [
    createElementVNode("view", { class: "refreshBox" }, [
      createCommentVNode(' 可以自己添加图片路径或base64实现图片 <image class="refreshImg" :src="config[state].img" mode="widthFix" resize="cover"></image> '),
      createElementVNode(
        "u-text",
        { class: "refreshText" },
        toDisplayString($props.config[$data.state].text),
        1
        /* TEXT */
      )
    ])
  ], 40, ["display"]);
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$3]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/components/refreshBox/refreshBox.vue"]]);
function pad(str, length = 2) {
  str += "";
  while (str.length < length) {
    str = "0" + str;
  }
  return str.slice(-length);
}
const parser = {
  yyyy: (dateObj) => {
    return pad(dateObj.year, 4);
  },
  yy: (dateObj) => {
    return pad(dateObj.year);
  },
  MM: (dateObj) => {
    return pad(dateObj.month);
  },
  M: (dateObj) => {
    return dateObj.month;
  },
  dd: (dateObj) => {
    return pad(dateObj.day);
  },
  d: (dateObj) => {
    return dateObj.day;
  },
  hh: (dateObj) => {
    return pad(dateObj.hour);
  },
  h: (dateObj) => {
    return dateObj.hour;
  },
  mm: (dateObj) => {
    return pad(dateObj.minute);
  },
  m: (dateObj) => {
    return dateObj.minute;
  },
  ss: (dateObj) => {
    return pad(dateObj.second);
  },
  s: (dateObj) => {
    return dateObj.second;
  },
  SSS: (dateObj) => {
    return pad(dateObj.millisecond, 3);
  },
  S: (dateObj) => {
    return dateObj.millisecond;
  }
};
function getDate(time) {
  if (time instanceof Date) {
    return time;
  }
  switch (typeof time) {
    case "string": {
      if (time.indexOf("T") > -1) {
        return new Date(time);
      }
      return new Date(time.replace(/-/g, "/"));
    }
    default:
      return new Date(time);
  }
}
function formatDate(date, format = "yyyy/MM/dd hh:mm:ss") {
  if (!date && date !== 0) {
    return "";
  }
  date = getDate(date);
  const dateObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  };
  const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
  let flag = true;
  let result = format;
  while (flag) {
    flag = false;
    result = result.replace(tokenRegExp, function(matched) {
      flag = true;
      return parser[matched](dateObj);
    });
  }
  return result;
}
function friendlyDate(time, {
  locale = "zh",
  threshold = [6e4, 36e5],
  format = "yyyy/MM/dd hh:mm:ss"
}) {
  if (time === "-") {
    return time;
  }
  if (!time && time !== 0) {
    return "";
  }
  const localeText = {
    zh: {
      year: "年",
      month: "月",
      day: "天",
      hour: "小时",
      minute: "分钟",
      second: "秒",
      ago: "前",
      later: "后",
      justNow: "刚刚",
      soon: "马上",
      template: "{num}{unit}{suffix}"
    },
    en: {
      year: "year",
      month: "month",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second",
      ago: "ago",
      later: "later",
      justNow: "just now",
      soon: "soon",
      template: "{num} {unit} {suffix}"
    }
  };
  const text = localeText[locale] || localeText.zh;
  let date = getDate(time);
  let ms = date.getTime() - Date.now();
  let absMs = Math.abs(ms);
  if (absMs < threshold[0]) {
    return ms < 0 ? text.justNow : text.soon;
  }
  if (absMs >= threshold[1]) {
    return formatDate(date, format);
  }
  let num;
  let unit;
  let suffix = text.later;
  if (ms < 0) {
    suffix = text.ago;
    ms = -ms;
  }
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  switch (true) {
    case years > 0:
      num = years;
      unit = text.year;
      break;
    case months > 0:
      num = months;
      unit = text.month;
      break;
    case days > 0:
      num = days;
      unit = text.day;
      break;
    case hours > 0:
      num = hours;
      unit = text.hour;
      break;
    case minutes > 0:
      num = minutes;
      unit = text.minute;
      break;
    default:
      num = seconds;
      unit = text.second;
      break;
  }
  if (locale === "en") {
    if (num === 1) {
      num = "a";
    } else {
      unit += "s";
    }
  }
  return text.template.replace(/{\s*num\s*}/g, num + "").replace(/{\s*unit\s*}/g, unit).replace(
    /{\s*suffix\s*}/g,
    suffix
  );
}
const _sfc_main$3 = {
  name: "uniDateformat",
  props: {
    date: {
      type: [Object, String, Number],
      default() {
        return "-";
      }
    },
    locale: {
      type: String,
      default: "zh"
    },
    threshold: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    format: {
      type: String,
      default: "yyyy/MM/dd hh:mm:ss"
    },
    // refreshRate使用不当可能导致性能问题，谨慎使用
    refreshRate: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      refreshMark: 0
    };
  },
  computed: {
    dateShow() {
      this.refreshMark;
      return friendlyDate(this.date, {
        locale: this.locale,
        threshold: this.threshold,
        format: this.format
      });
    }
  },
  watch: {
    refreshRate: {
      handler() {
        this.setAutoRefresh();
      },
      immediate: true
    }
  },
  methods: {
    refresh() {
      this.refreshMark++;
    },
    setAutoRefresh() {
      clearInterval(this.refreshInterval);
      if (this.refreshRate) {
        this.refreshInterval = setInterval(() => {
          this.refresh();
        }, parseInt(this.refreshRate));
      }
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "u-text",
    null,
    toDisplayString($options.dateShow),
    1
    /* TEXT */
  );
}
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue"]]);
const noData$1 = "No Data";
const noNetwork$1 = "Network error";
const toSet$1 = "Go to settings";
const error$1 = "error";
const en = {
  noData: noData$1,
  noNetwork: noNetwork$1,
  toSet: toSet$1,
  error: error$1
};
const noData = "暂无数据";
const noNetwork = "网络异常";
const toSet = "前往设置";
const error = "错误";
const zhHans = {
  noData,
  noNetwork,
  toSet,
  error
};
const messages = {
  en,
  "zh-Hans": zhHans
};
const _imports_0 = "/static/uni-load-state/disconnection.png";
const _style_0$2 = { "box": { "": { "flex": 1, "width": "700rpx", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "uni-load-more": { "": { "alignItems": "center", "justifyContent": "center" } }, "state-text": { "": { "textAlign": "center", "fontSize": "26rpx", "width": "690rpx", "paddingTop": "10rpx", "paddingRight": "10rpx", "paddingBottom": "10rpx", "paddingLeft": "10rpx", "color": "#999999" } }, "icon-image": { "": { "width": "300rpx" } }, "tip-text": { "": { "color": "#999999", "fontSize": "32rpx", "marginBottom": "30rpx" } }, "btn": { "": { "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "width": 128, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "btn-text": { "": { "color": "#999999", "fontSize": 15 } }, "btn-default": { "": { "borderColor": "#999999", "borderStyle": "solid", "borderWidth": 1, "borderRadius": 3 } }, "error": { "": { "width": "690rpx", "color": "#DD524D" } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$2 = {
  name: "uni-load-state",
  computed: {
    noData() {
      return t("noData");
    },
    noNetwork() {
      return t("noNetwork");
    },
    toSet() {
      return t("toSet");
    },
    error() {
      return t("error");
    }
  },
  data() {
    return {
      "networkType": ""
    };
  },
  props: {
    state: {
      type: Object,
      default() {
        return {
          "loading": true,
          "hasMore": false,
          "pagination": {
            "pages": 0
          },
          "data": [],
          "error": {}
        };
      }
    }
  },
  mounted() {
    uni.onNetworkStatusChange(({
      networkType
    }) => {
      if (this.networkType == "none" && networkType != "none") {
        this.$emit("networkResume");
      }
      this.networkType = networkType;
    });
    uni.getNetworkType({
      success: ({
        networkType
      }) => {
        this.networkType = networkType;
      }
    });
  },
  methods: {
    appear() {
      if (!this.state.loading && this.state.hasMore) {
        this.$emit("loadMore");
      }
    },
    openSettings() {
      if (uni.getSystemInfoSync().platform == "ios") {
        var UIApplication = plus.ios.import("UIApplication");
        var application2 = UIApplication.sharedApplication();
        var NSURL2 = plus.ios.import("NSURL");
        var setting2 = NSURL2.URLWithString("App-prefs:root=General");
        application2.openURL(setting2);
        plus.ios.deleteObject(setting2);
        plus.ios.deleteObject(NSURL2);
        plus.ios.deleteObject(application2);
      } else {
        var Intent = plus.android.importClass("android.content.Intent");
        var Settings = plus.android.importClass("android.provider.Settings");
        var mainActivity = plus.android.runtimeMainActivity();
        var intent = new Intent(Settings.ACTION_SETTINGS);
        mainActivity.startActivity(intent);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      onAppear: _cache[1] || (_cache[1] = (...args) => $options.appear && $options.appear(...args)),
      renderWhole: true
    },
    [
      $props.state.error ? (openBlock(), createElementBlock("view", { key: 0 }, [
        $data.networkType == "none" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "box"
        }, [
          createElementVNode("u-image", {
            class: "icon-image",
            src: _imports_0,
            mode: "widthFix"
          }),
          createElementVNode(
            "u-text",
            { class: "tip-text" },
            toDisplayString($options.noNetwork),
            1
            /* TEXT */
          ),
          createElementVNode("view", {
            class: "btn btn-default",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.openSettings && $options.openSettings(...args))
          }, [
            createElementVNode(
              "u-text",
              { class: "btn-text" },
              toDisplayString($options.toSet),
              1
              /* TEXT */
            )
          ])
        ])) : (openBlock(), createElementBlock(
          "u-text",
          {
            key: 1,
            class: "error"
          },
          toDisplayString($options.error) + "：" + toDisplayString(JSON.stringify($props.state.error)),
          1
          /* TEXT */
        ))
      ])) : (openBlock(), createElementBlock(
        "u-text",
        {
          key: 1,
          class: "state-text"
        },
        toDisplayString($props.state.loading ? "加载中..." : $props.state.hasMore ? "上拉加载更多" : "没有更多数据了"),
        1
        /* TEXT */
      ))
    ],
    32
    /* NEED_HYDRATION */
  );
}
const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/components/uni-load-state/uni-load-state.vue"]]);
const _style_0$1 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$1 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
var isIos;
isIos = plus.os.name == "iOS";
function judgeIosPermissionPush() {
  var result = false;
  var UIApplication = plus.ios.import("UIApplication");
  var app = UIApplication.sharedApplication();
  var enabledTypes = 0;
  if (app.currentUserNotificationSettings) {
    var settings = app.currentUserNotificationSettings();
    enabledTypes = settings.plusGetAttribute("types");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "推送权限没有开启");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "已经开启推送功能!");
    }
    plus.ios.deleteObject(settings);
  } else {
    enabledTypes = app.enabledRemoteNotificationTypes();
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "推送权限没有开启!");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "已经开启推送功能!");
    }
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
  }
  plus.ios.deleteObject(app);
  plus.ios.deleteObject(UIApplication);
  return result;
}
function judgeIosPermissionLocation() {
  var result = false;
  var cllocationManger = plus.ios.import("CLLocationManager");
  var status = cllocationManger.authorizationStatus();
  result = status != 2;
  plus.ios.deleteObject(cllocationManger);
  return result;
}
function judgeIosPermissionRecord() {
  var result = false;
  var avaudiosession = plus.ios.import("AVAudioSession");
  var avaudio = avaudiosession.sharedInstance();
  var permissionStatus = avaudio.recordPermission();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "麦克风权限没有开启");
  } else {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "麦克风权限已经开启");
  }
  plus.ios.deleteObject(avaudiosession);
  return result;
}
function judgeIosPermissionCamera() {
  var result = false;
  var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
  var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "相机权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "相机权限没有开启");
  }
  plus.ios.deleteObject(AVCaptureDevice);
  return result;
}
function judgeIosPermissionPhotoLibrary() {
  var result = false;
  var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
  var authStatus = PHPhotoLibrary.authorizationStatus();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "相册权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "相册权限没有开启");
  }
  plus.ios.deleteObject(PHPhotoLibrary);
  return result;
}
function judgeIosPermissionContact() {
  var result = false;
  var CNContactStore = plus.ios.import("CNContactStore");
  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
  if (cnAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "通讯录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "通讯录权限没有开启");
  }
  plus.ios.deleteObject(CNContactStore);
  return result;
}
function judgeIosPermissionCalendar() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "日历权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "日历权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function judgeIosPermissionMemo() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "备忘录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "备忘录权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function requestAndroidPermission(permissionID) {
  return new Promise((resolve, reject) => {
    plus.android.requestPermissions(
      [permissionID],
      // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
      function(resultObj) {
        var result = 0;
        for (var i = 0; i < resultObj.granted.length; i++) {
          var grantedPermission = resultObj.granted[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "已获取的权限：" + grantedPermission);
          result = 1;
        }
        for (var i = 0; i < resultObj.deniedPresent.length; i++) {
          var deniedPresentPermission = resultObj.deniedPresent[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "拒绝本次申请的权限：" + deniedPresentPermission);
          result = 0;
        }
        for (var i = 0; i < resultObj.deniedAlways.length; i++) {
          var deniedAlwaysPermission = resultObj.deniedAlways[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "永久拒绝申请的权限：" + deniedAlwaysPermission);
          result = -1;
        }
        resolve(result);
      },
      function(error2) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "申请权限错误：" + error2.code + " = " + error2.message);
        resolve({
          code: error2.code,
          message: error2.message
        });
      }
    );
  });
}
function judgeIosPermission(permissionID) {
  if (permissionID == "location") {
    return judgeIosPermissionLocation();
  } else if (permissionID == "camera") {
    return judgeIosPermissionCamera();
  } else if (permissionID == "photoLibrary") {
    return judgeIosPermissionPhotoLibrary();
  } else if (permissionID == "record") {
    return judgeIosPermissionRecord();
  } else if (permissionID == "push") {
    return judgeIosPermissionPush();
  } else if (permissionID == "contact") {
    return judgeIosPermissionContact();
  } else if (permissionID == "calendar") {
    return judgeIosPermissionCalendar();
  } else if (permissionID == "memo") {
    return judgeIosPermissionMemo();
  }
  return false;
}
function gotoAppPermissionSetting() {
  if (isIos) {
    var UIApplication = plus.ios.import("UIApplication");
    var application2 = UIApplication.sharedApplication();
    var NSURL2 = plus.ios.import("NSURL");
    var setting2 = NSURL2.URLWithString("app-settings:");
    application2.openURL(setting2);
    plus.ios.deleteObject(setting2);
    plus.ios.deleteObject(NSURL2);
    plus.ios.deleteObject(application2);
  } else {
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var Uri = plus.android.importClass("android.net.Uri");
    var mainActivity = plus.android.runtimeMainActivity();
    var intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}
function checkSystemEnableLocation() {
  if (isIos) {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var result = cllocationManger.locationServicesEnabled();
    plus.ios.deleteObject(cllocationManger);
    return result;
  } else {
    var context = plus.android.importClass("android.content.Context");
    var locationManager = plus.android.importClass("android.location.LocationManager");
    var main = plus.android.runtimeMainActivity();
    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "系统定位开启:" + result);
    return result;
  }
}
const permision = {
  judgeIosPermission,
  requestAndroidPermission,
  checkSystemEnableLocation,
  gotoAppPermissionSetting
};
class Gps {
  constructor(arg) {
    this.lock = false;
  }
  async getLocation(param = {
    type: "wgs84"
  }) {
    return new Promise(async (callback2) => {
      if (this.lock) {
        callback2(false);
        return false;
      }
      this.lock = true;
      uni.getLocation({
        ...param,
        success: (res) => {
          this.lock = false;
          callback2(res);
        },
        fail: async (err) => {
          uni.showToast({
            title: "定位获取失败",
            icon: "none"
          });
          formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
          callback2(false);
          await this.checkGpsIsOpen();
        }
      });
    });
  }
  async checkGpsIsOpen() {
    this.lock = true;
    if (!permision.checkSystemEnableLocation()) {
      plus.nativeUI.confirm("手机定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          if (uni.getSystemInfoSync().platform == "ios") {
            plus.runtime.openURL("app-settings://");
          } else {
            var main = plus.android.runtimeMainActivity();
            var Intent = plus.android.importClass("android.content.Intent");
            var Settings = plus.android.importClass("android.provider.Settings");
            var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            main.startActivity(intent);
          }
        } else {
          uni.showToast({
            title: "设备无定位权限",
            icon: "none"
          });
          callback(false);
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
      return false;
    }
    let checkAppGpsRes = await this.checkAppGps();
    if (!checkAppGpsRes) {
      plus.nativeUI.confirm("应用定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          permision.gotoAppPermissionSetting();
          callback(false);
        } else {
          uni.showToast({
            title: "应用无定位权限",
            icon: "none"
          });
          return false;
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
    } else {
      this.lock = false;
    }
  }
  async checkAppGps() {
    if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
      return false;
    }
    if (uni.getSystemInfoSync().platform != "ios" && await permision.requestAndroidPermission(
      "android.permission.ACCESS_FINE_LOCATION"
    ) != 1) {
      return false;
    }
    return true;
  }
}
const _style_0 = { "pages": { "": { "backgroundColor": "#FFFFFF" } }, "avatar": { "": { "width": "200rpx", "height": "200rpx", "marginRight": "10rpx" } }, "main": { "": { "justifyContent": "space-between", "flex": 1 } }, "title": { "": { "fontSize": 16 } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": 14, "color": "#999999" } }, "last_modify_date": { "": { "fontSize": 14, "color": "#999999" } }, "uni-search-box": { "": { "backgroundColor": "#FFFFFF", "position": "sticky", "height": 50, "top": 0, "left": 0 } }, "cover-search-bar": { "": { "height": 50, "position": "relative", "top": -50, "marginBottom": -50 } }, "grid-item-box": { "": { "alignItems": "center", "justifyItems": "center" } }, "swiper-box": { "": { "height": 200 } }, "swiper-item": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 200, "color": "#ffffff" } }, "swiper-item0": { "": { "backgroundColor": "#cee1fd" } }, "swiper-item1": { "": { "backgroundColor": "#b2cef7" } }, "swiper-item2": { "": { "backgroundColor": "#cee1fd" } }, "image": { "": { "width": "750rpx", "height": 200 } }, "container": { "": { "position": "relative", "paddingRight": 0 } }, "@FONT-FACE": [{ "uni-swiper-dot-box": { "": { "width": 400, "marginTop": 8, "marginBottom": 0 } }, "image": { "": { "width": 100, "height": 200 } } }] };
let cdbRef;
const gps = new Gps(), db = Vs.database();
const _sfc_main = {
  components: {
    statusBar
  },
  computed: {
    inputPlaceholder(e) {
      if (uni.getStorageSync("CURRENT_LANG") == "en") {
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
          color: "#777",
          flag: "3",
          url: "/pages/titlegrid/scan/scan"
        },
        // 扫一扫
        {
          icon: "cart",
          text: "贷款",
          color: "#777",
          flag: "2",
          url: "/pages/titlegrid/cart/cart"
          // url: "/pages/grid/grid",
        },
        // 贷款
        {
          icon: "wallet",
          text: "卡包",
          color: "#777",
          flag: "1",
          url: "/pages/titlegrid/wallet/wallet"
        },
        // 卡包
        {
          icon: "chat",
          text: "资讯",
          color: "#777",
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
    this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
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
      uni.hideKeyboard();
      uni.navigateTo({
        url: "/pages/list/search/search",
        animationType: "fade-in"
      });
    },
    navigateTo(url, flag) {
      if (flag === "1") {
        uni.navigateTo({
          url
        });
      } else if (flag === "2") {
        uni.switchTab({
          url
        });
      } else if (flag === "3") {
        uni.scanCode({
          scanType: ["qrCode"],
          // 扫码成功后的回调
          success: (res) => {
            uni.navigateTo({
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
        uni.stopPullDownRefresh();
        this.showRefresh = false;
        formatAppLog("log", "at pages/list/list.nvue:272", "end");
      });
      formatAppLog("log", "at pages/list/list.nvue:274", "refresh");
    },
    loadMore() {
      cdbRef.loadMore();
    },
    onqueryerror(e) {
      formatAppLog("error", "at pages/list/list.nvue:280", e);
    },
    onpullingdown(e) {
      formatAppLog("log", "at pages/list/list.nvue:283", e);
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_statusBar = resolveComponent("statusBar");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_1);
  const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_2);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_3);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uni_swiper_dot = resolveEasycom(resolveDynamicComponent("uni-swiper-dot"), __easycom_4);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1$1);
  const _component_refreshBox = resolveEasycom(resolveDynamicComponent("refreshBox"), __easycom_6);
  const _component_uni_dateformat = resolveEasycom(resolveDynamicComponent("uni-dateformat"), __easycom_7);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3$1);
  const _component_uni_load_state = resolveEasycom(resolveDynamicComponent("uni-load-state"), __easycom_9);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4$1);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "pages" }, [
      createCommentVNode(" 添加的外层容器 "),
      createElementVNode("view", { class: "container" }, [
        createVNode(_component_statusBar),
        createCommentVNode(" 表头按钮 "),
        createVNode(_component_uni_section, {
          title: "普惠金融",
          type: "line",
          style: { "font-size": "80px" },
          padding: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_uni_grid, {
              column: 4,
              highlight: true,
              onChange: $options.change
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.items, (item, index) => {
                    return openBlock(), createBlock(_component_uni_grid_item, {
                      index,
                      key: index,
                      onClick: ($event) => $options.navigateTo(item.url, item.flag)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("view", {
                          class: "grid-item-box",
                          style: { "background-color": "#fff" }
                        }, [
                          createVNode(_component_uni_icons, {
                            type: item.icon,
                            size: 30,
                            color: item.color
                          }, null, 8, ["type", "color"]),
                          createElementVNode(
                            "u-text",
                            { class: "text" },
                            toDisplayString(item.text),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        }),
        createCommentVNode(" 轮播图 "),
        createVNode(_component_uni_swiper_dot, {
          class: "uni-swiper-dot-box",
          onClickItem: $options.clickItem,
          info: $data.info,
          current: $data.current,
          mode: $data.mode,
          "dots-styles": $data.dotsStyles,
          field: "content"
        }, {
          default: withCtx(() => [
            createVNode(_component_swiper, {
              class: "swiper-box",
              onChange: $options.change,
              current: $data.swiperDotIndex
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.info, (item, index) => {
                    return openBlock(), createBlock(
                      _component_swiper_item,
                      { key: index },
                      {
                        default: withCtx(() => [
                          createElementVNode(
                            "view",
                            {
                              class: normalizeClass(["swiper-item", "swiper-item" + index])
                            },
                            [
                              createElementVNode("u-image", {
                                src: item.url,
                                mode: "aspectFill",
                                class: "image"
                              }, null, 8, ["src"])
                            ],
                            2
                            /* CLASS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange", "current"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClickItem", "info", "current", "mode", "dots-styles"]),
        createCommentVNode(" 搜索功能 "),
        createElementVNode("view", { class: "uni-search-box" }, [
          createVNode(_component_uni_search_bar, {
            modelValue: $data.keyword,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keyword = $event),
            ref: "searchBar",
            radius: "100",
            cancelButton: "none",
            disabled: "",
            placeholder: $options.inputPlaceholder
          }, null, 8, ["modelValue", "placeholder"]),
          createElementVNode("view", {
            class: "cover-search-bar",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.searchClick && $options.searchClick(...args))
          })
        ]),
        createVNode(_component_unicloud_db, {
          ref: "udb",
          onError: $options.onqueryerror,
          collection: $options.colList,
          "page-size": 10
        }, {
          default: withCtx(({ data, pagination, hasMore, loading, error: error2, options }) => [
            createCommentVNode(' 基于 uni-list 的页面布局 field="user_id.nickname"'),
            createVNode(_component_uni_list, {
              class: "uni-list",
              border: false,
              style: normalizeStyle({ height: $data.listHight })
            }, {
              default: withCtx(() => [
                createCommentVNode(" 作用于app端nvue页面的下拉加载 "),
                createVNode(_component_refreshBox, {
                  onRefresh: $options.refresh,
                  loading
                }, null, 8, ["onRefresh", "loading"]),
                createCommentVNode(" 列表渲染 "),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(data, (item, index) => {
                    return openBlock(), createBlock(_component_uni_list_item, {
                      to: "/pages/list/detail?id=" + item._id + "&title=" + item.title,
                      key: index
                    }, {
                      header: withCtx(() => [
                        createElementVNode("u-image", {
                          class: "avatar",
                          src: item.avatar,
                          mode: "aspectFill"
                        }, null, 8, ["src"])
                      ]),
                      body: withCtx(() => [
                        createElementVNode("view", { class: "main" }, [
                          createElementVNode(
                            "u-text",
                            { class: "title" },
                            toDisplayString(item.title),
                            1
                            /* TEXT */
                          ),
                          createElementVNode("view", { class: "info" }, [
                            createElementVNode(
                              "u-text",
                              { class: "author" },
                              toDisplayString(item.user_id[0] ? item.user_id[0].nickname : ""),
                              1
                              /* TEXT */
                            ),
                            createVNode(_component_uni_dateformat, {
                              class: "last_modify_date",
                              date: item.last_modify_date,
                              format: "yyyy-MM-dd",
                              threshold: [6e4, 2592e6]
                            }, null, 8, ["date"])
                          ])
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["to"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                createCommentVNode(" 加载状态：上拉加载更多，加载中，没有更多数据了，加载错误 "),
                createVNode(
                  _component_uni_list_item,
                  null,
                  {
                    body: withCtx(() => [
                      createVNode(_component_uni_load_state, {
                        onNetworkResume: $options.refresh,
                        state: { data, pagination, hasMore, loading, error: error2 },
                        onLoadMore: $options.loadMore
                      }, null, 8, ["onNetworkResume", "state", "onLoadMore"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["style"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onError", "collection"])
      ])
    ]),
    createCommentVNode(" 结束外层容器 ")
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/Dulync/Documents/WeChat Files/wxid_1ydv7mcfudud12/FileStorage/File/2024-08/PHJR/PHJR_Starter/pages/list/list.nvue"]]);
export {
  list as default
};
