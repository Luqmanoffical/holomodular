import React from "react";
import Accordion from "./Accordian.jsx";
import { Link } from "react-router-dom";
// import Navbar from '../precomponent/Navbar';
import  Footer  from '../precomponent/Footer';
import Navbar from '../header'

function Conditions() {
  return (
    <>
    <Navbar/>
      <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 mt-20  text-white">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl py-4 sm:py-6 font-bold text-center">
            Terms and Conditions of Use for{" "}
            <span className="text-purple-600">Service Brick</span>
          </h1>
        </div>
        <div>
          <h2 className="font-bold my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl">
            Last Updated: [ October 21, 2024]
          </h2>
          <p className="my-2 font-thin sm:my-3 md:my-4 lg:my-5 xl:my-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
            The use of HoloModular.com, ServiceQuery.com, or ServiceBricks.com
            (collectively, “Site”) or any other site owned or maintained by
            HoloModular, LLC, a limited liability company (“Company”), organized
            and existing under the laws of the State of Florida is governed by
            the policies, terms and conditions set forth below. You (“User”)
            should read them carefully. Your use of this site signifies your
            acceptance of the terms and conditions set forth below. Your account
            created and/or an order placed on this site signifies your
            acceptance of the terms and conditions set forth below.
            <span className="font-bold">
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
              USE IMMEDIATELY.
            </span>
          </p>
        </div>
        <div className="my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 ">
          <Accordion title="Intellectual Property Rights">
            <div>
              <h2 className="my-3 pt-5 font-bold">
              a. Trademarks/Service marks 
              </h2>
              <p className= " mb-6">HOLOMODULAR<sup>TM</sup>, SERVICEQUERY<sup>TM</sup>, and SERVICEBRICKS<sup>TM</sup> (the “Marks”) are service/trademarks of the Company. 
    These marks and other HOLOMODULAR.COM graphics, logos, services marks, and trademarks of the Company 
    may not be used without prior written consent of the Company. </p>
              <h2 className="my-3 font-bold">	b.  Proprietary Property</h2>
              <p className= " mb-6">
              User acknowledges that HoloModular.com, ServiceQuery.com, and ServiceBricks.com contain information, data, software, photographs, graphs, videos, typefaces, graphics, music, sounds and other material (collectively, “Content”) that are protected by copyrights, trademarks, trade secrets, or other proprietary rights, and that these rights are valid and protected in all forms, media and technologies existing now or hereinafter developed. All Content is copyrighted as a collective work under the U.S. copyright laws, and Company owns a copyright in the selection, coordination, arrangement, and enhancement of such Content. User may not modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any of the Content, in whole or in part. If no specific restrictions are displayed, User may make copies of select portions of the Content, provided that the copies are made only for User's personal use and that User maintains any notices contained in the Content, such as all copyright notices, trademark legends, or other proprietary rights notices. Except as provided in the preceding sentence or as permitted by the fair use privilege under the U.S. Copyright laws (see, e.g., 17 U.S.C.A. Section 107), User may not upload, post, reproduce, or distribute in any way Content protected by copyright, or other proprietary right, without obtaining permission of the owner of the copyright or other proprietary right. In addition to the foregoing, use of any software Content shall be governed by the software license agreement accompanying such software.</p>

            </div>
          </Accordion>

          <Accordion title="User Representations">
            <div>
              <p className= " mb-6">HBy using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation. </p>
              <p className= " mb-6">
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
              </p>

            </div>
          </Accordion>

          <Accordion title=" User Registration">
            <div>
              <p className= " mb-6">
              You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                   </p>

            </div>
          </Accordion>
          <Accordion title=" Prohibited Activities">
            <div>
              <p className= " mb-6">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

<p className= " mb-6">
As a user of the Site, you agree not to:
</p>
<ul className="list-disc pl-5">
  <li className= " mb-2">
  	Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
  </li>
  <li className= " mb-2">
  	Trick, defraud, or mislead Company or other users, especially in any attempt to learn sensitive account information such as user passwords.
  </li>
  <li className= " mb-2">
  	Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.
  </li>
  <li className= " mb-2">
  	Disparage, tarnish, or otherwise harm, in Company’s opinion, Company and/or the Site.
  </li>
  <li className= " mb-2">
  	Use any information obtained from the Site in order to harass, abuse, or harm another person.
  </li>
  <li className= " mb-2">
  Make improper use of Company’s support services or submit false reports of abuse or misconduct.
  </li>
  <li className= " mb-2">
  	Use the Site in a manner inconsistent with any applicable laws or regulations.
  </li>
  <li className= " mb-2">
  Engage in unauthorized framing of or linking to the Site.
  </li>
  <li className= " mb-2">
  Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
  </li>
  <li className= " mb-2">

  	Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
  </li>
  <li className= " mb-2">
  	Delete the copyright or other proprietary rights notice from any Content.
  </li>
  <li className= " mb-2">
  	Attempt to impersonate another user or person or use the username of another user.
  </li>
  <li className= " mb-2">
  Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).
  </li>
  <li className= " mb-2">
  Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.
  </li>
  <li className= " mb-2">
  	Harass, annoy, intimidate, or threaten any of Company’s employees or agents engaged in providing any portion of the Site to you.
  </li>
  <li className= " mb-2">
  	Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.
  </li>
  <li className= " mb-2">
  	Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
  </li>
  <li className= " mb-2">
  Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
  </li>
  <li className= " mb-2">
  	Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
  </li>
  <li className= " mb-2">
  Use a buying agent or purchasing agent to make purchases on the Site.
  </li>
  <li className= " mb-2">
  Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
  </li>
  <li className= " mb-2">
  	Use the Site as part of any effort to compete with Company or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise without being licensed or authorized to do so by Company.
  </li>
  <li className= " mb-2">
  Use the Site to advertise or offer to sell goods and services.
  </li>
  <li className= " mb-2">
  	Sell or otherwise transfer your profile.
  </li>
</ul>
            </div>
          </Accordion>

          <Accordion title=" User Generated Contributions">
            <div>
              <p className= " mb-6">
              The Site may invite you to contribute or share data models, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to Company or on the Site, including but not limited to text, writings,  or personal information or other material (collectively, “Contributions”). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you grant Company a non-exclusive, royalty-free, worldwide license to copy, distribute, display, perform, modify, and make derivative versions of such Contributions, and you thereby represent and warrant that:     </p>
<ul>
  <li>
  	The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
     </li>
  <li>
  	You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize Company, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.
  </li>
  <li>
  	You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.
  </li>
  <li>
  	Your Contributions are not false, inaccurate, or misleading.
  </li>
  <li>
  	Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
  </li>
  <li>
  Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by Company).
  </li>
  <li>
  	Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
  </li>
  <li>
  	Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
  </li>
  <li>
  Your Contributions do not violate any applicable law, regulation, or rule.
  </li>
  <li>
  	Your Contributions do not violate the privacy or publicity rights of any third party.
  </li>
  <li>
  Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
  </li>
  <li>
  	Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
  </li>
  <li>
  	Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.
  </li>
