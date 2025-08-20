export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using the Pleaze platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-4">Welcome to Pleaze!</h2>
          <p className="text-gray-700 mb-4">
            Pleaze is owned and operated by <strong>Pleaze App Ltd</strong>.
          </p>
          <p className="text-gray-700 mb-4">These are the terms and conditions for:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Pleaze mobile application (Available on Google Play and App Store)</li>
            <li>
              <a href="https://pleazeapp.com" className="text-[#788ED4] hover:underline">
                https://pleazeapp.com
              </a>
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            By using the platform, you agree to these terms and conditions and our privacy policy. In these terms and
            conditions, the words "platform" refers to the Pleaze mobile application and the Pleaze website together,
            "we", "us", "our", and "Pleaze", refers to Pleaze App Ltd, and "you", and "user", refers to you, the Pleaze
            user.
          </p>
          <p className="text-gray-700 mb-4">
            The following terms and conditions apply to your use of the platform. This includes mobile and tablet
            versions, as well as any other version of Pleaze accessible via desktop, mobile, tablet, social media or
            other devices.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="text-yellow-800 font-semibold">
              PLEASE READ THESE CONDITIONS CAREFULLY BEFORE DOWNLOADING AND USING THE FUNCTIONALITIES AVAILABLE ON THE
              PLATFORM.
            </p>
          </div>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">ACCEPTANCE OF TERMS</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              By using the platform, you agree to be bound by this agreement. If you do not agree to the terms of this
              agreement, you must not use our platform. We may modify this agreement from time to time, and such
              modification will be effective upon posting on the platform. You agree to be bound by any modification of
              these terms and conditions when you use Pleaze after the posting of such modification; therefore, it is
              important that you review this agreement regularly.
            </p>
            <p className="mb-4">
              By downloading and using the platform, you represent and warrant that you have full right, power and
              authority to enter into this agreement and to fully perform all of your obligations hereunder. You further
              represent and warrant that you are not under any legal incapacity or contractual restriction that would
              prevent you from entering into this agreement.
            </p>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">NOTIFICATIONS</h2>
          <p className="text-gray-700 mb-4">
            By providing your email address to Pleaze, you agree that we may use your email address to send you
            notifications and other messages, such as changes to platform functionality, news and special content. If
            you do not wish to receive these emails, you may opt-out of receiving them by submitting your unsubscribe
            request through the contact information or by using the "unsubscribe" option in the emails. Unsubscribing
            may prevent you from receiving notifications and emails about updates, news or special content related to
            Pleaze.
          </p>
        </section>

        {/* Account */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">ACCOUNT</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              When registering on our platform, the user can choose to use their existing Facebook, Apple or Google
              accounts as a login method, which allows for an efficient and secure authentication process.
              Alternatively, the user can choose to register by entering a valid email address.
            </p>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account information, and you are fully
              responsible for all activities that occur under your account. You agree to immediately notify Pleaze of
              any unauthorized use of your password or account or any other breach of security, and to ensure that you
              log out of your account at the end of each session. You may never use another user's account without
              Pleaze's prior authorization. Pleaze will not be liable for any loss or damage arising from your failure
              to comply with this agreement.
            </p>
            <p className="mb-4">
              Users may cancel their accounts at any time and for any reason through the account settings or by sending
              us their request through our contact information. Such cancellation will only result in the deletion of
              the account and the deletion of all personal data provided to Pleaze. Pleaze reserves the right to
              terminate your account or your access immediately, with or without notice, and without any liability to
              you, if Pleaze believes that you have violated any of the provisions contained in these terms and
              conditions.
            </p>
          </div>
        </section>

        {/* Help Buttons */}
        <section className="mb-12 p-6 bg-green-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">HELP BUTTONS</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              At the Pleaze platform, committed to the wellbeing and mental health of our users, we facilitate the
              creation of spaces for mutual support, allowing users to form groups with friends, family or professionals
              dedicated to mental health and addictions. In order to promote an atmosphere of assistance and solidarity,
              users have the ability to send invitations to their contacts to join these groups, thus fostering an
              accessible and personalised support network.
            </p>
            <p className="mb-4">
              Recognising the importance of immediate support in times of crisis or need, we have implemented a help
              button within each group. This button, when activated by the user, triggers a vibrating alert message to
              all members of the group, functioning as an emergency signal indicating the need for immediate attention
              and support. In parallel, the user is redirected to a breathing simulator, designed to provide calming
              guidance and help manage the stressful or anxious situation while waiting for a response from their group.
            </p>
            <p className="mb-4">
              The platform ensures that, in addition to the vibrating alert, a notification will be sent to all members
              of the group informing them that someone has requested help and, subsequently, when one of the members has
              responded, thus ensuring effective communication and ongoing support within the group.
            </p>
            <p className="mb-4">
              Pleaze is committed to maintaining the privacy and security of its users, ensuring that all communications
              within groups are confidential and handled with the utmost respect and sensitivity to personal situations.
              This approach not only seeks to provide immediate support in times of need, but also to promote a culture
              of mutual care and understanding within our community, reinforcing the value of human connection on the
              road to recovery and emotional wellbeing.
            </p>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">BADGES</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Pleaze is proud to offer a badge system designed to recognise and promote active support for addiction
              prevention and mental health care among our community of users. These badges, which represent personal and
              collective commitment to emotional and psychological wellbeing, can be shared by users on their social
              networks, acting as symbols of awareness and solidarity in the fight against addiction and the promotion
              of mental health.
            </p>
            <p className="mb-4">
              To access these badges, the user must complete a questionnaire or quiz provided by Pleaze, designed to
              educate and encourage reflection on issues related to mental health and addiction prevention. This process
              aims not only to award a badge, but also to deepen the user's knowledge and understanding of these crucial
              issues, thus promoting an informed and empathetic community.
            </p>
            <p className="mb-4">
              Upon successful completion of the quiz or test, the user will receive a unique digital badge, which can be
              displayed on their social media profiles or any other digital media, symbolising their support and
              commitment to the cause. The use of these badges is subject to Pleaze's terms and conditions, including,
              but not limited to, the prohibition of their use for commercial purposes or in any context that detracts
              from the purpose and values of our platform.
            </p>
            <p className="mb-4">
              Pleaze reserves the right to modify or withdraw access to the badges for any reason, including, but not
              limited to, misuse of the badges or participation in activities that contravene the principles of support
              and solidarity they represent. Users agree to use the badges in a responsible manner, respecting the
              spirit of support, education and awareness that they symbolise.
            </p>
          </div>
        </section>

        {/* Chat and Messaging */}
        <section className="mb-12 p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">CHAT AND MESSAGING</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              The platform contains chat areas or messaging services to enable communication between users. The user may
              only use the chat or messaging service to send and receive messages that are relevant and specific to the
              purposes of the platform. The user may NOT use the chat or messaging service available on the platform to
              perform any of the following actions:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4 space-y-2">
              <li>
                Send messages that are defamatory, violent, profane, harassing, obscene, threatening or messages that
                otherwise violate the legal rights of users or third parties.
              </li>
              <li>Send messages of a sexual or pornographic nature.</li>
              <li>Send messages that promote illegal activities.</li>
              <li>Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>
              <li>
                Impersonate another person or user or allow any other person or entity to use your account to send
                messages or otherwise use your account.
              </li>
              <li>Repeatedly send the same message. Spamming is strictly prohibited.</li>
              <li>
                Imply or assert that any statement you make is endorsed by Pleaze, without Pleaze's prior written
                consent.
              </li>
              <li>
                Post offensive and/or harmful messages, including, but not limited to, content that advocates, supports,
                condones, or promotes racism, bigotry, hatred or physical harm of any kind against any individual or
                group of individuals.
              </li>
              <li>Use the platform to collect personal data from users.</li>
            </ul>
            <div className="bg-red-100 border-l-4 border-red-400 p-4">
              <p className="text-red-800 font-semibold">
                Any breach or violation of the provisions contained in these terms may result in the suspension of the
                offending user's account, with or without notice and without the right to compensation.
              </p>
            </div>
          </div>
        </section>

        {/* Content on the Platform */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">CONTENT ON THE PLATFORM</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              On the Pleaze platform, we offer our users access to a diversity of content, including videos, images,
              articles, and stories, which aim to inform, educate and offer support on topics related to mental health
              and addiction prevention. This content is carefully selected or created to provide our users with valuable
              tools and resources in their wellness and recovery process.
            </p>
            <p className="mb-4">
              It is important to note that Pleaze is not responsible for users' use of the content provided on the
              platform. The use of this content is for personal and educational purposes only, and should not be
              construed as medical advice, diagnosis, or treatment. Users are responsible for how they choose to apply
              or interpret information obtained through Pleaze in their personal lives or the lives of others.
            </p>
            <p className="mb-4">
              All content available on Pleaze is protected by copyright and other intellectual property laws. This
              includes, but is not limited to, text, graphics, logos, icons, images, audio and video clips, digital
              downloads, and data compilations. This content is the property of Pleaze or is used with the permission of
              their respective owners. Therefore, its use, reproduction, modification, distribution, transmission,
              republication, display, or performance is prohibited without the prior written consent of Pleaze or the
              applicable copyright holders.
            </p>
            <p className="mb-4">
              Users are permitted to access and make use of the Content for their personal, non-commercial benefit,
              while respecting copyright and other intellectual property rights. Any other use of the Content, including
              modification, distribution, transmission, reuse, reposting, or use of the Content for commercial purposes,
              without the prior written permission of Pleaze, is strictly prohibited.
            </p>
            <p className="mb-4">
              Pleaze reserves the right to remove or modify any Content from the Platform at any time, without notice,
              and to take action against any misuse or violation of the terms and conditions relating to the Content
              provided on the Platform.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12 p-6 bg-yellow-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">LIMITATION OF LIABILITY</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              In consideration of users' access to and use of the Pleaze platform, it is imperative to clearly state
              Pleaze's limitations of liability with respect to the services, content and interactions provided through
              our platform, which is dedicated to mental health and addiction prevention information and support.
            </p>
            <p className="mb-4">
              Pleaze acts solely as a content provider and communication platform and is not responsible for decisions
              made or actions taken by users based on content or interactions made within the platform. This includes,
              but is not limited to, the use of educational content, quiz responses, participation in groups, or any
              other functionality offered. Pleaze content and functionalities are designed to serve as support and
              guidance, in no way substituting for professional medical consultation, diagnosis or treatment.
            </p>
            <p className="mb-4">
              Pleaze does not guarantee the accuracy, relevance, or usefulness of the content provided, and disclaims
              any liability for errors or omissions in this content. In addition, Pleaze assumes no responsibility for
              user-generated content, interactions within groups, or misuse of the platform. Each user is responsible
              for his or her own actions and for the interpretation and application of the content available on Pleaze
              in his or her personal situation.
            </p>
            <p className="mb-4">
              The platform shall not be liable for indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from (i) access to or use of, or inability to access or use the platform; (ii) any conduct or content of
              third parties on the platform; (iii) content obtained from the platform; and (iv) unauthorized access, use
              or alteration of users' transmissions or content.
            </p>
            <p className="mb-4">
              Pleaze has no control over, and assumes no responsibility for, any services or content provided by third
              parties through links, resources or advertisements available on the platform. The inclusion of such links
              does not imply a recommendation or endorsement by Pleaze of the linked services or content.
            </p>
            <p className="mb-4">
              This limitation of liability shall apply to the fullest extent permitted by law, regardless of whether
              liability is alleged based on contract, tort (including negligence), strict liability, or otherwise, even
              if Pleaze has been advised of the possibility of such damages.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 font-semibold">
                By using Pleaze, users acknowledge and agree to these limitations of liability, understanding that use
                of the platform is at their own risk and discretion. This limitation of liability clause is an essential
                component of Pleaze's terms and conditions of use, designed to establish a clear and fair understanding
                between Pleaze and its users regarding liabilities and expectations.
              </p>
            </div>
          </div>
        </section>

        {/* License to Use the Platform */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">LICENSE TO USE THE PLATFORM</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Pleaze grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive license to use the
              Pleaze platform and downloadable via Google Play and App Store free of charge, including but not limited
              to modified versions, updates, upgrades, enhancements, improvements, additions, additions and copies, if
              any. This license is for the sole purpose of allowing you to use the features available on the Platform in
              the manner permitted by these terms. You may not copy, modify, distribute, sell or lease any part of our
              platform or the included software, nor may you reverse engineer or attempt to extract the source code of
              such software, unless such restrictions are prohibited by law, or unless you have our written permission.
            </p>
            <p className="mb-4">
              The user agrees not to use the platform in a negligent, fraudulent or unlawful manner. It also undertakes
              not to carry out any conduct or action that could damage the image, interests or rights of Pleaze or third
              parties.
            </p>
            <p className="mb-4">
              Pleaze reserves the right to terminate the user's access immediately, with or without notice, and without
              liability to the user, if Pleaze considers that the user has violated any of these terms.
            </p>
          </div>
        </section>

        {/* Copyright */}
        <section className="mb-12 p-6 bg-purple-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">COPYRIGHT</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              All material and content on the platform, including but not limited to names, logos, trademarks, games,
              images, text, columns, music, graphics, videos, photographs, illustrations, software and other items, are
              protected by copyrights, trademarks and/or other intellectual property rights owned and controlled by
              Pleaze or our users who have licensed or otherwise provided their material to the platform. You
              acknowledge and agree that all Materials on Pleaze are made available for limited, non-commercial,
              personal use only. Except as specifically provided herein. No material may be copied, reproduced,
              republished, sold, downloaded, posted, transmitted, or distributed in any way, or otherwise used for any
              purpose, by any person or entity, without Pleaze prior express written permission. You may not add,
              delete, distort, or otherwise modify the material. Any unauthorised attempt to modify any material, to
              defeat or circumvent any security features, or to utilise Pleaze or any part of the material for any
              purpose other than its intended purposes is strictly prohibited.
            </p>
          </div>
        </section>

        {/* Copyright Infringement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">COPYRIGHT INFRINGEMENT</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Pleaze will respond to all inquiries, complaints and claims relating to alleged infringement by breach or
              violation of the provisions contained in Irish and international copyright and intellectual property laws
              and regulations. Pleaze respects the intellectual property of others and expects users to do the same. If
              you believe, in good faith, that any material provided on the platform infringes your copyright or other
              intellectual property rights, please submit your request through our contact information, with the
              following information:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4 space-y-2">
              <li>
                Identification of the intellectual property right that is allegedly infringed. All relevant registration
                numbers or a statement regarding ownership of the work should be included.
              </li>
              <li>
                A statement that specifically identifies the location of the infringing material, in sufficient detail
                so that Pleaze can find it on the platform.
              </li>
              <li>Your name, address, telephone number and email address.</li>
              <li>
                A statement by you that you have a good faith belief that the use of the allegedly infringing material
                is not authorised by the copyright owner, or its agents, or by law.
              </li>
              <li>
                A statement by you, made under penalty of perjury, that the information in your notification is
                accurate, and that you are the copyright owner or authorised to act on its behalf.
              </li>
              <li>
                An electronic or physical signature of the copyright owner or of the person authorised to act on the
                copyright owner's behalf.
              </li>
            </ul>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-12 p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">PROHIBITED ACTIVITIES</h2>
          <p className="text-gray-700 mb-4 font-semibold">The following activities are prohibited:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              Access, monitor, reproduce, distribute, transmit, broadcast, display, sell, license, copy or otherwise
              exploit any content of the platform, including but not limited to, using any robot, spider, scraper or
              other automated means or any manual process for any purpose not in accordance with this agreement or
              without our express written permission.
            </li>
            <li>
              Violate the restrictions in any robot exclusion headers on the platform or bypass or circumvent other
              measures employed to prevent or limit access to the platform.
            </li>
            <li>
              Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately
              large load on our infrastructure.
            </li>
            <li>Deep-link to any portion of the platform for any purpose without our express written permission.</li>
            <li>
              "Frame", "mirror" or otherwise incorporate any part of the platform into any other websites or service
              without our prior written authorisation.
            </li>
            <li>
              Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software
              programs used by Pleaze.
            </li>
            <li>
              Circumvent, disable or otherwise interfere with security-related features of the platform or features that
              prevent or restrict use or copying of any content.
            </li>
          </ul>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">DISCLAIMER OF WARRANTIES</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Due to the nature of the Internet, Pleaze provides and maintains the platform on an "as is", "as
              available" basis and does not promise that use of the platform will be uninterrupted or error-free. We
              will not be liable to you if we are unable to provide the platform and the functionality included on the
              platform for any reason beyond our control.
            </p>
            <p className="mb-4">
              Except as provided above we can give no other warranties, conditions or other terms, express or implied,
              statutory or otherwise and all such terms are hereby excluded to the maximum extent permitted by law.
            </p>
            <p className="mb-4">
              You will be responsible for any breach of these terms by you and if you use the platform in breach of
              these terms you will be liable to and will reimburse Pleaze for any loss or damage caused as a result.
            </p>
            <p className="mb-4">
              Pleaze shall not be liable for any amount for failure to perform any obligation under this Agreement if
              such failure is due to the occurrence of any unforeseen event beyond its reasonable control, including,
              without limitation, Internet outages, communications outages, fire, flood, or any uncontrollable act of
              nature.
            </p>
            <p className="mb-4">
              These terms do not affect your statutory rights as a consumer which are available to you.
            </p>
          </div>
        </section>

        {/* Additional Legal Sections */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#17335F] mb-6">ADDITIONAL TERMS</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#17335F] mb-4">ELECTRONIC COMMUNICATIONS</h3>
            <p className="text-gray-700 mb-4">
              Pleaze will not accept any responsibility for failed, partial or garbled computer transmissions, for any
              breakdown, failure, connection or availability of computer, telephone, network, electronic or Internet
              hardware or software, for Internet accessibility or availability or traffic congestion or for any
              unauthorised human acts, including any errors or mistakes.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#17335F] mb-4">INDEMNIFICATION</h3>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend and hold harmless the platform, its officers, employees, affiliates and
              suppliers against any claims, losses, damages, costs and expenses (including reasonable legal fees)
              resulting from or related to your misuse of the platform or violation of this clause.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#17335F] mb-4">CHANGES</h3>
            <p className="text-gray-700 mb-4">
              We may change the platform and these terms at any time, in our sole discretion and without notice to you.
              You are responsible for remaining knowledgeable about these terms. Your continued use of the platform
              constitutes your acceptance of any changes to these terms and any changes will supersede all previous
              versions of the terms. Unless otherwise specified herein, all changes to these terms apply to all users
              take effect.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#17335F] mb-4">TERMINATION</h3>
            <p className="text-gray-700 mb-4">
              Both the user and Pleaze acknowledge that failure to comply with these terms and conditions may result in
              termination of the agreement between both parties. In case of non-compliance by the user, Pleaze reserves
              the right to unilaterally terminate the user's access to and use of the platform without prior notice.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#17335F] mb-4">GOVERNING LAW AND JURISDICTION</h3>
            <p className="text-gray-700 mb-4">
              These terms and conditions shall be governed by and construed in accordance with the laws of the Republic
              of Ireland. Any dispute relating to these terms shall be subject to the exclusive jurisdiction of the
              courts of the Republic of Ireland.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#17335F] to-[#788ED4] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h2>
            <p className="mb-4">
              If you have questions or concerns about these terms, please contact us through our contact forms or by
              using the following contact information:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Pleaze App Ltd.</strong>
              </p>
              <p>
                <strong>James Lewis</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:james@pleazeapp.com" className="text-[#67D8AF] hover:underline">
                  james@pleazeapp.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+353833499458" className="text-[#67D8AF] hover:underline">
                  +353 83 349 9458
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="text-center text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  )
}
