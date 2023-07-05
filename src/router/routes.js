import IndexView from '@/views/IndexView.vue'
import SearchView from '@/views/SearchView.vue'
import SongList from '@/views/SongList.vue'
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
      {
        path: '/SongList',
        component: SongList,
      },
      {
        path:'/Login',
        component:()=>import('@/views/Login.vue')
      },
  ];