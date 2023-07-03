import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router'
import v_switch from '@/components/components/Switch.vue'
import Drawer from '@/components/components/slidingbar.vue'
Vue.component("Drawer",Drawer)
Vue.component('Icon', Icon);
Vue.component("v-switch",v_switch);
new Vue({
  el: '#app',
  router,
  components:{App},
  template: '<App/>',
});
