## 查询某一交易具体信息

### 类型 

GET 

### 描述

查询某一交易具体信息


### 请求地址
```
{{host}}/tx/:hash
```

### 参数说明

#### 参数介绍

| 参数 | 类型   | 说明      |
|------|--------|---------|
| hash | String | 交易 hash |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
        "Amount": {
            "currency": "TEST",
            "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
            "value": "0.01"
        },
        "Destination": "jpv789PmsKzWbhWVNer1ZAkzuXW7kLCBKs",
        "Fee": "10000",
        "Flags": 0,
        "Memos": [
            {
                "Memo": {
                    "MemoData": "E6B58BE8AF9531"
                }
            }
        ],
        "Sequence": 4112,
        "SigningPubKey": "0256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C",
        "TransactionType": "Payment",
        "TxnSignature": "3045022100938436B572BC335EB8F0A5D01F11A196E3F0EAEF9C30511D022DF207BC0451C402207D4BD259B3EC104420FB6BAC1DBA1BBB67049AEB9A89B719A24C33FB959E3FA7",
        "date": 628224400,
        "hash": "92AFDB9F02F7CF913EB1F32E076346BF48AA317F64BD3D203E156622E57741E2",
        "inLedger": 14506407,
        "ledger_index": 14506407,
        "meta": {
            "AffectedNodes": [
                {
                    "ModifiedNode": {
                        "FinalFields": {
                            "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
                            "Balance": "760339232",
                            "Flags": 0,
                            "OwnerCount": 8,
                            "Sequence": 4113
                        },
                        "LedgerEntryType": "AccountRoot",
                        "LedgerIndex": "AE6D3CDFAE02DB31C48C784932FEE86709D554F1FB5E86D7636A2858D396130E",
                        "PreviousFields": {
                            "Balance": "760349232",
                            "Sequence": 4112
                        },
                        "PreviousTxnID": "FF815CCC3B685C3807DFDEAB21CAF288AE59705D9EEAD75136212601D232AAC2",
                        "PreviousTxnLgrSeq": 14506302
                    }
                }
            ],
            "TransactionIndex": 2,
            "TransactionResult": "tecNO_DST"
        },
        "validated": true
    }
}
```
### 返回值解析

| 参数                        | 类型           | 说明                   |
|-----------------------------|----------------|------------------------|
| success                     | Boolean        | 此次请求是否成功       |
| msg                         | String         | 返回的信息             |
| code                        | Integer        | 服务器返回的请求状态码 |
| data                        | Object         | SWTC-LIB 返回的数据    |
| data.Account                | String         | 钱包地址               |
| data.Amount                 | String/O bject | 交易金额               |
| data.Destination            | String         | 交易对家地址           |
| data.Fee                    | String         | 交易费                 |
| data.Flags                  | Integer        | 交易标记               |
| data.Memos                  | Array          | 备注                   |
| data.Sequence               | Integer        | 自身账号的交易号       |
| data.SigningPubKey          | String         | 签名公钥               |
| data.Timestamp              | Integer        | 交易提交时间戳         |
| data.TransactionType        | String         | 交易类型               |
| data.TxnSignature           | String         | 交易签名               |
| data.date                   | Integer        | 交易进账本时间         |
| data.hash                   | String         | 交易 hash              |
| data.inLedger               | Integer        | 交易所在的账本号       |
| data.ledger_index           | Integer        | 账本高度               |
| data.meta                   | Object         | 交易影响的节点         |
| data.meta.AffectedNodes     | Array          | 受影响的节点           |
| data.meta.TransactionIndex  | Integer        | --                     |
| data.meta.TransactionResult | String         | 交易结果               |
| data.validated              | Boolean        | 交易是否通过验证       |


## 单笔支付

### 类型 

POST 

### 描述

单笔支付


### 请求地址
```
{{host}}/tx/pay
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


#### 参数示例

