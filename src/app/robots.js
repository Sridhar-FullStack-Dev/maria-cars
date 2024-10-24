export default function robots() {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Googlebot-News",
          "Applebot",
          "bingbot",
          "msnbot",
          "Baiduspider",
          "Baiduspider-mobile",
          "Baiduspider-video",
          "Baiduspider-image",
          "DuckDuckBot",
          "Slurp",
          "NaverBot",
          "Yeti",
          "Yandex",
          "YandexBot",
          "YandexMobileBot",
          "YandexVideo",
          "YandexWebmaster",
          "YandexSitelinks",
          "SeznamBot",
          "AdsBot-Google",
          "Adidxbot",
        ],
        allow: [
          "/",
          "/featured-products",
          "/services",
          "/about",
          "/contact",
          "/gallery",
        ],
        disallow: [
          "/private/",
          "/admin/",
          "/dashboard/",
          "/*?*",
          "/*.json$",
          "/*.js$",
          "/*.css$",
        ],
      },
      {
        userAgent: [
          "*",
          "Yahoo Pipes 1.0",
          "Facebot",
          "externalfacebookhit",
          "scrapy",
          "butterfly",
          "crawler",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://maria-cars.com/sitemap.xml",
    host: "https://maria-cars.com",
  };
}
