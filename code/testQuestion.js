var before = function( fn, beforefn ){
	return function(){
		beforefn.apply( this, arguments );
		return fn.apply( this, arguments );
	}
}
var after=function(fn,afterfn){
	return function(){
		var ret=fn.apply(this,arguments);
		afterfn.apply(this,arguments);
		return ret;
	}
}

var a = before(
	function(){console.log (3)},
	function(){console.log (2)}
);

a = before( a, function(){console.log (1);} );

a=after(a,function(){console.log(4);});
a();