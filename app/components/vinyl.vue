<template lang="pug">
    .vinyl
        h1.name {{ name }}
        .vinyl__visual 
            img(:src="visual")
</template>

<script>
    export default {
        data () {
            return {
                name: 'Daft Punk',
                visual: 'https://images-na.ssl-images-amazon.com/images/I/61Ia07wdZQL._SL1500_.jpg',
            }
        }
    }
</script>

<style lang="scss">

    @import '../_colors.scss';

    $height: 300px;
    $width: 300px;

    .vinyl {
        border: 2px $secondaryColor solid;
        height: $height;
        position: relative;
        width: $width;

        .name {
            border: 5px $secondaryColor solid;
            padding: 10px;
            position: absolute;
            right: calc(-#{$width} / 4);
            bottom: calc(-#{$height} / 4);
        }

        &__visual {

        }
    }
</style>
