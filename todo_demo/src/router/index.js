import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import First from '@/components/First'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  mode:'history',
  //更改mode 可以去掉‘#’
  base: '/vue/', // 加上这一行
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    }
  ]
})
