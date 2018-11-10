# 第十三课：数据存储

## 任务 1： Web 静态文件服务

要求：
- 创建目录 19-data-storage
- 复制 09-stream/02-static-web-server.js 到当前目录
- 修改文件名为 01-static-web-server.js
- 实现内存缓存机制，提升 web 服务器的性能
- 如果请求的 url 中的文件不在内存缓存中
  - 读取磁盘上的文件，存入缓存
  - 将缓存中的文件内容发送给浏览器
- 如果请求的 url 中的文件在内存缓存中
  - 直接将缓存中的文件内容发送给浏览器

## 任务 2：基于文件存储 RESTful API

要求：
- 复制 16-http-server/08-rest-api.js 到当前目录
- 修改文件名为 02-rest-api.js
- 修改 02-rest-api.js 脚本
- 服务程序退出时将待办事项数组保存到当前目录的 data.txt 中
- 服务程序启动时将待办事项从 data.txt 中读取到 items 数组中

## 任务 3：安装 MySQL

要求：
- 在 CentOS 7 Linux 上安装 MySQL
- 运行安装命令
```bash
su
yum install -y mariadb mariadb-server
systemctl start mariadb
```
- 配置 MySQL
- 运行配置命令
```bash
mysql_secure_installation
```

## 任务 4：命令行操作 MySQL

要求：
- Linux 命令行连接 MySQL
- 在 test 数据库中，创建 books 表
```
+---------+---------+------+-----+---------+-------+
| Field   | Type    | Null | Key | Default | Extra |
+---------+---------+------+-----+---------+-------+
| book_id | int(11) | YES  |     | NULL    |       |
| title   | text    | YES  |     | NULL    |       |
| status  | int(11) | YES  |     | NULL    |       |
+---------+---------+------+-----+---------+-------+
```
- 在 books 表上练习 CURD 操作

## 任务 3：阅读 mysql API 资料

- [mysql API 资料](https://github.com/mysqljs/mysql)

## 任务 4：用 Node.js 对 MySQL 做 CURD 操作

要求：
- 编写 03-mysql.js 脚本
- 安装 mysql 第三方库
- 连接到 test 数据库，做以下操作
- 在 books 表中插入一条记录
- 查询 books 表中的记录
- 在 books 表中更改刚才插入的记录
- 查询 books 表中的记录
- 在 books 表中删除刚才修改的记录
- 查询 books 表中的记录
- 关闭连接

## 任务 5：基于 MySQL 存储的 Todo List

要求：
- 复制 18-express/06-todo-list 代码到 19-data-storage 目录
- 将 06-todo-list 目录改名为 04-todo-list
- 进入 04-todo-list 目录
- npm 安装 mysql 模块
- 创建 models 和 test 两个子目录
- models 目录下，编写 config.json 文件，配置 mysql 数据库连接参数
- models 目录下，编写 database.js 脚本，创建 mysql 数据库连接池
- models 目录下，编写 todo-list.js 脚本，定义 TodoList 类
- TodoList 类的 getAll 方法获取 todo 表中的所有记录
- TodoList 类的 addItem 方法向 todo 表中添加一条待办事项
- 命令行连接 mysql 数据库，创建 todo_list 数据库以及 todo 表
- test 目录下，编写 todo-list-test.js 脚本，测试 models/todo-list.js 脚本
- 改写 router/index.js 路由模块，使用数据库操作模块 models/todo-list.js 来操作待办事项数据
- 用 chrome 或 curl 测试服务程序

## 任务 6：基于 MySQL 存储的 Todo List API

要求：
- 复制 18-express/07-todo-list-api 代码到 19-data-storage 目录
- 将 07-todo-list-api 目录改名为 05-todo-list-api
- 进入 05-todo-list-api 目录
- npm 安装 mysql 模块
- 复制任务五的 models 和 test 两个子目录及下面的代码文件
- models 目录下，完善 todo-list.js 脚本
- TodoList 类的 delAll 方法删除 todo 表中的所有记录
- TodoList 类的 delete 方法删除 todo 表中指定 id 的记录
- TodoList 类的 update 方法更改 todo 表中指定 id 的 item 字段
- 改写 router/index.js 路由模块，使用数据库操作模块 models/todo-list.js 来操作待办事项数据
- 用 curl 测试服务程序
