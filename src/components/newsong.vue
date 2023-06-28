<template>
    <div class="w-screen  bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[3.5vw] justify-between">
        <span class="flex items-center" v-if="customMade.length != 0">
          {{ customMade.uiElement.subTitle.title }}/{{ customMade.creatives[4].uiElement.mainTitle.title }}
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]"/>
        </span>
        <span>
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] flex ">
        <van-swipe :show-indicators="false" :loop="false" class="w-[100vw]">
          <van-swipe-item v-for="item in customMade.creatives" :key="item.id">
            <ul>
              <li v-for="items in item.resources" :key="items.id" class="flex w-[100vw] mb-[2vw]">
                <img :src="items.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[2vw]">
                <div class="flex ml-[3vw] flex-col justify-center ">
                  <p class="text-[4vw] ">{{ items.uiElement.mainTitle.title }}</p>
                  <p class="text-[1.5vw] text-[#3f4658]" v-if="items.uiElement.subTitle != undefined">{{ items.uiElement.subTitle.title }} - {{
                    items.resourceExtInfo.artists[0].name }}</p>
                </div>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    props:["customMade"]
}
</script>