import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login.vue'
import UserMessage from '../views/userMessage.vue'
import Index from '../views/index.vue'
import ShouHu from '../views/shouhu.vue'
import RankList from '../views/rankList.vue'
import XiaoXi from '../views/xiaoxi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userMessage',
      name: 'UserMessage',
      component: UserMessage
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/rankList',
      name: 'RankList',
      component: RankList
    },
    {
      path: '/',
      name: 'XiaoXi',
      component: XiaoXi
    }
  ]
})
