<template>
    <div class="page-ct bg-white">
        <Header :logoSrc="logoSrc" logoAlt="Logo Vinoteqa" :navigation="navigation"
            :actionButtonLabel="actionButtonLabel" :actionButtonLink="actionButtonLink" />

        <main>
            <slot />

            <div class="newsletter-ct py-16 sm:py-24">
                <NewsletterForm :loading="true" :subscribed="!!newsletter.subscriberEmail" :title="newsletter.title"
                    :policyNotice="newsletter.policyNotice" :inputLabel="newsletter.inputLabel"
                    :inputPlaceholder="newsletter.inputPlaceholder" :inputButtonLabel="newsletter.inputButtonLabel"
                    @subscribe="subscribeVisitor($event)" />
            </div>
        </main>

        <Footer :pageTitle="title" :logoSrc="whiteLogoSrc" :mission="mission" :menu2="footerNavigation.resources"
            :menu3="footerNavigation.contacts" :location="footerNavigation.location"
            :socials="footerNavigation.social" />
    </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
    titleTemplate: `%s | ${t('vinoteqa.title')}`,
    title: "Home",
})

useSeoMeta({
    title: "Home",
    description: t('vinoteqa.description')
}, {
    tagPriority: 'critical'
})
</script>

<script>
import newsletterMixin from '~/mixins/newsletter.js'

const runtimeConfig = useRuntimeConfig()

export default {
    mixins: [newsletterMixin],

    data() {
        return {
            title: 'Vinoteqa',
            mission: this.$t('vinoteqa.mission'),
            logoSrc: '/logo.svg',
            whiteLogoSrc: '/logo-negative.svg',
            email: 'info@vinoteqa.com',

            // navigation
            actionButtonLabel: this.$t('ctas.bookDemo'),
            actionButtonLink: runtimeConfig.public.demoBookingPageLink,
            navigation: [
                { name: this.$t('navigation.platform'), href: '/#features' },
                { name: this.$t('navigation.winelist'), href: '/#winelist' },
                { name: this.$t('navigation.pricing'), href: '/#pricing' },
                { name: this.$t('navigation.faqs'), href: '/#faqs' },
            ],
            footerNavigation: {
                resources: {
                    title: this.$t('footer.resources.title'),
                    items: [
                        { name: this.$t('footer.resources.blog'), href: this.localePath('/blog') },
                        { name: this.$t('ctas.bookDemo'), href: runtimeConfig.public.demoBookingPageLink },
                    ],
                },
                contacts: {
                    title: this.$t('footer.contacts.title'),
                    items: [
                        { name: 'info@vinoteqa.com', href: 'mailto:info@vinoteqa.com' }
                    ],
                },
                location: [
                    {
                        name: this.$t('vinoteqa.location'),
                    }
                ],
                social: [
                    {
                        name: 'Instagram',
                        href: 'https://www.instagram.com/vinoteqa/',
                        icon: defineComponent({
                            render: () =>
                                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                    h('path', {
                                        'fill-rule': 'evenodd',
                                        d: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
                                        'clip-rule': 'evenodd',
                                    }),
                                ]),
                        }),
                    },
                    {
                        name: 'LinkedIn',
                        href: 'https://www.linkedin.com/company/vinoteqa/',
                        icon: defineComponent({
                            render: () =>
                                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                    h('path', {
                                        'fill-rule': 'evenodd',
                                        d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                                        'clip-rule': 'evenodd',
                                    }),
                                ]),
                        }),
                    },
                    {
                        name: 'Spotify',
                        href: 'https://open.spotify.com/user/31eanqwhjwhmofl4wc26ye7r2heu/',
                        icon: defineComponent({
                            render: () =>
                                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                    h('path', {
                                        d: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
                                    }),
                                ]),
                        }),
                    },
                ],
            },

            newsletter: {
                title: this.$t('sections.newsletter.title'),
                inputLabel: this.$t('sections.newsletter.inputLabel'),
                inputPlaceholder: this.$t('sections.newsletter.inputLabel'),
                inputButtonLabel: this.$t('sections.newsletter.subscribe'),
                policyNotice: this.$t('sections.newsletter.policyNotice'),
            },
        }
    },
}
</script>