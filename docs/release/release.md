## 说明 

此Docker为私有仓库，若需部署请于 [井通至尚](https://www.jingtumzs.com) 联系并申请部署权限

## docker登录
> 登录 [阿里云登录地址](https://signin.aliyun.com/login.htm), 获取docker的镜像的权限以及版本号。

```bash
sudo docker login --username=[登录名称] registry.cn-shenzhen.aliyuncs.com
```

## docker登出

```bash
sudo docker logout registry.cn-shenzhen.aliyuncs.com
```

## 拉取镜像

```bash
sudo docker pull registry.cn-shenzhen.aliyuncs.com/jingtum/swtclib-app:[镜像版本号]
```
## 查看镜像和容器

```bash
docker images
docker ps
docker ps -a
```
## 启动镜像
> 说明，此命令可以一键启动SWTCLIB-APP,需要设置暴露的端口号和需要链接的节点信息。
```bash
docker run -p [暴露端口]:7900 -d --name swtclib-app  -e SERVER_WS=[节点地址域名或者ip，例：wss://ws.jingtumzs.com] [镜像ID]
```

## 检查是否启动成功
1. 浏览器输入ip地址加端口进入首页，检测服务是否启动成功
2. 浏览器输入ip地址加端口加/server/info，检索是否和节点链接成功

## 查看日志

#### 直接查看日志：
```bash
docker logs swtclib-app
```
#### 主框架日志：
```bash
docker exec swtclib-app bash -c "cat /root/logs/swtclib_app/pord/egg-web.log"
```
#### 通用日志：
```bash
docker exec swtclib-app bash -c "cat /root/logs/swtclib_app/pord/swtclib_app-web.log"
```
#### 主要错误日志：
```bash
docker exec swtclib-app bash -c "cat /root/logs/swtclib_app/pord/common-error.log"
```
#### 副进程日志：
```bash
docker exec swtclib-app bash -c "cat /root/logs/swtclib_app/pord/egg-agent.log"
```
#### 定时任务日志：
```bash
docker exec swtclib-app bash -c "cat /root/logs/swtclib_app/pord/egg-schedule.log"
```
## 关闭程序

#### 安全关闭
```bash
docker exec swtclib-app bash -c "yarn stop-docker"
```
#### 直接关闭
```bash
docker stop swtclib-app
```
## 重启程序
```bash
docker start swtclib-app
```
## 删除容器
```bash
docker rm swtclib-app
```