<template>
     <div class="p-[1.5vw] mt-[12vw] dark:text-[#fff] dark:bg-gray-900">
        <van-swipe class="my-swipe rounded-[5vw]" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in banners" :key="item.id">
            <img :src="item.pic" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    props: ['banners'],
}
</script>