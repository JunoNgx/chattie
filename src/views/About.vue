<template>
    <div class="about">
        <p><strong>Chattie</strong> is a conversational utility that provides prompts to conversations. Be it strangers at the airports, new co-workers, or romantic dates; here's where you get your conversation prompt fix.</p>

        <p>This website is also a <strong>Progressive Web App</strong>, meaning it can launch directly from the home screen of your smartphone, and function as a native app. For more information, checkout the <a>Mozilla Developer Network's article</a>.</p>

    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.about
    // border: 1px solid red

    hyphens: auto
    -moz-hyphens: auto
    -webkit-hyphens: auto
    -ms-hyphens: auto
    -o-hyphens: auto

    margin: auto
    padding: 1rem
    width: 70%
    // height: 50%
    font-size: 1.25rem
    +m.mobile
        width: 100%

</style>