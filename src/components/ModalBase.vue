<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: "modal",
        props: {
            title: String,
            close: Function,
        }
    })
</script>

<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__overlay__dialog">
                <div class="modal__overlay__dialog__title">
                    <p>{{title}}</p>
                </div>
                <div class="modal__overlay__dialog__content">
                    <slot>This is the content of the dialog</slot>
                </div>
                <div class="modal__overlay__dialog__footer">
                    <button @click="close">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>