import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import First from '@/components/First'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'

import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  mode:'history',
  //更改mode 可以去掉‘#’
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    }
  ]
})
