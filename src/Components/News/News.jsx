import React, { useState, useEffect } from "react";
import icons from "../../assets/icon.png"
import Navbar from '../precomponent/Navbar';
import  Footer  from '../precomponent/Footer';
import "../Css/privacy.css";
// import Navbar from '../header'


function News() {
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

  return (
    <div className=" text-white">
 
<Navbar/>  
<div className="absolute top-0  w-full aspect-square bg-radial-gradient from-[#341947] to-[#28206C]/0 to-70% pointer-events-none" />
      <div className="p-4 mt-28 sm:p-6 md:p-8 lg:p-6 xl:p-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-600 xl:text-6xl font-bold">
          Latest News
          </h1>
        </div>
      </div>

      <div className=" relative px-4  sm:px-6 md:px-8 lg:px-10 xl:px-8 mx-2 sm:mx-4 md:mx-6 lg:mx-6 xl:mx-6">

      <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> ServiceBricks Achieves 85.12% Test Code Coverage</span>
            <span className="text-xs font-thin">
            9/3/2024
            </span>
          </h6>
          <div className="p-4 ">
          <p>
          Regression testing of our product has been going well and we have achieved 85.12% test code coverage in our latest pre-release. Visit our ServiceBricks GitHub page for more information. We are on track for our first major version before the end of the year!   
                 </p>
          </div>
        </div>

        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> ServiceBricks Release v1.0.11</span>
            <span className="text-xs font-thin">
            7/30/2024
            </span>
          </h6>
          <div className="p-4 ">
          <p>
          This release includes many updates to our core framework and free microservices. View all release notes on our ServiceBricks GitHub page for more information. We have also updated our website and AI-generation to begin using the new released version as well. We are nearly ready for our first major release. More information to come soon.
                 </p>
          </div>
        </div>

        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> Welcome our Partner, StackOverflow</span>
            <span className="text-xs font-thin">
            7/1/2024            </span>
          </h6>
          <div className="p-4 ">
          <p>
          We are a proud partner of StackOverflow. StackOverflow.com is best known for our public Q&A platform that millions of people visit every month to ask questions, learn, and share technical knowledge.        </p>
          </div>
        </div>


        
        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> Build Microservices Online using Artificial Intelligence</span>
            <span className="text-xs font-thin">
            6/5/2024          </span>
          </h6>
          <div className="p-4 ">
          <p>
          You can now build microservices online using our AI-driven generator. Create microservices in seconds and download the source code to use in your projects immediately. Increase your productivity and build foundations quickly using our online tools. Register your free online account today.You can now build microservices online using our AI-driven generator. Create microservices in seconds and download the source code to use in your projects immediately. Increase your productivity and build foundations quickly using our online tools. Register your free online account today.        </p>
          </div>
        </div>
        

        
        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> Welcome our Partner, DZone</span>
            <span className="text-xs font-thin">
            6/3/2024            </span>
          </h6>
          <div className="p-4 ">
          <p>
          We are a proud partner of DZone. DZone.com is one of the world's largest online communities and leading publisher of knowledge resources for software engineering professionals. DZone serves technology professionals with the knowledge, tools, and strategies they need to build the future. Look out for our featured articles and resources coming soon.</p>
          </div>
        </div>
        


        
        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> Introducing ServiceBricks</span>
            <span className="text-xs font-thin">
            6/3/2024        </span>
          </h6>
          <div className="p-4 ">
          <p>
          It is with great pleasure that we are announcing the official release of ServiceBricks on GitHub! ServiceBricks is a powerful open source microservices platform designed to streamline the development, deployment, and maintenance of distributed systems. We are excited to see what you will build with it.</p>
          </div>
        </div>
        


        
        <div className="border-2 py-4 border-transparent hover:border-t-purple-600 hover:border-b-purple-600 transition-all duration-300 mb-3">
          <h6 className="text-2xl font-semibold px-4 flex justify-between cursor-pointer">
            <span className="flex text-gray-300"> <img src={icons} alt="icon" className="h-6 w-auto mr-6" /> Welcome our Partner, StackOverflow</span>
            <span className="text-xs font-thin">
              4/27/2024            </span>
          </h6>
          <div className="p-4 ">
          <p>
          We are a proud partner of StackOverflow. StackOverflow.com is best known for our public Q&A platform that millions of people visit every month to ask questions, learn, and share technical knowledge.        </p>
          </div>
        </div>
        


      </div>
   
<Footer/>
    </div>
  );
}

export default News;
