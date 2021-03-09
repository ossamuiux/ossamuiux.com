$(document).ready(function(){
    
    $('#header').mouseenter(function(){
        $('#header').addClass('on');
    });
    
    $('#header').mouseleave(function(){
        $('#header').removeClass('on');
    });
    
    //패밀리사이트 
    var sw=true;
    $('.btn_family').click(function(){ 
        if(sw==true){
                $('.family_list').show();
            sw=false;
            }else{
                $('.family_list').hide();
            sw=true;
            }
        
        console.log(sw)
    });
  
    
    //video_list 선효과
    $('.video_list li').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');


    });
        //유투브 모달팝업
    var youtubeArr=[];
    youtubeArr[0]='https://www.youtube.com/embed/8JZJYNta3qA?rel=0';
    youtubeArr[1]='https://www.youtube.com/embed/A7qsUmDEDYs?rel=0';
    youtubeArr[2]='https://www.youtube.com/embed/r6IWXzhU7CE?rel=0';
    console.log(youtubeArr);

    $('.video_list li').click(function(e){
        e.preventDefault();
        
        var num=$(this).index();
        //
        $('.modal_popup').fadeIn(200);
        $('.modal_popup .modal1').eq(num).show();
        //배열에서 주소값가져와서 연결하기
        $('.modal_popup .modal1').eq(num).find('iframe').attr('src',youtubeArr[num]);
    });
    
    $('.modal1 .btn_close').click(function(){
        $('.modal_popup .modal1 iframe').attr('src','about:black');
        $(this).parent().hide();
        $(this).closest('.modal_popup').fadeOut(200);
    });

 
    //메인비주얼 슬라이더//
    $('.main_visual').slick({
        fade: true,
        arrows:false,
        dots: true, //페이지버튼
        draggable: false, //마우스드래그
        autoplay: true, //자동실행
        autoplaySpeed:1500, //슬라이더 인터벌
        pauseOnHover: false //마우스오버시 멈춤기능
    });
    
    $(window).scroll(function() {
        var num=$(this).scrollTop();
        
        if(num>=5 && num<800){
           $('#main.brand .cass1').addClass('on'); 
        }   else if(num>=800 && num<1500){
            $('#main.brand .casslight').addClass('on'); 
        }   else if(num>=1500 && num<2100){
            $('#main.brand .casslemon').addClass('on');
        }   else if(num>=2100 && num<2800){
            $('#main.brand .cassred').addClass('on');
        }
        console.log(num);
    });
});
    
