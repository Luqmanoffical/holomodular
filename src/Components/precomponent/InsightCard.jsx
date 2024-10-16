
import { motion } from 'framer-motion';
import arrow from '../../assets/arrow.svg'
import { fadeIn } from '../lib/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, url }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div  className=" h-[130px]       md:w-[270px] w-full md:h-[200px] rounded-[32px] flex justify-center items-center object-center bg-white">
    <img
      src={imgUrl}
      alt="planet-01"
     className= "p-16 md:p-6    flex self-center"
    /></div>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-red-200xl  text-xl lg:text-3xl text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal  text-base lg:text-xl text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px]  lg:w-[70px] lg:h-[70px] rounded-full bg-transparent border-[1px] border-white">
      <a href={url} target="_blank" className='flex justify-center items-center' rel="noopener noreferrer">
        <img
          src={arrow}
          alt="arrow"
          className=" w-[30%] h-[30%] flex self-center  md:w-[60%]  md:h-[60%] lg:w-[90%]  lg:h-[90%] object-contain"
        />
      </a>
    </div>    </div>
  </motion.div>
);

export default InsightCard;
