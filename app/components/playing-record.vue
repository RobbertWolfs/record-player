<template lang="pug">
    div
        h1 record player
        canvas
</template>

<script>
export default {

    data() {
        return {
            width: 500,
            height: 500,
            canvas: '',
            context: '',
        }
    },

    methods: {

        drawCanvas() {
            const canvas = this.$el.querySelector('canvas');        
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },

        drawRecord() {
            this.context.beginPath();
            this.context.arc(this.width / 2, this.height / 2, 200, 0, Math.PI * 2);
            this.context.fillStyle = 'rgb(24, 24, 25)';
            this.context.fill();
        },

        drawRecordImage() {

            const image = document.createElement('img');
            image.src = 'http://theludlowgroup.com/associated-files/posts/2014-05-06-the-lost-art-of-album-covers/Vinyl_Album_Cover_Storm_Thorgerson_Pink_Floyd_Dark_Side_Of_The_Moon_2.jpg';
            image.addEventListener('load', () => {

                this.context.beginPath();
                this.context.arc(this.width / 2, this.height / 2, 75, 0, Math.PI * 2);
                this.context.clip();
                this.context.drawImage(image, this.width / 3, this.height / 3, 200, 200);

                this.drawRecordHole();
            });
        },

        drawRecordHole() {
            this.context.beginPath();
            this.context.arc(this.width / 2, this.height / 2, 10, 0, Math.PI * 2);
            this.context.fillStyle = '#df3639';
            this.context.fill();
        }
    
    },

    mounted: function () {

        this.drawCanvas();
        this.drawRecord();
        this.drawRecordImage();

    }
}

</script>
