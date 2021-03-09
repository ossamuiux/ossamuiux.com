// JavaScript Document


$(document).ready(function(){
	//◆introduce.html > tab메뉴
	//첫번째 탭내용만 보이기
	//:gt(0) 필터선택자, gt=>초과
	$('.introduce_tab_con>div:gt(0)').hide(); //첫번째 탭내용보다 큰 내용 숨기기
	
	$('.introduce_tab_btn li').click(function(){
		var num=$(this).index();
		//console.log(num);	클릭 시 0,1,2
		//a그룹에서 추출한 인덱스값을 b그룹의 eq메서드에 넣어줌
		$('.introduce_tab_con>div').hide(); //탭내용 모두 안보이기. 순서대로 실행. 위치중요
		$('.introduce_tab_con>div').eq(num).show(); //eq(이퀄메서드) 해당되는 것을 보여라.
		
		//모든 li의 on클래스를 삭제
		$('.introduce_tab_btn li').removeClass('on');
		//클릭한 li에 on클래스 걸기
		$(this).addClass('on');
		
	});
	//◆scrap.html > 슬라이드내용
	$('.scrap_box .scrap_con').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.scrap_box .scrap_track'
	});
	
	$('.scrap_box .scrap_track').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		asNavFor: '.scrap_box .scrap_con',
  		dots: false,
  		centerMode: true,
  		focusOnSelect: true
});
		
});
