$(document).ready(function(){

	$('a').on('mouseover',function(){
		
		var datas = $(this).attr('data-target');
		var data_array=datas.split('/');

		$(".building_num").html(data_array[0]);
		$(".block_count").html(data_array[1]);
		$(".floor_count").html(data_array[2]);
		$(".selling_float_count").html(data_array[3]);

		var position=$(this).position();
		if(!$(this).hasClass('upper')){
			$('#info-building').css({
				'left':position.left,
				'top':position.top-140,
				'opacity':'1',
			})
		}else{
			$('#info-building').css({
				'left':position.left,
				'top':position.top+100,
				'opacity':'1',
			})
		}

	});

	$('a').on('mouseleave', function(){
		$('#info-building').css('opacity','0');
	});

});



