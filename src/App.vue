<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <br>
<!--    <intro/>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*overflow: hidden;*/
  /*max-width: 800px;*/
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import NavBar from "@/components/navBar";
// import Intro from "@/components/intro";
export default {
  components: { NavBar}
}
</script>
