<template>
  <NuxtContent>
    <Hero size="60vh" :title="hero.title" :primaryButtonLabel="hero.primaryButtonLabel"
      :primaryButtonLink="hero.primaryButtonLink" :secondaryButtonLabel="hero.secondaryButtonLabel"
      :secondaryButtonLink="hero.secondaryButtonLink" :imgSrc="hero.imgSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <ContentRxPicture :title="ski.title" :text="ski.text" :imgSrc="ski.imgSrc" :imgAlt="ski.title"
        :primaryButtonLabel="ski.buttonLabel" :primaryButtonLink="ski.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="biking.title" :text="biking.text" :imgSrc="biking.imgSrc" :imgAlt="biking.title"
        :primaryButtonLabel="biking.buttonLabel" :primaryButtonLink="biking.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="ciaspole.title" :text="ciaspole.text" :imgSrc="ciaspole.imgSrc" :imgAlt="ciaspole.title"
        :primaryButtonLabel="ciaspole.buttonLabel" :primaryButtonLink="ciaspole.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="iceclimbing.title" :text="iceclimbing.text" :imgSrc="iceclimbing.imgSrc"
        :imgAlt="iceclimbing.title" :primaryButtonLabel="iceclimbing.buttonLabel"
        :primaryButtonLink="iceclimbing.buttonLink" class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="dogsledding.title" :text="dogsledding.text" :imgSrc="dogsledding.imgSrc"
        :imgAlt="dogsledding.title" class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <LatestOffers category="winter" class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 sm:py-32" />

    </div>
  </NuxtContent>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('pages.winter.title')
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: t('pages.winter.title')
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
        imgSrc: `/imgs/winter-hero.jpg`,
        title: this.$t('pages.winter.title'),
      },

      // sections
      ski: {
        title: this.$t('pages.winter.skiTitle'),
        text: this.$t('pages.winter.skiText'),
        imgSrc: '/imgs/winter-ski.jpg',
        buttonLabel: this.$t('pages.winter.skiButtonLabel'),
        buttonLink: 'https://www.trecime.com/it/le-attivita/in-inverno/sciare.html',
      },
      ciaspole: {
        title: this.$t('pages.winter.ciaspoleTitle'),
        text: this.$t('pages.winter.ciaspoleText'),
        imgSrc: '/imgs/winter-ciaspole.jpg',
        buttonLabel: this.$t('pages.winter.ciaspoleButtonLabel'),
        buttonLink: 'https://www.dolomitivalcomelico.it/trekking-invernale-e-ciaspole/',
      },
      biking: {
        title: this.$t('pages.winter.bikingTitle'),
        text: this.$t('pages.winter.bikingText'),
        imgSrc: '/imgs/winter-bike.jpg',
      },
      iceclimbing: {
        title: this.$t('pages.winter.iceclimbingTitle'),
        text: this.$t('pages.winter.iceclimbingText'),
        imgSrc: '/imgs/winter-iceclimbing.jpeg',
        buttonLabel: this.$t('pages.winter.iceclimbingButtonLabel'),
        buttonLink: 'https://www.dolomitivalcomelico.it/arrampicata-su-ghiaccio/',
      },
      dogsledding: {
        title: this.$t('pages.winter.dogsleddingTitle'),
        text: this.$t('pages.winter.dogsleddingText'),
        imgSrc: '/imgs/winter-dogsledding.jpg',
      },
    }
  },

  methods: {
    scrollToStart() {
      this.$router.push({ hash: '#start' })
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
