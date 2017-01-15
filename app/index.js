import './style.scss';

import Vue from 'vue';
import router from './modules/router';
import App from './app.vue';

new Vue({
  router,
  ...App
}).$mount('#app');
