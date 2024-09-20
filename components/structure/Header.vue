<template>
    <header class="sticky inset-x-0 top-0 z-50 bg-white" :class="{ 'is-sticky': !atTopOfPage }">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex items-center">
                <div class="flex lg:flex-1">
                    <NuxtLink :to="localePath(homeLink)" class="-m-1.5 p-1.5">
                        <span class="sr-only">Vinoteqa</span>
                        <img class="w-auto" :class="{
        'h-7': logoSize === '7',
        'h-11': logoSize === '11',
    }" :src="logoSrc" :alt="logoAlt" />
                    </NuxtLink>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 ml-20">
                    <NuxtLink v-for="item in navigation" :key="item.name" :to="localePath(item.href)"
                        class="text-sm font-semibold leading-6 text-black/95 hover:text-black"
                        :class="{ 'is-home': $route.name.includes('index') }">{{ item.name }}
                    </NuxtLink>
                </div>
            </div>

            <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                <LanguageSwitcherMenu :homeLink="homeLink" class="mr-5" />

                <!-- primary cta -->
                <a :href="actionButtonLink" target="_blank"
                    class="rounded-md bg-vinoteqa px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-vinoteqa-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vinoteqa">{{
        actionButtonLabel }} <span aria-hidden="true">&rarr;</span></a>
            </div>

            <!-- mobile menu button -->
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black/95"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </nav>

        <!-- mobile menu -->
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/30">
                <div class="flex items-center justify-between">
                    <NuxtLink :to="localePath(homeLink)" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                        <span class="sr-only">Vinoteqa</span>
                        <img class="h-8 w-auto" :src="logoSrc" :alt="logoAlt" />
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-black/95" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <NuxtLink v-for="item in navigation" :key="item.name" :to="localePath(item.href)"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                @click="mobileMenuOpen = false">
                                {{
        item.name }}</NuxtLink>
                        </div>
                        <div class="py-6">
                            <a :href="actionButtonLink" target="_blank"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                actionButtonLabel }} <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>

                <LanguageSwitcherMenu :homeLink="homeLink" class="mt-10 p-1 text-center bg-black/5 rounded-sm" />
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import {
    XMarkIcon,
    Bars3Icon,
} from '@heroicons/vue/24/outline'
import {
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
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
            mobileMenuOpen: false,
            atTopOfPage: true
        }
    },

    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            // when the user scrolls, check the pageYOffset
            if (window.pageYOffset > 0) {
                // user is scrolled
                if (this.atTopOfPage) this.atTopOfPage = false
            } else {
                // user is at top of page
                if (!this.atTopOfPage) this.atTopOfPage = true
            }
        }
    }
}
</script>

<style scoped>
header {
    &.is-sticky {
        @apply border-b-2 border-vinoteqa shadow-md;
    }

    nav {
        .router-link-active:not(.is-home) {
            @apply underline text-black/95;
        }
    }
}
</style>