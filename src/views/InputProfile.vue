<template>
  <div class="home">
    <b-container>

      <!-- 입력 : 닉네임 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">프로필 사진</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-file
                v-model="imgFile"
                :state="Boolean(imgFile)"
                placeholder="프로필 사진"
                accept="image/jpeg, image/png, image/gif"
                plain
            ></b-form-file>
          </b-input-group>
        </b-col>
      </b-row>

      <!-- 입력 : 닉네임 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">닉네임</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input v-model="nickName" :disabled="nickPrivate"></b-form-input>
            <template #append>
              <b-button v-if="!nickPrivate" @click="nickNameNone">비공개</b-button>
              <b-button v-else @click="inputNick">공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>


      <!-- 입력 : 급수 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">급수</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input type="number" v-model.number="userGrade" :disabled="gradePrivate"></b-form-input>
            <template #append>
              <b-button v-if="!gradePrivate" @click="gradeNone">비공개</b-button>
              <b-button v-else @click="inputGrade">공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <!-- 입력 : 클랜 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">클랜</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input v-model="clanName" :disabled="clanNamePrivate"></b-form-input>
            <template #append>
              <b-button v-if="!clanNamePrivate" @click="clanNameNone">비공개</b-button>
              <b-button v-else @click="inputClanName">공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <!-- 입력 : 티어 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">티어</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-select class="form-control" :options="selectTemp.tier" v-model="userTier" />
          </b-input-group>
        </b-col>
      </b-row>

      <!-- 입력 : 메모 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">메모</b-card-text>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col cols="12">
          <b-input-group >
            <template #prepend>
              <b-button variant="primary" disabled >MEMO</b-button>
            </template>
            <b-form-textarea
                id="textarea-state"
                v-model="memo"
                :state="memo.length <= 150"
                placeholder="4줄까지만 입력해주세요 줄바꿈은 인식하지 않고 자동으로 줄바꿈이 됩니다. 많은것을 입력하면 잘려서 나옵니다."
                @keydown="checkBr"
            ></b-form-textarea>
          </b-input-group>
        </b-col>
      </b-row>


      <!-- 입력 : 포지션 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">포지션</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="position"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.position"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- 입력 : 플레이 타입 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">플레이타입</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="playType"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.playType"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- 입력 : 플레이 유형 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">플레이 유형</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="playLike"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.playLike"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- 입력 : 플레이 시간 -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">플레이 시간</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="playTime"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.playTime"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- 입력 : 팔로우  -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">팔루우 타입</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="followType"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.followType"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- 입력 : 파티타입  -->
      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">파티 타입</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-right"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="partyType"
                style="display: flex; flex-direction: column;"
                :options="selectTemp.partyType"
                :aria-describedby="ariaDescribedby"
                switches
                size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

    </b-container>
    <b-button @click="cap">트친소 시트 제작</b-button>
    <h3 style="color:black">사진을 꾹 눌러</h3>
    <h3 style="color:black"> 저장하기 누르세요</h3>
    <img id="imgSheet" style="width: 300px; height: 300px;" alt="사진"/>

    <b-container id="cont"  style="display: block; position: relative; left:2000px;" class="main_con text-white pl-5 pt-5 text-left">
      <b-row class="pl-2 pr-2">
        <b-col cols="6" class="main_title">
          <!-- f5b895 f3d6ae 658dc6-->
          <h1  style="color:#F9F871;">#사이퍼즈 트친소</h1>
          <!--          <b-img src="http://static.cyphers.co.kr/img/lnb/logo_new.png" alt="LOGO"/>-->
          <!--          <b-icon stacked icon="slash-circle" variant="primary" style="width: 80px; height: 80px;"></b-icon>-->
        </b-col>
        <b-col cols="4" class="text-right" style="position: sticky;">
          <!--          <b-img thumbnail style="position: absolute; width: 300px; height: 300px; left:150px" src="https://placekitten.com/300/300" alt="프로필 사진"/>-->
          <b-img v-if="!imgFile" thumbnail style="position: absolute; width: 300px; height: 300px; left:150px" src="https://placekitten.com/300/300" alt="프로필 사진"/>
          <b-img v-else thumbnail style="position: absolute; width: 300px; height: 300px; left:150px" :src="readImg" alt="프로필 사진"/>
        </b-col>
      </b-row>
      <b-row class="h-25 w-50">
        <b-col class="pt-3">
          <!--          <h1 class="profile_text" style="color:#959366;letter-spacing: -6px;">P R O F I L E</h1>-->
          <!--          <h1 class="profile_text" style="color:#959366;letter-spacing: -6px;">P R O F I L E</h1>-->

          <h2  class="mt-4" style="font-weight: 300">
            <span style="color:#959366;">{{nickName}}</span>
            <span>{{  userGrade? ' / '+userGrade+'급':''}}</span>
          </h2>
          <!--          <h2 v-else class="mt-4" style="font-weight: 300"> </h2>-->
          <h3 class="mt-4" style="font-weight: 300">
            <span v-if="clanName">CLAN - {{clanName}}</span>

          </h3>
          <h3 class="mt-4" style="font-weight: 300">
            <span v-if="userTier!==''">TIER - {{userTier}}</span>
          </h3>
          <!--          <h6 class="mt-4" style="font-weight: 300">티어 클랜이름</h6>-->
        </b-col>
      </b-row>
      <b-row style="height: 50px"></b-row>
      <b-row class="h-25 pl-2 pr-2 mt-5">
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-hexagon class="position_icon" style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">POSITION</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortPosition" :key="i">
                # {{ i }}
              </b-card-text>
            </div>
          </div>
        </b-col>
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-fullscreen style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">PLAY TYPE</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortPlayType" :key="i">
                # {{ i }}
              </b-card-text>
            </div>
          </div>
        </b-col>
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-suit-heart style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">PLAY LIKE</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortPlayLike" :key="i">
                # {{i}}
              </b-card-text>
            </div>
          </div>
        </b-col>
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-alarm style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">PLAY TIME</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortPlayTime" :key="i">
                # {{i}}
              </b-card-text>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="h-25 pl-2 pr-2">
        <!--F type -->
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-twitter style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">FOLLOW</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortFollowType" :key="i">
                # {{i}}
              </b-card-text>
            </div>
          </div>
        </b-col>
        <b-col cols="3">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-people  style="width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px;" class="pl-4">PARTY</b-card-text>
              </b-input-group>
            </p>
            <div class="d-flex feature_box">
              <b-card-text class="p-1 hashTag" v-for="i in sortPartyType" :key="i">
                # {{i}}
              </b-card-text>
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <div>
            <p>
              <b-input-group class="config_group">
                <template #prepend>
                  <b-icon-journal style="color:#F9F871; width: 40px; height: 40px;"/>
                </template>
                <b-card-text style="font-size:24px; " class="pl-4">MEMO</b-card-text>
              </b-input-group>
            </p>
            <b-card-text class="pl-3 p-1 memo_box" style="border-left:3px dashed; white-space: break-spaces;" >
              {{memo}}
            </b-card-text>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <br>
