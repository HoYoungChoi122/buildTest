<template>
  <b-jumbotron bg-variant="info" text-variant="white" >
<!--    <template #header>SELECT TEMPLATE</template>-->

    <template #lead>
      SELECT TEMPLATE
    </template>

    <hr class="my-5">

    <b-card-group deck>
      <b-card header="featured" header-tag="header" footer-tag="footer" text-variant="dark">
        <template #header>
          <h2 class="mb-0">TEMPLATE 1</h2>
        </template>
        <b-card-img style="width: 100px; height: 300px;" src="https://picsum.photos/400/400/?image=20" alt="이미지1"/>
        <template #footer>
          <b-button href="#" variant="primary">SELECT</b-button>
        </template>

      </b-card>

      <b-card  header-tag="header" footer-tag="footer" text-variant="dark">
        <template #header>
          <h2 class="mb-0">TEMPLATE 2</h2>
        </template>
        <b-card-img style="width: 100px; height: 300px;" src="https://picsum.photos/250/250/?image=54" alt="이미지1"/>
        <template #footer>
          <b-button href="#" variant="primary">SELECT</b-button>
        </template>
      </b-card>

      <b-card header-tag="header" footer-tag="footer" text-variant="dark">
        <template #header>
          <h2 class="mb-0">TEMPLATE 3</h2>
        </template>
        <b-card-img style="width: 100px; height: 300px;" src="https://picsum.photos/250/250/?image=58" alt="이미지1"/>
        <template #footer>
          <b-button href="#" variant="primary">SELECT</b-button>
        </template>
      </b-card>

    </b-card-group>

  </b-jumbotron>
</template>

<script>
export default {
  name: "intro"
}
</script>

<style scoped>

</style>
