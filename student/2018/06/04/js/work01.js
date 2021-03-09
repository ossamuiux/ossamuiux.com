$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        simulateTouch: false,
        mousewheel: {
            invert: false,
        },
    });
    
    
    // section1 이미지 애니메이션 효과
    var $el = $('#main.work01 .section1 .section1_inner .img_wrap h2');
    var $el2 = $('#main.work01 .section1 .section1_inner .img_wrap h3');
    var $el3 = $('#main.work01 .section1 .section1_inner .img_wrap p');
    var $el4 = $('#main.work01 .section1 .section1_inner .img_wrap img');
        
    $('.section1').mousemove(function(e){        
        var posX = $el.css('left');
        var posY = $el.css('top');
        
        var diffx = e.pageX - parseInt(posX);
        var diffy = e.pageY - parseInt(posY);
        
        $el.css({'margin-left':diffx*0.05})
        $el.css({'margin-top':diffy*0.05})
        
        $el2.css({'margin-left':diffx*0.01})
        $el2.css({'margin-top':diffy*0.01})
        
        $el3.css({'margin-left':diffx*0.02})
        $el3.css({'margin-top':diffy*0.02})
        
        $el4.css({'margin-left':-diffx*0.05})
        $el4.css({'margin-top':-diffy*0.05})
    });
    
    //애니메이션 효과
    $(window).on("mousewheel DOMMouseScroll", function (e) {
        var checkClass = $('.section2').hasClass('swiper-slide-active');
        var checkClass2 = $('.section3').hasClass('swiper-slide-active');
        var checkClass3 = $('.section4').hasClass('swiper-slide-active');
        
        if (checkClass == true){
            $('.section2 .txt_wrap').addClass('on');
        } else {
            $('.section2 .txt_wrap').removeClass('on');
        }
        
        if (checkClass2 == true){
            $('.section3 .section3_inner').addClass('on');
        } else {
            $('.section3 .section3_inner').removeClass('on');
        }
        
        if (checkClass3 == true){
            $('.section4').addClass('on');
        } else {
            $('.section4').removeClass('on');
        }
    });
    
    // 화면전환효과
    $('#main.work01 .section1 .left_menu .a_work01').click(function(e){
        e.preventDefault()
        
        $('#main.work01 .guide .guide_line').css('z-index',10000);
        $('#main.work01 .bg_work01').addClass('on');
        
        setTimeout(function(){
            location.href="work01.html";   
        },2000);
    });
    
    $('#main.work01 .section1 .left_menu .a_work02').click(function(e){
        e.preventDefault()
        
        $('#main.work01 .guide .guide_line').css('z-index',10000);
        $('#main.work01 .bg_work02').addClass('on');
        
        setTimeout(function(){
            location.href="work02.html";   
        },2000);
    });
    
    $('#menuBar .gnb .link-about').click(function(e){
        e.preventDefault()
        
        $('#main.work01 .guide .guide_line').css('z-index',10000);
        $('#main.work01 .bg_about').addClass('on');
        
        setTimeout(function(){
            location.href="about.html";   
        },2000);
    });
    
    $('#menuBar .gnb .link-work').click(function(e){
        e.preventDefault()
        
        $('#main.work01 .guide .guide_line').css('z-index',10000);
        $('#main.work01 .bg_work01').addClass('on');
        
        setTimeout(function(){
            location.href="work01.html";   
        },2000);
    });
    
    // about.html 페이지 section3 이미지 효과
    var $el5 = $('#main.about .section3 .section3_inner .my_img');
    var $el6 = $('#main.about .section3 .section3_inner .img_bg');
    
    $('#main.about .section3').mousemove(function(e){        
        var posX = $el.css('left');
        var posY = $el.css('top');

        var diffx = e.pageX - parseInt(posX);
        var diffy = e.pageY - parseInt(posY);

        $el5.css({'margin-left':diffx*0.08})
        $el6.css({'margin-left':diffx*0.03})
        
        if (e.pageY<170) {
            $('#main.about .section3 .section3_inner .up').addClass('on').siblings().removeClass('on');
        } else if (e.pageY>170 && e.pageX>920){
            $('#main.about .section3 .section3_inner .right').addClass('on').siblings().removeClass('on');
        } else if (e.pageY>170 && e.pageX<400){
            $('#main.about .section3 .section3_inner .left').addClass('on').siblings().removeClass('on');
        } else if (e.pageY>800){
            $('#main.about .section3 .section3_inner .back').addClass('on').siblings().removeClass('on');
        } else if (e.pageY>170 && e.pageY<800 && e.pageX>400 && e.pageX<920) {
            $('#main.about .section3 .section3_inner .front').addClass('on').siblings().removeClass('on');
        }
    });
    
    // section3 circle progress 효과
    // ability 클래스가 존재하면 실행
    if ($('#main.about .section3 .section3_inner .my_info .ability').length == 1){
        // 스와이퍼(섹션)이 바뀔때 이벤트
        swiper.on('slideChange', function() {
            // 인덱스가 2인 스와이퍼에서
            if(swiper.activeIndex == 2){
                // circle progress 실행
                $('#main.about .section3 .section3_inner .my_info .ability .html').circleProgress({
                    value: 0.95,
                    fill: {
                        color: ["#878787"]
                    }
                }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
                });
                
                $('#main.about .section3 .section3_inner .my_info .ability .css').circleProgress({
                    value: 0.95,
                    fill: {
                        color: ["#878787"]
                    }
                }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
                });
                
                $('#main.about .section3 .section3_inner .my_info .ability .js').circleProgress({
                    value: 0.90,
                    fill: {
                        color: ["#878787"]
                    }
                }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
                });
                
                $('#main.about .section3 .section3_inner .my_info .ability .ph').circleProgress({
                    value: 0.85,
                    fill: {
                        color: ["#878787"]
                    }
                }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
                });
            }
        });
    }
    
    // top버튼 보이기/안보이기    
    swiper.on('slideChange', function(){
        if (swiper.activeIndex > 0){
            $('#main .btn_top button').fadeIn(500);
        } else if (swiper.activeIndex == 0){
            $('#main .btn_top button').fadeOut(500);
        }
    })
    
    // top버튼 클릭시
    $('#main .btn_top button').click(function(){
        swiper.slideTo(0,800);
    });
});