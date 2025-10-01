import type React from "react"
import { Nunito_Sans } from "next/font/google"
import { defaultMetadata, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import Header from "@/components/layout/header"
import Footer from "@/components/footer"
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
      <body className={nunitoSans.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
