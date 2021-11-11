declare module 'vue/types/vue'{
    interface Window {
        kakao: {
            maps : {
                load:any,
                Map:any,
                LatLng:any,
                InfoWindow:any,
                Marker:{
                    setMap:any
                },

            }
        };
    }
}
