<template>
    <div class="about">
        <p><strong>Chattie</strong> is a conversational utility that provides prompts to conversations. Be it strangers at the airports, new co-workers, or romantic dates; here's where you get your conversation prompt fix.</p>

        <p>This website is also a <strong>Progressive Web App</strong>, meaning it can be launched directly from the home screen of your smartphone, and function as a native app. For more information, checkout the <a href="https://developer.mozilla.org/en-US/docs/MDN/About" rel="noopener noreferrer" target="_blank">Mozilla Developer Network's article</a>.</p>

        <p>Of course, the heart of the application is the archive of prompts, sorted by topics. This is a long work of progress and new topics are expectedly added over time. If you would like to contribute, please send an email to <a href="juno.ngx@gmail.com" rel="noopener noreferrer" target="_blank">juno.ngx@gmail.com</a>, or <a href="https://twitter.com/JunoNgx" rel="noopener noreferrer" target="_blank">tweet me</a>, or even better yet, if you are the techie type of person, create a pull request at the project's repository.</p>

        <p>This project is <a href="https://github.com/JunoNgx/Chattie" rel="noopener noreferrer" target="_blank">open-sourced</a> and welcomes contributions.</p>

        <p>Launch screen vector art created by biggorilla298, courtesy of <a href="https://www.vecteezy.com/vector-art/223587-people-talking-vector" rel="noopener noreferrer" target="_blank">Vecteezy.com</a></p>

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
        width: 90%

</style>