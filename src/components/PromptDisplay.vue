<script lang="ts">
    import { defineComponent } from 'vue';
    import type Topic from "../models/Topic"
    import NoTopicError from "../components/NoTopicError.vue"

    export default defineComponent({
        name: "prompt-display",
        data() {
            return {
                promptStr: "Let's get you something to talk about" as string,
                isShowing: true as boolean,
                hasNoTopicEnabled: false as boolean,
            }
        },
        components: {
            NoTopicError
        },
        methods: {
            getNewPrompt() {
                const topicData: Topic[] = this.$store.state.topicData
                const enabledTopics: number[] = this.$store.state.enabledTopics

                if (enabledTopics.length === 0) {
                    this.hasNoTopicEnabled = true
                    return
                } else {
                    this.hasNoTopicEnabled = false
                }

                let topicIndex = Math.floor(Math.random() * topicData.length)
                while (!enabledTopics.includes(topicIndex)) {
                    topicIndex = Math.floor(Math.random() * topicData.length)
                }

                let promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                while (this.promptStr === topicData[topicIndex].prompts[promptIndex]) {
                    promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                }

                this.isShowing = false
                setTimeout(() => {
                    this.isShowing = true
                    this.promptStr = topicData[topicIndex].prompts[promptIndex]
                }, 800)

            },
        },
    })
</script>

<template>
    <div class="prompt-display">
        <div class="prompt-display__text-wrapper">
            <transition name="prompt-fade">
                <p
                    class="prompt-display__text-wrapper__text"
                    v-show=this.isShowing
                >
                    {{promptStr}}
                </p>
            </transition>
        </div>
        <button
            class="prompt-display__button"
            :class="{'prompt-display__button--dark':this.$store.state.isDarkMode}"
            @click="getNewPrompt"
        >
            <span class="prompt-display__button__label">
                Get new topic
            </span>
        </button>
        <NoTopicError
            v-if=hasNoTopicEnabled
        />
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.prompt-display
    margin: auto
    width: 50%
    flex-grow: 1.5
    text-align: center

    &__text-wrapper
        height: 40vh
        vertical-align: center
        display: flex
        justify-content: center
        align-items: center

        &__text
            font-size: 2rem
            margin-bottom: 4rem
    
    &__button
        border: 2px solid v.$acc-green
        cursor: pointer
        width: fit-content
        font-family: v.$font-stack
        font-size: 1.5rem
        padding: 1rem 2rem
        background-color: v.$bg-light
        color: v.$acc-green
        +m.transition(color, background-color)

        &:hover
            background-color: v.$acc-green
            color: v.$bg-light

        &--dark
            background-color: v.$bg-dark
            &:hover
                background-color: v.$acc-green
                color: v.$bg-dark

    +m.mobile
        width: 90%

.prompt-fade-enter-from
    transform: translateY(-100%)
    opacity: 0

.prompt-fade-enter-active, .prompt-fade-leave-active
    transition: transform v.$prompt-trans-time ease-out, opacity v.$prompt-trans-time ease-out

.prompt-fade-leave-to
    transform: translateY(100%)
    opacity: 0
</style>