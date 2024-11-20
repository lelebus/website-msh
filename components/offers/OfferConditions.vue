<template>
    <div>
        <ContentRenderer v-if="data" :value="data" class="content" />
    </div>
</template>

<script setup>
const { locale } = useI18n()

const conditionsPath = locale.value === 'it' ? '/offers/_conditions' : `/${locale.value}/offers/_conditions`

const { data } = await useAsyncData('offers', () => queryContent(conditionsPath).findOne())
</script>