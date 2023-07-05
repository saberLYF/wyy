<template >
    <div class=" w-screen h-screen">
        <header class="p-[4vw] w-[100%]  bg-[#958b50]">
            <div class="flex w-[100%] items-center justify-between text-[4vw] text-[#fff]">
               <div class="flex items-center">
                    <Icon icon="ph:arrow-left-light" color="#fff" width="36" height="36" class="w-[5vw] h-[5vw] mr-[1.5vw]" />
                    <span>歌单</span>
               </div>
               <div class="flex items-center">
                    <Icon icon="iconamoon:search-light" color="#fff" width="36" height="36"
                    class="w-[5vw] h-[5vw] mr-[9vw]" />
                    <Icon icon="ri:more-2-fill" color="#fff" width="36" height="36" class="w-[5vw] h-[5vw] " />
               </div>
            </div>
            <div class="flex mt-[5vw]">
                <div class="w-[24vw] h-[24vw] ">
                    <img :src="imgurl" alt="" class=" rounded-[2.5vw] w-[24vw] h-[24vw]" id="bgimg">
                </div>
                <div class=" ml-[3vw]">
                    <div class="flex justify-between ">
                        <p class="w-[57vw] text-[4vw] text-[#fff] font-[500]">{{ tilte }}</p>
                        <span class="w-[5vw] h-[5vw] bg-[#fff] rounded-[50vw] flex items-center justify-center ml-[1.5vw]">
                            <Icon icon="bytesize:chevron-bottom" color="#000" class="w-[2vw] h-[2vw]"/>
                        </span>
                    </div>
                    <div class="flex items-center">
                        <div>
                            <img :src="userimg" alt="" class="w-[6vw] h-[6vw] rounded-[50%] mr-[2vw]">
                        </div>
                        <span class="mr-[1vw] text-[#d5ceb5]">{{ userName }}</span>
                        <span class="w-[11vw] h-[4vw] rounded-[3vw] mr-[1vw] text-[#d5ceb5] flex items-center justify-center bg-[#fff]" >
                            <Icon icon="ic:baseline-plus" color="#d5ceb5" class="w-[3vw] h-[3vw]"/>
                            关注
                        </span>
                    </div>
                </div>
            </div>
            <p class="w-[90vw] h-[4vw] my-[3vw] text_nowarp text-[#d5ceb5]">{{ this.userTag }}</p>
            <div class="flex justify-between items-center text-[3.5vw] text-[#fff] font-[550] mt-[2vw]">
                <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw]   bg-[#fff]">
                    <Icon icon="basil:forward-solid" color="white" class="w-[5vw] h-[5vw]"/>
                    <span>{{ Forward }}</span>
                </div>
                <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw]  bg-[#fff]">
                    <Icon icon="uis:comment-dots" color="white" class="w-[5vw] h-[5vw]"/>
                    <span> {{ Count }} </span>
                </div>
                <div class="flex items-center justify-center w-[29vw] h-[10vw] rounded-[5vw] bg-[#ff363f]">
                    <Icon icon="fluent:collections-add-20-filled" color="white" class="w-[5vw] h-[5vw]"/>
                    {{ like }}
                </div>
            </div>
        </header>
        <section class=" w-screen rounded-t-[3vw]"></section>
    </div>
</template>
<script>
import {fetchTrack,fetchSongUser} from '@/request/index'
import ColorThief from 'colorthief'
export default {
    data(){
        return {
            lazy:true,
            song:[],
            imgurl:'',
            tilte:'',
            userimg:'',
            userName:'',
            userTag:'',
            Forward:0,
            Count:0,
            like:0,
            tags:[],
        }
    },
    async created() {
        // console.log(this.$route.query.id);
        // console.log(this.$route.query.data);
        this.imgurl = this.$route.query.data.uiElement.image.imageUrl;
        this.tilte = this.$route.query.data.uiElement.mainTitle.title;

        const res = await fetchTrack(this.$route.query.id).catch((err) => console.log(err));
        const user = await fetchSongUser(this.$route.query.id).catch((err) => console.log(err));
        this.song = res.data.songs
        console.log(user.data.playlist.creator);
        //用户名
        this.userName = user.data.playlist.creator.nickname;
        //头像
        this.userimg =  user.data.playlist.creator.avatarUrl;
        //歌单简介
        this.userTag = user.data.playlist.description;
        //转发
        this.Forward =  user.data.playlist.shareCount;
        //评论
        this.Count = user.data.playlist.commentCount;
        //搜藏
        this.like = user.data.playlist.subscribedCount;
        //tag
        this.tags = user.data.playlist.tags;

        // let colorThief = new ColorThief();
        // const bgimg = document.querySelector("#bgimg")
        // colorThief.getColor(bgimg);
        // console.log(colorThief.getColor(bgimg));
    },
}
</script>
<style>
.text_nowarp {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* 如果需要在溢出时显示省略号 */
}
</style>