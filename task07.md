# 第七课：调试

## 任务 1：静态代码检查

要求：
- 在 nodejs-demo 目录下初始化 ESLint 配置文件
- 如果不希望 ESLint 检查某些文件夹或文件，则配置 .eslintignore 文件
- 用 ESLint 工具检查自己写过的所有代码
- 如果规则定义合理，则改正代码中问题
- 如果规则定义的不合理，则修改规则设置

## 任务 2：打印调试

要求：
- 创建 11-debug 目录
- 复制 09-stream/02-static-web-server.js 到 11-debug 目录下
- 修改文件名为 01-static-web-server.js
- 修改代码，添加打印调试或者屏蔽打印调试
- 运行程序，观察打印调试信息是否正常显示
- 修改代码，支持对 NODE_DEBUG 环境变量的打印调试支持
- 运行程序，观察打印调试信息是否正常显示
- 添加 NODE_DEBUG 环境变量
- 运行程序，观察打印调试信息是否正常显示

## 任务 3：Node.js 命令行调试器

要求：
- 使用 Node.js 命令行调试器，调试 server.js 程序，去掉程序中的 bug
- 获取 server.js 程序，运行：`wget http://sample.wangding.in/nodejs/server.js`

## 任务 4：Chrome 图形界面调试器

要求：
- 使用 Chrome 图形界面调试器，调试 server.js 程序，去掉程序中的 bug

## 任务 5：性能分析

要求：
- 使用 Node.js 性能分析工具，分析 profile.js 程序
- 获取 profile.js 程序，运行：`wget http://sample.wangding.in/nodejs/profile.js`
