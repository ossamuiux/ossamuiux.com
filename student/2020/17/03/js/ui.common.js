var front = {
    st: 0, // scrollTop
    header: null, // #header는 front객체가 생성되는 시점에는 없으므로 null타입으로 초기화만 진행하고 

    init: function() {
        // init메서드느 레디함수에서 실행되므로 #header를 선택할수있음
        this.header = $('#header');
        this.gnbUI();
        this.mgnbUI();
        this.mainSlider();
        this.headerLangUI(); // 언어바꾸기 호버토글
        this.businessSlider(); // 비지니스 슬라이더
        this.snsSlider(); // sns슬라이더
        this.footerFamilysite(); // 푸터 패밀리사이트

    },
    // 언어 바꾸기
    headerLangUI: function () {
        $('#header .lang_wrap .btn_lang').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.lang').slideToggle(400);
        });
    },
    gnbUI: function() {
        // 여러군데 써야하니까 밖에 객체로 만듬. 밖에 null하고, init에 만들어줌.
        var header = $('#header');

        $('#header .gnb').on('mouseenter', function() {
            $('#header').addClass('on');
        }).on('mouseleave', function() {
            header.removeClass('on');
        });
    },
    mgnbUI: function() {
        // 전체 메뉴 열고 닫기
        $('#header .btn_sitemap').on('click', function() {
            $('#header .gnb_wrap').toggleClass('on');
        });
        $('#header .btn_close').on('click', function() {
            $('#header .gnb_wrap').removeClass('on'); //껐다가 켜도 다시 작업될수있게
        });
        

        // $('.m_gnb>li>a').on('click', function() {
        //     // depth2열고 닫을때 마이너스가 보이고 이후에 / 다른 형제는 제거
        //     // m_gnb>li
        //     $(this).parent().toggleClass('on').siblings().removeClass('on');

        //     // slideToggle이후에 부모 li의 형제 siblings를 depth를 찾아서(find) 슬라이드 닫음
        //     $(this).siblings('.depth2').slideToggle().parent().siblings().find('.depth2').slideUp();
        // });
    },
    // 메인슬라이더
    mainSlider: function() {
        var mainSlider = new Swiper('.main_slider', {
            loop: true,
            effect: 'fade',
            speed: 2000,
            

            pagination: {
                el: '.swiper-pagination', // 위쪽에 지정한 슬라이더 안쪽요소만 불러짐
                clickable: true, // 페이지네이션 버튼 클릭
            },
            // 페이지 자동
            autoplay: {
                delay: 6000, //다음슬라이더 들어오는 시간
                disableOnInteraction: false, // 슬라이더안쪽에서 인터렉션 발생시 안멈추게
            },
        });
    },
    // 비지니스 슬라이더
    businessSlider: function() {
        var businessSlider = new Swiper('.business_slider', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: { // 숫자 페이지네이션
                el: '.swiper-pagination', 
                type: 'fraction'
            },
            scrollbar: { // bar 형태 스크롤
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });
    },
    // sns슬라이더
    snsSlider: function() {
        var slider = new Swiper('.sns_slider', {
            slidesPerView: 3,
            spaceBetween: 30,

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
    // 푸터 패밀리사이트
    footerFamilysite: function () {
        $('#footer .footer_wrap .family_site>a').on('click', function (e) {
            e.preventDefault();

            $(this).siblings('.site').slideToggle(400);
        });
    },

};

$(document).ready(function() {
    front.init();

    $(window).resize(function() {
        var winH = $(window).height();
        
        $('.main_slider').height(winH);
    }).trigger('resize');
   
});

