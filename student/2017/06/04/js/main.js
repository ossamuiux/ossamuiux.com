$(document).ready(function() {
	//앨리먼트의 위치값찾기
	var arr = [];
	
	for(var i=1; i<7; i++){
		arr.push($('.section'+i).offset().top);
	}
	
	
    $(window).scroll(function() {
        var num = $(this).scrollTop();
				
		if(num>=arr[1]){
			//$('#main').css({'position':'fixed','top':0});
			$('.section1').addClass('on');
		} else {
			//$('#main').css({'position':'absolute','top':1277});
			$('.section2').removeClass('on')
		}	{
			//$('#main').css({'position':'absolute','top':2544});
			$('.section3').removeClass('on')
		}	{
			//$('#main').css({'position':'absolute','top':3831});
			$('.section4').removeClass('on')
		}	{
			//$('#main').css({'position':'absolute','top':5108});
			$('.section5').removeClass('on')
		}	{
			//$('#main').css({'position':'absolute','top':6385});
			$('.section6').removeClass('on')
		}
		
		//섹션위치에 따라 페이지버튼 on처리
		if(num>=arr[0] && num<arr[1])	{
			$('.btn_page li').eq(0).addClass('on').siblings().removeClass('on');	
			$('.btn_page').removeClass('on');
		}	else if(num>=arr[1] && num< arr[2])	{
			$('.btn_page li').eq(1).addClass('on').siblings().removeClass('on');
			$('.btn_page').addClass('on');
		}	else if(num>=arr[2] && num< arr[3])	{
			$('.btn_page li').eq(2).addClass('on').siblings().removeClass('on');
			$('.btn_page').removeClass('on');
		}	else if(num>=arr[3] && num< arr[4])	{
			$('.btn_page li').eq(3).addClass('on').siblings().removeClass('on');	
			$('.btn_page').removeClass('on');
		}	else if(num>=arr[4] && num< arr[5])	{
			$('.btn_page li').eq(4).addClass('on').siblings().removeClass('on');	
			$('.btn_page').removeClass('on');
		}	else	{
			$('.btn_page li').eq(5).addClass('on').siblings().removeClass('on');	
			$('.btn_page').removeClass('on');
		}
		
		if(num>=arr[1]-500 && num<arr[2])	{
			$('.btn_page').addClass('on');
		}	else 	{
			$('.btn_page').removeClass('on');
		}	
    });
		
	
	//페이지버튼
	$('.btn_page li').click(function(e) {
		e.preventDefault();
		
        var num = $(this).index();
		
		if(num==0){
			$('html,body').stop().animate({scrollTop : arr[0]}, 1000);
		}	else if(num==1){
			$('html,body').stop().animate({scrollTop : arr[1]}, 1000);	
		}	else if(num==2){
			$('html,body').stop().animate({scrollTop : arr[2]}, 1000);
		}	else if(num==3){
			$('html,body').stop().animate({scrollTop : arr[3]}, 1000);
		}	else if(num==4){
			$('html,body').stop().animate({scrollTop : arr[4]}, 1000);
		}	else if(num==5){
			$('html,body').stop().animate({scrollTop : arr[5]}, 1000);
		}	else if(num==6){
			$('html,body').stop().animate({scrollTop : arr[6]}, 1000);
		}
    });
});

















