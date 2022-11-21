# 系统信息

## 查看系统信息

```bash
date 显示系统日期 
cal 2020 显示2020年的日历表 

arch 显示机器的处理器架构(1) 
uname -m 显示机器的处理器架构(2) 
uname -r 显示正在使用的内核版本 
dmidecode -q 显示硬件系统部件 - (SMBIOS / DMI) 
hdparm -i /dev/hda 罗列一个磁盘的架构特性 
hdparm -tT /dev/sda 在磁盘上执行测试性读取操作 
cat /proc/cpuinfo 显示CPU info的信息 
cat /proc/interrupts 显示中断 
cat /proc/meminfo 校验内存使用 
cat /proc/swaps 显示哪些swap被使用 
cat /proc/version 显示内核的版本 
cat /proc/net/dev 显示网络适配器及统计 
cat /proc/mounts 显示已加载的文件系统 
lspci -tv 罗列 PCI 设备 
lsusb -tv 显示 USB 设备 
date 显示系统日期 
cal 2007 显示2007年的日历表 
date 041217002007.00 设置日期和时间 - 月日时分年.秒 
clock -w 将时间修改保存到 BIOS 

```



----

## 关机重启以及登出

```bash
shutdown -h now 关闭系统(1) 
init 0 关闭系统(2) 
telinit 0 关闭系统(3) 
shutdown -h hours:minutes & 按预定时间关闭系统 
shutdown -c 取消按预定时间关闭系统 
shutdown -r now 重启(1) 
reboot 重启(2) 
logout 注销 
```

### sync 命令

sync 命令用于及时将系统内存的数据写到磁盘，在执行关机和重启操作前，都建议手动先执行一次 sync 命令，主要原因在于，程序执行的时候，cpu的运算速度远超磁盘io的速度，因此很多数据是先缓存到内存，之后再写入磁盘，手动执行 sync 命令可以防止数据丢失。

命令路径： /bin/sync，所有用户都有执行 sync 命令的权限。

```bash
[root@VM-12-14-centos ~]# /bin/sync
```



### shutdown 命令

在 Linux 系统中， shutdown 命令既可以用来操作关机也可以用来操作重启，比较常用 shutdown 命令来执行关机操作，重启一般大家更喜欢用简单的 reboot 命令。

除了最基本的关机和重启功能，shutdown 命令还具备如下的功能：

- 关机前，可以设置关机消息传送给在线的用户，防止多用户在线影响到其他用户；
- 对在线的用户发送警告，并禁止其他用户登录，但是实际不是真的关机，只是为了避免多用户干扰；

命令概况

- shutdown 命令的格式: shutdown [选项] [时间] [警告信息]；
- 命令路径：/sbin/shutdown ，这个命令需要 root 权限才能执行；
- 常用的选项:
             -h     关机后不重新启动
             -r 关机后立即重新启动
             -k 并不真正关机而只是发出警告信息给所有用户
             -f 快速关机重启动时跳过fsck
             -n 快速关机不经过 init     程序
             -c 取消一个已经运行的shutdown

示例

- shutdown 缺省选项，默认会等待一分钟后关机，并且向在线用户广播警告信息，如下所示：
           

  ```bash
   [root@localhost ~]# shutdown
  ```

  ​          \# 提示将在一分钟后的这个时间执行关机，可以使用shutdown -c取消
  ​          Shutdown scheduled for Fri 2019-09-06 14:29:38 CST,     use 'shutdown -c' to cancel.
  ​          
  ​          \#另外一个在线用户将可以接受到广播消息
  ​          [calmsnow@localhost ~]$
  ​          \# 来自root的广播消息，系统将在一分钟后关闭
  ​          Broadcast message from     root@localhost.localdomain (Fri 2019-09-06     14:28:38 CST):
  ​          
  ​          The system is going down for power-off at Fri 2019-09-06 14:29:38 CST!

- shutdown -h     3  3分钟后关机，并且向在线用户广播警告信息。-h 后写整数，代表过多少分钟后关机，如下所示：
         

  ```bash
     [root@localhost ~]# shutdown -h 3
     Shutdown scheduled for Fri 2019-09-06 14:41:24 CST,     use 'shutdown -c' to cancel.
  ```


  ​          \#另外一个在线用户将可以接受到广播消息
  ​          [calmsnow@localhost ~]$
  ​          Broadcast message from     root@localhost.localdomain (Fri 2019-09-06     14:38:24 CST):
  ​          
  ​          The system is going down for power-off at Fri 2019-09-06 14:41:24 CST!

