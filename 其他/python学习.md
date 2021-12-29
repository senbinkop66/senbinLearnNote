

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

提取GeneBank数据

```python

import os

f1=open("E.coli_BW25113_seq.txt","r",encoding="utf-8")
#f2=open("MG1655result.txt","w",encoding="utf-8")

lines=f1.readlines()  #读取所有行
count=0
for line in lines:
	line=line.strip();
	if line.startswith(">"):
		line=line.split("]")
		print(line[0].replace("[","").replace(" gene=","\t"))
		count+=1
	#if count==5:
		#break

f1.close();

```



标记gene

```python

import os

f1=open("BW25113AllGene.txt","r",encoding="utf-8")
f2=open("BW25113SLGene.txt","r",encoding="utf-8")

SLGenes=[]
SLData=f2.readlines()
for line in SLData:
	SLGenes.append(line.strip())
f2.close()
#print(len(SLGenes))

lines=f1.readlines()  #读取所有行
count=0
for line in lines:
	line=line.strip();
	line=line.split("\t")
	if line[1] in SLGenes:
		print("\t".join(line)+"\t1")
		count+=1
	else:
		print("\t".join(line)+"\t0")
f1.close();
print(count)
```

计数

```python

import os

f1=open("BW25113AllGene.txt","r",encoding="utf-8")
f2=open("BW25113SLGene.txt","r",encoding="utf-8")

SLGenes=[]
SLData=f2.readlines()
for line in SLData:
	SLGenes.append(line.strip())
f2.close()
print(len(SLGenes))

AllGenes=[]
lines=f1.readlines()  #读取所有行

for line in lines:
	line=line.strip();
	line=line.split("\t")
	AllGenes.append(line[1])
f1.close();

count=0

#print(len(AllGenes))

AllGenes=set(AllGenes)
print(len(AllGenes))
for gene in SLGenes:
	if gene not in AllGenes:
		count+=1
		print(gene)

print(count)
```



筛选

```python

import os

f1=open("BW25113AllGene.txt","r",encoding="utf-8")
f2=open("BW25113result.txt","r",encoding="utf-8")
f3=open("BW25113resultofSLgene.txt","w",encoding="utf-8")

AllgeneLines=f1.readlines()  #读取所有行

count=0
lines=f2.readlines()

for line in lines:
	line=line.strip();
	line=line.split("\t")
	index=int(line[4].split("_")[-1])-1
	geneinfo=AllgeneLines[index].split("\t")
	if int(geneinfo[-1])==1:
		#print("\t".join(line)+"\t"+geneinfo[1]+"\n")
		f3.write("\t".join(line)+"\t"+geneinfo[1]+"\n")
		count+=1

f1.close()
f2.close()
f3.close()
print(count)
```

标记是否是联合致死对

```python
import numpy
import csv

allgene=[]	#联合致死基因
SLpairs={}	#所有联合致死基因与之联合致死的所有基因

with open("EcoliBW25.csv",'r') as f:
	data=csv.reader(f)
	result=list(data)	
	for i in range(1,len(result)):
		if result[i][1] not in allgene:
			allgene.append(result[i][1])
		if result[i][2] not in allgene:
			allgene.append(result[i][2])
	for gene in allgene:
		SLgene=[]	#每一个基因与之联合致死的所有基因
		for i in range(1,len(result)):
			if gene==result[i][1]:
				SLgene.append(result[i][2])
			if gene==result[i][2]:
				SLgene.append(result[i][1])
		SLpairs[gene]=SLgene

#print(len(SLpairs))  # 890


#f2=open("BW25113resultofSLgene.txt","r",encoding="utf-8")
#f3=open("BW25113resultofSLPairs.txt","w",encoding="utf-8")

f2=open("BW25113resultofSLgeneAndNoEcoli.txt","r",encoding="utf-8")
f3=open("BW25113resultofSLPairsWithNoEcoli.txt","w",encoding="utf-8")

lines=f2.readlines()

count=0
temgene=[]  #存储一个物种的同源SLgene
tempInfo=[]  #同源SL基因的标识信息
tempsp="Acaryochloris_marina_MBIC11017_uid58167|NC_009925"
for line in lines:
	line=line.strip()
	line=line.split("\t")
	sp=line[0]+"|"+line[1]
	if sp!=tempsp:
		if len(temgene)>1:
			for i in range(len(temgene)):
				geneA=temgene[i]
				SLA=SLpairs[geneA]
				for j in range(i+1,len(temgene)):
					geneB=temgene[j]
					if geneA!=geneB:
						if geneB in SLA:
							count+=1
							f3.write(tempsp+"\t"+tempInfo[i]+"\t"+geneA+"\t"+tempInfo[j]+"\t"+geneB+"\n")
							#print(tempsp+"\t"+geneA+"\t"+geneB)
		tempsp=sp
		temgene=[]
		tempInfo=[]
	temgene.append(line[-1])
	tempInfo.append(line[3])

f2.close()
f3.close()
print(count)

```



