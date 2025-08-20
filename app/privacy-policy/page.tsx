export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Welcome to Pleaze!</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pleaze is owned and operated by <strong>Pleaze App Ltd</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pleaze values your privacy and the protection of your personal data. This privacy policy describes what
              information we collect from you, how we collect it, how we use it, how we obtain your consent, how long we
              keep it in our databases and, if necessary, with whom we share it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using the platform, you are accepting the practices described in this privacy policy. Your use of the
              platform is also subject to our terms of service. In this privacy policy, the words "platform" refers to
              the Pleaze mobile application and the Pleaze website together, unless referred to individually in the
              document, "we", "us", "our", and "Pleaze", refers to Pleaze App Ltd, and "you", and "user" refers to you,
              the user of Pleaze.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This privacy policy may change from time to time. Your continued use of the platform after we make changes
              to this privacy policy will be deemed acceptance of those changes, so please check this policy
              periodically for updates. This privacy policy has been developed and is maintained in accordance with all
              applicable national and international laws and regulations, in particular, the GDPR (General Data
              Protection Regulation – European Regulation).
            </p>
          </div>

          {/* General Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">General Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The personal data of users that are collected and processed through:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Pleaze mobile application (Available on Google Play and App Store)</li>
              <li>
                <a href="https://pleazeapp.com" className="text-[#788ED4] hover:underline">
                  https://pleazeapp.com
                </a>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">Will be under the responsibility and in charge of:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-[#17335F]">Pleaze App Ltd.</p>
              <p className="text-gray-700">James Lewis</p>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:james@pleazeapp.com" className="text-[#788ED4] hover:underline">
                  james@pleazeapp.com
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <a href="tel:+353833499458" className="text-[#788ED4] hover:underline">
                  +353 83 349 9458
                </a>
              </p>
            </div>
          </div>

          {/* How We Obtain Your Consent */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">How We Obtain Your Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              When you register as a user, accept an invitation to join a group on the platform, use the features
              available on the platform, including chat functionalities, subscribe to our newsletter, contact us via our
              contact details and contact form and provide us with personal information to communicate with you, you
              consent to our collection, storage and use of your information under the terms set out in this privacy
              policy.
            </p>
          </div>

          {/* Types of Information Collected */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Types of Information Collected</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The information we collect from our users helps us to continually improve the user experience on the
              platform. These are the types of information we collect:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Information You Provide to Us</h3>
                <p className="text-gray-700 mb-4">
                  You provide information when you register as a user, accept an invitation to join a group on the
                  platform, use the features available on the platform, including chat functionalities, subscribe to our
                  newsletter, contact us via our contact details and contact form and provide us with personal
                  information to communicate with you. As a result of those actions, you may provide us with the
                  following information:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>First and last name</li>
                  <li>Email</li>
                  <li>Phone</li>
                  <li>
                    Any additional information relating to you that you provide to us directly or indirectly through
                    your use of the platform
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Information Collected Automatically</h3>
                <p className="text-gray-700">
                  Pleaze automatically collects certain types of information during users' use of the application. This
                  collection includes technical data such as device type, operating system, device settings, application
                  usage and interaction preferences. This information is essential to improve the functionality and
                  performance of the application, as well as to customise the user experience and ensure system
                  compatibility. All data collected is handled in accordance with our privacy policy, ensuring its
                  protection and confidentiality.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">User Registration</h3>
                <p className="text-gray-700">
                  To register on our platform, users have the option of using their existing Facebook, Apple or Google
                  accounts, which facilitates a faster and more secure login process. Alternatively, users can choose to
                  register by providing a valid email address. By choosing to use any of these options for registration,
                  you agree that we may collect and process the information necessary to create and administer your user
                  account. This information includes, but is not limited to, user name, email address and any public
                  data associated with Facebook, Apple or Google accounts, as applicable.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">User Content</h3>
                <p className="text-gray-700">
                  Pleaze collects, processes and stores user content, which includes data and information entered on our
                  platform, solely for the provision and improvement of our services and the functionalities available
                  on the platform. We are committed to maintaining the confidentiality and security of this content, and
                  will not share it with third parties unless required by law or for the operation of the platform.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Contact Access</h3>
                <p className="text-gray-700">
                  To facilitate the creation and expansion of your support network within Pleaze, our platform may
                  require access to your device's contact list. This access is for the sole and exclusive purpose of
                  allowing you to send invitations to your contacts to join support groups on our platform. Before
                  accessing your contacts, Pleaze will explicitly ask for your permission. We respect your privacy and
                  ensure that this access will be strictly limited to the function of sending invitations, without using
                  your contact list for any other purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Analytics and Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Analytics and Third-Party Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Google Analytics (Website)</h3>
                <p className="text-gray-700 mb-4">
                  We use Google Analytics provided by Google, Inc., USA ("Google"). These tool and technologies collect
                  and analyse certain types of information, including IP addresses, device and software identifiers,
                  referring and exit URLs, feature use metrics and statistics, usage history, media access control
                  address (MAC Address), mobile unique device identifiers, and other similar information via the use of
                  cookies.
                </p>
                <p className="text-gray-700 mb-2">Please consult Google's privacy policy here:</p>
                <a href="https://policies.google.com/privacy" className="text-[#788ED4] hover:underline">
                  https://policies.google.com/privacy
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Firebase (Mobile App)</h3>
                <p className="text-gray-700 mb-4">
                  We use Firebase Crashlytics and Firebase Analytics provided by Google, Inc. of the United States
                  ("Google") and certain functionalities such as Firebase Crashlytics, Firebase Analytics, Google
                  Analytics, Cloud Firestore, Firebase Performance Monitoring, Firebase Dynamic Links, Firebase
                  Authentication, etc.
                </p>
                <p className="text-gray-700 mb-2">Please refer to Firebase's privacy policy:</p>
                <a href="https://firebase.google.com/support/privacy" className="text-[#788ED4] hover:underline">
                  https://firebase.google.com/support/privacy
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#17335F] mb-3">Social Media</h3>
                <p className="text-gray-700 mb-4">
                  On our website, we provide you with a variety of links and tools that allow you to interact with
                  various social networks. You are welcome to use these functions to share your information as you wish.
                  However, we strongly recommend that you review the privacy and data protection policies of each of the
                  social networks you use through our website.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a href="https://www.facebook.com/privacy/explanation" className="text-[#788ED4] hover:underline">
                    Facebook Privacy Policy
                  </a>
                  <a href="http://instagram.com/about/legal/privacy/" className="text-[#788ED4] hover:underline">
                    Instagram Privacy Policy
                  </a>
                  <a href="https://twitter.com/privacy" className="text-[#788ED4] hover:underline">
                    X (Twitter) Privacy Policy
                  </a>
                  <a href="https://policies.google.com/privacy" className="text-[#788ED4] hover:underline">
                    YouTube Privacy Policy
                  </a>
                  <a href="https://www.linkedin.com/legal/privacy-policy" className="text-[#788ED4] hover:underline">
                    LinkedIn Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">How Long We Keep Your Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data provided by users through the platform will be retained for the time necessary to provide
              the functionalities available on the platform, to fulfil the legitimate purposes described in this policy
              or until the user closes the user account, unsubscribes from our newsletter or requests deletion of their
              data. Pleaze may retain personal data for a longer period provided that the user has consented to such
              processing, as long as such consent is not withdrawn. In addition, Pleaze may be obliged to retain
              personal data for a longer period provided that this is required for compliance with a legal obligation or
              by order of an authority.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">
              How We Use Your Information (Legitimate Purposes)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In general, we use the data we collect primarily to provide, maintain, protect and improve our platform
              and to properly deliver the functionalities available on the platform. We use the data collected through
              our platform as described below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>User registration</li>
                <li>Provide the mobile application</li>
                <li>Provide platform functionalities</li>
                <li>Facilitate group creation</li>
                <li>Provide help buttons</li>
                <li>Provide platform resources</li>
                <li>Provide forms and badges</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide news feed</li>
                <li>Provide chat and messaging system</li>
                <li>Send relevant notifications</li>
                <li>Improve user experience</li>
                <li>Respond to comments or questions</li>
                <li>Send confirmations and updates</li>
                <li>Marketing purposes</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users who provide information through our platform, as data subjects, have the right to access, rectify,
              download or delete their information, as well as to restrict and oppose certain processing of their
              information. These rights are described below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#17335F] mb-2">Access and Portability</h3>
                <p className="text-gray-700 text-sm">
                  To access and know what information is stored on our servers, you can send us your request through our
                  contact information.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#17335F] mb-2">Rectification and Deletion</h3>
                <p className="text-gray-700 text-sm">
                  You may rectify, restrict, limit or delete much of your information.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#17335F] mb-2">Right to be Informed</h3>
                <p className="text-gray-700 text-sm">
                  Users will be informed about what data we collect, how it is used, and how long it is kept.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#17335F] mb-2">Withdraw Consent</h3>
                <p className="text-gray-700 text-sm">
                  You have the right to withdraw your consent to processing and storage at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Protection of Children's Online Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              We comply with the requirements of national and international data protection regulations regarding the
              protection of personal data of minors. We do not collect any information from children under the age of
              13. If we become aware that a child under the age of 13 has provided us with personal information, we will
              take immediate steps to delete that information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#17335F] mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions or concerns about this privacy policy and the treatment and security of your data,
              please contact us through our contact forms or by using the following contact information:
            </p>
            <div className="bg-gradient-to-r from-[#17335F] to-[#788ED4] text-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Pleaze App Ltd.</h3>
              <p className="mb-1">James Lewis</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:james@pleazeapp.com" className="underline hover:no-underline">
                  james@pleazeapp.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+353833499458" className="underline hover:no-underline">
                  +353 83 349 9458
                </a>
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm border-t pt-8">
            <p>This privacy policy is effective as of the date of publication and may be updated from time to time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
