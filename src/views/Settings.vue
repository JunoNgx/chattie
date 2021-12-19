<script lang="ts">
    import { defineComponent } from 'vue'
    // import ModalBase from './ModalBase.vue'

    export default defineComponent ({
        name: "SettingsDialog",
        data() {
            return {
                localDarkModeValue: this.$store.state.isDarkMode as boolean
            }
        },
        // props: {
        //     // darkModeValue: Boolean,
        //     // updateDarkMode: Function,
        //     // resetDefault: Function,
        //     // close: Function,
        // },
        // components: {
        //     ModalBase
        // },
        methods: {
            updateDarkMode() {
                // this.$emit('update-dark-mode', this.localDarkModeValue)
                this.$store.commit("setIsDarkMode", this.localDarkModeValue)
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
                <input
                    type="checkbox"
                    id="dark-mode-checkbox"
                    v-model=localDarkModeValue
                    @change="updateDarkMode(this.localDarkModeValue)"
                >
                <label for="dark-mode-checkbox">Dark Mode</label>
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
    // border: 1px solid red
    margin: auto
    padding: 1rem
    width: 70%
    height: 50%
    font-size: 1.25rem
    +m.mobile
        width: 90%

    &__items
        // background-color: red
        margin-bottom: 10rem

        &__item
            margin: 0.5rem
    
    &__buttons
        // position: relative

        &__button
            // border: 1px solid v.$text-light
            // background-color: v.$bg-light
            // cursor: pointer
            // width: fit-content
            // font-family: v.$font-stack
            // font-size: 1.25rem
            // margin: 1rem
            // padding: 0.75rem
            // color: v.$text-light
            float: right
            +m.transition(color, background-color, width, height)

            &:hover
                background-color: v.$acc-green
                color: v.$bg-light
</style>