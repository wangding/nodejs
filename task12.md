# 第十二课：数据存储

## 任务 1： Web 静态文件服务

要求：
- 编写 01-static-web-server.js 脚本
- 基于第五课：流，任务 3 的代码
- 实现内存缓存机制，提升 web 服务器的性能
- 如果请求的 url 中的文件不在内存缓存中
  - 读取磁盘上的文件，存入缓存
  - 将缓存中的文件内容发送给浏览器
- 如果请求的 url 中的文件在内存缓存中
  - 直接将缓存中的文件内容发送给浏览器

## 任务 2：基于文件存储 RESTful API

要求：
- 编写 02-rest-api.js 脚本
- 将数据存放在当前目录的 data.txt 中

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

## 任务 5：基于数据库的 RESTful API

要求：
- 编写 04-rest-api.js 脚本
- 将数据存放到 MySQL test 数据库的 todo 表中
