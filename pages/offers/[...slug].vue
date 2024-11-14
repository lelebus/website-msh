<template>
    <div class="py-16">
        <ContentDoc>
            <template v-slot="{ doc }">
                <Offer :doc="doc" />
            </template>
            
            <template #not-found>
                <NotFoundError :backToLink="localePath('/')" />
            </template>
        </ContentDoc>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'content',
})
</script>