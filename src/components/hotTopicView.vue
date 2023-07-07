<template>
    <div class="w-screen  bg-[#f8f9fd]  dark:bg-gray-900">
      <h1 class="flex p-[1.5vw] items-center font-bold font-mono text-[2.5vw] justify-between">
        <span class="flex  items-center text-[4vw]">
          热门话题
        </span>
        <span @click="menu = !menu">
          <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
        </span>
      </h1>
      <div class="mt-[3vw] p-[1.5vw]  rounded-[1vw]">
        <ul class="flex overflow-auto menu">
          <li class="flex justify-between items-center bg-[#87a4d0] w-[75vw] p-[1vw] h-[30vw] mr-[3vw] rounded-[1.2vw]">
                <h2 class="w-[50vw] flex flex-col ml-[3vw]">
                    <div class="flex items-center">
                        <Icon icon="icon-park-outline:topic" color="#fff"  class="w-[5vw] h-[5vw]" />
                        <span class="text-[#fff] font-bold text-[2vw]">我和网易云音乐的故事</span>
                    </div>
                    <div>
                    <p><span class="text-[#ccc] text-[1vw]">22万热度</span></p>
                    <p class="text-[#fff] font-bold text-[1.5vw]">
                        AsSsZzDEcUo-:是十年呀，是3650天.87600小时-人生还有多少个十年
                    </p>
                    </div>
                </h2>
                <img src="http://p1.music.126.net/CRrwpGaLksnPTUnjwhPAvQ==/109951168675533641.jpg" alt="" class="w-[15vw] h-[15vw] mx-[3vw] rounded-[.8vw]">
            </li>
            <li class="flex justify-between items-center bg-[#919e84] w-[75vw] h-[30vw] mr-[3vw] p-[1vw] rounded-[1.2vw]">
                <h2 class="w-[50vw] flex flex-col ml-[3vw]">
                    <div class="flex items-center">
                        <Icon icon="icon-park-outline:topic" color="#fff"  class="w-[5vw] h-[5vw]" />
                        <span class="text-[#fff] font-bold text-[2vw]">我和网易云音乐的故事</span>
                    </div>
                    <div>
                    <p><span class="text-[#ccc] text-[1vw]">22万热度</span></p>
                    <p class="text-[#fff] font-bold text-[1.5vw]">
                        AsSsZzDEcUo-:是十年呀，是3650天.87600小时-人生还有多少个十年
                    </p>
                    </div>
                </h2>
                <img src="http://p1.music.126.net/CRrwpGaLksnPTUnjwhPAvQ==/109951168675533641.jpg" alt="" class="w-[15vw] h-[15vw] mx-[3vw] rounded-[.8vw]">
            </li>
            <li class="flex justify-between items-center bg-[#ff6800] w-[75vw] h-[30vw] p-[1vw] mr-[3vw] rounded-[1.2vw]">
                <h2 class="w-[50vw] flex flex-col ml-[3vw]">
                    <div class="flex items-center">
                        <Icon icon="icon-park-outline:topic" color="#fff"  class="w-[5vw] h-[5vw]" />
                        <span class="text-[#fff] font-bold text-[2vw]">我和网易云音乐的故事</span>
                    </div>
                    <div>
                    <p><span class="text-[#ccc] text-[1vw]">22万热度</span></p>
                    <p class="text-[#fff] font-bold text-[1.5vw]">
                        AsSsZzDEcUo-:是十年呀，是3650天.87600小时-人生还有多少个十年
                    </p>
                    </div>
                </h2>
                <img src="http://p1.music.126.net/CRrwpGaLksnPTUnjwhPAvQ==/109951168675533641.jpg" alt="" class="w-[15vw] h-[15vw] mx-[3vw] rounded-[.8vw]">
            </li>
        </ul>
      </div>
      <Drawer :title="'热门话题'" :show.sync="menu" :str="'bottom'">
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
        </ul>
      </template>
    </Drawer>
    </div>
</template>
<script>
    export default {
    props:['col'],
    data(){
      return {
        menu:false
      }
    },
}
</script>