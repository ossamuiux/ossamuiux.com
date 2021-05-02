front = {

    init: function() {
        front.gnbUi();
        front.mainSlider();
        front.nongshimTvSlider();
        front.youtubeVideo();
        front.brandUi();
        front.familySite();
        front.FaqList();
        front.idCheck();
    },
    // 검색버튼 누르면 위에서 아래로 내려옴
    // 영역 만든 후 .add('영역')
    gnbUi: function() {
        $('#header .btn_search').on('click', function() {
            $('#header').addClass('_open');
        });
        $('#header .search_zone .btn_close').on('click', function() {
            $('#header').removeClass('_open');
        });

        $('#header .util .btn_menu').on('click', function(e) {
            e.preventDefault();
            $('#nav').addClass('on');
            $('body').addClass('on');
            // $('#nav').slideDown();
            
            if($('#header').hasClass('_open')){
                $('#header').removeClass('_open');
            };
        });
        $('#nav .btn_close').on('click', function() {
            $('#nav').removeClass('on');
            $('body').removeClass('on');
            // $('#nav').slideUp();
            $('#nav .gnb .depth2').slideUp();
        });

        $('#nav .gnb>li>a').on('click', function(e){
            e.preventDefault();
            $(this).parent().toggleClass('on');    // .gnb>li.on
            $(this).siblings().stop().slideToggle();  // depth2
        });
    },
    mainSlider: function() {
        var swiper = new Swiper('.main_slider', {
            loop: true,
        });
    },
    nongshimTvSlider: function() {
        var nongSwiper = new Swiper('.nongshim_tv_slider', {
            loop: true,
        });
    },

    youtubeVideo: function () {
        var nongshimPlayBtn1 =  $('.nongshim_tv_slider .nong_slide1 .btn_play');
        var nongshimPlayBtn2 =  $('.nongshim_tv_slider .nong_slide2 .btn_play');
        var CloseBtn = $('#container .nongshim_tv .btn_close');

        nongshimPlayBtn1.on('click', function(e) {
            e.preventDefault();
            $('.nongshim_tv .video1').show();
            $('.nongshim_tv .video1 iframe').attr('src','https://www.youtube.com/embed/iCS3HSrIZGA');
            $('.nongshim_tv').addClass('on');
            $('body').addClass('on');
        });

        nongshimPlayBtn2.on('click', function(e) {
            e.preventDefault();
            $('.nongshim_tv .video2').show();
            $('.nongshim_tv .video2 iframe').attr('src','https://www.youtube.com/embed/7G15-AcQYpM');
            $('.nongshim_tv').addClass('on');
            $('body').addClass('on');
        });

        CloseBtn.on('click', function(e) {
            e.preventDefault();
            $('.nongshim_tv .youtube_video iframe').attr('src','about:blank');
            $('.nongshim_tv').removeClass('on');
            $('.nongshim_tv .youtube_video').hide();
            $('body').removeClass('on');
        });
    },
    brandUi: function() {
        
        $('#brandList').on('change', function() {
            var value = $(this).val();

            console.log($('.brand1').siblings('.brand2, .brand3, .brand4'));
            // console.log(value);
            
            if(value === '1') {
                $('.brand_title .brand1').show().siblings('.brand2, .brand3, .brand4').hide();
            } else if (value === '2') {
                $('.brand_title .brand2').show().siblings('.brand1, .brand3, .brand4').hide();
            } else if (value === '3') {
                $('.brand_title .brand3').show().siblings('.brand1, .brand2, .brand4').hide();
            } else {
                $('.brand_title .brand4').show().siblings('.brand1, .brand2, .brand3').hide();
            }
        });
    },

    familySite: function() {
        $('.family_site a').on('click', function(e) {
            e.preventDefault();
            $('.family_site').toggleClass('on');
        });
    },

    FaqList: function() {
        // 고객센터 FAQ 영역
        $('.howto_faq_list>li>a').on('click', function(e){
            e.preventDefault();
            $(this).siblings('.answer').slideToggle().parent().siblings().find('.answer').slideUp();
            // $(this).siblings('.answer').slideToggle().parent().siblings('.answer').slideUp();
            
            $(this).parent().toggleClass('on').siblings().removeClass('on');
        });

        $('.factory_faq .factory_faq_list>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).siblings().slideToggle().parent().siblings().find('.factory_answer').slideUp();
            $(this).parent().toggleClass('on').siblings().removeClass('on');
        });

    },

    idCheck: function() {
        $('.login_container .btn_id_save').on('click', function() {
            
            if($('#idSave').prop('checked')){
                $('.login_container .id_save').removeClass('on');
            } else {
                $('.login_container .id_save').addClass('on');
            };
        });

        // 아이디와 비번 기재 시에 로그인 버튼 배경색 변경
        $('.login_container .top_login').on('input', function() {
            var idInput = $('.login_container .top_login_id').val();
            var pwInput = $('.login_container .top_login_pw').val();
            var btnLogin = $('.login_container form .btn_login');

            if(idInput === '' || pwInput === '') {
                btnLogin.removeClass('on');
            } else {
                btnLogin.addClass('on');
            };
        });

    },


},





$(document).ready(function() {
    front.init();



});