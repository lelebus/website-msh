<template>
    <footer class="bg-msh/20 border-solid border-t-2 border-black">
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                    <img class="h-32" :src="logoSrc" :alt="logoAlt" />
                    <div class="text-sm/6 text-black/90">
                        <div class="text-base font-semibold">Monaco Sport Hotel ***</div>
                        <div>Via Lungopiave, 60</div>
                        <div>I-32045 Santo Stefano di Cadore (BL)</div>
                        <div>P.Iva IT00659590251</div>
                        <a :href="googleMapsLink" target="_blank" class="font-semibold">
                            {{ $t('footer.viewOnMaps') }}<span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">

                    <div class="md:grid md:grid-cols md:gap-8">
                        <div>
                            <h6 class="text-sm/6 font-semibold text-black">{{ navigation[0].title }}</h6>
                            <ul role="list" class="mt-6 space-y-1">
                                <li v-for="item in navigation[0].items" :key="item.name">
                                    <a :href="item.href" target="_blank"
                                        class="text-sm/6 text-black/85 hover:text-black">{{ item.name
                                        }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols md:gap-8">
                        <div class="mt-10 md:mt-0">
                            <h6 class="text-sm/6 font-semibold text-black">{{ navigation[1].title }}</h6>
                            <ul role="list" class="mt-6 space-y-1">
                                <li v-for="item in navigation[1].items" :key="item.name">
                                    <a :href="item.href" target="_blank"
                                        class="text-sm/6 text-black/85 hover:text-black">{{ item.name
                                        }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols md:gap-8">
                        <div>
                            <h6 class="text-sm/6 font-semibold text-black">{{ $t('ctas.contactUs') }}</h6>
                            <div class="mt-5 text-sm/6 text-black/80 ">
                                <div>
                                    <span class="text-black/90 font-semibold">E: </span>
                                    <a :href="`mailto:${email}`" class="hover:text-black/90">{{ email }}</a>
                                </div>
                                <div>
                                    <span class="text-black/90 font-semibold">T: </span>
                                    <a :href="`tel:${phone}`" class="hover:text-black/90">{{ phone }}</a>
                                </div>
                                <div>
                                    <span class="text-black/90 font-semibold">F: </span>
                                    <a href="" class="hover:text-black/90">+39 0435 420440</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- newsletter -->
            <div
                class="mt-8 border-t border-black/10 pt-8 sm:mt-16 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                <div>
                    <h3 class="text-normal font-semibold text-black/90">{{ $t('ctas.newsletterTitle') }}</h3>
                    <p class="mt-2 text-base text-black/60">{{ $t('ctas.newsletterSubtitle') }}</p>
                </div>
                <div>
                    <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
                        <label for="email-address" class="sr-only">{{ $t('ctas.newsletterEmailLabel') }}</label>
                        <input type="email" name="email-address" id="email-address" autocomplete="email" required="true"
                            class="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-black shadow-sm ring-1 ring-inset ring-msh placeholder:text-black/90 focus:ring-2 focus:ring-inset focus:ring-msh sm:w-56 sm:text-sm/6"
                            :placeholder="$t('ctas.newsletterEmailPlaceholder')" />
                        <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                            <button type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-msh px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-msh-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-msh">{{
                        $t('ctas.newsletterButton') }}</button>
                        </div>
                    </form>
                    <div class="mt-2 text-xs text-black/60">{{ $t('ctas.newsletterPrivacyNotice') }}</div>
                </div>
            </div>

            <!-- copyright -->
            <div class="mt-8 border-t border-black/10 pt-8 sm:mt-20 lg:mt-8 md:flex md:items-center md:justify-between">
                <div class="text-sm/6">
                    <div class="text-black/90">
                        &copy; {{ currentYear }} Monaco Sport Hotel - All rights reserved.
                    </div>

                    <div>
                        <span v-for="item in legalLinks" :key="item.name" class="text-black/60">
                            <a :href="item.href" class="hover:text-black/70">{{ item.name }}</a>
                            <span aria-hidden="true"> . </span>
                        </span>
                    </div>
                </div>

                <div class="flex gap-x-6 md:order-2">
                    <a v-for="item in socials" :key="item.name" :href="item.href"
                        class="text-black/90 hover:text-black/">
                        <span class="sr-only">{{ item.name }}</span>
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        logoSrc: {
            type: String,
            required: true,
        },
        logoAlt: {
            type: String,
            required: true,
        },
        contacts: {
            type: String,
            required: true,
        },
        navigation: {
            type: Array,
            required: true,
        },
        socials: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),

            googleMapsLink: "https://maps.app.goo.gl/2cNZSexXfUBQLZPD9",
            email: "info@monacosporthotel.com",
            phone: "+39 0435 420440",

            legalLinks: [
                {
                    name: 'Sitemap',
                    href: this.localePath('/sitemap.xml'),
                },
                {
                    name: 'Credits',
                    href: this.localePath('/credits'),
                },
                {
                    name: 'Cookie & Privacy',
                    href: this.localePath('/privacy'),
                },
            ]
        }
    },
}
</script>