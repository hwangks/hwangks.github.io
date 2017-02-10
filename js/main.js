var colors = ['#ee8a94', '#f2c08f', '#f5eacc', '#cce0af', '#a7bfe1'];
var ids = $('.table-cell').map(function(){ return this.id }).toArray();
var fadeTime = 1000;
var color = randomColor();
var topic;
var current;

function randomColor(){
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}

function colorCells(current, topic, active){
	// show boxes relevant to clicked box
	if(current && active){
		$('.table-cell:not(#' + current + ')').fadeOut(fadeTime, function(){
			$('.' + topic).show();
			$(this).css('background-color', '#f5f7f4');
			$('.' + topic).each(function(){
				$(this).parent().css('background-color', color);
			})
		}).fadeIn(fadeTime);
	}
	// restore to default
	if(current && !active){
		$('.table-cell:not(#' + current + ')').fadeOut(fadeTime, function(){
			$(this).css('background-color', color);
			$('.info').hide();
		}).fadeIn(fadeTime);
	}
	// color all at page load with random color
	else{
		$('.table-cell').css("background-color", color).fadeIn(fadeTime);
	}
}

$(document).on("click", '.overlay:not(#active)', function(){
	event.stopPropagation();
	current = $(this).parent().attr('id');
	$(this).attr('id','active');
	$('.overlay:not(#active)').each(function(){
		$(this).hide();
	});
	topic = $(this).find('p').text();
	colorCells(current, topic, true);
})

$(document).on("click", '#active', function(){
	event.stopPropagation();
	$(this).removeAttr("id");
	$('.overlay').each(function(){
		$(this).show();
	});
	colorCells(current, topic, false);
})

$(document).ready(function(){
	$('.info').hide();
	$('.table-cell').hide();
	colorCells();
})
