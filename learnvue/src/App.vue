<template>
  <div id="app">
    <router-link to="/" tag="li" exact> 首页 </router-link>
    <router-link to="/daily" tag="div" active-class="starkwang"> <a> 知乎日报</a> </router-link>
    <router-link to="/blog" tag="div" active-class="starkwang"> <a> 博客</a> </router-link>
    <router-link to="/work" tag="div" active-class="starkwang"> <a> 工作页面</a> </router-link>
    <router-link to="/study" > <a> 学习页面</a> </router-link>
    <router-link to="/about" > <a> 关于我</a> </router-link>

    <!-- <a href="/">首页</a>
    <a href="/work">工作页面</a>
    <a href="/study">学习页面</a> -->
    <span>Hi I'm stark wang</span>
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
.router-link-active{
  background-color: rosybrown;
}
.starkwang{
  background-color: blue;
}
.shudong{
  background-color: yellowgreen;
}
</style>
