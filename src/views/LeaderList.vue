<template>
    <div class="p-[4vw] text-[#323232]">
        <header class="flex items-center mb-[7vw]">
            <Icon icon="ph:arrow-left-light" color="#323232" class="w-[5vw] h-[5vw] mr-[2vw]" @click.native="$router.push('./IndexView')"/>
            <h1 class="text-[5vw] font-[600]">MV排行榜</h1>
        </header>
        <warp>
            <van-tabs v-model="active" swipeable line-width="8vw" title-active-color="#363636"
                title-inactive-color="#6c6c6c"
                @change="getData">
                <van-tab :title="'内地'" @click="getData" name="内地">
                    <header class="mb-[5vw] mt-[7vw]" v-if="time != 0 && show">
                        更新时间{{ new Date(time).getMonth() + 1 }}月{{ new Date(time).getDate() }}日
                    </header>
                    <ul class="w-[100%] mb-[35vw]" v-if="show">
                        <li v-for="(item, index) in list" :key="index" class="mb-[4vw] relative">
                            <img :src="item.cover" alt="" class="w-[92vw] h-[51.7vw] rounded-[4vw] mb-[4vw]">
                            <div class="flex flex-col justify-between">
                                <p class="flex items-center">
                                    <span class="text-[4vw] w-[5vw] mr-[1.5vw] font-[600]"
                                        :class="index > 2 ? 'text-[#afafaf]' : 'text-[#fc3d3f]'">
                                        {{ index + 1 }}
                                    </span>
                                    <span class="text-[3.5vw] font-[600]">
                                        {{ item.name }}
                                    </span>
                                </p>
                                <p class="flex items-center">
                                    <span class="w-[5vw] justify-between mr-[1.5vw] flex items-center text-[2vw]"
                                        :class="[index + 1 - item.lastRank > 0 ? 'text-[#fc3d3f]' : 'text-[#7f7f7f]']">
                                        <Icon v-if="index + 1 - item.lastRank != 0" icon="maki:triangle"
                                            :color="index + 1 - item.lastRank > 0 ? '#fc3d3f' : 'blue'"
                                            :verticalFlip="index + 1 - item.lastRank > 0 ? false : true" class="text-[3vw]" />
                                        <span v-if="index + 1 - item.lastRank == 0"
                                            class="ml-[.25vw] w-[1.5vw] border-[.5vw] border-[#9f9f9f]"></span>
                                        {{ index + 1 - item.lastRank == 0 ? '' : index + 1 - item.lastRank > 0 ? index + 1 -
                                            item.lastRank : Math.abs(index + 1 - item.lastRank) }}
                                    </span>
                                    <span class="text-[2.75vw] text-[#7f7f7f]">
                                        {{ item.artistName }}
                                    </span>
                                </p>
                            </div>
                            <div class="text-[3vw] text-[#fff] absolute top-[2.5vw] right-[2.5vw] flex items-center">
                                <Icon icon="prime:play" color="white" class="text-[5vw]"/>
                                <template
                                    v-if="item.playCount < 100000000 && item.playCount > 9999">
                                    {{ Math.floor(item.playCount / 10000) }}万
                                </template>
                                <template v-else-if="item.playCount > 99999999">
                                    {{ Math.floor(item.playCount / 100000000) }}亿
                                </template>
                                <template v-else>
                                    {{ item.playCount }}
                                </template>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab :title="'港台'" @click="getData" name="港台">
                    <header class="mb-[5vw] mt-[7vw]" v-if="time != 0 && show">
                        更新时间{{ new Date(time).getMonth() + 1 }}月{{ new Date(time).getDate() }}日
                    </header>
                    <ul class="w-[100%] mb-[35vw]" v-if="show">
                        <li v-for="(item, index) in list" :key="index" class="mb-[4vw] relative">
                            <img :src="item.cover" alt="" class="w-[92vw] h-[51.7vw] rounded-[4vw] mb-[4vw]">
                            <div class="flex flex-col justify-between">
                                <p class="flex items-center">
                                    <span class="text-[4vw] w-[5vw] mr-[1.5vw] font-[600]"
                                        :class="index > 2 ? 'text-[#afafaf]' : 'text-[#fc3d3f]'">
                                        {{ index + 1 }}
                                    </span>
                                    <span class="text-[3.5vw] font-[600]">
                                        {{ item.name }}
                                    </span>
                                </p>
                                <p class="flex items-center">
                                    <span class="w-[5vw] justify-between mr-[1.5vw] flex items-center text-[2vw]"
                                        :class="[index + 1 - item.lastRank > 0 ? 'text-[#fc3d3f]' : 'text-[#7f7f7f]']">
                                        <Icon v-if="index + 1 - item.lastRank != 0" icon="maki:triangle"
                                            :color="index + 1 - item.lastRank > 0 ? '#fc3d3f' : 'blue'"
                                            :verticalFlip="index + 1 - item.lastRank > 0 ? false : true" class="text-[3vw]" />
                                        <span v-if="index + 1 - item.lastRank == 0"
                                            class="ml-[.25vw] w-[1.5vw] border-[.5vw] border-[#9f9f9f]"></span>
                                        {{ index + 1 - item.lastRank == 0 ? '' : index + 1 - item.lastRank > 0 ? index + 1 -
                                            item.lastRank : Math.abs(index + 1 - item.lastRank) }}
                                    </span>
                                    <span class="text-[2.75vw] text-[#7f7f7f]">
                                        {{ item.artistName }}
                                    </span>
                                </p>
                            </div>
                            <div class="text-[3vw] text-[#fff] absolute top-[2.5vw] right-[2.5vw] flex items-center">
                                <Icon icon="prime:play" color="white" class="text-[5vw]"/>
                                <template
                                    v-if="item.playCount < 100000000 && item.playCount > 9999">
                                    {{ Math.floor(item.playCount / 10000) }}万
                                </template>
                                <template v-else-if="item.playCount > 99999999">
                                    {{ Math.floor(item.playCount / 100000000) }}亿
                                </template>
                                <template v-else>
                                    {{ item.playCount }}
                                </template>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab :title="'欧美'" @click="getData" name="欧美">
                    <header class="mb-[5vw] mt-[7vw]" v-if="time != 0 && show">
                        更新时间{{ new Date(time).getMonth() + 1 }}月{{ new Date(time).getDate() }}日
                    </header>
                    <ul class="w-[100%] mb-[35vw]" v-if="show">
                        <li v-for="(item, index) in list" :key="index" class="mb-[4vw] relative">
                            <img :src="item.cover" alt="" class="w-[92vw] h-[51.7vw] rounded-[4vw] mb-[4vw]">
                            <div class="flex flex-col justify-between">
                                <p class="flex items-center">
                                    <span class="text-[4vw] w-[5vw] mr-[1.5vw] font-[600]"
                                        :class="index > 2 ? 'text-[#afafaf]' : 'text-[#fc3d3f]'">
                                        {{ index + 1 }}
                                    </span>
                                    <span class="text-[3.5vw] font-[600]">
                                        {{ item.name }}
                                    </span>
                                </p>
                                <p class="flex items-center">
                                    <span class="w-[5vw] justify-between mr-[1.5vw] flex items-center text-[2vw]"
                                        :class="[index + 1 - item.lastRank > 0 ? 'text-[#fc3d3f]' : 'text-[#7f7f7f]']">
                                        <Icon v-if="index + 1 - item.lastRank != 0" icon="maki:triangle"
                                            :color="index + 1 - item.lastRank > 0 ? '#fc3d3f' : 'blue'"
                                            :verticalFlip="index + 1 - item.lastRank > 0 ? false : true" class="text-[3vw]" />
                                        <span v-if="index + 1 - item.lastRank == 0"
                                            class="ml-[.25vw] w-[1.5vw] border-[.5vw] border-[#9f9f9f]"></span>
                                        {{ index + 1 - item.lastRank == 0 ? '' : index + 1 - item.lastRank > 0 ? index + 1 -
                                            item.lastRank : Math.abs(index + 1 - item.lastRank) }}
                                    </span>
                                    <span class="text-[2.75vw] text-[#7f7f7f]">
                                        {{ item.artistName }}
                                    </span>
                                </p>
                            </div>
                            <div class="text-[3vw] text-[#fff] absolute top-[2.5vw] right-[2.5vw] flex items-center">
                                <Icon icon="prime:play" color="white" class="text-[5vw]"/>
                                <template
                                    v-if="item.playCount < 100000000 && item.playCount > 9999">
                                    {{ Math.floor(item.playCount / 10000) }}万
                                </template>
                                <template v-else-if="item.playCount > 99999999">
                                    {{ Math.floor(item.playCount / 100000000) }}亿
                                </template>
                                <template v-else>
                                    {{ item.playCount }}
                                </template>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab :title="'韩国'" @click="getData" name="韩国">
                    <header class="mb-[5vw] mt-[7vw]" v-if="time != 0 && show">
                        更新时间{{ new Date(time).getMonth() + 1 }}月{{ new Date(time).getDate() }}日
                    </header>
                    <ul class="w-[100%] mb-[35vw]" v-if="show">
                        <li v-for="(item, index) in list" :key="index" class="mb-[4vw] relative">
                            <img :src="item.cover" alt="" class="w-[92vw] h-[51.7vw] rounded-[4vw] mb-[4vw]">
                            <div class="flex flex-col justify-between">
                                <p class="flex items-center">
                                    <span class="text-[4vw] w-[5vw] mr-[1.5vw] font-[600]"
                                        :class="index > 2 ? 'text-[#afafaf]' : 'text-[#fc3d3f]'">
                                        {{ index + 1 }}
                                    </span>
                                    <span class="text-[3.5vw] font-[600]">
                                        {{ item.name }}
                                    </span>
                                </p>
                                <p class="flex items-center">
                                    <span class="w-[5vw] justify-between mr-[1.5vw] flex items-center text-[2vw]"
                                        :class="[index + 1 - item.lastRank > 0 ? 'text-[#fc3d3f]' : 'text-[#7f7f7f]']">
                                        <Icon v-if="index + 1 - item.lastRank != 0" icon="maki:triangle"
                                            :color="index + 1 - item.lastRank > 0 ? '#fc3d3f' : 'blue'"
                                            :verticalFlip="index + 1 - item.lastRank > 0 ? false : true" class="text-[3vw]" />
                                        <span v-if="index + 1 - item.lastRank == 0"
                                            class="ml-[.25vw] w-[1.5vw] border-[.5vw] border-[#9f9f9f]"></span>
                                        {{ index + 1 - item.lastRank == 0 ? '' : index + 1 - item.lastRank > 0 ? index + 1 -
                                            item.lastRank : Math.abs(index + 1 - item.lastRank) }}
                                    </span>
                                    <span class="text-[2.75vw] text-[#7f7f7f]">
                                        {{ item.artistName }}
                                    </span>
                                </p>
                            </div>
                            <div class="text-[3vw] text-[#fff] absolute top-[2.5vw] right-[2.5vw] flex items-center">
                                <Icon icon="prime:play" color="white" class="text-[5vw]"/>
                                <template
                                    v-if="item.playCount < 100000000 && item.playCount > 9999">
                                    {{ Math.floor(item.playCount / 10000) }}万
                                </template>
                                <template v-else-if="item.playCount > 99999999">
                                    {{ Math.floor(item.playCount / 100000000) }}亿
                                </template>
                                <template v-else>
                                    {{ item.playCount }}
                                </template>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab :title="'日本'" @click="getData" name="日本">
                    <header class="mb-[5vw] mt-[7vw]" v-if="time != 0 && show">
                        更新时间{{ new Date(time).getMonth() + 1 }}月{{ new Date(time).getDate() }}日
                    </header>
                    <ul class="w-[100%] mb-[35vw]" v-if="show">
                        <li v-for="(item, index) in list" :key="index" class="mb-[4vw] relative">
                            <img :src="item.cover" alt="" class="w-[92vw] h-[51.7vw] rounded-[4vw] mb-[4vw]">
                            <div class="flex flex-col justify-between">
                                <p class="flex items-center">
                                    <span class="text-[4vw] w-[5vw] mr-[1.5vw] font-[600]"
                                        :class="index > 2 ? 'text-[#afafaf]' : 'text-[#fc3d3f]'">
                                        {{ index + 1 }}
                                    </span>
                                    <span class="text-[3.5vw] font-[600]">
                                        {{ item.name }}
                                    </span>
                                </p>
                                <p class="flex items-center">
                                    <span class="w-[5vw] justify-between mr-[1.5vw] flex items-center text-[2vw]"
                                        :class="[index + 1 - item.lastRank > 0 ? 'text-[#fc3d3f]' : 'text-[#7f7f7f]']">
                                        <Icon v-if="index + 1 - item.lastRank != 0" icon="maki:triangle"
                                            :color="index + 1 - item.lastRank > 0 ? '#fc3d3f' : 'blue'"
                                            :verticalFlip="index + 1 - item.lastRank > 0 ? false : true" class="text-[3vw]" />
                                        <span v-if="index + 1 - item.lastRank == 0"
                                            class="ml-[.25vw] w-[1.5vw] border-[.5vw] border-[#9f9f9f]"></span>
                                        {{ index + 1 - item.lastRank == 0 ? '' : index + 1 - item.lastRank > 0 ? index + 1 -
                                            item.lastRank : Math.abs(index + 1 - item.lastRank) }}
                                    </span>
                                    <span class="text-[2.75vw] text-[#7f7f7f]">
                                        {{ item.artistName }}
                                    </span>
                                </p>
                            </div>
                            <div class="text-[3vw] text-[#fff] absolute top-[2.5vw] right-[2.5vw] flex items-center">
                                <Icon icon="prime:play" color="white" class="text-[5vw]"/>
                                <template
                                    v-if="item.playCount < 100000000 && item.playCount > 9999">
                                    {{ Math.floor(item.playCount / 10000) }}万
                                </template>
                                <template v-else-if="item.playCount > 99999999">
                                    {{ Math.floor(item.playCount / 100000000) }}亿
                                </template>
                                <template v-else>
                                    {{ item.playCount }}
                                </template>
                            </div>
                        </li>
                    </ul>
                </van-tab>
            </van-tabs>
        </warp>
    </div>
</template>
<script>
import styled from 'styled-components-vue'
import { MvList } from '@/request/index'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
const warp = styled.div`
.van-tab--active{
    font-weight: 700;
}
.van-tab__text--ellipsis{
    font-size:3vw;
    z-index:1
}
.van-tabs__line{
    height:1.3vw;
    bottom:6vw;
    z-index:0;
}
`
Vue.use(Tab);
Vue.use(Tabs);
export default {
    components: {
        warp
    },
    data() {
        return {
            active: '内地',
            time: 0,
            list: [],
            show: false
        }
    },
    async created() {
        await MvList(this.active).then(res => {
            console.log(res);
            this.time = res.data.updateTime;
            this.list = res.data.data
        }).catch(err => {
            console.log(err);
        })
        this.show = true;
    },
    methods:{
        getData(name){
            console.log(name);
            this.show = false
            MvList(name).then(res => {
            console.log(res);
            this.time = res.data.updateTime;
            this.list = res.data.data
            this.show = true;
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style>
p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}</style>