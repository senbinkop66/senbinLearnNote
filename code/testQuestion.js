var func = function(){
	outerloop:
	for ( var i = 0; i < 10; i++ ){
		innerloop:
		for ( var j = 0; j < 10; j++ ){
			if ( i * j >30 ){
				break outerloop;
			}
		}
	}
};