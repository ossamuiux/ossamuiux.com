var front = {
    _scrollTop: 0, // scrollTop
    dimm: null, // #dimm 선택자 변수
    body: null, // body 선택자 변수
    desktopMenu: null, // 전체메뉴 아이콘 선택자 변수
    winW: null, // 브라우저 창 가로길이 변수
    gnb: null, // 데스크탑 gnb
    mGnb: null, // 모바일 gnb
    

    init: function () {
        this.dimm = $('#dim');
        this.body = $('body');
        this.gnbMenu = $('#header .menu');
        this.gnb = $('#header .all_menu_wrap');
        this.mGnb = $('#header .m_gnb_wrap');

        this.gnbUI(); // 전체메뉴 열고닫기
        this.mgnbUI(); // 모바일 내비게이션 열고닫기
        this.mVisualSlider(); // 모바일 메인 슬라이더
        this.noticeSlider(); // 메인 notice 슬라이더
        this.newsSlider(); // 메인 SMEG news 슬라이더
        this.megazineSlider(); // 메인 SMEGzaine 슬라이더
        this.mReviewSlider(); // 모바일 SMEGReview 슬라이더
        this.brandSlider(); // 브랜드 슬라이더
        this.serviceDropUI(); // 서비스 드롭다운 UI
        this.mfooterUI(); // 모바일 푸터 사업자정보 UI
        this.fixedHeader(); // 헤더 fixed 처리
        this.fadeBtn(); // 상단버튼 토글 UI
        this.moveTop(); // 상단버튼 상단으로 가기
    },
    // 헤더 fixed 처리
    fixedHeader: function () {
        var header = $('#header'); //헤더 선택자 변수
        var headerY = header.find('.top_header').outerHeight(true); // 헤더 fixed될 기준 높이 변수

        // 데스크탑, 헤더 fixed 처리
        if (front.winW > 1200) {
            // 데스크탑 fixed 처리 상단 헤더보다 스크롤탑값이 크면 fixed
            if (front._scrollTop >= headerY) {
                header.addClass('fixed');

                // 헤더가 fixed 일 때 .gnb에 마우스 hover시 헤더 fixed2 추가/제거
                header.find('.gnb').on('mouseenter', function() {
                    if(header.hasClass('fixed')) { header.addClass('fixed2') };
                }).on('mouseleave', function() {
                    if(header.hasClass('fixed')) { header.removeClass('fixed2') };
                });
            // 데스크탑 fixed 제거, 상단 헤더보다 스크롤탑값 작으면
            } else {
                header.removeClass('fixed');
            }
            // 모바일 헤더 fixed 처리
        } else if (front.winW <= 1200) {
            if (front._scrollTop > 0) {
                header.addClass('fixed');
            } else {
                header.removeClass();
            }
        }
    },
    // gnb, mGnb 초기화 메서드
    gnbReset: function () {
        // 창크기가 1200 보다 작으면 gnb on해제, 1200보다 크면 mGnb 해제
        (front.winW < 1200) ? front.gnb.removeClass('on'): front.mGnb.removeClass('on');
        if (front.winW > 1200) {
            front.body.removeClass('on')
        }; // 데스크탑 dim 해제
    },
    // 전체메뉴 열고 닫기
    gnbUI: function () {
        // 메뉴 클릭 시 데스크탑 gnb on 처리
        this.gnbMenu.on('click', function (e) {
            e.preventDefault();

            front.gnb.addClass('on'); // on클래스 처리
        });
        // 닫기 버튼
        this.gnb.find('.btn_close').on('click', function (e) {
            e.preventDefault();

            front.gnb.removeClass('on');
            front.body.removeClass('on');
        });
    },
    // 모바일 내비게이션 열고닫기 + 아코디언
    mgnbUI: function () {
        // menu 클릭 시 mGnb on 처리
        this.gnbMenu.on('click', function (e) {
            e.preventDefault();

            front.mGnb.addClass('on');
            if (front.winW < 1200) {
                front.body.addClass('on');
            }
        });
        // 닫기버튼 클릭 시, body.on, mGnb, gnbMenu, .all_menu_wrap on 해제
        $('.m_gnb_wrap .btn_close').on('click', function () {
            front.mGnb.removeClass('on').find('.m_gnb>li>a').removeClass('active').siblings('.depth2').hide(); // 아코디언 초기화
            front.body.removeClass('on');
        });
        // 아코디언
        this.mGnb.find('.m_gnb>li>a').on('click', function (e) {
            e.preventDefault();
            // 아코디언 처리 + +아이콘처리
            $(this).toggleClass('active').siblings('.depth2').stop().slideToggle(500).parent().siblings().find('.depth2').slideUp(500).siblings().removeClass('active');
        });
        // dim 처리
        this.dimm.on('click', function (e) {
            e.preventDefault();

            front.body.removeClass('on');
            front.mGnb.removeClass('on');
            front.mGnb.find('.m_gnb>li>a').removeClass('active').siblings('.depth2').hide(); // 아코디언 초기화
        })
    },
    // 모바일 메인 비주얼 슬라이더
    mVisualSlider: function () {
        var slider = new Swiper('.visual_slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    },
    // 메인 notice 슬라이더 + pagination sync
    noticeSlider: function () {
        var numb = $('.main_notice .list_numb li'); // 숫자 pagination li 선택자 변수
        var slide = $('.main_notice  .swiper-slide'); // swiper-slide 선택자 변수

        var slider = new Swiper('.notice_slider', {
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
            },
            on: {
                // 슬라이드 넘어갈 때 실행되는 함수, 숫자 pagination sync
                slideChange: function () {
                    var idx = slider.realIndex; // 현재 슬라이더 인덱스 변수

                    numb.eq(idx).addClass('active').siblings().removeClass('active');
                }
            },
        });
        // 숫자 pagination sync
        numb.on('click', function (e) {
            e.preventDefault();
            var idx = $(this).index(); // 숫자 pagination 인덱스 변수

            slider.slideTo(idx, 500); // 클릭한 숫자 인덱스에 맞는 슬라이드로 이동
        })
    },
    // SMEG News 슬라이더
    newsSlider: function () {
        var slider = new Swiper('.news_slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            }
        });
    },
    megazineSlider: function () {
        var slider = new Swiper('.megazine_slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                }
            }
        });
    },
    // 모바일 review 슬라이더
    mReviewSlider: function () {
        var slider = new Swiper('.review_slider', {
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 1.5,
                },
                767: {
                    slidesPerView: 1,
                }
            }
        });
    },
    // 브랜드 슬라이더
    brandSlider: function () {
        var tab = $('.main_brand .list_tab li'); // 탭메뉴

        var slider = new Swiper('.brand_slider', {
            loop: false,

            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                // 슬라이드 넘어갈 때 실행되는 함수, 숫자 pagination sync
                slideChange: function () {
                    var idx = slider.realIndex; // 현재 슬라이더 인덱스 변수

                    tab.eq(idx).addClass('active').siblings().removeClass('active'); // 탭 sync
                }
            },
        });
        // 리스트 탭 sync
        tab.on('click', function (e) {
            e.preventDefault();
            var idx = $(this).index(); // 클릭 한 탭의 인덱스 변수

            $(this).addClass('active').siblings().removeClass('active'); // active 처리
            slider.slideTo(idx, 500); // 클릭 한 탭으로 이동
        });
    },
    // 서비스 드롭다운
    serviceDropUI: function () {
        $('#container .main_membership .btn_membership').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('active').parent().siblings('.bottom_membership').slideToggle(); // 토글 슬라이드
        });
    },
    // 모바일 푸터 사업자 정보 UI
    mfooterUI: function () {
        $('#footer .btn_addr').on('click', function (e) {
            e.preventDefault();

            $(this).parent().toggleClass('active');
        });
    },
    // 상단으로 가기 버튼 UI
    fadeBtn: function () {
        var footerBtn = $('#footer .btn_wrap'); // 상단 버튼 선택자

        // 사라짐, 나타남 처리
        if (front._scrollTop >= $(window).outerHeight()) {
            footerBtn.fadeIn();
        } else {
            footerBtn.fadeOut();
        }
    },
    moveTop: function() {
        var btnTop = $('#footer .btn_wrap .btn_top');

        btnTop.on('click', function(e) {
            e.preventDefault();

            // 최상단으로 가기
            $('html, body').stop().animate({scrollTop: 0}, 800);
        });
    }
};

$(document).ready(function () {
    front.init();

    $(window).scroll(function () {
        front._scrollTop = $(this).scrollTop(); // 현재 스크롤탑 위치 값
        front.fixedHeader(); // 헤더 fixed 처리
        front.fadeBtn(); // 상단버튼 scroll0에서는 사라짐 처리
    }).trigger('scroll');

    $(window).resize(function () {
        front.winW = $(window).outerWidth(); // 현재 창크기 가로길이 값
        front.fixedHeader(); // 헤더 fixed 처리
        front.gnbReset(); // 초기화 메서드
    }).trigger('resize');
});