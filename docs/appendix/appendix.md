## 附录1: 返回值Code说明

| code   | 说明               |
| ------ | ------------------ |
| 0      | 正常返回,成功      |
| 400xxx | 参数错误           |
| 400000 | 参数不符合规范     |
| 401xxx | 需要身份验证       |
| 403xxx | 访问被拒绝         |
| 404xxx | 未找到资源         |
| 500xxx | 服务器出错         |
| 500000 | 服务器内部错误     |
| 503xxx | 服务器维护或者宕机 |

### 补充说明
  当http返回status为500时候，msg字段会包含一些基础错误的描述，data的值为string或者object。都是底层返回来的。使用的时候可以加以判断。格式化使用。

## 附录2: 底层常见返回码说明

| 返回码                    | 英文说明                                                                      | 中文翻译(直译,具体语义请参照英文说明)                     |
| ------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| tecCLAIM                  | Fee claimed. Sequence used. No action.                                        | 费。顺序使用。没有行动。                                  |
| tecDIR_FULL               | Can not add entry to full directory.                                          | 无法将条目添加到完整目录。                                |
| tecFAILED_PROCESSING      | Failed to correctly process transaction.                                      | 未能正确处理事务。                                        |
| tecINSUF_RESERVE_LINE     | Insufficient reserve to add trust line.                                       | 储备不足，无法增加信任线。                                |
| tecINSUF_RESERVE_OFFER    | Insufficient reserve to create offer.                                         | 储备不足，无法提供报价。                                  |
| tecNO_DST                 | Destination does not exist. Send SWT to create it.                            | 目的地不存在。发送SWT来创建它。                           |
| tecNO_DST_INSUF_SWT       | Destination does not exist. Too little SWT sent to create it.                 | 目的地不存在。发送的SWT太少，无法创建它。                 |
| tecNO_LINE_INSUF_RESERVE  | No such line. Too little reserve to create it.                                | 没有这样的线。储备太少，无法创建它。                      |
| tecNO_LINE_REDUNDANT      | Can't set non-existent line to default.                                       | 无法将不存在的行设置为默认值。                            |
| tecPATH_DRY               | Path could not send partial amount.                                           | 路径无法发送部分数量。                                    |
| tecPATH_PARTIAL           | Path could not send full amount.                                              | 路径无法发送完整数量。                                    |
| tecMASTER_DISABLED        | Master key is disabled.                                                       | 主密钥被禁用。                                            |
| tecNO_REGULAR_KEY         | Regular key is not set.                                                       | 没有设置常规键。                                          |
| tecUNFUNDED               | One of `_ADD`, `_OFFER`, or `_SEND`. Deprecated.                              | 添加、提供或发送中的一个。弃用。                          |
| tecUNFUNDED_ADD           | Insufficient SWT balance for WalletAdd.                                       | WalletAdd SWT余额不足。                                   |
| tecUNFUNDED_OFFER         | Insufficient balance to fund created offer.                                   | 余额不足，无法提供创建要约的资金。                        |
| tecUNFUNDED_PAYMENT       | Insufficient SWT balance to send.                                             | SWT余额不足，无法发送。                                   |
| tecOWNERS                 | Non-zero owner count.                                                         | 非零所有者计数。                                          |
| tecNO_ISSUER              | Issuer account does not exist.                                                | 发行人帐户不存在。                                        |
| tecNO_AUTH                | Not authorized to hold asset.                                                 | 未获授权持有资产。                                        |
| tecNO_LINE                | No such line.                                                                 | 没有这样的线。                                            |
| tecINSUFF_FEE             | Insufficient balance to pay fee.                                              | 余额不足，无法支付费用。                                  |
| tecFROZEN                 | Asset is frozen.                                                              | 资产冻结。                                                |
| tecNO_TARGET              | Target account does not exist.                                                | 目标帐户不存在。                                          |
| tecNO_PERMISSION          | No permission to perform requested operation.                                 | 没有执行请求操作的权限。                                  |
| tecNO_ENTRY               | No matching entry found.                                                      | 没有找到匹配的条目。                                      |
| tecINSUFFICIENT_RESERVE   | Insufficient reserve to complete requested operation.                         | 储备不足，无法完成请求的操作。                            |
| tecNEED_MASTER_KEY        | The operation requires the use of the Master Key.                             | 该操作需要使用主密钥。                                    |
| tecDST_TAG_NEEDED         | A destination tag is required.                                                | 需要一个目的地标签。                                      |
| tecINTERNAL               | An internal error has occurred during processing.                             | 处理过程中发生内部错误。                                  |
| tefALREADY                | The exact transaction was already in this ledger.                             | 确切的交易已经在这个分类帐里了。                          |
| tefBAD_ADD_AUTH           | Not authorized to add account.                                                | 未授权添加帐户。                                          |
| tefBAD_AUTH               | Transaction's public key is not authorized.                                   | 没有授权事务的公钥。                                      |
| tefBAD_LEDGER             | Ledger in unexpected state.                                                   | 处于意外状态的分类帐。                                    |
| tefCREATED                | Can't add an already created account.                                         | 无法添加已创建的帐户。                                    |
| tefEXCEPTION              | Unexpected program state.                                                     | 意想不到的程序状态。                                      |
| tefFAILURE                | Failed to apply.                                                              | 未能申请。                                                |
| tefINTERNAL               | Internal error.                                                               | 内部错误。                                                |
| tefMASTER_DISABLED        | Master key is disabled.                                                       | 主密钥被禁用。                                            |
| tefMAX_LEDGER             | Ledger sequence too high.                                                     | 分类帐顺序过高。                                          |
| tefNO_AUTH_REQUIRED       | Auth is not required.                                                         | 不需要认证。                                              |
| tefPAST_SEQ               | This sequence number has already past.                                        | 这个序列号已经过去了。                                    |
| tefWRONG_PRIOR            | This previous transaction does not match.                                     | 前一个事务不匹配。                                        |
| telLOCAL_ERROR            | Local failure.                                                                | 当地的失败。                                              |
| telBAD_DOMAIN             | Domain too long.                                                              | 域名太长了。                                              |
| telBAD_PATH_COUNT         | Malformed: Too many paths.                                                    | 畸形:路径太多。                                           |
| telBAD_PUBLIC_KEY         | Public key too long.                                                          | 公钥太长。                                                |
| telFAILED_PROCESSING      | Failed to correctly process transaction.                                      | 未能正确处理事务。                                        |
| telINSUF_FEE_P            | Fee insufficient.                                                             | 费不足。                                                  |
| telNO_DST_PARTIAL         | Partial payment to create account not allowed.                                | 部分付款创建帐户不允许。                                  |
| telBLKLIST                | Tx disable for blacklist.                                                     | Tx禁用黑名单。                                            |
| telINSUF_FUND             | Fund insufficient.                                                            | 基金不足。                                                |
| temMALFORMED              | Malformed transaction.                                                        | 畸形的事务。                                              |
| temBAD_AMOUNT             | Can only send positive amounts.                                               | 只能发送正金额。                                          |
| temBAD_AUTH_MASTER        | Auth for unclaimed account needs correct master key.                          | 无人认领帐户的认证需要正确的主密钥。                      |
| temBAD_CURRENCY           | Malformed: Bad currency.                                                      | 畸形:糟糕的货币。                                         |
| temBAD_EXPIRATION         | Malformed: Bad expiration.                                                    | 畸形:坏过期。                                             |
| temBAD_FEE                | Invalid fee, negative or not SWT.                                             | 无效费用，否定或不SWT。                                   |
| temBAD_ISSUER             | Malformed: Bad issuer.                                                        | 畸形:糟糕的发行人。                                       |
| temBAD_LIMIT              | Limits must be non-negative.                                                  | 极限必须是非负的。                                        |
| temBAD_QUORUM             | Quorums must be non-negative.                                                 | Quorums必须是非负的。                                     |
| temBAD_WEIGHT             | Weights must be non-negative.                                                 | 权值必须是非负的。                                        |
| temBAD_OFFER              | Malformed: Bad offer.                                                         | 畸形:糟糕的报价。                                         |
| temBAD_PATH               | Malformed: Bad path.                                                          | 畸形:糟糕的道路。                                         |
| temBAD_PATH_LOOP          | Malformed: Loop in path.                                                      | 畸形:路径中的循环。                                       |
| temBAD_SEND_SWT_LIMIT     | Malformed: Limit quality is not allowed for SWT to SWT.                       | 畸形:SWT到SWT不允许限定质量。                             |
| temBAD_SEND_SWT_MAX       | Malformed: Send max is not allowed for SWT to SWT.                            | 畸形:发送max是不允许SWT到SWT。                            |
| temBAD_SEND_SWT_NO_DIRECT | Malformed: No Skywell direct is not allowed for SWT to SWT.                   | 畸形:没有Skywell直接是不允许SWT的SWT。                    |
| temBAD_SEND_SWT_PARTIAL   | Malformed: Partial payment is not allowed for SWT to SWT.                     | 畸形:SWT不允许部分付款给SWT。                             |
| temBAD_SEND_SWT_PATHS     | Malformed: Paths are not allowed for SWT to SWT.                              | 畸形:SWT到SWT的路径不允许。                               |
| temBAD_SEQUENCE           | Malformed: Sequence is not in the past.                                       | 畸形:序列不是过去的。                                     |
| temBAD_SIGNATURE          | Malformed: Bad signature.                                                     | 畸形:糟糕的签名。                                         |
| temBAD_SRC_ACCOUNT        | Malformed: Bad source account.                                                | 格式不正确:错误的源帐户。                                 |
| temBAD_TRANSFER_RATE      | Malformed: Transfer rate must be >= 1.0                                       | 畸形:传输率必须为1.0                                      |
| temDST_IS_SRC             | Destination may not be source.                                                | 目标可能不是源。                                          |
| temDST_NEEDED             | Destination not specified.                                                    | 未指定目的地。                                            |
| temINVALID                | The transaction is ill-formed.                                                | 这笔交易没有成形。                                        |
| temINVALID_FLAG           | The transaction has an invalid flag.                                          | 事务具有无效标志。                                        |
| temREDUNDANT              | Sends same currency to self.                                                  | 发送相同的货币给self。                                    |
| temREDUNDANTSIGN          | Add self as additional sign.                                                  | 添加self作为附加符号。                                    |
| temSKYWELL_EMPTY          | PathSet with no paths.                                                        | 没有路径的路径集。                                        |
| temUNCERTAIN              | In process of determining result. Never returned.                             | 在决定结果的过程中。再也没有回来。                        |
| temUNKNOWN                | The transaction requires logic that is not implemented yet.                   | 事务需要尚未实现的逻辑。                                  |
| temDISABLED               | The transaction requires logic that is currently disabled.                    | 事务需要当前禁用的逻辑。                                  |
| temMULTIINIT              | contract code has multi init function                                         | 合同代码具有多重初始化功能                                |
| terRETRY                  | Retry transaction.                                                            | 重试事务。                                                |
| terFUNDS_SPENT            | Can't set password, password set funds already spent.                         | 无法设置密码，密码设置资金已用。                          |
| terINSUF_FEE_B            | Account balance can't pay fee.                                                | 账号余额不能支付费用。                                    |
| terLAST                   | Process last.                                                                 | 最后的过程。                                              |
| terNO_SKYWELL             | Path does not permit rippling.                                                | 小路不允许荡漾。                                          |
| terNO_ACCOUNT             | The source account does not exist.                                            | 源帐户不存在。                                            |
| terNO_AUTH                | Not authorized to hold IOUs.                                                  | 未获授权持有借据。                                        |
| terNO_LINE                | No such line.                                                                 | 没有这样的线。                                            |
| terPRE_SEQ                | Missing/inapplicable prior transaction.                                       | 失踪前/不适用的事务。                                     |
| terOWNERS                 | Non-zero owner count.                                                         | 非零所有者计数。                                          |
| tesSUCCESS                | The transaction was applied. Only final in a validated ledger.                | 事务被应用。只有最终在一个有效的分类帐。                  |
| rpcLOW_FEE                | fee field is lower than transaction needed.                                   | 费领域低于事务需要的。(手续费过低)                        |
| tefBAD_QUORUM             | Signatures provided do not meet the quorum.                                   | 签名提供不符合法定人数。(权重未达到阈值)                  |
| tefBAD_SIGNATURE          | A signature is provided for a non-signer.                                     | non-signer。提供了一个签名(签名错误)                      |
| tefNOT_MULTI_SIGNING      | Account has no appropriate list of multi-signers.                             | 账号没有适当的multi-signers列表。(签名列表不存在)         |
| tecNO_ALTERNATIVE_KEY     | The operation would remove the ability to sign transactions with the account. | 该操作将删除与帐户签署交易的能力。(原因:没有设置签名列表) |


