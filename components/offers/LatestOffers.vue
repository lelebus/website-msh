<template>
    <section>
        <div class="flex items-center mb-6">
            <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ $t('offers.title') }}</h2>
            <NuxtLink class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-msh/5 invisible lg:visible"
                :to="localePath('/offers')">{{ $t('offers.viewAll') }}
            </NuxtLink>
        </div>

        <ContentQuery :path="localePath('/offers')" :where="filters" :sort="{ date: 1 }" :limit="3" v-slot="{ data }">
            <OffersList :data="data" />
        </ContentQuery>

        <div class="flex text-center mt-6 visible lg:invisible">
            <NuxtLink class="border border-black/40 rounded-full mx-auto py-2 px-4 md:px-6 hover:bg-msh/5" :to="localePath('/offers')">
                {{ $t('offers.viewAll') }}
            </NuxtLink>
        </div>

    </section>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            default: null
        },
    },

    computed: {
        filters() {
            const filters = {
                visible: true,
                date: {
                    $gte: new Date(),
                }
            }

            if (this.category) {
                filters.tags = {
                    $in: this.category
                }
            }

            return filters
        }
    }
}
</script>