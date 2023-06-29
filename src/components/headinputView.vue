<template>
    <div>
        <div
            :class="['w-[100vw]', 'flex', 'justify-between', ' p-[1.5vw]', 'fixed', 'top-0', 'z-10', header ? 'gradieninp' : 'bg-[#f8f9fd]']">
            <Icon icon="ic:round-menu" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" />
            <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                class="w-[6vw] h-[6vw] mr-[-15vw] mt-[1.75vw] z-[1]" />
            <input type="text"
                :class="['w-[75vw]', 'h-[9vw]', 'rounded-[5vw]', 'outline-none', 'border border-solid', 'border-gray-400', 'px-[10vw]', header ? 'gradientColorStops' : 'bg-[#f8f9fd]', 'text-[3.5vw]']"
                :placeholder="SearchDefault.showKeyword" v-model="userSearchKeywords" @focus="show = true">
            <Icon icon="tabler:scan" color="#ccc" class="w-[6vw] h-[6vw] ml-[-15vw] mt-[1.75vw]" />
            <Icon icon="ph:microphone-light" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" />
        </div>
        <van-popup v-model="show" position="right" :style="{ height: '100%', width: '100%' }">
            <div class="flex justify-between items-center p-[3vw]">
                <Icon icon="icon-park-outline:left" color="#ccc" width="36" height="36"
                class="w-[6vw] h-[6vw]  z-[1]" @click.native="show = false"/>
                <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                class="w-[6vw] h-[6vw] mr-[-13vw] mt-[.75vw] z-[1]" />
                <input type="text"
                :class="['w-[75vw]', 'h-[9vw]', 'rounded-[5vw]','text-[#002]', 'outline-none', 'border border-solid', 'border-gray-400', 'px-[10vw]', header ? 'gradientColorStops' : 'bg-[#f8f9fd]', 'text-[3.5vw]']"
                :placeholder="SearchDefault.showKeyword" v-model="userSearchKeywords">
                <span class="text-[#ccc] text-[4vw]">搜索</span>
            </div>
            <template v-if="userSearchKeywords != ''">
                <div class="p-[3vw]"  v-for="item in keywords" :key="item.id">
                    <ul>
                        <li class="flex   items-center">
                            <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                            class="w-[4vw] h-[4vw] z-[1]" />
                            <p class="text-[2vw]">{{ item.name }}</p>
                        </li>
                    </ul>
                </div>
            </template>
        </van-popup>
    </div>
</template>
<script>
import Vue from 'vue';
import { Popup } from 'vant';
import { fetchSearchSuggest, fetchSearchDefault } from "@/request/index"
Vue.use(Popup);
export default {
    data() {
        return {
            show: false,
            header: true,
            userSearchKeywords: '',
            SearchDefault: [],
            keywords:{},
        }
    },
    mounted() {
        let that = this
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop != 0) {
                that.header = false
            } else {
                that.header = true
            }
        });
    },
    async created() {
        const Default = await fetchSearchDefault().catch((err) => console.log(err));
        this.SearchDefault = Default.data.data;
    },
    //监控某个响应数据发生变化之后执行指令的逻辑
    //methods、beforeCreate、created、watch中的this指向vm
    watch: {
        activeMenuItem: {
            async handler(newCat) {
                const res = await fetchPlaylists(newCat)
                this.playlists = res.data.playlists;
            },
        },
        userSearchKeywords: _.debounce(async function (keywords) {
            if(this.userSearchKeywords != ''){
                const res = await fetchSearchSuggest(keywords);
                this.keywords = res.data.result.songs;
                console.log(this.keywords);
            }
        }, 300),
        immediate: true
    },

}
</script>