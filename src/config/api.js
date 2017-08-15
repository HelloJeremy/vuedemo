import axios from 'axios'
//全局方法定义
export default {
    sendGetRequest(url) {
    return axios.get(url)
}}