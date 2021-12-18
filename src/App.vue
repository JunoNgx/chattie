<template>
    <PromptDisplay :prompt=topicList[0].prompts[0] />
</template>

<script>
    import PromptDisplay from "./components/PromptDisplay.vue"
    import topicList from "./data/topics.json"

    const randoString = "Blah blah blah";

    export default {
        data() {
            return {
                topicList: topicList,
                randoString: randoString
            }
        },
        components: {
            PromptDisplay
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