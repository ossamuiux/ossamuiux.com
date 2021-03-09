//◆메인>visual슬라이드◆
$(document).ready(function(){
	var dslrBtn=false; //dslr슬라이더 플레이버튼용
	var estoreBtn=true; //estore슬라이더 플레이버튼용
	
	//dslr 썸네일 슬라이더
	$('.section0 .visual').slick({
		arrows:false, //좌우화살표끄기
		autoplay:true, //자동실행
		dots:true, //페이지버튼
		pauseOnHover:false, //마우스올렸을때 멈춤기능 끄기
		fade:true, //슬라이드 화면 전환시 페이드(1번 점점 사라지면 2번 나타나는)효과
		speed:2000, //페이드시간
		slide:'div' //문자형식으로 사용할 슬라이드지정(페이지버튼과 플레이버튼분리)
	});


//◆메인>section2>학회및행사 이미지 슬라이더◆
	var estoreBtn=true; //학회및행사슬라이더 플레이버튼용

		//학회및행사 썸네일 슬라이더
		$('.section2_inner .society_slider').slick({
		arrows:false, //좌우화살표끄기
		autoplay:true, //자동실행
		dots:true, //페이지버튼
		swipe:false, //마우스드래그 이동 끄기
		pauseOnHover:true, //마우스올렸을때 멈춤기능 끄기
		slidesToShow:2, //보여질 썸네일 갯수
		slidesToScroll:2, // 스크롤되는 썸네일 갯수
		speed:2000, //페이드시간
		slide:'div' //문자형식으로 사용할 슬라이드지정(페이지버튼과 플레이버튼분리)
	});
	
		$('.section2_inner .society_slider .btn_play').click(function(){
		if(estoreBtn == false){
			$(this).addClass('on');
			$('.section2_inner .society_slider').slick('slickPause'); //슬라이더 자동실행 일시정지
		}	else {
				$(this).removeClass('on');
				$('.section2_inner .society_slider').slick('slickPlay'); //슬라이더 자동실행 
			}
			
			estoreBtn = !estoreBtn;
	});

//◆메인>section3>sns 탭메뉴◆
	//첫번째 탭내용만 보이기
	//:gt(0) 필터선택자, gt=>초과
	$('.tab_con>div:gt(0)').hide(); //첫번째 탭내용보다 큰 내용 숨기기
	
	$('.tab_btn li').click(function(){
		var num=$(this).index();
		//console.log(num);	클릭 시 0,1,2
		//a그룹에서 추출한 인덱스값을 b그룹의 eq메서드에 넣어줌
		$('.tab_con>div').hide(); //탭내용 모두 안보이기. 순서대로 실행. 위치중요
		$('.tab_con>div').eq(num).show(); //eq(이퀄메서드) 해당되는 것을 보여라.
		
		//모든 li의 on클래스를 삭제
		$('.tab_btn li').removeClass('on');
		//클릭한 li에 on클래스 걸기
		$(this).addClass('on');
		
	});

//◆메인>footer>familysite◆
	var sw=true;
	
	$('.family .button1').click(function(){
		sw=!sw; //부정연산자(not)을 변수값 앞에 붙여서 클릭할때마다 true, false가 되게함. sw가 원래 갖고있는 값의 반대를 넣어라.
		
		console.log(sw);

		if(sw==true){
		$('.family .family_list').hide();
		} else {
			$('.family .family_list').show();
		}
		
	});
	
//◆사업소개>sub_con>tab메뉴◆	
	//첫번째 탭내용만 보이기
	//:gt(0) 필터선택자, gt=>초과
	$('.introduce_tab_con>div:gt(0)').hide(); //첫번째 탭내용보다 큰 내용 숨기기
	
	$('.introduce_tab_btn li').click(function(){
		var num=$(this).index();
		console.log(num);	//클릭 시 0,1,2
		//a그룹에서 추출한 인덱스값을 b그룹의 eq메서드에 넣어줌
		//$('.introduce_tab_con>div').hide(); //탭내용 모두 안보이기. 순서대로 실행. 위치중요
		//$('.introduce_tab_con>div').eq(num).show(); //eq(이퀄메서드) 해당되는 것을 보여라.
		
		//모든 li의 on클래스를 삭제
		$('.introduce_tab_btn li').removeClass('on');
		//클릭한 li에 on클래스 걸기
		$(this).addClass('on');
		
	});

});

