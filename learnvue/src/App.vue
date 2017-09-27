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

    <div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
  </span>

  <i class="el-icon-edit"></i>
  <i class="el-icon-share"></i>
  <i class="el-icon-delete"></i>
  <el-button type="primary" icon="search">搜索</el-button>

  <Datetime/>
  <Datetime/>
  <Upload></Upload>
  
</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Datetime from '@/components/Datetime'
import Upload from '@/components/Upload'
export default {
  name: 'app',
  components:{
    Datetime,
    Upload
  }
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
