<template>
  <div class="w-screen h-screen relative">
    <!-- 头部搜索框 -->
    <div class="gradienPink">
      <div :class="['w-[100vw]','flex','justify-between',' p-[1.5vw]','fixed','top-0','z-10', true ? 'gradieninp':'bg-[#f8f9fd]']" >
        <Icon icon="ic:round-menu" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" />
        <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
          class="w-[6vw] h-[6vw] mr-[-15vw] mt-[1.75vw] z-[1]" />
        <input type="text"
          class="w-[75vw] h-[9vw] rounded-[5vw] outline-none border border-solid  border-gray-400 px-[10vw] gradientColorStops text-[3.5vw]">
        <Icon icon="tabler:scan" color="#ccc" class="w-[6vw] h-[6vw] ml-[-15vw] mt-[1.75vw]" />
        <Icon icon="ph:microphone-light" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" />
      </div>
      <!-- 轮播 -->
      <div class="p-[1.5vw] mt-[12vw]">
        <van-swipe class="my-swipe rounded-[5vw]" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in banners" :key="item.id">
            <img :src="item.pic" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 菜单栏 -->
    <div class="w-screen overflow-hidden bg-[#f8f9fd]">
      <ul class=" p-[1.5vw] overflow-auto flex justify-between items-center menu">
        <template v-for="(item, index) in menu">
          <li v-if="true" :key="item.id" class="flex flex-col items-center mr-[5vw]">
            <Icon :icon="icon[index]" color="red" width="36" height="36" class="w-[5vw] h-[5vw]" />
            <p class="text-[#969aa3] text-[1.5vw] w-[15vw] text-center">{{ item.name }}</p>
          </li>
        </template>
      </ul>
    </div>
    <!-- 推荐歌单 -->
    <div class="w-screen overflow-hidden bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex items-center">
          推荐歌单
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
        <span>
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw]">
        <ul class="overflow-auto flex justify-between menu">
          <template v-for="item in recommend">
            <li :key="parseInt(item.creativeId)" class="flex flex-col items-center mr-[5vw] relative">
              <img :src="item.uiElement.image.imageUrl" alt="" class="w-[35vw] h-[35vw] rounded-[3vw]">
              <p class="text-[3vw] w-[30vw] text-[#3f4658] font-bold">{{ item.uiElement.mainTitle.title }}</p>
              <Icon icon="ph:play-fill" color="white" width="36" height="36"
                class="absolute w-[4vw] h-[4vw] bottom-[10vw] right-[3vw] mr-[2vw]" />
              <span class="absolute text-[#fff] text-[2vw] flex right-[2vw] top-[1.5vw] items-center font-bold">
                <Icon icon="ph:play-fill" color="white" width="36" height="36" class="w-[2.5vw] h-[2.5vw]" />
                <template v-if="item.resources[0].resourceExtInfo.playCount < 100000000 && item.resources[0].resourceExtInfo.playCount > 9999">
                  {{ Math.floor(item.resources[0].resourceExtInfo.playCount  / 10000) }}万
                </template>
                <template v-else-if="item.resources[0].resourceExtInfo.playCount > 99999999">
                  {{ Math.floor(item.resources[0].resourceExtInfo.playCount  / 100000000) }}亿
                </template>
                <template v-else>
                  {{item.resources[0].resourceExtInfo.playCount}}
                </template>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="w-screen overflow-hidden bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex items-center">
          {{ customMade.uiElement.subTitle.title }}/{{ customMade.creatives[4].uiElement.mainTitle.title }}
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
        </span>
        <span>
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] flex overflow-auto">
          <ul v-for="item in customMade.creatives" :key="item.id" class="w-[100%] menu">
            <li v-for="items in item.resources" :key="items.id" class="flex w-[100vw] mb-[2vw]" >
              <img :src="items.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[2vw]">
              <div>
                <p class="w-[75vw]">{{ items.uiElement.mainTitle.title }}</p>
                <p class="w-[75vw]">{{ items.uiElement.subTitle.title }}</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Vant, { treeSelectProps } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { fetchHomePage, fetchHomeDragonBall } from "@/request/index"
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '',
      playlists: [],
      banners: [],
      icon: ["tabler:calendar", "ph:radio-fill", "icon-park-outline:music-menu", "icon-park-solid:ranking-list", "mdi:audio-book", "ic:outline-live-tv", "vaadin:user-heart", "bi:file-earmark-music", "mdi:hammer-sickle", "solar:gamepad-bold"],
      recommend: [],
      customMade:[],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
  },
  async created() {
    const res = await fetchHomePage().catch((err) => console.log(err));
    this.banners = res.data.data.blocks[0].extInfo.banners;
    this.recommend = res.data.data.blocks[1].creatives;
    this.customMade = res.data.data.blocks[5];
    console.log(this.customMade.creatives[0].resources[0].uiElement.mainTitle.title);

    const ress = await fetchHomeDragonBall().catch((err) => console.log(err));
    this.menu = ress.data.data;

  },
  //监控某个响应数据发生变化之后执行指令的逻辑
  //methods、beforeCreate、created、watch中的this指向vm
  watch: {
    activeMenuItem: {
      async handler(newCat) {
        const res = await fetchPlaylists(newCat)
        this.playlists = res.data.playlists;
      },
    },
    immediate: true

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
</style>
