"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { megaMenuContent } from "@/lib/navigation"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
      <div
        className="relative"
        onMouseLeave={handleMouseLeave}
      >
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("features")}
              >
                <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors font-medium">
                  Features <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
              >
                <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors font-medium">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("community")}
              >
                <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors font-medium">
                  Contact <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
              >
                <button className="flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors font-medium">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/download" className="inline-block">
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
        </div>

        {/* Mega Menu Dropdown */}
        {activeDropdown && (
          <div className="absolute left-0 right-0 bg-white shadow-2xl border-t">
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {megaMenuContent[activeDropdown as keyof typeof megaMenuContent]?.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="group p-6 rounded-xl hover:bg-gradient-to-br hover:from-[#17335F]/5 hover:to-[#67D8AF]/5 transition-all duration-300 border border-transparent hover:border-[#67D8AF]/20"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#67D8AF] to-[#788ED4] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#17335F] font-semibold text-lg mb-2 group-hover:text-[#788ED4] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-6">
              {/* Features Section */}
              <div>
                <h3 className="text-[#17335F] font-semibold mb-3 px-2">Features</h3>
                <div className="space-y-2">
                  {megaMenuContent.features.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#67D8AF] to-[#788ED4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#17335F] font-medium text-sm">{item.title}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-[#17335F] font-semibold mb-3 px-2">About</h3>
                <div className="space-y-2">
                  {megaMenuContent.about.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#67D8AF] to-[#788ED4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#17335F] font-medium text-sm">{item.title}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Community Section */}
              <div>
                <h3 className="text-[#17335F] font-semibold mb-3 px-2">Contact</h3>
                <div className="space-y-2">
                  {megaMenuContent.community.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#67D8AF] to-[#788ED4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#17335F] font-medium text-sm">{item.title}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-[#17335F] font-semibold mb-3 px-2">Resources</h3>
                <div className="space-y-2">
                  {megaMenuContent.resources.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#67D8AF] to-[#788ED4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#17335F] font-medium text-sm">{item.title}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

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
