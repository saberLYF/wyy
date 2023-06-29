<template>
     <div class="w-screen  bg-[#f8f9fd] p-[1.5vw]">
      <h1 class="flex items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex items-center text-[3.5vw]">
          音乐日历
          <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw]" />
        </span>
        <span @click="menu = !menu">
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] items-center bg-[#fff] mr-[2vw] p-[3vw] rounded-[1vw]">
        <ul v-for="itme in startTime.calendarEvents" :key="itme.id">
            <li class="flex justify-between items-center border-solid border-b-[.1vw] border-gray-200 py-[3vw]">
                <div>
                    <p><span>{{ itme.tag }}</span></p>
                    <p class="text-[#000] font-bold text-[2.5vw]">{{ itme.title }}</p>
                </div>
                <img :src="itme.imgUrl" alt="" class="w-[15vw] h-[15vw] rounded-[.8vw]">
            </li>
        </ul>
      </div>
      <Drawer :title="'音乐日历'" :show.sync="menu" >
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
import { fetchStartTime } from "@/request/index"
export default {
    data() {
        return {
            startTime:[],
            menu:false
        }
    },
    async created() {
        const res = await  fetchStartTime().catch((err) => console.log(err));
        this.startTime = res.data.data;
        console.log(this.startTime);
    },
}
</script>