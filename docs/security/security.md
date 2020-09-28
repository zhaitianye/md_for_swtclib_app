## 说明

一、 公网上的 SWTCLIB-APP 只能保证无私钥接口的安全性。

二、 若要保证整套系统的安全，需要B端系统下载部署到B端系统内部使用。保证信道的安全性。

三、 签名之后的 BLOB 公认安全数据，可以提交给公共节点的 SWTCLIB-APP 提高负载和访问的速度

四、 SWTCLIB-APP 和公共节点之间的通讯不会涉及到任何私钥的传输

五、 B端需要保证 B端系统到 SWTCLIB-APP 之间的信道安全性



## 可在公网使用的安全接口列表

| 名称                                                                       | 路径                              |
| -------------------------------------------------------------------------- | --------------------------------- |
| [请求服务器基础信息](../server/server.md#请求服务器基础信息)               | /server/info                      |
| [请求服务器底层信息](../server/server.md#请求服务器底层信息)               | /server/node                      |
| [请求账号信息](../account/account.md#请求账号信息)                         | /account/:account/info            |
| [请求账号余额](../account/account.md#请求账号余额)                         | /account/:account/balances        |
| [请求账号通证](../account/account.md#请求账号通证)                         | /account/:account/tums            |
| [请求账号关系](../account/account.md#请求账号关系)                         | /account/:account/relations/:type |
| [请求账号事务](../account/account.md#请求账号事务)                         | /account/:account/tx              |
| [请求账号挂单](../account/account.md#请求账号挂单)                         | /account/:account/orders          |
| [请求账号多签](../account/account.md#请求账号多签)                         | /account/:account/signerlist      |
| [请求账号代理](../account/account.md#请求账号代理)                         | /account/:account/brokers         |
| [请求账号黑名单](../account/account.md#请求账号黑名单)                     | /account/:account/blacklist       |
| [获取最新账本信息](../ledgers/ledgers.md#获取最新账本信息)                 | /ledgers/closed                   |
| [根据hash获取账本信息](../ledgers/ledgers.md#根据hash获取账本信息)         | /ledgers/hash/:hash               |
| [根据高度获取账本信息](../ledgers/ledgers.md#根据高度获取账本信息)         | /ledgers/index/:index             |
| [根据HASH查询事务](../tx/tx.md#根据HASH查询事务)                           | /tx/:hash                         |
| [单个提交签名事务](../tx/tx.md#单个提交签名事务)                           | /tx/blob                          |
| [批量提交签名事务](../tx/tx.md#批量提交签名事务)                           | /tx/batchblob                     |
| [请求市场挂单列表](../orders/orders.md#请求市场挂单列表)                   | /order/:gets/:pays                |
| [结束多重签名并进行交易](../multisign/multisign.md#结束多重签名并进行交易) | /multisign/steps/pay              |

## 需B端系统建立安全信道通讯使用的接口列表

| 名称                                                                       | 路径                           |
| -------------------------------------------------------------------------- | ------------------------------ |
| [创建钱包](../wallet/wallet.md#创建钱包)                                   | /wallet/generate               |
| [根据私钥创建钱包](../wallet/wallet.md#根据私钥创建钱包)                   | /wallet/generate               |
| [单笔支付](../tx/tx.md#单笔支付)                                           | /tx/pay                        |
| [一对多批量支付](../tx/tx.md#一对多批量支付)                               | /tx/batch                      |
| [多对多批量支付](../tx/tx.md#多对多批量支付)                               | /tx/bulk                       |
| [挂单](../orders/orders.md#挂单)                                           | /order/entry                   |
| [取消挂单](../orders/orders.md#取消挂单)                                   | /order/cancel                   |
| [设置挂单佣金](../orders/orders.md#设置挂单佣金)                           | /order/brokers                   |
| [单笔支付签名](../sign/sign.md#单笔支付签名)                               | /sign/pay                      |
| [一对多批量支付签名](../sign/sign.md#一对多批量支付签名)                   | /sign/batch                    |
| [多对多批量支付签名](../sign/sign.md#多对多批量支付签名)                   | /sign/bulk                     |
| [挂单签名](../sign/sign.md#挂单签名)                                       | /sign/order/entry              |
| [取消挂单签名](../sign/sign.md#取消挂单签名)                               | /sign/order/cancel             |
| [设置挂单佣金签名](../sign/sign.md#设置挂单佣金签名)                       | /sign/order/brokers            |
| [设置帐号的多重签名列表](../multisign/multisign.md#设置帐号的多重签名列表) | /multisign/:account/signerlist |
| [废除帐号的主秘钥](../multisign/multisign.md#废除帐号的主秘钥)             | /multisign/:account/abolish    |
| [激活帐号的主秘钥](../multisign/multisign.md#激活帐号的主秘钥)             | /multisign/:account/activate   |
| [直接多重签名交易](../multisign/multisign.md#直接多重签名交易)             | /multisign/pay                 |
| [发起多重签名交易](../multisign/multisign.md#发起多重签名交易)             | /multisign/steps/initiate      |
| [加入多重签名交易](../multisign/multisign.md#加入多重签名交易)             | /multisign/steps/join          |