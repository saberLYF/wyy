<template>
    <div class="w-screen  bg-[#f8f9fd]  dark:bg-gray-900">
      <h1 class="flex p-[1.5vw] items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex  items-center text-[3.5vw]">
          排行榜
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
        </span>
        <span @click="menu = !menu">
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] p-[1.5vw] flex items-center bg-[#f8f9fd] dark:bg-gray-900 mr-[2vw]">
        <van-swipe :show-indicators="false" :loop="false" class="w-[100vw] ">
          <van-swipe-item v-for="item in charts.creatives" :key="item.id" class="bg-[#f8f9fd] dark:bg-gray-900 p-[3vw]">
            <div class="bg-[#fff] dark:bg-[#26262e] p-[3vw] drop-shadow-[0_10px_8px_rgba(0,0,0,0.15)] rounded-[2vw]">
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
                <li v-for="(items,index) in item.resources" :key="items.id" class="flex w-[75vw] items-center relative mb-[2vw]">
                  <img :src="items.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[2vw] mr-[2vw]">
                  <span :class="[index+1 == 1 ? 'text-[#cdac69]': index+1 == 2 ? 'text-[#747ca0]' : index+1 ==  3 ? 'text-[#bd744b]' : 'text-[#747ca0]', 'text-[4vw]','font-bold',]">{{ index+1 }}</span>
                  <div class="flex ml-[3vw] flex-col justify-center">
                    <p class="text-[2.5vw] overflow-hidden whitespace-nowrap text-ellipsis w-[45vw]">{{ items.uiElement.mainTitle.title }}</p>
                    <p class="text-[1.5vw] text-[#3f4658]">{{  }}</p>
                  </div>
                  <span :class=" ['absolute','right-0',index+1==1 ? 'text-[#ec4e4d]' : 'text-[#4ca786]'] ">{{ items.uiElement.labelText.text }}</span>
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <Drawer :title="'排行榜'" :show.sync="menu" :str="'bottom'">
      <template #main>
        <ul>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="iconamoon:like" :color="col" class="w-[5vw] h-[5vw]  mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">优秀推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mdi:cancel-circle-outline" :color="col" class="w-[5vw] h-[5vw] mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">减少推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mingcute:more-4-line" :color="col" class="w-[5vw] h-[5vw]  mr-[3vw]"/>
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">更多内容</span>
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
    props:["charts",'col'],
    data(){
      return {
        menu:false,
        index:''
      }
    }
}
</script>
