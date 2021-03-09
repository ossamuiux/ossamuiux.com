$(document).ready(function(){
	$('.popup_close').click(function(e){
		e.preventDefault();
		
		$('.popup_wrap').slideUp();
	});
	
	$('.reserve_wrap').hide();
	
	$('.header_wrap .quick_btn .reservation').click(function(e){
		e.preventDefault();
		
		$('.reserve_wrap').show();
		$('.reserve').animate({'margin-top':'90px'},700);
	});
	
	$('.reserve_close').click(function(){
		$('.reserve').animate({'margin-top':'-1000px'},700,function(){
			$('.reserve_wrap').hide();
		});
	});
	
	$('.movie_content .m_info .m_txt:gt(0)').hide();
	var num1;
	
	$('.movie_content .m_content li').mouseenter(function(e){
			e.preventDefault();
			
			$('.movie_content .m_txt1').hide();
			$('.movie_content .m_content li').mouseleave(function(){
				$('.movie_content .m_txt1').show();
			});
			
			num1=$(this).index();
			$('.movie_content .m_content li a').removeClass('m_on');
			$(this).find('a').addClass('m_on');
			$('.movie_content .m_info .m_txt').hide();
			$('.movie_content .m_info .m_txt').eq(num1).show();
	});

	$('.cinema_content .sub_content .sub:gt(0)').hide();
	var num2;
	
	$('.cinema_content .gnb li').click(function(e){
			e.preventDefault();
			
			num2=$(this).index();
			$('.cinema_content .gnb li a').removeClass('first');
			$(this).find('a').addClass('first');
			$('.cinema_content .sub_content .sub').hide();
			$('.cinema_content .sub_content .sub').eq(num2).show();
	});

	var num=0;
	
	$('.tit_btn').click(function(e){
		e.preventDefault();
		
		if(num==0){
			$('.familysite ul').show();
			$(this).find('span').addClass('on');
			num=1;
		} else {
			$('.familysite ul').hide();
			$(this).find('span').removeClass('on');
			num=0;
		}
	});
	
	$('.tit_btn').focusout(function(){
		$('.familysite ul').hide();
		$(this).find('span').removeClass('on');
		num=0;
	});
});