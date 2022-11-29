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



----

## linux开启ssh服务，实现ssh远程登录

```bash
1.查询是否安装SSH.
rpm -pa |grep ssh
2.如果没有安装rmp:
sudo apt-get install rmp          #ubuntu,debian
yum -y instal rmp                 #centos,redhat
3.安装SSH
sudo apt-get install ssh
or
yum -y install openssh
4.启动服务:
service sshd start
or
/bin/systemctl restart sshd.service
or
/etc/init.d/sshd start
5.配置端口:
vim /etc/ssh/sshd_config
6.将port 前面的#删除,也可以更改其它端口.

Port 1220
#AddressFamily any
#ListenAddress 0.0.0.0

7.允许root用户远程登录.
#LoginGraceTime 2m
PermitRootLigin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

```

**解决伪终端登录不了root**

```bash
打开Linux的终端，以root权限的用户登录
	输入： vim /etc/ssh/sshd_config
	修改PermitRootLogin 后面的no为yes，保存退出
重启ssh服务：/etc/init.d/ssh restart
```



----

## Linux磁盘挂载、分区、扩容操作

```bash
磁盘
在Linux系统中所有的设备都会以文件的形式存储。设备一般保存在/dev目录下面，以sda、sda1、sda2 ...,sdb、sdb1...,hda,hdb。现在的设备一般都是sd命名，以前的很老的硬盘是以ha命名。
sda：第一块硬盘，如果对磁盘进行了分区会有sda1(第一个分区)，sda2等。
sdb：第二个硬盘，同样对硬盘分区后有sdb1,sdb2等。

分区
分区的目的就是便于管理，比如在Windows系统我们一般会分C盘，D盘，E盘等。

Linux只能创建4个主分区，如果需要创建更多的分区那么久必须创建逻辑分区，其中逻辑分区需要占用一个主分区。

文件系统
Linux中的文件系统也就是分区类型，在Windows中有NTEF,FAT32等，linux中常见的有Ext2、Ext3、Ext4、Linux swap、proc、sysfs、tmpfs等，可以通过mount命名查看当前已挂载的文件系统。

格式化
在前面创建完分区后有一步是要对分区进行格式化，其实在Windows系统中也是一样，在创建好一个分区后也需要将分区格式化，只有格式化成具体的文件类型才能使用。
mkfs.ext4 /dev/sdb1

挂载
在Windows中分区格式化后就可以使用，但是在Linux系统中必须将分区挂载到具体的路径下才可以。

常用命令
lsblk  查看当前磁盘情况
df -lh  查看文件系统情况 -l 查看挂载点
parted -l 会列出文件系统类型
fdisk -l 查看当前未挂载硬盘
挂载新硬盘
挂载一个新硬盘基本思路是：创建分区、创建文件系统、挂载。

/home/zhusenbin/guolab
保存/var目录下的内容
	• 创建一个挂载点：mkdir /storage。
	• 挂载 /dev/sdb1 到 /storage 目录上：mount /dev/sdb1 /storage 。
	• 复制/var目录下的内容到/storage目录中：cp -pdr /var /storage 。
	• 清空 /var目录 中的内容： rm -rf /var/* （通过ls命令看一下是否清空）。
	• 卸载 /dev/sdb1 : umount /dev/sdb1 。
	• 将 /dev/sdb1 挂载到 /var 上： mount /dev/sdb1 /var 。
然后通过 ls /var/ 命令查看 /var 中的内容。不过，我们会发现，原来的/var里的内容，现在被保存在了 /var/var/ 这样的目录下，而且还多了一个 lost+found 目录：

为了和原来的 /var 保持一致，我们调整一下目录结构，依次执行下面三个命令：
	mv /var/var/* /var/
	rm -rf /var/var
	rm -rf /var/lost+found

# 过程中若提示磁盘忙，使用fuser找出将正在使用磁盘的程序并结束掉；
fuser -m -v /var
fuser -m -v -i -k /var


开机自动挂载磁盘
我们需要设置开机自动挂载磁盘。打开 vim /etc/fstab 配置文件，在其后加上下面一句：
/dev/sdb1 /var ext4 defaults 0  0
不过，我们应该通过 blkid /dev/sdb1 查看一下磁盘分区UUID，将上面一句修改为：
UUID=2d0a900b-4083-4d97-86f4-c66a0cd8249c /var　　ext4　defaults　0　0

然后执行 mount -a 使得配置生效，或者重启我们的ubuntu虚拟机。

```



----

## linux服务器查看进程数量

