<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="bank_name" label="银行名称" required>
        <uni-easyinput placeholder="请输入银行名称" v-model="formData.bank_name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="bank_email" label="银行邮箱">
        <uni-easyinput placeholder="请输入银行邮箱" v-model="formData.bank_email"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="bank_rate" label="贷款利润" required>
        <uni-easyinput placeholder="请输入贷款利润" v-model="formData.bank_rate"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="bank_phone" label="银行电话">
        <uni-easyinput placeholder="请输入银行电话" v-model="formData.bank_phone"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="bank_length" label="贷款期限" required>
        <uni-easyinput placeholder="请输入贷款期限" v-model="formData.bank_length"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/bank.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'bank';

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
        "bank_name": "",
        "bank_email": "",
        "bank_rate": "",
        "bank_phone": "",
        "bank_length": ""
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
