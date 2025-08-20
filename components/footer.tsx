import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#17335F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
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
            <div className="flex flex-col gap-3">
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

          {/* Features & Pages */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Features</h4>
            <ul className="space-y-3 text-white/80">
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

            <h4 className="font-semibold mb-4 mt-8 text-lg">For You</h4>
            <ul className="space-y-3 text-white/80">
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
            </ul>
          </div>

          {/* Community & Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Community</h4>
            <ul className="space-y-3 text-white/80">
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
              <li>
                <Link href="/resource-hub" className="hover:text-white transition-colors">
                  Resource Hub
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8 text-lg">Company</h4>
            <ul className="space-y-3 text-white/80">
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

          {/* Legal & Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal & Support</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimers" className="hover:text-white transition-colors">
                  Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-white transition-colors">
                  Sources
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-white transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center">
            <p className="text-white/60 text-sm">© {currentYear} Pleaze App Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
