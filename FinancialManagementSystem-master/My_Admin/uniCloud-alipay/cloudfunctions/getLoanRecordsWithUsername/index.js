'use strict';

// 云函数入口函数
exports.main = async (event, context) => {
  const db = uniCloud.database(); // 获取数据库实例
  const $ = db.command.aggregate; // 使用聚合操作符

  try {
    // 联表查询，将 loan_records 表中的 user_id 和 idcard 表中的 _id 进行关联
    const res = await db.collection('loan_records')
      .aggregate()
      .lookup({
        from: 'idcard',              // 关联的目标表
        localField: 'user_id',       // loan_records 表中的字段
        foreignField: 'user_id',         // idcard 表中的字段
        as: 'user'                   // 查询结果存放到 user 字段中
      })
      .project({
        user_id: 1,
        bank: 1,
        loanAmount: 1,
        loanPurpose: 1,
        createdTime: 1,
        loan_com_id: 1,
        loan_state: 1,
        username: $.arrayElemAt(['$user.username', 0]) // 提取 username 字段
      })
      .end();

    // 返回查询结果
    return {
      code: 200,
      msg: '查询成功',
      data: res.data
    };
  } catch (err) {
    // 捕获并返回错误信息
    return {
      code: 500,
      msg: '查询失败',
      error: err.message
    };
  }
};
