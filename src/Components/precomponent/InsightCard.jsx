
import { motion } from 'framer-motion';
import arrow from '../../assets/arrow.svg'
import { fadeIn } from '../lib/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, url }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div  className="md:w-[270px] w-full h-[200px] rounded-[32px] flex justify-center items-center object-center bg-white">
    <img
      src={imgUrl}
      alt="planet-01"
     className= "px-4 flex self-center"
    /></div>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-red-200xl text-3xl text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal  text-xl text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-white">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={arrow}
          alt="arrow"
          className="lg:w-[90%]  lg:h-[90%] object-contain"
        />
      </a>
    </div>    </div>
  </motion.div>
);

export default InsightCard;
