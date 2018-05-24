# 第十课：web 应用：更轻、更快

要求：  
- 阅读 [HTTP 协议资料](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Message_format)  
- 阅读 [HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)  
- 阅读 [HTTP 头部字段资料](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)  
- 用 chrome 访问 [one-div.html](http://sample.wangding.in/web/one-div.html)，查看请求和响应的头信息，如下图所示：  
  - 搞明白请求头部字段列表中每个字段的含义和作用  
  - 搞明白响应头部字段列表中每个字段的含义和作用  
  - ![http-headers，王顶，408542507@qq.com](./images/http-headers.png)  
- 阅读 [HTTP 状态码资料](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)  
- 创建 16-web 目录  
- 编写 01-basic-server.js 脚本  
  - 设置状态码  
  - 设置响应头字段信息  
- 编写 02-static-http-server.js 脚本，实现以下功能：
  - 用命令行参数指定静态文件服务的根路径，要求：  
    - 支持相对路径，例如：`./02-static-http-server.js ../13-http`  
    - 支持绝对路径，例如：`./02-static-http-server.js ~/wd`  
  - 文件找不到时，脚本程序不能崩溃，应该给客户端返回 404 错误或者 404 错误页面  
  - 运行以下命令，获取静态页面，对脚本程序进行测试：  
    - `wget http://sample.wangding.in/nodejs/index.html`  
    - `wget http://sample.wangding.in/web/one-div.html`  
    - `wget http://sample.wangding.in/testing/triangle.html`  
    - `wget http://sample.wangding.in/testing/triangle.css`  
    - `wget http://sample.wangding.in/testing/triangle.js`  
    - `wget https://raw.githubusercontent.com/fex-team/kityminder/dev/favicon.ico`
- 编写 03-form.js 脚本，实现查询和增加待办事项的功能  
- 编写 03-form-html.js 脚本，实现 03-form.js 的功能，但是有以下要求：  
  - 将 03-form.js 脚本中的 HTML 代码，保存在单独的文件中 template.html，内容如下：  
  - 03-form-html.js 程序读取 template.html 模板文件，并将占位符 % 替换为具体的待办事项数据  
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Todo list</title>
  </head>
  
  <body>
    <h1>Todo List</h1>
    <form method="post" action="/">
      <p><input type="text" name="item" id="item"/>
      <input type="submit" value="Add Item" /></p>
    </form>
    <ul>%</ul>
  </body>
</html>
```
- 编写 03-form-cmd.js 脚本，要求实现以下功能：  
  - 基于 03-form.js 程序框架  
  - 用户在表单中提交 linux 命令  
  - 服务程序利用子进程技术执行 linux 命令  
  - 服务程序将 linux 命令的运行结果返回到网页上  
  - 命令运行结果要求能够正确的换行显示  
  - 程序的运行效果，如下图所示：  
  - ![form-cmd，王顶，node.js，408542507@qq.com](./images/form-cmd.gif)  
- 阅读[理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)  
- 阅读 [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)  
- 编写 04-rest-api.js 脚本  
- 阅读 [fetch 官方文档](https://fetch.spec.whatwg.org/)  
- 阅读 [fetch 用法说明](http://blog.csdn.net/kajweb/article/details/72593482)  
- 编写客户端代码使用 RESTful API  
  - 执行 `wget http://sample.wangding.in/nodejs/todo.html` 命令，获取网页 html 代码  
  - 在页面上实现查询和增加代办事项的功能  
  - 在页面上实现删除和修改代办事项的功能  
- 阅读 [https API 资料](http://nodejs.cn/api/https.html)  
- 编写 05-https-server.js 脚本  
