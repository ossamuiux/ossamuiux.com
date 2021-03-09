$(document).ready(function(){
    //모달메뉴
	$('#header .btn_menu').click(function(){
		$('#header .modal_menu').stop().fadeToggle(300);
		$(this).toggleClass('on');
	});
    
    //페이지슬라이더
	var swiper = new Swiper('#main.sub_main .sub_slider', {
		direction: 'vertical',
		mousewheel: true,
		speed: 800,
		simulateTouch:false,
		pagination: {
			el: '.pgn_page',
			clickable: true,
		},
    });
    
	//프로필 배경 움직임
	var $el = $('#main .bg_move');
	
	$('#main.about .section1,#main.history .section3').mousemove(function(e){
		//그림의 left, top값 찾기
		var posX = $el.css('left');
		var posY = $el.css('top');
		
		var diffX = e.pageX - parseInt(posX);
		var diffY = e.pageY - parseInt(posY);

		$el.css({'margin-left':-diffX/70,'margin-top':-diffY/70});

	});
	
    //스킬바		
    swiper.on('slideChange', function(){
		if(swiper.activeIndex==1){
			customCircle($('#skill1'),0.99,"#49928b");
			customCircle($('#skill2'),0.95,"#5e80bd");
			customCircle($('#skill3'),0.90,"#d46782");
			customCircle($('#skill4'),0.85,"#c77e4a");
		}
		
		//sub footer
		if(swiper.activeIndex==2){
			$('#footer.sub_footer').fadeIn();
		} else {
			$('#footer.sub_footer').fadeOut();
		}
	});
	
	function customCircle(el,v,c){
		el.circleProgress({
			startAngle: -1.55,
			value: v,
			size: 150,
			thickness: 17,
			fill: {color:[c]}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(v * 100 * progress) + '<i>%</i>');
	  });
	}
	//Math.round : 숫자에서 가장 가까운 정수값을 반환한다. (x의 소수점 이하를 반올림한다)
	
	
	//Run way 슬라이더
	var swiper2 = new Swiper('.run_slider', {
		effect: 'fade',
		simulateTouch:false,
		pagination: {
			el: '.pgn_run',
			clickable: true,
		},
    });
	
	$('pgn_run').click(function(){
		
		var num = $(this).index();
		
		$('.section3 .con_run').eq(num).show().siblings().hide();
	})
	
    //경력 상장 
    $('.list_career>li').click(function(e) {
		e.preventDefault()
		
		var num=$(this).index('.btn_career');
	
		$('.img_career img').eq(num).fadeIn().siblings().fadeOut();
    });
    
    //랜딩 TOp버튼
    $('.btn_top').click(function(e) {
        e.preventDefault();
		e.stopPropagation();

		$('html,body').animate({scrollTop:0});
    });
    
    
});























