<template>
    <div class="py-32 px-8 mx-auto max-w-7xl">
        <ContentDoc>
            <template v-slot="{ doc }">
                <Content :doc="doc" />
            </template>

            <template #not-found>
                <NotFoundError />
            </template>
        </ContentDoc>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'content',
})

useHead({
    titleTemplate: '%s',
})
</script>

<style>
h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
</style>