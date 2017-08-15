<!-- 项目入口文件 -->
<template>
    <div>
        <div>helloVue_项目入口</div>   
        <router-view 
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
        </router-view>
    </div>
</template>
<script>
export default {
 /* components: {}*/
}
</script>
<style lang='scss'>
    @import './style/scss/style'
</style>
<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
