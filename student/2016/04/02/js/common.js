$(document).ready(function(e) {
	//footer family site
	var sw=true; 
	
	//윈도우 새로고침시나 바로 접속시 
    var num=$(window).width();
	
	//상단 슬라이드 메뉴
	$('.gnb>li').on('mouseenter',function(){
		$(this).find('.menu').stop().slideDown();
	});
    $('.gnb>li').on('mouseleave',function(){
		$(this).find('.menu').stop().slideUp();
	});
	

	
	//모바일 메뉴 버튼클릭시 메뉴
	$('.m_btn').click(function(){
		$('#cover, .m_gnb').show();
		$('.wrap').css('overflow','hidden');
	});
	
	$('#cover').click(function(){
		$('#cover, .m_gnb').hide();
		$('.wrap').css('overflow','auto');
	});

	$(window).resize(function(){
		var num=$(this).width();
		//모바일
		//이미지 변경
		if (num<=750){ 
			$('.main .section1 ul .catalogue img').prop('src','images/m_catalogue.jpg');
			$('.main .section1 ul .video img').prop('src','images/m_video.jpg');
			$('.main .section1 ul .product img').prop('src','images/m_product.jpg');	
			$('.main .section1 ul .athletic img').prop('src','images/m_athletic.jpg');
			$('.main .section1 ul .camping img').prop('src','images/m_camping.jpg');	
					
			//모바일에서 적용 되지 않는 것
			$('.header .header_inner .shopping').off('mouseenter');
			$('.section1 .catalogue').off('mouseenter');
			$('.section1 .video').off('mouseenter');
			$('.section1 .product').off('mouseenter');
			$('.section1 .athletic').off('mouseenter');
			$('.section1 .camping').off('mouseenter');
			
			$('.header .header_inner .shopping').off('mouseleave');
			$('.section1 .catalogue').off('mouseleave');
			$('.section1 .video').off('mouseleave');
			$('.section1 .product').off('mouseleave');
			$('.section1 .athletic').off('mouseleave');
			$('.section1 .camping').off('mouseleave');
		}else{
			//모바일 아님
			$('.main .section1 ul .catalogue img').prop('src','images/cata_ot.jpg');
			$('.main .section1 ul .video img').prop('src','images/video_ot.jpg');
			$('.main .section1 ul .product img').prop('src','images/product_ot.jpg');	
			$('.main .section1 ul .athletic img').prop('src','images/athletic_ot.jpg');
			$('.main .section1 ul .camping img').prop('src','images/camping_ot.jpg');
			
			$('.section1 .catalogue').on('mouseenter',function(){
				$('.section1 .catalogue img').prop('src','images/cata_ov.jpg');	
			});
			$('.section1 .catalogue').on('mouseleave',function(){
				$('.section1 .catalogue img').prop('src','images/cata_ot.jpg');	
			});
			
			$('.section1 .video').on('mouseenter',function(){
				$('.section1 .video img').prop('src','images/video_ov.jpg');	
			});
			$('.section1 .video').on('mouseleave',function(){
				$('.section1 .video img').prop('src','images/video_ot.jpg');	
			});
			
			$('.section1 .product').on('mouseenter',function(){
				$('.section1 .product img').prop('src','images/product_ov.jpg');	
			});
			$('.section1 .product').on('mouseleave',function(){
				$('.section1 .product img').prop('src','images/product_ot.jpg');	
			});
			
			$('.section1 .athletic').on('mouseenter',function(){
				$('.section1 .athletic img').prop('src','images/athletic_ov.jpg');	
			});
			$('.section1 .athletic').on('mouseleave',function(){
				$('.section1 .athletic img').prop('src','images/athletic_ot.jpg');	
			});
			
			$('.section1 .camping').on('mouseenter',function(){
				$('.section1 .camping img').prop('src','images/camping_ov.jpg');	
			});
			$('.section1 .camping').on('mouseleave',function(){
				$('.section1 .camping img').prop('src','images/camping_ot.jpg');	
			});
			
			//shopping 호버시 이미지 변경
			$('.header .header_inner .shopping').on('mouseenter',function(){
				$('.header .header_inner .shopping img').prop('src','images/btn_lf_ov.png')	
			});
			$('.header .header_inner .shopping').on('mouseleave',function(){
				$('.header .header_inner .shopping img').prop('src','images/btn_lf_ot.png')	
			});
		} //else 끝 
	});//resize 이벤트 끝	

	//새로고침, 바로 접속시
	if (num<=750){
		$('.main .section1 ul .catalogue img').prop('src','images/m_catalogue.jpg');
		$('.main .section1 ul .video img').prop('src','images/m_video.jpg');
		$('.main .section1 ul .product img').prop('src','images/m_product.jpg');	
		$('.main .section1 ul .athletic img').prop('src','images/m_athletic.jpg');
		$('.main .section1 ul .camping img').prop('src','images/m_camping.jpg');
		//모바일에서 이미지변경 x 
		$('.section1 .catalogue').off('mouseenter');
		$('.section1 .video').off('mouseenter');
		$('.section1 .product').off('mouseenter');
		$('.section1 .athletic').off('mouseenter');
		$('.section1 .camping').off('mouseenter');
	}else{
		$('.main .section1 ul .catalogue img').prop('src','images/cata_ot.jpg');
		$('.main .section1 ul .video img').prop('src','images/video_ot.jpg');
		$('.main .section1 ul .product img').prop('src','images/product_ot.jpg');	
		$('.main .section1 ul .athletic img').prop('src','images/athletic_ot.jpg');
		$('.main .section1 ul .camping img').prop('src','images/camping_ot.jpg');
		
		//pc, tablet 마우스 오버 시 이미지 변경
		$('.section1 .catalogue').on('mouseenter',function(){
			$('.section1 .catalogue img').prop('src','images/cata_ov.jpg');	
		});
		$('.section1 .catalogue').on('mouseleave',function(){
			$('.section1 .catalogue img').prop('src','images/cata_ot.jpg');	
		});
		
		$('.section1 .video').on('mouseenter',function(){
			$('.section1 .video img').prop('src','images/video_ov.jpg');	
		});
		$('.section1 .video').on('mouseleave',function(){
			$('.section1 .video img').prop('src','images/video_ot.jpg');	
		});
		
		$('.section1 .product').on('mouseenter',function(){
			$('.section1 .product img').prop('src','images/product_ov.jpg');	
		});
		$('.section1 .product').on('mouseleave',function(){
			$('.section1 .product img').prop('src','images/product_ot.jpg');	
		});
		
		$('.section1 .athletic').on('mouseenter',function(){
			$('.section1 .athletic img').prop('src','images/athletic_ov.jpg');	
		});
		$('.section1 .athletic').on('mouseleave',function(){
			$('.section1 .athletic img').prop('src','images/athletic_ot.jpg');	
		});
		
		$('.section1 .camping').on('mouseenter',function(){
			$('.section1 .camping img').prop('src','images/camping_ov.jpg');	
		});
		$('.section1 .camping').on('mouseleave',function(){
			$('.section1 .camping img').prop('src','images/camping_ot.jpg');	
		});
		
		//shopping 호버시 이미지 변경
		$('.header .header_inner .shopping').on('mouseenter',function(){
			$('.header .header_inner .shopping img').prop('src','images/btn_lf_ov.png')	
		});
		$('.header .header_inner .shopping').on('mouseleave',function(){
			$('.header .header_inner .shopping img').prop('src','images/btn_lf_ot.png')	
		});
	}
	
	//footer family site 
	$('.footer .links .family>button').click(function(){
		if(sw==true){
			$('.footer .links .family_list').show();
		} else {
			$('.footer .links .family_list').hide();
		}
		sw = !sw;
	});
});



