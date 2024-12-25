<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="sen_bank_id" label="">
        <uni-easyinput placeholder="银行id" v-model="formData.sen_bank_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_cart_id" label="">
        <uni-easyinput placeholder="贷款id" v-model="formData.sen_cart_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_com_id" label="">
        <uni-easyinput placeholder="企业id" v-model="formData.sen_com_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_uname" label="">
        <uni-easyinput placeholder="放款用户姓名" v-model="formData.sen_uname"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_money" label="">
        <uni-easyinput placeholder="放款金额" v-model="formData.sen_money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_mode" label="">
        <uni-easyinput placeholder="放款方式 1，线上 2，线下" v-model="formData.sen_mode"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sen_status" label="">
        <uni-easyinput placeholder="放款状态 1，已发放 2，未发放" v-model="formData.sen_status"></uni-easyinput>
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
  import { validator } from '../../js_sdk/validator/bank_send.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'bank_send';

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
        "sen_bank_id": "",
        "sen_cart_id": "",
        "sen_com_id": "",
        "sen_uname": "",
        "sen_money": "",
        "sen_mode": "",
        "sen_status": ""
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
        db.collection(dbCollectionName).doc(id).field("sen_bank_id,sen_cart_id,sen_com_id,sen_uname,sen_money,sen_mode,sen_status").get().then((res) => {
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
