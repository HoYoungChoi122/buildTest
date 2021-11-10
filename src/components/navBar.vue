<template>
  <div>
    <!-- Image and text -->
    <b-navbar variant="faded" type="light">
      <b-navbar-brand to="/">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        CREATE
      </b-navbar-brand>

      <div id="nav">
        <router-link to="/">INPUT PROFILE</router-link> |
        <router-link to="/map">MAP</router-link> |
<!--        <router-link to="/about">OUT</router-link> |-->
      </div>

    </b-navbar>
<!--    // const result = [];-->
<!--    // const a = this.arr.includes('a');-->
<!--    // const b = this.arr.includes('b');-->
<!--    // const c = this.arr.includes('c');-->
<!--    // const d = this.arr.includes('d');-->
<!--    //-->
<!--    // if(a) result.push('a');-->
<!--    // if(b) result.push('b');-->
<!--    // if(c) result.push('c');-->
<!--    // if(d) result.push('d');-->
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>

</style>
