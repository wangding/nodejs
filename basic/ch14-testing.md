# 第 14 课：测试

## 阅读 Node.js API 资料

- [assert API 资料](http://nodejs.cn/api/assert.html)

## 使用 assert 模块

要求：

- 创建 17-test 目录
- 编写 todo.js 脚本
- 编写 todo.test.js 脚

## 了解 Mocha

要求：

- 浏览 [Mocha 官方网站](http://mochajs.org)
- 浏览 [Mocha GitHub 仓库](https://github.com/mochajs/mocha)

## 创建被测项目

要求：

- 创建 mocha-demo 项目文件夹
- 初始化 Git 仓库
- npm init 初始化项目
- 编写 calc.js 模块，实现加法函数、减法函数、乘法函数和除法函数
- 编写 index.js 模块，对 calc.js 模块进行调用
- 运行被测项目
- npm 安装 mocha
- npm 安装 chai
- 提交代码到 Git 仓库

参考：

- 初始化代码：[calc.js][calc_js_origin]
- 完成后代码：[calc.js][calc_js_final]

## 编写测试脚本

要求：

- 编写 calc.js 模块的自动化测试脚本 calc.test.js
- 编写加法函数的测试套件及测试用例
- 编写减法函数的测试套件及测试用例
- 编写乘法函数的测试套件及测试用例
- 编写除法函数的测试套件及测试用例
- 执行自动化测试
- 查看自动化测试报告，包括：测试用例总数，通过的测试用例数，失败的测试用例数，总的测试耗时
- 根据需要修改 calc.js 中的 bug，或者修改 calc.test.js 中的代码
- 把自动化测试脚本提交 Git 仓库

参考：

- 自动化测试脚本代码：[calc.test.js][calc_test_js]

## mocha 的基本用法

要求：

- 参考[初始 date.js 代码][date_js_origin]，实现 date.js 模块的各个函数
- 编写 date.js 各个函数的测试套件及测试用例
- 把代码提交 Git 仓库

参考：

- 初始化代码：[date.js][date_js_origin]
- 完成后代码：[date.js][date_js_final]
- 自动化测试脚本代码：[date.test.js][date_test_js]

## 命令行参数

要求：

- 生成 mochawesome 网页格式的报告
- 创建 mocha.opt 配置文件来执行自动化测试
- 修改 package.json 通过 npm test 来执行自动化测试
- 提交代码到 Git 仓库

完成后代码：

- [mocha.opts][mocha_opts]
- [package.json][package_json]


## 测试用例管理

要求：

- 改写 calc.test.js 脚本，skip 所有测试套件中 0 ? 0 = 0 的测试案例
- 改写 calc.test.js 脚本，only 加法、乘法和除法测试套件
- 执行 calc.test.js 测试脚本，观察执行效果
- 把代码提交 Git 仓库

参考：

- 初始的代码：[calc.test.js][calc_test_js_origin_task01]
- 完成后代码：[calc.test.js][calc_test_js_final_task01]

## 测试用例钩子

要求：

- 改写 calc.test.js 脚本，在加法测试套件中增加 befor，after，beforeEach，afterEach 四个钩子函数
- 钩子函数中实现 console.log 打印功能
- 执行 calc.test.js 自动化测试脚本，观察钩子函数的执行效果
- 把代码提交 Git 仓库

参考：

- 初始的代码：[calc.test.js][calc_test_js_final_task01]
- 完成后代码：[calc.test.js][calc_test_js_final_task02]

## 异步测试

要求：

- 编写简单的异步测试脚本，设置超时时间为 3000ms
- 执行测试脚本，并观察超时报错
- 在执行测试脚本时增加 --timeout 参数，观察是否报错
- 在执行测试脚本时增加 --slow 参数，观察执行结果的高亮显示的区别
- 用 superagent 编写简单的异步测试脚本，测试 GitHub 网站的 API
- 用 node-fetch 编写 Promise 方式的异步测试脚本，测试 GitHub 网站的 API

完成后代码：

- [timeout.test.js][timeout_test_js]
- [async.test.js][async_test_js]
- [promise.test.js][promise_test_js]

## 测试前端代码

要求：

- 在 mocha-demo 目录下，创建 browser 子目录
- 执行 mocha init 创建前端测试的脚手架代码
- 在 browser 目录下添加被测模块 add.js
- 编写 add.js 的测试脚本
- 修改 index.html 页面
- 用浏览器打开 index.html 页面，执行前端代码的测试
- 把代码提交 Git 仓库

完成后的代码：

- [add.js][add_js]
- [index.html][index_html]
- [tests.js][tests_js]

## ES6 测试脚本

要求：

- 用 ES6 来改写 calc.test.js 和 date.test.js 两个测试脚本
- 安装 babel
- 创建 babel 配置文件
- 用 --compilers 参数执行自动化测试脚本
- 改写 mocha.opts 文件，使得 npm test 脚本能生效
- 提交代码到 Git 仓库

完成后的代码：

- [.babelrc][babelrc]
- [calc.test.js][calc_test_js_es6]
- [date.test.js][date_test_js_es6]

## 代码覆盖率

要求：

- 安装 istanbul 工具
- 创建 simple.js 代码
- 执行覆盖率测试
- 调整覆盖率边界，检查测试覆盖率报告
- 与 mocha 结合，对 calc.test.js 执行覆盖率测试

## webdriver 整合

要求：

- 安装 selenium-webdriver
- 编写 hosted-redmine-login.test.js 测试代码
- 将测试代码与 mocha 整合
- 把代码提交 Git 仓库

完成后的代码：

- [hosted-redmine-login.test.js][hosted-redmine-login-test-js]

## 持续集成工具整合

要求：

- 用 GitHub 账户登录 travis-ci 网站
- 对 mocha-demo 项目启用持续集成
- 在 mocha-demo 项目目录下增加 .travis.yml 文件
- 调整 package.json 的测试脚本，让 npm test 只测试 calc.test.js 文件
- 提交 .travis.yml 文件到 GitHub 网站，并观察持续集成的过程报告
- 修改 clac.js 代码，引入 bug，将修改后的代码提交 GitHub 仓库
- 观察继续集成的过程报告

完成后的代码：

- [.travis.yml][travis_yml]

<!-- 本文档中的链接 -->
[calc_test_js_origin_task01]: https://github.com/wangding/mocha-demo/blob/dc22176b6e615034fe3f770328ca7425690b4ffb/test/calc.test.js
[calc_test_js_final_task01]: https://github.com/wangding/mocha-demo/blob/c7d637a8c461888517f8dd1c473ddc8a654f29ba/test/calc.test.js
[calc_test_js_final_task02]: https://github.com/wangding/mocha-demo/blob/397a120ebb29158ed9aa107df901d56773ae9c03/test/calc.test.js
[timeout_test_js]: https://github.com/wangding/mocha-demo/blob/5979d6a661f4c0065b3f2c65f5c709e0ca66d5ec/test/timeout.test.js
[async_test_js]: https://github.com/wangding/mocha-demo/blob/5979d6a661f4c0065b3f2c65f5c709e0ca66d5ec/test/async.test.js
[promise_test_js]: https://github.com/wangding/mocha-demo/blob/5979d6a661f4c0065b3f2c65f5c709e0ca66d5ec/test/promise.test.js
[add_js]: https://github.com/wangding/mocha-demo/blob/304bbdd08ecda3f01731a9d83a97de268d1be863/browser/add.js
[index_html]: https://github.com/wangding/mocha-demo/blob/304bbdd08ecda3f01731a9d83a97de268d1be863/browser/index.html
[tests_js]: https://github.com/wangding/mocha-demo/blob/304bbdd08ecda3f01731a9d83a97de268d1be863/browser/tests.js
[babelrc]: https://github.com/wangding/mocha-demo/blob/bbb1c62e533b8c518714dc8ff9701ac6c25d5d0e/.babelrc
[calc_test_js_es6]: https://github.com/wangding/mocha-demo/blob/bbb1c62e533b8c518714dc8ff9701ac6c25d5d0e/test/calc.test.js
[date_test_js_es6]: https://github.com/wangding/mocha-demo/blob/bbb1c62e533b8c518714dc8ff9701ac6c25d5d0e/test/date.test.js
[hosted-redmine-login-test-js]: https://github.com/wangding/mocha-demo/blob/0c46b79fe422301b706dca86dc821d9f3903134c/test/hostedredmine-login.test.js
[travis_yml]: https://github.com/wangding/mocha-demo/blob/c912a65a02cf018aebe874d9bae7e63bd2d0e537/.travis.yml
[calc_js_origin]: https://github.com/wangding/mocha-demo/blob/6340e47606d092d4e338956a486d6ad123e3286b/calc.js
[calc_js_final]: https://github.com/wangding/mocha-demo/blob/dc22176b6e615034fe3f770328ca7425690b4ffb/calc.js
[calc_test_js]: https://github.com/wangding/mocha-demo/blob/dc22176b6e615034fe3f770328ca7425690b4ffb/test/calc.test.js
[date_js_origin]: https://github.com/wangding/mocha-demo/blob/cae1d4f0354c034577a93ab08eaaa9da690c8f61/date.js
[date_js_final]: https://github.com/wangding/mocha-demo/blob/03f20550eaff390b014e8f5b58189b9a762123ec/date.js
[date_test_js]: https://github.com/wangding/mocha-demo/blob/03f20550eaff390b014e8f5b58189b9a762123ec/test/date.test.js
[mocha_opts]: https://github.com/wangding/mocha-demo/blob/5919870eb312657ba8d4056cc959c32b296881c7/test/mocha.opts
[package_json]: https://github.com/wangding/mocha-demo/blob/5919870eb312657ba8d4056cc959c32b296881c7/package.json
