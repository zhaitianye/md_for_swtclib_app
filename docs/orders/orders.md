## 请求市场挂单列表

### 类型 

GET 

### 描述

请求市场挂单列表


### 请求地址
```
{{host}}/order/:gets/:pays
```
### 参数说明
    
 gets为获得的通证，pay为支付的通证。

 如通证类型为SWT，则写为 SWT。

 如通证类型为其他类型，则写为 通证+发行方 如：CNY+jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or。

#### 参数介绍

| 参数  | 位置  | 类型    | 说明                    |
|-------|-------|---------|-----------------------|
| gets  | Path  | String  | 对方获得的通证          |
| pays  | Path  | String  | 对方支付的通证          |
| limit | Query | String? | 数量限制,默认10，最大300 |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "ledger_current_index": 15407436,
        "offers": [
            {
                "Account": "jnDxurT612cB8YDL38wkVtgf1CRwDtsLCh",
                "BookDirectory": "494FB30D9606C4D2741B349EB1B178099B51EE17EFA9D6DB4C08471F65BB097F",
                "BookNode": "0000000000000000",
                "Flags": 131072,
                "LedgerEntryType": "Offer",
                "OwnerNode": "0000000000000000",
                "PreviousTxnID": "9D04D7244E14CAB9AE75D0B9252E73DBA6BA8655C0E906E840236CA7BC854761",
                "PreviousTxnLgrSeq": 15407385,
                "Sequence": 9421,
                "TakerGets": "297007425296",
                "TakerPays": {
                    "currency": "CNY",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "692.0272979696057"
                },
                "index": "CD027F6071A3EC44763263EDDF7F9FCFDCA1BFDA616F15FC8AFDC354DD77CBF4",
                "owner_funds": "297093425256",
                "quality": "0.000000002329999989999999"
            },
            {
                "Account": "jBhhPhVEp6gNGyP57chpxYeJpPsguxZsUp",
                "BookDirectory": "494FB30D9606C4D2741B349EB1B178099B51EE17EFA9D6DB4C08471F6653A000",
                "BookNode": "0000000000000000",
                "FeeCurrency": "CNY",
                "Flags": 131072,
                "LedgerEntryType": "Offer",
                "OfferFeeRateDen": "00000000000003E8",
                "OfferFeeRateNum": "0000000000000002",
                "OwnerNode": "0000000000000000",
                "Platform": "jDXCeSHSpZ9LiX6ihckWaYDeDt5hFrdTto",
                "PreviousTxnID": "CA42A926A4BABDA1FCFAAF1AFBB476E2BA514704F9ADA994C17C65D7761C33EF",
                "PreviousTxnLgrSeq": 15407170,
                "Sequence": 137,
                "TakerGets": "3610979975545",
                "TakerPays": {
                    "currency": "CNY",
                    "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                    "value": "8413.58334301985"
                },
                "index": "6A465F6DDCF150C3838A8F2B8851C6A3FD194450B0CD22E4EE92DC979AE5DF93",
                "owner_funds": "10714556208026",
                "quality": "0.00000000233"
            }
        ],
        "validated": true
    }
}
```
### 返回值解析

| 参数                              | 类型           | 说明                                                            |
|-----------------------------------|----------------|-----------------------------------------------------------------|
| success                           | Boolean        | 此次请求是否成功                                                |
| msg                               | String         | 返回的信息                                                      |
| code                              | Integer        | 服务器返回的请求状态码                                          |
| data                              | Object         | SWTC-LIB 返回的数据                                             |
| data.ledger_current_index         | String         | 当前账本号                                                      |
| data.offers                       | Array          | 市场挂单列表                                                    |
| data.offers[n].Account            | Integer        | 账号地址                                                        |
| data.offers[n].BookDirectory      | String         | --                                                              |
| data.offers[n].BookNode           | String         | --                                                              |
| data.offers[n].FeeCurrency        | String         | 收费币种                                                        |
| data.offers[n].Flags              | Integer        | 挂单买卖标记                                                    |
| data.offers[n].LedgerEntryType    | String         | 账本数据结构类型，Offer表示挂单类                                |
| data.offers[n].OfferFeeRateDen    | String         | 手续费收取比例-分子                                             |
| data.offers[n].OfferFeeRateNum    | String         | 手续费收取比例-分母                                             |
| data.offers[n].OwnerNode          | Array          | --                                                              |
| data.offers[n].Platform           | String         | 平台账号，收取手续费平台的账号                                   |
| data.offers[n].PreviousTxnID      | String         | 上一笔交易hash                                                  |
| data.offers[n].PreviousTxnLgrSeq  | Integer        | 上一笔交易所在账本号                                            |
| data.offers[n].Sequence           | Integer        | 单子序列号                                                      |
| data.offers[n].TakerGets          | Object?String? | 对方得到的。(买卖双方，当货币是swt时，数据类型为string;否则为对象) |
| data.offers[n].TakerGets.value    | String         | 金额                                                            |
| data.offers[n].TakerGets.currency | String         | 货币种类                                                        |
| data.offers[n].TakerGets.issuer   | String         | 货币                                                            |
| data.offers[n].TakerPays          | Object?String? | 对方支付的。(买卖双方，当货币是swt时，数据类型为string;否则为对象) |
| data.offers[n].TakerPays.value    | String         | 金额                                                            |
| data.offers[n].TakerPays.currency | String         | 货币种类                                                        |
| data.offers[n].TakerPays.issuer   | String         | 货币                                                            |
| data.offers[n].index              | String         | 该数据所在索引hash                                              |
| data.offers[n].owner_funds        | String         | 用户swt资产                                                     |
| data.offers[n].quality            | String         | 价格或价格的倒数(1/价格)                                        |
| data.offers[n].validated          | Boolean        | 交易是否通过验证                                                |

## 挂单

### 类型 

POST 

### 描述

直接挂单到节点,挂单成功后可以 [请求账号挂单](../account/account.md#请求账号挂单) 去查询挂单信息


### 请求地址
```
{{host}}/order/entry
```

### 参数说明

#### 参数介绍

| 参数          | 位置 | 类型    | 说明                         |
|---------------|------|---------|----------------------------|
| account       | Body | String  | 发起账号                     |
| secret        | Body | String  | 发起账号私钥                 |
| platform      | Body | String? | 挂单平台账号(收取手续费账号) |
| type          | Body | String  | 买卖类型，固定值 Sell Buy     |
| gets          | Body | String  | 对方获得的                   |
| gets.value    | Body | String  | 金额                         |
| gets.currency | Body | String  | 币种                         |
| gets.issuer   | Body | String  | 发行方，无则留 ''             |
| pays          | Body | String  | 对方支付的                   |
| pays.value    | Body | String  | 金额                         |
| pays.currency | Body | String  | 币种                         |
| pays.issuer   | Body | String  | 发行方，无则留 ''             |


#### 参数示例

```JSON
{
    "account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
    "secret": "sXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "platform": "jMM6jsSTRc8ScovXSzFJPnSBjpwe5AAAAA",
    "type": "Sell",
    "gets": {
        "value": "1",
        "currency": "SWT",
        "issuer": ""
    },
    "pays": {
        "value": "0.00195",
        "currency": "CNY",
        "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or"
    }
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "engine_result": "tesSUCCESS",
        "engine_result_code": 0,
        "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
        "tx_blob": "12000722000800002400000C9D64D3C6ED83C14FE000000000000000000000000000434E590000000000A582E432BFC48EEDEF852C814EC57F3CD2D415966540000000000F4240684000000000000014732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE79974473045022100BA557E1D434B9CD8FDC0A49C01F28B1C1F809C22DF0C838B01BEA00DF2026D6F02201534E72D2487380BC07F2B657580D61E079C8077AC65B09DE7335DF12674DFF8811459A0172E3454FA1FA7FEED20E498308152C1FF688D14DF4C39D052BE75C916C5D11FBC3C19A0E8361C16",
        "tx_json": {
            "Account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
            "Fee": "20",
            "Flags": 524288,
            "Platform": "jMM6jsSTRc8ScovXSzFJPnSBjpwe5AAAAA",
            "Sequence": 3229,
            "SigningPubKey": "03FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE799",
            "TakerGets": "1000000",
            "TakerPays": {
                "currency": "CNY",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "value": "0.00195"
            },
            "TransactionType": "OfferCreate",
            "TxnSignature": "3045022100BA557E1D434B9CD8FDC0A49C01F28B1C1F809C22DF0C838B01BEA00DF2026D6F02201534E72D2487380BC07F2B657580D61E079C8077AC65B09DE7335DF12674DFF8",
            "hash": "25280B3124E8450BDB3ADB4D5F7B77F00685A83778C7BBAB2E32EF015F6439FA"
        }
    }
}
```
### 返回值解析

| 参数                            | 类型           | 说明                                                            |
|---------------------------------|----------------|---------------------------------------------------------------|
| success                         | Boolean        | 此次请求是否成功                                                |
| msg                             | String         | 返回的信息                                                      |
| code                            | Integer        | 服务器返回的请求状态码                                          |
| data                            | Object         | SWTC-LIB 返回的数据                                             |
| data.engine_result              | String         | 请求结果                                                        |
| data.engine_result_code         | Array          | 请求结果编码                                                    |
| data.engine_result_message      | String         | 请求结果 message 信息                                           |
| data.tx_blob                    | String         | 16 进制签名后的交易                                             |
| data.tx_json                    | Object         | 交易内容                                                        |
| data.tx_json.Account            | String         | 账号地址                                                        |
| data.tx_json.Fee                | String         | 交易费                                                          |
| data.tx_json.Flags              | Integer        | 交易标记                                                        |
| data.tx_json.Platform           | String         | 交易平台账号                                                    |
| data.tx_json.Sequence           | Integer        | 单子序列号                                                      |
| data.tx_json.SigningPubKey      | Object         | 签名公钥                                                        |
| data.tx_json.TakerGets          | Object?String? | 对方得到的。(买卖双方，当货币是SWT时，数据类型为string;否则为对象) |
| data.tx_json.TakerGets.value    | String         | 金额                                                            |
| data.tx_json.TakerGets.currency | String         | 货币种类                                                        |
| data.tx_json.TakerGets.issuer   | String         | 货币                                                            |
| data.tx_json.TakerPays          | Object?String? | 对方支付的。(买卖双方，当货币是SWT时，数据类型为string;否则为对象) |
| data.tx_json.TakerPays.value    | String         | 金额                                                            |
| data.tx_json.TakerPays.currency | String         | 货币种类                                                        |
| data.tx_json.TakerPays.issuer   | String         | 货币                                                            |
| data.tx_json.TransactionType    | String         | 交易类型                                                        |
| data.tx_json.TxnSignature       | String         | 交易签名                                                        |
| data.tx_json.hash               | String         | 交易 hash                                                       |

## 取消挂单

### 类型 

POST 

### 描述

取消未成交的挂单


### 请求地址
```
{{host}}/order/cancel
```

### 参数说明

#### 参数介绍

| 参数     | 位置 | 类型    | 说明                             |
|----------|------|---------|--------------------------------|
| account  | Body | String  | 发起账号                         |
| secret   | Body | String  | 发起账号私钥                     |
| sequence | Body | Integer | 挂单的标识，账号挂单列表里面的seq |


#### 参数示例

```JSON
{
    "account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
    "secret": "sXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "sequence": 3203
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "engine_result": "tesSUCCESS",
        "engine_result_code": 0,
        "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
        "tx_blob": "12000822000000002400000C9E201900000C83684000000000000014732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE7997446304402206D8AB57E01C4E6BEC0BA5C7C80319F73DD5A5DAFF2EF71790C4D81A00BCD96A60220374EFDC4257E158A88CB1020D80982EDD85A5A1301F77F89ED88FDD7C3822802811459A0172E3454FA1FA7FEED20E498308152C1FF68",
        "tx_json": {
            "Account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
            "Fee": "20",
            "Flags": 0,
            "OfferSequence": 3203,
            "Sequence": 3230,
            "SigningPubKey": "03FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE799",
            "TransactionType": "OfferCancel",
            "TxnSignature": "304402206D8AB57E01C4E6BEC0BA5C7C80319F73DD5A5DAFF2EF71790C4D81A00BCD96A60220374EFDC4257E158A88CB1020D80982EDD85A5A1301F77F89ED88FDD7C3822802",
            "hash": "F56C8E1FCB08DE11DCED38D82FCCD0E07D45F96FC555584C3D892EA017DEABA0"
        }
    }
}
```
### 返回值解析

| 参数                         | 类型    | 说明                   |
|------------------------------|---------|----------------------|
| success                      | Boolean | 此次请求是否成功       |
| msg                          | String  | 返回的信息             |
| code                         | Integer | 服务器返回的请求状态码 |
| data                         | Object  | SWTC-LIB 返回的数据    |
| data.engine_result           | String  | 请求结果               |
| data.engine_result_code      | Array   | 请求结果编码           |
| data.engine_result_message   | String  | 请求结果 message 信息  |
| data.tx_blob                 | String  | 16 进制签名后的交易    |
| data.tx_json                 | Object  | 交易内容               |
| data.tx_json.Account         | String  | 账号地址               |
| data.tx_json.Fee             | String  | 交易费                 |
| data.tx_json.Flags           | Integer | 交易标记               |
| data.tx_json.Sequence        | Integer | 单子序列号             |
| data.tx_json.SigningPubKey   | Object  | 签名公钥               |
| data.tx_json.TransactionType | String  | 交易类型               |
| data.tx_json.TxnSignature    | String  | 交易签名               |
| data.tx_json.hash            | String  | 交易 hash              |

## 设置挂单佣金

### 类型 

POST 

### 描述

设置挂单平台账号的挂单佣金。用户通过此平台挂单后，平台会按照一定的比例收取手续费。设置完毕之后可以去 [请求账号代理](../account/account.md#请求账号代理) 查询佣金设置信息


### 请求地址
```
{{host}}/order/brokers
```

### 参数说明

#### 参数介绍

| 参数       | 位置 | 类型    | 说明                               |
|------------|------|---------|----------------------------------|
| account    | Body | String  | 发起账号                           |
| secret     | Body | String  | 发起账号私钥                       |
| mol        | Body | Integer | 手续费收取比例的分子（不能大于分母） |
| den        | Body | Integer | 手续费收取比例的分母               |
| feeAccount | Body | String  | 收手续费的账号                     |
| currency   | Body | String  | 币种                               |
| issuer     | Body | String? | 发行商，如SWT则为 ''                |


#### 参数示例

```JSON
{
    "account": "jMM6jsSTRc8ScovXSzFJPnSBjpwe5AAAAA",
    "secret": "sXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "mol": 1,
    "den": 1000,
    "feeAccount": "jfnnbpg1UjB2r8zg1nAguunkcW3998ZZZZ",
    "currency": "SWT",
    "issuer": ""
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "engine_result": "tesSUCCESS",
        "engine_result_code": 0,
        "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
        "tx_blob": "1200CD220000000024000001223900000000000000013A00000000000003E86140000000000F4240684000000000000014732103E78C5A696D1E0E082981818639E2FBBDE0E7F7F8DED997AFEB7821B94DFD57E774473045022100C8E02AD873259C2E41572CEE70B329CB0C98C0DC71EB58E2CA3C7F294DE354450220266827836055AB63736E1E91838179AD34A089548721805164C9CDCF751801CC8114DF4C39D052BE75C916C5D11FBC3C19A0E8361C16891442963F51C186BB65408660097385DA75B5594F6C",
        "tx_json": {
            "Account": "jMM6jsSTRc8ScovXSzFJPnSBjpwe5AAAAA",
            "Amount": "1000000",
            "Fee": "20",
            "FeeAccountID": "jfnnbpg1UjB2r8zg1nAguunkcW3998ZZZZ",
            "Flags": 0,
            "OfferFeeRateDen": "00000000000003E8",
            "OfferFeeRateNum": "0000000000000001",
            "Sequence": 290,
            "SigningPubKey": "03E78C5A696D1E0E082981818639E2FBBDE0E7F7F8DED997AFEB7821B94DFD57E7",
            "TransactionType": "Brokerage",
            "TxnSignature": "3045022100C8E02AD873259C2E41572CEE70B329CB0C98C0DC71EB58E2CA3C7F294DE354450220266827836055AB63736E1E91838179AD34A089548721805164C9CDCF751801CC",
            "hash": "2EFAFD369239D864B67AFF8F2049FFBC0610F867A07CF2561A16980AE7CB9516"
        }
    }
}
```
### 返回值解析

| 参数                         | 类型    | 说明                       |
|------------------------------|---------|--------------------------|
| success                      | Boolean | 此次请求是否成功           |
| msg                          | String  | 返回的信息                 |
| code                         | Integer | 服务器返回的请求状态码     |
| data                         | Object  | SWTC-LIB 返回的数据        |
| data.engine_result           | String  | 请求结果                   |
| data.engine_result_code      | Array   | 请求结果编码               |
| data.engine_result_message   | String  | 请求结果 message 信息      |
| data.tx_blob                 | String  | 16 进制签名后的交易        |
| data.tx_json                 | Object  | 交易内容                   |
| data.tx_json.Account         | String  | 账号地址                   |
| data.tx_json.Amount          | String  | 金额，无意义，在此处只是标识 |
| data.tx_json.Fee             | String  | 交易费                     |
| data.tx_json.Flags           | Integer | 交易标记                   |
| data.tx_json.OfferFeeRateDen | String  | 手续费比例-分子            |
| data.tx_json.OfferFeeRateNum | String  | 手续费比例-分母            |
| data.tx_json.Sequence        | Integer | 单子序列号                 |
| data.tx_json.SigningPubKey   | Object  | 签名公钥                   |
| data.tx_json.TransactionType | String  | 交易类型                   |
| data.tx_json.TxnSignature    | String  | 交易签名                   |
| data.tx_json.hash            | String  | 交易 hash                  |
