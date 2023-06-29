<template >
    <transition name="back" @after-leave="closeDrawer" >
        <div v-show="show" @click="closeDrawer" class="w-screen h-screen fixed top-0 z-[997]">
            <transition name="back">
                <div  v-show="show"  class="w-screen h-screen rgba_black z-[998]"></div>
            </transition>
            <transition name="menu-transition"  @after-leave="closeDrawer">
                <div v-show="show"
                    class="absolute w-screen overflow-hidden h-[40vw]  bottom-0 bg-[#fff] rounded-t-[3vw] z-[999] ">
                    <div class="flex items-center border-solid border-gray-100 border-b-[.5vw] p-[3vw]">
                        <h1 class="text-[4vw] text-[#3d4456] font-bold">{{ title }}</h1>
                    </div>
                    <div class="p-[3vw]">
                        <slot name="main"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "默认标题"
        },
        show: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            windowheight:{

            }
        }
    },
    methods: {
    closeDrawer() {
        this.$emit('update:show', false);
    },
},
    clickHandler(e) {
        if (e.target === this.$refs.drawerMask) {
            // this.visible = false;
            // 使用vm.$emit给父组件传递数据
            this.closeDrawer();
        }
    },
}
</script>
<style>
.rgba_black {
    background: rgba(0, 0, 0, .5);
}

.back-enter-active,
.back-leave-active {
    transition: all .75s;
}

.back-enter-to,
.back-leave {
    opacity: 1;
}

.back-enter,
.back-leave-to {
    opacity: 0;
}

.menu-transition-enter-to,
.menu-transition-leave {
    height: 40vw;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
    transition: all .75s;
}

.menu-transition-leave-to,
.menu-transition-enter {
    height: 0px;
}
</style>