$(document).ready(function(){
    
    //햄버거 메뉴 on
    $('#header .btn_menu').click(function(){
        $('#header .m_menu, #wrap, body').addClass('on');
        $('#wrap').css('overflow','hidden');
        $('#header .m_cover').fadeIn(300);
        
    });
    
    //
     $('.top_menu .btn_close_menu').click(function(){
        $('#header .m_menu, #wrap, body').removeClass('on'); 
        $('#header .m_cover').fadeOut(300);
         
        if($('#header .modal_popup').css('display')=='none'){
            $('#wrap').css('overflow','visible');
        }else{
            $('#wrap').css('overflow','hidden');
        }
    });
    
    //모달 검색창

    var sw2=true;
    //modal_popup on
    $('#header .btn_search').click(function(){
        $('#header .modal_popup').stop().slideToggle(200);
        //$('#wrap').css('overflow','hidden');
        
        if(sw2){
            $('#wrap').css('overflow','hidden');
                sw2=false;
           }else{
            $('#wrap').css('overflow','visible');
                sw2=true;
           }
        $(this).toggleClass('on');    
          
    });
     
    
    //모달 검색창 안에 닫기 버튼


    $('.search_middle .btn_modal_close').click(function(){
        sw2=true;
        console.log(sw2);
        $('#header .modal_popup').stop().slideToggle(200);
        $('#header .btn_search').stop().toggleClass('on'); 
        $('#wrap').css('overflow','visible');

    });
    
    
    
        //아코디언 메뉴  
    $('.bottom_menu .menu01>li>a').click(function(){

        $(this).siblings().slideToggle(200);
        $(this).parent().siblings().find('.depth2').slideUp();

        $(this).parent().siblings().removeClass('on');        
        $(this).parent().toggleClass('on');
    });
     
   
        //메인비쥬얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
            //버튼이 기본 디자인
            // type: 'bullets',
        }
    });
    
    
    //동영상 슬라이더
    var mySwiper = new Swiper ('.video_wrap', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    
    
    //모달 팝업 동영상
    
    var youtubeAttr=[];
    
    youtubeAttr[0]='https://www.youtube.com/embed/zacN2Q4bxRs';
    youtubeAttr[1]='https://www.youtube.com/embed/1BkyCF0z_5c';
    youtubeAttr[2]='https://www.youtube.com/embed/WFmyhgYd2DY';
    
    $('.video_wrap .swiper-slide').click(function(e){
        e.preventDefault();
        
        var num2=$(this).attr('data-swiper-slide-index'); 
         console.log(num2);
        
        $('.modal_video').eq(num2).show().siblings().hide();
        $('.modal_video').eq(num2).find('iframe').attr('src',youtubeAttr[num2]);
        
        $('#main .modal_popup_video').fadeIn(200);
    });
    
         //모달 동영상 닫기버튼
    $('.modal_video .btn_video_close').click(function(){
        $('.modal_video iframe').attr('src','about:blank');
        $('.modal_popup_video .modal_video').parent().hide();
        $('#main .modal_popup_video').stop().fadeOut(200);
    });
    
    //탭메뉴 on
    $('.tab_con>div:gt(0)').hide();
    
    $('.section3 .tab_menu li').click(function(e){
        e.preventDefault();
       $(this).addClass('on').siblings().removeClass('on'); 
    
            var num=$(this).index();
        
        $('.tab_con>div').eq(num).show().siblings().hide();
    });
    
    
    //family on
    
    $('.family .btn_family').click(function(){
        $(this).siblings().slideToggle(200);
        $(this).toggleClass('on');
    });
    
});


















