$(document).ready(function(){
    
    //모바일 탭메뉴
        $('.m_menu .tab_menu .tab_con .tab_con_inner:gt(0)').hide();
    
    $('.m_menu .m_gnb li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        var num=$(this).index();
        //console.log(num);
        
        $('.m_menu .tab_menu .tab_con .tab_con_inner').eq(num).show().siblings().hide();
    });
    
    //햄버거메뉴
    $('#header .btn_menu').click(function(){
       $('#header, #wrap').addClass('on');
        $('#header .m_cover').fadeIn(300);
    });
    
    $('#header .m_cover').click(function(){
       $('#header, #wrap').removeClass('on'); 
        $('#header .m_cover').fadeOut(300);
    });
    
    //메인비주얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        autoplay: {
            delay: 3000
        },
        speed:600,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    var mySwiper = new Swiper ('.event_wrap', {
        loop: true,
        speed:600,
        pagination: {
            el: '.event_wrap .swiper-pagination',
            clickable:true
        },
    });
    
    //신제품소개 슬라이더
    var mySwiper = new Swiper ('.np_slider', {
        slidesPerView: 'auto',
    });
    //슬라이더 인덱스 추출하기
    $('.np_slider .swiper-slide').click(function(e){
        e.preventDefault();
    
    });
    //패밀리사이트    
    $('#footer .btn_family').click(function(){
        $('#footer .family_site').slideToggle();
        $(this).toggleClass('on');
    });
    
    
});

    
    
    
