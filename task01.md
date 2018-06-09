# 第一课：Node.js 简介

## 任务 1：浏览 Node.js 官网

- [Node.js 官方网站](https://nodejs.org/)  
- [Node.js 中文网站](http://nodejs.cn/)  

## 任务 2：浏览 Node.js API

- [Node.js 官方 API](https://nodejs.org/dist/latest-v8.x/docs/api/)  
- [Node.js 中文 API](http://nodejs.cn/api/)  

## 任务 3：下载并浏览电子书

- 电子书网盘链接：http://pan.baidu.com/s/1nuU6C8h 密码: h6jc  

## 任务 4：搭建开发环境

**方式一：导入虚拟机**

- 下载并安装 vmware workstation Pro 12+（**已经安装 vmware workstation，略过此任务**）  
- 下载并导入 [mocha.ova](http://pan.baidu.com/s/1o8a3E3o) 开发环境  
- 下载并安装 xshell 5  
- 配置 mocha 虚拟机的网卡 IP 地址  
- 配置 mocha 虚拟机的 git 参数，包括：user.name 和 user.email  

**方式二：从头安装**

- 参考：[Node.js 开发环境搭建](./setup-dev-env.md)

## 任务 5：编写 hello world 命令行程序

要求：
- 创建 nodejs-demo 目录
- 把 .tern-project 代码自动补全配置文件，放到 nodejs-demo 目录下，操作方法如下：
  - 在 nodejs-demo 目录下，运行 `wget http://sample.wangding.in/nodejs/tern-project`  
  - 在 nodejs-demo 目录下，运行 `mv tern-project .tern-project`  
- 创建 01-introduction 目录
- 编写 01-hello-world.js
- 在命令行打印 `hello world!` 字符

## 任务 6：编写 hello world web 程序

要求：
- 编写 02-hello-world-server.js
- 监听端口：8080
- 当收到 HTTP 请求时，发送响应文本 `hello world!`
- 用浏览器测试 web 程序
- 用 curl linux 命令行程序测试 web 程序
