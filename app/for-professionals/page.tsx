import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Shield,
  BarChart3,
  Clock,
  Heart,
  CheckCircle,
  Star,
  Building2,
  Award,
  TrendingUp,
  Phone,
} from "lucide-react"

export default function ForProfessionalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/pleaze-logo-new.png"
                alt="Pleaze Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-[#17335F]">Pleaze</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#17335F] transition-colors">
                  <span>Features</span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      All Features
                    </Link>
                    <Link href="/features/help-buttons" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Help Buttons
                    </Link>
                    <Link
                      href="/features/training-resources"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Training Resources
                    </Link>
                    <Link href="/features/news-feed" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      News Feed
                    </Link>
                    <Link href="/features/personal-hub" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Personal Hub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#17335F] transition-colors">
                  <span>For You</span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/for-individuals" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Individuals
                    </Link>
                    <Link href="/for-loved-ones" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Loved Ones
                    </Link>
                    <Link href="/for-professionals" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Professionals
                    </Link>
                    <Link href="/for-institutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      For Institutions
                    </Link>
                    <Link href="/resource-hub" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Resource Hub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#17335F] transition-colors">
                  <span>Community</span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/share-your-story" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Share Your Story
                    </Link>
                    <Link href="/write-for-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Write for Us
                    </Link>
                    <Link href="/newsletter" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Newsletter
                    </Link>
                    <Link href="/ask-jimmy" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                      Ask Jimmy
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-[#17335F] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#17335F] transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/download"
              className="bg-[#17335F] text-white px-6 py-2 rounded-full hover:bg-[#17335F]/90 transition-colors"
            >
              Download App
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Partner With Pleaze to Support, Engage, and Empower Those You Serve
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Extend your therapeutic care beyond sessions with evidence-based tools, real-time insights, and continuous
              support for your clients' mental health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Professional Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17335F] mb-6">The Professional Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mental health professionals face unique challenges in providing continuous care and support between
              sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Limited Session Time</h3>
              <p className="text-gray-600">
                Weekly or bi-weekly sessions leave gaps where clients struggle without professional guidance and
                support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Relapse Risk</h3>
              <p className="text-gray-600">
                Without continuous support, clients are at higher risk of relapse, especially during vulnerable moments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Limited Reach</h3>
              <p className="text-gray-600">
                Traditional therapy models limit the number of people you can effectively support and monitor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Pleaze Supports Professionals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17335F] mb-6">How Pleaze Supports Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your therapeutic impact with tools designed to complement and enhance your professional practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#67D8AF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-[#67D8AF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Real-Time Insights</h3>
              <p className="text-gray-600">
                Monitor client progress, mood patterns, and engagement levels between sessions with detailed analytics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#788ED4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#788ED4]" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Crisis Prevention</h3>
              <p className="text-gray-600">
                Immediate help buttons and crisis resources provide clients with instant support when you're not
                available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#17335F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#17335F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Continuous Care</h3>
              <p className="text-gray-600">
                Evidence-based resources and tools keep clients engaged in their recovery journey 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#17335F] mb-4">Treatment Compliance</h3>
              <p className="text-gray-600">
                Improve treatment adherence with personalized reminders, progress tracking, and goal setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Institutions and Organizations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#17335F] mb-6">For Institutions and Organizations</h2>
              <p className="text-xl text-gray-600 mb-8">
                Scale your mental health services with enterprise-grade tools designed for healthcare institutions,
                universities, and organizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#17335F] mb-2">85%</div>
                  <div className="text-gray-600">Reduction in crisis interventions</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#17335F] mb-2">3x</div>
                  <div className="text-gray-600">Increase in treatment engagement</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#17335F] mb-2">60%</div>
                  <div className="text-gray-600">Improvement in outcomes</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-[#17335F] mb-2">24/7</div>
                  <div className="text-gray-600">Continuous support coverage</div>
                </div>
              </div>

              <Link
                href="/for-institutions"
                className="bg-[#17335F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#17335F]/90 transition-colors inline-flex items-center"
              >
                Learn More About Enterprise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Building2 className="w-8 h-8 text-[#17335F] mb-4" />
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Healthcare Systems</h3>
                <p className="text-gray-600">
                  Integrate with existing EHR systems and provide seamless care coordination across departments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-[#17335F] mb-4" />
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Educational Institutions</h3>
                <p className="text-gray-600">
                  Support student mental health with campus-wide resources and counseling service integration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-[#17335F] mb-4" />
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Corporate Wellness</h3>
                <p className="text-gray-600">
                  Enhance employee assistance programs with comprehensive mental health support tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Choose Pleaze */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17335F] mb-6">Why Professionals Choose Pleaze</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by mental health professionals and institutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Pleaze has transformed how I support my clients between sessions. The real-time insights help me
                provide more targeted interventions."
              </p>
              <div className="font-semibold text-[#17335F]">Dr. Sarah Mitchell</div>
              <div className="text-gray-500">Licensed Clinical Psychologist</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The crisis prevention features have been invaluable. My clients feel supported even when I'm not
                available, which has significantly improved outcomes."
              </p>
              <div className="font-semibold text-[#17335F]">Michael Rodriguez, LCSW</div>
              <div className="text-gray-500">Addiction Counselor</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a program director, Pleaze has helped us scale our services and provide better care to more people.
                The analytics are incredibly helpful."
              </p>
              <div className="font-semibold text-[#17335F]">Dr. Jennifer Chen</div>
              <div className="text-gray-500">Program Director, Mental Health Center</div>
            </div>
          </div>

          {/* Professional Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600">HIPAA</div>
              <div className="text-sm text-gray-500">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600">Evidence</div>
              <div className="text-sm text-gray-500">Based</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600">Clinical</div>
              <div className="text-sm text-gray-500">Validated</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600">Secure</div>
              <div className="text-sm text-gray-500">Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of mental health professionals who are already using Pleaze to provide better, more
            comprehensive care to their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Demo
            </Link>
            <Link
              href="/for-institutions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
            >
              Enterprise Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17335F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/assets/pleaze-logo-new.png"
                  alt="Pleaze Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Pleaze</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                The go-to app for Mental Health and Addiction support. Get the support you deserve with Pleaze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/assets/mobile-play-store-badge.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ width: "140px", height: "42px", objectFit: "fill" }}
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
                    width={140}
                    height={42}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ width: "140px", height: "42px", objectFit: "fill" }}
                  />
                </Link>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    All Features
                  </Link>
                </li>
                <li>
                  <Link href="/features/help-buttons" className="hover:text-white transition-colors">
                    Help Buttons
                  </Link>
                </li>
                <li>
                  <Link href="/features/training-resources" className="hover:text-white transition-colors">
                    Training Resources
                  </Link>
                </li>
                <li>
                  <Link href="/features/news-feed" className="hover:text-white transition-colors">
                    News Feed
                  </Link>
                </li>
                <li>
                  <Link href="/features/personal-hub" className="hover:text-white transition-colors">
                    Personal Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* For You */}
            <div>
              <h4 className="font-semibold mb-4">For You</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/for-individuals" className="hover:text-white transition-colors">
                    For Individuals
                  </Link>
                </li>
                <li>
                  <Link href="/for-loved-ones" className="hover:text-white transition-colors">
                    For Loved Ones
                  </Link>
                </li>
                <li>
                  <Link href="/for-professionals" className="hover:text-white transition-colors">
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/for-institutions" className="hover:text-white transition-colors">
                    For Institutions
                  </Link>
                </li>
                <li>
                  <Link href="/resource-hub" className="hover:text-white transition-colors">
                    Resource Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community & Support */}
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/share-your-story" className="hover:text-white transition-colors">
                    Share Your Story
                  </Link>
                </li>
                <li>
                  <Link href="/write-for-us" className="hover:text-white transition-colors">
                    Write for Us
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/ask-jimmy" className="hover:text-white transition-colors">
                    Ask Jimmy
                  </Link>
                </li>
              </ul>

              <h4 className="font-semibold mb-4 mt-6">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 text-white/80 text-sm mb-4 md:mb-0">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/disclaimers" className="hover:text-white transition-colors">
                  Disclaimers
                </Link>
                <Link href="/sources" className="hover:text-white transition-colors">
                  Sources
                </Link>
              </div>
              <p className="text-white/60 text-sm">© {new Date().getFullYear()} Pleaze. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
