export default {
  methods: {
    getLocaleDate(date) {
      if (!date) return null;

      const dateOtions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString(this.$i18n.locale, dateOtions);
    },

    getOfferImageSrc(offer) {
      if (!offer) return null;

      // split path by / and get the last segment
      const pathSegments = offer._path.split("/");
      const slug = pathSegments[pathSegments.length - 1];

      return `/imgs-offers/${slug}.jpg`;
    },

    getOfferImage2Src(offer) {
      if (!offer) return null;

      // split path by / and get the last segment
      const pathSegments = offer._path.split("/");
      const slug = pathSegments[pathSegments.length - 1];

      return `/imgs-offers/${slug}-2.jpg`;
    },
  },
};