## 附录3: 交易类型type说明

底层返回的交易类型主要有:

* Payment(支付类)
* OfferCreate(创建挂单类)
* OfferCancel(取消挂单类)
* ConfigContract(lua版合约类)
* AlethContract(solidity版合约类)
* SignerListSet(签名列表类)
* Brokerage(手续费设置类)

processTx方法解析交易信息，主要有如下信息：

* date： 交易时间UNIXTIME
* hash：交易hash
* fee： 燃料费
* result ：交易结果 
* memos： 交易的备注信息
* balances： 变动币种余额
* balancesPrev： 交易前变动币种余额
* type： 交易类型

### type有如下几种：

#### sent，支付类，发送，在交易信息中包含的信息有：

| 参数           | 类型   | 说明                |
| -------------- | ------ | ------------------- |
| counterparty   | String | 支付对家，即接收方  |
| amount         | Object | 交易数量            |
| value          | String | 金额                |
| value.currency | String | 币种                |
| value.issuer   | String | 货币发行方，SWT为空 |
| value.effects  | Array  | []，空              |

#### received，支付类，接收，在交易信息中包含的信息有：

| 参数           | 类型   | 说明                |
| -------------- | ------ | ------------------- |
| counterparty   | String | 支付对家，即发送方  |
| amount         | Object | 交易数量            |
| value          | String | 金额                |
| value.currency | String | 币种                |
| value.issuer   | String | 货币发行方，SWT为空 |
| value.effects  | Array  | []，空              |

