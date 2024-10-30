<template>
    <div class="flex flex-wrap justify-center items-center h-[85vh] w-full bg-black/90 text-white shadow-lg">
        <NuxtLink v-for="col in cols" :key="col.title" :to="col.url"
            class="w-full sm:w-1/4 h-1/4 sm:h-full bg-cover bg-center"
            :style="{ backgroundImage: `url('${col.imgSrc}')` }">
            <div
                class="overlay flex items-end justify-center h-full w-full bg-black bg-opacity-40 transition duration-200 hover:bg-opacity-0">
                <div class="py-10 text-center">
                    <img :src="col.icon" class="w-12 h-12 m-auto" />
                    <div class="text-2xl text-white/90 mt-5 ">{{ col.title }}
                    </div>
                </div>
            </div>
        </NuxtLink>
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