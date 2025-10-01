"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Mail,
  Users,
  Shield,
  Bell,
  Heart,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  MessageCircle,
  Headphones,
  Gift,
  Lightbulb,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsletterPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false,
  })

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", formData)
  }

  const isFormValid = formData.email && formData.consent

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Stay Connected</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Join the{" "}
                  <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                    Pleaze Newsletter
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-white/90 font-medium leading-tight">
                  Get Mental Health & Addiction Support Delivered Straight to Your Inbox
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  Join our community for inspiring stories, expert tips, app updates, and exclusive content designed to
                  support your journey, all for free.
                </p>
                )

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-300 hover:scale-110"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      )
                    <span className="text-white/90 text-sm font-medium">Trusted Content</span>
                    )
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-white/90" />
                    <span className="text-white/90 text-sm font-medium">Privacy Protected</span>
                    )
                  )
                )

              <Button
                onClick={() => document.getElementById("newsletter-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#17335F] hover:bg-white/90 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              )

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/newsletter-hero-reading.png"
                  alt="Person reading newsletter on phone in a warm, welcoming setting"
                  width={600}
                  height={500}
                  className="drop-shadow-2xl rounded-2xl"
                />
                )
              <div className="absolute inset-0 bg-gradient-to-r from-[#67D8AF]/20 to-[#788ED4]/20 blur-3xl">  )
              )
            )
          )
      </section>

      {/* Why Subscribe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why Subscribe?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get exclusive access to content that supports your mental health journey
            </p>
            )

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Exclusive Content */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Gift className="h-10 w-10 text-white" />
                  )
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Exclusive Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Early access to new features, resources, and mental health tips.
                  </p>
                  )
              </CardContent>
            </Card>

            {/* Inspiration */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Lightbulb className="h-10 w-10 text-white" />
                  )
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Inspiration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Real stories from the Pleaze community to uplift and motivate you.
                  </p>
                  )
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Heart className="h-10 w-10 text-white" />
                  )
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Practical advice and tools to help you or someone you care about.
                  </p>
                  )
              </CardContent>
            </Card>

            {/* Stay Updated */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Zap className="h-10 w-10 text-white" />
                  )
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Stay Updated</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Never miss important app news or opportunities to engage.
                  </p>
                  )
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* Newsletter Sign Up Form */}
      <section id="newsletter-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Sign Up Now</h2>
              <p className="text-xl text-gray-600">Join thousands who trust Pleaze for their mental health journey</p>
              )

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-semibold text-[#17335F]">
                      Name (Optional)
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="min-h-[44px] text-base"
                    />
                    )

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold text-[#17335F]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="min-h-[44px] text-base"
                    />
                    )

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <Label htmlFor="consent" className="text-base cursor-pointer leading-relaxed">
                        I agree to receive emails from Pleaze and understand I can unsubscribe anytime.
                      </Label>
                      )
                    )

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
                      disabled={!isFormValid}
                    >
                      Subscribe Now
                      <Mail className="ml-2 h-5 w-5" />
                    </Button>
                    )
                </form>
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* Privacy Assurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#17335F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                    )
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#17335F]">Privacy Assurance</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      We respect your privacy. Your email is safe with us and will never be shared. You can unsubscribe
                      anytime with one click.
                    </p>
                    )
                  )
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* What Our Subscribers Say */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">What Our Subscribers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our community members who love our newsletter
            </p>
            )

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    )
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "The Pleaze newsletter keeps me motivated and informed. It's like a little daily boost."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#67D8AF] rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                      )
                    <div>
                      <p className="font-semibold text-[#17335F]">Subscriber, Dublin</p>
                      )
                    )
                  )
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    )
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "Great content and really helpful tips — highly recommend signing up."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#788ED4] rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                      )
                    <div>
                      <p className="font-semibold text-[#17335F]">Subscriber, Cork</p>
                      )
                    )
                  )
              </CardContent>
            </Card>
            )
          )
      </section>

      {/* Call-to-Action Footer */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Get Inspired and Supported?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join our community today and start receiving content that truly makes a difference in your mental health
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => document.getElementById("newsletter-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#17335F] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
              >
                Subscribe to the Pleaze Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              )

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 mt-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Free Forever</span>
                )
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Privacy Protected</span>
                )
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                <span className="text-sm font-medium">Unsubscribe Anytime</span>
                )
              )
            )
          )
      </section>

      {/* Footer */}
      )
  )
}
