import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-[#0f0f1c] to-[#111122]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f0f1c]/90 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              In the Privacy Policy, GoCloudMining collects, uses, shares, and protects user information received through the website GoCloudMining.com. Any personal information that we collect from users (you, your, or customers) or that you provide to us will be processed by us. By "personal information" we mean any data that, alone or in combination with other information, allows us to directly or indirectly identify your name, email address, IP address, device identifier, or other online identifier, etc. GoCloudMining will only use the information collected about you to fulfill its contractual obligations and improve customer service. In turn, GoCloudMining is committed to making every effort to protect your privacy. The Privacy Policy, together with the Terms of Use and other documents referred to by it, define the principles and rules on which we collect, process, and use your personal data. Please read this document carefully to understand our position and policy on your personal data and how we will use it. If you do not want your personal information to be collected, you need to stop working on this website.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">1. General Information</h2>
              <p>
                GoCloudMining COMMERCIAL INVESTMENTS LIMITED (hereinafter referred to as "GoCloudMining") is a British company dedicated to building a secure, compliant, and transparent blockchain cloud mining machine service, providing a variety of stable and intelligent computing power services, and providing solutions for a global customer base.
              </p>
              <p>
                As the operator of the website, GoCloudMining attaches great importance to protecting your personal data. GoCloudMining collects, processes, and uses your personal data in accordance with this Privacy Policy and in compliance with the European General Data Protection Regulation ("GDPR").
              </p>
              <p>
                This privacy policy ("Privacy Policy") will provide you with information about the collection, processing, and use of your personal data when using the website.
              </p>
              <p>
                If you provide us with personal data of third parties (such as family members or work colleagues), you should ensure that these persons are familiar with this Privacy Policy, and you should only share their personal data with permission and ensure that their personal data is correct.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">2. Responsible Person</h2>
              <p>
                For any matters relating to data protection, you can contact us in writing by email at info@gocloudmining.com.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">3. Data Processing in Connection with the Website</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.1 Visiting GoCloudMining's Website</h3>
                <p>
                  When you visit GoCloudMining's website, the hosting provider of the GoCloudMining website may automatically collect various information and store it in server log files that your browser transmits to us. The information/data mentioned are neither assigned to a specific person nor linked to data from other sources. We may record the following technical data at each connection to the web server without your intervention and store it by us. The purpose of collecting and processing these technical data is to enable the use of our website, to continuously ensure system security and stability, to optimize our website, and for internal statistical purposes. This is our legitimate interest in processing the data pursuant to Art. 6 Para. 1 lit. f GDPR.
                </p>
                <p>
                  In addition, in the event of an attack on the network infrastructure or other unauthorized use or misuse of the website, the IP address may be used together with other data for intelligence and protection purposes and, where appropriate, in criminal proceedings to identify the user concerned and in civil and criminal proceedings against the user concerned. This is our legitimate interest in processing data pursuant to Article 6 (1) (f) GDPR.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.2 Use of Cookies on the Website</h3>
                <p>
                  The website may use cookies. A cookie is a text file that is stored in a computer system via an Internet browser. For more detailed information on cookies and how they work, please visit our website.
                </p>
                <p>
                  Many Internet websites and servers use cookies. Many cookies contain a so-called cookie ID. The cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet websites and servers to differentiate the individual browser of the data subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.
                </p>
                <p>
                  Through the use of cookies, GoCloudMining can provide website users with more user-friendly services that would not be possible without the setting of cookies. As already mentioned, cookies allow us to recognize our website users. The purpose of this recognition is to make it easier for users to use our website. A website user who uses cookies does not, for example, have to enter access data each time they visit the website, because this is taken over by the website and the cookie is therefore stored on the user's computer system.
                </p>
                <p>
                  You may prevent the setting of cookies through the website of GoCloudMining at any time by adjusting the internet browser used accordingly and thus permanently deny the setting of cookies. Furthermore, previously set cookies may be deleted at any time via an internet browser or other software programs. This is possible with all popular internet browsers. If the data subject deactivates the setting of cookies in the internet browser used, not all functions of the GoCloudMining website may be available.
                </p>
                <p>
                  Detailed information on the cookies used by GoCloudMining and the purposes for which they are used can be found in the Cookie Policy of GoCloudMining.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.3 Data Analysis</h3>
                <p>
                  The website may use an analytics platform. In this case, the information generated by the cookies about your use of the website (including your automatically anonymized IP address) may be stored on the servers of our hosting provider.
                </p>
                <p>
                  The IP address will be shortened by activating IP anonymization (anonymizeIP) on this website before the data is stored.
                </p>
                <p>In addition to the data listed in section 3.1, GoCloudMining may also receive the following information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Usage data;</li>
                  <li>Navigation paths;</li>
                  <li>Time spent on the website.</li>
                </ul>
                <p>
                  GoCloudMining may use these technical data to analyze your use of the website, to compile reports on website activity, to understand and/or optimize GoCloudMining's website and/or for internal statistical purposes. GoCloudMining does not use this information and personal data to identify individuals unless GoCloudMining becomes aware of specific signs of unlawful use.
                </p>
                <p>
                  Any processing of these technical personal data helps GoCloudMining determine which features on our website work and which do not, and how GoCloudMining can improve our website. Without receiving any such data, GoCloudMining may not be able to provide you with the services we currently offer you. Your data will only be used to improve the user experience on our website and to help you find the information you are looking for. This is our legitimate interest in processing the data pursuant to Article 6 (1) (f) GDPR.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.4 Contact Possibilities via the Website</h3>
                <p>
                  GoCloudMining only uses the data you voluntarily provide to answer your contact questions or to respond to your email in the best possible way. Therefore, the processing of this data is in our legitimate interest pursuant to Article 6 (1) (f) GDPR and you have given your consent pursuant to Article 6 (1) (a) GDPR.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.5 Registration for GoCloudMining's Newsletter (if Relevant)</h3>
                <p>
                  Registration is required to receive GoCloudMining's newsletter. To do this, you must provide your name and email address. By registering, you consent to the processing of the provided data for the purpose of regularly sending the newsletter to the address you provided. This consent constitutes the legal basis for our processing of your email address pursuant to Art. 6 Para. 1 lit. a GDPR.
                </p>
                <p>
                  At the end of each newsletter there is a link through which you can unsubscribe at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.6 Social Media</h3>
                <p>
                  GoCloudMining may use plugins from social networks on our website, such as Blog, GitHub, YouTube, Reddit, Gitter, Twitter, StackExchange, Facebook, or Meetups. When you activate them by clicking on them, the operators of the respective social networks may record that you are on our website and may use this information. The processing of these personal data falls under the responsibility of these individual social media platforms and is carried out in accordance with their privacy policies. Please consult these individual social media platforms for their privacy policies. We are not responsible for the data collected by these individual social media platforms.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">3.7 Event Registration</h3>
                <p>
                  To register for any event organized by the GoCloudMining website, GoCloudMining may require the following registration data: first and last name, language, company affiliation, company title, credit card information, email address.
                </p>
                <p>
                  GoCloudMining may use this information and other information you voluntarily provide (e.g., preferences, comments) solely for the execution of the booking agreement, unless otherwise provided in this privacy policy or you have not expressly consented.
                </p>
                <p>
                  GoCloudMining may process data by name in order to record your booking at your request, to contact you in case of questions or problems, and to ensure correct payment.
                </p>
                <p>
                  The legal basis for data processing for this purpose is the fulfillment of an agreement concluded pursuant to Article 6 (1) (b) GDPR.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">4. Other Parties with Access to Information Collected by GoCloudMining</h2>
              <p>
                GoCloudMining will not provide your personal data to third parties other than GoCloudMining’s website provider, unless you have given your explicit consent, if we are legally obliged to do so, or if this is necessary to enforce our rights in connection with the contractual relationship.
              </p>
              <p>
                Personal data collected through the website may be transferred to and/or accessed by the website service provider. The website may be hosted on a server in Singapore. The data transfer is for the purpose of providing and maintaining the functionality of our website. This is a legitimate interest of GoCloudMining pursuant to Article 6 (1) (f) GDPR.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">5. International Transfer of Personal Information</h2>
              <p>
                GoCloudMining is entitled to transfer your personal data to third parties abroad for the data processing purposes described in this privacy policy. This concerns in particular the following recipients:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>GoCloudMining's website service provider; and/or</li>
                <li>E-commerce providers, such as KYC solution providers, who assist GoCloudMining in processing your online payments.</li>
              </ul>
              <p>
                They are obliged to protect data privacy just like GoCloudMining. If the level of data protection in a country does not correspond to the European level of data protection, we will contractually ensure that the protection of your personal data always corresponds to the level of protection in the EU by entering into standard contractual clauses and complying with the GDPR.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">6. Data Security</h2>
              <p>
                GoCloudMining uses appropriate technical and organizational security measures to protect your stored personal data against manipulation, partial or total loss, and unauthorized access by third parties. GoCloudMining's security measures are constantly being improved in line with technological developments.
              </p>
              <p>
                Please note that any data transmission over the Internet (e.g., by e-mail communication) is generally not secure and GoCloudMining assumes no liability for data transmitted to us over the Internet. Unfortunately, absolute protection is technically impossible.
              </p>
              <p>
                This information does not apply to third-party websites and the corresponding links provided on the GoCloudMining website. GoCloudMining does not assume any responsibility for this.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">7. Your Rights Regarding Your Data</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.1 Right to Confirmation</h3>
                <p>
                  You have the right to ask us for confirmation as to whether your personal data is being processed. If you wish to exercise this right of confirmation, you can contact the responsible person specified in Section 2 of this Privacy Policy at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.2 Right of Access</h3>
                <p>
                  You have the right to obtain information about the storage of your personal data and a copy of this information from GoCloudMining at any time free of charge. In addition, you can access the following information:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The purposes of the processing;</li>
                  <li>The categories of personal data involved;</li>
                  <li>The recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;</li>
                  <li>Where possible, the envisaged period for which the personal data will be stored; if not possible, the criteria used to determine that period;</li>
                  <li>The right to request rectification or erasure of your personal data, or restriction of processing of your personal data, or to object to such processing;</li>
                  <li>If the personal data were not collected directly from you, any available information about their source; and</li>
                  <li>The existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for you.</li>
                </ul>
                <p>
                  If you wish to avail yourself of this right of access, you can contact the responsible person set out in Section 2 of this Privacy Policy at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.3 Right to Rectification</h3>
                <p>
                  You have the right to request that GoCloudMining immediately correct inaccurate personal data concerning you. Taking into account the purposes of the processing, you have the right to have incomplete personal data completed, including by providing a supplementary statement. If you wish to exercise this right to rectification, you can contact the responsible person specified in Section 2 of this Privacy Policy at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.4 Right to Erasure (Right to be Forgotten)</h3>
                <p>
                  You have the right to obtain from us the erasure of personal data concerning you as soon as possible, and we are obliged to erase personal data without undue delay where one of the following applies:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;</li>
                  <li>You withdraw your consent to the processing based on point (a) of Article 6(1) GDPR or point (a) of Article 9(2) GDPR and there is no other legal basis for the processing;</li>
                  <li>The data subject objects to the processing pursuant to Article 21(1) GDPR and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) GDPR;</li>
                  <li>The personal data have been unlawfully processed;</li>
                  <li>The personal data must be erased to comply with a legal obligation, as provided for by applicable law; and/or</li>
                  <li>The personal data were collected in relation to the provision of information society services pursuant to Article 8(1) GDPR.</li>
                </ul>
                <p>
                  If any of the above reasons apply and you wish to request the erasure of your personal data stored by us, you can do so at any time by contacting the responsible person specified in Section 2 of this Privacy Policy. The controller shall promptly ensure that the erasure request is complied with as quickly as possible.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.5 Right to Restriction of Processing</h3>
                <p>
                  You have the right to obtain restriction of processing when one of the following applies:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You contest the accuracy of the personal data, and GoCloudMining will verify the accuracy of the personal data for a period of time;</li>
                  <li>The processing is unlawful and you oppose the erasure of the personal data and request the restriction of their use;</li>
                  <li>GoCloudMining no longer needs the personal data for the purposes of the processing, but you require them for the establishment, exercise, or defence of legal claims; and/or</li>
                  <li>The data subject has objected to processing pursuant to Article 21(1) of the GDPR, pending the verification whether our legitimate grounds override those of the data subject.</li>
                </ul>
                <p>
                  If any of the above conditions applies and you wish to request the restriction of the processing of your stored personal data, you may contact the controller at any time. The controller will arrange for the restriction of processing.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.6 Right to Object</h3>
                <p>
                  You have the right to object at any time to the processing of your personal data pursuant to point (e) or (f) of Article 6(1) of the GDPR, on grounds relating to your particular situation.
                </p>
                <p>
                  GoCloudMining will no longer process the personal data after you have lodged an objection, unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights, and freedoms, or for the establishment, exercise, or defence of legal claims. To exercise your right to object, you can contact the controller directly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.7 Automated Individual Decision-Making, Including Profiling</h3>
                <p>
                  You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you, as long as the decision (1) is not necessary for entering into, or the performance of, a contract between you and us, or (2) is not authorised by applicable law and is also subject to suitable measures to safeguard your rights and freedoms and legitimate interests, or (3) is not based on your explicit consent.
                </p>
                <p>
                  If the decision (1) is necessary for entering into, or the performance of, a contract between you and GoCloudMining, or (2) is based on your explicit consent, we will implement suitable measures to safeguard your rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express their point of view and contest the decision.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">7.8 Right to Withdraw Data Protection Consent</h3>
                <p>
                  You have the right to withdraw your consent to the processing of your personal data at any time. If you wish to exercise your right to withdraw your consent, you can contact the responsible person mentioned in Section 2 directly at any time.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">8. Storage Period</h2>
              <p>
                GoCloudMining processes and stores the personal data of the data subject only for the period necessary to achieve the storage purpose or as permitted by applicable laws or regulations. If the storage purpose is not applicable or the storage period prescribed by applicable law has expired, the personal data will be deleted regularly in accordance with legal requirements.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">9. Minors</h2>
              <p>
                GoCloudMining does not intentionally collect or use any personal information of minors under the age of 16. Minors may voluntarily share personal information with others, depending on the products and/or media channels used. If a minor provides GoCloudMining with their information without the consent of their parents or guardians, GoCloudMining will ask the parents or guardians to contact GoCloudMining to delete the information.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">10. Privacy Policy Updates</h2>
              <p>
                We may update this privacy policy from time to time and notify you on the website that the policy has been revised. The latest version of the privacy policy published on the GoCloudMining website applies. Each time GoCloudMining updates its policy, GoCloudMining will indicate which parts have been updated.
              </p>
              <p>
                If you have any questions about this Privacy Policy, please feel free to contact us at info@gocloudmining.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f1c] py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;