
import { motion } from 'framer-motion';

import styles from '../Style';
import { insights } from '../../constants';
import { staggerContainer } from '../lib/motion';
import { InsightCard, TitleText, TypingText } from './index';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Products" textStyles="text-center text-4xl" />
      <TitleText title={<>We are dedicated to shaping the future with advanced artificial intelligence, cloud computing, and immersive augmented and virtual reality experiences.</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
