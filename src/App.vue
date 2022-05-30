<template>
  <div id="app">
    <div id="nav"><router-view/></div>
  </div>
</template>
<script>
  import {resizeHome,resizeSmall,resizeTest} from '@/assets/js/resizes.js'
  export default {
    name: "App",
    created() {
      if(this.$route.path == "/"){
        resizeHome()
      }else {
        resizeSmall()
      }
      this.$router.beforeEach((to, from, next) => {
        // resizeHome()
        // resizeSmall()
        if(to.name == "home"){
          resizeHome()
        }else{
          resizeSmall()
        }
        next();
      });
    },
  };
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
