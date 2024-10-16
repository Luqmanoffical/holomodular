import Navbar from '../precomponent/Navbar';
// import Navbar from '../header'

import  Footer  from '../precomponent/Footer';
import React, { useState, useEffect } from "react";

import Typing from "react-typing-effect";
import "../Css/privacy.css";

import {Link} from "react-router-dom"


function Privacy() {
  const [openSection, setOpenSection] = useState(null);
  const [typingComplete, setTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  useEffect(() => {
    if (typingComplete) {
      const timer = setTimeout(() => setTypingComplete(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [typingComplete]);

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="overflow-hidden text-white">
      <Navbar/>
      <div className="mt-28 text-white p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl  font-bold  ">
            Privacy Policy for
            <Typing
              className={`px-2 text-purple-600 ${
                typingComplete ? "typing-complete" : "typing-active"
              }`}
              text={["HOLOMODULAR, LLC "]}
              speed={100}
              eraseSpeed={50}
              typingDelay={1000}
              eraseDelay={5000}
              onFinishedTyping={handleTypingComplete}
            />
          </h1>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-8 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
        <div className="p-4 !font-thin sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <h2 className="  text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-2 sm:mb-3 font-bold md:mb-4 lg:mb-5 xl:mb-6">
            Last Updated: [October 21, 2024]
          </h2>
          <p className="text-sm sm:text-base md:text-lg pb-4 lg:text-xl xl:text-xl">
            Thank you for choosing to be part of our community at HoloModular,
            LLC (“Company,” “we,” “us,” or “our”). We are committed to
            protecting your personal information and your right to privacy. If
            you have any questions or concerns about this privacy policy or our
            practices regarding your personal information, please contact us at{" "}
            <a
              href="mailto:Support@HoloModular.com"
              className="text-purple-600"
            >
              Support@HoloModular.com{" "}
        
            </a>{" "}
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
            This Customer Privacy Policy covers the collection, use, and
            disclosure of personal information that may be collected by the
            Company anytime you interact with the Company, such as when you
            visit our web sites (HoloModular.com, ServiceQuery.com,
            ServiceBricks.com), when you purchase the Company's products and
            services online, or when you call our sales or support associates.
            Please take a moment to carefully read the following to learn more
            about our information practices, including what type of information
            is gathered, how the information is used and for what purposes, to
            whom we disclose the information, and how we safeguard your personal
            information. Your privacy is a priority at the Company, and we go to
            great lengths to protect it.
          </p>
        </div>

        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <Section
            isOpen={openSection === "Company"}
            onToggle={() => handleToggleSection("Company")}
            title="1. Reasons the Company Collects Personal Information"
            content={
              <>
                {/* <h2 className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                  a. Personal Information:
                </h2> */}
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  We collect your personal information because it helps us
                  deliver a superior level of customer service. It enables us to
                  give you convenient access to our products and services and
                  focus on categories of greatest interest to you. In addition,
                  your personal information helps us keep you posted on the
                  latest product announcements, special offers, and events that
                  you might like to hear about.{" "}
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  If you do not want the Company to keep you up to date with our
                  news and the latest information on products and services, log
                  into your account and update your personal contact information
                  and preferences.
                </p>
              </>
            }
          />
          <Section
            isOpen={openSection === "info"}
            onToggle={() => handleToggleSection("info")}
            title="2. Information the Company Collects and How the Information May be Used"
            content={
              <>
                {/* <h2 className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                  a. Personal Information:
                </h2> */}
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  There are several situations in which your personal
                  information may help us give you better products and service.
                  For example:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    We may ask for your personal information when you're
                    discussing a service issue on the phone with an associate,
                    participating in an online survey, registering your
                    products, or purchasing a product.
                  </li>
                  <li>
                    When you interact with the Company, we may collect personal
                    information relevant to the situation, such as your name,
                    mailing address, phone number, email address, and contact
                    preferences; your credit card information and information
                    about the Company products you own, such as their serial
                    numbers and date of purchase; and information relating to a
                    support or service issue.
                  </li>
                  <li>
                    We also collect information for market research purposes —
                    such as your occupation and where you use your Company
                    products —to gain a better understanding of our customers
                    and thus provide a more valuable service.
                  </li>
                  <li>
                    We collect information regarding customer activities on our
                    web sites. This helps us to determine how best to provide
                    useful information to customers and to understand which
                    parts of our web sites, products, and Internet services are
                    of most interest to them.
                  </li>
                  <li>
                    We may use personal information to provide products that you
                    have requested as well as for auditing, research, and
                    analysis to improve our products.
                  </li>
                </ul>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  This information may be shared with third parties or in
                  special circumstances as described elsewhere in this policy.
                </p>
              </>
            }
          />
          <Section
            isOpen={openSection === "Online"}
            onToggle={() => handleToggleSection("Online")}
            title="3. Your Online Company ID and Related Information"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  Our web sites allow you to create a HoloModular ID based on
                  your personal information. This convenient service saves you
                  time and allows for easier use of our web services. To create
                  your HoloModular ID you will need to create a personal profile
                  by providing your name, phone number, email address, and in
                  some cases your mailing address or a credit card number. The
                  system saves the information in your personal profile and
                  assigns you your own unique personal HoloModular ID which you
                  can use when performing various activities relating to our web
                  sites and the products and services you purchase from the
                  Company.
                </p>
              </>
            }
          />

          <Section
            isOpen={openSection === "Gift"}
            onToggle={() => handleToggleSection("Gift")}
            title="4. Gift Cards and Services"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  The Company also enables you to purchase and send gift
                  certificates and products to family members, friends or
                  colleagues. To fulfill your request, the Company may require
                  personal information about the person to whom you are sending
                  the product or service such as their name, physical address,
                  email address, and so on. The personal information you provide
                  about that person is used only for the purpose for which it is
                  collected. The Company will not use the information collected
                  to market directly to that person.
                </p>
              </>
            }
          />

          <Section
            isOpen={openSection === "Gif"}
            onToggle={() => handleToggleSection("Gif")}
            title="5. Publicly Displayed Information is Public"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  If you use a bulletin board or chat functionality on our web
                  sites, you should be aware that any information you share is
                  visible to other users. Personally identifiable information
                  you submit to one of these forums can be read, collected, or
                  used by other individuals to send you unsolicited messages.
                  The Company is not responsible for the personally identifiable
                  information you choose to submit in these forums. For example,
                  if you choose to make information which was previously
                  nonpublic, available by enabling certain user features, the
                  Company will collect that information from your interaction
                  and the information will become publicly available.
                </p>
              </>
            }
          />

          <Section
            isOpen={openSection === "discloses"}
            onToggle={() => handleToggleSection("discloses")}
            title="6. When the Company Discloses Your Information"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  The Company takes your privacy very seriously. The Company
                  does not sell or rent your contact information to other
                  marketers. To help us provide superior service, your personal
                  information may be shared with legal entities within our
                  corporate group who will take steps to safeguard it in
                  accordance with our privacy policy.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  There are also times when it may be advantageous for the
                  Company to make certain personal information about you
                  available to companies that the Company has a strategic
                  relationship with or that perform work for the Company to
                  provide products and services to you on our behalf. These
                  companies may help us process information, extend credit,
                  fulfill customer orders, deliver products to you, manage and
                  enhance customer data, provide customer service, assess your
                  interest in our products and services or conduct customer
                  research or satisfaction surveys. In such situation these
                  companies are prohibited from using your personal information
                  for any unauthorized purposes and are also obligated to
                  protect your information in accordance with the Company's
                  policies, except if we inform you otherwise at the time of
                  collection. Without such information being made available, it
                  would be difficult for you to purchase products, have products
                  delivered to you, receive customer service, provide us
                  feedback to improve our products and services, or access
                  certain services, offers, and content on our web sites.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  The Company may take the personal information we receive from
                  individuals responding to our customer surveys and combine (or
                  aggregate) it with the responses of other customers we may
                  have, to create broader, generic responses to the survey
                  questions (such as gender, age, residence, hobbies, education,
                  employment, industry sector, or other demographic
                  information). The Company then uses the aggregated information
                  to improve the quality of its services to you, and to develop
                  new services and products. This aggregated non personally
                  identifying information may be shared with third parties.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  We also reserve the right to disclose your personal
                  information for any reason if, in our sole discretion, we
                  believe that it is reasonable to do so, including credit
                  agencies, collection agencies, merchant database agencies, law
                  enforcement, litigation or to satisfy laws, such as the
                  Electronic Communications Privacy Act, the Child Online
                  Privacy Act, regulations, or governmental or legal requests
                  for such information. We may also disclose personal
                  information that is necessary to identify, contact, or bring
                  legal action against someone who may be violating our
                  contracts, policies and procedures. Finally, we may also
                  disclose information about you if we determine that for
                  national security, law enforcement, or other issues of public
                  importance, disclosure is necessary.
                </p>
              </>
            }
          />

          <Section
            isOpen={openSection === "ift"}
            onToggle={() => handleToggleSection("ift")}
            title="7. How the Company Protects Your Personal Information"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  The Company takes precautions—including administrative,
                  technical, and physical measures—to safeguard your personal
                  information against loss, theft, and misuse, as well as
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  Our web sites use Secure Sockets Layer (SSL) encryption on all
                  web pages where personal information is required and to make
                  online purchases you must use an SSL-enabled browser to
                  protect the confidentiality of your personal and credit card
                  information while it's transmitted over the Internet. You can
                  help us by also taking precautions to protect your personal
                  data when you are on the Internet. Change your passwords often
                  using a combination of letters and numbers, and make sure you
                  use a secure web browser.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  While we make every effort to ensure the integrity and
                  security of our network and systems, we cannot guarantee that
                  our security measures will prevent third-party “hackers” from
                  illegally obtaining your personal information.
                </p>
              </>
            }
          />

          <Section
            isOpen={openSection === "Integrity"}
            onToggle={() => handleToggleSection("Integrity")}
            title="
8. Integrity of Your Personal Information
"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  The Company has safeguards in place to keep your personal
                  information accurate, complete, and up to date for the
                  purposes for which it is used. You always have the right to
                  access and correct the personal information you have provided
                  and can help us ensure that your contact information and
                  preferences are accurate, complete, and up to date by checking
                  at http://HoloModular.com/Account or your account page at
                  ServiceQuery.com or ServiceBricks.com.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  In addition, you can request a copy of your personal
                  information, your product registration history, and your
                  interactions with our sales and support agents by contacting
                  us at 
                  <a
              href="mailto:Support@HoloModular.com"
              className="text-purple-600"
            >
                   Support@HoloModular.com.{" "}
                   </a>   </p>
              </>
            }
          />


