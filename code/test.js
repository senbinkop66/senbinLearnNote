const geometry = new THREE.SphereGeometry(100, 25, 25); //创建一个球体几何对象
// 创建一个点材质对象
const material = new THREE.PointsMaterial({
  color: 0x003788, //颜色
  size: 3, //点渲染尺寸
});
//点模型对象  参数：几何体  点材质
const point = new THREE.Points(geometry, material);
scene.add(point); //网格模型添加到场景中