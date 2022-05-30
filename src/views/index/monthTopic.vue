<template>
    <div class="monthTopic">
        <h3>本月重点选题</h3>
        <p>融媒体新闻中心4月份重点选题</p>
        <ul>
            <li v-for="(item, index) in dataList" class="clearBoth">
                <a class="clearBoth" :href="item.url">
                    <i>{{ index + 1 }}</i>
                    <h4>{{ item.title }}</h4>
                    <div class="clearBoth">
                        <span>{{ item.department }}</span>
                        <span>{{ item.exect }}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "monthTopic",
        data() {
            return {
                dataList:[
                    {
                        title:'北京今日发布暴雨蓝色北京国际创新...',
                        department: '教育部部门名称',
                        exect: '执行人名称',
                        url: ''
                    },
                    {
                        title:'北京今日发布暴雨蓝色北京国际创新...',
                        department: '教育部部门名称',
                        exect: '执行人名称'
                    },
                    {
                        title:'北京今日发布暴雨蓝色北京国际创新...',
                        department: '教育部部门名称',
                        exect: '执行人名称'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .monthTopic{
        background: url("../../assets/images/monthTopicBG.png") center center no-repeat;
        width: 760px;
        height: 596px;
        position: relative;
        box-sizing: border-box;
        padding: 87px 30px 62px 51px;
        margin-top: 80px;
    }
    .monthTopic h3{
        font-size: 38px;
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
    }
    .monthTopic p{
        color: #4afffd;
        font-size: 28px;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
    }
    .monthTopic ul{
        margin-top: 50px;
    }
    ul li {
        padding: 26px 0;
    }
    ul li h4{
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 26px;
        float: right;
        width: calc(100% - 104px);
        color: #fff;
    }
    ul li i{
        float: left;
        width: 74px;
        height: 74px;
        display: flex;
        margin-right: 30px;
        justify-content: center;
        align-items: center;
        color: #000;
        background: url("../../assets/images/todayTopicIndexBg.png") center center no-repeat;
        background-size: 100% 100%;
    }
    ul li a {
        display: block;
        width: 100%;
        height: 100%;
    }
    ul li a div{
        float: right;
        width: calc(100% - 104px);
    }
    ul li span{
        font-size: 28px;
        color: #88b5fb;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
        line-height: 28px;
        float: left;
    }
</style>