```JSON
{
  "account":"jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
  "to":"jfAUjEen8cLvRmCGyZYYwumLEZG45PThiR",
  "value":"0.01",
  "currency":"SWT",
  "issuer":"jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
  "secret":"snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "addMemo":"测试"
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
        "tx_blob": "120000220000000024000000126140000000000F4240684000000000002710732103FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE79974463044022061B5D8672CA00FA671648828A189562AEB1FE05610E869D53DB3B6CB5CBED94702204B141328BF03DD2A9D43AF957D1828A821D8BD384D650E35C56AF5605EFB0761811459A0172E3454FA1FA7FEED20E498308152C1FF6883140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D0CE6B58BE8AF95E8BDACE8B4A6E1F1",
        "tx_json": {
            "Account": "j9wtvMqV3jYpjHcHS94yXW8XGNB7YHC8w8",
            "Amount": "1000000",
            "Destination": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
            "Fee": "10000",
            "Flags": 0,
            "Memos": [
                {
                    "Memo": {
                        "MemoData": "E6B58BE8AF95E8BDACE8B4A6"
                    }
                }
            ],
            "Sequence": 18,
            "SigningPubKey": "03FF13DC19ABEBA0AB17A4BCE6931F8487405BB41C60605DD839C4F22B0BBBE799",
            "TransactionType": "Payment",
            "TxnSignature": "3044022061B5D8672CA00FA671648828A189562AEB1FE05610E869D53DB3B6CB5CBED94702204B141328BF03DD2A9D43AF957D1828A821D8BD384D650E35C56AF5605EFB0761",
            "hash": "B69BA8AE7CA50D17FA71CBA328E7CD9576349E296AF918073F905475D89C5ABC"
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
| data.tx_json.Amount          | String  | 交易金额               |
| data.tx_json.Destination     | String  | 对家                   |
| data.tx_json.Fee             | String  | 交易费                 |
| data.tx_json.Flags           | Integer | 交易标记               |
| data.tx_json.Memos           | Array   | 备注                   |
| data.tx_json.Sequence        | Integer | 单子序列号             |
| data.tx_json.SigningPubKey   | Object  | 签名公钥               |
| data.tx_json.TransactionType | String  | 交易类型               |
| data.tx_json.TxnSignature    | String  | 交易签名               |
| data.tx_json.hash            | String  | 交易 hash              |


## 批量支付

### 类型 

POST 

### 描述

批量支付是一个账号在短时间内向多个账号发起交易。因为服务器 sequence 控制比较复杂，所以才有这个接口，系统自动管理sequence。

适用场景：
  1. 新注册用户发放奖励，平台配置一个发放币的账号采用此接口批量转账
  2. 抢红包，并发量大的场景。使用此接口
  3. 收益分发，等分发场景
  4. 新用户激活账户，一个账号给大批账号转SWT的场景
  5. ...

### 请求地址
```
{{host}}/tx/batch
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
        {
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "0",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 4130,
                "hash": "231E38E970CBA2813D56658433EA6691E2056414D1EF00CB9E3E467C99AD6651"
            }
        },
        {
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "1",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 4131,
                "hash": "51B60B482D2927FAD6E5A70F07208E955D14003EFFB192E4E17B2413ECA1A870"
            }
        },
        {
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "2",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 4132,
                "hash": "82C82F9EBA37A7D836B8681562A2D2B6281AD04C8BE130D32FA6F8F5337584BF"
            }
        }
    ]
}
```

### 返回值解析

| 参数                               | 类型    | 说明                                   |
|------------------------------------|---------|--------------------------------------|
| success                            | Boolean | 此次请求是否成功                       |
| msg                                | String  | 返回的信息                             |
| code                               | Integer | 服务器返回的请求状态码                 |
| data                               | Array   | 每一笔交易返回的数据                   |
| data[n].success                    | String  | 这一笔交易在提交到公共节点上是否有错误 |
| data[n].msg                        | String  | 这一笔交易在提交到公共节点上的提示信息 |
| data[n].index                      | String  | 每一笔在整个交易数组中的底标           |
| data[n].data                       | Array   | SWTC-LIB 返回的精简数据                |
| data[n].data.engine_result         | String  | 请求结果，根据是否为tesSUCCESS判断成功  |
| data[n].data.engine_result_code    | Integer | 请求结果编码                           |
| data[n].data.engine_result_message | String  | 请求结果 message 信息                  |
| data[n].data.Sequence              | Integer | 单子序列号                             |
| data[n].data.hash                  | String  | 交易 hash                              |

## 签名支付

### 类型 

POST 

### 描述

签名支付


### 请求地址
```
{{host}}/tx/blob
```

### 参数说明

#### 参数介绍

| 参数 | 类型   | 说明         |
|------|--------|------------|
| blob | String | 签名后的blob |

#### 参数示例

```JSON
{
  "blob":"120000220000000024000018B261D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100ACD6B696B480AF42B929101FEDDA2B72FE36553415A12A41E3CBA770EBE4F616022047744119D76D9F700ED64705A4EEFD0929C7511D1865002A7611CC66548580BD8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869A"
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": {
        "engine_result": "tesSUCCESS",
        "engine_result_code": 0,
        "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
        "tx_blob": "120000220000000024000018B461D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100EBF00D6DA4AFABD85871EE8779A020D52D8F424C221AA657830F28E1FE6BCE20022060E33DB8A6B54E9F1A2EA236D7BBDDF031AD0269FE56910B8180E7D48A6D601A8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D06E6B58BE8AF95E1F1",
        "tx_json": {
            "Account": "jJCtKD2MbfYoVdQEbjTmbXmNiVkLBTknLC",
            "Amount": {
                "currency": "TEST",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "value": "0.01"
            },
            "Destination": "jpUCa7JwSbwvU1adNXRN7BWzTeVsTiNp1i",
            "Fee": "10000",
            "Flags": 0,
            "Memos": [
                {
                    "Memo": {
                        "MemoData": "E6B58BE8AF95"
                    }
                }
            ],
            "Sequence": 6324,
            "SigningPubKey": "0256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C",
            "TransactionType": "Payment",
            "TxnSignature": "3045022100EBF00D6DA4AFABD85871EE8779A020D52D8F424C221AA657830F28E1FE6BCE20022060E33DB8A6B54E9F1A2EA236D7BBDDF031AD0269FE56910B8180E7D48A6D601A",
            "hash": "9EF75982726A5B32EC8417C3D3427572DA6342C50D39A83A47D68CD22181A9C6"
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
| data.tx_json.Amount          | String  | 交易金额               |
| data.tx_json.Destination     | String  | 对家                   |
| data.tx_json.Fee             | String  | 交易费                 |
| data.tx_json.Flags           | Integer | 交易标记               |
| data.tx_json.Memos           | Array   | 备注                   |
| data.tx_json.Sequence        | Integer | 单子序列号             |
| data.tx_json.SigningPubKey   | Object  | 签名公钥               |
| data.tx_json.TransactionType | String  | 交易类型               |
| data.tx_json.TxnSignature    | String  | 交易签名               |
| data.tx_json.hash            | String  | 交易 hash              |

## 批量签名支付

### 类型 

POST 

### 描述

批量签名支付


### 请求地址
```
{{host}}/tx/batchblob
```

### 参数说明

此接口内部的blob是按照（6.2）批量签名返回的顺序进行提交，blob内部带有sequence的序列，请组装的时候也必须按照顺序进行组装使用

#### 参数介绍

| 参数           | 类型   | 说明             |
|----------------|--------|----------------|
| txBlob         | Array  | 签名后的blob数组 |
| txBlob[n].blob | String | 签名后的blob     |

#### 参数示例

```JSON
{
    "txBlob": [
        {
            "blob": "120000220000000024000018AF61D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74463044022024146703D92E1597492600044E42AD5C4428BA90FA5249B70C59B03A3BC797730220394577D634D37670F372035A04B764903E9824D089A22E4132BDAF5B5AAE090A8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9531E1F1"
        },
        {
            "blob": "120000220000000024000018B061D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C7446304402205E6919EC4C0A61FB8B76A86BAA28C6D5012E77DFB5C4248615C6428B8E2A7D1902203C2F69C56E5F6EA6CFC69718F55F6BEC133EBB73ACE18EA5AA0F4EBD64AE49A28114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869AF9EA7D07E6B58BE8AF9532E1F1"
        },
        {
            "blob": "120000220000000024000018B161D4038D7EA4C680000000000000000000000000544553540000000000A582E432BFC48EEDEF852C814EC57F3CD2D4159668400000000000271073210256F9ED0A13D879E2DAC205A23CF1BA6DA210C094F3B18168945BBCD0664BAD0C74473045022100BC123E3CFFCEBE37E0B7D62D80501ACA0CD9D8E16DC0A7A0CE3FBAF2BE04BCE7022067674CBF1288F5AFD938B4F4A11D87AADDFF1C1C7E3415B1BEFF60EE44A7516B8114C1D4C79B2C9CD8FE9AB1EE29FAA18432A3DBFD8A83140D2C803B102F69C7AF902747C0CE6B0C90CF869A"
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
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "0",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 6325,
                "hash": "3308120268ADE1D2EB44382DCE024E2E8C12E0BB9D15D8A3B3B6AC01B6259E00"
            }
        },
        {
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "1",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 6326,
                "hash": "4BC4AE3D35BFA70C8C4C5669CD898D00D422D921B65C969BCA8A492EDEF0032F"
            }
        },
        {
            "success": true,
            "msg": "连接成功,交易结果为tesSUCCESS",
            "index": "2",
            "data": {
                "engine_result": "tesSUCCESS",
                "engine_result_code": 0,
                "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
                "sequence": 6327,
                "hash": "04734C94EB67B9E92DDBB59C93F7456A53EE19E218090BBC9BB2EEFFB2C2688E"
            }
        }
    ]
}
```

### 返回值解析

| 参数                               | 类型    | 说明                                   |
|------------------------------------|---------|--------------------------------------|
| success                            | Boolean | 此次请求是否成功                       |
| msg                                | String  | 返回的信息                             |
| code                               | Integer | 服务器返回的请求状态码                 |
| data                               | Array   | 每一笔交易返回的数据                   |
| data[n].success                    | String  | 这一笔交易在提交到公共节点上是否有错误 |
| data[n].msg                        | String  | 这一笔交易在提交到公共节点上的提示信息 |
| data[n].index                      | String  | 每一笔在整个交易数组中的底标           |
| data[n].data                       | Array   | SWTC-LIB 返回的精简数据                |
| data[n].data.engine_result         | String  | 请求结果，根据是否为tesSUCCESS判断成功  |
| data[n].data.engine_result_code    | Integer | 请求结果编码                           |
| data[n].data.engine_result_message | String  | 请求结果 message 信息                  |
| data[n].data.Sequence              | Integer | 单子序列号                             |
| data[n].data.hash                  | String  | 交易 hash                              |
