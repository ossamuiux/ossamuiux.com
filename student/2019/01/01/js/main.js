$(document).ready(function(){
    
    //header-바 모션
    $('.gnb>li').on('mouseenter',function(){
        var num=$(this).find('>a').position().left;
        var num2=$(this).find('>a').width();
        $('.gnb_wrap .bar').show().stop().animate({left:num,width:num2},250);
        console.log(num);
    });
    
    $('.gnb>li').on('mouseleave',function(){
        $('.gnb_wrap .bar').hide();
    });
    
    //index-main_visual 스크롤 이동버튼
    $('.main_visual .move_brand').click(function(e){
	e.preventDefault();
	var num=$('.main_brand').offset().top;
	console.log(num);
	$('html, body').animate({scrollTop:num},800);
    });
    
    //index-tvcf 동영상 모달팝업
    var arrcf=[
        'https://www.youtube.com/embed/gbVOzxWmnVM?autoplay=1&rel=0&vq=hd1080',
        'https://www.youtube.com/embed/QwHKwNIXPUI?autoplay=1&rel=0&vq=hd1080',
        'https://www.youtube.com/embed/U-wNGaHBSQw?autoplay=1&rel=0&vq=hd1080'
    ]
    
    $('.link_tvcf li').on('click',function(e){
        e.preventDefault();
        var num=$(this).index();
        $('.modal_video_wrap').show();
        $('.modal_video .modal_con').eq(num).show().find('iframe').attr('src',arrcf[num]);
    });
    
    $('.modal_con button').on('click',function(){
        $('.modal_video_wrap, .modal_con').hide().find('iframe').attr('src', 'about:blank');
    });
    
    //index-event 슬라이더
    var mySwiper = new Swiper ('.event_slider', {
      // Optional parameters
        loop: true,
        simulateTouch:false,
        slidesPerView:2,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.event_wrap .swiper-button-next',
            prevEl: '.event_wrap .swiper-button-prev',
        }
    });
    
    //탑버튼 스크롤시 동작
    $(window).on('scroll', function(){
        var num=$(this).scrollTop();
        
        if(num>=130){
            $('#footer .btn_top').stop().fadeIn(300);
        } else {
            $('#footer .btn_top').stop().fadeOut(300);
        }
    });
    
    //탑버튼 스크롤탑 동작
    $('#footer .btn_top').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},900);
    });
    
    //패밀리사이트 동작
    var sw=true;
    $('#footer .btn_family').on('click',function(){
        if (sw==true) {
            $('#footer .list_family').show();
            sw=false;
        } else {
            $('#footer .list_family').hide();
            sw=true;
        }
    });
    
    //aboutmaxim-카테고리액티브, 버튼 이동
    $('#container.about_maxim .btn_brand a').on('click', function(){
       $(this).addClass('active').siblings().removeClass('active'); 
    });
    
    $('.btn_brand a').eq(0).click(function(e){
        e.preventDefault();
        var num=$('.brand_info').offset().top;
        $('html, body').animate({scrollTop:num},800);
    });
    
    $('.btn_brand a').eq(1).click(function(e){
        e.preventDefault();
        var num=$('.brand_history').offset().top;
        $('html, body').animate({scrollTop:num},800);
    });
    
    $('.btn_brand a').eq(2).click(function(e){
        e.preventDefault();
        var num=$('.brand_slogan').offset().top;
        $('html, body').animate({scrollTop:num},800);
    });
    
    function modalSlider(){
        //product-제품모달팝업슬라이드
        var mySwiper2 = new Swiper('.slider_wrap .pro_slider', {
            simulateTouch:true,
            loop:true,
            slidesPerView: 4,
            spaceBetween: 10,
            simulateTouch: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }); 
    }
    
    //product-카테고리액티브
    $('#container.product .product_category li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
    });
    
    //product-제품모달팝업
    $('.list_product button').on('click',function(e){
       e.preventDefault();
        var num=$(this).closest('li').index();
        $('.product_modal_wrap .product_modal').eq(num).show();
        modalSlider();
    });
    
    $('.product_modal .close').on('click',function(){
        $('.product_modal_wrap .product_modal').hide();
    });

    //news-카테고리액티브
    $('#container.event .btn_event button').on('click', function(){
       $(this).addClass('active').siblings().removeClass('active'); 
    });
    
});




