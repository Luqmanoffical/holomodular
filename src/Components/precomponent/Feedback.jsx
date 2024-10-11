import { motion } from 'framer-motion';
import planet from '../../assets/planet-09.png'
import stamp from '../../assets/stamp.png'
import dany from "../../assets/danny.jpeg"
import styles from '../Style';
import { fadeIn, staggerContainer, zoomIn } from '../lib/motion';
import {Link} from "react-router-dom"

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] text-center sm:leading-[40.32px] leading-[36.32px] text-white">
          Board of Directors
          </h4>
          <div className='flex justify-center py-4 flex-col items-center'>
<img src={dany} alt="logo" className='h-48   rounded-xl' />
<h3 className='font-bold text-lg'>Danny Logsdon</h3>
<h3 className='font-bold text-lg'>Chief Executive Officer</h3>

</div>
          
          <p className="mt-[8px] font-normal text-justify sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Danny is an accomplished business executive and software architect with 25+ years' professional experience. He has helped numerous companies innovate and adapt to digital transformations in his career. He is chief scientist and author of our software products, ServiceBricks and ServiceQuery.   </p>
        </div>

      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
<div 
          className="w-full lg:h-[610px] h-auto min-h-[210px] border object-cover border-[#6A6A6A]  rounded-[40px]"
>
<h4 className="font-bold py-10 sm:text-[32px] text-[26px] text-center sm:leading-[40.32px] leading-[36.32px] text-white">
About HoloModular
          </h4>
       <div className='px-14 '>
         <p className="mt-[8px] font-normal text-justify sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
         HoloModular LLC was found October 2021 in the State of Florida, USA. Our goal is to develop new and innovative technologies to compliment an augmented and virtual reality world.   
          </p>
          <p className="mt-[8px] font-normal text-justify sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          We are multi-disciplined experts in several fields, industries and technologies, which allows us to design, prototype, develop, test, and release products quickly. We offer a wide variety of products and consulting services to help you become more successful.   
          </p>
          <p className="mt-[8px] font-normal border-b border-[#6A6A6A] pb-4 text-justify sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
  Interested in working with us? Let us know how we can help! Contact us at <a href="mailto:Support@HoloModular.com" className="text-purple-700 hover:underline cursor-pointer">Support@HoloModular.com</a>
</p>
</div>
<h4 className="font-bold py-4 sm:text-[24px] text-[24px] text-center sm:leading-[40.32px] leading-[36.32px] text-white">
Impressum
          </h4>
<div className='mx-4'>
<div className="flex flex-col md:flex-row justify-between items-start mt-6">
    
    <div className="mb-6 mt-6 md:mt-0 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Corporate Address:</h2>
      <p className="text-gray-300">5620 Crest Creek Dr</p>
      <p className="text-gray-300">Jacksonville, FL 32258</p>
    </div>
    
    <div className="mb-6 mt-6 md:mt-0 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Contact:</h2>
      <p className="text-gray-300">
        Email: <a href="mailto:Support@HoloModular.com" className="text-purple-600 hover:underline">Support@HoloModular.com</a>
      </p>
      <p className="text-gray-300">
        Website: <a href="https://HoloModular.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">HoloModular.com</a>
      </p>
    </div>
    
    <div className="mb-6 mt-6 md:mt-0 pr-8 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Company Registration:</h2>
      <p className="text-gray-300">State of Florida, USA</p>
    </div>
  </div>


</div>

</div>

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src={stamp}
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
