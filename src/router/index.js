import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/layout/Main';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
            path: 'reverse-time-counter',
            name: 'ReverseTimeCounter',
            component: () => import('@/views/custom-components/ReverseTimeCounter')
        }
      ]
    }
  ]
})
