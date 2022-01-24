<script lang="ts">
    import { defineComponent } from 'vue';
    
    import TopicControl   from "@/components/TopicControl.vue"
    import PromptDisplay  from "@/components/PromptDisplay.vue"

    export default defineComponent ({
        name: "Home",
        components: {
            TopicControl,
            PromptDisplay,
        },
    })
</script>

<template>
    <div class="home">
        <TopicControl/>
        <PromptDisplay/>
    </div>
</template>

<style lang="sass">

    .home
        width: 100%

</style>