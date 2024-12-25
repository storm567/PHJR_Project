'use strict';

// 云函数入口函数
exports.main = async (event, context) => {
  const db = uniCloud.database();
  const $ = db.command.aggregate;

  try {
    const res = await db.collection('loan_records')
      .aggregate()
      // 第一次联表，查找 idcard 表中的 username
      .lookup({
        from: 'idcard',
        localField: 'user_id', // loan_records 表中的 user_id
        foreignField: 'user_id',   // idcard 表中的 _id
        as: 'userData'         // 返回的数据别名为 userData
      })
      // 第二次联表，查找 user_com 表中的 com_id
      .lookup({
        from: 'user_com',
        localField: 'user_id', // loan_records 表中的 user_id
        foreignField: 'user_id', // user_com 表中的 user_id
        as: 'userComData'      // 返回的数据别名为 userComData
      })
      // 第三次联表，查找 company 表中的 com_name
      .lookup({
        from: 'company',
        localField: 'userComData.com_id', // userComData 中的 com_id
        foreignField: '_id',    // company 表中的 _id
        as: 'companyData'       // 返回的数据别名为 companyData
      })
      // 添加投影阶段，提取所需字段
      .project({
        user_id: 1,
        bank: 1,
        loanAmount: 1,
        loanPurpose: 1,
        createdTime: 1,
        loan_com_id: 1,
        loan_state: 1,
        username: $.arrayElemAt(['$userData.username', 0]), // 提取 username
        com_name: $.arrayElemAt(['$companyData.com_name', 0]) // 提取 com_name
      })
      .end();

    return {
      code: 200,
      msg: '查询成功',
      data: res.data
    };
  } catch (err) {
    return {
      code: 500,
      msg: '查询失败',
      error: err.message
    };
  }
};
