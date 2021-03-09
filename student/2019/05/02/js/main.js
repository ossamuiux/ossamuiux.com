$(document).ready(function(){
    //메뉴
    $('.slide_menu').on('click',function(){
        $('.slide_menu_wrap').addClass('on');
        $('.dimm').stop().show();
    });
    
    $('.close_menu, .dimm').on('click',function(){
        $('.slide_menu_wrap').removeClass('on');
        $('.dimm').stop().hide();
    });
    
    //검색창
    $('.btn_search').on('click',function(){
        $(this).toggleClass('on');
        $('.search_wrap').animate({width:'toggle'},350);    
    });
    
    //gnb창
    $('.inner_menu>li>a').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).toggleClass('on');
        $(this).siblings().stop().slideToggle();
    });
    
    //메인 슬라이드
    var mySwiper = new Swiper ('.swiper-container.main_visual', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
    
    //section1 슬라이드
    var swiper = new Swiper('.swiper-container.section1', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 150,
            depth: 150,
            modifier: 1,
            slideShadows : true
        }
    });
    
    
    //페밀리 버튼
    $('.btn_family').on('click',function(){
        $('.list_family').slideToggle();
        $(this).toggleClass('on');
    });
    
    //탑버튼
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        
        if(num>=600){
            $('#footer .btn_top').stop().fadeIn(500);
        } else {
            $('#footer .btn_top').stop().fadeOut(500);
        }
    });
    
    $('#footer .btn_top').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
    
    //로케이션 버튼
    $('.btn_sub').on('click',function(){
        $(this).siblings().slideToggle();
        $(this).toggleClass('on');
    });
    
    //네비게이션 클릭
    $('.navigation_wrap li a').on('click',function(){
        $(this).parent().toggleClass('active').siblings().removeClass();
    });
    
});














