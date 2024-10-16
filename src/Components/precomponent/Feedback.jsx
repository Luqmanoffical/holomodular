
import { motion } from 'framer-motion';
import { TypingText } from './index';
import star from "../../assets/arrow-down.svg"
import styles from '../Style';
import { fadeIn, staggerContainer } from '../lib/motion';


const  Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Open Source Company" textStyles="text-center font-bold text-2xl md:text-3xl lg:text-5xl" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal  text-base md:text-lg text-center text-secondary-white"
      >
     We support the open-source community and release our core platforms under the MIT permissive license so that everyone can learn and share.
       </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={star}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default Feedback;







