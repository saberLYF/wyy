import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router'
import v_switch from '@/components/components/Switch.vue'
import Drawer from '@/components/components/slidingbar.vue'
import Lazyload from '@/components/components/Lazyload/Lazyload.vue'

Vue.component("Drawer",Drawer)
Vue.component('Icon', Icon);
Vue.component("v-switch",v_switch);
Vue.component('Lazyload',Lazyload);

// import Vuex from '@/vuex';
// Vue.use(Vuex)
// const store = new Vuex.Store({

// });
new Vue({
  el: '#app',
  router,
  components:{App},
  template: '<App/>',
});
