$(document).ready(function(){
	
	$('#header .btn_menu').click(function(){
    $('.m_menu').slideToggle();
});
    
    $('.m_menu .gnb>li>a').click(function(){
    $(this).siblings().slideToggle(400).parent().siblings().find('.depth').slideUp();
     $(this).parent().toggleClass('on').siblings().removeClass('on');
    
    $('.open').slideDown().parent().addClass('on');
});   
    
    $('.m_menu .gnb .depth2>li>a').click(function(){
    $(this).siblings().slideToggle().parent().siblings().find('.depth3').slideUp();
     $(this).parent().toggleClass('on').siblings().removeClass('on');    
    });     
    
    
	//랭귀지
    $('#header .btn_language').click(function(){
       $('.m_lang').toggle(200);
    });
    
    $('.m_lang>a').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    
    //메인비쥬얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
	//섹션2비주얼
    var mySwiper = new Swiper ('.section2_visual', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    
    //컴퍼니 서브
//    $('.page_menu li').click(function(){
//       $(this).toggleClass('on').siblings().removeClass('on'); 
//    });
    $('.btn_page').click(function(){
        $(this).siblings().toggle();
    });
    

    //우먼 서브    
    var mySwiper = new Swiper ('.women_section1', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
    });
    
    var mySwiper = new Swiper ('.women_section2_inner', {
        loop: true,
        speed:600,
        autoplay: {
            delay: 4000
        },
    });
    
	//채용 페이지버튼
	 $ ('.content_wrap .tab_page a').click(function(e){
		e.preventDefault();
        
        var num=$(this).index();
       $(this).addClass('on').siblings().removeClass('on');
	 });
	
	
	//매장찾기
	 $('.tab_con_page1:gt(0)').hide();
	
	$('.tab_con li').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
       $(this).addClass('on').siblings().removeClass('on');
		
		$('.tab_con_page1').eq(num).show().siblings().hide();
	});
	
    
    //푸터 패밀리사이트
	$('.btn_family').click(function(){
		$(this).siblings().toggle();
	});
	
    	$('.btn_menu').click(function(){
		$('body').toggleClass('on');
	});
    
});


















