<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="ove_com_no" label="">
        <uni-easyinput placeholder="企业编号" v-model="formData.ove_com_no"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ove_loa_id" label="">
        <uni-easyinput placeholder="贷款ID" v-model="formData.ove_loa_id"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ove_money" label="">
        <uni-easyinput placeholder="逾期金额" type="number" v-model="formData.ove_money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ove_start_time" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.ove_start_time"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="ove_last_time" label="">
        <uni-datetime-picker return-type="timestamp" v-model="formData.ove_last_time"></uni-datetime-picker>
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
  import { validator } from '../../js_sdk/validator/overdue.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'overdue';

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
        "ove_com_no": "",
        "ove_loa_id": "",
        "ove_money": null,
        "ove_start_time": null,
        "ove_last_time": null
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
        db.collection(dbCollectionName).doc(id).field("ove_com_no,ove_loa_id,ove_money,ove_start_time,ove_last_time").get().then((res) => {
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
