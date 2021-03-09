$(document).ready(function(){
    $('#header .gnb').on('mouseenter',function(){
        $('#header').addClass('on');
        $('#header').addClass('active');
    });
    $('#header .gnb').on('mouseleave',function(){
        $('#header').removeClass('on');
        $('.gnb_wrap .bar').hide();
        $('#header').removeClass('active');
    });
    
    //헤더 스크롤탑 이벤트
    $(window).on('scroll',function(){
        var headerFix=$(this).scrollTop();

        if(headerFix>30){
            $('#header').addClass('active');
            $('#header .gnb').on('mouseenter',function(){
                $('#header').addClass('on');
            });
        } else if(headerFix=0){
            $('#header .gnb').on('mouseenter',function(){
                $('#header').addClass('on');
                $('#header').addClass('active');
            });
            $('#header .gnb').on('mouseleave',function(){
                $('#header').removeClass('on');
                $('#header').removeClass('active');
            });      
        } else {
            $('#header').removeClass('active');
            $('#header .gnb').on('mouseleave',function(){
                $('#header').removeClass('on');
                $('#header').addClass('active');
            });
        }
    });
    
    
    //테블렛 ver gnb이벤트
    $('#header .mgnb>li>a').on('click',function(){
        $('#header .mgnb>li>a').removeClass('on');
        $(this).parent().siblings().removeClass('active');
        $('#header .mgnb .depth2').stop().slideUp();
        
        if($(this).siblings().css('display')=='none'){
            $(this).addClass('on');
            $(this).parent().addClass('active');
            $(this).siblings().slideDown();
        } else {
            $(this).removeClass('on');
            $(this).parent().removeClass('active');
        }
    });
    
    //테블렛 gnb열기
    $('#header .btn_menu').on('click',function(){
        $('#header .mgnb_wrap').addClass('on');
    });
    
    //테블렛 gnb닫기
    $('#header .mgnb_top .btn_close').on('click',function(){
        $('#header .mgnb_wrap').removeClass('on');
    });
                               
                               
    
    //bar 에니메이션
    $('.gnb>li').on('mouseenter',function(){
        var posX=$(this).position().left;
        var barWidth=$(this).width(); 
        
        $('.gnb_wrap .bar').show().stop().animate({left:posX,width:barWidth});
    });
    
    $('.gnb>li>a').on('mouseleave',function(){
        $('.gnb_wrap .gnb_bar').stop().animate({width:0});
    });
    
    
    //비디오
    var mySwiper = new Swiper ('.video_slider', {
        effect: 'fade',
        loop: false,
        autoplay: {
            delay: 10000,
        }
    });
    
    //운휴기종 버튼 이벤트
    var myswiper2 = new Swiper('.notice_slider', {
        direction: 'vertical',
        simulateTouch: false,
        autoplay: true,
        navigation: {
          nextEl: '.notice_slider .swiper-button-next',
          prevEl: '.notice_slider .swiper-button-prev',
        }
    });
    $('#main .swiper-button-prev,#main .swiper-button-next').on('click',function(e){
        e.preventDefault();
    });
    
    //이벤트 슬라이더
    var swiper = new Swiper('.event_slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false,
        loop: true,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
                simulateTouch: true,
            }
        },
        navigation: {
            nextEl: '.section1 .swiper-button-next',
            prevEl: '.section1 .swiper-button-prev',
        },
    });
    
    //탑버튼
    $('#main .btn_top').on('click',function(){
        $('html,body').animate({scrollTop:0},600);
    });
});























