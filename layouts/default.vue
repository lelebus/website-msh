<template>
    <div class="page-ct bg-white">
        <Header />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
    titleTemplate: `%s | ${t('msh.title')}`,
    title: "Home",
})

useSeoMeta({
    title: "Home",
    description: t('msh.description')
}, {
    tagPriority: 'critical'
})
</script>

<script>
export default {
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    }
}
</script>
