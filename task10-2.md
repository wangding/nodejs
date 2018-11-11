# 第十课：HTTP 网络编程（服务端）

## 任务 1：解析 HTTP 方法

要求：
- 创建文件夹 16-http-server
- 编写脚本代码 01-method-parse.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 解析 HTTP 请求的方法
- 使用 switch case 语句
- 至少解析 GET、POST、PUT 和 DELETE 四个 HTTP 方法
- 需要在 web 服务器程序中打印 HTTP 请求的方法名称
- 需要给客户端反馈信息
- 用 curl -X 参数测试各种 HTTP 请求方法

## 任务 2：解析 URL

要求：
- 编写脚本代码 02-url-parse.js
- 使用 http 模块、url 模块以及 querystring 模块
- 创建 web 服务监听 8080 端口
- 对 HTTP 请求的 URL 地址进行解析
- 在控制台打印解析的结果
- 对 URL 中的查询字符串进行解析，在控制台打印结果
- 解析给定的 url 地址：`http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f`，并在控制台打印解析的结果

## 任务 3：解析 HTTP 请求头

要求：
- 编写脚本代码 03-req-header-parse.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 在控制台打印完整的 http 请求头信息
- 在控制台打印 http 请求头信息中的 User-Agent、Host 和 Content-Type 三个字段信息
- 在 curl 程序中向 web 服务发送特定的头部字段信息 `Content-Type:appliction/json`，测试服务程序

## 任务 4：处理 HTTP 响应

要求：
- 编写脚本代码 04-response.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当客户端请求网站根路径（/）时，发送给客户端一个 h1 格式的 hello world! 网页
- 并且发送响应状态码 200
- 并且发送响应头字段列表：Content-Type: text/html 以及 Content-Length: XXX（这三个 X 表示响应体的实际字节数）
- 当客户端请求网站其他路径时，发送状态码 404，以及 Resource not found！信息
- 用 curl 程序测试这个 web 服务的不同 URL，查看响应起始行、响应报文头以及响应体

## 任务 5：处理上传数据

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

## 任务 6：处理 GET 请求的 FORM 表单

要求：
- 编写脚本代码 05-form-get.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当 HTTP 请求的 URL 不是网站根路径（/）时，提示客户端 404 错误
- 向客户端发送一个 TODO list 表单页面，页面上用户可以填写待办事项
- 用户点击提交按钮后，表单使用 HTTP 的 GET 方法提交到服务程序
- 服务程序接收表单数据，并将待办事项放到 TODO list 表单页面，发送给客户端
- 用 chrome 浏览器测试服务程序
- 用 curl 测试服务程序
- TODO list 表单页面样式如下：  
  ![form-get，王顶，node.js，408542507@qq.com](./images/todo-list.png)  

## 任务 7：处理 POST 请求的 FORM 表单

要求：
- 编写脚本代码 05-form-post.js
- 使用 http 模块创建 web 服务监听 8080 端口
- 当 HTTP 请求的 URL 不是网站根路径（/）时，提示客户端 404 错误
- 当收到客户端 HTTP GET 请求时，发送给客户端 TODO list 表单页面
- 页面上用户可以填写待办事项，用户提交表单使用 POST 方法
- 用 chrome 浏览器测试服务程序
- 用 curl 测试服务程序
- TODO list 表单页面样式见任务六

## 任务 8：网页 Linux 命令行

要求：
- 编写 05-form-cmd.js 脚本  
- 基于 05-form-post.js 代码框架  
- 用户在表单页面上提交 linux 命令  
- 服务程序利用子进程技术执行 linux 命令  
- 服务程序将 linux 命令的运行结果返回到网页上  
- 命令运行结果要求能够正确的换行显示  
- 程序的运行效果，如下图所示：  
  ![form-cmd，王顶，node.js，408542507@qq.com](./images/form-cmd.gif)  

## 任务 9：处理文件上传

要求：
- 编写 06-upload-file.js 脚本
- 能够接收任意格式文件上传
- 将上传的文件保存在脚本所在目录
- 保存在服务器上的文件名和上传的文件名相同
- 用 crul 命令测试脚本
- 编写文件上传的 HTML 页面
- 用浏览器访问上传文件的 HTML 页面，实现文件上传
- 改进程序，让程序能够同时支持多个文件上传

## 任务 10：后台模板渲染

要求：
- 编写 07-form-html.js 脚本
- 对 03-form-post.js 重构  
- 将 03-form-post.js 脚本中的 HTML 代码，保存在单独的文件中 template.html
- 将 template.html 中的待办事项数据部分用占位符 % 来代替
- 07-form-html.js 程序读取 template.html 模板文件
- 并将占位符 % 替换为具体的待办事项数据
- 用 chrome 测试服务程序

## 任务 11：实现 RESTful API

要求：
- 阅读[理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)  
- 阅读 [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- 编写 08-rest-api.js 脚本
- 使用任务 1 方法解析的框架代码
- 实现对待办事项的增、删、改、查
- 用 curl 测试 RESTful API
- 阅读 [fetch 官方文档](https://fetch.spec.whatwg.org/)  
- 阅读 [fetch 用法说明](http://blog.csdn.net/kajweb/article/details/72593482)  
- 编写客户端代码使用 RESTful API  
- 执行 `wget http://sample.wangding.in/nodejs/todo.html` 命令，获取网页 html 代码  
- 在页面上实现查询和增加代办事项的功能  
- 在页面上实现删除和修改代办事项的功能  
- 复制 09-stream/02-static-web-server.js 到当前目录
- 修改文件名 02-static-web-server.js 为 08-static-web-server.js
- 修改 08-static-web-server.js 脚本，监听 3000 端口
- 同时运行 08-static-web-server.js 和 08-rest-api.js 脚本
- 用 chrome 测试 web 服务程序
