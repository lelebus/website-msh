<template>
    <NuxtContent>
        <Hero size="60vh" :title="hero.title" :subtitle="hero.subtitle" :primaryButtonLabel="hero.primaryButtonLabel"
            :primaryButtonLink="hero.primaryButtonLink" :secondaryButtonLabel="hero.secondaryButtonLabel"
            :secondaryButtonLink="hero.secondaryButtonLink" :imgSrc="hero.imgSrc"
            @scrollToNextSection="scrollToStart" />

        <div id="start" class="content-ct py-32 px-8 mx-auto max-w-7xl">

            <ContentQuery :path="localePath('/offers')" :where="filters" :sort="{ date: 1 }" v-slot="{ data }">
                <OffersList :data="data" />
            </ContentQuery>

            <LatestOffers class="mx-auto max-w-7xl pt-24 sm:pt-32" />

        </div>
    </NuxtContent>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'content',
})

useHead({
    title: t('pages.vouchers.title')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('pages.vouchers.title')
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
                imgSrc: `/imgs/vouchers-hero-3.jpg`,
                title: this.$t('pages.vouchers.title'),
                subtitle: this.$t('pages.vouchers.heroSubtitle'),
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
            const filters = {
                visible: true,
                date: {
                    $gte: new Date(),
                },
                tags: {
                    $in: ['voucher']
                }
            }

            return filters
        }
    }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>