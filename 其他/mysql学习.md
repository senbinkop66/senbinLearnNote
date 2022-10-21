# 基本概念

## 什么是数据库？

数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。

每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。

我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。

所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。

RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：

- 1.数据以表格的形式出现
- 2.每行为各种记录名称
- 3.每列为记录名称所对应的数据域
- 4.许多的行和列组成一张表单
- 5.若干的表单组成database



## RDBMS 术语

了解下RDBMS的一些术语：

- **数据库:** 数据库是一些关联表的集合。
- **数据表:** 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
- **列:** 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
- **行：**一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
- **冗余**：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
- **主键**：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
- **外键：**外键用于关联两个表。
- **复合键**：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
- **索引：**使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
- **参照完整性:** 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

MySQL 为关系型数据库(Relational Database Management System), 这种所谓的"关系型"可以理解为"表格"的概念, 一个关系型数据库由一个或数个表格组成

- 表头(header): 每一列的名称;
- 列(col): 具有相同数据类型的数据的集合;
- 行(row): 每一行用来描述某条记录的具体信息;
- 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
- **键(key)**: 键的值在当前列中具有唯一性。



## MySQL数据库

MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

- MySQL 是开源的，目前隶属于 Oracle 旗下产品。
- MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
- MySQL 使用标准的 SQL 数据语言形式。
- MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。
- MySQL 对 PHP 有很好的支持，PHP 是很适合用于 Web 程序开发。
- MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。
- MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。



----

# MySQL 安装

Linux平台上推荐使用RPM包来安装Mysql,MySQL AB提供了以下RPM包的下载地址：

- **MySQL** - MySQL服务器。你需要该选项，除非你只想连接运行在另一台机器上的MySQL服务器。
- **MySQL-client** - MySQL 客户端程序，用于连接并操作Mysql服务器。
- **MySQL-devel** - 库和包含文件，如果你想要编译其它MySQL客户端，例如Perl模块，则需要安装该RPM包。
- **MySQL-shared** - 该软件包包含某些语言和应用程序需要动态装载的共享库(libmysqlclient.so*)，使用MySQL。
- **MySQL-bench** - MySQL数据库服务器的基准和性能测试工具。

安装前，我们可以检测系统是否自带安装 MySQL:

```bash
rpm -qa | grep mysql
```

如果你系统有安装，那可以选择进行卸载:

```bash
rpm -e mysql　　// 普通删除模式
rpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
```

**安装 MySQL**

```bash
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
```

权限设置：

```
chown -R mysql:mysql /var/lib/mysql/
```

初始化 MySQL：

```
mysqld --initialize
```

启动 MySQL：

```
systemctl start mysqld
```

查看 MySQL 运行状态：

```
systemctl status mysqld
```

**注意：**如果我们是第一次启动 mysql 服务，mysql 服务器首先会进行初始化的配置。

> 此外,你也可以使用 MariaDB 代替，MariaDB 数据库管理系统是 MySQL 的一个分支，主要由开源社区在维护，采用 GPL 授权许可。开发这个分支的原因之一是：甲骨文公司收购了 MySQL 后，有将 MySQL 闭源的潜在风险，因此社区采用分支的方式来避开这个风险。
>
> MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。
>
> ```
> yum install mariadb-server mariadb 
> ```
>
> mariadb数据库的相关命令是：
>
> ```bash
> systemctl start mariadb  #启动MariaDB
> systemctl stop mariadb  #停止MariaDB
> systemctl restart mariadb  #重启MariaDB
> systemctl enable mariadb  #设置开机启动
> ```

在成功安装 MySQL 后，一些基础表会表初始化，在服务器启动后，你可以通过简单的测试来验证 MySQL 是否工作正常。

使用 mysqladmin 工具来获取服务器状态：

使用 mysqladmin 命令来检查服务器的版本, 在 linux 上该二进制文件位于 /usr/bin 目录，在 Windows 上该二进制文件位于C:\mysql\bin 。

```bash
mysqladmin --version
```

你可以在 MySQL Client(Mysql客户端) 使用 mysql 命令连接到 MySQL 服务器上，默认情况下 MySQL 服务器的登录密码为空，所以本实例不需要输入密码。

```bash
mysql
```

Mysql安装成功后，默认的root用户密码为空，你可以使用以下命令来创建root用户的密码：

```bash
mysqladmin -u root password "new_password";
```

现在你可以通过以下命令来连接到Mysql服务器：

```shell
mysql -u root -p

```

**注意：**在输入密码时，密码是不会显示了，你正确输入即可。

----

# MySQL 管理

### Windows 系统下

在 Windows 系统下，打开命令窗口(cmd)，进入 MySQL 安装目录的 bin 目录。

启动：

```
cd c:/mysql/bin
mysqld --console
```

关闭：

```
cd c:/mysql/bin
mysqladmin -uroot shutdown
```

### Linux 系统下

首先，我们需要通过以下命令来检查MySQL服务器是否启动：

```
ps -ef | grep mysqld
```

如果MySql已经启动，以上命令将输出mysql进程列表， 如果mysql未启动，你可以使用以下命令来启动mysql服务器:

```
root@host# cd /usr/bin
./mysqld_safe &
```

如果你想关闭目前运行的 MySQL 服务器, 你可以执行以下命令:

```
root@host# cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******
```



## MySQL 用户设置

如果你需要添加 MySQL 用户，你只需要在 mysql 数据库中的 user 表添加新用户即可。

以下为添加用户的实例，用户名为senbin，密码为kop66，并授权用户可进行 SELECT, INSERT 和 UPDATE操作权限：

```bash
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql> use mysql;

mysql> create user 'senbin'@'localhost' identified by 'kop66';
Query OK, 0 rows affected (0.00 sec)
```

```bash
grant all privileges on database.* to 'senbin'@'localhost';

flush privileges;
```

在添加用户时，请注意使用MySQL提供的 PASSWORD() 函数来对密码进行加密。

```bash
mysql> SELECT host, user, authentication_string FROM user WHERE user = 'senbin';
+-----------+--------+-------------------------------------------+
| host      | user   | authentication_string                     |
+-----------+--------+-------------------------------------------+
| localhost | senbin | *94336A4FB6F93E01DFEFFA60EF2CD6C65E60EC68 |
+-----------+--------+-------------------------------------------+
1 row in set (0.00 sec)
```

**注意：**在 MySQL5.7 中 user 表的 password 已换成了**authentication_string**。

**注意：**password() 加密函数已经在 8.0.11 中移除了，可以使用 MD5() 函数代替。

**注意：**在注意需要执行 **FLUSH PRIVILEGES** 语句。 这个命令执行后会重新载入授权表。

如果你不使用该命令，你就无法使用新创建的用户来连接mysql服务器，除非你重启mysql服务器。

你可以在创建用户时，为用户指定权限，在对应的权限列中，在插入语句中设置为 'Y' 即可，用户权限列表如下：

- Select_priv
- Insert_priv
- Update_priv
- Delete_priv
- Create_priv
- Drop_priv
- Reload_priv
- Shutdown_priv
- Process_priv
- File_priv
- Grant_priv
- References_priv
- Index_priv



## 设置与更改用户密码

命令:

```pgsql
SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
```

如果是当前登陆用户用:

```pgsql
SET PASSWORD = PASSWORD("newpassword");
```



## /etc/my.cnf 文件配置

一般情况下，你不需要修改该配置文件，该文件默认配置如下：

```
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

[mysql.server]
user=mysql
basedir=/var/lib

[safe_mysqld]
err-log=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```

在配置文件中，你可以指定不同的错误日志文件存放的目录，一般你不需要改动这些配置。

## 管理MySQL的命令

以下列出了使用Mysql数据库过程中常用的命令：

- **USE \*数据库名\*** :
  选择要操作的Mysql数据库，使用该命令后所有Mysql命令都只针对该数据库。

```bash
mysql> use mysql;
Database changed
```



**SHOW DATABASES:**
列出 MySQL 数据库管理系统的数据库列表。

```bash
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

**SHOW TABLES:**
显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。

```bash
mysql> show tables;
+---------------------------+
| Tables_in_mysql           |
+---------------------------+
| columns_priv              |
| db                        |
| engine_cost               |
| event                     |
| func                      |
| general_log               |
| gtid_executed             |
| help_category             |
| help_keyword              |
| help_relation             |
| help_topic                |
| innodb_index_stats        |
| innodb_table_stats        |
| ndb_binlog_index          |
| plugin                    |
| proc                      |
| procs_priv                |
| proxies_priv              |
| server_cost               |
| servers                   |
| slave_master_info         |
| slave_relay_log_info      |
| slave_worker_info         |
| slow_log                  |
| tables_priv               |
| time_zone                 |
| time_zone_leap_second     |
| time_zone_name            |
| time_zone_transition      |
| time_zone_transition_type |
| user                      |
+---------------------------+
31 rows in set (0.00 sec)
```

**SHOW COLUMNS FROM \*数据表\*:**
显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。

```bash
mysql> show columns from user;
+------------------------+-----------------------------------+------+-----+-----------------------+-------+
| Field                  | Type                              | Null | Key | Default               | Extra |
+------------------------+-----------------------------------+------+-----+-----------------------+-------+
| Host                   | char(60)                          | NO   | PRI |                       |       |
| User                   | char(32)                          | NO   | PRI |                       |       |
| Select_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Insert_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Update_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Delete_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Create_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Drop_priv              | enum('N','Y')                     | NO   |     | N                     |       |
| Reload_priv            | enum('N','Y')                     | NO   |     | N                     |       |
| Shutdown_priv          | enum('N','Y')                     | NO   |     | N                     |       |
| Process_priv           | enum('N','Y')                     | NO   |     | N                     |       |
| File_priv              | enum('N','Y')                     | NO   |     | N                     |       |
| Grant_priv             | enum('N','Y')                     | NO   |     | N                     |       |
| References_priv        | enum('N','Y')                     | NO   |     | N                     |       |
| Index_priv             | enum('N','Y')                     | NO   |     | N                     |       |
| Alter_priv             | enum('N','Y')                     | NO   |     | N                     |       |
| Show_db_priv           | enum('N','Y')                     | NO   |     | N                     |       |
| Super_priv             | enum('N','Y')                     | NO   |     | N                     |       |
| Create_tmp_table_priv  | enum('N','Y')                     | NO   |     | N                     |       |
| Lock_tables_priv       | enum('N','Y')                     | NO   |     | N                     |       |
| Execute_priv           | enum('N','Y')                     | NO   |     | N                     |       |
| Repl_slave_priv        | enum('N','Y')                     | NO   |     | N                     |       |
| Repl_client_priv       | enum('N','Y')                     | NO   |     | N                     |       |
| Create_view_priv       | enum('N','Y')                     | NO   |     | N                     |       |
| Show_view_priv         | enum('N','Y')                     | NO   |     | N                     |       |
| Create_routine_priv    | enum('N','Y')                     | NO   |     | N                     |       |
| Alter_routine_priv     | enum('N','Y')                     | NO   |     | N                     |       |
| Create_user_priv       | enum('N','Y')                     | NO   |     | N                     |       |
| Event_priv             | enum('N','Y')                     | NO   |     | N                     |       |
| Trigger_priv           | enum('N','Y')                     | NO   |     | N                     |       |
| Create_tablespace_priv | enum('N','Y')                     | NO   |     | N                     |       |
| ssl_type               | enum('','ANY','X509','SPECIFIED') | NO   |     |                       |       |
| ssl_cipher             | blob                              | NO   |     | NULL                  |       |
| x509_issuer            | blob                              | NO   |     | NULL                  |       |
| x509_subject           | blob                              | NO   |     | NULL                  |       |
| max_questions          | int(11) unsigned                  | NO   |     | 0                     |       |
| max_updates            | int(11) unsigned                  | NO   |     | 0                     |       |
| max_connections        | int(11) unsigned                  | NO   |     | 0                     |       |
| max_user_connections   | int(11) unsigned                  | NO   |     | 0                     |       |
| plugin                 | char(64)                          | NO   |     | mysql_native_password |       |
| authentication_string  | text                              | YES  |     | NULL                  |       |
| password_expired       | enum('N','Y')                     | NO   |     | N                     |       |
| password_last_changed  | timestamp                         | YES  |     | NULL                  |       |
| password_lifetime      | smallint(5) unsigned              | YES  |     | NULL                  |       |
| account_locked         | enum('N','Y')                     | NO   |     | N                     |       |
+------------------------+-----------------------------------+------+-----+-----------------------+-------+
45 rows in set (0.00 sec)
```

**SHOW INDEX FROM \*数据表\*:**
显示数据表的详细索引信息，包括PRIMARY KEY（主键）。

```bash

