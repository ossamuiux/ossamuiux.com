$(document).ready(function() {
	//메인비주얼 가득 채우기
	bnrMainTopFull();
	$(window).on('resize',function(){
		bnrMainTopFull();
	});
	
	// 헤더의 움직임 감지해서 숨기기
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#header').outerHeight();

	$(window).scroll(function(event){
    	didScroll = true;
	});

	setInterval(function() {
    	if (didScroll) {
        	hasScrolled();
        	didScroll = false;
    	}
	}, 250);

	function hasScrolled() {
    	var st = $(this).scrollTop();
		var checkGnbDisplay = $('#header .m_gnb_wrap').css('display');
    
    	if(Math.abs(lastScrollTop - st) <= delta)
        	return;
    	
		if(checkGnbDisplay == 'none'){
			// m_gnb_wrap이 none일때 헤더가 숨겨질수있음, block이라면 숨겨지지않음
    		if (st > lastScrollTop && st > navbarHeight){
        	// Scroll Down
				$('#header .btn_menu').removeClass('on');
        		$('#header').addClass('nav-up');
    		} else {
        	// Scroll Up
        		if(st + $(window).height() < $(document).height()) {
            		$('#header').removeClass('nav-up');
        		}
			}
    	}
    	lastScrollTop = st;
	}
	
	//메뉴버튼 클릭시 on클래스 추가, gnb나타내기
	$('#header .btn_menu').click(function() {
       $(this).toggleClass('on');
	   $('#header .m_gnb_wrap').slideToggle(200);
	   $('#header .m_gnb_wrap .m_gnb .m_depth2').hide(); //depth2가 열려있으면 닫음
	   $('#header .m_gnb_wrap .m_gnb li a').removeClass('on');
    });
	
	//menu list 클릭시 depth2 보이기
	$('#header .m_gnb_wrap .m_gnb>li>a').click(function(e) {
		var h = 0;
        $(this).parent().find('.m_depth2').slideToggle(200).parent().siblings().find('.m_depth2').slideUp(200);
		$(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
		e.preventDefault();//a태그 기본이벤트 막기
    });
	
	//스와이퍼 슬라이더
	var swiper = new Swiper('.main_visual_slider', {
        autoplay: {
			delay: 2500,
			disableOnInteraction: false,
        },
		
		scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        },
    });
	
	var swiper2 = new Swiper('.dessert_slider', {
		loop: true,
        autoplay: {
			delay: 4000,
			disableOnInteraction: false
        },
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
    });
	
	var swiper3 = new Swiper('.md_slider', {
		loop: true,
        autoplay: {
			delay: 5000,
			disableOnInteraction: false
        },
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
    });
	
	
});

// 꽉차게꽉꽉꽉함수
function bnrMainTopFull(){
	var wH = $(window).height();
	var $bnrMainTopSlider = $('#main .main_visual .main_visual_slider .swiper-wrapper');

	$bnrMainTopSlider.css({'height': wH + 'px','min-height':'570px'});
}
