$(document).ready(function(){
    //메인 슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 'auto',
        mousewheel: {
            eventsTarged: 'body'
        },
        on: {
            slideChange: function () {
                console.log(mySwiper.activeIndex);
                if (mySwiper.activeIndex==5){
                    $('#main .btn_scroll').hide();
                } else {
                    $('#main .btn_scroll').show();
                }
            },
        }
    });
    
    //스크롤
    $('#main .btn_scroll').on('click',function(){
       mySwiper.slideNext(400);
    });
    
    //유튜브 텍스트
    $('#main .main_visual').on('mouseenter',function(){
        $('#main .main_visual .main_txt').addClass('on');
    });
    
    $('#main .main_visual').on('mouseleave',function(){
        $('#main .main_visual .main_txt').removeClass('on');
    });
    
    //게임 슬라이더
    var mySwiper2 = new Swiper('.software_wrap .software_slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween:10,
            }
        }
    });
    
    //유튜브 사운드 제어
    function muteYoutube(){
        var address=$('.youtube iframe').attr('src');
        var address2=address+'&mute=1';
        
        var checkMobile=false;
        var checkPc=false;
        
        function checkWin(){
             var sizeWin=$(window).width();

            if(sizeWin<767 && checkMobile==false){
                $('.youtube iframe').attr('src',address2);
                checkMobile=true;
                checkPc=false;
            } else if(sizeWin>=768 && checkPc==false) {
                $('.youtube iframe').attr('src',address);
                checkPc=true;
                checkMobile=false;
            }
        }
        checkWin();
        
        $(window).resize(function(){
            checkWin();
        });
        
    }
    muteYoutube();
    
    //모바일 메뉴
    $('#m_header .mbtn').on('click',function(){
       $('#m_header .m_header_inner .mgnb_scroll').addClass('on'); 
    });
    
    $('#m_header .mbtn_close').on('click',function(){
       $('#m_header .m_header_inner .mgnb_scroll').removeClass('on'); 
    });
    
    //데스크탑 검색창
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
    
    //모바일 검색창
    $('.mbtn_search').on('click',function(){
        $('.msearch_wrap').addClass('on');
    });
    $('.mbtn_close2').on('click',function(){
        $('.msearch_wrap').removeClass('on');
    });
});