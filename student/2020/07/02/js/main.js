$(window).ready(function () {
    
    
    //header, gnb 관련 처리 함수
    var gnbFunction = function () {
        
        var body = $('body');
        var gnb = $('#header .gnb_wrap');
        var dim = $('#header .dim');
        var gnbClose = $('#header .btn_gnb_close');
        var gnbDepth1 = $('#header .gnb>li:not(:last-child)>a');

        //팝업이 존재할 때 body에 on처리
        if($('#mainPopup').css('display') === 'block') {
            body.addClass('on');
        }

        //header 메뉴 버튼 클릭시 gnb 슬라이드, 화면 dim처리, 스크롤 제거
        $('#header .btn_menu').on('click', function () {
            body.addClass('on');
            gnb.addClass('on');
            dim.fadeIn();
        });

        // gnb 닫기, 종료시 열어둔 depth2 닫아주기
        gnbClose.on('click', function () {
            body.removeClass('on');
            gnb.removeClass('on');
            dim.fadeOut();

            setTimeout(function () {
                gnbDepth1.removeClass('on').next().hide();
            }, 400);
        });

        // dim 클릭시에도 gnb 닫기
        dim.on('click', function () {
            gnbClose.trigger('click');
        });

        // depth2 토글(화살표 처리)
        gnbDepth1.on('click', function () {
            $(this).toggleClass('on').next().slideToggle();
        });

        $('#header .gnb .depth2 a, #header .store_link').on('click', function (e) {

            e.preventDefault();
            var target = $(this).attr('href');

            setTimeout(function () {
                gnbClose.trigger('click');
            }, 200);

            setTimeout(function () {
                location.href = target;
            }, 600);
        });
        
    };
    gnbFunction();
    
    
    //메인 슬라이더

    var mainSlider = new Swiper ('.main_slider', {

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });

    //메인 페이지 공지사항 버티컬 슬라이더 

    var noticeSlider = new Swiper ('.notice_slider', {

        direction: 'vertical',
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    //메인 페이지 이벤트 슬라이더

    var eventSlider = new Swiper ('.event_slider', {

        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    });

    //서브페이지 lnb 공통
    
    $('.sub_main button.btn_lnb').on('click', function () {
        $(this).toggleClass('on').next().slideToggle();
    });
    
    
    //푸터 관련 처리 함수
    
    var footerFunction = function () {
        // 푸터 패밀리 사이트 클릭 처리
        var btnFamily = $('#footer .btn_family');

        btnFamily.on('click', function () {
            $(this).toggleClass('on');
            $('#footer .list_wrap').toggleClass('on');

            // 패밀리 사이트 이외의 공간 터치시 패밀리 사이트 닫아주기
            $(document).on('click', function (e) {
                if(!$(e.target).closest('.family_site').length) {
                    btnFamily.removeClass('on').next().removeClass('on');
                    $(document).off('click');
                }
            });

            // 패밀리 사이트 터치하여 이동시 패밀리 사이트 닫아주기
            $('#footer .list_family a').on('click', function () {
                btnFamily.removeClass('on').next().removeClass('on');
            });        
        });
        
    };
    footerFunction();
    
    
    
    
    
    
    
    // 매장찾기 검색창 기능 관련 함수
    var storeFunction = function () {
        
        var localSearch = $('.local_search');
        var nameSearch = $('.name_search');
        var wrap = $('#wrap');
        var searchArea = $('.search_area');
        
        //검색 버튼 클릭시 검색 내용 노출, 타입 체크를 하지 않았을 경우 경고창 띄우기
        $('.local_search .btn_search').on('click', function () {
            
            if($(this).closest('.search_inner').find('input:checkbox[name=local]:checked').length === 0) {
                alert('하나 이상의 타입을 선택해주세요.');
            } else {
                $(this).closest('.search_area').find('.search_data').show();
            }
            
        });
        $('.name_search .btn_search').on('click', function () {
            
            if($(this).closest('.search_inner').find('input:checkbox[name=name]:checked').length === 0) {
                alert('하나 이상의 타입을 선택해주세요.');
            } else {
                $(this).closest('.search_area').find('.search_data').show();
            }
            
        });
        
        //지역검색 버튼 클릭시 지역검색창 호출(매장명 검색창이 열려 있을 시 닫아줌) 검색창 호출시 스크롤 삭제
        $('.store_page .list_search .btn_local').on('click', function () {
            localSearch.addClass('on').removeClass('foot');
            nameSearch.removeClass('on').removeClass('foot');
            wrap.addClass('on')
        });
        
        //매장명 검색 버튼 클릭시 매장명검색창 호출(지역 검색창이 열려 있을 시 닫아줌) 검색창 호출시 스크롤 삭제
        $('.store_page .list_search .btn_name').on('click', function () {
            nameSearch.addClass('on').removeClass('foot');
            localSearch.removeClass('on').removeClass('foot');
            wrap.addClass('on')
        });
        
        //닫기 버튼 클릭시 검색창 닫고 검색 내용과 타입 체크 삭제
        $('.store_page .btn_close_search').on('click', function () {
            searchArea.removeClass('on').removeClass('foot');
            wrap.removeClass('on');
            
            setTimeout(function () {
                $('.search_data').hide();
                $('#classicTypeName, #classicTypeLocal').prop('checked', true);
                $('#wTypeName, #wTypeLocal, #queensTypeName, #queensTypeLocal').prop('checked', false);
            }, 600);
        });

        //상단 제목바 클릭시 검색창 최소화하여 하단 픽스
        $('.store_page .tit_wrap .btn_tit').on('click', function () {
            $(this).closest('.search_area').toggleClass('foot');
            wrap.toggleClass('on');
        });
        
        //검색 목록에서 매장 클릭시 검색창 최소화하여 픽스
        $('.store_page .search_data a').on('click', function (e) {
            e.preventDefault();

            $(this).closest('.search_area').addClass('foot');
            wrap.removeClass('on');
        });
    };
    storeFunction();
    
});