#### offernew，创建挂单，在交易信息中包含的信息有：

| 参数          | 类型    | 说明                    |
| ------------- | ------- | ----------------------- |
| offertype     | String  | 挂单买卖类型，sell或buy |
| gets          | Object  | 对方得到的              |
| gets.value    | String  | 金额                    |
| gets.currency | String  | 币种                    |
| gets.issuer   | String  | 货币发行方，SWT为空     |
| pays          | Object  | 对方支付的              |
| pays.value    | String  | 金额                    |
| pays.currency | String  | 币种                    |
| pays.issuer   | String  | 货币发行方，SWT为空     |
| seq           | Integer | 单子序号                |
| price         | Integer | 价格                    |
| effects       | Array   | 详见下面的effects解释   |

#### offercancel，取消挂单，在交易信息中包含的信息有

| 参数          | 类型   | 说明                  |
| ------------- | ------ | --------------------- |
| offerseq      | String | 该笔交易的单子号      |
| gets          | Object | 对方得到的            |
| gets.value    | String | 金额                  |
| gets.currency | String | 币种                  |
| gets.issuer   | String | 货币发行方，SWT为空   |
| pays          | Object | 对方支付的            |
| pays.value    | String | 金额                  |
| pays.currency | String | 币种                  |
| pays.issuer   | String | 货币发行方，SWT为空   |
| effects       | Array  | 详见下面的effects解释 |

