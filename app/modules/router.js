import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutView from './about/view.vue';
import RecordsView from './records/view.vue';
import Records from './records/records.vue';
import RecordDetail from './records/detail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: AboutView },
    { path: '/records', component: RecordsView,
      children: [
        { path: '', component: Records },
        { path: ':id', component: RecordDetail },
      ]
    }
  ]
})
