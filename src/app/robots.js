export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/private/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/"],
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://maria-cars.com/sitemap.xml",
  };
}
