# 第九课：子进程：执行外部程序

## 任务 1：

- [child_process API 资料](http://nodejs.cn/api/child_process.html)  

## 任务 2：

- 创建 15-child-process 目录  
- 编写 01-exec-file.js 脚本，请实现以下功能：  
  - 可以执行任何一个外部程序  
  - 命令行参数中有需要执行的外部程序以及外部程序的参数  
  - 如果没有命令行参数，执行 cat 命令，打印 01-exec-file.js 脚本文件内容  
  - 外部程序运行的正确信息打印在控制台上  
  - 外部程序运行的错误信息打印在控制台上  
  - 测试用例 1：执行 `./01-exec-file.js`，预期结果：控制台打印 01-exec-file.js 文件内容  
  - 测试用例 2：执行 `./01-exec-file.js mkdir abc`，预期结果：当前目录下创建 abc 文件夹  
  - 测试用例 3：执行 `./01-exec-file.js mkdir abc`, 预期结果：报错，abc 文件夹已存在  
  - 测试用例 4：执行 `./01-exec-file.js ls -l / /usr /var`，预期结果：长格式输出根目录、/usr 和 /var 三个目录的内容  
  - 测试用例 5：执行 `./01-exec-file.js abc`，预期结果：报错，Error: spawn abc ENOENT  

## 任务 3：

- 编写 02-spawn-v1.js 脚本  

## 任务 4：

- 编写 02-child.js 脚本  

## 任务 5：

- 编写 02-exec-file.js 脚本  

## 任务 6：

- 编写 02-spawn-v2.js 脚本  

## 任务 7：

- 编写 02-spawn-v3.js 脚本  

## 任务 8：

- 编写 02-spawn-v4.js 脚本  

## 任务 9：

- 编写 03-exec.js 脚本  

## 任务 10：

- 编写 04-detach.js 脚本  

## 任务 11：

- 编写 05-fork.js 脚本  

## 任务 12：

- 编写 05-ipc-child.js 脚本  

## 任务 13：

- 编写 05-ipc.js 脚本  

## 任务 14：

- 编写 06-sync.js 脚本  
