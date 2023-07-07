<template >
    <transition name="box" >
        <div v-show="show" class="" :class="['w-screen', 'h-screen', 'fixed', 'top-0', 'z-[997]']">
            <transition name="back">
                <div v-show="show" class="w-[100vw] h-screen rgba_black  z-[998]" @click="closeDrawer"></div>
            </transition>
            <transition :name="str == 'left' ? 'left-transition' : 'menu-transition'">
                <div v-show="show" :class="[str == 'left' ? left : bottomt,`bg-[${bgcolor}]`]" class="dark:bg-[#151515] dark:text-[#fff]">
                    <div v-if="str != 'left'" class="flex items-center border-solid border-gray-100 border-b-[.15vw] p-[3vw] dark:border-[#ccc]">
                        <h1 class="text-[4vw] text-[#3d4456] font-bold dark:text-[#fff]">{{ title }}</h1>
                    </div>
                    <div class="p-[3vw] relative dark:text-[#fff]">
                        <slot name="main" class="dark:text-[#fff]"></slot>
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
        },
        str: {
            type: String,
            default: 'bottmo',
            required: true,
        },
        bgcolor:{
            type:String,
        },
        user:{
            type:Object,
        },
    },
    data() {
        return {
            windowW: {
                bottom: 'w-screen',
                top: 'w-screen',
                left: 'w-[75vw]',
                right: 'w-[75vw]'
            },
            windowH: {
                bottom: 'h-[40vw]',
                top: 'h-[40vw]',
                left: 'h-screen',
                right: 'h-screen'
            },
            bottom: ['w-screen', 'h-screen', 'fixed', 'top-0', 'z-[997]'],
            left: ['absolute', 'w-[75vw]', 'overflow-hidden', 'h-screen', 'left-0', 'top-0', 'bg-[#f6f6f6]', '', 'z-[999]'],
            bottomt: ['absolute', 'w-screen', 'overflow-hidden', 'h-[40vw]', 'bottom-0', 'bg-[#fff]', 'rounded-t-[3vw]', 'z-[999]'],
        }
    },
    watch: {
        show(newVal) {
            if (newVal == true) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
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
    background: rgba(0, 0, 0,.5);
}

.box-enter-active,
.box-leave-active {
    transition: all .75s;
}

.box-leave-to,
.box-enter {
    opacity: 1;
}

.box-enter-to,
.box-leave {
    opacity: 1;
}

.box-enter-to,
.box-leave {
    opacity: 1;
}




.back-enter-active,
.back-leave-active {
    transition: all .75s;
}

.back-leave-to,
.back-enter {
    opacity: 0;
}

.back-enter-to,
.back-leave {
    opacity: 0;
}

.back-enter-to,
.back-leave {
    opacity: 1;
}

/*  */

.left-transition-leave-to,
.left-transition-enter {
    left: -75vw;
}

.left-transition-enter-to,
.left-transition-leave {
    left: -75vw;
}

.left-transition-enter-to,
.left-transition-leave {
    left: 0vw;
}



.menu-transition-enter-to,
.menu-transition-leave {
    height: 40vw;
}

.menu-transition-enter-active,
.left-transition-enter-active,
.left-transition-leave-active,
.menu-transition-leave-active {
    transition: all .75s;
}

.menu-transition-leave-to,
.menu-transition-enter {
    height: 0px;
}
</style>