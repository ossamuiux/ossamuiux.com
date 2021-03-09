$(document).ready(function(){
   
	$('#mainIndex .mainIndex_inner .box2').mouseenter(function(){
		$('#mainIndex .mainIndex_inner .box2>.hover_box').addClass('on');
	}).mouseleave(function(){
		$('#mainIndex .mainIndex_inner .box2>.hover_box').removeClass('on');
	});
	
	$('#header .music').click(function(){
		$(this).toggleClass('on');
	});
	$('#player').click(function(){
		$('#header .header_inner .music').toggleClass('on');
	});

	
	//애니메이션
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience .name_tit_wrap>.name_tit').addClass('on');
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience .name_tit_wrap>h4').addClass('on');
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience .name_tit_wrap>p').addClass('on');
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience .name_tit_wrap>img').addClass('on');
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience>.ex_hover').addClass('on');
	$('#mainPerience .section1 .section1_inner .about_box .about_box_inner_perience>.ex_hover .ex_hover_inner>h2').addClass('on');
	
	
	
	$(window).scroll(function(){
		var height = $(document).scrollTop();
		console.log(height);
		
		if(height>=700) {
			$('#mainPerience .section2 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap2>.name_tit').addClass('on')
		}if(height>=700) {
			$('#mainPerience .section2 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap2>h4').addClass('on')
		}if(height>=999) {
			$('#mainPerience .section2 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap2>img').addClass('on')
		}if(height>=1000) {
			$('#mainPerience .section2 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap2>p').addClass('on')
		}if(height>=1000) {
			$('.deco').addClass('on')
		}if(height>=1000) {
			$('.deco_hover2').addClass('on')
		}if(height>=1000) {
			$('.deco_hover2 .deco_hover_inner>h2').addClass('on')
		}if(height>=1000) {
			$('#mainAbout .section2 .section2_inner .about_box .about_box_inner .about_img_wrap').addClass('on')
		}if(height>=1500) {
			$('#mainPerience .section3 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap3>.name_tit').addClass('on')
		}if(height>=1500) {
			$('#mainPerience .section3 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap3>h4').addClass('on')
		}if(height>=1699) {
			$('#mainPerience .section3 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap3>img').addClass('on')
		}if(height>=1700) {
			$('#mainPerience .section3 .section2_inner .about_box .about_box_inner_perience .name_tit_wrap3>p').addClass('on')
		}if(height>=1700) {
			$('#mainPerience .section3 .section2_inner .about_box .about_box_inner_perience>.txt3').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section6 .section6_inner .graph>ul>li:nth-child(1)').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section6 .section6_inner .graph>ul>li:nth-child(2)').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section6 .section6_inner .graph>ul>li:nth-child(3)').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section6 .section6_inner .graph>ul>li:nth-child(4)').addClass('on')
		}if(height>=900) {
			$('#mainAbout .section2 .section2_inner .about_box .about_box_inner .name_tit_wrap').addClass('on')
		}if(height>=1000) {
			$('#mainAbout .section2 .section2_inner .about_box .about_box_inner .skill').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section4 .section2_inner .about_box .about_box_inner>.name_tit_wrap').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section4 .section2_inner .about_box .about_box_inner>.meet_img1').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section4 .section2_inner .about_box .about_box_inner>.meet_img2').addClass('on')
		}if(height>=1700) {
			$('.about_box_inner .be_img>img').addClass('on')
		}if(height>=1700) {
			$('#mainAbout .section5 .section5_inner .about_box .about_box_inner>.name_tit_wrap').addClass('on')
		}
	});	

	//portfolio
	$('#section1Pf .container').slick({
		dots:false,
		arrows:true,
        autoplay:true,
        autopalySpeed:1200,
		infinite:true,
        pauseOnHover:false
	});
	
	//aboutme 
	$('.icon>ul>li').click(function(e){
		clearInterval(randomShow);
		e.preventDefault();
		
		var num=$(this).index();
		
		$('.talk_wrap>ul .talk').eq(num).addClass('on').siblings().removeClass('on');
	});
	
	//랜덤 말풍선
	var toolNum=0;
	
	var randomShow=setInterval(function(){
		var randomNum=Math.round(Math.random()*7);
		
		$('.about_main .talk').removeClass('on');
		$('.about_main .talk').eq(randomNum).addClass('on');
	},1200);
	
	//사이클
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        
        if(num>=1700){
			customCircle($('#circle1'),1,"#e0d85f","#9b8064");
           	customCircle($('#circle2'),0.95,"#e0d85f","#ea5410");
           	customCircle($('#circle3'),0.89,"#0392a3","#3946f3");
           	customCircle($('#circle4'),1,"#8bcb04","#008927");
            $(window).off('scroll');
        }
    });
});

function customCircle(el,v,startColor,endColor){
    el.circleProgress({
        value: v,
        size: 120,
        fill: {gradient: [startColor, endColor]}
    }).on('circle-animation-progress', function(event,progress) {
        $(this).find('strong').html(Math.round(v * 100 * progress)+'%');
    });
}



