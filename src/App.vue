<template>
    <PromptDisplay @get-new-prompt="getNewPrompt" :prompt=promptStr />
</template>

<script lang="ts">
    import PromptDisplay from "./components/PromptDisplay.vue"
    import topicData from "./data/topics.json"

    let promptStr = "Let's get you something to talk about";
    let enabledTopics: number[] = [];

    export default {
        data() {
            return {
                topicData: topicData,
                promptStr: promptStr,
                enabledTopics: enabledTopics
            }
        },
        components: {
            PromptDisplay
        },
        created: function() {

            topicData.forEach(topic => {
                if (topic.isEnabledByDefault) enabledTopics.push(topic.id)
            })
            // console.log(enabledTopics)
        },
        methods: {
            getNewPrompt() {
                // console.log("get new task from parent")
                let topicIndex = Math.floor(Math.random() * topicData.length);
                while (!enabledTopics.includes(topicIndex)) {
                    topicIndex = Math.floor(Math.random() * topicData.length);
                }
                let promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length);
                while (this.promptStr === topicData[topicIndex].prompts[promptIndex]) {
                    promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length);
                }
                this.promptStr = topicData[topicIndex].prompts[promptIndex];
            }
        }
    }
</script>

<style lang="sass">

@use "./styles/mixins" as m
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,700;1,300&display=swap')

#app
    font-family: 'Zilla Slab', serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    border: 1px solid #111
    margin: auto
    max-width: 1280px
    text-align: center
    background-color: #777
    @include m.mobile
        background-color: #255

</style>