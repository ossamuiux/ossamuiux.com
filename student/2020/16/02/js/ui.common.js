var front = {
    scrollTop: 0,
    btnTop: null,
    introCon: null,
    init: function() {
        front.btnTop =  $('#footer .btn_top');
        front.introCon = $('.company_page .intro_con'); 

        front.toggleBtnTop();
        front.moveTop();
        front.gnbUI();
        front.mainSliderUI();
        front.productSliderUI();
        front.eventSliderUI();
        front.login();
        front.lnbSlider();
        front.scrollMainUI();
        front.cocomongSliderUI();
    },
    toggleBtnTop: function() {
        if(front.scrollTop >= 500) {
            front.btnTop.fadeIn(200);
        } else {
            front.btnTop.fadeOut(200);
        }
    },
    moveTop: function() {
        front.btnTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 500);
        });
    },
    gnbUI: function(){
        $('#header .m_btn').on('click', function() {
            $(this).addClass('on');
            $('body').toggleClass('on');
            $('#header .gnb>li').removeClass('on');
            $('#header .depth2').slideUp();
        });

        $('#header .gnb>li>a').on('click', function() {
            $(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();
        });

    },
    mainSliderUI: function() {
        var mainSlide = new Swiper('#container .main_visual_slider', {
            loop: true, 
            autoplay: {
                delay: 3000, 
            },
            pagination: {
              el: '.swiper-pagination',  
              clickable: true, 
            },
        });
    },
    productSliderUI: function() {
        if( $('.logo_slider').length > 0 ){

        var logoSlide = new Swiper('.brand_wrap .logo_slider', {
            loop: true, 
            simulateTouch: false, 
            speed: 600, 
            navigation: { 
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
     
        var productSlide = new Swiper('.brand_wrap .product_slider', {
                loop: true, 
                simulateTouch: false, 
                speed: 600,  
        });
        
           logoSlide.controller.control = productSlide;
           productSlide.controller.control = logoSlide;
        } 
    },
    eventSliderUI: function() {
        var eventSlide = new Swiper('#container .event_slider', {
            loop: true, 
            slidesPerView: 'auto',
            spacebetween: 5,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
        });
    },
    login: function() {
        $('.login_page .btn_login a').on('click', function(){
            console.log('로그인 시도');
            alert('아이디를 입력해주세요.');
        });
    },
    // btnGo: function(){
    //     $('#container .event_wrap .btn_go').on('click', function(e){
    //         e.preventDefault();
    //         $(this).addClass('on');
    //     });
    // },
    lnbSlider: function(){
        var comSlider = new Swiper ('.company_page .lnb_category', {
            slidesPerView: 'auto',
        });
    },
    scrollMainUI: function() {
        var posArr = [];
        var idx = 0;

        while (idx < front.introCon.length){
            posArr.push(front.introCon.eq(idx).offset().top - 350);
            idx++;
        }

        //스크롤바 위치에 따라 intro_con의 이미지를 위로 띄움
        if ( front.scrollTop >= posArr[0] && front.scrollTop < posArr[1]) { 
            front.introCon.eq(0).addClass('on');
        } else if (front.scrollTop >=  posArr[1] && front.scrollTop < posArr[2]) {
            front.introCon.eq(1).addClass('on');
        } else if (front.scrollTop >= posArr[2] && front.scrollTop < posArr[3] ) {
            front.introCon.eq(2).addClass('on');
        } else if (front.scrollTop >= posArr[3]) {
            front.introCon.eq(3).addClass('on');
        } 
    },
    cocomongSliderUI: function() {
        var cocoSlide = new Swiper('.brand_page .cocomong_slider', {
            loop: true, 
            slidesPerView: 'auto',
            spacebetween: 5,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
        });
    },
};

$(document).ready(function() {
    front.init();
    
    $(window).scroll(function() {
        front.scrollTop= $(this).scrollTop();
        front.scrollMainUI();
    });
});