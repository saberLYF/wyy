import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Drawer from '@/components/components/slidingbar.vue'
Vue.component("Drawer",Drawer)
// Vue.use(ElementUI);
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  components:{App},
  template: '<App/>',
  render: h => h(App)
  // render: (h) => h(indexView),
});
