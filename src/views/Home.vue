<script lang="ts">
    import { defineComponent } from 'vue';
    
    // import topicData from "../data/topics.json"
    import type Topic from "../models/Topic"
    // import Header from "./Header.vue"
    import TopicControl   from "../components/TopicControl.vue"
    import PromptDisplay  from "../components/PromptDisplay.vue"
    import NoTopicError   from "../components/NoTopicError.vue"
    // import Footer         from "../components/Footer.vue"
    // import SettingsDialog from "../components/SettingsDialog.vue"
    // import AboutDialog    from "../components/AboutDialog.vue"

    // let promptStr = "Let's get you something to talk about";
    // let enabledTopics: number[] = [];

    export default defineComponent ({
        name: "Home",
        components: {
            // Header,
            TopicControl,
            PromptDisplay,
            NoTopicError,
            // Footer,

            // SettingsDialog,
            // AboutDialog
        },
        data() {
            return {
                // topicData: topicData as Topic[],
                promptStr: "Let's get you something to talk about" as string,
                // enabledTopics: [] as number[],
                hasNoTopicEnabled: false as boolean,
                // isShowingAboutDialog: false as boolean,
                // isShowingSettingsDialog: false as boolean,
                // isDarkMode: false as boolean
            }
        },
        // mounted: function() {

        //     if (localStorage.getItem('enabledTopics')) {
        //         this.enabledTopics = JSON.parse(localStorage.getItem('enabledTopics')!)
        //     } else {
        //         this.resetTopicsToDefault()
        //     }
        //     // console.log(this.enabledTopics)
        // },
        methods: {

            // Data control methods
            getNewPrompt() {
                const topicData: Topic[] = this.$store.state.topicData
                const enabledTopics: number[] = this.$store.state.enabledTopics

                console.log(enabledTopics)

                if (enabledTopics.length === 0) {
                    this.hasNoTopicEnabled = true
                    return
                } else {
                    this.hasNoTopicEnabled = false
                }


                // console.log("get new task from parent")
                let topicIndex = Math.floor(Math.random() * topicData.length)
                while (!enabledTopics.includes(topicIndex)) {
                    topicIndex = Math.floor(Math.random() * topicData.length)
                }

                let promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                while (this.promptStr === topicData[topicIndex].prompts[promptIndex]) {
                    promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                }
                this.promptStr = topicData[topicIndex].prompts[promptIndex]
                // if (this.enabledTopics.length === 0) {
                //     // alert("No topic enabled. Please choose some topics first.")
                //     this.hasNoTopicEnabled = true
                //     return
                // } else {
                //     this.hasNoTopicEnabled = false
                // }

                // // console.log("get new task from parent")
                // let topicIndex = Math.floor(Math.random() * topicData.length)
                // while (!this.enabledTopics.includes(topicIndex)) {
                //     topicIndex = Math.floor(Math.random() * topicData.length)
                // }
                // let promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                // while (this.promptStr === topicData[topicIndex].prompts[promptIndex]) {
                //     promptIndex = Math.floor(Math.random() * topicData[topicIndex].prompts.length)
                // }
                // this.promptStr = topicData[topicIndex].prompts[promptIndex]
            },
            // updateTopicStatus(topicId: number) {
            //     const index = this.enabledTopics.indexOf(topicId)
            //     if (index === -1) { // If not currently in the enabled list
            //         this.enabledTopics.push(topicId)
            //     } else {
            //         this.enabledTopics.splice(index, 1)
            //     }

            //     localStorage.setItem('enabledTopics', JSON.stringify(this.enabledTopics))
            //     // console.log(this.enabledTopics)
            // },
            // updateDarkMode(darkModeValue: boolean) {
            //     this.isDarkMode = darkModeValue
            //     // console.log(this.isDarkMode)
            // },
            // resetTopicsToDefault() {
            //     this.enabledTopics = []
            //     topicData.forEach(topic => {
            //         if (topic.isEnabledByDefault) {this.enabledTopics.push(topic.id)}
            //     })
            // },

            // // UI and navigational methods
            // showSettingsDialog() {
            //     this.isShowingSettingsDialog = true
            // },
            // closeSettingsDialog() {
            //     this.isShowingSettingsDialog = false
            // },
            // showAboutDialog() {
            //     this.isShowingAboutDialog = true
            // },
            // closeAboutDialog() {
            //     this.isShowingAboutDialog = false
            // },
        },
        // watch: {
        //     promptStr: 
        // }
    })
</script>

<template>
    <!-- <transition name="fade" mode="out-in">
        <div> -->
            <!-- <Header
                :showAboutDialog=showAboutDialog
                :showSettingsDialog=showSettingsDialog
            /> -->
            <TopicControl/>
            <PromptDisplay
                :prompt=promptStr
                @get-new-prompt="getNewPrompt"
            />
            <NoTopicError
                v-if=hasNoTopicEnabled
            />
            <!-- <Footer /> -->

            <!-- <SettingsDialog
                v-show=isShowingSettingsDialog
                :darkModeValue=isDarkMode
                :updateDarkMode=updateDarkMode
                :resetDefault=resetTopicsToDefault
                :close=closeSettingsDialog
            />
            <AboutDialog
                v-show=isShowingAboutDialog
                :close=closeAboutDialog
            /> -->
        <!-- </div>
    </transition> -->
</template>