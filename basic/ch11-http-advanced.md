# 第 11 课：HTTP 高级编程

## 实现 HTTP 基本验证

要求：

- 创建 18-http-advanced 目录
- 编写 01-auth-basic.js 脚本
- 实现 web 服务程序
- 当浏览器对根路由（/）发出 HTTP 请求时，脚本不需要身份验证，发送给客户端非敏感信息
- 当浏览器对后台管理路由（admin）发出 HTTP 请求时，脚本需要身份验证
- 身份验证基于 HTTP 协议的基本验证
- 当收到用户名和密码信息之后，验证身份信息
- 如果身份信息正确，发送给客户端敏感信息
- 如果身份信息不合法，则继续提示用户输入身份信息

## Cookie 基本操作

要求：

- 编写 02-cookie-opt.js 脚本
- 使用 http 模块创建 web 服务监听 8080 端口
- 解析请求头中的 Cookie 数据，将解析的 Cookie 信息打印到控制台上
- 在响应头中封装 Cookie 数据，将响应数据发送给客户端
- 用 chrome 浏览器测试服务程序，在开发者工具中查看和修改 cookie 信息
- 用 curl 工具测试服务程序，命令：`curl -H "Cookie: name=wangding" http://localhost:8080`

## Cookie 状态保持

要求：

- 编写 03-cookie-status.js 脚本
- 使用 http 模块创建 web 服务监听 8080 端口
- 客户端程序每次请求服务程序时，对总请求的次数计数，打印到控制台
- 将客户端请求的次数信息保存到客户端的 Cookie 中
- 将请求的次数信息发送给客户端
- 用不同的浏览器测试服务程序
- 请思考：
  - 为什么不同的浏览器上请求的次数不同？
  - 为什么不同的浏览器上请求的次数不是服务器接收到请求的总和？
  - 为什么 chrome 浏览器每次刷新，请求的次数加 2？如何改为加 1？
  - 为什么服务程序重启后，客户端再次请求服务程序，客户端的请求次数没有清零？
  - 人为修改客户端 Cookie 信息，再次请求服务程序，看看收到的反馈信息

## Cookie 辅助登录

要求：

- 编写 04-cookie-auth.js 脚本
- 使用 http 模块创建 web 服务监听 8080 端口
- 在客户端的 Cookie 中保存登录的状态信息
- 如果客户端的 Cookie 没有信息或者登录的状态是未登录
- 客户端访问服务程序时，得到是登录页面
- 登录页面提交 POST 表单数据，包括：用户名和密码信息
- 服务程序验证收到的 POST 表单中的用户名和密码信息
- 如果账户信息没有验证通过，则服务程序继续发送客户端登录页面
- 如果账户信息验证通过，则服务程序设置客户端 Cookie 的登录状态信息为已经登录
- 如果客户端的 Cookie 中的登录状态是已经登录
- 客户端访问服务程序时，得到的是网站首页，而不是登录页面
- 在网站首页，用户可以点击退出登录链接
- 服务程序会设置客户端 Cookie 的登录状态信息为未登录
- 服务程序会发送客户端登录页面
- 用浏览器测试服务程序
- 人为修改浏览器的 Cookie 信息，是否能伪装成已经登录，得到网站的首页

## 实现 Session

要求：

- 编写 05-session.js 脚本
- 使用 http 模块创建 web 服务监听 8080 端口
- 在客户端的 Cookie 中保存 SessionID 信息
- 在服务程序中实现对客户端 Cookie 中 SessionID 的解析
- 在服务程序中用内存维护一个 Session 列表
- 服务程序能够创建 Session，包括 SessionID 和过期时间
- 服务程序能够检查客户端 Cookie 中的 SessionID 是否存在，或者 Session 是否过期
- 对于过期的客户端 Session 服务器会重新分配 SessionID，并将过期的 Session 从列表中删除
- 对于没有过期的客户端 Session 服务器会更新该 Session 的过期日期

## Session 辅助登录

要求：

- 在前两个任务的基础上编写 06-session-auth.js 脚本
- 使用 SessionID 作为登录状态的验证
- Cookie 中 SessionID 如果不存在，打开登录页面
- Cookie 中 SessionID 过期，打开登录页面，重新登录
- Cookie 中 SessionID 存在，并且没有过期，打开首页，并且更新 Session 的过期时间
- 用浏览器测试服务程序
- 看看人为修改浏览器的 Cookie 信息，是否能伪装成已经登录，得到网站的首页

## TODO List

要求：

- 利用上一个任务 Session 辅助验证的技术改造 TODO List
- 实现 TODO List 身份验证
- 实现不同登录用户的 TODO List 操作

## 实现 HTTP 代理

要求：

- 编写 07-proxy.js 脚本
- 实现对 HTTP 协议的 GET 请求的代理
- 在代理程序中捕获浏览器的 HTTP 请求信息，输出到控制台
- 将 HTTP 响应信息输出到控制台
- 配置 chrome 浏览器的代理设置
- 测试代理程序

## 阅读 Node.js API 资料

- [https API 资料](https://nodejs.cn/dist/latest-v18.x/docs/api/https.html)

## 实现 HTTPS 服务

要求：

- 编写 08-https-server.js 脚本
- 实现 HTTPS 协议的 Web 服务
- 收到浏览器请求后，发送给客户端 hello world 信息
