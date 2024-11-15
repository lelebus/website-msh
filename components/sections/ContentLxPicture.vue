<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-4 order-last lg:order-first">
                    <div
                        class="relative overflow-hidden bg-black/10 px-6 pb-9 pt-80 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                        <img :src="imgSrc" :alt="imgAlt" class="absolute inset-0 h-full w-full object-cover" />
                    </div>
                </div>
                <div>
                    <div class="text-base/7 text-black/90 lg:max-w-lg">
                        <div class="max-w-xl">
                            <h3 v-if="title"
                                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">
                                {{ title }}</h3>
                            <p v-html="text" class="mt-6"></p>
                            <div v-if="buttonLabel || primaryButtonLabel" class="mt-5 flex items-center gap-x-6">
                                <a v-if="primaryButtonLabel" :href="primaryButtonLink" target="_blank"
                                    class="py-2.5 px-5 text-normal font-semibold bg-msh hover:bg-msh-hover text-white">
                                    {{ primaryButtonLabel }}
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                                <a v-if="secondaryButtonLabel" :href="secondaryButtonLink" target="_blank"
                                    class="py-2.5 text-normal font-semibold text-black/90 hover:text-black">
                                    {{ secondaryButtonLabel }}
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
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
            default: null
        },
        text: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true,
        },
        imgAlt: {
            type: String,
            required: true,
        },
        primaryButtonLabel: {
            type: String,
            default: null
        },
        primaryButtonLink: {
            type: String,
            default: null
        },
    }
}
</script>