<Section
            isOpen={openSection === "CHILDS"}
            onToggle={() => handleToggleSection("CHILDS")}
            title="9.  Privacy of Children
"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                YOU MUST BE EIGHTEEN (18) YEARS OR OLDER TO ACCESS THE COMPANY'S WEBSITE. IF YOU ARE UNDER EIGHTEEN YEARS OF AGE, YOU ARE NOT PERMITTED TO ACCESS THE COMPANY'S WEB SITES FOR ANY REASON. DUE TO THE AGE RESTRICTIONS FOR USE OF THAT WEBSITE, NO INFORMATION OBTAINED BY THAT WEBSITE FALLS WITHIN THE CHILDREN'S ONLINE PRIVACY PROTECTION ACT OF 1998 AND IS NOT MONITORED AS DOING SO. </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                Protecting children's privacy is especially important to us. The Company recognizes that parents, 
guardians, or other adults often purchase our products for family use, including use by minors. We do not knowingly collect personal information from children under 13 for marketing purposes, but because some information is collected electronically, it can appear to be the personal information of the purchaser of the product and will be treated as such by this privacy policy. If a child under 13 submits personal information to the Company and we learn that that personal information is the information of a child under 13, we will attempt to delete the information as soon as possible. It is our policy to comply with the Children's Online Privacy Protection Act of 1998 and all other applicable laws. Therefore, we restrict our web sites to people 18 years or older.
</p>
              </>
            }
          />