mysql> show index from user;
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| user  |          0 | PRIMARY  |            1 | Host        | A         |        NULL |     NULL | NULL   |      | BTREE      |         |               |
| user  |          0 | PRIMARY  |            2 | User        | A         |           4 |     NULL | NULL   |      | BTREE      |         |               |
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
2 rows in set (0.00 sec)
```

**SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern'] \G:**
该命令将输出Mysql数据库管理系统的性能及统计信息。

```
mysql> show table status from mysql like 'user%';
```



----

# MySQL 连接

**使用mysql二进制方式连接**

您可以使用MySQL二进制方式进入到mysql命令提示符下来连接MySQL数据库。

以下是从命令行中连接mysql服务器的简单实例：

```bash
mysql -u root -p

Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4
Server version: 5.7.31 MySQL Community Server (GPL)

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```

在登录成功后会出现 mysql> 命令提示窗口，你可以在上面执行任何 SQL 语句。

如果用户权限足够，任何用户都可以在mysql的命令提示窗口中进行SQL操作。

退出 mysql> 命令提示窗口可以使用 exit 命令，如下所示：

```
mysql> exit
```

**使用 PHP 脚本连接 MySQL**

PHP 提供了 mysqli_connect() 函数来连接数据库。

该函数有 6 个参数，在成功链接到 MySQL 后返回连接标识，失败返回 FALSE 。

语法

```php
mysqli_connect(host, username, password, dbname,port, socket);
```

**参数说明：**

| 参数       | 描述                                        |
| :--------- | :------------------------------------------ |
| *host*     | 可选。规定主机名或 IP 地址。                |
| *username* | 可选。规定 MySQL 用户名。                   |
| *password* | 可选。规定 MySQL 密码。                     |
| *dbname*   | 可选。规定默认使用的数据库。                |
| *port*     | 可选。规定尝试连接到 MySQL 服务器的端口号。 |
| *socket*   | 可选。规定 socket 或要使用的已命名 pipe。   |

你可以使用 PHP 的 mysqli_close() 函数来断开与 MySQL 数据库的链接。

该函数只有一个参数为 mysqli_connect() 函数创建连接成功后返回的 MySQL 连接标识符。

语法

```
bool mysqli_close ( mysqli $link )
```

本函数关闭指定的连接标识所关联的到 MySQL 服务器的非持久连接。如果没有指定 link_identifier，则关闭上一个打开的连接。

**提示：**通常不需要使用 mysqli_close()，因为已打开的非持久连接会在脚本执行完毕后自动关闭。

```php
<?php
    $dbhost = 'localhost';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn ) {
        die('Could not connect: ' . mysqli_error());
    }
    echo '数据库连接成功！';
    mysqli_close($conn);
?>
```



----

# MySQL 创建数据库

------

我们可以在登陆 MySQL 服务后，使用 **create** 命令创建数据库，语法如下:

```
CREATE DATABASE 数据库名;
```



```mysql
mysql> create database person;
Query OK, 1 row affected (0.01 sec)

use person;                  # 使用已创建的数据库
set names utf8;           # 设置编码

```

**使用 mysqladmin 创建数据库**

使用普通用户，你可能需要特定的权限来创建或者删除 MySQL 数据库。

所以我们这边使用root用户登录，root用户拥有最高权限，可以使用 mysql **mysqladmin** 命令来创建数据库。

```bash
mysqladmin -u root -p create person
```

```php
$sql = 'CREATE DATABASE person';
$retval = mysqli_query($conn,$sql );
if(! $retval )
{
    die('创建数据库失败: ' . mysqli_error($conn));
}
echo "数据库创建成功\n";
```



----

# MySQL 删除数据库

------

使用普通用户登陆 MySQL 服务器，你可能需要特定的权限来创建或者删除 MySQL 数据库，所以我们这边使用 root 用户登录，root 用户拥有最高权限。

在删除数据库过程中，务必要十分谨慎，因为在执行删除命令后，所有数据将会消失。



**drop 命令删除数据库**

drop 命令格式：

```
drop database <数据库名>;
```

```bash
mysql> drop database person;
```



----

# MySQL 选择数据库

在你连接到 MySQL 数据库后，可能有多个可以操作的数据库，所以你需要选择你要操作的数据库。

```bash
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| person             |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

mysql> use person;
Database changed
```

```php
mysqli_select_db($conn, 'person' );
```

----

# MySQL授权

```mysql
use mysql;

create user 'senbin'@'localhost' identified by 'kop66';

grant all privileges on person.* to 'senbin'@'localhost';

flush privileges;
```



----

# MySQL 数据类型

MySQL 中定义数据字段的类型对你数据库的优化是非常重要的。

MySQL 支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。

## 数值类型

MySQL 支持所有标准 SQL 数值数据类型。

这些类型包括严格数值数据类型(INTEGER、SMALLINT、DECIMAL 和 NUMERIC)，以及近似数值数据类型(FLOAT、REAL 和 DOUBLE PRECISION)。

关键字INT是INTEGER的同义词，关键字DEC是DECIMAL的同义词。

BIT数据类型保存位字段值，并且支持 MyISAM、MEMORY、InnoDB 和 BDB表。

作为 SQL 标准的扩展，MySQL 也支持整数类型 TINYINT、MEDIUMINT 和 BIGINT。下面的表显示了需要的每个整数类型的存储和范围。

| 类型         | 大小                                     | 范围（有符号）                                               | 范围（无符号）                                               | 用途            |
| :----------- | :--------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------- |
| TINYINT      | 1 Bytes                                  | (-128，127)                                                  | (0，255)                                                     | 小整数值        |
| SMALLINT     | 2 Bytes                                  | (-32 768，32 767)                                            | (0，65 535)                                                  | 大整数值        |
| MEDIUMINT    | 3 Bytes                                  | (-8 388 608，8 388 607)                                      | (0，16 777 215)                                              | 大整数值        |
| INT或INTEGER | 4 Bytes                                  | (-2 147 483 648，2 147 483 647)                              | (0，4 294 967 295)                                           | 大整数值        |
| BIGINT       | 8 Bytes                                  | (-9,223,372,036,854,775,808，9 223 372 036 854 775 807)      | (0，18 446 744 073 709 551 615)                              | 极大整数值      |
| FLOAT        | 4 Bytes                                  | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                  | 单精度 浮点数值 |
| DOUBLE       | 8 Bytes                                  | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 双精度 浮点数值 |
| DECIMAL      | 对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2 | 依赖于M和D的值                                               | 依赖于M和D的值                                               | 小数值          |

------

## 日期和时间类型

表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。

每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。

TIMESTAMP类型有专有的自动更新特性，将在后面描述。

| 类型      | 大小 ( bytes) | 范围                                                         | 格式                | 用途                     |
| :-------- | :------------ | :----------------------------------------------------------- | :------------------ | :----------------------- |
| DATE      | 3             | 1000-01-01/9999-12-31                                        | YYYY-MM-DD          | 日期值                   |
| TIME      | 3             | '-838:59:59'/'838:59:59'                                     | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1             | 1901/2155                                                    | YYYY                | 年份值                   |
| DATETIME  | 8             | '1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'               | YYYY-MM-DD hh:mm:ss | 混合日期和时间值         |
| TIMESTAMP | 4             | '1970-01-01 00:00:01' UTC 到 '2038-01-19 03:14:07' UTC结束时间是第 **2147483647** 秒，北京时间 **2038-1-19 11:14:07**，格林尼治时间 2038年1月19日 凌晨 03:14:07 | YYYY-MM-DD hh:mm:ss | 混合日期和时间值，时间戳 |

------

## 字符串类型

字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。

| 类型       | 大小                  | 用途                            |
| :--------- | :-------------------- | :------------------------------ |
| CHAR       | 0-255 bytes           | 定长字符串                      |
| VARCHAR    | 0-65535 bytes         | 变长字符串                      |
| TINYBLOB   | 0-255 bytes           | 不超过 255 个字符的二进制字符串 |
| TINYTEXT   | 0-255 bytes           | 短文本字符串                    |
| BLOB       | 0-65 535 bytes        | 二进制形式的长文本数据          |
| TEXT       | 0-65 535 bytes        | 长文本数据                      |
| MEDIUMBLOB | 0-16 777 215 bytes    | 二进制形式的中等长度文本数据    |
| MEDIUMTEXT | 0-16 777 215 bytes    | 中等长度文本数据                |
| LONGBLOB   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据        |
| LONGTEXT   | 0-4 294 967 295 bytes | 极大文本数据                    |

**注意**：char(n) 和 varchar(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。

CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。

BINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。

BLOB 是一个二进制大对象，可以容纳可变数量的数据。有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。它们区别在于可容纳存储范围不同。

有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。



----

# MySQL 创建数据表

创建MySQL数据表需要以下信息：

- 表名
- 表字段名
- 定义每个表字段

语法

以下为创建MySQL数据表的SQL通用语法：

```
CREATE TABLE table_name (column_name column_type);
```

```bash
mysql> create database infodb;
Query OK, 1 row affected (0.00 sec)

mysql> use infodb;
Database changed
mysql> set names utf8;
Query OK, 0 rows affected (0.00 sec)
```



```bash
CREATE TABLE IF NOT EXISTS `person`(
   `id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `sex` VARCHAR(40) NOT NULL,
    `age` INT UNSIGNED,
    `number` INT UNSIGNED,
    PRIMARY KEY ( `id` )
   )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

**注意：**MySQL命令终止符为分号 **;** 。

**注意：** **->** 是换行符标识，不要复制。

```bash
mysql> show tables;
+------------------+
| Tables_in_infodb |
+------------------+
| person           |
+------------------+
1 row in set (0.00 sec)

mysql> desc person;
+--------+------------------+------+-----+---------+----------------+
| Field  | Type             | Null | Key | Default | Extra          |
+--------+------------------+------+-----+---------+----------------+
| id     | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100)     | NO   |     | NULL    |                |
| sex    | varchar(40)      | NO   |     | NULL    |                |
| age    | int(10) unsigned | YES  |     | NULL    |                |
| number | int(10) unsigned | YES  |     | NULL    |                |
+--------+------------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```



实例解析：

- 如果你不想字段为 **NULL** 可以设置字段的属性为 **NOT NULL**， 在操作数据库时如果输入该字段的数据为**NULL** ，就会报错。
- AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1。
- PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
- ENGINE 设置存储引擎，CHARSET 设置编码。



----

# MySQL导入导出数据



```mysql
//导入数据
LOAD DATA LOCAL INFILE 'file.txt' INTO TABLE person LINES TERMINATED BY '\r\n';

