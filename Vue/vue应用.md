

## 显示文件与下载文件

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>test</title>
        <script src="https://unpkg.com/vue@3.2.31"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <!-- 引入 echarts.js -->

    </head>
<style type="text/css">
  body {
    margin: 30px;
  }
  .a1{
    margin-right: 100px;
  }

</style>

<body>
<div id="main">
  <ul>
    <li v-for="p in allFiles"><a :href="'./bacteria/'+p" class="a1">{{p}}</a><a :href="'./bacteria/'+p" :download="'./bacteria/'+p">download</a></li>
  </ul>
</div>


<script type="text/javascript">
  const app=Vue.createApp({
      data() {
        return {
              allFiles:[],
            }
      },
      beforeMount(){
        _this=this;
         axios.get("./genomefile.txt").then(
          response=>{
            let requestData=response.data.split(/\r\n|\r|\n/);
            for (let i=0;i<requestData.length;i++){
              _this.allFiles.push(requestData[i].trim());
            }
            console.log(requestData.length);
          },
          error=>{
            console.error(error);
          }
          );
      },
    });
  app.mount("#main");

</script>

    </body>
</html>
```



----

## vue3.0手写省市区地区联动

