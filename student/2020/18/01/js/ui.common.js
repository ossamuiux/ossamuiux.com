var front = {
    _scrollTop: 0,
    btn_top: null,
    subPosY: [],
    init: function () {
        front.btn_top = $('#footer .top_btn_wrap .btn_top');
        if ($('#companySection').length && $('#visionSection').length && $('#ceoSection').length) {
            // 팔도개요 페이지 탭메뉴 섹션위치 y값  
            front.subPosY = [$('#companySection').offset().top + 60, $('#visionSection').offset().top - 20, $('#ceoSection').offset().top - 20];
        }

        front.headerUI(); // 헤더 depth2 드롭다운
        front.headerLangUI(); // 언어창 드롭다운
        front.mainVisualSlideUI(); // 메인 비주얼 슬라이드
        front.productSlideNewUI(); // 신제품 슬라이드
        front.productSlideBrandUI(); // 브랜드 슬라이드
        front.productSlideBrandTab(); // 브랜드 슬라이드 탭연결
        front.newsSlideBrandUI(); // 뉴스 슬라이드
        // 스크롤 관련 UI 
        // 1. 상단으로가기 버튼 토글, 서브페이지
        // 2. 팔도 소개 페이지 - depth3 탭 섹션별 active처리
        // 3. 팔도 소개 페이지 - 섹션별 제목, 이미지, 본문 내용 효과
        front.scrollUI();
        front.topBtnUI(); // 상단으로 가기 
        front.footerFamilyUI(); // 푸터 - 패밀리사이트 드롭다운
        front.overviewTabMove(); // 팔도소개 페이지 = 탭 누르면 해당 섹션으로 이동
        front.relProductSliderUI(); // 제품상세소개페이지 - 연관제품슬라이더
        front.relProductSliderTab(); // 제품상세소개페이지 - 연관제품탭연결
        front.cfSliderUI(); // 제품상세소개페이지 - CF영상 슬라이더
    },
    headerUI: function () {
        var header = $('#header')
        $('#header .gnb').on('mouseenter', function () {
            header.addClass('on');
        }).on('mouseleave', function () {
            header.removeClass('on');
        });
    },
    headerLangUI: function () {
        $('#header .lang_wrap .btn_lang').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.lang_etc').slideToggle(400);
        });
    },
    // 메인비주얼 슬라이드
    mainVisualSlideUI: function () {
        var mainVisualSlide = new Swiper('.main_visual_slider', {
            loop: true,
            speed: 1200,
            simulateTouch: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            }
        });
    },
    // 제품 소개 슬라이드 (신제품)
    productSlideNewUI: function () {
        var productSlideNew = new Swiper('.new_product_slider', {
            loop: true,
            speed: 800,
            simulateTouch: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
    },
    // 제품 소개 슬라이드 (브랜드)
    productSlideBrandUI: function () {
        var productSlideBrand = new Swiper('.brand_product_slider', {
            loop: true,
            speed: 800,
            simulateTouch: true,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
    },
    // 제품 소개 슬라이드 탭메뉴 처리(브랜드), 2020.10.16 autoplay 이슈발생, hide방식 대신 height:0, overflow:hidden; 처리 방식 대체
    productSlideBrandTab: function () {
        var productSliderTab = $('#container .right_product .tab_wrap .product_slider_wrap');

        $('#container .right_product .brand_tab li a').on('click', function (e) {
            e.preventDefault();
            var idx = $(this).parent().index();
            productSliderTab.eq(idx).addClass('active').siblings().removeClass('active');

            $(this).parent().addClass('active').siblings().removeClass('active');
        });
    },
    // 뉴스 슬라이드 
    newsSlideBrandUI: function () {
        var newsSlideBrand = new Swiper('.news_slider', {
            loop: true,
            speed: 800,
            simulateTouch: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    },
    // 탑버튼 - 상단, 홈으로 가기
    scrollUI: function () {
        // 탭 스크롤에 따른 active처리
        var tabWrap = $('.company_overview .tab_wrap');
        var tabWrapTop = $('.company_intro').length > 0 ? $('.company_intro').offset().top : null;
        var titPosY = []; // 섹션 타이틀 위치 값
        var txtPosY = []; // 섹션 txt의 위치 값
        var companyTit = $('.company_overview .company_tit');
        var sectionTxt = $('.company_overview .txt_wrap');

        // 상단으로 가기 버튼 토글 UI
        if (front._scrollTop > 500) {
            front.btn_top.fadeIn();
        } else {
            front.btn_top.fadeOut();
        }
        // ************* 팔도소개 서브페이지 depth3 탭메뉴 UI*************
        // Scorll 시 UI 관련 
        // 1. depth3 탭메뉴 상단 fixed UI
        if (front._scrollTop > tabWrapTop) {
            tabWrap.addClass('fixed');
        } else if (front._scrollTop <= tabWrapTop) {
            tabWrap.removeClass('fixed');
        }

        // 팔도소개 서브페이지 탭메뉴 scroll에 따른 active처리
        for (i = 0; i < front.subPosY.length; i++) {
            if (front._scrollTop > front.subPosY[i] - 200) {
                // console.log( '현재' + (i+1) + '~' + (i+2) +'구간임');
                $('.company_overview .tab_wrap .tab_list li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }
        // 섹션 1, 2, 3 제목 + 이미지 효과
        for (i = 0; i < companyTit.length; i++) {
            titPosY.push(companyTit.eq(i).offset().top);
        }
        for (i = 0; i < companyTit.length; i++) {
            if (front._scrollTop >= titPosY[i] - titPosY[0]) {
                companyTit.eq(i).addClass('on');
                // 이미지 처리하기 형제요소에도 on처리, 섹션1,3 inner에 on처리, 섹션2 vision_wrap에 on처리  
                companyTit.eq(i).siblings().addClass('on')
            } else if (front._scrollTop == 0) {
                companyTit.eq(i + 1).removeClass('on');
                companyTit.eq(0).siblings().removeClass('on')
                companyTit.eq(i).siblings().removeClass('on')
            }
        }
        // 섹션1, 3 텍스트 스크롤 효과처리
        for (i = 0; i < sectionTxt.length; i++) {
            txtPosY.push(sectionTxt.eq(i).offset().top - 600);
        }
        for (i = 0; i < sectionTxt.length; i++) {
            if (front._scrollTop > txtPosY[i]) {
                sectionTxt.eq(i).addClass('on');
            } else if (front._scrollTop == 0) {
                sectionTxt.eq(i).removeClass('on');
            }
        }
    },
    // 상단으로 스크롤바 이동애니메이션
    // 1. btn_top클릭 시 스크롤바를 페이지 상단으로 애니메이션
    // 2. $('html, body').animate({scrollTop: 0},시간);
    // 3. 클릭 시 preventDefault(); 기본이벤트? 막기
    topBtnUI: function () {
        front.btn_top.on('click', function (e) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: 0
            }, 800);
        });
    },
    // 푸터 패밀리사이트 UI
    footerFamilyUI: function () {
        $('#footer .family_wrap .btn_family').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.family_site_list').slideToggle(400);
        });
    },
    // 팔도소개 탭 이동 UI
    overviewTabMove: function () {
        $('.company_overview .tab_wrap .tab_list li').on('click', function (e) {
            e.preventDefault();
            // 탭메뉴 active 처리
            var idx = $(this).index();
            $('html, body').stop().animate({
                scrollTop: front.subPosY[idx] - 10
            }, 600);
        });
    },
    // 제품상세소개페이지 연관상품 슬라이더
    relProductSliderUI: function () {
        var relProduct = new Swiper('.rel_product_slider', {
            loop: false,
            slidesPerView: '4',
        });
    },
    // 제품상세소개페이지 연관상품 탭 연결
    relProductSliderTab: function () {
        $('.brand_page_detail .rel_product_wrap .swiper-slide').on('click', function () {
            var idx = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.brand_page_detail .table_box .table_wrap').eq(idx).addClass('active').siblings().removeClass('active');
        });
    },
    // 제품상세소개페이지 영상 슬라이더 + slideChange 시 영상 정지 처리
    cfSliderUI: function () {
        var iframe = $('.sub_product_cf .video_box .swiper-slide').find('iframe');
        // src 주소 저장
        var srcArr = [];

        for (i = 0; i < iframe.length; i++) {
            srcArr.push(iframe.eq(i).attr('src'));
        }

        var cfSlider = new Swiper('.product_cf_slider', {
            speed: 800,
            simulateTouch: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        // slideChange 시 src -> about:blacnk로 변경
        cfSlider.on('slideChange', function () {
            var idx = cfSlider.activeIndex
            iframe.eq(idx).attr('src',srcArr[idx]).parent().siblings().find('iframe').attr('src','about:blank');
        });
    },
};

$(document).ready(function () {
    front.init();
    $(window).scroll(function () {
        front._scrollTop = $(window).scrollTop();
        front.scrollUI();
    }).trigger('scroll');
});