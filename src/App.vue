<template>
   <div class="w-screen h-screen relative">
    <transition :name="transitionName">
        <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: 'fade', // 过渡类名
        };
    },
    watch: {
    $route(to, from) {
      // 根据路由变化设置不同的过渡效果
      if (from === 'IndexView' && to === 'SearchView') {
        this.transitionName = 'fade'; // 设置过渡类名
      } else if (from === 'SearchView' && to === 'IndexView') {
        this.transitionName = 'slide'; // 设置过渡类名
      }
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all .75s;
}

.fade-leave-to,
.fade-enter {
    right: -100%;
}

.fade-enter-to,
.fade-leave {
    right: -100%;
}

.fade-enter-to,
.fade-leave {
    right: 0;
}
</style>