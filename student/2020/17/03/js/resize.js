var front = {

    init: function() {
 
    },

    UI: function() {
        /* 모바일 메인비주얼이미지 바꾸기 */
        var slideImg = $('#main .main_slider .swiper-slide img');
            
        $(window).resize(function() {
            var winW = $(window).outerWidth(); // 창크기

            // 모바일
            if(winW <= 767) {
                // 제이쿼리 each메서드는 자바스크립트 forEach메서드와 같으며
                // 배열전용반복문임, 메게변수 i는 순서값
                slideImg.each(function(i) {
                    // replace('찾을문자열','바꿀문자') 이용하여 src값 변경하여 변수에 대입
                    var changeSrc = slideImg.eq(i).attr('src').replace('pc','mob');
                    // 변경된 src값으로 이미지경로 바꿔줌
                    slideImg.eq(i).attr('src',changeSrc);
                });
            } else {
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('mob','pc');

                    slideImg.eq(i).attr('src',changeSrc);
                });
            }
        }).trigger('resize');
    }


