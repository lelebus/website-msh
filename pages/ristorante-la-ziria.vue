<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <div class="py-24 sm:py-32">
        <SectionHeader :title="food.title" />

        <ContentLxPicture :text="food.text" :imgSrc="food.imgSrc" :imgAlt="food.imgAlt"
          :primaryButtonLabel="food.buttonLabel" :primaryButtonLink="food.buttonLink" />
      </div>

      <ContentRxPicture :title="wine.title" :text="wine.text" :imgSrc="wine.imgSrc" :imgAlt="wine.imgAlt"
        :primaryButtonLabel="wine.primaryButtonLabel" :primaryButtonLink="wine.primaryButtonLink"
        :secondaryButtonLabel="wine.secondaryButtonLabel" :secondaryButtonLink="wine.secondaryButtonLink"
        />

      <SectionHeaderWithBackground :title="stua.title" :subtitle="stua.subtitle" :imgSrc="stua.imgSrc"
        :imgAlt="stua.imgAlt" class="my-24 sm:my-32" />

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
      stua: {
        title: this.$t('pages.restaurant.stuaTitle'),
        subtitle: this.$t('pages.restaurant.stuaText'),
        imgSrc: '/imgs/comelico-estate.jpg',
        imgAlt: this.$t('pages.restaurant.stuaTitle'),
      },
      wine: {
        title: this.$t('pages.restaurant.wineTitle'),
        text: this.$t('pages.restaurant.wineText'),
        imgSrc: '/imgs/comelico-estate.jpg',
        imgAlt: this.$t('pages.restaurant.wineTitle'),
        primaryButtonLabel: this.$t('pages.restaurant.openWinelist'),
        primaryButtonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
        secondaryButtonLabel: this.$t('pages.restaurant.discoverWinecellar'),
        secondaryButtonLink: this.localePath('/anguana-del-vin'),
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