<Section
            isOpen={openSection === "Your"}
            onToggle={() => handleToggleSection("Your")}
            title="10. Cookies and Other Technologies
"
            content={
              <>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                As is standard practice on many corporate web sites, our web sites use “cookies” and other 
technologies to help us understand which parts of our web sites are the most popular, where our visitors are going, and how much time they spend there. We also use cookies and other technologies to make sure that our online advertising is bringing customers to our products and services. We use cookies and other technologies to study traffic patterns on our web sites, to make it even more rewarding as well as to study the effectiveness of our customer communications. And we use cookies to customize your experience and provide greater convenience each time you interact with us.
</p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                If, however, you prefer not to enable cookies, please go to www.HoloModular.com/cookies which explains step by step how you can disable cookies. Please note that certain features of our web sites will not be available once cookies are disabled.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                As is true of most web sites, we gather certain information automatically and store it in log files. This information includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data. We use this information, which does not identify individual users, to analyze trends, to administer the site, to track users' movements around the site and to gather demographic information about our user base. The Company will not use the information collected to market directly to that person.
                </p>
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                In some of our email messages we use a “click-through URL” linked to content on our web sites. When customers click one of these URLs, they pass through our web server before arriving at the destination web page. We track this click-through data to help us determine interest in particular topics and measure the effectiveness of our customer communications. If you prefer not to be tracked simply avoid clicking text or graphic links in the email.               </p>
              
                <p className="my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                In addition, we use pixel tags—tiny graphic images—to tell us what parts of our web sites customers have visited or to measure the effectiveness of searches customers perform on our site. Pixel tags also enable us to send email messages in a format customers can read. And they tell us whether emails have been opened to ensure that we're sending only messages that are of interest to our customers. We may use this information to reduce or eliminate messages sent to a customer. We store   this information in a secure database located in Florida in the United States.
                      </p>
              
              
              
              </>

            }
          />