//导出数据表
mysqldump -u root -p --databases gene_db --tables blastslbw25113 > blastslbw25113.sql
```





----

# MySQL 删除数据表

MySQL中删除数据表是非常容易操作的，但是你在进行删除表操作时要非常小心，因为执行删除命令后所有数据都会消失。

```mysql
DROP TABLE table_name ;

drop table person;  //删除数据表
truncate table person;  //清空数据表
```



----

# MySQL 插入数据

MySQL 表中使用 **INSERT INTO** SQL语句来插入数据。

你可以通过 mysql> 命令提示窗口中向数据表中插入数据，或者通过PHP脚本来插入数据。

以下为向MySQL数据表插入数据通用的 **INSERT INTO** SQL语法：

```mysql
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );

INSERT INTO table_name  (field1, field2,...fieldN)  VALUES  (valueA1,valueA2,...valueAN),(valueB1,valueB2,...valueBN),(valueC1,valueC2,...valueCN)......;
```



**如果数据是字符型，必须使用单引号或者双引号**，如："value"。

```mysql
INSERT INTO person (id, name, sex, age, number)
                       VALUES
                       (1, 'Alison', 'male', 28, 1),
                       (2, 'Vigril', 'male', 29, 4),
                       (3, 'Hendson', 'male', 31, 14),
                       (4, 'Arnold', 'male', 23, 66);

INSERT INTO person (id, name, sex, age, number)
                       VALUES
                       (5, 'Robson', 'male', 26, 26),
                       (6, 'Salah', 'male', 30, 11),
                       (7, 'Nuniz', 'female', 23, 27),
                       (8, 'Fabnio', 'female', 28, 3);
```

```bash
mysql> select * from person;
+----+---------+------+------+--------+
| id | name    | sex  | age  | number |
+----+---------+------+------+--------+
|  1 | Alison  | male |   28 |      1 |
|  2 | Vigril  | male |   29 |      4 |
|  3 | Hendson | male |   31 |     14 |
|  4 | Arnold  | male |   23 |     66 |
+----+---------+------+------+--------+
4 rows in set (0.00 sec)
```



----

# MySQL 查询数据

MySQL 数据库使用SQL SELECT语句来查询数据。

你可以通过 mysql> 命令提示窗口中在数据库中查询数据，或者通过PHP脚本来查询数据。

以下为在MySQL数据库中查询数据通用的 SELECT 语法：

```mysql
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```

- 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件。
- SELECT 命令可以读取一条或者多条记录。
- 你可以使用星号（*）来代替其他字段，SELECT语句会返回表的所有字段数据
- 你可以使用 WHERE 语句来包含任何条件。
- **你可以使用 LIMIT 属性来设定返回的记录数**。
- 你可以通过**OFFSET指定SELECT语句开始查询的数据偏移量**。默认情况下偏移量为0。

```mysql
mysql> select * from person;
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  2 | Vigril  | male   |   29 |      4 |
|  3 | Hendson | male   |   31 |     14 |
|  4 | Arnold  | male   |   23 |     66 |
|  5 | Robson  | male   |   26 |     26 |
|  6 | Salah   | male   |   30 |     11 |
|  7 | Nuniz   | female |   23 |     27 |
|  8 | Fabnio  | female |   28 |      3 |
+----+---------+--------+------+--------+
8 rows in set (0.00 sec)

mysql> select name, number from person where age > 24 limit 3 offset 1;
+---------+--------+
| name    | number |
+---------+--------+
| Vigril  |      4 |
| Hendson |     14 |
| Robson  |     26 |
+---------+--------+
3 rows in set (0.00 sec)
```





----

# MySQL WHERE 子句

**where：**数据库中常用的是where关键字，用于在初始表中筛选查询。它是一个约束声明，用于约束数据，在返回结果集之前起作用。

**group by:**对select查询出来的结果集按照某个字段或者表达式进行分组，获得一组组的集合，然后从每组中取出一个指定字段或者表达式的值。

**having：**用于对where和group by查询出来的分组经行过滤，查出满足条件的分组结果。它是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作。

以下是 SQL SELECT 语句使用 WHERE 子句从数据表中读取数据的通用语法：

```mysql
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
[WHERE condition1 [AND [OR]] condition2.....
```

- 查询语句中你可以使用一个或者多个表，表之间使用逗号**,** 分割，并使用WHERE语句来设定查询条件。
- 你可以在 WHERE 子句中指定任何条件。
- 你可以使用 AND 或者 OR 指定一个或多个条件。
- WHERE 子句**也可以运用于 SQL 的 DELETE 或者 UPDATE 命令**。
- WHERE 子句类似于程序语言中的 if 条件，根据 MySQL 表中的字段值来读取指定的数据。

以下为操作符列表，可用于 WHERE 子句中。

下表中实例假定 A 为 10, B 为 20

| 操作符 | 描述                                                         | 实例                 |
| :----- | :----------------------------------------------------------- | :------------------- |
| =      | 等号，检测两个值是否相等，如果相等返回true                   | (A = B) 返回false。  |
| <>, != | 不等于，检测两个值是否相等，如果不相等返回true               | (A != B) 返回 true。 |
| >      | 大于号，检测左边的值是否大于右边的值, 如果左边的值大于右边的值返回true | (A > B) 返回false。  |
| <      | 小于号，检测左边的值是否小于右边的值, 如果左边的值小于右边的值返回true | (A < B) 返回 true。  |
| >=     | 大于等于号，检测左边的值是否大于或等于右边的值, 如果左边的值大于或等于右边的值返回true | (A >= B) 返回false。 |
| <=     | 小于等于号，检测左边的值是否小于或等于右边的值, 如果左边的值小于或等于右边的值返回true | (A <= B) 返回 true。 |

如果我们想在 MySQL 数据表中读取指定的数据，WHERE 子句是非常有用的。

使用主键来作为 WHERE 子句的条件查询是非常快速的。

如果给定的条件在表中没有任何匹配的记录，那么查询不会返回任何数据。

```mysql
mysql> select * from person where age > 24 and number > 14;
+----+--------+------+------+--------+
| id | name   | sex  | age  | number |
+----+--------+------+------+--------+
|  5 | Robson | male |   26 |     26 |
+----+--------+------+------+--------+
1 row in set (0.00 sec)
```



执行顺序

1. FROM, including JOINs
2. WHERE
3. GROUP BY
4. HAVING
5. WINDOW functions
6. SELECT
7. DISTINCT
8. UNION
9. ORDER BY
10. LIMIT and OFFSET



----

# MySQL UPDATE 更新

如果我们需要修改或更新 MySQL 中的数据，我们可以使用 SQL UPDATE 命令来操作。

以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：

```mysql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

- 你可以同时更新一个或多个字段。
- 你可以在 WHERE 子句中指定任何条件。
- 你可以在一个单独表中同时更新数据。

当你需要更新数据表中指定行的数据时 WHERE 子句是非常有用的。

```mysql
mysql> update person set age=24 where number=27;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from person where number=27;
+----+-------+--------+------+--------+
| id | name  | sex    | age  | number |
+----+-------+--------+------+--------+
|  7 | Nuniz | female |   24 |     27 |
+----+-------+--------+------+--------+
1 row in set (0.00 sec)

```



----

# MySQL DELETE 语句

你可以使用 SQL 的 DELETE FROM 命令来删除 MySQL 数据表中的记录。

你可以在 **mysql>** 命令提示符或 PHP 脚本中执行该命令。

以下是 SQL DELETE 语句从 MySQL 数据表中删除数据的通用语法：

```
DELETE FROM table_name [WHERE Clause]
```

- 如果没有指定 WHERE 子句，MySQL 表中的所有记录将被删除。
- 你可以在 WHERE 子句中指定任何条件
- 您可以在单个表中一次性删除记录。

```mysql
mysql> delete from person where number > 66;
Query OK, 0 rows affected (0.00 sec)
```



----

# MySQL LIKE 子句

我们知道在 MySQL 中使用 SQL SELECT 命令来读取数据， 同时我们可以在 SELECT 语句中使用 WHERE 子句来获取指定的记录。

WHERE 子句中可以使用等号 **=** 来设定获取数据的条件，如 "runoob_author = 'RUNOOB.COM'"。

但是有时候我们需要获取 runoob_author 字段含有 "COM" 字符的所有记录，这时我们就需要在 WHERE 子句中使用 SQL LIKE 子句。

SQL LIKE 子句中使用百分号 **%**字符来表示任意字符，类似于UNIX或正则表达式中的星号 *****。

如果没有使用百分号 **%**, LIKE 子句与等号 **=** 的效果是一样的。

以下是 SQL SELECT 语句使用 LIKE 子句从数据表中读取数据的通用语法：

```mysql
SELECT field1, field2,...fieldN 
FROM table_name
WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
```

- 你可以在 WHERE 子句中指定任何条件。
- 你可以在 WHERE 子句中使用LIKE子句。
- 你可以使用LIKE子句代替等号 **=**。
- LIKE 通常与 **%** 一同使用，类似于一个元字符的搜索。
- 你可以使用 AND 或者 OR 指定一个或多个条件。
- 你可以在 DELETE 或 UPDATE 命令中使用 WHERE...LIKE 子句来指定条件。

在 where like 的条件查询中，SQL 提供了四种匹配方式。

1. **%**：表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。
2. **_**：表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句。
3. **[]**：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个。
4. **[^]** ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。
5. 查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询。

like 匹配/模糊匹配，会与 **%** 和 **_** 结合使用。

```
'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
'_a_'    //三位且中间字母是a的
'_a'     //两位且结尾字母是a的
'a_'     //两位且开头字母是a的
```



```mysql
mysql> select * from person where name like 'a%';
+----+--------+------+------+--------+
| id | name   | sex  | age  | number |
+----+--------+------+------+--------+
|  1 | Alison | male |   28 |      1 |
|  4 | Arnold | male |   23 |     66 |
+----+--------+------+------+--------+
2 rows in set (0.00 sec)

```



----

# MySQL UNION 操作符

MySQL UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据。

MySQL UNION 操作符语法格式：

```mysql
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
```

参数

- **expression1, expression2, ... expression_n**: 要检索的列。
- **tables:** 要检索的数据表。
- **WHERE conditions:** 可选， 检索条件。
- **DISTINCT:** 可选，删除结果集中重复的数据。**默认情况下 UNION 操作符已经删除了重复数据**，所以 DISTINCT 修饰符对结果没啥影响。
- **ALL:** 可选，返回所有结果集，包含重复数据。

**UNION 语句**：用于将不同表中相同列中查询的数据展示出来；（不包括重复数据）

**UNION ALL 语句**：用于将不同表中相同列中查询的数据展示出来；（包括重复数据）

使用形式如下：

```mysql
SELECT 列名称 FROM 表名称 UNION SELECT 列名称 FROM 表名称 ORDER BY 列名称；
SELECT 列名称 FROM 表名称 UNION ALL SELECT 列名称 FROM 表名称 ORDER BY 列名称；
```



```mysql
CREATE TABLE IF NOT EXISTS `otherinfo`(
   `id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `country` VARCHAR(100) NOT NULL,
    `site` VARCHAR(100) NOT NULL,
    PRIMARY KEY ( `id` )
   )ENGINE=InnoDB DEFAULT CHARSET=utf8;

