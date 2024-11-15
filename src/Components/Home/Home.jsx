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
 <div   >
 
  <Navbar />
  <Hero />
  <div className="relative" id="home">
  <Feedback />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative" id="home">
      <GetStarted />
      <div className="gradient-04 z-0"  />
      <WhatsNew />
    </div></div>
  <div >
    
  <div className='-pb-32'>
    <World /></div></div>
    <div className="relative " id="products"  >
      <div  >
      <Insights /></div>  
      <div className="gradient-04 z-0" />
      
      </div>
      <div className='-pb-32'>
      
      <Free/>
      </div>
  
      <div  id="about">
      <About />
    </div>
    <Footer />
 
    
   </div>
  )
}

export default Home



