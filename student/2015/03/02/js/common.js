$(document).ready(function(){
	var sw=0;//모바일버튼 스위치변수
	
	$('.m_btn').click(function(){
		if(sw==0){
			//모바일버튼 on클래스처리
		$(this).addClass('on');
		//모바일메뉴 애니메이트
		$('.menu_wrap').animate({'left':'0'},300);
		//전체내용 애니메이트
		$('.wrap').animate({'left':'274px'},300);
		//스크롤바 안나오게 
		$('.wrap_hide').css({'overflow':'hidden'})
		$('.wrap_hide .cover').fadeIn();
		
		
			sw=1;
		}else{
			$(this).removeClass('on');
			$('.menu_wrap').animate({'left':'-274px'},300);
			//애니메이트중에 overflow를 풀어주면 스크롤바가 보이므로 
			//이동이 끝나면 스크롤바를 나오게~하자~ㅎㅎ
			$('.wrap').animate({'left':'0'},300,function(){
				$('.wrap_hide').css({'overflow':'auto'});
			});
				$('.wrap_hide .cover').fadeOut();
			
			sw=0;
		}
	});
});