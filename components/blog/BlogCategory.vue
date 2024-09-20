<template>
    <div class="h-full page bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <section class="mb-10">
                <div class="flex items-center my-6">
                    <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ categoryTitle }}</h2>
                </div>

                <ContentQuery :path="localePath(`/blog/${categoryKey}`)" :sort="{ date: -1 }" :limit="POST_LIMIT + 1"
                    :skip="(currentPage - 1) * POST_LIMIT">
                    <template #default="{ data }">
                        <BlogList :data="data.slice(0, POST_LIMIT)" />

                        <div class="flex items-center mt-8">
                            <div class="mr-auto">
                                <NuxtLink v-if="currentPage > 1"
                                    :to="localePath(`/blog/${categoryKey}?page=${parseInt(currentPage) - 1}`)"
                                    class="border border-black/40 rounded-full py-2 px-4 mr-4 md:px-6 hover:bg-vinoteqa/5">
                                    {{ $t('blog.previousPage') }}</NuxtLink>
                            </div>
                            <NuxtLink v-if="data.length > POST_LIMIT"
                                :to="localePath(`/blog/${categoryKey}?page=${parseInt(currentPage) + 1}`)"
                                class="border border-black/40 rounded-full py-2 px-4 md:px-6 hover:bg-vinoteqa/5">
                                {{ $t('blog.nextPage') }}</NuxtLink>
                        </div>
                    </template>
                    <template #empty>
                        <div class="text-center">
                            <p class="text-lg">{{ $t('blog.noPosts') }}</p>
                        </div>
                    </template>
                </ContentQuery>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        categoryKey: {
            type: String,
            required: true
        },
        categoryTitle: {
            type: String,
            required: true
        },
    },

    data() {
        return {
            POST_LIMIT: 12
        }
    },

    computed: {
        currentPage() {
            return this.$route.query.page || 1
        }
    }
}
</script>