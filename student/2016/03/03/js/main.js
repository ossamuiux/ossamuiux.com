$(document).ready(function(){
	$('.about .con>div:gt(0)').hide();
	$('.list li').click(function(){
		var num=$(this).index();
		//console.log(num);
		$('.about .con>div').hide();
		$('.about .con>div').eq(num).show();
		$('.list li').removeClass('on');
		$(this).addClass('on');
	});
	
	$('.scroll').click(function(){
		$('html,body').animate({scrollTop:1000},1000);
		return false;
	});

	$(window).scroll(function(){
		var height=$(this).scrollTop();
		console.log(height);
		
		if(height>=900){
			$('.con1').animate({opacity:1},1200)
		} else {
		}
		
		if(height>=2500){
			$('.s4_bg').animate({top:-759},4500)
			$('.s4_txt').animate({opacity:1},1200)
		} else {
		}
		
		if(height>=6500){
			$('.beans').addClass('on')
		} else {
			$('.beans').removeClass('on')
		}
		
		if(height>=7900){
			$('.pour').addClass('on')
		} else {
			$('.pour').removeClass('on')
		}
	});
	
	//skill 클릭시 바뀜
	$('.skill .drop a').click(function(e){
		e.preventDefault();
		$('.skill_wrap').hide();
		$('.skill2_wrap').fadeIn();
	});
	
	
	
	
	$('.coffeebean').mouseenter(function(){
		$(this).find('.cover').stop().fadeIn();
	});
	
	$('.coffeebean').mouseleave(function(){
		$(this).find('.cover').stop().fadeOut();
	});
});
