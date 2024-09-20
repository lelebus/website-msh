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

    getArticleImageSrc(article) {
      if (!article) return null;

      // split path by / and get the last segment
      const pathSegments = article._path.split("/");
      const slug = pathSegments[pathSegments.length - 1];

      return `/imgs-blog/${slug}.jpg`;
    },
  },
};
