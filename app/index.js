import './style.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './modules/router';

const app = new Vue({
  router,
  ...App
}).$mount('#app');
