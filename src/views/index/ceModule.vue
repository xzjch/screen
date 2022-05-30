<template>
    <div class="dataList">
        <ul>
            <li v-for="item in dataList"><span>{{ item.title }}</span><span>{{ item.amount }}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ceModule",
        data() {
            return {
                dataList: [
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                    {
                        title: '融媒体评论中心',
                        amount: 234
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .dataList ul li{
        background: url("../../assets/images/ceBG.png")center center no-repeat;
        background-size: 100% 100%;
        width: 276px;
        height: 71px;
        line-height: 71px;
        font-size: 24px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 19px;
    }
</style>
