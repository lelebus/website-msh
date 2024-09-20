<template>
    <BlogCategory categoryKey="winecellar" :categoryTitle="$t('blog.categories.cellarManagement')" />
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'blog',
})

useHead({
    title: t('blog.categories.cellarManagement')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('blog.categories.cellarManagement'),
    description: t('blog.categories.cellarManagementDescription')
}, {
    tagPriority: 'critical'
})
</script>