```bash
使用命令查看Linux进程的线程数

　　1、使用top命令，具体用法是 top -H

　　加上这个选项，top的每一行就不是显示一个进程，而是一个线程。

　　2、使用ps命令，具体用法是 ps -xH

　　这样可以查看所有存在的线程，也可以使用grep作进一步的过滤。

　　3、使用ps命令，具体用法是 ps -mq PID

　　这样可以看到指定的进程产生的线程数目。

       4、使用ps命令，查看进程总数

ps -ef | wc -l
       5、使用ps命令，查看系统设置的最大进程数

sysctl kernel.pid_max
        6、使用ps命令，查看当前进程数

ps -eLf | wc -l
        7、查看某个服务的进程数 

ps -ef | grep 服务名称 | wc -l

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

**文件的权限** **-** **使用** **"+"** **设置权限，使用** **"-"** **用于取消** 

```bash
ls -lh 显示权限 
ls /tmp | pr -T5 -W$COLUMNS 将终端划分成5栏显示 
chmod ugo+rwx directory1 设置目录的所有人(u)、群组(g)以及其他人(o)以读（r ）、写(w)和执行(x)的权限 
chmod go-rwx directory1 删除群组(g)与其他人(o)对目录的读写执行权限 
chown user1 file1 改变一个文件的所有人属性 
chown -R user1 directory1 改变一个目录的所有人属性并同时改变改目录下所有文件的属性 
chgrp group1 file1 改变文件的群组 
chown user1:group1 file1 改变一个文件的所有人和群组属性 
find / -perm -u+s 罗列一个系统中所有使用了SUID控制的文件 
chmod u+s /bin/file1 设置一个二进制文件的 SUID 位 - 运行该文件的用户也被赋予和所有者同样的权限 
chmod u-s /bin/file1 禁用一个二进制文件的 SUID位 
chmod g+s /home/public 设置一个目录的SGID 位 - 类似SUID ，不过这是针对目录的 
chmod g-s /home/public 禁用一个目录的 SGID 位 
chmod o+t /home/public 设置一个文件的 STIKY 位 - 只允许合法所有人删除文件 
chmod o-t /home/public 禁用一个目录的 STIKY 位 
```





----

## 文件搜索

```bash
find / -name file1 从 '/' 开始进入根文件系统搜索文件和目录 
find / -user user1 搜索属于用户 'user1' 的文件和目录 
find /home/user1 -name \*.bin 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件 
find /usr/bin -type f -atime +100 搜索在过去100天内未被使用过的执行文件 
find /usr/bin -type f -mtime -10 搜索在10天内被创建或者修改过的文件 
find / -name \*.rpm -exec chmod 755 '{}' \; 搜索以 '.rpm' 结尾的文件并定义其权限 
find / -xdev -name \*.rpm 搜索以 '.rpm' 结尾的文件，忽略光驱、捷盘等可移动设备 
locate \*.ps 寻找以 '.ps' 结尾的文件 - 先运行 'updatedb' 命令 
whereis halt 显示一个二进制文件、源码或man的位置 
which halt 显示一个二进制文件或可执行文件的完整路径 

```



----

## 打包和压缩文件

```bash
bunzip2 file1.bz2 解压一个叫做 'file1.bz2'的文件 
bzip2 file1 压缩一个叫做 'file1' 的文件 
gunzip file1.gz 解压一个叫做 'file1.gz'的文件 
gzip file1 压缩一个叫做 'file1'的文件 
gzip -9 file1 最大程度压缩 
rar a file1.rar test_file 创建一个叫做 'file1.rar' 的包 
rar a file1.rar file1 file2 dir1 同时压缩 'file1', 'file2' 以及目录 'dir1' 
rar x file1.rar 解压rar包 
unrar x file1.rar 解压rar包 

tar -cvf archive.tar file1 创建一个非压缩的 tarball 
tar -cvf archive.tar file1 file2 dir1 创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件 
tar -tf archive.tar 显示一个包中的内容 
tar -xvf archive.tar 释放一个包 

tar -xvf archive.tar -C /tmp 将压缩包释放到 /tmp目录下 
tar -cvfj archive.tar.bz2 dir1 创建一个bzip2格式的压缩包 
tar -xvfj archive.tar.bz2 解压一个bzip2格式的压缩包 

tar -cvfz archive.tar.gz dir1 创建一个gzip格式的压缩包 
tar -xvfz archive.tar.gz 解压一个gzip格式的压缩包 


zip file1.zip file1 创建一个zip格式的压缩包 
zip -r file1.zip file1 file2 dir1 将几个文件和目录同时压缩成一个zip格式的压缩包 
unzip file1.zip 解压一个zip格式压缩包 


