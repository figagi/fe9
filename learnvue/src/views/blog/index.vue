<template>
    <div>
        <div v-for="item in list">
            <div>
               <h1>标题：{{item.title.rendered}}</h1> 
            </div>
            <div v-html="item.excerpt.rendered">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            title:'',
            content:'',
            list:''
        }
    },
    created:function(){
        this.getBlogList()
    },
    methods:{
        getBlogList(){
            axios.get('http://blog.shudong.wang/wp-json/wp/v2/posts').then(res =>{
                    console.log(res);
                    this.list = res.data;
            })
        }
    }
  
}
</script>
<style>

</style>
