$(document).ready(function(){
    
//    if($('#intro_main').length>0) {
        $('.btn_wrap .intro_btn').on('click',function(e){
            e.preventDefault();
            $('#introMain').css('top','-120%');
            
            setTimeout(function(){
                location.href="index.html";
            },500)
        });
//    }
    
    
    
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        //탑버튼 보이기
        if(num>=3000){
            $('#footer .btn_top').stop().fadeIn(500);//fadein(시간 800=0.8초) : 천천히 보여줘!
//            console.log(num);
        } else { //else = if의 반대조건. 즉 80이하이면~ 이란뜻
            $('#footer .btn_top').stop().fadeOut(500);//fadeout(시간 800=0.8초) : 천천히 보여줘!
        };
    });
    
   //탑버튼 누르면 올라가기
    $('#footer .btn_top').on('click',function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:0});
    });
    
    
    //인덱스_전화 뜨게하기!
    $('.cell .btn_cell').on('click',function(){
        $('.cell .ph_main').fadeIn(300);
        $('.cell2 .btn_cell2').fadeOut(300);
        $('.cell3 .btn_cell3').fadeOut(300);
    });
    
    $('.cell .ph_main').on('click',function(){
        $('.cell .ph_main').fadeOut(300);
        $('.cell2 .btn_cell2').fadeIn(300);
        $('.cell3 .btn_cell3').fadeIn(300);
    });
    
    $('.cell2 .btn_cell2').on('click',function(){
        $('.cell2 .ph_main2').fadeIn(300);
        $('.cell3 .btn_cell3').fadeOut(300);
    });
    
    $('.cell2 .ph_main2').on('click',function(){
        $('.cell2 .ph_main2').fadeOut(300);
        $('.cell3 .btn_cell3').fadeIn(300);
    });
    
    $('.cell3 .btn_cell3').on('click',function(){
        $('.cell3 .ph_main3').fadeIn(300);
    });
    
    $('.cell3 .ph_main3').on('click',function(){
        $('.cell3 .ph_main3').fadeOut(300);
    });
    
    
    
    //메세지 뜨기_연스타 토글 //
    $('.message .btn_msg1').on('click',function(){
        $(this).toggleClass('active');
        $(this).siblings('.phone_number').toggle();
    });
    
    $('.message .btn_msg2').on('click',function(){
        $(this).toggleClass('active');
        $(this).siblings('.phone_number2').toggle();
    });
    
    $('.message .btn_msg3').on('click',function(){
        $(this).toggleClass('active');
        $(this).siblings('.phone_number3').toggle();
    });
    
    
    //메세지 다른곳 누르면 꺼지기_연스타
    $(document).on('click',function(e){
//        console.log($(e.currentTarget));
        if($(e.target).closest('.message').length == 0){
            $('.message .phone_number').hide();
            $('.message .btn_msg1').removeClass('active');
        };
        
        if($(e.target).closest('.message').length == 0){
            $('.message .phone_number2').hide();
            $('.message .btn_msg2').removeClass('active');
        };
        
        if($(e.target).closest('.message').length == 0){
            $('.message .phone_number3').hide();
            $('.message .btn_msg3').removeClass('active');
        };
    });
    
    //모달팝업 _연스타 클릭
    $('.yeonstagram .list_picture li').on('mouseenter',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //모달팝업 _연스타 사진 클릭시 나오는 팝업
    $('.bottom_section .list_picture li').on('click',function(){
       var num=$(this).index();
        $('.modal_video').show();
        $('.modal_con_wrap .modal_con').eq(num).show();
    });
    
    $('.modal_con_wrap .btn_close,.modal_video').on('click',function(){
       $('.modal_video,.modal_con_wrap .modal_con').hide();
    });
    
    

    //모달팝업 _ 웹디자인
//    $('.p_web_design .list_web_img li').on('mouseenter',function(){
//        $(this).addClass('active').siblings().removeClass('active');
//    });
//    
    //모달팝업 _웹디자인 클릭시 나오는 팝업
    $('.sub7_middle_section .list_web_img li').on('click',function(e){
        e.preventDefault();//팝업 뜰때 배경 안올라가
       var num=$(this).index();
        $('.modal_web_design').show();
        $('.modal_con_wrap1 .modal_con1').eq(num).show();
    });
    
    $('.modal_con_wrap1 .modal_con1 .btn_close1,.p_web_design .modal_web_design').on('click',function(){
       $('.modal_web_design,.modal_con_wrap1 .modal_con1').hide();
    });
    
    
    
    
    //네비게이션 공통
	var MQL = 1170;
	if($(window).width() > MQL) {
		var headerHeight = $('.box-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
		    		$('.box-header').addClass('is-visible');
		    	} else {
		    		$('.box-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.box-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.box-header').hasClass('is-fixed')) $('.box-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}
    
	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
    
    //드로잉 슬라이더
    var mySwiper2=new Swiper('.drawing_slider', {
        slidesPerView:1,//보여질 썸네일 갯수
        slidesPerGroup:1,//한번에 이동될 갯
        spaceBetween:40,//슬라이드 간격
        loop:true,//반복
        simulateTouch:false,//데스크탑일경우 마우스드래그 막기
        speed:1000,//애니메이션 시간
//        autoplay: {
//            delay: 3000,//자동실행 시간
//            disableOnInteraction:false//좌우화살표 클릭시 멈춤기능 끔
//        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    
    //하트 숫자 올라가는거_연툰
    $('#heart').on('click',function(){
        $('.heart_txt').text('999,999');
    });
    
    $('#plus').on('click',function(){
        $('.plus_txt').text('010-5967-2929 연락주세요♥(๑ ❛ ڡ ❛ ๑)');
    });
    
});