## 获取最新账本信息

### 类型 

GET 

### 描述

获取最新关闭的账本高度和账本的hash

### 参数说明

无

### 请求地址
```
{{host}}/ledgers/closed
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "ledger_hash": "18166576B066E5AE365DDAC2021414DDF79CA78835A10CF4776932762A4D5A6B",
        "ledger_index": 14508250
    }
}
```
### 返回值解析

| 参数              | 类型    | 说明                   |
|-------------------|---------|----------------------|
| success           | Boolean | 此次请求是否成功       |
| msg               | String  | 返回的信息             |
| code              | Integer | 服务器返回的请求状态码 |
| data              | Object  | SWTC-LIB 返回的数据    |
| data.ledger_hash  | String  | 账本 hash              |
| data.ledger_index | String  | 账本高度/区块高度      |


## 根据hash获取账本信息

### 类型 

GET 

### 描述

根据hash获取某一账本具体信息

### 请求地址
```
{{host}}/ledgers/hash/:hash
```

### 参数说明

#### 参数介绍

| 参数         | 位置  | 类型     | 说明                                              |
|--------------|-------|----------|-------------------------------------------------|
| hash         | Path  | String   | 井通区块 hash                                     |
| transactions | Query | Boolean? | 可选参数,是否返回账本上的交易记录 hash，默认 false |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "accepted": true,
        "account_hash": "C1EA1C0FAE091C8C48D2B5D845672DE427613A59286BD47C3E0540FC15FE88A5",
        "close_time": 628239630,
        "close_time_human": "2019-Nov-28 07:00:30",
        "close_time_resolution": 10,
        "closed": true,
        "hash": "4C235B8BC90B29B5AE314CB75EC192C57FA3721D9EABA94C1DCB589BDE98BCA1",
        "ledger_hash": "4C235B8BC90B29B5AE314CB75EC192C57FA3721D9EABA94C1DCB589BDE98BCA1",
        "ledger_index": "14507930",
        "parent_hash": "8D285D318F1BEF02F4321EED78BCD6A45D65E553F1CAA7423FB82CD42E6ED7AE",
        "seqNum": "14507930",
        "totalCoins": "599999999999460713",
        "total_coins": "599999999999460713",
        "transaction_hash": "73E29E4E204813D87E6E5DCD0A6EC9AADE563F96DDF2CEF19EE7DE5640E1EDCA",
        "transactions": [
            "0DF707C0E476994471A51E37C29A562A3F1DD6A297D378A8AF5DF0E649C17B9B",
            "1FE128ABDD8C72A9AF84648A081D1BAC74B6477C32C9EAD440544EDA5C364CF4",
            "31EA2542D36668383D7A21A6F1FB741C61D5BB5FBA655BB23BA8FE41E3BECFC9",
            "41E81C6F821AB8499FE4443F92BE9079AA561B05D14F20ED6F4BE9B92A53E68A",
            ......
        ]
    }
}
```
### 返回值解析

| 参数                        | 类型    | 说明                   |
|-----------------------------|---------|----------------------|
| success                     | Boolean | 此次请求是否成功       |
| msg                         | String  | 返回的信息             |
| code                        | Integer | 服务器返回的请求状态码 |
| data                        | Object  | SWTC-LIB 返回的数据    |
| data.accepted               | Boolean | 区块是否已经产生       |
| data.account_hash           | String  | 状态 hash 树根         |
| data.close_time             | Integer | 关闭时间               |
| data.close_time_human       | String  | 关闭时间               |
| data.close_time_resolution  | Integer | 关闭周期               |
| data.closed                 | Boolean | 账本是否已经关闭       |
| data.hash                   | String  | 账本 hash              |
| data.ledger_hash            | String  | 账本 hash              |
| data.ledger_index           | String  | 账本高度/区块高度      |
| data.parent_hash            | String  | 上一区块 hash 值       |
| data.seqNum                 | String  | 账本高度/区块高度      |
| data.totalCoins             | String  | swt 总量               |
| data.total_coins            | String  | swt 总量               |
| data.transaction_hash       | String  | 交易 hash 树根         |
| data.transactions           | Array   | 该账本里的交易列表     |
| data.transactions[n]        | String  | 交易Hash               |

## 根据高度获取账本信息

### 类型 

GET 

### 描述

获取某一账本具体信息

### 请求地址
```
{{host}}/ledgers/index/:index
```

### 参数说明

#### 参数介绍

| 参数         | 位置  | 类型     | 说明                                              |
|--------------|-------|----------|-------------------------------------------------|
| index        | Path  | String   | 井通区块高度                                      |
| transactions | Query | Boolean? | 可选参数,是否返回账本上的交易记录 hash，默认 false |

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "accepted": true,
        "account_hash": "C1EA1C0FAE091C8C48D2B5D845672DE427613A59286BD47C3E0540FC15FE88A5",
        "close_time": 628239630,
        "close_time_human": "2019-Nov-28 07:00:30",
        "close_time_resolution": 10,
        "closed": true,
        "hash": "4C235B8BC90B29B5AE314CB75EC192C57FA3721D9EABA94C1DCB589BDE98BCA1",
        "ledger_hash": "4C235B8BC90B29B5AE314CB75EC192C57FA3721D9EABA94C1DCB589BDE98BCA1",
        "ledger_index": "14507930",
        "parent_hash": "8D285D318F1BEF02F4321EED78BCD6A45D65E553F1CAA7423FB82CD42E6ED7AE",
        "seqNum": "14507930",
        "totalCoins": "599999999999460713",
        "total_coins": "599999999999460713",
        "transaction_hash": "73E29E4E204813D87E6E5DCD0A6EC9AADE563F96DDF2CEF19EE7DE5640E1EDCA",
        "transactions": [
            "0DF707C0E476994471A51E37C29A562A3F1DD6A297D378A8AF5DF0E649C17B9B",
            "1FE128ABDD8C72A9AF84648A081D1BAC74B6477C32C9EAD440544EDA5C364CF4",
            "31EA2542D36668383D7A21A6F1FB741C61D5BB5FBA655BB23BA8FE41E3BECFC9",
            "41E81C6F821AB8499FE4443F92BE9079AA561B05D14F20ED6F4BE9B92A53E68A",
            ......
        ]
    }
}
```
### 返回值解析

| 参数                        | 类型    | 说明                   |
|-----------------------------|---------|----------------------|
| success                     | Boolean | 此次请求是否成功       |
| msg                         | String  | 返回的信息             |
| code                        | Integer | 服务器返回的请求状态码 |
| data                        | Object  | SWTC-LIB 返回的数据    |
| data.accepted               | Boolean | 区块是否已经产生       |
| data.account_hash           | String  | 状态 hash 树根         |
| data.close_time             | Integer | 关闭时间               |
| data.close_time_human       | String  | 关闭时间               |
| data.close_time_resolution  | Integer | 关闭周期               |
| data.closed                 | Boolean | 账本是否已经关闭       |
| data.hash                   | String  | 账本 hash              |
| data.ledger_hash            | String  | 账本 hash              |
| data.ledger_index           | String  | 账本高度/区块高度      |
| data.parent_hash            | String  | 上一区块 hash 值       |
| data.seqNum                 | String  | 账本高度/区块高度      |
| data.totalCoins             | String  | swt 总量               |
| data.total_coins            | String  | swt 总量               |
| data.transaction_hash       | String  | 交易 hash 树根         |
| data.transactions           | Array   | 该账本里的交易列表     |
| data.transactions[n]        | String  | 交易Hash               |
