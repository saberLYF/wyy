<template>
    <div v-if="visible" class="w-[100%]  fixed top-0">
        <div class="flex justify-center items-end mt-[30%]">
            <div class="flex items-end w-[5.25vw] h-[6vw] justify-between">
                    <span class="w-[.75vw] bounceOne bg-[red]"
                      :class="`h-[${h1}]`"
                    ></span>
                <span class="w-[.75vw] bounceTwo bg-[red]" :class="`h-[${h2}]`"></span>
                <span class="w-[.75vw] bounceThree bg-[red]" :class="`h-[${h3}]`"></span>
                <span class="w-[.75vw] bounceFour bg-[red]" :class="`h-[${h4}]`"></span>
            </div>
            <span class="text-[1.5vw] ml-[2vw]">
                正在加载......
            </span>
        </div>
    </div>
  </template>
  <script>
  export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        }
    },
    data() {
      return {
        h1:'3vw',
        h2:'5vw',
        h3:'2vw',
        h4:'3vw',
      };
    },
    async created(){
    },
    methods: {
      hide() {
        this.visible = false;
      },
      cancel() {
        this.hide();
        this.reject();
      },
      confirm() {
        this.hide();
        this.resolve();
      },
    },

  };
  </script>
<style>
.bounceOne {
    animation: hOne .5s infinite;
}
.bounceTwo {
    animation: hTwo .5s infinite;
}
.bounceThree {
    animation: hThree .5s infinite;
}
.bounceFour {
    animation: hFour .5s infinite;
}




@keyframes hOne {
  0% {
    height: 3vw;
  }
  50% {
    height: 5vw;
  }
  100% {
    height: 3vw;
  }
}
@keyframes hTwo {
  0% {
    height: 5vw;
  }
  50% {
    height: 2vw;
  }
  100% {
    height: 5vw;
  }
}
@keyframes hThree {
  0% {
    height: 2vw;
  }
  50% {
    height: 5vw;
  }
  100% {
    height: 2vw;
  }
}
@keyframes hFour{
  0% {
    height: 3vw;
  }
  50% {
    height: 1vw;
  }
  100% {
    height: 3vw;
  }
}
</style>