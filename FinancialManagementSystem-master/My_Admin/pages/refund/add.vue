<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="ref_loa_id" label="">
        <uni-easyinput placeholder="贷款ID" v-model="formData.ref_loa_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ref_time" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.ref_time"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="ref_state" label="">
        <uni-easyinput placeholder="还款状态 0未还款 1已还款 2已逾期" v-model="formData.ref_state"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ref_act_time" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.ref_act_time"></uni-datetime-picker>
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
  import { validator } from '../../js_sdk/validator/refund.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'refund';

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
        "ref_loa_id": "",
        "ref_time": null,
        "ref_state": "",
        "ref_act_time": null
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
