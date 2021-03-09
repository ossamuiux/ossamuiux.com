// JavaScript Document



$(function(){

	var num4;
	var isMove2=false;
	
	
	$(window).scroll(function(e){
		e.preventDefault()
			num4=$(this).scrollTop();
			console.log(num4);
			if (num4<=1310){
				$('.main_wrap .prot_p .box1').stop().animate({'top':'20px'});
				$('.main_wrap .prot_p .box2').stop().animate({'top':'330px'});
				$('.main_wrap .prot_p .box3').stop().animate({'top':'640px'});
				$('.main_wrap .prot_p .box4').stop().animate({'top':'950px'});
				$('.main_wrap .prot_p .box5').stop().animate({'top':'1260px'});
				$('.main_wrap .prot_p .box6').stop().animate({'top':'1570px'});
			} 
			if (num4>=300 ){
				$('.main_wrap .prot_p .box1').stop().animate({'top':'-30px'});
			}
			if (num4>=560){
				$('.main_wrap .prot_p .box2').stop().animate({'top':'280px'});
			}
			if (num4>=870){
				$('.main_wrap .prot_p .box3').stop().animate({'top':'590px'});
			}
			if (num4>=1180){
				$('.main_wrap .prot_p .box4').stop().animate({'top':'900px'});
			}
			if (num4>=1495){
				$('.main_wrap .prot_p .box5').stop().animate({'top':'1210px'});
			}
			if (num4>=1800){
				$('.main_wrap .prot_p .box6').stop().animate({'top':'1520px'});
			}
			
						
	});
	
});