<template lang="pug">
    div
        h1.title {{ title }}

        vinyl
</template>

<script>
    import Vinyl from './vinyl.vue';

    export default {
        data() {
            return {
                title: '#100daysOfCode Record Player',
            }
        },
        components: { Vinyl },
    }

</script>

<style lang="scss" scoped>
    .title {
        text-align: center;
    }  
</style>
