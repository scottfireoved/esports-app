import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Community from '@/components/Community'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/team',
      name: 'Team',
      component: Team
    }, {
      path: '/community',
      name: 'Community',
      component: Community
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
