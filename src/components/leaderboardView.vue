<template>
    <div class="w-screen  bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex items-center text-[3.5vw]">
          排行榜
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
        </span>
        <span @click="menu = !menu">
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] flex items-center bg-[#f8f9fd] mr-[2vw]">
        <van-swipe :show-indicators="false" :loop="false" class="w-[100vw] ">
          <van-swipe-item v-for="item in charts.creatives" :key="item.id" class="bg-[#f8f9fd] p-[3vw]">
            <div class="bg-[#fff] p-[3vw] drop-shadow-[0_10px_8px_rgba(0,0,0,0.15)]">
                <h2 class="flex items-center font-bold font-mono text-[3vw]  justify-between">
                <span class="flex items-center">
                  {{ item.uiElement.mainTitle.title }}
                  <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
                </span>
                <span>
                  {{ item.uiElement.mainTitle.titleDesc }}
                </span>
              </h2>
              <ul class="top-[2vw]">
                <li v-for="items in item.resources" :key="items.id" class="flex w-[100vw] mb-[2vw]">
                  <img :src="items.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[2vw]">
                  <div class="flex ml-[3vw] flex-col justify-center">
                    <p class="text-[2.5vw] ">{{ items.uiElement.mainTitle.title }}</p>
                    <p class="text-[1.5vw] text-[#3f4658]"></p>
                  </div>
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <Drawer :title="'排行榜'" :show.sync="menu" >
      <template #main>
        <ul>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="iconamoon:like" color="#3d4456" class="w-[5vw] h-[5vw]  mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold">优秀推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mdi:cancel-circle-outline" color="#3d4456" class="w-[5vw] h-[5vw] mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold">减少推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mingcute:more-4-line" color="#3d4456"  class="w-[5vw] h-[5vw]  mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold">更多内容</span>
          </li>
        </ul>
      </template>
    </Drawer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    props:["charts"],
    data(){
      return {
        menu:false
      }
    }
}
</script>
