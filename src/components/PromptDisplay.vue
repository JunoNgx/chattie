<template>
    <div>
        <p>{{prompt}}</p>
        <button>Get new topic</button>
    </div>
</template>

<script>
    export default {
        props: {
            prompt: {
                type: String,
                default: "Let's get you something to talk about\nPress the button below"
            }
        }
    }
</script>

<style scoped>

</style>