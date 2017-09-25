<template>
    <div>
        <div v-for="item in list">
            <div>
               <h1>标题：{{item.title}}</h1> 
            </div>
            <div v-for="(item,index) in item.images" v-if="index < 1">
                <img :src="attachImageUrl(item)" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// import $ from 'vue-resource'
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
            // https: //news-at.zhihu.com/api/4/news/latest
            axios.get('/api/news/latest').then(res =>{
                    console.log(res);
                    this.list = res.data.stories;
            })
        },
        attachImageUrl(srcUrl){
            if(srcUrl !== undefined){
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
                                //    https://images.weserv.nl/?url=pic3.zhimg.com/v2-4e42c90de477749c41285bf0939eaffe.jpg                                 //images.weserv.nl/?url
                                //    https://images/weserv.nl/?url=pic4.zhimg.com/v2-501dd4e67100cb240b7357f84c4b252f.jpg
            }
        },
        replace(url){
            return str.replace(/http\w(0,1):\/\/p/g,'//images.weserv.nl/?url=p')
        }
    }
  
}
</script>
<style>

</style>
