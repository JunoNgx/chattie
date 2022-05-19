<script lang="ts">
    import { defineComponent } from 'vue'
    import CA from '@/components/CustomAnchor.vue'

    export default defineComponent ({
        name: "FooterComponent",
        components: {
            CA
        }
    })
</script>

<template>
    <div 
        class="footer"
        :class="{'footer--dark':this.$store.state.isDarkMode}"
    >
        <p>made by <CA link="https://junongx.com/">Juno Nguyen</CA></p>
    </div>
</template>

<style lang="sass">

    @use "@/styles/mixins" as m
    @use "@/styles/vars" as v

    .footer
        border-top: 1px solid v.$text-light
        font-size: 1.2rem
        text-align: center
        +m.transition(border-top)
        
        &--dark
            border-top: 1px solid v.$text-dark

</style>