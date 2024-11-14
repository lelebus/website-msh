<template>
  <NuxtContent>
    <Hero size="60vh" :title="hero.title" :primaryButtonLabel="hero.primaryButtonLabel"
      :primaryButtonLink="hero.primaryButtonLink" :secondaryButtonLabel="hero.secondaryButtonLabel"
      :secondaryButtonLink="hero.secondaryButtonLink" :imgSrc="hero.imgSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <ContentRxPicture :title="hiking.title" :text="hiking.text" :imgSrc="hiking.imgSrc" :imgAlt="hiking.title"
        :primaryButtonLabel="hiking.buttonLabel" :primaryButtonLink="hiking.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="climbing.title" :text="climbing.text" :imgSrc="climbing.imgSrc" :imgAlt="climbing.title"
        :primaryButtonLabel="climbing.buttonLabel" :primaryButtonLink="climbing.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="biking.title" :text="biking.text" :imgSrc="biking.imgSrc" :imgAlt="biking.title"
        :primaryButtonLabel="biking.buttonLabel" :primaryButtonLink="biking.buttonLink"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="horsebackRiding.title" :text="horsebackRiding.text" :imgSrc="horsebackRiding.imgSrc"
        :imgAlt="horsebackRiding.title" class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="paragliding.title" :text="paragliding.text" :imgSrc="paragliding.imgSrc"
        :imgAlt="paragliding.title" class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <ContentRxPicture :title="golf.title" :text="golf.text" :imgSrc="golf.imgSrc" :imgAlt="golf.title"
        class="py-12 sm:py-16 border-b border-solid border-black/40" />

      <LatestOffers category="summer" class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 sm:py-32" />

    </div>
  </NuxtContent>
</template>
<script setup>
const { t } = useI18n()

useHead({
  title: t('pages.summer.title')
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: t('pages.summer.title')
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
        imgSrc: `/imgs/summer-hero.jpg`,
        title: this.$t('pages.summer.title'),
      },

      // sections
      hiking: {
        title: this.$t('pages.summer.hikingTitle'),
        text: this.$t('pages.summer.hikingText'),
        imgSrc: '/imgs/hiking.jpg',
        buttonLabel: this.$t('pages.summer.hikingButtonLabel'),
        buttonLink: 'https://www.dolomitivalcomelico.it/sentieri/',
      },
      biking: {
        title: this.$t('pages.summer.bikingTitle'),
        text: this.$t('pages.summer.bikingText'),
        imgSrc: '/imgs/home-summer.jpg',
        buttonLabel: this.$t('pages.summer.bikingButtonLabel'),
        buttonLink: 'https://www.dolomitivalcomelico.it/bike-e-mtb/',
      },
      climbing: {
        title: this.$t('pages.summer.climbingTitle'),
        text: this.$t('pages.summer.climbingText'),
        imgSrc: '/imgs/ferrata.jpg',
        buttonLabel: this.$t('pages.summer.climbingButtonLabel'),
        buttonLink: 'https://www.dolomitivalcomelico.it/vie-ferrate/',
      },
      paragliding: {
        title: this.$t('pages.summer.paraglidingTitle'),
        text: this.$t('pages.summer.paraglidingText'),
        imgSrc: '/imgs/paragliding.jpg',
        buttonLabel: this.$t('pages.winecellar.openWinelist'),
        buttonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
      },
      golf: {
        title: this.$t('pages.summer.golfTitle'),
        text: this.$t('pages.summer.golfText'),
        imgSrc: '/imgs/golf.jpg',
        buttonLabel: this.$t('pages.winecellar.openWinelist'),
        buttonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
      },
      horsebackRiding: {
        title: this.$t('pages.summer.horsebackRidingTitle'),
        text: this.$t('pages.summer.horsebackRidingText'),
        imgSrc: '/imgs/horseback.jpg',
        buttonLabel: this.$t('pages.winecellar.openWinelist'),
        buttonLink: 'https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8',
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
