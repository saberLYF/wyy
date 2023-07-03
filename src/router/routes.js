import IndexView from '@/views/IndexView.vue'
import SearchView from '@/views/SearchView.vue'
export default [
    // 路径重定向
    {
      path: '/',
      redirect: '/IndexView',
    },
    {
      path: '/IndexView',
      component: IndexView,
    },
    {
        path: '/SearchView',
        component: SearchView,
      },
  ];