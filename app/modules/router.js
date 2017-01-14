import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './home/home.vue'
import About from './about/about.vue';
import Record from './record/record.vue';

export default new Router({
  routes: [
    { path: '/record/:id', component: Record },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' }
  ],
})
