<template>
    <div class="message">{{ message }}</div>
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

<style>
    .message {
        color: hotpink;
        text-align: center;
    }
</style>