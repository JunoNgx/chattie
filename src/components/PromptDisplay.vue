<template>
    <div>
        <p>{{prompt}}</p>
        <button @click="getNewPrompt">Get new topic</button>
    </div>
</template>

<script>
    export default {
        props: {
            prompt: String,
        },
        methods: {
            getNewPrompt() {
                this.$emit('get-new-prompt');
                // console.log("get New prompt")
            }
        }
    }
</script>

<style scoped>

</style>