$(document).ready(function () {
	//모바일메뉴
	$('#header .btn_menu').click(function() {
		$('#wrap, #header .m_gnb_wrap').addClass('on');
		$('#header .cover').fadeIn();
	});
	
	//메뉴닫기
	$('.m_gnb_wrap .top_wrap .btn_close, #header .cover').click(function() {
		$('#wrap, #header .m_gnb_wrap').removeClass('on');
		$('#header .cover').fadeOut();
	});
	
	/*모바일 아코디언 메뉴*/
	$('.m_gnb>li>a').click(function() {
		//아코디언응용(클릭시 닫기)
		$(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp(300);
		$(this).parent().toggleClass('on').siblings().removeClass('on');
	});
	var mySwiper1 = new Swiper ('.live_slider', {
		slidesPerView: 'auto',
		spaceBetween: 3
	});
	
	
	
	
	
	//메인비주얼
	var mySwiper2 = new Swiper ('.main_visual', {
		loop: true,
		autoplay: {
			delay: 5000
		},
	})
	
	var swiper3 = new Swiper('.best_slider', {
      slidesPerView: 2,
	  slidesPerGroup: 2,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	
	//매장 찾기
	$('.quick_search .contents .search_contents .area_box .btn_area').click(function() {
		if(sw ==false){
			$('.area_box .txt_area').show();
			sw = true;
		} else {
			$('.area_box .txt_area').hide();
			sw = false;
		}
	});
	
	$('.area_box2 .btn_area2').click(function() {
		if(sw ==false){
			$('.area_box2 .txt_area2').show();
			sw = true;
		} else {
			$('.area_box2 .txt_area2').hide();
			sw = false;
		}
	});
});




























