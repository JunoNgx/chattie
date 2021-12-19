<script lang="ts">
    import { defineComponent } from 'vue'
    import Logo from "./Logo.vue"

    export default defineComponent ({
        name: "Header",
        props: {
            showAboutDialog: Function,
            showSettingsDialog: Function
        },
        components: {
            Logo
        }
    })
</script>

<template>
    <div class="header">
        <div class="header__branding">
            <!-- Chattie -->
            <Logo/>
        </div>
        <div class="header__navbar">
            <router-link class="header__navbar__item" to="/home">Home</router-link>
            <router-link class="header__navbar__item" to="/settings">Settings</router-link>
            <router-link class="header__navbar__item" to="/about">About</router-link>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.header

    display: flex
    align-items: center
    // align-content: space-between
    justify-content: space-between
    // flex-wrap: wrap
    border-bottom: 1px solid v.$text-light

    &__branding
        // border: 1px solid red
        margin: 0.25rem
        // margin: 0.5rem
        // width: min-content
        // padding: 0.5rem 3rem
        // // border-radius: 10rem
        // font-size: 1.5rem
        // // background-color: v.$acc-green
        // background: linear-gradient(90deg, v.$acc-green 50%, v.$acc-magenta 50%)
        // color: #fff
        // user-select: none
    
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

            &:hover
                // text-decoration: underline
                background-color: v.$acc-green

    +m.mobile
        display: block

a.header__navbar__item
    color: v.$text-light
    &:visited
        color: v.$text-light

a.router-link-active
    text-decoration: underline

</style>