<template>
  <div class="w-screen overflow-hidden bg-[#f8f9fd] p-[1.5vw]">
    <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
      <span class="flex items-center text-[3.5vw]">
        推荐歌单
        <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
      </span>
      <span @click="menu = !menu">
        <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
      </span>
    </h1>
    <div class="mt-[3vw] flex">
      <!-- <div class=" relative w-[40vw] h-[35vw]">
        <template v-for="(item, index) in Personalized">
          <div v-if="index < 3" class="flex absolute flex-col items-center mr-[5vw] h-[45vw] " :key="item.id">
            <img :src="item.picUrl" alt="" class="w-[30vw] h-[35vw] rounded-[3vw]">
            <p>{{ item.name }}</p>
          </div>
        </template>
      </div> -->
      <ul class="overflow-auto flex justify-between menu">
        <!-- resources -->
        <template>
          <li class="flex flex-col items-center mr-[5vw] h-[45vw] relative">
            <div class="relative overflow-hidden w-[30vw] h-[35vw]">
              <template v-for="(item, index) in Personalized">
                <div v-if="index < 3" class="" :key="item.id">
                  <img :src="item.picUrl" alt="" class="w-[30vw] h-[35vw] rounded-[3vw]">
                  <p>{{ item.name }}</p>
                </div>
              </template>
            </div>
          </li>
          <li class="flex flex-col items-center mr-[5vw] h-[45vw] relative" v-for="item in propName" :key="item.id">
            <img :src="item.uiElement.image.imageUrl" alt="" class="w-[40vw] h-[35vw] rounded-[3vw] z-10 mt-[2vw]">
            <span class="w-[25vw] flex h-[3vw] rounded-[4vw] absolute top-[1.2vw] z-[1] blg"></span>
            <p class="text-[3vw] w-[30vw] text-[#3f4658] font-bold">{{ item.uiElement.mainTitle.title }}</p>
            <Icon icon="ph:play-fill" color="white" width="36" height="36"
              class="absolute w-[4vw] h-[4vw] bottom-[10vw] right-[3vw] mr-[2vw]" />
            <span class="absolute text-[#fff] text-[2vw] flex right-[2vw] top-[1.5vw] items-center font-bold">
              <Icon icon="ph:play-fill" color="white" width="36" height="36" class="w-[2.5vw] h-[2.5vw]" />
              <template
                v-if="item.resources[0].resourceExtInfo.playCount < 100000000 && item.resources[0].resourceExtInfo.playCount > 9999">
                {{ Math.floor(item.resources[0].resourceExtInfo.playCount / 10000) }}万
              </template>
              <template v-else-if="item.resources[0].resourceExtInfo.playCount > 99999999">
                {{ Math.floor(item.resources[0].resourceExtInfo.playCount / 100000000) }}亿
              </template>
              <template v-else>
                {{ item.resources[0].resourceExtInfo.playCount }}
              </template>
            </span>
          </li>
        </template>
      </ul>
    </div>
    <Drawer :title="'推荐歌单'" :show.sync="menu">
      <template #main>
        <ul>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="iconamoon:like" color="#3d4456" class="w-[5vw] h-[5vw]  mr-[3vw]" />
            <span class="text-[3vw] text-[#3d4456] font-bold">优秀推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mdi:cancel-circle-outline" color="#3d4456" class="w-[5vw] h-[5vw] mr-[3vw]" />
            <span class="text-[3vw] text-[#3d4456] font-bold">减少推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mingcute:more-4-line" color="#3d4456" class="w-[5vw] h-[5vw]  mr-[3vw]" />
            <span class="text-[3vw] text-[#3d4456] font-bold">更多内容</span>
          </li>
        </ul>
      </template>
    </Drawer>
  </div>
</template>
<script>
import { fetchPersonalized } from "@/request/index.js"
export default {
  props: ['propName'],
  data() {
    return {
      menu: false,
      Personalized: {}
    }
  },
  async created() {
    const res = await fetchPersonalized().catch((err) => console.log(err));
    this.Personalized = res.data.result;
    console.log(this.Personalized)
  },
}
</script>
<style>
.blg {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.25) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  color: rgb(200, 200, 200);
}
</style>