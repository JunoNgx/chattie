<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: "topic-control",
        data() {
            return {
                isExpanded: false as boolean
            }
        },
        methods: {
            toggleExpand() {
                this.isExpanded = !this.isExpanded
            },
            updateTopicStatus(topicId: number) {
                this.$store.commit("updateTopicStatus", topicId)
            }
        }
    })
</script>

<template>
    <div
        class="topic-settings"
        :class="{'topic-settings--is-expanded':isExpanded}"
    >

        <!-- The expand button -->
        <div class="topic-settings__expand-button" @click="toggleExpand">
            <span class="topic-settings__expand-button__text">Topic settings</span>
            <div 
                class="topic-settings__expand-button__icon"
                :class="{'topic-settings__expand-button__icon--is-expanded':isExpanded}"
            ></div>
        </div>

        <!-- List of available topics -->
        <div
            class="topic-settings__topic-wrapper"
            :class="{'topic-settings__topic-wrapper--is-expanded':isExpanded}"
        >
            <p
                class="topic-settings__topic-wrapper__item"
                v-for="topic in this.$store.state.topicData" :key="topic.name"
                :class="{
                    'topic-settings__topic-wrapper__item--is-enabled'
                        :this.$store.state.enabledTopics.includes(topic.id)
                }"
                @click="updateTopicStatus(topic.id)"
            >
                {{topic.name}}
            </p>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.topic-settings
    border: 1px solid v.$text-light
    margin: 2rem auto
    padding: 0.5rem
    overflow: hidden
    max-width: 60%
    max-height: 2rem
    +m.transition(max-height)
    +m.mobile
        max-width: 90%
    
    &--is-expanded
        // Might need to be changed with new topics added
        max-height: 50vh

    &__expand-button
        cursor: pointer
        text-align: center
        height: 2rem
        margin-bottom: 1rem
        border-bottom: 2px solid v.$bg-light
        +m.transition(border-bottom)
        &:hover
            border-bottom: 2px solid v.$acc-green

        &__text
            font-size: 1.5rem

        &__icon
            display: inline-block
            width: 1rem
            height: 1rem
            right: 0%
            border-right: 5px solid v.$acc-green
            border-bottom: 5px solid v.$acc-green
            transform: rotate(45deg)
            transform-origin: 100% 100%
            margin-left: 1rem
            +m.transition(transform-origin, transform)

            &--is-expanded
                transform-origin: 65% 65%
                transform: rotate(225deg)

    &__topic-wrapper
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap
        gap: 0.5rem 1rem
        opacity: 0
        @include m.transition(opacity)

        &--is-expanded
            opacity: 1

        &__item
            margin: 0
            padding: 0.4rem
            border: 2px solid v.$acc-green
            // border-radius: 25px
            cursor: pointer
            user-select: none
            +m.regular-text-col
            +m.transition(background-color)

            &--is-enabled
                color: black
                background-color: v.$acc-green

</style>