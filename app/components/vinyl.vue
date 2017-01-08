<template lang="pug">
    .vinyl(v-if="visual")
        .vinyl__visual 
            img(:src="visual")
            .record  
        .vinyl__info(v-if="artist")
            h3.info__artist {{ artist }}
            p.info__album {{ album }}
        
</template>

<script>
    export default {
        props: ['visual', 'artist', 'album'],
    }
</script>

<style lang="scss">

    @import '../_colors.scss';

    $height: 300px;
    $width: 300px;
    $visibleRecordSize: 30px;

    .vinyl {
        display: inline-block;
        position: relative;
        margin: 10px;

        &:hover {
            cursor: pointer;
            z-index: 3;
        
            .record {
                box-shadow: 10px 0 50px 1px rgba(0,0,0,.3);
                left: $visibleRecordSize * 1.5;   
                -webkit-box-shadow: 10px 0 50px 1px rgba(255,255,255,.1);
            }
        }
    
        &__visual {
            height: $height;
            position: relative;
            width: $width + $visibleRecordSize;

            img {
                border: 3px $secondaryColor solid;
            }

            .record {
                background-color: black;
                border-radius: $width / 2;
                display: inline-block;
                height: $height;
                position: absolute;
                top: 0;
                left: $visibleRecordSize;
                width: $width;
                z-index: -1;

                // transition
                -webkit-transition: left 100ms ease-out;
                -moz-transition: left 100ms ease-out;
                -ms-transition: left 100ms ease-out;
                -o-transition: left 100ms ease-out;
                transition: left 100ms ease-out;
            }
        }

        &__info {
            margin-top: -10px;
            left: 15px;
            position: relative;

            .info {
                &__artist,
                &__album {
                    position: relative;
                    margin: 0;
                }
               
                &__artist {
                    background-color: $secondaryColor;
                    border: 2px $primaryColor solid;
                    color: $primaryColor;
                    display: inline-block;
                    padding: 5px 10px;
                }

                &__album {
                    margin-left: 20px;
                    margin-top: 5px;
                }
            }
        }
    }
</style>

