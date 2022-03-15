var Model = function( sex){
   this.sex = sex;
};

Model.prototype.takePhoto = function(){
   console.log( 'sex= ' + this.sex + ' underwear=' + this.underwear);
};

var maleModel=new Model("male");
var femaleModel=new Model("female");


for ( var i = 1; i <= 50; i++ ){
   maleModel.underwear = 'underwear' + i ;
   maleModel.takePhoto();
};

for ( var j = 1; j <= 50; j++ ){
   femaleModel.underwear = 'underwear' + i ;
   femaleModel.takePhoto();
};