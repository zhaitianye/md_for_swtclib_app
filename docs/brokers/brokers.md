## 查询代理收费

### 类型 

GET 

### 描述

查询代理收费，和 swtc-proxy 保持一致。可以查询特定账号的代理收费信息。

### 参数说明

无

### 请求地址
```
{{host}}/brokers/:account
```
### 参数说明

#### 参数介绍

| 参数    | 位置 | 类型   | 说明         |
|---------|------|--------|------------|
| account | Path | String | 井通钱包地址 |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "account": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG",
        "brokerages": [
            {
                "FeeCurrency": "CNY",
                "FeeCurrencyIssuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "OfferFeeRateDen": "1000",
                "OfferFeeRateNum": "1",
                "Platform": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG",
                "fee_account": "jGxW97eCqxfAWvmqSgNkwc2apCejiM89bG"
            }
        ],
        "ledger_hash": "F979D5499CD2CC229AA264E096393267848F4CE6EB31D868713AF696AF1547D2",
        "ledger_index": 15406958,
        "validated": true
    }
}
```
### 返回值解析

| 参数                                 | 类型    | 说明                         |
|--------------------------------------|---------|----------------------------|
| success                              | Boolean | 此次请求是否成功             |
| msg                                  | String  | 返回的信息                   |
| code                                 | Integer | 服务器返回的请求状态码       |
| data                                 | Object  | SWTC-LIB 返回的数据          |
| data.account                         | String  | 查询的账号                   |
| data.ledger_hash                     | String  | 账本 hash                    |
| data.ledger_index                    | String  | 账本高度/区块高度            |
| data.brokerages                      | Array   | 代理收费信息的数组           |
| data.brokerages[n].FeeCurrency       | String  | 通证                         |
| data.brokerages[n].FeeCurrencyIssuer | String  | 发行方                       |
| data.brokerages[n].OfferFeeRateDen   | String  | LIB库解释不详，请根据语义判断 |
| data.brokerages[n].OfferFeeRateNum   | String  | LIB库解释不详，请根据语义判断 |
| data.brokerages[n].Platform          | String  | LIB库解释不详，请根据语义判断 |
| data.brokerages[n].fee_account       | String  | LIB库解释不详，请根据语义判断 |
| data.validated                       | Boolean | 是否通过了验证               |