<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="user_id" label="">
        <uni-easyinput placeholder="用户id，参考uni-id-users表" v-model="formData.user_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="bank" label="">
        <uni-easyinput placeholder="申请银行" v-model="formData.bank"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="loanAmount" label="">
        <uni-easyinput placeholder="贷款金额" type="number" v-model="formData.loanAmount"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="loanPurpose" label="">
        <uni-easyinput placeholder="贷款目的" v-model="formData.loanPurpose"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="createdTime" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.createdTime"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="loan_com_id" label="">
        <uni-easyinput placeholder="企业id" v-model="formData.loan_com_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="loan_state" label="">
        <uni-easyinput placeholder="贷款状态 0 未审批 1平台已通过 2 平台已驳回 3银行已审核 4 银行驳回" v-model="formData.loan_state"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/loan_records.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'loan_records';

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
        "user_id": "",
        "bank": "",
        "loanAmount": null,
        "loanPurpose": "",
        "createdTime": null,
        "loan_com_id": "",
        "loan_state": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
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
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("user_id,bank,loanAmount,loanPurpose,createdTime,loan_com_id,loan_state").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
