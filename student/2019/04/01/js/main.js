$(document).ready(function(){
    //메인페이지 메인비쥬얼 슬라이더
    var mySwiper=new Swiper('.main_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });
    //메인 페이지 gnb
    $('#header .bottom_header .gnb').on('mouseenter',function(){
        $('#header').addClass('on');
    });
    
    $('#header .bottom_header .gnb').on('mouseleave',function(){
        $('#header').removeClass('on');
    });
    
    //메인페이지 이벤트 슬라이더
    var mySwiper2=new Swiper('.event_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });
    
    //메인페이지 새소식 슬라이더
    var mySwiper3=new Swiper('.news_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });
    
    //이벤트 페이지 주요이벤트 탭메뉴
    $('#container.toms_event .content .tab_con_wrap .tab_con:gt(0)').hide();
    
    $('#container.toms_event .content .tab_wrap .tab_menu li').on('click',function(e){
        e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num=$(this).index();
        $('#container.toms_event .tab_con').eq(num).show().siblings().hide();
        
    });
    
    //이벤트 탭메뉴
    $('#container.toms_event .content2 .tap_con:gt(0)').hide();
    
    $('#container.toms_event .content2 .tab_menu li').on('click',function(e){
        e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num2=$(this).index();
        $('#container.toms_event .content2 .tap_con').eq(num2).show().siblings().hide();
    });
    
    //멤버쉽 마이탐 안내 탭메뉴
    $('#container.toms_store .content .tab_con:gt(0)').hide();
    
    $('#container.toms_store .content .tab_menu li').on('click',function(e){
        e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num3=$(this).index();
        $('#container.toms_store .content .tab_con').eq(num3).show().siblings().hide();
    });
    
    //마이탐 앱 소개 핸드폰슬라이더
    var mySwiper4=new Swiper('.slider_wrap .sub2_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1500,//애니매이션 시간
        autoplay: {
            delay: 4000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        spaceBetween:10,
        slidesPerView:1,
        pagination: {
            el: '.slider_wrap .swiper-pagination',
            clickable:true
        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.slider_wrap .swiper-button-next',
            prevEl: '.slider_wrap .swiper-button-prev'
        }
    });
    
    //마이탐 앱 소개 핸드폰슬라이더 옆 설명 슬라이더
    var mySwiper5=new Swiper('.slider_wrap .right_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1500,//애니매이션 시간
        autoplay: {
            delay: 4000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        spaceBetween:10,
        slidesPerView:1,
        pagination: {
            el: '.slider_wrap .swiper-pagination',
            clickable:true
        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.slider_wrap .swiper-button-next',
            prevEl: '.slider_wrap .swiper-button-prev'
        }
    });
    
    //메뉴찾기에 베스트 메뉴들 슬라이더 
    var mySwiper6=new Swiper('.sub_section1 .best_menu',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        slidesPerView:3,
        spaceBetween:0,
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
    
    //메뉴 찾기에 메뉴들 탭메
    $('#container.search_menu .sub_section2 .tab_wrap .tab_con:gt(0)').hide();
    
    $('#container.search_menu .sub_section2 .tab_menu li').on('click',function(e){
        e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num6=$(this).index();
        $('#container.search_menu .tab_con').eq(num6).show().siblings().hide();
        
    });
    //탑버튼
    //scrollTop()은 세로스크롤바의 문서전체에서의 위치값
    //0부터 (문서전체높이-스크롤바높이)까지를 범위로 가짐
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        
        if(num>=40){
            $('#footer .btn_top').stop().fadeIn(400);
        } else {
            $('#footer .btn_top').stop().fadeOut(400);
        }
    });
    
    //탑버튼
    $('#footer .btn_top').on('click',function(e){
        //top버튼이 a태그라서 올라가기전에 버튼을 누르자마자 연결되어있는 링크를 미리보기식으로 보여줌으로써 깜빡이는 현상이 보임. 때문에 지워줘야함!
        e.preventDefault();
        //이벤트를 막아준다라는 것(기본 이벤트 (a태그에 걸린 링크)를 막기)
        $('html,body').animate({scrollTop:0});
        //return false;
    });
});
































