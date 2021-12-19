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
    <modal-base :close="close">
        <p>Chattie is a web application made by Juno Nguyen.</p>
    </modal-base>
</template>

<style lang="sass" scope>

</style>