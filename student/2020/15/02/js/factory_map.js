//  레디로 묶어도 되는거였음
// $(document).ready(function() {


function factoryMap() {    
    // 제이퉈리 선택자가아닌 자바스크립트.getElementById를 사용
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = { 
        center: new kakao.maps.LatLng(37.5385,126.8923282), // 지도의 중심좌표(ㅡㅡ위도,ㅣㅣ경도)
        level: 4 // 지도의 확대 레벨
    };

    // 위의 정보들이 인자값으로 여기 담김
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.5373981,126.8922821); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // ES6백틱(템플릿문자열) ``
    // 익스에서는 동작하지 않으므로 백틱 사용금지!!!!
    // 여러줄 입력이 가능하며 ${변수명} 이용하여 변수값 확인가능
    var iwContent = '<div class="factory_map_layer">' +
                    '  <div class="head">' +
                    '     <h3>스위트팩토리</h3>' +
                    '      <button type="button" class="btn_close">닫기</button>' +
                    '  </div>' +
                    '  <div class="info">' +
                    '      <dl>' +
                    '          <dt>연락처 :</dt>' +
                    '          <dd>02 - 1234 - 5678</dd>' +	
                    '      </dl>' +
                    '      <dl>' +
                    '          <dt>영업시간 :</dt>' +		
                    '          <dd>09:00 - 6:00</dd>' +
                    '      </dl>' +
                    '  </div>' +
                    '</div>';

    var iwPosition = new kakao.maps.LatLng(37.5373981, 126.8922821); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //     position : iwPosition, 
    //     content : iwContent 
    // });
    
    // 닫기가 가능한 커스텀오버레이.... 짱오래걸림,..😃😃😃😃😃😃😍😍😍😍
    // 이 방식으로 바꿀게용 ㅠ
    var overlay = new kakao.maps.CustomOverlay({
        content: iwContent,
        map: map,
        position: marker.getPosition()       
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    }); 

    function closeOverlay() {
        overlay.setMap(null);     
    }
    // 내부함수호출
    document.querySelector('.factory_map_layer .btn_close').addEventListener('click', function() {
        closeOverlay();
    });
}
factoryMap();


