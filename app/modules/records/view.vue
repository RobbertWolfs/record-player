<template lang="pug">
    .records-view
        .container
            h1 Vuenyl Record Player
            
            transition(name="slide-left")
                router-view.view
</template>

<style lang="scss">
    @import '../../assets/scss/_colors.scss';
    
    .records-view { 
        background-color: $primaryColor;
        color: $secondaryColor;

        h1 {
            text-align: center;
        }
    }

</style>