<!--    <canvas id="canvas" width="1024px" height="808px"></canvas>-->

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import html2canvas from "html2canvas";

export default {
  name: 'InputProfile',
  components: {
    // HelloWorld
  },
  data : ()=> ({
    imgFile:null,
    nickName:'',
    nickPrivate:false,
    userGrade:'',
    gradePrivate:false,
    clanName:'',
    clanNamePrivate:false,
    userTier:'',
    userTierPrivate:false,
    position:[],
    playType:[],
    playLike:[],
    playTime:[],
    followType:[],
    partyType:[],
    uploadImageFile:'',
    memo:'',
    discord:'',
    imgSrc:'',
    isComplete:true,
    selectTemp : {
      position:[
        {value:'탱커',text:'탱커'},
        {value:'서포터',text:'서포터'},
        {value:'근딜',text:'근딜'},
        {value:'원딜',text:'원딜'},
      ],
      playType:[
        {value:'일반', text:'일반'},
        {value:'공식', text:'공식'},
        {value:'협력', text:'협력'},
      ],
      playLike:[
        {value:'승리지향',text:'승리지향'},
        {value:'조합맞춤',text:'조합맞춤'},
        {value:'즐거운분위기',text:'즐거운분위기'},
        {value:'진중한분위기',text:'진중한분위기'},
        {value:'예능파티',text:'예능파티'},
      ],
      playTime:[
        {value:'평일',text:'평일'},
        {value:'주말',text:'주말'},
        {value:'오전',text:'오전'},
        {value:'오후',text:'오후'},
      ],
      followType:[
        {value:'RT',text:'RT'},
        {value:'마음',text:'마음'},
        {value:'멘션',text:'멘션'},
      ],
      partyType:[
        {value:'솔플',text:'솔플'},
        {value:'2인',text:'2인'},
        {value:'3인',text:'3인'},
        {value:'4인',text:'4인'},
        {value:'5인',text:'5인'},
      ],
      tier:[
        {value:'',text:''},
        {value:'브론즈',text:'브론즈'},
        {value:'실버',text:'실버'},
        {value:'골드',text:'골드'},
        {value:'조커',text:'조커'},
        {value:'에이스',text:'에이스'},
        {value:'히어로',text:'히어로'},
        {value:'레전드',text:'레전드'},
      ]
    }
  }),
  methods:{
    cap(){
      html2canvas(document.querySelector('#cont'), { logging: true, letterRendering: 1, useCORS: true } ).then(function (canvas) {
        const img = document.querySelector('#imgSheet');
        img.src = canvas.toDataURL('image/png')

      });

    },
    saveAs(uri, filename) {
      console.log(uri,filename)
    },
    nickNameNone(){
      this.nickName='비공개';
      this.nickPrivate = true;
    },
    inputNick(){
      this.nickPrivate = false;
      this.nickName = '';
    },
    gradeNone(){
      this.userGrade='';
      this.gradePrivate=true;
    },
    inputGrade(){
      this.userGrade=0;
      this.gradePrivate=false;
    },
    clanNameNone(){
      this.clanName='비공개';
      this.clanNamePrivate = true;
    },
    inputClanName(){
      this.clanName='';
      this.clanNamePrivate = false;
    },
    checkBr(){
      const rows = this.memo.split('\n').length;
      this.memo = this.memo.replace('\n\n','\n');
      const maxRows = 4;
      if( rows > maxRows){
        alert('4줄 까지만 가능합니다');
        const modifiedText = this.memo.split("\n").slice(0, maxRows);
        this.memo = modifiedText.join("\n");
      }
    },
    viewFile(){
      const file = this.imgFile

      if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
          this.uploadImageFile = e.target.result;
        }

        reader.readAsDataURL(this.imgFile);

      }else{
        console.log('현재 파일 선택되지 않음');
      }
    }
  },
  mounted(){
  },
  computed:{
    sortPosition(){
      const a = this.position.includes('탱커');
      const b = this.position.includes('서포터');
      const c = this.position.includes('근딜');
      const d = this.position.includes('원딜');

      const result = [];

      if(a) result.push('탱커');
      if(b) result.push('서포터');
      if(c) result.push('근딜');
      if(d) result.push('원딜');

      return result;
    },
    sortPlayType(){
      const a = this.playType.includes('일반');
      const b = this.playType.includes('공식');
      const c = this.playType.includes('협력');
      const result = [];
      if(a) result.push('일반');
      if(b) result.push('공식');
      if(c) result.push('협력');
      return result;
    },
    sortPlayLike(){
      const a = this.playLike.includes('승리지향');
      const b = this.playLike.includes('조합맞춤');
      const c = this.playLike.includes('즐거운분위기');
      const d = this.playLike.includes('진중한분위기');
      const e = this.playLike.includes('예능파티');
      const result = [];
      if(a) result.push('승리지향');
      if(b) result.push('조합맞춤');
      if(c) result.push('즐거운분위기');
      if(d) result.push('진중한분위기');
      if(e) result.push('예능파티');
      return result;
    },
    sortPlayTime(){
      const a = this.playTime.includes('평일');
      const b = this.playTime.includes('주말');
      const c = this.playTime.includes('오전');
      const d = this.playTime.includes('오후');
      const result = [];
      if(a) result.push('평일');
      if(b) result.push('주말');
      if(c) result.push('오전');
      if(d) result.push('오후');
      return result;
    },
    sortFollowType(){
      const a = this.followType.includes('RT');
      const b = this.followType.includes('마음');
      const c = this.followType.includes('멘션');
      const result = [];
      if(a) result.push('RT');
      if(b) result.push('마음');
      if(c) result.push('멘션');
      return result;
    },
    sortPartyType(){
      const a = this.partyType.includes('솔플');
      const b = this.partyType.includes('2인');
      const c = this.partyType.includes('3인');
      const d = this.partyType.includes('4인');
      const e = this.partyType.includes('5인');
      const result = [];
      if(a) result.push('솔플');
      if(b) result.push('2인');
      if(c) result.push('3인');
      if(d) result.push('4인');
      if(e) result.push('5인');
      return result;
    },
    readImg(){
      const file = this.imgFile

      if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
          this.uploadImageFile = e.target.result;
        }

        reader.readAsDataURL(this.imgFile);

      }else{
        console.log('현재 파일 선택되지 않음');
      }
      return this.uploadImageFile
    }
  }
}
</script>
<style scoped>
.input_label_title{
  text-align: left;
  border-left: 4px solid #42b983;
  padding-left:5px;
}
.font-set>.btn{
  font-family: "BMDOHYEON", serif !important;
}
.main_con{
  height: 808px;
  width: 1024px;
  background: #141516;
  min-width: 1024px;
  max-width: 1024px;
}
.profile_text{
  font-size:40px;
}
h1{
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -1px;
  clear: both;
  color: #fff;
  font-family: "Vitro_core", serif;
  font-weight: 600;
}
h2,h3{
  color: #fff;
  font-family: "Vitro_core", serif;
  font-weight: 600;
}
.feature_box{
  flex-wrap: wrap;
  align-items: flex-start;

}

.config_group{
  font-family: "Vitro_core", serif;
}
.feature_box>.hashTag{
  /*border:1px solid #fff;*/
  /*border-radius: 20px;*/
  /*margin-right: 5px;*/
  font-weight: 500;
  margin:0;
  font-size:20px;
  letter-spacing: -1px;
  font-family: "Cafe24Oneprettynight",sans-serif;
}
.memo_title{
  font-weight: 400;
  font-size:40px;
  font-family: "Cafe24Oneprettynight",sans-serif;
}
.memo_box{
  font-weight: 400;
  font-size:16px;
  font-family: "MaruBuri-Regular",sans-serif;
}
.position_icon{
  background: linear-gradient(to right, #1865de, #d20e0c);
  border-radius: 17px;
  -webkit-text-fill-color: transparent;
}
/*타이틀*/
@font-face {
  font-family: 'Vitro_core';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Vitro_core.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/*노트용*/
@font-face {
  font-family: 'HSYuji-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/HSYuji-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'BMDOHYEON';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'IBMPlexSansKR-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
/* 본문 */
@font-face {
  font-family: 'Cafe24Oneprettynight';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MaruBuri-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}





</style>
