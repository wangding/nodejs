# 第十一课：web 应用开发

## 任务 1：提交代办事项表单

要求：
- 创建 17-web 目录  
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

## 任务 2：网页 Linux 命令行

要求：
- 编写 03-form-cmd.js 脚本  
- 基于 03-form.js 程序框架  
- 用户在表单中提交 linux 命令  
- 服务程序利用子进程技术执行 linux 命令  
- 服务程序将 linux 命令的运行结果返回到网页上  
- 命令运行结果要求能够正确的换行显示  
- 程序的运行效果，如下图所示：  
- ![form-cmd，王顶，node.js，408542507@qq.com](./images/form-cmd.gif)  

## 任务 3：实现 RESTful API

要求：
- 阅读[理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)  
- 阅读 [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- 编写 04-rest-api.js 脚本  
- 阅读 [fetch 官方文档](https://fetch.spec.whatwg.org/)  
- 阅读 [fetch 用法说明](http://blog.csdn.net/kajweb/article/details/72593482)  
- 编写客户端代码使用 RESTful API  
- 执行 `wget http://sample.wangding.in/nodejs/todo.html` 命令，获取网页 html 代码  
- 在页面上实现查询和增加代办事项的功能  
- 在页面上实现删除和修改代办事项的功能  
