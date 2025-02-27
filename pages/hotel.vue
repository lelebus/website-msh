<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :videoSrc="hero.videoSrc" @scrollToNextSection="scrollToStart" />

    <div id="start" class="content-ct">
      <Testimonial :title="owners.title" :quote="owners.quote" :signatureImgSrc="owners.signatureImgSrc"
        :imgSrc="owners.imgSrc" />

      <SectionHeaderWithBackground :title="hotelBanner.title" :subtitle="hotelBanner.subtitle"
        :imgSrc="hotelBanner.imgSrc" />

      <ContentLxPicture :title="hotelRoom.title" :text="hotelRoom.text" :imgSrc="hotelRoom.imgSrc"
        :imgAlt="hotelRoom.title" class="pt-24 sm:pt-32" />

      <ContentMultiPictures :title="history.title" :subtitle="history.subtitle" :text1="history.text1"
        :text2="history.text2" :text3="history.text3" :pictures="history.multiPictures" />

      <LatestOffers category="hotel" class="mx-auto max-w-7xl px-6 lg:px-8 pb-24" />
    </div>
  </NuxtContent>
</template>

<script setup>
import ContentMultiPictures from '~/components/sections/ContentMultiPictures.vue';

const { t } = useI18n()

useHead({
  title: t('pages.hotel.title')
}, {
  tagPriority: 'critical'
})

useSeoMeta({
  title: t('pages.hotel.title')
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
        videoSrc: `/videos/hotel.mp4`,
        title: this.$t('pages.hotel.heroTitle'),
        subtitle: this.$t('pages.hotel.heroSubtitle'),
      },

      // sections
      owners: {
        title: this.$t('pages.hotel.ownersTitle'),
        quote: this.$t('pages.hotel.ownersQuote'),
        signatureImgSrc: '/imgs/hotel-owners-signature.svg',
        signatureAlt: 'Sergio & Angela',
        imgSrc: '/imgs/hotel-owners.jpg',
        imgAlt: `${this.$t('pages.hotel.ownersTitle')}: Sergio & Angela`,
      },
      hotelBanner: {
        title: this.$t('pages.hotel.bannerTitle'),
        subtitle: this.$t('pages.hotel.bannerSubtitle'),
        imgSrc: '/imgs/hotel-banner.jpg',
      },
      hotelRoom: {
        title: this.$t('pages.hotel.roomsTitle'),
        text: this.$t('pages.hotel.roomsText'),
        imgSrc: '/imgs/hotel-room.jpg',
      },
      history: {
        title: this.$t('pages.hotel.historyTitle'),
        subtitle: this.$t('pages.hotel.historySubtitle'),
        text1: this.$t('pages.hotel.historyText1'),
        text2: this.$t('pages.hotel.historyText2'),
        text3: this.$t('pages.hotel.historyText3'),
        multiPictures: [
          {
            src: '/imgs/hotel-history-1.jpg',
            alt: 'Chalet Piste Bianche - Monaco Sport Hotel 1967'
          },
          {
            src: '/imgs/hotel-history-2.jpg',
            alt: 'Monaco Sport Hotel 1973'
          },
          {
            src: '/imgs/hotel-history-3.jpg',
            alt: 'Monaco Sport Hotel 2000'
          },
        ],
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
