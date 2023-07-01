<template>
    <div class="w-[7vw] h-[4vw] rounded-[3vw] "
         :class="`${value ? 'bg-[#ee0a24]' : 'bg-[#cecece]'}`"
         @click="toggle"
    >
        <div
        class="w-[4vw] shadow-lg shadow-[#ccc] h-[4vw] rounded-[50%] bg-white transition-all"
        :class="`${value ? 'translate-x-[3.1vw]' : 'translate-x-[-1px]'}`"
        ></div>
        
    </div>
</template>
<script>
    export default {
        props:{
            value:{
                type:Boolean,
                required:true,
            }
        },
        methods:{
            toggle(){
                this.$emit('input',!this.value)
            }
        }
    }
</script>