<template>
    <NuxtLayout>
        <div class="page bg-white">
            <main class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center p-6 px-6 lg:px-8">
                <NotFoundError v-if="error.statusCode === 404" :backToLink="localePath('/')" />
                <Error v-else :backToLink="localePath('/')" />
            </main>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        }
    }
}
</script>