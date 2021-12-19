<script lang="ts">

</script>

<template>
    <div class="intro">
        <div class="intro__image-wrapper">
            <img
                class="intro__image_wrapper__image"
                src="../assets/PeopleTalking.jpg"
                alt="Illustration of people talking by biggorilla298 from Vecteezy.com"/>
        </div>
        <div class="intro__slogan">
            <div class="intro__slogan__branding" >
                <h1>Chattie</h1>
            </div>
            <div class="intro__slogan__subtitle" >
                <h2>Getting stuck in your conversation? Not sure what to talk about?</h2>
                <h3>You've come to the right place</h3>
            </div>
            <div class="intro__button-wrapper">
                <router-link to="/home">
                    <button>Let's get you started</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.intro
    margin: 1rem auto
    padding: 1rem
    // background-color: red
    max-width: 70%
    +m.mobile
        max-width: 100%

    img
        max-width: 100%
        height: auto
        border-radius: 100%

    &__image-wrapper
        margin: auto
        width: 80%

        &__image
            // margin: auto
            text-align: center

    &__slogan
        text-align: center

</style>