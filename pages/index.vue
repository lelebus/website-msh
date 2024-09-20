<template>
  <NuxtContent>
    <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
      :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
      :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
      :imgSrc="hero.imgSrc" />
    <Stats id="start" :title="stats.title" :stats="stats.stats" />

    <div class="content-ct">
      <div id="features" class="features-ct pt-[88px]">
        <FeaturesRx :titleLabel="featOne.titleLabel" :title="featOne.title" :subtitle="featOne.subtitle"
          :features="featOne.features" :imgSrc="featOne.imgSrc" :imgAlt="featOne.imgAlt" />
        <FeaturesLx :titleLabel="featTwo.titleLabel" :title="featTwo.title" :subtitle="featTwo.subtitle"
          :features="featTwo.features" :imgSrc="featTwo.imgSrc" :imgAlt="featTwo.imgAlt" />
        <FeaturesRow id="winelist" class="pt-[88px]" :title="featThree.title" :subtitle="featThree.subtitle"
          :leftImgSrc="featThree.leftImgSrc" :leftImgAlt="featThree.leftImgAlt" :leftTitle="featThree.leftTitle"
          :leftDescription="featThree.leftDescription" :leftButtonLabel="featThree.leftButtonLabel"
          :leftButtonLink="featThree.leftButtonLink" :rightImgSrc="featThree.rightImgSrc"
          :rightImgAlt="featThree.rightImgAlt" :rightTitle="featThree.rightTitle"
          :rightDescription="featThree.rightDescription" :rightButtonLabel="featThree.rightButtonLabel"
          :rightButtonLink="featThree.rightButtonLink" />
      </div>
      <div class="testimonial-ct">
        <Testimonial :imgSrc="testimonial.imgSrc" :imgAlt="testimonial.imgAlt" :testimonial="testimonial.content"
          :name="testimonial.name" :company="testimonial.company" :companyLink="testimonial.companyLink" />
      </div>
      <div id="pricing" class="pricing-ct pt-[88px]">
        <Pricing :titleLabel="pricing.titleLabel" :title="pricing.title" :subtitle="pricing.subtitle"
          :tiers="pricing.tiers" />
      </div>
      <div id="faqs" class="faq-ct pt-[88px]">
        <Faq :title="faqs.title" :faqs="faqs.faqs" />
      </div>
    </div>
  </NuxtContent>
</template>

<script setup>
import {
  CloudIcon,
  Cog8ToothIcon,
  CursorArrowRaysIcon,
  GlobeEuropeAfricaIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
} from '@heroicons/vue/20/solid';

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

