////////////////////동그라미 액션/////////////////////////////

var num2;

$(function(){

	
	$('.header_wrap .header .about').click(function(e){
		e.preventDefault()
			$('.main_wrap .cir1').stop().animate({'top':'620px','left':'100px'},600);
			$('.main_wrap .cir2').stop().animate({'top':'-60px','left':'1800px'},600);
	});
	$('.header_wrap .header .project').click(function(e){
		e.preventDefault()
			$('.main_wrap .cir3').stop().animate({'left':'1200px'},600);
			$('.main_wrap .cir4').stop().animate({'top':'160px','left':'-300px'},600);
	});
	

$(window).scroll(function(e){
	e.preventDefault()
	num2=$(this).scrollTop();
	console.log(num2);
	if (num2>=500&&num2<1000){
		$('.main_wrap .cir1').stop().animate({'top':'640px'},700);
		$('.main_wrap .cir2').stop().animate({'top':'300px'},800);
	}else{
		$('.main_wrap .cir1').stop().animate({'top':'620px'},700);
		$('.main_wrap .cir2').stop().animate({'top':'-60px'},800);
	}
	
	if (num2>=500&&num2<1000){
		$('.main_wrap .cir3').stop().animate({'top':'-100px'},800);
		$('.main_wrap .cir4').stop().animate({'top':'160px'},800);
	}
	if (num2=0||num2>950){
		$('.main_wrap .cir3').stop().animate({'top':'200px'},800);
		$('.main_wrap .cir4').stop().animate({'top':'200px'},800);
	}
	
});





////////////////////포트폴리오 액션/////////////////////////////	
	
	var num4;
	var isMove2=false;
	
	
	$(window).scroll(function(e){
		e.preventDefault()
			num4=$(this).scrollTop();
			console.log(num4);
			if (num4<=1850){
				$('.main_wrap .prot_p .box1').stop().animate({'top':'20px','opacity':'1'});
				$('.main_wrap .prot_p .box2').stop().animate({'top':'315px','opacity':'1'});
				$('.main_wrap .prot_p .box3').stop().animate({'top':'610px','opacity':'1'});
				$('.main_wrap .prot_p .box4').stop().animate({'top':'905px','opacity':'1'});
				$('.main_wrap .prot_p .box5').stop().animate({'top':'1200px','opacity':'1'});
				$('.main_wrap .prot_p .box6').stop().animate({'top':'1495px','opacity':'1'});
			} 
			if (num4>=360 ){
				$('.main_wrap .prot_p .box1').stop().animate({'top':'-20px','opacity':'0'});
			}
			if (num4>=650){
				$('.main_wrap .prot_p .box2').stop().animate({'top':'275px','opacity':'0'});
			}
			if (num4>=950){
				$('.main_wrap .prot_p .box3').stop().animate({'top':'570px','opacity':'0'});
			}
			if (num4>=1250){
				$('.main_wrap .prot_p .box4').stop().animate({'top':'865px','opacity':'0'});
			}
			if (num4>=1550){
				$('.main_wrap .prot_p .box5').stop().animate({'top':'1160px','opacity':'0'});
			}
			if (num4>=1840){
				$('.main_wrap .prot_p .box6').stop().animate({'top':'1455px','opacity':'0'});
			}
			
						
	});
	
	
	
	
	$('.main_wrap .prot_p .box li').mouseover(function(){
		$(this).find('img').stop().animate({'top':'-280px'},300);
	})
	$('.main_wrap .prot_p .box li').mouseout(function(){
		$(this).find('img').stop().animate({'top':'0px'},300);
	})
	
	
	
	
	
});