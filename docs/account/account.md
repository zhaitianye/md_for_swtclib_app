## 请求账号信息

### 类型 

GET 

### 描述

请求账号信息


### 请求地址
```
{{host}}/account/:account/info
```

### 参数说明

#### 参数介绍

| 参数    | 类型   | 说明         |
|---------|--------|------------|
| account | String | 井通钱包地址 |

#### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account_data": {
            "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
            "Balance": "760169232",
            "Flags": 0,
            "LedgerEntryType": "AccountRoot",
            "OwnerCount": 8,
            "PreviousTxnID": "A749406C4510BF857548B463D6C11D337B64AF9D564EA5E30C6FAF170D77FEC3",
            "PreviousTxnLgrSeq": 14507953,
            "Sequence": 4129,
            "index": "AE6D3CDFAE02DB31C48C784932FEE86709D554F1FB5E86D7636A2858D396130E"
        },
        "ledger_hash": "5339FFB91BA077BF6E0B198EAD7D6DD410C14906D47AE5CFA11A9F2D45C3361A",
        "ledger_index": 14508309,
        "validated": true
    }
}
```
#### 返回值解析

| 参数                                | 类型    | 说明                                  |
|-------------------------------------|---------|---------------------------------------|
| success                             | Boolean | 此次请求是否成功                      |
| msg                                 | String  | 返回的信息                            |
| code                                | Integer | 服务器返回的请求状态码                |
| data                                | Object  | SWTC-LIB 返回的数据                   |
| data.account_data                   | Object  | 账号信息                              |
| data.account_data.Account           | String  | 钱包地址                              |
| data.account_data.Balance           | String  | swt 数量                              |
| data.account_data.Domain            | String  | 域名                                  |
| data.account_data.Flags             | Integer | 属性标志                              |
| data.account_data.MessageKey        | String  | 公共密钥，用于发送加密的邮件到这个帐户 |
| data.account_data.OwnerCount        | Integer | 用户拥有的挂单数和信任线数量的总和    |
| data.account_data.PreviousTxnID     | String  | 操作该帐号的上一笔交易 hash           |
| data.account_data.PreviousTxnLgrSeq | Integer | 该帐号上一笔交易所在的账本号          |
| data.account_data.RegularKey        | String  | RegularKey                            |
| data.account_data.Sequence          | Integer | 账号当前序列号                        |
| data.account_data.TransferRate      | Integer | 手续费汇率                            |
| data.account_data.index             | String  | 该数据所在索引 hash                   |
| data.ledger_hash                    | String  | 账本 hash                             |
| data.ledger_index                   | Integer | 账本高度                              |
| data.validated                      | Boolean | 交易是否通过验证                      |

## 请求账号余额信息

#### 类型 

GET 

#### 描述

请求账号信息


#### 请求地址
```
{{host}}/account/:account/balances
```

#### 参数说明

#### 参数介绍

| 参数     | 类型    | 说明             |
|----------|---------|----------------|
| account  | String  | 井通钱包地址     |
| currency | String? | 特定的币种       |
| issuer   | String? | 特定币种的发行商 |


#### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "balances": [
            {
                "value": "760.169232",
                "currency": "SWT",
                "issuer": "",
                "freezed": "60.000000"
            },
            {
                "value": "97.000000",
                "currency": "TFG",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "freezed": "0.000000"
            },
            {
                "value": "11.000000",
                "currency": "JSLASH",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "freezed": "0.000000"
            },
            ......
        ],
        "sequence": 4129
    }
}
```
#### 返回值解析

| 参数                      | 类型    | 说明                   |
|---------------------------|---------|----------------------|
| success                   | Boolean | 此次请求是否成功       |
| msg                       | String  | 返回的信息             |
| code                      | Integer | 服务器返回的请求状态码 |
| data                      | Object  | SWTC-LIB 返回的数据    |
| data.balances             | Array   | 余额信息的数组         |
| data.balances[n].value    | String  | 余额，小数点后六位      |
| data.balances[n].currency | String  | 币种                   |
| data.balances[n].issuer   | String  | 发行商                 |
| data.balances[n].freezed  | String  | 冻结数，小数点后六位    |
| data.sequence             | Integer  | 账户当前可用的sequence |

## 获得账号交易列表

#### 类型 

GET 

#### 描述

获得账号交易列表


#### 请求地址
```
{{host}}/account/:account/tx
```

#### 参数说明

#### 参数介绍

| 参数          | 类型    | 说明                                                       |
|---------------|---------|----------------------------------------------------------|
| account       | String  | 井通钱包地址                                               |
| limit         | String? | 查询多少条(默认20,最大值200)                               |
| forward       | String? | 按交易时间排序，固定的两个值：asc(升序)、desc(降序)(默认desc) |
| marker_ledger | String? | 上一个查询的marker.ledger这里起到分页的作用                |
| marker_seq    | String? | 上一个查询的marker.seq这里起到分页的作用                   |


#### 返回值示例

```JSON
{
    "success": true,
    "msg": "获取交易列表成功",
    "code": 0,
    "data": {
        "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
        "ledger_index_max": 14508365,
        "ledger_index_min": 266955,
        "limit": 1,
        "marker": {
            "ledger": 14264153,
            "seq": 8
        },
        "transactions": [
            {
                "date": 1572485910,
                "hash": "3B0B6C9E5FAB5172F67C2E431D286DED6123418DEF5050EC7BD95337AB80CEED",
                "type": "received",
                "fee": "0.01",
                "result": "tesSUCCESS",
                "memos": [
                    {
                        "MemoData": "remark=测试"
                    }
                ],
                "counterparty": "jLamHt9mBcoiaAjf5huKuX5iFnrNPfBpWV",
                "amount": {
                    "currency": "TFG",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "100"
                },
                "effects": [],
                "balances": {
                    "TFG": 100
                },
                "balancesPrev": {
                    "TFG": 0
                }
            }
        ]
    }
}
```
#### 返回值解析

| 参数                                 | 类型    | 说明                         |
|--------------------------------------|---------|----------------------------|
| success                              | Boolean | 此次请求是否成功             |
| msg                                  | String  | 返回的信息                   |
| code                                 | Integer | 服务器返回的请求状态码       |
| data                                 | Object  | SWTC-LIB 返回的数据          |
| data.account                         | String  | 钱包地址                     |
| data.ledger_index_max                | Integer | 当前节点缓存的账本区间最大值 |
| data.ledger_index_min                | Integer | 当前节点缓存的账本区间最小值 |
| data.marker                          | Object  | 查到的当前记录标记           |
| data.transactions                    | Array   | 交易记录列表                 |
| data.transactions[n].date            | Integer | 时间戳                       |
| data.transactions[n].hash            | String  | 交易hash                     |
| data.transactions[n].type            | String  | 交易类型                     |
| data.transactions[n].fee             | String  | 手续费                       |
| data.transactions[n].result          | String  | 交易结果                     |
| data.transactions[n].memos           | Array   | 备注                         |
| data.transactions[n].counterparty    | String  | 交易对家                     |
| data.transactions[n].amount          | Object  | 交易金额对象                 |
| data.transactions[n].amount.value    | String  | 金额                         |
| data.transactions[n].amount.currency | String  | 货币种类                     |
| data.transactions[n].amount.issuer   | String  | 货币                         |
| data.transactions[n].effects         | Array   | 交易效果                     |
