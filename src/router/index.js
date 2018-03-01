import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login.vue'
import UserMessage from '../views/userMessage.vue'
import Index from '../views/index.vue'
import ShouHu from '../views/shouhu.vue'
import RankList from '../views/rankList.vue'
import XiaoXi from '../views/xiaoxi.vue'
import User from '../views/user.vue'
import Chat from '../views/chat.vue'
import Friend from '../views/friend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/xiaoxi',
      name: 'XiaoXi',
      component: XiaoXi
    },
    {
      // path: '/shouhu',
      path: '/shouhu/:id',
      name: 'ShouHu',
      component: ShouHu
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    }
  ]
})
