var front = {
    scrollTop: 0,
    btnTop: null,
    init: function() {
        front.btnTop =  $('#footer .btn_top');
        
        front.toggleBtnTop();
        front.moveTop();
        front.headerUI();
        front.btnLangUI();
        front.mainSliderUI();
        front.productSliderUI();
        front.bannerSliderUI();
        front.btnLnbUI();
        front.btnFamilyUI();
        front.btnEventUI();
        front.btnMoreUI();
        front.tabMenuUI();
        front.brandSliderUI();   
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
    headerUI: function() {
        // 헤더높이 120 -> 440
        $('#header .bottom_header .gnb').on('mouseenter focusin', function() {
            $(header).addClass('on');
        }).on('mouseleave focusout', function() {
            $(header).removeClass('on');
        });
    },
    btnLangUI : function() {
        $('#header .lang_wrap .btn_lang').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on');
            $(this).siblings('.list_lang').slideToggle(300);

        });

    },
    mainSliderUI: function() {
        var mainSlide = new Swiper('.main_slider', {
            direction: 'horizontal', 
            loop: true, 
            simulateTouch: false, 
            speed: 600, 
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            pagination: {
              el: '.swiper-pagination',  
              clickable: true, 
            },
        });
    },
    productSliderUI: function() {
        if( $('.logo_slider').length > 0 ){

        var logoSlide = new Swiper('.logo_slider', {
            direction: 'horizontal', 
            loop: true, 
            simulateTouch: false, 
            speed: 600, 
            navigation: { 
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
     
        var productSlide = new Swiper('.product_slider', {
                direction: 'horizontal', 
                loop: true, 
                simulateTouch: false, 
                speed: 600,  
        });
        
        logoSlide.controller.control = productSlide;
        productSlide.controller.control = logoSlide;
        } 
    },
    bannerSliderUI: function() {
        var bannerSlide = new Swiper('.banner_slider', { 
            direction: 'horizontal', 
            simulateTouch: false, 
            loop: true,
            speed: 600, 
            pagination: { 
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: { 
                dalay: 5000, 
                disableOnInteraction: false, 
            },
        });
    },
    btnLnbUI: function() { //버튼은 하나만 클릭되도록 하고 toggle기능 구현   
        var btnLnb =  $('.list_lnb>a');      
		btnLnb.on('click', function(e){
            e.preventDefault();
            $('.lnb_wrap .inner .lnb>li>a').toggleClass('on').closest('.list_lnb').find('.list_lnb>a').removeClass('on');
            $(this).parent().toggleClass('on'); 
            $(this).next('.depth2').slideToggle(300);
        });

        $('.list_lnb').on('mouseleave', function(){
            $(this).find('.depth2').slideUp(300, function(){
                btnLnb.removeClass('on');
            });
        });
    },
    btnFamilyUI: function() {
        $('.family_wrap').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on');
        });
    },
    // active처리 꺼두기
    btnEventUI: function() {
        var eventBtn = $('.event_page .btn_event_wrap .btn_event li');

        eventBtn.on('click', function(e) {
            e.preventDefault();
            // $(this).addClass('active').siblings().removeClass('active');
        });
    },
    btnMoreUI: function() {
        var moreBtn = $('.btn_more');
    
        moreBtn.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on');
        });
    },
    tabMenuUI: function() {
        $('.company_page .tab_menu li').on('click', function(e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
        })
    },
    brandSliderUI: function() {
        var brandSlide = new Swiper('.brand_slider', {
            direction: 'horizontal', 
            loop: true, 
            slidesPerView: 3, 
            centeredSlides: true,  
            simulateTouch: true, 
            speed: 500, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 4000,
            },
        });
        brandSlide.on('slideChange', function() {
            //console.log('슬라이드 변경됨', storySlider.realIndex);
            $('.brand_page .brand_wrap .txt_wrap .txt').eq(brandSlide.realIndex).fadeIn(200).siblings().fadeOut(200);
        }); 
    },
};

$(document).ready(function() {
    front.init();
    
    $(window).scroll(function() {
        front.scrollTop = $(this).scrollTop();
        // console.log(front.scrollTop);
        front.toggleBtnTop();
    });
});