<template>
    <div>
        <p>{{prompt}}</p>
        <button @click="getNewPrompt">Get new topic</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
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

<style scoped>

</style>