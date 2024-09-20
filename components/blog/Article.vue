<template>
    <div class="article-ct max-w-3xl mx-auto">

        <article class="relative pt-10">

            <h1 class="tracking-tight">{{
                doc.title }}</h1>

            <h2 class="my-6 font-normal text-2xl text-black/60">
                {{ doc.subtitle }}
            </h2>

            <!-- <div class="flex items-center space-x-4 text-sm leading-6 text-black/85">
                <ul class="flex items-center space-x-4 flex-nowrap whitespace-nowrap overflow-x-auto">
                    <li v-if="date" class="before:content-['•'] before:mr-2 before:opacity-50 my-2">
                        {{ date }}
                    </li>

                    <li v-if="readingTime" class="before:content-['•'] before:mr-2 before:opacity-50 my-2">
                        {{ readingTime }} min read
                    </li>

                </ul>
            </div> -->

            <div class="content-ct mt-5 prose ">

                <div
                    class="relative not-prose [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 my-12 first:mt-0 last:mb-0 rounded-2xl overflow-hidden [figure>&]:my-0">
                    <img :src="getArticleImageSrc(doc)" :alt="doc.title" decoding="async" />
                    <div class="absolute inset-0 rounded-2xl ring-0 ring-inset">
                    </div>
                </div>

                <ContentRenderer :value="doc" class="content" />

            </div>
        </article>

        <hr class="my-10 border-black/10">

        <!-- <div class="tags">{{ doc.tags }}</div> -->

        <RelatedArticles :doc="doc" />

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