#### brokerage：手续费设置类，在交易信息中包含的信息有：

| 参数            | 类型    | 说明                         |
| --------------- | ------- | ---------------------------- |
| feeAccount      | String  | 收费账号                     |
| mol             | Integer | 手续费分子                   |
| den             | Integer | 手续费分母                   |
| amount          | Object  | 收手续费的币种               |
| amount.value    | String  | 金额，占位，没有任何实际含义 |
| amount.currency | String  | 币种                         |
| amount.issuer   | String  | 货币发行方，SWT为空          |
| seq             | Integer | 单子序号                     |
| effects         | Array   | []，空                       |

#### alethcontract：solidity版合约类，在交易信息中包含的信息有：

> 暂无更多说明

#### configcontract：lua版合约类，在交易信息中包含的信息有：

> 暂无更多说明

#### offereffect，挂单成交情况，即被动成交的情况，在交易信息中包含的信息有：

| 参数    | 类型  | 说明   |
| ------- | ----- | ------ |
| effects | Array | []，空 |

#### signerlistset，签名列表类，在交易信息中包含的信息有：

| 参数             | 类型    | 说明           |
| ---------------- | ------- | -------------- |
| threshold        | Integer | 阈值           |
| lists            | Array   | 签名列表       |
| lists[n].account | String  | 账号           |
| lists[n].weight  | String  | 该账号对应权重 |
| effects          | Array   | []，空         |

