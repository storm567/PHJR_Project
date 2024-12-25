<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="com_name" label="">
        <uni-easyinput placeholder="企业名称" v-model="formData.com_name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="loa_money" label="">
        <uni-easyinput placeholder="贷款金额" type="number" v-model="formData.loa_money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="apt_price" label="">
        <uni-easyinput placeholder="抵押物价值" v-model="formData.apt_price"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="month_account_min" label="">
        <uni-easyinput placeholder="月流水最小值" type="number" v-model="formData.month_account_min"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="gross_liabilities" label="">
        <uni-easyinput placeholder="总负债值" v-model="formData.gross_liabilities"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="credit_line" label="">
        <uni-easyinput placeholder="额度值" v-model="formData.credit_line"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="creInves_state" label="">
        <uni-easyinput placeholder="征信状态" v-model="formData.creInves_state"></uni-easyinput>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/risk.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'risk';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "com_name": "",
        "loa_money": null,
        "apt_price": "",
        "month_account_min": null,
        "gross_liabilities": "",
        "credit_line": "",
        "creInves_state": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>
