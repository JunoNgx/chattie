<script lang="ts">
    import { defineComponent } from 'vue'
    import AccentColour from "../models/AccentColour"

    export default defineComponent ({
        name: "SettingsDialog",
        data() {
            return {
                localDarkModeValue: this.$store.state.isDarkMode as boolean,
                localAccentColour: this.$store.state.accentColour as AccentColour,
                AccentColour
            }
        },
        methods: {
            updateDarkMode() {
                this.$store.commit("setIsDarkMode", this.localDarkModeValue)
            },
            updateAccentColour() {
                this.$store.commit("setAccentColour", this.localAccentColour)
                console.log("setting accent colour", this.localAccentColour)
            },
            resetDefaultHandler() {
                if (confirm("This will reset your topic settings to default") === true) {
                    this.$store.commit("resetDefault")
                }
            }
        }
    })
</script>

<template>
    <div class="settings">
        <div class="settings__items">
            <div class="settings__items__item">
                <div class="settings__items__item__label">
                    <label for="dark-mode-checkbox">Dark Mode</label>
                </div>
                <div class="settings__items__item__options">
                    <input
                        type="checkbox"
                        id="dark-mode-checkbox"
                        v-model=localDarkModeValue
                        @change="updateDarkMode(this.localDarkModeValue)"
                    >
                </div>
            </div>
            <div
                class="settings__items__item"
            >   
                <div class="settings__items__item__label">
                    <label for="accent-colour">Accent Colour</label>
                </div>
                <div class="settings__items__item__options">
                    <select
                        id="accent-colour"
                        v-model=localAccentColour
                        @change="updateAccentColour"
                    >
                        <option :value=AccentColour.MAGENTA>Magenta</option>
                        <option :value=AccentColour.AQUAMARINE>Aquamarine</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="settings__buttons">
            <button
                class="settings__buttons__button"
                @click=resetDefaultHandler
            >
                Reset topics to default
            </button>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.settings
    margin: auto
    padding: 1rem
    width: 70%
    height: 50%
    font-size: 1.25rem
    +m.mobile
        width: 90%

    &__items
        margin-bottom: 10rem

        &__item
            margin: 0.5rem
            display: grid
            grid-column-gap: 2rem
            grid-template-columns: 1fr 1fr
    
    &__buttons

        &__button
            float: right
            +m.transition(color, background-color, width, height)

            &:hover
                background-color: v.$acc-aquamarine
                color: v.$bg-light
</style>