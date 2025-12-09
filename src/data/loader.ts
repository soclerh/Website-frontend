import qs from "qs";
import { getStrapiURL } from "../utils/get-strapi-url";
import { fetchAPI } from "../utils/fetch-api";

// 1. Update homepageQuery to accept locale
const homepageQuery = (locale: string) =>
  qs.stringify({
    locale, // Pass locale here
    populate: {
      blocks: {
        on: {
          "homepage.hero-section": {
            populate: {
              button: true,
              icons: { fields: ["url", "name"] },
              image: { fields: ["url", "name"] },
            },
          },
          "homepage.build-the-future": {
            populate: {
              cards: {
                populate: {
                  icon: { fields: ["url", "name"] },
                },
              },
            },
          },
          "homepage.expert-advice": {
            populate: {
              cards: {
                populate: {
                  icon: { fields: ["url", "name"] },
                  bg: { fields: ["url", "name"] },
                },
              },
              card: true,
            },
          },
          "homepage.see-what": {
            populate: {
              image: { fields: ["url", "name"] },
              cards: {
                populate: {
                  profile: { fields: ["name", "url"] },
                },
              },
            },
          },
        },
      },
    },
  });

// CHANGED DEFAULT: "en" -> "en-US"
export async function getHomepageData(lang: string = "fr") {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homepageQuery(lang);
  return await fetchAPI(url.href, { method: "GET" });
}

// 2. Convert globalQuery from a const to a function
const globalQuery = (locale: string) =>
  qs.stringify({
    locale, // Pass locale here
    populate: {
      blocks: {
        on: {
          "layout.header": {
            populate: {
              logo: { fields: ["url", "name", "alternativeText"] },
              links: { populate: true },
              button: {
                populate: {
                  icon: { fields: ["url", "name"] },
                },
              },
            },
          },
          "global.cta": {
            populate: {
              button: {
                populate: {
                  icon: { fields: ["url", "name"] },
                },
              },
            },
          },
          "global.footer": {
            populate: {
              services: { populate: true },
              resources: { populate: true },
              contact: {
                populate: {
                  image: { fields: ["url", "name", "alternativeText"] },
                },
              },
              social: {
                populate: {
                  icon: { fields: ["url", "name", "alternativeText"] },
                },
              },
              links: { populate: true },
            },
          },
        },
      },
    },
  });

// CHANGED DEFAULT: "en" -> "en-US"
export async function getGlobalData(lang: string = "fr") {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery(lang);
  return await fetchAPI(url.href, { method: "GET" });
}

// 3. Update buildPageQuery to accept locale
function buildPageQuery(slug: string, locale: string) {
  let populateOptions = {};

  if (slug === "about") {
    populateOptions = {
      populate: {
        blocks: {
          on: {
            "aboutpage.hero-section": {
              populate: {
                image: { fields: ["url", "name", "alternativeText"] },
              },
            },
            "aboutpage.our-story": {
              populate: {
                image: { fields: ["url", "name", "alternativeText"] },
              },
            },
            "aboutpage.our-mission": {
              populate: {
                blueCard: true,
                cards: {
                  populate: {
                    icon: { fields: ["url", "name", "alternativeText"] },
                  },
                },
              },
            },
            "aboutpage.our-team": {
              populate: {
                cards: {
                  populate: {
                    image: { fields: ["url", "name", "alternativeText"] },
                  },
                },
              },
            },
            "aboutpage.why-clients": {
              populate: {
                cards: {
                  populate: {
                    icon: { fields: ["url", "name", "alternativeText"] },
                  },
                },
              },
            },
          },
        },
      },
    };
  }

  return qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      locale, // Add locale to filter
      ...populateOptions,
    },
    { encodeValuesOnly: true }
  );
}

// CHANGED DEFAULT: "en" -> "en-US"
export async function getPageData(slug: string, lang: string = "fr") {
  const BASE_URL = getStrapiURL();
  const query = buildPageQuery(slug, lang);
  const url = `${BASE_URL}/api/pages?${query}`;
  const response = await fetchAPI(url, { method: "GET" });
  return response;
}

// 4. Update Blog Queries
const blogQuery = (locale: string) =>
  qs.stringify({
    locale,
    populate: {
      bg: { fields: ["url", "name", "alternativeText"] },
    },
  });

// CHANGED DEFAULT: "en" -> "en-US"
export async function getBlogData(lang: string = "fr") {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = blogQuery(lang);
  return await fetchAPI(url.href, { method: "GET" });
}

// CHANGED DEFAULT: "en" -> "en-US"
export async function getBlogBySlug(slug: string, lang: string = "fr") {
  const BASE_URL = getStrapiURL();
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    locale: lang,
    populate: {
      bg: { fields: ["url", "name", "alternativeText"] },
    },
  });

  const url = `${BASE_URL}/api/blogs?${query}`;
  return await fetchAPI(url, { method: "GET" });
}
