$(document).ready(function(){
    //메뉴 애니메이션
    $('.bottom_header_inner .gnb>ul>li').mouseenter(function(){
        $(this).find('.depth2_wrap').stop().animate({'height':'70px'},400);
    });
    
    $('.bottom_header_inner .gnb>ul>li').mouseleave(function(){
        $(this).find('.depth2_wrap').stop().animate({'height':'0px'},400);
    });
    
    //메인비주얼 슬라이더
    $('.main_visual').slick({
         fade:false,//화면만 이동하는 효과
         dots: false, //페이지버튼
         draggable: false, //마우스드래그
         autoplay:true,//자동실행
         autoplaySpeed:4000,//슬라이더 인터벌
         pauseOnHover:false//마우스오버시 멈춤기능
    });
    
    //검색창 on/off
    $('.util .search').click(function(){
       $('#header .search_wrap').fadeIn(300); 
    });
    $('.search_popup .btn_close').click(function(){
       $('#header .search_wrap').fadeOut(300); 
    });
    
    //aside on/off
    $('.aside_wrap .btn_quick').click(function(){
       $('.aside_wrap .quick_wrap').toggle();
        $(this).toggleClass('on');
    });
    
    //full menu on/off
    $('.bottom_header .popup_full').hide();
    
    $('.gnb2 .btn_full_on').click(function(){
       $('.bottom_header .popup_full').fadeIn(400);
    });
    $('.full_inner .btn_full_off').click(function(){
       $('.bottom_header .popup_full').fadeOut(400); 
    });
    
    
    //section3 탭메뉴 내용 가리기
    //gt(0)은 ul중에서 0(첫번째)보다 큰 ul선택,필터선택자
    $('.tab_con>div:gt(0)').hide();
    
    //ssection3탭메뉴
    $('.tab_menu li').click(function(e){
        e.preventDefault();//a태크 기본이벤트막기(링크된# 기능 막기)
        
        //클릭한 li에 on클래스 걸고 나머지 형제(siblings)요소에서 on클래스제거
        $(this).addClass('on').siblings().removeClass('on');
 
        //순서값 추출,몇번째 인지 선택
        var num=$(this).index();
        
        $('.tab_con>div').eq(num).show().siblings().hide();
    });
    
        //문서의 전체높이 확인
    var documentH=$(document).height();
    //탑버튼
    $(window).scroll(function(){
        var num=$(this).scrollTop();
        
        if(num>=193){
            $('#footer .btn_top').fadeIn();
        } else{
            $('#footer .btn_top').fadeOut();
        }
    });
    
    $('.btn_top').click(function(e){
        e.preventDefault();
        
         $("html, body").animate({scrollTop:0});              
    });
    
    //modal popup
        //유투브 모달팝업
    var youtubeArr=[];
    youtubeArr[0]='https://www.youtube.com/embed/zacN2Q4bxRs';
    youtubeArr[1]='https://www.youtube.com/embed/1BkyCF0z_5c';
    youtubeArr[2]='https://www.youtube.com/embed/WFmyhgYd2DY';
    
    $('.video_contents li').click(function(e){
        e.preventDefault();
        var num=$(this).index();
        $('.modal_popup').fadeIn(200);
        $('.modal_popup .modal').eq(num).show().siblings().hide();
        
        $('.modal_popup .modal').eq(num).find('iframe').attr('src',youtubeArr[num]);
    });
    
    $('.modal .btn_modal_close').click(function(){
        $('.modal_popup .modal iframe').attr('src','about:blank');
        $(this).parent().hide();
        $(this).closest('.modal_popup').fadeOut(200);
    });
    
    
    //family
    var sw=true;
    $('.family .btn_family').click(function(){
        if(sw==true){
           $('.family .family_list').show();
                sw=false;
        }else{
            $('.family .family_list').hide();
                sw=true;
        }
    });
    
    
    //sub location
    
    var sw2=true;
    $('.location_depth2 .btn_location').click(function(){
        if(sw2==true){
           $('.location_depth2 ul').show();
                sw2=false;
        }else{
            $('.location_depth2 ul').hide();
                sw2=true;
        }
    });

    
});








