</ul>
<p>
Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.
</p>
            </div>
          </Accordion>
  

          <Accordion title="Guidelines for Reviews">
            <div>
              <p className= " mb-6">
                We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the subject being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
                 </p>
              <p className= " mb-6">
              Company may accept, reject, or remove reviews in Company’s sole discretion. By posting a review, you hereby grant to Company a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.
              </p>

            </div>
          </Accordion>

          <Accordion title=" Social Media">
            <div>
              <p className= " mb-6">
              As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to Company and/or grant Company access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating Company to pay any fees or making Company subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
              <span className="font-bold mx-1">
              PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. 

                </span>               </p>
             

            </div>
          </Accordion>


          <Accordion title="Submissions">
            <div>
              <p className= " mb-6">
              You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (“Submissions”) provided by you to Company are non-confidential and shall become Company’s sole property. Company shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original to you or that you have the right to submit such Submissions. You agree there shall be no recourse against Company for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                    </p>
              
            </div>
          </Accordion>



          <Accordion title="Third-Party Website and Content">
            <div>
              <p className= " mb-6">
The Site may contain (or you may be sent via the Site) links to other websites (“Third-Party Websites”) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (“Third-Party Content”). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by Company, and Company is not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by Company. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and Company takes no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that Company does not endorse the products or services offered on Third-Party Websites and you shall hold Company harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold Company harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                    </p>
              
            </div>
          </Accordion>

          <Accordion title=" Site Management">
            <div>
              <p className= " mb-6">
              Company reserves the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in Company’s sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in Company’s sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in Company’s sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to Company’s systems; and (5) otherwise manage the Site in a manner designed to protect Company’s rights and property and to facilitate the proper functioning of the Site.
                                  </p>
              
            </div>
          </Accordion>

          <Accordion title=" Privacy Policy">
            <div>
              <p className= " mb-6">
              Company cares about data privacy and security. Please review Company’s Privacy Policy: https://HoloModular.com/privacy. By using the Site, you agree to be bound by Company’s Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States.
                                  </p>
              
            </div>
          </Accordion>

          
          <Accordion title=" Digital Millennium Copyright Act (DMCA) Notice and Policy">
            <div>
              <p className= " mb-6">
              Company respects the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify Company’s Designated Copyright Agent using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
                                     </p>
              
                                     <p className= " mb-6">
                                     All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information: (1) A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (2) identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Site are covered by the Notification, a representative list of such works on the Site; (3) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Company to locate the material; (4) information reasonably sufficient to permit Company to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted; (5) a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (6) a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.
                                                             </p>
              <div className=" test-center">
                <p className="font-bold ">Designated Copyright Agent</p>
                <p className="font-bold ">Danny Logsdon</p>
                <p className="font-bold ">Attn: Copyright Agent</p>
                <p className="font-bold "> 5620 Crest Creek Drive</p>
                <p className="font-bold ">Jacksonville, FL 32258</p>
                <p className="font-bold ">United States</p>
                <p className="text-purple-600 hover:underline "  ><Link href="mailto:support@holomodular.com" > support@holomodular.com </Link> </p>

              </div>
            </div>
          </Accordion>

          <Accordion title=" Term and Termination">
            <div>
              <p className= " mb-6">
