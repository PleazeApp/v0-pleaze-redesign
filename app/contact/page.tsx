"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MessageCircle, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Simple version for inner pages */}
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
            </nav>

            <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Contact</h1>
            <div className="space-y-4">
              <p className="text-2xl lg:text-3xl text-white/90 font-medium">Don't Hesitate, Get in Touch!</p>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Whether it's a question, a concern, a technical issue, or you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Get in Touch</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">We want to hear from you!</p>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 lg:p-12">
                <form className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-base font-medium text-[#17335F]">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-base font-medium text-[#17335F]">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-medium text-[#17335F]">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base font-medium text-[#17335F]">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="h-12 border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-base font-medium text-[#17335F]">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="h-12 border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-medium text-[#17335F]">
                      Leave us a message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="border-2 border-gray-200 focus:border-[#67D8AF] focus:ring-[#67D8AF] rounded-xl text-base resize-none"
                      placeholder="Tell us more about how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[56px] text-lg font-medium"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5 rounded-2xl p-8">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Need immediate support?</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you're experiencing a mental health crisis, please reach out to your local emergency services or a
                  crisis helpline immediately. We're here to support you, but professional help should always be your
                  first priority in urgent situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#17335F]">Other Ways to Reach Us</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Email */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#67D8AF]/5">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#17335F]">Email</h3>
                    <a
                      href="mailto:info@pleazeapp.com"
                      className="text-lg text-gray-700 hover:text-[#67D8AF] transition-colors block"
                    >
                      info@pleazeapp.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#788ED4]/5">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#17335F]">Phone</h3>
                    <a
                      href="tel:+353874456877"
                      className="text-lg text-gray-700 hover:text-[#788ED4] transition-colors block"
                    >
                      +353 87 445 6877
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] rounded-3xl p-16 text-white overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Get Started?</h3>
              <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                Download Pleaze now and take the first step towards better mental health and addiction support
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
      </section>

      {/* Footer */}
      <footer className="bg-[#17335F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/pleaze-logo-new.png"
                  alt="Pleaze Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Pleaze</span>
              </div>
              <p className="text-white/80">The go-to app for Mental Health and Addiction support.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <div className="space-y-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
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
                  className="block relative group"
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

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {currentYear} Pleaze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
