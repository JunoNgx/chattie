<script lang="ts">
    import { defineComponent } from 'vue'
    import CA from '../components/CustomAnchor.vue'

    export default defineComponent ({
        name: "About",
        components: {
            CA
        }
    })
</script>

<template>
    <div class="about">
        <p><strong>Chattie</strong> is a conversational utility that provides prompts to conversations. Be it strangers at the airport, new co-workers, or romantic dates; here's where you get your conversation prompt fix.</p>

        <p>This website is also a <strong>Progressive Web App</strong>, meaning it can be launched directly from the home screen of your smartphone, and function as a native app. For more information, check out the <CA link="https://developer.mozilla.org/en-US/docs/MDN/About">Mozilla Developer Network's article</CA>.</p>

        <p>Of course, the heart of the application is the archive of prompts, sorted by topics. This is a work-in-progress and new topics are expectedly added over time. If you would like to contribute, please send an email to <CA link="mailto:juno.ngx@gmail.com">juno.ngx@gmail.com</CA>, <CA link="https://twitter.com/JunoNgx">tweet me</CA>, or even better yet, if you are the techie type of person, create a pull request at the project's repository.</p>

        <p>This project is <CA link="https://github.com/JunoNgx/Chattie">open-source</CA> and welcomes contributions.</p>

        <p>Launch screen vector art created by biggorilla298, courtesy of <CA link="https://www.vecteezy.com/vector-art/223587-people-talking-vector">Vecteezy.com</CA></p>

    </div>
</template>

<style lang="sass">

@use "../styles/mixins" as m
@use "../styles/vars" as v

.about
    margin: auto
    padding: 1rem
    width: 70%
    font-size: 1.25rem
    +m.mobile
        width: 90%

</style>