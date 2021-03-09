$(document).ready(function() {
    //햄버거메뉴
    $('#header .btn_m').click(function(){
       $('#header .m_menu, #wrap').addClass('on'); 
    });
    
    $('#header .btn_close').click(function(){
       $('#header .m_menu, #wrap').removeClass('on'); 
    });
	
	//클래스 슬라이더
    var mySwiper = new Swiper ('.class_wrap', {
        //oop: true,
        speed:700, 
        allowTouchMove:false,//마우스드래그이동 끄기
		slidesPerView: 4,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
		breakpoints: {
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            767: {
                slidesPerView: 1,
                allowTouchMove:true
            }
        }
    });
});


















