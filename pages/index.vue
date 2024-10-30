<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <SectionHeader :title="mission.title" :subtitle="mission.subtitle" />

      <FourColBanner :cols="fourCols" />

      <LatestOffers class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 sm:py-32" />

      <SectionHeaderWithBackground :title="winecellar.title" :subtitle="winecellar.subtitle"
        :buttonLabel="winecellar.buttonLabel" :buttonLink="winecellar.buttonLink" :imgSrc="winecellar.imgSrc" />

    </div>
  </NuxtContent>
</template>

<script setup>
useHead({
  title: "Home"
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: "Home"
}, {
  tagPriority: 'critical'
})
</script>

<script>
const runtimeConfig = useRuntimeConfig()

const season = 'summer'

export default {
  data() {
    return {
      title: 'Monaco Sport Hotel',
      mission: this.$t('msh.mission'),
      logoSrc: '/logo.svg',
      email: 'info@monacosporthotel.com',

      // hero
      hero: {
        videoSrc: `/videos/home-${season}.mp4`,
        title: this.$t('pages.home.heroTitle'),
        subtitle: this.$t('pages.home.heroSubtitle'),
      },

      // sections
      mission: {
        title: this.$t('pages.home.missionTitle'),
        subtitle: this.$t('pages.home.missionText'),
      },

      fourCols: [
        {
          title: this.$t('pages.summer.title'),
          icon: '/icons/sun.svg',
          imgSrc: '/imgs/comelico-estate.jpg',
          url: this.localePath('/summer'),
        },
        {
          title: this.$t('pages.winter.title'),
          icon: '/icons/snow.svg',
          imgSrc: '/imgs/comelico-inverno.jpg',
          url: this.localePath('/winter'),
        },
        {
          title: this.$t('pages.restaurant.title'),
          icon: '/icons/restaurant.svg',
          imgSrc: '/imgs/comelico-estate.jpg',
          url: this.localePath('/ristorante-la-ziria'),
        },
        {
          title: this.$t('pages.spaAndPool.title'),
          icon: '/icons/sauna.svg',
          imgSrc: '/imgs/comelico-inverno.jpg',
          url: this.localePath('/spa-and-pool'),
        },
      ],

      offers: {
        title: this.$t('pages.offers.title'),
      },

      winecellar: {
        title: this.$t('pages.home.winecellarTitle'),
        subtitle: this.$t('pages.home.winecellarText'),
        buttonLabel: this.$t('pages.home.winecellarButtonLabel'),
        buttonLink: this.localePath('/winecellar'),
        imgSrc: '/imgs/comelico-estate.jpg',
        imgAlt: this.$t('pages.home.winecellarTitle'),
      },

      newsletter: {
        subscriberEmail: null,
        title: this.$t('sections.newsletter.title'),
        inputLabel: this.$t('sections.newsletter.inputLabel'),
        inputPlaceholder: this.$t('sections.newsletter.inputLabel'),
        inputButtonLabel: this.$t('sections.newsletter.subscribe'),
        policyNotice: this.$t('sections.newsletter.policyNotice'),
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
