<script lang="ts">
    import { defineComponent } from 'vue';
    import type Topic from "./models/Topic"

    import topicData from "./data/topics.json"
    import Header from "./components/Header.vue"
    import TopicControl from "./components/TopicControl.vue"
    import PromptDisplay from "./components/PromptDisplay.vue"
    import NoTopicError from "./components/NoTopicError.vue"
    import Footer from "./components/Footer.vue"

    // let promptStr = "Let's get you something to talk about";
    // let enabledTopics: number[] = [];

    export default defineComponent ({
        name: "App",
        components: {
            Header,
            TopicControl,
            PromptDisplay,
            NoTopicError,
            Footer
        },
        data() {
            return {
                topicData: topicData as Topic[],
                promptStr: "Let's get you something to talk about" as string,
                enabledTopics: [] as number[],
                hasNoTopicEnabled: false as boolean
            }
        },
        mounted: function() {

            if (localStorage.getItem('enabledTopics')) {
                this.enabledTopics = JSON.parse(localStorage.getItem('enabledTopics')!)
            } else {
                this.resetTopicsToDefault()
            }
            // console.log(this.enabledTopics)
        },
        methods: {
            getNewPrompt() {
                if (this.enabledTopics.length === 0) {
                    // alert("No topic enabled. Please choose some topics first.")
                    this.hasNoTopicEnabled = true
                    return
                } else {
                    this.hasNoTopicEnabled = false
                }

                // console.log("get new task from parent")
                let topicIndex = Math.floor(Math.random() * topicData.length)
                while (!this.enabledTopics.includes(topicIndex)) {
                    topicIndex = Math.floor(Math.random() * topicData.length)
                }
                let promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                while (this.promptStr === topicData[topicIndex].prompts[promptIndex]) {
                    promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                }
                this.promptStr = topicData[topicIndex].prompts[promptIndex]
            },
            updateTopicStatus(topicId: number) {
                const index = this.enabledTopics.indexOf(topicId)
                if (index === -1) { // If not currently in the enabled list
                    this.enabledTopics.push(topicId)
                } else {
                    this.enabledTopics.splice(index, 1)
                }

                localStorage.setItem('enabledTopics', JSON.stringify(this.enabledTopics))
                // console.log(this.enabledTopics)
            },
            resetTopicsToDefault() {
                this.enabledTopics = []
                topicData.forEach(topic => {
                    if (topic.isEnabledByDefault) {this.enabledTopics.push(topic.id)}
                })
            }
        }
    })
</script>

<template>
    <Header/>
    <TopicControl
        :topicData=topicData
        :enabledTopics=enabledTopics
        @update-topic-status="updateTopicStatus"
    />
    <PromptDisplay
        :prompt=promptStr
        @get-new-prompt="getNewPrompt"
    />
    <NoTopicError
        v-if=hasNoTopicEnabled
    />
    <Footer />
</template>

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
    min-height: 90vh
    background-color: #255
    // @include m.mobile
    //     background-color: #255

</style>