$(document).ready(function(){
    $('.gnb').mouseenter(function(){
		$('#header').stop().animate({height:485});
	}).mouseleave(function() {
		$('#header').stop().animate({height:110});
	});
    
     //모바일메뉴
    $('.m_menu .btn_m').click(function(){
        $('#wrap, .m_menu .menu').addClass('on');
        $('.m_menu .dimm').show();
    });
    
    //메뉴닫기
    $('.m_menu .btn_close, .m_menu .dimm').click(function(){
        $('#wrap, .m_menu .menu').removeClass('on');
        $('.m_menu .dimm').hide();
    });
    
    //모바일 아코디언메뉴
    $('.m_gnb .m_menu_inner>li>a').click(function(){
        $(this).parent().toggleClass('on').siblings().removeClass('on');
        $('.m_gnb .depth2').stop().slideUp(300);
        $(this).parent().find('.depth2').stop().slideToggle(300);
    });
    
    //창크기 조절시
    //$(window)의 가로길이는 크롬개발자모드의 창크기-17임
    $(window).resize(function(){
        var num=$(this).width()+17;
        
        if(num<=1024){
           $('.modal_menu_inner .btn_close').trigger('click');
        } else {
           $('.m_menu .btn_close').trigger('click'); 
        }
    });
       
    //메인 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop:true,
        autoplay: {
			delay: 5000
		},
        simulateTouch:false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    //프로그램
    var mySwiper = new Swiper ('.program', {
        slidesPerView:4,
        simulateTouch:false,
        breakpoints: {
            1024: {
                spaceBetween:0,
                slidesPerView:3,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                loop:true,
            },
            767: {
                spaceBetween:0,
                simulateTouch:true,
                slidesPerView:1,
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            }
        }
    });
});























