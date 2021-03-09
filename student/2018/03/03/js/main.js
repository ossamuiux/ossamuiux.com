//로딩실행
$(window).load(function() {    
     $('#loading').fadeOut(3800);  
    });
$(document).ready(function(){
    //gnb>ul>li>a클릭시 원하는 페이지 넘어가기
    $('.gnb .depth2>ul>.one>a').click(function(){
        $("#flipbook").turn("page", 2);
    });
    //2페이지에 왔을때마다 img실행
    $('.page.p2.even').ready(function(){
        $('#flipbook .me3 ').click(function(){
            $('#flipbook .me3>img').fadeToggle(1000);
        });
    });
    $('.gnb .depth2>ul>.two>a').click(function(){
        $("#flipbook").turn("page", 5);
    });
    $('.gnb .depth2>ul>.three>a').click(function(){
        $("#flipbook").turn("page", 14);
    });
    //modal
    $('#flipbook').off('click').on('click',function(){
        $('#flipbook .dt_d a').click(function(){
            $('#main .modal').fadeIn(400);
//        var num3=1234;
//        console.log(num3);
        });
        $('#flipbook .mt_d a').click(function(){
            $('#main .modal2').fadeIn(400);
//        var num4=1234;
//        console.log(num3);
        });
    });
    //modal close
    $('#main .modal .tit .btn_close').click(function(){
//       var num2=123;
//        console.log(num2);
        $('#main .modal').fadeOut(400);
    });
    //modal close
    $('#main .modal2 .tit2 .btn_close2').click(function(){
//       var num4=123;
//        console.log(num4);
        $('#main .modal2').fadeOut(400);
    });
    
    //tabs
    $('#main .container .tabs .intro').click(function(){
        $("#flipbook").turn("page", 1);
    });
     $('#main .container .tabs .about').click(function(){
        $("#flipbook").turn("page", 2);
        //다른페이지로 넘어가면 사라져서 이페이지올때마다 다시 한번 걸어줌
         $('#flipbook .me3').click(function(){
            $('#flipbook .me3>img').fadeToggle(1000);
        });
    });
     $('#main .container .tabs .desktop').click(function(){
        $("#flipbook").turn("page", 6);
    });
    $('#main .container .tabs .deskt_d').click(function(){
        $("#flipbook").turn("page", 7);
    });
    $('#main .container .tabs .deskt_c').click(function(){
        $("#flipbook").turn("page", 8);
    });
    $('#main .container .tabs .mob').click(function(){
        $("#flipbook").turn("page", 10);
    });
    $('#main .container .tabs .mob_d').click(function(){
        $("#flipbook").turn("page", 11);
    });
    $('#main .container .tabs .mob_c').click(function(){
        $("#flipbook").turn("page", 12);
    });
    $('#main .container .tabs .ep').click(function(){
        $("#flipbook").turn("page", 14); 
    });
    //방향키로 페이지이동
    $(document).keydown(function(){
        if (event.keyCode == '37') {
//            e.preventDefault();
            $('#flipbook').turn('previous')
        } else if (event.keyCode == '39') {
//            e.preventDefault();
            $('#flipbook').turn('next');
        }
    });
});