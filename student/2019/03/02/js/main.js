$(document).ready(function(){
    $('#header .btn_sidemenu').on('click',function(){
        $('.gnb_wrap,#wrap').addClass('on');
        $('.dimm').fadeIn(500);
    });
    
    $('.gnb_wrap .btn_close,#header .dimm').on('click',function(){
        $('#header .gnb_wrap,#wrap').removeClass('on'); 
        $('.dimm').fadeOut(500);
    });
    
    //gnb
    $('.gnb>li>a').on('click',function(){
        $(this).parent().siblings().find('.depth2').hide();
        $(this).parent().siblings().removeClass('on');
        
        if($(this).siblings('.depth2').css('display')=='none'){
            $(this).parent().toggleClass('on');
            $(this).siblings('.depth2').show();
        } else {
            $(this).parent().removeClass('on');
            $(this).siblings('.depth2').hide();           
        }
    });
    
        $('.depth2>li>a').on('click',function(){
        $(this).parent().siblings().find('.depth3').hide();
        $(this).parent().siblings().removeClass('on');
        
        if($(this).siblings('.depth3').css('display')=='none'){
            $(this).parent().toggleClass('on');
            $(this).siblings('.depth3').show();
        } else {
            $(this).parent().removeClass('on');
            $(this).siblings('.depth3').hide();           
        }
    });
    
    //메인슬라이더
    var mySlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 3000,//1000은 1초!-자동실행 시간
            disableOnInteraction:false //좌우화살표 클릭시 멈춤기능 끄기
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true
        }
    });
    
    //display: none;인 요소에는 스와이퍼 초기화코드가 제대로 적용되지 않음
    //
    var mySlider2 = new Swiper('.product_slider', {
        autoHeight:true,
        //스와이퍼 연결대상의 상태(show,hide)를 감지하여
        //보여진 후 초기화 코드를 다시 연결해줌
        observer:true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    
//푸터 퀵메뉴     
    $('#footer .footer_gnb_scroll .footer_menu>li>a').on('click',function(e){
        e.preventDefault();
//        $(this).parent().toggleClass('active');
//        $(this).siblings('.depth2').stop().slideToggle();
        $('#footer .footer_gnb_scroll .footer_menu>li').removeClass('active'); // 누르면 사라지고 초기화 코드
        $('.footer_menu .depth2').stop().slideUp(); //초기화 누르면 닫고

        //조건문
        if($(this).siblings('.depth2').css('display')=='none'){
            $(this).parent().addClass('active');
            $(this).siblings('.depth2').stop().slideDown();
        }
    });
});


