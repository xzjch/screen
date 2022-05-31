<template>
    <div class="newPublish">
        <div class="title">
            最新发布
        </div>
        <div class="content">
            <ul>
                <li v-for="item in dataList">
                    <a href="">
                        <div class="wordTitle" v-if="item.type===0">{{item.title}}</div>
                        <div class="picTitle" v-if="item.type===1">
                            <div class="picBG">
                                <img :src="item.pic" alt="" width="310" height="200">
                            </div>
                            <p>{{item.title}}</p>
                        </div>
                        <div class="picTitle" v-if="item.type===2">
                            <div class="picBG">
                                <img :src="item.pic" alt="" width="310" height="200">
                            </div>
                            <p>{{item.title}}</p>
                        </div>
                        <div class="info">
                            <img src="../../assets/images/webIcon.png" alt="" width="33" height="33">
                            <span>{{item.source}}</span>
                            <div class="dateInfo">{{item.date}}</div>
                        </div>

                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newPublish",
        data() {
            return {
                dataList: [
                    {
                        title: '北京今日发布暴雨蓝色北京国际科技创新北京国际科技创新',
                        type: 0,
                        source: '客户端',
                        date: '2021-07-12 12:34:59'
                    },
                    {
                        title: '北京今日发布暴雨蓝色北京国际科技创新北京国际科技创新',
                        pic: '../../assets/images/picture.png',
                        type: 1,
                        source: '客户端',
                        date: '2021-07-12 12:34:59'
                    },
                    {
                        title: '北京今日发布暴雨蓝色北京国际科技创新北京国际科技创新',
                        type: 0,
                        source: '客户端',
                        date: '2021-07-12 12:34:59'
                    },
                    {
                        title: '北京今日发布暴雨蓝色北京国际科技创新北京国际科技创新',
                        type: 2,
                        source: '客户端',
                        date: '2021-07-12 12:34:59'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .newPublish{
        color: #fff;
        width: 1480px;

    }
    .newPublish .title{
        background: url("../../assets/images/newPublish.png") center center no-repeat;
        background-size: 100% 100%;
        font-size: 38px;
        line-height: 67px;
        height: 67px;
        text-align: center;
        font-weight: bold;
    }
    .content{
        margin-top: 36px;
    }
    .content a{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    .content ul{
        display: flex;
        justify-content: space-between;
    }
    .content ul li{
        background: url("../../assets/images/newPublishBG.png")center center no-repeat;
        background-size: 100% 100%;
        width: 358px;
        height: 427px;
        padding: 32px;
        box-sizing: border-box;
    }
    .content ul li a{
        color: #fff;
    }
    .wordTitle{
        font-size: 30px;
        line-height: 54px;
    }
    .picTitle .picBG{
        width: 310px;
        height: 200px;
        background: #000;
    }
    .info, .dateInfo{
        color: #88b5fb;
        font-size: 27px;
    }
    .info img{
        vertical-align: bottom;
        margin-right: 15px;
    }
    .dateInfo{
        margin-top: 24px;
    }
</style>
