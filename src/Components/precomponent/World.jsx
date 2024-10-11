
import { motion } from 'framer-motion';
import map from '../../assets/map.png'
import p1 from '../../assets/people-01.png'
import p2 from '../../assets/people-02.png'
import p3 from '../../assets/people-03.png'

import styles from '../Style';
import { TitleText, TypingText } from './index';
import { fadeIn, staggerContainer } from '../lib/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="Supporting Open Source Software" textStyles="text-center text-3xl" />
      <TitleText
        title={(
          <>We support free and open source software and use the MIT permissive license for our core platforms so that everyone can learn and share.
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
