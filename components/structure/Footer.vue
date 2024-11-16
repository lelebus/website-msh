<template>
    <footer class="bg-msh/20 border-solid border-t-2 border-black">
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-24">
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

                    <div class="gap-x-6 flex md:hidden">
                        <a v-for="item in socials" :key="item.name" :href="item.href"
                            class="text-black/90 hover:text-black/">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">

                    <div class="md:grid md:grid-cols md:gap-8">
                        <div class="mt-10 md:mt-0">
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
                        <div class="mt-10 md:mt-0">
                            <h6 class="text-sm/6 font-semibold text-black">{{ $t('ctas.contactUs') }}</h6>
                            <div class="mt-5 text-sm/6 text-black/80 ">
                                <div class="flex items-center sm:block">
                                    <span class="text-black/90 font-semibold">E: </span>
                                    <a :href="`mailto:${email}`" class="hover:text-black/90 ml-1 sm:ml-0">{{ email
                                        }}</a>
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
            <!-- <div
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
            </div> -->

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

                <div class="gap-x-6 hidden md:flex">
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
    data() {
        return {
            currentYear: new Date().getFullYear(),

            googleMapsLink: "https://maps.app.goo.gl/2cNZSexXfUBQLZPD9",
            email: "info@monacosporthotel.com",
            phone: "+39 0435 420440",

            logoSrc: "/logo.svg",
            logoAlt: "Logo Monaco Sport Hotel",

            contacts: `
                <b>Monaco Sport Hotel</b>
            `,

            newsletter: {
                title: this.$t('sections.newsletter.title'),
                inputLabel: this.$t('sections.newsletter.inputLabel'),
                inputPlaceholder: this.$t('sections.newsletter.inputLabel'),
                inputButtonLabel: this.$t('sections.newsletter.subscribe'),
                policyNotice: this.$t('sections.newsletter.policyNotice'),
            },

            socials: [
                {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/monacosporthotel',
                    icon: defineComponent({
                        render: () =>
                            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                h('path', {
                                    'fill-rule': 'evenodd',
                                    d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                                    'clip-rule': 'evenodd',
                                }),
                            ]),
                    }),
                },
                {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/monaco_sport_hotel/',
                    icon: defineComponent({
                        render: () =>
                            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                h('path', {
                                    'fill-rule': 'evenodd',
                                    d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                                    'clip-rule': 'evenodd',
                                }),
                            ]),
                    }),
                },
            ],

            navigation: [
                {
                    title: this.$t('footer.explore'),
                    items: [
                        { name: this.$t('navigation.hotel'), href: '/hotel' },
                        { name: this.$t('navigation.restaurant'), href: this.localePath('/ristorante-la-ziria') },
                        { name: this.$t('navigation.winecellar'), href: this.localePath('/anguana-del-vin') },
                        { name: this.$t('navigation.spaAndPool'), href: this.localePath('/spa-and-pool') },
                        { name: this.$t('navigation.offers'), href: this.localePath('/offers') },
                        { name: this.$t('navigation.vouchers'), href: this.localePath('/vouchers') },
                    ]
                },
                {
                    title: this.$t('footer.territory'),
                    items: [
                        { name: this.$t('footer.territoryLinkLabel'), href: 'https://www.dolomitivalcomelico.it/' },
                        { name: this.$t('pages.summer.title'), href: this.localePath('/summer') },
                        { name: this.$t('pages.winter.title'), href: this.localePath('/winter') },
                        // { name: this.$t('footer.webcam'), href: '#' },
                        { name: this.$t('footer.weather'), href: 'https://wwwold.arpa.veneto.it/previsioni/it/html/mtg_01.html' },
                    ]
                },
            ],

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