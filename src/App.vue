<script lang="ts">
    import { defineComponent } from "vue"
    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"

    export default defineComponent ({
        name: "App",
        components: {
            Header,
            Footer
        }
    })
</script>


<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<style lang="sass">

@use "./styles/mixins" as m
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,700;1,300&display=swap')

#app
    font-family: 'Zilla Slab', serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    border: 1px solid #111
    margin: auto
    max-width: 60%
    min-height: 90vh
    background-color: #255
    @include m.mobile
        max-width: 100%
    //     background-color: #255

</style>