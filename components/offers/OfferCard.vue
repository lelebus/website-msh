<template>
    <article
        class="relative isolate flex flex-col h-[50vh] lg:h-full justify-end overflow-hidden bg-grey px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group">
        <NuxtImg format="webp" loading="lazy" quality="80" sizes="100vw sm:500px md:50vw" :src="imgSrc" :alt="imgAlt"
            class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/10" />
        <div class="absolute inset-0 -z-10" />

        <NuxtLink :to="link" class="mt-3 text-lg/6 text-white">
            <span class="absolute inset-0" />

            <h3 class="text-white my-4 text-2xl font-bold">{{ title }}</h3>
            <p class="text-base leading-normal text-white/80 line-clamp-2">{{ description }}</p>
        </NuxtLink>
    </article>
</template>

<script>
import utils from '~/mixins/utils'

export default {
    mixins: [utils],

    props: {
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }
}
</script>