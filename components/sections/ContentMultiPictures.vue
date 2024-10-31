<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div class="max-w-4xl">
                <h3 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">
                    {{ title }}
                </h3>
                <p class="mt-6 text-balance text-xl/8 text-black/60">{{ subtitle }}</p>
            </div>
            <section class="mt-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                <div class="lg:pr-8">
                    <p class="mt-6 text-base/7 text-gray-600">{{ text1 }}</p>
                    <p class="mt-8 text-base/7 text-gray-600">{{ text2 }}</p>
                    <p class="mt-8 text-base/7 text-gray-600">{{ text3 }}</p>
                </div>
                <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                    <div
                        class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                        <div
                            class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                            <img :src="pictures[0].src" :alt="pictures[0].alt" class="block size-full object-cover" />
                        </div>
                        <div
                            class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                            <img :src="pictures[1].src" :alt="pictures[1].alt" class="block size-full object-cover" />
                        </div>
                        <div></div>
                        <div
                            class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                            <img :src="pictures[2].src" :alt="pictures[2].alt" class="block size-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
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
            default: null,
        },
        text1: {
            type: String,
            required: true
        },
        text2: {
            type: String,
            required: true
        },
        text3: {
            type: String,
            required: true
        },
        pictures: {
            type: Array,
            required: true
        }
    }
}
</script>