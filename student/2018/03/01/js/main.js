$(document).ready(function(){
    //header hover
    $('#header .gnb').mouseenter(function(){
     $('#header').stop().animate({'height':'330px'},400);
    }); 
    $('#header').mouseleave(function(){
        $('#header').stop().animate({'height':'80px'},400);
    });
    
    $('.main_visual').slick({
        fade:false,//페이드효과
        dots: false,//페이지버튼
        draggable:true,//마우스드래그
        autoplay:true,//자동실행
        autoplaySpeed:2000,//슬라이더인터벌
        pauseOnHover:false//마우스오버시 멈춤기능
    });
    
     $('.sub_box .btn_rd').click(function(e){
        e.preventDefault();//a태그 기본이벤트막기
        
    });
    
    //var sw=true;
    $('.sub_box li img').click(function(){
        //인덱스추출하여 번수에 대입
        var num=$(this).index();
        //콘솔로 확인하여 0,1,2가 나오도록
//        console.log(num);
        
        //모달팝업을 눌러 나타나기
        $('.modal_popup_rd').fadeIn(200);
        $('.modal_popup_rd .sub_rd_inner').eq(num).show();
        $('body').css('overflow','hidden');
    });
    
    $('.sub_rd_inner .btn_close').click(function(){
        $('body').css('overflow','visible');
        $(this).parent().hide(); //겹치는거 방지
        $(this).closest('.modal_popup_rd').fadeOut(200);
    });
    
    //로그인 리셋버튼
    $('.email input').keyup(function(){
        var num2=$(this).val().length;
//        console.log(num2);
        //같은 클래스의 순서값은 형제요소선택자로
        if(num2){
            $(this).siblings().show();
        } else {
            $(this).siblings().hide();
        }
    });
    $('.email .btn_reset').click(function(){
        $(this).hide();
        $('.email input').val(''); 
    });
    
    //회원가입
    //모든약관동의
    var agreeAllChk = $("#all_agree");
    
    agreeAllChk.change(function(){
		var $this = $(this);
		if($this.prop("checked")){
			$(".agree input:checkbox").prop("checked", true);
		}else{
			$(".agree input:checkbox").prop("checked", false);
    	}
    });
    //인증번호요청하면 확인창나오기
    $("#phone").click(function(){
       $('.join .phone_wrap').fadeIn(100);
        var num4=true;
        console.log(num4);
    });
});