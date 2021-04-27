$(document).ready(function() {
    /*///////////////////////////////헤더///////////////////////////////*/
    // 햄버거 버튼 클릭시 dimm 나옴
    // header에 on걸어서 gnb_wrap 들여옴
    $('#header .btn_menu').on('click', function() {
        $('#header .dimm').fadeIn();
        $('body, #header').addClass('on');
    });

    // dimm클릭시 사라지게하고
    // wrap, header on제거하여 스크롤바 다시나오고 메뉴 들어가게함
    $('#header .dimm, .gnb_wrap .btn_close').on('click', function() {
        $('#header .dimm').fadeOut();
        $('body, #header').removeClass('on');
    });
    
    // 메뉴(주메뉴)
    var btn_menu = $('.bottom_gnb .gnb>li>a')
    var btn_content = $('.gnb .depth2')
    
        btn_menu.on('click', function(e) {
        e.preventDefault();
       
            
    // a누르면 버튼(화살모양)바뀌기
    $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        console.log($(this).hasClass('active'));

    // 클릭시 depth2 모두 닫기(초기화)
        $('.gnb .depth2').stop().slideUp();           

    // 클릭한 a에 'active'가 있으면 - depth2펼치기
        if($(this).hasClass('active')) {
            $(this).siblings().stop().slideDown();
        }
    });
    
    /*///////////////////////////////메인///////////////////////////////*/
    // 메인배너 슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay:5000,  
        },
        pagination: {
            el: '#main .swiper-pagination',
            /*clickable: true,*/
            bulletElement: 'button',
        },
    })
    
    //상품 슬라이더
    var mySwiper2 = new Swiper('.product_slider', {
        
        slidesPerView:2,
        slidesPerGroup:2,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
            
    //상품슬라이더-탭메뉴 
    $('.dum_wrap .dum_tap li>a').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('active').parent().siblings().find('a').removeClass('active'); //a를 선택하고-'active'클래스부여-parent(부모의).siblings(형제에서).find(a)를 찾아서-'active' 클래스를 지움
        
        var num = $(this).parent().index();
        console.log(num); //this는 a를 지칭하므로 .parent(부모)추가
        
        if($(this).hasClass('active')) {
            $('#main .dum_product .product_slider ').eq(num).addClass('active').show().siblings().removeClass('active');
        }
    });
    /*///////////////////////////////푸터///////////////////////////////*/
    //패밀리사이트
    $('#footer .family_site .btn_retail').on('click', function() {
        $(this).siblings().stop().slideToggle();
        $(this).toggleClass('on');
    });
    
    /*///////////////////////////////////////////////////////////////////////*/
    /*///////////////////////////////서브페이지///////////////////////////////*/
    /*//////////////////////////////////////////////////////////////////////*/
    /*서브페이지 공통*/
    //로케이션 버튼 누르면 메뉴펼치기
    $('#container .btn_location').on('click', function() {
        $(this).toggleClass('active')
        $('.list_location').slideToggle(); 
    });
    
    //서브페이지1--------------------------------------------------------
    //MD추천상품 슬라이더
    var mySwiper3 = new Swiper('.sub_product_slider', {
        
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'button',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    $('.product_content_con>ul:gt(0)').hide();
    
    //상품탭 
    $('#container.event_goods .product_tap li').on('click', function(e) {
        e.preventDefault();
        
        $(this).addClass('active').siblings().removeClass('active'); //li를 선택하고-'active'클래스부여-.siblings(형제에서)-'active' 클래스를 지움
    
        var num = $(this).index();
        console.log(num);
        
        $('.product_content_con .product_list').eq(num).show().siblings().hide();

    });
    
    //서브페이지2--------------------------------------------------------   
    $('#container.franchise_page .btn_franchise').on('click', function() {
        $(this).toggleClass('active')
        $('.list_franchise').slideToggle(); 
    });
    
    /*탭2개짜리*/
    $('#container.franchise_page .franchise_content .tap li').on('click', function(e){
        e.preventDefault();
       
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    
    $('#container.franchise_page .tap li').on('click', function() {
        var num = $(this).index();
        var posY = $('.tap_content .trust_wrap').offset().top;
        console.log(posY);
        var posY2 = $('.tap_content .grow_wrap').offset().top;
        console.log(posY2);
        
        if (num === 0) {
            $('html, body').animate({scrollTop:posY-20});
        } else {
            $('html, body').animate({scrollTop: posY2-20});
        }
    });

    //탑버튼
    $('#container.franchise_page .btn_top').on('click', function(e) {
        e.preventDefault 
        
        $('html,body').scrollTop();
    });
    
});


















