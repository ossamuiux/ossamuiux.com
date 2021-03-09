$(document).ready(function(){
    $('#header .gnb').mouseenter(function(){
        $('#header .bottom_header').stop().animate({'height':'311px'},200);
//        console.log('asdfds');
    });
    
    $('#header .bottom_header').mouseleave(function(){
        $(this).stop().animate({'height':'50px'},200) 
    });
    
    $('.utility_list>li.lang>a').click(function(){
        $(this).parent().toggleClass('on');
        $('.list_lang').toggle();
    });

    
    $('.main_visual').slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        draggable:false, 
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });
    
    $('.event_slider').slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        fade: false,
//        cssEase: 'easeOutExpo',
        draggable:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
    });
    
    $('.product').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        dots:true,
        arrows:false,
        infinite:false,
        draggable:false,
    });

     $('.sub_menu li:first a').click(function(e){
       e.preventDefault();
       $('.sub_menu').toggleClass('on');
    });
    
    //첫번째 탭메뉴만 보이게 하기
    $('.product_con>div:gt(0)').hide();
    
    $('.tab_menu li').click(function(e){
        
        //a태그 없애기
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        var num=$(this).index();
        
        $('.tab_con>ul').eq(num).show().siblings().hide();
    });
    
    var to=true;
    
    $('.family .btn_family').click(function(){
        if(to==true){
            $('.family .family_list').show();
            to=false;
        } else {
            $('.family .family_list').hide();
            to=true;
        }
        console.log(to);
    });        
});