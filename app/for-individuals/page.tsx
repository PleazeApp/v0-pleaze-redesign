"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Search, Users, ArrowRight, ChevronDown, Menu, X, BookOpen, MessageCircle, Headphones, CircleCheck as CheckCircle, Lock, Star, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForIndividualsPage() {
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
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Resource Hub",
        description: "Access curated mental health resources and community support.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Learning Center",
        description: "Complete courses to better understand and support mental health.",
      },
    ],
    support: [
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "24/7 Chat Support",
        description: "Get immediate help from our trained support specialists.",
      },
      {
        icon: <Headphones className="h-6 w-6" />,
        title: "Crisis Helpline",
        description: "Direct access to professional crisis intervention services.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Community Forum",
        description: "Connect with others on similar journeys in a safe, moderated space.",
      },
    ],
  }

  return (
    <>
      {/* Header - Matching Homepage Design */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          {/* Main Header */}
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
                )

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
                )

              <Link href="/#blog" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                Download App
              </Button>
              )

            {/* Mobile Menu Button */}
            <Button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            )

          {/* Dropdown Content */}
          {activeDropdown && (
            <div
              className="absolute left-0 right-0 bg-gradient-to-r from-[#17335F] to-[#788ED4] shadow-xl border-t"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {dropdownContent[activeDropdown as keyof typeof dropdownContent]?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {item.icon}
                          )
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                          )
                        )
                      )
                  ))}
                  )
                )
              )
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="py-4 space-y-4">
                <Link href="/about" className="block text-[#17335F] hover:text-[#788ED4] transition-colors">
                  About
                </Link>
                <Link href="/#benefits" className="block text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Benefits
                </Link>
                <Link href="/#how-it-works" className="block text-[#17335F] hover:text-[#788ED4] transition-colors">
                  How it Works
                </Link>
                <Link href="/#support" className="block text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Support
                </Link>
                <Link href="/#blog" className="block text-[#17335F] hover:text-[#788ED4] transition-colors">
                  Blog
                </Link>
                <Button className="w-full bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium">
                  Download App
                </Button>
                )
              )
          )}
          )
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] opacity-90">  )
        <div className="absolute inset-0 bg-black/10">  )

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-20">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
                For Individuals - Get the Support You Deserve
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                You're{" "}
                <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                  Not Alone
                </span>{" "}
                - Take the First Step Towards{" "}
                <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">Recovery</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Pleaze gives you 24/7 resources, a safe place to share your story, and a community that understands.
              </p>
              )

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">Safe & Private</span>
                  )
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">Judgment-Free</span>
                  )
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">Community Support</span>
                  )
                )
              )

            <Button className="bg-white text-[#17335F] hover:bg-white/90 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* App Screenshot */}
            <div className="flex justify-center mt-16">
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/hero-section-screenshot-new.png"
                    alt="Pleaze App showing support features for individuals"
                    width={800}
                    height={400}
                    className="drop-shadow-2xl rounded-xl"
                  />
                  )
                <div className="absolute inset-0 bg-gradient-to-r from-[#67D8AF]/20 to-[#788ED4]/20 blur-3xl">  )
                )
              )
            )
          )
      </section>

      {/* Pain + Empathy Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">We Understand What You're Going Through</h2>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#D28FF2] rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                    )
                  <h3 className="text-xl font-bold text-[#17335F]">The Loneliness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Feeling like no one understands what you're going through. Like you're fighting this battle
                    completely alone.
                  </p>
                  )

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF245F] rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                    )
                  <h3 className="text-xl font-bold text-[#17335F]">The Stigma</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Worrying about judgment from family, friends, or colleagues. Feeling ashamed to ask for help.
                  </p>
                  )

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FFF6A6] rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6 text-black" />
                    )
                  <h3 className="text-xl font-bold text-[#17335F]">The Confusion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Not knowing where to start, what resources to trust, or how to take the first step towards recovery.
                  </p>
                  )
                )
              )

            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  We know it's hard to reach out, that's why Pleaze makes it easy, private, and judgment-free. You don't
                  have to carry this burden alone anymore.
                </p>
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* How Pleaze Helps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">How Pleaze Helps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed specifically for your journey
            </p>
            )

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* No More Suffering Alone */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-8 w-8 text-white" />
                    )
                  <h3 className="text-2xl font-bold text-[#17335F]">No More Suffering Alone</h3>
                  )
                <p className="text-lg text-gray-700 leading-relaxed">
                  Help Is a Button Away. Instantly connect with your support network when you need it most. No more
                  struggling in silence.
                </p>
                <div className="flex items-center text-[#67D8AF] font-medium">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Instant help buttons for crisis moments
                  )
              </CardContent>
            </Card>

            {/* No More Searching */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#FFF6A6] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Search className="h-8 w-8 text-black" />
                    )
                  <h3 className="text-2xl font-bold text-[#17335F]">No More Searching Endlessly</h3>
                  )
                <p className="text-lg text-gray-700 leading-relaxed">
                  Find, Ask, and Get Support. Access curated resources, expert advice, and community wisdom all in one
                  trusted place.
                </p>
                <div className="flex items-center text-[#67D8AF] font-medium">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Curated news feed with trusted information
                  )
              </CardContent>
            </Card>

            {/* Take Control */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-white" />
                    )
                  <h3 className="text-2xl font-bold text-[#17335F]">Take Control of Your Journey</h3>
                  )
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your Mental Health and Addiction Recovery, Your Way. Use our personal hub to track progress, journal
                  thoughts, and build your coping toolkit.
                </p>
                <div className="flex items-center text-[#67D8AF] font-medium">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Personal hub with journaling and coping tools
                  )
              </CardContent>
            </Card>

            {/* Learn How to Help Others */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#61EDEA] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-black" />
                    )
                  <h3 className="text-2xl font-bold text-[#17335F]">Learn How You Can Help Others</h3>
                  )
                <p className="text-lg text-gray-700 leading-relaxed">
                  Turn Your Experience Into Strength. Complete training courses to become a certified peer supporter and
                  help others on their journey.
                </p>
                <div className="flex items-center text-[#67D8AF] font-medium">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Training resources and certification badges
                  )
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* Proof & Trust Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Testimonial */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      )
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "Pleaze gave me hope when I had none left. The help buttons saved my life, and the community
                      showed me I wasn't alone. For the first time in years, I feel like I have control over my
                      recovery."
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#67D8AF] rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                        )
                      <div>
                        <p className="font-semibold text-[#17335F]">Sarah M.</p>
                        <p className="text-sm text-gray-600">Pleaze User, Dublin</p>
                        )
                      )
                    )
                </CardContent>
              </Card>

              {/* Privacy Guarantee */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#17335F]/5 to-[#67D8AF]/5">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto">
                      <Lock className="h-10 w-10 text-white" />
                      )
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#17335F]">Privacy Guarantee</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Your data is encrypted and secure. You control what you share and with whom. Your privacy is our
                        priority, always.
                      </p>
                      <div className="flex items-center justify-center text-[#67D8AF] font-medium">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        GDPR Compliant & Secure
                        )
                      )
                    )
                </CardContent>
              </Card>
              )
            )
          )
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Take Control of Your Journey?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Sign up free and get immediate access to help. Your recovery starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              >
                <div className="relative">
                  <Image
                    src="/assets/mobile-play-store-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={70}
                    className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl group-hover:drop-shadow-3xl"
                    style={{ width: "200px", height: "70px", objectFit: "fill" }}
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">  )
                  )
              </Link>
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              >
                <div className="relative">
                  <Image
                    src="/assets/mobile-app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={70}
                    className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl group-hover:drop-shadow-3xl"
                    style={{ width: "200px", height: "70px", objectFit: "fill" }}
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">  )
                  )
              </Link>
              )

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 mt-8">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">Free Forever</span>
                )
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Private & Secure</span>
                )
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Judgment-Free Zone</span>
                )
              )

            <p className="text-white/70 text-lg">
              Join thousands who have already started their journey to recovery with Pleaze.
            </p>
            )
          )
      </section>

      {/* Footer */}
      )
  )
}
