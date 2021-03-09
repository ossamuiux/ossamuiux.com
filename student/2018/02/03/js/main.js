$(document).ready(function(){
   
    //랜덤컬러
    var colorArr=['random_color1','random_color2','random_color3','random_color4']

    //배열 번호가 랜덤으로 *2를 하면 숫자가 커지고 Math.round로 정수 0,1,2,3만 추출
    var num=Math.round(Math.random()*3);
    $('#wrap2').addClass(colorArr[num]);   
        
    //hash체크후 애니메이트
    $('.gnb li a').click(function(e){
        e.preventDefault();
        
       var el=$(this.hash);
        //el.offset().top 해당섹션의 높이만큼
        $('html,body').animate({'scrollTop':el.offset().top});
        //엘리먼트의 위치값에 대한 메서드
        //offset().top,offset().left는 전체문서에서의 위치값
        //position().top, position().left는 position기준으로부터의 위치값

    });
    
    //sub_menu 스크롤시 on처리
    $(window).scroll(function(){
       var num2=$(this).scrollTop();
        
        if(num2>=0 && num2<980){
            $('#main2 .gnb li').eq(0).addClass('sub_on').siblings().removeClass('sub_on');
        }else if(num2>=980 && num2<1960){
            $('#main2 .gnb li').eq(1).addClass('sub_on').siblings().removeClass('sub_on');
        }else if(num2>=1960 && num2<2940){
            $('#main2 .gnb li').eq(2).addClass('sub_on').siblings().removeClass('sub_on');
        }else if(num2>=2940 && num2<3920){
            $('#main2 .gnb li').eq(3).addClass('sub_on').siblings().removeClass('sub_on');
        }else if(num2>=3920 && num2<4900){
            $('#main2 .gnb li').eq(4).addClass('sub_on').siblings().removeClass('sub_on');
        }
    });
    
    // Swiper1 desktop 
    var swiper1 = new Swiper('.desktop_swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable:true,
        },
    });
    
   // Swiper2 mobile 
    var swiper2 = new Swiper('.mobile_swiper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
    
    // Swiper3 popup1 
    var swiper3 = new Swiper('.popup_swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    });
    
    
    // modal popup1(desktop,mobile)
        $('#main2 .section2 .list04 .btn03').click(function(e){
        e.preventDefault();
            $('.modal_popup, .modal_popup .modal').fadeIn(200);
            $('.modal_popup .modal').find('iframe').attr('src','popup.html');
    });
    
    $('.modal .btn_modal_close').click(function(){
        $('.modal_popup .modal iframe').attr('src','about:blank');
        $(this).parent().hide();
        $(this).closest('.modal_popup').fadeOut(200);
        $(this).closest('.modal_popup2').fadeOut(200);
        $(this).closest('.modal_popup3').fadeOut(200);
         $(this).closest('.modal_popup4').fadeOut(200);
    });
    
    // modal popup2(event01)
        $('#main2.event .section1 .main_visual2 .btn01').click(function(e){
        e.preventDefault();
            $('.modal_popup2, .modal_popup2 .modal').fadeIn(200);
    });  
    
    // modal popup3(event02)
        $('#main2.event .section1 .main_visual2 .btn02').click(function(e){
        e.preventDefault();
            $('.modal_popup3, .modal_popup3 .modal').fadeIn(200);
    }); 
    
        // modal popup4(event03)
        $('#main2.event .section2 .list04 .btn03').click(function(e){
        e.preventDefault();
            $('.modal_popup4, .modal_popup4 .modal').fadeIn(200);
            $('.modal_popup4 .modal').find('iframe').attr('src','popup4.html');
    }); 
    
     // section1.about 이미지에 ani_on
    
        $(window).scroll(function(){
       var num3=$(this).scrollTop();
        
        if(num3>=0 && num3<980){
            $('#main2 .section1 .main_visual2').addClass('ani_on');
        }else {
            $('#main2 .section1 .main_visual2').removeClass('ani_on');
        }    
    });   
    
         // section3 이미지에 ani_on
    
        $(window).scroll(function(){
       var num4=$(this).scrollTop();
        
        if(num4>=1900 && num4<4900){
            $('#main2 .section3 .sec3_visual').addClass('ani2_on');
        }else {
            $('#main2 .section3 .sec3_visual').removeClass('ani2_on');
        }
    });
    
    
    
});




















