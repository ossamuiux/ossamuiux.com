$(document).ready(function(){
	$('.gnb').mouseenter(function(){		
        $('#header').stop().animate({height:352});
    }).mouseleave(function(){
        $('#header').stop().animate({height:176});
    });
});
