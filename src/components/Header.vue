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
            Chattie - A conversational companion
        </p>
        <div class="header__navbar">
            <router-link class="header__navbar__item" to="/">Home</router-link>
            <router-link class="header__navbar__item" to="/settings">Settings</router-link>
            <router-link class="header__navbar__item" to="/about">About</router-link>
        </div>
    </div>
</template>

<style lang="sass">

.header
    
    &__navbar
        display: flex
        align-items: center
        justify-content: flex-end

        &__item
            cursor: pointer
            margin: 0.5rem

</style>