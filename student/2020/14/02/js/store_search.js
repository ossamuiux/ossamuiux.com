function storeSearchMap () {
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.556205, 126.939481), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.556205, 126.939481); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // ES6 백틱(템플릿문자열)
    // 여러출입력가능하며 ${변수명}이용하여 변수값 확인 가능
    // 익스 하위버전은 사용불가
    var iwContent = ' <div class="store_map_layer">' +
                        '    <div class="head">'+
                        '           <h3>신촌</h3>'+
                        '          <button type="button" class="btn_close">닫기</button>'+
                        '        </div>'+
                        '        <div class="info">'+
                        '            <dl>'+
                        '                <dt>주소</dt>'+
                        '                <dd id="ui_storeInfoLayer_addr">서울특별시 서대문구 신촌로 121 아남오피스텔 </dd>'+
                        '            </dl>'+
                        '            <dl>'+
                        '                <dt>연락처</dt>'+
                        '                <dd>02-3147-1248</dd>'+
                        '            </dl>'+
                        '            <dl>'+
                        '               <dt>영업시간</dt>'+
                        '                <dd>08:00 - 22:30</dd>'+
                        '            </dl>'+
                        '        </div>'+
                        '        <div class="foot"> <a href="#" target="_blank">자세히보기</a> </div>'+
                        '    </div>';
    iwPosition = new kakao.maps.LatLng(37.556205, 126.939481); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //     position : iwPosition, 
    //     content : iwContent 
    // });

    var overlay = new kakao.maps.CustomOverlay({
        content: iwContent,
        map: map,
        position: marker.getPosition()     
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    // infowindow.open(map, marker); 
    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    });

    function closeOverlay() {
        overlay.setMap(null);     
    }
    // 내부함수호출
    document.querySelector('.store_map_layer .btn_close').addEventListener('click', function() {
        closeOverlay();
    });
};

storeSearchMap();