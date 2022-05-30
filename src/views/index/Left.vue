<template>
    <div class="content">
        <today-topic></today-topic>
        <month-topic></month-topic>
    </div>
</template>

<script>
    import TodayTopic from '@/views/index/todayTopic.vue'
    import MonthTopic from '@/views/index/monthTopic.vue'
    export default {
        name: "Content",
        data() {
            return{

            }
        },
        components: { TodayTopic, MonthTopic },
        created(){},
        mounted() {},
        computed:{},
        methods:{},
        beforeDestroy() {},
    }
</script>

<style scoped>

</style>
