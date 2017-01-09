import './style.scss';

import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './modules/routes';

console.log('routes', routes);

// const router = new VueRouter({
//     routes
// });

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
}).$mount('#app');
