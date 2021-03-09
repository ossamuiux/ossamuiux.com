$(document).ready(function(){
    //어바웃 미 슬라이더
    var mySwiper = new Swiper('.me_slider', {
        mousewheel: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    mySwiper.on('slideChange', function() {
        console.log(mySwiper.activeIndex);
        
        if (mySwiper.activeIndex==0){
            $('#main.web').removeClass('on');
        } else if(mySwiper.activeIndex==1){
            $('#main.web').addClass('on');
        }
    });
    
    //gnb 클릭 시 이동
    $('.gnb .depth2 li').on('click',function(){
        var num=$(this).index();
        mySwiper.slideTo(num);
        $('#main .menu_close').trigger('click');
    });
    
    //어바웃 미 슬라이더 강제이동
    if(document.URL.match(/slideIndex/)){
        mySwiper.slideTo(1); 
    }
    
    //메뉴열기
    $('#main .btn_menu').on('click',function(){
        $('#main .gnb_wrap').addClass('on');
    })
    
    $('#main .gnb_wrap .gnb>li>a').on('click',function(){
        $('#main .gnb_wrap, #main .gnb_wrap .gnb, #main .gnb_wrap .depth2').addClass('on');
        $('#main .gnb_wrap').css('width',791);
    });
    
    //메뉴 닫기
    $('#main .menu_close').on('click',function(){
        $('#main .gnb_wrap, #main .gnb_wrap .gnb, #main .gnb_wrap .depth2').removeClass('on');
        $('#main .gnb_wrap').css('width',477);        
    })
    
    //잇츠 미 애니메이션 발생
    $('#main .keyword li:eq(1) a').on('mouseenter',function(){
        $('#main .key_illust .line, #main .key_illust .line li, #main .key_illust .key').addClass('on');
    });
    $('#main .keyword li:eq(2) a').on('mouseenter',function(){
        $('#main .key_illust .key7').addClass('on');
    });
    $('#main .keyword li:eq(3) a').on('mouseenter',function(){
        $('#main .key_illust .key0').addClass('on');
    });
    $('#main .keyword li:eq(4) a').on('mouseenter',function(){
        $('#main .key_illust .key8').addClass('on');
    });
    $('#main .keyword li:eq(5) a').on('mouseenter',function(){
        $('#main .key_illust .key5').addClass('on');
    });
    $('#main .keyword li:eq(6) a').on('mouseenter',function(){
        $('#main .key_illust .key1, #main .key_illust .key2').addClass('on');
    });
    $('#main .keyword li:eq(0) a').on('mouseenter',function(){
        $('#main .key_illust .key3, #main .key_illust .key4, #main .key_illust .key6').addClass('on');
    });
    
    //잇츠 미 애니메이션 제거
    $('#main .keyword li a').on('mouseleave',function(){
        $('#main .key_illust .line, #main .key_illust .line li, #main .key_illust .key, #main .key_illust .key0, #main .key_illust .key1, #main .key_illust .key2, #main .key_illust .key3, #main .key_illust .key4, #main .key_illust .key5, #main .key_illust .key6, #main .key_illust .key7, #main .key_illust .key8').removeClass('on');
    });
    
    //잇츠 미 소개 부분 이벤트 발생
    $('#main .keyword li').on('click',function(){
        $('#main .keyword_bg img, #main .keybg_close').removeClass('on');
        var num=$(this).index()+1;
        $('#main .keyword_bg .bg'+num+', #main .keybg_close').addClass('on');
    });
//    $('#main .keyword li:eq(1)').on('click',function(){
//        $('#main .keyword_bg .bg2, #main .keybg_close').addClass('on');
//    });
//    $('#main .keyword li:eq(2)').on('click',function(){
//        $('#main .keyword_bg .bg3, #main .keybg_close').addClass('on');
//    });
//    $('#main .keyword li:eq(3)').on('click',function(){
//        $('#main .keyword_bg .bg4, #main .keybg_close').addClass('on');
//    });
//    $('#main .keyword li:eq(4)').on('click',function(){
//        $('#main .keyword_bg .bg5, #main .keybg_close').addClass('on');
//    });
//    $('#main .keyword li:eq(5)').on('click',function(){
//        $('#main .keyword_bg .bg6, #main .keybg_close').addClass('on');
//    });
//    $('#main .keyword li:eq(6)').on('click',function(){
//        $('#main .keyword_bg .bg7, #main .keybg_close').addClass('on');
//    });
    
    //잇츠 미 소개 부분 이벤트 제거
    $('#main .keybg_close').on('click',function(){
        $('#main .keyword_bg .bg1, #main .keyword_bg .bg2, #main .keyword_bg .bg3, #main .keyword_bg .bg4, #main .keyword_bg .bg5, #main .keyword_bg .bg6, #main .keyword_bg .bg7, #main .keybg_close').removeClass('on');
    });
    
    //포트폴리오 다음 슬라이더 css
    
});