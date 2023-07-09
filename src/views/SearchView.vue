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
                <span class="text-[3vw] mr-[3vw] text-[#37383c] dark:text-[#fff]" @click="pushRecord">搜索</span>
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
                        <Icon icon="fluent-mdl2:delete" color="#aeafb3" class="w-[3vw] h-[3vw]" @click.native="del"/>
                    </div>
                    <div class="flex items-center justify-between mt-[2vw]">
                        <ul v-if="historyRecord.length != 0" class="flex items-center">
                            <template v-for="(itme) in historyRecord">
                                <li :key="itme.id"
                                    class="h-[4vw] flex items-center mr-[2vw] font-semibold p-[1.5vw] text-[2vw] text-[#afafaf] bg-[#fff] rounded-[2vw]">
                                    <span>
                                        {{ itme }}
                                    </span>
                                </li>
                            </template>
                        </ul>
                        <div
                            class="h-[4vw] w-[4vw] flex items-center mr-[2vw] font-semibold p-[1.5vw] text-[2vw] text-[#afafaf] bg-[#fff] rounded-[50vw]">
                            <Icon icon="bytesize:chevron-bottom" color="#afafaf" class="w-[3vw] h-[3vw]" />
                        </div>
                    </div>
                </div>
                <div class="mt-[4.5vw] px-[3vw] ">
                    <div class="flex items-center mb-[3vw] text-[2.75vw] text-[#595963] justify-between ">
                        <span class="text-[#283140] font-bold">猜你喜欢</span>
                        <Icon icon="clarity:refresh-line" color="#aeafb3" class="w-[3vw] h-[3vw]" @click.native="fn" />
                    </div>
                    <div class="flex items-center justify-between">
                        <ul class="flex items-center">
                            <template v-for="index in n">
                                <li :key="index.id"
                                    class="h-[4vw] flex items-center mr-[2vw] font-semibold p-[1.5vw] text-[2vw] text-[#5f5e66] bg-[#fff] rounded-[2vw]">
                                    <span>
                                        {{ likelist[randomNumber[index - 1]] }}
                                    </span>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>

                <div class="mt-[4.5vw] w-[100vw] p-[1.5vw]">
                    <van-swipe v-if="width != 0" :width="width" :show-indicators="false" :loop="false">
                        <van-swipe-item @change="onChange" v-for="(item, length) in list" :key="length">
                            <div class="w-[60vw] mr-[2vw] bg-[#fff] p-[4vw] rounded-[2vw]">
                                <div
                                    class="text-[3.5vw] font-bold border-b-[.25vw] items-center border-[#e8e8e8] pb-[4vw] text-[#272d3d] flex">
                                    <span class="mr-[2vw]">{{ item }}</span>
                                    <van-tag round type="primary" color="#e8e8e8" text-color="#272d3d">
                                        <Icon icon="bi:play-fill" color="#333a40" class="w-[2vw] h-[2vw]" />
                                        播放
                                    </van-tag>
                                </div>
                                <ul class="mt-[2vw]">
                                    <template v-if="length == 0">
                                        <li class="flex text-[2.5vw] items-center mb-[2vw] text-[#2c333d]"
                                            v-for="(items, index) in detail" :key="items.id">
                                            <span :class="[index < 3 ? 'text-[#f64146]' : 'text-[#848486]']" class="w-[3vw]">{{
                                                index + 1
                                            }}</span>
                                            <span :class="[index < 3 ? ' font-bold ' : ' font-medium']" class="ml-[2vw]">{{
                                                items.searchWord
                                            }}</span>
                                            <Icon v-if="items.iconType == 5" icon="solar:arrow-up-bold" color="#ff3938"
                                                class=" w-[2.5vw] h-[2.5vw] ml-[1vw]" />
                                            <Icon v-else-if="items.iconType == 1" icon="mdi:hot" color="#ff3938"
                                                class=" w-[2.5vw] h-[2.5vw] ml-[1vw]" />
                                        </li>
                                    </template>
                                    <template v-else>
                                        <template v-for="(val,index) in listdate[lenth[length-1]]">
                                            <li v-if="index <= 19" class="flex text-[2.5vw] items-center mb-[2vw] text-[#2c333d]" :key="val.id">
                                                <div class="w-[100%] flex">
                                                    <span :class="[index < 3 ? 'text-[#f64146]' : 'text-[#848486]']"
                                                        class="w-[3vw]">{{
                                                            index + 1
                                                        }}</span>
                                                    <p :class="[index < 3 ? ' font-bold ' : ' font-medium']"
                                                        class="ml-[2vw]">{{
                                                            val.name
                                                        }}</p>
                                                </div>
                                            </li>
                                        </template>
                                    </template>
                                </ul>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div v-else>
                <template v-if="lazy">
                    <Lazyload :visible="lazy"></Lazyload>
                </template>
                <template v-else>
                    <div class=" p-[3vw]" v-for="item in keywords" :key="item.id">
                        <ul >
                            <li class="flex items-center">
                                <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                                    class="w-[4vw] h-[4vw] z-[1]" />
                                <p class="text-[2vw]">{{ item.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <div  class=" p-[3vw]" v-if="keywords == undefined">
                        <p class="text-[3.5vw] font-bold">非常抱歉，什么都没有找到</p>
                    </div>
                </template>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
import { fetchDetail, fetchSearchSuggest, fetchPlaylists, fetchSearchDefault, fetchToplist } from '@/request/index'
import _ from "lodash";
import Lazyload from '@/components/components/Lazyload';
import Vue from 'vue';
import { Swipe,SwipeItem,Tag,Skeleton } from 'vant';
Vue.use(Skeleton)
Vue.use(Swipe);
Vue.use(Tag)
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
            n: 3,//计数
            randomNumber: [],
            pNodes: [],
            list: ["热搜榜", "ACG榜", "民谣榜", "古风榜", "摇滚榜", "说唱榜"],
            lenth:[1,4,3,2,0],
            listdate: [],
            loading:true,
            lazy:true
        }
    },
    async created() {
        const res = await fetchDetail().catch((err) => console.log(err));
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
        this.fn();

        const res1 = await axios.get(
            'https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail'
        );
        const playlist = await Promise.all(
            res1.data.list.map(({ id }) =>
                axios.get(
                    'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail',
                    { params: { id } }
                )
            )
        );
        // const top = await fetchToplist().catch((err) => console.log(err));
        this.pNodes = playlist.map((item) => item.data.playlist);
        console.log(this.pNodes);
        if (this.pNodes.length != 0) {
            for (let i = 0; i < this.pNodes.length; i++) {
                if (i == 4 || i == 8 || i == 23 || i == 24 || i == 26) {
                    this.listdate.push(this.pNodes[i].tracks)
                }
            }
        }
        console.log(this.listdate);
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
            this.keywords = [];
            this.lazy = true;
            if (this.userSearchKeywords != '') {
                const res = await fetchSearchSuggest(keywords);
                this.keywords = res.data.result.songs;
                console.log(this.keywords);
                // if(this.keywords != undefined){
                    this.lazy = false;
                // }
            } else {
                this.lazy = true;
                this.keywords = [];
            }
        }, 300),
        immediate: true
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        pushRecord() {
            if (this.userSearchKeywords != '') {
                this.historyRecord.push(this.userSearchKeywords)
                let uniqueArray = [...new Set(this.historyRecord)]
                this.historyRecord = uniqueArray
            }
        },
        fn() {
            this.n = Math.floor(Math.random() * 3) + 1;
            const randomNumber1 = Math.floor(Math.random() * 20);
            let randomNumber2 = Math.floor(Math.random() * 20);
            let randomNumber3 = Math.floor(Math.random() * 20);

            while (randomNumber2 === randomNumber1) {
                randomNumber2 = Math.floor(Math.random() * 20);
            }

            while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2) {
                randomNumber3 = Math.floor(Math.random() * 20);
            }

            this.randomNumber = [randomNumber1, randomNumber2, randomNumber3];
            console.log(this.randomNumber)
        },
        del(){
            this.historyRecord = [];
        }
    },
}
</script>
<style>

</style>
