import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
})

export const metadata: Metadata = {
  title: "Pleaze - Mental Health & Addiction Support App",
  description: "The go-to app for Mental Health and Addiction support. Get the support you deserve with Pleaze.",
  keywords: ["mental health", "addiction support", "recovery app", "mental wellness"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <head>
        <link rel="icon" href="/assets/pleaze-logo-new.png" />
      </head>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
