# `通知：此文档链接已经迁移！！！！` 

# [新文档地址](https://swtclib-app.jingtumzs.com/)

# SWTCLIB_APP

> 作为SWTC-LIB处理的中间层,提供 RESTFul API 接口服务


## 说明
此系统基于 [SWTC-LIB](https://swtcdoc.netlify.com/docs/swtclib/),API接口基本和 [SWTC-Proxy](https://swtcdoc.netlify.com/docs/swtcproxy/) 保持一致。

## 约定

* 安全第一，[公共接口](../security/security.md#可在公网使用的安全接口列表) 确保密钥不出本机。
* 安全第一，[传递私钥的接口](../security/security.md#需b端系统建立安全信道通讯使用的接口列表) 需要和B端系统建立安全信道
* 高易用性，提供业务所需的高级接口
* 尽量保持数据结构和 [SWTC-LIB](https://swtcdoc.netlify.com/docs/swtclib/) 对应一致
* 尽量保持提供的接口数量和 [SWTC-Proxy](https://swtcdoc.netlify.com/docs/swtcproxy/) 保持一致
* 所有API应答均为 JSON， 包括数据和错误
* 尽量支持可选参数， 几乎所有SWTC-LIB支持的参数都可以通过Query获得支持
* 面向企业用户，定制化服务
* 快速接入，支持 [Docker一键部署](../release/release.md)
* MD 标准文档
* 完整的 [更新说明](../update/update.md)