<script lang="ts">
    import { defineComponent } from "vue"
    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
    import topicData from "./data/topics.json" 

    export default defineComponent ({
        name: "App",
        components: {
            Header,
            Footer
        },
        mounted: function() {

            this.$store.commit("setTopicData", topicData)

            if (localStorage.getItem('enabledTopics')) {
                this.$store.commit(
                    "marshalTopicsFromJson",
                    JSON.parse(localStorage.getItem('enabledTopics')!)
                )
            } else {
                this.$store.commit('resetDefault')
            }

            if (localStorage.getItem('isDarkMode')) {
                this.$store.commit(
                    "setIsDarkMode",
                    JSON.parse(localStorage.getItem("isDarkMode")!)
                )
                // document.body.classList.add('dark')
            }

            if (localStorage.getItem('accentColour')) {
                this.$store.commit(
                    "setAccentColour",
                    JSON.parse(localStorage.getItem("accentColour")!)
                )
            }
        },
    })
</script>


<template>
    <Header/>
        <router-view v-slot="{ Component }">
            <transition mode="out-in" appear>
                <component :is="Component" />
            </transition>
        </router-view>
    <Footer/>
</template>

<style lang="sass">

@use "./styles/mixins" as m
@use "./styles/vars" as v
@use "./styles/universal"
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,700;1,300&display=swap')

#app
    margin: 1rem auto
    max-width: 768px
    min-height: 90vh
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    overflow: hidden

    +m.mobile
        max-width: 100%

.v-enter-from
    transform: translateX(-100%)
    opacity: 0

.v-enter-active, .v-leave-active
    +m.transition(transform, opacity)

.v-leave-to
    transform: translateX(100%)
    opacity: 0

</style>