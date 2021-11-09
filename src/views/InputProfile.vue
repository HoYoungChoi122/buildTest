<template>
  <div class="home">
    <b-container>

      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">이름</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input max="8"></b-form-input>
            <template #append>
              <b-button>비공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>


      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">회사</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input max="8"></b-form-input>
            <template #append>
              <b-button>비공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">부서</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-input-group size="sm">
            <b-form-input max="8"></b-form-input>
            <template #append>
              <b-button>비공개</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row class="mt-3 mb-1">
        <b-col cols="12">
          <b-card-text class="input_label_title">취미</b-card-text>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
              class="text-left"
              v-slot="{ ariaDescribedby  }"
          >
            <b-form-checkbox-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                switches
            ></b-form-checkbox-group>
          </b-form-group>

        </b-col>
      </b-row>






    </b-container>

<!--    <img alt="Vue logo" src="../assets/logo.png">-->

<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'InputProfile',
  components: {
    // HelloWorld
  },
  data: ()=>({
    selected:[],
    options: [
      { text: '등산', value: 'red' },
      { text: '게임', value: 'green' },
      { text: '음악', value: 'yellow' },
      { text: '영화감상', value: 'blue' }
    ]

  })
}
</script>
<style scoped>
.input_label_title{
  text-align: left;
  border-left: 4px solid #42b983;
  padding-left:5px;
}
</style>
