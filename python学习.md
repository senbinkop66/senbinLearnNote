

用python实现将文件拷贝到指定目录

安装包shutil

```bash
pip install pytest-shutil
```

导入使用

```python
import shutil

shutil.copyfile(oldname,newname)
```

筛选文件

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import shutil

#shutil.copyfile(oldname,newname)

count=0

def readDirFile(path):
	global count
	files=os.listdir(path)
	for file in files:
		oldFile=os.path.join(path,file)
		if os.path.isfile(oldFile):
			if ".ffn" in file:
				fo=open(oldFile,"r",encoding="utf-8")
				line=fo.readline()  #读取第一行
				#if "plasmid" not in line or "chromosome" in line:
				if "plasmid" not in line and "complete"in line:
					count+=1
					newFile=os.path.join("blastdatacontent",oldFile)
					#print(newFile)
					
					filedata=fo.read();
					if not os.path.exists(os.path.dirname(newFile)):
						os.makedirs(os.path.dirname(newFile))
					fi=open(newFile,"w",encoding="utf-8")
					fi.write(filedata)
					fi.close()
				fo.close()# 关闭文件
		else:
			readDirFile(oldFile)

testpath="bacteria3type"
readDirFile(testpath)
print(count)
```

替换文本内容

```python
import os

#替换文件夹下所有文件中的特定文本

path="datasets2"
files=os.listdir(path) #得到文件夹下的所有文件名称

#http://guolab.whu.edu.cn/

for file in files:
	#断是否是文件夹，不是文件夹才打开
	if not os.path.isdir(file):
		print(file)
		file_data=""
		with open(path+"/"+file,"r",encoding="utf-8") as f1:
			for line in f1:
				file_data+=line
		file1=file.replace(".faa","")
		with open(path+"/"+file1,"w",encoding="utf-8") as f2:
			f2.write(file_data)


```

