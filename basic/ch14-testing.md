# 第 14 课：单元测试

## 了解 Jest

要求：

- 浏览 [Jest 官方网站](https://jestjs.io/zh-Hans/docs/getting-started)
- 浏览 [Jest 实践指南](https://github.yanhaixiang.com/jest-tutorial/)

## 创建被测项目

要求：

- 创建 jest-demo 项目文件夹
- 初始化 Git 仓库，`git init`
- 初始化项目，`npm init`
- 编写 `calc.js` 模块，实现加法函数、减法函数、乘法函数和除法函数
- 编写 `app.js` 模块，对 `calc.js` 模块进行调用
- 通过命令行传递三个参数：`operator`，`num1`，`num2`
- 运行被测项目

## 编写测试脚本

要求：

- 安装 jest 单元测试框架，`npm install -D jest`，
- 编写 `calc.js` 模块的自动化测试脚本 `calc.test.js`
- 编写加法函数的测试套件及测试用例
- 编写减法函数的测试套件及测试用例
- 编写乘法函数的测试套件及测试用例
- 编写除法函数的测试套件及测试用例
- 执行单元测试
- 查看测试报告，包括：测试用例总数，通过的测试用例数，失败的测试用例数，总的测试耗时
- 根据需要修改 `calc.js` 中的 bug，或者修改 `calc.test.js` 中的代码

## 代码覆盖率

要求：

- 对 `calc.js` 的单元测试做覆盖率测试
- 查看测试覆盖率报告
- 根据报告，适当增加测试用例
- 再次运行单元测试和覆盖率测试
- 直到对覆盖率指标满意为止

## 动态测试

要求：

- 修改 `calc.test.js` 脚本
- 对加法函数增加动态测试的套件
- 把加法函数普通的测试套件代码注释掉
- 执行单元测试
- 查看测试报告

## 消除依赖

要求：

- 创建 `mock` 文件夹
- 编写 `01-foreach.js` 脚本
- 实现 `forEach` 方法，并导出
- 编写 `02-password-rule.js` 脚本
- 实现 `oneUpperCaseRule` 方法，并导出
- 实现 `oneNumberRule` 方法，并导出
- 编写 `03-password-verify.js` 脚本
- 实现 `verifyPassword` 方法
- 分别对上面的三个脚本文件做单元测试
- 用 `jest.fn()` 测试 `01-foreach.js`
- 用 `jest.mock()` 测试 `03-password-verify.js`
- 执行单元测试

## 接口测试

要求：

- 创建 `rectangle-api` 文件夹
- 添加 `app.js` 脚本代码，实现矩形计算器的 HTTP API 接口
- 接口规格如下：

```
// request
GET /rectangle?width=20&height=20

// response
{'code': 200, 'reason': '查询成功', result: {'area': 400, 'perimeter': 80}}
```

- 手工测试该接口
- 添加接口自动化测本代码
- 运行 npm test，观察接口测试的效果
- 对接口实现自动化测试
