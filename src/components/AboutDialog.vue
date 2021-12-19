<script lang="ts">
    import { defineComponent } from 'vue'
    import ModalBase from './ModalBase.vue'

    export default defineComponent ({
        name: "AboutDialog",
        props: {
            close: Function
        },
        components: {
            ModalBase
        }
    })
</script>

<template>
    <ModalBase :title="About" :close="close">
        <div class="about-content">
            <p>
                Chattie is a web application made by Juno Nguyen.
            </p>
        </div>
    </ModalBase>
</template>

<style lang="sass" scope>

</style>