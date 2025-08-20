import Link from "next/link"
import Footer from "@/components/footer"

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/assets/pleaze-logo-new.png" alt="Pleaze Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-[#17335F]">Pleaze</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-[#17335F] transition-colors">
                Features
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#17335F] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#17335F] transition-colors">
                Contact
              </Link>
              <Link
                href="/download"
                className="bg-[#17335F] text-white px-4 py-2 rounded-lg hover:bg-[#17335F]/90 transition-colors"
              >
                Download App
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How to Delete Your Account</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Follow these simple steps to permanently delete your Pleaze account
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17335F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-2">Log into the app</h3>
                <p className="text-gray-700">
                  Open the Pleaze mobile application on your device and sign in with your credentials.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17335F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-2">Navigate to your hub</h3>
                <p className="text-gray-700">
                  Go to your personal hub section within the app where you can access your profile and settings.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17335F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-2">Click on your profile</h3>
                <p className="text-gray-700">
                  Access your profile settings by tapping on your profile section in the hub.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17335F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-2">Click on delete</h3>
                <p className="text-gray-700">
                  Look for the delete account option in your profile settings and tap on it.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17335F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-2">Confirm your intention to delete</h3>
                <p className="text-gray-700">
                  Follow the confirmation prompts to permanently delete your account. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4">⚠️ Important Information</h2>
            <div className="text-red-700 space-y-3">
              <p>
                <strong>Deleting your account will permanently remove:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All user information related to your profile</li>
                <li>Account details and login credentials</li>
                <li>Pleaze card details and progress</li>
                <li>Badges and achievements related to your account</li>
              </ul>
              <p className="mt-4">
                <strong>Please note:</strong> Messages sent into groups will remain visible for other users but will
                appear as being sent from a "deleted user."
              </p>
              <p className="font-semibold">This action is permanent and cannot be reversed.</p>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-6">
              If you're having trouble deleting your account or have questions about the process, our support team is
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#17335F] text-white px-6 py-3 rounded-lg hover:bg-[#17335F]/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/privacy-policy"
                className="border border-[#17335F] text-[#17335F] px-6 py-3 rounded-lg hover:bg-[#17335F]/10 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
