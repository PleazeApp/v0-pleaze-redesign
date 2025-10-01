import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

const siteConfig = {
  name: "Pleaze",
  description: "The go-to app for Mental Health and Addiction support. Get the support you deserve with Pleaze.",
  url: "https://pleazeapp.com",
  ogImage: "/hero-section-screenshot-new.png",
  keywords: [
    "mental health",
    "addiction support",
    "recovery app",
    "mental wellness",
    "crisis support",
    "mental health resources",
    "addiction recovery",
    "peer support",
  ],
}

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: SEOProps): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
  const url = `${siteConfig.url}${path}`
  const ogImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ")

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: "Pleaze Team" }],
    creator: "Pleaze",
    publisher: "Pleaze App Ltd",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@PleazeApp",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }

  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: authors || ["Pleaze Team"],
    }
  }

  return metadata
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pleaze",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/pleaze-logo-new.png`,
    sameAs: [
      "https://twitter.com/PleazeApp",
      "https://www.facebook.com/PleazeApp",
      "https://www.instagram.com/pleazeapp/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@pleazeapp.com",
      telephone: "+353874456877",
      contactType: "Customer Service",
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteConfig.url}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Pleaze",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/assets/pleaze-logo-new.png`,
      },
    },
  }
}

export const defaultMetadata = generateMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
})
