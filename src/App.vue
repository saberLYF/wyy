<template>
   <div class="w-screen h-screen relative">
      <transition mode="out-in" :name="transitionName">
        <router-view/>
      </transition>
  </div>
</template>
<script>
export default {
    data() {
        return {
          transitionName:'slide'
        };
    },
    watch: {

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