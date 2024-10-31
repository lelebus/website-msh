<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <div class="py-24 sm:py-32">
        <SectionHeader :title="food.title" />

        <ContentLxPicture :text="food.text" :imgSrc="food.imgSrc" :imgAlt="food.imgAlt" :buttonLabel="food.buttonLabel"
          :buttonLink="food.buttonLink" />
      </div>
      <ContentRxPicture :title="wine.title" :text="wine.text" :imgSrc="wine.imgSrc" :imgAlt="wine.imgAlt"
        :buttonLabel="wine.buttonLabel" :buttonLink="wine.buttonLink" class="pb-24 sm:pb-32" />

      <LatestOffers class="mx-auto max-w-7xl sm:px-6 lg:px-8" />
    </div>
  </NuxtContent>
</template>

<script setup>
import SectionHeader from '~/components/sections/SectionHeader.vue';

useHead({
  title: "Ristorante La Žiria "
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: "Ristorante La Žiria"
}, {
  tagPriority: 'critical'
})
</script>

<script>
export default {
  data() {
    return {
      title: 'Monaco Sport Hotel',
      mission: this.$t('msh.mission'),
      logoSrc: '/logo.svg',
      email: 'info@monacosporthotel.com',

      // hero
      hero: {
        videoSrc: `/videos/ristorante.mp4`,
        title: this.$t('pages.restaurant.heroTitle'),
        subtitle: this.$t('pages.restaurant.heroSubtitle'),
      },

      // sections
      food: {
        title: this.$t('pages.restaurant.foodTitle'),
        text: this.$t('pages.restaurant.foodText'),
        imgSrc: '/imgs/comelico-estate.jpg',
        imgAlt: this.$t('pages.restaurant.foodTitle'),
        buttonLabel: this.$t('pages.restaurant.downloadMenu'),
        buttonLink: '/static/menu.pdf',
      },
      wine: {
        title: this.$t('pages.restaurant.wineTitle'),
        text: this.$t('pages.restaurant.wineText'),
        imgSrc: '/imgs/comelico-estate.jpg',
        imgAlt: this.$t('pages.restaurant.wineTitle'),
        buttonLabel: this.$t('pages.restaurant.openWinelist'),
        buttonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
      },

      offers: {
        title: this.$t('pages.offers.title'),
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
