## 签名接口说明

> 以下提供的各类签名接口，只是做服务器端签名，返回签名之后的blob。并不会实际去提交这些签名事务。

> 如返回结果内部带有HASH值，这些HASH值是根据签名进行计算得来的，这个HASH和链上交易成功返回的HASH一致。可以提前保存在本地数据库中，后续根据这些HASH去检查交易的结果使用。

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

## 单笔支付签名并计算HASH

### 类型 

POST 

### 描述

如上述接口一致，只是多计算了HASH

### 请求地址
```
{{host}}/sign/hash/pay
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
    "data": {
        "blob": "120000220000000024000044ED61D3C38D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022079CBA0728242D9B9C3044C997B703F500A326C38C8197689E59287D10B9998D102200C846AF4B5692E289EF9AA34A7313480EF6D7ED1CD2F5823AE1DD6AE47C456938114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D01327E03686578E1F1",
        "hash": "CC50D6F8EAEC68FB016B35D041FA0B8101ECAD3542541965AA0972240BC8C128"
    }
}
```
### 返回值解析

| 参数    | 类型    | 说明                   |
|---------|---------|----------------------|
| success | Boolean | 此次请求是否成功       |
| msg     | String  | 返回的信息             |
| code    | Integer | 服务器返回的请求状态码 |
| data    | Object  | 返回的对象             |
| data.blob    | String  | 此笔交易的签名信息             |
| data.hash    | String  | 计算此签名得到的HASH      |

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


## 一对多批量支付签名并计算HASH

### 类型 

POST 

### 描述

如上述接口描述


### 请求地址
```
{{host}}/sign/hash/batch
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


## 多对多批量支付签名并计算HASH

### 类型 

POST 

### 描述

如上述接口描述

### 请求地址
```
{{host}}/sign/hash/bulk
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
