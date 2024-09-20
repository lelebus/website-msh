<template>
  <div class="relative isolate overflow-hidden bg-gradient-to-b from-white/20 pt-14">
    <div
      class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-accent/10 ring-1 ring-accent/40 sm:-mr-80 lg:-mr-96"
      aria-hidden="true" />
    <div class="mx-auto max-w-7xl px-6 py-5 sm:py-24 lg:px-8">
      <div
        class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <div class="title-ct max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <div class="mt-10 sm:mt-10 lg:mt-16">
            <span
              class="inline-flex rounded-full bg-vinoteqa/5 px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-vinoteqa/30 space-x-6">
              {{ titleLabel }}
            </span>

            <h1 class="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-black sm:text-6xl xl:col-auto">{{
                title }}</h1>
          </div>

          <div class="mt-6">
            <p class="text-lg leading-8 text-black">{{ subtitle }}</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a v-if="primaryButtonLabel" :href="primaryButtonLink" target="_blank"
                class="rounded-md bg-vinoteqa px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-vinoteqa-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vinoteqa">{{
                primaryButtonLabel }}</a>
              <NuxtLink v-if="secondaryButtonLabel" :to="localePath(secondaryButtonLink)"
                class="text-sm font-semibold leading-6 text-gray-900">{{ secondaryButtonLabel }}<span
                  aria-hidden="true">→</span></NuxtLink>
            </div>
          </div>
        </div>

        <img :src="imgSrc" alt=""
          class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
  </div>
</template>

<script>
export default {
  props: {
    titleLabel: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    primaryButtonLabel: {
      type: String,
      required: true,
    },
    primaryButtonLink: {
      type: String,
      required: true,
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
  },
}
</script>