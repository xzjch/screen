<template>
    <div class="todayTopic">
        <h3>今日选题</h3>
        <ul>
            <li v-for="(item, index) in dataList" :class="[dataListIndex===index ? 'on': '', 'clearBoth']">
                <a class="clearBoth" :href="item.url">
                    <i>{{ pageSize * currentPage + index + 1 }}</i>
                    <h4>{{ item.title }}</h4>
                    <div class="clearBoth">
                        <span>{{ item.department }}</span>
                        <span>{{ item.exect }}</span>
                    </div>
                </a>
            </li>
        </ul>
        <el-pagination
                :page-size="pageSize"
                :current-page="currentPage + 1"
                :pager-count="pagerCount"
                @current-change="currentChange"
                layout="prev, pager, next"
                :total="total">
        </el-pagination>
    </div>


</template>

<script>
    export default {
        name: "todayTopic",
        data() {
            return {
                pageSize: 6,
                currentPage: 0,
                total: 100,
                pagerCount: 3,
                dataListIndex: 3,
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
                    },
                    {
                        title:'北京今日发布暴雨蓝色北京国际创新...',
                        department: '教育部部门名称',
                        exect: '执行人名称'
                    },
                ]
            }
        },
        methods: {
            currentChange(index){
                console.log("currentChange:",index);
            }
        }
    }
</script>

<style scoped>
    .todayTopic{
        background: url("../../assets/images/todayTopicBG.png") center center no-repeat;
        width: 760px;
        height: 1028px;
        position: relative;
        box-sizing: border-box;
        padding: 87px 30px 62px 51px;
    }
    .todayTopic h3{
        font-size: 38px;
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
    }
    ul li {
        padding: 26px 0;
    }
    ul li.on{
         background-image: linear-gradient(to right, rgba(7, 12, 21 , 0.8), rgba(75, 43, 36, 1));
    }
    ul li.on h4{
        color: #eacb42;
    }
    ul li.on i{
        background: url("../../assets/images/todayTopicIndexBgOn.png") center center no-repeat;
        background-size: 100% 100%;
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
