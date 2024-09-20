export default defineNuxtPlugin((nuxtApp) => {
  // example: initialization based on enabled cookies
  const cookieControl = useCookieControl();
  const { gtag, initialize } = useGtag();

  if (cookieControl?.cookiesEnabledIds?.value?.includes("google-analytics")) {
    initialize();
  }
});
