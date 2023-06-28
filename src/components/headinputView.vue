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
            <Icon icon="icon-park-outline:left" color="#ccc" width="36" height="36"
                class="w-[6vw] h-[6vw] mr-[-15vw] mt-[1.75vw] z-[1]" @click.native="show = false" />
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
            const res = await fetchSearchSuggest(keywords);
        }, 300),
        immediate: true
    },

}
</script>