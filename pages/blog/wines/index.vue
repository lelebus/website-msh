<template>
    <BlogCategory categoryKey="wines" :categoryTitle="$t('blog.categories.wineEducation')" />
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'blog',
})

useHead({
    title: t('blog.categories.wineEducation')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('blog.categories.wineEducation'),
    description: t('blog.categories.wineEducationDescription')
}, {
    tagPriority: 'critical'
})
</script>