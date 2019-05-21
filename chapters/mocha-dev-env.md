# 升级开发环境

Mocha 虚拟机开发环境，可以完成 Node.js 后端开发。下面的安装步骤将使这个开发环境具备前端开发能力。另外，Node.js 后端开发环境也需要进行升级。

在确保自己的虚拟机能上网的前提下，执行以下搭建前端开发环境的步骤：

## 更新 tools 仓库

```bash
cd
cd wd
rm -rf tools
git clone https://github.com/wangding/tools
```

## 安装 tools 仓库的 vim 配置文件

```bash
cd
cd wd/tools
./install.sh
```

## 安装 zsh 插件

```bash
cd
zsh                // 安装 zsh 插件
exit               // 退出终端窗口，重新进入
```

## 安装 vim 插件

```
vim                // 命令行打开 vim 编辑器
:PluginInstall     // vim 的普通模式下，按冒号进入命令模式
                   // 输入 PluginInstall 命令，注意命令的大小写
:q                 // vim 提示 Done 时，:q 退出安装界面
:q                 // 退出 vim
```
![vim-plugin-install](https://user-images.githubusercontent.com/1182720/36183222-5b502030-1168-11e8-836b-46be8a9dd9c7.png)

## 验证安装的 emmet vim 插件

```
vim  a.html       // 命令行打开 vim 编辑器
i                 // 进入插入模式
!<ctrl>+y,        // 输入感叹号，然后同时按 ctrl 和 y 键，然后按逗号键
                  // vim 窗口中应该出现 HTML5 的页面框架代码
:q!               // 不保存退出
```

## 验证安装的 jsdoc vim 插件

```
vim  a.js            // 命令行打开 vim 编辑器
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

## 验证 CSS 代码补全功能

```
vim  a.css            // 命令行打开 vim 编辑器
i                     // 进入插入模式
                      // 写一个 body 的 CSS 样式代码，如下：
body {
  background:         // 注意在输入冒号和空格之后，应该弹出代码补全窗口
ESC                   // 回到普通模式
:q!                   // 不保存退出
```

## 安装开发辅助工具

```bash
su                    // 切换到 root 账户
yum install -y tree python-pygments     // 安装 Linux 命令行 tree 工具和语法高亮工具
npm i -g htmlhint     // 安装 HTMLHint 静态代码检查工具
npm i -g csslint      // 安装 CSSLint 静态代码检查工具
npm i -g eslint       // 安装 ESLint 静态代码检查工具
npm i -g browser-sync // 安装热加载工具
su wangding           // 切换到开发者账户
```

## 验证开发辅助工具

```bash
tree ~/wd               // 应该看到 wd 目录的树状结构
htmlhint --version      // 应该看到版本号：0.9.13
csslint --version       // 应该看到版本号：v1.0.4
eslint --version        // 应该看到版本号：v4.17.0
browser-sync --version  // 应该看到版本号：2.23.6
```

## 验证 JavaScript 前端代码自动补全
```

cd ~/spa
vim  a.js             // 命令行打开 vim 编辑器
i                     // 进入插入模式
window.               // 输入 window 和点之后看到浏览器窗口对象 window 的方法提示
ESC                   // 回到普通模式
:q!                   // 不保存退出 
vim  a.js             // 命令行打开 vim 编辑器
i                     // 进入插入模式
$.                    // 输入 $ 和点之后看到 jQuery 全局对象 $ 的方法提示
ESC                   // 回到普通模式
:q!                   // 不保存退出 
```

## 安装 nvm 并升级 node.js 版本

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
上面的安装步骤结束后，编辑 .zshrc 文件，执行命令：`vi ~/.zshrc`。在 zshrc 文件的最后增加下面两行代码：
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh"   ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```
升级 Node.js 版本到 8.11.3，执行下面的命令：
```
node -v               // 当前的 Node.js 版本应该是 6
nvm install 8
node -v               // 升级后 Node.js 版本应该是 8
``` 

# 掌握工具用法

## Emmet 工具

1. 安装 Emmet vim 插件，上面的开发环境搭建已经介绍过了
2. Emmet 工具在 vim 编辑器中的快捷键：**<ctrl>+y,**
3. Emmet 语法，请参考：https://docs.emmet.io/abbreviations/syntax/
4. Emmet vim 插件用法，请参考：https://raw.githubusercontent.com/mattn/emmet-vim/master/TUTORIAL
5. 掌握 Emmet vim 常用的快捷键，<ctrl>+y，逗号，d，a，m，k，/，n
6. 创建一个 emmet.html 文件，在 vim 中打开此文件，练习 Emmet 插件的用法

## 静态代码检查工具

1. 安装静态代码检查工具，上面的开发环境搭建已经介绍过了
2. HTML 静态代码检查的规则，请参考：https://segmentfault.com/a/1190000013276858
3. CSS 静态代码检查的规则，请参考：https://github.com/CSSLint/csslint/wiki/Rules
4. JavaScript 静态代码检查的规则，请参考：http://eslint.cn/docs/rules/
5. 创建 HTML、CSS 和 JavaScript 三个代码文件，在 vim 中编辑代码，体验静态代码检查插件的用法

## 热加载工具

1. 安装热加载工具，上面的开发环境搭建已经介绍过了
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
