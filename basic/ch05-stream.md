# 第 5 课：流

## 阅读参考资料

- [Node.js 流 API 资料](http://nodejs.cn/api/stream.html)
- [海纳百川：Node.js Stream](https://www.eebreakdown.com/2016/10/nodejs-streams.html)
- [深入理解 Node.js Stream 内部机制](https://fed.taobao.org/blog/2017/09/01/nodejs-stream/)
- [Node.js 流: 你需要知道的一切](https://juejin.im/post/5940a9c3128fe1006a0ab176)

## 操作标准输入/输出流

要求：
- 创建 09-stream 目录
- 编写 01-std-io.js 脚本
- 通过 `data` 事件消费标准输入流中的数据
- 将标准输入流的字符转成大写，然后输出到标准输出流中
- 在标准输入流中 push 一些字符串
- 通过 `pipe` 方法将标准输入流接到标准输出流上，消费标准输入流中的数据
- 用 `for` 循环在标准输出流上输出 a-z 26 个字母
- 用交互式的方式运行程序
- 用流的方式运行程序（命令如下），观察程序运行的结果
- `cat 01-std-io.js | ./01-std-io.js` 
- 思考两种程序运行方式的差异以及背后的原理

## Web 静态文件服务

要求：
- 编写 02-static-web-server.js 脚本
- web 服务器根路径是当面脚本所在目录
- web 服务监听 8080 端口
- 正确响应浏览器发送的 URL 请求
- 将 URL 地址中的文件内容，发送给浏览器
- 当 URL 地址中的资源文件不存在时，提示用户文件不存在的错误信息

## 基于流的 Web 静态文件服务

要求：
- 编写 03-static-web-server-stream.js 脚本
- 用流的方式实现任务 3 的所有功能
- 编写 03-make-big-file.js 脚本
- 运行 03-make-big-file.js 脚本生成 427M 的 big.file
- 运行 02-static-web-server.js 脚本，用 curl 请求 big.file，观察服务器内存消耗
- 运行 03-static-web-server-stream.js 脚本，用 curl 请求 big.file，观察服务器内存消耗
- 理解流的优势

## 可读推送流

要求：
- 编写 04-readable-push.js 脚本
- 实例化 Readable 流
- 向流中 push 若干个字符串
- 将 Readable 流管道连接到标准输出流
- 运行程序，观察程序的运行效果

## 可读拉取流

要求：
- 编写 05-readable-pull.js 脚本
- 实例化 Readable 流
- 实现流的 `_read` 方法
- `_read` 方法中循环 push [a-z] 26 个字母
- 将流接入到标准输出流
- 运行程序，观察程序的运行效果

## 自定义可读流

要求：
- 编写 06-my-readable.js 脚本
- 定义 MyReadable 类继承 Readable 类
- MyReadable 类的功能跟任务 6 类似
- 实例化 MyReadable 类
- 将 MyReadable 类的实例化对象接入到标准输出流上
- 运行程序，观察程序的运行效果

## 自定义可写流

要求：
- 编写 07-green-stream.js 脚本
- 定义 GreenStream 类继承 Writable 类
- GreenStream 类将收到的数据输出到标准输出流中
- 使用 chalk，将输出的文本信息格式化成亮绿色
- 实例化 GreenStream 类，将标准输入流连接到自己定义的可写流对象上
- 运行程序，观察程序的运行效果

## 用转换流实现字母大写转换

要求：
- 编写 08-transform.js 脚本
- 实例化 Transform 流对象
- Transform 流对象中实现字符串的大写转换
- 将标准输入流管道接到转换流对象上再接到标准输出流上
- 用两种方式运行程序，观察程序的运行效果

## 自定义转换流实现文字变色

要求：
- 编写 09-my-transform.js 脚本
- 定义自己的转换流类继承 Transform 类
- 自己的转换流类实现控制台文字加颜色，参考：任务 8
- 实例化自己的转换流对象
- 将标准输入流管道接到自己的转换流对象再接入到标准输出流上
- 用两种方式运行程序，观察程序的运行效果
