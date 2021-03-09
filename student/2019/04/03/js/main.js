$(document).ready(function(){
    $('#header .middle_header_wrap .util_wrap .lang .btn_lang').on('click',function(){
		$('#header .middle_header_wrap .util_wrap .lang').toggleClass('on') 
	});
	$('#header .middle_header_wrap .util_wrap .lang').on('mouseleave',function(){
		$('#header .middle_header_wrap .util_wrap .lang').removeClass('on') 
	});
    //메인 페이지 gnb
    $('#header .bottom_header_wrap .gnb').on('mouseenter',function(){
        $('#header').addClass('on');
    });
    
    $('#header .bottom_header_wrap .gnb').on('mouseleave',function(){
        $('#header').removeClass('on');
    });
	
	var mySwiper=new Swiper('.main_slider',{
        loop:true,//반복
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
        autoplay: {
            delay: 3000,//자동실행 시간
            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });
	
	var mySwiper2=new Swiper('.section1_slider',{
        simulateTouch:false,//데스크탑일 경우 마우스드래그 막기(모바일사용X)
        speed:1000,//애니매이션 시간
		slidesPerView: 7,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
		breakpoints: {
            767: {
              slidesPerView: 3,
            }
        },
    });
	
	$('#mheader .btn_m').on('click',function(){
        $('#mheader .gnb_wrap,body').addClass('on');
        $('#mheader .dimm').fadeIn();
    });
    $('#mheader .btn_close').on('click',function(){
        $('#mheader .gnb_wrap,body').removeClass('on');
        $('#mheader .dimm').fadeOut();
    });
	$('#mheader .top_gnb_wrap .lang .btn_lang').on('click',function(){
		$('#mheader .top_gnb_wrap .lang').toggleClass('on') 
	});
	
	$('#mheader .gnb>li>a').on('click',function(){
        $(this).addClass('on');
        $(this).parent().siblings().find('a').removeClass('on');
        $('#mheader .gnb .depth2').stop().slideUp();//초기화
        
        if($(this).siblings('.depth2').css('display') == 'none'){
            $(this).addClass('on');
            $(this).siblings('.depth2').stop().slideDown();
        } else {
			$('#mheader .gnb>li>a').removeClass('on');
        	$('.depth2').stop().slideUp();//초기화
		}
    });
	
	$('#footer .family_wrap .btn_family').on('click',function(){
		$('#footer .family_wrap').toggleClass('on') 
	});
	$('#footer .family_wrap').on('mouseleave',function(){
		$('#footer .family_wrap').removeClass('on') 
	});
});



















