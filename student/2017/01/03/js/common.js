$(document).ready(function() {
	//헤더 gnb메뉴//
	$('.gnb').mouseenter(function(){    
       $('#header').addClass('on'); 
    });
    
    $('#header').mouseleave(function(){
        $('#header').removeClass('on');
    });
	
	//햄버거 메뉴//
	$('.btn_m').click(function(){
       $('#header .cover').fadeIn();
       $('.m_menu, #wrap').addClass('on');
   	});
   
    $('.btn_close, .cover').click(function(){
       $('#header .cover').fadeOut();
       $('.m_menu, #wrap').removeClass('on');                     
    }); 
	
	 //메인비쥬얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed:500,
        allowTouchMove:false,//마우스드래그이동 끄기
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
            767: {
              allowTouchMove:true
            }
        }
    });
	
	 //$(window).resize이벤트
    $(window).resize(function(){
       var num = $(this).width()+17;//창에서 스크롤바를 뺀크기
        
        if(num>=768){
            $('.m_menu').removeClass('on');
        }
		
        if(num>=1025){
			 $('.cover').hide();
		}
        changeImg();
    });
    
    changeImg();
    
    function changeImg(){
        var num = $('.main_visual .swiper-slide').length;
        
        if($(window).width()+17 <= 767){
            for(var i=0; i<num; i++){
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,18);
                var str2 = str+'_mobile.jpg';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
			for(var i=0; i<6; i++){
                var str = $('.class_wrap li').eq(i).find('.class_name img').attr('src').substr(0,13);
                var str2 = str+'_mobile.png';
                
                $('.class_wrap li').eq(i).find('.class_name img').attr('src',str2);
            }
        } else if($(window).width()+17 <= 1024){
            for(var i=0; i<num; i++){
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,18);
                var str2 = str+'_tablet.jpg';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
			for(var i=0; i<6; i++){
                var str = $('.class_wrap li').eq(i).find('.class_name img').attr('src').substr(0,13);
                var str2 = str+'.png';
                
                $('.class_wrap li').eq(i).find('.class_name img').attr('src',str2);
            }
        } else {
            for(var i=0; i<num; i++){
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,18);
                var str2 = str+'.jpg';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
        }
    }
	
	
   
	
});











