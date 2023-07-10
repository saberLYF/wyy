<template>
    <transition name="featSet" @after-enter="startSecondTransition">
        <div v-show="show" class="w-[100%] h-[38vw] pt-[2vw] flex justify-between items-center" id='zl'>
            <transition name="featTwo">
                <ul v-show="showT" class="flex justify-between items-center" id='zl_ul'>
                    <li
                        class="w-[26vw] p-[2vw] flex flex-col justify-center items-center bg-[#f6f6f6] text-[2vw] rounded-[2vw]">
                        <div
                            class="w-[11vw] h-[11vw] rounded-[50%] bg-blue-400 flex justify-center items-center mb-[2.75vw]">
                            Ikun
                        </div>
                        <p class="mb-[1vw]">Ikun</p>
                        <p class="mb-[2.75vw]">你可能喜欢</p>
                        <div class=" py-[.75vw] px-[2vw] rounded-[4vw] border-solid border-[.1vw] border-[red]">
                            <span class="text-[red]">+ 关注</span>
                        </div>
                    </li>
                </ul>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            showN: false,
            showT: false,
        }
    },
    methods: {
        startSecondTransition() {
            this.showT = this.show
        },
    }
}
</script>
<style>
.featSet-enter-active,
.featSet-leave-active {
    transition: all .35s;
}

.featSet-enter {
    height: 0;
}

.featSet-enter-to {
    height: 38vw;
}

.featSet-leave {
    height: 38vw;
}

.featSet-leave-to {
    height: 0;
}


.featTwo-enter-active,
.featTwo-leave-active {
    transition: all .1s;
}

.featTwo-enter {
    opacity: 0;
}

.featTwo-enter-to {
    opacity: 1;
}

.featTwo-leave {
    opacity: 1;
}

.featTwo-leave-to {
    opacity: 0;
}</style>