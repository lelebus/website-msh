<template>
    <div>
        <ContentRenderer :value="data" class="content" />
    </div>
</template>

<script setup>
const { data } = await useAsyncData('offers', () => queryContent('/offers/_conditions').findOne())
</script>