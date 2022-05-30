import axiosLocalhost from 'axios'
import axios from 'axios'
import router from '../../router'

axiosLocalhost.defaults.baseURL='./api';

//本地配置
var urlPrefix = '';
var axiosSwitch = axiosLocalhost;

//服务器配置
// var urlPrefix = 'http://........';
// var axiosSwitch = axios;

var vm = this;
//请求拦截
// axiosSwitch.interceptors.response.use(res=>{
//     // router.push({path:'/login'});
//     if (res.data!=undefined){
//         if (res.data.code == "801" || res.data.code == "802"){
//             console.log("接口访问异常",res.data.code,res.data.msg);
//             router.push({path:'/login'});
//         }
//     }
//     return res;
// },err=>{
//     console.log("响应失败",err);
//     return err
// })


var apiList = {
    login:'/datas/api/login',//登录
};

function getUrl(key) {
    return urlPrefix + apiList[""+ key + ""];
}
function getAxios() {
    return axiosSwitch;
}

export {
    getUrl,
    getAxios,
}