#### setblacklist，设置黑名单类，在交易信息中包含的信息有：

| 参数    | 类型   | 说明               |
| ------- | ------ | ------------------ |
| src     | String | 设置黑名单的源账号 |
| black   | String | 黑名单账号         |
| effects | Array  | []，空             |

#### removeblacklist，移除黑名单类，在交易信息中包含的信息有：

| 参数    | 类型   | 说明               |
| ------- | ------ | ------------------ |
| src     | String | 设置黑名单的源账号 |
| black   | String | 黑名单账号         |
| effects | Array  | []，空             |



## 附录4: 交易效果effects说明

effects是每个用户交易记录信息里面的交易效果，是个JSON数组，数组可以包含多项，每项内容都包含效果类型effect字段，根据effect的不同里面的内容也不同：

### offer_funded 被动成交

参考样例:
- hash： D9A717FC8388053764908DE867E4FFD72D8D3CD9AA92A53A5FF402B3313D06B0
- 账号： jKCQAZwwN2sQG3Mb56GmWVqxkgpLwwAZuR

其中包含的信息有：

| 字段                 | 类型    | 说明                                     |
| -------------------- | ------- | ---------------------------------------- |
| effect               | String  | offer_funded                             |
| counterparty         | Object  | 对家信息                                 |
| counterparty.account | String  | 对家账号                                 |
| counterparty.seq     | Integer | 对家单子序号                             |
| counterparty.hash    | String  | 对家交易hash                             |
| got                  | Object  | 用户获得的金额                           |
| got.value            | String  | 金额                                     |
| got.currency         | String  | 货币                                     |
| got.issuer           | String  | 货币发行方，SWT为空字符串                |
| paid                 | Object  | 用户付出的金额                           |
| paid.value           | String  | 金额                                     |
| paid.currency        | String  | 货币                                     |
| paid.issuer          | String  | 货币发行方，SWT为空字符串                |
| type                 | String  | 交易类型，sold或bought                   |
| platform             | String  | 平台标识账号，设置了才有此字段           |
| rate                 | Integer | 手续费汇率，设置了才有此字段             |
| fee                  | String  | 手续费金额，收取手续费时才有此字段       |
| seq                  | Integer | 挂单序号，表示被成交的单子               |
| price                | String  | 价格，4位小数                            |
| deleted              | Boolean | 单子是否被删除了，被吃了的单子会被删除掉 |


### offer_partially_funded 交易部分成交

参考样例:
- hash： 80A4C0EC32AE6E16A6025A1420DD6AB67DEE2AFED1A618A71A8AD1E37A54FB2D
- 账号： jKCQAZwwN2sQG3Mb56GmWVqxkgpLwwAZuR

其中包含的信息有：

| 字段                 | 类型    | 说明                               |
| -------------------- | ------- | ---------------------------------- |
| effect               | String  | offer_partially_funded             |
| counterparty         | Object  | 对家信息                           |
| counterparty.account | String  | 对家账号                           |
| counterparty.seq     | Integer | 对家单子序号                       |
| counterparty.hash    | String  | 对家交易hash                       |
| remaining            | Boolean | 是否有剩余的单子                   |
| gets                 | Object  | 对方获得的金额                     |
| gets.value           | String  | 数值                               |
| gets.currency        | String  | 货币                               |
| gets.issuer          | String  | 货币发行方，SWT为空字符串          |
| pays                 | Object  | 对方支付的金额                     |
| pays.value           | String  | 数值                               |
| pays.currency        | String  | 货币                               |
| pays.issuer          | String  | 货币发行方，SWT为空字符串          |
| paid                 | Object  | 用户支付的金额                     |
| paid.value           | String  | 数值                               |
| paid.currency        | String  | 货币                               |
| paid.issuer          | String  | 货币发行方，SWT为空字符串          |
| got                  | Object  | 用户获得的金额                     |
| got.value            | String  | 数值                               |
| got.currency         | String  | 货币                               |
| got.issuer           | String  | 货币发行方，SWT为空字符串          |
| type                 | String  | 交易类型，sold或bought             |
| platform             | String  | 平台标识账号，设置了才有此字段     |
| rate                 | Integer | 手续费汇率，设置了才有此字段       |
| fee                  | String  | 手续费金额，收取手续费时才有此字段 |
| seq                  | Integer | 挂单序号，表示被部分成交的单子     |
| price                | String  | 挂单的价格，remaining为true才有    |


