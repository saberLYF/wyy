<template>
    <div v-if="this.music == []">

    </div>
    <div v-else class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw]">
        <div class="flex items-center" @click="shows = !shows">
            <div class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation"
                :class="{ 'paused-animation': !this?.$player?._playing }">
                <img src="/static/fang.png" alt="" class="absolute top-0 left-0 z-[1]">
                <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
            </div>
            <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                <span class="text-[#3E485E]">{{ $player?._currentTrack?.name }}</span>
                <span class="text-[#7B8591]">-</span>
                <span class="text-[#7B8591]" v-if="$player?._currentTrack?.ar">{{
                    $player?._currentTrack?.ar[0]?.name }}</span>
            </div>
        </div>
        <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw] overflow-hidden">
            <van-circle v-model="currentRate" :rate="($player._progress * 100) / $player._duration" size="5.6vw"
                :stroke-width="120" color="#475165" layer-color="#C7CBD2" />
            <Icon :icon="`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="11px"
                class="top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] absolute" @click.native="playFn" />
        </div>
        <!-- 播放列表 -->
        <div class="pl-[4.5vw]">
            <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#3b4152]" @click.native="show = !show" />
        </div>

        <template v-if="music.length > 0">
            <!-- 播放列表 -->
            <van-popup class="rounded-t-[20px] px-[5.4vw]" v-model="show" position="bottom" :style="{ height: '60%' }">
                <div class="playmusic py-[6vw]">
                    <h1 class="text-[4vw] font-extrabold">
                        当前播放 <span class="text-[2vw] text-[#929293]">({{ music.length }}) </span>
                    </h1>
                    <div class="flex justify-between mt-[6.6vw] items-center">
                        <div class="flex">
                            <!-- 列表循环图标 -->
                            <Icon icon="arcticons:loopboard" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                            <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
                        </div>
                        <div class="flex w-[30vw] justify-between">
                            <!-- 下载图标 -->
                            <Icon icon="mi:download" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                            <!-- 收藏图标 -->
                            <Icon icon="fluent:collections-20-regular" :horizontalFlip="true"
                                class="text-[5vw] text-[#B1B1B1]" />
                            <!-- 删除 -->
                            <Icon icon="fluent-mdl2:delete" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                        </div>
                    </div>
                </div>
                <!-- 歌曲列表 -->
                <div v-if="music.length > 0">
                    <div v-for="(item, index) in music" :key="index + 1" class="flex justify-between items-center h-[14vw]"
                        @click="playSingle(item.id)">
                        <div class="flex items-center">
                            <img src="/static/wave.gif" class="red-image w-[2vw] h-[2vw]"
                                v-if="item?.id === $player?._currentTrack?.id" alt="" />
                            <h1 class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1"
                                :class="item.id === $player?._currentTrack?.id ? 'text-[#D15B57]' : ''">
                                {{ item?.name }}
                                <span v-if="item?.ar[0]"
                                    :class="item.id === $player?._currentTrack?.id ? 'text-[#D15B57]' : ''"
                                    class="text-[3vw] text-[#BCBCBC]">-{{ item?.ar[0]?.name }}</span>
                            </h1>
                        </div>
                        <div class="flex items-center">
                            <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]" v-if="item.id === $player?._currentTrack?.id">播放来源
                            </p>
                            <Icon @click.native="fn(index, item.id)" icon="ic:baseline-close" :horizontalFlip="true"
                                class="text-[5vw] text-[#B1B1B1]" />
                        </div>
                    </div>
                </div>
            </van-popup>
        </template>
        <!-- background: ${this.$player?._currentTrack?.al?.picUrl != undefined ? `url(${this.$player?._currentTrack?.al?.picUrl})`:'rgba(255,255,255,0)'}; -->
        <template v-if="music.length > 0">
            <!-- <pop> -->
            <van-popup v-model="shows" position="bottom">
                <div class="w-screen h-screen"
                    :style="{ background: `url(${$player?._currentTrack?.al?.picUrl})`, backgroundSize: '100%' }">
                    <section class=" w-screen h-screen p-[4vw] bg-myshow flex flex-col justify-between items-center relative ">
                        <header class="flex justify-between items-center"
                            :class="lrc==true ? 'mb-[15vh]' : ''"
                        >
                            <Icon icon="bytesize:chevron-bottom" @click.native="shows = !shows" color="white"
                                class="w-[5vw] h-[5vw]" />
                            <div class="text-[#fff] flex flex-col justify-center ">
                                <p class="text-[4vw] text-center text-ellipsis overflow-hidden whitespace-nowrap w-[75vw]">
                                    {{ $player?._currentTrack?.name }}</p>
                                <div class="flex items-center justify-center">
                                    <p class="text-[3vw] text-[#b7b1b0] " v-if="$player?._currentTrack?.ar">{{
                                        $player?._currentTrack?.ar[0]?.name }}</p>
                                    <span
                                        class="px-[1.5vw] py-[.5vw] bg-[#665c5f] text-[#ccc] text-[2vw] rounded-[1vw] ml-[1vw]">
                                        关注
                                    </span>
                                </div>
                            </div>
                            <Icon icon="bi:share" color="white" class="w-[5vw] h-[5vw]" />
                        </header>
                        <div class="p-[4vw] w-[100%] flex items-center" v-if="!lrc">
                            <Icon icon="uil:volume" color="rgba(156, 137, 136, 0.5019607843137255)" class="w-[5vw] h-[5vw] mr-[26.5vw]"/>
                            <div class="flex p-[.25vw] border-[.05vw] border-[#9c898880] border-solid rounded-[5vw] text-[2.75vw]">
                                <span class="flex py-[.75vw] px-[2.75vw] bg-[#9c898880] rounded-[5vw]">歌词</span>
                                <span class="flex py-[.75vw] px-[2.75vw]">百科</span>
                            </div>
                        </div>
                        <div v-if="!lrc" class="flex p-[4vw] justify-between items-center absolute top-[71vw]">
                            <Icon icon="ph:play-fill" color="white" class="w-[5vw] h-[5vw]"/>
                            <hr class="mx-[2vw] w-[75vw] h-[.1vw] border-[#ffffff80]">
                            <span class="text-[2vw]">{{ time.slice(0, 5) }}</span>
                        </div>
                        <transition name="show">
                            <img v-show="lrc" src="/static/cz.png"
                                :style="{ transformOrigin: '15.14% 8.8%', transform: `${$player._playing ? 'rotate(360deg)' : 'rotate(335deg)'}`, transition: 'transform 0.75s ease' }"
                                alt="" class="w-[26vw] h-[42vw] z-[30] absolute top-[20vw] right-[28vw]">
                        </transition>
                        <transition name="show">
                            <section class="w-[80vw] h-[80vw] flex items-center justify-center" v-show="lrc"
                                @click="lrc = !lrc">
                                <div class="w-[80vw] h-[80vw] rotateAnimation"
                                    :class="{ 'paused-animation': !this?.$player?._playing }"
                                    :style="{ background: `url(/static/fang.png)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }">
                                    <img :src="$player?._currentTrack?.al?.picUrl" alt=""
                                        class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%]">
                                </div>
                            </section>
                        </transition>
                        <transition name="show">
                            <section v-show="!lrc" @click="lrc = !lrc" class="w-[80vw] h-[106.68vw] py-[40vw] overflow-auto" id="lrcs" @scroll="lrc_" ref="lrcs">
                                <template v-if="Songtext != null">
                                <p v-for="(itme,index) in Songtext" :key="index" class="text-center py-[5vw] text-[#cccccc80]" 
                                    >
                                    <template v-if="itme != '\n'">
                                       <span class="flex text-[2.75vw] lrc   items-center justify-center"
                                       
                                       > {{ itme.replace(/\n/g, '') }} </span>
                                    </template>
                                    <template v-else>
                                        <br>
                                        <!-- :class="document.querySelectorAll('.lrc')[index].getBoundingClientRect().top > window.innerWidth*0.674 && $refs.index.getBoundingClientRect().top < window.innerWidth*0.738 ? 'text-[#fff]' : '' " -->
                                    </template>
                                </p>
                            </template>
                            </section>
                        </transition>
                        <footer class="px-[3vw] w-[100%] h-[40vw] flex flex-col justify-between items-center mt-[11vw]">
                            <div class="w-[100%] flex justify-between items-center">
                                <Icon icon="icon-park-outline:like" color="#d7dbd5" class="w-[5vw] h-[5vw]" />
                                <Icon icon="ph:download-simple" color="#d7dbd5" class="w-[5vw] h-[5vw]" />
                                <Icon icon="material-symbols:mic-double-rounded" color="#d7dbd5" class="w-[5vw] h-[5vw]" />
                                <Icon icon="uil:comment-lines" color="#d7dbd5" class="w-[5vw] h-[5vw]" />
                                <Icon icon="pajamas:ellipsis-v" color="#d7dbd5" class="w-[5vw] h-[5vw]" />
                            </div>
                            <div class="w-[100%] flex justify-between items-center text-[1.75vw] text-[#aaaaaa]">
                                <!-- <span class="mr-[2vw]" >{{ Math.floor($player._progress/60)<10 ? `0${Math.floor($player._progress/60)}` :`${Math.floor($player._progress/60)}` }}:{{ ($player._progress%60).toFixed(0) < 10 && ($player._progress%60).toFixed(0) != 0 ? `0${($player._progress%60).toFixed(0)}` :  ($player._progress%60).toFixed(0) }}</span> -->
                                <span class="mr-[2vw]">{{ formatSeconds($player._progress) }}</span>
                                <div class="w-[72.59vw]">
                                    <van-slider @input="onChange" v-model="$player._progress" :max="$player?._duration"
                                        inactive-color="#cccccc80" active-color="#fafafa" bar-height="0.28vw"
                                        button-size="1.3vw">

                                    </van-slider>
                                </div>
                                <!-- <span class="ml-[2vw]">{{ Math.floor($player._duration/60)<10 ? `0${Math.floor($player._duration/60)}` :`${Math.floor($player._duration/60)}` }}:{{ ($player._duration%60).toFixed(0)<10 ? `0${($player._duration%60).toFixed(0)}` : ($player._duration%60).toFixed(0)>=60 ? `59`: ($player._duration%60).toFixed(0)}}</span> -->
                                <span class="ml-[2vw]">{{ formatSeconds($player._duration) }}</span>
                            </div>
                            <div class="w-[100%] flex justify-between items-center">
                                <Icon icon="arcticons:loopboard" :horizontalFlip="true" class="text-[5vw] text-[#e8e8e8]" />
                                <Icon icon="fluent:next-48-filled" color="#e8e8e8" :horizontalFlip="true"
                                    class="text-[5vw] text-[#e8e8e8]"
                                    @click.native="playSingle(music[music.findIndex(obj => obj.id === $player?.list[0]) - 1]?.id)" />
                                <Icon :icon="`${$player._playing ? 'ic:baseline-pause-circle' : 'icon-park-solid:play'}`"
                                    @click.native="playFn" color="#e8e8e8" class="text-[12.3vw] text-[#e8e8e8]" />

                                <Icon icon="fluent:next-48-filled" color="#e8e8e8" class="text-[5vw] text-[#e8e8e8]"
                                    @click.native="playSingle(music[music.findIndex(obj => obj.id === $player?.list[0]) + 1]?.id)" />
                                <Icon icon="iconamoon:playlist-fill" color="#e8e8e8" class="text-[5vw] text-[#e8e8e8]"
                                    @click.native="show = !show" />
                            </div>
                        </footer>
                    </section>
                </div>
            </van-popup>
            <!-- </pop> -->
        </template>
    </div>
