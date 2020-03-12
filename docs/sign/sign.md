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
  "currency":"SWT",
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
    "data": "120000220000000024000018B861D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022016586A1E27F5882B769864219485E3412B3DF47D02FAF46CA90CB8D0A9A4959302204201C5E4BC94C10A4645FB50B1175B0B2D1E4062C9D36C90C869C0A35F2FA4AA8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D06E6B58BE8AF95E1F1"
}
```
### 返回值解析

| 参数    | 类型    | 说明                   |
|---------|---------|----------------------|
| success | Boolean | 此次请求是否成功       |
| msg     | String  | 返回的信息             |
| code    | Integer | 服务器返回的请求状态码 |
| data    | String  | 签名信息               |

## 一对多批量支付签名

### 类型 

POST 

### 描述

一对多批量支付签名，此接口默认后台会获取到sequence，不需要自行管理。此接口为单个账户向多个账户发出交易时使用。


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
        "120000220000000024000018B561D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402203454942369C11B47AE13CCE10BE600FE3286523DC03F678B579FBEE214A3BE6E0220761D4AAA976F0065622C1BE27F8B6DDAA047CEBFBFB9B4A99DEFBEC9C210D3028114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9531E1F1",
        "120000220000000024000018B661D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022050398377192CEBA0B6941E3EC00E2C7DEC256F3F00939B0EFF2464BE6734D1FF02207C6729C570E379E0A82E6A90E0A5E786A4DFBADF138123C846B5D4487F1EFAB38114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9532E1F1",
        "120000220000000024000018B761D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402207A8F843FBD1E235E3F53252F217A486B8F8C049A50BDAEBB81E3B1E231199E1E02205980D4BD55EC2EA7DF67F6BFF54090FBD861A5F1E9A37F2ADC47FC0B058AF5648114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869A"
    ]
}
```

### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data    | Array   | 每一笔签名提交返回的签名数组 |
| data[n] | String  | 对应的签名信息               |


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
        "12000022000000002400002A4C61D6038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402202359D2BD2F8F4DA7305AEC1D4C07E4DE038639822EBB7FD115F2AF8C293CE9F7022054A8A308C9944EB086850EDEA3944ACB043A6BA3E250A0D889838CB6CA7C1F258114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9531E1F1",
        "12000022000000002400000C6E61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D41596684000000000002710732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE7997446304402205F86BDACDB3C43E7186495B81147DBBDBB6BF124BC433116C5C4A490F20BDFB302204555A2F3ACCA143E15EAAB68914B18946B4B2F729808A65A5950FA8EAAB19183811459A0172E3454FA1FA7FEED20E498308152C1FF6883140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9532E1F1",
        "12000022000000002400000BCA61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210297F50D5A4F4AEF88561910DEBCC84C75AB3731DBF7E0B71E00F2736DCE4896F874473045022100BDCD7CEB62D66B8B5119B9B252FE47A7EE6F0DA235EBCCBD3F2C0948937D950A0220042BC60C5D31BF58F210DD8CC51EB4A1B5D4E551B9703B73726D1146708E8BF48114A3A5A3181B200F5D8C0BE64A4E5E6049B2B0F13A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9533E1F1",
        "12000022000000002400002A4D61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402200CFCB943A6EBC7BA34647C90DCC3D3CAD83A0B0CF4183F4370DB8F12A66F114002201D8D135A30455B02926000DFDE9CB3C46E66F29606C80F72B9FCCC9B0D9FFD5C8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9534E1F1",
        "12000022000000002400002A4E61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C744730450221008458CF47324816EC25C04CCE7DC8880C2958B44761843131403926B3408AB76C022048F3F8027F2D3C871F9083780693D05B3E5EA445C5F93A208FCAA0FE7341D5F88114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9535E1F1"
    ]
}
```

### 返回值解析

| 参数    | 类型    | 说明                         |
|---------|---------|----------------------------|
| success | Boolean | 此次请求是否成功             |
| msg     | String  | 返回的信息                   |
| code    | Integer | 服务器返回的请求状态码       |
| data    | Array   | 每一笔签名提交返回的签名数组 |
| data[n] | String  | 对应的签名信息               |
