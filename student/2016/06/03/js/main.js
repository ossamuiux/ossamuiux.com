$(document).ready(function(){
	
	 $('.intro .intro_inner .btn').click(function(){
		 //scrollTop속성을 가져올 때는 window, 이동시킬때는 html,body
			$('html,body').animate({scrollTop:1100});
	 });
	 
	 $('.btn_snb a').click(function(e){
			e.preventDefault();
			$('.snb_open').animate({left : "+=216px"},300);
			$('.btn_snb a').hide();
	 });
	 	 $('.snb_open .btn_logo ').click(function(e){
			e.preventDefault();
			$('.snb_open').animate({left : "-=216px"},300);
			$('.btn_snb a').show();
	 });
	
	 $('.snb_open ul .txt2').click(function(){
		 //scrollTop속성을 가져올 때는 window, 이동시킬때는 html,body
		 	$('html,body').animate({scrollTop:1100});
	 });

	 $('.snb_open ul .txt3').click(function(){
		 //scrollTop속성을 가져올 때는 window, 이동시킬때는 html,body
		 	$('html,body').animate({scrollTop:2200});
	 });

	 $('.snb_open ul .txt4').click(function(){
		 //scrollTop속성을 가져올 때는 window, 이동시킬때는 html,body
		 	$('html,body').animate({scrollTop:3300});
	 });

	//첫번째 탭내용만 보이기
	//:gt(0) 필터선택자 (greater than(0)-첫번째 탭내용보다 큰 내용 숨기기)
	$('.tab_con>div:gt(0)').hide();

	$('.tab_btn li').click(function(e){
		e.preventDefault();
		var num=$(this).index();//클릭한 li 순서값찾기
		//a그룹에서 추출한 인덱스값을 b그룹의 eq메서드에 넣어줌
		
		$('.tab_con>div').hide();//탭내용 모두 안보이기(초기화)-순서중요!! 초기화가 먼저 와야됨!
		$('.tab_con>div').find('img:eq(1)').hide();//물 이미지 fadein초기화
		$('.tab_con>div').find('img:eq(2)').hide();
		
		$('.tab_con>div').eq(num).show();
		$('.tab_con>div').eq(num).find('img:eq(1)').fadeIn(1000);//img class명 다 다르므로 'img:eq(1)'로 설정(div안에 두번째 이미지)
		$('.tab_con>div').eq(num).find('img:eq(2)').fadeIn(1600);

		//모든 li의 on클래스 삭제		
		$('.tab_btn li').removeClass('on');
		//클릭한 li에 on클래스 걸기
		$(this).addClass('on');
	});
	//e스토어 썸네일슬라이더
	$('.section4 .editor .f_sum').slick({
		arrows:true,//좌우화살표 끄기
		autoplay:true,//자동실행
		dots:false,//페이지버튼
		swipe:false,//마우스 드래그 이동 끄기
		pauseOnHover:false,//마우스올렸을때 멈춤기능 끄기
		slidesToShow: 3,//보여질 썸네일 갯수
        slidesToScroll: 1,//스크롤되는 썸네일 갯수
		slide:'div'//슬라이드로 사용할 엘리먼트 지정
	});
		$('.section4 .editor .s_sum').slick({
		arrows:true,//좌우화살표 끄기
		autoplay:true,//자동실행
		dots:false,//페이지버튼
		swipe:false,//마우스 드래그 이동 끄기
		pauseOnHover:false,//마우스올렸을때 멈춤기능 끄기
		slidesToShow: 3,//보여질 썸네일 갯수
        slidesToScroll: 1,//스크롤되는 썸네일 갯수
		slide:'div'//슬라이드로 사용할 엘리먼트 지정
	});

});
