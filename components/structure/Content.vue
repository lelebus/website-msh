<template>
    <div class="article-ct max-w-3xl mx-auto">

        <article class="relative pt-10">

            <h1 class="tracking-tight">{{
                doc.title }}</h1>

            <h2 class="my-6 font-normal text-2xl text-black/60">
                {{ doc.subtitle }}
            </h2>

            <div class="content-ct mt-5 prose ">
                <ContentRenderer :value="doc" class="content" />
            </div>
        </article>

    </div>
</template>

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
        date() {
            return this.getLocaleDate(this.doc.date)
        },
        readingTime() {
            // return Math.ceil(this.doc.content.length / 2000);
            return null
        },
    }
}
</script>

<style lnag="postcss">
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
            @apply text-vinoteqa/85 hover:text-vinoteqa/95 font-semibold underline;
        }
    }

    ul,
    menu {
        @apply text-black/80 leading-7 mb-7 pl-6 list-disc;

        li {
            @apply mb-2;
        }
    }
}
</style>