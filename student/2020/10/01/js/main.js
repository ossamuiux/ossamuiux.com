$(document).ready(function () {
    //헤더 슬라이더
    $('#header .gnb').on('mouseenter', function () {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });

    //헤더 gnb bar 애니메이션
    var barGnb = $('.gnb .bar_gnb');
    
    $('.gnb .depth1>li').on('mouseenter', function () {
        var posX = $(this).position().left + $(this).outerWidth()/2 - 10;
        console.log(posX);
//        barGnb.stop().fadeIn(100).animate({left:posX, width: winX}, 300);
        
        //css tranistion방식이 좀더 부드러움
        //barGnb.css({left:posX, width:winX, opacity:1});
        barGnb.css({transform:'translateX(' + posX + 'px)', opacity:1});
    });
//    
    $('.gnb').on('mouseleave', function () {
        barGnb.css({opacity:0});
        /*barGnb.fadeOut(100);*/
    });
    
    var mySwiper = new Swiper('.main_slider', {
        // 반복기능이며 슬라이드갯수가 동적으로 늘어남
        loop: true,
        // 애니메이션 속도
        speed: 600,
        // 하단 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        //자동실행
        autoplay: {
            // 슬라이드 인터벌(간격) 시간
            delay: 3000,
            //자동실행 안멈춤
            //자동실행토글버튼 추가시 false로 꺼야함 //안끄면 안맞아서 자의로 바꿀 시 자동으로 다시 안돌아감.
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    var mySwiper2 = new Swiper('.notice_slider', {
        // 반복기능이며 슬라이드갯수가 동적으로 늘어남
        loop: true,
        // 애니메이션 속도
        speed: 600,
        // 하단 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        direction: 'vertical',
        //자동실행
        autoplay: {
            // 슬라이드 인터벌(간격) 시간
            delay: 3000,
            //자동실행 안멈춤
            //자동실행토글버튼 추가시 false로 꺼야함 //안끄면 안맞아서 자의로 바꿀 시 자동으로 다시 안돌아감.
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    var mySwiper3 = new Swiper('.event_slider', {
        //마우스드래그 끄기
        //simulateTouch: false,
        loop: true,
        slidesPerView: 3,
//        speed: 1000,
        spaceBetween: 16,
        centeredSlides: true,
         //화면에 보이는 슬라이드에 동적 클래스 걸어줌
        watchSlidesVisibility: true,
//        autoplay: {
//            delay: 4000,
//            disableOnInteraction:false,
//            },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            //숫자형식
//            type: 'fraction',
        },
        controller: {
            inverse: true,
            by: 'container', 
        },
    });
    
    
    
    //판타지월드 카테고리 셀렉트 커스텀
    var customSelect = function () {
        $('.select_custom li.init').on('click',function(){
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
        });
    };
    customSelect();
    
    
    
    //  판타지월드 조건검색 셀렉트 커스텀
    $('.condition_filter .condition .condition_box').on('click',function(){
        
        //$(this).removeClass('active');
        $('.condition_filter .condition_box').siblings().stop().slideUp(120);
        
        $(this).siblings().stop().slideToggle(120);  
        //$(this).siblings().stop().slideDown(200);
        // 리스트 열고닫을때 active 토글
        $(this).toggleClass('active');
    });
    
    //처음 걸린 remove로 인해 toggle active가 안사라지는 이슈 해결
    $('.condition_filter .condition .condition_box').on('click',function(){
        $(this).closest('.condition').siblings().find('.condition_box').removeClass('active');
    }); 

    
    $('.condition li:not(.condition_box)').on('click',function(){
        $(this).parent().removeClass('active');
    });

    //밖에 누르면 닫히게
    $(document).on('click', function (e) {
        //console.log($(e.target).closest('.select_custom').length);
        if($(e.target).closest('.condition').length === 0) {
            $('.condition_filter .condition .condition_box').removeClass('active');
            $('.condition_box').siblings().stop().slideUp(120);
        }
    });
    
   
    
    
    //놀이기구 상세 페이지 슬라이더
    var mySwiper4 = new Swiper('.ride_slider', {
        // 반복기능이며 슬라이드갯수가 동적으로 늘어남
        loop: true,
        // 애니메이션 속도
        speed: 2000,
        effect: 'fade',
        // 하단 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        //자동실행
        autoplay: {
            // 슬라이드 인터벌(간격) 시간
            delay: 4000,
            //자동실행 안멈춤
            //자동실행토글버튼 추가시 false로 꺼야함 //안끄면 안맞아서 자의로 바꿀 시 자동으로 다시 안돌아감.
            disableOnInteraction: false,
        },
    });
    
    
    //선택에 따라 해당 하는 항목 숫자표시와 보이게 하기 
    var cnt = $('.list_ride li.all').length;
    $('.fantasy_page .filter_result .cnt').text(cnt);

    $('.fantasy_page .world_select li').on('click', function (e) {  
        e.preventDefault();
         
        var idx = $(this).index();
            
        if(idx == 1 ){
            $('.list_ride li.all').show();
            cnt = $('.list_ride li.all').length;
        } else if(idx == 2 ){
            $('.list_ride li.all').hide();
            $('.list_ride li.fanstasy').show();
            cnt = $('.list_ride li.fanstasy').length;
        } else if(idx == 3 ){
            $('.list_ride li.all').hide();
            $('.list_ride li.magic').show();
            cnt = $('.list_ride li.magic').length;
        } else if(idx == 4 ){
            $('.list_ride li.all').hide();
            $('.list_ride li.adventure').show();
            cnt = $('.list_ride li.adventure').length;
        } else if(idx == 5 ){
            $('.list_ride li.all').hide();
            $('.list_ride li.dynamic').show();
            cnt = $('.list_ride li.dynamic').length;
        } else if(idx == 6 ){
            $('.list_ride li.all').hide();
            $('.list_ride li.tower_sky').show();
            cnt = $('.list_ride li.tower_sky').length;
        };
        
        $('.fantasy_page .filter_result .cnt').text(cnt);
        
        
    });
});












