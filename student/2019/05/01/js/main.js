$(document).ready(function(){
    //전체메뉴창
    var allMenu=true;
    
    $('.all_menu').on('click',function(){
        if(allMenu==true){
            $('.all_menu_inner').show().animate({height:515},200);
            $('.all_menu_inner .all_list').show();
            $('.all_menu_inner').css('border','2px solid #615a54');
            $('.all_menu').addClass('on');
        } else {
            $('.all_menu_inner').animate({height:0},200);
            $('.all_menu_inner .all_list').hide();
            $('.all_menu_inner').css('border','none');
            $('.all_menu').removeClass('on');
        }
        allMenu = ! allMenu;
    });
    
    //한국어 영어 변환
    var click=true;
    
    $('.btn_lang .lang').on('click',function(){
        if(click==true){
            $('.btn_lang .btn_lang_eng').stop().show();
            click=false;
        } else {
            $('.btn_lang .btn_lang_eng').stop().hide();
            click=true;
        }
    });
    
    //검색창
    var search=true;
    
    $('#header .search_open').on('click',function(){
        if(search==true){
            $('#header .search_wrap').show().animate({height:120},200);
            $('.search_wrap form').show();
            $('.search_open').addClass('on');
            search=false;
        } else {
            $('#header .search_wrap').animate({height:0},200);
            $('.search_wrap form').hide();
            $('.search_open').removeClass('on');
            search=true;
        }
        
//        search = ! search;
    });
    
    //헤더고정,효과
    $(window).on('scroll',function(){
        var headerFix=$(this).scrollTop();
        
        if(headerFix>0){
            $('#header').addClass('on');
            $('#container .location_wrap').addClass('on');
//            $('#container .location_wrap').css({'padding-top':170});
        } else {
            $('#header').removeClass('on');
            $('#container .location_wrap').removeClass('on');
//            $('#container .location_wrap').css({'padding-top':0});
        }
    });
    
    //detph2 에니메이션
    $('.bottom_header .gnb>li').on('mouseenter',function(){
        $(this).find('.detph2_wrap').stop().slideDown(200);
    });
    
    $('.bottom_header .gnb>li').on('mouseleave',function(){
        $(this).find('.detph2_wrap').stop().slideUp(200);
    });

    //메인슬라이더
    var mySwiper=new Swiper('.main_slider', {
        loop:true, 
        simulateTouch:false,//데스크탑일경우 마우스드레그 막기
        speed:1000, //애니메이션 시간
        autoplay: {
            delay: 3000, //자동실행 시간
            disableOnInteraction: false //좌우화살표 클릭시 멈춤기능 끔
        },
        navigation: {
            //좌우버튼으로 사용할 클래스명
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
    
    //메인슬라이더 재생,일시정지
    var playSild=true;
    $('.main_slider .btn_slider').on('click',function(){
        if(playSild==true){
            $(this).addClass('on');
            mySwiper.autoplay.stop();
        } else {
            $(this).removeClass('on');
            mySwiper.autoplay.start();
        }
        playSild = ! playSild;
    });
    
    //패밀리 사이트
    var sw=true;
   
    $('.family_wrap .btn_family').on('click',function(){
        if(sw==true){
            $('.family_wrap .list_family').stop().show();
            sw=false;
        } else {
            $('.family_wrap .list_family').stop().hide();
            sw=true;
        }
    });
    
    //탑버튼
    $(window).on('scroll',function(){
        var num=$(this).scrollTop();
        
        if(num>=300){
            $('.section3 .top_btn').stop().fadeIn(500);
        } else {
            $('.section3 .top_btn').stop().fadeOut(500);
        }
        
        //section2 나타나게
        if(num>=1000){
            $('.section2_wrap').addClass('active');
        } 
    });
    
    $('.section3 .top_btn').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
    
    //서브페이지 corp_info
    $('#container.container_corp_info .corp_info_inner:gt(0)').hide();
    
    var depth2=true;
   
    $('.location>li').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        if(depth2==true){
            $(this).find('.depth2').stop().show();
            depth2=false;
        } else {
            $(this).find('.depth2').stop().hide();
            depth2=true;
        }
    });
    
    $('#container.container_corp_info .navigation>li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
        var subNum=$(this).index();
        console.log(subNum);
        $('#container.container_corp_info .corp_info_inner').eq(subNum).show().siblings().hide();
        
    });
    
    //서브페이지 product_info
    $('#container.container_product_info .board_pagination>a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //불만접수 페이지 customer_service 
    $('.btn_confirm a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //파일 업로드
    var fileTarget=$('.filebox .upload_hidden');
    fileTarget.on('change',function(){  //값이 변경되면
        if(window.FileReader){
            var filename=$(this)[0].files[0].name;
        } else {
            var filename=$(this).val().split('/').pop().split('\\').pop(); //파일명만 추출
        }
        console.log(filename);
        //추출할 파일명 삽입
        $(this).siblings('.upload').val(filename);
    });
    
    //파일추가
    $('.filebox .filebox_inner:gt(0)').hide();
    
    var num=0;
    $('#addFile').on('click',function(){
        
        if(num<4){
            num++;
            $('.filebox .filebox_inner').eq(num).show();
        }

        console.log(num);
    });
    
    $('.addfile2').on('click',function(){
//        $(this).parent().hide();
        $(this).parent().remove();
        num--;
        console.log(num);
    });
});















