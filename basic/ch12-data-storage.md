# 第 13 课：数据存储

##  Web 静态文件服务

要求：
- 创建目录 18-data-storage
- 复制 09-stream/02-static-web-server.js 到当前目录
- 修改文件名为 01-static-web-server.js
- 实现内存缓存机制，提升 web 服务器的性能
- 如果请求的 url 中的文件不在内存缓存中
  - 读取磁盘上的文件，存入缓存
  - 将缓存中的文件内容发送给浏览器
- 如果请求的 url 中的文件在内存缓存中
  - 直接将缓存中的文件内容发送给浏览器

## 基于文件存储 RESTful API

要求：
- 复制 16-http-server/08-rest-api.js 到当前目录
- 修改文件名为 02-rest-api.js
- 修改 02-rest-api.js 脚本
- 服务程序退出时将待办事项数组保存到当前目录的 data.txt 中
- 服务程序启动时将待办事项从 data.txt 中读取到 items 数组中

## 安装 MySQL

要求：
- 在 CentOS 7 Linux 上安装 MySQL
- 运行安装命令

```bash
# 下载并安装 MySQL 官方的 Yum Repository

wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

# yum 安装 mysql

sudo yum -y install mysql57-community-release-el7-10.noarch.rpm

# 安装 mysql 服务程序，这个步骤时间可能会比较长，取决于个人网速

sudo yum -y install mysql-community-server

# 启动数据库服务

sudo systemctl start mysqld.service

# 查看 MySQL 运行状态

sudo systemctl status mysqld.service

# 找到 mysql 初始的 root 用户密码

sudo grep "password" /var/log/mysqld.log

# 进入数据库 Shell 环境，修改 root 账户密码
# 注意，密码有复杂度要求，要记住改后的密码

mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'iqjLryKLu9%C';

# 在数据库 Shell 环境中，测试 root 账户的权限

show databases;
create database abc;
show databases;
exit;
```

## 命令行操作 MySQL

要求：
- Linux 命令行连接 MySQL
- 在 test 数据库中，创建 areas 表
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| area_name | varchar(255) | NO   | UNI | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
- 在 areas 表上练习 CURD 操作

## 阅读 mysql2 API 资料

- [mysql2 API 资料](https://www.npmjs.com/package/mysql2)

## 用 Node.js 对 MySQL 做 CURD 操作

要求：
- 编写 03-mysql.js 脚本
- 安装 mysql2 第三方库
- 连接到 test 数据库，做以下操作
- 在 areas 表中插入一条记录
- 查询 areas 表中的记录
- 在 areas 表中更改刚才插入的记录
- 查询 areas 表中的记录
- 在 areas 表中删除刚才修改的记录
- 查询 areas 表中的记录
- 关闭连接

## 基于 MySQL 存储的 Todo List

要求：
- 创建 04-todo-list 子目录
- 复制 16-http-server/05-form-post 代码到 04-todo-list 目录下，改名为 index.js
- 在 04-todo-list 子目录 npm 初始化项目配置文件 package.json
- npm 安装 mysql2 模块，作为开发依赖项写入项目配置文件
- 创建 models 子目录
- models 目录下，编写 config.json 文件，配置 mysql 数据库连接参数
- models 目录下，编写 database.js 脚本，创建 mysql 数据库连接池
- models 目录下，编写 todo-list.js 脚本，定义 TodoList 类
- TodoList 类的 getAll 方法获取 todo 表中的所有记录
- TodoList 类的 addItem 方法向 todo 表中添加一条待办事项
- 命令行连接 mysql 数据库，创建 todo_list 数据库以及 todo 表
- 用 chrome 或 curl 测试服务程序
