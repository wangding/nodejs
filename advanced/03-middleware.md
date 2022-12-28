# 第 3 章 中间件

## 阅读 Koa API 资料

- [Koa 中文版](https://www.koajs.com.cn/)
- [Koa 官网](https://koajs.com/)

## hello world

要求：

- 创建 03-hello-world 目录
- 编写 app.js 脚本
- 引入 koa 模块
- 实例化 koa 对象，监听 8080 端口
- 加载一个 koa 中间件（M-hello）
- 在中间件中对 HTTP 请求，返回 hello world 信息
- 用 curl 命令测试脚本程序

## logger 中间件

要求：

- 创建 04-middleware 目录
- 编写 01-logger.js 脚本
- 引入 koa 模块
- 实例化 koa 对象，监听 8080 端口
- 除了加载上一个任务的 M-hello 中间件
- 在 M-hello 中间件之前加载 M-logger 中间件
- M-logger 中间件可以在控制台打印 HTTP 请求方法和请求的 URL 信息
- 确保两个中间件都会执行
- 用 curl 命令测试脚本程序

## ms 中间件

要求：

- 编写 02-logger-ms.js 脚本
- 在上一个任务代码的基础上
- 在 M-logger 之后加载 M-ms 中间件
- 注意 M-ms 中间件在 M-hello 中间件之前加载
- M-ms 中间件统计 M-hello 中间件执行的时长，并打印在控制台上
- 用 curl 命令测试脚本程序

## 中间件之间传递数据

要求：

- 编写 03-pass-data.js 脚本
- 在上一个任务代码的基础上
- 用三种方法，将 M-ms 中间件中统计的时长数据传递给 M-logger 中间件
- 三种方法分别是：响应头传递数据、return 返回数据和 ctx 传递数据
- 在 M-logger 中间件中打印时长信息
- 用 curl 命令测试脚本程序

## logger 中间件增强版

要求：

- 编写 04-power-logger.js 脚本
- 在上一个任务代码的基础上
- 将 M-logger 和 M-ms 中间件的功能二合一
- 让 M-logger 中间件既可以打印 HTTP 请求方法
- 也可以打印 HTTP 请求的 URL 以及 M-hello 执行的时长
- 用 curl 命令测试脚本程序

## 单独封装的 logger 中间件

要求：

- 创建 middleware 子目录
- 把上一个任务中的 M-logger 中间件，单独封装成 logger.js 模块
- 把 logger.js 模块放在 middleware 目录下
- 编写 05-logger-middleware.js 脚本，功能跟上一个任务功能相同
- 只是调用单独封装的 logger.js 模块
- 用 curl 命令测试脚本程序

## 中间件中的异步任务

要求：

- 创建 lib 子目录
- 编写 lib/task.js 脚本
- task.js 模拟一个异步任务，该任务执行的时长是（0~1000ms）之间的随机数
- 编写 06-middleware-await.js 脚本
- 在任务 6 代码的基础上
- 在 M-hello 中间件中执行异步任务
- 检查 M-logger 中间件统计的时长信息是否正确
- 用 curl 命令测试脚本程序

## koa-logger 中间件

要求：

- 编写 07-koa-logger.js 脚本
- 在任务 2 代码的基础上
- 引入 koa-logger 中间件模块
- 在 M-hello 中间件之前加载 koa-logger 中间件
- 用 curl 命令测试脚本程序，观察服务程序在控制台输出的日志信息
