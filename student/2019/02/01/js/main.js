$(document).ready(function(){
    //검색창
    $('.btn_search1').on('click',function(e){
        e.stopPropagation();
        $('.search_wrap').addClass('on');
    });
    
    $('.search_wrap input').click(function(e){
        e.stopPropagation();
    });
    
    $('body').click(function(e){
        if(e.target.className != 'btn_search2'){
            $('.search_wrap').removeClass('on');
        }
//        console.log(e.target.className);
    });
    
    //메인 슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        simulateTouch: false,
        speed: 2000,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.slider_wrap .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.slider_wrap .swiper-button-next',
            prevEl: '.slider_wrap .swiper-button-prev'
        },
        fadeEffect: {
            crossFade: true
        },
    });
    var mySwiper2 = new Swiper('.main_slider2', {
        direction: 'vertical',
        loop: true,
        simulateTouch: false,
        speed: 2000,
        effect: 'slide',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.slider_wrap .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.slider_wrap .swiper-button-next',
            prevEl: '.slider_wrap .swiper-button-prev'
        },
    });
    
    //플레이 그라운드 메인 텍스트 애니메이션
//    $(window).on('scroll',function(){
//        var num=$(this).scrollTop();
//
//        if(num>700){
//        $('.play_ground li').eq(1).stop().animate({duration: 1000, easing:'easeOutElastic'});
//        }
//    });
    
//    $(window).on('scroll',function(){
//        var num=$(this).scrollTop();
//
//        if(num>1500){
//            $('.play_ground li').eq(1).stop().fadeIn(900);
//        } else{
//            $('.play_ground li').eq(1).stop().fadeOut(900);
//        }
//        console.log('dada');
//    });

    
    //유튜브 모달팝업 애니메이션
    $('.aqua_list_video_wrap .aqua_list_video li').on('mouseenter',function(){
       $(this).addClass('active'); 
    });
    
    $('.aqua_list_video_wrap .aqua_list_video li').on('mouseleave',function(){
       $(this).removeClass('active'); 
    });
    
    var arrVideo=[
        'https://www.youtube.com/embed/_KZE_V5BsbQ',
        'https://www.youtube.com/embed/GnGLpj3R7CY',
        'https://www.youtube.com/embed/o40efv9GqQI'        
    ]
    
    //유튜브 모달팝업
    $('.aqua_list_video_wrap .aqua_list_video li').on('click',function(e){
        e.preventDefault();
        var num=$(this).index();
        $('.aqua_story_wrap').show();
        $('.aqua_story_wrap .aqua_story_modal').eq(num).show().find('iframe').attr('src', arrVideo[num]);
    });
    
    $('.aqua_story_modal_wrap .aqua_story_modal .btn_close').on('click',function(){
        $('.aqua_story_wrap, .aqua_story_modal_wrap .aqua_story_modal').hide();
        $('.aqua_story_modal_wrap .aqua_story_modal iframe').attr('src','about:blank')
    });
    
    //이벤트 애니메이션
    $('.aqua_event_wrap .aqua_event li').on('mouseenter',function(){
       $(this).addClass('active'); 
    });
    
    $('.aqua_event_wrap .aqua_event li').on('mouseleave',function(){
       $(this).removeClass('active'); 
    });
    
    //탑 버튼
    if($('.sub_bg').length==1){
        $(window).on('scroll',function(){
            var num=$(this).scrollTop();

            if(num>200){
                $('#footer .btn_top').stop().fadeIn(300);
            } else{
                $('#footer .btn_top').stop().fadeOut(300);
            }
        });
    } else {
        $(window).on('scroll',function(){
            var num=$(this).scrollTop();

            if(num>500){
                $('#footer .btn_top').stop().fadeIn(300);
            } else{
                $('#footer .btn_top').stop().fadeOut(300);
            }
        });
    }
    
    $('#footer .btn_top').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},700);
    });
    
    //서브 로케이션
    var sw=true;
    $('.location li').eq(2).on('click',function(e){
        e.preventDefault();
        if (sw) {
           $('.depth2').show();
        } else {
            $('.depth2').hide(); 
        }
        sw =!sw;
    });  
    
    //회사소개 탭메뉴
    //$('#container.introduce .tab_manu:gt(0)').hide();
    
    $('#container.company .tab_menu li').on('click',function(e){
        e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active');
        
        //형제요소 순서찾기
//        var num=$(this).index();
//        console.log(num);
//        $('#container.franchise .tab_con').eq(num).show().siblings().hide();
    });
    
    //테마존 애니메이션
    $('.side_thema li').on('mouseenter',function(e){
        e.preventDefault();

        var num=$(this).index();
        $('.themazone_box a').eq(num).addClass('active').siblings().removeClass('active');
    });
    
    $('.side_thema li').on('mouseleave',function(){
        $('.themazone_box a').removeClass('active');
    });
});