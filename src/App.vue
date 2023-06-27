<template>
    <IndexView v-if="visible"/>
</template>
<script>
import IndexView from '@/views/IndexView.vue';
export default {
    components: { IndexView },
    data() {
        return {
            visible: true,
        };
    },
    created() {
        window.vm = this;
    },
}

</script>