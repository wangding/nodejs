# 第 4 课：事件

## 阅读 Node.js API 资料

- [EventEmitter API 资料](https://www.nodeapp.cn/events.html)

## 使用 EventEmitter 类（可选）

要求：
- 创建 08-event 目录
- 编写 01-event-emitter.js 脚本
- 实例化 EventEmitter 对象
- 每隔 1 秒 EventEmitter 对象发出自定义 hello 事件
- 延迟 5 秒 EventEmitter 对象发出自定义 bye 事件
- hello 事件处理函数在控制台打印 hello world 信息
- bye 事件处理函数在控制台打印 goodbye 信息，并结束程序

## 继承 EventEmitter 类

要求：
- 编写 02-dog.js 以及 02-play-dog.js 脚本
- 02-dog.js 脚本实现 Dog 类，并导出 Dog 类
- Dog 类继承 EventEmitter 类
- Dog 类中，包含：name 和 energy 两个私有数据成员
- name 是狗的名字，energy 是狗的能量
- 用构造函数对私有数据 name 和 energy 进行初始化
- energy 大于零时，每隔 1 秒发出 bark 狗叫事件
- 狗每叫一次，energy 减 1，energy 为零时，狗不能叫
- Dog 的 energy 可以被修改
- 02-play-dog.js 中导入 Dog 类
- 实例化多个 Dog 的对象，不同的 Dog 对象有不同的名字和能量
- 不同的狗采用同一个 bark 事件处理函数
- bark 事件处理函数在控制台打印狗的名字以及它的能量

## util.inherits 方法继承 EventEmitter 类（可选）

要求：
- 编写 03-radio.js 以及 03-listen-radio.js 脚本
- radio 类用 util 的 inherits 方法继承 EventEmitter 类
- radio 类的构造函数有一个入口参数 station 对象
- station 对象包括两个字段：freq 和 name
- radio 类延迟 0 秒发出 play 事件
- radio 类延迟 5 秒发出 stop 事件
- play 和 stop 事件携带事件参数 station 对象
- 03-listen-radio.js 脚本，实例化 radio 对象
- 处理 radio 对象的 play 和 stop 事件
- play 和 stop 事件处理函数打印 station 电台信息以及状态

## 复制 EventEmitter 类成员（可选）

要求：
- 复制 03-radio.js 和 03-listen-radio.js 脚本
- 编写 04-radio.js 和 04-listen-radio.js 脚本
- 不使用 util.inherits 方法继承 EventEmitter 类
- 将 EventEmitter 类中方法复制到 radio 类中
- 测试程序

## 自己实现事件机制

- 要求：
- 复制 02-dog.js 和 02-play-dog.js 脚本
- 编写 05-dog.js 和 05-play-dog.js 脚本
- 不使用 EventEmitter 类，编写 05-event.js 脚本，自己实现 Event 类
- Dog 类继承自己实现的 Event 类
- 测试程序的运行

## 自己实现事件机制（可选）

- 要求：
- 复制 03-radio.js 和 03-listen-radio.js 脚本
- 编写 06-radio.js 和 06-listen-radio.js 脚本
- 不使用 EventEmitter 类，Radio 类继承 05-event.js 脚本中的 Event 类
- 测试程序的运行
