/*
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-05-22 12:57:20
 * @LastEditTime: 2020-11-30 21:40:33
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import First from '@/components/First'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    //更改mode 可以去掉‘#’
    base: '/todo/', // 加上这一行
    routes: [{
        path: '/',
        name: 'First',
        component: First
    }]
})