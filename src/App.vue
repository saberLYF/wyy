<template>
  <div class="w-screen h-screen relative">
    <transition mode="out-in" :name="transitionName">
      <router-view />
    </transition>
    <!-- 播放器 -->
    <Player class="fixed bottom-[13vw] bg-[#fff] z-[30]" />
    <!-- 菜单 -->
    <van-tabbar route v-model="active" active-color="red">
      <van-tabbar-item class=" scale-[0.85]" to="/IndexView" name="Index" >
        <span class="text-[1.5vw] ">发现</span>
        <template #icon>
          <div :class=" active == 'Index' ? 'bg-diy' : ''">
            <Icon icon="ri:netease-cloud-music-line" :color="active=='Index' ? '#FFF' : '#c9c9c9'   " class="w-[7vw] h-[7vw]"/>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class=" scale-[0.85]" name="podcast" to="/podcast">
        <span class="text-[1.5vw] ">播客</span>
        <template #icon>
          <div :class=" active == 'podcast' ? 'bg-diy' : ''">
          <Icon icon="heroicons:signal-20-solid" :color="active=='podcast' ? '#FFF' : '#c9c9c9'   "  class="w-[7vw] h-[7vw]"/>
        </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class=" scale-[0.85]" to="/userSet" name="user">
        <span class="text-[1.5vw]">我的</span>
        <template #icon>
          <div :class=" active == 'user' ? 'bg-diy' : ''">
            <Icon icon="akar-icons:music" :color="active=='user' ? '#FFF' : '#c9c9c9'   "  class="w-[7vw] h-[7vw]"/>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class=" scale-[0.85]" name="like" to="/like">
        <span class="text-[1.5vw] ">关注</span>
        <template #icon>
          <div :class=" active == 'like' ? 'bg-diy' : ''">
            <Icon icon="ri:user-add-line" :color="active=='like' ? '#FFF' : '#c9c9c9'   " class="w-[7vw] h-[7vw]"/>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item class=" scale-[0.85]" name="Community" to="/Community">
        <span class="text-[1.5vw] ">社区</span>
        <template #icon>
          <div :class=" active == 'Community' ? 'bg-diy' : ''">
          <Icon icon="ps:chat" :color="active=='Community' ? '#FFF' : '#c9c9c9'   " class="w-[7vw] h-[7vw]"/>
        </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
import Player from '@/components/components/Player/Player.vue';
export default {
  components: { Player },
  data() {
    return {
      transitionName: 'slide',
      active: 'Index'
    };
  },
}
</script>
<style>
.bg-diy {
  background: red;
  padding:1vw;
  border-radius: 50%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .75s ease-in;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>