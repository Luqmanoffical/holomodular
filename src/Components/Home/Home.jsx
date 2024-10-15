import React from 'react'
import logo from '../../assets/logo.png';
import Navbar from '../precomponent/Navbar';
import Hero from '../precomponent/Hero'; 
import  About  from '../precomponent/About';
import Explore from '../precomponent/Explore';
import  GetStarted  from '../precomponent/GetStarted';
import WhatsNew from '../precomponent/WhatsNew';
import  World  from '../precomponent/World';
import Insights  from '../precomponent/Insights';
import  Feedback  from '../precomponent/Feedback';
import  Footer  from '../precomponent/Footer';
import Free from "../precomponent/Free"
function Home() {
  return (
    <div className="overflow-hidden" >
 
  <Navbar />
 <div  id="hero">
  <Hero /></div>
  <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative"  id="products">
      <Insights />  
      <div className="gradient-04 z-0" />
      <Free/>
      <div  id="about">
      <Feedback />
    </div></div>
    <Footer />
 
    
   </div>
  )
}

export default Home



