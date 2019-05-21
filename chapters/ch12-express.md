# 第 12 课：Express 框架

## 阅读 Express API 资料

- [Express 4.x API](http://www.expressjs.com.cn/4x/api.html)
- [ejs](https://ejs.bootcss.com/)

## 编写 hello world web 程序

要求：
- 创建目录 18-express
- 创建子目录 01-hello-world
- 进入子目录 01-hello-world
- `npm init` 初始化项目
- `npm i express -S` 安装 Express 模块
- 编写 index.js 脚本
- 实现一个 web 服务，监听 8080 端口
- 当浏览器请求网站根路径（/）时，返回客户端 hello world 响应
- 用 curl 或者 chrome 浏览器测试这个 web 服务

## Web 静态文件服务

要求：
- 创建目录 02-static-web-server
- 进入 02-static-web-server 子目录
- npm 命令初始化项目
- npm 命令安装 Express 模块
- 编写 index.js 脚本
- web 服务器根路径是当面脚本所在目录
- web 服务监听 8080 端口
- 浏览器请求的 URL 合法时，返回给浏览器合适的文件资源
- 当 URL 地址中的资源文件不存在时，提示用户文件不存在的错误信息
- 用 curl 或者 chrome 浏览器测试这个 web 服务

## 了解 Express 框架代码

要求：
- 切换到 linux 的 root 账户
- `npm i -g express-generator` 全局安装 express 代码生成器
- 切换到 linux 的开发者账户
- `express --version` 查看 express 代码生成器的版本，验证安装是否成功
- `express -h` 了解 express 代码生成器的命令行参数
- `express -e 03-quick-start` 创建一个初始网站框架
- `cd 03-quick-start && npm install` 安装项目依赖
- `DEBUG=03-quick-start:* npm start` 启动网站
- 用 chrome 或 curl 测试这个网站，注意：这个网站默认监听 3000 端口
- 测试网站的时候，url 地址上的端口号一定要写成 3000，而不是 8080
- `tree -I node_modules` 查看项目目录结构
- 搞明白每个目录的作用
- 搞明白每个代码文件的作用
- 阅读并理解框架代码的结构
- 如何让服务程序运行在 8080 端口
- 尝试修改框架代码，用浏览器测试网站，观察修改后的效果

## 基本路由

要求：
- 创建子目录 04-basic-router
- 进入子目录 04-basic-router
- npm 命令初始化项目
- npm 命令安装 express 模块
- 编写 index.js 脚本
- 用 express 模块创建 web 服务，监听 8080 端口
- 脚本里处理五个路由：/、/json、/download、/courses/:id、/posts/:year/:month
- 五个路由的 HTTP 方法都是 GET
- /courses/:id 和 /posts/:year/:month 都是参数路由
- 将路由中的参数信息打印到控制台，并发送给客户端 ok 消息
- /json 路由，发送给客户端一个自定义对象
- /download 路由，发送给客户端 package.json 文件
- / 路由，绑定四个处理函数（中间件）
- 其中两个处理函数，单独用 function 关键字定义
- 另外两个处理函数，在 get 方法的参数中作为匿名函数出现
- 用 chrome 或 curl 测试服务程序

## 任务 6: 路由模块

要求：
- 创建子目录 05-router-module
- 进入子目录 05-router-module
- npm 命令初始化项目
- npm 命令安装 express 模块
- 编写 index.js 脚本
- HTTP GET 方法请求网站根的基本路由，给客户端返回 hello world
- 编写 books.js 路由模块脚本，放到 router 子目录下
- index.js 脚本 require 引入路由模块
- express 应用将 books.js 路由模块挂载到 /books 路径的 GET 方法下
- books 路由模块中，使用中间件打印调试信息 Date.now()
- books 路由模块中，处理 books/ 路由，返回客户端 books 字符串
- books 路由模块中，处理 books/list 路由，返回客户端 books-list 字符串
- 用 chrome 或 curl 测试服务程序

## Express 版 TODO List

要求：
- 用 express 代码生成器生成框架代码 06-todo-list
- 删除主程序 app.js 对 Cookie 机制的支持
- 删除主程序 app.js 对静态文件服务的支持
- 删除 public 目录
- 删除 users.js 路由文件
- 删除主程序 app.js 中对 users 路由模块的挂载和调用
- 修改 index.js 路由模块，支持 GET 和 POST 两个方法
- GET 方法渲染 TODO List 页面，并传递 items 数组给模板
- POST 方法将请求体中表单数据放入 items 数组中，并渲染页面
- 修改 index.ejs 模板页面，在页面中显示 H1 标题 TODO List
- H1 标题下方式表单区域，包括一个文本框，一个 submit 按钮
- 表单下方就是 TODO List 的 ul 列表
- 用 chrome 或 curl 测试服务程序

## Express 版 TODO List API

要求：
- 用 express 代码生成器生成框架代码 07-todo-list-api
- 删除主程序 app.js 对 Cookie 机制的支持
- 删除主程序 app.js 对静态文件服务的支持
- 删除 public 目录
- 删除主程序 app.js 中对视图模板的支持
- 删除 views 目录
- 修改主程序 app.js 中错误处理对视图模板的调用
- 删除 users.js 路由文件
- 删除主程序 app.js 中对 users 路由模块的挂载和调用
- 修改 index.js 路由模块，支持对 TODO List 的增、删、改、查
- 用 curl 测试服务程序

## Express 版 cookie-opt

要求：
- 创建子目录 08-cookie-opt
- 进入子目录 08-cookie-opt
- npm 命令初始化项目
- npm 命令安装 express 和 cookie-parser 模块
- 编写 index.js 脚本
- 引用 cookie-parser 模块
- 实现根路由解析模块
- 打印请求中的 cookie 信息
- 在响应中设置 name = wangding 和 age = 41 两个 cookie 信息
- 发送客户端 ok 响应信息
- 用 chrome 测试服务程序

## Express 版 cookie-status

要求：
- 用 express 代码生成器生成框架代码 09-cookie-status
- 删除 routes/users.js 路由模块
- 修改 app.js 删除 user.js 路由模块的引用和挂载
- 修改 routes/index.js 路由模块
- 从请求中获取 cookie 中存放的访问次数信息
- 将访问次数信息传递给模板页面
- 在模板页面上显示用户访问次数的信息
- 用 chrome 测试服务程序

## Express 版 cookie-auth

要求：
- 用 express 代码生成器生成框架代码 10-cookie-auth
- 删除 routes/users.js 路由模块
- 修改 app.js 删除 user.js 路由模块的引用和挂载
- 修改 index.ejs 模块代码，显示登录后的状态信息以及退出登录的链接
- 添加 login.ejs 模板代码，显示登录对话框表单
- 修改 routes/index.js 代码，实现登录验证逻辑
- 实现 cookie 中保存登录状态的功能
- 实现退出登录请求，修改 cookie 登录状态的功能
- 用 chrome 测试服务程序

## 签名 Cookie

要求：
- 创建子目录 11-signed-cookie
- 进入子目录 11-signed-cookie
- npm 命令初始化项目
- npm 命令安装 express 和 cookie-parser 模块
- 复制 08-cookie-opt/index.js 代码到当前目录
- 修改 index.js 脚本
- 实现对 cookie 数据 name = wangding 和 age = 41 进行签名加密
- 用 chrome 测试服务程序

## Express session 辅助验证

要求：
- 用 express 代码生成器生成框架代码 12-session-auth
- 进入子目录 12-session-auth
- 修改 package.json 删除 cookie-parser 组件依赖
- 修改 app.js 代码，删除 cookie-parser 组件的导入和挂载
- npm 命令安装项目依赖
- npm 命令安装 express-session 组件
- 在 views 目录下添加 login.ejs 做一个登录页面
- 在 views 目录下修改 index.ejs 显示当前登录用户的欢迎界面，以及退出登录的链接
- 删除 routes 目录下的 users.js
- 修改 app.js 删除 routes/users.js 路由模块的导入和挂载
- 修改 routes 目录下的 index.js 路由模块，实现登录验证流程
- 登录验证流程参考 HTTP 进阶下的任务五
- 用 chrome 测试服务程序
