$(document).ready(function(){
    
	//헤더 스크롤시 on처리
	$(window).scroll(function(){
	   var num=$(this).scrollTop();
        if(num>=150){
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });
                  
	//메인비주얼 슬라이더
    $('.main_visual').slick({
        fade:false,
        dots:true,
        draggable:false,
        autoplay:true,
        autopalySpeed:1000,
        pauseOnHover:false
    });
    //section2 이벤트배너 슬라이더
    $('.section2_visual').slick({
        fade:false,
        dots:true,
        draggable:false,
        autoplay:true,
        autopalySpeed:1000,
        pauseOnHover:false,
        arrows:false
    });
    // women 서브페이지 뉴아이템 슬라이더
    $('#container_2 .new_item').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        dots: false,
        draggable: true,
        variableWidth: true,
        centerMode: false,
        autoplay:true
    });
    
	//패밀리 탭버튼 연결
    var sw=true;
    
    $('.family .btn_family').click(function(){
        if(sw==true){
            $('.family .family_list').show();
            sw=false;
        } else{
            $('.family .family_list').hide(); 
            sw=true;
        }
        console.log(sw);
    });

    //women container lnb 메뉴 연결
    $('.lnb_info>ul>li:gt(0)').hide();
    
    $('.lnb li').click(function(e){
        e.preventDefault();
        
        $(this).addClass().siblings().removeClass();
        
        var num=$(this).index();
        
        $('.lnb_info>ul>li').eq(num).show().siblings().hide();
    });

	//employ 탭버튼 연결 
	$('.content_wrap:gt(0)').hide();
	
	$('.tab_sns li').click(function(e){
		e.preventDefault();
		
		$(this).addClass('on').siblings().removeClass('on');
		
		var num=$(this).index();
		$('.content_wrap').eq(num).show().siblings().hide();
	});
	
    $ ('.content_wrap .tab_page a').click(function(e){
		e.preventDefault();
        
        var num=$(this).index();
       $(this).addClass('on').siblings().removeClass('on');
    });

   $('.tab_con_page1:gt(0)').hide();
	
	$('.tab_con li').click(function(e){
		e.preventDefault();
		
		var num=$(this).index();
       $(this).addClass('on').siblings().removeClass('on');
		
		$('.tab_con_page1').eq(num).show().siblings().hide();
	});
	

});


















