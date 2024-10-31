<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <dl
                    class="col-span-4 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-black/60 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                        <dt class="font-semibold text-black/90">
                            <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-msh" aria-hidden="true" />
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-2">{{ feature.description }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
</script>

<script>
export default {
    props: {
        features: {
            type: Array,
            required: true
        }
    }
}
</script>