## 创建钱包

### 类型 

GET 

### 描述

返回创建的钱包

### 参数说明

无

### 请求地址
```
{{host}}/wallet/generate
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "secret": "snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "address": "jNaEyRyQZiGp7wtHoo5xmXngQWS3noeVrD"
    }
}
```
### 返回值解析

| 参数         | 类型    | 说明                   |
|--------------|---------|----------------------|
| success      | Boolean | 此次请求是否成功       |
| msg          | String  | 返回的信息             |
| code         | Integer | 服务器返回的请求状态码 |
| data         | Object  | SWTC-LIB 返回的数据    |
| data.secret  | String  | 井通钱包私钥           |
| data.address | String  | 井通钱包地址           |

## 根据私钥创建钱包

### 类型 

POST 

### 描述

根据私钥返回创建钱包的地址

### 参数说明

#### 参数介绍

| 参数   | 类型    | 说明                                                        |
|--------|---------|-----------------------------------------------------------|
| secret | String  | 井通钱包私钥,如果rsa为'true',则使用加密后的私钥             |
| rsa    | String? | 是否采用RSA加密，加密为'true'，不加密为‘false’ ，默认不加密 |

#### 参数示例

```JSON
{
  "secret":"snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "rsa":"false",
}
```

#### 请求地址
```
{{host}}/wallet/generate
```

#### 返回值示例

```JSON
{
    "success": true,
    "msg": "成功",
    "code": 0,
    "data": {
        "secret": "snXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "address": "jNaEyRyQZiGp7wtHoo5xmXngQWS3noeVrD"
    }
}
```
#### 返回值解析

| 参数         | 类型    | 说明                   |
|--------------|---------|----------------------|
| success      | Boolean | 此次请求是否成功       |
| msg          | String  | 返回的信息             |
| code         | Integer | 服务器返回的请求状态码 |
| data         | Object  | SWTC-LIB 返回的数据    |
| data.secret  | String  | 井通钱包私钥           |
| data.address | String  | 井通钱包地址           |
