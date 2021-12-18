<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "prompt-display",
        props: {
            prompt: String,
        },
        methods: {
            getNewPrompt() {
                this.$emit("get-new-prompt");
                // console.log("get New prompt")
            }
        }
    })
</script>

<template>
    <div class="prompt-display">
        <p>{{prompt}}</p>
        <button @click="getNewPrompt">Get new topic</button>
    </div>
</template>

<style lang="sass" scoped>

.prompt-display
    border: 2px solid red
    margin: auto
    width: 50%
    text-align: center
    background-color: #777

</style>