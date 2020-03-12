## 获取市场挂单列表

### 类型 

GET 

### 描述

获取市场挂单列表


### 请求地址
```
{{host}}/order/:gets/:pays
```
### 参数说明
    
 gets为获得的通证，pay为支付的通证.
 如通证类型为SWT，则写为 SWT
 如通证类型为其他类型，则写为 通证+发行方 如：CNY+jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or

#### 参数介绍

| 参数  | 位置  | 类型    | 说明                    |
|-------|-------|---------|-----------------------|
| gets  | Path  | String  | 获得的通证              |
| pays  | Path  | String  | 支付的通证              |
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
        "validated": false
    }
}
```
### 返回值解析

| 参数                              | 类型           | 说明                                                             |
|-----------------------------------|----------------|------------------------------------------------------------------|
| success                           | Boolean        | 此次请求是否成功                                                 |
| msg                               | String         | 返回的信息                                                       |
| code                              | Integer        | 服务器返回的请求状态码                                           |
| data                              | Object         | SWTC-LIB 返回的数据                                              |
| data.ledger_current_index         | String         | 当前账本号                                                       |
| data.offers                       | Array          | 市场挂单列表                                                     |
| data.offers[n].Account            | Integer        | 账号地址                                                         |
| data.offers[n].BookDirectory      | String         | --                                                               |
| data.offers[n].BookNode           | String         | --                                                               |
| data.offers[n].Flags              | Integer        | 挂单买卖标记                                                     |
| data.offers[n].LedgerEntryType    | String         | 账本数据结构类型                                                 |
| data.offers[n].OwnerNode          | Array          | --                                                               |
| data.offers[n].PreviousTxnID      | String         | 上一笔交易hash                                                   |
| data.offers[n].PreviousTxnLgrSeq  | Integer        | 上一笔交易所在账本号                                             |
| data.offers[n].Sequence           | Integer        | 单子序列号                                                       |
| data.offers[n].TakerGets          | Object?String? | 对方得到的。(买卖双方，当货币是swt时，数据类型 为对象;否则为string) |
| data.offers[n].TakerGets.value    | String         | 金额                                                             |
| data.offers[n].TakerGets.currency | String         | 货币种类                                                         |
| data.offers[n].TakerGets.issuer   | String         | 货币                                                             |
| data.offers[n].TakerPays          | Object?String? | 对方支付的(买卖双方，当货币是swt时，数据类型 为对象;否则为string)  |
| data.offers[n].TakerPays.value    | String         | 金额                                                             |
| data.offers[n].TakerPays.currency | String         | 货币种类                                                         |
| data.offers[n].TakerPays.issuer   | String         | 货币                                                             |
| data.offers[n].index              | String         | 该数据所在索引hash                                               |
| data.offers[n].owner_funds        | String         | 用户swt资产                                                      |
| data.offers[n].quality            | String         | 价格或价格的倒数                                                 |
| data.offers[n].validated          | Boolean        | 交易是否通过验证                                                 |