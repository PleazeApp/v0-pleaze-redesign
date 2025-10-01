"use client"

import type React from "react"
import Footer from "@/components/footer"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageCircle, Heart, Shield, Send, ArrowRight, ChevronDown, Menu, X, BookOpen, Headphones, Users, CircleCheck as CheckCircle, Lock, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AskJimmyPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    keepPrivate: false,
    shareAnonymously: false,
  })

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean | string) => {
    setFormData((prev) => ({ ...prev, [name]: checked === true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Question submitted:", formData)
  }

  const isFormValid = formData.email && formData.question

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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] opacity-90"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Ask Jimmy — Founder Q&A
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Got a question about{" "}
                  <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                    mental health
                  </span>{" "}
                  or{" "}
                  <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                    addiction?
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-white/90 font-medium leading-tight">
                  Jimmy's here to answer - openly, honestly, and without judgment.
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  I'm Jimmy, founder of Pleaze, and I've been through my own journey with mental health and addiction.
                  Now, I'm here to share what I've learned and help in any way I can. Ask me anything, it's 100%
                  confidential.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-white/90" />
                    <span className="text-white/90 text-sm font-medium">100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-white/90" />
                    <span className="text-white/90 text-sm font-medium">Zero Judgment</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => document.getElementById("ask-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#17335F] hover:bg-white/90 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
              >
                Ask Your Question
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Jimmy's Photo */}
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/james-lewis-founder-headshot.png"
                    alt="Jimmy Lewis - Founder of Pleaze, ready to answer your questions"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#67D8AF]/20 to-[#788ED4]/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ask Jimmy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why Ask Jimmy?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers from someone who truly understands your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Lived Experience */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <UserCheck className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Lived Experience</h3>
                  <p className="text-gray-600 leading-relaxed">I've been where you are & I know how tough it can be.</p>
                </div>
              </CardContent>
            </Card>

            {/* Zero Judgment */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Zero Judgment</h3>
                  <p className="text-gray-600 leading-relaxed">This is a safe, supportive space to ask anything.</p>
                </div>
              </CardContent>
            </Card>

            {/* Personal Connection */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Personal Connection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every answer comes directly from me, not an AI or automated reply.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Practical Advice */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Practical Advice</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Actionable tips, encouragement, and real-world resources.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">The Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to get the support you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Send className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Submit Your Question</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use the form below. You can share as much or as little detail as you like.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Get a Response</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'll personally read and respond to your question, either privately or (with your permission) on our
                    community feed.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Stay Connected</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join the conversation and learn from others' questions, too.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ask Jimmy Form */}
      <section id="ask-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Ask Jimmy Form</h2>
              <p className="text-xl text-gray-600">Your question matters. Let's talk about it.</p>
            </div>

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
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold text-[#17335F]">
                      Email (Required)
                    </Label>
                    <p className="text-sm text-gray-600 mb-3">Only if you want a direct reply</p>
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

                  {/* Question Field */}
                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-lg font-semibold text-[#17335F]">
                      Your Question (Required)
                    </Label>
                    <Textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="Ask me anything about mental health, addiction, recovery, or anything else on your mind..."
                      required
                      rows={6}
                      className="text-base resize-none"
                    />
                  </div>

                  {/* Privacy Options */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-[#17335F]">Privacy Options</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="keepPrivate"
                          checked={formData.keepPrivate}
                          onCheckedChange={(checked) => handleCheckboxChange("keepPrivate", checked)}
                        />
                        <Label htmlFor="keepPrivate" className="text-base cursor-pointer">
                          Keep my question private.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="shareAnonymously"
                          checked={formData.shareAnonymously}
                          onCheckedChange={(checked) => handleCheckboxChange("shareAnonymously", checked)}
                        />
                        <Label htmlFor="shareAnonymously" className="text-base cursor-pointer">
                          Share anonymously on the Pleaze community feed.
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
                      disabled={!isFormValid}
                    >
                      Submit Your Question
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Assurance */}
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
                    <h3 className="text-2xl font-bold text-[#17335F]">Privacy Assurance</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Your trust matters to me. Your email and personal details will never be shared without your
                      permission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A Message from Jimmy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#17335F]/5 to-[#67D8AF]/5">
              <CardContent className="p-12">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto shadow-lg">
                    <Image
                      src="/images/james-lewis-founder-headshot.png"
                      alt="Jimmy Lewis - Founder of Pleaze"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#17335F]">A Message from Jimmy</h3>
                    <blockquote className="text-xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                      "I know how isolating mental health and addiction struggles can feel. This is my way of being
                      there for you — no stigma, no shame, just real talk. Ask me anything."
                    </blockquote>
                    <p className="text-lg font-semibold text-[#17335F]">— Jimmy, Founder of Pleaze</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Have a question on your mind?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">Don't carry it alone.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => document.getElementById("ask-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#17335F] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-semibold"
              >
                Ask Jimmy Your Question
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Zero Judgment</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Personal Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
