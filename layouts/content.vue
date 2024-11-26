<template>
    <Html :lang="$i18n.locale">

    <Body>
        <div class="page-ct bg-white">
            <Header onlyFixedMenu />

            <main>
                <slot />
            </main>

            <Footer />
        </div>
    </Body>

    </Html>
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