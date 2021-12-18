<template>
    <PromptDisplay @get-new-prompt="getNewPrompt" :prompt=promptStr />
</template>

<script>
    import PromptDisplay from "./components/PromptDisplay.vue"
    import topicList from "./data/topics.json"

    const randoString = "Blah blah blah";
    const promptStr = "";

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

    // import Hallo from "./components/Hallo.vue"

    // export default {
    //     components: {
    //         Hallo
    //     }
    // }

    // import HelloWorld from './components/HelloWorld.vue'

    // export default {
    //     name: 'App',
    //     components: {
    //         HelloWorld
    //     }
    // }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>