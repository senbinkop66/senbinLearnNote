

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```

```
mounted(){
                let newStr=localStorage.getItem("gmmd_data");
                console.log("before",newStr);
                if (newStr!==null) {
                    newStr=newStr.split("|");
                    this.showComputedatasets=newStr;
                }
            },
            watch:{
                showComputedatasets:{
                    handler(newValue){
                        if (this.showComputedatasets.length>0) {
                            let newStr=this.showComputedatasets.join("|");
                            localStorage.setItem("gmmd_data",newStr);
                            console.log(localStorage.getItem("gmmd_data"));
                        }
                    }
                }
            }
```

```
    <script type="text/javascript">
        //Vue.config.productionTip=false  //设置为 false 以阻止 vue 在启动时生成生产提示。
        console.log("userSubmit");
        var userSubmit=[
        <?php 
            if (count($phylums2)>0) {
                for ($i=0; $i < count($phylums2); $i++) {
                    echo '"'.$phylums2[$i].'",';
                }
            }
         ?>
         ];
        console.log(userSubmit);
    </script>
```

