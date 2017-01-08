<template lang="pug">
    div
        h1.title {{ title }}

        vinyl(v-for="vinyl in vinyls" v-bind:artist="vinyl.artist" v-bind:album="vinyl.album" v-bind:visual="vinyl.visual")
</template>

<script>
    import Vinyl from './vinyl.vue';

    export default {
        data() {
            return {
                title: '#100daysOfCode Record Player',
                vinyls: [
                    {
                        artist: 'Daft Punk',
                        album: 'Random Access Memories',
                        visual: 'https://images-na.ssl-images-amazon.com/images/I/61Ia07wdZQL._SL1500_.jpg',
                    },
                    {
                        artist: 'Colplay',
                        album: 'Parachutes',
                        visual: 'http://assets2.thecreatorsproject.com/content-images/contentimage/no-slug/32b467be1ad9b7c6db2671bc3ffd69ab.jpg',
                    },
                    {
                        artist: 'The Mars Volta',
                        album: 'Amputechture',
                        visual: 'http://vinylcoverart.com/pics/a/the-mars-volta-amputechture.jpg',
                    },
                    {
                        artist: 'Capital Cities',
                        album: 'In A Tidal Wave Of Mystery',
                        visual: 'http://vinylcoverart.com/pics/i/capital-cities-in-a-tidal-wave-of-mystery-tn.jpg',
                    },
                    {
                        artist: 'Bill Frisell',
                        album: 'Guitar In The Space Age!',
                        visual: 'http://vinylcoverart.com/pics/g/bill-frisell-guitar-in-the-space-age-tn.jpg',
                    },
                    {
                        artist: 'Pink Floyd',
                        album: 'The Dark Side of the Moon',
                        visual: 'http://theludlowgroup.com/associated-files/posts/2014-05-06-the-lost-art-of-album-covers/Vinyl_Album_Cover_Storm_Thorgerson_Pink_Floyd_Dark_Side_Of_The_Moon_2.jpg',
                    },
                ],
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
