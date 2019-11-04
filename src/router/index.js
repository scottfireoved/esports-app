import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Community from '@/components/Community'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Shop from '@/components/Shop'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/team/profile/:user_id',
      name: 'Profile',
      component: Profile
    }, {
      path: '/community',
      name: 'Community',
      component: Community
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
    // , {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // }
    , {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