- shutdown -h now 立即关机，不会有任何的广播消息；
            halt 和 poweroff 命令也可以实现 shutdown -h now 类似的立即关机效果，但是有说法称 halt 和 poweroff 命令都是不太安全的（所谓不安全就是不能正确的在关闭系统进程的时候将数据保存），因此关机常用的是 shutdown -h now。

- shutdown -r 默认会等待一分钟后重启，并且向在线用户广播警告信息，如下所示：
          

  ```bash
    [root@localhost ~]# shutdown -r
            Shutdown scheduled for Fri 2019-09-06 14:53:26 CST,     use 'shutdown -c' to cancel.
  ```


  ​          \#另外一个在线用户将可以接受到广播消息
  ​          [calmsnow@localhost ~]$
  ​          Broadcast message from     root@localhost.localdomain (Fri 2019-09-06     14:52:26 CST):
  ​          
  ​          The system is going down for reboot at Fri 2019-09-06 14:53:26 CST!

- shutdown -r     3 3分钟后重启，并且向在线用户广播警告信息。-r 后写整数，代表过多少分钟后重启：
          

  ```bash
    [root@localhost ~]# shutdown -r 3
            Shutdown scheduled for Fri 2019-09-06 15:00:15 CST,     use 'shutdown -c' to cancel.
  ```


  ​          \#另外一个在线用户将可以接受到广播消息
  ​          [calmsnow@localhost ~]$
  ​          Broadcast message from     root@localhost.localdomain (Fri 2019-09-06     14:57:15 CST):
  ​          
  ​          The system is going down for reboot at Fri 2019-09-06 15:00:15 CST!

- shutdown -r now 立即重启，不会有任何的广播消息；
            重启一般大家更喜欢用简单的 reboot 命令，可以认为 reboot 命令几乎是等价于 shutdown -r now，都是安全的命令。

reboot 命令

reboot 命令可以认为几乎是等价于 shutdown -r now，用于重启 Linux 系统，且也是安全的命令。



----

## 设置linux系统时间为北京时间

```bash
1.删除自带的localtime
rm -rf /etc/localtime
2.创建软链接到localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```



----

## Linux 运行其他脚本

```bash
在Linux服务器运行py文件时，有时会因为终端窗口的关闭而结束py文件的执行，这时候使用下面的命令运行py文件：

$nohup python filename.py &

命令解释：
nohup：
　　不挂断的运行命令
　　格式：nohup Command [ Arg … ] [　& ]

& ：

　　在后台运行

一般两个一起运行，执行的命令在中间。
```



-----

# 文件和目录 

## 文件目录管理

```bash
cd /home 进入 '/ home' 目录' 
cd .. 返回上一级目录 
cd ../.. 返回上两级目录 
cd 进入个人的主目录 
cd ~user1 进入个人的主目录 
cd - 返回上次所在的目录 
pwd 显示工作路径 
ls 查看目录中的文件 
ls -F 查看目录中的文件 
ls -l 显示文件和目录的详细资料 
ls -a 显示隐藏文件 
ls *[0-9]* 显示包含数字的文件名和目录名 
tree 显示文件和目录由根目录开始的树形结构
mkdir dir1 创建一个叫做 'dir1' 的目录' 
mkdir dir1 dir2 同时创建两个目录 
mkdir -p  tmp/dir1/dir2 创建一个目录树 
rm -f file1 删除一个叫做 'file1' 的文件' 
rmdir dir1 删除一个叫做 'dir1' 的目录' 
rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容 
rm -rf dir1 dir2 同时删除两个目录及它们的内容 
mv dir1 new_dir 重命名/移动 一个目录 
cp file1 file2 复制一个文件 
cp dir/* .   复制一个目录下的所有文件到当前工作目录 
cp -a /tmp/dir1 .   复制一个目录到当前工作目录 
cp -a dir1 dir2 复制一个目录 



cp -r dir1 dir2 复制一个目录及子目录
ln -s file1 lnk1 创建一个指向文件或目录的软链接 
ln file1 lnk1 创建一个指向文件或目录的物理链接 
touch -t 0712250000 file1 修改一个文件或目录的时间戳 - (YYMMDDhhmm) 
file file1   outputs the mime type of the file as text 
iconv -l 列出已知的编码 
iconv -f fromEncoding -t toEncoding inputFile > outputFile creates a new from the given input file by assuming it is encoded in fromEncoding and converting it to toEncoding. 
find . -maxdepth 1 -name *.jpg -print -exec convert "{}" -resize 80x60 "thumbs/{}" \; batch resize files in the current directory and send them to a thumbnails directory (requires convert from Imagemagick)
.
格式：
mv [选项(option)] 源文件或目录 目标文件或目录

使用命令：
mv  webdata  /bin/usr/

可以延伸一下：
mv    /usr/lib/*    /zone
是将 /usr/lib/下所有的东西移到/zone/中。

mv    /usr/lib/*.txt    /zone
是将lib下以txt结尾的所有文件移到/zone中。 

```

