<template >
    <div class=" w-screen ">
        <template v-if="lazy">
            <Lazyload :visible="lazy"></Lazyload>
        </template>
        <template v-else>
            <header class="w-[100%]" :style="{ backgroundColor: rgb }">
                <pop>
                <van-sticky>
                    <!-- <van-button type="primary"> -->
                        <div class="flex w-[100%] items-center justify-between text-[4vw] text-[#fff] p-[3vw]"
                            :style="{ backgroundColor: rgb }" id="TOP">
                            <div class="flex items-center">
                                <Icon icon="ph:arrow-left-light" :color="color" width="36" height="36"
                                    class="w-[5vw] h-[5vw] mr-[1.5vw]" @click.native="fn" />
                                <span v-if="show" :style="{ color: color }">歌单</span>
                                <!-- <span> -->
                                <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
                                <div v-else class="w-[65vw]">
                                    <van-notice-bar scrollable :text="tilte" :background="rgb" color="#fff" />
                                </div>
                                <!-- </span> -->
                            </div>
                            <div class="flex items-center">
                                <Icon icon="iconamoon:search-light" :color="color" width="36" height="36"
                                    class="w-[5vw] h-[5vw] mr-[9vw]" />
                                <Icon icon="ri:more-2-fill" :color="color" width="36" height="36"
                                    class="w-[5vw] h-[5vw] " />
                            </div>
                        </div>
                    <!-- </van-button> -->
                </van-sticky>
            </pop>
                <div class="flex  p-[4vw]">
                    <div class="w-[24vw] h-[24vw] ">
                        <!-- <img :src="imgurl" alt="" class=" rounded-[2.5vw] w-[24vw] h-[24vw]" id="bgimg"> -->
                        <canvas id="myCanvas" class="rounded-[2.5vw] w-[24vw] h-[24vw]"
                            :class="[`w-[${width}px]`, `h-[${width}px]`]"></canvas>
                    </div>
                    <div class=" ml-[3vw]">
                        <div class="flex justify-between ">
                            <p class="w-[57vw] text-[4vw] text-[#fff] font-[500]" :style="{ color: color }">{{ tilte }}</p>
                            <span
                                class="w-[5vw] h-[5vw] bg-[#fff] rounded-[50vw] flex items-center justify-center ml-[1.5vw]">
                                <Icon icon="bytesize:chevron-bottom" color="#000" class="w-[2vw] h-[2vw]" />
                            </span>
                        </div>
                        <div class="flex items-center text-[1.5vw]">
                            <div>
                                <img :src="userimg" alt="" class="w-[6vw] h-[6vw] rounded-[50%] mr-[2vw]">
                            </div>
                            <span class="mr-[1vw] text-[#d5ceb5]">{{ userName }}</span>
                            <span
                                class="w-[11vw] h-[4vw] rounded-[3vw] mr-[1vw] text-[#d5ceb5] flex items-center justify-center"
                                :style="{ backgroundColor: rgba }">
                                <Icon icon="ic:baseline-plus" color="#d5ceb5" class="w-[3vw] h-[3vw]" />
                                关注
                            </span>
                        </div>
                    </div>
                </div>
                <p class="w-[90vw] text_nowarp text-[#d5ceb5] mx-[4vw]">{{ this.userTag }}</p>
                <div class="flex justify-between items-center text-[3.5vw] text-[#fff] font-[550] mt-[2vw] p-[4vw]">
                    <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw]"
                        :style="{ backgroundColor: rgba }">
                        <Icon icon="basil:forward-solid" color="white" class="w-[5vw] h-[5vw]" />
                        <span>{{ Forward }}</span>
                    </div>
                    <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw]"
                        :style="{ backgroundColor: rgba }">
                        <Icon icon="uis:comment-dots" color="white" class="w-[5vw] h-[5vw]" />
                        <span> {{ Count }} </span>
                    </div>
                    <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw] bg-[#ff363f]">
                        <Icon icon="fluent:collections-add-20-filled" color="white" class="w-[5vw] h-[5vw]" />
                        {{ like }}
                    </div>
                </div>
            </header>
            <section class="w-screen rounded-[3vw] text-[3vw] pb-[5vw]">
            <pop>
                <van-sticky :offset-top="'14vw'">
                        <div id="songListTop"
                            class="flex h-[15vw] items-center text-[3vw] px-[4vw] justify-between bg-[#fff]">
                            <div class=" flex justify-between items-center">
                                <Icon icon="icon-park-solid:play" color="#fe3e31" class="w-[5vw] h-[5vw] mr-[4vw]" />
                                <span class="font-[600] mr-[3vw] text-[4vw]"  @click="playAll">播放全部</span>
                                <span class="text-[#979795] text-[2vw]">({{ song.length }})</span>
                            </div>
                            <div class="flex w-[10vw]  justify-between items-center">
                                <Icon icon="quill:download" color="#333331" class="w-[5vw] h-[5vw]" />
                                <Icon icon="solar:list-check-linear" color="#333331" class="w-[5vw] h-[5vw]" />
                            </div>
                        </div>
                </van-sticky>
            </pop>
                <div class="px-[4vw]">
                    <ul>
                        <li class="flex text-[3vw] justify-between items-center mb-[8vw]" v-for="(item, index) in song"
                            :key="item.id.id" @click="playSingle(item.id)">
                            <div class="flex items-center">
                                <img src="/static/wave.gif" class="red-image w-[3vw] h-[3vw] mr-[5.75vw]"
                                v-if="item.id === $player._currentTrack.id" alt="" />
                                <span v-else  class="text-[#979795] mr-[5.75vw] ml-[1vw]">{{ index + 1 }}</span>
                                <div class="w-[60vw] h-[8vw] ">
                                    <p class="text_nowarp">
                                        <span class="text_nowarp" :class="item.id === $player._currentTrack.id ? 'text-[red]' : '' ">{{ item.name }}</span>
                                        <span class="text-[#808080] text_nowarp" v-if="item.alia.length != 0"> {{
                                            item.alia[0]
                                        }}</span>
                                    </p>
                                    <p class="text_nowarp text-[#808080] text-[2vw] w-[67vw]" v-if="item.ar.length != 0">
                                        <span v-for="name in item.ar" :key="name.id">
                                            {{ name.name }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="flex w-[15vw] justify-between items-center">
                                <Icon icon="radix-icons:video" color="#b3b3b3" class="w-[5vw] h-[5vw]" />
                                <Icon icon="ri:more-2-fill" color="#b3b3b3" class="w-[5vw] h-[5vw] " />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </template>
    </div>
</template>
<script>
import { fetchTrack, fetchSongUser } from '@/request/index'
import Vue from 'vue';
import { Sticky, NoticeBar } from 'vant';
import styled from 'styled-components-vue'
import store from 'storejs'
const pop = styled.div`
.van-sticky--fixed {
    z-index:29;
}
`
Vue.use(NoticeBar);
Vue.use(Sticky);
export default {
    components: {
        pop // 注册popup组件
    },
    data() {
        return {
            lazy: true,
            song: [],
            imgurl: '',
            tilte: '',
            userimg: '',
            userName: '',
            userTag: '',
            Forward: 0,
            Count: 0,
            like: 0,
            tags: [],
            id: '',
            width: 0,
            rgb: '',
            rgba: '',
            color: '',
            show: false,
            lazy: true,
            plays_:window.$player?._playing
        }
    },
    async created() {
        //传递的参数
        this.id = this.$route.query.id;
        const res = await fetchTrack(this.id)
        const user = await fetchSongUser(this.id)
        Promise.all([res, user]).then(([song, user]) => {
            this.song = song.data.songs
            console.log(this.song);
            //歌单名
            this.tilte = user.data.playlist.name
            //歌单封面
            this.imgurl = user.data.playlist.coverImgUrl
            //用户名
            this.userName = user.data.playlist.creator.nickname;
            //头像
            this.userimg = user.data.playlist.creator.avatarUrl;
            //歌单简介
            this.userTag = user.data.playlist.description;
            //转发
            this.Forward = user.data.playlist.shareCount;
            //评论
            this.Count = user.data.playlist.commentCount;
            //搜藏
            this.like = user.data.playlist.subscribedCount;
            //tag
            this.tags = user.data.playlist.tags;
            this.lazy = false
        }).catch((err) => console.log(`响应失败${err}`));
    },
    watch: {
        lazy(newVal) {
            let that = this;
            const image = new Image();
            image.setAttribute('crossOrigin', 'anonymous');
            setTimeout(()=>{
            image.src = that.imgurl;
            that.width = window.innerWidth * 0.24
            const canvas = document.getElementById("myCanvas");
            const context = canvas.getContext("2d");
            window.addEventListener('resize', function () {
                that.width = window.innerWidth * 0.24
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            })

            image.onload = () => {
                that.width = window.innerWidth * 0.24
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
                let arr = this.getMainColor(data).split(",").map(Number);
                this.rgb = this.rgbaToHex(arr[0], arr[1], arr[2]);
                this.color = this.invertColor(this.rgb)
                this.rgba = this.color + '4d'
                console.log(this.rgb);
            };
            },500)
        }
    },
    methods: {
        getMainColor(data) {
            const temp = {}
            const len = data.length
            let max = 0;
            let color = ''
            let i = 0
            while (i < len) {
                if (data[i + 3] !== 0) {
                    const k = `${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${(data[i + 3] / 255)}`
                    temp[k] = temp[k] ? temp[k] + 1 : 1
                    if (temp[k] > max) {
                        max = temp[k]
                        color = k
                    }
                }
                i += 4
            }
            return color
        },
        rgbaToHex(r, g, b) {
            const red = r.toString(16).padStart(2, '0');
            const green = g.toString(16).padStart(2, '0');
            const blue = b.toString(16).padStart(2, '0');
            return `#${red}${green}${blue}`;
        },
        invertColor(color) {
            // 将十六进制颜色值转换为RGB颜色值
            const r = parseInt(color.substr(1, 2), 16);
            const g = parseInt(color.substr(3, 2), 16);
            const b = parseInt(color.substr(5, 2), 16);
            // 计算反色
            const invertedR = 255 - r;
            const invertedG = 255 - g;
            const invertedB = 255 - b;
            // 返回反色的十六进制颜色值
            const invertedHex = `#${invertedR.toString(16).padStart(2, '0')}${invertedG.toString(16).padStart(2, '0')}${invertedB.toString(16).padStart(2, '0')}`;
            return invertedHex;
        },
        fn() {
            this.$router.push({
                path: '/IndexView'
            });
        },
        playAll() {
            this.$player.replacePlaylist(
                this.song.map((song) => song.id, '', '', ''),
                store.set('cookie_music', this.song)
            );
            console.log('$player', window.$player?._currentTrack?.al?.picUrl);
            this.$store.state.song = this.song
        },
        // 播放器 播放单个
        playSingle(id) {
            this.$player.replacePlaylist([id], '', '');
            store.set('cookie_music', this.song);
            // this.$router.push('/PlayerHome')
        },
    },
    mounted() {
        // window.addEventListener('scroll',()=>{
        //     console.log(window.pageYOffset)
        //     if(window.pageYOffset<document.querySelector('header').offsetHeight/.49){
        //         window.scrollTo(0,0);
        //     }else if(window.pageYOffset>document.querySelector('header').offsetHeight/.5 && window.pageYOffset < document.querySelector('header').offsetHeight){
        //         window.scrollTo(0,document.querySelector('header').offsetHeight);
        //     }
        // });
    }
}
</script>
<style>
.text_nowarp {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    /* 如果需要在溢出时显示省略号 */
}
.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>