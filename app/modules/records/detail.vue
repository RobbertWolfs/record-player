<template lang="pug">
    div.record

        .record__info
            img(:src="vinyl.visual")
            h3.info__artist {{ vinyl.artist }}
            p.info__album {{ vinyl.album }}
</template>

<script>

    import jsonQuery from 'json-query';
    import records from '../../assets/records.json';
    import PlayingRecord from '../../components/playing-record.vue'
 
    const vinyl2 = jsonQuery('records[artist=Daft Punk]', {
        data: records
    });

    export default {

        computed: {

            vinyl() {
               const artist = this.$route.params.id.split('_')[0].replace(/-/g, ' ');
              
                return jsonQuery(`records[artist=${artist.replace(/\b\w/g, l => l.toUpperCase())}]`, {
                    data: records
                }).value;
            }

        },
    }
    
</script>

<style lang="scss">

    .record__info {}

</style>