These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, COMPANY RESERVES THE RIGHT TO, IN COMPANY’S SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. COMPANY MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN COMPANY’S SOLE DISCRETION.
                                  </p>
<p  className= " mb-6">
  	If Company terminates or suspends your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, Company reserves the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
    </p>              
            </div>
          </Accordion>


          <Accordion title=" Modifications and Interruptions">
            <div>
              <p className= " mb-6">
              Company reserves the right to change, modify, or remove the contents of the Site at any time or for any reason at Company’s sole discretion without notice. However, Company has no obligation to update any information on Company’s Site. Company also reserves the right to modify or discontinue all or part of the Site without notice at any time. You are responsible for regularly reviewing this Agreement. Continued use of the Service after any such changes shall constitute your consent to such changes. Company will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. 
	
                                  </p>
<p  className= " mb-6">
Company cannot guarantee the Site will always be available. Company may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. Company reserves the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that Company has no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate Company to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
    </p>              
            </div>
          </Accordion>

          <Accordion title=" Governing Law">
            <div>
              <p className= " mb-6">

              These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Florida in the United States of America without regard to its conflict of law principles.	
                                  </p>
            </div>
          </Accordion>

          <Accordion title="Venue and Jurisdiction for Disputes">
            <div>
              <p className= " mb-6">
              Any legal suit, action, or proceeding arising out of or relating to these Terms of Use shall be instituted in the federal courts of the United States of America or the state courts of the State of Florida, in each case located in the County of Duval, State of Florida. You irrevocably submit to the exclusive jurisdiction of such courts in any such legal suit, action, or proceeding. 

                                  </p>
            </div>
          </Accordion>

          <Accordion title="Corrections">
            <div>
              <p className= " mb-6">
              There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. Company reserves the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.     	
                                  </p>
            </div>
          </Accordion>

          <Accordion title="Disclaimer">
            <div>
              <p className= " mb-6">
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND COMPANY’S SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND COMPANY WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.                                  </p>
            </div>
          </Accordion>

          <Accordion title="Limitations of Liability">
            <div>
              <p className= " mb-6">
              IN NO EVENT WILL COMPANY OR COMPANY’S DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, COMPANY’S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO COMPANY FOR THE PRECEDING SIX (6) MONTHLY SUBSCRIPTION PERIODS PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN U.S. STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
</p>
            </div>
          </Accordion>


          <Accordion title="Indemnification">
            <div>
              <p className= " mb-6">
              You agree to defend, indemnify, and hold Company harmless, including Company’s subsidiaries, affiliates, and all of Company’s respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) your use of the Site; (3) your breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act by you toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Company, and you agree to cooperate, at your expense, with Company’s defense of such claims. Company will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.

</p>
            </div>
          </Accordion>

          <Accordion title="User Data">
            <div>
              <p className= " mb-6">
              
              Company will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although Company performs regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that Company shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against Company arising from any such loss or corruption of such data.
</p>
            </div>
          </Accordion>

          <Accordion title=" Electronic Communications, Transactions and Signatures">
            <div>
              <p className= " mb-6">
              Visiting the Site, sending Company emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications Company provides to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO THE ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY COMPANY OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
</p>
            </div>
          </Accordion>
          <Accordion title=" California Users and Residents">
            <div>
              <p className= " mb-6">
              If any complaint with Company is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210.
</p>
            </div>
          </Accordion>
        
          <Accordion title=" Miscellaneous">
            <div>
              <p className= " mb-6">
                These Terms of Use, the Privacy Policy, any policies or operating rules posted by Company on the Site or in respect to the Site, and any software, application, or platform licenses between You and Company constitute the entire agreement and understanding between you and Company. Company’s failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. Company may assign any or all Company’s rights and obligations to others at any time. Company shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond Company’s reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and Company because of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against Company by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.

              </p>
            </div>
          </Accordion>

          <Accordion title=" Contact Us">
            <div>
            <div className=" test-center">
                <p className="font-bold ">Holomodular, LLC</p>
                <p className="font-bold ">5620 Crest Creek Drive</p>
                <p className="font-bold ">Jacksonville, FL 32258</p>
                <p className="font-bold "> United States</p>
                <p className="font-bold ">410-493-1879</p>
                <p className="text-purple-600 hover:underline "  ><Link href="mailto:support@holomodular.com" > support@holomodular.com </Link> </p>

              </div>
            </div>
          </Accordion>
        </div>
      </div>
<Footer/>
    </>
  );
}

export default Conditions;
