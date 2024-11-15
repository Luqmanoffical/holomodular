
import { motion } from 'framer-motion';
import start from '../../assets/whats-new.png'
import bricks from '../../assets/globe.png'

import styles from '../Style';
import { newFeatures } from '../../constants';
import { NewFeatures, TitleText, TypingText } from './index';
import { planetVariants, staggerContainer, fadeIn } from '../lib/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<h2 className=' text-2xl lg:text-3xl' >What's new about HoloModular?</h2>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 mt-20 ${styles.flexCenter}`}
      >
      <a href={`https://servicebricks.com/`} target="_blank" rel="noopener noreferrer">

        <img
          src={bricks}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
</a>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
