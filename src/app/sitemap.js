export default function sitemap() {
  const currentDate = new Date();
  return [
    {
      url: "https://maria-cars.com",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://maria-cars.com/#about",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.com/#services",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.com/featured-products",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.com/#contacts",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
