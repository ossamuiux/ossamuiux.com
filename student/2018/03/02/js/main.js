$(document).ready(function(){
    var sw=true;
    $('#header .btn_search').click(function(){
        $('#header .modal_search').stop().slideToggle();
        if(sw){
            $('#wrap').css('overflow','hidden');
            sw=false;
        } else {
            $('#wrap').css('overflow','visible');
            sw=true;
        }
       $(this).toggleClass('on'); 
    });
    
    $('#header .btn_menu').click(function(){
//        $('#header .btn_search').removeClass('on');
        $('#header .menu').stop().slideToggle();
       $(this).toggleClass('on').siblings();
        $('#wrap').toggleClass('on');
        $('body').toggleClass('on');
        
        if($('.btn_search').css('display')=='block'){
            $('.btn_search').css('display','none');
        } else {
            $('.btn_search').css('display','block');
        }
 
    });
    $('#header .menu .gnb>.gnb_wrap>li>a').click(function(){  
       $(this).parent().siblings().find('.depth2').slideUp(); 
         $(this).siblings().slideToggle(400);
        $(this).parent().toggleClass('on').siblings().removeClass('on');

    });
    
    //메인비쥬얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    
    //베스트셀러
    var swiper = new Swiper('.best_seller', {
      slidesPerView: 4,
      spaceBetween: 30,
//      centeredSlides: true,
        slidesPerView: 'auto',
        //슬라이더 크기잡기위해필요함
        loop:true,
        auto:2000,
        continuous:true,
        centeredSlides:!0, //중앙정렬
    });

    //슬라이더 인덱스 추출하기
    $('best_seller .swiper-slide').click(function(e){
        e.preventDefault();
        
        //loop모드일때 인덱스 추출
        var num=$(this).attr('data-swiper-slide-index');
        console.log(num);
        
    });
    
    //mission 서브페이지 point
    var mySwiper = new Swiper ('.point', {
        slidesPerView: 3,
        spaceBetween: 30,
//      centeredSlides: true,
        slidesPerView: 'auto',
        //슬라이더 크기잡기위해필요함
        loop:true,
        auto:2000,
        continuous:true,
        centeredSlides:!0, //중앙정렬
    });
});