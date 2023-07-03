<template>
    <div class="w-screen bg-[#f8f9fd] relative" :class="[userSearchKeywords != '' ? 'h-screen' : '']">
        <div :class="['w-[100vw]', 'flex', 'items-center', 'justify-between', 'p-[1.5vw]']"
            class="dark:bg-[#1b1b23] mb-[4.5vw]">
            <Icon icon="ph:arrow-left-light" color="#35363a" width="36" height="36" class="w-[8vw] h-[8vw] 'mr-[1.5vw]'"
                @click.native="$router.push('./IndexView')" />
            <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                class="w-[5vw] h-[5vw] mr-[-15vw] mt-[.5vw] z-[1]" />
            <input type="text" v-model="userSearchKeywords" :placeholder="SearchDefault.showKeyword" :class="['w-[75vw]', 'dark:bg-[#3b343b]', 'h-[8vw]', 'rounded-[5vw]', 'bg-[#fff]', 'outline-none', 'border border-solid', 'mr-[-1.5vw]', 'border-gray-400', 'px-[10vw]', 'text-[2.5vw]']
                ">
            <span class="text-[3vw] mr-[3vw] text-[#37383c] dark:text-[#fff]">搜索</span>
        </div>
        <div v-if="userSearchKeywords == ''">
            <div
                class="flex items-center px-[6.2vw] justify-between text-[#32342f] text-[2.75vw] font-bold dark:text-[#fff]">
                <div class="flex items-center">
                    <Icon icon="majesticons:user" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>歌手</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="ri:netease-cloud-music-fill" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>曲风</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="fluent:music-note-1-24-filled" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>专区</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="mdi:microphone" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>识曲</span>
                </div>
            </div>
            <div v-if="historyRecord.length != 0" class="mt-[4.5vw] px-[3vw] ">
                <div class="flex items-center text-[2.75vw] text-[#595963] justify-between">
                    <span class="text-[#283140] font-bold">搜索历史</span>
                    <Icon icon="fluent-mdl2:delete" color="#aeafb3" class="w-[3vw] h-[3vw]" />
                </div>
            </div>
            <div class="mt-[4.5vw] px-[3vw] ">
                <div class="flex items-center text-[2.75vw] text-[#595963] justify-between ">
                    <span class="text-[#283140] font-bold">猜你喜欢</span>
                    <Icon icon="clarity:refresh-line" color="#aeafb3" class="w-[3vw] h-[3vw]" />
                </div>
                <div class="flex items-center justify-between">
                    <ul class="flex items-center">
                        <template v-for="index in n">
                            <li :key="index.id" class="h-[4vw] flex items-center mr-[2vw] font-semibold p-[1.5vw] text-[2vw] text-[#5f5e66] bg-[#fff] rounded-[2vw]">
                               <span>
                                    {{ likelist[Math.floor(Math.random() * 20)] }}
                               </span>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="mt-[4.5vw] w-[100vw] p-[1.5vw]">
                <van-swipe v-if="width != 0" :width="width" :show-indicators="false" :loop="false">
                    <van-swipe-item @change="onChange" v-for="index in 10" :key="index">
                        <div class="w-[60vw] mr-[2vw] bg-[#fff] p-[4vw] rounded-[2vw]">
                            <div
                                class="text-[3.5vw] font-bold border-b-[.25vw] items-center border-[#e8e8e8] pb-[4vw] text-[#272d3d] flex">
                                <span>热搜榜</span>
                                <div
                                    class="flex items-center text-[1.5vw] bg-[#e8e8e8] ml-[2vw] font-semibold w-[8vw] h-[3vw] justify-center rounded-[2.5vw]">
                                    <Icon icon="bi:play-fill" color="#333a40" class="w-[2vw] h-[2vw]" />
                                    播放
                                </div>
                            </div>
                            <ul class="mt-[2vw]">
                                <li class="flex text-[2.5vw] items-center mb-[2vw] text-[#2c333d]"
                                    v-for="(item, index) in detail" :key="item.id">
                                    <span :class="[index < 3 ? 'text-[#f64146]' : 'text-[#848486]']" class="w-[3vw]">{{
                                        index + 1
                                    }}</span>
                                    <span :class="[index < 3 ? ' font-bold ' : ' font-medium']" class="ml-[2vw]">{{
                                        item.searchWord
                                    }}</span>
                                    <Icon v-if="item.iconType == 5" icon="solar:arrow-up-bold" color="#ff3938"
                                        class=" w-[2.5vw] h-[2.5vw] ml-[1vw]" />
                                    <Icon v-else-if="item.iconType == 1" icon="mdi:hot" color="#ff3938"
                                        class=" w-[2.5vw] h-[2.5vw] ml-[1vw]" />
                                </li>
                            </ul>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div v-else>
            <div class=" p-[3vw]" v-for="item in keywords" :key="item.id">
                <ul>
                    <li class="flex   items-center">
                        <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                            class="w-[4vw] h-[4vw] z-[1]" />
                        <p class="text-[2vw]">{{ item.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchDetail, fetchSearchSuggest, fetchPlaylists, fetchSearchDefault } from '@/request/index'
import _ from "lodash";
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data() {
        return {
            detail: [],
            historyRecord: [],
            userSearchKeywords: '',
            keywords: [],
            playlists: [],
            SearchDefault: [],
            loaded: false,
            current: 0,
            width: 0,
            likelist: [],//猜你喜欢
            n:3,//计数
        }
    },
    async created() {
        let res = await fetchDetail().catch((err) => console.log(err));
        this.detail = res.data.data;
        console.log(this.detail);

        const Default = await fetchSearchDefault().catch((err) => console.log(err));
        this.SearchDefault = Default.data.data;

        let that = this

        that.width = window.innerWidth * 0.62

        window.addEventListener('resize', function () {
            that.width = window.innerWidth * 0.62
        })

        for (let i = 0; i < this.detail.length; i++) {
            this.likelist.push(this.detail[i].searchWord)
        }
        console.log(this.likelist);
    },
    watch: {
        activeMenuItem: {
            async handler(newCat) {
                const res = await fetchPlaylists(newCat)
                this.playlists = res.data.playlists;
                console.log(this.playlists);
            },
        },
        userSearchKeywords: _.debounce(async function (keywords) {
            if (this.userSearchKeywords != '') {
                const res = await fetchSearchSuggest(keywords);
                this.keywords = res.data.result.songs;
                console.log(this.keywords);
            }
        }, 300),
        immediate: true
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
}
</script>
<style></style>