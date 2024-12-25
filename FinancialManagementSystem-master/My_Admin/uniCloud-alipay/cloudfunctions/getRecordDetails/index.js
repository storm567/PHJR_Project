// 云函数：getRecordDetails
'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
  const { recordId } = event;

  try {
    // 查询 loan_records 表中的记录
    const loanRecordRes = await db.collection('loan_records').doc(recordId).get();

    if (loanRecordRes.data.length === 0) {
      return {
        code: 404,
        msg: '记录未找到',
      };
    }

    const loanRecord = loanRecordRes.data[0];

    // 根据 user_id 查询 idcard 表中的 username
    const idcardRes = await db.collection('idcard').where({ user_id: loanRecord.user_id }).get();
    const username = idcardRes.data.length > 0 ? idcardRes.data[0].username : '';

    // 根据 user_id 查询 user_com 表中的 com_id
    const userComRes = await db.collection('user_com').where({ user_id: loanRecord.user_id }).get();
    const com_id = userComRes.data.length > 0 ? userComRes.data[0].com_id : '';

    // 根据 com_id 查询 company 表中的 com_name
    const companyRes = await db.collection('company').where({ _id: com_id }).get();
    const com_name = companyRes.data.length > 0 ? companyRes.data[0].com_name : '';

    // 将 username 和 com_name 添加到 loanRecord 中
    loanRecord.username = username;
    loanRecord.com_name = com_name;

    return {
      code: 200,
      data: loanRecord,
    };
  } catch (error) {
    return {
      code: 500,
      msg: '数据库查询失败',
      error,
    };
  }
};