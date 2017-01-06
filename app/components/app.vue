<template lang="pug">
    div
        .message 
            | {{ message }}&nbsp; 
            span.test #100daysofcode
        
        .counter
            span {{ count }}
            button(@click.prevent="increment") click
</template>

<script>
    export default {
        data () {
            return {
                message: 'Hello VueJs',
            count: 0
            }
        },
        methods: {
            increment () {
            this.count ++;
            }
        }
    }

</script>

<style lang="scss">
    .message {
        color: hotpink;
        text-align: center;
         .test {
            color: blue;
        }
    }   

    .counter {
        margin: 10px;
        color: teal;
        text-align: center;

        button {
            display: block;
            width: 100px;
            margin: 5px auto;
            background-color: teal;
            border: none;
            color: white;
            padding: 5px;
        }
    }

</style>
