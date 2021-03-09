$(document).ready(function() {
    //슬라이더
    var mySwiper=new Swiper('.main_slider', {
        loop:true,
        speed:1000,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });
    
    //depth2 보이기
    $('.header_bottom_inner .gnb').on('mouseenter',function(){
        $('#header').animate({'height':'452px'},500,function(){
            $(this).stop().css('border-bottom','1px solid #e5e5e5');
        }); 
    });
    
    //depth2 숨기기
    $('.header_bottom_inner .gnb').on('mouseleave',function(){
        $('#header').stop().animate({'height':'142px'},500,function(){
            $(this).stop().css('border-bottom','none');
        });
    });
    
    //검색창
    $('.search_btn').on('click',function(){
        $('.search_wrap').stop().show();
    });
    
    $('.search_wrap .close').on('click',function(){
       $('.search_wrap').stop().hide(); 
    });
    
    //main 제품 리스트 아이콘
    $('.product_list:gt(0)').hide();
    
    $('.product_icon_list li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        
        var idx = $(this).index();
        $('.product_list').eq(idx).show().siblings().hide();
        initSlider();
    });
    
    var swiper = new Swiper('.product_list', {
        slidesPerView: 6,
        slidesPerGroup:3,
        //centeredSlides: true,
        loop:false,//반복
        observer:true,
        simulateTouch:false,
        resistance : true,
        resistanceRatio : 0,
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    //top 버튼
    $('#quickMenu .btn_top').on('click',function(e){
        
        e.preventDefault();
        
        $('html, body').animate({scrollTop:0});
    });
        
    //패밀리 사이트
    var groupSw=true;
    
    $('.group_site_wrap .btn01').on('click',function(){
        if(groupSw) {
            $('.group_site').show();
        } else {
            $('.group_site').hide();
        }
        groupSw = !groupSw;
    });
    
    var brandSw=true;
    
    $('.brand_site_wrap .btn02').on('click',function(){
        if(brandSw) {
            $('.brand_site').show();
        } else {
            $('.brand_site').hide();
        }
        brandSw = !brandSw;
    });
    
    //location .depth2
    var detph2Show = true;
    
    $('.location>li:eq(2)').on('click',function(){
        if(detph2Show) {
            $('.location .depth2').stop().show();
        } else {
            $('.location .depth2').stop().hide();
        }
        detph2Show = !detph2Show;
    })
    
    //오시는길 탭메뉴
    $('.section1 .branch_list li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');    
    });
    
    //라면이란 탭메뉴
    $('.section1 .info_list li').on('click',function(){
        $(this).addClass('active').siblings().removeClass();    
    });
    
    //게시물 페이지네이션
    $('.notice_board .pagination a').on('click',function(){
        $('.notice_board .pagination a').addClass('active');
    });
    
    //파일추가
    
    
//    $('.add_file').on('click',function(){                      
//        $('.input_wrap').append ('<div><label class="input_tit blind">파일첨부</label><input class="upload_name" id="userfile" name="userfile[]" disabled="disabled"><label class="btn_file" for="ex_filename2">파일선택</label><input class="upload_hidden blind" type="file" id="ex_filename2"><label class="sub_file">파일삭제</label></div>'     
//        ); // end append                            
//        $('.sub_file').on('click', function () { 
//            $(this).next ().remove (); // remove the <br>
//            $(this).parent().remove (); // remove the button
//        });
//    }); // end click                                            
//    
//    $('.input_wrap .add_file').on('click',function(){
//        
//        for(var i =1; i<=5; i++ ) {
//            if($("#no"+i).hasClass("off")){
//                $(this).parent().next().removeClass("off");
//            }
//        }
//    });
   
    
    //파일첨부 스크립트
//    var fileTarget = $('.input_wrap .upload_hidden');
//    
//    fileTarget.on('change',function(){
//        if(window.FileReader){
//            var filename = $(this)[0].files[0].name;
//        } else {
//            var filename =$(this).var().split('/').pop().split('\\').pop();
//        }
//
//        $(this).siblings($('.input_wrap .upload_name')).val(filename);
//    })
//    
});

















    





