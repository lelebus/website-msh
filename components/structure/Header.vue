```vue
<template>
    <div>
        <header>
            <div class="absolute inset-x-0 top-0 z-40">
                <div class="mx-8 flex items-start justify-between lg:px-8 p-6">
                    <!-- logo -->
                    <div>
                        <NuxtLink :to="localePath(homeLink)">
                            <img src="/logo-white.svg" :alt="logoAlt" class="h-36 p-2.5 mx-auto"
                                :class="{ 'hidden': showFixedMenu || onlyFixedMenu }" />
                        </NuxtLink>
                    </div>
                    <!-- buttons to open menu -->
                    <div class="flex items-center">
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center text-white/95">
                            <a :href="actionButtonLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-white">{{
                            $t('ctas.book') }}</a>
                            <a :href="actionButtonLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-white">{{
                            $t('ctas.contactUs') }}</a>
                        </div>
                        <!-- mobile menu button -->
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
                <div class="mx-8 flex items-center justify-between lg:px-8 p-6">
                    <!-- logo -->
                    <div>
                        <NuxtLink :to="localePath(homeLink)">
                            <img src="/logo-min.svg" :alt="logoAlt" class="h-16 px-5 mx-auto" />
                        </NuxtLink>
                    </div>
                    <!-- buttons to open menu -->
                    <div class="flex items-center">
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center text-black/95">
                            <a :href="actionButtonLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-black">{{
                            $t('ctas.book') }}</a>
                            <a :href="actionButtonLink" target="_blank"
                                class=" px-3.5 py-2.5 text-lg font hover:text-black">{{
                            $t('ctas.contactUs') }}</a>
                        </div>
                        <!-- mobile menu button -->
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
        onlyFixedMenu: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menuOpen: false,
            atTopOfPage: true,
            showFixedMenu: false
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