const runtimeConfig = useRuntimeConfig();

export default {
  data() {
    return {
      newsletter: {
        subscriberEmail: null,
      },
    };
  },

  methods: {
    subscribeVisitor(event) {
      console.log("Subscribing visitor...", event.email);
      this.subscribe(event.email);
    },

    async subscribe(email) {
      // load environment variables
      const portal_id = runtimeConfig.public.hubspot.portalId;
      let form_id = null;
      switch (this.$i18n.locale) {
        case "de":
          form_id = runtimeConfig.public.hubspot.formId.de;
          break;
        case "it":
          form_id = runtimeConfig.public.hubspot.formId.it;
          break;
        default:
          form_id = runtimeConfig.public.hubspot.formId.en;
      }

      // prepare request
      const request_url = `https://api.hsforms.com/submissions/v3/integration/submit/${portal_id}/${form_id}`;
      const body = {
        submittedAt: new Date().getTime(),
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: email,
          },
        ],
      };

      // send request
      await fetch(request_url, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        // check if status is 200
        if (res.status === 200) {
          this.newsletter.subscriberEmail = email;
        }
      });
    },
  },
};
