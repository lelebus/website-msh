<template>
    <NuxtContent>
        <Hero size="60vh" :title="hero.title" :primaryButtonLabel="hero.primaryButtonLabel"
            :primaryButtonLink="hero.primaryButtonLink" :secondaryButtonLabel="hero.secondaryButtonLabel"
            :secondaryButtonLink="hero.secondaryButtonLink" :imgSrc="hero.imgSrc"
            @scrollToNextSection="scrollToStart" />

        <div id="start" class="content-ct py-32 px-8 mx-auto max-w-7xl">

            <ContentQuery :path="localePath('/offers')" :where="filters" :sort="{ date: 1 }"
                v-slot="{ data }">
                <OffersList :data="data" />
            </ContentQuery>

        </div>
    </NuxtContent>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'content',
})

useHead({
    title: t('offers.title')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('offers.title')
}, {
    tagPriority: 'critical'
})
</script>

<script>
export default {
    data() {
        return {
            // hero
            hero: {
                imgSrc: `/imgs/offers-hero.jpg`,
                title: this.$t('offers.title'),
            },
        }
    },

    methods: {
        scrollToStart() {
            this.$router.push({ hash: '#start' })
        }
    },

    computed: {
        filters() {
            return {
                visible: true,
                date: {
                    $gte: new Date(),
                }
            }
        }
    }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>