$(document).ready(function(){
    $('#header .btn_m').on('click',function(){
        $('#header .gnb_wrap,body').addClass('on');
        $('#header .dimm').fadeIn();
    });
    $('#header .btn_close').on('click',function(){
        $('#header .gnb_wrap,body').removeClass('on');
        $('#header .dimm').fadeOut();
    });
    
    //언어
    
    $('.top_gnb>li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //gnb
    
    $('#header .gnb>li>a').on('click',function(){
        $('#header .gnb li').removeClass('active');
        $('.gnb .depth2').stop().slideUp();//초기화
        
        if($(this).siblings('.depth2').css('display')=='none'){
            $(this).parent().addClass('active');
            $(this).siblings('.depth2').stop().slideDown();
        }
    });
    
    //메인슬라이더
    var mySwiper=new Swiper('.main_slider',{
        loop:true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination'
        }
    });
    
    //메인 프로덕트
    $('#main .section1 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    $('.section1 .product_slider:gt(0)').hide();
    
    $('#main .section1 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num=$(this).index();
        $('.section1 .product_slider').eq(num).show().siblings().hide();
    });
    
    var mySwiper2=new Swiper('.section1 .product_slider',{
        loop:true,
        observer:true,
        speed:800,//애니매이션 시간        
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
    
    //이벤트 페이지 메인슬라이더
    var mySwiper3=new Swiper('#container.event .section1 .section1_inner',{
        loop:true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
    
    //이벤트 탭메뉴
    $('.section2 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('#container.event .section2 .tab_wrap .tab_con:gt(0)').hide();
    
    $('.section2 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num2=$(this).index();
        $('#container.event .section2 .tab_wrap .tab_con').eq(num2).show().siblings().hide();
    });
    
    //히스토리
    var mySwiper4=new Swiper('#container.history .section1 .history_slider',{
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
    
    $('.history_slider .btn_plus1').on('click',function(){
        $('.history_slider .history_tit1').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.history_slider .btn_plus2').on('click',function(){
        $('.history_slider .history_tit2').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.history_slider .btn_plus3').on('click',function(){
        $('.history_slider .history_tit3').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.history_slider .btn_plus4').on('click',function(){
        $('.history_slider .history_tit4').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.history_slider .btn_plus5').on('click',function(){
        $('.history_slider .history_tit5').slideToggle();
        $(this).toggleClass('active');
    });
    
    $('.history_slider .btn_plus6').on('click',function(){
        $('.history_slider .history_tit6').slideToggle();
        $(this).toggleClass('active');
    });
    
    
    //메뉴찾기 추천상품 탭메뉴
    $('#container.search_menu .section1 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('.section1 .menu_slider:gt(0)').hide();
    
    $('.section1 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num=$(this).index();
        $('.section1 .menu_slider').eq(num).show().siblings().hide();
    });
    
    //메뉴찾기 추천상품 슬라이더
    var mySwiper4=new Swiper('#container.search_menu .section1 .menu_slider',{
        loop:true,
        observer:true,
        speed:800,//애니매이션 시간
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
	
    var mySwiper5=new Swiper('#container.search_menu .section2 .menu_pic',{
        observer:true,
        speed:300,//애니매이션 시간
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    });
	
    //메뉴찾기 탭메뉴
    $('#container.search_menu .section2 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('#container.search_menu .section2 .tab_wrap .tab_con:gt(0)').hide();
    
    $('#container.search_menu .section2 .btn_tab li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active'); 
        
        //형제요소 순서찾기
        var num=$(this).index();
        $('#container.search_menu .section2 .tab_wrap .tab_con').eq(num).show().siblings().hide();
    });
    
    
});





























