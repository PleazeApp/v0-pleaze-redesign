"use client"

import type React from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/footer"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Heart,
  Search,
  Shield,
  Users,
  Calendar,
  User,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [currentBenefit, setCurrentBenefit] = useState(0)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", e)
    setVideoError(true)
    setVideoLoaded(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Fallback gradient background - always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] opacity-90"></div>

        {/* Video Background */}
        {!videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlay={handleVideoLoad}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-08-14%2015_49_13-ngfAeNoyPeFZdibGhUxiER0XEppHwM.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-20">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
                Trusted by Social Entrepreneurs Ireland
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The go-to app for{" "}
                <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                  Mental Health
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[#67D8AF] to-white bg-clip-text text-transparent">
                  Addiction
                </span>{" "}
                support
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get the support you deserve. Connect with loved ones and take control of your mental health journey.
              </p>
            </div>

            {/* Combined Rating */}
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
                  <span className="text-white/90 text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">Trusted & Secure</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/assets/mobile-play-store-badge.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ width: "180px", height: "60px", objectFit: "fill" }}
                />
              </Link>
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/assets/mobile-app-store-badge.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ width: "180px", height: "60px", objectFit: "fill" }}
                />
              </Link>
            </div>
          </div>

          {/* App Screenshot - Centered below the content */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero-section-screenshot-new.png"
                  alt="Pleaze App Screenshots showing Chat, Addiction Support, Main Hub, Mental Health, and Breathing Simulator"
                  width={1200}
                  height={600}
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#67D8AF]/20 to-[#788ED4]/20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Video loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-white/50 text-sm">Loading video...</div>
          </div>
        )}
      </section>

      {/* Achievement Badges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 flex-wrap max-w-5xl mx-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105 group"
              title="Download Pleaze - Award Winning Mental Health App"
            >
              <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=4296&badge_type=daily&theme=light"
                width={270}
                height="auto"
                alt="Fazier Daily Badge - Click to Download Pleaze"
                className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105 group"
              title="Download Pleaze - Award Winning Mental Health App"
            >
              <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=4296&badge_type=weekly&theme=light"
                alt="Fazier Weekly Badge - Click to Download Pleaze"
                width={270}
                height="auto"
                className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              title="Firsto Top 1 Daily Winner"
              className="transition-transform duration-200 hover:scale-105 group"
            >
              <img
                src="https://firsto.co/images/badges/daily-top1.svg"
                alt="Firsto Top 1 Daily Winner"
                width={195}
                height="auto"
                className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              title="Firsto Top 1 Weekly Winner"
              className="transition-transform duration-200 hover:scale-105 group"
            >
              <img
                src="https://firsto.co/images/badges/weekly-top1.svg"
                alt="Firsto Top 1 Weekly Winner"
                width={195}
                height="auto"
                className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">
                  Why Choose
                  <br />
                  Pleaze?
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whilst spending around 7 months in a psychiatric hospital in 2021 with 5 separate admissions, I came
                    to realise how much people were in need of help. This is when I became committed to doing whatever
                    it takes to even help that one person.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our app is made by those who have first-hand experience with Mental Health and Addiction. We have
                    identified what those who suffer need, and work together to find innovative solutions.
                  </p>
                </div>
                <div>
                  <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium">
                    Learn More About Us
                  </Button>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/N_Wy_4klHFc"
                    title="Pleaze: The go-to place for help"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="text-gray-600 italic text-center leading-relaxed">
                  On the 13th of January 2021, I lay in bed ready to take my life and fall back into addiction. Not for
                  the first time either. All I kept saying to myself was{" "}
                  <span className="font-semibold text-[#67D8AF]">"Please, please, someone or something help me"</span>.
                  The idea was born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">The Benefits of Pleaze</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how Pleaze can transform your mental health journey
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Benefit Carousel */}
            <div className="relative overflow-hidden bg-gray-50 rounded-2xl p-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
              >
                {/* Benefit 1: No More Suffering */}
                <div className="w-full flex-shrink-0 text-center">
                  <div className="space-y-6 mb-8">
                    <div className="w-20 h-20 bg-[#D28FF2] rounded-2xl flex items-center justify-center mx-auto">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#17335F]">No More Suffering</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Quickly and effectively alert your family, friends and loved ones you need help.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src="/app-screenshots/pleaze-home-benefits.png"
                        alt="Pleaze main dashboard showing support options"
                        width={300}
                        height={600}
                        className="drop-shadow-2xl rounded-2xl"
                        style={{ maxHeight: "500px", width: "auto" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Benefit 2: No More Searching */}
                <div className="w-full flex-shrink-0 text-center">
                  <div className="space-y-6 mb-8">
                    <div className="w-20 h-20 bg-[#FFF6A6] rounded-2xl flex items-center justify-center mx-auto">
                      <Search className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#17335F]">No More Searching</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Find and request the answers you need on our news feed.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src="/app-screenshots/pleaze-home-benefits-3.png"
                        alt="Pleaze feed showing educational articles and resources"
                        width={300}
                        height={600}
                        className="drop-shadow-2xl rounded-2xl"
                        style={{ maxHeight: "500px", width: "auto" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Benefit 3: Take Back Control */}
                <div className="w-full flex-shrink-0 text-center">
                  <div className="space-y-6 mb-8">
                    <div className="w-20 h-20 bg-[#FF245F] rounded-2xl flex items-center justify-center mx-auto">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#17335F]">Take Back Control</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Pleaze hub allows you to take your mental health or addiction in your owns hands.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src="/app-screenshots/pleaze-home-benefits-4.png"
                        alt="Pleaze Hub showing comprehensive tools and features"
                        width={300}
                        height={600}
                        className="drop-shadow-2xl rounded-2xl"
                        style={{ maxHeight: "500px", width: "auto" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Benefit 4: Empower Yourself */}
                <div className="w-full flex-shrink-0 text-center">
                  <div className="space-y-6 mb-8">
                    <div className="w-20 h-20 bg-[#61EDEA] rounded-2xl flex items-center justify-center mx-auto">
                      <Users className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#17335F]">Empower Yourself</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Learn how to help those you love by completing our short courses and earn a badge!
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src="/app-screenshots/pleaze-home-benefits-2.png"
                        alt="Pleaze badges showing completion certificates"
                        width={300}
                        height={600}
                        className="drop-shadow-2xl rounded-2xl"
                        style={{ maxHeight: "500px", width: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - positioned relative to the carousel container */}
              <button
                onClick={() => setCurrentBenefit(currentBenefit === 0 ? 3 : currentBenefit - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous benefit"
              >
                <ChevronDown className="h-6 w-6 text-[#17335F] rotate-90" />
              </button>

              <button
                onClick={() => setCurrentBenefit(currentBenefit === 3 ? 0 : currentBenefit + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Next benefit"
              >
                <ChevronDown className="h-6 w-6 text-[#17335F] -rotate-90" />
              </button>
            </div>

            {/* Dots Indicator - directly below the carousel */}
            <div className="flex justify-center space-x-2 mt-6">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBenefit(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentBenefit === index ? "bg-[#17335F]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to benefit ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA section */}
            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to experience these benefits for yourself?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src="/assets/mobile-play-store-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{ width: "180px", height: "60px", objectFit: "fill" }}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src="/assets/mobile-app-store-badge.png"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{ width: "180px", height: "60px", objectFit: "fill" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">How it Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with Pleaze in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Download className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Download The App</h3>
                  <p className="text-gray-600 leading-relaxed">Easily download Pleaze from your device's app store.</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#FFF6A6] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <User className="h-10 w-10 text-black" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Create an Account</h3>
                  <p className="text-gray-600 leading-relaxed">Sign up and create your personal account.</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white hover:bg-gray-50/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#FF245F] rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Invite Your Loved Ones</h3>
                  <p className="text-gray-600 leading-relaxed">Invite and create a group with those you care about.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced CTA Banner */}
          <div className="text-center mt-16">
            <div className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] rounded-3xl p-16 text-white overflow-hidden">
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Get Started?</h3>
                <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                  Download Pleaze now and take the first step towards better mental health and addiction support
                </p>

                {/* Download buttons with enhanced styling */}
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
                      <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
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
                      <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Trusted & Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Latest Blog & Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest insights on mental health and addiction recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#17335F]/10 to-[#67D8AF]/10"></div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>January {10 + i}, 2024</span>
                  </div>
                  <CardTitle className="text-[#17335F] line-clamp-2">
                    Understanding Mental Health: A Journey to Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    Discover the key steps to understanding and managing mental health challenges. Learn from real
                    experiences and expert advice.
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="mt-4 p-0 text-[#788ED4] hover:text-[#17335F] text-base font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
