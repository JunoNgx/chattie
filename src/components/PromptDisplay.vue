<template>
    <div>
        <p>{{prompt}}</p>
        <button @click="getNewPrompt"> Get new topic</button>
    </div>
</template>

<script>
    export default {
        props: {
            prompt: {
                type: String,
                default: "Let's get you something to talk about\nPress the button below"
            }
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