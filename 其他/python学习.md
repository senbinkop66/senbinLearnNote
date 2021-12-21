

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

遍历序列文件使用blastn比对

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os

count=0

def readDirFile(path):
	global count
	files=os.listdir(path)
	for file in files:
		#blastcmd='makeblastdb -in '+path+"/"+file+' -dbtype prot -parse_seqids -hash_index -out blastdatabase/'+file.replace(".faa","")
		#print(blastcmd)
		#os.system(blastcmd)
		dbs=["B","M","W"]
		newFile=os.path.join(path,file)
		if os.path.isfile(newFile):
			newdir=os.path.join("resultsFile",newFile.split("\\")[-2])
			if not os.path.exists(newdir):
				os.makedirs(newdir)
			for i in range(3):
				resultFile=os.path.join(newdir,os.path.basename(newFile).replace(".ffn","_")+dbs[i]+".txt")
				blastn="blastn -query "+newFile+" -evalue 1e-5 -db "+os.path.join("blastdb",dbs[i])+\
				" -outfmt 6 -out "+resultFile+" -num_threads 8"
				#print(blastn)
				os.system(blastn)
		else:
			readDirFile(newFile)

testpath="bacteria3type"
readDirFile(testpath)
#print(count)

#blastn -query blastseq/$seqFile -evalue $evalue -db blastdb/$dataset -outfmt 6 -out blastresult/$blastResult1 -num_threads 16

```

整合结果到一个文件

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
			os.path.getsize
			if os.path.getsize(oldFile)!=0:
				fo=open(oldFile,"r",encoding="utf-8")
				fi=open("allresultofBlast.txt","a+",encoding="utf-8")
				lines=fo.readlines()  #读取所有行
				for line in lines:
					count+=1
					fi.write(oldFile+"\t"+line.strip()+"\n")
					#print(oldFile+"\t"+line.strip())
				fo.close()# 关闭文件
				fi.close()
		else:
			readDirFile(oldFile)

testpath="resultsFile"
readDirFile(testpath)
print(count)
```



提取内容到不同文件

```python

import os

fi=open("allresultofBlast.txt","r",encoding="utf-8")
f1=open("MG1655result.txt","w",encoding="utf-8")
f2=open("BW25113result.txt","w",encoding="utf-8")
f3=open("yeastS288Cresult.txt","w",encoding="utf-8")
lines=fi.readlines()  #读取所有行
for line in lines:
	line=line.strip();
	line=line.split("\t");
	sp=line[1].split("_")[-1];
	line="\t".join(line)
	if sp=="MG1655":
		f1.write(line+"\n")
	elif sp=="BW25113":
		f2.write(line+"\n")
	else:
		f3.write(line+"\n")

fi.close()
f1.close();
f2.close();
f3.close();
```

