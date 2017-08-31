$(document).ready(function($) {
	
	var width = $('#bg-svg').width();
	var height = $('#bg-svg').height();

	var windowHeight=$(window).height();
	$("#bg-svg").height(windowHeight);

	console.log(width+' '+height);

});