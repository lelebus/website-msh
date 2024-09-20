<template>
    <div class="h-full page bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <!--Latest article as Featured -->
            <ContentQuery :path="localePath(`/blog`)" :sort="{
                date: -1
            }" :limit="1" v-slot="{ data }">
                <NuxtLink :to="data[0]._path"
                    class="block md:flex relative group p-6 lg:p-10 space-y-6 md:space-x-6 my-14 bg-vinoteqa/5 rounded-3xl hover:bg-vinoteqa/10">
                    <figure class="basis-1/2 w-full aspect-video overflow-hidden rounded-2xl">
                        <img class="object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
                            :src="getArticleImageSrc(data[0])" :alt="data[0].title"
                            style="width: 100%; height: 100%; object-fit: cover;">
                    </figure>
                    <div class="basis-1/2 self-center">
                        <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                            <span
                                class="before:content-[''] before:z-10 before:top-0 before:right-0 before:left-0 before:bottom-0 before:absolute before:pointer-events-auto">{{
                data[0].subtitle }}</span>
                        </h2>
                        <div class="font-bold">{{ printDate(data[0].date) }}</div>
                    </div>
                </NuxtLink>
            </ContentQuery>

            <!-- Show last 3 Featured Articles for each Category -->
            <div v-for="category, idx in categories" :key="category.key">
                <section class="mb-16">
                    <div class="flex items-center mb-6">
                        <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ category.label }}</h2>
                        <NuxtLink
                            class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5 invisible lg:visible"
                            :to="localePath(`/blog/${category.key}`)">{{ $t('blog.viewAll') }}</NuxtLink>
                    </div>

                    <ContentQuery :path="localePath(`/blog/${category.key}`)" :where="{ featured: true }"
                        :sort="{ date: -1 }" :limit="3" v-slot="{ data }">
                        <BlogList :data="data" />
                    </ContentQuery>

                    <div class="flex text-center my-6 visible lg:invisible">
                        <NuxtLink class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5 "
                            :to="localePath(`/blog/${category.key}`)">{{ $t('blog.viewAll') }}</NuxtLink>
                    </div>

                </section>

                <hr v-if="idx < categories.length - 1" class="my-8 text-black/10">

            </div>

        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
    layout: 'blog',
})

useHead({
    title: t('blog.title')
}, {
    tagPriority: 'critical'
})

useSeoMeta({
    title: t('blog.title'),
    description: t('blog.description')
}, {
    tagPriority: 'critical'
})
</script>

<script>
import utils from '~/mixins/utils'

export default {
    mixins: [utils],

    data() {
        return {
            // blog
            categories: [
                {
                    key: 'wines',
                    label: this.$t('blog.categories.wineEducation'),
                },
                {
                    key: 'winecellar',
                    label: this.$t('blog.categories.cellarManagement'),
                },
                {
                    key: 'winelist',
                    label: this.$t('blog.categories.wineLists'),
                },
            ],
        }
    },

    methods: {
        printDate(date) {
            const dateOtions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            return new Date(date).toLocaleDateString(this.$i18n.locale, dateOtions);
        },
    }
}
</script>