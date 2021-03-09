$(document).ready(function() {
	//햄버거메뉴
    $('#header .btn_m').click(function(){
       $('#wrap').toggleClass('on');
	   $('#header .m_menu').slideToggle(); /*클릭시 슬라이드로 내려오게*/
    });
	
    
   //메인비쥬얼 슬라이더
    var mySwiper = new Swiper ('.main_visual', {
        loop: true,
        speed:500,
        allowTouchMove:true,//마우스드래그이동 끄기
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            767: {
              allowTouchMove:true
            }
        }
    });
	
	//=================================================
	
	/*메뉴 윈도우 릴리즈이벤트*/
	$(window).resize(function(){
		var num=$(this).width()+17;
		
		if(num>=1025){
			$('.m_menu').hide();	
		}
		
		changeImg();
	});	
	
	//=================================================
	
	
	changeImg();
    
    function changeImg(){
        var num = $('.main_visual .swiper-slide').length;
        
		 if($(window).width()+17 <= 768){ //모바일 시  메인비주얼 슬라이더 이미지 변경
            for(var i=0; i<num; i++){
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,11);
                var str2 = str+'_mobile1.png';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
        } else if($(window).width()+17 <= 1024){ //타블렛 시  메인비주얼 슬라이더 이미지 변경
            for(var i=0; i<num; i++){
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,11);
                var str2 = str+'_mobile.png';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
        } else {
            for(var i=0; i<num; i++){ //PC 시  메인비주얼 슬라이더 이미지 변경
                var str = $('.main_visual .swiper-slide').eq(i).find('img').attr('src').substr(0,11);
                var str2 = str+'.png';
                
                $('.main_visual .swiper-slide').eq(i).find('img').attr('src',str2);
            }
        }
    }
	
	
	//=============================================
	
	//섹션1 앨범 슬라이더
    var mySwiper2 = new Swiper ('.sub_visual', {
        loop: true,
        speed:500,
        allowTouchMove:false,//마우스드래그이동 끄기
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            767: {
              allowTouchMove:true
            }
        }
    });
	
	//섹션1,3 탭버튼 처리
    $('.section1_inner .btn_tab li, .section3_inner .btn_tab li').click(function(e){
        e.preventDefault();
        var num = $(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');
		
		
		$('.section1_inner .slider_wrap .sub_visual').eq(num).show().siblings().hide();
		$('.section3_inner .slider_wrap .sub2_visual').eq(num).show().siblings().hide();
		
		
		//섹션1 앨범 슬라이더2  -한번 더 설정하기
		var mySwiper2 = new Swiper ('.sub_visual', {
			observer: true, //버벅버림 방지
			loop: true,
			speed:500,
			allowTouchMove:false,//마우스드래그이동 끄기
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			breakpoints: {
				767: {
				  allowTouchMove:true //모바일 시 드래그 실행
				}
			}
		});
		
		//섹션3 뮤직비디오 슬라이더2 - 한번 더 설정하기
		var mySwiper3 = new Swiper ('.sub2_visual', {
			observer: true, //버벅버림 방지
			loop: true,
			speed:500,
			centeredSlides:true,
			allowTouchMove:true,//마우스드래그이동 끄기
			slidesPerView:3,
			spaceBetween:0, //간격
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.section3_inner .swiper-button-next',
				prevEl: '.section3_inner .swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			breakpoints: {
				1280: {
				  slidesPerView: 3
				},
				1024: {
				  centeredSlides:false, //가운데 정렬 빼주기!
				  slidesPerView: 2
				},
				767: {
					slidesPerView: 1,
					allowTouchMove:true
				}
			}
		});
		
	});
	
	//=============================================
	
	
	
	//섹션3 뮤직비디오 슬라이더
    var mySwiper3 = new Swiper ('.sub2_visual', {
        loop: true,
        speed:500,
		centeredSlides:true,
        allowTouchMove:true,//마우스드래그이동 끄기
		slidesPerView:3,
		spaceBetween:0, //간격
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.section3_inner .swiper-button-next',
            prevEl: '.section3_inner .swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1280: {
              slidesPerView: 3
            },
            1024: {
			  centeredSlides:false, //가운데 정렬 빼주기!
              slidesPerView: 2
            },
            767: {
                slidesPerView: 1,
                allowTouchMove:true
            }
        }
    });


});


















