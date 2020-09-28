## 请求服务器基础信息

### 类型 

GET

### 描述

创建连接获取服务器基础信息

### 请求地址
```
{{host}}/server/info
```
### 参数说明

无

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "fee_base": 10,
        "fee_ref": 10,
        "hostid": "PET",
        "ledger_hash": "3C88EFDF8F051D7038CC871D0A2F6641853D4FE7161A8F7BD89BC28FC7E4C80C",
        "ledger_index": 14508242,
        "ledger_time": 628242750,
        "load_base": 256,
        "load_factor": 256,
        "pubkey_node": "n9M4oEaMGxjWsyMtp9sYAGgZbjoC4W7cETbTDJrUuUHv9KYU9ALb",
        "random": "6DC4208C2D8A7D37414ACE6274426142D98D086BB8719019748F35A7794CA97B",
        "reserve_base": 20000000,
        "reserve_inc": 5000000,
        "server_status": "full",
        "validated_ledgers": "266955-14508242"
    }
}
```
### 返回值解析

| 参数                   | 类型    | 说明                         |
|------------------------|---------|------------------------------|
| success                | Boolean | 此次请求是否成功             |
| msg                    | String  | 返回的信息                   |
| code                   | Integer | 服务器返回的请求状态码       |
| data                   | Object  | SWTC-LIB 返回的数据          |
| data.fee_base          | Integer | 基础费用(手续费计算公式因子) |
| data.fee_ref           | Integer | 引用费用(手续费计算公式因子) |
| data.hostid            | String  | 主机名                       |
| data.ledger_hash       | String  | 账本 hash                    |
| data.ledger_index      | Integer | 区块高度                     |
| data.ledger_time       | Integer | 账本关闭时间                 |
| data.load_base         | Integer | load_base                    |
| data.load_factor       | Integer | load_factor                  |
| data.pubkey_node       | String  | 节点公钥                     |
| data.random            | String  | random                       |
| data.reserve_base      | Integer | 账号保留值                   |
| data.reserve_inc       | Integer | 用户每次挂单或信任冻结数量   |
| data.server_status     | String  | 服务器状态                   |
| data.validated_ledgers | String  | 账本区间                     |


## 请求服务器底层信息

### 类型 

GET 

### 描述

创建连接获取底层服务器信息

### 请求地址
```
{{host}}/server/node
```

### 参数说明

无

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "complete_ledgers": "266955-14508246",
        "ledger": "EFD3F78EA25A23FE1521B04E5673D02081E7843A0EFFF20D04E5B7FC97E1DDB2",
        "public_key": "n9M4oEaMGxjWsyMtp9sYAGgZbjoC4W7cETbTDJrUuUHv9KYU9ALb",
        "state": "full   27:03:19",
        "peers": 35,
        "version": "skywelld-0.28.1"
    }
}
```
### 返回值解析

| 参数                  | 类型    | 说明                   |
|-----------------------|---------|----------------------|
| success               | Boolean | 此次请求是否成功       |
| msg                   | String  | 返回的信息             |
| code                  | Integer | 服务器返回的请求状态码 |
| data                  | Object  | SWTC-LIB 返回的数据    |
| data.complete_ledgers | String  | 账本区间               |
| data.ledgers          | String  | 最新账本hash           |
| data.public_key       | String  | 节点公钥               |
| data.state            | String  | 服务器状态             |
| data.peers            | Integer | 节点连接数(不包含自己) |
| data.version          | String  | 服务器部署项目版本     |