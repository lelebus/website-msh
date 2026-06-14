<template>
    <aside class="border-b border-solid border-black/40 px-6 py-10 sm:py-14 lg:px-8">
        <p class="informative-banner-text mx-auto max-w-3xl text-pretty text-center text-lg/8 text-black/75 sm:text-xl/8"
            v-html="text"></p>
    </aside>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
.informative-banner-text :deep(a) {
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgb(138 19 50 / 0.35);
    text-underline-offset: 3px;
}

.informative-banner-text :deep(a:hover) {
    text-decoration-color: rgb(138 19 50 / 1);
}
</style>
