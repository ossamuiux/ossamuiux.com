var front = {
    // 메인
    scrollTop: 0,
    titWrap: null,
    brandImg: null,
    ceoP: null,

    init: function() {

        // 메인
        front.brandImg = $('#container .main_brand li');

        front.mainSliderUI();
        front.mainNewsSliderUI();
        front.mainStorySliderUI();
        front.gnbUI();
        
        // 서브
        front.titWrap = $('.company_ceo_page .contents .tit_wrap');
        front.titWrap.addClass('on');
        front.ceoP = $('.company_ceo_page .contents .txt_wrap p');
        
        front.lnbUI();
        front.factoryZoneUI();
    },
    gnbUI: function() {
        $(' .btn_nav').on('click', function() {
            $('body').addClass('on');
        });
        $(' .gnb>li>a').on('click', function() {
            $(this).siblings('.depth2').stop().slideToggle();
            $(this).parent().siblings().find('.depth2').slideUp();
            $(this).parent().toggleClass('on').siblings().removeClass('on');
        });
        $(' .btn_close').on('click', function() {
            $('body').removeClass('on');
            $(' .gnb>li').removeClass('on');
            $('.depth2').hide();
        });
        $('#dimm').on('click', function() {
            $('body').removeClass('on');
            $(' .gnb>li').removeClass('on');
            $('.depth2').hide();
        });

    },
    mainSliderUI: function() {
        var mainSlider = new Swiper('#container .main_slider', {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
        }) 
    },
    mainNewsSliderUI: function() {
        var mainNewsSlider = new Swiper('#container .main_news_slider', {
            slidesPerView: 'auto',
        }) 
    },
    mainStorySliderUI: function() {
        var mainStorySlider = new Swiper('#container .main_story_slider', {
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination', 
                clickable: true,
            },
        }) 
    },
    // 인덱스에서 쓰는 스크롤탑 애니
    mainScroll: function() {
        if (front.brandImg.length > 0) {           
            if (front.scrollTop >= front.brandImg.eq(0).offset().top - 450 && front.scrollTop < front.brandImg.eq(2).offset().top - 450) {
                front.brandImg.eq(0).addClass('on');
                front.brandImg.eq(1).addClass('on');
            } else if (front.scrollTop >= front.brandImg.eq(2).offset().top - 450 && front.scrollTop < front.brandImg.eq(4).offset().top - 450) {
                front.brandImg.eq(2).addClass('on');
                front.brandImg.eq(3).addClass('on');
            } else if (front.scrollTop >= front.brandImg.eq(4).offset().top - 450 && front.scrollTop < front.brandImg.eq(6).offset().top - 450) {
                front.brandImg.eq(4).addClass('on');
                front.brandImg.eq(5).addClass('on');
            } else if (front.scrollTop >= front.brandImg.eq(6).offset().top - 450) {
                front.brandImg.eq(6).addClass('on');
                front.brandImg.eq(7).addClass('on');
            } else if (front.scrollTop === 0) {
                front.brandImg.removeClass('on');
            }
        }
    },
    // 서브페이지에서 쓰는 스크롤탑애니
    companyCeoScroll: function() {
        if (front.ceoP.length > 0) {
            if (front.scrollTop >= front.ceoP.eq(0).offset().top - 700 && front.scrollTop < front.ceoP.eq(1).offset().top - 700) {
                front.ceoP.eq(0).addClass('on');
            } else if (front.scrollTop >= front.ceoP.eq(1).offset().top - 700 && front.scrollTop < front.ceoP.eq(2).offset().top - 700) {
                front.ceoP.eq(1).addClass('on');
            } else if (front.scrollTop >= front.ceoP.eq(2).offset().top - 700 && front.scrollTop < front.ceoP.eq(3).offset().top - 700) {
                front.ceoP.eq(2).addClass('on');
            } else if (front.scrollTop >= front.ceoP.eq(3).offset().top - 700 && front.scrollTop < front.ceoP.eq(4).offset().top - 700) {
                front.ceoP.eq(3).addClass('on');
            } else if (front.scrollTop >= front.ceoP.eq(4).offset().top - 700) {
                front.ceoP.eq(4).addClass('on');
            } else if (front.scrollTop === 0) {
                front.ceoP.removeClass('on');
            }
        }
    },
    lnbUI: function() {
        var lnbCell =  $('.sub_container .lnb li');

        lnbCell.on('click', function(e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
        });
    },
    factoryZoneUI: function() {
        // 동적으로 리스트 추가하기
        var html = '<li>';
        html += '    <div class="tit_wrap">';
        html += '        <h3>껌 ZONE</h3>';
        html += '     </div>';
        html += '    <img src="images/factory_zone_04.jpg" alt="스위트팩토리 소개">';
        html += '    <div class="txt_wrap">';
        html += '        <p>놀이를 통해<br>충치를 물리치고<br>치아관리법을 배우는<br>체험 콘텐츠</p>';
        html += '        <p class="hashtag">#자일리톨로_충치균을_무찌르자</p>';
        html += '    </div>';
        html += '</li>';
        html += '<li>';
        html += '    <div class="tit_wrap">';
        html += '        <h3>초콜릿 ZONE</h3>';
        html += '    </div>';
        html += '    <img src="images/factory_zone_05.jpg" alt="스위트팩토리 소개">';
        html += '    <div class="txt_wrap">';
        html += '        <p>초콜릿의<br>제조공정을<br>게임으로 알아보는<br>체험 콘텐츠</p>';
        html += '        <p class="hashtag">#초콜릿명가 #롯데제과</p>';
        html += '    </div>';
        html += '</li>';
        html += '<li>';
        html += '    <div class="tit_wrap">';
        html += '        <h3>비스킷&스낵 ZONE</h3>';
        html += '    </div>';
        html += '    <img src="images/factory_zone_06.jpg" alt="스위트팩토리 소개">';
        html += '    <div class="txt_wrap">';
        html += '        <p>빼빼로 만들기<br>체험으로<br>모두가 좋아하는<br>체험 콘텐츠</p>';
        html += '        <p class="hashtag">#내가만든_빼빼로</p>';
        html += '    </div>';
        html += '</li>';
        html += '<li>';
        html += '    <div class="tit_wrap">';
        html += '        <h3>헬스원 ZONE</h3>';
        html += '    </div>';
        html += '    <img src="images/factory_zone_07.jpg" alt="스위트팩토리 소개">';
        html += '    <div class="txt_wrap">';
        html += '        <p>롯데제과가<br>지향하는<br>웰빙 제과를<br>알아보는 시간</p>';
        html += '        <p class="hashtag">#롯데제과는 #건강을_생각해요</p>';
        html += '    </div>';
        html += '</li>';
        console.log(html);

        $('.factory_page .zone .btn_all').on('click', function(e) {
            e.preventDefault();
            $('.factory_page .list_zone li:eq(2)').after(html);
            $(this).css('display' , 'none');
        });
    },
};

$(document).ready(function() {
    front.init();
    $(window).scroll(function() {
        front.scrollTop = $(window).scrollTop();
        front.mainScroll();
        front.companyCeoScroll();
    })
});