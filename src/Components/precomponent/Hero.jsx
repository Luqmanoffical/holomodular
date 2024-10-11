import React from 'react';
import ce from "../../assets/anniversaryhero.png";
import bg from '../../assets/herobackground.png';

const Hero = () => (
  <section
    className='min-h-screen -mt-28 w-full flex flex-col md:flex-row justify-center items-center bg-cover'
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >

<div className='w-full md:w-1/2 flex justify-center items-center mt-4 p-10 md:mt-0'>
      <img src={ce} alt="Anniversary Celebration" className='max-w-full  h-auto' />
    </div>
    <div className='w-full md:w-1/2 flex flex-col ml-20 -mt-14 justify-center items-center text-center md:text-left'>
    <h1
  className="text-4xl md:text-5xl font-bold mb-4 font-serif "
  style={{
    background: "linear-gradient(to right, #EDC967, #D2AC47, #F7EF8A)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Celebrating 3 Years of Innovation at HoloModular
</h1>
      <p className='text-lg md:text-2xl text-justify mr-8 font-serif text-gray-200'  style={{
    background: "linear-gradient(to right, #EDC967, #D2AC47, #F7EF8A)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}>
        At HoloModular, we've spent the past three years shaping the future of technology. From artificial intelligence to cloud computing, augmented, and virtual reality, our passion for innovation drives us to push the boundaries of what's possible. Here's to many more years of groundbreaking achievements!
      </p>
    </div>

  </section>
);

export default Hero;
