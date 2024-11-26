<template>
  <div class="overflow-hidden relative z-10" :class="{
    'h-screen': size === 'screen',
    'h-[60vh]': size === '60vh',
  }
    ">
    <!-- background -->
    <template v-if="videoSrc">
      <video autoplay muted loop class="absolute inset-0 h-full w-full object-cover -z-10">
        <source :src="videoSrc" type="video/mp4">
        <track src="/captions/home-en.vtt" kind="subtitles" srclang="en" label="English" default>
        Your browser does not support the video tag.
      </video>
    </template>
    <template v-else-if="imgSrc">
      <img :src="imgSrc" :alt="imgAlt" class="absolute inset-0 h-full w-full object-cover -z-10" />
    </template>

    <!-- copy -->
    <div class="absolute bottom-0 mx-auto max-w-7xl z-10 mb-16 px-3 sm:px-6 md:px-8">
      <div
        class="mx-auto lg:pl-32 max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <div class="title-ct max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <div class="mt-10 sm:mt-10 lg:mt-16">
            <span v-if="titleLabel"
              class="inline-flex rounded-full bg-msh/5 px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-msh/30 space-x-6">
              {{ titleLabel }}
            </span>

            <h1 class="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl xl:col-auto">{{
              title }}</h1>
          </div>

          <div class="mt-6">
            <p class="text-xl leading-8 text-white/85">{{ subtitle }}</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a v-if="primaryButtonLabel" :href="primaryButtonLink" target="_blank"
                class="rounded-md bg-msh px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-msh-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-msh">{{
                primaryButtonLabel }}</a>
              <NuxtLink v-if="secondaryButtonLabel" :to="localePath(secondaryButtonLink)"
                class="text-sm font-semibold leading-6 text-gray-900">{{ secondaryButtonLabel }}<span
                  aria-hidden="true">→</span></NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- arrow down -->
    <div class="absolute bottom-0 w-full mb-5 arrow-down-container">
      <ChevronDownIcon class="h-12 w-12 m-auto text-white cursor-pointer" @click="$emit('scrollToNextSection')" />
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'screen',
      validator: (value) => ['screen', '50vh'].includes(value),
    },
    titleLabel: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
    primaryButtonLabel: {
      type: String,
      default: null
    },
    primaryButtonLink: {
      type: String,
      default: null
    },
    secondaryButtonLabel: {
      type: String,
      default: null,
    },
    secondaryButtonLink: {
      type: String,
      default: null,
    },
    imgSrc: {
      type: String,
      default: null,
    },
    imgAlt: {
      type: String,
      default: null,
    },
    videoSrc: {
      type: String,
      default: null,
    },
  },
}
</script>