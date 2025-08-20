export default function DisclaimersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Disclaimers</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Important Information About Our Resources
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-[#17335F]">
            <p className="text-lg leading-relaxed text-gray-700">
              Thank you for choosing Pleaze, a mobile app that provides resources and support for mental health and
              addiction issues. It is essential to understand the context and nature of our resources before engaging
              with them.
            </p>
          </div>
        </section>

        {/* Authorship and Background */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold text-[#17335F] mb-6">Authorship and Background</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The resources provided within the Pleaze app were authored by James Lewis, our Founder and CEO, who has a
              personal connection to mental health and addiction. James Lewis has firsthand experience with these
              challenges and has utilised his journey towards healing to provide insights and guidance to others who may
              be going through similar struggles.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Additionally, James Lewis has built an extensive network of individuals who have also faced these issues,
              and their collective experiences have contributed to creating these resources.
            </p>
          </div>
        </section>

        {/* Non-Medical Professionals */}
        <section className="mb-12">
          <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Non-Medical Professionals</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>
                It is crucial to note that while the information and resources within Pleaze are rooted in personal
                experiences and shared stories, we are not medical professionals.
              </strong>{" "}
              The content we provide is not intended to serve as a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We strongly encourage all users to consult with qualified healthcare professionals, therapists, or
              counsellors before making any decisions related to their mental health or addiction concerns.
            </p>
          </div>
        </section>

        {/* Varied Perspectives */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold text-[#17335F] mb-6">Varied Perspectives</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The resources available on Pleaze encompass various perspectives and personal stories. It is essential to
              understand that what works for one individual might not work for another, as each person's journey is
              unique.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We believe in the power of shared experiences but acknowledge that everyone's situation differs.
              Therefore, we encourage users to approach these resources with an open mind, seeking what resonates with
              them while recognising the need for personalised guidance from qualified professionals.
            </p>
          </div>
        </section>

        {/* Community and Support */}
        <section className="mb-12">
          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-[#67D8AF]">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Community and Support</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pleaze is designed to foster a sense of community and support for individuals facing mental health and
              addiction challenges. Our platform aims to provide a safe space for sharing, learning, and connecting.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              While our resources can offer insights and coping strategies, they are not a substitute for therapeutic
              interventions. We recommend combining the information found in our app with the guidance of licensed
              medical and mental health practitioners.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              In summary, the resources within Pleaze have been developed from personal experiences and the shared
              journeys of those who have faced mental health and addiction issues. However, we emphasise that our app
              differs from medical professionals' expertise.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-12">
          <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">Important Notice</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>
                Please use our resources as a supplement to, not a replacement for, professional medical advice and
                treatment.
              </strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>
                If you are in crisis or require immediate assistance, please contact a qualified mental health or
                medical professional or emergency services.
              </strong>
            </p>
          </div>
        </section>

        {/* Questions and Contact Information */}
        <section className="mb-12">
          <div className="bg-[#17335F] text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Questions and Contact Information</h2>
            <p className="text-lg leading-relaxed mb-4 opacity-90">
              We understand that you may have questions or concerns regarding the information provided within the Pleaze
              app or need clarification about our disclaimer. If you have any queries or want further information about
              the resources, their origin, or how to use them best, please do not hesitate to contact us.
            </p>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Our dedicated support team is here to assist you. You can reach out to us through the "Contact Us" section
              of the app, and we will make every effort to respond promptly and provide the assistance you need.
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:james@pleazeapp.com" className="text-[#67D8AF] hover:underline">
                    james@pleazeapp.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <a href="tel:+353833499458" className="text-[#67D8AF] hover:underline">
                    +353 83 349 9458
                  </a>
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6 opacity-90">
              <strong>
                Your journey towards better mental health and recovery is our priority, and we are here to provide
                guidance and support every step of the way.
              </strong>
            </p>
          </div>
        </section>

        {/* Emergency Resources */}
        <section className="mb-12">
          <div className="bg-red-100 p-8 rounded-lg border-2 border-red-300">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Emergency Resources</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              If you are experiencing a mental health crisis or having thoughts of self-harm, please seek immediate
              help:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">Ireland</h3>
                <p className="text-gray-700">
                  Emergency Services: <strong>999 or 112</strong>
                </p>
                <p className="text-gray-700">
                  Samaritans: <strong>116 123</strong>
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">International</h3>
                <p className="text-gray-700">Contact your local emergency services</p>
                <p className="text-gray-700">or mental health crisis line</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
