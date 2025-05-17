import React from "react";
import Navbar from "./Navbar";
import Footer from "../containers/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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

      {/* Terms of Service Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            Terms of Service
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8 text-gray-300 text-lg leading-relaxed"
          >
            <div className="space-y-4">
              <p>
                GoCloudMining Service Agreement (hereinafter referred to as "this Agreement") is about the rights and obligations between users and GoCloudMining COMMERCIAL INVESTMENTS LIMITED or its designated parties, including but not limited to the GoCloudMining website (https://www.gocloudmining.com), GoCloudMining application owners, and their affiliated company applications, regarding GoCloudMining's many services. This Agreement has the force of a contract and applies to all your activities on the GoCloudMining platform. By accessing and/or using this website, users accept and agree to all the terms and conditions of this Agreement. If you do not agree to any of the terms of this Agreement, please stop using GoCloudMining and the services provided by the website. If you purchase any product provided by GoCloudMining, you should also agree to the service agreement of the product. GoCloudMining reserves the right to change or modify the terms of this Agreement at any time at its sole discretion. Users should check this Agreement regularly to understand the latest changes. Once the modified agreement is published, it will effectively replace the original agreement (unless otherwise specified at the effective time). If users continue to use GoCloudMining services after the publication of this agreement and its modified content, it means that you accept and agree to the modified content.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Service Content</h2>
              <p>
                GoCloudMining uses its own system to provide users with cloud mining machines and other service products that may be added in the future through the Internet. For the registration information provided by the user, the user agrees to:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Provide legal, true, accurate, and complete personal information;</li>
                <li>
                  User information should be uploaded in a timely manner if there are any changes. If the registration information provided by the user is illegal, untrue, inaccurate, or incomplete, the user shall bear the corresponding responsibilities and the consequences arising therefrom. GoCloudMining reserves the right to terminate the user's use of GoCloudMining services.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Provision, Modification, and Termination of Services</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  While accepting GoCloudMining services, users agree to accept various information services provided by GoCloudMining. Users hereby authorize GoCloudMining to send commercial information to their email addresses, mobile phones, mailing addresses, etc.
                </li>
                <li>
                  If the user objects to the modification of this Agreement or is dissatisfied with GoCloudMining's services, he/she may exercise the following rights: (1) Stop using GoCloudMining network services. (2) Notify GoCloudMining through customer service channels to stop the service. Upon termination of the service, the user's right to use GoCloudMining network services will be terminated immediately. In this case, GoCloudMining has no obligation to transmit any unprocessed information or unfinished services to the user or any third party not directly related to it.
                </li>
                <li>
                  Once a user purchases products and services on the platform, GoCloudMining has the right to refuse a refund for its own reasons.
                </li>
                <li>
                  GoCloudMining reserves the right to modify or interrupt services at any time without notifying users. GoCloudMining has the right to exercise the right to modify or interrupt services without being responsible to users or any third party not directly related.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">User Registration</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">1. Representations and Warranties</h3>
                <p>
                  You hereby make the following representations and warranties to GoCloudMining, which will be deemed repeated each time you use the services provided by GoCloudMining:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>If you are a natural person: You are at least 18 years old and have full civil capacity.</li>
                  <li>
                    If you are an entity: You are duly organized and validly existing under the laws of the jurisdiction in which you are organized or incorporated and, if such laws are relevant, in good standing.
                  </li>
                  <li>
                    Your use of the services provided by GoCloudMining complies with the applicable laws and regulations of your country/region, and your use of the services provided by GoCloudMining does not violate your obligations to any third party.
                  </li>
                  <li>
                    You have the necessary rights to use the services provided by GoCloudMining and perform the corresponding obligations. This Agreement and the corresponding purchase order are valid and binding on you.
                  </li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">2. Registration Information</h3>
                <p>
                  For the registration information provided by the user, the user agrees to:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Provide legal, true, accurate, and detailed personal or entity information.</li>
                  <li>
                    User information should be updated in a timely manner if there are any changes. If the registration information provided by the user is illegal, untrue, inaccurate, or incomplete, the user shall bear the corresponding responsibilities and consequences, and GoCloudMining reserves the right to terminate the user's use of GoCloudMining services.
                  </li>
                  <li>
                    Unless you obtain GoCloudMining’s express written consent, you can only register one account on GoCloudMining;
                  </li>
                  <li>
                    For compliance purposes such as KYC (Know Your Customer) and/or anti-money laundering, GoCloudMining reserves the right to require you to provide GoCloudMining with your PII (personally identifiable information) and/or financial information.
                  </li>
                  <li>
                    When you use certain functions provided by GoCloudMining, you need to enter your username and password. If you are unable to access your account due to reasons such as forgetting your password, GoCloudMining reserves the right to request specific information from you, including but not limited to proof of identity, proof of residence, telephone number or email proof, and any identifiable activity information on the website, such as transaction ID, order number, withdrawal information, etc. However, you hereby agree not to share your username and/or password with any third party or allow any third party to access your account. GoCloudMining is not responsible for any consequences and losses caused by your improper use of your account and/or password or any third party's use of your account and/or password. If you believe that your username and/or password is known to any third party or your account is accessed by any third party, you should notify GoCloudMining immediately.
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Confidentiality of Information</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  The user information referred to in this Agreement refers to information that complies with the provisions of laws, regulations, and relevant rules and falls within the following scope:
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>Personal information provided by the user to GoCloudMining when registering.</li>
                    <li>
                      The user's browser, including but not limited to the IP address, website, information in cookies, and web page request records automatically received and recorded by GoCloudMining when using GoCloudMining services, participating in website activities, or visiting website pages.
                    </li>
                    <li>User personal information legally obtained by GoCloudMining from business partners.</li>
                    <li>Other user personal information obtained by GoCloudMining through other legal means.</li>
                  </ul>
                </li>
                <li>
                  GoCloudMining promises not to disclose the user's password, name, mobile phone number, and other non-public information to any third party without legal reasons or prior permission from the user.
                </li>
                <li>
                  Under the following statutory circumstances, the user's personal information will be disclosed in part or in full:
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>Disclose to users or other third parties with the user’s consent.</li>
                    <li>
                      Disclosure to administrative, judicial, or other legal third parties in accordance with laws, regulations, and other relevant provisions or the requirements of administrative agencies.
                    </li>
                    <li>Other content that should be disclosed in accordance with relevant laws, regulations, and other provisions.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Risk Factors</h2>
              <p>
                Before purchasing any service, you should evaluate whether the service is suitable for your financial ability and risk appetite. By purchasing any service provided by GoCloudMining, you acknowledge that you understand and accept all risks associated with this service. The risks listed in this section are not exhaustive. These risks and other risks that may occur now or in the future may prevent you from making any gains, may cause you to suffer financial losses, and may even terminate the services we provide:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  There are potential financial, regulatory, and other risks in using any digital assets or related products and services. Before using any digital assets or related products and services, you should confirm that you have sufficient knowledge and experience of the characteristics and risks of blockchain technology, digital assets, and smart contracts. Your decision to participate in any digital asset activities and/or use related services should be based on independent research and/or consultation with professionals you deem necessary. GoCloudMining assumes that when you use the services provided by GoCloudMining, you are a professional who understands the digital asset industry and understands the risks of digital asset-related products and services. This Agreement and any services provided by GoCloudMining should not be regarded as investment advice provided to you by GoCloudMining.
                </li>
                <li>
                  The value of any product or service provided by GoCloudMining and the value of any digital asset may be affected by a variety of factors that are beyond the control of GoCloudMining, including but not limited to changes in mining difficulty and/or other mining parameters/attributes, market price fluctuations of digital assets, obsolescence of hardware (such as mining machines), and hardware amortization, etc.
                </li>
                <li>
                  Due to the nature of digital assets, the value of any digital asset may lose some or all of its value at any time. You understand that the value of any digital asset may drop rapidly (even to zero). GoCloudMining is not responsible for any losses caused by market price fluctuations of any digital asset.
                </li>
                <li>
                  It may take some time for digital asset transactions to be confirmed. Although the possibility is small, there are indeed cases where some digital asset transactions may never be confirmed, and unconfirmed digital asset transactions mean that such transactions have not been completed.
                </li>
                <li>
                  Digital asset transactions are irreversible: If you mistakenly send any amount of digital assets to any individual or digital asset wallet address, you may not be able to cancel the transaction or recover those funds.
                </li>
                <li>
                  GoCloudMining does not hold any funds for users. If you wish to purchase products and services provided by the GoCloudMining platform, you can choose to pay for the order directly with your digital assets.
                </li>
                <li>
                  If you lose or forget any PIN or password required to access and use the Digital Assets, the Digital Assets may be lost or become unusable.
                </li>
                <li>Blockchain (or digital asset) technology may have unknown inherent technical defects.</li>
                <li>Countries may introduce and promulgate new laws, regulations, and policies that affect the use of digital assets.</li>
                <li>
                  GoCloudMining will regularly maintain or upgrade the system. You hereby confirm that you do not expect your use of the services provided by GoCloudMining to be continuous and uninterrupted. Unless otherwise expressly provided, GoCloudMining shall not be liable for any losses caused by suspension and interruption due to GoCloudMining's maintenance and upgrade of its system.
                </li>
                <li>
                  No identity verification or computer security technology is 100% secure. You agree to bear all risks associated with hacking or identity theft.
                </li>
                <li>
                  You understand and agree that GoCloudMining reserves the right to publish, modify, and/or provide information related to our services through websites, emails, customer service phone calls, text messages, and other official channels. GoCloudMining is not responsible for information obtained through non-GoCloudMining official channels. If you have any questions about the authenticity of information sent on behalf of GoCloudMining, please contact us immediately.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">User Rights</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">1. Username, Password, and Security</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Users have the right to choose whether to become a registered user of GoCloudMining. If a user chooses to become a registered user of GoCloudMining, he or she can create an account. The naming and use of the account should comply with relevant laws and regulations and be in line with ethical standards. The account must not contain any insulting, threatening, obscene, hateful, or other content that infringes on the legitimate rights and interests of others.
                  </li>
                  <li>
                    Once the user successfully registers and becomes a GoCloudMining registered user, he/she will be given an account (email address) and password, and will be responsible for all activities and events that occur after logging into the system with this account and corresponding password. The user shall bear full responsibility for any legal liability directly or indirectly caused by the use of inappropriate language and other behaviors using this account.
                  </li>
                  <li>
                    If the password is lost, the user can reset the password by sending a reset email to the registered email address.
                  </li>
                </ol>
              </div>
              <p>
                2. Users have the right to participate in various online and offline activities provided by the GoCloudMining organization.
              </p>
              <p>
                3. Users have the right to obtain other types of services provided by GoCloudMining in accordance with the rules of the GoCloudMining platform.
              </p>
              <p>
                4. GoCloudMining promises: After users purchase GoCloudMining service products, if GoCloudMining is unable to provide services due to platform reasons, it should provide users with alternative solutions. Otherwise, GoCloudMining shall bear the losses caused by the inability to provide services. The amount of compensation shall be determined by the two parties through separate negotiation.
              </p>
              <p>
                <strong>GoCloudMining official customer service email:</strong> info@gocloudmining.com
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">User Restrictions and Obligations</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Users shall not use this website to endanger national security, disclose state secrets, infringe upon the legitimate rights and interests of the state, society, and citizens, and shall not use this website to produce, copy, and disseminate the following information:
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>Inciting resistance to or undermining the Constitution, laws, or administrative regulations.</li>
                    <li>Inciting subversion of state power and overthrow of the socialist system.</li>
                    <li>Inciting the secession of the country or undermining national unity.</li>
                    <li>Inciting ethnic hatred and discrimination, and undermining national unity.</li>
                    <li>Fabricating or distorting facts, spreading rumors, or disrupting social order.</li>
                    <li>Propagating feudal superstition, obscenity, pornography, gambling, violence, murder, terror, or incitement.</li>
                    <li>Publicly insulting others, fabricating facts, or other hostile behavior.</li>
                    <li>Damaging the credibility of state organs.</li>
                    <li>Other acts that violate the Constitution, laws, and administrative regulations.</li>
                    <li>Carry out commercial advertising.</li>
                  </ul>
                </li>
                <li>
                  Users shall not maliciously register GoCloudMining accounts in any way, including but not limited to registering multiple accounts for the purpose of profit, speculation, cashing out, obtaining rewards, etc., and shall not steal other user accounts. If a user violates the above provisions, GoCloudMining has the right to immediately suspend or terminate the provision of services to the user and take all necessary legal measures within the scope permitted by applicable laws and regulations.
                </li>
                <li>
                  Users are obliged to keep their GoCloudMining account and password, Google verification code properly, and they are fully responsible for the security of their username, password, and Google Key. Any legal consequences caused by the leakage of the user's username, password, or Google Key shall be borne by the user. The platform is not responsible for any property losses caused by the leakage of the user's own information.
                </li>
                <li>
                  Users are prohibited from using GoCloudMining as a place, platform, or medium for engaging in various illegal activities in any form. Users may not engage in any commercial activities in the name of GoCloudMining, may not use the information/data on this website without the prior written authorization of GoCloudMining, and may not use GoCloudMining as a place, platform, or medium for engaging in commercial activities in any form.
                </li>
                <li>
                  You agree to comply with all applicable laws and regulations, this Agreement, and all rules and policies published from time to time by GoCloudMining regarding the use of this website and the services provided by GoCloudMining. You may not use the GoCloudMining website and the services it provides that are prohibited by the laws and regulations applicable to you.
                </li>
                <li>
                  You are solely responsible for any taxes payable, as well as all hardware, software, service, or other fees arising from your use of this service.
                </li>
                <li>
                  You agree and declare that you use the services provided by GoCloudMining only for your own benefit and that you will not use the services provided by GoCloudMining on behalf of others or for the benefit of any third party.
                </li>
                <li>
                  You agree to contact GoCloudMining immediately if you discover or suspect any fraud or misconduct by any third party using the services provided by GoCloudMining.
                </li>
                <li>
                  You should not participate in any activities that may affect the services provided by GoCloudMining and/or the security of the website.
                </li>
                <li>
                  You may not use any means (such as Proxy, Tor, VPN, etc.) to block your network traffic and IP address or use other technical services that may hide the user's real network connection.
                </li>
                <li>
                  Unless otherwise stated, the intellectual property rights of any content displayed on this website, including but not limited to articles, pictures, news, information, website structure, website layout, and website design, belong to GoCloudMining or GoCloudMining's licensor (if any). Users should respect the intellectual property rights of GoCloudMining and GoCloudMining's licensor (if any).
                </li>
                <li>
                  You hereby declare and warrant that your use of the services provided by GoCloudMining will not negatively affect GoCloudMining's reputation or cause GoCloudMining to bear legal liability or other penalties, fines, and sanctions.
                </li>
                <li>
                  You may close your account at any time. However, you will still be obliged to fulfill any outstanding transactions. In addition, you will be responsible to us for any fees incurred before closure.
                </li>
                <li>
                  You understand that the services provided by GoCloudMining are not applicable to the following persons (each a “Restricted Person”):
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>Residents of the following countries or regions: Hong Kong and Mainland China, Crimea, Cuba, Iran, North Korea, Syria,</li>
                    <li>Any entity or person subject to applicable trade sanctions and export compliance laws, or</li>
                    <li>Any entity or individual subject to GoCloudMining’s compliance obligations and internal risk control policies.</li>
                  </ul>
                  <p className="mt-2">
                    The above list is not exhaustive. Before using the services provided by GoCloudMining, please confirm that you are not a restricted person. If you are a restricted person and use the services provided by GoCloudMining, all legal risks and liabilities caused or generated thereby shall be borne by you, and GoCloudMining has the right to refuse to provide services to you, and you have no right to request any refund from GoCloudMining.
                  </p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Liability for Breach of Contract</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  For any violation of this Agreement by the User (including but not limited to the User's failure to pay the package fee in time, the User's use of the services provided by GoCloudMining is illegal in the User's country/region, etc.), GoCloudMining has the right to immediately suspend or terminate the provision of services to the User and take all necessary legal measures within the scope permitted by applicable laws and regulations, including but not limited to pursuing liability for related losses caused to GoCloudMining by the User.
                </li>
                <li>
                  If GoCloudMining reasonably suspects that a user is using the services provided by GoCloudMining in an illegal, fraudulent, or other improper manner, GoCloudMining has the right to suspend the provision of services to the user until the user can provide proof of compliance that satisfies GoCloudMining. GoCloudMining is not responsible for any losses caused by our termination or suspension of your account.
                </li>
                <li>
                  <strong>About credit score:</strong> Credit score is an important indicator to assess your credit status. By upgrading to a higher VIP level, not only will your credit score be improved, but the cloud computing power contract you purchase will also enjoy more favorable benefits. According to company regulations, the standard credit score for basic credit members is 60 points. If you default for a long time, your credit score will be reduced accordingly; if your credit score is lower than 60 points, you must complete credit repair before you can reopen the withdrawal function.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Disclaimer</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  The liability limit of GoCloudMining for the products it provides shall be subject to the service agreement of the product. Unless otherwise agreed, the total liability of GoCloudMining to the user shall not exceed the total amount of fees paid by the user to GoCloudMining.
                </li>
                <li>
                  Due to the particularity of the Internet, GoCloudMining does not guarantee that the service will not be interrupted, nor does it guarantee the timeliness and security of the service. GoCloudMining shall not be liable for any suspension or termination of service caused by circumstances beyond its control, including but not limited to war (whether declared or not), terrorist activities, sabotage, blockade, fire, lightning strike, natural disasters, national strikes, riots, uprisings, civil unrest, quarantine restrictions, epidemics, earthquakes, floods, hurricanes, explosions, and regulatory and administrative actions or delays. In the event of such force majeure events, GoCloudMining shall take reasonable measures to minimize interruptions and losses, but shall not bear any liability caused by or incidental to such force majeure events.
                </li>
                <li>
                  GoCloudMining is not responsible for the failure to save, modify, delete, or store the information posted by users.
                </li>
                <li>
                  Unless expressly agreed in writing by the GoCloudMining platform, the accuracy, completeness, and reliability of the information obtained from this website (including but not limited to through, connecting, or downloading), including but not limited to advertisements, are not guaranteed. GoCloudMining assumes no responsibility for any products, services, information, or materials purchased or obtained by users due to the content information of this website. Users shall bear the risks arising from the use of the information on this website.
                </li>
                <li>
                  GoCloudMining will deliver all notifications to users through regular page announcements, internal mail, email, customer service phone, mobile phone text messages, or regular mail, etc. GoCloudMining does not assume legal responsibility for any activities or information (such as bonuses, discounts, etc.) not obtained through GoCloudMining's regular channels.
                </li>
                <li>
                  The user hereby understands and agrees that: unless GoCloudMining’s prior written consent is obtained, GoCloudMining shall not be liable for the following events and the losses suffered by the user due to the following events under any circumstances:
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>Loss of trading profits.</li>
                    <li>Damage or loss of information/data not caused by intentional misconduct of GoCloudMining.</li>
                    <li>The product/service disappears or exits the market.</li>
                    <li>Implementation or changes in laws, regulations, and policy factors.</li>
                    <li>
                      Users are subject to GoCloudMining’s compliance obligations and/or internal risk control policies based on the information they provide (including but not limited to personal identification information, financial information, and digital asset wallet addresses).
                    </li>
                    <li>
                      Losses caused by the user's fault or violation of the provisions of this Agreement (including but not limited to providing inaccurate information to GoCloudMining, leaking passwords to third parties, etc.).
                    </li>
                    <li>Other events that are not controlled by GoCloudMining.</li>
                  </ul>
                </li>
                <li>
                  You agree and accept that: without duplicating any other rights of recovery or compensation set forth in this Agreement, you shall indemnify and defend GoCloudMining and shall hold GoCloudMining harmless from any losses, liabilities, claims, actions, proceedings, or expenses (collectively, “Losses”, including reasonable attorneys’ fees) arising out of or resulting from your breach of this Agreement.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-400">Various</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong>Waiver:</strong> Any delay or omission in exercising any right or power arising from a user's breach of contract shall not prejudice GoCloudMining's exercise of any right or power, nor shall it be deemed a waiver of any breach or acquiescence therein.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision of this Agreement is held to be illegal or unenforceable, such holding shall not affect the remaining provisions of this Agreement.
                </li>
                <li>
                  <strong>Governing Law:</strong> This Agreement shall be governed in all respects by the laws of England without regard to its conflict of laws principles.
                </li>
                <li>
                  <strong>Conflict Selection:</strong> This Agreement is an important legal document between the Company and users who register as users of the Company and use the Company's services. If other written or oral expressions of the Company or users are inconsistent with this Agreement, this Agreement shall prevail.
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> You acknowledge and agree that before raising any dispute or claim, you will contact us at info@gocloudmining.com to resolve the dispute informally, and we will resolve the relevant dispute internally as soon as possible. The parties agree to negotiate in good faith to resolve any dispute (such negotiations shall be confidential and protected by applicable rules and will not be used as evidence in any litigation).
                  <p className="mt-2">
                    If the negotiation fails, either party shall have the right to submit the dispute to the English Arbitration Centre for arbitration, and the dispute shall be finally resolved in accordance with the English Arbitration Centre Arbitration Rules in force at the time of submission of the arbitration. The arbitration award shall be final and binding on both parties. Unless otherwise determined by the arbitration award, the arbitration costs shall be borne by the losing party. The losing party shall also compensate the winning party for its attorney fees and other expenses.
                  </p>
                </li>
                <li>
                  <strong>Supersede Prior Agreements:</strong> This Agreement supersedes and replaces all prior agreements between you and GoCloudMining regarding the subject matter set forth herein.
                </li>
                <li>
                  <strong>Version:</strong> The English version of this Agreement shall prevail.
                </li>
              </ol>
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

export default TermsOfService;