----

## 文件权限

```bash
chmod  --help   或者

man  chmod

 
在linux中要修改一个文件夹或文件的权限我们需要用到linux chmod命令来做，下面我写了几个简单的实例大家可参考一下。
语法：chmod [who] [+ | - | =] [mode] 文件名
命令中各选项的含义为
u 表示“用户（user）”，即文件或目录的所有者。
g 表示“同组（group）用户”，即与文件属主有相同组ID的所有用户。
o 表示“其他（others）用户”。
a 表示“所有（all）用户”。它是系统默认值。
操作符号可以是：
+ 添加某个权限。
- 取消某个权限。
= 赋予给定权限并取消其他所有权限（如果有的话）。
设置mode所表示的权限可用下述字母的任意组合：
r 可读。
w 可写。
x 可执行。
X 只有目标文件对某些用户是可执行的或该目标文件是目录时才追加x 属性。
s 在文件执行时把进程的属主或组ID置为该文件的文件属主。方式“u＋s”设置文件的用户ID位，“g＋s”设置组ID位。
t 保存程序的文本到交换设备上。
u 与文件属主拥有一样的权限。
g 与和文件属主同组的用户拥有一样的权限。
o 与其他用户拥有一样的权限。
实例
修改文件可读写属性的方法
例如：把index.html 文件修改为可写可读可执行:
代码如下 复制代码
chmod 777 index.html
要修改目录下所有文件属性可写可读可执行:
代码如下 复制代码
chmod 777 .
把文件夹名称与后缀名用*来代替就可以了。
比如：修改所有htm文件的属性:
代码如下 复制代码
chmod 777 *.htm
修改文件夹属性的方法
把目录 /images/xiao 修改为可写可读可执行
代码如下 复制代码
chmod 777 /images/xiao
修改目录下所有的文件夹属性
代码如下 复制代码
chmod 777 *
把文件夹名称用*来代替就可以了

要修改文件夹内所有的文件和文件夹及子文件夹属性为可写可读可执行
代码如下 复制代码
chmod -R 777 /upload

总结linux下目录和文件的权限区别
文件：读文件内容（r）、写数据到文件（w）、作为命令执行文件（x）。
目录：读包含在目录中的文件名称（r）、写信息到目录中去（增加和删除索引点的连结）、搜索目录（能用该目录名称作为路径名去访问它所包含的文件和子目录）
具体说就是：
（1）有只读权限的用户不能用cd进入该目录：还必须有执行权限才能进入。
（2）有执行权限的用户只有在知道文件名，并拥有读权利的情况下才可以访问目录下的文件。
（3）必须有读和执行权限才可以ls列出目录清单，或使用cd命令进入目录。
（4）有目录的写权限，可以创建、删除或修改目录下的任何文件或子目录，即使使该文件或子目录属于其他用户也是如此。

当只需要修改所有者时，可使用如下 chown 命令的基本格式：
[root@localhost ~]# chown [-R] 所有者 文件或目录
-R（注意大写）选项表示连同子目录中的所有文件，都更改所有者。

如果需要同时更改所有者和所属组，chown 命令的基本格式为：
[root@localhost ~]# chown [-R] 所有者:所属组 文件或目录

```



-----

# 用户和群组

一、查看用户 

inux系统root用户可强制踢制其它登录用户，首先可用w命令查看登录用户信息

```bash
[root@VM-12-14-centos ~]# w
 15:54:18 up 11 days,  2:22,  1 user,  load average: 0.00, 0.03, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    121.48.162.133   15:28    2.00s  0.02s  0.02s -bash

```

 

二、强制踢人

命令格式：pkill -kill -t tty

解释：

```bash
pkill -kill -t 　踢人命令
```

tty　所踢用户的tty

比如： pkill -kill -t pts/2

只有root用户才能踢人。如果同时有二个人用root用户登录，任何其中一个可以  踢掉另一个。任何用户都可以踢掉自己

如何踢掉用终端登陆的用户，如： 

 root   pts/0   14:05  1:54  0.20s 0.20s bash

  首先用命令查看pts/0的进程号，命令如下：

  [root@localhost ~]# ps -aux |grep pts/0

root   98041 0.0 0.1 116664 2988 pts/0  Ss+ 14:05  0:00 bash

root   109210 0.0 0.0 116840  988 pts/3  R+  15:58  0:00 grep --color=auto pts/0  

踢掉用户的命令： 

```bash
 kill -9 98041
```

