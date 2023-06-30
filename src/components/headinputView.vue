<template>
    <div>
        <div
            :class="['w-[100vw]', 'flex', 'justify-between', ' p-[1.5vw]', 'fixed', 'top-0', 'z-10', header ? 'gradieninp' : 'bg-[#f8f9fd]']">
            <Icon icon="ic:round-menu" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" @click.native="shows = !shows"/>
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
        <Drawer :title="'标题'" :show.sync="shows" :str="'left'">
            <template #main>
                <header class="flex justify-between items-center">
                    <span class="text-[3.5vw] text-[#303030] flex justify-between items-center">
                        <Icon icon="ph:user-circle-fill" color="#f8dada" class="w-[6vw] h-[6vw] mr-[2vw]"/>
                        立即登录
                        <Icon icon="formkit:right" color="#575757" width="36" height="36" class="w-[4.5vw] h-[4.5vw]" />
                    </span>
                    <span>
                        <Icon icon="tabler:scan" color="#3a3a3a" width="36" height="36" class="w-[5vw] h-[5vw]" />
                    </span>
                </header>
                <section>
                    <div class="h-[30vw] bg_3b rounded-[4vw] mt-[6vw] p-[3vw]">
                        <div class="flex justify-between items-center border-b-[.1vw] border-solid border-[#a28d8c]">
                            <div>
                                <div class="flex flex-col">
                                    <span class="text-[#fdebeb] text-[3.5vw] font-bold">开通黑胶VIP</span>
                                    <span class="text-[#988c8e] text-[2.8vw] font-medium flex items-center">立享超21项专属特权<Icon icon="icon-park-outline:right" color="#988c8e" width="36" height="36" class="w-[2.5vw] h-[2.5vw]" /></span>
                                </div>
                            </div>
                            <div class='flex items-center justify-center w-[15vw] h-[5vw] border-[.3vw] border-solid border-[#a28d8c] rounded-l-[4vw]  rounded-r-[4vw]'>
                                <span class="text-[#a28d8c] text-[2.4vw] font-medium">会员中心</span>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </template>
        </Drawer>
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
            shows:false,
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
<style>
.bg_3b {
    background: rgb(59,59,59);
    background: linear-gradient(45deg, rgba(59,59,59,.95) 45%, rgba(94,78,79,.9) 100%);
}
</style>