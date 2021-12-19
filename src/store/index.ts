import { createStore } from 'vuex'
import type Topic from "../models/Topic"

export default createStore({
    state: {
        topicData: [] as Topic[],
        enabledTopics: [] as number[],
        promptStr: "Let's get you something to talk about" as string,
        isDarkMode: false as boolean
    },
    mutations: {
        setTopicData(state, newData: Topic[]) {
            state.topicData = newData
        },
        setPromptStr (state, newData: string) {
            state.promptStr = newData
        },
        setIsDarkMode (state, newData: boolean) {
            state.isDarkMode = newData
        },
        updateTopicStatus (state, topicId: number) {
            const index = state.enabledTopics.indexOf(topicId)
            if (index === -1) { // If not currently in the enabled list
                state.enabledTopics.push(topicId)
            } else {
                state.enabledTopics.splice(index, 1)
            }
            localStorage.setItem('enabledTopics', JSON.stringify(state.enabledTopics))
        },
        marshalTopicsFromJson (state, newData: number[]) {
            state.enabledTopics = newData
        },
        resetDefault (state) {
            state.enabledTopics = []
            state.topicData.forEach(topic => {
                if (topic.isEnabledByDefault) {
                    // this.enabledTopics.push(topic.id)
                    state.enabledTopics = [...state.enabledTopics, topic.id]
                }
            })
        },
    },
    actions: {
    },
    modules: {
    },
    // getters: {
    //     topicData: (state) => state.topicData,
    //     enabledTopics: (state) => state.enabledTopics
    // }
})
