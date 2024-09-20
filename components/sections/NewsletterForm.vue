<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
                class="relative isolate flex flex-col gap-10 overflow-hidden bg-accent px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
                <h2
                    class="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                    {{ title }}</h2>
                <form v-if="!subscribed" class="w-full max-w-md" @submit.prevent="submitEmail">
                    <div class=" flex gap-x-4">
                        <label for="email-address" class="sr-only">{{ inputLabel }}</label>
                        <input v-model="email" id="email-address" name="email" type="email" autocomplete="email"
                            required="" :valid="false"
                            class="min-w-0   flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            :placeholder="inputPlaceholder" />
                        <button
                            class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{{
                        inputButtonLabel }}</button>
                    </div>
                    <p v-if="emailError" class="mt-1 text-sm leading-6 text-white font-bold">{{ emailError }}</p>
                    <p class=" mt-4 text-sm leading-6 text-white/70">{{ policyNotice }}</p>
                </form>
                <div v-else class="flex items-center gap-x-4">
                    <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    <p class="text-white
                        font-semibold">{{ $t('sections.newsletter.successMessage') }}</p>
                </div>

                <!-- <svg viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03613)"
                        fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03613" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stop-color="#ff0000" />
                            <stop offset="1" stop-color="#ff0000" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
</script>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        inputLabel: {
            type: String,
            required: true,
        },
        inputPlaceholder: {
            type: String,
            required: true,
        },
        inputButtonLabel: {
            type: String,
            required: true,
        },
        policyNotice: {
            type: String,
            required: true,
        },
        subscribed: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            emailError: '',
            email: '',
        }
    },

    computed: {
        isValidEmail() {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailRegex.test(this.email)
        },
    },

    methods: {
        submitEmail(event) {
            if (this.isValidEmail) {
                this.emailError = ''
                this.$emit('subscribe', { email: this.email })
            } else {
                this.emailError = 'Invalid email address'
            }
        }
    },
}
</script>