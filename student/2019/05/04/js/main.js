$(function(){
    //시작하기 클릭시 발생 이벤
    $('.popup .btn_start').on('click',function(){
        $('#main .popup').fadeOut(1000);
        setTimeout(function(){$('#main .my_character.me').fadeIn(700)},1000);
    });
    
    //능력치 버튼
    $('#main .btn_sel.no1').on('click',function(){
        $('#main .popup_wrap.value').fadeIn();
        $('#main .popup_wrap.tolk').fadeOut();
        $('#main .popup_wrap.reco').fadeOut();
        $('#main .popup_wrap.pt').fadeOut();
        $('#main .popup_wrap.final').fadeOut();
    });
    
    $('body').on('click',function(e){
        if($(e.target).closest('.select_wrap').length==0){
            $('#main .popup_wrap.value').fadeOut();
            console.log($(e.target).closest('.select_wrap').length);
        }
    });
    
    
    /*************타이핑효과로 문자보여주는 함수**************/
    var strTolk=[];
    strTolk[0]='어떤 문제에 대해 이야기를 할까요?';
    strTolk[1]='"웹표준기반 스마트앱콘텐츠제작" 훈련을 받으면서 HTML5과 CSS3는 물론이고 Javascript, jQuery를 배우며 당장이라도 실무에서 사용할 수 있을 정도의 저만의 기술들을 준비를 해 놓고 있습니다.';
    strTolk[2]='지난 6개월동안 웹사이트 리뉴얼 프로젝트 및 개인포트폴리오 사이트를 직접 제작해 보면서 필요한 스킬들을 습득하고 퍼블리셔 업무에 대한 이해도를 높힐 수 있었던 시간들이었습니다!';
    strTolk[3]='키보드와 마우스만 있으면 뭐든할 수 있어요.';
    
    //txt는 문자열의 길이를 length로 확인하기 위해 넣어줌
    //idx는 배열값을 넣어 해당 문자를 불러오기위함
    var textId;
    var typingFn=function(txt,idx){
        $('.popup_wrap.tolk .typing1').text('');
        clearInterval(textId);
        var strLength=txt.length || 0;
        console.log(txt);
        var i=0;
        textId=setInterval(function(){
            if(i<strLength){
                $('.popup_wrap.tolk .typing1').append(strTolk[idx][i]);
                i++;
            } else {
                clearInterval(textId);
            }
        }, 100);
    };
    
    //대화하기 버튼
    $('#main .btn_sel.no2').on('click',function(){
        typingFn(strTolk[0],0);
        $('#main .popup_wrap.tolk').fadeIn();
        $('#main .popup_wrap.value').fadeOut();
        $('#main .popup_wrap.reco').fadeOut();
        $('#main .popup_wrap.pt').fadeOut();
        $('#main .popup_wrap.final').fadeOut();
    });
    
    //대화리스트메뉴
    $('.popup_wrap.tolk .tolk_list .list').on('click',function(){
        var num=$(this).index();
        typingFn(strTolk[num+1],num+1);
    });
    
    $('.tolk_list .tolk_close').on('click',function(){
        $('#main .popup_wrap.tolk').fadeOut();
    });
    
    
    /**************************추천**********************************/
    var strReco=[];
    strReco[0]='누구의 추천을 보시겠습니까?';
    strReco[1]='경진이는 미루지 않고 무엇이든지 끈기와 신념을 가지고 진행하는 사람!';
    strReco[2]='우리 경진이는 원하는 목표를 위해 새로운 도전도 마다하지 않으며, 다양한 경험으로 넓은 시야를 갖춘 친구입니다. 강한 책임감과 성실한 모습을 가진 이 친구와 함께 하신다면 자사에 큰 도움이 될 것입니다.';
    strReco[3]='경진언니는 항상 계획적으로 모든 일을 차근차근 진행하는 사람!';
    strReco[4]='경진언니는 일도 성격도 뒤끝없이 깔끔한 성격이예요!';
    strReco[5]='데드라인? 그게뭐죠? 코딩에 대한 열정과 집념, 실력까지 겸비한 전광석화 퍼블리셔! 전☆경☆진';
    strReco[6]='경진이 누나는 아이디어가 좋고 추진력있는 사람입니다!';
    strReco[7]='다양한 경험으로 경진언니는 배울점이 많은 사람이예요.';
    
    var textId1;
    var typingFn1=function(txt1,idx1){
        $('.popup_wrap.reco .typing3').text('');
        clearInterval(textId1);
        var strLength=txt1.length;
        
        var i=0;
        
        textId1=setInterval(function(){
            if(i<strLength){
                $('.popup_wrap.reco .typing3').append(strReco[idx1][i]);
                i++;
            } else {
                clearInterval(textId1);
            }
        }, 100);
    };
    
    
    //추천 버튼
    $('#main .btn_sel.no4').on('click',function(){
        typingFn1(strReco[0],0);
        $('#theImg').remove();
        $('#main .popup_wrap.reco').fadeIn();
        $('#main .popup_wrap.value').fadeOut();
        $('#main .popup_wrap.tolk').fadeOut();
        $('#main .popup_wrap.pt').fadeOut();
        $('#main .popup_wrap.final').fadeOut();
    });
    
    //추천리스트메뉴
    $('.popup_wrap.reco .tolk_list .list').on('click',function(){
        $('#theImg').remove();
        var num=$(this).index();
        typingFn1(strReco[num+1],num+1);
        $('.popup_wrap.reco .typing3').before('<img id="theImg" src="images/img'+[num+1]+'.jpg" />')
    });
    
    
    $('.tolk_list .tolk_close').on('click',function(){
        $('#main .popup_wrap.reco').fadeOut();
    });
    
    
   /**************************포트폴리오******************************/
    var strPt='어떤 포트폴리오를 보시겠습니까?';
    
    var textId2;
    var typingFn2=function(strPt){
        $('.popup_wrap.pt .typing2').text('');
        clearInterval(textId2);
        var pptLength=strPt.length;
        
        var c=0;
        textId2=setInterval(function(){
            if(c<=pptLength){
                $('.popup_wrap.pt .typing2').append(strPt[c]);
                c++;
            } else {
                clearInterval(textId2);
            }
        },100);
    };
    
    //포트폴리오 버튼
    $('#main .btn_sel.no3').on('click',function(){
        typingFn2(strPt);
        $('#main .popup_wrap.pt').fadeIn();
        $('#main .popup_wrap.value').fadeOut();
        $('#main .popup_wrap.reco').fadeOut();
        $('#main .popup_wrap.tolk').fadeOut();
        $('#main .popup_wrap.final').fadeOut();
    });
    
    $('.tolk_list .tolk_close.pt').on('click',function(){
        $('#main .popup_wrap.pt').fadeOut();
    });
    
    
    /***********************최종선택******************************/
    //최종선택 버튼
    var strFinal=[];
    strFinal[0]='채용을 하시겠습니까?';
    strFinal[1]='사..사랑해요!!!';
    strFinal[2]='흥! 나 삐져또!';
    
    var textId3;
    var typingFn3=function(txt2,idx2){
        $('.popup_wrap.final .typing4').text('');
        clearInterval(textId3);
        var strLength=txt2.length;
        
        var i=0;
        textId3=setInterval(function(){
            if(i<strLength){
                $('.popup_wrap.final .typing4').append(strFinal[idx2][i]);
                i++;
            } else {
                clearInterval(textId3);
            }
        },100);
    };
    
    //최종선택 버튼
    $('#main .final_wrap').on('click',function(){
        typingFn3(strFinal[0],0);
        $('#main .popup_wrap.final').fadeIn();
        $('#main .popup_wrap.value').fadeOut();
        $('#main .popup_wrap.reco').fadeOut();
        $('#main .popup_wrap.tolk').fadeOut();
        $('#main .popup_wrap.pt').fadeOut();
    });
    
    $('.tolk_list .employ').on('click',function(){
        typingFn3(strFinal[1],1);
        $('#main .my_character.me').fadeOut(400);
        $('#main .my_character.sad').fadeOut(400);
        $('#main .my_character.wink').fadeIn(400);
        
    });
    
    $('.tolk_list .not_employ').on('click',function(){
        typingFn3(strFinal[2],2);
        $('#main .my_character.me').fadeOut(400);
        $('#main .my_character.wink').fadeOut(400);
        $('#main .my_character.sad').fadeIn(400);
        
    });
    
    $('.tolk_list .tolk_close.final').on('click',function(){
        $('#main .popup_wrap.final').fadeOut();
        $('#main .my_character.me').fadeIn(300);
        $('#main .my_character.wink').fadeOut(500);
        $('#main .my_character.sad').fadeOut(500);
    });
    
    
    //리뉴얼 사이트 슬라이더
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        slidesPerView:'auto',
        mousewheel: true,
        speed: 700,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                var num=mySwiper.activeIndex;
                $('#container .tab_list>li').eq(num).addClass('active').siblings().removeClass('active');
            },
        }
    })
    
    $('#container .tab_list>li').on('click',function(){
        var num=$(this).index();
        mySwiper.slideTo(num);
    });
    
});










