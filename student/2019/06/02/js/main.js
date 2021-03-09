$(document).ready(function(){
    
    //gnb_wrap 열기
    $('#header .btn_menu').on('click',function(){
        $('.gnb_wrap,body').addClass('on'); 
        $('#header .dimm').addClass('on'); 
    });
    
    //gnb_wrap 닫기
    $('.gnb_wrap .btn_close').on('click',function(){
        $('.gnb_wrap,body').removeClass('on');    
        $('#header .dimm').removeClass('on');    
    });
    
    //dimm 클릭할 때 gnb_wrap 닫기
    $('#header .dimm').on('click',function(){
        $('.gnb_wrap,body').removeClass('on');    
        $('#header .dimm').removeClass('on');    
    });
    
    //depth2 열기
    $('.gnb>li>a').on('click',function(){
        $('.gnb>li>a').removeClass('active');
        $('.gnb .depth2_wrap').removeClass('on');

        if(!$(this).siblings('.depth2_wrap').hasClass('on')) {
            $(this).addClass('active');
            $(this).siblings('.gnb .depth2_wrap').addClass('on');
        } 
    });
    
    //검색창 열기
    $('#header .btn_search').on('click',function(){
        $('.search_wrap').addClass('on');    
    });
    
    //검색창 닫기
    $('.search_wrap .close').on('click',function(){
         $('.search_wrap').removeClass('on');
    })
    
    //메인이미지 슬라이더
    var mySwiper = new Swiper('.main_slider', {
        loop:true,
        simulateTouch:true,
        speed: 1000,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });
    
    //농심제품 슬라이더
    var mySwiper2 = new Swiper('.product_slider', {
        loop:false,
        simulateTouch:true,
        spaceBetween:20,
        speed: 1000,
        observer:true,
        slidesPerView:2,
        slidesPerGroup:2,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
    
    //농심제품 탭메뉴
    $('.product_slider:gt(0)').hide();
    
    $('.product_tit li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');  
        
        var idx=$(this).index();
        $('.product_slider').eq(idx).show().siblings().hide();
        
    });
    
    //레시피 파인더 슬라이더
    var mySwiper3 = new Swiper('.section3_slider', {
        loop:true,
        centeredSlides: true,
        simulateTouch:true,
        spaceBetween:15,
        speed: 1500,
        observer:true,
        slidesPerView:'auto',
        slidesPerGroup:1,
        autoplay: {
            delay: 3000
        }
    });
    
    //농심 소식 슬라이더
    var mySwiper4 = new Swiper('.news_slider', {
        loop:true,
        autoHeight: true,
        centeredSlides: true,
        simulateTouch:true,
        spaceBetween:15,
        speed: 1000,
        observer:true,
        slidesPerView:'auto',
        slidesPerGroup:1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
    
    //패밀리사이트 버튼
    $('.family_site .btn_group').on('click',function(){
        $('.group_site').stop().toggle();
        $('.family_site .btn_group').toggleClass('on');
        
    });
    
    $('.family_site .btn_brand').on('click',function(){
        $('.brand_site').stop().toggle();
        $('.family_site .btn_brand').toggleClass('on');
    });
    
    //location 메뉴 열기
    $('.location_wrap>li>a').on('click',function(){
        $(this).siblings('.gnb01').stop().toggle();
        $(this).toggleClass('on');
    });
    
    //location depth2 메뉴 열기
    $('.location_wrap>li>a').on('click',function(){
        $(this).siblings('.depth2').stop().toggle();
        $(this).stop().toggleClass('on');
    });
    
    //tab_menu 메뉴 열기
    $('.tab_menu_wrap .btn_tab').on('click',function(){
        $('.tab_menu_wrap .tab_menu').stop().toggle();
        $(this).stop().toggleClass('on');
    });
    
    //파일 업로드
    //var fileTarget=$('.filebox_inner .upload_hidden');
    $(document).on('change','.filebox_inner .upload_hidden',function(){
    //fileTarget.on('change',function(){  //값이 변경되면
        if(window.FileReader){
            var filename=$(this)[0].files[0].name;
        } else {
            var filename=$(this).val().split('/').pop().split('\\').pop(); //파일명만 추출
        }
        console.log(filename);
        //추출할 파일명 삽입
        $(this).siblings('.upload').val(filename);
    });
    
    var cnt=0;
    var removeEl=[];
    //var nameArr=[1,2,3,4];
    $('#addFile').on('click',function(){
        //var num=$('.filebox .filebox_inner').length;
        if(removeEl.length==0){
            cnt++;
            if(cnt<5){
                var el=$('<div class="filebox_inner"><input disabled="disabled" class="upload"><label for="fileUp'+cnt+'" class="btn_ck">파일선택</label><input type="file" id="fileUp'+cnt+'" class="upload_hidden"><input type="button" class="addfile addfile2"></div>');
                $('.filebox p').before(el);
            } else {
                cnt=4;
                alert('최대 5개까지 가능합니다.');
            }
        } else {
            var newEl=removeEl.pop();
            $('.filebox p').before($(newEl));
            console.log(removeEl);
        }
    });
    
    $(document).on('click','.addfile2',function(){
    	//cnt--;
        removeEl.push($(this).parent().clone().wrapAll('<div></div>').parent().html());
        $(this).parent().remove();
        console.log(removeEl);
    });
    
    
    
});



















