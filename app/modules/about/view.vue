<template lang="pug">
    div.about
        .container
            h1 About me 

            div
                img(src="../../assets/images/robbert.gif" alt="Robbert Wolfs")

                article
                    | This project has come to life because of the #100DaysOfCodeChallenge by @robbert_wolfs. 
       
</template>

<style lang="scss" scoped>

@import '../../assets/scss/_colors.scss';

.about {
    background-color: $secondaryColor;
    color: $primaryColor;


    img {
        max-width: 400px;
        float: left;
    }
}

</style>
