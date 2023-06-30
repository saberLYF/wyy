<template >
    <transition name="back" @after-leave="closeDrawer">
        <div v-show="show" :class="[str == 'bottom' ? bottom : 'w-screen', 'h-screen', 'fixed', 'top-0', 'z-[997]']">
            <transition name="back">
                <div v-show="show" class="w-[100vw] h-screen rgba_black z-[998]" @click="closeDrawer"></div>
            </transition>
            <transition :name="str == 'left' ? 'left-transition' : 'menu-transition'" @after-leave="closeDrawer">
                <div v-show="show" :class="[str == 'left' ? left : bottomt]">
                    <div v-if="str != 'left'" class="flex items-center border-solid border-gray-100 border-b-[.5vw] p-[3vw]">
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
        },
        str: {
            type: String,
            default: 'bottmo',
            required: true,
        }
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
            left: ['absolute', 'w-[75vw]', 'overflow-hidden', 'h-screen', 'left-0', 'top-0', 'bg-[#fff]', '', 'z-[999]'],
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

.left-transition-leave-to,
.left-transition-enter {
    width: 0vw;
}

.left-transition-enter-to,
.left-transition-leave {
    width: 0vw;
}

.left-transition-enter-to,
.left-transition-leave {
    width: 75vw;
}



.menu-transition-enter-to,
.menu-transition-leave {
    height: 40vw;
}

.menu-transition-enter-active,
.left-transition-enter-active,
.left-transition-leave-active,
.menu-transition-leave-active {
    transition: all .5s;
}

.menu-transition-leave-to,
.menu-transition-enter {
    height: 0px;
}
</style>