```vue
<template>
    <div>
        <header>
            <div class="absolute inset-x-0 top-0 z-40">
                <div class="mx-2 lg:mx-8 flex items-start justify-between lg:px-8 py-6">
                    <!-- logo -->
                    <div>
                        <NuxtLink :to="localePath('/')">
                            <img src="/logo-white.svg" :alt="logoAlt" class="h-24 lg:h-36 p-2.5 mx-auto"
                                :class="{ 'hidden': showFixedMenu || onlyFixedMenu }" />
                        </NuxtLink>
                    </div>

                    <div class="flex items-center">
                        <!-- ctas -->
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center text-white/95">
                            <a :href="bookingLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-white">{{
                            $t('ctas.book') }}</a>
                            <a :href="contactLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-white">{{
                            $t('ctas.contactUs') }}</a>
                            <a :href="localePath('/vouchers')" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-white">{{
                            $t('navigation.vouchers') }}</a>
                        </div>

                        <!-- open menu -->
                        <button type="button"
                            class="flex items-center ml-10 inline-flex items-center justify-center rounded-md p-2.5 text-white/95 hover:text-white"
                            @click="menuOpen = true">
                            <div class="mr-2">{{ $t('common.menu') }}</div>
                            <Bars3BottomRightIcon class="h-12 w-12" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Fixed Menu -->
            <div class="fixed inset-x-0 top-0 z-40 bg-white fixed-menu shadow-md" :class="{
                            'fixed-menu-active': showFixedMenu || onlyFixedMenu
                        }">
                <div class="mx-2 lg:mx-8 flex items-center justify-between lg:px-8 p-6">
                    <!-- logo -->
                    <div>
                        <NuxtLink :to="localePath('/')">
                            <img src="/logo-min.svg" :alt="logoAlt" class="h-16 px-5 mx-auto" />
                        </NuxtLink>
                    </div>
                    <div class="flex items-center">
                        <!-- ctas -->
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center text-black/90">
                            <a :href="bookingLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-black">{{
                            $t('ctas.book') }}</a>
                            <a :href="contactLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-black">{{
                            $t('ctas.contactUs') }}</a>
                            <a :href="localePath('/vouchers')" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-black">{{
                            $t('navigation.vouchers') }}</a>
                        </div>

                        <!-- open menu -->
                        <button type="button"
                            class="flex items-center ml-10 inline-flex items-center justify-center rounded-md p-2.5 text-black/95 hover:text-black"
                            @click="menuOpen = true">
                            <div class="mr-2">{{ $t('common.menu') }}</div>
                            <Bars3BottomRightIcon class="h-12 w-12" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <FullPageMenu class="z-50" :open="menuOpen" @close="menuOpen = false">
            <div class="h-full pb-16 flex flex-col text-center justify-between">
                <!-- logo -->
                <NuxtLink :to="localePath('/')">
                    <img :src="logoSrc" :alt="logoAlt" :class="'h-32 mx-auto'" @click="menuOpen = false" />
                </NuxtLink>
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
                    <NuxtLink v-for="l in locales" :key="l.code"
                        class="text-base px-2 font-bold text-black/90 hover:text-black"
                        :class="{ 'underline text-black/95': l.code === locale }" :to="switchLocalePath(l.code)"
                        @click="menuOpen = false">{{ l.code }}
                    </NuxtLink>
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
const runtimeConfig = useRuntimeConfig()

export default {
    props: {
        onlyFixedMenu: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menuOpen: false,
            atTopOfPage: true,
            showFixedMenu: false,

            logoSrc: '/logo-full.svg',
            logoAlt: 'Logo Monaco Sport Hotel',

            bookingLink: '#',
            contactLink: '#',
            navigation: [
                { name: this.$t('navigation.hotel'), href: '/hotel' },
                { name: this.$t('navigation.restaurant'), href: '/ristorante-la-ziria' },
                { name: this.$t('navigation.winecellar'), href: '/anguana-del-vin' },
                { name: this.$t('navigation.spaAndPool'), href: '/spa-and-pool' },
                { name: this.$t('navigation.summer'), href: '/summer' },
                { name: this.$t('navigation.winter'), href: '/winter' },
            ],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.atTopOfPage = window.scrollY === 0;
            this.showFixedMenu = window.scrollY > window.innerHeight * 0.9;
        }
    }
}
</script>

<style scoped>
header {
    & .fixed-menu {
        transition: transform 0.3s ease-in-out;
        transform: translateY(-100%);
    }

    & .fixed-menu.fixed-menu-active {
        transition: transform 0.3s ease-in-out;
        transform: translateY(0%);
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