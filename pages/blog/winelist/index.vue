<template>
    <BlogCategory categoryKey="winelist" :categoryTitle="$t('blog.categories.wineLists')" />
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'blog',
})

useHead({
    title: t('blog.categories.wineLists')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('blog.categories.wineLists'),
    description: t('blog.categories.wineListsDescription')
}, {
    tagPriority: 'critical'
})
</script>