<Section
            isOpen={openSection === "Commitment"}
            onToggle={() => handleToggleSection("Commitment")}
            title="11. Commitment to Your Privacy
"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                As we said, the Company takes protecting your privacy very seriously. To make sure your personal information is secure, we communicate these guidelines to our employees and strictly enforce privacy safeguards within the company. In addition, the Company supports industry initiatives, such as TRUSTe, to preserve privacy rights on the Internet and in all aspects of electronic commerce.
                
                </p>
              
              </>
            }
          />


<Section
            isOpen={openSection === "International"}
            onToggle={() => handleToggleSection("International")}
            title="12. International Users
"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
               The Company abides by the safe harbor framework set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information collected from the European Union. 
                </p>
              
              </>
            }
          />


<Section
            isOpen={openSection === "Links"}
            onToggle={() => handleToggleSection("Links")}
            title="13. Links to Sites of Other Companies
"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
               Our web sites have links to the sites of other companies. We are not responsible for their privacy practices. We encourage you to learn about the privacy policies of those companies. </p>
              
              </>
            }
          />

          
<Section
            isOpen={openSection === "Question"}
            onToggle={() => handleToggleSection("Question")}
            title="14.  Further Question Regarding Privacy
"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
               If you have question or concerns about the Company’s Customer Privacy Policy or data processing, please contact us at 
               <a
              href="mailto:Support@HoloModular.com"
              className="text-purple-600"
            >Support@HoloModular.com </a>. The Company’s Data Controller will respond to your inquiry within 30 days.
	
               </p>
               <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
  If you do not want the Company to keep you up to date with Company news and the latest information on products and services, log into your account and update your personal contact information and preferences. Naturally, if you notify us that you do not want us to use your information for a particular purpose, we will not do so.

</p>
              

              </>
            }
          />

<Section
            isOpen={openSection === "Effective"}
            onToggle={() => handleToggleSection("Effective")}
            title="15. Effective Date; Updates to Privacy Policy"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
              The terms and conditions in this policy statement came into effect on October 21, 2024. The Company reserves the right to revise, amend, or modify this policy at any time and in any manner. When we change the policy in a material way a notice will be posted on our web sites along with the updated privacy policy. Your use of our web sites and any other services provided by the Company after such changes are implemented constitutes your acknowledgement and acceptance of these changes. Please consult this privacy statement prior to every use for any changes.
              
              </p>
              
              </>
            }
          />