### offer_cancelled 交易单子被取消

参考样例:
- hash： 286C40DB44DF4340B8974E635A49C46475B4D3F3CE0A67E8CB8EC93B399A94B2
- 账号： jKCQAZwwN2sQG3Mb56GmWVqxkgpLwwAZuR

其中包含的信息有：

| 字段          | 类型    | 说明                           |
| ------------- | ------- | ------------------------------ |
| effect        | String  | offer_cancelled                |
| hash          | String  | 被取消单子的hash               |
| gets          | Object  | 对方获得的金额                 |
| gets.value    | String  | 数值                           |
| gets.currency | String  | 货币                           |
| gets.issuer   | String  | 货币发行方，SWT为空字符串      |
| pays          | Object  | 对方支付的金额                 |
| pays.value    | String  | 数值                           |
| pays.currency | String  | 货币                           |
| pays.issuer   | String  | 货币发行方，SWT为空字符串      |
| type          | String  | 交易类型，sell或buy            |
| platform      | String  | 平台标识账号，设置了才有此字段 |
| rate          | Integer | 手续费汇率，设置了才有此字段   |
| seq           | Integer | 被取消单子的序号               |
| price         | String  | 挂单的价格                     |
| deleted       | Boolean | 单子是否被删除，取消单子为true |

### offer_created 交易单子创建

参考样例:
- hash： 55DAB736BB47E940159ADA262B050A110A4EC9C5E917A08649E54DA587E76D9A
- 账号： jKCQAZwwN2sQG3Mb56GmWVqxkgpLwwAZuR

其中包含的信息有：

| 字段          | 类型    | 说明                           |
| ------------- | ------- | ------------------------------ |
| effect        | String  | offer_created                  |
| gets          | Object  | 对方获得的金额                 |
| gets.value    | String  | 数值                           |
| gets.currency | String  | 货币                           |
| gets.issuer   | String  | 货币发行方，SWT为空字符串      |
| pays          | Object  | 对方支付的金额                 |
| pays.value    | String  | 数值                           |
| pays.currency | String  | 货币                           |
| pays.issuer   | String  | 货币发行方，SWT为空字符串      |
| type          | String  | 交易类型，sell或buy            |
| platform      | String  | 平台标识账号，设置了才有此字段 |
| rate          | Integer | 手续费汇率，设置了才有此字段   |
| seq           | Integer | 新建的单子序号                 |
| price         | String  | 挂单的价格                     |

### offer_bought 主动成交

参考样例:
- hash： F137C081D7B486DA7ACA8F790DE4A231E6B23281E4CA4A5A40CEAF1E43F1390A
- 账号： jKCQAZwwN2sQG3Mb56GmWVqxkgpLwwAZuR

其中包含的信息有：

| 字段          | 类型    | 说明                               |
| ------------- | ------- | ---------------------------------- |
| effect        | String  | offer_bought                       |
| counterparty  | Object  | 对家信息                           |
| account       | String  | 对家账号                           |
| seq           | Integer | 对家单子序号                       |
| hash          | String  | 对家交易hash                       |
| paid          | Object  | 用户支付的金额                     |
| paid.value    | String  | 数值                               |
| paid.currency | String  | 货币                               |
| paid.issuer   | String  | 货币发行方，SWT为空字符串          |
| got           | Object  | 用户获得的金额                     |
| got.value     | String  | 数值                               |
| got.currency  | String  | 货币                               |
| got.issuer    | String  | 货币发行方，SWT为空字符串          |
| type          | String  | 交易类型，sold或bough              |
| price         | String  | 价格                               |
| platform      | String  | 平台标识账号，设置了才有此字段     |
| rate          | Integer | 手续费汇率，设置了才有此字段       |
| fee           | String  | 手续费金额，收取手续费时才有此字段 |

### setregularkey 代理账号

其中包含的信息有：

| 字段       | 类型   | 说明                    |
| ---------- | ------ | ----------------------- |
| effect     | String | set_regular_key         |
| type       | String | 交易类型，setregularkey |
| account    | String | 这是代理的源账号        |
| regularkey | String | 代理账号                |