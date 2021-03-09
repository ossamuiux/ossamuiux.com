$(document).ready(function () {
	$('#header .btn_menu').click(function() {
        $('#wrap, #wrapHide, #header .m_gnb_wrap').addClass('on');	
		$('#header .cover, #header .btn_close').show();	
    });
	
	$('#header .btn_close').click(function() {
        $('#wrap, #wrapHide, #header .m_gnb_wrap').removeClass('on');
		$('#header .cover, #header .btn_close').hide();		
    });
	
	$('.m_gnb_wrap .m_gnb>li>a').click(function(e) {	
		e.preventDefault();	
		$(this).parent().find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp(300);
		$(this).parent().toggleClass('on').siblings().removeClass('on');
    });
	
	$('#header .btn_search').click(function() {
        $('#header .search_wrap').fadeToggle(100);
    });
	
	$('#header .search_wrap .btn_close_pop').click(function() {
        $('#header .search_wrap').fadeOut(100);
    });
	
    var mySwiper = new Swiper ('.main_visual', {
		loop: true,
		autoplay: {delay:5000},
		pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
			clickable: true
		}
    });
	
	 var swiper = new Swiper('.item_slider', {
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 20,
		pagination: {
        	el: '.swiper-pagination',
			type: 'bullets',
        	clickable: true,
      }
    });
	
	$('#footer .brand .brand_wrap .btn_brand').click(function() {		
		$('#footer .brand .brand_wrap .list_brand').slideToggle();
		$('#footer .brand .brand_wrap .btn_brand span img').toggleClass('on');
    });
	
	$('.btn_top').click(function(e) {
        e.preventDefault(); 
		$('html,body').animate({scrollTop:0});
    });
	
	$('.sub_btn_page a').click(function() {
		$('.sub_btn_page a').removeClass('on');
        $(this).addClass('on');
    });
	
	$('#main .sub_location .btn_location').click(function() {
		$('#main .sub_location .btn_location').toggleClass('on');
        $('#main .sub_location .depth2').slideToggle();
    });

	//파일 업로드 할 때 이름 뜨게!
	var fileTarget = $('.filebox .upload-hidden');
	
	fileTarget.on('change', function(){  // 값이 변경되면
		if(window.FileReader){  // modern browser
		var filename = $(this)[0].files[0].name;
		} else {  // old IE
		var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
		} $(this).siblings('.upload-name').val(filename); // 추출한 파일명 삽입
	});
	
});










