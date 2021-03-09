$(document).ready(function(){
	//주메뉴 첫번째 li에 마우스를 올렸을때
	$('.whole_menu').eq(0).mouseenter(function(){
		//서브메뉴의 높이를 원래값으로 늘려줌
		$('.click_menu').stop().slideDown();
	});
	//주메뉴 첫번째 li에 마우스가 빠졌을때
	$('.whole_menu').eq(0).mouseleave(function(){
		//서브메뉴의 높이를 0으로 줄여줌
		$('.click_menu').stop().delay(100).slideUp();
	});	
	//첫번째 li에서 서브메뉴로 마우스가 갔을때 높이가 줄어들지않게~
	$('.click_menu').mouseenter(function(){
		//이전 애니메이션 delay가 있을경우는 이전애니메이션이 멈추지않는다.
		$('.click_menu').stop(true,true).slideDown();
	});
	//서브메뉴에서 마우스가 빠지면 높이를 줄여라~
	$('.click_menu').mouseleave(function(){
		$('.click_menu').stop().slideUp();
	});
});