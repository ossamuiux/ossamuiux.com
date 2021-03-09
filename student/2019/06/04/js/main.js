$(document).ready(function(){
    //intro motion
    setTimeout(function(){
        $('#wrap .intro').addClass('on');    
    },2000);
    
    if($('#wrap .intro').hasClass('on')){
        $(this).css('zIndex',-1);   
    }

    //header 메뉴 보이기
    $('#header .btn_menu').on('click',function(){
        $('#header .gnb_wrap, #header .gnb_wrap .left_gnb, #header .gnb_wrap .right_gnb').addClass('on');
    });
    
    //header 메뉴 안보이기
    $('.gnb_wrap .btn_close').on('click',function(){
        $(this).parent('.gnb_wrap').removeClass('on');
        $(this).siblings('.left_gnb,.right_gnb').removeClass('on');
        
    });
    
    //메인 목업 사진 함수
    (function(){
        var fadeIndex = 0;
        var fadeEffect = function(){
            $('.left_box .fade').eq(fadeIndex).addClass('active').siblings().removeClass('active');
            
            fadeIndex++;
            
            if(fadeIndex==$('.left_box .fade').length) {
                fadeIndex=0;
            }
            //console.log(fadeIndex);
        };
        fadeEffect();
        var clearId = setInterval(fadeEffect,5000);
    })();
    
    //profile
    if($('#container.profile').length>0) {
        //profile 보이기
        $('#container.profile .txt_wrap div:gt(0)').hide();
        $('#container.profile .txt_wrap div:eq(0)').addClass('on');
        
        
        $('#container.profile .title_wrap li').on('click',function(){
            var proIndex=$(this).index();
            
            $('#container.profile .txt_wrap>div').eq(proIndex).show().addClass('on').siblings().hide().removeClass('on');
        });
        
        //skill 함수
        $('#container.profile .title_wrap li:eq(2)').on('click',function(){
            $('#container.profile .txt_wrap>div').find('p').addClass('on');
            initCounter();
        });
        
        $('#container.profile .title_wrap li:not(:eq(2))').on('click',function(){
            $('#container.profile .txt_wrap>div').find('p').removeClass('on');
        });
        
        var barEl1 = $('.skill_list li .bar1');
        var barEl2 = $('.skill_list li .bar2');
        var barEl3 = $('.skill_list li .bar3');
        var barEl4 = $('.skill_list li .bar4');
        var barEl5 = $('.skill_list li .bar5');
        var barEl6 = $('.skill_list li .bar6');
        var barEl7 = $('.skill_list li .bar7');
        
        function initCounter(){
            function counter(el,n){
                var num=0;
                var clearId=setInterval(function(){
                    el.find('span').text(num);
                    num++;

                    if(num>=n+1) {
                        clearInterval(clearId);
                        //console.log(num);
                    }

                },15);
            }

            counter(barEl1,95);
            counter(barEl2,95);
            counter(barEl3,70);
            counter(barEl4,70);
            counter(barEl5,60);
            counter(barEl6,50);
            counter(barEl7,70);
        }
        
    }
    
    //introduce 탭메뉴
    if($('#container.introduce').length>0) {
        $('#container.introduce .txt_wrap div:gt(0)').hide();
        $('#container.introduce .txt_wrap div:eq(0)').addClass('on');
        
        
        $('#container.introduce .title_wrap li').on('click',function(){
            var introIndex=$(this).index();
            
            $('#container.introduce .txt_wrap>div').eq(introIndex).show().addClass('on').siblings().hide().removeClass('on');
        });
    }
    
    //review page 
    if($('#container.review').length>0) {
        
        //탭메뉴
        $('#container.review .txt_wrap div:gt(0)').hide();
        $('#container.review .txt_wrap div:eq(0)').addClass('on');
        
        $('#container.review .title_wrap li').on('click',function(e){
            e.preventDefault();
            
            $(this).addClass('active').siblings().removeClass('active');
            
            var reviewIndex = $(this).index();
            $('#container.review .txt_wrap>div').eq(reviewIndex).show().addClass('on').siblings().hide().removeClass('on');
        });
        
        //리뷰이미지 팝업
        $('.btn_view').click(function(){
            var idByClass = $(this).attr('id');
            var idNum = findNum(idByClass);
            $('#view'+idNum).show();
        })
        
        
        $('.btn_back').on('click',function(){
            $(this).parent().hide();    
        });
        
        
    }
    
    //contact 팝업
    if($('#container.contact').length>0) {
        $('#container.contact .title_wrap').addClass('on');
        
        $('.txt_wrap .bottom_box li').addClass('on');
    }
    
    
});

function findNum(idx){
    var lastChar = idx.substr(idx.length -1);
    var num = parseInt(lastChar);
    return num;
}

