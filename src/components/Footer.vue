<template>
    <div 
        class="footer"
        :class="{'footer--dark':this.$store.state.isDarkMode}"
    >
        <p>made by <a href="https://junongx.com/" rel="noopener noreferrer" target="_blank">Juno Nguyen</a> with curiosity</p>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.footer
    border-top: 1px solid v.$text-light
    font-size: 1.2rem
    text-align: center
    +m.transition(border-top)
    
    &--dark
        border-top: 1px solid v.$text-dark

</style>