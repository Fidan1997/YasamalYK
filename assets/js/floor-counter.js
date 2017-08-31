$(document).ready(function($) {
	
	$('.fa-chevron-up').click(function(event) {
		var count = $('.floor_number').html();
		if(count!=9){
			count++;
			$('.floor_number').html(count);
		}
	});

	$('.fa-chevron-down').click(function(event) {
		var count = $('.floor_number').html();
		if(count!=1){
			count--;
			$('.floor_number').html(count);
		}
	});

});