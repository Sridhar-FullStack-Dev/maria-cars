export default function sitemap() {
  const currentDate = new Date();
  const baseUrl = "https://maria-cars.com";

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/featured-products`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...mainPages];
}
