<template>
    <div class="article-ct">

        <SectionHeaderWithBackground :title="doc.title" :subtitle="doc.description" :imgSrc="getOfferImageSrc(doc)"
            :alt="doc.title" />

        <div class="mx-auto max-w-7xl text-black/60 px-6 lg:p-0">
            <article class="relative grid grid-cols-1 lg:grid-cols-2 mt-5 mb-24">
                <div class="content-ct mt-5 prose grid-cols">
                    <ContentRendererMarkdown :value="doc" :components="components" class="content" />

                    <div class="py-5">
                        <a :href="requestBookingLink" target="_blank"
                            class="py-2.5 px-5 text-normal font-semibold bg-msh hover:bg-msh-hover text-white">
                            {{ $t('offers.requestBooking') }}
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                </div>
                <div class="mt-10 grid-cols hidden lg:block">
                    <div class="pl-32">
                        <div
                            class="relative overflow-hidden bg-black/10 w-full aspect-square shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img :src="getOfferImage2Src(doc)" :alt="doc.title"
                                class="absolute inset-0 h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </article>

            <hr class="my-10 border-black/10">

            <RelatedOffers :doc="doc" />
        </div>
    </div>
</template>

<script setup>
import OfferConditions from '~/components/offers/OfferConditions.vue'

const components = {
    'conditions': OfferConditions
}
</script>

<script>
import utils from '~/mixins/utils'

export default {
    mixins: [utils],

    props: {
        doc: {
            type: Object,
            required: true
        }
    },
    computed: {
        requestBookingLink() {
            return `mailto:info@monacosporthotel.com?subject=${this.$t('offers.bookingRequestSubject', {
                title: this.doc.title
            })}`
        }
    }
}
</script>

<style lang="postcss">
/* add styling for content here */
.article-ct .content {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        @apply text-black font-bold mb-5 mt-10;
    }

    p {
        @apply text-black/80 leading-7 mb-4;

        a {
            @apply text-accent hover:text-accent-hover font-semibold underline;
        }
    }

    ul,
    menu {
        @apply text-black/80 leading-7 mb-7 pl-6 list-disc;

        li {
            @apply mb-2;

            a {
                @apply text-accent hover:text-accent-hover font-semibold underline;
            }
        }
    }
}
</style>