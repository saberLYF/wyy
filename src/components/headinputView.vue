<template>
    <div>
        <div
            :class="['w-[100vw]', 'flex', 'justify-between', ' p-[1.5vw]', 'fixed', 'top-0', 'z-10', header ? 'gradieninp' : 'bg-[#f8f9fd]']">
            <Icon icon="ic:round-menu" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]"
                @click.native="shows = !shows" />
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
                <Icon icon="icon-park-outline:left" color="#ccc" width="36" height="36" class="w-[6vw] h-[6vw]  z-[1]"
                    @click.native="show = false" />
                <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                    class="w-[6vw] h-[6vw] mr-[-13vw] mt-[.75vw] z-[1]" />
                <input type="text"
                    :class="['w-[75vw]', 'h-[9vw]', 'rounded-[5vw]', 'text-[#002]', 'outline-none', 'border border-solid', 'border-gray-400', 'px-[10vw]', header ? 'gradientColorStops' : 'bg-[#f8f9fd]', 'text-[3.5vw]']"
                    :placeholder="SearchDefault.showKeyword" v-model="userSearchKeywords">
                <span class="text-[#ccc] text-[4vw]">搜索</span>
            </div>
            <template v-if="userSearchKeywords != ''">
                <div class="p-[3vw]" v-for="item in keywords" :key="item.id">
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
        <Drawer :title="'标题'" :show.sync="shows" :str="'left'" :bgcolor="'#'+'f6f6f6'">
            <template #main>
                <header class="flex  w-[69vw] justify-between items-center">
                    <span class="text-[3.5vw] text-[#303030] flex justify-between items-center">
                        <Icon icon="ph:user-circle-fill" color="#f8dada" class="w-[6vw] h-[6vw] mr-[2vw]" />
                        立即登录
                        <Icon icon="formkit:right" color="#575757" width="36" height="36" class="w-[4.5vw] h-[4.5vw]" />
                    </span>
                    <span>
                        <Icon icon="tabler:scan" color="#3a3a3a" width="36" height="36" class="w-[5vw] h-[5vw]" />
                    </span>
                </header>
                <section class="overflow-auto h-[100vh]">
                    <div class="h-[30vw] bg_3b rounded-[4vw] mt-[6vw] p-[3vw] flex flex-col justify-between">
                        <div
                            class="flex justify-between items-center border-b-[.1vw] w-[100%] border-solid border-[#a28d8c] border-opacity-50">
                            <div class="flex flex-col w-[100%]">
                                <div class="flex w-[100%] justify-between">
                                    <span class="text-[#fdebeb] text-[3.5vw] font-bold">开通黑胶VIP</span>
                                    <div
                                        class='flex items-center justify-center w-[15vw] h-[6vw] border-[.3vw]  border-solid border-[#a28d8c] rounded-l-[4vw]  rounded-r-[4vw]'>
                                        <span class="text-[#a28d8c] text-[2.4vw] font-medium">会员中心</span>
                                    </div>
                                </div>
                                <div>
                                    <span
                                        class="text-[#988c8e] text-[2.8vw] mb-[4vw] font-medium flex items-center">立享超21项专属特权
                                        <Icon icon="icon-park-outline:right" color="#988c8e" width="36" height="36"
                                            class="w-[2.5vw] h-[2.5vw]" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between mb-[1.25vw]">
                            <p class="text-[#988c8e] text-[2.8vw]  font-medium flex items-center">专享优惠！黑胶VIP仅￥0.03/天！</p>
                            <div class="bg-[#dc4510] text-[#fff] flex w-[5.5vw] h-[6vw]  p-[.5vw] flex-wrap justify-center font-bold rounded-[1vw]">
                                <span class="text-[1.8vw]">受</span>
                                <span class="text-[1.8vw]">邀</span>
                                <span class="text-[1.8vw]">专</span>
                                <span class="text-[1.8vw]">享</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw]">
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%]  justify-between items-center  border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">
                                <div class="flex items-center mb-[3vw]">
                                    <Icon icon="solar:letter-outline" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        我的消息
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ri:netease-cloud-music-line" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        云贝中心
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                        </ul>
                    </div>
                    <div class=" p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw]">
                        <p class="text-[#aaaaaa] pb-[2vw] text-[2.75vw] border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">音乐服务</p>
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        趣测
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">点击查看今日运势</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ion:ticket-outline" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        云村有票
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="solar:box-outline" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        西多多口袋
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:shopping-bag" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        商城
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:heartbeat-line" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        Beat专区
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">顶尖制作邀您创作</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="tabler:school-bell" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        口袋彩铃
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:game-handle" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        游戏专区
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">音乐浇灌治愈花园</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class=" p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw]">
                        <p class="text-[#aaaaaa] pb-[2vw] text-[2.75vw] border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">音乐服务</p>
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        趣测
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">点击查看今日运势</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ion:ticket-outline" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        云村有票
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="solar:box-outline" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        西多多口袋
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:shopping-bag" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        商城
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:heartbeat-line" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        Beat专区
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">顶尖制作邀您创作</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="tabler:school-bell" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        口袋彩铃
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:game-handle" color="#383838" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw]">
                                        游戏专区
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">音乐浇灌治愈花园</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                        </ul>
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
            keywords: {},
            shows: false,
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
            if (this.userSearchKeywords != '') {
                const res = await fetchSearchSuggest(keywords);
                this.keywords = res.data.result.songs;
                console.log(this.keywords);
            }
        }, 300),
        immediate: true
    },

}
</script>
<style>.bg_3b {
    background: rgb(59, 59, 59);
    background: linear-gradient(45deg, rgba(59, 59, 59, .95) 45%, rgba(94, 78, 79, .9) 100%);
}
.scrollbar {
    scrollbar-width: none;

}
</style>
