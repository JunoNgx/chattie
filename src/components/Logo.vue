<template>
    <router-link class="logo-router-wrapper" to="/">
        <span class="logo">Chattie</span>
    </router-link>
</template>

<style lang="sass" scoped>

@use "../styles/mixins" as m
@use "../styles/vars" as v

.logo
    display: block
    margin: 0
    width: min-content
    padding: 0.5rem 1.5rem
    font-size: 1.7rem
    background: linear-gradient(90deg, v.$acc-green 50%, v.$acc-magenta 50%)
    color: #fff
    cursor: pointer
    user-select: none

    &-router-wrapper
        text-decoration: none

</style>