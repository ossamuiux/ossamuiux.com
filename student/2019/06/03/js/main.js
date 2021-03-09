$(document).ready(function(){
    //gnb 메뉴 
    $('.bottom_header_inner .gnb>li').on('mouseenter',function(){
        $('#header .bottom_header').addClass('on');
    });
    
    $('.bottom_header_inner .gnb>li').on('mouseleave',function(){
        $('#header .bottom_header').removeClass('on');
    });
    
    //검색버튼
    $('.han_menu .btn_search').on('click',function(){
        $('#wrap .input_wrap').stop().slideDown();
        $('.han_menu .lang').stop().hide();
    });
    
    $('.input_wrap .btn_close').on('click',function(){
        $('#wrap .input_wrap').stop().slideUp();
    });
    
    //lang 보이기
    $('.han_menu .btn_lang').on('click',function(){
        $(this).siblings().stop().show(); 
        $('#wrap .input_wrap').stop().slideUp();
    });
    
    //lang 닫기
    $(document).on('click',function(e){
        if($(e.target).closest('.lang_wrap').length == 0){
            $('.han_menu .lang').stop().hide();
        }
    });
    
    //모바일 gnb 
    $('#mHeader .b_menu').on('click',function(){
        $(this).siblings('.mgnb').addClass('on');    
    });
    
    $('.mhan_menu .mbtn_close').on('click',function(){
        $(this).parents('.mgnb').removeClass('on');    
    });
    
    //모바일 depth2
    $('.mgnb .mgnb_menu>li>a').on('click',function(){
        $('.mgnb .mgnb_menu>li>a').removeClass('on');
        $('.mgnb .depth2').stop().slideUp();
        
        if($(this).siblings().css('display')== 'none') {
            $(this).addClass('on');
            $(this).siblings('.depth2').slideDown();
        } else {
            $('.mgnb .mgnb_menu>li>a').removeClass('on');
            $(this).siblings('.depth2').stop().slideUp();
        }
    });
    
    //모바일 검색창
    $('.mhan_menu .mbtn_search').on('click',function(){
        $('#wrap .input_wrap').slideDown();
    });
    
    //메인슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop:true,
        speed: 2000,
        autoplay: {
            delay: 5000,
            disableOnInteraction:false
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
    
    //메인슬라이더 일시정지, 플레이버튼
    var sliderSw = true;
    $('.main_slider .btn_play').on('click',function(){
        if(sliderSw) {
            $(this).addClass('on')
            mySwiper.autoplay.stop();
        } else {
            $(this).removeClass('on');
            mySwiper.autoplay.start();
        }
        
        sliderSw = !sliderSw;
    });
    
    //프로모션 슬라이더
    var mySwiper2 = new Swiper('.promotion_slider', {
        loop: false,
        autoplay: false,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
            }
        }
    });
    
    //연간 축제 안내 슬라이더
    var mySwiper3 = new Swiper('.festival_slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: '.festival_slider .swiper-scrollbar',
            draggable: true,
			snapOnRelease: false,
			dragSize: 50
        }
    });
    
    dateBox();
    
        
    function timeMotion (){
        
        function openTime() {
            
            var timer = 0;
            var hours, minutes;

            var interval = setInterval(function(){
                timer++;
                hours	= parseInt(timer / 60 % 60, 10);
                minutes = parseInt(timer % 60, 10);

                hours 	= hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;

                $('.runtime .open_hour').text(hours);
                $('.runtime .open_min').text(minutes);

                if (hours == 10) {
                    hours = 10;
                    clearInterval(interval);
                }
            }, 7);
        }
        //openTime();	// hour base

        function closeTime() {
        
            var timer = 0;
            var hours, minutes;
            var interval = setInterval(function(){

                timer++;
                hours	= parseInt(timer / 60 % 60, 10);
                minutes = parseInt(timer % 60, 10);

                hours 	= hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;

                $('.runtime .close_hour').text(hours);
                $('.runtime .close_min').text(minutes);

                if (hours == 18) {
                    hours = 18;
                    clearInterval(interval);
                }
            }, 2);
        }

        //closeTime();
        openTime();
        closeTime();
        
    }

    //스크롤됐을때 위치 구해서 실행시키기
    //1. $(document).height() : 문서의 높이 구하기
    //2. $('#main .section4').height() : section4의 높이 구하기
    //스크롤할때마다 함수가 실행되면 문제가 생기므로
//    if(chkTime) {
//                timeMotion();
//                chkTime=false;
//            }
    //을 사용하여 한번만 실행하고 false로 바꾸면 실행 안됨

    var chkTime = true;
    
    $(window).on('scroll',function(){
        var scrollW = $(window).scrollTop();
        var posY = $(document).height() - $('#main .section4').height();
        
        if(posY <= scrollW +700) {
            if(chkTime) {
                timeMotion();
                chkTime=false;
            }
        }
        
        //퀵메뉴 위치
        var posY2 = $(document).height() - $(window).height();
        if(posY2 == scrollW) {
            $('#wrap .quickmenu_wrap').css('bottom','270px');
        } else {
            $('#wrap .quickmenu_wrap').css('bottom','20px');
        }
    });
    
    //퀵메뉴 보이기
    var quickSw = true;
    
    $('.quickmenu_wrap .btn_quick').on('click',function(){
        $('.quickmenu_wrap .quick_list_wrap').stop().toggle();    
        $(this).toggleClass('on');
        
        if(quickSw) {
            $('.quickmenu_wrap .quick_dimm').stop().fadeIn(300);
        } else {
            $('.quickmenu_wrap .quick_dimm').stop().hide();
        }
        
        quickSw = !quickSw;
        
    });
    
    $('.quickmenu_wrap .quick_dimm').on('click',function(){
        $('.quickmenu_wrap .btn_quick').trigger('click');
    });
    
    
});

//운영시간 날짜 스크립트
function dateBox() {
    var today = new Date();
    var mon = today.getMonth()+1;
    var date = today.getDate();
    
    var week = ['일','월','화','수','목','금','토'];
    var today2 = new Date().getDay();
    var newDay = week[today2];
    //console.log(newDay);
    
    function digit(n) {
        if (n<10){
            n='0'+n;
            return n;
        } else {
            return n;
        }
    }
    
    var newMon = digit(mon);
    var newDate = digit(date);
    //console.log(newDate);
    
    $('.runtime .month').text(newMon);
    $('.runtime .date').text(newDate);
    $('.runtime .day').text(newDay);

}
























