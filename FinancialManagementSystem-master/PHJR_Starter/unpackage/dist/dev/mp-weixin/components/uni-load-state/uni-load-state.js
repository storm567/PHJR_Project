"use strict";
const common_vendor = require("../../common/vendor.js");
const components_uniLoadState_i18n_index = require("./i18n/index.js");
const common_assets = require("../../common/assets.js");
const {
  t
} = common_vendor.initVueI18n(components_uniLoadState_i18n_index.messages);
const _sfc_main = {
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
    common_vendor.index.onNetworkStatusChange(({
      networkType
    }) => {
      if (this.networkType == "none" && networkType != "none") {
        this.$emit("networkResume");
      }
      this.networkType = networkType;
    });
    common_vendor.index.getNetworkType({
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
      if (common_vendor.index.getSystemInfoSync().platform == "ios") {
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
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.state.error
  }, $props.state.error ? common_vendor.e({
    b: $data.networkType == "none"
  }, $data.networkType == "none" ? {
    c: common_assets._imports_0$1,
    d: common_vendor.t($options.noNetwork),
    e: common_vendor.t($options.toSet),
    f: common_vendor.o((...args) => $options.openSettings && $options.openSettings(...args))
  } : {
    g: common_vendor.t($options.error),
    h: common_vendor.t(JSON.stringify($props.state.error))
  }) : {
    i: common_vendor.p({
      status: $props.state.loading ? "loading" : $props.state.hasMore ? "hasMore" : "noMore"
    })
  }, {
    j: common_vendor.o((...args) => $options.appear && $options.appear(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-740c4771"]]);
wx.createComponent(Component);
