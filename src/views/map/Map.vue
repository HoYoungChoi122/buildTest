<template>
  <div class="map">
    <b-container>
      <h1>mapPage</h1>
      <b-button @click="createMap">지도 생성</b-button>
      <b-button  @click="initMap">GET MAP</b-button>
      <b-button  @click="createMarker">SET MARKER DIV</b-button>
      <b-button  @click="createMarkers">MARKER_EA</b-button>

      <b-input-group style="width: 500px;">
        <template #prepend>
          <b-button variant="primary" disabled>주소입력</b-button>
        </template>
        <b-form-input type="text" v-model="inputAddr"></b-form-input>
        <template #append>
          <b-button @click="searchAddress">주소검색</b-button>
        </template>
      </b-input-group>
    </b-container>


    <div id="map" style="width: 400px; height: 400px;">

    </div>
  </div>
</template>
<script>
export default {
  name: "MapPage",
  data : () => ({
    map:null,
    inputAddr:'',
  }),
  methods:{
    initMap(){
      console.log(this.map)
    },
    async createMap(){
      // window.onload = () => window['kakao']['maps'].load(this.initMap)
    },
    createMarker(){
      const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(this.map);

      let iwContent = '<div style="padding:5px;">Hello World!</div>'
      let iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

      const infowindow = new window.kakao.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
      });
      infowindow.open(this.map,marker)

    },
    createMarkers(){
      const positions = [
        {
          content: '<div>카카오</div>',
          latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
          content: '<div>생태연못</div>',
          latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
        },
        {
          content: '<div>텃밭</div>',
          latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
        },
        {
          content: '<div>근린공원</div>',
          latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
        }
      ];

      positions.forEach((value, i) => {

        const marker = new window.kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: positions[i].latlng // 마커의 위치
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: positions[i].content // 인포윈도우에 표시할 내용
        });

        infowindow.open(this.map,marker)
      })


    },
    searchAddress(){
      const geocoder = new window.kakao.maps.services.Geocoder();

      const map  = this.map

      geocoder.addressSearch(this.inputAddr, function(result, status) {

      //   // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {

          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
      //
      //     결과값으로 받은 위치를 마커로 표시합니다
      //     console.log(map)
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords
          });
      //
      //     // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">검색결과</div>'
          });
          infowindow.open(map, marker);
      //
      //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });

    }
  },
  mounted(){
    console.log(window.kakao)

    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 5,
    };

    this.map = new window.kakao.maps.Map(container, options);
    // const map = new window.kakao.maps.Map(container, options); // 지도를 생성합니다

// 마커가 표시될 위치입니다


  }

}
</script>

<style scoped>

</style>
