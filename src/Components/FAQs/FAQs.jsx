import React from "react";
import "../Css/contact.css";
import Accordion from "../Conditions/Accordian";
import Navbar from '../precomponent/Navbar';
import  Footer  from '../precomponent/Footer';
// import Navbar from '../header'
import {Link} from "react-router-dom"
function FAQs() {
  return (
    <>
      <Navbar />
      <div className=" text-white mt-28">
        <div className="text-center py-6">
          <h1 className="text-purple-600 text-xl animated-text">FAQ's</h1>
          <h1 className="text-6xl  font-bold animated-heading">
            Frequently Asked Questions
          </h1>
        </div>
        <div class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
            <Accordion title=" What am I buying?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  ServiceBricks is open source software and is free to use for
                  commercial purposes. Our plans allow you access to our online
                  tools{" "}
                </p>
                <p className="my-3 pt-5 ">
                  The subscription plans above are for:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Using our online tools with artificial intelligence
                    integration
                  </li>
                  <li>
                    Code generation for all supported database providers with
                    unit and integration tests
                  </li>
                  <li>
                    Email support to help your development team with any
                    technical issues
                  </li>
                </ul>
                <p className="my-3 pt-5 ">
                  We work closely with our enterprise customers strategically
                  for new product features.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="Can I use the Cache, Logging, Notification and Security microservices if I don't purchase a subscription?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">Yes!</p>
                <p className="my-3 pt-5 ">
                  These microservices are released open source via the MIT
                  license, the same as ServiceBricks. They are available from
                  the public NuGet feed.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="Is this a subscription or a perpetual license?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  You are purchasing a monthly subscription for the use of our
                  tools.
                </p>
                <p className="my-3 pt-5 ">
                  Any created source code is yours to own.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="What are User Licenses?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  User licenses are needed for for each user of the website.
                  Each user will need their own email address to access our
                  features.
                </p>
                <p className="my-3 pt-5 ">
                  Any user of our website tools must purchase a user license.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="How can I purchase?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">Coming Soon!</p>
                <p className="my-3 pt-5 ">
                  We are getting ready for our first major release and will be
                  launching our subscription plans soon.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="What if I have other questions?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  Just send us an email at 
                  <a
              href="mailto:Support@HoloModular.com"
              className="text-purple-600"
            > Support@HoloModular.com </a>
              and we will
                  be happy to help!
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
     
<Footer/>
    </>
  );
}

export default FAQs;
