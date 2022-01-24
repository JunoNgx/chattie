<script lang="ts">
    import { defineComponent } from 'vue'
    import AccentColour from '@/models/AccentColour'

    export default defineComponent ({
        name: "CustomAnchor",
        data() {
            return {
                AccentColour
            }
        },
        props: {
            link: String
        }
    })
</script>

<template>
    <a
        class="custom-anchor"
        :class="{
            'custom-anchor--accent-aquamarine'
                :this.$store.state.accentColour===AccentColour.AQUAMARINE,
            'custom-anchor--accent-magenta'
                :this.$store.state.accentColour===AccentColour.MAGENTA
        }"
        :href=link
        rel="noopener noreferrer"
        target="_blank"
    >
        <slot/>
    </a>
</template>

<style lang="sass">
    @use "@/styles/mixins" as m
    @use "@/styles/vars" as v

    .custom-anchor
        +m.transition(color)
        &--accent-aquamarine
            color: v.$acc-aquamarine
            &:visited
                color: v.$acc-aquamarine
        &--accent-magenta
            color: v.$acc-magenta
            &:visited
                color: v.$acc-magenta
</style>