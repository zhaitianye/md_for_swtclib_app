## 说明

一、 公网上的 SWTCLIB-APP 只能保证无私钥接口的安全性。

二、 若要保证整套系统的安全，需要B端系统下载部署到B端系统内部使用。保证信道的安全性。

三、 签名之后的 BLOB 公认安全数据，可以提交给公共节点的 SWTCLIB-APP 提高负载和访问的速度

四、 SWTCLIB-APP 和公共节点之间的通讯不会涉及到任何私钥的传输

五、 B端需要保证 B端系统到 SWTCLIB-APP 之间的信道安全性


## 提供的全部接口列表

| 名称                             | 路径                              |
|--------------------------------|-----------------------------------|
| 创建连接获取服务器基础信息       | /server/info                      |
| 请求底层服务器信息               | /server/node                      |
| 创建钱包                         | /wallet/generate                  |
| 根据私钥创建钱包                 | /wallet/generate                  |
| 请求账号信息                     | /account/:account/info            |
| 请求账号余额信息                 | /account/:account/balances        |
| 请求账户可发送/接收的通证        | /account/:account/tums            |
| 获得账号关系                     | /account/:account/relations/:type |
| 获得账号交易事务列表             | /account/:account/tx              |
| 查询账户挂单列表                 | /account/:account/orders          |
| 获得账号的多重签名列表           | /account/:account/signerlist      |
| 查询代理收费                     | /brokers/:account                 |
| 获取最新关闭的账本信息           | /ledgers/closed                   |
| 根据hash获取某一账本具体信息     | /ledgers/hash/:hash               |
| 获取某一账本具体信息根据账本高度 | /ledgers/index/:index             |
| 根据HASH查询事务                 | /tx/:hash                         |
| 单笔支付                         | /tx/pay                           |
| 一对多批量支付                   | /tx/batch                         |
| 多对多批量支付                   | /tx/bulk                          |
| 单个提交签名事务                 | /tx/blob                          |
| 批量提交签名事务                 | /tx/batchblob                     |
| 获取市场挂单列表                 | /order/:gets/:pays                |
| 单笔支付签名                     | /sign/pay                         |
| 一对多批量支付签名               | /sign/batch                       |
| 多对多批量支付签名               | /sign/bulk                        |
| 设置帐号的多重签名列表           | /multisign/:account/signerlist    |
| 废除帐号的主秘钥                 | /multisign/:account/abolish       |
| 激活帐号的主秘钥                 | /multisign/:account/activate      |
| 直接多重签名交易                 | /multisign/pay                    |
| 发起多重签名交易                 | /multisign/steps/initiate         |
| 加入多重签名交易                 | /multisign/steps/join             |
| 结束多重签名并进行交易           | /multisign/steps/pay              |

## 可在公网使用的安全接口列表

| 名称                             | 路径                              |
|--------------------------------|-----------------------------------|
| 创建连接获取服务器基础信息       | /server/info                      |
| 请求底层服务器信息               | /server/node                      |
| 请求账号信息                     | /account/:account/info            |
| 请求账号余额信息                 | /account/:account/balances        |
| 请求账户可发送/接收的通证        | /account/:account/tums            |
| 获得账号关系                     | /account/:account/relations/:type |
| 获得账号交易事务列表             | /account/:account/tx              |
| 查询账户挂单列表                 | /account/:account/orders          |
| 获得账号的多重签名列表           | /account/:account/signerlist      |
| 查询代理收费                     | /brokers/:account                 |
| 获取最新关闭的账本信息           | /ledgers/closed                   |
| 根据hash获取某一账本具体信息     | /ledgers/hash/:hash               |
| 获取某一账本具体信息根据账本高度 | /ledgers/index/:index             |
| 根据HASH查询事务                 | /tx/:hash                         |
| 单个提交签名事务                 | /tx/blob                          |
| 批量提交签名事务                 | /tx/batchblob                     |
| 获取市场挂单列表                 | /order/:gets/:pays                |
| 结束多重签名并进行交易           | /multisign/steps/pay              |

## 需B端系统建立安全信道通讯使用的接口列表

| 名称                   | 路径                           |
|----------------------|--------------------------------|
| 创建钱包               | /wallet/generate               |
| 根据私钥创建钱包       | /wallet/generate               |
| 单笔支付               | /tx/pay                        |
| 一对多批量支付         | /tx/batch                      |
| 多对多批量支付         | /tx/bulk                       |
| 单笔支付签名           | /sign/pay                      |
| 一对多批量支付签名     | /sign/batch                    |
| 多对多批量支付签名     | /sign/bulk                     |
| 设置帐号的多重签名列表 | /multisign/:account/signerlist |
| 废除帐号的主秘钥       | /multisign/:account/abolish    |
| 激活帐号的主秘钥       | /multisign/:account/activate   |
| 直接多重签名交易       | /multisign/pay                 |
| 发起多重签名交易       | /multisign/steps/initiate      |
| 加入多重签名交易       | /multisign/steps/join          |