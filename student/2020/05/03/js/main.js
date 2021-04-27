$(document).ready(function() {
    
    // 창높이 구해서 로딩시와 창크기조절시
    // .main_slider의 높이를 창높이에 맞추기
    var mainSlider =  $('#main .main_slider');
    var winH = 0;
    var section2 = $('#main .main_slider .section2');
    
    $(window).resize(function() {
        winH = $(window).height();
        mainSlider.height(winH);
    }).trigger('resize');
    
    // 풀레이아웃 슬라이더
    var mySwiper = new Swiper('.main_slider', {
        // 세로방향 슬라이드
        direction: 'vertical',
        // 각 슬라이드 높이와 footer높이를 css로 잡아줄때
        slidesPerView: 'auto',
        // 마우스휠로 슬라이더 동작 가능하도록
        mousewheel: true,
        // 데탑에서 마우스슬라이드 막기
        simulateTouch: false,
        speed: 600,
        pagination: {
            // 이중슬라이더가 포함될수있으므로 자식선택자 사용
            el: '.main_slider>.swiper-pagination',
            clickable: true,
        },
    });
    
    // gnb .depth2 애니메니션
    $('#header .gnb_wrap').on('mouseenter', function() {
        $('#header').addClass('on');
        $('#header .gnb .depth2').stop().fadeIn(700);
    });
    $('#header .gnb_wrap').on('mouseleave', function() {
        $('#header').removeClass('on');
        $('#header .gnb .depth2').stop().fadeOut(100);
    });
    
    // 모바일 사이드메뉴 (m_gnb)
    $('#header .btn_sidemenu, #header .top_sidemenu .btn_close').on('click', function() {
        $('#header .mgnb_wrap').toggleClass('on'); 
    });
    // 모바일 depth2 열기
    $('#header .m_gnb>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
        
        $('#header .m_gnb .depth2_wrap').stop().slideUp();
        
        if( $(this).parent().hasClass('active') ) {
            $(this).siblings().stop().slideDown();
        }
    });
    
    // 메인비주얼 슬라이더 visual_slider
    var mySwiper2 = new Swiper('.visual_slider', {
        loop: true,
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.sec1_slider>.swiper-pagination',
            clickable: true,
        },
    });
    
    // 상품 배경 변경
    var productEl = $('#main .section2 .product li');
    var secBg = $('#main .main_slider .swiper-slide.section2');
    productEl.on('mouseenter',function() {
        var num = $(this).index()+1;
        var str = 'url(images/img_product'+num+'.png)';
        secBg.css({"background-image":str});
    });
    productEl.on('mouseleave',function() {
        secBg.css({"background-image":"url(images/main_bg2.jpg)"});
    });
    
    // 뉴스 슬라이더 news_slider
    var mySwiper3 = new Swiper('.news_slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        pagination: {
            el: '.news_slider>.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1240: {
                slidesPerView: 'auto',
                centeredSlides: true,
                slidesPerGroup : 1,
            }
        }
    });
    
    
});

    
    
    
    
    
    
    
    
    
    
    