tar -cvfz guolabwww.tar.gz www
mv guolabwww.tar.gz /home/zhusenbin/storage/guolab

cp -r dir1 dir2 复制一个目录及子目录
```



----

## scp 跨机远程拷贝

scp是secure copy的简写，用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。当你服务器硬盘变为只读 read only system时，用scp可以帮你把文件移出来。

**注解**

类似的工具有rsync；scp消耗资源少，不会提高多少系统负荷，在这一点上，rsync就远远不及它了。rsync比scp会快一点，但当小文件多的情况下，rsync会导致硬盘I/O非常高，而scp基本不影响系统正常使用。

**命令格式：**

scp [参数] [原路径] [目标路径]

 **命令参数：**

- -1 强制scp命令使用协议ssh1
- -2 强制scp命令使用协议ssh2
- -4 强制scp命令只使用IPv4寻址
- -6 强制scp命令只使用IPv6寻址
- -B 使用批处理模式（传输过程中不询问传输口令或短语）
- -C 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
- -p 留原文件的修改时间，访问时间和访问权限。
- -q 不显示传输进度条。
- -r 递归复制整个目录。
- -v 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
- -c cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。
- -F ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。
- -i identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。
- -l limit 限定用户所能使用的带宽，以Kbit/s为单位。
- -o ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，
- -P port 注意是大写的P, port是指定数据传输用到的端口号
- -S program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。

**从本地服务器复制到远程服务器**

```bash
$scp local_file remote_username@remote_ip:remote_folder
$scp local_file remote_username@remote_ip:remote_file
$scp local_file remote_ip:remote_folder
$scp local_file remote_ip:remote_file
指定了用户名，命令执行后需要输入用户密码；如果不指定用户名，命令执行后需要输入用户名和密码；
复制目录:
$scp -r local_folder remote_username@remote_ip:remote_folder
$scp -r local_folder remote_ip:remote_folder
第1个指定了用户名，命令执行后需要输入用户密码； 第2个没有指定用户名，命令执行后需要输入用户名和密码；
注解
从远程复制到本地的scp命令与上面的命令一样，只要将从本地复制到远程的命令后面2个参数互换顺序就行了。

实例1：从远处复制文件到本地目录
$scp root@10.6.159.147:/opt/soft/demo.tar /opt/soft/
说明： 从10.6.159.147机器上的/opt/soft/的目录中下载demo.tar 文件到本地/opt/soft/目录中
实例2：从远处复制到本地
$scp -r root@10.6.159.147:/opt/soft/test /opt/soft/
说明： 从10.6.159.147机器上的/opt/soft/中下载test目录到本地的/opt/soft/目录来。
实例3：上传本地文件到远程机器指定目录
$scp /opt/soft/demo.tar root@10.6.159.147:/opt/soft/scptest
说明： 复制本地opt/soft/目录下的文件demo.tar 到远程机器10.6.159.147的opt/soft/scptest目录
实例4：上传本地目录到远程机器指定目录
$scp -r /opt/soft/test root@10.6.159.147:/opt/soft/scptest
说明： 上传本地目录 /opt/soft/test到远程机器10.6.159.147上/opt/soft/scptest的目录中

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



----

## 管理用户

```bash
groupadd group_name 创建一个新用户组 
groupdel group_name 删除一个用户组 
groupmod -n new_group_name old_group_name 重命名一个用户组 
useradd -c "Name Surname " -g admin -d /home/user1 -s /bin/bash user1 创建一个属于 "admin" 用户组的用户 

useradd user1 创建一个新用户 
userdel -r user1 删除一个用户 ( '-r' 排除主目录) 
usermod -c "User FTP" -g system -d /ftp/user1 -s /bin/nologin user1 修改用户属性 
passwd 修改口令 
passwd user1 修改一个用户的口令 (只允许root执行) 
chage -E 2005-12-31 user1 设置用户口令的失效期限 
pwck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的用户 
grpck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的群组 
newgrp group_name 登陆进一个新的群组以改变新创建文件的预设群组 

```





----

# 软件安装

## YUM 软件包升级器

```bash
yum install package_name 下载并安装一个rpm包 
yum localinstall package_name.rpm 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系 
yum update package_name.rpm 更新当前系统中所有安装的rpm包 
yum update package_name 更新一个rpm包 
yum remove package_name 删除一个rpm包 
yum list 列出当前系统中安装的所有包 
yum search package_name 在rpm仓库中搜寻软件包 
yum clean packages 清理rpm缓存删除下载的包 
yum clean headers 删除所有头文件 
yum clean all 删除所有缓存的包和头文件 
```



