$(document).ready(function() {
    //메뉴버튼, 메뉴닫기버튼
 	$('#header .gnb .btn_menu').click(function() {
        $('#header').addClass('on')
    });
    $('.main_menu .btn_close').click(function() {
        $('#header').removeClass('on')
    });
   
    //메인 커버플로우
    var swiper = new Swiper('.section2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto', 
		mousewheel: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    
    //about 세로 슬라이드
    var swiper2 = new Swiper('.swiper-container.about_section2', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
		speed:900,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //원형그래프
	
	swiper2.on('slideChange', function() {
    //현재 슬라이더 인덱스가 2이면 함수실행
    	if(swiper2.activeIndex==2){ 
			customCircle($('#circle1'),0.88);
			customCircle($('#circle2'),0.95); 
			customCircle($('#circle3'),0.93);
			customCircle($('#circle4'),0.95); 
        };
    });
        
    function customCircle(el,v){
    //customCircle의 순서. el은 위에 $. 그 다음 v가 숫자. 만약 색을 따로 지정하려면 색을 "fff"처럼 쓴 다음 아래 fill color에 [c]정도로 적고 el,v 옆에 ,c라고 적기.     
        el.circleProgress({
            value: v,
            startAngle: -1.55,
            size: 100,
            thickness: 18,
            fill: {color: '#8c42e2' }       
        }).on('circle-animation-progress', function(event,progress) {
            $(this).find('strong').html(Math.round(v * 100 * progress) + '<i>%</i>');
        }); 
        //Math.round 쓴 이유는 소수점을 '반올림'해서 정수로 이용하기 위해서!
    };
        
    //works 세로 슬라이드
    var swiper3 = new Swiper('.swiper-container.works_section2', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
		speed:900,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });       
    
    //experience 가로 슬라이드
    var swiper4 = new Swiper('.swiper-container.exp_section2', {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
		speed:900,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      }
    });  

    //career 가로 슬라이드
    var swiper5 = new Swiper('.swiper-container.car_section2', {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
		speed:900,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },        
    }); 
    
    
    //랜딩페이지 top버튼
    $(window).scroll(function() { 
		var num = $(this).scrollTop();
		
		if(num>4000){
			$('.btn_top').show();
		} else {
			$('.btn_top').hide();	
		}
    });
	
	$('.btn_top').click(function(e) {
        e.preventDefault(); 
		e.stopPropagation();
		
		$('html,body').animate({scrollTop:0});
    });
    
    
});