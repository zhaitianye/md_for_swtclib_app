## :star:v1.4.2
- 新增：部署Docker方面的文档
- 修改：文案一些有关的修改

## v1.4.1
- 测试：测试Docker发布

## v1.4.0
- 更新：swtc-lib 底层库更新的到 v2.0.4
- 新增：账户相关-请求账户可发送/接收的通证
- 新增：账户相关-请求账户关系
- 新增：账户相关-请求账户的挂单列表
- 新增：代理相关-查询代理收费
- 新增：挂单相关-获取市场挂单列表
- 修改：全局错误处理请求均为JSON格式
- 修改：文档文案方面的修改

## v1.3.0

- 移除：监听事件相关的接口。
- 移除：RSA安全策略
- 新增：多对多直接批量交易接口
- 新增：多对多批量签名接口
- 修改：部署方式的修改
- 修改：文档的文案方面的修改

## v1.2.1

- 修改：增加缺省页
- 修改：文档相关文案

## v1.2.0

- 新增：多重签名-获得账号的多重签名列表
- 新增：多重签名-概念以及流程介绍图解
- 新增：多重签名-设置帐号的多重签名列表
- 新增：多重签名-废除帐号的主秘钥
- 新增：多重签名-激活帐号的主秘钥
- 新增：多重签名-直接多重签名交易
- 新增：多重签名-发起多重签名交易
- 新增：多重签名-加入多重签名交易
- 新增：多重签名-结束多重签名并进行交易
- 修改：文档相关的一些文案

## v1.1.2

- 修改：批量签名支付的路由请求方式
- 修改：RSA加密方式更变为 RSA PKCS8 1024
- 修改：签名相关的路由请求方式
- 修改：文档相关的一些文案
- 修改：文档迁移

## v1.1.1

- 更新：swtc-lib底层库更新到 v1.6.14
- 修改：批量支付路由请求方式
- 修改：服务器批量签名的路由请求方式
- 修改：文档相关的一些文案


## v1.1.0

- 新增：签名相关-服务器签名
- 新增：签名相关-服务器批量签名
- 新增：交易相关-签名支付
- 新增：交易相关-批量签名支付
- 新增：安全相关-获取服务器RSA公钥
- 新增：安全相关-验证RSA密文的正确性
- 新增：部署-负载部署支持
- 修改：所有需要私钥的接口支持RSA
- 修改：批量支付单次最大支付笔数为1000的限制
- 修改：一些BUG问题修复
- 移除：移除接口-5.3 需要sequence的串行批量支付
- 移除：文档内有关项目部署的方法


## v1.0.3

- 更新路由的请求方式

## v1.0.2

- 更新服务器启动配置

## v1.0.1

- 更新swtc-lib库的版本，取消批量转账比数的限制

## v1.0.0

- 项目初始化