<template>
    <NuxtLink :to="link" class="relative group bg-vinoteqa/5 hover:bg-vinoteqa/10 rounded-3xl">
        <article>
            <figure class="w-full aspect-video overflow-hidden rounded-3xl">
                <img class="object-cover group-hover:scale-105 transition duration-500 cursor-pointer" :src="imgSrc"
                    :alt="imgAlt" style="width: 100%; height: 100%; object-fit: cover;">
            </figure>

            <div class="p-6 text-black">
                <div>{{ getLocaleDate(date) }}</div>
                <h3 class="my-4 text-2xl font-bold">{{ title }}</h3>
                <p class="text-normal leading-normal text-black/80 line-clamp-2">{{ description }}</p>
            </div>
        </article>
    </NuxtLink>
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