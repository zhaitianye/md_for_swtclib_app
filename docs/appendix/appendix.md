## 附录1: 返回值Code说明

| code   | 说明               |
|--------|------------------|
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

| 返回码                   | 英文说明                                                       | 中文翻译(直译,具体语义请参照英文说明)    |
|----------------------------|----------------------------------------------------------------|---------------------------------------|
| tecCLAIM                   | Fee claimed. Sequence used. No action.                         | 费。顺序使用。没有行动。                    |
| tecDIR_FULL                | Can not add entry to full directory.                           | 无法将条目添加到完整目录。                |
| tecFAILED_PROCESSING       | Failed to correctly process transaction.                       | 未能正确处理事务。                        |
| tecINSUF_RESERVE_LINE      | Insufficient reserve to add trust line.                        | 准备金不足，增加信托额度。                 |
| tecINSUF_RESERVE_OFFER     | Insufficient reserve to create offer.                          | 没有足够的储备来创造报价。                |
| tecNO_DST                  | Destination does not exist. Send SWT to create it.             | 目的地不存在。发送SWT来创建它。            |
| tecNO_DST_INSUF_SWT        | Destination does not exist. Too little SWT sent to create it.  | 目的地不存在。发送的SWT太少，无法创建它。   |
| tecNO_LINE_INSUF_RESERVE   | No such line. Too little reserve to create it.                 | 没有这样的线。太少的储备来创造它。         |
| tecNO_LINE_REDUNDANT       | Can't set non-existent line to default.                        | 无法将不存在的行设置为默认。              |
| tecPATH_DRY                | Path could not send partial amount.                            | 路径无法发送部分金额。                    |
| tecPATH_PARTIAL            | Path could not send full amount.                               | 路径无法发送全部金额。                    |
| tecMASTER_DISABLED         | Master key is disabled.                                        | 主键已禁用。                              |
| tecNO_REGULAR_KEY          | Regular key is not set.                                        | 未设置普通键。                            |
| tecUNFUNDED                | One of _ADD, _OFFER, or _SEND. Deprecated.                     | _ADD、_OFFER或_SEND中的一个。弃用。         |
| tecUNFUNDED_ADD            | Insufficient SWT balance for WalletAdd.                        | WalletAdd的SWT余额不足。                  |
| tecUNFUNDED_OFFER          | Insufficient balance to fund created offer.                    | 余额不足，以基金创造要约。                 |
| tecUNFUNDED_PAYMENT        | Insufficient SWT balance to send.                              | 发送的SWT余额不足。                       |
| tecOWNERS                  | Non-zero owner count.                                          | 非零所有者计数。                          |
| tecNO_ISSUER               | Issuer account does not exist.                                 | 发行人帐户不存在。                        |
| tecNO_AUTH                 | Not authorized to hold asset.                                  | 未被授权持有资产。                        |
| tecNO_LINE                 | No such line.                                                  | 没有这样的线。                            |
| tecINSUFF_FEE              | Insufficient balance to pay fee.                               | 余额不足支付费用。                        |
| tecFROZEN                  | Asset is frozen.                                               | 资产冻结。                                |
| tecNO_TARGET               | Target account does not exist.                                 | 目标帐户不存在。                          |
| tecNO_PERMISSION           | No permission to perform requested operation.                  | 没有执行请求操作的权限。                  |
| tecNO_ENTRY                | No matching entry found.                                       | 没有找到匹配的条目。                      |
| tecINSUFFICIENT_RESERVE    | Insufficient reserve to complete requested operation.          | 没有足够的储备来完成请求的操作。          |
| tecNEED_MASTER_KEY         | The operation requires the use of the Master Key.              | 该操作需要使用主键。                      |
| tecDST_TAG_NEEDED          | A destination tag is required.                                 | 需要目标标记。                            |
| tecINTERNAL                | An internal error has occurred during processing.              | 处理过程中发生内部错误。                  |
| tefALREADY                 | The exact transaction was already in this ledger.              | 确切的交易已经在这个分类账里了。          |
| tefBAD_ADD_AUTH            | Not authorized to add account.                                 | 未授权添加帐号。                          |
| tefBAD_AUTH                | Transaction's public key is not authorized.                    | 事务的公钥未被授权。                      |
| tefBAD_LEDGER              | Ledger in unexpected state.                                    | 分类帐处于意外状态。                      |
| tefCREATED                 | Can't add an already created account.                          | 无法添加已创建的帐户。                    |
| tefEXCEPTION               | Unexpected program state.                                      | 意想不到的程序状态。                      |
| tefFAILURE                 | Failed to apply.                                               | 未能申请。                                |
| tefINTERNAL                | Internal error.                                                | 内部错误。                                |
| tefMASTER_DISABLED         | Master key is disabled.                                        | 主键已禁用。                              |
| tefMAX_LEDGER              | Ledger sequence too high.                                      | 分类帐次序太高。                          |
| tefNO_AUTH_REQUIRED        | Auth is not required.                                          | 不需要验证。                              |
| tefPAST_SEQ                | This sequence number has already past.                         | 这个序列号已经过期了。                    |
| tefWRONG_PRIOR             | This previous transaction does not match.                      | 此先前的事务不匹配。                      |
| telLOCAL_ERROR             | Local failure.                                                 | 当地的失败。                              |
| telBAD_DOMAIN              | Domain too long.                                               | 域名太长了。                              |
| telBAD_PATH_COUNT          | Malformed: Too many paths.                                     | 畸形的:路径太多。                         |
| telBAD_PUBLIC_KEY          | Public key too long.                                           | 公钥太长。                                |
| telFAILED_PROCESSING       | Failed to correctly process transaction.                       | 未能正确处理事务。                        |
| telINSUF_FEE_P             | Fee insufficient.                                              | 费不足。                                  |
| telNO_DST_PARTIAL          | Partial payment to create account not allowed.                 | 部分付款创建帐户不允许。                  |
| telBLKLIST                 | Tx disable for blacklist.                                      | Tx禁用黑名单。                            |
| telINSUF_FUND              | Fund insufficient.                                             | 基金不足。                                |
| temMALFORMED               | Malformed transaction.                                         | 畸形的事务。                              |
| temBAD_AMOUNT              | Can only send positive amounts.                                | 只能发送正数量。                          |
| temBAD_AUTH_MASTER         | Auth for unclaimed account needs correct master key.           | 无人认领的帐户需要正确的主密钥。          |
| temBAD_CURRENCY            | Malformed: Bad currency.                                       | 畸形:糟糕的货币。                         |
| temBAD_EXPIRATION          | Malformed: Bad expiration.                                     | 畸形:坏过期。                             |
| temBAD_FEE                 | Invalid fee, negative or not SWT.                              | 无效费用，负或非SWT。                      |
| temBAD_ISSUER              | Malformed: Bad issuer.                                         | 畸形:糟糕的发行人。                       |
| temBAD_LIMIT               | Limits must be non-negative.                                   | 极限必须是非负的。                        |
| temBAD_QUORUM              | Quorums must be non-negative.                                  | Quorums必须是非负的。                     |
| temBAD_WEIGHT              | Weights must be non-negative.                                  | 权重必须是非负的。                        |
| temBAD_OFFER               | Malformed: Bad offer.                                          | 畸形:糟糕的报价。                         |
| temBAD_PATH                | Malformed: Bad path.                                           | 畸形:糟糕的道路。                         |
| temBAD_PATH_LOOP           | Malformed: Loop in path.                                       | 畸形:路径中的循环。                       |
| temBAD_SEND_SWT_LIMIT      | Malformed: Limit quality is not allowed for SWT to SWT.        | 变形:不允许SWT到SWT的极限质量。           |
| temBAD_SEND_SWT_MAX        | Malformed: Send max is not allowed for SWT to SWT.             | 变形:发送最大值不允许SWT到SWT。           |
| temBAD_SEND_SWT_NO_DIR ECT | Malformed: No Skywell direct is not allowed for SWT to SWT.    | 变形:不允许SWT对SWT使用Skywell direct。   |
| temBAD_SEND_SWT_PARTIAL    | Malformed: Partial payment is not allowed for SWT to SWT.      | 不允许SWT向SWT支付部分款项。              |
| temBAD_SEND_SWT_PATHS      | Malformed: Paths are not allowed for SWT to SWT.               | 变形:不允许SWT到SWT的路径。               |
| temBAD_SEQUENCE            | Malformed: Sequence is not in the past.                        | 变形:序列不是在过去。                     |
| temBAD_SIGNATURE           | Malformed: Bad signature.                                      | 畸形:糟糕的签名。                         |
| temBAD_SRC_ACCOUNT         | Malformed: Bad source account.                                 | 畸形的:坏的来源帐户。                     |
| temBAD_TRANSFER_RATE       | Malformed: Transfer rate must be >= 1.0                        | 变形:传输率必须是>= 1.0                  |
| temDST_IS_SRC              | Destination may not be source.                                 | 目标可能不是源。                          |
| temDST_NEEDED              | Destination not specified.                                     | 未指定目的地。                            |
| temINVALID                 | The transaction is ill-formed.                                 | 这笔交易是不正当的。                      |
| temINVALID_FLAG            | The transaction has an invalid flag.                           | 事务有一个无效的标记。                    |
| temREDUNDANT               | Sends same currency to self.                                   | 给self发送相同的货币。                    |
| temREDUNDANTSIGN           | Add self as additional sign.                                   | 添加self作为附加符号。                    |
| temSKYWELL_EMPTY           | PathSet with no paths.                                         | 没有路径的路径集。                        |
| temUNCERTAIN               | In process of determining result. Never returned.              | 在确定结果的过程中。再也没有回来。         |
| temUNKNOWN                 | The transaction requires logic that is not implemented yet.    | 事务需要尚未实现的逻辑。                  |
| temDISABLED                | The transaction requires logic that is currently disabled.     | 事务需要当前禁用的逻辑。                  |
| temMULTIINIT               | contract code has multi init function                          | 合同代码具有多重初始化功能               |
| terRETRY                   | Retry transaction.                                             | 重试事务。                                |
| terFUNDS_SPENT             | Can't set password, password set funds already spent.          | 无法设置密码，密码设置资金已用完。         |
| terINSUF_FEE_B             | Account balance can't pay fee.                                 | 账户余额不能支付费用。                    |
| terLAST                    | Process last.                                                  | 最后的过程。                              |
| terNO_SKYWELL              | Path does not permit rippling.                                 | 这条路不允许泛起涟漪。                    |
| terNO_ACCOUNT              | The source account does not exist.                             | 源帐户不存在。                            |
| terNO_AUTH                 | Not authorized to hold IOUs.                                   | 未被授权持有欠条。                        |
| terNO_LINE                 | No such line.                                                  | 没有这样的线。                            |
| terPRE_SEQ                 | Missing/inapplicable prior transaction.                        | 失踪前/不适用的事务。                     |
| terOWNERS                  | Non-zero owner count.                                          | 非零所有者计数。                          |
| tesSUCCESS                 | The transaction was applied. Only final in a validated ledger. | 应用了事务。只有经过验证的总账才是最终的。 |