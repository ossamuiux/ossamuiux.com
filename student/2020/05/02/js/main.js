$(document).ready(function () {
    /* 사이드 메뉴 */
    // 햄버거버튼 클릭시 dimm나오고
    // wrap에 on걸어서 스크롤바 없애고
    // header에 on걸어서 gnb_wrap들어오게함
    $('#header .btn_sidemenu').on('click',function() {
        $('#header .dimm').fadeIn();    
        $('#wrap, #header').addClass('on'); 
    });
    // dimm클릭시 사라지게하고
    // wrap. header on제거하여 스크롤바 다시나오고 메뉴 들어가게함
    $('#header .dimm, .gnb_wrap .btn_close').on('click',function() {
        $('.gnb .depth2').stop().slideUp();
        $('.gnb>li>a').removeClass('active');
        $('#header .dimm').fadeOut();
        $('#body, #header').removeClass('on');
    });
    
    $('.gnb>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        
        // 클릭시 detph2 모두 닫기(초기화)
        $('.gnb .depth2').stop().slideUp();
        
        // 클릭된 a가 active함수 있으면, depth2를 열어준다.
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown(300);
        }
        
        /* 방법2 */
        
        // 클릭된 a의 depth2를 토글
        /*$(this).siblings().stop().slideToggle(300);*/
        
        // 클릭된 a의 depth2에 display:block이면, 나머지 형제의 depth2를 닫아줌
        /*if($(this).siblings().css('display') === 'block') {
            $(this).parent().siblings().find('.depth2').slideUp();
        }*/
    });
    
    /* 메인슬라이더 */
    var mySwiper = new Swiper ('.main_slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
        },
    })
    
    /* 탭메뉴슬라이더 */
    //탭메뉴 슬라아더작업시 display:none방식 사용 못함
    //none일경우 swiper내부에서 크기를 못잡는 현상있음
    // 메뉴 탭 액션
    $('.section2 .btn_tab li').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
        // 순서값찾기
        var num = $(this).index();
        console.log(num);
        $('.section2 .tab_con .menu_slider').eq(num).addClass('active').siblings().removeClass('active');
    });
    
    /* 메뉴슬라이더 */
    var mySwiper2 = new Swiper ('.menu_slider', {
        // 슬라이더 높이 다를때 애니메이션 효과
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
        },
    })
    
    /* 뉴스레터 - 소식지 구독 팝업창 열기 */
    var emailPopupEl = $('#main .email_popup_wrap');
    
    var emailPopup = function() {
        
        $('#main .section4 .news_letter').on('click', function(e) {
            e.preventDefault();
            emailPopupEl.show();
        });

        $('#main .email_popup .btn_close').on('click', function() {
            emailPopupEl.hide();
        });
        
        /* 팝업창 뒤 검은배경 클릭시 팝업창 닫기 */
        emailPopupEl.on('click', function(event) {
            if (emailPopupEl.is(event.target)) {
                emailPopupEl.hide();
            }
        });
    };
    emailPopup();
    
    /* sns슬라이더 */
    var mySwiper3 = new Swiper ('.sns_slider', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    
    /* 서브페이지 - content 탭 동작 */
    $('#container .list_location li').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();// a태그 기본이벤트 막기
            
            // 탭 li>a 클릭시 .active 클래스 걸기
            // 나머지 형제요소는 active클래스 제거
            $(this).addClass('active').siblings().removeClass('active');
            
            // 탭 내용 연결하기
            $('#container .content').eq(i).addClass('on').siblings().removeClass('on');
        });
    });
    
    /* menu - 상품 상세정보 동작 */
    $('.menu_page .list_menu>li>a').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.menu_page .list_menu .product_detail_wrap').eq(i).addClass('on').siblings().removeClass('on');
        });  
    });
    
    /* 상품상세 닫기버튼 */
    $('.menu_page .list_menu .product_detail .btn_close').on('click', function() {
        $('.menu_page .list_menu .product_detail_wrap').removeClass('on'); 
    });
    
});










