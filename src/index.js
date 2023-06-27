import Vue from 'vue';
import '@/index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  components:{App},
  template: '<App/>',
  // render: (h) => h(indexView),
});
