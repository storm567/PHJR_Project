<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="com_no" label="">
        <uni-easyinput placeholder="企业编号" v-model="formData.com_no"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="com_name" label="">
        <uni-easyinput placeholder="企业名称" v-model="formData.com_name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="com_email" label="">
        <uni-easyinput placeholder="企业邮箱" v-model="formData.com_email"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="com_phone" label="">
        <uni-easyinput placeholder="企业电话" v-model="formData.com_phone"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="com_status" label="">
        <uni-easyinput placeholder="0 正常，1 停用，2 未激活，3 未实名, 4 待认证，5 已认证" v-model="formData.com_status"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/company.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'company';

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
        "com_no": "",
        "com_name": "",
        "com_email": "",
        "com_phone": "",
        "com_status": ""
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
