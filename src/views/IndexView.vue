<template>
  <div class="w-screen h-screen relative">
    <div class="gradienPink">
      <!-- 头部搜索框 -->
      <headinput></headinput>
      <!-- 轮播 -->
      <bannerView :banners="bannerss" />
    </div>
    <!-- 菜单栏 -->
    <menuView :menu="menus" />
    <!-- 推荐歌单 -->
    <playlistView :propName="recommends" />
    <!-- 新歌新碟-->
    <newsong :customMade="customMades"></newsong>
    <!-- 排行榜 -->
    <leaderboard :charts="chartss"></leaderboard>
    <!-- 音乐日历 -->
    <calendar/>
    <!-- 热门话题 -->
    <hotTopic/>
  </div>
</template>
<script>
// import Vue from 'vue';
// import Vant from 'vant';
// Vue.use(Vant);
import 'vant/lib/index.css';
import _ from "lodash";
export default {
  props: ['menus', 'bannerss', 'chartss', 'customMades', 'recommends'],
  components: {
    bannerView: () => import('@/components/bannerView.vue'),
    menuView: () => import('@/components/menuView.vue'),
    playlistView: () => import('@/components/PlaylistView.vue'),
    headinput: () => import('@/components/headinputView.vue'),
    newsong: () => import('@/components/newsong.vue'),
    leaderboard: () => import('@/components/leaderboardView.vue'),
    calendar: () => import('@/components/calendarView.vue'),
    hotTopic: () => import('@/components/hotTopicView.vue'),
  },
  data() {
    return {
      activeMenuItem: '',
      playlists: [],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
  },
  async created() {

  },
}
</script>
<style>
.active {
  color: red;
}

.gradientColorStops {
  background-image: linear-gradient(to left, rgb(217, 220, 253, .7), rgba(244, 216, 239, .7));
}

.gradienPink {
  background-image: linear-gradient(to bottom, #e7e5fb, #f8f9fd);
}

.gradieninp {
  background-image: linear-gradient(to bottom, #e7e5fb, #e9e5fc);
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.menu::-webkit-scrollbar {
  height: 0px;
  width: 20px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}</style>
