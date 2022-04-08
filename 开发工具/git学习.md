# Git 教程

## **Git** 介绍

Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion（SVN） 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

### Git优点

- 适合分布式开发，强调个体。
- 公共服务器压力和数据量都不会太大。
- 速度快、灵活。
- 任意两个开发者之间可以很容易的解决冲突。
- 离线工作。

### Git缺点

- 资料少（起码中文资料很少）。
- 学习周期相对而言比较长。
- 不符合常规思维。
- 代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。

### Git 与 SVN 区别

- 1、GIT是分布式的，SVN不是：这是GIT和其它非分布式的版本控制系统，例如SVN，CVS等，最核心的区别。
- 2、GIT把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似.svn,.cvs等的文件夹里。
- 3、GIT分支和SVN的分支不同：分支在SVN中一点不特别，就是版本库中的另外的一个目录。
- 4、GIT没有一个全局的版本号，而SVN有：目前为止这是跟SVN相比GIT缺少的最大的一个特征。
- 5、GIT的内容完整性要优于SVN：GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

# Git安装

在使用Git前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。

Git 各平台安装包下载地址为：[http://git-scm.com/downloads](https://git-scm.com/downloads)

## Linux 平台上安装

Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。

在有 yum 的系统上（比如 Fedora）或者有 apt-get 的系统上（比如 Debian 体系），可以用下面的命令安装：

各 Linux 系统可以很简单多使用其安装包管理工具进行安装：

### Debian/Ubuntu

Debian/Ubuntu Git 安装命令为：

```sh
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev

$ apt-get install git-core

$ git --version
git version 1.8.1.2
```

### Centos/RedHat

如果你使用的系统是 Centos/RedHat 安装命令为：

```sh
$ yum install curl-devel expat-devel gettext-devel \
  openssl-devel zlib-devel

$ yum -y install git-core

$ git --version
git version 1.7.1
```

------

## Windows 平台上安装

在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：

安装包下载地址：[http://msysgit.github.io/](https://msysgit.github.io/)

完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。

在开始菜单里找到"Git"->"Git Bash"，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。

------

## Mac 平台上安装

在 Mac 平台上安装 Git 最容易的当属使用图形化的 Git 安装工具，下载地址为：

[http://sourceforge.net/projects/git-osx-installer/](https://sourceforge.net/projects/git-osx-installer/)

# Git 配置

### Git 配置信息

 Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

- `/etc/gitconfig` 文件：系统中对所有用户都普遍适用的配置。若使用 `git config` 时用 `--system` 选项，读写的就是这个文件。
- `~/.gitconfig` 文件：用户目录下的配置文件只适用于该用户。若使用 `git config` 时用 `--global` 选项，读写的就是这个文件。
- 当前项目的 Git 目录中的配置文件（也就是工作目录中的 `.git/config` 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 `.git/config` 里的配置会覆盖 `/etc/gitconfig` 中的同名变量。

在 Windows 系统上，Git 会找寻用户主目录下的 .gitconfig 文件。主目录即 $HOME 变量指定的目录，一般都是 C:\Documents and Settings\$USER。

此外，Git 还会尝试找寻 /etc/gitconfig 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。

### 用户信息

配置个人的用户名称和电子邮件地址：

```bash
$ git config --global user.name "kop"
$ git config --global user.email email@gmail.com
```

**如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。**

如果要在**某个特定的项目中**使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。

### 文本编辑器

**设置Git默认使用的文本编辑器**, 一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：:

```bash
$ git config --global core.editor emacs
```

### 差异分析工具

还有一个比较常用的是，**在解决合并冲突时使用哪种差异分析工具**。比如要改用 vimdiff 的话：

```bash
$ git config --global merge.tool vimdiff
```

Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。

> 当然，你也可以指定使用自己开发的工具。

### 查看配置信息

要检查已有的配置信息，可以使用` git config --list` 命令：

```bash
$ git config --list
user.name=Scott Chacon
user.email=schacon@gmail.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

有时候会看到重复的变量名，**那就说明它们来自不同的配置文件**（比如 /etc/gitconfig 和 ~/.gitconfig），不过最终 Git 实际采用的是最后一个。

**也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可**，像这样：

```bash
$ git config user.name
username
```

### **配置Git**

首先在本地创建ssh key；

```bash
$ ssh-keygen -t rsa -C "email@qq.com"
liverkop
```

 为了验证是否成功，在git bash下输入：

```bash
$ ssh -T git@github.com
Hi senbinkop66! You've successfully authenticated, but GitHub does not provide shell access.
```

 接下来我们要做的就是把本地仓库传到github上去，在此之前还需要设置username和email，因为github每次commit都会记录他们。

```bash
$ git config --global user.name ""
$ git config --global user.email ""
```

```bash
$ ssh-agent -s
SSH_AUTH_SOCK=/tmp/ssh-BXU7fM1w3qmM/agent.1988; export SSH_AUTH_SOCK;
SSH_AGENT_PID=1989; export SSH_AGENT_PID;
echo Agent pid 1989;

```

1.首先，如果你没有ssh key的话，在ternimal下输入命令：

```bash
$ ssh-keygen -t rsa -C "email@qq.com"

Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/zhusenbin/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/zhusenbin/.ssh/id_rsa
Your public key has been saved in /c/Users/zhusenbin/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:kifiigIwtXCF+Va1f+Pc+k/hXm0FTMb7y6IFgrLqe4s @qq.com
The key's randomart image is:
+---[RSA 3072]----+
|   +.  ..    .o  |
|. =   .  .   +.  |
| + o .  .     o. |
|o . o  ...    .. |
|.. ...+.S...o  o.|
|.  . .o+  .+.o. =|
|.   ..      o.o.*|
|.. .o.      .o.=.|
|o oEo..    .o.oo.|
+----[SHA256]-----+


```

"email@qq.com"改为自己的邮箱即可，途中会让你输入密码啥的，不需要管，一路回车即可，会生成你的ssh key。（如果重新生成的话会覆盖之前的ssh key。）

2.然后再ternimal下执行命令：

```bash
$ ssh -v git@github.com

OpenSSH_8.8p1, OpenSSL 1.1.1m  14 Dec 2021
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: Connecting to github.com [20.205.243.166] port 22.
debug1: Connection established.
...
Hi senbinkop66! You've successfully authenticated, but GitHub does not provide shell access.
debug1: channel 0: free: client-session, nchannels 1
Connection to github.com closed.
Transferred: sent 3492, received 2724 bytes, in 0.7 seconds
Bytes per second: sent 5308.5, received 4141.0
debug1: Exit status 1
```

3.这时候再在ternimal下输入：　　

```bash
$ ssh-agent -s
```

然后会提示类似的信息：

```bash
SSH_AUTH_SOCK=/tmp/ssh-mqD7WGHrXukk/agent.2007; export SSH_AUTH_SOCK;
SSH_AGENT_PID=2008; export SSH_AGENT_PID;
echo Agent pid 2008;
```

4.接着再输入：

```bash
$ ssh-add ~/.ssh/id_rsa
```

这时候应该会提示： 　　

```
Identity added: …（这里是一些ssh key文件路径的信息）
```

（注意）如果出现错误提示： 　

```
　Could not open a connection to your authentication agent.
```

请执行命令：

```bash
$ eval ssh-agent -s
```

后继续执行命令

```bash
$ ssh-add ~/.ssh/id_rsa
```

，这时候一般没问题啦。

5.打开你刚刚生成的id_rsa.pub，将里面的内容复制，进入你的github账号，在settings下，SSH and GPG keys下new SSH key，title随便取一个名字，然后将id_rsa.pub里的内容复制到Key中，完成后Add SSH Key。

6.最后一步，验证Key

在ternimal下输入命令： 

```bash
$ ssh -T git@github.com
```



# Git 工作流程

## 工作流程

一般工作流程如下：

- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

下图展示了 Git 的工作流程：

![git工作流程](E:\pogject\学习笔记\image\git\git工作流程.png)

## Git 工作区、暂存区和版本库

先来理解下Git 工作区、暂存区和版本库概念

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫stage, 或index。一般存放在"git目录"下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：**工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：

![git工作流程](E:\pogject\学习笔记\image\git\git工作流程关系.png)

1. 图中左侧为工作区，右侧为版本库。在版本库中标记为 "index" 的区域是**暂存区**（stage, index），标记为 "master" 的**是 master 分支所代表的目录树。**
2. 图中我们可以看出此时 "HEAD" **实际是指向 master 分支的一个"游标"**。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。
3. 图中的 objects 标识的区域为 **Git 的对象库**，实际位于 ".git/objects" 目录下，**里面包含了创建的各种对象及内容。**
4. 当对工作区修改（或新增）的文件执行 "git add" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，**而该对象的ID被记录在暂存区的文件索引中**。
5. 当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新**。即 master 指向的目录树就是提交时暂存区的目录树。**
6. 当执行 "**git reset HEAD**" 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。
7. 当执行 "git rm --cached <file>" 命令时，**会直接从暂存区删除文件，工作区则不做出改变**。
8. 当执行 "git checkout ." 或者 "git checkout -- <file>" 命令时，**会用暂存区全部或指定的文件替换工作区的文件**。这个操作**很危险**，**会清除工作区中未添加到暂存区的改动**。
9. 当执行 "git checkout HEAD ." 或者 "git checkout HEAD <file>" 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是**极具危险性的**，因为**不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。**



# Git 创建仓库

介绍如何创建一个远程的 Git 仓库。您可以使用一个已经存在的目录作为Git仓库或创建一个空目录。

使用您当前目录作为Git仓库，我们只需使它初始化。

```bash
git init
```

使用我们指定目录作为Git仓库。

```bash
git init newrepo
```

初始化后，在当前目录下会出现一个名为 .git 的目录，**所有 Git 需要的数据和资源都存放在这个目录中**。

如果当前目录下有几个文件想要纳入版本控制，**需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交**：

```bash
$ git add *.c
$ git add README
$ git commit -m 'initial project version'
```

------

## 从现有仓库克隆

克隆仓库的命令格式为：

```bash
git clone [url]
```

比如，要克隆 Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：

```bash
$ git clone git://github.com/schacon/grit.git
```

执行该命令后，会在当前目录下创建一个名为grit的目录，**其中包含一个 .git 的目录，用于保存下载下来的所有版本记录。**

如果要**自己定义要新建的项目目录名称**，可以在上面的命令末尾指定新的名字：



```bash
$ git clone git://github.com/schacon/grit.git mygrit
```

```bash
$ git clone https://github.com/vuejs/vue.git myvue
Cloning into 'myvue'...
remote: Enumerating objects: 57189, done.
remote: Total 57189 (delta 0), reused 0 (delta 0), pack-reused 57189
Receiving objects: 100% (57189/57189), 27.25 MiB | 9.09 MiB/s, done.
Resolving deltas: 100% (40159/40159), done.

```

# Git 基本操作

Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。

------

## 获取与创建项目命令

### git init

用 git init 在目录中创建新的 Git 仓库。 你可以在任何时候、任何目录中这么做，完全是本地化的。

在目录中执行 git init，就可以创建一个 Git 仓库了。比如我们创建 jQuery 项目：

```bash
$ mkdir jQuery
$ cd jQuery
$ git init
Initialized empty Git repository in  /e/pogject/jQuery/.git/
```

现在你可以看到在你的项目目录中有个 .git 的子目录。 这就是你的 Git 仓库了，所有有关你的此项目的快照数据都存放在这里。

```bash
$ ll -a
total 325
drwxr-xr-x 1 1111 197121      0 Mar 24 17:27 ./
drwxr-xr-x 1 1111 197121      0 Apr  8 08:52 ../
drwxr-xr-x 1 1111 197121      0 Apr  8 09:09 .git/
-rw-r--r-- 1 1111 197121 288580 Nov 18 21:38 jquery-3.6.0.js
-rw-r--r-- 1 1111 197121   3451 Oct  6  2021 logo.png
-rw-r--r-- 1 1111 197121      0 Oct  8 09:15 myTestAjax.js
-rw-r--r-- 1 1111 197121  11064 Nov 18 21:27 myTestjQuery.js
-rw-r--r-- 1 1111 197121    833 Oct  8 14:48 testAjax.html
-rw-r--r-- 1 1111 197121   4971 Jan  8 18:48 testjQuery1.html
-rw-r--r-- 1 1111 197121    316 Oct  7  2021 testmyjQuery.css

```

### git clone

使用 git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。

如果你需要与他人合作一个项目，或者想要复制一个项目，看看代码，你就可以克隆那个项目。 执行命令：

```bash
 git clone [url]
```

[url] 为你想要复制的项目，就可以了。

例如我们克隆 Github 上的项目：

```bash
$ git clone https://github.com/vuejs/vue.git myvue
Cloning into 'myvue'...
remote: Enumerating objects: 57189, done.
remote: Total 57189 (delta 0), reused 0 (delta 0), pack-reused 57189
Receiving objects: 100% (57189/57189), 27.25 MiB | 9.09 MiB/s, done.
Resolving deltas: 100% (40159/40159), done.

```

上述操作将复制该项目的全部记录。

```bash
$ ll -a
total 422
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 ./
drwxr-xr-x 1 1111 197121      0 Apr  8 08:52 ../
-rw-r--r-- 1 1111 197121    591 Apr  8 08:53 .babelrc.js
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 .circleci/
-rw-r--r-- 1 1111 197121    260 Apr  8 08:53 .editorconfig
-rw-r--r-- 1 1111 197121     22 Apr  8 08:53 .eslintignore
-rw-r--r-- 1 1111 197121    547 Apr  8 08:53 .eslintrc.js
-rw-r--r-- 1 1111 197121    808 Apr  8 08:53 .flowconfig
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 .git/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 .github/
-rw-r--r-- 1 1111 197121    404 Apr  8 08:53 .gitignore
-rw-r--r-- 1 1111 197121    499 Apr  8 08:53 BACKERS.md
-rw-r--r-- 1 1111 197121   1112 Apr  8 08:53 LICENSE
-rw-r--r-- 1 1111 197121   6918 Apr  8 08:53 README.md
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 benchmarks/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 dist/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 examples/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 flow/
-rw-r--r-- 1 1111 197121   5697 Apr  8 08:53 package.json
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 packages/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 scripts/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 src/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 test/
drwxr-xr-x 1 1111 197121      0 Apr  8 08:53 types/
-rw-r--r-- 1 1111 197121 352908 Apr  8 08:53 yarn.lock
```

```bash
$ ls
HEAD    description  index  logs/     packed-refs
config  hooks/       info/  objects/  refs/

```

默认情况下，Git 会按照你提供的 URL 所指示的项目的名称创建你的本地项目目录。 通常就是该 URL 最后一个 / 之后的项目名称。如果你想要一个不一样的名字， 你可以在该命令后加上你想要的名称。

------

## 基本快照

Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。

### git add

**git add 命令可将该文件添加到缓存**，如我们添加以下两个文件：

```bash
$ touch README
$ touch hello.php
$ ls
README      hello.php
$ git status -s
?? README
?? hello.php
```

**git status 命令用于查看项目的当前状态。**

接下来我们执行 git add 命令来添加文件：

```bash
$ git add README hello.php 
```

现在我们再执行 git status，就可以看到这两个文件已经加上去了。

```bash
$ git status -s
A  README
A  hello.php
$ 
```

新项目中，添加所有文件很普遍，可以在当前工作目录执行命令：**git add .** 。

现在我们改个文件，再执行一下 git status：

```bash
$ vim README
$ git status -s
AM README
A  hello.php
```

"AM" 状态的意思是，**这个文件在我们将它添加到缓存之后又有改动**。改动后我们在执行 git add 命令将其添加到缓存中：

```
$ git add .
$ git status -s
A  README
A  hello.php
```

当你要**将你的修改包含在即将提交的快照里的时候，需要执行 git add**。

### git status

git status 以**查看在你上次提交之后是否有修改**。

我演示该命令的时候**加了 -s 参数，以获得简短的结果输出**。如果没加该参数会详细输出内容：

```bash
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   README
    new file:   hello.php
```

### git diff

执行 git diff 来**查看执行 git status 的结果的详细信息**。

git diff 命令显示**已写入缓存**与**已修改但尚未写入缓存的改动**的区别。git diff 有两个主要的应用场景。

- 尚未缓存的改动：git diff
- 查看已缓存的改动： git diff --cached
- 查看已缓存的与未缓存的所有改动：git diff HEAD
- 显示摘要而非整个 diff：git diff --stat

在 hello.php 文件中输入以下内容：

```bash
$ git status -s
AM data.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git diff
warning: LF will be replaced by CRLF in data.txt.
The file will have its original line endings in your working directory
diff --git a/data.txt b/data.txt
index b0abfde..a7819a0 100644
--- a/data.txt
+++ b/data.txt
@@ -1 +1,5 @@
 abcedfg
+
+123456
+23456
+bbb

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git diff --cached
diff --git a/data.txt b/data.txt
new file mode 100644
index 0000000..b0abfde
--- /dev/null
+++ b/data.txt
@@ -0,0 +1 @@
+abcedfg

$ git diff HEAD
warning: LF will be replaced by CRLF in data.txt.
The file will have its original line endings in your working directory
diff --git a/data.txt b/data.txt
new file mode 100644
index 0000000..a7819a0
--- /dev/null
+++ b/data.txt
@@ -0,0 +1,5 @@
+abcedfg
+
+123456
+23456
+bbb

$ git diff --stat
warning: LF will be replaced by CRLF in data.txt.
The file will have its original line endings in your working directory
 data.txt | 4 ++++
 1 file changed, 4 insertions(+)

```

git status显示你上次提交更新至后所更改或者写入缓存的改动， **而 git diff 一行一行地显示这些改动具体是啥**。

接下来我们来查看下 git diff --cached 的执行效果：

```bash
$ git add data.txt
warning: LF will be replaced by CRLF in data.txt.
The file will have its original line endings in your working directory

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git status -s
A  data.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git diff --cached
diff --git a/data.txt b/data.txt
new file mode 100644
index 0000000..a7819a0
--- /dev/null
+++ b/data.txt
@@ -0,0 +1,5 @@
+abcedfg
+
+123456
+23456
+bbb

```

### git commit

使用 git add 命令将想要快照的内容写入了缓存， 而**执行 git commit 记录缓存区的快照**。

Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。

```bash
$ git config --global user.name 'kop'
$ git config --global user.email email@.cn
```

接下来我们写入缓存，并提交对 hello.php 的所有改动。在首个例子中，我们使用 -m 选项以在命令行中提供提交注释。

```bash
$ git add data.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git status -s
A  data.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git commit -m 'add a file'
[master 12cf4b1] add a file
 1 file changed, 5 insertions(+)
 create mode 100644 data.txt

```

现在我们已经记录了快照。如果我们再执行 git status:

```bash
$ git status
On branch master
nothing to commit, working tree clean

```

以上输出说明我们在最近一次提交之后，**没有做任何改动，是一个"干净的工作目录"**。

如果你没有设置 -m 选项，**Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息，默认会打开 vim。**屏幕会像这样：

```bash
 	update the content
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
# Changes to be committed:
#       modified:   data.txt
#
$ git commit
[master 5134d8f] update the content
 1 file changed, 3 insertions(+), 2 deletions(-)
```

如果你觉得 git add 提交缓存的流程太过繁琐，**Git 也允许你用 -a 选项跳过这一步**。命令格式如下：

```bash
git commit -a
```

如：

```bash
$ git commit -am 'add some number'
warning: LF will be replaced by CRLF in data.txt.
The file will have its original line endings in your working directory
[master 4275dca] add some number
 1 file changed, 1 insertion(+)

```

### git reset HEAD

git reset HEAD 命令**用于取消缓存已缓存的内容**。

这里我们有两个最近提交之后又有所改动的文件。我们将两个都缓存，并取消缓存其中一个。

```bash
$ git status -s
?? test

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git add .
warning: LF will be replaced by CRLF in test.
The file will have its original line endings in your working directory

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git status -s
A  test

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git commit -m 'add a file'
[master c75c47b] add a file
 1 file changed, 1 insertion(+)
 create mode 100644 test

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git status -s

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git reset HEAD -- test

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git status -s

```

现在你执行 git commit 将只记录 README 文件的改动，并不含现在并不在缓存中的 hello.rb。

### git rm

git rm 将文件从缓存区中移除。

如我们删除 hello.php文件：

```bash
$ git rm test
rm 'test'

$ ls
data.txt         logo.png       myTestjQuery.js  testjQuery1.html
jquery-3.6.0.js  myTestAjax.js  testAjax.html    testmyjQuery.css

```

默认情况下，git rm file 会将文件从缓存区和你的硬盘中（工作目录）删除。 **如果要在工作目录中留着该文件，可以使用命令：**

```bash
 git rm --cached
 
 $ git rm data.txt --cached
rm 'data.txt'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         logo.png       myTestjQuery.js  testjQuery1.html
jquery-3.6.0.js  myTestAjax.js  testAjax.html    testmyjQuery.css

```

### git mv

git mv 命令做得所有事情就是 git rm --cached， 重命名磁盘上的文件，然后再执行 git add 把新文件添加到缓存区。因此，**虽然有 git mv 命令，但它有点多余** 。



# Git 分支管理

## Git 分支管理

几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着**你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。**

有人把 Git 的分支模型称为"必杀技特性"，而正是因为它，将 Git 从版本控制系统家族里区分出来。

### 创建分支

创建分支命令：

```bash
git branch (branchname)
```

### 切换分支

切换分支命令:

```bash
git checkout (branchname)

$ git branch branchkop

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git checkout branchkop
Switched to branch 'branchkop'
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$
```

当你切换分支的时候，**Git 会用该分支的最后提交的快照替换你的工作目录的内容**， 所以多个分支不需要多个目录。

合并分支命令:

```bash
git merge 
```

你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。

### 列出分支

列出分支基本命令：

```bash
git branch
```

没有参数时，git branch 会列出你在本地的分支。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ git branch
* branchkop
  master
```

此例的意思就是，我们有一个叫做"branchkop"的分支，并且该分支是当前分支。

**当你执行 git init 的时候，缺省情况下 Git 就会为你创建"master"分支。**

如果我们要手动创建一个分支，并切换过去。执行 git branch (branchname) 即可。

```bash
$ git checkout master
Switched to branch 'master'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)

$ git branch branchkop
$ git branch
* master
  branchkop
```

现在我们可以看到，有了一个新分支 branchkop。

当你以此方式在上次提交更新之后创建了新分支，如果后来又有更新提交， 然后又切换到了"branchkop"分支，Git 将还原你的工作目录到你创建分支时候的样子

接下来我们将演示如何切换分支，我们用 git checkout (branch) 切换到我们要修改的分支。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         logo.png       myTestjQuery.js  testjQuery1.html
jquery-3.6.0.js  myTestAjax.js  testAjax.html    testmyjQuery.css

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ echo "hello world" > test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git add .
warning: LF will be replaced by CRLF in test.txt.
The file will have its original line endings in your working directory

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git commit -m 'add test.txt'
[master d97e714] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         myTestAjax.js    testAjax.html
jquery-3.6.0.js  myTestjQuery.js  testjQuery1.html
logo.png         test.txt         testmyjQuery.css

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git checkout branchkop
Switched to branch 'branchkop'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ ls
data.txt         logo.png       myTestjQuery.js  testjQuery1.html
jquery-3.6.0.js  myTestAjax.js  testAjax.html    testmyjQuery.css

```

当我们切换到"branchkop"分支的时候，我们添加的新文件test.txt被移除了, 切换回"master"分支的时候，它们有重新出现了。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ git checkout master
Switched to branch 'master'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         myTestAjax.js    testAjax.html
jquery-3.6.0.js  myTestjQuery.js  testjQuery1.html
logo.png         test.txt         testmyjQuery.css

```

我们也可以使用 git checkout -b (branchname) **命令来创建新分支并立即切换到该分支下**，从而在该分支中操作。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git checkout -b newbranch
Switched to a new branch 'newbranch'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (newbranch)
$ git rm test.txt
rm 'test.txt'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (newbranch)
$ ls
data.txt         logo.png       myTestjQuery.js  testjQuery1.html
jquery-3.6.0.js  myTestAjax.js  testAjax.html    testmyjQuery.css

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (newbranch)
$ git commit -am 'remove test.txt'
[newbranch e060805] remove test.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (newbranch)
$ git checkout master
Switched to branch 'master'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         myTestAjax.js    testAjax.html
jquery-3.6.0.js  myTestjQuery.js  testjQuery1.html
logo.png         test.txt         testmyjQuery.css

```

如你所见，我们创建了一个分支，在该分支的上下文中移除了一些文件，然后切换回我们的主分支，那些文件又回来了。

**使用分支将工作切分开来，从而让我们能够在不同上下文中做事，并来回切换。**

### 删除分支

删除分支命令：

```bash
git branch -d (branchname)
git branch -D (branchname)
```

例如我们要删除"newbranch"分支：

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git branch
  branchkop
* master
  newbranch

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git branch -d newbranch
error: The branch 'newbranch' is not fully merged.
If you are sure you want to delete it, run 'git branch -D newbranch'.

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git branch -D newbranch
Deleted branch newbranch (was e060805).

```

### 分支合并

一旦某分支有了独立内容，你终究会希望将它合并回到你的主分支。 你可以使用以下命令将任何分支合并到当前分支中去：

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ git commit -m 'update'
[branchkop 9eb25b4] update
 1 file changed, 5 insertions(+), 1 deletion(-)

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ git checkout master
Switched to branch 'master'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git merge branchkop
Merge made by the 'ort' strategy.
 data.txt | 6 +++++-
 1 file changed, 5 insertions(+), 1 deletion(-)

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ ls
data.txt         myTestAjax.js    testAjax.html
jquery-3.6.0.js  myTestjQuery.js  testjQuery1.html
logo.png         test.txt         testmyjQuery.css

```

以上实例中我们将 branchkop 分支合并到主分支去。

### 合并冲突

合并并不仅仅是简单的文件添加、移除的操作，Git 也会合并修改。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git branch
  branchkop
* master

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ cat test.txt
hello world

```

切换过去branchkop，我们将内容改为123456。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git checkout branchkop
Switched to branch 'branchkop'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ vim test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ head -1 test.txt
123456


$ git add test.txt
warning: LF will be replaced by CRLF in test.txt.
The file will have its original line endings in your working directory

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (branchkop)
$ git commit -am 'change the content'
[branchkop b6ffd76] change the content
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt

```

将修改的内容提交到 "branchkop" 分支中。 现在，假如切换回 "master" 分支我们可以看内容恢复到我们修改前的，我们再次修改test.txt文件。

```bash
$ git checkout master
Switched to branch 'master'

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ head -1 test.txt
hello world

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ vim test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ cat test.txt
hello world
good

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git diff
diff --git a/test.txt b/test.txt
index 3b18e51..ca2dcff 100644
--- a/test.txt
+++ b/test.txt
@@ -1 +1,2 @@
 hello world
+good

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git commit -am 'add one line'
[master 6b86041] add one line
 1 file changed, 1 insertion(+)

```

现在这些改变已经记录到我的 "master" 分支了。接下来我们将 "branchkop" 分支合并过来。

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git merge branchkop
Auto-merging test.txt
CONFLICT (add/add): Merge conflict in test.txt
Automatic merge failed; fix conflicts and then commit the result.

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master|MERGING)
$ cat test.txt
<<<<<<< HEAD
hello world
good
=======
123456
>>>>>>> branchkop
```

我们将前一个分支合并到 "master" 分支，一个合并冲突就出现了，接下来我们需要手动去修改它。

```bash
$ git diff
diff --cc test.txt
index ca2dcff,9f358a4..0000000
--- a/test.txt
+++ b/test.txt
@@@ -1,2 -1,1 +1,6 @@@
++<<<<<<< HEAD
 +hello world
 +good
++=======
+ 123456
++>>>>>>> branchkop

```

在 Git 中，我们可以用 git add 要告诉 Git 文件冲突已经解决

```bash
$ git status -s
AA test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master|MERGING)
$ git add test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master|MERGING)
$ git status -s
M  test.txt

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master|MERGING)
$ git commit
[master ae958d7] merge

```

现在我们成功解决了合并中的冲突，并提交了结果。

# Git 查看提交历史

在使用 Git 提交了若干更新之后，又或者克隆了某个项目，想回顾下提交历史，我们可以使用 git log 命令查看。

针对我们前一章节的操作，使用 git log 命令列出历史提交记录如下：

```bash
1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git log

commit ae958d72cf5923d1f6504386d4d8d2cd7187f852 (HEAD -> master, origin/master)
Merge: 6b86041 b6ffd76
Author: kop
Date:   Fri Apr 8 11:01:46 2022 +0800

    merge

commit 6b860416609d5e8996cb10493e67d0c3472a77b2
Author: kop
Date:   Fri Apr 8 10:56:37 2022 +0800

    add one line

commit b6ffd76c1f0ffc6698db5c96be710895e4be23bd (branchkop)
Author: kop
Date:   Fri Apr 8 10:52:30 2022 +0800

    change the content

commit e38f31de9a0563edac3f9fe29ebc76601decc396
Merge: d97e714 9eb25b4
Author: kop
Date:   Fri Apr 8 10:43:18 2022 +0800

    Merge branch 'branchkop'
    all

commit 9eb25b4945b535bfeefd9ff6bbd59f29919a208d
Author: 
```

我们可以**用 --oneline 选项来查看历史记录的简洁的版本**。

```bash
$ git log --oneline
ae958d7 (HEAD -> master, origin/master) merge
6b86041 add one line
b6ffd76 (branchkop) change the content
e38f31d Merge branch 'branchkop' all
9eb25b4 update
d97e714 add test.txt
8219665 add
c75c47b add a file
4275dca add some number
5134d8f update the content
12cf4b1 add a file
9e697b2 update
8a4a395 submit jQuery file

```

这告诉我们的是，**此项目的开发历史**。

我们还**可以用 --graph 选项，查看历史中什么时候出现了分支、合并**。以下为相同的命令，开启了拓扑图选项：

```bash
$ git log --oneline --graph
*   ae958d7 (HEAD -> master, origin/master) merge
|\
| * b6ffd76 (branchkop) change the content
* | 6b86041 add one line
* | e38f31d Merge branch 'branchkop' all
|\|
| * 9eb25b4 update
* | d97e714 add test.txt
|/
* 8219665 add
* c75c47b add a file
* 4275dca add some number
* 5134d8f update the content
* 12cf4b1 add a file
* 9e697b2 update
* 8a4a395 submit jQuery file
bas
```

现在我们**可以更清楚明了地看到何时工作分叉、又何时归并**。

你**也可以用 '--reverse'参数来逆向显示所有日志**。

```bash
$ git log --reverse --oneline
8a4a395 submit jQuery file
9e697b2 update
12cf4b1 add a file
5134d8f update the content
4275dca add some number
c75c47b add a file
8219665 add
d97e714 add test.txt
9eb25b4 update
e38f31d Merge branch 'branchkop' all
b6ffd76 (branchkop) change the content
6b86041 add one line
ae958d7 (HEAD -> master, origin/master) merge

```

**如果只想查找指定用户的提交日志可以使用命令：git log --author** , 例如，比方说我们要找 Git 源码中 Linus 提交的部分：

```bash
$ git log --author=Linus --oneline -5
81b50f3 Move 'builtin-*' into a 'builtin/' subdirectory
3bb7256 make "index-pack" a built-in
377d027 make "git pack-redundant" a built-in
b532581 make "git unpack-file" a built-in
112dd51 make "mktag" a built-in
```

如果你**要指定日期，可以执行几个选项：--since 和 --before**，但是你**也可以用 --until 和 --after**。

例如，如果我要看 Git 项目中三周前且在四月十八日之后的所有提交，我可以执行这个（我还用了 --no-merges 选项以隐藏合并提交）：

```bash
$ git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges
5469e2d Git 1.7.1-rc2
d43427d Documentation/remote-helpers: Fix typos and improve language
272a36b Fixup: Second argument may be any arbitrary string
b6c8d2d Documentation/remote-helpers: Add invocation section
5ce4f4e Documentation/urls: Rewrite to accomodate transport::address
00b84e9 Documentation/remote-helpers: Rewrite description
03aa87e Documentation: Describe other situations where -z affects git diff
77bc694 rebase-interactive: silence warning when no commits rewritten
636db2c t3301: add tests to use --format="%N"
```

更多 git log 命令可查看：[http://git-scm.com/docs/git-log](https://git-scm.com/docs/git-log)



# Git 标签

如果你达到一个重要的阶段，**并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签**。

比如说，我们想为我们的 test 项目发布一个"1.0"版本。 我们可以用 git tag -a v1.0 命令给最新一次提交打上（HEAD）"v1.0"的标签。

**-a 选项意为"创建一个带注解的标签"**。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我**推荐一直创建带注解的标签**。

```bash
$ git tag -a v1.0 
```

当你执行 git tag -a 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。

现在，注意当我们执行 git log --decorate 时，我们可以看到我们的标签了：

```bash
$ git log --oneline --decorate --graph
*   ae958d7 (HEAD -> master, tag: v1.0, origin/master) merge
|\
| * b6ffd76 (branchkop) change the content
* | 6b86041 add one line
* | e38f31d Merge branch 'branchkop' all
|\|
| * 9eb25b4 update
* | d97e714 add test.txt
|/
* 8219665 add
* c75c47b add a file
* 4275dca add some number
* 5134d8f update the content
* 12cf4b1 add a file
* 9e697b2 update
* 8a4a395 submit jQuery file

```

**如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。**

例如，假设我们发布了提交4275dca(上面实例的一行)，但是那时候忘了给它打标签。 我们现在也可以：

```bash
$ git tag -a v0.5 4275dca

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git log --oneline --decorate --graph
*   ae958d7 (HEAD -> master, tag: v1.0, origin/master) merge
|\
| * b6ffd76 (branchkop) change the content
* | 6b86041 add one line
* | e38f31d Merge branch 'branchkop' all
|\|
| * 9eb25b4 update
* | d97e714 add test.txt
|/
* 8219665 add
* c75c47b add a file
* 4275dca (tag: v0.5) add some number
* 5134d8f update the content
* 12cf4b1 add a file
* 9e697b2 update
* 8a4a395 submit jQuery file

```

如果我们要查看所有标签可以使用以下命令：

```bash
$ git tag
v0.5
v1.0
```

指定标签信息命令：

```bash
git tag -a <tagname> -m "...标签"
```

PGP签名标签命令：

```bash
git tag -s <tagname> -m "...标签"
```



# Git 远程仓库

Git 并不像 SVN 那样有个中心服务器。

目前我们使用到的 Git 命令都是在本地执行，如果你想通过 Git 分享你的代码或者与其他开发人员合作。 你就需要将数据放到一台其他开发人员能够连接的服务器上。

本例使用了 Github 作为远程仓库

## 添加远程库

要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：

```bash
git remote add [shortname] [url]
```

本例以Github为例作为远程仓库，如果你没有Github可以在官网https://github.com/注册。

由于你的本地Git仓库和GitHub仓库之间的**传输是通过SSH加密**的，所以我们需要配置验证信息：

使用以下命令生成SSH Key：

```bash
$ ssh-keygen -t rsa -C "youremail@example.com"
```

后面的your_email@youremail.com改为你在github上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在~/下生成.ssh文件夹，进去，打开id_rsa.pub，复制里面的key。

回到github上，进入 Account Settings（账户配置），左边选择SSH Keys，Add SSH Key,title随便填，粘贴在你电脑上生成的key。

为了验证是否成功，输入以下命令：

```bash
$ ssh -T git@github.com
Hi senbinkop66! You've successfully authenticated, but GitHub does not provide shell access.
```

以下命令说明我们已成功连上 Github。

之后登录后点击" New repository ",之后在在Repository name 填入 "remote Repository name"(远程仓库名) ，其他保持默认设置，点击"Create repository"按钮，就成功地创建了一个新的Git仓库：

我们可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到GitHub仓库。

现在，我们根据GitHub的提示，在本地的仓库下运行命令：

```bash
$ git remote add origin git@github.com:senbinkop66/jQuery.git

$ git push -u origin master
Enumerating objects: 38, done.
Counting objects: 100% (38/38), done.
Delta compression using up to 4 threads
Compressing objects: 100% (28/28), done.
Writing objects: 100% (35/35), 85.95 KiB | 394.00 KiB/s, done.
Total 35 (delta 15), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (15/15), completed with 2 local objects.
To github.com:senbinkop66/jQuery.git
   8a4a395..ae958d7  master -> master

```

以下命令请根据你在Github成功创建新仓库的地方复制，而不是根据我提供的命令，因为我们的Github用户名不一样，仓库名也不一样。

接下来我们返回 Github 创建的仓库，就可以看到文件已上传到Github上

## 查看当前的远程库

要查看当前配置有哪些远程仓库，可以用命令：

```bash
$ git remote
origin

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git remote -v
origin  git@github.com:senbinkop66/jQuery.git (fetch)
origin  git@github.com:senbinkop66/jQuery.git (push)

```

执行时加上 -v 参数，你还可以看到每个别名的实际链接地址。

------

## 提取远程仓库

Git 有两个命令用来提取远程仓库的更新。

1、从远程仓库下载新分支与数据：

```bash
git fetch
```

**该命令执行完后需要执行git merge 远程分支到你所在的分支**。

```bash
$ git fetch

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git merge
Already up to date.
```

2、从远端仓库提取数据并尝试合并到当前分支：

```bash
git pull
```

该命令就是在执行 git fetch 之后紧接着执行 git merge 远程分支到你所在的任意分支。

```bash
$ git pull
Already up to date.
```

假设你配置好了一个远程仓库，并且你想要提取更新的数据，你可以首先执行 **git fetch [alias]** 告诉 Git 去获取它有你没有的数据，然后你可以执行 **git merge [alias]/[branch]** 以将服务器上的任何更新（假设有人这时候推送到服务器了）合并到你的当前分支。

接下来我们在 Github 上点击"test.txt" 并在线修改它。之后我们在本地更新修改。

```bash
$ git fetch origin
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 700 bytes | 6.00 KiB/s, done.
From github.com:senbinkop66/jQuery
   ae958d7..0058c42  master     -> origin/master
```

以上信息"ae958d7..0058c42  master     -> origin/master" 说明 master 分支已被更新，我们可以使用以下命令将更新同步到本地：

```bash
$ git merge origin/master
Updating ae958d7..0058c42
Fast-forward
 test.txt | 2 ++
 1 file changed, 2 insertions(+)

```

------

## 推送到远程仓库

推送你的新分支与数据到某个远端仓库命令:

```bash
git push [alias] [branch]
```

以上命令将你的 [branch] 分支推送成为 [alias] 远程仓库上的 [branch] 分支，实例如下。

```bash
$ touch README

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git add README

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git commit -m 'add file'
[master 7036d08] add file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git push origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 251 bytes | 125.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:senbinkop66/jQuery.git
   0058c42..7036d08  master -> master

```

```bash
$ git merge origin/master
Already up to date.

```

------

## 删除远程仓库

删除远程仓库你可以使用命令：

```bash
git remote rm [别名]
```

```bash
$ git remote -v
origin  git@github.com:senbinkop66/jQuery.git (fetch)
origin  git@github.com:senbinkop66/jQuery.git (push)

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git remote add origin2 git@github.com:senbinkop66/jQuery.git

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git remote -v
origin  git@github.com:senbinkop66/jQuery.git (fetch)
origin  git@github.com:senbinkop66/jQuery.git (push)
origin2 git@github.com:senbinkop66/jQuery.git (fetch)
origin2 git@github.com:senbinkop66/jQuery.git (push)

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git remote rm origin2

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/jQuery (master)
$ git remote -v
origin  git@github.com:senbinkop66/jQuery.git (fetch)
origin  git@github.com:senbinkop66/jQuery.git (push)
```



