<template>
    <div class="relative isolate mt-10 pt-24 bg-white px-6 sm:mt-24 sm:pt-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 class="text-base font-semibold leading-7 text-vinoteqa">{{ titleLabel }}</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ title }}</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">{{ subtitle }}
        </p>
        <div
            class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                :class="[tier.featured ? 'relative bg-vinoteqa shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-vinoteqa sm:p-10']">
                <h3 :id="tier.id"
                    :class="[tier.featured ? 'text-white' : 'text-vinoteqa', 'text-base font-semibold leading-7']">
                    {{ tier.name }}</h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                    <span
                        :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-bold tracking-tight']">{{
                tier.price }}</span>
                    <span :class="[tier.featured ? 'text-white' : 'text-black', 'text-base']">{{
                tier.priceFrequency }}</span>
                </p>
                <p :class="[tier.featured ? 'text-white/70' : 'text-black/70', 'mt-6 text-base leading-7']">{{
                tier.description }}</p>
                <ul role="list"
                    :class="[tier.featured ? 'text-white/90' : 'text-black/90', 'mt-8 space-y-3 text-sm leading-6 sm:mt-10']">
                    <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                        <CheckIcon :class="[tier.featured ? 'text-white' : 'text-black', 'h-6 w-5 flex-none']"
                            aria-hidden="true" />
                        {{ feature }}
                    </li>
                </ul>
                <a v-if="tier.linkLabel" :href="tier.href" target="_blank" :aria-describedby="tier.id"
                    :class="[tier.featured ? 'bg-white text-black shadow-sm hover:bg-white/95 focus-visible:outline-vinoteqa' : 'text-vinoteqa ring-1 ring-inset ring-vinoteqa hover:bg-vinoteqa/5 focus-visible:outline-vinoteqa', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">
                    {{ tier.linkLabel }}</a>
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
        titleLabel: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        tiers: {
            type: Array,
            required: true,
        },
    },
}
</script>