$(document).ready(function () {
  var animateMenu = function () {
        var dimm = $('header .dimm');
        var gnbWrap = $('#header .gnb_wrap, body');
        var btnClose = $('.gnb_wrap .btn_close');
        //메뉴버튼 클릭시 메뉴 나오고 body 스크롤바 제거
        $('#header .btn_menu').on('click', function () {
            dimm.fadeIn();
            gnbWrap.addClass('on');
        });
        
        btnClose.on('click', function () {
            dimm.fadeOut();
            gnbWrap.removeClass('on');

            //0.5초 뒤에 메뉴 초기화
            setTimeout(function () {
                $('.gnb_wrap .gnb>li>a').removeClass('on').next().hide();
            },500);
        });

        //헤더 아코디언메뉴(클릭한 메뉴 하나만 열고 나머지 닫기)
        $('.gnb_wrap .gnb>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('on').next().stop().slideToggle();
            $(this).parent().siblings().find('>a').removeClass('on').next().slideUp();
            
            //다른 방식
            //$(this).toggleClass('on').parent().siblings().find('>a').removeClass('on')
            //$(this).next().slideToggle().parent().siblings().find('.depth2),slideUp();
        });

        //dimm 클릭시 .btn_close가 강제클릭(tirgger()메서드 사용) 되게~
        dimm.on('click', function () {
            btnClose.trigger('click');
        });
        
        //depth2 클릭시 애니메이션 보여주고 gnb_wrap 닫은 후 서브페이지로 이동
        $('.gnb .depth2 a').on('click', function (e) {
            e.preventDefault();
            $(this).addClass('on');
            var target = $(this).attr('href');
            
            setTimeout(function () {
                btnClose.trigger('click');
            },350);
            
            setTimeout(function () {
               location.href = target; 
            }, 850);
        });
    };
    animateMenu();
    
    //헤더 검색 버튼
    $('#header .btn_search').on('click', function () {
        $(this).toggleClass('on');
        $('#header .search_wrap').stop().slideToggle();
    });
    
    //메인 슬라이더
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    
    //이용섹션 슬라이더
    var mySwiper2 = new Swiper('.notice_slider', {
        // 반복기능이며 슬라이드갯수가 동적으로 늘어남
        loop: true,
        // 애니메이션 속도
        speed: 600,
        // 하단 페이지네이션
        direction: 'vertical',
        //자동실행
        autoplay: {
            // 슬라이드 인터벌(간격) 시간
            delay: 3000,
            //자동실행 안멈춤
            //자동실행토글버튼 추가시 false로 꺼야함 //안끄면 안맞아서 자의로 바꿀 시 자동으로 다시 안돌아감.
            disableOnInteraction: false,
        },
    });
    
    //섹션3 시즌행사 이벤트 슬라이더
    var mySwiper3 = new Swiper('.event_slider', {
        //마우스드래그 끄기
        //simulateTouch: false,
        loop: false,
        slidesPerView: 1,
//        speed: 1000,
        spaceBetween: 16,
        centeredSlides: true,
         //화면에 보이는 슬라이드에 동적 클래스 걸어줌
        watchSlidesVisibility: true,
//        autoplay: {
//            delay: 4000,
//            disableOnInteraction:false,
//            },
        controller: {
            inverse: true,
            by: 'container', 
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    
    //헤더 언어메뉴 누르면 다른 곳으로 보내기
    $('.lang_wrap select').on('change', function () {
        console.log($(this).val());
        if ($(this).val() === 'KOR') {
            location.href = 'http://www.naver.com';
        } else if  ($(this).val() === 'ENG') {
            location.href = 'http://www.naver.com';
        } else if  ($(this).val() === 'CHN') {
            location.href = 'http://www.naver.com';
        } else if  ($(this).val() === 'JPN') {
            location.href = 'http://www.naver.com';
        }
    });
    
//    섹션4 공연정보 놀이기구TOP3 슬라이더
    var mySwiper4 = new Swiper ('.guide_slider', {
        
        /*슬라이드 높이가 각각 다를 경우 높이에 맞게 애니메이트*/
        autoHeight: true,
        loop: true,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    //////////////////////놀이기구 상세페이지////////////////////////
    
    
    //    놀이기구 상세페이지 놀이기구 슬라이더
    var mySwiper5 = new Swiper ('.attraction_slider', {
        
        loop: true,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    
    //////////////////////놀이기구 선택페이지////////////////////////
    
    
    //    놀이기구 선택페이지 놀이기구 셀렉트 커스텀
    var customSelect = function () {
        $('#main.sub_place .select_custom li.init').on('click',function() {
            $(this).siblings().stop().slideToggle(200).parent().toggleClass('on');
            $(this).parent().toggleClass('active');
        });
        
        
        
        $('.select_custom li:not(.init)').on('click',function(){
            $(this).closest('.select_custom').find('li.init').html($(this).html());
           
           /* $(this).addClass('selected').siblings().removeClass('selected');*/

            $(this).closest('.select_custom').find('li:not(.init)').slideUp(200);
            // 리스트 닫힐때 부모 active제거
            
            /*$(this).parent().removeClass('active');*/
        });
        /*$('.select_custom li.init').on('click',function(){
            //$('.select_custom ul').removeClass('active');
            $('.select_custom li.init').siblings().stop().slideUp(200);

            $(this).siblings().stop().slideToggle(200);
            //$(this).siblings().stop().slideDown(200);
            // 리스트 열고닫을때 active 토글
            $(this).parent().toggleClass('active');
        });

        $('.select_custom.world_select li.init').on('click',function(){
            $('.select_custom.facility_select ul').removeClass('active');
        }); 

        $('.select_custom.facility_select li.init').on('click',function(){
            $('.select_custom.world_select ul').removeClass('active');
        }); 

        $('.select_custom li:not(.init)').on('click',function(){
            $(this).closest('.select_custom').find('li.init').html($(this).html());
            //$('.select_custom li.init').html($(this).html());
            $(this).addClass('selected').siblings().removeClass('selected');

            $(this).closest('.select_custom').find('li:not(.init)').slideUp(200);
            // 리스트 닫힐때 부모 active제거

            $(this).parent().removeClass('active');
        });

        $(document).on('click', function (e) {
            //console.log($(e.target).closest('.select_custom').length);
            if($(e.target).closest('.select_custom').length === 0) {
                $('.select_custom ul').removeClass('active');
                $('.select_custom li.init').siblings().stop().slideUp(200);
            }
        });*/
    };
    customSelect();
});












