import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CSS3 from '@/components/CSS3'
import ToDoList from '@/components/todolist/ToDoList'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/gotoCSS3",
      name:'CSS3',
      component: CSS3
    },
    {
      path:"/goToDoList",
      name:'ToDoList',
      component: ToDoList
    },
    {
      path:"/goLayout",
      name:'Layout',
      component: Layout
    }
  ]
})
