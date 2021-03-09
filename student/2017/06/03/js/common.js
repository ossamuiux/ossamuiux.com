$(document).ready(function() {
	$('.gnb').mouseenter(function(){    
       $('#header').addClass('on'); 
    });
    
    $('#header').mouseleave(function(){
        $('#header').removeClass('on');
    });
    
    //모바일 햄버거메뉴
    $('#header .btn_m').click(function(){
       $('#header .m_menu, #wrap').addClass('on'); 
    });
    
    $('#header .btn_close').click(function(){
       $('#header .m_menu, #wrap').removeClass('on'); 
    });
    
    var sw=true;
    $('#header').click(function() {
        $('.cover').toggleClass('on');
        if(sw == true){
		   $('.cover').addClass('on');
		   sw = false;
	   } else {
			setTimeout(function(){
		   		$('.cover').removeClass('on');
			},500);
			sw = true;
		}
    });
    
    //캐릭터 슬라이더
    var characterTop = new Swiper('.character-top', {
      spaceBetween: 1,
    });
    var characterThumbs = new Swiper('.character-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      breakpoints: {
        1280: {
          slidesPerView: 5
        },
        1024: {
          slidesPerView: 3
        },
        767: {
            slidesPerView: 3,
            allowTouchMove:true
        }
    }
    });
    characterTop.controller.control = characterThumbs;
    characterThumbs.controller.control = characterTop;

    
    
    
    
    
    //섹션위치저장
    var arr = [];
	
	for(var i=1; i<6; i++){
		arr.push($('.section'+i).offset().top);
	}
    
    console.log(arr);
    
    $(window).resize(function(){
       arr.splice(0,5);
        
        for(var i=1; i<6; i++){
            arr.push($('.section'+i).offset().top);
        }
        
        console.log(arr);
    });
    
    $(window).scroll(function() {
        var num = $(this).scrollTop();
				

		
		//섹션위치에 따라 페이지버튼 on처리
        if(num>=arr[0] && num<arr[1]-150)	{
			$('.btn_menu li').removeClass('on');	
		} else if(num>=arr[1]-150 && num<arr[2]-150)	{
			$('.btn_menu li').eq(0).addClass('on').siblings().removeClass('on');	
			
		}	else if(num>=arr[2]-150 && num< arr[3]-100)	{
			$('.btn_menu li').eq(1).addClass('on').siblings().removeClass('on');
			
		}	else if(num>=arr[3]-150 && num< arr[4])	{
			$('.btn_menu li').eq(2).addClass('on').siblings().removeClass('on');
			
		}	else if(num>=arr[4])	{
			$('.btn_menu li').eq(3).addClass('on').siblings().removeClass('on');	
		}
    });
    

    //페이지버튼 페이지이동
    $('.btn_menu li').click(function(e) {
		e.preventDefault();
		
        var num = $(this).index();
		
		if(num==0){
			$('html,body').stop().animate({scrollTop : arr[1]-50}, 1000);
		}	else if(num==1){
			$('html,body').stop().animate({scrollTop : arr[2]-50}, 1000);	
		}	else if(num==2){
			$('html,body').stop().animate({scrollTop : arr[3]-10}, 1000);
		}	else if(num==3){
			$('html,body').stop().animate({scrollTop : arr[4]+50}, 1000);
		}	
    });
    
        
    //모바일 페이지버튼 페이지이동
    $('.m_gnb li').click(function(e) {
		e.preventDefault();
		
        var num = $(this).index();
		
		if(num==0){
			$('html,body').stop().animate({scrollTop : arr[1]+50}, 1000);
            $('.m_menu').removeClass('on');
		}	else if(num==1){
			$('html,body').stop().animate({scrollTop : arr[2]-50}, 1000);
            $('.m_menu').removeClass('on');
		}	else if(num==2){
			$('html,body').stop().animate({scrollTop : arr[3]-50}, 1000);
            $('.m_menu').removeClass('on');
		}	else if(num==3){
			$('html,body').stop().animate({scrollTop : arr[4]+100}, 1000);
            $('.m_menu').removeClass('on');
		}	
    });
    
        //down 버튼
    $('.section1_inner h4 a').click(function(e) {
		e.preventDefault();
		
        var num = $(this).index();
		
		if(num==0){
			$('html,body').stop().animate({scrollTop : arr[1]-50}, 1000);
		}	
    });
    
    
    
    
    
});


















