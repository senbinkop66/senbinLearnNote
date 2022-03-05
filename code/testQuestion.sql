use databasesName;  //选择你的数据库
set names utf8;

//创建表
CREATE TABLE tableName(
	//自己需要创建的字段
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
desc tableName;

drop table tableName;  //删除数据表
truncate table tableName;  //清空数据表

//导入数据
//
LOAD DATA LOCAL INFILE 'filename.txt' INTO TABLE tableName LINES TERMINATED BY '\r\n';


//导出数据表
mysqldump -u root -p --databases microbe_sl_gene_db --tables tableName > tableName.sql