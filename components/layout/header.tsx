"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, BookOpen, MessageCircle, Headphones, Shield, Users, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  variant?: "full" | "simple"
}

export default function Header({ variant = "full" }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const dropdownContent = {
    benefits: [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Crisis Support",
        description: "Instantly alert your support network when you need help most.",
        href: "/features/help-buttons",
      },
      {
        icon: <Search className="h-6 w-6" />,
        title: "Resource Hub",
        description: "Access curated mental health resources and community support.",
        href: "/resource-hub",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Learning Center",
        description: "Complete courses to better understand and support mental health.",
        href: "/features/training-resources",
      },
    ],
    support: [
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "24/7 Chat Support",
        description: "Get immediate help from our trained support specialists.",
        href: "/contact",
      },
      {
        icon: <Headphones className="h-6 w-6" />,
        title: "Crisis Helpline",
        description: "Direct access to professional crisis intervention services.",
        href: "/resource-hub",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Community Forum",
        description: "Connect with others on similar journeys in a safe, moderated space.",
        href: "/share-your-story",
      },
    ],
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/pleaze-logo-new.png"
              alt="Pleaze Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#17335F] to-[#788ED4] bg-clip-text text-transparent">
              Pleaze
            </span>
          </Link>

          {variant === "full" ? (
            <>
              {/* Desktop Navigation - Full */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/about" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  About
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("benefits")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors">
                    Benefits <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>

                <Link href="/#how-it-works" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  How it Works
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("support")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors">
                    Support <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>

                <Link href="/blog" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Blog
                </Link>
              </nav>
            </>
          ) : (
            <>
              {/* Desktop Navigation - Simple */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  About
                </Link>
                <Link href="/features" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Features
                </Link>
                <Link href="/contact" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Contact
                </Link>
              </nav>
            </>
          )}

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/download"
              className="inline-block"
            >
              <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                Download App
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Dropdown Content - Only for full variant */}
        {variant === "full" && activeDropdown && (
          <div
            className="absolute left-0 right-0 bg-gradient-to-r from-[#17335F] to-[#788ED4] shadow-xl border-t"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-3 gap-6">
                {dropdownContent[activeDropdown as keyof typeof dropdownContent]?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {variant === "full" ? (
                <>
                  <Link
                    href="/about"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/features"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/#how-it-works"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How it Works
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/features"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-[#17335F] hover:text-[#788ED4] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              <Link href="/download" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 min-h-[44px] text-base font-medium">
                  Download App
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
