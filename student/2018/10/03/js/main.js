$(document).ready(function(){
    //gnb
	$('.gnb>li').mouseenter(function(){
       $(this).find('.wrap_depth2').stop().slideDown(); 
    }).mouseleave(function(){
       $('.gnb .wrap_depth2').hide(); 
    });
    
    //언어 클릭
    $('.wrap_lag .btn_lag').click(function(){
        $('.wrap_lag .list_lag').slideToggle();
    });
	
	//menu 버튼
	$('#header .btn_menu').click(function(){
		$(this).toggleClass('on');
		$('.wrap_m_menu,#wrap').toggleClass('on');
		$('#header .dimm').stop().fadeToggle();
		
	});
	
	$('#header .dimm').click(function(){
		$(this).stop().fadeOut();
		$('.btn_menu,.wrap_m_menu,#wrap').removeClass('on');
	});
	
	/*타블렛 메뉴 아코디언*/
	$('.wrap_m_menu .m_menu>li>a').click(function(){
		$(this).parent().toggleClass('on').siblings().removeClass('on');
        $('.m_menu .depth2').stop().slideUp(300);
        $(this).parent().find('.depth2').stop().slideToggle(300);
	});
	
	$(window).resize(function(){
		var num=$(this).width()+17;
		
		if(num>=1025){
			$('#header .btn_menu.on').trigger('click');
			console.log(num);
		};
	});	

	//메인비주얼 슬라이더
	var swiper1 = new Swiper('.main_visual', {
        effect: 'fade',
		simulateTouch: true,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
    });
	
	//뉴앨범 슬라이더
	var swiper2 = new Swiper('.na_slider', {
		slidesPerView: 3,
		spaceBetween:0,
		centeredSlides: true,
		speed: 600,
		loop: true,
		loopAdditionalSlides: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			1024: {
				spaceBetween:-40,
			},
			767: {
				slidesPerView: 1,
			}
		}
    });
    
	var youtubeArr = []; //영상재생을 위한 변수값. 영상주소 넣기
	youtubeArr[0] = 'https://www.youtube.com/embed/lpzJNwur6Zk?autoplay=0&rel=0';
	youtubeArr[1] = 'https://www.youtube.com/embed/x_oHzyRUvC0?autoplay=0&rel=0';
	youtubeArr[2] = 'https://www.youtube.com/embed/sS0LCjOiIhc?autoplay=0&rel=0';
	youtubeArr[3] = 'https://www.youtube.com/embed/aqExfBo_ZrM?autoplay=0&rel=0';
	
    //유튜브 탭
    $('.section2 .tab_steel li').click(function(){
        var num = $(this).index();
		
        $('.section2 .youtube iframe').eq(num).attr('src',youtubeArr[num]).fadeIn().siblings().attr('src','').hide();
		$(this).addClass('on').siblings().removeClass('on');
    });
	
	//공지사항
	var swiper3 = new Swiper('.section4_inner .swiper-container', {
		direction: 'vertical',
		autoplay: {
			delay: 3000,
		},
        loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
    });
	
	//패밀리사이트
	$('#footer .btn_site').click(function(){
		$('#footer .list_site').slideToggle();
	});	
});

