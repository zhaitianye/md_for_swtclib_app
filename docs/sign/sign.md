## 签名接口说明

* 以下提供的各类签名接口，只是做服务器端签名。并不会实际去提交这些签名事务。
* 签名hash是根据签名进行计算得来的，这个HASH和链上交易成功返回的HASH一致。
* 签名hash可以提前保存在本地数据库中，后续根据这些HASH去检查交易的结果使用。
* 签名产出的blob可以在 [单个提交签名事务](../tx/tx.md#单个提交签名事务) 和 [批量提交签名事务](../tx/tx.md#批量提交签名事务) 中使用

## 单笔支付签名

### 类型 

POST 

### 描述

本地签名的服务器端解决方案，此接口支持指定Sequence。

### 请求地址
```
{{host}}/sign/pay
```

### 参数说明

#### 参数介绍

| 参数     | 位置 | 类型    | 说明                                                    |
|----------|------|---------|-------------------------------------------------------|
| account  | Body | String  | 发起账号                                                |
| to       | Body | String  | 目标账号                                                |
| value    | Body | String  | 支付数量                                                |
| currency | Body | String  | 货币种类，三到六个字母或 20 字节的自定义货币             |
| issuer   | Body | String  | 货币发行方，无则留 ''                                    |
| secret   | Body | String  | 井通钱包私钥                                            |
| addMemo  | Body | String? | 备注信息                                                |
| sequence | Body | String? | 此次签名里面添加的sequence，不传则是默认下一次的sequence |

#### 参数示例

```JSON
{
  "account":"jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
  "to":"jfAUjEen8cLvRmCGyZYYwumLEZG45PThiR",
  "value":"0.01",
  "currency":"TEST",
  "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
  "secret":"snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "addMemo":"测试",
  "sequence":"6285"
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": {
        "blob": "1200002200000000240000188D61D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000001473210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C744630440220527D0DE549FFAD3628AFB3CFAB397E7C8702694ABBDB610CFFF35F333DD0FCFF022042BB6DC2CA7B639E5081FA226A75AD548A1B1167483DEEBFF6426D6EE6767C628114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83144C1067116B3DECF399D04D79D7D7E379603B54F5F9EA7D06E6B58BE8AF95E1F1",
        "hash": "F5A328334E8F3228A4BB5330EFD1FE582F026CAF5333285618983F4267AFE6AD"
    }
}
```
### 返回值解析

| 参数    | 类型    | 说明                   |
|---------|---------|----------------------|
| success | Boolean | 此次请求是否成功       |
| msg     | String  | 返回的信息             |
| code    | Integer | 服务器返回的请求状态码 |
| data.blob    | String  | 此笔交易的签名信息             |
| data.hash    | String  | 计算此签名得到的HASH      |


## 一对多批量支付签名

### 类型 

POST 

### 描述

一对多批量支付签名，此接口默认后台会获取到sequence，不需要自行管理。此接口为单个账号向多个账号发出交易时使用。


### 请求地址
```
{{host}}/sign/batch
```

### 参数说明

#### 参数介绍

| 参数           | 位置 | 类型    | 说明                                        |
|----------------|------|---------|-------------------------------------------|
| account        | Body | String  | 发起账号                                    |
| secret         | Body | String  | 井通钱包私钥                                |
| tx             | Body | Array   | 需要交易的地址对                            |
| tx[n].to       | Body | String  | 目标账号                                    |
| tx[n].value    | Body | String  | 支付数量                                    |
| tx[n].currency | Body | String  | 货币种类，三到六个字母或 20 字节的自定义货币 |
| tx[n].issuer   | Body | String  | 货币发行方，无则留 ''                        |
| tx[n].addMemo  | Body | String? | 备注信息                                    |

#### 参数示例

```JSON
{
  "account":"jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
  "secret":"snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "tx":[
    {
      "to":"jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value":"0.01",
      "currency":"TEST",
      "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo":"测试1"
    },
    {
      "to":"jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value":"0.01",
      "currency":"TEST",
      "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo":"测试2"
    },
    {
      "to":"jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value":"0.01",
      "currency":"TEST",
      "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo":"测试2"
    }
  ]
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": [
        {
            "blob": "120000220000000024000044EE61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022064B38F4C7EB952382D8CFA869F2E0826F50AFC96964B67C7CA45F9ED91F420AE022005750FDF8EF31F6375B345677B5C3EFBFE9BA16DAED94A30AF919F06987506678114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01317E03686578E1F1",
            "hash": "DB0F072EE065689DC296F2D8F548DF0D6209DB03D3CB6BB3E567DFF3FD49C995"
        },
        {
            "blob": "120000220000000024000044EF61D3C71AFD498D00000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100AB27178C8E7BE3BC39B27B77B0D95081CC7741572CA815A58A0AEAEDE62B9A9D0220586FC6A95EE8CF43D2F73A93C3E6C5F6626AA70B2CC4ED9D6C3233693BCF486E8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01327E03686578E1F1",
            "hash": "7DF27C2E7A28865D31BF32A6D9AA527BBE3F0FEFFA67E48565D04A3B8E43A41C"
        },
        {
            "blob": "120000220000000024000044F061D3CAA87BEE5380000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402206A68429FCD253697EEE02B021FF141B12F0FEEBBF8A7123821AE89DFE2C397540220333AC22CF68B6BD6C306E067C40CF9799C1746C322007ECA4370744665E4EFBD8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01337E03686578E1F1",
            "hash": "9E1F1F4E4F2E3BB0F3A9285C86BBEF27B25FACE220180797799BAEE68948ED8D"
        }
    ]
}
```

### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data    | Array  | 返回的数组             |
| data[n].blob    | String  | 此笔交易的签名信息        |
| data[n].hash    | String  | 计算此签名得到的HASH      |


## 多对多批量支付签名

### 类型 

POST 

### 描述

多对多批量支付签名，是对一对多批量签名的拓展。提供多个账号对多个账号之间的交易签名，每笔交易内部的currency可以不同。服务器内部自动管理sequence。

签名出来的blob内部包含sequence，请发送签名的时候按照顺序进行发送。

### 请求地址
```
{{host}}/sign/bulk
```

### 参数说明

#### 参数介绍

| 参数           | 位置 | 类型    | 说明                                        |
|----------------|------|---------|-------------------------------------------|
| tx             | Body | Array   | 需要交易的地址对                            |
| tx[n].account  | Body | String  | 发起账号                                    |
| tx[n].secret   | Body | String  | 井通钱包私钥                                |
| tx[n].to       | Body | String  | 目标账号                                    |
| tx[n].value    | Body | String  | 支付数量                                    |
| tx[n].currency | Body | String  | 货币种类，三到六个字母或 20 字节的自定义货币 |
| tx[n].issuer   | Body | String  | 货币发行方，无则留 ''                        |
| tx[n].addMemo  | Body | String? | 备注信息                                    |

#### 参数示例

```JSON
{
  "tx": [
    {
      "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
      "secret": "xxx",
      "to": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value": "100",
      "currency": "SWT",
      "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo": "测试1"
    },
    {
      "account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
      "secret": "xxx",
      "to": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value": "0.001",
      "currency": "TEST",
      "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo": "测试2"
    },
    {
      "account": "jEvHZADzabUocY7sPmfXThyYc8Qtq3bjtq",
      "secret": "xxx",
      "to": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value": "0.001",
      "currency": "TEST",
      "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo": "测试3"
    },
    {
      "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
      "secret": "xxx",
      "to": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value": "0.001",
      "currency": "TEST",
      "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo": "测试4"
    },
    {
      "account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
      "secret": "xxx",
      "to": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
      "value": "0.001",
      "currency": "TEST",
      "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
      "addMemo": "测试5"
    }
  ]
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": [
        {
            "blob": "120000220000000024000044EE61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022064B38F4C7EB952382D8CFA869F2E0826F50AFC96964B67C7CA45F9ED91F420AE022005750FDF8EF31F6375B345677B5C3EFBFE9BA16DAED94A30AF919F06987506678114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01317E03686578E1F1",
            "hash": "DB0F072EE065689DC296F2D8F548DF0D6209DB03D3CB6BB3E567DFF3FD49C995"
        },
        {
            "blob": "120000220000000024000044EF61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100B90326E9B0593B3DE734C6460F97B75F8E364ED78BD77EE1FBCE49AAA488D345022051148F9EAE6FBC9AD97B3A86F0F6ECD66D53DC409299878EE2006F599C85106E8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01317E03686578E1F1",
            "hash": "FC457290262165E1A60E753A7C21E04AB535C8274A51E21C4985E9CC6A9D0B45"
        },
        {
            "blob": "120000220000000024000044F061D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022066D81F804155E48B282A7017E2153AB2838B2DEAE9ED290622A6F4DD79DB945202205B22294EDC7A26BE54BA77060BCA39CF8B782DCFCCB157FF046623AE70CAA0A58114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01317E03686578E1F1",
            "hash": "5B2B9A868AFC60FC632C55F0CC04F61BC90015081854AC696434A41F95BD1ADF"
        },
        {
            "blob": "120000220000000024000044F161D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C744730450221009BFFC615A4AD3146AE6A2E7512A1472ED13E7E1C6D0E89B53654BB44C16BAAC202203E3E57D1A066368646C21A959F365C29285601FC64B89217B9FAE1140347040A8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01317E03686578E1F1",
            "hash": "FDEB43EA5E7260D93C245DD6B1A7A9705E1CC6C56FF08CE34838A1D62D9DA90A"
        },
        {
            "blob": "1200002200000000240000004C61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D41596684000000000002710732102F74B71720C05F3FA3C77A925151187CE99006841AB653AA56755A80CF027A22A74473045022100D09B185C26DCF8D63C42B9C00DA1C6AD573F622540F3AE950CFD36D7B0BEDC9502206ADA7F397AC3835D0BB2F29AE3C5E586EB69877AF0233F11B501AF40066E728981140D2C803B102F69C7AF902747C0CE6B0C90CF869A8314C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8AF9EA7D07E6B58BE8AF9532E1F1",
            "hash": "0D24BC2F0C1B0266B847531DE0E776E1CC0BF0D0C62C52CA67F407B25CD0CC18"
        }
    ]
}
```

### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data    | Array  | 返回的数组             |
| data[n].blob    | String  | 此笔交易的签名信息        |
| data[n].hash    | String  | 计算此签名得到的HASH      |


## 挂单签名

### 类型 

POST 

### 描述

填写需要挂单的数据签名出blob和hash


### 请求地址
```
{{host}}/sign/order/entry
```

### 参数说明

#### 参数介绍

| 参数          | 位置 | 类型    | 说明                         |
| ------------- | ---- | ------- | ---------------------------- |
| account       | Body | String  | 发起账号                     |
| secret        | Body | String  | 发起账号私钥                 |
| platform      | Body | String? | 挂单平台账号(收取手续费账号) |
| type          | Body | String  | 买卖类型，固定值 Sell Buy    |
| gets          | Body | String  | 对方获得的                   |
| gets.value    | Body | String  | 金额                         |
| gets.currency | Body | String  | 币种                         |
| gets.issuer   | Body | String  | 发行方，无则留 ''            |
| pays          | Body | String  | 对方支付的                   |
| pays.value    | Body | String  | 金额                         |
| pays.currency | Body | String  | 币种                         |
| pays.issuer   | Body | String  | 发行方，无则留 ''            |


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
    "msg": "请求成功",
    "code": 0,
    "data": {
        "blob": "12000722000800002400000C9F64D3C6ED83C14FE000000000000000000000000000434E590000000000A582E432BFC48EEDEF852C814EC57F3CD2D415966540000000000F4240684000000000000014732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE799744630440220475FD9FD38AD3B11CC508FE31F326371C4393D6A0CDFCEC411B5CD9854BE30DE0220153EAECC9AAB9C39D37B256CFFB453DF88016B462CFA5A9E8C505E61DC6E74D4811459A0172E3454FA1FA7FEED20E498308152C1FF688D14DF4C39D052BE75C916C5D11FBC3C19A0E8361C16",
        "hash": "3B868541EB16ED2CB312759F77C1C7DADBC8279FEF7E7D71A4D3116DE5776254"
    }
}
```
### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data.blob    | String  | 挂单的签名信息        |
| data.hash    | String  | 计算此签名得到的HASH      |

## 取消挂单签名

### 类型 

POST 

### 描述

取消未成交的挂单签名


### 请求地址
```
{{host}}/sign/order/cancel
```

### 参数说明

#### 参数介绍

| 参数     | 位置 | 类型    | 说明                              |
| -------- | ---- | ------- | --------------------------------- |
| account  | Body | String  | 发起账号                          |
| secret   | Body | String  | 发起账号私钥                      |
| sequence | Body | Integer | 挂单的标识，账号挂单列表里面的seq |


#### 参数示例

```JSON
{
    "account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
    "secret": "sXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "sequence": 3232
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": {
        "blob": "12000822000000002400000CA1201900000CA0684000000000000014732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE799744730450221009E2A4DA18BB629ED5451E72DD467442BD0445058857D2AE4208535AA395973EC02201DFC8AC2A3AFFA43B6E9EFCF7E2B1DC51CD971F59CD7253AF453441849C8C429811459A0172E3454FA1FA7FEED20E498308152C1FF68",
        "hash": "6C665EA94FD758AD1633045B49BEFBA0FFA677740E78135ECB3B21CB4866AA1C"
    }
}
```
### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data.blob    | String  | 取消挂单的签名信息        |
| data.hash    | String  | 计算此签名得到的HASH      |

## 设置挂单佣金签名

### 类型 

POST 

### 描述

设置挂单佣金签名


### 请求地址
```
{{host}}/sign/order/brokers
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
    "msg": "请求成功",
    "code": 0,
    "data": {
        "blob": "1200CD220000000024000001233900000000000000013A00000000000003E86140000000000F4240684000000000000014732103E78C5A696D1E0E082981818639E2FBBDE0E7F7F8DED997AFEB7821B94DFD57E774473045022100FA0EB5DAC6F4003FB8746318EE4060DD909BA4DFADB373A629C309A520B26A50022070C155ACBFA475A8F1B007EC7A45A90785DDF7A44123F0B623F0FD09D665DCEB8114DF4C39D052BE75C916C5D11FBC3C19A0E8361C16891442963F51C186BB65408660097385DA75B5594F6C",
        "hash": "3E392FD1B7E294F47EC0ED6C7F9A932C9E181CBFE39325F54F1331971343331A"
    }
}
```
### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data.blob    | String  | 设置挂单佣金的签名信息        |
| data.hash    | String  | 计算此签名得到的HASH      |