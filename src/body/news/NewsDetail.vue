<template>
    <div>
        <div>{{ $route.query.title}}的详情</div>
        <div v-html="news.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            news:{}
        }
    },
    methods:{
        getDetail(aid){
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
                this.$http.get(api).then((res)=> {
                        if(res.body.result){
                            console.log(res.body.result);
                            this.news = res.body.result[0]
                        }
                    },
                    (error)=>{
                        alert(error)
                    })
            }
    },
    mounted(){
        console.log('组件刷新');
        //this.getDetail(this.$route.params.aid);
    },
    updated(){
        console.log('数据刷新');
        //this.getDetail(this.$route.params.aid);
    }
   
}
</script>

<style>

</style>