$(document).ready(function(){ 
    $(".contents_box1").addClass('active');
    
    var mySwiper=new Swiper('.main_slider', {
        loop:true, //반복옵션
        simulateTouch:false, //데스크탑일경우 마우스드래그 막기. -모바일에선 사용하지 않는다.
        speed:1000, //애니메이션 시간.
        autoplay: {
            delay: 3000,//1000은 1초!-자동실행 시간
            disableOnInteraction:false //좌우화살표 클릭시 멈춤기능 끄기
        },
          navigation: {
              //좌우버튼으로 사용할 클래스 명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
          pagination: {
              el: '.swiper-pagination',
              type:'bullets',
              clickable: true
        }
    });

    
    //gnb
    $('.bottom_header .gnb li').on('mouseenter',function(){
    $(this).find('.depth2').stop().slideDown(200);
    });
    
    $('.bottom_header .gnb li').on('mouseleave',function(){
        $(this).find('.depth2').stop().slideUp(200);
    });
    

    
    //sns 슬라이더
    var mySwiper2=new Swiper('.sns_slider', {
        slidesPerView: 6,//보여질 썸네일 갯수
        //slidesPerGroup:1,//한번에 이동될 갯
        //spaceBetween:40,//슬라이드 간격
        loop:true,//반복
        simulateTouch:false,//데스크탑일경우 마우스드래그 막기
        speed:1000,//애니메이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    

// 탑버튼 에니메이트
//scrollTop()은 세로스크롤바의 문서전체에서의 위치값.
//0부터 (문서전체높이-스크롤바높이)까지를 범위로 가짐.
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        
        if(num>=100){
            $('#footer .btn_top').stop().fadeIn(500);//fadein(시간 800=0.8초) : 천천히 보여줘!
//            console.log(num);
        } else { //else = if의 반대조건. 즉 80이하이면~ 이란뜻
            $('#footer .btn_top').stop().fadeOut(500);//fadeout(시간 800=0.8초) : 천천히 보여줘!
        };
    });
    
   //탑버튼
    $('#footer .btn_top').on('click',function(e){
        //기본 이벤트 막기. e.preventDefault(); e는 event의 약어
        //return false;도 같은 방법이나 에니메이트 하고 난 후 적기.
        e.preventDefault();
        $("html, body").stop().animate({scrollTop:0});
    });

    
});