import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pleazeapp.com"

  const routes = [
    "",
    "/about",
    "/features",
    "/features/help-buttons",
    "/features/news-feed",
    "/features/personal-hub",
    "/features/training-resources",
    "/for-individuals",
    "/for-loved-ones",
    "/for-professionals",
    "/for-institutions",
    "/contact",
    "/download",
    "/resource-hub",
    "/share-your-story",
    "/write-for-us",
    "/ask-jimmy",
    "/newsletter",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimers",
    "/sources",
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/features") || route === "/blog" ? 0.8 : 0.7,
  }))

  return staticPages
}
