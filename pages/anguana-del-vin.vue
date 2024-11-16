<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <ContentRxPicture :title="wine.title" :text="wine.text" :imgSrc="wine.imgSrc" :imgAlt="wine.title"
        :primaryButtonLabel="wine.buttonLabel" :primaryButtonLink="wine.buttonLink" class="py-24 sm:py-32" />

      <ContentLxPicture :title="mythology.title" :text="mythology.text" :imgSrc="mythology.imgSrc"
        :imgAlt="mythology.title" class="pb-24 sm:pb-32" />

      <SectionHeaderWithBackground :title="ctaBanner.title" :subtitle="ctaBanner.subtitle"
        :buttonLabel="ctaBanner.buttonLabel" :buttonLink="ctaBanner.buttonLink" :imgSrc="ctaBanner.imgSrc" />

    </div>
  </NuxtContent>
</template>
<script setup>
const { t } = useI18n()

useHead({
  title: t('pages.winecellar.title')
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: t('pages.winecellar.title')
}, {
  tagPriority: 'critical'
})
</script>

<script>
export default {
  data() {
    return {
      title: 'Monaco Sport Hotel',
      logoSrc: '/logo.svg',
      email: 'info@monacosporthotel.com',

      // hero
      hero: {
        videoSrc: `/videos/cantina.mp4`,
        title: this.$t('pages.winecellar.heroTitle'),
        subtitle: this.$t('pages.winecellar.heroSubtitle'),
      },

      // sections
      wine: {
        title: this.$t('pages.winecellar.wineTitle'),
        text: this.$t('pages.winecellar.wineText'),
        imgSrc: '/imgs/winecellar-bottles.jpg',
        buttonLabel: this.$t('pages.winecellar.openWinelist'),
        buttonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
      },
      mythology: {
        title: this.$t('pages.winecellar.mythologyTitle'),
        text: this.$t('pages.winecellar.mythologyText'),
        imgSrc: '/imgs/winecellar-anguana.jpg',
      },
      ctaBanner: {
        title: this.$t('pages.winecellar.ctaTitle'),
        subtitle: this.$t('pages.winecellar.ctaSubtitle'),
        buttonLabel: this.$t('pages.winecellar.ctaButtonLabel'),
        buttonLink: "mailto:info@monacosporthotel.com",
        imgSrc: '/imgs/winecellar-food.jpg',
        imgAlt: this.$t('pages.restaurant.title'),
      }
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
