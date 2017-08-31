$(document).ready(function($) {
	
	$('a').on('mouseover', function(event) {

		var data = $(this).attr('data-target');
		var data_array=data.split('|');

		$('#info-bg').css('opacity', '.4');
		$('#info-body').css('opacity', '1');

		$("#info-body .block_num").html(data_array[0]);
		$("#info-body .floor_num").html(data_array[1]);
		$("#info-body .selling_num").html(data_array[2]);


	});

	$('a').on('mouseleave', function(event) {
		$('#info-bg').css('opacity', '0');
		$('#info-body').css('opacity', '0');

	});

});