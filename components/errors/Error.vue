<template>
    <div class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
        <p class="text-base font-semibold leading-8 text-vinoteqa">{{ errorCode }}</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">{{ errorTitle }}</h1>
        <p class="mt-6 text-base leading-7 text-black/80">{{ errorSubtitle }}</p>
        <div class="mt-10">
            <a :href="backToLink" class="text-sm font-semibold leading-7 text-vinoteqa"><span
                    aria-hidden="true">&larr;</span>
                {{ backToButtonLabel }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errorCode: {
            type: String,
            default: '500'
        },
        title: {
            type: String,
            default: null
        },
        subtitle: {
            type: String,
            default: null
        },
        backToLabel: {
            type: String,
            default: null
        },
        backToLink: {
            type: String,
            default: '/'
        }
    },

    computed: {
        errorTitle() {
            return this.title ? this.title : this.$t('common.errorPageTitle')
        },
        errorSubtitle() {
            return this.subtitle ? this.subtitle : this.$t('common.somethingWentWrong')
        },
        backToButtonLabel() {
            return this.backToLabel ? this.backToLabel : this.$t('pageNotFound.backToHome')
        }
    }
}
</script>
