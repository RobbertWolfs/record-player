<template lang="pug">
    div.record
        // We need the "," because otherwhise we cannot use the v-bind shorthand on component properties
        // https://github.com/vuejs/vueify/issues/84
        vinyl(v-for="vinyl in records", :artist="vinyl.artist", :album="vinyl.album", :visual="vinyl.visual", :year="vinyl.year")
</template>

<script>

    import Vinyl from '../../components/vinyl.vue';
    import records from '../../assets/records.json';

    export default {
        data() {
            return {
                records: records.records
            }
        },
        components: { Vinyl },
    };
    

</script>

