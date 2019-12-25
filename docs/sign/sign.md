## 服务器签名

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

| 参数     | 类型    | 说明                                                        |
|----------|---------|-----------------------------------------------------------|
| account  | String  | 发起账号                                                    |
| to       | String  | 目标账号                                                    |
| value    | String  | 支付数量                                                    |
| currency | String  | 货币种类，三到六个字母或 20 字节的自定义货币                 |
| issuer   | String  | 货币发行方，无则留 ''                                        |
| secret   | String  | 井通钱包私钥,如果rsa为'true',则使用加密后的私钥             |
| rsa      | String? | 是否采用RSA加密，加密为'true'，不加密为‘false’ ，默认不加密 |
| addMemo  | String? | 备注信息                                                    |
| sequence | String? | 此次签名里面添加的sequence，不传则是默认下一次的sequence     |

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
  "sequence":"6285",
  "rsa":"false"
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

## 服务器批量签名

### 类型 

POST 

### 描述

服务器批量签名，此接口默认后台会获取到sequence，不需要自行管理


### 请求地址
```
{{host}}/sign/batch
```

### 参数说明

#### 参数介绍

| 参数           | 类型    | 说明                                                        |
|----------------|---------|-----------------------------------------------------------|
| account        | String  | 发起账号                                                    |
| secret         | String  | 井通钱包私钥,如果rsa为'true',则使用加密后的私钥             |
| rsa            | String? | 是否采用RSA加密，加密为'true'，不加密为‘false’ ，默认不加密 |
| tx             | Array   | 需要交易的地址对                                            |
| tx[n].to       | String  | 目标账号                                                    |
| tx[n].value    | String  | 支付数量                                                    |
| tx[n].currency | String  | 货币种类，三到六个字母或 20 字节的自定义货币                 |
| tx[n].issuer   | String  | 货币发行方，无则留 ''                                        |
| tx[n].addMemo  | String? | 备注信息                                                    |

#### 参数示例

```JSON
{
  "account":"jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
  "secret":"snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "rsa":"false",
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
