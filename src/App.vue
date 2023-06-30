<template>
    <IndexView :menus="menu"  :bannerss="banners" :chartss="charts" :customMades="customMade" :recommends="recommend"/>
</template>
<script>
import IndexView from '@/views/IndexView.vue';
import { fetchHomePage, fetchHomeDragonBall } from "@/request/index"
export default {
    components: { IndexView },
    data() {
        return {
            visible: true,
            menu:[],
            banners:[],
            charts:[],
            customMade:[],
            recommend:[],
        };
    },
    async created() {
        window.vm = this;
        const res = await fetchHomePage().catch((err) => console.log(err));
        this.banners = res.data.data.blocks[0].extInfo.banners;
        this.charts = res.data.data.blocks[3];
        this.customMade = res.data.data.blocks[5];
        this.recommend = res.data.data.blocks[1].creatives;
        const ress = await fetchHomeDragonBall().catch((err) => console.log(err));
        this.menu = ress.data.data;
        console.log(this.charts);
    },
}
</script>