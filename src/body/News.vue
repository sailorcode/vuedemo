<template>
    <div class="body">
        <div>
            <ul>
                <li v-for="item in list">
                    <router-link :to="'/news/'+item.aid+'?title='+item.title"> {{item.title}}</router-link >
                </li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: "这是一个身体组件",
            list:[]
        }
    },
    methods:{
        getData(){
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.get(api).then(function (res) {
                if(res.body.result){
                    this.list = res.body.result
                }
            },
            function(error){
                alert(error)
            })
        }
    },
    mounted(){
        this.getData(); 
    }
}
</script>

<style scoped>
    .body{
       display: -webkit-box;
       background-color:greenyellow
    }
</style>