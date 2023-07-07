<template>
    <div class="w-screen  bg-[#f8f9fd]  dark:bg-gray-900">
      <h1 class="flex items-center p-[1.5vw] font-bold font-mono text-[4vw] justify-between">
        <span class="flex items-center text-[#3e465b] dark:text-[#fff]">
          新歌新碟
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]"/>
        </span>
        <span @click="menu = !menu">
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] p-[1.5vw] flex ">
        <van-swipe :show-indicators="false" :loop="false" class="w-[100vw]">
          <van-swipe-item v-for="item in customMade.creatives" :key="item.id">
            <ul>
              <li v-for="items in item.resources" :key="items.id" class="flex w-[100vw] mb-[2vw]">
                <img :src="items.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[2vw]">
                <div class="flex ml-[3vw] flex-col justify-center ">
                  <p class="text-[4vw] text-[#3e465b] dark:text-[#fff]">{{ items.uiElement.mainTitle.title }}</p>
                  <p class="text-[1.5vw]  text-[#828a97] dark:text-[#616065]">{{ items.uiElement.subTitle.title!=undefined ? items.uiElement.subTitle.title : ''  }} - {{
                    items.resourceExtInfo.artists[0].name==undefined ? '' : items.resourceExtInfo.artists[0].name }}</p>
                </div>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <Drawer :title="'新歌新碟/数字专辑'" :show.sync="menu" :str="'bottom'">
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
    props:["customMade",'col'],
    data(){
      return {
        menu:false
      }
    }

}
</script>