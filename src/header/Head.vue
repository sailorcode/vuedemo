<template>
    <div class="head">
        {{message}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: "这是一个头部组件"
        }
    }
}
</script>

<style scoped>
    .head{
        height: 100px;
        background-color: brown
    }
</style>