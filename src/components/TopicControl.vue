<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: "topic-control",
        props: {
            topicData: Array,
            enabledTopics: Array
        },
        created() {
            console.log(this.topicData);
            console.log(this.enabledTopics);
        },
        methods: {
            updateTopicStatus(topicId: number) {
                // const index = this.enabledTopics?.indexOf(topicId)
                // if (index !== undefined && index === -1) {
                //     this.enabledTopics?.push(topicId)
                // } else {
                //     this.enabledTopics?.splice(index, 1)
                // }
                this.$emit("update-topic-status", topicId)
            }
        }
    })
</script>

<template>
    <div class="topic-settings">
        <div class="topic-settings__expand-button">
            <span class="topic-settings__expand-button__text">Topic settings</span>
            <div class="topic-settings__expand-button__icon"></div>
        </div>
        <div class="topic-settings__topic-wrapper">
            <p
                class="topic-settings__topic-wrapper__item"
                v-for="topic in topicData" :key="topic.name"
                :class="{
                    'topic-settings__topic-wrapper__item--is-enabled'
                        :enabledTopics.includes(topic.id)
                }"
                @click="updateTopicStatus(topic.id)"
            >
                {{topic.name}}
            </p>
        </div>
    </div>
</template>

<style lang="sass">

.topic-settings
    border: 1px solid blue
    // width: min-content
    margin: auto

    &__expand-button
        border: 1px solid yellow
        // margin: auto
        // position: relative
        cursor: pointer
        // display: flex
        // align-items: center
        text-align: center

        &__text
            font-size: 1.5rem

        &__icon
            display: inline-block
            width: 1rem
            height: 1rem
            // background-color: cyan
            // position: absolute
            right: 0%
            // top: 50% - width/2
            border-right: 5px solid cyan
            border-bottom: 5px solid cyan
            transform: rotate(45deg)
            transform-origin: 100% 100%

    &__topic-wrapper
        display: flex
        align-items: center
        justify-content: center
        gap: 0.5rem

        &__item
            padding: 0.7rem
            border: 1px solid aquamarine
            border-radius: 25px
            cursor: pointer
            &--is-enabled
                background-color: cyan

</style>