<template>
    <PromptDisplay @get-new-prompt="getNewPrompt" :prompt=promptStr />
</template>

<script>
    import PromptDisplay from "./components/PromptDisplay.vue"
    import topicList from "./data/topics.json"

    const randoString = "Blah blah blah";
    const promptStr = "Let's get you something to talk about\nPress the button below";

    export default {
        data() {
            return {
                topicList: topicList,
                randoString: randoString,
                promptStr: promptStr
            }
        },
        components: {
            PromptDisplay
        },
        methods: {
            getNewPrompt() {
                // console.log("get new task from parent")
                const topicIndex = Math.floor(Math.random() * topicList.length);
                const promptIndex = Math.floor(Math.random() * topicList[topicIndex].prompts.length);
                this.promptStr = topicList[topicIndex].prompts[promptIndex];
            }
        }
    }
</script>

<style lang="sass">

@use "./styles/mixins"
@use "./styles/vars"

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
    @include mixins.mobile
        background-color: #255

</style>