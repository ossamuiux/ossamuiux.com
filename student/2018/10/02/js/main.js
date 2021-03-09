$(document).ready(function () {
	$('#header .btn_menu').click(function() {
        $('#header .cover').fadeIn();
		$('#header .m_gnb_wrap,#wrap').addClass('on');
    });
	$('.m_gnb_wrap .btn_close,#header .cover').click(function() {
        $('#header .cover').fadeOut();
		$('#header .m_gnb_wrap,#wrap').removeClass('on');
    });
	
	//아코디언 메뉴
	$('.m_gnb>li .gnb').click(function(e) {
		e.preventDefault();
		$(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();
		$(this).parent().toggleClass('on').siblings().removeClass('on');
	});
	
	//메인 슬라이더
	var mySwiper = new Swiper ('.main_visual', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 2500,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	
	//new 슬라이더
	var mySwiper2 = new Swiper ('.new_slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
	
	//탭
	$('#main .section2 .tab_list li').click(function(e) {
		e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
		var num = $(this).index();

		//탭 내용그룹과 연결
		$('.section2 .slider_wrap .swiper-container').eq(num).show(0,function(){
			var mySwiper3 = new Swiper ('.best_slider', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
			});
		}).siblings().hide();
    });
	
	//제품소개 상단 슬라이더
	var mySwiper4 = new Swiper ('.slider_product', {
		// Optional parameters
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
	
	//제품소개 메뉴이동
	$('#main.productInfo .sub_section1 .btn_tabs').click(function() {
		$('#main.productInfo .sub_section1 .tabs_menu').slideToggle()
    });
	
	//제품소개 lisi 누를시 메뉴닫기
	$('#main.productInfo .sub_section1 .tabs_menu li').click(function() {
		$(this).parent().slideUp()
    });
	
	//문의사항 파일첨부
	var fileTarget = $('.box_file .upload_hidden'); 
	
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; 
		} else { // old IE
			 var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
		} // 추출한 파일명 삽입 
		 $(this).siblings().children('.name_file').val(filename); 
	 });
	
	//footer 공지 슬라이더
	var mySwiper5 = new Swiper ('.slider_notice', {
		loop: true,
		direction: 'vertical',
		spaceBetween: 0,
		autoplay: {
		delay:3000,
		},
	});
});