export default {
  data() {
    return {
      title: 'Vinoteqa',
      mission: this.$t('vinoteqa.mission'),
      logoSrc: '/logo.svg',
      email: 'info@vinoteqa.com',

      // hero
      hero: {
        imgSrc: "/imgs/hero-img.jpg",
        titleLabel: this.$t('hero.titleLabel'),
        title: this.$t('hero.title'),
        subtitle: this.$t('hero.subtitle'),
        primaryButtonLabel: this.$t('ctas.bookDemoBold'),
        primaryButtonLink: runtimeConfig.public.demoBookingPageLink,
        secondaryButtonLabel: this.$t('common.discoverMore'),
        secondaryButtonLink: '/#start',
      },

      // sections
      stats: {
        title: this.$t('sections.statistics.title'),
        stats: [
          { id: 1, name: this.$t('sections.statistics.wineries'), value: '120k+' },
          { id: 2, name: this.$t('sections.statistics.wines'), value: '1.3M+' },
          { id: 3, name: this.$t('sections.statistics.transactionsTracked'), value: '1.2M€' },
        ]
      },

      featOne: {
        titleLabel: this.$t('sections.features.integratedWorkflowTitleLabel'),
        title: this.$t('sections.features.integratedWorkflowTitle'),
        subtitle: this.$t('sections.features.integratedWorkflowSubtitle'),
        imgSrc: `/imgs/screenshot1.${this.$i18n.locale}.png`,
        imgAlt: "Vinoteqa homescreen Screenshot",
        features: [
          {
            name: this.$t('sections.features.extensiveWineDataTitle'),
            description: this.$t('sections.features.extensiveWineDataSubtitle'),
            icon: GlobeEuropeAfricaIcon,
          },
          {
            name: this.$t('sections.features.intuitiveUITitle'),
            description: this.$t('sections.features.intuitiveUISubtitle'),
            icon: CursorArrowRaysIcon,
          },
          {
            name: this.$t('sections.features.inventoryManagementTitle'),
            description: this.$t('sections.features.inventoryManagementSubtitle'),
            icon: Cog8ToothIcon,
          },
        ]
      },
      featTwo: {
        titleLabel: this.$t('sections.features.statisticsTitleLabel'),
        title: this.$t('sections.features.statisticsTitle'),
        subtitle: this.$t('sections.features.statisticsSubtitle'),
        imgSrc: "/imgs/screenshot2.png",
        imgAlt: "Vinoteqa statistics Screenshot",
        features: [
          {
            name: this.$t('sections.features.liveStatisticsTitle'),
            description: this.$t('sections.features.liveStatisticsSubtitle'),
            icon: CloudIcon,
          },
          {
            name: this.$t('sections.features.reportingTitle'),
            description: this.$t('sections.features.reportingSubtitle'),
            icon: PresentationChartLineIcon,
          },
          {
            name: this.$t('sections.features.dataDrivenDecisionsTitle'),
            description: this.$t('sections.features.dataDrivenDecisionsSubtitle'),
            icon: LightBulbIcon,
          },
        ]
      },
      featThree: {
        title: this.$t('sections.features.winelistTitle'),
        subtitle: this.$t('sections.features.winelistSubtitle'),
        leftImgSrc: '/imgs/winelist-digital.jpg',
        leftImgAlt: this.$t('sections.features.digitalWinelistImgAlt'),
        leftTitle: this.$t('sections.features.digitalWinelistTitle'),
        leftDescription: this.$t('sections.features.digitalWinelistSubtitle'),
        leftButtonLabel: this.$t('common.viewExample'),
        leftButtonLink: "https://app.vinoteqa.com/carte/01h08dydtpvr5yzdztjz8t5pf8",
        rightImgSrc: '/imgs/winelist-print.jpg',
        rightImgAlt: this.$t('sections.features.printWinelistImgAlt'),
        rightTitle: this.$t('sections.features.printWinelistTitle'),
        rightDescription: this.$t('sections.features.printWinelistSubtitle'),
      },

      testimonial: {
        imgSrc: '/imgs/testimonial.jpg',
        imgAlt: this.$t('sections.testimonial.imgAlt'),
        content: this.$t('sections.testimonial.content'),
        name: "Stefano Kratter",
        company: "Ristorante Mondschein - A Taste of the Dolomites",
        companyLink: "https://www.ristorantemondschein.it/"
      },

      pricing: {
        titleLabel: this.$t('sections.pricing.titleLabel'),
        title: this.$t('sections.pricing.title'),
        subtitle: this.$t('sections.pricing.subtitle'),
        tiers: [
          {
            id: 'onboarding',
            name: this.$t('sections.pricing.onboarding.title'),
            description: this.$t('sections.pricing.onboarding.subtitle'),
            price: '€1,000',
            priceFrequency: this.$t('sections.pricing.oneTimePayment'),
            features: [
              this.$t('sections.pricing.onboarding.whiteGlove'),
              this.$t('sections.pricing.onboarding.inventoryImport'),
              this.$t('sections.pricing.onboarding.supportAndTraining'),
            ]
          },
          {
            id: 'license',
            name: this.$t('sections.pricing.license.title'),
            price: '€ 960',
            priceFrequency: this.$t('sections.pricing.perYear'),
            description: this.$t('sections.pricing.license.subtitle'),
            href: runtimeConfig.public.demoBookingPageLink,
            features: [
              this.$t('sections.pricing.license.accessToDatabase'),
              this.$t('sections.pricing.license.liveInventory'),
              this.$t('sections.pricing.license.winelistGeneration'),
              this.$t('sections.pricing.license.statistics'),
            ],
            linkLabel: this.$t('ctas.bookDemo'),
            featured: true,
          },
          {
            id: 'custom',
            name: '',
            price: this.$t('sections.pricing.custom.title'),
            description: this.$t('sections.pricing.custom.subtitle'),
            href: 'mailto:info@vinoteqa.com',
            features: [
              this.$t('sections.pricing.custom.integrationsPos'),
              this.$t('sections.pricing.custom.integrationsAccounting'),
              this.$t('sections.pricing.custom.reporting'),
            ],
            linkLabel: this.$t('ctas.contactUs'),
            featured: false,
          },
        ]
      },

      faqs: {
        title: this.$t('sections.faqs.title'),
        faqs: [
          {
            question: this.$t('sections.faqs.questions.hardware.question'),
            answer: this.$t('sections.faqs.questions.hardware.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.integrations.question'),
            answer: this.$t('sections.faqs.questions.integrations.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.setupFees.question'),
            answer: this.$t('sections.faqs.questions.setupFees.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.futureFeatures.question'),
            answer: this.$t('sections.faqs.questions.futureFeatures.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.mobileApp.question'),
            answer: this.$t('sections.faqs.questions.mobileApp.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.onboarding.question'),
            answer: this.$t('sections.faqs.questions.onboarding.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.users.question'),
            answer: this.$t('sections.faqs.questions.users.answer'),
          },
          {
            question: this.$t('sections.faqs.questions.onlyOnlineWinelist.question'),
            answer: this.$t('sections.faqs.questions.onlyOnlineWinelist.answer'),
          },
        ],
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
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
