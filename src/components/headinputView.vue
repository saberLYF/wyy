<template>
    <div class="dark:bg-gray-900 relative">
        <div
            :class="['w-[100vw]', 'flex', 'justify-between', ' p-[1.5vw]','fixed', 'top-0', 'z-10', icon==true ? 'dark:bg-[#1b1b23]':'gradieninp']"
            class="dark:bg-[#1b1b23]">
            <Icon icon="ic:round-menu" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]"
                @click.native="shows = !shows" />
            <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                class="w-[6vw] h-[6vw] mr-[-15vw] mt-[1.75vw] z-[1]" />
            <input type="text"
                :class="['w-[75vw]','dark:bg-[#3b343b]','h-[9vw]', 'rounded-[5vw]', 'outline-none', 'border border-solid', icon==true ? 'dark:bg-[#1b1b23]':'gradieninp','border-gray-400', 'px-[10vw]','dark:bg-[#1b1b23]','text-[3.5vw]']"
                :placeholder="SearchDefault.showKeyword" v-model="userSearchKeywords"
                @click="$router.push('./SearchView')"
                >
            <Icon icon="tabler:scan" color="#ccc" class="w-[6vw] h-[6vw] ml-[-15vw] mt-[1.75vw]" />
            <Icon icon="ph:microphone-light" color="#ccc" width="36" height="36" class="w-[8vw] h-[8vw]" />
        </div>
        <Drawer v-if="userN" :title="'标题'" :show.sync="shows" :str="'left'" :bgcolor="'#'+'f6f6f6'" >
            <template #main>
                <header class="flex  w-[69vw] pb-[2vw] justify-between items-center">
                    <span class="text-[3.5vw] text-[#303030] flex justify-between items-center dark:text-[#fff]" @click="login">
                        <Icon v-if="userName == [] " icon="ph:user-circle-fill" color="#f8dada" class="w-[6vw] h-[6vw] mr-[2vw]" />
                        <img v-else :src="userName.profile.avatarUrl" alt="" class="w-[6vw] h-[6vw] mr-[2vw]">
                        {{ userName==[] ? '立即登录' : userName.profile.nickname }}
                        <Icon icon="formkit:right" color="#575757" width="36" height="36" class="w-[4.5vw] h-[4.5vw]" />
                    </span>
                    <span>
                        <Icon icon="tabler:scan" color="#3a3a3a" width="36" height="36" class="w-[5vw] h-[5vw]" />
                    </span>
                </header>
                <section class="overflow-auto h-[100vh]">
                    <div class="h-[30vw] bg_3b rounded-[4vw] mt-[4vw] p-[3vw] flex flex-col justify-between">
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
                            <div class="bg-[#dc4510]  text-[#fff]  flex w-[7vw] h-[7vw]  p-[.25vw] flex-wrap items-center justify-center font-bold rounded-[1vw]">
                               <p class="text-[1vw]">受邀</p>
                                <p class="text-[1vw]">专享</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw] dark:bg-[#2c2c2c] ">
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%]  justify-between items-center  border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">
                                <div class="flex items-center mb-[3vw]">
                                    <Icon icon="solar:letter-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        我的消息
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ri:netease-cloud-music-line" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        云贝中心
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                        </ul>
                    </div>
                    <div class=" p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw] dark:bg-[#2c2c2c]">
                        <p class="text-[#aaaaaa] pb-[2vw] text-[2.75vw] border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">音乐服务</p>
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
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
                                    <Icon icon="ion:ticket-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        云村有票
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="solar:box-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        西多多口袋
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:shopping-bag" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        商城
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:heartbeat-line" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
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
                                    <Icon icon="tabler:school-bell" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        口袋彩铃
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:game-handle" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
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
                    <div class=" p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw] dark:bg-[#2c2c2c]">
                        <p class="text-[#aaaaaa] pb-[2vw] text-[2.75vw] border-b-[.1vw]  border-solid border-[#a28d8c] border-opacity-25">其他</p>
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ri:settings-line" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        设置
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="prime:moon" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        深色模式
                                    </span>
                                </div>
                                <div @click="fn">
                                    <slot name="val" class="mr-[3vw]"></slot>
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mdi:clock-outline" :color="col" class="w-[5vw] h-[5vw]" />
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        定时关闭
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        个性装扮
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="iconoir:headset-charge" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        边听边存
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">未开启</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:online-meeting" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        在线听歌免流量
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ant-design:stop-outlined" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        音乐黑名单
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:protect" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        青少年模式
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-[#9a9a9a] text-[2.75vw]">未开启</span>
                                    <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                                </div>
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mdi:alarm-clock" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        音乐闹钟
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                        </ul>
                    </div>
                    <div class=" p-[3vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw] dark:bg-[#2c2c2c]">
                        <ul class="flex flex-col  w-[100%]">
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="majesticons:paper-fold-text-line" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        我的订单
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="ion:ticket-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        优惠券
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="simple-line-icons:earphones-alt" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        我的客服
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="circum:share-1" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        分享网易云音乐
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw] justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mdi:paper-edit-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        个人信息收集与使用清单
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="solar:share-circle-linear" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        个人信息第三方共享清单
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="codicon:shield" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        个人信息与隐私保护
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                            <li class="flex w-[100%] mt-[3vw]  justify-between items-center ">
                                <div class="flex items-center">
                                    <Icon icon="mdi:about-circle-outline" :color="col" class="w-[5vw] h-[5vw]"/>
                                    <span class="ml-[2vw] text-[#383838] text-[3.5vw] dark:text-[#fff]">
                                        关于
                                    </span>
                                </div>
                                <Icon icon="formkit:right" color="#ccc" width="36" height="36" class="w-[4.5vw] mr-[3vw] h-[4.5vw]" />
                            </li>
                        </ul>
                    </div>
                        <div  class=" p-[3vw] mb-[20vw] pr-0 bg-[#fff] mt-[7.5vw] rounded-[3vw] dark:bg-[#2c2c2c]">
                            <p class="text-center text-[#f33f4b] text-[3.5vw]" @click="openConfirmDialog">关闭云音乐</p>
                        </div>
                </section>
            </template>
        </Drawer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