mysql> desc otherinfo;
+---------+------------------+------+-----+---------+----------------+
| Field   | Type             | Null | Key | Default | Extra          |
+---------+------------------+------+-----+---------+----------------+
| id      | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name    | varchar(100)     | NO   |     | NULL    |                |
| country | varchar(100)     | NO   |     | NULL    |                |
| site    | varchar(100)     | NO   |     | NULL    |                |
+---------+------------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
```

```mysql
INSERT INTO otherinfo (id, name, country, site)
                       VALUES
                       (1, 'Alison', 'Baxi', 'G'),
                       (2, 'Vigril', 'Helan', 'D'),
                       (3, 'Hendson', 'England', 'M'),
                       (4, 'Arnold', 'England', 'D'),
                       (5, 'Robson', 'Scotland', 'D'),
                       (6, 'Salah', 'Egipty', 'F'),
                       (7, 'Nuniz', 'Wulagui', 'F'),
                       (8, 'Fabnio', 'Baxi', 'M');
```

```mysql
mysql> select * from otherinfo;
+----+---------+----------+------+
| id | name    | country  | site |
+----+---------+----------+------+
|  1 | Alison  | Baxi     | G    |
|  2 | Vigril  | Helan    | D    |
|  3 | Hendson | England  | M    |
|  4 | Arnold  | England  | D    |
|  5 | Robson  | Scotland | D    |
|  6 | Salah   | Egipty   | F    |
|  7 | Nuniz   | Wulagui  | F    |
|  8 | Fabnio  | Baxi     | M    |
+----+---------+----------+------+
8 rows in set (0.00 sec)
```

 **UNION** 实例

```mysql
mysql> select name from person where age > 24 union select name from otherinfo where country='England';
+---------+
| name    |
+---------+
| Alison  |
| Vigril  |
| Hendson |
| Robson  |
| Salah   |
| Fabnio  |
| Arnold  |
+---------+
7 rows in set (0.00 sec)
```



---

# MySQL 排序

我们知道从 MySQL 表中使用 SQL SELECT 语句来读取数据。

如果我们需要对读取的数据进行排序，我们就可以使用 MySQL 的 **ORDER BY** 子句来设定你想按哪个字段哪种方式来进行排序，再返回搜索结果。

**语法**

以下是 SQL SELECT 语句使用 ORDER BY 子句将查询数据排序后再返回数据：

```mysql
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]
```

- 你可以使用任何字段来作为排序的条件，从而返回排序后的查询结果。
- 你可以设定多个字段来排序。
- 你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。
- 你可以添加 WHERE...LIKE 子句来设置条件。

**在命令提示符中使用 ORDER BY 子句**

以下将在 SQL SELECT 语句中使用 ORDER BY 子句来读取MySQL 数据表中的数据：

```mysql
mysql> select * from person order by number asc;
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  8 | Fabnio  | female |   28 |      3 |
|  2 | Vigril  | male   |   29 |      4 |
|  6 | Salah   | male   |   30 |     11 |
|  3 | Hendson | male   |   31 |     14 |
|  5 | Robson  | male   |   26 |     26 |
|  7 | Nuniz   | female |   24 |     27 |
|  4 | Arnold  | male   |   23 |     66 |
+----+---------+--------+------+--------+
8 rows in set (0.00 sec)
```

如果字符集采用的是 gbk(汉字编码字符集)，直接在查询语句后边添加 ORDER BY：

```mysql
SELECT * FROM person ORDER BY name;
```

如果字符集采用的是 utf8(万国码)，需要先对字段进行转码然后排序：

```mysql
SELECT * FROM person ORDER BY CONVERT(name using gbk);
```

```mysql
mysql> SELECT * FROM person ORDER BY CONVERT(name using gbk);
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  4 | Arnold  | male   |   23 |     66 |
|  8 | Fabnio  | female |   28 |      3 |
|  3 | Hendson | male   |   31 |     14 |
|  7 | Nuniz   | female |   24 |     27 |
|  5 | Robson  | male   |   26 |     26 |
|  6 | Salah   | male   |   30 |     11 |
|  2 | Vigril  | male   |   29 |      4 |
+----+---------+--------+------+--------+
8 rows in set (0.00 sec)
```



----

# MySQL分组

GROUP BY 语句根据一个或多个列对结果集进行分组。

在分组的列上我们可以使用 COUNT, SUM, AVG,等函数。

**GROUP BY 语法**

```mysql
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

我们使用 GROUP BY 语句 将数据表按age进行分组

```mysql
mysql> select age, count(*) from person group by age;
+------+----------+
| age  | count(*) |
+------+----------+
|   23 |        1 |
|   24 |        1 |
|   26 |        1 |
|   28 |        2 |
|   29 |        1 |
|   30 |        1 |
|   31 |        1 |
+------+----------+
7 rows in set (0.00 sec)
```

**使用 WITH ROLLUP**

WITH ROLLUP 可以实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）。

```mysql
mysql> select age,count(*), sum(number) as number_sum from person group by age with rollup;
+------+----------+------------+
| age  | count(*) | number_sum |
+------+----------+------------+
|   23 |        1 |         66 |
|   24 |        1 |         27 |
|   26 |        1 |         26 |
|   28 |        2 |          4 |
|   29 |        1 |          4 |
|   30 |        1 |         11 |
|   31 |        1 |         14 |
| NULL |        8 |        152 |
+------+----------+------------+
8 rows in set (0.00 sec)
```

其中记录 NULL 表示所有的记录。

我们可以使用 coalesce 来设置一个可以取代 NUll 的名称，coalesce 语法：

我们可以使用 coalesce 来设置一个可以取代 NUll 的名称，coalesce 语法：

```
select coalesce(a,b,c);
```

参数说明：如果a==null,则选择b；如果b==null,则选择c；如果a!=null,则选择a；如果a b c 都为null ，则返回为null（没意义）。

以下实例中如果age为空我们使用总数代替：

```mysql
mysql> select coalesce(age,'总数'),count(*), sum(number) as number_sum from person group by age with rollup;
+----------------------+----------+------------+
| coalesce(age,'总数') | count(*) | number_sum |
+----------------------+----------+------------+
| 23                   |        1 |         66 |
| 24                   |        1 |         27 |
| 26                   |        1 |         26 |
| 28                   |        2 |          4 |
| 29                   |        1 |          4 |
| 30                   |        1 |         11 |
| 31                   |        1 |         14 |
| 总数                 |        8 |        152 |
+----------------------+----------+------------+
8 rows in set (0.00 sec)
```



----

# MySQL 连接的使用

你可以在 SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询。

JOIN 按照功能大致分为如下三类：

- **INNER JOIN（内连接,或等值连接）**：获取两个表中字段匹配关系的记录。
- **LEFT JOIN（左连接）：**获取左表所有记录，即使右表没有对应匹配的记录。
- **RIGHT JOIN（右连接）：** 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

## INNER JOIN

