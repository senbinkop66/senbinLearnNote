## 创建数据库

```mysql
create database abc;      # 创建数据库
use abc;                  # 使用已创建的数据库
set names utf8;           # 设置编码



```

## 授权

```mysql
use mysql;

create user 'aaa'@'localhost' identified by 'pass';


grant all privileges on database.* to 'aaa'@'localhost';

flush privileges;
```

```mysql
create database gm_em_db;      # 创建数据库

create user 'kxia'@'localhost' identified by 'kingkx';
grant all privileges on gm_em_db.* to 'kxia'@'localhost';

flush privileges;
```



## 创建数据表

```mysql
use microbe_sl_gene_db;  //选择你的数据库
set names utf8;

//创建表
CREATE TABLE blastslbw25113(
   num INT UNSIGNED AUTO_INCREMENT,
   species VARCHAR(100) NOT NULL,
   sp VARCHAR(100) NOT NULL,
   GI_A VARCHAR(100) NOT NULL,
   Gene_A VARCHAR(100) NOT NULL,
   GI_B VARCHAR(100) NOT NULL,
   Gene_B VARCHAR(100) NOT NULL,
   Type VARCHAR(100) NOT NULL,
   PRIMARY KEY (num)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

show tables;
desc blastslbw25113;

drop table blastslbw25113;  //删除数据表
truncate table blastslbw25113;  //清空数据表

```

## 导入导出数据



```mysql
//导入数据
LOAD DATA LOCAL INFILE 'BW25113resultofSLPairsWithNoEcoli2.txt' INTO TABLE blastslbw25113 LINES TERMINATED BY '\r\n';
//导出数据表
mysqldump -u root -p --databases microbe_sl_gene_db --tables blastslbw25113 > blastslbw25113.sql
```

## 设置与更改用户密码

命令:

```pgsql
SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
```

如果是当前登陆用户用:

```pgsql
SET PASSWORD = PASSWORD("newpassword");
```

## 删除用户

命令:

```n1ql
DROP USER 'username'@'host';
```

## 更新mysql

```
mysql_upgrade --force -uroot -p
```