import { fetchSearchSuggest, fetchSearchDefault,getUserDetail,getUserAccount } from "@/request/index"
export default {
    props: ['cols'],
    props:{
        val:{
            type:Boolean,
            default:false,
        },
    },
    data() {
        return {
            show: false,
            header: true,
            userSearchKeywords: '',
            SearchDefault: [],
            keywords: {},
            shows: false,
            icon:false,
            col:"#383838",
            head:true,
            userName:[],
            userN:false,
        }
    },
    mounted() {
        let that = this
        window.addEventListener('scroll', function () {
            if(this.show != undefined){
                if (document.documentElement.scrollTop != 0) {
                that.header = false
                } else if(this.document.querySelector('#wrap').classList.contains('dark') == false){
                    that.header = true
                }
            }
        });
    },
    async created() {
        const Default = await fetchSearchDefault().catch((err) => console.log(err));
        this.SearchDefault = Default.data.data;

        const nameres = await getUserAccount();
        const detail = await getUserDetail(nameres.data.profile.userId);

        this.users = nameres.data.profile.userId;
        this.userName = detail.data
        console.log(this.userName);

        this.userN = true
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
    methods:{
        fn(){
            this.icon = !this.icon
            this.head == false
            this.header == false
            this.icon==false ? this.col="#383838" : this.col="#fff"
            this.cols= this.col
            this.$emit('clicks',this.cols);
            console.log(this.col);
        },
        openConfirmDialog() {
            Dialog.confirm({
                message: '确定要退出当前的账号吗',
            })
                .then(() => {
                    // on confirm
                    // console.log('Confirmed');
                    // localStorage.clear(); // 清除 localStorage
                    // 获取 __m__cookie 值
                    const mCookie = localStorage.getItem("__m__cookie");

                    // 移除 __m__cookie 键
                    localStorage.removeItem("__m__cookie");

                    this.$router.push('/Login')

                })
                .catch(() => {
                    // on cancel
                    // console.log('Cancelled');
                });
        },
        login(){
            this.$router.push({
                path: '/userSet',
            });
        }
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
