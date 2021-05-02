(function() {

    init();
    
    function init() {
        headerToggle();
        mainSliderToggle();
    }
    
    
    // *************** header ***************
    function headerToggle() {
        $(window).scroll(function() {
            var sc = $(this).scrollTop();

            if(sc >= 85) {
                $('#header').addClass('on');
            } else if (sc < 85) {
                $('#header').removeClass('on');
            }
        });

        $('#header .select_wrap select').on('change', function() {
            location.href = $(this).val();
        });

        $('#header .btn_sitemap').on('click', function() {
            $(this).stop().toggleClass('active');

            $('#header .sitemap_wrap').toggleClass('active');
        });

        var mGnbSlider = new Swiper('.m_gnb_slider', {
            slidesPerView: 'auto',
        });
    }




    // *************** container ***************
    
    
    // 메인 슬라이더
    function mainSliderToggle() {
        var mainSlider = new Swiper('.main_slider', {
            loop: true,
            speed: 700,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        
        var sliderToggle = true;

        $('#container .btn_pause').on('click', function() {
            
            
            if(sliderToggle) {
                mainSlider.autoplay.stop();
                $(this).addClass('on').text('자동재생');
            } else {
                mainSlider.autoplay.start();
                $(this).removeClass('on').text('일시정지');
            }
            sliderToggle = !sliderToggle;
        });
    }


    // 혜택
    var benefitSlider = new Swiper('.benefit_slider', {
        slidesPerView: 'auto',
        spaceBetween: 6,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });



    // 서비스
    var serviceSlider = new Swiper('.service_slider', {
        loop: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    // *************** footer ***************
    $('#footer .txt_wrap h3 .btn_info').on('click', function() {
        $(this).stop().toggleClass('on')
        $('#footer .txt_wrap .info_wrap').stop().slideToggle(500);
    });

    $('#footer .select_wrap select').on('change', function() {
        location.href = $(this).val();
    });





    // *************** quickMenu ***************
    $('#quickMenu .m_btn_sitemap').on('click', function(e) {
        // e.preventDefault();
        $('#wrap').addClass('active');
        $('#quickMenu .m_gnb').stop().addClass('active');
    });

    $('#quickMenu .m_gnb .btn_close').on('click', function() {
        $('#wrap').removeClass('active');
        $('#quickMenu .m_gnb').stop().removeClass('active');
    });





    // ***** 탑버튼 *****
    $(window).scroll(function() {
        var sc = $(this).scrollTop();

        if(sc >= 10) {
            $('#top').addClass('active');
        } else {
            $('#top').removeClass('active');
        } 
    });
    $('#top a').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            'scrollTop': 0
        });
    });


})();