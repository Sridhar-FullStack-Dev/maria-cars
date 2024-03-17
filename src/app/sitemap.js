export default function sitemap() {
  const currentDate = new Date();
  return [
    {
      url: "https://maria-cars.vercel.app",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://maria-cars.vercel.app/#home",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://maria-cars.vercel.app/#about",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.vercel.app/#services",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.vercel.app/#featured-products",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://maria-cars.vercel.app/#contacts",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
