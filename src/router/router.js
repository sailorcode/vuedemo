import Vue from 'vue';
/**
使用路由:1.cnpm install vue-router 
使用路由:2.引入 import VueRouter from 'vue-router';
*/
import VueRouter from 'vue-router';

/**使用路由:3.使用插件 Vue.use(VueRouter) */
Vue.use(VueRouter)

/**使用路由:4.引入组件  */
import Todo from '../body/Todo.vue';
import News from '../body/News.vue';
import NewsDetail from '../body/news/NewsDetail.vue';

/**使用路由:5.定义路由 */
const routes = [
    {path:'/todo', component:Todo},
    {path:'/news',component:News,
     children:[
       {path:':aid',component:NewsDetail}
     ]
    },
  ]

/** 使用路由:6. 创建 router 实例，然后传 `routes` 配置
你还可以传别的配置参数, 不过先这么简单着吧。
最后在app.vue <router-view></router-view>
*/
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router