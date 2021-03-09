$(document).ready(function(){
    //데스크탑 모달전체메뉴버튼 동작
    $('#header .btn_main_all').click(function() {        
        $('#header .modal_menu').show();
        $('body, #wrap').addClass('on');
    });

    $('#header .btn_main_close').click(function() {        
        $('#header .modal_menu').hide();
        $('body, #wrap').removeClass('on');
    });
          
    
    //모바일 메뉴버튼 동작
    $('#header .btn_allmenu').click(function() {        
        $('#header .all_menu_box .dimm').show();
        $('body, #wrap, #header .all_menu_wrap').addClass('on');
    });

    $('#header .btn_all_close, #header .all_menu_box .dimm').click(function() {        
        $('#header .all_menu_box .dimm').hide();
        $('body, #wrap, #header .all_menu_wrap, .all_menu_wrap .all_menu>li').removeClass('on');
        $('.all_menu_wrap .all_menu .depth2').slideUp();
    });
    
    
    //검색창 - 데스크탑, 태블릿
    $('#header .btn_all_search').click(function() {
        $('#header .search_wrap').slideToggle(200);
    });

    $('#header .btn_search_close').click(function() {
        $('#header .search_wrap').slideUp(200);
    });
    
    
    //검색창 - 모바일
    $('#header .btn_m_search').click(function() {
        $('#header .m_search_wrap').addClass('on');
    });

    $('.m_search_wrap .btn_m_search_close').click(function() {
        $('#header .m_search_wrap').removeClass('on');
    });
    
        
    //메뉴 아코디언
    $('.all_menu_wrap .all_menu>li>a').click(function(e) {	
		e.preventDefault();	
		$(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp(300);       $(this).parent().toggleClass('on').siblings().removeClass('on');
    });
    
    
    //section1 슬라이드
    var mySwiper = new Swiper('.game_slider', {
        simulateTouch: false,
        slidesPerView:3,
        spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        breakpoints: {
            1130: {
              spaceBetween:35,
              slidesPerView:3,
            },
            1024: {
              spaceBetween:30,
              slidesPerView:3,
            },
            900: {
                spaceBetween:0,
                simulateTouch:true,
                slidesPerView:1, 
            }
        }
    });
   
    
    //section1 슬라이드 리사이징했을 때 두번째슬라이드에 액티브
    var chkWin = true;
    changeSlide();
    
    
    //trigger
    $(window).resize(function(){
        var num=$(this).width()+17; 
        
        //데스크탑모달메뉴 + 태블릿,모바일메뉴 닫기
        if(num>=1025){
            $('#header .btn_all_close').trigger('click');
        } else if (num<=1024){
            $('#header .btn_main_close').trigger('click');
        };
        
        //리사이즈할 때 검색창 닫기
        if(num>=768){
            $('#header .m_search_wrap .btn_m_search_close').trigger('click');
        } else if (num<=767){
            $('#header .search_wrap .btn_search_close').trigger('click');            
        };
        
        changeSlide();
    });
    
    
    //창 크기 변할 때 섹션1 슬라이드 2번째 창이 앞에 오게 하기.
    function changeSlide(){
       if($(window).width()+17<=900 && chkWin == true){
            mySwiper.slideTo(1);
            chkWin = false;
        } else if($(window).width()+17>900 && chkWin == false) {
            chkWin = true;
        };
    };
    
    
    //광고슬라이드 - 데스크탑
    var mySwiper2 = new Swiper('.ad_wrap', {
        simulateTouch: true,
        slidesPerView:1,
        loop:true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });

    
    //광고슬라이드 - 태블릿, 모바일
    var mySwiper3 = new Swiper('.m_ad_wrap', {
        simulateTouch: true,
        slidesPerView:1,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    
    //뉴스슬라이드
    var mySwiper4 = new Swiper('.section4_inner', {
        simulateTouch: false,
        slidesPerView:3,
        spaceBetween:50,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        breakpoints: {
            1130: {
                spaceBetween:40,
            },
            900: {
                spaceBetween:50,
                simulateTouch:true,
                slidesPerView:2, 
            },
            767: {
                simulateTouch:true,
                slidesPerView:1, 
            },
        }
    });

});


