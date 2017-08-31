$(document).ready(function($) {
	
	var counter = 1;
	var sources = ["url(assets/images/slider/1.jpg)","url(assets/images/slider/2.jpg)","url(assets/images/slider/3.jpg)"];

	function changeBg(){

		$('#slider').css({
			background: sources[counter],
			backgroundSize:'100% 100%',
		});
		if(counter < sources.length){
			counter++;
		}else{
			counter=1;
		}

	}

	$('#slider').css({
		background: sources[0],
		backgroundSize: '100% 100%',
	});

	

	setInterval(changeBg,5000);

});

