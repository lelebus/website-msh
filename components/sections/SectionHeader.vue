<template>
    <div class="bg-white px-6 py-16 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <p v-if="titleLabel" class="text-base/7 font-semibold text-msh">{{ titleLabel }}</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight text-black/90 sm:text-7xl">{{ title }}</h2>
            <p v-if="subtitle" class="mt-8 text-pretty text-lg font-medium text-black/80 sm:text-xl/8">{{ subtitle }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleLabel: {
            type: String,
            default: null
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: null
        },
    }

}
</script>