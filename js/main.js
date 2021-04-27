'use strict';

(function() {

    // 커서 애니메이션
    var $cursorCir = $('#cursorCir');
    var $body = $('body');
    
    $body.on('mousemove touchstart', function (e) {
        var x = e.pageX;
        var y = e.pageY;
            
        if(e.target.id === 'quote') {
            TweenMax.to($cursorCir, 1.5, {x:x, y:y, scale:5, opacity:1, ease:Circ.easeOut});
        } else {
            TweenMax.to($cursorCir, 0.5, {x:x, y:y, scale:1, opacity:1, ease:Circ.easeOut});
        }
    });
    
    $body.on('mouseleave', function () {
        TweenMax.to($cursorCir, 0.3, {opacity:0, ease:Circ.easeOut});
    });
    
    // 헤더 애니메이션
    var $header = $('#header');
    var $main = $('#container');
    
    $('#header .btn_gnb').on('click', function () {
        $header.toggleClass('on');
        $main.toggleClass('on');
        
        if($header.hasClass('on')) {
            $header.removeClass('on2');
            $main.removeClass('on2');
        } else {
            $header.addClass('on2');
            $main.addClass('on2');
        }
    });
    
    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        simulateTouch:true,
        slidesPerView:'auto',
        mousewheel:false,
        navigation: {
            nextEl: '.right_main .swiper-button-next',
            prevEl: '.right_main .swiper-button-prev',
        },
        scrollbar: {
            el: '.main_slider>.swiper-scrollbar',
            draggable: true
        }
    });
    
    // 수강생 산출물 슬라이더
    var studentSlider = new Swiper('.list_student', {
        simulateTouch:false,
        slidesPerView:'auto',
        direction:'vertical',
        mousewheel: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        }
    });
    
    // window resize시 슬라이드 크기를 500ms후 update
    $(window).on('resize', function () {
        setTimeout(function () {
            mainSlider.update();
            studentSlider.forEach(function(v, i) {
                studentSlider[i].update();   
            });
        },500);
    });

})();



















