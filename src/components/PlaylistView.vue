<template>
    <div class="w-screen overflow-hidden bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex items-center text-[3.5vw]">
          推荐歌单
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
        <span>
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw]">
        <ul class="overflow-auto flex justify-between menu">
          <template >
            <li  class="flex flex-col items-center mr-[5vw] h-[45vw] relative" v-for="item in propName" :key="item.id" >
              <img :src="item.uiElement.image.imageUrl" alt="" class="w-[40vw] h-[35vw] rounded-[3vw] z-10 mt-[2vw]">
              <span class="w-[25vw] flex h-[3vw] rounded-[4vw] absolute top-[1.2vw] z-[1] bg-slate-400"></span>
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
    </div>
</template>
<script>
export default {
    props: ['propName'],
}
</script>