读取xlsx数据

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import xlrd
import openpyxl

workbook = openpyxl.load_workbook("Actinomyces cardiffensis F0333.xlsx")
#获取工作簿 workbook的所有工作表
#shenames=workbook.sheetnames

#获取当前活跃的worksheet,默认就是第一个worksheet
worksheet = workbook.active

#输出特定的列
datas=list(worksheet.columns)[0][1:]
for cell in datas:
	print(cell.value,end=" ")
```

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import xlrd
import openpyxl

count=0

def readDirFile(path):
	global count
	files=os.listdir(path)
	for file in files:
		oldFile=os.path.join(path,file)
		if os.path.isfile(oldFile):
			#print(oldFile)
			workbook = openpyxl.load_workbook(oldFile)
			worksheet = workbook.active
			datas=list(worksheet.columns)[0][1:]
			f2=open("OutResult.txt","a+",encoding="utf-8")
			datas=list(worksheet.columns)[0][1:]
			for cell in datas:
				count+=1
				f2.write(oldFile.replace(".xlsx","").replace("shuju\\","")+"\t"+cell.value+"\n")
				#print(oldFile.replace(".xlsx","").replace("shuju\\","")+"\t"+cell.value+"\n")
			f2.close()
		else:
			readDirFile(oldFile)

testpath="shuju"
readDirFile(testpath)
print(count)
```



获取gene信息

```python

import os



def getPTTInfo(filename,LocalInfo):
	fi=open(filename,"r",encoding="utf-8")
	for line in fi.readlines():
		line=line.strip()
		tempInfo=line.split("\t")[0]
		if ".." in tempInfo:
			tempInfo=tempInfo.split("..")
			if tempInfo[0] in LocalInfo and tempInfo[1] in LocalInfo:
				fi.close()
				return line
	fi.close()
	return "null"
def getFFNInfo(filename,LocalInfo):
	fi=open(filename,"r",encoding="utf-8")
	seqInfo=""
	flag=0
	for line in fi.readlines():
		line=line.strip()
		if flag:
			if line.startswith(">"):
				fi.close()
				return seqInfo
			seqInfo+=line
		if line.startswith(">"):
			line=line.split(" ")[0].replace(">","").split(":")[-1]
			if line==LocalInfo:
				flag=1
				continue
	fi.close()
	return "null"



f1=open("./blastdatacontent/BW25113/BW25113resultofSLgeneAndNoEcoli.txt","r",encoding="utf-8")
f2=open("BW25113resultofSLgeneInfo.txt","w",encoding="utf-8")

lines=f1.readlines()  #读取所有行
success=0
failure=0
for line in lines:
	line=line.strip();
	line=line.split("\t");
	locInfo1=line[3].split(":")[-1].replace("c","").split("-")
	locInfo2=line[3].split(":")[-1]
	pttFile=os.path.join("bacteria3type",line[0],line[1]+".ptt")
	ffnFile=os.path.join("bacteria3type",line[0],line[1]+".ffn")
	pttInfo=getPTTInfo(pttFile,locInfo1)
	ffnInfo=getFFNInfo(ffnFile,locInfo2)

	allInfo="\t".join(line)+"\t"+pttInfo+"\t"+ffnInfo+"\n"
	f2.write(allInfo)
	#print(allInfo)
	if pttInfo=="null" or ffnFile=="null":
		failure+=1
	else:
		success+=1

f1.close();
f2.close();

print(success)
print(failure)
```

