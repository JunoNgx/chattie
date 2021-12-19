<template>
    <div class="footer">
        <p>made by <a href="https://junongx.com/" rel="noopener noreferrer" target="_blank">Juno Nguyen</a> with curiosity</p>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.footer
    font-size: 1.2rem
    text-align: center

    a
        color: v.$acc-green
        &:visited
            color: v.$acc-green

</style>