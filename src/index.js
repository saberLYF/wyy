import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router'
import v_switch from '@/components/components/Switch.vue'
import Drawer from '@/components/components/slidingbar.vue'
import Lazyload from '@/components/components/Lazyload/Lazyload.vue'
import setUser from '@/components/components/setUser/setUser.vue'
import Vuex from '@/vuex/_index';
Vue.use(Vuex);
Vue.component("Drawer",Drawer)
Vue.component('Icon', Icon);
Vue.component("v-switch",v_switch);
Vue.component('Lazyload',Lazyload);
Vue.component('setUser',setUser);

// import Vuex from '@/vuex';
// Vue.use(Vuex)
// const store = new Vuex.Store({

// });
const store = new Vuex.Store({
  state:{
    count:123,
    list:[123],
  }
})
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components:{App},
  template: '<App/>',
});
