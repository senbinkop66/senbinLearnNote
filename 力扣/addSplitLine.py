
f1=open("力扣算法.md","r",encoding="utf-8")

lines=f1.readlines()

f2=open("力扣算法2.md","w",encoding="utf-8")

for line in lines:
	if line.startswith("##"):
		f2.write("\n---\n")
	f2.write(line)