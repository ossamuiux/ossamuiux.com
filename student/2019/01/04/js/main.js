$(document).ready(function(){
    //메뉴여닫기
    $('#header .menu').on('click', function(){
        $('#main, #container, #footer, .gnb_wrap').toggleClass('on');
    });
    
    //dpeth2 여닫기
    $('.gnb>li:last-child').on('click', function(){
        $(this).toggleClass('on');
        $('.gnb .depth2').stop().slideToggle();
    });
    
    //구독버튼
    $('.btn_subs').on('click',function(){
       alert('구독만 누르지마시고 연락주세요>_<') 
    });
    
    //구독자 카운팅
    function countNum() {
        var initNum='19,951,028';
        var num=parseInt(initNum.replace(/,/g,""));
        $('.subs_count').text(initNum);
        
        function comma(num){
            var len, point, str; 

            num = num + ""; 
            point = num.length % 3 ;
            len = num.length; 

            str = num.substring(0, point); 
            while (point < len) { 
                if (str != "") str += ","; 
                str += num.substring(point, point + 3); 
                point += 3; 
            } 
            return str;
        }

        setInterval(function(){
            num+=100;
            var newStr=comma(num);
            $('.subs_count').text(newStr);
        },2000);
        
    };
    countNum();
    
    //profile 스킬모션
    $(window).on('scroll', function(){
        var num=$(this).scrollTop();
        
        if(num>=610){
            $('.skill .skill_polygon').addClass('on');
        } else {
            $('.skill .skill_polygon').removeClass('on');
        }
    });
    
    //portfolio 슬라이더
    var mySwiper = new Swiper ('.slider_wrap .port_slider', {
        slidesPerView: 'auto',
        simulateTouch: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    //portfolio btn_like, btn_hate
    $('.top_con .like .btn_like').on('click', function(){
       $(this).parent().toggleClass('on'); 
    });
    $('.top_con .like .btn_hate').on('click', function(){
       alert('싫어요는 싫어요 ＼(ㅠ_ㅠ)／');
    });
});