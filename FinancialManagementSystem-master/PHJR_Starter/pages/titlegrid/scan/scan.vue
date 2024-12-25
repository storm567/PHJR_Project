<template>
  <view style="background-color:#000000; position: relative;">
    <view style="position: absolute;top: 0px;right: 10px;font-size: 40px;" @click="goBack">
      &times;
    </view>
    <view id="bcid">
      <view style="height:60%"></view>
      <text class="tip" style="color: #000000;">...载入中...</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
      wo: null,
      scan: null,
    };
  },
  methods: {
    plusReady() {
      this.ws = plus.webview.currentWebview();
      this.wo = this.ws.opener();

      // 开始扫描
      this.ws.addEventListener('show', () => {
        this.scan = new plus.barcode.Barcode('bcid');
        this.scan.onmarked = this.onmarked;
        this.scan.start({ conserve: true, filename: '_doc/barcode/' });
        this.createSubview();
      }, false);

      // 显示页面并关闭等待框
      this.ws.show('pop-in');
    },
    onmarked(type, result, file) {
      switch (type) {
        case plus.barcode.QR:
          type = 'QR';
          break;
        case plus.barcode.EAN13:
          type = 'EAN13';
          break;
        case plus.barcode.EAN8:
          type = 'EAN8';
          break;
        default:
          type = '其它' + type;
          break;
      }
      result = result.replace(/\r\n/g, '');
      this.wo.evalJS(`scaned('${type}', '${result}', '${file}');`);
      this.goBack();
    },
    createSubview() {
      // 创建子窗口的逻辑
    },
    scanPicture() {
      plus.gallery.pick((path) => {
        plus.barcode.scan(path, this.onmarked, (error) => {
          plus.nativeUI.alert('无法识别此图片');
        });
      }, (err) => {
        console.log('Failed: ' + err.message);
      });
    },
    goBack() {
      console.log("goBack called"); // 确认是否调用
          uni.navigateBack();
    }
  },
  mounted() {
    document.addEventListener('plusready', this.plusReady, false);
  }
}
</script>

<style scoped>
#bcid {
  width: 100%;
  position: absolute;
  top: 350px;
  bottom: 0px;
  text-align: center;
}
.tip {
  color: #FFFFFF;
  font-weight: bold;
  text-shadow: 0px -1px #103E5C;
}
</style>
