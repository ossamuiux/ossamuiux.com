var front = {
    st: 0, // scrollTop
    header: null, 
    init: function() {
        this.header = $('#header');
        this.gnbUI();
        this.mgnbUI();
        this.savingsUI();
        this.foreignMap();
        this.moonUI();
        this.cardSliderUI();
    },
    gnbUI: function() {
        var header = $('#header');

        $('#header .gnb>li>a').on('mouseenter', function() {
            $(this).siblings().find('#header .gnb .depth2_wrap').addClass('on')
        }).on('mouseleave', function() {
            $(this).siblings().find('#header .gnb .depth2_wrap').removeClass('on');
        });

        $('.btn_submit').on('mouseenter', function() {
            header.removeClass('on');
        });
    },
    mgnbUI: function() {
        $('#header .header_inner .btn_sitemap').on('click', function() {
            $(this).toggleClass('on');
            $('body, .m_gnb_wrap').toggleClass('on');
        });

        $('#header .header_inner .m_gnb>li>a').on('click', function() {
            $('#header .m_gnb .depth2_wrap').toggleClass('on');
        });
    },
    savingsUI: function() {
        //savings에 스크롤이 잡히면 이미지가 오른쪽에서 왼쪽으로 움직임
        var savings = $('#container .main_savings_wrap .savings_inner .right_savings');
        if (front.st >= 1400 ){
            savings.addClass('on');
        }
    },
    foreignMap: function() {
        var mapImg = $('#container .main_foreign_wrap .foreign_inner .left_foreign');
        // console.log(front.st);
        if (front.st >= 3800 ){
            mapImg.addClass('on');
        }
    },
    moonUI: function() {
        var moon = $('#container .main_loan_wrap .loan_inner .moon');
        // console.log(front.st);
        if (front.st >= 5030 ){
            $('#container .main_loan_wrap').addClass('on');
            moon.addClass('on');
        }
    },
    cardSliderUI: function() {
        var newSlide = new Swiper('.card_slider', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    },
        
};

$(document).ready(function() {
    front.init();

    $(window).scroll(function() {
        front.st = $(this).scrollTop();
        front.savingsUI();
        front.foreignMap();
        front.moonUI();
    });

    // $(window).resize(function() {
    //     front.fixedHeader();
    // });
});