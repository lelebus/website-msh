<template>
    <div class="relative isolate overflow-hidden bg-gray py-24 sm:py-32 h-[70vh] lg:h-[80vh]">
        <NuxtImg format="webp" loading="lazy" quality="80" sizes="100vw sm:500px md:100vw" :src="imgSrc" :alt="imgAlt" class="absolute inset-0 -z-10 h-full w-full object-cover object-right" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/60 lg:via-black/10" />
        <div class="absolute inset-0 -z-10" />

        <div class="absolute bottom-0 mx-auto max-w-7xl z-10 px-3 sm:px-6 md:px-8 mb-16 lg:px-8">
            <div
                class="mx-auto lg:pl-32 max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <div class="title-ct max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                    <div class="mt-10 sm:mt-10 lg:mt-16">
                        <h4
                            class="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl xl:col-auto">
                            {{ title }}
                        </h4>
                    </div>

                    <div class="mt-6">
                        <p class="text-xl leading-8 text-white/85">{{ subtitle }}</p>
                        <div v-if="buttonLabel" class="mt-5 flex items-center gap-x-6">
                            <a :href="buttonLink" target="_blank"
                                class="py-2.5 text-normal font-semibold text-white/95 hover:text-white">
                                {{ buttonLabel }}
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: null
        },
        buttonLabel: {
            type: String,
            default: null
        },
        buttonLink: {
            type: String,
            default: null
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        }
    }
}
</script>