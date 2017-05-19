﻿var obj = {
  //采购单状态
  purchaseOrderStatus: {
    '-1': '已关闭',
    // 0: '未提交',
    1: '待审核',
    // 2: '审核中',
    3: '已审核',
    6: '已完成',
    16: '部分完成'
  },
  //采购单审核状态，销售单审核状态
  purchaseOrderAuditStatus: {
    1: '待审核',
    2: '审核中',
    4: '审核否决',
    5: '已审核'
  },
  //审核状态
  auditStatus: {
    1: '待审核',
    2: '审核中',
    4: '审核否决',
    5: '已审核'
  },
  //支付类型
  payType: {
    1: '现金',
    2: '电汇',
    3: '网上银行',
    4: '现金支票',
    5: '转账支票',
    6: '银行汇票',
    7: '承兑汇票'
  },
  prePayType: {
    4: '预付款',
    11: '返利',
    12: '余额'
  },
  //余额类型，充值处用到
  cashType: {
    11: '返利',
    12: '余额',
    13: '额度',
  },
  //付款类型
  payedType: {
    0: '采购退货',
    1: '采购',
    2: '手工付款'
  },
  //付款状态
  payedStatus: {
    0: '待付款',
    1: '部分付款',
    2: '已付款'
  },
  //付款状态
  proceedsStatus: {
    0: '待收款',
    1: '部分收款',
    2: '已收款'
  },
  //通用财务单据类型
  financeBillType: {
    1: '采购',
    2: '采购退货',
    3: '销售',
    4: '销售退货',
    11: '返利充值',
    12: '余额充值',
    13: '额度充值',
    23: '额度归还',
  },
  //客户对账单单据类型
  customerBillType: {
    1: '销售出库',
    2: '实际收款',
    0: '销售退货',
    3: '客户调剂'
  },
  //是否含票
  receipt: {
    1: '是',
    0: '否'
  },
  //发票状态
  receiptStatus: {
    0: '未开票',
    1: '部分开票',
    2: '已开票'
  },
  customerOrigin: {
    0: '系统添加',
    1: 'B2B'
  },
  isOrNo: {
    0: '否',
    1: '是'
  },
  //审核类型
  flowType: {
    1: '采购单',
    11: '采购退货单',
    21: '销售单',
    31: '销售退货单',
    41: '调拨单',
    61: '调剂单',
    71: '借出归还单',
    111: '返利充值',
    112: '现金充值',
    113: '额度充值',
  },
  //单据流状态
  flowStatus: {
    0: '添加',
    1: '修改',
    2: '审核',
    3: '打印',
    4: '删除',
    7: '调出',
    8: '调入',
  },
  //用户状态
  userStatus: {
    '3': '正常',
    '1': '冻结',
    '2': '受限'
  },
  //调剂类型
  transferType: {
    0: '客户调剂',
    1: '平台调剂'
  },
  //借机状态
  borrowStatus: {
    0: '未借出',
    1: '已借出',
    2: '已归还'
  },
  //串号标准
  SNStandard: {
    0: '无',
    1: '1机1串',
    2: '1机2串',
    3: '1机3串',
  },
  //串号状态
  SNStatus: {
    0: '采购退货',
    1: '采购入库',
    2: '销售出库',
    3: '调拨出库',
    6: '零售出库',
    11: '调拨入库',
    12: '零售退货',
    21: '销售退货',
    31: '借机归还',
    4: '借机出库',
    40: '售后旧机',
    41: '售后新机'
  },
  //加权调价类型
  priceAvgType: {
    3: '采购',
    13: '采购退',
    23: '销售',
    33: '销售退',
    43: '调拨出',
    53: '调拨入',
    81: '成本调整',
  },
  //分仓属性
  storeType: {
    1: '商品仓',
    2: '残次品',
    3: '售后'
  },
  storeAttr: {
    1: '采购',
    2: '销售',
    3: '调出',
    11: '调入'
  },
  storageAttr: {
    forPurchase: 1, //商品仓
    forDefective: 2, //残次品
    forAfterSale: 3 //售后
  },

};

module.exports = obj;
