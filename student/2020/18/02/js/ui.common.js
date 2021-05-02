var front = {
    _scrollTop: 0, // scrollTop 변수 초기화
    companyTit: null, // 서브페이지 제목 선택자 변수 초기화 
    sectionPosY: [], // 서브페이지 섹션 제목 높이 배열 변수 초기화

    init: function () {
        front.companyTit = $('.company_overview .company_tit'); // 팔도개요 서브페이지 섹션 제목 선택자 

        front.navUI(); // 네비게이션 열기/닫기
        front.gnbUI(); // gnb 아코디언 UI
        front.mainVisualSlider(); // 메인 비주얼 슬라이더
        front.newProductSlider(); // 신제품 슬라이더
        front.brandProductSlider(); // 브랜드제품 슬라이더
        front.brandProductTabUI(); // 브랜드제품 탭 - 슬라이더 연결
        front.newSlider(); // 팔도 뉴스 슬라이더
        front.recipeSlider(); // 팔도 레시피 슬라이더
        front.subLNBSlider(); // 서브페이지 LNB 슬라이더
        front.scrollTxtAnim(); // 서브페이지 - 팔도 소개 페이지 섹션 스크롤 애니메이션효과
        front.relProductSlider(); // 제품 상세 소개페이지 - 연관 상품 슬라이더
        front.relProductTabUI(); // 제품 상세 소개페이지 - 연관 상품 + 영양성분표 연결
        front.videoCFSlider(); // 제품 상세 소개페이지 - CF영상 슬라이더
    },
    // 네비게이션 열기/닫기
    navUI: function () {
        var body = $('body');

        $('#header .btn_nav').on('click', function (e) {
            e.preventDefault();

            $(this).next('.gnb').addClass('on');
            body.addClass('on');
        });
        $('#header .gnb .btn_close').on('click', function () {
            $(this).closest('.gnb').removeClass('on').find('.depth1>li').removeClass('on');
            body.removeClass('on');
            // gnbUI초기화
            $('#header .gnb .depth2').slideUp();
        });
        // dimm클릭 시 네비게이션 닫기 + gnbUI(초기화) + 화살표 초기화
        $('#dimm').on('click', function () {
            body.removeClass('on');
            $(this).siblings('.gnb').removeClass('on').find('.depth1>li').removeClass('on').find('.depth2').slideUp();
        });
    },
    // gnb 아코디언 UI
    gnbUI: function () {
        $('#header .gnb .depth1>li>a').on('click', function () {
            $(this).next('.depth2').stop().slideToggle().parent().toggleClass('on').siblings().find('.depth2').slideUp().parent().removeClass('on');
        });
    },
    // 메인 비주얼 슬라이더
    mainVisualSlider: function () {
        var slider = new Swiper('.main_visual_slider', {
            loop: true,
            simulateTouch: true,
            speed: 900,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        })
    },
    // 신제품 슬라이더
    newProductSlider: function () {
        var slider = new Swiper('.new_product_slider', {
            loop: true,
            simulateTouch: true,
            speed: 900,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    // 브랜드제품 슬라이더
    brandProductSlider: function () {
        var slider = new Swiper('.brand_product_slider', {
            loop: true,
            simulateTouch: true,
            speed: 900,
            slidesPerView: 'auto',
            spaceBetween: 35,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    // 브랜드제품 탭 - 슬라이더 연결
    brandProductTabUI: function () {
        $('.main_product .brand_product .brand_tab li a').on('click', function (e) {
            e.preventDefault();
            var idx = $(this).parent().index();

            // 탭 active처리
            $(this).parent().addClass('active').siblings().removeClass('active');
            // 탭 idx에 따라 브랜드 슬라이더 연결
            $('.main_product .tab_wrap .brand_product_slider').eq(idx).addClass('active').siblings().removeClass('active');

        });
    },
    // 팔도 뉴스 슬라이더
    newSlider: function () {
        var slider = new Swiper('.news_slider', {
            loop: true,
            simulateTouch: true,
            speed: 900,
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    // 팔도 레시피 슬라이더
    recipeSlider: function () {
        var slider = new Swiper('.recipe_slider', {
            loop: false,
            speed: 900,
            spaceBetween: 15,
            simulateTouch: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                clickable: true,
            },
        });
    },
    // 서브페이지 LNB 슬라이더
    subLNBSlider: function () {
        var slider = new Swiper('.lnb_slider', {
            loop: false,
            speed: 900,
            simulateTouch: true,
            slidesPerView: 'auto',
        });
    },
    // 서브페이지 - 팔도 소개 페이지 섹션 스크롤 애니메이션효과
    scrollTxtAnim: function () {
        // console.log("현재 스크롤 값", front._scrollTop);
        front.sectionPosY = []; // 스크롤 이벤트마다 section의 높이 값 배열 초기화

        // section의 제목 높이값을 front.sectionPosY 배열에 추가
        for (i = 0; i < front.companyTit.length; i++) {
            front.sectionPosY.push(front.companyTit.eq(i).offset().top - front.companyTit.eq(0).offset().top);
        }
        // scroll값이 0일 때 섹션2, 3의 on처리 제거 (초기화)
        if (front._scrollTop === 0) {
            for (i = 0; i < front.sectionPosY.length; i++) {
                console.log('실행됨')
                front.companyTit.eq(i + 1).removeClass('on').siblings().removeClass('on');
            }
        }
        // sectionPosY의 높이값 배열의 길이 횟수만큼 판단하여 companytit에 on 클래스 추가 처리 + 형제요소 con_wrap, vision_wrap에도 on추가 처리
        for (i = 0; i < front.sectionPosY.length; i++) {
            if (front._scrollTop >= front.sectionPosY[i]) {
                front.companyTit.eq(i).addClass('on').siblings().addClass('on');
                console.log('on클래스 추가됨')
            }
        }
    },
    // 제품 상세 소개페이지 - 연관 상품 슬라이더
    relProductSlider: function () {
        var slider = new Swiper('.rel_product_slider', {
            loop: false,
            speed: 900,
            simulateTouch: true,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    // 제품 상세 소개페이지 - 연관 상품 + 영양성분표 연결
    relProductTabUI: function () {
        $('.brand_page_detail .rel_product_slider .swiper-slide').on('click', function () {
            // swiper-slide의 idx값 변수 저장
            var idx = $(this).index();

            // acitve 처리, 형제요소 active 해제
            $(this).addClass('active').siblings().removeClass('active');

            // idx값 -> table_box의 자식요소 active처리, 형제요소들 active해제
            $('.brand_page_detail .table_box .table_wrap').eq(idx).addClass('active').siblings().removeClass('active');

        });
    },
    // 제품 상세 소개페이지 - CF영상 슬라이더
    videoCFSlider: function () {
        var iframe = $('.brand_page_detail .product_cf_slider iframe'); // iframe선택
        var iframeSrc = []; // iframe src주소 변수 초기화
        // ifrmae 갯수만큼 iframeSrc에 주소 할당
        for (i=0 ; i < iframe.length ; i++) {
            iframeSrc.push(iframe.eq(i).attr('src'));
        }
        //CF 영상 슬라이더
        var slider = new Swiper('.product_cf_slider', {
            loop: false,
            speed: 0, // 슬라이드 효과 제거
            allowTouchMove: false, // next, prev 버튼으로만 넘길 수 있게 설정
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function() {
                    var idx = slider.activeIndex; // 현재 활성화된 index 변수 할당
                    // 활성화된 index에 해당하는 iframe에 iframerSrc주소 갱신, 형제 슬라이드의 iframe-src속성에 'about:blank'로 변경 (재생 정지)
                    iframe.eq(idx).attr('src',iframeSrc[idx]).closest('.swiper-slide').siblings().find('iframe').attr('src', 'about:blank');
                }
            },
        });
    },
};

$(document).ready(function () {
    front.init();

    $(window).scroll(function () {
        front._scrollTop = $(window).scrollTop();

        // companyTit가 선택될 때에만 scrollTxtAnim메서드 실행
        if (front.companyTit.length) {
            front.scrollTxtAnim();
        }
    }).trigger('scroll');
});