</template>

<script>
import Vue from 'vue';
import { Circle, Popup, Slider, Button } from 'vant';
import styled from 'styled-components-vue'
import { getLyric } from '@/request/index.js'
Vue.use(Circle).use(Popup).use(Slider).use(Button);
import store from 'storejs'
const pop = styled.div`
.van-popup {
    background:rgba(255,255,255,0);
    background-size:100%;
    background-repeat: no-repeat;
}
`
export default {
    components: {
        pop // 注册popup组件
    },
    data() {
        return {
            currentRate: 0,
            isRotating: false,//旋转
            angle: 0,
            show: false,
            music: [],
            shows: false,
            value: 0,
            Songtext: [],
            lrc: true,
            lrcTime:[],
            time:'',
            t:null,
        };
    },
    mounted() {
        
    },
    methods: {
        playFn() {
            this.$player.playOrPause();
            this.$player._playing==true ? this.startTimer() : clearInterval(this.t);
        },
        fn(index, id) {
            console.log(123)
            if (this.$player?._currentTrack?.id === id) {
                this.playSingle(this.music[index + 1].id);
            }
            this.music.splice(index, 1);
            store.set('cookie_music', this.music);
        },
        playerAll() {
            this.$player.replacePlaylist(
                this.music.map((data) => data.id), '', ''
            );
        },
        playSingle(id) {
            console.log(id);
            if (id != undefined) {
                this.getSongLyric(id)
                this.$player.replacePlaylist([id], '', '');
                store.set('cookie_music', this.music);
                console.log(this.$player)
            }
            
        },
        onChange(value) {
            console.log(value);
            this.$player.playOrPause();
            this.$player._progress = value
            console.log(this.$player._progress);
        },
        formatSeconds(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);

            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(remainingSeconds).padStart(2, '0');

            return `${formattedMinutes}:${formattedSeconds}`;
        },
        checkCookieChange() {
            const currentCookie = document.cookie;
            this.music = store.get('cookie_music');
            this.$player._list = this.music
        },
        async getSongLyric(id) {
            const regex = /[^\[\]]+/g;
            const regeY = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\.([0-9]{1,3})$/
            await getLyric(id).then(res => {
                const str = res.data.lrc.lyric
                const matches = str.match(regex);
                for(let key in matches){
                    if(regeY.test(matches[key])){
                        this.lrcTime.push(matches[key]);
                    }else{
                        this.Songtext.push(matches[key]);
                    }
                }
                console.log(this.lrcTime);
                console.log(this.Songtext);
            })
        },
        lrc_(){
            const lrc = document.querySelectorAll('.lrc');
            for(let i=0;i<lrc.length;i++){
                if(lrc[i].getBoundingClientRect().top > window.innerWidth*0.68 && lrc[i].getBoundingClientRect().top < window.innerWidth*0.82){
                    lrc[i].style.color= '#fff'
                    this.time = this.lrcTime[i]
                }else{
                    lrc[i].style.color= '#cccccc80'
                }
            }
        },
        startTimer() {
            
        const lrc = document.querySelectorAll('.lrc');
        this.t = setInterval(()=>{
                for(let i=0;i<lrc.length;i++){
                    const timestamp = this.lrcTime[i]
                    const [minutes, secondsAndMilliseconds] = timestamp.split(':');
                    const [seconds, milliseconds] = secondsAndMilliseconds.split('.');
                    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds) + parseInt(milliseconds) / 1000;
                    if(Number(totalSeconds).toFixed(1) >= this?.$player?._progress.toFixed(1) && Number(totalSeconds).toFixed(1) <= this?.$player?._progress.toFixed(1)+0.2){
                        // const containerRect = this.$refs.lrcs.getBoundingClientRect();
                        // const childElementRect = lrc[i].getBoundingClientRect();
                        // const scrollTop = childElementRect.top - containerRect.top - (containerRect.height - childElementRect.height) / 2;
                        lrc[i].style.color= '#fff'
                        this.time = this.lrcTime[i];
                        // this.$refs.lrcs.scrollTop = scrollTop;
                    }
                }
            },100)
        },
    },
    created() {
        this.music = store.get('cookie_music');
        this.$player._list = this.music
        this.$player.list = this.music.map(obj => obj.id)
        console.log(this.$player);
        setInterval(this.checkCookieChange, 1000);
    },
    watch: {
        $cookies: {
            handler(newMusic, oldMusic) {
                // 处理cookie_music变化的逻辑
                this.music = store.get('cookie_music');
                this.$player._list = this.music
            }
        }
    },
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%';
        },
    },

}
</script>

<style scoped>
.rotateAnimation {
    animation: rotate 15s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.paused-animation {
    animation-play-state: paused;
}

.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}

.playmusic {
    position: sticky;
    top: 0;
    z-index: 999;
    left: 0;
    background-color: white;
}

.bg-myshow {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    color: rgb(255, 255, 255);
}

.custom-button {
    width: 1.3vw;
    background-color: #fff;
    border-radius: 50%;
}


.show-enter-active,
.show-leave-active {
    transition: all .5s;
}

.show-enter {
    opacity: 0;
}

.show-enter-to {
    opacity: 1;
}

.show-leave {
    opacity: 1;
}

.show-leave-to {
    opacity: 0;
}
</style>