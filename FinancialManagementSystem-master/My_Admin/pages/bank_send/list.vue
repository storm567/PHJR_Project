<template>
  <view>
    <view class="uni-header">
      <view class="uni-group">
        <view class="uni-title"></view>
        <view class="uni-sub-title"></view>
      </view>
	  <view class="search-container">
	    <!-- 下拉框 -->
	    <uni-data-select
	      v-model="selectedCompany"
	      :localdata="companyOptions"
	      placeholder="请选择公司名称"
	      class="search-select"
	    />
	    <button class="uni-button-search" type="primary" size="mini" @click="search">搜索</button>
	  </view>
	  
      <view class="uni-group">
        <!-- <input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" /> -->
        <!-- <button class="uni-button" type="default" size="mini" @click="search">搜索</button> -->
        <button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button>
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
        <download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData" :type="exportExcel.type" :name="exportExcel.filename">
          <button class="uni-button" type="primary" size="mini">导出 Excel</button>
        </download-excel>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" :collection="collectionList" field="user_id,bank,loanAmount,loanPurpose,createdTime,loan_com_id,loan_state" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'user_id')" sortable @sort-change="sortChange($event, 'user_id')">用户名称</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'bank')" sortable @sort-change="sortChange($event, 'bank')">银行名称</uni-th>
            <uni-th align="center" filter-type="range" @filter-change="filterChange($event, 'loanAmount')" sortable @sort-change="sortChange($event, 'loanAmount')">贷款金额</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'loanPurpose')" sortable @sort-change="sortChange($event, 'loanPurpose')">贷款目的</uni-th>
            <uni-th align="center" filter-type="timestamp" @filter-change="filterChange($event, 'createdTime')" sortable @sort-change="sortChange($event, 'createdTime')">申请时间</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'loan_com_id')" sortable @sort-change="sortChange($event, 'loan_com_id')">企业名称</uni-th>
            <!-- <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'loan_state')" sortable @sort-change="sortChange($event, 'loan_state')">贷款状态</uni-th> -->
            <!-- <uni-th align="center">操作</uni-th> -->
          </uni-tr>
          <uni-tr v-for="(item,index) in filteredRecords" :key="index">
            <uni-td align="center">{{item.username}}</uni-td>
            <uni-td align="center">{{item.bank}}</uni-td>
            <uni-td align="center">{{item.loanAmount}}</uni-td>
            <uni-td align="center">{{item.loanPurpose}}</uni-td>
            <uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.createdTime"></uni-dateformat>
            </uni-td>
            <uni-td align="center">{{item.com_name}}</uni-td>
            <!-- <uni-td align="center">{{ statusMap[item.loan_state] }}</uni-td> -->
            <!-- <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">修改</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
				<button v-if="item.loan_state == 0" @click="navigateTo('./approval?id='+item._id, false)" class="uni-button" size="mini" type="default">审批</button>
              </view>
            </uni-td> -->
          </uni-tr>
        </uni-table>
        <view class="uni-pagination-box">
          <uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current" :total="pagination.count" @change="onPageChanged" />
        </view>
      </unicloud-db>
    </view>
  </view>
</template>

