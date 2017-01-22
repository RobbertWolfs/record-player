<template lang="pug">
    .vinyl(v-if="visual" @click="goToRoute")
        .album
            img(:src="visual")
            .year {{ year }}
            .record 
        .info
            h2 {{ artist }}
            p {{ album }}
    
</template>

<script>
    export default {
        props: ['visual', 'artist', 'album', 'year'],

        computed: {

            visualId() {
                return (`${this.artist}_${this.album}`).toLowerCase().replace(/ /g, '-');
            }

        },

        methods: {

            goToRoute() {
                return this.$router.push(`/${this.visualId}`)
            }

        }
    }
</script>

<style lang="scss" scoped>

    @import '../assets/scss/_colors.scss';

    .vinyl {
        display: inline-block;
        margin: 0 20px;
    }

    .album {
        height: 300px;
        position: relative;
        width: 300px;

        img {
            z-index: 1;
        }

         &:hover {
            cursor: pointer;
        
            .record {
                box-shadow: 10px 0 50px 1px rgba(0,0,0,.3);
                left: 30px;   
                -webkit-box-shadow: 10px 0 50px 1px rgba(255,255,255,.1);
            }
         }
        
         .year {
            border: 3px solid;
            bottom: -10px;
            box-shadow: rgba(0, 0, 0, .3) 2px 2px 10px 0px;
            font-weight: bold;
            padding: 10px;
            position: absolute;
            right: -10px;
            z-index: 1;
        }

        .info {
            padding: 25px 0 0;

            h2 {
                font-size: 1.5rem;
                line-height: 1.4rem;
                margin-bottom: 10px;
            }

            p {
                margin-left: 20px; 
            }
        }

        .record {
            background-color: black;
            border-radius: 150px;
            display: inline-block;
            height: 300px;
            position: absolute;
            top: 0;
            left: 20px;
            width: 300px;
            z-index: 0;

            // transition
            -webkit-transition: left 100ms ease-out;
            -moz-transition: left 100ms ease-out;
            -ms-transition: left 100ms ease-out;
            -o-transition: left 100ms ease-out;
            transition: left 100ms ease-out;
        }
   
    }

</style>

