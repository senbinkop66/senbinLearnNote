



```

        const submitPhylums=[
            <?php 
            
                if (isset($_REQUEST['flag1']) && $num>0) {
                    //输出提交的
                    for ($i=0; $i < $num; $i++) {
                        echo $phylums[$i].",";
                    }
                }else{
                    echo "";
                }
             ?>
             
        ];
        
        submitPhylums.forEach((item)=>{
            console.log(item);
        })
```

