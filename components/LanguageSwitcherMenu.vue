<template>
    <Popover class="relative">
        <PopoverButton class="items-center gap-x-1 text-sm font-semibold leading-6 text-black/95 text-center w-full">
            <span class="inline-flex">
                <span>{{ locale.toUpperCase() }}</span>
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
            </span>
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4"
                v-slot="{ close }">
                <div
                    class="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-black/85 shadow-lg ring-1 ring-black/10">
                    <a v-for="l in locales" :key="l.code" :href="`/${l.code}${homeLink}`"
                        class="block p-2 hover:text-black/95"
                        :class="{ 'underline text-black/95': l.code === locale }">{{ l.name }}
                    </a>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { locale, locales } = useI18n()
</script>

<script>
export default {
    props: {
        homeLink: {
            type: String,
            default: "/",
        },
    },
}
</script>