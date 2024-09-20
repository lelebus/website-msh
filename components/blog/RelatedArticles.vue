<template>
    <div>
        <ContentQuery class="text-black" :path="localePath(`/blog`)" :where="{
            tags: {
                $in: doc.tags
            },
            _id: {
                $ne: doc._id
            }
        }" :sort="{ date: -1 }" :limit="3" v-slot="{ data }">
            <div v-if="data.length > 0">
                <h4 class="text-2xl font-bold mb-6">{{ $t('blog.suggestedArticles') }}</h4>

                <BlogList :data="data" />
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
    }
}
</script>