<script>
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/loan_records.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
  // 分页配置
  const pageSize = 20
  const pageCurrent = 1

  const orderByMapping = {
    "ascending": "asc",
    "descending": "desc"
  }

  export default {
    data() {
      return {
        collectionList: "loan_records",
        query: '',
		records: [],
		filteredRecords: [], // 过滤后的数据
		selectedCompany: '', // 默认值设为空
		companyOptions: [], // 下拉框中显示的公司名称选项
		errorMsg: '',
		loading: false,
        where: '',
        orderby: dbOrderBy,
        orderByFieldName: "",
        selectedIndexs: [],
        // options: {
        //   pageSize,
        //   pageCurrent,
        //   filterData: {},
        //   ...enumConverter
        // },
		options: {
		  pageSize: 20,
		  pageCurrent: 1,
		},
		pagination: {
		  size: 20,
		  current: 1,
		  count: 0,
		},
        imageStyles: {
          width: 64,
          height: 64
        },
        exportExcel: {
          "filename": "loan_records.xls",
          "type": "xls",
          "fields": {
            "user_id": "user_id",
            "bank": "bank",
            "loanAmount": "loanAmount",
            "loanPurpose": "loanPurpose",
            "createdTime": "createdTime",
            "loan_com_id": "loan_com_id",
            "loan_state": "loan_state"
          }
        },
		statusMap: {
			0: '未审批',
			1: '平台已通过',
			2: '平台已驳回',
			3: '银行已审核并放款',
			4: '银行已驳回' ,
		},
        exportExcelData: []
      }
    },
    onLoad() {
      this._filter = {}
    },
    onReady() {
      this.$refs.udb.loadData()
    },
    methods: {
		async fetchCompanyNames() {
		  try {
		    const res = await uniCloud.callFunction({
		      name: 'getCompanyNames',
		    });
		    if (res.result.code === 200) {
		      // 将公司名称转换为下拉框选项的格式
		      this.companyOptions = res.result.data.map(name => ({
		        value: name,
		        text: name,
		      }));
		      // 添加“全部”选项
		      this.companyOptions.unshift({ value: '', text: '全部' });
			  // 打印检查companyOptions
			  console.log('companyOptions:', this.companyOptions);
		    } else {
		      console.error('获取公司名称失败:', res.result.msg);
		    }
		  } catch (error) {
		    console.error('云函数调用错误:', error);
		  }
		},
		// 获取贷款记录
		async fetchAllLoanRecords() {
		  this.loading = true;
		  
		  try {
		    const res = await uniCloud.callFunction({
		      name: 'getAllLoanRecords',
		      data: {
		        comName: this.selectedCompany, // 传入选择的公司名称
		        pageSize: this.pagination.size,
		        pageCurrent: this.pagination.current,
		      },
		    });
		    if (res.result.code === 200) {
		      this.records = res.result.data;
		      this.pagination.count = res.result.total;
			  this.exportExcelData = res.result.data;
			  console.log('Hello:',res.result.data)
			  this.filterRecords();
		    } else {
		      this.errorMsg = res.result.msg || '加载失败';
		    }
		  } catch (error) {
		    this.errorMsg = '云函数调用失败:没有记录';
		    console.error('云函数调用错误:', error);
		  } finally {
		    this.loading = false;
		  }
		},
		// async fetchLoanRecords() {
		//   this.loading = true;
		//   try {
		//     const res = await uniCloud.callFunction({
		//       name: 'getLR', // 确保云函数名称正确
		//       data: {
		//         query: this.query,
		//         pageSize: this.options.pageSize,
		//         pageCurrent: this.pagination.current,
		//       },
		//     });
		
		//     if (res.result.code === 200) {
		//       this.records = res.result.data;
		//       this.pagination.count = res.result.total;
		//       this.exportExcelData = res.result.data; // 用于导出
		//     } else {
		//       this.errorMsg = res.result.msg || '加载失败';
		//     }
		//   } catch (error) {
		//     this.errorMsg = '云函数调用失败';
		//     console.error('云函数调用错误:', error);
		//   } finally {
		//     this.loading = false;
		//   }
		// },
		filterRecords() {
		    console.log('原始记录:', this.records); // 输出原始记录以供调试
		    // 过滤出 loan_state 为 '0', '1', '2' 的记录
		    this.filteredRecords = this.records.filter(item => {
		      const state = item.loan_state; // 确保是字符串类型
		      console.log('处理中的 loan_state:', state); // 调试输出 loan_state
		      return ['3'].includes(state); // 使用字符串进行比较
		    });
		    console.log('过滤后的记录:', this.filteredRecords); // 输出过滤后的记录以供调试
		  },
		  onqueryload(data) {
		    this.exportExcelData = data;
		    this.filterRecords(); // 过滤记录
		  },
		  getWhere() {
			const query = this.query.trim()
			if (!query) {
			  return ''
			}
			const queryRe = new RegExp(query, 'i')
			return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
		  },
		 //  search() {
			// const newWhere = this.getWhere()
			// this.where = newWhere
			// this.$nextTick(() => {
			//   this.loadData()
			// })
		 //  },
		  // 搜索操作
		  search() {
		    this.fetchAllLoanRecords();
		  },
		  loadData(clear = true) {
			this.$refs.udb.loadData({
			  clear
			})
		  },
		  onPageChanged(e) {
			this.selectedIndexs.length = 0
			this.$refs.table.clearSelection()
			this.$refs.udb.loadData({
			  current: e.current
			})
		  },
      // navigateTo(url, clear) {
      //   // clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
      //   uni.navigateTo({
      //     url,
      //     events: {
      //       refreshData: () => {
      //         this.loadData(clear)
      //       }
      //     }
      //   })
      // },
	  navigateTo(url, clear = true) {
	    uni.navigateTo({
	      url,
	      events: {
	        refreshData: () => {
	          this.fetchLoanRecords();
	        },
	      },
	    });
	  },
      // 多选处理
      selectedItems() {
        var dataList = this.$refs.udb.dataList
        return this.selectedIndexs.map(i => dataList[i]._id)
      },
      // 批量删除
      delTable() {
        this.$refs.udb.remove(this.selectedItems(), {
          success:(res) => {
            this.$refs.table.clearSelection()
          }
        })
      },
      // 多选
      selectionChange(e) {
        this.selectedIndexs = e.detail.index
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id, {
          success:(res) => {
            this.$refs.table.clearSelection()
          }
        })
      },
      sortChange(e, name) {
        this.orderByFieldName = name;
        if (e.order) {
          this.orderby = name + ' ' + orderByMapping[e.order]
        } else {
          this.orderby = ''
        }
        this.$refs.table.clearSelection()
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      },
      filterChange(e, name) {
        this._filter[name] = {
          type: e.filterType,
          value: e.filter
        }
        let newWhere = filterToWhere(this._filter, db.command)
        if (Object.keys(newWhere).length) {
          this.where = newWhere
        } else {
          this.where = ''
        }
        this.$nextTick(() => {
          this.$refs.udb.loadData()
        })
      }
    },
	mounted() {
		// this.fetchLoanRecords();
		this.fetchCompanyNames();
		this.fetchAllLoanRecords();
	}
  }
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  width: 50%;
  gap: 10px;
  margin-right:50px;
  margin-left:50px;
  margin-bottom: 10px;
}
.search-select {
  flex: 1;
  margin-top:20px;
}
.uni-button-search{
  margin-top:20px;
}
</style>