<Section
            isOpen={openSection === "Residents"}
            onToggle={() => handleToggleSection("Residents")}
            title="16. Notice of Compliance to California Residents"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
         California law requires that we provide you with a summary of your privacy rights under the California Online Privacy Protection Act (“California Act”) and the California Business and Professions Code. As required by the California Act, this privacy policy identifies the categories of personally identifiable information that we collect through our web sites about individual consumers who use or visit our web sites and the categories of third-party persons or entities with whom such personally identifiable information may be shared.
	     
              </p>

              <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
         California law requires that we provide you with a summary of your privacy rights under the California Online Privacy Protection Act (“California Act”) and the California Business and Professions Code. As required by the California Act, this privacy policy identifies the categories of personally identifiable information that we collect through our web sites about individual consumers who use or visit our web sites and the categories of third-party persons or entities with whom such personally identifiable information may be shared.
	     
              </p>
              
              <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
           Depending on the visitor's activity at our web sites, certain “personally identifiable information” (as that term is defined in the California Act) may be collected, in addition to information set forth in other sections of this document. For purposes of the California Act, the term “personally identifiable information” means individually identifiable information about an individual consumer collected online by us from an individual and maintained by us in an accessible form, and may include any of the following:
            
              </p>

              <ul className="list-disc pl-5">
               <li>
               	A first and last name; 
               </li>
               <li>	A home or other physical address, including street name and name of a city or town;</li>
               <li>	An email address;	</li>
               <li>A telephone number;</li>
               <li>Any other identifier that permits the physical or online contacting of a specific individual;</li>
               <li>	Information concerning a user that the web sites collect online from the user, and maintains in personally identifiable form, in combination with an identifier described within this privacy policy.</li>
                </ul>
                <p className="my-2  
          font-mono   sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
           See Section 8 above entitled “Integrity of Your Personal Information” for a description of the process maintained by the Company for an individual consumer who uses or visits our web sites to review and request changes to any of his or her personally identifiable information that is collected through our web sites.
	 
              </p>
              <p className="my-2  
          font-mono   sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
See Section 15 above entitled “Effective Date; Updates to Privacy Policy” for a description of the process by which the Company notifies consumers who use or visit our web sites of material changes to the Company's privacy policy. The effective date of this privacy policy is also included in Section 15 above.              </p>

          </>
            }
          />


<Section
            isOpen={openSection === "Notice"}
            onToggle={() => handleToggleSection("Notice")}
            title="17. How Can You Contact Us About this Notice?"
            content={
              <>
                <p className="my-2  
                 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">If you have questions or comments about this notice, you may contact our Data Protection Officer (DP), Danny Logsdon, by email at 
                   <a
                 href="mailto:Support@HoloModular.com"
                 className="text-purple-600"
               >
                  Support@HoloModular.com
                  </a>  , by phone at 410-493-1879 or by US Mail to:
              </p>
             <div className=" font-bold">
              <p>
              HoloModular, LLC
              </p>
              
              <p>
              Danny Logsdon
              </p>
              
              <p>
              5620 Crest Creek Drive
              </p>
              
              <p>
              Jacksonville, FL  32258 </p>
              </div>   </>
            }
          />

        </div>
      </div>



<Footer/>

    </div>
  );
}

const Section = ({ isOpen, onToggle, title, content }) => (
  <div
    className={`border-2 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-8 ${
      isOpen ? "border-purple-600 border border-y" : ""
    }`}
  >
    <h1
      className="text-2xl font-semibold p-4 cursor-pointer"
      onClick={onToggle}
    >
      {title}
    </h1>
    {isOpen && (
      <div className="p-4 bg-[#260a471f]">
        {content}
        <button
          onClick={onToggle}
          className="bg-transparent text-purple-600   py-2 px-4 mt-4 hover:text-white transition-all duration-300"
        >
          CLOSE
        </button>
      </div>
    )}
    {!isOpen && (
      <button
        onClick={onToggle}
        className="bg-transparent text-purple-600   py-2 px-4 mt-4 hover:text-white transition-all duration-300"
      >
        READ MORE
      </button>
    )}
  </div>
);

export default Privacy;
