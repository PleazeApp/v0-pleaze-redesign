"use client"

import type React from "react"
import Footer from "@/components/footer"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heart,
  Users,
  Shield,
  Lightbulb,
  Edit3,
  Eye,
  Share2,
  Lock,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  MessageCircle,
  Headphones,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShareYourStoryPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    privacy: "",
    consent: false,
  })

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean | string) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Story submitted:", formData)
  }

  const isFormValid = formData.email && formData.story && formData.privacy && formData.consent

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
    <div className="min-h-screen bg-white">
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

              <Link href="/#blog" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

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
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] opacity-90"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-20">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
                Community Stories
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Share Your Story -{" "}
                <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                  Your Story Matters
                </span>
                , Help Others Heal
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Sharing your mental health or addiction journey can bring hope, strength, and connection to thousands.
                Join the Pleaze community by telling your story anonymously or openly and make a difference today.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
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
                  </div>
                  <span className="text-white/90 text-sm font-medium">Trusted Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">Safe & Secure</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => document.getElementById("share-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-[#17335F] hover:bg-white/90 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
            >
              Share Your Story Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Share Section - Matching Homepage Card Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why Share Your Story?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your experience has the power to transform lives and create meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Give Hope */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Give Hope</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your experience could be the light someone needs in their darkest moments.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Break Stigma */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Break Stigma</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Honest stories help normalise mental health and addiction struggles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Build Community */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Build Community</h3>
                  <p className="text-gray-600 leading-relaxed">Connect with others who understand and support you.</p>
                </div>
              </CardContent>
            </Card>

            {/* Empower Yourself */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Empower Yourself</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sharing is a powerful step in healing and self-awareness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - Matching Homepage Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Share your story in just three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Edit3 className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Write Your Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tell us about your journey, challenges, and triumphs in your own words.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Choose Your Privacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Submit anonymously or with your name, you decide what to share.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Share2 className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Inspire Thousands</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once reviewed, your story will be featured in the Pleaze News Feed to inspire others.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Your Story Form Section */}
      <section id="share-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Share Your Story</h2>
              <p className="text-xl text-gray-600">Your voice matters. Help others by sharing your experience.</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-semibold text-[#17335F]">
                      Name (Optional)
                    </Label>
                    <p className="text-sm text-gray-600 mb-3">If you prefer to remain anonymous, leave this blank</p>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="min-h-[44px] text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold text-[#17335F]">
                      Email Address *
                    </Label>
                    <p className="text-sm text-gray-600 mb-3">
                      For follow-up and moderation purposes - won't be shared publicly
                    </p>
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
                  </div>

                  {/* Story Field */}
                  <div className="space-y-2">
                    <Label htmlFor="story" className="text-lg font-semibold text-[#17335F]">
                      Your Story *
                    </Label>
                    <p className="text-sm text-gray-600 mb-3">Please share your experience, thoughts, or message</p>
                    <Textarea
                      id="story"
                      name="story"
                      value={formData.story}
                      onChange={handleInputChange}
                      placeholder="Share your journey, what you've learned, challenges you've overcome, or advice you'd give to others..."
                      required
                      rows={8}
                      className="text-base resize-none"
                    />
                  </div>

                  {/* Privacy Options */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-[#17335F]">Select Privacy Option *</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="anonymous"
                          checked={formData.privacy === "anonymous"}
                          onCheckedChange={(checked) => handleCheckboxChange("privacy", checked ? "anonymous" : "")}
                        />
                        <Label htmlFor="anonymous" className="text-base cursor-pointer">
                          Share Anonymously
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="withName"
                          checked={formData.privacy === "withName"}
                          onCheckedChange={(checked) => handleCheckboxChange("privacy", checked ? "withName" : "")}
                        />
                        <Label htmlFor="withName" className="text-base cursor-pointer">
                          Share With Name
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleCheckboxChange("consent", checked)}
                        required
                      />
                      <Label htmlFor="consent" className="text-base cursor-pointer leading-relaxed">
                        I consent to my story being published on Pleaze News Feed and understand it will be reviewed
                        before posting.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
                      disabled={!isFormValid}
                    >
                      Share My Story
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Safety Note */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#17335F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#17335F]">Privacy & Safety Note</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Your privacy is our priority. We carefully review every story before publication to ensure it's
                      respectful and supportive. You control how much you share and can choose anonymity at any time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">What People Say About Sharing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from community members who found healing through sharing
            </p>
          </div>

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
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "Sharing my story helped me heal and gave others courage to seek help."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#67D8AF] rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#17335F]">Pleaze Community Member</p>
                    </div>
                  </div>
                </div>
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
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "Reading others' stories reminded me I'm not alone. Now I'm proud to share mine."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#788ED4] rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#17335F]">Pleaze User</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Matching Homepage Style */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Inspire Others?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your story could be the hope someone needs today. Join our community and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => document.getElementById("share-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#17335F] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
              >
                Share Your Story Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link
                href="/features/news-feed"
                className="text-white hover:text-white/80 transition-colors text-lg font-medium underline underline-offset-4"
              >
                Read Other Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
