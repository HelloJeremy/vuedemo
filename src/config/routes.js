/* eslint-disable no-new */
// 路由配置文件
// 引用模版
import index from '../page/index'
import content from '../page/content'
    //引入子路由
import Frame from '../frame/subroute'
    //引入子页面
import userInfo from '../page/user/info'
import userIndex from '../page/user/index'
import userLove from '../page/user/love'
    // 配置路由
export default [
    {
        path: '/'
        , component: index
    }
    , {
        path: '/content'
        , component: content
    },
    {
        path: '/user'
        , component: Frame
        , children: [
            {
                path: '/'
                , component: userIndex
            },
             {
                path:'/info',
                component:userInfo
             }, 
             {
                path:'/love',
                component:userLove
             },
    , ]
    }
]