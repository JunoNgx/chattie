<script lang="ts">
    import { defineComponent } from 'vue'
    // import ModalBase from './ModalBase.vue'

    export default defineComponent ({
        name: "SettingsDialog",
        data() {
            return {
                localDarkModeValue: this.darkModeValue as boolean
            }
        },
        props: {
            darkModeValue: Boolean,
            updateDarkMode: Function,
            resetDefault: Function,
            close: Function,
        },
        // components: {
        //     ModalBase
        // },
        // methods: {
        //     updateDarkMode() {
        //         this.$emit('update-dark-mode', this.isDarkMode)
        //     }
        // }
    })
</script>

<template>
    <div>
        <input
            type="checkbox"
            id="dark-mode-checkbox"
            v-model=localDarkModeValue
            @change="updateDarkMode(this.localDarkModeValue)"
        >
        <label for="dark-mode-checkbox">Dark Mode</label>
        <div class="settings-content">
            <button @click=resetDefault>Reset topics to default</button>
        </div>
    </div>
</template>

<style lang="sass" scope>

</style>