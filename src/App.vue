<template>
   <div class="w-screen h-screen relative">
      <transition mode="out-in" :name="transitionName">
        <router-view/>
      </transition>
      <!-- 播放器 -->
      <Player  class="fixed bottom-0 bg-[#fff] z-[30]" />
  </div>
</template>
<script>
import Player from '@/components/components/play/Player.vue';
export default {
  components: { Player },
    data() {
        return {
          transitionName:'slide',
        };
    },
}
</script>
<style>

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