<template lang="pug">
    div
        .message 
            | {{ message }}&nbsp; 
            span.test #
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello VueJS',
            }
        }
    }

</script>

<style lang="scss">
    .message {
        color: hotpink;
        text-align: center;
         .test {
            color: green;
        }
    }   
</style>
