<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent ({
        name: "Header",
        props: {
            showAboutDialog: Function,
            showSettingsDialog: Function
        }
    })
</script>

<template>
    <div class="header">
        <p class="header__branding">
            Chattie
        </p>
        <div class="header__navbar">
            <router-link class="header__navbar__item" to="/">Home</router-link>
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
        margin: 0.5rem
        width: min-content
        padding: 0.5rem 3rem
        border-radius: 10rem
        font-size: 1.5rem
        background-color: v.$acc-green
    
    &__navbar
        display: flex
        align-items: center
        justify-content: flex-end
        margin: 0.5rem

        &__item
            margin: 0.5rem
            text-decoration: none
            font-size: 1.25rem
            cursor: pointer
            +m.regular-text-col
            &:hover
                text-decoration: underline

    +m.mobile
        display: block

</style>