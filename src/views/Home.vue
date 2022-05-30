<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <img alt="logo" src="../assets/images/logo.png">
    <div class="main">
      <left></left>
      <middle></middle>
      <right></right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Left from '@/views/index/Left.vue'
import Middle from '@/views/index/Middle.vue'
import Right from '@/views/index/Right.vue'

export default {
  name: 'home',
  components: {
    Left,Middle,Right
  }
}
</script>
<style scoped>
  .home{
    position: relative;
    padding: 146px 60px 40px 60px;
    background: #070c15 url("../assets/images/IndexLineBG.png") center center no-repeat;
    background-clip: padding-box;
    box-sizing: border-box;
    width: 3200px;
    height: 1890px;
  }
  .home img{
    position: absolute;
    top: 0;
    left: 0;
  }
  .main{
    display: flex;
    justify-content: space-between;
  }
</style>
