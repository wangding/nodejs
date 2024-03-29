# 第 2 课：全局（上）

## 全局变量

要求：

- 创建 02-global-var 目录
- 编写 01-file-dir-name.js 脚本
- 在控制台输出 `__filename` 和 `__dirname` 两个变量
- 完成项目目录下，'views' 子目录中，网页模板 'view.html' 的路径拼接
- 在控制台输出拼接后的路径信息

## 阅读 Node.js API 资料

- [Console API 资料](https://nodejs.cn/dist/latest-v18.x/docs/api/console.html)

## 控制台格式化输出信息

要求：

- 创建 03-console 目录
- 编写 01-format.js 脚本
- 定义一个 user 对象，包含三个字段：name（字符串）, age（整数）, qq（字符串）
- 使用六种占位符，分别输出四种变量类型：字符串、整数（两种）、浮点数和对象（两种）
- 使用四种不同的方式输出字符串信息
- 用 `console` 的 `dir` 方法输出对象和对象的数组
- 用 `console` 的 `dir` 方法输出层次较深的对象
- 用 `console` 的 `table` 方法输出对象和对象的数组，观察 `index` 列的区别
- 用 `console` 的 `table` 方法输出对象数组的某些字段
- 向标准错误流中输出信息：`Error：something wrong!`
- 通过命令行重定向，观察 `console` 的 `log` 和 `error` 两个方法所使用流的区别
```bash
./01-format.js 1> output.txt
./01-format.js 2> error-msg.txt
```

## 控制台基准测试

要求：

- 编写 02-time.js 脚本
- 对耗时任务运行的时间进行采样
- 在控制台输出采样的时间
- 多运行几次程序，观察同样的耗时任务每次采样的时间是否相同

## 阅读 Node.js API 资料

- [Process API 资料](https://nodejs.cn/dist/latest-v18.x/docs/api/process.html)
- [OS API 资料](https://nodejs.cn/dist/latest-v18.x/docs/api/os.html)

## 获取平台信息

要求：

- 创建 04-process 目录
- 编写 01-information.js 脚本
- 向控制台打印 CPU 架构信息以及操作系统版本信息
- 打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息
- 在脚本中增加标准输入流的读取操作，让程序暂停执行
- 执行 Linux 命令 `ps aux`，验证当前进程的 ID 信息和程序中得到的进程 ID 信息相同
- 打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息
- 在命令行执行 `node -v` 命令，验证程序输出的 node.js 版本信息是否正确
- 在命令行执行 `id` 命令，验证程序输出的登录账户 id 信息是否正确
- 在命令行执行 `pwd` 命令，验证程序输出的当前工作目录信息是否正确
- 打印内存使用情况
- 打印环境变量
- 在命令行执行 `env` 命令，验证程序输出的环境变量信息正确
- 打印编译当前 Node.js 可执行文件的配置选项
- 生成当前进程的诊断报告，查看诊断报告
- 打印当前操作系统的 CPU 信息，运行 `cat /proc/cpuinfo` 命令，验证程序输出是否正确
- 打印当前操作系统的运行时长信息，运行 `uptime` 命令，验证程序输出是否正确
- 打印当前操作系统的版本信息，运行 `uname` 命令，验证程序输出是否正确
- 打印当前操作系统的内核信息，运行 `uname -a` 命令，验证程序输出是否正确
- 打印当前操作系统的网卡信息，运行 `ifconfig` 命令，验证程序输出是否正确
- 打印当前操作系统的用户信息，运行 `id` 命令，验证程序输出是否正确

## 获取命令行参数

要求：

- 编写 02-calc.js 脚本
- 获取命令行参数，命令行参数为一个数学表达式
- 如果没有命令行参数，打印程序的使用说明
- 如果命令行参数是 --help 或者 -h，打印程序的使用说明
- 如果命令行参数多于 3 个，多余的参数忽略
- 对命令行参数的表达式进行求值，打印求值结果
- 如果命令行参数不是合法的数学表达式（例如：`a+b`），则打印错误信息
- 命令行参数的格式如下：

  ![02-calc，王顶，408542507@qq.com](./images/02-calc.webp)

## 操作标准输入输出流

要求：

- 编写 03-std-io.js 脚本
- 逐条打印提示信息：姓名、邮箱、QQ 号和手机号码
- 读取用户键盘输入信息，保存到对象中
- 用户键盘输入结束后，打印完整的对象信息
- 用户随时可以按 `Ctrl + D`，终止信息输入，打印对象信息，程序结束运行
- 编写 03-read-line.js 脚本
- 用 [Readline API](https://nodejs.cn/dist/latest-v18.x/docs/api/readline.html) 实现上面相同的功能

## 处理退出码

要求：

- 编写 04-exit-code.js 脚本
- 通过命令行参数获取程序的退出码，以该退出码退出程序
- 通过 `echo $?` 命令查看程序的退出码
- 对命令行参数的退出码，做数据合法性校验，如果命令行参数不正确，控制台打印准确的错误提示信息

## 处理信号量

要求：

- 编写 05-signal.js 脚本
- 接收信号量，并对信号（SIGINT 和 SIGTSTP）进行处理
- 用控制台快捷键，给程序脚本发送信号量，测试程序的功能逻辑
- CTRL+C 发送 SIGINT 信号量，让程序退出
- CTRL+Z 发送 SIGTSTP 信号量，让程序挂起
- 用 kill 命令，给程序脚本发送信号量，测试程序的功能逻辑
- 用 OS API，打印所有信号常量

## 实现 my-kill 程序

要求：

- 编写 06-my-kill.js 脚本
- 获取命令行参数，得到进程 ID 信息和信号量标识符
- 对命令行参数有数据合法性校验，数据非法时，在控制台打印准确的错误提示信息
- 向指定进程 ID 的进程发送特定的信号量
- 用 06-my-kill.js 脚本，向 05-signal.js 脚本发送信号量，测试两个程序的功能逻辑

## 阅读 Node.js API 资料

- 阅读 [Global API 资料](https://nodejs.cn/dist/latest-v18.x/docs/api/globals.html) 中的六个定时器函数相关的资料

## 定时炸弹

要求：

- 创建 05-timer 目录
- 编写 01-bomb.js 脚本
- 编写定时炸弹构造函数
- 炸弹的 `start` 方法启动定时器，3 秒钟之后炸弹爆炸
- 炸弹的 `clear` 方法取消定时器
- 实例化两个定时炸弹对象：b1 和 b2
- b1 调用 `start` 方法
- b2 调用 `start` 方法
- b2 在 1 秒钟之后，调用 `clear` 方法
- 运行程序，测试程序的执行效果

## 定时器

要求：

- 编写 02-timer.js 脚本
- 创建两个定时器：`timer1` 和 `timer2`
- 两个定时器都是 500 ms 触发一次定时任务
- `timer1` 启动后，倒计时 5s 结束 `timer1` 并启动 `timer2`
- `timer2` 定时任务执行 5 次后退出
- 运行程序，测试程序执行的效果

## sleep

要求：

- 编写 03-sleep.js 脚本
- 执行命令 `echo hello; sleep 2; echo world`，观察 `sleep` 命令的功能和效果
- 用 `setTimeout` 实现 `sleep` 效果，让程序暂停执行若干毫秒
- 运行程序，测试程序执行的效果
- 用 Promise 实例和 `setTimeout` 封装 sleep 方法，让程序暂停执行若干毫秒
- 运行程序，测试程序执行的效果
- 使用 node.js v15 引入的 Promise 版本的 setTimeout 实现 sleep
- 运行程序，测试程序执行的效果
- 比较三种实现方式的区别
