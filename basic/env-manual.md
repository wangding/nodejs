# 开发环境使用

## 启动开发环境

操作步骤如下：
- 运行 vmware 虚拟机软件，打开 vmware 程序窗口
- 启动 mocha linux 虚拟机
- 打开 xshell 软件
- 连接到 mocha linux 虚拟机
- 在 xshell 中使用开发环境

## 关闭开发环境

操作步骤如下：
- 如果 vim 在编辑代码文件，退出 vim 编辑器
- 如果自己的 web 服务程序正在运行，Ctrl + C 终止服务程序，或者 kill 进程
- 在 linux 命令行，输入 `exit` 命令，退出 linux 登录
- xshell 的窗口为 dos 命令行
- 在 dos 命令行，再输入 `exit` 命令，会关闭 xshell 会话窗口
- 如果 xshell 有一个会话窗口，则 xshell 窗口会关闭
- 如果 xshell 有多个会话窗口，在其他会话窗口，做上述同样的操作，直到 xshell 窗口关闭为止
- xshell 窗口关闭后，在 vmware 虚拟机窗口中，找到 mocha 虚拟机标签
- 点暂停按钮，挂起 linux 虚拟机

## JavaScript 前端代码和后端代码自动补全

- 操作步骤如下：

```
cd
mkdir tmp
cd tmp
wget https://sample.wangding.in/nodejs/tern-project
mv tern-project .tern-project
vi a.js               // 命令行打开 vim 编辑器
i                     // 进入插入模式
window.               // 输入 window 和点之后看到浏览器窗口对象 window 的方法提示
ESC                   // 回到普通模式
:q!                   // 不保存退出
vi a.js               // 命令行打开 vim 编辑器
i                     // 进入插入模式
$.                    // 输入 $ 和点之后看到 jQuery 全局对象 $ 的方法提示
ESC                   // 回到普通模式
:q!                   // 不保存退出
vi a.js               // 命令行打开 vim 编辑器
i                     // 进入插入模式
process.              // 输入 process 和点之后看到 node.js 全局对象 process 的方法提示
ESC                   // 回到普通模式
:q!                   // 不保存退出
```

## JavaScript 代码注释工具

- 操作步骤如下：

```
vi a.js               // 命令行打开 vim 编辑器
i                     // 进入插入模式，接下来，写六行代码
var name = 'wangding',
    qq   = '408542507',
    log  = console.log;

log(`name: ${name}`);
log(`qq  : ${qq}`);
ESC                   // 回到普通模式
                      // 上下移动光标到任意一行代码
<space>cc             // 按空格和两个 c 键，对当前行注释
<space>c<space>       // 按空格和 c 键以及空格键，取消当前行注释
<space>V              // 块选当前行
jj                    // 向下选中两行
<space>cc             // 对选中多行进行注释。取消注释，选中多行，按<space>c<space>
```

## 使用 jsdoc 插件，快速生成代码注释

- 操作步骤如下：

```
vi a.js              // 命令行打开 vim 编辑器
i                    // 进入插入模式
                     // 写一个 x + y 的 add 加法函数，代码如下
function add(x, y) {
  return x + y;
}
ESC                  // 退出插入模式，进入普通模式，移动光标到第一行
:JsDoc               // 按冒号进入命令模式，输入 JsDoc<回车>，注意命令大小写不要写错
                     // vim 窗口中应该出现函数头注释框架
:q!                  // 不保存退出
```

## 使用 emmet 插件，快速编写 html 代码

- 操作步骤如下：

```
vi a.html         // 命令行打开 vim 编辑器
i                 // 进入插入模式
!<ctrl>+y,        // 输入感叹号，然后同时按 ctrl 和 y 键，然后按逗号键
                  // vim 窗口中应该出现 HTML5 的页面框架代码
                  // 继续输入下面的代码
form>(label+input+br)*3<ctrl>+y,
                  // 会生成一个登录表单的 DOM 代码框架
ESC               // 回到 Normal 模式
:q!               // 不保存退出
```

## CSS 代码补全

- 操作步骤如下：

```
vim  a.css            // 命令行打开 vim 编辑器
i                     // 进入插入模式
                      // 写一个 body 的 CSS 样式代码，如下：
body {
  color:              // 注意在输入冒号和空格之后，应该弹出代码补全窗口
ESC                   // 回到普通模式
:q!                   // 不保存退出
```

## 验证开发辅助工具

- 操作步骤如下：

```bash
tree ~/wd               // 应该看到 wd 目录的树状结构
htmlhint --version      // 应该看到版本号不低于：0.9.13
csslint --version       // 应该看到版本号不低于：v1.0.4
eslint --version        // 应该看到版本号不低于：v4.17.0
browser-sync --version  // 应该看到版本号不低于：2.23.6
gitbook --version       // 应该看到 CLI 的版本号和 GitBook 的版本号
```

## 练习 vim 代码编辑器

1. 阅读 [Vim 笔记](https://note.wangding.in/office/vim.html)
2. 执行下列命令
```
cd                     // 回到家目录
git clone https://github.com/wangding/jsnotepad
tree jsnotepad         // 查看 jsnotepad 项目下的代码文件
```
3. 用 vim 打开 jsnotepad 项目中自己感兴趣的代码文件 html, css 或 js
4. win 10 浏览器窗口（查看 vim 笔记）和 XShell 终端窗口平铺，左边是笔记，右边是终端窗口
5. 对照左边文档，在终端窗口中练习 vim 的用法

## Emmet 工具的详细用法

2. Emmet 工具在 vim 编辑器中的快捷键：**<ctrl>+y,**
3. Emmet 语法，请参考：https://docs.emmet.io/abbreviations/syntax/
4. Emmet vim 插件用法，请参考：https://github.com/mattn/emmet-vim/blob/master/TUTORIAL
5. 掌握 Emmet vim 常用的快捷键，<ctrl>+y，逗号，d，a，m，k，/，n
6. 创建一个 emmet.html 文件，在 vim 中打开此文件，练习 Emmet 插件的用法

## 静态代码检查工具的使用

2. HTML 静态代码检查的规则，请参考：https://segmentfault.com/a/1190000013276858
3. CSS 静态代码检查的规则，请参考：https://github.com/CSSLint/csslint/wiki/Rules
4. JavaScript 静态代码检查的规则，请参考：http://eslint.cn/docs/rules/
5. 创建 HTML、CSS 和 JavaScript 三个代码文件，在 vim 中编辑代码，体验静态代码检查插件的用法

## 热加载工具的使用

2. 执行如下操作，掌握热加载工具的用法：

```
cd ~/spa        // 进入前端页面所在的目录
lrd             // 运行热加载程序，热加载程序会启动一个 Web 静态文件服务
                // 在 XShell 另一个控制台窗口编写代码
vi index.html
i               // 进入插入模式
!  ctrl + y,    // 产生 H5 页面框架代码
ESC             // 从插入模式回到普通模式
<space>w        // 同时按下空格和 w 键，保存代码
```

- 打开 win10 的 chrome 浏览器
- 输入热加载程序提示的 URL 地址
- chrome 浏览器中应该能看到刚才编写的页面代码
- 修改网页代码，保存，chrome 浏览器会自动刷新
- 通过热加载，浏览器能实时反映出页面的最新变化
- 不用手动刷新，提高开发效率
- 退出热加载按 Ctrl + C
