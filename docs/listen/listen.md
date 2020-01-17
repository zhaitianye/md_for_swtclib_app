## 监听事件

目前支持两个监听事件:
- 监听所有交易(transactions)
- 监听所有账本(ledger_closed)

监听结果为标准的websocket返回信息。

### 使用说明

使用的是标准WS链接，测试地址为 ws://{host}

监听如下两个事件：
- transactions
- ledger_closed

### 示例网址

{host}/socket/swtc-socket-test/1.html