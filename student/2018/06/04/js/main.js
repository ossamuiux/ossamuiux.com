$(document).ready(function () {
   // 마우스감지 배경, 박스 움직이기
    var $el = $('#main .txt_box');
    var $el2 = $('#main .bg_afterimage');    
    var $el3 = $('#main .bg_afterimage2');    
    
    $('#main.index').mousemove(function(e){
        var posX = $el.css('left');
        var posY = $el.css('top');
        
        var diffx = e.pageX - parseInt(posX);
        var diffy = e.pageY - parseInt(posY);
        
        $el.css({'margin-left':diffx*0.01, 'margin-top':diffy*0.01});
        $el2.css({'margin-left':-diffx*0.03, 'margin-top':-diffy*0.03});
        $el3.css({'margin-left':-diffx*0.06, 'margin-top':-diffy*0.06});
    });
    
    
    //work 클릭시 화면전환 효과, 2초후 work01.html로 이동
    $('#menuBar .gnb .link-work').click(function(e){
        e.preventDefault();
        
        $('#main.index .txt_box').hide();
        $('#main.index .bg_work').addClass('on');
        
        setTimeout(function(){
            location.href="work01.html";   
        },2000);
    });
    //about
    $('#menuBar .gnb .link-about').click(function(e){
        e.preventDefault();
        
        $('#main.index .txt_box').hide();
        $('#main.index .bg_about').addClass('on');
        
        setTimeout(function(){
            location.href="about.html";   
        },2000);
    });
});