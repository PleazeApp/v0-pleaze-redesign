import Link from "next/link"

export default function SourcesPage() {
  return (
    <>
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
            )
          )
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sources & References</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Credible sources and research that inform our mental health and addiction support resources
          </p>
          )
      </section>

      {/* Sources Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Suicide Section */}
          <div className="mb-16">
            <div className="bg-[#17335F] text-white p-8 rounded-t-2xl">
              <h2 className="text-3xl font-bold mb-4">Suicide</h2>
              <p className="text-white/90">
                Comprehensive resources and research on suicide prevention, understanding, and support
              </p>
              )

            {/* Understanding Suicide */}
            <div className="bg-blue-50 p-6 border-l-4 border-[#17335F]">
              <h3 className="text-xl font-semibold mb-4 text-[#17335F]">Understanding Suicide</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.who.int/teams/mental-health-and-substance-use/data-research/suicide-data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    WHO - Mental Health and Substance Use: Suicide Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.embraceu.com/2023/09/14/passive-suicidal-ideation-vs-active/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Embrace U - Passive Suicidal Ideation vs Active
                  </a>
                </li>
                <li>
                  <a
                    href="https://apibhs.com/2022/09/22/stop-saying-suicide-is-selfish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    APIBHS - Stop Saying Suicide is Selfish
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.goodreads.com/author/quotes/4339.David_Foster_Wallace#:~:text=And%20surely%20not%20because%20death,who%20leap%20from%20burning%20windows."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    David Foster Wallace Quotes - Goodreads
                  </a>
                </li>
              </ul>
              )

            {/* Warning Signs and Risk Factors */}
            <div className="bg-blue-50 p-6 border-l-4 border-[#17335F] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#17335F]">Warning Signs and Risk Factors</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.merseycare.nhs.uk/health-and-wellbeing/suicide-prevention/worried-about-someone/warning-signs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Mersey Care NHS - Warning Signs
                  </a>
                </li>
                <li>
                  <a
                    href="https://prevention.dasa.ncsu.edu/suicide-prevention/warning-signs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    NC State University - Suicide Prevention Warning Signs
                  </a>
                </li>
                <li>
                  <a
                    href="https://afsp.org/risk-factors-protective-factors-and-warning-signs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    American Foundation for Suicide Prevention - Risk Factors and Warning Signs
                  </a>
                </li>
              </ul>
              )

            {/* Suicide Prevention */}
            <div className="bg-blue-50 p-6 border-l-4 border-[#17335F] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#17335F]">Suicide Prevention</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://sprc.org/effective-prevention/comprehensive-approach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Suicide Prevention Resource Center - Comprehensive Approach
                  </a>
                </li>
                <li>
                  <a
                    href="https://relevancerecovery.com/blog/the-significance-of-suicide-prevention-awareness-saving-lives/#:~:text=Suicide%20Crisis%20Response%3A%20Connection%2C%20Collaboration,feel%20understood%20and%20not%20isolated."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Relevance Recovery - The Significance of Suicide Prevention Awareness
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.chkd.org/patient-family-resources/our-blog/prevent-suicide-with-these-5-steps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    CHKD - Prevent Suicide with These 5 Steps
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.psychiatry.org/patients-families/suicide-prevention#:~:text=The%20CDC%20recommends%20a%20comprehensive,temporary%20assistance%20for%20those%20in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    American Psychiatric Association - Suicide Prevention
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide#:~:text=BE%20THERE%3A%20Listening%20without%20judgment,places%20can%20help%20prevent%20suicide."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    NIMH - 5 Action Steps to Help Someone Having Thoughts of Suicide
                  </a>
                </li>
              </ul>
              )

            {/* Questions and Misconceptions */}
            <div className="bg-blue-50 p-6 border-l-4 border-[#17335F] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#17335F]">Questions and Misconceptions</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.samaritans.org/ireland/how-we-can-help/if-youre-worried-about-someone-else/myths-about-suicide/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Samaritans Ireland - Myths About Suicide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/8-common-myths-about-suicide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Mayo Clinic Health System - 8 Common Myths About Suicide
                  </a>
                </li>
                <li>
                  <a
                    href="https://toolkit.lifeline.org.au/topics/suicide/suicide-stigmas-myths-and-misconceptions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Lifeline Australia - Suicide Stigmas, Myths and Misconceptions
                  </a>
                </li>
                <li>
                  <a
                    href="https://suicideprevention.nv.gov/Youth/Myths/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Nevada Suicide Prevention - Youth Myths
                  </a>
                </li>
                <li>
                  <a
                    href="https://spunout.ie/mental-health/help-a-friend/myths-about-suicide/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    SpunOut.ie - Myths About Suicide
                  </a>
                </li>
              </ul>
              )
            )

          {/* Addiction Section */}
          <div className="mb-16">
            <div className="bg-[#67D8AF] text-white p-8 rounded-t-2xl">
              <h2 className="text-3xl font-bold mb-4">Addiction</h2>
              <p className="text-white/90">
                Evidence-based resources on addiction understanding, prevention, and recovery support
              </p>
              )

            {/* Understanding Addiction */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF]">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Understanding Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://nida.nih.gov/publications/drugfacts/understanding-drug-use-addiction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    NIDA - Understanding Drug Use and Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.helpguide.org/mental-health/addiction/how-addiction-hijacks-the-brain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    HelpGuide - How Addiction Hijacks the Brain
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mcleanhospital.org/essential/addiction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    McLean Hospital - Essential Guide to Addiction
                  </a>
                </li>
              </ul>
              )

            {/* Warning Signs of Addiction */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Warning Signs of Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.webmd.com/mental-health/addiction/signs-of-drug-addiction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    WebMD - Signs of Drug Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://americanaddictioncenters.org/adult-addiction-treatment-programs/know-is-someone-on-drugs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    American Addiction Centers - Know if Someone is on Drugs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.healthline.com/health/addiction/recognizing-addiction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Healthline - Recognizing Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://oasas.ny.gov/warning-signs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    New York OASAS - Warning Signs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Mayo Clinic - Drug Addiction Symptoms and Causes
                  </a>
                </li>
              </ul>
              )

            {/* Risk Factors and Influences */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Risk Factors and Influences of Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112#:~:text=Peer%20pressure%20is%20a%20strong,Early%20use."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Mayo Clinic - Drug Addiction Risk Factors
                  </a>
                </li>
                <li>
                  <a
                    href="https://nida.nih.gov/publications/drugfacts/understanding-drug-use-addiction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    NIDA - Understanding Drug Use and Addiction (Risk Factors)
                  </a>
                </li>
                <li>
                  <a
                    href="https://drugfree.org/article/risk-factors-for-addiction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Partnership to End Addiction - Risk Factors for Addiction
                  </a>
                </li>
              </ul>
              )

            {/* The Cycle of Addiction */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">The Cycle of Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.racnj.com/understanding-the-cycle-of-addiction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Recovery at the Crossroads - Understanding the Cycle of Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ukat.co.uk/blog/the-cycle-of-addiction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    UKAT - The Cycle of Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://americanaddictioncenters.org/the-addiction-cycle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    American Addiction Centers - The Addiction Cycle
                  </a>
                </li>
              </ul>
              )

            {/* The Recovery Journey */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">The Recovery Journey</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.12stepsappg.com/12-fellowships"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    12 Steps App - 12 Fellowships
                  </a>
                </li>
                <li>
                  <a
                    href="https://smartrecovery.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    SMART Recovery
                  </a>
                </li>
                <li>
                  <a
                    href="https://lifering.org/online-meetings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    LifeRing - Online Meetings
                  </a>
                </li>
              </ul>
              )

            {/* How to Support Someone */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">How to Support Someone with an Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/recreational-drugs-alcohol-and-addiction/helping-someone-with-drug-and-alcohol-problems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Mind UK - Helping Someone with Drug and Alcohol Problems
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/intervention/art-20047451"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Mayo Clinic - Intervention for Mental Illness
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.healthpartners.com/blog/how-to-support-someone-through-substance-use-recovery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    HealthPartners - How to Support Someone Through Recovery
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhs.uk/live-well/addiction-support/advice-for-the-families-of-drug-users/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    NHS - Advice for Families of Drug Users
                  </a>
                </li>
              </ul>
              )

            {/* Questions and Misconceptions */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Questions and Misconceptions</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.wefaceittogether.org/learn/common-myths"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    We Face It Together - Common Myths
                  </a>
                </li>
                <li>
                  <a
                    href="https://diamondrehabthailand.com/misconceptions-about-addiction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Diamond Rehab Thailand - Misconceptions About Addiction
                  </a>
                </li>
                <li>
                  <a
                    href="https://cumberlandheights.org/resources/blog/common-addiction-misconceptions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    Cumberland Heights - Common Addiction Misconceptions
                  </a>
                </li>
              </ul>
              )

            {/* Conclusion */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Conclusion - Addiction</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=OG--M8B04DA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    YouTube - Addiction Conclusion Video
                  </a>
                </li>
              </ul>
              )

            {/* Addiction Quiz */}
            <div className="bg-green-50 p-6 border-l-4 border-[#67D8AF] mt-4">
              <h3 className="text-xl font-semibold mb-4 text-[#67D8AF]">Addiction Quiz</h3>
              <p className="text-gray-700 mb-2 font-medium">"What is the minimum age to become an addict"</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3540205/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline"
                  >
                    PMC - NCBI Article on Age and Addiction
                  </a>
                </li>
              </ul>
              )
            )

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-700">
              These sources are provided for educational purposes. All external links lead to third-party websites.
              Pleaze is not responsible for the content of external sites. Always consult with qualified healthcare
              professionals for medical advice and treatment.
            </p>
            )
          )
      </section>

      )
  )
}

  )
}