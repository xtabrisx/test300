$(document).ready(function($) {
		
	var winHeight = $(window).height();
	console.log(winHeight);
	$(".main-screen").height(winHeight);
	$(".col-container").height(winHeight);
	$("img").unveil();
	//alert("test");


});