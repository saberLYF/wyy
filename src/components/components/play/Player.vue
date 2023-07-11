<template>
    <div class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center">
        <div class="w-[10vw] h-[10vw] relative flex items-center justify-center">
            <!-- <img src="../../static/fang.png" alt="" class="absolute top-0 left-0 z-[1]" /> -->
            <img :src="Player._currentTrack?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]" />
        </div>
        <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
            <span class="text-[#3E485E]">{{ Player._currentTrack.name }}</span>
            <span class="text-[#7B8591]">-{{ Player._currentTrack.name }}</span>
        </div>
        <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" @click="playFn">
            <van-circle v-model="currentRate" :rate="10" :speed="100" size="5.6vw" :stroke-width="120" color="#475165"
                layer-color="#C7CBD2" />
            <Icon :icon="`${!play ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="11px"
                class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute" />
        </div>
        <!-- 播放列表 -->
        <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#3b4152] ml-[4.5vw]"
            @click.native="popup_b = !popup_b" />
        <popup>
            <van-popup v-model="popup_b" position="bottom">
                <van-swipe   :loop="false"  width="93vw"
                    height="130vw">
                    <van-swipe-item>
                        <section class="w-[93vw] h-[131vw] mb-[8vw] mx-[3.5vw] bg-[#fff] rounded-[4vw] p-[4.5vw]">
                            <header>
                                <span class="font-[600]">
                                    当前播放
                                </span>
                            </header>
                            <div class="flex justify-between pb-[4vw] mt-[5vw] border-solid border-b-[.1vw] border-[#ccc]">
                                <div class="flex justify-between items-center">
                                    <Icon icon="streamline:interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward" color="#969696" class="w-[4vw] h-[4vw]"/>
                                    <span class="ml-[2vw]">列表循环</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <Icon icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload" color="#969696" class="w-[4vw] mr-[5vw] h-[4vw]"/>
                                    <Icon icon="fluent-mdl2:add-to" color="#969696" class="w-[4vw] h-[4vw]  mr-[5vw]"/>
                                    <Icon icon="fluent-mdl2:delete" color="#969696" class="w-[4vw] h-[4vw]"/>
                                </div>
                            </div>
                            <ul class="h-[95vw] pt-[5vw]">
                                    <li class="mb-[6.5vw] flex justify-between items-center" v-for=" item in playlist" :key="item.id">
                                       <!-- <div>
                                            <span class="text-[3.5vw]">123</span>
                                            <span class="text-[2vw]">321</span>
                                       </div>
                                       <Icon icon="iwwa:delete" color="#969696" class="w-[6vw] h-[6vw]"/> -->
                                       {{ item }}
                                    </li>
                                </ul>
                        </section>
                    </van-swipe-item>
                    <van-swipe-item>
                        <section class="w-[93vw] h-[131vw] mb-[8vw] mx-[3.5vw] bg-[#fff] rounded-[4vw] p-[4.5vw]">
                            <header>
                                <span>
                                    当前播放
                                </span>
                            </header>
                        </section>
                    </van-swipe-item>
                </van-swipe>
            </van-popup>
        </popup>
    </div>
</template>

<script>
import Vue from 'vue';
import { Circle, Popup, Swipe, SwipeItem } from 'vant';
import styled from 'styled-components-vue'
Vue.use(Circle).use(Popup).use(Swipe).use(SwipeItem)
import Player from './player.js';
const popup = styled.div`
.van-popup {
background:rgba(255,255,255,0);
}
`
export default {
    components: {
        popup // 注册popup组件
    },
    data() {
        return {
            Player: new Player(),
            currentRate: 0,
            play: window.$player?._playing,
            popup_b: false,
            playlist:Player._list
        };
    },
    methods: {
        playFn() {
            this.play = !this.play;
            window.$player.playOrPause();
        },
    },
    created() {
        window.$player = this.Player;
    },
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%';
        },
    },
};
</script>