![img](https://www.runoob.com/wp-content/uploads/2014/03/img_innerjoin.gif)

使用MySQL的**INNER JOIN(也可以省略 INNER 使用 JOIN，效果一样)**来连接以上两张表来读取

```mysql
mysql> select a.name, a.number, b.country from person a inner join otherinfo b on a.name = b.name;
+---------+--------+----------+
| name    | number | country  |
+---------+--------+----------+
| Alison  |      1 | Baxi     |
| Vigril  |      4 | Helan    |
| Hendson |     14 | England  |
| Arnold  |     66 | England  |
| Robson  |     26 | Scotland |
| Salah   |     11 | Egipty   |
| Nuniz   |     27 | Wulagui  |
| Fabnio  |      3 | Baxi     |
+---------+--------+----------+
8 rows in set (0.00 sec)
```

以上 SQL 语句等价于：

```mysql
mysql> select a.name, a.number, b.country from person a, otherinfo b where a.name = b.name;
+---------+--------+----------+
| name    | number | country  |
+---------+--------+----------+
| Alison  |      1 | Baxi     |
| Vigril  |      4 | Helan    |
| Hendson |     14 | England  |
| Arnold  |     66 | England  |
| Robson  |     26 | Scotland |
| Salah   |     11 | Egipty   |
| Nuniz   |     27 | Wulagui  |
| Fabnio  |      3 | Baxi     |
+---------+--------+----------+
8 rows in set (0.00 sec)
```

## LEFT JOIN

MySQL left join 与 join 有所不同。 MySQL LEFT JOIN 会读取左边数据表的全部数据，即使右边表无对应数据。

![img](https://www.runoob.com/wp-content/uploads/2014/03/img_leftjoin.gif)

```mysql
INSERT INTO person (id, name, sex, age, number)
                       VALUES
                       (9, 'Jota', 'male', 26, 20),
                       (10, 'Matip', 'male', 30, 32);
```



```mysql
mysql> select a.name, a.number, b.country from person a left join otherinfo b on a.name = b.name;
+---------+--------+----------+
| name    | number | country  |
+---------+--------+----------+
| Alison  |      1 | Baxi     |
| Vigril  |      4 | Helan    |
| Hendson |     14 | England  |
| Arnold  |     66 | England  |
| Robson  |     26 | Scotland |
| Salah   |     11 | Egipty   |
| Nuniz   |     27 | Wulagui  |
| Fabnio  |      3 | Baxi     |
| Jota    |     20 | NULL     |
| Matip   |     32 | NULL     |
+---------+--------+----------+
10 rows in set (0.00 sec)
```



##  RIGHT JOIN

MySQL RIGHT JOIN 会读取右边数据表的全部数据，即使左边边表无对应数据。

![img](https://www.runoob.com/wp-content/uploads/2014/03/img_rightjoin.gif)

```mysql
INSERT INTO otherinfo (id, name, country, site)
                       VALUES
                       (9, 'Elliot', 'England', 'M'),
                       (10, 'Diaz', 'Colombia', 'F');
```

```mysql
mysql> select a.name, a.number, b.country from person a right join otherinfo b on a.name = b.name;
+---------+--------+----------+
| name    | number | country  |
+---------+--------+----------+
| Alison  |      1 | Baxi     |
| Vigril  |      4 | Helan    |
| Hendson |     14 | England  |
| Arnold  |     66 | England  |
| Robson  |     26 | Scotland |
| Salah   |     11 | Egipty   |
| Nuniz   |     27 | Wulagui  |
| Fabnio  |      3 | Baxi     |
| NULL    |   NULL | England  |
| NULL    |   NULL | Colombia |
+---------+--------+----------+
10 rows in set (0.00 sec)
```



----

# MySQL NULL 值处理

已经知道 MySQL 使用 SQL SELECT 命令及 WHERE 子句来读取数据表中的数据,但是当提供的查询条件字段为 NULL 时，该命令可能就无法正常工作。

为了处理这种情况，MySQL提供了三大运算符:

- **IS NULL:** 当列的值是 NULL,此运算符返回 true。
- **IS NOT NULL:** 当列的值不为 NULL, 运算符返回 true。
- **<=>:** 比较操作符（不同于 = 运算符），当比较的的两个值相等或者都为 NULL 时返回 true。

关于 NULL 的条件比较运算是比较特殊的。你不能使用 = NULL 或 != NULL 在列中查找 NULL 值 。

在 MySQL 中，NULL 值与任何其它值的比较（即使是 NULL）永远返回 NULL，即 NULL = NULL 返回 NULL 。

MySQL 中处理 NULL 使用 IS NULL 和 IS NOT NULL 运算符。

> **注意：**
>
> ```mysql
> select * , columnName1+ifnull(columnName2,0) from tableName;
> ```
>
> columnName1，columnName2 为 int 型，当 columnName2 中，有值为 null 时，columnName1+columnName2=null， ifnull(columnName2,0) 把 columnName2 中 null 值转为 0。

```mysql
mysql> select * from person;
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  2 | Vigril  | male   |   29 |      4 |
|  3 | Hendson | male   |   31 |     14 |
|  4 | Arnold  | male   |   23 |     66 |
|  5 | Robson  | male   |   26 |     26 |
|  6 | Salah   | male   |   30 |     11 |
|  7 | Nuniz   | female |   24 |     27 |
|  8 | Fabnio  | female |   28 |      3 |
|  9 | Jota    | male   |   26 |     20 |
| 10 | Matip   | male   |   30 |     32 |
| 11 | Firmino | male   | NULL |      9 |
| 12 | Thiago  | male   | NULL |      6 |
+----+---------+--------+------+--------+
12 rows in set (0.00 sec)
```



```mysql
INSERT INTO person (id, name, sex, age, number)
                       VALUES
                       (11, 'Firmino', 'male', null, 9),
                       (12, 'Thiago', 'male', null, 6);
```

以下实例中你可以看到 = 和 != 运算符是不起作用的：

```mysql
mysql> select * from person where age = null;
Empty set (0.00 sec)

mysql> select * from person where age != null;
Empty set (0.00 sec)
```

查找数据表中 列是否为 NULL，必须使用 **IS NULL** 和 **IS NOT NULL**

```mysql
mysql> select * from person where age is not null;
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  2 | Vigril  | male   |   29 |      4 |
|  3 | Hendson | male   |   31 |     14 |
|  4 | Arnold  | male   |   23 |     66 |
|  5 | Robson  | male   |   26 |     26 |
|  6 | Salah   | male   |   30 |     11 |
|  7 | Nuniz   | female |   24 |     27 |
|  8 | Fabnio  | female |   28 |      3 |
|  9 | Jota    | male   |   26 |     20 |
| 10 | Matip   | male   |   30 |     32 |
+----+---------+--------+------+--------+
10 rows in set (0.00 sec)

mysql> select * from person where age is null;
+----+---------+------+------+--------+
| id | name    | sex  | age  | number |
+----+---------+------+------+--------+
| 11 | Firmino | male | NULL |      9 |
| 12 | Thiago  | male | NULL |      6 |
+----+---------+------+------+--------+
2 rows in set (0.00 sec)
```



----

# MySQL 正则表达式

在前面的章节我们已经了解到MySQL可以通过 **LIKE ...%** 来进行模糊匹配。

MySQL 同样也支持其他正则表达式的匹配， MySQL中使用 REGEXP 操作符来进行正则表达式匹配。

如果您了解PHP或Perl，那么操作起来就非常简单，因为MySQL的正则表达式匹配与这些脚本的类似。

下表中的正则模式可应用于 REGEXP 操作符中。

| 模式       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| ^          | 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。 |
| $          | 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。 |
| .          | 匹配除 "\n" 之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像 '[.\n]' 的模式。 |
| [...]      | 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。 |
| [^...]     | 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'。 |
| p1\|p2\|p3 | 匹配 p1 或 p2 或 p3。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。 |
| *          | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| +          | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| {n}        | n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 |
| {n,m}      | m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。 |

了解以上的正则需求后，我们就可以根据自己的需求来编写带有正则表达式的SQL语句。

```mysql
mysql> select * from person where name regexp '^a';
+----+--------+------+------+--------+
| id | name   | sex  | age  | number |
+----+--------+------+------+--------+
|  1 | Alison | male |   28 |      1 |
|  4 | Arnold | male |   23 |     66 |
+----+--------+------+------+--------+
2 rows in set (0.00 sec)

mysql> select * from person where name regexp 'n$';
+----+---------+------+------+--------+
| id | name    | sex  | age  | number |
+----+---------+------+------+--------+
|  1 | Alison  | male |   28 |      1 |
|  3 | Hendson | male |   31 |     14 |
|  5 | Robson  | male |   26 |     26 |
+----+---------+------+------+--------+
3 rows in set (0.00 sec)

mysql> select * from person where name regexp '.*on';
+----+---------+------+------+--------+
| id | name    | sex  | age  | number |
+----+---------+------+------+--------+
|  1 | Alison  | male |   28 |      1 |
|  3 | Hendson | male |   31 |     14 |
|  5 | Robson  | male |   26 |     26 |
+----+---------+------+------+--------+
3 rows in set (0.00 sec)

mysql> select * from person where name regexp 'son';
+----+---------+------+------+--------+
| id | name    | sex  | age  | number |
+----+---------+------+------+--------+
|  1 | Alison  | male |   28 |      1 |
|  3 | Hendson | male |   31 |     14 |
|  5 | Robson  | male |   26 |     26 |
+----+---------+------+------+--------+
3 rows in set (0.00 sec)
```



----

# MySQL 事务

# MySQL 事务

MySQL 事务主要用于处理操作量大，复杂度高的数据。比如说，在人员管理系统中，你删除一个人员，你既需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！

- 在 MySQL 中只有使用了 Innodb 数据库引擎的数据库或表才支持事务。
- 事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。
- 事务用来管理 insert,update,delete 语句

一般来说，事务是必须满足4个条件（ACID）：：原子性（**A**tomicity，或称不可分割性）、一致性（**C**onsistency）、隔离性（**I**solation，又称独立性）、持久性（**D**urability）。

- **原子性：**一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。
- **一致性：**在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。
- **隔离性：**数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。
- **持久性：**事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。

> 在 MySQL 命令行的默认设置下，事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作。因此要显式地开启一个事务务须使用命令 BEGIN 或 START TRANSACTION，或者执行命令 SET AUTOCOMMIT=0，用来禁止使用当前会话的自动提交。

**事务控制语句：**

- BEGIN 或 START TRANSACTION 显式地开启一个事务；
- COMMIT 也可以使用 COMMIT WORK，不过二者是等价的。COMMIT 会提交事务，并使已对数据库进行的所有修改成为永久性的；
- ROLLBACK 也可以使用 ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；
- SAVEPOINT identifier，SAVEPOINT 允许在事务中创建一个保存点，一个事务中可以有多个 SAVEPOINT；
- RELEASE SAVEPOINT identifier 删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；
- ROLLBACK TO identifier 把事务回滚到标记点；
- SET TRANSACTION 用来设置事务的隔离级别。InnoDB 存储引擎提供事务的隔离级别有READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ 和 SERIALIZABLE。

**MYSQL 事务处理主要有两种方法：**

1、用 BEGIN, ROLLBACK, COMMIT来实现

- **BEGIN** 开始一个事务
- **ROLLBACK** 事务回滚
- **COMMIT** 事务确认

2、直接用 SET 来改变 MySQL 的自动提交模式:

- **SET AUTOCOMMIT=0** 禁止自动提交
- **SET AUTOCOMMIT=1** 开启自动提交



```mysql
mysql> begin;   # 开始事务
Query OK, 0 rows affected (0.00 sec)

mysql> insert into person value(20, 'bob', 'male', 33, 100);
Query OK, 1 row affected (0.00 sec)

mysql> insert into person value(21, 'abc', 'male', 36, 34);
Query OK, 1 row affected (0.00 sec)

mysql> delete from person where name = abc;
ERROR 1054 (42S22): Unknown column 'abc' in 'where clause'
mysql> delete from person where name = 'abc';
Query OK, 1 row affected (0.00 sec)

mysql> commit;  # 提交事务
Query OK, 0 rows affected (0.02 sec)

mysql> select * from person;
+----+---------+--------+------+--------+
| id | name    | sex    | age  | number |
+----+---------+--------+------+--------+
|  1 | Alison  | male   |   28 |      1 |
|  2 | Vigril  | male   |   29 |      4 |
|  3 | Hendson | male   |   31 |     14 |
|  4 | Arnold  | male   |   23 |     66 |
|  5 | Robson  | male   |   26 |     26 |
|  6 | Salah   | male   |   30 |     11 |
|  7 | Nuniz   | female |   24 |     27 |
|  8 | Fabnio  | female |   28 |      3 |
|  9 | Jota    | male   |   26 |     20 |
| 10 | Matip   | male   |   30 |     32 |
| 11 | Firmino | male   | NULL |      9 |
| 12 | Thiago  | male   | NULL |      6 |
| 20 | bob     | male   |   33 |    100 |
+----+---------+--------+------+--------+
```



----

# MySQL ALTER命令

当我们需要修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令。

## 删除，添加或修改表字段

如果数据表中只剩余一个字段则无法使用DROP来删除字段。

如果你需要指定新增字段的位置，可以使用MySQL提供的关键字 FIRST (设定位第一列)， AFTER 字段名（设定位于某个字段之后）。

```mysql
mysql> alter table person add goal int after name;
Query OK, 0 rows affected (0.43 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table person add health char;
Query OK, 0 rows affected (0.40 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc person;
+--------+------------------+------+-----+---------+----------------+
| Field  | Type             | Null | Key | Default | Extra          |
+--------+------------------+------+-----+---------+----------------+
| id     | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100)     | NO   |     | NULL    |                |
| goal   | int(11)          | YES  |     | NULL    |                |
| sex    | varchar(40)      | NO   |     | NULL    |                |
| age    | int(10) unsigned | YES  |     | NULL    |                |
| number | int(10) unsigned | YES  |     | NULL    |                |
| health | char(1)          | YES  |     | NULL    |                |
+--------+------------------+------+-----+---------+----------------+
7 rows in set (0.00 sec)

mysql> alter table person drop health;
Query OK, 0 rows affected (0.42 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc person;
+--------+------------------+------+-----+---------+----------------+
| Field  | Type             | Null | Key | Default | Extra          |
+--------+------------------+------+-----+---------+----------------+
| id     | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100)     | NO   |     | NULL    |                |
| goal   | int(11)          | YES  |     | NULL    |                |
| sex    | varchar(40)      | NO   |     | NULL    |                |
| age    | int(10) unsigned | YES  |     | NULL    |                |
| number | int(10) unsigned | YES  |     | NULL    |                |
+--------+------------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)
```

FIRST 和 AFTER 关键字可用于 ADD 与 MODIFY 子句，所以如果你想重置数据表字段的位置就需要先使用 DROP 删除字段然后使用 ADD 来添加字段并设置位置。



## 修改字段类型及名称

如果需要修改字段类型及名称, 你可以在ALTER命令中使用 MODIFY 或 CHANGE 子句 。

例如，把字段 c 的类型从 CHAR(1) 改为 CHAR(10)，可以执行以下命令:

```mysql
mysql> ALTER TABLE testalter_tbl MODIFY c CHAR(10);
```

使用 CHANGE 子句, 语法有很大的不同。 在 CHANGE 关键字之后，紧跟着的是你要修改的字段名，然后指定新字段名及类型。尝试如下实例：

```mysql
mysql> ALTER TABLE testalter_tbl CHANGE i j BIGINT;
mysql> ALTER TABLE testalter_tbl CHANGE j j INT;
```

## ALTER TABLE 对 Null 值和默认值的影响

当你修改字段时，你可以指定是否包含值或者是否设置默认值。

以下实例，指定字段 j 为 NOT NULL 且默认值为100 。

```mysql
mysql> ALTER TABLE testalter_tbl 
    -> MODIFY j BIGINT NOT NULL DEFAULT 100;
```

如果你不设置默认值，MySQL会自动设置该字段默认为 NULL。



## 修改字段默认值

你可以使用 ALTER 来修改字段的默认值，尝试以下实例：

```mysql
mysql> ALTER TABLE testalter_tbl ALTER i SET DEFAULT 1000;
mysql> SHOW COLUMNS FROM testalter_tbl;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| c     | char(1) | YES  |     | NULL    |       |
| i     | int(11) | YES  |     | 1000    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

你也可以使用 ALTER 命令及 DROP子句来删除字段的默认值，如下实例：

```mysql
mysql> ALTER TABLE testalter_tbl ALTER i DROP DEFAULT;
mysql> SHOW COLUMNS FROM testalter_tbl;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| c     | char(1) | YES  |     | NULL    |       |
| i     | int(11) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)
Changing a Table Type:
```

修改数据表类型，可以使用 ALTER 命令及 TYPE 子句来完成。尝试以下实例，我们将表 testalter_tbl 的类型修改为 MYISAM 

## 修改表名

如果需要修改数据表的名称，可以在 ALTER TABLE 语句中使用 RENAME 子句来实现。

尝试以下实例将数据表 testalter_tbl 重命名为 alter_tbl：

```mysql
mysql> ALTER TABLE testalter_tbl RENAME TO alter_tbl;
```

ALTER 命令还可以用来创建及删除MySQL数据表的索引。



----

# MySQL 索引

MySQL索引的建立对于MySQL的高效运行是很重要的，索引可以大大提高MySQL的检索速度。

拿汉语字典的目录页（索引）打比方，我们可以按拼音、笔画、偏旁部首等排序的目录（索引）快速查找到需要的字。

索引分单列索引和组合索引。单列索引，即一个索引只包含单个列，一个表可以有多个单列索引，但这不是组合索引。组合索引，即一个索引包含多个列。

创建索引时，你需要确保该索引是应用在 SQL 查询语句的条件(一般作为 WHERE 子句的条件)。

实际上，索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录。

上面都在说使用索引的好处，但过多的使用索引将会造成滥用。因此索引也会有它的缺点：虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件。

建立索引会占用磁盘空间的索引文件。

## 普通索引

### 创建索引

这是最基本的索引，它没有任何限制。它有以下几种创建方式：

```mysql
CREATE INDEX indexName ON table_name (column_name)
```

如果是CHAR，VARCHAR类型，length可以小于字段实际长度；如果是BLOB和TEXT类型，必须指定 length。

### 修改表结构(添加索引)

```mysql
ALTER table tableName ADD INDEX indexName(columnName)
```

### 创建表的时候直接指定

```mysql
CREATE TABLE mytable(  
 
ID INT NOT NULL,   
 
username VARCHAR(16) NOT NULL,  
 
INDEX [indexName] (username(length))  
 
);  
```

### 删除索引的语法

```mysql
DROP INDEX [indexName] ON mytable; 
```



## 唯一索引

它与前面的普通索引类似，不同的就是：索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。它有以下几种创建方式：

### 创建索引

```mysql
CREATE UNIQUE INDEX indexName ON mytable(username(length)) 
```

### 修改表结构

```mysql
ALTER table mytable ADD UNIQUE [indexName] (username(length))
```

### 创建表的时候直接指定

```mysql
CREATE TABLE mytable(  
 
ID INT NOT NULL,   
 
username VARCHAR(16) NOT NULL,  
 
UNIQUE [indexName] (username(length))  
 
);  
```



## 使用ALTER 命令添加和删除索引

有四种方式来添加数据表的索引：

- `ALTER TABLE tbl_name ADD PRIMARY KEY (column_list)`: 该语句添加一个主键，这意味着索引值必须是唯一的，且不能为NULL。
- `ALTER TABLE tbl_name ADD UNIQUE index_name (column_list)`: 这条语句创建索引的值必须是唯一的（除了NULL外，NULL可能会出现多次）。
- `ALTER TABLE tbl_name ADD INDEX index_name (column_list)`: 添加普通索引，索引值可出现多次。
- `ALTER TABLE tbl_name ADD FULLTEXT index_name (column_list)`:该语句指定了索引为 FULLTEXT ，用于全文索引。

以下实例为在表中添加索引。

```mysql
mysql> ALTER TABLE testalter_tbl ADD INDEX (c);
```

你还可以在 ALTER 命令中使用 DROP 子句来删除索引。尝试以下实例删除索引:

```mysql
mysql> ALTER TABLE testalter_tbl DROP INDEX c;
```

------

## 使用 ALTER 命令添加和删除主键

主键作用于列上（可以一个列或多个列联合主键），添加主键索引时，你需要确保该主键默认不为空（NOT NULL）。实例如下：

```mysql
mysql> ALTER TABLE testalter_tbl MODIFY i INT NOT NULL;
mysql> ALTER TABLE testalter_tbl ADD PRIMARY KEY (i);
```

你也可以使用 ALTER 命令删除主键：

```mysql
mysql> ALTER TABLE testalter_tbl DROP PRIMARY KEY;
```

删除主键时只需指定PRIMARY KEY，但在删除索引时，你必须知道索引名。

------

## 显示索引信息

你可以使用 SHOW INDEX 命令来列出表中的相关的索引信息。可以通过添加 \G 来格式化输出信息。

尝试以下实例:

```mysql
mysql> SHOW INDEX FROM table_name\G
........
```



----

# MySQL 临时表

MySQL 临时表在我们需要保存一些临时数据时是非常有用的。临时表只在当前连接可见，当关闭连接时，Mysql会自动删除表并释放所有空间。

临时表在MySQL 3.23版本中添加，如果你的MySQL版本低于 3.23版本就无法使用MySQL的临时表。不过现在一般很少有再使用这么低版本的MySQL数据库服务了。

MySQL临时表只在当前连接可见，如果你使用PHP脚本来创建MySQL临时表，那每当PHP脚本执行完成后，该临时表也会自动销毁。

如果你使用了其他MySQL客户端程序连接MySQL数据库服务器来创建临时表，那么只有在关闭客户端程序时才会销毁临时表，当然你也可以手动销毁。

## 创建MySQL 临时表

以下展示了使用MySQL 临时表的简单实例，以下的SQL代码可以适用于PHP脚本的mysql_query()函数。

```mysql
mysql> CREATE TEMPORARY TABLE SalesSummary (
    -> product_name VARCHAR(50) NOT NULL
    -> , total_sales DECIMAL(12,2) NOT NULL DEFAULT 0.00
    -> , avg_unit_price DECIMAL(7,2) NOT NULL DEFAULT 0.00
    -> , total_units_sold INT UNSIGNED NOT NULL DEFAULT 0
);
Query OK, 0 rows affected (0.00 sec)

mysql> INSERT INTO SalesSummary
    -> (product_name, total_sales, avg_unit_price, total_units_sold)
    -> VALUES
    -> ('cucumber', 100.25, 90, 2);

mysql> SELECT * FROM SalesSummary;
+--------------+-------------+----------------+------------------+
| product_name | total_sales | avg_unit_price | total_units_sold |
+--------------+-------------+----------------+------------------+
| cucumber     |      100.25 |          90.00 |                2 |
+--------------+-------------+----------------+------------------+
1 row in set (0.00 sec)
```

当你使用 **SHOW TABLES**命令显示数据表列表时，你将无法看到 SalesSummary表。

如果你退出当前MySQL会话，再使用 **SELECT**命令来读取原先创建的临时表数据，那你会发现数据库中没有该表的存在，因为在你退出时该临时表已经被销毁了。

------

## 删除MySQL 临时表

默认情况下，当你断开与数据库的连接后，临时表就会自动被销毁。当然你也可以在当前MySQL会话使用 **DROP TABLE** 命令来手动删除临时表。

以下是手动删除临时表的实例：

```mysql
mysql> CREATE TEMPORARY TABLE SalesSummary (
    -> product_name VARCHAR(50) NOT NULL
    -> , total_sales DECIMAL(12,2) NOT NULL DEFAULT 0.00
    -> , avg_unit_price DECIMAL(7,2) NOT NULL DEFAULT 0.00
    -> , total_units_sold INT UNSIGNED NOT NULL DEFAULT 0
);
Query OK, 0 rows affected (0.00 sec)

mysql> INSERT INTO SalesSummary
    -> (product_name, total_sales, avg_unit_price, total_units_sold)
    -> VALUES
    -> ('cucumber', 100.25, 90, 2);

mysql> SELECT * FROM SalesSummary;
+--------------+-------------+----------------+------------------+
| product_name | total_sales | avg_unit_price | total_units_sold |
+--------------+-------------+----------------+------------------+
| cucumber     |      100.25 |          90.00 |                2 |
+--------------+-------------+----------------+------------------+
1 row in set (0.00 sec)
mysql> DROP TABLE SalesSummary;
mysql>  SELECT * FROM SalesSummary;
ERROR 1146: Table 'RUNOOB.SalesSummary' doesn't exist
```



----

# MySQL 复制表

如果我们需要完全的复制MySQL的数据表，包括表的结构，索引，默认值等。 如果仅仅使用**CREATE TABLE ... SELECT** 命令，是无法实现的。

本章节将为大家介绍如何完整的复制MySQL数据表，步骤如下：

- 使用 **SHOW CREATE TABLE** 命令获取创建数据表(**CREATE TABLE**) 语句，该语句包含了原数据表的结构，索引等。
- 复制以下命令显示的SQL语句，修改数据表名，并执行SQL语句，通过以上命令 将完全的复制数据表结构。
- 如果你想复制表的内容，你就可以使用 **INSERT INTO ... SELECT** 语句来实现。



另一种完整复制表的方法:

```
CREATE TABLE targetTable LIKE sourceTable;
INSERT INTO targetTable SELECT * FROM sourceTable;
```

其他:

可以拷贝一个表中其中的一些字段:

```
CREATE TABLE newadmin AS
(
    SELECT username, password FROM admin
)
```

可以将新建的表的字段改名:

```
CREATE TABLE newadmin AS
(  
    SELECT id, username AS uname, password AS pass FROM admin
)
```

可以拷贝一部分数据:

```
CREATE TABLE newadmin AS
(
    SELECT * FROM admin WHERE LEFT(username,1) = 's'
)
```

可以在创建表的同时定义表中的字段信息:

```
CREATE TABLE newadmin
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
)
AS
(
    SELECT * FROM admin
)  
```

----

# MySQL 元数据

# MySQL 元数据

你可能想知道MySQL以下三种信息：

- **查询结果信息：** SELECT, UPDATE 或 DELETE语句影响的记录数。
- **数据库和数据表的信息：** 包含了数据库及数据表的结构信息。
- **MySQL服务器信息：** 包含了数据库服务器的当前状态，版本号等。

在MySQL的命令提示符中，我们可以很容易的获取以上服务器信息。 但如果使用Perl或PHP等脚本语言，你就需要调用特定的接口函数来获取。

## 获取查询语句影响的记录数

### PERL 实例

在 DBI 脚本中， 语句影响的记录数通过函数 do( ) 或 execute( )返回：

```perl
# 方法 1
# 使用do( ) 执行  $query 
my $count = $dbh->do ($query);
# 如果发生错误会输出 0
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);

