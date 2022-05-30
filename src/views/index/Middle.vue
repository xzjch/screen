<template>
    <div class="content">
        <div class="top">
            <div class="content-item title">中教智融云</div>
            <ce-module class="content-item ce"></ce-module>
        </div>
        <!--<main-content></main-content>-->
        <new-publish></new-publish>
    </div>
</template>

<script>
    import MainContent from '@/views/index/mainContent.vue'
    import NewPublish from '@/views/index/newPublish.vue'
    import CeModule from '@/views/index/ceModule.vue'
    export default {
        name: "Content",
        data() {
            return{

            }
        },
        components: { MainContent, NewPublish, CeModule },
        created(){},
        mounted() {},
        computed:{},
        methods:{},
        beforeDestroy() {},
    }
</script>

<style scoped>
    .content{
        color: #fff;
        position: relative;
    }
    .content .content-item{
        position: absolute;
    }
    .content .top{
        height: 1170px;
    }
    .content .title{
        font-size: 46px;
        font-weight: bold;
        left: 632px;
        top: 460px;
    }
    .ce{
        top: 0;
        left: -10px;
    }
</style>
