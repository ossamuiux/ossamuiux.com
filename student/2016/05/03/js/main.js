$(document).ready(function(){
		$('.menu_click li').click(function(e){
			e.preventDefault();
		var num=$(this).index();		
		if(num==0){
			$('html,body').animate({scrollTop:0});
			$('.menu_click li').removeClass('on');
			$('.menu_click li').eq(0).addClass('on');
		} else if(num==1){
			$('html,body').animate({scrollTop:980});
			$('.menu_click li').removeClass('on');
			$('.menu_click li').eq(1).addClass('on');
		} else if(num==2){
			$('html,body').animate({scrollTop:1960});
			$('.menu_click li').removeClass('on');
			$('.menu_click li').eq(2).addClass('on');
			} else if(num==3){
			$('html,body').animate({scrollTop:2940});
			$('.menu_click li').removeClass('on');
			$('.menu_click li').eq(3).addClass('on');
		}else {
			$('html,body').animate({scrollTop:3920});
			$('.menu_click li').removeClass('on');
			$('.menu_click li').eq(4).addClass('on');
		}
	});
	
		$('.quick_btn li').click(function(e){ //퀵메뉴 버튼 on 처리 및 화면 이동
		e.preventDefault();
		var num=$(this).index();	
		
		if(num==0){
			$('html,body').animate({scrollTop:0});
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn1').addClass('on');
		} else if(num==1){
			$('html,body').animate({scrollTop:980});
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn2').addClass('on');
		} else if(num==2){
			$('html,body').animate({scrollTop:1960});
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn3').addClass('on');
		} else if(num==3){
			$('html,body').animate({scrollTop:2940});
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn4').addClass('on');
		}else {
			$('html,body').animate({scrollTop:3920});
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn5').addClass('on');
		}
	}); //퀵메뉴 버튼 on 처리 및 화면 이동
	
		$(window).scroll(function(){ //스크롤시 on 처리
			var num1=$(this).scrollTop();
			if(num1>=0 && num1<980){
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn1').addClass('on');
		}else if(num1>=980 && num1<1960){
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn2').addClass('on');
		}else if(num1>=1960 && num1<2940){
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn3').addClass('on');
		}else if(num1>=2940 && num1<3920) {
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn4').addClass('on');
		}else{
			$('.section2 .quick_btn li a').removeClass('on');
			$('.section2 .quick_btn5').addClass('on');
		}
		if(num1<3920){
			$('.wanted_on').stop().fadeOut(0);
			
		}else{
			$('.wanted_on').stop().fadeIn(300).animate({top:290,opacity:1});	
		}
	});
	
		$('.section2 .down_btn').click(function(){
			$('html,body').animate({scrollTop:980});
	});

	var sw=true;
	$('.section3 .click_menu').click(function(){
		sw=!sw;
		if(sw==true){
			$(this).css('background-image','url(images/click_button.png)');
			$('.section3 .se3_menu').stop(true,true).css({'opacity':'0','display':'none'});
		}else{
			$(this).css('background-image','url(images/click_button_2.png)');
			$('.section3 .se3_menu1').show().animate({'opacity':'1'});
			$('.section3 .se3_menu2').show().delay(300).animate({'opacity':'1'});
			$('.section3 .se3_menu3').show().delay(600).animate({'opacity':'1'});
			$('.section3 .se3_menu4').show().delay(900).animate({'opacity':'1'});
		}
	});
	
		$('.menu_wrap .se3_menu').click(function(e){
		e.preventDefault();
		var num=$(this).index();
		
		$('.click_modal').fadeIn();
		$('.click_modal li').eq(num).show();
	});
	
	$('.click_modal .btn_close').click(function(){
		$('.click_modal').hide();
		$('.click_modal li').hide();
	});

	$('.logo_bg').addClass('on' ,function(){
		$('.section1').delay(1800).fadeOut(function(){
		$('.section2 .tit').fadeIn(570).animate({top:290,opacity:1},100)
		});
	});
	
		$('.why_plan').click(function(e){
		e.preventDefault();
		$('.re_modal').fadeIn();
		$('.re_modal h3').show();
	});
	
	$('.re_modal .re_btn_close').click(function(){
		$('.re_modal').hide();
		$('.re_modal h3').hide();
	});
	
	var sw2=true;
	$('.menu_btn').click(function(e){
		e.preventDefault();
		sw2=!sw2;
		if(sw2==false){
			$(this).addClass('on');
			$('.menu_click').animate({left:0});
			$('.menu').css('background-image','none');
		}else{		
			$(this).removeClass('on');
			$('.menu_click').animate({left:-230});
			$('.menu').css('background-image','url(images/menu.png)');			
		}
	});
	
		$('.wrap .potoshop').mouseenter(function(){
			
			$('.wrap .potoshop h3').show();
		});
		$('.wrap .potoshop a').mouseleave(function(){
			$('.wrap .potoshop h3').hide();
		});
		
		$('.wrap .illust').mouseenter(function(){
			$('.wrap .illust h3').show();
		});
		$('.wrap .illust').mouseleave(function(){
			$('.wrap .illust h3').hide();
		});
		
		$('.bokman_wrap .bokman1').mouseenter(function(){
			$('.bokman_wrap .bokman1 .bokman_p').stop().fadeIn(100).animate({opacity:1});
		});
		$('.bokman_wrap .bokman1').mouseleave(function(){
			$('.bokman_wrap .bokman1 .bokman_p').stop().fadeOut(150);
		});
});







































































