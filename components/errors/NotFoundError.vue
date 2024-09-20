<template>
    <Error :errorCode="404" :title="$t('pageNotFound.title')" :subtitle="$t('pageNotFound.subtitle')"
        :backToLabel="$t('pageNotFound.backToHome')" :backToHomeLink="localePath(backTo)" />
</template>

<script>
export default {
    props: {
        backTo: {
            type: String,
            default: '/'
        }
    }
}
</script>