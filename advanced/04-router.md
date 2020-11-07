# 第 4 章 路由器

## koa 原生路由

要求：
- 创建 05-router 目录
- 编写 01-origin-router.js 脚本
- 利用中间件解析漫画书作者的 HTTP API，接口规格如下：
```
| method | URL                           | function                   |
| -----  | ----------------------------- | -------------------------- |
| GET    | /api/authors/?page=1&limit=10 | 得到漫画书作者列表         |
| GET    | /api/authors/:authorName/     | 按作者名称查询             |
| POST   | /api/authors/                 | 添加新的漫画书作者         |
| PUT    | /api/authors/:id              | 修改某 ID 的漫画书作者信息 |
| DELETE | /api/authors/:id              | 删除某 ID 的漫画书作者信息 |
```
- 收到 HTTP 请求，根据路由信息，返回客户端成功信息
- 并在控制台打印该路由接口的功能描述
- 运行 curl 测试服务程序

## koa-router 中间件

- 编写 02-koa-router.js 脚本
- 引入 koa-router 中间件
- 参考任务 1 的 API 规范，定义五个路由方法
- 使用路由前缀
- 每个路由方法中，返回客户端成功信息
- 并在控制台打印该路由接口的功能描述
- 运行 curl 测试服务程序

## 获取请求参数

- 编写 03-get-request-data.js 脚本
- 引入 koa-bodyparser 中间件
- 在上一个任务代码基础上
- 在第一个接口路由方法中，得到 URL 地址中的 page 和 limit 参数
- 并且得到请求头中的 user-agent 字段
- 将这些信息打印在控制台中
- 在第二个接口路由方法中，得到 authorName 参数，并打印到控制台
- 在第三个接口路由方法中，得到请求体中的 authorName 信息，并打印
- 在第四个接口路由方法中，得到 URL 地址中的 ID 信息
- 以及请求体中的 authorName 信息，并打印到控制台
- 在第五个接口路由方法中，得到 URL 地址中的 ID　信息，并打印
- 运行 curl 测试服务程序

## koa 路由模块

- 编写 04-koa-router-module.js 脚本
- 在上一个任务代码基础上
- 把漫画书作责接口路由的五个方法封装成单独的路由模块
- 把路由模块放到 routes 子目录下
- 主程序中导入路由模块，并加载路由模块
- 运行 curl 测试服务程序

## 路由管理

- 编写 05-router-manager.js 脚本
- 参考漫画书作者路由模块，编写 tags 和 areas 路由模块
- 在主程序中引入 require-directory 模块
- 利用 require-directory 模块导入 routes 目录下的所有路由模块
- 运行 curl 测试服务程序
