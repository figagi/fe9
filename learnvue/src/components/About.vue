<template>
    <div>
        <h1>{{msg}}</h1>
        <router-link :to="{name:'blog'}" >博客</router-link>
        <router-link :to="{name:'info'}" >我的信息</router-link>
        <router-view> </router-view>
    </div>
</template>

<script>
export default {
    name:'About',
    data(){
        return{
            msg:'这个关于我的页面'
        }
    }
}
</script>

<style>

</style>


