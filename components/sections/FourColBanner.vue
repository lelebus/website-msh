<template>
    <div
        class="flex flex-wrap justify-center items-center h-screen md:h-[85vh] w-full bg-black/90 text-white shadow-lg">
        <div v-for="col in cols" :key="col.title"
            class="relative w-full w-full md:w-1/4 h-1/4 md:h-full overflow-hidden group relative isolate flex flex-col justify-end overflow-hidden bg-grey px-8 pb-8 group">
            <NuxtImg format="webp" loading="lazy" quality="80" sizes="sm:500px md:25vw" :src="col.imgSrc"
                :alt="col.title"
                class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/10" />
            <div class="absolute inset-0 -z-10" />

            <NuxtLink :to="col.url" class="mt-3 text-lg/6 text-white text-center">
                <span class="absolute inset-0" />

                <NuxtImg format="webp" loading="lazy" quality="80" sizes="sm:500px md:25vw" :src="col.icon"
                    :alt="'Icon ' + col.title"
                    class="w-12 h-12 m-auto invisible md:visible transition-transform duration-500 group-hover:scale-125" />
                <div class="text-2xl text-white/90 mt-5 ">{{ col.title }}</div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cols: {
            type: Array,
            required: true
        }
    }
}
</script>