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
            <div class="flex  p-[3vw]">
                <div class="w-[24vw] h-[24vw] mr-[3vw]">
                    <img src="" alt="" class=" rounded-[2.5vw] w-[24vw] h-[24vw]">
                </div>
                <div class="">
                    <h1>123</h1>
                    <p>1</p>
                    <p>tag</p>
                </div>
            </div>
            <p>我是底部段落</p>
        </header>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lazy:true
        }
    }
}
</script>