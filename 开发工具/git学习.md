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

