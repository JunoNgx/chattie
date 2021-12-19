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
            <p class="header__navbar__item" @click=showSettingsDialog>Settings</p>
            <p class="header__navbar__item" @click=showAboutDialog>About</p>
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