# 方法 2
# 使用prepare( ) 及 execute( ) 执行  $query 
my $sth = $dbh->prepare ($query);
my $count = $sth->execute ( );
printf "%d 条数据被影响\n", (defined ($count) ? $count : 0);
```

### PHP 实例

在PHP中，你可以使用 mysqli_affected_rows( ) 函数来获取查询语句影响的记录数。

```php
$result_id = mysqli_query ($conn_id, $query);
# 如果查询失败返回 
$count = ($result_id ? mysqli_affected_rows ($conn_id) : 0);
print ("$count 条数据被影响\n");
```

------

## 数据库和数据表列表

你可以很容易的在MySQL服务器中获取数据库和数据表列表。 如果你没有足够的权限，结果将返回 null。

你也可以使用 SHOW TABLES 或 SHOW DATABASES 语句来获取数据库和数据表列表。

### PERL 实例

```perl
# 获取当前数据库中所有可用的表。
my @tables = $dbh->tables ( );
foreach $table (@tables ){
   print "表名 $table\n";
}
```

### PHP 实例

以下实例输出 MySQL 服务器上的所有数据库：

## 查看所有数据库

```php
<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
$db_list = mysqli_query($conn, 'SHOW DATABASES');
while ($db = mysqli_fetch_object($db_list))
{
  echo $db->Database . "<br />";
}
mysqli_close($conn);
?>
```



------

## 获取服务器元数据

以下命令语句可以在 MySQL 的命令提示符使用，也可以在脚本中 使用，如PHP脚本。

| 命令               | 描述                      |
| :----------------- | :------------------------ |
| SELECT VERSION( )  | 服务器版本信息            |
| SELECT DATABASE( ) | 当前数据库名 (或者返回空) |
| SELECT USER( )     | 当前用户名                |
| SHOW STATUS        | 服务器状态                |
| SHOW VARIABLES     | 服务器配置变量            |



----

# MySQL 序列使用

MySQL 序列是一组整数：1, 2, 3, ...，由于一张数据表只能有一个字段自增主键， 如果你想实现其他字段也实现自动增加，就可以使用MySQL序列来实现。

## 使用 AUTO_INCREMENT

MySQL 中最简单使用序列的方法就是使用 MySQL AUTO_INCREMENT 来定义序列。

以下实例中创建了数据表 insect， insect 表中 id 无需指定值可实现自动增长。

```mysql
mysql> CREATE TABLE insect
    -> (
    -> id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    -> PRIMARY KEY (id),
    -> name VARCHAR(30) NOT NULL, # type of insect
    -> date DATE NOT NULL, # date collected
    -> origin VARCHAR(30) NOT NULL # where collected
);
```

## 获取AUTO_INCREMENT值

在MySQL的客户端中你可以使用 SQL中的LAST_INSERT_ID( ) 函数来获取最后的插入表中的自增列的值。

在PHP或PERL脚本中也提供了相应的函数来获取最后的插入表中的自增列的值。

### PERL实例

使用 mysql_insertid 属性来获取 AUTO_INCREMENT 的值。 实例如下：

```perl
$dbh->do ("INSERT INTO insect (name,date,origin)
VALUES('moth','2001-09-14','windowsill')");
my $seq = $dbh->{mysql_insertid};
```

### PHP实例

PHP 通过 mysql_insert_id ()函数来获取执行的插入SQL语句中 AUTO_INCREMENT列的值。

```php
mysql_query ("INSERT INTO insect (name,date,origin)
VALUES('moth','2001-09-14','windowsill')", $conn_id);
$seq = mysql_insert_id ($conn_id);
```

------

## 重置序列

如果你删除了数据表中的多条记录，并希望对剩下数据的AUTO_INCREMENT列进行重新排列，那么你可以通过删除自增的列，然后重新添加来实现。 不过该操作要非常小心，如果在删除的同时又有新记录添加，有可能会出现数据混乱。操作如下所示：

```mysql
mysql> ALTER TABLE insect DROP id;
mysql> ALTER TABLE insect
    -> ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT FIRST,
    -> ADD PRIMARY KEY (id);
```

## 设置序列的开始值

一般情况下序列的开始值为1，但如果你需要指定一个开始值100，那我们可以通过以下语句来实现：

```mysql
mysql> CREATE TABLE insect
    -> (
    -> id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    -> PRIMARY KEY (id),
    -> name VARCHAR(30) NOT NULL, 
    -> date DATE NOT NULL,
    -> origin VARCHAR(30) NOT NULL
)engine=innodb auto_increment=100 charset=utf8;
```

或者你也可以在表创建成功后，通过以下语句来实现：

```mysql
mysql> ALTER TABLE t AUTO_INCREMENT = 100;
```



----

# MySQL 处理重复数据

有些 MySQL 数据表中可能存在重复的记录，有些情况我们允许重复数据的存在，但有时候我们也需要删除这些重复的数据。

## 防止表中出现重复数据

你可以在 MySQL 数据表中设置指定的字段为 **PRIMARY KEY（主键）** 或者 **UNIQUE（唯一）** 索引来保证数据的唯一性。



让我们尝试一个实例：下表中无索引及主键，所以该表允许出现多条重复记录。

```mysql
CREATE TABLE person_tbl
(
    first_name CHAR(20),
    last_name CHAR(20),
    sex CHAR(10)
);
```

如果你想设置表中字段 first_name，last_name 数据不能重复，你可以设置双主键模式来设置数据的唯一性， 如果你设置了双主键，那么那个键的默认值不能为 NULL，可设置为 NOT NULL。如下所示：

```mysql
CREATE TABLE person_tbl
(
   first_name CHAR(20) NOT NULL,
   last_name CHAR(20) NOT NULL,
   sex CHAR(10),
   PRIMARY KEY (last_name, first_name)
);
```

如果我们设置了唯一索引，那么在插入重复数据时，SQL 语句将无法执行成功,并抛出错。

INSERT IGNORE INTO 与 INSERT INTO 的区别就是 INSERT IGNORE INTO 会忽略数据库中已经存在的数据，如果数据库没有数据，就插入新的数据，如果有数据的话就跳过这条数据。这样就可以保留数据库中已经存在数据，达到在间隙中插入数据的目的。

以下实例使用了 INSERT IGNORE INTO，执行后不会出错，也不会向数据表中插入重复数据：

```mysql
mysql> INSERT IGNORE INTO person_tbl (last_name, first_name)
    -> VALUES( 'Jay', 'Thomas');
Query OK, 1 row affected (0.00 sec)
mysql> INSERT IGNORE INTO person_tbl (last_name, first_name)
    -> VALUES( 'Jay', 'Thomas');
Query OK, 0 rows affected (0.00 sec)
```

INSERT IGNORE INTO 当插入数据时，在设置了记录的唯一性后，如果插入重复数据，将不返回错误，只以警告形式返回。 而 REPLACE INTO 如果存在 primary 或 unique 相同的记录，则先删除掉。再插入新记录。

另一种设置数据的唯一性方法是添加一个 UNIQUE 索引，如下所示：

```mysql
CREATE TABLE person_tbl
(
   first_name CHAR(20) NOT NULL,
   last_name CHAR(20) NOT NULL,
   sex CHAR(10),
   UNIQUE (last_name, first_name)
);
```

------

## 统计重复数据

以下我们将统计表中 first_name 和 last_name的重复记录数：

```mysql
mysql> SELECT COUNT(*) as repetitions, last_name, first_name
    -> FROM person_tbl
    -> GROUP BY last_name, first_name
    -> HAVING repetitions > 1;
```

以上查询语句将返回 person_tbl 表中重复的记录数。 一般情况下，查询重复的值，请执行以下操作：

- 确定哪一列包含的值可能会重复。
- 在列选择列表使用COUNT(*)列出的那些列。
- 在GROUP BY子句中列出的列。
- HAVING子句设置重复数大于1。

------

## 过滤重复数据

如果你需要读取不重复的数据可以在 SELECT 语句中使用 DISTINCT 关键字来过滤重复数据。

```mysql
mysql> SELECT DISTINCT last_name, first_name
    -> FROM person_tbl;
```

你也可以使用 GROUP BY 来读取数据表中不重复的数据：

```mysql
mysql> SELECT last_name, first_name
    -> FROM person_tbl
    -> GROUP BY (last_name, first_name);
```

------

## 删除重复数据

如果你想删除数据表中的重复数据，你可以使用以下的SQL语句：

```mysql
mysql> CREATE TABLE tmp SELECT last_name, first_name, sex FROM person_tbl  GROUP BY (last_name, first_name, sex);
mysql> DROP TABLE person_tbl;
mysql> ALTER TABLE tmp RENAME TO person_tbl;
```

当然你也可以在数据表中添加 INDEX（索引） 和 PRIMAY KEY（主键）这种简单的方法来删除表中的重复记录。方法如下：

```mysql
mysql> ALTER IGNORE TABLE person_tbl
    -> ADD PRIMARY KEY (last_name, first_name);
```



----

# MySQL 及 SQL 注入

如果您通过网页获取用户输入的数据并将其插入一个MySQL数据库，那么就有可能发生SQL注入安全的问题。

所谓SQL注入，就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

我们永远不要信任用户的输入，我们必须认定用户输入的数据都是不安全的，我们都需要对用户输入的数据进行过滤处理。

以下实例中，输入的用户名必须为字母、数字及下划线的组合，且用户名长度为 8 到 20 个字符之间：

```php
if (preg_match("/^\w{8,20}$/", $_GET['username'], $matches))
{
   $result = mysqli_query($conn, "SELECT * FROM users 
                          WHERE username=$matches[0]");
}
 else 
{
   echo "username 输入异常";
}
```

让我们看下在没有过滤特殊字符时，出现的SQL情况：

```php
// 设定$name 中插入了我们不需要的SQL语句
$name = "Qadir'; DELETE FROM users;";
 mysqli_query($conn, "SELECT * FROM users WHERE name='{$name}'");
```

以上的注入语句中，我们没有对 $name 的变量进行过滤，$name 中插入了我们不需要的SQL语句，将删除 users 表中的所有数据。

在PHP中的 mysqli_query() 是不允许执行多个 SQL 语句的，但是在 SQLite 和 PostgreSQL 是可以同时执行多条SQL语句的，所以我们对这些用户的数据需要进行严格的验证。

防止SQL注入，我们需要注意以下几个要点：

- 1.永远不要信任用户的输入。对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和 双"-"进行转换等。
- 2.永远不要使用动态拼装sql，可以使用参数化的sql或者直接使用存储过程进行数据查询存取。
- 3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
- 4.不要把机密信息直接存放，加密或者hash掉密码和敏感的信息。
- 5.应用的异常信息应该给出尽可能少的提示，最好使用自定义的错误信息对原始错误信息进行包装
- 6.sql注入的检测方法一般采取辅助软件或网站平台来检测，软件一般采用sql注入检测工具jsky，网站平台就有亿思网站安全平台检测工具。MDCSOFT SCAN等。采用MDCSOFT-IPS可以有效的防御SQL注入，XSS攻击等。

------

## 防止SQL注入

在脚本语言，如Perl和PHP你可以对用户输入的数据进行转义从而来防止SQL注入。

PHP的MySQL扩展提供了mysqli_real_escape_string()函数来转义特殊的输入字符。

```php
if (get_magic_quotes_gpc()) 
{
  $name = stripslashes($name);
}
$name = mysqli_real_escape_string($conn, $name);
 mysqli_query($conn, "SELECT * FROM users WHERE name='{$name}'");
```

------

## Like语句中的注入

like查询时，如果用户输入的值有"_"和"%"，则会出现这种情况：用户本来只是想查询"abcd_"，查询结果中却有"abcd_"、"abcde"、"abcdf"等等；用户要查询"30%"（注：百分之三十）时也会出现问题。

在PHP脚本中我们可以使用addcslashes()函数来处理以上情况，如下实例：

```php
$sub = addcslashes(mysqli_real_escape_string($conn, "%something_"), "%_");
// $sub == \%something\_
 mysqli_query($conn, "SELECT * FROM messages WHERE subject LIKE '{$sub}%'");
```

addcslashes() 函数在指定的字符前添加反斜杠。

语法格式:

```
addcslashes(string,characters)
```

| 参数       | 描述                                              |
| :--------- | :------------------------------------------------ |
| string     | 必需。规定要检查的字符串。                        |
| characters | 可选。规定受 addcslashes() 影响的字符或字符范围。 |

具体应用可以查看：[PHP addcslashes() 函数](https://www.runoob.com/php/func-string-addcslashes.html)



----

# MySQL 导出数据

MySQL中你可以使用**SELECT...INTO OUTFILE**语句来简单的导出数据到文本文件上。

------

## 使用 SELECT ... INTO OUTFILE 语句导出数据

以下实例中我们将数据表 runoob_tbl 数据导出到 /tmp/runoob.txt 文件中:

```
mysql> SELECT * FROM runoob_tbl 
    -> INTO OUTFILE '/tmp/runoob.txt';
```

你可以通过命令选项来设置数据输出的指定格式，以下实例为导出 CSV 格式：

```
mysql> SELECT * FROM passwd INTO OUTFILE '/tmp/runoob.txt'
    -> FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    -> LINES TERMINATED BY '\r\n';
```

在下面的例子中，生成一个文件，各值用逗号隔开。这种格式可以被许多程序使用。

```
SELECT a,b,a+b INTO OUTFILE '/tmp/result.text'
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM test_table;
```

### SELECT ... INTO OUTFILE 语句有以下属性:

- LOAD DATA INFILE是SELECT ... INTO OUTFILE的逆操作，SELECT句法。为了将一个数据库的数据写入一个文件，使用SELECT ... INTO OUTFILE，为了将文件读回数据库，使用LOAD DATA INFILE。
- SELECT...INTO OUTFILE 'file_name'形式的SELECT可以把被选择的行写入一个文件中。该文件被创建到服务器主机上，因此您必须拥有FILE权限，才能使用此语法。
- 输出不能是一个已存在的文件。防止文件数据被篡改。
- 你需要有一个登陆服务器的账号来检索文件。否则 SELECT ... INTO OUTFILE 不会起任何作用。
- 在UNIX中，该文件被创建后是可读的，权限由MySQL服务器所拥有。这意味着，虽然你就可以读取该文件，但可能无法将其删除。

------

## 导出表作为原始数据

**mysqldump** 是 mysql 用于转存储数据库的实用程序。它主要产生一个 SQL 脚本，其中包含从头重新创建数据库所必需的命令 CREATE TABLE INSERT 等。

使用 **mysqldump** 导出数据需要使用 **--tab** 选项来指定导出文件指定的目录，该目标必须是可写的。

以下实例将数据表 runoob_tbl 导出到 /tmp 目录中：

```
$ mysqldump -u root -p --no-create-info \
            --tab=/tmp RUNOOB runoob_tbl
password ******
```

------

## 导出 SQL 格式的数据

导出 SQL 格式的数据到指定文件，如下所示：

```
$ mysqldump -u root -p RUNOOB runoob_tbl > dump.txt
password ******
```

如果你需要导出整个数据库的数据，可以使用以下命令：

```
$ mysqldump -u root -p RUNOOB > database_dump.txt
password ******
```

如果需要备份所有数据库，可以使用以下命令：

```
$ mysqldump -u root -p --all-databases > database_dump.txt
password ******
```

--all-databases 选项在 MySQL 3.23.12 及以后版本加入。

该方法可用于实现数据库的备份策略。

------

## 将数据表及数据库拷贝至其他主机

如果你需要将数据拷贝至其他的 MySQL 服务器上, 你可以在 mysqldump 命令中指定数据库名及数据表。

在源主机上执行以下命令，将数据备份至 dump.txt 文件中:

```
$ mysqldump -u root -p database_name table_name > dump.txt
password *****
```

如果完整备份数据库，则无需使用特定的表名称。

如果你需要将备份的数据库导入到MySQL服务器中，可以使用以下命令，使用以下命令你需要确认数据库已经创建：

```
$ mysql -u root -p database_name < dump.txt
password *****
```

你也可以使用以下命令将导出的数据直接导入到远程的服务器上，但请确保两台服务器是相通的，是可以相互访问的：

```
$ mysqldump -u root -p database_name \
       | mysql -h other-host.com database_name
```

以上命令中使用了管道来将导出的数据导入到指定的远程主机上。



----

# MySQL 导入数据

## 1、mysql 命令导入

使用 mysql 命令导入语法格式为：

```
mysql -u用户名    -p密码    <  要导入的数据库数据(runoob.sql)
```

**实例：**

```
# mysql -uroot -p123456 < runoob.sql
```

以上命令将将备份的整个数据库 runoob.sql 导入。

------

## 2、source 命令导入

source 命令导入数据库需要先登录到数库终端：

```
mysql> create database abc;      # 创建数据库
mysql> use abc;                  # 使用已创建的数据库 
mysql> set names utf8;           # 设置编码
mysql> source /home/abc/abc.sql  # 导入备份数据库
```

------

## 3、使用 LOAD DATA 导入数据

MySQL 中提供了LOAD DATA INFILE语句来插入数据。 以下实例中将从当前目录中读取文件 dump.txt ，将该文件中的数据插入到当前数据库的 mytbl 表中。

```
mysql> LOAD DATA LOCAL INFILE 'dump.txt' INTO TABLE mytbl;
```

　如果指定LOCAL关键词，则表明从客户主机上按路径读取文件。如果没有指定，则文件在服务器上按路径读取文件。

你能明确地在LOAD DATA语句中指出列值的分隔符和行尾标记，但是默认标记是定位符和换行符。

两个命令的 FIELDS 和 LINES 子句的语法是一样的。两个子句都是可选的，但是如果两个同时被指定，FIELDS 子句必须出现在 LINES 子句之前。

如果用户指定一个 FIELDS 子句，它的子句 （TERMINATED BY、[OPTIONALLY] ENCLOSED BY 和 ESCAPED BY) 也是可选的，不过，用户必须至少指定它们中的一个。

```
mysql> LOAD DATA LOCAL INFILE 'dump.txt' INTO TABLE mytbl
  -> FIELDS TERMINATED BY ':'
  -> LINES TERMINATED BY '\r\n';
```

LOAD DATA 默认情况下是按照数据文件中列的顺序插入数据的，如果数据文件中的列与插入表中的列不一致，则需要指定列的顺序。

如，在数据文件中的列顺序是 a,b,c，但在插入表的列顺序为b,c,a，则数据导入语法如下：

```
mysql> LOAD DATA LOCAL INFILE 'dump.txt' 
    -> INTO TABLE mytbl (b, c, a);
```

------

## 4、使用 mysqlimport 导入数据

mysqlimport 客户端提供了 LOAD DATA INFILEQL 语句的一个命令行接口。mysqlimport 的大多数选项直接对应 LOAD DATA INFILE 子句。

从文件 dump.txt 中将数据导入到 mytbl 数据表中, 可以使用以下命令：

```
$ mysqlimport -u root -p --local mytbl dump.txt
password *****
```

mysqlimport 命令可以指定选项来设置指定格式,命令语句格式如下：

```
$ mysqlimport -u root -p --local --fields-terminated-by=":" \
   --lines-terminated-by="\r\n"  mytbl dump.txt
password *****
```

mysqlimport 语句中使用 --columns 选项来设置列的顺序：

```
$ mysqlimport -u root -p --local --columns=b,c,a \
    mytbl dump.txt
password *****
```



----

# MySQL 函数

MySQL 有很多内置的函数



----

# MySQL 运算符

## 算术运算符

MySQL 支持的算术运算符包括:

| 运算符   | 作用 |
| :------- | :--- |
| +        | 加法 |
| -        | 减法 |
| *        | 乘法 |
| / 或 DIV | 除法 |
| % 或 MOD | 取余 |

在除法运算和模运算中，如果除数为0，将是非法除数，返回结果为NULL。

## 比较运算符

SELECT 语句中的条件语句经常要使用比较运算符。通过这些比较运算符，可以判断表中的哪些记录是符合条件的。比较结果为真，则返回 1，为假则返回 0，比较结果不确定则返回 NULL。



| 符号            | 描述                       | 备注                                                         |
| :-------------- | :------------------------- | :----------------------------------------------------------- |
| =               | 等于                       |                                                              |
| <>, !=          | 不等于                     |                                                              |
| >               | 大于                       |                                                              |
| <               | 小于                       |                                                              |
| <=              | 小于等于                   |                                                              |
| >=              | 大于等于                   |                                                              |
| BETWEEN         | 在两值之间                 | >=min&&<=max                                                 |
| NOT BETWEEN     | 不在两值之间               |                                                              |
| IN              | 在集合中                   |                                                              |
| NOT IN          | 不在集合中                 |                                                              |
| <=>             | 严格比较两个NULL值是否相等 | 两个操作码均为NULL时，其所得值为1；而当一个操作码为NULL时，其所得值为0 |
| LIKE            | 模糊匹配                   |                                                              |
| REGEXP 或 RLIKE | 正则式匹配                 |                                                              |
| IS NULL         | 为空                       |                                                              |
| IS NOT NULL     | 不为空                     |                                                              |

## 逻辑运算符

逻辑运算符用来判断表达式的真假。如果表达式是真，结果返回 1。如果表达式是假，结果返回 0。

| 运算符号 | 作用     |
| :------- | :------- |
| NOT 或 ! | 逻辑非   |
| AND      | 逻辑与   |
| OR       | 逻辑或   |
| XOR      | 逻辑异或 |

## 位运算符

位运算符是在二进制数上进行计算的运算符。位运算会先将操作数变成二进制数，进行位运算。然后再将计算结果从二进制数变回十进制数。

| 运算符号 | 作用     |
| :------- | :------- |
| &        | 按位与   |
| \|       | 按位或   |
| ^        | 按位异或 |
| !        | 取反     |
| <<       | 左移     |
| >>       | 右移     |

## 运算符优先级

最低优先级为： **:=**。

![img](https://www.runoob.com/wp-content/uploads/2018/11/1011652-20170416163043227-1936139924.png)

最高优先级为： **!**、**BINARY**、 **COLLATE**。



-----

