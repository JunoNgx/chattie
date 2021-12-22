<script lang="ts">
    import { defineComponent } from 'vue'
    import AccentColour from '../models/AccentColour'
    import Logo from "./Logo.vue"

    export default defineComponent ({
        name: "Header",
        data() {
            return {
                AccentColour
            }
        },
        props: {
            showAboutDialog: Function,
            showSettingsDialog: Function,
        },
        components: {
            Logo
        }
    })
</script>

<template>
    <div 
        class="header"
        :class="{'header--dark':this.$store.state.isDarkMode}"
    >
        <div class="header__branding">
            <Logo/>
        </div>
        <div class="header__navbar">
            <router-link
                class="header__navbar__item" to="/talk"
                :class="{
                    'header__navbar__item--dark':this.$store.state.isDarkMode,
                    'header__navbar__item--accent-aquamarine':this.$store.state.accentColour===AccentColour.AQUAMARINE,
                    'header__navbar__item--accent-magenta':this.$store.state.accentColour===AccentColour.MAGENTA
                }"
            >
                Let's talk
            </router-link>
            <router-link 
                class="header__navbar__item" to="/settings"
                :class="{
                    'header__navbar__item--dark':this.$store.state.isDarkMode,
                    'header__navbar__item--accent-aquamarine':this.$store.state.accentColour===AccentColour.AQUAMARINE,
                    'header__navbar__item--accent-magenta':this.$store.state.accentColour===AccentColour.MAGENTA
                }"
            >
                Settings
            </router-link>
            <router-link 
                class="header__navbar__item" to="/about"
                :class="{
                    'header__navbar__item--dark':this.$store.state.isDarkMode,
                    'header__navbar__item--accent-aquamarine':this.$store.state.accentColour===AccentColour.AQUAMARINE,
                    'header__navbar__item--accent-magenta':this.$store.state.accentColour===AccentColour.MAGENTA
                }"
            >
                About
            </router-link>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.header

    display: flex
    align-items: center
    justify-content: space-between

    border-bottom: 1px solid v.$text-light
    +m.transition(border-bottom)
    &--dark
        border-bottom: 1px solid v.$text-dark

    &__branding
        margin: 0.25rem
    
    &__navbar
        display: flex
        align-items: center
        justify-content: flex-end
        margin: 0.25rem

        &__item
            margin: 0.5rem
            text-decoration: none
            font-size: 1.25rem
            cursor: pointer
            padding: 0.5rem
            +m.regular-text-col
            +m.transition(background-color)

            &--accent-aquamarine:hover
                    background-color: v.$acc-aquamarine
            &--accent-magenta:hover
                    background-color: v.$acc-magenta

    +m.mobile
        display: block

a.header__navbar__item
    color: v.$text-light
    &:visited
        color: v.$text-light
    &--dark
        color: v.$text-dark
        &:visited
            color: v.$text-dark

a.router-link-active
    text-decoration: underline

</style>