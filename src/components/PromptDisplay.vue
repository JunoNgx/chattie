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
        <div class="prompt-display__text-wrapper">
            <p class="prompt-display__text-wrapper__text">{{prompt}}</p>
        </div>
        <button
            class="prompt-display__button"
            @click="getNewPrompt"
        >
            <span class="prompt-display__button__label">
                Get new topic
            </span>
        </button>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.prompt-display
    // border: 2px solid red
    margin: auto
    width: 50%
    flex-grow: 1.5
    text-align: center
    // display: flex
    // flex-direction: column
    // align-items: center
    // justify-content: space-around
    // background-color: #777

    &__text-wrapper
        height: 40vh
        vertical-align: center
        display: flex
        justify-content: center
        align-items: center

        &__text
            font-size: 2rem
            margin-bottom: 4rem
            // height: 80%
            // +m.mobile
            //     font-size: 2rem
    
    &__button
        border: 2px solid v.$acc-green
        background-color: v.$bg-light
        cursor: pointer
        width: fit-content
        font-family: v.$font-stack
        font-size: 1.5rem
        padding: 1rem 2rem
        color: v.$acc-green
        +m.transition(color, background-color, width, height)

        &:hover
            background-color: v.$acc-green
            color: v.$bg-light

    +m.mobile
        width: 90%


</style>