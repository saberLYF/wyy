<!-- <template>
    <div>
        <h1>扫码登录</h1>
        <img :src="qrcode" alt="">
    </div>
</template>
<script>
import {getQRKey,getQrInfo,checkQrStatus} from '@/request/index'
export default {
    name:'Login',
    data(){
        return {
            qrcode:'',
        }
    },
    methode:{
        pollingCheck(key,interval=1000){
            const timer = setInterval(async()=>{
                const res = await checkQrStatus(key);
                if(res.data.code === 800){

                }
                if(res.data.code === 803){
                    clearInterval(timer);
                    console.log(res.data.cookie);
                    store.set('_m_cookie',res.data.cookie);
                }
            },interval)
            this.$on('hook:beforeDestroy')
        },
    },
    async created(){
        const res = await getQRKey().catch((err)=>{
            console.log(err);
        })
        const qrInfo = await getQrInfo(res.data.data.unikey).catch((err)=>{
            console.log(err);
        });
    }
}
</script> -->