<script lang="ts">
    import { defineComponent } from 'vue'
    import AccentColour from '../models/AccentColour'

    export default defineComponent ({
        name: "Intro",
        data() {
            return {
                AccentColour
            }
        }
    })
</script>

<template>
    <div class="intro">
        <div class="intro__image-wrapper">
            <img
                class="intro__image_wrapper__image"
                src="../assets/PeopleTalking.jpg"
                alt="Illustration of people talking by biggorilla298 from Vecteezy.com"/>
        </div>
        <div class="intro__slogan">
            <div class="intro__slogan__branding" >
                <!-- <Logo/> -->
            </div>
            <div class="intro__slogan__subtitle" >
                <h2>Getting stuck in your conversation? Not sure what to talk about?</h2>
                <h3>You've come to the right place</h3>
            </div>
            <div class="intro__button-wrapper">
                <router-link to="/talk">
                    <button
                        :class="{
                            'button--dark':this.$store.state.isDarkMode,
                            'button--accent-aquamarine':this.$store.state.accentColour===AccentColour.AQUAMARINE,
                            'button--accent-magenta':this.$store.state.accentColour===AccentColour.MAGENTA
                        }"
                    >
                        Let's get you started
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.intro
    margin: auto
    padding: 1rem
    max-width: 70%
    +m.mobile
        max-width: 90%

    img
        max-width: 100%
        height: auto
        border-radius: 100%

    &__image-wrapper
        margin: 1rem auto
        width: 80%

        &__image
            text-align: center

    &__slogan
        text-align: center

        &__branding
            visibility: none
            display: flex
            align-items: center
            justify-content: center

</style>