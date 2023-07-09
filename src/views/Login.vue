<template>
    <div class=" w-screen h-screen pt-[6vw] bg-[#fdfdfe] flex flex-col justify-between">
        <header class="flex items-center px-[6vw] justify-between">
            <Icon icon="ph:arrow-left-light" color="#000" width="36" height="36" class="w-[5vw] h-[5vw]" />
            <span class="text-[4vw] text-[#6b6b6b]">游客登录</span>
        </header>
        <section class="flex flex-col justify-center items-center mb-[10vw]">
            <div class="flex flex-col">
                <div class="flex items-center">
                    <Icon icon="ri:netease-cloud-music-fill" color="#d4251f" class="w-[7.5vw] h-[7.5vw] mr-[2vw] " />
                    <span class="text-[5vw]">网易云音乐</span>
                </div>
                <div class=" my-[10vw] relative" v-if="user">
                    <img :src="qrcode" alt="" class="w-[40vw] h-[40vw]">
                    <div class="flex justify-center items-center absolute z-[10] w-[40vw] h-[40vw] top-0"
                        :style="{ backgroundColor: 'rgba(255,255,255,.7)' }" v-if="show">
                        <div
                            class="bg-[red] w-[18vw] h-[7vw] flex items-center justify-center rounded-[4vw] shadow-lg shadow-[#ccc]">
                            <span class="text-[#fff] text-[2vw]">点击刷新</span>
                        </div>
                    </div>
                </div>
                <div v-else class="my-[10vw]">
                    <img src="/static/bg-login.png" alt="" class="w-[40vw] h-[40vw]">
                </div>
                <p class="text-[3vw]" v-if="user">
                    使用 <a href="#" class="text-[#4a9de6]">网易云音乐APP</a> 扫码登录
                </p>
                <div v-else class="text-[3vw]">
                    <p>扫描成功</p>
                    <p>请在手机上确认</p>
                </div>
            </div>
        </section>
        <footer :style="{ backgroundImage: 'url(/static/recommand_bg_2x.png)' }" class="w-[100vw] h-[20vh] bg-cover"></footer>
    </div>
</template>
<script>
import store from 'storejs'
import { getQRKey, getQrInfo, checkQrStatus } from '@/request/index'
export default {
    name: 'Login',
    data() {
        return {
            qrcode: '',
            show: false,
            user: true
        }
    },
    methods: {
        pollingCheck(key, interval = 1000) {
            const timer = setInterval(async () => {
                const res = await checkQrStatus(key);
                if (res.data.code === 800) {
                    this.user = true;
                    this.show = true;
                    console.log('二维码已过期');
                    clearInterval(timer);
                } else if (res.data.code == 802) {
                    this.user = false
                }
                else if (res.data.code === 803) {
                    clearInterval(timer);
                    console.log(res.data.cookie);
                    store.set('__m__cookie', res.data.cookie);
                    this.$router.push({
                        path: '/IndexView',
                    });
                }
            }, interval)
            this.$on('hook:beforeDestroy')
        },
    },
    async created() {
        const res = await getQRKey().catch((err) => {
            console.log(err);
        })
        const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) => {
            console.log(err);
        });
        this.qrcode = qrInfo.data.data.qrimg
        let key = res.data.data.unikey
        this.pollingCheck(key, 10000)
    }
}
</script>
<style></style>