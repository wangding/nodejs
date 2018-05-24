# 第二课：全局（上）

## 任务 1：全局变量

要求：
- 创建 02-global-var 目录  
- 编写 01-file-dir-name.js 脚本
- 在控制台输出 `__filename` 和 `__dirname` 两个变量  
- 完成项目目录下，'views' 子目录中，网页模板 'view.html' 的路径拼接  
- 在控制台输出拼接后的路径信息

## 任务 2：阅读 Node.js API 资料

- [console API 资料](http://nodejs.cn/api/console.html)  

## 任务 3：控制台格式化输出信息

要求：  
- 创建 03-console 目录  
- 编写 01-format.js 脚本
- 定义一个 user 对象，包含三个字段：name, age, qq
- 使用三种占位符，分别输出三种变量类型：字符串，整数和 JSON 数据  
- 以两种不用占位符的方式输出 `user.qq` 信息  
- 向标准错误流中输出信息：`Error：something wrong!`  
- 通过命令行重定向，观察 console.log 和 console.error 两个方法所使用流的区别  
```bash
./01-format.js > output.txt
./01-format.js 2 > error-msg.txt
```

## 任务 4：控制台基准测试

要求：
- 编写 02-time.js 脚本
- 对耗时任务运行的时间进行采样  
- 在控制台输出采样的时间
- 多运行几次程序，观察同样的耗时任务每次采样的时间是否相同

## 任务 5：阅读 Node.js API 资料

- [process API 资料](http://nodejs.cn/api/process.html)  

## 任务 6：获取平台信息

要求：  
- 创建 04-process 目录  
- 编写 01-information.js 脚本  
- 向控制台打印 CPU 架构信息以及操作系统版本信息  
- 打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息  
- 在脚本中增加标准输入流的读取操作，让程序暂停执行
  - 执行 Linux 命令 `ps aux`，验证当前进程的 ID 信息和程序中得到的进程 ID 信息相同  
- 打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息  
  - 在命令行执行 'node -v' 命令，验证程序输出的 node.js 版本信息是否正确  
  - 在命令行执行 'id' 命令，验证程序输出的登录账户 id 信息是否正确  
  - 在命令行执行 'pwd' 命令，验证程序输出的当前工作目录信息是否正确  
- 打印内存使用情况  
- 打印环境变量  
  - 在命令行执行 'env' 命令，验证程序输出的环境变量信息正确 

## 任务 7：获取命令行参数

要求：
- 编写 02-calc.js 脚本  
- 获取命令行参数，命令行参数为一个数学表达式  
- 如果没有命令行参数，打印程序的使用说明  
- 如果命令行参数是 --help 或者 -h，打印程序的使用说明  
- 如果命令行参数多于 3 个，多余的参数忽略  
- 对命令行参数的表达式进行求值，打印求值结果  
- 命令行参数的格式如下：  
```bash
./02-calc.js
usage: cmd-name [OPTION] [expression]
evaluate the expression.

Mandatory arguments to long options are mandatory for short options too.
  -h, --help output help information and exit
```
```bash
./02-calc.js 2+4
2+4=6
```
```bash
./02-calc.js 2\*Math.PI
2*Math.PI=6.283185307179586
```

## 任务 8：处理退出码

要求：
- 编写 03-exit-code.js 脚本  
- 通过命令行参数获取程序的退出码，以该退出码退出程序  
- 通过 echo 命令查看程序的退出码  
- 对命令行参数的退出码，做数据合法性校验  

## 任务 9：操作标准输入输出流

要求：
- 编写 04-std-io.js 脚本  
- 逐条打印提示信息：姓名、邮箱、QQ、手机  
- 读取用户键盘输入信息，保存到对象中  
- 用户键盘输入结束后，打印完整的对象信息  

## 任务 10：处理信号量

要求：
- 编写 05-signal.js 脚本  
- 接收信号量，并对信号（SIGINT 和 SIGTSTP）进行处理  
- 用控制台快捷键，给程序脚本发送信号量，测试程序的功能逻辑  
- CTRL+C 发送 SIGINT 信号量，让程序退出
- CTRL+Z 发送 SIGTSTP 信号量，让程序挂起
- 用 kill 命令，给程序脚本发送信号量，测试程序的功能逻辑  

## 任务 11：实现 my-kill 程序

要求：
- 编写 05-my-kill.js 脚本  
- 获取命令行参数，得到进程 ID 信息和信号量标识符  
- 向指定进程 ID 的进程发送特定的信号量  
- 用 05-my-kill.js 脚本，向 05-signal.js 脚本发送信号量，测试两个程序的功能逻辑  

## 任务 12：阅读 Node.js API 资料

- 阅读 [global API 资料](http://nodejs.cn/api/globals.html) 中的六个定时器函数相关的资料

## 任务 13：实现延迟执行任务  

要求：  
- 创建 05-timer 目录  
- 编写 01-delay-call.js 脚本  
- 定义一个定时炸弹对象  
- 定时炸弹对象和 setTimeout 函数绑定  
- 定时炸弹爆炸  
- 在定时炸弹爆炸之前，拆除定时炸弹  

## 任务 14：实现定时执行任务

要求：  
- 编写 02-timer.js 脚本  
- 定时执行任务
- 用两种方式取消定时器，分别是：
  - 设置定时器运行时间总时长，时间到后取消定时器；
  - 设置计数器，重复执行任务次数达到上限，取消定时器；
