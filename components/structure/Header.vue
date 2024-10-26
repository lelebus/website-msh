<template>
    <div>
        <header class="fixed inset-x-0 top-0 z-40" :class="{ 'is-sticky': !atTopOfPage }">
            <div class="mx-8 flex items-start justify-between p-6 lg:px-8">
                <!-- logo -->
                <div>
                    <NuxtLink :to="localePath(homeLink)">
                        <img src="/logo-msh.svg" :alt="logoAlt" :class="'h-36 p-2.5 mx-auto'" />
                    </NuxtLink>
                </div>

                <!-- buttons to open menu -->
                <div class="flex items-center">
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                        <a :href="actionButtonLink" target="_blank"
                            class=" px-3.5 py-2.5 text-lg font text-white ">Prenota</a>
                        <a :href="actionButtonLink" target="_blank"
                            class=" px-3.5 py-2.5 text-lg font text-white ">Contatti</a>
                    </div>

                    <!-- mobile menu button -->
                    <button type="button"
                        class="flex items-center ml-10 inline-flex items-center justify-center rounded-md p-2.5 text-white/95"
                        @click="menuOpen = true">
                        <div class="mr-2">{{ $t('common.menu') }}</div>
                        <Bars3BottomRightIcon class="h-12 w-12" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </header>

        <FullPageMenu class="z-50" :open="menuOpen" @close="menuOpen = false">
            <div class="h-full pb-16 flex flex-col text-center justify-between">
                <!-- logo -->
                <img :src="logoSrc" :alt="logoAlt" :class="'h-32 mx-auto'" />

                <nav class="py-30" aria-label="Global">
                    <div v-for="item in navigation" :key="item.name" class="my-10">
                        <NuxtLink :to="localePath(item.href)"
                            class="text-4xl font-semibold leading-6 text-black/90 hover:text-black focus:text-black"
                            :class="{ 'is-home': $route.name.includes('index') }" @click="menuOpen = false">{{ item.name
                            }}
                        </NuxtLink>
                    </div>
                </nav>

                <!-- language switcher -->
                <nav>
                    <a v-for="l in locales" :key="l.code" :href="`/${l.code}${homeLink}`"
                        class="text-base px-2 font-bold text-black/90 hover:text-black"
                        :class="{ 'underline text-black/95': l.code === locale }">{{ l.code }}
                    </a>
                </nav>
            </div>
        </FullPageMenu>
    </div>
</template>

<script setup>
import {
    Bars3BottomRightIcon,
} from '@heroicons/vue/24/outline'

const { locale, locales } = useI18n()

</script>

<script>
export default {
    props: {
        homeLink: {
            type: String,
            default: "/"
        },
        logoSrc: {
            type: String,
            default: "/logo.svg"
        },
        logoAlt: {
            type: String,
            default: "Logo Vinoteqa"
        },
        logoSize: {
            type: String,
            default: "7",
            validator: (value) => ['7', '11'].includes(value) // adapt in :class 
        },
        navigation: {
            type: Array,
            default: () => []
        },
        actionButtonLabel: {
            type: String,
            required: true
        },
        actionButtonLink: {
            type: String,
            required: true
        },
    },

    data() {
        return {
            menuOpen: false,
            atTopOfPage: true
        }
    },
}
</script>

<style scoped>
header {
    &.is-sticky {
        @apply shadow-md;
    }
}

nav {
    .router-link-active:not(.is-home) {
        @apply underline text-black;
    }

    a {
        @apply uppercase;
    }
}
</style>