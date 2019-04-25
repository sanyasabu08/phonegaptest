$(document).ready(function () {

	$("main section").hide();
	
	$("main #b1")
	.hover(function() {
     $("main #b1").animate({ fontSize:35}, 200);
	},function(){
		$("main #b1").animate({ fontSize:25}, 200);
	});
	$("main #b1")
	.click(function(e){
		e.preventDefault(); 
		$(this).next('section').show();
		});

	$("main #b2")
	.hover(function() {
     $("main #b2").animate({ fontSize:35}, 200);
	},function(){
		$("main #b2").animate({ fontSize:25}, 200);
	});
	$("main #b2")
	.click(function(e){
		e.preventDefault(); 
		$(this).next('section').show();
		});

	$("main #b3")
	.hover(function() {
     $("main #b3").animate({ fontSize:30}, 100);
	},function(){
		$("main #b3").animate({ fontSize:25}, 200);
	});
	$("main #b3")
	.click(function(e){
		e.preventDefault(); 
		$(this).next('section').show();
		});

});

