<template>
  <view>
    <view class="uni-header">
      <view class="uni-group">
        <view class="uni-title"></view>
        <view class="uni-sub-title"></view>
      </view>
	  <view>
	  	<button class="update-button" type="warn" size="mini" @click="updateAllRefundStates">点我更新还款状态</button>
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
      <unicloud-db ref="udb" :collection="collectionList" field="ref_loa_id,ref_time,ref_state,ref_act_time" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options" loadtime="manual" @load="onqueryload">
        <uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
            <!-- <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'ref_loa_id')" sortable @sort-change="sortChange($event, 'ref_loa_id')">ref_loa_id</uni-th> -->
            <uni-th align="center">还款用户</uni-th>
			<uni-th align="center">企业名称</uni-th>
			<uni-th align="center">银行名称</uni-th>
			<uni-th align="center">应还款金额</uni-th>
			<uni-th align="center" filter-type="timestamp" @filter-change="filterChange($event, 'ref_time')" sortable @sort-change="sortChange($event, 'ref_time')">应还款时间</uni-th>
            <uni-th align="center" filter-type="timestamp" @filter-change="filterChange($event, 'ref_act_time')" sortable @sort-change="sortChange($event, 'ref_act_time')">实际还款时间</uni-th>
            <uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'ref_state')" sortable @sort-change="sortChange($event, 'ref_state')">状态</uni-th>
			<uni-th align="center">操作</uni-th>
          </uni-tr>
		  
          <uni-tr v-for="(item,index) in records" :key="index">
			<uni-td align="center">{{item.username}}</uni-td>
			<uni-td align="center">{{item.com_name}}</uni-td>
			<uni-td align="center">{{item.bank}}</uni-td>
			<uni-td align="center">{{item.loanAmount}}</uni-td>
            <uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.ref_time"></uni-dateformat>
            </uni-td>
			<uni-td align="center">
              <uni-dateformat :threshold="[0, 0]" :date="item.ref_act_time"></uni-dateformat>
            </uni-td>
            <uni-td align="center">{{statusMap[item.ref_state]}}</uni-td>
            
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">修改</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
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
  import { enumConverter, filterToWhere } from '../../js_sdk/validator/refund.js';

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
        collectionList: "refund",
        query: '',
		records: [],
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
          "filename": "refund.xls",
          "type": "xls",
          "fields": {
            "ref_loa_id": "ref_loa_id",
            "ref_time": "ref_time",
            "ref_state": "ref_state",
            "ref_act_time": "ref_act_time"
          }
        },
		statusMap: {
			0: '待还款',
			1: '已还款',
			2: '已逾期',
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
		async fetchAllRefundRecords() {
		  this.loading = true;
		  
		  try {
		    const res = await uniCloud.callFunction({
		      name: 'getRefund',
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
			  // console.log('Hello:',res.result.data)
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
		//检查状态判断是逾期还是已还款
		async updateAllRefundStates() {
		      try {
		        const db = uniCloud.database();
		        let skip = 0;
		        const limit = 50; // 每次读取的记录数量，避免数据量过大导致性能问题
		
		        let hasMore = true;
		
		        while (hasMore) {
		          // 分批次获取 refund 表中的数据
		          const res = await db.collection('refund')
		            .skip(skip)
		            .limit(limit)
		            .get();
					console.log("zheshi:",res);
		
		          if (res.result.data.length > 0) {
		            // 遍历每一条记录
		            for (let record of res.result.data) {
		              const { _id, ref_act_time, ref_time } = record;
					  console.log(record);
		
		              let newState;
		
		              // 检查 ref_act_time 是否有值
		              if (ref_act_time) {
		                newState = '1'; // 已还款
		              } else {
						const currentTime = Date.now();
		
		                if (currentTime > ref_time) {
		                  newState = '2'; // 已逾期
		                } else {
		                  newState = '0'; // 未还款
		                }
		              }
		
		              // 更新 ref_state
		              await db.collection('refund')
		                .doc(_id)
		                .update({
		                  ref_state: newState,
		                });
		            }
		
		            // 更新游标位置，继续处理下一批数据
		            skip += limit;
		          } else {
		            hasMore = false; // 如果没有更多数据，退出循环
		          }
		        }
		
		        uni.showToast({
		          title: '状态批量更新成功',
		          icon: 'success',
		        });
		      } catch (error) {
		        console.error('批量更新失败:', error);
		        uni.showToast({
		          title: '批量更新失败',
		          icon: 'none',
		        });
		      }
		    },
		  onqueryload(data) {
		    this.exportExcelData = data;
		    // this.filterRecords(); // 过滤记录
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
		    this.fetchAllRefundRecords();
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
	          this.fetchAllRefundRecords();
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
		this.fetchAllRefundRecords();
	}
  }
</script>

<style lang="scss" scoped>
.update-button {
  padding: 10px 20px;
  background-color: #409EFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.update-button:hover {
  background-color: #66b1ff;
}
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
