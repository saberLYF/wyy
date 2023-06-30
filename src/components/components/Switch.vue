<template>
    <div class="w-[50px] h-[30px] rounded-[15px] "
         :class="`${value ? 'bg-[#bfa]' : 'bg-[#ee0a24]'}`"
    >
        <div
        class="w-[30px] h-[30px] rounded-[50%] bg-white transition-all"
        :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`"
        ></div>

    </div>
</template>
<script>
    export default {
        model:{
            prop:'value',
            event:'input'
        },
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