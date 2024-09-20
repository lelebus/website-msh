<template>
    <div class="bg-black py-24 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">

            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ title }}</h2>
            </div>

            <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 sm:gap-8">
                <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-white">{{ stat.name }}</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{
                    stat.value }}</dd>
                </div>
            </dl>
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
        stats: {
            type: Array,
            required: true
        }
    },
}
</script>