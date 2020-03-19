module.exports = {
  title: 'SWTCLIB_APP', // 名称
  description: '作为 SWTCLIB 处理的中间层,提供 RESTFUL API 接口服务', // 描述
  themeConfig: {
    nav: [
      
    ],
    sidebar: [
      '/',
      ['/server/server.md', '服务器相关'],
      ['/wallet/wallet.md', '钱包相关'],
      ['/account/account.md', '账号相关'],
      ['/brokers/brokers.md', '代理相关'],
      ['/ledgers/ledgers.md', '账本相关'],
      ['/tx/tx.md', '事务相关'],
      ['/orders/orders.md', '挂单相关'],
      ['/sign/sign.md', '签名相关'],
      ['/multisign/multisign.md', '多签相关'],
      ['/security/security.md', '安全相关'],
      ['/release/release.md', 'Docker部署'],
      ['/appendix/appendix.md', '附录'],
      ['/update/update.md', '更新说明']
    ],
  }
}