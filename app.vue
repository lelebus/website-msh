<template>
    <NuxtLayout>
        <CookieControl :locale="$i18n.locale">
            <template #bar>
                <p class="text-sm text-white/90">{{ $t('cookies.notice') }} <a :href="localePath('/privacy-policy')"
                        class="font-semibold text-white">{{ $t('cookies.privacyPolicy') }}</a></p>
            </template>

        </CookieControl>

        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const { cookiesEnabledIds } = useCookieControl()
const { initialize } = useGtag()

// react to a cookie being accepted
watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
        if (
            !previous?.includes('google-analytics') &&
            current?.includes('google-analytics')
        ) {
            // use nuxt-gtag
            initialize()
        }
    },
    { deep: true },
)
</script>

<style>
.cookieControl {
    .cookieControl__BarButtons {
        button {
            @apply bg-transparent text-white;

            &:first-child {
                @apply bg-white text-black rounded-md text-sm hover:bg-[#eee] hover:text-black;
            }

            /* second child */
            &:nth-child(2) {
                @apply hidden;
            }
        }
    }

    .cookieControl__ModalContentInner {

        .cookieControl__ModalClose,
        .cookieControl__ModalButtons button {
            @apply rounded-md;
        }
    }

}

.cookieControl__ModalContent input+button {
    @apply bg-[#ddd]
}

.cookieControl__ModalContent checked+button {
    @apply bg-[#000];
}
</style>