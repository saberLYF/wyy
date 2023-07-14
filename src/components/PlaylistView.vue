<template>
  <div class="w-screen overflow-hidden bg-[#f8f9fd] dark:bg-gray-900 ">
    <h1 class="flex items-center font-bold font-mono text-[4vw] p-[1.5vw] justify-between">
      <span class="flex items-center text-[4vw]">
        推荐歌单
        <Icon icon="mingcute:right-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
      </span>
      <span @click="menu = !menu">
        <Icon icon="ri:more-2-fill" color="#51596c" width="36" height="36" class="w-[3vw] h-[3vw] " />
      </span>
    </h1>
    <div class="mt-[1.5vw] p-[1.5vw] flex">
      <ul class="overflow-auto flex justify-between menu">
        <template>
          <li class="flex flex-col items-center mr-[5vw] relative">
            <Icon icon="grommet-icons:power-cycle" color="white" width="36" height="36"
              class="absolute w-[4vw] h-[4vw] top-[3vw] right-[2vw] mr-[2vw] z-[2]" />
            <div class="relative overflow-hidden w-[30vw] h-[30vw] mt-[2vw]">
              <transition name="abc">
                <div v-if="show" class="absolute ">
                  <img :src="imga[n]" alt="" class="w-[30vw] h-[30vw] rounded-[1.5vw]">
                </div>
              </transition>
              <transition name="abc">
                <div v-if="!show" class="absolute">
                  <img :src="imga[y]" alt="" class="w-[30vw] h-[30vw]  rounded-[1.5vw]">
                </div>
              </transition>
            </div>
            <transition name="abcd">
              <p class="text-[3vw] w-[30vw] text-[#3f4658] dark:text-[#fff] font-bold">{{ names[x] }}</p>
            </transition>
          </li>
          <li class="flex flex-col items-center mr-[5vw] relative" v-for="(item, index) in propName"
            :key="item.id" @click="getSonglist(index)">
            <img :src="item.uiElement.image.imageUrl" alt="" class="w-[30vw] h-[30vw] rounded-[1.5vw] mt-[2vw] z-[1]">
            <span class="w-[25vw] flex h-[3vw] rounded-[4vw] absolute top-[1.2vw] dark:bg-[#27272f] blg z-[0]"></span>
            <p class="text-[3vw] w-[30vw] text-[#3f4658] dark:text-[#fff] font-bold">{{ item.uiElement.mainTitle.title }}
            </p>
            <Icon icon="ph:play-fill" color="white" width="36" height="36"
              class="absolute w-[4vw] h-[4vw] top-[25vw] right-[1.5vw] mr-[2vw] z-[2]" />
            <span class="absolute text-[#fff] text-[2vw] flex right-[2vw] top-[3vw] items-center font-bold z-[2]">
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
    <Drawer :title="'推荐歌单'" :show.sync="menu" :str="'bottom'">
      <template #main>
        <ul>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="iconamoon:like" :color="col" class="w-[5vw] h-[5vw]  mr-[3vw]" />
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">优秀推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mdi:cancel-circle-outline" :color="col" class="w-[5vw] h-[5vw] mr-[3vw] dark:text-white" />
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">减少推荐</span>
          </li>
          <li class="flex items-center mb-[2vw]">
            <Icon icon="mingcute:more-4-line" :color="col" class="w-[5vw] h-[5vw]  mr-[3vw]" />
            <span class="text-[3vw] text-[#3d4456] font-bold dark:text-[#fff]">更多内容</span>
          </li>
        </ul>
      </template>
    </Drawer>
  </div>
</template>
<script>
import { fetchPersonalized } from "@/request/index.js"
export default {
  props: ['propName', 'col','pages'],
  data() {
    return {
      menu: false,
      Personalized: {},
      names: [],
      img: [],
      imga: [],
      show: true,
      n: 0,
      y: 1,
      x: 0,
      page: [],
      flag:false
    }
  },
  async created() {
    const res = await fetchPersonalized()
      this.Personalized = res.data.result;
      for (let i = 0; i < 3; i++) {
        this.names.push(this.Personalized[i].name);
        this.img.push(this.Personalized[i].picUrl);
      }
      for (let i = 0; i < 3; i++) {
        this.imga.push(this.img[i])
      }
      this.flag=true

    setInterval(() => {
      this.show = !this.show
      this.x >= 2 ? this.x = 0 : this.x++;
      if (this.show == true) {
        this.n++;
        if (this.n >= 3) {
          this.n = 0
        }
      } else {
        this.y++
        if (this.y >= 3) {
          this.y = 0
        }
      }
    }, 4000)
  },
  watch: {
    // Personalized(newVal) {
    //   console.log(newVal);

    // }
  },
  methods: {
    getSonglist(index) {
      console.log(111);
      console.log(index);
      if (this.flag && index!=undefined) {
        console.log(this.pages);
        const id = encodeURIComponent(this.pages[index]);
        this.$router.push({
          path: '/SongList',
          query: {
            id
          }
        });
      }else{
        console.log('未访问到数据');
      }
    }
  }
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

.abc-enter {
  transform: translateY(100%) scale(0.7);
  transform-origin: center;
}

.abc-enter-active {
  transition: all ease-in-out 1.2s;
}

.abc-enter-to {
  transform: translateY(0) scale(1);
  transform-origin: center;
}

.abc-leave {
  transform: translateY(0) scale(1);
  transform-origin: center;
}

.abc-leave-active {
  transition: all ease-in-out 1.2s;
}

.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
  transform-origin: center;
}


.abcd-enter-to,
.abcd-leave {
  opacity: 1;
}

.abcd-enter-active,
.abcd-leave-active {
  transition: opacity .75s;
}

.abcd-leave-to,
.abcd-enter {
  opacity: 0;
}
</style>