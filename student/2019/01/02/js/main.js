$(document).ready(function(){
    
    //헤더픽스
    $(window).on('scroll', function(){
        var num=$(this).scrollTop();
        console.log(num);
        if (num>=700) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });
    
    //메뉴 여닫기
	$('#header .btn_menu').on('click',function(){
		$('#header .gnb_wrap').addClass('on');
		$('#header .dim').fadeIn();
	});
	
	$('#header .gnb_wrap .top_gnb .btn_close').on('click',function(){
		$('#header .gnb_wrap').removeClass('on');
		$('#header .dim').fadeOut();
	});
    
    $('#header .dim').on('click',function(){
        $('#header .gnb_wrap').removeClass('on');
		$('#header .dim').fadeOut();
    });
	
	
	//메뉴 토글
	$('#header .gnb_wrap .gnb>li>a:not(:eq(4),:eq(1))').on('click',function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active')
		$(this).siblings('.depth2').slideToggle();
	});
    
    //메인 이벤트슬라이더
    var mySwiper = new Swiper ('.event_slider', {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        slidesPerView: 'auto'
    })
    
    
    //서브-이벤트
    
    //탭메뉴
    $('#container.event .event_wrap:gt(0)').hide();
    
    $('#container.event .event_tab_wrap li').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
        var num=$(this).index();
        $('#container.event .event_wrap').eq(num).show().siblings().hide();
    });
    
    
    //서브-프로덕트
    
    $('#container.product .category_wrap .btn_pro').on('click',function(){
        $('.category_wrap .category').slideToggle();
        $(this).toggleClass('active');
    });
    
    //제품슬라이더
    var mySwiper = new Swiper ('.pro_slider', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
    
    
    //서브-어바웃맥심
    $('#container.about .about_con:gt(0)').hide();
    
    $('#container.about .about_tab_wrap li').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
        var num2=$(this).index();
        $('#container.about .about_con').eq(num2).show().siblings().hide();
    });
    
    
    //푸터 패밀리사이트
    $('#footer .btn_family').on('click',function(){
        $(this).toggleClass('on');
        $('#footer .family_menu').stop().slideToggle();
    });
});