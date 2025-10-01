import type React from "react"
import { Nunito_Sans } from "next/font/google"
import { defaultMetadata, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en" className={nunitoSans.variable}>
      <head>
        <link rel="icon" href="/assets/pleaze-logo-new.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
