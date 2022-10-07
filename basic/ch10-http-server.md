# 第 10 课：HTTP 网络编程（服务端）

## 阅读 Node.js API 资料

- [url API 资料](https://www.nodeapp.cn/url.html)

## 解析 HTTP 方法

要求：
- 创建文件夹 17-http-server
- 编写脚本代码 01-method-parse.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 解析 HTTP 请求的方法
- 使用 switch case 语句
- 至少解析 GET、POST、PUT 和 DELETE 四个 HTTP 方法
- 需要在 web 服务器程序中打印 HTTP 请求的方法名称
- 需要给客户端反馈信息
- 用 curl -X 参数测试各种 HTTP 请求方法

## 解析 URL

要求：
- 编写脚本代码 02-url-parse.js
- 解析给定的 url 地址：`http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f`
- 在控制台打印解析的结果
- 使用 http 模块，创建 web 服务监听 8080 端口
- 对 HTTP 请求的 URL 地址进行解析
- 在控制台打印解析的结果
- 用 `curl http://localhost:8080/a/b/c?age=20&gender=M#/d/e/f` 命令测试上面的服务程序
- 思考为什么没有解析出 hash: `#/d/e/f`

## 解析 HTTP 请求头

要求：
- 编写脚本代码 03-req-header-parse.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 在控制台打印完整的 HTTP 请求起始行和请求头信息
- 在控制台打印 HTTP 请求头信息中的 User-Agent、Host 和 Content-Type 三个字段信息
- 在 curl 程序中向 web 服务发送特定的头部字段信息 `Content-Type:appliction/json`，测试服务程序
- `curl -H "Content-Type:appliction/json" http://localhost:8080`
- 解析 HTTP 协议的基本身份验证请求头字段：authorization，将用户名和密码信息打印在控制台
- 用命令 `curl http://wangding:123@localhost:8080` 测试服务程序

## 处理 HTTP 响应

要求：
- 编写脚本代码 04-response.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当客户端请求网站根路径（/）时，发送给客户端一个 h1 格式的 hello world! 网页
- 并且发送响应状态码 200
- 并且发送响应头字段列表：Content-Type: text/html 以及 Content-Length: XXX
- Content-Length 中的三个 X 表示响应体的实际字节数
- 当客户端请求网站其他路径时，发送状态码 404，以及 Resource not found！信息
- 用 curl 程序测试这个 web 服务的不同 URL，查看响应起始行、响应报文头以及响应体

## 处理上传数据

要求：
- 编写脚本代码 05-upload.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 请求的 URL 不是网站根路径（/）时，提示客户端 404 错误
- 如果 HTTP 请求的方法不是 POST 时，提示客户端 404 错误
- 接收客户端 HTTP POST 请求中携带的数据
- 将收到的数据打印到控制台上
- 用 curl 程序测试服务程序，包括以下一些场景
- 用 curl 向服务程序发送 FORM 表单数据
- 用 curl 向服务程序发送 JSON 数据
- 用 curl 向服务程序上传文件

## 处理 GET 请求的 FORM 表单

要求：
- 编写脚本代码 06-form-get.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当 HTTP 请求的 URL 不是网站根路径（/）时，提示客户端 404 错误
- 向客户端发送一个 TODO list 表单页面，页面上用户可以填写待办事项
- 用户点击提交按钮后，表单使用 HTTP 的 GET 方法提交到服务程序
- 服务程序接收表单数据，并将待办事项放到 TODO list 表单页面，发送给客户端
- 用 chrome 浏览器测试服务程序
- 用 curl 测试服务程序
- TODO list 表单页面样式如下：

  ![form-get，王顶，node.js，408542507@qq.com](./images/todo-list.webp)

## 处理 POST 请求的 FORM 表单

要求：
- 编写脚本代码 07-form-post.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当 HTTP 请求的 URL 不是网站根路径（/）时，提示客户端 404 错误
- 当收到客户端 HTTP GET 请求时，发送给客户端 TODO list 表单页面
- 页面上用户可以填写待办事项，用户提交表单使用 POST 方法
- 用 chrome 浏览器测试服务程序
- 用 curl 测试服务程序
- TODO list 页面样式见上面截图

## 网页 Linux 命令行

要求：
- 基于 07-form-post.js 代码
- 编写 08-form-cmd.js 脚本
- 用户在表单页面上提交 linux 命令
- 服务程序利用子进程技术执行 linux 命令
- 服务程序将 linux 命令的运行结果返回到网页上
- 命令运行结果要求能够正确的换行显示
- 程序的运行效果，如下图所示：

  ![form-cmd，王顶，node.js，408542507@qq.com](./images/form-cmd.webp)

## 处理文件上传

要求：
- 编写 09-upload-file.js 脚本
- 能够接收任意格式文件上传
- 将上传的文件保存在脚本所在目录
- 保存在服务器上的文件名和上传的文件名相同
- 用 crul 命令测试脚本
- 编写文件上传的 HTML 页面
- 用浏览器访问上传文件的 HTML 页面，实现文件上传
- 改进程序，让程序能够同时支持多个文件上传

## 上传图片

要求：
- 在 09-upload-file.js 脚本的基础上
- 编写 10-upload-pic.js 脚本
- 能够接收任意格式图片文件（png, jpg, gif, bmp）上传
- 将上传的图片文件保存在脚本所在目录的 images 子目录下
- 保存在服务器上的图片文件名和上传的文件名相同
- 页面上能够显示已经上传的所有图片
- 运行并测试程序

## 后台模板渲染

要求：
- 编写 11-form-html.js 脚本
- 对 07-form-post.js 重构
- 将 07-form-post.js 脚本中的 HTML 代码，保存在单独的文件中 template.html
- 将 template.html 中的待办事项数据部分用占位符 % 来代替
- 11-form-html.js 程序读取 template.html 模板文件
- 并将占位符 % 替换为具体的待办事项数据
- 用 chrome 测试服务程序

## 前后端分离架构的代办事项

### 实现 RESTful API

要求：
- 阅读[理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
- 阅读 [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- 编写 12-rest-api.js 脚本
- 使用任务 2 方法解析的框架代码
- 服务程序要响应 GET、POST、PUT 和 DELETE 四种请求方法
- 实现对待办事项的增、删、改、查，HTTP 接口规格如下：
```
method: GET,    url: /todo,    fun: get all todo items
method: POST,   url: /todo,    fun: insert todo item
method: DELETE, url: /todo,    fun: del all todo items
method: DELETE, url: /todo:id, fun: del todo item by id
method: PUT,    url: /todo:id, fun: update todo item by id
```
- 用 curl 测试 RESTful API
- 客户端请求 url 为网站根路径时，服务程序发送代办事项页面给客户端
- 所以，服务程序不是纯粹的 HTTP 接口服务

### 实现前端页面

- 代办事项页面使用前端脚本，fetch 请求 HTTP 接口
- 并将获取的待办事项 JSON 数据展示到页面上
- 阅读 [fetch 官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
- 阅读 [fetch 用法说明](https://segmentfault.com/a/1190000007019545)
- 编写客户端代码使用 RESTful API
- 在页面上实现查询和增加代办事项的功能
- 在页面上实现删除和修改代办事项的功能
- 用 chrome 测试 web 服务程序
- 程序的运行效果，如下图所示：

  ![todo-api，王顶，node.js，408542507@qq.com](./images/todo-api.gif)
