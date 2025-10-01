import type React from "react"
import Header from "./header"
import Footer from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  headerVariant?: "full" | "simple"
}

export default function PageLayout({ children, headerVariant = "simple" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header variant={headerVariant} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
