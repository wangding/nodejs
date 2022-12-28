# 第 9 课：网络

## 阅读 Node.js API 资料

- [net API 资料](https://www.nodeapp.cn/net.html)

## TCP 服务端程序

要求：

- 创建 13-tcp 目录
- 编写 01-server.js 脚本
- 接收客户端的字符数据
- 收到 `ls` 时，将当前目录的文件名以及子目录名发送到客户端
- 收到 `quit` 时，服务程序退出运行
- 监听 8080 端口
- 用 telnet 测试本程序

## TCP 客户端程序

要求：

- 编写 02-my-telnet.js 脚本
- 支持命令行参数
- 第一个命令行参数是需要连接的远程服务器 IP 地址
- 第二个命令行参数是需要连接的远程服务器端口号
- 接收键盘输入字符
- 将接收到的键盘数据发送到远程服务器上
- 将远程服务器的响应数据打印到控制台上
- 连接到 HTTP 服务器上做测试，测试服务器地址：http://sample.wangding.co/web/one-div.html
- 连接到 FTP 服务器上做测试，测试服务器地址：ftp://ftp.gnu.org

## 阅读 Node.js API 资料

- [dgram API 资料](https://www.nodeapp.cn/dgram.html)  

## UDP 服务端程序

要求：

- 创建 14-udp 目录
- 编写 01-server.js 脚本
- 监听 8080 端口
- 收到客户端消息后，将客户端消息打印到控制台
- 用 nc 测试 UDP 服务端程序

## UDP 客户端程序

要求：

- 编写 02-my-nc.js 脚本
- 支持命令行参数
- 第一个命令行参数是需要连接的远程服务器 IP 地址
- 第二个命令行参数是需要连接的远程服务器端口号
- 接收键盘输入字符
- 将接收到的键盘数据发送到远程服务器上

## 阅读 Node.js API 资料

- [dns API 资料](https://www.nodeapp.cn/dns.html)

## 域名解析

要求：

- 创建 15-dns 目录
- 编写 01-dns.js 脚本
- 支持命令行参数
- 命令行参数是需要解析的域名
- 将域名解析的结果 IP 地址打印到控制台
