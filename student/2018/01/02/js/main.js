$(document).ready(function(){
    $('#header .btn_search').click(function(){
        $('.modal_search').stop().slideToggle();
        $('#wrap').toggleClass('on');
        $(this).toggleClass('on');
    });
    
    //모바일 탭메뉴
    $('.con_menu_wrap:gt(0)').hide();
    
    $('.m_menu .btn_tab li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        var num=$(this).index();
        console.log(num);
        
    $('.con_menu_wrap').eq(num).show().siblings().hide();
    });

    //햄버거메뉴
    $('#header .btn_menu').click(function(){
        $('#header, #wrap, body').addClass('on');
        $('#header .m_cover').fadeIn(300);
    });
    
    $('.m_menu .btn_close').click(function(){
        $('#header, #wrap, body').removeClass('on');
        $('#header .m_cover').fadeOut(300);
    });
    
    //메인비쥬얼 슬라이더 초기화 셋팅
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    var sw=true;
    $('.main_visual .btn_pause').click(function(){
        
        if(sw==true){
            mySwiper.autoplay.stop();
            sw=false;
        } else {
            mySwiper.autoplay.start();
            sw=true;
        }
        console.log(sw);
        $(this).toggleClass('on');
    });
    
    var mySwiper2 = new Swiper('.icon_list', {
        slidesPerView: 'auto',
        //spaceBetween: 30,
        centeredSlides: true,
        loop: true
    });
    
    $('.family .btn_family').click(function(){
       $('.family .family_site').slideToggle(100); 
    });
    
    var mySwiper3 = new Swiper('.sub_menu', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true}
    });
});


















