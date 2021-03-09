$(document).ready(function(){
    
    //퍼센트바
    $('.bar_wrap span').hide();
    
   $(window).scroll(function() {
        if($(window).scrollTop() > 800){
		  $('#main.aboutme .profile').addClass('on');
          $('.bar_wrap span').show();
        } else if($(window).scrollTop()==0) {
            $('#main.aboutme .profile').removeClass('on');
            $('.bar_wrap span').hide();
            $('.btn_top').removeClass('on');
        }
 
       //console.log($(window).scrollTop());
    });
    
    //자기소개 예스 노 선택 모달
    $('.modal_choice').hide();
	
	$('.choice .yesno h4').click(function(){
        var num = $(this).index();
        //console.log(num)
        $('.modal_choice').show();
        $('#footer .btn_top').hide();
    
        $('.modal_choice .modal_choice_inner').eq(num).show().siblings().hide();
		
   		 });
    
    //예스 노 선택 닫기 버튼
    $('.modal_choice .btn_close').click(function(){
        $('.modal_choice').hide();
        $(this).prev().attr('src','');
        $('#footer .btn_top').show();
        
    });
	
    //탑버튼
    $(window).scroll(function(){
		var num = $(this).scrollTop();
		
		if(num>700){
			$('#footer .btn_top').fadeIn(100);	
		} else {
			$('#footer .btn_top').fadeOut(100);
		}
	});
    
    $('.btn_top').click(function(e) {
		e.preventDefault();//a태그 기본 이벤트 막기
		e.stopPropagation();//상위요소로의 이벤트 전파 막기
		//return false;
		
		$('html,body').animate({scrollTop:0});
        
        $('.btn_top').addClass('on');
        
	});
    
});




















