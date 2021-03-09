$(document).ready(function(){
    
    // 헤더 호버시 배경, 폰트 색변화
    $('#header').mouseleave(function(){
        if ($(window).scrollTop()<700){
            $(this).removeClass('on').find('.logo img').attr('src','images/logo_white.png');
        }
    });
    
    // gnb 호버시 페이드인아웃 효과
    $('#header .depth1>li').mouseover(function(){
        $(this).find('.depth2').stop().fadeIn(300); 
    });
    
    $('#header .depth1>li').mouseleave(function(){
        $(this).find('.depth2').stop().fadeOut(300); 
    });
    
    // 배경이미지 움직임
    aaa();
    $(window).resize(function(){
        aaa();
    });
    
    // 모바일gnb
    $('.m_menu .depth1>li>a').click(function(e){
        e.preventDefault();
        $(this).parent().find('.depth2').stop().slideToggle(300).parent().siblings('.on').find('.depth2').stop().slideUp(300);
        $(this).parent().toggleClass('on').siblings('.on').removeClass('on');
    });
    
    $('#header .btn_menu').click(function(){
        $('.m_menu').addClass('on');
        $('.m_gnb_bg').show();
        $('#wrap').addClass('on');
    });
    
    $('.m_gnb_bg').click(function(){
        $('.m_menu').removeClass('on');
        $(this).hide();
        $('#wrap').removeClass('on');
    });
    
    // 창 리사이즈시 메뉴자동으로 닫히기
    $(window).resize(function(){
        var num = $(this).width()+17;
        
        if (num >= 1024){
            $('.m_gnb_bg').trigger('click');
        }
        
        //리사이즈시 메인비주얼100% 계산
        visualH();
    });
    
    // 스크롤 한만큼 중앙 텍스트 흐리게
    $(window).scroll(function(){
        var num = $(this).height(); //현재 창크기값
        var scrollCount = $(this).scrollTop(); //스크롤한값
        
        var result = (num - scrollCount*2.2)/num; //현재창크기에서 스크롤한값*2 백분율
        
        // 백분율값으로 투명도 조절
        if (result < 0 ){
            $('#main .main_visual .txt').css({'opacity':'0'});
        } else {
            $('#main .main_visual .txt').css({'opacity':result});
        }
        
        // 700이상 스크롤시 헤더색변화
        if (scrollCount > 700) {
            $('#header').addClass('on').find('.logo img').attr('src','images/logo_blue.png');
        } else {
            $('#header').removeClass('on').find('.logo img').attr('src','images/logo_white.png');
        }
    });
    
    //메인비주얼100%
    visualH();
    
    //푸터메뉴버튼
    $('#footer .top_footer .top_footer_inner button').click(function(){
        $(this).parent().find('.depth1').slideToggle(300);
        $(this).toggleClass('on');
    });
});

// 창 크기 확인하고 1024 이상일때만 배경 움직임 + 로고변화
function aaa(){
    var $el = $(window).width();
    if (parseInt($el) > 1024) {
        $('#main .main_visual').on('mousemove', function(e){
            $(this).find('.bg').css({'margin-left':(e.pageX*0.015)})
        });
        $('#header').mouseenter(function(){
            $(this).addClass('on').find('.logo img').attr('src','images/logo_blue.png');
        });
    } else {
        $('#main .main_visual').off('mousemove');
        $('#main .main_visual .bg').css({'margin-left':'0'});
        $('#header').mouseenter(function(){
            $(this).find('.logo img').attr('src','images/logo_white.png');
        });
    };
}

// 메인비주얼 100%
function visualH(){
    var winH = $(window).height();
    $('#main .main_visual .bg').css({'height':winH});
}