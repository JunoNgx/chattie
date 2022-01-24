<script lang="ts">
    import { defineComponent } from 'vue';
    import type Topic from "@/models/Topic"
    import AccentColour from '@/models/AccentColour'
    import NoTopicError from "@/components/NoTopicError.vue"

    export default defineComponent({
        name: "prompt-display",
        data() {
            return {
                promptStr: "Let's get you something to talk about" as string,
                isShowing: true as boolean,
                hasNoTopicEnabled: false as boolean,
                AccentColour
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

                const randomisedIndexInArray = Math.floor(Math.random() * enabledTopics.length)
                const randomisedTopicId = enabledTopics[randomisedIndexInArray]
                const chosenTopic = topicData.find(t => t.id === randomisedTopicId)!

                // NOTE: the minimum amount of prompts in a topic must be higher than the
                // amount of topics being tracked (to avoid repetition, see vueX method
                // addNewGeneratedTopic()), else, infinite loop will occur
                let promptIndex = Math.floor(Math.random() * chosenTopic.prompts.length)
                while (this.$store.state.lastTopics.includes(chosenTopic.prompts[promptIndex])) {
                    promptIndex = Math.floor(Math.random() * chosenTopic.prompts.length)
                }

                this.isShowing = false
                this.$store.commit("addNewGeneratedTopic", chosenTopic.prompts[promptIndex])
                setTimeout(() => {
                    this.isShowing = true
                    this.promptStr = chosenTopic.prompts[promptIndex]
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
            :class="{
                'prompt-display__button--dark':this.$store.state.isDarkMode,
                'prompt-display__button--accent-aquamarine':this.$store.state.accentColour===AccentColour.AQUAMARINE,
                'prompt-display__button--accent-magenta':this.$store.state.accentColour===AccentColour.MAGENTA
            }"
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
            cursor: pointer
            width: fit-content
            font-family: v.$font-stack
            font-size: 1.5rem
            padding: 1rem 2rem
            +m.transition(color, background-color)

            &--accent-aquamarine
                border: 2px solid v.$acc-aquamarine
                color: v.$acc-aquamarine
                &:hover
                    background-color: v.$acc-aquamarine
            &--accent-magenta
                border: 2px solid v.$acc-magenta
                color: v.$acc-magenta
                &:hover
                    background-color: v.$acc-magenta

            &--dark
                background-color: v.$bg-dark
                &:hover
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