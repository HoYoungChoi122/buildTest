<template>
  <div class="map">
    <h1>mapPage</h1>
    <b-button @click="createMap">지도 생성</b-button>
    <b-button  @click="initMap">GET MAP</b-button>
    <div id="map" style="width: 400px; height: 400px;">

    </div>
  </div>
</template>
<script>
export default {
  name: "MapPage",
  data : () => ({
    map:null,
    KKK:null
  }),
  methods:{
    initMap(){
      // console.log(window.kakao.maps)
      if(window?.kakao?.maps){
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 5,
        };
        this.map = new window.kakao.maps.Map(container, options);
      }else{
        this.createMap();
      }

    },
    async createMap(){
      window.onload = () => window['kakao']['maps'].load(this.initMap)
    }
  },
  mounted(){
    // console.log(!!this.initMap)
    console.log(window.kakao)
    // this.initMap()
    window.onload = () => window['kakao']['maps'].load(this.initMap)
  }

}
</script>

<style scoped>

</style>
