<template>
  <div :class="{ 'dark': switchs }" id="wrap">
    <div class="w-[100vw] overflow-hidden bg-white text-[#000] relative dark:bg-gray-900 dark:text-[#fff]">
      <div class="gradienPink">
        <!-- 头部搜索框 -->
        <headinput :cols.sync="cor" @clicks="gets">
          <template #val>
            <v-switch v-model="switchs" class="mr-[3vw]"></v-switch>
          </template>
        </headinput>
        <!-- 轮播 -->
        <bannerView :banners="bannerss" />
      </div>
      <!-- 菜单栏 -->
      <menuView :menu="menus" />
      <!-- 推荐歌单 -->
      <playlistView :propName="recommends" :col="cor"/>
      <!-- 新歌新碟-->
      <newsong :customMade="customMades" :col="cor"></newsong>
      <!-- 排行榜 -->
      <leaderboard :charts="chartss" :col="cor"></leaderboard>
      <!-- 音乐日历 -->
      <calendar :col="cor"/>
      <!-- 热门话题 -->
      <hotTopic :col="cor"/>
    </div>
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
      header: '推荐歌单',
      switchs: false,
      cor:'#3d4456'
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
    gets(data){
      this.cor = data
      console.log(data)
    }
  },
  async created() {

  },
}
</script>
<style>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  padding: 0;
  margin: 0;
}

.active {
  color: red;
}

.gradientColorStops {
  background-image: linear-gradient(to left, rgb(217, 220, 253, .7), rgba(244, 216, 239, .7));
}

.gradientColor {
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
}
/* .dark {
  background-color: #333;
  color: #fff;
} */
</style>
