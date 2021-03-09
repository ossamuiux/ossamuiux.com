$(document).ready(function(){
        //메인 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        simulateTouch:false,
        autoplayspeed:1500,//자동실행속도 
        speed:900,
		draggble:true,//마우스드래그
		autoplay:true,//자동실행
		pauseOnHvoer:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                simulateTouch:true,
                //slidesPerView:2
            }
        }
    });
    
    $('.gnb .depth1>li').mouseenter(function(){
       $(this).find('.depth2_wrap').stop().slideDown(); 
    }).mouseleave(function(){
       $('.gnb .depth2_wrap').hide(); 
    });
    
    $('.all_menu .btn_all').click(function(){
        $('#header .header_inner .all_menu .modal_menu').show();
        $('.modal_menu_inner').slideDown();
        $('body').addClass('on');
    });
    
    $('.modal_menu_inner .btn_close').click(function(){
        //slideUp(콜백함수)
        //slideUp함수실행시 인자값으로 익명함수를 전달하면
        //slideUp함수실행된 뒤에 전달된 콜백함수가 실행됨
        $('.modal_menu_inner').slideUp(function(){
            $('.modal_menu').hide();
        });
        $('body').removeClass('on');
    });
    
    
    /*공지사항*/
    var mySwiper2 = new Swiper('.clearfix', {
        direction: 'vertical',
        slidesPerView:1,
        autoplayspeed:1600, 
		pauseOnHvoer:true,
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    //구몬NOW 최근게시물 슬라이더
    var mySwiper2 = new Swiper ('.latest_slider', {
        simulateTouch:false,
        slidesPerView:3,
        spaceBetween:30,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        breakpoints: {
            1024: {
                spaceBetween:15,
                slidesPerView:3
            },
            767: {
                spaceBetween:0,
                simulateTouch:true,
                slidesPerView:1
            }
        }
    });
    
    //모바일메뉴
    $('.m_menu .btn_m').click(function(){
        $('.m_menu .menu').addClass('on');
        $('.m_menu .dimm').show();
    });
    
    $('.m_menu .btn_close, .m_menu .dimm').click(function(){
        $('.m_menu .menu').removeClass('on');
        $('.m_menu .dimm').hide();
    });
    
    //모바일 아코디언메뉴
    $('.m_gnb .depth1>li>a').click(function(){
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
    
    
    
    //패밀리버튼
    $('#footer .footer_top .family_wrap .btn_family').click(function(){
        $('#footer .footer_top .family_wrap .list_family').slideToggle();
    }); 
});























