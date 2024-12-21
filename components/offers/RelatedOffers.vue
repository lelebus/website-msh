<template>
    <div>
        <ContentQuery :path="localePath(`/offers`)" :where="filters" :sort="{ date: 1 }" :limit="3" v-slot="{ data }">
            <div v-if="data.length > 0">
                <div class="flex items-center py-10">
                    <h4 class="text-3xl md:text-4xl font-bold mr-auto">{{ $t('offers.suggestedOffers') }}</h4>
                    <NuxtLink
                        class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-msh/5 invisible lg:visible"
                        :to="localePath('/offers')">{{ $t('offers.viewAll') }}
                    </NuxtLink>
                </div>

                <OffersList :data="data" />

                <div class="flex text-center mt-6 visible lg:invisible">
                    <NuxtLink class="border border-black/40 rounded-full mx-auto py-2 px-4 md:px-6 hover:bg-msh/5 "
                        :to="localePath('/offers')">
                        {{ $t('offers.viewAll') }}
                    </NuxtLink>
                </div>
            </div>
        </ContentQuery>
    </div>
</template>

<script>
export default {
    props: {
        doc: {
            type: Object,
            required: true
        }
    },
    computed: {
        filters() {
            return {
                visible: true,
                date: {
                    $gte: new Date(),
                },
                tags: {
                    $in: this.doc.tags
                },
                _id: {
                    $ne: this.doc._id
                }
            }
        }
    }
}
</script>