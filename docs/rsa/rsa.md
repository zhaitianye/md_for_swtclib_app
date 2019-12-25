## 说明

一、 为了私钥的安全性，SWTCLIB-APP采用了加密私钥传输的方案。遵循以下几个原则

* 私钥不出本机
* 私钥不在网络流通
* 服务器不存储任何私钥信息
* 所有需要传递私钥的接口都支持两种方式：
  1. RSA加密进行安全传输
  2. 默认的明文传输方式

二、 加密方式

* 加密方式为 RSA PKCS8 1024 非对称加密
* 服务器存储公钥和私钥，并把公钥公布给客户端
* 客户端获取公钥之后，请按照加密方案进行加密

三、 进行验证

* 系统提供一个接口来验证加密后的结果是否和原文一致，只是验证一致性
* 可以通过其他需要私钥的接口进行操作验证

## 获取RSA公钥

### 类型 

GET 

### 描述

获取最新可用的RSA公钥

### 请求地址
```
{{host}}/rsa/public
```

### 参数说明

无

#### 参数介绍

无

#### 参数示例

无

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": "-----BEGIN RSA PUBLIC KEY-----\nMEgCQQCTXpw3qIlY0RQb1nEF7l1ZHFd94HlM+FF6LBThXNvZ2QjfqkxOvwiORsnh\nMP3YCLYf2CgUR6ywMukI16CGU1JJAgMBAAE=\n-----END RSA PUBLIC KEY-----"
}
```
### 返回值解析

| 参数    | 类型    | 说明                   |
|---------|---------|----------------------|
| success | Boolean | 此次请求是否成功       |
| msg     | String  | 返回的信息             |
| code    | Integer | 服务器返回的请求状态码 |
| data    | String  | 最新的公钥信息         |

## 验证RSA密文的正确性

### 类型 

POST 

### 描述

验证客户端提供的明文和密文是否对应

### 请求地址
```
{{host}}/rsa/verify
```

### 参数说明

#### 参数介绍

| 参数       | 类型   | 说明                    |
|------------|--------|-----------------------|
| plaintext  | String | 明文                    |
| ciphertext | String | 使用RSA公钥加密后的密文 |

#### 参数示例

```JSON
{
  "plaintext":"jfTqijsayy6W8uNB3FQCV2N5HzbApWBBs6",
  "ciphertext":"XUMgOP5O85PIjSSSHejZIFRwkcSCNq+vqGKDeDKdqleCEj5NO45oEd05ETt9xU9ZFWb2Uj06mH+6kk26yIb42DLbw0+6JV2uyesT1rGAzwJvOpxOhnq5qlHBtu3f6rQCMBS5i0Go3BI+RdXAl8WD67IW2wryGfE3AxB/wk2TpR0=",
}
```

### 返回值示例

```JSON
{
    "success": true,
    "msg": "请求成功",
    "code": 0,
    "data": null
}
// 或者
{
    "success": false,
    "msg": "公钥或加密方式不对!",
    "code": 400000,
    "data": null
}
```

### 返回值解析

| 参数    | 类型    | 说明                   |
|---------|---------|----------------------|
| success | Boolean | 此次请求是否成功       |
| msg     | String  | 返回的信息             |
| code    | Integer | 服务器返回的请求状态码 |