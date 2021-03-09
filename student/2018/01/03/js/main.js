$(document).ready(function(){
    var mySwiper = new Swiper ('.main_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        speed:1200,
        simulateTouch:false,//마우스드래그 막기
        pagination: {
          el: '.main_slider>.swiper-pagination',
          clickable: true,
        },
    });
    //btnTop스크롤올라가는거 설정
    var speed = 1000; // 스크롤속도
        $(".btnTop").css("cursor", "pointer").click(function(e){
            e.preventDefault();
            $('body, html').animate({scrollTop:0}, speed);
        });
    
    $('#header .btn').click(function(){
        $('#header, #header .btn').toggleClass('on');
        $('#header .menu').fadeToggle(100);
    });
    
    var mySwiper2 = new Swiper ('.time_slider', {
            direction: 'horizontal',
            slidesPerView: 3,
            mousewheel: false,
            speed:2000,
        autoplay: {
            delay: 30,
            disableOnInteraction:false//클릭시 자동실행 안멈춤
        },
    });
    
    //마우스무브 인터렉션
    var triElement1=$('.section1 .move');
    $('.section1').mousemove(function(e){
        var num=e.pageX-triElement1.offset().left-triElement1.width()/7;
        var num2=e.pageY-triElement1.offset().top-triElement1.height()/7;
        //console.log(num);
        triElement1.css({'margin-right':-num/10-triElement1.width()/9,'margin-top':-num2/10-triElement1.height()/9});
    });
    //original_site
    var mySwiper3 = new Swiper ('.orig_visual', {
        slidesPerView: 1,
        simulateTouch:false,//마우스드래그 막기
        loop:true,
        speed:500,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction:false//클릭시 자동실행 안멈춤
        }
    });

});


















