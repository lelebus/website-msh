<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
            <div class="py-24 sm:py-32">
        <SectionHeader :title="features.title" :subtitle="features.subtitle" />
        <FeaturesList  :features="features.items" />
      </div>

      <ContentLxPicture :title="pool.title" :text="pool.text" :imgSrc="pool.imgSrc" :imgAlt="pool.title"
        class="pb-24 sm:pb-32" />

      <ContentRxPicture :title="spa.title" :text="spa.text" :imgSrc="spa.imgSrc" :imgAlt="spa.title"
        class="pb-24 sm:pb-32" />

      <LatestOffers class="mx-auto max-w-7xl sm:px-6 lg:px-8" />
    </div>
  </NuxtContent>
</template>

<script setup>
useHead({
  title: "SPA & Pool"
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: "SPA & Pool"
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
        videoSrc: `/videos/spa-and-pool.mp4`,
        title: this.$t('pages.spaAndPool.heroTitle'),
        subtitle: this.$t('pages.spaAndPool.heroSubtitle'),
      },

      // sections
      pool: {
        title: this.$t('pages.spaAndPool.poolTitle'),
        text: this.$t('pages.spaAndPool.poolText'),
        imgSrc: '/imgs/spa-pool.jpg',
      },
      spa: {
        title: this.$t('pages.spaAndPool.spaTitle'),
        text: this.$t('pages.spaAndPool.spaText'),
        imgSrc: '/imgs/spa-sauna.jpg',
      },
      features: {
        title: this.$t('pages.spaAndPool.featuresTitle'),
        subtitle: this.$t('pages.spaAndPool.featuresSubtitle'),
        items: [
          {
            name: this.$t('pages.spaAndPool.saunaTitle'),
            description: this.$t('pages.spaAndPool.saunaText'),
          },
          {
            name: this.$t('pages.spaAndPool.bagnoTurcoTitle'),
            description: this.$t('pages.spaAndPool.bagnoTurcoText'),
          },
          {
            name: this.$t('pages.spaAndPool.bagnoMediterraneoTitle'),
            description: this.$t('pages.spaAndPool.bagnoMediterraneoText'),
          },
          {
            name: this.$t('pages.spaAndPool.docciaTropicaleTitle'),
            description: this.$t('pages.spaAndPool.docciaTropicaleText'),
          },
          {
            name: this.$t('pages.spaAndPool.secchiataSiberianaTitle'),
            description: this.$t('pages.spaAndPool.secchiataSiberianaText'),
          },
          {
            name: this.$t('pages.spaAndPool.cascataGhiaccioTitle'),
            description: this.$t('pages.spaAndPool.cascataGhiaccioText'),
          },
          {
            name: this.$t('pages.spaAndPool.areaRelaxTitle'),
            description: this.$t('pages.spaAndPool.areaRelaxText'),
          },
          {
            name: this.$t('pages.spaAndPool.piscinaTitle'),
            description: this.$t('pages.spaAndPool.piscinaText'),
          },
        ]
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
