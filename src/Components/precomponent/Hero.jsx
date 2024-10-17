import React from 'react';
import ce from "../../assets/anniversaryhero.png";
import bg from '../../assets/herobackground.png';
import { staggerContainer, fadeIn, planetVariants } from '../lib/motion';
import { motion } from 'framer-motion';
import styles from '../Style';


const Hero = () => (
  <section
    className='min-h-screen mt-28 w-full flex flex-col md:flex-row justify-center items-center bg-contain bg-no-repeat'
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
     <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full  flex md:flex-row flex-col `}
    >

  <motion.div
        variants={planetVariants('left')}
        className={`w-full md:w-1/2 flex justify-center items-center  `}

      >

         <img
          src={ce}
          alt="get-started"
          className="w-[70%] h-[70%] md:w-[90%] md:h-[90%] "
        /> 
      </motion.div>
      
{/*     
<div className='w-full md:w-1/2 flex justify-center items-center mt-4 p-10 md:mt-0'>
      <img src={ce} alt="Anniversary Celebration" className='max-w-full  h-auto' />
    </div> */}
 <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className={` w-full md:w-1/2  flex justify-center pt-12 md:pt-0 items-center mx-4 md:mx-0 lg:mx-9 flex-col`}

      >
    {/* <div className='w-full  flex flex-col ml-20 -mt-14 justify-center items-center text-center md:text-left'> */}
    <h1
  className="text-xl md:text-2xl  lg:text-4xl font-bold mb-4 font-serif "
  style={{
    background: "linear-gradient(to right, #EDC967, #D2AC47, #F7EF8A)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  <span className='font-extrabold font-serif  text2xl lg:text-5xl'>Celebrating 3 Years</span> of Innovation at HoloModular
</h1>
      <p className='text-base lg:text-xl text-justify mr-8 font-serif text-gray-200'  >
        At HoloModular, we've spent the past three years shaping the future of technology. From artificial intelligence to cloud computing, augmented, and virtual reality, our passion for innovation drives us to push the boundaries of what's possible. Here's to many more years of groundbreaking achievements!
      </p>
    {/* </div> */}
    </motion.div>
    </motion.div>
    
  </section>
);

export default Hero;
