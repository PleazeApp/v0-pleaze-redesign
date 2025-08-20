"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Users, Phone, ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/footer"

export default function ResourceHubPage() {
  const currentYear = new Date().getFullYear()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

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
              <Link href="/contact" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Contact
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
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">Resource Hub</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Mental Health & Addiction Resource Center
            </h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Comprehensive support, guidance, and tools for your journey to wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                className="bg-white text-[#17335F] hover:bg-white/90 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
              >
                <Link href="#crisis-resources">
                  Crisis Resources <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#17335F] px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium bg-transparent"
              >
                <Link href="#support-organizations">Find Support Organizations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section id="crisis-resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Crisis Resources</h2>
              </div>
              <p className="text-2xl text-[#788ED4] font-medium">Immediate help when you need it most</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Suicide Prevention */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Suicide Prevention</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-red-200">
                      <p className="font-semibold text-[#17335F] mb-2">Samaritans Ireland</p>
                      <p className="text-2xl font-bold text-[#FF245F] mb-2">116 123</p>
                      <p className="text-sm text-gray-600">Free 24/7 support</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-red-200">
                      <p className="font-semibold text-[#17335F] mb-2">Crisis Text Line</p>
                      <p className="text-xl font-bold text-[#FF245F] mb-2">Text "HELLO" to 50808</p>
                      <p className="text-sm text-gray-600">24/7 text support</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#FF245F] hover:bg-[#17335F] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full"
                  >
                    <Link href="https://www.samaritans.org/ireland/" target="_blank" rel="noopener noreferrer">
                      Visit Samaritans <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mental Health Support */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#788ED4] rounded-2xl flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Mental Health Support</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-semibold text-[#17335F] mb-2">Mental Health Ireland</p>
                      <p className="text-2xl font-bold text-[#788ED4] mb-2">01 284 1166</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9am-5pm</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-semibold text-[#17335F] mb-2">Aware Support Line</p>
                      <p className="text-xl font-bold text-[#788ED4] mb-2">1800 80 48 48</p>
                      <p className="text-sm text-gray-600">Mon-Sun 10am-10pm</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#788ED4] hover:bg-[#17335F] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full"
                  >
                    <Link href="https://www.mentalhealthireland.ie/" target="_blank" rel="noopener noreferrer">
                      Visit Mental Health Ireland <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Addiction Support */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#67D8AF] rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Addiction Support</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <p className="font-semibold text-[#17335F] mb-2">HSE Drugs & Alcohol Helpline</p>
                      <p className="text-2xl font-bold text-[#67D8AF] mb-2">1800 459 459</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9:30am-5:30pm</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-200">
                      <p className="font-semibold text-[#17335F] mb-2">Alcoholics Anonymous</p>
                      <p className="text-xl font-bold text-[#67D8AF] mb-2">01 842 0700</p>
                      <p className="text-sm text-gray-600">24/7 support</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full"
                  >
                    <Link
                      href="https://www.hse.ie/eng/services/list/5/addiction/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit HSE Addiction Services <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Organizations Section */}
      <section id="support-organizations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Support Organizations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with trusted organizations that provide ongoing support, resources, and community for mental
                health and addiction recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Mental Health Organizations */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[#17335F] text-center">Mental Health Organizations</h3>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#788ED4] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">Pieta House</h4>
                        <p className="text-gray-600 mb-3">
                          Suicide prevention and self-harm support services across Ireland.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#788ED4] hover:bg-[#17335F] text-white">
                            <Link href="https://www.pieta.ie/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <span className="text-sm text-gray-500 flex items-center">Call: 1800 247 247</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#788ED4] rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">Jigsaw</h4>
                        <p className="text-gray-600 mb-3">Mental health support for young people aged 12-25.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#788ED4] hover:bg-[#17335F] text-white">
                            <Link href="https://jigsaw.ie/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#788ED4] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">SpunOut.ie</h4>
                        <p className="text-gray-600 mb-3">
                          Youth information website covering mental health, relationships, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#788ED4] hover:bg-[#17335F] text-white">
                            <Link href="https://spunout.ie/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addiction Support Organizations */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[#17335F] text-center">Addiction Support Organizations</h3>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">Narcotics Anonymous Ireland</h4>
                        <p className="text-gray-600 mb-3">
                          Fellowship of men and women for whom drugs had become a major problem.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#67D8AF] hover:bg-[#17335F] text-white">
                            <Link href="https://www.na-ireland.org/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">Al-Anon Ireland</h4>
                        <p className="text-gray-600 mb-3">
                          Support for families and friends of people with drinking problems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#67D8AF] hover:bg-[#17335F] text-white">
                            <Link href="https://www.al-anon-ireland.org/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <span className="text-sm text-gray-500 flex items-center">Call: 01 873 2699</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#17335F] mb-2">Coolmine Therapeutic Community</h4>
                        <p className="text-gray-600 mb-3">
                          Residential and community-based addiction treatment services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild size="sm" className="bg-[#67D8AF] hover:bg-[#17335F] text-white">
                            <Link href="https://www.coolmine.ie/" target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <span className="text-sm text-gray-500 flex items-center">Call: 01 281 1881</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Educational Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about mental health and addiction through trusted educational materials and research.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Understanding Mental Health</h3>
                  <p className="text-gray-600">
                    Comprehensive guides on various mental health conditions, symptoms, and treatment options.
                  </p>
                  <Button
                    asChild
                    className="bg-[#D28FF2] hover:bg-[#17335F] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link
                      href="https://www.hse.ie/eng/services/list/4/mental-health-services/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#FFF6A6] rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Addiction Education</h3>
                  <p className="text-gray-600">
                    Evidence-based information about addiction, recovery processes, and support strategies.
                  </p>
                  <Button
                    asChild
                    className="bg-[#FFF6A6] hover:bg-[#17335F] text-black hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="https://www.drugs.ie/" target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-cyan-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-[#61EDEA] rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Self-Care & Wellness</h3>
                  <p className="text-gray-600">
                    Practical tools and techniques for maintaining mental wellness and supporting recovery.
                  </p>
                  <Button
                    asChild
                    className="bg-[#61EDEA] hover:bg-[#17335F] text-black hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="https://www.yourmentalhealth.ie/" target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Frequently Asked Questions</h3>
              <p className="text-xl text-gray-600">
                Common questions about accessing mental health and addiction resources
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">How do I know if I need professional help?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 0 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you're experiencing persistent feelings of sadness, anxiety, or hopelessness, having thoughts
                      of self-harm, struggling with substance use, or finding it difficult to cope with daily
                      activities, it may be time to seek professional help. Trust your instincts - if you feel something
                      isn't right, reaching out for support is always a positive step.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">Are these services free?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many of the crisis support services listed are free, including helplines and text services. Some
                      organizations offer free counseling sessions, while others may have fees based on your ability to
                      pay. HSE mental health services are free for Irish residents. Contact the organizations directly
                      to learn about their specific fee structures and available support options.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">What if I'm not ready to talk to someone?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 2 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      That's completely normal and okay. You can start by exploring online resources, reading
                      educational materials, or using text-based support services like the Crisis Text Line. Many
                      organizations also offer online chat services or email support. Take your time and move at your
                      own pace - the important thing is that you're taking steps toward getting support.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(3)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">How can I support someone else?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Listen without judgment, offer your presence and support, and encourage them to seek professional
                      help when appropriate. Learn about the resources available and share them when the person is
                      ready. Take care of your own mental health too - supporting someone can be emotionally demanding.
                      Consider reaching out to organizations like Al-Anon if you're supporting someone with addiction
                      issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5 rounded-2xl p-8">
                <p className="text-xl text-gray-700 mb-6 leading-tight">
                  Need more information or have specific questions?
                </p>
                <Button
                  asChild
                  className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] rounded-3xl p-16 text-white overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Get Support in Your Pocket</h3>
              <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                Download Pleaze to access help buttons, training resources, and a supportive community whenever you need
                it most.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
