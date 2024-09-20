<template>
    <div class="blog-content pt-10 px-8 mx-auto max-w-7xl">
        <ContentDoc>
            <template v-slot="{ doc }">
                <NuxtLink :to="localePath('/blog')"
                    class="text-sm font-semibold leading-6 text-black/95 hover:text-black">←
                    {{ $t('blog.goToBlog') }}</NuxtLink>
                <Article :doc="doc" />
            </template>
            
            <template #not-found>
                <NotFoundError :backToLink="localePath('/blog')" />
            </template>
        </ContentDoc>
    </div>
</template>

<script>
definePageMeta({
    layout: 'blog'
})
</script>

<style>
h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
</style>